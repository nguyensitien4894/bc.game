var De = Object.defineProperty,
    ke = Object.defineProperties;
var Le = Object.getOwnPropertyDescriptors;
var UA = Object.getOwnPropertySymbols;
var Ue = Object.prototype.hasOwnProperty,
    Ve = Object.prototype.propertyIsEnumerable;
var VA = (A, e, n) => e in A ? De(A, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : A[e] = n,
    iA = (A, e) => {
        for (var n in e || (e = {})) Ue.call(e, n) && VA(A, n, e[n]);
        if (UA)
            for (var n of UA(e)) Ve.call(e, n) && VA(A, n, e[n]);
        return A
    },
    CA = (A, e) => ke(A, Le(e));
var sA = (A, e, n) => new Promise((i, s) => {
    var o = c => {
            try {
                l(n.next(c))
            } catch (m) {
                s(m)
            }
        },
        t = c => {
            try {
                l(n.throw(c))
            } catch (m) {
                s(m)
            }
        },
        l = c => c.done ? i(c.value) : Promise.resolve(c.value).then(o, t);
    l((n = n.apply(A, e)).next())
});
import {
    a4 as gA,
    A as g,
    a7 as oA,
    a6 as te,
    n as r,
    S as y,
    v as a,
    c as F,
    e as EA,
    ae as He,
    j as re,
    Z as Fe,
    L as DA,
    C as W,
    B as V,
    k as AA,
    F as L,
    G as mA,
    f as BA,
    o as kA,
    J as eA,
    x as H,
    s as dA,
    z as T,
    r as Z,
    t as ae,
    y as P,
    q as hA,
    m as q,
    D as z,
    a0 as Te,
    w as Re,
    i as X,
    X as Ge,
    H as Ne,
    b as lA,
    aR as Ze,
    aX as ze,
    I as HA,
    aY as je,
    ai as Je,
    aj as Ye,
    U as We,
    aF as Oe,
    aa as Ke,
    ah as Xe,
    aP as K,
    R as Pe,
    K as FA,
    p as qe
} from "./manifest-794ca152.js";
import {
    i as fA,
    c as $e,
    I as LA,
    J as pA
} from "./amount-63fd0790.js";
import {
    t as u
} from "./i18n-3675d599.js";
import {
    f as _e
} from "./game-ab00b977.js";
import {
    g as xA,
    o as At,
    f as et
} from "./Layout-e28b8942.js";
import {
    c as _
} from "./index-a8d0e4cd.js";
import {
    u as tt
} from "./user-dca4827e.js";
import {
    N as J,
    a as Y,
    o as rt,
    T as TA,
    b as RA,
    c as GA
} from "./number-field-31142d3d.js";
import {
    c as SA
} from "./utils-65805dbc.js";
import {
    G as NA
} from "./config-b7b855c3.js";
import {
    k as at,
    n as wA,
    S as bA,
    u as vA
} from "./SA27V5YJ-a6e76733.js";
import {
    b as nt
} from "./router-acbf143e.js";
import {
    u as ne
} from "./use-coin-format-7215be04.js";
var it = /\s/,
    st = /^\s+/;

function lt(A) {
    return A && A.slice(0, function(e) {
        for (var n = e.length; n-- && it.test(e.charAt(n)););
        return n
    }(A) + 1).replace(st, "")
}
var ZA = NaN,
    ot = /^[-+]0x[0-9a-f]+$/i,
    dt = /^0b[01]+$/i,
    gt = /^0o[0-7]+$/i,
    ct = parseInt;

function zA(A) {
    if (typeof A == "number") return A;
    if (at(A)) return ZA;
    if (fA(A)) {
        var e = typeof A.valueOf == "function" ? A.valueOf() : A;
        A = fA(e) ? e + "" : e
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = lt(A);
    var n = dt.test(A);
    return n || gt.test(A) ? ct(A.slice(2), n ? 2 : 8) : ot.test(A) ? ZA : +A
}

function ut(A, e, n) {
    var i = A.length;
    return n = n === void 0 ? i : n, !e && n >= i ? A : function(s, o, t) {
        var l = -1,
            c = s.length;
        o < 0 && (o = -o > c ? 0 : c + o), (t = t > c ? c : t) < 0 && (t += c), c = o > t ? 0 : t - o >>> 0, o >>>= 0;
        for (var m = Array(c); ++l < c;) m[l] = s[l + o];
        return m
    }(A, e, n)
}
var mt = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");

function ie(A) {
    return mt.test(A)
}
var jA, se = "\\ud800-\\udfff",
    ht = "[" + se + "]",
    MA = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    IA = "\\ud83c[\\udffb-\\udfff]",
    le = "[^" + se + "]",
    oe = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    de = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    JA = "(?:" + MA + "|" + IA + ")?",
    YA = "[\\ufe0e\\ufe0f]?",
    ft = YA + JA + ("(?:\\u200d(?:" + [le, oe, de].join("|") + ")" + YA + JA + ")*"),
    bt = "(?:" + [le + MA + "?", MA, oe, de, ht].join("|") + ")",
    Bt = RegExp(IA + "(?=" + IA + ")|" + bt + ft, "g");

function pt(A) {
    return ie(A) ? function(e) {
        return e.match(Bt) || []
    }(A) : function(e) {
        return e.split("")
    }(A)
}
const ge = (jA = "toUpperCase", function(A) {
    var e = ie(A = wA(A)) ? pt(A) : void 0,
        n = e ? e[0] : A.charAt(0),
        i = e ? ut(e, 1).join("") : A.slice(1);
    return n[jA]() + i
});

function wt(A) {
    return ge(wA(A).toLowerCase())
}
var yA;
const vt = (yA = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "s"
}, function(A) {
    return yA == null ? void 0 : yA[A]
});
var Ct = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    xt = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"),
    yt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    Qt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    ce = "\\ud800-\\udfff",
    ue = "\\u2700-\\u27bf",
    me = "a-z\\xdf-\\xf6\\xf8-\\xff",
    he = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    fe = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    WA = "[" + fe + "]",
    be = "\\d+",
    Et = "[" + ue + "]",
    Be = "[" + me + "]",
    pe = "[^" + ce + fe + be + ue + me + he + "]",
    we = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    ve = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    $ = "[" + he + "]",
    OA = "(?:" + Be + "|" + pe + ")",
    St = "(?:" + $ + "|" + pe + ")",
    KA = "(?:['’](?:d|ll|m|re|s|t|ve))?",
    XA = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
    PA = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
    qA = "[\\ufe0e\\ufe0f]?",
    Mt = qA + PA + ("(?:\\u200d(?:" + ["[^" + ce + "]", we, ve].join("|") + ")" + qA + PA + ")*"),
    It = "(?:" + [Et, we, ve].join("|") + ")" + Mt,
    Dt = RegExp([$ + "?" + Be + "+" + KA + "(?=" + [WA, $, "$"].join("|") + ")", St + "+" + XA + "(?=" + [WA, $ + OA, "$"].join("|") + ")", $ + "?" + OA + "+" + KA, $ + "+" + XA, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", be, It].join("|"), "g");

function kt(A, e, n) {
    return A = wA(A), (e = n ? void 0 : e) === void 0 ? function(i) {
        return Qt.test(i)
    }(A) ? function(i) {
        return i.match(Dt) || []
    }(A) : function(i) {
        return i.match(yt) || []
    }(A) : A.match(e) || []
}
var Lt = RegExp("['’]", "g"),
    $A, Ut = ($A = function(A, e, n) {
        return e = e.toLowerCase(), A + (n ? wt(e) : e)
    }, function(A) {
        return function(e, n, i, s) {
            var o = -1,
                t = e == null ? 0 : e.length;
            for (s && t && (i = e[++o]); ++o < t;) i = n(i, e[o], o, e);
            return i
        }(kt(function(e) {
            return (e = wA(e)) && e.replace(Ct, vt).replace(xt, "")
        }(A).replace(Lt, "")), $A, "")
    });
const Vt = Ut,
    QA = function() {
        return $e.Date.now()
    };
var Ht = "Expected a function",
    Ft = Math.max,
    Tt = Math.min;

function Rt(A, e, n) {
    var i, s, o, t, l, c, m = 0,
        h = !1,
        b = !1,
        v = !0;
    if (typeof A != "function") throw new TypeError(Ht);

    function f(x) {
        var C = i,
            D = s;
        return i = s = void 0, m = x, t = A.apply(D, C)
    }

    function k(x) {
        var C = x - c;
        return c === void 0 || C >= e || C < 0 || b && x - m >= o
    }

    function Q() {
        var x = QA();
        if (k(x)) return B(x);
        l = setTimeout(Q, function(C) {
            var D = e - (C - c);
            return b ? Tt(D, o - (C - m)) : D
        }(x))
    }

    function B(x) {
        return l = void 0, v && i ? f(x) : (i = s = void 0, t)
    }

    function S() {
        var x = QA(),
            C = k(x);
        if (i = arguments, s = this, c = x, C) {
            if (l === void 0) return function(D) {
                return m = D, l = setTimeout(Q, e), h ? f(D) : t
            }(c);
            if (b) return clearTimeout(l), l = setTimeout(Q, e), f(c)
        }
        return l === void 0 && (l = setTimeout(Q, e)), t
    }
    return e = zA(e) || 0, fA(n) && (h = !!n.leading, o = (b = "maxWait" in n) ? Ft(zA(n.maxWait) || 0, e) : o, v = "trailing" in n ? !!n.trailing : v), S.cancel = function() {
        l !== void 0 && clearTimeout(l), m = 0, i = c = s = l = void 0
    }, S.flush = function() {
        return l === void 0 ? t : B(QA())
    }, S
}

function Gt(A, e, n) {
    var i = !0,
        s = !0;
    if (typeof A != "function") throw new TypeError("Expected a function");
    return fA(n) && (i = "leading" in n ? !!n.leading : i, s = "trailing" in n ? !!n.trailing : s), Rt(A, e, {
        leading: i,
        maxWait: e,
        trailing: s
    })
}
var Nt = g('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path stroke=currentColor stroke-width=2.4 d="M18.4 11.2 13.6 16l4.8 4.8"></path> ');
const Ce = A => {
    return e = Nt(), gA(e, A, !0, !0), e;
    var e
};
var Zt = g('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 16 14"fill=currentColor><path fill-rule=evenodd clip-rule=evenodd d="M15.0533 9.22017C14.7829 9.94599 14.7693 10.7786 15.1989 11.4231L15.4416 11.7871C15.4735 11.835 15.4922 11.8905 15.4958 11.948C15.5334 12.5482 15.3321 13.234 14.7395 13.3365C14.6626 13.3498 14.5802 13.3571 14.4916 13.3583H10.4968C10.471 13.3586 10.3382 13.2973 10.1881 13.1291C10.0456 12.9693 9.88011 12.8218 9.89363 12.6081C9.90319 12.4571 10.0167 12.2828 10.0534 12.136L10.9962 8.36472C11.027 8.26925 11.0807 8.17761 11.144 8.09949C11.3252 7.8756 11.6407 7.79315 11.9256 7.83556C12.1562 7.86988 12.33 8.00427 12.451 8.26159C12.4823 8.32819 12.5212 8.39165 12.5732 8.44369C12.7948 8.66526 13.1658 8.63841 13.2951 8.35299C13.4787 7.94779 13.5616 7.50132 13.5187 7.05557C13.5066 6.92943 13.4976 6.80261 13.499 6.6759C13.5245 4.42695 11.8892 2.59025 9.49812 2.37244C9.16649 2.37244 8.8225 2.3545 8.53851 2.18326C8.20859 1.98433 8.00007 1.68698 8.00007 1.37372C7.99975 0.951118 8.57617 0.37501 8.99877 0.37501H9.49812C9.64717 0.375092 9.74066 0.375041 9.81611 0.375C9.93683 0.374935 10.0578 0.383887 10.1764 0.406387C13.2266 0.985024 15.4909 3.66559 15.4903 6.86665C15.4912 7.67662 15.322 8.49902 15.0533 9.22017ZM6.50205 11.3609C6.83366 11.3609 7.17759 11.3791 7.46151 11.5505C7.79156 11.7497 8.0001 12.0468 8.0001 12.3596C8.0001 12.7822 7.42402 13.3583 7.0014 13.3583H6.50205C6.37308 13.3579 6.28595 13.3584 6.21591 13.3589C6.13473 13.3594 6.07651 13.3598 6.0027 13.3583C2.86239 12.8537 0.509316 10.1316 0.509836 6.86665C0.509242 6.05673 0.678956 5.23362 0.94828 4.5114C1.21851 3.78675 1.23149 2.95558 0.802493 2.31207L0.565323 1.95631C0.528986 1.90181 0.507791 1.83862 0.503828 1.77323C0.467948 1.18115 0.665328 0.505667 1.24883 0.398995C1.32911 0.384318 1.41536 0.376232 1.50854 0.37501H5.50335C5.52927 0.374944 5.66221 0.436426 5.81253 0.605036C5.95467 0.764481 6.11912 0.911499 6.10606 1.12471C6.09679 1.27603 5.98348 1.45061 5.94671 1.59768L5.00399 5.36858C4.97286 5.46488 4.91846 5.55726 4.85448 5.63581C4.67368 5.85776 4.36055 5.93915 4.07724 5.898C3.8453 5.86431 3.67056 5.72996 3.54916 5.47177C3.51784 5.40514 3.479 5.34164 3.42694 5.28958C3.20537 5.068 2.83435 5.09479 2.70496 5.38019C2.5213 5.78531 2.43844 6.23168 2.48135 6.67736C2.49352 6.80375 2.50254 6.93083 2.5011 7.0578C2.47561 9.30656 4.11066 11.1431 6.50205 11.3609Z">');
const zt = A => {
    return e = Zt(), gA(e, oA({
        get height() {
            return A.height || "16px"
        },
        get width() {
            return A.width || "16px"
        }
    }, A), !0, !0), e;
    var e
};
var jt = g('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none><path fill=currentColor d="m6.323 9.23 6.77 6.77-6.77 6.77 2.908 2.907L16 18.907l6.77 6.77 2.907-2.907-6.77-6.77 6.77-6.77-2.907-2.906L16 13.093l-6.77-6.77z">');
const Jt = A => {
    return e = jt(), gA(e, A, !0, !0), e;
    var e
};
var Yt = g('<div class="absolute left-2 top-1/2 -translate-y-1/2">'),
    Wt = g('<div class="flex items-center gap-1 absolute right-1 top-1/2 -translate-y-1/2">'),
    Ot = g("<div class=relative>");

function Kt(A) {
    const [e, n] = te(A, ["label", "prefix", "suffix", "size", "class", "inputCls"]);
    return r(J, oA(n, {
        get class() {
            return SA("space-y-1", e.class)
        },
        get children() {
            return [r(y, {
                get when() {
                    return e.label
                },
                get children() {
                    return r(Y, {
                        get children() {
                            return e.label
                        }
                    })
                }
            }), (i = Ot(), a(i, r(y, {
                get when() {
                    return e.prefix
                },
                get children() {
                    var s = Yt();
                    return a(s, () => A.prefix), s
                }
            }), null), a(i, r(rt, {
                get size() {
                    var s;
                    return (s = A.size) != null ? s : "default"
                },
                get class() {
                    return SA(A.inputCls, {
                        "pl-9 h-12 bg_input_bright sm:h-10 ": A.prefix
                    })
                }
            }), null), a(i, r(y, {
                get when() {
                    return e.suffix
                },
                get children() {
                    var s = Wt();
                    return a(s, () => A.suffix), s
                }
            }), null), i)];
            var i
        }
    }))
}
var Xt = g("<div class=relative>"),
    Pt = g('<div class="flex items-center gap-4 text-sm">'),
    qt = g('<div class=mt-2><div class="px-5 pb-4 bg-layer4 rounded-xl"><div class="flex items-center -mx-5 px-5 h-10 font-extrabold text-secondary border-b border-input"></div></div><div class="px-5 pb-4 mt-4 bg-layer4 rounded-xl"><div class="flex items-center h-10 font-extrabold text-secondary border-b border-input">'),
    $t = g('<div class=pt-4><p class="p-4 bg-[#2CD97D1A] dark:bg-[#24EE891A] rounded-lg text-brand font-semibold text-sm sm:rounded-sm md:rounded-lg lg:rounded-xl">');
const _A = A => {
        return [r(TA, {
            disabled: !0,
            get value() {
                return A.serverSeedHash
            },
            class: "space-y-1 mt-4 mb-2",
            get children() {
                return [r(RA, {
                    get children() {
                        return u("Server Seed(hash)")
                    }
                }), r(GA, {
                    type: "text",
                    size: "lg",
                    class: "bg-input_bright text-quarterary !opacity-100"
                })]
            }
        }), (e = Pt(), a(e, r(TA, {
            get disabled() {
                return !A.editable
            },
            get value() {
                return A.clientSeed
            },
            onChange: n => {
                var i;
                return (i = A == null ? void 0 : A.onChange) == null ? void 0 : i.call(A, {
                    clientSeed: n
                })
            },
            class: "space-y-1",
            get children() {
                return [r(RA, {
                    get children() {
                        return u("Client Seed")
                    }
                }), (n = Xt(), a(n, r(GA, {
                    size: "lg",
                    type: "text",
                    get class() {
                        return _("bg-input_bright text-quarterary !opacity-100", {
                            "pr-8": A.editable
                        })
                    }
                }), null), a(n, r(y, {
                    get when() {
                        return A.editable
                    },
                    get children() {
                        return r(W, {
                            onClick: () => {
                                var i;
                                return (i = A.onChange) == null ? void 0 : i.call(A, {
                                    clientSeed: LA()
                                })
                            },
                            class: "absolute -right-1 top-0 h-12 pr-4",
                            get children() {
                                return r(zt, {
                                    class: "size-4 text-secondary",
                                    fill: "gray"
                                })
                            }
                        })
                    }
                }), null), n)];
                var n
            }
        }), null), a(e, r(Kt, {
            disabled: !0,
            get value() {
                return A.maxNonce
            },
            get label() {
                return u("Nonce")
            },
            size: "lg",
            class: "w-1/2",
            inputCls: "  bg-input_bright !text-quarterary !opacity-100"
        }), null), e)];
        var e
    },
    _t = ({
        queryKey: A
    }) => AA().get(`/single-v2/game/seed/${A[1]}/next-hash/`);

function Ar(A) {
    const [e, n] = F({
        clientSeed: LA()
    }), i = EA(() => ({
        queryKey: [`/single-v2/game/seed/${A.gameName}/next-hash/`, A.gameName],
        queryFn: _t
    })), s = He(() => ({
        mutationKey: ["/single-v2/game/seed/change/"],
        mutationFn: l => AA().post("/single-v2/game/seed/change/", l),
        onSuccess() {
            V.success(u("Done!")), i.refetch(), L.pop(), A.onChangeSeed && A.onChangeSeed()
        },
        onError(l) {
            V(l)
        }
    }));
    return re(() => {
        i.refetch()
    }), o = $t(), t = o.firstChild, a(t, () => u("You may use this function to set a new server seed + a new client seed, they can be randomly generated or customized (at least 10 characters), and the number of bets will be reset to zero.")), a(o, r(Fe, {
        get fallback() {
            return r(DA, {
                class: "text-brand mx-auto"
            })
        },
        get children() {
            var l = qt(),
                c = l.firstChild,
                m = c.firstChild,
                h = c.nextSibling,
                b = h.firstChild;
            return a(m, () => u("Current seeds")), a(c, r(_A, oA(() => {
                var v, f;
                return (f = (v = i.data) == null ? void 0 : v.currentSeedHash) != null ? f : {}
            })), null), a(b, () => u("New seeds")), a(h, r(_A, oA(() => {
                var v, f;
                return (f = (v = i.data) == null ? void 0 : v.nextSeedHash) != null ? f : {}
            }, {
                get clientSeed() {
                    return e().clientSeed
                },
                editable: !0,
                onChange: v => n(v)
            })), null), a(l, r(W, {
                type: "second",
                get disabled() {
                    return s.isPending
                },
                onClick: () => {
                    const {
                        clientSeed: v,
                        seedId: f
                    } = iA(iA({}, i.data.nextSeedHash), e());
                    /[^a-zA-Z0-9]/.test(v) || v.length > 32 || v.length < 10 ? V.error(u("Seeds are mixed characters containing 10-32 digits, uppercase and lowercase letters.")) : s.mutate({
                        clientSeed: v,
                        gameName: A.gameName,
                        nextSeedId: f
                    })
                },
                class: "w-full mt-8",
                get children() {
                    return u("Use New Seeds")
                }
            }), null), l
        }
    }), null), o;
    var o, t
}
var er = g('<div class="flex items-center justify-center w-full h-full bg-layer4 rounded-t-xl">');
const tr = A => r(mA, {
        class: "w-[30rem] !bg-layer2",
        get title() {
            return e = er(), a(e, () => u("Seed Setting")), e;
            var e
        },
        get children() {
            return r(Ar, A)
        }
    }),
    xe = A => AA().get(`/game/support/share-v3/create/${A.gameUnique}/${A.betLog.distributeId}/`);

function rr() {
    const [A, e] = F(!1);
    return BA(() => {
        e(!0), kA(() => {
            e(!1)
        })
    }), A
}
const ye = "/modules/games2/assets/star-254d837a.png",
    ar = "/modules/games2/assets/crown-c4216a4a.png",
    nr = ye,
    ir = "/modules/games2/assets/ribbon-ea676df2.gif",
    sr = "/modules/games2/assets/ribbon-ea676df2.gif",
    lr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAAJFBMVEVMaXEcHiIeICQcHiIcHiIkKC0cHiIfISUdHyIcHiIcHiMcHiKTCMCFAAAAC3RSTlMA8jjWuwqdHFFrgohLwFcAAAAJcEhZcwAACxMAAAsTAQCanBgAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAASAAAAAEAAABIAAAAAQAAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAAAYAQAAA6AEAAEAAABgAAAAAAAAAI1+4goAAAKBSURBVHja7ZsLcsMwCET1s37c/751m6SRE3BnOkiV6t0DpJpnBIugxkAQBEEQBEEQBEHqchUMWC42AgLLhcJCx90GciG/EJcwkAvZhbhQGsdlHTA7F3LjuBBt63AZAubBZVB4/k7pyIWy9h/IxW0ClzHh+dtz2xCL++ZCRZ38/qM+NnSeXPS/gub9uaXBEG9cSN+NxjuFO52Gi/5X0FSlg/TdqGt+3frYcKGpe4JkD2A6GJlAkubuCeLhrFY/IWYRzNw9gXs9rXoR9RKYyXuCt1CPymjKomDeQ93WTb/ycZq6LJmNObFuqqlilvEzW5na/bxJDJk9pU1rf99Prf8ZI50oTtoyxQHR7c7AaKc0xV6m/6UPdI6mzIfm5chuVOWbPQu/BLkd5CI5NHNlYX9vrmNfyxV+5GLrVDk4f77GpGcOjn90k+bMv81HLR3jck0suwH23XJvWa4kvTm9rd8roZRzy7bA1NSP6jmeWMwKynFMz7FECykMU4Y0SslcWbK3s5fmcuLtwqW5nHi7ay8OPb2d3112tss8bHZWuY3Zar7PaNtBpLsymFpykq7WZiDO7nmw4H0NljaFAl5AguvjL557z7on5N7lt3zH+uEACrzxq/9iw72Dnen5FpNWDseOHzV5izvJckHJk7hc/HGQfZT94gL3+J3LHxvuNy6UgaQ10/vLjyeAOZtFoEMVhhH4D13DTyM8sq80joio2IbfNZl7uWTwQOJ1wQRUhFmwx31ilwcCUjAXMMDCLg8AC1utgUUo1qjUfK3GCMK0i6E+1Ijx7zFgwmPRJKC5Ppv/IvUa/skKuZef/yL3CpYG419eFe93IzfcIQiCIAiCIAhq9QFCCj4GYGbzCwAAAABJRU5ErkJggg==",
    or = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAAJ1BMVEVMaXH////////////////////////////////////////////////c+C/6AAAADHRSTlMA8tW3CnWXQhtZLTa9JusTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzGVYSWZJSSoACAAAAAcADgECAAsAAAByAAAAEgEDAAEAAAABAAAAGgEFAAEAAABiAAAAGwEFAAEAAABqAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAAB+AAAAAAAAAEgAAAABAAAASAAAAAEAAABjb21wcmVzc2VkAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAGAEAAAOgBAABAAAAYAAAAAAAAACNfuIKAAACiUlEQVR42u2cDZLCIAyF+S+03P+826q7LZrUGYcgbN87gDIfkLyQqFIQBEEQBEEQBEFQdU0eDEguOgACySXbgZbrGnLJZiAutiGXgcA4m2M7LlkPxCXP7bjk7MbhkqeGXNrswoeKJZec6ruVxTFcmuzCp0rahjT/ccnVTVfcomw40Nm51N+FmvfnHgZNuHOpD0Y9PviXzoFL7tr6+lyovhtdDp++bsCBS99goi7ACBgZmzn1XROEYq26fkBMLJi+a4L5ebXVk6jhwHRufV+OeoiiYWwYMNPLgrV39TMfpb5fZBy1l5NcGCu+J42TsAXWG9kjs4a0ZZB8LbKN/JHZ0EQ1QLqufYvozPcU0kKPZfYsj+XU5ElEe4klz60yX+9R+GnFupGLFE+EdVzp+vQQZC2XfctFh65i8GSDn+Ieg8OXblKPQaZ4wPOC53JILBuZbfUybisNjOXh9JzcKyEXc33/vYJFm1Y1x56lh2ihpNCm5hiihGSaKU0KpaiuLN7b6UtzOfF29tJcTrzdtQeHdm9nVpedjoE4XZlLurXZrE+ze27Qdt3TF5d/lGKUC3YKouyeAQva12Bok0ngGPMl6/i+x4a+2rFB7CXKBI3Yy/phCwp00vb/YsJdIGlLFgRx5OMouKnRaNxJkgtSHsfl4o+D5KPsjcu1K/ciy60jxLcJ9whbTZjplY7BI9hpLwIVKtOMwJuGorsRZgERRU8OWGRsRc+a9Dnz2MW8svZAw/SCDYwe2Qu2CMHlL+mA5eTAWNwiKlsDiypaMmj/vsnVaEEUg6HroIlFqVRGmO3/Btweg1FcM8EG71SKfrJC7CXnuBF7OUuD9i833wYGDSfcIQiCIAiCIAg66gfGRkNY9e//OgAAAABJRU5ErkJggg==",
    dr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAAIVBMVEVMaXEcHiIeHyMhIyUcHiIcHiIcHiIcHiIcHiMcHiIcHiJLKF5cAAAACnRSTlMA9ToVxuOqcVuJnCFm2gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAABIAAAAAQAAAEgAAAABAAAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAABgBAAADoAQAAQAAAGAAAAAAAAAAjX7iCgAAAgxJREFUeNrtm1tywyAMRc3baP8LbpqHYxuY6UdFreacBcSe64t0AWVZAAAAAAAAAACug4+uoEJHFrkREOJEcWJPmJKq9iOyPDDl8SSSJuniLOny7fE4Rxf1D/DbuigLU8SeMCGJujB+08XQUsoTvmR6C2OmK/kJL1x2uoi3ZRiRdY5hxEr0da8X1isy614XycZWkqLH40EYZ6PI7L6mlmWCHLGxlvZ1saqb0lCSOTQMnfpbT8JolnmtwlhU+95mmWCr+N5bRtCuvYprVqldP3tG9vrCmFhMjdHFxZxXrXj3fIQ3t5YUtnodx0gyoEzvvX81nuau8t7IcYxi36hdTxrIeaV9aa/8+4+kfXnTnD+pWydUsfuCvbo0q1MtjGmojKS6XjrthXeBdDWo7wlO4sQY82XlCSUm51IuYVYiEIunNDMSAcL8yDL+I4XpZzwMs91djevvx45A9OK1rT3lxHht7EjvD5T5aF3O8VptA2J20qzZSjJ6djNN05wSs4qvjcfBLQW77LTJ911ZzMWjBgDA/4lLERE6VGdr+HzmjUdChv5W1aFDkx4t/sFl4tUhkXrpD/tklOjfRjjW0tIfKCTJjI5POeYZjKByXjq88azUmSbGvCZM6NrLYHrgdk6IbwbTA7hm6U4PVCTpTg+QZ97KRC7zBspUt00TokY7TqgzTQgAAAAAAAAAAGCGL549MHayH8uiAAAAAElFTkSuQmCC",
    gr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAsfVrzuWJTTYeDST5mmQAAAAJcEhZcwAACxMAAAsTAQCanBgAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAASAAAAAEAAABIAAAAAQAAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAAAYAQAAA6AEAAEAAABgAAAAAAAAAI1+4goAAAIWSURBVHja7ZxbcsMgDEV5Y6z977eJEzd2DD+dyGM15yygZi4XPUCpcwAAAAAAAAAA16GmUFDhQEtyY0aIN2K46yLN0prnmNUt7uWBJV2mLJKVpV91CZZC4t3j6Ry/aG/AR/2ynH2v+o0i9oRpeVmwqmPqry6GjpI/YSfTSxgz6XpaF6yYRuNGF6m2DCMS9b6Rt8JYKX3DuuB0RoRRj/KfP0kik7opxVDpu9lNLcvMe100z6xSXCxnnCT1UtJOwihi0TJVf8n+XZg82wq+S8poJwhjImPPYb/mUCbNstfQYTruZ/C+VK3y7vmJyVqQ0Wj1Oo6RbECZ3ro/Wp76rvLVyHWMYt4oXU8aiMDxuOiq/Pcfhd7lj1PRtfkkI3y18bChFRjzUBnJpV66p2x+U8g09Z7gTZyUkr+sPC36FEL2cVavrkU7DTpr18oI8wfLTA7LYJjD29U4/rYvFaZbXtvqKU8sr63dAp+vzFfr8pypsNlna8eZ7gVHag7iITnliCpuGWnbuSZFJhW3TdnSlSUfOUQAAP8nuvuECB1KsDV8fuaLR0aGfqsa0GEwu0E9PXioqSjhurO5/IrO9V8jAl3Y4JbQo8Xg+pRrnoEw3Je60dhcIWcPhvNzmVDE9Z+Cb/eE5KfBCCqu6U8PUOqtUWb/QJOIwG73/yPWOg9dNp4pr2lC1NibpqQckucxDwAAAAAAAAAAvpofd5w1jglGmekAAAAASUVORK5CYII=",
    cA = {
        heart_left: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAMAAAAxSDrWAAAAP1BMVEVMaXHeWhbZVBT5ZTDZVBTZVBTdWRvZVBTcVRXZUxXZVBTZVBTaVBXbVRbaVBX/bQrZUxPjWRH4Zwz8agvsYA8BEYEyAAAAD3RSTlMAF/QFp/wS5CSL0MFdOXLtrLxaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzGVYSWZJSSoACAAAAAcADgECAAsAAAByAAAAEgEDAAEAAAABAAAAGgEFAAEAAABiAAAAGwEFAAEAAABqAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAAB+AAAAAAAAAEgAAAABAAAASAAAAAEAAABjb21wcmVzc2VkAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAHgAAAAOgBAABAAAAMAAAAAAAAACLmQxBAAABDklEQVR42n3UV4LDIAwEUDmAcdswlPufNcC6YQvp92VGuIXomHHTizV20dtAr5m0wTFGTy2qOaNPIboYks8/mNVNxxVI0R0TE7BeG0YLBHefANhjgVrho2sn+tNn4Kl5stf+yTya9zzMWFgjMZrXr/Vchqsu5d/CGzynDpjE7qWee2EP5hLmyra3+q+yAd/9ISEdgU3ebaW7kpdr6bpzfTncAP7opV4J7bl+7j+x/Frho7rP+0jXt4W/M/XSaLCc7+GynvEzzPsV5vweZrwJvzyHHx9i489w6+9w40z45mz48gBLJDj297Tjid19erd99277v/tue3XsX2DfJ9m/JLrQXn2QXWovf8IkuyL6AXX7L0454rzpAAAAAElFTkSuQmCC",
        heart_right: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAbFBMVEVMaXHZVBXaVRbZUxTZVBTZUxTZUxT4cTLYVBXaVRbaVBXaUxXcVRfZUxXZUxTeVxjbVRb/bQrYUxTcVBP5ZwvvYg7qXw/0ZQ3iWRH///7/fib/chL/sHv/j0L/yaT/7OD/r3n/38r/8ej/qnD22/DOAAAAEXRSTlMAckK5yPTVBapPk2MqfuMaV9h7gXAAAAAJcEhZcwAACxMAAAsTAQCanBgAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAASAAAAAEAAABIAAAAAQAAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAAAgAAAAA6AEAAEAAAAwAAAAAAAAAGhbvAgAAAFYSURBVHjahZTdYoIwDIUrUkAnugakraKoe/93XFJd7Z9ZLuDiO5zmpC1CBLXr142U+3pbtaJQmwZ8yVUm2dUAw6RHpUY9GYD9JuaVhOGofGmU9CH/AjCenk/4OAJsIz69P7/aK0r0AKuAB/bqx9qFFADVS9BEXKnT3S5npSaoXwFgUHGd73bG1wDPKKuwgWdd7OIaXTvBGnQqUA9LUUDSvFoJGcckF3wat8YmGMG7C+LYJiXdJhmCOrphNUXBbXaCDgXfWUqq+eYdMIX5sMSzB3GQhZyujJ/UUBYAvM5Nnc9SBZPE3Sgv8rcXn6L63aRhFpoIzkPRYAxOVMkAeeePZJ0bEG8Zg4gXDGKeG8Q8N0h4lRokPDNIeWqQ8tQg4zhlzXLRh0ehwKOLWeJC7GFkOd6bieWY07Cc7u7IcSE6mgTD8eoZltMamuN0N4Hl9BdkuTj8w9GC4b+avD+SwSINMQAAAABJRU5ErkJggg==",
        block: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAAXNSR0IArs4c6QAAAWpJREFUKBVlkL9OAkEQxmeW5fgjChH/EAsjYuABLCi18gEkWJlopZXvYGdlYWJlqZGI8ASWNvbGRAOJ2hhz4WJEBURub5xdOYPyFZfdb3/zzcwhDKheTE2S5xVIUEIAXS2cNy4RkTSCPldbmyp4io4BKOp7gHiRiIjV1IndEtq8K06nSdGphkbDCpKxHsgABxGtvHbUvmYMCKTWCSgUj7owM96FibEezCY/TTsE3HjYnAsbkC95XRXjNF9BSRDgVCIKU7cdNyARZDVg6XZ9tbsBcBVHINppd8kRtLsseZi03ioY9AzWbEl4egn5NQdYqSh5f3szz440wzP33LTgrcO1LM47zFUbe/oslfppixz56ETgy+UD4odAsZ2t2CUNaUlCBnk0A7DBM11zejFTtmuG6H+Ev4i+c9aRFRvJZ8rOH0i/SU7TG79z661c1TkDcLQ/JMmt2tKCxUypUR96HTTqOwu//2HQ/3/+Bvh2fIyfHFHnAAAAAElFTkSuQmCC",
        block_two: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAAAXNSR0IArs4c6QAAAXBJREFUKBWFUr1KA0EQntnbhBMDEY0GBRshP7WCiK9gqShBC8FC8AEsrNLYWdn4BAmYnyew8wHExiL+gIqFJgFJxJiYuxtn53LhRCEDu/vt9813s7ezCKGo5eay0HfWCDzXIn2Rqr7ehGSBGBC1jeljIjoK9iwQAZxkq83DgDOrGG7XEzkPoKiYiI87orc6Gjx2KGVtp8tvRSF5MjngIe6bNTnxDTNxfyR5NUHk7gkYTGJAoqTZj0XdoRazfUyAy0OSgRiYlJ9rf+mhphSB5sElYo87idlAEIOy4JQJp/kRgXorCpwmEdE+6nd1ZkD5FdKlxqWFahcBe++fGp4bNt8uQlTzVXAQOulfBrNJVeoFpWmVTQ/dvoInY3LlAOZ+/xrEdN68UnZ8ERFLLiF0eiMMYirctzOVxhY34MAc0XDcrf8riDiYsuX6GSpY4ew7phb4FUiT/ZrhzBBOlxvXU/HJJa5Ufdmct0PSaEj5vHz8B/ZXd/2WUqBBAAAAAElFTkSuQmCC",
        star: ye
    },
    uA = {
        facebook_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAP1BMVEVMaXEpLS4pLS4pLS8pLS4pLS4pLi4pLS4nMDAqLTApLS6zvsFdZGZudniEjY9MUVM6P0GlsLJUWlwyNjdDSEpfxKumAAAACnRSTlMAkO+3dZ/P3xo60HSfMgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAASpJREFUeNrt2cuugjAUheECLb1BodX3f9Yj10hwoPY3ITldMyZfttg9YFWIPcZK1bRauw+iddsoacWLmKp2X6dW5sS5zMijp1129NOQFvAeoiXnO8wIebsoHZZq/sEOzDSiIsFpxJoEayOsQ2PJv2RZGMWCSjQs2IiWBVtuTdZl4UEH523wlkKMPsYYwo0Au+j3jADYe4+CBw8ARw+DgQYjDA6bFNI4JfscptWL1MHuVrCnwO3QdAW8AtjN2RYlLI8pA/SvEi4P9jTY0eBAg3cazDmHw5ztHPbz073scgELWMAC/h8whSXDW+D1v0bxD3C8IsBLDLxmwYsgw1ZVj+6rYl/hD+o+ckSJVrDTmvyo1MVrZ74YJ6ri6nQboHIuF07c8iq/vv544v4AYBT0v3aWRPIAAAAASUVORK5CYII=",
        facebook_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAP1BMVEVMaXH////////////////////////////z9fX///////////////////9fbW3Eysqwt7fZ3NyaoqJvfHyHkZF0m/muAAAADXRSTlMAEJBAdZ/P3/ogtzCgWGOYUwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAS1JREFUeNrt2cGugyAURVFAEbQCKv7/tz6V2tTGQVt2E5PHmTlZuUbuwIMQj8iq1l1jjPsgxjSdritxklZZ93Wsbl84qVxm6uN4xmXHPA15A7xFvJHzHWaEvEWUm1c7LGp7YQdmfWlNguuIlgStFJVDU5GfJC1Mz4JadCzYiYYFG25N7svCgw7O26ANU4w+xjjPlgCH6B8hwMF7FDx4AGg9DE40GGFw3KU52DXZ5zDcvUgd7B0cKHA/NKGAVwDDln1RpvQYMkB/lpkGJxocLg+OlwdzzuG4ZT+HQ3osu1zAAhawgP8HDFPK+BZ4/b9R/AccrwjgEqPnaxa8CJJsVbV0X8qhPdAP6j5yxFQVS64y/VWpi9fOfDFOVMVKvl4u9DmXC6o9u7D4/vrjabo/iHI7wf6+rEwAAAAASUVORK5CYII=",
        email_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAQlBMVEVMaXEqLTApLi4pLS4pLS4pLi4kMDApLS4oLzApLS4pLS8pLS6zvsGirK9rc3STnZ82OjtNUlR7g4VdY2WrtbiHkZO3N8EuAAAAC3RSTlMAQHDvis8Q3yOjv5MBy1kAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAAeDICAOgDAAB4MgIA6AMAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAABQAAAAA6AEAAEAAABQAAAAAAAAAHW60KIAAAGLSURBVHja7ZnJkoQgEERxQ5FV0P//1YEeA23bCQWzZ4kxT3rwRVHFZhYhUbQoGWvalieobZuelQXZUVdXPFsV6zY4WvOLqp/Da/lltR2WtyZieCsiiOeJ9MGrOUyPynQcqDBohgSGECsksKKk4FAVpMQCS2wKOWekRwMbLLDBLZN5seCBHKwb+KeARlk5ij3pyWUA1T5slnSpQCUOpNKAThxqSALKY6BMAQ5C5Ia4D7RngDYBqM8AJxAwTiedAJRxbrhNecYh5kNmAH3ezRNRm6ViOcDwvVlVyIZ3fQEopFmvmrA6loizgCFnfpByeRzFNeAcltXams0SzwWKycQdbRII4Gci48gBQF9t5ZzSp3YHkrvZ3MDvBp7aD1O2rwkNhB8B8EMKfoyeCdH97FWEv5xOm7NKZdwP3fTFdJRWmftK/L+Bv/9vFP4DDvYceryJAbdZ4EYQxVpVWLcvpPANdh/ckCQUZ5m+y9SF2854YxxRmZpumwvsSnOh7vYaFr790ae3P5hvf6yi+wCEwg9zCpQKWgAAAABJRU5ErkJggg==",
        email_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAARVBMVEVMaXH////////////////////////////29/f///////////////9fbW3///9zf3+LlZXAxcXW2tqhqamvtrZpdnZ9iIjiLFr5AAAADXRSTlMAEEBwip/P3/ogMK+/6StovgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAZBJREFUeNrtmdtyhCAQREFRcZWbqP//qQHX8ramFOzdJBX7SR88NQwMYA8hk2iSZlVeFDJARZHXWZqQHZWMy2jxrNzgKJMXxdbhFfKyikWQDwDPER/I+FYxgniOSAcekzANM1NKoPygMyTQh8iRQE5JIqFKSIoFptgUSpmRGgusSI4F5rgyGYsFD5Rg3cA/BeTGqk7sqdcmAmj2YaOUCQW24kBtGNCIQzVBQHUMVCHARojYEPeB9gzQBgD1GaAGAafl1AcA1bQ2zGZ6umbKh4oAurzzFbHn84zFALX7ni9myPp3fQEoFF9Wja+3OeIooM+ZG6SaHztxDfgsWm61tnxT4rHAIZHjjqYFAvhM5DRyANAF2RrT6lO7A4ndbG7gp4H9J/fDKCD8CIAfUvBj9EyI5mevIvLldNqcVSbifmj0N8tRWcPvK/H/Bv7+v1H4D3iFBdZ4EwNus8CNIIq1qrBun0/hG+w+uCFJKM4yfZepC7ed8cY4YmYY3TYXsivNBVbuNSxc+6MOb39Urv2xiO4LY65N7hioZeQAAAAASUVORK5CYII=",
        instagram_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAUVBMVEVMaXEpLS8pLS4pLDApLS4pLi4kMDApLS4pLS4oMDArLTAqMDCzvsEpLS5dZGU5PT+irK9MUVOqtbhdZGZDSEp5gYNVWlxudnhlbG6PmJqZo6WyBxt2AAAADHRSTlMAt+9Adc8Q35kgMEAWUyN1AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAzGVYSWZJSSoACAAAAAcADgECAAsAAAByAAAAEgEDAAEAAAABAAAAGgEFAAEAAABiAAAAGwEFAAEAAABqAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAAB+AAAAAAAAAHgyAgDoAwAAeDICAOgDAABjb21wcmVzc2VkAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAUAAAAAOgBAABAAAAUAAAAAAAAAB1utCiAAABx0lEQVR42u2Z6Y6DIBSF3aULsgzi8v4POqCtRaeaAMfJTNLzi9Tk68F7ETwmyaLqVpC0rGvqobouU1Lckje6kIwGKyOXDa4iNFLF2l5No1U7Jq8AniFekf5WHkE8Q6wmXkFhItOEKVB20gQJtBYzJDCrkhuFKkeWZF4wBAskSYoFpkmJBZa4ZfJYLHggBesDPB2omq20CgeyTt7fiDeBQMbvO+IsBLjPOyTuAw94R8RdYL+DksP0T503kO9aY7ZU0heodgy25lprB8oTqFfTbLVSorWmx2e1vjyBjYPrlx/NZHk734xw4FRQJgRbt1IwUBqQGOxoFHQuSBzQrLPuOe6cbgoFcuPvdTuNRxkJNG0yvoDDo2cigIIyt4HY0k+hQOXO2OWHAtkWqCKBejtlEV+U4cUb44sit23DYxu7Xzd2g1l6UysOmKUHfzgYj8u22TvbagTQPgOFUrpd7dIatAUs8t0CqDzmce9drzsG9t5AxoMM/uZRBH5Ysr3zFik7FnHg1D9OnOpzaP9/wL//Ngp/AYdHBPAQAx6z5OggqMJGVWeEafC4D2lxjoorXGR6VqgLj53xwTgiKibVuR8XJuWhnz9yx903/Jk5zLQovToAAAAASUVORK5CYII=",
        instagram_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAASFBMVEVMaXH////////////////////////////////7+/v///////9fbW3DyMjDyclzf3/r7e3X29tpdnbh5OS0urqhqamBjIzN0tJFashCAAAAC3RSTlMAzxBwOoqf3yD2t6nL0moAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAAeDICAOgDAAB4MgIA6AMAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAABQAAAAA6AEAAEAAABQAAAAAAAAAHW60KIAAAG9SURBVHja7ZnrjoMgFIQRr0hdbirv/6YLtlG02gSYbrpJ5xdJ49cBBsEDIatoVTZ90bY8Qm1b9E1ZkRN1NePJYk13wNGaZ6re22t5ttrAZAXgOWKF9LfzCOI5Il14NYdpmZmOA+U73SCB3iJDAhklFYeqIiUWWGKHkPOG9FhgTwossMAtk8diwQM5WF/g24Hm5yhr0oFs1LcTiSERKMXtQkKmAK95L4nXwBc8R2TRwPECpefln8ZooLi0Jv1U6ViguTA4ud8m3zCRQLvr5mSNUZM3Pbs0LeaHSOAQ4NbxGlxnxXQfjHTgEhGplNxHKRmoHUjNvjUrfp+QPOAQJGgM2qlA4fxtw+k86kygi8m8AedHZjKAisswQHLNUyrQhD0O+alAeQSaTKA9dll92qToY2xEbrDHfbCHz1t68JeD87g+G26rGUD/DlTG2Gm3S1vQFrAqdgvg+jVPwLbRLUGRQCaSDP7lUQR+WPLZOUXqkWUcOO3TidN8D+3/D/j5X6PwD3B4iQBexICXWeCFIIotVWGrfX4I31DugxckCcWVTN9V1IWXnfGFccTM1PR4udDkXC7U3dmFRfr1R+DuF6hyENBF6/NAAAAAAElFTkSuQmCC",
        line_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAARVBMVEVMaXEpLS4qLTApLi4pLS8pLS4kMDApLS4oLzApLS6zvsEpLS6hrK5OVFU4PT6PmZtudnh/iIpdY2Wrtbh3f4FDSEplbG6WP9oEAAAACnRSTlMA70BwyooQ3yOjP0Vx1AAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAfRJREFUeNrtmWuvgjAMhkG57dLuBvz/n3oceBQVJh018YNvTDQkPmm7dhttUdzUnM5CVG2rCGrbqhLnU7Giri5VtkrRPeGaWh1U/Wheqw6r7Xh5SyIPb0Fk4l2IzcSrFZumlekUo6LTghMYTSw5gWVTnBSrTsWZF3jmDaFSoqi+HFjxlcm1WPiBilk/4KrQ29653sLAAQQX5E3awTEg2gXtyvQHgKDlijTkAnu5IZsFRCc3ZTADmOBJ6ehAK5PqqcBBvhEQgfod0NCAIGWmiUViRbT//wo+htR4o32USazLBjDMXsH8T6+VGmP6WXNfsEABDvIFqMwMHJxzc4CRAIQVIOoZaIzRiSDuBSIoeHSZBHx1GTUqjEAEAEMG4itwSjxrFglFieGc1xcEIrorUI4TcHo0ZRMpbfp7Mdh/oBweYugyKkVHBRk/0eQw/ZgebXq8WcvmXeU54uaAIc3TSN0Px7zdK7FjJ3dYm3NI2Rxe8tTzgfXU2z747IGrCLwiAxy726A3YVe+UK5z6G9nVo8890PY5S4ZaFBxAcd95u0H9juiRwJ6uw/3e61gAX7/2yj7C7j4cqDgb7OwN4Ia3lYVb7cvhvAD7T72hmTR8LVMP9XUZW878zfGOVambp6HC+LIcKHu1gYWl/FHRR9/iMv4Y2HdH591CuQz2t1TAAAAAElFTkSuQmCC",
        line_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAQlBMVEVMaXH////////////6+/v///////////////////////9fbW3///9zf3/V2dmaoqKwt7fp6+uHkZHDyclpdnalra17xnftAAAAC3RSTlMAdRCQ9zrK3yCjjxvyUPEAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAAeDICAOgDAAB4MgIA6AMAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAABQAAAAA6AEAAEAAABQAAAAAAAAAHW60KIAAAHzSURBVHja7ZnZroMgEIZdUEuBgQF8/1c9ol20dRudnvSif5q0MemXWQGHLHuoqHIp66bRBDVNXcu8ymZ0uQp9WEJeXnDFVZ9UPjWv0afVjIysGHgdseK0b2IjE68jFj0v12y69g5rRiWnJSew7ICCEyiKrNKsqjhTMjSM5AXKrP5yYM3XJrdm4QdqZv2As8LgWmtbB8gBBBvVQ8bCOaBwI9qNGU4AwagZGTgKbNWC3CGgsGpRVhwArvA6Ih3o1KpaKhDVhoAINFtATwOCUgdNzFYyYsL9K4YUUhusCUl2JS8LwDh4BcM/g+mT5LTzz4RFChDVG1D7AYjW2iHASADCDBDNAPTem5Ug7gUiaJi6TAK+u4xGaExAAQCWA9gXnvOjghKULJtb7SJ2SRiAaY1xt0d9NZHKpn02g7sDFU5iaA90ikmKKn2SybH/0T9arJrFXvZbnWepq01c5xlkXg+BvmKvEt2RTcod4a3ueiGy7nopM5bM2zqKwDsywrmzDQYfd9UL5TiH4bFntYLnfAi73CUDPbKdYN0+8/YD2x3RIwGDQ/17rfg34Pe/jbK/gMsvB0r+MQv7IKjgHVV1s6+SN4QfGPdxmjiMigu+kemnhrrsY2f+wTjHqLgsXi8X5JnLhfIyd2HRXX/U9OsP2V1/jKz7A+erIhCI+V6WAAAAAElFTkSuQmCC",
        discord_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAASFBMVEVMaXEpLS4qLTApLi4pLS8pLS4kMDApLS4oLzApLS6zvsEpLS42Ozygqq2OmJqrtbh2f4FMUVN/iIpudnhlbW5UW1xdY2VDSEpaOxVJAAAACnRSTlMA70BwyooQ3yOjP0Vx1AAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAdpJREFUeNrtmdmygyAMhtG6AQmb2/u/6dHWunQUD5jO9ML/SjvjZxJCqAljs4r0wXlWljJAZZll/JGyHVV5IqOV8OoDV+TyovKteaW8rLKi5a2JNLwVkYg3EIsnL5dkeq5MJQk1Os0pgaOJCSUwKVgqSZWyBy3wQRtCKTnLfhyY0W2TabPQAyWxbuAN/AoQ+na5tv1FIDRKG7vcGtSujQdCrbGBzigUozSqprdOYBcJbLVqayW2wtqiMFFA0MJpsaPhxzoG2IhjaYgAogd4bOIxsPXxBIYDlRcoIBQIfp5oQoGzxwYkuNdKdCDtO7IqFOimB93ifzcl04seCnxbYmd7cfumPgwI2+DbBWj8QWRnIXw91y3JjJtY/BtoNnsCcEbUJ5nIzrPQ1Ua/C8O6VkAQEMWp2iDgOe+ghrG4fXK8Kn6g2vXcoWevHAEnkuk+a8RwxChfIh7FsJ+Iw/lhjXoXbjR2OGei8nC28ZVv0Fvbj3litXdJvBW7w53aPL1H2ahjdHAWPyMFSrkG7j9LN/AGXgT+/tco+Qc4/3Egp2+zkDeCCtpWFW23bwzhF9p95A1JVtC1TL/V1CVvO9M3xilWJi8+hwv8ynAhr/YGFsP4Iwsff/Bh/LGy7g8BuwqRuLh4lgAAAABJRU5ErkJggg==",
        discord_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAARVBMVEVMaXH////////////////////////////5+vr///////9fbW3///91gYHp6+uYoaFpdna+w8Olra3X29uHkZGvtrbN0tI4b+SqAAAAC3RSTlMAEEC3IHXP3/mZMAl4wSUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAAeDICAOgDAAB4MgIA6AMAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAABQAAAAA6AEAAEAAABQAAAAAAAAAHW60KIAAAHSSURBVHja7ZndjoMgEIVRV4UCw6++/6OuVqXaVQw4JnvhuWqa+PUwDkM9EhJUlDWrmrYVCWrbpmJ1SXb0w6jIFmU/X7iCiYuqt/ZacVntyuQLgTcQX5j+Nh6ReAOxePNqgSb2XrBA1LhohgkcLVJMIC1IKVBVYt6SacMwXCAjFS6wIg0usMHbJvNmwQcKZD3AB3gLkEIfPoODi0BqvLbuA7RSqz4fSDstDRirJB+lpTLgFJcmE9hr33eebyU7J7nNAoLmSvMdDV92OUDDj6VpBlBGgMcWj4F9jMdlOlBFgRxSgTTO4yYVGFZsqYDJrTZUuKWyKhWoNhf6YArmTtKpwMWJC37l9pcgDQjb4rsP0MaLSM5KaEKTz818UsQjoA17YrQIMiC6k048Aq5mguqsXgbDelbQJKDkp+qTgOe8gxlG8vbJ8V0h0a7xuyufB7hPcjiTrPmeEcMR42ONeNjYM3E4P5z1y+CW1kGns/owEKd+o+AcjB3pdPSWxI8AuTOb51p4l3WMDov9c2SC98Nh+vxZeoAP8CLw/z+Noj+Ao0cE6CEGesyCHgQVuFHVHWEaetyHaXGKigu8yPSuUBc9dsYPxjGiYlbc+3LhrfzXHyt3v9sbIa2w+haSAAAAAElFTkSuQmCC",
        telegram_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAQlBMVEVMaXEpLS4pLS8rLTApLS4pLi4qLTApLS4nMDApLS6zvsEpLS5yenwxNjertbhMUVORm52hrK9gZ2mCi40/REVUWlzr2ocdAAAACnRSTlMA77cwdc9A3xqZ9uo0zQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAatJREFUeNrt2cmSgyAQBmA1bjSbCHn/Vx2zGWRcQP7UzCF9SuXwVWsLjW1RzNG3NauaruMJ0XVNxeq2WImelfx0lKz/xfHMqJdex7Oj85K8ALxJvCDzW+QI8max5rBg9wvmwLilyJDgLcUSCZZ90XJotMiSPBYMw4KsqLBgVTRYsMEtk+diwYMcHF/wj8DRWocDpVBENKDABzeFg4AzRyQBoLM0h8q/ZD2QF9n3cMkRiTww5IjGDFCO5n3rXj/1adArLJHV6qDIR+CCM9qpoyLvgwuOhJy97SLvgdr6VTCavz2y6WBQWCH5VUU8NVtgwE3p8dH/45oIWgrTW3qbW8MWOITpBR4lb7BOGD+90BvO7Njamld6obdT5P3nUItRrnk7RY7bHEwIXjNBFYI6ExQhKHPbaCCa/L48xj410S3AmbgixzcpN0Ts/2ltVMQUOakvj+q4yGknh+eNVLjTl7QHKzn9sDR1mUF+j8RfEA3+/7dR+As4fEQAH2LAxyzwQVCPHVV9YpgGH/chU6yhI9jbMvnQUBc+dsYPxhGj4pWvAdCPC/c4//nD434AhkAJ68tCPVsAAAAASUVORK5CYII=",
        telegram_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAQlBMVEVMaXH////////////////////////////29/f///////9fbW3W2tppdnazublzf3+HkZGXoaGlra3DyMjh5OR9iIiusM/5AAAACnRSTlMAEJBAo8p13/sjB91jDAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAa9JREFUeNrtmc2ygyAMhUVRIwER9b7/q176Z5Fpq8jptIuelePim8AxBJOiWCSqRsq6bVWC2rauZVMVD9SVpA6LZBfhRKky1azDa1W22g7LC4kYXkAE8TxRnHmNgqk8L1gBdVq0RAJPIRISSKKoFFQV0pJLwkgsUBb1lwNrXJpckwUPVGD9gB8CTs4RDki9YeYBBbzgvAgCXHAY4Ox4kclfsh44UPYernHMYx4wxjH3GUCa7H3rbo/6MDAwltlps2HyFnCFs3o2Wya/Bq5wPNLCe27yK6B2oQtWqzuPXTowMnYkpc0Ok58BI5wPT03hC50IdByHt+bxnAgc4vAiHicfsPNow/Bi3t+RE1s7ewtP9VHiuYMlQI/9OSOm3Zm883CwMVBnAg0aOMZAyi2jEdHm1+W1zQOg0JPdc/6nFCkadn01KWW032NyUl2ezLbJaTeH60Ya3O2L3EYmp1+WfJUZ6Hcl/gHRwO//G4X/gMsvB0p8mwXeCBLYVpXvfZXYLXxDuw8Z4qVVLHAt03c1deFtZ3xjHNEqLkU8XJA5w4WyezSw8OOPOn38If34I4juH4V29Oglg0hrAAAAAElFTkSuQmCC",
        twitter_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAARVBMVEVMaXEkMDApLS4pLS4pLS8qLTApLS4pLS4oMDApLS4pLS6zvsE8QEKirK+qtbhQVVd4gIIyNjdlbG6MlpiZo6VdZGVudniaeCh1AAAACnRSTlMAEJDvyjp13yCjXoVRsAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAehJREFUeNrtmWuvwiAMhmFXuWxMhvv/P/VwUxmagVCTncR+IAaTJy30Lawg9DDcD4R040g/sHHsOjL06I1dmpYWW0suEQ43tNKGvXsjrbYxcLIH4GliD+nfzkcgniZiyxsomDU2YApoJmgCCTQutpDAFqOegloPuSVOMAQWSFB3cmAHJxMvFnggBbYf8D8Bxc2biP7geo4XAPnMvMn9/MSYupaELO9AFvpz1byJl63hqlnLpjQgcEgleEdAE/Tix7stjM28eJeFdlHY0O8bswW/S9LG+bM+gja8rSYPzQ6sfvQeb3WJLWzWuDFazUKluKDtaBOwXnrKUsyYSsBM4DN38njp4iAfuTNzmGrjsmbdC6YG6II2ubMA1UMnGJEWSXaBDXIHBGgS0EhFecFUr+Hky6xZTFkPvJoK6MKVOUGjjKxxFUdRP9YBN3cE5OcOSvPkUzCissBazBYKZkkK5hDIg4rqw1WpoFFCdGskGDMnSk+96EjPyx10eKBM8Rk/T142BcD1paJy9v52kgeU0/RSoc2ctYPLze/C+QOeAnj+r1HwD3ByciCBb7OAN4IwbKtK974a2CX8QrsP0kXXKsZwLdNvNXXB287wjXGIVnGD48cFUvO40FzePVjo54/u8+cPop8/Au/+APcI9uuAkcyvAAAAAElFTkSuQmCC",
        twitter_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAS1BMVEVMaXH////////////////////////////4+fn///////////////////9fbW1zf3/r7e29w8NpdnakrKzb3t6MlZV9iIjN0dGvtrbZFKIaAAAADXRSTlMAEHBAip/P3/sgMK+/lNKIKgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAfVJREFUeNrtmduSgyAMhvGsVVQUD+//pEuAbtV1KoW/M92Z5oILOvNNEv4EGxj7tSiJszovCv6CFUXeZHHCTqxKS+5tZVYdcFHKAy3du1fwYCs2Tt4APEW8If3b+QjiKWKkeSmHmT6ZigONgs6QQHKxRALLiCUcagmLscAYm0LOM9ZggTXLscAcVya2WPBADrYv8D8BpbC2HH7o1V7vAeyH1prY73dtO5c+IYs7sJXbhqd4Xe+Xw0mxxnVWgI1D8wXvGZCCHu16t7FtB+l9yotycdGh3xmr3vGXDfnTU+g2aOKtITqkE5jsaj1ew4QttWrMesimZ6WYoPWqBRheerOm0HolQEfgQztuvOvmYFRD69Bjuo1RzbQvmBCgCZq0M4L6oSkYeV0kzg12ox0IkARIpTLbggnOYWfbLCVThANL6oAmXOESNHNQjek4M7drGHA13dBdO+yaJx4FIw83zMtA8eiAplTGy4JhV+1w3TTbUWtn9AZS4qYdfdF7i++td7jS3bTDnl4ouw5IG0Nny8YDOP3pqLI9/zpxA4qu6+TJnrYnHzffD84v8COAn/9vFP4HvMYCG/wQAz5mgQ+CIuyoCjvtoxS+YdwHH0iyCDcyfddQFz52xg/GESeTRsfHhSzkcSGtzh4s1PNH8/rzR62ePzbe/QBP+D2JeM/77AAAAABJRU5ErkJggg=="
    };
var cr = g('<div class="flex w-full justify-center items-center gap-2"><div class="flex justify-center"><a target=_blank rel="noopener noreferrer"><img class=size-9></a></div><div class="flex justify-center"><a target=_blank rel="noopener noreferrer"><img class=size-9>');
const ur = A => {
    const [e, n] = F({}), i = A.isWin ? "Guess who just landed on a mega win 😆" : "I'm heartbroken and needs love 🥺", s = "https://www.facebook.com/sharer.php?u=", o = "https://twitter.com/share?url=";
    re(() => sA(void 0, null, function*() {
        const f = yield(k => {
            const Q = `/game/support/share-v3/info/detail/${k}/`;
            return AA().get(Q)
        })(A.shareId);
        n(f)
    }));
    const t = f => {
        const k = `${location.protocol}//${Z.host}/api/game/support/share-v3/info/${A.shareId}/`;
        return A.shortUrl && A.shortUrl !== "" ? f + A.shortUrl : f + ((Q, B) => {
            const S = [],
                x = `${location.protocol}//${Z.host}/game-detail/${B}&bd=${A.shareObj.betId}&gn=${A.shareObj.gameUnique}&gd=${A.shareObj.gameId}&ud=${A.shareObj.userId}&un=${A.shareObj.userName}&sg=${A.shareObj.isSingle?"1":"0"}`;
            return S.push(`title=${encodeURIComponent(Z.host)}`), S.push(`description=${encodeURIComponent(i)}`), S.push(`image=${encodeURIComponent(Q)}`), S.push(`url=${encodeURIComponent(x)}`), S.push(`site_name=${encodeURIComponent(Z.host)}`), encodeURIComponent(`${location.protocol}//webapi.${Z.host}/game/support/share/friend/?${S.join("&")}`)
        })(k, e().betLog.distributeId)
    };
    return l = cr(), c = l.firstChild, m = c.firstChild, h = m.firstChild, b = c.nextSibling.firstChild, v = b.firstChild, m.$$click = () => {
        A.onShare && A.onShare("facebook", t(s))
    }, b.$$click = () => {
        A.onShare && A.onShare("twitter", t(o))
    }, H(f => {
        var k = t(s),
            Q = dA.darken ? uA.facebook_dark : uA.facebook_light,
            B = t(o),
            S = dA.darken ? uA.twitter_dark : uA.twitter_light;
        return k !== f.e && T(m, "href", f.e = k), Q !== f.t && T(h, "src", f.t = Q), B !== f.a && T(b, "href", f.a = B), S !== f.o && T(v, "src", f.o = S), f
    }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0
    }), l;
    var l, c, m, h, b, v
};
eA(["click"]);
var mr = g('<div class="size-full flex justify-center items-center overflow-hidden relative"><img alt=""class="size-full absolute top-0 left-0">'),
    hr = g(`<div class=""><style>
          @keyframes ribbonAnimation {
            0% {
              visibility: visible;
            }
            29% {
              visibility: visible;
            }
            30% {
              visibility: hidden;
            }
            100% {
              visibility: hidden;
            }
          }
        </style><div>`);
const Ae = {
        win: [lr, or],
        lose: [dr, gr]
    },
    fr = A => {
        return e = hr(), n = e.firstChild.nextSibling, a(n, r(y, {
            get when() {
                return A.isWin
            },
            get children() {
                var i = mr(),
                    s = i.firstChild;
                return s.style.setProperty("animation", "ribbonAnimation 4s infinite"), a(i, () => A.children, null), H(o => {
                    var t = A.delay ? sr : ir,
                        l = `${A.delay?"0.6s":0}`;
                    return t !== o.e && T(s, "src", o.e = t), l !== o.t && ((o.t = l) != null ? s.style.setProperty("animation-delay", l) : s.style.removeProperty("animation-delay")), o
                }, {
                    e: void 0,
                    t: void 0
                }), i
            }
        }), null), a(n, r(y, {
            get when() {
                return !A.isWin
            },
            get children() {
                return A.children
            }
        }), null), H(i => {
            var s = ae("size-full bg-layer3 text-brand bg-cover text-2xl font-bold bg-no-repeat bg-center flex items-center justify-center relative rounded-xl overflow-hidden whitespace-nowrap", A.isWin ? "win" : "lose"),
                o = A.isWin ? Ae.win[dA.darken ? 0 : 1] : Ae.lose[dA.darken ? 0 : 1];
            return s !== i.e && P(n, i.e = s), o !== i.t && ((i.t = o) != null ? n.style.setProperty("background-image", o) : n.style.removeProperty("background-image")), i
        }, {
            e: void 0,
            t: void 0
        }), e;
        var e, n
    };
var br = g("<style>"),
    Br = g('<div class="animation-win-wrap animation-win w-10 h-10">'),
    pr = g('<div class="star-item item-1">'),
    wr = g('<div class="star-item item-2">'),
    vr = g('<div class="star-item item-3">'),
    Cr = g('<div class="star-item item-4">');
const Qe = A => {
    return [(i = br(), a(i, () => `
          @keyframes task_star {
            0% {
              transform: scale(0.8);
            }
            25% {
              transform: scale(1.5);
            }
            50% {
              transform: scale(0.8);
            }
            75% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(0.8);
            }
          }
          @keyframes task_star_big {
            25% {
              transform: scale(1.8);
            }
            50% {
              transform: scale(0.8);
            }
            75% {
              transform: scale(1.5);
            }
          }
          .animation-win-wrap {
            background: url(${ar}) no-repeat center;
            background-size: 100% 100%;
            position: relative;
            .star-item {
              background: url(${nr}) no-repeat center;
              background-size: 100% 100%;
              position: absolute;
              width: 25%;
              height: 25%;
              &.item-1 {
                top: 7%;
                left: 18%;
                animation: task_star 1s infinite linear;
              }
              &.item-2 {
                top: 47%;
                right: 5%;
                animation: task_star 1s infinite linear;
                animation-delay: 0.25s;
              }
              &.item-3 {
                top: 64%;
                left: 14%;
                animation: task_star_big 1s infinite linear;
                animation-delay: 0.5s;
              }
              &.item-4 {
                top: 3%;
                left: 68%;
                animation: task_star_big 1s infinite linear;
                animation-delay: 0.75s;
              }
            }
          }
        `), i), (n = Br(), a(n, (e = hA(() => !!A.show), () => e() && [pr(), wr(), vr(), Cr()])), n)];
    var e, n, i
};
var xr = g(`<style>
          @keyframes heartleft {
            0% {
              transform: rotate(0);
            }
            50% {
              transform: rotate(0);
            }
            51% {
              transform: rotate(-15deg);
            }
            53% {
              transform: rotate(-13deg);
            }
            55% {
              transform: rotate(-15deg);
            }
            57% {
              transform: rotate(-13deg);
            }
            59% {
              transform: rotate(-15deg);
            }
            75% {
              transform: rotate(-15deg);
            }
            100% {
              transform: rotate(0);
            }
          }
          @keyframes heartright {
            0% {
              transform: rotate(0);
            }
            50% {
              transform: rotate(0);
            }
            51% {
              transform: rotate(20deg);
            }
            53% {
              transform: rotate(16deg);
            }
            55% {
              transform: rotate(20deg);
            }
            57% {
              transform: rotate(18deg);
            }
            59% {
              transform: rotate(20deg);
            }
            75% {
              transform: rotate(20deg);
            }
            100% {
              transform: rotate(0);
            }
          }
          @keyframes hiddenblock {
            0% {
              visibility: hidden;
            }
            50% {
              visibility: hidden;
            }
            51% {
              visibility: visible;
            }
            80% {
              visibility: hidden;
            }
            100% {
              visibility: hidden;
            }
          }
          .animation-lose-wrap {
            border-radius: 50%;
            background-color: #3c3f49;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .left {
              position: absolute;
              width: 33%;
              left: 19%;
              top: 29%;
              animation: heartleft 5s infinite;
              transform-origin: 100% 100%;
            }
            .right {
              position: absolute;
              width: 33%;
              left: 50%;
              top: 28%;
              animation: heartright 5s infinite;
              transform-origin: 0% 100%;
            }
            .block_one {
              position: absolute;
              visibility: hidden;
              width: 12%;
              left: 37%;
              top: 22%;
              animation: hiddenblock 5s infinite;
            }
            .block_two {
              position: absolute;
              visibility: hidden;
              width: 14%;
              left: 53%;
              top: 26%;
              animation: hiddenblock 5s infinite;
            }
          }
        `),
    yr = g('<div class="animation-lose-wrap size-10 animation-lose"><img class=left alt=""><img class=block_one alt=""><img class=block_two alt=""><img class=right alt="">');
const Ee = () => {
    const A = (2 * Math.random()).toFixed(1) + "s";
    return [xr(), (e = yr(), n = e.firstChild, i = n.nextSibling, s = i.nextSibling, o = s.nextSibling, A != null ? n.style.setProperty("animation-delay", A) : n.style.removeProperty("animation-delay"), A != null ? i.style.setProperty("animation-delay", A) : i.style.removeProperty("animation-delay"), A != null ? s.style.setProperty("animation-delay", A) : s.style.removeProperty("animation-delay"), A != null ? o.style.setProperty("animation-delay", A) : o.style.removeProperty("animation-delay"), H(t => {
        var l = cA.heart_left,
            c = cA.block_two,
            m = cA.block,
            h = cA.heart_right;
        return l !== t.e && T(n, "src", t.e = l), c !== t.t && T(i, "src", t.t = c), m !== t.a && T(s, "src", t.a = m), h !== t.o && T(o, "src", t.o = h), t
    }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0
    }), e)];
    var e, n, i, s, o
};
var Qr = g('<div class="bg-layer3 rounded-lg p-3"><div class="flex items-center"><p class="text-primary text-base ml-2 leading-none font-extrabold">'),
    Er = g('<div class="flex items-center text-2xl font-medium mr-1.5"><span></span><span class=text-primary>'),
    Sr = g('<div class="w-full mt-3"><div class="w-full h-9 flex items-center justify-center"><p class=text-sm></p><p class="ml-2 font-bold"> x'),
    Mr = g('<div class=" bg-[rgba(0,0,0,0.05)] dark:bg-[#323738] rounded-lg p-3 mt-2"><div class="w-full flex items-center justify-center"><div class="flex items-center font-medium mr-1"><span></span><span class="text-primary text-sm">'),
    Ir = g('<div class="mt-2 flex items-center justify-center"><p class="text-sm text-[#98A7B5] "></p><p class="ml-1.5 font-extrabold text-sm text-primary"> x');

function Dr(A) {
    const e = A.betLog.odds >= 1e4,
        [n, i] = F(!1),
        s = A.fullName ? A.fullName : A.gameUnique;
    ge(Vt(A.gameUnique));
    const {
        findToken: o
    } = vA();
    A.gameType;
    const t = q(() => o(A.betLog.currencyName || ""));
    return c = Qr(), m = c.firstChild, h = m.firstChild, a(m, e ? r(Qe, {
        show: !0
    }) : r(Ee, {}), h), a(h, () => u(e ? "My Win In __showName__" : "My Lose In __showName__", {
        showName: s
    })), a(c, (l = hA(() => !!A.open), () => {
        return l() ? (D = Sr(), O = D.firstChild, d = O.firstChild, M = d.nextSibling, G = M.firstChild, D.$$click = () => {
            if (n()) return !1;
            A.open && (i(!0), setTimeout(() => {
                i(!1)
            }, 2e3), L.push(() => r(Ie, {
                get id() {
                    return A.betLog.distributeId
                }
            })))
        }, a(D, r(fr, {
            get show() {
                return !A.chatroom && e
            },
            class: "",
            isWin: e,
            get children() {
                return [r(bA, {
                    class: "bg-amber-300	rounded-full mr-1.5",
                    get token() {
                        return t()
                    }
                }), (I = Er(), j = I.firstChild, E = j.nextSibling, a(j, () => `${new z(A.betLog.winAmount||0).sub(A.betLog.betAmount||0).toNumber()} `), a(E, () => {
                    var p;
                    return (p = t()) == null ? void 0 : p.name
                }), H(() => P(j, _("text-primary mr-1.5 text-sm font-extrabold", {
                    "!text-brand": Number(A.betLog.winAmount) - Number(A.betLog.betAmount) > 0
                }))), I)];
                var I, j, E
            }
        }), O), a(d, () => u("Payout")), a(M, () => A.betLog.odds / 1e4, G), D) : [(Q = Mr(), B = Q.firstChild, S = B.firstChild, x = S.firstChild, C = x.nextSibling, a(B, r(bA, {
            class: "bg-amber-300	rounded-full mr-1",
            get token() {
                return t()
            }
        }), S), a(x, () => `${new z(A.betLog.winAmount||0).sub(A.betLog.betAmount||0).toNumber()}`), a(C, () => {
            var I;
            return (I = t()) == null ? void 0 : I.name
        }), H(() => P(x, _("text-primary mr-1.5 text-sm font-extrabold", {
            "!text-brand": Number(A.betLog.winAmount) - Number(A.betLog.betAmount) > 0
        }))), Q), (b = Ir(), v = b.firstChild, f = v.nextSibling, k = f.firstChild, a(v, () => u("Payout")), a(f, () => A.betLog.odds / 1e4, k), b)];
        var b, v, f, k, Q, B, S, x, C, D, O, d, M, G
    }), null), H(b => Te(c, dA.darken ? {
        background: "linear-gradient(180deg, rgba(254, 242, 122, 0.10) -4.43%, rgba(254, 242, 122, 0.00) 38.75%), var(--bg-layer3, #292D2E)"
    } : {
        background: "linear-gradient(180deg, rgba(254, 242, 122, 0.10) -4.43%, rgba(254, 242, 122, 0.00) 38.75%), var(--bg-layer3, #FFF)"
    }, b)), c;
    var l, c, m, h
}
eA(["click"]);
var kr = g('<div class="flex justify-center">'),
    Lr = g('<input class="w-full mt-2 placeholder:text-primary p-3 text-primary text-sm font-semibold rounded-lg border border-input bg-[#f3f3f3] dark:bg-[#292D2E]"disabled>'),
    Ur = g("<p>"),
    Vr = g('<div class="my-6 flex gap-3">'),
    Hr = g('<div class="text-center text-base text-secondary mb-2">'),
    Fr = g('<div class="mt-2 rounded-xl overflow-hidden">'),
    Tr = g('<div class="flex items-center justify-center w-full h-full bg-layer2 sm:bg-layer4 rounded-t-xl">');
const Rr = Gt(() => V("Maximum 50 Characters."), 2e3);

function Gr(A) {
    const e = rr(),
        [n, i] = F(!0),
        [s, o] = F({}),
        [t, l] = F(""),
        [c, m] = F(!0),
        [h, b] = F(),
        [v, f] = F("");

    function k(Q) {
        const B = A.betLog,
            S = new z(B.winAmount).sub(B.betAmount).toNumber();
        X.emit("sensorsTrack", {
            event: "share_bet_result",
            game_name: String(A.gameUnique || s().fullName),
            game_id: String(B.gameId || B.betId),
            bet_id: String(B.betId),
            coin_type: B.currencyName,
            amount: String(B.betAmount),
            amount_fiat: "",
            profit: String(S),
            profit_fiat: "",
            odds: B.odds / 1e4,
            share_methods: Q
        })
    }
    return BA(() => {
        let Q = !0;
        xe(A).then(B => {
            if (B) {
                let S = "";
                S = B.odds >= 1e4 ? u("I'm lucky today!") : u("Not my day..."), Q && (f(S), o(B), h() && typeof h().focus == "function" && h().focus())
            } else L.pop()
        }).catch(B => {
            V(B), L.pop()
        }), kA(() => {
            Q = !1
        })
    }), r(mA, {
        get title() {
            return Q = Tr(), a(Q, () => u("Share")), Q;
            var Q
        },
        class: "!bg-layer2 w-96 min-w-96 max-h-[80%] help-pop",
        get children() {
            var Q = Fr();
            return a(Q, r(y, {
                get when() {
                    return !s().betId
                },
                get children() {
                    var B = kr();
                    return a(B, r(DA, {})), B
                }
            }), null), a(Q, r(y, {
                get when() {
                    return s().betId
                },
                get children() {
                    return [r(Dr, {
                        get betLog() {
                            return CA(iA({}, A.betLog), {
                                originBetId: A.betLog.betId,
                                betId: s().betId
                            })
                        },
                        get gameType() {
                            return A.third ? 3 : 1
                        },
                        get gameUnique() {
                            return A.gameUnique
                        },
                        get fullName() {
                            return s().fullName
                        }
                    }), (x = Lr(), x.addEventListener("change", C => {
                        C.target.value.length < 50 || Rr(), l(C.target.value.slice(0, 50))
                    }), x.addEventListener("blur", () => i(!1)), x.addEventListener("focus", () => i(!0)), Re(C => b(C), x), H(() => T(x, "placeholder", v())), H(() => x.value = t()), x), (S = Vr(), a(S, r(W, {
                        type: "second",
                        class: "w-1/2 leading-3",
                        onClick: () => {
                            if (s().betId) try {
                                const C = `${location.protocol}//${Z.host}/game-detail/${s().distributeId}`;
                                pA(C), V(u("Copied"))
                            } catch (C) {}
                        },
                        get children() {
                            var C = Ur();
                            return a(C, () => u("Copy link")), C
                        }
                    }), null), a(S, r(W, {
                        type: "brand",
                        class: "w-1/2 leading-3",
                        onClick: () => {
                            c() && (m(!1), X.emit("getPublicChatRoomId", C => {
                                ((D, O, d) => AA().post(`/game/support/share-v3/share/sendChat/${D}/`, {
                                    roomId: d,
                                    shareContent: O
                                }))(s().betId, v(), C, A.single).then(() => {
                                    V(u("Successfully shared")), L.pop()
                                }).catch(D => {
                                    V(D), L.pop()
                                })
                            }), setTimeout(() => {
                                e() && m(!0)
                            }, 5e3)), k("chatroom")
                        },
                        get children() {
                            return u("Share to Chatroom")
                        }
                    }), null), S), (B = Hr(), a(B, () => u("Share on social media")), B), r(ur, {
                        get isWin() {
                            return A.betLog.odds >= 1e4
                        },
                        get shareId() {
                            return s().betId
                        },
                        get shortUrl() {
                            return s().shortUrl
                        },
                        get shareObj() {
                            var C;
                            return {
                                betId: A.betLog.betId.toString(),
                                gameUnique: A.gameUnique,
                                userId: A.betLog.userId.toString(),
                                userName: A.betLog.userName || "",
                                isSingle: A.single,
                                gameId: ((C = A.betLog.gameId) == null ? void 0 : C.toString()) || ""
                            }
                        },
                        onShare: C => k(C)
                    })];
                    var B, S, x
                }
            }), null), Q
        }
    })
}
var Nr = g('<div class="flex justify-center">'),
    Zr = g('<div class="flex items-center"><div class=ml-4><p class="m-0 text-xs h-4.5 leading-4 flex items-center text-primary capitalize whitespace-nowrap overflow-hidden">'),
    zr = g('<div class="w-full rounded-xl h-40 bg-layer5 mt-5 p-3"><p class="m-0 text-center">'),
    jr = g('<div class="bg-layer4 rounded-xl p-4 overflow-hidden relative lg:w-100">'),
    Jr = g('<p class="m-0 h-5 flex items-center text-primary font-bold">'),
    Yr = g('<p class="m-0 h-5 flex items-center text-primary font-bold"> '),
    Wr = g('<div class="w-full flex flex-wrap pl-4 items-center justify-center">'),
    Or = g('<a target=_blank rel="noopener noreferrer"class="mr-4 mt-1"><img class="w-10 h-10">');

function Kr(A) {
    const e = A.betLog.odds >= 1e4,
        [n, i] = F({
            shareData: {},
            loading: !0
        });
    return BA(() => {
        let o = !0;
        xe(A).then(t => {
            t && o && i({
                shareData: t,
                loading: !1
            })
        }).catch(t => {
            V(t), L.pop()
        }), kA(() => {
            o = !1
        })
    }), s = jr(), a(s, r(y, {
        get when() {
            return n().loading
        },
        get children() {
            var o = Nr();
            return a(o, r(DA, {})), o
        }
    }), null), a(s, r(y, {
        get when() {
            return !n().loading
        },
        get children() {
            return [r(Jt, {
                onClick: () => L.pop(),
                class: "absolute right-4 top-4 size-4 cursor-pointer scale-150 text-secondary"
            }), (h = Zr(), b = h.firstChild, v = b.firstChild, a(h, e ? r(Qe, {
                show: !0
            }) : r(Ee, {}), b), a(b, e ? (m = Jr(), a(m, () => u("Winning tastes sweet!")), m) : (l = Yr(), c = l.firstChild, a(l, () => Z.mascot, c), a(l, () => u("took it all! 🥺"), null), l), v), a(v, () => e ? `${n().shareData.fullName} ${u("Wow Moment")}` : `${n().shareData.fullName} ${u("Damn Moment")}`), h), (o = zr(), t = o.firstChild, a(t, () => u("Share on social media")), a(o, r(Xr, {
                get distributeId() {
                    return n().shareData.distributeId
                }
            }), null), o), r(W, {
                class: "w-full h-12 mt-4 text-primary",
                type: "second",
                onClick: () => {
                    try {
                        const f = `${location.protocol}//${Z.host}/game-detail/${n().shareData.distributeId}`;
                        pA(f), V(u("Copied"))
                    } catch (f) {}
                },
                get children() {
                    return u("Copy link")
                }
            })];
            var o, t, l, c, m, h, b, v
        }
    }), null), s;
    var s
}

function Xr(A) {
    const e = `${location.protocol}//${Z.host}/game-detail/${A.distributeId}`,
        [n, i] = F(null);
    return BA(() => {
        sA(this, null, function*() {
            const s = yield Ge({
                title: Z.host || "",
                content: "Hey buddy, you really should check this bet slip.",
                shareUrl: e,
                isGame: !1
            });
            i(s)
        })
    }), r(y, {
        get when() {
            return n()
        },
        get children() {
            var s = Wr();
            return a(s, r(Ne, {
                get each() {
                    return n()
                },
                children: (o, t) => r(y, {
                    get when() {
                        return o.url
                    },
                    get children() {
                        var l = Or(),
                            c = l.firstChild;
                        return H(m => {
                            var h = o.url,
                                b = o.icon;
                            return h !== m.e && T(l, "href", m.e = h), b !== m.t && T(c, "src", m.t = b), m
                        }, {
                            e: void 0,
                            t: void 0
                        }), l
                    }
                })
            })), s
        }
    })
}
var Pr = g('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path fill-rule=evenodd clip-rule=evenodd d="M20.7166 10.45C21.0945 10.7049 21.0945 11.2611 20.7166 11.516L12.1658 17.2846C11.7388 17.5727 11.1633 17.2667 11.1633 16.7516V5.21434C11.1633 4.69923 11.7388 4.39327 12.1658 4.68135L20.7166 10.45Z"fill=#B3BEC1></path><path fill-rule=evenodd clip-rule=evenodd d="M12.1274 7.54137C8.4663 8.15096 3.09904 12.7736 2.25816 18.8808C2.16617 19.5489 2.87791 19.5459 3.09904 19.2018C4.64948 16.7891 7.43313 14.3161 12.1274 14.3161C12.1274 14.3161 12.1434 9.36103 12.1274 7.54137Z"fill=#B3BEC1>'),
    qr = g("<div>"),
    $r = g("<div class=pop-center>");
const _r = () => Pr(),
    Aa = function(A) {
        return lA.login ? r(Ze, {
            title: "Share",
            get children() {
                var e = qr();
                return e.$$click = () => {
                    if (Number(A.betLog.betAmount) === 0) return V(u("Demo play cannot be shared."));
                    lA.userId === A.betLog.userId ? L.push(() => r(Gr, A), {
                        close: !1
                    }) : L.push(() => {
                        return n = $r(), a(n, r(Kr, A)), n;
                        var n
                    }, {
                        close: !1
                    })
                }, a(e, r(_r, {})), H(() => P(e, ae("z-10 size-11 m-0 p-0 rounded-full flex justify-center items-center absolute cursor-pointer right-1 top-1", A.class))), e
            }
        }) : null
    };
eA(["click"]);
const ee = "/modules/games2/assets/game_detail_bg-f273b618.png";
var ea = g("<img>");
const Se = A => {
    const e = ze(() => A.src, `w=${A.width}`),
        [n, i] = te(A, ["src", "width"]);
    return s = ea(), gA(s, oA(i, {
        get src() {
            return e()
        }
    }), !1, !1), s;
    var s
};
var ta = g('<div class="mb-2 text-base text-center">'),
    ra = g('<div class="pt-4 p-3 pb-0"><div class="text-primary leading-5 text-center text-base sm:text-sm"></div><div class="flex items-center justify-center"><div class="flex items-center text-2xl"><span>'),
    aa = g("<div class=mb-4>");
const na = A => {
    const {
        isViewInFiat: e
    } = vA(), {
        coinFormat: n
    } = ne();
    return i = ra(), s = i.firstChild, o = s.nextSibling, t = o.firstChild, l = t.firstChild, a(s, () => u("Profit")), a(o, r(bA, {
        class: "bg-amber-300 rounded-full mr-1.5",
        get token() {
            return A.currentToken
        },
        imgClass: "size-6"
    }), t), a(l, () => {
        var c, m;
        return `${new z(A.betLog.winAmount||0).sub(A.betLog.betAmount||0).todp((c=A.currentToken)==null?void 0:c.decimal,z.ROUND_DOWN)} ${(m=A.currentToken)==null?void 0:m.name}`
    }), a(i, r(y, {
        get when() {
            return e()
        },
        get fallback() {
            return aa()
        },
        get children() {
            var c = ta();
            return a(c, () => n(new z(new z(A.betLog.winAmount || 0).sub(A.betLog.betAmount || 0)), A.betLog.currencyName)), c
        }
    }), null), H(() => P(l, _("text-primary leading-10 text-[1.75rem] font-extrabold", {
        "!text-brand": Number(A.betLog.winAmount) - Number(A.betLog.betAmount) > 0
    }))), i;
    var i, s, o, t, l
};
var ia = g('<span class="text-base sm:text-sm">'),
    sa = g('<div class="flex justify-between bg-black_alpha5 dark:bg-black_alpha10 rounded-xl mx-3 py-3"><div class="flex flex-col items-center w-1/2 text-sm sm:text-xs"><span class=text-secondary></span><div class="flex items-center"></div></div><div class="flex flex-col items-center w-1/2 text-sm sm:text-xs"><span class=text-secondary></span><span class="leading-6 text-base sm:text-sm">x'),
    la = g('<span class="whitespace-nowrap text-base sm:text-sm">');
const oa = A => {
    const {
        isViewInFiat: e
    } = vA(), {
        coinFormat: n
    } = ne();
    return i = sa(), s = i.firstChild, o = s.firstChild, t = o.nextSibling, l = s.nextSibling.firstChild, c = l.nextSibling, m = c.firstChild, a(o, () => u("Bet Amount")), a(t, r(y, {
        get when() {
            return e()
        },
        get fallback() {
            return [r(bA, {
                class: "bg-amber-300 rounded-full w-4 h-4 mr-1",
                get token() {
                    return A.currentToken
                }
            }), (h = la(), a(h, () => {
                var b;
                return `${new z(A.betLog.betAmount||0).toNumber()} ${(b=A.currentToken)==null?void 0:b.name}`
            }), h)];
            var h
        },
        get children() {
            var h = ia();
            return a(h, () => n(new z(A.betLog.betAmount || 0), A.betLog.currencyName)), h
        }
    })), a(l, () => u("Payout")), a(c, () => A.betLog.oddsString, m), i;
    var i, s, o, t, l, c, m
};
var da = g('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="M21.738 4a4.84 4.84 0 0 1 4.838 4.838v10.378a3.663 3.663 0 0 1-3.663 3.662l-1.347-.001v1.461A3.66 3.66 0 0 1 17.905 28H8.662A3.66 3.66 0 0 1 5 24.338V12.784a3.66 3.66 0 0 1 3.662-3.662h1.346v-1.46a3.66 3.66 0 0 1 3.485-3.658L13.67 4zm0 2.16h-8.067c-.828 0-1.502.675-1.502 1.503v1.46h5.919a3.48 3.48 0 0 1 3.478 3.48v8.115h1.347c.787 0 1.435-.609 1.498-1.38l.005-.123V8.838a2.68 2.68 0 0 0-2.677-2.677z"></path> ');
const ga = A => {
    return e = da(), gA(e, A, !0, !0), e;
    var e
};
var ca = g('<svg width=14 height=17 viewBox="0 0 14 17"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13.9655 4.61839C13.9464 4.19746 13.9464 3.79567 13.9464 3.39387C13.9464 3.06861 13.6976 2.81988 13.3724 2.81988C10.9807 2.81988 9.16311 2.13109 7.6516 0.657848C7.422 0.447384 7.0776 0.447384 6.84801 0.657848C5.3365 2.13109 3.51886 2.81988 1.12723 2.81988C0.80197 2.81988 0.553241 3.06861 0.553241 3.39387C0.553241 3.79567 0.55324 4.19746 0.534107 4.61839C0.457575 8.63632 0.342777 14.1466 7.05847 16.4617L7.2498 16.5L7.44113 16.4617C14.1377 14.1466 14.042 8.65546 13.9655 4.61839ZM6.79061 10.1861C6.67581 10.2818 6.54188 10.3392 6.38882 10.3392H6.36968C6.21662 10.3392 6.06355 10.2626 5.96789 10.1478L4.18852 8.17713L5.0495 7.41181L6.44621 8.96158L9.54577 6.0151L10.3302 6.85695L6.79061 10.1861Z"fill=#24EE89>');
const ua = A => ca();
var ma = g('<div class="flex px-5"><img class="rounded-full w-11 h-11"><div class="flex flex-col ml-3 justify-around text-sm sm:text-xs"><div><span class=text-secondary></span><span class="text-secondary ml-1">On </span></div><div class="flex items-center"><span class=text-secondary></span><div class="flex items-center ml-1 text-primary"><span class=mr-1>');
const ha = A => (() => {
    var e = ma(),
        n = e.firstChild,
        i = n.nextSibling.firstChild,
        s = i.firstChild,
        o = s.nextSibling;
    o.firstChild;
    var t = i.nextSibling.firstChild,
        l = t.nextSibling,
        c = l.firstChild;
    return n.$$click = () => {
        var m;
        return (m = A.onUserClick) == null ? void 0 : m.call(A, A.userId)
    }, s.$$click = () => {
        var m;
        return (m = A.onUserClick) == null ? void 0 : m.call(A, A.userId)
    }, a(s, () => HA.userName(A.nickName)), a(o, () => new Date(A.betTime || 0).toLocaleString(), null), a(t, () => u("Bet ID:")), a(c, r(ua, {})), a(l, () => A.distributeId, null), a(l, r(ga, {
        class: "ml-1 w-4 h-4 text-secondary",
        onClick: () => {
            pA(A.distributeId || ""), V(u("Copy Successful"))
        }
    }), null), H(() => T(n, "src", HA.avatar(A.userId || 0, "s"))), e
})();
eA(["click"]);
var fa = g('<div class="flex justify-between items-center py-3 px-4 mt-4 mb-4 rounded-xl bg-layer5 mx-3"><div class=flex><div class="flex flex-col justify-around my-1"><div class="text-primary font-extrabold text-sm"></div><div class="text-secondary text-sm sm:text-xs"></div></div></div><div class="flex items-center text-gray-400 text-secondary text-base sm:text-xs cursor-pointer"> ');
const ba = A => {
    return e = fa(), n = e.firstChild, i = n.firstChild, s = i.firstChild, o = s.nextSibling, t = n.nextSibling, l = t.firstChild, a(n, r(Se, {
        width: 36,
        class: "rounded w-10 h-14 mr-2",
        get src() {
            return A.iconThreeFour
        }
    }), i), a(s, () => A.fullName), a(o, () => u("BC Brand")), je(t, "click", A.onPlayNow, !0), a(t, () => u("Play Now"), l), a(t, r(Ce, {
        class: "-rotate-180 w-7 h-7"
    }), null), e;
    var e, n, i, s, o, t, l
};
eA(["click"]);
var Ba = g('<div class="flex flex-col justify-center items-center p-4 gap-4"><div class="text-center text-secondary"></div><div class="flex justify-center items-center gap-4 w-full">'),
    pa = g('<div><span class="text-primary text-sm font-extrabold">'),
    wa = g('<div id=common-game-detail class="rounded-xl mx-3 bg-black_alpha10">'),
    Me = g("<span>"),
    va = g('<div class=mx-3><div class="flex gap-2 mt-4 pb-4">'),
    Ca = g('<div class="mx-3 pb-4">'),
    xa = g("<div class=flex>"),
    ya = g('<div><div class=sm:mt-3><div class="flex items-center relative h-8 px-4"><div class="absolute rounded-full border-8 -rotate-45 border-t-transparent border-l-transparent -left-3 border-layer2"></div><div class="border-b border-dashed border-secondary h-0 w-full opacity-20"></div><div class="absolute rounded-full border-8 rotate-[135deg] border-t-transparent border-l-transparent -right-3 border-layer2">'),
    Qa = g('<div class="flex items-center justify-center size-full bg-layer2 sm:bg-layer4 rounded-t-xl">'),
    Ea = g("<a class=cl-primary>"),
    Sa = g('<div class="flex items-center"><div class="max-w-40 whitespace-nowrap overflow-hidden text-ellipsis">'),
    Ma = g("<div>"),
    Ia = g('<div class="mx-1 mt-4 pt-3 pb-1 pl-1 flex items-center gap-x-1"><p>'),
    Da = g('<div class="px-2 pb-2 rounded-xl"><div class="flex justify-between items-center py-3 px-4 mt-4 mb-4 rounded-xl bg-layer5 mx-1"><div class=flex-1><div class=mb-1></div></div><button class="ml-3 flex justify-center items-center h-8"><span>');
const ka = ["crash", "fastparity", "double", "keno-multiplayer", "blackjack", "baccarat-multiplayer", "roulette-multiplayer", "Patti", "patti", "sicbo-multiplayer", "fish-prawn-crab", "hotpot"],
    La = e => sA(void 0, [e], function*({
        queryKey: A
    }) {
        return yield AA().get(`/game/bet/v2/bet/${A[1]}`)
    });

function Ua(A) {
    var O;
    const e = nt(),
        {
            user: n
        } = tt(),
        {
            findToken: i
        } = vA(),
        [s, o] = F(!1),
        t = EA(() => ({
            queryKey: ["/game/bet/v2/bet", A.id || e.id],
            queryFn: La
        })),
        l = EA(() => {
            var d, M;
            return {
                queryKey: ["/game/home/detail/", (d = t.data) == null ? void 0 : d.gameUnique],
                throwOnError: !1,
                queryFn: ({
                    queryKey: G
                }) => _e(G[1]),
                enabled: !!((M = t.data) != null && M.gameUnique)
            }
        }),
        c = q(() => {
            var d;
            return i(((d = t.data) == null ? void 0 : d.betLog.currencyName) || "")
        }),
        [m] = We(() => {
            var d;
            return (d = t.data) == null ? void 0 : d.gameUnique.replace(/\d+/g, "")
        }, d => sA(this, null, function*() {
            let M;
            if (["Twist", "Patti"].includes(d)) {
                const G = d.toLowerCase();
                return M = yield xA[G](), M.default
            }
            return M = At.includes(d) || et.includes(d) ? yield xA[d](): yield xA.slots(), M.default
        })),
        h = q(() => {
            var d;
            return ka.includes(((d = l == null ? void 0 : l.data) == null ? void 0 : d.gameIdentity.gameUrl) || "")
        }),
        b = q(() => {
            var d;
            return ((d = l == null ? void 0 : l.data) == null ? void 0 : d.gameIdentity.gameUrl) === "blackjack"
        }),
        v = q(() => {
            var d;
            return ((d = l == null ? void 0 : l.data) == null ? void 0 : d.gameIdentity.gameUrl) === "roulette-multiplayer"
        }),
        f = q(() => {
            var d;
            return ((d = l == null ? void 0 : l.data) == null ? void 0 : d.gameIdentity.gameUrl) === "jade"
        });

    function k() {
        var d;
        X.emit("navigate", `/game/${((d=l==null?void 0:l.data)==null?void 0:d.gameIdentity.gameUrl)||""}`), L.pop()
    }
    const Q = Oe(() => r(tr, {
        get gameName() {
            var d;
            return (d = t.data) == null ? void 0 : d.gameName
        },
        onChangeSeed: () => {
            t.refetch(), L.pop()
        }
    }));

    function B() {
        lA.login ? L.push(Q, {
            close: !0,
            onClose: () => {
                t.refetch()
            }
        }) : X.emit("navigate", "/login/signin")
    }

    function S() {
        var w, U, tA, rA, aA;
        if (!t.data) return;
        let d = NA.find(N => {
            var R, nA;
            return N.key === ((R = t.data) == null ? void 0 : R.gameUnique) || N.name === ((nA = t.data) == null ? void 0 : nA.gameUnique)
        });
        (w = t.data) != null && w.gameUnique.includes("Twist") && (d = NA.find(N => {
            var R;
            return N.id === ((R = t.data) == null ? void 0 : R.gameUnique)
        }));
        const {
            clientSeed: M
        } = CA(iA({}, t.data.seedHistory), {
            clientSeed: LA()
        }), G = t.data && t.data.betLog.gameId ? t.data.betLog.gameId : "", I = t.data && t.data.betLog.gv.hash ? t.data.betLog.gv.hash : "", {
            serverSeed: j,
            clientSeed: E
        } = t.data.seedHistory, {
            nonce: p
        } = t.data.betLog;
        if ((/[^a-zA-Z0-9]/.test(M) || M.length > 32 || M.length < 10) && V(u("Seeds are mixed characters containing 10-32 digits, uppercase and lowercase letters.")), h() || !t.data.seedHistory || t.data.seedHistory.serverSeed) {
            const N = new z(100 - (((U = l.data) == null ? void 0 : U.slotsInfo.rtpDes) || 0));
            let R = b() ? `${d==null?void 0:d.validateLink}?c=${t.data.betLog.gv.clientSeed}&s=${t.data.betLog.gv.serverSeed}` : h() ? `${d==null?void 0:d.validateLink}?hash=${I}&v=${G}&he=${N}` : `${d==null?void 0:d.validateLink}?s=${j}&c=${E}&n=${p}&he=${N}&m=${((rA=(tA=t.data.betLog)==null?void 0:tA.bv)==null?void 0:rA.mode)||0}`;
            v() && (R = `${d==null?void 0:d.validateLink}?hash=${I}`), f() && (R += `&count=${((aA=t.data.betLog)==null?void 0:aA.bv.count)||1}`), window.open(R)
        } else L.push(() => r(mA, {
            get title() {
                return u("Change new seed")
            },
            get children() {
                var N = Ba(),
                    R = N.firstChild,
                    nA = R.nextSibling;
                return a(R, () => u("You need to set up a new seed before validating the data (the server seed is encrypted)")), a(nA, r(W, {
                    type: "second",
                    class: "flex-1",
                    onClick: () => {
                        L.pop()
                    },
                    get children() {
                        return u("Cancel")
                    }
                }), null), a(nA, r(W, {
                    class: "flex-1",
                    type: "brand",
                    onClick: () => {
                        L.pop(), B()
                    },
                    get children() {
                        return u("Confirm")
                    }
                }), null), N
            }
        }), {
            close: !0
        })
    }
    const x = d => {
            d && X.emit("navigate", `/user/profile/${d}`)
        },
        C = !!A.id,
        D = ((O = t.data) == null ? void 0 : O.userId) === lA.userId;
    return r(d => C ? r(mA, {
        get class() {
            return d.class
        },
        get title() {
            return d.title
        },
        get children() {
            return d.children
        }
    }) : r(qe, {
        get class() {
            return d.class
        },
        get title() {
            return u("Bet Slip")
        },
        get children() {
            return d.children
        }
    }), {
        get title() {
            return d = Qa(), a(d, () => u("Bet Slip")), d;
            var d
        },
        get class() {
            return _("betslip !bg-layer2 dark:!bg-layer2 min-h-[30rem]", {
                "betslip-pop": C
            })
        },
        get id() {
            return A.id
        },
        get children() {
            var d = ya(),
                M = d.firstChild,
                G = M.firstChild;
            return `url(${ee})` != null ? d.style.setProperty("background-image", `url(${ee})`) : d.style.removeProperty("background-image"), d.style.setProperty("background-repeat", "no-repeat"), d.style.setProperty("background-position", "top center"), d.style.setProperty("background-size", "contain"), d.style.setProperty("border-top-left-radius", "12px"), d.style.setProperty("border-top-right-radius", "12px"), a(d, r(y, {
                get when() {
                    return t.data
                },
                get children() {
                    return r(Aa, {
                        class: "!size-6 right-3 sm:top-3",
                        get single() {
                            return !h()
                        },
                        get gameUnique() {
                            return t.data.gameUnique
                        },
                        get betLog() {
                            return t.data.betLog
                        }
                    })
                }
            }), M), a(M, r(y, {
                get when() {
                    return t.data
                },
                get children() {
                    return [r(na, {
                        get betLog() {
                            return t.data.betLog
                        },
                        get currentToken() {
                            return c()
                        }
                    }), r(oa, {
                        get betLog() {
                            return t.data.betLog
                        },
                        get currentToken() {
                            return c()
                        }
                    })]
                }
            }), G), a(M, r(y, {
                get when() {
                    return t.data
                },
                get children() {
                    return r(ha, {
                        get userId() {
                            return t.data.userId
                        },
                        get nickName() {
                            return t.data.nickName
                        },
                        get betTime() {
                            return t.data.betLog.betTime
                        },
                        get distributeId() {
                            return t.data.betLog.distributeId
                        },
                        onUserClick: x
                    })
                }
            }), null), a(M, r(y, {
                get when() {
                    var I;
                    return ((I = t.data) == null ? void 0 : I.gameType) !== 3
                },
                get children() {
                    return [r(y, {
                        get when() {
                            return l.data
                        },
                        get children() {
                            return r(ba, {
                                get iconThreeFour() {
                                    return l.data.iconThreeFour
                                },
                                get fullName() {
                                    return l.data.fullName
                                },
                                onPlayNow: k
                            })
                        }
                    }), (I = pa(), j = I.firstChild, I.$$click = () => {
                        o(!s())
                    }, a(j, () => u("Game Detail")), a(I, r(Ce, {
                        class: "-rotate-180 w-7 h-7 text-primary transition-all",
                        get style() {
                            return {
                                transform: `rotate(${s()?"270deg":"180deg"})`
                            }
                        }
                    }), null), H(() => P(I, SA("flex items-center justify-between px-3 py-1 text-sm mt-2", !s() && "pb-4"))), I), r(Ke, {
                        get when() {
                            return s()
                        },
                        get children() {
                            return [r(y, {
                                get when() {
                                    var E;
                                    return (E = m()) == null ? void 0 : E.Detail
                                },
                                get children() {
                                    var E = wa();
                                    return a(E, r(Xe, {
                                        get component() {
                                            var p;
                                            return (p = m()) == null ? void 0 : p.Detail
                                        },
                                        get betLog() {
                                            var p;
                                            return (p = t.data) == null ? void 0 : p.betLog
                                        },
                                        get isFloatingWindow() {
                                            return A.isFloatingWindow
                                        }
                                    })), E
                                }
                            }), r(y, {
                                get when() {
                                    var E;
                                    return !h() && ((E = t.data) == null ? void 0 : E.gameType) === 1 && t.data
                                },
                                get children() {
                                    var E = va(),
                                        p = E.firstChild;
                                    return a(E, r(J, {
                                        class: "mt-4",
                                        get children() {
                                            return [r(Y, {
                                                get children() {
                                                    return u("Server Seed")
                                                }
                                            }), r(K, {
                                                size: "lg",
                                                class: "mt-2 text-base sm:text-sm font-semibold",
                                                get value() {
                                                    var w, U;
                                                    return (U = (w = t.data) == null ? void 0 : w.seedHistory) == null ? void 0 : U.serverSeed
                                                },
                                                disabled: !0,
                                                get placeholder() {
                                                    return u("The Seed hasn't been revealed yet.")
                                                }
                                            })]
                                        }
                                    }), p), a(E, r(J, {
                                        class: "mt-4",
                                        get children() {
                                            return [r(Y, {
                                                class: "flex justify-between",
                                                get children() {
                                                    return [(w = Me(), a(w, () => u("Server Seed (hash)")), w), hA(() => {
                                                        return hA(() => {
                                                            var tA, rA, aA;
                                                            return !(n.userId !== ((tA = t.data) == null ? void 0 : tA.betLog.userId) || (aA = (rA = t.data) == null ? void 0 : rA.seedHistory) != null && aA.serverSeed)
                                                        })() && ((U = Ea()).$$click = B, a(U, () => u("Seed Settings")), U);
                                                        var U
                                                    })];
                                                    var w
                                                }
                                            }), r(K, {
                                                size: "lg",
                                                class: "mt-2 text-base sm:text-sm font-semibold",
                                                get value() {
                                                    var w, U;
                                                    return (U = (w = t.data) == null ? void 0 : w.seedHistory) == null ? void 0 : U.serverSeedHash
                                                },
                                                disabled: !0
                                            })]
                                        }
                                    }), p), a(p, r(J, {
                                        class: "flex-1 text-base",
                                        get children() {
                                            return [r(Y, {
                                                get children() {
                                                    return u("Client Seed")
                                                }
                                            }), r(K, {
                                                size: "lg",
                                                class: "mt-2 text-base sm:text-sm",
                                                get value() {
                                                    var w, U;
                                                    return (U = (w = t.data) == null ? void 0 : w.seedHistory) == null ? void 0 : U.clientSeed
                                                },
                                                disabled: !0
                                            })]
                                        }
                                    }), null), a(p, r(J, {
                                        class: "flex-1 text-base",
                                        get children() {
                                            return [r(Y, {
                                                get children() {
                                                    return u("nonce")
                                                }
                                            }), r(Pe, {
                                                size: "lg",
                                                class: "mt-2 text-base sm:text-sm",
                                                get value() {
                                                    var w;
                                                    return (w = t.data) == null ? void 0 : w.betLog.nonce
                                                },
                                                disabled: !0
                                            })]
                                        }
                                    }), null), E
                                }
                            }), r(y, {
                                get when() {
                                    return h()
                                },
                                get children() {
                                    var E = Ca();
                                    return a(E, r(J, {
                                        disabled: !0,
                                        class: "mt-4",
                                        get children() {
                                            return [r(Y, {
                                                get children() {
                                                    return u("Game ID")
                                                }
                                            }), r(K, {
                                                size: "lg",
                                                class: "mt-2",
                                                get value() {
                                                    var p;
                                                    return ((p = t.data) == null ? void 0 : p.betLog.gameId) || ""
                                                },
                                                disabled: !0
                                            })]
                                        }
                                    }), null), a(E, r(y, {
                                        get when() {
                                            var p, w;
                                            return (w = (p = t.data) == null ? void 0 : p.betLog.gv) == null ? void 0 : w.hash
                                        },
                                        get children() {
                                            return r(J, {
                                                disabled: !0,
                                                class: "mt-4",
                                                get children() {
                                                    return [r(Y, {
                                                        get children() {
                                                            return u("Game Hash")
                                                        }
                                                    }), r(K, {
                                                        size: "lg",
                                                        class: "mt-2",
                                                        get value() {
                                                            var p, w;
                                                            return ((w = (p = t.data) == null ? void 0 : p.betLog.gv) == null ? void 0 : w.hash) || ""
                                                        },
                                                        disabled: !0
                                                    })]
                                                }
                                            })
                                        }
                                    }), null), a(E, r(y, {
                                        get when() {
                                            var p, w;
                                            return (w = (p = t.data) == null ? void 0 : p.betLog.gv) == null ? void 0 : w.clientSeed
                                        },
                                        get children() {
                                            return r(J, {
                                                disabled: !0,
                                                class: "mt-4",
                                                get children() {
                                                    return [r(Y, {
                                                        get children() {
                                                            return u("Client Seed")
                                                        }
                                                    }), r(K, {
                                                        size: "lg",
                                                        class: "mt-2",
                                                        get value() {
                                                            var p, w;
                                                            return ((w = (p = t.data) == null ? void 0 : p.betLog.gv) == null ? void 0 : w.clientSeed) || ""
                                                        },
                                                        disabled: !0
                                                    })]
                                                }
                                            })
                                        }
                                    }), null), a(E, r(y, {
                                        get when() {
                                            var p, w;
                                            return (w = (p = t.data) == null ? void 0 : p.betLog.gv) == null ? void 0 : w.serverSeed
                                        },
                                        get children() {
                                            return r(J, {
                                                disabled: !0,
                                                class: "mt-4",
                                                get children() {
                                                    return [r(Y, {
                                                        get children() {
                                                            return u("Server Seed")
                                                        }
                                                    }), r(K, {
                                                        size: "lg",
                                                        class: "mt-2",
                                                        get value() {
                                                            var p, w;
                                                            return ((w = (p = t.data) == null ? void 0 : p.betLog.gv) == null ? void 0 : w.serverSeed) || ""
                                                        },
                                                        disabled: !0
                                                    })]
                                                }
                                            })
                                        }
                                    }), null), E
                                }
                            }), r(y, {
                                get when() {
                                    var E;
                                    return ((E = t.data) == null ? void 0 : E.userId) === lA.userId
                                },
                                get children() {
                                    var E = xa();
                                    return a(E, r(W, {
                                        type: "brand",
                                        class: "mx-3 mb-2.5 w-full",
                                        onClick: S,
                                        get children() {
                                            return u("Verify")
                                        }
                                    })), E
                                }
                            })]
                        }
                    })];
                    var I, j
                }
            }), null), a(M, r(y, {
                get when() {
                    var I;
                    return ((I = t.data) == null ? void 0 : I.gameType) === 3 && (l == null ? void 0 : l.data)
                },
                get children() {
                    return r(Va, {
                        get gameId() {
                            return t.data && t.data.betLog.gameId ? t.data.betLog.gameId : ""
                        },
                        showIssus: D,
                        get data() {
                            return l.data
                        }
                    })
                }
            }), null), H(() => P(d, _("text-xs rounded-xl relative bg-layer4 sm:mt-4", {
                "my-4": !C
            }))), d
        }
    })
}
const Va = A => {
        const e = () => {
                X.emit("live_support")
            },
            n = () => {
                if (A.showIssus) try {
                    pA(String(A.gameId)), V(u("Copied"))
                } catch (h) {
                    V(h)
                }
            };

        function i() {
            A.data && X.emit("navigate", `/game/${A.data.gameIdentity.gameUrl}`)
        }
        return s = Da(), o = s.firstChild, t = o.firstChild, l = t.firstChild, c = t.nextSibling, m = c.firstChild, a(o, r(y, {
            get when() {
                return A.data.thumbnail
            },
            get children() {
                return r(Se, {
                    width: 48,
                    class: "size-12 rounded mr-4",
                    alt: "game-logo",
                    get src() {
                        return A.data.thumbnail
                    }
                })
            }
        }), t), a(l, () => A.data.fullName), a(t, r(y, {
            get when() {
                return A.showIssus
            },
            get children() {
                var h = Sa(),
                    b = h.firstChild;
                return a(b, () => `${u("Game ID")}: ${A.gameId}`), a(h, r(FA, {
                    onClick: n,
                    name: "Copy",
                    class: "w-4 h-4 cursor-pointer"
                }), null), h
            }
        }), null), a(t, r(y, {
            get when() {
                return !A.showIssus
            },
            get children() {
                var h = Ma();
                return a(h, () => A.data.providerName || "Unknown"), h
            }
        }), null), c.$$click = i, a(m, () => u("Play Now")), a(c, r(FA, {
            name: "Arrow",
            class: "size-4 transform -scale-x-100"
        }), null), a(s, r(y, {
            get when() {
                return A.showIssus
            },
            get children() {
                var h = Ia(),
                    b = h.firstChild;
                return a(b, () => u("Any issues, please contact the customer service for help and provide the game ID.")), a(h, r(W, {
                    type: "second",
                    class: "flex items-center bg-layer3 whitespace-nowrap",
                    onClick: e,
                    get children() {
                        var v = Me();
                        return a(v, () => u("Live Support")), v
                    }
                }), null), h
            }
        }), null), s;
        var s, o, t, l, c, m
    },
    Ie = A => r(Je, {
        client: Ye,
        get children() {
            return r(Ua, A)
        }
    });
eA(["click"]);
const Xa = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ie
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    Ie as G, Se as I, Kt as N, Jt as S, zt as a, Ce as b, wt as c, Rt as d, tr as e, zA as f, Xa as i, Gt as t, rr as u
};