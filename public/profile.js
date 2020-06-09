/*! Tripetto rolling collector 2.1.14 */ ! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e(require("TripettoCollector")) : "function" == typeof define && define.amd ? define("TripettoCollectorRolling", ["TripettoCollector"], e) : "object" == typeof exports ? exports.TripettoCollectorRolling = e(require("TripettoCollector")) : t.TripettoCollectorRolling = e(t.TripettoCollector) }(window, (function(t) { return function(t) { var e = {};

        function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 13) }([function(e, o) { e.exports = t }, function(t, e, o) { "use strict";
        t.exports = o(16) }, function(t, e, o) { "use strict";
        o.r(e),
            function(t) { o.d(e, "__extends", (function() { return l })), o.d(e, "__assign", (function() { return n })), o.d(e, "__rest", (function() { return i })), o.d(e, "__decorate", (function() { return c })), o.d(e, "__param", (function() { return a })), o.d(e, "__metadata", (function() { return s })), o.d(e, "__awaiter", (function() { return p })), o.d(e, "__generator", (function() { return u })), o.d(e, "__exportStar", (function() { return d })), o.d(e, "__values", (function() { return f })), o.d(e, "__read", (function() { return g })), o.d(e, "__spread", (function() { return m })), o.d(e, "__spreadArrays", (function() { return h })), o.d(e, "__await", (function() { return b })), o.d(e, "__asyncGenerator", (function() { return v })), o.d(e, "__asyncDelegator", (function() { return y })), o.d(e, "__asyncValues", (function() { return x })), o.d(e, "__makeTemplateObject", (function() { return w })), o.d(e, "__importStar", (function() { return _ })), o.d(e, "__importDefault", (function() { return k })); var r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) };

                function l(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) } var n = function() { return (n = Object.assign || function(t) { for (var e, o = 1, r = arguments.length; o < r; o++)
                            for (var l in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]); return t }).apply(this, arguments) };

                function i(t, e) { var o = {}; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (o[r] = t[r]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) { var l = 0; for (r = Object.getOwnPropertySymbols(t); l < r.length; l++) e.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[l]) && (o[r[l]] = t[r[l]]) } return o }

                function c(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i }

                function a(t, e) { return function(o, r) { e(o, r, t) } }

                function s(t, e) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e) }

                function p(e, o, r, l) { return new(r || (r = t))((function(t, n) {
                        function i(t) { try { a(l.next(t)) } catch (t) { n(t) } }

                        function c(t) { try { a(l.throw(t)) } catch (t) { n(t) } }

                        function a(e) { e.done ? t(e.value) : new r((function(t) { t(e.value) })).then(i, c) }
                        a((l = l.apply(e, o || [])).next()) })) }

                function u(t, e) { var o, r, l, n, i = { label: 0, sent: function() { if (1 & l[0]) throw l[1]; return l[1] }, trys: [], ops: [] }; return n = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (n[Symbol.iterator] = function() { return this }), n;

                    function c(n) { return function(c) { return function(n) { if (o) throw new TypeError("Generator is already executing."); for (; i;) try { if (o = 1, r && (l = 2 & n[0] ? r.return : n[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, n[1])).done) return l; switch (r = 0, l && (n = [2 & n[0], l.value]), n[0]) {
                                        case 0:
                                        case 1:
                                            l = n; break;
                                        case 4:
                                            return i.label++, { value: n[1], done: !1 };
                                        case 5:
                                            i.label++, r = n[1], n = [0]; continue;
                                        case 7:
                                            n = i.ops.pop(), i.trys.pop(); continue;
                                        default:
                                            if (!(l = (l = i.trys).length > 0 && l[l.length - 1]) && (6 === n[0] || 2 === n[0])) { i = 0; continue } if (3 === n[0] && (!l || n[1] > l[0] && n[1] < l[3])) { i.label = n[1]; break } if (6 === n[0] && i.label < l[1]) { i.label = l[1], l = n; break } if (l && i.label < l[2]) { i.label = l[2], i.ops.push(n); break }
                                            l[2] && i.ops.pop(), i.trys.pop(); continue }
                                    n = e.call(t, i) } catch (t) { n = [6, t], r = 0 } finally { o = l = 0 }
                                if (5 & n[0]) throw n[1]; return { value: n[0] ? n[1] : void 0, done: !0 } }([n, c]) } } }

                function d(t, e) { for (var o in t) e.hasOwnProperty(o) || (e[o] = t[o]) }

                function f(t) { var e = "function" == typeof Symbol && t[Symbol.iterator],
                        o = 0; return e ? e.call(t) : { next: function() { return t && o >= t.length && (t = void 0), { value: t && t[o++], done: !t } } } }

                function g(t, e) { var o = "function" == typeof Symbol && t[Symbol.iterator]; if (!o) return t; var r, l, n = o.call(t),
                        i = []; try { for (;
                            (void 0 === e || e-- > 0) && !(r = n.next()).done;) i.push(r.value) } catch (t) { l = { error: t } } finally { try { r && !r.done && (o = n.return) && o.call(n) } finally { if (l) throw l.error } } return i }

                function m() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e])); return t }

                function h() { for (var t = 0, e = 0, o = arguments.length; e < o; e++) t += arguments[e].length; var r = Array(t),
                        l = 0; for (e = 0; e < o; e++)
                        for (var n = arguments[e], i = 0, c = n.length; i < c; i++, l++) r[l] = n[i]; return r }

                function b(t) { return this instanceof b ? (this.v = t, this) : new b(t) }

                function v(e, o, r) { if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined."); var l, n = r.apply(e, o || []),
                        i = []; return l = {}, c("next"), c("throw"), c("return"), l[Symbol.asyncIterator] = function() { return this }, l;

                    function c(e) { n[e] && (l[e] = function(o) { return new t((function(t, r) { i.push([e, o, t, r]) > 1 || a(e, o) })) }) }

                    function a(e, o) { try {
                            (r = n[e](o)).value instanceof b ? t.resolve(r.value.v).then(s, p) : u(i[0][2], r) } catch (t) { u(i[0][3], t) } var r }

                    function s(t) { a("next", t) }

                    function p(t) { a("throw", t) }

                    function u(t, e) { t(e), i.shift(), i.length && a(i[0][0], i[0][1]) } }

                function y(t) { var e, o; return e = {}, r("next"), r("throw", (function(t) { throw t })), r("return"), e[Symbol.iterator] = function() { return this }, e;

                    function r(r, l) { e[r] = t[r] ? function(e) { return (o = !o) ? { value: b(t[r](e)), done: "return" === r } : l ? l(e) : e } : l } }

                function x(e) { if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined."); var o, r = e[Symbol.asyncIterator]; return r ? r.call(e) : (e = f(e), o = {}, l("next"), l("throw"), l("return"), o[Symbol.asyncIterator] = function() { return this }, o);

                    function l(r) { o[r] = e[r] && function(o) { return new t((function(l, n) {
                                (function(e, o, r, l) { t.resolve(l).then((function(t) { e({ value: t, done: r }) }), o) })(l, n, (o = e[r](o)).done, o.value) })) } } }

                function w(t, e) { return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t }

                function _(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                        for (var o in t) Object.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e.default = t, e }

                function k(t) { return t && t.__esModule ? t : { default: t } } }.call(this, o(7)) }, function(t, e, o) { "use strict";
        t.exports = function(t) { var e = []; return e.toString = function() { return this.map((function(e) { var o = function(t, e) { var o = t[1] || "",
                            r = t[3]; if (!r) return o; if (e && "function" == typeof btoa) { var l = (i = r, c = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c), "/*# ".concat(a, " */")),
                                n = r.sources.map((function(t) { return "/*# sourceURL=".concat(r.sourceRoot).concat(t, " */") })); return [o].concat(n).concat([l]).join("\n") } var i, c, a; return [o].join("\n") }(e, t); return e[2] ? "@media ".concat(e[2], "{").concat(o, "}") : o })).join("") }, e.i = function(t, o) { "string" == typeof t && (t = [
                    [null, t, ""]
                ]); for (var r = {}, l = 0; l < this.length; l++) { var n = this[l][0];
                    null != n && (r[n] = !0) } for (var i = 0; i < t.length; i++) { var c = t[i];
                    null != c[0] && r[c[0]] || (o && !c[2] ? c[2] = o : o && (c[2] = "(".concat(c[2], ") and (").concat(o, ")")), e.push(c)) } }, e } }, function(t, e, o) { "use strict"; var r, l = {},
            n = function() { return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r },
            i = function() { var t = {}; return function(e) { if (void 0 === t[e]) { var o = document.querySelector(e); if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try { o = o.contentDocument.head } catch (t) { o = null }
                        t[e] = o } return t[e] } }();

        function c(t, e) { for (var o = [], r = {}, l = 0; l < t.length; l++) { var n = t[l],
                    i = e.base ? n[0] + e.base : n[0],
                    c = { css: n[1], media: n[2], sourceMap: n[3] };
                r[i] ? r[i].parts.push(c) : o.push(r[i] = { id: i, parts: [c] }) } return o }

        function a(t, e) { for (var o = 0; o < t.length; o++) { var r = t[o],
                    n = l[r.id],
                    i = 0; if (n) { for (n.refs++; i < n.parts.length; i++) n.parts[i](r.parts[i]); for (; i < r.parts.length; i++) n.parts.push(h(r.parts[i], e)) } else { for (var c = []; i < r.parts.length; i++) c.push(h(r.parts[i], e));
                    l[r.id] = { id: r.id, refs: 1, parts: c } } } }

        function s(t) { var e = document.createElement("style"); if (void 0 === t.attributes.nonce) { var r = o.nc;
                r && (t.attributes.nonce = r) } if (Object.keys(t.attributes).forEach((function(o) { e.setAttribute(o, t.attributes[o]) })), "function" == typeof t.insert) t.insert(e);
            else { var l = i(t.insert || "head"); if (!l) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                l.appendChild(e) } return e } var p, u = (p = [], function(t, e) { return p[t] = e, p.filter(Boolean).join("\n") });

        function d(t, e, o, r) { var l = o ? "" : r.css; if (t.styleSheet) t.styleSheet.cssText = u(e, l);
            else { var n = document.createTextNode(l),
                    i = t.childNodes;
                i[e] && t.removeChild(i[e]), i.length ? t.insertBefore(n, i[e]) : t.appendChild(n) } }

        function f(t, e, o) { var r = o.css,
                l = o.media,
                n = o.sourceMap; if (l && t.setAttribute("media", l), n && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n)))), " */")), t.styleSheet) t.styleSheet.cssText = r;
            else { for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(r)) } } var g = null,
            m = 0;

        function h(t, e) { var o, r, l; if (e.singleton) { var n = m++;
                o = g || (g = s(e)), r = d.bind(null, o, n, !1), l = d.bind(null, o, n, !0) } else o = s(e), r = f.bind(null, o, e), l = function() {! function(t) { if (null === t.parentNode) return !1;
                    t.parentNode.removeChild(t) }(o) }; return r(t),
                function(e) { if (e) { if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        r(t = e) } else l() } }
        t.exports = function(t, e) {
            (e = e || {}).attributes = "object" == typeof e.attributes ? e.attributes : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = n()); var o = c(t, e); return a(o, e),
                function(t) { for (var r = [], n = 0; n < o.length; n++) { var i = o[n],
                            s = l[i.id];
                        s && (s.refs--, r.push(s)) }
                    t && a(c(t, e), e); for (var p = 0; p < r.length; p++) { var u = r[p]; if (0 === u.refs) { for (var d = 0; d < u.parts.length; d++) u.parts[d]();
                            delete l[u.id] } } } } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0);
        e.markdownToJSX = function(t, e, o) { return void 0 === o && (o = !0), n.markdownifyTo(t, e, { lineBreaks: o, reduce: function(t, e, o) { var i = "string" == typeof e ? [e] : e; switch (t) {
                        case "bold":
                            return l.createElement.apply(l, r.__spreadArrays(["b", void 0], i));
                        case "italic":
                            return l.createElement.apply(l, r.__spreadArrays(["i", void 0], i));
                        case "bold+italic":
                            return l.createElement("b", void 0, l.createElement.apply(l, r.__spreadArrays(["i", void 0], i)));
                        case "underline":
                            return l.createElement.apply(l, r.__spreadArrays(["u", void 0], i));
                        case "strikethrough":
                            return l.createElement.apply(l, r.__spreadArrays(["s", void 0], i));
                        case "break":
                            return l.createElement("br");
                        case "hyperlink":
                            return l.createElement.apply(l, r.__spreadArrays(["a", { href: n.castToString(o), target: "_blank" }], i));
                        case "mention":
                            return l.createElement("span", void 0, (o ? o.string : "") || "...") } return l.createElement.apply(l, r.__spreadArrays(["span", void 0], i)) } }) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(17),
            c = o(111),
            a = o(112),
            s = o(113),
            p = o(12);
        o(114), o(117), o(119); var u = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.blocks = new i.Blocks(e), e.onChange = e.props.onChange && new n.Debounce((function() { return e.props.onChange(e) })), e.pauseDialog = l.createRef(), e.reloading = !1, e.minHeight = 0, e.state = { style: e.props.style || {}, overrides: e.props.overrides || {}, view: e.props.view || "normal", changes: 0, offset: void 0, height: { current: void 0 }, focus: {}, isLoading: !0, isAtBegin: !0, isAtEnd: !1, isAutoFocusFulfilled: !1, activeBlock: void 0, initialBlock: void 0 }, e } return r.__extends(e, t), Object.defineProperty(e.prototype, "definition", { get: function() { return this.blocks.definition }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "name", { get: function() { return this.blocks.name }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "isEmpty", { get: function() { return this.blocks.isEmpty }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "isRunning", { get: function() { return this.blocks.isRunning }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "isStopped", { get: function() { return this.blocks.isStopped }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "isFinished", { get: function() { return this.blocks.isFinished }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "isReloading", { get: function() { return this.reloading }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "style", { get: function() { return this.state.style }, set: function(t) { this.setState({ style: t }) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "overrides", { get: function() { return this.state.overrides }, set: function(t) { this.setState({ overrides: t }) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "view", { get: function() { return this.state.view }, set: function(t) { this.setState({ view: t }) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "height", { get: function() { var t = this.blocks.activeElement && this.blocks.activeElement.current && this.blocks.activeElement.current.getBoundingClientRect().height + (n.castToBoolean(this.style.showNavigation, !0) ? 80 : 0) || 0; return this.minHeight = n.Num.max(t, this.minHeight) }, enumerable: !0, configurable: !0 }), e.prototype.render = function() { var t = this,
                    e = function(t) { t.preventDefault() }; return l.createElement("div", { className: "tripetto-collector-rolling", style: { backgroundColor: this.style.backgroundColor || void 0, backgroundImage: this.style.backgroundImage && this.style.backgroundImage.url ? "url(" + this.style.backgroundImage.url + ")" : void 0, backgroundSize: this.style.backgroundImage && this.style.backgroundImage.url && "repeat" !== this.style.backgroundImage.size ? this.style.backgroundImage.size : void 0, backgroundRepeat: this.style.backgroundImage && this.style.backgroundImage.url && "repeat" === this.style.backgroundImage.size ? "repeat" : void 0, fontFamily: this.style.textFont || void 0, color: this.style.textColor || void 0 }, onDragEnter: e, onDragOver: e, onDragLeave: e, onDrop: e }, this.blocks.render() || "finished" === this.blocks.status && s.finishedMessage(this.style, this.overrides) || "paused" === this.blocks.status && a.pausedMessage() || c.stoppedMessage(), (this.props.onPause || this.props.onPaused) && p.pauseDialog(this.pauseDialog, this.style, (function(e) { t.onPauseDialog && t.onPauseDialog(e) }))) }, e.prototype.componentDidMount = function() { var t = this;
                this.blocks.onChange = function() { return t.setState((function(t) { return { changes: t.changes + 1 } })) }, this.blocks.onFinish = function(e) { t.props.onFinish && t.props.onFinish(e) }, this.props.onReady && this.props.onReady(this) }, e.prototype.componentDidUpdate = function() { this.blocks.componentDidUpdate(), this.onChange && this.onChange.invoke() }, e.prototype.componentWillUnmount = function() { this.blocks.destroy() }, e.prototype.start = function() { this.blocks.start() }, e.prototype.resume = function(t) { return this.blocks.resume(t) }, e.prototype.pause = function() { var t = this.blocks.pause({ a: this.state.activeBlock, b: this.state.focus }); return t && this.props.onPaused && this.props.onPaused(t), t }, e.prototype.requestPause = function() { this.props.onPause && n.castToBoolean(this.props.onPause(this)) || this.pause() }, e.prototype.stop = function() { this.blocks.stop() }, e.prototype.restart = function() { this.blocks.restart(!1) }, e.prototype.reload = function(t) { this.reloading = !0, this.blocks.reload(t), this.reloading = !1 }, e.prototype.resize = function() { this.forceUpdate() }, e.prototype.showPauseDialog = function(t) { var e = this;
                this.onPauseDialog = function(o) { e.onPauseDialog = void 0, t(o, e) }, this.pauseDialog.current && this.pauseDialog.current.classList.add("pause-dialog-visible") }, e.prototype.requestPreview = function(t) { var e = this.blocks.storyline; if (e) { var o = this.state.activeBlock && e.getNodeByKey(this.state.activeBlock) || void 0; if (!o || o.id !== t) { var r = e.getKeyByNodeId(t);
                        r && this.blocks.activate(r) } } }, e }(l.PureComponent);
        e.Collector = u }, function(t, e, o) { t.exports = o(14).Promise }, function(t, e) { var o, r, l = t.exports = {};

        function n() { throw new Error("setTimeout has not been defined") }

        function i() { throw new Error("clearTimeout has not been defined") }

        function c(t) { if (o === setTimeout) return setTimeout(t, 0); if ((o === n || !o) && setTimeout) return o = setTimeout, setTimeout(t, 0); try { return o(t, 0) } catch (e) { try { return o.call(null, t, 0) } catch (e) { return o.call(this, t, 0) } } }! function() { try { o = "function" == typeof setTimeout ? setTimeout : n } catch (t) { o = n } try { r = "function" == typeof clearTimeout ? clearTimeout : i } catch (t) { r = i } }(); var a, s = [],
            p = !1,
            u = -1;

        function d() { p && a && (p = !1, a.length ? s = a.concat(s) : u = -1, s.length && f()) }

        function f() { if (!p) { var t = c(d);
                p = !0; for (var e = s.length; e;) { for (a = s, s = []; ++u < e;) a && a[u].run();
                    u = -1, e = s.length }
                a = null, p = !1,
                    function(t) { if (r === clearTimeout) return clearTimeout(t); if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t); try { r(t) } catch (e) { try { return r.call(null, t) } catch (e) { return r.call(this, t) } } }(t) } }

        function g(t, e) { this.fun = t, this.array = e }

        function m() {}
        l.nextTick = function(t) { var e = new Array(arguments.length - 1); if (arguments.length > 1)
                for (var o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
            s.push(new g(t, e)), 1 !== s.length || p || c(f) }, g.prototype.run = function() { this.fun.apply(null, this.array) }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = m, l.addListener = m, l.once = m, l.off = m, l.removeListener = m, l.removeAllListeners = m, l.emit = m, l.prependListener = m, l.prependOnceListener = m, l.listeners = function(t) { return [] }, l.binding = function(t) { throw new Error("process.binding is not supported") }, l.cwd = function() { return "/" }, l.chdir = function(t) { throw new Error("process.chdir is not supported") }, l.umask = function() { return 0 } }, function(t, e) { var o;
        o = function() { return this }(); try { o = o || new Function("return this")() } catch (t) { "object" == typeof window && (o = window) }
        t.exports = o }, function(t, e, o) { "use strict"; var r = Object.getOwnPropertySymbols,
            l = Object.prototype.hasOwnProperty,
            n = Object.prototype.propertyIsEnumerable;

        function i(t) { if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(t) }
        t.exports = function() { try { if (!Object.assign) return !1; var t = new String("abc"); if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1; for (var e = {}, o = 0; o < 10; o++) e["_" + String.fromCharCode(o)] = o; if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) { return e[t] })).join("")) return !1; var r = {}; return "abcdefghijklmnopqrst".split("").forEach((function(t) { r[t] = t })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("") } catch (t) { return !1 } }() ? Object.assign : function(t, e) { for (var o, c, a = i(t), s = 1; s < arguments.length; s++) { for (var p in o = Object(arguments[s])) l.call(o, p) && (a[p] = o[p]); if (r) { c = r(o); for (var u = 0; u < c.length; u++) n.call(o, c[u]) && (a[c[u]] = o[c[u]]) } } return a } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1),
            l = o(0),
            n = o(29);
        e.backButton = function(t, e) { return r.createElement("div", { className: "back", onClick: e }, n.ICON_BACK(t.textColor || "#000"), t.buttons && t.buttons.backLabel || l.pgettext("collector-rolling", "Back")) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(0),
            l = o(1);
        e.pauseDialog = function(t, e, o) { var n = l.createRef(),
                i = l.createRef(),
                c = function() { if (n.current) { var t = n.current.value || "",
                            e = t && /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t); return i.current && i.current.classList.toggle("disabled", !e), e } return !1 },
                a = function() { t.current && t.current.classList.remove("pause-dialog-visible") },
                s = function() { c() && (a(), o && n.current && o(n.current.value)) }; return l.createElement("section", { className: "pause-dialog", ref: t }, l.createElement("div", { className: "pause-dialog-backdrop" }), l.createElement("div", { className: "pause-dialog-window", role: "dialog" }, l.createElement("div", { className: "modal-dialog modal-dialog-centered", role: "document" }, l.createElement("div", { className: "modal-content", style: { backgroundColor: "" === e.backgroundColor ? void 0 : "transparent" === e.backgroundColor ? "#ffffff" : e.backgroundColor, fontFamily: e.textFont || void 0, color: e.textColor || void 0 } }, l.createElement("div", { className: "modal-body my-3 text-center" }, l.createElement("div", { className: "container" }, l.createElement("div", { className: "row" }, l.createElement("div", { className: "col" }, l.createElement("h2", null, r.pgettext("collector-rolling", "🚦 Standby...")), l.createElement("h3", null, r.pgettext("collector-rolling", "You're pausing the form")), l.createElement("p", { className: "text-faded" }, r.pgettext("collector-rolling", "Receive a link by email to resume later on any device, right where you left off. "), l.createElement("strong", null, r.pgettext("collector-rolling", "Your email address will not be stored."))))), l.createElement("div", { className: "row justify-content-sm-center" }, l.createElement("div", { className: "col-sm-8" }, l.createElement("input", { type: "email", ref: n, className: "form-control form-control-" + (e.form && e.form.inputStyle || "default"), placeholder: r.pgettext("collector-rolling", "Your email address..."), onChange: function() { return c() }, onKeyPress: function(t) { "Enter" === t.key && s() } }), l.createElement("button", { className: "btn btn-" + (e.buttons && e.buttons.okStyle || "primary") + " btn-block disabled", ref: i, onClick: function() { return s() } }, r.pgettext("collector-rolling", "Receive resume link")), l.createElement("span", { className: "link", style: { color: e.textColor }, onClick: function() { return a() } }, r.pgettext("collector-rolling", "Resume now anyway")))))))))) }, e.usePauseDialog = function(t) { return function(e) { return e.showPauseDialog((function(o) { var r = e.pause();
                    r && t(o, r) })), !0 } } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(6);
        e.Collector = r.Collector; var l = o(12);
        e.usePauseDialog = l.usePauseDialog; var n = o(121);
        e.run = n.run }, function(t, e, o) {
        (function(e, r) { var l;
            l = function() { "use strict";

                function t(t) { return "function" == typeof t } var l = Array.isArray ? Array.isArray : function(t) { return "[object Array]" === Object.prototype.toString.call(t) },
                    n = 0,
                    i = void 0,
                    c = void 0,
                    a = function(t, e) { m[n] = t, m[n + 1] = e, 2 === (n += 2) && (c ? c(h) : w()) },
                    s = "undefined" != typeof window ? window : void 0,
                    p = s || {},
                    u = p.MutationObserver || p.WebKitMutationObserver,
                    d = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                    f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function g() { var t = setTimeout; return function() { return t(h, 1) } } var m = new Array(1e3);

                function h() { for (var t = 0; t < n; t += 2)(0, m[t])(m[t + 1]), m[t] = void 0, m[t + 1] = void 0;
                    n = 0 } var b, v, y, x, w = void 0;

                function _(t, e) { var o = arguments,
                        r = this,
                        l = new this.constructor(S);
                    void 0 === l[E] && q(l); var n, i = r._state; return i ? (n = o[i - 1], a((function() { return B(i, l, n, r._result) }))) : R(r, l, t, e), l }

                function k(t) { if (t && "object" == typeof t && t.constructor === this) return t; var e = new this(S); return A(e, t), e }
                d ? w = function() { return e.nextTick(h) } : u ? (v = 0, y = new u(h), x = document.createTextNode(""), y.observe(x, { characterData: !0 }), w = function() { x.data = v = ++v % 2 }) : f ? ((b = new MessageChannel).port1.onmessage = h, w = function() { return b.port2.postMessage(0) }) : w = void 0 === s ? function() { try { var t = o(15); return i = t.runOnLoop || t.runOnContext,
                            function() { i(h) } } catch (t) { return g() } }() : g(); var E = Math.random().toString(36).substring(16);

                function S() {} var T = void 0,
                    C = 1,
                    O = 2,
                    N = new z;

                function P(t) { try { return t.then } catch (t) { return N.error = t, N } }

                function j(e, o, r) { o.constructor === e.constructor && r === _ && o.constructor.resolve === k ? function(t, e) { e._state === C ? I(t, e._result) : e._state === O ? M(t, e._result) : R(e, void 0, (function(e) { return A(t, e) }), (function(e) { return M(t, e) })) }(e, o) : r === N ? M(e, N.error) : void 0 === r ? I(e, o) : t(r) ? function(t, e, o) { a((function(t) { var r = !1,
                                l = function(t, e, o, r) { try { t.call(e, o, r) } catch (t) { return t } }(o, e, (function(o) { r || (r = !0, e !== o ? A(t, o) : I(t, o)) }), (function(e) { r || (r = !0, M(t, e)) }), t._label);!r && l && (r = !0, M(t, l)) }), t) }(e, o, r) : I(e, o) }

                function A(t, e) { var o;
                    t === e ? M(t, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof(o = e) || "object" == typeof o && null !== o ? j(t, e, P(e)) : I(t, e) }

                function D(t) { t._onerror && t._onerror(t._result), L(t) }

                function I(t, e) { t._state === T && (t._result = e, t._state = C, 0 !== t._subscribers.length && a(L, t)) }

                function M(t, e) { t._state === T && (t._state = O, t._result = e, a(D, t)) }

                function R(t, e, o, r) { var l = t._subscribers,
                        n = l.length;
                    t._onerror = null, l[n] = e, l[n + C] = o, l[n + O] = r, 0 === n && t._state && a(L, t) }

                function L(t) { var e = t._subscribers,
                        o = t._state; if (0 !== e.length) { for (var r = void 0, l = void 0, n = t._result, i = 0; i < e.length; i += 3) r = e[i], l = e[i + o], r ? B(o, r, l, n) : l(n);
                        t._subscribers.length = 0 } }

                function z() { this.error = null } var F = new z;

                function B(e, o, r, l) { var n = t(r),
                        i = void 0,
                        c = void 0,
                        a = void 0,
                        s = void 0; if (n) { if ((i = function(t, e) { try { return t(e) } catch (t) { return F.error = t, F } }(r, l)) === F ? (s = !0, c = i.error, i = null) : a = !0, o === i) return void M(o, new TypeError("A promises callback cannot return that same promise.")) } else i = l, a = !0;
                    o._state !== T || (n && a ? A(o, i) : s ? M(o, c) : e === C ? I(o, i) : e === O && M(o, i)) } var U = 0;

                function q(t) { t[E] = U++, t._state = void 0, t._result = void 0, t._subscribers = [] }

                function H(t, e) { this._instanceConstructor = t, this.promise = new t(S), this.promise[E] || q(this.promise), l(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? I(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && I(this.promise, this._result))) : M(this.promise, new Error("Array Methods must be provided an Array")) }

                function W(t) { this[E] = U++, this._result = this._state = void 0, this._subscribers = [], S !== t && ("function" != typeof t && function() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }(), this instanceof W ? function(t, e) { try { e((function(e) { A(t, e) }), (function(e) { M(t, e) })) } catch (e) { M(t, e) } }(this, t) : function() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }()) }

                function V() { var t = void 0; if (void 0 !== r) t = r;
                    else if ("undefined" != typeof self) t = self;
                    else try { t = Function("return this")() } catch (t) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                    var e = t.Promise; if (e) { var o = null; try { o = Object.prototype.toString.call(e.resolve()) } catch (t) {} if ("[object Promise]" === o && !e.cast) return }
                    t.Promise = W } return H.prototype._enumerate = function() { for (var t = this.length, e = this._input, o = 0; this._state === T && o < t; o++) this._eachEntry(e[o], o) }, H.prototype._eachEntry = function(t, e) { var o = this._instanceConstructor,
                        r = o.resolve; if (r === k) { var l = P(t); if (l === _ && t._state !== T) this._settledAt(t._state, e, t._result);
                        else if ("function" != typeof l) this._remaining--, this._result[e] = t;
                        else if (o === W) { var n = new o(S);
                            j(n, t, l), this._willSettleAt(n, e) } else this._willSettleAt(new o((function(e) { return e(t) })), e) } else this._willSettleAt(r(t), e) }, H.prototype._settledAt = function(t, e, o) { var r = this.promise;
                    r._state === T && (this._remaining--, t === O ? M(r, o) : this._result[e] = o), 0 === this._remaining && I(r, this._result) }, H.prototype._willSettleAt = function(t, e) { var o = this;
                    R(t, void 0, (function(t) { return o._settledAt(C, e, t) }), (function(t) { return o._settledAt(O, e, t) })) }, W.all = function(t) { return new H(this, t).promise }, W.race = function(t) { var e = this; return l(t) ? new e((function(o, r) { for (var l = t.length, n = 0; n < l; n++) e.resolve(t[n]).then(o, r) })) : new e((function(t, e) { return e(new TypeError("You must pass an array to race.")) })) }, W.resolve = k, W.reject = function(t) { var e = new this(S); return M(e, t), e }, W._setScheduler = function(t) { c = t }, W._setAsap = function(t) { a = t }, W._asap = a, W.prototype = { constructor: W, then: _, catch: function(t) { return this.then(null, t) } }, V(), W.polyfill = V, W.Promise = W, W }, t.exports = l() }).call(this, o(8), o(9)) }, function(t, e) {}, function(t, e, o) { "use strict"; var r = o(10),
            l = "function" == typeof Symbol && Symbol.for,
            n = l ? Symbol.for("react.element") : 60103,
            i = l ? Symbol.for("react.portal") : 60106,
            c = l ? Symbol.for("react.fragment") : 60107,
            a = l ? Symbol.for("react.strict_mode") : 60108,
            s = l ? Symbol.for("react.profiler") : 60114,
            p = l ? Symbol.for("react.provider") : 60109,
            u = l ? Symbol.for("react.context") : 60110,
            d = l ? Symbol.for("react.forward_ref") : 60112,
            f = l ? Symbol.for("react.suspense") : 60113,
            g = l ? Symbol.for("react.suspense_list") : 60120,
            m = l ? Symbol.for("react.memo") : 60115,
            h = l ? Symbol.for("react.lazy") : 60116;
        l && Symbol.for("react.fundamental"), l && Symbol.for("react.responder"); var b = "function" == typeof Symbol && Symbol.iterator;

        function v(t) { for (var e = t.message, o = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) o += "&args[]=" + encodeURIComponent(arguments[r]); return t.message = "Minified React error #" + e + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", t } var y = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
            x = {};

        function w(t, e, o) { this.props = t, this.context = e, this.refs = x, this.updater = o || y }

        function _() {}

        function k(t, e, o) { this.props = t, this.context = e, this.refs = x, this.updater = o || y }
        w.prototype.isReactComponent = {}, w.prototype.setState = function(t, e) { if ("object" != typeof t && "function" != typeof t && null != t) throw v(Error(85));
            this.updater.enqueueSetState(this, t, e, "setState") }, w.prototype.forceUpdate = function(t) { this.updater.enqueueForceUpdate(this, t, "forceUpdate") }, _.prototype = w.prototype; var E = k.prototype = new _;
        E.constructor = k, r(E, w.prototype), E.isPureReactComponent = !0; var S = { current: null },
            T = { suspense: null },
            C = { current: null },
            O = Object.prototype.hasOwnProperty,
            N = { key: !0, ref: !0, __self: !0, __source: !0 };

        function P(t, e, o) { var r = void 0,
                l = {},
                i = null,
                c = null; if (null != e)
                for (r in void 0 !== e.ref && (c = e.ref), void 0 !== e.key && (i = "" + e.key), e) O.call(e, r) && !N.hasOwnProperty(r) && (l[r] = e[r]); var a = arguments.length - 2; if (1 === a) l.children = o;
            else if (1 < a) { for (var s = Array(a), p = 0; p < a; p++) s[p] = arguments[p + 2];
                l.children = s } if (t && t.defaultProps)
                for (r in a = t.defaultProps) void 0 === l[r] && (l[r] = a[r]); return { $$typeof: n, type: t, key: i, ref: c, props: l, _owner: C.current } }

        function j(t) { return "object" == typeof t && null !== t && t.$$typeof === n } var A = /\/+/g,
            D = [];

        function I(t, e, o, r) { if (D.length) { var l = D.pop(); return l.result = t, l.keyPrefix = e, l.func = o, l.context = r, l.count = 0, l } return { result: t, keyPrefix: e, func: o, context: r, count: 0 } }

        function M(t) { t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, 10 > D.length && D.push(t) }

        function R(t, e, o) { return null == t ? 0 : function t(e, o, r, l) { var c = typeof e; "undefined" !== c && "boolean" !== c || (e = null); var a = !1; if (null === e) a = !0;
                else switch (c) {
                    case "string":
                    case "number":
                        a = !0; break;
                    case "object":
                        switch (e.$$typeof) {
                            case n:
                            case i:
                                a = !0 } }
                if (a) return r(l, e, "" === o ? "." + L(e, 0) : o), 1; if (a = 0, o = "" === o ? "." : o + ":", Array.isArray(e))
                    for (var s = 0; s < e.length; s++) { var p = o + L(c = e[s], s);
                        a += t(c, p, r, l) } else if (null === e || "object" != typeof e ? p = null : p = "function" == typeof(p = b && e[b] || e["@@iterator"]) ? p : null, "function" == typeof p)
                        for (e = p.call(e), s = 0; !(c = e.next()).done;) a += t(c = c.value, p = o + L(c, s++), r, l);
                    else if ("object" === c) throw r = "" + e, v(Error(31), "[object Object]" === r ? "object with keys {" + Object.keys(e).join(", ") + "}" : r, ""); return a }(t, "", e, o) }

        function L(t, e) { return "object" == typeof t && null !== t && null != t.key ? function(t) { var e = { "=": "=0", ":": "=2" }; return "$" + ("" + t).replace(/[=:]/g, (function(t) { return e[t] })) }(t.key) : e.toString(36) }

        function z(t, e) { t.func.call(t.context, e, t.count++) }

        function F(t, e, o) { var r = t.result,
                l = t.keyPrefix;
            t = t.func.call(t.context, e, t.count++), Array.isArray(t) ? B(t, r, o, (function(t) { return t })) : null != t && (j(t) && (t = function(t, e) { return { $$typeof: n, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner } }(t, l + (!t.key || e && e.key === t.key ? "" : ("" + t.key).replace(A, "$&/") + "/") + o)), r.push(t)) }

        function B(t, e, o, r, l) { var n = "";
            null != o && (n = ("" + o).replace(A, "$&/") + "/"), R(t, F, e = I(e, n, r, l)), M(e) }

        function U() { var t = S.current; if (null === t) throw v(Error(321)); return t } var q = { Children: { map: function(t, e, o) { if (null == t) return t; var r = []; return B(t, r, null, e, o), r }, forEach: function(t, e, o) { if (null == t) return t;
                        R(t, z, e = I(null, null, e, o)), M(e) }, count: function(t) { return R(t, (function() { return null }), null) }, toArray: function(t) { var e = []; return B(t, e, null, (function(t) { return t })), e }, only: function(t) { if (!j(t)) throw v(Error(143)); return t } }, createRef: function() { return { current: null } }, Component: w, PureComponent: k, createContext: function(t, e) { return void 0 === e && (e = null), (t = { $$typeof: u, _calculateChangedBits: e, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null }).Provider = { $$typeof: p, _context: t }, t.Consumer = t }, forwardRef: function(t) { return { $$typeof: d, render: t } }, lazy: function(t) { return { $$typeof: h, _ctor: t, _status: -1, _result: null } }, memo: function(t, e) { return { $$typeof: m, type: t, compare: void 0 === e ? null : e } }, useCallback: function(t, e) { return U().useCallback(t, e) }, useContext: function(t, e) { return U().useContext(t, e) }, useEffect: function(t, e) { return U().useEffect(t, e) }, useImperativeHandle: function(t, e, o) { return U().useImperativeHandle(t, e, o) }, useDebugValue: function() {}, useLayoutEffect: function(t, e) { return U().useLayoutEffect(t, e) }, useMemo: function(t, e) { return U().useMemo(t, e) }, useReducer: function(t, e, o) { return U().useReducer(t, e, o) }, useRef: function(t) { return U().useRef(t) }, useState: function(t) { return U().useState(t) }, Fragment: c, Profiler: s, StrictMode: a, Suspense: f, unstable_SuspenseList: g, createElement: P, cloneElement: function(t, e, o) { if (null == t) throw v(Error(267), t); var l = void 0,
                        i = r({}, t.props),
                        c = t.key,
                        a = t.ref,
                        s = t._owner; if (null != e) { void 0 !== e.ref && (a = e.ref, s = C.current), void 0 !== e.key && (c = "" + e.key); var p = void 0; for (l in t.type && t.type.defaultProps && (p = t.type.defaultProps), e) O.call(e, l) && !N.hasOwnProperty(l) && (i[l] = void 0 === e[l] && void 0 !== p ? p[l] : e[l]) } if (1 === (l = arguments.length - 2)) i.children = o;
                    else if (1 < l) { p = Array(l); for (var u = 0; u < l; u++) p[u] = arguments[u + 2];
                        i.children = p } return { $$typeof: n, type: t.type, key: c, ref: a, props: i, _owner: s } }, createFactory: function(t) { var e = P.bind(null, t); return e.type = t, e }, isValidElement: j, version: "16.9.0", unstable_withSuspenseConfig: function(t, e) { var o = T.suspense;
                    T.suspense = void 0 === e ? null : e; try { t() } finally { T.suspense = o } }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentDispatcher: S, ReactCurrentBatchConfig: T, ReactCurrentOwner: C, IsSomeRendererActing: { current: !1 }, assign: r } },
            H = { default: q },
            W = H && q || H;
        t.exports = W.default || W }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(5),
            c = o(18),
            a = o(23),
            s = o(24),
            p = o(25),
            u = o(27),
            d = o(11),
            f = o(30);
        o(31), o(35), o(39), o(43), o(47), o(54), o(58), o(63), o(67), o(71), o(75), o(79), o(85), o(90), o(94), o(98), o(102), o(108), o(109), o(110); var g = function(t) {
            function e(e) { var o = t.call(this, e.props.definition, "progressive", e.props.snapshot || !0) || this; return o.scroller = l.createRef(), o.activeElement = l.createRef(), o.component = e, o.preview = "preview" === e.props.view, o.hook("OnStart", "synchronous", (function() { return o.reset() })), o.hook("OnRestart", "synchronous", (function() { var t = o.scroller.current;
                    o.reset(), t && (t.scrollTo ? t.scrollTo({ left: 0, top: 0, behavior: "smooth" }) : t.scrollTop = 0) })), o.hook("OnResume", "synchronous", (function(t) { t.data && t.data.a && e.setState({ initialBlock: t.data.a, focus: t.data.b || {} }) })), o } return r.__extends(e, t), e.prototype.reset = function() { this.component.isReloading || this.component.setState({ activeBlock: void 0, isLoading: !0, isAutoFocusFulfilled: !1, changes: 0, focus: {} }) }, e.prototype.calculateFocusPoint = function(t, e) { return this.component.state.isLoading ? 0 : t.top + (e ? n.Num.min(e.height, t.height) : t.height) / 2 }, e.prototype.findActiveBlock = function() { var t = this,
                    e = this.scroller.current; if (e) { var o = e.firstElementChild; if (o) { var r, l = e.getBoundingClientRect(),
                            i = l.height,
                            c = n.castToBoolean(this.component.style.centerActiveBlock, !0),
                            a = 0,
                            s = 0,
                            p = 0,
                            u = 0,
                            d = "",
                            f = !1,
                            g = !1,
                            m = 0,
                            h = 0,
                            b = c ? "centered" : "";
                        n.each(o.children, (function(e) { var o = e.getAttribute("data-key") || "",
                                i = e.getBoundingClientRect();
                            b += o || "", i.height > 0 && (a = a || t.calculateFocusPoint(l, !c && i || void 0), g = !1, d && !n.Num.inRange(a, i.top, n.Num.max(i.bottom, l.bottom), !0, "complete" === o) || (d = o || "", f = 0 === s, g = !0), s += i.height, p = p || i.height, u = i.height, t.component.state.initialBlock === o && (r = t.component.state.initialBlock)) })), c ? (m = s && n.Num.max(n.Num.floor(n.Num.max(i - p, 0) / 2), 0), h = s && n.Num.max(i - m - s, 0), h += m + s > i ? n.Num.floor(n.Num.max(i - u, 0) / 2) : m + s - u / 2 - i / 2) : h = n.Num.max(i - s, 0) + n.Num.max(l.bottom - a - (u + n.Num.max(i - s, 0)) + n.Num.min(u / 2, a - l.top), 0); var v = n.Str.djb2Hash(b),
                            y = n.Num.round(m + s + h) + "px";
                        r && !this.component.state.isLoading && (this.activate(r), r = void 0), this.component.setState((function(t) { var e; return { offset: m + "px", height: n.extend(t.height, (e = { current: y }, e[v] = y, e)), activeBlock: d, initialBlock: r, isLoading: !1, isAtBegin: f, isAtEnd: g } })) } } }, e.prototype.move = function(t) { var e = this,
                    o = this.scroller.current; if (o) { var r = o.firstElementChild; if (r) { var l = "",
                            i = !1;
                        n.each(r.children, (function(o) { var r = o.getAttribute("data-key"),
                                n = o.getBoundingClientRect(); if (r && n.height > 0)
                                if (r === e.component.state.activeBlock) i = !0;
                                else switch (t) {
                                    case "up":
                                        i || (l = r); break;
                                    case "down":
                                        i && (l = l || r) } })), this.activate(l) } } }, e.prototype.handleFocus = function(t, e) { this.component.setState((function(o) { var r; return { focus: n.extend(o, (r = {}, r[t] = e, r)) } })) }, e.prototype.handleRef = function(t, e) { t && (e ? this.focusElement = t : this.blurElement = t) }, e.prototype.handleKeyDown = function(t) { if (this.keyHandler) { var e = this.keyHandler(t.keyCode, t.shiftKey); if (n.isBoolean(e)) return void(e && t.preventDefault()) } switch (t.keyCode) {
                    case 38:
                    case 40:
                    case 9:
                        this.move(38 === t.keyCode || 9 === t.keyCode && t.shiftKey ? "up" : "down"), t.preventDefault(); break;
                    case 13:
                        "complete" === this.component.state.activeBlock && "normal" === this.component.view ? this.finish() : this.move("down"), t.preventDefault() } }, e.prototype.activate = function(t) { if (this.component.state.activeBlock !== t) { var e = this.scroller.current; if (e) { var o = e.firstElementChild; if (o) { var r = n.castToBoolean(this.component.style.centerActiveBlock, !0),
                                l = n.findFirst(o.children, (function(e) { return e.getAttribute("data-key") === t && e.getBoundingClientRect().height > 0 })); if (l) { var i = !r && n.findFirst(o.children, (function(t) { return !(!t.getAttribute("data-key") || !t.getBoundingClientRect().height) })) || void 0,
                                    c = l.getBoundingClientRect(),
                                    a = e.getBoundingClientRect(),
                                    s = c.top + n.Num.min(c.height, a.height) / 2 - this.calculateFocusPoint(a, i && i.getBoundingClientRect()),
                                    p = e.scrollTop + s - n.Num.max(a.top - (c.top - s), 0);
                                e.scrollTo ? e.scrollTo({ left: 0, top: p, behavior: "smooth" }) : e.scrollTop = p } } } } }, e.prototype.render = function() { var t = this,
                    e = this.storyline; if (e) { var o = this.component.style,
                        r = this.component.state.focus,
                        g = e && e.count || 0,
                        m = n.castToBoolean(o.showEnumerators),
                        h = n.castToBoolean(o.showNavigation, !0),
                        b = n.castToBoolean(o.showScrollbar, !0),
                        v = n.castToBoolean(o.centerActiveBlock, !0),
                        y = this.isPreview,
                        x = y || !(!e || !e.isFinishable || !this.component.props.onFinish && "normal" === this.component.view),
                        w = 0,
                        _ = 0,
                        k = 0,
                        E = !!this.component.state.activeBlock,
                        S = 0,
                        T = v ? "centered" : "",
                        C = e.map((function(c) { return c.nodes.map((function(c) { var a = t.component.state.activeBlock === c.key || 0 === S && t.component.state.isLoading,
                                    s = t.component.props.onEditRequest && "preview" === t.component.props.usage && "normal" !== t.component.view && c.id && function() { return t.component.props.onEditRequest(c.id) } || void 0; return a ? E = !1 : E && ((c.enumerator && !c.isFailed || y) && _++, !y && c.isFailed && k++), S++, T += c.key, l.createElement("div", { key: c.key, "data-key": c.key, className: "row " + (a ? "active" : ""), ref: a && t.activeElement || void 0 }, l.createElement("div", { className: "col" }, c.block ? c.block.render({ style: o, name: function(t, e) { return n.castToBoolean(c.props.nameVisible, !0) && (!e || c.props.name) && l.createElement("h2", { onClick: s }, m && c.enumerator && l.createElement("span", { className: "numerator" }, c.enumerator, "."), i.markdownToJSX(c.props.name || "...", c.context), t && l.createElement("span", { className: "required" })) }, get description() { return c.props.description && l.createElement("p", { className: "text-faded", onClick: s }, i.markdownToJSX(c.props.description, c.context)) }, imageFromURL: function(e, o) { return e && l.createElement("img", { src: e, onLoad: function() { return t.component.forceUpdate() }, className: "img-fluid rounded-lg my-3", style: { width: o }, onClick: s }) }, explanation: function(t) { return c.props.explanation && l.createElement("small", { className: "form-text text-faded", id: t, onClick: s }, i.markdownToJSX(c.props.explanation, c.context)) }, get placeholder() { return n.markdownifyToString(c.props.placeholder || "", c.context, "...") }, placeholderOrName: function(t) { return l.createElement(l.Fragment, null, i.markdownToJSX(c.props.placeholder || c.props.name || "...", c.context, !1), t && l.createElement("span", { className: "required" })) }, get tabIndex() { return ++w }, get isActive() { return a }, get isFailed() { return !y && !0 !== r[c.key] && c.isFailed && (E || !1 === r[c.key]) }, get canContinue() { return c.isPassed && (S < g || x) }, update: function() { return t.component.forceUpdate() }, next: function() { return t.move("down") }, nextAfterAnimation: function() { return setTimeout((function() { return t.move("down") }), 500) }, okButton: p.okButton(o, c.isPassed && (S < g || x), (function() { return t.move("down") })), onFocus: function() { return t.handleFocus(c.key, !0) }, onBlur: function() { return t.handleFocus(c.key, !1) }, keystroke: function(e) { requestAnimationFrame((function() { t.component.state.activeBlock === c.key && (t.keyHandler = e) })) }, ref: function(e) { return t.handleRef(e, a) }, onAttachment: t.component.props.onAttachment }) : l.createElement("div", { className: "static", tabIndex: ++w, ref: function(e) { return t.handleRef(e, a) }, onClick: S >= g && !e.isFinishable || s ? void 0 : function() { return t.move("down") } }, c.props.nameVisible && l.createElement("h2", { onClick: s }, i.markdownToJSX(c.props.name || "...", c.context)), c.props.description && l.createElement("p", { className: "text-faded", onClick: s }, i.markdownToJSX(c.props.description, c.context, !0)), l.createElement("div", { className: a && (S < g || e.isFinishable) ? "active" : "" }, p.okButton(o, !(S >= g && !e.isFinishable), (function() { return t.move("down") }))))), l.createElement("div", { className: "activator", onClick: function() { return t.activate(c.key) } }, S > 1 && d.backButton(o, (function() { return t.move("up") })), u.editButton(s))) })) })); return this.keyHandler = void 0, l.createElement(l.Fragment, null, l.createElement("div", { tabIndex: ++w, ref: this.scroller, onScroll: function() { return t.findActiveBlock() }, onKeyDown: function(e) { return t.handleKeyDown(e) }, className: (this.component.state.isLoading ? "loading " : "") + (h ? "navigation" : "") + (b ? " scrollbar" : "") }, l.createElement("div", { className: "container" + ("standalone" !== this.component.props.usage ? " inline-usage" : ""), style: { paddingTop: this.component.state.offset, paddingLeft: "standalone" === this.component.props.usage || "preview" === this.component.props.usage || h ? void 0 : "5px", paddingRight: "standalone" === this.component.props.usage || "preview" === this.component.props.usage || h || b ? void 0 : "5px", minHeight: this.component.state.height[n.Str.djb2Hash(T + (x && g > 0 ? "complete" : ""))] || this.component.state.height.current } }, C, x && g > 0 && f.completeButton(o, this.component.overrides, this.component.view, ++w, "complete" === this.component.state.activeBlock, h, (function(e, o) { return t.handleRef(e, o) }), (function() { return e.finish() }), !h && S > 1 && function() { return t.move("up") } || void 0), e.isEmpty && s.emptyMessage(this.component.view))), a.failedNotification(e, k, (function(e) { return t.activate(e) })), h && c.navigation(o, this.component.overrides, e, this.component.view, this.component.props.usage, g, _, this.isPreview, this.component.state.isLoading, this.component.state.isAtBegin, this.component.state.isAtEnd, (function() { return t.move("up") }), (function() { return t.move("down") }), this.component.props.onPause && function() { return t.component.requestPause() })) } }, e.prototype.componentDidUpdate = function() { var t = document.activeElement; if (this.preview = "preview" === this.component.state.view, this.findActiveBlock(), this.focusElement) { if (document.hasFocus()) { var e = !1; for (this.component.state.isLoading || this.component.state.isAutoFocusFulfilled || (e = n.castToBoolean(this.component.style.autoFocus, this.component.props.autoFocus) && "normal" === this.component.view && (!t || "BODY" === t.tagName), this.component.setState({ isAutoFocusFulfilled: !0 })); t && !e;) t.isEqualNode && t.isEqualNode(this.scroller.current) && (e = !0), t = t.parentElement;
                        e && this.focusElement.focus({ preventScroll: !0 }) }
                    this.focusElement = void 0 }
                this.blurElement && t && t.isEqualNode && t.isEqualNode(this.blurElement) && (this.blurElement.blur(), this.blurElement = void 0) }, e }(n.Collector);
        e.Blocks = g }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1),
            l = o(0),
            n = o(19),
            i = o(20),
            c = o(21),
            a = o(22);
        e.navigation = function(t, e, o, s, p, u, d, f, g, m, h, b, v, y) { return r.createElement("nav", { style: { backgroundColor: t.footer && t.footer.backgroundColor || void 0, color: t.footer && t.footer.textColor || void 0 } }, r.createElement("div", { className: "container" + ("standalone" !== p ? " inline-usage" : "") }, r.createElement("div", { className: "row align-items-center" }, r.createElement("div", { className: "col" }, l.castToBoolean(t.showProgressbar, !0) && r.createElement("div", null, n.progressbar(t, o, u, d, f, g)), r.createElement("div", { className: "payoff" }, !e.removeBranding && r.createElement("a", { href: "https://tripetto.app", target: "_blank", className: "text-faded", style: { color: t.footer && t.footer.textColor || void 0 } }, l.pgettext("collector-rolling", "")))), r.createElement("div", { className: "col text-right" }, r.createElement("button", { className: "btn btn-" + (t.footer && t.footer.navigationStyle || "light"), disabled: 0 === u || m, onClick: b }, c.ICON_UP), y && r.createElement("button", { className: "btn btn-" + (t.footer && t.footer.navigationStyle || "light") + " ml-1", disabled: "normal" !== s || g || o.isEvaluating || 0 === o.enumerators, onClick: y }, a.ICON_PAUSE), r.createElement("button", { className: "btn btn-" + (t.footer && t.footer.navigationStyle || "light") + " ml-1", disabled: 0 === u || h, onClick: v }, i.ICON_DOWN))))) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1),
            l = o(0);
        e.progressbar = function(t, e, o, n, i, c) { var a = i ? o - 1 : e.enumerators,
                s = c ? 0 : a > 0 ? 100 / a * n : 100; if (0 !== o) return r.createElement(r.Fragment, null, r.createElement("div", { className: "progress-text" }, c ? l.pgettext("collector-rolling", "Loading...") : e.isEvaluating ? l.pgettext("collector-rolling", "Please wait...") : i ? l.pgettext("collector-rolling", "Showing all without logic") : 0 === e.enumerators ? l.pgettext("collector-rolling", "Nothing to answer") : l.pgettext("collector-rolling", "%1 of %2 completed", "" + n, "" + e.enumerators)), r.createElement("div", { className: "progress" }, r.createElement("div", { className: "progress-bar bg-" + (t.footer && t.footer.progressbarStyle || "primary"), role: "progressbar", "aria-valuenow": s, "aria-valuemin": 0, "aria-valuemax": 100, style: { width: s + "%", minWidth: "2em" } }))) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_DOWN = r.createElement("svg", { viewBox: "0 0 10240 10240" }, r.createElement("path", { d: "M1273 3989l3621 3620c124,125 328,125 452,0l3621 -3620c124,-125 124,-328 0,-453l-905 -905c-125,-125 -328,-125 -453,0l-2489 2489 -2489 -2489c-125,-125 -328,-125 -453,0l-905 905c-124,125 -124,328 0,453z" })) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_UP = r.createElement("svg", { viewBox: "0 0 10240 10240" }, r.createElement("path", { d: "M1273 6251l3621 -3620c124,-125 328,-125 452,0l3621 3620c124,125 124,328 0,453l-905 905c-125,125 -328,125 -453,0l-2489 -2489 -2489 2489c-125,125 -328,125 -453,0l-905 -905c-124,-125 -124,-328 0,-453z" })) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_PAUSE = r.createElement("svg", { viewBox: "0 0 10240 10240" }, r.createElement("path", { d: "M6400 1280l1280 0c353,0 640,288 640,640l0 6400c0,352 -288,640 -640,640l-1280 0c-352,0 -640,-288 -640,-640l0 -6400c0,-353 287,-640 640,-640z" }), r.createElement("path", { d: "M2560 1280l1280 0c353,0 640,288 640,640l0 6400c0,352 -288,640 -640,640l-1280 0c-352,0 -640,-287 -640,-640l0 -6400c0,-353 287,-640 640,-640z" })) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1),
            l = o(0);
        e.failedNotification = function(t, e, o) { return r.createElement("div", { className: "failed" + (e > 0 ? " show" : "") }, r.createElement("div", { className: "alert alert-danger", role: "alert", onClick: function() { l.findFirst(t.moments, (function(t) { var e = l.findFirst(t.nodes, (function(t) { return t.isFailed })); return !!e && (o(e.key), !0) })) } }, l.npgettext("collector-rolling", "%1 item requires your attention! Click to fix.", "%1 items require your attention! Click to fix.", e || 1))) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1),
            l = o(0);
        e.emptyMessage = function(t) { return r.createElement("div", { className: "row justify-content-center message active" }, r.createElement("div", { className: "col-md-8 col-lg-10" }, r.createElement("div", { className: "text-center" }, "normal" === t ? r.createElement(r.Fragment, null, r.createElement("h2", null, l.pgettext("collector-rolling", "👋 Hi there")), r.createElement("h3", null, l.pgettext("collector-rolling", "This form happens to be empty")), r.createElement("p", { className: "text-faded" }, l.pgettext("collector-rolling", "Nothing to do here for now. Thanks for visiting though."))) : r.createElement(r.Fragment, null, r.createElement("h2", null, l.pgettext("collector-rolling", "👋 Nothing to show")), r.createElement("h3", null, l.pgettext("collector-rolling", "The form is empty")), r.createElement("p", { className: "text-faded" }, l.pgettext("collector-rolling", "Add blocks to the form first to get the magic going.")))))) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1),
            l = o(0),
            n = o(26);
        e.okButton = function(t, e, o) { return r.createElement("button", { disabled: !e, className: "btn btn-" + (t.buttons && t.buttons.okStyle || "primary") + " btn-next", onClick: o }, r.createElement("span", { className: "mr-2" }, t.buttons && t.buttons.okLabel || l.pgettext("collector-rolling", "OK")), n.ICON_OK) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_OK = r.createElement("svg", { viewBox: "0 0 20 20" }, r.createElement("path", { d: "M9.854 19.354l6-6c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.146 5.146v-16.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v16.293l-5.146-5.146c-0.195-0.195-0.512-0.195-0.707 0-0.098 0.098-0.146 0.226-0.146 0.354s0.049 0.256 0.146 0.354l6 6c0.195 0.195 0.512 0.195 0.707 0z" })) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1),
            l = o(28);
        e.editButton = function(t) { return t && r.createElement("div", { className: "edit", onClick: t }, l.ICON_EDIT) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_EDIT = r.createElement("svg", { viewBox: "0 0 20 20" }, r.createElement("path", { fill: "#000", d: "M19.104 0.896c-0.562-0.562-1.309-0.871-2.104-0.871s-1.542 0.309-2.104 0.871l-12.75 12.75c-0.052 0.052-0.091 0.114-0.116 0.183l-2 5.5c-0.066 0.183-0.021 0.387 0.116 0.524 0.095 0.095 0.223 0.146 0.354 0.146 0.057 0 0.115-0.010 0.171-0.030l5.5-2c0.069-0.025 0.131-0.065 0.183-0.116l12.75-12.75c0.562-0.562 0.871-1.309 0.871-2.104s-0.309-1.542-0.871-2.104zM5.725 17.068l-4.389 1.596 1.596-4.389 11.068-11.068 2.793 2.793-11.068 11.068zM18.396 4.396l-0.896 0.896-2.793-2.793 0.896-0.896c0.373-0.373 0.869-0.578 1.396-0.578s1.023 0.205 1.396 0.578c0.373 0.373 0.578 0.869 0.578 1.396s-0.205 1.023-0.578 1.396z" })) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_BACK = function(t) { return r.createElement("svg", { viewBox: "0 0 20 20" }, r.createElement("path", { fill: t, d: "M9.146 0.646l-6 6c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l5.146-5.146v16.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-16.293l5.146 5.146c0.195 0.195 0.512 0.195 0.707 0 0.098-0.098 0.146-0.226 0.146-0.354s-0.049-0.256-0.146-0.354l-6-6c-0.195-0.195-0.512-0.195-0.707 0z" })) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1),
            l = o(0),
            n = o(11);
        e.completeButton = function(t, e, o, i, c, a, s, p, u) { return r.createElement("div", { "data-key": "complete", className: "row complete " + (c ? " active" : "") }, r.createElement("div", { className: "col", style: { borderColor: t.textColor } }, r.createElement("button", { className: "btn btn-" + (t.buttons && t.buttons.completeStyle || "success"), disabled: "normal" !== o, onClick: p, tabIndex: ++i, ref: function(t) { return s(t, c) } }, t.buttons && t.buttons.completeLabel || l.pgettext("collector-rolling", "Complete")), "normal" !== o && r.createElement("small", { className: "ml-3 text-faded", style: { color: t.textColor } }, l.pgettext("collector-rolling", "Disabled in preview mode")), "normal" === o && !a && !e.removeBranding && r.createElement("small", { className: "ml-3 text-faded payoff" }, r.createElement("a", { href: "https://tripetto.app", target: "_blank", className: "text-faded", style: { color: t.textColor } }, l.pgettext("collector-rolling", "Built with Tripetto")))), u && r.createElement("div", { className: "activator" }, n.backButton(t, u))) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(32);
        o(33); var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-checkbox" }, t.placeholder && t.name(!1, !0), t.description, l.createElement("div", { className: "custom-control custom-checkbox" }, l.createElement("input", { key: this.key(), id: this.key(), type: "checkbox", defaultChecked: this.checkboxSlot.value, onChange: function(t) { e.checkboxSlot.value = t.target.checked }, className: "custom-control-input checkbox-control-" + (t.style.form && t.style.form.inputStyle || "default"), "aria-describedby": this.node.explanation && this.key("explanation"), tabIndex: t.tabIndex, ref: t.ref }), l.createElement("label", { htmlFor: this.key(), className: "custom-control-label" }, t.placeholderOrName(this.required))), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-checkbox", alias: "checkbox" })], e) }(i.Checkbox);
        e.CheckboxBlock = c }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.Checkbox = r.Checkbox }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isChecked = function() { var t = this.valueOf(); return !!t && t.value === this.props.checked }, n([i.condition], e.prototype, "isChecked", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-checkbox", alias: "checkbox" })], e) }(i.ConditionBlock);
            e.CheckboxCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.checkboxSlot = i.assert(e.valueOf("checked")).confirm(), e.required = e.checkboxSlot.slot.required || !1, e } return l(e, t), e.prototype.toggle = function() { this.checkboxSlot.value = !this.checkboxSlot.value }, e.prototype.validate = function() { return !this.required || !0 === this.checkboxSlot.value }, n([i.validator], e.prototype, "validate", null), e }(i.NodeBlock);
            e.Checkbox = c }]) }, function(t, e, o) { var r = o(34); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-checkbox>div{padding:15px 0px;display:block !important}.tripetto-collector-checkbox>p+div{padding:0px 0px 15px}.tripetto-collector-checkbox>div:last-child{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(36);
        o(37); var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-checkboxes", tabIndex: t.tabIndex, ref: t.ref }, t.name(), t.description, l.createElement("div", null, this.props.checkboxes.map((function(o) { var r = e.checkboxSlot(o); return l.createElement("div", { key: r.key, className: "custom-control custom-checkbox" }, l.createElement("input", { key: r.key, id: r.key, type: "checkbox", defaultChecked: e.isChecked(o), onChange: function() { e.toggle(o), t.update() }, className: "custom-control-input checkbox-control-" + (t.style.form && t.style.form.inputStyle || "default"), "aria-describedby": e.node.explanation && e.key("explanation"), tabIndex: t.tabIndex }), l.createElement("label", { htmlFor: r.key, className: "custom-control-label" }, o.name || "...")) }))), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-checkboxes" })], e) }(i.Checkboxes);
        e.CheckboxesBlock = c }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.Checkboxes = r.Checkboxes }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isChecked = function() { var t = this.valueOf(); return t && t.value === this.props.checked || !1 }, n([i.condition], e.prototype, "isChecked", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-checkboxes" })], e) }(i.ConditionBlock);
            e.CheckboxCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                function o() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) });
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = o(0),
                i = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.checkboxSlot = function(t) { return n.assert(this.valueOf(t.id)) }, e.prototype.isChecked = function(t) { var e = this.checkboxSlot(t); return e && e.confirm().value || !1 }, e.prototype.check = function(t, e) { var o = this.checkboxSlot(t); return !!o && (o.value = e, o.confirm().value) }, e.prototype.toggle = function(t) { var e = this.checkboxSlot(t);
                        e && (e.value = !e.value) }, e }(n.NodeBlock);
            e.Checkboxes = i }]) }, function(t, e, o) { var r = o(38); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-checkboxes>div{padding:15px 0px;display:block !important}.tripetto-collector-checkboxes>div>div+div{padding-top:8px}.tripetto-collector-checkboxes>p+div{padding:0px 0px 15px}.tripetto-collector-checkboxes>div:last-child{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(40);
        o(41); var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-dropdown" }, t.name(this.required), t.description, l.createElement("select", { key: this.key(), id: this.key(), tabIndex: t.tabIndex, defaultValue: this.value, className: "custom-select form-control-" + (t.style.form && t.style.form.inputStyle || "default") + (t.isFailed ? " is-invalid" : ""), "aria-describedby": this.node.explanation && this.key("explanation"), onChange: function(t) { e.value = t.target.value }, onFocus: t.onFocus, onBlur: t.onBlur, ref: t.ref }, t.placeholder && l.createElement("option", { value: "", className: "placeholder" }, t.placeholder), this.props.options.map((function(t) { return t.name && l.createElement("option", { key: t.id, value: t.id }, t.name) }))), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-dropdown" })], e) }(i.Dropdown);
        e.DropdownBlock = c }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.Dropdown = r.Dropdown }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isSelected = function() { var t = this.valueOf(); return t && t.reference === this.props.option || !1 }, n([i.condition], e.prototype, "isSelected", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-dropdown" })], e) }(i.ConditionBlock);
            e.DropdownCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                function o() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) });
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = o(0),
                i = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.dropdownSlot = n.assert(e.valueOf("option")).confirm(), e.required = e.dropdownSlot.slot.required || !1, e } return l(e, t), Object.defineProperty(e.prototype, "value", { get: function() { var t = this,
                                e = n.findFirst(this.props.options, (function(e) { return e.id === t.dropdownSlot.reference })); return e || this.node.placeholder ? e && e.id || "" : this.select(n.arrayItem(this.props.options, 0)) }, set: function(t) { this.select(n.findFirst(this.props.options, (function(e) { return e.id === t }))) }, enumerable: !0, configurable: !0 }), e.prototype.select = function(t) { return this.dropdownSlot.set(t && (t.value || t.name), t && t.id), t && t.id || "" }, e }(n.NodeBlock);
            e.Dropdown = i }]) }, function(t, e, o) { var r = o(42); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-dropdown>select{margin:24px 0px !important}.tripetto-collector-dropdown>select>option.placeholder{color:#aaa}.tripetto-collector-dropdown>select.is-invalid{color:#dc3545}.tripetto-collector-dropdown>div{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(44);
        o(45); var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-email" }, t.name(this.required), t.description, l.createElement("input", { type: "email", key: this.key(), required: this.required, inputMode: "email", defaultValue: this.emailSlot.value, tabIndex: t.tabIndex, placeholder: t.placeholder || "@", className: "form-control form-control-" + (t.style.form && t.style.form.inputStyle || "default") + (t.isFailed ? " is-invalid" : ""), "aria-describedby": this.node.explanation && this.key("explanation"), onChange: function(t) { e.emailSlot.value = t.target.value }, onFocus: t.onFocus, onBlur: function(o) { t.onBlur(), o.target.value = e.emailSlot.string }, ref: t.ref }), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-email" })], e) }(i.Email);
        e.EmailBlock = c }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.Email = r.Email }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isMatch = function() { var t = this.valueOf(); if (t) switch (this.props.mode) {
                            case "domain":
                                return t.value.substr(t.value.lastIndexOf("@") + 1) === this.props.match || !1;
                            case "address":
                                return t.value === this.props.match || !1 }
                        return !1 }, n([i.condition], e.prototype, "isMatch", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-email" })], e) }(i.ConditionBlock);
            e.EmailCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                a = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.emailSlot = i.assert(e.valueOf("email")), e.required = e.emailSlot.slot.required || !1, e } return l(e, t), e.prototype.validate = function() { return !this.emailSlot.string || c.test(this.emailSlot.value) }, n([i.validator], e.prototype, "validate", null), e }(i.NodeBlock);
            e.Email = a }]) }, function(t, e, o) { var r = o(46); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-email>input{margin:24px 0px !important}.tripetto-collector-email>div{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(48),
            i = o(0),
            c = o(49),
            a = o(50);
        o(51), o(52); var s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.isDownloading = !1, e.isDragging = !1, e.percentageUploaded = 0, e.thumbnail = {}, e.fileSlot = i.assert(e.valueOf("file")), e.statusSlot = i.assert(e.valueOf("status")), e } return r.__extends(e, t), Object.defineProperty(e.prototype, "isUploading", { get: function() { return this.statusSlot.value }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "limit", { get: function() { return this.props.limit || 10 }, enumerable: !0, configurable: !0 }), e.prototype.render = function(t) { var e = this; if (this.fileSlot.hasValue && !this.thumbnail.dataUrl) { var o = this.hasImageExtension(this.fileSlot.string);!0 === o && (t.onAttachment && this.fileSlot.reference ? !1 === this.isDownloading && (this.isDownloading = !0, t.onAttachment.get(this.fileSlot.reference).then((function(r) { e.readAsDataUrl(r, (function(r) { e.thumbnail.dataUrl = r, e.thumbnail.isImage = o, t.update() })), e.isDownloading = !1 })).catch((function() { e.fileSlot.set(void 0), t.update(), e.isDownloading = !1 }))) : (this.thumbnail.dataUrl = this.fileSlot.reference, this.thumbnail.isImage = o)) } return l.createElement("div", { className: "tripetto-collector-file-upload", tabIndex: t.tabIndex }, t.name(this.fileSlot.slot.required), t.description, l.createElement("div", { className: "file-upload-area alert alert-" + (t.style.form && t.style.form.inputStyle || "primary") + (t.isFailed ? " is-invalid" : "") }, !1 === this.fileSlot.hasValue && !1 === this.isUploading && !this.error && l.createElement("div", { className: "file-upload-input" }, a.ICON_BROWSE, l.createElement("input", { type: "file", id: this.key("file"), onChange: function(o) { o.target && o.target.files && e.onFileUpload(o.target.files, t) } }), l.createElement("label", { htmlFor: this.key("file"), onDragEnter: function(o) { o.preventDefault(), o.stopPropagation(), e.isDragging = !0, t.update() }, onDragOver: function(t) { t.preventDefault(), t.stopPropagation() }, onDragLeave: function(o) { o.preventDefault(), o.stopPropagation(), e.isDragging = !1, t.update() }, onDrop: function(o) { o.preventDefault(), o.stopPropagation(), e.isDragging = !1; var r = o.dataTransfer.files;
                        r && r.length > 0 && (e.onFileUpload(r, t), o.dataTransfer.clearData()) }, className: this.isDragging ? "file-dragging" : "" }), l.createElement("span", null, i.pgettext("collector-rolling", this.isDragging ? "Drop your file now" : "Choose a file or drag a file here")), l.createElement("small", null, i.pgettext("collector-rolling", "Size limit: %1", this.limit + "Mb")), this.props.extensions && l.createElement("small", null, i.pgettext("collector-rolling", "Allowed extensions: %1", "" + this.formatExtensions(this.props.extensions)))), this.error && l.createElement("div", { className: "file-upload-error" }, l.createElement("strong", null, i.pgettext("collector-rolling", "This file can't be used")), l.createElement("div", null, this.getError(this.error)), l.createElement("button", { className: "btn btn-" + (t.style.form && t.style.form.inputStyle || "primary") + " btn-normal", onClick: function() { return e.setError(t, void 0) } }, i.pgettext("collector-rolling", "Try again"))), !0 === this.isUploading && l.createElement("div", { className: "file-upload-progress" }, l.createElement("div", { className: "progress" }, l.createElement("div", { className: "progress-bar progress-bar-striped progress-bar-animated bg-" + (t.style.form && t.style.form.inputStyle || "primary"), role: "progressbar", "aria-valuenow": this.percentageUploaded, "aria-valuemin": 0, "aria-valuemax": 100, style: { width: this.percentageUploaded + "%", minWidth: "2em" } })), l.createElement("div", { className: "progress-text" }, i.pgettext("collector-rolling", "Progress: %1", this.percentageUploaded + "%"))), this.fileSlot.hasValue && l.createElement("div", { className: "file-upload-preview" }, this.thumbnail.isImage && !0 === this.thumbnail.isImage && l.createElement("div", { className: "preview-image" }, l.createElement("img", { src: this.thumbnail.dataUrl, className: "img-thumbnail" })) || l.createElement("div", { className: "preview-file" }, c.ICON_FILE), l.createElement("div", { className: "preview-name text-truncate" }, this.fileSlot.string), l.createElement("button", { className: "btn btn-" + (t.style.form && t.style.form.inputStyle || "primary") + " btn-normal", onClick: function() { e.thumbnail = {}, e.percentageUploaded = 0, e.setError(t, void 0), t.onAttachment && e.fileSlot.reference ? t.onAttachment.delete(e.fileSlot.reference).then((function() { return e.fileSlot.set(void 0) })) : e.fileSlot.set(void 0) } }, i.pgettext("collector-rolling", "Delete")))), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e.prototype.hasValidFileSize = function(t) { var e = 1024 * this.limit * 1024; return t.size <= e }, e.prototype.hasValidFileExtension = function(t) { var e = n.extname(t.name).toLowerCase(),
                    o = !0; return this.props.extensions && (o = this.formatExtensions(this.props.extensions).split(",").indexOf(e) > -1), o }, e.prototype.formatExtensions = function(t) { return t ? t.toLowerCase().replace(" ", "") : "" }, e.prototype.onFileUpload = function(t, e) { var o = this; if (t.length > 1) this.setError(e, "AMOUNT");
                else { var r = t[0]; if (!1 !== this.hasValidFileExtension(r))
                        if (!1 !== this.hasValidFileSize(r)) { var l = function(t) { t && (o.percentageUploaded = Math.floor(t), e.update()) };
                            this.statusSlot.value = !0, this.thumbnail.isImage = this.hasImageExtension(r.name), e.onAttachment ? (e.onAttachment.put(r, l).then((function(t) { o.fileSlot.set(r.name, t), o.validatorCallback && o.validatorCallback.return(!0), o.statusSlot.value = !1 })).catch((function(t) { o.setError(e, "UPLOAD", t), o.validatorCallback && o.validatorCallback.return(!1), o.statusSlot.value = !1 })), this.thumbnail.isImage && !0 === this.thumbnail.isImage && this.readAsDataUrl(r, (function(t) { o.thumbnail.dataUrl = t }))) : this.readAsDataUrl(r, (function(t) { o.validatorCallback && o.validatorCallback.return(!0), o.statusSlot.value = !1, o.fileSlot.set(r.name, t), o.thumbnail.dataUrl = t }), l) } else this.setError(e, "SIZE");
                    else this.setError(e, "EXTENSION") } }, e.prototype.readAsDataUrl = function(t, e, o) { var r = new FileReader;
                r.onprogress = function(t) { o && o(t.loaded / t.total * 100) }, r.onload = function() { e(r.result) }, r.readAsDataURL(t) }, e.prototype.hasImageExtension = function(t) { var e = n.extname(t); return [".jpg", ".jpeg", ".png", ".gif"].indexOf(e.toLowerCase()) > -1 }, e.prototype.setError = function(t, e, o) { this.error = e, this.errorMessage = o, t.update() }, e.prototype.getError = function(t) { switch (t) {
                    case "SIZE":
                        return i.pgettext("collector-rolling", "File size is too large.");
                    case "EXTENSION":
                        return i.pgettext("collector-rolling", "Extension is not allowed.");
                    case "AMOUNT":
                        return i.pgettext("collector-rolling", "Too many files selected.");
                    case "UPLOAD":
                        return i.pgettext("collector-rolling", "Something went wrong while uploading" + (this.errorMessage && " (server said: " + this.errorMessage + ")" || "") + ".");
                    default:
                        return i.pgettext("collector-rolling", "Unknown error.") } }, e.prototype.validate = function(t) { return this.isUploading ? this.validatorCallback = t.callback : !this.fileSlot.slot.required || this.fileSlot.hasValue }, r.__decorate([i.validator], e.prototype, "validate", null), e = r.__decorate([i.tripetto({ type: "node", identifier: "tripetto-block-file-upload", alias: "file-upload" })], e) }(i.NodeBlock);
        e.FileUploadBlock = s }, function(t, e, o) {
        (function(t) {
            function o(t, e) { for (var o = 0, r = t.length - 1; r >= 0; r--) { var l = t[r]; "." === l ? t.splice(r, 1) : ".." === l ? (t.splice(r, 1), o++) : o && (t.splice(r, 1), o--) } if (e)
                    for (; o--; o) t.unshift(".."); return t }

            function r(t, e) { if (t.filter) return t.filter(e); for (var o = [], r = 0; r < t.length; r++) e(t[r], r, t) && o.push(t[r]); return o }
            e.resolve = function() { for (var e = "", l = !1, n = arguments.length - 1; n >= -1 && !l; n--) { var i = n >= 0 ? arguments[n] : t.cwd(); if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
                    i && (e = i + "/" + e, l = "/" === i.charAt(0)) } return (l ? "/" : "") + (e = o(r(e.split("/"), (function(t) { return !!t })), !l).join("/")) || "." }, e.normalize = function(t) { var n = e.isAbsolute(t),
                    i = "/" === l(t, -1); return (t = o(r(t.split("/"), (function(t) { return !!t })), !n).join("/")) || n || (t = "."), t && i && (t += "/"), (n ? "/" : "") + t }, e.isAbsolute = function(t) { return "/" === t.charAt(0) }, e.join = function() { var t = Array.prototype.slice.call(arguments, 0); return e.normalize(r(t, (function(t, e) { if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings"); return t })).join("/")) }, e.relative = function(t, o) {
                function r(t) { for (var e = 0; e < t.length && "" === t[e]; e++); for (var o = t.length - 1; o >= 0 && "" === t[o]; o--); return e > o ? [] : t.slice(e, o - e + 1) }
                t = e.resolve(t).substr(1), o = e.resolve(o).substr(1); for (var l = r(t.split("/")), n = r(o.split("/")), i = Math.min(l.length, n.length), c = i, a = 0; a < i; a++)
                    if (l[a] !== n[a]) { c = a; break }
                var s = []; for (a = c; a < l.length; a++) s.push(".."); return (s = s.concat(n.slice(c))).join("/") }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) { if ("string" != typeof t && (t += ""), 0 === t.length) return "."; for (var e = t.charCodeAt(0), o = 47 === e, r = -1, l = !0, n = t.length - 1; n >= 1; --n)
                    if (47 === (e = t.charCodeAt(n))) { if (!l) { r = n; break } } else l = !1;
                return -1 === r ? o ? "/" : "." : o && 1 === r ? "/" : t.slice(0, r) }, e.basename = function(t, e) { var o = function(t) { "string" != typeof t && (t += ""); var e, o = 0,
                        r = -1,
                        l = !0; for (e = t.length - 1; e >= 0; --e)
                        if (47 === t.charCodeAt(e)) { if (!l) { o = e + 1; break } } else -1 === r && (l = !1, r = e + 1);
                    return -1 === r ? "" : t.slice(o, r) }(t); return e && o.substr(-1 * e.length) === e && (o = o.substr(0, o.length - e.length)), o }, e.extname = function(t) { "string" != typeof t && (t += ""); for (var e = -1, o = 0, r = -1, l = !0, n = 0, i = t.length - 1; i >= 0; --i) { var c = t.charCodeAt(i); if (47 !== c) - 1 === r && (l = !1, r = i + 1), 46 === c ? -1 === e ? e = i : 1 !== n && (n = 1) : -1 !== e && (n = -1);
                    else if (!l) { o = i + 1; break } } return -1 === e || -1 === r || 0 === n || 1 === n && e === r - 1 && e === o + 1 ? "" : t.slice(e, r) }; var l = "b" === "ab".substr(-1) ? function(t, e, o) { return t.substr(e, o) } : function(t, e, o) { return e < 0 && (e = t.length + e), t.substr(e, o) } }).call(this, o(8)) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_FILE = r.createElement("svg", { viewBox: "0 0 10240 10240" }, r.createElement("path", { d: "M1280 640l5230 0c352,0 656,126 905,375l1170 1170c249,249 375,553 375,905l0 6510 -7680 0 0 -3761 640 1278 0 1843 6400 0 0 -5440c0,-176 -144,-320 -320,-320l-1600 0 0 -1600c0,-176 -144,-320 -320,-320l-4160 0 0 1562 -640 321 0 -2523zm5760 960l0 960 960 0 -960 -960z" }), r.createElement("path", { d: "M1155 3583l3035 -1520c158,-79 350,-14 429,143l1636 3266c79,158 15,350 -143,429l-3266 1636c-157,79 -350,14 -429,-143l-670 -1337c55,15 112,23 172,23l556 0 371 741 2693 -1349 -1349 -2693 -1480 741 -1110 0c-154,0 -304,22 -445,63zm168 1626l-43 -85 0 -4c0,-163 157,-320 320,-320l234 0 2 5c-235,31 -430,190 -513,404z" }), r.createElement("path", { d: "M1919 5760c-176,0 -319,-144 -319,-320 0,-177 143,-320 320,-320l1280 0c176,0 320,-144 320,-320 0,-176 -144,-320 -320,-320l-1600 0c-341,0 -640,301 -640,640l0 1108c-97,-56 -186,-125 -265,-203 -240,-241 -375,-565 -375,-905 0,-705 575,-1280 1280,-1280l1600 0c529,0 960,431 960,960 0,528 -430,959 -958,960l-1283 0z" })) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_BROWSE = r.createElement("svg", { className: "icon", viewBox: "0 0 10240 10240" }, r.createElement("path", { d: "M640 5760l640 0c248,0 461,132 572,354l607 1212c111,222 324,354 572,354l4178 0c248,0 461,-132 572,-354l607 -1212c111,-222 324,-354 572,-354l640 0 0 3520c0,176 -144,320 -320,320l-8320 0c-176,0 -320,-144 -320,-320l0 -3520z" }), r.createElement("path", { d: "M7887 6400l-160 320 -5214 0 -160 -320 5534 0zm-320 640l-72 143c-57,114 -159,177 -286,177l-4178 0c-127,0 -229,-63 -286,-177l-72 -143 4894 0z" }), r.createElement("path", { d: "M6853 4293l-1507 1506c-124,124 -328,124 -452,0l-1507 -1506c-124,-125 -187,-277 -187,-453l0 -1159c0,-66 38,-122 99,-147 61,-26 127,-13 174,34l1007 1007 0 -2135c0,-88 72,-160 160,-160l960 0c88,0 160,72 160,160l0 2135 1007 -1007c47,-47 113,-60 174,-34 61,25 99,81 99,147l0 1159c0,176 -63,328 -187,453z" })) }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.FileUpload = r.FileUpload }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isUploaded = function() { var t = this.valueOf(); return (t && i.isFilledString(t.value) || !1) === this.props.isUploaded }, n([i.condition], e.prototype, "isUploaded", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-file-upload" })], e) }(i.ConditionBlock);
            e.FileUploadCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(4),
                c = o(0),
                a = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.thumbnail = {}, e.fileSlot = c.assert(e.valueOf("file")), e.statusSlot = c.assert(e.valueOf("status")), e } return l(e, t), Object.defineProperty(e.prototype, "isUploading", { get: function() { return this.statusSlot.value }, enumerable: !0, configurable: !0 }), e.prototype.hasValidFileSize = function(t) { if (this.props.limit) { var e = 1024 * this.props.limit * 1024; return t.size <= e } return !0 }, e.prototype.hasImageExtension = function(t) { var e = i.extname(t); return [".jpg", ".jpeg", ".png", ".gif"].indexOf(e.toLowerCase()) > -1 }, e.prototype.hasValidFileExtension = function(t) { var e = i.extname(t.name).toLowerCase(),
                            o = !0; return this.props.extensions && (o = this.formatExtensions(this.props.extensions).split(",").indexOf(e) > -1), o }, e.prototype.formatExtensions = function(t) { return t ? t.toLowerCase().replace(" ", "") : "" }, e.prototype.readAsDataUrl = function(t, e, o) { var r = new FileReader;
                        r.onprogress = function(t) { o && o(t.loaded / t.total * 100) }, r.onload = function() { e(r.result) }, r.readAsDataURL(t) }, e.prototype.handleFileUpload = function(t, e, o, r) { var l = this; if (t.length > 1) o(c.pgettext("file-upload", "Too many files selected."));
                        else { var n = t[0];!1 !== this.hasValidFileExtension(n) ? !1 !== this.hasValidFileSize(n) ? (this.statusSlot.value = !0, this.thumbnail.isImage = this.hasImageExtension(n.name), r ? (r(n, e).then((function(t) { l.fileSlot.set(n.name, t), l.validatorCallback && l.validatorCallback.return(!0), l.statusSlot.value = !1 })).catch((function() { o(c.pgettext("file-upload", "Something went wrong while uploading.")), l.validatorCallback && l.validatorCallback.return(!1), l.statusSlot.value = !1 })), this.thumbnail.isImage && !0 === this.thumbnail.isImage && this.readAsDataUrl(n, (function(t) { l.thumbnail.dataUrl = t }))) : this.readAsDataUrl(n, (function(t) { l.validatorCallback && l.validatorCallback.return(!0), l.statusSlot.value = !1, l.fileSlot.set(n.name, t), l.thumbnail.dataUrl = t }), e)) : o(c.pgettext("file-upload", "File size is too large.")) : o(c.pgettext("file-upload", "Extension is not allowed.")) } }, e.prototype.validate = function(t) { return this.isUploading ? this.validatorCallback = t.callback : !this.fileSlot.slot.required || this.fileSlot.hasValue }, n([c.validator], e.prototype, "validate", null), e }(c.NodeBlock);
            e.FileUpload = a }, function(t, e, o) {
            (function(t) {
                function o(t, e) { for (var o = 0, r = t.length - 1; r >= 0; r--) { var l = t[r]; "." === l ? t.splice(r, 1) : ".." === l ? (t.splice(r, 1), o++) : o && (t.splice(r, 1), o--) } if (e)
                        for (; o--; o) t.unshift(".."); return t }

                function r(t, e) { if (t.filter) return t.filter(e); for (var o = [], r = 0; r < t.length; r++) e(t[r], r, t) && o.push(t[r]); return o }
                e.resolve = function() { for (var e = "", l = !1, n = arguments.length - 1; n >= -1 && !l; n--) { var i = n >= 0 ? arguments[n] : t.cwd(); if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
                        i && (e = i + "/" + e, l = "/" === i.charAt(0)) } return (l ? "/" : "") + (e = o(r(e.split("/"), (function(t) { return !!t })), !l).join("/")) || "." }, e.normalize = function(t) { var n = e.isAbsolute(t),
                        i = "/" === l(t, -1); return (t = o(r(t.split("/"), (function(t) { return !!t })), !n).join("/")) || n || (t = "."), t && i && (t += "/"), (n ? "/" : "") + t }, e.isAbsolute = function(t) { return "/" === t.charAt(0) }, e.join = function() { var t = Array.prototype.slice.call(arguments, 0); return e.normalize(r(t, (function(t, e) { if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings"); return t })).join("/")) }, e.relative = function(t, o) {
                    function r(t) { for (var e = 0; e < t.length && "" === t[e]; e++); for (var o = t.length - 1; o >= 0 && "" === t[o]; o--); return e > o ? [] : t.slice(e, o - e + 1) }
                    t = e.resolve(t).substr(1), o = e.resolve(o).substr(1); for (var l = r(t.split("/")), n = r(o.split("/")), i = Math.min(l.length, n.length), c = i, a = 0; a < i; a++)
                        if (l[a] !== n[a]) { c = a; break }
                    var s = []; for (a = c; a < l.length; a++) s.push(".."); return (s = s.concat(n.slice(c))).join("/") }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) { if ("string" != typeof t && (t += ""), 0 === t.length) return "."; for (var e = t.charCodeAt(0), o = 47 === e, r = -1, l = !0, n = t.length - 1; n >= 1; --n)
                        if (47 === (e = t.charCodeAt(n))) { if (!l) { r = n; break } } else l = !1;
                    return -1 === r ? o ? "/" : "." : o && 1 === r ? "/" : t.slice(0, r) }, e.basename = function(t, e) { var o = function(t) { "string" != typeof t && (t += ""); var e, o = 0,
                            r = -1,
                            l = !0; for (e = t.length - 1; e >= 0; --e)
                            if (47 === t.charCodeAt(e)) { if (!l) { o = e + 1; break } } else -1 === r && (l = !1, r = e + 1);
                        return -1 === r ? "" : t.slice(o, r) }(t); return e && o.substr(-1 * e.length) === e && (o = o.substr(0, o.length - e.length)), o }, e.extname = function(t) { "string" != typeof t && (t += ""); for (var e = -1, o = 0, r = -1, l = !0, n = 0, i = t.length - 1; i >= 0; --i) { var c = t.charCodeAt(i); if (47 !== c) - 1 === r && (l = !1, r = i + 1), 46 === c ? -1 === e ? e = i : 1 !== n && (n = 1) : -1 !== e && (n = -1);
                        else if (!l) { o = i + 1; break } } return -1 === e || -1 === r || 0 === n || 1 === n && e === r - 1 && e === o + 1 ? "" : t.slice(e, r) }; var l = "b" === "ab".substr(-1) ? function(t, e, o) { return t.substr(e, o) } : function(t, e, o) { return e < 0 && (e = t.length + e), t.substr(e, o) } }).call(this, o(5)) }, function(t, e) { var o, r, l = t.exports = {};

            function n() { throw new Error("setTimeout has not been defined") }

            function i() { throw new Error("clearTimeout has not been defined") }

            function c(t) { if (o === setTimeout) return setTimeout(t, 0); if ((o === n || !o) && setTimeout) return o = setTimeout, setTimeout(t, 0); try { return o(t, 0) } catch (e) { try { return o.call(null, t, 0) } catch (e) { return o.call(this, t, 0) } } }! function() { try { o = "function" == typeof setTimeout ? setTimeout : n } catch (t) { o = n } try { r = "function" == typeof clearTimeout ? clearTimeout : i } catch (t) { r = i } }(); var a, s = [],
                p = !1,
                u = -1;

            function d() { p && a && (p = !1, a.length ? s = a.concat(s) : u = -1, s.length && f()) }

            function f() { if (!p) { var t = c(d);
                    p = !0; for (var e = s.length; e;) { for (a = s, s = []; ++u < e;) a && a[u].run();
                        u = -1, e = s.length }
                    a = null, p = !1,
                        function(t) { if (r === clearTimeout) return clearTimeout(t); if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t); try { r(t) } catch (e) { try { return r.call(null, t) } catch (e) { return r.call(this, t) } } }(t) } }

            function g(t, e) { this.fun = t, this.array = e }

            function m() {}
            l.nextTick = function(t) { var e = new Array(arguments.length - 1); if (arguments.length > 1)
                    for (var o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
                s.push(new g(t, e)), 1 !== s.length || p || c(f) }, g.prototype.run = function() { this.fun.apply(null, this.array) }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = m, l.addListener = m, l.once = m, l.off = m, l.removeListener = m, l.removeAllListeners = m, l.emit = m, l.prependListener = m, l.prependOnceListener = m, l.listeners = function(t) { return [] }, l.binding = function(t) { throw new Error("process.binding is not supported") }, l.cwd = function() { return "/" }, l.chdir = function(t) { throw new Error("process.chdir is not supported") }, l.umask = function() { return 0 } }]) }, function(t, e, o) { var r = o(53); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-file-upload>div.file-upload-area{height:200px;padding:10px;text-align:center;display:flex;align-items:center;justify-content:center;cursor:default;margin-top:24px}@media (min-width: 576px){.tripetto-collector-file-upload>div.file-upload-area{height:300px;padding:20px}}.tripetto-collector-file-upload>div.file-upload-area small{display:block}.tripetto-collector-file-upload>div.file-upload-area.is-invalid{border:3px solid #dc3545}.tripetto-collector-file-upload>div.file-upload-area.alert-primary svg path{fill:#004085}.tripetto-collector-file-upload>div.file-upload-area.alert-primary .file-upload-input>label.file-dropping{border-color:#004085}.tripetto-collector-file-upload>div.file-upload-area.alert-secondary svg path{fill:#383d41}.tripetto-collector-file-upload>div.file-upload-area.alert-secondary .file-upload-input>label.file-dropping{border-color:#383d41}.tripetto-collector-file-upload>div.file-upload-area.alert-success svg path{fill:#155724}.tripetto-collector-file-upload>div.file-upload-area.alert-success .file-upload-input>label.file-dropping{border-color:#155724}.tripetto-collector-file-upload>div.file-upload-area.alert-danger svg path{fill:#721c24}.tripetto-collector-file-upload>div.file-upload-area.alert-danger .file-upload-input>label.file-dropping{border-color:#721c24}.tripetto-collector-file-upload>div.file-upload-area.alert-warning svg path{fill:#856404}.tripetto-collector-file-upload>div.file-upload-area.alert-warning .file-upload-input>label.file-dropping{border-color:#856404}.tripetto-collector-file-upload>div.file-upload-area.alert-info svg path{fill:#0c5460}.tripetto-collector-file-upload>div.file-upload-area.alert-info .file-upload-input>label.file-dropping{border-color:#0c5460}.tripetto-collector-file-upload>div.file-upload-area.alert-light svg path{fill:#818182}.tripetto-collector-file-upload>div.file-upload-area.alert-light .file-upload-input>label.file-dropping{border-color:#818182}.tripetto-collector-file-upload>div.file-upload-area.alert-dark svg path{fill:#1b1e21}.tripetto-collector-file-upload>div.file-upload-area.alert-dark .file-upload-input>label.file-dropping{border-color:#1b1e21}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-input{width:100%}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-input>svg{width:100%;height:60px;display:block;margin-bottom:20px}@media (min-width: 576px){.tripetto-collector-file-upload>div.file-upload-area>.file-upload-input>svg{height:80px;margin-bottom:40px}}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-input>input{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-input>label{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;cursor:pointer}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-input>label.file-dragging{border-radius:0.25rem;background-color:#fff;opacity:0.5;border:2px dashed}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-input:hover>span{text-decoration:underline}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-error>div{margin-bottom:10px}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-progress{width:100%}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-progress .progress{height:8px}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-progress .progress-text{padding-top:10px}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-preview{width:100%}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-preview .preview-image{margin-bottom:10px}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-preview .preview-image>img{width:auto;height:100px}@media (min-width: 576px){.tripetto-collector-file-upload>div.file-upload-area>.file-upload-preview .preview-image>img{height:180px}}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-preview .preview-file{height:100px;margin-bottom:10px;display:flex;align-items:center;justify-content:center}@media (min-width: 576px){.tripetto-collector-file-upload>div.file-upload-area>.file-upload-preview .preview-file{height:180px}}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-preview .preview-file svg{width:60px;height:60px}@media (min-width: 576px){.tripetto-collector-file-upload>div.file-upload-area>.file-upload-preview .preview-file svg{width:80px;height:80px}}.tripetto-collector-file-upload>div.file-upload-area>.file-upload-preview .preview-name{display:block;margin-bottom:10px}.tripetto-collector-file-upload>div.form-group-footer{padding-top:15px;padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(55);
        o(56); var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-matrix" }, t.name(this.required), t.description, this.props.rows.length > 0 && this.props.columns.length > 0 && l.createElement("div", { className: "matrix-table table-responsive" }, l.createElement("table", { className: "table" }, l.createElement("thead", null, l.createElement("tr", { className: "table-" + (t.style.form && t.style.form.inputStyle || "default") }, l.createElement("th", { scope: "col" }), this.props.columns.map((function(t) { return l.createElement("th", { key: e.key(t.id) }, t.label) })))), l.createElement("tbody", null, this.props.rows.map((function(o) { return l.createElement("tr", { key: e.key(o.id) }, l.createElement("th", { scope: "row" }, o.name, !e.props.required && e.isRowRequired(o) && l.createElement("span", { className: "required" }), o.explanation && l.createElement("small", { className: "form-text text-faded", id: e.key("explanation-" + o.id) }, o.explanation)), e.props.columns.map((function(r) { return l.createElement("td", { key: e.key(o.id + r.id) }, l.createElement("div", { className: "custom-control custom-radio" }, l.createElement("input", { type: "radio", key: e.key(o.id + r.id), id: e.key(o.id + r.id), tabIndex: t.tabIndex, name: e.key(o.id), defaultChecked: e.isColumnSelected(o, r), onChange: function(t) { e.selectColumn(o, r) }, className: "custom-control-input radio-control-" + (t.style.form && t.style.form.inputStyle || "default"), "aria-describedby": e.node.explanation && e.key("explanation-" + o.id) }), l.createElement("label", { className: "custom-control-label", htmlFor: e.key(o.id + r.id) }, l.createElement("span", { className: "sr-only" }, o.name + " - " + r.label)))) }))) }))))), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-matrix" })], e) }(i.Matrix);
        e.MatrixBlock = c }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.Matrix = r.Matrix }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isSelected = function() { var t = this.valueOf(); return t && t.reference === this.props.column || !1 }, n([i.condition], e.prototype, "isSelected", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-matrix" })], e) }(i.ConditionBlock);
            e.MatrixCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.required = !(!e.props.required && !i.findFirst(e.props.rows, (function(t) { return e.isRowRequired(t) }))), e } return l(e, t), e.prototype.rowSlot = function(t) { return i.assert(this.valueOf(t.id)).confirm() }, e.prototype.isRowRequired = function(t) { return this.rowSlot(t).slot.required || !1 }, e.prototype.isColumnSelected = function(t, e) { return this.rowSlot(t).reference === e.id }, e.prototype.getSelectedColumn = function(t) { var e = this; return i.findFirst(this.props.columns, (function(o) { return e.isColumnSelected(t, o) })) }, e.prototype.selectColumn = function(t, e) { this.rowSlot(t).set(e && (e.value || e.label), e && e.id) }, e.prototype.validate = function() { var t = this; return !i.findFirst(this.props.rows, (function(e) { var o = t.rowSlot(e); return !(!t.props.required && !o.slot.required || o.reference) })) }, n([i.validator], e.prototype, "validate", null), e }(i.NodeBlock);
            e.Matrix = c }]) }, function(t, e, o) { var r = o(57); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-matrix>div{padding-top:15px;display:block !important}.tripetto-collector-matrix>div.matrix-table table{color:inherit}.tripetto-collector-matrix>div.matrix-table table td,.tripetto-collector-matrix>div.matrix-table table th{padding:0.3rem}@media (min-width: 576px){.tripetto-collector-matrix>div.matrix-table table td,.tripetto-collector-matrix>div.matrix-table table th{padding:0.75rem}}.tripetto-collector-matrix>div.matrix-table table th{font-weight:normal}.tripetto-collector-matrix>div.matrix-table table thead tr{color:#212529}.tripetto-collector-matrix>div.matrix-table table thead tr.table-default{color:inherit}.tripetto-collector-matrix>div.matrix-table table thead th{text-align:center}.tripetto-collector-matrix>div.matrix-table table tbody td{text-align:center;vertical-align:middle}.tripetto-collector-matrix>div.matrix-table table tbody td .custom-control-label:before,.tripetto-collector-matrix>div.matrix-table table tbody td .custom-control-label:after{left:-1.2rem}.tripetto-collector-matrix>div.form-group-footer{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(59),
            c = o(5),
            a = o(60);
        o(61); var s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-multiple-choice", tabIndex: t.tabIndex, ref: function(o) { t.ref(o), t.keystroke((function(o) { e.props.choices.forEach((function(r, l) { if (o === 65 + l) { var i = n.assert(e.props.multiple ? e.valueOf(r.id) : e.valueOf("choice"));
                                    e.props.multiple ? i.value = !i.value : i.reference === r.id ? i.set(void 0) : (i.set(r.value || r.name, r.id), e.props.multiple || t.nextAfterAnimation()) } })) })) } }, this.props.imageAboveText && t.imageFromURL(this.props.imageURL, this.props.imageWidth), t.name(this.props.required), this.props.caption && l.createElement("h3", null, c.markdownToJSX(this.props.caption || "...", this.context)), t.description, !this.props.imageAboveText && t.imageFromURL(this.props.imageURL, this.props.imageWidth), t.explanation(this.key("explanation")), l.createElement("div", { className: this.props.multiple ? "multiple" : "" }, this.props.choices.map((function(o) { var r = n.assert(e.props.multiple ? e.valueOf(o.id) : e.valueOf("choice")),
                        i = e.props.multiple ? r.value : r.reference ? r.reference === o.id : r.value && r.value === (o.value || o.name); return e.props.multiple ? r.confirm() : i && r.set(o.value || o.name, o.id), l.createElement("div", { key: e.key(o.id), className: e.props.alignment ? "d-inline-block" : "" }, l.createElement("button", { className: "btn btn-" + (i ? "" + (t.style.form && t.style.form.selectedStyle || "success") : "" + (t.style.form && t.style.form.unselectedStyle || "light")) + " text-left choice mb-2" + (e.props.alignment ? " mr-2 align-top" : ""), onClick: function() { e.props.multiple ? r.value = !r.value : r.reference === o.id ? r.set(void 0) : (r.set(o.value || o.name, o.id), e.props.multiple || t.nextAfterAnimation()), o.url && window.open(o.url) } }, l.createElement("span", null, o.name || "...", o.description && l.createElement("small", { className: "sub" }, o.description)), o.url && l.createElement("span", { className: "icon pl-2" }, a.ICON_EXTERNAL))) }))), this.props.multiple && l.createElement("div", { className: "form-group-footer" }, t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-multiple-choice", alias: "multiple-choice", autoRender: !0 })], e) }(i.MultipleChoice);
        e.MultipleChoiceBlock = s }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 2) }([function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(1),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isChosen = function() { var t = this.valueOf(); return !!t && (i.isBoolean(t.value) ? t.value : t.reference === this.props.choice) }, n([i.condition], e.prototype, "isChosen", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-multiple-choice", alias: "multiple-choice" })], e) }(i.ConditionBlock);
            e.MultipleChoiceCondition = c }, function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(0); var r = o(3);
            e.MultipleChoice = r.MultipleChoice }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(1);
            o(0); var c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.validate = function() { var t = this; return !this.props.required || (this.props.multiple ? !!i.findFirst(this.props.choices, (function(e) { return !0 === i.assert(t.valueOf(e.id)).value })) : i.assert(this.valueOf("choice")).hasValue) }, n([i.validator], e.prototype, "validate", null), e }(i.NodeBlock);
            e.MultipleChoice = c }]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_EXTERNAL = r.createElement("svg", { viewBox: "0 0 10240 10240" }, r.createElement("path", { d: "M4480 1920l3840 0c353,0 640,287 640,640l0 2560c0,352 -288,640 -640,640l-1600 0 0 -640 1600 0 0 -2560 -3840 0 0 1600 -640 0 0 -1600c0,-353 287,-640 640,-640z" }), r.createElement("path", { d: "M1920 4480l3840 0c353,0 640,287 640,640l0 2560c0,352 -288,640 -640,640l-3840 0c-352,0 -640,-287 -640,-640l0 -2560c0,-353 287,-640 640,-640zm0 640l0 2560 3840 0 0 -2560 -3840 0z" })) }, function(t, e, o) { var r = o(62); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-multiple-choice>div{padding-top:15px;padding-bottom:113px;display:inline-block;max-width:100%}.tripetto-collector-multiple-choice>div.multiple{padding-bottom:0}.tripetto-collector-multiple-choice>div button.choice{white-space:normal !important;white-space:initial !important}.tripetto-collector-multiple-choice>div button.choice span{display:table-cell}.tripetto-collector-multiple-choice>div button.choice span small{display:block;opacity:0.8}.tripetto-collector-multiple-choice>div button.choice span.icon svg{opacity:0.7}@media (min-width: 576px){.tripetto-collector-multiple-choice>div button.choice{padding:0.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0.3rem}}.tripetto-collector-multiple-choice>div.form-group-footer{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(64);
        o(65); var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-number" }, t.name(this.required), t.description, l.createElement("input", { type: "text", key: this.key(), required: this.required, inputMode: "1" === this.stepSize ? "numeric" : "decimal", defaultValue: this.value, tabIndex: t.tabIndex, placeholder: t.placeholder || "#", className: "form-control form-control-" + (t.style.form && t.style.form.inputStyle || "default") + (t.isFailed ? " is-invalid" : ""), "aria-describedby": this.node.explanation && this.key("explanation"), onChange: function(t) { e.value = t.target.value }, onFocus: function(o) { t.onFocus(), e.focus(), o.target.value = e.value, o.target.type = "number", o.target.step = e.stepSize }, onBlur: function(o) { t.onBlur(), e.blur(), o.target.type = "text", o.target.value = e.value }, ref: t.ref }), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-number" })], e) }(i.Number);
        e.NumberBlock = c }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.Number = r.Number }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.verify = function() { var t = this.valueOf(); if (t && t.hasValue) switch (this.props.mode) {
                            case "below":
                                return t.value < this.props.value;
                            case "above":
                                return t.value > this.props.value;
                            default:
                                return t.value === this.props.value }
                        return !1 }, n([i.condition], e.prototype, "verify", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-number" })], e) }(i.ConditionBlock);
            e.NumberCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                function o() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) });
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = o(0),
                i = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.hasFocus = !1, e.numberSlot = n.assert(e.valueOf("number")), e.required = e.numberSlot.slot.required || !1, e } return l(e, t), Object.defineProperty(e.prototype, "value", { get: function() { return this.hasFocus ? "" + (this.numberSlot.pristine || "") : this.numberSlot.hasValue && this.numberSlot.string || "" }, set: function(t) { this.numberSlot.pristine = t || void 0 }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "stepSize", { get: function() { return this.numberSlot.slot.precision && "0." + n.Str.fill("0", this.numberSlot.slot.precision - 1) + "1" || "1" }, enumerable: !0, configurable: !0 }), e.prototype.focus = function() { this.hasFocus = !0, this.numberSlot.hasValue || (this.numberSlot.pristine = 0) }, e.prototype.blur = function() { this.hasFocus = !1 }, e }(n.NodeBlock);
            e.Number = i }]) }, function(t, e, o) { var r = o(66); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-number>input{margin:24px 0px !important}.tripetto-collector-number>div{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(68),
            c = o(5);
        o(69); var a = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { return l.createElement("div", { className: "tripetto-collector-paragraph", tabIndex: t.tabIndex, ref: t.ref }, this.props.imageAboveText && t.imageFromURL(this.props.imageURL, this.props.imageWidth), t.name(), this.props.caption && l.createElement("h3", null, c.markdownToJSX(this.props.caption || "...", this.context)), t.description, !this.props.imageAboveText && t.imageFromURL(this.props.imageURL, this.props.imageWidth), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-paragraph", alias: "paragraph" })], e) }(i.Paragraph);
        e.ParagraphBlock = a }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 0) }([function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
            e.Paragraph = r.Paragraph }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                function o() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) });
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e }(o(2).NodeBlock);
            e.Paragraph = n }, function(t, e) { t.exports = o(0) }]) }, function(t, e, o) { var r = o(70); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-paragraph>h2{margin:0;font-weight:400}.tripetto-collector-paragraph>div{padding-top:15px;padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(72);
        o(73); var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-password" }, t.name(this.required), t.description, l.createElement("input", { type: "password", key: this.key(), required: this.required, defaultValue: this.passwordSlot.value, tabIndex: t.tabIndex, placeholder: t.placeholder, className: "form-control form-control-" + (t.style.form && t.style.form.inputStyle || "default") + (t.isFailed ? " is-invalid" : ""), "aria-describedby": this.node.explanation && this.key("explanation"), onChange: function(t) { e.passwordSlot.value = t.target.value }, onFocus: t.onFocus, onBlur: function(o) { t.onBlur(), o.target.value = e.passwordSlot.string }, ref: t.ref }), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-password" })], e) }(i.Password);
        e.PasswordBlock = c }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.Password = r.Password }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isEqual = function() { var t = this.valueOf(); return t && t.value === this.props.password || !1 }, n([i.condition], e.prototype, "isEqual", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-password" })], e) }(i.ConditionBlock);
            e.PasswordCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                function o() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) });
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = o(0),
                i = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.passwordSlot = n.assert(e.valueOf("password")), e.required = e.passwordSlot.slot.required || !1, e } return l(e, t), e }(n.NodeBlock);
            e.Password = i }]) }, function(t, e, o) { var r = o(74); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-password>input{margin:24px 0px !important}.tripetto-collector-password>div{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(76);
        o(77); var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-radiobuttons", tabIndex: t.tabIndex, ref: t.ref }, t.name(this.required), t.description, l.createElement("div", null, this.props.buttons.map((function(o) { return o.name && l.createElement("div", { key: e.key(o.id), className: "custom-control custom-radio" }, l.createElement("input", { key: e.key(o.id), id: e.key(o.id), type: "radio", name: e.key(), tabIndex: t.tabIndex, defaultChecked: e.isSelected(o), onChange: function() { e.select(o), t.update() }, className: "custom-control-input checkbox-control-" + (t.style.form && t.style.form.inputStyle || "default"), "aria-describedby": e.node.explanation && e.key("explanation") }), l.createElement("label", { htmlFor: e.key(o.id), className: "custom-control-label" }, o.name)) }))), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-radiobuttons" })], e) }(i.Radiobuttons);
        e.RadiobuttonsBlock = c }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.Radiobuttons = r.Radiobuttons }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isSelected = function() { var t = this.valueOf(); return t && t.reference === this.props.button || !1 }, n([i.condition], e.prototype, "isSelected", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-radiobuttons" })], e) }(i.ConditionBlock);
            e.RadiobuttonCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                function o() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) });
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = o(0),
                i = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.radioSlot = n.assert(e.valueOf("button")).confirm(), e.required = e.radioSlot.slot.required || !1, e } return l(e, t), Object.defineProperty(e.prototype, "value", { get: function() { var t = this,
                                e = n.findFirst(this.props.buttons, (function(e) { return e.id === t.radioSlot.reference })); return !e && this.required && this.props.buttons.length > 0 ? this.select(this.props.buttons[0]) : e && e.id || "" }, set: function(t) { var e = n.findFirst(this.props.buttons, (function(e) { return e.id === t }));
                            e && this.select(e) }, enumerable: !0, configurable: !0 }), e.prototype.isSelected = function(t) { return this.value === t.id }, e.prototype.select = function(t) { return this.radioSlot.set(t.value || t.name, t.id), t.id }, e }(n.NodeBlock);
            e.Radiobuttons = i }]) }, function(t, e, o) { var r = o(78); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-radiobuttons>div{padding:15px 0px;display:block !important}.tripetto-collector-radiobuttons>div>div+div{padding-top:8px}.tripetto-collector-radiobuttons>p+div{padding:0px 0px 15px}.tripetto-collector-radiobuttons>div:last-child{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(80),
            c = o(81),
            a = o(82);
        o(83); var s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.buttons = function(t, e) { for (var o = this, r = [], n = function(t) { r.push(l.createElement("button", { key: i.key("" + t), className: "rating-" + (i.ratingSlot.value >= t ? (e.style.form && e.style.form.positiveStyle.replace("outline-", "") || "default") + " selected" : "" + (e.style.form && e.style.form.neutralStyle.replace("outline-", "") || "default")), onClick: function() { var r = o.ratingSlot.value === t ? t - 1 : t;
                                o.ratingSlot.pristine = r || void 0, e.nextAfterAnimation() } }, i.ratingSlot.value >= t ? a.ICON_CHECKED : c.ICON_UNCHECKED, l.createElement("span", null, t))) }, i = this, s = 1; s <= t; s++) n(s); return r }, e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-rating", tabIndex: t.tabIndex, ref: function(o) { t.ref(o), t.keystroke((function(o) { var r = o >= 48 && o <= 53;
                            (r || o >= 96 && o <= 101) && (e.ratingSlot.pristine = o - (r ? 48 : 96), t.nextAfterAnimation()) })) } }, this.props.imageAboveText && t.imageFromURL(this.props.imageURL, this.props.imageWidth), t.name(this.required), t.description, !this.props.imageAboveText && t.imageFromURL(this.props.imageURL, this.props.imageWidth), l.createElement("div", null, this.buttons(5, t)), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")))) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-rating", alias: "rating", autoRender: !0 })], e) }(i.Rating);
        e.RatingBlock = s }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.Rating = r.Rating }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.stars = function() { var t = this.valueOf("rating"); return t && t.value === this.props.stars || !1 }, n([i.condition], e.prototype, "stars", null), n([i.block({ type: "condition", identifier: "tripetto-block-rating", alias: "rating" })], e) }(i.ConditionBlock);
            e.RatingCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                function o() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) });
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = o(0),
                i = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.ratingSlot = n.assert(e.valueOf("rating")), e.required = e.ratingSlot.slot.required || !1, e } return l(e, t), e }(n.NodeBlock);
            e.Rating = i }]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_UNCHECKED = r.createElement("svg", { viewBox: "0 0 10240 10240" }, r.createElement("path", { d: "M5725 1082l687 2148c43,135 163,223 305,222l2246 -4c279,-1 518,172 604,439 87,267 -3,548 -229,713l-1825 1332c-114,83 -159,223 -116,357l698 2155c87,268 -4,548 -231,713 -228,165 -522,164 -748,-2l-1806 -1330c-115,-84 -265,-84 -380,0l-1806 1330c-226,166 -520,167 -748,2 -227,-165 -318,-445 -231,-713l698 -2155c43,-134 -2,-274 -116,-357l-1824 -1332c-227,-165 -317,-446 -230,-713 86,-267 325,-440 604,-439l2246 4c142,1 262,-87 305,-222l687 -2148c86,-268 324,-442 605,-442 281,0 519,174 605,442zm-605 211l-682 2132c-128,400 -496,668 -916,667l-2235 -4 1818 1327c335,245 475,677 347,1072l-695 2143 1794 -1320c340,-251 798,-251 1138,0l1794 1320 -695 -2143c-128,-395 12,-827 347,-1072l1818 -1327 -2235 4c-420,1 -788,-267 -916,-667l-682 -2132z" })) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_CHECKED = r.createElement("svg", { viewBox: "0 0 10240 10240" }, r.createElement("path", { d: "M5725 1082l687 2148c43,135 163,223 305,222l2246 -4c279,-1 518,172 604,439 87,267 -3,548 -229,713l-1825 1332c-114,83 -159,223 -116,357l698 2155c87,268 -4,548 -231,713 -228,165 -522,164 -748,-2l-1806 -1330c-115,-84 -265,-84 -380,0l-1806 1330c-226,166 -520,167 -748,2 -227,-165 -318,-445 -231,-713l698 -2155c43,-134 -2,-274 -116,-357l-1824 -1332c-227,-165 -317,-446 -230,-713 86,-267 325,-440 604,-439l2246 4c142,1 262,-87 305,-222l687 -2148c86,-268 324,-442 605,-442 281,0 519,174 605,442z" })) }, function(t, e, o) { var r = o(84); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-rating>div{padding:15px 0px;white-space:nowrap;display:block !important}.tripetto-collector-rating>div>button{display:inline-block;background-color:transparent;border:none;outline:none;text-align:center;width:56px;padding:10px 0 0 0;cursor:pointer;color:#6c757d}.tripetto-collector-rating>div>button svg{width:40px;height:40px}.tripetto-collector-rating>div>button svg path{fill:#6c757d}.tripetto-collector-rating>div>button span{font-size:16px;font-weight:bold;display:block}.tripetto-collector-rating>div>button:hover{color:#343a40}.tripetto-collector-rating>div>button:hover path{fill:#343a40}.tripetto-collector-rating>div>button.selected{color:#ffc107}.tripetto-collector-rating>div>button.selected path{fill:#ffc107}.tripetto-collector-rating>div>button.rating-primary{color:#007bff}.tripetto-collector-rating>div>button.rating-primary path{fill:#007bff}.tripetto-collector-rating>div>button.rating-primary:hover,.tripetto-collector-rating>div>button.rating-primary.selected{color:#0069d9}.tripetto-collector-rating>div>button.rating-primary:hover path,.tripetto-collector-rating>div>button.rating-primary.selected path{fill:#0069d9}.tripetto-collector-rating>div>button.rating-secondary{color:#6c757d}.tripetto-collector-rating>div>button.rating-secondary path{fill:#6c757d}.tripetto-collector-rating>div>button.rating-secondary:hover,.tripetto-collector-rating>div>button.rating-secondary.selected{color:#5a6268}.tripetto-collector-rating>div>button.rating-secondary:hover path,.tripetto-collector-rating>div>button.rating-secondary.selected path{fill:#5a6268}.tripetto-collector-rating>div>button.rating-success{color:#28a745}.tripetto-collector-rating>div>button.rating-success path{fill:#28a745}.tripetto-collector-rating>div>button.rating-success:hover,.tripetto-collector-rating>div>button.rating-success.selected{color:#1c7430}.tripetto-collector-rating>div>button.rating-success:hover path,.tripetto-collector-rating>div>button.rating-success.selected path{fill:#1c7430}.tripetto-collector-rating>div>button.rating-danger{color:#dc3545}.tripetto-collector-rating>div>button.rating-danger path{fill:#dc3545}.tripetto-collector-rating>div>button.rating-danger:hover,.tripetto-collector-rating>div>button.rating-danger.selected{color:#bd2130}.tripetto-collector-rating>div>button.rating-danger:hover path,.tripetto-collector-rating>div>button.rating-danger.selected path{fill:#bd2130}.tripetto-collector-rating>div>button.rating-warning{color:#ffc107}.tripetto-collector-rating>div>button.rating-warning path{fill:#ffc107}.tripetto-collector-rating>div>button.rating-warning:hover,.tripetto-collector-rating>div>button.rating-warning.selected{color:#d39e00}.tripetto-collector-rating>div>button.rating-warning:hover path,.tripetto-collector-rating>div>button.rating-warning.selected path{fill:#d39e00}.tripetto-collector-rating>div>button.rating-info{color:#17a2b8}.tripetto-collector-rating>div>button.rating-info path{fill:#17a2b8}.tripetto-collector-rating>div>button.rating-info:hover,.tripetto-collector-rating>div>button.rating-info.selected{color:#117a8b}.tripetto-collector-rating>div>button.rating-info:hover path,.tripetto-collector-rating>div>button.rating-info.selected path{fill:#117a8b}.tripetto-collector-rating>div>button.rating-light{color:#f8f9fa}.tripetto-collector-rating>div>button.rating-light path{fill:#f8f9fa}.tripetto-collector-rating>div>button.rating-light:hover,.tripetto-collector-rating>div>button.rating-light.selected{color:#dae0e5}.tripetto-collector-rating>div>button.rating-light:hover path,.tripetto-collector-rating>div>button.rating-light.selected path{fill:#dae0e5}.tripetto-collector-rating>div>button.rating-dark{color:#343a40}.tripetto-collector-rating>div>button.rating-dark path{fill:#343a40}.tripetto-collector-rating>div>button.rating-dark:hover,.tripetto-collector-rating>div>button.rating-dark.selected{color:#1d2124}.tripetto-collector-rating>div>button.rating-dark:hover path,.tripetto-collector-rating>div>button.rating-dark.selected path{fill:#1d2124}@media (min-width: 576px){.tripetto-collector-rating>div>button{width:80px}.tripetto-collector-rating>div>button svg{width:64px;height:64px}}.tripetto-collector-rating>div.form-group-footer{padding-bottom:40px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(86),
            c = o(87);
        o(88); var a = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { return l.createElement("div", { className: "tripetto-collector-statement statement-" + (t.style.form && t.style.form.inputStyle || "primary"), tabIndex: t.tabIndex, ref: t.ref }, l.createElement("span", null, c.ICON), l.createElement("span", null, this.props.imageAboveText && t.imageFromURL(this.props.imageURL, this.props.imageWidth), t.name(), t.description, !this.props.imageAboveText && t.imageFromURL(this.props.imageURL, this.props.imageWidth)), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-statement", alias: "statement" })], e) }(i.Statement);
        e.StatementBlock = a }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 0) }([function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
            e.Statement = r.Statement }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                function o() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) });
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e }(o(2).NodeBlock);
            e.Statement = n }, function(t, e) { t.exports = o(0) }]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON = r.createElement("svg", { viewBox: "0 0 10240 10240" }, r.createElement("path", { d: "M6400 8320l1920 0c353,0 640,-287 640,-640l0 -1920c0,-353 -287,-640 -640,-640l-960 0c0,-499 0,-1464 1310,-1587 165,-16 290,-153 290,-319l0 -966c0,-91 -34,-169 -100,-232 -66,-63 -145,-92 -236,-88 -2864,146 -2864,2164 -2864,3192l0 2560c0,353 287,640 640,640z" }), r.createElement("path", { d: "M1920 8320l1920 0c353,0 640,-287 640,-640l0 -1920c0,-353 -287,-640 -640,-640l-960 0c0,-499 0,-1464 1310,-1587 165,-16 290,-153 290,-319l0 -966c0,-91 -34,-169 -100,-232 -66,-63 -145,-92 -236,-88 -2864,146 -2864,2164 -2864,3192l0 2560c0,353 287,640 640,640z" })) }, function(t, e, o) { var r = o(89); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-statement.statement-primary svg path{fill:#004085}.tripetto-collector-statement.statement-secondary svg path{fill:#383d41}.tripetto-collector-statement.statement-success svg path{fill:#155724}.tripetto-collector-statement.statement-danger svg path{fill:#721c24}.tripetto-collector-statement.statement-warning svg path{fill:#856404}.tripetto-collector-statement.statement-info svg path{fill:#0c5460}.tripetto-collector-statement.statement-light svg path{fill:#818182}.tripetto-collector-statement.statement-dark svg path{fill:#1b1e21}.tripetto-collector-statement>span{display:table-cell}.tripetto-collector-statement>span>svg{width:16px;height:16px;position:relative;top:-16px;margin-right:4px}@media (min-width: 576px){.tripetto-collector-statement>span>svg{width:20px;height:20px;top:-20px;margin-right:8px}}.tripetto-collector-statement>span>h2{margin:0;font-weight:400}.tripetto-collector-statement>div{padding-top:15px;padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(91);
        o(92); var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-text" }, t.name(this.required), t.description, l.createElement("input", { type: "text", key: this.key(), required: this.required, defaultValue: this.textSlot.value, tabIndex: t.tabIndex, placeholder: t.placeholder, maxLength: this.maxLength, className: "form-control form-control-" + (t.style.form && t.style.form.inputStyle || "default") + (t.isFailed ? " is-invalid" : ""), "aria-describedby": this.node.explanation && this.key("explanation"), onChange: function(t) { e.textSlot.value = t.target.value }, onFocus: t.onFocus, onBlur: function(o) { t.onBlur(), o.target.value = e.textSlot.string }, ref: t.ref }), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-text" })], e) }(i.Text);
        e.TextBlock = c }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.Text = r.Text }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isEqual = function() { var t = this.valueOf(); if (t) { var e = this.props.ignoreCase ? i.Str.lowercase(t.string) : t.string,
                                o = this.props.ignoreCase ? i.Str.lowercase(this.props.match) : this.props.match; switch (this.props.mode) {
                                case "exact":
                                    return e === o;
                                case "contains":
                                    return -1 !== e.indexOf(o) } } return !1 }, n([i.condition], e.prototype, "isEqual", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-text" })], e) }(i.ConditionBlock);
            e.TextCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                function o() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) });
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = o(0),
                i = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.textSlot = n.assert(e.valueOf("value")), e.required = e.textSlot.slot.required || !1, e.maxLength = e.textSlot.slot.maxLength, e } return l(e, t), e }(n.NodeBlock);
            e.Text = i }]) }, function(t, e, o) { var r = o(93); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-text>input{margin:24px 0px !important}.tripetto-collector-text>div{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(95);
        o(96); var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-textarea" }, t.name(this.required), t.description, l.createElement("textarea", { key: this.key(), id: this.key(), rows: 3, required: this.required, defaultValue: this.textareaSlot.value, placeholder: t.placeholder, tabIndex: t.tabIndex, className: "form-control form-control-" + (t.style.form && t.style.form.inputStyle || "default") + (t.isFailed ? " is-invalid" : ""), "aria-describedby": this.node.explanation && this.key("explanation"), onChange: function(t) { e.textareaSlot.value = t.target.value }, onFocus: t.onFocus, onBlur: function(o) { t.onBlur(), o.target.value = e.textareaSlot.string }, ref: function(e) { t.ref(e), t.keystroke((function(e, o) { return 13 === e ? (o && t.next(), o) : 38 !== e && 40 !== e && void 0 })) } }), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-textarea" })], e) }(i.Textarea);
        e.TextareaBlock = c }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2); var r = o(3);
            e.Textarea = r.Textarea }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isEqual = function() { var t = this.valueOf(); if (t) { var e = this.props.ignoreCase ? i.Str.lowercase(t.string) : t.string,
                                o = this.props.ignoreCase ? i.Str.lowercase(this.props.search) : this.props.search; return -1 !== e.indexOf(o) } return !1 }, n([i.condition], e.prototype, "isEqual", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-textarea" })], e) }(i.ConditionBlock);
            e.TextareaCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                function o() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) });
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = o(0),
                i = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.textareaSlot = n.assert(e.valueOf("value")), e.required = e.textareaSlot.slot.required || !1, e } return l(e, t), e }(n.NodeBlock);
            e.Textarea = i }]) }, function(t, e, o) { var r = o(97); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-textarea>textarea{margin:24px 0px !important}.tripetto-collector-textarea>div{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(99);
        o(100); var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-url" }, t.name(this.required), t.description, l.createElement("input", { type: "url", key: this.key(), required: this.required, inputMode: "url", defaultValue: this.urlSlot.value, tabIndex: t.tabIndex, placeholder: t.placeholder || "https://", className: "form-control form-control-" + (t.style.form && t.style.form.inputStyle || "default") + (t.isFailed ? " is-invalid" : ""), "aria-describedby": this.node.explanation && this.key("explanation"), onChange: function(t) { e.urlSlot.value = t.target.value }, onFocus: t.onFocus, onBlur: function(o) { t.onBlur(), o.target.value = e.urlSlot.string }, ref: t.ref }), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")), t.okButton)) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-url" })], e) }(i.URL);
        e.URLBlock = c }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 0) }([function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
            e.URL = r.URL }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(2),
                c = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i,
                a = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.urlSlot = i.assert(e.valueOf("url")), e.required = e.urlSlot.slot.required || !1, e } return l(e, t), e.prototype.validate = function() { return !this.urlSlot.string || c.test(this.urlSlot.value) }, n([i.validator], e.prototype, "validate", null), e }(i.NodeBlock);
            e.URL = a }, function(t, e) { t.exports = o(0) }]) }, function(t, e, o) { var r = o(101); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-url>input{margin:24px 0px !important}.tripetto-collector-url>div{padding-bottom:32px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
            l = o(1),
            n = o(0),
            i = o(103),
            c = o(104),
            a = o(105);
        o(106); var s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return r.__extends(e, t), e.prototype.toggleAndContinue = function(t, e) { this.answerSlot.value = this.answerSlot.value === t ? "" : t, this.answerSlot.value && e.nextAfterAnimation() }, e.prototype.render = function(t) { var e = this; return l.createElement("div", { className: "tripetto-collector-yes-no", tabIndex: t.tabIndex, ref: function(o) { t.ref(o), t.keystroke((function(o) { 89 === o && e.toggleAndContinue("yes", t), 78 === o && e.toggleAndContinue("no", t) })) } }, this.props.imageAboveText && t.imageFromURL(this.props.imageURL, this.props.imageWidth), t.name(this.required), t.description, !this.props.imageAboveText && t.imageFromURL(this.props.imageURL, this.props.imageWidth), l.createElement("div", { className: "btn-group", role: "group" }, l.createElement("button", { key: this.key("yes"), tabIndex: t.tabIndex, className: "btn btn-" + ("yes" === this.answerSlot.value ? "" + (t.style.form && t.style.form.positiveStyle || "success") : "" + (t.style.form && t.style.form.neutralStyle || "outline-secondary")), onClick: function() { return e.toggleAndContinue("yes", t) } }, this.props.altYes ? this.props.altYes : l.createElement(l.Fragment, null, c.ICON_YES, l.createElement("span", { className: "ml-2" }, n.pgettext("collector-rolling", "Yes")))), l.createElement("button", { key: this.key("no"), tabIndex: t.tabIndex, className: "btn btn-" + ("no" === this.answerSlot.value ? "" + (t.style.form && t.style.form.negativeStyle || "danger") : "" + (t.style.form && t.style.form.neutralStyle || "outline-secondary")), onClick: function() { return e.toggleAndContinue("no", t) } }, this.props.altNo ? this.props.altNo : l.createElement(l.Fragment, null, a.ICON_NO, l.createElement("span", { className: "ml-2" }, n.pgettext("collector-rolling", "No"))))), l.createElement("div", { className: "form-group-footer" }, t.explanation(this.key("explanation")))) }, e = r.__decorate([n.tripetto({ type: "node", identifier: "tripetto-block-yes-no", alias: "yes-no", autoRender: !0 })], e) }(i.YesNo);
        e.YesNoBlock = s }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 3) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isNo = function() { var t = this.valueOf(); return !!t && "no" === t.value }, n([i.condition], e.prototype, "isNo", null), n([i.block({ type: "condition", identifier: "tripetto-block-yes-no:no", alias: "yes-no:no" })], e) }(i.ConditionBlock);
            e.No = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.isYes = function() { var t = this.valueOf(); return !!t && "yes" === t.value }, n([i.condition], e.prototype, "isYes", null), n([i.block({ type: "condition", identifier: "tripetto-block-yes-no:yes", alias: "yes-no:yes" })], e) }(i.ConditionBlock);
            e.Yes = c }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(1), o(2); var r = o(4);
            e.YesNo = r.YesNo }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                function o() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) });
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = o(0);
            o(1), o(2); var i = function(t) {
                function e() { var e = null !== t && t.apply(this, arguments) || this; return e.answerSlot = n.assert(e.valueOf("answer")), e.required = e.answerSlot.slot.required || !1, e } return l(e, t), e.prototype.toggle = function(t) { this.answerSlot.value = this.answerSlot.value === t ? "" : t }, e }(n.NodeBlock);
            e.YesNo = i }]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_YES = r.createElement("svg", { viewBox: "0 0 10240 10240" }, r.createElement("path", { d: "M3840 5760l3934 -3934c124,-124 328,-124 452,0l1148 1148c124,124 124,328 0,452l-5308 5308c-124,124 -328,124 -452,0l-2748 -2748c-124,-124 -124,-328 0,-452l1148 -1148c124,-124 328,-124 452,0l1374 1374z" })) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1);
        e.ICON_NO = r.createElement("svg", { viewBox: "0 0 10240 10240" }, r.createElement("path", { d: "M7906 1506l828 828c124,124 124,328 0,452l-2334 2334 2334 2334c124,124 124,328 0,452l-828 828c-124,124 -328,124 -452,0l-2334 -2334 -2334 2334c-124,124 -328,124 -452,0l-828 -828c-124,-124 -124,-328 0,-452l2334 -2334 -2334 -2334c-124,-124 -124,-328 0,-452l828 -828c124,-124 328,-124 452,0l2334 2334 2334 -2334c124,-124 328,-124 452,0z" })) }, function(t, e, o) { var r = o(107); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, ".tripetto-collector-yes-no>div{padding:15px 0px;display:block !important}.tripetto-collector-yes-no>div.form-group-footer{padding-bottom:40px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}\n", ""]) }, function(t, e, o) { window, t.exports = function(t, e) { "use strict"; var o = {}; return function e(r) { if (o[r]) return o[r].exports; var l = o[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, e), l.l = !0, l.exports }(411) }({ 411: function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                        function o() { this.constructor = t }
                        r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                    n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                            i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                        else
                            for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
                Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(504),
                    c = function(t) {
                        function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.evaluateDevice = function() { if (window && window.screen) { var t = i.Num.min(window.screen.width, window.screen.height); return t < 400 ? "phone" === this.props.deviceType : t < 800 ? "tablet" === this.props.deviceType : "desktop" === this.props.deviceType } return !1 }, n([i.condition], e.prototype, "evaluateDevice", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-device" })], e) }(i.ConditionBlock);
                e.DeviceCondition = c }, 504: function(t) { t.exports = o(0) } }) }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 2) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.IS_EMAIL = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(3), o(4) }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = o(1),
                a = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.recipientSlot = i.assert(e.valueOf("recipient")), e.subjectSlot = i.assert(e.valueOf("subject")), e.messageSlot = i.assert(e.valueOf("message")), e } return l(e, t), e.prototype.do = function() { var t = ""; if (this.props.recipient && "fixed" !== this.props.recipient) { var e = this.variableFor(this.props.recipient);
                            e && (t = e.string) } else t = this.props.recipientFixed;
                        this.recipientSlot.value = t || "", this.subjectSlot.value = i.markdownifyToString(this.node.name || "", this.context, "-"), this.messageSlot.value = i.markdownifyToString(this.node.description || "", this.context, "-", !0) }, e.prototype.validate = function() { return !this.recipientSlot.string || c.IS_EMAIL.test(this.recipientSlot.string) }, n([i.validator], e.prototype, "validate", null), n([i.tripetto({ type: "headless", identifier: "tripetto-block-mailer" })], e) }(i.HeadlessBlock);
            e.MailerBlock = a }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = o(1),
                a = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.willMail = function() { var t = this.valueOf("recipient"); return this.props.willMail ? t && t.hasValue && c.IS_EMAIL.test(t.string) || !1 : !t || "" === t.string }, n([i.condition], e.prototype, "willMail", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-mailer" })], e) }(i.ConditionBlock);
            e.MailerCondition = a }]) }, function(t, e, o) { window, t.exports = function(t) { var e = {};

            function o(r) { if (e[r]) return e[r].exports; var l = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(l.exports, l, l.exports, o), l.l = !0, l.exports } return o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var l in t) o.d(r, l, function(e) { return t[e] }.bind(null, l)); return r }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 1) }([function(t, e) { t.exports = o(0) }, function(t, e, o) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), o(2), o(3), o(4), o(5) }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.compare = function() { var t = this.valueOf(); if (t) { var e = this.props.ignoreCase ? i.Str.lowercase(t.string) : t.string,
                                o = this.props.ignoreCase ? i.Str.lowercase(this.props.value) : this.props.value; switch (this.props.mode) {
                                case "equals":
                                    return e === o;
                                case "contains":
                                    return -1 !== e.indexOf(o) } } return !1 }, n([i.condition], e.prototype, "compare", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-hidden-field-string" })], e) }(i.ConditionBlock);
            e.HiddenFieldStringCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.compare = function() { var t = this.valueOf(); if (t && t.hasValue) switch (this.props.mode) {
                            case "below":
                                return t.value < this.props.value;
                            case "above":
                                return t.value > this.props.value;
                            default:
                                return t.value === this.props.value }
                        return !1 }, n([i.condition], e.prototype, "compare", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-hidden-field-number" })], e) }(i.ConditionBlock);
            e.HiddenFieldNumberCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return l(e, t), e.prototype.compare = function() { var t = this.valueOf(); return t && t.value === this.props.orientation || !1 }, n([i.condition], e.prototype, "compare", null), n([i.tripetto({ type: "condition", identifier: "tripetto-block-hidden-field-orientation" })], e) }(i.ConditionBlock);
            e.HiddenFieldOrientationCondition = c }, function(t, e, o) { "use strict"; var r, l = this && this.__extends || (r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]) })(t, e) }, function(t, e) {
                    function o() { this.constructor = t }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o) }),
                n = this && this.__decorate || function(t, e, o, r) { var l, n = arguments.length,
                        i = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r);
                    else
                        for (var c = t.length - 1; c >= 0; c--)(l = t[c]) && (i = (n < 3 ? l(i) : n > 3 ? l(e, o, i) : l(e, o)) || i); return n > 3 && i && Object.defineProperty(e, o, i), i };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = o(0),
                c = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.fieldSlot = i.assert(e.valueOf("value")), e } return l(e, t), e.prototype.do = function() { switch (this.props.fieldType) {
                            case "value":
                                this.fieldSlot.value = this.props.fieldValue || ""; break;
                            case "uuid":
                                this.fieldSlot.value = i.SHA2_256(("" + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/1|0/g, (function() { return (0 | 16 * Math.random()).toString(16) }))); break;
                            case "timestamp":
                                this.fieldSlot.value = (new Date).toISOString(); break;
                            case "variable":
                                var t = void 0; if (this.props.fieldVariable)
                                    for (var e = window; !t && e;) t = i.getAny(e, this.props.fieldVariable), e = e !== window.parent && window.parent || void 0;
                                this.fieldSlot.value = "string" == typeof t ? t : ""; break;
                            case "language":
                                this.fieldSlot.value = navigator.language || ""; break;
                            case "querystring":
                                this.fieldSlot.value = (this.props.fieldQueryStringParameter ? new URLSearchParams(document.location.search.substring(1)).get(this.props.fieldQueryStringParameter) : document.location.search.substring(1)) || ""; break;
                            case "cookie":
                                if (this.props.fieldCookie) { var o = document.cookie.match(RegExp("(?:^|;\\s*)" + this.props.fieldCookie.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1") + "=([^;]*)"));
                                    this.fieldSlot.value = o && o[1] || "" } else this.fieldSlot.value = document.cookie || ""; break;
                            case "localStorage":
                                var r = this.props.fieldLocalStorage && localStorage.getItem(this.props.fieldLocalStorage);
                                this.fieldSlot.value = "string" == typeof r ? r : ""; break;
                            case "sessionStorage":
                                var l = this.props.fieldSessionStorage && sessionStorage.getItem(this.props.fieldSessionStorage);
                                this.fieldSlot.value = "string" == typeof l ? l : ""; break;
                            case "user-agent":
                                this.fieldSlot.value = navigator.userAgent || ""; break;
                            case "title":
                                this.fieldSlot.value = document.title || ""; break;
                            case "url":
                                this.fieldSlot.value = document.URL || window.parent.location.href || ""; break;
                            case "referrer":
                                this.fieldSlot.value = document.referrer || ""; break;
                            case "screenOrientation":
                                window.screen && window.screen.orientation && window.screen.orientation.type ? this.fieldSlot.value = "portrait-primary" === window.screen.orientation.type || "portrait-secondary" === window.screen.orientation.type ? "portrait" : "landscape" : this.fieldSlot.value = window.screen && window.screen.height > window.screen.width ? "portrait" : "landscape"; break;
                            case "screenWidth":
                                this.fieldSlot.value = window.screen && window.screen.width || 0; break;
                            case "screenHeight":
                                this.fieldSlot.value = window.screen && window.screen.height || 0; break;
                            case "devicePixelRatio":
                                this.fieldSlot.value = window.devicePixelRatio || 1 } }, n([i.tripetto({ type: "headless", identifier: "tripetto-block-hidden-field" })], e) }(i.HeadlessBlock);
            e.HiddenField = c }]) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1),
            l = o(0);
        e.stoppedMessage = function() { return r.createElement("section", { className: "container" }, r.createElement("div", { className: "row justify-content-center align-items-center message" }, r.createElement("div", { className: "col-md-8 col-lg-6" }, r.createElement("div", { className: "text-center" }, r.createElement("h2", null, l.pgettext("collector-rolling", "✋ Stopped")), r.createElement("h3", null, l.pgettext("collector-rolling", "The form was stopped")))))) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1),
            l = o(0);
        e.pausedMessage = function() { return r.createElement("section", { className: "container" }, r.createElement("div", { className: "row justify-content-center align-items-center message" }, r.createElement("div", { className: "col-md-8 col-lg-6" }, r.createElement("div", { className: "text-center" }, r.createElement("h2", null, l.pgettext("collector-rolling", "🚧 Paused")), r.createElement("h3", null, l.pgettext("collector-rolling", "The form was paused")))))) } }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(1),
            l = o(0);
        e.finishedMessage = function(t, e) { return r.createElement("section", { className: "container" }, r.createElement("div", { className: "row justify-content-center align-items-center message" }, r.createElement("div", { className: "col-md-8" }, r.createElement("div", { className: "text-center" }, r.createElement("h2", null, e.confirmationTitle || l.pgettext("collector-rolling", "✅ Form completed")), "" !== e.confirmationSubtitle && r.createElement("h3", null, e.confirmationSubtitle || l.pgettext("collector-rolling", "Thank you")), e.confirmationText && r.createElement("p", { className: "text-faded my-0" }, e.confirmationText), e.confirmationImage && r.createElement("img", { src: e.confirmationImage, className: "img-fluid border rounded" }), !e.removeBranding && r.createElement(r.Fragment, null, r.createElement("hr", { className: "my-5", style: { borderColor: t.textColor || void 0 } }), r.createElement("h4", { className: "pb-1" }, l.pgettext("collector-rolling", "")), r.createElement("p", { className: "text-faded my-0" }, l.pgettext("collector-rolling", "")), r.createElement("p", { className: "text-faded text-bold mt-0 mb-4" }, l.pgettext("collector-rolling", ""))), (!e.removeBranding || e.confirmationButton && "off" !== e.confirmationButton) && r.createElement("div", null, r.createElement("button", { className: "btn btn-" + (t.buttons && t.buttons.okStyle || "primary") + " mt-4", role: "button", onClick: function() { return window.open(e.confirmationButton && "off" !== e.confirmationButton && e.confirmationButton.url || "") } }, e.confirmationButton && "off" !== e.confirmationButton ? e.confirmationButton.label || l.pgettext("collector-rolling", "Done") : l.pgettext("collector-rolling", "Continue"))), !e.removeBranding && r.createElement("a", { href: "#", className: "link", style: { color: t.textColor } }, l.pgettext("collector-rolling", "")))))) } }, function(t, e, o) {! function(t, e, o) { "use strict";

            function r(t, e) { for (var o = 0; o < e.length; o++) { var r = e[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function l(t, e, o) { return e && r(t.prototype, e), o && r(t, o), t }

            function n(t, e, o) { return e in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = o, t }

            function i(t) { for (var e = 1; e < arguments.length; e++) { var o = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(o); "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(o).filter((function(t) { return Object.getOwnPropertyDescriptor(o, t).enumerable })))), r.forEach((function(e) { n(t, e, o[e]) })) } return t }
            e = e && e.hasOwnProperty("default") ? e.default : e, o = o && o.hasOwnProperty("default") ? o.default : o; var c = "transitionend";

            function a(t) { var o = this,
                    r = !1; return e(this).one(s.TRANSITION_END, (function() { r = !0 })), setTimeout((function() { r || s.triggerTransitionEnd(o) }), t), this } var s = { TRANSITION_END: "bsTransitionEnd", getUID: function(t) { do { t += ~~(1e6 * Math.random()) } while (document.getElementById(t)); return t }, getSelectorFromElement: function(t) { var e = t.getAttribute("data-target"); if (!e || "#" === e) { var o = t.getAttribute("href");
                        e = o && "#" !== o ? o.trim() : "" } try { return document.querySelector(e) ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function(t) { if (!t) return 0; var o = e(t).css("transition-duration"),
                        r = e(t).css("transition-delay"),
                        l = parseFloat(o),
                        n = parseFloat(r); return l || n ? (o = o.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(o) + parseFloat(r))) : 0 }, reflow: function(t) { return t.offsetHeight }, triggerTransitionEnd: function(t) { e(t).trigger(c) }, supportsTransitionEnd: function() { return Boolean(c) }, isElement: function(t) { return (t[0] || t).nodeType }, typeCheckConfig: function(t, e, o) { for (var r in o)
                        if (Object.prototype.hasOwnProperty.call(o, r)) { var l = o[r],
                                n = e[r],
                                i = n && s.isElement(n) ? "element" : (c = n, {}.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(l).test(i)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + i + '" but expected type "' + l + '".') }
                    var c }, findShadowRoot: function(t) { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? s.findShadowRoot(t.parentNode) : null } };
            e.fn.emulateTransitionEnd = a, e.event.special[s.TRANSITION_END] = { bindType: c, delegateType: c, handle: function(t) { if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }; var p = e.fn.alert,
                u = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
                d = "alert",
                f = "fade",
                g = "show",
                m = function() {
                    function t(t) { this._element = t } var o = t.prototype; return o.close = function(t) { var e = this._element;
                        t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, o.dispose = function() { e.removeData(this._element, "bs.alert"), this._element = null }, o._getRootElement = function(t) { var o = s.getSelectorFromElement(t),
                            r = !1; return o && (r = document.querySelector(o)), r || (r = e(t).closest("." + d)[0]), r }, o._triggerCloseEvent = function(t) { var o = e.Event(u.CLOSE); return e(t).trigger(o), o }, o._removeElement = function(t) { var o = this; if (e(t).removeClass(g), e(t).hasClass(f)) { var r = s.getTransitionDurationFromElement(t);
                            e(t).one(s.TRANSITION_END, (function(e) { return o._destroyElement(t, e) })).emulateTransitionEnd(r) } else this._destroyElement(t) }, o._destroyElement = function(t) { e(t).detach().trigger(u.CLOSED).remove() }, t._jQueryInterface = function(o) { return this.each((function() { var r = e(this),
                                l = r.data("bs.alert");
                            l || (l = new t(this), r.data("bs.alert", l)), "close" === o && l[o](this) })) }, t._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, l(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), t }();
            e(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m)), e.fn.alert = m._jQueryInterface, e.fn.alert.Constructor = m, e.fn.alert.noConflict = function() { return e.fn.alert = p, m._jQueryInterface }; var h = e.fn.button,
                b = "active",
                v = "btn",
                y = "focus",
                x = '[data-toggle^="button"]',
                w = '[data-toggle="buttons"]',
                _ = 'input:not([type="hidden"])',
                k = ".active",
                E = ".btn",
                S = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
                T = function() {
                    function t(t) { this._element = t } var o = t.prototype; return o.toggle = function() { var t = !0,
                            o = !0,
                            r = e(this._element).closest(w)[0]; if (r) { var l = this._element.querySelector(_); if (l) { if ("radio" === l.type)
                                    if (l.checked && this._element.classList.contains(b)) t = !1;
                                    else { var n = r.querySelector(k);
                                        n && e(n).removeClass(b) }
                                if (t) { if (l.hasAttribute("disabled") || r.hasAttribute("disabled") || l.classList.contains("disabled") || r.classList.contains("disabled")) return;
                                    l.checked = !this._element.classList.contains(b), e(l).trigger("change") }
                                l.focus(), o = !1 } }
                        o && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), t && e(this._element).toggleClass(b) }, o.dispose = function() { e.removeData(this._element, "bs.button"), this._element = null }, t._jQueryInterface = function(o) { return this.each((function() { var r = e(this).data("bs.button");
                            r || (r = new t(this), e(this).data("bs.button", r)), "toggle" === o && r[o]() })) }, l(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), t }();
            e(document).on(S.CLICK_DATA_API, x, (function(t) { t.preventDefault(); var o = t.target;
                e(o).hasClass(v) || (o = e(o).closest(E)), T._jQueryInterface.call(e(o), "toggle") })).on(S.FOCUS_BLUR_DATA_API, x, (function(t) { var o = e(t.target).closest(E)[0];
                e(o).toggleClass(y, /^focus(in)?$/.test(t.type)) })), e.fn.button = T._jQueryInterface, e.fn.button.Constructor = T, e.fn.button.noConflict = function() { return e.fn.button = h, T._jQueryInterface }; var C = "carousel",
                O = ".bs.carousel",
                N = e.fn[C],
                P = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
                j = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
                A = "next",
                D = "prev",
                I = "left",
                M = "right",
                R = { SLIDE: "slide.bs.carousel", SLID: "slid.bs.carousel", KEYDOWN: "keydown.bs.carousel", MOUSEENTER: "mouseenter.bs.carousel", MOUSELEAVE: "mouseleave.bs.carousel", TOUCHSTART: "touchstart.bs.carousel", TOUCHMOVE: "touchmove.bs.carousel", TOUCHEND: "touchend.bs.carousel", POINTERDOWN: "pointerdown.bs.carousel", POINTERUP: "pointerup.bs.carousel", DRAG_START: "dragstart.bs.carousel", LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
                L = "carousel",
                z = "active",
                F = "slide",
                B = "carousel-item-right",
                U = "carousel-item-left",
                q = "carousel-item-next",
                H = "carousel-item-prev",
                W = "pointer-event",
                V = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", ITEM_IMG: ".carousel-item img", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
                Y = { TOUCH: "touch", PEN: "pen" },
                K = function() {
                    function t(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(V.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var o = t.prototype; return o.next = function() { this._isSliding || this._slide(A) }, o.nextWhenVisible = function() {!document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next() }, o.prev = function() { this._isSliding || this._slide(D) }, o.pause = function(t) { t || (this._isPaused = !0), this._element.querySelector(V.NEXT_PREV) && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, o.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, o.to = function(t) { var o = this;
                        this._activeElement = this._element.querySelector(V.ACTIVE_ITEM); var r = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding) e(this._element).one(R.SLID, (function() { return o.to(t) }));
                            else { if (r === t) return this.pause(), void this.cycle(); var l = t > r ? A : D;
                                this._slide(l, this._items[t]) } }, o.dispose = function() { e(this._element).off(O), e.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, o._getConfig = function(t) { return t = i({}, P, t), s.typeCheckConfig(C, t, j), t }, o._handleSwipe = function() { var t = Math.abs(this.touchDeltaX); if (!(t <= 40)) { var e = t / this.touchDeltaX;
                            e > 0 && this.prev(), e < 0 && this.next() } }, o._addEventListeners = function() { var t = this;
                        this._config.keyboard && e(this._element).on(R.KEYDOWN, (function(e) { return t._keydown(e) })), "hover" === this._config.pause && e(this._element).on(R.MOUSEENTER, (function(e) { return t.pause(e) })).on(R.MOUSELEAVE, (function(e) { return t.cycle(e) })), this._config.touch && this._addTouchEventListeners() }, o._addTouchEventListeners = function() { var t = this; if (this._touchSupported) { var o = function(e) { t._pointerEvent && Y[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX) },
                                r = function(e) { t._pointerEvent && Y[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) { return t.cycle(e) }), 500 + t._config.interval)) };
                            e(this._element.querySelectorAll(V.ITEM_IMG)).on(R.DRAG_START, (function(t) { return t.preventDefault() })), this._pointerEvent ? (e(this._element).on(R.POINTERDOWN, (function(t) { return o(t) })), e(this._element).on(R.POINTERUP, (function(t) { return r(t) })), this._element.classList.add(W)) : (e(this._element).on(R.TOUCHSTART, (function(t) { return o(t) })), e(this._element).on(R.TOUCHMOVE, (function(e) { return function(e) { e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX }(e) })), e(this._element).on(R.TOUCHEND, (function(t) { return r(t) }))) } }, o._keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev(); break;
                            case 39:
                                t.preventDefault(), this.next() } }, o._getItemIndex = function(t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(V.ITEM)) : [], this._items.indexOf(t) }, o._getItemByDirection = function(t, e) { var o = t === A,
                            r = t === D,
                            l = this._getItemIndex(e),
                            n = this._items.length - 1; if ((r && 0 === l || o && l === n) && !this._config.wrap) return e; var i = (l + (t === D ? -1 : 1)) % this._items.length; return -1 === i ? this._items[this._items.length - 1] : this._items[i] }, o._triggerSlideEvent = function(t, o) { var r = this._getItemIndex(t),
                            l = this._getItemIndex(this._element.querySelector(V.ACTIVE_ITEM)),
                            n = e.Event(R.SLIDE, { relatedTarget: t, direction: o, from: l, to: r }); return e(this._element).trigger(n), n }, o._setActiveIndicatorElement = function(t) { if (this._indicatorsElement) { var o = [].slice.call(this._indicatorsElement.querySelectorAll(V.ACTIVE));
                            e(o).removeClass(z); var r = this._indicatorsElement.children[this._getItemIndex(t)];
                            r && e(r).addClass(z) } }, o._slide = function(t, o) { var r, l, n, i = this,
                            c = this._element.querySelector(V.ACTIVE_ITEM),
                            a = this._getItemIndex(c),
                            p = o || c && this._getItemByDirection(t, c),
                            u = this._getItemIndex(p),
                            d = Boolean(this._interval); if (t === A ? (r = U, l = q, n = I) : (r = B, l = H, n = M), p && e(p).hasClass(z)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(p, n).isDefaultPrevented() && c && p) { this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(p); var f = e.Event(R.SLID, { relatedTarget: p, direction: n, from: a, to: u }); if (e(this._element).hasClass(F)) { e(p).addClass(l), s.reflow(p), e(c).addClass(r), e(p).addClass(r); var g = parseInt(p.getAttribute("data-interval"), 10);
                                g ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = g) : this._config.interval = this._config.defaultInterval || this._config.interval; var m = s.getTransitionDurationFromElement(c);
                                e(c).one(s.TRANSITION_END, (function() { e(p).removeClass(r + " " + l).addClass(z), e(c).removeClass(z + " " + l + " " + r), i._isSliding = !1, setTimeout((function() { return e(i._element).trigger(f) }), 0) })).emulateTransitionEnd(m) } else e(c).removeClass(z), e(p).addClass(z), this._isSliding = !1, e(this._element).trigger(f);
                            d && this.cycle() } }, t._jQueryInterface = function(o) { return this.each((function() { var r = e(this).data("bs.carousel"),
                                l = i({}, P, e(this).data()); "object" == typeof o && (l = i({}, l, o)); var n = "string" == typeof o ? o : l.slide; if (r || (r = new t(this, l), e(this).data("bs.carousel", r)), "number" == typeof o) r.to(o);
                            else if ("string" == typeof n) { if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                r[n]() } else l.interval && l.ride && (r.pause(), r.cycle()) })) }, t._dataApiClickHandler = function(o) { var r = s.getSelectorFromElement(this); if (r) { var l = e(r)[0]; if (l && e(l).hasClass(L)) { var n = i({}, e(l).data(), e(this).data()),
                                    c = this.getAttribute("data-slide-to");
                                c && (n.interval = !1), t._jQueryInterface.call(e(l), n), c && e(l).data("bs.carousel").to(c), o.preventDefault() } } }, l(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return P } }]), t }();
            e(document).on(R.CLICK_DATA_API, V.DATA_SLIDE, K._dataApiClickHandler), e(window).on(R.LOAD_DATA_API, (function() { for (var t = [].slice.call(document.querySelectorAll(V.DATA_RIDE)), o = 0, r = t.length; o < r; o++) { var l = e(t[o]);
                    K._jQueryInterface.call(l, l.data()) } })), e.fn[C] = K._jQueryInterface, e.fn[C].Constructor = K, e.fn[C].noConflict = function() { return e.fn[C] = N, K._jQueryInterface }; var $ = "collapse",
                Q = e.fn[$],
                X = { toggle: !0, parent: "" },
                G = { toggle: "boolean", parent: "(string|element)" },
                Z = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
                J = "show",
                tt = "collapse",
                et = "collapsing",
                ot = "collapsed",
                rt = "width",
                lt = "height",
                nt = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
                it = function() {
                    function t(t, e) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')); for (var o = [].slice.call(document.querySelectorAll(nt.DATA_TOGGLE)), r = 0, l = o.length; r < l; r++) { var n = o[r],
                                i = s.getSelectorFromElement(n),
                                c = [].slice.call(document.querySelectorAll(i)).filter((function(e) { return e === t }));
                            null !== i && c.length > 0 && (this._selector = i, this._triggerArray.push(n)) }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var o = t.prototype; return o.toggle = function() { e(this._element).hasClass(J) ? this.hide() : this.show() }, o.show = function() { var o, r, l = this; if (!(this._isTransitioning || e(this._element).hasClass(J) || (this._parent && 0 === (o = [].slice.call(this._parent.querySelectorAll(nt.ACTIVES)).filter((function(t) { return "string" == typeof l._config.parent ? t.getAttribute("data-parent") === l._config.parent : t.classList.contains(tt) }))).length && (o = null), o && (r = e(o).not(this._selector).data("bs.collapse")) && r._isTransitioning))) { var n = e.Event(Z.SHOW); if (e(this._element).trigger(n), !n.isDefaultPrevented()) { o && (t._jQueryInterface.call(e(o).not(this._selector), "hide"), r || e(o).data("bs.collapse", null)); var i = this._getDimension();
                                e(this._element).removeClass(tt).addClass(et), this._element.style[i] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(ot).attr("aria-expanded", !0), this.setTransitioning(!0); var c = "scroll" + (i[0].toUpperCase() + i.slice(1)),
                                    a = s.getTransitionDurationFromElement(this._element);
                                e(this._element).one(s.TRANSITION_END, (function() { e(l._element).removeClass(et).addClass(tt).addClass(J), l._element.style[i] = "", l.setTransitioning(!1), e(l._element).trigger(Z.SHOWN) })).emulateTransitionEnd(a), this._element.style[i] = this._element[c] + "px" } } }, o.hide = function() { var t = this; if (!this._isTransitioning && e(this._element).hasClass(J)) { var o = e.Event(Z.HIDE); if (e(this._element).trigger(o), !o.isDefaultPrevented()) { var r = this._getDimension();
                                this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", s.reflow(this._element), e(this._element).addClass(et).removeClass(tt).removeClass(J); var l = this._triggerArray.length; if (l > 0)
                                    for (var n = 0; n < l; n++) { var i = this._triggerArray[n],
                                            c = s.getSelectorFromElement(i);
                                        null !== c && (e([].slice.call(document.querySelectorAll(c))).hasClass(J) || e(i).addClass(ot).attr("aria-expanded", !1)) }
                                this.setTransitioning(!0), this._element.style[r] = ""; var a = s.getTransitionDurationFromElement(this._element);
                                e(this._element).one(s.TRANSITION_END, (function() { t.setTransitioning(!1), e(t._element).removeClass(et).addClass(tt).trigger(Z.HIDDEN) })).emulateTransitionEnd(a) } } }, o.setTransitioning = function(t) { this._isTransitioning = t }, o.dispose = function() { e.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, o._getConfig = function(t) { return (t = i({}, X, t)).toggle = Boolean(t.toggle), s.typeCheckConfig($, t, G), t }, o._getDimension = function() { return e(this._element).hasClass(rt) ? rt : lt }, o._getParent = function() { var o, r = this;
                        s.isElement(this._config.parent) ? (o = this._config.parent, void 0 !== this._config.parent.jquery && (o = this._config.parent[0])) : o = document.querySelector(this._config.parent); var l = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            n = [].slice.call(o.querySelectorAll(l)); return e(n).each((function(e, o) { r._addAriaAndCollapsedClass(t._getTargetFromElement(o), [o]) })), o }, o._addAriaAndCollapsedClass = function(t, o) { var r = e(t).hasClass(J);
                        o.length && e(o).toggleClass(ot, !r).attr("aria-expanded", r) }, t._getTargetFromElement = function(t) { var e = s.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, t._jQueryInterface = function(o) { return this.each((function() { var r = e(this),
                                l = r.data("bs.collapse"),
                                n = i({}, X, r.data(), "object" == typeof o && o ? o : {}); if (!l && n.toggle && /show|hide/.test(o) && (n.toggle = !1), l || (l = new t(this, n), r.data("bs.collapse", l)), "string" == typeof o) { if (void 0 === l[o]) throw new TypeError('No method named "' + o + '"');
                                l[o]() } })) }, l(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return X } }]), t }();
            e(document).on(Z.CLICK_DATA_API, nt.DATA_TOGGLE, (function(t) { "A" === t.currentTarget.tagName && t.preventDefault(); var o = e(this),
                    r = s.getSelectorFromElement(this),
                    l = [].slice.call(document.querySelectorAll(r));
                e(l).each((function() { var t = e(this),
                        r = t.data("bs.collapse") ? "toggle" : o.data();
                    it._jQueryInterface.call(t, r) })) })), e.fn[$] = it._jQueryInterface, e.fn[$].Constructor = it, e.fn[$].noConflict = function() { return e.fn[$] = Q, it._jQueryInterface }; var ct = "dropdown",
                at = e.fn[ct],
                st = new RegExp("38|40|27"),
                pt = { HIDE: "hide.bs.dropdown", HIDDEN: "hidden.bs.dropdown", SHOW: "show.bs.dropdown", SHOWN: "shown.bs.dropdown", CLICK: "click.bs.dropdown", CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
                ut = "disabled",
                dt = "show",
                ft = "dropup",
                gt = "dropright",
                mt = "dropleft",
                ht = "dropdown-menu-right",
                bt = "position-static",
                vt = '[data-toggle="dropdown"]',
                yt = ".dropdown form",
                xt = ".dropdown-menu",
                wt = ".navbar-nav",
                _t = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                kt = "top-start",
                Et = "top-end",
                St = "bottom-start",
                Tt = "bottom-end",
                Ct = "right-start",
                Ot = "left-start",
                Nt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
                Pt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
                jt = function() {
                    function t(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var r = t.prototype; return r.toggle = function() { if (!this._element.disabled && !e(this._element).hasClass(ut)) { var r = t._getParentFromElement(this._element),
                                l = e(this._menu).hasClass(dt); if (t._clearMenus(), !l) { var n = { relatedTarget: this._element },
                                    i = e.Event(pt.SHOW, n); if (e(r).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if (void 0 === o) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var c = this._element; "parent" === this._config.reference ? c = r : s.isElement(this._config.reference) && (c = this._config.reference, void 0 !== this._config.reference.jquery && (c = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(r).addClass(bt), this._popper = new o(c, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === e(r).closest(wt).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(dt), e(r).toggleClass(dt).trigger(e.Event(pt.SHOWN, n)) } } } }, r.show = function() { if (!(this._element.disabled || e(this._element).hasClass(ut) || e(this._menu).hasClass(dt))) { var o = { relatedTarget: this._element },
                                r = e.Event(pt.SHOW, o),
                                l = t._getParentFromElement(this._element);
                            e(l).trigger(r), r.isDefaultPrevented() || (e(this._menu).toggleClass(dt), e(l).toggleClass(dt).trigger(e.Event(pt.SHOWN, o))) } }, r.hide = function() { if (!this._element.disabled && !e(this._element).hasClass(ut) && e(this._menu).hasClass(dt)) { var o = { relatedTarget: this._element },
                                r = e.Event(pt.HIDE, o),
                                l = t._getParentFromElement(this._element);
                            e(l).trigger(r), r.isDefaultPrevented() || (e(this._menu).toggleClass(dt), e(l).toggleClass(dt).trigger(e.Event(pt.HIDDEN, o))) } }, r.dispose = function() { e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null) }, r.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, r._addEventListeners = function() { var t = this;
                        e(this._element).on(pt.CLICK, (function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() })) }, r._getConfig = function(t) { return t = i({}, this.constructor.Default, e(this._element).data(), t), s.typeCheckConfig(ct, t, this.constructor.DefaultType), t }, r._getMenuElement = function() { if (!this._menu) { var e = t._getParentFromElement(this._element);
                            e && (this._menu = e.querySelector(xt)) } return this._menu }, r._getPlacement = function() { var t = e(this._element.parentNode),
                            o = St; return t.hasClass(ft) ? (o = kt, e(this._menu).hasClass(ht) && (o = Et)) : t.hasClass(gt) ? o = Ct : t.hasClass(mt) ? o = Ot : e(this._menu).hasClass(ht) && (o = Tt), o }, r._detectNavbar = function() { return e(this._element).closest(".navbar").length > 0 }, r._getOffset = function() { var t = this,
                            e = {}; return "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = i({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e } : e.offset = this._config.offset, e }, r._getPopperConfig = function() { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t }, t._jQueryInterface = function(o) { return this.each((function() { var r = e(this).data("bs.dropdown"); if (r || (r = new t(this, "object" == typeof o ? o : null), e(this).data("bs.dropdown", r)), "string" == typeof o) { if (void 0 === r[o]) throw new TypeError('No method named "' + o + '"');
                                r[o]() } })) }, t._clearMenus = function(o) { if (!o || 3 !== o.which && ("keyup" !== o.type || 9 === o.which))
                            for (var r = [].slice.call(document.querySelectorAll(vt)), l = 0, n = r.length; l < n; l++) { var i = t._getParentFromElement(r[l]),
                                    c = e(r[l]).data("bs.dropdown"),
                                    a = { relatedTarget: r[l] }; if (o && "click" === o.type && (a.clickEvent = o), c) { var s = c._menu; if (e(i).hasClass(dt) && !(o && ("click" === o.type && /input|textarea/i.test(o.target.tagName) || "keyup" === o.type && 9 === o.which) && e.contains(i, o.target))) { var p = e.Event(pt.HIDE, a);
                                        e(i).trigger(p), p.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), r[l].setAttribute("aria-expanded", "false"), e(s).removeClass(dt), e(i).removeClass(dt).trigger(e.Event(pt.HIDDEN, a))) } } } }, t._getParentFromElement = function(t) { var e, o = s.getSelectorFromElement(t); return o && (e = document.querySelector(o)), e || t.parentNode }, t._dataApiKeydownHandler = function(o) { if ((/input|textarea/i.test(o.target.tagName) ? !(32 === o.which || 27 !== o.which && (40 !== o.which && 38 !== o.which || e(o.target).closest(xt).length)) : st.test(o.which)) && (o.preventDefault(), o.stopPropagation(), !this.disabled && !e(this).hasClass(ut))) { var r = t._getParentFromElement(this),
                                l = e(r).hasClass(dt); if (l && (!l || 27 !== o.which && 32 !== o.which)) { var n = [].slice.call(r.querySelectorAll(_t)); if (0 !== n.length) { var i = n.indexOf(o.target);
                                    38 === o.which && i > 0 && i--, 40 === o.which && i < n.length - 1 && i++, i < 0 && (i = 0), n[i].focus() } } else { if (27 === o.which) { var c = r.querySelector(vt);
                                    e(c).trigger("focus") }
                                e(this).trigger("click") } } }, l(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return Nt } }, { key: "DefaultType", get: function() { return Pt } }]), t }();
            e(document).on(pt.KEYDOWN_DATA_API, vt, jt._dataApiKeydownHandler).on(pt.KEYDOWN_DATA_API, xt, jt._dataApiKeydownHandler).on(pt.CLICK_DATA_API + " " + pt.KEYUP_DATA_API, jt._clearMenus).on(pt.CLICK_DATA_API, vt, (function(t) { t.preventDefault(), t.stopPropagation(), jt._jQueryInterface.call(e(this), "toggle") })).on(pt.CLICK_DATA_API, yt, (function(t) { t.stopPropagation() })), e.fn[ct] = jt._jQueryInterface, e.fn[ct].Constructor = jt, e.fn[ct].noConflict = function() { return e.fn[ct] = at, jt._jQueryInterface }; var At = e.fn.modal,
                Dt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                It = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                Mt = { HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api" },
                Rt = "modal-dialog-scrollable",
                Lt = "modal-scrollbar-measure",
                zt = "modal-backdrop",
                Ft = "modal-open",
                Bt = "fade",
                Ut = "show",
                qt = { DIALOG: ".modal-dialog", MODAL_BODY: ".modal-body", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top" },
                Ht = function() {
                    function t(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(qt.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 } var o = t.prototype; return o.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, o.show = function(t) { var o = this; if (!this._isShown && !this._isTransitioning) { e(this._element).hasClass(Bt) && (this._isTransitioning = !0); var r = e.Event(Mt.SHOW, { relatedTarget: t });
                            e(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(Mt.CLICK_DISMISS, qt.DATA_DISMISS, (function(t) { return o.hide(t) })), e(this._dialog).on(Mt.MOUSEDOWN_DISMISS, (function() { e(o._element).one(Mt.MOUSEUP_DISMISS, (function(t) { e(t.target).is(o._element) && (o._ignoreBackdropClick = !0) })) })), this._showBackdrop((function() { return o._showElement(t) }))) } }, o.hide = function(t) { var o = this; if (t && t.preventDefault(), this._isShown && !this._isTransitioning) { var r = e.Event(Mt.HIDE); if (e(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) { this._isShown = !1; var l = e(this._element).hasClass(Bt); if (l && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(Mt.FOCUSIN), e(this._element).removeClass(Ut), e(this._element).off(Mt.CLICK_DISMISS), e(this._dialog).off(Mt.MOUSEDOWN_DISMISS), l) { var n = s.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(s.TRANSITION_END, (function(t) { return o._hideModal(t) })).emulateTransitionEnd(n) } else this._hideModal() } } }, o.dispose = function() {
                        [window, this._element, this._dialog].forEach((function(t) { return e(t).off(".bs.modal") })), e(document).off(Mt.FOCUSIN), e.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, o.handleUpdate = function() { this._adjustDialog() }, o._getConfig = function(t) { return t = i({}, Dt, t), s.typeCheckConfig("modal", t, It), t }, o._showElement = function(t) { var o = this,
                            r = e(this._element).hasClass(Bt);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass(Rt) ? this._dialog.querySelector(qt.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, r && s.reflow(this._element), e(this._element).addClass(Ut), this._config.focus && this._enforceFocus(); var l = e.Event(Mt.SHOWN, { relatedTarget: t }),
                            n = function() { o._config.focus && o._element.focus(), o._isTransitioning = !1, e(o._element).trigger(l) }; if (r) { var i = s.getTransitionDurationFromElement(this._dialog);
                            e(this._dialog).one(s.TRANSITION_END, n).emulateTransitionEnd(i) } else n() }, o._enforceFocus = function() { var t = this;
                        e(document).off(Mt.FOCUSIN).on(Mt.FOCUSIN, (function(o) { document !== o.target && t._element !== o.target && 0 === e(t._element).has(o.target).length && t._element.focus() })) }, o._setEscapeEvent = function() { var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(Mt.KEYDOWN_DISMISS, (function(e) { 27 === e.which && (e.preventDefault(), t.hide()) })) : this._isShown || e(this._element).off(Mt.KEYDOWN_DISMISS) }, o._setResizeEvent = function() { var t = this;
                        this._isShown ? e(window).on(Mt.RESIZE, (function(e) { return t.handleUpdate(e) })) : e(window).off(Mt.RESIZE) }, o._hideModal = function() { var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function() { e(document.body).removeClass(Ft), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(Mt.HIDDEN) })) }, o._removeBackdrop = function() { this._backdrop && (e(this._backdrop).remove(), this._backdrop = null) }, o._showBackdrop = function(t) { var o = this,
                            r = e(this._element).hasClass(Bt) ? Bt : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = zt, r && this._backdrop.classList.add(r), e(this._backdrop).appendTo(document.body), e(this._element).on(Mt.CLICK_DISMISS, (function(t) { o._ignoreBackdropClick ? o._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === o._config.backdrop ? o._element.focus() : o.hide()) })), r && s.reflow(this._backdrop), e(this._backdrop).addClass(Ut), !t) return; if (!r) return void t(); var l = s.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(l) } else if (!this._isShown && this._backdrop) { e(this._backdrop).removeClass(Ut); var n = function() { o._removeBackdrop(), t && t() }; if (e(this._element).hasClass(Bt)) { var i = s.getTransitionDurationFromElement(this._backdrop);
                                e(this._backdrop).one(s.TRANSITION_END, n).emulateTransitionEnd(i) } else n() } else t && t() }, o._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, o._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, o._checkScrollbar = function() { var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, o._setScrollbar = function() { var t = this; if (this._isBodyOverflowing) { var o = [].slice.call(document.querySelectorAll(qt.FIXED_CONTENT)),
                                r = [].slice.call(document.querySelectorAll(qt.STICKY_CONTENT));
                            e(o).each((function(o, r) { var l = r.style.paddingRight,
                                    n = e(r).css("padding-right");
                                e(r).data("padding-right", l).css("padding-right", parseFloat(n) + t._scrollbarWidth + "px") })), e(r).each((function(o, r) { var l = r.style.marginRight,
                                    n = e(r).css("margin-right");
                                e(r).data("margin-right", l).css("margin-right", parseFloat(n) - t._scrollbarWidth + "px") })); var l = document.body.style.paddingRight,
                                n = e(document.body).css("padding-right");
                            e(document.body).data("padding-right", l).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px") }
                        e(document.body).addClass(Ft) }, o._resetScrollbar = function() { var t = [].slice.call(document.querySelectorAll(qt.FIXED_CONTENT));
                        e(t).each((function(t, o) { var r = e(o).data("padding-right");
                            e(o).removeData("padding-right"), o.style.paddingRight = r || "" })); var o = [].slice.call(document.querySelectorAll("" + qt.STICKY_CONTENT));
                        e(o).each((function(t, o) { var r = e(o).data("margin-right");
                            void 0 !== r && e(o).css("margin-right", r).removeData("margin-right") })); var r = e(document.body).data("padding-right");
                        e(document.body).removeData("padding-right"), document.body.style.paddingRight = r || "" }, o._getScrollbarWidth = function() { var t = document.createElement("div");
                        t.className = Lt, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, t._jQueryInterface = function(o, r) { return this.each((function() { var l = e(this).data("bs.modal"),
                                n = i({}, Dt, e(this).data(), "object" == typeof o && o ? o : {}); if (l || (l = new t(this, n), e(this).data("bs.modal", l)), "string" == typeof o) { if (void 0 === l[o]) throw new TypeError('No method named "' + o + '"');
                                l[o](r) } else n.show && l.show(r) })) }, l(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return Dt } }]), t }();
            e(document).on(Mt.CLICK_DATA_API, qt.DATA_TOGGLE, (function(t) { var o, r = this,
                    l = s.getSelectorFromElement(this);
                l && (o = document.querySelector(l)); var n = e(o).data("bs.modal") ? "toggle" : i({}, e(o).data(), e(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var c = e(o).one(Mt.SHOW, (function(t) { t.isDefaultPrevented() || c.one(Mt.HIDDEN, (function() { e(r).is(":visible") && r.focus() })) }));
                Ht._jQueryInterface.call(e(o), n, this) })), e.fn.modal = Ht._jQueryInterface, e.fn.modal.Constructor = Ht, e.fn.modal.noConflict = function() { return e.fn.modal = At, Ht._jQueryInterface }; var Wt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                Vt = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
                Yt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
                Kt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

            function $t(t, e, o) { if (0 === t.length) return t; if (o && "function" == typeof o) return o(t); for (var r = (new window.DOMParser).parseFromString(t, "text/html"), l = Object.keys(e), n = [].slice.call(r.body.querySelectorAll("*")), i = function(t, o) { var r = n[t],
                            i = r.nodeName.toLowerCase(); if (-1 === l.indexOf(r.nodeName.toLowerCase())) return r.parentNode.removeChild(r), "continue"; var c = [].slice.call(r.attributes),
                            a = [].concat(e["*"] || [], e[i] || []);
                        c.forEach((function(t) {
                            (function(t, e) { var o = t.nodeName.toLowerCase(); if (-1 !== e.indexOf(o)) return -1 === Wt.indexOf(o) || Boolean(t.nodeValue.match(Yt) || t.nodeValue.match(Kt)); for (var r = e.filter((function(t) { return t instanceof RegExp })), l = 0, n = r.length; l < n; l++)
                                    if (o.match(r[l])) return !0;
                                return !1 })(t, a) || r.removeAttribute(t.nodeName) })) }, c = 0, a = n.length; c < a; c++) i(c); return r.body.innerHTML } var Qt = "tooltip",
                Xt = e.fn.tooltip,
                Gt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                Zt = ["sanitize", "whiteList", "sanitizeFn"],
                Jt = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" },
                te = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
                ee = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Vt },
                oe = "show",
                re = "out",
                le = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
                ne = "fade",
                ie = "show",
                ce = ".tooltip-inner",
                ae = ".arrow",
                se = "hover",
                pe = "focus",
                ue = "click",
                de = "manual",
                fe = function() {
                    function t(t, e) { if (void 0 === o) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var r = t.prototype; return r.enable = function() { this._isEnabled = !0 }, r.disable = function() { this._isEnabled = !1 }, r.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, r.toggle = function(t) { if (this._isEnabled)
                            if (t) { var o = this.constructor.DATA_KEY,
                                    r = e(t.currentTarget).data(o);
                                r || (r = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(o, r)), r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r) } else { if (e(this.getTipElement()).hasClass(ie)) return void this._leave(null, this);
                                this._enter(null, this) } }, r.dispose = function() { clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, r.show = function() { var t = this; if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements"); var r = e.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { e(this.element).trigger(r); var l = s.findShadowRoot(this.element),
                                n = e.contains(null !== l ? l : this.element.ownerDocument.documentElement, this.element); if (r.isDefaultPrevented() || !n) return; var i = this.getTipElement(),
                                c = s.getUID(this.constructor.NAME);
                            i.setAttribute("id", c), this.element.setAttribute("aria-describedby", c), this.setContent(), this.config.animation && e(i).addClass(ne); var a = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                                p = this._getAttachment(a);
                            this.addAttachmentClass(p); var u = this._getContainer();
                            e(i).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(i).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new o(this.element, i, { placement: p, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ae }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(e) { e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e) }, onUpdate: function(e) { return t._handlePopperPlacementChange(e) } }), e(i).addClass(ie), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop); var d = function() { t.config.animation && t._fixTransition(); var o = t._hoverState;
                                t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), o === re && t._leave(null, t) }; if (e(this.tip).hasClass(ne)) { var f = s.getTransitionDurationFromElement(this.tip);
                                e(this.tip).one(s.TRANSITION_END, d).emulateTransitionEnd(f) } else d() } }, r.hide = function(t) { var o = this,
                            r = this.getTipElement(),
                            l = e.Event(this.constructor.Event.HIDE),
                            n = function() { o._hoverState !== oe && r.parentNode && r.parentNode.removeChild(r), o._cleanTipClass(), o.element.removeAttribute("aria-describedby"), e(o.element).trigger(o.constructor.Event.HIDDEN), null !== o._popper && o._popper.destroy(), t && t() }; if (e(this.element).trigger(l), !l.isDefaultPrevented()) { if (e(r).removeClass(ie), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[ue] = !1, this._activeTrigger[pe] = !1, this._activeTrigger[se] = !1, e(this.tip).hasClass(ne)) { var i = s.getTransitionDurationFromElement(r);
                                e(r).one(s.TRANSITION_END, n).emulateTransitionEnd(i) } else n();
                            this._hoverState = "" } }, r.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, r.isWithContent = function() { return Boolean(this.getTitle()) }, r.addAttachmentClass = function(t) { e(this.getTipElement()).addClass("bs-tooltip-" + t) }, r.getTipElement = function() { return this.tip = this.tip || e(this.config.template)[0], this.tip }, r.setContent = function() { var t = this.getTipElement();
                        this.setElementContent(e(t.querySelectorAll(ce)), this.getTitle()), e(t).removeClass(ne + " " + ie) }, r.setElementContent = function(t, o) { "object" != typeof o || !o.nodeType && !o.jquery ? this.config.html ? (this.config.sanitize && (o = $t(o, this.config.whiteList, this.config.sanitizeFn)), t.html(o)) : t.text(o) : this.config.html ? e(o).parent().is(t) || t.empty().append(o) : t.text(e(o).text()) }, r.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, r._getOffset = function() { var t = this,
                            e = {}; return "function" == typeof this.config.offset ? e.fn = function(e) { return e.offsets = i({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e } : e.offset = this.config.offset, e }, r._getContainer = function() { return !1 === this.config.container ? document.body : s.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container) }, r._getAttachment = function(t) { return te[t.toUpperCase()] }, r._setListeners = function() { var t = this;
                        this.config.trigger.split(" ").forEach((function(o) { if ("click" === o) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) { return t.toggle(e) }));
                            else if (o !== de) { var r = o === se ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    l = o === se ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(r, t.config.selector, (function(e) { return t._enter(e) })).on(l, t.config.selector, (function(e) { return t._leave(e) })) } })), e(this.element).closest(".modal").on("hide.bs.modal", (function() { t.element && t.hide() })), this.config.selector ? this.config = i({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, r._fixTitle = function() { var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, r._enter = function(t, o) { var r = this.constructor.DATA_KEY;
                        (o = o || e(t.currentTarget).data(r)) || (o = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(r, o)), t && (o._activeTrigger["focusin" === t.type ? pe : se] = !0), e(o.getTipElement()).hasClass(ie) || o._hoverState === oe ? o._hoverState = oe : (clearTimeout(o._timeout), o._hoverState = oe, o.config.delay && o.config.delay.show ? o._timeout = setTimeout((function() { o._hoverState === oe && o.show() }), o.config.delay.show) : o.show()) }, r._leave = function(t, o) { var r = this.constructor.DATA_KEY;
                        (o = o || e(t.currentTarget).data(r)) || (o = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(r, o)), t && (o._activeTrigger["focusout" === t.type ? pe : se] = !1), o._isWithActiveTrigger() || (clearTimeout(o._timeout), o._hoverState = re, o.config.delay && o.config.delay.hide ? o._timeout = setTimeout((function() { o._hoverState === re && o.hide() }), o.config.delay.hide) : o.hide()) }, r._isWithActiveTrigger = function() { for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1 }, r._getConfig = function(t) { var o = e(this.element).data(); return Object.keys(o).forEach((function(t) {-1 !== Zt.indexOf(t) && delete o[t] })), "number" == typeof(t = i({}, this.constructor.Default, o, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), s.typeCheckConfig(Qt, t, this.constructor.DefaultType), t.sanitize && (t.template = $t(t.template, t.whiteList, t.sanitizeFn)), t }, r._getDelegateConfig = function() { var t = {}; if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, r._cleanTipClass = function() { var t = e(this.getTipElement()),
                            o = t.attr("class").match(Gt);
                        null !== o && o.length && t.removeClass(o.join("")) }, r._handlePopperPlacementChange = function(t) { var e = t.instance;
                        this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, r._fixTransition = function() { var t = this.getTipElement(),
                            o = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(ne), this.config.animation = !1, this.hide(), this.show(), this.config.animation = o) }, t._jQueryInterface = function(o) { return this.each((function() { var r = e(this).data("bs.tooltip"),
                                l = "object" == typeof o && o; if ((r || !/dispose|hide/.test(o)) && (r || (r = new t(this, l), e(this).data("bs.tooltip", r)), "string" == typeof o)) { if (void 0 === r[o]) throw new TypeError('No method named "' + o + '"');
                                r[o]() } })) }, l(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return ee } }, { key: "NAME", get: function() { return Qt } }, { key: "DATA_KEY", get: function() { return "bs.tooltip" } }, { key: "Event", get: function() { return le } }, { key: "EVENT_KEY", get: function() { return ".bs.tooltip" } }, { key: "DefaultType", get: function() { return Jt } }]), t }();
            e.fn.tooltip = fe._jQueryInterface, e.fn.tooltip.Constructor = fe, e.fn.tooltip.noConflict = function() { return e.fn.tooltip = Xt, fe._jQueryInterface }; var ge = "popover",
                me = e.fn.popover,
                he = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                be = i({}, fe.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
                ve = i({}, fe.DefaultType, { content: "(string|element|function)" }),
                ye = "fade",
                xe = "show",
                we = ".popover-header",
                _e = ".popover-body",
                ke = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" },
                Ee = function(t) { var o, r;

                    function n() { return t.apply(this, arguments) || this }
                    r = t, (o = n).prototype = Object.create(r.prototype), o.prototype.constructor = o, o.__proto__ = r; var i = n.prototype; return i.isWithContent = function() { return this.getTitle() || this._getContent() }, i.addAttachmentClass = function(t) { e(this.getTipElement()).addClass("bs-popover-" + t) }, i.getTipElement = function() { return this.tip = this.tip || e(this.config.template)[0], this.tip }, i.setContent = function() { var t = e(this.getTipElement());
                        this.setElementContent(t.find(we), this.getTitle()); var o = this._getContent(); "function" == typeof o && (o = o.call(this.element)), this.setElementContent(t.find(_e), o), t.removeClass(ye + " " + xe) }, i._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, i._cleanTipClass = function() { var t = e(this.getTipElement()),
                            o = t.attr("class").match(he);
                        null !== o && o.length > 0 && t.removeClass(o.join("")) }, n._jQueryInterface = function(t) { return this.each((function() { var o = e(this).data("bs.popover"),
                                r = "object" == typeof t ? t : null; if ((o || !/dispose|hide/.test(t)) && (o || (o = new n(this, r), e(this).data("bs.popover", o)), "string" == typeof t)) { if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                                o[t]() } })) }, l(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return be } }, { key: "NAME", get: function() { return ge } }, { key: "DATA_KEY", get: function() { return "bs.popover" } }, { key: "Event", get: function() { return ke } }, { key: "EVENT_KEY", get: function() { return ".bs.popover" } }, { key: "DefaultType", get: function() { return ve } }]), n }(fe);
            e.fn.popover = Ee._jQueryInterface, e.fn.popover.Constructor = Ee, e.fn.popover.noConflict = function() { return e.fn.popover = me, Ee._jQueryInterface }; var Se = "scrollspy",
                Te = e.fn[Se],
                Ce = { offset: 10, method: "auto", target: "" },
                Oe = { offset: "number", method: "string", target: "(string|element)" },
                Ne = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
                Pe = "dropdown-item",
                je = "active",
                Ae = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
                De = "offset",
                Ie = "position",
                Me = function() {
                    function t(t, o) { var r = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(o), this._selector = this._config.target + " " + Ae.NAV_LINKS + "," + this._config.target + " " + Ae.LIST_ITEMS + "," + this._config.target + " " + Ae.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(Ne.SCROLL, (function(t) { return r._process(t) })), this.refresh(), this._process() } var o = t.prototype; return o.refresh = function() { var t = this,
                            o = this._scrollElement === this._scrollElement.window ? De : Ie,
                            r = "auto" === this._config.method ? o : this._config.method,
                            l = r === Ie ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(t) { var o, n = s.getSelectorFromElement(t); if (n && (o = document.querySelector(n)), o) { var i = o.getBoundingClientRect(); if (i.width || i.height) return [e(o)[r]().top + l, n] } return null })).filter((function(t) { return t })).sort((function(t, e) { return t[0] - e[0] })).forEach((function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) })) }, o.dispose = function() { e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, o._getConfig = function(t) { if ("string" != typeof(t = i({}, Ce, "object" == typeof t && t ? t : {})).target) { var o = e(t.target).attr("id");
                            o || (o = s.getUID(Se), e(t.target).attr("id", o)), t.target = "#" + o } return s.typeCheckConfig(Se, t, Oe), t }, o._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, o._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, o._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, o._process = function() { var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            o = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), t >= o) { var r = this._targets[this._targets.length - 1];
                            this._activeTarget !== r && this._activate(r) } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var l = this._offsets.length; l--;) this._activeTarget !== this._targets[l] && t >= this._offsets[l] && (void 0 === this._offsets[l + 1] || t < this._offsets[l + 1]) && this._activate(this._targets[l]) } }, o._activate = function(t) { this._activeTarget = t, this._clear(); var o = this._selector.split(",").map((function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' })),
                            r = e([].slice.call(document.querySelectorAll(o.join(","))));
                        r.hasClass(Pe) ? (r.closest(Ae.DROPDOWN).find(Ae.DROPDOWN_TOGGLE).addClass(je), r.addClass(je)) : (r.addClass(je), r.parents(Ae.NAV_LIST_GROUP).prev(Ae.NAV_LINKS + ", " + Ae.LIST_ITEMS).addClass(je), r.parents(Ae.NAV_LIST_GROUP).prev(Ae.NAV_ITEMS).children(Ae.NAV_LINKS).addClass(je)), e(this._scrollElement).trigger(Ne.ACTIVATE, { relatedTarget: t }) }, o._clear = function() {
                        [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) { return t.classList.contains(je) })).forEach((function(t) { return t.classList.remove(je) })) }, t._jQueryInterface = function(o) { return this.each((function() { var r = e(this).data("bs.scrollspy"); if (r || (r = new t(this, "object" == typeof o && o), e(this).data("bs.scrollspy", r)), "string" == typeof o) { if (void 0 === r[o]) throw new TypeError('No method named "' + o + '"');
                                r[o]() } })) }, l(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return Ce } }]), t }();
            e(window).on(Ne.LOAD_DATA_API, (function() { for (var t = [].slice.call(document.querySelectorAll(Ae.DATA_SPY)), o = t.length; o--;) { var r = e(t[o]);
                    Me._jQueryInterface.call(r, r.data()) } })), e.fn[Se] = Me._jQueryInterface, e.fn[Se].Constructor = Me, e.fn[Se].noConflict = function() { return e.fn[Se] = Te, Me._jQueryInterface }; var Re = e.fn.tab,
                Le = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
                ze = "dropdown-menu",
                Fe = "active",
                Be = "disabled",
                Ue = "fade",
                qe = "show",
                He = ".dropdown",
                We = ".nav, .list-group",
                Ve = ".active",
                Ye = "> li > .active",
                Ke = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                $e = ".dropdown-toggle",
                Qe = "> .dropdown-menu .active",
                Xe = function() {
                    function t(t) { this._element = t } var o = t.prototype; return o.show = function() { var t = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(Fe) || e(this._element).hasClass(Be))) { var o, r, l = e(this._element).closest(We)[0],
                                n = s.getSelectorFromElement(this._element); if (l) { var i = "UL" === l.nodeName || "OL" === l.nodeName ? Ye : Ve;
                                r = (r = e.makeArray(e(l).find(i)))[r.length - 1] } var c = e.Event(Le.HIDE, { relatedTarget: this._element }),
                                a = e.Event(Le.SHOW, { relatedTarget: r }); if (r && e(r).trigger(c), e(this._element).trigger(a), !a.isDefaultPrevented() && !c.isDefaultPrevented()) { n && (o = document.querySelector(n)), this._activate(this._element, l); var p = function() { var o = e.Event(Le.HIDDEN, { relatedTarget: t._element }),
                                        l = e.Event(Le.SHOWN, { relatedTarget: r });
                                    e(r).trigger(o), e(t._element).trigger(l) };
                                o ? this._activate(o, o.parentNode, p) : p() } } }, o.dispose = function() { e.removeData(this._element, "bs.tab"), this._element = null }, o._activate = function(t, o, r) { var l = this,
                            n = (!o || "UL" !== o.nodeName && "OL" !== o.nodeName ? e(o).children(Ve) : e(o).find(Ye))[0],
                            i = r && n && e(n).hasClass(Ue),
                            c = function() { return l._transitionComplete(t, n, r) }; if (n && i) { var a = s.getTransitionDurationFromElement(n);
                            e(n).removeClass(qe).one(s.TRANSITION_END, c).emulateTransitionEnd(a) } else c() }, o._transitionComplete = function(t, o, r) { if (o) { e(o).removeClass(Fe); var l = e(o.parentNode).find(Qe)[0];
                            l && e(l).removeClass(Fe), "tab" === o.getAttribute("role") && o.setAttribute("aria-selected", !1) } if (e(t).addClass(Fe), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), s.reflow(t), t.classList.contains(Ue) && t.classList.add(qe), t.parentNode && e(t.parentNode).hasClass(ze)) { var n = e(t).closest(He)[0]; if (n) { var i = [].slice.call(n.querySelectorAll($e));
                                e(i).addClass(Fe) }
                            t.setAttribute("aria-expanded", !0) }
                        r && r() }, t._jQueryInterface = function(o) { return this.each((function() { var r = e(this),
                                l = r.data("bs.tab"); if (l || (l = new t(this), r.data("bs.tab", l)), "string" == typeof o) { if (void 0 === l[o]) throw new TypeError('No method named "' + o + '"');
                                l[o]() } })) }, l(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), t }();
            e(document).on(Le.CLICK_DATA_API, Ke, (function(t) { t.preventDefault(), Xe._jQueryInterface.call(e(this), "show") })), e.fn.tab = Xe._jQueryInterface, e.fn.tab.Constructor = Xe, e.fn.tab.noConflict = function() { return e.fn.tab = Re, Xe._jQueryInterface }; var Ge = e.fn.toast,
                Ze = { CLICK_DISMISS: "click.dismiss.bs.toast", HIDE: "hide.bs.toast", HIDDEN: "hidden.bs.toast", SHOW: "show.bs.toast", SHOWN: "shown.bs.toast" },
                Je = "fade",
                to = "hide",
                eo = "show",
                oo = "showing",
                ro = { animation: "boolean", autohide: "boolean", delay: "number" },
                lo = { animation: !0, autohide: !0, delay: 500 },
                no = '[data-dismiss="toast"]',
                io = function() {
                    function t(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() } var o = t.prototype; return o.show = function() { var t = this;
                        e(this._element).trigger(Ze.SHOW), this._config.animation && this._element.classList.add(Je); var o = function() { t._element.classList.remove(oo), t._element.classList.add(eo), e(t._element).trigger(Ze.SHOWN), t._config.autohide && t.hide() }; if (this._element.classList.remove(to), this._element.classList.add(oo), this._config.animation) { var r = s.getTransitionDurationFromElement(this._element);
                            e(this._element).one(s.TRANSITION_END, o).emulateTransitionEnd(r) } else o() }, o.hide = function(t) { var o = this;
                        this._element.classList.contains(eo) && (e(this._element).trigger(Ze.HIDE), t ? this._close() : this._timeout = setTimeout((function() { o._close() }), this._config.delay)) }, o.dispose = function() { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(eo) && this._element.classList.remove(eo), e(this._element).off(Ze.CLICK_DISMISS), e.removeData(this._element, "bs.toast"), this._element = null, this._config = null }, o._getConfig = function(t) { return t = i({}, lo, e(this._element).data(), "object" == typeof t && t ? t : {}), s.typeCheckConfig("toast", t, this.constructor.DefaultType), t }, o._setListeners = function() { var t = this;
                        e(this._element).on(Ze.CLICK_DISMISS, no, (function() { return t.hide(!0) })) }, o._close = function() { var t = this,
                            o = function() { t._element.classList.add(to), e(t._element).trigger(Ze.HIDDEN) }; if (this._element.classList.remove(eo), this._config.animation) { var r = s.getTransitionDurationFromElement(this._element);
                            e(this._element).one(s.TRANSITION_END, o).emulateTransitionEnd(r) } else o() }, t._jQueryInterface = function(o) { return this.each((function() { var r = e(this),
                                l = r.data("bs.toast"); if (l || (l = new t(this, "object" == typeof o && o), r.data("bs.toast", l)), "string" == typeof o) { if (void 0 === l[o]) throw new TypeError('No method named "' + o + '"');
                                l[o](this) } })) }, l(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "DefaultType", get: function() { return ro } }, { key: "Default", get: function() { return lo } }]), t }();
            e.fn.toast = io._jQueryInterface, e.fn.toast.Constructor = io, e.fn.toast.noConflict = function() { return e.fn.toast = Ge, io._jQueryInterface },
                function() { if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = e.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(), t.Util = s, t.Alert = m, t.Button = T, t.Carousel = K, t.Collapse = it, t.Dropdown = jt, t.Modal = Ht, t.Popover = Ee, t.Scrollspy = Me, t.Tab = Xe, t.Toast = io, t.Tooltip = fe, Object.defineProperty(t, "__esModule", { value: !0 }) }(e, o(115), o(116)) }, function(t, e, o) { var r;! function(e, o) { "use strict"; "object" == typeof t.exports ? t.exports = e.document ? o(e, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return o(t) } : o(e) }("undefined" != typeof window ? window : this, (function(o, l) { "use strict"; var n = [],
                i = o.document,
                c = Object.getPrototypeOf,
                a = n.slice,
                s = n.concat,
                p = n.push,
                u = n.indexOf,
                d = {},
                f = d.toString,
                g = d.hasOwnProperty,
                m = g.toString,
                h = m.call(Object),
                b = {},
                v = function(t) { return "function" == typeof t && "number" != typeof t.nodeType },
                y = function(t) { return null != t && t === t.window },
                x = { type: !0, src: !0, nonce: !0, noModule: !0 };

            function w(t, e, o) { var r, l, n = (o = o || i).createElement("script"); if (n.text = t, e)
                    for (r in x)(l = e[r] || e.getAttribute && e.getAttribute(r)) && n.setAttribute(r, l);
                o.head.appendChild(n).parentNode.removeChild(n) }

            function _(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[f.call(t)] || "object" : typeof t } var k = function(t, e) { return new k.fn.init(t, e) },
                E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function S(t) { var e = !!t && "length" in t && t.length,
                    o = _(t); return !v(t) && !y(t) && ("array" === o || 0 === e || "number" == typeof e && e > 0 && e - 1 in t) }
            k.fn = k.prototype = { jquery: "3.4.1", constructor: k, length: 0, toArray: function() { return a.call(this) }, get: function(t) { return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t] }, pushStack: function(t) { var e = k.merge(this.constructor(), t); return e.prevObject = this, e }, each: function(t) { return k.each(this, t) }, map: function(t) { return this.pushStack(k.map(this, (function(e, o) { return t.call(e, o, e) }))) }, slice: function() { return this.pushStack(a.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(t) { var e = this.length,
                        o = +t + (t < 0 ? e : 0); return this.pushStack(o >= 0 && o < e ? [this[o]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: p, sort: n.sort, splice: n.splice }, k.extend = k.fn.extend = function() { var t, e, o, r, l, n, i = arguments[0] || {},
                    c = 1,
                    a = arguments.length,
                    s = !1; for ("boolean" == typeof i && (s = i, i = arguments[c] || {}, c++), "object" == typeof i || v(i) || (i = {}), c === a && (i = this, c--); c < a; c++)
                    if (null != (t = arguments[c]))
                        for (e in t) r = t[e], "__proto__" !== e && i !== r && (s && r && (k.isPlainObject(r) || (l = Array.isArray(r))) ? (o = i[e], n = l && !Array.isArray(o) ? [] : l || k.isPlainObject(o) ? o : {}, l = !1, i[e] = k.extend(s, n, r)) : void 0 !== r && (i[e] = r));
                return i }, k.extend({ expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(t) { throw new Error(t) }, noop: function() {}, isPlainObject: function(t) { var e, o; return !(!t || "[object Object]" !== f.call(t)) && (!(e = c(t)) || "function" == typeof(o = g.call(e, "constructor") && e.constructor) && m.call(o) === h) }, isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 }, globalEval: function(t, e) { w(t, { nonce: e && e.nonce }) }, each: function(t, e) { var o, r = 0; if (S(t))
                        for (o = t.length; r < o && !1 !== e.call(t[r], r, t[r]); r++);
                    else
                        for (r in t)
                            if (!1 === e.call(t[r], r, t[r])) break; return t }, trim: function(t) { return null == t ? "" : (t + "").replace(E, "") }, makeArray: function(t, e) { var o = e || []; return null != t && (S(Object(t)) ? k.merge(o, "string" == typeof t ? [t] : t) : p.call(o, t)), o }, inArray: function(t, e, o) { return null == e ? -1 : u.call(e, t, o) }, merge: function(t, e) { for (var o = +e.length, r = 0, l = t.length; r < o; r++) t[l++] = e[r]; return t.length = l, t }, grep: function(t, e, o) { for (var r = [], l = 0, n = t.length, i = !o; l < n; l++) !e(t[l], l) !== i && r.push(t[l]); return r }, map: function(t, e, o) { var r, l, n = 0,
                        i = []; if (S(t))
                        for (r = t.length; n < r; n++) null != (l = e(t[n], n, o)) && i.push(l);
                    else
                        for (n in t) null != (l = e(t[n], n, o)) && i.push(l); return s.apply([], i) }, guid: 1, support: b }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = n[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) { d["[object " + e + "]"] = e.toLowerCase() })); var T = function(t) { var e, o, r, l, n, i, c, a, s, p, u, d, f, g, m, h, b, v, y, x = "sizzle" + 1 * new Date,
                    w = t.document,
                    _ = 0,
                    k = 0,
                    E = at(),
                    S = at(),
                    T = at(),
                    C = at(),
                    O = function(t, e) { return t === e && (u = !0), 0 },
                    N = {}.hasOwnProperty,
                    P = [],
                    j = P.pop,
                    A = P.push,
                    D = P.push,
                    I = P.slice,
                    M = function(t, e) { for (var o = 0, r = t.length; o < r; o++)
                            if (t[o] === e) return o;
                        return -1 },
                    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    L = "[\\x20\\t\\r\\n\\f]",
                    z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    F = "\\[" + L + "*(" + z + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + L + "*\\]",
                    B = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                    U = new RegExp(L + "+", "g"),
                    q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                    H = new RegExp("^" + L + "*," + L + "*"),
                    W = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                    V = new RegExp(L + "|>"),
                    Y = new RegExp(B),
                    K = new RegExp("^" + z + "$"),
                    $ = { ID: new RegExp("^#(" + z + ")"), CLASS: new RegExp("^\\.(" + z + ")"), TAG: new RegExp("^(" + z + "|[*])"), ATTR: new RegExp("^" + F), PSEUDO: new RegExp("^" + B), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
                    Q = /HTML$/i,
                    X = /^(?:input|select|textarea|button)$/i,
                    G = /^h\d$/i,
                    Z = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    tt = /[+~]/,
                    et = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                    ot = function(t, e, o) { var r = "0x" + e - 65536; return r != r || o ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
                    rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    lt = function(t, e) { return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t },
                    nt = function() { d() },
                    it = xt((function(t) { return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase() }), { dir: "parentNode", next: "legend" }); try { D.apply(P = I.call(w.childNodes), w.childNodes), P[w.childNodes.length].nodeType } catch (t) { D = { apply: P.length ? function(t, e) { A.apply(t, I.call(e)) } : function(t, e) { for (var o = t.length, r = 0; t[o++] = e[r++];);
                            t.length = o - 1 } } }

                function ct(t, e, r, l) { var n, c, s, p, u, g, b, v = e && e.ownerDocument,
                        _ = e ? e.nodeType : 9; if (r = r || [], "string" != typeof t || !t || 1 !== _ && 9 !== _ && 11 !== _) return r; if (!l && ((e ? e.ownerDocument || e : w) !== f && d(e), e = e || f, m)) { if (11 !== _ && (u = J.exec(t)))
                            if (n = u[1]) { if (9 === _) { if (!(s = e.getElementById(n))) return r; if (s.id === n) return r.push(s), r } else if (v && (s = v.getElementById(n)) && y(e, s) && s.id === n) return r.push(s), r } else { if (u[2]) return D.apply(r, e.getElementsByTagName(t)), r; if ((n = u[3]) && o.getElementsByClassName && e.getElementsByClassName) return D.apply(r, e.getElementsByClassName(n)), r }
                        if (o.qsa && !C[t + " "] && (!h || !h.test(t)) && (1 !== _ || "object" !== e.nodeName.toLowerCase())) { if (b = t, v = e, 1 === _ && V.test(t)) { for ((p = e.getAttribute("id")) ? p = p.replace(rt, lt) : e.setAttribute("id", p = x), c = (g = i(t)).length; c--;) g[c] = "#" + p + " " + yt(g[c]);
                                b = g.join(","), v = tt.test(t) && bt(e.parentNode) || e } try { return D.apply(r, v.querySelectorAll(b)), r } catch (e) { C(t, !0) } finally { p === x && e.removeAttribute("id") } } } return a(t.replace(q, "$1"), e, r, l) }

                function at() { var t = []; return function e(o, l) { return t.push(o + " ") > r.cacheLength && delete e[t.shift()], e[o + " "] = l } }

                function st(t) { return t[x] = !0, t }

                function pt(t) { var e = f.createElement("fieldset"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

                function ut(t, e) { for (var o = t.split("|"), l = o.length; l--;) r.attrHandle[o[l]] = e }

                function dt(t, e) { var o = e && t,
                        r = o && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex; if (r) return r; if (o)
                        for (; o = o.nextSibling;)
                            if (o === e) return -1;
                    return t ? 1 : -1 }

                function ft(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

                function gt(t) { return function(e) { var o = e.nodeName.toLowerCase(); return ("input" === o || "button" === o) && e.type === t } }

                function mt(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && it(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

                function ht(t) { return st((function(e) { return e = +e, st((function(o, r) { for (var l, n = t([], o.length, e), i = n.length; i--;) o[l = n[i]] && (o[l] = !(r[l] = o[l])) })) })) }

                function bt(t) { return t && void 0 !== t.getElementsByTagName && t } for (e in o = ct.support = {}, n = ct.isXML = function(t) { var e = t.namespaceURI,
                            o = (t.ownerDocument || t).documentElement; return !Q.test(e || o && o.nodeName || "HTML") }, d = ct.setDocument = function(t) { var e, l, i = t ? t.ownerDocument || t : w; return i !== f && 9 === i.nodeType && i.documentElement ? (g = (f = i).documentElement, m = !n(f), w !== f && (l = f.defaultView) && l.top !== l && (l.addEventListener ? l.addEventListener("unload", nt, !1) : l.attachEvent && l.attachEvent("onunload", nt)), o.attributes = pt((function(t) { return t.className = "i", !t.getAttribute("className") })), o.getElementsByTagName = pt((function(t) { return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length })), o.getElementsByClassName = Z.test(f.getElementsByClassName), o.getById = pt((function(t) { return g.appendChild(t).id = x, !f.getElementsByName || !f.getElementsByName(x).length })), o.getById ? (r.filter.ID = function(t) { var e = t.replace(et, ot); return function(t) { return t.getAttribute("id") === e } }, r.find.ID = function(t, e) { if (void 0 !== e.getElementById && m) { var o = e.getElementById(t); return o ? [o] : [] } }) : (r.filter.ID = function(t) { var e = t.replace(et, ot); return function(t) { var o = void 0 !== t.getAttributeNode && t.getAttributeNode("id"); return o && o.value === e } }, r.find.ID = function(t, e) { if (void 0 !== e.getElementById && m) { var o, r, l, n = e.getElementById(t); if (n) { if ((o = n.getAttributeNode("id")) && o.value === t) return [n]; for (l = e.getElementsByName(t), r = 0; n = l[r++];)
                                        if ((o = n.getAttributeNode("id")) && o.value === t) return [n] } return [] } }), r.find.TAG = o.getElementsByTagName ? function(t, e) { return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : o.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) { var o, r = [],
                                l = 0,
                                n = e.getElementsByTagName(t); if ("*" === t) { for (; o = n[l++];) 1 === o.nodeType && r.push(o); return r } return n }, r.find.CLASS = o.getElementsByClassName && function(t, e) { if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t) }, b = [], h = [], (o.qsa = Z.test(f.querySelectorAll)) && (pt((function(t) { g.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && h.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || h.push("\\[" + L + "*(?:value|" + R + ")"), t.querySelectorAll("[id~=" + x + "-]").length || h.push("~="), t.querySelectorAll(":checked").length || h.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || h.push(".#.+[+~]") })), pt((function(t) { t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var e = f.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && h.push("name" + L + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && h.push(":enabled", ":disabled"), g.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && h.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), h.push(",.*:") }))), (o.matchesSelector = Z.test(v = g.matches || g.webkitMatchesSelector || g.mozMatchesSelector || g.oMatchesSelector || g.msMatchesSelector)) && pt((function(t) { o.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), b.push("!=", B) })), h = h.length && new RegExp(h.join("|")), b = b.length && new RegExp(b.join("|")), e = Z.test(g.compareDocumentPosition), y = e || Z.test(g.contains) ? function(t, e) { var o = 9 === t.nodeType ? t.documentElement : t,
                                r = e && e.parentNode; return t === r || !(!r || 1 !== r.nodeType || !(o.contains ? o.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r))) } : function(t, e) { if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1 }, O = e ? function(t, e) { if (t === e) return u = !0, 0; var r = !t.compareDocumentPosition - !e.compareDocumentPosition; return r || (1 & (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !o.sortDetached && e.compareDocumentPosition(t) === r ? t === f || t.ownerDocument === w && y(w, t) ? -1 : e === f || e.ownerDocument === w && y(w, e) ? 1 : p ? M(p, t) - M(p, e) : 0 : 4 & r ? -1 : 1) } : function(t, e) { if (t === e) return u = !0, 0; var o, r = 0,
                                l = t.parentNode,
                                n = e.parentNode,
                                i = [t],
                                c = [e]; if (!l || !n) return t === f ? -1 : e === f ? 1 : l ? -1 : n ? 1 : p ? M(p, t) - M(p, e) : 0; if (l === n) return dt(t, e); for (o = t; o = o.parentNode;) i.unshift(o); for (o = e; o = o.parentNode;) c.unshift(o); for (; i[r] === c[r];) r++; return r ? dt(i[r], c[r]) : i[r] === w ? -1 : c[r] === w ? 1 : 0 }, f) : f }, ct.matches = function(t, e) { return ct(t, null, null, e) }, ct.matchesSelector = function(t, e) { if ((t.ownerDocument || t) !== f && d(t), o.matchesSelector && m && !C[e + " "] && (!b || !b.test(e)) && (!h || !h.test(e))) try { var r = v.call(t, e); if (r || o.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r } catch (t) { C(e, !0) }
                        return ct(e, f, null, [t]).length > 0 }, ct.contains = function(t, e) { return (t.ownerDocument || t) !== f && d(t), y(t, e) }, ct.attr = function(t, e) {
                        (t.ownerDocument || t) !== f && d(t); var l = r.attrHandle[e.toLowerCase()],
                            n = l && N.call(r.attrHandle, e.toLowerCase()) ? l(t, e, !m) : void 0; return void 0 !== n ? n : o.attributes || !m ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null }, ct.escape = function(t) { return (t + "").replace(rt, lt) }, ct.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, ct.uniqueSort = function(t) { var e, r = [],
                            l = 0,
                            n = 0; if (u = !o.detectDuplicates, p = !o.sortStable && t.slice(0), t.sort(O), u) { for (; e = t[n++];) e === t[n] && (l = r.push(n)); for (; l--;) t.splice(r[l], 1) } return p = null, t }, l = ct.getText = function(t) { var e, o = "",
                            r = 0,
                            n = t.nodeType; if (n) { if (1 === n || 9 === n || 11 === n) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) o += l(t) } else if (3 === n || 4 === n) return t.nodeValue } else
                            for (; e = t[r++];) o += l(e); return o }, (r = ct.selectors = { cacheLength: 50, createPseudo: st, match: $, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(t) { return t[1] = t[1].replace(et, ot), t[3] = (t[3] || t[4] || t[5] || "").replace(et, ot), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ct.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ct.error(t[0]), t }, PSEUDO: function(t) { var e, o = !t[6] && t[2]; return $.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : o && Y.test(o) && (e = i(o, !0)) && (e = o.indexOf(")", o.length - e) - o.length) && (t[0] = t[0].slice(0, e), t[2] = o.slice(0, e)), t.slice(0, 3)) } }, filter: { TAG: function(t) { var e = t.replace(et, ot).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } }, CLASS: function(t) { var e = E[t + " "]; return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && E(t, (function(t) { return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "") })) }, ATTR: function(t, e, o) { return function(r) { var l = ct.attr(r, t); return null == l ? "!=" === e : !e || (l += "", "=" === e ? l === o : "!=" === e ? l !== o : "^=" === e ? o && 0 === l.indexOf(o) : "*=" === e ? o && l.indexOf(o) > -1 : "$=" === e ? o && l.slice(-o.length) === o : "~=" === e ? (" " + l.replace(U, " ") + " ").indexOf(o) > -1 : "|=" === e && (l === o || l.slice(0, o.length + 1) === o + "-")) } }, CHILD: function(t, e, o, r, l) { var n = "nth" !== t.slice(0, 3),
                                    i = "last" !== t.slice(-4),
                                    c = "of-type" === e; return 1 === r && 0 === l ? function(t) { return !!t.parentNode } : function(e, o, a) { var s, p, u, d, f, g, m = n !== i ? "nextSibling" : "previousSibling",
                                        h = e.parentNode,
                                        b = c && e.nodeName.toLowerCase(),
                                        v = !a && !c,
                                        y = !1; if (h) { if (n) { for (; m;) { for (d = e; d = d[m];)
                                                    if (c ? d.nodeName.toLowerCase() === b : 1 === d.nodeType) return !1;
                                                g = m = "only" === t && !g && "nextSibling" } return !0 } if (g = [i ? h.firstChild : h.lastChild], i && v) { for (y = (f = (s = (p = (u = (d = h)[x] || (d[x] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === _ && s[1]) && s[2], d = f && h.childNodes[f]; d = ++f && d && d[m] || (y = f = 0) || g.pop();)
                                                if (1 === d.nodeType && ++y && d === e) { p[t] = [_, f, y]; break } } else if (v && (y = f = (s = (p = (u = (d = e)[x] || (d[x] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === _ && s[1]), !1 === y)
                                            for (;
                                                (d = ++f && d && d[m] || (y = f = 0) || g.pop()) && ((c ? d.nodeName.toLowerCase() !== b : 1 !== d.nodeType) || !++y || (v && ((p = (u = d[x] || (d[x] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [_, y]), d !== e));); return (y -= l) === r || y % r == 0 && y / r >= 0 } } }, PSEUDO: function(t, e) { var o, l = r.pseudos[t] || r.setFilters[t.toLowerCase()] || ct.error("unsupported pseudo: " + t); return l[x] ? l(e) : l.length > 1 ? (o = [t, t, "", e], r.setFilters.hasOwnProperty(t.toLowerCase()) ? st((function(t, o) { for (var r, n = l(t, e), i = n.length; i--;) t[r = M(t, n[i])] = !(o[r] = n[i]) })) : function(t) { return l(t, 0, o) }) : l } }, pseudos: { not: st((function(t) { var e = [],
                                    o = [],
                                    r = c(t.replace(q, "$1")); return r[x] ? st((function(t, e, o, l) { for (var n, i = r(t, null, l, []), c = t.length; c--;)(n = i[c]) && (t[c] = !(e[c] = n)) })) : function(t, l, n) { return e[0] = t, r(e, null, n, o), e[0] = null, !o.pop() } })), has: st((function(t) { return function(e) { return ct(t, e).length > 0 } })), contains: st((function(t) { return t = t.replace(et, ot),
                                    function(e) { return (e.textContent || l(e)).indexOf(t) > -1 } })), lang: st((function(t) { return K.test(t || "") || ct.error("unsupported lang: " + t), t = t.replace(et, ot).toLowerCase(),
                                    function(e) { var o;
                                        do { if (o = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (o = o.toLowerCase()) === t || 0 === o.indexOf(t + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } })), target: function(e) { var o = t.location && t.location.hash; return o && o.slice(1) === e.id }, root: function(t) { return t === g }, focus: function(t) { return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) }, enabled: mt(!1), disabled: mt(!0), checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected }, selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected }, empty: function(t) { for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0 }, parent: function(t) { return !r.pseudos.empty(t) }, header: function(t) { return G.test(t.nodeName) }, input: function(t) { return X.test(t.nodeName) }, button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e }, text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) }, first: ht((function() { return [0] })), last: ht((function(t, e) { return [e - 1] })), eq: ht((function(t, e, o) { return [o < 0 ? o + e : o] })), even: ht((function(t, e) { for (var o = 0; o < e; o += 2) t.push(o); return t })), odd: ht((function(t, e) { for (var o = 1; o < e; o += 2) t.push(o); return t })), lt: ht((function(t, e, o) { for (var r = o < 0 ? o + e : o > e ? e : o; --r >= 0;) t.push(r); return t })), gt: ht((function(t, e, o) { for (var r = o < 0 ? o + e : o; ++r < e;) t.push(r); return t })) } }).pseudos.nth = r.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[e] = ft(e); for (e in { submit: !0, reset: !0 }) r.pseudos[e] = gt(e);

                function vt() {}

                function yt(t) { for (var e = 0, o = t.length, r = ""; e < o; e++) r += t[e].value; return r }

                function xt(t, e, o) { var r = e.dir,
                        l = e.next,
                        n = l || r,
                        i = o && "parentNode" === n,
                        c = k++; return e.first ? function(e, o, l) { for (; e = e[r];)
                            if (1 === e.nodeType || i) return t(e, o, l);
                        return !1 } : function(e, o, a) { var s, p, u, d = [_, c]; if (a) { for (; e = e[r];)
                                if ((1 === e.nodeType || i) && t(e, o, a)) return !0 } else
                            for (; e = e[r];)
                                if (1 === e.nodeType || i)
                                    if (p = (u = e[x] || (e[x] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[r] || e;
                                    else { if ((s = p[n]) && s[0] === _ && s[1] === c) return d[2] = s[2]; if (p[n] = d, d[2] = t(e, o, a)) return !0 } return !1 } }

                function wt(t) { return t.length > 1 ? function(e, o, r) { for (var l = t.length; l--;)
                            if (!t[l](e, o, r)) return !1;
                        return !0 } : t[0] }

                function _t(t, e, o, r, l) { for (var n, i = [], c = 0, a = t.length, s = null != e; c < a; c++)(n = t[c]) && (o && !o(n, r, l) || (i.push(n), s && e.push(c))); return i }

                function kt(t, e, o, r, l, n) { return r && !r[x] && (r = kt(r)), l && !l[x] && (l = kt(l, n)), st((function(n, i, c, a) { var s, p, u, d = [],
                            f = [],
                            g = i.length,
                            m = n || function(t, e, o) { for (var r = 0, l = e.length; r < l; r++) ct(t, e[r], o); return o }(e || "*", c.nodeType ? [c] : c, []),
                            h = !t || !n && e ? m : _t(m, d, t, c, a),
                            b = o ? l || (n ? t : g || r) ? [] : i : h; if (o && o(h, b, c, a), r)
                            for (s = _t(b, f), r(s, [], c, a), p = s.length; p--;)(u = s[p]) && (b[f[p]] = !(h[f[p]] = u)); if (n) { if (l || t) { if (l) { for (s = [], p = b.length; p--;)(u = b[p]) && s.push(h[p] = u);
                                    l(null, b = [], s, a) } for (p = b.length; p--;)(u = b[p]) && (s = l ? M(n, u) : d[p]) > -1 && (n[s] = !(i[s] = u)) } } else b = _t(b === i ? b.splice(g, b.length) : b), l ? l(null, i, b, a) : D.apply(i, b) })) }

                function Et(t) { for (var e, o, l, n = t.length, i = r.relative[t[0].type], c = i || r.relative[" "], a = i ? 1 : 0, p = xt((function(t) { return t === e }), c, !0), u = xt((function(t) { return M(e, t) > -1 }), c, !0), d = [function(t, o, r) { var l = !i && (r || o !== s) || ((e = o).nodeType ? p(t, o, r) : u(t, o, r)); return e = null, l }]; a < n; a++)
                        if (o = r.relative[t[a].type]) d = [xt(wt(d), o)];
                        else { if ((o = r.filter[t[a].type].apply(null, t[a].matches))[x]) { for (l = ++a; l < n && !r.relative[t[l].type]; l++); return kt(a > 1 && wt(d), a > 1 && yt(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(q, "$1"), o, a < l && Et(t.slice(a, l)), l < n && Et(t = t.slice(l)), l < n && yt(t)) }
                            d.push(o) }
                    return wt(d) } return vt.prototype = r.filters = r.pseudos, r.setFilters = new vt, i = ct.tokenize = function(t, e) { var o, l, n, i, c, a, s, p = S[t + " "]; if (p) return e ? 0 : p.slice(0); for (c = t, a = [], s = r.preFilter; c;) { for (i in o && !(l = H.exec(c)) || (l && (c = c.slice(l[0].length) || c), a.push(n = [])), o = !1, (l = W.exec(c)) && (o = l.shift(), n.push({ value: o, type: l[0].replace(q, " ") }), c = c.slice(o.length)), r.filter) !(l = $[i].exec(c)) || s[i] && !(l = s[i](l)) || (o = l.shift(), n.push({ value: o, type: i, matches: l }), c = c.slice(o.length)); if (!o) break } return e ? c.length : c ? ct.error(t) : S(t, a).slice(0) }, c = ct.compile = function(t, e) { var o, l = [],
                        n = [],
                        c = T[t + " "]; if (!c) { for (e || (e = i(t)), o = e.length; o--;)(c = Et(e[o]))[x] ? l.push(c) : n.push(c);
                        (c = T(t, function(t, e) { var o = e.length > 0,
                                l = t.length > 0,
                                n = function(n, i, c, a, p) { var u, g, h, b = 0,
                                        v = "0",
                                        y = n && [],
                                        x = [],
                                        w = s,
                                        k = n || l && r.find.TAG("*", p),
                                        E = _ += null == w ? 1 : Math.random() || .1,
                                        S = k.length; for (p && (s = i === f || i || p); v !== S && null != (u = k[v]); v++) { if (l && u) { for (g = 0, i || u.ownerDocument === f || (d(u), c = !m); h = t[g++];)
                                                if (h(u, i || f, c)) { a.push(u); break }
                                            p && (_ = E) }
                                        o && ((u = !h && u) && b--, n && y.push(u)) } if (b += v, o && v !== b) { for (g = 0; h = e[g++];) h(y, x, i, c); if (n) { if (b > 0)
                                                for (; v--;) y[v] || x[v] || (x[v] = j.call(a));
                                            x = _t(x) }
                                        D.apply(a, x), p && !n && x.length > 0 && b + e.length > 1 && ct.uniqueSort(a) } return p && (_ = E, s = w), y }; return o ? st(n) : n }(n, l))).selector = t } return c }, a = ct.select = function(t, e, o, l) { var n, a, s, p, u, d = "function" == typeof t && t,
                        f = !l && i(t = d.selector || t); if (o = o || [], 1 === f.length) { if ((a = f[0] = f[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === e.nodeType && m && r.relative[a[1].type]) { if (!(e = (r.find.ID(s.matches[0].replace(et, ot), e) || [])[0])) return o;
                            d && (e = e.parentNode), t = t.slice(a.shift().value.length) } for (n = $.needsContext.test(t) ? 0 : a.length; n-- && (s = a[n], !r.relative[p = s.type]);)
                            if ((u = r.find[p]) && (l = u(s.matches[0].replace(et, ot), tt.test(a[0].type) && bt(e.parentNode) || e))) { if (a.splice(n, 1), !(t = l.length && yt(a))) return D.apply(o, l), o; break } } return (d || c(t, f))(l, e, !m, o, !e || tt.test(t) && bt(e.parentNode) || e), o }, o.sortStable = x.split("").sort(O).join("") === x, o.detectDuplicates = !!u, d(), o.sortDetached = pt((function(t) { return 1 & t.compareDocumentPosition(f.createElement("fieldset")) })), pt((function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") })) || ut("type|href|height|width", (function(t, e, o) { if (!o) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) })), o.attributes && pt((function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") })) || ut("value", (function(t, e, o) { if (!o && "input" === t.nodeName.toLowerCase()) return t.defaultValue })), pt((function(t) { return null == t.getAttribute("disabled") })) || ut(R, (function(t, e, o) { var r; if (!o) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null })), ct }(o);
            k.find = T, k.expr = T.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = T.uniqueSort, k.text = T.getText, k.isXMLDoc = T.isXML, k.contains = T.contains, k.escapeSelector = T.escape; var C = function(t, e, o) { for (var r = [], l = void 0 !== o;
                        (t = t[e]) && 9 !== t.nodeType;)
                        if (1 === t.nodeType) { if (l && k(t).is(o)) break;
                            r.push(t) }
                    return r },
                O = function(t, e) { for (var o = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && o.push(t); return o },
                N = k.expr.match.needsContext;

            function P(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() } var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function A(t, e, o) { return v(e) ? k.grep(t, (function(t, r) { return !!e.call(t, r, t) !== o })) : e.nodeType ? k.grep(t, (function(t) { return t === e !== o })) : "string" != typeof e ? k.grep(t, (function(t) { return u.call(e, t) > -1 !== o })) : k.filter(e, t, o) }
            k.filter = function(t, e, o) { var r = e[0]; return o && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? k.find.matchesSelector(r, t) ? [r] : [] : k.find.matches(t, k.grep(e, (function(t) { return 1 === t.nodeType }))) }, k.fn.extend({ find: function(t) { var e, o, r = this.length,
                        l = this; if ("string" != typeof t) return this.pushStack(k(t).filter((function() { for (e = 0; e < r; e++)
                            if (k.contains(l[e], this)) return !0 }))); for (o = this.pushStack([]), e = 0; e < r; e++) k.find(t, l[e], o); return r > 1 ? k.uniqueSort(o) : o }, filter: function(t) { return this.pushStack(A(this, t || [], !1)) }, not: function(t) { return this.pushStack(A(this, t || [], !0)) }, is: function(t) { return !!A(this, "string" == typeof t && N.test(t) ? k(t) : t || [], !1).length } }); var D, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (k.fn.init = function(t, e, o) { var r, l; if (!t) return this; if (o = o || D, "string" == typeof t) { if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || o).find(t) : this.constructor(e).find(t); if (r[1]) { if (e = e instanceof k ? e[0] : e, k.merge(this, k.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), j.test(r[1]) && k.isPlainObject(e))
                            for (r in e) v(this[r]) ? this[r](e[r]) : this.attr(r, e[r]); return this } return (l = i.getElementById(r[2])) && (this[0] = l, this.length = 1), this } return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== o.ready ? o.ready(t) : t(k) : k.makeArray(t, this) }).prototype = k.fn, D = k(i); var M = /^(?:parents|prev(?:Until|All))/,
                R = { children: !0, contents: !0, next: !0, prev: !0 };

            function L(t, e) { for (;
                    (t = t[e]) && 1 !== t.nodeType;); return t }
            k.fn.extend({ has: function(t) { var e = k(t, this),
                        o = e.length; return this.filter((function() { for (var t = 0; t < o; t++)
                            if (k.contains(this, e[t])) return !0 })) }, closest: function(t, e) { var o, r = 0,
                        l = this.length,
                        n = [],
                        i = "string" != typeof t && k(t); if (!N.test(t))
                        for (; r < l; r++)
                            for (o = this[r]; o && o !== e; o = o.parentNode)
                                if (o.nodeType < 11 && (i ? i.index(o) > -1 : 1 === o.nodeType && k.find.matchesSelector(o, t))) { n.push(o); break }
                    return this.pushStack(n.length > 1 ? k.uniqueSort(n) : n) }, index: function(t) { return t ? "string" == typeof t ? u.call(k(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(t, e) { return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e)))) }, addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) } }), k.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return C(t, "parentNode") }, parentsUntil: function(t, e, o) { return C(t, "parentNode", o) }, next: function(t) { return L(t, "nextSibling") }, prev: function(t) { return L(t, "previousSibling") }, nextAll: function(t) { return C(t, "nextSibling") }, prevAll: function(t) { return C(t, "previousSibling") }, nextUntil: function(t, e, o) { return C(t, "nextSibling", o) }, prevUntil: function(t, e, o) { return C(t, "previousSibling", o) }, siblings: function(t) { return O((t.parentNode || {}).firstChild, t) }, children: function(t) { return O(t.firstChild) }, contents: function(t) { return void 0 !== t.contentDocument ? t.contentDocument : (P(t, "template") && (t = t.content || t), k.merge([], t.childNodes)) } }, (function(t, e) { k.fn[t] = function(o, r) { var l = k.map(this, e, o); return "Until" !== t.slice(-5) && (r = o), r && "string" == typeof r && (l = k.filter(r, l)), this.length > 1 && (R[t] || k.uniqueSort(l), M.test(t) && l.reverse()), this.pushStack(l) } })); var z = /[^\x20\t\r\n\f]+/g;

            function F(t) { return t }

            function B(t) { throw t }

            function U(t, e, o, r) { var l; try { t && v(l = t.promise) ? l.call(t).done(e).fail(o) : t && v(l = t.then) ? l.call(t, e, o) : e.apply(void 0, [t].slice(r)) } catch (t) { o.apply(void 0, [t]) } }
            k.Callbacks = function(t) { t = "string" == typeof t ? function(t) { var e = {}; return k.each(t.match(z) || [], (function(t, o) { e[o] = !0 })), e }(t) : k.extend({}, t); var e, o, r, l, n = [],
                    i = [],
                    c = -1,
                    a = function() { for (l = l || t.once, r = e = !0; i.length; c = -1)
                            for (o = i.shift(); ++c < n.length;) !1 === n[c].apply(o[0], o[1]) && t.stopOnFalse && (c = n.length, o = !1);
                        t.memory || (o = !1), e = !1, l && (n = o ? [] : "") },
                    s = { add: function() { return n && (o && !e && (c = n.length - 1, i.push(o)), function e(o) { k.each(o, (function(o, r) { v(r) ? t.unique && s.has(r) || n.push(r) : r && r.length && "string" !== _(r) && e(r) })) }(arguments), o && !e && a()), this }, remove: function() { return k.each(arguments, (function(t, e) { for (var o;
                                    (o = k.inArray(e, n, o)) > -1;) n.splice(o, 1), o <= c && c-- })), this }, has: function(t) { return t ? k.inArray(t, n) > -1 : n.length > 0 }, empty: function() { return n && (n = []), this }, disable: function() { return l = i = [], n = o = "", this }, disabled: function() { return !n }, lock: function() { return l = i = [], o || e || (n = o = ""), this }, locked: function() { return !!l }, fireWith: function(t, o) { return l || (o = [t, (o = o || []).slice ? o.slice() : o], i.push(o), e || a()), this }, fire: function() { return s.fireWith(this, arguments), this }, fired: function() { return !!r } }; return s }, k.extend({ Deferred: function(t) { var e = [
                            ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                            ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        l = { state: function() { return r }, always: function() { return n.done(arguments).fail(arguments), this }, catch: function(t) { return l.then(null, t) }, pipe: function() { var t = arguments; return k.Deferred((function(o) { k.each(e, (function(e, r) { var l = v(t[r[4]]) && t[r[4]];
                                        n[r[1]]((function() { var t = l && l.apply(this, arguments);
                                            t && v(t.promise) ? t.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[r[0] + "With"](this, l ? [t] : arguments) })) })), t = null })).promise() }, then: function(t, r, l) { var n = 0;

                                function i(t, e, r, l) { return function() { var c = this,
                                            a = arguments,
                                            s = function() { var o, s; if (!(t < n)) { if ((o = r.apply(c, a)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                    s = o && ("object" == typeof o || "function" == typeof o) && o.then, v(s) ? l ? s.call(o, i(n, e, F, l), i(n, e, B, l)) : (n++, s.call(o, i(n, e, F, l), i(n, e, B, l), i(n, e, F, e.notifyWith))) : (r !== F && (c = void 0, a = [o]), (l || e.resolveWith)(c, a)) } },
                                            p = l ? s : function() { try { s() } catch (o) { k.Deferred.exceptionHook && k.Deferred.exceptionHook(o, p.stackTrace), t + 1 >= n && (r !== B && (c = void 0, a = [o]), e.rejectWith(c, a)) } };
                                        t ? p() : (k.Deferred.getStackHook && (p.stackTrace = k.Deferred.getStackHook()), o.setTimeout(p)) } } return k.Deferred((function(o) { e[0][3].add(i(0, o, v(l) ? l : F, o.notifyWith)), e[1][3].add(i(0, o, v(t) ? t : F)), e[2][3].add(i(0, o, v(r) ? r : B)) })).promise() }, promise: function(t) { return null != t ? k.extend(t, l) : l } },
                        n = {}; return k.each(e, (function(t, o) { var i = o[2],
                            c = o[5];
                        l[o[1]] = i.add, c && i.add((function() { r = c }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), i.add(o[3].fire), n[o[0]] = function() { return n[o[0] + "With"](this === n ? void 0 : this, arguments), this }, n[o[0] + "With"] = i.fireWith })), l.promise(n), t && t.call(n, n), n }, when: function(t) { var e = arguments.length,
                        o = e,
                        r = Array(o),
                        l = a.call(arguments),
                        n = k.Deferred(),
                        i = function(t) { return function(o) { r[t] = this, l[t] = arguments.length > 1 ? a.call(arguments) : o, --e || n.resolveWith(r, l) } }; if (e <= 1 && (U(t, n.done(i(o)).resolve, n.reject, !e), "pending" === n.state() || v(l[o] && l[o].then))) return n.then(); for (; o--;) U(l[o], i(o), n.reject); return n.promise() } }); var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            k.Deferred.exceptionHook = function(t, e) { o.console && o.console.warn && t && q.test(t.name) && o.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e) }, k.readyException = function(t) { o.setTimeout((function() { throw t })) }; var H = k.Deferred();

            function W() { i.removeEventListener("DOMContentLoaded", W), o.removeEventListener("load", W), k.ready() }
            k.fn.ready = function(t) { return H.then(t).catch((function(t) { k.readyException(t) })), this }, k.extend({ isReady: !1, readyWait: 1, ready: function(t) {
                    (!0 === t ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== t && --k.readyWait > 0 || H.resolveWith(i, [k])) } }), k.ready.then = H.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? o.setTimeout(k.ready) : (i.addEventListener("DOMContentLoaded", W), o.addEventListener("load", W)); var V = function(t, e, o, r, l, n, i) { var c = 0,
                        a = t.length,
                        s = null == o; if ("object" === _(o))
                        for (c in l = !0, o) V(t, e, c, o[c], !0, n, i);
                    else if (void 0 !== r && (l = !0, v(r) || (i = !0), s && (i ? (e.call(t, r), e = null) : (s = e, e = function(t, e, o) { return s.call(k(t), o) })), e))
                        for (; c < a; c++) e(t[c], o, i ? r : r.call(t[c], c, e(t[c], o))); return l ? t : s ? e.call(t) : a ? e(t[0], o) : n },
                Y = /^-ms-/,
                K = /-([a-z])/g;

            function $(t, e) { return e.toUpperCase() }

            function Q(t) { return t.replace(Y, "ms-").replace(K, $) } var X = function(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType };

            function G() { this.expando = k.expando + G.uid++ }
            G.uid = 1, G.prototype = { cache: function(t) { var e = t[this.expando]; return e || (e = {}, X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e }, set: function(t, e, o) { var r, l = this.cache(t); if ("string" == typeof e) l[Q(e)] = o;
                    else
                        for (r in e) l[Q(r)] = e[r]; return l }, get: function(t, e) { return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Q(e)] }, access: function(t, e, o) { return void 0 === e || e && "string" == typeof e && void 0 === o ? this.get(t, e) : (this.set(t, e, o), void 0 !== o ? o : e) }, remove: function(t, e) { var o, r = t[this.expando]; if (void 0 !== r) { if (void 0 !== e) { o = (e = Array.isArray(e) ? e.map(Q) : (e = Q(e)) in r ? [e] : e.match(z) || []).length; for (; o--;) delete r[e[o]] }(void 0 === e || k.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]) } }, hasData: function(t) { var e = t[this.expando]; return void 0 !== e && !k.isEmptyObject(e) } }; var Z = new G,
                J = new G,
                tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                et = /[A-Z]/g;

            function ot(t, e, o) { var r; if (void 0 === o && 1 === t.nodeType)
                    if (r = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(o = t.getAttribute(r))) { try { o = function(t) { return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t) }(o) } catch (t) {}
                        J.set(t, e, o) } else o = void 0;
                return o }
            k.extend({ hasData: function(t) { return J.hasData(t) || Z.hasData(t) }, data: function(t, e, o) { return J.access(t, e, o) }, removeData: function(t, e) { J.remove(t, e) }, _data: function(t, e, o) { return Z.access(t, e, o) }, _removeData: function(t, e) { Z.remove(t, e) } }), k.fn.extend({ data: function(t, e) { var o, r, l, n = this[0],
                        i = n && n.attributes; if (void 0 === t) { if (this.length && (l = J.get(n), 1 === n.nodeType && !Z.get(n, "hasDataAttrs"))) { for (o = i.length; o--;) i[o] && 0 === (r = i[o].name).indexOf("data-") && (r = Q(r.slice(5)), ot(n, r, l[r]));
                            Z.set(n, "hasDataAttrs", !0) } return l } return "object" == typeof t ? this.each((function() { J.set(this, t) })) : V(this, (function(e) { var o; if (n && void 0 === e) return void 0 !== (o = J.get(n, t)) ? o : void 0 !== (o = ot(n, t)) ? o : void 0;
                        this.each((function() { J.set(this, t, e) })) }), null, e, arguments.length > 1, null, !0) }, removeData: function(t) { return this.each((function() { J.remove(this, t) })) } }), k.extend({ queue: function(t, e, o) { var r; if (t) return e = (e || "fx") + "queue", r = Z.get(t, e), o && (!r || Array.isArray(o) ? r = Z.access(t, e, k.makeArray(o)) : r.push(o)), r || [] }, dequeue: function(t, e) { e = e || "fx"; var o = k.queue(t, e),
                        r = o.length,
                        l = o.shift(),
                        n = k._queueHooks(t, e); "inprogress" === l && (l = o.shift(), r--), l && ("fx" === e && o.unshift("inprogress"), delete n.stop, l.call(t, (function() { k.dequeue(t, e) }), n)), !r && n && n.empty.fire() }, _queueHooks: function(t, e) { var o = e + "queueHooks"; return Z.get(t, o) || Z.access(t, o, { empty: k.Callbacks("once memory").add((function() { Z.remove(t, [e + "queue", o]) })) }) } }), k.fn.extend({ queue: function(t, e) { var o = 2; return "string" != typeof t && (e = t, t = "fx", o--), arguments.length < o ? k.queue(this[0], t) : void 0 === e ? this : this.each((function() { var o = k.queue(this, t, e);
                        k._queueHooks(this, t), "fx" === t && "inprogress" !== o[0] && k.dequeue(this, t) })) }, dequeue: function(t) { return this.each((function() { k.dequeue(this, t) })) }, clearQueue: function(t) { return this.queue(t || "fx", []) }, promise: function(t, e) { var o, r = 1,
                        l = k.Deferred(),
                        n = this,
                        i = this.length,
                        c = function() {--r || l.resolveWith(n, [n]) }; for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; i--;)(o = Z.get(n[i], t + "queueHooks")) && o.empty && (r++, o.empty.add(c)); return c(), l.promise(e) } }); var rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                lt = new RegExp("^(?:([+-])=|)(" + rt + ")([a-z%]*)$", "i"),
                nt = ["Top", "Right", "Bottom", "Left"],
                it = i.documentElement,
                ct = function(t) { return k.contains(t.ownerDocument, t) },
                at = { composed: !0 };
            it.getRootNode && (ct = function(t) { return k.contains(t.ownerDocument, t) || t.getRootNode(at) === t.ownerDocument }); var st = function(t, e) { return "none" === (t = e || t).style.display || "" === t.style.display && ct(t) && "none" === k.css(t, "display") },
                pt = function(t, e, o, r) { var l, n, i = {}; for (n in e) i[n] = t.style[n], t.style[n] = e[n]; for (n in l = o.apply(t, r || []), e) t.style[n] = i[n]; return l };

            function ut(t, e, o, r) { var l, n, i = 20,
                    c = r ? function() { return r.cur() } : function() { return k.css(t, e, "") },
                    a = c(),
                    s = o && o[3] || (k.cssNumber[e] ? "" : "px"),
                    p = t.nodeType && (k.cssNumber[e] || "px" !== s && +a) && lt.exec(k.css(t, e)); if (p && p[3] !== s) { for (a /= 2, s = s || p[3], p = +a || 1; i--;) k.style(t, e, p + s), (1 - n) * (1 - (n = c() / a || .5)) <= 0 && (i = 0), p /= n;
                    p *= 2, k.style(t, e, p + s), o = o || [] } return o && (p = +p || +a || 0, l = o[1] ? p + (o[1] + 1) * o[2] : +o[2], r && (r.unit = s, r.start = p, r.end = l)), l } var dt = {};

            function ft(t) { var e, o = t.ownerDocument,
                    r = t.nodeName,
                    l = dt[r]; return l || (e = o.body.appendChild(o.createElement(r)), l = k.css(e, "display"), e.parentNode.removeChild(e), "none" === l && (l = "block"), dt[r] = l, l) }

            function gt(t, e) { for (var o, r, l = [], n = 0, i = t.length; n < i; n++)(r = t[n]).style && (o = r.style.display, e ? ("none" === o && (l[n] = Z.get(r, "display") || null, l[n] || (r.style.display = "")), "" === r.style.display && st(r) && (l[n] = ft(r))) : "none" !== o && (l[n] = "none", Z.set(r, "display", o))); for (n = 0; n < i; n++) null != l[n] && (t[n].style.display = l[n]); return t }
            k.fn.extend({ show: function() { return gt(this, !0) }, hide: function() { return gt(this) }, toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() { st(this) ? k(this).show() : k(this).hide() })) } }); var mt = /^(?:checkbox|radio)$/i,
                ht = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                bt = /^$|^module$|\/(?:java|ecma)script/i,
                vt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

            function yt(t, e) { var o; return o = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && P(t, e) ? k.merge([t], o) : o }

            function xt(t, e) { for (var o = 0, r = t.length; o < r; o++) Z.set(t[o], "globalEval", !e || Z.get(e[o], "globalEval")) }
            vt.optgroup = vt.option, vt.tbody = vt.tfoot = vt.colgroup = vt.caption = vt.thead, vt.th = vt.td; var wt, _t, kt = /<|&#?\w+;/;

            function Et(t, e, o, r, l) { for (var n, i, c, a, s, p, u = e.createDocumentFragment(), d = [], f = 0, g = t.length; f < g; f++)
                    if ((n = t[f]) || 0 === n)
                        if ("object" === _(n)) k.merge(d, n.nodeType ? [n] : n);
                        else if (kt.test(n)) { for (i = i || u.appendChild(e.createElement("div")), c = (ht.exec(n) || ["", ""])[1].toLowerCase(), a = vt[c] || vt._default, i.innerHTML = a[1] + k.htmlPrefilter(n) + a[2], p = a[0]; p--;) i = i.lastChild;
                    k.merge(d, i.childNodes), (i = u.firstChild).textContent = "" } else d.push(e.createTextNode(n)); for (u.textContent = "", f = 0; n = d[f++];)
                    if (r && k.inArray(n, r) > -1) l && l.push(n);
                    else if (s = ct(n), i = yt(u.appendChild(n), "script"), s && xt(i), o)
                    for (p = 0; n = i[p++];) bt.test(n.type || "") && o.push(n); return u }
            wt = i.createDocumentFragment().appendChild(i.createElement("div")), (_t = i.createElement("input")).setAttribute("type", "radio"), _t.setAttribute("checked", "checked"), _t.setAttribute("name", "t"), wt.appendChild(_t), b.checkClone = wt.cloneNode(!0).cloneNode(!0).lastChild.checked, wt.innerHTML = "<textarea>x</textarea>", b.noCloneChecked = !!wt.cloneNode(!0).lastChild.defaultValue; var St = /^key/,
                Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ct = /^([^.]*)(?:\.(.+)|)/;

            function Ot() { return !0 }

            function Nt() { return !1 }

            function Pt(t, e) { return t === function() { try { return i.activeElement } catch (t) {} }() == ("focus" === e) }

            function jt(t, e, o, r, l, n) { var i, c; if ("object" == typeof e) { for (c in "string" != typeof o && (r = r || o, o = void 0), e) jt(t, c, o, r, e[c], n); return t } if (null == r && null == l ? (l = o, r = o = void 0) : null == l && ("string" == typeof o ? (l = r, r = void 0) : (l = r, r = o, o = void 0)), !1 === l) l = Nt;
                else if (!l) return t; return 1 === n && (i = l, (l = function(t) { return k().off(t), i.apply(this, arguments) }).guid = i.guid || (i.guid = k.guid++)), t.each((function() { k.event.add(this, e, l, r, o) })) }

            function At(t, e, o) { o ? (Z.set(t, e, !1), k.event.add(t, e, { namespace: !1, handler: function(t) { var r, l, n = Z.get(this, e); if (1 & t.isTrigger && this[e]) { if (n.length)(k.event.special[e] || {}).delegateType && t.stopPropagation();
                            else if (n = a.call(arguments), Z.set(this, e, n), r = o(this, e), this[e](), n !== (l = Z.get(this, e)) || r ? Z.set(this, e, !1) : l = {}, n !== l) return t.stopImmediatePropagation(), t.preventDefault(), l.value } else n.length && (Z.set(this, e, { value: k.event.trigger(k.extend(n[0], k.Event.prototype), n.slice(1), this) }), t.stopImmediatePropagation()) } })) : void 0 === Z.get(t, e) && k.event.add(t, e, Ot) }
            k.event = { global: {}, add: function(t, e, o, r, l) { var n, i, c, a, s, p, u, d, f, g, m, h = Z.get(t); if (h)
                        for (o.handler && (o = (n = o).handler, l = n.selector), l && k.find.matchesSelector(it, l), o.guid || (o.guid = k.guid++), (a = h.events) || (a = h.events = {}), (i = h.handle) || (i = h.handle = function(e) { return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0 }), s = (e = (e || "").match(z) || [""]).length; s--;) f = m = (c = Ct.exec(e[s]) || [])[1], g = (c[2] || "").split(".").sort(), f && (u = k.event.special[f] || {}, f = (l ? u.delegateType : u.bindType) || f, u = k.event.special[f] || {}, p = k.extend({ type: f, origType: m, data: r, handler: o, guid: o.guid, selector: l, needsContext: l && k.expr.match.needsContext.test(l), namespace: g.join(".") }, n), (d = a[f]) || ((d = a[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, r, g, i) || t.addEventListener && t.addEventListener(f, i)), u.add && (u.add.call(t, p), p.handler.guid || (p.handler.guid = o.guid)), l ? d.splice(d.delegateCount++, 0, p) : d.push(p), k.event.global[f] = !0) }, remove: function(t, e, o, r, l) { var n, i, c, a, s, p, u, d, f, g, m, h = Z.hasData(t) && Z.get(t); if (h && (a = h.events)) { for (s = (e = (e || "").match(z) || [""]).length; s--;)
                            if (f = m = (c = Ct.exec(e[s]) || [])[1], g = (c[2] || "").split(".").sort(), f) { for (u = k.event.special[f] || {}, d = a[f = (r ? u.delegateType : u.bindType) || f] || [], c = c[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = n = d.length; n--;) p = d[n], !l && m !== p.origType || o && o.guid !== p.guid || c && !c.test(p.namespace) || r && r !== p.selector && ("**" !== r || !p.selector) || (d.splice(n, 1), p.selector && d.delegateCount--, u.remove && u.remove.call(t, p));
                                i && !d.length && (u.teardown && !1 !== u.teardown.call(t, g, h.handle) || k.removeEvent(t, f, h.handle), delete a[f]) } else
                                for (f in a) k.event.remove(t, f + e[s], o, r, !0);
                        k.isEmptyObject(a) && Z.remove(t, "handle events") } }, dispatch: function(t) { var e, o, r, l, n, i, c = k.event.fix(t),
                        a = new Array(arguments.length),
                        s = (Z.get(this, "events") || {})[c.type] || [],
                        p = k.event.special[c.type] || {}; for (a[0] = c, e = 1; e < arguments.length; e++) a[e] = arguments[e]; if (c.delegateTarget = this, !p.preDispatch || !1 !== p.preDispatch.call(this, c)) { for (i = k.event.handlers.call(this, c, s), e = 0;
                            (l = i[e++]) && !c.isPropagationStopped();)
                            for (c.currentTarget = l.elem, o = 0;
                                (n = l.handlers[o++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !1 !== n.namespace && !c.rnamespace.test(n.namespace) || (c.handleObj = n, c.data = n.data, void 0 !== (r = ((k.event.special[n.origType] || {}).handle || n.handler).apply(l.elem, a)) && !1 === (c.result = r) && (c.preventDefault(), c.stopPropagation())); return p.postDispatch && p.postDispatch.call(this, c), c.result } }, handlers: function(t, e) { var o, r, l, n, i, c = [],
                        a = e.delegateCount,
                        s = t.target; if (a && s.nodeType && !("click" === t.type && t.button >= 1))
                        for (; s !== this; s = s.parentNode || this)
                            if (1 === s.nodeType && ("click" !== t.type || !0 !== s.disabled)) { for (n = [], i = {}, o = 0; o < a; o++) void 0 === i[l = (r = e[o]).selector + " "] && (i[l] = r.needsContext ? k(l, this).index(s) > -1 : k.find(l, this, null, [s]).length), i[l] && n.push(r);
                                n.length && c.push({ elem: s, handlers: n }) }
                    return s = this, a < e.length && c.push({ elem: s, handlers: e.slice(a) }), c }, addProp: function(t, e) { Object.defineProperty(k.Event.prototype, t, { enumerable: !0, configurable: !0, get: v(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function(t) { return t[k.expando] ? t : new k.Event(t) }, special: { load: { noBubble: !0 }, click: { setup: function(t) { var e = this || t; return mt.test(e.type) && e.click && P(e, "input") && At(e, "click", Ot), !1 }, trigger: function(t) { var e = this || t; return mt.test(e.type) && e.click && P(e, "input") && At(e, "click"), !0 }, _default: function(t) { var e = t.target; return mt.test(e.type) && e.click && P(e, "input") && Z.get(e, "click") || P(e, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } } }, k.removeEvent = function(t, e, o) { t.removeEventListener && t.removeEventListener(e, o) }, k.Event = function(t, e) { if (!(this instanceof k.Event)) return new k.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ot : Nt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && k.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[k.expando] = !0 }, k.Event.prototype = { constructor: k.Event, isDefaultPrevented: Nt, isPropagationStopped: Nt, isImmediatePropagationStopped: Nt, isSimulated: !1, preventDefault: function() { var t = this.originalEvent;
                    this.isDefaultPrevented = Ot, t && !this.isSimulated && t.preventDefault() }, stopPropagation: function() { var t = this.originalEvent;
                    this.isPropagationStopped = Ot, t && !this.isSimulated && t.stopPropagation() }, stopImmediatePropagation: function() { var t = this.originalEvent;
                    this.isImmediatePropagationStopped = Ot, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation() } }, k.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(t) { var e = t.button; return null == t.which && St.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Tt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which } }, k.event.addProp), k.each({ focus: "focusin", blur: "focusout" }, (function(t, e) { k.event.special[t] = { setup: function() { return At(this, t, Pt), !1 }, trigger: function() { return At(this, t), !0 }, delegateType: e } })), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, (function(t, e) { k.event.special[t] = { delegateType: e, bindType: e, handle: function(t) { var o, r = this,
                            l = t.relatedTarget,
                            n = t.handleObj; return l && (l === r || k.contains(r, l)) || (t.type = n.origType, o = n.handler.apply(this, arguments), t.type = e), o } } })), k.fn.extend({ on: function(t, e, o, r) { return jt(this, t, e, o, r) }, one: function(t, e, o, r) { return jt(this, t, e, o, r, 1) }, off: function(t, e, o) { var r, l; if (t && t.preventDefault && t.handleObj) return r = t.handleObj, k(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof t) { for (l in t) this.off(l, e, t[l]); return this } return !1 !== e && "function" != typeof e || (o = e, e = void 0), !1 === o && (o = Nt), this.each((function() { k.event.remove(this, t, o, e) })) } }); var Dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                It = /<script|<style|<link/i,
                Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Lt(t, e) { return P(t, "table") && P(11 !== e.nodeType ? e : e.firstChild, "tr") && k(t).children("tbody")[0] || t }

            function zt(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

            function Ft(t) { return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t }

            function Bt(t, e) { var o, r, l, n, i, c, a, s; if (1 === e.nodeType) { if (Z.hasData(t) && (n = Z.access(t), i = Z.set(e, n), s = n.events))
                        for (l in delete i.handle, i.events = {}, s)
                            for (o = 0, r = s[l].length; o < r; o++) k.event.add(e, l, s[l][o]);
                    J.hasData(t) && (c = J.access(t), a = k.extend({}, c), J.set(e, a)) } }

            function Ut(t, e) { var o = e.nodeName.toLowerCase(); "input" === o && mt.test(t.type) ? e.checked = t.checked : "input" !== o && "textarea" !== o || (e.defaultValue = t.defaultValue) }

            function qt(t, e, o, r) { e = s.apply([], e); var l, n, i, c, a, p, u = 0,
                    d = t.length,
                    f = d - 1,
                    g = e[0],
                    m = v(g); if (m || d > 1 && "string" == typeof g && !b.checkClone && Mt.test(g)) return t.each((function(l) { var n = t.eq(l);
                    m && (e[0] = g.call(this, l, n.html())), qt(n, e, o, r) })); if (d && (n = (l = Et(e, t[0].ownerDocument, !1, t, r)).firstChild, 1 === l.childNodes.length && (l = n), n || r)) { for (c = (i = k.map(yt(l, "script"), zt)).length; u < d; u++) a = l, u !== f && (a = k.clone(a, !0, !0), c && k.merge(i, yt(a, "script"))), o.call(t[u], a, u); if (c)
                        for (p = i[i.length - 1].ownerDocument, k.map(i, Ft), u = 0; u < c; u++) a = i[u], bt.test(a.type || "") && !Z.access(a, "globalEval") && k.contains(p, a) && (a.src && "module" !== (a.type || "").toLowerCase() ? k._evalUrl && !a.noModule && k._evalUrl(a.src, { nonce: a.nonce || a.getAttribute("nonce") }) : w(a.textContent.replace(Rt, ""), a, p)) } return t }

            function Ht(t, e, o) { for (var r, l = e ? k.filter(e, t) : t, n = 0; null != (r = l[n]); n++) o || 1 !== r.nodeType || k.cleanData(yt(r)), r.parentNode && (o && ct(r) && xt(yt(r, "script")), r.parentNode.removeChild(r)); return t }
            k.extend({ htmlPrefilter: function(t) { return t.replace(Dt, "<$1></$2>") }, clone: function(t, e, o) { var r, l, n, i, c = t.cloneNode(!0),
                        a = ct(t); if (!(b.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || k.isXMLDoc(t)))
                        for (i = yt(c), r = 0, l = (n = yt(t)).length; r < l; r++) Ut(n[r], i[r]); if (e)
                        if (o)
                            for (n = n || yt(t), i = i || yt(c), r = 0, l = n.length; r < l; r++) Bt(n[r], i[r]);
                        else Bt(t, c);
                    return (i = yt(c, "script")).length > 0 && xt(i, !a && yt(t, "script")), c }, cleanData: function(t) { for (var e, o, r, l = k.event.special, n = 0; void 0 !== (o = t[n]); n++)
                        if (X(o)) { if (e = o[Z.expando]) { if (e.events)
                                    for (r in e.events) l[r] ? k.event.remove(o, r) : k.removeEvent(o, r, e.handle);
                                o[Z.expando] = void 0 }
                            o[J.expando] && (o[J.expando] = void 0) } } }), k.fn.extend({ detach: function(t) { return Ht(this, t, !0) }, remove: function(t) { return Ht(this, t) }, text: function(t) { return V(this, (function(t) { return void 0 === t ? k.text(this) : this.empty().each((function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t) })) }), null, t, arguments.length) }, append: function() { return qt(this, arguments, (function(t) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Lt(this, t).appendChild(t) })) }, prepend: function() { return qt(this, arguments, (function(t) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var e = Lt(this, t);
                            e.insertBefore(t, e.firstChild) } })) }, before: function() { return qt(this, arguments, (function(t) { this.parentNode && this.parentNode.insertBefore(t, this) })) }, after: function() { return qt(this, arguments, (function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) })) }, empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (k.cleanData(yt(t, !1)), t.textContent = ""); return this }, clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map((function() { return k.clone(this, t, e) })) }, html: function(t) { return V(this, (function(t) { var e = this[0] || {},
                            o = 0,
                            r = this.length; if (void 0 === t && 1 === e.nodeType) return e.innerHTML; if ("string" == typeof t && !It.test(t) && !vt[(ht.exec(t) || ["", ""])[1].toLowerCase()]) { t = k.htmlPrefilter(t); try { for (; o < r; o++) 1 === (e = this[o] || {}).nodeType && (k.cleanData(yt(e, !1)), e.innerHTML = t);
                                e = 0 } catch (t) {} }
                        e && this.empty().append(t) }), null, t, arguments.length) }, replaceWith: function() { var t = []; return qt(this, arguments, (function(e) { var o = this.parentNode;
                        k.inArray(this, t) < 0 && (k.cleanData(yt(this)), o && o.replaceChild(e, this)) }), t) } }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, (function(t, e) { k.fn[t] = function(t) { for (var o, r = [], l = k(t), n = l.length - 1, i = 0; i <= n; i++) o = i === n ? this : this.clone(!0), k(l[i])[e](o), p.apply(r, o.get()); return this.pushStack(r) } })); var Wt = new RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"),
                Vt = function(t) { var e = t.ownerDocument.defaultView; return e && e.opener || (e = o), e.getComputedStyle(t) },
                Yt = new RegExp(nt.join("|"), "i");

            function Kt(t, e, o) { var r, l, n, i, c = t.style; return (o = o || Vt(t)) && ("" !== (i = o.getPropertyValue(e) || o[e]) || ct(t) || (i = k.style(t, e)), !b.pixelBoxStyles() && Wt.test(i) && Yt.test(e) && (r = c.width, l = c.minWidth, n = c.maxWidth, c.minWidth = c.maxWidth = c.width = i, i = o.width, c.width = r, c.minWidth = l, c.maxWidth = n)), void 0 !== i ? i + "" : i }

            function $t(t, e) { return { get: function() { if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get } } }! function() {
                function t() { if (p) { s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", p.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(s).appendChild(p); var t = o.getComputedStyle(p);
                        r = "1%" !== t.top, a = 12 === e(t.marginLeft), p.style.right = "60%", c = 36 === e(t.right), l = 36 === e(t.width), p.style.position = "absolute", n = 12 === e(p.offsetWidth / 3), it.removeChild(s), p = null } }

                function e(t) { return Math.round(parseFloat(t)) } var r, l, n, c, a, s = i.createElement("div"),
                    p = i.createElement("div");
                p.style && (p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === p.style.backgroundClip, k.extend(b, { boxSizingReliable: function() { return t(), l }, pixelBoxStyles: function() { return t(), c }, pixelPosition: function() { return t(), r }, reliableMarginLeft: function() { return t(), a }, scrollboxSize: function() { return t(), n } })) }(); var Qt = ["Webkit", "Moz", "ms"],
                Xt = i.createElement("div").style,
                Gt = {};

            function Zt(t) { var e = k.cssProps[t] || Gt[t]; return e || (t in Xt ? t : Gt[t] = function(t) { for (var e = t[0].toUpperCase() + t.slice(1), o = Qt.length; o--;)
                        if ((t = Qt[o] + e) in Xt) return t }(t) || t) } var Jt = /^(none|table(?!-c[ea]).+)/,
                te = /^--/,
                ee = { position: "absolute", visibility: "hidden", display: "block" },
                oe = { letterSpacing: "0", fontWeight: "400" };

            function re(t, e, o) { var r = lt.exec(e); return r ? Math.max(0, r[2] - (o || 0)) + (r[3] || "px") : e }

            function le(t, e, o, r, l, n) { var i = "width" === e ? 1 : 0,
                    c = 0,
                    a = 0; if (o === (r ? "border" : "content")) return 0; for (; i < 4; i += 2) "margin" === o && (a += k.css(t, o + nt[i], !0, l)), r ? ("content" === o && (a -= k.css(t, "padding" + nt[i], !0, l)), "margin" !== o && (a -= k.css(t, "border" + nt[i] + "Width", !0, l))) : (a += k.css(t, "padding" + nt[i], !0, l), "padding" !== o ? a += k.css(t, "border" + nt[i] + "Width", !0, l) : c += k.css(t, "border" + nt[i] + "Width", !0, l)); return !r && n >= 0 && (a += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - n - a - c - .5)) || 0), a }

            function ne(t, e, o) { var r = Vt(t),
                    l = (!b.boxSizingReliable() || o) && "border-box" === k.css(t, "boxSizing", !1, r),
                    n = l,
                    i = Kt(t, e, r),
                    c = "offset" + e[0].toUpperCase() + e.slice(1); if (Wt.test(i)) { if (!o) return i;
                    i = "auto" } return (!b.boxSizingReliable() && l || "auto" === i || !parseFloat(i) && "inline" === k.css(t, "display", !1, r)) && t.getClientRects().length && (l = "border-box" === k.css(t, "boxSizing", !1, r), (n = c in t) && (i = t[c])), (i = parseFloat(i) || 0) + le(t, e, o || (l ? "border" : "content"), n, r, i) + "px" }

            function ie(t, e, o, r, l) { return new ie.prototype.init(t, e, o, r, l) }
            k.extend({ cssHooks: { opacity: { get: function(t, e) { if (e) { var o = Kt(t, "opacity"); return "" === o ? "1" : o } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(t, e, o, r) { if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) { var l, n, i, c = Q(e),
                            a = te.test(e),
                            s = t.style; if (a || (e = Zt(c)), i = k.cssHooks[e] || k.cssHooks[c], void 0 === o) return i && "get" in i && void 0 !== (l = i.get(t, !1, r)) ? l : s[e]; "string" === (n = typeof o) && (l = lt.exec(o)) && l[1] && (o = ut(t, e, l), n = "number"), null != o && o == o && ("number" !== n || a || (o += l && l[3] || (k.cssNumber[c] ? "" : "px")), b.clearCloneStyle || "" !== o || 0 !== e.indexOf("background") || (s[e] = "inherit"), i && "set" in i && void 0 === (o = i.set(t, o, r)) || (a ? s.setProperty(e, o) : s[e] = o)) } }, css: function(t, e, o, r) { var l, n, i, c = Q(e); return te.test(e) || (e = Zt(c)), (i = k.cssHooks[e] || k.cssHooks[c]) && "get" in i && (l = i.get(t, !0, o)), void 0 === l && (l = Kt(t, e, r)), "normal" === l && e in oe && (l = oe[e]), "" === o || o ? (n = parseFloat(l), !0 === o || isFinite(n) ? n || 0 : l) : l } }), k.each(["height", "width"], (function(t, e) { k.cssHooks[e] = { get: function(t, o, r) { if (o) return !Jt.test(k.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ne(t, e, r) : pt(t, ee, (function() { return ne(t, e, r) })) }, set: function(t, o, r) { var l, n = Vt(t),
                            i = !b.scrollboxSize() && "absolute" === n.position,
                            c = (i || r) && "border-box" === k.css(t, "boxSizing", !1, n),
                            a = r ? le(t, e, r, c, n) : 0; return c && i && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(n[e]) - le(t, e, "border", !1, n) - .5)), a && (l = lt.exec(o)) && "px" !== (l[3] || "px") && (t.style[e] = o, o = k.css(t, e)), re(0, o, a) } } })), k.cssHooks.marginLeft = $t(b.reliableMarginLeft, (function(t, e) { if (e) return (parseFloat(Kt(t, "marginLeft")) || t.getBoundingClientRect().left - pt(t, { marginLeft: 0 }, (function() { return t.getBoundingClientRect().left }))) + "px" })), k.each({ margin: "", padding: "", border: "Width" }, (function(t, e) { k.cssHooks[t + e] = { expand: function(o) { for (var r = 0, l = {}, n = "string" == typeof o ? o.split(" ") : [o]; r < 4; r++) l[t + nt[r] + e] = n[r] || n[r - 2] || n[0]; return l } }, "margin" !== t && (k.cssHooks[t + e].set = re) })), k.fn.extend({ css: function(t, e) { return V(this, (function(t, e, o) { var r, l, n = {},
                            i = 0; if (Array.isArray(e)) { for (r = Vt(t), l = e.length; i < l; i++) n[e[i]] = k.css(t, e[i], !1, r); return n } return void 0 !== o ? k.style(t, e, o) : k.css(t, e) }), t, e, arguments.length > 1) } }), k.Tween = ie, ie.prototype = { constructor: ie, init: function(t, e, o, r, l, n) { this.elem = t, this.prop = o, this.easing = l || k.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = n || (k.cssNumber[o] ? "" : "px") }, cur: function() { var t = ie.propHooks[this.prop]; return t && t.get ? t.get(this) : ie.propHooks._default.get(this) }, run: function(t) { var e, o = ie.propHooks[this.prop]; return this.options.duration ? this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), o && o.set ? o.set(this) : ie.propHooks._default.set(this), this } }, ie.prototype.init.prototype = ie.prototype, ie.propHooks = { _default: { get: function(t) { var e; return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 }, set: function(t) { k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !k.cssHooks[t.prop] && null == t.elem.style[Zt(t.prop)] ? t.elem[t.prop] = t.now : k.style(t.elem, t.prop, t.now + t.unit) } } }, ie.propHooks.scrollTop = ie.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, k.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, k.fx = ie.prototype.init, k.fx.step = {}; var ce, ae, se = /^(?:toggle|show|hide)$/,
                pe = /queueHooks$/;

            function ue() { ae && (!1 === i.hidden && o.requestAnimationFrame ? o.requestAnimationFrame(ue) : o.setTimeout(ue, k.fx.interval), k.fx.tick()) }

            function de() { return o.setTimeout((function() { ce = void 0 })), ce = Date.now() }

            function fe(t, e) { var o, r = 0,
                    l = { height: t }; for (e = e ? 1 : 0; r < 4; r += 2 - e) l["margin" + (o = nt[r])] = l["padding" + o] = t; return e && (l.opacity = l.width = t), l }

            function ge(t, e, o) { for (var r, l = (me.tweeners[e] || []).concat(me.tweeners["*"]), n = 0, i = l.length; n < i; n++)
                    if (r = l[n].call(o, e, t)) return r }

            function me(t, e, o) { var r, l, n = 0,
                    i = me.prefilters.length,
                    c = k.Deferred().always((function() { delete a.elem })),
                    a = function() { if (l) return !1; for (var e = ce || de(), o = Math.max(0, s.startTime + s.duration - e), r = 1 - (o / s.duration || 0), n = 0, i = s.tweens.length; n < i; n++) s.tweens[n].run(r); return c.notifyWith(t, [s, r, o]), r < 1 && i ? o : (i || c.notifyWith(t, [s, 1, 0]), c.resolveWith(t, [s]), !1) },
                    s = c.promise({ elem: t, props: k.extend({}, e), opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, o), originalProperties: e, originalOptions: o, startTime: ce || de(), duration: o.duration, tweens: [], createTween: function(e, o) { var r = k.Tween(t, s.opts, e, o, s.opts.specialEasing[e] || s.opts.easing); return s.tweens.push(r), r }, stop: function(e) { var o = 0,
                                r = e ? s.tweens.length : 0; if (l) return this; for (l = !0; o < r; o++) s.tweens[o].run(1); return e ? (c.notifyWith(t, [s, 1, 0]), c.resolveWith(t, [s, e])) : c.rejectWith(t, [s, e]), this } }),
                    p = s.props; for (! function(t, e) { var o, r, l, n, i; for (o in t)
                            if (l = e[r = Q(o)], n = t[o], Array.isArray(n) && (l = n[1], n = t[o] = n[0]), o !== r && (t[r] = n, delete t[o]), (i = k.cssHooks[r]) && "expand" in i)
                                for (o in n = i.expand(n), delete t[r], n) o in t || (t[o] = n[o], e[o] = l);
                            else e[r] = l }(p, s.opts.specialEasing); n < i; n++)
                    if (r = me.prefilters[n].call(s, t, p, s.opts)) return v(r.stop) && (k._queueHooks(s.elem, s.opts.queue).stop = r.stop.bind(r)), r;
                return k.map(p, ge, s), v(s.opts.start) && s.opts.start.call(t, s), s.progress(s.opts.progress).done(s.opts.done, s.opts.complete).fail(s.opts.fail).always(s.opts.always), k.fx.timer(k.extend(a, { elem: t, anim: s, queue: s.opts.queue })), s }
            k.Animation = k.extend(me, { tweeners: { "*": [function(t, e) { var o = this.createTween(t, e); return ut(o.elem, t, lt.exec(e), o), o }] }, tweener: function(t, e) { v(t) ? (e = t, t = ["*"]) : t = t.match(z); for (var o, r = 0, l = t.length; r < l; r++) o = t[r], me.tweeners[o] = me.tweeners[o] || [], me.tweeners[o].unshift(e) }, prefilters: [function(t, e, o) { var r, l, n, i, c, a, s, p, u = "width" in e || "height" in e,
                            d = this,
                            f = {},
                            g = t.style,
                            m = t.nodeType && st(t),
                            h = Z.get(t, "fxshow"); for (r in o.queue || (null == (i = k._queueHooks(t, "fx")).unqueued && (i.unqueued = 0, c = i.empty.fire, i.empty.fire = function() { i.unqueued || c() }), i.unqueued++, d.always((function() { d.always((function() { i.unqueued--, k.queue(t, "fx").length || i.empty.fire() })) }))), e)
                            if (l = e[r], se.test(l)) { if (delete e[r], n = n || "toggle" === l, l === (m ? "hide" : "show")) { if ("show" !== l || !h || void 0 === h[r]) continue;
                                    m = !0 }
                                f[r] = h && h[r] || k.style(t, r) }
                        if ((a = !k.isEmptyObject(e)) || !k.isEmptyObject(f))
                            for (r in u && 1 === t.nodeType && (o.overflow = [g.overflow, g.overflowX, g.overflowY], null == (s = h && h.display) && (s = Z.get(t, "display")), "none" === (p = k.css(t, "display")) && (s ? p = s : (gt([t], !0), s = t.style.display || s, p = k.css(t, "display"), gt([t]))), ("inline" === p || "inline-block" === p && null != s) && "none" === k.css(t, "float") && (a || (d.done((function() { g.display = s })), null == s && (p = g.display, s = "none" === p ? "" : p)), g.display = "inline-block")), o.overflow && (g.overflow = "hidden", d.always((function() { g.overflow = o.overflow[0], g.overflowX = o.overflow[1], g.overflowY = o.overflow[2] }))), a = !1, f) a || (h ? "hidden" in h && (m = h.hidden) : h = Z.access(t, "fxshow", { display: s }), n && (h.hidden = !m), m && gt([t], !0), d.done((function() { for (r in m || gt([t]), Z.remove(t, "fxshow"), f) k.style(t, r, f[r]) }))), a = ge(m ? h[r] : 0, r, d), r in h || (h[r] = a.start, m && (a.end = a.start, a.start = 0)) }], prefilter: function(t, e) { e ? me.prefilters.unshift(t) : me.prefilters.push(t) } }), k.speed = function(t, e, o) { var r = t && "object" == typeof t ? k.extend({}, t) : { complete: o || !o && e || v(t) && t, duration: t, easing: o && e || e && !v(e) && e }; return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { v(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue) }, r }, k.fn.extend({ fadeTo: function(t, e, o, r) { return this.filter(st).css("opacity", 0).show().end().animate({ opacity: e }, t, o, r) }, animate: function(t, e, o, r) { var l = k.isEmptyObject(t),
                            n = k.speed(e, o, r),
                            i = function() { var e = me(this, k.extend({}, t), n);
                                (l || Z.get(this, "finish")) && e.stop(!0) }; return i.finish = i, l || !1 === n.queue ? this.each(i) : this.queue(n.queue, i) }, stop: function(t, e, o) { var r = function(t) { var e = t.stop;
                            delete t.stop, e(o) }; return "string" != typeof t && (o = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each((function() { var e = !0,
                                l = null != t && t + "queueHooks",
                                n = k.timers,
                                i = Z.get(this); if (l) i[l] && i[l].stop && r(i[l]);
                            else
                                for (l in i) i[l] && i[l].stop && pe.test(l) && r(i[l]); for (l = n.length; l--;) n[l].elem !== this || null != t && n[l].queue !== t || (n[l].anim.stop(o), e = !1, n.splice(l, 1));!e && o || k.dequeue(this, t) })) }, finish: function(t) { return !1 !== t && (t = t || "fx"), this.each((function() { var e, o = Z.get(this),
                                r = o[t + "queue"],
                                l = o[t + "queueHooks"],
                                n = k.timers,
                                i = r ? r.length : 0; for (o.finish = !0, k.queue(this, t, []), l && l.stop && l.stop.call(this, !0), e = n.length; e--;) n[e].elem === this && n[e].queue === t && (n[e].anim.stop(!0), n.splice(e, 1)); for (e = 0; e < i; e++) r[e] && r[e].finish && r[e].finish.call(this);
                            delete o.finish })) } }), k.each(["toggle", "show", "hide"], (function(t, e) { var o = k.fn[e];
                    k.fn[e] = function(t, r, l) { return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(fe(e, !0), t, r, l) } })), k.each({ slideDown: fe("show"), slideUp: fe("hide"), slideToggle: fe("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, (function(t, e) { k.fn[t] = function(t, o, r) { return this.animate(e, t, o, r) } })), k.timers = [], k.fx.tick = function() { var t, e = 0,
                        o = k.timers; for (ce = Date.now(); e < o.length; e++)(t = o[e])() || o[e] !== t || o.splice(e--, 1);
                    o.length || k.fx.stop(), ce = void 0 }, k.fx.timer = function(t) { k.timers.push(t), k.fx.start() }, k.fx.interval = 13, k.fx.start = function() { ae || (ae = !0, ue()) }, k.fx.stop = function() { ae = null }, k.fx.speeds = { slow: 600, fast: 200, _default: 400 }, k.fn.delay = function(t, e) { return t = k.fx && k.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function(e, r) { var l = o.setTimeout(e, t);
                        r.stop = function() { o.clearTimeout(l) } })) },
                function() { var t = i.createElement("input"),
                        e = i.createElement("select").appendChild(i.createElement("option"));
                    t.type = "checkbox", b.checkOn = "" !== t.value, b.optSelected = e.selected, (t = i.createElement("input")).value = "t", t.type = "radio", b.radioValue = "t" === t.value }(); var he, be = k.expr.attrHandle;
            k.fn.extend({ attr: function(t, e) { return V(this, k.attr, t, e, arguments.length > 1) }, removeAttr: function(t) { return this.each((function() { k.removeAttr(this, t) })) } }), k.extend({ attr: function(t, e, o) { var r, l, n = t.nodeType; if (3 !== n && 8 !== n && 2 !== n) return void 0 === t.getAttribute ? k.prop(t, e, o) : (1 === n && k.isXMLDoc(t) || (l = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? he : void 0)), void 0 !== o ? null === o ? void k.removeAttr(t, e) : l && "set" in l && void 0 !== (r = l.set(t, o, e)) ? r : (t.setAttribute(e, o + ""), o) : l && "get" in l && null !== (r = l.get(t, e)) ? r : null == (r = k.find.attr(t, e)) ? void 0 : r) }, attrHooks: { type: { set: function(t, e) { if (!b.radioValue && "radio" === e && P(t, "input")) { var o = t.value; return t.setAttribute("type", e), o && (t.value = o), e } } } }, removeAttr: function(t, e) { var o, r = 0,
                        l = e && e.match(z); if (l && 1 === t.nodeType)
                        for (; o = l[r++];) t.removeAttribute(o) } }), he = { set: function(t, e, o) { return !1 === e ? k.removeAttr(t, o) : t.setAttribute(o, o), o } }, k.each(k.expr.match.bool.source.match(/\w+/g), (function(t, e) { var o = be[e] || k.find.attr;
                be[e] = function(t, e, r) { var l, n, i = e.toLowerCase(); return r || (n = be[i], be[i] = l, l = null != o(t, e, r) ? i : null, be[i] = n), l } })); var ve = /^(?:input|select|textarea|button)$/i,
                ye = /^(?:a|area)$/i;

            function xe(t) { return (t.match(z) || []).join(" ") }

            function we(t) { return t.getAttribute && t.getAttribute("class") || "" }

            function _e(t) { return Array.isArray(t) ? t : "string" == typeof t && t.match(z) || [] }
            k.fn.extend({ prop: function(t, e) { return V(this, k.prop, t, e, arguments.length > 1) }, removeProp: function(t) { return this.each((function() { delete this[k.propFix[t] || t] })) } }), k.extend({ prop: function(t, e, o) { var r, l, n = t.nodeType; if (3 !== n && 8 !== n && 2 !== n) return 1 === n && k.isXMLDoc(t) || (e = k.propFix[e] || e, l = k.propHooks[e]), void 0 !== o ? l && "set" in l && void 0 !== (r = l.set(t, o, e)) ? r : t[e] = o : l && "get" in l && null !== (r = l.get(t, e)) ? r : t[e] }, propHooks: { tabIndex: { get: function(t) { var e = k.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : ve.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), b.optSelected || (k.propHooks.selected = { get: function(t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null }, set: function(t) { var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex) } }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() { k.propFix[this.toLowerCase()] = this })), k.fn.extend({ addClass: function(t) { var e, o, r, l, n, i, c, a = 0; if (v(t)) return this.each((function(e) { k(this).addClass(t.call(this, e, we(this))) })); if ((e = _e(t)).length)
                        for (; o = this[a++];)
                            if (l = we(o), r = 1 === o.nodeType && " " + xe(l) + " ") { for (i = 0; n = e[i++];) r.indexOf(" " + n + " ") < 0 && (r += n + " ");
                                l !== (c = xe(r)) && o.setAttribute("class", c) }
                    return this }, removeClass: function(t) { var e, o, r, l, n, i, c, a = 0; if (v(t)) return this.each((function(e) { k(this).removeClass(t.call(this, e, we(this))) })); if (!arguments.length) return this.attr("class", ""); if ((e = _e(t)).length)
                        for (; o = this[a++];)
                            if (l = we(o), r = 1 === o.nodeType && " " + xe(l) + " ") { for (i = 0; n = e[i++];)
                                    for (; r.indexOf(" " + n + " ") > -1;) r = r.replace(" " + n + " ", " ");
                                l !== (c = xe(r)) && o.setAttribute("class", c) }
                    return this }, toggleClass: function(t, e) { var o = typeof t,
                        r = "string" === o || Array.isArray(t); return "boolean" == typeof e && r ? e ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each((function(o) { k(this).toggleClass(t.call(this, o, we(this), e), e) })) : this.each((function() { var e, l, n, i; if (r)
                            for (l = 0, n = k(this), i = _e(t); e = i[l++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                        else void 0 !== t && "boolean" !== o || ((e = we(this)) && Z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Z.get(this, "__className__") || "")) })) }, hasClass: function(t) { var e, o, r = 0; for (e = " " + t + " "; o = this[r++];)
                        if (1 === o.nodeType && (" " + xe(we(o)) + " ").indexOf(e) > -1) return !0;
                    return !1 } }); var ke = /\r/g;
            k.fn.extend({ val: function(t) { var e, o, r, l = this[0]; return arguments.length ? (r = v(t), this.each((function(o) { var l;
                        1 === this.nodeType && (null == (l = r ? t.call(this, o, k(this).val()) : t) ? l = "" : "number" == typeof l ? l += "" : Array.isArray(l) && (l = k.map(l, (function(t) { return null == t ? "" : t + "" }))), (e = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, l, "value") || (this.value = l)) }))) : l ? (e = k.valHooks[l.type] || k.valHooks[l.nodeName.toLowerCase()]) && "get" in e && void 0 !== (o = e.get(l, "value")) ? o : "string" == typeof(o = l.value) ? o.replace(ke, "") : null == o ? "" : o : void 0 } }), k.extend({ valHooks: { option: { get: function(t) { var e = k.find.attr(t, "value"); return null != e ? e : xe(k.text(t)) } }, select: { get: function(t) { var e, o, r, l = t.options,
                                n = t.selectedIndex,
                                i = "select-one" === t.type,
                                c = i ? null : [],
                                a = i ? n + 1 : l.length; for (r = n < 0 ? a : i ? n : 0; r < a; r++)
                                if (((o = l[r]).selected || r === n) && !o.disabled && (!o.parentNode.disabled || !P(o.parentNode, "optgroup"))) { if (e = k(o).val(), i) return e;
                                    c.push(e) }
                            return c }, set: function(t, e) { for (var o, r, l = t.options, n = k.makeArray(e), i = l.length; i--;)((r = l[i]).selected = k.inArray(k.valHooks.option.get(r), n) > -1) && (o = !0); return o || (t.selectedIndex = -1), n } } } }), k.each(["radio", "checkbox"], (function() { k.valHooks[this] = { set: function(t, e) { if (Array.isArray(e)) return t.checked = k.inArray(k(t).val(), e) > -1 } }, b.checkOn || (k.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) })), b.focusin = "onfocusin" in o; var Ee = /^(?:focusinfocus|focusoutblur)$/,
                Se = function(t) { t.stopPropagation() };
            k.extend(k.event, { trigger: function(t, e, r, l) { var n, c, a, s, p, u, d, f, m = [r || i],
                        h = g.call(t, "type") ? t.type : t,
                        b = g.call(t, "namespace") ? t.namespace.split(".") : []; if (c = f = a = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !Ee.test(h + k.event.triggered) && (h.indexOf(".") > -1 && (b = h.split("."), h = b.shift(), b.sort()), p = h.indexOf(":") < 0 && "on" + h, (t = t[k.expando] ? t : new k.Event(h, "object" == typeof t && t)).isTrigger = l ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), e = null == e ? [t] : k.makeArray(e, [t]), d = k.event.special[h] || {}, l || !d.trigger || !1 !== d.trigger.apply(r, e))) { if (!l && !d.noBubble && !y(r)) { for (s = d.delegateType || h, Ee.test(s + h) || (c = c.parentNode); c; c = c.parentNode) m.push(c), a = c;
                            a === (r.ownerDocument || i) && m.push(a.defaultView || a.parentWindow || o) } for (n = 0;
                            (c = m[n++]) && !t.isPropagationStopped();) f = c, t.type = n > 1 ? s : d.bindType || h, (u = (Z.get(c, "events") || {})[t.type] && Z.get(c, "handle")) && u.apply(c, e), (u = p && c[p]) && u.apply && X(c) && (t.result = u.apply(c, e), !1 === t.result && t.preventDefault()); return t.type = h, l || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(m.pop(), e) || !X(r) || p && v(r[h]) && !y(r) && ((a = r[p]) && (r[p] = null), k.event.triggered = h, t.isPropagationStopped() && f.addEventListener(h, Se), r[h](), t.isPropagationStopped() && f.removeEventListener(h, Se), k.event.triggered = void 0, a && (r[p] = a)), t.result } }, simulate: function(t, e, o) { var r = k.extend(new k.Event, o, { type: t, isSimulated: !0 });
                    k.event.trigger(r, null, e) } }), k.fn.extend({ trigger: function(t, e) { return this.each((function() { k.event.trigger(t, e, this) })) }, triggerHandler: function(t, e) { var o = this[0]; if (o) return k.event.trigger(t, e, o, !0) } }), b.focusin || k.each({ focus: "focusin", blur: "focusout" }, (function(t, e) { var o = function(t) { k.event.simulate(e, t.target, k.event.fix(t)) };
                k.event.special[e] = { setup: function() { var r = this.ownerDocument || this,
                            l = Z.access(r, e);
                        l || r.addEventListener(t, o, !0), Z.access(r, e, (l || 0) + 1) }, teardown: function() { var r = this.ownerDocument || this,
                            l = Z.access(r, e) - 1;
                        l ? Z.access(r, e, l) : (r.removeEventListener(t, o, !0), Z.remove(r, e)) } } })); var Te = o.location,
                Ce = Date.now(),
                Oe = /\?/;
            k.parseXML = function(t) { var e; if (!t || "string" != typeof t) return null; try { e = (new o.DOMParser).parseFromString(t, "text/xml") } catch (t) { e = void 0 } return e && !e.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + t), e }; var Ne = /\[\]$/,
                Pe = /\r?\n/g,
                je = /^(?:submit|button|image|reset|file)$/i,
                Ae = /^(?:input|select|textarea|keygen)/i;

            function De(t, e, o, r) { var l; if (Array.isArray(e)) k.each(e, (function(e, l) { o || Ne.test(t) ? r(t, l) : De(t + "[" + ("object" == typeof l && null != l ? e : "") + "]", l, o, r) }));
                else if (o || "object" !== _(e)) r(t, e);
                else
                    for (l in e) De(t + "[" + l + "]", e[l], o, r) }
            k.param = function(t, e) { var o, r = [],
                    l = function(t, e) { var o = v(e) ? e() : e;
                        r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == o ? "" : o) }; if (null == t) return ""; if (Array.isArray(t) || t.jquery && !k.isPlainObject(t)) k.each(t, (function() { l(this.name, this.value) }));
                else
                    for (o in t) De(o, t[o], e, l); return r.join("&") }, k.fn.extend({ serialize: function() { return k.param(this.serializeArray()) }, serializeArray: function() { return this.map((function() { var t = k.prop(this, "elements"); return t ? k.makeArray(t) : this })).filter((function() { var t = this.type; return this.name && !k(this).is(":disabled") && Ae.test(this.nodeName) && !je.test(t) && (this.checked || !mt.test(t)) })).map((function(t, e) { var o = k(this).val(); return null == o ? null : Array.isArray(o) ? k.map(o, (function(t) { return { name: e.name, value: t.replace(Pe, "\r\n") } })) : { name: e.name, value: o.replace(Pe, "\r\n") } })).get() } }); var Ie = /%20/g,
                Me = /#.*$/,
                Re = /([?&])_=[^&]*/,
                Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                ze = /^(?:GET|HEAD)$/,
                Fe = /^\/\//,
                Be = {},
                Ue = {},
                qe = "*/".concat("*"),
                He = i.createElement("a");

            function We(t) { return function(e, o) { "string" != typeof e && (o = e, e = "*"); var r, l = 0,
                        n = e.toLowerCase().match(z) || []; if (v(o))
                        for (; r = n[l++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(o)) : (t[r] = t[r] || []).push(o) } }

            function Ve(t, e, o, r) { var l = {},
                    n = t === Ue;

                function i(c) { var a; return l[c] = !0, k.each(t[c] || [], (function(t, c) { var s = c(e, o, r); return "string" != typeof s || n || l[s] ? n ? !(a = s) : void 0 : (e.dataTypes.unshift(s), i(s), !1) })), a } return i(e.dataTypes[0]) || !l["*"] && i("*") }

            function Ye(t, e) { var o, r, l = k.ajaxSettings.flatOptions || {}; for (o in e) void 0 !== e[o] && ((l[o] ? t : r || (r = {}))[o] = e[o]); return r && k.extend(!0, t, r), t }
            He.href = Te.href, k.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Te.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Te.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": qe, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(t, e) { return e ? Ye(Ye(t, k.ajaxSettings), e) : Ye(k.ajaxSettings, t) }, ajaxPrefilter: We(Be), ajaxTransport: We(Ue), ajax: function(t, e) { "object" == typeof t && (e = t, t = void 0), e = e || {}; var r, l, n, c, a, s, p, u, d, f, g = k.ajaxSetup({}, e),
                        m = g.context || g,
                        h = g.context && (m.nodeType || m.jquery) ? k(m) : k.event,
                        b = k.Deferred(),
                        v = k.Callbacks("once memory"),
                        y = g.statusCode || {},
                        x = {},
                        w = {},
                        _ = "canceled",
                        E = { readyState: 0, getResponseHeader: function(t) { var e; if (p) { if (!c)
                                        for (c = {}; e = Le.exec(n);) c[e[1].toLowerCase() + " "] = (c[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                    e = c[t.toLowerCase() + " "] } return null == e ? null : e.join(", ") }, getAllResponseHeaders: function() { return p ? n : null }, setRequestHeader: function(t, e) { return null == p && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this }, overrideMimeType: function(t) { return null == p && (g.mimeType = t), this }, statusCode: function(t) { var e; if (t)
                                    if (p) E.always(t[E.status]);
                                    else
                                        for (e in t) y[e] = [y[e], t[e]];
                                return this }, abort: function(t) { var e = t || _; return r && r.abort(e), S(0, e), this } }; if (b.promise(E), g.url = ((t || g.url || Te.href) + "").replace(Fe, Te.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(z) || [""], null == g.crossDomain) { s = i.createElement("a"); try { s.href = g.url, s.href = s.href, g.crossDomain = He.protocol + "//" + He.host != s.protocol + "//" + s.host } catch (t) { g.crossDomain = !0 } } if (g.data && g.processData && "string" != typeof g.data && (g.data = k.param(g.data, g.traditional)), Ve(Be, g, e, E), p) return E; for (d in (u = k.event && g.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !ze.test(g.type), l = g.url.replace(Me, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Ie, "+")) : (f = g.url.slice(l.length), g.data && (g.processData || "string" == typeof g.data) && (l += (Oe.test(l) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (l = l.replace(Re, "$1"), f = (Oe.test(l) ? "&" : "?") + "_=" + Ce++ + f), g.url = l + f), g.ifModified && (k.lastModified[l] && E.setRequestHeader("If-Modified-Since", k.lastModified[l]), k.etag[l] && E.setRequestHeader("If-None-Match", k.etag[l])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && E.setRequestHeader("Content-Type", g.contentType), E.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : g.accepts["*"]), g.headers) E.setRequestHeader(d, g.headers[d]); if (g.beforeSend && (!1 === g.beforeSend.call(m, E, g) || p)) return E.abort(); if (_ = "abort", v.add(g.complete), E.done(g.success), E.fail(g.error), r = Ve(Ue, g, e, E)) { if (E.readyState = 1, u && h.trigger("ajaxSend", [E, g]), p) return E;
                        g.async && g.timeout > 0 && (a = o.setTimeout((function() { E.abort("timeout") }), g.timeout)); try { p = !1, r.send(x, S) } catch (t) { if (p) throw t;
                            S(-1, t) } } else S(-1, "No Transport");

                    function S(t, e, i, c) { var s, d, f, x, w, _ = e;
                        p || (p = !0, a && o.clearTimeout(a), r = void 0, n = c || "", E.readyState = t > 0 ? 4 : 0, s = t >= 200 && t < 300 || 304 === t, i && (x = function(t, e, o) { for (var r, l, n, i, c = t.contents, a = t.dataTypes;
                                "*" === a[0];) a.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type")); if (r)
                                for (l in c)
                                    if (c[l] && c[l].test(r)) { a.unshift(l); break }
                            if (a[0] in o) n = a[0];
                            else { for (l in o) { if (!a[0] || t.converters[l + " " + a[0]]) { n = l; break }
                                    i || (i = l) }
                                n = n || i } if (n) return n !== a[0] && a.unshift(n), o[n] }(g, E, i)), x = function(t, e, o, r) { var l, n, i, c, a, s = {},
                                p = t.dataTypes.slice(); if (p[1])
                                for (i in t.converters) s[i.toLowerCase()] = t.converters[i]; for (n = p.shift(); n;)
                                if (t.responseFields[n] && (o[t.responseFields[n]] = e), !a && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), a = n, n = p.shift())
                                    if ("*" === n) n = a;
                                    else if ("*" !== a && a !== n) { if (!(i = s[a + " " + n] || s["* " + n]))
                                    for (l in s)
                                        if ((c = l.split(" "))[1] === n && (i = s[a + " " + c[0]] || s["* " + c[0]])) {!0 === i ? i = s[l] : !0 !== s[l] && (n = c[0], p.unshift(c[1])); break }
                                if (!0 !== i)
                                    if (i && t.throws) e = i(e);
                                    else try { e = i(e) } catch (t) { return { state: "parsererror", error: i ? t : "No conversion from " + a + " to " + n } } } return { state: "success", data: e } }(g, x, E, s), s ? (g.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (k.lastModified[l] = w), (w = E.getResponseHeader("etag")) && (k.etag[l] = w)), 204 === t || "HEAD" === g.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = x.state, d = x.data, s = !(f = x.error))) : (f = _, !t && _ || (_ = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (e || _) + "", s ? b.resolveWith(m, [d, _, E]) : b.rejectWith(m, [E, _, f]), E.statusCode(y), y = void 0, u && h.trigger(s ? "ajaxSuccess" : "ajaxError", [E, g, s ? d : f]), v.fireWith(m, [E, _]), u && (h.trigger("ajaxComplete", [E, g]), --k.active || k.event.trigger("ajaxStop"))) } return E }, getJSON: function(t, e, o) { return k.get(t, e, o, "json") }, getScript: function(t, e) { return k.get(t, void 0, e, "script") } }), k.each(["get", "post"], (function(t, e) { k[e] = function(t, o, r, l) { return v(o) && (l = l || r, r = o, o = void 0), k.ajax(k.extend({ url: t, type: e, dataType: l, data: o, success: r }, k.isPlainObject(t) && t)) } })), k._evalUrl = function(t, e) { return k.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(t) { k.globalEval(t, e) } }) }, k.fn.extend({ wrapAll: function(t) { var e; return this[0] && (v(t) && (t = t.call(this[0])), e = k(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t })).append(this)), this }, wrapInner: function(t) { return v(t) ? this.each((function(e) { k(this).wrapInner(t.call(this, e)) })) : this.each((function() { var e = k(this),
                            o = e.contents();
                        o.length ? o.wrapAll(t) : e.append(t) })) }, wrap: function(t) { var e = v(t); return this.each((function(o) { k(this).wrapAll(e ? t.call(this, o) : t) })) }, unwrap: function(t) { return this.parent(t).not("body").each((function() { k(this).replaceWith(this.childNodes) })), this } }), k.expr.pseudos.hidden = function(t) { return !k.expr.pseudos.visible(t) }, k.expr.pseudos.visible = function(t) { return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) }, k.ajaxSettings.xhr = function() { try { return new o.XMLHttpRequest } catch (t) {} }; var Ke = { 0: 200, 1223: 204 },
                $e = k.ajaxSettings.xhr();
            b.cors = !!$e && "withCredentials" in $e, b.ajax = $e = !!$e, k.ajaxTransport((function(t) { var e, r; if (b.cors || $e && !t.crossDomain) return { send: function(l, n) { var i, c = t.xhr(); if (c.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (i in t.xhrFields) c[i] = t.xhrFields[i]; for (i in t.mimeType && c.overrideMimeType && c.overrideMimeType(t.mimeType), t.crossDomain || l["X-Requested-With"] || (l["X-Requested-With"] = "XMLHttpRequest"), l) c.setRequestHeader(i, l[i]);
                        e = function(t) { return function() { e && (e = r = c.onload = c.onerror = c.onabort = c.ontimeout = c.onreadystatechange = null, "abort" === t ? c.abort() : "error" === t ? "number" != typeof c.status ? n(0, "error") : n(c.status, c.statusText) : n(Ke[c.status] || c.status, c.statusText, "text" !== (c.responseType || "text") || "string" != typeof c.responseText ? { binary: c.response } : { text: c.responseText }, c.getAllResponseHeaders())) } }, c.onload = e(), r = c.onerror = c.ontimeout = e("error"), void 0 !== c.onabort ? c.onabort = r : c.onreadystatechange = function() { 4 === c.readyState && o.setTimeout((function() { e && r() })) }, e = e("abort"); try { c.send(t.hasContent && t.data || null) } catch (t) { if (e) throw t } }, abort: function() { e && e() } } })), k.ajaxPrefilter((function(t) { t.crossDomain && (t.contents.script = !1) })), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) { return k.globalEval(t), t } } }), k.ajaxPrefilter("script", (function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") })), k.ajaxTransport("script", (function(t) { var e, o; if (t.crossDomain || t.scriptAttrs) return { send: function(r, l) { e = k("<script>").attr(t.scriptAttrs || {}).prop({ charset: t.scriptCharset, src: t.url }).on("load error", o = function(t) { e.remove(), o = null, t && l("error" === t.type ? 404 : 200, t.type) }), i.head.appendChild(e[0]) }, abort: function() { o && o() } } })); var Qe, Xe = [],
                Ge = /(=)\?(?=&|$)|\?\?/;
            k.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Xe.pop() || k.expando + "_" + Ce++; return this[t] = !0, t } }), k.ajaxPrefilter("json jsonp", (function(t, e, r) { var l, n, i, c = !1 !== t.jsonp && (Ge.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(t.data) && "data"); if (c || "jsonp" === t.dataTypes[0]) return l = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, c ? t[c] = t[c].replace(Ge, "$1" + l) : !1 !== t.jsonp && (t.url += (Oe.test(t.url) ? "&" : "?") + t.jsonp + "=" + l), t.converters["script json"] = function() { return i || k.error(l + " was not called"), i[0] }, t.dataTypes[0] = "json", n = o[l], o[l] = function() { i = arguments }, r.always((function() { void 0 === n ? k(o).removeProp(l) : o[l] = n, t[l] && (t.jsonpCallback = e.jsonpCallback, Xe.push(l)), i && v(n) && n(i[0]), i = n = void 0 })), "script" })), b.createHTMLDocument = ((Qe = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qe.childNodes.length), k.parseHTML = function(t, e, o) { return "string" != typeof t ? [] : ("boolean" == typeof e && (o = e, e = !1), e || (b.createHTMLDocument ? ((r = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(r)) : e = i), n = !o && [], (l = j.exec(t)) ? [e.createElement(l[1])] : (l = Et([t], e, n), n && n.length && k(n).remove(), k.merge([], l.childNodes))); var r, l, n }, k.fn.load = function(t, e, o) { var r, l, n, i = this,
                    c = t.indexOf(" "); return c > -1 && (r = xe(t.slice(c)), t = t.slice(0, c)), v(e) ? (o = e, e = void 0) : e && "object" == typeof e && (l = "POST"), i.length > 0 && k.ajax({ url: t, type: l || "GET", dataType: "html", data: e }).done((function(t) { n = arguments, i.html(r ? k("<div>").append(k.parseHTML(t)).find(r) : t) })).always(o && function(t, e) { i.each((function() { o.apply(this, n || [t.responseText, e, t]) })) }), this }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) { k.fn[e] = function(t) { return this.on(e, t) } })), k.expr.pseudos.animated = function(t) { return k.grep(k.timers, (function(e) { return t === e.elem })).length }, k.offset = { setOffset: function(t, e, o) { var r, l, n, i, c, a, s = k.css(t, "position"),
                        p = k(t),
                        u = {}; "static" === s && (t.style.position = "relative"), c = p.offset(), n = k.css(t, "top"), a = k.css(t, "left"), ("absolute" === s || "fixed" === s) && (n + a).indexOf("auto") > -1 ? (i = (r = p.position()).top, l = r.left) : (i = parseFloat(n) || 0, l = parseFloat(a) || 0), v(e) && (e = e.call(t, o, k.extend({}, c))), null != e.top && (u.top = e.top - c.top + i), null != e.left && (u.left = e.left - c.left + l), "using" in e ? e.using.call(t, u) : p.css(u) } }, k.fn.extend({ offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each((function(e) { k.offset.setOffset(this, t, e) })); var e, o, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), o = r.ownerDocument.defaultView, { top: e.top + o.pageYOffset, left: e.left + o.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var t, e, o, r = this[0],
                            l = { top: 0, left: 0 }; if ("fixed" === k.css(r, "position")) e = r.getBoundingClientRect();
                        else { for (e = this.offset(), o = r.ownerDocument, t = r.offsetParent || o.documentElement; t && (t === o.body || t === o.documentElement) && "static" === k.css(t, "position");) t = t.parentNode;
                            t && t !== r && 1 === t.nodeType && ((l = k(t).offset()).top += k.css(t, "borderTopWidth", !0), l.left += k.css(t, "borderLeftWidth", !0)) } return { top: e.top - l.top - k.css(r, "marginTop", !0), left: e.left - l.left - k.css(r, "marginLeft", !0) } } }, offsetParent: function() { return this.map((function() { for (var t = this.offsetParent; t && "static" === k.css(t, "position");) t = t.offsetParent; return t || it })) } }), k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, (function(t, e) { var o = "pageYOffset" === e;
                k.fn[t] = function(r) { return V(this, (function(t, r, l) { var n; if (y(t) ? n = t : 9 === t.nodeType && (n = t.defaultView), void 0 === l) return n ? n[e] : t[r];
                        n ? n.scrollTo(o ? n.pageXOffset : l, o ? l : n.pageYOffset) : t[r] = l }), t, r, arguments.length) } })), k.each(["top", "left"], (function(t, e) { k.cssHooks[e] = $t(b.pixelPosition, (function(t, o) { if (o) return o = Kt(t, e), Wt.test(o) ? k(t).position()[e] + "px" : o })) })), k.each({ Height: "height", Width: "width" }, (function(t, e) { k.each({ padding: "inner" + t, content: e, "": "outer" + t }, (function(o, r) { k.fn[r] = function(l, n) { var i = arguments.length && (o || "boolean" != typeof l),
                            c = o || (!0 === l || !0 === n ? "margin" : "border"); return V(this, (function(e, o, l) { var n; return y(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + t], n["scroll" + t], e.body["offset" + t], n["offset" + t], n["client" + t])) : void 0 === l ? k.css(e, o, c) : k.style(e, o, l, c) }), e, i ? l : void 0, i) } })) })), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) { k.fn[e] = function(t, o) { return arguments.length > 0 ? this.on(e, null, t, o) : this.trigger(e) } })), k.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) } }), k.fn.extend({ bind: function(t, e, o) { return this.on(t, null, e, o) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, o, r) { return this.on(e, t, o, r) }, undelegate: function(t, e, o) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", o) } }), k.proxy = function(t, e) { var o, r, l; if ("string" == typeof e && (o = t[e], e = t, t = o), v(t)) return r = a.call(arguments, 2), (l = function() { return t.apply(e || this, r.concat(a.call(arguments))) }).guid = t.guid = t.guid || k.guid++, l }, k.holdReady = function(t) { t ? k.readyWait++ : k.ready(!0) }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = P, k.isFunction = v, k.isWindow = y, k.camelCase = Q, k.type = _, k.now = Date.now, k.isNumeric = function(t) { var e = k.type(t); return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t)) }, void 0 === (r = function() { return k }.apply(e, [])) || (t.exports = r); var Ze = o.jQuery,
                Je = o.$; return k.noConflict = function(t) { return o.$ === k && (o.$ = Je), t && o.jQuery === k && (o.jQuery = Ze), k }, l || (o.jQuery = o.$ = k), k })) }, function(t, e, o) { "use strict";
        o.r(e),
            function(t) { for (var o = "undefined" != typeof window && "undefined" != typeof document, r = ["Edge", "Trident", "Firefox"], l = 0, n = 0; n < r.length; n += 1)
                    if (o && navigator.userAgent.indexOf(r[n]) >= 0) { l = 1; break }
                var i = o && window.Promise ? function(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then((function() { e = !1, t() }))) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout((function() { e = !1, t() }), l)) } };

                function c(t) { return t && "[object Function]" === {}.toString.call(t) }

                function a(t, e) { if (1 !== t.nodeType) return []; var o = t.ownerDocument.defaultView.getComputedStyle(t, null); return e ? o[e] : o }

                function s(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

                function p(t) { if (!t) return document.body; switch (t.nodeName) {
                        case "HTML":
                        case "BODY":
                            return t.ownerDocument.body;
                        case "#document":
                            return t.body } var e = a(t),
                        o = e.overflow,
                        r = e.overflowX,
                        l = e.overflowY; return /(auto|scroll|overlay)/.test(o + l + r) ? t : p(s(t)) } var u = o && !(!window.MSInputMethodContext || !document.documentMode),
                    d = o && /MSIE 10/.test(navigator.userAgent);

                function f(t) { return 11 === t ? u : 10 === t ? d : u || d }

                function g(t) { if (!t) return document.documentElement; for (var e = f(10) ? document.body : null, o = t.offsetParent || null; o === e && t.nextElementSibling;) o = (t = t.nextElementSibling).offsetParent; var r = o && o.nodeName; return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(o.nodeName) && "static" === a(o, "position") ? g(o) : o : t ? t.ownerDocument.documentElement : document.documentElement }

                function m(t) { return null !== t.parentNode ? m(t.parentNode) : t }

                function h(t, e) { if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement; var o = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                        r = o ? t : e,
                        l = o ? e : t,
                        n = document.createRange();
                    n.setStart(r, 0), n.setEnd(l, 0); var i, c, a = n.commonAncestorContainer; if (t !== a && e !== a || r.contains(l)) return "BODY" === (c = (i = a).nodeName) || "HTML" !== c && g(i.firstElementChild) !== i ? g(a) : a; var s = m(t); return s.host ? h(s.host, e) : h(t, m(e).host) }

                function b(t) { var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                        o = t.nodeName; if ("BODY" === o || "HTML" === o) { var r = t.ownerDocument.documentElement; return (t.ownerDocument.scrollingElement || r)[e] } return t[e] }

                function v(t, e) { var o = "x" === e ? "Left" : "Top",
                        r = "Left" === o ? "Right" : "Bottom"; return parseFloat(t["border" + o + "Width"], 10) + parseFloat(t["border" + r + "Width"], 10) }

                function y(t, e, o, r) { return Math.max(e["offset" + t], e["scroll" + t], o["client" + t], o["offset" + t], o["scroll" + t], f(10) ? parseInt(o["offset" + t]) + parseInt(r["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0) }

                function x(t) { var e = t.body,
                        o = t.documentElement,
                        r = f(10) && getComputedStyle(o); return { height: y("Height", e, o, r), width: y("Width", e, o, r) } } var w = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") },
                    _ = function() {
                        function t(t, e) { for (var o = 0; o < e.length; o++) { var r = e[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function(e, o, r) { return o && t(e.prototype, o), r && t(e, r), e } }(),
                    k = function(t, e, o) { return e in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = o, t },
                    E = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var o = arguments[e]; for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]) } return t };

                function S(t) { return E({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

                function T(t) { var e = {}; try { if (f(10)) { e = t.getBoundingClientRect(); var o = b(t, "top"),
                                r = b(t, "left");
                            e.top += o, e.left += r, e.bottom += o, e.right += r } else e = t.getBoundingClientRect() } catch (t) {} var l = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
                        n = "HTML" === t.nodeName ? x(t.ownerDocument) : {},
                        i = n.width || t.clientWidth || l.right - l.left,
                        c = n.height || t.clientHeight || l.bottom - l.top,
                        s = t.offsetWidth - i,
                        p = t.offsetHeight - c; if (s || p) { var u = a(t);
                        s -= v(u, "x"), p -= v(u, "y"), l.width -= s, l.height -= p } return S(l) }

                function C(t, e) { var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = f(10),
                        l = "HTML" === e.nodeName,
                        n = T(t),
                        i = T(e),
                        c = p(t),
                        s = a(e),
                        u = parseFloat(s.borderTopWidth, 10),
                        d = parseFloat(s.borderLeftWidth, 10);
                    o && l && (i.top = Math.max(i.top, 0), i.left = Math.max(i.left, 0)); var g = S({ top: n.top - i.top - u, left: n.left - i.left - d, width: n.width, height: n.height }); if (g.marginTop = 0, g.marginLeft = 0, !r && l) { var m = parseFloat(s.marginTop, 10),
                            h = parseFloat(s.marginLeft, 10);
                        g.top -= u - m, g.bottom -= u - m, g.left -= d - h, g.right -= d - h, g.marginTop = m, g.marginLeft = h } return (r && !o ? e.contains(c) : e === c && "BODY" !== c.nodeName) && (g = function(t, e) { var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = b(e, "top"),
                            l = b(e, "left"),
                            n = o ? -1 : 1; return t.top += r * n, t.bottom += r * n, t.left += l * n, t.right += l * n, t }(g, e)), g }

                function O(t) { if (!t || !t.parentElement || f()) return document.documentElement; for (var e = t.parentElement; e && "none" === a(e, "transform");) e = e.parentElement; return e || document.documentElement }

                function N(t, e, o, r) { var l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        n = { top: 0, left: 0 },
                        i = l ? O(t) : h(t, e); if ("viewport" === r) n = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            o = t.ownerDocument.documentElement,
                            r = C(t, o),
                            l = Math.max(o.clientWidth, window.innerWidth || 0),
                            n = Math.max(o.clientHeight, window.innerHeight || 0),
                            i = e ? 0 : b(o),
                            c = e ? 0 : b(o, "left"); return S({ top: i - r.top + r.marginTop, left: c - r.left + r.marginLeft, width: l, height: n }) }(i, l);
                    else { var c = void 0; "scrollParent" === r ? "BODY" === (c = p(s(e))).nodeName && (c = t.ownerDocument.documentElement) : c = "window" === r ? t.ownerDocument.documentElement : r; var u = C(c, i, l); if ("HTML" !== c.nodeName || function t(e) { var o = e.nodeName; if ("BODY" === o || "HTML" === o) return !1; if ("fixed" === a(e, "position")) return !0; var r = s(e); return !!r && t(r) }(i)) n = u;
                        else { var d = x(t.ownerDocument),
                                f = d.height,
                                g = d.width;
                            n.top += u.top - u.marginTop, n.bottom = f + u.top, n.left += u.left - u.marginLeft, n.right = g + u.left } } var m = "number" == typeof(o = o || 0); return n.left += m ? o : o.left || 0, n.top += m ? o : o.top || 0, n.right -= m ? o : o.right || 0, n.bottom -= m ? o : o.bottom || 0, n }

                function P(t, e, o, r, l) { var n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === t.indexOf("auto")) return t; var i = N(o, r, n, l),
                        c = { top: { width: i.width, height: e.top - i.top }, right: { width: i.right - e.right, height: i.height }, bottom: { width: i.width, height: i.bottom - e.bottom }, left: { width: e.left - i.left, height: i.height } },
                        a = Object.keys(c).map((function(t) { return E({ key: t }, c[t], { area: (e = c[t], e.width * e.height) }); var e })).sort((function(t, e) { return e.area - t.area })),
                        s = a.filter((function(t) { var e = t.width,
                                r = t.height; return e >= o.clientWidth && r >= o.clientHeight })),
                        p = s.length > 0 ? s[0].key : a[0].key,
                        u = t.split("-")[1]; return p + (u ? "-" + u : "") }

                function j(t, e, o) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; return C(o, r ? O(e) : h(e, o), r) }

                function A(t) { var e = t.ownerDocument.defaultView.getComputedStyle(t),
                        o = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                        r = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0); return { width: t.offsetWidth + r, height: t.offsetHeight + o } }

                function D(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, (function(t) { return e[t] })) }

                function I(t, e, o) { o = o.split("-")[0]; var r = A(t),
                        l = { width: r.width, height: r.height },
                        n = -1 !== ["right", "left"].indexOf(o),
                        i = n ? "top" : "left",
                        c = n ? "left" : "top",
                        a = n ? "height" : "width",
                        s = n ? "width" : "height"; return l[i] = e[i] + e[a] / 2 - r[a] / 2, l[c] = o === c ? e[c] - r[s] : e[D(c)], l }

                function M(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

                function R(t, e, o) { return (void 0 === o ? t : t.slice(0, function(t, e, o) { if (Array.prototype.findIndex) return t.findIndex((function(t) { return t[e] === o })); var r = M(t, (function(t) { return t[e] === o })); return t.indexOf(r) }(t, "name", o))).forEach((function(t) { t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!"); var o = t.function || t.fn;
                        t.enabled && c(o) && (e.offsets.popper = S(e.offsets.popper), e.offsets.reference = S(e.offsets.reference), e = o(e, t)) })), e }

                function L() { if (!this.state.isDestroyed) { var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                        t.offsets.reference = j(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = P(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = I(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = R(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t)) } }

                function z(t, e) { return t.some((function(t) { var o = t.name; return t.enabled && o === e })) }

                function F(t) { for (var e = [!1, "ms", "Webkit", "Moz", "O"], o = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length; r++) { var l = e[r],
                            n = l ? "" + l + o : t; if (void 0 !== document.body.style[n]) return n } return null }

                function B() { return this.state.isDestroyed = !0, z(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[F("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

                function U(t) { var e = t.ownerDocument; return e ? e.defaultView : window }

                function q(t, e, o, r) { o.updateBound = r, U(t).addEventListener("resize", o.updateBound, { passive: !0 }); var l = p(t); return function t(e, o, r, l) { var n = "BODY" === e.nodeName,
                            i = n ? e.ownerDocument.defaultView : e;
                        i.addEventListener(o, r, { passive: !0 }), n || t(p(i.parentNode), o, r, l), l.push(i) }(l, "scroll", o.updateBound, o.scrollParents), o.scrollElement = l, o.eventsEnabled = !0, o }

                function H() { this.state.eventsEnabled || (this.state = q(this.reference, this.options, this.state, this.scheduleUpdate)) }

                function W() { var t, e;
                    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, U(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function(t) { t.removeEventListener("scroll", e.updateBound) })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e)) }

                function V(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

                function Y(t, e) { Object.keys(e).forEach((function(o) { var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) && V(e[o]) && (r = "px"), t.style[o] = e[o] + r })) } var K = o && /Firefox/i.test(navigator.userAgent);

                function $(t, e, o) { var r = M(t, (function(t) { return t.name === e })),
                        l = !!r && t.some((function(t) { return t.name === o && t.enabled && t.order < r.order })); if (!l) { var n = "`" + e + "`",
                            i = "`" + o + "`";
                        console.warn(i + " modifier is required by " + n + " modifier in order to work, be sure to include it before " + n + "!") } return l } var Q = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                    X = Q.slice(3);

                function G(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        o = X.indexOf(t),
                        r = X.slice(o + 1).concat(X.slice(0, o)); return e ? r.reverse() : r } var Z = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };

                function J(t, e, o, r) { var l = [0, 0],
                        n = -1 !== ["right", "left"].indexOf(r),
                        i = t.split(/(\+|\-)/).map((function(t) { return t.trim() })),
                        c = i.indexOf(M(i, (function(t) { return -1 !== t.search(/,|\s/) })));
                    i[c] && -1 === i[c].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."); var a = /\s*,\s*|\s+/,
                        s = -1 !== c ? [i.slice(0, c).concat([i[c].split(a)[0]]), [i[c].split(a)[1]].concat(i.slice(c + 1))] : [i]; return (s = s.map((function(t, r) { var l = (1 === r ? !n : n) ? "height" : "width",
                            i = !1; return t.reduce((function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e) }), []).map((function(t) { return function(t, e, o, r) { var l = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    n = +l[1],
                                    i = l[2]; if (!n) return t; if (0 === i.indexOf("%")) { var c = void 0; switch (i) {
                                        case "%p":
                                            c = o; break;
                                        case "%":
                                        case "%r":
                                        default:
                                            c = r } return S(c)[e] / 100 * n } if ("vh" === i || "vw" === i) { return ("vh" === i ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * n } return n }(t, l, e, o) })) }))).forEach((function(t, e) { t.forEach((function(o, r) { V(o) && (l[e] += o * ("-" === t[r - 1] ? -1 : 1)) })) })), l } var tt = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function(t) { var e = t.placement,
                                        o = e.split("-")[0],
                                        r = e.split("-")[1]; if (r) { var l = t.offsets,
                                            n = l.reference,
                                            i = l.popper,
                                            c = -1 !== ["bottom", "top"].indexOf(o),
                                            a = c ? "left" : "top",
                                            s = c ? "width" : "height",
                                            p = { start: k({}, a, n[a]), end: k({}, a, n[a] + n[s] - i[s]) };
                                        t.offsets.popper = E({}, i, p[r]) } return t } }, offset: { order: 200, enabled: !0, fn: function(t, e) { var o = e.offset,
                                        r = t.placement,
                                        l = t.offsets,
                                        n = l.popper,
                                        i = l.reference,
                                        c = r.split("-")[0],
                                        a = void 0; return a = V(+o) ? [+o, 0] : J(o, n, i, c), "left" === c ? (n.top += a[0], n.left -= a[1]) : "right" === c ? (n.top += a[0], n.left += a[1]) : "top" === c ? (n.left += a[0], n.top -= a[1]) : "bottom" === c && (n.left += a[0], n.top += a[1]), t.popper = n, t }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(t, e) { var o = e.boundariesElement || g(t.instance.popper);
                                    t.instance.reference === o && (o = g(o)); var r = F("transform"),
                                        l = t.instance.popper.style,
                                        n = l.top,
                                        i = l.left,
                                        c = l[r];
                                    l.top = "", l.left = "", l[r] = ""; var a = N(t.instance.popper, t.instance.reference, e.padding, o, t.positionFixed);
                                    l.top = n, l.left = i, l[r] = c, e.boundaries = a; var s = e.priority,
                                        p = t.offsets.popper,
                                        u = { primary: function(t) { var o = p[t]; return p[t] < a[t] && !e.escapeWithReference && (o = Math.max(p[t], a[t])), k({}, t, o) }, secondary: function(t) { var o = "right" === t ? "left" : "top",
                                                    r = p[o]; return p[t] > a[t] && !e.escapeWithReference && (r = Math.min(p[o], a[t] - ("right" === t ? p.width : p.height))), k({}, o, r) } }; return s.forEach((function(t) { var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                        p = E({}, p, u[e](t)) })), t.offsets.popper = p, t }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function(t) { var e = t.offsets,
                                        o = e.popper,
                                        r = e.reference,
                                        l = t.placement.split("-")[0],
                                        n = Math.floor,
                                        i = -1 !== ["top", "bottom"].indexOf(l),
                                        c = i ? "right" : "bottom",
                                        a = i ? "left" : "top",
                                        s = i ? "width" : "height"; return o[c] < n(r[a]) && (t.offsets.popper[a] = n(r[a]) - o[s]), o[a] > n(r[c]) && (t.offsets.popper[a] = n(r[c])), t } }, arrow: { order: 500, enabled: !0, fn: function(t, e) { var o; if (!$(t.instance.modifiers, "arrow", "keepTogether")) return t; var r = e.element; if ("string" == typeof r) { if (!(r = t.instance.popper.querySelector(r))) return t } else if (!t.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t; var l = t.placement.split("-")[0],
                                        n = t.offsets,
                                        i = n.popper,
                                        c = n.reference,
                                        s = -1 !== ["left", "right"].indexOf(l),
                                        p = s ? "height" : "width",
                                        u = s ? "Top" : "Left",
                                        d = u.toLowerCase(),
                                        f = s ? "left" : "top",
                                        g = s ? "bottom" : "right",
                                        m = A(r)[p];
                                    c[g] - m < i[d] && (t.offsets.popper[d] -= i[d] - (c[g] - m)), c[d] + m > i[g] && (t.offsets.popper[d] += c[d] + m - i[g]), t.offsets.popper = S(t.offsets.popper); var h = c[d] + c[p] / 2 - m / 2,
                                        b = a(t.instance.popper),
                                        v = parseFloat(b["margin" + u], 10),
                                        y = parseFloat(b["border" + u + "Width"], 10),
                                        x = h - t.offsets.popper[d] - v - y; return x = Math.max(Math.min(i[p] - m, x), 0), t.arrowElement = r, t.offsets.arrow = (k(o = {}, d, Math.round(x)), k(o, f, ""), o), t }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function(t, e) { if (z(t.instance.modifiers, "inner")) return t; if (t.flipped && t.placement === t.originalPlacement) return t; var o = N(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                                        r = t.placement.split("-")[0],
                                        l = D(r),
                                        n = t.placement.split("-")[1] || "",
                                        i = []; switch (e.behavior) {
                                        case Z.FLIP:
                                            i = [r, l]; break;
                                        case Z.CLOCKWISE:
                                            i = G(r); break;
                                        case Z.COUNTERCLOCKWISE:
                                            i = G(r, !0); break;
                                        default:
                                            i = e.behavior } return i.forEach((function(c, a) { if (r !== c || i.length === a + 1) return t;
                                        r = t.placement.split("-")[0], l = D(r); var s = t.offsets.popper,
                                            p = t.offsets.reference,
                                            u = Math.floor,
                                            d = "left" === r && u(s.right) > u(p.left) || "right" === r && u(s.left) < u(p.right) || "top" === r && u(s.bottom) > u(p.top) || "bottom" === r && u(s.top) < u(p.bottom),
                                            f = u(s.left) < u(o.left),
                                            g = u(s.right) > u(o.right),
                                            m = u(s.top) < u(o.top),
                                            h = u(s.bottom) > u(o.bottom),
                                            b = "left" === r && f || "right" === r && g || "top" === r && m || "bottom" === r && h,
                                            v = -1 !== ["top", "bottom"].indexOf(r),
                                            y = !!e.flipVariations && (v && "start" === n && f || v && "end" === n && g || !v && "start" === n && m || !v && "end" === n && h),
                                            x = !!e.flipVariationsByContent && (v && "start" === n && g || v && "end" === n && f || !v && "start" === n && h || !v && "end" === n && m),
                                            w = y || x;
                                        (d || b || w) && (t.flipped = !0, (d || b) && (r = i[a + 1]), w && (n = function(t) { return "end" === t ? "start" : "start" === t ? "end" : t }(n)), t.placement = r + (n ? "-" + n : ""), t.offsets.popper = E({}, t.offsets.popper, I(t.instance.popper, t.offsets.reference, t.placement)), t = R(t.instance.modifiers, t, "flip")) })), t }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function(t) { var e = t.placement,
                                        o = e.split("-")[0],
                                        r = t.offsets,
                                        l = r.popper,
                                        n = r.reference,
                                        i = -1 !== ["left", "right"].indexOf(o),
                                        c = -1 === ["top", "left"].indexOf(o); return l[i ? "left" : "top"] = n[o] - (c ? l[i ? "width" : "height"] : 0), t.placement = D(e), t.offsets.popper = S(l), t } }, hide: { order: 800, enabled: !0, fn: function(t) { if (!$(t.instance.modifiers, "hide", "preventOverflow")) return t; var e = t.offsets.reference,
                                        o = M(t.instance.modifiers, (function(t) { return "preventOverflow" === t.name })).boundaries; if (e.bottom < o.top || e.left > o.right || e.top > o.bottom || e.right < o.left) { if (!0 === t.hide) return t;
                                        t.hide = !0, t.attributes["x-out-of-boundaries"] = "" } else { if (!1 === t.hide) return t;
                                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1 } return t } }, computeStyle: { order: 850, enabled: !0, fn: function(t, e) { var o = e.x,
                                        r = e.y,
                                        l = t.offsets.popper,
                                        n = M(t.instance.modifiers, (function(t) { return "applyStyle" === t.name })).gpuAcceleration;
                                    void 0 !== n && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"); var i = void 0 !== n ? n : e.gpuAcceleration,
                                        c = g(t.instance.popper),
                                        a = T(c),
                                        s = { position: l.position },
                                        p = function(t, e) { var o = t.offsets,
                                                r = o.popper,
                                                l = o.reference,
                                                n = Math.round,
                                                i = Math.floor,
                                                c = function(t) { return t },
                                                a = n(l.width),
                                                s = n(r.width),
                                                p = -1 !== ["left", "right"].indexOf(t.placement),
                                                u = -1 !== t.placement.indexOf("-"),
                                                d = e ? p || u || a % 2 == s % 2 ? n : i : c,
                                                f = e ? n : c; return { left: d(a % 2 == 1 && s % 2 == 1 && !u && e ? r.left - 1 : r.left), top: f(r.top), bottom: f(r.bottom), right: d(r.right) } }(t, window.devicePixelRatio < 2 || !K),
                                        u = "bottom" === o ? "top" : "bottom",
                                        d = "right" === r ? "left" : "right",
                                        f = F("transform"),
                                        m = void 0,
                                        h = void 0; if (h = "bottom" === u ? "HTML" === c.nodeName ? -c.clientHeight + p.bottom : -a.height + p.bottom : p.top, m = "right" === d ? "HTML" === c.nodeName ? -c.clientWidth + p.right : -a.width + p.right : p.left, i && f) s[f] = "translate3d(" + m + "px, " + h + "px, 0)", s[u] = 0, s[d] = 0, s.willChange = "transform";
                                    else { var b = "bottom" === u ? -1 : 1,
                                            v = "right" === d ? -1 : 1;
                                        s[u] = h * b, s[d] = m * v, s.willChange = u + ", " + d } var y = { "x-placement": t.placement }; return t.attributes = E({}, y, t.attributes), t.styles = E({}, s, t.styles), t.arrowStyles = E({}, t.offsets.arrow, t.arrowStyles), t }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function(t) { var e, o; return Y(t.instance.popper, t.styles), e = t.instance.popper, o = t.attributes, Object.keys(o).forEach((function(t) {!1 !== o[t] ? e.setAttribute(t, o[t]) : e.removeAttribute(t) })), t.arrowElement && Object.keys(t.arrowStyles).length && Y(t.arrowElement, t.arrowStyles), t }, onLoad: function(t, e, o, r, l) { var n = j(l, e, t, o.positionFixed),
                                        i = P(o.placement, n, e, t, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding); return e.setAttribute("x-placement", i), Y(e, { position: o.positionFixed ? "fixed" : "absolute" }), o }, gpuAcceleration: void 0 } } },
                    et = function() {
                        function t(e, o) { var r = this,
                                l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            w(this, t), this.scheduleUpdate = function() { return requestAnimationFrame(r.update) }, this.update = i(this.update.bind(this)), this.options = E({}, t.Defaults, l), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = o && o.jquery ? o[0] : o, this.options.modifiers = {}, Object.keys(E({}, t.Defaults.modifiers, l.modifiers)).forEach((function(e) { r.options.modifiers[e] = E({}, t.Defaults.modifiers[e] || {}, l.modifiers ? l.modifiers[e] : {}) })), this.modifiers = Object.keys(this.options.modifiers).map((function(t) { return E({ name: t }, r.options.modifiers[t]) })).sort((function(t, e) { return t.order - e.order })), this.modifiers.forEach((function(t) { t.enabled && c(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state) })), this.update(); var n = this.options.eventsEnabled;
                            n && this.enableEventListeners(), this.state.eventsEnabled = n } return _(t, [{ key: "update", value: function() { return L.call(this) } }, { key: "destroy", value: function() { return B.call(this) } }, { key: "enableEventListeners", value: function() { return H.call(this) } }, { key: "disableEventListeners", value: function() { return W.call(this) } }]), t }();
                et.Utils = ("undefined" != typeof window ? window : t).PopperUtils, et.placements = Q, et.Defaults = tt, e.default = et }.call(this, o(9)) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(118);
        navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/) && (window.__forceSmoothScrollPolyfill__ = !0), r.polyfill() }, function(t, e, o) {! function() { "use strict";
            t.exports = { polyfill: function() { var t = window,
                        e = document; if (!("scrollBehavior" in e.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) { var o, r = t.HTMLElement || t.Element,
                            l = 468,
                            n = { scroll: t.scroll || t.scrollTo, scrollBy: t.scrollBy, elementScroll: r.prototype.scroll || a, scrollIntoView: r.prototype.scrollIntoView },
                            i = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                            c = (o = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(o) ? 1 : 0);
                        t.scroll = t.scrollTo = function() { void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? m.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset)) }, t.scrollBy = function() { void 0 !== arguments[0] && (s(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : m.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset))) }, r.prototype.scroll = r.prototype.scrollTo = function() { if (void 0 !== arguments[0])
                                if (!0 !== s(arguments[0])) { var t = arguments[0].left,
                                        e = arguments[0].top;
                                    m.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e) } else { if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                    n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop) } }, r.prototype.scrollBy = function() { void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop)) }, r.prototype.scrollIntoView = function() { if (!0 !== s(arguments[0])) { var o = f(this),
                                    r = o.getBoundingClientRect(),
                                    l = this.getBoundingClientRect();
                                o !== e.body ? (m.call(this, o, o.scrollLeft + l.left - r.left, o.scrollTop + l.top - r.top), "fixed" !== t.getComputedStyle(o).position && t.scrollBy({ left: r.left, top: r.top, behavior: "smooth" })) : t.scrollBy({ left: l.left, top: l.top, behavior: "smooth" }) } else n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]) } }

                    function a(t, e) { this.scrollLeft = t, this.scrollTop = e }

                    function s(t) { if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0; if ("object" == typeof t && "smooth" === t.behavior) return !1; throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.") }

                    function p(t, e) { return "Y" === e ? t.clientHeight + c < t.scrollHeight : "X" === e ? t.clientWidth + c < t.scrollWidth : void 0 }

                    function u(e, o) { var r = t.getComputedStyle(e, null)["overflow" + o]; return "auto" === r || "scroll" === r }

                    function d(t) { var e = p(t, "Y") && u(t, "Y"),
                            o = p(t, "X") && u(t, "X"); return e || o }

                    function f(t) { for (; t !== e.body && !1 === d(t);) t = t.parentNode || t.host; return t }

                    function g(e) { var o, r, n, c, a = (i() - e.startTime) / l;
                        c = a = a > 1 ? 1 : a, o = .5 * (1 - Math.cos(Math.PI * c)), r = e.startX + (e.x - e.startX) * o, n = e.startY + (e.y - e.startY) * o, e.method.call(e.scrollable, r, n), r === e.x && n === e.y || t.requestAnimationFrame(g.bind(t, e)) }

                    function m(o, r, l) { var c, s, p, u, d = i();
                        o === e.body ? (c = t, s = t.scrollX || t.pageXOffset, p = t.scrollY || t.pageYOffset, u = n.scroll) : (c = o, s = o.scrollLeft, p = o.scrollTop, u = a), g({ scrollable: c, method: u, startTime: d, startX: s, startY: p, x: r, y: l }) } } } }() }, function(t, e, o) { var r = o(120); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var l = { insert: "head", singleton: !1 };
        o(4)(r, l);
        r.locals && (t.exports = r.locals) }, function(t, e, o) {
        (t.exports = o(3)(!1)).push([t.i, '.tripetto-collector-rolling{/*!\n * Bootstrap v4.3.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */position:absolute;left:0;right:0;top:0;bottom:0;display:flex;margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:0.95rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-image:none;background-position:center center;background-repeat:no-repeat;background-size:auto;-webkit-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0)}.tripetto-collector-rolling :root{--blue: #007bff;--indigo: #6610f2;--purple: #6f42c1;--pink: #e83e8c;--red: #dc3545;--orange: #fd7e14;--yellow: #ffc107;--green: #28a745;--teal: #20c997;--cyan: #17a2b8;--white: #fff;--gray: #6c757d;--gray-dark: #343a40;--primary: #007bff;--secondary: #6c757d;--success: #28a745;--info: #17a2b8;--warning: #ffc107;--danger: #dc3545;--light: #f8f9fa;--dark: #343a40;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}.tripetto-collector-rolling *,.tripetto-collector-rolling *::before,.tripetto-collector-rolling *::after{box-sizing:border-box}.tripetto-collector-rolling html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}.tripetto-collector-rolling article,.tripetto-collector-rolling aside,.tripetto-collector-rolling figcaption,.tripetto-collector-rolling figure,.tripetto-collector-rolling footer,.tripetto-collector-rolling header,.tripetto-collector-rolling hgroup,.tripetto-collector-rolling main,.tripetto-collector-rolling nav,.tripetto-collector-rolling section{display:block}.tripetto-collector-rolling body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}.tripetto-collector-rolling [tabindex="-1"]:focus{outline:0 !important}.tripetto-collector-rolling hr{box-sizing:content-box;height:0;overflow:visible}.tripetto-collector-rolling h1,.tripetto-collector-rolling h2,.tripetto-collector-rolling h3,.tripetto-collector-rolling h4,.tripetto-collector-rolling h5,.tripetto-collector-rolling h6{margin-top:0;margin-bottom:.5rem}.tripetto-collector-rolling p{margin-top:0;margin-bottom:1rem}.tripetto-collector-rolling abbr[title],.tripetto-collector-rolling abbr[data-original-title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.tripetto-collector-rolling address{margin-bottom:1rem;font-style:normal;line-height:inherit}.tripetto-collector-rolling ol,.tripetto-collector-rolling ul,.tripetto-collector-rolling dl{margin-top:0;margin-bottom:1rem}.tripetto-collector-rolling ol ol,.tripetto-collector-rolling ul ul,.tripetto-collector-rolling ol ul,.tripetto-collector-rolling ul ol{margin-bottom:0}.tripetto-collector-rolling dt{font-weight:700}.tripetto-collector-rolling dd{margin-bottom:.5rem;margin-left:0}.tripetto-collector-rolling blockquote{margin:0 0 1rem}.tripetto-collector-rolling b,.tripetto-collector-rolling strong{font-weight:bolder}.tripetto-collector-rolling small{font-size:80%}.tripetto-collector-rolling sub,.tripetto-collector-rolling sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}.tripetto-collector-rolling sub{bottom:-.25em}.tripetto-collector-rolling sup{top:-.5em}.tripetto-collector-rolling a{color:#007bff;text-decoration:none;background-color:transparent}.tripetto-collector-rolling a:hover{color:#0056b3;text-decoration:underline}.tripetto-collector-rolling a:not([href]):not([tabindex]){color:inherit;text-decoration:none}.tripetto-collector-rolling a:not([href]):not([tabindex]):hover,.tripetto-collector-rolling a:not([href]):not([tabindex]):focus{color:inherit;text-decoration:none}.tripetto-collector-rolling a:not([href]):not([tabindex]):focus{outline:0}.tripetto-collector-rolling pre,.tripetto-collector-rolling code,.tripetto-collector-rolling kbd,.tripetto-collector-rolling samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}.tripetto-collector-rolling pre{margin-top:0;margin-bottom:1rem;overflow:auto}.tripetto-collector-rolling figure{margin:0 0 1rem}.tripetto-collector-rolling img{vertical-align:middle;border-style:none}.tripetto-collector-rolling svg{overflow:hidden;vertical-align:middle}.tripetto-collector-rolling table{border-collapse:collapse}.tripetto-collector-rolling caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}.tripetto-collector-rolling th{text-align:inherit}.tripetto-collector-rolling label{display:inline-block;margin-bottom:.5rem}.tripetto-collector-rolling button{border-radius:0}.tripetto-collector-rolling button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.tripetto-collector-rolling input,.tripetto-collector-rolling button,.tripetto-collector-rolling select,.tripetto-collector-rolling optgroup,.tripetto-collector-rolling textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}.tripetto-collector-rolling button,.tripetto-collector-rolling input{overflow:visible}.tripetto-collector-rolling button,.tripetto-collector-rolling select{text-transform:none}.tripetto-collector-rolling select{word-wrap:normal}.tripetto-collector-rolling button,.tripetto-collector-rolling [type="button"],.tripetto-collector-rolling [type="reset"],.tripetto-collector-rolling [type="submit"]{-webkit-appearance:button}.tripetto-collector-rolling button:not(:disabled),.tripetto-collector-rolling [type="button"]:not(:disabled),.tripetto-collector-rolling [type="reset"]:not(:disabled),.tripetto-collector-rolling [type="submit"]:not(:disabled){cursor:pointer}.tripetto-collector-rolling button::-moz-focus-inner,.tripetto-collector-rolling [type="button"]::-moz-focus-inner,.tripetto-collector-rolling [type="reset"]::-moz-focus-inner,.tripetto-collector-rolling [type="submit"]::-moz-focus-inner{padding:0;border-style:none}.tripetto-collector-rolling input[type="radio"],.tripetto-collector-rolling input[type="checkbox"]{box-sizing:border-box;padding:0}.tripetto-collector-rolling input[type="date"],.tripetto-collector-rolling input[type="time"],.tripetto-collector-rolling input[type="datetime-local"],.tripetto-collector-rolling input[type="month"]{-webkit-appearance:listbox}.tripetto-collector-rolling textarea{overflow:auto;resize:vertical}.tripetto-collector-rolling fieldset{min-width:0;padding:0;margin:0;border:0}.tripetto-collector-rolling legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}.tripetto-collector-rolling progress{vertical-align:baseline}.tripetto-collector-rolling [type="number"]::-webkit-inner-spin-button,.tripetto-collector-rolling [type="number"]::-webkit-outer-spin-button{height:auto}.tripetto-collector-rolling [type="search"]{outline-offset:-2px;-webkit-appearance:none}.tripetto-collector-rolling [type="search"]::-webkit-search-decoration{-webkit-appearance:none}.tripetto-collector-rolling ::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}.tripetto-collector-rolling output{display:inline-block}.tripetto-collector-rolling summary{display:list-item;cursor:pointer}.tripetto-collector-rolling template{display:none}.tripetto-collector-rolling [hidden]{display:none !important}.tripetto-collector-rolling h1,.tripetto-collector-rolling h2,.tripetto-collector-rolling h3,.tripetto-collector-rolling h4,.tripetto-collector-rolling h5,.tripetto-collector-rolling h6,.tripetto-collector-rolling .h1,.tripetto-collector-rolling .h2,.tripetto-collector-rolling .h3,.tripetto-collector-rolling .h4,.tripetto-collector-rolling .h5,.tripetto-collector-rolling .h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.tripetto-collector-rolling h1,.tripetto-collector-rolling .h1{font-size:2.5rem}.tripetto-collector-rolling h2,.tripetto-collector-rolling .h2{font-size:2rem}.tripetto-collector-rolling h3,.tripetto-collector-rolling .h3{font-size:1.75rem}.tripetto-collector-rolling h4,.tripetto-collector-rolling .h4{font-size:1.5rem}.tripetto-collector-rolling h5,.tripetto-collector-rolling .h5{font-size:1.25rem}.tripetto-collector-rolling h6,.tripetto-collector-rolling .h6{font-size:1rem}.tripetto-collector-rolling .lead{font-size:1.25rem;font-weight:300}.tripetto-collector-rolling .display-1{font-size:6rem;font-weight:300;line-height:1.2}.tripetto-collector-rolling .display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.tripetto-collector-rolling .display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.tripetto-collector-rolling .display-4{font-size:3.5rem;font-weight:300;line-height:1.2}.tripetto-collector-rolling hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,0.1)}.tripetto-collector-rolling small,.tripetto-collector-rolling .small{font-size:80%;font-weight:400}.tripetto-collector-rolling mark,.tripetto-collector-rolling .mark{padding:.2em;background-color:#fcf8e3}.tripetto-collector-rolling .list-unstyled{padding-left:0;list-style:none}.tripetto-collector-rolling .list-inline{padding-left:0;list-style:none}.tripetto-collector-rolling .list-inline-item{display:inline-block}.tripetto-collector-rolling .list-inline-item:not(:last-child){margin-right:.5rem}.tripetto-collector-rolling .initialism{font-size:90%;text-transform:uppercase}.tripetto-collector-rolling .blockquote{margin-bottom:1rem;font-size:1.25rem}.tripetto-collector-rolling .blockquote-footer{display:block;font-size:80%;color:#6c757d}.tripetto-collector-rolling .blockquote-footer::before{content:"\\2014\\00A0"}.tripetto-collector-rolling .img-fluid{max-width:100%;height:auto}.tripetto-collector-rolling .img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.tripetto-collector-rolling .figure{display:inline-block}.tripetto-collector-rolling .figure-img{margin-bottom:.5rem;line-height:1}.tripetto-collector-rolling .figure-caption{font-size:90%;color:#6c757d}.tripetto-collector-rolling code{font-size:87.5%;color:#e83e8c;word-break:break-word}a>.tripetto-collector-rolling code{color:inherit}.tripetto-collector-rolling kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}.tripetto-collector-rolling kbd kbd{padding:0;font-size:100%;font-weight:700}.tripetto-collector-rolling pre{display:block;font-size:87.5%;color:#212529}.tripetto-collector-rolling pre code{font-size:inherit;color:inherit;word-break:normal}.tripetto-collector-rolling .pre-scrollable{max-height:340px;overflow-y:scroll}.tripetto-collector-rolling .container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width: 576px){.tripetto-collector-rolling .container{max-width:540px}}@media (min-width: 768px){.tripetto-collector-rolling .container{max-width:720px}}@media (min-width: 992px){.tripetto-collector-rolling .container{max-width:960px}}@media (min-width: 1200px){.tripetto-collector-rolling .container{max-width:1140px}}.tripetto-collector-rolling .container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.tripetto-collector-rolling .row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.tripetto-collector-rolling .no-gutters{margin-right:0;margin-left:0}.tripetto-collector-rolling .no-gutters>.col,.tripetto-collector-rolling .no-gutters>[class*="col-"]{padding-right:0;padding-left:0}.tripetto-collector-rolling .col-1,.tripetto-collector-rolling .col-2,.tripetto-collector-rolling .col-3,.tripetto-collector-rolling .col-4,.tripetto-collector-rolling .col-5,.tripetto-collector-rolling .col-6,.tripetto-collector-rolling .col-7,.tripetto-collector-rolling .col-8,.tripetto-collector-rolling .col-9,.tripetto-collector-rolling .col-10,.tripetto-collector-rolling .col-11,.tripetto-collector-rolling .col-12,.tripetto-collector-rolling .col,.tripetto-collector-rolling .col-auto,.tripetto-collector-rolling .col-sm-1,.tripetto-collector-rolling .col-sm-2,.tripetto-collector-rolling .col-sm-3,.tripetto-collector-rolling .col-sm-4,.tripetto-collector-rolling .col-sm-5,.tripetto-collector-rolling .col-sm-6,.tripetto-collector-rolling .col-sm-7,.tripetto-collector-rolling .col-sm-8,.tripetto-collector-rolling .col-sm-9,.tripetto-collector-rolling .col-sm-10,.tripetto-collector-rolling .col-sm-11,.tripetto-collector-rolling .col-sm-12,.tripetto-collector-rolling .col-sm,.tripetto-collector-rolling .col-sm-auto,.tripetto-collector-rolling .col-md-1,.tripetto-collector-rolling .col-md-2,.tripetto-collector-rolling .col-md-3,.tripetto-collector-rolling .col-md-4,.tripetto-collector-rolling .col-md-5,.tripetto-collector-rolling .col-md-6,.tripetto-collector-rolling .col-md-7,.tripetto-collector-rolling .col-md-8,.tripetto-collector-rolling .col-md-9,.tripetto-collector-rolling .col-md-10,.tripetto-collector-rolling .col-md-11,.tripetto-collector-rolling .col-md-12,.tripetto-collector-rolling .col-md,.tripetto-collector-rolling .col-md-auto,.tripetto-collector-rolling .col-lg-1,.tripetto-collector-rolling .col-lg-2,.tripetto-collector-rolling .col-lg-3,.tripetto-collector-rolling .col-lg-4,.tripetto-collector-rolling .col-lg-5,.tripetto-collector-rolling .col-lg-6,.tripetto-collector-rolling .col-lg-7,.tripetto-collector-rolling .col-lg-8,.tripetto-collector-rolling .col-lg-9,.tripetto-collector-rolling .col-lg-10,.tripetto-collector-rolling .col-lg-11,.tripetto-collector-rolling .col-lg-12,.tripetto-collector-rolling .col-lg,.tripetto-collector-rolling .col-lg-auto,.tripetto-collector-rolling .col-xl-1,.tripetto-collector-rolling .col-xl-2,.tripetto-collector-rolling .col-xl-3,.tripetto-collector-rolling .col-xl-4,.tripetto-collector-rolling .col-xl-5,.tripetto-collector-rolling .col-xl-6,.tripetto-collector-rolling .col-xl-7,.tripetto-collector-rolling .col-xl-8,.tripetto-collector-rolling .col-xl-9,.tripetto-collector-rolling .col-xl-10,.tripetto-collector-rolling .col-xl-11,.tripetto-collector-rolling .col-xl-12,.tripetto-collector-rolling .col-xl,.tripetto-collector-rolling .col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.tripetto-collector-rolling .col{flex-basis:0;flex-grow:1;max-width:100%}.tripetto-collector-rolling .col-auto{flex:0 0 auto;width:auto;max-width:100%}.tripetto-collector-rolling .col-1{flex:0 0 8.33333%;max-width:8.33333%}.tripetto-collector-rolling .col-2{flex:0 0 16.66667%;max-width:16.66667%}.tripetto-collector-rolling .col-3{flex:0 0 25%;max-width:25%}.tripetto-collector-rolling .col-4{flex:0 0 33.33333%;max-width:33.33333%}.tripetto-collector-rolling .col-5{flex:0 0 41.66667%;max-width:41.66667%}.tripetto-collector-rolling .col-6{flex:0 0 50%;max-width:50%}.tripetto-collector-rolling .col-7{flex:0 0 58.33333%;max-width:58.33333%}.tripetto-collector-rolling .col-8{flex:0 0 66.66667%;max-width:66.66667%}.tripetto-collector-rolling .col-9{flex:0 0 75%;max-width:75%}.tripetto-collector-rolling .col-10{flex:0 0 83.33333%;max-width:83.33333%}.tripetto-collector-rolling .col-11{flex:0 0 91.66667%;max-width:91.66667%}.tripetto-collector-rolling .col-12{flex:0 0 100%;max-width:100%}.tripetto-collector-rolling .order-first{order:-1}.tripetto-collector-rolling .order-last{order:13}.tripetto-collector-rolling .order-0{order:0}.tripetto-collector-rolling .order-1{order:1}.tripetto-collector-rolling .order-2{order:2}.tripetto-collector-rolling .order-3{order:3}.tripetto-collector-rolling .order-4{order:4}.tripetto-collector-rolling .order-5{order:5}.tripetto-collector-rolling .order-6{order:6}.tripetto-collector-rolling .order-7{order:7}.tripetto-collector-rolling .order-8{order:8}.tripetto-collector-rolling .order-9{order:9}.tripetto-collector-rolling .order-10{order:10}.tripetto-collector-rolling .order-11{order:11}.tripetto-collector-rolling .order-12{order:12}.tripetto-collector-rolling .offset-1{margin-left:8.33333%}.tripetto-collector-rolling .offset-2{margin-left:16.66667%}.tripetto-collector-rolling .offset-3{margin-left:25%}.tripetto-collector-rolling .offset-4{margin-left:33.33333%}.tripetto-collector-rolling .offset-5{margin-left:41.66667%}.tripetto-collector-rolling .offset-6{margin-left:50%}.tripetto-collector-rolling .offset-7{margin-left:58.33333%}.tripetto-collector-rolling .offset-8{margin-left:66.66667%}.tripetto-collector-rolling .offset-9{margin-left:75%}.tripetto-collector-rolling .offset-10{margin-left:83.33333%}.tripetto-collector-rolling .offset-11{margin-left:91.66667%}@media (min-width: 576px){.tripetto-collector-rolling .col-sm{flex-basis:0;flex-grow:1;max-width:100%}.tripetto-collector-rolling .col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.tripetto-collector-rolling .col-sm-1{flex:0 0 8.33333%;max-width:8.33333%}.tripetto-collector-rolling .col-sm-2{flex:0 0 16.66667%;max-width:16.66667%}.tripetto-collector-rolling .col-sm-3{flex:0 0 25%;max-width:25%}.tripetto-collector-rolling .col-sm-4{flex:0 0 33.33333%;max-width:33.33333%}.tripetto-collector-rolling .col-sm-5{flex:0 0 41.66667%;max-width:41.66667%}.tripetto-collector-rolling .col-sm-6{flex:0 0 50%;max-width:50%}.tripetto-collector-rolling .col-sm-7{flex:0 0 58.33333%;max-width:58.33333%}.tripetto-collector-rolling .col-sm-8{flex:0 0 66.66667%;max-width:66.66667%}.tripetto-collector-rolling .col-sm-9{flex:0 0 75%;max-width:75%}.tripetto-collector-rolling .col-sm-10{flex:0 0 83.33333%;max-width:83.33333%}.tripetto-collector-rolling .col-sm-11{flex:0 0 91.66667%;max-width:91.66667%}.tripetto-collector-rolling .col-sm-12{flex:0 0 100%;max-width:100%}.tripetto-collector-rolling .order-sm-first{order:-1}.tripetto-collector-rolling .order-sm-last{order:13}.tripetto-collector-rolling .order-sm-0{order:0}.tripetto-collector-rolling .order-sm-1{order:1}.tripetto-collector-rolling .order-sm-2{order:2}.tripetto-collector-rolling .order-sm-3{order:3}.tripetto-collector-rolling .order-sm-4{order:4}.tripetto-collector-rolling .order-sm-5{order:5}.tripetto-collector-rolling .order-sm-6{order:6}.tripetto-collector-rolling .order-sm-7{order:7}.tripetto-collector-rolling .order-sm-8{order:8}.tripetto-collector-rolling .order-sm-9{order:9}.tripetto-collector-rolling .order-sm-10{order:10}.tripetto-collector-rolling .order-sm-11{order:11}.tripetto-collector-rolling .order-sm-12{order:12}.tripetto-collector-rolling .offset-sm-0{margin-left:0}.tripetto-collector-rolling .offset-sm-1{margin-left:8.33333%}.tripetto-collector-rolling .offset-sm-2{margin-left:16.66667%}.tripetto-collector-rolling .offset-sm-3{margin-left:25%}.tripetto-collector-rolling .offset-sm-4{margin-left:33.33333%}.tripetto-collector-rolling .offset-sm-5{margin-left:41.66667%}.tripetto-collector-rolling .offset-sm-6{margin-left:50%}.tripetto-collector-rolling .offset-sm-7{margin-left:58.33333%}.tripetto-collector-rolling .offset-sm-8{margin-left:66.66667%}.tripetto-collector-rolling .offset-sm-9{margin-left:75%}.tripetto-collector-rolling .offset-sm-10{margin-left:83.33333%}.tripetto-collector-rolling .offset-sm-11{margin-left:91.66667%}}@media (min-width: 768px){.tripetto-collector-rolling .col-md{flex-basis:0;flex-grow:1;max-width:100%}.tripetto-collector-rolling .col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.tripetto-collector-rolling .col-md-1{flex:0 0 8.33333%;max-width:8.33333%}.tripetto-collector-rolling .col-md-2{flex:0 0 16.66667%;max-width:16.66667%}.tripetto-collector-rolling .col-md-3{flex:0 0 25%;max-width:25%}.tripetto-collector-rolling .col-md-4{flex:0 0 33.33333%;max-width:33.33333%}.tripetto-collector-rolling .col-md-5{flex:0 0 41.66667%;max-width:41.66667%}.tripetto-collector-rolling .col-md-6{flex:0 0 50%;max-width:50%}.tripetto-collector-rolling .col-md-7{flex:0 0 58.33333%;max-width:58.33333%}.tripetto-collector-rolling .col-md-8{flex:0 0 66.66667%;max-width:66.66667%}.tripetto-collector-rolling .col-md-9{flex:0 0 75%;max-width:75%}.tripetto-collector-rolling .col-md-10{flex:0 0 83.33333%;max-width:83.33333%}.tripetto-collector-rolling .col-md-11{flex:0 0 91.66667%;max-width:91.66667%}.tripetto-collector-rolling .col-md-12{flex:0 0 100%;max-width:100%}.tripetto-collector-rolling .order-md-first{order:-1}.tripetto-collector-rolling .order-md-last{order:13}.tripetto-collector-rolling .order-md-0{order:0}.tripetto-collector-rolling .order-md-1{order:1}.tripetto-collector-rolling .order-md-2{order:2}.tripetto-collector-rolling .order-md-3{order:3}.tripetto-collector-rolling .order-md-4{order:4}.tripetto-collector-rolling .order-md-5{order:5}.tripetto-collector-rolling .order-md-6{order:6}.tripetto-collector-rolling .order-md-7{order:7}.tripetto-collector-rolling .order-md-8{order:8}.tripetto-collector-rolling .order-md-9{order:9}.tripetto-collector-rolling .order-md-10{order:10}.tripetto-collector-rolling .order-md-11{order:11}.tripetto-collector-rolling .order-md-12{order:12}.tripetto-collector-rolling .offset-md-0{margin-left:0}.tripetto-collector-rolling .offset-md-1{margin-left:8.33333%}.tripetto-collector-rolling .offset-md-2{margin-left:16.66667%}.tripetto-collector-rolling .offset-md-3{margin-left:25%}.tripetto-collector-rolling .offset-md-4{margin-left:33.33333%}.tripetto-collector-rolling .offset-md-5{margin-left:41.66667%}.tripetto-collector-rolling .offset-md-6{margin-left:50%}.tripetto-collector-rolling .offset-md-7{margin-left:58.33333%}.tripetto-collector-rolling .offset-md-8{margin-left:66.66667%}.tripetto-collector-rolling .offset-md-9{margin-left:75%}.tripetto-collector-rolling .offset-md-10{margin-left:83.33333%}.tripetto-collector-rolling .offset-md-11{margin-left:91.66667%}}@media (min-width: 992px){.tripetto-collector-rolling .col-lg{flex-basis:0;flex-grow:1;max-width:100%}.tripetto-collector-rolling .col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.tripetto-collector-rolling .col-lg-1{flex:0 0 8.33333%;max-width:8.33333%}.tripetto-collector-rolling .col-lg-2{flex:0 0 16.66667%;max-width:16.66667%}.tripetto-collector-rolling .col-lg-3{flex:0 0 25%;max-width:25%}.tripetto-collector-rolling .col-lg-4{flex:0 0 33.33333%;max-width:33.33333%}.tripetto-collector-rolling .col-lg-5{flex:0 0 41.66667%;max-width:41.66667%}.tripetto-collector-rolling .col-lg-6{flex:0 0 50%;max-width:50%}.tripetto-collector-rolling .col-lg-7{flex:0 0 58.33333%;max-width:58.33333%}.tripetto-collector-rolling .col-lg-8{flex:0 0 66.66667%;max-width:66.66667%}.tripetto-collector-rolling .col-lg-9{flex:0 0 75%;max-width:75%}.tripetto-collector-rolling .col-lg-10{flex:0 0 83.33333%;max-width:83.33333%}.tripetto-collector-rolling .col-lg-11{flex:0 0 91.66667%;max-width:91.66667%}.tripetto-collector-rolling .col-lg-12{flex:0 0 100%;max-width:100%}.tripetto-collector-rolling .order-lg-first{order:-1}.tripetto-collector-rolling .order-lg-last{order:13}.tripetto-collector-rolling .order-lg-0{order:0}.tripetto-collector-rolling .order-lg-1{order:1}.tripetto-collector-rolling .order-lg-2{order:2}.tripetto-collector-rolling .order-lg-3{order:3}.tripetto-collector-rolling .order-lg-4{order:4}.tripetto-collector-rolling .order-lg-5{order:5}.tripetto-collector-rolling .order-lg-6{order:6}.tripetto-collector-rolling .order-lg-7{order:7}.tripetto-collector-rolling .order-lg-8{order:8}.tripetto-collector-rolling .order-lg-9{order:9}.tripetto-collector-rolling .order-lg-10{order:10}.tripetto-collector-rolling .order-lg-11{order:11}.tripetto-collector-rolling .order-lg-12{order:12}.tripetto-collector-rolling .offset-lg-0{margin-left:0}.tripetto-collector-rolling .offset-lg-1{margin-left:8.33333%}.tripetto-collector-rolling .offset-lg-2{margin-left:16.66667%}.tripetto-collector-rolling .offset-lg-3{margin-left:25%}.tripetto-collector-rolling .offset-lg-4{margin-left:33.33333%}.tripetto-collector-rolling .offset-lg-5{margin-left:41.66667%}.tripetto-collector-rolling .offset-lg-6{margin-left:50%}.tripetto-collector-rolling .offset-lg-7{margin-left:58.33333%}.tripetto-collector-rolling .offset-lg-8{margin-left:66.66667%}.tripetto-collector-rolling .offset-lg-9{margin-left:75%}.tripetto-collector-rolling .offset-lg-10{margin-left:83.33333%}.tripetto-collector-rolling .offset-lg-11{margin-left:91.66667%}}@media (min-width: 1200px){.tripetto-collector-rolling .col-xl{flex-basis:0;flex-grow:1;max-width:100%}.tripetto-collector-rolling .col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.tripetto-collector-rolling .col-xl-1{flex:0 0 8.33333%;max-width:8.33333%}.tripetto-collector-rolling .col-xl-2{flex:0 0 16.66667%;max-width:16.66667%}.tripetto-collector-rolling .col-xl-3{flex:0 0 25%;max-width:25%}.tripetto-collector-rolling .col-xl-4{flex:0 0 33.33333%;max-width:33.33333%}.tripetto-collector-rolling .col-xl-5{flex:0 0 41.66667%;max-width:41.66667%}.tripetto-collector-rolling .col-xl-6{flex:0 0 50%;max-width:50%}.tripetto-collector-rolling .col-xl-7{flex:0 0 58.33333%;max-width:58.33333%}.tripetto-collector-rolling .col-xl-8{flex:0 0 66.66667%;max-width:66.66667%}.tripetto-collector-rolling .col-xl-9{flex:0 0 75%;max-width:75%}.tripetto-collector-rolling .col-xl-10{flex:0 0 83.33333%;max-width:83.33333%}.tripetto-collector-rolling .col-xl-11{flex:0 0 91.66667%;max-width:91.66667%}.tripetto-collector-rolling .col-xl-12{flex:0 0 100%;max-width:100%}.tripetto-collector-rolling .order-xl-first{order:-1}.tripetto-collector-rolling .order-xl-last{order:13}.tripetto-collector-rolling .order-xl-0{order:0}.tripetto-collector-rolling .order-xl-1{order:1}.tripetto-collector-rolling .order-xl-2{order:2}.tripetto-collector-rolling .order-xl-3{order:3}.tripetto-collector-rolling .order-xl-4{order:4}.tripetto-collector-rolling .order-xl-5{order:5}.tripetto-collector-rolling .order-xl-6{order:6}.tripetto-collector-rolling .order-xl-7{order:7}.tripetto-collector-rolling .order-xl-8{order:8}.tripetto-collector-rolling .order-xl-9{order:9}.tripetto-collector-rolling .order-xl-10{order:10}.tripetto-collector-rolling .order-xl-11{order:11}.tripetto-collector-rolling .order-xl-12{order:12}.tripetto-collector-rolling .offset-xl-0{margin-left:0}.tripetto-collector-rolling .offset-xl-1{margin-left:8.33333%}.tripetto-collector-rolling .offset-xl-2{margin-left:16.66667%}.tripetto-collector-rolling .offset-xl-3{margin-left:25%}.tripetto-collector-rolling .offset-xl-4{margin-left:33.33333%}.tripetto-collector-rolling .offset-xl-5{margin-left:41.66667%}.tripetto-collector-rolling .offset-xl-6{margin-left:50%}.tripetto-collector-rolling .offset-xl-7{margin-left:58.33333%}.tripetto-collector-rolling .offset-xl-8{margin-left:66.66667%}.tripetto-collector-rolling .offset-xl-9{margin-left:75%}.tripetto-collector-rolling .offset-xl-10{margin-left:83.33333%}.tripetto-collector-rolling .offset-xl-11{margin-left:91.66667%}}.tripetto-collector-rolling .table{width:100%;margin-bottom:1rem;color:#212529}.tripetto-collector-rolling .table th,.tripetto-collector-rolling .table td{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.tripetto-collector-rolling .table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.tripetto-collector-rolling .table tbody+tbody{border-top:2px solid #dee2e6}.tripetto-collector-rolling .table-sm th,.tripetto-collector-rolling .table-sm td{padding:.3rem}.tripetto-collector-rolling .table-bordered{border:1px solid #dee2e6}.tripetto-collector-rolling .table-bordered th,.tripetto-collector-rolling .table-bordered td{border:1px solid #dee2e6}.tripetto-collector-rolling .table-bordered thead th,.tripetto-collector-rolling .table-bordered thead td{border-bottom-width:2px}.tripetto-collector-rolling .table-borderless th,.tripetto-collector-rolling .table-borderless td,.tripetto-collector-rolling .table-borderless thead th,.tripetto-collector-rolling .table-borderless tbody+tbody{border:0}.tripetto-collector-rolling .table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,0.05)}.tripetto-collector-rolling .table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,0.075)}.tripetto-collector-rolling .table-primary,.tripetto-collector-rolling .table-primary>th,.tripetto-collector-rolling .table-primary>td{background-color:#b8daff}.tripetto-collector-rolling .table-primary th,.tripetto-collector-rolling .table-primary td,.tripetto-collector-rolling .table-primary thead th,.tripetto-collector-rolling .table-primary tbody+tbody{border-color:#7abaff}.tripetto-collector-rolling .table-hover .table-primary:hover{background-color:#9fcdff}.tripetto-collector-rolling .table-hover .table-primary:hover>td,.tripetto-collector-rolling .table-hover .table-primary:hover>th{background-color:#9fcdff}.tripetto-collector-rolling .table-secondary,.tripetto-collector-rolling .table-secondary>th,.tripetto-collector-rolling .table-secondary>td{background-color:#d6d8db}.tripetto-collector-rolling .table-secondary th,.tripetto-collector-rolling .table-secondary td,.tripetto-collector-rolling .table-secondary thead th,.tripetto-collector-rolling .table-secondary tbody+tbody{border-color:#b3b7bb}.tripetto-collector-rolling .table-hover .table-secondary:hover{background-color:#c8cbcf}.tripetto-collector-rolling .table-hover .table-secondary:hover>td,.tripetto-collector-rolling .table-hover .table-secondary:hover>th{background-color:#c8cbcf}.tripetto-collector-rolling .table-success,.tripetto-collector-rolling .table-success>th,.tripetto-collector-rolling .table-success>td{background-color:#c3e6cb}.tripetto-collector-rolling .table-success th,.tripetto-collector-rolling .table-success td,.tripetto-collector-rolling .table-success thead th,.tripetto-collector-rolling .table-success tbody+tbody{border-color:#8fd19e}.tripetto-collector-rolling .table-hover .table-success:hover{background-color:#b1dfbb}.tripetto-collector-rolling .table-hover .table-success:hover>td,.tripetto-collector-rolling .table-hover .table-success:hover>th{background-color:#b1dfbb}.tripetto-collector-rolling .table-info,.tripetto-collector-rolling .table-info>th,.tripetto-collector-rolling .table-info>td{background-color:#bee5eb}.tripetto-collector-rolling .table-info th,.tripetto-collector-rolling .table-info td,.tripetto-collector-rolling .table-info thead th,.tripetto-collector-rolling .table-info tbody+tbody{border-color:#86cfda}.tripetto-collector-rolling .table-hover .table-info:hover{background-color:#abdde5}.tripetto-collector-rolling .table-hover .table-info:hover>td,.tripetto-collector-rolling .table-hover .table-info:hover>th{background-color:#abdde5}.tripetto-collector-rolling .table-warning,.tripetto-collector-rolling .table-warning>th,.tripetto-collector-rolling .table-warning>td{background-color:#ffeeba}.tripetto-collector-rolling .table-warning th,.tripetto-collector-rolling .table-warning td,.tripetto-collector-rolling .table-warning thead th,.tripetto-collector-rolling .table-warning tbody+tbody{border-color:#ffdf7e}.tripetto-collector-rolling .table-hover .table-warning:hover{background-color:#ffe8a1}.tripetto-collector-rolling .table-hover .table-warning:hover>td,.tripetto-collector-rolling .table-hover .table-warning:hover>th{background-color:#ffe8a1}.tripetto-collector-rolling .table-danger,.tripetto-collector-rolling .table-danger>th,.tripetto-collector-rolling .table-danger>td{background-color:#f5c6cb}.tripetto-collector-rolling .table-danger th,.tripetto-collector-rolling .table-danger td,.tripetto-collector-rolling .table-danger thead th,.tripetto-collector-rolling .table-danger tbody+tbody{border-color:#ed969e}.tripetto-collector-rolling .table-hover .table-danger:hover{background-color:#f1b0b7}.tripetto-collector-rolling .table-hover .table-danger:hover>td,.tripetto-collector-rolling .table-hover .table-danger:hover>th{background-color:#f1b0b7}.tripetto-collector-rolling .table-light,.tripetto-collector-rolling .table-light>th,.tripetto-collector-rolling .table-light>td{background-color:#fdfdfe}.tripetto-collector-rolling .table-light th,.tripetto-collector-rolling .table-light td,.tripetto-collector-rolling .table-light thead th,.tripetto-collector-rolling .table-light tbody+tbody{border-color:#fbfcfc}.tripetto-collector-rolling .table-hover .table-light:hover{background-color:#ececf6}.tripetto-collector-rolling .table-hover .table-light:hover>td,.tripetto-collector-rolling .table-hover .table-light:hover>th{background-color:#ececf6}.tripetto-collector-rolling .table-dark,.tripetto-collector-rolling .table-dark>th,.tripetto-collector-rolling .table-dark>td{background-color:#c6c8ca}.tripetto-collector-rolling .table-dark th,.tripetto-collector-rolling .table-dark td,.tripetto-collector-rolling .table-dark thead th,.tripetto-collector-rolling .table-dark tbody+tbody{border-color:#95999c}.tripetto-collector-rolling .table-hover .table-dark:hover{background-color:#b9bbbe}.tripetto-collector-rolling .table-hover .table-dark:hover>td,.tripetto-collector-rolling .table-hover .table-dark:hover>th{background-color:#b9bbbe}.tripetto-collector-rolling .table-active,.tripetto-collector-rolling .table-active>th,.tripetto-collector-rolling .table-active>td{background-color:rgba(0,0,0,0.075)}.tripetto-collector-rolling .table-hover .table-active:hover{background-color:rgba(0,0,0,0.075)}.tripetto-collector-rolling .table-hover .table-active:hover>td,.tripetto-collector-rolling .table-hover .table-active:hover>th{background-color:rgba(0,0,0,0.075)}.tripetto-collector-rolling .table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.tripetto-collector-rolling .table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.tripetto-collector-rolling .table-dark{color:#fff;background-color:#343a40}.tripetto-collector-rolling .table-dark th,.tripetto-collector-rolling .table-dark td,.tripetto-collector-rolling .table-dark thead th{border-color:#454d55}.tripetto-collector-rolling .table-dark.table-bordered{border:0}.tripetto-collector-rolling .table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,0.05)}.tripetto-collector-rolling .table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,0.075)}@media (max-width: 575.98px){.tripetto-collector-rolling .table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.tripetto-collector-rolling .table-responsive-sm>.table-bordered{border:0}}@media (max-width: 767.98px){.tripetto-collector-rolling .table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.tripetto-collector-rolling .table-responsive-md>.table-bordered{border:0}}@media (max-width: 991.98px){.tripetto-collector-rolling .table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.tripetto-collector-rolling .table-responsive-lg>.table-bordered{border:0}}@media (max-width: 1199.98px){.tripetto-collector-rolling .table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.tripetto-collector-rolling .table-responsive-xl>.table-bordered{border:0}}.tripetto-collector-rolling .table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.tripetto-collector-rolling .table-responsive>.table-bordered{border:0}.tripetto-collector-rolling .form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .form-control{transition:none}}.tripetto-collector-rolling .form-control::-ms-expand{background-color:transparent;border:0}.tripetto-collector-rolling .form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.tripetto-collector-rolling .form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.tripetto-collector-rolling .form-control::-moz-placeholder{color:#6c757d;opacity:1}.tripetto-collector-rolling .form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.tripetto-collector-rolling .form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.tripetto-collector-rolling .form-control::placeholder{color:#6c757d;opacity:1}.tripetto-collector-rolling .form-control:disabled,.tripetto-collector-rolling .form-control[readonly]{background-color:#e9ecef;opacity:1}.tripetto-collector-rolling select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.tripetto-collector-rolling .form-control-file,.tripetto-collector-rolling .form-control-range{display:block;width:100%}.tripetto-collector-rolling .col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.tripetto-collector-rolling .col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.tripetto-collector-rolling .col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.tripetto-collector-rolling .form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.tripetto-collector-rolling .form-control-plaintext.form-control-sm,.tripetto-collector-rolling .form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.tripetto-collector-rolling .form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.tripetto-collector-rolling .form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.tripetto-collector-rolling select.form-control[size],.tripetto-collector-rolling select.form-control[multiple]{height:auto}.tripetto-collector-rolling textarea.form-control{height:auto}.tripetto-collector-rolling .form-group{margin-bottom:1rem}.tripetto-collector-rolling .form-text{display:block;margin-top:.25rem}.tripetto-collector-rolling .form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.tripetto-collector-rolling .form-row>.col,.tripetto-collector-rolling .form-row>[class*="col-"]{padding-right:5px;padding-left:5px}.tripetto-collector-rolling .form-check{position:relative;display:block;padding-left:1.25rem}.tripetto-collector-rolling .form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.tripetto-collector-rolling .form-check-input:disabled ~ .form-check-label{color:#6c757d}.tripetto-collector-rolling .form-check-label{margin-bottom:0}.tripetto-collector-rolling .form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.tripetto-collector-rolling .form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.tripetto-collector-rolling .valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.tripetto-collector-rolling .valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,0.9);border-radius:.25rem}.was-validated .tripetto-collector-rolling .form-control:valid,.tripetto-collector-rolling .form-control.is-valid{border-color:#28a745;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2328a745\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .tripetto-collector-rolling .form-control:valid:focus,.tripetto-collector-rolling .form-control.is-valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.was-validated .tripetto-collector-rolling .form-control:valid ~ .valid-feedback,.was-validated .tripetto-collector-rolling .form-control:valid ~ .valid-tooltip,.tripetto-collector-rolling .form-control.is-valid ~ .valid-feedback,.tripetto-collector-rolling .form-control.is-valid ~ .valid-tooltip{display:block}.was-validated .tripetto-collector-rolling textarea.form-control:valid,.tripetto-collector-rolling textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .tripetto-collector-rolling .custom-select:valid,.tripetto-collector-rolling .custom-select.is-valid{border-color:#28a745;padding-right:calc((1em + .75rem) * 3 / 4 + 1.75rem);background:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px,url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2328a745\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .tripetto-collector-rolling .custom-select:valid:focus,.tripetto-collector-rolling .custom-select.is-valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.was-validated .tripetto-collector-rolling .custom-select:valid ~ .valid-feedback,.was-validated .tripetto-collector-rolling .custom-select:valid ~ .valid-tooltip,.tripetto-collector-rolling .custom-select.is-valid ~ .valid-feedback,.tripetto-collector-rolling .custom-select.is-valid ~ .valid-tooltip{display:block}.was-validated .tripetto-collector-rolling .form-control-file:valid ~ .valid-feedback,.was-validated .tripetto-collector-rolling .form-control-file:valid ~ .valid-tooltip,.tripetto-collector-rolling .form-control-file.is-valid ~ .valid-feedback,.tripetto-collector-rolling .form-control-file.is-valid ~ .valid-tooltip{display:block}.was-validated .tripetto-collector-rolling .form-check-input:valid ~ .form-check-label,.tripetto-collector-rolling .form-check-input.is-valid ~ .form-check-label{color:#28a745}.was-validated .tripetto-collector-rolling .form-check-input:valid ~ .valid-feedback,.was-validated .tripetto-collector-rolling .form-check-input:valid ~ .valid-tooltip,.tripetto-collector-rolling .form-check-input.is-valid ~ .valid-feedback,.tripetto-collector-rolling .form-check-input.is-valid ~ .valid-tooltip{display:block}.was-validated .tripetto-collector-rolling .custom-control-input:valid ~ .custom-control-label,.tripetto-collector-rolling .custom-control-input.is-valid ~ .custom-control-label{color:#28a745}.was-validated .tripetto-collector-rolling .custom-control-input:valid ~ .custom-control-label::before,.tripetto-collector-rolling .custom-control-input.is-valid ~ .custom-control-label::before{border-color:#28a745}.was-validated .tripetto-collector-rolling .custom-control-input:valid ~ .valid-feedback,.was-validated .tripetto-collector-rolling .custom-control-input:valid ~ .valid-tooltip,.tripetto-collector-rolling .custom-control-input.is-valid ~ .valid-feedback,.tripetto-collector-rolling .custom-control-input.is-valid ~ .valid-tooltip{display:block}.was-validated .tripetto-collector-rolling .custom-control-input:valid:checked ~ .custom-control-label::before,.tripetto-collector-rolling .custom-control-input.is-valid:checked ~ .custom-control-label::before{border-color:#34ce57;background-color:#34ce57}.was-validated .tripetto-collector-rolling .custom-control-input:valid:focus ~ .custom-control-label::before,.tripetto-collector-rolling .custom-control-input.is-valid:focus ~ .custom-control-label::before{box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.was-validated .tripetto-collector-rolling .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before,.tripetto-collector-rolling .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before{border-color:#28a745}.was-validated .tripetto-collector-rolling .custom-file-input:valid ~ .custom-file-label,.tripetto-collector-rolling .custom-file-input.is-valid ~ .custom-file-label{border-color:#28a745}.was-validated .tripetto-collector-rolling .custom-file-input:valid ~ .valid-feedback,.was-validated .tripetto-collector-rolling .custom-file-input:valid ~ .valid-tooltip,.tripetto-collector-rolling .custom-file-input.is-valid ~ .valid-feedback,.tripetto-collector-rolling .custom-file-input.is-valid ~ .valid-tooltip{display:block}.was-validated .tripetto-collector-rolling .custom-file-input:valid:focus ~ .custom-file-label,.tripetto-collector-rolling .custom-file-input.is-valid:focus ~ .custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.tripetto-collector-rolling .invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.tripetto-collector-rolling .invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,0.9);border-radius:.25rem}.was-validated .tripetto-collector-rolling .form-control:invalid,.tripetto-collector-rolling .form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23dc3545\' viewBox=\'-2 -2 7 7\'%3e%3cpath stroke=\'%23dc3545\' d=\'M0 0l3 3m0-3L0 3\'/%3e%3ccircle r=\'.5\'/%3e%3ccircle cx=\'3\' r=\'.5\'/%3e%3ccircle cy=\'3\' r=\'.5\'/%3e%3ccircle cx=\'3\' cy=\'3\' r=\'.5\'/%3e%3c/svg%3E");background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .tripetto-collector-rolling .form-control:invalid:focus,.tripetto-collector-rolling .form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.was-validated .tripetto-collector-rolling .form-control:invalid ~ .invalid-feedback,.was-validated .tripetto-collector-rolling .form-control:invalid ~ .invalid-tooltip,.tripetto-collector-rolling .form-control.is-invalid ~ .invalid-feedback,.tripetto-collector-rolling .form-control.is-invalid ~ .invalid-tooltip{display:block}.was-validated .tripetto-collector-rolling textarea.form-control:invalid,.tripetto-collector-rolling textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .tripetto-collector-rolling .custom-select:invalid,.tripetto-collector-rolling .custom-select.is-invalid{border-color:#dc3545;padding-right:calc((1em + .75rem) * 3 / 4 + 1.75rem);background:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px,url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23dc3545\' viewBox=\'-2 -2 7 7\'%3e%3cpath stroke=\'%23dc3545\' d=\'M0 0l3 3m0-3L0 3\'/%3e%3ccircle r=\'.5\'/%3e%3ccircle cx=\'3\' r=\'.5\'/%3e%3ccircle cy=\'3\' r=\'.5\'/%3e%3ccircle cx=\'3\' cy=\'3\' r=\'.5\'/%3e%3c/svg%3E") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .tripetto-collector-rolling .custom-select:invalid:focus,.tripetto-collector-rolling .custom-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.was-validated .tripetto-collector-rolling .custom-select:invalid ~ .invalid-feedback,.was-validated .tripetto-collector-rolling .custom-select:invalid ~ .invalid-tooltip,.tripetto-collector-rolling .custom-select.is-invalid ~ .invalid-feedback,.tripetto-collector-rolling .custom-select.is-invalid ~ .invalid-tooltip{display:block}.was-validated .tripetto-collector-rolling .form-control-file:invalid ~ .invalid-feedback,.was-validated .tripetto-collector-rolling .form-control-file:invalid ~ .invalid-tooltip,.tripetto-collector-rolling .form-control-file.is-invalid ~ .invalid-feedback,.tripetto-collector-rolling .form-control-file.is-invalid ~ .invalid-tooltip{display:block}.was-validated .tripetto-collector-rolling .form-check-input:invalid ~ .form-check-label,.tripetto-collector-rolling .form-check-input.is-invalid ~ .form-check-label{color:#dc3545}.was-validated .tripetto-collector-rolling .form-check-input:invalid ~ .invalid-feedback,.was-validated .tripetto-collector-rolling .form-check-input:invalid ~ .invalid-tooltip,.tripetto-collector-rolling .form-check-input.is-invalid ~ .invalid-feedback,.tripetto-collector-rolling .form-check-input.is-invalid ~ .invalid-tooltip{display:block}.was-validated .tripetto-collector-rolling .custom-control-input:invalid ~ .custom-control-label,.tripetto-collector-rolling .custom-control-input.is-invalid ~ .custom-control-label{color:#dc3545}.was-validated .tripetto-collector-rolling .custom-control-input:invalid ~ .custom-control-label::before,.tripetto-collector-rolling .custom-control-input.is-invalid ~ .custom-control-label::before{border-color:#dc3545}.was-validated .tripetto-collector-rolling .custom-control-input:invalid ~ .invalid-feedback,.was-validated .tripetto-collector-rolling .custom-control-input:invalid ~ .invalid-tooltip,.tripetto-collector-rolling .custom-control-input.is-invalid ~ .invalid-feedback,.tripetto-collector-rolling .custom-control-input.is-invalid ~ .invalid-tooltip{display:block}.was-validated .tripetto-collector-rolling .custom-control-input:invalid:checked ~ .custom-control-label::before,.tripetto-collector-rolling .custom-control-input.is-invalid:checked ~ .custom-control-label::before{border-color:#e4606d;background-color:#e4606d}.was-validated .tripetto-collector-rolling .custom-control-input:invalid:focus ~ .custom-control-label::before,.tripetto-collector-rolling .custom-control-input.is-invalid:focus ~ .custom-control-label::before{box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.was-validated .tripetto-collector-rolling .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before,.tripetto-collector-rolling .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before{border-color:#dc3545}.was-validated .tripetto-collector-rolling .custom-file-input:invalid ~ .custom-file-label,.tripetto-collector-rolling .custom-file-input.is-invalid ~ .custom-file-label{border-color:#dc3545}.was-validated .tripetto-collector-rolling .custom-file-input:invalid ~ .invalid-feedback,.was-validated .tripetto-collector-rolling .custom-file-input:invalid ~ .invalid-tooltip,.tripetto-collector-rolling .custom-file-input.is-invalid ~ .invalid-feedback,.tripetto-collector-rolling .custom-file-input.is-invalid ~ .invalid-tooltip{display:block}.was-validated .tripetto-collector-rolling .custom-file-input:invalid:focus ~ .custom-file-label,.tripetto-collector-rolling .custom-file-input.is-invalid:focus ~ .custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.tripetto-collector-rolling .form-inline{display:flex;flex-flow:row wrap;align-items:center}.tripetto-collector-rolling .form-inline .form-check{width:100%}@media (min-width: 576px){.tripetto-collector-rolling .form-inline label{display:flex;align-items:center;justify-content:center;margin-bottom:0}.tripetto-collector-rolling .form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.tripetto-collector-rolling .form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.tripetto-collector-rolling .form-inline .form-control-plaintext{display:inline-block}.tripetto-collector-rolling .form-inline .input-group,.tripetto-collector-rolling .form-inline .custom-select{width:auto}.tripetto-collector-rolling .form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.tripetto-collector-rolling .form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.tripetto-collector-rolling .form-inline .custom-control{align-items:center;justify-content:center}.tripetto-collector-rolling .form-inline .custom-control-label{margin-bottom:0}}.tripetto-collector-rolling .btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .btn{transition:none}}.tripetto-collector-rolling .btn:hover{color:#212529;text-decoration:none}.tripetto-collector-rolling .btn:focus,.tripetto-collector-rolling .btn.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.tripetto-collector-rolling .btn.disabled,.tripetto-collector-rolling .btn:disabled{opacity:.65}.tripetto-collector-rolling a.btn.disabled,.tripetto-collector-rolling fieldset:disabled a.btn{pointer-events:none}.tripetto-collector-rolling .btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.tripetto-collector-rolling .btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.tripetto-collector-rolling .btn-primary:focus,.tripetto-collector-rolling .btn-primary.focus{box-shadow:0 0 0 .2rem rgba(38,143,255,0.5)}.tripetto-collector-rolling .btn-primary.disabled,.tripetto-collector-rolling .btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.tripetto-collector-rolling .btn-primary:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-primary:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.tripetto-collector-rolling .btn-primary:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-primary:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,0.5)}.tripetto-collector-rolling .btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.tripetto-collector-rolling .btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.tripetto-collector-rolling .btn-secondary:focus,.tripetto-collector-rolling .btn-secondary.focus{box-shadow:0 0 0 .2rem rgba(130,138,145,0.5)}.tripetto-collector-rolling .btn-secondary.disabled,.tripetto-collector-rolling .btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.tripetto-collector-rolling .btn-secondary:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-secondary:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.tripetto-collector-rolling .btn-secondary:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-secondary:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,0.5)}.tripetto-collector-rolling .btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.tripetto-collector-rolling .btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.tripetto-collector-rolling .btn-success:focus,.tripetto-collector-rolling .btn-success.focus{box-shadow:0 0 0 .2rem rgba(72,180,97,0.5)}.tripetto-collector-rolling .btn-success.disabled,.tripetto-collector-rolling .btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.tripetto-collector-rolling .btn-success:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-success:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.tripetto-collector-rolling .btn-success:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-success:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,0.5)}.tripetto-collector-rolling .btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.tripetto-collector-rolling .btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.tripetto-collector-rolling .btn-info:focus,.tripetto-collector-rolling .btn-info.focus{box-shadow:0 0 0 .2rem rgba(58,176,195,0.5)}.tripetto-collector-rolling .btn-info.disabled,.tripetto-collector-rolling .btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.tripetto-collector-rolling .btn-info:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-info:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.tripetto-collector-rolling .btn-info:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-info:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,0.5)}.tripetto-collector-rolling .btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.tripetto-collector-rolling .btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.tripetto-collector-rolling .btn-warning:focus,.tripetto-collector-rolling .btn-warning.focus{box-shadow:0 0 0 .2rem rgba(222,170,12,0.5)}.tripetto-collector-rolling .btn-warning.disabled,.tripetto-collector-rolling .btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.tripetto-collector-rolling .btn-warning:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-warning:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.tripetto-collector-rolling .btn-warning:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-warning:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,0.5)}.tripetto-collector-rolling .btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.tripetto-collector-rolling .btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.tripetto-collector-rolling .btn-danger:focus,.tripetto-collector-rolling .btn-danger.focus{box-shadow:0 0 0 .2rem rgba(225,83,97,0.5)}.tripetto-collector-rolling .btn-danger.disabled,.tripetto-collector-rolling .btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.tripetto-collector-rolling .btn-danger:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-danger:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.tripetto-collector-rolling .btn-danger:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-danger:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,0.5)}.tripetto-collector-rolling .btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.tripetto-collector-rolling .btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.tripetto-collector-rolling .btn-light:focus,.tripetto-collector-rolling .btn-light.focus{box-shadow:0 0 0 .2rem rgba(216,217,219,0.5)}.tripetto-collector-rolling .btn-light.disabled,.tripetto-collector-rolling .btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.tripetto-collector-rolling .btn-light:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-light:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.tripetto-collector-rolling .btn-light:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-light:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,0.5)}.tripetto-collector-rolling .btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.tripetto-collector-rolling .btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.tripetto-collector-rolling .btn-dark:focus,.tripetto-collector-rolling .btn-dark.focus{box-shadow:0 0 0 .2rem rgba(82,88,93,0.5)}.tripetto-collector-rolling .btn-dark.disabled,.tripetto-collector-rolling .btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.tripetto-collector-rolling .btn-dark:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-dark:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.tripetto-collector-rolling .btn-dark:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-dark:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,0.5)}.tripetto-collector-rolling .btn-outline-primary{color:#007bff;border-color:#007bff}.tripetto-collector-rolling .btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.tripetto-collector-rolling .btn-outline-primary:focus,.tripetto-collector-rolling .btn-outline-primary.focus{box-shadow:0 0 0 .2rem rgba(0,123,255,0.5)}.tripetto-collector-rolling .btn-outline-primary.disabled,.tripetto-collector-rolling .btn-outline-primary:disabled{color:#007bff;background-color:transparent}.tripetto-collector-rolling .btn-outline-primary:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-outline-primary:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.tripetto-collector-rolling .btn-outline-primary:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,0.5)}.tripetto-collector-rolling .btn-outline-secondary{color:#6c757d;border-color:#6c757d}.tripetto-collector-rolling .btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.tripetto-collector-rolling .btn-outline-secondary:focus,.tripetto-collector-rolling .btn-outline-secondary.focus{box-shadow:0 0 0 .2rem rgba(108,117,125,0.5)}.tripetto-collector-rolling .btn-outline-secondary.disabled,.tripetto-collector-rolling .btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.tripetto-collector-rolling .btn-outline-secondary:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.tripetto-collector-rolling .btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,0.5)}.tripetto-collector-rolling .btn-outline-success{color:#28a745;border-color:#28a745}.tripetto-collector-rolling .btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.tripetto-collector-rolling .btn-outline-success:focus,.tripetto-collector-rolling .btn-outline-success.focus{box-shadow:0 0 0 .2rem rgba(40,167,69,0.5)}.tripetto-collector-rolling .btn-outline-success.disabled,.tripetto-collector-rolling .btn-outline-success:disabled{color:#28a745;background-color:transparent}.tripetto-collector-rolling .btn-outline-success:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-outline-success:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.tripetto-collector-rolling .btn-outline-success:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-outline-success:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,0.5)}.tripetto-collector-rolling .btn-outline-info{color:#17a2b8;border-color:#17a2b8}.tripetto-collector-rolling .btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.tripetto-collector-rolling .btn-outline-info:focus,.tripetto-collector-rolling .btn-outline-info.focus{box-shadow:0 0 0 .2rem rgba(23,162,184,0.5)}.tripetto-collector-rolling .btn-outline-info.disabled,.tripetto-collector-rolling .btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.tripetto-collector-rolling .btn-outline-info:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-outline-info:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.tripetto-collector-rolling .btn-outline-info:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-outline-info:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,0.5)}.tripetto-collector-rolling .btn-outline-warning{color:#ffc107;border-color:#ffc107}.tripetto-collector-rolling .btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.tripetto-collector-rolling .btn-outline-warning:focus,.tripetto-collector-rolling .btn-outline-warning.focus{box-shadow:0 0 0 .2rem rgba(255,193,7,0.5)}.tripetto-collector-rolling .btn-outline-warning.disabled,.tripetto-collector-rolling .btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.tripetto-collector-rolling .btn-outline-warning:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-outline-warning:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.tripetto-collector-rolling .btn-outline-warning:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-outline-warning:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,0.5)}.tripetto-collector-rolling .btn-outline-danger{color:#dc3545;border-color:#dc3545}.tripetto-collector-rolling .btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.tripetto-collector-rolling .btn-outline-danger:focus,.tripetto-collector-rolling .btn-outline-danger.focus{box-shadow:0 0 0 .2rem rgba(220,53,69,0.5)}.tripetto-collector-rolling .btn-outline-danger.disabled,.tripetto-collector-rolling .btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.tripetto-collector-rolling .btn-outline-danger:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-outline-danger:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.tripetto-collector-rolling .btn-outline-danger:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-outline-danger:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,0.5)}.tripetto-collector-rolling .btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.tripetto-collector-rolling .btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.tripetto-collector-rolling .btn-outline-light:focus,.tripetto-collector-rolling .btn-outline-light.focus{box-shadow:0 0 0 .2rem rgba(248,249,250,0.5)}.tripetto-collector-rolling .btn-outline-light.disabled,.tripetto-collector-rolling .btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.tripetto-collector-rolling .btn-outline-light:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-outline-light:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.tripetto-collector-rolling .btn-outline-light:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-outline-light:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,0.5)}.tripetto-collector-rolling .btn-outline-dark{color:#343a40;border-color:#343a40}.tripetto-collector-rolling .btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.tripetto-collector-rolling .btn-outline-dark:focus,.tripetto-collector-rolling .btn-outline-dark.focus{box-shadow:0 0 0 .2rem rgba(52,58,64,0.5)}.tripetto-collector-rolling .btn-outline-dark.disabled,.tripetto-collector-rolling .btn-outline-dark:disabled{color:#343a40;background-color:transparent}.tripetto-collector-rolling .btn-outline-dark:not(:disabled):not(.disabled):active,.tripetto-collector-rolling .btn-outline-dark:not(:disabled):not(.disabled).active,.show>.tripetto-collector-rolling .btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.tripetto-collector-rolling .btn-outline-dark:not(:disabled):not(.disabled):active:focus,.tripetto-collector-rolling .btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show>.tripetto-collector-rolling .btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,0.5)}.tripetto-collector-rolling .btn-link{font-weight:400;color:#007bff;text-decoration:none}.tripetto-collector-rolling .btn-link:hover{color:#0056b3;text-decoration:underline}.tripetto-collector-rolling .btn-link:focus,.tripetto-collector-rolling .btn-link.focus{text-decoration:underline;box-shadow:none}.tripetto-collector-rolling .btn-link:disabled,.tripetto-collector-rolling .btn-link.disabled{color:#6c757d;pointer-events:none}.tripetto-collector-rolling .btn-lg,.tripetto-collector-rolling .btn-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.tripetto-collector-rolling .btn-sm,.tripetto-collector-rolling .btn-group-sm>.btn{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.tripetto-collector-rolling .btn-block{display:block;width:100%}.tripetto-collector-rolling .btn-block+.btn-block{margin-top:.5rem}.tripetto-collector-rolling input[type="submit"].btn-block,.tripetto-collector-rolling input[type="reset"].btn-block,.tripetto-collector-rolling input[type="button"].btn-block{width:100%}.tripetto-collector-rolling .fade{transition:opacity 0.15s linear}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .fade{transition:none}}.tripetto-collector-rolling .fade:not(.show){opacity:0}.tripetto-collector-rolling .collapse:not(.show){display:none}.tripetto-collector-rolling .collapsing{position:relative;height:0;overflow:hidden;transition:height 0.35s ease}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .collapsing{transition:none}}.tripetto-collector-rolling .dropup,.tripetto-collector-rolling .dropright,.tripetto-collector-rolling .dropdown,.tripetto-collector-rolling .dropleft{position:relative}.tripetto-collector-rolling .dropdown-toggle{white-space:nowrap}.tripetto-collector-rolling .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.tripetto-collector-rolling .dropdown-toggle:empty::after{margin-left:0}.tripetto-collector-rolling .dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.15);border-radius:.25rem}.tripetto-collector-rolling .dropdown-menu-left{right:auto;left:0}.tripetto-collector-rolling .dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.tripetto-collector-rolling .dropdown-menu-sm-left{right:auto;left:0}.tripetto-collector-rolling .dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.tripetto-collector-rolling .dropdown-menu-md-left{right:auto;left:0}.tripetto-collector-rolling .dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.tripetto-collector-rolling .dropdown-menu-lg-left{right:auto;left:0}.tripetto-collector-rolling .dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.tripetto-collector-rolling .dropdown-menu-xl-left{right:auto;left:0}.tripetto-collector-rolling .dropdown-menu-xl-right{right:0;left:auto}}.tripetto-collector-rolling .dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.tripetto-collector-rolling .dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.tripetto-collector-rolling .dropup .dropdown-toggle:empty::after{margin-left:0}.tripetto-collector-rolling .dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.tripetto-collector-rolling .dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.tripetto-collector-rolling .dropright .dropdown-toggle:empty::after{margin-left:0}.tripetto-collector-rolling .dropright .dropdown-toggle::after{vertical-align:0}.tripetto-collector-rolling .dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.tripetto-collector-rolling .dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:""}.tripetto-collector-rolling .dropleft .dropdown-toggle::after{display:none}.tripetto-collector-rolling .dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.tripetto-collector-rolling .dropleft .dropdown-toggle:empty::after{margin-left:0}.tripetto-collector-rolling .dropleft .dropdown-toggle::before{vertical-align:0}.tripetto-collector-rolling .dropdown-menu[x-placement^="top"],.tripetto-collector-rolling .dropdown-menu[x-placement^="right"],.tripetto-collector-rolling .dropdown-menu[x-placement^="bottom"],.tripetto-collector-rolling .dropdown-menu[x-placement^="left"]{right:auto;bottom:auto}.tripetto-collector-rolling .dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.tripetto-collector-rolling .dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.tripetto-collector-rolling .dropdown-item:hover,.tripetto-collector-rolling .dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.tripetto-collector-rolling .dropdown-item.active,.tripetto-collector-rolling .dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.tripetto-collector-rolling .dropdown-item.disabled,.tripetto-collector-rolling .dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.tripetto-collector-rolling .dropdown-menu.show{display:block}.tripetto-collector-rolling .dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.tripetto-collector-rolling .dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.tripetto-collector-rolling .btn-group,.tripetto-collector-rolling .btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.tripetto-collector-rolling .btn-group>.btn,.tripetto-collector-rolling .btn-group-vertical>.btn{position:relative;flex:1 1 auto}.tripetto-collector-rolling .btn-group>.btn:hover,.tripetto-collector-rolling .btn-group-vertical>.btn:hover{z-index:1}.tripetto-collector-rolling .btn-group>.btn:focus,.tripetto-collector-rolling .btn-group>.btn:active,.tripetto-collector-rolling .btn-group>.btn.active,.tripetto-collector-rolling .btn-group-vertical>.btn:focus,.tripetto-collector-rolling .btn-group-vertical>.btn:active,.tripetto-collector-rolling .btn-group-vertical>.btn.active{z-index:1}.tripetto-collector-rolling .btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.tripetto-collector-rolling .btn-toolbar .input-group{width:auto}.tripetto-collector-rolling .btn-group>.btn:not(:first-child),.tripetto-collector-rolling .btn-group>.btn-group:not(:first-child){margin-left:-1px}.tripetto-collector-rolling .btn-group>.btn:not(:last-child):not(.dropdown-toggle),.tripetto-collector-rolling .btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.tripetto-collector-rolling .btn-group>.btn:not(:first-child),.tripetto-collector-rolling .btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.tripetto-collector-rolling .dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.tripetto-collector-rolling .dropdown-toggle-split::after,.dropup .tripetto-collector-rolling .dropdown-toggle-split::after,.dropright .tripetto-collector-rolling .dropdown-toggle-split::after{margin-left:0}.dropleft .tripetto-collector-rolling .dropdown-toggle-split::before{margin-right:0}.tripetto-collector-rolling .btn-sm+.dropdown-toggle-split,.tripetto-collector-rolling .btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.tripetto-collector-rolling .btn-lg+.dropdown-toggle-split,.tripetto-collector-rolling .btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.tripetto-collector-rolling .btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.tripetto-collector-rolling .btn-group-vertical>.btn,.tripetto-collector-rolling .btn-group-vertical>.btn-group{width:100%}.tripetto-collector-rolling .btn-group-vertical>.btn:not(:first-child),.tripetto-collector-rolling .btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.tripetto-collector-rolling .btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.tripetto-collector-rolling .btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.tripetto-collector-rolling .btn-group-vertical>.btn:not(:first-child),.tripetto-collector-rolling .btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.tripetto-collector-rolling .btn-group-toggle>.btn,.tripetto-collector-rolling .btn-group-toggle>.btn-group>.btn{margin-bottom:0}.tripetto-collector-rolling .btn-group-toggle>.btn input[type="radio"],.tripetto-collector-rolling .btn-group-toggle>.btn input[type="checkbox"],.tripetto-collector-rolling .btn-group-toggle>.btn-group>.btn input[type="radio"],.tripetto-collector-rolling .btn-group-toggle>.btn-group>.btn input[type="checkbox"]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.tripetto-collector-rolling .input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.tripetto-collector-rolling .input-group>.form-control,.tripetto-collector-rolling .input-group>.form-control-plaintext,.tripetto-collector-rolling .input-group>.custom-select,.tripetto-collector-rolling .input-group>.custom-file{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.tripetto-collector-rolling .input-group>.form-control+.form-control,.tripetto-collector-rolling .input-group>.form-control+.custom-select,.tripetto-collector-rolling .input-group>.form-control+.custom-file,.tripetto-collector-rolling .input-group>.form-control-plaintext+.form-control,.tripetto-collector-rolling .input-group>.form-control-plaintext+.custom-select,.tripetto-collector-rolling .input-group>.form-control-plaintext+.custom-file,.tripetto-collector-rolling .input-group>.custom-select+.form-control,.tripetto-collector-rolling .input-group>.custom-select+.custom-select,.tripetto-collector-rolling .input-group>.custom-select+.custom-file,.tripetto-collector-rolling .input-group>.custom-file+.form-control,.tripetto-collector-rolling .input-group>.custom-file+.custom-select,.tripetto-collector-rolling .input-group>.custom-file+.custom-file{margin-left:-1px}.tripetto-collector-rolling .input-group>.form-control:focus,.tripetto-collector-rolling .input-group>.custom-select:focus,.tripetto-collector-rolling .input-group>.custom-file .custom-file-input:focus ~ .custom-file-label{z-index:3}.tripetto-collector-rolling .input-group>.custom-file .custom-file-input:focus{z-index:4}.tripetto-collector-rolling .input-group>.form-control:not(:last-child),.tripetto-collector-rolling .input-group>.custom-select:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.tripetto-collector-rolling .input-group>.form-control:not(:first-child),.tripetto-collector-rolling .input-group>.custom-select:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.tripetto-collector-rolling .input-group>.custom-file{display:flex;align-items:center}.tripetto-collector-rolling .input-group>.custom-file:not(:last-child) .custom-file-label,.tripetto-collector-rolling .input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.tripetto-collector-rolling .input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.tripetto-collector-rolling .input-group-prepend,.tripetto-collector-rolling .input-group-append{display:flex}.tripetto-collector-rolling .input-group-prepend .btn,.tripetto-collector-rolling .input-group-append .btn{position:relative;z-index:2}.tripetto-collector-rolling .input-group-prepend .btn:focus,.tripetto-collector-rolling .input-group-append .btn:focus{z-index:3}.tripetto-collector-rolling .input-group-prepend .btn+.btn,.tripetto-collector-rolling .input-group-prepend .btn+.input-group-text,.tripetto-collector-rolling .input-group-prepend .input-group-text+.input-group-text,.tripetto-collector-rolling .input-group-prepend .input-group-text+.btn,.tripetto-collector-rolling .input-group-append .btn+.btn,.tripetto-collector-rolling .input-group-append .btn+.input-group-text,.tripetto-collector-rolling .input-group-append .input-group-text+.input-group-text,.tripetto-collector-rolling .input-group-append .input-group-text+.btn{margin-left:-1px}.tripetto-collector-rolling .input-group-prepend{margin-right:-1px}.tripetto-collector-rolling .input-group-append{margin-left:-1px}.tripetto-collector-rolling .input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.tripetto-collector-rolling .input-group-text input[type="radio"],.tripetto-collector-rolling .input-group-text input[type="checkbox"]{margin-top:0}.tripetto-collector-rolling .input-group-lg>.form-control:not(textarea),.tripetto-collector-rolling .input-group-lg>.custom-select{height:calc(1.5em + 1rem + 2px)}.tripetto-collector-rolling .input-group-lg>.form-control,.tripetto-collector-rolling .input-group-lg>.custom-select,.tripetto-collector-rolling .input-group-lg>.input-group-prepend>.input-group-text,.tripetto-collector-rolling .input-group-lg>.input-group-append>.input-group-text,.tripetto-collector-rolling .input-group-lg>.input-group-prepend>.btn,.tripetto-collector-rolling .input-group-lg>.input-group-append>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.tripetto-collector-rolling .input-group-sm>.form-control:not(textarea),.tripetto-collector-rolling .input-group-sm>.custom-select{height:calc(1.5em + .5rem + 2px)}.tripetto-collector-rolling .input-group-sm>.form-control,.tripetto-collector-rolling .input-group-sm>.custom-select,.tripetto-collector-rolling .input-group-sm>.input-group-prepend>.input-group-text,.tripetto-collector-rolling .input-group-sm>.input-group-append>.input-group-text,.tripetto-collector-rolling .input-group-sm>.input-group-prepend>.btn,.tripetto-collector-rolling .input-group-sm>.input-group-append>.btn{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.tripetto-collector-rolling .input-group-lg>.custom-select,.tripetto-collector-rolling .input-group-sm>.custom-select{padding-right:1.75rem}.tripetto-collector-rolling .input-group>.input-group-prepend>.btn,.tripetto-collector-rolling .input-group>.input-group-prepend>.input-group-text,.tripetto-collector-rolling .input-group>.input-group-append:not(:last-child)>.btn,.tripetto-collector-rolling .input-group>.input-group-append:not(:last-child)>.input-group-text,.tripetto-collector-rolling .input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.tripetto-collector-rolling .input-group>.input-group-append:last-child>.input-group-text:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.tripetto-collector-rolling .input-group>.input-group-append>.btn,.tripetto-collector-rolling .input-group>.input-group-append>.input-group-text,.tripetto-collector-rolling .input-group>.input-group-prepend:not(:first-child)>.btn,.tripetto-collector-rolling .input-group>.input-group-prepend:not(:first-child)>.input-group-text,.tripetto-collector-rolling .input-group>.input-group-prepend:first-child>.btn:not(:first-child),.tripetto-collector-rolling .input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.tripetto-collector-rolling .custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.tripetto-collector-rolling .custom-control-inline{display:inline-flex;margin-right:1rem}.tripetto-collector-rolling .custom-control-input{position:absolute;z-index:-1;opacity:0}.tripetto-collector-rolling .custom-control-input:checked ~ .custom-control-label::before{color:#fff;border-color:#007bff;background-color:#007bff}.tripetto-collector-rolling .custom-control-input:focus ~ .custom-control-label::before{box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.tripetto-collector-rolling .custom-control-input:focus:not(:checked) ~ .custom-control-label::before{border-color:#80bdff}.tripetto-collector-rolling .custom-control-input:not(:disabled):active ~ .custom-control-label::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.tripetto-collector-rolling .custom-control-input:disabled ~ .custom-control-label{color:#6c757d}.tripetto-collector-rolling .custom-control-input:disabled ~ .custom-control-label::before{background-color:#e9ecef}.tripetto-collector-rolling .custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.tripetto-collector-rolling .custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:"";background-color:#fff;border:#adb5bd solid 1px}.tripetto-collector-rolling .custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:"";background:no-repeat 50% / 50% 50%}.tripetto-collector-rolling .custom-checkbox .custom-control-label::before{border-radius:.25rem}.tripetto-collector-rolling .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%23fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3e%3c/svg%3e")}.tripetto-collector-rolling .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before{border-color:#007bff;background-color:#007bff}.tripetto-collector-rolling .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3e%3cpath stroke=\'%23fff\' d=\'M0 2h4\'/%3e%3c/svg%3e")}.tripetto-collector-rolling .custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.tripetto-collector-rolling .custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.tripetto-collector-rolling .custom-radio .custom-control-label::before{border-radius:50%}.tripetto-collector-rolling .custom-radio .custom-control-input:checked ~ .custom-control-label::after{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")}.tripetto-collector-rolling .custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.tripetto-collector-rolling .custom-switch{padding-left:2.25rem}.tripetto-collector-rolling .custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.tripetto-collector-rolling .custom-switch .custom-control-label::after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .custom-switch .custom-control-label::after{transition:none}}.tripetto-collector-rolling .custom-switch .custom-control-input:checked ~ .custom-control-label::after{background-color:#fff;transform:translateX(.75rem)}.tripetto-collector-rolling .custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.tripetto-collector-rolling .custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.tripetto-collector-rolling .custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.tripetto-collector-rolling .custom-select:focus::-ms-value{color:#495057;background-color:#fff}.tripetto-collector-rolling .custom-select[multiple],.tripetto-collector-rolling .custom-select[size]:not([size="1"]){height:auto;padding-right:.75rem;background-image:none}.tripetto-collector-rolling .custom-select:disabled{color:#6c757d;background-color:#e9ecef}.tripetto-collector-rolling .custom-select::-ms-expand{display:none}.tripetto-collector-rolling .custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.tripetto-collector-rolling .custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.tripetto-collector-rolling .custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);margin-bottom:0}.tripetto-collector-rolling .custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + .75rem + 2px);margin:0;opacity:0}.tripetto-collector-rolling .custom-file-input:focus ~ .custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.tripetto-collector-rolling .custom-file-input:disabled ~ .custom-file-label{background-color:#e9ecef}.tripetto-collector-rolling .custom-file-input:lang(en) ~ .custom-file-label::after{content:"Browse"}.tripetto-collector-rolling .custom-file-input ~ .custom-file-label[data-browse]::after{content:attr(data-browse)}.tripetto-collector-rolling .custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.tripetto-collector-rolling .custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);padding:.375rem .75rem;line-height:1.5;color:#495057;content:"Browse";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.tripetto-collector-rolling .custom-range{width:100%;height:calc(1rem + .4rem);padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.tripetto-collector-rolling .custom-range:focus{outline:none}.tripetto-collector-rolling .custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,0.25)}.tripetto-collector-rolling .custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,0.25)}.tripetto-collector-rolling .custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,0.25)}.tripetto-collector-rolling .custom-range::-moz-focus-outer{border:0}.tripetto-collector-rolling .custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .custom-range::-webkit-slider-thumb{transition:none}}.tripetto-collector-rolling .custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.tripetto-collector-rolling .custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.tripetto-collector-rolling .custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .custom-range::-moz-range-thumb{transition:none}}.tripetto-collector-rolling .custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.tripetto-collector-rolling .custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.tripetto-collector-rolling .custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .custom-range::-ms-thumb{transition:none}}.tripetto-collector-rolling .custom-range::-ms-thumb:active{background-color:#b3d7ff}.tripetto-collector-rolling .custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.tripetto-collector-rolling .custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.tripetto-collector-rolling .custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.tripetto-collector-rolling .custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.tripetto-collector-rolling .custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.tripetto-collector-rolling .custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.tripetto-collector-rolling .custom-range:disabled::-moz-range-track{cursor:default}.tripetto-collector-rolling .custom-range:disabled::-ms-thumb{background-color:#adb5bd}.tripetto-collector-rolling .custom-control-label::before,.tripetto-collector-rolling .custom-file-label,.tripetto-collector-rolling .custom-select{transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .custom-control-label::before,.tripetto-collector-rolling .custom-file-label,.tripetto-collector-rolling .custom-select{transition:none}}.tripetto-collector-rolling .nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.tripetto-collector-rolling .nav-link{display:block;padding:.5rem 1rem}.tripetto-collector-rolling .nav-link:hover,.tripetto-collector-rolling .nav-link:focus{text-decoration:none}.tripetto-collector-rolling .nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.tripetto-collector-rolling .nav-tabs{border-bottom:1px solid #dee2e6}.tripetto-collector-rolling .nav-tabs .nav-item{margin-bottom:-1px}.tripetto-collector-rolling .nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.tripetto-collector-rolling .nav-tabs .nav-link:hover,.tripetto-collector-rolling .nav-tabs .nav-link:focus{border-color:#e9ecef #e9ecef #dee2e6}.tripetto-collector-rolling .nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.tripetto-collector-rolling .nav-tabs .nav-link.active,.tripetto-collector-rolling .nav-tabs .nav-item.show .nav-link{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.tripetto-collector-rolling .nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.tripetto-collector-rolling .nav-pills .nav-link{border-radius:.25rem}.tripetto-collector-rolling .nav-pills .nav-link.active,.tripetto-collector-rolling .nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.tripetto-collector-rolling .nav-fill .nav-item{flex:1 1 auto;text-align:center}.tripetto-collector-rolling .nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tripetto-collector-rolling .tab-content>.tab-pane{display:none}.tripetto-collector-rolling .tab-content>.active{display:block}.tripetto-collector-rolling .navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.tripetto-collector-rolling .navbar>.container,.tripetto-collector-rolling .navbar>.container-fluid{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.tripetto-collector-rolling .navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.tripetto-collector-rolling .navbar-brand:hover,.tripetto-collector-rolling .navbar-brand:focus{text-decoration:none}.tripetto-collector-rolling .navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.tripetto-collector-rolling .navbar-nav .nav-link{padding-right:0;padding-left:0}.tripetto-collector-rolling .navbar-nav .dropdown-menu{position:static;float:none}.tripetto-collector-rolling .navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.tripetto-collector-rolling .navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.tripetto-collector-rolling .navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.tripetto-collector-rolling .navbar-toggler:hover,.tripetto-collector-rolling .navbar-toggler:focus{text-decoration:none}.tripetto-collector-rolling .navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:"";background:no-repeat center center;background-size:100% 100%}@media (max-width: 575.98px){.tripetto-collector-rolling .navbar-expand-sm>.container,.tripetto-collector-rolling .navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 576px){.tripetto-collector-rolling .navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.tripetto-collector-rolling .navbar-expand-sm .navbar-nav{flex-direction:row}.tripetto-collector-rolling .navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.tripetto-collector-rolling .navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.tripetto-collector-rolling .navbar-expand-sm>.container,.tripetto-collector-rolling .navbar-expand-sm>.container-fluid{flex-wrap:nowrap}.tripetto-collector-rolling .navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.tripetto-collector-rolling .navbar-expand-sm .navbar-toggler{display:none}}@media (max-width: 767.98px){.tripetto-collector-rolling .navbar-expand-md>.container,.tripetto-collector-rolling .navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 768px){.tripetto-collector-rolling .navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.tripetto-collector-rolling .navbar-expand-md .navbar-nav{flex-direction:row}.tripetto-collector-rolling .navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.tripetto-collector-rolling .navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.tripetto-collector-rolling .navbar-expand-md>.container,.tripetto-collector-rolling .navbar-expand-md>.container-fluid{flex-wrap:nowrap}.tripetto-collector-rolling .navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.tripetto-collector-rolling .navbar-expand-md .navbar-toggler{display:none}}@media (max-width: 991.98px){.tripetto-collector-rolling .navbar-expand-lg>.container,.tripetto-collector-rolling .navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 992px){.tripetto-collector-rolling .navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.tripetto-collector-rolling .navbar-expand-lg .navbar-nav{flex-direction:row}.tripetto-collector-rolling .navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.tripetto-collector-rolling .navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.tripetto-collector-rolling .navbar-expand-lg>.container,.tripetto-collector-rolling .navbar-expand-lg>.container-fluid{flex-wrap:nowrap}.tripetto-collector-rolling .navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.tripetto-collector-rolling .navbar-expand-lg .navbar-toggler{display:none}}@media (max-width: 1199.98px){.tripetto-collector-rolling .navbar-expand-xl>.container,.tripetto-collector-rolling .navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 1200px){.tripetto-collector-rolling .navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.tripetto-collector-rolling .navbar-expand-xl .navbar-nav{flex-direction:row}.tripetto-collector-rolling .navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.tripetto-collector-rolling .navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.tripetto-collector-rolling .navbar-expand-xl>.container,.tripetto-collector-rolling .navbar-expand-xl>.container-fluid{flex-wrap:nowrap}.tripetto-collector-rolling .navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.tripetto-collector-rolling .navbar-expand-xl .navbar-toggler{display:none}}.tripetto-collector-rolling .navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.tripetto-collector-rolling .navbar-expand>.container,.tripetto-collector-rolling .navbar-expand>.container-fluid{padding-right:0;padding-left:0}.tripetto-collector-rolling .navbar-expand .navbar-nav{flex-direction:row}.tripetto-collector-rolling .navbar-expand .navbar-nav .dropdown-menu{position:absolute}.tripetto-collector-rolling .navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.tripetto-collector-rolling .navbar-expand>.container,.tripetto-collector-rolling .navbar-expand>.container-fluid{flex-wrap:nowrap}.tripetto-collector-rolling .navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.tripetto-collector-rolling .navbar-expand .navbar-toggler{display:none}.tripetto-collector-rolling .navbar-light .navbar-brand{color:rgba(0,0,0,0.9)}.tripetto-collector-rolling .navbar-light .navbar-brand:hover,.tripetto-collector-rolling .navbar-light .navbar-brand:focus{color:rgba(0,0,0,0.9)}.tripetto-collector-rolling .navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,0.5)}.tripetto-collector-rolling .navbar-light .navbar-nav .nav-link:hover,.tripetto-collector-rolling .navbar-light .navbar-nav .nav-link:focus{color:rgba(0,0,0,0.7)}.tripetto-collector-rolling .navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,0.3)}.tripetto-collector-rolling .navbar-light .navbar-nav .show>.nav-link,.tripetto-collector-rolling .navbar-light .navbar-nav .active>.nav-link,.tripetto-collector-rolling .navbar-light .navbar-nav .nav-link.show,.tripetto-collector-rolling .navbar-light .navbar-nav .nav-link.active{color:rgba(0,0,0,0.9)}.tripetto-collector-rolling .navbar-light .navbar-toggler{color:rgba(0,0,0,0.5);border-color:rgba(0,0,0,0.1)}.tripetto-collector-rolling .navbar-light .navbar-toggler-icon{background-image:url("data:image/svg+xml,%3csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath stroke=\'rgba(0,0,0,0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")}.tripetto-collector-rolling .navbar-light .navbar-text{color:rgba(0,0,0,0.5)}.tripetto-collector-rolling .navbar-light .navbar-text a{color:rgba(0,0,0,0.9)}.tripetto-collector-rolling .navbar-light .navbar-text a:hover,.tripetto-collector-rolling .navbar-light .navbar-text a:focus{color:rgba(0,0,0,0.9)}.tripetto-collector-rolling .navbar-dark .navbar-brand{color:#fff}.tripetto-collector-rolling .navbar-dark .navbar-brand:hover,.tripetto-collector-rolling .navbar-dark .navbar-brand:focus{color:#fff}.tripetto-collector-rolling .navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,0.5)}.tripetto-collector-rolling .navbar-dark .navbar-nav .nav-link:hover,.tripetto-collector-rolling .navbar-dark .navbar-nav .nav-link:focus{color:rgba(255,255,255,0.75)}.tripetto-collector-rolling .navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,0.25)}.tripetto-collector-rolling .navbar-dark .navbar-nav .show>.nav-link,.tripetto-collector-rolling .navbar-dark .navbar-nav .active>.nav-link,.tripetto-collector-rolling .navbar-dark .navbar-nav .nav-link.show,.tripetto-collector-rolling .navbar-dark .navbar-nav .nav-link.active{color:#fff}.tripetto-collector-rolling .navbar-dark .navbar-toggler{color:rgba(255,255,255,0.5);border-color:rgba(255,255,255,0.1)}.tripetto-collector-rolling .navbar-dark .navbar-toggler-icon{background-image:url("data:image/svg+xml,%3csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath stroke=\'rgba(255,255,255,0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")}.tripetto-collector-rolling .navbar-dark .navbar-text{color:rgba(255,255,255,0.5)}.tripetto-collector-rolling .navbar-dark .navbar-text a{color:#fff}.tripetto-collector-rolling .navbar-dark .navbar-text a:hover,.tripetto-collector-rolling .navbar-dark .navbar-text a:focus{color:#fff}.tripetto-collector-rolling .card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,0.125);border-radius:.25rem}.tripetto-collector-rolling .card>hr{margin-right:0;margin-left:0}.tripetto-collector-rolling .card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.tripetto-collector-rolling .card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.tripetto-collector-rolling .card-body{flex:1 1 auto;padding:1.25rem}.tripetto-collector-rolling .card-title{margin-bottom:.75rem}.tripetto-collector-rolling .card-subtitle{margin-top:-.375rem;margin-bottom:0}.tripetto-collector-rolling .card-text:last-child{margin-bottom:0}.tripetto-collector-rolling .card-link:hover{text-decoration:none}.tripetto-collector-rolling .card-link+.card-link{margin-left:1.25rem}.tripetto-collector-rolling .card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.125)}.tripetto-collector-rolling .card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.tripetto-collector-rolling .card-header+.list-group .list-group-item:first-child{border-top:0}.tripetto-collector-rolling .card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,0.03);border-top:1px solid rgba(0,0,0,0.125)}.tripetto-collector-rolling .card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.tripetto-collector-rolling .card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.tripetto-collector-rolling .card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.tripetto-collector-rolling .card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.tripetto-collector-rolling .card-img{width:100%;border-radius:calc(.25rem - 1px)}.tripetto-collector-rolling .card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.tripetto-collector-rolling .card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.tripetto-collector-rolling .card-deck{display:flex;flex-direction:column}.tripetto-collector-rolling .card-deck .card{margin-bottom:15px}@media (min-width: 576px){.tripetto-collector-rolling .card-deck{flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.tripetto-collector-rolling .card-deck .card{display:flex;flex:1 0 0%;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.tripetto-collector-rolling .card-group{display:flex;flex-direction:column}.tripetto-collector-rolling .card-group>.card{margin-bottom:15px}@media (min-width: 576px){.tripetto-collector-rolling .card-group{flex-flow:row wrap}.tripetto-collector-rolling .card-group>.card{flex:1 0 0%;margin-bottom:0}.tripetto-collector-rolling .card-group>.card+.card{margin-left:0;border-left:0}.tripetto-collector-rolling .card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.tripetto-collector-rolling .card-group>.card:not(:last-child) .card-img-top,.tripetto-collector-rolling .card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.tripetto-collector-rolling .card-group>.card:not(:last-child) .card-img-bottom,.tripetto-collector-rolling .card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.tripetto-collector-rolling .card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.tripetto-collector-rolling .card-group>.card:not(:first-child) .card-img-top,.tripetto-collector-rolling .card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.tripetto-collector-rolling .card-group>.card:not(:first-child) .card-img-bottom,.tripetto-collector-rolling .card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.tripetto-collector-rolling .card-columns .card{margin-bottom:.75rem}@media (min-width: 576px){.tripetto-collector-rolling .card-columns{-moz-column-count:3;column-count:3;grid-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.tripetto-collector-rolling .card-columns .card{display:inline-block;width:100%}}.tripetto-collector-rolling .accordion>.card{overflow:hidden}.tripetto-collector-rolling .accordion>.card:not(:first-of-type) .card-header:first-child{border-radius:0}.tripetto-collector-rolling .accordion>.card:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0}.tripetto-collector-rolling .accordion>.card:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.tripetto-collector-rolling .accordion>.card:last-of-type{border-top-left-radius:0;border-top-right-radius:0}.tripetto-collector-rolling .accordion>.card .card-header{margin-bottom:-1px}.tripetto-collector-rolling .breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.tripetto-collector-rolling .breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.tripetto-collector-rolling .breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:"/"}.tripetto-collector-rolling .breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.tripetto-collector-rolling .breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.tripetto-collector-rolling .breadcrumb-item.active{color:#6c757d}.tripetto-collector-rolling .pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.tripetto-collector-rolling .page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.tripetto-collector-rolling .page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.tripetto-collector-rolling .page-link:focus{z-index:2;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.tripetto-collector-rolling .page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.tripetto-collector-rolling .page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.tripetto-collector-rolling .page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.tripetto-collector-rolling .page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.tripetto-collector-rolling .pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.tripetto-collector-rolling .pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.tripetto-collector-rolling .pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.tripetto-collector-rolling .pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.tripetto-collector-rolling .pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.tripetto-collector-rolling .pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.tripetto-collector-rolling .badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .badge{transition:none}}a.tripetto-collector-rolling .badge:hover,a.tripetto-collector-rolling .badge:focus{text-decoration:none}.tripetto-collector-rolling .badge:empty{display:none}.tripetto-collector-rolling .btn .badge{position:relative;top:-1px}.tripetto-collector-rolling .badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.tripetto-collector-rolling .badge-primary{color:#fff;background-color:#007bff}a.tripetto-collector-rolling .badge-primary:hover,a.tripetto-collector-rolling .badge-primary:focus{color:#fff;background-color:#0062cc}a.tripetto-collector-rolling .badge-primary:focus,a.tripetto-collector-rolling .badge-primary.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,0.5)}.tripetto-collector-rolling .badge-secondary{color:#fff;background-color:#6c757d}a.tripetto-collector-rolling .badge-secondary:hover,a.tripetto-collector-rolling .badge-secondary:focus{color:#fff;background-color:#545b62}a.tripetto-collector-rolling .badge-secondary:focus,a.tripetto-collector-rolling .badge-secondary.focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,0.5)}.tripetto-collector-rolling .badge-success{color:#fff;background-color:#28a745}a.tripetto-collector-rolling .badge-success:hover,a.tripetto-collector-rolling .badge-success:focus{color:#fff;background-color:#1e7e34}a.tripetto-collector-rolling .badge-success:focus,a.tripetto-collector-rolling .badge-success.focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,0.5)}.tripetto-collector-rolling .badge-info{color:#fff;background-color:#17a2b8}a.tripetto-collector-rolling .badge-info:hover,a.tripetto-collector-rolling .badge-info:focus{color:#fff;background-color:#117a8b}a.tripetto-collector-rolling .badge-info:focus,a.tripetto-collector-rolling .badge-info.focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,0.5)}.tripetto-collector-rolling .badge-warning{color:#212529;background-color:#ffc107}a.tripetto-collector-rolling .badge-warning:hover,a.tripetto-collector-rolling .badge-warning:focus{color:#212529;background-color:#d39e00}a.tripetto-collector-rolling .badge-warning:focus,a.tripetto-collector-rolling .badge-warning.focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,0.5)}.tripetto-collector-rolling .badge-danger{color:#fff;background-color:#dc3545}a.tripetto-collector-rolling .badge-danger:hover,a.tripetto-collector-rolling .badge-danger:focus{color:#fff;background-color:#bd2130}a.tripetto-collector-rolling .badge-danger:focus,a.tripetto-collector-rolling .badge-danger.focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,0.5)}.tripetto-collector-rolling .badge-light{color:#212529;background-color:#f8f9fa}a.tripetto-collector-rolling .badge-light:hover,a.tripetto-collector-rolling .badge-light:focus{color:#212529;background-color:#dae0e5}a.tripetto-collector-rolling .badge-light:focus,a.tripetto-collector-rolling .badge-light.focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,0.5)}.tripetto-collector-rolling .badge-dark{color:#fff;background-color:#343a40}a.tripetto-collector-rolling .badge-dark:hover,a.tripetto-collector-rolling .badge-dark:focus{color:#fff;background-color:#1d2124}a.tripetto-collector-rolling .badge-dark:focus,a.tripetto-collector-rolling .badge-dark.focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,0.5)}.tripetto-collector-rolling .jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width: 576px){.tripetto-collector-rolling .jumbotron{padding:4rem 2rem}}.tripetto-collector-rolling .jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.tripetto-collector-rolling .alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.tripetto-collector-rolling .alert-heading{color:inherit}.tripetto-collector-rolling .alert-link{font-weight:700}.tripetto-collector-rolling .alert-dismissible{padding-right:4rem}.tripetto-collector-rolling .alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.tripetto-collector-rolling .alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.tripetto-collector-rolling .alert-primary hr{border-top-color:#9fcdff}.tripetto-collector-rolling .alert-primary .alert-link{color:#002752}.tripetto-collector-rolling .alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.tripetto-collector-rolling .alert-secondary hr{border-top-color:#c8cbcf}.tripetto-collector-rolling .alert-secondary .alert-link{color:#202326}.tripetto-collector-rolling .alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.tripetto-collector-rolling .alert-success hr{border-top-color:#b1dfbb}.tripetto-collector-rolling .alert-success .alert-link{color:#0b2e13}.tripetto-collector-rolling .alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.tripetto-collector-rolling .alert-info hr{border-top-color:#abdde5}.tripetto-collector-rolling .alert-info .alert-link{color:#062c33}.tripetto-collector-rolling .alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.tripetto-collector-rolling .alert-warning hr{border-top-color:#ffe8a1}.tripetto-collector-rolling .alert-warning .alert-link{color:#533f03}.tripetto-collector-rolling .alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.tripetto-collector-rolling .alert-danger hr{border-top-color:#f1b0b7}.tripetto-collector-rolling .alert-danger .alert-link{color:#491217}.tripetto-collector-rolling .alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.tripetto-collector-rolling .alert-light hr{border-top-color:#ececf6}.tripetto-collector-rolling .alert-light .alert-link{color:#686868}.tripetto-collector-rolling .alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.tripetto-collector-rolling .alert-dark hr{border-top-color:#b9bbbe}.tripetto-collector-rolling .alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.tripetto-collector-rolling .progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.tripetto-collector-rolling .progress-bar{display:flex;flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width 0.6s ease}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .progress-bar{transition:none}}.tripetto-collector-rolling .progress-bar-striped{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.tripetto-collector-rolling .progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .progress-bar-animated{-webkit-animation:none;animation:none}}.tripetto-collector-rolling .media{display:flex;align-items:flex-start}.tripetto-collector-rolling .media-body{flex:1}.tripetto-collector-rolling .list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0}.tripetto-collector-rolling .list-group-item-action{width:100%;color:#495057;text-align:inherit}.tripetto-collector-rolling .list-group-item-action:hover,.tripetto-collector-rolling .list-group-item-action:focus{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.tripetto-collector-rolling .list-group-item-action:active{color:#212529;background-color:#e9ecef}.tripetto-collector-rolling .list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,0.125)}.tripetto-collector-rolling .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.tripetto-collector-rolling .list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.tripetto-collector-rolling .list-group-item.disabled,.tripetto-collector-rolling .list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.tripetto-collector-rolling .list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.tripetto-collector-rolling .list-group-horizontal{flex-direction:row}.tripetto-collector-rolling .list-group-horizontal .list-group-item{margin-right:-1px;margin-bottom:0}.tripetto-collector-rolling .list-group-horizontal .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.tripetto-collector-rolling .list-group-horizontal .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}@media (min-width: 576px){.tripetto-collector-rolling .list-group-horizontal-sm{flex-direction:row}.tripetto-collector-rolling .list-group-horizontal-sm .list-group-item{margin-right:-1px;margin-bottom:0}.tripetto-collector-rolling .list-group-horizontal-sm .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.tripetto-collector-rolling .list-group-horizontal-sm .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width: 768px){.tripetto-collector-rolling .list-group-horizontal-md{flex-direction:row}.tripetto-collector-rolling .list-group-horizontal-md .list-group-item{margin-right:-1px;margin-bottom:0}.tripetto-collector-rolling .list-group-horizontal-md .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.tripetto-collector-rolling .list-group-horizontal-md .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width: 992px){.tripetto-collector-rolling .list-group-horizontal-lg{flex-direction:row}.tripetto-collector-rolling .list-group-horizontal-lg .list-group-item{margin-right:-1px;margin-bottom:0}.tripetto-collector-rolling .list-group-horizontal-lg .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.tripetto-collector-rolling .list-group-horizontal-lg .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width: 1200px){.tripetto-collector-rolling .list-group-horizontal-xl{flex-direction:row}.tripetto-collector-rolling .list-group-horizontal-xl .list-group-item{margin-right:-1px;margin-bottom:0}.tripetto-collector-rolling .list-group-horizontal-xl .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.tripetto-collector-rolling .list-group-horizontal-xl .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}.tripetto-collector-rolling .list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.tripetto-collector-rolling .list-group-flush .list-group-item:last-child{margin-bottom:-1px}.tripetto-collector-rolling .list-group-flush:first-child .list-group-item:first-child{border-top:0}.tripetto-collector-rolling .list-group-flush:last-child .list-group-item:last-child{margin-bottom:0;border-bottom:0}.tripetto-collector-rolling .list-group-item-primary{color:#004085;background-color:#b8daff}.tripetto-collector-rolling .list-group-item-primary.list-group-item-action:hover,.tripetto-collector-rolling .list-group-item-primary.list-group-item-action:focus{color:#004085;background-color:#9fcdff}.tripetto-collector-rolling .list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.tripetto-collector-rolling .list-group-item-secondary{color:#383d41;background-color:#d6d8db}.tripetto-collector-rolling .list-group-item-secondary.list-group-item-action:hover,.tripetto-collector-rolling .list-group-item-secondary.list-group-item-action:focus{color:#383d41;background-color:#c8cbcf}.tripetto-collector-rolling .list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.tripetto-collector-rolling .list-group-item-success{color:#155724;background-color:#c3e6cb}.tripetto-collector-rolling .list-group-item-success.list-group-item-action:hover,.tripetto-collector-rolling .list-group-item-success.list-group-item-action:focus{color:#155724;background-color:#b1dfbb}.tripetto-collector-rolling .list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.tripetto-collector-rolling .list-group-item-info{color:#0c5460;background-color:#bee5eb}.tripetto-collector-rolling .list-group-item-info.list-group-item-action:hover,.tripetto-collector-rolling .list-group-item-info.list-group-item-action:focus{color:#0c5460;background-color:#abdde5}.tripetto-collector-rolling .list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.tripetto-collector-rolling .list-group-item-warning{color:#856404;background-color:#ffeeba}.tripetto-collector-rolling .list-group-item-warning.list-group-item-action:hover,.tripetto-collector-rolling .list-group-item-warning.list-group-item-action:focus{color:#856404;background-color:#ffe8a1}.tripetto-collector-rolling .list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.tripetto-collector-rolling .list-group-item-danger{color:#721c24;background-color:#f5c6cb}.tripetto-collector-rolling .list-group-item-danger.list-group-item-action:hover,.tripetto-collector-rolling .list-group-item-danger.list-group-item-action:focus{color:#721c24;background-color:#f1b0b7}.tripetto-collector-rolling .list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.tripetto-collector-rolling .list-group-item-light{color:#818182;background-color:#fdfdfe}.tripetto-collector-rolling .list-group-item-light.list-group-item-action:hover,.tripetto-collector-rolling .list-group-item-light.list-group-item-action:focus{color:#818182;background-color:#ececf6}.tripetto-collector-rolling .list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.tripetto-collector-rolling .list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.tripetto-collector-rolling .list-group-item-dark.list-group-item-action:hover,.tripetto-collector-rolling .list-group-item-dark.list-group-item-action:focus{color:#1b1e21;background-color:#b9bbbe}.tripetto-collector-rolling .list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.tripetto-collector-rolling .close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.tripetto-collector-rolling .close:hover{color:#000;text-decoration:none}.tripetto-collector-rolling .close:not(:disabled):not(.disabled):hover,.tripetto-collector-rolling .close:not(:disabled):not(.disabled):focus{opacity:.75}.tripetto-collector-rolling button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.tripetto-collector-rolling a.close.disabled{pointer-events:none}.tripetto-collector-rolling .toast{max-width:350px;overflow:hidden;font-size:.875rem;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border:1px solid rgba(0,0,0,0.1);box-shadow:0 0.25rem 0.75rem rgba(0,0,0,0.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.tripetto-collector-rolling .toast:not(:last-child){margin-bottom:.75rem}.tripetto-collector-rolling .toast.showing{opacity:1}.tripetto-collector-rolling .toast.show{display:block;opacity:1}.tripetto-collector-rolling .toast.hide{display:none}.tripetto-collector-rolling .toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,0.05)}.tripetto-collector-rolling .toast-body{padding:.75rem}.tripetto-collector-rolling .modal-open{overflow:hidden}.tripetto-collector-rolling .modal-open .modal{overflow-x:hidden;overflow-y:auto}.tripetto-collector-rolling .modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.tripetto-collector-rolling .modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .tripetto-collector-rolling .modal-dialog{transition:transform 0.3s ease-out;transform:translate(0, -50px)}@media (prefers-reduced-motion: reduce){.modal.fade .tripetto-collector-rolling .modal-dialog{transition:none}}.modal.show .tripetto-collector-rolling .modal-dialog{transform:none}.tripetto-collector-rolling .modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.tripetto-collector-rolling .modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.tripetto-collector-rolling .modal-dialog-scrollable .modal-header,.tripetto-collector-rolling .modal-dialog-scrollable .modal-footer{flex-shrink:0}.tripetto-collector-rolling .modal-dialog-scrollable .modal-body{overflow-y:auto}.tripetto-collector-rolling .modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.tripetto-collector-rolling .modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);content:""}.tripetto-collector-rolling .modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.tripetto-collector-rolling .modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.tripetto-collector-rolling .modal-dialog-centered.modal-dialog-scrollable::before{content:none}.tripetto-collector-rolling .modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem;outline:0}.tripetto-collector-rolling .modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.tripetto-collector-rolling .modal-backdrop.fade{opacity:0}.tripetto-collector-rolling .modal-backdrop.show{opacity:.5}.tripetto-collector-rolling .modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.tripetto-collector-rolling .modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.tripetto-collector-rolling .modal-title{margin-bottom:0;line-height:1.5}.tripetto-collector-rolling .modal-body{position:relative;flex:1 1 auto;padding:1rem}.tripetto-collector-rolling .modal-footer{display:flex;align-items:center;justify-content:flex-end;padding:1rem;border-top:1px solid #dee2e6;border-bottom-right-radius:.3rem;border-bottom-left-radius:.3rem}.tripetto-collector-rolling .modal-footer>:not(:first-child){margin-left:.25rem}.tripetto-collector-rolling .modal-footer>:not(:last-child){margin-right:.25rem}.tripetto-collector-rolling .modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width: 576px){.tripetto-collector-rolling .modal-dialog{max-width:500px;margin:1.75rem auto}.tripetto-collector-rolling .modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.tripetto-collector-rolling .modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.tripetto-collector-rolling .modal-dialog-centered{min-height:calc(100% - 3.5rem)}.tripetto-collector-rolling .modal-dialog-centered::before{height:calc(100vh - 3.5rem)}.tripetto-collector-rolling .modal-sm{max-width:300px}}@media (min-width: 992px){.tripetto-collector-rolling .modal-lg,.tripetto-collector-rolling .modal-xl{max-width:800px}}@media (min-width: 1200px){.tripetto-collector-rolling .modal-xl{max-width:1140px}}[dir="ltr"] .tripetto-collector-rolling .tooltip{text-align:left}[dir="rtl"] .tripetto-collector-rolling .tooltip{text-align:right}.tripetto-collector-rolling .tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tripetto-collector-rolling .tooltip.show{opacity:.9}.tripetto-collector-rolling .tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tripetto-collector-rolling .tooltip .arrow::before{position:absolute;content:"";border-color:transparent;border-style:solid}.tripetto-collector-rolling .bs-tooltip-top,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="top"]{padding:.4rem 0}.tripetto-collector-rolling .bs-tooltip-top .arrow,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="top"] .arrow{bottom:0}.tripetto-collector-rolling .bs-tooltip-top .arrow::before,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="top"] .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.tripetto-collector-rolling .bs-tooltip-right,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="right"]{padding:0 .4rem}.tripetto-collector-rolling .bs-tooltip-right .arrow,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="right"] .arrow{left:0;width:.4rem;height:.8rem}.tripetto-collector-rolling .bs-tooltip-right .arrow::before,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="right"] .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.tripetto-collector-rolling .bs-tooltip-bottom,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="bottom"]{padding:.4rem 0}.tripetto-collector-rolling .bs-tooltip-bottom .arrow,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="bottom"] .arrow{top:0}.tripetto-collector-rolling .bs-tooltip-bottom .arrow::before,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="bottom"] .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.tripetto-collector-rolling .bs-tooltip-left,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="left"]{padding:0 .4rem}.tripetto-collector-rolling .bs-tooltip-left .arrow,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="left"] .arrow{right:0;width:.4rem;height:.8rem}.tripetto-collector-rolling .bs-tooltip-left .arrow::before,.tripetto-collector-rolling .bs-tooltip-auto[x-placement^="left"] .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tripetto-collector-rolling .tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}[dir="ltr"] .tripetto-collector-rolling .popover{text-align:left}[dir="rtl"] .tripetto-collector-rolling .popover{text-align:right}.tripetto-collector-rolling .popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem}.tripetto-collector-rolling .popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.tripetto-collector-rolling .popover .arrow::before,.tripetto-collector-rolling .popover .arrow::after{position:absolute;display:block;content:"";border-color:transparent;border-style:solid}.tripetto-collector-rolling .bs-popover-top,.tripetto-collector-rolling .bs-popover-auto[x-placement^="top"]{margin-bottom:.5rem}.tripetto-collector-rolling .bs-popover-top>.arrow,.tripetto-collector-rolling .bs-popover-auto[x-placement^="top"]>.arrow{bottom:calc((.5rem + 1px) * -1)}.tripetto-collector-rolling .bs-popover-top>.arrow::before,.tripetto-collector-rolling .bs-popover-auto[x-placement^="top"]>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,0.25)}.tripetto-collector-rolling .bs-popover-top>.arrow::after,.tripetto-collector-rolling .bs-popover-auto[x-placement^="top"]>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.tripetto-collector-rolling .bs-popover-right,.tripetto-collector-rolling .bs-popover-auto[x-placement^="right"]{margin-left:.5rem}.tripetto-collector-rolling .bs-popover-right>.arrow,.tripetto-collector-rolling .bs-popover-auto[x-placement^="right"]>.arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.tripetto-collector-rolling .bs-popover-right>.arrow::before,.tripetto-collector-rolling .bs-popover-auto[x-placement^="right"]>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,0.25)}.tripetto-collector-rolling .bs-popover-right>.arrow::after,.tripetto-collector-rolling .bs-popover-auto[x-placement^="right"]>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.tripetto-collector-rolling .bs-popover-bottom,.tripetto-collector-rolling .bs-popover-auto[x-placement^="bottom"]{margin-top:.5rem}.tripetto-collector-rolling .bs-popover-bottom>.arrow,.tripetto-collector-rolling .bs-popover-auto[x-placement^="bottom"]>.arrow{top:calc((.5rem + 1px) * -1)}.tripetto-collector-rolling .bs-popover-bottom>.arrow::before,.tripetto-collector-rolling .bs-popover-auto[x-placement^="bottom"]>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,0.25)}.tripetto-collector-rolling .bs-popover-bottom>.arrow::after,.tripetto-collector-rolling .bs-popover-auto[x-placement^="bottom"]>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.tripetto-collector-rolling .bs-popover-bottom .popover-header::before,.tripetto-collector-rolling .bs-popover-auto[x-placement^="bottom"] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:"";border-bottom:1px solid #f7f7f7}.tripetto-collector-rolling .bs-popover-left,.tripetto-collector-rolling .bs-popover-auto[x-placement^="left"]{margin-right:.5rem}.tripetto-collector-rolling .bs-popover-left>.arrow,.tripetto-collector-rolling .bs-popover-auto[x-placement^="left"]>.arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.tripetto-collector-rolling .bs-popover-left>.arrow::before,.tripetto-collector-rolling .bs-popover-auto[x-placement^="left"]>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,0.25)}.tripetto-collector-rolling .bs-popover-left>.arrow::after,.tripetto-collector-rolling .bs-popover-auto[x-placement^="left"]>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.tripetto-collector-rolling .popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.tripetto-collector-rolling .popover-header:empty{display:none}.tripetto-collector-rolling .popover-body{padding:.5rem .75rem;color:#212529}.tripetto-collector-rolling .carousel{position:relative}.tripetto-collector-rolling .carousel.pointer-event{touch-action:pan-y}.tripetto-collector-rolling .carousel-inner{position:relative;width:100%;overflow:hidden}.tripetto-collector-rolling .carousel-inner::after{display:block;clear:both;content:""}.tripetto-collector-rolling .carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .carousel-item{transition:none}}.tripetto-collector-rolling .carousel-item.active,.tripetto-collector-rolling .carousel-item-next,.tripetto-collector-rolling .carousel-item-prev{display:block}.tripetto-collector-rolling .carousel-item-next:not(.carousel-item-left),.tripetto-collector-rolling .active.carousel-item-right{transform:translateX(100%)}.tripetto-collector-rolling .carousel-item-prev:not(.carousel-item-right),.tripetto-collector-rolling .active.carousel-item-left{transform:translateX(-100%)}.tripetto-collector-rolling .carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.tripetto-collector-rolling .carousel-fade .carousel-item.active,.tripetto-collector-rolling .carousel-fade .carousel-item-next.carousel-item-left,.tripetto-collector-rolling .carousel-fade .carousel-item-prev.carousel-item-right{z-index:1;opacity:1}.tripetto-collector-rolling .carousel-fade .active.carousel-item-left,.tripetto-collector-rolling .carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:0s .6s opacity}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .carousel-fade .active.carousel-item-left,.tripetto-collector-rolling .carousel-fade .active.carousel-item-right{transition:none}}.tripetto-collector-rolling .carousel-control-prev,.tripetto-collector-rolling .carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity 0.15s ease}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .carousel-control-prev,.tripetto-collector-rolling .carousel-control-next{transition:none}}.tripetto-collector-rolling .carousel-control-prev:hover,.tripetto-collector-rolling .carousel-control-prev:focus,.tripetto-collector-rolling .carousel-control-next:hover,.tripetto-collector-rolling .carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.tripetto-collector-rolling .carousel-control-prev{left:0}.tripetto-collector-rolling .carousel-control-next{right:0}.tripetto-collector-rolling .carousel-control-prev-icon,.tripetto-collector-rolling .carousel-control-next-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50% / 100% 100%}.tripetto-collector-rolling .carousel-control-prev-icon{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3e%3cpath d=\'M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z\'/%3e%3c/svg%3e")}.tripetto-collector-rolling .carousel-control-next-icon{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3e%3cpath d=\'M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z\'/%3e%3c/svg%3e")}.tripetto-collector-rolling .carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.tripetto-collector-rolling .carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity 0.6s ease}@media (prefers-reduced-motion: reduce){.tripetto-collector-rolling .carousel-indicators li{transition:none}}.tripetto-collector-rolling .carousel-indicators .active{opacity:1}.tripetto-collector-rolling .carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}.tripetto-collector-rolling .spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.tripetto-collector-rolling .spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1}}.tripetto-collector-rolling .spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.tripetto-collector-rolling .spinner-grow-sm{width:1rem;height:1rem}.tripetto-collector-rolling .align-baseline{vertical-align:baseline !important}.tripetto-collector-rolling .align-top{vertical-align:top !important}.tripetto-collector-rolling .align-middle{vertical-align:middle !important}.tripetto-collector-rolling .align-bottom{vertical-align:bottom !important}.tripetto-collector-rolling .align-text-bottom{vertical-align:text-bottom !important}.tripetto-collector-rolling .align-text-top{vertical-align:text-top !important}.tripetto-collector-rolling .bg-primary{background-color:#007bff !important}.tripetto-collector-rolling a.bg-primary:hover,.tripetto-collector-rolling a.bg-primary:focus,.tripetto-collector-rolling button.bg-primary:hover,.tripetto-collector-rolling button.bg-primary:focus{background-color:#0062cc !important}.tripetto-collector-rolling .bg-secondary{background-color:#6c757d !important}.tripetto-collector-rolling a.bg-secondary:hover,.tripetto-collector-rolling a.bg-secondary:focus,.tripetto-collector-rolling button.bg-secondary:hover,.tripetto-collector-rolling button.bg-secondary:focus{background-color:#545b62 !important}.tripetto-collector-rolling .bg-success{background-color:#28a745 !important}.tripetto-collector-rolling a.bg-success:hover,.tripetto-collector-rolling a.bg-success:focus,.tripetto-collector-rolling button.bg-success:hover,.tripetto-collector-rolling button.bg-success:focus{background-color:#1e7e34 !important}.tripetto-collector-rolling .bg-info{background-color:#17a2b8 !important}.tripetto-collector-rolling a.bg-info:hover,.tripetto-collector-rolling a.bg-info:focus,.tripetto-collector-rolling button.bg-info:hover,.tripetto-collector-rolling button.bg-info:focus{background-color:#117a8b !important}.tripetto-collector-rolling .bg-warning{background-color:#ffc107 !important}.tripetto-collector-rolling a.bg-warning:hover,.tripetto-collector-rolling a.bg-warning:focus,.tripetto-collector-rolling button.bg-warning:hover,.tripetto-collector-rolling button.bg-warning:focus{background-color:#d39e00 !important}.tripetto-collector-rolling .bg-danger{background-color:#dc3545 !important}.tripetto-collector-rolling a.bg-danger:hover,.tripetto-collector-rolling a.bg-danger:focus,.tripetto-collector-rolling button.bg-danger:hover,.tripetto-collector-rolling button.bg-danger:focus{background-color:#bd2130 !important}.tripetto-collector-rolling .bg-light{background-color:#f8f9fa !important}.tripetto-collector-rolling a.bg-light:hover,.tripetto-collector-rolling a.bg-light:focus,.tripetto-collector-rolling button.bg-light:hover,.tripetto-collector-rolling button.bg-light:focus{background-color:#dae0e5 !important}.tripetto-collector-rolling .bg-dark{background-color:#343a40 !important}.tripetto-collector-rolling a.bg-dark:hover,.tripetto-collector-rolling a.bg-dark:focus,.tripetto-collector-rolling button.bg-dark:hover,.tripetto-collector-rolling button.bg-dark:focus{background-color:#1d2124 !important}.tripetto-collector-rolling .bg-white{background-color:#fff !important}.tripetto-collector-rolling .bg-transparent{background-color:transparent !important}.tripetto-collector-rolling .border{border:1px solid #dee2e6 !important}.tripetto-collector-rolling .border-top{border-top:1px solid #dee2e6 !important}.tripetto-collector-rolling .border-right{border-right:1px solid #dee2e6 !important}.tripetto-collector-rolling .border-bottom{border-bottom:1px solid #dee2e6 !important}.tripetto-collector-rolling .border-left{border-left:1px solid #dee2e6 !important}.tripetto-collector-rolling .border-0{border:0 !important}.tripetto-collector-rolling .border-top-0{border-top:0 !important}.tripetto-collector-rolling .border-right-0{border-right:0 !important}.tripetto-collector-rolling .border-bottom-0{border-bottom:0 !important}.tripetto-collector-rolling .border-left-0{border-left:0 !important}.tripetto-collector-rolling .border-primary{border-color:#007bff !important}.tripetto-collector-rolling .border-secondary{border-color:#6c757d !important}.tripetto-collector-rolling .border-success{border-color:#28a745 !important}.tripetto-collector-rolling .border-info{border-color:#17a2b8 !important}.tripetto-collector-rolling .border-warning{border-color:#ffc107 !important}.tripetto-collector-rolling .border-danger{border-color:#dc3545 !important}.tripetto-collector-rolling .border-light{border-color:#f8f9fa !important}.tripetto-collector-rolling .border-dark{border-color:#343a40 !important}.tripetto-collector-rolling .border-white{border-color:#fff !important}.tripetto-collector-rolling .rounded-sm{border-radius:.2rem !important}.tripetto-collector-rolling .rounded{border-radius:.25rem !important}.tripetto-collector-rolling .rounded-top{border-top-left-radius:.25rem !important;border-top-right-radius:.25rem !important}.tripetto-collector-rolling .rounded-right{border-top-right-radius:.25rem !important;border-bottom-right-radius:.25rem !important}.tripetto-collector-rolling .rounded-bottom{border-bottom-right-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.tripetto-collector-rolling .rounded-left{border-top-left-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.tripetto-collector-rolling .rounded-lg{border-radius:.3rem !important}.tripetto-collector-rolling .rounded-circle{border-radius:50% !important}.tripetto-collector-rolling .rounded-pill{border-radius:50rem !important}.tripetto-collector-rolling .rounded-0{border-radius:0 !important}.tripetto-collector-rolling .clearfix::after{display:block;clear:both;content:""}.tripetto-collector-rolling .d-none{display:none !important}.tripetto-collector-rolling .d-inline{display:inline !important}.tripetto-collector-rolling .d-inline-block{display:inline-block !important}.tripetto-collector-rolling .d-block{display:block !important}.tripetto-collector-rolling .d-table{display:table !important}.tripetto-collector-rolling .d-table-row{display:table-row !important}.tripetto-collector-rolling .d-table-cell{display:table-cell !important}.tripetto-collector-rolling .d-flex{display:flex !important}.tripetto-collector-rolling .d-inline-flex{display:inline-flex !important}@media (min-width: 576px){.tripetto-collector-rolling .d-sm-none{display:none !important}.tripetto-collector-rolling .d-sm-inline{display:inline !important}.tripetto-collector-rolling .d-sm-inline-block{display:inline-block !important}.tripetto-collector-rolling .d-sm-block{display:block !important}.tripetto-collector-rolling .d-sm-table{display:table !important}.tripetto-collector-rolling .d-sm-table-row{display:table-row !important}.tripetto-collector-rolling .d-sm-table-cell{display:table-cell !important}.tripetto-collector-rolling .d-sm-flex{display:flex !important}.tripetto-collector-rolling .d-sm-inline-flex{display:inline-flex !important}}@media (min-width: 768px){.tripetto-collector-rolling .d-md-none{display:none !important}.tripetto-collector-rolling .d-md-inline{display:inline !important}.tripetto-collector-rolling .d-md-inline-block{display:inline-block !important}.tripetto-collector-rolling .d-md-block{display:block !important}.tripetto-collector-rolling .d-md-table{display:table !important}.tripetto-collector-rolling .d-md-table-row{display:table-row !important}.tripetto-collector-rolling .d-md-table-cell{display:table-cell !important}.tripetto-collector-rolling .d-md-flex{display:flex !important}.tripetto-collector-rolling .d-md-inline-flex{display:inline-flex !important}}@media (min-width: 992px){.tripetto-collector-rolling .d-lg-none{display:none !important}.tripetto-collector-rolling .d-lg-inline{display:inline !important}.tripetto-collector-rolling .d-lg-inline-block{display:inline-block !important}.tripetto-collector-rolling .d-lg-block{display:block !important}.tripetto-collector-rolling .d-lg-table{display:table !important}.tripetto-collector-rolling .d-lg-table-row{display:table-row !important}.tripetto-collector-rolling .d-lg-table-cell{display:table-cell !important}.tripetto-collector-rolling .d-lg-flex{display:flex !important}.tripetto-collector-rolling .d-lg-inline-flex{display:inline-flex !important}}@media (min-width: 1200px){.tripetto-collector-rolling .d-xl-none{display:none !important}.tripetto-collector-rolling .d-xl-inline{display:inline !important}.tripetto-collector-rolling .d-xl-inline-block{display:inline-block !important}.tripetto-collector-rolling .d-xl-block{display:block !important}.tripetto-collector-rolling .d-xl-table{display:table !important}.tripetto-collector-rolling .d-xl-table-row{display:table-row !important}.tripetto-collector-rolling .d-xl-table-cell{display:table-cell !important}.tripetto-collector-rolling .d-xl-flex{display:flex !important}.tripetto-collector-rolling .d-xl-inline-flex{display:inline-flex !important}}@media print{.tripetto-collector-rolling .d-print-none{display:none !important}.tripetto-collector-rolling .d-print-inline{display:inline !important}.tripetto-collector-rolling .d-print-inline-block{display:inline-block !important}.tripetto-collector-rolling .d-print-block{display:block !important}.tripetto-collector-rolling .d-print-table{display:table !important}.tripetto-collector-rolling .d-print-table-row{display:table-row !important}.tripetto-collector-rolling .d-print-table-cell{display:table-cell !important}.tripetto-collector-rolling .d-print-flex{display:flex !important}.tripetto-collector-rolling .d-print-inline-flex{display:inline-flex !important}}.tripetto-collector-rolling .embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.tripetto-collector-rolling .embed-responsive::before{display:block;content:""}.tripetto-collector-rolling .embed-responsive .embed-responsive-item,.tripetto-collector-rolling .embed-responsive iframe,.tripetto-collector-rolling .embed-responsive embed,.tripetto-collector-rolling .embed-responsive object,.tripetto-collector-rolling .embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.tripetto-collector-rolling .embed-responsive-21by9::before{padding-top:42.85714%}.tripetto-collector-rolling .embed-responsive-16by9::before{padding-top:56.25%}.tripetto-collector-rolling .embed-responsive-4by3::before{padding-top:75%}.tripetto-collector-rolling .embed-responsive-1by1::before{padding-top:100%}.tripetto-collector-rolling .flex-row{flex-direction:row !important}.tripetto-collector-rolling .flex-column{flex-direction:column !important}.tripetto-collector-rolling .flex-row-reverse{flex-direction:row-reverse !important}.tripetto-collector-rolling .flex-column-reverse{flex-direction:column-reverse !important}.tripetto-collector-rolling .flex-wrap{flex-wrap:wrap !important}.tripetto-collector-rolling .flex-nowrap{flex-wrap:nowrap !important}.tripetto-collector-rolling .flex-wrap-reverse{flex-wrap:wrap-reverse !important}.tripetto-collector-rolling .flex-fill{flex:1 1 auto !important}.tripetto-collector-rolling .flex-grow-0{flex-grow:0 !important}.tripetto-collector-rolling .flex-grow-1{flex-grow:1 !important}.tripetto-collector-rolling .flex-shrink-0{flex-shrink:0 !important}.tripetto-collector-rolling .flex-shrink-1{flex-shrink:1 !important}.tripetto-collector-rolling .justify-content-start{justify-content:flex-start !important}.tripetto-collector-rolling .justify-content-end{justify-content:flex-end !important}.tripetto-collector-rolling .justify-content-center{justify-content:center !important}.tripetto-collector-rolling .justify-content-between{justify-content:space-between !important}.tripetto-collector-rolling .justify-content-around{justify-content:space-around !important}.tripetto-collector-rolling .align-items-start{align-items:flex-start !important}.tripetto-collector-rolling .align-items-end{align-items:flex-end !important}.tripetto-collector-rolling .align-items-center{align-items:center !important}.tripetto-collector-rolling .align-items-baseline{align-items:baseline !important}.tripetto-collector-rolling .align-items-stretch{align-items:stretch !important}.tripetto-collector-rolling .align-content-start{align-content:flex-start !important}.tripetto-collector-rolling .align-content-end{align-content:flex-end !important}.tripetto-collector-rolling .align-content-center{align-content:center !important}.tripetto-collector-rolling .align-content-between{align-content:space-between !important}.tripetto-collector-rolling .align-content-around{align-content:space-around !important}.tripetto-collector-rolling .align-content-stretch{align-content:stretch !important}.tripetto-collector-rolling .align-self-auto{align-self:auto !important}.tripetto-collector-rolling .align-self-start{align-self:flex-start !important}.tripetto-collector-rolling .align-self-end{align-self:flex-end !important}.tripetto-collector-rolling .align-self-center{align-self:center !important}.tripetto-collector-rolling .align-self-baseline{align-self:baseline !important}.tripetto-collector-rolling .align-self-stretch{align-self:stretch !important}@media (min-width: 576px){.tripetto-collector-rolling .flex-sm-row{flex-direction:row !important}.tripetto-collector-rolling .flex-sm-column{flex-direction:column !important}.tripetto-collector-rolling .flex-sm-row-reverse{flex-direction:row-reverse !important}.tripetto-collector-rolling .flex-sm-column-reverse{flex-direction:column-reverse !important}.tripetto-collector-rolling .flex-sm-wrap{flex-wrap:wrap !important}.tripetto-collector-rolling .flex-sm-nowrap{flex-wrap:nowrap !important}.tripetto-collector-rolling .flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.tripetto-collector-rolling .flex-sm-fill{flex:1 1 auto !important}.tripetto-collector-rolling .flex-sm-grow-0{flex-grow:0 !important}.tripetto-collector-rolling .flex-sm-grow-1{flex-grow:1 !important}.tripetto-collector-rolling .flex-sm-shrink-0{flex-shrink:0 !important}.tripetto-collector-rolling .flex-sm-shrink-1{flex-shrink:1 !important}.tripetto-collector-rolling .justify-content-sm-start{justify-content:flex-start !important}.tripetto-collector-rolling .justify-content-sm-end{justify-content:flex-end !important}.tripetto-collector-rolling .justify-content-sm-center{justify-content:center !important}.tripetto-collector-rolling .justify-content-sm-between{justify-content:space-between !important}.tripetto-collector-rolling .justify-content-sm-around{justify-content:space-around !important}.tripetto-collector-rolling .align-items-sm-start{align-items:flex-start !important}.tripetto-collector-rolling .align-items-sm-end{align-items:flex-end !important}.tripetto-collector-rolling .align-items-sm-center{align-items:center !important}.tripetto-collector-rolling .align-items-sm-baseline{align-items:baseline !important}.tripetto-collector-rolling .align-items-sm-stretch{align-items:stretch !important}.tripetto-collector-rolling .align-content-sm-start{align-content:flex-start !important}.tripetto-collector-rolling .align-content-sm-end{align-content:flex-end !important}.tripetto-collector-rolling .align-content-sm-center{align-content:center !important}.tripetto-collector-rolling .align-content-sm-between{align-content:space-between !important}.tripetto-collector-rolling .align-content-sm-around{align-content:space-around !important}.tripetto-collector-rolling .align-content-sm-stretch{align-content:stretch !important}.tripetto-collector-rolling .align-self-sm-auto{align-self:auto !important}.tripetto-collector-rolling .align-self-sm-start{align-self:flex-start !important}.tripetto-collector-rolling .align-self-sm-end{align-self:flex-end !important}.tripetto-collector-rolling .align-self-sm-center{align-self:center !important}.tripetto-collector-rolling .align-self-sm-baseline{align-self:baseline !important}.tripetto-collector-rolling .align-self-sm-stretch{align-self:stretch !important}}@media (min-width: 768px){.tripetto-collector-rolling .flex-md-row{flex-direction:row !important}.tripetto-collector-rolling .flex-md-column{flex-direction:column !important}.tripetto-collector-rolling .flex-md-row-reverse{flex-direction:row-reverse !important}.tripetto-collector-rolling .flex-md-column-reverse{flex-direction:column-reverse !important}.tripetto-collector-rolling .flex-md-wrap{flex-wrap:wrap !important}.tripetto-collector-rolling .flex-md-nowrap{flex-wrap:nowrap !important}.tripetto-collector-rolling .flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.tripetto-collector-rolling .flex-md-fill{flex:1 1 auto !important}.tripetto-collector-rolling .flex-md-grow-0{flex-grow:0 !important}.tripetto-collector-rolling .flex-md-grow-1{flex-grow:1 !important}.tripetto-collector-rolling .flex-md-shrink-0{flex-shrink:0 !important}.tripetto-collector-rolling .flex-md-shrink-1{flex-shrink:1 !important}.tripetto-collector-rolling .justify-content-md-start{justify-content:flex-start !important}.tripetto-collector-rolling .justify-content-md-end{justify-content:flex-end !important}.tripetto-collector-rolling .justify-content-md-center{justify-content:center !important}.tripetto-collector-rolling .justify-content-md-between{justify-content:space-between !important}.tripetto-collector-rolling .justify-content-md-around{justify-content:space-around !important}.tripetto-collector-rolling .align-items-md-start{align-items:flex-start !important}.tripetto-collector-rolling .align-items-md-end{align-items:flex-end !important}.tripetto-collector-rolling .align-items-md-center{align-items:center !important}.tripetto-collector-rolling .align-items-md-baseline{align-items:baseline !important}.tripetto-collector-rolling .align-items-md-stretch{align-items:stretch !important}.tripetto-collector-rolling .align-content-md-start{align-content:flex-start !important}.tripetto-collector-rolling .align-content-md-end{align-content:flex-end !important}.tripetto-collector-rolling .align-content-md-center{align-content:center !important}.tripetto-collector-rolling .align-content-md-between{align-content:space-between !important}.tripetto-collector-rolling .align-content-md-around{align-content:space-around !important}.tripetto-collector-rolling .align-content-md-stretch{align-content:stretch !important}.tripetto-collector-rolling .align-self-md-auto{align-self:auto !important}.tripetto-collector-rolling .align-self-md-start{align-self:flex-start !important}.tripetto-collector-rolling .align-self-md-end{align-self:flex-end !important}.tripetto-collector-rolling .align-self-md-center{align-self:center !important}.tripetto-collector-rolling .align-self-md-baseline{align-self:baseline !important}.tripetto-collector-rolling .align-self-md-stretch{align-self:stretch !important}}@media (min-width: 992px){.tripetto-collector-rolling .flex-lg-row{flex-direction:row !important}.tripetto-collector-rolling .flex-lg-column{flex-direction:column !important}.tripetto-collector-rolling .flex-lg-row-reverse{flex-direction:row-reverse !important}.tripetto-collector-rolling .flex-lg-column-reverse{flex-direction:column-reverse !important}.tripetto-collector-rolling .flex-lg-wrap{flex-wrap:wrap !important}.tripetto-collector-rolling .flex-lg-nowrap{flex-wrap:nowrap !important}.tripetto-collector-rolling .flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.tripetto-collector-rolling .flex-lg-fill{flex:1 1 auto !important}.tripetto-collector-rolling .flex-lg-grow-0{flex-grow:0 !important}.tripetto-collector-rolling .flex-lg-grow-1{flex-grow:1 !important}.tripetto-collector-rolling .flex-lg-shrink-0{flex-shrink:0 !important}.tripetto-collector-rolling .flex-lg-shrink-1{flex-shrink:1 !important}.tripetto-collector-rolling .justify-content-lg-start{justify-content:flex-start !important}.tripetto-collector-rolling .justify-content-lg-end{justify-content:flex-end !important}.tripetto-collector-rolling .justify-content-lg-center{justify-content:center !important}.tripetto-collector-rolling .justify-content-lg-between{justify-content:space-between !important}.tripetto-collector-rolling .justify-content-lg-around{justify-content:space-around !important}.tripetto-collector-rolling .align-items-lg-start{align-items:flex-start !important}.tripetto-collector-rolling .align-items-lg-end{align-items:flex-end !important}.tripetto-collector-rolling .align-items-lg-center{align-items:center !important}.tripetto-collector-rolling .align-items-lg-baseline{align-items:baseline !important}.tripetto-collector-rolling .align-items-lg-stretch{align-items:stretch !important}.tripetto-collector-rolling .align-content-lg-start{align-content:flex-start !important}.tripetto-collector-rolling .align-content-lg-end{align-content:flex-end !important}.tripetto-collector-rolling .align-content-lg-center{align-content:center !important}.tripetto-collector-rolling .align-content-lg-between{align-content:space-between !important}.tripetto-collector-rolling .align-content-lg-around{align-content:space-around !important}.tripetto-collector-rolling .align-content-lg-stretch{align-content:stretch !important}.tripetto-collector-rolling .align-self-lg-auto{align-self:auto !important}.tripetto-collector-rolling .align-self-lg-start{align-self:flex-start !important}.tripetto-collector-rolling .align-self-lg-end{align-self:flex-end !important}.tripetto-collector-rolling .align-self-lg-center{align-self:center !important}.tripetto-collector-rolling .align-self-lg-baseline{align-self:baseline !important}.tripetto-collector-rolling .align-self-lg-stretch{align-self:stretch !important}}@media (min-width: 1200px){.tripetto-collector-rolling .flex-xl-row{flex-direction:row !important}.tripetto-collector-rolling .flex-xl-column{flex-direction:column !important}.tripetto-collector-rolling .flex-xl-row-reverse{flex-direction:row-reverse !important}.tripetto-collector-rolling .flex-xl-column-reverse{flex-direction:column-reverse !important}.tripetto-collector-rolling .flex-xl-wrap{flex-wrap:wrap !important}.tripetto-collector-rolling .flex-xl-nowrap{flex-wrap:nowrap !important}.tripetto-collector-rolling .flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.tripetto-collector-rolling .flex-xl-fill{flex:1 1 auto !important}.tripetto-collector-rolling .flex-xl-grow-0{flex-grow:0 !important}.tripetto-collector-rolling .flex-xl-grow-1{flex-grow:1 !important}.tripetto-collector-rolling .flex-xl-shrink-0{flex-shrink:0 !important}.tripetto-collector-rolling .flex-xl-shrink-1{flex-shrink:1 !important}.tripetto-collector-rolling .justify-content-xl-start{justify-content:flex-start !important}.tripetto-collector-rolling .justify-content-xl-end{justify-content:flex-end !important}.tripetto-collector-rolling .justify-content-xl-center{justify-content:center !important}.tripetto-collector-rolling .justify-content-xl-between{justify-content:space-between !important}.tripetto-collector-rolling .justify-content-xl-around{justify-content:space-around !important}.tripetto-collector-rolling .align-items-xl-start{align-items:flex-start !important}.tripetto-collector-rolling .align-items-xl-end{align-items:flex-end !important}.tripetto-collector-rolling .align-items-xl-center{align-items:center !important}.tripetto-collector-rolling .align-items-xl-baseline{align-items:baseline !important}.tripetto-collector-rolling .align-items-xl-stretch{align-items:stretch !important}.tripetto-collector-rolling .align-content-xl-start{align-content:flex-start !important}.tripetto-collector-rolling .align-content-xl-end{align-content:flex-end !important}.tripetto-collector-rolling .align-content-xl-center{align-content:center !important}.tripetto-collector-rolling .align-content-xl-between{align-content:space-between !important}.tripetto-collector-rolling .align-content-xl-around{align-content:space-around !important}.tripetto-collector-rolling .align-content-xl-stretch{align-content:stretch !important}.tripetto-collector-rolling .align-self-xl-auto{align-self:auto !important}.tripetto-collector-rolling .align-self-xl-start{align-self:flex-start !important}.tripetto-collector-rolling .align-self-xl-end{align-self:flex-end !important}.tripetto-collector-rolling .align-self-xl-center{align-self:center !important}.tripetto-collector-rolling .align-self-xl-baseline{align-self:baseline !important}.tripetto-collector-rolling .align-self-xl-stretch{align-self:stretch !important}}.tripetto-collector-rolling .float-left{float:left !important}.tripetto-collector-rolling .float-right{float:right !important}.tripetto-collector-rolling .float-none{float:none !important}@media (min-width: 576px){.tripetto-collector-rolling .float-sm-left{float:left !important}.tripetto-collector-rolling .float-sm-right{float:right !important}.tripetto-collector-rolling .float-sm-none{float:none !important}}@media (min-width: 768px){.tripetto-collector-rolling .float-md-left{float:left !important}.tripetto-collector-rolling .float-md-right{float:right !important}.tripetto-collector-rolling .float-md-none{float:none !important}}@media (min-width: 992px){.tripetto-collector-rolling .float-lg-left{float:left !important}.tripetto-collector-rolling .float-lg-right{float:right !important}.tripetto-collector-rolling .float-lg-none{float:none !important}}@media (min-width: 1200px){.tripetto-collector-rolling .float-xl-left{float:left !important}.tripetto-collector-rolling .float-xl-right{float:right !important}.tripetto-collector-rolling .float-xl-none{float:none !important}}.tripetto-collector-rolling .overflow-auto{overflow:auto !important}.tripetto-collector-rolling .overflow-hidden{overflow:hidden !important}.tripetto-collector-rolling .position-static{position:static !important}.tripetto-collector-rolling .position-relative{position:relative !important}.tripetto-collector-rolling .position-absolute{position:absolute !important}.tripetto-collector-rolling .position-fixed{position:fixed !important}.tripetto-collector-rolling .position-sticky{position:-webkit-sticky !important;position:sticky !important}.tripetto-collector-rolling .fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.tripetto-collector-rolling .fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position: -webkit-sticky) or (position: sticky)){.tripetto-collector-rolling .sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.tripetto-collector-rolling .sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.tripetto-collector-rolling .sr-only-focusable:active,.tripetto-collector-rolling .sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.tripetto-collector-rolling .shadow-sm{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important}.tripetto-collector-rolling .shadow{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important}.tripetto-collector-rolling .shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important}.tripetto-collector-rolling .shadow-none{box-shadow:none !important}.tripetto-collector-rolling .w-25{width:25% !important}.tripetto-collector-rolling .w-50{width:50% !important}.tripetto-collector-rolling .w-75{width:75% !important}.tripetto-collector-rolling .w-100{width:100% !important}.tripetto-collector-rolling .w-auto{width:auto !important}.tripetto-collector-rolling .h-25{height:25% !important}.tripetto-collector-rolling .h-50{height:50% !important}.tripetto-collector-rolling .h-75{height:75% !important}.tripetto-collector-rolling .h-100{height:100% !important}.tripetto-collector-rolling .h-auto{height:auto !important}.tripetto-collector-rolling .mw-100{max-width:100% !important}.tripetto-collector-rolling .mh-100{max-height:100% !important}.tripetto-collector-rolling .min-vw-100{min-width:100vw !important}.tripetto-collector-rolling .min-vh-100{min-height:100vh !important}.tripetto-collector-rolling .vw-100{width:100vw !important}.tripetto-collector-rolling .vh-100{height:100vh !important}.tripetto-collector-rolling .stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:"";background-color:rgba(0,0,0,0)}.tripetto-collector-rolling .m-0{margin:0 !important}.tripetto-collector-rolling .mt-0,.tripetto-collector-rolling .my-0{margin-top:0 !important}.tripetto-collector-rolling .mr-0,.tripetto-collector-rolling .mx-0{margin-right:0 !important}.tripetto-collector-rolling .mb-0,.tripetto-collector-rolling .my-0{margin-bottom:0 !important}.tripetto-collector-rolling .ml-0,.tripetto-collector-rolling .mx-0{margin-left:0 !important}.tripetto-collector-rolling .m-1{margin:.25rem !important}.tripetto-collector-rolling .mt-1,.tripetto-collector-rolling .my-1{margin-top:.25rem !important}.tripetto-collector-rolling .mr-1,.tripetto-collector-rolling .mx-1{margin-right:.25rem !important}.tripetto-collector-rolling .mb-1,.tripetto-collector-rolling .my-1{margin-bottom:.25rem !important}.tripetto-collector-rolling .ml-1,.tripetto-collector-rolling .mx-1{margin-left:.25rem !important}.tripetto-collector-rolling .m-2{margin:.5rem !important}.tripetto-collector-rolling .mt-2,.tripetto-collector-rolling .my-2{margin-top:.5rem !important}.tripetto-collector-rolling .mr-2,.tripetto-collector-rolling .mx-2{margin-right:.5rem !important}.tripetto-collector-rolling .mb-2,.tripetto-collector-rolling .my-2{margin-bottom:.5rem !important}.tripetto-collector-rolling .ml-2,.tripetto-collector-rolling .mx-2{margin-left:.5rem !important}.tripetto-collector-rolling .m-3{margin:1rem !important}.tripetto-collector-rolling .mt-3,.tripetto-collector-rolling .my-3{margin-top:1rem !important}.tripetto-collector-rolling .mr-3,.tripetto-collector-rolling .mx-3{margin-right:1rem !important}.tripetto-collector-rolling .mb-3,.tripetto-collector-rolling .my-3{margin-bottom:1rem !important}.tripetto-collector-rolling .ml-3,.tripetto-collector-rolling .mx-3{margin-left:1rem !important}.tripetto-collector-rolling .m-4{margin:1.5rem !important}.tripetto-collector-rolling .mt-4,.tripetto-collector-rolling .my-4{margin-top:1.5rem !important}.tripetto-collector-rolling .mr-4,.tripetto-collector-rolling .mx-4{margin-right:1.5rem !important}.tripetto-collector-rolling .mb-4,.tripetto-collector-rolling .my-4{margin-bottom:1.5rem !important}.tripetto-collector-rolling .ml-4,.tripetto-collector-rolling .mx-4{margin-left:1.5rem !important}.tripetto-collector-rolling .m-5{margin:3rem !important}.tripetto-collector-rolling .mt-5,.tripetto-collector-rolling .my-5{margin-top:3rem !important}.tripetto-collector-rolling .mr-5,.tripetto-collector-rolling .mx-5{margin-right:3rem !important}.tripetto-collector-rolling .mb-5,.tripetto-collector-rolling .my-5{margin-bottom:3rem !important}.tripetto-collector-rolling .ml-5,.tripetto-collector-rolling .mx-5{margin-left:3rem !important}.tripetto-collector-rolling .p-0{padding:0 !important}.tripetto-collector-rolling .pt-0,.tripetto-collector-rolling .py-0{padding-top:0 !important}.tripetto-collector-rolling .pr-0,.tripetto-collector-rolling .px-0{padding-right:0 !important}.tripetto-collector-rolling .pb-0,.tripetto-collector-rolling .py-0{padding-bottom:0 !important}.tripetto-collector-rolling .pl-0,.tripetto-collector-rolling .px-0{padding-left:0 !important}.tripetto-collector-rolling .p-1{padding:.25rem !important}.tripetto-collector-rolling .pt-1,.tripetto-collector-rolling .py-1{padding-top:.25rem !important}.tripetto-collector-rolling .pr-1,.tripetto-collector-rolling .px-1{padding-right:.25rem !important}.tripetto-collector-rolling .pb-1,.tripetto-collector-rolling .py-1{padding-bottom:.25rem !important}.tripetto-collector-rolling .pl-1,.tripetto-collector-rolling .px-1{padding-left:.25rem !important}.tripetto-collector-rolling .p-2{padding:.5rem !important}.tripetto-collector-rolling .pt-2,.tripetto-collector-rolling .py-2{padding-top:.5rem !important}.tripetto-collector-rolling .pr-2,.tripetto-collector-rolling .px-2{padding-right:.5rem !important}.tripetto-collector-rolling .pb-2,.tripetto-collector-rolling .py-2{padding-bottom:.5rem !important}.tripetto-collector-rolling .pl-2,.tripetto-collector-rolling .px-2{padding-left:.5rem !important}.tripetto-collector-rolling .p-3{padding:1rem !important}.tripetto-collector-rolling .pt-3,.tripetto-collector-rolling .py-3{padding-top:1rem !important}.tripetto-collector-rolling .pr-3,.tripetto-collector-rolling .px-3{padding-right:1rem !important}.tripetto-collector-rolling .pb-3,.tripetto-collector-rolling .py-3{padding-bottom:1rem !important}.tripetto-collector-rolling .pl-3,.tripetto-collector-rolling .px-3{padding-left:1rem !important}.tripetto-collector-rolling .p-4{padding:1.5rem !important}.tripetto-collector-rolling .pt-4,.tripetto-collector-rolling .py-4{padding-top:1.5rem !important}.tripetto-collector-rolling .pr-4,.tripetto-collector-rolling .px-4{padding-right:1.5rem !important}.tripetto-collector-rolling .pb-4,.tripetto-collector-rolling .py-4{padding-bottom:1.5rem !important}.tripetto-collector-rolling .pl-4,.tripetto-collector-rolling .px-4{padding-left:1.5rem !important}.tripetto-collector-rolling .p-5{padding:3rem !important}.tripetto-collector-rolling .pt-5,.tripetto-collector-rolling .py-5{padding-top:3rem !important}.tripetto-collector-rolling .pr-5,.tripetto-collector-rolling .px-5{padding-right:3rem !important}.tripetto-collector-rolling .pb-5,.tripetto-collector-rolling .py-5{padding-bottom:3rem !important}.tripetto-collector-rolling .pl-5,.tripetto-collector-rolling .px-5{padding-left:3rem !important}.tripetto-collector-rolling .m-n1{margin:-.25rem !important}.tripetto-collector-rolling .mt-n1,.tripetto-collector-rolling .my-n1{margin-top:-.25rem !important}.tripetto-collector-rolling .mr-n1,.tripetto-collector-rolling .mx-n1{margin-right:-.25rem !important}.tripetto-collector-rolling .mb-n1,.tripetto-collector-rolling .my-n1{margin-bottom:-.25rem !important}.tripetto-collector-rolling .ml-n1,.tripetto-collector-rolling .mx-n1{margin-left:-.25rem !important}.tripetto-collector-rolling .m-n2{margin:-.5rem !important}.tripetto-collector-rolling .mt-n2,.tripetto-collector-rolling .my-n2{margin-top:-.5rem !important}.tripetto-collector-rolling .mr-n2,.tripetto-collector-rolling .mx-n2{margin-right:-.5rem !important}.tripetto-collector-rolling .mb-n2,.tripetto-collector-rolling .my-n2{margin-bottom:-.5rem !important}.tripetto-collector-rolling .ml-n2,.tripetto-collector-rolling .mx-n2{margin-left:-.5rem !important}.tripetto-collector-rolling .m-n3{margin:-1rem !important}.tripetto-collector-rolling .mt-n3,.tripetto-collector-rolling .my-n3{margin-top:-1rem !important}.tripetto-collector-rolling .mr-n3,.tripetto-collector-rolling .mx-n3{margin-right:-1rem !important}.tripetto-collector-rolling .mb-n3,.tripetto-collector-rolling .my-n3{margin-bottom:-1rem !important}.tripetto-collector-rolling .ml-n3,.tripetto-collector-rolling .mx-n3{margin-left:-1rem !important}.tripetto-collector-rolling .m-n4{margin:-1.5rem !important}.tripetto-collector-rolling .mt-n4,.tripetto-collector-rolling .my-n4{margin-top:-1.5rem !important}.tripetto-collector-rolling .mr-n4,.tripetto-collector-rolling .mx-n4{margin-right:-1.5rem !important}.tripetto-collector-rolling .mb-n4,.tripetto-collector-rolling .my-n4{margin-bottom:-1.5rem !important}.tripetto-collector-rolling .ml-n4,.tripetto-collector-rolling .mx-n4{margin-left:-1.5rem !important}.tripetto-collector-rolling .m-n5{margin:-3rem !important}.tripetto-collector-rolling .mt-n5,.tripetto-collector-rolling .my-n5{margin-top:-3rem !important}.tripetto-collector-rolling .mr-n5,.tripetto-collector-rolling .mx-n5{margin-right:-3rem !important}.tripetto-collector-rolling .mb-n5,.tripetto-collector-rolling .my-n5{margin-bottom:-3rem !important}.tripetto-collector-rolling .ml-n5,.tripetto-collector-rolling .mx-n5{margin-left:-3rem !important}.tripetto-collector-rolling .m-auto{margin:auto !important}.tripetto-collector-rolling .mt-auto,.tripetto-collector-rolling .my-auto{margin-top:auto !important}.tripetto-collector-rolling .mr-auto,.tripetto-collector-rolling .mx-auto{margin-right:auto !important}.tripetto-collector-rolling .mb-auto,.tripetto-collector-rolling .my-auto{margin-bottom:auto !important}.tripetto-collector-rolling .ml-auto,.tripetto-collector-rolling .mx-auto{margin-left:auto !important}@media (min-width: 576px){.tripetto-collector-rolling .m-sm-0{margin:0 !important}.tripetto-collector-rolling .mt-sm-0,.tripetto-collector-rolling .my-sm-0{margin-top:0 !important}.tripetto-collector-rolling .mr-sm-0,.tripetto-collector-rolling .mx-sm-0{margin-right:0 !important}.tripetto-collector-rolling .mb-sm-0,.tripetto-collector-rolling .my-sm-0{margin-bottom:0 !important}.tripetto-collector-rolling .ml-sm-0,.tripetto-collector-rolling .mx-sm-0{margin-left:0 !important}.tripetto-collector-rolling .m-sm-1{margin:.25rem !important}.tripetto-collector-rolling .mt-sm-1,.tripetto-collector-rolling .my-sm-1{margin-top:.25rem !important}.tripetto-collector-rolling .mr-sm-1,.tripetto-collector-rolling .mx-sm-1{margin-right:.25rem !important}.tripetto-collector-rolling .mb-sm-1,.tripetto-collector-rolling .my-sm-1{margin-bottom:.25rem !important}.tripetto-collector-rolling .ml-sm-1,.tripetto-collector-rolling .mx-sm-1{margin-left:.25rem !important}.tripetto-collector-rolling .m-sm-2{margin:.5rem !important}.tripetto-collector-rolling .mt-sm-2,.tripetto-collector-rolling .my-sm-2{margin-top:.5rem !important}.tripetto-collector-rolling .mr-sm-2,.tripetto-collector-rolling .mx-sm-2{margin-right:.5rem !important}.tripetto-collector-rolling .mb-sm-2,.tripetto-collector-rolling .my-sm-2{margin-bottom:.5rem !important}.tripetto-collector-rolling .ml-sm-2,.tripetto-collector-rolling .mx-sm-2{margin-left:.5rem !important}.tripetto-collector-rolling .m-sm-3{margin:1rem !important}.tripetto-collector-rolling .mt-sm-3,.tripetto-collector-rolling .my-sm-3{margin-top:1rem !important}.tripetto-collector-rolling .mr-sm-3,.tripetto-collector-rolling .mx-sm-3{margin-right:1rem !important}.tripetto-collector-rolling .mb-sm-3,.tripetto-collector-rolling .my-sm-3{margin-bottom:1rem !important}.tripetto-collector-rolling .ml-sm-3,.tripetto-collector-rolling .mx-sm-3{margin-left:1rem !important}.tripetto-collector-rolling .m-sm-4{margin:1.5rem !important}.tripetto-collector-rolling .mt-sm-4,.tripetto-collector-rolling .my-sm-4{margin-top:1.5rem !important}.tripetto-collector-rolling .mr-sm-4,.tripetto-collector-rolling .mx-sm-4{margin-right:1.5rem !important}.tripetto-collector-rolling .mb-sm-4,.tripetto-collector-rolling .my-sm-4{margin-bottom:1.5rem !important}.tripetto-collector-rolling .ml-sm-4,.tripetto-collector-rolling .mx-sm-4{margin-left:1.5rem !important}.tripetto-collector-rolling .m-sm-5{margin:3rem !important}.tripetto-collector-rolling .mt-sm-5,.tripetto-collector-rolling .my-sm-5{margin-top:3rem !important}.tripetto-collector-rolling .mr-sm-5,.tripetto-collector-rolling .mx-sm-5{margin-right:3rem !important}.tripetto-collector-rolling .mb-sm-5,.tripetto-collector-rolling .my-sm-5{margin-bottom:3rem !important}.tripetto-collector-rolling .ml-sm-5,.tripetto-collector-rolling .mx-sm-5{margin-left:3rem !important}.tripetto-collector-rolling .p-sm-0{padding:0 !important}.tripetto-collector-rolling .pt-sm-0,.tripetto-collector-rolling .py-sm-0{padding-top:0 !important}.tripetto-collector-rolling .pr-sm-0,.tripetto-collector-rolling .px-sm-0{padding-right:0 !important}.tripetto-collector-rolling .pb-sm-0,.tripetto-collector-rolling .py-sm-0{padding-bottom:0 !important}.tripetto-collector-rolling .pl-sm-0,.tripetto-collector-rolling .px-sm-0{padding-left:0 !important}.tripetto-collector-rolling .p-sm-1{padding:.25rem !important}.tripetto-collector-rolling .pt-sm-1,.tripetto-collector-rolling .py-sm-1{padding-top:.25rem !important}.tripetto-collector-rolling .pr-sm-1,.tripetto-collector-rolling .px-sm-1{padding-right:.25rem !important}.tripetto-collector-rolling .pb-sm-1,.tripetto-collector-rolling .py-sm-1{padding-bottom:.25rem !important}.tripetto-collector-rolling .pl-sm-1,.tripetto-collector-rolling .px-sm-1{padding-left:.25rem !important}.tripetto-collector-rolling .p-sm-2{padding:.5rem !important}.tripetto-collector-rolling .pt-sm-2,.tripetto-collector-rolling .py-sm-2{padding-top:.5rem !important}.tripetto-collector-rolling .pr-sm-2,.tripetto-collector-rolling .px-sm-2{padding-right:.5rem !important}.tripetto-collector-rolling .pb-sm-2,.tripetto-collector-rolling .py-sm-2{padding-bottom:.5rem !important}.tripetto-collector-rolling .pl-sm-2,.tripetto-collector-rolling .px-sm-2{padding-left:.5rem !important}.tripetto-collector-rolling .p-sm-3{padding:1rem !important}.tripetto-collector-rolling .pt-sm-3,.tripetto-collector-rolling .py-sm-3{padding-top:1rem !important}.tripetto-collector-rolling .pr-sm-3,.tripetto-collector-rolling .px-sm-3{padding-right:1rem !important}.tripetto-collector-rolling .pb-sm-3,.tripetto-collector-rolling .py-sm-3{padding-bottom:1rem !important}.tripetto-collector-rolling .pl-sm-3,.tripetto-collector-rolling .px-sm-3{padding-left:1rem !important}.tripetto-collector-rolling .p-sm-4{padding:1.5rem !important}.tripetto-collector-rolling .pt-sm-4,.tripetto-collector-rolling .py-sm-4{padding-top:1.5rem !important}.tripetto-collector-rolling .pr-sm-4,.tripetto-collector-rolling .px-sm-4{padding-right:1.5rem !important}.tripetto-collector-rolling .pb-sm-4,.tripetto-collector-rolling .py-sm-4{padding-bottom:1.5rem !important}.tripetto-collector-rolling .pl-sm-4,.tripetto-collector-rolling .px-sm-4{padding-left:1.5rem !important}.tripetto-collector-rolling .p-sm-5{padding:3rem !important}.tripetto-collector-rolling .pt-sm-5,.tripetto-collector-rolling .py-sm-5{padding-top:3rem !important}.tripetto-collector-rolling .pr-sm-5,.tripetto-collector-rolling .px-sm-5{padding-right:3rem !important}.tripetto-collector-rolling .pb-sm-5,.tripetto-collector-rolling .py-sm-5{padding-bottom:3rem !important}.tripetto-collector-rolling .pl-sm-5,.tripetto-collector-rolling .px-sm-5{padding-left:3rem !important}.tripetto-collector-rolling .m-sm-n1{margin:-.25rem !important}.tripetto-collector-rolling .mt-sm-n1,.tripetto-collector-rolling .my-sm-n1{margin-top:-.25rem !important}.tripetto-collector-rolling .mr-sm-n1,.tripetto-collector-rolling .mx-sm-n1{margin-right:-.25rem !important}.tripetto-collector-rolling .mb-sm-n1,.tripetto-collector-rolling .my-sm-n1{margin-bottom:-.25rem !important}.tripetto-collector-rolling .ml-sm-n1,.tripetto-collector-rolling .mx-sm-n1{margin-left:-.25rem !important}.tripetto-collector-rolling .m-sm-n2{margin:-.5rem !important}.tripetto-collector-rolling .mt-sm-n2,.tripetto-collector-rolling .my-sm-n2{margin-top:-.5rem !important}.tripetto-collector-rolling .mr-sm-n2,.tripetto-collector-rolling .mx-sm-n2{margin-right:-.5rem !important}.tripetto-collector-rolling .mb-sm-n2,.tripetto-collector-rolling .my-sm-n2{margin-bottom:-.5rem !important}.tripetto-collector-rolling .ml-sm-n2,.tripetto-collector-rolling .mx-sm-n2{margin-left:-.5rem !important}.tripetto-collector-rolling .m-sm-n3{margin:-1rem !important}.tripetto-collector-rolling .mt-sm-n3,.tripetto-collector-rolling .my-sm-n3{margin-top:-1rem !important}.tripetto-collector-rolling .mr-sm-n3,.tripetto-collector-rolling .mx-sm-n3{margin-right:-1rem !important}.tripetto-collector-rolling .mb-sm-n3,.tripetto-collector-rolling .my-sm-n3{margin-bottom:-1rem !important}.tripetto-collector-rolling .ml-sm-n3,.tripetto-collector-rolling .mx-sm-n3{margin-left:-1rem !important}.tripetto-collector-rolling .m-sm-n4{margin:-1.5rem !important}.tripetto-collector-rolling .mt-sm-n4,.tripetto-collector-rolling .my-sm-n4{margin-top:-1.5rem !important}.tripetto-collector-rolling .mr-sm-n4,.tripetto-collector-rolling .mx-sm-n4{margin-right:-1.5rem !important}.tripetto-collector-rolling .mb-sm-n4,.tripetto-collector-rolling .my-sm-n4{margin-bottom:-1.5rem !important}.tripetto-collector-rolling .ml-sm-n4,.tripetto-collector-rolling .mx-sm-n4{margin-left:-1.5rem !important}.tripetto-collector-rolling .m-sm-n5{margin:-3rem !important}.tripetto-collector-rolling .mt-sm-n5,.tripetto-collector-rolling .my-sm-n5{margin-top:-3rem !important}.tripetto-collector-rolling .mr-sm-n5,.tripetto-collector-rolling .mx-sm-n5{margin-right:-3rem !important}.tripetto-collector-rolling .mb-sm-n5,.tripetto-collector-rolling .my-sm-n5{margin-bottom:-3rem !important}.tripetto-collector-rolling .ml-sm-n5,.tripetto-collector-rolling .mx-sm-n5{margin-left:-3rem !important}.tripetto-collector-rolling .m-sm-auto{margin:auto !important}.tripetto-collector-rolling .mt-sm-auto,.tripetto-collector-rolling .my-sm-auto{margin-top:auto !important}.tripetto-collector-rolling .mr-sm-auto,.tripetto-collector-rolling .mx-sm-auto{margin-right:auto !important}.tripetto-collector-rolling .mb-sm-auto,.tripetto-collector-rolling .my-sm-auto{margin-bottom:auto !important}.tripetto-collector-rolling .ml-sm-auto,.tripetto-collector-rolling .mx-sm-auto{margin-left:auto !important}}@media (min-width: 768px){.tripetto-collector-rolling .m-md-0{margin:0 !important}.tripetto-collector-rolling .mt-md-0,.tripetto-collector-rolling .my-md-0{margin-top:0 !important}.tripetto-collector-rolling .mr-md-0,.tripetto-collector-rolling .mx-md-0{margin-right:0 !important}.tripetto-collector-rolling .mb-md-0,.tripetto-collector-rolling .my-md-0{margin-bottom:0 !important}.tripetto-collector-rolling .ml-md-0,.tripetto-collector-rolling .mx-md-0{margin-left:0 !important}.tripetto-collector-rolling .m-md-1{margin:.25rem !important}.tripetto-collector-rolling .mt-md-1,.tripetto-collector-rolling .my-md-1{margin-top:.25rem !important}.tripetto-collector-rolling .mr-md-1,.tripetto-collector-rolling .mx-md-1{margin-right:.25rem !important}.tripetto-collector-rolling .mb-md-1,.tripetto-collector-rolling .my-md-1{margin-bottom:.25rem !important}.tripetto-collector-rolling .ml-md-1,.tripetto-collector-rolling .mx-md-1{margin-left:.25rem !important}.tripetto-collector-rolling .m-md-2{margin:.5rem !important}.tripetto-collector-rolling .mt-md-2,.tripetto-collector-rolling .my-md-2{margin-top:.5rem !important}.tripetto-collector-rolling .mr-md-2,.tripetto-collector-rolling .mx-md-2{margin-right:.5rem !important}.tripetto-collector-rolling .mb-md-2,.tripetto-collector-rolling .my-md-2{margin-bottom:.5rem !important}.tripetto-collector-rolling .ml-md-2,.tripetto-collector-rolling .mx-md-2{margin-left:.5rem !important}.tripetto-collector-rolling .m-md-3{margin:1rem !important}.tripetto-collector-rolling .mt-md-3,.tripetto-collector-rolling .my-md-3{margin-top:1rem !important}.tripetto-collector-rolling .mr-md-3,.tripetto-collector-rolling .mx-md-3{margin-right:1rem !important}.tripetto-collector-rolling .mb-md-3,.tripetto-collector-rolling .my-md-3{margin-bottom:1rem !important}.tripetto-collector-rolling .ml-md-3,.tripetto-collector-rolling .mx-md-3{margin-left:1rem !important}.tripetto-collector-rolling .m-md-4{margin:1.5rem !important}.tripetto-collector-rolling .mt-md-4,.tripetto-collector-rolling .my-md-4{margin-top:1.5rem !important}.tripetto-collector-rolling .mr-md-4,.tripetto-collector-rolling .mx-md-4{margin-right:1.5rem !important}.tripetto-collector-rolling .mb-md-4,.tripetto-collector-rolling .my-md-4{margin-bottom:1.5rem !important}.tripetto-collector-rolling .ml-md-4,.tripetto-collector-rolling .mx-md-4{margin-left:1.5rem !important}.tripetto-collector-rolling .m-md-5{margin:3rem !important}.tripetto-collector-rolling .mt-md-5,.tripetto-collector-rolling .my-md-5{margin-top:3rem !important}.tripetto-collector-rolling .mr-md-5,.tripetto-collector-rolling .mx-md-5{margin-right:3rem !important}.tripetto-collector-rolling .mb-md-5,.tripetto-collector-rolling .my-md-5{margin-bottom:3rem !important}.tripetto-collector-rolling .ml-md-5,.tripetto-collector-rolling .mx-md-5{margin-left:3rem !important}.tripetto-collector-rolling .p-md-0{padding:0 !important}.tripetto-collector-rolling .pt-md-0,.tripetto-collector-rolling .py-md-0{padding-top:0 !important}.tripetto-collector-rolling .pr-md-0,.tripetto-collector-rolling .px-md-0{padding-right:0 !important}.tripetto-collector-rolling .pb-md-0,.tripetto-collector-rolling .py-md-0{padding-bottom:0 !important}.tripetto-collector-rolling .pl-md-0,.tripetto-collector-rolling .px-md-0{padding-left:0 !important}.tripetto-collector-rolling .p-md-1{padding:.25rem !important}.tripetto-collector-rolling .pt-md-1,.tripetto-collector-rolling .py-md-1{padding-top:.25rem !important}.tripetto-collector-rolling .pr-md-1,.tripetto-collector-rolling .px-md-1{padding-right:.25rem !important}.tripetto-collector-rolling .pb-md-1,.tripetto-collector-rolling .py-md-1{padding-bottom:.25rem !important}.tripetto-collector-rolling .pl-md-1,.tripetto-collector-rolling .px-md-1{padding-left:.25rem !important}.tripetto-collector-rolling .p-md-2{padding:.5rem !important}.tripetto-collector-rolling .pt-md-2,.tripetto-collector-rolling .py-md-2{padding-top:.5rem !important}.tripetto-collector-rolling .pr-md-2,.tripetto-collector-rolling .px-md-2{padding-right:.5rem !important}.tripetto-collector-rolling .pb-md-2,.tripetto-collector-rolling .py-md-2{padding-bottom:.5rem !important}.tripetto-collector-rolling .pl-md-2,.tripetto-collector-rolling .px-md-2{padding-left:.5rem !important}.tripetto-collector-rolling .p-md-3{padding:1rem !important}.tripetto-collector-rolling .pt-md-3,.tripetto-collector-rolling .py-md-3{padding-top:1rem !important}.tripetto-collector-rolling .pr-md-3,.tripetto-collector-rolling .px-md-3{padding-right:1rem !important}.tripetto-collector-rolling .pb-md-3,.tripetto-collector-rolling .py-md-3{padding-bottom:1rem !important}.tripetto-collector-rolling .pl-md-3,.tripetto-collector-rolling .px-md-3{padding-left:1rem !important}.tripetto-collector-rolling .p-md-4{padding:1.5rem !important}.tripetto-collector-rolling .pt-md-4,.tripetto-collector-rolling .py-md-4{padding-top:1.5rem !important}.tripetto-collector-rolling .pr-md-4,.tripetto-collector-rolling .px-md-4{padding-right:1.5rem !important}.tripetto-collector-rolling .pb-md-4,.tripetto-collector-rolling .py-md-4{padding-bottom:1.5rem !important}.tripetto-collector-rolling .pl-md-4,.tripetto-collector-rolling .px-md-4{padding-left:1.5rem !important}.tripetto-collector-rolling .p-md-5{padding:3rem !important}.tripetto-collector-rolling .pt-md-5,.tripetto-collector-rolling .py-md-5{padding-top:3rem !important}.tripetto-collector-rolling .pr-md-5,.tripetto-collector-rolling .px-md-5{padding-right:3rem !important}.tripetto-collector-rolling .pb-md-5,.tripetto-collector-rolling .py-md-5{padding-bottom:3rem !important}.tripetto-collector-rolling .pl-md-5,.tripetto-collector-rolling .px-md-5{padding-left:3rem !important}.tripetto-collector-rolling .m-md-n1{margin:-.25rem !important}.tripetto-collector-rolling .mt-md-n1,.tripetto-collector-rolling .my-md-n1{margin-top:-.25rem !important}.tripetto-collector-rolling .mr-md-n1,.tripetto-collector-rolling .mx-md-n1{margin-right:-.25rem !important}.tripetto-collector-rolling .mb-md-n1,.tripetto-collector-rolling .my-md-n1{margin-bottom:-.25rem !important}.tripetto-collector-rolling .ml-md-n1,.tripetto-collector-rolling .mx-md-n1{margin-left:-.25rem !important}.tripetto-collector-rolling .m-md-n2{margin:-.5rem !important}.tripetto-collector-rolling .mt-md-n2,.tripetto-collector-rolling .my-md-n2{margin-top:-.5rem !important}.tripetto-collector-rolling .mr-md-n2,.tripetto-collector-rolling .mx-md-n2{margin-right:-.5rem !important}.tripetto-collector-rolling .mb-md-n2,.tripetto-collector-rolling .my-md-n2{margin-bottom:-.5rem !important}.tripetto-collector-rolling .ml-md-n2,.tripetto-collector-rolling .mx-md-n2{margin-left:-.5rem !important}.tripetto-collector-rolling .m-md-n3{margin:-1rem !important}.tripetto-collector-rolling .mt-md-n3,.tripetto-collector-rolling .my-md-n3{margin-top:-1rem !important}.tripetto-collector-rolling .mr-md-n3,.tripetto-collector-rolling .mx-md-n3{margin-right:-1rem !important}.tripetto-collector-rolling .mb-md-n3,.tripetto-collector-rolling .my-md-n3{margin-bottom:-1rem !important}.tripetto-collector-rolling .ml-md-n3,.tripetto-collector-rolling .mx-md-n3{margin-left:-1rem !important}.tripetto-collector-rolling .m-md-n4{margin:-1.5rem !important}.tripetto-collector-rolling .mt-md-n4,.tripetto-collector-rolling .my-md-n4{margin-top:-1.5rem !important}.tripetto-collector-rolling .mr-md-n4,.tripetto-collector-rolling .mx-md-n4{margin-right:-1.5rem !important}.tripetto-collector-rolling .mb-md-n4,.tripetto-collector-rolling .my-md-n4{margin-bottom:-1.5rem !important}.tripetto-collector-rolling .ml-md-n4,.tripetto-collector-rolling .mx-md-n4{margin-left:-1.5rem !important}.tripetto-collector-rolling .m-md-n5{margin:-3rem !important}.tripetto-collector-rolling .mt-md-n5,.tripetto-collector-rolling .my-md-n5{margin-top:-3rem !important}.tripetto-collector-rolling .mr-md-n5,.tripetto-collector-rolling .mx-md-n5{margin-right:-3rem !important}.tripetto-collector-rolling .mb-md-n5,.tripetto-collector-rolling .my-md-n5{margin-bottom:-3rem !important}.tripetto-collector-rolling .ml-md-n5,.tripetto-collector-rolling .mx-md-n5{margin-left:-3rem !important}.tripetto-collector-rolling .m-md-auto{margin:auto !important}.tripetto-collector-rolling .mt-md-auto,.tripetto-collector-rolling .my-md-auto{margin-top:auto !important}.tripetto-collector-rolling .mr-md-auto,.tripetto-collector-rolling .mx-md-auto{margin-right:auto !important}.tripetto-collector-rolling .mb-md-auto,.tripetto-collector-rolling .my-md-auto{margin-bottom:auto !important}.tripetto-collector-rolling .ml-md-auto,.tripetto-collector-rolling .mx-md-auto{margin-left:auto !important}}@media (min-width: 992px){.tripetto-collector-rolling .m-lg-0{margin:0 !important}.tripetto-collector-rolling .mt-lg-0,.tripetto-collector-rolling .my-lg-0{margin-top:0 !important}.tripetto-collector-rolling .mr-lg-0,.tripetto-collector-rolling .mx-lg-0{margin-right:0 !important}.tripetto-collector-rolling .mb-lg-0,.tripetto-collector-rolling .my-lg-0{margin-bottom:0 !important}.tripetto-collector-rolling .ml-lg-0,.tripetto-collector-rolling .mx-lg-0{margin-left:0 !important}.tripetto-collector-rolling .m-lg-1{margin:.25rem !important}.tripetto-collector-rolling .mt-lg-1,.tripetto-collector-rolling .my-lg-1{margin-top:.25rem !important}.tripetto-collector-rolling .mr-lg-1,.tripetto-collector-rolling .mx-lg-1{margin-right:.25rem !important}.tripetto-collector-rolling .mb-lg-1,.tripetto-collector-rolling .my-lg-1{margin-bottom:.25rem !important}.tripetto-collector-rolling .ml-lg-1,.tripetto-collector-rolling .mx-lg-1{margin-left:.25rem !important}.tripetto-collector-rolling .m-lg-2{margin:.5rem !important}.tripetto-collector-rolling .mt-lg-2,.tripetto-collector-rolling .my-lg-2{margin-top:.5rem !important}.tripetto-collector-rolling .mr-lg-2,.tripetto-collector-rolling .mx-lg-2{margin-right:.5rem !important}.tripetto-collector-rolling .mb-lg-2,.tripetto-collector-rolling .my-lg-2{margin-bottom:.5rem !important}.tripetto-collector-rolling .ml-lg-2,.tripetto-collector-rolling .mx-lg-2{margin-left:.5rem !important}.tripetto-collector-rolling .m-lg-3{margin:1rem !important}.tripetto-collector-rolling .mt-lg-3,.tripetto-collector-rolling .my-lg-3{margin-top:1rem !important}.tripetto-collector-rolling .mr-lg-3,.tripetto-collector-rolling .mx-lg-3{margin-right:1rem !important}.tripetto-collector-rolling .mb-lg-3,.tripetto-collector-rolling .my-lg-3{margin-bottom:1rem !important}.tripetto-collector-rolling .ml-lg-3,.tripetto-collector-rolling .mx-lg-3{margin-left:1rem !important}.tripetto-collector-rolling .m-lg-4{margin:1.5rem !important}.tripetto-collector-rolling .mt-lg-4,.tripetto-collector-rolling .my-lg-4{margin-top:1.5rem !important}.tripetto-collector-rolling .mr-lg-4,.tripetto-collector-rolling .mx-lg-4{margin-right:1.5rem !important}.tripetto-collector-rolling .mb-lg-4,.tripetto-collector-rolling .my-lg-4{margin-bottom:1.5rem !important}.tripetto-collector-rolling .ml-lg-4,.tripetto-collector-rolling .mx-lg-4{margin-left:1.5rem !important}.tripetto-collector-rolling .m-lg-5{margin:3rem !important}.tripetto-collector-rolling .mt-lg-5,.tripetto-collector-rolling .my-lg-5{margin-top:3rem !important}.tripetto-collector-rolling .mr-lg-5,.tripetto-collector-rolling .mx-lg-5{margin-right:3rem !important}.tripetto-collector-rolling .mb-lg-5,.tripetto-collector-rolling .my-lg-5{margin-bottom:3rem !important}.tripetto-collector-rolling .ml-lg-5,.tripetto-collector-rolling .mx-lg-5{margin-left:3rem !important}.tripetto-collector-rolling .p-lg-0{padding:0 !important}.tripetto-collector-rolling .pt-lg-0,.tripetto-collector-rolling .py-lg-0{padding-top:0 !important}.tripetto-collector-rolling .pr-lg-0,.tripetto-collector-rolling .px-lg-0{padding-right:0 !important}.tripetto-collector-rolling .pb-lg-0,.tripetto-collector-rolling .py-lg-0{padding-bottom:0 !important}.tripetto-collector-rolling .pl-lg-0,.tripetto-collector-rolling .px-lg-0{padding-left:0 !important}.tripetto-collector-rolling .p-lg-1{padding:.25rem !important}.tripetto-collector-rolling .pt-lg-1,.tripetto-collector-rolling .py-lg-1{padding-top:.25rem !important}.tripetto-collector-rolling .pr-lg-1,.tripetto-collector-rolling .px-lg-1{padding-right:.25rem !important}.tripetto-collector-rolling .pb-lg-1,.tripetto-collector-rolling .py-lg-1{padding-bottom:.25rem !important}.tripetto-collector-rolling .pl-lg-1,.tripetto-collector-rolling .px-lg-1{padding-left:.25rem !important}.tripetto-collector-rolling .p-lg-2{padding:.5rem !important}.tripetto-collector-rolling .pt-lg-2,.tripetto-collector-rolling .py-lg-2{padding-top:.5rem !important}.tripetto-collector-rolling .pr-lg-2,.tripetto-collector-rolling .px-lg-2{padding-right:.5rem !important}.tripetto-collector-rolling .pb-lg-2,.tripetto-collector-rolling .py-lg-2{padding-bottom:.5rem !important}.tripetto-collector-rolling .pl-lg-2,.tripetto-collector-rolling .px-lg-2{padding-left:.5rem !important}.tripetto-collector-rolling .p-lg-3{padding:1rem !important}.tripetto-collector-rolling .pt-lg-3,.tripetto-collector-rolling .py-lg-3{padding-top:1rem !important}.tripetto-collector-rolling .pr-lg-3,.tripetto-collector-rolling .px-lg-3{padding-right:1rem !important}.tripetto-collector-rolling .pb-lg-3,.tripetto-collector-rolling .py-lg-3{padding-bottom:1rem !important}.tripetto-collector-rolling .pl-lg-3,.tripetto-collector-rolling .px-lg-3{padding-left:1rem !important}.tripetto-collector-rolling .p-lg-4{padding:1.5rem !important}.tripetto-collector-rolling .pt-lg-4,.tripetto-collector-rolling .py-lg-4{padding-top:1.5rem !important}.tripetto-collector-rolling .pr-lg-4,.tripetto-collector-rolling .px-lg-4{padding-right:1.5rem !important}.tripetto-collector-rolling .pb-lg-4,.tripetto-collector-rolling .py-lg-4{padding-bottom:1.5rem !important}.tripetto-collector-rolling .pl-lg-4,.tripetto-collector-rolling .px-lg-4{padding-left:1.5rem !important}.tripetto-collector-rolling .p-lg-5{padding:3rem !important}.tripetto-collector-rolling .pt-lg-5,.tripetto-collector-rolling .py-lg-5{padding-top:3rem !important}.tripetto-collector-rolling .pr-lg-5,.tripetto-collector-rolling .px-lg-5{padding-right:3rem !important}.tripetto-collector-rolling .pb-lg-5,.tripetto-collector-rolling .py-lg-5{padding-bottom:3rem !important}.tripetto-collector-rolling .pl-lg-5,.tripetto-collector-rolling .px-lg-5{padding-left:3rem !important}.tripetto-collector-rolling .m-lg-n1{margin:-.25rem !important}.tripetto-collector-rolling .mt-lg-n1,.tripetto-collector-rolling .my-lg-n1{margin-top:-.25rem !important}.tripetto-collector-rolling .mr-lg-n1,.tripetto-collector-rolling .mx-lg-n1{margin-right:-.25rem !important}.tripetto-collector-rolling .mb-lg-n1,.tripetto-collector-rolling .my-lg-n1{margin-bottom:-.25rem !important}.tripetto-collector-rolling .ml-lg-n1,.tripetto-collector-rolling .mx-lg-n1{margin-left:-.25rem !important}.tripetto-collector-rolling .m-lg-n2{margin:-.5rem !important}.tripetto-collector-rolling .mt-lg-n2,.tripetto-collector-rolling .my-lg-n2{margin-top:-.5rem !important}.tripetto-collector-rolling .mr-lg-n2,.tripetto-collector-rolling .mx-lg-n2{margin-right:-.5rem !important}.tripetto-collector-rolling .mb-lg-n2,.tripetto-collector-rolling .my-lg-n2{margin-bottom:-.5rem !important}.tripetto-collector-rolling .ml-lg-n2,.tripetto-collector-rolling .mx-lg-n2{margin-left:-.5rem !important}.tripetto-collector-rolling .m-lg-n3{margin:-1rem !important}.tripetto-collector-rolling .mt-lg-n3,.tripetto-collector-rolling .my-lg-n3{margin-top:-1rem !important}.tripetto-collector-rolling .mr-lg-n3,.tripetto-collector-rolling .mx-lg-n3{margin-right:-1rem !important}.tripetto-collector-rolling .mb-lg-n3,.tripetto-collector-rolling .my-lg-n3{margin-bottom:-1rem !important}.tripetto-collector-rolling .ml-lg-n3,.tripetto-collector-rolling .mx-lg-n3{margin-left:-1rem !important}.tripetto-collector-rolling .m-lg-n4{margin:-1.5rem !important}.tripetto-collector-rolling .mt-lg-n4,.tripetto-collector-rolling .my-lg-n4{margin-top:-1.5rem !important}.tripetto-collector-rolling .mr-lg-n4,.tripetto-collector-rolling .mx-lg-n4{margin-right:-1.5rem !important}.tripetto-collector-rolling .mb-lg-n4,.tripetto-collector-rolling .my-lg-n4{margin-bottom:-1.5rem !important}.tripetto-collector-rolling .ml-lg-n4,.tripetto-collector-rolling .mx-lg-n4{margin-left:-1.5rem !important}.tripetto-collector-rolling .m-lg-n5{margin:-3rem !important}.tripetto-collector-rolling .mt-lg-n5,.tripetto-collector-rolling .my-lg-n5{margin-top:-3rem !important}.tripetto-collector-rolling .mr-lg-n5,.tripetto-collector-rolling .mx-lg-n5{margin-right:-3rem !important}.tripetto-collector-rolling .mb-lg-n5,.tripetto-collector-rolling .my-lg-n5{margin-bottom:-3rem !important}.tripetto-collector-rolling .ml-lg-n5,.tripetto-collector-rolling .mx-lg-n5{margin-left:-3rem !important}.tripetto-collector-rolling .m-lg-auto{margin:auto !important}.tripetto-collector-rolling .mt-lg-auto,.tripetto-collector-rolling .my-lg-auto{margin-top:auto !important}.tripetto-collector-rolling .mr-lg-auto,.tripetto-collector-rolling .mx-lg-auto{margin-right:auto !important}.tripetto-collector-rolling .mb-lg-auto,.tripetto-collector-rolling .my-lg-auto{margin-bottom:auto !important}.tripetto-collector-rolling .ml-lg-auto,.tripetto-collector-rolling .mx-lg-auto{margin-left:auto !important}}@media (min-width: 1200px){.tripetto-collector-rolling .m-xl-0{margin:0 !important}.tripetto-collector-rolling .mt-xl-0,.tripetto-collector-rolling .my-xl-0{margin-top:0 !important}.tripetto-collector-rolling .mr-xl-0,.tripetto-collector-rolling .mx-xl-0{margin-right:0 !important}.tripetto-collector-rolling .mb-xl-0,.tripetto-collector-rolling .my-xl-0{margin-bottom:0 !important}.tripetto-collector-rolling .ml-xl-0,.tripetto-collector-rolling .mx-xl-0{margin-left:0 !important}.tripetto-collector-rolling .m-xl-1{margin:.25rem !important}.tripetto-collector-rolling .mt-xl-1,.tripetto-collector-rolling .my-xl-1{margin-top:.25rem !important}.tripetto-collector-rolling .mr-xl-1,.tripetto-collector-rolling .mx-xl-1{margin-right:.25rem !important}.tripetto-collector-rolling .mb-xl-1,.tripetto-collector-rolling .my-xl-1{margin-bottom:.25rem !important}.tripetto-collector-rolling .ml-xl-1,.tripetto-collector-rolling .mx-xl-1{margin-left:.25rem !important}.tripetto-collector-rolling .m-xl-2{margin:.5rem !important}.tripetto-collector-rolling .mt-xl-2,.tripetto-collector-rolling .my-xl-2{margin-top:.5rem !important}.tripetto-collector-rolling .mr-xl-2,.tripetto-collector-rolling .mx-xl-2{margin-right:.5rem !important}.tripetto-collector-rolling .mb-xl-2,.tripetto-collector-rolling .my-xl-2{margin-bottom:.5rem !important}.tripetto-collector-rolling .ml-xl-2,.tripetto-collector-rolling .mx-xl-2{margin-left:.5rem !important}.tripetto-collector-rolling .m-xl-3{margin:1rem !important}.tripetto-collector-rolling .mt-xl-3,.tripetto-collector-rolling .my-xl-3{margin-top:1rem !important}.tripetto-collector-rolling .mr-xl-3,.tripetto-collector-rolling .mx-xl-3{margin-right:1rem !important}.tripetto-collector-rolling .mb-xl-3,.tripetto-collector-rolling .my-xl-3{margin-bottom:1rem !important}.tripetto-collector-rolling .ml-xl-3,.tripetto-collector-rolling .mx-xl-3{margin-left:1rem !important}.tripetto-collector-rolling .m-xl-4{margin:1.5rem !important}.tripetto-collector-rolling .mt-xl-4,.tripetto-collector-rolling .my-xl-4{margin-top:1.5rem !important}.tripetto-collector-rolling .mr-xl-4,.tripetto-collector-rolling .mx-xl-4{margin-right:1.5rem !important}.tripetto-collector-rolling .mb-xl-4,.tripetto-collector-rolling .my-xl-4{margin-bottom:1.5rem !important}.tripetto-collector-rolling .ml-xl-4,.tripetto-collector-rolling .mx-xl-4{margin-left:1.5rem !important}.tripetto-collector-rolling .m-xl-5{margin:3rem !important}.tripetto-collector-rolling .mt-xl-5,.tripetto-collector-rolling .my-xl-5{margin-top:3rem !important}.tripetto-collector-rolling .mr-xl-5,.tripetto-collector-rolling .mx-xl-5{margin-right:3rem !important}.tripetto-collector-rolling .mb-xl-5,.tripetto-collector-rolling .my-xl-5{margin-bottom:3rem !important}.tripetto-collector-rolling .ml-xl-5,.tripetto-collector-rolling .mx-xl-5{margin-left:3rem !important}.tripetto-collector-rolling .p-xl-0{padding:0 !important}.tripetto-collector-rolling .pt-xl-0,.tripetto-collector-rolling .py-xl-0{padding-top:0 !important}.tripetto-collector-rolling .pr-xl-0,.tripetto-collector-rolling .px-xl-0{padding-right:0 !important}.tripetto-collector-rolling .pb-xl-0,.tripetto-collector-rolling .py-xl-0{padding-bottom:0 !important}.tripetto-collector-rolling .pl-xl-0,.tripetto-collector-rolling .px-xl-0{padding-left:0 !important}.tripetto-collector-rolling .p-xl-1{padding:.25rem !important}.tripetto-collector-rolling .pt-xl-1,.tripetto-collector-rolling .py-xl-1{padding-top:.25rem !important}.tripetto-collector-rolling .pr-xl-1,.tripetto-collector-rolling .px-xl-1{padding-right:.25rem !important}.tripetto-collector-rolling .pb-xl-1,.tripetto-collector-rolling .py-xl-1{padding-bottom:.25rem !important}.tripetto-collector-rolling .pl-xl-1,.tripetto-collector-rolling .px-xl-1{padding-left:.25rem !important}.tripetto-collector-rolling .p-xl-2{padding:.5rem !important}.tripetto-collector-rolling .pt-xl-2,.tripetto-collector-rolling .py-xl-2{padding-top:.5rem !important}.tripetto-collector-rolling .pr-xl-2,.tripetto-collector-rolling .px-xl-2{padding-right:.5rem !important}.tripetto-collector-rolling .pb-xl-2,.tripetto-collector-rolling .py-xl-2{padding-bottom:.5rem !important}.tripetto-collector-rolling .pl-xl-2,.tripetto-collector-rolling .px-xl-2{padding-left:.5rem !important}.tripetto-collector-rolling .p-xl-3{padding:1rem !important}.tripetto-collector-rolling .pt-xl-3,.tripetto-collector-rolling .py-xl-3{padding-top:1rem !important}.tripetto-collector-rolling .pr-xl-3,.tripetto-collector-rolling .px-xl-3{padding-right:1rem !important}.tripetto-collector-rolling .pb-xl-3,.tripetto-collector-rolling .py-xl-3{padding-bottom:1rem !important}.tripetto-collector-rolling .pl-xl-3,.tripetto-collector-rolling .px-xl-3{padding-left:1rem !important}.tripetto-collector-rolling .p-xl-4{padding:1.5rem !important}.tripetto-collector-rolling .pt-xl-4,.tripetto-collector-rolling .py-xl-4{padding-top:1.5rem !important}.tripetto-collector-rolling .pr-xl-4,.tripetto-collector-rolling .px-xl-4{padding-right:1.5rem !important}.tripetto-collector-rolling .pb-xl-4,.tripetto-collector-rolling .py-xl-4{padding-bottom:1.5rem !important}.tripetto-collector-rolling .pl-xl-4,.tripetto-collector-rolling .px-xl-4{padding-left:1.5rem !important}.tripetto-collector-rolling .p-xl-5{padding:3rem !important}.tripetto-collector-rolling .pt-xl-5,.tripetto-collector-rolling .py-xl-5{padding-top:3rem !important}.tripetto-collector-rolling .pr-xl-5,.tripetto-collector-rolling .px-xl-5{padding-right:3rem !important}.tripetto-collector-rolling .pb-xl-5,.tripetto-collector-rolling .py-xl-5{padding-bottom:3rem !important}.tripetto-collector-rolling .pl-xl-5,.tripetto-collector-rolling .px-xl-5{padding-left:3rem !important}.tripetto-collector-rolling .m-xl-n1{margin:-.25rem !important}.tripetto-collector-rolling .mt-xl-n1,.tripetto-collector-rolling .my-xl-n1{margin-top:-.25rem !important}.tripetto-collector-rolling .mr-xl-n1,.tripetto-collector-rolling .mx-xl-n1{margin-right:-.25rem !important}.tripetto-collector-rolling .mb-xl-n1,.tripetto-collector-rolling .my-xl-n1{margin-bottom:-.25rem !important}.tripetto-collector-rolling .ml-xl-n1,.tripetto-collector-rolling .mx-xl-n1{margin-left:-.25rem !important}.tripetto-collector-rolling .m-xl-n2{margin:-.5rem !important}.tripetto-collector-rolling .mt-xl-n2,.tripetto-collector-rolling .my-xl-n2{margin-top:-.5rem !important}.tripetto-collector-rolling .mr-xl-n2,.tripetto-collector-rolling .mx-xl-n2{margin-right:-.5rem !important}.tripetto-collector-rolling .mb-xl-n2,.tripetto-collector-rolling .my-xl-n2{margin-bottom:-.5rem !important}.tripetto-collector-rolling .ml-xl-n2,.tripetto-collector-rolling .mx-xl-n2{margin-left:-.5rem !important}.tripetto-collector-rolling .m-xl-n3{margin:-1rem !important}.tripetto-collector-rolling .mt-xl-n3,.tripetto-collector-rolling .my-xl-n3{margin-top:-1rem !important}.tripetto-collector-rolling .mr-xl-n3,.tripetto-collector-rolling .mx-xl-n3{margin-right:-1rem !important}.tripetto-collector-rolling .mb-xl-n3,.tripetto-collector-rolling .my-xl-n3{margin-bottom:-1rem !important}.tripetto-collector-rolling .ml-xl-n3,.tripetto-collector-rolling .mx-xl-n3{margin-left:-1rem !important}.tripetto-collector-rolling .m-xl-n4{margin:-1.5rem !important}.tripetto-collector-rolling .mt-xl-n4,.tripetto-collector-rolling .my-xl-n4{margin-top:-1.5rem !important}.tripetto-collector-rolling .mr-xl-n4,.tripetto-collector-rolling .mx-xl-n4{margin-right:-1.5rem !important}.tripetto-collector-rolling .mb-xl-n4,.tripetto-collector-rolling .my-xl-n4{margin-bottom:-1.5rem !important}.tripetto-collector-rolling .ml-xl-n4,.tripetto-collector-rolling .mx-xl-n4{margin-left:-1.5rem !important}.tripetto-collector-rolling .m-xl-n5{margin:-3rem !important}.tripetto-collector-rolling .mt-xl-n5,.tripetto-collector-rolling .my-xl-n5{margin-top:-3rem !important}.tripetto-collector-rolling .mr-xl-n5,.tripetto-collector-rolling .mx-xl-n5{margin-right:-3rem !important}.tripetto-collector-rolling .mb-xl-n5,.tripetto-collector-rolling .my-xl-n5{margin-bottom:-3rem !important}.tripetto-collector-rolling .ml-xl-n5,.tripetto-collector-rolling .mx-xl-n5{margin-left:-3rem !important}.tripetto-collector-rolling .m-xl-auto{margin:auto !important}.tripetto-collector-rolling .mt-xl-auto,.tripetto-collector-rolling .my-xl-auto{margin-top:auto !important}.tripetto-collector-rolling .mr-xl-auto,.tripetto-collector-rolling .mx-xl-auto{margin-right:auto !important}.tripetto-collector-rolling .mb-xl-auto,.tripetto-collector-rolling .my-xl-auto{margin-bottom:auto !important}.tripetto-collector-rolling .ml-xl-auto,.tripetto-collector-rolling .mx-xl-auto{margin-left:auto !important}}.tripetto-collector-rolling .text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace !important}.tripetto-collector-rolling .text-justify{text-align:justify !important}.tripetto-collector-rolling .text-wrap{white-space:normal !important}.tripetto-collector-rolling .text-nowrap{white-space:nowrap !important}.tripetto-collector-rolling .text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tripetto-collector-rolling .text-left{text-align:left !important}.tripetto-collector-rolling .text-right{text-align:right !important}.tripetto-collector-rolling .text-center{text-align:center !important}@media (min-width: 576px){.tripetto-collector-rolling .text-sm-left{text-align:left !important}.tripetto-collector-rolling .text-sm-right{text-align:right !important}.tripetto-collector-rolling .text-sm-center{text-align:center !important}}@media (min-width: 768px){.tripetto-collector-rolling .text-md-left{text-align:left !important}.tripetto-collector-rolling .text-md-right{text-align:right !important}.tripetto-collector-rolling .text-md-center{text-align:center !important}}@media (min-width: 992px){.tripetto-collector-rolling .text-lg-left{text-align:left !important}.tripetto-collector-rolling .text-lg-right{text-align:right !important}.tripetto-collector-rolling .text-lg-center{text-align:center !important}}@media (min-width: 1200px){.tripetto-collector-rolling .text-xl-left{text-align:left !important}.tripetto-collector-rolling .text-xl-right{text-align:right !important}.tripetto-collector-rolling .text-xl-center{text-align:center !important}}.tripetto-collector-rolling .text-lowercase{text-transform:lowercase !important}.tripetto-collector-rolling .text-uppercase{text-transform:uppercase !important}.tripetto-collector-rolling .text-capitalize{text-transform:capitalize !important}.tripetto-collector-rolling .font-weight-light{font-weight:300 !important}.tripetto-collector-rolling .font-weight-lighter{font-weight:lighter !important}.tripetto-collector-rolling .font-weight-normal{font-weight:400 !important}.tripetto-collector-rolling .font-weight-bold{font-weight:700 !important}.tripetto-collector-rolling .font-weight-bolder{font-weight:bolder !important}.tripetto-collector-rolling .font-italic{font-style:italic !important}.tripetto-collector-rolling .text-white{color:#fff !important}.tripetto-collector-rolling .text-primary{color:#007bff !important}.tripetto-collector-rolling a.text-primary:hover,.tripetto-collector-rolling a.text-primary:focus{color:#0056b3 !important}.tripetto-collector-rolling .text-secondary{color:#6c757d !important}.tripetto-collector-rolling a.text-secondary:hover,.tripetto-collector-rolling a.text-secondary:focus{color:#494f54 !important}.tripetto-collector-rolling .text-success{color:#28a745 !important}.tripetto-collector-rolling a.text-success:hover,.tripetto-collector-rolling a.text-success:focus{color:#19692c !important}.tripetto-collector-rolling .text-info{color:#17a2b8 !important}.tripetto-collector-rolling a.text-info:hover,.tripetto-collector-rolling a.text-info:focus{color:#0f6674 !important}.tripetto-collector-rolling .text-warning{color:#ffc107 !important}.tripetto-collector-rolling a.text-warning:hover,.tripetto-collector-rolling a.text-warning:focus{color:#ba8b00 !important}.tripetto-collector-rolling .text-danger{color:#dc3545 !important}.tripetto-collector-rolling a.text-danger:hover,.tripetto-collector-rolling a.text-danger:focus{color:#a71d2a !important}.tripetto-collector-rolling .text-light{color:#f8f9fa !important}.tripetto-collector-rolling a.text-light:hover,.tripetto-collector-rolling a.text-light:focus{color:#cbd3da !important}.tripetto-collector-rolling .text-dark{color:#343a40 !important}.tripetto-collector-rolling a.text-dark:hover,.tripetto-collector-rolling a.text-dark:focus{color:#121416 !important}.tripetto-collector-rolling .text-body{color:#212529 !important}.tripetto-collector-rolling .text-muted{color:#6c757d !important}.tripetto-collector-rolling .text-black-50{color:rgba(0,0,0,0.5) !important}.tripetto-collector-rolling .text-white-50{color:rgba(255,255,255,0.5) !important}.tripetto-collector-rolling .text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.tripetto-collector-rolling .text-decoration-none{text-decoration:none !important}.tripetto-collector-rolling .text-break{word-break:break-word !important;word-wrap:break-word !important}.tripetto-collector-rolling .text-reset{color:inherit !important}.tripetto-collector-rolling .visible{visibility:visible !important}.tripetto-collector-rolling .invisible{visibility:hidden !important}@media print{.tripetto-collector-rolling *,.tripetto-collector-rolling *::before,.tripetto-collector-rolling *::after{text-shadow:none !important;box-shadow:none !important}.tripetto-collector-rolling a:not(.btn){text-decoration:underline}.tripetto-collector-rolling abbr[title]::after{content:" (" attr(title) ")"}.tripetto-collector-rolling pre{white-space:pre-wrap !important}.tripetto-collector-rolling pre,.tripetto-collector-rolling blockquote{border:1px solid #adb5bd;page-break-inside:avoid}.tripetto-collector-rolling thead{display:table-header-group}.tripetto-collector-rolling tr,.tripetto-collector-rolling img{page-break-inside:avoid}.tripetto-collector-rolling p,.tripetto-collector-rolling h2,.tripetto-collector-rolling h3{orphans:3;widows:3}.tripetto-collector-rolling h2,.tripetto-collector-rolling h3{page-break-after:avoid}@page{.tripetto-collector-rolling{size:a3}}.tripetto-collector-rolling body{min-width:992px !important}.tripetto-collector-rolling .container{min-width:992px !important}.tripetto-collector-rolling .navbar{display:none}.tripetto-collector-rolling .badge{border:1px solid #000}.tripetto-collector-rolling .table{border-collapse:collapse !important}.tripetto-collector-rolling .table td,.tripetto-collector-rolling .table th{background-color:#fff !important}.tripetto-collector-rolling .table-bordered th,.tripetto-collector-rolling .table-bordered td{border:1px solid #dee2e6 !important}.tripetto-collector-rolling .table-dark{color:inherit}.tripetto-collector-rolling .table-dark th,.tripetto-collector-rolling .table-dark td,.tripetto-collector-rolling .table-dark thead th,.tripetto-collector-rolling .table-dark tbody+tbody{border-color:#dee2e6}.tripetto-collector-rolling .table .thead-dark th{color:inherit;border-color:#dee2e6}}.tripetto-collector-rolling *{outline:none;touch-action:auto}.tripetto-collector-rolling a{text-decoration:underline;color:inherit !important}.tripetto-collector-rolling .inline-usage{max-width:100% !important;width:100%}.tripetto-collector-rolling button svg{width:16px;height:16px;position:relative;top:-2px}.tripetto-collector-rolling button svg path{transition:fill 0.15s ease-in-out}@media (min-width: 576px){.tripetto-collector-rolling button svg{width:20px;height:20px}}@media (min-width: 576px){.tripetto-collector-rolling button.btn-next svg{width:16px;height:16px}}.tripetto-collector-rolling button:not(:disabled):not(.disabled):hover.btn-outline-primary path,.tripetto-collector-rolling button:not(:disabled):not(.disabled):hover.btn-outline-secondary path,.tripetto-collector-rolling button:not(:disabled):not(.disabled):hover.btn-outline-success path,.tripetto-collector-rolling button:not(:disabled):not(.disabled):hover.btn-outline-danger path,.tripetto-collector-rolling button:not(:disabled):not(.disabled):hover.btn-outline-info path,.tripetto-collector-rolling button:not(:disabled):not(.disabled):hover.btn-outline-dark path{fill:#fff}.tripetto-collector-rolling button:not(:disabled):not(.disabled):hover.btn-outline-warning path,.tripetto-collector-rolling button:not(:disabled):not(.disabled):hover.btn-outline-light path{fill:#212529}.tripetto-collector-rolling button.btn-primary path,.tripetto-collector-rolling button.btn-secondary path,.tripetto-collector-rolling button.btn-success path,.tripetto-collector-rolling button.btn-danger path,.tripetto-collector-rolling button.btn-info path,.tripetto-collector-rolling button.btn-dark path{fill:#fff}.tripetto-collector-rolling button.btn-warning path,.tripetto-collector-rolling button.btn-light path{fill:#212529}.tripetto-collector-rolling button.btn-outline-primary path{fill:#007bff}.tripetto-collector-rolling button.btn-outline-secondary path{fill:#6c757d}.tripetto-collector-rolling button.btn-outline-success path{fill:#28a745}.tripetto-collector-rolling button.btn-outline-danger path{fill:#dc3545}.tripetto-collector-rolling button.btn-outline-warning path{fill:#ffc107}.tripetto-collector-rolling button.btn-outline-info path{fill:#17a2b8}.tripetto-collector-rolling button.btn-outline-light path{fill:#f8f9fa}.tripetto-collector-rolling button.btn-outline-dark path{fill:#343a40}.tripetto-collector-rolling input.form-control-primary,.tripetto-collector-rolling textarea.form-control-primary,.tripetto-collector-rolling select.form-control-primary{border-color:#007bff}.tripetto-collector-rolling input.form-control-primary:focus,.tripetto-collector-rolling textarea.form-control-primary:focus,.tripetto-collector-rolling select.form-control-primary:focus{border-color:#0062cc;box-shadow:0 0 0 0.2rem rgba(38,143,255,0.5)}.tripetto-collector-rolling input.form-control-secondary,.tripetto-collector-rolling textarea.form-control-secondary,.tripetto-collector-rolling select.form-control-secondary{border-color:#6c757d}.tripetto-collector-rolling input.form-control-secondary:focus,.tripetto-collector-rolling textarea.form-control-secondary:focus,.tripetto-collector-rolling select.form-control-secondary:focus{border-color:#5a6268;box-shadow:0 0 0 0.2rem rgba(130,138,145,0.5)}.tripetto-collector-rolling input.form-control-success,.tripetto-collector-rolling textarea.form-control-success,.tripetto-collector-rolling select.form-control-success{border-color:#28a745}.tripetto-collector-rolling input.form-control-success:focus,.tripetto-collector-rolling textarea.form-control-success:focus,.tripetto-collector-rolling select.form-control-success:focus{border-color:#1c7430;box-shadow:0 0 0 0.2rem rgba(72,180,97,0.5)}.tripetto-collector-rolling input.form-control-danger,.tripetto-collector-rolling textarea.form-control-danger,.tripetto-collector-rolling select.form-control-danger{border-color:#dc3545}.tripetto-collector-rolling input.form-control-danger:focus,.tripetto-collector-rolling textarea.form-control-danger:focus,.tripetto-collector-rolling select.form-control-danger:focus{border-color:#bd2130;box-shadow:0 0 0 0.2rem rgba(225,83,97,0.5)}.tripetto-collector-rolling input.form-control-warning,.tripetto-collector-rolling textarea.form-control-warning,.tripetto-collector-rolling select.form-control-warning{border-color:#ffc107}.tripetto-collector-rolling input.form-control-warning:focus,.tripetto-collector-rolling textarea.form-control-warning:focus,.tripetto-collector-rolling select.form-control-warning:focus{border-color:#d39e00;box-shadow:0 0 0 0.2rem rgba(222,170,12,0.5)}.tripetto-collector-rolling input.form-control-info,.tripetto-collector-rolling textarea.form-control-info,.tripetto-collector-rolling select.form-control-info{border-color:#17a2b8}.tripetto-collector-rolling input.form-control-info:focus,.tripetto-collector-rolling textarea.form-control-info:focus,.tripetto-collector-rolling select.form-control-info:focus{border-color:#117a8b;box-shadow:0 0 0 0.2rem rgba(58,176,195,0.5)}.tripetto-collector-rolling input.form-control-light,.tripetto-collector-rolling textarea.form-control-light,.tripetto-collector-rolling select.form-control-light{border-color:#f8f9fa}.tripetto-collector-rolling input.form-control-light:focus,.tripetto-collector-rolling textarea.form-control-light:focus,.tripetto-collector-rolling select.form-control-light:focus{border-color:#dae0e5;box-shadow:0 0 0 0.2rem rgba(216,217,219,0.5)}.tripetto-collector-rolling input.form-control-dark,.tripetto-collector-rolling textarea.form-control-dark,.tripetto-collector-rolling select.form-control-dark{border-color:#343a40}.tripetto-collector-rolling input.form-control-dark:focus,.tripetto-collector-rolling textarea.form-control-dark:focus,.tripetto-collector-rolling select.form-control-dark:focus{border-color:#1d2124;box-shadow:0 0 0 0.2rem rgba(82,88,93,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-primary ~ .custom-control-label::before{border-color:#007bff}.tripetto-collector-rolling .custom-control-input.checkbox-control-primary:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5);border-color:rgba(0,123,255,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-primary:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(0,123,255,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-primary:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(0,123,255,0.25)}.tripetto-collector-rolling .custom-control-input.checkbox-control-primary:checked ~ .custom-control-label::before{border-color:#007bff;background-color:#007bff}.tripetto-collector-rolling .custom-control-input.checkbox-control-secondary ~ .custom-control-label::before{border-color:#6c757d}.tripetto-collector-rolling .custom-control-input.checkbox-control-secondary:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(108,117,125,0.5);border-color:rgba(108,117,125,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-secondary:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(108,117,125,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-secondary:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(108,117,125,0.25)}.tripetto-collector-rolling .custom-control-input.checkbox-control-secondary:checked ~ .custom-control-label::before{border-color:#6c757d;background-color:#6c757d}.tripetto-collector-rolling .custom-control-input.checkbox-control-success ~ .custom-control-label::before{border-color:#28a745}.tripetto-collector-rolling .custom-control-input.checkbox-control-success:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(40,167,69,0.5);border-color:rgba(40,167,69,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-success:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(40,167,69,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-success:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(40,167,69,0.25)}.tripetto-collector-rolling .custom-control-input.checkbox-control-success:checked ~ .custom-control-label::before{border-color:#28a745;background-color:#28a745}.tripetto-collector-rolling .custom-control-input.checkbox-control-danger ~ .custom-control-label::before{border-color:#dc3545}.tripetto-collector-rolling .custom-control-input.checkbox-control-danger:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(220,53,69,0.5);border-color:rgba(220,53,69,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-danger:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(220,53,69,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-danger:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(220,53,69,0.25)}.tripetto-collector-rolling .custom-control-input.checkbox-control-danger:checked ~ .custom-control-label::before{border-color:#dc3545;background-color:#dc3545}.tripetto-collector-rolling .custom-control-input.checkbox-control-warning ~ .custom-control-label::before{border-color:#ffc107}.tripetto-collector-rolling .custom-control-input.checkbox-control-warning:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(255,193,7,0.5);border-color:rgba(255,193,7,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-warning:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(255,193,7,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-warning:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(255,193,7,0.25)}.tripetto-collector-rolling .custom-control-input.checkbox-control-warning:checked ~ .custom-control-label::before{border-color:#ffc107;background-color:#ffc107}.tripetto-collector-rolling .custom-control-input.checkbox-control-info ~ .custom-control-label::before{border-color:#17a2b8}.tripetto-collector-rolling .custom-control-input.checkbox-control-info:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(23,162,184,0.5);border-color:rgba(23,162,184,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-info:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(23,162,184,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-info:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(23,162,184,0.25)}.tripetto-collector-rolling .custom-control-input.checkbox-control-info:checked ~ .custom-control-label::before{border-color:#17a2b8;background-color:#17a2b8}.tripetto-collector-rolling .custom-control-input.checkbox-control-light ~ .custom-control-label::before{border-color:#f8f9fa}.tripetto-collector-rolling .custom-control-input.checkbox-control-light:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(248,249,250,0.5);border-color:rgba(248,249,250,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-light:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(248,249,250,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-light:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(248,249,250,0.25)}.tripetto-collector-rolling .custom-control-input.checkbox-control-light:checked ~ .custom-control-label::before{border-color:#ababab;background-color:#ababab}.tripetto-collector-rolling .custom-control-input.checkbox-control-dark ~ .custom-control-label::before{border-color:#343a40}.tripetto-collector-rolling .custom-control-input.checkbox-control-dark:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(52,58,64,0.5);border-color:rgba(52,58,64,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-dark:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(52,58,64,0.5)}.tripetto-collector-rolling .custom-control-input.checkbox-control-dark:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(52,58,64,0.25)}.tripetto-collector-rolling .custom-control-input.checkbox-control-dark:checked ~ .custom-control-label::before{border-color:#343a40;background-color:#343a40}.tripetto-collector-rolling .custom-control-input.radio-control-primary ~ .custom-control-label::before{border-color:#007bff}.tripetto-collector-rolling .custom-control-input.radio-control-primary:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5);border-color:rgba(0,123,255,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-primary:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(0,123,255,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-primary:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(0,123,255,0.25)}.tripetto-collector-rolling .custom-control-input.radio-control-primary:checked ~ .custom-control-label::before{border-color:#007bff;background-color:#007bff}.tripetto-collector-rolling .custom-control-input.radio-control-secondary ~ .custom-control-label::before{border-color:#6c757d}.tripetto-collector-rolling .custom-control-input.radio-control-secondary:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(108,117,125,0.5);border-color:rgba(108,117,125,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-secondary:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(108,117,125,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-secondary:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(108,117,125,0.25)}.tripetto-collector-rolling .custom-control-input.radio-control-secondary:checked ~ .custom-control-label::before{border-color:#6c757d;background-color:#6c757d}.tripetto-collector-rolling .custom-control-input.radio-control-success ~ .custom-control-label::before{border-color:#28a745}.tripetto-collector-rolling .custom-control-input.radio-control-success:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(40,167,69,0.5);border-color:rgba(40,167,69,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-success:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(40,167,69,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-success:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(40,167,69,0.25)}.tripetto-collector-rolling .custom-control-input.radio-control-success:checked ~ .custom-control-label::before{border-color:#28a745;background-color:#28a745}.tripetto-collector-rolling .custom-control-input.radio-control-danger ~ .custom-control-label::before{border-color:#dc3545}.tripetto-collector-rolling .custom-control-input.radio-control-danger:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(220,53,69,0.5);border-color:rgba(220,53,69,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-danger:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(220,53,69,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-danger:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(220,53,69,0.25)}.tripetto-collector-rolling .custom-control-input.radio-control-danger:checked ~ .custom-control-label::before{border-color:#dc3545;background-color:#dc3545}.tripetto-collector-rolling .custom-control-input.radio-control-warning ~ .custom-control-label::before{border-color:#ffc107}.tripetto-collector-rolling .custom-control-input.radio-control-warning:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(255,193,7,0.5);border-color:rgba(255,193,7,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-warning:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(255,193,7,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-warning:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(255,193,7,0.25)}.tripetto-collector-rolling .custom-control-input.radio-control-warning:checked ~ .custom-control-label::before{border-color:#ffc107;background-color:#ffc107}.tripetto-collector-rolling .custom-control-input.radio-control-info ~ .custom-control-label::before{border-color:#17a2b8}.tripetto-collector-rolling .custom-control-input.radio-control-info:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(23,162,184,0.5);border-color:rgba(23,162,184,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-info:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(23,162,184,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-info:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(23,162,184,0.25)}.tripetto-collector-rolling .custom-control-input.radio-control-info:checked ~ .custom-control-label::before{border-color:#17a2b8;background-color:#17a2b8}.tripetto-collector-rolling .custom-control-input.radio-control-light ~ .custom-control-label::before{border-color:#f8f9fa}.tripetto-collector-rolling .custom-control-input.radio-control-light:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(248,249,250,0.5);border-color:rgba(248,249,250,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-light:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(248,249,250,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-light:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(248,249,250,0.25)}.tripetto-collector-rolling .custom-control-input.radio-control-light:checked ~ .custom-control-label::before{border-color:#ababab;background-color:#ababab}.tripetto-collector-rolling .custom-control-input.radio-control-dark ~ .custom-control-label::before{border-color:#343a40}.tripetto-collector-rolling .custom-control-input.radio-control-dark:not(:disabled):active ~ .custom-control-label::before{background-color:rgba(52,58,64,0.5);border-color:rgba(52,58,64,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-dark:focus:not(:checked) ~ .custom-control-label::before{border-color:rgba(52,58,64,0.5)}.tripetto-collector-rolling .custom-control-input.radio-control-dark:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(52,58,64,0.25)}.tripetto-collector-rolling .custom-control-input.radio-control-dark:checked ~ .custom-control-label::before{border-color:#343a40;background-color:#343a40}@media (min-width: 576px){.tripetto-collector-rolling{font-size:1rem}.tripetto-collector-rolling .btn:not(.btn-normal){padding:0.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0.3rem}.tripetto-collector-rolling .form-control,.tripetto-collector-rolling .custom-select{height:calc(1.5em + 1rem + 2px);padding:0.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0.3rem}}.tripetto-collector-rolling>div:first-child{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;overflow-x:hidden;overflow-y:hidden;z-index:1;-webkit-overflow-scrolling:touch;scroll-behavior:smooth}.tripetto-collector-rolling>div:first-child.loading>div{visibility:hidden;opacity:0}.tripetto-collector-rolling>div:first-child.navigation{bottom:80px}.tripetto-collector-rolling>div:first-child.scrollbar{overflow-y:auto}.tripetto-collector-rolling>div:first-child>div.container{padding-left:32px;padding-right:32px;transition:opacity 0.3s ease-out}.tripetto-collector-rolling>div:first-child>div.container>div.row{position:relative;opacity:0.2;pointer-events:none;transition:opacity 0.3s}.tripetto-collector-rolling>div:first-child>div.container>div.row>div.col>div{padding-top:48px}.tripetto-collector-rolling>div:first-child>div.container>div.row>div.col>div.static{padding-bottom:32px}.tripetto-collector-rolling>div:first-child>div.container>div.row>div.col>div.static>div{padding-top:15px;opacity:0;transform:translateY(30px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}.tripetto-collector-rolling>div:first-child>div.container>div.row>div.col>div.static>div.active{opacity:1;transform:none}.tripetto-collector-rolling>div:first-child>div.container>div.row>div.activator{position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:auto;cursor:default}.tripetto-collector-rolling>div:first-child>div.container>div.row>div.activator>div.back{position:absolute;left:13px;top:0;height:48px;padding-top:16px;transform:translateY(20px);opacity:0;transition:opacity 0.3s ease-out 0.2s, transform 0.3s ease-out 0.2s;pointer-events:none;cursor:pointer;font-size:0.8rem}.tripetto-collector-rolling>div:first-child>div.container>div.row>div.activator>div.back>svg{width:16px;height:16px;position:relative;top:-2px;margin-right:4px}.tripetto-collector-rolling>div:first-child>div.container>div.row>div.activator>div.edit{position:absolute;top:3px;right:-17px;width:42px;height:42px;background-color:#fff;box-shadow:0px 0px 6px 0px rgba(0,0,0,0.25);border-top-left-radius:4px;border-bottom-left-radius:4px;opacity:0;pointer-events:none;transition:transform 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;transform:translateX(48px);cursor:pointer}.tripetto-collector-rolling>div:first-child>div.container>div.row>div.activator>div.edit>svg{position:absolute;left:11px;top:10px;width:20px;height:20px;opacity:0.4;transition:opacity 0.3s}.tripetto-collector-rolling>div:first-child>div.container>div.row>div.activator>div.edit:hover>svg{opacity:1}.tripetto-collector-rolling>div:first-child>div.container>div.row h2{font-size:1.5rem}@media (min-width: 576px){.tripetto-collector-rolling>div:first-child>div.container>div.row h2{font-size:2rem}}.tripetto-collector-rolling>div:first-child>div.container>div.row h2>span.numerator{font-size:14px;font-weight:normal;display:inline-block;width:32px;margin-left:-32px;text-align:center}.tripetto-collector-rolling>div:first-child>div.container>div.row h3{font-size:1.25rem}@media (min-width: 576px){.tripetto-collector-rolling>div:first-child>div.container>div.row h3{font-size:1.75rem}}.tripetto-collector-rolling>div:first-child>div.container>div.row .text-faded{opacity:0.8}.tripetto-collector-rolling>div:first-child>div.container>div.row .payoff a{text-decoration:none}.tripetto-collector-rolling>div:first-child>div.container>div.row .payoff a:hover{text-decoration:underline}.tripetto-collector-rolling>div:first-child>div.container>div.row span.required{color:#dc3545;margin-left:6px}.tripetto-collector-rolling>div:first-child>div.container>div.row span.required::after{content:"*"}.tripetto-collector-rolling>div:first-child>div.container>div.row .form-group-footer{display:block}.tripetto-collector-rolling>div:first-child>div.container>div.row .form-group-footer>small{position:relative;top:-12px}.tripetto-collector-rolling>div:first-child>div.container>div.row.active{opacity:1;pointer-events:auto}.tripetto-collector-rolling>div:first-child>div.container>div.row.active .form-group-footer{opacity:1;transform:none}.tripetto-collector-rolling>div:first-child>div.container>div.row.active>div.activator{pointer-events:none}.tripetto-collector-rolling>div:first-child>div.container>div.row.active>div.activator>div.back{opacity:0.7;transform:translateY(0);pointer-events:auto}.tripetto-collector-rolling>div:first-child>div.container>div.row.active>div.activator>div.back:hover{opacity:1}.tripetto-collector-rolling>div:first-child>div.container>div.row.active>div.activator>div.edit{opacity:1;transform:translateX(0);pointer-events:auto}.tripetto-collector-rolling>div:first-child>div.container>div.row.complete>div:first-child{border-top:1px solid rgba(0,0,0,0.08);padding-top:15px;padding-bottom:15px;opacity:0;transform:translateY(100px);transition:opacity 0.2s ease-out, transform 0.2s ease-out}.tripetto-collector-rolling>div:first-child>div.container>div.row.complete.active>div:first-child{opacity:1;transform:none}.tripetto-collector-rolling>div:first-child>div.container>div.row.complete>div.activator{top:-46px}.tripetto-collector-rolling>div.failed{position:absolute;left:0;right:0;top:32px;z-index:2;text-align:center;pointer-events:none;opacity:0;transform:translateY(-100px);transition:opacity 0.3s ease-out, transform 0.3s ease-out}.tripetto-collector-rolling>div.failed>div{display:inline-block;box-shadow:0px 0px 10px 0px rgba(0,0,0,0.25);cursor:pointer}.tripetto-collector-rolling>div.failed.show{pointer-events:auto;opacity:1;transform:translateY(0)}.tripetto-collector-rolling>nav{position:absolute;left:0;right:0;bottom:0;height:80px;background-color:#f8f9fa;color:#212529;z-index:2;cursor:default;font-size:12px}.tripetto-collector-rolling>nav .row{height:80px}.tripetto-collector-rolling>nav .progress-text{font-weight:500}.tripetto-collector-rolling>nav .progress{height:8px;margin-top:8px;margin-bottom:8px}.tripetto-collector-rolling>nav .payoff{font-size:11px}.tripetto-collector-rolling>nav .payoff a{text-decoration:none}.tripetto-collector-rolling>nav .payoff a:hover{text-decoration:underline}.tripetto-collector-rolling>nav .btn svg{width:16px;height:16px}@media (min-width: 576px){.tripetto-collector-rolling>nav .btn svg{width:20px;height:20px}}.tripetto-collector-rolling .message{padding-top:32px;padding-bottom:32px}.tripetto-collector-rolling .message:not(.active){height:100%}.tripetto-collector-rolling .message h2{font-size:1.75rem}@media (min-width: 576px){.tripetto-collector-rolling .message h2{font-size:2rem}}.tripetto-collector-rolling .message h3{font-size:1.25rem;font-weight:400}@media (min-width: 576px){.tripetto-collector-rolling .message h3{font-size:1.5rem}}.tripetto-collector-rolling .message h4{font-size:1.05rem;font-weight:700}.tripetto-collector-rolling .message .text-faded{opacity:0.8}.tripetto-collector-rolling .message .text-bold{font-weight:500}.tripetto-collector-rolling .message a.link{font-size:12px;display:inline-block;margin-top:16px;text-decoration:none}.tripetto-collector-rolling .message a.link:hover{text-decoration:underline}.tripetto-collector-rolling section.pause-dialog{opacity:0;pointer-events:none;transition:opacity 0.15s linear;z-index:1040}.tripetto-collector-rolling section.pause-dialog .pause-dialog-backdrop{position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,0.3);z-index:1041;display:none}.tripetto-collector-rolling section.pause-dialog .pause-dialog-window{position:absolute;left:0;right:0;top:0;bottom:0;z-index:1072;cursor:default;display:none}.tripetto-collector-rolling section.pause-dialog .pause-dialog-window h2{font-size:32px}.tripetto-collector-rolling section.pause-dialog .pause-dialog-window h3{font-size:20px;font-weight:400}.tripetto-collector-rolling section.pause-dialog .pause-dialog-window input{margin-top:8px;margin-bottom:16px}.tripetto-collector-rolling section.pause-dialog .pause-dialog-window button.disabled{pointer-events:none}.tripetto-collector-rolling section.pause-dialog .pause-dialog-window span.link{font-size:12px;color:#007bff;text-decoration:none;display:inline-block;margin-top:16px;cursor:pointer}.tripetto-collector-rolling section.pause-dialog .pause-dialog-window span.link:hover{color:#0056b3;text-decoration:underline}.tripetto-collector-rolling section.pause-dialog-visible{pointer-events:auto;opacity:1}.tripetto-collector-rolling section.pause-dialog-visible .pause-dialog-backdrop{display:block}.tripetto-collector-rolling section.pause-dialog-visible .pause-dialog-window{display:block}\n', ""]) }, function(t, e, o) { "use strict";
        (function(t) { Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(2),
                l = o(6),
                n = o(1),
                i = o(122);
            e.run = function(e) { return r.__awaiter(this, void 0, void 0, (function() { var o, c, a, s, p, u, d, f; return r.__generator(this, (function(r) { switch (r.label) {
                            case 0:
                                return o = e.ref || n.createRef(), c = { clusters: [], editor: { name: "", version: "" } }, [4, t.all([e.definition instanceof t ? e.definition : t.resolve(e.definition), e.snapshot instanceof t ? e.snapshot : t.resolve(e.snapshot), e.style instanceof t ? e.style : t.resolve(e.style), e.overrides instanceof t ? e.overrides : t.resolve(e.overrides)])];
                            case 1:
                                return a = r.sent(), s = a[0], p = a[1], u = a[2], d = a[3], i.render(n.createElement(l.Collector, { definition: s || c, snapshot: p, style: u, overrides: d, view: e.view, usage: e.usage, autoFocus: e.autoFocus, ref: o, onReady: e.onReady, onChange: e.onChange, onFinish: e.onFinish, onPause: e.onPause, onPaused: e.onPaused, onEditRequest: e.onEditRequest, onAttachment: e.onAttachment }), e.element), (e.autoResize || "preview" === e.usage) && (f = function() { o.current && o.current.resize() }, window.addEventListener("resize", (function() { return f() })), window.addEventListener("orientationchange", (function() { return f() }))), [2, {get collector() { if (!o.current) throw new Error("The ref to the collector component is not available yet."); return o.current }, get definition() { return o.current && o.current.definition || s || c }, set definition(t) { o.current && o.current.reload(t) }, get style() { if (!o.current) throw new Error("The ref to the collector component is not available yet."); return o.current.style }, set style(t) { o.current && (o.current.style = t || {}) }, get overrides() { if (!o.current) throw new Error("The ref to the collector component is not available yet."); return o.current.overrides }, set overrides(t) { o.current && (o.current.overrides = t || {}) }, get view() { return o.current ? o.current.view : e.view || "normal" }, set view(t) { o.current && (o.current.view = t) }, get height() { return o.current && o.current.height || 0 }, requestPreview: function(t) { o.current && o.current.requestPreview(t) }, requestPause: function() { o.current && o.current.requestPause() }, pause: function() { o.current && o.current.pause() }, resize: function() { o.current && o.current.resize() }, destroy: function() { e.element && i.unmountComponentAtNode(e.element) } }] } })) })) } }).call(this, o(7)) }, function(t, e, o) { "use strict";! function t() { if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) { 0; try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t) } catch (t) { console.error(t) } } }(), t.exports = o(123) }, function(t, e, o) { "use strict"; var r = o(1),
            l = o(10),
            n = o(124);

        function i(t) { for (var e = t.message, o = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) o += "&args[]=" + encodeURIComponent(arguments[r]); return t.message = "Minified React error #" + e + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", t } if (!r) throw i(Error(227)); var c = null,
            a = {};

        function s() { if (c)
                for (var t in a) { var e = a[t],
                        o = c.indexOf(t); if (!(-1 < o)) throw i(Error(96), t); if (!u[o]) { if (!e.extractEvents) throw i(Error(97), t); for (var r in u[o] = e, o = e.eventTypes) { var l = void 0,
                                n = o[r],
                                s = e,
                                f = r; if (d.hasOwnProperty(f)) throw i(Error(99), f);
                            d[f] = n; var g = n.phasedRegistrationNames; if (g) { for (l in g) g.hasOwnProperty(l) && p(g[l], s, f);
                                l = !0 } else n.registrationName ? (p(n.registrationName, s, f), l = !0) : l = !1; if (!l) throw i(Error(98), r, t) } } } }

        function p(t, e, o) { if (f[t]) throw i(Error(100), t);
            f[t] = e, g[t] = e.eventTypes[o].dependencies } var u = [],
            d = {},
            f = {},
            g = {};

        function m(t, e, o, r, l, n, i, c, a) { var s = Array.prototype.slice.call(arguments, 3); try { e.apply(o, s) } catch (t) { this.onError(t) } } var h = !1,
            b = null,
            v = !1,
            y = null,
            x = { onError: function(t) { h = !0, b = t } };

        function w(t, e, o, r, l, n, i, c, a) { h = !1, b = null, m.apply(x, arguments) } var _ = null,
            k = null,
            E = null;

        function S(t, e, o) { var r = t.type || "unknown-event";
            t.currentTarget = E(o),
                function(t, e, o, r, l, n, c, a, s) { if (w.apply(this, arguments), h) { if (!h) throw i(Error(198)); var p = b;
                        h = !1, b = null, v || (v = !0, y = p) } }(r, e, void 0, t), t.currentTarget = null }

        function T(t, e) { if (null == e) throw i(Error(30)); return null == t ? e : Array.isArray(t) ? Array.isArray(e) ? (t.push.apply(t, e), t) : (t.push(e), t) : Array.isArray(e) ? [t].concat(e) : [t, e] }

        function C(t, e, o) { Array.isArray(t) ? t.forEach(e, o) : t && e.call(o, t) } var O = null;

        function N(t) { if (t) { var e = t._dispatchListeners,
                    o = t._dispatchInstances; if (Array.isArray(e))
                    for (var r = 0; r < e.length && !t.isPropagationStopped(); r++) S(t, e[r], o[r]);
                else e && S(t, e, o);
                t._dispatchListeners = null, t._dispatchInstances = null, t.isPersistent() || t.constructor.release(t) } }

        function P(t) { if (null !== t && (O = T(O, t)), t = O, O = null, t) { if (C(t, N), O) throw i(Error(95)); if (v) throw t = y, v = !1, y = null, t } } var j = { injectEventPluginOrder: function(t) { if (c) throw i(Error(101));
                c = Array.prototype.slice.call(t), s() }, injectEventPluginsByName: function(t) { var e, o = !1; for (e in t)
                    if (t.hasOwnProperty(e)) { var r = t[e]; if (!a.hasOwnProperty(e) || a[e] !== r) { if (a[e]) throw i(Error(102), e);
                            a[e] = r, o = !0 } }
                o && s() } };

        function A(t, e) { var o = t.stateNode; if (!o) return null; var r = _(o); if (!r) return null;
            o = r[e];
            t: switch (e) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                    (r = !r.disabled) || (r = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), t = !r; break t;
                default:
                    t = !1 }
            if (t) return null; if (o && "function" != typeof o) throw i(Error(231), e, typeof o); return o } var D = Math.random().toString(36).slice(2),
            I = "__reactInternalInstance$" + D,
            M = "__reactEventHandlers$" + D;

        function R(t) { if (t[I]) return t[I]; for (; !t[I];) { if (!t.parentNode) return null;
                t = t.parentNode } return 5 === (t = t[I]).tag || 6 === t.tag ? t : null }

        function L(t) { return !(t = t[I]) || 5 !== t.tag && 6 !== t.tag ? null : t }

        function z(t) { if (5 === t.tag || 6 === t.tag) return t.stateNode; throw i(Error(33)) }

        function F(t) { return t[M] || null }

        function B(t) { do { t = t.return } while (t && 5 !== t.tag); return t || null }

        function U(t, e, o) {
            (e = A(t, o.dispatchConfig.phasedRegistrationNames[e])) && (o._dispatchListeners = T(o._dispatchListeners, e), o._dispatchInstances = T(o._dispatchInstances, t)) }

        function q(t) { if (t && t.dispatchConfig.phasedRegistrationNames) { for (var e = t._targetInst, o = []; e;) o.push(e), e = B(e); for (e = o.length; 0 < e--;) U(o[e], "captured", t); for (e = 0; e < o.length; e++) U(o[e], "bubbled", t) } }

        function H(t, e, o) { t && o && o.dispatchConfig.registrationName && (e = A(t, o.dispatchConfig.registrationName)) && (o._dispatchListeners = T(o._dispatchListeners, e), o._dispatchInstances = T(o._dispatchInstances, t)) }

        function W(t) { t && t.dispatchConfig.registrationName && H(t._targetInst, null, t) }

        function V(t) { C(t, q) } var Y = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement);

        function K(t, e) { var o = {}; return o[t.toLowerCase()] = e.toLowerCase(), o["Webkit" + t] = "webkit" + e, o["Moz" + t] = "moz" + e, o } var $ = { animationend: K("Animation", "AnimationEnd"), animationiteration: K("Animation", "AnimationIteration"), animationstart: K("Animation", "AnimationStart"), transitionend: K("Transition", "TransitionEnd") },
            Q = {},
            X = {};

        function G(t) { if (Q[t]) return Q[t]; if (!$[t]) return t; var e, o = $[t]; for (e in o)
                if (o.hasOwnProperty(e) && e in X) return Q[t] = o[e];
            return t }
        Y && (X = document.createElement("div").style, "AnimationEvent" in window || (delete $.animationend.animation, delete $.animationiteration.animation, delete $.animationstart.animation), "TransitionEvent" in window || delete $.transitionend.transition); var Z = G("animationend"),
            J = G("animationiteration"),
            tt = G("animationstart"),
            et = G("transitionend"),
            ot = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            rt = null,
            lt = null,
            nt = null;

        function it() { if (nt) return nt; var t, e, o = lt,
                r = o.length,
                l = "value" in rt ? rt.value : rt.textContent,
                n = l.length; for (t = 0; t < r && o[t] === l[t]; t++); var i = r - t; for (e = 1; e <= i && o[r - e] === l[n - e]; e++); return nt = l.slice(t, 1 < e ? 1 - e : void 0) }

        function ct() { return !0 }

        function at() { return !1 }

        function st(t, e, o, r) { for (var l in this.dispatchConfig = t, this._targetInst = e, this.nativeEvent = o, t = this.constructor.Interface) t.hasOwnProperty(l) && ((e = t[l]) ? this[l] = e(o) : "target" === l ? this.target = r : this[l] = o[l]); return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? ct : at, this.isPropagationStopped = at, this }

        function pt(t, e, o, r) { if (this.eventPool.length) { var l = this.eventPool.pop(); return this.call(l, t, e, o, r), l } return new this(t, e, o, r) }

        function ut(t) { if (!(t instanceof this)) throw i(Error(279));
            t.destructor(), 10 > this.eventPool.length && this.eventPool.push(t) }

        function dt(t) { t.eventPool = [], t.getPooled = pt, t.release = ut }
        l(st.prototype, { preventDefault: function() { this.defaultPrevented = !0; var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = ct) }, stopPropagation: function() { var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = ct) }, persist: function() { this.isPersistent = ct }, isPersistent: at, destructor: function() { var t, e = this.constructor.Interface; for (t in e) this[t] = null;
                this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = at, this._dispatchInstances = this._dispatchListeners = null } }), st.Interface = { type: null, target: null, currentTarget: function() { return null }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function(t) { return t.timeStamp || Date.now() }, defaultPrevented: null, isTrusted: null }, st.extend = function(t) {
            function e() {}

            function o() { return r.apply(this, arguments) } var r = this;
            e.prototype = r.prototype; var n = new e; return l(n, o.prototype), o.prototype = n, o.prototype.constructor = o, o.Interface = l({}, r.Interface, t), o.extend = r.extend, dt(o), o }, dt(st); var ft = st.extend({ data: null }),
            gt = st.extend({ data: null }),
            mt = [9, 13, 27, 32],
            ht = Y && "CompositionEvent" in window,
            bt = null;
        Y && "documentMode" in document && (bt = document.documentMode); var vt = Y && "TextEvent" in window && !bt,
            yt = Y && (!ht || bt && 8 < bt && 11 >= bt),
            xt = String.fromCharCode(32),
            wt = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } },
            _t = !1;

        function kt(t, e) { switch (t) {
                case "keyup":
                    return -1 !== mt.indexOf(e.keyCode);
                case "keydown":
                    return 229 !== e.keyCode;
                case "keypress":
                case "mousedown":
                case "blur":
                    return !0;
                default:
                    return !1 } }

        function Et(t) { return "object" == typeof(t = t.detail) && "data" in t ? t.data : null } var St = !1; var Tt = { eventTypes: wt, extractEvents: function(t, e, o, r) { var l = void 0,
                        n = void 0; if (ht) t: { switch (t) {
                            case "compositionstart":
                                l = wt.compositionStart; break t;
                            case "compositionend":
                                l = wt.compositionEnd; break t;
                            case "compositionupdate":
                                l = wt.compositionUpdate; break t }
                        l = void 0 }
                    else St ? kt(t, o) && (l = wt.compositionEnd) : "keydown" === t && 229 === o.keyCode && (l = wt.compositionStart); return l ? (yt && "ko" !== o.locale && (St || l !== wt.compositionStart ? l === wt.compositionEnd && St && (n = it()) : (lt = "value" in (rt = r) ? rt.value : rt.textContent, St = !0)), l = ft.getPooled(l, e, o, r), n ? l.data = n : null !== (n = Et(o)) && (l.data = n), V(l), n = l) : n = null, (t = vt ? function(t, e) { switch (t) {
                            case "compositionend":
                                return Et(e);
                            case "keypress":
                                return 32 !== e.which ? null : (_t = !0, xt);
                            case "textInput":
                                return (t = e.data) === xt && _t ? null : t;
                            default:
                                return null } }(t, o) : function(t, e) { if (St) return "compositionend" === t || !ht && kt(t, e) ? (t = it(), nt = lt = rt = null, St = !1, t) : null; switch (t) {
                            case "paste":
                                return null;
                            case "keypress":
                                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) { if (e.char && 1 < e.char.length) return e.char; if (e.which) return String.fromCharCode(e.which) } return null;
                            case "compositionend":
                                return yt && "ko" !== e.locale ? null : e.data;
                            default:
                                return null } }(t, o)) ? ((e = gt.getPooled(wt.beforeInput, e, o, r)).data = t, V(e)) : e = null, null === n ? e : null === e ? n : [n, e] } },
            Ct = null,
            Ot = null,
            Nt = null;

        function Pt(t) { if (t = k(t)) { if ("function" != typeof Ct) throw i(Error(280)); var e = _(t.stateNode);
                Ct(t.stateNode, t.type, e) } }

        function jt(t) { Ot ? Nt ? Nt.push(t) : Nt = [t] : Ot = t }

        function At() { if (Ot) { var t = Ot,
                    e = Nt; if (Nt = Ot = null, Pt(t), e)
                    for (t = 0; t < e.length; t++) Pt(e[t]) } }

        function Dt(t, e) { return t(e) }

        function It(t, e, o, r) { return t(e, o, r) }

        function Mt() {} var Rt = Dt,
            Lt = !1;

        function zt() { null === Ot && null === Nt || (Mt(), At()) } var Ft = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

        function Bt(t) { var e = t && t.nodeName && t.nodeName.toLowerCase(); return "input" === e ? !!Ft[t.type] : "textarea" === e }

        function Ut(t) { return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t }

        function qt(t) { if (!Y) return !1; var e = (t = "on" + t) in document; return e || ((e = document.createElement("div")).setAttribute(t, "return;"), e = "function" == typeof e[t]), e }

        function Ht(t) { var e = t.type; return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === e || "radio" === e) }

        function Wt(t) { t._valueTracker || (t._valueTracker = function(t) { var e = Ht(t) ? "checked" : "value",
                    o = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
                    r = "" + t[e]; if (!t.hasOwnProperty(e) && void 0 !== o && "function" == typeof o.get && "function" == typeof o.set) { var l = o.get,
                        n = o.set; return Object.defineProperty(t, e, { configurable: !0, get: function() { return l.call(this) }, set: function(t) { r = "" + t, n.call(this, t) } }), Object.defineProperty(t, e, { enumerable: o.enumerable }), { getValue: function() { return r }, setValue: function(t) { r = "" + t }, stopTracking: function() { t._valueTracker = null, delete t[e] } } } }(t)) }

        function Vt(t) { if (!t) return !1; var e = t._valueTracker; if (!e) return !0; var o = e.getValue(),
                r = ""; return t && (r = Ht(t) ? t.checked ? "true" : "false" : t.value), (t = r) !== o && (e.setValue(t), !0) } var Yt = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        Yt.hasOwnProperty("ReactCurrentDispatcher") || (Yt.ReactCurrentDispatcher = { current: null }), Yt.hasOwnProperty("ReactCurrentBatchConfig") || (Yt.ReactCurrentBatchConfig = { suspense: null }); var Kt = /^(.*)[\\\/]/,
            $t = "function" == typeof Symbol && Symbol.for,
            Qt = $t ? Symbol.for("react.element") : 60103,
            Xt = $t ? Symbol.for("react.portal") : 60106,
            Gt = $t ? Symbol.for("react.fragment") : 60107,
            Zt = $t ? Symbol.for("react.strict_mode") : 60108,
            Jt = $t ? Symbol.for("react.profiler") : 60114,
            te = $t ? Symbol.for("react.provider") : 60109,
            ee = $t ? Symbol.for("react.context") : 60110,
            oe = $t ? Symbol.for("react.concurrent_mode") : 60111,
            re = $t ? Symbol.for("react.forward_ref") : 60112,
            le = $t ? Symbol.for("react.suspense") : 60113,
            ne = $t ? Symbol.for("react.suspense_list") : 60120,
            ie = $t ? Symbol.for("react.memo") : 60115,
            ce = $t ? Symbol.for("react.lazy") : 60116;
        $t && Symbol.for("react.fundamental"), $t && Symbol.for("react.responder"); var ae = "function" == typeof Symbol && Symbol.iterator;

        function se(t) { return null === t || "object" != typeof t ? null : "function" == typeof(t = ae && t[ae] || t["@@iterator"]) ? t : null }

        function pe(t) { if (null == t) return null; if ("function" == typeof t) return t.displayName || t.name || null; if ("string" == typeof t) return t; switch (t) {
                case Gt:
                    return "Fragment";
                case Xt:
                    return "Portal";
                case Jt:
                    return "Profiler";
                case Zt:
                    return "StrictMode";
                case le:
                    return "Suspense";
                case ne:
                    return "SuspenseList" } if ("object" == typeof t) switch (t.$$typeof) {
                case ee:
                    return "Context.Consumer";
                case te:
                    return "Context.Provider";
                case re:
                    var e = t.render; return e = e.displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                case ie:
                    return pe(t.type);
                case ce:
                    if (t = 1 === t._status ? t._result : null) return pe(t) }
            return null }

        function ue(t) { var e = "";
            do { t: switch (t.tag) {
                    case 3:
                    case 4:
                    case 6:
                    case 7:
                    case 10:
                    case 9:
                        var o = ""; break t;
                    default:
                        var r = t._debugOwner,
                            l = t._debugSource,
                            n = pe(t.type);
                        o = null, r && (o = pe(r.type)), r = n, n = "", l ? n = " (at " + l.fileName.replace(Kt, "") + ":" + l.lineNumber + ")" : o && (n = " (created by " + o + ")"), o = "\n    in " + (r || "Unknown") + n }
                e += o, t = t.return } while (t); return e } var de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            fe = Object.prototype.hasOwnProperty,
            ge = {},
            me = {};

        function he(t, e, o, r, l, n) { this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = o, this.propertyName = t, this.type = e, this.sanitizeURL = n } var be = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(t) { be[t] = new he(t, 0, !1, t, null, !1) })), [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
        ].forEach((function(t) { var e = t[0];
            be[e] = new he(e, 1, !1, t[1], null, !1) })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(t) { be[t] = new he(t, 2, !1, t.toLowerCase(), null, !1) })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(t) { be[t] = new he(t, 2, !1, t, null, !1) })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(t) { be[t] = new he(t, 3, !1, t.toLowerCase(), null, !1) })), ["checked", "multiple", "muted", "selected"].forEach((function(t) { be[t] = new he(t, 3, !0, t, null, !1) })), ["capture", "download"].forEach((function(t) { be[t] = new he(t, 4, !1, t, null, !1) })), ["cols", "rows", "size", "span"].forEach((function(t) { be[t] = new he(t, 6, !1, t, null, !1) })), ["rowSpan", "start"].forEach((function(t) { be[t] = new he(t, 5, !1, t.toLowerCase(), null, !1) })); var ve = /[\-:]([a-z])/g;

        function ye(t) { return t[1].toUpperCase() }

        function xe(t, e, o, r) { var l = be.hasOwnProperty(e) ? be[e] : null;
            (null !== l ? 0 === l.type : !r && (2 < e.length && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1]))) || (function(t, e, o, r) { if (null == e || function(t, e, o, r) { if (null !== o && 0 === o.type) return !1; switch (typeof e) {
                            case "function":
                            case "symbol":
                                return !0;
                            case "boolean":
                                return !r && (null !== o ? !o.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
                            default:
                                return !1 } }(t, e, o, r)) return !0; if (r) return !1; if (null !== o) switch (o.type) {
                    case 3:
                        return !e;
                    case 4:
                        return !1 === e;
                    case 5:
                        return isNaN(e);
                    case 6:
                        return isNaN(e) || 1 > e }
                return !1 }(e, o, l, r) && (o = null), r || null === l ? function(t) { return !!fe.call(me, t) || !fe.call(ge, t) && (de.test(t) ? me[t] = !0 : (ge[t] = !0, !1)) }(e) && (null === o ? t.removeAttribute(e) : t.setAttribute(e, "" + o)) : l.mustUseProperty ? t[l.propertyName] = null === o ? 3 !== l.type && "" : o : (e = l.attributeName, r = l.attributeNamespace, null === o ? t.removeAttribute(e) : (o = 3 === (l = l.type) || 4 === l && !0 === o ? "" : "" + o, r ? t.setAttributeNS(r, e, o) : t.setAttribute(e, o)))) }

        function we(t) { switch (typeof t) {
                case "boolean":
                case "number":
                case "object":
                case "string":
                case "undefined":
                    return t;
                default:
                    return "" } }

        function _e(t, e) { var o = e.checked; return l({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != o ? o : t._wrapperState.initialChecked }) }

        function ke(t, e) { var o = null == e.defaultValue ? "" : e.defaultValue,
                r = null != e.checked ? e.checked : e.defaultChecked;
            o = we(null != e.value ? e.value : o), t._wrapperState = { initialChecked: r, initialValue: o, controlled: "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value } }

        function Ee(t, e) { null != (e = e.checked) && xe(t, "checked", e, !1) }

        function Se(t, e) { Ee(t, e); var o = we(e.value),
                r = e.type; if (null != o) "number" === r ? (0 === o && "" === t.value || t.value != o) && (t.value = "" + o) : t.value !== "" + o && (t.value = "" + o);
            else if ("submit" === r || "reset" === r) return void t.removeAttribute("value");
            e.hasOwnProperty("value") ? Ce(t, e.type, o) : e.hasOwnProperty("defaultValue") && Ce(t, e.type, we(e.defaultValue)), null == e.checked && null != e.defaultChecked && (t.defaultChecked = !!e.defaultChecked) }

        function Te(t, e, o) { if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) { var r = e.type; if (!("submit" !== r && "reset" !== r || void 0 !== e.value && null !== e.value)) return;
                e = "" + t._wrapperState.initialValue, o || e === t.value || (t.value = e), t.defaultValue = e } "" !== (o = t.name) && (t.name = ""), t.defaultChecked = !t.defaultChecked, t.defaultChecked = !!t._wrapperState.initialChecked, "" !== o && (t.name = o) }

        function Ce(t, e, o) { "number" === e && t.ownerDocument.activeElement === t || (null == o ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + o && (t.defaultValue = "" + o)) } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(t) { var e = t.replace(ve, ye);
            be[e] = new he(e, 1, !1, t, null, !1) })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(t) { var e = t.replace(ve, ye);
            be[e] = new he(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1) })), ["xml:base", "xml:lang", "xml:space"].forEach((function(t) { var e = t.replace(ve, ye);
            be[e] = new he(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1) })), ["tabIndex", "crossOrigin"].forEach((function(t) { be[t] = new he(t, 1, !1, t.toLowerCase(), null, !1) })), be.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(t) { be[t] = new he(t, 1, !1, t.toLowerCase(), null, !0) })); var Oe = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };

        function Ne(t, e, o) { return (t = st.getPooled(Oe.change, t, e, o)).type = "change", jt(o), V(t), t } var Pe = null,
            je = null;

        function Ae(t) { P(t) }

        function De(t) { if (Vt(z(t))) return t }

        function Ie(t, e) { if ("change" === t) return e } var Me = !1;

        function Re() { Pe && (Pe.detachEvent("onpropertychange", Le), je = Pe = null) }

        function Le(t) { if ("value" === t.propertyName && De(je))
                if (t = Ne(je, t, Ut(t)), Lt) P(t);
                else { Lt = !0; try { Dt(Ae, t) } finally { Lt = !1, zt() } } }

        function ze(t, e, o) { "focus" === t ? (Re(), je = o, (Pe = e).attachEvent("onpropertychange", Le)) : "blur" === t && Re() }

        function Fe(t) { if ("selectionchange" === t || "keyup" === t || "keydown" === t) return De(je) }

        function Be(t, e) { if ("click" === t) return De(e) }

        function Ue(t, e) { if ("input" === t || "change" === t) return De(e) }
        Y && (Me = qt("input") && (!document.documentMode || 9 < document.documentMode)); var qe = { eventTypes: Oe, _isInputEventSupported: Me, extractEvents: function(t, e, o, r) { var l = e ? z(e) : window,
                        n = void 0,
                        i = void 0,
                        c = l.nodeName && l.nodeName.toLowerCase(); if ("select" === c || "input" === c && "file" === l.type ? n = Ie : Bt(l) ? Me ? n = Ue : (n = Fe, i = ze) : (c = l.nodeName) && "input" === c.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (n = Be), n && (n = n(t, e))) return Ne(n, o, r);
                    i && i(t, l, e), "blur" === t && (t = l._wrapperState) && t.controlled && "number" === l.type && Ce(l, "number", l.value) } },
            He = st.extend({ view: null, detail: null }),
            We = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

        function Ve(t) { var e = this.nativeEvent; return e.getModifierState ? e.getModifierState(t) : !!(t = We[t]) && !!e[t] }

        function Ye() { return Ve } var Ke = 0,
            $e = 0,
            Qe = !1,
            Xe = !1,
            Ge = He.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: Ye, button: null, buttons: null, relatedTarget: function(t) { return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement) }, movementX: function(t) { if ("movementX" in t) return t.movementX; var e = Ke; return Ke = t.screenX, Qe ? "mousemove" === t.type ? t.screenX - e : 0 : (Qe = !0, 0) }, movementY: function(t) { if ("movementY" in t) return t.movementY; var e = $e; return $e = t.screenY, Xe ? "mousemove" === t.type ? t.screenY - e : 0 : (Xe = !0, 0) } }),
            Ze = Ge.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }),
            Je = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: { registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"] } },
            to = { eventTypes: Je, extractEvents: function(t, e, o, r) { var l = "mouseover" === t || "pointerover" === t,
                        n = "mouseout" === t || "pointerout" === t; if (l && (o.relatedTarget || o.fromElement) || !n && !l) return null; if (l = r.window === r ? r : (l = r.ownerDocument) ? l.defaultView || l.parentWindow : window, n ? (n = e, e = (e = o.relatedTarget || o.toElement) ? R(e) : null) : n = null, n === e) return null; var i = void 0,
                        c = void 0,
                        a = void 0,
                        s = void 0; "mouseout" === t || "mouseover" === t ? (i = Ge, c = Je.mouseLeave, a = Je.mouseEnter, s = "mouse") : "pointerout" !== t && "pointerover" !== t || (i = Ze, c = Je.pointerLeave, a = Je.pointerEnter, s = "pointer"); var p = null == n ? l : z(n); if (l = null == e ? l : z(e), (t = i.getPooled(c, n, o, r)).type = s + "leave", t.target = p, t.relatedTarget = l, (o = i.getPooled(a, e, o, r)).type = s + "enter", o.target = l, o.relatedTarget = p, r = e, n && r) t: { for (l = r, s = 0, i = e = n; i; i = B(i)) s++; for (i = 0, a = l; a; a = B(a)) i++; for (; 0 < s - i;) e = B(e), s--; for (; 0 < i - s;) l = B(l), i--; for (; s--;) { if (e === l || e === l.alternate) break t;
                            e = B(e), l = B(l) }
                        e = null }
                    else e = null; for (l = e, e = []; n && n !== l && (null === (s = n.alternate) || s !== l);) e.push(n), n = B(n); for (n = []; r && r !== l && (null === (s = r.alternate) || s !== l);) n.push(r), r = B(r); for (r = 0; r < e.length; r++) H(e[r], "bubbled", t); for (r = n.length; 0 < r--;) H(n[r], "captured", o); return [t, o] } };

        function eo(t, e) { return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e } var oo = Object.prototype.hasOwnProperty;

        function ro(t, e) { if (eo(t, e)) return !0; if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1; var o = Object.keys(t),
                r = Object.keys(e); if (o.length !== r.length) return !1; for (r = 0; r < o.length; r++)
                if (!oo.call(e, o[r]) || !eo(t[o[r]], e[o[r]])) return !1;
            return !0 }

        function lo(t, e) { return { responder: t, props: e } }

        function no(t) { var e = t; if (t.alternate)
                for (; e.return;) e = e.return;
            else { if (0 != (2 & e.effectTag)) return 1; for (; e.return;)
                    if (0 != (2 & (e = e.return).effectTag)) return 1 } return 3 === e.tag ? 2 : 3 }

        function io(t) { if (2 !== no(t)) throw i(Error(188)) }

        function co(t) { if (!(t = function(t) { var e = t.alternate; if (!e) { if (3 === (e = no(t))) throw i(Error(188)); return 1 === e ? null : t } for (var o = t, r = e;;) { var l = o.return; if (null === l) break; var n = l.alternate; if (null === n) { if (null !== (r = l.return)) { o = r; continue } break } if (l.child === n.child) { for (n = l.child; n;) { if (n === o) return io(l), t; if (n === r) return io(l), e;
                                n = n.sibling } throw i(Error(188)) } if (o.return !== r.return) o = l, r = n;
                        else { for (var c = !1, a = l.child; a;) { if (a === o) { c = !0, o = l, r = n; break } if (a === r) { c = !0, r = l, o = n; break }
                                a = a.sibling } if (!c) { for (a = n.child; a;) { if (a === o) { c = !0, o = n, r = l; break } if (a === r) { c = !0, r = n, o = l; break }
                                    a = a.sibling } if (!c) throw i(Error(189)) } } if (o.alternate !== r) throw i(Error(190)) } if (3 !== o.tag) throw i(Error(188)); return o.stateNode.current === o ? t : e }(t))) return null; for (var e = t;;) { if (5 === e.tag || 6 === e.tag) return e; if (e.child) e.child.return = e, e = e.child;
                else { if (e === t) break; for (; !e.sibling;) { if (!e.return || e.return === t) return null;
                        e = e.return }
                    e.sibling.return = e.return, e = e.sibling } } return null }
        new Map, new Map, new Set, new Map; var ao = st.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
            so = st.extend({ clipboardData: function(t) { return "clipboardData" in t ? t.clipboardData : window.clipboardData } }),
            po = He.extend({ relatedTarget: null });

        function uo(t) { var e = t.keyCode; return "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : t = e, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0 } for (var fo = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, go = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, mo = He.extend({ key: function(t) { if (t.key) { var e = fo[t.key] || t.key; if ("Unidentified" !== e) return e } return "keypress" === t.type ? 13 === (t = uo(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? go[t.keyCode] || "Unidentified" : "" }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: Ye, charCode: function(t) { return "keypress" === t.type ? uo(t) : 0 }, keyCode: function(t) { return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0 }, which: function(t) { return "keypress" === t.type ? uo(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0 } }), ho = Ge.extend({ dataTransfer: null }), bo = He.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: Ye }), vo = st.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }), yo = Ge.extend({ deltaX: function(t) { return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0 }, deltaY: function(t) { return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0 }, deltaZ: null, deltaMode: null }), xo = [
                ["blur", "blur", 0],
                ["cancel", "cancel", 0],
                ["click", "click", 0],
                ["close", "close", 0],
                ["contextmenu", "contextMenu", 0],
                ["copy", "copy", 0],
                ["cut", "cut", 0],
                ["auxclick", "auxClick", 0],
                ["dblclick", "doubleClick", 0],
                ["dragend", "dragEnd", 0],
                ["dragstart", "dragStart", 0],
                ["drop", "drop", 0],
                ["focus", "focus", 0],
                ["input", "input", 0],
                ["invalid", "invalid", 0],
                ["keydown", "keyDown", 0],
                ["keypress", "keyPress", 0],
                ["keyup", "keyUp", 0],
                ["mousedown", "mouseDown", 0],
                ["mouseup", "mouseUp", 0],
                ["paste", "paste", 0],
                ["pause", "pause", 0],
                ["play", "play", 0],
                ["pointercancel", "pointerCancel", 0],
                ["pointerdown", "pointerDown", 0],
                ["pointerup", "pointerUp", 0],
                ["ratechange", "rateChange", 0],
                ["reset", "reset", 0],
                ["seeked", "seeked", 0],
                ["submit", "submit", 0],
                ["touchcancel", "touchCancel", 0],
                ["touchend", "touchEnd", 0],
                ["touchstart", "touchStart", 0],
                ["volumechange", "volumeChange", 0],
                ["drag", "drag", 1],
                ["dragenter", "dragEnter", 1],
                ["dragexit", "dragExit", 1],
                ["dragleave", "dragLeave", 1],
                ["dragover", "dragOver", 1],
                ["mousemove", "mouseMove", 1],
                ["mouseout", "mouseOut", 1],
                ["mouseover", "mouseOver", 1],
                ["pointermove", "pointerMove", 1],
                ["pointerout", "pointerOut", 1],
                ["pointerover", "pointerOver", 1],
                ["scroll", "scroll", 1],
                ["toggle", "toggle", 1],
                ["touchmove", "touchMove", 1],
                ["wheel", "wheel", 1],
                ["abort", "abort", 2],
                [Z, "animationEnd", 2],
                [J, "animationIteration", 2],
                [tt, "animationStart", 2],
                ["canplay", "canPlay", 2],
                ["canplaythrough", "canPlayThrough", 2],
                ["durationchange", "durationChange", 2],
                ["emptied", "emptied", 2],
                ["encrypted", "encrypted", 2],
                ["ended", "ended", 2],
                ["error", "error", 2],
                ["gotpointercapture", "gotPointerCapture", 2],
                ["load", "load", 2],
                ["loadeddata", "loadedData", 2],
                ["loadedmetadata", "loadedMetadata", 2],
                ["loadstart", "loadStart", 2],
                ["lostpointercapture", "lostPointerCapture", 2],
                ["playing", "playing", 2],
                ["progress", "progress", 2],
                ["seeking", "seeking", 2],
                ["stalled", "stalled", 2],
                ["suspend", "suspend", 2],
                ["timeupdate", "timeUpdate", 2],
                [et, "transitionEnd", 2],
                ["waiting", "waiting", 2]
            ], wo = {}, _o = {}, ko = 0; ko < xo.length; ko++) { var Eo = xo[ko],
                So = Eo[0],
                To = Eo[1],
                Co = Eo[2],
                Oo = "on" + (To[0].toUpperCase() + To.slice(1)),
                No = { phasedRegistrationNames: { bubbled: Oo, captured: Oo + "Capture" }, dependencies: [So], eventPriority: Co };
            wo[To] = No, _o[So] = No } var Po = { eventTypes: wo, getEventPriority: function(t) { return void 0 !== (t = _o[t]) ? t.eventPriority : 2 }, extractEvents: function(t, e, o, r) { var l = _o[t]; if (!l) return null; switch (t) {
                        case "keypress":
                            if (0 === uo(o)) return null;
                        case "keydown":
                        case "keyup":
                            t = mo; break;
                        case "blur":
                        case "focus":
                            t = po; break;
                        case "click":
                            if (2 === o.button) return null;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            t = Ge; break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            t = ho; break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            t = bo; break;
                        case Z:
                        case J:
                        case tt:
                            t = ao; break;
                        case et:
                            t = vo; break;
                        case "scroll":
                            t = He; break;
                        case "wheel":
                            t = yo; break;
                        case "copy":
                        case "cut":
                        case "paste":
                            t = so; break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            t = Ze; break;
                        default:
                            t = st } return V(e = t.getPooled(l, e, o, r)), e } },
            jo = Po.getEventPriority,
            Ao = [];

        function Do(t) { var e = t.targetInst,
                o = e;
            do { if (!o) { t.ancestors.push(o); break } var r; for (r = o; r.return;) r = r.return; if (!(r = 3 !== r.tag ? null : r.stateNode.containerInfo)) break;
                t.ancestors.push(o), o = R(r) } while (o); for (o = 0; o < t.ancestors.length; o++) { e = t.ancestors[o]; var l = Ut(t.nativeEvent);
                r = t.topLevelType; for (var n = t.nativeEvent, i = null, c = 0; c < u.length; c++) { var a = u[c];
                    a && (a = a.extractEvents(r, e, n, l)) && (i = T(i, a)) }
                P(i) } } var Io = !0;

        function Mo(t, e) { Ro(e, t, !1) }

        function Ro(t, e, o) { switch (jo(e)) {
                case 0:
                    var r = Lo.bind(null, e, 1); break;
                case 1:
                    r = zo.bind(null, e, 1); break;
                default:
                    r = Fo.bind(null, e, 1) }
            o ? t.addEventListener(e, r, !0) : t.addEventListener(e, r, !1) }

        function Lo(t, e, o) { Lt || Mt(); var r = Fo,
                l = Lt;
            Lt = !0; try { It(r, t, e, o) } finally {
                (Lt = l) || zt() } }

        function zo(t, e, o) { Fo(t, e, o) }

        function Fo(t, e, o) { if (Io) { if (null === (e = R(e = Ut(o))) || "number" != typeof e.tag || 2 === no(e) || (e = null), Ao.length) { var r = Ao.pop();
                    r.topLevelType = t, r.nativeEvent = o, r.targetInst = e, t = r } else t = { topLevelType: t, nativeEvent: o, targetInst: e, ancestors: [] }; try { if (o = t, Lt) Do(o);
                    else { Lt = !0; try { Rt(Do, o, void 0) } finally { Lt = !1, zt() } } } finally { t.topLevelType = null, t.nativeEvent = null, t.targetInst = null, t.ancestors.length = 0, 10 > Ao.length && Ao.push(t) } } } var Bo = new("function" == typeof WeakMap ? WeakMap : Map);

        function Uo(t) { var e = Bo.get(t); return void 0 === e && (e = new Set, Bo.set(t, e)), e }

        function qo(t) { if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null; try { return t.activeElement || t.body } catch (e) { return t.body } }

        function Ho(t) { for (; t && t.firstChild;) t = t.firstChild; return t }

        function Wo(t, e) { var o, r = Ho(t); for (t = 0; r;) { if (3 === r.nodeType) { if (o = t + r.textContent.length, t <= e && o >= e) return { node: r, offset: e - t };
                    t = o }
                t: { for (; r;) { if (r.nextSibling) { r = r.nextSibling; break t }
                        r = r.parentNode }
                    r = void 0 }
                r = Ho(r) } }

        function Vo() { for (var t = window, e = qo(); e instanceof t.HTMLIFrameElement;) { try { var o = "string" == typeof e.contentWindow.location.href } catch (t) { o = !1 } if (!o) break;
                e = qo((t = e.contentWindow).document) } return e }

        function Yo(t) { var e = t && t.nodeName && t.nodeName.toLowerCase(); return e && ("input" === e && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === e || "true" === t.contentEditable) } var Ko = Y && "documentMode" in document && 11 >= document.documentMode,
            $o = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } },
            Qo = null,
            Xo = null,
            Go = null,
            Zo = !1;

        function Jo(t, e) { var o = e.window === e ? e.document : 9 === e.nodeType ? e : e.ownerDocument; return Zo || null == Qo || Qo !== qo(o) ? null : ("selectionStart" in (o = Qo) && Yo(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : o = { anchorNode: (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }, Go && ro(Go, o) ? null : (Go = o, (t = st.getPooled($o.select, Xo, t, e)).type = "select", t.target = Qo, V(t), t)) } var tr = { eventTypes: $o, extractEvents: function(t, e, o, r) { var l, n = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument; if (!(l = !n)) { t: { n = Uo(n), l = g.onSelect; for (var i = 0; i < l.length; i++)
                            if (!n.has(l[i])) { n = !1; break t }
                        n = !0 }
                    l = !n } if (l) return null; switch (n = e ? z(e) : window, t) {
                    case "focus":
                        (Bt(n) || "true" === n.contentEditable) && (Qo = n, Xo = e, Go = null); break;
                    case "blur":
                        Go = Xo = Qo = null; break;
                    case "mousedown":
                        Zo = !0; break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        return Zo = !1, Jo(o, r);
                    case "selectionchange":
                        if (Ko) break;
                    case "keydown":
                    case "keyup":
                        return Jo(o, r) } return null } };

        function er(t, e) { return t = l({ children: void 0 }, e), (e = function(t) { var e = ""; return r.Children.forEach(t, (function(t) { null != t && (e += t) })), e }(e.children)) && (t.children = e), t }

        function or(t, e, o, r) { if (t = t.options, e) { e = {}; for (var l = 0; l < o.length; l++) e["$" + o[l]] = !0; for (o = 0; o < t.length; o++) l = e.hasOwnProperty("$" + t[o].value), t[o].selected !== l && (t[o].selected = l), l && r && (t[o].defaultSelected = !0) } else { for (o = "" + we(o), e = null, l = 0; l < t.length; l++) { if (t[l].value === o) return t[l].selected = !0, void(r && (t[l].defaultSelected = !0));
                    null !== e || t[l].disabled || (e = t[l]) }
                null !== e && (e.selected = !0) } }

        function rr(t, e) { if (null != e.dangerouslySetInnerHTML) throw i(Error(91)); return l({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue }) }

        function lr(t, e) { var o = e.value; if (null == o) { if (o = e.defaultValue, null != (e = e.children)) { if (null != o) throw i(Error(92)); if (Array.isArray(e)) { if (!(1 >= e.length)) throw i(Error(93));
                        e = e[0] }
                    o = e }
                null == o && (o = "") }
            t._wrapperState = { initialValue: we(o) } }

        function nr(t, e) { var o = we(e.value),
                r = we(e.defaultValue);
            null != o && ((o = "" + o) !== t.value && (t.value = o), null == e.defaultValue && t.defaultValue !== o && (t.defaultValue = o)), null != r && (t.defaultValue = "" + r) }

        function ir(t) { var e = t.textContent;
            e === t._wrapperState.initialValue && (t.value = e) }
        j.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), _ = F, k = L, E = z, j.injectEventPluginsByName({ SimpleEventPlugin: Po, EnterLeaveEventPlugin: to, ChangeEventPlugin: qe, SelectEventPlugin: tr, BeforeInputEventPlugin: Tt }); var cr = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };

        function ar(t) { switch (t) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml" } }

        function sr(t, e) { return null == t || "http://www.w3.org/1999/xhtml" === t ? ar(e) : "http://www.w3.org/2000/svg" === t && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : t } var pr = void 0,
            ur = function(t) { return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, o, r, l) { MSApp.execUnsafeLocalFunction((function() { return t(e, o) })) } : t }((function(t, e) { if (t.namespaceURI !== cr.svg || "innerHTML" in t) t.innerHTML = e;
                else { for ((pr = pr || document.createElement("div")).innerHTML = "<svg>" + e + "</svg>", e = pr.firstChild; t.firstChild;) t.removeChild(t.firstChild); for (; e.firstChild;) t.appendChild(e.firstChild) } }));

        function dr(t, e) { if (e) { var o = t.firstChild; if (o && o === t.lastChild && 3 === o.nodeType) return void(o.nodeValue = e) }
            t.textContent = e } var fr = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
            gr = ["Webkit", "ms", "Moz", "O"];

        function mr(t, e, o) { return null == e || "boolean" == typeof e || "" === e ? "" : o || "number" != typeof e || 0 === e || fr.hasOwnProperty(t) && fr[t] ? ("" + e).trim() : e + "px" }

        function hr(t, e) { for (var o in t = t.style, e)
                if (e.hasOwnProperty(o)) { var r = 0 === o.indexOf("--"),
                        l = mr(o, e[o], r); "float" === o && (o = "cssFloat"), r ? t.setProperty(o, l) : t[o] = l } }
        Object.keys(fr).forEach((function(t) { gr.forEach((function(e) { e = e + t.charAt(0).toUpperCase() + t.substring(1), fr[e] = fr[t] })) })); var br = l({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

        function vr(t, e) { if (e) { if (br[t] && (null != e.children || null != e.dangerouslySetInnerHTML)) throw i(Error(137), t, ""); if (null != e.dangerouslySetInnerHTML) { if (null != e.children) throw i(Error(60)); if (!("object" == typeof e.dangerouslySetInnerHTML && "__html" in e.dangerouslySetInnerHTML)) throw i(Error(61)) } if (null != e.style && "object" != typeof e.style) throw i(Error(62), "") } }

        function yr(t, e) { if (-1 === t.indexOf("-")) return "string" == typeof e.is; switch (t) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0 } }

        function xr(t, e) { var o = Uo(t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument);
            e = g[e]; for (var r = 0; r < e.length; r++) { var l = e[r]; if (!o.has(l)) { switch (l) {
                        case "scroll":
                            Ro(t, "scroll", !0); break;
                        case "focus":
                        case "blur":
                            Ro(t, "focus", !0), Ro(t, "blur", !0), o.add("blur"), o.add("focus"); break;
                        case "cancel":
                        case "close":
                            qt(l) && Ro(t, l, !0); break;
                        case "invalid":
                        case "submit":
                        case "reset":
                            break;
                        default:
                            -1 === ot.indexOf(l) && Mo(l, t) }
                    o.add(l) } } }

        function wr() {} var _r = null,
            kr = null;

        function Er(t, e) { switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    return !!e.autoFocus } return !1 }

        function Sr(t, e) { return "textarea" === t || "option" === t || "noscript" === t || "string" == typeof e.children || "number" == typeof e.children || "object" == typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && null != e.dangerouslySetInnerHTML.__html } var Tr = "function" == typeof setTimeout ? setTimeout : void 0,
            Cr = "function" == typeof clearTimeout ? clearTimeout : void 0;

        function Or(t) { for (; null != t; t = t.nextSibling) { var e = t.nodeType; if (1 === e || 3 === e) break } return t }
        new Set; var Nr = [],
            Pr = -1;

        function jr(t) { 0 > Pr || (t.current = Nr[Pr], Nr[Pr] = null, Pr--) }

        function Ar(t, e) { Nr[++Pr] = t.current, t.current = e } var Dr = {},
            Ir = { current: Dr },
            Mr = { current: !1 },
            Rr = Dr;

        function Lr(t, e) { var o = t.type.contextTypes; if (!o) return Dr; var r = t.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext; var l, n = {}; for (l in o) n[l] = e[l]; return r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = n), n }

        function zr(t) { return null != (t = t.childContextTypes) }

        function Fr(t) { jr(Mr), jr(Ir) }

        function Br(t) { jr(Mr), jr(Ir) }

        function Ur(t, e, o) { if (Ir.current !== Dr) throw i(Error(168));
            Ar(Ir, e), Ar(Mr, o) }

        function qr(t, e, o) { var r = t.stateNode; if (t = e.childContextTypes, "function" != typeof r.getChildContext) return o; for (var n in r = r.getChildContext())
                if (!(n in t)) throw i(Error(108), pe(e) || "Unknown", n);
            return l({}, o, r) }

        function Hr(t) { var e = t.stateNode; return e = e && e.__reactInternalMemoizedMergedChildContext || Dr, Rr = Ir.current, Ar(Ir, e), Ar(Mr, Mr.current), !0 }

        function Wr(t, e, o) { var r = t.stateNode; if (!r) throw i(Error(169));
            o ? (e = qr(t, e, Rr), r.__reactInternalMemoizedMergedChildContext = e, jr(Mr), jr(Ir), Ar(Ir, e)) : jr(Mr), Ar(Mr, o) } var Vr = n.unstable_runWithPriority,
            Yr = n.unstable_scheduleCallback,
            Kr = n.unstable_cancelCallback,
            $r = n.unstable_shouldYield,
            Qr = n.unstable_requestPaint,
            Xr = n.unstable_now,
            Gr = n.unstable_getCurrentPriorityLevel,
            Zr = n.unstable_ImmediatePriority,
            Jr = n.unstable_UserBlockingPriority,
            tl = n.unstable_NormalPriority,
            el = n.unstable_LowPriority,
            ol = n.unstable_IdlePriority,
            rl = {},
            ll = void 0 !== Qr ? Qr : function() {},
            nl = null,
            il = null,
            cl = !1,
            al = Xr(),
            sl = 1e4 > al ? Xr : function() { return Xr() - al };

        function pl() { switch (Gr()) {
                case Zr:
                    return 99;
                case Jr:
                    return 98;
                case tl:
                    return 97;
                case el:
                    return 96;
                case ol:
                    return 95;
                default:
                    throw i(Error(332)) } }

        function ul(t) { switch (t) {
                case 99:
                    return Zr;
                case 98:
                    return Jr;
                case 97:
                    return tl;
                case 96:
                    return el;
                case 95:
                    return ol;
                default:
                    throw i(Error(332)) } }

        function dl(t, e) { return t = ul(t), Vr(t, e) }

        function fl(t, e, o) { return t = ul(t), Yr(t, e, o) }

        function gl(t) { return null === nl ? (nl = [t], il = Yr(Zr, hl)) : nl.push(t), rl }

        function ml() { null !== il && Kr(il), hl() }

        function hl() { if (!cl && null !== nl) { cl = !0; var t = 0; try { var e = nl;
                    dl(99, (function() { for (; t < e.length; t++) { var o = e[t];
                            do { o = o(!0) } while (null !== o) } })), nl = null } catch (e) { throw null !== nl && (nl = nl.slice(t + 1)), Yr(Zr, ml), e } finally { cl = !1 } } }

        function bl(t, e) { return 1073741823 === e ? 99 : 1 === e ? 95 : 0 >= (t = 10 * (1073741821 - e) - 10 * (1073741821 - t)) ? 99 : 250 >= t ? 98 : 5250 >= t ? 97 : 95 }

        function vl(t, e) { if (t && t.defaultProps)
                for (var o in e = l({}, e), t = t.defaultProps) void 0 === e[o] && (e[o] = t[o]); return e } var yl = { current: null },
            xl = null,
            wl = null,
            _l = null;

        function kl() { _l = wl = xl = null }

        function El(t, e) { var o = t.type._context;
            Ar(yl, o._currentValue), o._currentValue = e }

        function Sl(t) { var e = yl.current;
            jr(yl), t.type._context._currentValue = e }

        function Tl(t, e) { for (; null !== t;) { var o = t.alternate; if (t.childExpirationTime < e) t.childExpirationTime = e, null !== o && o.childExpirationTime < e && (o.childExpirationTime = e);
                else { if (!(null !== o && o.childExpirationTime < e)) break;
                    o.childExpirationTime = e }
                t = t.return } }

        function Cl(t, e) { xl = t, _l = wl = null, null !== (t = t.dependencies) && null !== t.firstContext && (t.expirationTime >= e && (ui = !0), t.firstContext = null) }

        function Ol(t, e) { if (_l !== t && !1 !== e && 0 !== e)
                if ("number" == typeof e && 1073741823 !== e || (_l = t, e = 1073741823), e = { context: t, observedBits: e, next: null }, null === wl) { if (null === xl) throw i(Error(308));
                    wl = e, xl.dependencies = { expirationTime: 0, firstContext: e, responders: null } } else wl = wl.next = e;
            return t._currentValue } var Nl = !1;

        function Pl(t) { return { baseState: t, firstUpdate: null, lastUpdate: null, firstCapturedUpdate: null, lastCapturedUpdate: null, firstEffect: null, lastEffect: null, firstCapturedEffect: null, lastCapturedEffect: null } }

        function jl(t) { return { baseState: t.baseState, firstUpdate: t.firstUpdate, lastUpdate: t.lastUpdate, firstCapturedUpdate: null, lastCapturedUpdate: null, firstEffect: null, lastEffect: null, firstCapturedEffect: null, lastCapturedEffect: null } }

        function Al(t, e) { return { expirationTime: t, suspenseConfig: e, tag: 0, payload: null, callback: null, next: null, nextEffect: null } }

        function Dl(t, e) { null === t.lastUpdate ? t.firstUpdate = t.lastUpdate = e : (t.lastUpdate.next = e, t.lastUpdate = e) }

        function Il(t, e) { var o = t.alternate; if (null === o) { var r = t.updateQueue,
                    l = null;
                null === r && (r = t.updateQueue = Pl(t.memoizedState)) } else r = t.updateQueue, l = o.updateQueue, null === r ? null === l ? (r = t.updateQueue = Pl(t.memoizedState), l = o.updateQueue = Pl(o.memoizedState)) : r = t.updateQueue = jl(l) : null === l && (l = o.updateQueue = jl(r));
            null === l || r === l ? Dl(r, e) : null === r.lastUpdate || null === l.lastUpdate ? (Dl(r, e), Dl(l, e)) : (Dl(r, e), l.lastUpdate = e) }

        function Ml(t, e) { var o = t.updateQueue;
            null === (o = null === o ? t.updateQueue = Pl(t.memoizedState) : Rl(t, o)).lastCapturedUpdate ? o.firstCapturedUpdate = o.lastCapturedUpdate = e : (o.lastCapturedUpdate.next = e, o.lastCapturedUpdate = e) }

        function Rl(t, e) { var o = t.alternate; return null !== o && e === o.updateQueue && (e = t.updateQueue = jl(e)), e }

        function Ll(t, e, o, r, n, i) { switch (o.tag) {
                case 1:
                    return "function" == typeof(t = o.payload) ? t.call(i, r, n) : t;
                case 3:
                    t.effectTag = -2049 & t.effectTag | 64;
                case 0:
                    if (null == (n = "function" == typeof(t = o.payload) ? t.call(i, r, n) : t)) break; return l({}, r, n);
                case 2:
                    Nl = !0 } return r }

        function zl(t, e, o, r, l) { Nl = !1; for (var n = (e = Rl(t, e)).baseState, i = null, c = 0, a = e.firstUpdate, s = n; null !== a;) { var p = a.expirationTime;
                p < l ? (null === i && (i = a, n = s), c < p && (c = p)) : (qc(p, a.suspenseConfig), s = Ll(t, 0, a, s, o, r), null !== a.callback && (t.effectTag |= 32, a.nextEffect = null, null === e.lastEffect ? e.firstEffect = e.lastEffect = a : (e.lastEffect.nextEffect = a, e.lastEffect = a))), a = a.next } for (p = null, a = e.firstCapturedUpdate; null !== a;) { var u = a.expirationTime;
                u < l ? (null === p && (p = a, null === i && (n = s)), c < u && (c = u)) : (s = Ll(t, 0, a, s, o, r), null !== a.callback && (t.effectTag |= 32, a.nextEffect = null, null === e.lastCapturedEffect ? e.firstCapturedEffect = e.lastCapturedEffect = a : (e.lastCapturedEffect.nextEffect = a, e.lastCapturedEffect = a))), a = a.next }
            null === i && (e.lastUpdate = null), null === p ? e.lastCapturedUpdate = null : t.effectTag |= 32, null === i && null === p && (n = s), e.baseState = n, e.firstUpdate = i, e.firstCapturedUpdate = p, t.expirationTime = c, t.memoizedState = s }

        function Fl(t, e, o) { null !== e.firstCapturedUpdate && (null !== e.lastUpdate && (e.lastUpdate.next = e.firstCapturedUpdate, e.lastUpdate = e.lastCapturedUpdate), e.firstCapturedUpdate = e.lastCapturedUpdate = null), Bl(e.firstEffect, o), e.firstEffect = e.lastEffect = null, Bl(e.firstCapturedEffect, o), e.firstCapturedEffect = e.lastCapturedEffect = null }

        function Bl(t, e) { for (; null !== t;) { var o = t.callback; if (null !== o) { t.callback = null; var r = e; if ("function" != typeof o) throw i(Error(191), o);
                    o.call(r) }
                t = t.nextEffect } } var Ul = Yt.ReactCurrentBatchConfig,
            ql = (new r.Component).refs;

        function Hl(t, e, o, r) { o = null == (o = o(r, e = t.memoizedState)) ? e : l({}, e, o), t.memoizedState = o, null !== (r = t.updateQueue) && 0 === t.expirationTime && (r.baseState = o) } var Wl = { isMounted: function(t) { return !!(t = t._reactInternalFiber) && 2 === no(t) }, enqueueSetState: function(t, e, o) { t = t._reactInternalFiber; var r = Nc(),
                    l = Ul.suspense;
                (l = Al(r = Pc(r, t, l), l)).payload = e, null != o && (l.callback = o), Il(t, l), Ac(t, r) }, enqueueReplaceState: function(t, e, o) { t = t._reactInternalFiber; var r = Nc(),
                    l = Ul.suspense;
                (l = Al(r = Pc(r, t, l), l)).tag = 1, l.payload = e, null != o && (l.callback = o), Il(t, l), Ac(t, r) }, enqueueForceUpdate: function(t, e) { t = t._reactInternalFiber; var o = Nc(),
                    r = Ul.suspense;
                (r = Al(o = Pc(o, t, r), r)).tag = 2, null != e && (r.callback = e), Il(t, r), Ac(t, o) } };

        function Vl(t, e, o, r, l, n, i) { return "function" == typeof(t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(r, n, i) : !e.prototype || !e.prototype.isPureReactComponent || (!ro(o, r) || !ro(l, n)) }

        function Yl(t, e, o) { var r = !1,
                l = Dr,
                n = e.contextType; return "object" == typeof n && null !== n ? n = Ol(n) : (l = zr(e) ? Rr : Ir.current, n = (r = null != (r = e.contextTypes)) ? Lr(t, l) : Dr), e = new e(o, n), t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, e.updater = Wl, t.stateNode = e, e._reactInternalFiber = t, r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = l, t.__reactInternalMemoizedMaskedChildContext = n), e }

        function Kl(t, e, o, r) { t = e.state, "function" == typeof e.componentWillReceiveProps && e.componentWillReceiveProps(o, r), "function" == typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(o, r), e.state !== t && Wl.enqueueReplaceState(e, e.state, null) }

        function $l(t, e, o, r) { var l = t.stateNode;
            l.props = o, l.state = t.memoizedState, l.refs = ql; var n = e.contextType; "object" == typeof n && null !== n ? l.context = Ol(n) : (n = zr(e) ? Rr : Ir.current, l.context = Lr(t, n)), null !== (n = t.updateQueue) && (zl(t, n, o, l, r), l.state = t.memoizedState), "function" == typeof(n = e.getDerivedStateFromProps) && (Hl(t, e, n, o), l.state = t.memoizedState), "function" == typeof e.getDerivedStateFromProps || "function" == typeof l.getSnapshotBeforeUpdate || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || (e = l.state, "function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(), e !== l.state && Wl.enqueueReplaceState(l, l.state, null), null !== (n = t.updateQueue) && (zl(t, n, o, l, r), l.state = t.memoizedState)), "function" == typeof l.componentDidMount && (t.effectTag |= 4) } var Ql = Array.isArray;

        function Xl(t, e, o) { if (null !== (t = o.ref) && "function" != typeof t && "object" != typeof t) { if (o._owner) { o = o._owner; var r = void 0; if (o) { if (1 !== o.tag) throw i(Error(309));
                        r = o.stateNode } if (!r) throw i(Error(147), t); var l = "" + t; return null !== e && null !== e.ref && "function" == typeof e.ref && e.ref._stringRef === l ? e.ref : ((e = function(t) { var e = r.refs;
                        e === ql && (e = r.refs = {}), null === t ? delete e[l] : e[l] = t })._stringRef = l, e) } if ("string" != typeof t) throw i(Error(284)); if (!o._owner) throw i(Error(290), t) } return t }

        function Gl(t, e) { if ("textarea" !== t.type) throw i(Error(31), "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e, "") }

        function Zl(t) {
            function e(e, o) { if (t) { var r = e.lastEffect;
                    null !== r ? (r.nextEffect = o, e.lastEffect = o) : e.firstEffect = e.lastEffect = o, o.nextEffect = null, o.effectTag = 8 } }

            function o(o, r) { if (!t) return null; for (; null !== r;) e(o, r), r = r.sibling; return null }

            function r(t, e) { for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling; return t }

            function l(t, e, o) { return (t = na(t, e)).index = 0, t.sibling = null, t }

            function n(e, o, r) { return e.index = r, t ? null !== (r = e.alternate) ? (r = r.index) < o ? (e.effectTag = 2, o) : r : (e.effectTag = 2, o) : o }

            function c(e) { return t && null === e.alternate && (e.effectTag = 2), e }

            function a(t, e, o, r) { return null === e || 6 !== e.tag ? ((e = aa(o, t.mode, r)).return = t, e) : ((e = l(e, o)).return = t, e) }

            function s(t, e, o, r) { return null !== e && e.elementType === o.type ? ((r = l(e, o.props)).ref = Xl(t, e, o), r.return = t, r) : ((r = ia(o.type, o.key, o.props, null, t.mode, r)).ref = Xl(t, e, o), r.return = t, r) }

            function p(t, e, o, r) { return null === e || 4 !== e.tag || e.stateNode.containerInfo !== o.containerInfo || e.stateNode.implementation !== o.implementation ? ((e = sa(o, t.mode, r)).return = t, e) : ((e = l(e, o.children || [])).return = t, e) }

            function u(t, e, o, r, n) { return null === e || 7 !== e.tag ? ((e = ca(o, t.mode, r, n)).return = t, e) : ((e = l(e, o)).return = t, e) }

            function d(t, e, o) { if ("string" == typeof e || "number" == typeof e) return (e = aa("" + e, t.mode, o)).return = t, e; if ("object" == typeof e && null !== e) { switch (e.$$typeof) {
                        case Qt:
                            return (o = ia(e.type, e.key, e.props, null, t.mode, o)).ref = Xl(t, null, e), o.return = t, o;
                        case Xt:
                            return (e = sa(e, t.mode, o)).return = t, e } if (Ql(e) || se(e)) return (e = ca(e, t.mode, o, null)).return = t, e;
                    Gl(t, e) } return null }

            function f(t, e, o, r) { var l = null !== e ? e.key : null; if ("string" == typeof o || "number" == typeof o) return null !== l ? null : a(t, e, "" + o, r); if ("object" == typeof o && null !== o) { switch (o.$$typeof) {
                        case Qt:
                            return o.key === l ? o.type === Gt ? u(t, e, o.props.children, r, l) : s(t, e, o, r) : null;
                        case Xt:
                            return o.key === l ? p(t, e, o, r) : null } if (Ql(o) || se(o)) return null !== l ? null : u(t, e, o, r, null);
                    Gl(t, o) } return null }

            function g(t, e, o, r, l) { if ("string" == typeof r || "number" == typeof r) return a(e, t = t.get(o) || null, "" + r, l); if ("object" == typeof r && null !== r) { switch (r.$$typeof) {
                        case Qt:
                            return t = t.get(null === r.key ? o : r.key) || null, r.type === Gt ? u(e, t, r.props.children, l, r.key) : s(e, t, r, l);
                        case Xt:
                            return p(e, t = t.get(null === r.key ? o : r.key) || null, r, l) } if (Ql(r) || se(r)) return u(e, t = t.get(o) || null, r, l, null);
                    Gl(e, r) } return null }

            function m(l, i, c, a) { for (var s = null, p = null, u = i, m = i = 0, h = null; null !== u && m < c.length; m++) { u.index > m ? (h = u, u = null) : h = u.sibling; var b = f(l, u, c[m], a); if (null === b) { null === u && (u = h); break }
                    t && u && null === b.alternate && e(l, u), i = n(b, i, m), null === p ? s = b : p.sibling = b, p = b, u = h } if (m === c.length) return o(l, u), s; if (null === u) { for (; m < c.length; m++) null !== (u = d(l, c[m], a)) && (i = n(u, i, m), null === p ? s = u : p.sibling = u, p = u); return s } for (u = r(l, u); m < c.length; m++) null !== (h = g(u, l, m, c[m], a)) && (t && null !== h.alternate && u.delete(null === h.key ? m : h.key), i = n(h, i, m), null === p ? s = h : p.sibling = h, p = h); return t && u.forEach((function(t) { return e(l, t) })), s }

            function h(l, c, a, s) { var p = se(a); if ("function" != typeof p) throw i(Error(150)); if (null == (a = p.call(a))) throw i(Error(151)); for (var u = p = null, m = c, h = c = 0, b = null, v = a.next(); null !== m && !v.done; h++, v = a.next()) { m.index > h ? (b = m, m = null) : b = m.sibling; var y = f(l, m, v.value, s); if (null === y) { null === m && (m = b); break }
                    t && m && null === y.alternate && e(l, m), c = n(y, c, h), null === u ? p = y : u.sibling = y, u = y, m = b } if (v.done) return o(l, m), p; if (null === m) { for (; !v.done; h++, v = a.next()) null !== (v = d(l, v.value, s)) && (c = n(v, c, h), null === u ? p = v : u.sibling = v, u = v); return p } for (m = r(l, m); !v.done; h++, v = a.next()) null !== (v = g(m, l, h, v.value, s)) && (t && null !== v.alternate && m.delete(null === v.key ? h : v.key), c = n(v, c, h), null === u ? p = v : u.sibling = v, u = v); return t && m.forEach((function(t) { return e(l, t) })), p } return function(t, r, n, a) { var s = "object" == typeof n && null !== n && n.type === Gt && null === n.key;
                s && (n = n.props.children); var p = "object" == typeof n && null !== n; if (p) switch (n.$$typeof) {
                    case Qt:
                        t: { for (p = n.key, s = r; null !== s;) { if (s.key === p) { if (7 === s.tag ? n.type === Gt : s.elementType === n.type) { o(t, s.sibling), (r = l(s, n.type === Gt ? n.props.children : n.props)).ref = Xl(t, s, n), r.return = t, t = r; break t }
                                    o(t, s); break }
                                e(t, s), s = s.sibling }
                            n.type === Gt ? ((r = ca(n.props.children, t.mode, a, n.key)).return = t, t = r) : ((a = ia(n.type, n.key, n.props, null, t.mode, a)).ref = Xl(t, r, n), a.return = t, t = a) }
                        return c(t);
                    case Xt:
                        t: { for (s = n.key; null !== r;) { if (r.key === s) { if (4 === r.tag && r.stateNode.containerInfo === n.containerInfo && r.stateNode.implementation === n.implementation) { o(t, r.sibling), (r = l(r, n.children || [])).return = t, t = r; break t }
                                    o(t, r); break }
                                e(t, r), r = r.sibling }(r = sa(n, t.mode, a)).return = t, t = r }
                        return c(t) }
                if ("string" == typeof n || "number" == typeof n) return n = "" + n, null !== r && 6 === r.tag ? (o(t, r.sibling), (r = l(r, n)).return = t, t = r) : (o(t, r), (r = aa(n, t.mode, a)).return = t, t = r), c(t); if (Ql(n)) return m(t, r, n, a); if (se(n)) return h(t, r, n, a); if (p && Gl(t, n), void 0 === n && !s) switch (t.tag) {
                    case 1:
                    case 0:
                        throw t = t.type, i(Error(152), t.displayName || t.name || "Component") }
                return o(t, r) } } var Jl = Zl(!0),
            tn = Zl(!1),
            en = {},
            on = { current: en },
            rn = { current: en },
            ln = { current: en };

        function nn(t) { if (t === en) throw i(Error(174)); return t }

        function cn(t, e) { Ar(ln, e), Ar(rn, t), Ar(on, en); var o = e.nodeType; switch (o) {
                case 9:
                case 11:
                    e = (e = e.documentElement) ? e.namespaceURI : sr(null, ""); break;
                default:
                    e = sr(e = (o = 8 === o ? e.parentNode : e).namespaceURI || null, o = o.tagName) }
            jr(on), Ar(on, e) }

        function an(t) { jr(on), jr(rn), jr(ln) }

        function sn(t) { nn(ln.current); var e = nn(on.current),
                o = sr(e, t.type);
            e !== o && (Ar(rn, t), Ar(on, o)) }

        function pn(t) { rn.current === t && (jr(on), jr(rn)) } var un = 1,
            dn = 1,
            fn = 2,
            gn = { current: 0 };

        function mn(t) { for (var e = t; null !== e;) { if (13 === e.tag) { if (null !== e.memoizedState) return e } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) { if (0 != (64 & e.effectTag)) return e } else if (null !== e.child) { e.child.return = e, e = e.child; continue } if (e === t) break; for (; null === e.sibling;) { if (null === e.return || e.return === t) return null;
                    e = e.return }
                e.sibling.return = e.return, e = e.sibling } return null } var hn = 0,
            bn = 2,
            vn = 4,
            yn = 8,
            xn = 16,
            wn = 32,
            _n = 64,
            kn = 128,
            En = Yt.ReactCurrentDispatcher,
            Sn = 0,
            Tn = null,
            Cn = null,
            On = null,
            Nn = null,
            Pn = null,
            jn = null,
            An = 0,
            Dn = null,
            In = 0,
            Mn = !1,
            Rn = null,
            Ln = 0;

        function zn() { throw i(Error(321)) }

        function Fn(t, e) { if (null === e) return !1; for (var o = 0; o < e.length && o < t.length; o++)
                if (!eo(t[o], e[o])) return !1;
            return !0 }

        function Bn(t, e, o, r, l, n) { if (Sn = n, Tn = e, On = null !== t ? t.memoizedState : null, En.current = null === On ? Jn : ti, e = o(r, l), Mn) { do { Mn = !1, Ln += 1, On = null !== t ? t.memoizedState : null, jn = Nn, Dn = Pn = Cn = null, En.current = ti, e = o(r, l) } while (Mn);
                Rn = null, Ln = 0 } if (En.current = Zn, (t = Tn).memoizedState = Nn, t.expirationTime = An, t.updateQueue = Dn, t.effectTag |= In, t = null !== Cn && null !== Cn.next, Sn = 0, jn = Pn = Nn = On = Cn = Tn = null, An = 0, Dn = null, In = 0, t) throw i(Error(300)); return e }

        function Un() { En.current = Zn, Sn = 0, jn = Pn = Nn = On = Cn = Tn = null, An = 0, Dn = null, In = 0, Mn = !1, Rn = null, Ln = 0 }

        function qn() { var t = { memoizedState: null, baseState: null, queue: null, baseUpdate: null, next: null }; return null === Pn ? Nn = Pn = t : Pn = Pn.next = t, Pn }

        function Hn() { if (null !== jn) jn = (Pn = jn).next, On = null !== (Cn = On) ? Cn.next : null;
            else { if (null === On) throw i(Error(310)); var t = { memoizedState: (Cn = On).memoizedState, baseState: Cn.baseState, queue: Cn.queue, baseUpdate: Cn.baseUpdate, next: null };
                Pn = null === Pn ? Nn = t : Pn.next = t, On = Cn.next } return Pn }

        function Wn(t, e) { return "function" == typeof e ? e(t) : e }

        function Vn(t) { var e = Hn(),
                o = e.queue; if (null === o) throw i(Error(311)); if (o.lastRenderedReducer = t, 0 < Ln) { var r = o.dispatch; if (null !== Rn) { var l = Rn.get(o); if (void 0 !== l) { Rn.delete(o); var n = e.memoizedState;
                        do { n = t(n, l.action), l = l.next } while (null !== l); return eo(n, e.memoizedState) || (ui = !0), e.memoizedState = n, e.baseUpdate === o.last && (e.baseState = n), o.lastRenderedState = n, [n, r] } } return [e.memoizedState, r] }
            r = o.last; var c = e.baseUpdate; if (n = e.baseState, null !== c ? (null !== r && (r.next = null), r = c.next) : r = null !== r ? r.next : null, null !== r) { var a = l = null,
                    s = r,
                    p = !1;
                do { var u = s.expirationTime;
                    u < Sn ? (p || (p = !0, a = c, l = n), u > An && (An = u)) : (qc(u, s.suspenseConfig), n = s.eagerReducer === t ? s.eagerState : t(n, s.action)), c = s, s = s.next } while (null !== s && s !== r);
                p || (a = c, l = n), eo(n, e.memoizedState) || (ui = !0), e.memoizedState = n, e.baseUpdate = a, e.baseState = l, o.lastRenderedState = n } return [e.memoizedState, o.dispatch] }

        function Yn(t, e, o, r) { return t = { tag: t, create: e, destroy: o, deps: r, next: null }, null === Dn ? (Dn = { lastEffect: null }).lastEffect = t.next = t : null === (e = Dn.lastEffect) ? Dn.lastEffect = t.next = t : (o = e.next, e.next = t, t.next = o, Dn.lastEffect = t), t }

        function Kn(t, e, o, r) { var l = qn();
            In |= t, l.memoizedState = Yn(e, o, void 0, void 0 === r ? null : r) }

        function $n(t, e, o, r) { var l = Hn();
            r = void 0 === r ? null : r; var n = void 0; if (null !== Cn) { var i = Cn.memoizedState; if (n = i.destroy, null !== r && Fn(r, i.deps)) return void Yn(hn, o, n, r) }
            In |= t, l.memoizedState = Yn(e, o, n, r) }

        function Qn(t, e) { return "function" == typeof e ? (t = t(), e(t), function() { e(null) }) : null != e ? (t = t(), e.current = t, function() { e.current = null }) : void 0 }

        function Xn() {}

        function Gn(t, e, o) { if (!(25 > Ln)) throw i(Error(301)); var r = t.alternate; if (t === Tn || null !== r && r === Tn)
                if (Mn = !0, t = { expirationTime: Sn, suspenseConfig: null, action: o, eagerReducer: null, eagerState: null, next: null }, null === Rn && (Rn = new Map), void 0 === (o = Rn.get(e))) Rn.set(e, t);
                else { for (e = o; null !== e.next;) e = e.next;
                    e.next = t }
            else { var l = Nc(),
                    n = Ul.suspense;
                n = { expirationTime: l = Pc(l, t, n), suspenseConfig: n, action: o, eagerReducer: null, eagerState: null, next: null }; var c = e.last; if (null === c) n.next = n;
                else { var a = c.next;
                    null !== a && (n.next = a), c.next = n } if (e.last = n, 0 === t.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = e.lastRenderedReducer)) try { var s = e.lastRenderedState,
                        p = r(s, o); if (n.eagerReducer = r, n.eagerState = p, eo(p, s)) return } catch (t) {}
                Ac(t, l) } } var Zn = { readContext: Ol, useCallback: zn, useContext: zn, useEffect: zn, useImperativeHandle: zn, useLayoutEffect: zn, useMemo: zn, useReducer: zn, useRef: zn, useState: zn, useDebugValue: zn, useResponder: zn },
            Jn = { readContext: Ol, useCallback: function(t, e) { return qn().memoizedState = [t, void 0 === e ? null : e], t }, useContext: Ol, useEffect: function(t, e) { return Kn(516, kn | _n, t, e) }, useImperativeHandle: function(t, e, o) { return o = null != o ? o.concat([t]) : null, Kn(4, vn | wn, Qn.bind(null, e, t), o) }, useLayoutEffect: function(t, e) { return Kn(4, vn | wn, t, e) }, useMemo: function(t, e) { var o = qn(); return e = void 0 === e ? null : e, t = t(), o.memoizedState = [t, e], t }, useReducer: function(t, e, o) { var r = qn(); return e = void 0 !== o ? o(e) : e, r.memoizedState = r.baseState = e, t = (t = r.queue = { last: null, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }).dispatch = Gn.bind(null, Tn, t), [r.memoizedState, t] }, useRef: function(t) { return t = { current: t }, qn().memoizedState = t }, useState: function(t) { var e = qn(); return "function" == typeof t && (t = t()), e.memoizedState = e.baseState = t, t = (t = e.queue = { last: null, dispatch: null, lastRenderedReducer: Wn, lastRenderedState: t }).dispatch = Gn.bind(null, Tn, t), [e.memoizedState, t] }, useDebugValue: Xn, useResponder: lo },
            ti = { readContext: Ol, useCallback: function(t, e) { var o = Hn();
                    e = void 0 === e ? null : e; var r = o.memoizedState; return null !== r && null !== e && Fn(e, r[1]) ? r[0] : (o.memoizedState = [t, e], t) }, useContext: Ol, useEffect: function(t, e) { return $n(516, kn | _n, t, e) }, useImperativeHandle: function(t, e, o) { return o = null != o ? o.concat([t]) : null, $n(4, vn | wn, Qn.bind(null, e, t), o) }, useLayoutEffect: function(t, e) { return $n(4, vn | wn, t, e) }, useMemo: function(t, e) { var o = Hn();
                    e = void 0 === e ? null : e; var r = o.memoizedState; return null !== r && null !== e && Fn(e, r[1]) ? r[0] : (t = t(), o.memoizedState = [t, e], t) }, useReducer: Vn, useRef: function() { return Hn().memoizedState }, useState: function(t) { return Vn(Wn) }, useDebugValue: Xn, useResponder: lo },
            ei = null,
            oi = null,
            ri = !1;

        function li(t, e) { var o = ra(5, null, null, 0);
            o.elementType = "DELETED", o.type = "DELETED", o.stateNode = e, o.return = t, o.effectTag = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = o, t.lastEffect = o) : t.firstEffect = t.lastEffect = o }

        function ni(t, e) { switch (t.tag) {
                case 5:
                    var o = t.type; return null !== (e = 1 !== e.nodeType || o.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) && (t.stateNode = e, !0);
                case 6:
                    return null !== (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) && (t.stateNode = e, !0);
                case 13:
                default:
                    return !1 } }

        function ii(t) { if (ri) { var e = oi; if (e) { var o = e; if (!ni(t, e)) { if (!(e = Or(o.nextSibling)) || !ni(t, e)) return t.effectTag |= 2, ri = !1, void(ei = t);
                        li(ei, o) }
                    ei = t, oi = Or(e.firstChild) } else t.effectTag |= 2, ri = !1, ei = t } }

        function ci(t) { for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 18 !== t.tag;) t = t.return;
            ei = t }

        function ai(t) { if (t !== ei) return !1; if (!ri) return ci(t), ri = !0, !1; var e = t.type; if (5 !== t.tag || "head" !== e && "body" !== e && !Sr(e, t.memoizedProps))
                for (e = oi; e;) li(t, e), e = Or(e.nextSibling); return ci(t), oi = ei ? Or(t.stateNode.nextSibling) : null, !0 }

        function si() { oi = ei = null, ri = !1 } var pi = Yt.ReactCurrentOwner,
            ui = !1;

        function di(t, e, o, r) { e.child = null === t ? tn(e, null, o, r) : Jl(e, t.child, o, r) }

        function fi(t, e, o, r, l) { o = o.render; var n = e.ref; return Cl(e, l), r = Bn(t, e, o, r, n, l), null === t || ui ? (e.effectTag |= 1, di(t, e, r, l), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= l && (t.expirationTime = 0), Si(t, e, l)) }

        function gi(t, e, o, r, l, n) { if (null === t) { var i = o.type; return "function" != typeof i || la(i) || void 0 !== i.defaultProps || null !== o.compare || void 0 !== o.defaultProps ? ((t = ia(o.type, null, r, null, e.mode, n)).ref = e.ref, t.return = e, e.child = t) : (e.tag = 15, e.type = i, mi(t, e, i, r, l, n)) } return i = t.child, l < n && (l = i.memoizedProps, (o = null !== (o = o.compare) ? o : ro)(l, r) && t.ref === e.ref) ? Si(t, e, n) : (e.effectTag |= 1, (t = na(i, r)).ref = e.ref, t.return = e, e.child = t) }

        function mi(t, e, o, r, l, n) { return null !== t && ro(t.memoizedProps, r) && t.ref === e.ref && (ui = !1, l < n) ? Si(t, e, n) : bi(t, e, o, r, n) }

        function hi(t, e) { var o = e.ref;
            (null === t && null !== o || null !== t && t.ref !== o) && (e.effectTag |= 128) }

        function bi(t, e, o, r, l) { var n = zr(o) ? Rr : Ir.current; return n = Lr(e, n), Cl(e, l), o = Bn(t, e, o, r, n, l), null === t || ui ? (e.effectTag |= 1, di(t, e, o, l), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= l && (t.expirationTime = 0), Si(t, e, l)) }

        function vi(t, e, o, r, l) { if (zr(o)) { var n = !0;
                Hr(e) } else n = !1; if (Cl(e, l), null === e.stateNode) null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), Yl(e, o, r), $l(e, o, r, l), r = !0;
            else if (null === t) { var i = e.stateNode,
                    c = e.memoizedProps;
                i.props = c; var a = i.context,
                    s = o.contextType; "object" == typeof s && null !== s ? s = Ol(s) : s = Lr(e, s = zr(o) ? Rr : Ir.current); var p = o.getDerivedStateFromProps,
                    u = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate;
                u || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (c !== r || a !== s) && Kl(e, i, r, s), Nl = !1; var d = e.memoizedState;
                a = i.state = d; var f = e.updateQueue;
                null !== f && (zl(e, f, r, i, l), a = e.memoizedState), c !== r || d !== a || Mr.current || Nl ? ("function" == typeof p && (Hl(e, o, p, r), a = e.memoizedState), (c = Nl || Vl(e, o, c, r, d, a, s)) ? (u || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (e.effectTag |= 4)) : ("function" == typeof i.componentDidMount && (e.effectTag |= 4), e.memoizedProps = r, e.memoizedState = a), i.props = r, i.state = a, i.context = s, r = c) : ("function" == typeof i.componentDidMount && (e.effectTag |= 4), r = !1) } else i = e.stateNode, c = e.memoizedProps, i.props = e.type === e.elementType ? c : vl(e.type, c), a = i.context, "object" == typeof(s = o.contextType) && null !== s ? s = Ol(s) : s = Lr(e, s = zr(o) ? Rr : Ir.current), (u = "function" == typeof(p = o.getDerivedStateFromProps) || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (c !== r || a !== s) && Kl(e, i, r, s), Nl = !1, a = e.memoizedState, d = i.state = a, null !== (f = e.updateQueue) && (zl(e, f, r, i, l), d = e.memoizedState), c !== r || a !== d || Mr.current || Nl ? ("function" == typeof p && (Hl(e, o, p, r), d = e.memoizedState), (p = Nl || Vl(e, o, c, r, a, d, s)) ? (u || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, d, s), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, d, s)), "function" == typeof i.componentDidUpdate && (e.effectTag |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (e.effectTag |= 256)) : ("function" != typeof i.componentDidUpdate || c === t.memoizedProps && a === t.memoizedState || (e.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || c === t.memoizedProps && a === t.memoizedState || (e.effectTag |= 256), e.memoizedProps = r, e.memoizedState = d), i.props = r, i.state = d, i.context = s, r = p) : ("function" != typeof i.componentDidUpdate || c === t.memoizedProps && a === t.memoizedState || (e.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || c === t.memoizedProps && a === t.memoizedState || (e.effectTag |= 256), r = !1); return yi(t, e, o, r, n, l) }

        function yi(t, e, o, r, l, n) { hi(t, e); var i = 0 != (64 & e.effectTag); if (!r && !i) return l && Wr(e, o, !1), Si(t, e, n);
            r = e.stateNode, pi.current = e; var c = i && "function" != typeof o.getDerivedStateFromError ? null : r.render(); return e.effectTag |= 1, null !== t && i ? (e.child = Jl(e, t.child, null, n), e.child = Jl(e, null, c, n)) : di(t, e, c, n), e.memoizedState = r.state, l && Wr(e, o, !0), e.child }

        function xi(t) { var e = t.stateNode;
            e.pendingContext ? Ur(0, e.pendingContext, e.pendingContext !== e.context) : e.context && Ur(0, e.context, !1), cn(t, e.containerInfo) } var wi = {};

        function _i(t, e, o) { var r, l = e.mode,
                n = e.pendingProps,
                i = gn.current,
                c = null,
                a = !1; if ((r = 0 != (64 & e.effectTag)) || (r = 0 != (i & fn) && (null === t || null !== t.memoizedState)), r ? (c = wi, a = !0, e.effectTag &= -65) : null !== t && null === t.memoizedState || void 0 === n.fallback || !0 === n.unstable_avoidThisFallback || (i |= dn), Ar(gn, i &= un), null === t)
                if (a) { if (n = n.fallback, (t = ca(null, l, 0, null)).return = e, 0 == (2 & e.mode))
                        for (a = null !== e.memoizedState ? e.child.child : e.child, t.child = a; null !== a;) a.return = t, a = a.sibling;
                    (o = ca(n, l, o, null)).return = e, t.sibling = o, l = t } else l = o = tn(e, null, n.children, o);
            else { if (null !== t.memoizedState)
                    if (l = (i = t.child).sibling, a) { if (n = n.fallback, (o = na(i, i.pendingProps)).return = e, 0 == (2 & e.mode) && (a = null !== e.memoizedState ? e.child.child : e.child) !== i.child)
                            for (o.child = a; null !== a;) a.return = o, a = a.sibling;
                        (n = na(l, n, l.expirationTime)).return = e, o.sibling = n, l = o, o.childExpirationTime = 0, o = n } else l = o = Jl(e, i.child, n.children, o);
                else if (i = t.child, a) { if (a = n.fallback, (n = ca(null, l, 0, null)).return = e, n.child = i, null !== i && (i.return = n), 0 == (2 & e.mode))
                        for (i = null !== e.memoizedState ? e.child.child : e.child, n.child = i; null !== i;) i.return = n, i = i.sibling;
                    (o = ca(a, l, o, null)).return = e, n.sibling = o, o.effectTag |= 2, l = n, n.childExpirationTime = 0 } else o = l = Jl(e, i, n.children, o);
                e.stateNode = t.stateNode } return e.memoizedState = c, e.child = l, o }

        function ki(t, e, o, r, l) { var n = t.memoizedState;
            null === n ? t.memoizedState = { isBackwards: e, rendering: null, last: r, tail: o, tailExpiration: 0, tailMode: l } : (n.isBackwards = e, n.rendering = null, n.last = r, n.tail = o, n.tailExpiration = 0, n.tailMode = l) }

        function Ei(t, e, o) { var r = e.pendingProps,
                l = r.revealOrder,
                n = r.tail; if (di(t, e, r.children, o), 0 != ((r = gn.current) & fn)) r = r & un | fn, e.effectTag |= 64;
            else { if (null !== t && 0 != (64 & t.effectTag)) t: for (t = e.child; null !== t;) { if (13 === t.tag) { if (null !== t.memoizedState) { t.expirationTime < o && (t.expirationTime = o); var i = t.alternate;
                            null !== i && i.expirationTime < o && (i.expirationTime = o), Tl(t.return, o) } } else if (null !== t.child) { t.child.return = t, t = t.child; continue } if (t === e) break t; for (; null === t.sibling;) { if (null === t.return || t.return === e) break t;
                        t = t.return }
                    t.sibling.return = t.return, t = t.sibling }
                r &= un } if (Ar(gn, r), 0 == (2 & e.mode)) e.memoizedState = null;
            else switch (l) {
                case "forwards":
                    for (o = e.child, l = null; null !== o;) null !== (r = o.alternate) && null === mn(r) && (l = o), o = o.sibling;
                    null === (o = l) ? (l = e.child, e.child = null) : (l = o.sibling, o.sibling = null), ki(e, !1, l, o, n); break;
                case "backwards":
                    for (o = null, l = e.child, e.child = null; null !== l;) { if (null !== (r = l.alternate) && null === mn(r)) { e.child = l; break }
                        r = l.sibling, l.sibling = o, o = l, l = r }
                    ki(e, !0, o, null, n); break;
                case "together":
                    ki(e, !1, null, null, void 0); break;
                default:
                    e.memoizedState = null }
            return e.child }

        function Si(t, e, o) { if (null !== t && (e.dependencies = t.dependencies), e.childExpirationTime < o) return null; if (null !== t && e.child !== t.child) throw i(Error(153)); if (null !== e.child) { for (o = na(t = e.child, t.pendingProps, t.expirationTime), e.child = o, o.return = e; null !== t.sibling;) t = t.sibling, (o = o.sibling = na(t, t.pendingProps, t.expirationTime)).return = e;
                o.sibling = null } return e.child }

        function Ti(t) { t.effectTag |= 4 } var Ci = void 0,
            Oi = void 0,
            Ni = void 0,
            Pi = void 0;

        function ji(t, e) { switch (t.tailMode) {
                case "hidden":
                    e = t.tail; for (var o = null; null !== e;) null !== e.alternate && (o = e), e = e.sibling;
                    null === o ? t.tail = null : o.sibling = null; break;
                case "collapsed":
                    o = t.tail; for (var r = null; null !== o;) null !== o.alternate && (r = o), o = o.sibling;
                    null === r ? e || null === t.tail ? t.tail = null : t.tail.sibling = null : r.sibling = null } }

        function Ai(t) { switch (t.tag) {
                case 1:
                    zr(t.type) && Fr(); var e = t.effectTag; return 2048 & e ? (t.effectTag = -2049 & e | 64, t) : null;
                case 3:
                    if (an(), Br(), 0 != (64 & (e = t.effectTag))) throw i(Error(285)); return t.effectTag = -2049 & e | 64, t;
                case 5:
                    return pn(t), null;
                case 13:
                    return jr(gn), 2048 & (e = t.effectTag) ? (t.effectTag = -2049 & e | 64, t) : null;
                case 18:
                    return null;
                case 19:
                    return jr(gn), null;
                case 4:
                    return an(), null;
                case 10:
                    return Sl(t), null;
                default:
                    return null } }

        function Di(t, e) { return { value: t, source: e, stack: ue(e) } }
        Ci = function(t, e) { for (var o = e.child; null !== o;) { if (5 === o.tag || 6 === o.tag) t.appendChild(o.stateNode);
                else if (20 === o.tag) t.appendChild(o.stateNode.instance);
                else if (4 !== o.tag && null !== o.child) { o.child.return = o, o = o.child; continue } if (o === e) break; for (; null === o.sibling;) { if (null === o.return || o.return === e) return;
                    o = o.return }
                o.sibling.return = o.return, o = o.sibling } }, Oi = function() {}, Ni = function(t, e, o, r, n) { var i = t.memoizedProps; if (i !== r) { var c = e.stateNode; switch (nn(on.current), t = null, o) {
                    case "input":
                        i = _e(c, i), r = _e(c, r), t = []; break;
                    case "option":
                        i = er(c, i), r = er(c, r), t = []; break;
                    case "select":
                        i = l({}, i, { value: void 0 }), r = l({}, r, { value: void 0 }), t = []; break;
                    case "textarea":
                        i = rr(c, i), r = rr(c, r), t = []; break;
                    default:
                        "function" != typeof i.onClick && "function" == typeof r.onClick && (c.onclick = wr) }
                vr(o, r), c = o = void 0; var a = null; for (o in i)
                    if (!r.hasOwnProperty(o) && i.hasOwnProperty(o) && null != i[o])
                        if ("style" === o) { var s = i[o]; for (c in s) s.hasOwnProperty(c) && (a || (a = {}), a[c] = "") } else "dangerouslySetInnerHTML" !== o && "children" !== o && "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (f.hasOwnProperty(o) ? t || (t = []) : (t = t || []).push(o, null));
                for (o in r) { var p = r[o]; if (s = null != i ? i[o] : void 0, r.hasOwnProperty(o) && p !== s && (null != p || null != s))
                        if ("style" === o)
                            if (s) { for (c in s) !s.hasOwnProperty(c) || p && p.hasOwnProperty(c) || (a || (a = {}), a[c] = ""); for (c in p) p.hasOwnProperty(c) && s[c] !== p[c] && (a || (a = {}), a[c] = p[c]) } else a || (t || (t = []), t.push(o, a)), a = p;
                    else "dangerouslySetInnerHTML" === o ? (p = p ? p.__html : void 0, s = s ? s.__html : void 0, null != p && s !== p && (t = t || []).push(o, "" + p)) : "children" === o ? s === p || "string" != typeof p && "number" != typeof p || (t = t || []).push(o, "" + p) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && (f.hasOwnProperty(o) ? (null != p && xr(n, o), t || s === p || (t = [])) : (t = t || []).push(o, p)) }
                a && (t = t || []).push("style", a), n = t, (e.updateQueue = n) && Ti(e) } }, Pi = function(t, e, o, r) { o !== r && Ti(e) }; var Ii = "function" == typeof WeakSet ? WeakSet : Set;

        function Mi(t, e) { var o = e.source,
                r = e.stack;
            null === r && null !== o && (r = ue(o)), null !== o && pe(o.type), e = e.value, null !== t && 1 === t.tag && pe(t.type); try { console.error(e) } catch (t) { setTimeout((function() { throw t })) } }

        function Ri(t) { var e = t.ref; if (null !== e)
                if ("function" == typeof e) try { e(null) } catch (e) { Xc(t, e) } else e.current = null }

        function Li(t, e, o) { if (null !== (o = null !== (o = o.updateQueue) ? o.lastEffect : null)) { var r = o = o.next;
                do { if ((r.tag & t) !== hn) { var l = r.destroy;
                        r.destroy = void 0, void 0 !== l && l() }(r.tag & e) !== hn && (l = r.create, r.destroy = l()), r = r.next } while (r !== o) } }

        function zi(t, e) { switch ("function" == typeof ea && ea(t), t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    var o = t.updateQueue; if (null !== o && null !== (o = o.lastEffect)) { var r = o.next;
                        dl(97 < e ? 97 : e, (function() { var e = r;
                            do { var o = e.destroy; if (void 0 !== o) { var l = t; try { o() } catch (t) { Xc(l, t) } }
                                e = e.next } while (e !== r) })) } break;
                case 1:
                    Ri(t), "function" == typeof(e = t.stateNode).componentWillUnmount && function(t, e) { try { e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount() } catch (e) { Xc(t, e) } }(t, e); break;
                case 5:
                    Ri(t); break;
                case 4:
                    qi(t, e) } }

        function Fi(t, e) { for (var o = t;;)
                if (zi(o, e), null !== o.child && 4 !== o.tag) o.child.return = o, o = o.child;
                else { if (o === t) break; for (; null === o.sibling;) { if (null === o.return || o.return === t) return;
                        o = o.return }
                    o.sibling.return = o.return, o = o.sibling } }

        function Bi(t) { return 5 === t.tag || 3 === t.tag || 4 === t.tag }

        function Ui(t) { t: { for (var e = t.return; null !== e;) { if (Bi(e)) { var o = e; break t }
                    e = e.return } throw i(Error(160)) } switch (e = o.stateNode, o.tag) {
                case 5:
                    var r = !1; break;
                case 3:
                case 4:
                    e = e.containerInfo, r = !0; break;
                default:
                    throw i(Error(161)) }
            16 & o.effectTag && (dr(e, ""), o.effectTag &= -17);t: e: for (o = t;;) { for (; null === o.sibling;) { if (null === o.return || Bi(o.return)) { o = null; break t }
                    o = o.return } for (o.sibling.return = o.return, o = o.sibling; 5 !== o.tag && 6 !== o.tag && 18 !== o.tag;) { if (2 & o.effectTag) continue e; if (null === o.child || 4 === o.tag) continue e;
                    o.child.return = o, o = o.child } if (!(2 & o.effectTag)) { o = o.stateNode; break t } }
            for (var l = t;;) { var n = 5 === l.tag || 6 === l.tag; if (n || 20 === l.tag) { var c = n ? l.stateNode : l.stateNode.instance; if (o)
                        if (r) { var a = c;
                            c = o, 8 === (n = e).nodeType ? n.parentNode.insertBefore(a, c) : n.insertBefore(a, c) } else e.insertBefore(c, o);
                    else r ? (8 === (a = e).nodeType ? (n = a.parentNode).insertBefore(c, a) : (n = a).appendChild(c), null != (a = a._reactRootContainer) || null !== n.onclick || (n.onclick = wr)) : e.appendChild(c) } else if (4 !== l.tag && null !== l.child) { l.child.return = l, l = l.child; continue } if (l === t) break; for (; null === l.sibling;) { if (null === l.return || l.return === t) return;
                    l = l.return }
                l.sibling.return = l.return, l = l.sibling } }

        function qi(t, e) { for (var o = t, r = !1, l = void 0, n = void 0;;) { if (!r) { r = o.return;
                    t: for (;;) { if (null === r) throw i(Error(160)); switch (l = r.stateNode, r.tag) {
                            case 5:
                                n = !1; break t;
                            case 3:
                            case 4:
                                l = l.containerInfo, n = !0; break t }
                        r = r.return }
                    r = !0 } if (5 === o.tag || 6 === o.tag)
                    if (Fi(o, e), n) { var c = l,
                            a = o.stateNode;
                        8 === c.nodeType ? c.parentNode.removeChild(a) : c.removeChild(a) } else l.removeChild(o.stateNode);
                else if (20 === o.tag) a = o.stateNode.instance, Fi(o, e), n ? 8 === (c = l).nodeType ? c.parentNode.removeChild(a) : c.removeChild(a) : l.removeChild(a);
                else if (4 === o.tag) { if (null !== o.child) { l = o.stateNode.containerInfo, n = !0, o.child.return = o, o = o.child; continue } } else if (zi(o, e), null !== o.child) { o.child.return = o, o = o.child; continue } if (o === t) break; for (; null === o.sibling;) { if (null === o.return || o.return === t) return;
                    4 === (o = o.return).tag && (r = !1) }
                o.sibling.return = o.return, o = o.sibling } }

        function Hi(t, e) { switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Li(vn, yn, e); break;
                case 1:
                    break;
                case 5:
                    var o = e.stateNode; if (null != o) { var r = e.memoizedProps,
                            l = null !== t ? t.memoizedProps : r;
                        t = e.type; var n = e.updateQueue; if (e.updateQueue = null, null !== n) { for (o[M] = r, "input" === t && "radio" === r.type && null != r.name && Ee(o, r), yr(t, l), e = yr(t, r), l = 0; l < n.length; l += 2) { var c = n[l],
                                    a = n[l + 1]; "style" === c ? hr(o, a) : "dangerouslySetInnerHTML" === c ? ur(o, a) : "children" === c ? dr(o, a) : xe(o, c, a, e) } switch (t) {
                                case "input":
                                    Se(o, r); break;
                                case "textarea":
                                    nr(o, r); break;
                                case "select":
                                    e = o._wrapperState.wasMultiple, o._wrapperState.wasMultiple = !!r.multiple, null != (t = r.value) ? or(o, !!r.multiple, t, !1) : e !== !!r.multiple && (null != r.defaultValue ? or(o, !!r.multiple, r.defaultValue, !0) : or(o, !!r.multiple, r.multiple ? [] : "", !1)) } } } break;
                case 6:
                    if (null === e.stateNode) throw i(Error(162));
                    e.stateNode.nodeValue = e.memoizedProps; break;
                case 3:
                case 12:
                    break;
                case 13:
                    if (o = e, null === e.memoizedState ? r = !1 : (r = !0, o = e.child, mc = sl()), null !== o) t: for (t = o;;) { if (5 === t.tag) n = t.stateNode, r ? "function" == typeof(n = n.style).setProperty ? n.setProperty("display", "none", "important") : n.display = "none" : (n = t.stateNode, l = null != (l = t.memoizedProps.style) && l.hasOwnProperty("display") ? l.display : null, n.style.display = mr("display", l));
                        else if (6 === t.tag) t.stateNode.nodeValue = r ? "" : t.memoizedProps;
                        else { if (13 === t.tag && null !== t.memoizedState) {
                                (n = t.child.sibling).return = t, t = n; continue } if (null !== t.child) { t.child.return = t, t = t.child; continue } } if (t === o) break t; for (; null === t.sibling;) { if (null === t.return || t.return === o) break t;
                            t = t.return }
                        t.sibling.return = t.return, t = t.sibling }
                    Wi(e); break;
                case 19:
                    Wi(e); break;
                case 17:
                case 20:
                    break;
                default:
                    throw i(Error(163)) } }

        function Wi(t) { var e = t.updateQueue; if (null !== e) { t.updateQueue = null; var o = t.stateNode;
                null === o && (o = t.stateNode = new Ii), e.forEach((function(e) { var r = Zc.bind(null, t, e);
                    o.has(e) || (o.add(e), e.then(r, r)) })) } } var Vi = "function" == typeof WeakMap ? WeakMap : Map;

        function Yi(t, e, o) {
            (o = Al(o, null)).tag = 3, o.payload = { element: null }; var r = e.value; return o.callback = function() { vc || (vc = !0, yc = r), Mi(t, e) }, o }

        function Ki(t, e, o) {
            (o = Al(o, null)).tag = 3; var r = t.type.getDerivedStateFromError; if ("function" == typeof r) { var l = e.value;
                o.payload = function() { return Mi(t, e), r(l) } } var n = t.stateNode; return null !== n && "function" == typeof n.componentDidCatch && (o.callback = function() { "function" != typeof r && (null === xc ? xc = new Set([this]) : xc.add(this), Mi(t, e)); var o = e.stack;
                this.componentDidCatch(e.value, { componentStack: null !== o ? o : "" }) }), o } var $i = Math.ceil,
            Qi = Yt.ReactCurrentDispatcher,
            Xi = Yt.ReactCurrentOwner,
            Gi = 0,
            Zi = 8,
            Ji = 16,
            tc = 32,
            ec = 0,
            oc = 1,
            rc = 2,
            lc = 3,
            nc = 4,
            ic = Gi,
            cc = null,
            ac = null,
            sc = 0,
            pc = ec,
            uc = 1073741823,
            dc = 1073741823,
            fc = null,
            gc = !1,
            mc = 0,
            hc = 500,
            bc = null,
            vc = !1,
            yc = null,
            xc = null,
            wc = !1,
            _c = null,
            kc = 90,
            Ec = 0,
            Sc = null,
            Tc = 0,
            Cc = null,
            Oc = 0;

        function Nc() { return (ic & (Ji | tc)) !== Gi ? 1073741821 - (sl() / 10 | 0) : 0 !== Oc ? Oc : Oc = 1073741821 - (sl() / 10 | 0) }

        function Pc(t, e, o) { if (0 == (2 & (e = e.mode))) return 1073741823; var r = pl(); if (0 == (4 & e)) return 99 === r ? 1073741823 : 1073741822; if ((ic & Ji) !== Gi) return sc; if (null !== o) t = 1073741821 - 25 * (1 + ((1073741821 - t + (0 | o.timeoutMs || 5e3) / 10) / 25 | 0));
            else switch (r) {
                case 99:
                    t = 1073741823; break;
                case 98:
                    t = 1073741821 - 10 * (1 + ((1073741821 - t + 15) / 10 | 0)); break;
                case 97:
                case 96:
                    t = 1073741821 - 25 * (1 + ((1073741821 - t + 500) / 25 | 0)); break;
                case 95:
                    t = 1; break;
                default:
                    throw i(Error(326)) }
            return null !== cc && t === sc && --t, t } var jc = 0;

        function Ac(t, e) { if (50 < Tc) throw Tc = 0, Cc = null, i(Error(185)); if (null !== (t = Dc(t, e))) { t.pingTime = 0; var o = pl(); if (1073741823 === e)
                    if ((ic & Zi) !== Gi && (ic & (Ji | tc)) === Gi)
                        for (var r = Uc(t, 1073741823, !0); null !== r;) r = r(!0);
                    else Ic(t, 99, 1073741823), ic === Gi && ml();
                else Ic(t, o, e);
                (4 & ic) === Gi || 98 !== o && 99 !== o || (null === Sc ? Sc = new Map([
                    [t, e]
                ]) : (void 0 === (o = Sc.get(t)) || o > e) && Sc.set(t, e)) } }

        function Dc(t, e) { t.expirationTime < e && (t.expirationTime = e); var o = t.alternate;
            null !== o && o.expirationTime < e && (o.expirationTime = e); var r = t.return,
                l = null; if (null === r && 3 === t.tag) l = t.stateNode;
            else
                for (; null !== r;) { if (o = r.alternate, r.childExpirationTime < e && (r.childExpirationTime = e), null !== o && o.childExpirationTime < e && (o.childExpirationTime = e), null === r.return && 3 === r.tag) { l = r.stateNode; break }
                    r = r.return }
            return null !== l && (e > l.firstPendingTime && (l.firstPendingTime = e), 0 === (t = l.lastPendingTime) || e < t) && (l.lastPendingTime = e), l }

        function Ic(t, e, o) { if (t.callbackExpirationTime < o) { var r = t.callbackNode;
                null !== r && r !== rl && Kr(r), t.callbackExpirationTime = o, 1073741823 === o ? t.callbackNode = gl(Mc.bind(null, t, Uc.bind(null, t, o))) : (r = null, 1 !== o && (r = { timeout: 10 * (1073741821 - o) - sl() }), t.callbackNode = fl(e, Mc.bind(null, t, Uc.bind(null, t, o)), r)) } }

        function Mc(t, e, o) { var r = t.callbackNode,
                l = null; try { return null !== (l = e(o)) ? Mc.bind(null, t, l) : null } finally { null === l && r === t.callbackNode && (t.callbackNode = null, t.callbackExpirationTime = 0) } }

        function Rc() {
            (ic & (1 | Ji | tc)) === Gi && (function() { if (null !== Sc) { var t = Sc;
                    Sc = null, t.forEach((function(t, e) { gl(Uc.bind(null, e, t)) })), ml() } }(), Kc()) }

        function Lc(t, e) { var o = ic;
            ic |= 1; try { return t(e) } finally {
                (ic = o) === Gi && ml() } }

        function zc(t, e, o, r) { var l = ic;
            ic |= 4; try { return dl(98, t.bind(null, e, o, r)) } finally {
                (ic = l) === Gi && ml() } }

        function Fc(t, e) { var o = ic;
            ic &= -2, ic |= Zi; try { return t(e) } finally {
                (ic = o) === Gi && ml() } }

        function Bc(t, e) { t.finishedWork = null, t.finishedExpirationTime = 0; var o = t.timeoutHandle; if (-1 !== o && (t.timeoutHandle = -1, Cr(o)), null !== ac)
                for (o = ac.return; null !== o;) { var r = o; switch (r.tag) {
                        case 1:
                            var l = r.type.childContextTypes;
                            null != l && Fr(); break;
                        case 3:
                            an(), Br(); break;
                        case 5:
                            pn(r); break;
                        case 4:
                            an(); break;
                        case 13:
                        case 19:
                            jr(gn); break;
                        case 10:
                            Sl(r) }
                    o = o.return }
            cc = t, ac = na(t.current, null), sc = e, pc = ec, dc = uc = 1073741823, fc = null, gc = !1 }

        function Uc(t, e, o) { if ((ic & (Ji | tc)) !== Gi) throw i(Error(327)); if (t.firstPendingTime < e) return null; if (o && t.finishedExpirationTime === e) return Vc.bind(null, t); if (Kc(), t !== cc || e !== sc) Bc(t, e);
            else if (pc === lc)
                if (gc) Bc(t, e);
                else { var r = t.lastPendingTime; if (r < e) return Uc.bind(null, t, r) }
            if (null !== ac) { r = ic, ic |= Ji; var l = Qi.current; if (null === l && (l = Zn), Qi.current = Zn, o) { if (1073741823 !== e) { var n = Nc(); if (n < e) return ic = r, kl(), Qi.current = l, Uc.bind(null, t, n) } } else Oc = 0; for (;;) try { if (o)
                        for (; null !== ac;) ac = Hc(ac);
                    else
                        for (; null !== ac && !$r();) ac = Hc(ac); break } catch (o) { if (kl(), Un(), null === (n = ac) || null === n.return) throw Bc(t, e), ic = r, o;
                    t: { var c = t,
                            a = n.return,
                            s = n,
                            p = o,
                            u = sc; if (s.effectTag |= 1024, s.firstEffect = s.lastEffect = null, null !== p && "object" == typeof p && "function" == typeof p.then) { var d = p,
                                f = 0 != (gn.current & dn);
                            p = a;
                            do { var g; if ((g = 13 === p.tag) && (null !== p.memoizedState ? g = !1 : g = void 0 !== (g = p.memoizedProps).fallback && (!0 !== g.unstable_avoidThisFallback || !f)), g) { if (null === (a = p.updateQueue) ? ((a = new Set).add(d), p.updateQueue = a) : a.add(d), 0 == (2 & p.mode)) { p.effectTag |= 64, s.effectTag &= -1957, 1 === s.tag && (null === s.alternate ? s.tag = 17 : ((u = Al(1073741823, null)).tag = 2, Il(s, u))), s.expirationTime = 1073741823; break t }
                                    s = c, c = u, null === (f = s.pingCache) ? (f = s.pingCache = new Vi, a = new Set, f.set(d, a)) : void 0 === (a = f.get(d)) && (a = new Set, f.set(d, a)), a.has(c) || (a.add(c), s = Gc.bind(null, s, d, c), d.then(s, s)), p.effectTag |= 2048, p.expirationTime = u; break t }
                                p = p.return } while (null !== p);
                            p = Error((pe(s.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + ue(s)) }
                        pc !== nc && (pc = oc), p = Di(p, s), s = a;do { switch (s.tag) {
                                case 3:
                                    s.effectTag |= 2048, s.expirationTime = u, Ml(s, u = Yi(s, p, u)); break t;
                                case 1:
                                    if (d = p, c = s.type, a = s.stateNode, 0 == (64 & s.effectTag) && ("function" == typeof c.getDerivedStateFromError || null !== a && "function" == typeof a.componentDidCatch && (null === xc || !xc.has(a)))) { s.effectTag |= 2048, s.expirationTime = u, Ml(s, u = Ki(s, d, u)); break t } }
                            s = s.return } while (null !== s) }
                    ac = Wc(n) }
                if (ic = r, kl(), Qi.current = l, null !== ac) return Uc.bind(null, t, e) } if (t.finishedWork = t.current.alternate, t.finishedExpirationTime = e, function(t, e) { var o = t.firstBatch; return !!(null !== o && o._defer && o._expirationTime >= e) && (fl(97, (function() { return o._onComplete(), null })), !0) }(t, e)) return null; switch (cc = null, pc) {
                case ec:
                    throw i(Error(328));
                case oc:
                    return (r = t.lastPendingTime) < e ? Uc.bind(null, t, r) : o ? Vc.bind(null, t) : (Bc(t, e), gl(Uc.bind(null, t, e)), null);
                case rc:
                    return 1073741823 === uc && !o && 10 < (o = mc + hc - sl()) ? gc ? (Bc(t, e), Uc.bind(null, t, e)) : (r = t.lastPendingTime) < e ? Uc.bind(null, t, r) : (t.timeoutHandle = Tr(Vc.bind(null, t), o), null) : Vc.bind(null, t);
                case lc:
                    if (!o) { if (gc) return Bc(t, e), Uc.bind(null, t, e); if ((o = t.lastPendingTime) < e) return Uc.bind(null, t, o); if (1073741823 !== dc ? o = 10 * (1073741821 - dc) - sl() : 1073741823 === uc ? o = 0 : (o = 10 * (1073741821 - uc) - 5e3, 0 > (o = (r = sl()) - o) && (o = 0), (e = 10 * (1073741821 - e) - r) < (o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * $i(o / 1960)) - o) && (o = e)), 10 < o) return t.timeoutHandle = Tr(Vc.bind(null, t), o), null } return Vc.bind(null, t);
                case nc:
                    return !o && 1073741823 !== uc && null !== fc && (r = uc, 0 >= (e = 0 | (l = fc).busyMinDurationMs) ? e = 0 : (o = 0 | l.busyDelayMs, e = (r = sl() - (10 * (1073741821 - r) - (0 | l.timeoutMs || 5e3))) <= o ? 0 : o + e - r), 10 < e) ? (t.timeoutHandle = Tr(Vc.bind(null, t), e), null) : Vc.bind(null, t);
                default:
                    throw i(Error(329)) } }

        function qc(t, e) { t < uc && 1 < t && (uc = t), null !== e && t < dc && 1 < t && (dc = t, fc = e) }

        function Hc(t) { var e = Jc(t.alternate, t, sc); return t.memoizedProps = t.pendingProps, null === e && (e = Wc(t)), Xi.current = null, e }

        function Wc(t) { ac = t;
            do { var e = ac.alternate; if (t = ac.return, 0 == (1024 & ac.effectTag)) { t: { var o = e,
                            r = sc,
                            n = (e = ac).pendingProps; switch (e.tag) {
                            case 2:
                            case 16:
                                break;
                            case 15:
                            case 0:
                                break;
                            case 1:
                                zr(e.type) && Fr(); break;
                            case 3:
                                an(), Br(), (r = e.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== o && null !== o.child || (ai(e), e.effectTag &= -3), Oi(e); break;
                            case 5:
                                pn(e), r = nn(ln.current); var c = e.type; if (null !== o && null != e.stateNode) Ni(o, e, c, n, r), o.ref !== e.ref && (e.effectTag |= 128);
                                else if (n) { var a = nn(on.current); if (ai(e)) { n = void 0, c = (o = e).stateNode; var s = o.type,
                                            p = o.memoizedProps; switch (c[I] = o, c[M] = p, s) {
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Mo("load", c); break;
                                            case "video":
                                            case "audio":
                                                for (var u = 0; u < ot.length; u++) Mo(ot[u], c); break;
                                            case "source":
                                                Mo("error", c); break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Mo("error", c), Mo("load", c); break;
                                            case "form":
                                                Mo("reset", c), Mo("submit", c); break;
                                            case "details":
                                                Mo("toggle", c); break;
                                            case "input":
                                                ke(c, p), Mo("invalid", c), xr(r, "onChange"); break;
                                            case "select":
                                                c._wrapperState = { wasMultiple: !!p.multiple }, Mo("invalid", c), xr(r, "onChange"); break;
                                            case "textarea":
                                                lr(c, p), Mo("invalid", c), xr(r, "onChange") } for (n in vr(s, p), u = null, p) p.hasOwnProperty(n) && (a = p[n], "children" === n ? "string" == typeof a ? c.textContent !== a && (u = ["children", a]) : "number" == typeof a && c.textContent !== "" + a && (u = ["children", "" + a]) : f.hasOwnProperty(n) && null != a && xr(r, n)); switch (s) {
                                            case "input":
                                                Wt(c), Te(c, p, !0); break;
                                            case "textarea":
                                                Wt(c), ir(c); break;
                                            case "select":
                                            case "option":
                                                break;
                                            default:
                                                "function" == typeof p.onClick && (c.onclick = wr) }
                                        r = u, o.updateQueue = r, null !== r && Ti(e) } else { p = c, o = n, s = e, u = 9 === r.nodeType ? r : r.ownerDocument, a === cr.html && (a = ar(p)), a === cr.html ? "script" === p ? ((p = u.createElement("div")).innerHTML = "<script><\/script>", u = p.removeChild(p.firstChild)) : "string" == typeof o.is ? u = u.createElement(p, { is: o.is }) : (u = u.createElement(p), "select" === p && (p = u, o.multiple ? p.multiple = !0 : o.size && (p.size = o.size))) : u = u.createElementNS(a, p), (p = u)[I] = s, p[M] = o, Ci(o = p, e, !1, !1), s = o; var d = r,
                                            g = yr(c, n); switch (c) {
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Mo("load", s), r = n; break;
                                            case "video":
                                            case "audio":
                                                for (r = 0; r < ot.length; r++) Mo(ot[r], s);
                                                r = n; break;
                                            case "source":
                                                Mo("error", s), r = n; break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Mo("error", s), Mo("load", s), r = n; break;
                                            case "form":
                                                Mo("reset", s), Mo("submit", s), r = n; break;
                                            case "details":
                                                Mo("toggle", s), r = n; break;
                                            case "input":
                                                ke(s, n), r = _e(s, n), Mo("invalid", s), xr(d, "onChange"); break;
                                            case "option":
                                                r = er(s, n); break;
                                            case "select":
                                                s._wrapperState = { wasMultiple: !!n.multiple }, r = l({}, n, { value: void 0 }), Mo("invalid", s), xr(d, "onChange"); break;
                                            case "textarea":
                                                lr(s, n), r = rr(s, n), Mo("invalid", s), xr(d, "onChange"); break;
                                            default:
                                                r = n }
                                        vr(c, r), p = void 0, u = c, a = s; var m = r; for (p in m)
                                            if (m.hasOwnProperty(p)) { var h = m[p]; "style" === p ? hr(a, h) : "dangerouslySetInnerHTML" === p ? null != (h = h ? h.__html : void 0) && ur(a, h) : "children" === p ? "string" == typeof h ? ("textarea" !== u || "" !== h) && dr(a, h) : "number" == typeof h && dr(a, "" + h) : "suppressContentEditableWarning" !== p && "suppressHydrationWarning" !== p && "autoFocus" !== p && (f.hasOwnProperty(p) ? null != h && xr(d, p) : null != h && xe(a, p, h, g)) }
                                        switch (c) {
                                            case "input":
                                                Wt(s), Te(s, n, !1); break;
                                            case "textarea":
                                                Wt(s), ir(s); break;
                                            case "option":
                                                null != n.value && s.setAttribute("value", "" + we(n.value)); break;
                                            case "select":
                                                r = s, s = n, r.multiple = !!s.multiple, null != (p = s.value) ? or(r, !!s.multiple, p, !1) : null != s.defaultValue && or(r, !!s.multiple, s.defaultValue, !0); break;
                                            default:
                                                "function" == typeof r.onClick && (s.onclick = wr) }
                                        Er(c, n) && Ti(e), e.stateNode = o }
                                    null !== e.ref && (e.effectTag |= 128) } else if (null === e.stateNode) throw i(Error(166)); break;
                            case 6:
                                if (o && null != e.stateNode) Pi(o, e, o.memoizedProps, n);
                                else { if ("string" != typeof n && null === e.stateNode) throw i(Error(166));
                                    o = nn(ln.current), nn(on.current), ai(e) ? (r = e.stateNode, o = e.memoizedProps, r[I] = e, r.nodeValue !== o && Ti(e)) : (r = e, (o = (9 === o.nodeType ? o : o.ownerDocument).createTextNode(n))[I] = e, r.stateNode = o) } break;
                            case 11:
                                break;
                            case 13:
                                if (jr(gn), n = e.memoizedState, 0 != (64 & e.effectTag)) { e.expirationTime = r; break t }
                                r = null !== n, n = !1, null === o ? ai(e) : (n = null !== (c = o.memoizedState), r || null === c || null !== (c = o.child.sibling) && (null !== (s = e.firstEffect) ? (e.firstEffect = c, c.nextEffect = s) : (e.firstEffect = e.lastEffect = c, c.nextEffect = null), c.effectTag = 8)), r && !n && 0 != (2 & e.mode) && (null === o && !0 !== e.memoizedProps.unstable_avoidThisFallback || 0 != (gn.current & dn) ? pc === ec && (pc = rc) : pc !== ec && pc !== rc || (pc = lc)), (r || n) && (e.effectTag |= 4); break;
                            case 7:
                            case 8:
                            case 12:
                                break;
                            case 4:
                                an(), Oi(e); break;
                            case 10:
                                Sl(e); break;
                            case 9:
                            case 14:
                                break;
                            case 17:
                                zr(e.type) && Fr(); break;
                            case 18:
                                break;
                            case 19:
                                if (jr(gn), null === (n = e.memoizedState)) break; if (c = 0 != (64 & e.effectTag), null === (s = n.rendering)) { if (c) ji(n, !1);
                                    else if (pc !== ec || null !== o && 0 != (64 & o.effectTag))
                                        for (o = e.child; null !== o;) { if (null !== (s = mn(o))) { for (e.effectTag |= 64, ji(n, !1), null !== (o = s.updateQueue) && (e.updateQueue = o, e.effectTag |= 4), e.firstEffect = e.lastEffect = null, o = e.child; null !== o;) c = r, (n = o).effectTag &= 2, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null, null === (s = n.alternate) ? (n.childExpirationTime = 0, n.expirationTime = c, n.child = null, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null) : (n.childExpirationTime = s.childExpirationTime, n.expirationTime = s.expirationTime, n.child = s.child, n.memoizedProps = s.memoizedProps, n.memoizedState = s.memoizedState, n.updateQueue = s.updateQueue, c = s.dependencies, n.dependencies = null === c ? null : { expirationTime: c.expirationTime, firstContext: c.firstContext, responders: c.responders }), o = o.sibling;
                                                Ar(gn, gn.current & un | fn), e = e.child; break t }
                                            o = o.sibling } } else { if (!c)
                                        if (null !== (o = mn(s))) { if (e.effectTag |= 64, c = !0, ji(n, !0), null === n.tail && "hidden" === n.tailMode) { null !== (r = o.updateQueue) && (e.updateQueue = r, e.effectTag |= 4), null !== (e = e.lastEffect = n.lastEffect) && (e.nextEffect = null); break } } else sl() > n.tailExpiration && 1 < r && (e.effectTag |= 64, c = !0, ji(n, !1), e.expirationTime = e.childExpirationTime = r - 1);
                                    n.isBackwards ? (s.sibling = e.child, e.child = s) : (null !== (r = n.last) ? r.sibling = s : e.child = s, n.last = s) } if (null !== n.tail) { 0 === n.tailExpiration && (n.tailExpiration = sl() + 500), r = n.tail, n.rendering = r, n.tail = r.sibling, n.lastEffect = e.lastEffect, r.sibling = null, o = gn.current, Ar(gn, o = c ? o & un | fn : o & un), e = r; break t } break;
                            case 20:
                                break;
                            default:
                                throw i(Error(156)) }
                        e = null } if (r = ac, 1 === sc || 1 !== r.childExpirationTime) { for (o = 0, n = r.child; null !== n;)(c = n.expirationTime) > o && (o = c), (s = n.childExpirationTime) > o && (o = s), n = n.sibling;
                        r.childExpirationTime = o } if (null !== e) return e;null !== t && 0 == (1024 & t.effectTag) && (null === t.firstEffect && (t.firstEffect = ac.firstEffect), null !== ac.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = ac.firstEffect), t.lastEffect = ac.lastEffect), 1 < ac.effectTag && (null !== t.lastEffect ? t.lastEffect.nextEffect = ac : t.firstEffect = ac, t.lastEffect = ac)) }
                else { if (null !== (e = Ai(ac))) return e.effectTag &= 1023, e;
                    null !== t && (t.firstEffect = t.lastEffect = null, t.effectTag |= 1024) } if (null !== (e = ac.sibling)) return e;
                ac = t } while (null !== ac); return pc === ec && (pc = nc), null }

        function Vc(t) { var e = pl(); return dl(99, Yc.bind(null, t, e)), null !== _c && fl(97, (function() { return Kc(), null })), null }

        function Yc(t, e) { if (Kc(), (ic & (Ji | tc)) !== Gi) throw i(Error(327)); var o = t.finishedWork,
                r = t.finishedExpirationTime; if (null === o) return null; if (t.finishedWork = null, t.finishedExpirationTime = 0, o === t.current) throw i(Error(177));
            t.callbackNode = null, t.callbackExpirationTime = 0; var l = o.expirationTime,
                n = o.childExpirationTime; if (l = n > l ? n : l, t.firstPendingTime = l, l < t.lastPendingTime && (t.lastPendingTime = l), t === cc && (ac = cc = null, sc = 0), 1 < o.effectTag ? null !== o.lastEffect ? (o.lastEffect.nextEffect = o, l = o.firstEffect) : l = o : l = o.firstEffect, null !== l) { n = ic, ic |= tc, Xi.current = null, _r = Io; var c = Vo(); if (Yo(c)) { if ("selectionStart" in c) var a = { start: c.selectionStart, end: c.selectionEnd };
                    else t: { var s = (a = (a = c.ownerDocument) && a.defaultView || window).getSelection && a.getSelection(); if (s && 0 !== s.rangeCount) { a = s.anchorNode; var p = s.anchorOffset,
                                u = s.focusNode;
                            s = s.focusOffset; try { a.nodeType, u.nodeType } catch (t) { a = null; break t } var d = 0,
                                f = -1,
                                g = -1,
                                m = 0,
                                h = 0,
                                b = c,
                                v = null;
                            e: for (;;) { for (var y; b !== a || 0 !== p && 3 !== b.nodeType || (f = d + p), b !== u || 0 !== s && 3 !== b.nodeType || (g = d + s), 3 === b.nodeType && (d += b.nodeValue.length), null !== (y = b.firstChild);) v = b, b = y; for (;;) { if (b === c) break e; if (v === a && ++m === p && (f = d), v === u && ++h === s && (g = d), null !== (y = b.nextSibling)) break;
                                    v = (b = v).parentNode }
                                b = y }
                            a = -1 === f || -1 === g ? null : { start: f, end: g } } else a = null }
                    a = a || { start: 0, end: 0 } } else a = null;
                kr = { focusedElem: c, selectionRange: a }, Io = !1, bc = l;
                do { try { for (; null !== bc;) { if (0 != (256 & bc.effectTag)) { var x = bc.alternate; switch ((c = bc).tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Li(bn, hn, c); break;
                                    case 1:
                                        if (256 & c.effectTag && null !== x) { var w = x.memoizedProps,
                                                _ = x.memoizedState,
                                                k = c.stateNode,
                                                E = k.getSnapshotBeforeUpdate(c.elementType === c.type ? w : vl(c.type, w), _);
                                            k.__reactInternalSnapshotBeforeUpdate = E } break;
                                    case 3:
                                    case 5:
                                    case 6:
                                    case 4:
                                    case 17:
                                        break;
                                    default:
                                        throw i(Error(163)) } }
                            bc = bc.nextEffect } } catch (t) { if (null === bc) throw i(Error(330));
                        Xc(bc, t), bc = bc.nextEffect } } while (null !== bc);
                bc = l;
                do { try { for (x = e; null !== bc;) { var S = bc.effectTag; if (16 & S && dr(bc.stateNode, ""), 128 & S) { var T = bc.alternate; if (null !== T) { var C = T.ref;
                                    null !== C && ("function" == typeof C ? C(null) : C.current = null) } } switch (14 & S) {
                                case 2:
                                    Ui(bc), bc.effectTag &= -3; break;
                                case 6:
                                    Ui(bc), bc.effectTag &= -3, Hi(bc.alternate, bc); break;
                                case 4:
                                    Hi(bc.alternate, bc); break;
                                case 8:
                                    qi(w = bc, x), w.return = null, w.child = null, w.memoizedState = null, w.updateQueue = null, w.dependencies = null; var O = w.alternate;
                                    null !== O && (O.return = null, O.child = null, O.memoizedState = null, O.updateQueue = null, O.dependencies = null) }
                            bc = bc.nextEffect } } catch (t) { if (null === bc) throw i(Error(330));
                        Xc(bc, t), bc = bc.nextEffect } } while (null !== bc); if (C = kr, T = Vo(), S = C.focusedElem, x = C.selectionRange, T !== S && S && S.ownerDocument && function t(e, o) { return !(!e || !o) && (e === o || (!e || 3 !== e.nodeType) && (o && 3 === o.nodeType ? t(e, o.parentNode) : "contains" in e ? e.contains(o) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(o)))) }(S.ownerDocument.documentElement, S)) { null !== x && Yo(S) && (T = x.start, void 0 === (C = x.end) && (C = T), "selectionStart" in S ? (S.selectionStart = T, S.selectionEnd = Math.min(C, S.value.length)) : (C = (T = S.ownerDocument || document) && T.defaultView || window).getSelection && (C = C.getSelection(), w = S.textContent.length, O = Math.min(x.start, w), x = void 0 === x.end ? O : Math.min(x.end, w), !C.extend && O > x && (w = x, x = O, O = w), w = Wo(S, O), _ = Wo(S, x), w && _ && (1 !== C.rangeCount || C.anchorNode !== w.node || C.anchorOffset !== w.offset || C.focusNode !== _.node || C.focusOffset !== _.offset) && ((T = T.createRange()).setStart(w.node, w.offset), C.removeAllRanges(), O > x ? (C.addRange(T), C.extend(_.node, _.offset)) : (T.setEnd(_.node, _.offset), C.addRange(T))))), T = []; for (C = S; C = C.parentNode;) 1 === C.nodeType && T.push({ element: C, left: C.scrollLeft, top: C.scrollTop }); for ("function" == typeof S.focus && S.focus(), S = 0; S < T.length; S++)(C = T[S]).element.scrollLeft = C.left, C.element.scrollTop = C.top }
                kr = null, Io = !!_r, _r = null, t.current = o, bc = l;
                do { try { for (S = r; null !== bc;) { var N = bc.effectTag; if (36 & N) { var P = bc.alternate; switch (C = S, (T = bc).tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Li(xn, wn, T); break;
                                    case 1:
                                        var j = T.stateNode; if (4 & T.effectTag)
                                            if (null === P) j.componentDidMount();
                                            else { var A = T.elementType === T.type ? P.memoizedProps : vl(T.type, P.memoizedProps);
                                                j.componentDidUpdate(A, P.memoizedState, j.__reactInternalSnapshotBeforeUpdate) }
                                        var D = T.updateQueue;
                                        null !== D && Fl(0, D, j); break;
                                    case 3:
                                        var I = T.updateQueue; if (null !== I) { if (O = null, null !== T.child) switch (T.child.tag) {
                                                case 5:
                                                    O = T.child.stateNode; break;
                                                case 1:
                                                    O = T.child.stateNode }
                                            Fl(0, I, O) } break;
                                    case 5:
                                        var M = T.stateNode;
                                        null === P && 4 & T.effectTag && (C = M, Er(T.type, T.memoizedProps) && C.focus()); break;
                                    case 6:
                                    case 4:
                                    case 12:
                                        break;
                                    case 13:
                                    case 19:
                                    case 17:
                                    case 20:
                                        break;
                                    default:
                                        throw i(Error(163)) } } if (128 & N) { var R = bc.ref; if (null !== R) { var L = bc.stateNode; switch (bc.tag) {
                                        case 5:
                                            var z = L; break;
                                        default:
                                            z = L } "function" == typeof R ? R(z) : R.current = z } }
                            512 & N && (wc = !0), bc = bc.nextEffect } } catch (t) { if (null === bc) throw i(Error(330));
                        Xc(bc, t), bc = bc.nextEffect } } while (null !== bc);
                bc = null, ll(), ic = n } else t.current = o; if (wc) wc = !1, _c = t, Ec = r, kc = e;
            else
                for (bc = l; null !== bc;) e = bc.nextEffect, bc.nextEffect = null, bc = e; if (0 !== (e = t.firstPendingTime) ? Ic(t, N = bl(N = Nc(), e), e) : xc = null, "function" == typeof ta && ta(o.stateNode, r), 1073741823 === e ? t === Cc ? Tc++ : (Tc = 0, Cc = t) : Tc = 0, vc) throw vc = !1, t = yc, yc = null, t; return (ic & Zi) !== Gi ? null : (ml(), null) }

        function Kc() { if (null === _c) return !1; var t = _c,
                e = Ec,
                o = kc; return _c = null, Ec = 0, kc = 90, dl(97 < o ? 97 : o, $c.bind(null, t, e)) }

        function $c(t) { if ((ic & (Ji | tc)) !== Gi) throw i(Error(331)); var e = ic; for (ic |= tc, t = t.current.firstEffect; null !== t;) { try { var o = t; if (0 != (512 & o.effectTag)) switch (o.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Li(kn, hn, o), Li(hn, _n, o) } } catch (e) { if (null === t) throw i(Error(330));
                    Xc(t, e) }
                o = t.nextEffect, t.nextEffect = null, t = o } return ic = e, ml(), !0 }

        function Qc(t, e, o) { Il(t, e = Yi(t, e = Di(o, e), 1073741823)), null !== (t = Dc(t, 1073741823)) && Ic(t, 99, 1073741823) }

        function Xc(t, e) { if (3 === t.tag) Qc(t, t, e);
            else
                for (var o = t.return; null !== o;) { if (3 === o.tag) { Qc(o, t, e); break } if (1 === o.tag) { var r = o.stateNode; if ("function" == typeof o.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === xc || !xc.has(r))) { Il(o, t = Ki(o, t = Di(e, t), 1073741823)), null !== (o = Dc(o, 1073741823)) && Ic(o, 99, 1073741823); break } }
                    o = o.return } }

        function Gc(t, e, o) { var r = t.pingCache;
            null !== r && r.delete(e), cc === t && sc === o ? pc === lc || pc === rc && 1073741823 === uc && sl() - mc < hc ? Bc(t, sc) : gc = !0 : t.lastPendingTime < o || (0 !== (e = t.pingTime) && e < o || (t.pingTime = o, t.finishedExpirationTime === o && (t.finishedExpirationTime = 0, t.finishedWork = null), Ic(t, e = bl(e = Nc(), o), o))) }

        function Zc(t, e) { var o = t.stateNode;
            null !== o && o.delete(e), o = bl(o = Nc(), e = Pc(o, t, null)), null !== (t = Dc(t, e)) && Ic(t, o, e) } var Jc = void 0;
        Jc = function(t, e, o) { var r = e.expirationTime; if (null !== t) { var l = e.pendingProps; if (t.memoizedProps !== l || Mr.current) ui = !0;
                else if (r < o) { switch (ui = !1, e.tag) {
                        case 3:
                            xi(e), si(); break;
                        case 5:
                            if (sn(e), 4 & e.mode && 1 !== o && l.hidden) return e.expirationTime = e.childExpirationTime = 1, null; break;
                        case 1:
                            zr(e.type) && Hr(e); break;
                        case 4:
                            cn(e, e.stateNode.containerInfo); break;
                        case 10:
                            El(e, e.memoizedProps.value); break;
                        case 13:
                            if (null !== e.memoizedState) return 0 !== (r = e.child.childExpirationTime) && r >= o ? _i(t, e, o) : (Ar(gn, gn.current & un), null !== (e = Si(t, e, o)) ? e.sibling : null);
                            Ar(gn, gn.current & un); break;
                        case 19:
                            if (r = e.childExpirationTime >= o, 0 != (64 & t.effectTag)) { if (r) return Ei(t, e, o);
                                e.effectTag |= 64 } if (null !== (l = e.memoizedState) && (l.rendering = null, l.tail = null), Ar(gn, gn.current), !r) return null } return Si(t, e, o) } } else ui = !1; switch (e.expirationTime = 0, e.tag) {
                case 2:
                    if (r = e.type, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, l = Lr(e, Ir.current), Cl(e, o), l = Bn(null, e, r, t, l, o), e.effectTag |= 1, "object" == typeof l && null !== l && "function" == typeof l.render && void 0 === l.$$typeof) { if (e.tag = 1, Un(), zr(r)) { var n = !0;
                            Hr(e) } else n = !1;
                        e.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null; var c = r.getDerivedStateFromProps; "function" == typeof c && Hl(e, r, c, t), l.updater = Wl, e.stateNode = l, l._reactInternalFiber = e, $l(e, r, t, o), e = yi(null, e, r, !0, n, o) } else e.tag = 0, di(null, e, l, o), e = e.child; return e;
                case 16:
                    switch (l = e.elementType, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, l = function(t) { var e = t._result; switch (t._status) {
                            case 1:
                                return e;
                            case 2:
                            case 0:
                                throw e;
                            default:
                                switch (t._status = 0, (e = (e = t._ctor)()).then((function(e) { 0 === t._status && (e = e.default, t._status = 1, t._result = e) }), (function(e) { 0 === t._status && (t._status = 2, t._result = e) })), t._status) {
                                    case 1:
                                        return t._result;
                                    case 2:
                                        throw t._result } throw t._result = e, e } }(l), e.type = l, n = e.tag = function(t) { if ("function" == typeof t) return la(t) ? 1 : 0; if (null != t) { if ((t = t.$$typeof) === re) return 11; if (t === ie) return 14 } return 2 }(l), t = vl(l, t), n) {
                        case 0:
                            e = bi(null, e, l, t, o); break;
                        case 1:
                            e = vi(null, e, l, t, o); break;
                        case 11:
                            e = fi(null, e, l, t, o); break;
                        case 14:
                            e = gi(null, e, l, vl(l.type, t), r, o); break;
                        default:
                            throw i(Error(306), l, "") } return e;
                case 0:
                    return r = e.type, l = e.pendingProps, bi(t, e, r, l = e.elementType === r ? l : vl(r, l), o);
                case 1:
                    return r = e.type, l = e.pendingProps, vi(t, e, r, l = e.elementType === r ? l : vl(r, l), o);
                case 3:
                    if (xi(e), null === (r = e.updateQueue)) throw i(Error(282)); return l = null !== (l = e.memoizedState) ? l.element : null, zl(e, r, e.pendingProps, null, o), (r = e.memoizedState.element) === l ? (si(), e = Si(t, e, o)) : (l = e.stateNode, (l = (null === t || null === t.child) && l.hydrate) && (oi = Or(e.stateNode.containerInfo.firstChild), ei = e, l = ri = !0), l ? (e.effectTag |= 2, e.child = tn(e, null, r, o)) : (di(t, e, r, o), si()), e = e.child), e;
                case 5:
                    return sn(e), null === t && ii(e), r = e.type, l = e.pendingProps, n = null !== t ? t.memoizedProps : null, c = l.children, Sr(r, l) ? c = null : null !== n && Sr(r, n) && (e.effectTag |= 16), hi(t, e), 4 & e.mode && 1 !== o && l.hidden ? (e.expirationTime = e.childExpirationTime = 1, e = null) : (di(t, e, c, o), e = e.child), e;
                case 6:
                    return null === t && ii(e), null;
                case 13:
                    return _i(t, e, o);
                case 4:
                    return cn(e, e.stateNode.containerInfo), r = e.pendingProps, null === t ? e.child = Jl(e, null, r, o) : di(t, e, r, o), e.child;
                case 11:
                    return r = e.type, l = e.pendingProps, fi(t, e, r, l = e.elementType === r ? l : vl(r, l), o);
                case 7:
                    return di(t, e, e.pendingProps, o), e.child;
                case 8:
                case 12:
                    return di(t, e, e.pendingProps.children, o), e.child;
                case 10:
                    t: { if (r = e.type._context, l = e.pendingProps, c = e.memoizedProps, El(e, n = l.value), null !== c) { var a = c.value; if (0 === (n = eo(a, n) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(a, n) : 1073741823))) { if (c.children === l.children && !Mr.current) { e = Si(t, e, o); break t } } else
                                for (null !== (a = e.child) && (a.return = e); null !== a;) { var s = a.dependencies; if (null !== s) { c = a.child; for (var p = s.firstContext; null !== p;) { if (p.context === r && 0 != (p.observedBits & n)) { 1 === a.tag && ((p = Al(o, null)).tag = 2, Il(a, p)), a.expirationTime < o && (a.expirationTime = o), null !== (p = a.alternate) && p.expirationTime < o && (p.expirationTime = o), Tl(a.return, o), s.expirationTime < o && (s.expirationTime = o); break }
                                            p = p.next } } else c = 10 === a.tag && a.type === e.type ? null : a.child; if (null !== c) c.return = a;
                                    else
                                        for (c = a; null !== c;) { if (c === e) { c = null; break } if (null !== (a = c.sibling)) { a.return = c.return, c = a; break }
                                            c = c.return }
                                    a = c } }
                        di(t, e, l.children, o), e = e.child }
                    return e;
                case 9:
                    return l = e.type, r = (n = e.pendingProps).children, Cl(e, o), r = r(l = Ol(l, n.unstable_observedBits)), e.effectTag |= 1, di(t, e, r, o), e.child;
                case 14:
                    return n = vl(l = e.type, e.pendingProps), gi(t, e, l, n = vl(l.type, n), r, o);
                case 15:
                    return mi(t, e, e.type, e.pendingProps, r, o);
                case 17:
                    return r = e.type, l = e.pendingProps, l = e.elementType === r ? l : vl(r, l), null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), e.tag = 1, zr(r) ? (t = !0, Hr(e)) : t = !1, Cl(e, o), Yl(e, r, l), $l(e, r, l, o), yi(null, e, r, !0, t, o);
                case 19:
                    return Ei(t, e, o) } throw i(Error(156)) }; var ta = null,
            ea = null;

        function oa(t, e, o, r) { this.tag = t, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null }

        function ra(t, e, o, r) { return new oa(t, e, o, r) }

        function la(t) { return !(!(t = t.prototype) || !t.isReactComponent) }

        function na(t, e) { var o = t.alternate; return null === o ? ((o = ra(t.tag, e, t.key, t.mode)).elementType = t.elementType, o.type = t.type, o.stateNode = t.stateNode, o.alternate = t, t.alternate = o) : (o.pendingProps = e, o.effectTag = 0, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null), o.childExpirationTime = t.childExpirationTime, o.expirationTime = t.expirationTime, o.child = t.child, o.memoizedProps = t.memoizedProps, o.memoizedState = t.memoizedState, o.updateQueue = t.updateQueue, e = t.dependencies, o.dependencies = null === e ? null : { expirationTime: e.expirationTime, firstContext: e.firstContext, responders: e.responders }, o.sibling = t.sibling, o.index = t.index, o.ref = t.ref, o }

        function ia(t, e, o, r, l, n) { var c = 2; if (r = t, "function" == typeof t) la(t) && (c = 1);
            else if ("string" == typeof t) c = 5;
            else t: switch (t) {
                case Gt:
                    return ca(o.children, l, n, e);
                case oe:
                    c = 8, l |= 7; break;
                case Zt:
                    c = 8, l |= 1; break;
                case Jt:
                    return (t = ra(12, o, e, 8 | l)).elementType = Jt, t.type = Jt, t.expirationTime = n, t;
                case le:
                    return (t = ra(13, o, e, l)).type = le, t.elementType = le, t.expirationTime = n, t;
                case ne:
                    return (t = ra(19, o, e, l)).elementType = ne, t.expirationTime = n, t;
                default:
                    if ("object" == typeof t && null !== t) switch (t.$$typeof) {
                        case te:
                            c = 10; break t;
                        case ee:
                            c = 9; break t;
                        case re:
                            c = 11; break t;
                        case ie:
                            c = 14; break t;
                        case ce:
                            c = 16, r = null; break t }
                    throw i(Error(130), null == t ? t : typeof t, "") }
            return (e = ra(c, o, e, l)).elementType = t, e.type = r, e.expirationTime = n, e }

        function ca(t, e, o, r) { return (t = ra(7, t, r, e)).expirationTime = o, t }

        function aa(t, e, o) { return (t = ra(6, t, null, e)).expirationTime = o, t }

        function sa(t, e, o) { return (e = ra(4, null !== t.children ? t.children : [], t.key, e)).expirationTime = o, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e }

        function pa(t, e, o) { this.tag = e, this.current = null, this.containerInfo = t, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = o, this.callbackNode = this.firstBatch = null, this.pingTime = this.lastPendingTime = this.firstPendingTime = this.callbackExpirationTime = 0 }

        function ua(t, e, o) { return t = new pa(t, e, o), e = ra(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0), t.current = e, e.stateNode = t }

        function da(t, e, o, r, l, n) { var c = e.current;
            t: if (o) { e: { if (2 !== no(o = o._reactInternalFiber) || 1 !== o.tag) throw i(Error(170)); var a = o;do { switch (a.tag) {
                                case 3:
                                    a = a.stateNode.context; break e;
                                case 1:
                                    if (zr(a.type)) { a = a.stateNode.__reactInternalMemoizedMergedChildContext; break e } }
                            a = a.return } while (null !== a); throw i(Error(171)) } if (1 === o.tag) { var s = o.type; if (zr(s)) { o = qr(o, s, a); break t } }
                    o = a }
                else o = Dr; return null === e.context ? e.context = o : e.pendingContext = o, e = n, (l = Al(r, l)).payload = { element: t }, null !== (e = void 0 === e ? null : e) && (l.callback = e), Il(c, l), Ac(c, r), r }

        function fa(t, e, o, r) { var l = e.current,
                n = Nc(),
                i = Ul.suspense; return da(t, e, o, l = Pc(n, l, i), i, r) }

        function ga(t) { if (!(t = t.current).child) return null; switch (t.child.tag) {
                case 5:
                default:
                    return t.child.stateNode } }

        function ma(t) { var e = 1073741821 - 25 * (1 + ((1073741821 - Nc() + 500) / 25 | 0));
            e <= jc && --e, this._expirationTime = jc = e, this._root = t, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0 }

        function ha() { this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this) }

        function ba(t, e, o) { this._internalRoot = ua(t, e, o) }

        function va(t, e) { this._internalRoot = ua(t, 2, e) }

        function ya(t) { return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue)) }

        function xa(t, e, o, r, l) { var n = o._reactRootContainer,
                i = void 0; if (n) { if (i = n._internalRoot, "function" == typeof l) { var c = l;
                    l = function() { var t = ga(i);
                        c.call(t) } }
                fa(e, i, t, l) } else { if (n = o._reactRootContainer = function(t, e) { if (e || (e = !(!(e = t ? 9 === t.nodeType ? t.documentElement : t.firstChild : null) || 1 !== e.nodeType || !e.hasAttribute("data-reactroot"))), !e)
                            for (var o; o = t.lastChild;) t.removeChild(o); return new ba(t, 0, e) }(o, r), i = n._internalRoot, "function" == typeof l) { var a = l;
                    l = function() { var t = ga(i);
                        a.call(t) } }
                Fc((function() { fa(e, i, t, l) })) } return ga(i) }

        function wa(t, e) { var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!ya(e)) throw i(Error(200)); return function(t, e, o) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: Xt, key: null == r ? null : "" + r, children: t, containerInfo: e, implementation: o } }(t, e, null, o) }
        Ct = function(t, e, o) { switch (e) {
                case "input":
                    if (Se(t, o), e = o.name, "radio" === o.type && null != e) { for (o = t; o.parentNode;) o = o.parentNode; for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < o.length; e++) { var r = o[e]; if (r !== t && r.form === t.form) { var l = F(r); if (!l) throw i(Error(90));
                                Vt(r), Se(r, l) } } } break;
                case "textarea":
                    nr(t, o); break;
                case "select":
                    null != (e = o.value) && or(t, !!o.multiple, e, !1) } }, ma.prototype.render = function(t) { if (!this._defer) throw i(Error(250));
            this._hasChildren = !0, this._children = t; var e = this._root._internalRoot,
                o = this._expirationTime,
                r = new ha; return da(t, e, null, o, null, r._onCommit), r }, ma.prototype.then = function(t) { if (this._didComplete) t();
            else { var e = this._callbacks;
                null === e && (e = this._callbacks = []), e.push(t) } }, ma.prototype.commit = function() { var t = this._root._internalRoot,
                e = t.firstBatch; if (!this._defer || null === e) throw i(Error(251)); if (this._hasChildren) { var o = this._expirationTime; if (e !== this) { this._hasChildren && (o = this._expirationTime = e._expirationTime, this.render(this._children)); for (var r = null, l = e; l !== this;) r = l, l = l._next; if (null === r) throw i(Error(251));
                    r._next = l._next, this._next = e, t.firstBatch = this } if (this._defer = !1, e = o, (ic & (Ji | tc)) !== Gi) throw i(Error(253));
                gl(Uc.bind(null, t, e)), ml(), e = this._next, this._next = null, null !== (e = t.firstBatch = e) && e._hasChildren && e.render(e._children) } else this._next = null, this._defer = !1 }, ma.prototype._onComplete = function() { if (!this._didComplete) { this._didComplete = !0; var t = this._callbacks; if (null !== t)
                    for (var e = 0; e < t.length; e++)(0, t[e])() } }, ha.prototype.then = function(t) { if (this._didCommit) t();
            else { var e = this._callbacks;
                null === e && (e = this._callbacks = []), e.push(t) } }, ha.prototype._onCommit = function() { if (!this._didCommit) { this._didCommit = !0; var t = this._callbacks; if (null !== t)
                    for (var e = 0; e < t.length; e++) { var o = t[e]; if ("function" != typeof o) throw i(Error(191), o);
                        o() } } }, va.prototype.render = ba.prototype.render = function(t, e) { var o = this._internalRoot,
                r = new ha; return null !== (e = void 0 === e ? null : e) && r.then(e), fa(t, o, null, r._onCommit), r }, va.prototype.unmount = ba.prototype.unmount = function(t) { var e = this._internalRoot,
                o = new ha; return null !== (t = void 0 === t ? null : t) && o.then(t), fa(null, e, null, o._onCommit), o }, va.prototype.createBatch = function() { var t = new ma(this),
                e = t._expirationTime,
                o = this._internalRoot,
                r = o.firstBatch; if (null === r) o.firstBatch = t, t._next = null;
            else { for (o = null; null !== r && r._expirationTime >= e;) o = r, r = r._next;
                t._next = r, null !== o && (o._next = t) } return t }, Dt = Lc, It = zc, Mt = Rc, Rt = function(t, e) { var o = ic;
            ic |= 2; try { return t(e) } finally {
                (ic = o) === Gi && ml() } }; var _a, ka, Ea = { createPortal: wa, findDOMNode: function(t) { if (null == t) t = null;
                else if (1 !== t.nodeType) { var e = t._reactInternalFiber; if (void 0 === e) { if ("function" == typeof t.render) throw i(Error(188)); throw i(Error(268), Object.keys(t)) }
                    t = null === (t = co(e)) ? null : t.stateNode } return t }, hydrate: function(t, e, o) { if (!ya(e)) throw i(Error(200)); return xa(null, t, e, !0, o) }, render: function(t, e, o) { if (!ya(e)) throw i(Error(200)); return xa(null, t, e, !1, o) }, unstable_renderSubtreeIntoContainer: function(t, e, o, r) { if (!ya(o)) throw i(Error(200)); if (null == t || void 0 === t._reactInternalFiber) throw i(Error(38)); return xa(t, e, o, !1, r) }, unmountComponentAtNode: function(t) { if (!ya(t)) throw i(Error(40)); return !!t._reactRootContainer && (Fc((function() { xa(null, null, t, !1, (function() { t._reactRootContainer = null })) })), !0) }, unstable_createPortal: function() { return wa.apply(void 0, arguments) }, unstable_batchedUpdates: Lc, unstable_interactiveUpdates: function(t, e, o, r) { return Rc(), zc(t, e, o, r) }, unstable_discreteUpdates: zc, unstable_flushDiscreteUpdates: Rc, flushSync: function(t, e) { if ((ic & (Ji | tc)) !== Gi) throw i(Error(187)); var o = ic;
                ic |= 1; try { return dl(99, t.bind(null, e)) } finally { ic = o, ml() } }, unstable_createRoot: function(t, e) { if (!ya(t)) throw i(Error(299), "unstable_createRoot"); return new va(t, null != e && !0 === e.hydrate) }, unstable_createSyncRoot: function(t, e) { if (!ya(t)) throw i(Error(299), "unstable_createRoot"); return new ba(t, 1, null != e && !0 === e.hydrate) }, unstable_flushControlled: function(t) { var e = ic;
                ic |= 1; try { dl(99, t) } finally {
                    (ic = e) === Gi && ml() } }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { Events: [L, z, F, j.injectEventPluginsByName, d, V, function(t) { C(t, W) }, jt, At, Fo, P, Kc, { current: !1 }] } };
        ka = (_a = { findFiberByHostInstance: R, bundleType: 0, version: "16.9.0", rendererPackageName: "react-dom" }).findFiberByHostInstance,
            function(t) { if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1; var e = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (e.isDisabled || !e.supportsFiber) return !0; try { var o = e.inject(t);
                    ta = function(t) { try { e.onCommitFiberRoot(o, t, void 0, 64 == (64 & t.current.effectTag)) } catch (t) {} }, ea = function(t) { try { e.onCommitFiberUnmount(o, t) } catch (t) {} } } catch (t) {} }(l({}, _a, { overrideHookState: null, overrideProps: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) { return null === (t = co(t)) ? null : t.stateNode }, findFiberByHostInstance: function(t) { return ka ? ka(t) : null }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null })); var Sa = { default: Ea },
            Ta = Sa && Ea || Sa;
        t.exports = Ta.default || Ta }, function(t, e, o) { "use strict";
        t.exports = o(125) }, function(t, e, o) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = void 0,
            l = void 0,
            n = void 0,
            i = void 0,
            c = void 0; if (e.unstable_now = void 0, e.unstable_forceFrameRate = void 0, "undefined" == typeof window || "function" != typeof MessageChannel) { var a = null,
                s = null,
                p = function() { if (null !== a) try { var t = e.unstable_now();
                        a(!0, t), a = null } catch (t) { throw setTimeout(p, 0), t } };
            e.unstable_now = function() { return Date.now() }, r = function(t) { null !== a ? setTimeout(r, 0, t) : (a = t, setTimeout(p, 0)) }, l = function(t, e) { s = setTimeout(t, e) }, n = function() { clearTimeout(s) }, i = function() { return !1 }, c = e.unstable_forceFrameRate = function() {} } else { var u = window.performance,
                d = window.Date,
                f = window.setTimeout,
                g = window.clearTimeout,
                m = window.requestAnimationFrame,
                h = window.cancelAnimationFrame; "undefined" != typeof console && ("function" != typeof m && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof h && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")), e.unstable_now = "object" == typeof u && "function" == typeof u.now ? function() { return u.now() } : function() { return d.now() }; var b = !1,
                v = null,
                y = -1,
                x = -1,
                w = 33.33,
                _ = -1,
                k = -1,
                E = 0,
                S = !1;
            i = function() { return e.unstable_now() >= E }, c = function() {}, e.unstable_forceFrameRate = function(t) { 0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : 0 < t ? (w = Math.floor(1e3 / t), S = !0) : (w = 33.33, S = !1) }; var T = function() { if (null !== v) { var t = e.unstable_now(),
                            o = 0 < E - t; try { v(o, t) || (v = null) } catch (t) { throw O.postMessage(null), t } } },
                C = new MessageChannel,
                O = C.port2;
            C.port1.onmessage = T; var N = function(t) { if (null === v) k = _ = -1, b = !1;
                else { b = !0, m((function(t) { g(y), N(t) })); var o = function() { E = e.unstable_now() + w / 2, T(), y = f(o, 3 * w) }; if (y = f(o, 3 * w), -1 !== _ && .1 < t - _) { var r = t - _;!S && -1 !== k && r < w && k < w && (8.33 > (w = r < k ? k : r) && (w = 8.33)), k = r }
                    _ = t, E = t + w, O.postMessage(null) } };
            r = function(t) { v = t, b || (b = !0, m((function(t) { N(t) }))) }, l = function(t, o) { x = f((function() { t(e.unstable_now()) }), o) }, n = function() { g(x), x = -1 } } var P = null,
            j = null,
            A = null,
            D = 3,
            I = !1,
            M = !1,
            R = !1;

        function L(t, e) { var o = t.next; if (o === t) P = null;
            else { t === P && (P = o); var r = t.previous;
                r.next = o, o.previous = r }
            t.next = t.previous = null, o = t.callback, r = D; var l = A;
            D = t.priorityLevel, A = t; try { var n = t.expirationTime <= e; switch (D) {
                    case 1:
                        var i = o(n); break;
                    case 2:
                    case 3:
                    case 4:
                        i = o(n); break;
                    case 5:
                        i = o(n) } } catch (t) { throw t } finally { D = r, A = l } if ("function" == typeof i)
                if (e = t.expirationTime, t.callback = i, null === P) P = t.next = t.previous = t;
                else { i = null, n = P;
                    do { if (e <= n.expirationTime) { i = n; break }
                        n = n.next } while (n !== P);
                    null === i ? i = P : i === P && (P = t), (e = i.previous).next = i.previous = t, t.next = i, t.previous = e } }

        function z(t) { if (null !== j && j.startTime <= t)
                do { var e = j,
                        o = e.next; if (e === o) j = null;
                    else { j = o; var r = e.previous;
                        r.next = o, o.previous = r }
                    e.next = e.previous = null, q(e, e.expirationTime) } while (null !== j && j.startTime <= t) }

        function F(t) { R = !1, z(t), M || (null !== P ? (M = !0, r(B)) : null !== j && l(F, j.startTime - t)) }

        function B(t, o) { M = !1, R && (R = !1, n()), z(o), I = !0; try { if (t) { if (null !== P)
                        do { L(P, o), z(o = e.unstable_now()) } while (null !== P && !i()) } else
                    for (; null !== P && P.expirationTime <= o;) L(P, o), z(o = e.unstable_now()); return null !== P || (null !== j && l(F, j.startTime - o), !1) } finally { I = !1 } }

        function U(t) { switch (t) {
                case 1:
                    return -1;
                case 2:
                    return 250;
                case 5:
                    return 1073741823;
                case 4:
                    return 1e4;
                default:
                    return 5e3 } }

        function q(t, e) { if (null === P) P = t.next = t.previous = t;
            else { var o = null,
                    r = P;
                do { if (e < r.expirationTime) { o = r; break }
                    r = r.next } while (r !== P);
                null === o ? o = P : o === P && (P = t), (e = o.previous).next = o.previous = t, t.next = o, t.previous = e } } var H = c;
        e.unstable_ImmediatePriority = 1, e.unstable_UserBlockingPriority = 2, e.unstable_NormalPriority = 3, e.unstable_IdlePriority = 5, e.unstable_LowPriority = 4, e.unstable_runWithPriority = function(t, e) { switch (t) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    t = 3 } var o = D;
            D = t; try { return e() } finally { D = o } }, e.unstable_next = function(t) { switch (D) {
                case 1:
                case 2:
                case 3:
                    var e = 3; break;
                default:
                    e = D } var o = D;
            D = e; try { return t() } finally { D = o } }, e.unstable_scheduleCallback = function(t, o, i) { var c = e.unstable_now(); if ("object" == typeof i && null !== i) { var a = i.delay;
                a = "number" == typeof a && 0 < a ? c + a : c, i = "number" == typeof i.timeout ? i.timeout : U(t) } else i = U(t), a = c; if (t = { callback: o, priorityLevel: t, startTime: a, expirationTime: i = a + i, next: null, previous: null }, a > c) { if (i = a, null === j) j = t.next = t.previous = t;
                else { o = null; var s = j;
                    do { if (i < s.startTime) { o = s; break }
                        s = s.next } while (s !== j);
                    null === o ? o = j : o === j && (j = t), (i = o.previous).next = o.previous = t, t.next = o, t.previous = i }
                null === P && j === t && (R ? n() : R = !0, l(F, a - c)) } else q(t, i), M || I || (M = !0, r(B)); return t }, e.unstable_cancelCallback = function(t) { var e = t.next; if (null !== e) { if (t === e) t === P ? P = null : t === j && (j = null);
                else { t === P ? P = e : t === j && (j = e); var o = t.previous;
                    o.next = e, e.previous = o }
                t.next = t.previous = null } }, e.unstable_wrapCallback = function(t) { var e = D; return function() { var o = D;
                D = e; try { return t.apply(this, arguments) } finally { D = o } } }, e.unstable_getCurrentPriorityLevel = function() { return D }, e.unstable_shouldYield = function() { var t = e.unstable_now(); return z(t), null !== A && null !== P && P.startTime <= t && P.expirationTime < A.expirationTime || i() }, e.unstable_requestPaint = H, e.unstable_continueExecution = function() { M || I || (M = !0, r(B)) }, e.unstable_pauseExecution = function() {}, e.unstable_getFirstCallbackNode = function() { return P } }]) }));