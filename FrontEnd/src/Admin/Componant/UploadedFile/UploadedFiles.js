import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Uploaded_Files.css"

const Uploaded = (props) => {
  const [files, setFiles] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [fileToDelete, setFileToDelete] = useState(null);
  const token = localStorage.getItem("token");
  const type = props.PageName;

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/core/admin/getallfiles/${type}`, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((data) => setFiles(data.data.data))
      .catch((err) => console.log(err))
  }, []);

  const deleteFile = (id) => {
    setFileToDelete(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    axios.delete(`api/${fileToDelete}`)
      .then(response => {
        const updatedFiles = files.filter(file => file.id !== fileToDelete);
        setFiles(updatedFiles);
        setShowConfirm(false);
      })
      .catch(error => {
        console.log(error);
        alert("Failed");
      });
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };
  
  

  return (
    <div className='Subo'>
      
        <div>
          <table className='show1'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {files.map(file => (
        <tr key={file.id} >
          <td >{file.name}</td>
          <td>{file.date}</td>
          <td><button className='delobu' onClick={() => deleteFile(file.id)}>Delete</button></td>
          
        </tr> ))}
        </tbody>
      </table>
      {showConfirm && (
        <div className="confirmo">
          <div className="confirmo2">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this file?</p>
            <button onClick={handleConfirmDelete}>OK</button>
            <button onClick={handleCancelDelete}>Cancel</button>
          </div>
          <div className="drop" onClick={handleCancelDelete} />
        </div>
      )}
      {showConfirm && (
        <div className="blur" />
      )}
          
        </div>
     
    </div>
  );
};

export default Uploaded;