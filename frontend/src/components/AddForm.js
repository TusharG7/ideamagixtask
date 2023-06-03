import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import axios from "axios";

const AddForm = ({ instructor, course }) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const history = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (instructor) {
        await axios.post("http://localhost:4000/admin/instructors", { name });
        history("/");
      } else if (course) {
        await axios.post("http://localhost:4000/admin/courses", {
          name,
          level,
          description,
          image,
        });
        history("/");
      }
    } catch (error) {
      return <Message>{error}</Message>;
    }
  };

  return (
    <FormContainer>
      <h1>Add {instructor ? "Instructor" : "Course"}</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="py-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {course && (
          <>
            <Form.Group controlId="level" className="py-2">
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="text"
                placeholder="A-'Easy' B-'Intermediate' C-'Expert'"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description" className="py-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image" className="py-2">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Upload Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </>
        )}

        <Button type="submit" variant="primary" className="my-2">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddForm;
