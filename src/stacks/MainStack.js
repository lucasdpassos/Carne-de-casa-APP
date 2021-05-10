import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Home from '../screens/Home'
import Store from '../screens/Store'
import Done from '../screens/Store/Done'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator 
    initialRouteName="Preload"
    screenOptions ={{
        headerShown: false
    }}
    >
        <Stack.Screen name="Preload" component={Preload} / >
        <Stack.Screen name="SignIn" component={Done} / >
        <Stack.Screen name="SignUp" component={SignUp} / >
        <Stack.Screen name="Home" component={Home} / >
        <Stack.Screen name="Store" component={Store} / >
        <Stack.Screen name="Done" component={Done} / >
    </Stack.Navigator>
)