import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authSelector } from "../../redux/slice/authSlice";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const { authData } = useSelector(authSelector);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authData.email || authData.name ? (
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
