import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import trainIma from"../../Photo/book.png";
import education from "../../Photo/Education.svg";
import "./training.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export default function Training(){
  const [trainingPhotos, setTrainingPhotos] = useState([]);
  const [dat, setdat] = useState([]);
  const token =window.localStorage.getItem('token');
  const stu_id=localStorage.getItem('id')
  const nav=useNavigate();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://127.0.0.1:8000/api/core/student/getalltraining',{ headers:{
        Accept: "application/json",
        Authorization:"Bearer" + token, 
        
      },});
      setdat(response.data.data);
    }   
    fetchData();
  }, []);

    async function rertraining(training_id) {
      const response = await axios.post('http://127.0.0.1:8000/api/core/student/regestertraining',{training_id,stu_id},{ headers:{
        Accept: "application/json",
        Authorization:"Bearer" + token, 
        
      },});
      console.log(response.data.status)
      if (response.data.status===200){
        nav('/home')
      }
    }
  
  const mycontent = dat.map((content) =>{
    return (
    <div className="contect-tr">
      <h2>{content.id} : {content.name} </h2>
      <p><b>Company Name : </b>{content.company_name}</p>
      <p><b>details : </b>{content.details}</p>
      <p><b>Location : </b>{content.location}</p>
      <p><b>Date : </b>{content.date}</p>  
      <button className="training-btn" onClick={()=>rertraining(content.id)}>Register</button>
    </div>)});
  return(
  <div className="stu_tr">
    <div>
    <Navbar/>
    </div>
   
    <div className="image">
      <img src={trainIma} alt="traning"/>
    </div>
    <div className="eduImage">
      <img src={education} alt="education"/>
    </div>
    <div className="head-text">
        <h1 >Training</h1>
        <hr></hr>
        </div>
        <div className="trdata">
        {mycontent}
        </div>
  
    <Footer/>
  </div>);
}