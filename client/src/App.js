import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>        
        <Route exact path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}
export default App;
