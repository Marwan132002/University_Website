<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentAttendance extends Model
{
    protected $fillable = [
        'student_id',
        'course_code',
        'course_name',
        'counter_lec',
        'counter_sec',
        'warning_no_1',
        'warning_no_2',
        'Banned'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="student_attendance";

    public function courses()
    {
        return $this->hasMany('App\Course');
    }

    public function student()
    {
        return $this->belongsTo('App\Student');
    }
}
