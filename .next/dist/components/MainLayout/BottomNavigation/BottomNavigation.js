'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _BottomNavigation = require('material-ui/BottomNavigation');

var _mapMarker = require('react-icons/lib/fa/map-marker');

var _mapMarker2 = _interopRequireDefault(_mapMarker);

var _hospitalO = require('react-icons/lib/fa/hospital-o');

var _hospitalO2 = _interopRequireDefault(_hospitalO);

var _userMd = require('react-icons/lib/fa/user-md');

var _userMd2 = _interopRequireDefault(_userMd);

var _plus = require('react-icons/lib/fa/plus');

var _plus2 = _interopRequireDefault(_plus);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\doctorFinderWebpack\\components\\MainLayout\\BottomNavigation\\BottomNavigation.js';


var ButtomNavigationComponet = function (_Component) {
  (0, _inherits3.default)(ButtomNavigationComponet, _Component);

  function ButtomNavigationComponet() {
    (0, _classCallCheck3.default)(this, ButtomNavigationComponet);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ButtomNavigationComponet.__proto__ || (0, _getPrototypeOf2.default)(ButtomNavigationComponet)).call(this));

    _this.state = {
      selectedIndex: 0
    };
    return _this;
  }

  (0, _createClass3.default)(ButtomNavigationComponet, [{
    key: 'select',
    value: function select(index) {
      return this.setState({ selectedIndex: index });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = {
        icon: {
          height: 24,
          textAlign: 'center'
        },
        bottomNavItem: {
          marginLeft: 'auto',
          marginRight: 'auto',
          minWidth: 80,
          maxWidth: 80,
          display: 'block'
        }
      };
      return _react2.default.createElement('div', { className: 'footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_MuiThemeProvider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_BottomNavigation.BottomNavigation, { selectedIndex: this.state.selectedIndex, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_link2.default, { href: '/doctors', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
        icon: _react2.default.createElement(_userMd2.default, { style: styles.icon, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }),
        onClick: function onClick() {
          return _this2.select(0);
        },
        style: styles.bottomNavItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), _react2.default.createElement(_link2.default, { href: '/categories', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
        icon: _react2.default.createElement(_hospitalO2.default, { style: styles.icon, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }),
        onClick: function onClick() {
          return _this2.select(1);
        },
        style: styles.bottomNavItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })), _react2.default.createElement(_link2.default, { href: '/map', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
        icon: _react2.default.createElement(_mapMarker2.default, { style: styles.icon, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }),
        onClick: function onClick() {
          return _this2.select(2);
        },
        style: styles.bottomNavItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), _react2.default.createElement(_link2.default, { href: '/contact-us', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
        icon: _react2.default.createElement(_plus2.default, { style: styles.icon, __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }),
        onClick: function onClick() {
          return _this2.select(3);
        },
        style: styles.bottomNavItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })))));
    }
  }]);

  return ButtomNavigationComponet;
}(_react.Component);

exports.default = ButtomNavigationComponet;