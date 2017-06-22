// Import libraries for making a component
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, SideMenu, List, ListItem } from 'react-native-elements';

class Header extends Component {
	constructor () {
	  super()
	  this.state = {
	    isOpen: false
	  }
	  this.toggleSideMenu = this.toggleSideMenu.bind(this)
	}

	onSideMenuChange (isOpen: boolean) {
	  this.setState({
	    isOpen: isOpen
	  })
	}

	toggleSideMenu () {
	  this.setState({
	    isOpen: !this.state.isOpen
	  })
	}

	render () {
	  const MenuComponent = (
	    <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
	      <List containerStyle={{marginBottom: 20}}>
          <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}/>

          <ListItem
            roundAvatar
            onPress={() => console.log('Pressed')}
            key={'1'}
            avatar={'Elm1'}
            title={'Elem name'}
            subtitle={'Elem subtitle'}/>
	        
          <ListItem
            roundAvatar
            onPress={() => console.log('Pressed')}
            key={'2'}
            avatar={'Elm1'}
            title={'Elem name'}
            subtitle={'Elem subtitle'}/>	       
	      
	      </List>
	    </View>
	  )

	  return (
	    <SideMenu
	      isOpen={this.state.isOpen}
	      onChange={this.onSideMenuChange.bind(this)}
	      menu={MenuComponent}>
	      <View toggleSideMenu={this.toggleSideMenu.bind(this)} >
	        <Text style={styles.welcome}>
	          Welcome to React Native!
	        </Text>
	        <Text style={styles.instructions}>
	          To get started, edit index.ios.js
	        </Text>
	        <Text style={styles.instructions}>
	          Press Cmd+R to reload,{'\n'}
	          Cmd+D or shake for dev menu
	        </Text>
	      </View>
	    </SideMenu>
	  )
	}
}
const styles = StyleSheet.create({
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
});
export default Header;
