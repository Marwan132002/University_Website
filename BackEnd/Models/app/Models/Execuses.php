<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Execuses extends Model
{
    protected $fillable = [
        'number',
        'state',
        'description',
        'file',
        'student_id'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="execuses";

    public function student()
    {
        return $this->belongsTo('App\Student');
    }
}
