import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import VideoPlayer from './js/VideoPlayer';
import VideoList from './js/VideoList';

class HomeScreen extends Component {

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
      const {navigate} = this.props.navigation;
      return (
          <Icon name="ios-person" size={30} color="#4F8EF7"/>
      );
  }
}

class VideoListScreen extends Component {


  static navigationOptions = {
      tabBarLabel: '视频',
      tabBarIcon: ({tintColor}) => (
          <Image

              style={[styles.icon, {tintColor: tintColor}]}
          />
      ),
  };

  render() {
  const {navigate} = this.props.navigation;
    return (
      <VideoList />
    );
  }
}

class shengScreen extends Component {
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
              onPress={() => navigate('VideoPlayer')}
              title="Go back home"
          />
      );
  }
}
class readScreen extends Component {
  static navigationOptions = {
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
class mallScreen extends Component {
  static navigationOptions = {
      tabBarLabel: '商城',
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
class mineScreen extends Component {
  static navigationOptions = {
      tabBarLabel: '我的',
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

const styles = StyleSheet.create({
  icon: {
      width: 26,
      height: 26,
  },
});

const SimpleApp = TabNavigator(
  {
      Home: {screen: HomeScreen},
      VideoList: {screen: VideoListScreen},
      sheng: {screen: shengScreen},
      read: {screen: readScreen},
      mall: {screen: mallScreen},
      mine: {screen: mineScreen},
  },
  {
      tabBarOptions: {
          activeTintColor: '#050005',
      },
  }
);

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
