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
        Schema::create('cource_schedular', function (Blueprint $table) {
            $table->string('course_code');
            $table->string('course_name');
            $table->foreign('course_code')->references('course_code')->on('course');
            $table->string('hall_code_lec');
            $table->string('hall_code_sec');
            $table->string('day_lec');
            $table->string('day_sec');
            $table->float('time_lec');
            $table->float('time_sec');

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
