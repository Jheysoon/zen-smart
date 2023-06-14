<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Record;

class RecordController extends Controller
{
    public function create()
    {
        $record = new Record();
        $record->save();

        return $this->show();
    }

    public function show()
    {
        $count = Record::whereDate('created_at', date('Y-m-d'))->count();

        return response()->json([
            'count' => $count,
        ]);
    }
}
