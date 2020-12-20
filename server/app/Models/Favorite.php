<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Venturecraft\Revisionable\RevisionableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;

class Favorite extends Model
{
    use HasFactory, RevisionableTrait;
    use SoftDeletes;
    
    protected $revisionCreationsEnabled = true;
    protected $revisionCleanup = true;   
    protected $historyLimit = 500; 


    protected $fillable = ['description','publishedAt','title','author','url','urlToImage'];

    public function user() 
    {
        return $this->belongsTo('App\Models\User');
    }

    public function states() 
    {
        return $this->belongsToMany('App\Models\State','state_favorite');
    }
}
