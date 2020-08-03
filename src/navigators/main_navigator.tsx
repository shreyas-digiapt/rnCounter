import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {NavigationService} from '../service'

import Screen1 from '../screens/screen1'
import Screen2 from '../screens/screen2'

// Props
interface MainNavigatorProps {}

const {Screen, Navigator} = createStackNavigator()

// MainNavigator Component
export default ({}: MainNavigatorProps) => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef} >
        <Navigator initialRouteName='screen2' headerMode='none'
        screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }} >
        <Screen name='screen1' component={Screen1} />
        <Screen name='screen2' component={Screen2} />
        </Navigator>
    </NavigationContainer>
  );
};
