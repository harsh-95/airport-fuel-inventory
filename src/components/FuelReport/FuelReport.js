import React, { Fragment } from 'react';
import { withContext } from '../../context';
import './FuelReport.css';

const FuelReport = ({ airportsList, transactionsList }) =>

    <div className="reportContainerDiv">
        <h2>Fuel Consumption Report</h2>
        <div className="reportDiv">

            {airportsList
                ? airportsList.map((airport) =>
                    <Fragment>
                        <p><span className="fontBold">Airport: </span>{airport.airport_name}</p>
                        {transactionsList.length
                            ? <Fragment>
                                <table cellSpacing="5px">
                                    <thead>
                                        <tr>
                                            <th className="wideHeading">Date/Time</th>
                                            <th>Type</th>
                                            <th>Fuel</th>
                                            <th>Aircraft</th>
                                        </tr>
                                    </thead>
                                    {transactionsList.length
                                        ? transactionsList.map(({ transactionDateTime, transactionType, quantity, aircraftId, airportId }, i) =>
                                            <tbody className="center">
                                                {airport.airport_id === airportId
                                                    ? <tr key={i}>
                                                        <td>
                                                            <span>{transactionDateTime}</span>
                                                        </td>
                                                        <td>
                                                            <span>{transactionType}</span>
                                                        </td>
                                                        <td>
                                                            <span>{quantity}</span>
                                                        </td>
                                                        <td>
                                                            <span>{aircraftId}</span>
                                                        </td>
                                                    </tr>
                                                    : null
                                                }

                                            </tbody>
                                        )
                                        : null
                                    }
                                </table>
                            </Fragment>
                            : null
                        }
                        <p><span className="fontBold">Fuel Available: </span>{airport.fuel_available}</p>
                    -------------------------------------------------------------
                    </Fragment>
                )
                : null
            }

        </div>
    </div>

export default withContext(FuelReport);