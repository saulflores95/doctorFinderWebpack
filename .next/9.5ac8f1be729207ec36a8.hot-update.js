webpackHotUpdate(9,{

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(584);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailMap = function (_Component) {
  (0, _inherits3.default)(DetailMap, _Component);

  function DetailMap() {
    (0, _classCallCheck3.default)(this, DetailMap);

    return (0, _possibleConstructorReturn3.default)(this, (DetailMap.__proto__ || (0, _getPrototypeOf2.default)(DetailMap)).apply(this, arguments));
  }

  (0, _createClass3.default)(DetailMap, [{
    key: 'render',
    value: function render() {
      var _require = __webpack_require__(824),
          Map = _require.Map,
          Marker = _require.Marker,
          Popup = _require.Popup,
          TileLayer = _require.TileLayer;

      var position = [32.5194358, -117.0101997];
      var propPoistion = [Number(this.props.props.latitude), Number(this.props.props.longitude)];
      console.log(propPoistion);
      return _react2.default.createElement('div', {
        'data-jsx': 830334703
      }, _react2.default.createElement('div', { className: 'map', 'data-jsx': 830334703
      }, _react2.default.createElement(Map, { center: position, zoom: 12 }, _react2.default.createElement(TileLayer, {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      }), _react2.default.createElement(Marker, { position: propPoistion }, _react2.default.createElement(Popup, null, _react2.default.createElement('span', {
        'data-jsx': 830334703
      }, _react2.default.createElement('a', { href: 'http://maps.google.com/?q=' + this.props.props.latitude + ',' + this.props.props.longitude, 'data-jsx': 830334703
      }, ' ', _react2.default.createElement('br', {
        'data-jsx': 830334703
      }), this.props.props.name)))))), _react2.default.createElement(_style2.default, {
        styleId: 830334703,
        css: '.map[data-jsx="830334703"] {height:250px;width:100%;background-color:red;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG1hcFxcRGV0YWlsTWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCVyxBQUNPLDRCQUNTLGFBQ0YsV0FDVSxxQkFDdEIiLCJmaWxlIjoiY29tcG9uZW50c1xcbWFwXFxEZXRhaWxNYXAuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvU2F1bC9Eb2N1bWVudHMvR2l0SHViL2RvY3RvckZpbmRlcldlYnBhY2siLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgdmFyIHsgTWFwLCBNYXJrZXIsIFBvcHVwLCBUaWxlTGF5ZXIgfSA9IHJlcXVpcmUoJ3JlYWN0LWxlYWZsZXQnKVxyXG4gICAgY29uc3QgcG9zaXRpb24gPSBbMzIuNTE5NDM1OCwgLTExNy4wMTAxOTk3XVxyXG4gICAgY29uc3QgcHJvcFBvaXN0aW9uID0gW051bWJlcih0aGlzLnByb3BzLnByb3BzLmxhdGl0dWRlKSwgTnVtYmVyKHRoaXMucHJvcHMucHJvcHMubG9uZ2l0dWRlKV1cclxuICAgIGNvbnNvbGUubG9nKHByb3BQb2lzdGlvbilcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwJz5cclxuICAgICAgICAgICAgPE1hcCBjZW50ZXI9e3Bvc2l0aW9ufSB6b29tPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRpbGVMYXllclxyXG4gICAgICAgICAgICAgICAgdXJsPSdodHRwOi8ve3N9LnRpbGUub3NtLm9yZy97en0ve3h9L3t5fS5wbmcnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXtwcm9wUG9pc3Rpb259PlxyXG4gICAgICAgICAgICAgICAgPFBvcHVwPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj48YSBocmVmPXsnaHR0cDovL21hcHMuZ29vZ2xlLmNvbS8/cT0nICsgdGhpcy5wcm9wcy5wcm9wcy5sYXRpdHVkZSArICcsJyArIHRoaXMucHJvcHMucHJvcHMubG9uZ2l0dWRlfSA+IDxiciAvPnt0aGlzLnByb3BzLnByb3BzLm5hbWV9PC9hPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICAgICAgPC9NYXJrZXI+XHJcbiAgICAgICAgICAgIDwvTWFwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5tYXAge1xyXG4gICAgICAgICAgICAgIGhlaWdodDoyNTBweDtcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxuIl19 */\n/*@ sourceURL=components\\map\\DetailMap.js */'
      }));
    }
  }]);

  return DetailMap;
}(_react.Component);

exports.default = DetailMap;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Saul\\Documents\\GitHub\\doctorFinderWebpack\\components\\map\\DetailMap.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Saul\\Documents\\GitHub\\doctorFinderWebpack\\components\\map\\DetailMap.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcC9EZXRhaWxNYXAuanM/YjBhMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0I7Ozs7OztJQUVLOzs7Ozs7Ozs7Ozs2QkFFVDtxQkFDZ0M7VUFBbEM7VUFBSztVQUFRO1VBQU8scUJBQzFCOztVQUFNLFdBQVcsQ0FBQyxZQUFZLENBQzlCO1VBQU0sZUFBZSxDQUFDLE9BQU8sS0FBSyxNQUFNLE1BQU0sV0FBVyxPQUFPLEtBQUssTUFBTSxNQUMzRTtjQUFRLElBQ1I7NkJBQ0U7b0JBQ0k7QUFESix5QkFDSSx1QkFBSyxXQUFVLG1CQUNiO3lCQUFDLGNBQUQsT0FBSyxRQUFRLFVBQVUsTUFDckIsb0NBQUM7YUFHRDtBQUZFLDBCQUVELGNBQUQsVUFBUSxVQUNOLGdDQUFDLGNBQUQsT0FDRTtvQkFBTTtBQUFOLHlCQUFNLHFCQUFHLE1BQU0sK0JBQStCLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSx1QkFBM0Y7U0FBd0c7b0JBQU87QUFBUCxlQUFZLE1BQU0sTUFBTTtpQkFSbEo7YUF3Qkg7QUF4Qkc7Ozs7O0FBUmlDOztrQkFBbEIsVSIsImZpbGUiOiI5LjVhYzhmMWJlNzI5MjA3ZWMzNmE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgdmFyIHsgTWFwLCBNYXJrZXIsIFBvcHVwLCBUaWxlTGF5ZXIgfSA9IHJlcXVpcmUoJ3JlYWN0LWxlYWZsZXQnKVxyXG4gICAgY29uc3QgcG9zaXRpb24gPSBbMzIuNTE5NDM1OCwgLTExNy4wMTAxOTk3XVxyXG4gICAgY29uc3QgcHJvcFBvaXN0aW9uID0gW051bWJlcih0aGlzLnByb3BzLnByb3BzLmxhdGl0dWRlKSwgTnVtYmVyKHRoaXMucHJvcHMucHJvcHMubG9uZ2l0dWRlKV1cclxuICAgIGNvbnNvbGUubG9nKHByb3BQb2lzdGlvbilcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwJz5cclxuICAgICAgICAgICAgPE1hcCBjZW50ZXI9e3Bvc2l0aW9ufSB6b29tPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRpbGVMYXllclxyXG4gICAgICAgICAgICAgICAgdXJsPSdodHRwOi8ve3N9LnRpbGUub3NtLm9yZy97en0ve3h9L3t5fS5wbmcnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXtwcm9wUG9pc3Rpb259PlxyXG4gICAgICAgICAgICAgICAgPFBvcHVwPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj48YSBocmVmPXsnaHR0cDovL21hcHMuZ29vZ2xlLmNvbS8/cT0nICsgdGhpcy5wcm9wcy5wcm9wcy5sYXRpdHVkZSArICcsJyArIHRoaXMucHJvcHMucHJvcHMubG9uZ2l0dWRlfSA+IDxiciAvPnt0aGlzLnByb3BzLnByb3BzLm5hbWV9PC9hPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICAgICAgPC9NYXJrZXI+XHJcbiAgICAgICAgICAgIDwvTWFwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5tYXAge1xyXG4gICAgICAgICAgICAgIGhlaWdodDoyNTBweDtcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tYXAvRGV0YWlsTWFwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==