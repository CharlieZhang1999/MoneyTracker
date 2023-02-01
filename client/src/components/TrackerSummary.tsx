import React, {useEffect, useState} from 'react';
import { ISummary } from '../types/ISummary';


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
        <div className='tracker-container'>
            <p>Expense Summary: </p>
            <div className='expense-list'>
                {expenseSummary.map((summary) => <div key={summary._id}><p>{summary._id} is {summary.total}</p></div>)}
            </div>
        </div>
        
    )
}