<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentCourse extends Model
{
    protected $fillable = [
        'student_id',
        'course_code',
        'course_name',
        'credit_hours',
        'type'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="student_course";

    public function students()
    {
        return $this->hasMany('App\Models\Student');
    }

    public function courses()
    {
        return $this->hasMany('App\Models\Course');
    }
}
