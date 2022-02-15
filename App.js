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
    sampleText : 'Hello World!'
  }

  render() {
    return(
      <View style={styles.background}>
        <Text>{this.state.sampleText}</Text>
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
