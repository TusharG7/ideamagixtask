import React from "react";
import { Card } from "react-bootstrap";

const Course = ({ course }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body key={course.id}>
        <Card.Title as="div">
          <strong>{course.name}</strong>
        </Card.Title>
        <Card.Title as="h5">
          <strong>{course.description}</strong>
        </Card.Title>
        <Card.Title as="span">
          <strong>{course.level}</strong>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Course;
