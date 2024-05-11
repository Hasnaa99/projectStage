<?php

namespace App\Http\Controllers;
use App\Http\Requests\EmployeStoreRequest;
use App\Http\Requests\EmployeUpdateRequest;
use App\Models\Employe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class EmployeController extends Controller
{
    public function index(){
        $employees = Employe::with('admin')->get();
        return response()->json([
            'resultats' => $employees
        ], 200);
    }
    public function store(EmployeStoreRequest $request){
        try{
            Employe::create([
                'cin'=>$request->cin,
                'nom'=>$request->nom,
                'prenom'=>$request->prenom,
                'date_naissance'=>$request->date_naissance,
                'date_embauche'=>$request->date_embauche,
                'situation_familiale'=>$request->situation_familiale,
                'nbr_enfants'=>$request->nbr_enfants,
                'email'=>$request->email,
                'telephone'=>$request->telephone,
                'adresse'=>$request->adresse,
                'post'=>$request->post,
                'salaire'=>$request->salaire,
                'admin_id'=>$request->admin_id,
                'password' => Hash::make($request->password),
            ]);
            return response()->json([
                'message'=>'Employé successfuly create'
            ],200);


        }catch(\Exception $e){
            return response()->json([
                'message'=>'Something went really wrong',$e
            ],404);
        }

    }
    public function update(EmployeUpdateRequest $request , $id){
        try{
          $employe = Employe::find($id);
          if(!$employe){
            return response()->json([
                'message'=>'Employe not found'
            ],404);

          }
                $employe->cin=$request->cin;
                $employe->nom=$request->nom;
                $employe->prenom=$request->prenom;
                $employe->date_naissance=$request->date_naissance;
                $employe->date_embauche=$request->date_embauche;
                $employe->situation_familiale=$request->situation_familiale;
                $employe->nbr_enfants=$request->nbr_enfants;
                $employe->email=$request->email;
                $employe->telephone=$request->telephone;
                $employe->adresse=$request->adresse;
                $employe->post=$request->post;
                $employe->salaire=$request->salaire;
                $employe->admin_id=$request->admin_id;
                $employe->password=$request->password;
                $employe->save();
          return response()->json([
            'message'=>'Employe successfuly updated'
        ],200);


        }catch(\Exception $e){
            return response()->json([
                'message'=>'Something went really wrong'
            ],404);
        }

    }
    public function show($id){
        $employe = Employe::find($id);
        if(!$employe){
            return response()->json([
                'message'=>'Employe not found'
            ],404);
        }
        return response()->json([
            'Employe'=>$employe
        ],200);
    }
    public function destroy($id){
        $employe = Employe::find($id);

    if(!$employe){
        return response()->json([
            'message'=>'Employe not found'
        ],404);
    }
    $employe->delete();

    return response()->json([
        'message'=>'Employe successfully deleted'
    ],200);
    }
    
    
    
}
