import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DrawerButton, PrefButton } from './HeaderButtons';
import contentStyle from  '../../styles/contentStyle';
import CategoriesScreen from  '../screens/CategoriesScreen';


const CategoriesNavigator = StackNavigator(
{
  Categories: {
    screen: CategoriesScreen,
  },
},
{
  navigationOptions : ({navigation}) => ({
    headerTitle: 'Categories',
    headerLeft: (
      <DrawerButton navigation={navigation} />
    ),
    headerRight: (
      <PrefButton navigation={navigation} />
    ),
  })
});

export default CategoriesNavigator;
