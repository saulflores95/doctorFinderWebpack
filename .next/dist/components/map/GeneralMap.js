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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeneralMap = function (_Component) {
  (0, _inherits3.default)(GeneralMap, _Component);

  function GeneralMap() {
    (0, _classCallCheck3.default)(this, GeneralMap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GeneralMap.__proto__ || (0, _getPrototypeOf2.default)(GeneralMap)).call(this));

    _this.state = {
      latitude: 32.50504,
      longitude: -116.99056,
      zoom: 5,
      open: false,
      showPharmacies: true,
      showHospitals: true,
      showDoctors: true,
      showClinics: true,
      showLabs: true
    };
    return _this;
  }

  (0, _createClass3.default)(GeneralMap, [{
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
    key: 'toogle',
    value: function toogle(value) {
      if (value === 'doctors') {
        if (this.state.showDoctors === true) {
          this.setState({
            showDoctors: false,
            showPharmacies: false,
            showClinics: false,
            showHospitals: false,
            showLabs: false
          });
        } else {
          this.setState({
            showDoctors: true,
            showPharmacies: false,
            showClinics: false,
            showHospitals: false,
            showLabs: false
          });
        }
      } else if (value === 'pharmacies') {
        if (this.state.showPharmacies === true) {
          this.setState({
            showPharmacies: false
          });
        } else {
          this.setState({
            showPharmacies: true,
            showDoctors: false,
            showClinics: false,
            showHospitals: false,
            showLabs: false
          });
        }
      } else if (value === 'clinics') {
        if (this.state.showClinics === true) {
          this.setState({
            showClinics: false
          });
        } else {
          this.setState({
            showClinics: true,
            showPharmacies: false,
            showDoctors: false,
            showHospitals: false,
            showLabs: false
          });
        }
      } else if (value === 'labs') {
        if (this.state.showLabs === true) {
          this.setState({
            showLabs: false
          });
        } else {
          this.setState({
            showLabs: true,
            showPharmacies: false,
            showDoctors: false,
            showClinics: false,
            showHospitals: false
          });
        }
      } else if (value === 'hospitals') {
        if (this.state.showHospitals === true) {
          this.setState({
            showHospitals: false
          });
        } else {
          this.setState({
            showHospitals: true,
            showPharmacies: false,
            showDoctors: false,
            showClinics: false,
            showLabs: false
          });
        }
      } else if (value === 'all') {
        this.setState({
          showHospitals: true,
          showPharmacies: true,
          showDoctors: true,
          showClinics: true,
          showLabs: true
        });
      } else {
        console.log('Not Working: ', value);
      }
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

      var handlePharmacies = function handlePharmacies() {
        if (_this3.state.showPharmacies === true) {
          var PharmacieMapIcon = L.icon({
            iconUrl: 'https://s28.postimg.org/t501cy4el/Farmacias.png',
            popupAnchor: [0, -18],
            iconSize: [30, 41]
          });
          return _react2.default.createElement('div', null, _this3.props.pharmacies.map(function (pharmacie) {
            var cordinates = _this3.handleCoordinates(pharmacie.latitude, pharmacie.longitude);
            console.log(cordinates);
            return _react2.default.createElement(Marker, { icon: PharmacieMapIcon, position: [cordinates.latitude, cordinates.longitude] }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', null, _react2.default.createElement('a', { href: 'http://maps.google.com/?q=' + pharmacie.latitude + ',' + pharmacie.longitude }, ' ', _react2.default.createElement('br', null), pharmacie.name))));
          }));
        }
      };

      var handleHospitals = function handleHospitals() {
        var hospitalMapIcon = L.icon({
          iconUrl: 'https://s28.postimg.org/d819g8c0d/Hospitals.png',
          popupAnchor: [0, -18],
          iconSize: [30, 41]

        });
        if (_this3.state.showHospitals === true) {
          return _react2.default.createElement('div', null, _this3.props.hospitals.map(function (hospital) {
            var cordinates = _this3.handleCoordinates(hospital.latitude, hospital.longitude);
            return _react2.default.createElement(Marker, { key: hospital._id, icon: hospitalMapIcon, position: [cordinates.latitude, cordinates.longitude] }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', null, _react2.default.createElement('a', { href: 'http://maps.google.com/?q=' + hospital.latitude + ',' + hospital.longitude }, _react2.default.createElement('br', null), hospital.name))));
          }));
        }
      };

      var handleDoctors = function handleDoctors() {
        var DoctorMapIcon = L.icon({
          iconUrl: 'https://s28.postimg.org/ohtzb6h1p/Doctores.png',
          popupAnchor: [0, -18],
          iconSize: [30, 41]
        });
        if (_this3.state.showDoctors === true) {
          return _react2.default.createElement('div', null, _this3.props.doctors.map(function (doctor) {
            var cordinates = _this3.handleCoordinates(doctor.latitude, doctor.longitude);
            return _react2.default.createElement(Marker, { key: doctor._id, icon: DoctorMapIcon, position: [cordinates.latitude, cordinates.longitude] }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', null, _react2.default.createElement('br', null), _react2.default.createElement('a', { href: 'http://maps.google.com/?q=' + doctor.latitude + ',' + doctor.longitude }, doctor.name))));
          }));
        }
      };

      var handleClinics = function handleClinics() {
        var clinicMapIcon = L.icon({
          iconUrl: 'https://s28.postimg.org/gb1zjlqz1/clinic.png',
          popupAnchor: [0, -18],
          iconSize: [30, 41]
        });
        if (_this3.state.showClinics === true) {
          return _react2.default.createElement('div', null, _this3.props.clinics.map(function (clinic) {
            var cordinates = _this3.handleCoordinates(clinic.latitude, clinic.longitude);
            return _react2.default.createElement(Marker, { key: clinic._id, icon: clinicMapIcon, position: [cordinates.latitude, cordinates.longitude] }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', null, _react2.default.createElement('a', { href: 'http://maps.google.com/?q=' + clinic.latitude + ',' + clinic.longitude }, ' ', _react2.default.createElement('br', null), clinic.name))));
          }));
        }
      };

      var handleLabs = function handleLabs() {
        var labMapIcon = L.icon({
          iconUrl: 'https://s29.postimg.org/6p57i16k7/lab.png',
          popupAnchor: [0, -18],
          iconSize: [30, 41]
        });
        if (_this3.state.showClinics === true) {
          return _react2.default.createElement('div', null, _this3.props.labs.map(function (lab) {
            var cordinates = _this3.handleCoordinates(lab.latitude, lab.longitude);
            return _react2.default.createElement(Marker, { key: lab._id, icon: labMapIcon, position: [cordinates.latitude, cordinates.longitude] }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', null, _react2.default.createElement('a', { href: 'http://maps.google.com/?q=' + lab.latitude + ',' + lab.longitude }, _react2.default.createElement('br', null), lab.name))));
          }));
        }
      };
      var mapCenter = [this.state.latitude, this.state.longitude];
      var styles = {
        button: {
          zIndex: 999,
          position: 'absolute',
          top: 85,
          left: 7
        }
      };
      return _react2.default.createElement('div', { className: 'map', 'data-jsx': 2193108635
      }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_FloatingActionButton2.default, { style: styles.button, mini: true, onClick: this.handleToggle.bind(this) }, _react2.default.createElement(_add2.default, null))), _react2.default.createElement(Map, { ref: 'map', center: mapCenter, zoom: this.state.zoom }, _react2.default.createElement(TileLayer, {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' }), _react2.default.createElement('div', {
        'data-jsx': 2193108635
      }, handlePharmacies()), _react2.default.createElement('div', {
        'data-jsx': 2193108635
      }, handleClinics()), _react2.default.createElement('div', {
        'data-jsx': 2193108635
      }, handleHospitals()), _react2.default.createElement('div', {
        'data-jsx': 2193108635
      }, handleLabs()), _react2.default.createElement('div', {
        'data-jsx': 2193108635
      }, handleDoctors()), _react2.default.createElement('div', {
        'data-jsx': 2193108635
      }, _react2.default.createElement(Marker, { position: userPosition }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', {
        'data-jsx': 2193108635
      }, ' ', _react2.default.createElement('br', {
        'data-jsx': 2193108635
      }), 'This is you'))))), _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement('div', {
        'data-jsx': 2193108635
      }, _react2.default.createElement(_Drawer2.default, {
        open: this.state.open,
        docked: false,
        className: 'sidenav',
        onRequestChange: function onRequestChange(open) {
          return _this3.setState({ open: open });
        } }, _react2.default.createElement(_MenuItem2.default, { onClick: function onClick() {
          return _this3.toogle('all');
        } }, _react2.default.createElement('h3', {
        'data-jsx': 2193108635
      }, 'Show All ')), _react2.default.createElement(_MenuItem2.default, { onClick: function onClick() {
          return _this3.toogle('doctors');
        } }, _react2.default.createElement('h3', {
        'data-jsx': 2193108635
      }, 'Doctors ')), _react2.default.createElement(_MenuItem2.default, { onClick: function onClick() {
          return _this3.toogle('pharmacies');
        } }, _react2.default.createElement('h3', {
        'data-jsx': 2193108635
      }, 'Pharmacies ')), _react2.default.createElement(_MenuItem2.default, { onClick: function onClick() {
          return _this3.toogle('clinics');
        } }, _react2.default.createElement('h3', {
        'data-jsx': 2193108635
      }, 'Clinics ')), _react2.default.createElement(_MenuItem2.default, { onClick: function onClick() {
          return _this3.toogle('labs');
        } }, _react2.default.createElement('h3', {
        'data-jsx': 2193108635
      }, 'Laboratories ')), _react2.default.createElement(_MenuItem2.default, { onClick: function onClick() {
          return _this3.toogle('hospitals');
        } }, _react2.default.createElement('h3', {
        'data-jsx': 2193108635
      }, 'Hospitals ')), _react2.default.createElement(_MenuItem2.default, { onClick: function onClick() {
          return _this3.handleClose();
        } }, _react2.default.createElement('h3', {
        'data-jsx': 2193108635
      }, 'Close '))))), _react2.default.createElement(_style2.default, {
        styleId: 2193108635,
        css: '.map[data-jsx="2193108635"] {height: 100%;}'
      }));
    }
  }]);

  return GeneralMap;
}(_react.Component);

exports.default = GeneralMap;