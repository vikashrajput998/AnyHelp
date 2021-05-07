import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './profile';
import showDetail from './showDetail';
import logIn from './logIn';
import signUp from './signUp';
import allDetail from './allDetail';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="allDetail"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="showDetail" component={showDetail}></Stack.Screen>
        <Stack.Screen name="logIn" component={logIn}></Stack.Screen>
        <Stack.Screen name="signUp" component={signUp}></Stack.Screen>
        <Stack.Screen name="allDetail" component={allDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
