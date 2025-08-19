import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Pricelist from "./components/Pricelist/Pricelist";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <Pricelist />
      </div>
    </>
  );
}

export default App;
