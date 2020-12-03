<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\BelongsToMany;

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
    
    public static $with = ['users'];

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


            Text::make('title')
            ->sortable()
            ->rules('max:255'),
            
            Text::make('author')
            ->sortable()
            ->rules('max:255'),

            Text::make('description')
            ->sortable()
            ->rules('max:255'),


            Text::make('urlToImage','urlToImage')
            ->sortable()
            ->rules('required', 'max:255'),

            Text::make('publishedAt','publishedAt')
            ->sortable()
            ->rules('max:255'),


            Text::make('url')
            ->sortable()
            ->rules('required', 'max:255')
            ->creationRules('unique:favorites,url')
            ->updateRules('unique:favorites,url,{{resourceId}}'),
            BelongsToMany::make('Users')
            ];
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
        return [];
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
