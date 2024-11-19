<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Ichtrojan\Otp\Otp;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\auth\ResetPasswordRequest;
use App\Models\Student;
use App\Models\Dean;
use App\Models\Doctor;
use App\Models\TeachingAssistant;

class ResetPasswordController extends Controller
{
    private $otp;
    public function __construct(){
        $this->otp=new Otp();
    }
    public function resetPassword(ResetPasswordRequest $request)
    {
        // Renamed variable for clarity
        $otpValidation = $this->otp->validate($request->email, $request->otp);
        if ($request->password==$request->confirmpassword){
        if (!$otpValidation->status) {
            return response()->json(['error' => 'Invalid OTP'], 401); 
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404); 
        }

        $user->update([
            'password' => Hash::make($request->password)
        ]);
        if ($user->rule=='admin'){
            $de = Dean::where('email', $request->email)->first();
            $de->update([
                'password' => Hash::make($request->password)
            ]);
        }elseif($user->rule=='doctor'){
            $doct = Doctor::where('email', $request->email)->first();
            $doct->update([
                'password' => Hash::make($request->password)
            ]);
        }elseif($user->rule=='student'){
            $std= Student::where('email', $request->email)->first();
            $std->update([
                'password' => Hash::make($request->password)
            ]);
        }elseif($user->rule=='teachingassistant'){
            $tch =TeachingAssistant::where('email', $request->email)->first();
            $tch->update([
                'password' => Hash::make($request->password)
            ]);
        }

        $user->tokens()->delete();
        $success['success'] = true;

        return response()->json($success, 200);
    }
    else{
        return response()->json(['error' => 'passwords not same'], 404);
    }
}
}
