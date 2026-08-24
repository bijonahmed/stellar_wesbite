<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;

class DocumentCategory extends Authenticatable
{
    use HasFactory, Notifiable;
    public $table = "document_category";
    protected $fillable = [
        'name',
        'status',
    ];
}
