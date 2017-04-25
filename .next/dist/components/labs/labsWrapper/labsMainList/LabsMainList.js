'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGridSystem = require('react-grid-system');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imageChooser = function imageChooser(props) {
  if (props === 'Certus') {
    return 'https://www.ifbcertus.edu.pe/blog/wp-content/uploads/2016/09/blog_cover_certus.png';
  }
  if (props === 'Gamboa') {
    return 'https://pbs.twimg.com/profile_images/705493262472056832/i_GpO3EZ.jpg';
  } else {
    console.log('No tag fits the choosen image');
  }
};

var LabsMainList = function LabsMainList(_ref) {
  var lab = _ref.lab;
  return _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 4 }, _react2.default.createElement('div', { className: 'back', 'data-jsx': 2862031727
  }, _react2.default.createElement('h1', { className: 'h1', 'data-jsx': 2862031727
  }, _react2.default.createElement(_link2.default, { href: '/laboratories-map?id=' + lab, as: '/laboratories-map/' + lab }, _react2.default.createElement('div', { className: 'link', 'data-jsx': 2862031727
  }, lab))), _react2.default.createElement(_link2.default, { href: '/laboratories-map?id=' + lab, as: '/laboratories-map/' + lab }, _react2.default.createElement('img', {
    className: 'img',
    src: imageChooser(lab),
    'data-jsx': 2862031727
  }))), _react2.default.createElement(_style2.default, {
    styleId: 2862031727,
    css: '.img[data-jsx="2862031727"] {width: 100%;height: 250px;filter: brightness(40%);-webkit-transition: 0.2s;-moz-transition: 0.2s;-ms-transition: 0.2s;transition: 0.2s;}.img[data-jsx="2862031727"]:hover {border-radius: 50%;-webkit-transition: 0.2s;-moz-transition: 0.2s;-ms-transition: 0.2s;transition: 0.2s;}.h1[data-jsx="2862031727"] {position: absolute;width: 100%;z-index: 1;text-align: center;margin-top: 20%;}.back[data-jsx="2862031727"] {position: relative;height: 250px;width: 100%;margin-bottom: 30px;}.link[data-jsx="2862031727"] {color: white;font-size: 30px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxhYnNcXGxhYnNXcmFwcGVyXFxsYWJzTWFpbkxpc3RcXExhYnNNYWluTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmdCLEFBQ0osNkJBQ1EsWUFDRSxjQUNVLHdCQUNQLHFGQUNsQixDQUVXLG1DQUNTLG1CQUNGLHFGQUNsQixDQUNJLDRCQUNnQixtQkFDUCxZQUNELFdBQ1EsbUJBQ0gsZ0JBQ2pCLENBQ00sOEJBQ2MsbUJBQ0wsY0FDRixZQUNRLG9CQUNyQixDQUNNLDhCQUNRLGFBQ0csZ0JBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHNcXGxhYnNcXGxhYnNXcmFwcGVyXFxsYWJzTWFpbkxpc3RcXExhYnNNYWluTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9TYXVsL0RvY3VtZW50cy9HaXRIdWIvZG9jdG9yRmluZGVyV2VicGFjayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDb2x9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBpbWFnZUNob29zZXIgPSAocHJvcHMpID0+IHtcclxuICBpZiAocHJvcHMgPT09ICdDZXJ0dXMnKSB7XHJcbiAgICByZXR1cm4gJ2h0dHBzOi8vd3d3LmlmYmNlcnR1cy5lZHUucGUvYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9ibG9nX2NvdmVyX2NlcnR1cy5wbmcnXHJcbiAgfVxyXG4gIGlmIChwcm9wcyA9PT0gJ0dhbWJvYScpIHtcclxuICAgIHJldHVybiAnaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzcwNTQ5MzI2MjQ3MjA1NjgzMi9pX0dwTzNFWi5qcGcnXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdObyB0YWcgZml0cyB0aGUgY2hvb3NlbiBpbWFnZScpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBMYWJzTWFpbkxpc3QgPSAoe2xhYn0pID0+IChcclxuICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs0fT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrJz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0naDEnPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvbGFib3JhdG9yaWVzLW1hcD9pZD0ke2xhYn1gfSBhcz17YC9sYWJvcmF0b3JpZXMtbWFwLyR7bGFifWB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmsnPntsYWJ9PC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8TGluayBocmVmPXtgL2xhYm9yYXRvcmllcy1tYXA/aWQ9JHtsYWJ9YH0gYXM9e2AvbGFib3JhdG9yaWVzLW1hcC8ke2xhYn1gfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2ltZydcclxuICAgICAgICAgIHNyYz17aW1hZ2VDaG9vc2VyKGxhYil9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDQwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltZzpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgIH1cclxuICAgICAgLmgxIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5iYWNrIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5saW5rIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvQ29sPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYWJzTWFpbkxpc3RcclxuIl19 */\n/*@ sourceURL=components\\labs\\labsWrapper\\labsMainList\\LabsMainList.js */'
  }));
};

exports.default = LabsMainList;