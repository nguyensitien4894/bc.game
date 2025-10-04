import {
    a1 as q,
    o as L,
    aA as V,
    ak as P,
    m as A,
    av as z,
    a6 as G,
    n as J,
    ah as Y,
    a7 as $,
    c as Q,
    f as H,
    aB as X
} from "./manifest-794ca152.js";
import {
    g as Z
} from "./_commonjsHelpers-0f403cef.js";
const de = () => {},
    pe = {
        equals: !1
    },
    me = e => typeof e != "function" || e.length ? e : e(),
    ge = e => Array.isArray(e) ? e : e ? [e] : [];

function ye(e, ...t) {
    return typeof e == "function" ? e(...t) : e
}
const he = !P && V ? e => q() ? L(e) : e : L;

function ve(...e) {
    return t = e, (...n) => {
        for (const o of t) o && o(...n)
    };
    var t
}
var j = P ? e => e != null && typeof e == "object" && "t" in e : e => e instanceof Element;

function N(e, t) {
    if (t(e)) return e;
    if (typeof e == "function" && !e.length) return N(e(), t);
    if (Array.isArray(e))
        for (const n of e) {
            const o = N(n, t);
            if (o) return o
        }
    return null
}

function be(e, t = j, n = j) {
    const o = A(e);
    return A(() => N(o(), P ? n : t))
}

function we(e, t, n = -1) {
    return n in e ? [...e.slice(0, n), t, ...e.slice(n)] : [...e, t]
}

function Ee(e, t) {
    const n = [...e],
        o = n.indexOf(t);
    return o !== -1 && n.splice(o, 1), n
}

function Le(e) {
    return typeof e == "number"
}

function Ae(e) {
    return Object.prototype.toString.call(e) === "[object String]"
}

function ee(e) {
    return typeof e == "function"
}

function Ne(e) {
    return t => `${e()}-${t}`
}

function Te(e, t) {
    return !!e && (e === t || e.contains(t))
}

function te(e, t = !1) {
    const {
        activeElement: n
    } = g(e);
    if (!(n != null && n.nodeName)) return null;
    if (K(n) && n.contentDocument) return te(n.contentDocument.body, t);
    if (t) {
        const o = n.getAttribute("aria-activedescendant");
        if (o) {
            const r = g(n).getElementById(o);
            if (r) return r
        }
    }
    return n
}

function Pe(e) {
    return g(e).defaultView || window
}

function g(e) {
    return e ? e.ownerDocument || e : document
}

function K(e) {
    return e.tagName === "IFRAME"
}
var ne = (e => (e.Escape = "Escape", e.Enter = "Enter", e.Tab = "Tab", e.Space = " ", e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.End = "End", e.Home = "Home", e.PageDown = "PageDown", e.PageUp = "PageUp", e))(ne || {});

function I(e) {
    var t;
    return typeof window != "undefined" && window.navigator != null && (((t = window.navigator.userAgentData) == null ? void 0 : t.brands.some(n => e.test(n.brand))) || e.test(window.navigator.userAgent))
}

function T(e) {
    var t;
    return typeof window != "undefined" && window.navigator != null && e.test(((t = window.navigator.userAgentData) == null ? void 0 : t.platform) || window.navigator.platform)
}

function x() {
    return T(/^Mac/i)
}

function oe() {
    return T(/^iPhone/i) || T(/^iPad/i) || x() && navigator.maxTouchPoints > 1
}

function xe() {
    return x() || oe()
}

function Se() {
    return I(/AppleWebKit/i) && !I(/Chrome/i)
}

function re(e, t) {
    return t && (ee(t) ? t(e) : t[0](t[1], e)), e == null ? void 0 : e.defaultPrevented
}

function Me(e) {
    return t => {
        for (const n of e) re(t, n)
    }
}

function De(e) {
    return x() ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey
}

function He(e) {
    if (e)
        if (function() {
                if (h == null) {
                    h = !1;
                    try {
                        document.createElement("div").focus({
                            get preventScroll() {
                                return h = !0, !0
                            }
                        })
                    } catch (t) {}
                }
                return h
            }()) e.focus({
            preventScroll: !0
        });
        else {
            const t = function(n) {
                let o = n.parentNode;
                const r = [],
                    i = document.scrollingElement || document.documentElement;
                for (; o instanceof HTMLElement && o !== i;)(o.offsetHeight < o.scrollHeight || o.offsetWidth < o.scrollWidth) && r.push({
                    element: o,
                    scrollTop: o.scrollTop,
                    scrollLeft: o.scrollLeft
                }), o = o.parentNode;
                return i instanceof HTMLElement && r.push({
                    element: i,
                    scrollTop: i.scrollTop,
                    scrollLeft: i.scrollLeft
                }), r
            }(e);
            e.focus(),
                function(n) {
                    for (const {
                            element: o,
                            scrollTop: r,
                            scrollLeft: i
                        } of n) o.scrollTop = r, o.scrollLeft = i
                }(t)
        }
}
var h = null,
    W = ["input:not([type='hidden']):not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "[tabindex]", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]:not([contenteditable='false'])"],
    ie = [...W, '[tabindex]:not([tabindex="-1"]):not([disabled])'],
    S = W.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])",
    ae = ie.join(':not([hidden]):not([tabindex="-1"]),');

function se(e, t) {
    const n = Array.from(e.querySelectorAll(S)).filter(O);
    return t && O(e) && n.unshift(e), n.forEach((o, r) => {
        if (K(o) && o.contentDocument) {
            const i = se(o.contentDocument.body, !1);
            n.splice(r, 1, ...i)
        }
    }), n
}

function O(e) {
    return ce(e) && ! function(t) {
        return parseInt(t.getAttribute("tabindex") || "0", 10) < 0
    }(e)
}

function ce(e) {
    return e.matches(S) && M(e)
}

function M(e, t) {
    return e.nodeName !== "#comment" && function(n) {
        if (!(n instanceof HTMLElement || n instanceof SVGElement)) return !1;
        const {
            display: o,
            visibility: r
        } = n.style;
        let i = o !== "none" && r !== "hidden" && r !== "collapse";
        if (i) {
            if (!n.ownerDocument.defaultView) return i;
            const {
                getComputedStyle: a
            } = n.ownerDocument.defaultView, {
                display: s,
                visibility: f
            } = a(n);
            i = s !== "none" && f !== "hidden" && f !== "collapse"
        }
        return i
    }(e) && function(n, o) {
        return !n.hasAttribute("hidden") && (n.nodeName !== "DETAILS" || !o || o.nodeName === "SUMMARY" || n.hasAttribute("open"))
    }(e, t) && (!e.parentElement || M(e.parentElement, e))
}

function je(e, t, n) {
    const o = t != null && t.tabbable ? ae : S,
        r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: i => {
                var a;
                return (a = t == null ? void 0 : t.from) != null && a.contains(i) ? NodeFilter.FILTER_REJECT : !i.matches(o) || !M(i) || n && ! function(s, f) {
                    return f.some(c => c.contains(s))
                }(i, n) || t != null && t.accept && !t.accept(i) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
        });
    return t != null && t.from && (r.currentNode = t.from), r
}

function Ie() {}

function Oe(e, t = -1 / 0, n = 1 / 0) {
    return Math.min(Math.max(e, t), n)
}

function ke(e, t, n, o) {
    const r = (e - (isNaN(t) ? 0 : t)) % o;
    let i = 2 * Math.abs(r) >= o ? e + Math.sign(r) * (o - Math.abs(r)) : e - r;
    isNaN(t) ? !isNaN(n) && i > n && (i = Math.floor(n / o) * o) : i < t ? i = t : !isNaN(n) && i > n && (i = t + Math.floor((n - t) / o) * o);
    const a = o.toString(),
        s = a.indexOf("."),
        f = s >= 0 ? a.length - s : 0;
    if (f > 0) {
        const c = Math.pow(10, f);
        i = Math.round(i * c) / c
    }
    return i
}

function Be(e) {
    return [e.clientX, e.clientY]
}

function Fe(e, t) {
    const [n, o] = e;
    let r = !1;
    for (let i = t.length, a = 0, s = i - 1; a < i; s = a++) {
        const [f, c] = t[a], [l, d] = t[s], [, D] = t[s === 0 ? i - 1 : s - 1] || [0, 0], y = (c - d) * (n - f) - (f - l) * (o - c);
        if (d < c) {
            if (o >= d && o < c) {
                if (y === 0) return !0;
                y > 0 && (o === d ? o > D && (r = !r) : r = !r)
            }
        } else if (c < d) {
            if (o > c && o <= d) {
                if (y === 0) return !0;
                y < 0 && (o === d ? o < D && (r = !r) : r = !r)
            }
        } else if (o == c && (n >= l && n <= f || n >= f && n <= l)) return !0
    }
    return r
}

function Re(e, t) {
    return z(e, t)
}
var p = new Map,
    k = new Set;

function B() {
    if (typeof window == "undefined") return;
    const e = t => {
        if (!t.target) return;
        const n = p.get(t.target);
        if (n && (n.delete(t.propertyName), n.size === 0 && (t.target.removeEventListener("transitioncancel", e), p.delete(t.target)), p.size === 0)) {
            for (const o of k) o();
            k.clear()
        }
    };
    document.body.addEventListener("transitionrun", t => {
        if (!t.target) return;
        let n = p.get(t.target);
        n || (n = new Set, p.set(t.target, n), t.target.addEventListener("transitioncancel", e)), n.add(t.propertyName)
    }), document.body.addEventListener("transitionend", e)
}

function Ce(e, t) {
    const n = F(e, t, "left"),
        o = F(e, t, "top"),
        r = t.offsetWidth,
        i = t.offsetHeight;
    let a = e.scrollLeft,
        s = e.scrollTop;
    const f = a + e.offsetWidth,
        c = s + e.offsetHeight;
    n <= a ? a = n : n + r > f && (a += n + r - f), o <= s ? s = o : o + i > c && (s += o + i - c), e.scrollLeft = a, e.scrollTop = s
}

function F(e, t, n) {
    const o = n === "left" ? "offsetLeft" : "offsetTop";
    let r = 0;
    for (; t.offsetParent && (r += t[o], t.offsetParent !== e);) {
        if (t.offsetParent.contains(e)) {
            r -= e[o];
            break
        }
        t = t.offsetParent
    }
    return r
}
typeof document != "undefined" && (document.readyState !== "loading" ? B() : document.addEventListener("DOMContentLoaded", B));
var Ke = {
    border: "0",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(50%)",
    height: "1px",
    margin: "0 -1px -1px 0",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px",
    "white-space": "nowrap"
};

function We(e) {
    return t => (e(t), () => e(void 0))
}

function Ue(e) {
    const [t, n] = G(e, ["as"]);
    if (!t.as) throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");
    return J(Y, $({
        get component() {
            return t.as
        }
    }, n))
}
var b, fe = Object.defineProperty,
    _e = (e, t) => {
        for (var n in t) fe(e, n, {
            get: t[n],
            enumerable: !0
        })
    },
    U = {
        exports: {}
    };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
b = U,
    function() {
        var e = {}.hasOwnProperty;

        function t() {
            for (var r = "", i = 0; i < arguments.length; i++) {
                var a = arguments[i];
                a && (r = o(r, n(a)))
            }
            return r
        }

        function n(r) {
            if (typeof r == "string" || typeof r == "number") return r;
            if (typeof r != "object") return "";
            if (Array.isArray(r)) return t.apply(null, r);
            if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) return r.toString();
            var i = "";
            for (var a in r) e.call(r, a) && r[a] && (i = o(i, a));
            return i
        }

        function o(r, i) {
            return i ? r ? r + " " + i : r + i : r
        }
        b.exports ? (t.default = t, b.exports = t) : window.classNames = t
    }();
const qe = Z(U.exports);
var R, Ve = "data-kb-top-layer",
    w = !1,
    u = [];

function m(e) {
    return u.findIndex(t => t.node === e)
}

function _() {
    return u.filter(e => e.isPointerBlocking)
}

function E() {
    return _().length > 0
}

function C(e) {
    var n;
    const t = m((n = [..._()].slice(-1)[0]) == null ? void 0 : n.node);
    return m(e) < t
}
var ze = {
        layers: u,
        isTopMostLayer: function(e) {
            return u[u.length - 1].node === e
        },
        hasPointerBlockingLayer: E,
        isBelowPointerBlockingLayer: C,
        addLayer: function(e) {
            u.push(e)
        },
        removeLayer: function(e) {
            const t = m(e);
            t < 0 || u.splice(t, 1)
        },
        indexOf: m,
        find: function(e) {
            return u[m(e)]
        },
        assignPointerEventToLayers: function() {
            for (const {
                    node: e
                } of u) e.style.pointerEvents = C(e) ? "none" : "auto"
        },
        disableBodyPointerEvents: function(e) {
            if (E() && !w) {
                const t = g(e);
                R = document.body.style.pointerEvents, t.body.style.pointerEvents = "none", w = !0
            }
        },
        restoreBodyPointerEvents: function(e) {
            if (E()) return;
            const t = g(e);
            t.body.style.pointerEvents = R, t.body.style.length === 0 && t.body.removeAttribute("style"), w = !1
        }
    },
    v = e => typeof e == "function" ? e() : e,
    Ge = (...e) => {
        return t = e, (...n) => {
            for (const o of t) o && o(...n)
        };
        var t
    },
    Je = (...e) => e.some(t => !!t()),
    Ye = e => {
        const t = A(() => {
                const a = v(e.element);
                if (a) return getComputedStyle(a)
            }),
            n = () => {
                var a, s;
                return (s = (a = t()) == null ? void 0 : a.animationName) != null ? s : "none"
            },
            [o, r] = Q(v(e.show) ? "present" : "hidden");
        let i = "none";
        return H(a => {
            const s = v(e.show);
            return X(() => {
                var l;
                if (a === s) return s;
                const f = i,
                    c = n();
                s ? r("present") : c === "none" || ((l = t()) == null ? void 0 : l.display) === "none" ? r("hidden") : r(a === !0 && f !== c ? "hiding" : "hidden")
            }), s
        }), H(() => {
            const a = v(e.element);
            if (!a) return;
            const s = c => {
                    c.target === a && (i = n())
                },
                f = c => {
                    const l = n().includes(c.animationName);
                    c.target === a && l && o() === "hiding" && r("hidden")
                };
            a.addEventListener("animationstart", s), a.addEventListener("animationcancel", f), a.addEventListener("animationend", f), L(() => {
                a.removeEventListener("animationstart", s), a.removeEventListener("animationcancel", f), a.removeEventListener("animationend", f)
            })
        }), {
            present: () => o() === "present" || o() === "hiding",
            state: o
        }
    };
export {
    Ie as A, De as B, ze as C, Ve as D, ne as E, je as F, Se as G, ge as H, me as I, he as J, Le as K, Ce as L, xe as M, x as N, be as O, Ue as P, pe as Q, ye as R, Ge as S, Je as T, _e as _, Oe as a, Ne as b, qe as c, We as d, Pe as e, ve as f, g, re as h, Te as i, He as j, ee as k, Ae as l, Re as m, de as n, Fe as o, Be as p, Me as q, te as r, Ye as s, Ee as t, ce as u, Ke as v, se as w, v as x, we as y, ke as z
};