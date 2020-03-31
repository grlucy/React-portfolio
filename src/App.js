import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import "./app.css";

function App() {
  return (
    <>
      <div className="mainContentDiv">
        <Header />
      </div>
      <Footer />
    </>
  );
}

export default App;
