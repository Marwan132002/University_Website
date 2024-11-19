<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeachingAssistant extends Model
{
    protected $fillable = [
        'id',
        'full_name',
        'password',
        'email',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="teaching_assistant";

    public function TeachingAssistantSchedular()
    {
        return $this->hasOne('App\TeachingAssistantSchedular');
    }
}

