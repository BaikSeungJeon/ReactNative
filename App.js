/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, TextInput} from 'react-native';
import Header from './src/header';
import Generator  from './src/generator';
import NumList from './src/numList';
import Input from './src/input';

class App extends Component{

  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd']
  }

  onChangeInput = (event) => {
      this.setState({
          myTextInput: event
      })
  }

  onAddTextInput = () => {
    this.setState(prevState => {
      return {
        myTextInput: '', // 누르는 순간 공란으로 초기화
        alphabet: [...prevState.alphabet, prevState.myTextInput]
        // alphabet 배열에 prevState를 복제해서(...prevState),
        // prevState에 myTextInput을 넣어주는 구조
      }
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
        <Button
          title="입력 추가" // Button은 title을 꼭 지정해 줘야 한다.
          onPress={this.onAddTextInput} // 누르면 onAddTextInput 실행
        />

        <ScrollView
          style={{width: '100%'}}
        >
          {
            this.state.alphabet.map((item, idx) => (
              <Text
                style={styles.mainText}
                key={idx}
              >
                {item}
              </Text>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView : {
    flex: 1,
    alignItems : 'center',
    marginTop: 50
  },
  input: {
    width: '100%',
    backgroundColor: '#999',
    fontSize: 25,
    marginTop: 10,
    padding: 10
  },
  mainText: {
    fontSize: 20,
    margin: 10,
    padding: 10,
    backgroundColor: '#26d661'
  }

})
export default App;
