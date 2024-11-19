import "./Home.css";
import Footer from "../Components/Footer/Footer";
import Nav from '../Components/Navbar/Navbar';
import Homeing from"../../Photo/SU.jpg";
import photo1 from "../../Photo/homepage.jpg";
import React, { useEffect, useState } from 'react';
export default function Home1(){
    const [news, setNew] = useState([]);
    const token=localStorage.getItem('token')
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://127.0.0.1:8000/api/core/admin/getallnews');
        const data = await response.json();
        setNew(data.data);
        console.log(data.data)

      }
      fetchData();
    }, []);
    
    const mydata = news.map((data) =>{
      return (
      <div className="home-data1">
      {data.image && (
              <img src={photo1} alt={'sss'}  />
            )}
        <h2>{data.title}</h2>
        <pre>{data.description}</pre>   
      </div>)});
    return(
        <div>
            <Nav/>
    
          
        <div className="image">
      <br/><br/><br/>
      <img src={Homeing} alt="Home-ima" className="home"/>
        </div>
        <p className="text-imge">INFORMATION TECHNOLOGY</p>
      
        <br/><br/><br/><br/><br/> <br/> <br/> <br/> <br/> 
        <div className="homeHead-text">
        <h1>News & Events</h1>
      <hr/>
      <div>
        {mydata}
      </div>
      
    
      <br/>
    </div>
    
        <div>
          <br/><br/><br/> <br/> <br/>
          <br/><br/><br/> <br/> <br/>
          <br/><br/><br/> <br/> <br/>
          <br/><br/><br/>
          <Footer/>
        </div>
        </div>
        
    );

}