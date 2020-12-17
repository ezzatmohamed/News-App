<?php

namespace App\Nova\Filters;

use DB;
use App\Models\State;
use Illuminate\Http\Request;
use Laravel\Nova\Filters\BooleanFilter;

class FavoriteState extends BooleanFilter
{
    /**
     * Apply the filter to the given query.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply(Request $request, $query, $value)
    {
        $ids = array();
        foreach ($value as $key => $v)
            if($v)
                array_push($ids,State::where('name',$key)->pluck('id')->first());

        if(count($ids) === 0 )
            return $query;

        if(array_key_exists("no state",$value))
            $no_state = $value["no state"];
        else
            $no_state = false;
        
        return $query->WhereIn('id', function($query) use ($ids) {
                                  $query->select('favorite_id')
                                        ->from('state_favorite')
                                        ->whereIn('state_id', $ids);
                                })
                        ->orWhere(function($query) use ($ids,$no_state){
                            if($no_state)
                            {
                                $query->whereNotIn('id',function($query){
                                    $query->select('favorite_id')
                                          ->from('state_favorite');
                                  } );
                            }
                        });
    }

    /**
     * Get the filter's available options.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function options(Request $request)
    {
        $filter = State::pluck('name','name')->toArray();
        $filter["no state"]="no state"; 
        return $filter;
    }
}
