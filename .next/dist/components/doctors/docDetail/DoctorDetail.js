'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DoctorHeader = require('./docHeader/DoctorHeader');

var _DoctorHeader2 = _interopRequireDefault(_DoctorHeader);

var _DoctorDescription = require('./docDescription/DoctorDescription');

var _DoctorDescription2 = _interopRequireDefault(_DoctorDescription);

var _DoctorContactForm = require('./docContact/DoctorContactForm');

var _DoctorContactForm2 = _interopRequireDefault(_DoctorContactForm);

var _reactGridSystem = require('react-grid-system');

var _DetailMap = require('../../map/DetailMap');

var _DetailMap2 = _interopRequireDefault(_DetailMap);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DoctorDetail = function DoctorDetail(doctor) {
  return _react2.default.createElement('div', { className: 'doctorDetailWrapper', 'data-jsx': 2381595161
  }, _react2.default.createElement(_reactMotionUiPack2.default, {
    component: false,
    enter: {
      opacity: 1,
      scale: 1
    },
    leave: {
      opacity: 0,
      scale: 0
    }
  }, _react2.default.createElement(_reactGridSystem.Container, { className: 'doc-Container' }, _react2.default.createElement('div', { className: 'doctor-header', 'data-jsx': 2381595161
  }, _react2.default.createElement(_DoctorHeader2.default, doctor.doctor)), _react2.default.createElement('div', { className: 'doctor-description', 'data-jsx': 2381595161
  }, _react2.default.createElement(_DoctorDescription2.default, { doctor: doctor.doctor })), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 6, lg: 6 }, _react2.default.createElement(_DoctorContactForm2.default, doctor.doctor[0])), _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 6, lg: 6 }, _react2.default.createElement('div', { className: 'doctor-map', 'data-jsx': 2381595161
  }, _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement('div', {
      'data-jsx': 2381595161
    }, 'Map Loading...') }, _react2.default.createElement(_DetailMap2.default, { props: doctor.doctor[0] }))))))), _react2.default.createElement(_style2.default, {
    styleId: 2381595161,
    css: '.doctorDetailWrapper[data-jsx="2381595161"] {padding-top: 15px;position: absolute;height: 100%;width: 100%;}.leaflet-container[data-jsx="2381595161"] {height:50px;width:50px;}.doctorHeader[data-jsx="2381595161"] {margin-bottom: 20px;}.doctor-description[data-jsx="2381595161"] {margin-bottom: 10px;}.doctor-map[data-jsx="2381595161"] {margin-bottom: 90px;}'
  }));
};

exports.default = DoctorDetail;