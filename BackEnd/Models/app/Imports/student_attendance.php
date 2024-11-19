<?php

namespace App\Imports;
use App\Models\StudentAttendance;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class student_attendance implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {
            $std=StudentAttendance::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->first();
            if($row['absent']==TRUE)
            {
                if ($row['type']=='lec'){
                    StudentAttendance::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->update([
                        'counter_lec'=>$std->counter_lec+1
                    ]);



                }elseif($row['type']=='sec'){
                    StudentAttendance::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->update([
                        'counter_sec'=>$std->counter_sec+1
                    ]);


                }
            }
            $std=StudentAttendance::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->first();
            if (($std->counter_sec)+($std->counter_sec)>=3)
            {
                StudentAttendance::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->update([
                    'warning_no_1'=>'yes'
                ]);

            }
            if (($std->counter_sec)+($std->counter_sec)>=6)
            {
                StudentAttendance::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->update([
                    'warning_no_2'=>'yes'
                ]);

            }
            if (($std->counter_sec)+($std->counter_sec)>=9)
            {
                StudentAttendance::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->update([
                    'Banned'=>'yes'
                ]);

            }
            
        }
    }
}
