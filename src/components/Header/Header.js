import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import auth from '../../auth';

const Header = (props) => 
    <div className="headerDiv">
        <div className="heading">
            <h2>Airport Fuel Inventory</h2>
        </div>
        
        <div className="buttonsDiv">
            <Link to="/reports" className="btnHeader">See Reports</Link>
            
            <button onClick={() => auth.logout(() => {
                props.history.push("/login")
            })} className="btnHeader">Logout</button>
        </div>
    </div>

export default withRouter(Header);