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
        Schema::create('grade', function (Blueprint $table) {
            
            $table->unsignedBigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('student');

            $table->string('course_code');
            $table->foreign('course_code')->references('course_code')->on('course');
            $table->string('course_name');
            $table->string('grade');
            $table->string('max_grade');
            $table->string('type');
            
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
