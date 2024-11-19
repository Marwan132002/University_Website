import logo from "../../../Photo/logo.png";
import "./Header.css";
export default function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top my-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src={logo} style={{width:"80px", height:"60px"}}/>
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link " href="/departments" >
          Departments
          </a>
        
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/studentaffairs">OSS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/teachingstaff">Teaching staff</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
      </ul>
    </div>
  </div>
</nav>
  );
}
