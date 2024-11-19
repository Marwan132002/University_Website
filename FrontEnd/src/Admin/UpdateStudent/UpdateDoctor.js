import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Componant/Navbar/Navbar";
import "../StyleAdmin.css";
import introPhoto from "../../Photo/Coding workshop.svg";
import { useNavigate } from "react-router-dom";
import "./updatedoctor.css"
export default function UpdateDoctor() {
  const [id, setid] = useState('');
  const [full_name, setname] = useState('');
  const [email, setemail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const nav=useNavigate();
  const id1 = window.location.pathname.split("/").slice(-1)[0];
  const token=window.localStorage.getItem('token')
  useEffect(() =>{
   const res =axios.get(`http://127.0.0.1:8000/api/core/doctor/user-profile/${id1}`,{
     headers:{
       Accept: "application/json",
       Authorization:"Bearer" + token, 
       
     },
   })
   .then((data) => {
    setid(data.data[0].id)
    setname(data.data[0].full_name)
    setemail(data.data[0].email)
    console.log(id)
   })
   .catch((err) => console.log(err))
 },[]);
  
async function Submit(e){
  e.preventDefault();
  try{
   let res = await axios.post(`http://127.0.0.1:8000/api/core/admin/updatedoctor/${id}`,
   {
    id:id,
    full_name:full_name, 
    email:email,
    token
    });
    if(res.status===200){
    nav("/editstudent")}
  }catch(err){
    console.log(err)
  }  
  }
  async function deleteUser(id){
    console.log(id)
    console.log(token)
        let res=await axios.post(`http://127.0.0.1:8000/api/core/admin/deletedoctor/${id}`,{token},{
        headers:{
          Accept: "application/json",
          Authorization:"Bearer" + token, 
          
        },
      })
      console.log(res.status)
      if(res.status===200){
        nav("/editstudent")}
    }

  return (    
    
      <div className="Main-admin">
        <Nav/>
        <div className="screen-admin">
        <img className="logphoto" src={introPhoto} alt="photos" />
        <form className="login-admin"onSubmit={Submit}>
          <p className="headTxt-admin">Update Doctor </p>
          <hr className="hr-admin"/>
          <input type="text" className="id-admin"  required value={id} disabled onChange={(e) => setid(e.target.value)}/><br/><br/>
            <input type="text" className="input-admin"  required value={full_name} onChange={(e) => setname(e.target.value)}/><br/><br/>
            <input type="email" className="input-admin"  required value={email} onChange={(e) => setemail(e.target.value)}/><br/><br/>
            <br/>
            <br/>
          <button type="submit" className="submit58">Update</button>				
          
        </form>
        <br></br>
        <button type="submit" className="submit-admin2" onClick={()=> deleteUser(id)} >Delete</button><br/>
        {error && <p  style={{ color: 'red'}}>{error}</p>}
        {success && <p  style={{ color: 'green',marginLeft:"30px"}}>{success}</p>}
        
      </div>
        </div>
      
    
  );
}
