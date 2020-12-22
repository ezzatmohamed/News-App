<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStateFavoriteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('state_favorite', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('favorite_id')->unsigned();
            $table->foreign('favorite_id')->references('id')->on('favorites');


            $table->bigInteger('state_id')->unsigned();
            $table->foreign('state_id')->references('id')->on('states');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('state_favorite');
    }
}
