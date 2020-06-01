import React, { useEffect, useState } from 'react';
import {fetchAirports} from '../../api';
import './Airports.css';
import {withContext} from '../../context';

const Airports = ({airportsList, transactionsList, sortByColumn}) => {

    const [latestTransaction, setLatestTransaction] = useState({});

    useEffect(() => {console.log('airports component')
        setLatestTransaction([...transactionsList].pop());
    })

    const showAirportsTable = (
        <table cellSpacing="5px">
            <thead>
                <tr>
                    <th onClick={() => sortByColumn("airportsList", "airport_id")}>Airport Id <i class="fas fa-sort"></i></th>
                    <th onClick={() => sortByColumn("airportsList", "airport_name")}>Airport Name <i class="fas fa-sort"></i></th>
                    <th>Fuel Capacity</th>
                    <th onClick={() => sortByColumn("airportsList", "fuel_available")}>Fuel Available <i class="fas fa-sort"></i></th>
                </tr>
            </thead> 
            <tbody className="center">
                {airportsList
                ? airportsList.map(({airport_id, airport_name, fuel_available, fuel_capacity},i) => 
                            <tr key={i}>
                                <td>
                                    <span>{airport_id}</span>
                                </td>
                                <td>
                                    <span>{airport_name}</span>
                                </td>
                                <td>
                                    <span>{fuel_capacity}</span>
                                </td>
                                <td  class="right">
                                    <span className="latestTransationQty">
                                        {latestTransaction  && latestTransaction.airportId  === airport_id
                                        ?latestTransaction.transactionType === "IN"
                                                ? "▲"+latestTransaction.quantity
                                                : "▼"+latestTransaction.quantity
                                        :null
                                        }
                                    </span>
                                    <span>{fuel_available}</span>
                                </td>
                            </tr>)
                : null
                            }
                
            </tbody>
        </table>
);

    return(
        <div className="airPortsContainerDiv">
            <h2 className="tableHeading">Airports</h2>
            {showAirportsTable}
        </div>
    )
}
export default withContext(Airports);