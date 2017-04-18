'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UpperNavigationFilter = require('../MainLayout/UpperNavigation/UpperNavigationFilter');

var _UpperNavigationFilter2 = _interopRequireDefault(_UpperNavigationFilter);

var _BottomNavigation = require('../MainLayout/BottomNavigation/BottomNavigation');

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement('div', { className: 'wrapperHeight', 'data-jsx': 3203686991
  }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 3203686991
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.0.3/dist/leaflet.css', 'data-jsx': 3203686991
  }), _react2.default.createElement('style', null, '.leaflet-container {\n            height: 100%;\n            width: 100%;\n          }\n\n          body{\n            background-color: rgb(0, 188, 212);\n            width: 100%;\n            height: 100%;\n            margin: 0;\n            top: 0;\n            overflow-x: hidden;\n            overflow-y: hidden;\n\n          }\n          html {\n            height: 100%;\n            width: 100%;\n            margin: 0;\n            top: 0;\n            box-sizing: border-box;\n            overflow-y: hidden;\n          }\n          #__next {\n            height: 100%;\n          }\n          [data-reactroot],[data-reactid=\'2\'] {\n            height: 100%;\n          }\n          ')), _react2.default.createElement('div', { className: 'container', 'data-jsx': 3203686991
  }, _react2.default.createElement('div', {
    'data-jsx': 3203686991
  }, _react2.default.createElement('header', { id: 'header', 'data-jsx': 3203686991
  }, _react2.default.createElement(_UpperNavigationFilter2.default, null)), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3203686991
  }, props.children)), _react2.default.createElement('footer', { className: 'footerF', 'data-jsx': 3203686991
  }, _react2.default.createElement(_BottomNavigation2.default, null))), _react2.default.createElement(_style2.default, {
    styleId: 3203686991,
    css: '.container[data-jsx="3203686991"] {max-width: var(--site-width);margin:0 auto;overflow-y: hidden;overflow-x: hidden;height: 100%;}.footerF[data-jsx="3203686991"] {height: 56px;width: 100%;bottom: 0px;left: 0px;position: fixed;z-index: 10000;margin-top: -56px;}.wrapperHeight[data-jsx="3203686991"] {height: 100%;}.content[data-jsx="3203686991"] {-webkit-flex: 1;-moz-flex: 1;flex: 1;position: absolute;top: 69px;width: 100%;bottom: 0;padding-bottom: 56px;overflow-x: hidden;overflow-y: auto;}#header[data-jsx="3203686991"] {height: 69px;position: fixed;width: 100%;top: 0;z-index: 999;}'
  }));
};

exports.default = App;