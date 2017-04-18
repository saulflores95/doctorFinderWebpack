'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchNav = require('../../MainLayout/UpperNavigation/searchNav/SearchNav');

var _SearchNav2 = _interopRequireDefault(_SearchNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pharmaciesList = function pharmaciesList(props) {
  console.log(props);
  var arr = props.map(function (pharmacie) {
    return pharmacie.tag;
  });
  var uniqueArr = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });
  return uniqueArr;
};

var PharmacieWrapper = function PharmacieWrapper(_ref) {
  var pharmacies = _ref.pharmacies;
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 382953016
  }, _react2.default.createElement('div', { className: 'wrapperList', 'data-jsx': 382953016
  }, _react2.default.createElement(_SearchNav2.default, { props: pharmaciesList(pharmacies), identifier: 'pharmacie' })), _react2.default.createElement(_style2.default, {
    styleId: 382953016,
    css: '.wrapper[data-jsx="382953016"] {margin-bottom: 70px;padding-top: 15px;}.wrapperList[data-jsx="382953016"] {margin-right: 25px;}'
  }));
};

exports.default = PharmacieWrapper;