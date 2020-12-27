import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome home</h1>
      <Button as={Link} to='/google-login'>
        Google Login
      </Button>
    </div>
  );
};

export default Welcome;
