import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostMap = ({ post: { title, body, id } }) => {
  return (
    <Col className='my-3' md={4}>
      <Card style={{ textAlign: "center" }}>
        <Card.Body>
          <Card.Title className='text-truncate'> {title} </Card.Title>

          <Card.Text>{body}</Card.Text>
          <Card.Link as={Link} to={`/post-details/${id}`}>
            <Button variant='dark'>View</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostMap;
