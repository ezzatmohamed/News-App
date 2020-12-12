<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\Gravatar;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\MorphToMany;
use Laravel\Nova\Http\Requests\NovaRequest;

class User extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\User::class;

    // public static $group = 'admin';
    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';
    public static $with = ['favorites'];

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id', 'name', 'email',
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
            ID::make()->sortable(),

            Text::make('Name','name')
                ->sortable()
                ->rules('required', 'max:255'),

                MorphToMany::make('Roles', 'roles', 'Yadahan\BouncerTool\Nova\Role')->fields(function () {
                    return [
                        Text::make('Scope')
                            ->sortable()
                            ->rules('nullable', 'integer'),
                    ];
                }),
        
                MorphToMany::make('Abilities', 'abilities', 'Yadahan\BouncerTool\Nova\Ability')
                    ->fields(new \Yadahan\BouncerTool\Nova\PermissionsFields),
                    
            Text::make('Email','email')
            ->sortable()
            ->rules('required', 'email', 'max:254')
            ->creationRules('unique:users,email')
            ->updateRules('unique:users,email,{{resourceId}}'),

            Date::make('Date Of Birth','date_of_birth')
            ->sortable()
            ->rules('required', 'max:255'),
            
            Password::make('Password','password')   
                ->onlyOnForms()
                ->creationRules('required', 'string', 'min:8')
                ->updateRules('nullable', 'string', 'min:8'),
            
            HasMany::make('Favorites')

        ];
    }

    // Return all users for admin 
    public static function indexQuery(NovaRequest $request, $query)
    {
        if( $request->user()->isAn('admin') )
            return $query;
        return $query->where('id', $request->user()->id);
    }


    // Display resources in the Nav-Bar for admins onlyf
    public static function availableForNavigation(Request $request)
    {
        return $request->user()->isAn('admin');
    }

    public static function relatableQuery(NovaRequest $request, $query)
    {
        if($request->user()->isAn('admin') ||  $query->where('id', $request->user()->id) )
            return $query;
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
