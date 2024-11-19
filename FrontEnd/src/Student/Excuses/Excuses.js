import "./excuses.css";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import excuses from "../../Photo/Typing.svg";
import axios from 'axios';
import { useState } from "react";
export default function Excuses(){
  
  const[file,setFile]=useState(null);
  const[progress ,setProgress]=useState({started:false , pc:0});
  const[meg,setMeg]=useState(null);
  const token=window.localStorage.getItem('token')
  const id=window.localStorage.getItem('id')
  function handleupload(){
    if(!file){
      setMeg("No file selected");
      return;
    }
    
    const fd= new FormData();
    fd.append('file' , file);
    fd.append('student_id' , id);
    fd.append('token' ,token);
    fd.append('description' ,'ssada');
    setMeg("uploading ... ");
    setProgress(prevState => {
      return{...prevState , started:true}
    })
    axios.post('http://127.0.0.1:8000/api/core/student/addexecuse' ,
  fd,{
    onUploadProgress :(ProgressEvent) => {setProgress(prevState =>{
      return{...prevState , pc:ProgressEvent.progress*100}
    })},
    headers:{
      "Customer-Header":"value",
    }
  })
  .then((res) => {
    setMeg("uploading succeefuly");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  })
  .catch(err => {
    setMeg("Failed");
  });
  }

  
  return(
    <div className="main">
      <Navbar/>
      <div className="excuses-text">
        <h1>Excuses</h1>
        <hr></hr>
      </div>
      <div className="textarea">
        <textarea placeholder="What is your excuses ? "></textarea>
      </div>
      <div className="excu">
        <img src={excuses} alt="excuses"/>
      </div>
 
      <div className="upload">
        <button type="button" className="btn-warning">
        <i className="fa-solid fa-arrow-up-from-bracket"></i>Upload File
        <input type="file" onChange={(e) => {setFile(e.target.files[0])}}/>
        </button>
      </div>
        
    <button className="uploadfile-btn" onClick={handleupload}>
          Submit
        </button>
        <div className="meg">
    {progress.started && <progress max="100" value={progress.pc}></progress>}
    {meg && <span>{meg}</span>}

    </div>    
      <div className="reply-text">
      <a  href="/execusereply">Show me my Excuses</a>
      </div>
      <div style={{width:"100%"}}>
      <Footer />
      </div>
    </div>
    );
}