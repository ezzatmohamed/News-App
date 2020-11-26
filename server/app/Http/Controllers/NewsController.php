<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Traits\NewsApi;

class NewsController extends Controller
{
    use NewsApi;

    public function index(Request $request){

        $country;
        if($request->query('country') == 1)
            $country = "EG";
        else
            $country="AE";
        $page = $request->query('page');

        $response = $this->getNewsApi($country,$page);

        if($response === "error"){
            return response(['message'=>'Error fetching news'],500);
        }
        return $response;
    }
}
