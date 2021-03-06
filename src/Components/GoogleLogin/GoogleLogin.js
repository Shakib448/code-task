import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import "./GoogleLogin.sass";
import { useHistory } from "react-router-dom";
import firebaseConfig from "../../FirebaseConfig/Firebase.config";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/slice/authSlice";

if (firebase.app.length !== 0) firebase.initializeApp(firebaseConfig);

const GoogleLogin = () => {
  const dispatch = useDispatch();

  //Location
  let history = useHistory();

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
      storeAuthToken();
    } catch (err) {
      console.error(err);
    }
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
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
