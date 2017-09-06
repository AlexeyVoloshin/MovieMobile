import React from 'react';
import styled from 'styled-components/native';
import { Text, View, ListView  } from 'react-native';
import CalendarTest from '../../components/calendar';
import Icon from 'react-native-vector-icons/EvilIcons';
const Wrapper = styled.ListView`

`;
const Row = styled.View`
  
`;
const myIcon = (<Icon name="ei-calendar" size={30} color="#900" />);
const MoviePhoto = styled.Image`  
   margin-top: 50;
   width: 250;
   height: 285;
   margin-horizontal: 80;
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
const TextStyledTime2 = styled.Text`
   fontSize: 15;
   color: #ffffffff;
   text-align: center;
   margin-top: 20;
   color: red;
`;
const TextStyledDate = styled.Text`
   background-color: #fd5555ff;
   fontSize: 20;
   color: #ffffffff;
   text-align: center;
   margin-horizontal: 100;
   border-radius:30;
   padding-vertical: 15;
`;

const PremieresView = ({ allMovie}):Props =>{

        return(
            <ImageStyle source={imgUri[0]}>
                <StyledText>ФОРСАЖ 8</StyledText>
                <Row>
                    {/*<myIcon/>*/}
                    <MoviePhoto source={imgUri[1]}>
                    </MoviePhoto>
                        <TextStyled>Розклад сеансів</TextStyled>

                    <TextStyledDate>Чт, 20 квітня</TextStyledDate>
                        <TextStyledTime>Натисніть на час сеансу щоб вибрати місця</TextStyledTime>
                    {/*<CalendarTest/>*/}
                        <TextStyledTime2>18:10  19:00  19:50  20:50   21:40  22:30  23:30
                        </TextStyledTime2>
                </Row>



            </ImageStyle>
        );
};
export default PremieresView;

{/*<Wrapper
                dataSource={allMovie}
                renderRow={(rowData) => <MoviePhoto source={{uri: rowData.embedded.show.image.medium }}/>}

            />*/}