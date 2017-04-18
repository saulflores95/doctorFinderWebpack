'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactGridSystem = require('react-grid-system');

var _LabsHeader = require('./labsHeader/LabsHeader');

var _LabsHeader2 = _interopRequireDefault(_LabsHeader);

var _DetailMap = require('../../map/DetailMap');

var _DetailMap2 = _interopRequireDefault(_DetailMap);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabsDetail = function LabsDetail(_ref) {
  var lab = _ref.lab;
  return _react2.default.createElement('div', { className: 'labDetailContainer', 'data-jsx': 2361038781
  }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_reactGridSystem.Container, null, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 12 }, _react2.default.createElement(_LabsHeader2.default, { lab: lab[0] })), _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 12 }, _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement('div', {
      'data-jsx': 2361038781
    }, 'loading') }, _react2.default.createElement(_DetailMap2.default, { props: lab[0] })))))), _react2.default.createElement(_style2.default, {
    styleId: 2361038781,
    css: '.labDetailContainer[data-jsx="2361038781"] {padding-top: 15px;padding-bottom: 30px;}'
  }));
};

exports.default = LabsDetail;