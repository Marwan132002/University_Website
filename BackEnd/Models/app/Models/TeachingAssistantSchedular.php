<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeachingAssistantSchedular extends Model
{
    protected $fillable = [
        'teaching_assistant_id',
        'teaching_assistant_name',
        'course_code',
        'course_name',
        'time',
        'day',
        'hall_code'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="teaching_assistant_schedular";

    public function TeachingAssistant()
    {
        return $this->belongsTo('App\TeachingAssistant');
    }

    public function courses()
    {
        return $this->hasMany('App\Course');
    }
}
