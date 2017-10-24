import React from 'react';
import styled from 'styled-components/native';
import {Text, View, ListView, Image, StyleSheet} from 'react-native';
import CalendarTest from '../../components/calendar';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import calendar from '../../components/calendar';

const Wrapper = styled.ListView`

`;
const Row = styled.View`
`;
const MoviePhoto = styled.Image`   
    margin-horizontal: 53;
    width: 285;
    height: 285;
    background-color: #ffffffff;
`;
const PhotoMoviView = styled.View`
   margin-top: 20;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;
const DateStyled = styled.View`
`;
const ImageStyle = styled.Image`
   width: 100%;
   height: 100%;
`;
const StyledText = styled.Text`
   margin-top: 30;
   fontSize: 15;
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
const MovieDateContain = styled.View`
   flex-direction: row;
   justify-content: space-between;
   margin-horizontal: 30;
`;
const MovieDate = styled.Text`
   fontSize: 15;
   color: #ffffffff;
   text-align: center;
   margin-top: 20;
   color: red;
`;

const imgUri = [
    require('../../img/layer_5.png'),
    require('../../img/layer_4.png'),
    require('../../img/calendar.png'),
    require('../../img/arrow-down.png'),
];


const PremieresView = ({allMovie, selectedDate, onSetSelectedDate, checkChoiceDateSession}): Props => {
    console.log('PremieresView selectedDate', selectedDate);
    console.log("allMovie", allMovie);
    return (
        <View>
            <ImageStyle source={imgUri[0]}>
                <StyledText>ФОРСАЖ 8</StyledText>
                <Row>

                    <Wrapper horizontal={true}
                             scrollEnabled={true}
                             dataSource={allMovie}
                             renderRow={(rowData) => {
                                 console.log("rowData", rowData);
                                 return <MoviePhoto onPress source={{uri: rowData}}/>
                             }}

                    />


                    <TextStyled>Розклад сеансів</TextStyled>
                    <DateStyled>
                        <CalendarTest
                            onSetSelectedDate={onSetSelectedDate}
                            selectedDate={selectedDate}
                        />
                    </DateStyled>
                    <TextStyledTime>Натисніть на час сеансу щоб вибрати місця</TextStyledTime>

                    <MovieDateContain>
                        <MovieDate onPress={() => checkChoiceDateSession({
                            photoMovie: allMovie,
                            date: selectedDate,
                            time: "18:10",
                        })
                        }
                        >
                            18:10
                        </MovieDate>
                        <MovieDate onPress={() => checkChoiceDateSession({

                            date: selectedDate,
                            time: "19:00",
                        })
                        }
                        >
                            19:00
                        </MovieDate>
                        <MovieDate onPress={() => checkChoiceDateSession({

                            date: selectedDate,
                            time: "19:50",
                        })
                        }
                        >
                            19:50
                        </MovieDate>
                        <MovieDate onPress={() => checkChoiceDateSession({

                            date: selectedDate,
                            time: "20:50",
                        })
                        }
                        >
                            20:50
                        </MovieDate>
                        <MovieDate onPress={() => checkChoiceDateSession({

                            date: selectedDate,
                            time: "21:40",
                        })
                        }
                        >
                            21:40
                        </MovieDate>
                        <MovieDate onPress={() => checkChoiceDateSession({

                            date: selectedDate,
                            time: "22:30",
                        })
                        }
                        >
                            22:30
                        </MovieDate>
                        <MovieDate onPress={() => checkChoiceDateSession({

                            date: selectedDate,
                            time: "23:30",
                        })
                        }
                        >
                            23:30
                        </MovieDate>
                    </MovieDateContain>

                </Row>
            </ImageStyle>
        </View>
    );
};
export default PremieresView;

