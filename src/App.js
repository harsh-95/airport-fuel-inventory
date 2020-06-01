import React, {Fragment, Component} from 'react';
import './App.css';
import Signin from './components/Signin/Signin';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import Aircrafts from './components/Aircrafts/Aircrafts';
import Airports from './components/Airports/Airports';
import Transactions from './components/Transactions/Transactions';
import {Provider} from './context';
import {fetchAircrafts, fetchAirports, fetchUsers} from './api';
import Popup from './components/Popup/Popup';
import Reports from './components/Reports/Reports';
import Header from './components/Header/Header';
import { users } from './api/data';

class App extends Component{

  state = {
    transactionsList: [], 
    transactionId: 1,
  }

  componentDidMount(){
    this.fetchApi();
  }

  getContext = () => ({
    ...this.state,
    handleTransactionSubmit: this.handleTransactionSubmit,
    sortByColumn: this.sortByColumn,
    reverseTransaction: this.reverseTransaction
  })

  fetchApi = async () => {
    const aircraftsList = await fetchAircrafts();
    const airportsList = await fetchAirports();
    this.setState({
      aircraftsList,
      airportsList
    })
    console.log(aircraftsList);
  }

  sortByColumn = (listName, columnName) => {
    console.log(this.state[listName]);
    const sortedArray = [...this.state[listName]];
    sortedArray.sort(this.sortByKeys(columnName));
    console.log(sortedArray);
    this.setState({
      [listName]: sortedArray
    })
  }

  sortByKeys = (key) => {
    console.log(key);
      return function innerSort(objFirst, objSecond){
        var value1 = objFirst[key];
        var value2 = objSecond[key];
    
        let returnValue = 0;
        if(value1 > value2){
            returnValue = 1;
        }
        else{
            returnValue = -1
        }
        return returnValue;
    }
  }

  reverseTransaction = (id) => {

    let newTransaction = {};
    const getTransaction = this.state.transactionsList.filter(({transactionId}) => transactionId === id)[0];

    newTransaction = {...getTransaction};
    newTransaction.transactionIdParent = newTransaction.transactionId;
    newTransaction.transactionId = this.state.transactionId;
    newTransaction.transactionType = getTransaction.transactionType === "OUT" ? "IN" : "OUT";
    newTransaction.transactionDateTime = new Date().toLocaleTimeString("en-Us",{day: 'numeric', month: 'short', hour12: true});

    // this.setState(({transactionsList, transactionId}) => ({
    //   transactionsList: [...this.state.transactionsList, newTransaction],
    //   transactionId: transactionId + 1
    // }));
    console.log(newTransaction);
    this.handleTransactionSubmit(newTransaction);
    
    //make the transaction reverse disable
    const index = this.state.transactionsList.findIndex(({transactionId}) => transactionId === id);
    const tempTransactionsList = [...this.state.transactionsList];
    tempTransactionsList[index].reversable = false;
    // const getCurrentTransactionIndex = this.state.transactionsList.findIndex(({transactionId}) => transactionId === id);
    // const updatedTransactionsList = [...this.state.transactionsList];
    // updatedTransactionsList[getCurrentTransactionIndex].reversable = false;

    // this.setState({
    //   transactionsList: updatedTransactionsList
    // });  

  }

  handleTransactionSubmit = (transaction) => {

    const {airportsList, transactionId} = this.state;
    transaction.transactionId = transactionId;
    const index = airportsList.findIndex(({airport_id}) => airport_id === transaction.airportId);  

    const tempAirportsList = [...airportsList];
    
    // transaction.transactionType === "OUT"
    // ? tempAirportsList[index].fuel_available -= parseInt(transaction.quantity)
    // : tempAirportsList[index].fuel_available += parseInt(transaction.quantity)

    const latestTransactionQty = transaction.transactionType === "OUT" 
                            ? (tempAirportsList[index].fuel_available -= parseInt(transaction.quantity), -transaction.quantity) 
                            : (tempAirportsList[index].fuel_available += parseInt(transaction.quantity), transaction.quantity)

    this.setState(({transactionsList, transactionId}) => ({
      transactionsList: [...transactionsList, transaction],
      airportsList: tempAirportsList,
      transactionId: transactionId + 1
    }));

  }

  handleSignin = ({email, password}) => {
    console.log(email);
    const getUser = users.filter((userObj) => userObj.email === email && userObj.password === password);

    if(getUser.length){
      window.location = "/";
    }

  }

  render(){
    return (
        <Provider value={this.getContext()}>
          <BrowserRouter>
            <div className="App">
              <Switch>
                  <Route path="/login" render={props => 
                      <Signin handleSignin={this.handleSignin} />
                      } />
                  <Route exact path='/' render={props =>
                      <Fragment>
                          <Header/>
                          <div className="mainContainer">
                            <Aircrafts/>
                            <Airports/>
                          </div>
                          <Popup/>
                          <Transactions/>
                      </Fragment>
                    } />
                    <Route path="/reports" component={Reports}/>
                  <Aircrafts/>
              </Switch>
              </div>
          </BrowserRouter>
        </Provider>
    );
  }

}

export default App;
