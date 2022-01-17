import React from 'react';

import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {UI_COLORS} from "../../../utils/colors";

export default function WeightAndHeight({weight,height }) {
    return (
        <View style={styles.containerWeightAndHeight}>
            <View style={styles.weightH}>
                <Text style={styles.textWeightH}>{`${weight}  KG`}</Text>
                <Text style={styles.textTitleWeightH}>Weight</Text>
            </View>
            <View style={styles.weightH}>
                <Text style={styles.textWeightH}>{`${height}  M`}</Text>
                <Text style={styles.textTitleWeightH}>Height</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    containerWeightAndHeight:{
        flex:1,
        flexDirection:"row",
        alignItems: 'center',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height/6,
    },weightH:{
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        height:'100%'
    },textWeightH:{
        fontSize:30,
        fontWeight:"bold",
        marginBottom:2,
        color:UI_COLORS.colorText1
    },textTitleWeightH:{
        fontWeight:"300",
        marginBottom:2,
        color:UI_COLORS.colorText1
    }
})

