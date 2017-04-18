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

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/App/App');

var _App2 = _interopRequireDefault(_App);

var _PharmacieGeneralMap = require('../components/pharmacies/phaMap/PharmacieGeneralMap');

var _PharmacieGeneralMap2 = _interopRequireDefault(_PharmacieGeneralMap);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var pharmacies = require('../pharmacies.json');
      var pharmacie = pharmacies.pharmacies.filter(function (pharmacie) {
        return _this2.props.id === pharmacie.tag;
      });
      console.log(pharmacie);
      return _react2.default.createElement('div', { className: 'container', 'data-jsx': 2157492608
      }, _react2.default.createElement(_App2.default, { className: 'container' }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 2157492608
      }, _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement('div', {
          'data-jsx': 2157492608
        }, '\'Hi Human, I am working to bring the data...\'') }, _react2.default.createElement(_PharmacieGeneralMap2.default, { pharmacies: pharmacie })))), _react2.default.createElement(_style2.default, {
        styleId: 2157492608,
        css: '.container[data-jsx="2157492608"] {height: 100%;}'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var id = _ref.query.id;

      return { id: id };
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;