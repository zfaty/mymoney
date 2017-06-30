import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DrawerButton, PrefButton } from './HeaderButtons';
import contentStyle from  '../../styles/contentStyle';

import AccountsScreen from  '../screens/AccountsScreen';

const AccountsNavigator = StackNavigator(
{
  Accounts: {
    screen: AccountsScreen,
  },
},
{
  navigationOptions : ({navigation}) => ({
    headerTitle: 'Accounts',
    headerLeft: (
      <DrawerButton navigation={navigation} />
    ),
    headerRight: (
      <PrefButton navigation={navigation} />
    ),
  })
});

export default AccountsNavigator;
