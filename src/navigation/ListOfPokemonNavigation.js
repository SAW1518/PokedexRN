import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ListOfPokemon from "../screens/ListOfPokemon";
import PokemonDetail from "../screens/PokemonDetail/PokemonDetail";

export default function ListOfPokemonNavigation() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='ListOfPokemonScreen' component={ListOfPokemon} options={{
                header:(()=> null)
            }}/>
            <Stack.Screen name='PokemonDetailScreen' component={PokemonDetail} options={{
                title:'', headerTransparent:true, headerShadowVisible:false
            }}/>
        </Stack.Navigator>
    );
};

