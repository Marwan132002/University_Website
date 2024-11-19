import logo from "../../../Photo/logo.png";

import Nlogo from "../../../Photo/human.png";
import "./Navbar.css";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const token = window.localStorage.getItem('token');
const id = window.localStorage.getItem('id');

async function handleLogout() {
  await axios.post("http://127.0.0.1:8000/api/core/admin/logout", null, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  window.location.pathname = "/";
}

export default function Nav() {
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
        <a className="navbar-brand" href="/Home1">
          <img src={logo} style={{ width: "80px", height: "60px" }} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Schedules
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/UploadStudentSchedule">Study Schedule</a></li>
                <li><a className="dropdown-item" href="/UploadExamSchedule">Exam Schedule</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/UploadGrades">Grades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/UploadAttendance">Attendance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/excuses1">Excuses</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Others
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/editstudent">Edit</a></li>
                <li><a className="dropdown-item" href="/UploadTraining">Training</a></li>
                <li><a className="dropdown-item" href="/UploadNews">News</a></li>
                <li><a className="dropdown-item" href="/addstudent">Add New Student</a></li>
                <li><a className="dropdown-item" href="/addDoctor">Add New Doctor</a></li>
                <li><a className="dropdown-item" href="/addTeachingAssistent">Add New Teaching Staff</a></li>
                <li><a className="dropdown-item" href="/add">Upload Information</a></li>
                <li><a className="dropdown-item" href="/UploadStudentCourse">Student Courses</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {username} <img src={Nlogo} width="30px" />
              </a>
              <ul className="dropdown-menu">
              <li className="nav-item">
              <a className="nav-link" onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</a>
            </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
