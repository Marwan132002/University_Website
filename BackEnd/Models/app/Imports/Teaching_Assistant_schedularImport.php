<?php

namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\TeachingAssistantSchedular;
class Teaching_Assistant_schedularImport implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {     
            $tch=TeachingAssistantSchedular::where('course_code',$row['course_code'])->where('teaching_assistant_id',$row['teaching_assistant_id'])->first();
            if($tch)
            {
                TeachingAssistantSchedular::where('course_code',$row['course_code'])->where('teaching_assistant_id',$row['teaching_assistant_id'])->update([
                    'course_code'=>$row['course_code'],
                    'course_name'=>$row['course_name'],
                    'hall_code'=>$row['hall_code_sec'],
                    'day'=>$row['day_sec'],
                    'teaching_assistant_id'=>$row['teaching_assistant_id'],
                    'teaching_assistant_name'=>$row['teaching_assistant_name'],
                    'time'=>$row['time_sec']]);  
            }
            else
            {
                TeachingAssistantSchedular::create([
                    'course_code'=>$row['course_code'],
                    'course_name'=>$row['course_name'],
                    'hall_code'=>$row['hall_code_sec'],
                    'day'=>$row['day_sec'],
                    'teaching_assistant_id'=>$row['teaching_assistant_id'],
                    'teaching_assistant_name'=>$row['teaching_assistant_name'],
                    'time'=>$row['time_sec']]);
        }
            }

    }
}
