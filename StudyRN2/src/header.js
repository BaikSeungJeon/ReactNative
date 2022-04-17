/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, Text, StyleSheet} from 'react-native';
 
 
 const Header = (props) => (
     <View style={styles.header}>
         <Text >
             {props.name}
         </Text>
     </View>
 )
 
 const styles = StyleSheet.create({
   header : {
        width: '100%',
        padding: 10,
        marginTop: 50,
        backgroundColor: '#999',
        alignItems : 'center',
        fontWeight: 'bold'
   }
 })

 export default Header;
  