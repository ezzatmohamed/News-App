<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  App\Models\User;
use  App\Models\Favorite;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    public function index(Request $request)
    {
        try{
            $favorites = auth()->user()->favorites()->paginate(6);
            return response(['data'=>$favorites],200);
        }
        catch(Exception $e){
            return response(['message'=>'An Error Occured'],500);
        }

    }
    public function create(Request $request)
    {
        try{    
                $rules = [
                    'description' => 'string|max:255',
                    'publishedAt' => 'string|max:255',
                    'title' => 'string|max:255',
                    'author' => 'string|max:255',
                    'url' => 'required|string|max:255',
                    'urlToImage' => 'string|max:255'
                ];
                $dataValidate = Validator::make($request->all(),$rules);
                // Check if Inputes are valid
                if($dataValidate->fails()){
                    return response(['message'=>'invalid inputs'],422);
                }

                $data = request()->only('description','publishedAt','title','author','url','urlToImage');

                // retrieve favorite if exists or Creating new record
                $favorite = Favorite::where('url',$data['url'])->first();
                if(!$favorite)
                    $favorite = Favorite::create( $data);

                $user = auth()->user();

                // Check if user already favorite this article or not 
                if(!$user->favorites->contains($favorite->id))
                {
                    $user->favorites()->attach($favorite);
                    return response(['message'=>"Added to favorite successfully!"],201);
                }
                else{
                    return response(['message'=>"Already exists in favorites!"],409);
                }
                return $favorite;
        }
        catch(Exception $e)
        {
            return response(['message'=>'An Error Occured'],500);
        }
    }
    public function delete(Request $request,$id)
    {
        try{
            $user = auth()->user();
            if( !$user->favorites->contains($id) )
            {
                return response(['message'=>"This article is not in your favorites!"],409);
            }
            $user->favorites()->detach($id);
            return response(['message'=>"Article has been deleted from your favorites!"],202);

        }
        catch(Exception $e)
        {
            return response(['message'=>'An Error Occured'],500);
        }
    }

}
