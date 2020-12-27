import React from "react";
import { Button, Container, Col } from "react-bootstrap";
import "./Welcome.sass";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Container className='welcome'>
      <Col component='div'>
        <h1>Welcome Assignment Master</h1>
        <Button variant='dark' as={Link} to='/google-login'>
          Google Login
        </Button>
      </Col>
    </Container>
  );
};

export default Welcome;
