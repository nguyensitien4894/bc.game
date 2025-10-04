var k = Object.defineProperty,
    F = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty,
    R = Object.prototype.propertyIsEnumerable;
var P = (n, e, t) => e in n ? k(n, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[e] = t,
    y = (n, e) => {
        for (var t in e || (e = {})) L.call(e, t) && P(n, t, e[t]);
        if (m)
            for (var t of m(e)) R.call(e, t) && P(n, t, e[t]);
        return n
    },
    T = (n, e) => F(n, I(e));
import {
    t as X,
    b as j
} from "./_baseFindIndex-928665d4.js";
import {
    b as q
} from "./_baseIteratee-a7d854cc.js";
import {
    b as A,
    d as N,
    i as f,
    t as v,
    c as h,
    e as b,
    a as D,
    u as G,
    h as H,
    m as J
} from "./web-46c35164.js";
import {
    a0 as E,
    c as $,
    T as K,
    s as O
} from "./manifest-d92afe19.js";
import {
    j as Q,
    b as w,
    d as U,
    F as x
} from "./solid-js-871c99e1.js";
var V = Math.max,
    W = Math.min;

function ie(n, e, t) {
    var c = n == null ? 0 : n.length;
    if (!c) return -1;
    var i = c - 1;
    return t !== void 0 && (i = X(t), i = t < 0 ? V(c + i, 0) : W(i, c - 1)), j(n, q(e), i, !0)
}
var Y = v('<div><div class="h-full rounded-xl">'),
    Z = v('<div class="relative flex w-full"><div class="invisible flex flex-row">'),
    ee = v("<div class=absolute>"),
    re = v("<div class=relative>"),
    te = v("<div>");
const de = n => {
    const [e, t] = Q(n, ["progress", "milestones", "renderProgress"]), [c, i] = w(), [_, z] = w(), B = E(c), C = E(_), M = () => h(K, {
        get when() {
            return e.renderProgress
        },
        get fallback() {
            return (() => {
                var s = Y(),
                    p = s.firstChild;
                return p.style.setProperty("background-image", "linear-gradient(90deg, #9FE871 0%, #24EE89 100%)"), b(r => {
                    var d, u;
                    var g = $("absolute left-0 right-0 top-1/2 -z-10 mt-[1px] h-[0.5rem] -translate-y-1/2 rounded-xl", O.darken ? "bg-alw_dark" : "bg-alw_white"),
                        a = ((d = B.width) != null ? d : 0) / 2 + "px",
                        l = ((u = C.width) != null ? u : 0) / 2 + "px",
                        o = `${e.progress}%`;
                    return g !== r.e && D(s, r.e = g), a !== r.t && ((r.t = a) != null ? s.style.setProperty("margin-left", a) : s.style.removeProperty("margin-left")), l !== r.a && ((r.a = l) != null ? s.style.setProperty("margin-right", l) : s.style.removeProperty("margin-right")), o !== r.o && ((r.o = o) != null ? p.style.setProperty("width", o) : p.style.removeProperty("width")), r
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0
                }), s
            })()
        },
        get children() {
            return e.renderProgress(e.progress)
        }
    }), S = () => {
        const s = e.milestones;
        U(() => {
            console.log(e.progress, e.milestones, "milestone")
        });
        const p = (r, g) => {
            var o;

            function a() {
                switch (r.condition) {
                    case "greater":
                        return e.progress > r.progressTarget;
                    case "greaterAndEqual":
                    default:
                        return e.progress >= r.progressTarget
                }
            }
            const l = (o = s[g + 1]) == null ? void 0 : o.progressTarget;
            return J(() => r.icon(T(y({}, r), {
                index: g,
                reached: a(),
                progress: e.progress,
                lastReached: a() && (e.progress < l || !l)
            })))
        };
        return (() => {
            var r = Z(),
                g = r.firstChild;
            return f(r, h(x, {
                each: s,
                children: (a, l) => {
                    const o = () => a.progressTarget === 0 ? {} : a.progressTarget === 100 ? {
                        left: `${100*(a.progressTarget/100)}%`,
                        transform: "translateX(-100%)"
                    } : {
                        left: `${100*(a.progressTarget/100)}%`,
                        transform: `translateX(-${100*(a.progressTarget/100)}%)`
                    };
                    return (() => {
                        var d = ee();
                        return G(u => {
                            l() === 0 && a.progressTarget === 0 && i(u), l() === s.length - 1 && a.progressTarget === 100 && z(u)
                        }, d), f(d, () => p(a, l())), b(u => H(d, o(), u)), d
                    })()
                }
            }), g), f(g, h(x, {
                each: s,
                children: (a, l) => (() => {
                    var o = re();
                    return f(o, () => p(a, l())), o
                })()
            })), r
        })()
    };
    return (() => {
        var s = te();
        return A(s, N(t, {
            get class() {
                return $("relative z-10", t.class)
            }
        }), !1, !0), f(s, M, null), f(s, S, null), s
    })()
};
export {
    de as C, ie as f
};