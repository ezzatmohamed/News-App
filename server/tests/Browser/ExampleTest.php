<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use App\Models\User;
class ExampleTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
        // $response = $this->get('nova/login');
        // $response->assertSee('Welcome Back!');

        $this->browse(function (Browser $browser) {
            // $browser->loginAs(User::find(1))
            //         ->visit('/nova/create-favorite')
            //         ->text('url','www.google3.com')
            //         ->select('user','1')
            //         ->press('Create');
            // $browser->visit('/')->screenshot('tseting')->assertSee('Welcome Back!');
            // $url = $browser->driver->getCurrentURL();
            // $this->assertEquals('/nova/login', $url);
            $browser->visit('/')->screenshot('google');
        });
    }
}
