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

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _PharmacieListWrapper = require('./phaListWrapper/PharmacieListWrapper');

var _PharmacieListWrapper2 = _interopRequireDefault(_PharmacieListWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PharmacieGeneralMap = function (_Component) {
  (0, _inherits3.default)(PharmacieGeneralMap, _Component);

  function PharmacieGeneralMap() {
    (0, _classCallCheck3.default)(this, PharmacieGeneralMap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PharmacieGeneralMap.__proto__ || (0, _getPrototypeOf2.default)(PharmacieGeneralMap)).call(this));

    _this.state = {
      latitude: 32.50504,
      longitude: -116.99056,
      zoom: 5,
      open: false
    };
    return _this;
  }

  (0, _createClass3.default)(PharmacieGeneralMap, [{
    key: 'handleCoordinates',
    value: function handleCoordinates(latitude, longitude) {
      latitude = parseFloat(latitude);
      longitude = parseFloat(longitude);
      var coordinate = {
        latitude: latitude,
        longitude: longitude
      };
      return coordinate;
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      this.setState({ open: !this.state.open });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ open: false });
    }
  }, {
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
      var _this3 = this;

      var userPosition = [this.state.latitude, this.state.longitude];
      var L = require('leaflet');

      var _require = require('react-leaflet'),
          Map = _require.Map,
          Marker = _require.Marker,
          Popup = _require.Popup,
          TileLayer = _require.TileLayer;

      var PharmacieMapIcon = L.icon({
        iconUrl: 'https://s28.postimg.org/t501cy4el/Farmacias.png',
        popupAnchor: [0, -18],
        iconSize: [25, 41]
      });

      var mapCenter = [this.state.latitude, this.state.longitude];
      var styles = {
        button: {
          zIndex: 999,
          position: 'absolute',
          top: 85,
          left: 7
        }
      };
      return _react2.default.createElement('div', { className: 'map', 'data-jsx': 3128196839
      }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_FloatingActionButton2.default, { style: styles.button, mini: true, onClick: this.handleToggle.bind(this) }, _react2.default.createElement(_add2.default, null))), _react2.default.createElement(Map, { ref: 'map', center: mapCenter, zoom: this.state.zoom }, _react2.default.createElement(TileLayer, {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' }), _react2.default.createElement('div', {
        'data-jsx': 3128196839
      }, this.props.pharmacies.map(function (pharmacie) {
        return _react2.default.createElement(Marker, { icon: PharmacieMapIcon, position: [pharmacie.latitude, pharmacie.longitude] }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', {
          'data-jsx': 3128196839
        }, _react2.default.createElement('a', { href: 'http://maps.google.com/?q=' + pharmacie.latitude + ',' + pharmacie.longitude, 'data-jsx': 3128196839
        }, ' ', _react2.default.createElement('br', {
          'data-jsx': 3128196839
        }), pharmacie.name))));
      })), _react2.default.createElement('div', {
        'data-jsx': 3128196839
      }, _react2.default.createElement(Marker, { position: userPosition }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', {
        'data-jsx': 3128196839
      }, ' ', _react2.default.createElement('br', {
        'data-jsx': 3128196839
      }), 'This is you'))))), _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement('div', {
        'data-jsx': 3128196839
      }, _react2.default.createElement(_Drawer2.default, {
        open: this.state.open,
        docked: false,
        className: 'sidenav',
        onRequestChange: function onRequestChange(open) {
          return _this3.setState({ open: open });
        } }, _react2.default.createElement('div', { className: 'sidenav', 'data-jsx': 3128196839
      }, _react2.default.createElement(_PharmacieListWrapper2.default, { pharmacies: this.props.pharmacies })), _react2.default.createElement(_MenuItem2.default, { onClick: this.handleClose.bind(this) }, _react2.default.createElement('h3', {
        'data-jsx': 3128196839
      }, 'Close '))))), _react2.default.createElement(_style2.default, {
        styleId: 3128196839,
        css: '.map[data-jsx="3128196839"] {height: 100%;}.sidenav[data-jsx="3128196839"] {margin-top: 67px;}button[data-jsx="3128196839"] {padding-top: 100px;z-index:10000;}'
      }));
    }
  }]);

  return PharmacieGeneralMap;
}(_react.Component);

exports.default = PharmacieGeneralMap;