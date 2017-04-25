'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _ClinicWrapper = require('../components/clinics/cliWrapper/ClinicWrapper');

var _ClinicWrapper2 = _interopRequireDefault(_ClinicWrapper);

var _App = require('../components/App/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clinics = function clinics() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_App2.default, null, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement(_ClinicWrapper2.default, null))));
};

exports.default = clinics;