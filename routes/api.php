<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CongeController;
use App\Http\Controllers\DepartementController;
use App\Http\Controllers\EmployeController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HopitalController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\AbsentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\HotelFController;
use App\Http\Controllers\InscriptionController;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('employes',[EmployeController::class,'index']);
Route::get('employes/{id}',[EmployeController::class,'show']);
Route::post('addnew',[EmployeController::class,'store']);
Route::put('updateEmploye/{id}',[EmployeController::class,'update']);
Route::delete('deleteEmploye/{id}',[EmployeController::class,'destroy']);
//Routes departemnt
Route::get('departement',[DepartementController::class,'index']);
//Routes hopital
Route::get('hopitaux',[HopitalController::class,'index']);
//Routes hotel
Route::get('hotels',[HotelController::class,'index']);
Route::get('hotelsF',[HotelFController::class,'index']);
//Routes Conge
Route::post('addconge',[CongeController::class,'store']);
Route::patch('conges/{id}', [CongeController::class, 'update']);
Route::get('conges',[CongeController::class,'index']);

//Routes Event
Route::get('events',[EventController::class,'index']);
Route::get('events/{id}',[EventController::class,'show']);
Route::post('addEvent',[EventController::class,'store']);
Route::put('updateEvent/{id}',[EventController::class,'update']);
Route::delete('deleteEvent/{id}',[EventController::class,'destroy']);
Route::patch('incrementInscrit/{eventId}', [EventController::class, 'incrementInscrit']);
//EventInscrit
Route::get('inscrits/{idEvent}',[InscriptionController::class,'index']);
Route::get('inscritsEvent/{idEvent}',[InscriptionController::class,'inscrits']);
Route::delete('deleteInscrits/{id}',[InscriptionController::class,'destroy']);

//Absence
Route::get('absents',[AbsentController::class,'index']);
Route::post('addAbsent',[AbsentController::class,'store']);
Route::patch('absents/{id}', [AbsentController::class, 'update']);

//Admin
Route::post('login',[AuthController::class,'login']);
Route::post('logout',[AuthController::class,'logout']);
Route::get('detailleUser',[AuthController::class,'detailleUser'])->middleware('auth:sanctum');

Route::post('/sendEmail', [EmailController::class, 'sendEmail']);
//Inscription
Route::post('inscriptEvent',[InscriptionController::class,'store']);
Route::post('checkIfAlreadyRegistered/{eventId}',[InscriptionController::class,'checkIfAlreadyRegistered']);