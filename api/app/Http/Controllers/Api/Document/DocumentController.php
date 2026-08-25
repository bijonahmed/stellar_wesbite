<?php

namespace App\Http\Controllers\Api\Document;

use App\Http\Controllers\Controller;
use App\Models\Document as DocumentModel;
use App\Models\DocumentCategory;
use App\Models\User;
use Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Validator;

class DocumentController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        if (! $user->can('view posts')) {
            return response()->json([
                'message' => 'Unauthorized: You do not have permission to view posts',
            ], 403);
        }

        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);
        $searchQuery = $request->searchQuery;
        $status = $request->selectedFilter;
        $query = DocumentModel::select('documents.*');

        if ($searchQuery !== null) {
            $query->where('documents.name', 'like', '%' . $searchQuery . '%');
        }
        if ($status !== null) {
            if ($status == 1) {
                $query->where('documents.status', 1);
            } elseif ($status == 0) {
                $query->where('documents.status', 0);
            }
        }
        $paginator = $query->paginate($pageSize, ['*'], 'page', $page);
        $modifiedCollection = $paginator->getCollection()->map(function ($item) {
            $categoryName = DocumentCategory::where('id', $item->categoryId)->first();
            $landowner = $item->landowner_id ? User::where('id', $item->landowner_id)->select('name')->first() : null;
            $buyer = $item->buyer_id ? User::where('id', $item->buyer_id)->select('name')->first() : null;

            return [
                'id' => $item->id,
                'category_name' => !empty($categoryName->name) ? $categoryName->name : "",
                'name' => substr($item->name, 0, 250),
                'landowner_name' => !empty($landowner->name) ? $landowner->name : "-",
                'buyer_name' => !empty($buyer->name) ? $buyer->name : "-",
                'user_id' => !empty($item->entry_by) ? $item->entry_by : "-",
                'status' => $item->status,
            ];
        });

        return response()->json([
            'data' => $modifiedCollection,
            'current_page' => $paginator->currentPage(),
            'total_pages' => $paginator->lastPage(),
            'total_records' => $paginator->total(),
        ], 200);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        if (! $user->can('create posts')) {
            return response()->json([
                'message' => 'Unauthorized: You do not have permission to create posts',
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'categoryId' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user_id = $user->id;
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));
        $data = [
            'name' => $request->name,
            'slug' => $slug,
            'description_short' => ! empty($request->description_short) ? $request->description_short : '',
            'description_full' => ! empty($request->description_full) ? $request->description_full : '',
            'meta_title' => ! empty($request->meta_title) ? $request->meta_title : '',
            'meta_description' => ! empty($request->meta_description) ? $request->meta_description : '',
            'meta_keyword' => ! empty($request->meta_keyword) ? $request->meta_keyword : '',
            'categoryId' => ! empty($request->categoryId) ? $request->categoryId : '',
            'landowner_id' => ! empty($request->landowner_id) ? $request->landowner_id : null,
            'buyer_id' => ! empty($request->buyer_id) ? $request->buyer_id : null,
            'user_id' => ! empty($request->landowner_id) ? $request->landowner_id : (! empty($request->buyer_id) ? $request->buyer_id : null),
            'status' => 1,
            'entry_by' => $user_id,
        ];




        if (! empty($request->file('files'))) {
            $files = $request->file('files');
            $fileName = $slug."-".now()->format('Y-m-d_H-i-s');
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['thumnail_img'] = $file_url;
        }

        if (! empty($request->file('document_file'))) {
            $docFile = $request->file('document_file');
            $docFileName = $slug."-".now()->format('Y-m-d_H-i-s');
            $docExt = strtolower($docFile->getClientOriginalExtension());
            $docPath = $docFileName . '.' . $docExt;
            $docUploadPath = '/backend/files/';
            $doc_upload_url = $docUploadPath . $docPath;
            $docFile->move(public_path('/backend/files/'), $doc_upload_url);
            $doc_file_url = $docUploadPath . $docPath;
            $data['document_file'] = $doc_file_url;
        }

        $resdata['product_id'] = DocumentModel::insertGetId($data);

        return response()->json($resdata);
    }

    public function postrow($id)
    {
        $data = DocumentModel::where('documents.id', $id)
            ->select('documents.*', 'document_category.name as category_name')
            ->join('document_category', 'documents.categoryId', '=', 'document_category.id')
            ->first();
        $responseData['data'] = $data;
        $responseData['images'] = ! empty($data->thumnail_img) ? url($data->thumnail_img) : '';
        $responseData['document_file_url'] = ! empty($data->document_file) ? url($data->document_file) : '';

        return response()->json($responseData);
    }

    public function destroy($id)
    {
        $user = Auth::user();

        if (! $user->can('delete posts')) {
            return response()->json([
                'message' => 'Unauthorized: You do not have permission to delete posts',
            ], 403);
        }

        $document = DocumentModel::find($id);
        if (! $document) {
            return response()->json([
                'message' => 'Document not found',
            ], 404);
        }

        return response()->json([
            'message' => 'Document deleted successfully',
            'id' => $id,
        ], 200);
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        if (! $user->can('edit posts')) {
            return response()->json([
                'message' => 'Unauthorized: You do not have permission to edit posts',
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'categoryId' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user_id = $user->id;

        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));
        $data = [
            'name' => $request->name,
            'slug' => $slug,
            'description_short' => ! empty($request->description_short) ? $request->description_short : '',
            'description_full' => ! empty($request->description_full) ? $request->description_full : '',
            'meta_title' => ! empty($request->meta_title) ? $request->meta_title : '',
            'meta_description' => ! empty($request->meta_description) ? $request->meta_description : '',
            'meta_keyword' => ! empty($request->meta_keyword) ? $request->meta_keyword : '',
            'categoryId' => ! empty($request->categoryId) ? $request->categoryId : '',
            'landowner_id' => ! empty($request->landowner_id) ? $request->landowner_id : null,
            'buyer_id' => ! empty($request->buyer_id) ? $request->buyer_id : null,
            'user_id' => ! empty($request->landowner_id) ? $request->landowner_id : (! empty($request->buyer_id) ? $request->buyer_id : null),
            'status' => $request->status !== null ? $request->status : 1,
            'entry_by' => $user_id,
        ];

        if (! empty($request->file('files'))) {
            $files = $request->file('files');
            $fileName = $slug."-".now()->format('Y-m-d_H-i-s');
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['thumnail_img'] = $file_url;
        }

        if (! empty($request->file('document_file'))) {
            $docFile = $request->file('document_file');
            $docFileName =  $slug."-".now()->format('Y-m-d_H-i-s');
            $docExt = strtolower($docFile->getClientOriginalExtension());
            $docPath = $docFileName . '.' . $docExt;
            $docUploadPath = '/backend/files/';
            $doc_upload_url = $docUploadPath . $docPath;
            $docFile->move(public_path('/backend/files/'), $doc_upload_url);
            $doc_file_url = $docUploadPath . $docPath;
            $data['document_file'] = $doc_file_url;
        }

        $data['id'] = $request->id;

        $document = DocumentModel::find($request->id);
        $document->update($data);
        $resdata['product_id'] = $document->id;

        return response()->json($resdata);
    }

    public function documentCategorysearch()
    {
        $data = DocumentCategory::where('status', 1)->get();

        return response()->json($data);
    }
}
