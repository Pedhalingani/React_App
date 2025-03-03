import React, { useEffect, useState } from "react";
import { Container, Card, Button, Spinner, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/tasks");
        setTasks(res.data);
      } catch (err) {
        setError("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2>Tasks</h2>
        <Button variant="primary">+ Add Task</Button>
      </div>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        {tasks.map((task) => (
          <Col key={task._id} md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <p><strong>Status:</strong> {task.status}</p>
                <p><strong>Due:</strong> {new Date(task.dueDate).toDateString()}</p>
                <Button variant="info">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
