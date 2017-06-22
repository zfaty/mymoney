import React from 'react';
import {AppRegistry, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'; 
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import HomeNavigator from './src/components/drawer/HomeNavigator';
import ChatNavigator from './src/components/drawer/ChatNavigator';

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1}}>
    <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }} >
    <Text>CustomDrawerContentComponent</Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

const MainNavigator = DrawerNavigator({
  Home: {
    screen: HomeNavigator,
  },
  Chat: {
    screen: ChatNavigator,
  },
},
{
  initialRouteName: 'Home',
  contentOptions: {
    activeTintColor: '#548ff7',
    activeBackgroundColor: 'transparent',
    inactiveBackgroundColor: 'transparent',
    labelStyle: {
      fontSize: 15
    },
  },
  contentComponent: CustomDrawerContentComponent,
}
);


AppRegistry.registerComponent('mymoney', () => MainNavigator);