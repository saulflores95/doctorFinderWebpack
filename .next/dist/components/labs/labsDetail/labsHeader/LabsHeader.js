'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabsHeader = function LabsHeader(_ref) {
  var lab = _ref.lab;
  return _react2.default.createElement('div', null, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 8 }, _react2.default.createElement('img', { width: '250', height: '200', src: lab.img })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 4 }, _react2.default.createElement('h1', { className: 'detail-name' }, lab.name))));
};

exports.default = LabsHeader;