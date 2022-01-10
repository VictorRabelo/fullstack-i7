<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\UserController;

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
Route::group(['prefix' =>'/v1'], function() {

    // Users
    Route::group(['prefix' =>'/users'], function() {
        
        Route::get('/',[UserController::class, 'index']);
        Route::get('/{id}',[UserController::class, 'show']);
        
        Route::post('/',[UserController::class, 'store']);
        
        Route::put('/{id}',[UserController::class, 'update']);
        
        Route::delete('/{id}',[UserController::class, 'destroy']);

    });
});