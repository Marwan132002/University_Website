<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = [
        'news_code',
        'description',
        'title',
        'image'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table="news";
}
