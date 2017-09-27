import React, { Component } from "react";
import CalendarView from './view';
import { Text, View, Modal } from 'react-native';

export default class CalendarTest extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowCalendar: false, dateString: null};
    }
    handleShowCalendar = () => {
        this.setState(
            {isShowCalendar: !this.state.isShowCalendar }
        );
    };
    handleShowOnDay= (dateString) => {
        this.setState({dateString, isShowCalendar: false});
    };

    render(){
       return (
          <CalendarView
              onShowCalendar={this.handleShowCalendar}
              isShow={this.state.isShowCalendar}
              onShowOnDay={this.handleShowOnDay}
              selectedDate={this.state.dateString}
          />
       );
    }
}
