import logo from './logo.svg';
import './App.css';
import { TrackerSummary } from './components/TrackerSummary';
import { ExpenseDetail } from './components/ExpenseDetail';
// import { Header } from './components/Header';
import { Button } from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";



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
