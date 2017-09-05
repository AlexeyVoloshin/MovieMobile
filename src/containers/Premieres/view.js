import React from 'react';
import styled from 'styled-components/native';
import { Text, View, ListView  } from 'react-native';

const Wrapper = styled.ListView`

`;
const Row = styled.View`
  flex-direction: row;  
  margin-bottom: 20 ;
`;

const MoviePhoto = styled.Image`
   margin-horizontal: 1;
   margin-top: 50;
    width: 285;
    height: 285;
`;
const Backgraund = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20 ;
`;
const ImageStyle = styled.Image`
    width: 440;
    height: 660;
`;
const imgUri = [
    require('../../img/layer_5.png'),
    require('../../img/layer_4.png')
];
const StyledText = styled.Text`
  fontSize: 20;
  color: #ffffffff;
  textAlign: center;
  flexDirection: row;
`;
const PremieresView = ({ allMovie}):Props =>{

        return(
            <ImageStyle source={imgUri[0]}>

                <Row>
                    <StyledText>ФОРСАЖ 8</StyledText>
                    <MoviePhoto source={imgUri[1]}>
                    </MoviePhoto>

                </Row>



            </ImageStyle>
        );
};
export default PremieresView;

{/*<Wrapper
                dataSource={allMovie}
                renderRow={(rowData) => <MoviePhoto source={{uri: rowData.embedded.show.image.medium }}/>}

            />*/}