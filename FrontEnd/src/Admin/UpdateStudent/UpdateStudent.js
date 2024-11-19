import { useEffect, useState } from "react";
import axios from "axios";
import loginPhoto from "../../Photo/Coding workshop.svg";
import Nav from "../Componant/Navbar/Navbar"
import { useNavigate } from "react-router-dom";
import "./Updatestudent.css"
export default function UpdateStudent() {
  const [id, setid] = useState('');
  const [full_name, setname] = useState('');
  const [email, setemail] = useState('');
  const [gpa, setgpa] = useState('');
  const [cgpa, setcgpa] = useState('');
  const [type, settype] = useState('');
  const [accademic_advisor, setacademic_advisor] = useState('');
  const[training,setTraining]=useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const[values,setValues]=useState({
    id:id,
    full_name:'',
    gpa:'',
    cgpa:'',
    accademic_advisor:'',
    email:''
  })

  const nav=useNavigate();

  const id1 = window.location.pathname.split("/").slice(-1)[0];
  const token=window.localStorage.getItem('token')
  useEffect(() =>{
   axios.get(`http://127.0.0.1:8000/api/core/student/user-profile/${id1}`,{
     headers:{
       Accept: "application/json",
       Authorization:"Bearer" + token, 
       
     },
   })
   .then((data) => {
    setid(data.data[0].id)
    setname(data.data[0].full_name)
    setgpa(data.data[0].gpa)
    setcgpa(data.data[0].cgpa)
    setacademic_advisor(data.data[0].accademic_advisor)
    setemail(data.data[0].email)
    setTraining(data.data[0].training_id)

   })
   .catch((err) => console.log(err))
 },[]);
async function Submit(e){
  e.preventDefault();
  try{
   let res = await axios.post(`http://127.0.0.1:8000/api/core/admin/updatestudent/${id}`,
   { 
    full_name:full_name, 
    gpa:gpa,
    cgpa:cgpa, 
    accademic_advisor:accademic_advisor,  
    email:email,
    token
    }
  );
    console.log(res)
    if(res.status===200){
    nav("/editstudent")}
  }catch(err){
    console.log(err)
  }  
  }
 async function deleteUser(id){
  console.log(id)
  console.log(token)
      let res=await axios.post(`http://127.0.0.1:8000/api/core/admin/deletestudent/${id}`,{token},{
      headers:{
        Accept: "application/json",
        Authorization:"Bearer" + token, 
        
      },
    })
    console.log(res.data)
    if(res.status===200){
      nav("/editstudent")}
  }
  return (    
    
      <div className="Main-admin">
        <Nav/>
        <div>
        <div className="screen-admin-stu">
        <img className="logphoto-admin" src={loginPhoto} alt="photos" />

        <form className="login-admin" onSubmit={Submit}>
          <p className="headTxt">Update
           Student</p>
          <hr className="hr-admin"/>
            <input type="text" className="id-admin"  disabled value={id}/><br/>
            <input type="text" className="input-admin"  required value={full_name} onChange={(e) => setname(e.target.value)}/><br/>
            <input type="text" className="input-admin"  required value={gpa} onChange={(e) => setgpa(e.target.value)}/><br/>
            <input type="text" className="input-admin"  required value={cgpa} onChange={(e) => setcgpa(e.target.value)}/><br/>
            <input type="text" className="input-admin"  required value={accademic_advisor} onChange={(e) => setacademic_advisor(e.target.value)}/><br/>
            <input type="email" className="input-admin" required value={email} onChange={(e) => setemail(e.target.value)}/><br/>           
          <button type="submit" className="submit-admin">Update</button>			
        </form>
        <br/>
        <button type="submit" className="submit-admin2" onClick={()=> deleteUser(id)} >Delete</button><br/>
        {error && <p style={{ color: 'red' ,marginLeft:"30px"}}>{error}</p>}
        {success && <p  style={{ color: 'green',marginLeft:"30px" }}>{error}</p>}
        
      </div>
        </div>
      </div>
    
  );
}