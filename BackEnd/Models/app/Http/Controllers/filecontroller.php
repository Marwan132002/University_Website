<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\files;
use App\Http\Resources\fileresource;
use App\Http\Requests\AdminRequest;
use App\Imports\courseImportDEL;
use App\Imports\Cource_schedularimportDEL;
use App\Imports\Doctor_schedularImportDEL;
use App\Imports\Teaching_Assistant_schedularImportDEL;
use App\Imports\cource_studentImportDEL;
use App\Imports\student_attendanceDEL;
use App\Imports\exam_course_schedularimportDEL;
use App\Imports\TrainingImportDEL;
use App\Imports\NewsImportDEL;
use App\Imports\student_gradesimportDEL;
use App\Models\StudentCourseDEL;
use Carbon\Carbon;
use Maatwebsite\Excel\Facades\Excel;
class filecontroller extends Controller
{
    public function get_all_files(AdminRequest $request,$type){
        $file=files::where('type','=',$type)->get();
        if($file)
        {
            $array=[
                'data'=>fileresource::collection ($file),
                'message'=>'files',
                'status'=>201,
            ];

            return response($array);
        }

        return response(null,400,['There are no files!']);

    }

    public function delete_file(AdminRequest $request,$id){
        $f=files::find($id);
        $val=$f->type;
        $f=$f->file;
        return $f;
        if ($val=='course'){
            //         add cources
            Excel::import(new courseImportDEL, $f);
            Excel::import(new Cource_schedularimportDEL, $f);
            Excel::import(new Doctor_schedularImportDEL, $f);
            Excel::import(new Teaching_Assistant_schedularImportDEL, $f);

        }elseif($val=='student_course'){
            // add student course
            Excel::import(new cource_studentImportDEL, $f);
        }elseif($val=='training'){
        
            //         add   training
            Excel::import(new TrainingImportDEL, $f);

        } elseif($val=='exam')
        {
            // add exam schedular
            Excel::import(new exam_course_schedularimportDEL, $f);
            
        }
        elseif($val=='grade')
        {
            //grade
            Excel::import(new student_gradesimportDEL, $f);
        }elseif($val='attendance'){
            //attendance
            Excel::import(new student_attendanceDEL, $f);
            
        }
        $f->delete();
    }
}
