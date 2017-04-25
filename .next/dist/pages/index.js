'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _DoctorWrapper = require('../components/doctors/docWrapper/DoctorWrapper');

var _DoctorWrapper2 = _interopRequireDefault(_DoctorWrapper);

var _App = require('../components/App/App');

var _App2 = _interopRequireDefault(_App);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\doctorFinderWebpack\\pages\\index.js?entry';


var doctorsFetched = [];

var doctorFetch = _axios2.default.get('/api/doctors').then(function (response) {
  doctorFetch.doctors = response.data.data;
  return doctorFetch;
}).catch(function (error) {
  console.log(error);
});

var doctors = function doctors() {
  return _react2.default.createElement('div', { className: 'container', 'data-jsx': 2872047744,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 2872047744,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_DoctorWrapper2.default, { doctorProp: doctorFetch, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }))), _react2.default.createElement(_style2.default, {
    styleId: 2872047744,
    css: '.container[data-jsx="2872047744"] {height: 100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Qk8sQUFDVyxtQ0FDRyxhQUNkIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9TYXVsL0RvY3VtZW50cy9HaXRIdWIvZG9jdG9yRmluZGVyV2VicGFjayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcclxuaW1wb3J0IERvY3RvcldyYXBwZXIgZnJvbSAgJy4uL2NvbXBvbmVudHMvZG9jdG9ycy9kb2NXcmFwcGVyL0RvY3RvcldyYXBwZXInXHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAvQXBwJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5sZXQgZG9jdG9yc0ZldGNoZWQgPSBbXVxyXG5cclxubGV0IGRvY3RvckZldGNoID0gYXhpb3MuZ2V0KCcvYXBpL2RvY3RvcnMnKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgZG9jdG9yRmV0Y2guZG9jdG9ycyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxyXG4gICAgcmV0dXJuIGRvY3RvckZldGNoXHJcbiAgfSlcclxuICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfSk7XHJcblxyXG5jb25zdCBkb2N0b3JzID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgPEFwcD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8RG9jdG9yV3JhcHBlciBkb2N0b3JQcm9wPXtkb2N0b3JGZXRjaH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQXBwPlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb2N0b3JzXHJcbiJdfQ== */\n/*@ sourceURL=pages\\index.js?entry */'
  }));
};

exports.default = doctors;