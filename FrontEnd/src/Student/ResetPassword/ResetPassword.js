import axios from "axios";
import { useState } from "react";
import logo from "../../Photo/logo2.png";
import "./resetpassword.css";
import { useNavigate } from "react-router-dom";
import introPhoto from '../../Photo/Coding workshop.svg';



export default function ResetPassword() {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const nav = useNavigate();
  const email=window.localStorage.getItem('email');
  const token=window.localStorage.getItem('token');
  
  async function Submit(e) {
    e.preventDefault();
    try {
      if (otp === "" || password.length < 5 || confirmpassword !== password) {
        setAccept(true);
        return;
      }

      const res = await axios.post("http://127.0.0.1:8000/api/core/student/passwordreset", {
        otp:otp,
        email,
        token,
        password:password,
        confirmpassword:confirmpassword,
      });

      nav("/");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log(err);
        // You can set some state here to display an "Unauthorized" message
      } else {
        console.log(err);
        setAccept(true);
      }
    }
  }

  return (
    <div className="reset-main">
      <img className="logo" src={logo} alt="Logo" />
      <div className="reset-pass">
      <div className="reset-img">
        <img src={introPhoto} alt="Introduction" />
      </div>
      </div>
      <form className="reset-form" onSubmit={Submit}>
       
        <p className="reset-txt">RESET PASSWORD</p>
        <hr className="reset-hr" />
        
        <input
          type="text"
          className="otp-txt"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        {otp === "" && accept && <p className="error">OTP is required</p>}
        <input
          type="password"
          className="newpass-txt"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password.length < 5 && accept && <p className="error">Password must be at least 5 characters</p>}
        <input
          type="password"
          className="newpass-txt"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmpassword !== password && accept && <p className="error">Passwords do not match</p>}
      <br/>
        <button type="submit" className="reset-btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
