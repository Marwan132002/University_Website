<?php

namespace App\Imports;
use App\Models\Training;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class TrainingImport implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {
            $tr=Training::where('id',$row['training_id'])->where('name',$row['name'])->first();
            if($tr)
            {
                Training::where('id',$row['training_id'])->where('name',$row['name'])->update([
                    'id'=>$row['training_id'],
                    'name'=>$row['name'],
                    'company_name'=>$row['company_name'],
                    'details'=>$row['details'],
                    'location'=>$row['location'],
                    'date'=>($row['date']),
                ]);
            }
            else
            {
            Training::create([
            'id'=>$row['training_id'],
            'name'=>$row['name'],
            'company_name'=>$row['company_name'],
            'details'=>$row['details'],
            'location'=>$row['location'],
            'date'=>($row['date']),
            ]);
        }
        }
    }
}
