import UploadFile from "../Componant/UploadFile/UploadFile";
import Footer from "../Componant/Footer/Footer";
import UploadedFile from "../Componant/UploadedFile/UploadedFiles";
import Nav from "../Componant/Navbar/Navbar";
import "../StyleAdmin.css";
import adminImage from "../../Photo/ccc.png";
import Education from "../../Photo/Education.svg";
export default function UploadGrades(){
    const PageName = "grade";
    return(
        <div>
            <Nav/>
            <div className="adminImage">
                <img src={adminImage} alt="traning" style={{marginTop:"50px"}}/>
            </div>
            
            <div className="head-textAdmin">
            <h1>Grades</h1>
            <hr/>
            </div>
           <br/>
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