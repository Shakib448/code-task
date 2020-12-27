import React from "react";
import { Col, Card } from "react-bootstrap";

const AlbumMap = ({ content: { title, url } }) => {
  return (
    <Col className='my-3' md={4}>
      <Card style={{ border: "none" }} className='bg-dark text-white '>
        <Card.Img src={url} alt='Card image' />
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default AlbumMap;
