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
        Schema::create('student_attendance', function (Blueprint $table) {
            

            $table->unsignedBigInteger('student_id');
            $table->string('course_code');
            $table->string('course_name');
            $table->integer('counter_lec');
            $table->integer('counter_sec');
            $table->string('warning_no_1');
            $table->string('warning_no_2');
            $table->string('Banned');
            $table->foreign('course_code')->references('course_code')->on('course');
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
