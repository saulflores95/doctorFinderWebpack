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

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\doctorFinderWebpack\\pages\\doctors.js?entry';


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
    css: '.container[data-jsx="2872047744"] {height: 100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkb2N0b3JzLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCTyxBQUNXLG1DQUNHLGFBQ2QiLCJmaWxlIjoicGFnZXNcXGRvY3RvcnMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvU2F1bC9Eb2N1bWVudHMvR2l0SHViL2RvY3RvckZpbmRlcldlYnBhY2siLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXHJcbmltcG9ydCBEb2N0b3JXcmFwcGVyIGZyb20gICcuLi9jb21wb25lbnRzL2RvY3RvcnMvZG9jV3JhcHBlci9Eb2N0b3JXcmFwcGVyJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwL0FwcCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxubGV0IGRvY3RvcnNGZXRjaGVkID0gW11cclxuXHJcbmxldCBkb2N0b3JGZXRjaCA9IGF4aW9zLmdldCgnL2FwaS9kb2N0b3JzJylcclxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIGRvY3RvckZldGNoLmRvY3RvcnMgPSByZXNwb25zZS5kYXRhLmRhdGFcclxuICAgIHJldHVybiBkb2N0b3JGZXRjaFxyXG4gIH0pXHJcbiAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH0pO1xyXG5cclxuY29uc3QgZG9jdG9ycyA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgIDxBcHA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPERvY3RvcldyYXBwZXIgZG9jdG9yUHJvcD17ZG9jdG9yRmV0Y2h9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0FwcD5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9jdG9yc1xyXG4iXX0= */\n/*@ sourceURL=pages\\doctors.js?entry */'
  }));
};

exports.default = doctors;