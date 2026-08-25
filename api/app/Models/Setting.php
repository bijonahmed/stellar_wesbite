<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class Setting extends Authenticatable
{
    use HasFactory, Notifiable;

    public $table = "setting";
    
     protected $fillable = [
        'name',
        'tel',
        'email',
        'address',
        'whatsApp',
        'bkash_number',
        'emergency',
        'photo',
        'description',
        'copyright',
        'status',
        'admin_photo',
        'admin_name',
        'admin_email',
        'admin_phone',
        'meta_keywords',
        'meta_description',
        'pphoto',
        'bg_color',
        'currency',
        'reffer_bonus',
        'fblink',
        'twitterlink',
        'linkdinlink',
        'instragramlink',
        'store_policy',
        'website',
        'telegram',
        'devliery_charge_inside_dhk',
        'devliery_charge_outside_dhk',
        'register_bonus',
        'promotional_banner',
        'level_1_bonus',
        'level_2_bonus',
    ];

}
