'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HospitalList = require('./hosList/HospitalList');

var _HospitalList2 = _interopRequireDefault(_HospitalList);

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hospitalss = require('../../../hospitals.json');
var hospitals = hospitalss.hospitals;

var HospitalWrapper = function HospitalWrapper() {
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 4053338996
  }, _react2.default.createElement('div', { className: 'wrapperList', 'data-jsx': 4053338996
  }, _react2.default.createElement(_reactGridSystem.Row, null, hospitals.length ? hospitals.map(function (hospital) {
    return _react2.default.createElement(_HospitalList2.default, { key: hospital._id, hospital: hospital });
  }) : _react2.default.createElement('p', {
    'data-jsx': 4053338996
  }, 'Awaiting HospitalL'))), _react2.default.createElement(_style2.default, {
    styleId: 4053338996,
    css: '.wrapper[data-jsx="4053338996"] {padding-top: 15px;margin-bottom: 70px;}.wrapperList[data-jsx="4053338996"] {margin-left: 25px;margin-right: 25px;}'
  }));
};

exports.default = HospitalWrapper;