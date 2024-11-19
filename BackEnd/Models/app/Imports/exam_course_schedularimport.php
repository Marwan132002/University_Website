<?php

namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\exam_course_schedular;
use APP\Imports\intval;

class exam_course_schedularimport implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {      
            $ex=exam_course_schedular::where('course_code',$row['course_code'])->where('type',$row['type'])->first();
            if($ex)
            {
                exam_course_schedular::where('course_code',$row['course_code'])->where('type',$row['type'])->update([
                        'course_code'=>$row['course_code'],
                        'course_name'=>$row['course_name'],
                        'hall_code'=>$row['hall_code'],
                        'day'=>$row['day'],
                        'date'=> \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['date'])->format('y-m-d'),
                        'type'=>$row['type'],
                        'time'=>$row['time']
                    ]);
            }
            else
            {
                exam_course_schedular::create([
                    'course_code'=>$row['course_code'],
                    'course_name'=>$row['course_name'],
                    'hall_code'=>$row['hall_code'],
                    'day'=>$row['day'],
                    'date'=> \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['date'])->format('y-m-d'),
                    'type'=>$row['type'],
                    'time'=>$row['time']]);
                }
        }

    }
}
