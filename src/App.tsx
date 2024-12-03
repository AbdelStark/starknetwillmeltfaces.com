import React from 'react';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-3xl font-mono tracking-wider text-green-400">
          Starknet will melt faces.
        </p>
        <p className="text-xl font-mono text-white">
          Yes!
        </p>
      </header>
      <Analytics />
    </div>
  );
}

export default App;
