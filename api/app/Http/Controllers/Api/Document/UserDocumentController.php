<?php

namespace App\Http\Controllers\Api\Document;

use App\Http\Controllers\Controller;
use App\Models\Document as DocumentModel;
use App\Models\DocumentCategory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserDocumentController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);
        $searchQuery = $request->input('searchQuery');

        $query = DocumentModel::where('user_id', $user->id)
            ->where('status', 1);

        if (!empty($searchQuery)) {
            $query->where('name', 'like', '%' . $searchQuery . '%');
        }

        $paginator = $query->orderBy('id', 'desc')
            ->paginate($pageSize, ['*'], 'page', $page);

        $modifiedCollection = $paginator->getCollection()->map(function ($item) {
            $category = DocumentCategory::where('id', $item->categoryId)->first();

            return [
                'id' => $item->id,
                'name' => $item->name,
                'slug' => $item->slug,
                'description_short' => $item->description_short,
                'description_full' => $item->description_full,
                'category_name' => $category ? $category->name : '',
                'document_file' => $item->document_file ? url($item->document_file) : null,
                'thumnail_img' => $item->thumnail_img ? url($item->thumnail_img) : null,
                'created_at' => $item->created_at ? Carbon::parse($item->created_at)->format('d-m-Y') : '',
            ];
        });

        return response()->json([
            'data' => $modifiedCollection,
            'current_page' => $paginator->currentPage(),
            'total_pages' => $paginator->lastPage(),
            'total_records' => $paginator->total(),
        ], 200);
    }

    public function postrow($id)
    {
        $user = Auth::user();

        $document = DocumentModel::where('id', $id)
            ->where('user_id', $user->id)
            ->where('status', 1)
            ->first();

        if (!$document) {
            return response()->json(['message' => 'Document not found'], 404);
        }

        $category = DocumentCategory::where('id', $document->categoryId)->first();

        return response()->json([
            'data' => [
                'id' => $document->id,
                'name' => $document->name,
                'slug' => $document->slug,
                'description_short' => $document->description_short,
                'description_full' => $document->description_full,
                'category_name' => $category ? $category->name : '',
                'document_file' => $document->document_file ? url($document->document_file) : null,
                'thumnail_img' => $document->thumnail_img ? url($document->thumnail_img) : null,
                'created_at' => $document->created_at ? Carbon::parse($document->created_at)->format('d-m-Y') : '',
            ],
        ], 200);
    }
}
