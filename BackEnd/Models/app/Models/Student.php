<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'id',
        'full_name',
        'gpa',
        'cgpa',
        'email',
        'password',
        'type',
        'accademic_advisor',
        'training_id',

    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="student";

    public function ExamSchedular()
    {
        return $this->hasOne('App\ExamSchedular');
    }

    public function StudentSchedular()
    {
        return $this->hasOne('App\StudentSchedular');
    }

    public function training()
    {
        return $this->belongsTo('App\Training');
    }

    public function grades()
    {
        return $this->hasMany('App\Models\Grade');
    }

    public function execuses()
    {
        return $this->hasMany('App\Models\Execuses');
    }

    public function studentcourse()
    {
        return $this->belongsTo('App\StudentCourse');
    }

    public function studentattendances()
    {
        return $this->hasMany('App\StudentAttendance');
    }
}
