import React from "react";

import { Header } from "./components/header/Header";
import { MainProvider } from "./components/main/MainContext";

import { Navigation } from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <Header />
        <Navigation />
      </MainProvider>
    </div>
  );
}

export default App;
