import { AppRegistry } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import React from 'react';

import App  from './src/app';
import AppTabs from './src/components/appTabs/appTabs';
import TestScreen from './src/components/testScreen';

import Drawer from './src/drawer';

const Stack = {
  App: { screen: App },
  AppTabs: { screen: AppTabs },
  TestScreen: { screen: TestScreen },
};

const DrawerRoutes = {
  StartingScreenStack: {
    screen: StackNavigator(Stack, { initialRouteName: 'App' })
  }
};

const RootNavigator =
  StackNavigator({
      Drawer: {
        name: 'Drawer',
        screen: DrawerNavigator(
          DrawerRoutes, {
            drawerWidth: 300,
            contentComponent: props => <Drawer {...props} />
          }
        ),
      },
      ...Stack
    },
    {
      headerMode: 'none'
    }
  );

AppRegistry.registerComponent('starterApp', () => RootNavigator);