import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation';

import GLOBAL from './global';

export default class ChatScreen extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed'
  };

  resetNavigationStack = (route) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: route})
      ]
    });
    this.props.navigation.dispatch(resetAction);
  };

  onLoginClicked = () => {
    this.resetNavigationStack("AppTabs");
  }

  render() {
    return (
      <View style={styles.contentView}>
        <StatusBar
          backgroundColor={GLOBAL.COLOR.PRIMARY_DARK}
          barStyle="light-content"
        />
        <Button block success onPress={this.onLoginClicked}>
          <Text>Login</Text>
        </Button>
      </View>
    )
  }
}

const styles = {
  contentView: {
    flex: 1,
    padding: 10,
  }
}