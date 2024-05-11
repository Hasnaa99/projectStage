<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Votre logique d'autorisation ici, par exemple vérifier si l'utilisateur peut modifier l'employé
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'cin' => 'required|string|max:10|',
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'date_naissance' => 'required|date|before_or_equal: -18 years',
            'date_embauche' => 'required|date|after:date_naissance',
            'situation_familiale' => 'required|string',
            'nbr_enfants' => 'nullable|integer',
            'email' => 'required|string|email',
            'telephone' => 'required|string',
            'adresse' => 'required|string',
            'post' => 'required|string',
            'salaire' => 'required|numeric',
            'admin_id' => 'required|exists:admins,id',
            // Vous pouvez ajouter d'autres règles de validation au besoin
        ];
    }

   /**
 * Get the error messages for the defined validation rules.
 */
public function messages()
{
    return [
        'cin.required' => 'Le champ CIN est requis.',
        'cin.string' => 'Le champ CIN doit être une chaîne de caractères.',
        'cin.max' => 'Le champ CIN ne doit pas dépasser :10 caractères.',
        'cin.unique' => 'Le CIN est déjà utilisé par un autre employé.',

        'nom.required' => 'Le champ Nom est requis.',
        'nom.string' => 'Le champ Nom doit être une chaîne de caractères.',

        'prenom.required' => 'Le champ Prénom est requis.',
        'prenom.string' => 'Le champ Prénom doit être une chaîne de caractères.',

        'date_naissance.required' => 'Le champ Date de naissance est requis.',
        'date_naissance.date' => 'Le champ Date de naissance doit être une date valide.',
        'date_naissance.before_or_equal' => 'L\'employé doit être âgé d\'au moins 18 ans.',

        'date_embauche.required' => 'Le champ Date d\'embauche est requis.',
        'date_embauche.date' => 'Le champ Date d\'embauche doit être une date valide.',
        'date_embauche.after' => 'La date d\'embauche doit être postérieure à la date de naissance.',

        'situation_familiale.required' => 'Le champ Situation familiale est requis.',
        'situation_familiale.string' => 'Le champ Situation familiale doit être une chaîne de caractères.',

        'nbr_enfants.integer' => 'Le champ Nombre d\'enfants doit être un entier.',

        'email.required' => 'Le champ Email est requis.',
        'email.string' => 'Le champ Email doit être une chaîne de caractères.',
        'email.unique' => 'L\'email est déjà utilisé par un autre employé.',

        'telephone.required' => 'Le champ Téléphone est requis.',
        'telephone.string' => 'Le champ Téléphone doit être une chaîne de caractères.',
        'telephone.unique' => 'Le numéro de téléphone est déjà utilisé par un autre employé.',

        'adresse.required' => 'Le champ Adresse est requis.',
        'adresse.string' => 'Le champ Adresse doit être une chaîne de caractères.',

        'post.required' => 'Le champ Poste est requis.',
        'post.string' => 'Le champ Poste doit être une chaîne de caractères.',

        'salaire.required' => 'Le champ Salaire est requis.',
        'salaire.numeric' => 'Le champ Salaire doit être un nombre.',

        'admin_id.required' => 'L\'ID du responsable est requis.',
        'admin_id.exists' => 'L\'ID du responsable est invalide.',
    ];
}

}
