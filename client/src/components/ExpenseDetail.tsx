import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { IDetail } from '../types/IDetail';
import { formatTime } from '../utils/formatTime';
import { Header } from './Header';
import '../ExpenseDetail.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const ExpenseDetail: React.FC = () => {

    const [expenseDetail, setExpenseDetail] = useState<IDetail[]>([]);
    
    useEffect(() => {
        async function fetchExpenseDetails(){
            const result = await fetch("http://localhost:5000/expense/");
            const detailResult = await result.json();
            setExpenseDetail(detailResult);
        }
        fetchExpenseDetails();
    }, []);
    return (
        <div className='detail-container'>
            <Header title="Expenses" />
            <Link to="/">
                <button className='back-button' type="button">
                    <i className="arrow left"></i>
                </button>
            </Link>

            <div className='form-container'>
                {/* <Form>
                    <Form.Group as={Row} className="mb-3 w-100" controlId="formHorizontalEmail">
                        <Form.Label column xs="auto">
                            Email
                        </Form.Label>
                        <Col xs={5}>
                            <Form.Control className="w-100" type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column xs="auto">
                            Password
                        </Form.Label>
                        <Col xs={5}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form> */}
                <form>
                    <div className='form-control'>
                        <label>Amount:</label>
                        <input type="text" name="am" value="" />
                    </div>
                    <div className='form-control'>
                        <label>Category:</label> 
                        <select id="ct" name="category">
                            <option value="Bills">Bills</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Health">Health</option>
                            <option value="Travel">Travel</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </form>
            </div>

            <div className='expense-details-list'>
                {expenseDetail.map((detail) => <div><p>{formatTime(detail.time)} {detail.category} {detail.amount}</p></div>)}
            </div>
            {/* Todo: List the expense detail here by time and show formatted time MM/DD/YY */}
        </div>
    )
}