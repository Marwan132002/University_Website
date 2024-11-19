<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DoctorSchedular extends Model
{
    protected $fillable = [
        'doctor_id',
        'doctor_name',
        'course_code',
        'time',
        'day',
        'hall_code',
        'course_name'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="doctor_schedular";

    public function Doctor()
    {
        return $this->belongsTo('App\Doctor');
    }
    
    public function courses()
    {
        return $this->hasMany('App\Course');
    }
}
