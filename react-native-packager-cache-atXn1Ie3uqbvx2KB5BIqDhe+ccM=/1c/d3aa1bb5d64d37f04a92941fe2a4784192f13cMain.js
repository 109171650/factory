'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _VideoPlayer = require('./VideoPlayer');

var _VideoPlayer2 = babelHelpers.interopRequireDefault(_VideoPlayer);

var _reactNativeViewpager = require('react-native-viewpager');

var _reactNativeViewpager2 = babelHelpers.interopRequireDefault(_reactNativeViewpager);

var Main = function (_Component) {
  babelHelpers.inherits(Main, _Component);

  function Main() {
    babelHelpers.classCallCheck(this, Main);
    return babelHelpers.possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  babelHelpers.createClass(Main, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container },
        _react2.default.createElement(_reactNative.StatusBar, {
          backgroundColor: 'transparent',
          translucent: true,
          hidden: false,
          animated: true,
          barStyle: ('dark-content', 'dark-content', 'dark-content')
        }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return _this2.props.navigation.navigate('VideoPlayer');
          },
          title: '\u70B9\u51FB\u770B\u89C6\u9891'
        })
      );
    }
  }]);
  return Main;
}(_react.Component);

Main.navigationOptions = {
  header: null,
  tabBarLabel: '首页',

  tabBarIcon: function tabBarIcon(_ref) {
    var tintColor = _ref.tintColor;
    return _react2.default.createElement(Image, {

      style: [styles.icon, { tintColor: tintColor }]
    });
  }
};
exports.default = Main;


var styles = _reactNative.StyleSheet.create({
  container: {
    marginTop: 0
  }
});