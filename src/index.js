import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text
} from 'react-native';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst} from 'react-native-router-flux';

import Premieres from './containers/Premieres';
import MovieDetails from './containers/MovieDetails';
import Tickets from "./containers/Tickets/index";
import Discount from "./containers/tabs/Discount";
import Soon from "./containers/tabs/Soon";
import Payment from "./containers/Payment/index";
const TabIcon = ({ selected, title}) =>{
    return(
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    );
};
export default class Main extends Component{
    render(){
        return (
            <Router>
               <Scene navigationBarStyle={{backgroundColor: '#f15459ff' , height: 40, }}
                      key="root"
                      title="Cinema"
                      titleStyle={{color:'#ffffff', fontSize: 25, flex:1, flexDirection:'row', alignItems:'center', alignSelf:'center', }}

               >
                   <Scene
                       key="tabbar"
                       tabs={true}
                       tabBarStyle={{backgroundColor: '#ef966a',  height: 35 }}
                       //hideTabBar={true}
                       showLabel={false}

                   >
                       <Scene
                           key="premieres"
                           component={Tickets}
                           title="Зараз у кіно"
                           initial={true}
                           icon={TabIcon}
                           hideNavBar={true}


                       />
                       <Scene
                           key="discount"
                           component={Discount}
                           title="Акції та скидки"
                           icon={TabIcon}

                       >
                       </Scene>
                       <Scene
                           key="soon"
                           component={Soon}
                           icon={TabIcon}
                           //title="Хмельницький, Оазис"

                       />
                    </Scene>
               </Scene>
            </Router>
        )
    }

}