<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;
    protected $fillable = ['description','publishedAt','title','author','url','urlToImage'];

    public function users() 
    {
        return $this->belongsToMany('App\Models\User','user_favorite');
    }
}
