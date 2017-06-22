import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DrawerButton from './DrawerButton';
import { Icon, Avatar } from 'react-native-elements';
import contentStyle from  '../../styles/contentStyle';

const PrefButton = ({ navigation }) => (
    <Icon
      name="dots-three-vertical"
      size={20}
      type="entypo"
      style={{ paddingRight: 10 }}/>
);

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
    <Avatar
      small
      rounded
      icon={{name: 'home',type:'entypo'}}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}/>
    ),
  };

  render() {
    return (
    <View style={ contentStyle.container }>
      <Text>Home Screen</Text>
    </View>
    );
  }
}


const HomeNavigator = StackNavigator(
{
  Home: {
    screen: HomeScreen,
  },  
},
{
  navigationOptions : ({navigation}) => ({
    headerTitle: 'Home',
    headerLeft: (
      <DrawerButton navigation={navigation} />
    ),
    headerRight: (
      <PrefButton navigation={navigation} />
    ),
  })
});

export default HomeNavigator;