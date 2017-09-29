import React, { Component } from "react";
import CalendarView from './view';

export default class CalendarTest extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowCalendar: false};
    }
    handleShowCalendar = () => {
        this.setState(
            {isShowCalendar: !this.state.isShowCalendar }
        );
    };
    handleSelectDate = (dateString) =>{
        this.props.onSetSelectedDate(dateString);
        this.setState(
            {isShowCalendar: false }
        );
    };
    render(){
        console.log('calendar index selectedDate', this.props.selectedDate);

        return (
          <CalendarView
              onShowCalendar={this.handleShowCalendar}
              isShow={this.state.isShowCalendar}
              selectedDate={this.props.selectedDate}
              onSetSelectedDate={this.handleSelectDate}
          />
       );
    }
}
