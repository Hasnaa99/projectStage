<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request){
        $input = $request->all();
        $validation = Validator::make($input, [
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if($validation->fails()){
            return response()->json(['error' => $validation->errors()], 422);
        }
    
        // Vérifiez si l'utilisateur est un administrateur
        if(Auth::guard('admin')->attempt(['email' => $input['email'], 'password' => $input['password']])){
            $admin = Auth::guard('admin')->user();
            $token = $admin->createToken('MyApp', ['admin'])->plainTextToken;
            return response()->json(['token' => $token, 'user_type' => 'admin','admin'=>$admin]);
        }
    
        // Si l'utilisateur n'est pas un administrateur, vérifiez s'il est un employé
        if(Auth::guard('employe')->attempt(['email' => $input['email'], 'password' => $input['password']])){
            $employe = Auth::guard('employe')->user();
            $token = $employe->createToken('MyApp', ['employe'])->plainTextToken;
            return response()->json(['token' => $token, 'user_type' => 'employe','employe'=>$employe]);
        }
    
        // Si ni l'administrateur ni l'employé ne sont authentifiés, retournez une erreur
        return response()->json(['error' => 'Adresse e-mail ou mot de passe incorrect.'], 401);
    }
    public function logout(Request $request)
        {
            Auth::logout();
            return response()->json(['message' => 'Déconnexion réussie']);
        }
    

        public function detailleUser(Request $request){
            if (Auth::guard('admin')->check()) {
                // Récupérer les informations de l'administrateur authentifié
                $admin = Auth::guard('admin')->user();
                return response()->json(['data' => $admin]);
            }
            // Vérifier si l'employé est authentifié
            elseif (Auth::guard('employee')->check()) {
                // Récupérer les informations de l'employé authentifié
                $employee = Auth::guard('employee')->user();
                return response()->json(['data' => $employee]);
            } else {
                // Si aucun utilisateur n'est authentifié, retourner une erreur 401 (non autorisé)
                return response()->json(['error' => 'Utilisateur non authentifié.'], 401);
            }
        }
}
