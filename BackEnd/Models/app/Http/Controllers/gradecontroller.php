<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentCourceGrade;
use App\Models\Grade;
use Illuminate\Http\Request;
use App\Http\Requests\docandtchrequest;
use App\Http\Requests\TeachingAssistantRequest;
class gradecontroller extends Controller
{

    function doc_grade(docandtchrequest $request,$code){
        $g=Grade::where('course_code',$code)->get();
        
        $array=[
            'data'=>($g),
            'message'=>'grades',
            'status'=>201,
        ];

        return response($array);

    }
    function tch_grade(TeachingAssistantRequest $request,$code,$id){
        $g=Grade::where('course_code',$code)->where('student_id',$id)->get();
        
        $array=[
            'data'=>($g),
            'message'=>'grades',
            'status'=>201,
        ];

        return response($array);

    }
    
}
