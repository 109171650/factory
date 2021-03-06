'use strict';

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class Read extends Component {
  static navigationOptions = {
      header:null, //可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null
      tabBarLabel: '读书',
      tabBarIcon: ({tintColor}) => (
          <Image
              style={[styles.icon, {tintColor: tintColor}]}
          />
      ),
  };

  render() {
      const {navigate} = this.props.navigation;
      return (
          <Button
              onPress={() => navigate.goBack()}
              title="Go back home"
          />
      );
  }
}
