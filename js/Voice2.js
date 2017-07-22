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

export default class Voice2 extends Component {
  static navigationOptions = {
      tabBarLabel: '有声',
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
