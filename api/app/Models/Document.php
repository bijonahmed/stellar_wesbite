<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;

class Document extends Authenticatable
{
    use HasFactory, Notifiable;
    public $table = "documents";
    protected $fillable = [
        'name',
        'slug',
        'description_short',
        'description_full',
        'meta_title',
        'meta_description',
        'meta_keyword',
        'categoryId',
        'landowner_id',
        'buyer_id',
        'user_id',
        'entry_by',
        'thumnail_img',
        'document_file',
        'created_at',
        'status'
    ];
}
