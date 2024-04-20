import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Text from "./components/Text";
import HomePage from "./components/HomePage";
import DocumentDetail from "./components/DocumentDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/text" element={<Text />} />
          <Route path="/documents/:id" element={<DocumentDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
