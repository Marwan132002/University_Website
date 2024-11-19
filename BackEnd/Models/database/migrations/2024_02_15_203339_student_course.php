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
        Schema::create('student_course', function (Blueprint $table) {

            $table->unsignedBigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('student');
            
            $table->string('course_name');
            $table->string('credit_hours');
            $table->string('type');

            $table->string('course_code');
            $table->foreign('course_code')->references('course_code')->on('course');
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
