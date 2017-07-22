'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Voice = function (_Component) {
    babelHelpers.inherits(Voice, _Component);

    function Voice() {
        babelHelpers.classCallCheck(this, Voice);
        return babelHelpers.possibleConstructorReturn(this, (Voice.__proto__ || Object.getPrototypeOf(Voice)).apply(this, arguments));
    }

    babelHelpers.createClass(Voice, [{
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
    return Voice;
}(_react.Component);

Voice.navigationOptions = {
    header: null,
    tabBarLabel: '有声',
    tabBarIcon: function tabBarIcon(_ref) {
        var tintColor = _ref.tintColor;
        return _react2.default.createElement(Image, {
            style: [styles.icon, { tintColor: tintColor }]
        });
    }
};
exports.default = Voice;