<?php

namespace App\Http\Controllers\Api\Document;

use App\Http\Controllers\Controller;
use App\Models\DocumentCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class DocumentCategoryController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        if (! $user->can('view posts category')) {
            return response()->json([
                'message' => 'Unauthorized: You do not have permission to view posts category',
            ], 403);
        }

        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);
        $searchQuery = $request->searchQuery;
        $status = $request->selectedFilter;
        $query = DocumentCategory::select('*');

        if ($searchQuery !== null) {
            $query->where('name', 'like', '%'.$searchQuery.'%');
        }
        if ($status !== null) {
            if ($status == 1) {
                $query->where('status', 1);
            } elseif ($status == 0) {
                $query->where('status', 0);
            }
        }
        $paginator = $query->paginate($pageSize, ['*'], 'page', $page);
        $modifiedCollection = $paginator->getCollection()->map(function ($item) {
            return [
                'id' => $item->id,
                'name' => $item->name,
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
        if (! $user->can('create posts category')) {
            return response()->json([
                'message' => 'Unauthorized: You do not have permission to create posts category',
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = [
            'name' => $request->name,
            'status' => 1,
        ];

        $resdata = DocumentCategory::insertGetId($data);

        return response()->json($resdata);
    }

    public function postrow($id)
    {
        $data = DocumentCategory::where('id', $id)->first();
        $responseData['data'] = $data;

        return response()->json($responseData);
    }

    public function destroy($id)
    {
        $user = Auth::user();

        if (! $user->can('delete posts category')) {
            return response()->json([
                'message' => 'Unauthorized: You do not have permission to delete',
            ], 403);
        }

        $post = DocumentCategory::find($id);
        if (! $post) {
            return response()->json([
                'message' => 'Data not found',
            ], 404);
        }

        return response()->json([
            'message' => 'Deleted successfully',
            'id' => $id,
        ], 200);
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        if (! $user->can('edit posts category')) {
            return response()->json([
                'message' => 'Unauthorized: You do not have permission to edit posts category',
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'status' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = [
            'name' => $request->name,
            'status' => ! empty($request->status) ? $request->status : '',
        ];

        $data['id'] = $request->id;

        $post = DocumentCategory::find($request->id);
        $post->update($data);
        $resdata['id'] = $post->id;

        return response()->json($resdata);
    }
}
