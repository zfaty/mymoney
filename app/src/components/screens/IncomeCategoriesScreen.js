import React from 'react';
import { Modal, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { List, ListItem, FormLabel, FormInput, Button } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import contentStyle from  '../../styles/contentStyle';

const list = [
  {
    name: 'Salery',
    icon: 'av-timer'
  },
  {
    name: 'Saveing',
    icon: 'flight-takeoff'
  }
]



class IncomeCategoriesScreen extends React.Component {
  constructor() {
    super();
    this.state = {modalVisible: false};
    this._changeVisibilty = this._changeVisibilty.bind(this);

  }
  _changeVisibilty(event) {
    let visiblity = true;
    if(this.state.modalVisible){
      visiblity = false;
    }
    this.setState({
      modalVisible: visiblity
    });
  }
  render() {
    return (
        <View style={contentStyle.CategoriesScreen}>
          <List>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.name}
                  leftIcon={{name: item.icon}}
                  hideChevron
                />
              ))
            }
          </List>
            <Modal
              animationType={"fade"}
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={this._changeVisibilty}
              >
             <View style={contentStyle.ModalAddCategoriesContainer}>
              <View style={contentStyle.ModalAddCategoriesContent}>
                <Text>Hello World!</Text>
                <FormLabel>Name</FormLabel>
                <FormInput/>
                <View style={contentStyle.Modalbuttons}>
                  <Button title='CANCEL' onPress={this._changeVisibilty} />
                  <Button title='SAVE' />
                </View>

              </View>
             </View>
            </Modal>
          <ActionButton
            buttonColor="rgba(231,76,60,1)"
            onPress={this._changeVisibilty}
          />
        </View>
    )
  }
}

export default IncomeCategoriesScreen;
