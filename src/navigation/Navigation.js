import React from "react";
import {Image} from 'react-native'
import {createBottomTabNavigator} from  "@react-navigation/bottom-tabs"
import FavoriteNavigation from "../navigation/FavoriteNavigation";
import About from "../screens/About";
import ListOfPokemonNavigation from "../navigation/ListOfPokemonNavigation";
import AboutNavigation from "./AboutNavigation";

export default function Navigation(){
    const Tap = createBottomTabNavigator()

    const renderListImage = () => {
      return (
          <Image source={require('../images/pokedexList.png')} style={{width:30, height:30}} />
      )
    }
    const renderAbout = () => {
        return (
            <Image source={require('../images/about.png')} style={{width:30, height:30}} />
        )
    }
    return (
        <Tap.Navigator>
            <Tap.Screen name='ListOfPokemon' component={ListOfPokemonNavigation} options={{
            tabBarLabel: 'Lista de Pokemons',
                tabBarIcon: () => renderListImage(),
                header:(()=> null)
            }}/>
            <Tap.Screen name='About' component={AboutNavigation} options={{
                tabBarLabel: 'Acerca de',
                tabBarIcon: () => renderAbout(),
                header:(()=> null)
            }}/>
        </Tap.Navigator>
    )

}