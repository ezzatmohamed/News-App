<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class NewsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */

    /** @test */
    public function guests_can_not_recieve_news()
    {
        //Arrange


        //Act
        $response = $this->get('api/news');

        //Assert
        $response->assertStatus(401);
    }
    /** @test */
    public function users_can_visit_news_successfully()
    {
        //Arrange
        User::create([
            "email"=>"t@test.com",
            "name" =>"test",
            "date_of_birth"=>"2000-12-12",
            "password"=>bcrypt("12345678")
        ]);
        $this->post('api/login',["email"=>"t@test.com","password"=>"12345678"]);

        //Act
        $response = $this->get('api/news');

        //Assert
        $response->assertStatus(200);
    }
}
