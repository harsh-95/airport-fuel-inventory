import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => 
    <div className="headerDiv">
        <div className="heading">
            <h2>Airport Fuel Inventory</h2>
        </div>
            
        <Link to="/reports" className="btnSeeReports">See Reports</Link>
    </div>

export default Header;