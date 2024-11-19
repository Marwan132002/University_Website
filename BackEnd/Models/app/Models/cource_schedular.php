<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cource_schedular extends Model
{
    use HasFactory;
    protected $fillable=[
    'course_code',
    'course_name',
    'hall_code_lec',
    'hall_code_sec',
    'day_lec',
    'day_sec',
    'time_lec',
    'time_sec'];

    protected $table="cource_schedular";
}
