import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Favorites from "../screens/Favorites";

export default function FavoriteNavigation() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='FavoritesScreen' component={Favorites}/>
        </Stack.Navigator>
    );
};

