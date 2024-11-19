<?php

namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\cource_schedular;
class Cource_schedularimport implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {      
            $course=cource_schedular::where('course_code',$row['course_code'])->first();
            if($course)
            {
                cource_schedular::where('course_code',$row['course_code'])->update([
                    'course_code'=>$row['course_code'],
                    'course_name'=>$row['course_name'],
                    'hall_code_lec'=>$row['hall_code_lec'],
                    'hall_code_sec'=>$row['hall_code_sec'],
                    'day_sec'=>$row['day_sec'],
                    'day_lec'=>$row['day_lec'],
                    'time_sec'=>$row['time_sec'],
                    'time_lec'=>$row['time_lec']
                ]);
            }else{
                cource_schedular::create([
                    'course_code'=>$row['course_code'],
                    'course_name'=>$row['course_name'],
                    'hall_code_lec'=>$row['hall_code_lec'],
                    'hall_code_sec'=>$row['hall_code_sec'],
                    'day_sec'=>$row['day_sec'],
                    'day_lec'=>$row['day_lec'],
                    'time_sec'=>$row['time_sec'],
                    'time_lec'=>$row['time_lec']]);
            }
   
        
    }
    }
}
