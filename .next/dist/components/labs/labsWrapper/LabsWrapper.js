'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _SearchNav = require('../../MainLayout/UpperNavigation/searchNav/SearchNav');

var _SearchNav2 = _interopRequireDefault(_SearchNav);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var labsList = function labsList(props) {
  var arr = props.map(function (lab) {
    return lab.tag;
  });
  var uniqueArr = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });
  return uniqueArr;
};

var LabsWrapper = function LabsWrapper(_ref) {
  var labs = _ref.labs;
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 2931437880
  }, _react2.default.createElement('div', { className: 'wrapperList', 'data-jsx': 2931437880
  }, _react2.default.createElement(_SearchNav2.default, { props: labsList(labs), identifier: 'lab' })), _react2.default.createElement(_style2.default, {
    styleId: 2931437880,
    css: '.wrapper[data-jsx="2931437880"] {padding-top: 15px;margin-bottom: 70px;}.wrapperList[data-jsx="2931437880"] {margin-right: 25px;}'
  }));
};

exports.default = LabsWrapper;