<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class files extends Model
{
    protected $table='files';

    protected $fillable=[
        'id',
        'name',
        'date',
        'file',
        'type',
    ];
}
