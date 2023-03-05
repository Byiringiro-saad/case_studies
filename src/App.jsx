import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Case_Studies from "./pages/case_studies";

//components
import Nav from "./component/nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Case_Studies />} />
      </Routes>
    </Router>
  );
}

export default App;
