import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LandingScreen } from "./modules/landing";

function App() {
  return (
    <div className="flex-center h-100">
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
