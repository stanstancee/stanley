import React from "react";
import "./styles.css";
import Nav from "./components/nav";
import Home from "./components/home"
import useWindowSize from "./hooks/use-window-hook";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Portfolio from "./components/portfolio/portfolio";
export default function App() {
  const size = useWindowSize();
  return (
    <Router>
    <div className="App" >
      <Nav />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Portfolio">
           <Portfolio />
          </Route>
         
        </Switch>
    </div>
    <Footer />
    </Router>
  );
}
