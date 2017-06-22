import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DrawerButton from './DrawerButton';
import contentStyle from  '../../styles/contentStyle';

class ChatScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Chat',
    title: 'Chat with Lucyxx',
  };
  render() {
    return (
      <View style={ contentStyle.container }>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const ChatNavigator = StackNavigator(
{
  Chat: {
    screen: ChatScreen,
  },  
},
{
  navigationOptions : ({navigation}) => ({
    headerTitle: 'Chat',
    headerLeft: (
      <DrawerButton navigation={navigation} />
    ),
  })
});

export default ChatNavigator;