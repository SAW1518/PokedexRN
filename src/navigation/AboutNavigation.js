import React from 'react';

import {Text, View} from 'react-native';
import About from "../screens/About";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function AboutNavigation() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='AboutScreen' component={About} options={{
                header:(()=> null)
            }}/>
        </Stack.Navigator>
    );
};

