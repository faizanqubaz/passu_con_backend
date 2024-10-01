"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _ibex = require("./modules/ibexs/ibex.route");
var _admin = require("./modules/admin/admin.route");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = exports.mainRouter = _express["default"].Router();
router.use('/ibex', _ibex.ibexRoute);
router.use('/login', _admin.adminRoute);