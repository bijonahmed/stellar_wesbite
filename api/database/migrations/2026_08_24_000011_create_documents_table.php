<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->text('description_short')->nullable();
            $table->longText('description_full')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->text('meta_keyword')->nullable();
            $table->unsignedBigInteger('categoryId');
            $table->unsignedBigInteger('entry_by')->nullable();
            $table->string('thumnail_img')->nullable();
            $table->string('document_file')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->timestamps();

            $table->foreign('categoryId')->references('id')->on('document_category');
        });
    }

    public function down()
    {
        Schema::dropIfExists('documents');
    }
};
