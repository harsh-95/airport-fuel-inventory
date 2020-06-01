import React, { useEffect, useState } from 'react';
import {fetchAircrafts} from '../../api';
import './Aircrafts.css';
import {withContext} from '../../context';

const Aircrafts = ({aircraftsList, sortByColumn}) => {

    const showAircraftsTable = (
        <table cellSpacing="5px">
            <thead>
                <tr>
                    <th onClick={() => sortByColumn("aircraftsList", "aircraft_id")}>Aircraft Id <i className="fas fa-sort"></i></th>
                    <th onClick={() => sortByColumn("aircraftsList", "aircraft_no")}>Aircraft No <i className="fas fa-sort"></i></th>
                    <th onClick={() => sortByColumn("aircraftsList", "airline")}>Airlines <i className="fas fa-sort"></i></th>
                </tr>
            </thead>
            <tbody className="center">
                {aircraftsList
                ? aircraftsList.map(({aircraft_id, aircraft_no, airline},i) => 
                            <tr key={i}>
                                <td>
                                    <span>{aircraft_id}</span>
                                </td>
                                <td>
                                    <span>{aircraft_no}</span>
                                </td>
                                <td>
                                    <span>{airline}</span>
                                </td>
                            </tr>)
                : null
                            }
                
            </tbody>
        </table>
);

    return(
        <div className="airCraftsContainerDiv">
            <h2 className="tableHeading">Aircrafts</h2>
            {showAircraftsTable}
        </div>
    )
}
export default withContext(Aircrafts);