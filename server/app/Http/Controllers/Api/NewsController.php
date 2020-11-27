<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Traits\NewsApi;

class NewsController extends Controller
{
    
    use NewsApi;

    public function index(Request $request){

        $country;
        $category;
        if($request->query('country') == 1)
            $country = "EG";
        else
            $country="AE";
        if($request->query('category') == 1)
            $category = "business";
        else
            $category="sports";
        $page = $request->query('page');

        $response = $this->getNewsApi($country,$category,$page);

        if($response === "error"){
            return response(['message'=>'Error fetching news'],500);
        }
        return $response;
    }
}
