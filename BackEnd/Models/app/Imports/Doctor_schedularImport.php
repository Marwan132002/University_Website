<?php

namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\DoctorSchedular;
class Doctor_schedularImport implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {    
            $dr=DoctorSchedular::where('course_code',$row['course_code'])->where('doctor_id',$row['doctor_id'])->first();
            if($dr)
            {
                DoctorSchedular::where('course_code',$row['course_code'])->where('doctor_id',$row['doctor_id'])->update([
                    'course_code'=>$row['course_code'],
                    'course_name'=>$row['course_name'],
                    'hall_code'=>$row['hall_code_lec'],
                    'day'=>$row['day_lec'],
                    'doctor_id'=>$row['doctor_id'],
                    'doctor_name'=>$row['doctor_name'],
                    'time'=>$row['time_lec']]);
                
            }
            else{
                DoctorSchedular::create([
                    'course_code'=>$row['course_code'],
                    'course_name'=>$row['course_name'],
                    'hall_code'=>$row['hall_code_lec'],
                    'day'=>$row['day_lec'],
                    'doctor_id'=>$row['doctor_id'],
                    'doctor_name'=>$row['doctor_name'],
                    'time'=>$row['time_lec']]);
        }
            }

    }
}
