import React from "react";
import {
  Container,
  Row,
  FormControl,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { dataImage, imageDataByName } from "../../redux/slice/imageSlice";
import Navigation from "../Navigation/Navigation";
import "./ImageCom.sass";
import { useForm } from "react-hook-form";

const ImageCom = () => {
  const dispatch = useDispatch();
  const {
    imageByKeyword: { results },
  } = useSelector(dataImage);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(imageDataByName(data));
  };

  document.title = "Image";

  return (
    <>
      <Navigation />
      <Container>
        <Row className='justify-content-center image__search'>
          <Form onSubmit={handleSubmit(onSubmit)} inline>
            <FormControl
              type='text'
              placeholder='Search...'
              className='mr-sm-2 my-3'
              name='keyword'
              ref={register}
            />
            <Button type='submit' variant='outline-success'>
              Search
            </Button>
          </Form>
        </Row>

        <Row className='mt-4 mb-4 justify-content-center'>
          {results ? (
            results
              .map((image) => (
                <Image key={image.id} src={image.urls.full} fluid />
              ))
              .slice(0, 1)
          ) : (
            <h1>Find your image</h1>
          )}
        </Row>
      </Container>
    </>
  );
};

export default ImageCom;
