import { useState } from "react";
import axios from "axios";
import loginPhoto from "../../Photo/Coding workshop.svg";
import Nav from "../Componant/Navbar/Navbar";
import "../StyleAdmin.css";
export default function AddTeshchingAssistent() {
  const [id, setid] = useState('');
  const [password, setpassword] = useState('');
  const [full_name, setname] = useState('');
  const [email, setemail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const handleAdd_T = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const response = await axios.post('http://localhost:8000/api/core/admin/addteachingassistant', { id, full_name,password,email,token});
      const isAuthenticated = response.data;

      if (isAuthenticated) {
        setSuccess(true);
        setError('Teaching Assistant Created Successfully');
        setTimeout(() => {
          window.location.reload();
        }, 1000); 
      } 
    } catch (error) {
      setError("Failed");
      setTimeout(() => {
        window.location.reload();

      },1000); 
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    await handleAdd_T();
  };

  return (    
    
      <div className="Main-admin">
        <Nav/>
        <div>
        <div className="screen-admin">
        <img className="logphoto-admin" src={loginPhoto} alt="photos" />
        <form className="login-admin"onSubmit={submit}>
          <p className="Teshchin-txt">Add Teshching Assistent</p>
          <hr className="hr-admin"/>
          <input type="text" className="id-admin" placeholder="Enter ID" required value={id} onChange={(e) => setid(e.target.value)}/><br/><br/>
            <input type="text" className="input-admin" placeholder="Enter Name" required value={full_name} onChange={(e) => setname(e.target.value)}/><br/><br/>
            <input type="email" className="input-admin" placeholder="Enter Email" required value={email} onChange={(e) => setemail(e.target.value)}/><br/><br/>
            <input type="password" className="input-admin" placeholder="Enter Password" required value={password} onChange={(e) => setpassword(e.target.value)}/><br/><br/>
            <br/>
            <br/>
          <button type="submit" className="submit-admin">Submit</button>				
          
        </form>
        <br/>
        <div className="ero">
        {!error && <p style={{ color: 'red'}}>{error}</p>}
        {success && <p  style={{ color: 'green'}}>{error}</p>}
        </div>
      </div>
        </div>
      </div>
    
  );
}
