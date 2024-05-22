import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Section from "./Section";

function App() {
  return (
    <div className="app">
      <Header reactLogo={reactLogo} viteLogo={viteLogo} />

      <Section>
        <h1>1/15</h1>
        <p>Question?</p>
      </Section>
    </div>
  );
}

export default App;
