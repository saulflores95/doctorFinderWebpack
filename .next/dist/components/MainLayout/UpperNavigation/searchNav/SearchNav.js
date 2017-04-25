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

var _DoctorList = require('../../../doctors/docWrapper/docListWrapper/docList/DoctorList');

var _DoctorList2 = _interopRequireDefault(_DoctorList);

var _LabsMainList = require('../../../labs/labsWrapper/labsMainList/LabsMainList');

var _LabsMainList2 = _interopRequireDefault(_LabsMainList);

var _PharmacieMainList = require('../../../pharmacies/phaWrapper/phaMainList/PharmacieMainList');

var _PharmacieMainList2 = _interopRequireDefault(_PharmacieMainList);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchNav = function (_Component) {
  (0, _inherits3.default)(SearchNav, _Component);

  function SearchNav() {
    (0, _classCallCheck3.default)(this, SearchNav);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchNav.__proto__ || (0, _getPrototypeOf2.default)(SearchNav)).call(this));

    _this.state = {
      search: ''
    };
    return _this;
  }

  (0, _createClass3.default)(SearchNav, [{
    key: 'updateSearch',
    value: function updateSearch(event) {
      this.setState({ search: event.target.value.substr(0, 20) });
    }
  }, {
    key: 'updateProp',
    value: function updateProp(props, identifier) {
      switch (identifier) {
        case 'doctor':
          return _react2.default.createElement(_DoctorList2.default, { doctor: props });
        case 'lab':
          return _react2.default.createElement(_LabsMainList2.default, { lab: props });
        case 'pharmacie':
          return _react2.default.createElement(_PharmacieMainList2.default, { pharmacie: props });
        default:
          null;
      }
    }
  }, {
    key: 'updateFilter',
    value: function updateFilter(props, identifier) {
      var _this2 = this;

      switch (identifier) {
        case 'doctor':
          return this.props.props.filter(function (props) {
            return props.name.toLowerCase().indexOf(_this2.state.search) !== -1;
          });
        case 'lab':
        case 'pharmacie':
          return this.props.props.filter(function (props) {
            return props.toLowerCase().indexOf(_this2.state.search) !== -1;
          });
        default:
          null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var imgUrl = 'https://s30.postimg.org/biuab6sk1/image.jpg';
      var identifier = this.props.identifier;
      var props = this.props.props;
      console.log('Search nav identifier', identifier);
      var filterArregelo = this.updateFilter(props, identifier);
      return _react2.default.createElement('div', {
        'data-jsx': 4187923579
      }, _react2.default.createElement('div', {
        'data-jsx': 4187923579
      }, _react2.default.createElement('ul', { className: 'ul', 'data-jsx': 4187923579
      }, _react2.default.createElement('li', { className: 'li', 'data-jsx': 4187923579
      }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('img', { alt: 'Healthcare Baja', src: imgUrl, 'data-jsx': 4187923579
      }))), _react2.default.createElement('li', { className: 'liRight', 'data-jsx': 4187923579
      }, _react2.default.createElement('div', { className: 'wrap', 'data-jsx': 4187923579
      }, _react2.default.createElement('form', { action: '', 'data-jsx': 4187923579
      }, _react2.default.createElement('label', { className: 'labelSearch', htmlFor: 'search', 'data-jsx': 4187923579
      }, 'Search'), _react2.default.createElement('input', {
        className: 'search',
        name: 'search',
        type: 'text',
        placeholder: 'Search...',
        value: this.state.search,
        onChange: this.updateSearch.bind(this), 'data-jsx': 4187923579
      }), _react2.default.createElement('label', { className: 'labelSearch', htmlFor: 'search', 'data-jsx': 4187923579
      }, 'Rechercher'), _react2.default.createElement('input', { className: 'search_submit', name: 'searcht', value: 'Rechercher', type: 'submit', 'data-jsx': 4187923579
      })))))), _react2.default.createElement('div', {
        'data-jsx': 4187923579
      }, _react2.default.createElement(_reactMotionUiPack2.default, {
        component: false,
        enter: {
          translateX: (0, _reactMotion.spring)(0, { stiffness: 400, damping: 25 }),
          opacity: 1
        },
        leave: {
          translateX: 350,
          opacity: 0
        }
      }, _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 4187923579
      }, filterArregelo.map(function (props) {
        return _this3.updateProp(props, identifier);
      })))), _react2.default.createElement(_style2.default, {
        styleId: 4187923579,
        css: '.search[data-jsx="4187923579"] {text-transform: lowercase;}.labelSearch[data-jsx="4187923579"] {display: none;}.ul[data-jsx="4187923579"] {list-style-type: none;margin: 0;padding: 0;overflow: hidden;background-color: white;position: fixed;top: 0;width: 100%;padding-bottom: 10px;padding-top: 10px;z-index: 9999;}.li[data-jsx="4187923579"] {float: left;}.li[data-jsx="4187923579"] a[data-jsx="4187923579"] {display: block;color: white;text-align: center;text-decoration: none;}.liRight[data-jsx="4187923579"] {float: right;}.liRight[data-jsx="4187923579"] a[data-jsx="4187923579"] {display: block;color: gray;text-align: center;padding: 14px 16px;text-decoration: none;}.liRight[data-jsx="4187923579"] a[data-jsx="4187923579"]:hover:not(.active) {background-color: #131;}.active[data-jsx="4187923579"] {background-color: #4CAF50;}.wrap[data-jsx="4187923579"] {margin: 0px;display: inline-block;position: relative;height: 25px;float: right;padding: 0;position: relative;}.searchBar[data-jsx="4187923579"] {background-image: url(https://cdn0.iconfinder.com/data/icons/octicons/1024/search-128.png) !important;background-repeat: no-repeat !important;background-size: 50px 50px !important;}input[type="text"][data-jsx="4187923579"] {height: 25px;font-size: 20px;display: inline-block;font-family: "Montserrat";font-weight: 100;border: none;outline: none;color: #555;padding: 30px;padding-right: 25px;padding-left: 60px;width: 0px;position: absolute;top: 0;right: 0;background: none;z-index: 3;-webkit-transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);-moz-transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);-ms-transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);cursor: pointer;}input[type="text"][data-jsx="4187923579"]:focus:hover {border-bottom: 1px solid #BBB;}input[type="text"][data-jsx="4187923579"]:focus {width: 50vw;z-index: 1;border-bottom: 1px solid #BBB;cursor: text;}input[type="submit"][data-jsx="4187923579"] {height: 50px;width: 63px;display: inline-block;color:red;float: right;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;text-indent: -10000px;border: none;position: absolute;top: 0;right: 0;z-index: 2;cursor: pointer;opacity: 0.4;cursor: pointer;-webkit-transition: opacity .4s ease;-moz-transition: opacity .4s ease;-ms-transition: opacity .4s ease;transition: opacity .4s ease;}input[type="submit"][data-jsx="4187923579"]:hover {opacity: 0.8;}img[data-jsx="4187923579"]{width: 100%;height: 100%;}.list[data-jsx="4187923579"] {padding-left: px !important;}.wrapper[data-jsx="4187923579"] {margin-left: 10px;}'
      }));
    }
  }]);

  return SearchNav;
}(_react.Component);

exports.default = SearchNav;