'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClinicSpeciality = function ClinicSpeciality(_ref) {
  var clinic = _ref.clinic;
  return _react2.default.createElement('div', null, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { xs: 6, sm: 6, md: 6, lg: 6 }, _react2.default.createElement('p', { className: 'detail-text' }, clinic.specificOne), _react2.default.createElement('p', { className: 'detail-text' }, clinic.specificTwo), _react2.default.createElement('p', { className: 'detail-text' }, clinic.specificThree)), _react2.default.createElement(_reactGridSystem.Col, { xs: 6, sm: 6, md: 6, lg: 6 }, _react2.default.createElement('p', { className: 'detail-text' }, clinic.specificFour), _react2.default.createElement('p', { className: 'detail-text' }, clinic.specificFive), _react2.default.createElement('p', { className: 'detail-text' }, clinic.specificSix))));
};

exports.default = ClinicSpeciality;