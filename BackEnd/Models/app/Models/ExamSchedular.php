<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamSchedular extends Model
{
    protected $fillable = [
        'student_id',
        'hall_code',
        'type',
        'date',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="exam_schedular";

    public function Student()
    {
        return $this->belongsTo('App\Student');
    }

    public function examschedularcourses()
    {
        return $this->hasMany('App\ExamSchedularCourse');
    }
}
