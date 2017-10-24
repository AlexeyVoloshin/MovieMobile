import React, {Component} from 'react';
import {Text, View, Modal} from 'react-native';
import styled from 'styled-components/native';
import {Calendar} from 'react-native-calendars';

const Wrapper = styled.View`
    
`;

const CalendarIconTouch = styled.TouchableOpacity`
   height: 60px;
`;
const ImageStyleArrow = styled.Image`    
   width: 24;
   height: 13;
   margin-right: 10;
`;

const DateStyled = styled.View`
   background-color: #fd5555ff;
   margin-horizontal: 20%;
   border-radius:30;
   padding-vertical: 10;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;
const ImageStyleCalendar = styled.Image`    
   width: 25;
   height: 25;
   margin-left: 10%;
`;
const TextStyledDate = styled.Text`
   fontSize: 20;
   color: #ffffffff;
   text-align: center;
`;
const CustomCalendar = styled(Calendar)`
   border-width: 1px;
   border-color: gray;
`;
const ImgUri = [
    require('../../img/calendar.png')
];

const arrowCalendar = {
    active: require('../../img/arrow-down.png'),
    noActive: require('../../img/arrow-down.png'),
};

class CalendarView extends Component {
    renderCalendar() {
        const {isShow, onSetSelectedDate} = this.props;
        return (
            <Modal
                visible={isShow}
                transparent={true}
                onRequestClose={() => {
                    console.log("Modal closed.")
                }}
                animationType="slide"
            >
                <CustomCalendar
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        monthTextColor: 'blue',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}
                    onDayPress={(dateString) => onSetSelectedDate(dateString)}
                />

            </Modal>
        );
    }

    renderButton() {
        const {isShow, onShowCalendar, selectedDate} = this.props;
        console.log('calendar view selectedDate', selectedDate);
        let icon = null;
        if (isShow)
            icon = arrowCalendar.active;
        else
            icon = arrowCalendar.noActive;
        return (
            <CalendarIconTouch
                onPress={onShowCalendar}
            >
                <DateStyled>
                    <ImageStyleCalendar source={ImgUri[0]}/>
                    <TextStyledDate>{selectedDate ? selectedDate.dateString : 'Select date'}</TextStyledDate>
                    <ImageStyleArrow source={icon}/>
                </DateStyled>
            </CalendarIconTouch>
        );
    }

    render() {
        const renderButton = this.renderButton();
        const renderCalendar = this.renderCalendar();
        return (
            <Wrapper>
                {renderCalendar}
                {renderButton}
            </Wrapper>
        );
    }
}

export default CalendarView;
