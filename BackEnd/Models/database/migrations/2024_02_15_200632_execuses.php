<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('execuses', function (Blueprint $table) {
            $table->id('number');
            $table->string('state')->nullable();
            $table->string('description');
            
            $table->string('file');

            $table->unsignedBigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('student');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
