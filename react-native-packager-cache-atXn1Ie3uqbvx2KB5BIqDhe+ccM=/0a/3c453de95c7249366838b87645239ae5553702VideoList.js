Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _VideoPlayer = require('./VideoPlayer');

var _VideoPlayer2 = babelHelpers.interopRequireDefault(_VideoPlayer);

var VideoList = function (_Component) {
  babelHelpers.inherits(VideoList, _Component);

  function VideoList() {
    babelHelpers.classCallCheck(this, VideoList);
    return babelHelpers.possibleConstructorReturn(this, (VideoList.__proto__ || Object.getPrototypeOf(VideoList)).apply(this, arguments));
  }

  babelHelpers.createClass(VideoList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        null,
        _react2.default.createElement(_reactNative.Text, { style: styles.button }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return _this2.props.navigation.navigate('DrawerOpen');
          },
          title: '\u9EC4\u5E1D\u5185\u7ECF'
        }),
        _react2.default.createElement(_reactNative.Text, { style: styles.button }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return _this2.props.navigation.navigate('DrawerOpen');
          },
          title: '\u4F24\u5BD2\u8BBA'
        }),
        _react2.default.createElement(_reactNative.Text, { style: styles.button }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return _this2.props.navigation.navigate('DrawerOpen');
          },
          title: '\u91D1\u532E\u8981\u7565'
        }),
        _react2.default.createElement(_reactNative.Text, { style: styles.button }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return _this2.props.navigation.navigate('DrawerOpen');
          },
          title: '\u5F90\u6587\u5175'
        }),
        _react2.default.createElement(_reactNative.Text, { style: styles.button }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return _this2.props.navigation.navigate('DrawerOpen');
          },
          title: '\u502A\u6D77\u53A6'
        })
      );
    }
  }]);
  return VideoList;
}(_react.Component);

VideoList.navigationOptions = {
  header: null,
  tabBarLabel: '视频',
  tabBarIcon: function tabBarIcon(_ref) {
    var tintColor = _ref.tintColor;
    return _react2.default.createElement(Image, {
      style: [styles.icon, { tintColor: tintColor }]
    });
  }
};
exports.default = VideoList;


var styles = _reactNative.StyleSheet.create({
  button: {
    borderWidth: 0,
    height: 2,
    color: 'white'
  }
});