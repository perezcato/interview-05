import './app.css';
import { Switch,  BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import React, {useEffect} from "react";
import Dashboard from "./pages/dashboard";
import useLocalState from "./hooks/useLocalState";
import UpdateProfile from "./pages/profile";

export const AppContext = React.createContext({});

function App() {
    const [appData, setAppData] = useLocalState();

  return (
      <AppContext.Provider value={{appData: appData, setAppData: setAppData}}>
          <Switch>
              <Route exact path="/">
                  <Dashboard />
              </Route>
              <Route exact path="/update_profile">
                  <UpdateProfile />
              </Route>
              <Route exact path="/login">
                  <Login />
              </Route>
              <Route exact path="/register">
                  <Register />
              </Route>
          </Switch>
      </AppContext.Provider>

  );
}

export default App;
