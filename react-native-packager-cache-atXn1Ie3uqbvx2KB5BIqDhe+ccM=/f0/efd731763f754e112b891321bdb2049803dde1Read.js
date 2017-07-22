'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Read = function (_Component) {
    babelHelpers.inherits(Read, _Component);

    function Read() {
        babelHelpers.classCallCheck(this, Read);
        return babelHelpers.possibleConstructorReturn(this, (Read.__proto__ || Object.getPrototypeOf(Read)).apply(this, arguments));
    }

    babelHelpers.createClass(Read, [{
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
    return Read;
}(_react.Component);

Read.navigationOptions = {
    header: null,
    tabBarLabel: '读书',
    tabBarIcon: function tabBarIcon(_ref) {
        var tintColor = _ref.tintColor;
        return _react2.default.createElement(Image, {
            style: [styles.icon, { tintColor: tintColor }]
        });
    }
};
exports.default = Read;