import { useState }from "react";
import axios from "axios";
import "./login.css";
import logo from "../../Photo/logo2.png";
import introPhoto from '../../Photo/Coding workshop.svg';
import {useNavigate} from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const[Err,setErr]=useState(false);
  const [password, setpassword] = useState("");
  const[accept,setAccept]=useState(false)

  const nav=useNavigate();
  async function Submit(e){
    e.preventDefault();
    try{
     let res = await axios.post("http://127.0.0.1:8000/api/core/student/login",{
        email:email,
        password:password,
      });
      const { access_token, user } = res.data;
      window.localStorage.setItem("token", access_token);
      window.localStorage.setItem("user", JSON.stringify(user));
      window.localStorage.setItem("id", res.data.user.id);
      
    if (res.data.user.role=='student'){
      nav("/home")
    }else if(user.role=='doctor'||user.role=='teachingassistant')
    {
      nav('/doctor/Home')
    }else if(user.role=='admin')
    {
      nav('/Home1')
    }
    }catch(err){
        setAccept(true);
      }  
    }
  return (    
    
      <div className="Main">
        <img className="logo1" src={logo} alt="logo"/>
        <div>
        <div className="screen">
          <div className="logphoto">
        <img  src={introPhoto} alt="photos"/>
        </div>
        <form className="login"onSubmit={Submit}><br/>
          <p className="logs">LOG IN</p>
          <hr className="hrrs"/>
            <input type="text" className="email" placeholder="E-mail"  value={email} 
            onChange={(e) => setEmail(e.target.value)}/><br/><br/><br/>
            {accept && Err &&<p className="signinError1">Wroing E-mail</p>}

            <input type="password" className="password" placeholder="Enter Your Password"  
            value={password} onChange={(e) => setpassword(e.target.value)}/><br/><br/><br/>
            {password < 5 && accept && <p className="signinError2">Something Wrong with Your Password</p>}

          <button type="submit" className="submitt" >
            <span className="button__text">LOG IN</span>
          </button>				
        </form>
        <br/><br/>
        <a className="forgett" href="/forgetpassword" >Forgot Password </a>        
          </div>
        </div>
      </div>
  );
}
