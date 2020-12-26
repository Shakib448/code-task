import Nasa from "./Components/Nasa/Nasa";
import ImageCom from "./Components/ImageCom/ImageCom";
import GoogleLogin from "./Components/GoogleLogin/GoogleLogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nasa />
        <ImageCom />
        <Switch>
          <Route exact pathname='/google-login' component={GoogleLogin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
