import React, { useEffect, useState } from "react";
import { Row, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { albumApiData, dataAlbum } from "../../redux/slice/albumSlice";
import AlbumMap from "../AlbumMap/AlbumMap";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

const Album = () => {
  document.title = "Album";

  const dispatch = useDispatch();
  const { loading, albumData } = useSelector(dataAlbum);

  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(albumApiData());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Row style={{ marginTop: "150px" }} className='justify-content-center'>
        <Button variant='dark' onClick={() => setShow(!show)}>
          {show ? "See Albums" : "Hide Albums"}
        </Button>
      </Row>
      {!show && (
        <Container className='my-4 '>
          {loading ? (
            <Loader />
          ) : (
            <Row>
              {albumData
                .map((content) => (
                  <AlbumMap content={content} key={content.id} />
                ))
                .slice(0, 100)}
            </Row>
          )}
        </Container>
      )}
    </>
  );
};

export default Album;
