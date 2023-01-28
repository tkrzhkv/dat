import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { PlantProtection } from "./pages/PlantProtection/PlantProtection";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<MainLayout />}
        />
      </Routes>
    </>
  );
}

export default App;
