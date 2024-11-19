<?php

namespace App\Http\Controllers;
use App\Http\Requests\AdminRequest;
use App\Models\Course;
use App\Models\cource_schedular;
use App\Models\DoctorSchedular;
Use App\Models\exam_course_schedular;
use App\Models\ExamSchedular;
use App\Models\ExamSchedularCourse; 
use App\Models\Grade;
use App\Models\StudentAttendance;
use App\Models\StudentSchedular;
use App\Models\StudentSchedularCourse;
use App\Models\TeachingAssistantSchedular;
use App\Models\Execuses;
use App\Models\student_exam_schedular;
use App\Models\StudentCourse;

use Illuminate\Http\Request;
class deleteallcontroller extends Controller
{
    public function delete_all_data(AdminRequest $requste ){
        Course::truncate();
        Cource_Schedular::truncate();
        DoctorSchedular::truncate();
        Exam_Course_Schedular::truncate();
        ExamSchedular::truncate();
        ExamSchedularCourse::truncate();
        Grade::truncate();
        StudentAttendance::truncate();
        StudentSchedular::truncate();
        StudentSchedularCourse::truncate();
        TeachingAssistantSchedular::truncate();
        Execuses::truncate();
        Student_Exam_Schedular::truncate();
        StudentCourse::truncate();

        return response()->json(['message' => 'All data deleted successfully'], 200);
    }
}
