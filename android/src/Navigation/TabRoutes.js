import React, {Component} from 'react';
import { Text, View , Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Cart, HomePage, Profile, LatestDeals} from "../Screen/index"
import imagePath from '../Images/imagePath';


const Tab = createBottomTabNavigator();

function TabRoutes({navigation}) {
  return (
    <Tab.Navigator >
     
      <Tab.Screen name="Latest Deals" component={LatestDeals} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Deals" component={LatestDeals} />
    </Tab.Navigator>
  );
}


export default TabRoutes;


const styles = StyleSheet.create({
  icon:{
    width:10,
    height:10
  }

})