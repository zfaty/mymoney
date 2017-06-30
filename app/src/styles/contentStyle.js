import React from 'react';
import { StyleSheet } from 'react-native';

const contentStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  dashboardHeader: {
    backgroundColor: '#4dd0e1',
  },
  CategoriesScreen: {
    flex: 1,
  },
  ModalAddCategoriesContainer : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ModalAddCategoriesContent : {
    width: 300,
    height: 500,
    backgroundColor: 'green'
  }
});
export default contentStyle;
