import React from 'react';
import styled from 'styled-components/native';
import { Text, View, ListView  } from 'react-native';
import { Action } from 'react-native-router-flux';
const Wrapper = styled.View`
    flex: 1;
    background-color: #0d1a27ff;
`;

const FilmTitle = styled.Text`
   fontFamily: SFUIDisplay-Bold;
   margin-top: 20;
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
   width: 150;
   height: 240;
`;
const MoviePoster = styled.View`
   margin-top: 10;
   flex-direction: row;
   margin-left: 15;
`;
const MovieInfoTextContainer = styled.View`
    flex: 1;
    padding-vertical: 20;
`;
const MovieSquare = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10;
    margin-left: 10;
`;
const SquaresView = styled.View`
    width: 16;
    height: 16;
    background-color: ${props => props.color ? props.color : '#000'};
    border-radius: 2;
    margin: 0 5px 5px 0;
`;
const SquaresViewVip = styled.View`
    width: 12;
    height: 12;
    background-color: #4c6bacff;
    border-radius: 2;
    margin: 0 5px 5px 0;
`;
const SquaresText = styled.Text`
    fontSize: 10;
    color: #ffffffff;
`;
const InfoLeft = styled.View`
    margin-left: 5;
    flex: 0.4;
`;
const InfoRight = styled.View`
    margin-left: 5;
    flex: 0.6;
`;
const InfoLeftBottom = styled.View`
    margin-left: 5;
    height: 60;
    flex: 1;
`;
const TextInfo = styled.Text`
    fontFamily: SFUIDisplay-Regular;
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
    margin-top: 10;
    border-radius:30;
    background-color: #f15459ff;
    margin-horizontal: 80;
    padding-vertical: 7;
    margin-bottom:  15;
`;
const Places = styled.View`
    background-color: gray;
`;
const PlacesEndRow = styled.View`
    margin-horizontal: 50;
    flex-direction: row;
`;
const PlacesRow = styled.View`
    margin-top: 5;
    flex-direction: row;
`;
const PlacesRowVip = styled.View`
    margin-top: 5;
    margin-horizontal: 60;
    flex-direction: row;
`;
const NumberRowView = styled.View`
    background-color: green;
    flex-direction: column;
`;
const NumberRow = styled.Text`
    color: red; 
    background-color: blue;
    flex: 1;
`;
const number = ["1\n2\n3\n4\n5\n6\n7\n8\n9"];
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
    return <PlacesRow onPress={()=> Action.Payment()}

    >{resultRow}</PlacesRow>;
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
/*const renderRowVip = (placesVip) =>{
    const resultRowVip = [];
    placesVip.forEach((item, i, arr) => {
        resultRowVip.push(<SquaresView key={v} color="steelblue" />);
    });
    console.log(<PlacesRowVip>{resultRowVip}</PlacesRowVip>);
    return <PlacesRowVip>{resultRowVip}</PlacesRowVip>;
};
*/

const MovieDetailsView = (places, placesVip):Props =>{
    const _renderPlaces = renderPlaces(places);
    /*const _renderPlacesVip = renderRowVip(placesVip);*/
    return(
        <Wrapper>
            <ImageStyle source1={imgUri[0]} resizeMode="cover" />
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
              <PlacesEndRow>
                  <NumberRowView>
                    <NumberRow>
                    {number}
                    </NumberRow>
                  </NumberRowView>
                <Places>
                    {_renderPlaces}
                </Places>
              </PlacesEndRow>
            <NextView>
            <Next>Далі</Next>
            </NextView>
        </Wrapper>
    )
};
export default MovieDetailsView;