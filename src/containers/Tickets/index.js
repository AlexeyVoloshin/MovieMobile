import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TicketsView from './view';
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux';

export default class Tickets extends Component {
             constructor(props) {
                 super(props);
                 this.state = { username:'', usertel: '', usermail:'' };
             }
             checkInput (){
                 const name = this.state.username;
                 const tel = this.state.usertel;
                 const mail = this.state.usermail;
                 console.log('name', name );
                 console.log('telephone' , tel);
                 console.log('mail', mail);
                 if (name.length <=0 && tel.length <=0 && mail.length <=0 ) return false;
             }


    handleCheckInputUserData = (checkInput) => {
        this.setState( { checkInput } );
    };
    render(){
        console.log('tickets  selectedDate', this.props.date);
        return(
            <TicketsView places={this.places}
                         selectedDate={this.props.date}
                         selectedTime={this.props.time}
                         checkInputUserData={this.props.handleCheckInputUserData}


            />

        )
    }
}