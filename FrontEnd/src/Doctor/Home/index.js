import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import "./Home.css";
import Homeimg from "../../Photo/SU.jpg";
import axios from "axios";
export default function DoctorHome() {
  const [news, setNews] = useState([]);
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      //The api is dummy needs to be checked
      const response = await axios.get(
        "http://127.0.0.1:8000/api/core/doctor/getallnews",
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer" + token,
          },
        }
      );
      console.log(response.data.data);
      setNews(response.data.data);
    }
    fetchData();
  }, []);

  const mydata = news.map((data) => {
    return (
      <div className="home-data">
        <img
          src={"assets/NewsImage/" + data.image}
          style={{ width: 200, height: 200 }}
          alt="image"
        />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <div className="image">
        <img src={Homeimg} alt="Home-image" />
        <p className="text-imge">EDUCATION FOR THE FUTURE</p>
      </div>

      <div className="head-text">
        <h1 className="">News & Events</h1>
        <hr />
        <div>{mydata}</div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
