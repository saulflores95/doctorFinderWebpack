'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DoctorExp = function DoctorExp(doctor) {
  return _react2.default.createElement('div', { className: 'experienceContainer', 'data-jsx': 3840944912
  }, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { xs: 6, sm: 6, md: 6, lg: 6 }, _react2.default.createElement('p', { className: 'detail-text', 'data-jsx': 3840944912
  }, doctor[0].curriculumOne), _react2.default.createElement('p', { className: 'detail-text', 'data-jsx': 3840944912
  }, doctor[0].curriculumTwo), _react2.default.createElement('p', { className: 'detail-text', 'data-jsx': 3840944912
  }, doctor[0].curriculumThree)), _react2.default.createElement(_reactGridSystem.Col, { xs: 6, sm: 6, md: 6, lg: 6 }, _react2.default.createElement('p', { className: 'detail-text', 'data-jsx': 3840944912
  }, doctor[0].curriculumFour), _react2.default.createElement('p', { className: 'detail-text', 'data-jsx': 3840944912
  }, doctor[0].curriculumFive), _react2.default.createElement('p', { className: 'detail-text', 'data-jsx': 3840944912
  }, doctor[0].curriculumSix))), _react2.default.createElement(_style2.default, {
    styleId: 3840944912,
    css: '.experience-container[data-jsx="3840944912"]:{height:100%;}.exp-text[data-jsx="3840944912"]:{font-size: x-large;font-weight: 100;}'
  }));
};

exports.default = DoctorExp;