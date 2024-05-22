import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header reactLogo={reactLogo} viteLogo={viteLogo} />

      <main className="main">
        <p>1/15</p>
        <p>Question?</p>
      </main>
    </div>
  );
}

export default App;
