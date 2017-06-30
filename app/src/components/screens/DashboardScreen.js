import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import contentStyle from  '../../styles/contentStyle';


class DashboardScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Dashboard',
    headerTitle :'DashTEST'
  };

  constructor() {
    super();

    this._onPress = this._onPress.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  render() {
    return (
    <View style={ contentStyle.container }>
      <Text>Dashboard Screen</Text>

          <TextInput style={{height: 50, width: 200, padding: 4, marginBottom: 0, fontSize: 16, borderWidth: 1, borderColor: '#eee', borderRadius: 8, backgroundColor: '#fff'}}
            placeholder='Add a todo'
            blurOnSubmit={false}
            value={this.text}
            onChange={this._onChange}>
          </TextInput>
          <Button
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={'Add Todo'}
          onPress={this._onPress} />



    </View>
    );
  }

  _onChange(event) {
    console.log('change',event.nativeEvent.text);
    //this.text = event.nativeEvent.text;

    this.setState({
        text: event.nativeEvent.text
    });

  }
  _onPress(event) {
      console.log('press',this.state.text);
  }
}

export default DashboardScreen;
