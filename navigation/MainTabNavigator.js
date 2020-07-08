import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SearchBarScreen from '../screens/SearchBarScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MessagesScreen from '../screens/MessagesScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  )
};

HomeStack.path = '';

const MessageStack = createStackNavigator(
  {
    Messages: MessagesScreen
  },
  config
);

MessageStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <FontAwesome size={24} name="envelope-o" />
};

MessageStack.path = '';

const SearchBarStack = createStackNavigator(
  {
    Search: SearchBarScreen
  },
  config
);

SearchBarStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  )
};

SearchBarStack.path = '';

const NotificationStack = createStackNavigator(
  {
    Notifications: NotificationScreen
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-notifications-outline'
          : 'md-notifications-outline'
      }
    />
  )
};

NotificationStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    SearchBarStack,
    NotificationStack,
    MessageStack
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;
