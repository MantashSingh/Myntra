import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup, LandingPage, MainPage , ShoesDetails } from "../Screen"
import navigationStrings from '../constants/navigationStrings';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <React.Fragment>
      
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.LANDING_PAGE} component={LandingPage} />
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.SIGNUP} component={Signup} />
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.MAIN_PAGE} component={MainPage} />
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.SHOES_DETAILS} component={ShoesDetails} />
      



    </React.Fragment>
  );
}

export default AuthStack;
