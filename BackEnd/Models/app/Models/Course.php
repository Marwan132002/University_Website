<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{

    protected $fillable = [
        'course_code',
        'course_name',
        'type',
        'credit_hours'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="course";

    public function studentcourse()
    {
        return $this->belongsTo('App\Models\StudentCourse');
    }

    public function grades()
    {
        return $this->hasMany('App\Grade');
    }

    public function studentattendance()
    {
        return $this->belongsTo('App\Models\StudentAttendance');
    }

    public function studentschedularcourses()
    {
        return $this->hasMany('App\StudentSchedularCourse');
    }

    public function doctorschedular()
    {
        return $this->belongsTo('App\Models\DoctorSchedular');
    }

    public function teachingassistantschedular()
    {
        return $this->belongsTo('App\Models\TeachingAssistantSchedular');
    }

    public function examshedularcourses()
    {
        return $this->hasMany('App\ExamSchedularCourse');
    }

    public function examcourseschedular()
    {
        return $this->belongsTo('App\Models\exam_course_schedular');
    }

    public function studentexamschedular()
    {
        return $this->belongsTo('App\Models\student_exam_schedular');
    }
}
