'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegistrationMap = function (_Component) {
  (0, _inherits3.default)(RegistrationMap, _Component);

  function RegistrationMap() {
    (0, _classCallCheck3.default)(this, RegistrationMap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegistrationMap.__proto__ || (0, _getPrototypeOf2.default)(RegistrationMap)).call(this));

    _this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15
    };
    return _this;
  }

  (0, _createClass3.default)(RegistrationMap, [{
    key: 'render',
    value: function render() {
      var _require = require('react-leaflet'),
          Map = _require.Map,
          Marker = _require.Marker,
          Popup = _require.Popup,
          TileLayer = _require.TileLayer;

      var styles = {
        leafletContainer: {
          width: '100%',
          height: '250px'
        }
      };

      return _react2.default.createElement('div', { style: styles.leafletContainer }, _react2.default.createElement(Map, { center: [this.state.lat, this.state.lng], zoom: this.state.zoom, onClick: this.props.mapClick }, _react2.default.createElement(TileLayer, {
        attribution: '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      }), _react2.default.createElement(Marker, { position: this.props.position }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', null, 'Is there where?')))));
    }
  }]);

  return RegistrationMap;
}(_react.Component);

exports.default = RegistrationMap;