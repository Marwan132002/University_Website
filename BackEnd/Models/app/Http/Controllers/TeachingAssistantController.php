<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\TeachingAssistant;

use App\Http\Resources\TeachingAssistantResource;

use Illuminate\Support\Facades\Validator;

use Illuminate\Validation\ValidationException;

use App\Models\User;

use App\Http\Resources\TeachingAssistantSchedularResource;
use App\Http\Requests\AdminRequest;
use App\Http\Requests\TeachingAssistantRequest;
use App\Models\TeachingAssistantSchedular;
use App\Models\Course;

class TeachingAssistantController extends Controller
{
public function add_teachingassistant(AdminRequest $request)
    {
        $validated=Validator::make($request->all(),[
            'id'=>'required|unique:teaching_assistant|integer',
            'full_name'=>'required|max:255',
            'email'=>'required',
            'password'=>'required|min:8|max:30',
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
            'role'=>'teachingassistant',
           ]);
        $tch=TeachingAssistant::create([
        'id'=>$request->id,
        'full_name'=>$request->full_name,
        'email'=>$request->email,
        'password'=>bcrypt($request->password),]);
        
        if($tch)
        {
            $array=[
                'data'=>new TeachingAssistantResource($tch),
                'message'=>'Teaching Assistant Created',
                'status'=>201,
            ];

            return response($array);
        }

        return response(null,400,['The Teaching Assistant Not Created!']);
    }
public function update_teachingassistant(AdminRequest $request,$id)
    {

        
        $U=User::find($id);
        $U->update(['name'=>$request->full_name,
        'email'=>$request->email]);

        $tch=TeachingAssistant::find($id);
        $tch->update($request->all());
        if($tch)
        {
            $array=[
                'data'=>new TeachingAssistantResource($tch),
                'message'=>'Teaching Assistant Updated',
                'status'=>201,
            ];

            return response($array);
        }

        return response(null,400,['The Teaching Assistant Not Found!']);
    }
public function search_teachingassistant(AdminRequest $request,$id)
    {
        $tch=TeachingAssistant::find($id);
        if($tch)
        {
            $array=[
                'data'=>new TeachingAssistantResource($tch),
                'message'=>'Teaching Assistant Found',
                'status'=>201,
            ];

            return response($array);
        }

        $array=[
            'data'=>null,
            'message'=>'Teaching Assistant Not Found',
            'status'=>404,
        ];

        return response($array);
    }
public function delete_teachingassistant(AdminRequest $request,$id)
    {
        $tch=TeachingAssistant::find($id);
        $U=User::find($id);
        if(!$tch)
        {
            $array=[
                'data'=>null,
                'message'=>'Teaching Assistant Not Found',
                'status'=>404,
            ];
    
            return response($array);
        }
        $tch->delete();
        $U->delete();

        $array=[
            'data'=>null,
            'message'=>'Teaching Assistant Deleted',
            'status'=>200,
        ];

        return response($array);
    }
public function Teaching_Assistant_schedular(TeachingAssistantRequest $request,$id)
    {
        $data =TeachingAssistantSchedular::where('teaching_assistant_id', $id)->get();
        $array = [
            'data' =>TeachingAssistantSchedularResource::collection($data),
            'message' => 'schedule created',
            'status' => 200,
        ];
    
        return response()->json($array);
    }
    public function Teaching_Assistant_cource(TeachingAssistantRequest $request, $id) {
    
        $data = TeachingAssistantSchedular::where('teaching_assistant_id', $id)->get();

        $courseCodes = $data->pluck('course_code')->unique();
    
        $courseDetails = Course::whereIn('course_code', $courseCodes)->get();
    
        $array = [
            'data' => $courseDetails,
            'message' => 'all courses',
            'status' => 200,
        ];
        return response()->json($array);
    }
 public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
public function login(Request $request)
    {
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
public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
 public function refresh() 
    {
        return $this->createNewToken(auth()->refresh());
    }
public function userProfile($id) 
    {
        $t=TeachingAssistant::where('id',$id)->get();
        return response($t);
    }
protected function createNewToken($token)   
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}

