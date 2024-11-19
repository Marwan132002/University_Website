<?php

namespace App\Imports;
use App\Models\Training;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class TrainingImportDEL implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {
            $tr=Training::where('id',$row['training_id'])->where('name',$row['name'])->get();
            $tr->delete();
        }
    }
}
