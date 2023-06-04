import React, { useEffect, useState } from "react";
import axios from "axios";
import Instructor from "../components/Instructor";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Course from "../components/Course";
import AssignForm from "../components/AssignForm";

const AdminPanel = () => {
  const [instructors, setInstructors] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/instructors")
      .then((response) => setInstructors(response.data));
    axios
      .get("http://localhost:4000/admin/courses")
      .then((response) => setCourses(response.data));
  }, []);

  return (
    <Container>
      <Row className="p-5">
        <Col md={3}>
          <div className="p-2 box rounded bg-dark text-center">
            <Link className="text-white " to={`/addInstructor`}>
              Add Instructor
            </Link>
          </div>
          {instructors.map((instructor) => {
            return <Instructor instructor={instructor} key={instructor.id} />;
          })}
        </Col>
        <Col md={3}>
          <div className="p-2 box rounded bg-dark text-center">
            <Link className="text-white " to={`/addCourse`}>
              Add Course
            </Link>
          </div>
          {courses.map((course) => {
            return <Course course={course} key={course.id} />;
          })}
        </Col>
        <Col md={5}>
          <AssignForm instructors={instructors} courses={courses} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
