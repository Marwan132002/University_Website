import "./Excuses2.css"
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import axios from 'axios';
import { useEffect, useState } from "react";
const token=window.localStorage.getItem('token')
const id=window.localStorage.getItem('id')
export default function Execusereply(){
  const [excuses, setExcuses] = useState([]);
  // const handleOpen = (excuseId) => {
  //   window.location.href = `/execusestate/${excuseId}`;
  // }
  useEffect(() =>{
    axios.get(`http://127.0.0.1:8000/api/core/student/getoneexecusestudent/${id}`,{
      headers:{
        Accept: "application/json",
        Authorization:"Bearer" + token, 
        
      },
    })
    .then((data) => setExcuses(data.data.data))
    .catch((err) => console.log(err))
  },[]);
  console.log(excuses)

    return(
        <div className="excuses-container">
        <br/><br/>
        <Navbar/><br/><br/>
        <h1>Excuses</h1>
        <hr className="hw"/>
        <div className='lists'>
        <ul className="excuses-list">
        {excuses.map((excuse) => (
          <li key={excuse.number} className="excuse-item">
            <p>Excuses Number : {excuse.number}</p>
            <p>Excuses Description : {excuse.description}</p>
            <div className="exc-txt">
            {excuse.state && <p >Excuses state : {excuse.state}</p>}
            {!excuse.state && <p >Excuses state : not seen yet</p>}
            </div>
           {/* <button onClick={() => handleOpen(excuse.number)}>Open</button> */}
  </li>
))}
        </ul>
        </div>
          <Footer></Footer>
      </div>

    );
        
    
}