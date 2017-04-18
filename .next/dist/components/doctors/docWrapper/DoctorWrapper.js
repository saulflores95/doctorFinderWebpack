'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DocCatList = require('./docCatList/DocCatList');

var _DocCatList2 = _interopRequireDefault(_DocCatList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doctors = require('../../../doctors.json');

var doctorCategory = function doctorCategory(props) {
  var arr = props.map(function (doctor) {
    return doctor.specialty;
  });
  var uniqueArr = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });
  return uniqueArr;
};

var DoctorWrapper = function DoctorWrapper(doctorProp) {
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 1220542769
  }, console.log('Doctors PROP', doctorProp), doctors.doctors.length ? doctorCategory(doctors.doctors).map(function (specialty) {
    return _react2.default.createElement(_DocCatList2.default, { specialty: specialty });
  }) : _react2.default.createElement('div', {
    'data-jsx': 1220542769
  }, 'Loading'), _react2.default.createElement(_style2.default, {
    styleId: 1220542769,
    css: '.wrapper[data-jsx="1220542769"] {padding-top: 10px;width: 100%;height: 100%;overflow-y: hidden;}'
  }));
};

exports.default = DoctorWrapper;