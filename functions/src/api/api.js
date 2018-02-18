'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fetchList = exports.fetchList = function fetchList() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(function (res) {
        return res.json();
    });
};