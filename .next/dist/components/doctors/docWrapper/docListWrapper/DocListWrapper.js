'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchNav = require('../../../MainLayout/UpperNavigation/searchNav/SearchNav');

var _SearchNav2 = _interopRequireDefault(_SearchNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DoctorListWrapper = function DoctorListWrapper(_ref) {
  var doctor = _ref.doctor;
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 1109981838
  }, _react2.default.createElement(_SearchNav2.default, { props: doctor, identifier: 'doctor' }), _react2.default.createElement(_style2.default, {
    styleId: 1109981838,
    css: '.wrapper[data-jsx="1109981838"] {padding-top: 10px;position: absolute;width: 100%;height: 100%;background-color: rgb(0, 188, 212);}'
  }));
};

exports.default = DoctorListWrapper;