import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navbar/nav"
import attenimg from "../../Photo/Notebook.svg";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DoctorAttendance() {
  const [attendances, setAttendances] = useState([]);
  const [selectedAttendances, setSelectedAttendances] = useState([]);
  const [studentid, setStudentid] = useState("");
  const id = window.localStorage.getItem("id");
  console.log(id);
  const token = window.localStorage.getItem("token");
  const { id: courseId } = useParams();

  const handleSearch = () => {
    const filteredatten = attendances.filter((attendance) => attendance.student_id == studentid);
    setSelectedAttendances(filteredatten);

  };

  useEffect(() => {
    //The api is dummy needs to be checked
    axios
      .get(
        `http://127.0.0.1:8000/api/core/doctor/doctorattendance/${courseId}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer" + token,
          },
        }
      )
      .then((data) => {
        setAttendances(data.data.data);
        setSelectedAttendances(data.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Nav />
      <div className="attendance p-5 mt-0 ml-0">
        <h1>Attendance</h1>
        <hr />
      </div>
      <div className="w-50 position-relative mx-auto">
        <input
          type="text"
          placeholder="Student Name"
          required
          style={{ boxShadow: "none", width: "100%" }}
          class="search-wrappercf"
          value={studentid}
          onChange={(e) => {
            e.target.value
              ? setStudentid(e.target.value)
              : setSelectedAttendances([...attendances]);
          }}
        />
        <button
          type="submit"
          class="custom-searsh-bottom"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <div class="table-container">
          <table>
            <thead>
              <tr>
              <td>course code</td>
                <td>Student ID</td>
                <td>course Name</td>
                <td>No. of Absent (Lec.)</td>
                <td>No. of Absent (P/T)</td>
                <td>Warning No. 1</td>
                <td> Warning No. 2 </td>
                <td> Banned(Final Exam) </td>
              </tr>
            </thead>
            <tbody>
              {selectedAttendances.map((attendances) => (
                <tr>
                  <td>{attendances.course_code}</td>
                  <td>{attendances.student_id}</td>
                  <td>{attendances.course_name}</td>
                  <td>{attendances.counter_lec}</td>
                  <td>{attendances.counter_sec}</td>
                  <td>{attendances.warning_no_1}</td>
                  <td>{attendances.warning_no_2}</td>
                  <td>{attendances.Banned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="atten-img">
        <img src={attenimg} alt="grade" />
      </div>
      <Footer />
    </div>
  );
}
