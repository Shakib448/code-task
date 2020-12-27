import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataPost, postData } from "../../redux/slice/postSlice";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";
import PostMap from "../PostMap/PostMap";
import { Container, Row } from "react-bootstrap";

const Post = () => {
  const dispatch = useDispatch();
  const { loading, postApiData } = useSelector(dataPost);

  useEffect(() => {
    dispatch(postData());
  }, [dispatch]);

  document.title = "Post";
  return (
    <>
      <Navigation />
      <Container style={{ marginTop: "150px" }}>
        {loading ? (
          <Loader />
        ) : (
          <Row>
            {postApiData.map((post) => (
              <PostMap key={post.id} post={post} />
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Post;
