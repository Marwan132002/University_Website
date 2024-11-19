<?php

namespace App\Http\Controllers;
use App\Models\Execuses;
use App\Models\files;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\ExecuseResource;
use App\Http\Requests\AdminRequest;
use App\Http\Requests\StudentRequest;
use App\Http\Requests\AdminAndStudentRequest;
class ExecuseController extends Controller
{
    //student
    public function add_execuse(StudentRequest $request)
    {
        $validated = $request->validated();

        $des = 'execusefile';
        $filename =$request->file('file');
        $file_uploaded_path = $filename->store($des, 'public');

        $exe = Execuses::create([
            'description' => $request->description,
            'file' => $file_uploaded_path,
            'student_id' => $request->student_id
        ]);

        Files::create([
            'name' => $request->file->getClientOriginalName(),
            'date' => date("Y-m-d"),
            'file' => $file_uploaded_path,
            'type' => 'execuse'
        ]);

        if ($exe) {
            return response()->json([
                'data' => new ExecuseResource($exe),
                'message' => 'Execuse Created',
                'status' => 201,
            ]);
        }
        return response()->json([
            'data' => null,
            'message' => 'Execuse Not Created',
            'status' => 404,
        ]);
    }
    //dean
    public function update_execuse(AdminRequest $request){

        
        $exe=Execuses::where('number','=',$request->excuseId)->first();
        
        if($exe)
        {
            Execuses::where('number','=',$request->excuseId)->update(['state'=>$request->state]);
            $array=[
                'data'=>new ExecuseResource ($exe),
                'message'=>'Execuse Updated',
                'status'=>200,
            ];

            return response($array);
        }
        return response([null,404,'Execuse Not Updated']);
    }
    //dean
    public function get_one_execuse(AdminAndStudentRequest $request,$number){
        $exe=Execuses::where('number',$number)->first();
        $array=[
            'data'=>new ExecuseResource ($exe),
            'message'=>'one execuse',
            'status'=>201,
        ];
        return $array;
    }
    //dean
    public function get_all_execuse(AdminRequest $request){
    $exe=Execuses::where('state',null)->get();
    $array=[
        'data'=>ExecuseResource::collection ($exe),
        'message'=>'all null execuse',
        'status'=>201,
    ];
    return $array;
    }
    public function get_all_execuse_student(StudentRequest $request,$id){
        $exe=Execuses::where('student_id',$id)->get();
        if ($exe){
        $array=[
            'data'=> ExecuseResource::collection ($exe),
            'message'=>'all execuse',
            'status'=>201,
        ];
        
        }else{
            $array=[
                'data'=>[],
                'message'=>'no execuse',
                'status'=>201,
            ];  
        }
        return $array;
    }
}
