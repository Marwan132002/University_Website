<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentSchedularCourse extends Model
{
    protected $fillable = [
        'student_id',
        'course_code',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="schedular_course";

    public function course()
    {
        return $this->belongsTo('App\Models\Course');
    }

    public function StudentSchedular()
    {
        return $this->belongsTo('App\Models\StudentSchedular');
    }
}
