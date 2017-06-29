import React from 'react';
import { StyleSheet } from 'react-native';

const contentStyle = StyleSheet.create({
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
  listItem: {
        borderColor: '#c8c7cc',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
        height: 44,
    },
    listItemLeftSide: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
    },
    listItemCheckbox: {
        borderColor: '#ccc',
        borderWidth: 1,
        width: 16,
        height: 16,
    },
    listItemCheckboxText: {
        width: 14,
        height: 14,
        fontSize: 10,
        textAlign: 'center',
    },
    listItemCount: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        width: 24,
        height: 18,
    },
    listItemCountText: {
        backgroundColor: 'transparent',
        fontSize: 11,
        textAlign: 'center',
    },
    listItemInput: {
        fontFamily: 'System',
        fontSize: 15,
        flexDirection: 'column',
        flex: 1,
    },
    listItemText: {
        alignSelf: 'center',
        fontFamily: 'System',
        fontSize: 15,
        flexDirection: 'column',
        flex: 1,
    },
    listItemTextSpecial: {
        fontStyle: 'italic',
    },
    listItemDelete: {
        backgroundColor: 'transparent',
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
export default contentStyle;