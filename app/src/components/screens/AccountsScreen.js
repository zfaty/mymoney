import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import contentStyle from  '../../styles/contentStyle';

class AccountsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Accounts',
    title: 'Accounts',
  };
  render() {
    return (
      <View style={ contentStyle.container }>
        <Text>Liste of Accounts !! </Text>
      </View>
    );
  }
}

export default AccountsScreen;
