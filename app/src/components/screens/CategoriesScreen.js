import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import contentStyle from  '../../styles/contentStyle';

class CategoriesScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Categories',
    title: 'Categories',
  };
  render() {
    return (
      <View style={ contentStyle.container }>
        <Text>Liste of Categories...</Text>
      </View>
    );
  }
}

export default CategoriesScreen;
