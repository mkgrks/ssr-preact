'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _api = require('./api/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _api.fetchList)().then(function (list) {
  (0, _reactDom.render)(_react2.default.createElement(_App2.default, { list: list }), document.querySelector('#root'));
});