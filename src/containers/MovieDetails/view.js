import React from 'react';
import styled from 'styled-components/native';
import { Text, View, ListView  } from 'react-native';
import { Action } from 'react-native-router-flux';
const Wrapper = styled.View`
    flex: 1;
`;
const Row = styled.View`
`;
const FilmTitle = styled.Text`
   margin-top: 30;
   fontSize: 20;
   color: #ffffffff;
   text-align: center;
`;
const MovieInfo = styled.View`
   flex-direction: row;
`;
const TextTitle = styled.Text`
   fontSize: 15;
   color: #ffffffff;
   margin-left: 5;
`;
const ImageStyle = styled.Image`
   width: 100%;
   height: 100%;
   position: absolute;
`;
const MoviePhoto = styled.Image`   
   width: 180;
   height: 270  ;
`;
const MoviePoster = styled.View`
   margin-top: 40;
   flex-direction: row;
   margin-left: 15;
`;
const MovieInfoTextContainer = styled.View`
    flex: 1;
    padding-vertical: 40;
`;
const MovieSquare = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5;
    margin-left: 10;
`;
const SquaresView = styled.View`
    width: 20;
    height: 21;
    background-color: ${props => props.color ? props.color : '#000'};
    border-radius: 2;
    margin: 0 5px 5px 0;
`;
const SquaresText = styled.Text`
    fontSize: 10;
    color: #ffffffff;
`;
const InfoLeft = styled.View`
    background-color: blue;
    margin-left: 5;
    flex: 0.4;
`;
const InfoRight = styled.View`
    background-color: red;
    margin-left: 5;
    flex: 0.6;
`;
const InfoLeftBottom = styled.View`
    background-color: green;
    margin-left: 5;
    height: 60;
    flex: 1;
`;
const TextInfo = styled.Text`
    fontSize: 10;
    color: #ffffffff;
`;
const InfoRow = styled.View`
    flex: 1;
    flex-direction: row;
`;
const Next = styled.Text`
   fontSize: 20;
   color: #ffffffff;
   text-align: center;
`;
const NextView = styled.View`
    border-radius:30;
    background-color: #f15459ff;
    margin-horizontal: 80;
    padding-vertical: 10;
`;
const Places = styled.View`
    background-color: red;
`;
const PlacesRow = styled.View`
    background-color: green;
    flex-direction: row;
`;
const imgUri = [
    require('../../img/layer_5.png'),
    require('../../img/layer_4.png'),
    require('../../img/calendar.png'),
    require('../../img/arrow-down.png'),
];

const renderRow = (places) =>{
    const resultRow = [];
    places.forEach((item, i, arr) => {
        resultRow.push(<SquaresView key={i} color="steelblue" />);
    });
    console.log(<PlacesRow>{resultRow}</PlacesRow>);
    return <PlacesRow>{resultRow}</PlacesRow>;
};

const renderPlaces = (places) => {
    console.log('renderPlaces', places.places);
    let tempArray = [];
    let resultPlaces = [];
    places.places.forEach((item, i, arr) => {
        if(i%14 === 0){
            console.log('renderPlaces renderRow');
            resultPlaces.push(renderRow(tempArray));
            tempArray=[];
        }
        tempArray.push(item);
    });
    return resultPlaces;
};

const MovieDetailsView = (places):Props =>{
    const _renderPlaces = renderPlaces(places);

    return(
        <Wrapper>
            <ImageStyle source={imgUri[0]} resizeMode="cover" />
                <FilmTitle>ФОРСАЖ 8</FilmTitle>
            <MovieInfo>
                <MoviePoster>
                    <MoviePhoto source={imgUri[1]}/>
                </MoviePoster>
                <MovieInfoTextContainer>
                  <InfoRow>
                    <InfoLeft>
                        <TextInfo>Тривалість</TextInfo>
                    </InfoLeft>
                    <InfoRight>
                        <TextInfo>2 год 16 хв</TextInfo>
                    </InfoRight>
                  </InfoRow>
                    <InfoRow>
                        <InfoLeft>
                            <TextInfo>Оригінальна назва</TextInfo>
                        </InfoLeft>
                        <InfoRight>
                            <TextInfo>The Fate of the Furious</TextInfo>
                        </InfoRight>
                    </InfoRow>
                    <InfoRow>
                        <InfoLeft>
                            <TextInfo>Режисер</TextInfo>
                        </InfoLeft>
                        <InfoRight>
                            <TextInfo>Ф. Гери Грей</TextInfo>
                        </InfoRight>
                    </InfoRow>
                    <InfoRow>
                        <InfoLeft>
                            <TextInfo>Дата виходу</TextInfo>
                        </InfoLeft>
                        <InfoRight>
                            <TextInfo>13.04.2017</TextInfo>
                        </InfoRight>
                    </InfoRow>
                    <InfoRow>
                        <InfoLeft>
                            <TextInfo>Рейтинг Imdb</TextInfo>
                        </InfoLeft>
                        <InfoRight>
                            <TextInfo>7.4</TextInfo>
                        </InfoRight>
                    </InfoRow>
                    <InfoRow>
                        <InfoLeft>
                            <TextInfo>Рейтинг Kinopoisk</TextInfo>
                        </InfoLeft>
                        <InfoRight>
                            <TextInfo>6.7</TextInfo>
                        </InfoRight>
                    </InfoRow>
                    <InfoRow>
                        <InfoLeft>
                            <TextInfo>Мова перекладу</TextInfo>
                        </InfoLeft>
                        <InfoRight>
                            <TextInfo>Українська мова</TextInfo>
                        </InfoRight>
                    </InfoRow>
                    <InfoRow>
                        <InfoLeft>
                            <TextInfo>Жанр</TextInfo>
                        </InfoLeft>
                        <InfoRight>
                            <TextInfo>Пригодницький екшн, Бойовик, Триллер</TextInfo>
                        </InfoRight>
                    </InfoRow>
                    <InfoRow>
                        <InfoLeft>
                            <TextInfo>Вік</TextInfo>
                        </InfoLeft>
                        <InfoRight>
                            <TextInfo>16+</TextInfo>
                        </InfoRight>
                    </InfoRow>
                    <InfoRow>
                        <InfoLeftBottom>
                            <TextInfo>В головних ролях:</TextInfo>
                            <TextInfo>Дуэнд Джонсонб, Шарлиз Терон, Джейсон Стэйтем, Скотт Иствуд,
                            Лукас Блэк, Хелен Миррен
                            </TextInfo>
                        </InfoLeftBottom>

                    </InfoRow>

                </MovieInfoTextContainer>

            </MovieInfo>
            <MovieSquare>
                <SquaresView color="skyblue"/>
                <SquaresText>GOOD 65 грн</SquaresText>

                <SquaresView color="steelblue" />
                <SquaresText>Super LUX 65 грн</SquaresText>

                <SquaresView color="gray" />
                <SquaresText>Місце зайняте</SquaresText>

                <SquaresView color="red" />
                <SquaresText>Ваш вибір</SquaresText>

            </MovieSquare>
            <Places>
                {_renderPlaces}
            </Places>
            <NextView>
            <Next>Далі</Next>
            </NextView>
        </Wrapper>
    )
};
export default MovieDetailsView;