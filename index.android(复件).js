/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Button,
  Text,
  View
} from 'react-native';
import {
    TabNavigator,
} from 'react-navigation';

export default class MyHomeScreen extends Component {
  static navigationOptions = {
      tabBarLabel: '首页',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({tintColor}) => (
          <Image

              style={[styles.icon, {tintColor: tintColor}]}
          />
      ),
  };

  render() {
      return (
          <Button
              onPress={() => this.props.navigation.navigate('Notifications')}
              title="Go to notifications"
          />
      );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
      tabBarLabel: '视频',
      tabBarIcon: ({tintColor}) => (
          <Image

              style={[styles.icon, {tintColor: tintColor}]}
          />
      ),
  };

  render() {
      return (
          <Button
              onPress={() => this.props.navigation.goBack()}
              title="Go back home"
          />
      );
  }
}

class shengScreen extends React.Component {
  static navigationOptions = {
      tabBarLabel: '有声',
      tabBarIcon: ({tintColor}) => (
          <Image

              style={[styles.icon, {tintColor: tintColor}]}
          />
      ),
  };
}

class readScreen extends React.Component {
  static navigationOptions = {
      tabBarLabel: '读书',
      tabBarIcon: ({tintColor}) => (
          <Image

              style={[styles.icon, {tintColor: tintColor}]}
          />
      ),
  };
}

class mineScreen extends React.Component {
  static navigationOptions = {
      tabBarLabel: '我',
      tabBarIcon: ({tintColor}) => (
          <Image

              style={[styles.icon, {tintColor: tintColor}]}
          />
      ),
  };
}

const styles = StyleSheet.create({
  icon: {
      width: 26,
      height: 26,
  },
});

const SimpleApp = TabNavigator(
  {
      Home: {
          screen: MyHomeScreen,
      },
      Notifications: {
          screen: MyNotificationsScreen,
      },
      sheng: {
          screen: shengScreen,
      },
      read: {
          screen: readScreen,
      },
      mine: {
          screen: mineScreen,
      },

  },
  {
      tabBarOptions: {
          activeTintColor: '#050005',
      },
  }
);

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
