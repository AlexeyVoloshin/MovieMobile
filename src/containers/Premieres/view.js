import React from 'react';
import styled from 'styled-components/native';
import { Text, View, ListView  } from 'react-native';
import CalendarTest from '../../components/calendar';
import { Action } from 'react-native-router-flux';
const Wrapper = styled.ListView`

`;
const Row = styled.View`
  
`;

const MoviePhoto = styled.Image`   
   width: 250;
   height: 285;
`;
const PhotoMoviView = styled.View`
   margin-top: 50;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;
const DateStyled = styled.View`
   background-color: #fd5555ff;
   margin-horizontal: 80;
   border-radius:30;
   padding-vertical: 10;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;
const ImageStyle = styled.Image`
   width: 440;
   height: 660;
`;
const ImageStyleCalendar = styled.Image`    
   width: 25;
   height: 25;
   margin-left: 20;
`;
const ImageStyleArrow = styled.Image`    
   width: 22;
   height: 13;
   margin-right: 20;
`;
const StyledText = styled.Text`
   margin-top: 30;
   fontSize: 20;
   color: #ffffffff;
   text-align: center;
`;
const TextStyled = styled.Text`
   fontSize: 20;
   color: #ffffffff;
   text-align: center;
   margin-top: 20;
`;
const TextStyledTime = styled.Text`
   fontSize: 10;
   color: #ffffffff;
   text-align: center;
   margin-top: 20;
`;
const MovieDate = styled.Text`
   fontSize: 15;
   color: #ffffffff;
   text-align: center;
   margin-top: 20;
   color: red;
`;
const TextStyledDate = styled.Text`
   fontSize: 20;
   color: #ffffffff;
   text-align: center;
`;
const imgUri = [
    require('../../img/layer_5.png'),
    require('../../img/layer_4.png'),
    require('../../img/calendar.png'),
    require('../../img/arrow-down.png'),
];

const PremieresView = ({ allMovie}):Props =>{

        return(
            <ImageStyle source={imgUri[0]}>
                <StyledText>ФОРСАЖ 8</StyledText>
                <Row>
                    {/*<myIcon/>*/}
                    <PhotoMoviView>
                    <MoviePhoto source={imgUri[1]}/>
                    </PhotoMoviView>
                        <TextStyled>Розклад сеансів</TextStyled>

                    <DateStyled >
                        <ImageStyleCalendar source={imgUri[2]}/>
                    <TextStyledDate>Чт, 20 квітня</TextStyledDate>
                        <ImageStyleArrow source={imgUri[3]}/>
                    </DateStyled>
                        <TextStyledTime>Натисніть на час сеансу щоб вибрати місця</TextStyledTime>
                    {/*<CalendarTest/>*/}
                        <MovieDate onPress={()=> Action.Discount()}
                        >
                            18:10  19:00  19:50  20:50   21:40  22:30  23:30
                        </MovieDate>
                </Row>



            </ImageStyle>
        );
};
export default PremieresView;

{/*<Wrapper
                dataSource={allMovie}
                renderRow={(rowData) => <MoviePhoto source={{uri: rowData.embedded.show.image.medium }}/>}

            />*/}