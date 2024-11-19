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
        Schema::create('student', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->primary();
            $table->string('full_name');
            $table->float('gpa');
            $table->float('cgpa');
            $table->string('email');
            $table->string('password');
            $table->string('type');
            $table->string('accademic_advisor');
            $table->timestamps();

            $table->unsignedBigInteger('training_id')->nullable();
            $table->foreign('training_id')->references('id')->on('training');

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
