import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

export default class NotificationsScreen extends Component {

  onOpenTestScreenSlick = () => {
    this.props.navigation.navigate("TestScreen");
  }

  render() {
    return(
      <View>
        <Text>Notifications Screen</Text>
        <Button full success onPress={this.onOpenTestScreenSlick}>
          <Text>Open TestScreen</Text>
        </Button>
      </View>
    )
  }
}