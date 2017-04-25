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

var _Uploader = require('../uploader/Uploader');

var _Uploader2 = _interopRequireDefault(_Uploader);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _RegistrationMap = require('./RegistrationMap');

var _RegistrationMap2 = _interopRequireDefault(_RegistrationMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClinicRegistrationForm = function (_Component) {
  (0, _inherits3.default)(ClinicRegistrationForm, _Component);

  function ClinicRegistrationForm() {
    (0, _classCallCheck3.default)(this, ClinicRegistrationForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ClinicRegistrationForm.__proto__ || (0, _getPrototypeOf2.default)(ClinicRegistrationForm)).call(this));

    _this.state = {
      toogleState: false,
      value: 'Dermatology',
      position: [32, 100],
      url: 'http://www.gatt.org/re/clt/wp-content/uploads/wovaxproperty-images/3224367/3224367-default.jpg'
    };
    return _this;
  }

  (0, _createClass3.default)(ClinicRegistrationForm, [{
    key: 'toggleChecked',
    value: function toggleChecked(Checkbox) {
      console.log('this was pressed');
      if (this.state.toogleState == false) {
        this.state.toogleState = true;
      } else {
        this.state.toogleState = false;
      }
      console.log(this.state.toogleState);
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
    key: 'handleChange',
    value: function handleChange(event, index, value) {
      this.setState({ value: value });
    }
  }, {
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
    key: 'addClinic',
    value: function addClinic() {
      var name = this.refs.clinicName.getValue();
      var img = this.state.url;
      var specialty = this.state.value;
      var specific = {
        one: this.refs.specificOne.getValue(),
        two: this.refs.specificTwo.getValue(),
        three: this.refs.specificThree.getValue(),
        four: this.refs.specificFour.getValue(),
        five: this.refs.specificFive.getValue(),
        six: this.refs.specificSix.getValue()
      };
      var email = this.refs.email.getValue();
      var clinic = {
        name: name,
        img: img,
        specific: specific,
        email: email,
        position: this.state.position,
        specialty: specialty
      };
      console.log(clinic);
      console.log(specific);
      if (clinic) {
        _axios2.default.post('/api/clinic-registration', {
          name: clinic.name,
          img: clinic.img,
          specific: clinic.specific,
          email: clinic.email,
          position: clinic.position,
          specialty: clinic.specialty
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
          paddingBottom: 85
        },
        img: {
          paddingTop: 25,
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block'
        }
      };

      return _react2.default.createElement('div', { style: styles.container }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_reactGridSystem.Container, null, _react2.default.createElement(_Paper2.default, { style: styles.paper, zDepth: 3 }, _react2.default.createElement(_reactGridSystem.Container, null, _react2.default.createElement('form', { className: 'new-doctor' }, _react2.default.createElement('div', { style: styles.formDivisor }, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 6, lg: 6 }, _react2.default.createElement('img', { width: '250', height: '200', style: styles.img, src: this.state.url })), _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 6, lg: 6 }, _react2.default.createElement(_Uploader2.default, { handle: this.handleImageChange.bind(this) })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Clinic Name',
        ref: 'clinicName',
        fullWidth: true
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_SelectField2.default, {
        floatingLabelText: 'Specialty',
        value: this.state.value,
        onChange: this.handleChange.bind(this)
      }, _react2.default.createElement(_MenuItem2.default, { value: 'Dermatology', primaryText: 'Dermatology' }), _react2.default.createElement(_MenuItem2.default, { value: 'Dental', primaryText: 'Dental ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Hair Transplant', primaryText: 'Hair Transplant  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Foot', primaryText: 'Foot ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Oncology', primaryText: 'Oncology ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Fertility Control ', primaryText: 'Fertility Control  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Eye', primaryText: 'Eye ' }), _react2.default.createElement(_MenuItem2.default, { value: 'SPA ', primaryText: 'SPA  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Pediatric', primaryText: 'Pediatric ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Plastic Surgery', primaryText: 'Plastic Surgery  ' }))))), _react2.default.createElement('div', { style: styles.formDivisor }, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Specific Speaciality',
        ref: 'specificOne',
        fullWidth: true
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Specific Speaciality 2',
        ref: 'specificTwo',
        fullWidth: true
      }))), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Specific Speaciality 3',
        ref: 'specificThree',
        fullWidth: true
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Specific Speaciality 4',
        ref: 'specificFour',
        fullWidth: true
      }))), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Specific Speaciality 5',
        ref: 'specificFive',
        fullWidth: true
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Specific Speaciality 6',
        ref: 'specificSix',
        fullWidth: true
      }))), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 12, lg: 12 }, _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement('div', null, 'Map Loading...') }, _react2.default.createElement(_RegistrationMap2.default, { position: this.state.position, mapClick: this.mapClick.bind(this) }))))), _react2.default.createElement('div', { style: styles.formDivisor }, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'E-mail',
        ref: 'email',
        fullWidth: false
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Phone Number',
        ref: 'phone',
        fullWidth: false
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 2 }, _react2.default.createElement(_RaisedButton2.default, {
        label: 'Register',
        onClick: this.addClinic.bind(this),
        className: 'button-submit',
        primary: true
      }))))))))));
    }
  }]);

  return ClinicRegistrationForm;
}(_react.Component);

exports.default = ClinicRegistrationForm;