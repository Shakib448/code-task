import React from "react";
import { Container, Card } from "react-bootstrap";

const PostComment = ({ comment: { name, body } }) => {
  return (
    <Container>
      <Card className='my-4'>
        <Card.Header>Comment</Card.Header>
        <Card.Body>
          <blockquote className='blockquote mb-0'>
            <p> {body} </p>
            <footer className='blockquote-footer'>
              Comment by{" "}
              <cite title='Source Title'>
                {" "}
                <b>{name}</b>{" "}
              </cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostComment;
