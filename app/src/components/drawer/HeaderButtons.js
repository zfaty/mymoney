import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const DrawerButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('DrawerOpen')}>
    <Icon
      name="menu"
      size={30}
      type="entypo"
      style={{ paddingLeft: 10 }}/>
  </TouchableOpacity>
);

DrawerButton.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};


const PrefButton = ({ navigation }) => (
    <Icon
      name="dots-three-vertical"
      size={20}
      type="entypo"
      style={{ paddingRight: 10 }}/>
);

export { DrawerButton, PrefButton };