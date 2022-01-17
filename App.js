/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from "./src/navigation/Navigation";
const App: () => Node = () => {
    return (
        <NavigationContainer>
         <Navigation/>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: "center",
      alignItems:'center'
  }
});

export default App;
