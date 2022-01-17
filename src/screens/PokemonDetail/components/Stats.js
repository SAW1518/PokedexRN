import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {map, capitalize} from 'lodash'
import {POK_COLORS, UI_COLORS} from "../../../utils/colors";

export default function Stats({stats}) {
    
    const barStyles = (num) => {
      return {
          backgroundColor: num > 50 ? UI_COLORS.secondary : POK_COLORS.psychic,
          width: `${num}%`,
      }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Estadisticas Base
            </Text>
            {map(stats, (item)=>(
                <View key={item.stat.name} style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.stateName}>{capitalize(item.stat.name)}</Text>
                    </View>
                    <View style={styles.blockInfo}>
                        <Text style={styles.number}>{item.base_stat}</Text>
                        <View style={styles.bgB}>
                            <View style={[styles.bar, barStyles(item.base_stat)]}/>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20,
        marginTop:40,
        marginBottom:60
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        paddingBottom:5,
        color: UI_COLORS.colorText1
    },
    block:{
        flexDirection:"row",
        paddingVertical:5
    },
    blockTitle:{
        width:'30%'
    },
    stateName:{
        fontSize:12,
        color: UI_COLORS.colorText1
    },
    blockInfo:{
        width:'70%',
        flexDirection:'row',
        alignItems:"center"
    },
    number:{
        width:'12%',
        fontSize:12,
        color:UI_COLORS.colorText1
    },
    bgB:{
        backgroundColor:"#dedede",
        width:"88%",
        height:5,
        borderRadius:20,
        overflow:'hidden'
    },
    bar:{
        height:5,
        borderRadius:20
    }

})

