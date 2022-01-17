import React from 'react';

import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {POK_COLORS, UI_COLORS} from "../../../utils/colors";
import {capitalize} from "lodash";

export default function Types({types}) {

    const getColorByPK =(type)=>POK_COLORS[type.toLowerCase()]
    return (
        <View style={styles.contentTypes}>
            {types.map((item)=>{
                return (
                    <Text key={item.type?.name} style={[styles.typeContainer,{backgroundColor: getColorByPK(item.type.name)}]}>
                        {capitalize(item?.type?.name)}
                    </Text>
                )
            })}
        </View>
    );
};


const styles = StyleSheet.create({
    typeContainer:{
        flex:1,
        margin:10,
        backgroundColor: 'rgba(255, 255, 255 ,.10)',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        color:UI_COLORS.colorDarkText,

    }, contentTypes: {
        flex:1,
        flexDirection:"row",
        width: '100%',
        height: '100%',
    }
})