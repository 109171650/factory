var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _VideoPlayer = require('./js/VideoPlayer');

var _VideoPlayer2 = babelHelpers.interopRequireDefault(_VideoPlayer);

var _VideoList = require('./js/VideoList');

var _VideoList2 = babelHelpers.interopRequireDefault(_VideoList);

var HomeScreen = function (_Component) {
    babelHelpers.inherits(HomeScreen, _Component);

    function HomeScreen() {
        babelHelpers.classCallCheck(this, HomeScreen);
        return babelHelpers.possibleConstructorReturn(this, (HomeScreen.__proto__ || Object.getPrototypeOf(HomeScreen)).apply(this, arguments));
    }

    babelHelpers.createClass(HomeScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react2.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                    return navigate('VideoList');
                },
                title: '\u53BB\u89C6\u9891\u680F'
            });
        }
    }]);
    return HomeScreen;
}(_react.Component);

HomeScreen.navigationOptions = {
    tabBarLabel: '首页',

    tabBarIcon: function tabBarIcon(_ref) {
        var tintColor = _ref.tintColor;
        return _react2.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
};

var VideoListScreen = function (_Component2) {
    babelHelpers.inherits(VideoListScreen, _Component2);

    function VideoListScreen() {
        babelHelpers.classCallCheck(this, VideoListScreen);
        return babelHelpers.possibleConstructorReturn(this, (VideoListScreen.__proto__ || Object.getPrototypeOf(VideoListScreen)).apply(this, arguments));
    }

    babelHelpers.createClass(VideoListScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react2.default.createElement(_VideoList2.default, null);
        }
    }]);
    return VideoListScreen;
}(_react.Component);

VideoListScreen.navigationOptions = {
    tabBarLabel: '视频',
    tabBarIcon: function tabBarIcon(_ref2) {
        var tintColor = _ref2.tintColor;
        return _react2.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
};

var shengScreen = function (_Component3) {
    babelHelpers.inherits(shengScreen, _Component3);

    function shengScreen() {
        babelHelpers.classCallCheck(this, shengScreen);
        return babelHelpers.possibleConstructorReturn(this, (shengScreen.__proto__ || Object.getPrototypeOf(shengScreen)).apply(this, arguments));
    }

    babelHelpers.createClass(shengScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react2.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                    return navigate('VideoPlayer');
                },
                title: 'Go back home'
            });
        }
    }]);
    return shengScreen;
}(_react.Component);

shengScreen.navigationOptions = {
    tabBarLabel: '有声',
    tabBarIcon: function tabBarIcon(_ref3) {
        var tintColor = _ref3.tintColor;
        return _react2.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
};

var readScreen = function (_Component4) {
    babelHelpers.inherits(readScreen, _Component4);

    function readScreen() {
        babelHelpers.classCallCheck(this, readScreen);
        return babelHelpers.possibleConstructorReturn(this, (readScreen.__proto__ || Object.getPrototypeOf(readScreen)).apply(this, arguments));
    }

    babelHelpers.createClass(readScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react2.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                    return navigate.goBack();
                },
                title: 'Go back home'
            });
        }
    }]);
    return readScreen;
}(_react.Component);

readScreen.navigationOptions = {
    tabBarLabel: '读书',
    tabBarIcon: function tabBarIcon(_ref4) {
        var tintColor = _ref4.tintColor;
        return _react2.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
};

var mallScreen = function (_Component5) {
    babelHelpers.inherits(mallScreen, _Component5);

    function mallScreen() {
        babelHelpers.classCallCheck(this, mallScreen);
        return babelHelpers.possibleConstructorReturn(this, (mallScreen.__proto__ || Object.getPrototypeOf(mallScreen)).apply(this, arguments));
    }

    babelHelpers.createClass(mallScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react2.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                    return navigate.goBack();
                },
                title: 'Go back home'
            });
        }
    }]);
    return mallScreen;
}(_react.Component);

mallScreen.navigationOptions = {
    tabBarLabel: '商城',
    tabBarIcon: function tabBarIcon(_ref5) {
        var tintColor = _ref5.tintColor;
        return _react2.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
};

var mineScreen = function (_Component6) {
    babelHelpers.inherits(mineScreen, _Component6);

    function mineScreen() {
        babelHelpers.classCallCheck(this, mineScreen);
        return babelHelpers.possibleConstructorReturn(this, (mineScreen.__proto__ || Object.getPrototypeOf(mineScreen)).apply(this, arguments));
    }

    babelHelpers.createClass(mineScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react2.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                    return navigate.goBack();
                },
                title: 'Go back home'
            });
        }
    }]);
    return mineScreen;
}(_react.Component);

mineScreen.navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: function tabBarIcon(_ref6) {
        var tintColor = _ref6.tintColor;
        return _react2.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
};

var styles = _reactNative.StyleSheet.create({
    icon: {
        width: 26,
        height: 26
    }
});

var SimpleApp = (0, _reactNavigation.TabNavigator)({
    Home: { screen: HomeScreen },
    VideoList: { screen: VideoListScreen },
    sheng: { screen: shengScreen },
    read: { screen: readScreen },
    mall: { screen: mallScreen },
    mine: { screen: mineScreen }
}, {
    tabBarOptions: {
        activeTintColor: '#050005'
    }
});

_reactNative.AppRegistry.registerComponent('SimpleApp', function () {
    return SimpleApp;
});