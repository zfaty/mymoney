import React from 'react';
import { TabNavigator } from "react-navigation";
import { Text, View, Image, StyleSheet } from 'react-native';
import contentStyle from  '../../styles/contentStyle';
import IncomeCategoriesScreen from './IncomeCategoriesScreen';
import ExpensesCategoriesScreen from './ExpensesCategoriesScreen';


const CategoriesTabs = TabNavigator({
  INCOME: {
    screen: IncomeCategoriesScreen,
  },
  EXPENSES: {
    screen: ExpensesCategoriesScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#ffffff',
    labelStyle: {
      fontSize: 15,
    },
    style: {
      backgroundColor: '#4dd0e1',
    },
    indicatorStyle: {
      backgroundColor: 'black'
    }
  },
});

class CategoriesScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Categories',
    title: 'Categories',
    headerTitle: 'Categories',
  };
  render() {
    return (
      <CategoriesTabs />
    );
  }
}

export default CategoriesScreen;
