var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _reactNavigation = require('react-navigation');

var _Main = require('./Main');

var _Main2 = babelHelpers.interopRequireDefault(_Main);

var _VideoPlayer = require('./VideoPlayer');

var _VideoPlayer2 = babelHelpers.interopRequireDefault(_VideoPlayer);

var _VideoList = require('./VideoList');

var _VideoList2 = babelHelpers.interopRequireDefault(_VideoList);

var _Voice = require('./Voice');

var _Voice2 = babelHelpers.interopRequireDefault(_Voice);

var _Read = require('./Read');

var _Read2 = babelHelpers.interopRequireDefault(_Read);

var _Mall = require('./Mall');

var _Mall2 = babelHelpers.interopRequireDefault(_Mall);

var _Mine = require('./Mine');

var _Mine2 = babelHelpers.interopRequireDefault(_Mine);

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var TabNav = (0, _reactNavigation.TabNavigator)({
    Main: { screen: _Main2.default },
    VideoList: { screen: _VideoList2.default },
    Voice: { screen: _Voice2.default },

    Read: { screen: _Read2.default },
    Mall: { screen: _Mall2.default },
    Mine: { screen: _Mine2.default }
}, {
    tabBarOptions: {
        activeTintColor: '#050005',
        inactiveTintColor: '#3e3e3e',
        showLabel: true,
        scrollEnabled: false,

        indicatorStyle: {
            height: 1 },
        style: {
            paddingTop: 10,
            backgroundColor: '#fff',
            height: 50
        },
        labelStyle: {}
    },
    tabBarVisible: false,
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'top' });
var StackNav = (0, _reactNavigation.StackNavigator)({
    TabNav: { screen: TabNav },
    VideoPlayer: { screen: _VideoPlayer2.default }
}, {
    tabBarOptions: {
        header: null,
        activeTintColor: '#050005',
        headerTintColor: '#000'
    },
    mode: 'card',
    headerMode: 'float',
    gesturesEnabled: 'enable',
    pressColor: 'material' });

var CustomDrawerContentComponent = function CustomDrawerContentComponent(props) {
    return _react2.default.createElement(_VideoPlayer2.default, null);
};
var DrawerNav = (0, _reactNavigation.DrawerNavigator)({
    main: { screen: StackNav }
}, {
    drawerWidth: width,
    drawerPosition: 'right',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
        initialRouteName: 'main',
        activeTintColor: 'white',
        activeBackgroundColor: '#ff8500',
        inactiveTintColor: '#ffffff',
        inactiveBackgroundColor: '#fff',
        style: {}
    }
});

_reactNative.AppRegistry.registerComponent('SimpleApp', function () {
    return StackNav;
});