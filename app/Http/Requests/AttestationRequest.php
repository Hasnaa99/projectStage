<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AttestationRequest extends FormRequest
{
    /**
     * Détermine si l'utilisateur est autorisé à effectuer cette demande.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // Par défaut, vous pouvez modifier selon vos besoins d'authentification
    }

    /**
     * Récupère les règles de validation qui s'appliquent à la demande.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'email' => 'required|email',
            'telephone' => 'required|string',
            'poste' => 'required|string',
            'motif' => 'required|string',
        ];
    }

    /**
     * Récupère les messages d'erreur personnalisés pour les règles de validation.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'nom.required' => 'Le champ nom est requis.',
            'prenom.required' => 'Le champ prénom est requis.',
            'email.required' => 'Le champ email est requis.',
            'email.email' => 'Veuillez saisir une adresse email valide.',
            'telephone.required' => 'Le champ téléphone est requis.',
            'poste.required' => 'Le champ poste est requis.',
            'motif.required' => 'Le champ motif est requis.',
        ];
    }
}
