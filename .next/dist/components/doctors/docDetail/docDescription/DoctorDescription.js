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

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DoctorDescription = function (_Component) {
  (0, _inherits3.default)(DoctorDescription, _Component);

  function DoctorDescription() {
    (0, _classCallCheck3.default)(this, DoctorDescription);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DoctorDescription.__proto__ || (0, _getPrototypeOf2.default)(DoctorDescription)).call(this));

    _this.state = {
      open: false
    };
    return _this;
  }

  (0, _createClass3.default)(DoctorDescription, [{
    key: 'handleOpen',
    value: function handleOpen() {
      this.setState({ open: true });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = {
        textCenter: {
          textAlign: 'center',
          paddingBottom: 15
        }
      };
      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: _react2.default.createElement('span', { className: 'label-text' }, 'Close'),
        primary: true,
        onClick: this.handleClose.bind(this)
      })];
      return _react2.default.createElement('div', {
        'data-jsx': 3650263738
      }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_Paper2.default, { zDepth: 1, className: 'paper' }, _react2.default.createElement('div', {
        'data-jsx': 3650263738
      }, _react2.default.createElement(_reactGridSystem.Container, { style: styles.textCenter }, _react2.default.createElement('p', { className: 'doctorDescription', 'data-jsx': 3650263738
      }, this.props.doctor[0].description), _react2.default.createElement(_RaisedButton2.default, { label: 'Read more', style: styles.label, onClick: this.handleOpen.bind(this) }))))), _react2.default.createElement('div', {
        'data-jsx': 3650263738
      }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_Dialog2.default, {
        title: 'Doctor description',
        actions: actions,
        modal: false,
        open: this.state.open,
        onRequestClose: this.handleClose.bind(this)
      }, _react2.default.createElement('div', {
        'data-jsx': 3650263738
      }, _react2.default.createElement('p', { className: 'doctorDescriptionDialog', 'data-jsx': 3650263738
      }, this.props.doctor[0].description))))), _react2.default.createElement(_style2.default, {
        styleId: 3650263738,
        css: '.paper[data-jsx="3650263738"] {padding: 5px 0 10px 0;margin-bottom: 20px;text-align: center;}p[data-jsx="3650263738"] {line-height: 20px;width: 100%;height: 60px;overflow:hidden            }.divider[data-jsx="3650263738"]{padding-top:75;}.doctorDescription[data-jsx="3650263738"] {font-size: 16px;overflow: hidden;height: 80px;}.doctorDescriptionDialog[data-jsx="3650263738"] {height: 40vh;overflow-y: scroll;overflow-x: hidden;}'
      }));
    }
  }]);

  return DoctorDescription;
}(_react.Component);

exports.default = DoctorDescription;