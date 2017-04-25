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

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailMap = function (_Component) {
  (0, _inherits3.default)(DetailMap, _Component);

  function DetailMap() {
    (0, _classCallCheck3.default)(this, DetailMap);

    return (0, _possibleConstructorReturn3.default)(this, (DetailMap.__proto__ || (0, _getPrototypeOf2.default)(DetailMap)).apply(this, arguments));
  }

  (0, _createClass3.default)(DetailMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.map = this.refs.map.leafletElement;
      setTimeout(function () {
        _this2.map.invalidateSize();
      }, 100);
    }
  }, {
    key: 'render',
    value: function render() {
      var _require = require('react-leaflet'),
          Map = _require.Map,
          Marker = _require.Marker,
          Popup = _require.Popup,
          TileLayer = _require.TileLayer;

      console.log(this.props.props);
      var position = [32.5194358, -117.0101997];
      var propPoistion = [Number(this.props.props.latitude), Number(this.props.props.longitude)];
      console.log(propPoistion);
      return _react2.default.createElement('div', {
        'data-jsx': 830334703
      }, _react2.default.createElement('div', { className: 'map', 'data-jsx': 830334703
      }, _react2.default.createElement(Map, { ref: 'map', center: position, zoom: 12 }, _react2.default.createElement(TileLayer, {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' }), _react2.default.createElement(Marker, { position: propPoistion }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', {
        'data-jsx': 830334703
      }, _react2.default.createElement('a', { href: 'http://maps.google.com/?q=' + this.props.props.latitude + ',' + this.props.props.longitude, 'data-jsx': 830334703
      }, ' ', _react2.default.createElement('br', {
        'data-jsx': 830334703
      }), this.props.props.name)))))), _react2.default.createElement(_style2.default, {
        styleId: 830334703,
        css: '.map[data-jsx="830334703"] {height:250px;width:100%;background-color:red;}'
      }));
    }
  }]);

  return DetailMap;
}(_react.Component);

exports.default = DetailMap;