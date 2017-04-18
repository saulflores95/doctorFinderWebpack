'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _phone = require('react-icons/lib/fa/phone');

var _phone2 = _interopRequireDefault(_phone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var addDoctor = function addDoctor(event) {
  event.preventDefault();
  var firstName = _this.refs.firstName.getValue();
  var lastName = _this.refs.lastName.getValue();
  var email = _this.refs.email.getValue();
  var message = _this.refs.message.getValue();

  var contactInformation = {
    firstName: firstName,
    lastName: lastName,
    message: message,
    email: email
  };

  console.log(firstName);
  console.log(lastName);
  console.log(message);
  console.log(email);
  console.log('*************************');
  console.log(contactInformation);
};
var DoctorContactForm = function DoctorContactForm(doctor) {
  return _react2.default.createElement('div', {
    'data-jsx': 1816382615
  }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement('form', { className: 'new-doctor', onSubmit: addDoctor, 'data-jsx': 1816382615
  }, _react2.default.createElement(_TextField2.default, {
    hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 1816382615
    }, 'First Name')
    //  ref='firstName'
    , fullWidth: true
  }), _react2.default.createElement(_TextField2.default, {
    hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 1816382615
    }, 'Last Name')
    //  ref='lastName'
    , fullWidth: true
  }), _react2.default.createElement(_TextField2.default, {
    hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 1816382615
    }, 'Email')
    //  ref='email'
    , fullWidth: true
  }), _react2.default.createElement(_TextField2.default, {
    hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 1816382615
    }, 'Message'),
    fullWidth: true
    //  ref='message'
    , multiLine: true,
    rows: 2,
    rowsMax: 4
  }), _react2.default.createElement(_RaisedButton2.default, {
    label: _react2.default.createElement('span', { className: 'label-text', 'data-jsx': 1816382615
    }, 'Send'),
    type: 'submit',
    primary: true
  }), _react2.default.createElement(_RaisedButton2.default, {
    label: _react2.default.createElement('span', { className: 'label-text', 'data-jsx': 1816382615
    }, 'Call'),
    labelPosition: 'before',
    primary: false,
    icon: _react2.default.createElement(_phone2.default, { className: 'label-icon' })
  }))), _react2.default.createElement(_style2.default, {
    styleId: 1816382615,
    css: '.label[data-jsx="1816382615"] {color: white !important;}'
  }));
};

exports.default = DoctorContactForm;