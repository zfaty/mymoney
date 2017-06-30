import React from 'react';
import { StackNavigator } from 'react-navigation';
import { NavBar, DrawerButton, PrefButton} from './HeaderButtons';
import contentStyle from  '../../styles/contentStyle';
import DashboardScreen from  '../screens/DashboardScreen';


const DashboardNavigator = StackNavigator(
{
  Dashboard: {
    screen: DashboardScreen,
  },
},
{
  navigationOptions : ({navigation}) => (
    NavBar(navigation)
  )
});

export default DashboardNavigator;
