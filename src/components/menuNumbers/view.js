import React, {Component} from 'react';
import { Text, View, Modal, Picker,StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
        alignSelf: 'center',
        color: 'red',
        paddingHorizontal: 100,
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
                      <Picker.Item label = "2" value = "ellen" />
                      <Picker.Item label = "3" value = "maria" />
                      <Picker.Item label = "4" value = "steve" />
                      <Picker.Item label = "5" value = "ellen" />
                      <Picker.Item label = "6" value = "maria" />
                      <Picker.Item label = "7" value = "steve" />
                      <Picker.Item label = "8" value = "ellen" />
                      <Picker.Item label = "9" value = "maria" />
                      <Picker.Item label = "10" value = "steve" />
                      <Picker.Item label = "11" value = "ellen" />
                      <Picker.Item label = "12" value = "maria" />


                  </Picker>
                  <Text>{selected}</Text>
              </View>
        );
};
export default MenuNumbersView;
