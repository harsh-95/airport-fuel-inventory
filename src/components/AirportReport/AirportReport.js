import React from 'react';
import {withContext} from '../../context';
import './AirportReport.css';

const AirportReport = ({airportsList}) => 
        <div className="reportContainerDiv">
            <h2>Airport Summary Report</h2>
            <div className="reportDiv">
                <table cellSpacing="5px">
                    <thead>
                        <tr>
                            <th>Airport</th>
                            <th>Fuel Available</th>
                        </tr>
                    </thead> 
                    <tbody className="center">
                        {airportsList
                        ? airportsList.map(({airport_id, airport_name, fuel_available},i) => 
                                    <tr key={i}>
                                        <td>
                                            <span>{airport_name}</span>
                                        </td>
                                        <td>
                                            <span>{fuel_available}</span>
                                        </td>
                                    </tr>)
                        : null
                                    }
                        
                    </tbody>
                </table>
            </div>
        </div>

export default withContext(AirportReport);