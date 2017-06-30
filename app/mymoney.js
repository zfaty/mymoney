import React from 'react';
import {Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import DashboardNavigator from './src/components/drawer/DashboardNavigator';
import AccountsNavigator from './src/components/drawer/AccountsNavigator';
import CategoriesNavigator from './src/components/drawer/CategoriesNavigator';

const SideMenu = props => (
  <View style={{ flex: 1}}>
    <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }} >
    <Text>Profile</Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

const MainNavigator = DrawerNavigator({
  Dashboard: {
    screen: DashboardNavigator,
  },
  Accounts: {
    screen: AccountsNavigator,
  },
  Categories: {
    screen: CategoriesNavigator,
  },
},
{
  initialRouteName: 'Dashboard',
  contentOptions: {
    activeTintColor: '#548ff7',
    activeBackgroundColor: 'transparent',
    inactiveBackgroundColor: 'transparent',
    labelStyle: {
      fontSize: 15
    },
  },
  contentComponent: SideMenu,
}
);

export default MainNavigator;
