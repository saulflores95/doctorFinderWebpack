'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HospitalHeader = require('./hosHeader/HospitalHeader');

var _HospitalHeader2 = _interopRequireDefault(_HospitalHeader);

var _DetailMap = require('../../map/DetailMap');

var _DetailMap2 = _interopRequireDefault(_DetailMap);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactGridSystem = require('react-grid-system');

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HospitalDetail = function HospitalDetail(_ref) {
  var hospital = _ref.hospital;
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 2919882871
  }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_reactGridSystem.Container, null, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 6 }, _react2.default.createElement(_HospitalHeader2.default, { hospital: hospital })), _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 12 }, _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement('div', {
      'data-jsx': 2919882871
    }, 'Map Loading...') }, _react2.default.createElement(_DetailMap2.default, { props: hospital })))))), _react2.default.createElement(_style2.default, {
    styleId: 2919882871,
    css: '.wrapper[data-jsx="2919882871"] {padding-top: 15px;padding-bottom: 30px;}'
  }));
};

exports.default = HospitalDetail;