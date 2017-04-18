'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PharmacieListItem = require('./phaListItem/PharmacieListItem');

var _PharmacieListItem2 = _interopRequireDefault(_PharmacieListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PharmacieListWrapper = function PharmacieListWrapper(_ref) {
  var pharmacies = _ref.pharmacies;
  return _react2.default.createElement('div', null, pharmacies.length ? pharmacies.map(function (pharmacie) {
    return _react2.default.createElement(_PharmacieListItem2.default, (0, _extends3.default)({ key: pharmacie._id }, pharmacie));
  }) : _react2.default.createElement('p', null, 'Awaiting Doctors'));
};

exports.default = PharmacieListWrapper;