import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Salery',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  }
]



class IncomeCategoriesScreen extends React.Component {
  render() {
    return (
      <List>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
              hideChevron
            />
          ))
        }
      </List>
    )
  }
}

export default IncomeCategoriesScreen;
