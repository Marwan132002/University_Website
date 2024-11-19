import UploadFile from "../Componant/UploadFile/UploadFile";
import Footer from "../Componant/Footer/Footer";
import UploadedFile from "../Componant/UploadedFile/UploadedFiles";
import Nav from "../Componant/Navbar/Navbar";
import "../StyleAdmin.css";
import adminImage from "../../Photo/ccc.png";
import Education from "../../Photo/Education.svg";
export default function UploadStudentCourse(){
    const PageName = "student_course";
    return(
        <div>
            <Nav/>
            <div className="adminImage">
                <img src={adminImage} alt="traning" style={{marginTop:"50px"}}/>
            </div>
            <br/>
            <br/>
            
            
            <div className="head-textAdmin">
            <h1>Student Courses</h1>
            <hr/>
            </div>
            <div>
            <UploadFile PageName={PageName}></UploadFile> <br/><br/><br/>
            <UploadedFile PageName={PageName} ></UploadedFile>
            </div>
            <br/><br/><br/><br/><br/><br/>
            
            <div>
            <Footer></Footer>
            </div>
        </div>
        
    );
}