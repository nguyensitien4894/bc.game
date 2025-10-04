var Hi = Object.defineProperty,
    Wi = Object.defineProperties;
var $i = Object.getOwnPropertyDescriptors;
var si = Object.getOwnPropertySymbols;
var zi = Object.prototype.hasOwnProperty,
    Vi = Object.prototype.propertyIsEnumerable;
var ai = (c, t, o) => t in c ? Hi(c, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : c[t] = o,
    fi = (c, t) => {
        for (var o in t || (t = {})) zi.call(t, o) && ai(c, o, t[o]);
        if (si)
            for (var o of si(t)) Vi.call(t, o) && ai(c, o, t[o]);
        return c
    },
    ci = (c, t) => Wi(c, $i(t));
import {
    r as Gi,
    c as dt,
    f as Si,
    u as Qi,
    i as Rt,
    e as Ki,
    t as Ui
} from "./web-6f548a65.js";
import {
    aa as Di,
    a3 as qi,
    o as Zi,
    k as Ji,
    ab as ji,
    u as eo,
    e as Ve,
    d as to
} from "./manifest-c14db982.js";
import {
    o as Wt,
    a as io,
    g as ui,
    S as oo,
    b as no,
    j as ro
} from "./solid-js-640b7463.js";
import {
    t as di
} from "./i18n-cc562446.js";
import {
    s as lo,
    g as so
} from "./store-fc3312fc.js";
import {
    a as ao
} from "./router-f73ec727.js";
import {
    W as fo
} from "./WalletIcon-e1615aa1.js";
import {
    b as co
} from "./api-02cfa9ea.js";
import "./useCommonPostPR-02a6e986.js";
/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var De, He, Ut, Et, rt, bt, St, ft, de = "transform",
    $t = de + "Origin",
    Ei, Mi = function(t) {
        var o = t.ownerDocument || t;
        for (!(de in t.style) && ("msTransform" in t.style) && (de = "msTransform", $t = de + "Origin"); o.parentNode && (o = o.parentNode););
        if (He = window, St = new $e, o) {
            De = o, Ut = o.documentElement, Et = o.body, ft = De.createElementNS("http://www.w3.org/2000/svg", "g"), ft.style.transform = "none";
            var i = o.createElement("div"),
                r = o.createElement("div"),
                s = o && (o.body || o.firstElementChild);
            s && s.appendChild && (s.appendChild(i), i.appendChild(r), i.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), Ei = r.offsetParent !== i, s.removeChild(i))
        }
        return o
    },
    uo = function(t) {
        for (var o, i; t && t !== Et;) i = t._gsap, i && i.uncache && i.get(t, "x"), i && !i.scaleX && !i.scaleY && i.renderTransform && (i.scaleX = i.scaleY = 1e-4, i.renderTransform(1, i), o ? o.push(i) : o = [i]), t = t.parentNode;
        return o
    },
    Pi = [],
    Ci = [],
    po = function() {
        return He.pageYOffset || De.scrollTop || Ut.scrollTop || Et.scrollTop || 0
    },
    ho = function() {
        return He.pageXOffset || De.scrollLeft || Ut.scrollLeft || Et.scrollLeft || 0
    },
    qt = function(t) {
        return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null)
    },
    go = function c(t) {
        if (He.getComputedStyle(t).position === "fixed") return !0;
        if (t = t.parentNode, t && t.nodeType === 1) return c(t)
    },
    Yt = function c(t, o) {
        if (t.parentNode && (De || Mi(t))) {
            var i = qt(t),
                r = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                s = i ? o ? "rect" : "g" : "div",
                f = o !== 2 ? 0 : 100,
                a = o === 3 ? 100 : 0,
                y = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                p = De.createElementNS ? De.createElementNS(r.replace(/^https/, "http"), s) : De.createElement(s);
            return o && (i ? (bt || (bt = c(t)), p.setAttribute("width", .01), p.setAttribute("height", .01), p.setAttribute("transform", "translate(" + f + "," + a + ")"), bt.appendChild(p)) : (rt || (rt = c(t), rt.style.cssText = y), p.style.cssText = y + "width:0.1px;height:0.1px;top:" + a + "px;left:" + f + "px", rt.appendChild(p))), p
        }
        throw "Need document and parent."
    },
    xo = function(t) {
        for (var o = new $e, i = 0; i < t.numberOfItems; i++) o.multiply(t.getItem(i).matrix);
        return o
    },
    yo = function(t) {
        var o = t.getCTM(),
            i;
        return o || (i = t.style[de], t.style[de] = "none", t.appendChild(ft), o = ft.getCTM(), t.removeChild(ft), i ? t.style[de] = i : t.style.removeProperty(de.replace(/([A-Z])/g, "-$1").toLowerCase())), o || St.clone()
    },
    mo = function(t, o) {
        var i = qt(t),
            r = t === i,
            s = i ? Pi : Ci,
            f = t.parentNode,
            a = f && !i && f.shadowRoot && f.shadowRoot.appendChild ? f.shadowRoot : f,
            y, p, h, _, b, e;
        if (t === He) return t;
        if (s.length || s.push(Yt(t, 1), Yt(t, 2), Yt(t, 3)), y = i ? bt : rt, i) r ? (h = yo(t), _ = -h.e / h.a, b = -h.f / h.d, p = St) : t.getBBox ? (h = t.getBBox(), p = t.transform ? t.transform.baseVal : {}, p = p.numberOfItems ? p.numberOfItems > 1 ? xo(p) : p.getItem(0).matrix : St, _ = p.a * h.x + p.c * h.y, b = p.b * h.x + p.d * h.y) : (p = new $e, _ = b = 0), o && t.tagName.toLowerCase() === "g" && (_ = b = 0), (r ? i : f).appendChild(y), y.setAttribute("transform", "matrix(" + p.a + "," + p.b + "," + p.c + "," + p.d + "," + (p.e + _) + "," + (p.f + b) + ")");
        else {
            if (_ = b = 0, Ei)
                for (p = t.offsetParent, h = t; h && (h = h.parentNode) && h !== p && h.parentNode;)(He.getComputedStyle(h)[de] + "").length > 4 && (_ = h.offsetLeft, b = h.offsetTop, h = 0);
            if (e = He.getComputedStyle(t), e.position !== "absolute" && e.position !== "fixed")
                for (p = t.offsetParent; f && f !== p;) _ += f.scrollLeft || 0, b += f.scrollTop || 0, f = f.parentNode;
            h = y.style, h.top = t.offsetTop - b + "px", h.left = t.offsetLeft - _ + "px", h[de] = e[de], h[$t] = e[$t], h.position = e.position === "fixed" ? "fixed" : "absolute", a.appendChild(y)
        }
        return y
    },
    Ot = function(t, o, i, r, s, f, a) {
        return t.a = o, t.b = i, t.c = r, t.d = s, t.e = f, t.f = a, t
    },
    $e = function() {
        function c(o, i, r, s, f, a) {
            o === void 0 && (o = 1), i === void 0 && (i = 0), r === void 0 && (r = 0), s === void 0 && (s = 1), f === void 0 && (f = 0), a === void 0 && (a = 0), Ot(this, o, i, r, s, f, a)
        }
        var t = c.prototype;
        return t.inverse = function() {
            var i = this.a,
                r = this.b,
                s = this.c,
                f = this.d,
                a = this.e,
                y = this.f,
                p = i * f - r * s || 1e-10;
            return Ot(this, f / p, -r / p, -s / p, i / p, (s * y - f * a) / p, -(i * y - r * a) / p)
        }, t.multiply = function(i) {
            var r = this.a,
                s = this.b,
                f = this.c,
                a = this.d,
                y = this.e,
                p = this.f,
                h = i.a,
                _ = i.c,
                b = i.b,
                e = i.d,
                v = i.e,
                M = i.f;
            return Ot(this, h * r + b * f, h * s + b * a, _ * r + e * f, _ * s + e * a, y + v * r + M * f, p + v * s + M * a)
        }, t.clone = function() {
            return new c(this.a, this.b, this.c, this.d, this.e, this.f)
        }, t.equals = function(i) {
            var r = this.a,
                s = this.b,
                f = this.c,
                a = this.d,
                y = this.e,
                p = this.f;
            return r === i.a && s === i.b && f === i.c && a === i.d && y === i.e && p === i.f
        }, t.apply = function(i, r) {
            r === void 0 && (r = {});
            var s = i.x,
                f = i.y,
                a = this.a,
                y = this.b,
                p = this.c,
                h = this.d,
                _ = this.e,
                b = this.f;
            return r.x = s * a + f * p + _ || 0, r.y = s * y + f * h + b || 0, r
        }, c
    }();

function Fe(c, t, o, i) {
    if (!c || !c.parentNode || (De || Mi(c)).documentElement === c) return new $e;
    var r = uo(c),
        s = qt(c),
        f = s ? Pi : Ci,
        a = mo(c, o),
        y = f[0].getBoundingClientRect(),
        p = f[1].getBoundingClientRect(),
        h = f[2].getBoundingClientRect(),
        _ = a.parentNode,
        b = !i && go(c),
        e = new $e((p.left - y.left) / 100, (p.top - y.top) / 100, (h.left - y.left) / 100, (h.top - y.top) / 100, y.left + (b ? 0 : ho()), y.top + (b ? 0 : po()));
    if (_.removeChild(a), r)
        for (y = r.length; y--;) p = r[y], p.scaleX = p.scaleY = 0, p.renderTransform(1, p);
    return t ? e.inverse() : e
}

function pi(c) {
    if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c
}

function wo(c, t) {
    c.prototype = Object.create(t.prototype), c.prototype.constructor = c, c.__proto__ = t
}
var D, Y, te, pe, Ee, At, Se, zt, lt, Xe, ki, Vt, pt, Zt, st, ce, at, vt, Li, Gt, Dt = 0,
    Ni = function() {
        return typeof window != "undefined"
    },
    Xi = function() {
        return D || Ni() && (D = window.gsap) && D.registerPlugin && D
    },
    Ne = function(t) {
        return typeof t == "function"
    },
    ct = function(t) {
        return typeof t == "object"
    },
    ue = function(t) {
        return typeof t == "undefined"
    },
    Tt = function() {
        return !1
    },
    ut = "transform",
    Qt = "transformOrigin",
    ke = function(t) {
        return Math.round(t * 1e4) / 1e4
    },
    nt = Array.isArray,
    wt = function(t, o) {
        var i = te.createElementNS ? te.createElementNS((o || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : te.createElement(t);
        return i.style ? i : te.createElement(t)
    },
    hi = 180 / Math.PI,
    Be = 1e20,
    _o = new $e,
    Le = Date.now || function() {
        return new Date().getTime()
    },
    We = [],
    Ke = {},
    bo = 0,
    vo = /^(?:a|input|textarea|button|select)$/i,
    gi = 0,
    Ge = {},
    Te = {},
    Ri = function(t, o) {
        var i = {},
            r;
        for (r in t) i[r] = o ? t[r] * o : t[r];
        return i
    },
    To = function(t, o) {
        for (var i in o) i in t || (t[i] = o[i]);
        return t
    },
    xi = function c(t, o) {
        for (var i = t.length, r; i--;) o ? t[i].style.touchAction = o : t[i].style.removeProperty("touch-action"), r = t[i].children, r && r.length && c(r, o)
    },
    Yi = function() {
        return We.forEach(function(t) {
            return t()
        })
    },
    So = function(t) {
        We.push(t), We.length === 1 && D.ticker.add(Yi)
    },
    yi = function() {
        return !We.length && D.ticker.remove(Yi)
    },
    mi = function(t) {
        for (var o = We.length; o--;) We[o] === t && We.splice(o, 1);
        D.to(yi, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: yi,
            data: "_draggable"
        })
    },
    Do = function(t, o) {
        for (var i in o) i in t || (t[i] = o[i]);
        return t
    },
    Q = function(t, o, i, r) {
        if (t.addEventListener) {
            var s = pt[o];
            r = r || (ki ? {
                passive: !1
            } : null), t.addEventListener(s || o, i, r), s && o !== s && t.addEventListener(o, i, r)
        }
    },
    z = function(t, o, i, r) {
        if (t.removeEventListener) {
            var s = pt[o];
            t.removeEventListener(s || o, i, r), s && o !== s && t.removeEventListener(o, i, r)
        }
    },
    re = function(t) {
        t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation()
    },
    Eo = function(t, o) {
        for (var i = t.length; i--;)
            if (t[i].identifier === o) return !0
    },
    Mo = function c(t) {
        Zt = t.touches && Dt < t.touches.length, z(t.target, "touchend", c)
    },
    wi = function(t) {
        Zt = t.touches && Dt < t.touches.length, Q(t.target, "touchend", Mo)
    },
    Ue = function(t) {
        return Y.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0
    },
    qe = function(t) {
        return Y.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0
    },
    _i = function c(t, o) {
        Q(t, "scroll", o), Ze(t.parentNode) || c(t.parentNode, o)
    },
    bi = function c(t, o) {
        z(t, "scroll", o), Ze(t.parentNode) || c(t.parentNode, o)
    },
    Ze = function(t) {
        return !t || t === pe || t.nodeType === 9 || t === te.body || t === Y || !t.nodeType || !t.parentNode
    },
    vi = function(t, o) {
        var i = o === "x" ? "Width" : "Height",
            r = "scroll" + i,
            s = "client" + i;
        return Math.max(0, Ze(t) ? Math.max(pe[r], Ee[r]) - (Y["inner" + i] || pe[s] || Ee[s]) : t[r] - t[s])
    },
    Bt = function c(t, o) {
        var i = vi(t, "x"),
            r = vi(t, "y");
        Ze(t) ? t = Te : c(t.parentNode, o), t._gsMaxScrollX = i, t._gsMaxScrollY = r, o || (t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0)
    },
    It = function(t, o, i) {
        var r = t.style;
        r && (ue(r[o]) && (o = lt(o, t) || o), i == null ? r.removeProperty && r.removeProperty(o.replace(/([A-Z])/g, "-$1").toLowerCase()) : r[o] = i)
    },
    ht = function(t) {
        return Y.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t)
    },
    Ie = {},
    Qe = function(t) {
        if (t === Y) return Ie.left = Ie.top = 0, Ie.width = Ie.right = pe.clientWidth || t.innerWidth || Ee.clientWidth || 0, Ie.height = Ie.bottom = (t.innerHeight || 0) - 20 < pe.clientHeight ? pe.clientHeight : t.innerHeight || Ee.clientHeight || 0, Ie;
        var o = t.ownerDocument || te,
            i = ue(t.pageX) ? !t.nodeType && !ue(t.left) && !ue(t.top) ? t : Xe(t)[0].getBoundingClientRect() : {
                left: t.pageX - qe(o),
                top: t.pageY - Ue(o),
                right: t.pageX - qe(o) + 1,
                bottom: t.pageY - Ue(o) + 1
            };
        return ue(i.right) && !ue(i.width) ? (i.right = i.left + i.width, i.bottom = i.top + i.height) : ue(i.width) && (i = {
            width: i.right - i.left,
            height: i.bottom - i.top,
            right: i.right,
            left: i.left,
            bottom: i.bottom,
            top: i.top
        }), i
    },
    H = function(t, o, i) {
        var r = t.vars,
            s = r[i],
            f = t._listeners[o],
            a;
        return Ne(s) && (a = s.apply(r.callbackScope || t, r[i + "Params"] || [t.pointerEvent])), f && t.dispatchEvent(o) === !1 && (a = !1), a
    },
    Ti = function(t, o) {
        var i = Xe(t)[0],
            r, s, f;
        return !i.nodeType && i !== Y ? ue(t.left) ? (s = t.min || t.minX || t.minRotation || 0, r = t.min || t.minY || 0, {
            left: s,
            top: r,
            width: (t.max || t.maxX || t.maxRotation || 0) - s,
            height: (t.max || t.maxY || 0) - r
        }) : (f = {
            x: 0,
            y: 0
        }, {
            left: t.left - f.x,
            top: t.top - f.y,
            width: t.width,
            height: t.height
        }) : Po(i, o)
    },
    le = {},
    Po = function(t, o) {
        o = Xe(o)[0];
        var i = t.getBBox && t.ownerSVGElement,
            r = t.ownerDocument || te,
            s, f, a, y, p, h, _, b, e, v, M, A, N;
        if (t === Y) a = Ue(r), s = qe(r), f = s + (r.documentElement.clientWidth || t.innerWidth || r.body.clientWidth || 0), y = a + ((t.innerHeight || 0) - 20 < r.documentElement.clientHeight ? r.documentElement.clientHeight : t.innerHeight || r.body.clientHeight || 0);
        else {
            if (o === Y || ue(o)) return t.getBoundingClientRect();
            s = a = 0, i ? (v = t.getBBox(), M = v.width, A = v.height) : (t.viewBox && (v = t.viewBox.baseVal) && (s = v.x || 0, a = v.y || 0, M = v.width, A = v.height), M || (N = ht(t), v = N.boxSizing === "border-box", M = (parseFloat(N.width) || t.clientWidth || 0) + (v ? 0 : parseFloat(N.borderLeftWidth) + parseFloat(N.borderRightWidth)), A = (parseFloat(N.height) || t.clientHeight || 0) + (v ? 0 : parseFloat(N.borderTopWidth) + parseFloat(N.borderBottomWidth)))), f = M, y = A
        }
        return t === o ? {
            left: s,
            top: a,
            width: f - s,
            height: y - a
        } : (p = Fe(o, !0).multiply(Fe(t)), h = p.apply({
            x: s,
            y: a
        }), _ = p.apply({
            x: f,
            y: a
        }), b = p.apply({
            x: f,
            y
        }), e = p.apply({
            x: s,
            y
        }), s = Math.min(h.x, _.x, b.x, e.x), a = Math.min(h.y, _.y, b.y, e.y), {
            left: s,
            top: a,
            width: Math.max(h.x, _.x, b.x, e.x) - s,
            height: Math.max(h.y, _.y, b.y, e.y) - a
        })
    },
    Ft = function(t, o, i, r, s, f) {
        var a = {},
            y, p, h;
        if (o)
            if (s !== 1 && o instanceof Array) {
                if (a.end = y = [], h = o.length, ct(o[0]))
                    for (p = 0; p < h; p++) y[p] = Ri(o[p], s);
                else
                    for (p = 0; p < h; p++) y[p] = o[p] * s;
                i += 1.1, r -= 1.1
            } else Ne(o) ? a.end = function(_) {
                var b = o.call(t, _),
                    e, v;
                if (s !== 1)
                    if (ct(b)) {
                        e = {};
                        for (v in b) e[v] = b[v] * s;
                        b = e
                    } else b *= s;
                return b
            } : a.end = o;
        return (i || i === 0) && (a.max = i), (r || r === 0) && (a.min = r), f && (a.velocity = 0), a
    },
    Co = function c(t) {
        var o;
        return !t || !t.getAttribute || t === Ee ? !1 : (o = t.getAttribute("data-clickable")) === "true" || o !== "false" && (vo.test(t.nodeName + "") || t.getAttribute("contentEditable") === "true") ? !0 : c(t.parentNode)
    },
    _t = function(t, o) {
        for (var i = t.length, r; i--;) r = t[i], r.ondragstart = r.onselectstart = o ? null : Tt, D.set(r, {
            lazy: !0,
            userSelect: o ? "text" : "none"
        })
    },
    ko = function c(t) {
        if (ht(t).position === "fixed") return !0;
        if (t = t.parentNode, t && t.nodeType === 1) return c(t)
    },
    Oi, Kt, Lo = function(t, o) {
        t = D.utils.toArray(t)[0], o = o || {};
        var i = document.createElement("div"),
            r = i.style,
            s = t.firstChild,
            f = 0,
            a = 0,
            y = t.scrollTop,
            p = t.scrollLeft,
            h = t.scrollWidth,
            _ = t.scrollHeight,
            b = 0,
            e = 0,
            v = 0,
            M, A, N, he, we, ge;
        Oi && o.force3D !== !1 ? (we = "translate3d(", ge = "px,0px)") : ut && (we = "translate(", ge = "px)"), this.scrollTop = function(P, j) {
            if (!arguments.length) return -this.top();
            this.top(-P, j)
        }, this.scrollLeft = function(P, j) {
            if (!arguments.length) return -this.left();
            this.left(-P, j)
        }, this.left = function(P, j) {
            if (!arguments.length) return -(t.scrollLeft + a);
            var I = t.scrollLeft - p,
                C = a;
            if ((I > 2 || I < -2) && !j) {
                p = t.scrollLeft, D.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                }), this.left(-p), o.onKill && o.onKill();
                return
            }
            P = -P, P < 0 ? (a = P - .5 | 0, P = 0) : P > e ? (a = P - e | 0, P = e) : a = 0, (a || C) && (this._skip || (r[ut] = we + -a + "px," + -f + ge), a + b >= 0 && (r.paddingRight = a + b + "px")), t.scrollLeft = P | 0, p = t.scrollLeft
        }, this.top = function(P, j) {
            if (!arguments.length) return -(t.scrollTop + f);
            var I = t.scrollTop - y,
                C = f;
            if ((I > 2 || I < -2) && !j) {
                y = t.scrollTop, D.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                }), this.top(-y), o.onKill && o.onKill();
                return
            }
            P = -P, P < 0 ? (f = P - .5 | 0, P = 0) : P > v ? (f = P - v | 0, P = v) : f = 0, (f || C) && (this._skip || (r[ut] = we + -a + "px," + -f + ge)), t.scrollTop = P | 0, y = t.scrollTop
        }, this.maxScrollTop = function() {
            return v
        }, this.maxScrollLeft = function() {
            return e
        }, this.disable = function() {
            for (s = i.firstChild; s;) he = s.nextSibling, t.appendChild(s), s = he;
            t === i.parentNode && t.removeChild(i)
        }, this.enable = function() {
            if (s = t.firstChild, s !== i) {
                for (; s;) he = s.nextSibling, i.appendChild(s), s = he;
                t.appendChild(i), this.calibrate()
            }
        }, this.calibrate = function(P) {
            var j = t.clientWidth === M,
                I, C, _e;
            y = t.scrollTop, p = t.scrollLeft, !(j && t.clientHeight === A && i.offsetHeight === N && h === t.scrollWidth && _ === t.scrollHeight && !P) && ((f || a) && (C = this.left(), _e = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), I = ht(t), (!j || P) && (r.display = "block", r.width = "auto", r.paddingRight = "0px", b = Math.max(0, t.scrollWidth - t.clientWidth), b && (b += parseFloat(I.paddingLeft) + (Kt ? parseFloat(I.paddingRight) : 0))), r.display = "inline-block", r.position = "relative", r.overflow = "visible", r.verticalAlign = "top", r.boxSizing = "content-box", r.width = "100%", r.paddingRight = b + "px", Kt && (r.paddingBottom = I.paddingBottom), M = t.clientWidth, A = t.clientHeight, h = t.scrollWidth, _ = t.scrollHeight, e = t.scrollWidth - M, v = t.scrollHeight - A, N = i.offsetHeight, r.display = "block", (C || _e) && (this.left(C), this.top(_e)))
        }, this.content = i, this.element = t, this._skip = !1, this.enable()
    },
    Ht = function(t) {
        if (Ni() && document.body) {
            var o = window && window.navigator;
            Y = window, te = document, pe = te.documentElement, Ee = te.body, At = wt("div"), vt = !!window.PointerEvent, Se = wt("div"), Se.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", at = Se.style.cursor === "grab" ? "grab" : "move", st = o && o.userAgent.toLowerCase().indexOf("android") !== -1, Vt = "ontouchstart" in pe && "orientation" in Y || o && (o.MaxTouchPoints > 0 || o.msMaxTouchPoints > 0), Kt = function() {
                var i = wt("div"),
                    r = wt("div"),
                    s = r.style,
                    f = Ee,
                    a;
                return s.display = "inline-block", s.position = "relative", i.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", i.appendChild(r), f.appendChild(i), a = r.offsetHeight + 18 > i.scrollHeight, f.removeChild(i), a
            }(), pt = function(i) {
                for (var r = i.split(","), s = ("onpointerdown" in At ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in At ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : i).split(","), f = {}, a = 4; --a > -1;) f[r[a]] = s[a], f[s[a]] = r[a];
                try {
                    pe.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function() {
                            ki = 1
                        }
                    }))
                } catch (y) {}
                return f
            }("touchstart,touchmove,touchend,touchcancel"), Q(te, "touchcancel", Tt), Q(Y, "touchmove", Tt), Ee && Ee.addEventListener("touchstart", Tt), Q(te, "contextmenu", function() {
                for (var i in Ke) Ke[i].isPressed && Ke[i].endDrag()
            }), D = zt = Xi()
        }
        D ? (ce = D.plugins.inertia, Li = D.core.context || function() {}, lt = D.utils.checkPrefix, ut = lt(ut), Qt = lt(Qt), Xe = D.utils.toArray, Gt = D.core.getStyleSaver, Oi = !!lt("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)")
    },
    No = function() {
        function c(o) {
            this._listeners = {}, this.target = o || this
        }
        var t = c.prototype;
        return t.addEventListener = function(i, r) {
            var s = this._listeners[i] || (this._listeners[i] = []);
            ~s.indexOf(r) || s.push(r)
        }, t.removeEventListener = function(i, r) {
            var s = this._listeners[i],
                f = s && s.indexOf(r);
            f >= 0 && s.splice(f, 1)
        }, t.dispatchEvent = function(i) {
            var r = this,
                s;
            return (this._listeners[i] || []).forEach(function(f) {
                return f.call(r, {
                    type: i,
                    target: r.target
                }) === !1 && (s = !1)
            }), s
        }, c
    }(),
    Je = function(c) {
        wo(t, c);

        function t(o, i) {
            var r;
            r = c.call(this) || this, zt || Ht(1), o = Xe(o)[0], r.styles = Gt && Gt(o, "transform,left,top"), ce || (ce = D.plugins.inertia), r.vars = i = Ri(i || {}), r.target = o, r.x = r.y = r.rotation = 0, r.dragResistance = parseFloat(i.dragResistance) || 0, r.edgeResistance = isNaN(i.edgeResistance) ? 1 : parseFloat(i.edgeResistance) || 0, r.lockAxis = i.lockAxis, r.autoScroll = i.autoScroll || 0, r.lockedAxis = null, r.allowEventDefault = !!i.allowEventDefault, D.getProperty(o, "x");
            var s = (i.type || "x,y").toLowerCase(),
                f = ~s.indexOf("x") || ~s.indexOf("y"),
                a = s.indexOf("rotation") !== -1,
                y = a ? "rotation" : f ? "x" : "left",
                p = f ? "y" : "top",
                h = !!(~s.indexOf("x") || ~s.indexOf("left") || s === "scroll"),
                _ = !!(~s.indexOf("y") || ~s.indexOf("top") || s === "scroll"),
                b = i.minimumMovement || 2,
                e = pi(r),
                v = Xe(i.trigger || i.handle || o),
                M = {},
                A = 0,
                N = !1,
                he = i.autoScrollMarginTop || 40,
                we = i.autoScrollMarginRight || 40,
                ge = i.autoScrollMarginBottom || 40,
                P = i.autoScrollMarginLeft || 40,
                j = i.clickableTest || Co,
                I = 0,
                C = o._gsap || D.core.getCache(o),
                _e = ko(o),
                ze = function(n, u) {
                    return parseFloat(C.get(o, n, u))
                },
                k = o.ownerDocument || te,
                be, T, xe, ye, U, V, Re, Jt, jt, B, O, G, W, gt, ie, je, K, Mt, Me, Pe, Ye, et, q, L, ei, oe, se, Pt, Ct, ti, ee, ii, xt, oi = function(n) {
                    return re(n), n.stopImmediatePropagation && n.stopImmediatePropagation(), !1
                },
                me = function w(n) {
                    if (e.autoScroll && e.isDragging && (N || K)) {
                        var u = o,
                            l = e.autoScroll * 15,
                            d, g, x, S, m, X, E, R;
                        for (N = !1, Te.scrollTop = Y.pageYOffset != null ? Y.pageYOffset : k.documentElement.scrollTop != null ? k.documentElement.scrollTop : k.body.scrollTop, Te.scrollLeft = Y.pageXOffset != null ? Y.pageXOffset : k.documentElement.scrollLeft != null ? k.documentElement.scrollLeft : k.body.scrollLeft, S = e.pointerX - Te.scrollLeft, m = e.pointerY - Te.scrollTop; u && !g;) g = Ze(u.parentNode), d = g ? Te : u.parentNode, x = g ? {
                            bottom: Math.max(pe.clientHeight, Y.innerHeight || 0),
                            right: Math.max(pe.clientWidth, Y.innerWidth || 0),
                            left: 0,
                            top: 0
                        } : d.getBoundingClientRect(), X = E = 0, _ && (R = d._gsMaxScrollY - d.scrollTop, R < 0 ? E = R : m > x.bottom - ge && R ? (N = !0, E = Math.min(R, l * (1 - Math.max(0, x.bottom - m) / ge) | 0)) : m < x.top + he && d.scrollTop && (N = !0, E = -Math.min(d.scrollTop, l * (1 - Math.max(0, m - x.top) / he) | 0)), E && (d.scrollTop += E)), h && (R = d._gsMaxScrollX - d.scrollLeft, R < 0 ? X = R : S > x.right - we && R ? (N = !0, X = Math.min(R, l * (1 - Math.max(0, x.right - S) / we) | 0)) : S < x.left + P && d.scrollLeft && (N = !0, X = -Math.min(d.scrollLeft, l * (1 - Math.max(0, S - x.left) / P) | 0)), X && (d.scrollLeft += X)), g && (X || E) && (Y.scrollTo(d.scrollLeft, d.scrollTop), ot(e.pointerX + X, e.pointerY + E)), u = d
                    }
                    if (K) {
                        var F = e.x,
                            J = e.y;
                        a ? (e.deltaX = F - parseFloat(C.rotation), e.rotation = F, C.rotation = F + "deg", C.renderTransform(1, C)) : T ? (_ && (e.deltaY = J - T.top(), T.top(J)), h && (e.deltaX = F - T.left(), T.left(F))) : f ? (_ && (e.deltaY = J - parseFloat(C.y), C.y = J + "px"), h && (e.deltaX = F - parseFloat(C.x), C.x = F + "px"), C.renderTransform(1, C)) : (_ && (e.deltaY = J - parseFloat(o.style.top || 0), o.style.top = J + "px"), h && (e.deltaX = F - parseFloat(o.style.left || 0), o.style.left = F + "px")), Jt && !n && !Pt && (Pt = !0, H(e, "drag", "onDrag") === !1 && (h && (e.x -= e.deltaX), _ && (e.y -= e.deltaY), w(!0)), Pt = !1)
                    }
                    K = !1
                },
                Oe = function(n, u) {
                    var l = e.x,
                        d = e.y,
                        g, x;
                    o._gsap || (C = D.core.getCache(o)), C.uncache && D.getProperty(o, "x"), f ? (e.x = parseFloat(C.x), e.y = parseFloat(C.y)) : a ? e.x = e.rotation = parseFloat(C.rotation) : T ? (e.y = T.top(), e.x = T.left()) : (e.y = parseFloat(o.style.top || (x = ht(o)) && x.top) || 0, e.x = parseFloat(o.style.left || (x || {}).left) || 0), (Me || Pe || Ye) && !u && (e.isDragging || e.isThrowing) && (Ye && (Ge.x = e.x, Ge.y = e.y, g = Ye(Ge), g.x !== e.x && (e.x = g.x, K = !0), g.y !== e.y && (e.y = g.y, K = !0)), Me && (g = Me(e.x), g !== e.x && (e.x = g, a && (e.rotation = g), K = !0)), Pe && (g = Pe(e.y), g !== e.y && (e.y = g), K = !0)), K && me(!0), n || (e.deltaX = e.x - l, e.deltaY = e.y - d, H(e, "throwupdate", "onThrowUpdate"))
                },
                kt = function(n, u, l, d) {
                    return u == null && (u = -Be), l == null && (l = Be), Ne(n) ? function(g) {
                        var x = e.isPressed ? 1 - e.edgeResistance : 1;
                        return n.call(e, (g > l ? l + (g - l) * x : g < u ? u + (g - u) * x : g) * d) * d
                    } : nt(n) ? function(g) {
                        for (var x = n.length, S = 0, m = Be, X, E; --x > -1;) X = n[x], E = X - g, E < 0 && (E = -E), E < m && X >= u && X <= l && (S = x, m = E);
                        return n[S]
                    } : isNaN(n) ? function(g) {
                        return g
                    } : function() {
                        return n * d
                    }
                },
                Ai = function(n, u, l, d, g, x, S) {
                    return x = x && x < Be ? x * x : Be, Ne(n) ? function(m) {
                        var X = e.isPressed ? 1 - e.edgeResistance : 1,
                            E = m.x,
                            R = m.y,
                            F, J, ve;
                        return m.x = E = E > l ? l + (E - l) * X : E < u ? u + (E - u) * X : E, m.y = R = R > g ? g + (R - g) * X : R < d ? d + (R - d) * X : R, F = n.call(e, m), F !== m && (m.x = F.x, m.y = F.y), S !== 1 && (m.x *= S, m.y *= S), x < Be && (J = m.x - E, ve = m.y - R, J * J + ve * ve > x && (m.x = E, m.y = R)), m
                    } : nt(n) ? function(m) {
                        for (var X = n.length, E = 0, R = Be, F, J, ve, ne; --X > -1;) ve = n[X], F = ve.x - m.x, J = ve.y - m.y, ne = F * F + J * J, ne < R && (E = X, R = ne);
                        return R <= x ? n[E] : m
                    } : function(m) {
                        return m
                    }
                },
                Lt = function() {
                    var n, u, l, d;
                    Re = !1, T ? (T.calibrate(), e.minX = O = -T.maxScrollLeft(), e.minY = W = -T.maxScrollTop(), e.maxX = B = e.maxY = G = 0, Re = !0) : i.bounds && (n = Ti(i.bounds, o.parentNode), a ? (e.minX = O = n.left, e.maxX = B = n.left + n.width, e.minY = W = e.maxY = G = 0) : !ue(i.bounds.maxX) || !ue(i.bounds.maxY) ? (n = i.bounds, e.minX = O = n.minX, e.minY = W = n.minY, e.maxX = B = n.maxX, e.maxY = G = n.maxY) : (u = Ti(o, o.parentNode), e.minX = O = Math.round(ze(y, "px") + n.left - u.left), e.minY = W = Math.round(ze(p, "px") + n.top - u.top), e.maxX = B = Math.round(O + (n.width - u.width)), e.maxY = G = Math.round(W + (n.height - u.height))), O > B && (e.minX = B, e.maxX = B = O, O = e.minX), W > G && (e.minY = G, e.maxY = G = W, W = e.minY), a && (e.minRotation = O, e.maxRotation = B), Re = !0), i.liveSnap && (l = i.liveSnap === !0 ? i.snap || {} : i.liveSnap, d = nt(l) || Ne(l), a ? (Me = kt(d ? l : l.rotation, O, B, 1), Pe = null) : l.points ? Ye = Ai(d ? l : l.points, O, B, W, G, l.radius, T ? -1 : 1) : (h && (Me = kt(d ? l : l.x || l.left || l.scrollLeft, O, B, T ? -1 : 1)), _ && (Pe = kt(d ? l : l.y || l.top || l.scrollTop, W, G, T ? -1 : 1))))
                },
                Bi = function() {
                    e.isThrowing = !1, H(e, "throwcomplete", "onThrowComplete")
                },
                Ii = function() {
                    e.isThrowing = !1
                },
                Nt = function(n, u) {
                    var l, d, g, x;
                    n && ce ? (n === !0 && (l = i.snap || i.liveSnap || {}, d = nt(l) || Ne(l), n = {
                        resistance: (i.throwResistance || i.resistance || 1e3) / (a ? 10 : 1)
                    }, a ? n.rotation = Ft(e, d ? l : l.rotation, B, O, 1, u) : (h && (n[y] = Ft(e, d ? l : l.points || l.x || l.left, B, O, T ? -1 : 1, u || e.lockedAxis === "x")), _ && (n[p] = Ft(e, d ? l : l.points || l.y || l.top, G, W, T ? -1 : 1, u || e.lockedAxis === "y")), (l.points || nt(l) && ct(l[0])) && (n.linkedProps = y + "," + p, n.radius = l.radius))), e.isThrowing = !0, x = isNaN(i.overshootTolerance) ? i.edgeResistance === 1 ? 0 : 1 - e.edgeResistance + .2 : i.overshootTolerance, n.duration || (n.duration = {
                        max: Math.max(i.minDuration || 0, "maxDuration" in i ? i.maxDuration : 2),
                        min: isNaN(i.minDuration) ? x === 0 || ct(n) && n.resistance > 1e3 ? 0 : .5 : i.minDuration,
                        overshoot: x
                    }), e.tween = g = D.to(T || o, {
                        inertia: n,
                        data: "_draggable",
                        inherit: !1,
                        onComplete: Bi,
                        onInterrupt: Ii,
                        onUpdate: i.fastMode ? H : Oe,
                        onUpdateParams: i.fastMode ? [e, "onthrowupdate", "onThrowUpdate"] : l && l.radius ? [!1, !0] : []
                    }), i.fastMode || (T && (T._skip = !0), g.render(1e9, !0, !0), Oe(!0, !0), e.endX = e.x, e.endY = e.y, a && (e.endRotation = e.x), g.play(0), Oe(!0, !0), T && (T._skip = !1))) : Re && e.applyBounds()
                },
                ni = function(n) {
                    var u = L,
                        l;
                    L = Fe(o.parentNode, !0), n && e.isPressed && !L.equals(u || new $e) && (l = u.inverse().apply({
                        x: xe,
                        y: ye
                    }), L.apply(l, l), xe = l.x, ye = l.y), L.equals(_o) && (L = null)
                },
                yt = function() {
                    var n = 1 - e.edgeResistance,
                        u = _e ? qe(k) : 0,
                        l = _e ? Ue(k) : 0,
                        d, g, x;
                    f && (C.x = ze(y, "px") + "px", C.y = ze(p, "px") + "px", C.renderTransform()), ni(!1), le.x = e.pointerX - u, le.y = e.pointerY - l, L && L.apply(le, le), xe = le.x, ye = le.y, K && (ot(e.pointerX, e.pointerY), me(!0)), ii = Fe(o), T ? (Lt(), V = T.top(), U = T.left()) : (tt() ? (Oe(!0, !0), Lt()) : e.applyBounds(), a ? (d = o.ownerSVGElement ? [C.xOrigin - o.getBBox().x, C.yOrigin - o.getBBox().y] : (ht(o)[Qt] || "0 0").split(" "), je = e.rotationOrigin = Fe(o).apply({
                        x: parseFloat(d[0]) || 0,
                        y: parseFloat(d[1]) || 0
                    }), Oe(!0, !0), g = e.pointerX - je.x - u, x = je.y - e.pointerY + l, U = e.x, V = e.y = Math.atan2(x, g) * hi) : (V = ze(p, "px"), U = ze(y, "px"))), Re && n && (U > B ? U = B + (U - B) / n : U < O && (U = O - (O - U) / n), a || (V > G ? V = G + (V - G) / n : V < W && (V = W - (W - V) / n))), e.startX = U = ke(U), e.startY = V = ke(V)
                },
                tt = function() {
                    return e.tween && e.tween.isActive()
                },
                Fi = function() {
                    Se.parentNode && !tt() && !e.isDragging && Se.parentNode.removeChild(Se)
                },
                it = function(n, u) {
                    var l;
                    if (!be || e.isPressed || !n || (n.type === "mousedown" || n.type === "pointerdown") && !u && Le() - I < 30 && pt[e.pointerEvent.type]) {
                        ee && n && be && re(n);
                        return
                    }
                    if (ei = tt(), xt = !1, e.pointerEvent = n, pt[n.type] ? (q = ~n.type.indexOf("touch") ? n.currentTarget || n.target : k, Q(q, "touchend", ae), Q(q, "touchmove", Ae), Q(q, "touchcancel", ae), Q(k, "touchstart", wi)) : (q = null, Q(k, "mousemove", Ae)), se = null, (!vt || !q) && (Q(k, "mouseup", ae), n && n.target && Q(n.target, "mouseup", ae)), et = j.call(e, n.target) && i.dragClickables === !1 && !u, et) {
                        Q(n.target, "change", ae), H(e, "pressInit", "onPressInit"), H(e, "press", "onPress"), _t(v, !0), ee = !1;
                        return
                    }
                    if (oe = !q || h === _ || e.vars.allowNativeTouchScrolling === !1 || e.vars.allowContextMenu && n && (n.ctrlKey || n.which > 2) ? !1 : h ? "y" : "x", ee = !oe && !e.allowEventDefault, ee && (re(n), Q(Y, "touchforcechange", re)), n.changedTouches ? (n = gt = n.changedTouches[0], ie = n.identifier) : n.pointerId ? ie = n.pointerId : gt = ie = null, Dt++, So(me), ye = e.pointerY = n.pageY, xe = e.pointerX = n.pageX, H(e, "pressInit", "onPressInit"), (oe || e.autoScroll) && Bt(o.parentNode), o.parentNode && e.autoScroll && !T && !a && o.parentNode._gsMaxScrollX && !Se.parentNode && !o.getBBox && (Se.style.width = o.parentNode.scrollWidth + "px", o.parentNode.appendChild(Se)), yt(), e.tween && e.tween.kill(), e.isThrowing = !1, D.killTweensOf(T || o, M, !0), T && D.killTweensOf(o, {
                            scrollTo: 1
                        }, !0), e.tween = e.lockedAxis = null, (i.zIndexBoost || !a && !T && i.zIndexBoost !== !1) && (o.style.zIndex = t.zIndex++), e.isPressed = !0, Jt = !!(i.onDrag || e._listeners.drag), jt = !!(i.onMove || e._listeners.move), i.cursor !== !1 || i.activeCursor)
                        for (l = v.length; --l > -1;) D.set(v[l], {
                            cursor: i.activeCursor || i.cursor || (at === "grab" ? "grabbing" : at)
                        });
                    H(e, "press", "onPress")
                },
                Ae = function(n) {
                    var u = n,
                        l, d, g, x, S, m;
                    if (!be || Zt || !e.isPressed || !n) {
                        ee && n && be && re(n);
                        return
                    }
                    if (e.pointerEvent = n, l = n.changedTouches, l) {
                        if (n = l[0], n !== gt && n.identifier !== ie) {
                            for (x = l.length; --x > -1 && (n = l[x]).identifier !== ie && n.target !== o;);
                            if (x < 0) return
                        }
                    } else if (n.pointerId && ie && n.pointerId !== ie) return;
                    if (q && oe && !se && (le.x = n.pageX - (_e ? qe(k) : 0), le.y = n.pageY - (_e ? Ue(k) : 0), L && L.apply(le, le), d = le.x, g = le.y, S = Math.abs(d - xe), m = Math.abs(g - ye), (S !== m && (S > b || m > b) || st && oe === se) && (se = S > m && h ? "x" : "y", oe && se !== oe && Q(Y, "touchforcechange", re), e.vars.lockAxisOnTouchScroll !== !1 && h && _ && (e.lockedAxis = se === "x" ? "y" : "x", Ne(e.vars.onLockAxis) && e.vars.onLockAxis.call(e, u)), st && oe === se))) {
                        ae(u);
                        return
                    }!e.allowEventDefault && (!oe || se && oe !== se) && u.cancelable !== !1 ? (re(u), ee = !0) : ee && (ee = !1), e.autoScroll && (N = !0), ot(n.pageX, n.pageY, jt)
                },
                ot = function(n, u, l) {
                    var d = 1 - e.dragResistance,
                        g = 1 - e.edgeResistance,
                        x = e.pointerX,
                        S = e.pointerY,
                        m = V,
                        X = e.x,
                        E = e.y,
                        R = e.endX,
                        F = e.endY,
                        J = e.endRotation,
                        ve = K,
                        ne, Ce, Z, $, Xt, fe;
                    e.pointerX = n, e.pointerY = u, _e && (n -= qe(k), u -= Ue(k)), a ? ($ = Math.atan2(je.y - u, n - je.x) * hi, Xt = e.y - $, Xt > 180 ? (V -= 360, e.y = $) : Xt < -180 && (V += 360, e.y = $), e.x !== U || Math.max(Math.abs(xe - n), Math.abs(ye - u)) > b ? (e.y = $, Z = U + (V - $) * d) : Z = U) : (L && (fe = n * L.a + u * L.c + L.e, u = n * L.b + u * L.d + L.f, n = fe), Ce = u - ye, ne = n - xe, Ce < b && Ce > -b && (Ce = 0), ne < b && ne > -b && (ne = 0), (e.lockAxis || e.lockedAxis) && (ne || Ce) && (fe = e.lockedAxis, fe || (e.lockedAxis = fe = h && Math.abs(ne) > Math.abs(Ce) ? "y" : _ ? "x" : null, fe && Ne(e.vars.onLockAxis) && e.vars.onLockAxis.call(e, e.pointerEvent)), fe === "y" ? Ce = 0 : fe === "x" && (ne = 0)), Z = ke(U + ne * d), $ = ke(V + Ce * d)), (Me || Pe || Ye) && (e.x !== Z || e.y !== $ && !a) && (Ye && (Ge.x = Z, Ge.y = $, fe = Ye(Ge), Z = ke(fe.x), $ = ke(fe.y)), Me && (Z = ke(Me(Z))), Pe && ($ = ke(Pe($)))), Re && (Z > B ? Z = B + Math.round((Z - B) * g) : Z < O && (Z = O + Math.round((Z - O) * g)), a || ($ > G ? $ = Math.round(G + ($ - G) * g) : $ < W && ($ = Math.round(W + ($ - W) * g)))), (e.x !== Z || e.y !== $ && !a) && (a ? (e.endRotation = e.x = e.endX = Z, K = !0) : (_ && (e.y = e.endY = $, K = !0), h && (e.x = e.endX = Z, K = !0)), !l || H(e, "move", "onMove") !== !1 ? !e.isDragging && e.isPressed && (e.isDragging = xt = !0, H(e, "dragstart", "onDragStart")) : (e.pointerX = x, e.pointerY = S, V = m, e.x = X, e.y = E, e.endX = R, e.endY = F, e.endRotation = J, K = ve))
                },
                ae = function w(n, u) {
                    if (!be || !e.isPressed || n && ie != null && !u && (n.pointerId && n.pointerId !== ie && n.target !== o || n.changedTouches && !Eo(n.changedTouches, ie))) {
                        ee && n && be && re(n);
                        return
                    }
                    e.isPressed = !1;
                    var l = n,
                        d = e.isDragging,
                        g = e.vars.allowContextMenu && n && (n.ctrlKey || n.which > 2),
                        x = D.delayedCall(.001, Fi),
                        S, m, X, E, R;
                    if (q ? (z(q, "touchend", w), z(q, "touchmove", Ae), z(q, "touchcancel", w), z(k, "touchstart", wi)) : z(k, "mousemove", Ae), z(Y, "touchforcechange", re), (!vt || !q) && (z(k, "mouseup", w), n && n.target && z(n.target, "mouseup", w)), K = !1, d && (A = gi = Le(), e.isDragging = !1), mi(me), et && !g) {
                        n && (z(n.target, "change", w), e.pointerEvent = l), _t(v, !1), H(e, "release", "onRelease"), H(e, "click", "onClick"), et = !1;
                        return
                    }
                    for (m = v.length; --m > -1;) It(v[m], "cursor", i.cursor || (i.cursor !== !1 ? at : null));
                    if (Dt--, n) {
                        if (S = n.changedTouches, S && (n = S[0], n !== gt && n.identifier !== ie)) {
                            for (m = S.length; --m > -1 && (n = S[m]).identifier !== ie && n.target !== o;);
                            if (m < 0 && !u) return
                        }
                        e.pointerEvent = l, e.pointerX = n.pageX, e.pointerY = n.pageY
                    }
                    return g && l ? (re(l), ee = !0, H(e, "release", "onRelease")) : l && !d ? (ee = !1, ei && (i.snap || i.bounds) && Nt(i.inertia || i.throwProps), H(e, "release", "onRelease"), (!st || l.type !== "touchmove") && l.type.indexOf("cancel") === -1 && (H(e, "click", "onClick"), Le() - I < 300 && H(e, "doubleclick", "onDoubleClick"), E = l.target || o, I = Le(), R = function() {
                        I !== Ct && e.enabled() && !e.isPressed && !l.defaultPrevented && (E.click ? E.click() : k.createEvent && (X = k.createEvent("MouseEvents"), X.initMouseEvent("click", !0, !0, Y, 1, e.pointerEvent.screenX, e.pointerEvent.screenY, e.pointerX, e.pointerY, !1, !1, !1, !1, 0, null), E.dispatchEvent(X)))
                    }, !st && !l.defaultPrevented && D.delayedCall(.05, R))) : (Nt(i.inertia || i.throwProps), !e.allowEventDefault && l && (i.dragClickables !== !1 || !j.call(e, l.target)) && d && (!oe || se && oe === se) && l.cancelable !== !1 ? (ee = !0, re(l)) : ee = !1, H(e, "release", "onRelease")), tt() && x.duration(e.tween.duration()), d && H(e, "dragend", "onDragEnd"), !0
                },
                mt = function(n) {
                    if (n && e.isDragging && !T) {
                        var u = n.target || o.parentNode,
                            l = u.scrollLeft - u._gsScrollX,
                            d = u.scrollTop - u._gsScrollY;
                        (l || d) && (L ? (xe -= l * L.a + d * L.c, ye -= d * L.d + l * L.b) : (xe -= l, ye -= d), u._gsScrollX += l, u._gsScrollY += d, ot(e.pointerX, e.pointerY))
                    }
                },
                ri = function(n) {
                    var u = Le(),
                        l = u - I < 100,
                        d = u - A < 50,
                        g = l && Ct === I,
                        x = e.pointerEvent && e.pointerEvent.defaultPrevented,
                        S = l && ti === I,
                        m = n.isTrusted || n.isTrusted == null && l && g;
                    if ((g || d && e.vars.suppressClickOnDrag !== !1) && n.stopImmediatePropagation && n.stopImmediatePropagation(), l && !(e.pointerEvent && e.pointerEvent.defaultPrevented) && (!g || m && !S)) {
                        m && g && (ti = I), Ct = I;
                        return
                    }(e.isPressed || d || l) && (!m || !n.detail || !l || x) && re(n), !l && !d && !xt && (n && n.target && (e.pointerEvent = n), H(e, "click", "onClick"))
                },
                li = function(n) {
                    return L ? {
                        x: n.x * L.a + n.y * L.c + L.e,
                        y: n.x * L.b + n.y * L.d + L.f
                    } : {
                        x: n.x,
                        y: n.y
                    }
                };
            return Mt = t.get(o), Mt && Mt.kill(), r.startDrag = function(w, n) {
                var u, l, d, g;
                it(w || e.pointerEvent, !0), n && !e.hitTest(w || e.pointerEvent) && (u = Qe(w || e.pointerEvent), l = Qe(o), d = li({
                    x: u.left + u.width / 2,
                    y: u.top + u.height / 2
                }), g = li({
                    x: l.left + l.width / 2,
                    y: l.top + l.height / 2
                }), xe -= d.x - g.x, ye -= d.y - g.y), e.isDragging || (e.isDragging = xt = !0, H(e, "dragstart", "onDragStart"))
            }, r.drag = Ae, r.endDrag = function(w) {
                return ae(w || e.pointerEvent, !0)
            }, r.timeSinceDrag = function() {
                return e.isDragging ? 0 : (Le() - A) / 1e3
            }, r.timeSinceClick = function() {
                return (Le() - I) / 1e3
            }, r.hitTest = function(w, n) {
                return t.hitTest(e.target, w, n)
            }, r.getDirection = function(w, n) {
                var u = w === "velocity" && ce ? w : ct(w) && !a ? "element" : "start",
                    l, d, g, x, S, m;
                return u === "element" && (S = Qe(e.target), m = Qe(w)), l = u === "start" ? e.x - U : u === "velocity" ? ce.getVelocity(o, y) : S.left + S.width / 2 - (m.left + m.width / 2), a ? l < 0 ? "counter-clockwise" : "clockwise" : (n = n || 2, d = u === "start" ? e.y - V : u === "velocity" ? ce.getVelocity(o, p) : S.top + S.height / 2 - (m.top + m.height / 2), g = Math.abs(l / d), x = g < 1 / n ? "" : l < 0 ? "left" : "right", g < n && (x !== "" && (x += "-"), x += d < 0 ? "up" : "down"), x)
            }, r.applyBounds = function(w, n) {
                var u, l, d, g, x, S;
                if (w && i.bounds !== w) return i.bounds = w, e.update(!0, n);
                if (Oe(!0), Lt(), Re && !tt()) {
                    if (u = e.x, l = e.y, u > B ? u = B : u < O && (u = O), l > G ? l = G : l < W && (l = W), (e.x !== u || e.y !== l) && (d = !0, e.x = e.endX = u, a ? e.endRotation = u : e.y = e.endY = l, K = !0, me(!0), e.autoScroll && !e.isDragging))
                        for (Bt(o.parentNode), g = o, Te.scrollTop = Y.pageYOffset != null ? Y.pageYOffset : k.documentElement.scrollTop != null ? k.documentElement.scrollTop : k.body.scrollTop, Te.scrollLeft = Y.pageXOffset != null ? Y.pageXOffset : k.documentElement.scrollLeft != null ? k.documentElement.scrollLeft : k.body.scrollLeft; g && !S;) S = Ze(g.parentNode), x = S ? Te : g.parentNode, _ && x.scrollTop > x._gsMaxScrollY && (x.scrollTop = x._gsMaxScrollY), h && x.scrollLeft > x._gsMaxScrollX && (x.scrollLeft = x._gsMaxScrollX), g = x;
                    e.isThrowing && (d || e.endX > B || e.endX < O || e.endY > G || e.endY < W) && Nt(i.inertia || i.throwProps, d)
                }
                return e
            }, r.update = function(w, n, u) {
                if (n && e.isPressed) {
                    var l = Fe(o),
                        d = ii.apply({
                            x: e.x - U,
                            y: e.y - V
                        }),
                        g = Fe(o.parentNode, !0);
                    g.apply({
                        x: l.e - d.x,
                        y: l.f - d.y
                    }, d), e.x -= d.x - g.e, e.y -= d.y - g.f, me(!0), yt()
                }
                var x = e.x,
                    S = e.y;
                return ni(!n), w ? e.applyBounds() : (K && u && me(!0), Oe(!0)), n && (ot(e.pointerX, e.pointerY), K && me(!0)), e.isPressed && !n && (h && Math.abs(x - e.x) > .01 || _ && Math.abs(S - e.y) > .01 && !a) && yt(), e.autoScroll && (Bt(o.parentNode, e.isDragging), N = e.isDragging, me(!0), bi(o, mt), _i(o, mt)), e
            }, r.enable = function(w) {
                var n = {
                        lazy: !0
                    },
                    u, l, d;
                if (i.cursor !== !1 && (n.cursor = i.cursor || at), D.utils.checkPrefix("touchCallout") && (n.touchCallout = "none"), w !== "soft") {
                    for (xi(v, h === _ ? "none" : i.allowNativeTouchScrolling && o.scrollHeight === o.clientHeight == (o.scrollWidth === o.clientHeight) || i.allowEventDefault ? "manipulation" : h ? "pan-y" : "pan-x"), l = v.length; --l > -1;) d = v[l], vt || Q(d, "mousedown", it), Q(d, "touchstart", it), Q(d, "click", ri, !0), D.set(d, n), d.getBBox && d.ownerSVGElement && h !== _ && D.set(d.ownerSVGElement, {
                        touchAction: i.allowNativeTouchScrolling || i.allowEventDefault ? "manipulation" : h ? "pan-y" : "pan-x"
                    }), i.allowContextMenu || Q(d, "contextmenu", oi);
                    _t(v, !1)
                }
                return _i(o, mt), be = !0, ce && w !== "soft" && ce.track(T || o, f ? "x,y" : a ? "rotation" : "top,left"), o._gsDragID = u = o._gsDragID || "d" + bo++, Ke[u] = e, T && (T.enable(), T.element._gsDragID = u), (i.bounds || a) && yt(), i.bounds && e.applyBounds(), e
            }, r.disable = function(w) {
                for (var n = e.isDragging, u = v.length, l; --u > -1;) It(v[u], "cursor", null);
                if (w !== "soft") {
                    for (xi(v, null), u = v.length; --u > -1;) l = v[u], It(l, "touchCallout", null), z(l, "mousedown", it), z(l, "touchstart", it), z(l, "click", ri, !0), z(l, "contextmenu", oi);
                    _t(v, !0), q && (z(q, "touchcancel", ae), z(q, "touchend", ae), z(q, "touchmove", Ae)), z(k, "mouseup", ae), z(k, "mousemove", Ae)
                }
                return bi(o, mt), be = !1, ce && w !== "soft" && (ce.untrack(T || o, f ? "x,y" : a ? "rotation" : "top,left"), e.tween && e.tween.kill()), T && T.disable(), mi(me), e.isDragging = e.isPressed = et = !1, n && H(e, "dragend", "onDragEnd"), e
            }, r.enabled = function(w, n) {
                return arguments.length ? w ? e.enable(n) : e.disable(n) : be
            }, r.kill = function() {
                return e.isThrowing = !1, e.tween && e.tween.kill(), e.disable(), D.set(v, {
                    clearProps: "userSelect"
                }), delete Ke[o._gsDragID], e
            }, r.revert = function() {
                this.kill(), this.styles && this.styles.revert()
            }, ~s.indexOf("scroll") && (T = r.scrollProxy = new Lo(o, To({
                onKill: function() {
                    e.isPressed && ae(null)
                }
            }, i)), o.style.overflowY = _ && !Vt ? "auto" : "hidden", o.style.overflowX = h && !Vt ? "auto" : "hidden", o = T.content), a ? M.rotation = 1 : (h && (M[y] = 1), _ && (M[p] = 1)), C.force3D = "force3D" in i ? i.force3D : !0, Li(pi(r)), r.enable(), r
        }
        return t.register = function(i) {
            D = i, Ht()
        }, t.create = function(i, r) {
            return zt || Ht(!0), Xe(i).map(function(s) {
                return new t(s, r)
            })
        }, t.get = function(i) {
            return Ke[(Xe(i)[0] || {})._gsDragID]
        }, t.timeSinceDrag = function() {
            return (Le() - gi) / 1e3
        }, t.hitTest = function(i, r, s) {
            if (i === r) return !1;
            var f = Qe(i),
                a = Qe(r),
                y = f.top,
                p = f.left,
                h = f.right,
                _ = f.bottom,
                b = f.width,
                e = f.height,
                v = a.left > h || a.right < p || a.top > _ || a.bottom < y,
                M, A, N;
            return v || !s ? !v : (N = (s + "").indexOf("%") !== -1, s = parseFloat(s) || 0, M = {
                left: Math.max(p, a.left),
                top: Math.max(y, a.top)
            }, M.width = Math.min(h, a.right) - M.left, M.height = Math.min(_, a.bottom) - M.top, M.width < 0 || M.height < 0 ? !1 : N ? (s *= .01, A = M.width * M.height, A >= b * e * s || A >= a.width * a.height * s) : M.width > s && M.height > s)
        }, t
    }(No);
Do(Je.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1
});
Je.zIndex = 1e3;
Je.version = "3.13.0";
Xi() && D.registerPlugin(Je);
var Xo = Ui('<div class="border rounded-xl cursor-pointer text-center text-xs overflow-hidden fixed !z-100 w-18 border-third py-1.5"><div class="w-full h-full absolute left-0 top-0 bg-layer1 blur-md"></div><div class="relative left-0 top-0 w-full h-full flex flex-col center"><div class="bg-brand w-6 h-6 rounded-full flex center"></div><div class="scale-75 text-center"><div></div><div>');

function Ro() {
    return dt(qi, {
        get when() {
            return Si(() => !!Zi.login)() && lo()
        },
        get children() {
            return dt(Yo, {})
        }
    })
}
const Go = () => (Wt(() => {
    Gi(() => dt(Ro, {}), document.body)
}), null);
Di.registerPlugin(Je);
const Yo = () => {
    const [c, t] = io(""), o = () => {
        co.getDepositHistory(ci(fi({}, so()), {
            page: 1
        })).then(s => {
            var f;
            t(((f = s.list[0]) == null ? void 0 : f.currencyName) || "")
        }).catch(console.log)
    };
    Wt(() => {
        const s = Ji("/user");
        s.on("recharge-progress", o), ui(() => s.off("recharge-progress", o)), s.on("recharge-success", o), ui(() => s.off("recharge-success", o)), o()
    });
    const i = ao(),
        r = () => !(Ve.mobile ? ["/chat-public", "/game", "/enter-game"] : ["/game", "/enter-game"]).some(f => i.pathname.includes(f));
    return dt(oo, {
        get when() {
            return Si(() => !!r())() && c()
        },
        children: s => {
            let f;
            const a = ji(),
                y = eo(),
                p = 12,
                h = () => {
                    try {
                        return parseInt(getComputedStyle(document.documentElement).getPropertyValue("--safe-bottom")) || 0
                    } catch (e) {
                        return 0
                    }
                },
                _ = () => {
                    var A, N;
                    const e = ((A = document.getElementsByClassName("page-header")[0]) == null ? void 0 : A.clientHeight) || (Ve.mobile ? 56 : 60) * Ve.remScale,
                        v = ((N = document.getElementsByClassName("tabbar")[0]) == null ? void 0 : N.clientHeight) || (Ve.mobile ? 72 : 10) * Ve.remScale,
                        M = (f == null ? void 0 : f.clientWidth) || 0;
                    return {
                        minX: -a.width + M + p + 2,
                        maxX: p,
                        minY: e,
                        maxY: a.height - e - v - 12 - h()
                    }
                };
            let b;
            return Wt(() => {
                b = Je.create(f, {
                    bounds: _(),
                    onClick: () => y("/pending-history"),
                    alignRight: !0,
                    type: "x,y",
                    onDragEnd: function() {
                        if (!Ve.mobile) return;
                        const e = -a.width / 2 + (f == null ? void 0 : f.clientWidth),
                            v = this.x < e ? _().minX : _().maxX;
                        Di.to(this.target, {
                            x: v,
                            duration: .3,
                            ease: "power2.out"
                        })
                    }
                })[0]
            }), no(ro(_, e => {
                b && b.applyBounds(e)
            })), (() => {
                var e = Xo(),
                    v = e.firstChild,
                    M = v.nextSibling,
                    A = M.firstChild,
                    N = A.nextSibling,
                    he = N.firstChild,
                    we = he.nextSibling,
                    ge = f;
                return typeof ge == "function" ? Qi(ge, e) : f = e, e.style.setProperty("right", "12px"), e.style.setProperty("top", "12px"), Rt(A, dt(fo, {
                    name: "Deposit"
                })), Rt(he, () => di("Deposit")), Rt(we, () => di("In progress")), Ki(P => (P = to.darken ? "0px 0px 12px rgba(0, 0, 0, .4)" : "0px 0px 12px rgba(178, 178, 178, 0.4)") != null ? e.style.setProperty("box-shadow", P) : e.style.removeProperty("box-shadow")), e
            })()
        }
    })
};
export {
    Go as
    default
};