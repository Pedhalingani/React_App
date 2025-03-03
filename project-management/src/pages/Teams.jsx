import React, { useEffect, useState } from "react";
import { Container, Card, Button, Spinner, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/teams");
        setTeams(res.data);
      } catch (err) {
        setError("Failed to load teams");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">Teams</h2>
        <Button variant="primary">+ Add Team</Button>
      </div>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        {teams.map((team) => (
          <Col key={team._id} md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{team.name}</Card.Title>
                <p><strong>Members:</strong> {team.members.length}</p>
                <p><strong>Lead:</strong> {team.lead}</p>
                <Button variant="info">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
