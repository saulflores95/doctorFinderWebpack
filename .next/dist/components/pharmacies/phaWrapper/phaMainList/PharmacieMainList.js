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
  if (props === 'Roma') {
    return 'http://www.lacronica.com/Edicionenlinea/Fotos/Noticias/1138343-N.JPG';
  }
  if (props === 'farmacia') {
    return 'http://toma-control.com/wp-content/themes/cronadyn/images/puntos-de-venta/benavides.png';
  } else {
    console.log('No tag fits the choosen image');
  }
};

var PharmacieMainList = function PharmacieMainList(_ref) {
  var pharmacie = _ref.pharmacie;
  return _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 12, lg: 4 }, _react2.default.createElement('div', { className: 'back', 'data-jsx': 1207755141
  }, _react2.default.createElement('h1', { className: 'h1', 'data-jsx': 1207755141
  }, _react2.default.createElement(_link2.default, { href: '/pharmacie-map?id=' + pharmacie, as: '/pharmacie-map/' + pharmacie }, _react2.default.createElement('div', { className: 'link', 'data-jsx': 1207755141
  }, pharmacie))), _react2.default.createElement(_link2.default, { href: '/pharmacie-map?id=' + pharmacie, as: '/pharmacie-map/' + pharmacie }, _react2.default.createElement('img', {
    className: 'img',
    src: imageChooser(pharmacie),
    'data-jsx': 1207755141
  }))), _react2.default.createElement(_style2.default, {
    styleId: 1207755141,
    css: '.img[data-jsx="1207755141"] {width: 100%;height: 250px;filter: brightness(40%);-webkit-transition: 0.2s;-moz-transition: 0.2s;-ms-transition: 0.2s;transition: 0.2s;}.img[data-jsx="1207755141"]:hover {border-radius: 50%;-webkit-transition: 0.2s;-moz-transition: 0.2s;-ms-transition: 0.2s;transition: 0.2s;}.h1[data-jsx="1207755141"] {position: absolute;width: 100%;z-index: 1;text-align: center;margin-top: 20%;}.back[data-jsx="1207755141"] {position: relative;height: 250px;width: 100%;margin-bottom: 30px;}.link[data-jsx="1207755141"] {color: white;font-size: 30px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBoYXJtYWNpZXNcXHBoYVdyYXBwZXJcXHBoYU1haW5MaXN0XFxQaGFybWFjaWVNYWluTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2dCLEFBQ0osNkJBQ1EsWUFDRSxjQUNVLHdCQUNQLHFGQUNsQixDQUVXLG1DQUNTLG1CQUNGLHFGQUNsQixDQUNJLDRCQUNnQixtQkFDUCxZQUNELFdBQ1EsbUJBQ0gsZ0JBQ2pCLENBQ00sOEJBQ2MsbUJBQ0wsY0FDRixZQUNRLG9CQUNyQixDQUNNLDhCQUNRLGFBQ0csZ0JBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHNcXHBoYXJtYWNpZXNcXHBoYVdyYXBwZXJcXHBoYU1haW5MaXN0XFxQaGFybWFjaWVNYWluTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9TYXVsL0RvY3VtZW50cy9HaXRIdWIvZG9jdG9yRmluZGVyV2VicGFjayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDb2x9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBpbWFnZUNob29zZXIgPSAocHJvcHMpID0+IHtcclxuICBpZiAocHJvcHMgPT09ICdSb21hJykge1xyXG4gICAgcmV0dXJuICdodHRwOi8vd3d3LmxhY3JvbmljYS5jb20vRWRpY2lvbmVubGluZWEvRm90b3MvTm90aWNpYXMvMTEzODM0My1OLkpQRydcclxuICB9XHJcbiAgaWYgKHByb3BzID09PSAnZmFybWFjaWEnKSB7XHJcbiAgICByZXR1cm4gJ2h0dHA6Ly90b21hLWNvbnRyb2wuY29tL3dwLWNvbnRlbnQvdGhlbWVzL2Nyb25hZHluL2ltYWdlcy9wdW50b3MtZGUtdmVudGEvYmVuYXZpZGVzLnBuZydcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ05vIHRhZyBmaXRzIHRoZSBjaG9vc2VuIGltYWdlJylcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFBoYXJtYWNpZU1haW5MaXN0ID0gKHtwaGFybWFjaWV9KSA9PiAoXHJcbiAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17NH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmFjayc+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9J2gxJz5cclxuICAgICAgICA8TGluayBocmVmPXtgL3BoYXJtYWNpZS1tYXA/aWQ9JHtwaGFybWFjaWV9YH0gYXM9e2AvcGhhcm1hY2llLW1hcC8ke3BoYXJtYWNpZX1gfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rJz5cclxuICAgICAgICAgICAge3BoYXJtYWNpZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9oMT5cclxuICAgICAgPExpbmsgaHJlZj17YC9waGFybWFjaWUtbWFwP2lkPSR7cGhhcm1hY2llfWB9IGFzPXtgL3BoYXJtYWNpZS1tYXAvJHtwaGFybWFjaWV9YH0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdpbWcnXHJcbiAgICAgICAgICBzcmM9e2ltYWdlQ2hvb3NlcihwaGFybWFjaWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg0MCUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWc6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICB9XHJcbiAgICAgIC5oMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgICAgfVxyXG4gICAgICAuYmFjayB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgfVxyXG4gICAgICAubGluayB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvQ29sPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaGFybWFjaWVNYWluTGlzdFxyXG4iXX0= */\n/*@ sourceURL=components\\pharmacies\\phaWrapper\\phaMainList\\PharmacieMainList.js */'
  }));
};

exports.default = PharmacieMainList;