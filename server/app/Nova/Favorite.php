<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\BelongsTo;

class Favorite extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\Favorite::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'title';
    public static $with = ['user'];

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id','description','title','author'
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            ID::make(__('ID'), 'id')->sortable(),


            Text::make('Title','title')
            ->sortable()
            ->rules('max:255'),
            
            Text::make('Created at','created_at')
            ->sortable()
            ->hideWhenCreating()
            ->hideWhenUpdating(),

            Text::make('Author','author')
            ->sortable()
            ->rules('max:255'),

            Text::make('Description','description')
            ->sortable()
            ->rules('max:255'),


            Text::make('Image','urlToImage')
            ->sortable()
            ->rules('max:255'),

            Text::make('Date','publishedAt')
            ->sortable()
            ->rules('max:255'),


            Text::make('Link','url')
            ->sortable()
            ->rules('required', 'max:255'),

            Boolean::make('Liked','liked'),
            BelongsTo::make('User'),

            Text::make('email','email', function () {
                if($this->user&& $this->user->email)
                    return $this->user->email;
            })->onlyOnIndex(),

            ];
    }

    // Return all favorites for admin but for regulars,return only their favorites
    public static function indexQuery(NovaRequest $request, $query)
    {  
        if( $request->user()->isAn('admin') )
            return $query;
        return $query->where('user_id', $request->user()->id);
    }


    // Display resources in the Nav-Bar for admins onlyf
    public static function availableForNavigation(Request $request)
    {
        return $request->user()->isAn('admin');
    }
    
    /**
     * Get the cards available for the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [
            new Filters\FavoriteByUser,
            new Filters\CreatedBefore,
            new Filters\CreatedAfter,
            new Filters\LikeFilter,
        ];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
