import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/nav";
import axios from "axios";

export default function DoctorSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [scheduleLectures, setScheduleLectures] = useState([]);
  const [user, setUser] = useState(null);

  const id = window.localStorage.getItem("id");
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/core/admin/getuser/${id}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id, token]);


  useEffect(() => {
    if (user) {
      const fetchSchedule = async () => {
        try {
          const role = user.role === "doctor" ? "doctor/doctorcources" : "teachingassistant/TeachingAssistantcources";
          const response = await axios.get(`http://127.0.0.1:8000/api/core/${role}/${id}`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          setSchedule(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchSchedule();
    }
  }, [user, id, token]);




  useEffect(() => {
    if (user) {
      const fetchSchedule = async () => {
        try {
          const role = user.role === "doctor" ? "doctor/doctorschedular" : "teachingassistant/TeachingAssistantschedular";
          const response = await axios.get(`http://127.0.0.1:8000/api/core/${role}/${id}`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          setScheduleLectures(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchSchedule();
    }
  }, [user, id, token]);

  const showschedule1 = schedule.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.course_code}</td>
      <td>{user.course_name}</td>
      <td>{user.credit_hours}</td>
      <td>{user.type}</td>
    </tr>
  ));

  const showSchle = () => {
    return scheduleLectures.map((sch) => (
      <tr key={sch.course_code}>
        <td>{sch.course_code}</td>
        <td>{sch.course_name}</td>
        <td>{sch.day}</td>
        <td>{user.role === 'doctor' ? 'lec' : 'sec'}</td>
        <td>{sch.time}</td>
        <td>{sch.hall_code}</td>
      </tr>
    ));
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="studentTxt">
        <h1>Schedule</h1>
        <hr />
      </div>
      <div>
        <table className="student-table">
          <thead>
            <tr>
              <th>Ser.</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Credit Hours</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{showschedule1}</tbody>
        </table>
      </div>
      <div className="sche-txt">
        <h3 className="text-center">
          Schedule of Face to Face {user?.role === 'doctor' ? 'lec' : 'sec'} (at SU Al-Arish Campus)
        </h3>
      </div>
      <div>
        <table className="student-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Day/Week</th>
              <th>Type</th>
              <th>Time</th>
              <th>Room No.</th>
            </tr>
          </thead>
          <tbody>{showSchle()}</tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
