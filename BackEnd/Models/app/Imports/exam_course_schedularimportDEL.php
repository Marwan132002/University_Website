<?php

namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\exam_course_schedular;
use APP\Imports\intval;

class exam_course_schedularimportDEL implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {      
            $ex=exam_course_schedular::where('course_code',$row['course_code'])->where('type',$row['type'])->get();
            if($ex){
            $ex->delete();
            }
            
        }

    }
}
