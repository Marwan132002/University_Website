<?php

namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\Grade;
class student_gradesimportDEL implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {     
            
            $gr=Grade::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->where('type',$row['type'])->get();
            $gr->delete();
    }
    }
}
