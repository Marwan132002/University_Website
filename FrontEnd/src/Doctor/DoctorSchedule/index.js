import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
export default function DoctorSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [scheduleLectures, setScheduleLectures] = useState([]);

  const id = window.localStorage.getItem("id");
  console.log(id);
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    //The api is dummy needs to be checked
    axios
      .get(`http://127.0.0.1:8000/api/core/doctor/studentcources/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer" + token,
        },
      })
      .then((data) => setSchedule(data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    //The api is dummy needs to be checked
    axios
      .get(`http://127.0.0.1:8000/api/core/student/studentschedular/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer" + token,
        },
      })
      .then((data) => setScheduleLectures(data.data))
      .catch((err) => console.log(err));
  }, []);
  const showschedule1 = schedule.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.course_code}</td>
      <td>{user.course_name}</td>
      <td>{user.credit_hours}</td>
      <td>{user.type}</td>
    </tr>
  ));
  const showSchlec = scheduleLectures.map((sch) => (
    <tr>
      <td>{sch.course_code}</td>
      <td>{sch.course_name}</td>
      <td>{sch.day_lec}</td>
      <td>{"lec"}</td>
      <td>{sch.time_lec}</td>
      <td>{sch.hall_code_lec}</td>
    </tr>
  ));
  const showSchsec = scheduleLectures.map((sch) => (
    <tr>
      <td>{sch.course_code}</td>
      <td>{sch.course_name}</td>
      <td>{sch.day_sec}</td>
      <td>{"sec"}</td>
      <td>{sch.time_sec}</td>
      <td>{sch.hall_code_sec}</td>
    </tr>
  ));
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
          Schedule of Face to Face lec (at SU Al-Arish Campus)
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
          <tbody>{showSchlec}</tbody>
        </table>
      </div>
      <div className="sche-txt">
        <h3 className="text-center">
          Schedule of Face to Face sec (at SU Al-Arish Campus)
        </h3>
      </div>
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
        <tbody>{showSchsec}</tbody>
      </table>
      <Footer />
    </div>
  );
}
