import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import {
  Scene,
  Router,
  TabBar,
  Modal,
  Schema,
  Actions,
  Reducer,
  ActionConst
} from "react-native-router-flux";

import Premieres from "./containers/Premieres";
import MovieDetails from "./containers/MovieDetails";
import Tickets from "./containers/Tickets/index";
import Discount from "./containers/tabs/Discount";
import Soon from "./containers/tabs/Soon";
import Payment from "./containers/Payment/index";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "#ffffffff" }}>{title}</Text>;
};
export default class Main extends Component {
  render() {
    return (
      <Router>
        <Scene
          navigationBarStyle={{
            backgroundColor: "#e84568ff",
            height: 30,
            borderBottomWidth: 0,
            elevation: 0
          }}
          key="root"
          title="Хмельницбкий, Оазис"
          titleStyle={{
            color: "#ffffff",
            fontSize: 15,
            flex: 1,
            flexDirection: "row",
            alignSelf: "center"
          }}
        >
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: "#e84568ff", height: 20 }}
            showLabel={false}
          >
            <Scene
              key="premieres"
              component={Premieres}
              title="Зараз у кіно"
              initial={true}
              icon={TabIcon}
              hideNavBar={false}
              hideTabBar={false}
            />
            <Scene
              key="discount"
              component={Discount}
              title="Акції та скидки"
              icon={TabIcon}
            />
            <Scene
              key="soon"
              component={Soon}
              icon={TabIcon}
              title="Скоро в прокаті"
            />
          </Scene>
          <Scene key="movieDetails" component={MovieDetails} icon={TabIcon} />
          <Scene key="tickets" component={Tickets} icon={TabIcon} />
          <Scene key="payment" component={Payment} icon={TabIcon} />
        </Scene>
      </Router>
    );
  }
}
