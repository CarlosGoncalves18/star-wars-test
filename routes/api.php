<?php

use App\Http\Controllers\SwapiController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::get('people', [SwapiController::class, 'getPeople']);
Route::get('planets', [SwapiController::class, 'getPlanets']);
Route::get('starships', [SwapiController::class, 'getStarships']);
Route::get('/people/search', [SwapiController::class, 'searchPeople']);