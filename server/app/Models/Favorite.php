<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Venturecraft\Revisionable\RevisionableTrait;

class Favorite extends Model
{
    use HasFactory, RevisionableTrait;
    
    protected $revisionCreationsEnabled = true;

    protected $fillable = ['description','publishedAt','title','author','url','urlToImage'];

    public function user() 
    {
        return $this->belongsTo('App\Models\User');
    }
}
