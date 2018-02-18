'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
    console.log(props);
    props.list.map(function (item, i) {
        _react2.default.createElement(
            'li',
            { key: i },
            item
        );
    });

    return _react2.default.createElement(
        'ul',
        null,
        list
    );
};

exports.default = App;