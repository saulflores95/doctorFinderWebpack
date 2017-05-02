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
    css: '.container[data-jsx="3203686991"] {max-width: var(--site-width);margin:0 auto;overflow-y: hidden;overflow-x: hidden;height: 100%;}.footerF[data-jsx="3203686991"] {height: 56px;width: 100%;bottom: 0px;left: 0px;position: fixed;z-index: 10000;margin-top: -56px;}.wrapperHeight[data-jsx="3203686991"] {height: 100%;}.content[data-jsx="3203686991"] {-webkit-flex: 1;-moz-flex: 1;flex: 1;position: absolute;top: 69px;width: 100%;bottom: 0;padding-bottom: 56px;overflow-x: hidden;overflow-y: auto;}#header[data-jsx="3203686991"] {height: 69px;position: fixed;width: 100%;top: 0;z-index: 999;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFwcFxcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRETyxBQUVhLG1DQUNtQiw2QkFDZixjQUNLLG1CQUNBLG1CQUNOLGFBQ2QsQ0FFUyxpQ0FDSyxhQUNELFlBQ0EsWUFDRixVQUNNLGdCQUNELGVBQ0csa0JBQ25CLENBRWUsdUNBQ0QsYUFDZCxDQUVTLGlDQUNBLHFDQUNXLG1CQUNULFVBQ0UsWUFDRixVQUNXLHFCQUNGLG1CQUNGLGlCQUNsQixDQUVRLGdDQUNNLGFBQ0csZ0JBQ0osWUFDTCxPQUNNLGFBQ2QiLCJmaWxlIjoiY29tcG9uZW50c1xcQXBwXFxBcHAuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvU2F1bC9Eb2N1bWVudHMvR2l0SHViL2RvY3RvckZpbmRlcldlYnBhY2siLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBVcHBlck5hdmlnYXRpb25GaWx0ZXIgZnJvbSAnLi4vTWFpbkxheW91dC9VcHBlck5hdmlnYXRpb24vVXBwZXJOYXZpZ2F0aW9uRmlsdGVyJ1xyXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbkNvbXBvbmVudCBmcm9tICcuLi9NYWluTGF5b3V0L0JvdHRvbU5hdmlnYXRpb24vQm90dG9tTmF2aWdhdGlvbidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgQXBwID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXJIZWlnaHQnPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc3RhdGljL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjAuMy9kaXN0L2xlYWZsZXQuY3NzXCIgLz5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7YC5sZWFmbGV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTg4LCAyMTIpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgW2RhdGEtcmVhY3Ryb290XSxbZGF0YS1yZWFjdGlkPScyJ10ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoZWFkZXIgaWQ9J2hlYWRlcic+XHJcbiAgICAgICAgICAgIDxVcHBlck5hdmlnYXRpb25GaWx0ZXIgLz5cclxuICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT0nZm9vdGVyRic+XHJcbiAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1zaXRlLXdpZHRoKTtcclxuICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyRiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53cmFwcGVySGVpZ2h0IHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDY5cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1NnB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNoZWFkZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2OXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iXX0= */\n/*@ sourceURL=components\\App\\App.js */'
  }));
};

exports.default = App;