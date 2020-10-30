import React from "react";
import "./styles.css";
import Nav from "./components/nav";
import Home from "./components/home"
import useWindowSize from "./hooks/use-window-hook";
export default function App() {
  const size = useWindowSize();
  return (
    <div className="App row" >
      <Nav />
      <Home />
    </div>
  );
}
