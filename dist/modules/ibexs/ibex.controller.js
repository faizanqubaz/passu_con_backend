"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMail = exports.saveTopOfferIbex = exports.saveNewHuntIbex = exports.saveIbex = exports.getAllIbex = void 0;
var _express = require("express");
var _ibex = require("./ibex.model");
var _path = _interopRequireDefault(require("path"));
var _multer = _interopRequireDefault(require("multer"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Configure multer for image uploads
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/'); // The folder where images will be stored
  },
  filename: function filename(req, file, cb) {
    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, "".concat(uniqueSuffix, "-").concat(file.originalname));
  }
});

// Define accepted file types (e.g., JPEG, PNG)
var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file type'), false);
  }
};

// Initialize multer upload
var upload = (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  // 5MB file size limit
  fileFilter: fileFilter
}).fields([{
  name: 'ibexphotos',
  maxCount: 5
},
// Handle multiple ibex images
{
  name: 'guidephotos',
  maxCount: 5
} // Handle multiple guide images
]);

// Save new Ibex to the database
var _saveIbex = exports.saveIbex = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          upload(req, res, /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(err) {
              var _req$files, _req$files2, _req$body, ibexname, description, ibexrate, guideName, latitude, longitude, ibexsize, newPrice, huntername, huntdate, priceOld, hunterlocation, ibexphotos, guidephotos, ibex, savedIbex;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!err) {
                      _context.next = 3;
                      break;
                    }
                    console.log('err', err);
                    return _context.abrupt("return", res.status(500).json({
                      message: 'Error uploading files',
                      error: err.message
                    }));
                  case 3:
                    _context.prev = 3;
                    _req$body = req.body, ibexname = _req$body.ibexname, description = _req$body.description, ibexrate = _req$body.ibexrate, guideName = _req$body.guideName, latitude = _req$body.latitude, longitude = _req$body.longitude, ibexsize = _req$body.ibexsize, newPrice = _req$body.newPrice, huntername = _req$body.huntername, huntdate = _req$body.huntdate, priceOld = _req$body.priceOld, hunterlocation = _req$body.hunterlocation;
                    ibexphotos = ((_req$files = req.files) === null || _req$files === void 0 ? void 0 : _req$files.ibexphotos.map(function (file) {
                      return file.path;
                    })) || [];
                    guidephotos = ((_req$files2 = req.files) === null || _req$files2 === void 0 ? void 0 : _req$files2.guidephotos.map(function (file) {
                      return file.path;
                    })) || [];
                    ibex = new _ibex.Ibex({
                      ibexname: ibexname,
                      description: description,
                      ibexrate: ibexrate,
                      guideName: guideName,
                      latitude: latitude,
                      longitude: longitude,
                      // Save latitude and longitude instead of location
                      ibexsize: ibexsize,
                      newPrice: newPrice,
                      huntername: huntername,
                      huntdate: huntdate,
                      ibexphotos: ibexphotos,
                      guidephotos: guidephotos,
                      priceOld: priceOld,
                      hunterlocation: hunterlocation,
                      huntType: "populartype"
                    });
                    _context.next = 10;
                    return ibex.save();
                  case 10:
                    savedIbex = _context.sent;
                    console.log('saved', _saveIbex);
                    res.status(201).json({
                      message: 'Ibex created successfully',
                      data: savedIbex
                    });
                    _context.next = 18;
                    break;
                  case 15:
                    _context.prev = 15;
                    _context.t0 = _context["catch"](3);
                    res.status(500).json({
                      message: 'Error saving Ibex',
                      error: _context.t0.message
                    });
                  case 18:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[3, 15]]);
            }));
            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function saveIbex(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var saveTopOfferIbex = exports.saveTopOfferIbex = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          upload(req, res, /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err) {
              var _req$files3, _req$files4, _req$body2, ibexname, description, ibexrate, guideName, latitude, longitude, ibexsize, newPrice, huntername, huntdate, priceOld, hunterlocation, ibexphotos, guidephotos, ibex, savedIbex;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!err) {
                      _context3.next = 3;
                      break;
                    }
                    console.log('err', err);
                    return _context3.abrupt("return", res.status(500).json({
                      message: 'Error uploading files',
                      error: err.message
                    }));
                  case 3:
                    _context3.prev = 3;
                    _req$body2 = req.body, ibexname = _req$body2.ibexname, description = _req$body2.description, ibexrate = _req$body2.ibexrate, guideName = _req$body2.guideName, latitude = _req$body2.latitude, longitude = _req$body2.longitude, ibexsize = _req$body2.ibexsize, newPrice = _req$body2.newPrice, huntername = _req$body2.huntername, huntdate = _req$body2.huntdate, priceOld = _req$body2.priceOld, hunterlocation = _req$body2.hunterlocation;
                    ibexphotos = ((_req$files3 = req.files) === null || _req$files3 === void 0 ? void 0 : _req$files3.ibexphotos.map(function (file) {
                      return file.path;
                    })) || [];
                    guidephotos = ((_req$files4 = req.files) === null || _req$files4 === void 0 ? void 0 : _req$files4.guidephotos.map(function (file) {
                      return file.path;
                    })) || [];
                    ibex = new _ibex.Ibex({
                      ibexname: ibexname,
                      description: description,
                      ibexrate: ibexrate,
                      guideName: guideName,
                      latitude: latitude,
                      longitude: longitude,
                      // Save latitude and longitude instead of location
                      ibexsize: ibexsize,
                      newPrice: newPrice,
                      huntername: huntername,
                      huntdate: huntdate,
                      ibexphotos: ibexphotos,
                      guidephotos: guidephotos,
                      priceOld: priceOld,
                      hunterlocation: hunterlocation,
                      huntType: "topoffertype"
                    });
                    _context3.next = 10;
                    return ibex.save();
                  case 10:
                    savedIbex = _context3.sent;
                    console.log('saved', _saveIbex);
                    res.status(201).json({
                      message: 'Ibex created successfully',
                      data: savedIbex
                    });
                    _context3.next = 18;
                    break;
                  case 15:
                    _context3.prev = 15;
                    _context3.t0 = _context3["catch"](3);
                    res.status(500).json({
                      message: 'Error saving Ibex',
                      error: _context3.t0.message
                    });
                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, null, [[3, 15]]);
            }));
            return function (_x6) {
              return _ref4.apply(this, arguments);
            };
          }());
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function saveTopOfferIbex(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var saveNewHuntIbex = exports.saveNewHuntIbex = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          upload(req, res, /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(err) {
              var _req$files5, _req$files6, _req$body3, ibexname, description, ibexrate, guideName, latitude, longitude, ibexsize, newPrice, huntername, huntdate, priceOld, hunterlocation, ibexphotos, guidephotos, ibex, savedIbex;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!err) {
                      _context5.next = 3;
                      break;
                    }
                    console.log('err', err);
                    return _context5.abrupt("return", res.status(500).json({
                      message: 'Error uploading files',
                      error: err.message
                    }));
                  case 3:
                    _context5.prev = 3;
                    _req$body3 = req.body, ibexname = _req$body3.ibexname, description = _req$body3.description, ibexrate = _req$body3.ibexrate, guideName = _req$body3.guideName, latitude = _req$body3.latitude, longitude = _req$body3.longitude, ibexsize = _req$body3.ibexsize, newPrice = _req$body3.newPrice, huntername = _req$body3.huntername, huntdate = _req$body3.huntdate, priceOld = _req$body3.priceOld, hunterlocation = _req$body3.hunterlocation;
                    ibexphotos = ((_req$files5 = req.files) === null || _req$files5 === void 0 ? void 0 : _req$files5.ibexphotos.map(function (file) {
                      return file.path;
                    })) || [];
                    guidephotos = ((_req$files6 = req.files) === null || _req$files6 === void 0 ? void 0 : _req$files6.guidephotos.map(function (file) {
                      return file.path;
                    })) || [];
                    ibex = new _ibex.Ibex({
                      ibexname: ibexname,
                      description: description,
                      ibexrate: ibexrate,
                      guideName: guideName,
                      latitude: latitude,
                      longitude: longitude,
                      // Save latitude and longitude instead of location
                      ibexsize: ibexsize,
                      newPrice: newPrice,
                      huntername: huntername,
                      huntdate: huntdate,
                      ibexphotos: ibexphotos,
                      guidephotos: guidephotos,
                      priceOld: priceOld,
                      hunterlocation: hunterlocation,
                      huntType: "newhunttype"
                    });
                    _context5.next = 10;
                    return ibex.save();
                  case 10:
                    savedIbex = _context5.sent;
                    res.status(201).json({
                      message: 'Ibex created successfully',
                      data: savedIbex
                    });
                    _context5.next = 17;
                    break;
                  case 14:
                    _context5.prev = 14;
                    _context5.t0 = _context5["catch"](3);
                    res.status(500).json({
                      message: 'Error saving Ibex',
                      error: _context5.t0.message
                    });
                  case 17:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, null, [[3, 14]]);
            }));
            return function (_x9) {
              return _ref6.apply(this, arguments);
            };
          }());
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function saveNewHuntIbex(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

// Get all Ibex entries
var getAllIbex = exports.getAllIbex = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var hunttype, query, ibexList, baseUrl, updatedIbexList;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          // Extract 'hunttype' from query parameters if it exists
          hunttype = req.query.hunttype; // Build the query object for filtering
          query = {};
          if (hunttype) {
            query.hunttype = hunttype;
          }

          // Fetch all Ibex entries or filter by hunttype
          _context7.next = 6;
          return _ibex.Ibex.find({
            huntType: hunttype
          });
        case 6:
          ibexList = _context7.sent;
          console.log('ibexlist', ibexList);

          // Map through the ibex entries to append full image URIs
          baseUrl = "".concat(req.protocol, "://").concat(req.get('host')); // Construct base URL (e.g., http://localhost:3000)
          updatedIbexList = ibexList.map(function (ibex) {
            var updatedIbex = _objectSpread(_objectSpread({}, ibex.toObject()), {}, {
              // Convert Mongoose document to plain object
              ibexphotos: ibex.ibexphotos.map(function (photo) {
                return "".concat(baseUrl, "/").concat(photo);
              }),
              // Prepend base URL to ibex images
              guidephotos: ibex.guidephotos.map(function (photo) {
                return "".concat(baseUrl, "/").concat(photo);
              }) // Prepend base URL to guide images
            });
            return updatedIbex;
          }); // Return the list of Ibex entries with full image URIs
          res.status(200).json({
            message: 'Ibex entries retrieved successfully',
            data: updatedIbexList
          });
          _context7.next = 17;
          break;
        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](0);
          console.error('Error fetching Ibex entries:', _context7.t0);
          res.status(500).json({
            message: 'Failed to fetch Ibex entries',
            error: _context7.t0.message
          });
        case 17:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 13]]);
  }));
  return function getAllIbex(_x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}();
var sendMail = exports.sendMail = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body4, name, phone, email, country, subject, message, transporter, mailOptions;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$body4 = req.body, name = _req$body4.name, phone = _req$body4.phone, email = _req$body4.email, country = _req$body4.country, subject = _req$body4.subject, message = _req$body4.message; // Setup email configuration (using Nodemailer or similar)
          transporter = _nodemailer["default"].createTransport({
            service: 'gmail',
            auth: {
              user: 'nukhan55@gmail.com',
              pass: 'lqrbzmlnukrztucv'
            }
          });
          mailOptions = {
            from: email,
            to: 'faizanquba1@gmail.com',
            // The email to send to
            subject: subject,
            text: "Name: ".concat(name, "\nPhone: ").concat(phone, "\nCountry: ").concat(country, "\nMessage: ").concat(message)
          };
          _context8.prev = 3;
          _context8.next = 6;
          return transporter.sendMail(mailOptions);
        case 6:
          res.status(200).send('Email sent successfully');
          _context8.next = 13;
          break;
        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](3);
          console.error('Error sending email:', _context8.t0);
          res.status(500).send('Error sending email');
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[3, 9]]);
  }));
  return function sendMail(_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}();