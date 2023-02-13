import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero";
import { Normalize } from "styled-normalize";
import Shapes from "./Pages/Shapes";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Normalize />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/shapes" element={<Shapes />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
