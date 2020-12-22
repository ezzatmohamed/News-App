<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    use HasFactory;

    public function favorites() 
    {
        return $this->belongsToMany('App\Models\Favorite','state_favorite');
    }

}
