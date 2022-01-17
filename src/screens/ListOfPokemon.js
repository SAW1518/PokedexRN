import React, {useEffect, useState} from "react";
import {StyleSheet, FlatList, SafeAreaView, Text, View, ActivityIndicator} from "react-native";
import GetPokemonList from "../services/getPokemonList";
import GetPokemonDetail from "../services/getPokemonDetailByUrl";
import PokemonItem from "../components/PokemonItem";
import {UI_COLORS} from "../utils/colors";
import GetPokemonDetailByUrl from "../services/getPokemonDetailByUrl";

export default function ListOfPokemon() {
    const [listPokes, setListPokes] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    useEffect(() => {
        getData()
    }, [])

    const getData = (url) => {
        let pkArray = []
        GetPokemonList(url).then(async (res) => {
            setNextUrl(res.nexUrl)
            for await (const pk of res.results) {
                const {url} = pk
                GetPokemonDetailByUrl({url}).then((pkD) => {
                    pkArray.push({
                        id: pkD.id,
                        name: pkD.name,
                        types: pkD.types,
                        order: pkD.order,
                        image: pkD.sprites.other['official-artwork'].front_default
                    })
                    setListPokes([...listPokes, ...pkArray])
                })
            }
        })
        console.log('pkArray', pkArray)
    }

    const loadMore = () => getData(nextUrl)



    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(pk) => String(pk.id)}
                data={listPokes}
                numColumns={1}
                renderItem={({item}) => <PokemonItem pokemon={item}/>}
                contentContainerStyle={styles.flatListContainer}
                onEndReached={nextUrl && loadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                    nextUrl && (
                        <ActivityIndicator
                            size={"large"}
                            style={styles.spinner}
                            color={UI_COLORS.secondary}/>
                    )

                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: UI_COLORS.main
    },
    flatListContainer: {
        paddingHorizontal: 5
    },
    spinner: {
        marginTop: 20,
        marginBottom: 40
    }
})