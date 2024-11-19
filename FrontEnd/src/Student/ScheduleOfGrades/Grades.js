import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navbar/Navbar"
import grade from "../../Photo/Grades.svg";
import "./Grades.css";
import axios from "axios";
export default function Grades(){

  const[grades,setGrades]=useState([]);
  const id=window.localStorage.getItem('id')
  console.log(id)
  const token=window.localStorage.getItem('token')

  useEffect(() =>{
  axios.get(`http://127.0.0.1:8000/api/core/student/studentgrades/${id}`,{
    headers:{
      Accept: "application/json",
      Authorization:"Bearer" + token, 
      
    },
  })
  .then((data) => setGrades(data.data.data))
  .catch((err) => console.log(err))
},[]);

 console.log(grade)

  const showgrade=grades.map((grade)=>(
    <tr>
      <td>{grade.course_code}</td>
      <td>{grade.course_name}</td>
      <td>{grade.type}</td>
      <td>{grade.grade}</td>
      <td>{grade.max_grade}</td>
    </tr>
  ));
  return(
  <div>
    <Nav/>
    <div className="grades-txt">
    <h1>Grades</h1>
    <hr/>
    </div>
    <div>
    <table className="grades-table">
          <thead>
            <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Type</th>
            <th>Grade</th>
            <th>Max Grade</th>
            </tr>
          </thead>
          <tbody>{showgrade}</tbody>
        </table>
        </div>
    <div className="grad-img">
      <img src={grade} alt="grade" />

    </div>
  <Footer/>
  </div>
  
  );
}