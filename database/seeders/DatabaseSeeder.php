<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\HotelF;
use App\Models\Hotel;
use App\Models\Hopital;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        HotelF::factory(8)->create();
        Hotel::factory(8)->create();
        Hopital::factory(8)->create();
    }
}
