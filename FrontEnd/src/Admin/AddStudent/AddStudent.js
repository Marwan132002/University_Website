import { useState } from "react";
import axios from "axios";
import loginPhoto from "../../Photo/Coding workshop.svg";
import Nav from "../Componant/Navbar/Navbar"

export default function AddStudent() {
  const [id, setid] = useState('');
  const [password, setpassword] = useState('');
  const [full_name, setname] = useState('');
  const [email, setemail] = useState('');
  const [gpa, setgpa] = useState('');
  const [cgpa, setcgpa] = useState('');
  const [type, settype] = useState('');
  const [accademic_advisor, setacademic_advisor] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleAdd = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const response = await axios.post('http://127.0.0.1:8000/api/core/admin/addstudent', { id, full_name, password, email, gpa, cgpa, type, accademic_advisor,token });
      const isAuthenticated = response.data;

      if (isAuthenticated) {
        setSuccess(true);
        setError('Student Created Successfully');
        setTimeout(() => {
          window.location.reload();
        }, 5000); 
      } 
    } catch (error) {
      setError("Failed");
      setTimeout(() => {
        window.location.reload();
        setError('');
      }, 5000); 
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    await handleAdd();
  };

  return (    
    
      <div className="Main-admin">
        <Nav/>
        <div>
        <div className="screen-admin-stu">
        <img className="logphoto-admin" src={loginPhoto} alt="photos" />
        <form className="login-admin" onSubmit={submit}>
          <p className="headTxt">Add Student</p>
          <hr className="hr-admin"/>
            <input type="text" className="id-admin" placeholder="Enter ID" required value={id} onChange={(e) => setid(e.target.value)}/><br/>
            <input type="text" className="input-admin" placeholder="Enter Name" required value={full_name} onChange={(e) => setname(e.target.value)}/><br/>
            <input type="number" className="input-admin" placeholder="Enter GPA" required value={gpa} onChange={(e) => setgpa(e.target.value)}/><br/>
            <input type="number" className="input-admin" placeholder="Enter CGPA" required value={cgpa} onChange={(e) => setcgpa(e.target.value)}/><br/>
            <input type="text" className="input-admin" placeholder="Enter Academic Advisor" required value={accademic_advisor} onChange={(e) => setacademic_advisor(e.target.value)}/><br/>
            <input type="email" className="input-admin" placeholder="Enter Email" required value={email} onChange={(e) => setemail(e.target.value)}/><br/>
            <input type="password" className="input-admin" placeholder="Enter Password" required value={password} onChange={(e) => setpassword(e.target.value)}/><br/><br/>
            <select  className="select-admin" required value={type} onChange={(e) => settype(e.target.value)}>
                <option value="">Choose a Type</option>
                <option value="Student">Regular</option>
                <option value="Doctor">Unregular</option>
            </select>
            <br/>
            <br/>
          <button type="submit" className="submit-admin">Submit</button>				
          
        </form>
        <br/>
        <div className="ero">
        {error && <p style={{ color: 'red' ,marginLeft:"30px"}}>{error}</p>}
        {success && <p  style={{ color: 'green',marginLeft:"30px" }}>{error}</p>}
        </div>
      </div>
        </div>
      </div>
    
  );
}