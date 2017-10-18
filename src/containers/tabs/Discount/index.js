import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import VipPlace from "../../../components/vipPlace"

const Wrapper = styled.View`
    flex: 1;
`;
const TextInfo = styled.Text`
    fontSize: 10;
    color: #000;
`;
export default class Discount extends Component {

    render() {
        console.log("this.props.VipPlace", this.props.VipPlace) ;
        return (
            <Wrapper>
                <TextInfo>Нет скидок))</TextInfo>
                <VipPlace/>
            </Wrapper>

        )
    }
};