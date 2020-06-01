import React, { Component } from 'react';
import './TransactionForm.css';
import {withContext} from '../../context';

class TransactionForm extends Component{

    state = {
        aircraftId: "",
        airportId: "",
        transactionType: "",
        quantity: "",
        errorMsg: "",
        showAircraftField: false
    }
    
    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })

        if(name === "transactionType"){
            if(value === "IN")
                this.setState({ showAircraftField: true})
            else  
                this.setState({ showAircraftField: false})     
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {aircraftId, airportId, transactionType, quantity, errorMsg} = this.state;

        if(airportId && transactionType && quantity){

            // Object.keys(this.props.productToEdit).length 
            // ? this.props.handleEditProduct(this.state)
            // : this.props.addNewProduct(this.state)

            let submitForm = false;
            let errorMsg = "";

            const getCurrentAirport = this.props.airportsList.filter(({airport_id}) => airport_id === airportId);

            if(transactionType === "OUT"){
                // check if entered fuel available is more than entered 
                getCurrentAirport[0].fuel_available > parseInt(quantity) 
                    ? submitForm = true 
                    : errorMsg = "Available fuel is less than entered!" 
            }
            else{
                // check if entered qty exceeds is more than fuel capacity
                getCurrentAirport[0].fuel_available + parseInt(quantity) < getCurrentAirport[0].fuel_capacity 
                    ? submitForm = true 
                    : errorMsg = "This is exceeding the airport fuel capacity!" 
            }

            if(submitForm){
                const transactionObj = {
                    ...this.state,
                    transactionIdParent: "--",
                    reversable: true,
                    transactionDateTime: new Date().toLocaleTimeString("en-Us",{day: 'numeric', month: 'short', hour12: true})
                }

                this.props.handleTransactionSubmit(transactionObj)
                this.setState({
                    productName: '',
                    category: '',
                    description: '',
                    price: '',
                    errorMsg: ''
                })
                console.log("modal closed ");
                this.props.closeModal();
            }
            this.setState({
                errorMsg: errorMsg
            })
        }
        else{
            this.setState({
                errorMsg: "*Please fill/select all fields"
            })
        }

    }

    render(){

        const {aircraftsList, airportsList} = this.props;

        return(
            <div className="formContainer">
                <span className="errorMsg">{this.state.errorMsg}</span>
                <form className="form">
                <div className="formInput">
                    <   div className="label"><label>Airport Id*</label></div>
                        <div className="input">
                            <select name="airportId" value={this.state.airportId} onChange={this.handleChange}>
                                <option hidden> 
                                    Select Airport Id 
                                </option> 
                                {airportsList
                                ? airportsList.map(({airport_id, airport_name}, i) => <option key={i} value={airport_id}>{airport_name}</option> )
                                : null
                                }
                            </select>
                        </div>
                    </div>

                    <div className="formInput">
                    <   div className="label"><label>Transaction Type*</label></div>
                        <div className="input">
                            <select name="transactionType" value={this.state.transactionType} onChange={this.handleChange}>
                                <option hidden> 
                                    Select Transaction Type
                                </option> 
                                <option value="IN">IN</option>
                                <option value="OUT">OUT</option>
                            </select>
                        </div>
                    </div>

                    {this.state.showAircraftField
                        ? <div className="formInput">
                        <   div className="label"><label>Aircraft Id*</label></div>
                            <div className="input">
                                <select name="aircraftId" value={this.state.aircraftId} onChange={this.handleChange}>
                                    <option hidden> 
                                        Select Aircraft Id
                                    </option> 
                                    {aircraftsList
                                    ? aircraftsList.map(({aircraft_id, aircraft_no}, i) => <option key={i} value={aircraft_id}>{aircraft_id}</option> )
                                    : null
                                    }
                                </select>
                            </div>
                        </div>
                        : null }


                    <div className="formInput">
                        <div className="label"><label>Quantity*</label></div>
                        <div className="input">
                            <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="btnDiv">
                        <button className="btn" onClick={this.handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default withContext(TransactionForm);