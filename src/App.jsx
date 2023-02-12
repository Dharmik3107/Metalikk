import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero";
import { Normalize } from "styled-normalize";

function App() {
  return (
    <>
      <Normalize />
      <Routes>
        <Route exact path="/" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
