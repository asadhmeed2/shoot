import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LandingScreen } from "./modules/landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
