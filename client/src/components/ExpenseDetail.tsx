import React from 'react';
import { Link } from "react-router-dom";
// interface HeaderProps {
//     title: string
// }
export const ExpenseDetail: React.FC = () => {
    return (
        <div className='detail-container'>
            <Link to="/">
                <button type="button">
                    Back
                </button>
            </Link>
            <p className='header'> Expense Detail Page </p>
            {/* Todo: List the expense detail here by time and show formatted time MM/DD/YY */}
        </div>
    )
}