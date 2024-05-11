<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
class EmployeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faker = Faker::create();

        // On insère 20 employés
        for ($i = 0; $i < 20; $i++) {
            do {
                $matricule = $faker->numberBetween(10000, 90000);
            } while (DB::table('employes')->where('matricule', $matricule)->exists());
            DB::table('employes')->insert([
                'matricule' => $matricule,
                'cin' => $faker->unique()->randomNumber(8),
                'nom' => $faker->lastName,
                'prenom' => $faker->firstName,
                'date_naissance' => $faker->date,
                'date_embauche' => $faker->date,
                'situation_familiale' => $faker->randomElement(['Célibataire', 'Marié', 'Divorcé']),
                'nbr_enfants' => $faker->numberBetween(0, 5),
                'email' => $faker->unique()->safeEmail,
                'telephone' => $faker->e164PhoneNumber,
                'adresse' => $faker->address,
                'post' => $faker->randomElement(['Manager', 'Développeur', 'Designer', 'Comptable', 'Vendeur']),
                'salaire' => $faker->randomFloat(2, 1000, 10000),
                'admin_id' => 1,
                'password' => Hash::make('password123') // Le mot de passe hashé, ici "password"
            ]);
        }
    }
}
