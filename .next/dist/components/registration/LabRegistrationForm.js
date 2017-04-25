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

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _reactGridSystem = require('react-grid-system');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _close = require('material-ui/svg-icons/navigation/close');

var _close2 = _interopRequireDefault(_close);

var _Uploader = require('../uploader/Uploader');

var _Uploader2 = _interopRequireDefault(_Uploader);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _RegistrationMap = require('./RegistrationMap');

var _RegistrationMap2 = _interopRequireDefault(_RegistrationMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabRegistrationForm = function (_Component) {
  (0, _inherits3.default)(LabRegistrationForm, _Component);

  function LabRegistrationForm() {
    (0, _classCallCheck3.default)(this, LabRegistrationForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LabRegistrationForm.__proto__ || (0, _getPrototypeOf2.default)(LabRegistrationForm)).call(this));

    _this.state = {
      toogleState: false,
      value: 'Podologia',
      position: [32, 100],
      url: 'http://www.gatt.org/re/clt/wp-content/uploads/wovaxproperty-images/3224367/3224367-default.jpg'
    };
    return _this;
  }

  (0, _createClass3.default)(LabRegistrationForm, [{
    key: 'handleImageChange',
    value: function handleImageChange(url) {
      if (url) {
        this.setState({
          url: url
        });
        console.log('State From Parent Change: ', this.state.url);
      } else if (!url) {
        console.log('url not found');
      }
    }
  }, {
    key: 'mapClick',
    value: function mapClick(event) {
      console.log('user right-clicked on map coordinates: ' + event.latlng.toString());
      this.setState({
        position: event.latlng
      });
      console.log(this.state.position);

      // L.marker(event.latlng)
    }
  }, {
    key: 'addLab',
    value: function addLab() {
      var name = this.refs.clinicName.getValue();
      var img = this.state.url;
      var phone = this.refs.phone.getValue();
      var tag = this.refs.tag.getValue();
      var lab = {
        name: name,
        img: img,
        phone: phone,
        position: this.state.position,
        tag: tag
      };

      console.log(lab);
      if (lab) {
        _axios2.default.post('/api/lab-registration', {
          name: lab.name,
          img: lab.img,
          phone: lab.phone,
          position: lab.position,
          tag: lab.tag
        }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var styles = {
        paper: {
          width: '100%',
          padding: '0 0 0 0',
          marginTop: '50px'

        },
        formStyle: {},
        formDivisor: {
          padding: '0 0 30px 0'
        },
        formMessageDivisor: {
          padding: '0 0 10px 0'
        },
        customWidth: {
          width: '95%'
        },
        container: {
          paddingTop: 35,
          paddingBottom: 90
        },
        img: {
          paddingTop: 25,
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block'
        }
      };

      return _react2.default.createElement('div', { style: styles.container }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_reactGridSystem.Container, null, _react2.default.createElement(_Paper2.default, { style: styles.paper, zDepth: 3 }, _react2.default.createElement(_reactGridSystem.Container, null, _react2.default.createElement('form', { className: 'new-doctor' }, _react2.default.createElement('div', { style: styles.formDivisor }, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 6, lg: 6 }, _react2.default.createElement('img', { width: '250', height: '200', style: styles.img, src: this.state.url })), _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 6, lg: 6 }, _react2.default.createElement(_Uploader2.default, { handle: this.handleImageChange.bind(this) })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Laboratory Name',
        ref: 'clinicName',
        fullWidth: true
      })))), _react2.default.createElement('div', { style: styles.formDivisor }, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 12, lg: 12 }, _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement('div', null, 'Map Loading...') }, _react2.default.createElement(_RegistrationMap2.default, { position: this.state.position, mapClick: this.mapClick.bind(this) }))), _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 12, lg: 12 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'tag',
        ref: 'tag',
        fullWidth: true
      }))), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Phone Number',
        ref: 'phone',
        fullWidth: false
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 2 }, _react2.default.createElement(_RaisedButton2.default, {
        label: 'Register',
        onClick: this.addLab.bind(this),
        className: 'button-submit',
        primary: true
      }))))))))));
    }
  }]);

  return LabRegistrationForm;
}(_react.Component);

exports.default = LabRegistrationForm;