import React, { Component } from "react";
import { View, Text } from "react-native";
import TicketsView from "./view";
import styled from "styled-components/native";
import { Actions } from "react-native-router-flux";

export default class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", usertel: "", usermail: "" };
  }

  checkInputName = text => {
    this.setState({ username: text });
  };
  checkInputTel = text => {
    this.setState({ usertel: text });
  };
  checkInputMail = text => {
    this.setState({ usermail: text });
  };
  checkInput = ({ calc }) => {
    const name = this.state.username;
    const tel = this.state.usertel;
    const mail = this.state.usermail;
    if (name.length <= 0 && tel.length <= 0 && mail.length <= 0) return false;
    this.Tickets({ calc });
  };

  Tickets({ calc }) {
    Actions.payment({ calc });
  }

  render() {
    console.log("tickets  selectedDate", this.props.date);
    console.log("tickets  selectedPlace", this.props.places);
    console.log("tickets  selectedPlace", this.props.price);
    console.log("tickets  username!!!!!", this.state.username);
    return (
      <TicketsView
        places={this.places}
        selectedDate={this.props.date}
        selectedTime={this.props.time}
        selectedPlaces={this.props.places}
        prices={this.props.price}
        selectedDateMovie={this.props.item}
        checkInputName={this.checkInputName}
        checkInputTel={this.checkInputTel}
        checkInputMail={this.checkInputMail}
        checkInput={this.checkInput}
      />
    );
  }
}
