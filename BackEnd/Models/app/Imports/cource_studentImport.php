<?php

namespace App\Imports;
use App\Models\StudentCourse;
use App\Models\StudentAttendance;
use App\Models\Course;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class cource_studentImport implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {
            $std=StudentCourse::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->first();
            $c=Course::where('course_code',$row['course_code'])->first();
            if($std)
            {
                StudentCourse::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->update([
                        'student_id'=>$row['student_id'],
                        'course_code'=>$row['course_code'],
                        'course_name'=>$row['course_name'],
                        'type'=>$c->type,
                        'credit_hours'=>$c->credit_hours,
                    ]);
                    StudentAttendance::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->update([
                        'student_id'=>$row['student_id'],
                        'course_code'=>$row['course_code'],
                        'course_name'=>$row['course_name'],
                        'counter_lec'=>0,
                        'counter_sec'=>0,
                        'warning_no_1'=>'false',
                        'warning_no_2'=>'false',
                        'Banned'=>'false',
                    ]);
            }
            else
            {
                StudentCourse::create([
                    'student_id'=>$row['student_id'],
                    'course_code'=>$row['course_code'],
                    'course_name'=>$row['course_name'],
                    'type'=>$c->type,
                    'credit_hours'=>$c->credit_hours,

                ]);

                StudentAttendance::create([
                        'student_id'=>$row['student_id'],
                        'course_code'=>$row['course_code'],
                        'course_name'=>$row['course_name'],
                        'counter_lec'=>0,
                        'counter_sec'=>0,
                        'warning_no_1'=>'false',
                        'warning_no_2'=>'false',
                        'Banned'=>'false',
                    ]);
            }

            
            
            
        }
    }
}
