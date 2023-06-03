import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Instructor = ({ instructor }) => {
  return (
    <Card className="my-3 p-3 rounded" key={instructor.id}>
      <Card.Body>
        <Link to={`/instructor/${instructor.id}`}>
          <Card.Title as="div">
            <strong>{instructor.name}</strong>
          </Card.Title>
        </Link>
        {instructor.lectures &&
          instructor.lectures.map((lec) => {
            return (
              <Card.Text>
                {lec.name} on {lec.date}
              </Card.Text>
            );
          })}
      </Card.Body>
    </Card>
  );
};

export default Instructor;
