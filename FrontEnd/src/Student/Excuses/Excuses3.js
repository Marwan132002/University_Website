import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Excuses3.css"
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import axios from 'axios';
const Excusestate = () => {
  const [excuses, setExcuse] = useState(null);
  const { id } = useParams();

  
const token=localStorage.getItem('token');
  useEffect(() =>{
    axios.get(`http://127.0.0.1:8000/api/core/student/getoneexecuse/${id}`,{
      headers:{
        Accept: "application/json",
        Authorization:"Bearer " + token, 
        
      },
    })
    .then((data) => setExcuse(data.data.data))
    .catch((err) => console.log(err))
  },[]);
  console.log(excuses)
  const exu=excuses.map((excuse) =>{
    return (
    <div>
      <p>{excuse.number}</p>
      <p>{excuse.description}</p>
      <p>{excuse.state}</p> 
    </div>)});
  return (
    <div className="excuse-details-container">
      <Navbar/>
      {exu}
      <br/><br/><br/>
      <Footer></Footer>
    </div>
  );
};

export default Excusestate;