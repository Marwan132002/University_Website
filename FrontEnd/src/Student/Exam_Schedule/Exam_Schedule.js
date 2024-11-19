import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navbar/Navbar";
import examimge from "../../Photo/Studying.svg";
import "./Exam.css";
import axios from "axios";
import { User } from "../Auth/Context/UserContext";

export default function Exam_Schedule(){
    const [exam,setExam] =useState([]);
    const id=window.localStorage.getItem('id');
    console.log(id);
    const token=window.localStorage.getItem('token'); 
    useEffect(() =>{
      axios.get(`http://127.0.0.1:8000/api/core/student/studentexamschedular/${id}`,{
        headers:{
          Accept: "application/json",
          Authorization:"Bearer" + token, 
          
        },
      })
      .then((data) => setExam(data.data.data))
      .catch((err) => console.log(err))
    },[]);
    
const showexam=exam.map((ex)=>(
  <tr>
    <td>{ex.course_code}</td>
    <td>{ex.course_name}</td>
    <td>{ex.type}</td>
    <td>{ex.day}</td>
    <td>{ex.date}</td>
    <td>{ex.time}</td>
    <td>{ex.hall_code}</td>
  </tr>
));
    return(
    <div className="exam-screen">
      <Nav/>
      <br/><br/><br/>
        <div className="exam">
          <h1>Exam Schedule</h1>
          <hr></hr>
        </div>
        <table className="Exam-sch">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Exam Name</th>
              <th>Day</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>Room No.</th>
            </tr>
          </thead>
          <tbody>{showexam}</tbody>
        </table>
      <div className="examphoto">
        <img src={examimge} alt="exam" />
      </div>
      <Footer/>
    </div>
  );
}