import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import "./GoogleLogin.sass";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "../../FirebaseConfig/Firebase.config";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/slice/authSlice";

firebase.initializeApp(firebaseConfig);

const GoogleLogin = () => {
  const dispatch = useDispatch();

  //Location
  let location = useLocation();
  let history = useHistory();

  let { from } = location.state || { from: { pathname: "/" } };

  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      const res = await firebase.auth().signInWithPopup(providerGoogle);
      const { email, displayName, photoURL } = res.user;
      dispatch(
        authLogin({
          isSignIn: true,
          email: email,
          name: displayName,
          img: photoURL,
        })
      );
      history.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className='googleLogin'>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card className='google__form'>
            <Card.Body className='google__formBody'>
              <Card.Title>
                <h1>Login With </h1>
              </Card.Title>
              <Card.Text>
                <Button
                  className='googleLogin__btn'
                  onClick={handleGoogleSignIn}
                >
                  <img
                    className='googleLogin__img'
                    width='50'
                    height='50'
                    src='https://i.ibb.co/mNNmcGf/google.png'
                    alt=''
                  />
                  Continue With Google
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default GoogleLogin;
