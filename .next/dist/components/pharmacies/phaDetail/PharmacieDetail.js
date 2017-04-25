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

var _PharmacieHeader = require('./phaHeader/PharmacieHeader');

var _PharmacieHeader2 = _interopRequireDefault(_PharmacieHeader);

var _DetailMap = require('../../map/DetailMap');

var _DetailMap2 = _interopRequireDefault(_DetailMap);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PharmacieDetail = function PharmacieDetail(_ref) {
  var pharmacie = _ref.pharmacie;

  return _react2.default.createElement('div', { className: 'pharmacieDetailContainer', 'data-jsx': 1320162074
  }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_reactGridSystem.Container, null, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 12 }, _react2.default.createElement(_PharmacieHeader2.default, { pharmacie: pharmacie[0] })), _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 12 }, _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement('div', {
      'data-jsx': 1320162074
    }, 'loading') }, _react2.default.createElement(_DetailMap2.default, { props: pharmacie[0] })))))), _react2.default.createElement(_style2.default, {
    styleId: 1320162074,
    css: '.pharmacieDetailContainer[data-jsx="1320162074"] {padding-top: 15px;padding-bottom: 30px;}'
  }));
};
exports.default = PharmacieDetail;