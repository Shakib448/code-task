import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authSelector } from "../../redux/slice/authSlice";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const { authData } = useSelector(authSelector);

  const isLoggedIn = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return false;
    }
    const decodedToken = jwt_decode(token);
    const currentTime = new Date().getTime() / 1000;

    return decodedToken.exp > currentTime;
  };

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authData.email || authData.name || isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/google-login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
