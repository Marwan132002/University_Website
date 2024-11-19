<?php

namespace App\Imports;
use App\Models\Course;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\cource_schedular;
class courseImport implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        { 
            
            $course=Course::where('course_code',$row['course_code'])->first();
            if($course)
            {
                Course::where('course_code',$row['course_code'])->update([          
                'course_name' => $row['course_name'],
                'course_code'=> $row['course_code'],
                'type'=> $row['type'],
                'credit_hours'=> $row['credit_hours']]);

            }
            else
            {
                Course::create([
                    'course_name' => $row['course_name'],
                    'course_code'=> $row['course_code'],
                    'type'=> $row['type'],
                    'credit_hours'=> $row['credit_hours']
                ]); 
            }
        }

    }
}

