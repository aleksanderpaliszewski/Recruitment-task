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
              <Route exact path="/Recruitment-task" component={PanelScreen} />
              <Route exact path="/Recruitment-task/home" component={PanelScreen} />
              <Route exact path="/Recruitment-task/about" component={About} />
              <Route exact path="/Recruitment-task/contact" component={Contact} />
          </div>
      </Router>
  );
}

export default App;
