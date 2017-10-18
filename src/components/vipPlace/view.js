import React, {Component} from 'react';
import { Text, View, Modal, Picker,StyleSheet } from 'react-native';
import styled from 'styled-components/native';
const PlacesRow = styled.View`
    margin-top: 1;
    flex-direction: row;
    justifyContent: space-between;
`;
const SquaresView = styled.TouchableOpacity`
    width: 16;
    height: 16;
    background-color: ${props => props.color ? props.color : '#000'};
    border-radius: 2;
    margin: 0 5px 5px 0;
`;
const isActivePlace = (selectedPlaces, numberRow, numberPlace) =>{
    const placeElement = selectedPlaces.find((item)=>{
        return item.numberPlace === numberPlace && item.numberRow === numberRow;
    });
    return !!placeElement;
};
const renderRow = (placesVip, onSelectPlace, selectedPlaces) =>{
    const resultRow = [];
    placesVip.forEach((item, i, arr) => {
        const iasActive = isActivePlace(selectedPlaces, item.numberRowVip, item.numberPlaceVip);
        resultRow.push(
            <SquaresView
                key={i}
                onPress={() => onSelectPlace(item.numberRowVip, item.numberPlaceVip)}
                color={iasActive ? 'red' : 'steelblue'}
            />
        );
    });
    console.log(<PlacesRow>{resultRow}</PlacesRow>);
    return <PlacesRow>{resultRow}</PlacesRow>;
};
const renderPlaces = (placesVip,onSelectPlace, selectedPlaces) => {
    console.log('renderPlaces', placesVip.placesVip);
    let tempArray = [];
    let resultPlaces = [];
    placesVip.forEach((item, i, arr) => {
        if(i%13 === 0){
            console.log('renderPlaces renderRow');
            resultPlaces.push(renderRow(tempArray, onSelectPlace, selectedPlaces));
            tempArray=[];
        }
        tempArray.push(item);
    });
    return resultPlaces;
};

const VipPlaceView = ({ placesVip, onSelectPlace, selectedPlaces }):Props =>{
    const _renderPlaces = renderPlaces(placesVip, onSelectPlace, selectedPlaces);
    console.log("placesVip", placesVip)
            return(
                <View>

                    <Text>Hi</Text>

                    {_renderPlaces}

                    </View>
            );
    }

export default VipPlaceView;
