<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $fillable = [
        'id',
        'full_name',
        'password',
        'email'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="doctor";

    public function DoctorSchedular()
    {
        return $this->hasOne('App\DoctorSchedular');
    }
}
