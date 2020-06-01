// import axios from 'axios';
import { airportsList, aircraftsList, users } from './data';

// const aircraftsUrl = "https://www.90di.com/schedule/flight/IndiGo.html ";
// const airportsUrl = "https://airport-authority.com/browse-IN";

export const fetchAirports = async() =>{

    // const airportsList = axios.get(airportsUrl);
    // console.log(airportsList);

    return airportsList;
}

export const fetchAircrafts = async() =>{

    // const airportsList = axios.get(aircraftsUrl);
    // console.log(aircraftsList);

    return aircraftsList;
}

export const fetchUsers = async() =>{

    // const airportsList = axios.get(usersUrl);
    // console.log(usersUrl);

    return users;
}

