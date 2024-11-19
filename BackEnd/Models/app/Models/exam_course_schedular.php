<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class exam_course_schedular extends Model
{
    use HasFactory;
    protected $fillable = [
        'hall_code',
        'type',
        'date',
        'day',
        'time',
        'course_name',
        'course_code',
    ];
    protected $table="exam_course_schedular";

    
    public function exam_course_schedular()
    {
        return $this->hasMany('App\Course');
    }

}
