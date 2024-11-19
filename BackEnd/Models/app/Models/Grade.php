<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $fillable = [
        'student_id',
        'course_code',
        'course_name',
        'grade',
        'type',
        'max_grade',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="grade";

    public function student()
    {
        return $this->belongsTo('App\Student');
    }

    public function course()
    {
        return $this->belongsTo('App\Course');
    }

    
}
