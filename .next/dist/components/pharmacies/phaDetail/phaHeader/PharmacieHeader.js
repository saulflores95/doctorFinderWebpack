'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PharmacieHeader = function PharmacieHeader(_ref) {
  var pharmacie = _ref.pharmacie;
  return _react2.default.createElement('div', null, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 8 }, _react2.default.createElement('img', { src: pharmacie.img, height: 200, width: 250 })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 4 }, _react2.default.createElement('h1', null, pharmacie.name))));
};

exports.default = PharmacieHeader;