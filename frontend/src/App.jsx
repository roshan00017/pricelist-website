import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Pricelist from "./components/Pricelist/Pricelist";
import "./App.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Header />
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(false)}
      />
      <Pricelist isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default App;
