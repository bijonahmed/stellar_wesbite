<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class Categories extends Authenticatable
{
    use HasFactory, Notifiable;
    public $table = "categorys";
    protected $fillable = [
        'name',
        'slug',
        'parent_id',
        'sort_order',
        'tabs_status',
        'status',
    ];

     
}
