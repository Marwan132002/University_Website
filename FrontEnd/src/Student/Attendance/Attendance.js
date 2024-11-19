import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navbar/Navbar";
import attenimg from "../../Photo/Notebook.svg";
import "./Attendance.css";
import axios from "axios";
import { User } from "../Auth/Context/UserContext";
export default function Attendance(){
  
  const[attendance,setAttendance]=useState([]);
  const id=window.localStorage.getItem('id')
  console.log(id)
  const token=window.localStorage.getItem('token')
  
  useEffect(() =>{
    axios.get(`http://127.0.0.1:8000/api/core/student/studentattendance/${id}`,{
      headers:{
        Accept: "application/json",
        Authorization:"Bearer" + token, 
        
      },
    })
    .then((data) => setAttendance(data.data.data))
    .catch((err) => console.log(err))
  },[]);
const showAttendance=attendance.map((atten)=>(
  <tr>
    <td>{atten.course_code}</td>
    <td>{atten.course_name}</td>
    <td>{atten.counter_lec}</td>
    <td>{atten.counter_sec}</td>
    <td>{atten.warning_no_1}</td>
    <td>{atten.warning_no_2}</td>
    <td>{atten.Banned}</td>
  </tr>
));
  return(
  <div>
    <Nav/>
    <div className="attendance">
      <h1>Attendance</h1>
      <hr />
    </div>
    <div>
    <table className="atten-table">
          <thead>
            <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>No.of absent(lec)</th>
            <th>No.of absent(P/T)</th>
            <th>Warning No.1</th>
            <th>Warning No.2</th>
            <th>Banned(Final Exam)</th>
            </tr>
          </thead>
          <tbody>{showAttendance}</tbody>
        </table>
    </div>
    <div className="atten-img">
      <img src={attenimg} alt="grade"/>
    </div>
  <Footer/>
  </div>
  );
}