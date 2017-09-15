import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

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