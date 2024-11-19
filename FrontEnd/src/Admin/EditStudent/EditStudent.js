import React, { useState, useEffect } from 'react';
import "./Edit.css";
import Footer from "../Componant/Footer/Footer";
import Nav from "../Componant/Navbar/Navbar";
import axios from "axios";
import "../StyleAdmin.css";
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import UpdateStudent from '../UpdateStudent/UpdateStudent';

function EditStudent() {
  const [searchTerm, setSearchTerm] = useState();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
 const nav=useNavigate();
  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    try {
      const token=window.localStorage.getItem('token')
      const response = await axios.get(`http://127.0.0.1:8000/api/core/admin/getuser/${searchTerm}`,{
      headers:{
        Accept: "application/json",
        Authorization:"Bearer" + token, 
        
      },
      
      }); 
      const fetchedUsers = response.data.data
      setUsers(fetchedUsers);
      update(users.id) 
    } catch (error) {
      console.error('Error', error);    
    }
  };

  // console.log(users)

  function update(id){
    if(users.role=="student"){
      nav(`/updatestudent/${id}`)
    }else if (users.role=="doctor"){
      nav(`/updatedoctor/${id}`)
    }else if ( users.role=="teachingassistant"){
      nav(`/updatetch/${id}`)
    }
  }
  
  function deleteUser(id){
    axios.delete(`http://127.0.0.1:8000/api/core/teachingassistant/deleteteachingassistant/${id}`)
  }

  
  return (
    <div>
      <Nav/>
            <div className="EditTxt">
            <h1>Edit Users</h1>
            <hr/>
            </div>
      <div>
        <input className="EditSearch" type="tel" placeholder="Search For User" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /><br/><br/>
        <button className='EditSearch-btn' onClick={handleSearch}>Search</button>
      </div>
      {users.length > 0 && (
        <div>
          <h2>Search Results</h2>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>role</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
              {users.map((user ,index) => (
               
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Link to={`/updatestudent/${user.id}`}><button>Update</button></Link>
                  <Link><button onClick={()=> deleteUser(user.id)}>Delete</button></Link>
                  </td>             
              </tr>
            
            ))}
              </tbody>
            </table>
           
       
        </div>
      )}
  
      <br/><br/><br/>
      <Footer />
    </div>
  );
}

export default EditStudent;
