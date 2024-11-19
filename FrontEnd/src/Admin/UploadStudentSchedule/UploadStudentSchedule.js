import UploadFile from "../Componant/UploadFile/UploadFile";
import Footer from "../Componant/Footer/Footer";
import UploadedFile from "../Componant/UploadedFile/UploadedFiles";
import introimage from "../../Photo/SU.jpg";
import Nav from "../Componant/Navbar/Navbar";
import "../StyleAdmin.css";
import adminImage from "../../Photo/ccc.png";
import Education from "../../Photo/Education.svg";
import { useState , useEffect } from "react";
import axios from 'axios';
//import "./UploadStudentSchedule.css"
export default function UploadStudentSchedule(){
    const PageName = "course";
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        setLoading(true);
        try {
            const response = await axios.delete('api');
            console.log(response);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return(
        <div>
            <Nav/>
            
            <div className="adminImage">
                <img src={adminImage} alt="traning" style={{marginTop:"50px"}}/>
            </div>
            
            <div className="head-textAdmin">
            <h1>Study Schedule</h1>
            <hr/>
            </div>
            
           
            <div>
            <UploadFile PageName={PageName}></UploadFile> <br/><br/><br/>
            <UploadedFile PageName={PageName} ></UploadedFile>
            </div>
           
            <br/><br/>
            <div style={{textAlign:"center",marginBottom:"20px", marginRight: "50px"}}>
                <button 
                    style={{
                        backgroundColor: 'red',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                    onClick={handleDelete}
                    disabled={loading}
                >
                    {loading ? 'Deleting...' : 'Delete All Data'}
                </button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            
            <div>
            <Footer></Footer>
            </div>
        </div>
        
    );
}