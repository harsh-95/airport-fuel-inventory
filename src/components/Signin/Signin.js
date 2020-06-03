import React, { Component, Fragment } from 'react';
import './Signin.css';
import { withRouter } from "react-router-dom";
import { users } from '../../api/data';
import auth from '../../auth'

class Signin extends Component{

    state = {
        email: "harsh@gmail.com",
        password: "harsh1234"
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;

        // check if user is registered
        const getUser = users.filter((userObj) => userObj.email === email && userObj.password === password);

        if (getUser.length) {
            auth.login(() => {
                this.props.history.push("/");
            });
        }
    }

    render(){
        return(
            <Fragment>
                <div className="heading">
                    <h2>Airport Fuel Inventory</h2>
                </div>
                <div className="formContainer">
                    <form className="form">
                        <div className="formInput">
                            <div className="label"><label>Email*</label></div>
                            <div className="input">
                                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="formInput">
                            <div className="label"><label>Password</label></div>
                            <div className="input">
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="btnDiv">
                            <button className="btn" onClick={this.handleSubmit}>Signin</button>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(Signin);