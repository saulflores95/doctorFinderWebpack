'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _HospitalWrapper = require('../components/hospital/hosWrapper/HospitalWrapper');

var _HospitalWrapper2 = _interopRequireDefault(_HospitalWrapper);

var _App = require('../components/App/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hospitals = function hospitals() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_App2.default, null, _react2.default.createElement('div', null, _react2.default.createElement(_HospitalWrapper2.default, null))));
};

exports.default = hospitals;