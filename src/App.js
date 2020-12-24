import React,{useState} from "react";
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
import Contact from "./components/contact";
export default function App() {
  const [index, setIndex] = useState(0);
  const [view, setView] = useState(false)
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
           <Portfolio index={index} setIndex={setIndex} view={view} setView={setView} />
          </Route>
          <Route path="/Contact">
          <Contact />
          </Route>
        
        </Switch>
    </div>
    <Footer />
    </Router>
  );
}
