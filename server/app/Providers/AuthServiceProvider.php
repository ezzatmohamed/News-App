<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        App\Models\User::class => \App\Policies\UserPolicy::class,
        App\Models\Favorite::class => \App\Policies\FavoritePolicy::class,
        \Silber\Bouncer\Database\Role::class => \App\Policies\RolePolicy::class,
        \Silber\Bouncer\Database\Ability::class => \App\Policies\AbilityPolicy::class,

    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
