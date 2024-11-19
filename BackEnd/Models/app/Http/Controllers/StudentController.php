<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Course;
use App\Models\cource_schedular;
use Carbon\Carbon;
use App\Models\StudentCourse;
use App\Models\StudentSchedular;
use App\Models\StudentAttendance;
use App\Models\exam_course_schedular;
use App\Models\student_exam_schedular;
use App\Models\Grade;
use App\Models\User;
use App\Http\Resources\StudentResource;
use App\Http\Resources\StudentCourceGrade;
use App\Imports\student_attendance;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\StudentSchedularresource;
use App\Http\Resources\StudentCourceAttendance;
use App\Http\Resources\StudentExamSchedulerResource; 
use App\Http\Requests\StudentRequest;
use App\Http\Requests\AdminRequest;
use App\Http\Requests\AllRequest;
use App\Http\Requests\idRequest;
use Illuminate\Support\Facades\Auth;
class StudentController extends Controller
{
    public function add_student(AdminRequest $request)
    {
        $validated=Validator::make($request->all(),[
            'id'=>'required|unique:student|integer',
            'full_name'=>'required|max:255',
            'gpa'=>'required|regex:/^\d*(\.\d{2})?$/',//float
            'cgpa'=>'required|regex:/^\d*(\.\d{2})?$/',
            'email'=>'required',
            'password'=>'required|min:8|max:30',
            'type'=>'required',
            'accademic_advisor'=>'required',
            'training_id'=>'nullable|integer',
        ]);

        if($validated->fails())
        {
            $array=[
                'data'=>null,
                'message'=>$validated->errors(),
                'status'=>404,
            ];

            return response($array);
        }
        
        $user=User::create([
        'id'=>$request->id,
        'name'=>$request->full_name,
        'email'=>$request->email,
        'password'=>bcrypt($request->password),
        'role'=>'student',
        ]);
       $std=Student::create([
        'id'=>$request->id,
        'full_name'=>$request->full_name,
        'email'=>$request->email,
        'password'=>bcrypt($request->password),
        'gpa'=>$request->gpa,
        'cgpa'=>$request->cgpa,
        'type'=>$request->type,
        'accademic_advisor'=>$request->accademic_advisor,
        ]);
        if($std)
        {
            $array=[
                'data'=>new StudentResource($std),
                'message'=>'Student Created',
                'status'=>201,
            ];

             return response($array);
        }

        return response(null,400,[]);
    }
    public function update_student(AdminRequest $request,$id)
    {


        $std=Student::find($id);
        if(!$std)
        {
            $array=[
                'data'=>null,
                'message'=>'Student not found',
                'status'=>201,
            ];

            return response($array);
        }
        $U=User::find($id);
        $U->update(['name'=>$request->full_name,
    'email'=>$request->email]);
        $std->update($request->all());
        if($std)
        {
            $array=[
                'data'=>new StudentResource($std),
                'message'=>'Student Updated',
                'status'=>201,
            ];

            return response($array);
        }
        

        return response(null,400,['The Student Not Found!']);
    }
    public function search_student(AdminRequest $request,$id)
    {
        $std=Student::find($id);
        if($std)
        {
            $array=[
                'data'=>new StudentResource($std),
                'message'=>'Student Found',
                'status'=>201,
            ];

            return response($array);
        }

        $array=[
            'data'=>null,
            'message'=>'Student Not Found',
            'status'=>404,
        ];

        return response($array);
    }
    public function student_cources(StudentRequest $request,$id){
        $dat=StudentCourse::where('student_id',$id)->get();
        $array=[
            'data'=>$dat,
            'message'=>'Cources',
            'status'=>404,
        ];
        
        return response($array);
    }
    public function delete_student(AdminRequest $request,$id)
    {
        $std=Student::find($id);
        $U=User::find($id);
        if(!$std)
        {
            $array=[
                'data'=>null,
                'message'=>'Student Not Found',
                'status'=>404,
            ];
    
            return response($array);
        }
        $std->delete();
        $U->delete();
        $array=[
            'data'=>null,
            'message'=>'Student Deleted',
            'status'=>200,
        ];

        return response($array);
    }
    public function student_schedular(StudentRequest $request, $id){
        $courses = StudentCourse::where('student_id', $id)->get(['course_code']);
    
        foreach ($courses as $course) {
            $courseDetails = cource_schedular::where('course_code', $course->course_code)->first();
    
            if ($courseDetails) {
                StudentSchedular::create([
                    'student_id' => $id,
                    'course_name' => $courseDetails->course_name,
                    'course_code' => $courseDetails->course_code,
                    'hall_code_lec' => $courseDetails->hall_code_lec,
                    'hall_code_sec' => $courseDetails->hall_code_sec,
                    'day_lec' => $courseDetails->day_lec,
                    'day_sec' => $courseDetails->day_sec,
                    'time_lec' => $courseDetails->time_lec,
                    'time_sec' => $courseDetails->time_sec,
                ]);
            }
        }
    
        $data = StudentSchedular::where('student_id', $id)->get();
       
        $array = [
            'data' => StudentSchedularresource::collection ($data),
            'message' => 'schedule created',
            'status' => 200,
        ];
    
        return response()->json($array);
    } 
    public function student_exam_schedular(StudentRequest $request,$id){
        $courses = StudentCourse::where('student_id', $id)->get(['course_code']);
    
        foreach ($courses as $course) {
            $courseExamDetails = exam_course_schedular::where('course_code', $course->course_code)->first();
    
            if ($courseExamDetails) {
               
               $scqexam=student_exam_schedular::where([
                'student_id'=>$id,
                'course_name' => $courseExamDetails->course_name,
                'course_code' => $courseExamDetails->course_code,
                'hall_code' => $courseExamDetails->hall_code,
                'day' => $courseExamDetails->day,
                'time' => $courseExamDetails->time,
                'type' => $courseExamDetails->type,
                'date' => $courseExamDetails->date,
            ])->first();;
               if ($scqexam){
                   
               }else{
                   student_exam_schedular::create([
                    'student_id' => $id,
                    'course_name' => $courseExamDetails->course_name,
                    'course_code' => $courseExamDetails->course_code,
                    'hall_code' => $courseExamDetails->hall_code,
                    'day' => $courseExamDetails->day,
                    'time' => $courseExamDetails->time,
                    'type' => $courseExamDetails->type,
                    'date' =>$courseExamDetails->date,
                ]);
            }
            }
        }
    
        $data = student_exam_schedular::where('student_id', $id)->get();
        $array = [
            'data' =>StudentExamSchedulerResource::collection ($data),
            'message' => ' Exam schedule created',
            'status' => 200,
        ];
    
        return response()->json($array);
 
    }

    // public function student_cources(StudentRequest $requst,$id){
    //     $courses = StudentCourse::where('student_id', $id)->get(['course_code']);
    //     $arr=[];
    //     foreach ($courses as $course) {
    //         $arr=$arr+Course::where('')

    //     }
    //     $array = [
    //         'data' =>StudentExamSchedulerResource::collection ($data),
    //         'message' => ' Exam schedule created',
    //         'status' => 200,
    //     ];


    // }
   public function student_gardes(AllRequest $request,$id)
    {
        
    
        $coursegrade = Grade::where('student_id',$id)->get();

        $array = [
            'data' =>StudentCourceGrade::collection( $coursegrade),
            'message' => ' Student Grades',
            'status' => 200,
        ];
    
        return response()->json($array);
    }
    public function student_attendance(AllRequest $request,$id){
        $data=StudentAttendance::where('student_id',$id)->get();
        
        $array = [
            'data' => StudentCourceAttendance::collection($data),
            'message' => ' attendance ',
            'status' => 200,
        ];
    
        return response()->json($array);
    }
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    public function login(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->createNewToken($token);
    }
    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }
    public function userProfile($id) {
        $std=Student::where('id',$id)->get();
        return response($std);
    }
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }

}
