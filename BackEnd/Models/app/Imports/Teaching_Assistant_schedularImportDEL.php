<?php

namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\TeachingAssistantSchedular;
class Teaching_Assistant_schedularImportDEL implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {     
            $tch=TeachingAssistantSchedular::where('course_code',$row['course_code'])->where('teaching_assistant_id',$row['teaching_assistant_id'])->get();
            if($tch){
            $tch->delete();}
        
        }

    }
}
