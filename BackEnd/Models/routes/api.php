<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\Doctorcontroller;
use App\Http\Controllers\TeachingAssistantController;
use App\Http\Controllers\ExecuseController;
use App\Http\Controllers\trainingController;
use App\Http\Controllers\filecontroller;
use App\Http\Controllers\ReadExelFileController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\gradecontroller;
use App\Http\Controllers\attendancecontroller;
use App\Http\Controllers\deleteallcontroller;
use App\Http\Controllers\auth\ForgotPasswordController;
use App\Http\Controllers\auth\ResetPasswordController;

//use App\Http\Middleware\JWTMiddelware;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group([
    'middleware' => 'core',
    'prefix' => 'core'
], function () {
Route::group([
    'middleware' => 'api',
    'prefix' => 'admin'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
    Route::post('/passwordforgot',[ForgotPasswordController::class,'forgotPassword']);
    Route::post('/passwordreset',[ResetPasswordController::class,'resetPassword']);   
    Route::post('/sendfile',[ReadExelFileController::class,'sendfile']);
    Route::post('/deletefile/{fileid}',[ReadExelFileController::class,'deletefile']);
    Route::post('/storenews',[NewsController::class,'store']);
    Route::get('/getallnews',[NewsController::class,'Get_All_News']);
    Route::get('/getuser/{id}',[UserController::class,'get_user']);
    Route::get('/getallfiles/{type}',[filecontroller::class,'get_all_files']);
    Route::get('/deletefile/{id}',[filecontroller::class,'delete_file']);
    Route::get('/searchtraining/{id}',[trainingController::class,'search_training']);
    Route::post('/addtraining',[trainingController::class,'add_training']);
    Route::post('/updatetraining/{id}',[trainingController::class,'update_training']);
    Route::post('/deletetraining/{id}',[trainingController::class,'delete_training']);
    Route::get('/getalltraining',[trainingController::class,'get_all_training']);
    Route::post('/addstudent',[StudentController::class,'add_student']);
    Route::post('/updatestudent/{id}',[StudentController::class,'update_student']);
    Route::post('/deletestudent/{id}',[StudentController::class,'delete_student']);
    Route::post('/adddoctor',[Doctorcontroller::class,'add_doctor']);
    Route::post('/updatedoctor/{id}',[Doctorcontroller::class,'update_doctor']);
    Route::post('/deletedoctor/{id}',[Doctorcontroller::class,'delete_doctor']);
    Route::post('/addteachingassistant',[TeachingAssistantController::class,'add_teachingassistant']);
    Route::post('/updateteachingassistant/{id}',[TeachingAssistantController::class,'update_teachingassistant']);
    Route::post('/deleteteachingassistant/{id}',[TeachingAssistantController::class,'delete_teachingassistant']);
    Route::post('/updateexecuse',[ExecuseController::class,'update_execuse']);
    Route::get('/getallexecuse',[ExecuseController::class,'get_all_execuse']);
    Route::get('/getoneexecuse/{number}',[ExecuseController::class,'get_one_execuse']);
    Route::get('/studentgrades/{id}',[StudentController::class,'student_gardes']);
    Route::get('/studntattendance/{id}',[StudentController::class,'student_attendance']);
    Route::get('/searchstudent/{id}',[StudentController::class,'search_student']);
    Route::post('/deletealldata',[deleteallcontroller::class,'delete_all_data']);

});
Route::group([
    'middleware' => 'api',
    'prefix' => 'student'
], function ($router) {
    Route::post('/login', [StudentController::class, 'login']);
    Route::post('/logout', [StudentController::class, 'logout']);
    Route::post('/refresh', [StudentController::class, 'refresh']);//not
    Route::get('/user-profile/{id}', [StudentController::class, 'userProfile']);
    Route::post('/passwordforgot',[ForgotPasswordController::class,'forgotPassword']);//not
    Route::post('/passwordreset',[ResetPasswordController::class,'resetPassword']); //not   
    Route::get('/searchtraining/{id}',[trainingController::class,'search_training']);//not
    Route::get('/getalltraining',[trainingController::class,'get_all_training']);
    Route::post('/regestertraining',[trainingController::class,'reg_training']);
    Route::post('/addexecuse',[ExecuseController::class ,'add_execuse']);
    Route::get('/getoneexecuse/{number}',[ExecuseController::class,'get_one_execuse']);//not
    Route::get('/getoneexecusestudent/{id}',[ExecuseController::class,'get_all_execuse_student']);//not
    Route::get('/studentschedular/{id}',[StudentController::class,'student_schedular']);
    Route::get('/studentexamschedular/{id}',[StudentController::class,'student_exam_schedular']);
    Route::get('/studentcources/{id}',[StudentController::class,'student_cources']);
    Route::get('/studentgrades/{id}',[StudentController::class,'student_gardes']);
    Route::get('/studentattendance/{id}',[StudentController::class,'student_attendance']);
    Route::get('/getallnews',[NewsController::class,'Get_All_News']);//not
    


});
Route::group([
    'middleware' => 'api',
    'prefix' => 'doctor'
], function ($router) {
    Route::post('/login', [Doctorcontroller::class, 'login']);
    Route::post('/logout', [Doctorcontroller::class, 'logout']);
    Route::post('/refresh', [Doctorcontroller::class, 'refresh']);
    Route::get('/user-profile/{id}', [Doctorcontroller::class, 'userProfile']);    
    Route::post('/passwordforgot',[ForgotPasswordController::class,'forgotPassword']);
    Route::post('/passwordreset',[ResetPasswordController::class,'resetPassword']);
    Route::get('/doctorschedular/{id}',[Doctorcontroller::class,'doctor_schedular']);
    Route::get('/doctorcources/{id}',[Doctorcontroller::class,'doctor_cource']);
    Route::get('/doctorgrade/{code}',[gradecontroller::class,'doc_grade']);
    Route::get('/doctorattendance/{code}',[attendancecontroller::class,'doc_attendance']);
    Route::get('/getallnews',[NewsController::class,'Get_All_News']);
    Route::get('/studentgrades/{id}',[StudentController::class,'student_gardes']);
    Route::get('/studntattendance/{id}',[StudentController::class,'student_attendance']);
    
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'teachingassistant'
], function ($router) {
    Route::post('/login', [TeachingAssistantController::class, 'login']);
    Route::post('/logout', [TeachingAssistantController::class, 'logout']);
    Route::post('/refresh', [TeachingAssistantController::class, 'refresh']);
    Route::get('/user-profile/{id}', [TeachingAssistantController::class, 'userProfile']);    
    Route::post('/passwordforgot',[ForgotPasswordController::class,'forgotPassword']);
    Route::post('/passwordreset',[ResetPasswordController::class,'resetPassword']);
    Route::get('/TeachingAssistantschedular/{id}',[TeachingAssistantController::class,'Teaching_Assistant_schedular']);
    Route::get('/TeachingAssistantcources/{id}',[TeachingAssistantController::class,'Teaching_Assistant_cource']);
    Route::get('/teachingassistantgrade/{code}',[gradecontroller::class,'tch_grade']);
    Route::get('/getallnews',[NewsController::class,'Get_All_News']);
    Route::get('/studentgrades/{id}',[StudentController::class,'student_gardes']);
    Route::get('/studntattendance/{id}',[StudentController::class,'student_attendance']);
    
});
});
Route::middleware( ['jwt.verify'])->group(function() 
    {

    
    
    
    
        
    
    
    
    
    
    
});

