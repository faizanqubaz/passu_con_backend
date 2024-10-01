"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ibexRoute = void 0;
var _express = _interopRequireDefault(require("express"));
var _ibex = require("./ibex.controller");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = exports.ibexRoute = _express["default"].Router();

// POST route for saving Ibex data with image upload
router.post('/popular', _ibex.saveIbex);
router.post('/newhunt', _ibex.saveNewHuntIbex);
router.post('/topoffer', _ibex.saveTopOfferIbex);
router.post('/contactus', _ibex.sendMail);

// GET route for fetching all Ibex entries
router.get('/', _ibex.getAllIbex);