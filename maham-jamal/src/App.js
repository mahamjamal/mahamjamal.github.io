import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Skills from "./Skills"
import Layout from "./Layout"
import Projects from "./Projects"




function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
