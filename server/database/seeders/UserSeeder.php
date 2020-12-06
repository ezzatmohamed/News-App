<?php

namespace Database\Seeders;
use Bouncer;

use App\Models\User;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $admin = new User();
            $admin->name= "yodawyAdmin";
            $admin->email= "admin@admin.com";
            $admin->date_of_birth= "12-12-2002";
            $admin->password= bcrypt("12345678");
            $admin->save();
            
        Bouncer::assign('admin')->to($admin);

        $user = new User();
        $user->name= "yodawyUser";
        $user->email= "user@user.com";
        $user->date_of_birth= "12-12-2002";
        $user->password= bcrypt("12345678");
        $user->save();
        
        Bouncer::assign('regular')->to($user);

    }
}
