import React from 'react';
import {
    StyleSheet,
    FlatList,
    SafeAreaView,
    Text,
    View,
    TouchableWithoutFeedback,
    Dimensions,
    Image
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {POK_COLORS, UI_COLORS} from "../utils/colors";
import Types from "../screens/PokemonDetail/components/Types";
import {capitalize} from "lodash";

export default function PokemonItem({pokemon}) {
    const navigation = useNavigation()
    const goToPokemon = () => {
        console.log(pokemon.name)
        navigation.navigate("PokemonDetailScreen", {id:pokemon.id})

    }
    const getColorByPK =(type)=>POK_COLORS[type.toLowerCase()]

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.item}>
                <View style={styles.dataContainer}>
                    <View style={styles.contentName}>
                        <Text style={{color: 'white'}}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                        <Text style={{color: 'white'}}>{`${capitalize(pokemon.name)}`}</Text>
                    </View>
                    <Types types={pokemon?.types}/>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={{uri: pokemon.image}} style={styles.image}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        height: 130,
        backgroundColor: UI_COLORS.secondary,
        marginVertical: 5,
        borderRadius: 30,
        overflow:"hidden"
    },
    image: {
        width: '70%',
        height: '70%',
    }, dataContainer: {
        display: "flex",
        flex: 1,
        width: '70%',
        height: '100%'
    }, contentName: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '50%',
        padding: 15
    }, contentTypes: {
        flex:1,
        flexDirection:"row",
        width: '100%',
        height: '50%',
    },
    imgContainer: {
        alignItems: 'center',
        justifyContent: "center",
        width: '30%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255 ,.10)',
        borderTopLeftRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        borderBottomLeftRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    },typeContainer:{
        flex:1,
        height:'35%',
        margin:10,
        backgroundColor: 'rgba(255, 255, 255 ,.10)',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        color:UI_COLORS.colorDarkText,

    }
})