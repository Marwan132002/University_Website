<?php

namespace App\Imports;
use App\Models\StudentCourse;
use App\Models\StudentAttendance;
use App\Models\Grade;
use App\Models\Course;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class cource_studentImportDEL implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {
            $st=StudentCourse::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->first();
            if($st)
            {
                $st->delete();
                
                $std=StudentAttendance::where([
                        'student_id'=>$row['student_id'],
                        'course_code'=>$row['course_code'],
                        'course_name'=>$row['course_name'],
                        
                    ])->first();
                    $std->delete();

                    $std=Grade::where([
                        'student_id'=>$row['student_id'],
                        'course_code'=>$row['course_code'],
                    ])->first();
                    $std->delete();
                }

            
            
            
        }
    }
}
