import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {Button, Icon} from 'native-base';
import Ripple from 'react-native-material-ripple';

import Tabs from './tabbar';
import GLOBAL from '../../global';
import I18n from '../../i18n';
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
        navigation.state.params.tabTitle : I18n.t("tab_home_title")
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
        <Tabs
          style={styles.tabBar}
          selected={this.state.page}
        >
          <Ripple
            rippleCentered={true} rippleDuration={280}
            rippleColor={GLOBAL.COLOR.PRIMARY}
            style={styles.tabButton} name="HomeScreen"
            onPressOut={() => {
              this.setState({page: "HomeScreen"});
              this.props.navigation.setParams({tabTitle: I18n.t("tab_home_title")});
            }}
          >
            <Icon
              style={this.state.page === "HomeScreen" ? styles.tabSelectedIcon : styles.tabIcon}
              name="home"
            />
            <Text style={this.state.page === "HomeScreen" ? styles.tabSelectedLabel : styles.tabLabel}>
              {I18n.t("tab_home")}
            </Text>
          </Ripple>

          <Ripple
            rippleCentered={true} rippleDuration={280} rippleColor={GLOBAL.COLOR.PRIMARY}
            style={styles.tabButton} name="NotificationScreen"
            onPressOut={() => {
              this.setState({page: "NotificationScreen"});
              this.props.navigation.setParams({tabTitle: I18n.t("tab_notification_title")});
            }}
          >
            <Icon
              style={this.state.page === "NotificationScreen" ? styles.tabSelectedIcon : styles.tabIcon}
              name="notifications"
            />
            <Text style={this.state.page === "NotificationScreen" ? styles.tabSelectedLabel : styles.tabLabel}>
              {I18n.t("tab_notification")}
            </Text>
          </Ripple>

          <Ripple
            rippleCentered={true} rippleDuration={280} rippleColor={GLOBAL.COLOR.PRIMARY}
            style={styles.tabButton} name="ProfileScreen"
            onPressOut={() => {
              this.setState({page: "ProfileScreen"});
              this.props.navigation.setParams({tabTitle: I18n.t("tab_profile_title")});
            }}
          >
            <Icon
              style={this.state.page === "ProfileScreen" ? styles.tabSelectedIcon : styles.tabIcon}
              name="person"
            />
            <Text style={this.state.page === "ProfileScreen" ? styles.tabSelectedLabel : styles.tabLabel}>
              {I18n.t("tab_profile")}
            </Text>
          </Ripple>

          <Ripple
            rippleCentered={true} rippleDuration={280} rippleColor={GLOBAL.COLOR.PRIMARY}
            style={styles.tabButton} name="ChatScreen"
            onPressOut={() => {
              this.setState({page: "ChatScreen"});
              this.props.navigation.setParams({tabTitle: I18n.t("tab_chat_title")});
            }}
          >
            <Icon
              style={this.state.page === "ChatScreen" ? styles.tabSelectedIcon : styles.tabIcon}
              name="chatbubbles"
            />
            <Text style={this.state.page === "ChatScreen" ? styles.tabSelectedLabel : styles.tabLabel}>
              {I18n.t("tab_chat")}
            </Text>
          </Ripple>

          <Ripple
            rippleCentered={true}
            rippleDuration={280}
            rippleColor={GLOBAL.COLOR.PRIMARY}
            style={styles.tabButton}
            name="SearchScreen" onPressOut={() => {
            this.setState({page: "SearchScreen"});
            this.props.navigation.setParams({tabTitle: I18n.t("tab_search_title")});
          }}
          >
            <Icon
              style={this.state.page === "SearchScreen" ? styles.tabSelectedIcon : styles.tabIcon}
              name="search"
            />
            <Text style={this.state.page === "SearchScreen" ? styles.tabSelectedLabel : styles.tabLabel}>
              {I18n.t("tab_search")}
            </Text>
          </Ripple>
        </Tabs>
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