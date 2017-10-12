import React, {Component} from "react";
import { Text, View, ListView  } from 'react-native';
import MenuNumbersView from './view';


export default class MenuNumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {user: ''};
    }

    updateUser = (itemValue, itemIndex) => {
        console.log('itemValue', itemValue);
        console.log('itemIndex', itemIndex);
        this.setState({user: itemIndex})
    }

    render(){
        return (
            <MenuNumbersView
                onChange={this.updateUser}
                 selected={this.state.user}
              />
        );
    }
}

