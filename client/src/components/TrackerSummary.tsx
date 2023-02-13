import React, {useEffect, useState} from 'react';
import { ISummary } from '../types/ISummary';
import { Link } from "react-router-dom";
import { Header } from './Header';
import { TextInput } from'./TextInput';
import '../TrackerSummary.css'
import Table from 'react-bootstrap/Table';
import { IsEqualCustomizer } from 'lodash';
import { IDetail } from '../types/IDetail';
import { socket } from '../utils/socket'
import exp from 'constants';
export const TrackerSummary: React.FC = () => {

    const [expenseSummary, setExpenseSummary] = useState<number[]>([]);
    
    useEffect(() => {

        socket.on('receiveExpense',  (receivedExpense: IDetail) => {
            fetchExpenseSummary();
        });
        
        fetchExpenseSummary();
        
    }, []);

    async function fetchExpenseSummary(){
        const result = await fetch("http://localhost:5000/expense/all");
        const summaryResult = await result.json();
        const sortList:string[] = ["Bills", "Grocery", "Health", "Travel", "Others"];


        const sortedSummary: ISummary[] = summaryResult.sort(function(a: ISummary, b:ISummary) {
            return sortList.indexOf( a._id ) - sortList.indexOf( b._id );
        })
        // console.log(summaryResult);
        setExpenseSummary([sortedSummary[0].total, sortedSummary[1].total, sortedSummary[2].total, sortedSummary[3].total, sortedSummary[4].total]);
    };

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
                            <tr><td>Bills</td><td>${expenseSummary[0]}</td></tr>
                            <tr><td>Grocery</td><td>${expenseSummary[1]}</td></tr>
                            <tr><td>Health</td><td>${expenseSummary[2]}</td></tr>
                            <tr><td>Travel</td><td>${expenseSummary[3]}</td></tr>
                            <tr><td>Others</td><td>${expenseSummary[4]}</td></tr>
                            {/* {expenseSummary.map((summary) => <tr key={summary._id}><td>{summary._id}</td><td>${summary.total}</td></tr>)} */}
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