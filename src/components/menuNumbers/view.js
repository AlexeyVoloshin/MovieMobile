import React, {Component} from 'react';
import { Text, View, Modal, Picker,StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
    text: {
        fontSize: 5,
        alignSelf: 'center',
        color: 'red',

    }
});

const MenuNumbersView  = ({ onChange,selected }):Props =>  {
            console.log('selected', selected);

            return(

              <View>
                  <Picker
                      selectedValue={selected}
                      onValueChange={(itemValue, itemIndex) =>  onChange(itemValue, itemIndex)}
                  >

                      <Picker.Item label = "steve" value = "steve" />
                      <Picker.Item label = "ellen" value = "ellen" />
                      <Picker.Item label = "maria" value = "maria" />
                      <Picker.Item label = "steve" value = "steve" />
                      <Picker.Item label = "ellen" value = "ellen" />


                  </Picker>
                  <Text >{selected}</Text>
              </View>
        );
};
export default MenuNumbersView;
