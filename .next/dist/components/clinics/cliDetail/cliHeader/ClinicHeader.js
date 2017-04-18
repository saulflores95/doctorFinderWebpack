'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClinicHeader = function ClinicHeader(_ref) {
  var clinic = _ref.clinic;
  return _react2.default.createElement('div', null, console.log(clinic), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 3 }, _react2.default.createElement('img', { width: '250', height: '200', src: clinic.img })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 3 }, _react2.default.createElement('h1', { className: 'detail-name' }, clinic.name))));
};

exports.default = ClinicHeader;