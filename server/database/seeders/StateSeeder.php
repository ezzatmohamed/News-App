<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\State;
use DB;
class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::insert('insert into states (name) values (?)', ['liked']);
        DB::insert('insert into states (name) values (?)', ['banned']);

    }
}
