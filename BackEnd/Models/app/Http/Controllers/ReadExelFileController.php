<?php

namespace App\Http\Controllers;
use App\Models\files;
use App\Imports\courseImport;
use App\Imports\Cource_schedularimport;
use App\Imports\Doctor_schedularImport;
use App\Imports\Teaching_Assistant_schedularImport;
use App\Imports\cource_studentImport;
use App\Imports\student_attendance;
use App\Imports\exam_course_schedularimport;
use App\Imports\TrainingImport;
use App\Imports\student_gradesimport;
use App\Imports\courseImportDEL;
use App\Imports\Cource_schedularimportDEL;
use App\Imports\Doctor_schedularImportDEL;
use App\Imports\Teaching_Assistant_schedularImportDEL;
use App\Imports\cource_studentImportDEL;
use App\Imports\student_attendanceDEL;
use App\Imports\exam_course_schedularimportDEL;
use App\Imports\TrainingImportDEL;
use App\Imports\student_gradesimportDEL;
use App\Models\StudentCourse;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Requests\AdminRequest;
class ReadExelFileController extends Controller
{
    public function index(){
        return view('getfile');
    }
    
    public function sendfile(AdminRequest $request){
        $request->validate([
            'file'=>['required','file'],
            'pageName'=>['required']
        ]);
        $val=$request->pageName;
        $des="excelfile";
        if ($request->hasFile('file')){

            $filename=$request->file('file');
            // dd($filename);
            if ($val=='course'){
                //         add cources
                Excel::import(new courseImport, $request->file('file'));
                Excel::import(new Cource_schedularimport, $request->file('file'));
                Excel::import(new Doctor_schedularImport, $request->file('file'));
                Excel::import(new Teaching_Assistant_schedularImport, $request->file('file'));
                $des="excelfile/course";
    
            }elseif($val=='student_course'){
                // add student course
                Excel::import(new cource_studentImport, $request->file('file'));
                $des="excelfile/student_course";
    
            }elseif($val=='training'){
            
                //         add   training
                Excel::import(new TrainingImport, $request->file('file'));
    
                $des="excelfile/training";
            } elseif($val=='exam')
            {
                // add exam schedular
                Excel::import(new exam_course_schedularimport, $request->file('file'));
                
                $des="excelfile/exam_schedular";
            }
            elseif($val=='grade')
            {
                //grade
                Excel::import(new student_gradesimport, $request->file('file'));

                $des="excelfile/grade";
            }elseif($val='attendance'){
                //attendance
                Excel::import(new student_attendance, $request->file('file'));
                
                $des="excelfile/attendance";
            }




            $file_uploaded_path = $filename->store($des, 'public');
                    files::create([
                    'name'=>$request->file->getClientOriginalname(),
                    'date'=>date("Y-m-d"),
                    'file'=>$file_uploaded_path,
                    'type'=>$val]);
            return redirect()->back()->with('status','imported successful');
        }
    
    }

    public function deletefile(AdminRequest $request, $fileid)
    {
    
        $fileRecord = files::find($fileid);
         
        if (!$fileRecord) {
            return response()->json(['message' => 'File not found'], 404);
        }
    
        $filePathString = $fileRecord->file;
        $f = explode('/', $filePathString);
        $fileName = end($f);
        $filePath = storage_path('app/public/storage/excelfile/course/' . $fileName);
        $type=$fileRecord->type;
        if (!file_exists($filePath)) {
            return response()->json(['message' => 'File not found on server'], 404);
        }
        if ($filePath){
    
        // Perform import actions based on type
        switch ($type) {
            case 'course':
                
                Excel::import(new courseImportDEL, $filePath);
                Excel::import(new Cource_schedularimportDEL, $filePath);
                Excel::import(new Doctor_schedularImportDEL, $filePath);
                Excel::import(new Teaching_Assistant_schedularImportDEL, $filePath);
               
                break;
    
            case 'student_course':
                $filePath = storage_path( $fileRecord->file);

                Excel::import(new cource_studentImportDEL, $filePath);
                break;
    
            case 'training':
                $filePath = storage_path('app/public/' . $fileRecord->file);
                Excel::import(new TrainingImportDEL, $filePath);
                
                break;
    
            case 'exam':
                $filePath = storage_path('app/public/' . $fileRecord->file);
                Excel::import(new exam_course_schedularimportDEL, $filePath);
                break;
    
            case 'grade':
                $filePath = storage_path('app/public/' . $fileRecord->file);
                Excel::import(new student_gradesimportDEL, $filePath);
                break;
    
            case 'attendance':
                $filePath = storage_path('app/public/' . $fileRecord->file);
                Excel::import(new student_attendanceDEL, $filePath);
                break;
    
            default:
                return response()->json(['message' => $type], 400);
        }
    
    
        // Delete the file record from the database
        $fileRecord->each->delete();
    
        return response()->json(['message' => 'File deleted successfully'], 200);
        }else{
            return response()->json(['message' => 'not'], 400);
        }
    }



}
