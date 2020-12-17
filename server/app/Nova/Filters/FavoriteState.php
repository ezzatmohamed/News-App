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
        foreach(array_keys($value) as $id)
            if($value[$id])
                array_push($ids,$id);

        if(count($ids) === 0 )
            return $query;

        $no_state = array_key_exists("no state",$value) ? $value["no state"] : false;
        
        return $query->where(function($query) use($ids,$no_state){
                
                // Get favorites with the specified states
                $query->whereHas('states', function($query) use ($ids) {
                            $query->whereIn('state_id',$ids);
                     })->orWhere(function($query) use ($ids,$no_state){
                         // Get favorites that have no state
                            if($no_state)
                                $query->doesntHave('states');
                    });
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
        $filter = State::pluck('id','name')->toArray();
        $filter["no state"]="no state"; 
        return $filter;
    }
}
