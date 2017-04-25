'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkStyle = {
  margin: '15px',
  border: 'solid 1px',
  width: '20%',
  display: 'inline-block',
  height: '50px',
  textAlign: 'center',
  borderRadius: '35%',
  cursor: 'pointer'
};

var Header = function Header() {
  return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'Hello Welcome To HCB DEV interface'), _react2.default.createElement(_link2.default, { href: '/api/doctors' }, _react2.default.createElement('div', { style: linkStyle }, 'API')), _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('div', { style: linkStyle }, 'App')), _react2.default.createElement(_link2.default, { href: '/doctor-registration' }, _react2.default.createElement('div', { style: linkStyle }, 'Add Doctors')), _react2.default.createElement(_link2.default, { href: '/hospital-registration' }, _react2.default.createElement('div', { style: linkStyle }, 'Add Hospital')), _react2.default.createElement(_link2.default, { href: '/clinic-registration' }, _react2.default.createElement('div', { style: linkStyle }, 'Add Clinics')), _react2.default.createElement(_link2.default, { href: '/lab-registration' }, _react2.default.createElement('div', { style: linkStyle }, 'Add Labs')), _react2.default.createElement(_link2.default, { href: '/pharmacie-registration' }, _react2.default.createElement('div', { style: linkStyle }, 'Add Pharmacies')), _react2.default.createElement('div', { style: linkStyle }, _react2.default.createElement('a', { href: 'http://healthcarebaja.com/webmail', target: '_blank' }, 'Webmail')));
};

exports.default = Header;