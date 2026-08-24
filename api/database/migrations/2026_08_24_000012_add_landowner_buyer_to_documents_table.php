<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->unsignedBigInteger('landowner_id')->nullable()->after('categoryId');
            $table->unsignedBigInteger('buyer_id')->nullable()->after('landowner_id');
            $table->unsignedBigInteger('user_id')->nullable()->after('buyer_id');
        });
    }

    public function down()
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->dropColumn(['landowner_id', 'buyer_id', 'user_id']);
        });
    }
};
