'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GeneralMap = require('../components/map/GeneralMap');

var _GeneralMap2 = _interopRequireDefault(_GeneralMap);

var _App = require('../components/App/App');

var _App2 = _interopRequireDefault(_App);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hospitals = require('../hospitals');
var doctors = require('../doctors');
var pharmacies = require('../pharmacies.json');
var labs = require('../labs.json');
var clinics = require('../clinics.json');

var map = function map() {
  return _react2.default.createElement('div', { className: 'container', 'data-jsx': 2872047744
  }, _react2.default.createElement(_App2.default, null, _react2.default.createElement('div', { className: 'container', 'data-jsx': 2872047744
  }, _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement('div', {
      'data-jsx': 2872047744
    }, 'On server') }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 2872047744
  }, _react2.default.createElement(_GeneralMap2.default, { doctors: doctors.doctors, hospitals: hospitals.hospitals, clinics: clinics.clinics, pharmacies: pharmacies.pharmacies, labs: labs.labs }))))), _react2.default.createElement(_style2.default, {
    styleId: 2872047744,
    css: '.container[data-jsx="2872047744"] {height: 100%;}'
  }));
};

exports.default = map;