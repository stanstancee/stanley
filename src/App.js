import React from "react";
import "./styles.css";
import Nav from "./components/nav";
import Home from "./components/home"
import useWindowSize from "./hooks/use-window-hook";
import Footer from "./components/footer";
import Button from "./components/button";
export default function App() {
  const size = useWindowSize();
  return (
    <div>
    <div className="App" >
      <Nav />
      <Home />
    </div>
    <Footer />
    </div>
  );
}
