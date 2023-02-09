import React, {useEffect, useState} from 'react';
import { ISummary } from '../types/ISummary';
import { Link } from "react-router-dom";
import { Header } from './Header';
import '../TrackerSummary.css'
import Table from 'react-bootstrap/Table';

export const TrackerSummary: React.FC = () => {

    const [expenseSummary, setExpenseSummary] = useState<ISummary[]>([]);
    
    useEffect(() => {
        async function fetchExpenseSummary(){
            const result = await fetch("http://localhost:5000/expense/all");
            const summaryResult = await result.json();
            console.log(summaryResult);
            setExpenseSummary(summaryResult);
        }
        fetchExpenseSummary();
    }, []);

    return (
        <div className='TrackerSummary'>
            <Header title='Money Tracker'/>
            <div className='container'>
                <p>Expense Summary: </p>
                <div className='expense-list'>
                    <Table striped bordered>
                        <thead>
                            <tr>
                            <th>Category</th>
                            <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenseSummary.map((summary) => <tr key={summary._id}><td>{summary._id}</td><td>${summary.total}</td></tr>)}
                        </tbody>
                    </Table>
                </div>

                <Link to="/expenseDetail">
                    <button className='add-button' type="button">
                        Add Expenses
                    </button>
                </Link>
            </div>
        </div>
        
    )
}