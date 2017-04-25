'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hospitalImg = 'http://wildhunt.org/wp-content/uploads/2016/04/maxresdefault.jpg';
var pharmacieImg = 'http://1.bp.blogspot.com/-ieQbmNVAFIY/UIAz7tNDBJI/AAAAAAAAqNU/MtfSy_q9b4w/s1600/pharmacie.jpg';
var clinicImg = 'http://www.health-local.com/images/businesses/medium_crop/50884.jpg';
var labImg = 'https://www.qualitylaboratory.com/images/slider1.jpg';

var CatMenu = function CatMenu() {
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 2974695039
  }, _react2.default.createElement('div', { className: 'wrapperList', 'data-jsx': 2974695039
  }, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 4 }, _react2.default.createElement('div', { className: 'back', 'data-jsx': 2974695039
  }, _react2.default.createElement('h1', { className: 'h1', 'data-jsx': 2974695039
  }, _react2.default.createElement(_link2.default, { href: '/hospitals' }, _react2.default.createElement('a', { className: 'link', 'data-jsx': 2974695039
  }, 'Hospitals'))), _react2.default.createElement(_link2.default, { href: '/hospitals' }, _react2.default.createElement('img', {
    className: 'img',
    src: hospitalImg,
    'data-jsx': 2974695039
  })))), _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 4 }, _react2.default.createElement('div', { className: 'back', 'data-jsx': 2974695039
  }, _react2.default.createElement('h1', { className: 'h1', 'data-jsx': 2974695039
  }, _react2.default.createElement(_link2.default, { href: '/clinics' }, _react2.default.createElement('a', { className: 'link', 'data-jsx': 2974695039
  }, 'Clinics'))), _react2.default.createElement(_link2.default, { href: '/clinics' }, _react2.default.createElement('img', {
    className: 'img',
    src: clinicImg,
    'data-jsx': 2974695039
  })))), _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 4 }, _react2.default.createElement('div', { className: 'back', 'data-jsx': 2974695039
  }, _react2.default.createElement('h1', { className: 'h1', 'data-jsx': 2974695039
  }, _react2.default.createElement(_link2.default, { href: '/pharmacies' }, _react2.default.createElement('a', { className: 'link', 'data-jsx': 2974695039
  }, 'Pharmacies'))), _react2.default.createElement(_link2.default, { href: '/pharmacies' }, _react2.default.createElement('img', {
    className: 'img',
    src: pharmacieImg,
    'data-jsx': 2974695039
  })))), _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 4 }, _react2.default.createElement('div', { className: 'back', 'data-jsx': 2974695039
  }, _react2.default.createElement('h1', { className: 'h1', 'data-jsx': 2974695039
  }, _react2.default.createElement(_link2.default, { href: '/laboratories' }, _react2.default.createElement('a', { className: 'link', 'data-jsx': 2974695039
  }, 'Laboratories'))), _react2.default.createElement(_link2.default, { href: '/laboratories' }, _react2.default.createElement('img', {
    className: 'img',
    src: labImg,
    'data-jsx': 2974695039
  })))))), _react2.default.createElement(_style2.default, {
    styleId: 2974695039,
    css: '.img[data-jsx="2974695039"] {width: 100%;height: 250px;filter: brightness(40%);-webkit-transition: 0.2s;-moz-transition: 0.2s;-ms-transition: 0.2s;transition: 0.2s;}.img[data-jsx="2974695039"]:hover {border-radius: 50%;-webkit-transition: 0.2s;-moz-transition: 0.2s;-ms-transition: 0.2s;transition: 0.2s;}.h1[data-jsx="2974695039"] {position: absolute;width: 100%;z-index: 1;text-align: center;margin-top: 20%;}.back[data-jsx="2974695039"] {position: relative;height: 250px;width: 100%;margin-bottom: 30px;}.link[data-jsx="2974695039"] {color: white;font-size: 30px;text-decoration:none;}.wrapperList[data-jsx="2974695039"] {margin-left: 25px;margin-right: 25px;}.wrapper[data-jsx="2974695039"] {padding-top: 15px;}'
  }));
};

exports.default = CatMenu;