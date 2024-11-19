import "./studentaffairs.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import StudentAffairs from "../../../Photo/sevice.svg";
export default function Student_Affairs(){
  return(
  <div>
    <Header/>
      <div className="affairs-screen">
        <div className="stu-txt">
        <h2>Student Service Office Scope</h2>
        <hr/>
        </div>
        
        <div className="txt">
        <p>OSS stands for Office of Student Services. It is a central location on campus<br></br>
        or Headquarters office where students can go for assistance with a variety of services,<br></br>
         including enrollment, registration, academic records, and financial payments. The OSS<br></br>
          also provides orientation for new students and answers inquiries regarding students<br></br>
          status and records.The purpose of establishing the OSS was to create a more convenient<br></br>
          and efficient experience for students. By gathering all student services in one location,<br></br>
           the OSS makes it easier for students to get the help they need. The OSS staff is also<br></br>
            trained to provide referrals to other departments on campus, if necessary.</p>
            <a href="oss.arish@su.edu.eg">oss.arish@su.edu.eg</a>
        </div>
        <div className="StudentAffairs-img">
          <img src={StudentAffairs} alt="StudentAffairs"/>
        </div>
      </div>
      <Footer/>
  </div>
  );
}