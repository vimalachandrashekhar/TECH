import React from 'react';

function Course({ course }) {
  return (
    <div className="Course">
      <h3>{course.title}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <p>Price: {course.price}</p>
      <button>Enroll Now</button>
    </div>
  );
}

export default Course;
