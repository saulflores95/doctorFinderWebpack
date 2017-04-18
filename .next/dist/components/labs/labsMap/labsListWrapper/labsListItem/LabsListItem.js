'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _info = require('material-ui/svg-icons/action/info');

var _info2 = _interopRequireDefault(_info);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabsListItem = function LabsListItem(lab) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_link2.default, { href: '/laboratories-detail?id=' + lab._id }, _react2.default.createElement(_List.List, null, _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { className: 'img-pharmacieSingle', src: lab.img }),
    rightIcon: _react2.default.createElement(_info2.default, { className: 'icon-pharmacie' }),
    primaryText: _react2.default.createElement('div', { className: 'pharmacie-primaryText' }, lab.name),
    className: 'pharmacieList-item'
  }), _react2.default.createElement(_Divider2.default, { inset: true })))));
};

exports.default = LabsListItem;