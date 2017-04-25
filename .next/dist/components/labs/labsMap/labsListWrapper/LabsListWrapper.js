'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LabsListItem = require('./labsListItem/LabsListItem');

var _LabsListItem2 = _interopRequireDefault(_LabsListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabsListWrapper = function LabsListWrapper(_ref) {
  var labs = _ref.labs;
  return _react2.default.createElement('div', null, labs.length ? labs.map(function (lab) {
    return _react2.default.createElement(_LabsListItem2.default, (0, _extends3.default)({ key: lab._id }, lab));
  }) : _react2.default.createElement('p', null, 'Awaiting laboratories'));
};

exports.default = LabsListWrapper;