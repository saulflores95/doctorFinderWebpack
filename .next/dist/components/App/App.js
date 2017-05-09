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
  }), _react2.default.createElement('meta', { name: 'theme-color', content: '#2196f3', 'data-jsx': 3203686991
  }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.json', 'data-jsx': 3203686991
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.0.3/dist/leaflet.css', 'data-jsx': 3203686991
  }), _react2.default.createElement('style', null, '.leaflet-container {\n            height: 100%;\n            width: 100%;\n          }\n          .leaflet-control-attribution a {\n            display:none;\n          }\n          body{\n            background-color: rgb(0, 188, 212);\n            width: 100%;\n            height: 100%;\n            margin: 0;\n            top: 0;\n            overflow-x: hidden;\n            overflow-y: hidden;\n\n          }\n          html {\n            height: 100%;\n            width: 100%;\n            margin: 0;\n            top: 0;\n            box-sizing: border-box;\n            overflow-y: hidden;\n          }\n          #__next {\n            height: 100%;\n          }\n          [data-reactroot],[data-reactid=\'2\'] {\n            height: 100%;\n          }\n          ')), _react2.default.createElement('div', { className: 'container', 'data-jsx': 3203686991
  }, _react2.default.createElement('div', {
    'data-jsx': 3203686991
  }, _react2.default.createElement('header', { id: 'header', 'data-jsx': 3203686991
  }, _react2.default.createElement(_UpperNavigationFilter2.default, null)), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3203686991
  }, props.children)), _react2.default.createElement('footer', { className: 'footerF', 'data-jsx': 3203686991
  }, _react2.default.createElement(_BottomNavigation2.default, null))), _react2.default.createElement(_style2.default, {
    styleId: 3203686991,
    css: '.container[data-jsx="3203686991"] {max-width: var(--site-width);margin:0 auto;overflow-y: hidden;overflow-x: hidden;height: 100%;}.footerF[data-jsx="3203686991"] {height: 56px;width: 100%;bottom: 0px;left: 0px;position: fixed;z-index: 10000;margin-top: -56px;}.wrapperHeight[data-jsx="3203686991"] {height: 100%;}.content[data-jsx="3203686991"] {-webkit-flex: 1;-moz-flex: 1;flex: 1;position: absolute;top: 69px;width: 100%;bottom: 0;padding-bottom: 56px;overflow-x: hidden;overflow-y: auto;}#header[data-jsx="3203686991"] {height: 69px;position: fixed;width: 100%;top: 0;z-index: 999;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFwcFxcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZETyxBQUVhLG1DQUNtQiw2QkFDZixjQUNLLG1CQUNBLG1CQUNOLGFBQ2QsQ0FFUyxpQ0FDSyxhQUNELFlBQ0EsWUFDRixVQUNNLGdCQUNELGVBQ0csa0JBQ25CLENBRWUsdUNBQ0QsYUFDZCxDQUVTLGlDQUNBLHFDQUNXLG1CQUNULFVBQ0UsWUFDRixVQUNXLHFCQUNGLG1CQUNGLGlCQUNsQixDQUVRLGdDQUNNLGFBQ0csZ0JBQ0osWUFDTCxPQUNNLGFBQ2QiLCJmaWxlIjoiY29tcG9uZW50c1xcQXBwXFxBcHAuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvU2F1bC9Eb2N1bWVudHMvR2l0SHViL2RvY3RvckZpbmRlcldlYnBhY2siLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBVcHBlck5hdmlnYXRpb25GaWx0ZXIgZnJvbSAnLi4vTWFpbkxheW91dC9VcHBlck5hdmlnYXRpb24vVXBwZXJOYXZpZ2F0aW9uRmlsdGVyJ1xyXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbkNvbXBvbmVudCBmcm9tICcuLi9NYWluTGF5b3V0L0JvdHRvbU5hdmlnYXRpb24vQm90dG9tTmF2aWdhdGlvbidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgQXBwID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXJIZWlnaHQnPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiAgY29udGVudD1cIiMyMTk2ZjNcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zdGF0aWMvbWFuaWZlc3QuanNvblwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9sZWFmbGV0QDEuMC4zL2Rpc3QvbGVhZmxldC5jc3NcIiAvPlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtgLmxlYWZsZXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24gYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODgsIDIxMik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNfX25leHQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBbZGF0YS1yZWFjdHJvb3RdLFtkYXRhLXJlYWN0aWQ9JzInXSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGhlYWRlciBpZD0naGVhZGVyJz5cclxuICAgICAgICAgICAgPFVwcGVyTmF2aWdhdGlvbkZpbHRlciAvPlxyXG4gICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdmb290ZXJGJz5cclxuICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IHZhcigtLXNpdGUtd2lkdGgpO1xyXG4gICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXJGIHtcclxuICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01NnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndyYXBwZXJIZWlnaHQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNjlweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDU2cHg7XHJcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2hlYWRlciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY5cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiJdfQ== */\n/*@ sourceURL=components\\App\\App.js */'
  }));
};

exports.default = App;