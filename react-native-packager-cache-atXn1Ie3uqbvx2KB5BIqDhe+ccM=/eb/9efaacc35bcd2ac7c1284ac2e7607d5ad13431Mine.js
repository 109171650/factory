'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Mine = function (_Component) {
    babelHelpers.inherits(Mine, _Component);

    function Mine() {
        babelHelpers.classCallCheck(this, Mine);
        return babelHelpers.possibleConstructorReturn(this, (Mine.__proto__ || Object.getPrototypeOf(Mine)).apply(this, arguments));
    }

    babelHelpers.createClass(Mine, [{
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
    return Mine;
}(_react.Component);

Mine.navigationOptions = {
    header: null,
    tabBarLabel: '我的',
    tabBarIcon: function tabBarIcon(_ref) {
        var tintColor = _ref.tintColor;
        return _react2.default.createElement(Image, {
            style: [styles.icon, { tintColor: tintColor }]
        });
    }
};
exports.default = Mine;