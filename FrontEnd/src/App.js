// Admin 
import Home1 from "./Admin/Home/Home";
import Excuse1 from "./Admin/Excuses/Excuse1";
import Excuse2 from "./Admin/Excuses/Excuse2";
import EditStudent from "./Admin/EditStudent/EditStudent";
import AddStudent from "./Admin/AddStudent/AddStudent";
import AddDoctor from './Admin/AddDoctor/AddDoctor';
import AddTeshchingAssistent from "./Admin/AddTeshchingAssistent/AddTeshchingAssistent";
import Add from "./Admin/Add_Data/Add";
import UploadStudentSchedule from "./Admin/UploadStudentSchedule/UploadStudentSchedule";
import UploadAttendance from "./Admin/UploadAttendance/UploadAttendance";
import UploadStudentCourse from "./Admin/UploadStudentCourses/UploadStudentCourse"
import UpdateStudent from "./Admin/UpdateStudent/UpdateStudent";
import UploadTraining from "./Admin/UploadTraining/UploadTraining";
import UploadNews from "./Admin/UploadNews/UploadNews";
import UploadExamSchedule from "./Admin/UploadExamSchedule/UploadExamSchedule";
import UploadGrades from "./Admin/UploadGrades/UploadGrades";
import UpdateDoctor from "./Admin/UpdateStudent/UpdateDoctor";
import Updatetch from "./Admin/UpdateStudent/Updatetch "


//Doctor
import DoctorHome from "./Doctor/Home/home";
import DoctorSchedule from "./Doctor/DoctorSchedule/doctorschedular";
import DoctorCourses from "./Doctor/DoctorCourses/doctor_cources";
import DoctorGrades from "./Doctor/DoctorGrades/doctor_grad";
import DoctorAttendance from "./Doctor/DoctorAttendance/docattendance";

// Student
import Login from "./Student/Login/Login";
import Home from "./Student/Home/Home";
import ScheduleOfAttendance from "./Student/ScheduleOfAttendance/Attendance";
import ScheduleOfGrages from "./Student/ScheduleOfGrades/Grades";
import ScheduleOfExam from "./Student/ScheduleOfExam/Exam_Schedule";
import ScheduleOfStudent from"./Student/ScheduleOfStudent/Student_Schedule";

import Forget_Password from "./Student/Forget Password/Forget_password";
import Execuses from "./Student/Excuses/Excuses";
import Training from "./Student/Training/Training";
import ExecuseReply from "./Student/ExcusesReply/ExcusesReply";
import Excusesstate from "./Student/Excuses/Excuses3";
import MainHome from "./Student/intro_pages/main_home/MainHome";
import Departments from "./Student/intro_pages/Departmens/Departments";
import Courses from "./Student/intro_pages/Courses/Courses";
import Student_Affairs from "./Student/intro_pages/Student Affairs/Student_Affairs";
import Teaching_Staff from "./Student/intro_pages/Teaching_stuff/Teaching_staff";
import Account from "./Student/Account/Account";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import ResetPassword from "./Student/ResetPassword/ResetPassword";
export default function App() {
  return (

    <BrowserRouter>
       <Routes>

      {/* Admin */}
    
     
      <Route path="/Home1" element={<Home1/>}/>
      <Route path="/addstudent" element={<AddStudent/>}/>
      <Route path="/addTeachingAssistent" element={<AddTeshchingAssistent/>}/>
      <Route path="/addDoctor" element={<AddDoctor/>}/>
      <Route path="/excuses1" element={<Excuse1/>}/>
      <Route path="/excuses2/:number" element={<Excuse2/>}/> 
      <Route path="/editstudent" element={<EditStudent/>}/>
      <Route path="/updatestudent/:id" element={<UpdateStudent/>}/>
      <Route path="/updatedoctor/:id" element={<UpdateDoctor/>}/>
      <Route path="/updatetch/:id" element={<Updatetch/>}/>
 
      <Route path="/add" element={<Add/>}/>
      <Route path="/UploadStudentCourse" element={<UploadStudentCourse/>}/>
      <Route path="/UploadStudentSchedule" element={<UploadStudentSchedule/>}/>
      <Route path="/UploadExamSchedule" element={<UploadExamSchedule/>}/>
      <Route path="/UploadGrades" element={<UploadGrades/>}/>
      <Route path="/UploadAttendance" element={<UploadAttendance/>}/>
      <Route path="/UploadTraining" element={<UploadTraining/>}/>
      <Route path="/UploadNews" element={<UploadNews/>}/>


      {/* Doctor */}
      <Route path="doctor/forget" element={<Forget_Password />} />
        <Route path="doctor/login" element={<Login />} />
        <Route path="doctor/Home" element={<DoctorHome />} />
        <Route path="doctor/Schedule" element={<DoctorSchedule />} />
        <Route path="doctor/courses" element={<DoctorCourses />} exact />
        <Route path="doctor/courses/:id/grades" element={<DoctorGrades />} />
        <Route path="doctor/courses/:id/attendance" element={<DoctorAttendance />} />

        {/* Student */}
        <Route path="/" element={<MainHome/>}/>
        <Route path="/forget" element={<Forget_Password/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        
        <Route path="/forgetpassword" element={<Forget_Password/>}/>
        <Route path="/excuses" element={<Execuses/>}/>
        <Route path="/execusereply" element={<ExecuseReply/>}/>
        <Route path="/execusestate/:id" element={<Excusesstate/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="departments" element={<Departments/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/Studentaffairs" element={<Student_Affairs/>}/>
        <Route path="/Teachingstaff" element={<Teaching_Staff/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>

        <Route path="/attendance" element={<ScheduleOfAttendance/>}/>
        <Route path="/examSchedule" element={<ScheduleOfExam/>}/>
        <Route path="/grades" element={<ScheduleOfGrages/>}/>
        <Route path="/studentSchedule" element={<ScheduleOfStudent/>}/>

      </Routes>
      </BrowserRouter>
     
    
  );
}



