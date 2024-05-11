<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Illuminate\Validation\ValidationException;

class EventController extends Controller
{
    public function index(){
        $events = Event::all();
        return response()->json([
            'resultats' => $events
        ], 200);
    }
    public function store(Request $request){
        try{
            $validatedData = $request->validate([
                'titre_event' => 'required',
                'date_heure_debut' => 'required|date',
                'date_heure_fin' => 'required|date|after:date_heure_debut',
                'type_event' => 'required',
                'destinataire' => 'required',
                'statut' => 'required',
            ]);
            Event::create($validatedData);
            return response()->json([
                'message'=>'Evenement crée avec succée'
            ],200);
    
        }catch (\Exception $e) {
            // Vérifier s'il s'agit d'une exception de validation
            if ($e instanceof \Illuminate\Validation\ValidationException) {
                // Récupérer les erreurs de validation
                $errors = $e->validator->getMessageBag()->toArray();
        
                // Renvoyer une réponse JSON avec les erreurs de validation
                return response()->json([
                    'message' => 'Validation failed',
                    'errors' => $errors
                ], 422);
            }
        
            // Si ce n'est pas une exception de validation, gérer l'erreur de manière appropriée
            return response()->json([
                'message' => 'An error occurred',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    
    public function update(Request $request , $id){
        try{
            $event = Event::find($id);
            if(!$event){
                return response()->json([
                    'message'=>'Event not found'
                ],404);
            }
    
            $event->update($request->all());
    
            return response()->json([
                'message'=>'Event successfully updated'
            ],200);
    
        }catch(\Exception $e){
            return response()->json([
                'message'=>'Something went really wrong'
            ],404);
        }
    }
    
    public function show($id){
        $event = Event::find($id);
        if(!$event){
            return response()->json([
                'message'=>'Event not found'
            ],404);
        }
        return response()->json([
            'Event'=>$event
        ],200);
    }
    
    public function destroy($id){
        $event = Event::find($id);
    
        if(!$event){
            return response()->json([
                'message'=>'Event not found'
            ],404);
        }
        $event->delete();
    
        return response()->json([
            'message'=>'Event successfully deleted'
        ],200);
    }
    public function incrementInscrit(Event $event)
    {
        try {
            // Incrémenter le nombre d'inscrits
            $event->nombre_inscrits += 1;
            $event->save();

            return response()->json([
                'success' => true,
                'message' => 'Nombre d\'inscrits incrémenté avec succès.',
                'nombre_inscrits' => $event->nombre_inscrits
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de l\'incrémentation du nombre d\'inscrits.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}