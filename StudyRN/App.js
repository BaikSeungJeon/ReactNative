/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {

  // const App () => {} 이런 식으로 함수 정의하면 state 사용이 불가한데,
  // class App extends ~ {} 지금처럼 class로 정의하였기 때문에 state 사용이 가능하다.

  state = {
    sampleText : 'Hello World!',
    sampleNum : 1
  }

  /*changeState = () => {
    this.setState({
      sampleText : 'changeState!!'
    })
  }*/

  onAdd = () => {
    this.setState(prevState => {
      return {
        sampleNum : prevState.sampleNum + 1
      }
    })
  }

  render() {
    return(
      <View style={styles.background}>
        <Text onPress={this.onAdd}>
          {this.state.sampleNum}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
