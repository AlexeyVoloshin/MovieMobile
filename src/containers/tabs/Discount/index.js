import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const Wrapper = styled.View`
    flex: 1;
`;
const TextInfo = styled.Text`
    fontSize: 10;
    color: #000;
`;
export default class Discount extends Component {
    render() {
        return (
            <Wrapper>
                <TextInfo>Нет скидок))</TextInfo>

            </Wrapper>

        )
    }
};