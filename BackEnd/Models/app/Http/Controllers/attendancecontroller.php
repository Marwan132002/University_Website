<?php

namespace App\Http\Controllers;
use App\Http\Requests\docandtchrequest;
use App\Models\StudentAttendance;

use Illuminate\Http\Request;

class attendancecontroller extends Controller
{
    function doc_attendance(docandtchrequest $request,$code){
        $g=StudentAttendance::where('course_code',$code)->get();
        
        $array=[
            'data'=>($g),
            'message'=>'grades',
            'status'=>201,
        ];

        return response($array);

    }
}
