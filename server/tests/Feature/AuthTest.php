<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
class AuthTest extends TestCase
{

    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */

     /** @test */
    public function guests_can_create_new_user(){
        
        //Arrange


        //Act
        $response = $this->post('api/signup',  ['email'=>'test@test.com',
                                                'name' =>'test',
                                                'date_of_birth'=>'2000-12-12']);
        //Assert
        // Confirm that a new record with this email created in the database
        $this->assertDatabaseHas('users',['email'=>'test@test.com']);

        $response->assertStatus(201);
    }

    /** @test */
    public function can_not_register_email_twice(){

        //Arranage
        $response1 = $this->post('api/signup',  ['email'=>'test@test.com',
        'name' =>'test',
        'date_of_birth'=>'2000-12-12']);

        //Act
        $response2 = $this->post('api/signup',  ['email'=>'test@test.com',
        'name' =>'test',
        'date_of_birth'=>'2000-12-12']);

        //Assert
        $response1->assertStatus(201); // first request email success
        $response2->assertStatus(409); // return conflict status code when registering same email
    }

    /** @test */

    public function can_login_with_valid_credentials_and_recieve_token()
    {
        //Arrange
        User::create([
            "email"=>"t@test.com",
            "name" =>"test",
            "date_of_birth"=>"2000-12-12",
            "password"=>bcrypt("12345678")
        ]);

        //Act
        $response = $this->post('api/login',["email"=>"t@test.com",
                                 "password"=>"12345678"]);

        //Assert

        $response->assertStatus(200);
        $response->assertSee('token');

    }

    /** @test */
    public function recieve_error_when_login_with_invalid_credentials()
    {
        //Arrange
        User::create([
            "email"=>"t@test.com",
            "name" =>"test",
            "date_of_birth"=>"2000-12-12",
            "password"=>bcrypt("12345678")
        ]);

        //Act
        $response = $this->post('api/login',["email"=>"t@test.com",
                                             "password"=>"notpassword"]);

        //Assert

        $response->assertStatus(403);
        $response->assertSee('invalid');

    }

    /** @test */
    public function authenticated_user_can_logout()
    {
        //Arrange
        User::create([
            "email"=>"t@test.com",
            "name" =>"test",
            "date_of_birth"=>"2000-12-12",
            "password"=>bcrypt("12345678")
        ]);

        $response = $this->post('api/login',["email"=>"t@test.com",
                                 "password"=>"12345678"]);
        //Act
        $response = $this->get('api/logout');

        //Assert

        $response->assertStatus(200);
        $response->assertSee('Logged out successfully');

    }
}
