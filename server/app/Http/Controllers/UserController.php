<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    //

    public function signup(Request $request)
    {
        try{
            $rules = [
                'name' => 'required|string|max:30',
                'date_of_birth' => 'required|date',
                'email' => 'required|email'
            ];
            $credentials = Validator::make($request->all(),$rules);

            if($credentials->fails()){
                return response(['message'=>'invalid inputs'],422);
            }

            $user = User::where('email','=',$request->email)->first();
            if($user)
                return response(['message'=>'email already exists!'],409);

            // $data = request()->only('email','name','password','date_of_birth');

            $generatedPassword = Str::random(25);
            // return $request['date_of_birth'];
            $user = new User();
            $user->name= $request['name'];
            $user->email= $request['email'];
            $user->date_of_birth= $request['date_of_birth'];
            $user->password= bcrypt($generatedPassword);
            $user->save();

            Mail::to($request['email'])->send(new WelcomeMail($generatedPassword));

            return response(['message'=>'Registered successfully ! Password has been sent to your email.'],201);
        }
        catch(Exception $e)
        {
            return response(['message'=>'invalid inputs'],422);
        }
    }
    public function login(Request $request)
    {
        $rules = [
            'password' => 'required|string',
            'email' => 'required|email'
        ];
        $credentials = Validator::make($request->all(),$rules);
        if($credentials->fails()){
            return response(['message'=>'invalid inputs'],422);
        }

        $token = auth()->attempt($request->all());
        if(!$token)
            return response(['message'=>"invalid credentials"],401);

        // $token = Auth::user()->createToken('token')->accessToken;
        return response(['token'=>$token ],200);

    }
}
