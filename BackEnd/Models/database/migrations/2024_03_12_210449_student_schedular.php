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
        Schema::create('student_schedular', function (Blueprint $table) {
            $table->unsignedBigInteger('student_id');
            $table->string('hall_code_lec');
            $table->string('hall_code_sec');
            $table->string('day_lec');
            $table->string('day_sec');
            $table->float('time_lec');
            $table->float('time_sec');
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
