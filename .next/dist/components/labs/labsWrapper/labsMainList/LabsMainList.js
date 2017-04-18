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

var imageChooser = function imageChooser(props) {
  if (props === 'Certus') {
    return 'https://www.ifbcertus.edu.pe/blog/wp-content/uploads/2016/09/blog_cover_certus.png';
  }
  if (props === 'Gamboa') {
    return 'https://pbs.twimg.com/profile_images/705493262472056832/i_GpO3EZ.jpg';
  } else {
    console.log('No tag fits the choosen image');
  }
};

var LabsMainList = function LabsMainList(_ref) {
  var lab = _ref.lab;
  return _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 4 }, _react2.default.createElement('div', { className: 'back', 'data-jsx': 2862031727
  }, _react2.default.createElement('h1', { className: 'h1', 'data-jsx': 2862031727
  }, _react2.default.createElement(_link2.default, { href: '/laboratories-map?id=' + lab, as: '/laboratories-map/' + lab }, _react2.default.createElement('div', { className: 'link', 'data-jsx': 2862031727
  }, lab))), _react2.default.createElement(_link2.default, { href: '/laboratories-map?id=' + lab, as: '/laboratories-map/' + lab }, _react2.default.createElement('img', {
    className: 'img',
    src: imageChooser(lab),
    'data-jsx': 2862031727
  }))), _react2.default.createElement(_style2.default, {
    styleId: 2862031727,
    css: '.img[data-jsx="2862031727"] {width: 100%;height: 250px;filter: brightness(40%);-webkit-transition: 0.2s;-moz-transition: 0.2s;-ms-transition: 0.2s;transition: 0.2s;}.img[data-jsx="2862031727"]:hover {border-radius: 50%;-webkit-transition: 0.2s;-moz-transition: 0.2s;-ms-transition: 0.2s;transition: 0.2s;}.h1[data-jsx="2862031727"] {position: absolute;width: 100%;z-index: 1;text-align: center;margin-top: 20%;}.back[data-jsx="2862031727"] {position: relative;height: 250px;width: 100%;margin-bottom: 30px;}.link[data-jsx="2862031727"] {color: white;font-size: 30px;}'
  }));
};

exports.default = LabsMainList;