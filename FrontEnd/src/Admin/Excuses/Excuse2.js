import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Excuse2.css"
import Footer from "../Componant/Footer/Footer";
import Nav from "../Componant/Navbar/Navbar";
import axios from 'axios';

const Excuse2 = () => {
  const [excuse, setExcuse] = useState(null); // Initialize as null for proper conditional rendering
  const [state, setState] = useState(""); // State for acceptance/rejection
  const excuseId = window.location.pathname.split("/").slice(-1)[0]; // Get excuseId from the URL params
  const number = window.location.pathname.split("/").slice(-1)[0]; // Get excuseId from the URL params
  const token = localStorage.getItem('token');
  useEffect(() => {
    fetchExcuseDetails();
  }, []);
console.log(state)
  const fetchExcuseDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/core/admin/getoneexecuse/${excuseId}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const data = response.data; // Extract the data from the response
      setExcuse(data.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching excuse details:', error);
    }
  };

  const handleDownload = () => {
    let fileURL = excuse.file;
    if (!fileURL.startsWith("/")) {
      fileURL = "/" + fileURL;
    }
    fileURL = `http://127.0.0.1:8000/storage${fileURL}`; // Construct the file URL correctly
    console.log(`Attempting to open file URL: ${fileURL}`); // Log the URL for debugging
    window.open(fileURL, '_blank');
  };

  const confirm = async () => {
    try {
      console.log(token)
      console.log(state)
      console.log(excuseId)
      const response =  axios.post(`http://127.0.0.1:8000/api/core/admin/updateexecuse`,{excuseId,state}, {
        
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const data = response; // Extract the data from the response
      setExcuse(data);
      console.log(response);
    } catch (error) {
      console.error('Error updating excuse details:', error);
    }
  };

  const handleAccept = () => {
    setState('accepted');
    console.log(state)
  };

  const handleReject = () => {
    setState('not_accepted');
    console.log(state)
  };

  return (
    <div className="excuse-details-container">
      <Nav />
      <br /><br /><br />
      <br /><br /><br />

      {excuse ? (
        <>
          
          <h1 className='def'>Student Id :  {excuse.student_id}</h1>
          <p className='def'>{excuse.description}</p>
          <div className='buto'>
          <button onClick={handleDownload}>Download</button>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleReject}>Reject</button>
          </div>
          <br /><br />
          <button className='si' onClick={confirm}>Confirm</button>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <br /><br /><br />
      <Footer />
    </div>
  );
};

export default Excuse2;
