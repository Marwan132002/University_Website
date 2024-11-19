import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navbar/Navbar";
import grade from "../../Photo/Grades.svg";
import axios from "axios";
import "./style.css";
import { useParams } from "react-router-dom";
import attenimg from "../../Photo/Notebook.svg";

export default function DoctorGrades() {
  const [grades, setGrades] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [studentName, setStudentName] = useState("");
  const id = window.localStorage.getItem("id");
  console.log(id);
  const token = window.localStorage.getItem("token");
  const { id: courseId } = useParams();

  function handleSearch(name) {
    setSelectedGrades(grades.filter((grade) => grade.name.includes(name)));
  }

  useEffect(() => {
    //The api is dummy needs to be checked
    axios
      .get(
        `http://127.0.0.1:8000/api/core/doctor/${id}/course/${courseId}/studentgrades/`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer" + token,
          },
        }
      )
      .then((data) => {
        setGrades(data.data);
        setSelectedGrades(data.data);
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
          value={studentName}
          onChange={(e) => {
            e.target.value
              ? setStudentName(e.target.value)
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
                <td>Exam Name</td>
                <td>Type</td>
                <td>Student Name</td>
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
                  <td>{grade.student_name}</td>
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
