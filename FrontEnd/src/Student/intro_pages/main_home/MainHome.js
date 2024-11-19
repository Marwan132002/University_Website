import './Mainhome.css';
import Footer from "../../Components/Footer/Footer";
import Homeing from "../../../Photo/SU.jpg";
import Header from '../../Components/Header/Header';
export default function MainHome(){
  return(
 
    <div>
      <Header/>
    <div className="image-home">
      <br/><br/><br/>
      <img src={Homeing} alt="Home-ima"/>
    </div>
    <p className="mainhome-txt">Information Technology</p>
    <br/>

    <div className="intro-txt">
      <h2>SINAI UNIVERSITY</h2>
      <h4>About Our University</h4>
      <p>Sinai University was established refereeing to the presidential decree<br/>
         number 363 for year 2005 in accordance to provisions of law number 101 <br/>
         year 1992 regarding the private Universities which was replaced by law <br/>
         number 12 year 2009 regarding the private and civil Universities and its<br/>
          executive regulations issued by the presidential decree number 302 for<br/>
           year 2010.</p>
    </div>
   
    <Footer />
  </div>
  )
}