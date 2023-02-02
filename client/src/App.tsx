import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { TrackerSummary } from './components/TrackerSummary';
import { ExpenseDetail } from './components/ExpenseDetail';
import { Header } from './components/Header';
import { Button } from './components/Button';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
interface ISummary{
  bills: number,
  grocery: number,
  health: number,
  travel: number,
  others: number
}


function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<TrackerSummary />} ></Route>
          <Route path='/expenseDetail' element={<ExpenseDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
