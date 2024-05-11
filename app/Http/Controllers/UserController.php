<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserStoreRequest;
class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return response()->json([
            'resultats'=>$users
        ],200);
    }
    public function store(Request $request){
        try{
            User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>$request->password,
            ]);
            return response()->json([
                'message'=>'User successfuly create'
            ],200);


        }catch(\Exception $e){
            return response()->json([
                'message'=>'Something went really wrong'
            ],404);
        }

    }
    public function update(Request $request , $id){
        try{
          $user = User::find($id);
          if(!$user){
            return response()->json([
                'message'=>'User not found'
            ],404);

          }
          $user->name = $request->name;
          $user->email = $request->email;
          $user->password = $request->password;
          $user->save();
          return response()->json([
            'message'=>'User successfuly updated'
        ],200);


        }catch(\Exception $e){
            return response()->json([
                'message'=>'Something went really wrong'
            ],404);
        }

    }
    public function show($id){
        $user = User::find($id);
        if(!$user){
            return response()->json([
                'message'=>'User not found'
            ],404);
        }
        return response()->json([
            'User'=>$user
        ],200);
    }
    public function destroy($id){
        $user = User::find($id);

    if(!$user){
        return response()->json([
            'message'=>'User not found'
        ],404);
    }
    $user->delete();

    return response()->json([
        'message'=>'User successfully deleted'
    ],200);
    }
    
}
