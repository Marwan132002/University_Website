<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamSchedularCourse extends Model
{
    protected $fillable = [
        'student_id',
        'course_code',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="exam_schedular_course";

    public function ExamSchedular()
    {
        return $this->belongsTo('App\ExamSchedular');
    }

    public function Course()
    {
        return $this->belongsTo('App\Course');
    }
}
