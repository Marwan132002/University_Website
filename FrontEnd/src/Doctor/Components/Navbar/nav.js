import "./nav.css";
import logo from "../../../Photo/logo.png";
import Nlogo from "../../../Photo/human.png";

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

export default function NAV(){
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

    return(
        <div className="lll"> 
            
            <header>
        <div class="logo">
            <a href="#">
                <img src={logo}/>
            </a>
        </div>
        <nav className="nb">
            <ul>
                <li><a href="/doctor/Schedule">SCHEULES</a></li>
                <li><a href="/doctor/courses">Course</a></li>
                <li><a target="_blank" href="https://amoodle.su.edu.eg/">LMS</a></li>
                <li><a target="_blank" href="https://www.ekb.eg/">Knowledge Bank</a></li>
                
            </ul>
        </nav>
        <ul className="dfy">
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
        </header>
    
        </div>

    
)}
