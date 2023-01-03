import React, { Component } from "react";
import "./LoginStyle.css";
import CustomInput from "../components/CustomInput";
import MaterialButton from "../components/MaterialButton";

class Register extends Component {
  state = {
    firstName:"",
    lastName:"",
    city:"",
    pincode:"",
    MobileNo: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  render() {
    return (
      <div className="login">
        <form className="form">
          <CustomInput
            labelText="First Name"
            id="firstName"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Last Name"
            id="lastName"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="City"
            id="city"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Pincode"
            id="pincode"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="MobileNo"
            id="MobileNo"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          />

          <MaterialButton type="button" color="primary" className="form__custom-button">
            Sign Up
          </MaterialButton>
        </form>
      </div>
    );
  }
}

export default Register;