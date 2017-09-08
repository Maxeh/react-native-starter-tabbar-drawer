import React, { Component } from 'react';
import { Text} from 'react-native';
import {  List, ListItem } from 'native-base';

import GLOBAL from '../global';

export default class TestScreen extends Component {
  static navigationOptions = {
    headerStyle : {backgroundColor: GLOBAL.COLOR.PRIMARY},
    drawerLockMode: 'locked-closed'
  };

  render() {
    const items = ['Example 1','Example 2','Example 3','Example 4','Example 5','Example 6','Example 7','Example8','Example9','Example10','Example 11','Example 12','Example 13','Example 14','Example 15'];

    return (
      <List
        dataArray={items}
        renderRow={(item) =>
          <ListItem>
            <Text>{item}</Text>
          </ListItem>
        }>
      </List>
    );
  };
}