<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Training extends Model
{
    protected $fillable = [
            'id',
            'name',
            'company_name',
            'details',
            'location',
            'date',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="training";

    public function students()
    {
        return $this->hasMany('App\Models\Student');
    }
}
