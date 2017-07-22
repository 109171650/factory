'use strict';

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  StatusBar,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import VideoPlayer from './VideoPlayer';
import ViewPager from 'react-native-viewpager';

export default class Main extends Component {


  static navigationOptions = {
      header:null, //可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null
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
        <View style={styles.container}>
          <StatusBar
              backgroundColor='transparent'
              translucent={true}
              hidden={false}
              animated={true}
              barStyle={'dark-content', 'dark-content', 'dark-content'}
          />
          <Button
            onPress={() => this.props.navigation.navigate('VideoPlayer')}
            title="点击看视频"
          />

        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:0,
  },
});
