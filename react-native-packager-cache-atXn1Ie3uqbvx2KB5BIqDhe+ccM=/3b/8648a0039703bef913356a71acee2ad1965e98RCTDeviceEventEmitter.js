
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = require('EventEmitter');
var EventSubscriptionVendor = require('EventSubscriptionVendor');
var BatchedBridge = require('BatchedBridge');

var RCTDeviceEventEmitter = function (_EventEmitter) {
  _inherits(RCTDeviceEventEmitter, _EventEmitter);

  function RCTDeviceEventEmitter() {
    _classCallCheck(this, RCTDeviceEventEmitter);

    var sharedSubscriber = new EventSubscriptionVendor();

    var _this = _possibleConstructorReturn(this, (RCTDeviceEventEmitter.__proto__ || Object.getPrototypeOf(RCTDeviceEventEmitter)).call(this, sharedSubscriber));

    _this.sharedSubscriber = sharedSubscriber;
    return _this;
  }

  _createClass(RCTDeviceEventEmitter, [{
    key: '_nativeEventModule',
    value: function _nativeEventModule(eventType) {
      if (eventType) {
        if (eventType.lastIndexOf('statusBar', 0) === 0) {
          console.warn('`%s` event should be registered via the StatusBarIOS module', eventType);
          return require('StatusBarIOS');
        }
        if (eventType.lastIndexOf('keyboard', 0) === 0) {
          console.warn('`%s` event should be registered via the Keyboard module', eventType);
          return require('Keyboard');
        }
        if (eventType === 'appStateDidChange' || eventType === 'memoryWarning') {
          console.warn('`%s` event should be registered via the AppState module', eventType);
          return require('AppState');
        }
      }
      return null;
    }
  }, {
    key: 'addListener',
    value: function addListener(eventType, listener, context) {
      var eventModule = this._nativeEventModule(eventType);
      return eventModule ? eventModule.addListener(eventType, listener, context) : _get(RCTDeviceEventEmitter.prototype.__proto__ || Object.getPrototypeOf(RCTDeviceEventEmitter.prototype), 'addListener', this).call(this, eventType, listener, context);
    }
  }, {
    key: 'removeAllListeners',
    value: function removeAllListeners(eventType) {
      var eventModule = this._nativeEventModule(eventType);
      eventModule && eventType ? eventModule.removeAllListeners(eventType) : _get(RCTDeviceEventEmitter.prototype.__proto__ || Object.getPrototypeOf(RCTDeviceEventEmitter.prototype), 'removeAllListeners', this).call(this, eventType);
    }
  }, {
    key: 'removeSubscription',
    value: function removeSubscription(subscription) {
      if (subscription.emitter !== this) {
        subscription.emitter.removeSubscription(subscription);
      } else {
        _get(RCTDeviceEventEmitter.prototype.__proto__ || Object.getPrototypeOf(RCTDeviceEventEmitter.prototype), 'removeSubscription', this).call(this, subscription);
      }
    }
  }]);

  return RCTDeviceEventEmitter;
}(EventEmitter);

RCTDeviceEventEmitter = new RCTDeviceEventEmitter();

BatchedBridge.registerCallableModule('RCTDeviceEventEmitter', RCTDeviceEventEmitter);

module.exports = RCTDeviceEventEmitter;