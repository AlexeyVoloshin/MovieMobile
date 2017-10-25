import React from "react";
import styled from "styled-components/native";
import { Text, View, ListView } from "react-native";
import { Actions } from "react-native-router-flux";
import VipPlace from "../../components/vipPlace";

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
  margin-left: 5;
  margin-right: 2;
`;
const MovieSquare = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 15;
  margin-top: 15;
`;
const SquaresPlaceView = styled.TouchableOpacity`
  width: 13;
  height: 13;
  background-color: ${props => (props.color ? props.color : "#000")};
  border-radius: 2;
  margin: 0 5px 5px 0;
  margin-top: 10;
`;
const SquaresView = styled.TouchableOpacity`
  width: 15;
  height: 15;
  background-color: ${props => (props.color ? props.color : "#000")};
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
  margin-top: 8;
  border-radius: 30;
  background-color: #f15459ff;
  margin-horizontal: 80;
  height: 32;
`;
const Places = styled.View``;
const PlacesContainer = styled.View`
  margin-horizontal: 26;
`;
const PlacesEndRow = styled.View`
  margin-top: 6;
  margin-left: 20;
  flex-direction: row;
`;
const PlacesRow = styled.View`
  margin-top: 1;
  flex-direction: row;
  justify-content: space-between;
`;
const TopPlaceView = styled.View`
  width: 15;
  height: 15;
  border-radius: 2;
  margin: 0 5px 5px 0;
  background-color: #72bddcff;
`;
const TopPlaceContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const VipPlaceContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-left: 10;
`;
const TopPlaceText = styled.Text`
  color: #72bddcff;
`;
const OnPressView = styled.TouchableOpacity`
  height: 60px;
`;
const NumericPlaces = styled.View`
  width: 16;
  height: 16;
  border-radius: 2;
  margin: 0 5px 5px 0;
`;
const NumericPlaceText = styled.Text`
  color: #6d727aff;
`;
const NumericContainer = styled.View`
  justify-content: center;
`;
const VipPlaceView = styled.View`
  margin-right: 11;
`;
const imgUri = [
  require("../../img/layer_5.png"),
  require("../../img/layer_4.png"),
  require("../../img/calendar.png"),
  require("../../img/arrow-down.png")
];
const isActivePlace = (selectedPlaces, numberRow, numberPlace) => {
  const placeElement = selectedPlaces.find(item => {
    return item.numberPlace === numberPlace && item.numberRow === numberRow;
  });
  return !!placeElement;
};
const renderRow = (places, onSelectPlace, selectedPlaces) => {
  const resultRow = [];
  places.forEach((item, i, arr) => {
    const iasActive = isActivePlace(
      selectedPlaces,
      item.numberRow,
      item.numberPlace
    );
    resultRow.push(
      <SquaresView
        key={i}
        onPress={() => onSelectPlace(item.numberRow, item.numberPlace)}
        color={iasActive ? "red" : "#72bddcff"}
      />
    );
  });
  console.log(<PlacesRow>{resultRow}</PlacesRow>);
  return <PlacesRow>{resultRow}</PlacesRow>;
};
const renderPlaces = (places, onSelectPlace, selectedPlaces) => {
  console.log("renderPlaces", places.places);
  let tempArray = [];
  let resultPlaces = [];
  places.forEach((item, i, arr) => {
    if (i % 14 === 0) {
      console.log("renderPlaces renderRow");
      resultPlaces.push(renderRow(tempArray, onSelectPlace, selectedPlaces));
      tempArray = [];
    }
    tempArray.push(item);
  });
  return resultPlaces;
};

const MovieDetailsView = ({
  selectedDateMovie,
  places,
  selectedDate,
  selectedTime,
  onSelectPlace,
  selectedPlaces,
  placesNumeric,
  TopPlace,
  checkChoiceDate
}): Props => {
  const _renderPlaces = renderPlaces(places, onSelectPlace, selectedPlaces);
  console.log("selectedDateMovie", selectedDateMovie);
  return (
    <Wrapper>
      <ImageStyle source1={imgUri[0]} resizeMode="cover" />

      <FilmTitle>{selectedDateMovie.item.title}</FilmTitle>

      <MovieInfo>
        <MoviePoster>
          <MoviePhoto source={selectedDateMovie.item.image} />
        </MoviePoster>
        <MovieInfoTextContainer>
          <InfoRow>
            <InfoLeft>
              <TextInfo>Тривалість</TextInfo>
            </InfoLeft>
            <InfoRight>
              <TextInfo>{selectedDateMovie.item.time}</TextInfo>
            </InfoRight>
          </InfoRow>
          <InfoRow>
            <InfoLeft>
              <TextInfo>Оригінальна назва</TextInfo>
            </InfoLeft>
            <InfoRight>
              <TextInfo>{selectedDateMovie.item.title}</TextInfo>
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
              <TextInfo>{selectedDateMovie.item.released}</TextInfo>
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
              <TextInfo>{selectedDateMovie.item.lang}</TextInfo>
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
              <TextInfo>{selectedDateMovie.item.actors}</TextInfo>
            </InfoLeftBottom>
          </InfoRow>
        </MovieInfoTextContainer>
      </MovieInfo>
      <MovieSquare>
        <SquaresView color="#72bddcff" />
        <SquaresText>GOOD 65 грн</SquaresText>

        <SquaresView color="#4d6babff" />
        <SquaresText>Super LUX 65 грн</SquaresText>

        <SquaresView color="gray" />
        <SquaresText>Місце зайняте</SquaresText>

        <SquaresView color="red" />
        <SquaresText>Ваш вибір</SquaresText>
      </MovieSquare>
      <PlacesEndRow>
        <NumericContainer>
          {placesNumeric.map(place => {
            return (
              <NumericPlaces>
                <NumericPlaceText>{place.numericPlace}</NumericPlaceText>
                <NumericPlaceText>{place.numericRow}</NumericPlaceText>
              </NumericPlaces>
            );
          })}
        </NumericContainer>
        <Places>
          <TopPlaceContainer>
            {TopPlace.map(place => {
              return (
                <TopPlaceView>
                  <TopPlaceText>{place.numericPlace}</TopPlaceText>
                  <TopPlaceText>{place.numericRow}</TopPlaceText>
                </TopPlaceView>
              );
            })}
          </TopPlaceContainer>
          <PlacesContainer>{_renderPlaces}</PlacesContainer>
          <VipPlaceContainer>
            <VipPlaceView>
              <SquaresPlaceView color="#4d6babff" />
            </VipPlaceView>
            <VipPlaceView>
              <SquaresPlaceView color="#4d6babff" />
            </VipPlaceView>
            <VipPlaceView>
              <VipPlace />
            </VipPlaceView>
            <VipPlaceView>
              <VipPlace />
            </VipPlaceView>
            <VipPlaceView>
              <VipPlace />
            </VipPlaceView>
            <VipPlaceView>
              <VipPlace />
            </VipPlaceView>
            <VipPlaceView>
              <VipPlace />
            </VipPlaceView>
            <VipPlaceView>
              <SquaresPlaceView color="#4d6babff" />
            </VipPlaceView>
          </VipPlaceContainer>
        </Places>
      </PlacesEndRow>
      <OnPressView
        onPress={() =>
          checkChoiceDate({
            item: selectedDateMovie,
            date: selectedDate,
            time: selectedTime,
            places: selectedPlaces,
            price: 65
          })}
      >
        <NextView>
          <Next>Далі</Next>
        </NextView>
      </OnPressView>
    </Wrapper>
  );
};
export default MovieDetailsView;
