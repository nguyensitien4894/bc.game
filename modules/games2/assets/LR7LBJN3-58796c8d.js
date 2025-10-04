var E = Object.defineProperty,
    S = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty,
    P = Object.prototype.propertyIsEnumerable;
var D = (e, t, n) => t in e ? E(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    c = (e, t) => {
        for (var n in t || (t = {})) I.call(t, n) && D(e, n, t[n]);
        if (w)
            for (var n of w(t)) P.call(t, n) && D(e, n, t[n]);
        return e
    },
    m = (e, t) => S(e, T(t));
import {
    a5 as L,
    a9 as M,
    c as $,
    m as h,
    ak as k,
    j as x,
    o as z
} from "./manifest-794ca152.js";
var A = e => typeof e != "function" || e.length ? e : e();

function W(e, ...t) {
    return typeof e == "function" ? e(...t) : e
}
let g = new Map,
    b = !1;
try {
    b = new Intl.NumberFormat("de-DE", {
        signDisplay: "exceptZero"
    }).resolvedOptions().signDisplay === "exceptZero"
} catch (e) {}
let d = !1;
try {
    d = new Intl.NumberFormat("de-DE", {
        style: "unit",
        unit: "degree"
    }).resolvedOptions().style === "unit"
} catch (e) {}
const F = {
    degree: {
        narrow: {
            default: "°",
            "ja-JP": " 度",
            "zh-TW": "度",
            "sl-SI": " °"
        }
    }
};
class N {
    format(t) {
        let n = "";
        if (n = b || this.options.signDisplay == null ? this.numberFormatter.format(t) : function(r, i, o) {
                if (i === "auto") return r.format(o);
                if (i === "never") return r.format(Math.abs(o)); {
                    let s = !1;
                    if (i === "always" ? s = o > 0 || Object.is(o, 0) : i === "exceptZero" && (Object.is(o, -0) || Object.is(o, 0) ? o = Math.abs(o) : s = o > 0), s) {
                        let f = r.format(-o),
                            u = r.format(o),
                            l = f.replace(u, "").replace(/\u200e|\u061C/, "");
                        return f.replace(u, "!!!").replace(l, "+").replace("!!!", u)
                    }
                    return r.format(o)
                }
            }(this.numberFormatter, this.options.signDisplay, t), this.options.style === "unit" && !d) {
            var a;
            let {
                unit: r,
                unitDisplay: i = "short",
                locale: o
            } = this.resolvedOptions();
            if (!r) return n;
            let s = (a = F[r]) === null || a === void 0 ? void 0 : a[i];
            n += s[o] || s.default
        }
        return n
    }
    formatToParts(t) {
        return this.numberFormatter.formatToParts(t)
    }
    formatRange(t, n) {
        if (typeof this.numberFormatter.formatRange == "function") return this.numberFormatter.formatRange(t, n);
        if (n < t) throw new RangeError("End date must be >= start date");
        return `${this.format(t)} – ${this.format(n)}`
    }
    formatRangeToParts(t, n) {
        if (typeof this.numberFormatter.formatRangeToParts == "function") return this.numberFormatter.formatRangeToParts(t, n);
        if (n < t) throw new RangeError("End date must be >= start date");
        let a = this.numberFormatter.formatToParts(t),
            r = this.numberFormatter.formatToParts(n);
        return [...a.map(i => m(c({}, i), {
            source: "startRange"
        })), {
            type: "literal",
            value: " – ",
            source: "shared"
        }, ...r.map(i => m(c({}, i), {
            source: "endRange"
        }))]
    }
    resolvedOptions() {
        let t = this.numberFormatter.resolvedOptions();
        return b || this.options.signDisplay == null || (t = m(c({}, t), {
            signDisplay: this.options.signDisplay
        })), d || this.options.style !== "unit" || (t = m(c({}, t), {
            style: "unit",
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        })), t
    }
    constructor(t, n = {}) {
        this.numberFormatter = function(a, r = {}) {
            let {
                numberingSystem: i
            } = r;
            if (i && a.includes("-nu-") && (a.includes("-u-") || (a += "-u-"), a += `-nu-${i}`), r.style === "unit" && !d) {
                var o;
                let {
                    unit: u,
                    unitDisplay: l = "short"
                } = r;
                if (!u) throw new Error('unit option must be provided with style: "unit"');
                if (!(!((o = F[u]) === null || o === void 0) && o[l])) throw new Error(`Unsupported unit ${u} with unitDisplay = ${l}`);
                r = m(c({}, r), {
                    style: "decimal"
                })
            }
            let s = a + (r ? Object.entries(r).sort((u, l) => u[0] < l[0] ? -1 : 1).join() : "");
            if (g.has(s)) return g.get(s);
            let f = new Intl.NumberFormat(a, r);
            return g.set(s, f), f
        }(t, n), this.options = n
    }
}
var U = new Set(["Avst", "Arab", "Armi", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
    Z = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

function q(e) {
    return function(t) {
        var a;
        if (Intl.Locale) {
            const r = (a = new Intl.Locale(t).maximize().script) != null ? a : "";
            return U.has(r)
        }
        const n = t.split("-")[0];
        return Z.has(n)
    }(e) ? "rtl" : "ltr"
}

function R() {
    let e = typeof navigator != "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e])
    } catch (t) {
        e = "en-US"
    }
    return {
        locale: e,
        direction: q(e)
    }
}
var v = R(),
    p = new Set;

function O() {
    v = R();
    for (const e of p) e(v)
}
var C = L();

function j() {
    const e = function() {
        const t = {
                locale: "en-US",
                direction: "ltr"
            },
            [n, a] = $(v),
            r = h(() => k ? t : n());
        return x(() => {
            p.size === 0 && window.addEventListener("languagechange", O), p.add(a), z(() => {
                p.delete(a), p.size === 0 && window.removeEventListener("languagechange", O)
            })
        }), {
            locale: () => r().locale,
            direction: () => r().direction
        }
    }();
    return M(C) || e
}
var y = new Map;

function B(e) {
    const {
        locale: t
    } = j(), n = h(() => t() + (e ? Object.entries(e).sort((a, r) => a[0] < r[0] ? -1 : 1).join() : ""));
    return h(() => {
        const a = n();
        let r;
        return y.has(a) && (r = y.get(a)), r || (r = new Intl.Collator(t(), e), y.set(a, r)), r
    })
}

function G(e) {
    const {
        locale: t
    } = j();
    return h(() => new N(t(), A(e)))
}
export {
    N as $, A as a, W as b, G as c, B as d, j as u
};