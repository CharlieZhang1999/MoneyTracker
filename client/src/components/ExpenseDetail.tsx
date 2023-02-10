import React, {useEffect, useState, useRef} from 'react';
import { Link } from "react-router-dom";
import { IDetail } from '../types/IDetail';
import { formatTime } from '../utils/formatTime';
import { Header } from './Header';
import { TextInput } from './TextInput';
import { Select } from './Select';
import '../ExpenseDetail.css'
import Table from 'react-bootstrap/Table';
import { Button } from './Button';

export const ExpenseDetail: React.FC = () => {

    const [expenseDetail, setExpenseDetail] = useState<IDetail[]>([]);
    const [inputIsValid, setInputIsValid] = useState<Boolean>(false);
    const [selectIsValid, setSelectIsValid] = useState<Boolean>(false);
    const [inputVal, setInput] = useState<Number>(0);
    const [selectVal, setSelect] = useState<string>("");


    useEffect(() => {
        fetchExpenseDetails();
    },[]);

    async function fetchExpenseDetails(){
        const result = await fetch("http://localhost:5000/expense/");
        const detailResult = await result.json();
        setExpenseDetail(detailResult);
    }
    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);;


    const handleInputChange = (value: number | null) => {
        const isValid: boolean = value != null && value > 0;
        if(value != null){
            setInput(value);
        }
        setInputIsValid(isValid);
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const isValid: boolean = (selectRef.current != null && selectRef.current.value != 'DEFAULT');
        setSelect(e.target.value);
        setSelectIsValid(isValid);
    }

    const addExpense = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(inputIsValid && selectIsValid){
            const data = {
                "amount": inputVal,
                "category": selectVal
            }
            // console.log(data);
                
            
            const postResponse = await fetch("http://localhost:5000/expense/", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": 'application/json'
                }
            });

            const getResponse = await fetchExpenseDetails();
        }
    }


    return (
        <div className='detail-container'>
            <Header title="Expenses" />
            <Link to="/">
                <button className='back-button' type="button">
                    <i className="arrow left"></i>
                </button>
            </Link>
            <div className='form-container'>
                <form>
                    <div className='form-control text-paragraph'>
                        Add a new expense:
                    </div>
                    <div className='form-control'>
                        <TextInput onChange={handleInputChange} reference={inputRef}/>
                    </div>
                    <div className='form-control'>
                        <Select onChange={handleSelectChange} reference={selectRef} />
                    </div>

                    <div className='form-control' id='confirm-button'>
                        <Button title='Confirm' eventHandler={addExpense} active={(inputIsValid && selectIsValid)}/>
                    </div>
                </form>
            </div>

            <div className='expense-details-list'>
                <div className='expense-history text-paragraph'>
                    Expense History: 
                </div>
                <Table striped bordered className='table-container'>
                    <thead className='thead'>
                        <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th className="amount-col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenseDetail.map((detail) => <tr><td>{formatTime(detail.time)}</td><td>{detail.category}</td><td className="amount-col">{detail.amount}</td></tr>)}
                    </tbody>
                </Table>
            </div>
            {/* Todo: List the expense detail here by time and show formatted time MM/DD/YY */}
        </div>
    )
}