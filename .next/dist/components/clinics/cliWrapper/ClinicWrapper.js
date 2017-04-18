'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGridSystem = require('react-grid-system');

var _ClinicList = require('./cliList/ClinicList');

var _ClinicList2 = _interopRequireDefault(_ClinicList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clinics = require('../../../clinics.json');

var ClinicWrapper = function ClinicWrapper() {
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 3310657374
  }, _react2.default.createElement('div', { className: 'wrapperList', 'data-jsx': 3310657374
  }, _react2.default.createElement(_reactGridSystem.Row, null, clinics.clinics.length ? clinics.clinics.map(function (clinic) {
    return _react2.default.createElement(_ClinicList2.default, { key: clinic._id, clinic: clinic });
  }) : _react2.default.createElement('p', {
    'data-jsx': 3310657374
  }, 'Awaiting clinics'))), _react2.default.createElement(_style2.default, {
    styleId: 3310657374,
    css: '.wrapper[data-jsx="3310657374"] {padding-top: 15px;margin-bottom: 70px;}.wrapperList[data-jsx="3310657374"] {margin-left: 25px;margin-right: 25px;}'
  }));
};

exports.default = ClinicWrapper;