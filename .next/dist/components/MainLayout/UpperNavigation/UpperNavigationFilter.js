'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NewUpperNavigation = require('./newUpperNavigation/NewUpperNavigation');

var _NewUpperNavigation2 = _interopRequireDefault(_NewUpperNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\doctorFinderWebpack\\components\\MainLayout\\UpperNavigation\\UpperNavigationFilter.js';


var UpperNavigationFilter = function UpperNavigationFilter() {
  var doctorString = '/doctors/';
  //  var path = location.pathname
  var path = '/doctors';
  if (path === '/laboratories' || path === '/pharmacies') {
    return null;
  } else if (path.indexOf(doctorString) > -1) {
    return null;
  } else {
    return _react2.default.createElement(_NewUpperNavigation2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    });
  }
};

exports.default = UpperNavigationFilter;