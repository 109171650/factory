import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  Dimensions,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import Main from './Main';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import Voice from './Voice';
import Read from './Read';
import Mall from './Mall';
import Mine from './Mine';

var {height, width} = Dimensions.get('window');

const TabNav = TabNavigator(
  {
      Main: {screen: Main},
      VideoList: {screen: VideoList},
      Voice: {screen: Voice},
      // Voice2: {screen: Voice2},
      Read: {screen: Read},
      Mall: {screen: Mall},
      Mine: {screen: Mine},
  },
  {
      tabBarOptions: {
          activeTintColor: '#050005',
          inactiveTintColor: '#3e3e3e', // 文字和图片未选中颜色
          showLabel:true,
          scrollEnabled:false,
          // showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
          indicatorStyle: {
              height: 1  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
          },
          style: {
              paddingTop:10,
              backgroundColor: '#fff', // TabBar 背景色
              height: 50
          },
          labelStyle: {
              // fontSize: 10, // 文字大小
          },
      },
      tabBarVisible:false,
      animationEnabled: true, // 切换页面时是否有动画效果
      swipeEnabled: true, // 是否可以左右滑动切换tab
      tabBarPosition: 'top', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）
  }
);
const StackNav = StackNavigator(
  {
      TabNav: {screen: TabNav},
      VideoPlayer: {screen: VideoPlayer},
  },
  {
      tabBarOptions: {
          header:null, //可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null
          activeTintColor: '#050005',
          headerTintColor:'#000',
      },
      mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
      headerMode: 'float',
      gesturesEnabled: 'enable',
      pressColor: 'material', //涟漪效果的颜色（安卓版本需要大于5.0）
  }

);

const CustomDrawerContentComponent = (props) => (
      <VideoPlayer />
);
const DrawerNav = DrawerNavigator({
        main: {screen: StackNav},
        // VideoPlayer: {screen: VideoPlayer},
        // <VideoPlayer />
}, {
    drawerWidth: width, // 抽屉宽
    drawerPosition: 'right', // 抽屉在左边还是右边
    contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
      initialRouteName: 'main', // 默认页面组件
      activeTintColor: 'white',  // 选中文字颜色
      activeBackgroundColor: '#ff8500', // 选中背景颜色
      inactiveTintColor: '#ffffff',  // 未选中文字颜色
      inactiveBackgroundColor: '#fff', // 未选中背景颜色
      style: {  // 样式

      }
    }
});

AppRegistry.registerComponent('SimpleApp', () => DrawerNav);
