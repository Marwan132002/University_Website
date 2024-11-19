
import Footer from "../Componant/Footer/Footer";
import "./News.css";
import Nav from "../Componant/Navbar/Navbar";

import adminImage from "../../Photo/ccc.png";
import axios from 'axios';
import Education from "../../Photo/Education.svg";
import { useState } from "react";
export default function UploadNews() {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState({ started: false, pc: 0 });
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState(null);
    const token = window.localStorage.getItem('token');
    const fd = new FormData();
  
    const handleUpload = () => {
      if (!file) {
        setMessage("No file selected");
        return;
      }
  
      fd.append('image', file);
      fd.append('token', token);
      fd.append('description', description);
      fd.append('title', title);
  
      setProgress(prevState => ({ ...prevState, started: true }));
  
      axios.post('http://127.0.0.1:8000/api/core/admin/storenews', fd, {
        onUploadProgress: (ProgressEvent) => {
          const percentCompleted = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
          setProgress(prevState => ({ ...prevState, pc: percentCompleted }));
        },
        headers: {
          "Customer-Header": "value",
        }
      })
      .then((res) => {
        setMessage("Uploading successfully");
        console.log(res.data);
      })
      .catch(err => {
        setMessage("Failed");
        console.error(err);
      });
    };
  
    return (
      <div>
        <div>
          <Nav/>
        </div>
        <div className="excuses-text">
          <h1>News</h1>
          <hr />
        </div>
        <div className="textarea">
          <input className="email"
            type="text"
            placeholder="What is the title?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /><br />
        </div>
        <div className="textarea">
          <input className="email"
            type="text"
            placeholder="What is the description?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          /><br />
        </div>
        <div className="excu">
          <img src={Education} alt="excuses" />
        </div>
        <div className="upload">
          <button type="button" className="btn-warning">
            <i className="fa-solid fa-arrow-up-from-bracket"></i>Upload Image
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </button>
        </div>
        <button className="uploadfile-btn" onClick={handleUpload}>
          Submit
        </button>
        <div className="coi">
        {progress.started && <progress max="100" value={progress.pc}></progress>}
        {message && <span>{message}</span>}
        </div>
        <br /><br /><br /><br /><br /><br /><br />
        
      <Footer/>
      </div>
    );
  }