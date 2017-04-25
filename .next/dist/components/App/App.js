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

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\doctorFinderWebpack\\components\\App\\App.js';


var App = function App(props) {
  return _react2.default.createElement('div', { className: 'wrapperHeight', 'data-jsx': 3203686991,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 3203686991,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.json', 'data-jsx': 3203686991,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.0.3/dist/leaflet.css', 'data-jsx': 3203686991,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, '.leaflet-container {\n            height: 100%;\n            width: 100%;\n          }\n\n          body{\n            background-color: rgb(0, 188, 212);\n            width: 100%;\n            height: 100%;\n            margin: 0;\n            top: 0;\n            overflow-x: hidden;\n            overflow-y: hidden;\n\n          }\n          html {\n            height: 100%;\n            width: 100%;\n            margin: 0;\n            top: 0;\n            box-sizing: border-box;\n            overflow-y: hidden;\n          }\n          #__next {\n            height: 100%;\n          }\n          [data-reactroot],[data-reactid=\'2\'] {\n            height: 100%;\n          }\n          ')), _react2.default.createElement('div', { className: 'container', 'data-jsx': 3203686991,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 3203686991,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('header', { id: 'header', 'data-jsx': 3203686991,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(_UpperNavigationFilter2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3203686991,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, props.children)), _react2.default.createElement('footer', { className: 'footerF', 'data-jsx': 3203686991,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement(_BottomNavigation2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }))), _react2.default.createElement(_style2.default, {
    styleId: 3203686991,
    css: '.container[data-jsx="3203686991"] {max-width: var(--site-width);margin:0 auto;overflow-y: hidden;overflow-x: hidden;height: 100%;}.footerF[data-jsx="3203686991"] {height: 56px;width: 100%;bottom: 0px;left: 0px;position: fixed;z-index: 10000;margin-top: -56px;}.wrapperHeight[data-jsx="3203686991"] {height: 100%;}.content[data-jsx="3203686991"] {-webkit-flex: 1;-moz-flex: 1;flex: 1;position: absolute;top: 69px;width: 100%;bottom: 0;padding-bottom: 56px;overflow-x: hidden;overflow-y: auto;}#header[data-jsx="3203686991"] {height: 69px;position: fixed;width: 100%;top: 0;z-index: 999;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFwcFxcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBETyxBQUVhLG1DQUNtQiw2QkFDZixjQUNLLG1CQUNBLG1CQUNOLGFBQ2QsQ0FFUyxpQ0FDSyxhQUNELFlBQ0EsWUFDRixVQUNNLGdCQUNELGVBQ0csa0JBQ25CLENBRWUsdUNBQ0QsYUFDZCxDQUVTLGlDQUNBLHFDQUNXLG1CQUNULFVBQ0UsWUFDRixVQUNXLHFCQUNGLG1CQUNGLGlCQUNsQixDQUVRLGdDQUNNLGFBQ0csZ0JBQ0osWUFDTCxPQUNNLGFBQ2QiLCJmaWxlIjoiY29tcG9uZW50c1xcQXBwXFxBcHAuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvU2F1bC9Eb2N1bWVudHMvR2l0SHViL2RvY3RvckZpbmRlcldlYnBhY2siLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBVcHBlck5hdmlnYXRpb25GaWx0ZXIgZnJvbSAnLi4vTWFpbkxheW91dC9VcHBlck5hdmlnYXRpb24vVXBwZXJOYXZpZ2F0aW9uRmlsdGVyJ1xyXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbkNvbXBvbmVudCBmcm9tICcuLi9NYWluTGF5b3V0L0JvdHRvbU5hdmlnYXRpb24vQm90dG9tTmF2aWdhdGlvbidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgQXBwID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXJIZWlnaHQnPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc3RhdGljL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjAuMy9kaXN0L2xlYWZsZXQuY3NzXCIgLz5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7YC5sZWFmbGV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE4OCwgMjEyKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFtkYXRhLXJlYWN0cm9vdF0sW2RhdGEtcmVhY3RpZD0nMiddIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aGVhZGVyIGlkPSdoZWFkZXInPlxyXG4gICAgICAgICAgICA8VXBwZXJOYXZpZ2F0aW9uRmlsdGVyIC8+XHJcbiAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2Zvb3RlckYnPlxyXG4gICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25Db21wb25lbnQgLz5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PlxyXG4gICAgICB7YFxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIG1heC13aWR0aDogdmFyKC0tc2l0ZS13aWR0aCk7XHJcbiAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlckYge1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTU2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud3JhcHBlckhlaWdodCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA2OXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTZweDtcclxuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjaGVhZGVyIHtcclxuICAgICAgICAgIGhlaWdodDogNjlweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIl19 */\n/*@ sourceURL=components\\App\\App.js */'
  }));
};

exports.default = App;