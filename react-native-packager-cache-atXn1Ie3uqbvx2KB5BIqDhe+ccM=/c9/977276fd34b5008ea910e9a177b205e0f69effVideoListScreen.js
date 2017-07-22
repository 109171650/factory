Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _VideoPlayer = require('./VideoPlayer');

var _VideoPlayer2 = babelHelpers.interopRequireDefault(_VideoPlayer);

var VideoListScreen = function (_Component) {
  babelHelpers.inherits(VideoListScreen, _Component);

  function VideoListScreen() {
    babelHelpers.classCallCheck(this, VideoListScreen);
    return babelHelpers.possibleConstructorReturn(this, (VideoListScreen.__proto__ || Object.getPrototypeOf(VideoListScreen)).apply(this, arguments));
  }

  babelHelpers.createClass(VideoListScreen, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        null,
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return _this2.props.navigation.navigate('VideoPlayer');
          },
          title: '\u9EC4\u5E1D\u5185\u7ECF'
        }),
        _react2.default.createElement(_reactNative.Text, { style: styles.button }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('VideoPlayer');
          },
          title: '\u4F24\u5BD2\u8BBA'
        }),
        _react2.default.createElement(_reactNative.Text, { style: styles.button }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('VideoPlayer');
          },
          title: '\u91D1\u532E\u8981\u7565'
        }),
        _react2.default.createElement(_reactNative.Text, { style: styles.button }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('VideoPlayer');
          },
          title: '\u5F90\u6587\u5175'
        }),
        _react2.default.createElement(_reactNative.Text, { style: styles.button }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('VideoPlayer');
          },
          title: '\u502A\u6D77\u53A6'
        })
      );
    }
  }]);
  return VideoListScreen;
}(_react.Component);

VideoListScreen.navigationOptions = {
  tabBarLabel: '视频',
  tabBarIcon: function tabBarIcon(_ref) {
    var tintColor = _ref.tintColor;
    return _react2.default.createElement(Image, {
      style: [styles.icon, { tintColor: tintColor }]
    });
  }
};
exports.default = VideoListScreen;


var styles = _reactNative.StyleSheet.create({
  button: {
    borderWidth: 0,
    height: 2,
    color: 'white'
  }
});