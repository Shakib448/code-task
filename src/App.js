import Nasa from "./Components/Nasa/Nasa";
import Welcome from "./Components/Welcome/Welcome";
import ImageCom from "./Components/ImageCom/ImageCom";
import GoogleLogin from "./Components/GoogleLogin/GoogleLogin";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { authSelector } from "./redux/slice/authSlice";
import { useSelector } from "react-redux";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <>
      <Nasa />

      <Router>
        <Switch>
          <Route exact path='/' component={Welcome} />

          <PrivateRoute exact path='/home'>
            {/* <Nasa /> */}
          </PrivateRoute>
          <PrivateRoute exact path='/image'>
            <ImageCom />
          </PrivateRoute>
          <Route exact path='/google-login' component={GoogleLogin} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
