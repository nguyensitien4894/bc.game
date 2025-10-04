var Mo = Object.defineProperty,
    Uo = Object.defineProperties;
var Fo = Object.getOwnPropertyDescriptors;
var Yt = Object.getOwnPropertySymbols;
var he = Object.prototype.hasOwnProperty,
    ve = Object.prototype.propertyIsEnumerable;
var ye = (e, t, n) => t in e ? Mo(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    N = (e, t) => {
        for (var n in t || (t = {})) he.call(t, n) && ye(e, n, t[n]);
        if (Yt)
            for (var n of Yt(t)) ve.call(t, n) && ye(e, n, t[n]);
        return e
    },
    T = (e, t) => Uo(e, Fo(t));
var Sn = (e, t) => {
    var n = {};
    for (var r in e) he.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Yt)
        for (var r of Yt(e)) t.indexOf(r) < 0 && ve.call(e, r) && (n[r] = e[r]);
    return n
};
var E = (e, t, n) => new Promise((r, o) => {
    var i = u => {
            try {
                s(n.next(u))
            } catch (l) {
                o(l)
            }
        },
        a = u => {
            try {
                s(n.throw(u))
            } catch (l) {
                o(l)
            }
        },
        s = u => u.done ? r(u.value) : Promise.resolve(u.value).then(i, a);
    s((n = n.apply(e, t)).next())
});
import {
    a4 as qo,
    A as br,
    n as P,
    G as Go,
    v as An,
    C as Ro,
    F as gr,
    k as Q,
    b as Qn,
    e as bt,
    aq as $,
    ar as yr,
    f as V,
    as as C,
    D as ct,
    O as zt,
    c as M,
    m as ot,
    o as R,
    a5 as ht,
    a6 as z,
    at as Xn,
    a9 as vt,
    au as mn,
    av as hr,
    aw as vr,
    a7 as Z,
    ax as Dt,
    ak as zo,
    H as wr,
    a8 as Ir,
    j as Or,
    S as Ko,
    P as Jo,
    q as st
} from "./manifest-794ca152.js";
import {
    i as Sr,
    b as Ft,
    d as X,
    e as Ar,
    f as Wo,
    g as Ho,
    t as Zn,
    h as Yo,
    j as jr,
    k as $t,
    l as jn,
    u as Qo,
    B as Xo,
    c as Zo
} from "./SA27V5YJ-a6e76733.js";
import {
    b as Kt,
    c as wt,
    i as fn,
    h as Nr,
    j as ti,
    k as te,
    l as ni,
    L as Dn,
    M as an,
    m as Pr,
    t as Lt,
    S as sn,
    n as ei,
    o as jt,
    p as ri
} from "./amount-63fd0790.js";
import {
    u as oi
} from "./user-dca4827e.js";
import {
    c as ii
} from "./utils-65805dbc.js";
import {
    _ as ai,
    m as pn,
    P as It,
    g as we,
    e as si,
    f as kr,
    s as ui,
    h as rt,
    i as Ie,
    j as ci,
    D as li,
    b as xr,
    d as Oe,
    k as di
} from "./index-a8d0e4cd.js";
import {
    G as mi,
    S as Nn
} from "./config-b7b855c3.js";
import {
    t as Pn
} from "./i18n-3675d599.js";
import {
    b as fi
} from "./router-acbf143e.js";
var pi = br('<svg width=48 height=48 viewBox="0 0 48 48"fill=none xmlns=http://www.w3.org/2000/svg> <path d="M35.6049 37.3046C34.5491 37.3046 33.6946 36.4476 33.6946 35.3893C33.6946 34.331 34.5504 33.4728 35.6049 33.4728C36.6608 33.4728 37.5153 34.331 37.5153 35.3893C37.5153 36.4476 36.6595 37.3046 35.6049 37.3046ZM39.5429 31.5377C37.1362 29.3594 32.5906 25.1917 29.4788 22.333C30.9161 18.2098 29.9925 13.4419 26.704 10.1461C23.6415 7.07617 19.3046 6.06605 15.4 7.10705L15.1765 7.72201L21.4076 13.968L19.869 19.7237L14.1268 21.2661L7.787 14.9102L7.18685 15.13C6.01867 19.1174 7.00039 23.6049 10.1394 26.7501C13.418 30.0361 18.155 30.9672 22.2609 29.5422C25.032 32.5689 29.0712 36.9823 31.4792 39.62C33.5267 41.8613 37.2547 41.8934 39.706 39.3915C42.0683 36.9798 41.5953 33.3913 39.5442 31.5365L39.5429 31.5377Z"fill=#B1B9B9></path> ');
const bi = e => {
    return t = pi(), qo(t, e, !0, !0), t;
    var t
};
var gi = br('<div class="flex flex-col"><div class="flex-1 p-4"><div class="text-center text-secondary text-sm"></div></div><div class="flex gap-3 p-4 border-layer3">');

function yi() {
    return P(Go, {
        get title() {
            return Pn("Under Maintenance")
        },
        get children() {
            var e = gi(),
                t = e.firstChild,
                n = t.firstChild,
                r = t.nextSibling;
            return An(t, P(bi, {
                class: "w-10 h-10 text-warning mx-auto mb-4"
            }), n), An(n, () => Pn("This game is currently unavailable. Please try other games.")), An(r, P(Ro, {
                type: "brand",
                class: "flex-1",
                onClick: () => gr.pop(),
                get children() {
                    return Pn("OK")
                }
            })), e
        }
    })
}

function bn(e) {
    return e
}
const En = Kt(wt, "WeakMap");
var Se = Object.create;
const hi = function() {
    function e() {}
    return function(t) {
        if (!fn(t)) return {};
        if (Se) return Se(t);
        e.prototype = t;
        var n = new e;
        return e.prototype = void 0, n
    }
}();

function vi() {}

function wi(e, t) {
    var n = -1,
        r = e.length;
    for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
    return t
}
const Ae = function() {
    try {
        var e = Kt(Object, "defineProperty");
        return e({}, "", {}), e
    } catch (t) {}
}();

function Ii(e) {
    return e != e
}

function Oi(e, t) {
    return !!(e != null && e.length) && function(n, r, o) {
        return r == r ? function(i, a, s) {
            for (var u = s - 1, l = i.length; ++u < l;)
                if (i[u] === a) return u;
            return -1
        }(n, r, o) : function(i, a, s, u) {
            for (var l = i.length, c = s + (u ? 1 : -1); u ? c-- : ++c < l;)
                if (a(i[c], c, i)) return c;
            return -1
        }(n, Ii, o)
    }(e, t, 0) > -1
}

function Tr(e, t, n) {
    t == "__proto__" && Ae ? Ae(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
var Si = Object.prototype.hasOwnProperty;

function Br(e, t, n) {
    var r = e[t];
    Si.call(e, t) && Nr(r, n) && (n !== void 0 || t in e) || Tr(e, t, n)
}

function Qt(e, t, n, r) {
    var o = !n;
    n || (n = {});
    for (var i = -1, a = t.length; ++i < a;) {
        var s = t[i],
            u = r ? r(n[s], e[s], s, n, e) : void 0;
        u === void 0 && (u = e[s]), o ? Tr(n, s, u) : Br(n, s, u)
    }
    return n
}

function Jt(e) {
    return e != null && Sr(e.length) && !ti(e)
}
var Ai = Object.prototype;

function gn(e) {
    var t = e && e.constructor;
    return e === (typeof t == "function" && t.prototype || Ai)
}
var _r = typeof exports == "object" && exports && !exports.nodeType && exports,
    je = _r && typeof module == "object" && module && !module.nodeType && module,
    Ne = je && je.exports === _r ? wt.Buffer : void 0;
const qt = (Ne ? Ne.isBuffer : void 0) || function() {
    return !1
};
var _ = {};

function yn(e) {
    return function(t) {
        return e(t)
    }
}
_["[object Float32Array]"] = _["[object Float64Array]"] = _["[object Int8Array]"] = _["[object Int16Array]"] = _["[object Int32Array]"] = _["[object Uint8Array]"] = _["[object Uint8ClampedArray]"] = _["[object Uint16Array]"] = _["[object Uint32Array]"] = !0, _["[object Arguments]"] = _["[object Array]"] = _["[object ArrayBuffer]"] = _["[object Boolean]"] = _["[object DataView]"] = _["[object Date]"] = _["[object Error]"] = _["[object Function]"] = _["[object Map]"] = _["[object Number]"] = _["[object Object]"] = _["[object RegExp]"] = _["[object Set]"] = _["[object String]"] = _["[object WeakMap]"] = !1;
var Lr = typeof exports == "object" && exports && !exports.nodeType && exports,
    Mt = Lr && typeof module == "object" && module && !module.nodeType && module,
    kn = Mt && Mt.exports === Lr && ni.process;
const kt = function() {
    try {
        var e = Mt && Mt.require && Mt.require("util").types;
        return e || kn && kn.binding && kn.binding("util")
    } catch (t) {}
}();
var Pe = kt && kt.isTypedArray;
const ne = Pe ? yn(Pe) : function(e) {
    return Ft(e) && Sr(e.length) && !!_[te(e)]
};
var ji = Object.prototype.hasOwnProperty;

function Cr(e, t) {
    var n = X(e),
        r = !n && Ar(e),
        o = !n && !r && qt(e),
        i = !n && !r && !o && ne(e),
        a = n || r || o || i,
        s = a ? function(c, f) {
            for (var b = -1, v = Array(c); ++b < c;) v[b] = f(b);
            return v
        }(e.length, String) : [],
        u = s.length;
    for (var l in e) !t && !ji.call(e, l) || a && (l == "length" || o && (l == "offset" || l == "parent") || i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Wo(l, u)) || s.push(l);
    return s
}

function Vr(e, t) {
    return function(n) {
        return e(t(n))
    }
}
const Ni = Vr(Object.keys, Object);
var Pi = Object.prototype.hasOwnProperty;

function Dr(e) {
    if (!gn(e)) return Ni(e);
    var t = [];
    for (var n in Object(e)) Pi.call(e, n) && n != "constructor" && t.push(n);
    return t
}

function Gt(e) {
    return Jt(e) ? Cr(e) : Dr(e)
}
var ki = Object.prototype.hasOwnProperty;

function xi(e) {
    if (!fn(e)) return function(o) {
        var i = [];
        if (o != null)
            for (var a in Object(o)) i.push(a);
        return i
    }(e);
    var t = gn(e),
        n = [];
    for (var r in e)(r != "constructor" || !t && ki.call(e, r)) && n.push(r);
    return n
}

function $n(e) {
    return Jt(e) ? Cr(e, !0) : xi(e)
}

function ee(e, t) {
    for (var n = 0, r = (t = Ho(t, e)).length; e != null && n < r;) e = e[Zn(t[n++])];
    return n && n == r ? e : void 0
}

function Er(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
    return e
}
const $r = Vr(Object.getPrototypeOf, Object);

function Y(e) {
    var t = this.__data__ = new Dn(e);
    this.size = t.size
}
Y.prototype.clear = function() {
    this.__data__ = new Dn, this.size = 0
}, Y.prototype.delete = function(e) {
    var t = this.__data__,
        n = t.delete(e);
    return this.size = t.size, n
}, Y.prototype.get = function(e) {
    return this.__data__.get(e)
}, Y.prototype.has = function(e) {
    return this.__data__.has(e)
}, Y.prototype.set = function(e, t) {
    var n = this.__data__;
    if (n instanceof Dn) {
        var r = n.__data__;
        if (!an || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new Pr(r)
    }
    return n.set(e, t), this.size = n.size, this
};
var Mr = typeof exports == "object" && exports && !exports.nodeType && exports,
    ke = Mr && typeof module == "object" && module && !module.nodeType && module,
    xe = ke && ke.exports === Mr ? wt.Buffer : void 0,
    Te = xe ? xe.allocUnsafe : void 0;

function Ti(e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = Te ? Te(n) : new e.constructor(n);
    return e.copy(r), r
}

function Ur() {
    return []
}
var Bi = Object.prototype.propertyIsEnumerable,
    Be = Object.getOwnPropertySymbols;
const re = Be ? function(e) {
        return e == null ? [] : (e = Object(e), function(t, n) {
            for (var r = -1, o = t == null ? 0 : t.length, i = 0, a = []; ++r < o;) {
                var s = t[r];
                n(s, r, t) && (a[i++] = s)
            }
            return a
        }(Be(e), function(t) {
            return Bi.call(e, t)
        }))
    } : Ur,
    Fr = Object.getOwnPropertySymbols ? function(e) {
        for (var t = []; e;) Er(t, re(e)), e = $r(e);
        return t
    } : Ur;

function qr(e, t, n) {
    var r = t(e);
    return X(e) ? r : Er(r, n(e))
}

function Mn(e) {
    return qr(e, Gt, re)
}

function _i(e) {
    return qr(e, $n, Fr)
}
const Un = Kt(wt, "DataView"),
    Fn = Kt(wt, "Promise"),
    Nt = Kt(wt, "Set");
var _e = "[object Map]",
    Le = "[object Promise]",
    Ce = "[object Set]",
    Ve = "[object WeakMap]",
    De = "[object DataView]",
    Li = Lt(Un),
    Ci = Lt(an),
    Vi = Lt(Fn),
    Di = Lt(Nt),
    Ei = Lt(En),
    pt = te;
(Un && pt(new Un(new ArrayBuffer(1))) != De || an && pt(new an) != _e || Fn && pt(Fn.resolve()) != Le || Nt && pt(new Nt) != Ce || En && pt(new En) != Ve) && (pt = function(e) {
    var t = te(e),
        n = t == "[object Object]" ? e.constructor : void 0,
        r = n ? Lt(n) : "";
    if (r) switch (r) {
        case Li:
            return De;
        case Ci:
            return _e;
        case Vi:
            return Le;
        case Di:
            return Ce;
        case Ei:
            return Ve
    }
    return t
});
const xt = pt;
var $i = Object.prototype.hasOwnProperty;
const un = wt.Uint8Array;

function qn(e) {
    var t = new e.constructor(e.byteLength);
    return new un(t).set(new un(e)), t
}
var Mi = /\w*$/,
    Ee = sn ? sn.prototype : void 0,
    $e = Ee ? Ee.valueOf : void 0;

function Ui(e, t) {
    var n = t ? qn(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length)
}
var Fi = "[object Boolean]",
    qi = "[object Date]",
    Gi = "[object Map]",
    Ri = "[object Number]",
    zi = "[object RegExp]",
    Ki = "[object Set]",
    Ji = "[object String]",
    Wi = "[object Symbol]",
    Hi = "[object ArrayBuffer]",
    Yi = "[object DataView]",
    Qi = "[object Float32Array]",
    Xi = "[object Float64Array]",
    Zi = "[object Int8Array]",
    ta = "[object Int16Array]",
    na = "[object Int32Array]",
    ea = "[object Uint8Array]",
    ra = "[object Uint8ClampedArray]",
    oa = "[object Uint16Array]",
    ia = "[object Uint32Array]";

function aa(e, t, n) {
    var r, o, i, a = e.constructor;
    switch (t) {
        case Hi:
            return qn(e);
        case Fi:
        case qi:
            return new a(+e);
        case Yi:
            return function(s, u) {
                var l = u ? qn(s.buffer) : s.buffer;
                return new s.constructor(l, s.byteOffset, s.byteLength)
            }(e, n);
        case Qi:
        case Xi:
        case Zi:
        case ta:
        case na:
        case ea:
        case ra:
        case oa:
        case ia:
            return Ui(e, n);
        case Gi:
            return new a;
        case Ri:
        case Ji:
            return new a(e);
        case zi:
            return (i = new(o = e).constructor(o.source, Mi.exec(o))).lastIndex = o.lastIndex, i;
        case Ki:
            return new a;
        case Wi:
            return r = e, $e ? Object($e.call(r)) : {}
    }
}

function sa(e) {
    return typeof e.constructor != "function" || gn(e) ? {} : hi($r(e))
}
var Me = kt && kt.isMap;
const ua = Me ? yn(Me) : function(e) {
    return Ft(e) && xt(e) == "[object Map]"
};
var Ue = kt && kt.isSet;
const ca = Ue ? yn(Ue) : function(e) {
    return Ft(e) && xt(e) == "[object Set]"
};
var la = 1,
    da = 2,
    ma = 4,
    Gr = "[object Arguments]",
    Rr = "[object Function]",
    fa = "[object GeneratorFunction]",
    zr = "[object Object]",
    B = {};

function nn(e, t, n, r, o, i) {
    var a, s = t & la,
        u = t & da,
        l = t & ma;
    if (n && (a = o ? n(e, r, o, i) : n(e)), a !== void 0) return a;
    if (!fn(e)) return e;
    var c = X(e);
    if (c) {
        if (a = function(g) {
                var y = g.length,
                    m = new g.constructor(y);
                return y && typeof g[0] == "string" && $i.call(g, "index") && (m.index = g.index, m.input = g.input), m
            }(e), !s) return wi(e, a)
    } else {
        var f = xt(e),
            b = f == Rr || f == fa;
        if (qt(e)) return Ti(e, s);
        if (f == zr || f == Gr || b && !o) {
            if (a = u || b ? {} : sa(e), !s) return u ? function(g, y) {
                return Qt(g, Fr(g), y)
            }(e, function(g, y) {
                return g && Qt(y, $n(y), g)
            }(a, e)) : function(g, y) {
                return Qt(g, re(g), y)
            }(e, function(g, y) {
                return g && Qt(y, Gt(y), g)
            }(a, e))
        } else {
            if (!B[f]) return o ? e : {};
            a = aa(e, f, s)
        }
    }
    i || (i = new Y);
    var v = i.get(e);
    if (v) return v;
    i.set(e, a), ca(e) ? e.forEach(function(g) {
        a.add(nn(g, t, n, g, e, i))
    }) : ua(e) && e.forEach(function(g, y) {
        a.set(y, nn(g, t, n, y, e, i))
    });
    var I = c ? void 0 : (l ? u ? _i : Mn : u ? $n : Gt)(e);
    return function(g, y) {
        for (var m = -1, p = g == null ? 0 : g.length; ++m < p && y(g[m], m, g) !== !1;);
    }(I || e, function(g, y) {
        I && (g = e[y = g]), Br(a, y, nn(g, t, n, y, e, i))
    }), a
}
B[Gr] = B["[object Array]"] = B["[object ArrayBuffer]"] = B["[object DataView]"] = B["[object Boolean]"] = B["[object Date]"] = B["[object Float32Array]"] = B["[object Float64Array]"] = B["[object Int8Array]"] = B["[object Int16Array]"] = B["[object Int32Array]"] = B["[object Map]"] = B["[object Number]"] = B[zr] = B["[object RegExp]"] = B["[object Set]"] = B["[object String]"] = B["[object Symbol]"] = B["[object Uint8Array]"] = B["[object Uint8ClampedArray]"] = B["[object Uint16Array]"] = B["[object Uint32Array]"] = !0, B["[object Error]"] = B[Rr] = B["[object WeakMap]"] = !1;
var pa = 1,
    ba = 4;

function oe(e) {
    return nn(e, pa | ba)
}

function Ut(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.__data__ = new Pr; ++t < n;) this.add(e[t])
}

function ga(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
        if (t(e[n], n, e)) return !0;
    return !1
}

function Kr(e, t) {
    return e.has(t)
}
Ut.prototype.add = Ut.prototype.push = function(e) {
    return this.__data__.set(e, "__lodash_hash_undefined__"), this
}, Ut.prototype.has = function(e) {
    return this.__data__.has(e)
};
var ya = 1,
    ha = 2;

function Fe(e, t, n, r, o, i) {
    var a = n & ya,
        s = e.length,
        u = t.length;
    if (s != u && !(a && u > s)) return !1;
    var l = i.get(e),
        c = i.get(t);
    if (l && c) return l == t && c == e;
    var f = -1,
        b = !0,
        v = n & ha ? new Ut : void 0;
    for (i.set(e, t), i.set(t, e); ++f < s;) {
        var I = e[f],
            g = t[f];
        if (r) var y = a ? r(g, I, f, t, e, i) : r(I, g, f, e, t, i);
        if (y !== void 0) {
            if (y) continue;
            b = !1;
            break
        }
        if (v) {
            if (!ga(t, function(m, p) {
                    if (!Kr(v, p) && (I === m || o(I, m, n, r, i))) return v.push(p)
                })) {
                b = !1;
                break
            }
        } else if (I !== g && !o(I, g, n, r, i)) {
            b = !1;
            break
        }
    }
    return i.delete(e), i.delete(t), b
}

function va(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach(function(r, o) {
        n[++t] = [o, r]
    }), n
}

function ie(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach(function(r) {
        n[++t] = r
    }), n
}
var wa = 1,
    Ia = 2,
    Oa = "[object Boolean]",
    Sa = "[object Date]",
    Aa = "[object Error]",
    ja = "[object Map]",
    Na = "[object Number]",
    Pa = "[object RegExp]",
    ka = "[object Set]",
    xa = "[object String]",
    Ta = "[object Symbol]",
    Ba = "[object ArrayBuffer]",
    _a = "[object DataView]",
    qe = sn ? sn.prototype : void 0,
    xn = qe ? qe.valueOf : void 0,
    La = 1,
    Ca = Object.prototype.hasOwnProperty,
    Va = 1,
    Ge = "[object Arguments]",
    Re = "[object Array]",
    Xt = "[object Object]",
    ze = Object.prototype.hasOwnProperty;

function Da(e, t, n, r, o, i) {
    var a = X(e),
        s = X(t),
        u = a ? Re : xt(e),
        l = s ? Re : xt(t),
        c = (u = u == Ge ? Xt : u) == Xt,
        f = (l = l == Ge ? Xt : l) == Xt,
        b = u == l;
    if (b && qt(e)) {
        if (!qt(t)) return !1;
        a = !0, c = !1
    }
    if (b && !c) return i || (i = new Y), a || ne(e) ? Fe(e, t, n, r, o, i) : function(m, p, w, S, j, A, x) {
        switch (w) {
            case _a:
                if (m.byteLength != p.byteLength || m.byteOffset != p.byteOffset) return !1;
                m = m.buffer, p = p.buffer;
            case Ba:
                return !(m.byteLength != p.byteLength || !A(new un(m), new un(p)));
            case Oa:
            case Sa:
            case Na:
                return Nr(+m, +p);
            case Aa:
                return m.name == p.name && m.message == p.message;
            case Pa:
            case xa:
                return m == p + "";
            case ja:
                var F = va;
            case ka:
                var mt = S & wa;
                if (F || (F = ie), m.size != p.size && !mt) return !1;
                var tt = x.get(m);
                if (tt) return tt == p;
                S |= Ia, x.set(m, p);
                var K = Fe(F(m), F(p), S, j, A, x);
                return x.delete(m), K;
            case Ta:
                if (xn) return xn.call(m) == xn.call(p)
        }
        return !1
    }(e, t, u, n, r, o, i);
    if (!(n & Va)) {
        var v = c && ze.call(e, "__wrapped__"),
            I = f && ze.call(t, "__wrapped__");
        if (v || I) {
            var g = v ? e.value() : e,
                y = I ? t.value() : t;
            return i || (i = new Y), o(g, y, n, r, i)
        }
    }
    return !!b && (i || (i = new Y), function(m, p, w, S, j, A) {
        var x = w & La,
            F = Mn(m),
            mt = F.length;
        if (mt != Mn(p).length && !x) return !1;
        for (var tt = mt; tt--;) {
            var K = F[tt];
            if (!(x ? K in p : Ca.call(p, K))) return !1
        }
        var Ht = A.get(m),
            h = A.get(p);
        if (Ht && h) return Ht == p && h == m;
        var L = !0;
        A.set(m, p), A.set(p, m);
        for (var J = x; ++tt < mt;) {
            var W = m[K = F[tt]],
                H = p[K];
            if (S) var nt = x ? S(H, W, K, p, m, A) : S(W, H, K, m, p, A);
            if (!(nt === void 0 ? W === H || j(W, H, w, S, A) : nt)) {
                L = !1;
                break
            }
            J || (J = K == "constructor")
        }
        if (L && !J) {
            var at = m.constructor,
                St = p.constructor;
            at == St || !("constructor" in m) || !("constructor" in p) || typeof at == "function" && at instanceof at && typeof St == "function" && St instanceof St || (L = !1)
        }
        return A.delete(m), A.delete(p), L
    }(e, t, n, r, o, i))
}

function ae(e, t, n, r, o) {
    return e === t || (e == null || t == null || !Ft(e) && !Ft(t) ? e != e && t != t : Da(e, t, n, r, ae, o))
}
var Ea = 1,
    $a = 2;

function Jr(e) {
    return e == e && !fn(e)
}

function Wr(e, t) {
    return function(n) {
        return n != null && n[e] === t && (t !== void 0 || e in Object(n))
    }
}

function Ma(e) {
    var t = function(n) {
        for (var r = Gt(n), o = r.length; o--;) {
            var i = r[o],
                a = n[i];
            r[o] = [i, a, Jr(a)]
        }
        return r
    }(e);
    return t.length == 1 && t[0][2] ? Wr(t[0][0], t[0][1]) : function(n) {
        return n === e || function(r, o, i, a) {
            var s = i.length,
                u = s,
                l = !a;
            if (r == null) return !u;
            for (r = Object(r); s--;) {
                var c = i[s];
                if (l && c[2] ? c[1] !== r[c[0]] : !(c[0] in r)) return !1
            }
            for (; ++s < u;) {
                var f = (c = i[s])[0],
                    b = r[f],
                    v = c[1];
                if (l && c[2]) {
                    if (b === void 0 && !(f in r)) return !1
                } else {
                    var I = new Y;
                    if (a) var g = a(b, v, f, r, o, I);
                    if (!(g === void 0 ? ae(v, b, Ea | $a, a, I) : g)) return !1
                }
            }
            return !0
        }(n, e, t)
    }
}

function Ua(e, t) {
    return e != null && t in Object(e)
}
var Fa, qa = 1,
    Ga = 2;

function Ra(e, t) {
    return jr(e) && Jr(t) ? Wr(Zn(e), t) : function(n) {
        var r = function(o, i, a) {
            var s = o == null ? void 0 : ee(o, i);
            return s === void 0 ? a : s
        }(n, e);
        return r === void 0 && r === t ? function(o, i) {
            return o != null && Yo(o, i, Ua)
        }(n, e) : ae(t, r, qa | Ga)
    }
}

function za(e) {
    return jr(e) ? (t = Zn(e), function(n) {
        return n == null ? void 0 : n[t]
    }) : function(n) {
        return function(r) {
            return ee(r, n)
        }
    }(e);
    var t
}

function Hr(e) {
    return typeof e == "function" ? e : e == null ? bn : typeof e == "object" ? X(e) ? Ra(e[0], e[1]) : Ma(e) : za(e)
}
const Ka = function(e, t, n) {
    for (var r = -1, o = Object(e), i = n(e), a = i.length; a--;) {
        var s = i[Fa ? a : ++r];
        if (t(o[s], s, o) === !1) break
    }
    return e
};
var Ja = function(e, t) {
    return function(n, r) {
        if (n == null) return n;
        if (!Jt(n)) return e(n, r);
        for (var o = n.length, i = t ? o : -1, a = Object(n);
            (t ? i-- : ++i < o) && r(a[i], i, a) !== !1;);
        return n
    }
}(function(e, t) {
    return e && Ka(e, t, Gt)
});
const Wa = Ja;

function Ha(e, t, n) {
    for (var r = -1, o = e == null ? 0 : e.length; ++r < o;)
        if (n(t, e[r])) return !0;
    return !1
}

function Ya(e, t) {
    var n = -1,
        r = Jt(e) ? Array(e.length) : [];
    return Wa(e, function(o, i, a) {
        r[++n] = t(o, i, a)
    }), r
}
var Qa = "[object Map]",
    Xa = "[object Set]",
    Za = Object.prototype.hasOwnProperty;

function Yr(e) {
    if (e == null) return !0;
    if (Jt(e) && (X(e) || typeof e == "string" || typeof e.splice == "function" || qt(e) || ne(e) || Ar(e))) return !e.length;
    var t = xt(e);
    if (t == Qa || t == Xa) return !e.size;
    if (gn(e)) return !Dr(e).length;
    for (var n in e)
        if (Za.call(e, n)) return !1;
    return !0
}

function ts(e, t) {
    if (e !== t) {
        var n = e !== void 0,
            r = e === null,
            o = e == e,
            i = $t(e),
            a = t !== void 0,
            s = t === null,
            u = t == t,
            l = $t(t);
        if (!s && !l && !i && e > t || i && a && u && !s && !l || r && a && u || !n && u || !o) return 1;
        if (!r && !i && !l && e < t || l && n && o && !r && !i || s && n && o || !a && o || !u) return -1
    }
    return 0
}

function ns(e, t, n) {
    t = t.length ? jn(t, function(o) {
        return X(o) ? function(i) {
            return ee(i, o.length === 1 ? o[0] : o)
        } : o
    }) : [bn];
    var r = -1;
    return t = jn(t, yn(Hr)),
        function(o, i) {
            var a = o.length;
            for (o.sort(i); a--;) o[a] = o[a].value;
            return o
        }(Ya(e, function(o, i, a) {
            return {
                criteria: jn(t, function(s) {
                    return s(o)
                }),
                index: ++r,
                value: o
            }
        }), function(o, i) {
            return function(a, s, u) {
                for (var l = -1, c = a.criteria, f = s.criteria, b = c.length, v = u.length; ++l < b;) {
                    var I = ts(c[l], f[l]);
                    if (I) return l >= v ? I : I * (u[l] == "desc" ? -1 : 1)
                }
                return a.index - s.index
            }(o, i, n)
        })
}

function es(e, t, n, r) {
    return e == null ? [] : (X(t) || (t = t == null ? [] : [t]), X(n = r ? void 0 : n) || (n = n == null ? [] : [n]), ns(e, t, n))
}
var rs = 4294967294,
    os = Math.floor,
    is = Math.min,
    as = 2147483647;

function ss(e, t, n) {
    var r = 0,
        o = e == null ? r : e.length;
    if (typeof t == "number" && t == t && o <= as) {
        for (; r < o;) {
            var i = r + o >>> 1,
                a = e[i];
            a !== null && !$t(a) && (n ? a <= t : a < t) ? r = i + 1 : o = i
        }
        return o
    }
    return function(s, u, l, c) {
        var f = 0,
            b = s == null ? 0 : s.length;
        if (b === 0) return 0;
        for (var v = (u = l(u)) != u, I = u === null, g = $t(u), y = u === void 0; f < b;) {
            var m = os((f + b) / 2),
                p = l(s[m]),
                w = p !== void 0,
                S = p === null,
                j = p == p,
                A = $t(p);
            if (v) var x = c || j;
            else x = y ? j && (c || w) : I ? j && w && (c || !S) : g ? j && w && !S && (c || !A) : !S && !A && (c ? p <= u : p < u);
            x ? f = m + 1 : b = m
        }
        return is(b, rs)
    }(e, t, bn, n)
}

function Ke(e, t) {
    return ss(e, t)
}

function Je(e) {
    return e && e.length ? function(t, n) {
        for (var r, o = -1, i = t.length; ++o < i;) {
            var a = n(t[o]);
            a !== void 0 && (r = r === void 0 ? a : r + a)
        }
        return r
    }(e, bn) : 0
}
const us = Nt && 1 / ie(new Nt([, -0]))[1] == 1 / 0 ? function(e) {
    return new Nt(e)
} : vi;
var cs = 200;

function lt(e, t) {
    return e && e.length ? function(n, r, o) {
        var i = -1,
            a = Oi,
            s = n.length,
            u = !0,
            l = [],
            c = l;
        if (o) u = !1, a = Ha;
        else if (s >= cs) {
            var f = r ? null : us(n);
            if (f) return ie(f);
            u = !1, a = Kr, c = new Ut
        } else c = r ? [] : l;
        t: for (; ++i < s;) {
            var b = n[i],
                v = r ? r(b) : b;
            if (b = o || b !== 0 ? b : 0, u && v == v) {
                for (var I = c.length; I--;)
                    if (c[I] === v) continue t;
                r && c.push(v), l.push(b)
            } else a(c, v, o) || (c !== l && c.push(v), l.push(b))
        }
        return l
    }(e, Hr(t)) : []
}
const We = 7423;
var ls = (e => (e.SingleGame = "single", e.MultiGame = "multi", e.SlotsGame = "slots", e))(ls || {});
const He = {
        thumbnail: "",
        iconThreeFour: "",
        fullName: "---",
        providerId: 0,
        providerName: "---",
        releaseTime: Date.now(),
        updateTime: 0,
        categoryId: 18,
        categoryName: "Original Casino",
        seoTitle: "",
        seoDescription: "",
        seoKeywords: "",
        tags: [],
        translatedTags: {},
        details: "---",
        isRestricted: 0,
        gameIdentity: {
            gameInfoId: 0,
            gameName: "---",
            gameUnique: "---",
            gameUrl: "---",
            socketNameSpace: "---",
            originalGameUnique: "---",
            gameChannel: "1",
            gameType: "slots"
        },
        gameUnique: "---",
        supportMobile: !0,
        supportDemo: !1,
        disabled: !1,
        previews: [],
        landscapePreviews: [],
        fiatList: ["USD"],
        providerInfo: {
            providerId: 0,
            logo: "",
            logoWhite: "",
            providerName: "---",
            totalGame: 0,
            introduction: "",
            foundTime: 0,
            officialWebsite: "",
            disabled: !1,
            tags: [],
            langSettings: [{
                language: "en",
                introduction: ""
            }]
        },
        slotsInfo: {
            stakeRange: null,
            maxWin: "0",
            subType: "---",
            rtpDes: 99,
            reelDesign: "",
            luckySpin: "",
            winWays: "",
            hitRate: "",
            volatility: ""
        },
        gameChannel: {
            gameChannel: "1",
            gameName: "--",
            gamePath: "--",
            gameSocketNameSpace: "--"
        }
    },
    Tn = new Map,
    se = ei(function(e) {
        return E(this, null, function*() {
            if (Tn.has(e)) return Tn.get(e);
            const t = Q().get(`/game/home/detail/?gameUrl=${e}&areaCode=${Qn.areaCode}`);
            Tn.set(e, t);
            try {
                const n = yield t;
                return Ye(n), n
            } catch (n) {
                n.code === We && gr.push(() => P(yi, {}));
                const r = mi.find(i => i.key === e),
                    o = T(N({}, He), {
                        gameIdentity: T(N({}, He.gameIdentity), {
                            gameUrl: e,
                            gameUnique: e,
                            gameName: (r == null ? void 0 : r.name) || "",
                            socketNameSpace: (r == null ? void 0 : r.namespace) || "",
                            gameDisabled: n.code === We
                        })
                    });
                return Ye(o), se.cache.delete(e), o
            }
        })
    });

function vu(e) {
    const t = e || fi().gameUnique;
    return bt(() => ({
        queryKey: ["/game/home/detail/", t],
        queryFn: ({
            queryKey: n
        }) => se(n[1]),
        throwOnError: !1,
        staleTime: 1 / 0
    }))
}
const Ye = (() => {
        const e = {};
        return t => {
            var o, i;
            if (!t) return e;
            const {
                gameIdentity: n
            } = t, r = fs(n.gameUrl);
            return n.gameType = r, e[n.gameUrl] ? e[n.gameUrl] = T(N({}, e[n.gameUrl]), {
                gameChannel: n.gameChannel,
                gameName: n.gameName,
                gamePath: n.gameUrl,
                gameSocketNameSpace: n.socketNameSpace,
                rtp: String(((o = t.slotsInfo) == null ? void 0 : o.rtpDes) || 99),
                gameDisabled: t.gameIdentity.gameDisabled,
                gameType: r
            }) : e[n.gameUrl] = {
                gameChannel: n.gameChannel,
                gameName: n.gameName,
                gamePath: n.gameUrl,
                gameSocketNameSpace: n.socketNameSpace,
                rtp: String(((i = t.slotsInfo) == null ? void 0 : i.rtpDes) || 99),
                gameDisabled: t.gameIdentity.gameDisabled,
                gameType: r
            }, e
        }
    })(),
    ds = ["baccarat", "classic-dice", "coinflip", "tower-legend", "color", "bingo", "ring-of-fortune", "hash-dice", "hilo", "keno", "limbo", "mines", "plinko", "RouletteSingle", "roulette", "twist", "ultimate-dice", "video-poker", "wheel", "cave", "jade", "fast-crash", "oriental-beauties", "sword", "stellar-rush"],
    ms = ["crash", "parity", "fastparity", "keno-multiplayer", "double", "baccarat-multiplayer", "blackjack", "patti", "roulette-multiplayer", "sicbo-multiplayer", "fish-prawn-crab", "hotpot"];

function fs(e) {
    return ds.includes(e) ? "single" : ms.includes(e) ? "multi" : "slots"
}
const ps = ["spades", "hearts", "clubs", "diamonds"],
    bs = ["♠", "♥", "♣", "♦"];

function wu(e) {
    return {
        point: e % 16,
        suit: ps[(240 & e) / 16 - 10]
    }
}

function Qe(e) {
    const t = " ,A,2,3,4,5,6,7,8,9,10,J,Q,K".split(",");
    let n = (240 & e) / 16 - 10,
        r = bs[n],
        o = t[e % 16];
    return {
        style: n % 2 == 0 ? "black" : "red",
        suits: r,
        point: o,
        txt: `${r}${o}`
    }
}

function Xe(e, t) {
    const n = [];
    let r = jt.SHA256(t).toString(jt.enc.Hex);
    return e.forEach(o => {
        n.push({
            num: o,
            hash: r
        }), r = r.substring(1) + r.charAt(0)
    }), n.sort(function(o, i) {
        return o.hash < i.hash ? -1 : o.hash === i.hash ? 0 : 1
    }), n
}

function Ze(e, t = "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6") {
    let n = function(o, i) {
            return jt.HmacSHA256(jt.enc.Hex.parse(o), i).toString(jt.enc.Hex)
        }(e, t),
        r = Xe([161, 180, 199, 218, 162, 205, 181, 200, 219, 163, 182, 220, 201, 177, 196, 215, 170, 178, 221, 197, 216, 171, 179, 198, 172, 217, 193, 212, 167, 186, 194, 173, 213, 168, 187, 195, 214, 188, 169, 209, 164, 183, 202, 210, 189, 165, 184, 203, 211, 166, 204, 185], n);
    return n = String(jt.SHA256(n)), r = Xe(r, n),
        function(o, i = 0) {
            const a = [o[i], o[i + 2]],
                s = [o[i + 1], o[i + 3]];
            return a.push(o[i + 4]), s.push(o[i + 5]), [...a, ...s]
        }(r.slice(0, 6).map(o => o.num).map(o => o.num))
}
var gs = (e => (e.manual = "manual", e.auto = "auto", e.advance = "advance", e))(gs || {}),
    en = (e => (e.normal = "normal", e.authFail = "authFail", e.unknownServerError = "unknownServerError", e))(en || {}),
    ys = (e => (e[e.pending = 0] = "pending", e[e.playing = 1] = "playing", e[e.guessing = 2] = "guessing", e[e.cashouting = 3] = "cashouting", e[e.end = 4] = "end", e))(ys || {});
const Iu = 500,
    Ou = 300,
    hs = 10,
    Su = 20,
    Au = 30,
    ju = 13,
    Nu = 14,
    Pu = 12,
    ku = 10,
    xu = 10,
    Tu = 300,
    Bu = 200,
    _u = {
        a: "Half bet amount",
        s: "Double bet amount",
        space: "Make a bet"
    },
    Lu = "Averta Std";
var Gn = function(e, t) {
    return Gn = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(n, r) {
        n.__proto__ = r
    } || function(n, r) {
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
    }, Gn(e, t)
};

function it(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

    function n() {
        this.constructor = e
    }
    Gn(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n)
}

function vs(e, t, n, r) {
    return new(n || (n = Promise))(function(o, i) {
        function a(l) {
            try {
                u(r.next(l))
            } catch (c) {
                i(c)
            }
        }

        function s(l) {
            try {
                u(r.throw(l))
            } catch (c) {
                i(c)
            }
        }

        function u(l) {
            var c;
            l.done ? o(l.value) : (c = l.value, c instanceof n ? c : new n(function(f) {
                f(c)
            })).then(a, s)
        }
        u((r = r.apply(e, t || [])).next())
    })
}

function Qr(e, t) {
    var n, r, o, i, a = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }), i;

    function s(u) {
        return function(l) {
            return function(c) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                    if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                    switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                        case 0:
                        case 1:
                            o = c;
                            break;
                        case 4:
                            return a.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            a.label++, r = c[1], c = [0];
                            continue;
                        case 7:
                            c = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (o = a.trys, !((o = o.length > 0 && o[o.length - 1]) || c[0] !== 6 && c[0] !== 2)) {
                                a = 0;
                                continue
                            }
                            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
                                a.label = c[1];
                                break
                            }
                            if (c[0] === 6 && a.label < o[1]) {
                                a.label = o[1], o = c;
                                break
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2], a.ops.push(c);
                                break
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    c = t.call(e, a)
                } catch (f) {
                    c = [6, f], r = 0
                } finally {
                    n = o = 0
                }
                if (5 & c[0]) throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                }
            }([u, l])
        }
    }
}

function Rt(e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        n = t && e[t],
        r = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && r >= e.length && (e = void 0), {
                value: e && e[r++],
                done: !e
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function Tt(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var r, o, i = n.call(e),
        a = [];
    try {
        for (;
            (t === void 0 || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
    } catch (s) {
        o = {
            error: s
        }
    } finally {
        try {
            r && !r.done && (n = i.return) && n.call(i)
        } finally {
            if (o) throw o.error
        }
    }
    return a
}

function Bt(e, t, n) {
    if (n || arguments.length === 2)
        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
    return e.concat(r || Array.prototype.slice.call(t))
}

function Pt(e) {
    return this instanceof Pt ? (this.v = e, this) : new Pt(e)
}

function ws(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r, o = n.apply(e, t || []),
        i = [];
    return r = {}, a("next"), a("throw"), a("return", function(f) {
        return function(b) {
            return Promise.resolve(b).then(f, l)
        }
    }), r[Symbol.asyncIterator] = function() {
        return this
    }, r;

    function a(f, b) {
        o[f] && (r[f] = function(v) {
            return new Promise(function(I, g) {
                i.push([f, v, I, g]) > 1 || s(f, v)
            })
        }, b && (r[f] = b(r[f])))
    }

    function s(f, b) {
        try {
            (v = o[f](b)).value instanceof Pt ? Promise.resolve(v.value.v).then(u, l) : c(i[0][2], v)
        } catch (I) {
            c(i[0][3], I)
        }
        var v
    }

    function u(f) {
        s("next", f)
    }

    function l(f) {
        s("throw", f)
    }

    function c(f, b) {
        f(b), i.shift(), i.length && s(i[0][0], i[0][1])
    }
}

function Is(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, n = e[Symbol.asyncIterator];
    return n ? n.call(e) : (e = Rt(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
        return this
    }, t);

    function r(o) {
        t[o] = e[o] && function(i) {
            return new Promise(function(a, s) {
                (function(u, l, c, f) {
                    Promise.resolve(f).then(function(b) {
                        u({
                            value: b,
                            done: c
                        })
                    }, l)
                })(a, s, (i = e[o](i)).done, i.value)
            })
        }
    }
}

function D(e) {
    return typeof e == "function"
}

function Xr(e) {
    var t = e(function(n) {
        Error.call(n), n.stack = new Error().stack
    });
    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
}
var Bn = Xr(function(e) {
    return function(t) {
        e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, r) {
            return r + 1 + ") " + n.toString()
        }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t
    }
});

function cn(e, t) {
    if (e) {
        var n = e.indexOf(t);
        0 <= n && e.splice(n, 1)
    }
}
var Wt = function() {
        function e(n) {
            this.initialTeardown = n, this.closed = !1, this._parentage = null, this._finalizers = null
        }
        var t;
        return e.prototype.unsubscribe = function() {
            var n, r, o, i, a;
            if (!this.closed) {
                this.closed = !0;
                var s = this._parentage;
                if (s)
                    if (this._parentage = null, Array.isArray(s)) try {
                        for (var u = Rt(s), l = u.next(); !l.done; l = u.next()) l.value.remove(this)
                    } catch (g) {
                        n = {
                            error: g
                        }
                    } finally {
                        try {
                            l && !l.done && (r = u.return) && r.call(u)
                        } finally {
                            if (n) throw n.error
                        }
                    } else s.remove(this);
                var c = this.initialTeardown;
                if (D(c)) try {
                    c()
                } catch (g) {
                    a = g instanceof Bn ? g.errors : [g]
                }
                var f = this._finalizers;
                if (f) {
                    this._finalizers = null;
                    try {
                        for (var b = Rt(f), v = b.next(); !v.done; v = b.next()) {
                            var I = v.value;
                            try {
                                tr(I)
                            } catch (g) {
                                a = a != null ? a : [], g instanceof Bn ? a = Bt(Bt([], Tt(a)), Tt(g.errors)) : a.push(g)
                            }
                        }
                    } catch (g) {
                        o = {
                            error: g
                        }
                    } finally {
                        try {
                            v && !v.done && (i = b.return) && i.call(b)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                }
                if (a) throw new Bn(a)
            }
        }, e.prototype.add = function(n) {
            var r;
            if (n && n !== this)
                if (this.closed) tr(n);
                else {
                    if (n instanceof e) {
                        if (n.closed || n._hasParent(this)) return;
                        n._addParent(this)
                    }(this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(n)
                }
        }, e.prototype._hasParent = function(n) {
            var r = this._parentage;
            return r === n || Array.isArray(r) && r.includes(n)
        }, e.prototype._addParent = function(n) {
            var r = this._parentage;
            this._parentage = Array.isArray(r) ? (r.push(n), r) : r ? [r, n] : n
        }, e.prototype._removeParent = function(n) {
            var r = this._parentage;
            r === n ? this._parentage = null : Array.isArray(r) && cn(r, n)
        }, e.prototype.remove = function(n) {
            var r = this._finalizers;
            r && cn(r, n), n instanceof e && n._removeParent(this)
        }, e.EMPTY = ((t = new e).closed = !0, t), e
    }(),
    Zr = Wt.EMPTY;

function to(e) {
    return e instanceof Wt || e && "closed" in e && D(e.remove) && D(e.add) && D(e.unsubscribe)
}

function tr(e) {
    D(e) ? e() : e.unsubscribe()
}
var no = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    },
    Rn = {
        setTimeout: function(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            var o = Rn.delegate;
            return o != null && o.setTimeout ? o.setTimeout.apply(o, Bt([e, t], Tt(n))) : setTimeout.apply(void 0, Bt([e, t], Tt(n)))
        },
        clearTimeout: function(e) {
            var t = Rn.delegate;
            return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e)
        },
        delegate: void 0
    };

function eo(e) {
    Rn.setTimeout(function() {
        throw e
    })
}

function zn() {}

function rn(e) {
    e()
}
var ue = function(e) {
        function t(n) {
            var r = e.call(this) || this;
            return r.isStopped = !1, n ? (r.destination = n, to(n) && n.add(r)) : r.destination = As, r
        }
        return it(t, e), t.create = function(n, r, o) {
            return new Kn(n, r, o)
        }, t.prototype.next = function(n) {
            this.isStopped || this._next(n)
        }, t.prototype.error = function(n) {
            this.isStopped || (this.isStopped = !0, this._error(n))
        }, t.prototype.complete = function() {
            this.isStopped || (this.isStopped = !0, this._complete())
        }, t.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
        }, t.prototype._next = function(n) {
            this.destination.next(n)
        }, t.prototype._error = function(n) {
            try {
                this.destination.error(n)
            } finally {
                this.unsubscribe()
            }
        }, t.prototype._complete = function() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }, t
    }(Wt),
    Os = Function.prototype.bind;

function _n(e, t) {
    return Os.call(e, t)
}
var Ss = function() {
        function e(t) {
            this.partialObserver = t
        }
        return e.prototype.next = function(t) {
            var n = this.partialObserver;
            if (n.next) try {
                n.next(t)
            } catch (r) {
                Zt(r)
            }
        }, e.prototype.error = function(t) {
            var n = this.partialObserver;
            if (n.error) try {
                n.error(t)
            } catch (r) {
                Zt(r)
            } else Zt(t)
        }, e.prototype.complete = function() {
            var t = this.partialObserver;
            if (t.complete) try {
                t.complete()
            } catch (n) {
                Zt(n)
            }
        }, e
    }(),
    Kn = function(e) {
        function t(n, r, o) {
            var i, a, s = e.call(this) || this;
            return D(n) || !n ? i = {
                next: n != null ? n : void 0,
                error: r != null ? r : void 0,
                complete: o != null ? o : void 0
            } : s && no.useDeprecatedNextContext ? ((a = Object.create(n)).unsubscribe = function() {
                return s.unsubscribe()
            }, i = {
                next: n.next && _n(n.next, a),
                error: n.error && _n(n.error, a),
                complete: n.complete && _n(n.complete, a)
            }) : i = n, s.destination = new Ss(i), s
        }
        return it(t, e), t
    }(ue);

function Zt(e) {
    eo(e)
}
var As = {
        closed: !0,
        next: zn,
        error: function(e) {
            throw e
        },
        complete: zn
    },
    ce = typeof Symbol == "function" && Symbol.observable || "@@observable";

function ro(e) {
    return e
}
var q = function() {
    function e(t) {
        t && (this._subscribe = t)
    }
    return e.prototype.lift = function(t) {
        var n = new e;
        return n.source = this, n.operator = t, n
    }, e.prototype.subscribe = function(t, n, r) {
        var o, i = this,
            a = (o = t) && o instanceof ue || function(s) {
                return s && D(s.next) && D(s.error) && D(s.complete)
            }(o) && to(o) ? t : new Kn(t, n, r);
        return rn(function() {
            var s = i,
                u = s.operator,
                l = s.source;
            a.add(u ? u.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a))
        }), a
    }, e.prototype._trySubscribe = function(t) {
        try {
            return this._subscribe(t)
        } catch (n) {
            t.error(n)
        }
    }, e.prototype.forEach = function(t, n) {
        var r = this;
        return new(n = nr(n))(function(o, i) {
            var a = new Kn({
                next: function(s) {
                    try {
                        t(s)
                    } catch (u) {
                        i(u), a.unsubscribe()
                    }
                },
                error: i,
                complete: o
            });
            r.subscribe(a)
        })
    }, e.prototype._subscribe = function(t) {
        var n;
        return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)
    }, e.prototype[ce] = function() {
        return this
    }, e.prototype.pipe = function() {
        for (var t, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return ((t = n).length === 0 ? ro : t.length === 1 ? t[0] : function(o) {
            return t.reduce(function(i, a) {
                return a(i)
            }, o)
        })(this)
    }, e.prototype.toPromise = function(t) {
        var n = this;
        return new(t = nr(t))(function(r, o) {
            var i;
            n.subscribe(function(a) {
                return i = a
            }, function(a) {
                return o(a)
            }, function() {
                return r(i)
            })
        })
    }, e.create = function(t) {
        return new e(t)
    }, e
}();

function nr(e) {
    var t;
    return (t = e != null ? e : no.Promise) !== null && t !== void 0 ? t : Promise
}

function Ot(e) {
    return function(t) {
        if (function(n) {
                return D(n == null ? void 0 : n.lift)
            }(t)) return t.lift(function(n) {
            try {
                return e(n, this)
            } catch (r) {
                this.error(r)
            }
        });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}

function gt(e, t, n, r, o) {
    return new js(e, t, n, r, o)
}
var js = function(e) {
        function t(n, r, o, i, a, s) {
            var u = e.call(this, n) || this;
            return u.onFinalize = a, u.shouldUnsubscribe = s, u._next = r ? function(l) {
                try {
                    r(l)
                } catch (c) {
                    n.error(c)
                }
            } : e.prototype._next, u._error = i ? function(l) {
                try {
                    i(l)
                } catch (c) {
                    n.error(c)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._error, u._complete = o ? function() {
                try {
                    o()
                } catch (l) {
                    n.error(l)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._complete, u
        }
        return it(t, e), t.prototype.unsubscribe = function() {
            var n;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var r = this.closed;
                e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this))
            }
        }, t
    }(ue),
    Ns = Xr(function(e) {
        return function() {
            e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
        }
    }),
    le = function(e) {
        function t() {
            var n = e.call(this) || this;
            return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n
        }
        return it(t, e), t.prototype.lift = function(n) {
            var r = new er(this, this);
            return r.operator = n, r
        }, t.prototype._throwIfClosed = function() {
            if (this.closed) throw new Ns
        }, t.prototype.next = function(n) {
            var r = this;
            rn(function() {
                var o, i;
                if (r._throwIfClosed(), !r.isStopped) {
                    r.currentObservers || (r.currentObservers = Array.from(r.observers));
                    try {
                        for (var a = Rt(r.currentObservers), s = a.next(); !s.done; s = a.next()) s.value.next(n)
                    } catch (u) {
                        o = {
                            error: u
                        }
                    } finally {
                        try {
                            s && !s.done && (i = a.return) && i.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                }
            })
        }, t.prototype.error = function(n) {
            var r = this;
            rn(function() {
                if (r._throwIfClosed(), !r.isStopped) {
                    r.hasError = r.isStopped = !0, r.thrownError = n;
                    for (var o = r.observers; o.length;) o.shift().error(n)
                }
            })
        }, t.prototype.complete = function() {
            var n = this;
            rn(function() {
                if (n._throwIfClosed(), !n.isStopped) {
                    n.isStopped = !0;
                    for (var r = n.observers; r.length;) r.shift().complete()
                }
            })
        }, t.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
        }, Object.defineProperty(t.prototype, "observed", {
            get: function() {
                var n;
                return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype._trySubscribe = function(n) {
            return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n)
        }, t.prototype._subscribe = function(n) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n)
        }, t.prototype._innerSubscribe = function(n) {
            var r = this,
                o = this,
                i = o.hasError,
                a = o.isStopped,
                s = o.observers;
            return i || a ? Zr : (this.currentObservers = null, s.push(n), new Wt(function() {
                r.currentObservers = null, cn(s, n)
            }))
        }, t.prototype._checkFinalizedStatuses = function(n) {
            var r = this,
                o = r.hasError,
                i = r.thrownError,
                a = r.isStopped;
            o ? n.error(i) : a && n.complete()
        }, t.prototype.asObservable = function() {
            var n = new q;
            return n.source = this, n
        }, t.create = function(n, r) {
            return new er(n, r)
        }, t
    }(q),
    er = function(e) {
        function t(n, r) {
            var o = e.call(this) || this;
            return o.destination = n, o.source = r, o
        }
        return it(t, e), t.prototype.next = function(n) {
            var r, o;
            (o = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || o === void 0 || o.call(r, n)
        }, t.prototype.error = function(n) {
            var r, o;
            (o = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || o === void 0 || o.call(r, n)
        }, t.prototype.complete = function() {
            var n, r;
            (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n)
        }, t.prototype._subscribe = function(n) {
            var r, o;
            return (o = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && o !== void 0 ? o : Zr
        }, t
    }(le),
    U = function(e) {
        function t(n) {
            var r = e.call(this) || this;
            return r._value = n, r
        }
        return it(t, e), Object.defineProperty(t.prototype, "value", {
            get: function() {
                return this.getValue()
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype._subscribe = function(n) {
            var r = e.prototype._subscribe.call(this, n);
            return !r.closed && n.next(this._value), r
        }, t.prototype.getValue = function() {
            var n = this,
                r = n.hasError,
                o = n.thrownError,
                i = n._value;
            if (r) throw o;
            return this._throwIfClosed(), i
        }, t.prototype.next = function(n) {
            e.prototype.next.call(this, this._value = n)
        }, t
    }(le),
    oo = {
        now: function() {
            return (oo.delegate || Date).now()
        },
        delegate: void 0
    },
    Ps = function(e) {
        function t(n, r) {
            return e.call(this) || this
        }
        return it(t, e), t.prototype.schedule = function(n, r) {
            return this
        }, t
    }(Wt),
    ln = {
        setInterval: function(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            var o = ln.delegate;
            return o != null && o.setInterval ? o.setInterval.apply(o, Bt([e, t], Tt(n))) : setInterval.apply(void 0, Bt([e, t], Tt(n)))
        },
        clearInterval: function(e) {
            var t = ln.delegate;
            return ((t == null ? void 0 : t.clearInterval) || clearInterval)(e)
        },
        delegate: void 0
    },
    ks = function(e) {
        function t(n, r) {
            var o = e.call(this, n, r) || this;
            return o.scheduler = n, o.work = r, o.pending = !1, o
        }
        return it(t, e), t.prototype.schedule = function(n, r) {
            var o;
            if (r === void 0 && (r = 0), this.closed) return this;
            this.state = n;
            var i = this.id,
                a = this.scheduler;
            return i != null && (this.id = this.recycleAsyncId(a, i, r)), this.pending = !0, this.delay = r, this.id = (o = this.id) !== null && o !== void 0 ? o : this.requestAsyncId(a, this.id, r), this
        }, t.prototype.requestAsyncId = function(n, r, o) {
            return o === void 0 && (o = 0), ln.setInterval(n.flush.bind(n, this), o)
        }, t.prototype.recycleAsyncId = function(n, r, o) {
            if (o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1) return r;
            r != null && ln.clearInterval(r)
        }, t.prototype.execute = function(n, r) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var o = this._execute(n, r);
            if (o) return o;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, t.prototype._execute = function(n, r) {
            var o, i = !1;
            try {
                this.work(n)
            } catch (a) {
                i = !0, o = a || new Error("Scheduled action threw falsy error")
            }
            if (i) return this.unsubscribe(), o
        }, t.prototype.unsubscribe = function() {
            if (!this.closed) {
                var n = this.id,
                    r = this.scheduler,
                    o = r.actions;
                this.work = this.state = this.scheduler = null, this.pending = !1, cn(o, this), n != null && (this.id = this.recycleAsyncId(r, n, null)), this.delay = null, e.prototype.unsubscribe.call(this)
            }
        }, t
    }(Ps),
    rr = function() {
        function e(t, n) {
            n === void 0 && (n = e.now), this.schedulerActionCtor = t, this.now = n
        }
        return e.prototype.schedule = function(t, n, r) {
            return n === void 0 && (n = 0), new this.schedulerActionCtor(this, t).schedule(r, n)
        }, e.now = oo.now, e
    }(),
    io = new(function(e) {
        function t(n, r) {
            r === void 0 && (r = rr.now);
            var o = e.call(this, n, r) || this;
            return o.actions = [], o._active = !1, o
        }
        return it(t, e), t.prototype.flush = function(n) {
            var r = this.actions;
            if (this._active) r.push(n);
            else {
                var o;
                this._active = !0;
                do
                    if (o = n.execute(n.state, n.delay)) break; while (n = r.shift());
                if (this._active = !1, o) {
                    for (; n = r.shift();) n.unsubscribe();
                    throw o
                }
            }
        }, t
    }(rr))(ks),
    xs = io,
    Ts = new q(function(e) {
        return e.complete()
    });

function ao(e) {
    return e && D(e.schedule)
}

function so(e) {
    return e[e.length - 1]
}

function Cu(e) {
    return D(so(e)) ? e.pop() : void 0
}

function uo(e) {
    return ao(so(e)) ? e.pop() : void 0
}
var co = function(e) {
    return e && typeof e.length == "number" && typeof e != "function"
};

function lo(e) {
    return D(e == null ? void 0 : e.then)
}

function mo(e) {
    return D(e[ce])
}

function fo(e) {
    return Symbol.asyncIterator && D(e == null ? void 0 : e[Symbol.asyncIterator])
}

function po(e) {
    return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
}
var bo = typeof Symbol == "function" && Symbol.iterator ? Symbol.iterator : "@@iterator";

function go(e) {
    return D(e == null ? void 0 : e[bo])
}

function yo(e) {
    return ws(this, arguments, function() {
        var t, n, r;
        return Qr(this, function(o) {
            switch (o.label) {
                case 0:
                    t = e.getReader(), o.label = 1;
                case 1:
                    o.trys.push([1, , 9, 10]), o.label = 2;
                case 2:
                    return [4, Pt(t.read())];
                case 3:
                    return n = o.sent(), r = n.value, n.done ? [4, Pt(void 0)] : [3, 5];
                case 4:
                    return [2, o.sent()];
                case 5:
                    return [4, Pt(r)];
                case 6:
                    return [4, o.sent()];
                case 7:
                    return o.sent(), [3, 2];
                case 8:
                    return [3, 10];
                case 9:
                    return t.releaseLock(), [7];
                case 10:
                    return [2]
            }
        })
    })
}

function ho(e) {
    return D(e == null ? void 0 : e.getReader)
}

function _t(e) {
    if (e instanceof q) return e;
    if (e != null) {
        if (mo(e)) return r = e, new q(function(o) {
            var i = r[ce]();
            if (D(i.subscribe)) return i.subscribe(o);
            throw new TypeError("Provided object does not correctly implement Symbol.observable")
        });
        if (co(e)) return n = e, new q(function(o) {
            for (var i = 0; i < n.length && !o.closed; i++) o.next(n[i]);
            o.complete()
        });
        if (lo(e)) return function(o) {
            return new q(function(i) {
                o.then(function(a) {
                    i.closed || (i.next(a), i.complete())
                }, function(a) {
                    return i.error(a)
                }).then(null, eo)
            })
        }(e);
        if (fo(e)) return or(e);
        if (go(e)) return t = e, new q(function(o) {
            var i, a;
            try {
                for (var s = Rt(t), u = s.next(); !u.done; u = s.next()) {
                    var l = u.value;
                    if (o.next(l), o.closed) return
                }
            } catch (c) {
                i = {
                    error: c
                }
            } finally {
                try {
                    u && !u.done && (a = s.return) && a.call(s)
                } finally {
                    if (i) throw i.error
                }
            }
            o.complete()
        });
        if (ho(e)) return or(yo(e))
    }
    var t, n, r;
    throw po(e)
}

function or(e) {
    return new q(function(t) {
        (function(n, r) {
            var o, i, a, s;
            return vs(this, void 0, void 0, function() {
                var u, l;
                return Qr(this, function(c) {
                    switch (c.label) {
                        case 0:
                            c.trys.push([0, 5, 6, 11]), o = Is(n), c.label = 1;
                        case 1:
                            return [4, o.next()];
                        case 2:
                            if ((i = c.sent()).done) return [3, 4];
                            if (u = i.value, r.next(u), r.closed) return [2];
                            c.label = 3;
                        case 3:
                            return [3, 1];
                        case 4:
                            return [3, 11];
                        case 5:
                            return l = c.sent(), a = {
                                error: l
                            }, [3, 11];
                        case 6:
                            return c.trys.push([6, , 9, 10]), i && !i.done && (s = o.return) ? [4, s.call(o)] : [3, 8];
                        case 7:
                            c.sent(), c.label = 8;
                        case 8:
                            return [3, 10];
                        case 9:
                            if (a) throw a.error;
                            return [7];
                        case 10:
                            return [7];
                        case 11:
                            return r.complete(), [2]
                    }
                })
            })
        })(e, t).catch(function(n) {
            return t.error(n)
        })
    })
}

function dt(e, t, n, r, o) {
    r === void 0 && (r = 0), o === void 0 && (o = !1);
    var i = t.schedule(function() {
        n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe()
    }, r);
    if (e.add(i), !o) return i
}

function ir(e, t) {
    return t === void 0 && (t = 0), Ot(function(n, r) {
        n.subscribe(gt(r, function(o) {
            return dt(r, e, function() {
                return r.next(o)
            }, t)
        }, function() {
            return dt(r, e, function() {
                return r.complete()
            }, t)
        }, function(o) {
            return dt(r, e, function() {
                return r.error(o)
            }, t)
        }))
    })
}

function ar(e, t) {
    return t === void 0 && (t = 0), Ot(function(n, r) {
        r.add(e.schedule(function() {
            return n.subscribe(r)
        }, t))
    })
}

function sr(e, t) {
    if (!e) throw new Error("Iterable cannot be null");
    return new q(function(n) {
        dt(n, t, function() {
            var r = e[Symbol.asyncIterator]();
            dt(n, t, function() {
                r.next().then(function(o) {
                    o.done ? n.complete() : n.next(o.value)
                })
            }, 0, !0)
        })
    })
}

function Bs(e, t) {
    if (e != null) {
        if (mo(e)) return function(n, r) {
            return _t(n).pipe(ar(r), ir(r))
        }(e, t);
        if (co(e)) return function(n, r) {
            return new q(function(o) {
                var i = 0;
                return r.schedule(function() {
                    i === n.length ? o.complete() : (o.next(n[i++]), o.closed || this.schedule())
                })
            })
        }(e, t);
        if (lo(e)) return function(n, r) {
            return _t(n).pipe(ar(r), ir(r))
        }(e, t);
        if (fo(e)) return sr(e, t);
        if (go(e)) return function(n, r) {
            return new q(function(o) {
                var i;
                return dt(o, r, function() {
                        i = n[bo](), dt(o, r, function() {
                            var a, s, u;
                            try {
                                s = (a = i.next()).value, u = a.done
                            } catch (l) {
                                return void o.error(l)
                            }
                            u ? o.complete() : o.next(s)
                        }, 0, !0)
                    }),
                    function() {
                        return D(i == null ? void 0 : i.return) && i.return()
                    }
            })
        }(e, t);
        if (ho(e)) return function(n, r) {
            return sr(yo(n), r)
        }(e, t)
    }
    throw po(e)
}

function de(e, t) {
    return t ? Bs(e, t) : _t(e)
}

function ur() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return de(e, uo(e))
}

function vo(e, t) {
    return Ot(function(n, r) {
        var o = 0;
        n.subscribe(gt(r, function(i) {
            r.next(e.call(t, i, o++))
        }))
    })
}

function hn(e, t, n) {
    return n === void 0 && (n = 1 / 0), D(t) ? hn(function(r, o) {
        return vo(function(i, a) {
            return t(r, i, o, a)
        })(_t(e(r, o)))
    }, n) : (typeof t == "number" && (n = t), Ot(function(r, o) {
        return function(i, a, s, u, l, c, f, b) {
            var v = [],
                I = 0,
                g = 0,
                y = !1,
                m = function() {
                    !y || v.length || I || a.complete()
                },
                p = function(S) {
                    return I < u ? w(S) : v.push(S)
                },
                w = function(S) {
                    c && a.next(S), I++;
                    var j = !1;
                    _t(s(S, g++)).subscribe(gt(a, function(A) {
                        l == null || l(A), c ? p(A) : a.next(A)
                    }, function() {
                        j = !0
                    }, void 0, function() {
                        if (j) try {
                            I--;
                            for (var A = function() {
                                    var x = v.shift();
                                    f ? dt(a, f, function() {
                                        return w(x)
                                    }) : w(x)
                                }; v.length && I < u;) A();
                            m()
                        } catch (x) {
                            a.error(x)
                        }
                    }))
                };
            return i.subscribe(gt(a, p, function() {
                    y = !0, m()
                })),
                function() {
                    b == null || b()
                }
        }(r, o, e, n)
    }))
}

function _s() {
    return (e = 1) === void 0 && (e = 1 / 0), hn(ro, e);
    var e
}

function Ls(e, t, n) {
    e === void 0 && (e = 0), n === void 0 && (n = xs);
    var r = -1;
    return t != null && (ao(t) ? n = t : r = t), new q(function(o) {
        var i, a = (i = e) instanceof Date && !isNaN(i) ? +e - n.now() : e;
        a < 0 && (a = 0);
        var s = 0;
        return n.schedule(function() {
            o.closed || (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete())
        }, a)
    })
}

function Jn(e, t) {
    return Ot(function(n, r) {
        var o = 0;
        n.subscribe(gt(r, function(i) {
            return e.call(t, i, o++) && r.next(i)
        }))
    })
}

function Wn(e) {
    return e <= 0 ? function() {
        return Ts
    } : Ot(function(t, n) {
        var r = 0;
        t.subscribe(gt(n, function(o) {
            ++r <= e && (n.next(o), e <= r && n.complete())
        }))
    })
}

function me(e, t) {
    return t ? function(n) {
        return function() {
            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
            return _s()(de(r, uo(r)))
        }(t.pipe(Wn(1), Ot(function(r, o) {
            r.subscribe(gt(o, zn))
        })), n.pipe(me(e)))
    } : hn(function(n, r) {
        return _t(e(n, r)).pipe(Wn(1), function(o) {
            return vo(function() {
                return o
            })
        }(n))
    })
}

function Cs(e, t) {
    t === void 0 && (t = io);
    var n = Ls(e, t);
    return me(function() {
        return n
    })
}
var Et = (e => (e[e.disconnect = 0] = "disconnect", e[e.connecting = 1] = "connecting", e[e.connected = 2] = "connected", e))(Et || {});
const wo = {
    isTurboEnable: !1,
    bgSoundEnable: !1,
    soundEnable: !0,
    hotKeysEnable: !1
};
class vn {
    constructor(t, n) {
        this.connection$ = new U(Et.disconnect), this.rtp$ = new U(.99), this.option$ = new U({}), this.bouns$ = new U(!1), this.onConnect = () => {
            this.connection$.next(Et.connected)
        }, this.onDisconnect = () => {
            this.connection$.next(Et.disconnect)
        }, this.onConnecting = () => {
            this.connection$.next(Et.connecting)
        };
        const r = function(o, i) {
            return i ? T(N(N({}, o), i), {
                rtp: Number(i.rtp) / 100 || .99,
                namespace: i.gameSocketNameSpace || o.namespace
            }) : o
        }(t, n);
        this.option$.next(r), this.rtp$.next(Number(r.rtp || .99)), this.socket = $(r.namespace), this.request = $().socketRequestBind(this.socket), this.gameName = t.name, this.socket.on("connect", this.onConnect), this.socket.on("reconnecting", this.onConnecting), this.socket.on("disconnect", this.onDisconnect), this.initSetting(), this.listenBonus()
    }
    listenBonus() {
        return yr(t => {
            this.dispose = t, V(() => {
                this.bouns$.next(Qn.setting.currencyBonusType === "game")
            })
        }), () => {
            this.dispose()
        }
    }
    initSetting() {
        localStorage.getItem(`ns-${this.gameName}`) || localStorage.setItem(`ns-${this.gameName}`, JSON.stringify(wo))
    }
    getScriptId(t) {
        return E(this, null, function*() {
            return yield Q().post("/game/manage/scripts/log/", {
                gameName: this.config.name,
                content: t
            })
        })
    }
    online() {
        return this.socket.connect(), this.init(), () => {
            this.socket.disconnect()
        }
    }
}
const Vs = (() => {
    const e = {};
    return function(t, ...n) {
        if (e[t.alias]) return e[t.alias];
        const r = new t(...n);
        return e[t.name] = r, r
    }
})();
class cr extends vn {
    constructor(t, n) {
        super(t, n), this.oddsScale = 1e4, this.amountScale = 1e4, this.isWatching = !1, this.connection = this.connection$.asObservable()
    }
    init() {}
}
const k = C.Reader,
    ft = C.Writer,
    d = C.util,
    O = C.roots.singleGame || (C.roots.singleGame = {});
O.Bet = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.betValue = d.newBuffer([]), e.prototype.scriptId = 0, e.prototype.frontgroundId = 0, e.prototype.amountType = 0, e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        return n || (n = ft.create()), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(10).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(18).string(t.betAmount), t.betValue != null && Object.hasOwnProperty.call(t, "betValue") && n.uint32(26).bytes(t.betValue), t.scriptId != null && Object.hasOwnProperty.call(t, "scriptId") && n.uint32(32).sint32(t.scriptId), t.frontgroundId != null && Object.hasOwnProperty.call(t, "frontgroundId") && n.uint32(120).sint32(t.frontgroundId), t.amountType != null && Object.hasOwnProperty.call(t, "amountType") && n.uint32(128).sint32(t.amountType), n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.Bet;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.currencyName = t.string();
                    break;
                case 2:
                    o.betAmount = t.string();
                    break;
                case 3:
                    o.betValue = t.bytes();
                    break;
                case 4:
                    o.scriptId = t.sint32();
                    break;
                case 15:
                    o.frontgroundId = t.sint32();
                    break;
                case 16:
                    o.amountType = t.sint32();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        return typeof t != "object" || t === null ? "object expected" : t.currencyName != null && t.hasOwnProperty("currencyName") && !d.isString(t.currencyName) ? "currencyName: string expected" : t.betAmount != null && t.hasOwnProperty("betAmount") && !d.isString(t.betAmount) ? "betAmount: string expected" : t.betValue != null && t.hasOwnProperty("betValue") && !(t.betValue && typeof t.betValue.length == "number" || d.isString(t.betValue)) ? "betValue: buffer expected" : t.scriptId != null && t.hasOwnProperty("scriptId") && !d.isInteger(t.scriptId) ? "scriptId: integer expected" : t.frontgroundId != null && t.hasOwnProperty("frontgroundId") && !d.isInteger(t.frontgroundId) ? "frontgroundId: integer expected" : t.amountType != null && t.hasOwnProperty("amountType") && !d.isInteger(t.amountType) ? "amountType: integer expected" : null
    }, e.fromObject = function(t) {
        if (t instanceof O.Bet) return t;
        let n = new O.Bet;
        return t.currencyName != null && (n.currencyName = String(t.currencyName)), t.betAmount != null && (n.betAmount = String(t.betAmount)), t.betValue != null && (typeof t.betValue == "string" ? d.base64.decode(t.betValue, n.betValue = d.newBuffer(d.base64.length(t.betValue)), 0) : t.betValue.length && (n.betValue = t.betValue)), t.scriptId != null && (n.scriptId = 0 | t.scriptId), t.frontgroundId != null && (n.frontgroundId = 0 | t.frontgroundId), t.amountType != null && (n.amountType = 0 | t.amountType), n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.currencyName = "", r.betAmount = "", n.bytes === String ? r.betValue = "" : (r.betValue = [], n.bytes !== Array && (r.betValue = d.newBuffer(r.betValue))), r.scriptId = 0, r.frontgroundId = 0, r.amountType = 0), t.currencyName != null && t.hasOwnProperty("currencyName") && (r.currencyName = t.currencyName), t.betAmount != null && t.hasOwnProperty("betAmount") && (r.betAmount = t.betAmount), t.betValue != null && t.hasOwnProperty("betValue") && (r.betValue = n.bytes === String ? d.base64.encode(t.betValue, 0, t.betValue.length) : n.bytes === Array ? Array.prototype.slice.call(t.betValue) : t.betValue), t.scriptId != null && t.hasOwnProperty("scriptId") && (r.scriptId = t.scriptId), t.frontgroundId != null && t.hasOwnProperty("frontgroundId") && (r.frontgroundId = t.frontgroundId), t.amountType != null && t.hasOwnProperty("amountType") && (r.amountType = t.amountType), r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e
})(), O.BetResult = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.betId = "", e.prototype.result = 0, e.prototype.odds = 0, e.prototype.nonce = 0, e.prototype.gameValue = d.newBuffer([]), e.prototype.betTime = d.Long ? d.Long.fromBits(0, 0, !1) : 0, e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.winAmount = "", e.prototype.betIdTmp = "", e.prototype.betValue = d.newBuffer([]), e.prototype.distributeId = "", e.prototype.oddsString = "", e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        return n || (n = ft.create()), t.betId != null && Object.hasOwnProperty.call(t, "betId") && n.uint32(10).string(t.betId), t.result != null && Object.hasOwnProperty.call(t, "result") && n.uint32(16).sint32(t.result), t.odds != null && Object.hasOwnProperty.call(t, "odds") && n.uint32(24).sint32(t.odds), t.nonce != null && Object.hasOwnProperty.call(t, "nonce") && n.uint32(32).sint32(t.nonce), t.gameValue != null && Object.hasOwnProperty.call(t, "gameValue") && n.uint32(42).bytes(t.gameValue), t.betTime != null && Object.hasOwnProperty.call(t, "betTime") && n.uint32(48).sint64(t.betTime), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(58).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(66).string(t.betAmount), t.winAmount != null && Object.hasOwnProperty.call(t, "winAmount") && n.uint32(74).string(t.winAmount), t.betIdTmp != null && Object.hasOwnProperty.call(t, "betIdTmp") && n.uint32(82).string(t.betIdTmp), t.betValue != null && Object.hasOwnProperty.call(t, "betValue") && n.uint32(90).bytes(t.betValue), t.distributeId != null && Object.hasOwnProperty.call(t, "distributeId") && n.uint32(98).string(t.distributeId), t.oddsString != null && Object.hasOwnProperty.call(t, "oddsString") && n.uint32(106).string(t.oddsString), n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.BetResult;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.betId = t.string();
                    break;
                case 2:
                    o.result = t.sint32();
                    break;
                case 3:
                    o.odds = t.sint32();
                    break;
                case 4:
                    o.nonce = t.sint32();
                    break;
                case 5:
                    o.gameValue = t.bytes();
                    break;
                case 6:
                    o.betTime = t.sint64();
                    break;
                case 7:
                    o.currencyName = t.string();
                    break;
                case 8:
                    o.betAmount = t.string();
                    break;
                case 9:
                    o.winAmount = t.string();
                    break;
                case 10:
                    o.betIdTmp = t.string();
                    break;
                case 11:
                    o.betValue = t.bytes();
                    break;
                case 12:
                    o.distributeId = t.string();
                    break;
                case 13:
                    o.oddsString = t.string();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        return typeof t != "object" || t === null ? "object expected" : t.betId != null && t.hasOwnProperty("betId") && !d.isString(t.betId) ? "betId: string expected" : t.result != null && t.hasOwnProperty("result") && !d.isInteger(t.result) ? "result: integer expected" : t.odds != null && t.hasOwnProperty("odds") && !d.isInteger(t.odds) ? "odds: integer expected" : t.nonce != null && t.hasOwnProperty("nonce") && !d.isInteger(t.nonce) ? "nonce: integer expected" : t.gameValue != null && t.hasOwnProperty("gameValue") && !(t.gameValue && typeof t.gameValue.length == "number" || d.isString(t.gameValue)) ? "gameValue: buffer expected" : t.betTime != null && t.hasOwnProperty("betTime") && !(d.isInteger(t.betTime) || t.betTime && d.isInteger(t.betTime.low) && d.isInteger(t.betTime.high)) ? "betTime: integer|Long expected" : t.currencyName != null && t.hasOwnProperty("currencyName") && !d.isString(t.currencyName) ? "currencyName: string expected" : t.betAmount != null && t.hasOwnProperty("betAmount") && !d.isString(t.betAmount) ? "betAmount: string expected" : t.winAmount != null && t.hasOwnProperty("winAmount") && !d.isString(t.winAmount) ? "winAmount: string expected" : t.betIdTmp != null && t.hasOwnProperty("betIdTmp") && !d.isString(t.betIdTmp) ? "betIdTmp: string expected" : t.betValue != null && t.hasOwnProperty("betValue") && !(t.betValue && typeof t.betValue.length == "number" || d.isString(t.betValue)) ? "betValue: buffer expected" : t.distributeId != null && t.hasOwnProperty("distributeId") && !d.isString(t.distributeId) ? "distributeId: string expected" : t.oddsString != null && t.hasOwnProperty("oddsString") && !d.isString(t.oddsString) ? "oddsString: string expected" : null
    }, e.fromObject = function(t) {
        if (t instanceof O.BetResult) return t;
        let n = new O.BetResult;
        return t.betId != null && (n.betId = String(t.betId)), t.result != null && (n.result = 0 | t.result), t.odds != null && (n.odds = 0 | t.odds), t.nonce != null && (n.nonce = 0 | t.nonce), t.gameValue != null && (typeof t.gameValue == "string" ? d.base64.decode(t.gameValue, n.gameValue = d.newBuffer(d.base64.length(t.gameValue)), 0) : t.gameValue.length && (n.gameValue = t.gameValue)), t.betTime != null && (d.Long ? (n.betTime = d.Long.fromValue(t.betTime)).unsigned = !1 : typeof t.betTime == "string" ? n.betTime = parseInt(t.betTime, 10) : typeof t.betTime == "number" ? n.betTime = t.betTime : typeof t.betTime == "object" && (n.betTime = new d.LongBits(t.betTime.low >>> 0, t.betTime.high >>> 0).toNumber())), t.currencyName != null && (n.currencyName = String(t.currencyName)), t.betAmount != null && (n.betAmount = String(t.betAmount)), t.winAmount != null && (n.winAmount = String(t.winAmount)), t.betIdTmp != null && (n.betIdTmp = String(t.betIdTmp)), t.betValue != null && (typeof t.betValue == "string" ? d.base64.decode(t.betValue, n.betValue = d.newBuffer(d.base64.length(t.betValue)), 0) : t.betValue.length && (n.betValue = t.betValue)), t.distributeId != null && (n.distributeId = String(t.distributeId)), t.oddsString != null && (n.oddsString = String(t.oddsString)), n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        if (n.defaults) {
            if (r.betId = "", r.result = 0, r.odds = 0, r.nonce = 0, n.bytes === String ? r.gameValue = "" : (r.gameValue = [], n.bytes !== Array && (r.gameValue = d.newBuffer(r.gameValue))), d.Long) {
                let o = new d.Long(0, 0, !1);
                r.betTime = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o
            } else r.betTime = n.longs === String ? "0" : 0;
            r.currencyName = "", r.betAmount = "", r.winAmount = "", r.betIdTmp = "", n.bytes === String ? r.betValue = "" : (r.betValue = [], n.bytes !== Array && (r.betValue = d.newBuffer(r.betValue))), r.distributeId = "", r.oddsString = ""
        }
        return t.betId != null && t.hasOwnProperty("betId") && (r.betId = t.betId), t.result != null && t.hasOwnProperty("result") && (r.result = t.result), t.odds != null && t.hasOwnProperty("odds") && (r.odds = t.odds), t.nonce != null && t.hasOwnProperty("nonce") && (r.nonce = t.nonce), t.gameValue != null && t.hasOwnProperty("gameValue") && (r.gameValue = n.bytes === String ? d.base64.encode(t.gameValue, 0, t.gameValue.length) : n.bytes === Array ? Array.prototype.slice.call(t.gameValue) : t.gameValue), t.betTime != null && t.hasOwnProperty("betTime") && (typeof t.betTime == "number" ? r.betTime = n.longs === String ? String(t.betTime) : t.betTime : r.betTime = n.longs === String ? d.Long.prototype.toString.call(t.betTime) : n.longs === Number ? new d.LongBits(t.betTime.low >>> 0, t.betTime.high >>> 0).toNumber() : t.betTime), t.currencyName != null && t.hasOwnProperty("currencyName") && (r.currencyName = t.currencyName), t.betAmount != null && t.hasOwnProperty("betAmount") && (r.betAmount = t.betAmount), t.winAmount != null && t.hasOwnProperty("winAmount") && (r.winAmount = t.winAmount), t.betIdTmp != null && t.hasOwnProperty("betIdTmp") && (r.betIdTmp = t.betIdTmp), t.betValue != null && t.hasOwnProperty("betValue") && (r.betValue = n.bytes === String ? d.base64.encode(t.betValue, 0, t.betValue.length) : n.bytes === Array ? Array.prototype.slice.call(t.betValue) : t.betValue), t.distributeId != null && t.hasOwnProperty("distributeId") && (r.distributeId = t.distributeId), t.oddsString != null && t.hasOwnProperty("oddsString") && (r.oddsString = t.oddsString), r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e
})(), O.BetInfo = (() => {
    function e(t) {
        if (this.infos = [], t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.infos = d.emptyArray, e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        if (n || (n = ft.create()), t.infos != null && t.infos.length)
            for (let r = 0; r < t.infos.length; ++r) O.BetInfo.Info.encode(t.infos[r], n.uint32(10).fork()).ldelim();
        return n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.BetInfo;
        for (; t.pos < r;) {
            let i = t.uint32();
            i >>> 3 == 1 ? (o.infos && o.infos.length || (o.infos = []), o.infos.push(O.BetInfo.Info.decode(t, t.uint32()))) : t.skipType(7 & i)
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        if (typeof t != "object" || t === null) return "object expected";
        if (t.infos != null && t.hasOwnProperty("infos")) {
            if (!Array.isArray(t.infos)) return "infos: array expected";
            for (let n = 0; n < t.infos.length; ++n) {
                let r = O.BetInfo.Info.verify(t.infos[n]);
                if (r) return "infos." + r
            }
        }
        return null
    }, e.fromObject = function(t) {
        if (t instanceof O.BetInfo) return t;
        let n = new O.BetInfo;
        if (t.infos) {
            if (!Array.isArray(t.infos)) throw TypeError(".BetInfo.infos: array expected");
            n.infos = [];
            for (let r = 0; r < t.infos.length; ++r) {
                if (typeof t.infos[r] != "object") throw TypeError(".BetInfo.infos: object expected");
                n.infos[r] = O.BetInfo.Info.fromObject(t.infos[r])
            }
        }
        return n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.infos = []), t.infos && t.infos.length) {
            r.infos = [];
            for (let o = 0; o < t.infos.length; ++o) r.infos[o] = O.BetInfo.Info.toObject(t.infos[o], n)
        }
        return r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e.Info = function() {
        function t(n) {
            if (n)
                for (let r = Object.keys(n), o = 0; o < r.length; ++o) n[r[o]] != null && (this[r[o]] = n[r[o]])
        }
        return t.prototype.currencyName = "", t.prototype.maxBetAmount = "", t.prototype.minBetAmount = "", t.prototype.maxProfitAmount = "", t.create = function(n) {
            return new t(n)
        }, t.encode = function(n, r) {
            return r || (r = ft.create()), n.currencyName != null && Object.hasOwnProperty.call(n, "currencyName") && r.uint32(10).string(n.currencyName), n.maxBetAmount != null && Object.hasOwnProperty.call(n, "maxBetAmount") && r.uint32(18).string(n.maxBetAmount), n.minBetAmount != null && Object.hasOwnProperty.call(n, "minBetAmount") && r.uint32(26).string(n.minBetAmount), n.maxProfitAmount != null && Object.hasOwnProperty.call(n, "maxProfitAmount") && r.uint32(34).string(n.maxProfitAmount), r
        }, t.encodeDelimited = function(n, r) {
            return this.encode(n, r).ldelim()
        }, t.decode = function(n, r) {
            n instanceof k || (n = k.create(n));
            let o = r === void 0 ? n.len : n.pos + r,
                i = new O.BetInfo.Info;
            for (; n.pos < o;) {
                let a = n.uint32();
                switch (a >>> 3) {
                    case 1:
                        i.currencyName = n.string();
                        break;
                    case 2:
                        i.maxBetAmount = n.string();
                        break;
                    case 3:
                        i.minBetAmount = n.string();
                        break;
                    case 4:
                        i.maxProfitAmount = n.string();
                        break;
                    default:
                        n.skipType(7 & a)
                }
            }
            return i
        }, t.decodeDelimited = function(n) {
            return n instanceof k || (n = new k(n)), this.decode(n, n.uint32())
        }, t.verify = function(n) {
            return typeof n != "object" || n === null ? "object expected" : n.currencyName != null && n.hasOwnProperty("currencyName") && !d.isString(n.currencyName) ? "currencyName: string expected" : n.maxBetAmount != null && n.hasOwnProperty("maxBetAmount") && !d.isString(n.maxBetAmount) ? "maxBetAmount: string expected" : n.minBetAmount != null && n.hasOwnProperty("minBetAmount") && !d.isString(n.minBetAmount) ? "minBetAmount: string expected" : n.maxProfitAmount != null && n.hasOwnProperty("maxProfitAmount") && !d.isString(n.maxProfitAmount) ? "maxProfitAmount: string expected" : null
        }, t.fromObject = function(n) {
            if (n instanceof O.BetInfo.Info) return n;
            let r = new O.BetInfo.Info;
            return n.currencyName != null && (r.currencyName = String(n.currencyName)), n.maxBetAmount != null && (r.maxBetAmount = String(n.maxBetAmount)), n.minBetAmount != null && (r.minBetAmount = String(n.minBetAmount)), n.maxProfitAmount != null && (r.maxProfitAmount = String(n.maxProfitAmount)), r
        }, t.toObject = function(n, r) {
            r || (r = {});
            let o = {};
            return r.defaults && (o.currencyName = "", o.maxBetAmount = "", o.minBetAmount = "", o.maxProfitAmount = ""), n.currencyName != null && n.hasOwnProperty("currencyName") && (o.currencyName = n.currencyName), n.maxBetAmount != null && n.hasOwnProperty("maxBetAmount") && (o.maxBetAmount = n.maxBetAmount), n.minBetAmount != null && n.hasOwnProperty("minBetAmount") && (o.minBetAmount = n.minBetAmount), n.maxProfitAmount != null && n.hasOwnProperty("maxProfitAmount") && (o.maxProfitAmount = n.maxProfitAmount), o
        }, t.prototype.toJSON = function() {
            return this.constructor.toObject(this, C.util.toJSONOptions)
        }, t
    }(), e
})(), O.GameConfig = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.gameName = "", e.prototype.gameSocketNameSpace = "", e.prototype.version = 0, e.prototype.rtp = "", e.prototype.payTable = "", e.prototype.isSingle = !1, e.prototype.isDelete = !1, e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        return n || (n = ft.create()), t.gameName != null && Object.hasOwnProperty.call(t, "gameName") && n.uint32(10).string(t.gameName), t.gameSocketNameSpace != null && Object.hasOwnProperty.call(t, "gameSocketNameSpace") && n.uint32(18).string(t.gameSocketNameSpace), t.version != null && Object.hasOwnProperty.call(t, "version") && n.uint32(24).sint32(t.version), t.rtp != null && Object.hasOwnProperty.call(t, "rtp") && n.uint32(34).string(t.rtp), t.payTable != null && Object.hasOwnProperty.call(t, "payTable") && n.uint32(42).string(t.payTable), t.isSingle != null && Object.hasOwnProperty.call(t, "isSingle") && n.uint32(48).bool(t.isSingle), t.isDelete != null && Object.hasOwnProperty.call(t, "isDelete") && n.uint32(56).bool(t.isDelete), n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.GameConfig;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.gameName = t.string();
                    break;
                case 2:
                    o.gameSocketNameSpace = t.string();
                    break;
                case 3:
                    o.version = t.sint32();
                    break;
                case 4:
                    o.rtp = t.string();
                    break;
                case 5:
                    o.payTable = t.string();
                    break;
                case 6:
                    o.isSingle = t.bool();
                    break;
                case 7:
                    o.isDelete = t.bool();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        return typeof t != "object" || t === null ? "object expected" : t.gameName != null && t.hasOwnProperty("gameName") && !d.isString(t.gameName) ? "gameName: string expected" : t.gameSocketNameSpace != null && t.hasOwnProperty("gameSocketNameSpace") && !d.isString(t.gameSocketNameSpace) ? "gameSocketNameSpace: string expected" : t.version != null && t.hasOwnProperty("version") && !d.isInteger(t.version) ? "version: integer expected" : t.rtp != null && t.hasOwnProperty("rtp") && !d.isString(t.rtp) ? "rtp: string expected" : t.payTable != null && t.hasOwnProperty("payTable") && !d.isString(t.payTable) ? "payTable: string expected" : t.isSingle != null && t.hasOwnProperty("isSingle") && typeof t.isSingle != "boolean" ? "isSingle: boolean expected" : t.isDelete != null && t.hasOwnProperty("isDelete") && typeof t.isDelete != "boolean" ? "isDelete: boolean expected" : null
    }, e.fromObject = function(t) {
        if (t instanceof O.GameConfig) return t;
        let n = new O.GameConfig;
        return t.gameName != null && (n.gameName = String(t.gameName)), t.gameSocketNameSpace != null && (n.gameSocketNameSpace = String(t.gameSocketNameSpace)), t.version != null && (n.version = 0 | t.version), t.rtp != null && (n.rtp = String(t.rtp)), t.payTable != null && (n.payTable = String(t.payTable)), t.isSingle != null && (n.isSingle = !!t.isSingle), t.isDelete != null && (n.isDelete = !!t.isDelete), n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.gameName = "", r.gameSocketNameSpace = "", r.version = 0, r.rtp = "", r.payTable = "", r.isSingle = !1, r.isDelete = !1), t.gameName != null && t.hasOwnProperty("gameName") && (r.gameName = t.gameName), t.gameSocketNameSpace != null && t.hasOwnProperty("gameSocketNameSpace") && (r.gameSocketNameSpace = t.gameSocketNameSpace), t.version != null && t.hasOwnProperty("version") && (r.version = t.version), t.rtp != null && t.hasOwnProperty("rtp") && (r.rtp = t.rtp), t.payTable != null && t.hasOwnProperty("payTable") && (r.payTable = t.payTable), t.isSingle != null && t.hasOwnProperty("isSingle") && (r.isSingle = t.isSingle), t.isDelete != null && t.hasOwnProperty("isDelete") && (r.isDelete = t.isDelete), r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e
})(), O.Init = (() => {
    function e(t) {
        if (this.betInfo = [], this.gameConfig = [], t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.betInfo = d.emptyArray, e.prototype.gameConfig = d.emptyArray, e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        if (n || (n = ft.create()), t.betInfo != null && t.betInfo.length)
            for (let r = 0; r < t.betInfo.length; ++r) O.BetInfo.Info.encode(t.betInfo[r], n.uint32(10).fork()).ldelim();
        if (t.gameConfig != null && t.gameConfig.length)
            for (let r = 0; r < t.gameConfig.length; ++r) O.GameConfig.encode(t.gameConfig[r], n.uint32(18).fork()).ldelim();
        return n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.Init;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.betInfo && o.betInfo.length || (o.betInfo = []), o.betInfo.push(O.BetInfo.Info.decode(t, t.uint32()));
                    break;
                case 2:
                    o.gameConfig && o.gameConfig.length || (o.gameConfig = []), o.gameConfig.push(O.GameConfig.decode(t, t.uint32()));
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        if (typeof t != "object" || t === null) return "object expected";
        if (t.betInfo != null && t.hasOwnProperty("betInfo")) {
            if (!Array.isArray(t.betInfo)) return "betInfo: array expected";
            for (let n = 0; n < t.betInfo.length; ++n) {
                let r = O.BetInfo.Info.verify(t.betInfo[n]);
                if (r) return "betInfo." + r
            }
        }
        if (t.gameConfig != null && t.hasOwnProperty("gameConfig")) {
            if (!Array.isArray(t.gameConfig)) return "gameConfig: array expected";
            for (let n = 0; n < t.gameConfig.length; ++n) {
                let r = O.GameConfig.verify(t.gameConfig[n]);
                if (r) return "gameConfig." + r
            }
        }
        return null
    }, e.fromObject = function(t) {
        if (t instanceof O.Init) return t;
        let n = new O.Init;
        if (t.betInfo) {
            if (!Array.isArray(t.betInfo)) throw TypeError(".Init.betInfo: array expected");
            n.betInfo = [];
            for (let r = 0; r < t.betInfo.length; ++r) {
                if (typeof t.betInfo[r] != "object") throw TypeError(".Init.betInfo: object expected");
                n.betInfo[r] = O.BetInfo.Info.fromObject(t.betInfo[r])
            }
        }
        if (t.gameConfig) {
            if (!Array.isArray(t.gameConfig)) throw TypeError(".Init.gameConfig: array expected");
            n.gameConfig = [];
            for (let r = 0; r < t.gameConfig.length; ++r) {
                if (typeof t.gameConfig[r] != "object") throw TypeError(".Init.gameConfig: object expected");
                n.gameConfig[r] = O.GameConfig.fromObject(t.gameConfig[r])
            }
        }
        return n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.betInfo = [], r.gameConfig = []), t.betInfo && t.betInfo.length) {
            r.betInfo = [];
            for (let o = 0; o < t.betInfo.length; ++o) r.betInfo[o] = O.BetInfo.Info.toObject(t.betInfo[o], n)
        }
        if (t.gameConfig && t.gameConfig.length) {
            r.gameConfig = [];
            for (let o = 0; o < t.gameConfig.length; ++o) r.gameConfig[o] = O.GameConfig.toObject(t.gameConfig[o], n)
        }
        return r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e
})(), O.BetLog = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.userId = d.Long ? d.Long.fromBits(0, 0, !1) : 0, e.prototype.nickName = "", e.prototype.gameName = "", e.prototype.nonce = 0, e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.winAmount = "", e.prototype.odds = 0, e.prototype.betTime = d.Long ? d.Long.fromBits(0, 0, !1) : 0, e.prototype.distributeId = d.Long ? d.Long.fromBits(0, 0, !1) : 0, e.prototype.type = "", e.prototype.gameId = "", e.prototype.gv = "", e.prototype.bv = "", e.prototype.oddsString = "", e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        return n || (n = ft.create()), t.userId != null && Object.hasOwnProperty.call(t, "userId") && n.uint32(16).sint64(t.userId), t.nickName != null && Object.hasOwnProperty.call(t, "nickName") && n.uint32(26).string(t.nickName), t.gameName != null && Object.hasOwnProperty.call(t, "gameName") && n.uint32(34).string(t.gameName), t.nonce != null && Object.hasOwnProperty.call(t, "nonce") && n.uint32(40).sint32(t.nonce), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(50).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(58).string(t.betAmount), t.winAmount != null && Object.hasOwnProperty.call(t, "winAmount") && n.uint32(66).string(t.winAmount), t.odds != null && Object.hasOwnProperty.call(t, "odds") && n.uint32(72).sint32(t.odds), t.betTime != null && Object.hasOwnProperty.call(t, "betTime") && n.uint32(80).sint64(t.betTime), t.distributeId != null && Object.hasOwnProperty.call(t, "distributeId") && n.uint32(96).sint64(t.distributeId), t.type != null && Object.hasOwnProperty.call(t, "type") && n.uint32(106).string(t.type), t.gameId != null && Object.hasOwnProperty.call(t, "gameId") && n.uint32(114).string(t.gameId), t.gv != null && Object.hasOwnProperty.call(t, "gv") && n.uint32(122).string(t.gv), t.bv != null && Object.hasOwnProperty.call(t, "bv") && n.uint32(130).string(t.bv), t.oddsString != null && Object.hasOwnProperty.call(t, "oddsString") && n.uint32(138).string(t.oddsString), n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.BetLog;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 2:
                    o.userId = t.sint64();
                    break;
                case 3:
                    o.nickName = t.string();
                    break;
                case 4:
                    o.gameName = t.string();
                    break;
                case 5:
                    o.nonce = t.sint32();
                    break;
                case 6:
                    o.currencyName = t.string();
                    break;
                case 7:
                    o.betAmount = t.string();
                    break;
                case 8:
                    o.winAmount = t.string();
                    break;
                case 9:
                    o.odds = t.sint32();
                    break;
                case 10:
                    o.betTime = t.sint64();
                    break;
                case 12:
                    o.distributeId = t.sint64();
                    break;
                case 13:
                    o.type = t.string();
                    break;
                case 14:
                    o.gameId = t.string();
                    break;
                case 15:
                    o.gv = t.string();
                    break;
                case 16:
                    o.bv = t.string();
                    break;
                case 17:
                    o.oddsString = t.string();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        return typeof t != "object" || t === null ? "object expected" : t.userId != null && t.hasOwnProperty("userId") && !(d.isInteger(t.userId) || t.userId && d.isInteger(t.userId.low) && d.isInteger(t.userId.high)) ? "userId: integer|Long expected" : t.nickName != null && t.hasOwnProperty("nickName") && !d.isString(t.nickName) ? "nickName: string expected" : t.gameName != null && t.hasOwnProperty("gameName") && !d.isString(t.gameName) ? "gameName: string expected" : t.nonce != null && t.hasOwnProperty("nonce") && !d.isInteger(t.nonce) ? "nonce: integer expected" : t.currencyName != null && t.hasOwnProperty("currencyName") && !d.isString(t.currencyName) ? "currencyName: string expected" : t.betAmount != null && t.hasOwnProperty("betAmount") && !d.isString(t.betAmount) ? "betAmount: string expected" : t.winAmount != null && t.hasOwnProperty("winAmount") && !d.isString(t.winAmount) ? "winAmount: string expected" : t.odds != null && t.hasOwnProperty("odds") && !d.isInteger(t.odds) ? "odds: integer expected" : t.betTime != null && t.hasOwnProperty("betTime") && !(d.isInteger(t.betTime) || t.betTime && d.isInteger(t.betTime.low) && d.isInteger(t.betTime.high)) ? "betTime: integer|Long expected" : t.distributeId != null && t.hasOwnProperty("distributeId") && !(d.isInteger(t.distributeId) || t.distributeId && d.isInteger(t.distributeId.low) && d.isInteger(t.distributeId.high)) ? "distributeId: integer|Long expected" : t.type != null && t.hasOwnProperty("type") && !d.isString(t.type) ? "type: string expected" : t.gameId != null && t.hasOwnProperty("gameId") && !d.isString(t.gameId) ? "gameId: string expected" : t.gv != null && t.hasOwnProperty("gv") && !d.isString(t.gv) ? "gv: string expected" : t.bv != null && t.hasOwnProperty("bv") && !d.isString(t.bv) ? "bv: string expected" : t.oddsString != null && t.hasOwnProperty("oddsString") && !d.isString(t.oddsString) ? "oddsString: string expected" : null
    }, e.fromObject = function(t) {
        if (t instanceof O.BetLog) return t;
        let n = new O.BetLog;
        return t.userId != null && (d.Long ? (n.userId = d.Long.fromValue(t.userId)).unsigned = !1 : typeof t.userId == "string" ? n.userId = parseInt(t.userId, 10) : typeof t.userId == "number" ? n.userId = t.userId : typeof t.userId == "object" && (n.userId = new d.LongBits(t.userId.low >>> 0, t.userId.high >>> 0).toNumber())), t.nickName != null && (n.nickName = String(t.nickName)), t.gameName != null && (n.gameName = String(t.gameName)), t.nonce != null && (n.nonce = 0 | t.nonce), t.currencyName != null && (n.currencyName = String(t.currencyName)), t.betAmount != null && (n.betAmount = String(t.betAmount)), t.winAmount != null && (n.winAmount = String(t.winAmount)), t.odds != null && (n.odds = 0 | t.odds), t.betTime != null && (d.Long ? (n.betTime = d.Long.fromValue(t.betTime)).unsigned = !1 : typeof t.betTime == "string" ? n.betTime = parseInt(t.betTime, 10) : typeof t.betTime == "number" ? n.betTime = t.betTime : typeof t.betTime == "object" && (n.betTime = new d.LongBits(t.betTime.low >>> 0, t.betTime.high >>> 0).toNumber())), t.distributeId != null && (d.Long ? (n.distributeId = d.Long.fromValue(t.distributeId)).unsigned = !1 : typeof t.distributeId == "string" ? n.distributeId = parseInt(t.distributeId, 10) : typeof t.distributeId == "number" ? n.distributeId = t.distributeId : typeof t.distributeId == "object" && (n.distributeId = new d.LongBits(t.distributeId.low >>> 0, t.distributeId.high >>> 0).toNumber())), t.type != null && (n.type = String(t.type)), t.gameId != null && (n.gameId = String(t.gameId)), t.gv != null && (n.gv = String(t.gv)), t.bv != null && (n.bv = String(t.bv)), t.oddsString != null && (n.oddsString = String(t.oddsString)), n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        if (n.defaults) {
            if (d.Long) {
                let o = new d.Long(0, 0, !1);
                r.userId = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o
            } else r.userId = n.longs === String ? "0" : 0;
            if (r.nickName = "", r.gameName = "", r.nonce = 0, r.currencyName = "", r.betAmount = "", r.winAmount = "", r.odds = 0, d.Long) {
                let o = new d.Long(0, 0, !1);
                r.betTime = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o
            } else r.betTime = n.longs === String ? "0" : 0;
            if (d.Long) {
                let o = new d.Long(0, 0, !1);
                r.distributeId = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o
            } else r.distributeId = n.longs === String ? "0" : 0;
            r.type = "", r.gameId = "", r.gv = "", r.bv = "", r.oddsString = ""
        }
        return t.userId != null && t.hasOwnProperty("userId") && (typeof t.userId == "number" ? r.userId = n.longs === String ? String(t.userId) : t.userId : r.userId = n.longs === String ? d.Long.prototype.toString.call(t.userId) : n.longs === Number ? new d.LongBits(t.userId.low >>> 0, t.userId.high >>> 0).toNumber() : t.userId), t.nickName != null && t.hasOwnProperty("nickName") && (r.nickName = t.nickName), t.gameName != null && t.hasOwnProperty("gameName") && (r.gameName = t.gameName), t.nonce != null && t.hasOwnProperty("nonce") && (r.nonce = t.nonce), t.currencyName != null && t.hasOwnProperty("currencyName") && (r.currencyName = t.currencyName), t.betAmount != null && t.hasOwnProperty("betAmount") && (r.betAmount = t.betAmount), t.winAmount != null && t.hasOwnProperty("winAmount") && (r.winAmount = t.winAmount), t.odds != null && t.hasOwnProperty("odds") && (r.odds = t.odds), t.betTime != null && t.hasOwnProperty("betTime") && (typeof t.betTime == "number" ? r.betTime = n.longs === String ? String(t.betTime) : t.betTime : r.betTime = n.longs === String ? d.Long.prototype.toString.call(t.betTime) : n.longs === Number ? new d.LongBits(t.betTime.low >>> 0, t.betTime.high >>> 0).toNumber() : t.betTime), t.distributeId != null && t.hasOwnProperty("distributeId") && (typeof t.distributeId == "number" ? r.distributeId = n.longs === String ? String(t.distributeId) : t.distributeId : r.distributeId = n.longs === String ? d.Long.prototype.toString.call(t.distributeId) : n.longs === Number ? new d.LongBits(t.distributeId.low >>> 0, t.distributeId.high >>> 0).toNumber() : t.distributeId), t.type != null && t.hasOwnProperty("type") && (r.type = t.type), t.gameId != null && t.hasOwnProperty("gameId") && (r.gameId = t.gameId), t.gv != null && t.hasOwnProperty("gv") && (r.gv = t.gv), t.bv != null && t.hasOwnProperty("bv") && (r.bv = t.bv), t.oddsString != null && t.hasOwnProperty("oddsString") && (r.oddsString = t.oddsString), r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e
})();
class Io extends vn {
    constructor(t, n) {
        super(t, n), this.oddsScale = 1e4, this.amountScale = 1e4, this.gameUrl = "", this.betLog$ = new U([]), this.jackpot$ = new U([]), this.betInfo$ = new U([]), this.gameConfig$ = new U([]), this.betEncoder = $().encode(O.Bet), this.betResultDecoder = $().decode(O.BetResult), this.allbet = $().decodeBind(r => {
            this.betLog$.next(T(N({}, r), {
                betAmount: r.betAmount,
                winAmount: r.winAmount ? r.winAmount : "0",
                odds: r.odds || 0,
                betTime: r.betTime.toString(),
                distributeId: r.distributeId.toString()
            }))
        }, O.BetLog), this.connection = this.connection$.asObservable()
    }
    init() {
        return E(this, null, function*() {
            try {
                const t = yield this.request("init").then(o => $().decode(O.Init)(o)), {
                    betInfo: n,
                    gameConfig: r
                } = t;
                n && (this.betInfo$.next(n), this.jackpot$.next(n.map(o => ({
                    currencyName: o.currencyName,
                    jackpotAmount: 0,
                    maxBetAmount: Number(o.maxBetAmount),
                    minBetAmount: Number(o.minBetAmount),
                    maxProfitAmount: Number(o.maxProfitAmount)
                })))), r && this.gameConfig$.next(r), this.socket.on("allbet", this.allbet)
            } catch (t) {}
        })
    }
    toISingleLog(t, n, r) {
        var o, i, a, s;
        return Object.assign(t, N({
            gv: t.gameValue,
            userId: n.userId,
            seedId: 0,
            betAmount: new ct(t.betAmount || 0).toString(),
            winAmount: new ct(t.winAmount || 0).toString(),
            distributeId: ((o = t == null ? void 0 : t.betId) == null ? void 0 : o.toString()) || "",
            betTime: new ct(((i = t == null ? void 0 : t.betTime) == null ? void 0 : i.toString()) || 0).toNumber(),
            nickName: (a = n.name) != null ? a : "",
            avatar: (s = n.avatar) != null ? s : "header1",
            odds: t.odds || 0
        }, r))
    }
    bet(i) {
        return E(this, arguments, function*({
            txId: t,
            currency: n,
            value: r,
            scriptId: o
        }) {
            const a = this.betEncoder({
                    frontgroundId: t,
                    currencyName: n.symbol,
                    betAmount: n.amount.toString(),
                    betValue: r,
                    scriptId: o,
                    amountType: this.bouns$.value ? 2 : 1
                }),
                s = yield this.request("bet", a);
            return $().decode(O.BetResult)(s)
        })
    }
}
class Ds extends Io {}
const Es = yr(() => {
    const [e, t] = zt({
        wagered: 0,
        profit: 0,
        winNum: 0,
        lossNum: 0,
        currencyName: "BTC",
        profits: [0]
    }), {
        store: n
    } = Qo();

    function r() {
        t({
            wagered: 0,
            profit: 0,
            winNum: 0,
            lossNum: 0,
            profits: [0]
        })
    }
    const o = {
        addData: function(i, a, s) {
            t("wagered", l => l + i), t("currencyName", s);
            const u = (a - 1) * i;
            t("profit", l => l + u), t(a >= 1 ? "winNum" : "lossNum", l => l + 1), t("profits", l => [...l, e.profit])
        },
        clearData: r
    };
    return V(() => {
        n.activeCurrency.currencyName !== e.currencyName && r()
    }), [e, o]
});

function wn() {
    return Es
}

function Oo(e = 15, t = 50) {
    const [n, r] = M([]), [o, i] = M([]), a = ot(() => n().map(s => s.profit));
    return V(() => {
        let s = setInterval(() => {
            if (n().length > 0) {
                const u = n().pop();
                u && i(l => (l.length >= t && l.pop(), [u, ...l]))
            }
        }, 1e3);
        R(() => {
            s && clearInterval(s)
        })
    }), {
        queue: o,
        addItem: s => {
            const u = T(N({}, s), {
                profit: s.profit
            });
            r(l => {
                if (l.findIndex(f => f.distributeId === s.distributeId) >= 0) return l;
                let c = [...l];
                if (l.length === 0) c = [u];
                else if (c.length + 1 < e) {
                    const f = Ke(a(), u.profit);
                    c.splice(f, 0, u)
                } else {
                    const f = l[0].profit;
                    if (u.profit > f) {
                        const b = Ke(a(), u.profit);
                        c.splice(b, 0, u), c.shift()
                    }
                }
                return c
            })
        },
        setDataQueue: i
    }
}
const So = ht(null);

function $s(e) {
    const [t] = z(e, ["game"]), {
        addData: n
    } = wn()[1], [r, o] = zt({
        myLogsFromGame: []
    }), {
        user: i
    } = oi(), [a, s] = M(hs), {
        queue: u,
        addItem: l,
        setDataQueue: c
    } = Oo(10), f = function(m, p) {
        return bt(() => ({
            queryKey: ["/game/bet/recent-bet/", {
                gameUrl: m,
                size: p()
            }],
            queryFn: Ms,
            staleTime: 0
        }))
    }(e.game.config.key, a), b = Xn(() => (f.data || []).map(S => {
        var j = S,
            {
                bv: m,
                odds: p
            } = j,
            w = Sn(j, ["bv", "odds"]);
        return T(N({}, w), {
            bv: e.game.bvMapper(m),
            odds: p / e.game.oddsScale
        })
    }), []), v = function(m, p) {
        return bt(() => ({
            queryKey: [`/game/bet/allBet/${m}`, p()],
            queryFn: Us,
            staleTime: 0
        }))
    }(e.game.config.key, a);
    V(() => {
        if (v.data) {
            const m = v.data.map(S => {
                var j = S,
                    {
                        odds: p
                    } = j,
                    w = Sn(j, ["odds"]);
                const A = t.game.getResult(T(N({}, w), {
                    odds: p / e.game.oddsScale
                }));
                return T(N({}, w), {
                    odds: p / e.game.oddsScale,
                    profit: A.profit,
                    payout: A.payout
                })
            });
            c(m)
        }
    });
    const I = ot(() => lt([...r.myLogsFromGame, ...b()], "distributeId")),
        g = new le,
        y = m => {
            const p = oe(m),
                {
                    winAmount: w,
                    betAmount: S,
                    odds: j
                } = p,
                A = Object.assign(p, {
                    winAmount: w,
                    betAmount: S,
                    odds: j / e.game.oddsScale
                });
            n(Number(S), Number(A.odds), p.currencyName), o("myLogsFromGame", x => lt([A, ...x], "distributeId")), g.next(A)
        };
    return V(() => {
        const m = t.game instanceof Ds,
            p = e.game.betLog$.pipe(Jn(w => !Yr(w)), hn(w => Array.isArray(w) ? de(w).pipe(Cs(400)) : ur(w)), me(w => w.userId !== i.userId || m ? ur(null) : g.asObservable().pipe(Jn(S => S.userId === w.userId && S.distributeId === w.distributeId), Wn(1)))).subscribe(w => {
                const S = T(N({}, w), {
                        odds: w.odds / e.game.oddsScale
                    }),
                    {
                        profit: j,
                        payout: A
                    } = t.game.getResult(S);
                l(T(N({}, S), {
                    profit: j,
                    payout: A
                }))
            });
        R(() => {
            p.unsubscribe(), e.game.betLog$.next([])
        })
    }), P(So.Provider, {
        get value() {
            return T(N({}, t), {
                logs: u,
                myLogs: I,
                size: a,
                setSize: s,
                addLog: y,
                allBetQuery: v
            })
        },
        get children() {
            return e.children
        }
    })
}

function Vu() {
    return vt(So)
}

function Ms(t) {
    return E(this, arguments, function*({
        queryKey: e
    }) {
        return yield mn(), yield Q().post("/game/bet/recent-bet", e[1])
    })
}

function Us(t) {
    return E(this, arguments, function*({
        queryKey: e
    }) {
        return yield Q().get(e[0])
    })
}
const lr = C.Reader,
    Fs = C.Writer,
    ut = C.util,
    dn = C.roots.MultiGame || (C.roots.MultiGame = {});
dn.BetLog = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.gameId = ut.Long ? ut.Long.fromBits(0, 0, !1) : 0, e.prototype.userId = ut.Long ? ut.Long.fromBits(0, 0, !1) : 0, e.prototype.nickName = "", e.prototype.gameName = "", e.prototype.nonce = 0, e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.winAmount = "", e.prototype.odds = 0, e.prototype.betTime = ut.Long ? ut.Long.fromBits(0, 0, !1) : 0, e.prototype.type = "", e.prototype.distributeId = ut.Long ? ut.Long.fromBits(0, 0, !1) : 0, e.prototype.oddsString = "", e.prototype.gv = "", e.encode = function(t, n) {
        return n || (n = Fs.create()), t.gameId != null && Object.hasOwnProperty.call(t, "gameId") && n.uint32(8).sint64(t.gameId), t.userId != null && Object.hasOwnProperty.call(t, "userId") && n.uint32(24).sint64(t.userId), t.nickName != null && Object.hasOwnProperty.call(t, "nickName") && n.uint32(34).string(t.nickName), t.gameName != null && Object.hasOwnProperty.call(t, "gameName") && n.uint32(42).string(t.gameName), t.nonce != null && Object.hasOwnProperty.call(t, "nonce") && n.uint32(48).sint32(t.nonce), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(58).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(66).string(t.betAmount), t.winAmount != null && Object.hasOwnProperty.call(t, "winAmount") && n.uint32(74).string(t.winAmount), t.odds != null && Object.hasOwnProperty.call(t, "odds") && n.uint32(80).sint32(t.odds), t.betTime != null && Object.hasOwnProperty.call(t, "betTime") && n.uint32(88).sint64(t.betTime), t.type != null && Object.hasOwnProperty.call(t, "type") && n.uint32(106).string(t.type), t.distributeId != null && Object.hasOwnProperty.call(t, "distributeId") && n.uint32(112).sint64(t.distributeId), t.oddsString != null && Object.hasOwnProperty.call(t, "oddsString") && n.uint32(122).string(t.oddsString), t.gv != null && Object.hasOwnProperty.call(t, "gv") && n.uint32(130).string(t.gv), n
    }, e.decode = function(t, n) {
        t instanceof lr || (t = lr.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new dn.BetLog;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.gameId = t.sint64();
                    break;
                case 3:
                    o.userId = t.sint64();
                    break;
                case 4:
                    o.nickName = t.string();
                    break;
                case 5:
                    o.gameName = t.string();
                    break;
                case 6:
                    o.nonce = t.sint32();
                    break;
                case 7:
                    o.currencyName = t.string();
                    break;
                case 8:
                    o.betAmount = t.string();
                    break;
                case 9:
                    o.winAmount = t.string();
                    break;
                case 10:
                    o.odds = t.sint32();
                    break;
                case 11:
                    o.betTime = t.sint64();
                    break;
                case 13:
                    o.type = t.string();
                    break;
                case 14:
                    o.distributeId = t.sint64();
                    break;
                case 15:
                    o.oddsString = t.string();
                    break;
                case 16:
                    o.gv = t.string();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e
})();
const dr = ["fish-prawn-crab", "sicbo-multiplayer"],
    qs = () => !0,
    Ao = ht(null);

function Gs(t) {
    return E(this, arguments, function*({
        queryKey: e
    }) {
        return yield mn(), Q().post(e[0], e[1])
    })
}

function Rs(t) {
    return E(this, arguments, function*({
        queryKey: e
    }) {
        return (yield Q().post(e[0], e[1])).list.map(n => {
            const r = JSON.parse(n.gameDetail),
                {
                    hash: o,
                    value: i,
                    rate: a,
                    diceResults: s
                } = r;
            return {
                gameId: n.gameId,
                hash: o,
                value: i,
                maxRate: a || 0,
                points: s || []
            }
        })
    })
}

function zs(e) {
    const t = hr({
            logFilter: qs
        }, e),
        [n] = z(t, ["game"]),
        {
            addData: r
        } = wn()[1],
        [o, i] = zt({
            logsFromGame: [],
            myLogsFromGame: []
        }),
        [a, s] = M(20),
        u = (l = t.game.config.key, bt(() => ({
            queryKey: ["/game/bet/multi/history", {
                gameUrl: l,
                page: 1,
                pageSize: 50
            }],
            queryFn: Rs,
            staleTime: 0
        })));
    var l;
    const c = function(y, m) {
            return bt(() => ({
                queryKey: ["/game/bet/recent-bet/", {
                    gameUrl: y,
                    size: m()
                }],
                queryFn: Gs,
                staleTime: 0
            }))
        }(t.game.config.key, a),
        f = Xn(() => (c.data || []).map(y => T(N({}, y), {
            odds: y.odds / n.game.oddsScale
        })), []),
        b = ot(() => lt([...o.myLogsFromGame, ...f()], "distributeId")),
        v = ot(() => {
            var y;
            return es(lt([...o.logsFromGame, ...((y = u.data) == null ? void 0 : y.map(m => {
                var p;
                return t.game.config.key === "patti" ? T(N({}, m), {
                    value: m != null && m.hash ? (p = Ze(m.hash)) == null ? void 0 : p.map(w => Qe(w).txt).join(",") : ""
                }) : dr.includes(t.game.config.key) ? T(N({}, m), {
                    value: `${Je(m==null?void 0:m.points)}`
                }) : m
            })) || []], "gameId"), "gameId", "desc")
        }),
        I = y => {
            const m = oe(y),
                {
                    winAmount: p,
                    betAmount: w
                } = m.bets[0],
                S = Object.assign(m, {
                    winAmount: Number(p),
                    betAmount: Number(w),
                    odds: Number(m.odds) / n.game.oddsScale
                });
            i("myLogsFromGame", j => lt([S, ...j], "distributeId").filter(t.logFilter))
        },
        g = vr(t.game.settle$);
    return V(() => {
        const y = g();
        if (y) {
            const m = y.roundId ? y.roundId.toNumber().toString() : y.gameId.toNumber().toString(),
                p = t.game.config.key === "patti" ? Ze(y.hash) : [],
                w = t.game.config.key === "patti" && (p == null ? void 0 : p.length) > 0 ? p == null ? void 0 : p.map(F => Qe(F).txt).join(",") : void 0,
                S = dr.includes(t.game.config.key) && `${Je(y==null?void 0:y.points)}`,
                j = y.betValue || y.value || w || S || void 0,
                A = t.game.config.key === "double" && y.value === 0 ? 0 : j,
                x = T(N({}, y), {
                    gameId: m,
                    value: A
                });
            i("logsFromGame", F => [x, ...Array.isArray(F) ? F : []])
        }
    }), V(() => {
        const y = $().decodeBind(w => {
                const {
                    betAmount: S,
                    odds: j,
                    currencyName: A
                } = w;
                r(Number(S), Number(j / n.game.oddsScale), A), i("myLogsFromGame", x => lt([T(N({}, w), {
                    gameId: w.gameId.toNumber().toString(),
                    betTime: w.betTime.toNumber(),
                    betAmount: Number(w.betAmount),
                    winAmount: Number(w.winAmount),
                    odds: w.odds / n.game.oddsScale,
                    distributeId: w.distributeId.toString(),
                    gv: JSON.parse(w.gv) || {}
                }), ...x].filter(t.logFilter), "distributeId"))
            }, dn.BetLog),
            m = $().socket("/multi" + t.game.option$.value.namespace);
        m.connect();
        const p = m.on("multilmybetlog", y);
        R(() => {
            p.off("multilmybetlog")
        })
    }), P(Ao.Provider, {
        get value() {
            return T(N({}, n), {
                logs: v,
                myLogs: b,
                size: a,
                setSize: s,
                addLog: I
            })
        },
        get children() {
            return t.children
        }
    })
}

function Du() {
    return vt(Ao)
}
ai({}, {
    CloseButton: () => No,
    Description: () => Po,
    List: () => pe,
    ProgressFill: () => xo,
    ProgressTrack: () => To,
    Region: () => be,
    Root: () => Bo,
    Title: () => _o,
    Toast: () => Zs,
    toaster: () => Lo
});
var jo = ht();

function In() {
    const e = vt(jo);
    if (e === void 0) throw new Error("[kobalte]: `useToastContext` must be used within a `Toast.Root` component");
    return e
}

function No(e) {
    const t = In(),
        [n, r] = z(e, ["aria-label", "onClick"]);
    return P(Xo, Z({
        get "aria-label" () {
            return n["aria-label"] || t.translations().close
        },
        onClick: o => {
            rt(o, n.onClick), t.close()
        }
    }, r))
}

function Po(e) {
    const t = In(),
        n = pn({
            id: t.generateId("description")
        }, e),
        [r, o] = z(n, ["id"]);
    return V(() => R(t.registerDescriptionId(r.id))), P(It, Z({
        as: "div",
        get id() {
            return r.id
        }
    }, o))
}
var ko = ht();

function fe() {
    const e = vt(ko);
    if (e === void 0) throw new Error("[kobalte]: `useToastRegionContext` must be used within a `Toast.Region` component");
    return e
}

function pe(e) {
    let t;
    const n = fe(),
        [r, o] = z(e, ["ref", "onFocusIn", "onFocusOut", "onPointerMove", "onPointerLeave"]);
    return V(Dt([() => t, () => n.hotkey()], ([i, a]) => {
        if (zo || !i) return;
        const s = we(i),
            u = l => {
                a.every(c => l[c] || l.code === c) && ci(i)
            };
        s.addEventListener("keydown", u), R(() => s.removeEventListener("keydown", u))
    })), V(() => {
        if (!n.pauseOnPageIdle()) return;
        const i = si(t);
        i.addEventListener("blur", n.pauseAllTimer), i.addEventListener("focus", n.resumeAllTimer), R(() => {
            i.removeEventListener("blur", n.pauseAllTimer), i.removeEventListener("focus", n.resumeAllTimer)
        })
    }), P(It, Z({
        as: "ol",
        ref(i) {
            var a = kr(s => t = s, r.ref);
            typeof a == "function" && a(i)
        },
        tabIndex: -1,
        onFocusIn: i => {
            rt(i, r.onFocusIn), n.pauseOnInteraction() && !n.isPaused() && n.pauseAllTimer()
        },
        onFocusOut: i => {
            rt(i, r.onFocusOut), Ie(t, i.relatedTarget) || n.resumeAllTimer()
        },
        onPointerMove: i => {
            rt(i, r.onPointerMove), n.pauseOnInteraction() && !n.isPaused() && n.pauseAllTimer()
        },
        onPointerLeave: i => {
            rt(i, r.onPointerLeave), Ie(t, we(t).activeElement) || n.resumeAllTimer()
        }
    }, o, {
        get children() {
            return P(wr, {
                get each() {
                    return n.toasts()
                },
                children: i => i.toastComponent({
                    get toastId() {
                        return i.id
                    }
                })
            })
        }
    }))
}

function xo(e) {
    const t = fe(),
        n = In(),
        [r, o] = z(e, ["style"]),
        [i, a] = M(100);
    let s = 0;
    return V(() => {
        if (t.isPaused() || n.isPersistent()) return;
        const u = setInterval(() => {
            const l = new Date().getTime() - n.closeTimerStartTime() + s,
                c = Math.trunc(100 - l / n.duration() * 100);
            a(c < 0 ? 0 : c)
        });
        R(() => {
            s += new Date().getTime() - n.closeTimerStartTime(), clearInterval(u)
        })
    }), P(It, Z({
        as: "div",
        get style() {
            return N({
                "--kb-toast-progress-fill-width": `${i()}%`
            }, r.style)
        }
    }, o))
}

function To(e) {
    return P(It, Z({
        as: "div",
        "aria-hidden": "true",
        role: "presentation"
    }, e))
}
var [Ln, Vt] = zt({
    toasts: []
}), yt = {
    toasts: () => Ln.toasts,
    add: function(e) {
        Vt("toasts", t => [...t, e])
    },
    get: function(e) {
        return Ln.toasts.find(t => t.id === e)
    },
    update: function(e, t) {
        const n = Ln.toasts.findIndex(r => r.id === e);
        n !== -1 && Vt("toasts", r => [...r.slice(0, n), t, ...r.slice(n + 1)])
    },
    dismiss: function(e) {
        Vt("toasts", t => t.id === e, "dismiss", !0)
    },
    remove: function(e) {
        Vt("toasts", t => t.filter(n => n.id !== e))
    },
    clear: function() {
        Vt("toasts", [])
    }
}, mr = "{hotkey}", Ks = {
    close: "Close"
}, Js = {
    notifications: e => `Notifications (${e})`
};

function be(e) {
    const t = pn({
            id: `toast-region-${Ir()}`,
            hotkey: ["altKey", "KeyT"],
            duration: 5e3,
            limit: 3,
            swipeDirection: "right",
            swipeThreshold: 50,
            pauseOnInteraction: !0,
            pauseOnPageIdle: !0,
            topLayer: !0,
            translations: Js
        }, e),
        [n, r] = z(t, ["translations", "style", "hotkey", "duration", "limit", "swipeDirection", "swipeThreshold", "pauseOnInteraction", "pauseOnPageIdle", "topLayer", "aria-label", "regionId"]),
        o = ot(() => yt.toasts().filter(c => c.region === n.regionId).slice(0, n.limit)),
        [i, a] = M(!1),
        s = () => (n["aria-label"] || n.translations.notifications(mr)).replace(mr, n.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "")),
        u = () => ({
            [li]: n.topLayer ? "" : void 0
        }),
        l = {
            isPaused: i,
            toasts: o,
            hotkey: () => n.hotkey,
            duration: () => n.duration,
            swipeDirection: () => n.swipeDirection,
            swipeThreshold: () => n.swipeThreshold,
            pauseOnInteraction: () => n.pauseOnInteraction,
            pauseOnPageIdle: () => n.pauseOnPageIdle,
            pauseAllTimer: () => a(!0),
            resumeAllTimer: () => a(!1),
            generateId: xr(() => r.id)
        };
    return P(ko.Provider, {
        value: l,
        get children() {
            return P(It, Z({
                as: "div",
                role: "region",
                tabIndex: -1,
                get "aria-label" () {
                    return s()
                },
                get style() {
                    return N({
                        "pointer-events": o().length > 0 ? n.topLayer ? "auto" : void 0 : "none"
                    }, n.style)
                }
            }, u, r))
        }
    })
}
var Ws = "toast.swipeStart",
    Hs = "toast.swipeMove",
    Ys = "toast.swipeCancel",
    Qs = "toast.swipeEnd";

function Bo(e) {
    const t = fe(),
        n = pn({
            id: `toast-${Ir()}`,
            priority: "high",
            translations: Ks
        }, e),
        [r, o] = z(n, ["ref", "translations", "toastId", "style", "priority", "duration", "persistent", "onPause", "onResume", "onSwipeStart", "onSwipeMove", "onSwipeCancel", "onSwipeEnd", "onEscapeKeyDown", "onKeyDown", "onPointerDown", "onPointerMove", "onPointerUp"]),
        [i, a] = M(!0),
        [s, u] = M(),
        [l, c] = M(),
        [f, b] = M(!0),
        [v, I] = M(),
        {
            present: g
        } = ui({
            show: i,
            element: () => {
                var h;
                return (h = v()) != null ? h : null
            }
        }),
        y = ot(() => r.duration || t.duration());
    let m, p = 0,
        w = y(),
        S = null,
        j = null;
    const A = () => {
            a(!1), b(!0)
        },
        x = h => {
            h && !r.persistent && (window.clearTimeout(m), p = new Date().getTime(), m = window.setTimeout(A, h))
        },
        F = h => {
            var L;
            rt(h, r.onKeyDown), h.key === "Escape" && ((L = r.onEscapeKeyDown) == null || L.call(r, h), h.defaultPrevented || A())
        },
        mt = h => {
            rt(h, r.onPointerDown), h.button === 0 && (S = {
                x: h.clientX,
                y: h.clientY
            })
        },
        tt = h => {
            if (rt(h, r.onPointerMove), !S) return;
            const L = h.clientX - S.x,
                J = h.clientY - S.y,
                W = !!j,
                H = ["left", "right"].includes(t.swipeDirection()),
                nt = ["left", "up"].includes(t.swipeDirection()) ? Math.min : Math.max,
                at = H ? nt(0, L) : 0,
                St = H ? 0 : nt(0, J),
                On = h.pointerType === "touch" ? 10 : 2,
                Ct = {
                    x: at,
                    y: St
                },
                ge = {
                    originalEvent: h,
                    delta: Ct
                };
            if (W) {
                j = Ct, tn(Hs, r.onSwipeMove, ge);
                const {
                    x: Eo,
                    y: $o
                } = Ct;
                h.currentTarget.setAttribute("data-swipe", "move"), h.currentTarget.style.setProperty("--kb-toast-swipe-move-x", `${Eo}px`), h.currentTarget.style.setProperty("--kb-toast-swipe-move-y", `${$o}px`)
            } else fr(Ct, t.swipeDirection(), On) ? (j = Ct, tn(Ws, r.onSwipeStart, ge), h.currentTarget.setAttribute("data-swipe", "start"), h.target.setPointerCapture(h.pointerId)) : (Math.abs(L) > On || Math.abs(J) > On) && (S = null)
        },
        K = h => {
            rt(h, r.onPointerUp);
            const L = j,
                J = h.target;
            if (J.hasPointerCapture(h.pointerId) && J.releasePointerCapture(h.pointerId), j = null, S = null, L) {
                const W = h.currentTarget,
                    H = {
                        originalEvent: h,
                        delta: L
                    };
                if (fr(L, t.swipeDirection(), t.swipeThreshold())) {
                    tn(Qs, r.onSwipeEnd, H);
                    const {
                        x: nt,
                        y: at
                    } = L;
                    h.currentTarget.setAttribute("data-swipe", "end"), h.currentTarget.style.removeProperty("--kb-toast-swipe-move-x"), h.currentTarget.style.removeProperty("--kb-toast-swipe-move-y"), h.currentTarget.style.setProperty("--kb-toast-swipe-end-x", `${nt}px`), h.currentTarget.style.setProperty("--kb-toast-swipe-end-y", `${at}px`), A()
                } else tn(Ys, r.onSwipeCancel, H), h.currentTarget.setAttribute("data-swipe", "cancel"), h.currentTarget.style.removeProperty("--kb-toast-swipe-move-x"), h.currentTarget.style.removeProperty("--kb-toast-swipe-move-y"), h.currentTarget.style.removeProperty("--kb-toast-swipe-end-x"), h.currentTarget.style.removeProperty("--kb-toast-swipe-end-y");
                W.addEventListener("click", nt => nt.preventDefault(), {
                    once: !0
                })
            }
        };
    Or(() => {
        t.toasts().find(h => h.id === r.toastId && h.update) && b(!1)
    }), V(Dt(() => t.isPaused(), h => {
        var L;
        h ? (() => {
            var W;
            const J = new Date().getTime() - p;
            w -= J, window.clearTimeout(m), (W = r.onPause) == null || W.call(r)
        })() : (x(w), (L = r.onResume) == null || L.call(r))
    }, {
        defer: !0
    })), V(Dt([i, y], ([h, L]) => {
        h && !t.isPaused() && x(L)
    })), V(Dt(() => {
        var h;
        return (h = yt.get(r.toastId)) == null ? void 0 : h.dismiss
    }, h => h && A())), V(Dt(() => g(), h => !h && void yt.remove(r.toastId)));
    const Ht = {
        translations: () => r.translations,
        close: A,
        duration: y,
        isPersistent: () => {
            var h;
            return (h = r.persistent) != null ? h : !1
        },
        closeTimerStartTime: () => p,
        generateId: xr(() => o.id),
        registerTitleId: Oe(u),
        registerDescriptionId: Oe(c)
    };
    return P(Ko, {
        get when() {
            return g()
        },
        get children() {
            return P(jo.Provider, {
                value: Ht,
                get children() {
                    return P(It, Z({
                        as: "li",
                        ref(h) {
                            var L = kr(I, r.ref);
                            typeof L == "function" && L(h)
                        },
                        role: "status",
                        tabIndex: 0,
                        get style() {
                            return N({
                                animation: f() ? void 0 : "none",
                                "user-select": "none",
                                "touch-action": "none"
                            }, r.style)
                        },
                        get "aria-live" () {
                            return r.priority === "high" ? "assertive" : "polite"
                        },
                        "aria-atomic": "true",
                        get "aria-labelledby" () {
                            return s()
                        },
                        get "aria-describedby" () {
                            return l()
                        },
                        get "data-opened" () {
                            return i() ? "" : void 0
                        },
                        get "data-closed" () {
                            return i() ? void 0 : ""
                        },
                        get "data-swipe-direction" () {
                            return t.swipeDirection()
                        },
                        onKeyDown: F,
                        onPointerDown: mt,
                        onPointerMove: tt,
                        onPointerUp: K
                    }, o))
                }
            })
        }
    })
}

function fr(e, t, n = 0) {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}

function tn(e, t, n) {
    const r = n.originalEvent.currentTarget,
        o = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && r.addEventListener(e, t, {
        once: !0
    }), r.dispatchEvent(o)
}

function _o(e) {
    const t = In(),
        n = pn({
            id: t.generateId("title")
        }, e),
        [r, o] = z(n, ["id"]);
    return V(() => R(t.registerTitleId(r.id))), P(It, Z({
        as: "div",
        get id() {
            return r.id
        }
    }, o))
}
var Xs = 0;

function pr(e, t) {
    const n = Xs++;
    return yt.add({
        id: n,
        toastComponent: e,
        dismiss: !1,
        update: !1,
        region: t == null ? void 0 : t.region
    }), n
}

function Cn(e, t) {
    yt.update(e, {
        id: e,
        toastComponent: t,
        dismiss: !1,
        update: !0
    })
}
var Lo = {
        show: pr,
        update: Cn,
        promise: function(e, t, n) {
            const r = pr(o => t({
                get toastId() {
                    return o.toastId
                },
                state: "pending"
            }), n);
            return (di(e) ? e() : e).then(o => Cn(r, i => t({
                get toastId() {
                    return i.toastId
                },
                state: "fulfilled",
                data: o
            }))).catch(o => Cn(r, i => t({
                get toastId() {
                    return i.toastId
                },
                state: "rejected",
                error: o
            }))), r
        },
        dismiss: function(e) {
            return yt.dismiss(e), e
        },
        clear: function() {
            yt.clear()
        }
    },
    Zs = Object.assign(Bo, {
        CloseButton: No,
        Description: Po,
        List: pe,
        ProgressFill: xo,
        ProgressTrack: To,
        Region: be,
        Title: _o,
        toaster: Lo
    });
const tu = Zo("fixed z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-2 sm:flex-col md:max-w-[420px]", {
        variants: {
            regionId: {
                "top-left": "top-0 left-0",
                "top-center": "top-0 left-1/2 -translate-x-1/2",
                "top-right": "top-0 right-0",
                "bottom-left": "bottom-0 left-0",
                "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
                "bottom-right": "bottom-0 right-0",
                center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            }
        },
        defaultVariants: {
            regionId: "bottom-left"
        }
    }),
    nu = e => {
        const [t, n] = z(e, ["class"]), r = ["top-left", "top-right", "top-center", "bottom-left", "bottom-center", "bottom-right", "center"];
        return P(Jo, {
            get children() {
                return P(wr, {
                    each: r,
                    children: o => P(be, {
                        regionId: o,
                        limit: 5,
                        get children() {
                            return P(pe, Z({
                                get class() {
                                    return ii(tu({
                                        regionId: o
                                    }), t.class)
                                }
                            }, n))
                        }
                    })
                })
            }
        })
    },
    At = C.Reader,
    Vn = C.Writer,
    G = C.util,
    et = C.roots.gameSlots || (C.roots.gameSlots = {});
et.MyBetLog = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.gameId = "", e.prototype.userId = G.Long ? G.Long.fromBits(0, 0, !1) : 0, e.prototype.nickName = "", e.prototype.gameName = "", e.prototype.nonce = 0, e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.winAmount = "", e.prototype.odds = 0, e.prototype.betTime = G.Long ? G.Long.fromBits(0, 0, !1) : 0, e.prototype.type = "", e.prototype.distributeId = G.Long ? G.Long.fromBits(0, 0, !1) : 0, e.prototype.oddsString = "", e.encode = function(t, n) {
        return n || (n = Vn.create()), t.gameId != null && Object.hasOwnProperty.call(t, "gameId") && n.uint32(10).string(t.gameId), t.userId != null && Object.hasOwnProperty.call(t, "userId") && n.uint32(24).sint64(t.userId), t.nickName != null && Object.hasOwnProperty.call(t, "nickName") && n.uint32(34).string(t.nickName), t.gameName != null && Object.hasOwnProperty.call(t, "gameName") && n.uint32(42).string(t.gameName), t.nonce != null && Object.hasOwnProperty.call(t, "nonce") && n.uint32(48).sint32(t.nonce), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(58).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(66).string(t.betAmount), t.winAmount != null && Object.hasOwnProperty.call(t, "winAmount") && n.uint32(74).string(t.winAmount), t.odds != null && Object.hasOwnProperty.call(t, "odds") && n.uint32(80).sint32(t.odds), t.betTime != null && Object.hasOwnProperty.call(t, "betTime") && n.uint32(88).sint64(t.betTime), t.type != null && Object.hasOwnProperty.call(t, "type") && n.uint32(106).string(t.type), t.distributeId != null && Object.hasOwnProperty.call(t, "distributeId") && n.uint32(112).sint64(t.distributeId), t.oddsString != null && Object.hasOwnProperty.call(t, "oddsString") && n.uint32(122).string(t.oddsString), n
    }, e.decode = function(t, n) {
        t instanceof At || (t = At.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new et.MyBetLog;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.gameId = t.string();
                    break;
                case 3:
                    o.userId = t.sint64();
                    break;
                case 4:
                    o.nickName = t.string();
                    break;
                case 5:
                    o.gameName = t.string();
                    break;
                case 6:
                    o.nonce = t.sint32();
                    break;
                case 7:
                    o.currencyName = t.string();
                    break;
                case 8:
                    o.betAmount = t.string();
                    break;
                case 9:
                    o.winAmount = t.string();
                    break;
                case 10:
                    o.odds = t.sint32();
                    break;
                case 11:
                    o.betTime = t.sint64();
                    break;
                case 13:
                    o.type = t.string();
                    break;
                case 14:
                    o.distributeId = t.sint64();
                    break;
                case 15:
                    o.oddsString = t.string();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e
})(), et.AllBetLog = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.userId = G.Long ? G.Long.fromBits(0, 0, !1) : 0, e.prototype.nickName = "", e.prototype.gameName = "", e.prototype.nonce = 0, e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.winAmount = "", e.prototype.odds = 0, e.prototype.betTime = G.Long ? G.Long.fromBits(0, 0, !1) : 0, e.prototype.distributeId = G.Long ? G.Long.fromBits(0, 0, !1) : 0, e.prototype.type = "", e.prototype.oddsString = "", e.encode = function(t, n) {
        return n || (n = Vn.create()), t.userId != null && Object.hasOwnProperty.call(t, "userId") && n.uint32(16).sint64(t.userId), t.nickName != null && Object.hasOwnProperty.call(t, "nickName") && n.uint32(26).string(t.nickName), t.gameName != null && Object.hasOwnProperty.call(t, "gameName") && n.uint32(34).string(t.gameName), t.nonce != null && Object.hasOwnProperty.call(t, "nonce") && n.uint32(40).sint32(t.nonce), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(50).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(58).string(t.betAmount), t.winAmount != null && Object.hasOwnProperty.call(t, "winAmount") && n.uint32(66).string(t.winAmount), t.odds != null && Object.hasOwnProperty.call(t, "odds") && n.uint32(72).sint32(t.odds), t.betTime != null && Object.hasOwnProperty.call(t, "betTime") && n.uint32(80).sint64(t.betTime), t.distributeId != null && Object.hasOwnProperty.call(t, "distributeId") && n.uint32(96).sint64(t.distributeId), t.type != null && Object.hasOwnProperty.call(t, "type") && n.uint32(106).string(t.type), t.oddsString != null && Object.hasOwnProperty.call(t, "oddsString") && n.uint32(114).string(t.oddsString), n
    }, e.decode = function(t, n) {
        t instanceof At || (t = At.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new et.AllBetLog;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 2:
                    o.userId = t.sint64();
                    break;
                case 3:
                    o.nickName = t.string();
                    break;
                case 4:
                    o.gameName = t.string();
                    break;
                case 5:
                    o.nonce = t.sint32();
                    break;
                case 6:
                    o.currencyName = t.string();
                    break;
                case 7:
                    o.betAmount = t.string();
                    break;
                case 8:
                    o.winAmount = t.string();
                    break;
                case 9:
                    o.odds = t.sint32();
                    break;
                case 10:
                    o.betTime = t.sint64();
                    break;
                case 12:
                    o.distributeId = t.sint64();
                    break;
                case 13:
                    o.type = t.string();
                    break;
                case 14:
                    o.oddsString = t.string();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e
})(), et.RoomIdParam = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.roomId = "", e.encode = function(t, n) {
        return n || (n = Vn.create()), t.roomId != null && Object.hasOwnProperty.call(t, "roomId") && n.uint32(10).string(t.roomId), n
    }, e.decode = function(t, n) {
        t instanceof At || (t = At.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new et.RoomIdParam;
        for (; t.pos < r;) {
            let i = t.uint32();
            i >>> 3 == 1 ? o.roomId = t.string() : t.skipType(7 & i)
        }
        return o
    }, e
})();
const eu = $().encode(et.RoomIdParam);
class Hn extends vn {
    constructor(t) {
        super(t), this.oddsScale = 1e4, this.amountScale = 1e4, this.allbet$ = new U(null), this.mybets$ = new U(null), this.isWatching = !1, this.connection = this.connection$.asObservable()
    }
    init() {}
}
const Yn = class on extends Hn {
    constructor() {
        super(Nn), this.gameUnique = "", this.config = Nn, this.mybets$ = new U([]), this.allbet$ = new U([]), this.bet$ = new U(null), this.jackpot$ = new U([]), this.onMybet = $().decodeBind(t => {
            this.mybets$.next([T(N({}, t), {
                distributeId: t.distributeId.toString(),
                odds: Number(t.oddsString) || 0
            }), ...this.mybets$.value].slice(0, 20))
        }, et.MyBetLog), this.onAllbet = $().decodeBind(t => {
            this.allbet$.next(T(N({}, t), {
                distributeId: t.distributeId.toString(),
                odds: Number(t.oddsString) || 0
            }))
        }, et.AllBetLog), this._onConnect = () => {
            this.initGame(), this.loadMybet(), this.loadAllbet()
        }, this.config = Nn
    }
    isWin(t) {
        return !1
    }
    getResult(t, ...n) {
        return {
            payout: 0,
            profit: 0
        }
    }
    bvMapper(t) {
        return t
    }
    calcMaxProfit(t) {
        return new ct(0)
    }
    watch(t) {
        return E(this, null, function*() {
            this.gameUnique = t, on.mybetSocket.connect(), this.socket.on("connect", this._onConnect);
            const n = yield se(t);
            n && (this.allbetSocket = $().socket(n.gameIdentity.socketNameSpace), this.allbetSocket.connect(), this.allbetSocket.on("allbet", this.onAllbet)), on.mybetSocket.on("slotsmybetlog", this.onMybet)
        })
    }
    unwatch(t) {
        this.socket.off("connect", this._onConnect), this.gameUnique = t, on.mybetSocket.off("slotsmybetlog", this.onMybet), this.socket.emit("leave", eu({
            roomId: this.gameUnique
        })), this.allbetSocket && (this.allbetSocket.off("allbet", this.onAllbet), this.allbetSocket.disconnect()), this.socket.disconnect()
    }
    play(t) {
        return E(this, null, function*() {
            return Promise.resolve()
        })
    }
    loadMybet() {
        return E(this, null, function*() {
            yield mn();
            let t = yield Q().post("/game/bet/recent-bet", {
                gameUrl: this.gameUnique
            });
            t = t.map(n => (n.odds = n.odds / this.oddsScale, n)), this.mybets$.next([...t])
        })
    }
    loadAllbet() {
        return E(this, null, function*() {
            let t = yield Q().get(`/game/bet/all-bet/${this.gameUnique}`);
            t = t.map(n => (n.odds = n.odds / this.oddsScale, n)), this.allbet$.next([...t])
        })
    }
    betValue(t) {
        return {}
    }
    initGame() {
        return E(this, null, function*() {})
    }
};
Yn.mybetSocket = $().socket("/g/data/slots"), Yn.alias = "SlotsGame";
const Eu = Vs(Yn),
    Co = ht(null);

function ru(e) {
    const [t] = z(e, ["game"]), n = t.game, {
        addData: r,
        clearData: o
    } = wn()[1], [i, a] = M(50), {
        queue: s,
        addItem: u,
        setDataQueue: l
    } = Oo(20), c = vr(n.mybets$);
    return Or(() => {
        const f = n.allbet$.pipe(Jn(b => !Yr(b))).subscribe(b => {
            if (Array.isArray(b)) {
                const v = b.map(I => T(N({}, I), {
                    profit: new ct(I.winAmount || 0).minus(new ct(I.betAmount || 0)).toNumber()
                }));
                l(v)
            } else {
                const v = new ct(b.winAmount || 0).minus(new ct(b.betAmount || 0));
                u(T(N({}, b), {
                    profit: v.toNumber()
                }))
            }
        });
        R(() => {
            f.unsubscribe()
        })
    }), V(() => {
        const f = c()[0];
        f && r(Number(f.betAmount), Number(f.odds), f.currencyName)
    }), P(Co.Provider, {
        value: {
            game: n,
            logs: s,
            myLogs: c,
            size: i,
            setSize: a
        },
        get children() {
            return e.children
        }
    })
}

function $u() {
    return vt(Co)
}
class ou extends vn {
    constructor(t) {
        super(t), this.oddsScale = 1e4, this.amountScale = 1e4, this.gameUrl = "", this.allbet$ = new U(null), this.mybets$ = new U(null), this.isWatching = !1, this.connection = this.connection$.asObservable()
    }
    init() {}
}
const iu = () => !0,
    Vo = ht(null),
    au = t => E(void 0, [t], function*({
        queryKey: e
    }) {
        return (yield Q().post("/game/bet/multi/history", {
            gameUrl: e[1],
            page: 1,
            pageSize: 50
        })).list.map(n => {
            const r = JSON.parse(n.gameDetail),
                {
                    hash: o,
                    resultValue: i,
                    rate: a,
                    clientSeed: s,
                    serverSeed: u
                } = r;
            return {
                gameId: n.gameId,
                hash: o,
                value: i,
                maxRate: a || 0,
                clientSeed: s,
                serverSeed: u
            }
        })
    }),
    su = t => E(void 0, [t], function*({
        queryKey: e
    }) {
        return yield mn(), yield Q().post("/game/bet/recent-bet/", {
            gameUrl: e[1]
        })
    });

function uu(e) {
    const t = hr({
            logFilter: iu
        }, e),
        [n] = z(e, ["game"]),
        {
            addData: r
        } = wn()[1],
        [o, i] = zt({
            logsFromGame: [],
            myLogsFromGame: []
        }),
        [a, s] = M(50),
        u = bt(() => ({
            queryKey: ["/game/bet/multi/history", e.game.config.id],
            queryFn: au
        })),
        l = bt(() => ({
            queryKey: ["/game/bet/recent-bet/", e.game.config.id, a()],
            queryFn: su
        })),
        c = Xn(() => l.data, []),
        f = ot(() => [...o.myLogsFromGame, ...c()]),
        b = ot(() => [...o.logsFromGame, ...u.data || []]),
        v = I => {
            const g = oe(I),
                {
                    winAmount: y,
                    betAmount: m
                } = g.bets[0],
                p = Object.assign(g, {
                    winAmount: Number(y),
                    betAmount: Number(m)
                });
            i("myLogsFromGame", w => lt([p, ...w], "distributeId"))
        };
    return V(() => {
        const I = $().decodeBind(m => {
                i("myLogsFromGame", p => lt([T(N({}, m), {
                    gameId: m.gameId.toNumber(),
                    betTime: m.betTime.toNumber(),
                    betAmount: Number(m.betAmount),
                    winAmount: Number(m.winAmount),
                    odds: m.odds,
                    distributeId: m.distributeId.toString()
                }), ...p], "distributeId")), r(Number(m.betAmount), Number(m.odds / 1e4), m.currencyName)
            }, dn.BetLog),
            g = $().socket("/multi" + t.game.config.namespace);
        g.connect();
        const y = g.on("multilmybetlog", I);
        R(() => {
            y.off("multilmybetlog")
        })
    }), P(Vo.Provider, {
        get value() {
            return T(N({}, n), {
                logs: b,
                myLogs: f,
                size: a,
                setSize: s,
                addLog: v
            })
        },
        get children() {
            return e.children
        }
    })
}

function Mu() {
    return vt(Vo)
}
const Do = ht();

function Uu(e) {
    const t = ot(() => {
        const n = e.game;
        if (!n) return;
        const r = JSON.parse(localStorage.getItem(`ns-${n.gameName}`)) || wo,
            o = ri(n.connection),
            [i, a] = M(en.normal),
            [s, u] = M(r.hotKeysEnable),
            [l, c] = M(!1);
        return V(f => {
            const b = Qn.login;
            return f !== !0 && R(n.online()), b
        }), V(() => {
            (n instanceof cr || n instanceof Hn) && (n.watch(e.gameUnique), R(() => {
                n.unwatch(e.gameUnique)
            }))
        }), V(() => {
            localStorage.setItem(`ns-${n.gameName}`, JSON.stringify(T(N({}, r), {
                hotKeysEnable: s()
            })))
        }), {
            game: n,
            connection: o,
            status: i,
            hotKeysEnable: s,
            setHotKeysEnable: u,
            isMovieMode: l,
            setIsMovieMode: c,
            updateGameStatus: f => {
                if (f instanceof Error) {
                    const b = f.message === "need user login" ? en.authFail : en.unknownServerError;
                    a(b)
                } else a(f)
            }
        }
    });
    return P(Do.Provider, {
        get value() {
            return t()
        },
        get children() {
            return [st(() => st(() => e.game instanceof Io)() && P($s, {
                get game() {
                    return e.game
                },
                get children() {
                    return e.children
                }
            })), st(() => st(() => e.game instanceof cr)() && P(zs, Z(e, {
                get game() {
                    return e.game
                },
                get children() {
                    return e.children
                }
            }))), st(() => st(() => e.game instanceof Hn)() && P(ru, {
                get game() {
                    return e.game
                },
                get children() {
                    return e.children
                }
            })), st(() => st(() => e.game instanceof ou)() && P(uu, {
                get game() {
                    return e.game
                },
                get children() {
                    return e.children
                }
            })), P(nu, {})]
        }
    })
}

function Fu() {
    const e = vt(Do);
    if (!e) throw new Error("useGame must be called within a GameProvider");
    return e
}
export {
    O as $, Wn as A, Pu as B, ju as C, Tu as D, Ts as E, ku as F, Uu as G, Au as H, xu as I, oe as J, Lu as K, U as L, cr as M, Su as N, q as O, ys as P, lt as Q, wu as R, Io as S, ur as T, Cs as U, vi as V, Yr as W, Ot as X, _t as Y, Nu as Z, Bt as _, Fu as a, Ls as a0, io as a1, ae as a2, yi as a3, Bu as a4, _u as a5, Et as a6, $r as a7, Tr as a8, Jt as a9, ls as aA, Ya as aB, Br as aC, ee as aD, _i as aE, Eu as aF, Qt as aa, $n as ab, qt as ac, ne as ad, wi as ae, Ti as af, Ui as ag, sa as ah, Ka as ai, Y as aj, wo as ak, wn as al, Iu as am, Ou as an, Ae as ao, bn as ap, le as aq, es as ar, Er as as, ns as at, D as au, hn as av, Wa as aw, Hr as ax, Gt as ay, fs as az, Vu as b, Du as c, hs as d, Hn as e, se as f, $u as g, ou as h, Mu as i, Ye as j, gs as k, Ds as l, Xr as m, Kn as n, vo as o, Tt as p, uo as q, Cu as r, Vs as s, de as t, vu as u, dt as v, gt as w, ro as x, Jn as y, en as z
};