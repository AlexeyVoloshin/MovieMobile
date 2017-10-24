import React, {Component} from 'react';
import {Text, View, Modal, Picker, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import WelcomeText from "react-native/local-cli/templates/HelloNavigation/views/welcome/WelcomeText.android";

const PlacesText = styled.Text`
    color: #4d6babff;
    
`;
const SquaresView = styled.TouchableOpacity`
    
    width: 13;
    height: 13;
    background-color: ${props => props.color ? props.color : '#000'};
    border-radius: 2;
    margin: 0 5px 5px 0;
    
`;
const MovieSquare = styled.View`
    flex-direction: row;
    margin-top: 10;
    
`;


const VipPlaceView = ({placesVip,}): Props => {

    return (
        <MovieSquare>

            {placesVip.map((place) => {
                return (<SquaresView color="#4d6babff"><PlacesText>{place.numberPlaceVip}</PlacesText>
                    <PlacesText>{place.numberRowVip}</PlacesText></SquaresView>)
            })}

        </MovieSquare>
    );
}

export default VipPlaceView;
