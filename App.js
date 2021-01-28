import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Componentt() {
  constructor(){
    super();
    this.state={
      Text:''
    }
  }
  return (
    <View style={styles.container}> 
      <Header backgroundColor={"red"} centerComponent={
        text:"DIctionary BOok"
        style:{color:"red", fontSize:12}
        
      }>
      
      </Header>
      <TextInput value={this.state.text}
      onChangeText={(textObj)={
        this.setState({
            text:textObj
        })
         
        

      }}
      </TextInput>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
