import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";

import "./app.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <div className="mainContentDiv">
            <Header />
            <Navbar />

            <Route exact path="/" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
