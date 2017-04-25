'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _info = require('material-ui/svg-icons/action/info');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DoctorList = function DoctorList(_ref) {
  var doctor = _ref.doctor;
  return _react2.default.createElement('div', {
    'data-jsx': 1388756591
  }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_List.List, null, _react2.default.createElement(_link2.default, { href: '/doctor-detail?id=' + doctor._id, as: '/doctor-detail/' + doctor._id }, _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { className: 'doctor', alt: doctor.name, src: doctor.img }),
    rightIcon: _react2.default.createElement(_info2.default, null),
    secondaryText: _react2.default.createElement('div', { className: 'label2', 'data-jsx': 1388756591
    }, doctor.specialty),
    primaryText: _react2.default.createElement('div', { className: 'label', 'data-jsx': 1388756591
    }, doctor.name)
  })), _react2.default.createElement(_Divider2.default, { inset: true }))), _react2.default.createElement(_style2.default, {
    styleId: 1388756591,
    css: '.label[data-jsx="1388756591"] {font-size: 16px;color: white !important;font-family: \'Montserrat\', sans-serif;}.doctor[data-jsx="1388756591"] {width: 45px !important;height: 45px !important ;}.label2[data-jsx="1388756591"] {font-size: 16px;color: white !important;}.pageSlider-enter[data-jsx="1388756591"] {-webkit-transform: translate3d(100%, 0, 0);-moz-transform: translate3d(100%, 0, 0);-ms-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);}.pageSlider-enter.pageSlider-enter-active[data-jsx="1388756591"] {-webkit-transform: translate3d(0, 0, 0);-moz-transform: translate3d(0, 0, 0);-ms-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);-webkit-transition: all 600ms;-moz-transition: all 600ms;-ms-transition: all 600ms;transition: all 600ms;}'
  }));
};

exports.default = DoctorList;