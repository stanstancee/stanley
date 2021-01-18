import React, {useState} from "react";
import "./styles.css";
import Nav from "./components/nav";
import Home from "./components/home"

import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact";
import Logo from "./components/logo";
import ScrollToTop from './components/scrolltotop'


export default function App() {
  const [index, setIndex] = useState(0);
  const [view,setView] = useState(false)
  const [isTrue,setIsTrue] = useState(false) 



  return (
  
    <Router>
      <ScrollToTop>
    <main className="App" id="first" >
      <Nav setIsTrue={setIsTrue}/>
      <Switch>
          <Route exact path="/">
            <Home setIsTrue={setIsTrue} isTrue={isTrue} />
          </Route>
          <Route path="/Portfolio">
           <Portfolio index={index} setIndex={setIndex} view={view}  setView={setView}  />
          </Route>
         <Route path="/Contact">
             <Contact />
         </Route>
        </Switch>
    </main>
    <Logo />
    <Footer />
    </ScrollToTop>
    </Router>
    
  );
}
