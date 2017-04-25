'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _DoctorWrapper = require('../components/doctors/docWrapper/DoctorWrapper');

var _DoctorWrapper2 = _interopRequireDefault(_DoctorWrapper);

var _App = require('../components/App/App');

var _App2 = _interopRequireDefault(_App);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doctorsFetched = [];

var doctorFetch = _axios2.default.get('/api/doctors').then(function (response) {
  doctorFetch.doctors = response.data.data;
  return doctorFetch;
}).catch(function (error) {
  console.log(error);
});

var doctors = function doctors() {
  return _react2.default.createElement('div', { className: 'container', 'data-jsx': 2872047744
  }, _react2.default.createElement(_App2.default, null, _react2.default.createElement('div', {
    'data-jsx': 2872047744
  }, _react2.default.createElement(_DoctorWrapper2.default, { doctorProp: doctorFetch }))), _react2.default.createElement(_style2.default, {
    styleId: 2872047744,
    css: '.container[data-jsx="2872047744"] {height: 100%;}'
  }));
};

exports.default = doctors;