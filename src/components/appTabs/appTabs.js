import React, {Component} from 'react';
import {View, StatusBar, TouchableOpacity} from 'react-native';
import {Button, Icon} from 'native-base';
import Tabbar from 'react-native-tabbar-bottom';

import GLOBAL from '../../global';
import HomeScreen from '../home/homeScreen';
import NotificationsScreen from '../notifications/notificationsScreen';
import ProfileScreen from '../profile/profileScreen';
import ChatScreen from '../chat/chatScreen';
import SearchScreen from '../search/searchScreen';


export default class AppTabs extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: GLOBAL.COLOR.PRIMARY},
    headerLeft: (
      <TouchableOpacity
        style={{marginLeft: 15}}
        onPress={() => navigation.state.params.onOpenDrawerClick()}
      >
        <Icon name='md-menu' style={{color: '#FFF'}}/>
      </TouchableOpacity>
    ),
    headerTintColor: '#FFF',
    title:
      (!!navigation.state.params && !!navigation.state.params.tabTitle) ?
        navigation.state.params.tabTitle : "Home"
  });

  constructor() {
    super();
    this.state = {
      page: "HomeScreen",
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onOpenDrawerClick: () => this.props.navigation.navigate('DrawerOpen'),
      tabTitle: "Home"
    });
  }

  render() {
    return (
      <View style={styles.mainView}>
        {this.state.page === "HomeScreen" && <HomeScreen navigation={this.props.navigation}/>}
        {this.state.page === "NotificationScreen" && <NotificationsScreen navigation={this.props.navigation}/>}
        {this.state.page === "ProfileScreen" && <ProfileScreen navigation={this.props.navigation}/>}
        {this.state.page === "ChatScreen" && <ChatScreen navigation={this.props.navigation}/>}
        {this.state.page === "SearchScreen" && <SearchScreen navigation={this.props.navigation}/>}

        <StatusBar
          backgroundColor={GLOBAL.COLOR.PRIMARY_DARK}
          barStyle="light-content"
        />

        <Tabbar
          tabbarBgColor={GLOBAL.COLOR.PRIMARY}
          stateFunc={(tab) => {
            this.setState({page: tab.page})
            this.props.navigation.setParams({tabTitle: tab.title})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "HomeScreen",
              title: "Home",
              icon: "home",
            },
            {
              page: "NotificationScreen",
              title: "Notifications",
              icon: "notifications",
              badgeNumber: 11,
            },
            {
              page: "ProfileScreen",
              title: "Profile",
              icon: "person",
            },
            {
              page: "ChatScreen",
              title: "Chat",
              icon: "chatbubbles",
              badgeNumber: 7,
            },
            {
              page: "SearchScreen",
              title: "Search",
              icon: "search",
            },
          ]}
        />
      </View>
    );
  };
}

const styles = {
  mainView: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: GLOBAL.COLOR.GRAY_2,
    borderTopWidth: 1,
    borderTopColor: GLOBAL.COLOR.GRAY_3
  },
  tabButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  tabSelectedIcon: {
    color: GLOBAL.COLOR.PRIMARY
  },
  tabIcon: {
    color: GLOBAL.COLOR.GRAY_5
  },
  tabSelectedLabel: {
    color: GLOBAL.COLOR.PRIMARY,
    fontSize: 12,
  },
  tabLabel: {
    fontSize: 12
  }
};