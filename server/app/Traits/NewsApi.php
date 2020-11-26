<?php 

namespace App\Traits;
use Illuminate\Support\Facades\Http;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
trait NewsApi{

    public function getNewsApi($country,$category,$page=1){

        // retrieving the api key from .env 
        $apiKey = env('NEWS_API_KEY','');
        $response = Http::get("http://newsapi.org/v2/top-headlines?country={$country}&category={$category}&apiKey=".$apiKey);
        // $responseSports = Http::get('http://newsapi.org/v2/top-headlines?country={$country}&category=sports&apiKey='.$apiKey);


        if($response['status']==="ok")
            return $this->paginate($response['articles'],6,$page);
        else
            return "error";
    }

    public function paginate($items, $perPage = 5, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }
}