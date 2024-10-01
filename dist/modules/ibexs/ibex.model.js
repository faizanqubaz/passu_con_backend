"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ibex = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// Define the Ibex schema
var IbexSchema = new _mongoose.Schema({
  ibexname: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ibexrate: {
    type: Number,
    required: true
  },
  // Assuming rate is a number
  guideName: {
    type: String,
    required: true
  },
  ibexsize: {
    type: String,
    required: true
  },
  priceOld: {
    type: String,
    required: true
  },
  newPrice: {
    type: String,
    required: true
  },
  huntername: {
    type: String,
    required: true
  },
  hunterlocation: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  huntdate: {
    type: Date,
    required: true
  },
  huntType: {
    type: String,
    required: true
  },
  ibexphotos: [{
    type: String,
    required: true
  }],
  // Array of photo URLs
  guidephotos: [{
    type: String,
    required: true
  }] // Array of guide photo URLs
}, {
  timestamps: true
});

// Create the Ibex model
var Ibex = exports.Ibex = _mongoose["default"].model('Ibex', IbexSchema);