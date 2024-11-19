<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class student_exam_schedular extends Model
{
    use HasFactory;
    protected $fillable = [
        'student_id',
        'hall_code',
        'day',
        'time',
        'date',
        'type',
        'course_name',
        'course_code',
    ];

    protected $table="student_exam_schedular";

    public function setDateAttribute($val){
        $this->attributes['date']=Carbon::createFromFormat('d-m-y',$val)->format('d-m-y');
    }

    public function student_exam_schedular()
    {
        return $this->hasMany('App\Course');
    }

}
