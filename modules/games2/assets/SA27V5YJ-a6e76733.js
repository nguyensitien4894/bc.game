var le = Object.defineProperty,
    ye = Object.defineProperties;
var me = Object.getOwnPropertyDescriptors;
var O = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty,
    U = Object.prototype.propertyIsEnumerable;
var _ = (e, r, n) => r in e ? le(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[r] = n,
    p = (e, r) => {
        for (var n in r || (r = {})) M.call(r, n) && _(e, n, r[n]);
        if (O)
            for (var n of O(r)) U.call(r, n) && _(e, n, r[n]);
        return e
    },
    N = (e, r) => ye(e, me(r));
var S = (e, r) => {
    var n = {};
    for (var t in e) M.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
    if (e != null && O)
        for (var t of O(e)) r.indexOf(t) < 0 && U.call(e, t) && (n[t] = e[t]);
    return n
};
import {
    D as k,
    ar as Z,
    O as ee,
    b as m,
    ay as q,
    f as I,
    a5 as fe,
    c as w,
    m as C,
    az as h,
    n as re,
    S as de,
    v as ve,
    x as pe,
    I as be,
    t as ge,
    y as D,
    z as Ce,
    A as ne,
    a6 as Ne,
    a7 as Ae
} from "./manifest-794ca152.js";
import {
    c as he,
    l as ke,
    _ as we,
    m as Ie,
    P as Te,
    f as je
} from "./index-a8d0e4cd.js";
import {
    k as te,
    S as E,
    n as Oe,
    q as ae,
    s as G,
    u as Be
} from "./amount-63fd0790.js";

function P(e) {
    return e != null && typeof e == "object"
}
var Ve = "[object Symbol]";

function $(e) {
    return typeof e == "symbol" || P(e) && te(e) == Ve
}

function Se(e, r) {
    for (var n = -1, t = e == null ? 0 : e.length, o = Array(t); ++n < t;) o[n] = r(e[n], n, e);
    return o
}
const B = Array.isArray;
var xe = 1 / 0,
    H = E ? E.prototype : void 0,
    J = H ? H.toString : void 0;

function oe(e) {
    if (typeof e == "string") return e;
    if (B(e)) return Se(e, oe) + "";
    if ($(e)) return J ? J.call(e) : "";
    var r = e + "";
    return r == "0" && 1 / e == -xe ? "-0" : r
}
var ze = 9007199254740991,
    Fe = /^(?:0|[1-9]\d*)$/;

function Le(e, r) {
    var n = typeof e;
    return !!(r = r == null ? ze : r) && (n == "number" || n != "symbol" && Fe.test(e)) && e > -1 && e % 1 == 0 && e < r
}
var Pe = 9007199254740991;

function $e(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pe
}

function R(e) {
    return P(e) && te(e) == "[object Arguments]"
}
var ue = Object.prototype,
    _e = ue.hasOwnProperty,
    Me = ue.propertyIsEnumerable;
const Ue = R(function() {
    return arguments
}()) ? R : function(e) {
    return P(e) && _e.call(e, "callee") && !Me.call(e, "callee")
};
var qe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    De = /^\w*$/;

function Ee(e, r) {
    if (B(e)) return !1;
    var n = typeof e;
    return !(n != "number" && n != "symbol" && n != "boolean" && e != null && !$(e)) || De.test(e) || !qe.test(e) || r != null && e in Object(r)
}
var K, x, z, Ge = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    He = /\\(\\)?/g,
    Je = (K = function(e) {
        var r = [];
        return e.charCodeAt(0) === 46 && r.push(""), e.replace(Ge, function(n, t, o, u) {
            r.push(o ? u.replace(He, "$1") : t || n)
        }), r
    }, x = Oe(K, function(e) {
        return z.size === 500 && z.clear(), e
    }), z = x.cache, x);
const Re = Je;

function Ke(e) {
    return e == null ? "" : oe(e)
}

function Qe(e, r) {
    return B(e) ? e : Ee(e, r) ? [e] : Re(Ke(e))
}
var We = 1 / 0;

function Xe(e) {
    if (typeof e == "string" || $(e)) return e;
    var r = e + "";
    return r == "0" && 1 / e == -We ? "-0" : r
}

function Ye(e, r, n) {
    for (var t = -1, o = (r = Qe(r, e)).length, u = !1; ++t < o;) {
        var s = Xe(r[t]);
        if (!(u = e != null && n(e, s))) break;
        e = e[s]
    }
    return u || ++t != o ? u : !!(o = e == null ? 0 : e.length) && $e(o) && Le(s, o) && (B(e) || Ue(e))
}
var Ze = Object.prototype.hasOwnProperty;

function er(e, r) {
    return e != null && Ze.call(e, r)
}

function F(e, r) {
    return e != null && Ye(e, r, er)
}
const ce = {
        lastLogId: "0",
        currencyName: "BTC",
        aliasCurrencyName: "BTC",
        amount: new k(0),
        generalAmount: new k(0),
        bonusAmount: new k(0),
        abnormal: !0,
        sort: 3,
        display: !0,
        displayStatus: 0,
        supportTx: !0,
        useable: !1,
        areaAble: !0,
        symbol: "BTC",
        deducting: new k(0)
    },
    rr = [ce],
    nr = {
        currencyName: "BTC",
        aliasCurrencyName: "BTC",
        fullName: "Bitcoin",
        unitAmount: 1e8,
        sort: 3,
        display: !1,
        channelName: "BCG",
        channelCurrencyName: "BTC",
        precisionUnit: 7,
        currencyType: "CHAIN",
        supportChains: []
    },
    [tr, pr] = Z(() => {
        const [e, r] = ee({
            invitationCode: m.currentInvitationCode,
            currencyV2: q.currency,
            phoneCode: m.areaCode,
            countryCode: m.areaCode,
            currencyName: m.setting.currencyName,
            aliasCurrencyName: m.setting.currencyName,
            platform: {
                isAndroid: !1,
                isIOS: !1,
                isApp: !1
            }
        });
        return I(() => {
            const n = ae(m.setting.currencyName);
            r("currencyName", n), r("aliasCurrencyName", n.replace("FIAT", "")), r("countryCode", m.areaCode), r("phoneCode", m.areaCode), r("invitationCode", m.currentInvitationCode), r("currencyV2", q.currency)
        }), [e, r]
    });

function ar() {
    return {
        system: tr
    }
}
fe(null);
const L = e => ({
        name: e.aliasCurrencyName,
        symbol: e.currencyName,
        decimal: e.precisionUnit
    }),
    Q = e => {
        const s = e,
            {
                generalAmount: r,
                groupAmount: n,
                deducting: t,
                amount: o
            } = s,
            u = S(s, ["generalAmount", "groupAmount", "deducting", "amount"]);
        return N(p({}, u), {
            generalAmount: r,
            amount: o,
            deducting: t,
            bonusAmount: n.free_amount,
            symbol: u.currencyName
        })
    },
    or = Z(() => {
        const {
            system: e
        } = ar(), [r, n] = ee({
            currencies: rr,
            activeCurrency: ce,
            activeCurrencyConfig: nr
        }), [t, o] = w(null), [u, s] = w(!1), [f, v] = w(!1), [i, l] = w(!1), d = C(() => r.activeCurrency), b = C(() => r.activeCurrency.amount), V = C(() => {
            const a = r.activeCurrencyConfig.currencyName;
            return N(p({}, L(r.activeCurrencyConfig)), {
                icon: a
            })
        }), T = C(() => {
            const a = m.setting.localeCurrencyName;
            return e.currencyV2[a] ? N(p({}, L(e.currencyV2[a])), {
                icon: a
            }) : {
                name: a,
                symbol: a,
                decimal: 2,
                icon: a
            }
        }), j = a => {
            var y;
            const c = (y = e.currencyV2[a]) != null ? y : null;
            return c && N(p({}, L(c)), {
                icon: c.currencyName
            })
        }, A = a => {
            var y;
            n("activeCurrencyConfig", Be(e, a)), localStorage.setItem("activeToken", JSON.stringify(a));
            const c = (y = r.currencies) == null ? void 0 : y.find(g => G(g.currencyName, a.symbol));
            c && n("activeCurrency", c)
        };
        return I(() => {
            m.login || n("activeCurrency", a => a && N(p({}, a), {
                amount: new k(0)
            }))
        }), I(() => {
            if (f()) return;
            const a = ae(m.setting.currencyName),
                c = h[a],
                y = e.currencyV2[a];
            c && n("activeCurrency", Q(h[a])), y && n("activeCurrencyConfig", y)
        }), I(() => {
            Object.keys(h).length && n("currencies", Object.values(h).filter(g => g.display).map(g => Q(g)));
            const {
                amount: a,
                generalAmount: c,
                groupAmount: y
            } = h[r.activeCurrency.currencyName];
            n("activeCurrency", {
                amount: a,
                generalAmount: c,
                bonusAmount: y.free_amount
            }), l(m.setting.enableLocaleCurrency)
        }), {
            balance: b,
            currency: d,
            profit: t,
            isMaxBet: u,
            activeToken: V,
            activeFiatToken: T,
            isViewInFiat: i,
            setCurrency: a => n("activeCurrency", a),
            setIsViewInFiat: l,
            setActiveToken: A,
            setIsMaxBet: s,
            setProfit: o,
            setIsfrozen: v,
            isFrozen: f,
            isFiat: a => {
                let c = "";
                return typeof a == "string" ? c = a : F(a, "symbol") ? c = a.symbol : "currencyName" in a && (c = a.currencyName), [e.currencyName, e.aliasCurrencyName].some(y => y.toLowerCase() === c.toLowerCase())
            },
            findCurrency: a => {
                var y;
                let c = "";
                return typeof a == "string" && (c = a), F(a, "symbol") ? c = a.symbol : F(a, "currencyName") && (c = a.currencyName), ((y = r.currencies) == null ? void 0 : y.find(g => G(g.currencyName, c))) || null
            },
            findToken: j,
            resetToken: () => {
                v(!1);
                const a = j(m.setting.currencyName);
                a && A(a)
            },
            store: r
        }
    });

function ur() {
    return or
}

function se(e) {
    var r, n, t = "";
    if (typeof e == "string" || typeof e == "number") t += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (r = 0; r < e.length; r++) e[r] && (n = se(e[r])) && (t && (t += " "), t += n);
        else
            for (r in e) e[r] && (t && (t += " "), t += r);
    return t
}
const W = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e,
    X = function() {
        for (var e, r, n = 0, t = ""; n < arguments.length;)(e = arguments[n++]) && (r = se(e)) && (t && (t += " "), t += r);
        return t
    },
    br = (e, r) => n => {
        var t;
        if ((r == null ? void 0 : r.variants) == null) return X(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: u
        } = r, s = Object.keys(o).map(i => {
            const l = n == null ? void 0 : n[i],
                d = u == null ? void 0 : u[i];
            if (l === null) return null;
            const b = W(l) || W(d);
            return o[i][b]
        }), f = n && Object.entries(n).reduce((i, l) => {
            let [d, b] = l;
            return b === void 0 || (i[d] = b), i
        }, {}), v = r == null || (t = r.compoundVariants) === null || t === void 0 ? void 0 : t.reduce((i, l) => {
            let T = l,
                {
                    class: d,
                    className: b
                } = T,
                V = S(T, ["class", "className"]);
            return Object.entries(V).every(j => {
                let [A, a] = j;
                return Array.isArray(a) ? a.includes(p(p({}, u), f)[A]) : p(p({}, u), f)[A] === a
            }) ? [...i, d, b] : i
        }, []);
        return X(e, s, v, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
var cr = ne("<div><img>"),
    sr = ne("<span class=ml-1>");
const gr = e => {
    const {
        activeToken: r
    } = ur();
    return re(de, {
        get when() {
            return e.token || r()
        },
        get fallback() {
            return n = sr(), ve(n, () => {
                var t;
                return (t = e.token) == null ? void 0 : t.symbol
            }), n;
            var n
        },
        get children() {
            var n = cr(),
                t = n.firstChild;
            return pe(o => {
                var v;
                var u = he("rounded-full inline-flex shrink-0 size-6 items-center justify-center leading-6", e.class),
                    s = be.coinIcon(((v = e.token) == null ? void 0 : v.symbol) || r().symbol),
                    f = ge("w-4 h-4", e.imgClass);
                return u !== o.e && D(n, o.e = u), s !== o.t && Ce(t, "src", o.t = s), f !== o.a && D(t, o.a = f), o
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), n
        }
    })
};

function ir(e, r) {
    const [n, t] = w(Y(r == null ? void 0 : r()));
    return I(() => {
        var o;
        t(((o = e()) == null ? void 0 : o.tagName.toLowerCase()) || Y(r == null ? void 0 : r()))
    }), n
}

function Y(e) {
    return ke(e) ? e : void 0
}
we({}, {
    Button: () => yr,
    Root: () => ie
});
var lr = ["button", "color", "file", "image", "reset", "submit"];

function ie(e) {
    let r;
    const n = Ie({
            type: "button"
        }, e),
        [t, o] = Ne(n, ["ref", "type", "disabled"]),
        u = ir(() => r, () => "button"),
        s = C(() => {
            const i = u();
            return i != null && function(l) {
                const d = l.tagName.toLowerCase();
                return d === "button" || !(d !== "input" || !l.type) && lr.indexOf(l.type) !== -1
            }({
                tagName: i,
                type: t.type
            })
        }),
        f = C(() => u() === "input"),
        v = C(() => u() === "a" && (r == null ? void 0 : r.getAttribute("href")) != null);
    return re(Te, Ae({
        as: "button",
        ref(i) {
            var l = je(d => r = d, t.ref);
            typeof l == "function" && l(i)
        },
        get type() {
            return s() || f() ? t.type : void 0
        },
        get role() {
            return s() || v() ? void 0 : "button"
        },
        get tabIndex() {
            return s() || v() || t.disabled ? void 0 : 0
        },
        get disabled() {
            return s() || f() ? t.disabled : void 0
        },
        get "aria-disabled" () {
            return !(s() || f() || !t.disabled) || void 0
        },
        get "data-disabled" () {
            return t.disabled ? "" : void 0
        }
    }, o))
}
var yr = ie;
export {
    ie as B, gr as S, ar as a, P as b, br as c, B as d, Ue as e, Le as f, Qe as g, Ye as h, $e as i, Ee as j, $ as k, Se as l, ir as m, Ke as n, F as o, X as p, Xe as t, ur as u
};