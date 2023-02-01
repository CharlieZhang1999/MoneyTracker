import React, {useEffect, useState} from 'react';
import { ISummary } from '../types/ISummary';
export const BillsSummary: React.FC = () => {

    // const [billsSummary, setBillsSummary] = useState<ISummary>({
    //     amount: 0,
    //     category: ""
    // });

    // useEffect(() => {
    //     async function fetchBillsSummary(){
    //         const bills = await fetch("http://localhost:5000/expense/bills");
    //         const billsSum = await bills.json();

    //         const summary = {
    //             amount: billsSum.amount,
    //             category:billsSum.category,
    //         };
    //         // const summary = [billsTotal, groceryTotal];
    //         setBillsSummary(summary);
    //     }
    //     fetchBillsSummary();
    //   }, []);
    return (
        <p>This is the home page of money tracker</p>
    )
}