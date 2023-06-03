import React, { useEffect, useState } from "react";
import axios from "axios";
import Instructor from "../components/Instructor";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Course from "../components/Course";

const AdminPanel = () => {
  const history = useNavigate();
  const [instructors, setInstructors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState();
  const [selectedCourse, setSelectedCourse] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/instructors")
      .then((response) => setInstructors(response.data));
    axios
      .get("http://localhost:4000/admin/courses")
      .then((response) => setCourses(response.data));
  }, []);

  async function assignLecture() {
    console.log(selectedInstructor, selectedCourse, date);
    try {
      await axios.post("http://localhost:4000/admin/lectures", {
        instructorId: selectedInstructor,
        courseId: selectedCourse,
        date: date,
      });
      history("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Link to={`/addInstructor`}>Add Instructor</Link>
          {instructors.map((instructor) => {
            return <Instructor instructor={instructor} key={instructor.id} />;
          })}
        </Col>
        <Col md={3}>
          <Link to={`/addCourse`}>Add Course</Link>
          {courses.map((course) => {
            return <Course course={course} key={course.id} />;
          })}
        </Col>
        <Col md={3}>
          <Form.Group controlId="formBasicSelect" onSubmit={assignLecture}>
            <Form.Label>Assign A Lecture</Form.Label>
            <Form.Control
              as="select"
              placeholder="Select Instructor"
              value={selectedInstructor}
              onChange={(e) => {
                console.log("instructorId: ", e.target.value);
                setSelectedInstructor(Number(e.target.value));
              }}
            >
              {instructors.map((i) => {
                return <option value={i.id}>{i.name}</option>;
              })}
            </Form.Control>
            <Form.Control
              as="select"
              placeholder="Select Course"
              value={selectedCourse}
              onChange={(e) => {
                console.log("courseId:", e.target.value);
                setSelectedCourse(Number(e.target.value));
              }}
            >
              {courses.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </Form.Control>
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              placeholder="Select Date"
              onChange={(e) => {
                console.log(e.target.value);
                setDate(e.target.value);
              }}
            />

            <Button onClick={() => assignLecture()}>Assign</Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
