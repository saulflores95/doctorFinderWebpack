'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _info = require('material-ui/svg-icons/action/info');

var _info2 = _interopRequireDefault(_info);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imageChooser = function imageChooser(props) {
  switch (props) {
    case 'Allergist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Allergist.jpg';
    case 'Anesthesiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Anesthesiologist.jpg';
    case 'Audiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Audiologist.jpg';
    case 'Cardiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Cardiologist.jpg';
    case 'Dentist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Dentist.jpg';
    case 'Dermatologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Dermatologist.jpg';
    case 'ENT Specialist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/ENT-Specialist-(Ear%2C-Nose-and-Throat).jpg';
    case 'Endocrinologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Endocrinologist.jpg';
    case 'Epidemiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Epidemiologist.jpg';
    case 'Gynecologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Gynecologist.jpg';
    case 'Immunologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Immunologist.jpg';
    case 'Infectious Disease Specialist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Infectious-Disease-Specialist.jpg';
    case 'Internal Medicine Specialist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Internal-Medicine-Specialist.jpg';
    case 'Medical Geneticist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Medical-Geneticist..jpg';
    case 'Microbiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Microbiologist.jpg';
    case 'Neonatologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Neonatologist.jpg';
    case 'Neurologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Neurologist.jpg';
    case 'Neurosurgeon':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Neurosurgeon.jpg';
    case 'Obstetrician':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Obstetrician.jpg';
    case 'Oncologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Oncologist.jpg';
    case 'Orthopedic':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Orthopedic.jpg';
    case 'Pediatrician':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Pediatrician.jpg';
    case 'Physiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Physiologist.jpg';
    case 'Plastic Surgeon':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Plastic-Surgeon.jpg';
    case 'Podiatrist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Podiatrist.jpg';
    case 'Psychiatrist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Psychiatrist.jpg';
    case 'Radiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Radiologist.jpg';
    case 'Rheumatologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Rheumatologist.jpg';
    case 'Surgeon':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Surgeon.jpg';
    case 'Urologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Urologist.jpg';
    default:
      return null;
  }
};

var DocCatList = function DocCatList(_ref) {
  var specialty = _ref.specialty;
  return _react2.default.createElement('div', { className: 'prueba', 'data-jsx': 2064972595
  }, _react2.default.createElement(_link2.default, { href: '/doctors-speciality?id=' + specialty, as: '/doctors-speciality/' + specialty }, _react2.default.createElement('div', {
    'data-jsx': 2064972595
  }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_List.List, null, _react2.default.createElement(_reactMotionUiPack2.default, {
    component: false,
    enter: {
      opacity: 1,
      translateX: (0, _reactMotion.spring)(0, { stiffness: 400, damping: 25 })
    },
    leave: {
      opacity: 0,
      translateX: 350
    }
  }, _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { className: 'doctor', alt: specialty, src: imageChooser(specialty) }),
    rightIcon: _react2.default.createElement(_info2.default, null),
    primaryText: _react2.default.createElement('div', { className: 'label', 'data-jsx': 2064972595
    }, specialty)
  })), _react2.default.createElement(_Divider2.default, { inset: true }))))), _react2.default.createElement(_style2.default, {
    styleId: 2064972595,
    css: '.label[data-jsx="2064972595"] {font-size: 16px;color: white !important;font-family: \'Montserrat\', sans-serif;}.doctor[data-jsx="2064972595"] {width: 45px !important;height: 45px !important ;}.label2[data-jsx="2064972595"] {font-size: 16px;color: white !important;}.pageSlider-enter[data-jsx="2064972595"] {-webkit-transform: translate3d(100%, 0, 0);-moz-transform: translate3d(100%, 0, 0);-ms-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);}.pageSlider-enter.pageSlider-enter-active[data-jsx="2064972595"] {-webkit-transform: translate3d(0, 0, 0);-moz-transform: translate3d(0, 0, 0);-ms-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);-webkit-transition: all 600ms;-moz-transition: all 600ms;-ms-transition: all 600ms;transition: all 600ms;}.prueba[data-jsx="2064972595"] {height: 100;}'
  }));
};

exports.default = DocCatList;