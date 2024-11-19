import React, { useState, useEffect } from 'react';
import './Excuse1.css';
import Footer from "../Componant/Footer/Footer";
import Nav from "../Componant/Navbar/Navbar";
import axios from 'axios';
const Excuse1 = () => {
 const [excuses, setExcuses] = useState([]);
 const handleOpen = (excuseId) => {
    window.location.href = `/excuses2/${excuseId}`;
  }
  const token=localStorage.getItem('token')
  useEffect(() =>{
    axios.get(`http://127.0.0.1:8000/api/core/admin/getallexecuse`,{
      headers:{
        Accept: "application/json",
        Authorization:"Bearer " + token, 
        
      },
    })
    .then((data) => setExcuses(data.data.data))
    .catch((err) => console.log(err))
  },[]);

 return (
    <div className="excuses-container">
      <br/><br/>
      <Nav/>
      <br/>
      <h1>Excuses</h1>
      <hr className="hw"/>
      <div className='lists'>
      <ul className="excuses-list">
        {excuses.map((excuse) => (
          <li key={excuse.number} className="excuse-item">
            <p>{excuse.description}</p>
            <p>{excuse.student_id}</p>
            <button onClick={() => handleOpen(excuse.number)}>Open</button>
          </li>
        ))}
      </ul>
      </div>
      <br/><br/><br/>
        <Footer></Footer>
    </div>
 );
};

export default Excuse1;