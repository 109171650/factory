Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');

var _resolveAssetSource2 = _interopRequireDefault(_resolveAssetSource);

var _VideoResizeMode = require('./VideoResizeMode.js');

var _VideoResizeMode2 = _interopRequireDefault(_VideoResizeMode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Video: {
    displayName: 'Video'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/data/SimpleApp/node_modules/react-native-video/Video.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var styles = _reactNative.StyleSheet.create({
  base: {
    overflow: 'hidden'
  }
});

var Video = _wrapComponent('Video')(function (_Component) {
  _inherits(Video, _Component);

  function Video(props) {
    _classCallCheck(this, Video);

    var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

    _this.seek = function (time) {
      _this.setNativeProps({ seek: time });
    };

    _this.presentFullscreenPlayer = function () {
      _this.setNativeProps({ fullscreen: true });
    };

    _this.dismissFullscreenPlayer = function () {
      _this.setNativeProps({ fullscreen: false });
    };

    _this._assignRoot = function (component) {
      _this._root = component;
    };

    _this._onLoadStart = function (event) {
      if (_this.props.onLoadStart) {
        _this.props.onLoadStart(event.nativeEvent);
      }
    };

    _this._onLoad = function (event) {
      if (_this.props.onLoad) {
        _this.props.onLoad(event.nativeEvent);
      }
    };

    _this._onError = function (event) {
      if (_this.props.onError) {
        _this.props.onError(event.nativeEvent);
      }
    };

    _this._onProgress = function (event) {
      if (_this.props.onProgress) {
        _this.props.onProgress(event.nativeEvent);
      }
    };

    _this._onSeek = function (event) {
      if (_this.state.showPoster) {
        _this.setState({ showPoster: false });
      }

      if (_this.props.onSeek) {
        _this.props.onSeek(event.nativeEvent);
      }
    };

    _this._onEnd = function (event) {
      if (_this.props.onEnd) {
        _this.props.onEnd(event.nativeEvent);
      }
    };

    _this._onFullscreenPlayerWillPresent = function (event) {
      if (_this.props.onFullscreenPlayerWillPresent) {
        _this.props.onFullscreenPlayerWillPresent(event.nativeEvent);
      }
    };

    _this._onFullscreenPlayerDidPresent = function (event) {
      if (_this.props.onFullscreenPlayerDidPresent) {
        _this.props.onFullscreenPlayerDidPresent(event.nativeEvent);
      }
    };

    _this._onFullscreenPlayerWillDismiss = function (event) {
      if (_this.props.onFullscreenPlayerWillDismiss) {
        _this.props.onFullscreenPlayerWillDismiss(event.nativeEvent);
      }
    };

    _this._onFullscreenPlayerDidDismiss = function (event) {
      if (_this.props.onFullscreenPlayerDidDismiss) {
        _this.props.onFullscreenPlayerDidDismiss(event.nativeEvent);
      }
    };

    _this._onReadyForDisplay = function (event) {
      if (_this.props.onReadyForDisplay) {
        _this.props.onReadyForDisplay(event.nativeEvent);
      }
    };

    _this._onPlaybackStalled = function (event) {
      if (_this.props.onPlaybackStalled) {
        _this.props.onPlaybackStalled(event.nativeEvent);
      }
    };

    _this._onPlaybackResume = function (event) {
      if (_this.props.onPlaybackResume) {
        _this.props.onPlaybackResume(event.nativeEvent);
      }
    };

    _this._onPlaybackRateChange = function (event) {
      if (_this.state.showPoster && event.nativeEvent.playbackRate !== 0) {
        _this.setState({ showPoster: false });
      }

      if (_this.props.onPlaybackRateChange) {
        _this.props.onPlaybackRateChange(event.nativeEvent);
      }
    };

    _this._onAudioBecomingNoisy = function () {
      if (_this.props.onAudioBecomingNoisy) {
        _this.props.onAudioBecomingNoisy();
      }
    };

    _this._onAudioFocusChanged = function (event) {
      if (_this.props.onAudioFocusChanged) {
        _this.props.onAudioFocusChanged(event.nativeEvent);
      }
    };

    _this._onBuffer = function (event) {
      if (_this.props.onBuffer) {
        _this.props.onBuffer(event.nativeEvent);
      }
    };

    _this.state = {
      showPoster: true
    };
    return _this;
  }

  _createClass(Video, [{
    key: 'setNativeProps',
    value: function setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var resizeMode = this.props.resizeMode;
      var source = (0, _resolveAssetSource2.default)(this.props.source) || {};

      var uri = source.uri || '';
      if (uri && uri.match(/^\//)) {
        uri = 'file://' + uri;
      }

      var isNetwork = !!(uri && uri.match(/^https?:/));
      var isAsset = !!(uri && uri.match(/^(assets-library|file|content|ms-appx|ms-appdata):/));

      var nativeResizeMode = void 0;
      if (resizeMode === _VideoResizeMode2.default.stretch) {
        nativeResizeMode = _reactNative.NativeModules.UIManager.RCTVideo.Constants.ScaleToFill;
      } else if (resizeMode === _VideoResizeMode2.default.contain) {
        nativeResizeMode = _reactNative.NativeModules.UIManager.RCTVideo.Constants.ScaleAspectFit;
      } else if (resizeMode === _VideoResizeMode2.default.cover) {
        nativeResizeMode = _reactNative.NativeModules.UIManager.RCTVideo.Constants.ScaleAspectFill;
      } else {
        nativeResizeMode = _reactNative.NativeModules.UIManager.RCTVideo.Constants.ScaleNone;
      }

      var nativeProps = _extends({}, this.props);
      _extends(nativeProps, {
        style: [styles.base, nativeProps.style],
        resizeMode: nativeResizeMode,
        src: {
          uri: uri,
          isNetwork: isNetwork,
          isAsset: isAsset,
          type: source.type || '',
          mainVer: source.mainVer || 0,
          patchVer: source.patchVer || 0
        },
        onVideoLoadStart: this._onLoadStart,
        onVideoLoad: this._onLoad,
        onVideoError: this._onError,
        onVideoProgress: this._onProgress,
        onVideoSeek: this._onSeek,
        onVideoEnd: this._onEnd,
        onVideoBuffer: this._onBuffer,
        onVideoFullscreenPlayerWillPresent: this._onFullscreenPlayerWillPresent,
        onVideoFullscreenPlayerDidPresent: this._onFullscreenPlayerDidPresent,
        onVideoFullscreenPlayerWillDismiss: this._onFullscreenPlayerWillDismiss,
        onVideoFullscreenPlayerDidDismiss: this._onFullscreenPlayerDidDismiss,
        onReadyForDisplay: this._onReadyForDisplay,
        onPlaybackStalled: this._onPlaybackStalled,
        onPlaybackResume: this._onPlaybackResume,
        onPlaybackRateChange: this._onPlaybackRateChange,
        onAudioFocusChanged: this._onAudioFocusChanged,
        onAudioBecomingNoisy: this._onAudioBecomingNoisy
      });

      if (this.props.poster && this.state.showPoster) {
        var posterStyle = {
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          resizeMode: 'contain'
        };

        return _react3.default.createElement(
          _reactNative.View,
          { style: nativeProps.style },
          _react3.default.createElement(RCTVideo, _extends({
            ref: this._assignRoot
          }, nativeProps)),
          _react3.default.createElement(_reactNative.Image, {
            style: posterStyle,
            source: { uri: this.props.poster }
          })
        );
      }

      return _react3.default.createElement(RCTVideo, _extends({
        ref: this._assignRoot
      }, nativeProps));
    }
  }]);

  return Video;
}(_react2.Component));

exports.default = Video;


Video.propTypes = _extends({
  src: _react2.PropTypes.object,
  seek: _react2.PropTypes.number,
  fullscreen: _react2.PropTypes.bool,
  onVideoLoadStart: _react2.PropTypes.func,
  onVideoLoad: _react2.PropTypes.func,
  onVideoBuffer: _react2.PropTypes.func,
  onVideoError: _react2.PropTypes.func,
  onVideoProgress: _react2.PropTypes.func,
  onVideoSeek: _react2.PropTypes.func,
  onVideoEnd: _react2.PropTypes.func,
  onVideoFullscreenPlayerWillPresent: _react2.PropTypes.func,
  onVideoFullscreenPlayerDidPresent: _react2.PropTypes.func,
  onVideoFullscreenPlayerWillDismiss: _react2.PropTypes.func,
  onVideoFullscreenPlayerDidDismiss: _react2.PropTypes.func,

  source: _react2.PropTypes.oneOfType([_react2.PropTypes.shape({
    uri: _react2.PropTypes.string
  }), _react2.PropTypes.number]),
  resizeMode: _react2.PropTypes.string,
  poster: _react2.PropTypes.string,
  repeat: _react2.PropTypes.bool,
  paused: _react2.PropTypes.bool,
  muted: _react2.PropTypes.bool,
  volume: _react2.PropTypes.number,
  rate: _react2.PropTypes.number,
  playInBackground: _react2.PropTypes.bool,
  playWhenInactive: _react2.PropTypes.bool,
  disableFocus: _react2.PropTypes.bool,
  controls: _react2.PropTypes.bool,
  currentTime: _react2.PropTypes.number,
  progressUpdateInterval: _react2.PropTypes.number,
  onLoadStart: _react2.PropTypes.func,
  onLoad: _react2.PropTypes.func,
  onBuffer: _react2.PropTypes.func,
  onError: _react2.PropTypes.func,
  onProgress: _react2.PropTypes.func,
  onSeek: _react2.PropTypes.func,
  onEnd: _react2.PropTypes.func,
  onFullscreenPlayerWillPresent: _react2.PropTypes.func,
  onFullscreenPlayerDidPresent: _react2.PropTypes.func,
  onFullscreenPlayerWillDismiss: _react2.PropTypes.func,
  onFullscreenPlayerDidDismiss: _react2.PropTypes.func,
  onReadyForDisplay: _react2.PropTypes.func,
  onPlaybackStalled: _react2.PropTypes.func,
  onPlaybackResume: _react2.PropTypes.func,
  onPlaybackRateChange: _react2.PropTypes.func,
  onAudioFocusChanged: _react2.PropTypes.func,
  onAudioBecomingNoisy: _react2.PropTypes.func,

  scaleX: _react2.PropTypes.number,
  scaleY: _react2.PropTypes.number,
  translateX: _react2.PropTypes.number,
  translateY: _react2.PropTypes.number,
  rotation: _react2.PropTypes.number
}, _reactNative.View.propTypes);

var RCTVideo = (0, _reactNative.requireNativeComponent)('RCTVideo', Video, {
  nativeOnly: {
    src: true,
    seek: true,
    fullscreen: true
  }
});