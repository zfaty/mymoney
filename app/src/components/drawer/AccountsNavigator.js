import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavBar, DrawerButton, PrefButton} from './HeaderButtons';
import contentStyle from  '../../styles/contentStyle';

import AccountsScreen from  '../screens/AccountsScreen';

const AccountsNavigator = StackNavigator(
{
  Accounts: {
    screen: AccountsScreen,
  },
},
{
  navigationOptions : ({navigation}) => (
    NavBar(navigation)
  )
});

export default AccountsNavigator;
