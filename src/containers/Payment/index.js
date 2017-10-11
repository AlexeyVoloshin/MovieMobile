import React, {Component} from 'react';
import { Text, View } from 'react-native';
import PaymentView from './view';
import styled from 'styled-components/native';


export default class Payment extends Component {

    render(){


        return(
            <PaymentView
                places={this.places}
                selectedDate={this.props.date}
                selectedTime={this.props.time}
                pay={this.props.calc}
            />

        )
    }
}