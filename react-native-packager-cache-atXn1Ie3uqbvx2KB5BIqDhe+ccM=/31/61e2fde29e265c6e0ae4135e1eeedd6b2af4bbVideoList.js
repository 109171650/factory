Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _VideoPlayer = require('./VideoPlayer');

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  VideoList: {
    displayName: 'VideoList'
  },
  VideoScreen: {
    displayName: 'VideoScreen'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/data/SimpleApp/js/VideoList.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var VideoList = _wrapComponent('VideoList')((_temp = _class = function (_Component) {
  _inherits(VideoList, _Component);

  function VideoList() {
    _classCallCheck(this, VideoList);

    return _possibleConstructorReturn(this, (VideoList.__proto__ || Object.getPrototypeOf(VideoList)).apply(this, arguments));
  }

  _createClass(VideoList, [{
    key: 'render',
    value: function render() {

      return _react3.default.createElement(
        _reactNative.View,
        null,
        _react3.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('VideoPlayer');
          },
          title: '\u9EC4\u5E1D\u5185\u7ECF'
        }),
        _react3.default.createElement(_reactNative.Text, { style: styles.button }),
        _react3.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('Chat', { user: 'Lucy' });
          },
          title: 'Chat with Lucy'
        }),
        _react3.default.createElement(_reactNative.Text, { style: styles.button }),
        _react3.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('VideoPlayer');
          },
          title: '\u4F24\u5BD2\u8BBA'
        }),
        _react3.default.createElement(_reactNative.Text, { style: styles.button }),
        _react3.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('VideoPlayer');
          },
          title: '\u91D1\u532E\u8981\u7565'
        }),
        _react3.default.createElement(_reactNative.Text, { style: styles.button }),
        _react3.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('VideoPlayer');
          },
          title: '\u5F90\u6587\u5175'
        }),
        _react3.default.createElement(_reactNative.Text, { style: styles.button }),
        _react3.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('VideoPlayer');
          },
          title: '\u502A\u6D77\u53A6'
        })
      );
    }
  }]);

  return VideoList;
}(_react2.Component), _class.navigationOptions = {
  title: '视频'
}, _temp));

exports.default = VideoList;

var VideoScreen = _wrapComponent('VideoScreen')((_temp2 = _class2 = function (_React$Component) {
  _inherits(VideoScreen, _React$Component);

  function VideoScreen() {
    _classCallCheck(this, VideoScreen);

    return _possibleConstructorReturn(this, (VideoScreen.__proto__ || Object.getPrototypeOf(VideoScreen)).apply(this, arguments));
  }

  _createClass(VideoScreen, [{
    key: 'render',
    value: function render() {
      var params = this.props.navigation.state.params;

      return _react3.default.createElement(
        _reactNative.View,
        null,
        _react3.default.createElement(
          _reactNative.Text,
          null,
          'Chat with ',
          params.user
        )
      );
    }
  }]);

  return VideoScreen;
}(_react3.default.Component), _class2.navigationOptions = function (_ref) {
  var navigation = _ref.navigation;
  return {
    title: 'Chat with ' + navigation.state.params.user
  };
}, _temp2));

var styles = _reactNative.StyleSheet.create({
  button: {
    borderWidth: 0,
    height: 2,
    color: 'white'
  }
});
var Navigator = (0, _reactNavigation.StackNavigator)({
  VideoList: { screen: VideoList },
  VideoPlayer: { screen: _VideoPlayer2.default }
});