Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var PlanDetail = function (_Component) {
  babelHelpers.inherits(PlanDetail, _Component);

  function PlanDetail() {
    babelHelpers.classCallCheck(this, PlanDetail);
    return babelHelpers.possibleConstructorReturn(this, (PlanDetail.__proto__ || Object.getPrototypeOf(PlanDetail)).apply(this, arguments));
  }

  babelHelpers.createClass(PlanDetail, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactNative.View,
        null,
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('VideoPlayer');
          },
          title: '\u9EC4\u5E1D\u5185\u7ECF'
        }),
        _react2.default.createElement(_reactNative.Text, { style: styles.button }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('Chat', { user: 'Lucy' });
          },
          title: 'Chat with Lucy'
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
  return PlanDetail;
}(_react.Component);

PlanDetail.navigationOptions = {
  title: '视频'
};
exports.default = PlanDetail;