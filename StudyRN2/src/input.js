/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {View, Text, StyleSheet, TextInput} from 'react-native';
 
 class Input extends Component{
 
    state = {
        myTextInput: ''
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput: event
        })
    }

   render() {
     return (
         <View style={styles.mainView}>
            <TextInput
                value={this.state.myTextInput}
                style={styles.input}
                onChangeText={this.onChangeInput}
                multiline={true} // 두 줄
                maxLength={100} // 글자수 100 제한
                autoCapitalize={'none'} // 대문자 자동 수정 제한
            />
         </View>
     )
   }
 }
 
 const styles = StyleSheet.create({
     mainView: {
        width: '100%'
     },
   input: {
       width: '100%',
       backgroundColor: '#999',
       fontSize: 25,
       marginTop: 10,
       padding: 10
   }
 })
 
 export default Input;
 