'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGridSystem = require('react-grid-system');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClinicList = function ClinicList(_ref) {
  var clinic = _ref.clinic;
  return _react2.default.createElement('div', {
    'data-jsx': 1356735215
  }, _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 4 }, _react2.default.createElement('div', { className: 'back', 'data-jsx': 1356735215
  }, _react2.default.createElement('h1', { className: 'h1', 'data-jsx': 1356735215
  }, _react2.default.createElement(_link2.default, { href: '/clinic-detail?id=' + clinic._id, as: '/clinic-detail/' + clinic._id }, _react2.default.createElement('div', { className: 'link', 'data-jsx': 1356735215
  }, clinic.name))), _react2.default.createElement(_link2.default, { to: '/clinics/' + clinic._id }, _react2.default.createElement('img', {
    className: 'img',
    src: clinic.img,
    'data-jsx': 1356735215
  })))), _react2.default.createElement(_style2.default, {
    styleId: 1356735215,
    css: '.img[data-jsx="1356735215"] {width: 100%;height: 250px;filter: brightness(40%);-webkit-transition: 0.2s;-moz-transition: 0.2s;-ms-transition: 0.2s;transition: 0.2s;}.img[data-jsx="1356735215"]:hover {border-radius: 50%;-webkit-transition: 0.2s;-moz-transition: 0.2s;-ms-transition: 0.2s;transition: 0.2s;}.h1[data-jsx="1356735215"] {position: absolute;width: 100%;z-index: 1;text-align: center;margin-top: 20%;}.back[data-jsx="1356735215"] {position: relative;height: 250px;width: 100%;margin-bottom: 30px;}.link[data-jsx="1356735215"] {color: white;font-size: 30px;}'
  }));
};

exports.default = ClinicList;