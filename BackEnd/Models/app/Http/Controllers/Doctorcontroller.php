<?php


namespace App\Http\Controllers;
use App\Models\Doctor;
use App\Models\DoctorSchedular;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\DoctorResource;
use App\Models\User;
use App\Http\Resources\DoctorSchedularResource;
use App\Http\Requests\DoctorRequest;
use App\Http\Requests\AdminRequest;
use App\Models\Course;

class Doctorcontroller extends Controller
{
    public function add_doctor(AdminRequest $request){
        $validated=Validator::make($request->all(),[
            'id'=>'required|unique:doctor|integer',
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
            'role'=>'doctor',
           ]);
           $doctor=Doctor::create([
            'full_name'=>$request->full_name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
            'id'=>$request->id,]);
           if($doctor)
        {
            $array=[
                'data'=>new DoctorResource($doctor),
                'message'=>'doctor Created',
                'status'=>201,
            ];

            return response($array);
        }

        return response(null,400,['The doctor Not Created!']);

    }
    public function update_doctor(AdminRequest $request,$id)
    {
        
        $U=User::find($id);
        $U->update(['name'=>$request->full_name,
        'email'=>$request->email]);

        $doctor=Doctor::find($id);
        if(!$doctor)
        {
            $array=[ 
                'data'=>null,
                'message'=>'doctor not Found',
                'status'=>404,
            ];

            return response($array);
        }
        $doctor->update($request->all());
        if($doctor)
        {
            $array=[
                'data'=>new DoctorResource($doctor),
                'message'=>'doctor Updated',
                'status'=>201,
            ];

            return response($array);
        }
        return response(null,400,['The doctor Not Found!']);
    }
    public function search_doctor(AdminRequest $request,$id)
    {
        $doctor=Doctor::find($id);
        if($doctor)
        {
            $array=[ 
                'data'=>new DoctorResource($doctor),
                'message'=>'doctor Found',
                'status'=>201,
            ];

            return response($array);
        }

        $array=[
            'data'=>null,
            'message'=>'doctor Not Found',
            'status'=>404,
        ];

        return response($array);
    }
    public function delete_doctor(AdminRequest $request,$id)
    {
        $doctor=Doctor::find($id);
        $U=User::find($id);
        if(!$doctor)
        {
            $array=[
                'data'=>null,
                'message'=>'doctor Not Found',
                'status'=>404,
            ];
    
            return response($array);
        }
        $doctor->delete();
        $U->delete();
        $array=[
            'data'=>null,
            'message'=>'doctor Deleted',
            'status'=>200,
        ];

        return response($array);
    }
    public function doctor_schedular(DoctorRequest $request ,$id){
        $data =DoctorSchedular::where('doctor_id', $id)->get();
        $array = [
            'data' =>DoctorSchedularResource::collection($data),
            'message' => 'schedule created',
            'status' => 200,
        ];
    
        return response()->json($array);
    }
    public function doctor_cource(DoctorRequest $request, $id) {
    
        $data = DoctorSchedular::where('doctor_id', $id)->get();

        $courseCodes = $data->pluck('course_code')->unique();
    
        $courseDetails = Course::whereIn('course_code', $courseCodes)->get();
    
        $array = [
            'data' => $courseDetails,
            'message' => 'all courses',
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
        $d=Doctor::where('id',$id)->get();
        return response($d);
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
