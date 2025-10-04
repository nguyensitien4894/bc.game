var nr = Object.defineProperty,
    lr = Object.defineProperties;
var sr = Object.getOwnPropertyDescriptors;
var _i = Object.getOwnPropertySymbols;
var ar = Object.prototype.hasOwnProperty,
    cr = Object.prototype.propertyIsEnumerable;
var Ti = (a, e, r) => e in a ? nr(a, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : a[e] = r,
    zt = (a, e) => {
        for (var r in e || (e = {})) ar.call(e, r) && Ti(a, r, e[r]);
        if (_i)
            for (var r of _i(e)) cr.call(e, r) && Ti(a, r, e[r]);
        return a
    },
    Si = (a, e) => lr(a, sr(e));
import {
    b as Fi,
    d as Wi,
    i as De,
    e as ei,
    s as Oe,
    t as bt,
    u as ti,
    c as Ue,
    a as Vt,
    r as fr
} from "./web-46c35164.js";
import {
    c as kt,
    e as Pe,
    g as $i,
    a as Nt,
    ap as ur,
    ax as dr,
    t as pr,
    D as Fe,
    l as Ci,
    o as hr,
    B as gr,
    I as xr,
    j as ii,
    s as Di,
    T as yr
} from "./manifest-d92afe19.js";
import {
    j as Hi,
    c as ci,
    S as mr,
    z as wr,
    u as Pi,
    d as gt,
    b as vr,
    o as br,
    r as ki,
    i as _r,
    a as Tr
} from "./solid-js-871c99e1.js";
import {
    t as Rt
} from "./i18n-fd9a94dd.js";
import {
    c as it
} from "./enums-fd45c1cf.js";
import {
    b as Gt
} from "./index-9f4ab8bd.js";
import {
    a as Sr
} from "./proto-d99c76ac.js";
import {
    u as Cr
} from "./router-73d3f837.js";
import "./http-696896a0.js";
import "./baseService-102e5148.js";
import "./_baseGetTag-c2e287b9.js";
import "./_baseFor-371c5662.js";
import "./_MapCache-91cc8331.js";
import "./isArray-79a0be9c.js";
/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Ee, Qe, fi, Yt, ut, Et, Xt, xt, ve = "transform",
    ri = ve + "Origin",
    zi, Vi = function(e) {
        var r = e.ownerDocument || e;
        for (!(ve in e.style) && ("msTransform" in e.style) && (ve = "msTransform", ri = ve + "Origin"); r.parentNode && (r = r.parentNode););
        if (Qe = window, Xt = new qe, r) {
            Ee = r, fi = r.documentElement, Yt = r.body, xt = Ee.createElementNS("http://www.w3.org/2000/svg", "g"), xt.style.transform = "none";
            var i = r.createElement("div"),
                n = r.createElement("div"),
                s = r && (r.body || r.firstElementChild);
            s && s.appendChild && (s.appendChild(i), i.appendChild(n), i.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), zi = n.offsetParent !== i, s.removeChild(i))
        }
        return r
    },
    Dr = function(e) {
        for (var r, i; e && e !== Yt;) i = e._gsap, i && i.uncache && i.get(e, "x"), i && !i.scaleX && !i.scaleY && i.renderTransform && (i.scaleX = i.scaleY = 1e-4, i.renderTransform(1, i), r ? r.push(i) : r = [i]), e = e.parentNode;
        return r
    },
    Gi = [],
    Ui = [],
    Pr = function() {
        return Qe.pageYOffset || Ee.scrollTop || fi.scrollTop || Yt.scrollTop || 0
    },
    kr = function() {
        return Qe.pageXOffset || Ee.scrollLeft || fi.scrollLeft || Yt.scrollLeft || 0
    },
    ui = function(e) {
        return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    },
    Er = function a(e) {
        if (Qe.getComputedStyle(e).position === "fixed") return !0;
        if (e = e.parentNode, e && e.nodeType === 1) return a(e)
    },
    Ut = function a(e, r) {
        if (e.parentNode && (Ee || Vi(e))) {
            var i = ui(e),
                n = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                s = i ? r ? "rect" : "g" : "div",
                f = r !== 2 ? 0 : 100,
                c = r === 3 ? 100 : 0,
                h = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                u = Ee.createElementNS ? Ee.createElementNS(n.replace(/^https/, "http"), s) : Ee.createElement(s);
            return r && (i ? (Et || (Et = a(e)), u.setAttribute("width", .01), u.setAttribute("height", .01), u.setAttribute("transform", "translate(" + f + "," + c + ")"), Et.appendChild(u)) : (ut || (ut = a(e), ut.style.cssText = h), u.style.cssText = h + "width:0.1px;height:0.1px;top:" + c + "px;left:" + f + "px", ut.appendChild(u))), u
        }
        throw "Need document and parent."
    },
    Mr = function(e) {
        for (var r = new qe, i = 0; i < e.numberOfItems; i++) r.multiply(e.getItem(i).matrix);
        return r
    },
    Lr = function(e) {
        var r = e.getCTM(),
            i;
        return r || (i = e.style[ve], e.style[ve] = "none", e.appendChild(xt), r = xt.getCTM(), e.removeChild(xt), i ? e.style[ve] = i : e.style.removeProperty(ve.replace(/([A-Z])/g, "-$1").toLowerCase())), r || Xt.clone()
    },
    Nr = function(e, r) {
        var i = ui(e),
            n = e === i,
            s = i ? Gi : Ui,
            f = e.parentNode,
            c, h, u, y, m, w;
        if (e === Qe) return e;
        if (s.length || s.push(Ut(e, 1), Ut(e, 2), Ut(e, 3)), c = i ? Et : ut, i) n ? (u = Lr(e), y = -u.e / u.a, m = -u.f / u.d, h = Xt) : e.getBBox ? (u = e.getBBox(), h = e.transform ? e.transform.baseVal : {}, h = h.numberOfItems ? h.numberOfItems > 1 ? Mr(h) : h.getItem(0).matrix : Xt, y = h.a * u.x + h.c * u.y, m = h.b * u.x + h.d * u.y) : (h = new qe, y = m = 0), r && e.tagName.toLowerCase() === "g" && (y = m = 0), (n ? i : f).appendChild(c), c.setAttribute("transform", "matrix(" + h.a + "," + h.b + "," + h.c + "," + h.d + "," + (h.e + y) + "," + (h.f + m) + ")");
        else {
            if (y = m = 0, zi)
                for (h = e.offsetParent, u = e; u && (u = u.parentNode) && u !== h && u.parentNode;)(Qe.getComputedStyle(u)[ve] + "").length > 4 && (y = u.offsetLeft, m = u.offsetTop, u = 0);
            if (w = Qe.getComputedStyle(e), w.position !== "absolute" && w.position !== "fixed")
                for (h = e.offsetParent; f && f !== h;) y += f.scrollLeft || 0, m += f.scrollTop || 0, f = f.parentNode;
            u = c.style, u.top = e.offsetTop - m + "px", u.left = e.offsetLeft - y + "px", u[ve] = w[ve], u[ri] = w[ri], u.position = w.position === "fixed" ? "fixed" : "absolute", e.parentNode.appendChild(c)
        }
        return c
    },
    Qt = function(e, r, i, n, s, f, c) {
        return e.a = r, e.b = i, e.c = n, e.d = s, e.e = f, e.f = c, e
    },
    qe = function() {
        function a(r, i, n, s, f, c) {
            r === void 0 && (r = 1), i === void 0 && (i = 0), n === void 0 && (n = 0), s === void 0 && (s = 1), f === void 0 && (f = 0), c === void 0 && (c = 0), Qt(this, r, i, n, s, f, c)
        }
        var e = a.prototype;
        return e.inverse = function() {
            var i = this.a,
                n = this.b,
                s = this.c,
                f = this.d,
                c = this.e,
                h = this.f,
                u = i * f - n * s || 1e-10;
            return Qt(this, f / u, -n / u, -s / u, i / u, (s * h - f * c) / u, -(i * h - n * c) / u)
        }, e.multiply = function(i) {
            var n = this.a,
                s = this.b,
                f = this.c,
                c = this.d,
                h = this.e,
                u = this.f,
                y = i.a,
                m = i.c,
                w = i.b,
                t = i.d,
                _ = i.e,
                P = i.f;
            return Qt(this, y * n + w * f, y * s + w * c, m * n + t * f, m * s + t * c, h + _ * n + P * f, u + _ * s + P * c)
        }, e.clone = function() {
            return new a(this.a, this.b, this.c, this.d, this.e, this.f)
        }, e.equals = function(i) {
            var n = this.a,
                s = this.b,
                f = this.c,
                c = this.d,
                h = this.e,
                u = this.f;
            return n === i.a && s === i.b && f === i.c && c === i.d && h === i.e && u === i.f
        }, e.apply = function(i, n) {
            n === void 0 && (n = {});
            var s = i.x,
                f = i.y,
                c = this.a,
                h = this.b,
                u = this.c,
                y = this.d,
                m = this.e,
                w = this.f;
            return n.x = s * c + f * u + m || 0, n.y = s * h + f * y + w || 0, n
        }, a
    }();

function Ge(a, e, r, i) {
    if (!a || !a.parentNode || (Ee || Vi(a)).documentElement === a) return new qe;
    var n = Dr(a),
        s = ui(a),
        f = s ? Gi : Ui,
        c = Nr(a, r),
        h = f[0].getBoundingClientRect(),
        u = f[1].getBoundingClientRect(),
        y = f[2].getBoundingClientRect(),
        m = c.parentNode,
        w = !i && Er(a),
        t = new qe((u.left - h.left) / 100, (u.top - h.top) / 100, (y.left - h.left) / 100, (y.top - h.top) / 100, h.left + (w ? 0 : kr()), h.top + (w ? 0 : Pr()));
    if (m.removeChild(c), n)
        for (h = n.length; h--;) u = n[h], u.scaleX = u.scaleY = 0, u.renderTransform(1, u);
    return e ? t.inverse() : t
}

function Ei(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a
}

function Rr(a, e) {
    a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.__proto__ = e
}
var k, O, le, be, Me, Kt, ke, oi, dt, Ie, Qi, ni, wt, di, pt, me, ht, Mt, Ki, li, Bt = 0,
    qi = function() {
        return typeof window != "undefined"
    },
    ji = function() {
        return k || qi() && (k = window.gsap) && k.registerPlugin && k
    },
    Ae = function(e) {
        return typeof e == "function"
    },
    yt = function(e) {
        return typeof e == "object"
    },
    we = function(e) {
        return typeof e == "undefined"
    },
    Lt = function() {
        return !1
    },
    mt = "transform",
    si = "transformOrigin",
    Be = function(e) {
        return Math.round(e * 1e4) / 1e4
    },
    ft = Array.isArray,
    Dt = function(e, r) {
        var i = le.createElementNS ? le.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : le.createElement(e);
        return i.style ? i : le.createElement(e)
    },
    Mi = 180 / Math.PI,
    ze = 1e20,
    Xr = new qe,
    Ye = Date.now || function() {
        return new Date().getTime()
    },
    Ke = [],
    Je = {},
    Br = 0,
    Yr = /^(?:a|input|textarea|button|select)$/i,
    Li = 0,
    je = {},
    Ce = {},
    Zi = function(e, r) {
        var i = {},
            n;
        for (n in e) i[n] = r ? e[n] * r : e[n];
        return i
    },
    Or = function(e, r) {
        for (var i in r) i in e || (e[i] = r[i]);
        return e
    },
    Ni = function a(e, r) {
        for (var i = e.length, n; i--;) r ? e[i].style.touchAction = r : e[i].style.removeProperty("touch-action"), n = e[i].children, n && n.length && a(n, r)
    },
    Ji = function() {
        return Ke.forEach(function(e) {
            return e()
        })
    },
    Ar = function(e) {
        Ke.push(e), Ke.length === 1 && k.ticker.add(Ji)
    },
    Ri = function() {
        return !Ke.length && k.ticker.remove(Ji)
    },
    Xi = function(e) {
        for (var r = Ke.length; r--;) Ke[r] === e && Ke.splice(r, 1);
        k.to(Ri, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: Ri,
            data: "_draggable"
        })
    },
    Ir = function(e, r) {
        for (var i in r) i in e || (e[i] = r[i]);
        return e
    },
    j = function(e, r, i, n) {
        if (e.addEventListener) {
            var s = wt[r];
            n = n || (Qi ? {
                passive: !1
            } : null), e.addEventListener(s || r, i, n), s && r !== s && e.addEventListener(r, i, n)
        }
    },
    K = function(e, r, i, n) {
        if (e.removeEventListener) {
            var s = wt[r];
            e.removeEventListener(s || r, i, n), s && r !== s && e.removeEventListener(r, i, n)
        }
    },
    ue = function(e) {
        e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation()
    },
    Fr = function(e, r) {
        for (var i = e.length; i--;)
            if (e[i].identifier === r) return !0
    },
    Wr = function a(e) {
        di = e.touches && Bt < e.touches.length, K(e.target, "touchend", a)
    },
    Bi = function(e) {
        di = e.touches && Bt < e.touches.length, j(e.target, "touchend", Wr)
    },
    et = function(e) {
        return O.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
    },
    tt = function(e) {
        return O.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
    },
    Yi = function a(e, r) {
        j(e, "scroll", r), rt(e.parentNode) || a(e.parentNode, r)
    },
    Oi = function a(e, r) {
        K(e, "scroll", r), rt(e.parentNode) || a(e.parentNode, r)
    },
    rt = function(e) {
        return !e || e === be || e.nodeType === 9 || e === le.body || e === O || !e.nodeType || !e.parentNode
    },
    Ai = function(e, r) {
        var i = r === "x" ? "Width" : "Height",
            n = "scroll" + i,
            s = "client" + i;
        return Math.max(0, rt(e) ? Math.max(be[n], Me[n]) - (O["inner" + i] || be[s] || Me[s]) : e[n] - e[s])
    },
    qt = function a(e, r) {
        var i = Ai(e, "x"),
            n = Ai(e, "y");
        rt(e) ? e = Ce : a(e.parentNode, r), e._gsMaxScrollX = i, e._gsMaxScrollY = n, r || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
    },
    jt = function(e, r, i) {
        var n = e.style;
        n && (we(n[r]) && (r = dt(r, e) || r), i == null ? n.removeProperty && n.removeProperty(r.replace(/([A-Z])/g, "-$1").toLowerCase()) : n[r] = i)
    },
    vt = function(e) {
        return O.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
    },
    Ve = {},
    Ze = function(e) {
        if (e === O) return Ve.left = Ve.top = 0, Ve.width = Ve.right = be.clientWidth || e.innerWidth || Me.clientWidth || 0, Ve.height = Ve.bottom = (e.innerHeight || 0) - 20 < be.clientHeight ? be.clientHeight : e.innerHeight || Me.clientHeight || 0, Ve;
        var r = e.ownerDocument || le,
            i = we(e.pageX) ? !e.nodeType && !we(e.left) && !we(e.top) ? e : Ie(e)[0].getBoundingClientRect() : {
                left: e.pageX - tt(r),
                top: e.pageY - et(r),
                right: e.pageX - tt(r) + 1,
                bottom: e.pageY - et(r) + 1
            };
        return we(i.right) && !we(i.width) ? (i.right = i.left + i.width, i.bottom = i.top + i.height) : we(i.width) && (i = {
            width: i.right - i.left,
            height: i.bottom - i.top,
            right: i.right,
            left: i.left,
            bottom: i.bottom,
            top: i.top
        }), i
    },
    G = function(e, r, i) {
        var n = e.vars,
            s = n[i],
            f = e._listeners[r],
            c;
        return Ae(s) && (c = s.apply(n.callbackScope || e, n[i + "Params"] || [e.pointerEvent])), f && e.dispatchEvent(r) === !1 && (c = !1), c
    },
    Ii = function(e, r) {
        var i = Ie(e)[0],
            n, s, f;
        return !i.nodeType && i !== O ? we(e.left) ? (s = e.min || e.minX || e.minRotation || 0, n = e.min || e.minY || 0, {
            left: s,
            top: n,
            width: (e.max || e.maxX || e.maxRotation || 0) - s,
            height: (e.max || e.maxY || 0) - n
        }) : (f = {
            x: 0,
            y: 0
        }, {
            left: e.left - f.x,
            top: e.top - f.y,
            width: e.width,
            height: e.height
        }) : $r(i, r)
    },
    de = {},
    $r = function(e, r) {
        r = Ie(r)[0];
        var i = e.getBBox && e.ownerSVGElement,
            n = e.ownerDocument || le,
            s, f, c, h, u, y, m, w, t, _, P, $, N;
        if (e === O) c = et(n), s = tt(n), f = s + (n.documentElement.clientWidth || e.innerWidth || n.body.clientWidth || 0), h = c + ((e.innerHeight || 0) - 20 < n.documentElement.clientHeight ? n.documentElement.clientHeight : e.innerHeight || n.body.clientHeight || 0);
        else {
            if (r === O || we(r)) return e.getBoundingClientRect();
            s = c = 0, i ? (_ = e.getBBox(), P = _.width, $ = _.height) : (e.viewBox && (_ = e.viewBox.baseVal) && (s = _.x || 0, c = _.y || 0, P = _.width, $ = _.height), P || (N = vt(e), _ = N.boxSizing === "border-box", P = (parseFloat(N.width) || e.clientWidth || 0) + (_ ? 0 : parseFloat(N.borderLeftWidth) + parseFloat(N.borderRightWidth)), $ = (parseFloat(N.height) || e.clientHeight || 0) + (_ ? 0 : parseFloat(N.borderTopWidth) + parseFloat(N.borderBottomWidth)))), f = P, h = $
        }
        return e === r ? {
            left: s,
            top: c,
            width: f - s,
            height: h - c
        } : (u = Ge(r, !0).multiply(Ge(e)), y = u.apply({
            x: s,
            y: c
        }), m = u.apply({
            x: f,
            y: c
        }), w = u.apply({
            x: f,
            y: h
        }), t = u.apply({
            x: s,
            y: h
        }), s = Math.min(y.x, m.x, w.x, t.x), c = Math.min(y.y, m.y, w.y, t.y), {
            left: s,
            top: c,
            width: Math.max(y.x, m.x, w.x, t.x) - s,
            height: Math.max(y.y, m.y, w.y, t.y) - c
        })
    },
    Zt = function(e, r, i, n, s, f) {
        var c = {},
            h, u, y;
        if (r)
            if (s !== 1 && r instanceof Array) {
                if (c.end = h = [], y = r.length, yt(r[0]))
                    for (u = 0; u < y; u++) h[u] = Zi(r[u], s);
                else
                    for (u = 0; u < y; u++) h[u] = r[u] * s;
                i += 1.1, n -= 1.1
            } else Ae(r) ? c.end = function(m) {
                var w = r.call(e, m),
                    t, _;
                if (s !== 1)
                    if (yt(w)) {
                        t = {};
                        for (_ in w) t[_] = w[_] * s;
                        w = t
                    } else w *= s;
                return w
            } : c.end = r;
        return (i || i === 0) && (c.max = i), (n || n === 0) && (c.min = n), f && (c.velocity = 0), c
    },
    Hr = function a(e) {
        var r;
        return !e || !e.getAttribute || e === Me ? !1 : (r = e.getAttribute("data-clickable")) === "true" || r !== "false" && (Yr.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? !0 : a(e.parentNode)
    },
    Pt = function(e, r) {
        for (var i = e.length, n; i--;) n = e[i], n.ondragstart = n.onselectstart = r ? null : Lt, k.set(n, {
            lazy: !0,
            userSelect: r ? "text" : "none"
        })
    },
    zr = function a(e) {
        if (vt(e).position === "fixed") return !0;
        if (e = e.parentNode, e && e.nodeType === 1) return a(e)
    },
    er, ai, Vr = function(e, r) {
        e = k.utils.toArray(e)[0], r = r || {};
        var i = document.createElement("div"),
            n = i.style,
            s = e.firstChild,
            f = 0,
            c = 0,
            h = e.scrollTop,
            u = e.scrollLeft,
            y = e.scrollWidth,
            m = e.scrollHeight,
            w = 0,
            t = 0,
            _ = 0,
            P, $, N, L, Z, ie;
        er && r.force3D !== !1 ? (Z = "translate3d(", ie = "px,0px)") : mt && (Z = "translate(", ie = "px)"), this.scrollTop = function(C, A) {
            if (!arguments.length) return -this.top();
            this.top(-C, A)
        }, this.scrollLeft = function(C, A) {
            if (!arguments.length) return -this.left();
            this.left(-C, A)
        }, this.left = function(C, A) {
            if (!arguments.length) return -(e.scrollLeft + c);
            var X = e.scrollLeft - u,
                D = c;
            if ((X > 2 || X < -2) && !A) {
                u = e.scrollLeft, k.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                }), this.left(-u), r.onKill && r.onKill();
                return
            }
            C = -C, C < 0 ? (c = C - .5 | 0, C = 0) : C > t ? (c = C - t | 0, C = t) : c = 0, (c || D) && (this._skip || (n[mt] = Z + -c + "px," + -f + ie), c + w >= 0 && (n.paddingRight = c + w + "px")), e.scrollLeft = C | 0, u = e.scrollLeft
        }, this.top = function(C, A) {
            if (!arguments.length) return -(e.scrollTop + f);
            var X = e.scrollTop - h,
                D = f;
            if ((X > 2 || X < -2) && !A) {
                h = e.scrollTop, k.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                }), this.top(-h), r.onKill && r.onKill();
                return
            }
            C = -C, C < 0 ? (f = C - .5 | 0, C = 0) : C > _ ? (f = C - _ | 0, C = _) : f = 0, (f || D) && (this._skip || (n[mt] = Z + -c + "px," + -f + ie)), e.scrollTop = C | 0, h = e.scrollTop
        }, this.maxScrollTop = function() {
            return _
        }, this.maxScrollLeft = function() {
            return t
        }, this.disable = function() {
            for (s = i.firstChild; s;) L = s.nextSibling, e.appendChild(s), s = L;
            e === i.parentNode && e.removeChild(i)
        }, this.enable = function() {
            if (s = e.firstChild, s !== i) {
                for (; s;) L = s.nextSibling, i.appendChild(s), s = L;
                e.appendChild(i), this.calibrate()
            }
        }, this.calibrate = function(C) {
            var A = e.clientWidth === P,
                X, D, oe;
            h = e.scrollTop, u = e.scrollLeft, !(A && e.clientHeight === $ && i.offsetHeight === N && y === e.scrollWidth && m === e.scrollHeight && !C) && ((f || c) && (D = this.left(), oe = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), X = vt(e), (!A || C) && (n.display = "block", n.width = "auto", n.paddingRight = "0px", w = Math.max(0, e.scrollWidth - e.clientWidth), w && (w += parseFloat(X.paddingLeft) + (ai ? parseFloat(X.paddingRight) : 0))), n.display = "inline-block", n.position = "relative", n.overflow = "visible", n.verticalAlign = "top", n.boxSizing = "content-box", n.width = "100%", n.paddingRight = w + "px", ai && (n.paddingBottom = X.paddingBottom), P = e.clientWidth, $ = e.clientHeight, y = e.scrollWidth, m = e.scrollHeight, t = e.scrollWidth - P, _ = e.scrollHeight - $, N = i.offsetHeight, n.display = "block", (D || oe) && (this.left(D), this.top(oe)))
        }, this.content = i, this.element = e, this._skip = !1, this.enable()
    },
    Jt = function(e) {
        if (qi() && document.body) {
            var r = window && window.navigator;
            O = window, le = document, be = le.documentElement, Me = le.body, Kt = Dt("div"), Mt = !!window.PointerEvent, ke = Dt("div"), ke.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", ht = ke.style.cursor === "grab" ? "grab" : "move", pt = r && r.userAgent.toLowerCase().indexOf("android") !== -1, ni = "ontouchstart" in be && "orientation" in O || r && (r.MaxTouchPoints > 0 || r.msMaxTouchPoints > 0), ai = function() {
                var i = Dt("div"),
                    n = Dt("div"),
                    s = n.style,
                    f = Me,
                    c;
                return s.display = "inline-block", s.position = "relative", i.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", i.appendChild(n), f.appendChild(i), c = n.offsetHeight + 18 > i.scrollHeight, f.removeChild(i), c
            }(), wt = function(i) {
                for (var n = i.split(","), s = ("onpointerdown" in Kt ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in Kt ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : i).split(","), f = {}, c = 4; --c > -1;) f[n[c]] = s[c], f[s[c]] = n[c];
                try {
                    be.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function() {
                            Qi = 1
                        }
                    }))
                } catch (h) {}
                return f
            }("touchstart,touchmove,touchend,touchcancel"), j(le, "touchcancel", Lt), j(O, "touchmove", Lt), Me && Me.addEventListener("touchstart", Lt), j(le, "contextmenu", function() {
                for (var i in Je) Je[i].isPressed && Je[i].endDrag()
            }), k = oi = ji()
        }
        k ? (me = k.plugins.inertia, Ki = k.core.context || function() {}, dt = k.utils.checkPrefix, mt = dt(mt), si = dt(si), Ie = k.utils.toArray, li = k.core.getStyleSaver, er = !!dt("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
    },
    Gr = function() {
        function a(r) {
            this._listeners = {}, this.target = r || this
        }
        var e = a.prototype;
        return e.addEventListener = function(i, n) {
            var s = this._listeners[i] || (this._listeners[i] = []);
            ~s.indexOf(n) || s.push(n)
        }, e.removeEventListener = function(i, n) {
            var s = this._listeners[i],
                f = s && s.indexOf(n);
            f >= 0 && s.splice(f, 1)
        }, e.dispatchEvent = function(i) {
            var n = this,
                s;
            return (this._listeners[i] || []).forEach(function(f) {
                return f.call(n, {
                    type: i,
                    target: n.target
                }) === !1 && (s = !1)
            }), s
        }, a
    }(),
    ot = function(a) {
        Rr(e, a);

        function e(r, i) {
            var n;
            n = a.call(this) || this, oi || Jt(1), r = Ie(r)[0], n.styles = li && li(r, "transform,left,top"), me || (me = k.plugins.inertia), n.vars = i = Zi(i || {}), n.target = r, n.x = n.y = n.rotation = 0, n.dragResistance = parseFloat(i.dragResistance) || 0, n.edgeResistance = isNaN(i.edgeResistance) ? 1 : parseFloat(i.edgeResistance) || 0, n.lockAxis = i.lockAxis, n.autoScroll = i.autoScroll || 0, n.lockedAxis = null, n.allowEventDefault = !!i.allowEventDefault, k.getProperty(r, "x");
            var s = (i.type || "x,y").toLowerCase(),
                f = ~s.indexOf("x") || ~s.indexOf("y"),
                c = s.indexOf("rotation") !== -1,
                h = c ? "rotation" : f ? "x" : "left",
                u = f ? "y" : "top",
                y = !!(~s.indexOf("x") || ~s.indexOf("left") || s === "scroll"),
                m = !!(~s.indexOf("y") || ~s.indexOf("top") || s === "scroll"),
                w = i.minimumMovement || 2,
                t = Ei(n),
                _ = Ie(i.trigger || i.handle || r),
                P = {},
                $ = 0,
                N = !1,
                L = i.autoScrollMarginTop || 40,
                Z = i.autoScrollMarginRight || 40,
                ie = i.autoScrollMarginBottom || 40,
                C = i.autoScrollMarginLeft || 40,
                A = i.clickableTest || Hr,
                X = 0,
                D = r._gsap || k.core.getCache(r),
                oe = zr(r),
                Le = function(o, d) {
                    return parseFloat(D.get(r, o, d))
                },
                M = r.ownerDocument || le,
                pe, T, H, se, U, I, he, pi, hi, W, F, q, Q, _t, ae, nt, J, Ot, Ne, Re, We, lt, ee, R, gi, ce, ge, At, It, xi, ne, yi, Tt, mi = function(o) {
                    return ue(o), o.stopImmediatePropagation && o.stopImmediatePropagation(), !1
                },
                _e = function b(o) {
                    if (t.autoScroll && t.isDragging && (N || J)) {
                        var d = r,
                            l = t.autoScroll * 15,
                            p, g, x, S, v, B, E, Y;
                        for (N = !1, Ce.scrollTop = O.pageYOffset != null ? O.pageYOffset : M.documentElement.scrollTop != null ? M.documentElement.scrollTop : M.body.scrollTop, Ce.scrollLeft = O.pageXOffset != null ? O.pageXOffset : M.documentElement.scrollLeft != null ? M.documentElement.scrollLeft : M.body.scrollLeft, S = t.pointerX - Ce.scrollLeft, v = t.pointerY - Ce.scrollTop; d && !g;) g = rt(d.parentNode), p = g ? Ce : d.parentNode, x = g ? {
                            bottom: Math.max(be.clientHeight, O.innerHeight || 0),
                            right: Math.max(be.clientWidth, O.innerWidth || 0),
                            left: 0,
                            top: 0
                        } : p.getBoundingClientRect(), B = E = 0, m && (Y = p._gsMaxScrollY - p.scrollTop, Y < 0 ? E = Y : v > x.bottom - ie && Y ? (N = !0, E = Math.min(Y, l * (1 - Math.max(0, x.bottom - v) / ie) | 0)) : v < x.top + L && p.scrollTop && (N = !0, E = -Math.min(p.scrollTop, l * (1 - Math.max(0, v - x.top) / L) | 0)), E && (p.scrollTop += E)), y && (Y = p._gsMaxScrollX - p.scrollLeft, Y < 0 ? B = Y : S > x.right - Z && Y ? (N = !0, B = Math.min(Y, l * (1 - Math.max(0, x.right - S) / Z) | 0)) : S < x.left + C && p.scrollLeft && (N = !0, B = -Math.min(p.scrollLeft, l * (1 - Math.max(0, S - x.left) / C) | 0)), B && (p.scrollLeft += B)), g && (B || E) && (O.scrollTo(p.scrollLeft, p.scrollTop), ct(t.pointerX + B, t.pointerY + E)), d = p
                    }
                    if (J) {
                        var z = t.x,
                            re = t.y;
                        c ? (t.deltaX = z - parseFloat(D.rotation), t.rotation = z, D.rotation = z + "deg", D.renderTransform(1, D)) : T ? (m && (t.deltaY = re - T.top(), T.top(re)), y && (t.deltaX = z - T.left(), T.left(z))) : f ? (m && (t.deltaY = re - parseFloat(D.y), D.y = re + "px"), y && (t.deltaX = z - parseFloat(D.x), D.x = z + "px"), D.renderTransform(1, D)) : (m && (t.deltaY = re - parseFloat(r.style.top || 0), r.style.top = re + "px"), y && (t.deltaX = z - parseFloat(r.style.left || 0), r.style.left = z + "px")), pi && !o && !At && (At = !0, G(t, "drag", "onDrag") === !1 && (y && (t.x -= t.deltaX), m && (t.y -= t.deltaY), b(!0)), At = !1)
                    }
                    J = !1
                },
                $e = function(o, d) {
                    var l = t.x,
                        p = t.y,
                        g, x;
                    r._gsap || (D = k.core.getCache(r)), D.uncache && k.getProperty(r, "x"), f ? (t.x = parseFloat(D.x), t.y = parseFloat(D.y)) : c ? t.x = t.rotation = parseFloat(D.rotation) : T ? (t.y = T.top(), t.x = T.left()) : (t.y = parseFloat(r.style.top || (x = vt(r)) && x.top) || 0, t.x = parseFloat(r.style.left || (x || {}).left) || 0), (Ne || Re || We) && !d && (t.isDragging || t.isThrowing) && (We && (je.x = t.x, je.y = t.y, g = We(je), g.x !== t.x && (t.x = g.x, J = !0), g.y !== t.y && (t.y = g.y, J = !0)), Ne && (g = Ne(t.x), g !== t.x && (t.x = g, c && (t.rotation = g), J = !0)), Re && (g = Re(t.y), g !== t.y && (t.y = g), J = !0)), J && _e(!0), o || (t.deltaX = t.x - l, t.deltaY = t.y - p, G(t, "throwupdate", "onThrowUpdate"))
                },
                Ft = function(o, d, l, p) {
                    return d == null && (d = -ze), l == null && (l = ze), Ae(o) ? function(g) {
                        var x = t.isPressed ? 1 - t.edgeResistance : 1;
                        return o.call(t, (g > l ? l + (g - l) * x : g < d ? d + (g - d) * x : g) * p) * p
                    } : ft(o) ? function(g) {
                        for (var x = o.length, S = 0, v = ze, B, E; --x > -1;) B = o[x], E = B - g, E < 0 && (E = -E), E < v && B >= d && B <= l && (S = x, v = E);
                        return o[S]
                    } : isNaN(o) ? function(g) {
                        return g
                    } : function() {
                        return o * p
                    }
                },
                tr = function(o, d, l, p, g, x, S) {
                    return x = x && x < ze ? x * x : ze, Ae(o) ? function(v) {
                        var B = t.isPressed ? 1 - t.edgeResistance : 1,
                            E = v.x,
                            Y = v.y,
                            z, re, Te;
                        return v.x = E = E > l ? l + (E - l) * B : E < d ? d + (E - d) * B : E, v.y = Y = Y > g ? g + (Y - g) * B : Y < p ? p + (Y - p) * B : Y, z = o.call(t, v), z !== v && (v.x = z.x, v.y = z.y), S !== 1 && (v.x *= S, v.y *= S), x < ze && (re = v.x - E, Te = v.y - Y, re * re + Te * Te > x && (v.x = E, v.y = Y)), v
                    } : ft(o) ? function(v) {
                        for (var B = o.length, E = 0, Y = ze, z, re, Te, fe; --B > -1;) Te = o[B], z = Te.x - v.x, re = Te.y - v.y, fe = z * z + re * re, fe < Y && (E = B, Y = fe);
                        return Y <= x ? o[E] : v
                    } : function(v) {
                        return v
                    }
                },
                Wt = function() {
                    var o, d, l, p;
                    he = !1, T ? (T.calibrate(), t.minX = F = -T.maxScrollLeft(), t.minY = Q = -T.maxScrollTop(), t.maxX = W = t.maxY = q = 0, he = !0) : i.bounds && (o = Ii(i.bounds, r.parentNode), c ? (t.minX = F = o.left, t.maxX = W = o.left + o.width, t.minY = Q = t.maxY = q = 0) : !we(i.bounds.maxX) || !we(i.bounds.maxY) ? (o = i.bounds, t.minX = F = o.minX, t.minY = Q = o.minY, t.maxX = W = o.maxX, t.maxY = q = o.maxY) : (d = Ii(r, r.parentNode), t.minX = F = Math.round(Le(h, "px") + o.left - d.left), t.minY = Q = Math.round(Le(u, "px") + o.top - d.top), t.maxX = W = Math.round(F + (o.width - d.width)), t.maxY = q = Math.round(Q + (o.height - d.height))), F > W && (t.minX = W, t.maxX = W = F, F = t.minX), Q > q && (t.minY = q, t.maxY = q = Q, Q = t.minY), c && (t.minRotation = F, t.maxRotation = W), he = !0), i.liveSnap && (l = i.liveSnap === !0 ? i.snap || {} : i.liveSnap, p = ft(l) || Ae(l), c ? (Ne = Ft(p ? l : l.rotation, F, W, 1), Re = null) : l.points ? We = tr(p ? l : l.points, F, W, Q, q, l.radius, T ? -1 : 1) : (y && (Ne = Ft(p ? l : l.x || l.left || l.scrollLeft, F, W, T ? -1 : 1)), m && (Re = Ft(p ? l : l.y || l.top || l.scrollTop, Q, q, T ? -1 : 1))))
                },
                ir = function() {
                    t.isThrowing = !1, G(t, "throwcomplete", "onThrowComplete")
                },
                rr = function() {
                    t.isThrowing = !1
                },
                $t = function(o, d) {
                    var l, p, g, x;
                    o && me ? (o === !0 && (l = i.snap || i.liveSnap || {}, p = ft(l) || Ae(l), o = {
                        resistance: (i.throwResistance || i.resistance || 1e3) / (c ? 10 : 1)
                    }, c ? o.rotation = Zt(t, p ? l : l.rotation, W, F, 1, d) : (y && (o[h] = Zt(t, p ? l : l.points || l.x || l.left, W, F, T ? -1 : 1, d || t.lockedAxis === "x")), m && (o[u] = Zt(t, p ? l : l.points || l.y || l.top, q, Q, T ? -1 : 1, d || t.lockedAxis === "y")), (l.points || ft(l) && yt(l[0])) && (o.linkedProps = h + "," + u, o.radius = l.radius))), t.isThrowing = !0, x = isNaN(i.overshootTolerance) ? i.edgeResistance === 1 ? 0 : 1 - t.edgeResistance + .2 : i.overshootTolerance, o.duration || (o.duration = {
                        max: Math.max(i.minDuration || 0, "maxDuration" in i ? i.maxDuration : 2),
                        min: isNaN(i.minDuration) ? x === 0 || yt(o) && o.resistance > 1e3 ? 0 : .5 : i.minDuration,
                        overshoot: x
                    }), t.tween = g = k.to(T || r, {
                        inertia: o,
                        data: "_draggable",
                        inherit: !1,
                        onComplete: ir,
                        onInterrupt: rr,
                        onUpdate: i.fastMode ? G : $e,
                        onUpdateParams: i.fastMode ? [t, "onthrowupdate", "onThrowUpdate"] : l && l.radius ? [!1, !0] : []
                    }), i.fastMode || (T && (T._skip = !0), g.render(1e9, !0, !0), $e(!0, !0), t.endX = t.x, t.endY = t.y, c && (t.endRotation = t.x), g.play(0), $e(!0, !0), T && (T._skip = !1))) : he && t.applyBounds()
                },
                wi = function(o) {
                    var d = R,
                        l;
                    R = Ge(r.parentNode, !0), o && t.isPressed && !R.equals(d || new qe) && (l = d.inverse().apply({
                        x: H,
                        y: se
                    }), R.apply(l, l), H = l.x, se = l.y), R.equals(Xr) && (R = null)
                },
                St = function() {
                    var o = 1 - t.edgeResistance,
                        d = oe ? tt(M) : 0,
                        l = oe ? et(M) : 0,
                        p, g, x;
                    f && (D.x = Le(h, "px") + "px", D.y = Le(u, "px") + "px", D.renderTransform()), wi(!1), de.x = t.pointerX - d, de.y = t.pointerY - l, R && R.apply(de, de), H = de.x, se = de.y, J && (ct(t.pointerX, t.pointerY), _e(!0)), yi = Ge(r), T ? (Wt(), I = T.top(), U = T.left()) : (st() ? ($e(!0, !0), Wt()) : t.applyBounds(), c ? (p = r.ownerSVGElement ? [D.xOrigin - r.getBBox().x, D.yOrigin - r.getBBox().y] : (vt(r)[si] || "0 0").split(" "), nt = t.rotationOrigin = Ge(r).apply({
                        x: parseFloat(p[0]) || 0,
                        y: parseFloat(p[1]) || 0
                    }), $e(!0, !0), g = t.pointerX - nt.x - d, x = nt.y - t.pointerY + l, U = t.x, I = t.y = Math.atan2(x, g) * Mi) : (I = Le(u, "px"), U = Le(h, "px"))), he && o && (U > W ? U = W + (U - W) / o : U < F && (U = F - (F - U) / o), c || (I > q ? I = q + (I - q) / o : I < Q && (I = Q - (Q - I) / o))), t.startX = U = Be(U), t.startY = I = Be(I)
                },
                st = function() {
                    return t.tween && t.tween.isActive()
                },
                or = function() {
                    ke.parentNode && !st() && !t.isDragging && ke.parentNode.removeChild(ke)
                },
                at = function(o, d) {
                    var l;
                    if (!pe || t.isPressed || !o || (o.type === "mousedown" || o.type === "pointerdown") && !d && Ye() - X < 30 && wt[t.pointerEvent.type]) {
                        ne && o && pe && ue(o);
                        return
                    }
                    if (gi = st(), Tt = !1, t.pointerEvent = o, wt[o.type] ? (ee = ~o.type.indexOf("touch") ? o.currentTarget || o.target : M, j(ee, "touchend", xe), j(ee, "touchmove", He), j(ee, "touchcancel", xe), j(M, "touchstart", Bi)) : (ee = null, j(M, "mousemove", He)), ge = null, (!Mt || !ee) && (j(M, "mouseup", xe), o && o.target && j(o.target, "mouseup", xe)), lt = A.call(t, o.target) && i.dragClickables === !1 && !d, lt) {
                        j(o.target, "change", xe), G(t, "pressInit", "onPressInit"), G(t, "press", "onPress"), Pt(_, !0), ne = !1;
                        return
                    }
                    if (ce = !ee || y === m || t.vars.allowNativeTouchScrolling === !1 || t.vars.allowContextMenu && o && (o.ctrlKey || o.which > 2) ? !1 : y ? "y" : "x", ne = !ce && !t.allowEventDefault, ne && (ue(o), j(O, "touchforcechange", ue)), o.changedTouches ? (o = _t = o.changedTouches[0], ae = o.identifier) : o.pointerId ? ae = o.pointerId : _t = ae = null, Bt++, Ar(_e), se = t.pointerY = o.pageY, H = t.pointerX = o.pageX, G(t, "pressInit", "onPressInit"), (ce || t.autoScroll) && qt(r.parentNode), r.parentNode && t.autoScroll && !T && !c && r.parentNode._gsMaxScrollX && !ke.parentNode && !r.getBBox && (ke.style.width = r.parentNode.scrollWidth + "px", r.parentNode.appendChild(ke)), St(), t.tween && t.tween.kill(), t.isThrowing = !1, k.killTweensOf(T || r, P, !0), T && k.killTweensOf(r, {
                            scrollTo: 1
                        }, !0), t.tween = t.lockedAxis = null, (i.zIndexBoost || !c && !T && i.zIndexBoost !== !1) && (r.style.zIndex = e.zIndex++), t.isPressed = !0, pi = !!(i.onDrag || t._listeners.drag), hi = !!(i.onMove || t._listeners.move), i.cursor !== !1 || i.activeCursor)
                        for (l = _.length; --l > -1;) k.set(_[l], {
                            cursor: i.activeCursor || i.cursor || (ht === "grab" ? "grabbing" : ht)
                        });
                    G(t, "press", "onPress")
                },
                He = function(o) {
                    var d = o,
                        l, p, g, x, S, v;
                    if (!pe || di || !t.isPressed || !o) {
                        ne && o && pe && ue(o);
                        return
                    }
                    if (t.pointerEvent = o, l = o.changedTouches, l) {
                        if (o = l[0], o !== _t && o.identifier !== ae) {
                            for (x = l.length; --x > -1 && (o = l[x]).identifier !== ae && o.target !== r;);
                            if (x < 0) return
                        }
                    } else if (o.pointerId && ae && o.pointerId !== ae) return;
                    if (ee && ce && !ge && (de.x = o.pageX - (oe ? tt(M) : 0), de.y = o.pageY - (oe ? et(M) : 0), R && R.apply(de, de), p = de.x, g = de.y, S = Math.abs(p - H), v = Math.abs(g - se), (S !== v && (S > w || v > w) || pt && ce === ge) && (ge = S > v && y ? "x" : "y", ce && ge !== ce && j(O, "touchforcechange", ue), t.vars.lockAxisOnTouchScroll !== !1 && y && m && (t.lockedAxis = ge === "x" ? "y" : "x", Ae(t.vars.onLockAxis) && t.vars.onLockAxis.call(t, d)), pt && ce === ge))) {
                        xe(d);
                        return
                    }!t.allowEventDefault && (!ce || ge && ce !== ge) && d.cancelable !== !1 ? (ue(d), ne = !0) : ne && (ne = !1), t.autoScroll && (N = !0), ct(o.pageX, o.pageY, hi)
                },
                ct = function(o, d, l) {
                    var p = 1 - t.dragResistance,
                        g = 1 - t.edgeResistance,
                        x = t.pointerX,
                        S = t.pointerY,
                        v = I,
                        B = t.x,
                        E = t.y,
                        Y = t.endX,
                        z = t.endY,
                        re = t.endRotation,
                        Te = J,
                        fe, Xe, te, V, Ht, ye;
                    t.pointerX = o, t.pointerY = d, oe && (o -= tt(M), d -= et(M)), c ? (V = Math.atan2(nt.y - d, o - nt.x) * Mi, Ht = t.y - V, Ht > 180 ? (I -= 360, t.y = V) : Ht < -180 && (I += 360, t.y = V), t.x !== U || Math.abs(I - V) > w ? (t.y = V, te = U + (I - V) * p) : te = U) : (R && (ye = o * R.a + d * R.c + R.e, d = o * R.b + d * R.d + R.f, o = ye), Xe = d - se, fe = o - H, Xe < w && Xe > -w && (Xe = 0), fe < w && fe > -w && (fe = 0), (t.lockAxis || t.lockedAxis) && (fe || Xe) && (ye = t.lockedAxis, ye || (t.lockedAxis = ye = y && Math.abs(fe) > Math.abs(Xe) ? "y" : m ? "x" : null, ye && Ae(t.vars.onLockAxis) && t.vars.onLockAxis.call(t, t.pointerEvent)), ye === "y" ? Xe = 0 : ye === "x" && (fe = 0)), te = Be(U + fe * p), V = Be(I + Xe * p)), (Ne || Re || We) && (t.x !== te || t.y !== V && !c) && (We && (je.x = te, je.y = V, ye = We(je), te = Be(ye.x), V = Be(ye.y)), Ne && (te = Be(Ne(te))), Re && (V = Be(Re(V)))), he && (te > W ? te = W + Math.round((te - W) * g) : te < F && (te = F + Math.round((te - F) * g)), c || (V > q ? V = Math.round(q + (V - q) * g) : V < Q && (V = Math.round(Q + (V - Q) * g)))), (t.x !== te || t.y !== V && !c) && (c ? (t.endRotation = t.x = t.endX = te, J = !0) : (m && (t.y = t.endY = V, J = !0), y && (t.x = t.endX = te, J = !0)), !l || G(t, "move", "onMove") !== !1 ? !t.isDragging && t.isPressed && (t.isDragging = Tt = !0, G(t, "dragstart", "onDragStart")) : (t.pointerX = x, t.pointerY = S, I = v, t.x = B, t.y = E, t.endX = Y, t.endY = z, t.endRotation = re, J = Te))
                },
                xe = function b(o, d) {
                    if (!pe || !t.isPressed || o && ae != null && !d && (o.pointerId && o.pointerId !== ae && o.target !== r || o.changedTouches && !Fr(o.changedTouches, ae))) {
                        ne && o && pe && ue(o);
                        return
                    }
                    t.isPressed = !1;
                    var l = o,
                        p = t.isDragging,
                        g = t.vars.allowContextMenu && o && (o.ctrlKey || o.which > 2),
                        x = k.delayedCall(.001, or),
                        S, v, B, E, Y;
                    if (ee ? (K(ee, "touchend", b), K(ee, "touchmove", He), K(ee, "touchcancel", b), K(M, "touchstart", Bi)) : K(M, "mousemove", He), K(O, "touchforcechange", ue), (!Mt || !ee) && (K(M, "mouseup", b), o && o.target && K(o.target, "mouseup", b)), J = !1, p && ($ = Li = Ye(), t.isDragging = !1), Xi(_e), lt && !g) {
                        o && (K(o.target, "change", b), t.pointerEvent = l), Pt(_, !1), G(t, "release", "onRelease"), G(t, "click", "onClick"), lt = !1;
                        return
                    }
                    for (v = _.length; --v > -1;) jt(_[v], "cursor", i.cursor || (i.cursor !== !1 ? ht : null));
                    if (Bt--, o) {
                        if (S = o.changedTouches, S && (o = S[0], o !== _t && o.identifier !== ae)) {
                            for (v = S.length; --v > -1 && (o = S[v]).identifier !== ae && o.target !== r;);
                            if (v < 0 && !d) return
                        }
                        t.pointerEvent = l, t.pointerX = o.pageX, t.pointerY = o.pageY
                    }
                    return g && l ? (ue(l), ne = !0, G(t, "release", "onRelease")) : l && !p ? (ne = !1, gi && (i.snap || i.bounds) && $t(i.inertia || i.throwProps), G(t, "release", "onRelease"), (!pt || l.type !== "touchmove") && l.type.indexOf("cancel") === -1 && (G(t, "click", "onClick"), Ye() - X < 300 && G(t, "doubleclick", "onDoubleClick"), E = l.target || r, X = Ye(), Y = function() {
                        X !== It && t.enabled() && !t.isPressed && !l.defaultPrevented && (E.click ? E.click() : M.createEvent && (B = M.createEvent("MouseEvents"), B.initMouseEvent("click", !0, !0, O, 1, t.pointerEvent.screenX, t.pointerEvent.screenY, t.pointerX, t.pointerY, !1, !1, !1, !1, 0, null), E.dispatchEvent(B)))
                    }, !pt && !l.defaultPrevented && k.delayedCall(.05, Y))) : ($t(i.inertia || i.throwProps), !t.allowEventDefault && l && (i.dragClickables !== !1 || !A.call(t, l.target)) && p && (!ce || ge && ce === ge) && l.cancelable !== !1 ? (ne = !0, ue(l)) : ne = !1, G(t, "release", "onRelease")), st() && x.duration(t.tween.duration()), p && G(t, "dragend", "onDragEnd"), !0
                },
                Ct = function(o) {
                    if (o && t.isDragging && !T) {
                        var d = o.target || r.parentNode,
                            l = d.scrollLeft - d._gsScrollX,
                            p = d.scrollTop - d._gsScrollY;
                        (l || p) && (R ? (H -= l * R.a + p * R.c, se -= p * R.d + l * R.b) : (H -= l, se -= p), d._gsScrollX += l, d._gsScrollY += p, ct(t.pointerX, t.pointerY))
                    }
                },
                vi = function(o) {
                    var d = Ye(),
                        l = d - X < 100,
                        p = d - $ < 50,
                        g = l && It === X,
                        x = t.pointerEvent && t.pointerEvent.defaultPrevented,
                        S = l && xi === X,
                        v = o.isTrusted || o.isTrusted == null && l && g;
                    if ((g || p && t.vars.suppressClickOnDrag !== !1) && o.stopImmediatePropagation && o.stopImmediatePropagation(), l && !(t.pointerEvent && t.pointerEvent.defaultPrevented) && (!g || v && !S)) {
                        v && g && (xi = X), It = X;
                        return
                    }(t.isPressed || p || l) && (!v || !o.detail || !l || x) && ue(o), !l && !p && !Tt && (o && o.target && (t.pointerEvent = o), G(t, "click", "onClick"))
                },
                bi = function(o) {
                    return R ? {
                        x: o.x * R.a + o.y * R.c + R.e,
                        y: o.x * R.b + o.y * R.d + R.f
                    } : {
                        x: o.x,
                        y: o.y
                    }
                };
            return Ot = e.get(r), Ot && Ot.kill(), n.startDrag = function(b, o) {
                var d, l, p, g;
                at(b || t.pointerEvent, !0), o && !t.hitTest(b || t.pointerEvent) && (d = Ze(b || t.pointerEvent), l = Ze(r), p = bi({
                    x: d.left + d.width / 2,
                    y: d.top + d.height / 2
                }), g = bi({
                    x: l.left + l.width / 2,
                    y: l.top + l.height / 2
                }), H -= p.x - g.x, se -= p.y - g.y), t.isDragging || (t.isDragging = Tt = !0, G(t, "dragstart", "onDragStart"))
            }, n.drag = He, n.endDrag = function(b) {
                return xe(b || t.pointerEvent, !0)
            }, n.timeSinceDrag = function() {
                return t.isDragging ? 0 : (Ye() - $) / 1e3
            }, n.timeSinceClick = function() {
                return (Ye() - X) / 1e3
            }, n.hitTest = function(b, o) {
                return e.hitTest(t.target, b, o)
            }, n.getDirection = function(b, o) {
                var d = b === "velocity" && me ? b : yt(b) && !c ? "element" : "start",
                    l, p, g, x, S, v;
                return d === "element" && (S = Ze(t.target), v = Ze(b)), l = d === "start" ? t.x - U : d === "velocity" ? me.getVelocity(r, h) : S.left + S.width / 2 - (v.left + v.width / 2), c ? l < 0 ? "counter-clockwise" : "clockwise" : (o = o || 2, p = d === "start" ? t.y - I : d === "velocity" ? me.getVelocity(r, u) : S.top + S.height / 2 - (v.top + v.height / 2), g = Math.abs(l / p), x = g < 1 / o ? "" : l < 0 ? "left" : "right", g < o && (x !== "" && (x += "-"), x += p < 0 ? "up" : "down"), x)
            }, n.applyBounds = function(b, o) {
                var d, l, p, g, x, S;
                if (b && i.bounds !== b) return i.bounds = b, t.update(!0, o);
                if ($e(!0), Wt(), he && !st()) {
                    if (d = t.x, l = t.y, d > W ? d = W : d < F && (d = F), l > q ? l = q : l < Q && (l = Q), (t.x !== d || t.y !== l) && (p = !0, t.x = t.endX = d, c ? t.endRotation = d : t.y = t.endY = l, J = !0, _e(!0), t.autoScroll && !t.isDragging))
                        for (qt(r.parentNode), g = r, Ce.scrollTop = O.pageYOffset != null ? O.pageYOffset : M.documentElement.scrollTop != null ? M.documentElement.scrollTop : M.body.scrollTop, Ce.scrollLeft = O.pageXOffset != null ? O.pageXOffset : M.documentElement.scrollLeft != null ? M.documentElement.scrollLeft : M.body.scrollLeft; g && !S;) S = rt(g.parentNode), x = S ? Ce : g.parentNode, m && x.scrollTop > x._gsMaxScrollY && (x.scrollTop = x._gsMaxScrollY), y && x.scrollLeft > x._gsMaxScrollX && (x.scrollLeft = x._gsMaxScrollX), g = x;
                    t.isThrowing && (p || t.endX > W || t.endX < F || t.endY > q || t.endY < Q) && $t(i.inertia || i.throwProps, p)
                }
                return t
            }, n.update = function(b, o, d) {
                if (o && t.isPressed) {
                    var l = Ge(r),
                        p = yi.apply({
                            x: t.x - U,
                            y: t.y - I
                        }),
                        g = Ge(r.parentNode, !0);
                    g.apply({
                        x: l.e - p.x,
                        y: l.f - p.y
                    }, p), t.x -= p.x - g.e, t.y -= p.y - g.f, _e(!0), St()
                }
                var x = t.x,
                    S = t.y;
                return wi(!o), b ? t.applyBounds() : (J && d && _e(!0), $e(!0)), o && (ct(t.pointerX, t.pointerY), J && _e(!0)), t.isPressed && !o && (y && Math.abs(x - t.x) > .01 || m && Math.abs(S - t.y) > .01 && !c) && St(), t.autoScroll && (qt(r.parentNode, t.isDragging), N = t.isDragging, _e(!0), Oi(r, Ct), Yi(r, Ct)), t
            }, n.enable = function(b) {
                var o = {
                        lazy: !0
                    },
                    d, l, p;
                if (i.cursor !== !1 && (o.cursor = i.cursor || ht), k.utils.checkPrefix("touchCallout") && (o.touchCallout = "none"), b !== "soft") {
                    for (Ni(_, y === m ? "none" : i.allowNativeTouchScrolling && r.scrollHeight === r.clientHeight == (r.scrollWidth === r.clientHeight) || i.allowEventDefault ? "manipulation" : y ? "pan-y" : "pan-x"), l = _.length; --l > -1;) p = _[l], Mt || j(p, "mousedown", at), j(p, "touchstart", at), j(p, "click", vi, !0), k.set(p, o), p.getBBox && p.ownerSVGElement && y !== m && k.set(p.ownerSVGElement, {
                        touchAction: i.allowNativeTouchScrolling || i.allowEventDefault ? "manipulation" : y ? "pan-y" : "pan-x"
                    }), i.allowContextMenu || j(p, "contextmenu", mi);
                    Pt(_, !1)
                }
                return Yi(r, Ct), pe = !0, me && b !== "soft" && me.track(T || r, f ? "x,y" : c ? "rotation" : "top,left"), r._gsDragID = d = "d" + Br++, Je[d] = t, T && (T.enable(), T.element._gsDragID = d), (i.bounds || c) && St(), i.bounds && t.applyBounds(), t
            }, n.disable = function(b) {
                for (var o = t.isDragging, d = _.length, l; --d > -1;) jt(_[d], "cursor", null);
                if (b !== "soft") {
                    for (Ni(_, null), d = _.length; --d > -1;) l = _[d], jt(l, "touchCallout", null), K(l, "mousedown", at), K(l, "touchstart", at), K(l, "click", vi, !0), K(l, "contextmenu", mi);
                    Pt(_, !0), ee && (K(ee, "touchcancel", xe), K(ee, "touchend", xe), K(ee, "touchmove", He)), K(M, "mouseup", xe), K(M, "mousemove", He)
                }
                return Oi(r, Ct), pe = !1, me && b !== "soft" && (me.untrack(T || r, f ? "x,y" : c ? "rotation" : "top,left"), t.tween && t.tween.kill()), T && T.disable(), Xi(_e), t.isDragging = t.isPressed = lt = !1, o && G(t, "dragend", "onDragEnd"), t
            }, n.enabled = function(b, o) {
                return arguments.length ? b ? t.enable(o) : t.disable(o) : pe
            }, n.kill = function() {
                return t.isThrowing = !1, t.tween && t.tween.kill(), t.disable(), k.set(_, {
                    clearProps: "userSelect"
                }), delete Je[r._gsDragID], t
            }, n.revert = function() {
                this.kill(), this.styles && this.styles.revert()
            }, ~s.indexOf("scroll") && (T = n.scrollProxy = new Vr(r, Or({
                onKill: function() {
                    t.isPressed && xe(null)
                }
            }, i)), r.style.overflowY = m && !ni ? "auto" : "hidden", r.style.overflowX = y && !ni ? "auto" : "hidden", r = T.content), c ? P.rotation = 1 : (y && (P[h] = 1), m && (P[u] = 1)), D.force3D = "force3D" in i ? i.force3D : !0, Ki(Ei(n)), n.enable(), n
        }
        return e.register = function(i) {
            k = i, Jt()
        }, e.create = function(i, n) {
            return oi || Jt(!0), Ie(i).map(function(s) {
                return new e(s, n)
            })
        }, e.get = function(i) {
            return Je[(Ie(i)[0] || {})._gsDragID]
        }, e.timeSinceDrag = function() {
            return (Ye() - Li) / 1e3
        }, e.hitTest = function(i, n, s) {
            if (i === n) return !1;
            var f = Ze(i),
                c = Ze(n),
                h = f.top,
                u = f.left,
                y = f.right,
                m = f.bottom,
                w = f.width,
                t = f.height,
                _ = c.left > y || c.right < u || c.top > m || c.bottom < h,
                P, $, N;
            return _ || !s ? !_ : (N = (s + "").indexOf("%") !== -1, s = parseFloat(s) || 0, P = {
                left: Math.max(u, c.left),
                top: Math.max(h, c.top)
            }, P.width = Math.min(y, c.right) - P.left, P.height = Math.min(m, c.bottom) - P.top, P.width < 0 || P.height < 0 ? !1 : N ? (s *= .01, $ = P.width * P.height, $ >= w * t * s || $ >= c.width * c.height * s) : P.width > s && P.height > s)
        }, e
    }(Gr);
Ir(ot.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1
});
ot.zIndex = 1e3;
ot.version = "3.12.5";
ji() && k.registerPlugin(ot);
var Ur = bt('<div><svg viewBox="0 0 100 100"><circle cx=50 cy=50 fill=none class=text-input stroke=currentColor></circle><circle cx=50 cy=50 fill=none class=text-brand stroke-linecap=round stroke=currentColor>');
const Qr = a => {
    let e;
    const r = () => 5 * Pe.remScale,
        i = () => 50 - r() / 2,
        n = () => 2 * Math.PI * i(),
        [s, f] = Hi(a, ["direction", "finished"]),
        c = ci(() => {
            const h = (1 - a.finished) * n();
            return {
                dasharray: `${n()}`,
                strokeDashoffset: `${h}`
            }
        });
    return (() => {
        var h = Ur(),
            u = h.firstChild,
            y = u.firstChild,
            m = y.nextSibling;
        Fi(h, Wi(f, {
            get class() {
                return kt(a.class)
            }
        }), !1, !0), u.style.setProperty("width", "100%"), u.style.setProperty("height", "100%"), u.style.setProperty("transform", "rotate(-90deg)");
        var w = e;
        return typeof w == "function" ? ti(w, m) : e = m, m.style.setProperty("transition", "stroke-dashoffset 0.3s ease"), De(h, () => a.children, null), ei(t => {
            var _ = i(),
                P = r(),
                $ = c().dasharray,
                N = c().strokeDashoffset,
                L = i(),
                Z = r();
            return _ !== t.e && Oe(y, "r", t.e = _), P !== t.t && Oe(y, "stroke-width", t.t = P), $ !== t.a && Oe(m, "stroke-dasharray", t.a = $), N !== t.o && Oe(m, "stroke-dashoffset", t.o = N), L !== t.i && Oe(m, "r", t.i = L), Z !== t.n && Oe(m, "stroke-width", t.n = Z), t
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0
        }), h
    })()
};
var Kr = bt('<div class="relative flex h-18 shrink-0 flex-grow items-center gap-x-3 rounded-xl border border-solid border-third py-2 pl-10 pr-2 opacity-0"><div class="absolute -left-8 w-16 shrink-0"><img></div><div class="flex h-14 w-[13rem] shrink-0 flex-grow flex-col justify-between"><h3 class="flex justify-between text-xs font-semibold text-primary"><div class="rounded-3xl bg-brand px-1 text-primary_brand"></div></h3><div class="w-full overflow-hidden rounded-xl bg-layer4"><div></div></div><p class="flex justify-between font-semibold text-alw_white"><span></span><span class=text-primary>'),
    qr = bt('<div class="absolute left-1/2 top-1/2 w-12 -translate-x-1/2 -translate-y-1/2"><img>'),
    jr = bt("<div>"),
    Zr = bt('<p class="flex gap-x-1">');
$i.registerPlugin(ot);
const Jr = {
        [it.Deposit]: Rt("Deposit Wager Progress"),
        [it.Svip]: Rt("SVIP Deposit Challenge")
    },
    eo = {
        [it.Deposit]: "-top-1 -left-[0.3rem]",
        [it.Svip]: "left-1"
    },
    to = a => {
        const e = {
                [it.Deposit]: Ci("/bonus/bonus/svip-progress/deposit-progress.png")(),
                [it.Svip]: Ci("/bonus/bonus/svip-progress/svip-gift.png")()
            },
            [r, i] = vr(!0),
            [n, s] = Hi(a, ["progress"]);
        let f;
        const c = hr(),
            h = ci(() => {
                const L = (Pe.mobile ? 56 : 60) * Pe.remScale,
                    Z = (Pe.mobile ? 72 : 0) * Pe.remScale;
                return {
                    top: L,
                    left: 0,
                    width: -c.width,
                    height: c.height - L - Z
                }
            });
        let u;
        br(() => {
            u = ot.create(f, {
                type: "y",
                bounds: h()
            })[0]
        }), gt(ki(h, L => {
            u && u.applyBounds(L)
        }));
        const y = () => new Fe(a.progress).mul(100);
        let m, w;
        const t = $i.timeline({
                paused: !0
            }),
            _ = () => e[a.taskType],
            P = () => eo[a.taskType],
            $ = _r(() => (() => {
                var L = Kr(),
                    Z = L.firstChild,
                    ie = Z.firstChild,
                    C = Z.nextSibling,
                    A = C.firstChild,
                    X = A.firstChild,
                    D = A.nextSibling,
                    oe = D.firstChild,
                    Le = D.nextSibling,
                    M = Le.firstChild,
                    pe = M.nextSibling,
                    T = w;
                return typeof T == "function" ? ti(T, L) : w = L, L.style.setProperty("direction", "ltr"), De(A, () => Jr[a.taskType], X), X.style.setProperty("box-shadow", "0px 0px 12px 0px rgba(0, 0, 0, 0.25)"), De(X, () => y().toFixed(2, Fe.ROUND_DOWN) + "%"), De(M, () => Rt("Wager remaining")), De(pe, () => a.wagerRemaining), De(L, Ue(gr, {
                    onClick: H => {
                        H.stopPropagation(), i(!1)
                    },
                    class: "h-6 self-start",
                    size: "s",
                    get children() {
                        return Ue(xr, {
                            name: "Close",
                            class: "size-4 text-secondary"
                        })
                    }
                }), null), ei(H => {
                    var se = kt("relative w-full", P()),
                        U = _(),
                        I = kt("relative h-2 overflow-hidden rounded-xl bg-brand"),
                        he = `${y()}%`;
                    return se !== H.e && Vt(ie, H.e = se), U !== H.t && Oe(ie, "src", H.t = U), I !== H.a && Vt(oe, H.a = I), he !== H.o && ((H.o = he) != null ? oe.style.setProperty("width", he) : oe.style.removeProperty("width")), H
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0
                }), L
            })());
        gt(() => {
            t.to(m, {
                opacity: 0,
                duration: .1
            }, 0).to(w, {
                opacity: 1,
                duration: .1,
                zIndex: 20,
                delay: .2
            }).to(f, {
                width: 330 * Pe.remScale,
                duration: .2
            }, 0).to(f, {
                borderRadius: 12 * Pe.remScale,
                overflow: "unset",
                duration: .1
            }, 0), Tr(() => {
                t.clear()
            })
        }), gt(ki(r, L => {
            L ? t.restart() : t.reverse()
        }));
        const N = () => ({
            "--background-progress-wager": Di.darken ? "rgba(40, 43, 43, 1)" : "#fff",
            "--gradient-start-color": Di.darken ? "rgba(40, 81, 61, 1)" : "rgba(24, 130, 53, 0.8)",
            "box-shadow": "0px 0px 12px 0px rgba(0, 0, 0, 0.25)",
            background: "linear-gradient(to right, var(--gradient-start-color) 0.5%, transparent 69%), var(--background-progress-wager)"
        });
        return (() => {
            var L = jr(),
                Z = f;
            return typeof Z == "function" ? ti(Z, L) : f = L, Fi(L, Wi(s, {
                class: "absolute right-0 top-0 size-18 overflow-hidden rounded-full bg-layer2",
                onClick: () => i(!0),
                get style() {
                    return zt({
                        direction: "rtl"
                    }, N())
                }
            }), !1, !0), De(L, Ue(Qr, {
                ref(ie) {
                    var C = m;
                    typeof C == "function" ? C(ie) : m = ie
                },
                class: "absolute z-10 h-18 bg-layer2",
                get style() {
                    return N()
                },
                get finished() {
                    return a.progress
                },
                get children() {
                    var ie = qr(),
                        C = ie.firstChild;
                    return ei(A => {
                        var X = kt(P(), "relative w-full"),
                            D = _();
                        return X !== A.e && Vt(C, A.e = X), D !== A.t && Oe(C, "src", A.t = D), A
                    }, {
                        e: void 0,
                        t: void 0
                    }), ie
                }
            }), null), De(L, $, null), L
        })()
    },
    io = () => {
        const a = ro();
        return Ue(mr, {
            get when() {
                return a()
            },
            children: e => {
                const r = () => {
                        var n;
                        return new Fe((n = e().wagerCompleted) != null ? n : 0).div(e().wagerRequired)
                    },
                    i = () => {
                        var f;
                        const n = ii.setting.enableLocaleCurrency ? ii.setting.localeCurrencyName : "USDFIAT",
                            s = Nt.convertCurrency(new Fe(e().wagerRequired).minus((f = e().wagerCompleted) != null ? f : 0), e().originalCurrencyName, n);
                        return {
                            amount: s.lessThan(1) ? new Fe(1) : s,
                            currency: n
                        }
                    };
                return Ue(to, {
                    get wagerRemaining() {
                        return Nt.printCurrency(i().amount, i().currency, {
                            precision: 3,
                            target: i().currency
                        })
                    },
                    get progress() {
                        return r().toNumber()
                    },
                    get taskType() {
                        return e().taskType
                    }
                })
            }
        })
    },
    ro = () => {
        const [a] = Gt.getWagerProgress(), e = wr(r => {
            const i = ur("/user").on("wager-change", n => {
                var y, m;
                const s = new Uint8Array(n),
                    f = Sr(s),
                    c = f.taskId !== ((y = Pi(a)) == null ? void 0 : y.taskId),
                    h = !c && [3, 4, 5, 6].includes(f.status),
                    u = f.bonusBalance && f.depositBalance || c || h;
                if (f.bonusBalance && f.depositBalance && dr(w => {
                        gt(() => {
                            a() && (pr(() => (() => {
                                var t = Zr();
                                return De(t, () => Rt("__depositBalance__ deposit balance has been transferred to your bonus balance, and __totalBalance__ deposit bonus has been credited to your bonus wallet.", {
                                    depositBalance: Nt.printCurrency(new Fe(f.depositBalance), a().originalCurrencyName, {
                                        target: a().originalCurrencyName
                                    }),
                                    totalBalance: Nt.printCurrency(new Fe(f.bonusBalance).sub(new Fe(f.depositBalance)), a().originalCurrencyName, {
                                        target: a().originalCurrencyName
                                    })
                                })), t
                            })(), {
                                duration: 0,
                                type: "bonus_custom-success"
                            }), w())
                        })
                    }), u) {
                    Gt.refetchResource(Gt.getWagerProgress.name, {
                        staleTime: h || !((m = Pi(a)) != null && m.taskId) ? 0 : 6e4,
                        mutateOnly: !0
                    });
                    return
                }
                r(w => !w || Number(f.batchId) > Number(w.batchId) ? f : w)
            });
            return () => {
                i.off("wager-change")
            }
        });
        return ci(() => a() ? Si(zt({}, a()), {
            wagerCompleted: e() && e().taskId === a().taskId ? e().wagerCompleted : a().wagerCompleted
        }) : null)
    };
let Se;
const oo = () => Se || (Se = document.createElement("div"), Se.style.setProperty("position", "fixed"), Se.style.setProperty("z-index", Pe.mobile ? "10000" : "101"), Se.style.setProperty("top", "0"), Se.style.setProperty("right", "0"), document.body.appendChild(Se), Se),
    bo = () => {
        const a = Cr(),
            e = () => Pe.mobile ? !["/chat-public", "/game", "/enter-game"].some(i => a.pathname.includes(i)) : !0;
        gt(() => {
            ii.login && fr(() => Ue(yr, {
                get when() {
                    return e()
                },
                get children() {
                    return Ue(io, {})
                }
            }), oo())
        })
    };
export {
    bo as LiveWagerProgressRegister, bo as
    default
};