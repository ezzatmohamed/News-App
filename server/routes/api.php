<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\FavoriteController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::post('/signup','UserController@signup');
Route::post('signup',[UserController::class, 'signup']);
Route::post('login', [UserController::class, 'login']);

Route::group(['middleware'=>['CheckAuth']],function(){
    Route::get('news',[NewsController::class, 'index'])->middleware('auth:api');
    Route::get('favorites',[FavoriteController::class, 'index']);
    Route::post('favorite/',[FavoriteController::class, 'create']);
    Route::delete('favorite/{id}',[FavoriteController::class, 'delete'])->middleware('CheckAuth');
    Route::get('logout', [UserController::class, 'logout']);
});