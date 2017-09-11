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
                       tabs
                       tabBarStyle={{backgroundColor: '#ef966a',  height: 35 }}
                   >
                       <Scene
                           key="Latest"
                           title="Latest"
                           icon={TabIcon}
                       >
                   <Scene
                       key="Premieres"
                       component={Premieres}
                       title="Premieres"
                       hideNavBar={true}
                       initial={true}
               />
                       </Scene>
                   <Scene
                       key="Details"
                       title="Details"
                       icon={TabIcon}

                   >
                       <Scene
                       key="MovieDetails"
                       component={MovieDetails}
                       title="зараз у кіно"

               />
                   </Scene>
                       <Scene
                           key="Ticket"
                           title="Ticket"
                           icon={TabIcon}
                       >
                   <Scene
                       key="Tickets"
                       component={Tickets}
                       title="Хмельницький, Оазис"
                       initial={true}

                   />
                       </Scene>
               </Scene>
                   </Scene>

            </Router>
        )
    }

}