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

var _LabsListWrapper = require('./labsListWrapper/LabsListWrapper');

var _LabsListWrapper2 = _interopRequireDefault(_LabsListWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabsGeneralMap = function (_Component) {
  (0, _inherits3.default)(LabsGeneralMap, _Component);

  function LabsGeneralMap() {
    (0, _classCallCheck3.default)(this, LabsGeneralMap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LabsGeneralMap.__proto__ || (0, _getPrototypeOf2.default)(LabsGeneralMap)).call(this));

    _this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15,
      open: false
    };
    return _this;
  }

  (0, _createClass3.default)(LabsGeneralMap, [{
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
      var positionState = [this.state.lat, this.state.lng];
      var L = require('leaflet');

      var _require = require('react-leaflet'),
          Map = _require.Map,
          Marker = _require.Marker,
          Popup = _require.Popup,
          TileLayer = _require.TileLayer;

      var LabMapIcon = L.icon({
        iconUrl: 'https://s29.postimg.org/6p57i16k7/lab.png',
        popupAnchor: [0, -18],
        iconSize: [25, 41]
      });
      var styles = {
        button: {
          zIndex: 999,
          position: 'absolute',
          top: 85,
          left: 7
        }
      };
      return _react2.default.createElement('div', { className: 'mapcontainer', 'data-jsx': 2057031695
      }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_FloatingActionButton2.default, { style: styles.button, mini: true, onClick: this.handleToggle.bind(this) }, _react2.default.createElement(_add2.default, null))), _react2.default.createElement(Map, { ref: 'map', center: positionState, zoom: this.state.zoom }, _react2.default.createElement(TileLayer, {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' }), _react2.default.createElement('div', {
        'data-jsx': 2057031695
      }, _react2.default.createElement('div', {
        'data-jsx': 2057031695
      }, this.props.labs.map(function (lab) {
        {
          console.log('From props: ', lab);
        }
        return _react2.default.createElement(Marker, { icon: LabMapIcon, key: lab._id, position: [lab.latitude, lab.longitude] }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', {
          'data-jsx': 2057031695
        }, _react2.default.createElement('a', { href: 'http://maps.google.com/?q=' + lab.latitude + ',' + lab.longitude, 'data-jsx': 2057031695
        }, ' ', _react2.default.createElement('br', {
          'data-jsx': 2057031695
        }), lab.name))));
      })))), _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement('div', {
        'data-jsx': 2057031695
      }, _react2.default.createElement(_Drawer2.default, {
        open: this.state.open,
        docked: false,
        onRequestChange: this.handleClose.bind(this) }, _react2.default.createElement(_LabsListWrapper2.default, { labs: this.props.labs }), _react2.default.createElement(_MenuItem2.default, { onClick: this.handleClose.bind(this) }, _react2.default.createElement('h3', {
        'data-jsx': 2057031695
      }, ' Close '))))), _react2.default.createElement(_style2.default, {
        styleId: 2057031695,
        css: '.mapcontainer[data-jsx="2057031695"]{margin: 0;padding: 0;width: 100%;height: 100%;}.sidenav[data-jsx="2057031695"] {z-index: 9999 !important;}'
      }));
    }
  }]);

  return LabsGeneralMap;
}(_react.Component);

exports.default = LabsGeneralMap;