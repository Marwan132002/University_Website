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
        Schema::create('student_exam_schedular', function (Blueprint $table) {
            $table->unsignedBigInteger('student_id');
            $table->string('hall_code');
            $table->string('day');
            $table->float('time');
            $table->string('date');
            $table->string('type');
            $table->string('course_name');
            $table->string('course_code');
            $table->foreign('student_id')->references('id')->on('student');
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
