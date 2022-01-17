import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {UI_COLORS} from "../../../utils/colors";
import {capitalize} from "lodash";

export default function NamePokemonDetail({name}) {
    return (
        <View style={styles.containerName}>
            <Text style={styles.nameText} >
                { capitalize(name)}
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    containerName:{
        alignItems: 'center',
    },
    nameText:{
        fontSize:35,
        color:UI_COLORS.colorText1
    }
})

