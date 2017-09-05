import React, {Component} from 'react';
import { Text, View } from 'react-native';

import styled from 'styled-components/native';

const Wrapper = styled.View`
  background-color: papayawhip;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20 ;
`;
const StyledText = styled.Text`
  fontSize: 14;
  color: #000;
  text-align: center;
`;

export default class MovieDetails extends Component {
    render(){
        return(
            <Wrapper>
                <Row>
                    <StyledText>scene2</StyledText>
                </Row>
            </Wrapper>

        )
    }
}