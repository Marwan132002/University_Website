<?php

namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\Grade;
class student_gradesimport implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {     
            if($row['type']=='final')
            {
                $grade=Grade::where('student_id',$row['student_id'])->where('course_code',$row['course_code']);
                $grade->delete();
            }
            $gr=Grade::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->where('type',$row['type'])->first();//عشان لو بعت نفس الملف تاني ميحصلش تكرار للبيانات , يعدل 
            if($gr)
            {
                Grade::where('student_id',$row['student_id'])->where('course_code',$row['course_code'])->where('type',$row['type'])->update([
                    'course_code'=>$row['course_code'],
                    'course_name'=>$row['course_name'],
                    'student_id'=>$row['student_id'],
                    'grade'=>$row['grade'],
                    'max_grade'=>$row['max_grade'],
                    'type'=>$row['type'],
                ]);
            }else{
                Grade::create([
                    'course_code'=>$row['course_code'],
                    'course_name'=>$row['course_name'],
                    'student_id'=>$row['student_id'],
                    'grade'=>$row['grade'],
                    'max_grade'=>$row['max_grade'],
                    'type'=>$row['type'],
                ]);
            }

            

    }
    }
}
