import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default function DoctorCourses() {
  const [courses, setCourses] = useState([]);

  const doctorId = window.localStorage.getItem("id");
  console.log(doctorId);
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    //The api is dummy needs to be checked
    axios
      .get(`http://127.0.0.1:8000/api/core/doctor/doctorcources/${doctorId}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer" + token,
        },
      })
      .then((data) => setCourses(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="m-5">
        <div className="studentTxt">
          <h1>Courses</h1>
          <hr />
        </div>

        <div className="w-50 border p-3 mx-auto">
          {courses.map((course) => (
            <div key={course.id} className="d-flex align-items-center rmb-3">
              <div className="col-6">
                <h2 className="fs-4 mb-0">{course.name}</h2>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end gap-5">
                <Link
                  to={`/doctor/courses/${course.id}/grades`}
                  className={`btn ${styles.primaryButton} text-white`}
                  tabindex="-1"
                  role="button"
                  aria-disabled="true"
                >
                  Grades
                </Link>

                <Link
                  to={`/doctor/courses/${course.id}/attendance`}
                  className={`btn ${styles.primaryButton} text-white`}
                  tabindex="-1"
                  role="button"
                  aria-disabled="true"
                >
                  Attendance
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
