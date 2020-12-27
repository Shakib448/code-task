import React, { useEffect } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { dataPost, postById } from "../../redux/slice/postSlice";
import Loader from "../Loader/Loader";

const PostDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const {
    loading,
    postByIdData: { title, body },
  } = useSelector(dataPost);

  useEffect(() => {
    dispatch(postById(id));
  }, [id, dispatch]);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <Row className='justify-content-center my-5 '>
          <Col className='my-4' md={12}>
            <Card className='text-center'>
              <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>{body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Button as={Link} to='/post' variant='dark'>
            Go Back
          </Button>
        </Row>
      )}
    </Container>
  );
};

export default PostDetails;
