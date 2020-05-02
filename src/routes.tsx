import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import defaultNavigationOptions from './config/NavigationOptions';
import Main from './pages/Main';
import Secondary from './pages/Secondary';

const StackNavigator = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="Main" screenOptions={defaultNavigationOptions}>
        <StackNavigator.Screen options={{ title: 'Initial page' }} name="Main" component={Main} />
        <StackNavigator.Screen name="Secondary" component={Secondary} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
