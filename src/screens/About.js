import React from "react";
import {Button, Linking, SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback} from "react-native";
import {UI_COLORS} from "../utils/colors";


export default function About(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Pokedex</Text>
            <Text style={styles.subTitle}>Esta es una prueba técnica para bankaya es una pokedex utilizado el api de:</Text>
            <TouchableWithoutFeedback style={styles.btn}  onPress={ ()=>{ Linking.openURL('https://google.com')}} ><Text style={styles.link}>https://pokeapi.co/"</Text></TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:UI_COLORS.main,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:50,
        fontWeight:"900",
        color:UI_COLORS.colorText1
    },
    subTitle:{
        fontSize:20,
        fontWeight:"normal",
        color:UI_COLORS.colorText1,
        margin:15
    },
    btn:{
        color:'transparent'
    },
    link:{
        fontSize:20,
        fontWeight:"normal",
        margin:15,
        color:'blue',
        textDecorationLine: 'underline'
    }
})