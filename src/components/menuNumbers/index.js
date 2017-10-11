import React, {Component} from "react";
import { Text, View, ListView  } from 'react-native';
import menuNumbersView from './view';

        const menueElem = document.getElementById('CVV');
        const titleElem = menuElem.querySelector('.title');

        titleElem.onclick = function () {
            menueElem.classList.toggle('open');
        };
export default class menuNumbers extends Component {

    render(){
        return (
            <menuNumbersView

              />
        );
    }
}
