import React, { Component, Fragment } from 'react';
import './Signin.css';

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
        this.props.handleSignin(this.state);
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
export default Signin;