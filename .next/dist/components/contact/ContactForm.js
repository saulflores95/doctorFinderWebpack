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

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactForm = function ContactForm() {
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 3471983530
  }, _react2.default.createElement('div', { className: 'imgcontainer', 'data-jsx': 3471983530
  }, _react2.default.createElement('img', { src: 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/splashscreen.png', 'data-jsx': 3471983530
  })), _react2.default.createElement('h2', { className: 'text', 'data-jsx': 3471983530
  }, 'Contact us'), _react2.default.createElement('h2', { className: 'text', 'data-jsx': 3471983530
  }, 'It is our pleasure!'), _react2.default.createElement(_reactGridSystem.Container, { className: 'contactForm' }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement('div', {
    'data-jsx': 3471983530
  }, _react2.default.createElement(_TextField2.default, {
    hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 3471983530
    }, 'Name'),
    fullWidth: true
  }), _react2.default.createElement('br', {
    'data-jsx': 3471983530
  }), _react2.default.createElement(_TextField2.default, {
    hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 3471983530
    }, 'Email'),
    fullWidth: true
  }), _react2.default.createElement('br', {
    'data-jsx': 3471983530
  }), _react2.default.createElement(_TextField2.default, {
    hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 3471983530
    }, 'Phone'),
    fullWidth: true
  }), _react2.default.createElement('br', {
    'data-jsx': 3471983530
  }), _react2.default.createElement(_TextField2.default, {
    hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 3471983530
    }, 'Message'),
    fullWidth: true,
    multiLine: true,
    rows: 2
  }), _react2.default.createElement('br', {
    'data-jsx': 3471983530
  })))), _react2.default.createElement(_style2.default, {
    styleId: 3471983530,
    css: '.wrapper[data-jsx="3471983530"]{padding-top: 15px;}.text[data-jsx="3471983530"]{text-align: center;color: white;font-size: 16px;}.label[data-jsx="3471983530"] {color: white !important;background-image: none !important;}.imgcontainer[data-jsx="3471983530"]{width: 100px;height: 100px;margin-left: auto;margin-right: auto;display: block;}.contactForm[data-jsx="3471983530"] {padding-top: 15px;}'
  }));
};

exports.default = ContactForm;