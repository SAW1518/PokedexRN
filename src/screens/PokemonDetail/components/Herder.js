import React from 'react';

import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {UI_COLORS} from "../../../utils/colors";

export default function Herder({order,img}) {
    return (
        <View style={styles.header} >
            <View>
                <Text style={{color: 'white', marginTop:5}}>#{`${order}`.padStart(3, 0)}</Text>
            </View>
            <Image source={{uri:  img}}  style={styles.image}/>

        </View>
    );
};


const styles = StyleSheet.create({
    header:{
        position:"relative",
        height:Dimensions.get('window').height/4,
        backgroundColor:UI_COLORS.secondary,
        alignItems:"center",
        borderBottomEndRadius:30,
        borderBottomStartRadius:30
    },image: {
        flex:1,
        width: '40%',
        height: '40%',
        objectFit: 'cover'
    },
})

