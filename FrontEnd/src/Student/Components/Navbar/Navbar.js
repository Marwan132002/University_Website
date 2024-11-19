import logo from '../../../Photo/logo.png';
import Nlogo from '../../../Photo/human.png';
import "./Navbar.css";
import Cookies from 'universal-cookie';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
export default function Nav() {
  const cookie =new Cookies();
  const id=window.localStorage.getItem('id')  
  const token=window.localStorage.getItem('token')
  async function handleLogout(){
    await axios.post("http://127.0.0.1:8000/api/core/student/logout" , null , {
      headers:{
        Authorization: "Bearer" + token,

      },
    });
    cookie.remove("Bearer");
    window.location.pathname="/";
  }
  const [username, setUserName] = useState('');
  
    useEffect(() => {
      async function fetchUser() {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/core/admin/getuser/${id}`, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + token,
            },
          });
          setUserName(response.data.data.name);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
      fetchUser();
    }, [id, token]);
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top my-navbar">
    <div className="container-fluid">
          <a className="navbar-brand" href="/Home">
    <img src={logo} style={{width:"80px", height:"60px"}}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
     aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Schedules
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/studentSchedule">Study Schedule</a></li>
            <li><a className="dropdown-item" href="/examSchedule">Exam Schedule</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/grades">Grades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/attendance">Attendance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/excuses">Excuses</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/training">Training</a></li>
            <li><a  target="_blank" className="dropdown-item" href="https://amoodle.su.edu.eg/">LMS</a></li>
            <li><a target="_blank" className="dropdown-item" href="https://www.ekb.eg/">Knowlegde Bank</a></li>
            <li><a target="_blank" className="dropdown-item" href="https://www.aun.edu.ng/docs/cgpa/">CGPA Calculator</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {username}  <img src={Nlogo} width='30px'/>
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/account">Account</a></li>
            <li ><a className="dropdown-item" onClick={handleLogout}>Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>


    
    
  </div>
</nav>
  );
}
