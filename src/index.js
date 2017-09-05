import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst} from 'react-native-router-flux';

import Premieres from './containers/Premieres';
import MovieDetails from './containers/MovieDetails';

export default class Main extends Component{
    render(){
        return (
            <Router>
               <Scene navigationBarStyle={{backgroundColor: '#ef966a' , height: 40, }}
                      key="root"
                      title="Cinema"
                      titleStyle={{color:'#ffffff', fontSize: 25, flex:1, flexDirection:'row', alignItems:'center', alignSelf:'center', }}

               >
                   <Scene
                       key="Premieres"
                       component={Premieres}
                       title="Premieres"
                       hideNavBar={true}
                       initial={true}
               />
                   <Scene
                       key="MovieDetails"
                       component={MovieDetails}
                       title="MovieDetails"

               />
               </Scene>
            </Router>
        )
    }

}