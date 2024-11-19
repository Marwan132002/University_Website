import React, { useState, useEffect } from 'react';
import "./Course.css";
export default function Course() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <select className='selc' value={selectedCourse} onChange={handleChange}>
      <option value="">Select a course</option>
      {courses.map(course => (
        <option key={course.id} value={course.name}>
          {course.name}
        </option>
      ))}
    </select>
  );
}
