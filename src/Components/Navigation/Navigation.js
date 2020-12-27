import React, { useEffect, useState } from "react";
import "./Navigation.sass";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { authLogOut } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const [show, handleShow] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleBackHome = () => {
    history.push("/");
  };

  const token = sessionStorage.getItem("token");
  const { name, email } = jwt_decode(token);

  useEffect(() => {
    const handleScroll = () => {
      try {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
        });
        return () => {
          window.addEventListener("scroll", null);
        };
      } catch (error) {
        console.log(error);
      }
    };
    handleScroll();
  }, []);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg={`${show && "light"}`}
        className={`mainNav  ${show && "mainNav__scroll"}`}
        variant='light'
        fixed='top'
      >
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto mr-auto font-weight-bold text-white '>
              <NavLink
                to='/home'
                className='mr-3 mb-3 mt-2 text-dark mainNav__hover'
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>

              <NavLink
                to='/image'
                className='mr-3 mb-3 mt-2 text-dark mainNav__hover'
                style={{ textDecoration: "none" }}
              >
                Image
              </NavLink>
              <NavLink
                to='/post'
                className='mr-3 mb-3 mt-2 text-dark mainNav__hover'
                style={{ textDecoration: "none" }}
              >
                Post
              </NavLink>

              {email ? (
                <>
                  {" "}
                  <Nav.Link className='mr-3 text-dark li'>{name}</Nav.Link>{" "}
                  <Button
                    className='btn btn-dark pl-5 pr-5 pt-2 pb-2 mainNav__btn'
                    onClick={() => {
                      handleBackHome();
                      dispatch(authLogOut({}));
                    }}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <NavLink to='/google-login'>
                    <Button className='btn btn-dark pl-5 pr-5 pt-2 pb-2 mainNav__btn'>
                      Log In
                    </Button>
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
