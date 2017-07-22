'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Voice2 = function (_Component) {
    babelHelpers.inherits(Voice2, _Component);

    function Voice2() {
        babelHelpers.classCallCheck(this, Voice2);
        return babelHelpers.possibleConstructorReturn(this, (Voice2.__proto__ || Object.getPrototypeOf(Voice2)).apply(this, arguments));
    }

    babelHelpers.createClass(Voice2, [{
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
    return Voice2;
}(_react.Component);

Voice2.navigationOptions = {
    tabBarLabel: '有声',
    tabBarIcon: function tabBarIcon(_ref) {
        var tintColor = _ref.tintColor;
        return _react2.default.createElement(Image, {
            style: [styles.icon, { tintColor: tintColor }]
        });
    }
};
exports.default = Voice2;