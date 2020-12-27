import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { dataNasa, nasaData } from "../../redux/slice/nasaSlice";
import "./Nasa.sass";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

const Nasa = () => {
  const dispatch = useDispatch();
  const {
    loading,
    nasaApiData: { date, explanation, title, url },
  } = useSelector(dataNasa);

  useEffect(() => {
    dispatch(nasaData());
  }, [dispatch]);

  document.title = "Home";

  return (
    <Container fluid>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <Row>
            <Col variant='div' className='nasa__content'>
              <h1>{title}</h1>
              <h3>{date}</h3>
              <Image src={url} className='nasa__img' fluid />
              <h4>{explanation}</h4>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Nasa;
