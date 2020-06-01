import React from "react";
import Popup from "reactjs-popup";
import TransactionForm from '../TransactionForm/TransactionForm';
import './Popup.css';
 
export default () => (
  <Popup trigger={<button className="btnOpenModal"> Create a Transaction</button>} modal >
      {close => (
        <TransactionForm closeModal={close}/>
      )}
    
  </Popup>
);