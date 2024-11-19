<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentSchedular extends Model
{
    protected $fillable = [
        'student_id',
        'course_name',
        'course_code',
        'hall_code_lec',
        'hall_code_sec',
        'day_lec',
        'day_sec',
        'time_lec',
        'time_sec',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="student_schedular";

    
    public function Student()
    {
        return $this->belongsTo('App\Student');
    }

    public function studentschedularcourse()
    {
        return $this->hasMany('App\StudentSchedularCourse');
    }
}
