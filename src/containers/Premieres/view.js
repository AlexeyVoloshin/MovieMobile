import React from "react";
import styled from "styled-components/native";
import {
  Text,
  View,
  ListView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CalendarTest from "../../components/calendar";
import { Actions } from "react-native-router-flux";
import Swiper from "react-native-swiper";
import calendar from "../../components/calendar";

const PhotoListView = styled.ScrollView``;
const MoviePhoto = styled.Image`
  margin-horizontal: 80;
  justify-content: center;
  width: 275;
  height: 300;
  background-color: red;
`;
const DateStyled = styled.View``;
const StyledText = styled.Text`
  fontFamily: SF-UI-Display-Semibold;
  margin-top: 30;
  margin-bottom: 10;
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
const Wrapper = styled.View`
  flex: 1;
  background-color: #0d1a27ff;
`;
const PremieresView = ({
  item,
  handleSetSelectedMovie,
  arrFilms,
  selectedDate,
  onSetSelectedDate,
  checkChoiceDateSession
}): Props => {
  return (
    <Wrapper>
     <ScrollView>
      <View>
        <PhotoListView horizontal={true} scrollEnabled={true}>
          {arrFilms.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleSetSelectedMovie({ item })}
            >
              <View>
                <StyledText> {item.title}</StyledText>
                <MoviePhoto source={item.image} />
              </View>
            </TouchableOpacity>
          ))}
        </PhotoListView>
      </View>
      <TextStyled>Розклад сеансів</TextStyled>
      <DateStyled>
        <CalendarTest
          onSetSelectedDate={onSetSelectedDate}
          selectedDate={selectedDate}
        />
      </DateStyled>
      <TextStyledTime>Натисніть на час сеансу щоб вибрати місця</TextStyledTime>

      <MovieDateContain>
        <MovieDate
          onPress={() =>
            checkChoiceDateSession({
              item: item,
              date: selectedDate,
              time: "18:10"
            })}
        >
          18:10
        </MovieDate>
        <MovieDate
          onPress={() =>
            checkChoiceDateSession({
              item: item,
              date: selectedDate,
              time: "19:00"
            })}
        >
          19:00
        </MovieDate>
        <MovieDate
          onPress={() =>
            checkChoiceDateSession({
              item: item,
              date: selectedDate,
              time: "19:50"
            })}
        >
          19:50
        </MovieDate>
        <MovieDate
          onPress={() =>
            checkChoiceDateSession({
              item: item,
              date: selectedDate,
              time: "20:50"
            })}
        >
          20:50
        </MovieDate>
        <MovieDate
          onPress={() =>
            checkChoiceDateSession({
              item: item,
              date: selectedDate,
              time: "21:40"
            })}
        >
          21:40
        </MovieDate>
        <MovieDate
          onPress={() =>
            checkChoiceDateSession({
              item: item,
              date: selectedDate,
              time: "22:30"
            })}
        >
          22:30
        </MovieDate>
        <MovieDate
          onPress={() =>
            checkChoiceDateSession({
              item: item,
              date: selectedDate,
              time: "23:30"
            })}
        >
          23:30
        </MovieDate>
      </MovieDateContain>
      </ScrollView>
    </Wrapper>
  );
};
export default PremieresView;
