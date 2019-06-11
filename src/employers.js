"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employersNames = exports.employers = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
exports.employers = employers;
var employersNames = employers.filter(function (name) {
  return name != '';
}).map(function (name) {
  return name.toLowerCase().trim();
}).join();
exports.employersNames = employersNames;