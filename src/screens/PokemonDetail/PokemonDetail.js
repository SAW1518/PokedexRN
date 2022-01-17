import React, {useEffect, useState} from 'react';

import {
    ActivityIndicator,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import GetPokemonDetailById from "../../services/GetPokemonDetailById";
import {UI_COLORS} from "../../utils/colors";
import Types from "./components/Types";
import Stats from "./components/Stats";
import Herder from "./components/Herder";
import NamePokemonDetail from "./components/NamePokemonDetail";
import WeightAndHeight from "./components/WeightAndHeight";

export default function PokemonDetail({route, navigation}) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        try {
            GetPokemonDetailById(route.params.id).then(res => {
                console.log('res', res)
                setPokemon(res)
            })
        } catch (e) {
            navigation.goBack()
        }
    }, [])

    const renderLoader = () => {
        return (
                <ActivityIndicator
                    size={"large"}
                    style={styles.spinner}
                    color={UI_COLORS.secondary}/>
        )
    }


    return (
        <ScrollView style={styles.container}>
            {!pokemon ? renderLoader() :
                <>
                    <Herder order={pokemon?.order} img={pokemon?.sprites?.other['official-artwork']?.front_default}/>
                    <NamePokemonDetail name={pokemon?.name}/>
                    <Types types={pokemon?.types}/>
                    <WeightAndHeight height={pokemon?.height} weight={pokemon?.weight}/>
                    <Stats stats={pokemon?.stats}/>
                </>}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: UI_COLORS.main
    }, loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: UI_COLORS.main,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }

})