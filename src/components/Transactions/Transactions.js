import React, { useEffect, useState } from 'react';
import './Transactions.css';
import {withContext} from '../../context';

const Transactions = ({transactionsList, reverseTransaction}) => {

    const showTransactionsTable = (
        <table cellSpacing="5px">
            <thead>
                <tr>
                    <th>Transaction Id</th>
                    <th>Transaction Date/Time</th>
                    <th>Transaction Type</th>
                    <th>Airport Id</th>
                    <th>Aircraft Id</th>
                    <th>Quantity</th>
                    <th>Transaction Id Parent</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="center">
                {transactionsList
                ? transactionsList.map(({transactionId, transactionDateTime, transactionType, airportId, aircraftId, quantity, transactionIdParent, reversable},i) => 
                            <tr key={i}>
                                <td>
                                    <span>{transactionId}</span>
                                </td>
                                <td>
                                    <span>{transactionDateTime}</span>
                                </td>
                                <td>
                                    <span>{transactionType}</span>
                                </td>
                                <td>
                                    <span>{airportId}</span>
                                </td>
                                <td>
                                    <span>{aircraftId}</span>
                                </td>
                                <td>
                                    <span>{quantity}</span>
                                </td>
                                <td>
                                    <span>{transactionIdParent}</span>
                                </td>
                                <td>
                                    {reversable 
                                        ? <button className="reverseTranBtn" onClick={() => reverseTransaction(transactionId)}>Reverse the transaction</button>
                                        : <span className="reversed">Reversed</span>}
                                </td>
                                </tr>)
                : null
                            }
                
            </tbody>
        </table>
);

    return(
        <div className="transactionContainerDiv">
            {showTransactionsTable}
        </div>
    )
}
export default withContext(Transactions);