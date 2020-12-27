import React, { useEffect, useState } from "react";
import "./Navigation.sass";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { authLogOut } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const [show, handleShow] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();

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

  const navItems = [
    {
      name: "Home ",
      link: "/home",
    },
    {
      name: "Image",
      link: "/image",
    },
    {
      name: "Post",
      link: "/post",
    },
    {
      name: "Album",
      link: "/album",
    },
  ];
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
              {navItems.map((item) => (
                <NavLink
                  className='mr-3 mb-3 mt-2 text-dark mainNav__hover'
                  activeClassName={
                    location.pathname === item.link
                      ? "mainNav__activeHover"
                      : null
                  }
                  style={{ textDecoration: "none" }}
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              ))}
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
