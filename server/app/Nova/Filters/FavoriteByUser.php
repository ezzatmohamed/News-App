<?php

namespace App\Nova\Filters;
// use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;
use \App\Models\User;
class FavoriteByUser extends Filter
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
        return $query->where('user_id',$value);
    }

    /**
     * Get the filter's available options.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function options(Request $request)
    {
        
        // retrieving all users
        $users = User::all();

        $filter = [];
        
        // Creating filter array { email => id}
        foreach($users as $user)        
            $filter[$user->email]=$user->id;

        return $filter;
    }
}
