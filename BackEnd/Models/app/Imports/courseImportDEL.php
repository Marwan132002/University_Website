<?php

namespace App\Imports;
use App\Models\Course;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\cource_schedular;
class courseImportDEL implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        { 
            $course=Course::where('course_code',$row['course_code'])->get();
            if($course){
            $course->delete();
            }
        }

    }
    }
