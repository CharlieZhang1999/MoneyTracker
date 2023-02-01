import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { TrackerSummary } from './components/TrackerSummary';
import { Header } from './components/Header';
import { Button } from './components/Button';
interface ISummary{
  bills: number,
  grocery: number,
  health: number,
  travel: number,
  others: number
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title='Money Tracker'/>
        <TrackerSummary />
        {/* <Button eventHandler={} title="Add Expenses"/> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
