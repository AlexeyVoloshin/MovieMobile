import React, { Component } from "react";
import { Text, View, ListView } from "react-native";
import PremieresView from "./view";
import styled from "styled-components/native";
import { TabBar, Schema } from "react-native-router-flux";
import { Actions } from "react-native-router-flux";

export default class Premieres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      movie: null,
      selectedDate: "",
      item: "",
      arrFilms: [
        {
          id: 0,
          image: require("../../img/layer8.png"),
          title: "ФОТСАЖ 8",
          lang: "Українська мова",
          released: "13.04.2017",
          time: "2 год 16 хв",
          actors:
            "Дуэнд Джонсонб, Шарлиз Терон, Джейсон Стэйтем, Скотт Иствуд,\n" +
            "Лукас Блэк, Хелен Миррен"
        },
        {
          id: 1,
          image: require("../../img/Transformers.png"),
          title: "Трансформеры",
          lang: "Українська мова",
          released: "2017",
          time: "2 год 29 хв",
          actors: "Марк Уолберг, Изабела Монер, Джош Дюамель, Энтони Хопкинс"
        },
        {
          id: 2,
          image: require("../../img/Terminator_Genisys.png"),
          title: "Терминатор: Генезис",
          lang: "Українська мова",
          released: "2 июля 2015 года",
          time: "2 год 6 хв",
          actors:
            "Арнольд Шварценеггер, Эмилия Кларк, Джейсон Кларк, Джай Кортни"
        }
      ]
    };
  }

  handleSetSelectedMovie = item => {
    this.setState({ item });
  };
  handleSetSelectedDate = selectedDate => {
    this.setState({ selectedDate });
  };
  checkChoiceDateSession = (photoMovie, date, time, item) => {
    const ChoiceDateSession = this.state.selectedDate;
    const ChoiceItem = this.state.item;
    if (ChoiceDateSession.length <= 0 || ChoiceItem.length <= 0)
      return alert("Please, select date and movie!");
    this.Premieres(photoMovie, date, time, item);
  };

  Premieres(photoMovie, date, time, item) {
    Actions.movieDetails(photoMovie, date, time, item);
  }

  render() {
    return (
      <PremieresView
        checkChoiceDateSession={this.checkChoiceDateSession}
        allMovie={this.state.movie}
        selectedDate={this.state.selectedDate}
        onSetSelectedDate={this.handleSetSelectedDate}
        arrFilms={this.state.arrFilms}
        handleSetSelectedMovie={this.handleSetSelectedMovie}
        item={this.state.item}
      />
    );
  }
}
