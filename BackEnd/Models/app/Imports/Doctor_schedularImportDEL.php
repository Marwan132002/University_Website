<?php

namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\DoctorSchedular;
class Doctor_schedularImportDEL implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {    
            $dr=DoctorSchedular::where('course_code',$row['course_code'])->where('doctor_id',$row['doctor_id'])->get();
            if($dr){
            $dr->delete();
            }
            
        }

    }
}
