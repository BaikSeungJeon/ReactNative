/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, Text, StyleSheet, Button} from 'react-native';
 
 
 const Generator = (props) => (
     <View style={styles.buttonStyle}>
         <Button
            title = "Add Number"
            onPress={ () => props.add()}
         />
     </View>
 )

 const styles = StyleSheet.create({
     buttonStyle : {
         backgroundColor: '#ddd',
         width: "50%",
         borderRadius: 10
     }
 })
 export default Generator;
  