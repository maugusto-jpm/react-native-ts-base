import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import defaultNavigationOptions from './config/NavigationOptions';
import Main from './pages/Main';
import PhotoDetails from './pages/PhotoDetails';

const StackNavigator = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="Main" screenOptions={defaultNavigationOptions}>
        <StackNavigator.Screen options={{ title: 'Initial page' }} name="Main" component={Main} />
        <StackNavigator.Screen name="PhotoDetails" component={PhotoDetails} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
