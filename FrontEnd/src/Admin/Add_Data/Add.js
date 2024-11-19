import UploadFile from "../Componant/UploadFile/UploadFile";
import Footer from "../Componant/Footer/Footer";
import UploadedFile from "../Componant/UploadedFile/UploadedFiles";
import Nav from "../Componant/Navbar/Navbar";
import "../StyleAdmin.css";
import adminImage from "../../Photo/book.png";
import Education from "../../Photo/Education.svg";
export default function Add(){
    const PageName = "Add_New";
    return(
        <div>
            <Nav/>
            <div className="adminImage">
                <img src={adminImage} alt="traning" style={{marginTop:"50px"}}/>
            </div>
            <div className="education">
                <img src={Education} alt="education"/>
            </div>
            <div className="head-textAdmin">
            <h1>Upload Information</h1>
            <hr/>
            </div>
            <div>
            <UploadFile PageName={PageName}></UploadFile> <br/><br/><br/>
            <UploadedFile></UploadedFile>
            </div>
            <br/><br/><br/><br/><br/><br/>
            
            <div>
            <Footer></Footer>
            </div>
        </div>
        
    );
}