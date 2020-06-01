import React from 'react';
import {Link} from 'react-router-dom';
import AirportReport from '../AirportReport/AirportReport';
import FuelReport from '../FuelReport/FuelReport';
import './Reports.css';

const Reports = () => 

    <div className="containerDiv">
        <div className="headerDiv">
            <Link to="/" className="btn">Back</Link>
        </div>
        <AirportReport/>
        <FuelReport/>
    </div>

export default Reports;