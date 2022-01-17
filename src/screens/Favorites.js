import React, {useEffect} from "react";
import {SafeAreaView, Text} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default  function Favorites(){

    useEffect(()=>{
        getFavorites()
    },[])

    const getFavorites =()=>{
       // const jsonValue = JSON.stringify('favoriteList')
        AsyncStorage.getItem('@favoriteList').then(res=>{
          console.log('@favoriteList', res)
        })
    }

    return (
        <SafeAreaView>
        <Text>Favorites</Text>
        </SafeAreaView>
    )
}