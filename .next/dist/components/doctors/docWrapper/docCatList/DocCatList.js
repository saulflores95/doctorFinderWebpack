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
    css: '.label[data-jsx="2064972595"] {font-size: 16px;color: white !important;font-family: \'Montserrat\', sans-serif;}.doctor[data-jsx="2064972595"] {width: 45px !important;height: 45px !important ;}.label2[data-jsx="2064972595"] {font-size: 16px;color: white !important;}.pageSlider-enter[data-jsx="2064972595"] {-webkit-transform: translate3d(100%, 0, 0);-moz-transform: translate3d(100%, 0, 0);-ms-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);}.pageSlider-enter.pageSlider-enter-active[data-jsx="2064972595"] {-webkit-transform: translate3d(0, 0, 0);-moz-transform: translate3d(0, 0, 0);-ms-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);-webkit-transition: all 600ms;-moz-transition: all 600ms;-ms-transition: all 600ms;transition: all 600ms;}.prueba[data-jsx="2064972595"] {height: 100;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGRvY3RvcnNcXGRvY1dyYXBwZXJcXGRvY0NhdExpc3RcXERvY0NhdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEdPLEFBQ1MsK0JBQ1UsZ0JBQ1Esd0JBQ2Msc0NBQ3ZDLENBRVEsZ0NBQ2dCLHVCQUNFLHlCQUMxQixDQUVRLGdDQUNTLGdCQUNRLHdCQUN6QixDQUdrQiwwQ0FDa0IsNkpBQ3BDLENBRTBDLGtFQUNULGlKQUNWLHlHQUN2QixDQUNRLGdDQUNLLFlBQ2IiLCJmaWxlIjoiY29tcG9uZW50c1xcZG9jdG9yc1xcZG9jV3JhcHBlclxcZG9jQ2F0TGlzdFxcRG9jQ2F0TGlzdC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9TYXVsL0RvY3VtZW50cy9HaXRIdWIvZG9jdG9yRmluZGVyV2VicGFjayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcidcclxuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbX0gZnJvbSAnbWF0ZXJpYWwtdWkvTGlzdCdcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRGl2aWRlcidcclxuaW1wb3J0IEFjdGlvbkluZm8gZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2FjdGlvbi9pbmZvJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ21hdGVyaWFsLXVpL0F2YXRhcidcclxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtbW90aW9uLXVpLXBhY2snXHJcbmltcG9ydCB7c3ByaW5nfSBmcm9tICdyZWFjdC1tb3Rpb24nXHJcblxyXG5jb25zdCBpbWFnZUNob29zZXIgPSAocHJvcHMpID0+IHtcclxuICBzd2l0Y2ggKHByb3BzKSB7XHJcbiAgICBjYXNlICdBbGxlcmdpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvQWxsZXJnaXN0LmpwZydcclxuICAgIGNhc2UgJ0FuZXN0aGVzaW9sb2dpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvQW5lc3RoZXNpb2xvZ2lzdC5qcGcnXHJcbiAgICBjYXNlICdBdWRpb2xvZ2lzdCc6XHJcbiAgICAgIHJldHVybiAnaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9oZWFsdGhjYXJlYmFqYS91bmRlZmluZWQvQ2F0ZWdvcnlJY29ucy9BdWRpb2xvZ2lzdC5qcGcnXHJcbiAgICBjYXNlICdDYXJkaW9sb2dpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvQ2FyZGlvbG9naXN0LmpwZydcclxuICAgIGNhc2UgJ0RlbnRpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvRGVudGlzdC5qcGcnXHJcbiAgICBjYXNlICdEZXJtYXRvbG9naXN0JzpcclxuICAgICAgcmV0dXJuICdodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2hlYWx0aGNhcmViYWphL3VuZGVmaW5lZC9DYXRlZ29yeUljb25zL0Rlcm1hdG9sb2dpc3QuanBnJ1xyXG4gICAgY2FzZSAnRU5UIFNwZWNpYWxpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvRU5ULVNwZWNpYWxpc3QtKEVhciUyQy1Ob3NlLWFuZC1UaHJvYXQpLmpwZydcclxuICAgIGNhc2UgJ0VuZG9jcmlub2xvZ2lzdCc6XHJcbiAgICAgIHJldHVybiAnaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9oZWFsdGhjYXJlYmFqYS91bmRlZmluZWQvQ2F0ZWdvcnlJY29ucy9FbmRvY3Jpbm9sb2dpc3QuanBnJ1xyXG4gICAgY2FzZSAnRXBpZGVtaW9sb2dpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvRXBpZGVtaW9sb2dpc3QuanBnJ1xyXG4gICAgY2FzZSAnR3luZWNvbG9naXN0JzpcclxuICAgICAgcmV0dXJuICdodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2hlYWx0aGNhcmViYWphL3VuZGVmaW5lZC9DYXRlZ29yeUljb25zL0d5bmVjb2xvZ2lzdC5qcGcnXHJcbiAgICBjYXNlICdJbW11bm9sb2dpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvSW1tdW5vbG9naXN0LmpwZydcclxuICAgIGNhc2UgJ0luZmVjdGlvdXMgRGlzZWFzZSBTcGVjaWFsaXN0JzpcclxuICAgICAgcmV0dXJuICdodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2hlYWx0aGNhcmViYWphL3VuZGVmaW5lZC9DYXRlZ29yeUljb25zL0luZmVjdGlvdXMtRGlzZWFzZS1TcGVjaWFsaXN0LmpwZydcclxuICAgIGNhc2UgJ0ludGVybmFsIE1lZGljaW5lIFNwZWNpYWxpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvSW50ZXJuYWwtTWVkaWNpbmUtU3BlY2lhbGlzdC5qcGcnXHJcbiAgICBjYXNlICdNZWRpY2FsIEdlbmV0aWNpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvTWVkaWNhbC1HZW5ldGljaXN0Li5qcGcnXHJcbiAgICBjYXNlICdNaWNyb2Jpb2xvZ2lzdCc6XHJcbiAgICAgIHJldHVybiAnaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9oZWFsdGhjYXJlYmFqYS91bmRlZmluZWQvQ2F0ZWdvcnlJY29ucy9NaWNyb2Jpb2xvZ2lzdC5qcGcnXHJcbiAgICBjYXNlICdOZW9uYXRvbG9naXN0JzpcclxuICAgICAgcmV0dXJuICdodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2hlYWx0aGNhcmViYWphL3VuZGVmaW5lZC9DYXRlZ29yeUljb25zL05lb25hdG9sb2dpc3QuanBnJ1xyXG4gICAgY2FzZSAnTmV1cm9sb2dpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvTmV1cm9sb2dpc3QuanBnJ1xyXG4gICAgY2FzZSAnTmV1cm9zdXJnZW9uJzpcclxuICAgICAgcmV0dXJuICdodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2hlYWx0aGNhcmViYWphL3VuZGVmaW5lZC9DYXRlZ29yeUljb25zL05ldXJvc3VyZ2Vvbi5qcGcnXHJcbiAgICBjYXNlICdPYnN0ZXRyaWNpYW4nOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvT2JzdGV0cmljaWFuLmpwZydcclxuICAgIGNhc2UgJ09uY29sb2dpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvT25jb2xvZ2lzdC5qcGcnXHJcbiAgICBjYXNlICdPcnRob3BlZGljJzpcclxuICAgICAgcmV0dXJuICdodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2hlYWx0aGNhcmViYWphL3VuZGVmaW5lZC9DYXRlZ29yeUljb25zL09ydGhvcGVkaWMuanBnJ1xyXG4gICAgY2FzZSAnUGVkaWF0cmljaWFuJzpcclxuICAgICAgcmV0dXJuICdodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2hlYWx0aGNhcmViYWphL3VuZGVmaW5lZC9DYXRlZ29yeUljb25zL1BlZGlhdHJpY2lhbi5qcGcnXHJcbiAgICBjYXNlICdQaHlzaW9sb2dpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvUGh5c2lvbG9naXN0LmpwZydcclxuICAgIGNhc2UgJ1BsYXN0aWMgU3VyZ2Vvbic6XHJcbiAgICAgIHJldHVybiAnaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9oZWFsdGhjYXJlYmFqYS91bmRlZmluZWQvQ2F0ZWdvcnlJY29ucy9QbGFzdGljLVN1cmdlb24uanBnJ1xyXG4gICAgY2FzZSAnUG9kaWF0cmlzdCc6XHJcbiAgICAgIHJldHVybiAnaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9oZWFsdGhjYXJlYmFqYS91bmRlZmluZWQvQ2F0ZWdvcnlJY29ucy9Qb2RpYXRyaXN0LmpwZydcclxuICAgIGNhc2UgJ1BzeWNoaWF0cmlzdCc6XHJcbiAgICAgIHJldHVybiAnaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9oZWFsdGhjYXJlYmFqYS91bmRlZmluZWQvQ2F0ZWdvcnlJY29ucy9Qc3ljaGlhdHJpc3QuanBnJ1xyXG4gICAgY2FzZSAnUmFkaW9sb2dpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvUmFkaW9sb2dpc3QuanBnJ1xyXG4gICAgY2FzZSAnUmhldW1hdG9sb2dpc3QnOlxyXG4gICAgICByZXR1cm4gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaGVhbHRoY2FyZWJhamEvdW5kZWZpbmVkL0NhdGVnb3J5SWNvbnMvUmhldW1hdG9sb2dpc3QuanBnJ1xyXG4gICAgY2FzZSAnU3VyZ2Vvbic6XHJcbiAgICAgIHJldHVybiAnaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9oZWFsdGhjYXJlYmFqYS91bmRlZmluZWQvQ2F0ZWdvcnlJY29ucy9TdXJnZW9uLmpwZydcclxuICAgIGNhc2UgJ1Vyb2xvZ2lzdCc6XHJcbiAgICAgIHJldHVybiAnaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9oZWFsdGhjYXJlYmFqYS91bmRlZmluZWQvQ2F0ZWdvcnlJY29ucy9Vcm9sb2dpc3QuanBnJ1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IERvY0NhdExpc3QgPSAoe3NwZWNpYWx0eX0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT0ncHJ1ZWJhJz5cclxuICAgIDxMaW5rIGhyZWY9e2AvZG9jdG9ycy1zcGVjaWFsaXR5P2lkPSR7c3BlY2lhbHR5fWB9IGFzPXtgL2RvY3RvcnMtc3BlY2lhbGl0eS8ke3NwZWNpYWx0eX1gfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlcj5cclxuICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZW50ZXI9e3tcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiBzcHJpbmcoMCwge3N0aWZmbmVzczogNDAwLCBkYW1waW5nOiAyNX0pXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBsZWF2ZT17e1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDM1MFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgbGVmdEF2YXRhcj17PEF2YXRhciBjbGFzc05hbWU9J2RvY3RvcicgYWx0PXtzcGVjaWFsdHl9IHNyYz17aW1hZ2VDaG9vc2VyKHNwZWNpYWx0eSl9IC8+fVxyXG4gICAgICAgICAgICAgICAgcmlnaHRJY29uPXs8QWN0aW9uSW5mbyAvPn1cclxuICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PXs8ZGl2IGNsYXNzTmFtZT0nbGFiZWwnPntzcGVjaWFsdHl9PC9kaXY+fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPERpdmlkZXIgaW5zZXQgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvY3RvciB7XHJcbiAgICAgICAgICB3aWR0aDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxhYmVsMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAucGFnZVNsaWRlci1lbnRlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhZ2VTbGlkZXItZW50ZXIucGFnZVNsaWRlci1lbnRlci1hY3RpdmUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBydWViYSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2NDYXRMaXN0XHJcbiJdfQ== */\n/*@ sourceURL=components\\doctors\\docWrapper\\docCatList\\DocCatList.js */'
  }));
};

exports.default = DocCatList;