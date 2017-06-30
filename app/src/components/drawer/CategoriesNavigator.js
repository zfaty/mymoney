import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavBar, DrawerButton, PrefButton} from './HeaderButtons';
import contentStyle from  '../../styles/contentStyle';
import CategoriesScreen from  '../screens/CategoriesScreen';


const CategoriesNavigator = StackNavigator(
{
  Categories: {
    screen: CategoriesScreen,
  },
},
{
  navigationOptions : ({navigation}) => (
    NavBar(navigation)
  )
});

export default CategoriesNavigator;
