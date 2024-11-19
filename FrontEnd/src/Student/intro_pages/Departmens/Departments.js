import Footer from "../../Components/Footer/Footer";
import "./departments.css";
import Header from "../../Components/Header/Header";
import departmentimg from "../../../Photo/department.svg";
export default function Departments(){
  return(
  <div className="main-screen">
    <Header/>
    <div className="department-txt">
      <h2>College departments:</h2>
      <h3>The college includes the following departments:-</h3>
      <p>1- Department of Computer Science and Software Engineering.</p>
      <div className="de-txt"><p>Directed By  Alaa Zaki</p></div>
      <p>2- Information Technology Department.</p>
      <div className="de-txt"><p>Directed By Hossam Eldin Saad </p></div>
      <p>3- Department of Information Systems and Decision Support.</p>
      <div className="de-txt" ><p>Directed By Ahmed Sharaf</p></div>
      </div>
     <div className="dep-img">
      <img src={departmentimg} alt="department" />
     </div>
    <Footer/>
  </div>
  );
}