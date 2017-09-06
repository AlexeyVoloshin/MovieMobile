import React, { Component } from "react";
import Calendar   from "react-native-calendar-component";

export default class CalendarTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    handleNextButtonPress() {
        const date = new Date(this.state.date);
        date.setMonth(date.getMonth() + 1);
        this.setState({
            date
        });
    }

    handlePrevButtonPress() {
        const date = new Date(this.state.date);
        date.setMonth(date.getMonth() - 1);
        this.setState({
            date
        });
    }

    handleDateSelect(date) {
        alert(`clicked: ${this.state.date.toString()}`);
    }

    render() {
        return (
            <Calendar
                date={this.state.date}
                onPrevButtonPress={() => this.handlePrevButtonPress()}
                onNextButtonPress={() => this.handleNextButtonPress()}
                onDateSelect={(date) => this.handleDateSelect(date)} />
        );
    }
}