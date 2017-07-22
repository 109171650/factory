var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2, _class3, _temp3, _class4, _temp4, _class5, _temp5, _class6, _temp6;

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _VideoPlayer = require('./js/VideoPlayer');

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

var _VideoList = require('./js/VideoList');

var _VideoList2 = _interopRequireDefault(_VideoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    HomeScreen: {
        displayName: 'HomeScreen'
    },
    VideoListScreen: {
        displayName: 'VideoListScreen'
    },
    shengScreen: {
        displayName: 'shengScreen'
    },
    readScreen: {
        displayName: 'readScreen'
    },
    mallScreen: {
        displayName: 'mallScreen'
    },
    mineScreen: {
        displayName: 'mineScreen'
    }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/data/SimpleApp/index.android.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
    };
}

var HomeScreen = _wrapComponent('HomeScreen')((_temp = _class = function (_Component) {
    _inherits(HomeScreen, _Component);

    function HomeScreen() {
        _classCallCheck(this, HomeScreen);

        return _possibleConstructorReturn(this, (HomeScreen.__proto__ || Object.getPrototypeOf(HomeScreen)).apply(this, arguments));
    }

    _createClass(HomeScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react3.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                    return navigate('VideoList');
                },
                title: '\u53BB\u89C6\u9891\u680F'
            });
        }
    }]);

    return HomeScreen;
}(_react2.Component), _class.navigationOptions = {
    tabBarLabel: '首页',

    tabBarIcon: function tabBarIcon(_ref) {
        var tintColor = _ref.tintColor;
        return _react3.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
}, _temp));

var VideoListScreen = _wrapComponent('VideoListScreen')((_temp2 = _class2 = function (_Component2) {
    _inherits(VideoListScreen, _Component2);

    function VideoListScreen() {
        _classCallCheck(this, VideoListScreen);

        return _possibleConstructorReturn(this, (VideoListScreen.__proto__ || Object.getPrototypeOf(VideoListScreen)).apply(this, arguments));
    }

    _createClass(VideoListScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react3.default.createElement(_VideoList2.default, null);
        }
    }]);

    return VideoListScreen;
}(_react2.Component), _class2.navigationOptions = {
    tabBarLabel: '视频',
    tabBarIcon: function tabBarIcon(_ref2) {
        var tintColor = _ref2.tintColor;
        return _react3.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
}, _temp2));

var shengScreen = _wrapComponent('shengScreen')((_temp3 = _class3 = function (_Component3) {
    _inherits(shengScreen, _Component3);

    function shengScreen() {
        _classCallCheck(this, shengScreen);

        return _possibleConstructorReturn(this, (shengScreen.__proto__ || Object.getPrototypeOf(shengScreen)).apply(this, arguments));
    }

    _createClass(shengScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react3.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                    return navigate('VideoPlayer');
                },
                title: 'Go back home'
            });
        }
    }]);

    return shengScreen;
}(_react2.Component), _class3.navigationOptions = {
    tabBarLabel: '有声',
    tabBarIcon: function tabBarIcon(_ref3) {
        var tintColor = _ref3.tintColor;
        return _react3.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
}, _temp3));

var readScreen = _wrapComponent('readScreen')((_temp4 = _class4 = function (_Component4) {
    _inherits(readScreen, _Component4);

    function readScreen() {
        _classCallCheck(this, readScreen);

        return _possibleConstructorReturn(this, (readScreen.__proto__ || Object.getPrototypeOf(readScreen)).apply(this, arguments));
    }

    _createClass(readScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react3.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                    return navigate.goBack();
                },
                title: 'Go back home'
            });
        }
    }]);

    return readScreen;
}(_react2.Component), _class4.navigationOptions = {
    tabBarLabel: '读书',
    tabBarIcon: function tabBarIcon(_ref4) {
        var tintColor = _ref4.tintColor;
        return _react3.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
}, _temp4));

var mallScreen = _wrapComponent('mallScreen')((_temp5 = _class5 = function (_Component5) {
    _inherits(mallScreen, _Component5);

    function mallScreen() {
        _classCallCheck(this, mallScreen);

        return _possibleConstructorReturn(this, (mallScreen.__proto__ || Object.getPrototypeOf(mallScreen)).apply(this, arguments));
    }

    _createClass(mallScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react3.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                    return navigate.goBack();
                },
                title: 'Go back home'
            });
        }
    }]);

    return mallScreen;
}(_react2.Component), _class5.navigationOptions = {
    tabBarLabel: '商城',
    tabBarIcon: function tabBarIcon(_ref5) {
        var tintColor = _ref5.tintColor;
        return _react3.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
}, _temp5));

var mineScreen = _wrapComponent('mineScreen')((_temp6 = _class6 = function (_Component6) {
    _inherits(mineScreen, _Component6);

    function mineScreen() {
        _classCallCheck(this, mineScreen);

        return _possibleConstructorReturn(this, (mineScreen.__proto__ || Object.getPrototypeOf(mineScreen)).apply(this, arguments));
    }

    _createClass(mineScreen, [{
        key: 'render',
        value: function render() {
            var navigate = this.props.navigation.navigate;

            return _react3.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                    return navigate.goBack();
                },
                title: 'Go back home'
            });
        }
    }]);

    return mineScreen;
}(_react2.Component), _class6.navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: function tabBarIcon(_ref6) {
        var tintColor = _ref6.tintColor;
        return _react3.default.createElement(Image, {

            style: [styles.icon, { tintColor: tintColor }]
        });
    }
}, _temp6));

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