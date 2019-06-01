import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import PanelScreen from "./components/PanelView";

function App() {
  return (
      <Router>
          <div className="App">
              <NavBar/>
              <hr />
              <Route exact path="/" component={PanelScreen} />
              <Route exact path="/home" component={PanelScreen} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
          </div>
      </Router>
  );
}

export default App;
