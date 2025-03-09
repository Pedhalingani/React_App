import React from "react";
import { Container, Card, Button } from "react-bootstrap";

export default function Teams() {
  return (
    <Container className="mt-5">
      <h2 className="text-center text-primary">Teams</h2>
      <Card className="shadow-lg p-4">
        <Card.Body>
          <p className="lead">Manage your teams efficiently.</p>
          <Button variant="primary">Add Team</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}