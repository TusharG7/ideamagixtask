import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const InstructorPanel = () => {
  const params = useParams();
  const [lecs, setLecs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/instructor/lectures", { id: params.id })
      .then(({ assignedLectures }) => setLecs(assignedLectures));
  }, [params.id]);

  return (
    <div>
      {lecs.map((lec) => {
        return (
          <Row className="border-primary">
            <Col md={2}>{lec.courseName}</Col>
            <Col md={2}>{lec.date}</Col>
          </Row>
        );
      })}
    </div>
  );
};

export default InstructorPanel;
