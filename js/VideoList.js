import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import VideoPlayer from './VideoPlayer';


export default class VideoList extends Component {

  static navigationOptions = {
      header:null, //可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null
      tabBarLabel: '视频',
      tabBarIcon: ({tintColor}) => (
          <Image
              style={[styles.icon, {tintColor: tintColor}]}
          />
      ),
  };

  render() {

    return (
      <View>

        <Text style={styles.button}></Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="黄帝内经"
/>
        <Text style={styles.button}></Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="伤寒论"
        />
                <Text style={styles.button}></Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="金匮要略"
        />
                <Text style={styles.button}></Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="徐文兵"
        />
                <Text style={styles.button}></Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="倪海厦"
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    button: {
        borderWidth: 0,
        height:2,
        color:'white'
    },
});
