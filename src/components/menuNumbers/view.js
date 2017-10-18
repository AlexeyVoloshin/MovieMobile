import React, {Component} from 'react';
import { Text, View, Modal, Picker,StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
    text: {
        fontSize:0,
    }
});

const MenuNumbersView  = ({ onChange,selected }):Props =>  {
            console.log('selected', selected);

            return(

              <View>
                  <Picker
                      selectedValue={selected}
                      onValueChange={(itemIndex, itemValue) =>  onChange(itemIndex,itemValue)}
                  >
                      <Picker.Item label = "1" value = "1" />
                      <Picker.Item label = "2" value = "2" />
                      <Picker.Item label = "3" value = "3" />
                      <Picker.Item label = "4" value = "4" />
                      <Picker.Item label = "5" value = "5" />
                  </Picker>
                  <Text style={styles.text}>{selected}</Text>
              </View>
        );
};
export default MenuNumbersView;
