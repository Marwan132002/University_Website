<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Training;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\trainingresource;
use App\Http\Requests\AdminRequest;
use App\Http\Requests\StudentRequest;
use App\Http\Requests\AdminAndStudentRequest;
use App\Models\Student;

class trainingController extends Controller
{
    public function add_training(AdminRequest $request)
    {
        $validated=Validator::make($request->all(),[
            'id'=>'required|unique:Training|integer',
            'name'=>'required|max:255',
            'date'=>'required',
            'location'=>'required',
            'details'=>'required',
            'company_name'=>'required',
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

        $train=Training::create($request->all());

        if($train)
        {
            $array=[
                'data'=>new trainingresource  ( $train),
                'message'=>'Training Added',
                'status'=>201,
            ];

            return response($array);
        }

        return response(null,400,['The Training Not Added!']);
    }
    public function update_training(AdminRequest $request,$id)
    {
        $validated=Validator::make($request->all(),[
            'id'=>'required|integer',
            'name'=>'required|max:255',
            'date'=>'required',
            'location'=>'required',
            'details'=>'required',
            'company_name'=>'required',
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

        $train=Training::find($id);
        if(!$train)
        {
            $array=[
                'data'=>null,
                'message'=>'train not found',
                'status'=>201,
            ];

            return response($array);
        }
        $train->update($request->all());
        if($train)
        {
            
            $array=[
                'data'=>new trainingresource  ( $train),
                'message'=>'Training Updated',
                'status'=>201,
            ];

            return response($array);
        }

        return response(null,400,['The Training Not Found!']);
    }
    public function search_training(AdminAndStudentRequest $request,$id)
    {
        $train=Training::find($id);
        if($train)
        {
            $array=[
                'data'=>new trainingresource  ( $train),
                'message'=>'training Found',
                'status'=>201,
            ];

            return response($array);
        }

        $array=[
            'data'=>null,
            'message'=>'training Not Found',
            'status'=>404,
        ];

        return response($array);
    }
    public function delete_training(AdminRequest $request,$id)
    {
        $train=Training::find($id);
        if(!$train)
        {
            $array=[
                'data'=>null,
                'message'=>'training Not Found',
                'status'=>404,
            ];
    
            return response($array);
        }
        $train->delete();

        $array=[
            'data'=>null,
            'message'=>'training Deleted',
            'status'=>200,
        ];

        return response($array);
    }
    public function get_all_training(AdminAndStudentRequest $request){
        $train=Training::all();
        $array=[
            'data'=>trainingresource::collection  ( $train),
            'message'=>'all training',
            'status'=>200,
        ];
        return $array;
    }
    public function reg_training(StudentRequest $request){
        $st=Student::find($request->stu_id);
        $st->update(['training_id'=>$request->training_id]);
        $array=[
            'data'=> ($st),
            'message'=>'regester training',
            'status'=>200,
        ];
        return $array;
    }
    
}
