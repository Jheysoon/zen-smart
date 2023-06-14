<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('records')->insert([
            ['created_at' => '2023-06-14 23:30:12',],
            ['created_at' => '2023-06-14 23:30:12',],
            ['created_at' => '2023-06-15 23:30:12',],
            ['created_at' => '2023-06-15 23:30:12',],
        ]);

    }
}
