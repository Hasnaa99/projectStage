<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hopital>
 */
class HopitalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nomHopitale' => fake()->company(),
            'adresse' => fake()->address(),
            'ville' => fake()->city(),
            'contact' => fake()->phoneNumber(),
            'service_medicaux' => fake()->word(),
        ];
    }
}
