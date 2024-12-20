<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\auth\ForgotPasswordRequest;
use App\Notifications\ResetPasswordNotification;
class ForgotPasswordController extends Controller
{
    public function forgotPassword(ForgotPasswordRequest $request){
        $input=$request->only('email');
        $user=User::where('email',$input)->first();
        $user->notify(new ResetPasswordNotification());
        $success['succees']=true;
        return response()->json($success,200);
    }
}
