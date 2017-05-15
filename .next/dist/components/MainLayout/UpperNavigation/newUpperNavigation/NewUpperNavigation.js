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

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imgUrl = '/static/healthcarebaja.png';
var NewUpperNavigation = function NewUpperNavigation() {
  return _react2.default.createElement('div', { className: 'container', 'data-jsx': 2858621963
  }, _react2.default.createElement('ul', { className: 'ul', 'data-jsx': 2858621963
  }, _react2.default.createElement('li', { className: 'li', 'data-jsx': 2858621963
  }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('img', { alt: 'Healthcare Baja', src: imgUrl, style: { marginLeft: 20 }, 'data-jsx': 2858621963
  }))), _react2.default.createElement('li', { className: 'liRight', 'data-jsx': 2858621963
  }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_IconMenu2.default, {
    iconButtonElement: _react2.default.createElement(_IconButton2.default, { iconStyle: { color: 'white' } }, _react2.default.createElement(_moreVert2.default, null)),
    anchorOrigin: { horizontal: 'left', vertical: 'top' },
    targetOrigin: { horizontal: 'left', vertical: 'top' }
  }, _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Send feedback' }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help' }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' }))))), _react2.default.createElement(_style2.default, {
    styleId: 2858621963,
    css: '.ul[data-jsx="2858621963"] {list-style-type: none;margin: 0;padding: 0;overflow: hidden;background-color: white;position: fixed;top: 0;width: 100%;padding-bottom: 10px;padding-top: 10px;z-index: 9999;background-color: #2d517b;}.li[data-jsx="2858621963"] {float: left;}.li[data-jsx="2858621963"] a[data-jsx="2858621963"] {display: block;color: white;text-align: center;text-decoration: none;}.liRight[data-jsx="2858621963"] {float: right;}.liRight[data-jsx="2858621963"] a[data-jsx="2858621963"] {display: block;color: gray;text-align: center;padding: 14px 16px;text-decoration: none;}.liRight[data-jsx="2858621963"] a[data-jsx="2858621963"]:hover:not(.active) {background-color: #131;}.active[data-jsx="2858621963"] {background-color: #4CAF50;}.wrap[data-jsx="2858621963"] {margin: 0px;display: inline-block;position: relative;height: 25px;float: right;padding: 0;position: relative;}input[type="text"][data-jsx="2858621963"] {height: 25px;font-size: 20px;display: inline-block;font-family: "Montserrat";font-weight: 100;border: none;outline: none;color: #555;padding: 30px;padding-right: 25px;width: 0px;position: absolute;top: 0;right: 0;background: none;z-index: 3;-webkit-transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);-moz-transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);-ms-transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);cursor: pointer;}input[type="text"][data-jsx="2858621963"]:focus:hover {border-bottom: 1px solid #BBB;}input[type="text"][data-jsx="2858621963"]:focus {width: 50vw;z-index: 1;border-bottom: 1px solid #BBB;cursor: text;}input[type="submit"][data-jsx="2858621963"] {height: 50px;width: 63px;display: inline-block;color:red;float: right;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;text-indent: -10000px;border: none;position: absolute;top: 0;right: 0;z-index: 2;cursor: pointer;opacity: 0.4;cursor: pointer;-webkit-transition: opacity .4s ease;-moz-transition: opacity .4s ease;-ms-transition: opacity .4s ease;transition: opacity .4s ease;}input[type="submit"][data-jsx="2858621963"]:hover {opacity: 0.8;}img[data-jsx="2858621963"]{width: 100%;height: 100%;}.container[data-jsx="2858621963"] {height: 100%;}'
  }));
};

exports.default = NewUpperNavigation;