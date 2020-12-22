<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
class ExampleTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     */
    use WithFaker;
    public function testBasicExample()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/nova')
                    ->assertSee('Welcome');
        });
    }
}
