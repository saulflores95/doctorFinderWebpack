'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DoctorExp = require('./docExp/DoctorExp');

var _DoctorExp2 = _interopRequireDefault(_DoctorExp);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactGridSystem = require('react-grid-system');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DoctorHeader = function DoctorHeader(doctor) {
  return _react2.default.createElement('div', {
    'data-jsx': 2250710346
  }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement('div', { className: 'doctorHeaderContainer', 'data-jsx': 2250710346
  }, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 2 }, _react2.default.createElement('img', { alt: doctor[0].name, className: 'img', src: doctor[0].img, 'data-jsx': 2250710346
  })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 5 }, _react2.default.createElement('h1', {
    'data-jsx': 2250710346
  }, doctor[0].name), _react2.default.createElement('span', { className: 'label', 'data-jsx': 2250710346
  }, doctor[0].specialty)), _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 12, lg: 5 }, _react2.default.createElement(_DoctorExp2.default, doctor))))), _react2.default.createElement(_style2.default, {
    styleId: 2250710346,
    css: '.doctorHeaderContainer[data-jsx="2250710346"]{height:200;padding-top: 75;padding-bottom:75;color:white;}.img[data-jsx="2250710346"] {height: 150px;width: 150px;border-radius: 50%;display: block;margin-left: auto;margin-right: auto;}.label[data-jsx="2250710346"] {font-size: 16px;font-family: Roboto, sans-serif;}.divider[data-jsx="2250710346"] {padding-top: 25;}'
  }));
};

exports.default = DoctorHeader;