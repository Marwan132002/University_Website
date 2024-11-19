import "./account.css";
import {useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function Account(){
  const[account,setAccount]=useState([]);
  const id=window.localStorage.getItem('id')
  console.log(id)
  const token=window.localStorage.getItem('token')
  useEffect(() =>{
   axios.get(`http://127.0.0.1:8000/api/core/student/user-profile/${id}`,{
     headers:{
       Accept: "application/json",
       Authorization:"Bearer" + token, 
       
     },
   })
   .then((data) => setAccount(data.data))
   .catch((err) => console.log(err))
 },[]);
 

  const showaccount=account.map((acc)=>(
    <tr>
      <td>{acc.id}</td>
      <td>{acc.full_name}</td>
      <td>{acc.gpa}</td>
      <td>{acc.cgpa}</td>
      <td>{acc.email}</td>
      <td>{acc.type}</td>
      <td>{acc.accademic_advisor}</td>
      <td>{acc.training_id}</td>
    </tr>
  ));
  return(
  <div className="account-screen">
    <Nav/>
    <div className="account-txt">
    <h1>Account</h1>
    <hr/>
    </div>
    <div>
    <table className="account-table">
          <thead>
            <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>GPA</th>
            <th>CGPA</th>
            <th>E-Mail</th>
            <th>Type</th>
            
            <th>Accademic Advisor</th>
            <th>Training ID</th>
            </tr>
          </thead>
          <tbody>{showaccount}</tbody>
        </table>
        </div>
  <Footer/>
  </div>)
}