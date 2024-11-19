import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navbar/nav";
import grade from "../../Photo/Grades.svg";
import axios from "axios";
import "./style.css";
import { useParams } from "react-router-dom";
import attenimg from "../../Photo/Notebook.svg";

export default function DoctorGrades() {
  const [grades, setGrades] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [studentid, setStudentid] = useState("");
  const doctorid = window.localStorage.getItem("id");
  const token = window.localStorage.getItem("token");
  const { id: courseId } = useParams();

  const handleSearch = () => {
    const filteredGrades = grades.filter((grade) => grade.student_id == studentid);
    setSelectedGrades(filteredGrades);
    console.log(selectedGrades)

  };

  useEffect(() => {
    //The api is dummy needs to be checked
    axios
      .get(
        `http://127.0.0.1:8000/api/core/doctor/doctorgrade/${courseId}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer" + token,
          },
        }
      )
      .then((data) => {
        setGrades(data.data.data);
        setSelectedGrades(data.data.data);
        console.log(grades)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Nav />
      <div class="h1">
        <h1>
          <u>Grades</u>
        </h1>
      </div>
      <div class="div1"></div>
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
              : setSelectedGrades([...grades]);
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
                <td>Course code</td>
                <td>Course Title</td>
                <td>Type</td>
                <td>Student ID</td>
                <td> Max Grade </td>
                <td> Grade </td>
              </tr>
            </thead>
            <tbody>
              {selectedGrades.map((grade) => (
                <tr>
                  <td>{grade.course_code}</td>
                  <td>{grade.course_name}</td>
                  <td>{grade.type}</td>
                  <td>{grade.student_id}</td>
                  <td>{grade.max_grade}</td>
                  <td>{grade.grade}</td>
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
