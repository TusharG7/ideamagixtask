import React, { useState } from "react";
import FormContainer from "./FormContainer";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AssignForm = ({ instructors, courses }) => {
  const history = useNavigate();
  const [selectedInstructor, setSelectedInstructor] = useState();
  const [selectedCourse, setSelectedCourse] = useState();
  const [date, setDate] = useState();
  async function assignLecture() {
    console.log(selectedInstructor, selectedCourse, date);
    try {
      await axios.post("http://localhost:4000/admin/lectures", {
        instructorId: selectedInstructor,
        courseId: selectedCourse,
        date: date,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <FormContainer>
      <Form onSubmit={assignLecture}>
        <h1>Assign A Lecture</h1>
        <Form.Group controlId="formBasicSelect" className="py-2">
          <Form.Label>Select Instructor</Form.Label>
          <Form.Control
            as="select"
            placeholder="Select Instructor"
            value={selectedInstructor}
            onChange={(e) => {
              console.log("instructorId: ", e.target.value);
              setSelectedInstructor(Number(e.target.value));
            }}
          >
            <option value="default">Select</option>
            {instructors.map((i) => {
              return <option value={i.id}>{i.name}</option>;
            })}
          </Form.Control>
          <Form.Group controlId="courseSelector" className="py-2">
            <Form.Label>Select Course</Form.Label>
            <Form.Control
              as="select"
              placeholder="Select Course"
              value={selectedCourse}
              onChange={(e) => {
                console.log("courseId:", e.target.value);
                setSelectedCourse(Number(e.target.value));
              }}
            >
              <option value="default">Select </option>

              {courses.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="datepicker" className="py-2">
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
          </Form.Group>

          <Button type="submit">Assign</Button>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default AssignForm;
