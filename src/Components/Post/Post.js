import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";

const Post = () => {
  document.title = "Post";
  return (
    <>
      <Navigation />
      <Container></Container>
    </>
  );
};

export default Post;
