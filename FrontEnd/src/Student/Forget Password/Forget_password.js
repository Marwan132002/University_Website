import axios from "axios";
import { useState } from "react";
import logo from "../../Photo/logo2.png";
import "./Forget_password.css";
import introPhoto from "../../Photo/Coding workshop.svg";
import { useNavigate } from "react-router-dom";

export default function Forget_password() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [accept, setAccept] = useState(false);
  const nav = useNavigate();

  async function Submit(e) {
    e.preventDefault();
    try {
      let res = await axios.post("http://127.0.0.1:8000/api/core/student/passwordforgot", {
        email,
      });
      setAccept(false); // Reset accept state on successful submission
      nav("/resetpassword");
    } catch (err) {
      setEmailError(true);
      setAccept(true);
    }
  }
  window.localStorage.setItem('email',email)
  return (
    <div className="forget-main">
      <img className="logo" src={logo} alt="Logo" />
      <div className="forget-pass">
      <div className="forget-img">
        <img src={introPhoto} alt="Introduction" />
      </div>
      <form className="forget-log" onSubmit={Submit}>
        <br />
        <p className="forget-txt">FORGET PASSWORD</p>
        <hr />
        <input
          type="text"
          className="email-txt"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && accept && <p className="error">Your email is wrong</p>}
        <br />
        <button type="submit" className="forget-btn">
          <a>SUBMIT</a>
        </button>
      </form>
      </div>
    </div>
  );
}
