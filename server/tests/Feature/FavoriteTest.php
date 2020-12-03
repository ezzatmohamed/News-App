<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Favorite;
use Illuminate\Support\Facades\DB;
class FavoriteTest extends TestCase
{

    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */

    /** @test */
   
    
     public function user_can_add_news_into_favorite()
    {
        //Arrange
        $user = User::create([
            "email"=>"t@test.com",
            "name" =>"test",
            "date_of_birth"=>"2000-12-12",
            "password"=>bcrypt("12345678")
        ]);
        $this->post('api/login',["email"=>"t@test.com","password"=>"12345678"]);

        //Act
        $response = $this->post('api/favorite',[
            "url"=>"test.com",
            "urlToImage"=>"test.com/a.jpg",
            "title"=>"test",
            "description"=>"testing",
            "author"=>"tester",
            "publishedAt"=>"2001-12-12"
        ]);
        
        $favorite = Favorite::where('url','test.com')->first();
        
        //Assert

        // Check a new record for the favorite inserted in the favorite table
        $this->assertDatabaseHas('favorites',['url'=>'test.com']);
        // Check a new record holds relation bewteen favorite and user
        $this->assertDatabaseHas('user_favorite',['user_id'=>$user->id,'favorite_id'=>$favorite->id]);
        $response->assertStatus(201);
    }

    /** @test */
   
    
    public function invalid_response_when_guests_try_favorite_news()
    {
        //Arrange

        //Act
        $response = $this->post('api/favorite',[
            "url"=>"test.com",
            "urlToImage"=>"test.com/a.jpg",
            "title"=>"test",
            "description"=>"testing",
            "author"=>"tester",
            "publishedAt"=>"2001-12-12"
    
        ]);
        
        
        //Assert
        $response->assertStatus(401); // unauthenticated
    }

     /** @test */
   
    
    public function user_can_remove_news_from_favorite()
    {
        //Arrange
        $user = User::create([
            "email"=>"t@test.com",
            "name" =>"test",
            "date_of_birth"=>"2000-12-12",
            "password"=>bcrypt("12345678")
        ]);
        $response = $this->post('api/login',["email"=>"t@test.com","password"=>"12345678"]);
        
        $favorite = Favorite::create([
            "url"=>"test.com",
            "urlToImage"=>"test.com/a.jpg",
            "title"=>"test",
            "description"=>"testing",
            "author"=>"tester",
            "publishedAt"=>"2001-12-12"
        ]);
        DB::insert('insert into user_favorite (user_id, favorite_id) values (?, ?)', [$user->id, $favorite->id]);

        //Act
        
        $response = $this->call('DELETE', 'api/favorite/'.$favorite->id);
        
        
        //Assert
        $this->assertDatabaseMissing('user_favorite',['user_id'=>$user->id,'favorite_id'=>$favorite->id]);
        $response->assertStatus(202);
    }
    /** @test */
    public function error_response_when_add_new_to_favorite_more_than_onew()
    {
        //Arrange
        $user = User::create([
            "email"=>"t@test.com",
            "name" =>"test",
            "date_of_birth"=>"2000-12-12",
            "password"=>bcrypt("12345678")
        ]);
        $response = $this->post('api/login',["email"=>"t@test.com","password"=>"12345678"]);
        $news= [
            "url"=>"test.com",
            "urlToImage"=>"test.com/a.jpg",
            "title"=>"test",
            "description"=>"testing",
            "author"=>"tester",
            "publishedAt"=>"2001-12-12"
        ];
        $favorite = Favorite::create($news);
        DB::insert('insert into user_favorite (user_id, favorite_id) values (?, ?)', [$user->id, $favorite->id]);

        //Act
        
        $response = $this->call('POST', 'api/favorite/',$news);
        
        
        //Assert
        $response->assertStatus(409);
    }

}
