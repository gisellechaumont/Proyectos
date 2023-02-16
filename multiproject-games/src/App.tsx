import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MemoTest from "./Memotest";
import Pokemon from "./Pokemon";
import WPM from "./WPM";

function App() {
  return (
    <Routes>
      <Route element={<MemoTest />} path="/memotest" />

      <Route element={<WPM />} path="/wpm" />
      <Route element={<Pokemon />} path="/pokemon" />
    </Routes>
  );
}

export default App;
