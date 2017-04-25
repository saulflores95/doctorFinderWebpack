'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchNav = require('../../../MainLayout/UpperNavigation/searchNav/SearchNav');

var _SearchNav2 = _interopRequireDefault(_SearchNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DoctorListWrapper = function DoctorListWrapper(_ref) {
  var doctor = _ref.doctor;
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 1109981838
  }, _react2.default.createElement(_SearchNav2.default, { props: doctor, identifier: 'doctor' }), _react2.default.createElement(_style2.default, {
    styleId: 1109981838,
    css: '.wrapper[data-jsx="1109981838"] {padding-top: 10px;position: absolute;width: 100%;height: 100%;background-color: rgb(0, 188, 212);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGRvY3RvcnNcXGRvY1dyYXBwZXJcXGRvY0xpc3RXcmFwcGVyXFxEb2NMaXN0V3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPTyxBQUNTLGlDQUNVLGtCQUNDLG1CQUNQLFlBQ0MsYUFDc0IsbUNBQ3BDIiwiZmlsZSI6ImNvbXBvbmVudHNcXGRvY3RvcnNcXGRvY1dyYXBwZXJcXGRvY0xpc3RXcmFwcGVyXFxEb2NMaXN0V3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9TYXVsL0RvY3VtZW50cy9HaXRIdWIvZG9jdG9yRmluZGVyV2VicGFjayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlYXJjaE5hdiBmcm9tICcuLi8uLi8uLi9NYWluTGF5b3V0L1VwcGVyTmF2aWdhdGlvbi9zZWFyY2hOYXYvU2VhcmNoTmF2J1xyXG5cclxuY29uc3QgRG9jdG9yTGlzdFdyYXBwZXIgPSAoe2RvY3Rvcn0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XHJcbiAgICA8U2VhcmNoTmF2IHByb3BzPXtkb2N0b3J9IGlkZW50aWZpZXI9J2RvY3RvcicgLz5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODgsIDIxMik7XHJcbiAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcblxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JMaXN0V3JhcHBlclxyXG4iXX0= */\n/*@ sourceURL=components\\doctors\\docWrapper\\docListWrapper\\DocListWrapper.js */'
  }));
};

exports.default = DoctorListWrapper;