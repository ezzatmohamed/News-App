<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
class CreateFavoriteTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    use WithFaker;
    public function testExample()
    {
        $url = $this->faker->url();
        $date = $this->faker->date('m-d-Y');
        $title = $this->faker->word();
        $author = $this->faker->word();
        $description = $this->faker->word();
        $image = $this->faker->url();
        
        $this->browse(function (Browser $browser) use($url,$date,$title,$author,$description,$image) {
            $browser->loginAs(User::find(1))
                    ->visit('nova/create-favorite')
                    ->type('url',$url)
                    ->type('urlToImage',$image)
                    ->type('author',$author)
                    ->type('description',$description)
                    ->type('title',$title)
                    ->type('publishedAt',$date)
                    ->select('user')
                    ->press('Create')
                    ->pause(300);
        });
        $this->assertDatabaseHas('favorites',[
            'url'=>$url,
            'urlToImage'=>$image,
            'author'=>$author,
            'title'=>$title,
            'description'=>$description
        ]);

        
    }
}
