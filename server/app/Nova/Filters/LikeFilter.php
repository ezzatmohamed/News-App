<?php

namespace App\Nova\Filters;

use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;
use DB;
use App\Models\State;
use Laravel\Nova\Filters\BooleanFilter;

class LikeFilter extends BooleanFilter
{
    /**
     * The filter's component.
     *
     * @var string
     */
    public $component = 'select-filter';

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
        // $id = State::where('name','banned')->pluck('id')->first();
        // return $query->WhereIn('id', function($query) use ($id) {
        //                           $query->select('favorite_id')
        //                                 ->from('state_favorite')
        //                                 ->where('state_id', $id);
        //                         });
        return $query;
    }

    /**
     * Get the filter's available options.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function options(Request $request)
    {
        return [
            'Liked' => 'liked',
            'banned' => 'banned',
        ];
    }
}
