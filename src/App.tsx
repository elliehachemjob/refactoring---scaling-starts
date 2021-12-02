import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ArtistAlbums } from "./page/ArtistAlbums";
import { Dashboard } from "./page/Dashboard";
import {
  SPOTIFY_ENDPOINT_AUTHORIZATION,
  CLIENT_ID,
  REDIRECT_URI,
  SCOPE_URI_PARAM,
} from "./constants/credential";
import useLogin from "./hooks/useLogin";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useLogin("accessToken"); //for login

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login
            SPOTIFY_ENDPOINT_AUTHORIZATION={SPOTIFY_ENDPOINT_AUTHORIZATION}
            CLIENT_ID={CLIENT_ID}
            REDIRECT_URI={REDIRECT_URI}
            SCOPE_URI_PARAM={SCOPE_URI_PARAM}
          />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/artist/albums/">
          <ArtistAlbums />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
