<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return[
        'cin' => 'required|string|max:10|unique:employes,cin',
        'nom' => 'required|string',
        'prenom' => 'required|string',
        'date_naissance' => 'required|date|before_or_equal: -18 years',
        'date_embauche' => 'required|date|after:date_naissance',
        'situation_familiale' => 'required|string',
        'nbr_enfants' => 'nullable|integer',
        'email' => 'required|string|unique:employes,email',
        'telephone' => 'required|string|unique:employes,telephone',
        'adresse' => 'required|string',
        'post' => 'required|string',
        'salaire' => 'required|numeric',
        'admin_id' => 'required|exists:admins,id',
        'password' => 'required|string|min:8',];
    }
    public function messages()
    {
        return [
            'cin.required' => 'Le CIN est requis !',
            'cin.unique' => 'Le CIN doit être unique !',
            'nom.required' => 'Le nom est requis !',
            'prenom.required' => 'Le prénom est requis !',
            'date_naissance.required' => 'La date de naissance est requise !',
            'date_embauche.required' => 'La date d\'embauche est requise !',
            'situation_familiale.required' => 'La situation familiale est requise !',
            'email.required' => 'L\'email est requis !',
            'email.unique' => 'L\'email doit être unique !',
            'telephone.required' => 'Le téléphone est requis !',
            'telephone.unique' => 'Le téléphone doit être unique !',
            'adresse.required' => 'L\'adresse est requise !',
            'post.required' => 'Le poste est requis !',
            'password.min' => 'Le mot de passe doit avoir au moins :8 !',
            'salaire.required' => 'Le salaire est requis !',
            'salaire.numeric' => 'Le salaire doit être un entier  !',
            'admin_id.required' => 'L\'ID de rsponsable est requis !',
            'nbr_enfants.integer' => 'Le nombre d\'enfants doit être un entier !',
            'admin_id.exists' => 'ID responsable invalide !',
            'password.required' => 'Le mot de passe est requis !',
            'date_naissance.before_or_equal' => 'L\'employé doit être âgé d\'au moins 18 ans !',
            'date_embauche.after'=>'La date d\'embauche doit être postérieure à la date de naissance !'

        ];
    }
    
}
