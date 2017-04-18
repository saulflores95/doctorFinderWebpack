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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Uploader = function (_React$Component) {
  (0, _inherits3.default)(Uploader, _React$Component);

  function Uploader() {
    (0, _classCallCheck3.default)(this, Uploader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Uploader.__proto__ || (0, _getPrototypeOf2.default)(Uploader)).call(this));

    _this.upload = _this.upload.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Uploader, [{
    key: 'getFile',
    value: function getFile() {
      document.getElementById('file').click();
    }
  }, {
    key: 'upload',
    value: function upload() {
      var self = this;
      var formData = new window.FormData();
      var file = document.getElementById('file').files[0];
      var url = '/api/image-upload';
      var name = 'file';
      formData.append(name, file);
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var downloadUrl = 'https://s3-us-west-1.amazonaws.com/healthcarebaja/' + file.name;
      _axios2.default.post(url, formData, config).then(function (res) {
        console.log(res);
        self.props.handle(downloadUrl);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = {
        form: {
          paddingTop: 50
        },
        img: {
          padding: 50,
          borderRadius: '50%'
        },
        inputBtn: {
          position: 'relative',
          fontFamily: 'Roboto',
          width: 150,
          padding: 10,
          webKitBorderRadius: 5,
          mozBorderRadius: 5,
          border: 1,
          textAlign: 'center',
          backgroundColor: '#DDD',
          cursor: 'pointer'
        },
        hideOriginalInputButton: {
          height: 0,
          width: 0,
          overFlow: 'hidden'
        }
      };
      return _react2.default.createElement('div', { style: styles.form }, _react2.default.createElement('input', { style: styles.hideOriginalInputButton, onChange: this.upload.bind(this), name: 'file', type: 'file', id: 'file' }), _react2.default.createElement('div', { style: styles.inputBtn, onClick: this.getFile.bind(this) }, 'click to upload a file'));
    }
  }]);

  return Uploader;
}(_react2.default.Component);

exports.default = Uploader;