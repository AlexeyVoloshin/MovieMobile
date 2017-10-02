import React from 'react';
import styled from 'styled-components/native';
import { Text, View, ListView  } from 'react-native';
import CalendarTest from '../../components/calendar';
import { Actions } from 'react-native-router-flux';
import calendar from '../../components/calendar';

const Row = styled.View`
`;
const MoviePhoto = styled.Image`   
   width: 240;
   height: 265;
   justify-content: center;
   align-items: center;
   flex-direction: row;
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
   height: 100%; 
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

const PremieresView = ({ allMovie, selectedDate, onSetSelectedDate }):Props => {
    console.log('PremieresView selectedDate', selectedDate);

        return(
            <ImageStyle source={imgUri[0]}>
                <StyledText>ФОРСАЖ 8</StyledText>
                <Row>

                    <PhotoMoviView>
                    <MoviePhoto source={imgUri[1]}/>
                    </PhotoMoviView>
                        <TextStyled>Розклад сеансів</TextStyled>
                         <DateStyled>
                          <CalendarTest
                              onSetSelectedDate={onSetSelectedDate}
                              selectedDate={selectedDate}
                          />
                         </DateStyled>
                        <TextStyledTime>Натисніть на час сеансу щоб вибрати місця</TextStyledTime>

                    <MovieDateContain>
                        <MovieDate onPress={ () => {Actions.movieDetails({

                            date: selectedDate,
                            time: "18:10",
                            })
                        }}
                        >
                            18:10
                        </MovieDate>
                        <MovieDate onPress={ () => {Actions.movieDetails({

                            date: selectedDate,
                            time: "19:00",
                            })
                        }}
                        >
                            19:00
                        </MovieDate>
                        <MovieDate onPress={ () => {Actions.movieDetails({

                            date: selectedDate,
                            time: "19:50",
                            })
                        }}
                        >
                            19:50
                        </MovieDate>
                        <MovieDate onPress={ () => {Actions.movieDetails({

                            date: selectedDate,
                            time: "20:50",
                            })
                        }}
                        >
                            20:50
                        </MovieDate>
                        <MovieDate onPress={ () => {Actions.movieDetails({

                            date: selectedDate,
                            time: "21:40",
                            })
                        }}
                        >
                            21:40
                        </MovieDate>
                        <MovieDate onPress={ () => {Actions.movieDetails({

                            date: selectedDate,
                            time: "22:30",
                            })
                        }}
                        >
                            22:30
                        </MovieDate>
                        <MovieDate onPress={ () => {Actions.movieDetails({

                            date: selectedDate,
                            time: "23:30",
                            })
                        }}
                        >
                            23:30
                        </MovieDate>
                    </MovieDateContain>

                </Row>
            </ImageStyle>
        );
};
export default PremieresView;

{/*<Wrapper
                dataSource={allMovie}
                renderRow={(rowData) => <MoviePhoto source={{uri: rowData.embedded.show.image.medium }}/>}

            />*/}