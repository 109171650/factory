'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Mall = function (_Component) {
    babelHelpers.inherits(Mall, _Component);

    function Mall() {
        babelHelpers.classCallCheck(this, Mall);
        return babelHelpers.possibleConstructorReturn(this, (Mall.__proto__ || Object.getPrototypeOf(Mall)).apply(this, arguments));
    }

    babelHelpers.createClass(Mall, [{
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
    return Mall;
}(_react.Component);

Mall.navigationOptions = {
    header: null,
    tabBarLabel: '商城',
    tabBarIcon: function tabBarIcon(_ref) {
        var tintColor = _ref.tintColor;
        return _react2.default.createElement(Image, {
            style: [styles.icon, { tintColor: tintColor }]
        });
    }
};
exports.default = Mall;