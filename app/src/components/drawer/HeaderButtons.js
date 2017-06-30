import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const DrawerButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('DrawerOpen')}>
    <Icon
      name="menu"
      size={30}
      color='#ffffff'
      type="entypo"
      style={{ paddingLeft: 10}}/>
  </TouchableOpacity>
);

DrawerButton.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};


const PrefButton = ({ navigation }) => (
    <Icon
      name="dots-three-vertical"
      size={20}
      color='#ffffff'
      type="entypo"
      style={{ paddingRight: 10 }}/>
);


const NavBar = (navigation,style = 'default') => {
  return {
    headerLeft: (
      <DrawerButton navigation={navigation} />
    ),
    headerRight: (
      <PrefButton navigation={navigation} />
    ),
    headerTintColor: '#ffffff',
    headerStyle : {
      backgroundColor: '#4dd0e1',
    }
  };

};


export { NavBar, DrawerButton, PrefButton };

//
// {this._renderTitle(options.title, options.headerTitle)}
// {this._renderLeft(options.headerLeft)}
// {this._renderRight(options.headerRight)}
