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
        Schema::create('doctor_schedular', function (Blueprint $table) {
            

            $table->unsignedBigInteger('doctor_id');
            $table->string('doctor_name');
            $table->string('hall_code');
            $table->string('day');
            $table->float('time');
            $table->string('course_name');
            $table->string('course_code');
            $table->foreign('course_code')->references('course_code')->on('course');
            $table->foreign('doctor_id')->references('id')->on('doctor');
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
