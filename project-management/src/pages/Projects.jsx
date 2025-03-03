import React, { useEffect, useState } from "react";
import { Container, Card, Button, Spinner, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2>Projects</h2>
        <Button variant="primary">+ Create Project</Button>
      </div>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        {projects.map((project) => (
          <Col key={project._id} md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="info">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
