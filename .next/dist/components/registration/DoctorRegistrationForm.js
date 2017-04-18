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

var _RegistrationMap = require('./RegistrationMap');

var _RegistrationMap2 = _interopRequireDefault(_RegistrationMap);

var _Uploader = require('../uploader/Uploader');

var _Uploader2 = _interopRequireDefault(_Uploader);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DoctorRegistrationForm = function (_Component) {
  (0, _inherits3.default)(DoctorRegistrationForm, _Component);

  function DoctorRegistrationForm() {
    (0, _classCallCheck3.default)(this, DoctorRegistrationForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DoctorRegistrationForm.__proto__ || (0, _getPrototypeOf2.default)(DoctorRegistrationForm)).call(this));

    _this.state = {
      toogleState: false,
      value: 'Podologia',
      count: 0,
      position: [32, 100],
      url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbPvqnfj0taeHk9BLFCYpySg2-eVk2i7kx4PE046Waix2-zM-NAILl-m8'
    };
    return _this;
  }

  (0, _createClass3.default)(DoctorRegistrationForm, [{
    key: 'toggleChecked',
    value: function toggleChecked(Checkbox) {
      console.log('this was pressed');
      if (this.state.toogleState === false) {
        this.state.toogleState = true;
      } else {
        this.state.toogleState = false;
      }
      console.log(this.state.toogleState);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event, index, value) {
      this.setState({ value: value });
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
    key: 'handleOpen',
    value: function handleOpen() {
      this.state.open = true;
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.state.open = false;
    }
  }, {
    key: 'addDoctor',
    value: function addDoctor() {
      var name = this.refs.doctorName.getValue();
      var img = this.state.url;
      var description = this.refs.description.getValue();
      var insurance = this.state.toogleState;
      var specialty = this.state.value;
      var curriculum = {
        one: this.refs.curriculumOne.getValue(),
        two: this.refs.curriculumTwo.getValue(),
        three: this.refs.curriculumThree.getValue(),
        four: this.refs.curriculumFour.getValue(),
        five: this.refs.curriculumFive.getValue(),
        six: this.refs.curriculumSix.getValue()
      };
      var email = this.refs.email.getValue();
      var direccion = this.refs.direccion.getValue();
      var doctor = {
        name: name,
        img: img,
        description: description,
        insurance: insurance,
        curriculum: curriculum,
        email: email,
        specialty: specialty,
        direccion: direccion,
        position: this.state.position
      };

      console.log('Doctor: ', doctor);

      if (doctor) {
        _axios2.default.post('/api/doctor-registration', {
          name: doctor.name,
          img: doctor.img,
          description: doctor.description,
          insurance: doctor.insurance,
          curriculum: doctor.curriculum,
          email: doctor.email,
          specialty: doctor.specialty,
          direccion: doctor.direccion,
          position: doctor.position
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
          paddingBottom: 35,
          marginTop: '50px'
        },
        img: {
          borderRadius: '50%',
          paddingTop: 25,
          paddingBottom: 25,
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          width: '250px',
          height: '250px'
        },
        formMessageDivisor: {
          padding: '0 0 10px 0'
        },
        formStyle: {
          color: 'white'
        }
      };

      return _react2.default.createElement('div', { style: styles.container }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_reactGridSystem.Container, null, _react2.default.createElement(_Paper2.default, { style: styles.paper, zDepth: 3 }, _react2.default.createElement(_reactGridSystem.Container, null, _react2.default.createElement('form', { className: 'new-doctor' }, _react2.default.createElement('div', { style: styles.formDivisor }, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 6, lg: 6 }, _react2.default.createElement('img', { style: styles.img, src: this.state.url })), _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 6, lg: 6 }, _react2.default.createElement(_Uploader2.default, { handle: this.handleImageChange.bind(this) }))), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 6, lg: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Agrega una doctor',
        ref: 'doctorName',
        fullWidth: true
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 6, lg: 6 }, _react2.default.createElement(_SelectField2.default, {
        floatingLabelText: 'Specialty',
        value: this.state.value,
        onChange: this.handleChange.bind(this)
      }, _react2.default.createElement(_MenuItem2.default, { value: 'Audiologist', primaryText: 'Audiologist' }), _react2.default.createElement(_MenuItem2.default, { value: 'Allergist', primaryText: 'Allergist ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Anesthesiologist', primaryText: 'Anesthesiologist  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Cardiologist', primaryText: 'Cardiologist ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Dentist', primaryText: 'Dentist ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Dermatologist', primaryText: 'Dermatologist ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Endocrinologist', primaryText: 'Endocrinologist ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Epidemiologist', primaryText: 'Epidemiologist ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Gynecologist', primaryText: 'Gynecologist ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Gastroenterologist', primaryText: 'Gastroenterologist ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Infectious Disease Specialist', primaryText: 'Infectious Disease Specialist  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Internal Medicine Specialist', primaryText: 'Internal Medicine Specialist  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Medical Geneticist', primaryText: 'Medical Geneticist  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Microbiologist', primaryText: 'Microbiologist  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Neonatologist', primaryText: 'Neonatologist  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Neurologist', primaryText: 'Neurologist  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Obstetrician', primaryText: 'Obstetrician  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Oncologist', primaryText: 'Oncologist  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Orthopedic Surgeon', primaryText: 'Orthopedic Surgeon  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Otorrinolaringologista', primaryText: 'Otorrinolaringologista  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'ENT Specialist', primaryText: 'ENT Specialist' }), _react2.default.createElement(_MenuItem2.default, { value: 'Pediatrician', primaryText: 'Pediatrician' }), _react2.default.createElement(_MenuItem2.default, { value: 'Plastic Surgeon', primaryText: 'Plastic Surgeon' }), _react2.default.createElement(_MenuItem2.default, { value: 'Podiatrist', primaryText: 'Podiatrist' }), _react2.default.createElement(_MenuItem2.default, { value: 'Psychiatrist', primaryText: 'Psychiatrist' }), _react2.default.createElement(_MenuItem2.default, { value: 'Radiologist', primaryText: 'Radiologist' }), _react2.default.createElement(_MenuItem2.default, { value: 'Rheumatologist', primaryText: 'Rheumatologist' }), _react2.default.createElement(_MenuItem2.default, { value: 'Surgeon', primaryText: 'Surgeon  ' }), _react2.default.createElement(_MenuItem2.default, { value: 'Urologist', primaryText: 'Urologist  ' }))))), _react2.default.createElement('div', { style: styles.formDivisor }, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Work experience 1',
        ref: 'curriculumOne',
        fullWidth: true
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Work experience 2',
        ref: 'curriculumTwo',
        fullWidth: true
      }))), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Work experience 3',
        ref: 'curriculumThree',
        fullWidth: true
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Work experience 4',
        ref: 'curriculumFour',
        fullWidth: true
      }))), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Work experience 5',
        ref: 'curriculumFive',
        fullWidth: true
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Work experience 6',
        ref: 'curriculumSix',
        fullWidth: true
      })))), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 12, lg: 12 }, _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement('div', null, 'Map Loading...') }, _react2.default.createElement(_RegistrationMap2.default, { position: this.state.position, mapClick: this.mapClick.bind(this) }))), _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 12, lg: 12 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Direccion',
        ref: 'direccion',
        fullWidth: true,
        multiLine: true
      }))), _react2.default.createElement('div', { style: styles.formMessageDivisor }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Describe yourself or experience(do not be shy)',
        ref: 'description',
        fullWidth: true,
        multiLine: true,
        rows: 3,
        rowsMax: 6
      })), _react2.default.createElement('div', { style: styles.formDivisor }, _react2.default.createElement(_Checkbox2.default, {
        label: 'USA insurance?',
        onClick: this.toggleChecked.bind(this)
      }), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'E-mail',
        ref: 'email',
        fullWidth: false
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 6, md: 6, lg: 6 }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Phone Number',
        ref: 'phone',
        fullWidth: false
      })), _react2.default.createElement(_reactGridSystem.Col, { sm: 12, md: 6, lg: 6 }, _react2.default.createElement(_RaisedButton2.default, {
        label: 'Register',
        onClick: this.addDoctor.bind(this),
        className: 'button-submit',
        primary: true
      }))))))))));
    }
  }]);

  return DoctorRegistrationForm;
}(_react.Component);

exports.default = DoctorRegistrationForm;