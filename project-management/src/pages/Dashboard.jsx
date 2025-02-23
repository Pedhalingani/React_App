import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTasks, FaUsers, FaProjectDiagram, FaPlus } from "react-icons/fa";

export default function Dashboard() {
  return (
    <Container className="mt-5">
      <h2 className="text-center text-primary mb-4">Dashboard</h2>
      
      <Row>
        <Col md={4}>
          <Card className="shadow-sm text-center p-3">
            <FaProjectDiagram size={40} className="text-success" />
            <h4 className="mt-3">Total Projects</h4>
            <p className="fs-4 fw-bold">12</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm text-center p-3">
            <FaTasks size={40} className="text-warning" />
            <h4 className="mt-3">Total Tasks</h4>
            <p className="fs-4 fw-bold">45</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm text-center p-3">
            <FaUsers size={40} className="text-info" />
            <h4 className="mt-3">Total Teams</h4>
            <p className="fs-4 fw-bold">5</p>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
        <Col>
          <Button variant="primary" className="me-2">
            <FaPlus /> Add Project
          </Button>
          <Button variant="secondary">
            <FaPlus /> Assign Task
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
