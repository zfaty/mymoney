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




class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {width: undefined};

  }

  _renderRight(headerRight) {
    let windowWidth = Dimensions.get('window').width;
    const width = this.state.width
      ? (windowWidth - this.state.width) / 2
      : undefined;

    return headerRight && (
        <View >{headerRight}</View>
      );
  }

  _renderLeft(headerLeft) {
    if (headerLeft) {
      return (
        <View>{headerLeft}</View>
      )
    }

    let windowWidth = Dimensions.get('window').width;
    const width = this.state.width
      ? (windowWidth - this.state.width) / 2
      : undefined;

    let renderLeftContent = () => {
        return (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Icon
              name="menu"
              size={30}
              color='#ffffff'
              type="entypo"
              style={{ paddingLeft: 10}}/>
          </TouchableOpacity>
        )

    };

    return (
      <View>
        {renderLeftContent()}
      </View>
    )
  }

  _renderTitle(title, headerTitle) {
    if (headerTitle) {
      return (
        <View>{headerTitle}</View>);
    }

    const onLayout = (e) => {
      this.setState({
        width: e.nativeEvent.layout.width,
      });
    };

    return (
      <View >
        <Text>{title}</Text>
      </View>
    )
  }

  render() {
    let options = this.props.headerProps.getScreenDetails(this.props.headerProps.scene).options;
    console.log('headerProps',this.props.headerProps)
    console.log('headerProps options',options)
    return (
      <View>
        <View>
          <Text>{options.headerTitle}</Text>
        </View>
      </View>
    )
  }
}

export { NavBar, DrawerButton, PrefButton };

//
// {this._renderTitle(options.title, options.headerTitle)}
// {this._renderLeft(options.headerLeft)}
// {this._renderRight(options.headerRight)}
