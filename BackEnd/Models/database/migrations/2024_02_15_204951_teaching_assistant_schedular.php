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
        Schema::create('teaching_assistant_schedular', function (Blueprint $table) {

            $table->unsignedBigInteger('teaching_assistant_id');
            $table->string('teaching_assistant_name');
            $table->string('hall_code');       
            $table->string('course_code');       
            $table->string('course_name');       
            $table->float('time');    
            $table->string('day');
            $table->foreign('teaching_assistant_id')->references('id')->on('teaching_assistant');
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
