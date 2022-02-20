/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {View, Text, StyleSheet} from 'react-native';
 import {Picker} from '@react-native-picker/picker';
 import Slider from '@react-native-community/slider';
 
 class PickerComponent extends Component{

    state = {
        country: 'korea',
        value: 50
    }
    
    sliderValueChange = (value) => {
        this.setState({
            value : value
        })
    }
   render() {
     return (
       <View style={styles.container}>
           <Slider
            style={{width:300, height:50}}
            value={this.state.value} // value를 state에서 받아옴
            minimumValue={0} // 최소값
            maximumValue={100} // 최대값
            onValueChange={this.sliderValueChange} // value 변할 때마다
            maximumTrackTintColor='red' // 현재 기준 오른쪽 컬러
            minimumTrackTintColor='blue' // 현재 기준 왼쪽 컬러
            step={1} // 값 단위 1 단위로 바뀌도록 지정
           />
           <Text style={styles.input}>
               {this.state.value}
               {/* slider의 숫자 추종 */}
           </Text>
           <Picker
            style={{width: 250, height: 50}}
            selectedValue={this.state.country}
            onValueChange={(val, idx) => 
                this.setState({country : val})
                // value가 change 시 콜백 되도록
            } 
           >
               {/* <Picker/> 안에 작성 */}
               <Picker.item label="Korea" value="korea"/>
               <Picker.item label="English" value="English"/>

           </Picker>
       </View>
     )
   }
 }
 
 const styles = StyleSheet.create({
   container: {
       flex: 1,
       paddingTop: 20,
       marginBottom: 100,
       alignItems: 'center'
   },
   input : {
       width: '100%',
       fontSize: 20
   }
 })
 export default PickerComponent;
 