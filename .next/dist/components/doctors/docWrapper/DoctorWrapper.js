'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DocCatList = require('./docCatList/DocCatList');

var _DocCatList2 = _interopRequireDefault(_DocCatList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\doctorFinderWebpack\\components\\doctors\\docWrapper\\DoctorWrapper.js';

var doctors = require('../../../doctors.json');

var doctorCategory = function doctorCategory(props) {
  var arr = props.map(function (doctor) {
    return doctor.specialty;
  });
  var uniqueArr = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });
  return uniqueArr;
};

var DoctorWrapper = function DoctorWrapper(doctorProp) {
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 1220542769,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, console.log('Doctors PROP', doctorProp), doctors.doctors.length ? doctorCategory(doctors.doctors).map(function (specialty) {
    return _react2.default.createElement(_DocCatList2.default, { specialty: specialty, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    });
  }) : _react2.default.createElement('div', {
    'data-jsx': 1220542769,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Loading'), _react2.default.createElement(_style2.default, {
    styleId: 1220542769,
    css: '.wrapper[data-jsx="1220542769"] {padding-top: 10px;width: 100%;height: 100%;overflow-y: hidden;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGRvY3RvcnNcXGRvY1dyYXBwZXJcXERvY3RvcldyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJPLEFBQ1MsaUNBQ1Usa0JBQ04sWUFDQyxhQUNNLG1CQUNwQiIsImZpbGUiOiJjb21wb25lbnRzXFxkb2N0b3JzXFxkb2NXcmFwcGVyXFxEb2N0b3JXcmFwcGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1NhdWwvRG9jdW1lbnRzL0dpdEh1Yi9kb2N0b3JGaW5kZXJXZWJwYWNrIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRG9jQ2F0TGlzdCBmcm9tICcuL2RvY0NhdExpc3QvRG9jQ2F0TGlzdCdcclxubGV0IGRvY3RvcnMgPSByZXF1aXJlKCcuLi8uLi8uLi9kb2N0b3JzLmpzb24nKVxyXG5cclxuY29uc3QgZG9jdG9yQ2F0ZWdvcnkgPSAocHJvcHMpID0+IHtcclxuICB2YXIgYXJyID0gcHJvcHMubWFwKChkb2N0b3IpID0+IHtcclxuICAgIHJldHVybiBkb2N0b3Iuc3BlY2lhbHR5XHJcbiAgfSlcclxuICB2YXIgdW5pcXVlQXJyID0gYXJyLmZpbHRlcihmdW5jdGlvbiAoZWxlbSwgaW5kZXgsIHNlbGYpIHtcclxuICAgIHJldHVybiBpbmRleCA9PT0gc2VsZi5pbmRleE9mKGVsZW0pXHJcbiAgfSlcclxuICByZXR1cm4gdW5pcXVlQXJyXHJcbn1cclxuXHJcbmNvbnN0IERvY3RvcldyYXBwZXIgPSAoZG9jdG9yUHJvcCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cclxuICAgICAge2NvbnNvbGUubG9nKCdEb2N0b3JzIFBST1AnLCBkb2N0b3JQcm9wKX1cclxuICAgICAge2RvY3RvcnMuZG9jdG9ycy5sZW5ndGhcclxuICAgICAgPyBkb2N0b3JDYXRlZ29yeShkb2N0b3JzLmRvY3RvcnMpLm1hcChzcGVjaWFsdHkgPT4gPERvY0NhdExpc3Qgc3BlY2lhbHR5PXtzcGVjaWFsdHl9IC8+KSA6IDxkaXY+TG9hZGluZzwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA8c3R5bGUganN4PlxyXG4gICAgICB7YFxyXG4gICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yV3JhcHBlclxyXG4iXX0= */\n/*@ sourceURL=components\\doctors\\docWrapper\\DoctorWrapper.js */'
  }));
};

exports.default = DoctorWrapper;