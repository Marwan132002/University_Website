<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AdminRequest;
use App\Models\User;
use App\Models\Student;
use App\Models\Doctor;
use App\Models\TeachingAssistant;
use App\Models\Dean;

class UserController extends Controller
{
    public function get_user(request $request,$id){
        $dat=User::where('id',$id)->first();



        // if ($U->role=='student')
        // {
        //     $dat=Student::where('id',$id)->get();

        // }elseif($U->role=='doctor'){
        //     $dat=Doctor::where('id',$id)->get();

 
        // }elseif($U->role=='teachingassistant'){
        //     $dat=TeachingAssistant::where('id',$id)->get();

        // }elseif($U->role=='admin'){
        //     $dat=Dean::where('id',$id)->get();
        // }
        if ($dat)
        {
            $array=[
                'data'=>$dat,
                'message'=>'user found',
                'status'=>201,
            ];
        }else{
            $array=[
                'data'=> [],
                'message'=>'user not found',
                'status'=>404,
            ];
        }
        return response($array);
    }
    
}
