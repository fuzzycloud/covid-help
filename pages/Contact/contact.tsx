import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
    emailError: false,
  };
// Functions
  render() {
    return (
        <Paper >
            <h1>Contact Us</h1>
        <form className="contact-form" >
        <TextField
          id="standard-multiline-flexible"
          label="Message"
          placeholder="Enter Message"
          variant="outlined"
          multiline
          rowsMax={4}
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-basic"
          placeholder="Enter your name"
          label="Name"
          variant="outlined"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-basic"
          label="Email"
          placeholder="Enter email address"
          variant="outlined"
          value={this.state.email}
        //   onChange={(e) => this.handleChangeEmail(e)}
          error={this.state.emailError}
          required
          type="email"
        />
        <br />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          placeholder="Enter Subject"
          label="Subject"
          variant="outlined"
          value={this.state.subject}
          onChange={(e) => this.setState({ subject: e.target.value })}
          required
        />
        <br />
        <br />
        <br />
        <div className="button--container">
          {/* <button type="submit" className="button button-primary">
            {this.state.buttonText}
          </button> */}
           <Button variant="contained" color="primary">
           {this.state.buttonText}
      </Button>
        </div>
      </form>
      </Paper>
    );
  }
}