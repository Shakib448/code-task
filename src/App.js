import Nasa from "./Components/Nasa/Nasa";
import Welcome from "./Components/Welcome/Welcome";
import ImageCom from "./Components/ImageCom/ImageCom";
import GoogleLogin from "./Components/GoogleLogin/GoogleLogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Post from "./Components/Post/Post";
import PostDetails from "./Components/PostDetails/PostDetails";
import Album from "./Components/Album/Album";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <PrivateRoute exact path='/home'>
            <Nasa />
          </PrivateRoute>
          <PrivateRoute exact path='/image'>
            <ImageCom />
          </PrivateRoute>
          <PrivateRoute exact path='/post'>
            <Post />
          </PrivateRoute>
          <PrivateRoute exact path='/post-details/:id'>
            <PostDetails />
          </PrivateRoute>
          <PrivateRoute exact path='/album'>
            <Album />
          </PrivateRoute>
          <Route exact path='/google-login' component={GoogleLogin} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
