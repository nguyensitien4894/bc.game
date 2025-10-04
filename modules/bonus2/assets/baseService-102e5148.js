var Oe = Object.defineProperty;
var q = Object.getOwnPropertySymbols;
var Se = Object.prototype.hasOwnProperty,
    Ae = Object.prototype.propertyIsEnumerable;
var B = (e, t, r) => t in e ? Oe(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    $ = (e, t) => {
        for (var r in t || (t = {})) Se.call(t, r) && B(e, r, t[r]);
        if (q)
            for (var r of q(t)) Ae.call(t, r) && B(e, r, t[r]);
        return e
    };
import {
    F as we
} from "./manifest-d92afe19.js";
import {
    q as $e,
    c as D,
    b as N,
    l as je,
    u as j,
    g as Ie
} from "./solid-js-871c99e1.js";
import {
    b as Pe,
    r as Ce,
    S as R
} from "./_baseGetTag-c2e287b9.js";
import {
    s as G,
    q as re,
    b as F,
    i as _,
    p as Fe,
    e as ne,
    t as _e,
    u as xe,
    k as ae,
    v as ie,
    w as Le,
    m as Me,
    x as Ke,
    U as H,
    g as x,
    y as A,
    j as se,
    a as oe,
    n as ce,
    r as Ue,
    c as Ee,
    d as J,
    l as qe
} from "./_baseFor-371c5662.js";
import {
    a as w,
    i as I
} from "./isArray-79a0be9c.js";
import {
    i as T,
    e as L,
    a as Be
} from "./_MapCache-91cc8331.js";
var W = Object.create,
    De = function() {
        function e() {}
        return function(t) {
            if (!T(t)) return {};
            if (W) return W(t);
            e.prototype = t;
            var r = new e;
            return e.prototype = void 0, r
        }
    }();
const Ne = De;

function Re(e, t, r) {
    switch (r.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, r[0]);
        case 2:
            return e.call(t, r[0], r[1]);
        case 3:
            return e.call(t, r[0], r[1], r[2])
    }
    return e.apply(t, r)
}

function ue(e, t) {
    var r = -1,
        n = e.length;
    for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
    return t
}
var Ge = 800,
    He = 16,
    Je = Date.now;

function We(e) {
    var t = 0,
        r = 0;
    return function() {
        var n = Je(),
            a = He - (n - r);
        if (r = n, a > 0) {
            if (++t >= Ge) return arguments[0]
        } else t = 0;
        return e.apply(void 0, arguments)
    }
}

function Ye(e) {
    return function() {
        return e
    }
}
var Qe = G ? function(e, t) {
    return G(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Ye(t),
        writable: !0
    })
} : re;
const Ve = Qe;
var Xe = We(Ve);
const Ze = Xe;

function ze(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
    return e
}
var ke = Object.prototype,
    et = ke.hasOwnProperty;

function fe(e, t, r) {
    var n = e[t];
    (!(et.call(e, t) && L(n, r)) || r === void 0 && !(t in e)) && F(e, t, r)
}

function v(e, t, r, n) {
    var a = !r;
    r || (r = {});
    for (var o = -1, i = t.length; ++o < i;) {
        var s = t[o],
            u = n ? n(r[s], e[s], s, r, e) : void 0;
        u === void 0 && (u = e[s]), a ? F(r, s, u) : fe(r, s, u)
    }
    return r
}
var Y = Math.max;

function tt(e, t, r) {
    return t = Y(t === void 0 ? e.length - 1 : t, 0),
        function() {
            for (var n = arguments, a = -1, o = Y(n.length - t, 0), i = Array(o); ++a < o;) i[a] = n[t + a];
            a = -1;
            for (var s = Array(t + 1); ++a < t;) s[a] = n[a];
            return s[t] = r(i), Re(e, this, s)
        }
}

function rt(e, t) {
    return Ze(tt(e, t, re), e + "")
}

function nt(e, t, r) {
    if (!T(r)) return !1;
    var n = typeof t;
    return (n == "number" ? _(r) && Fe(t, r.length) : n == "string" && t in r) ? L(r[t], e) : !1
}

function at(e) {
    return rt(function(t, r) {
        var n = -1,
            a = r.length,
            o = a > 1 ? r[a - 1] : void 0,
            i = a > 2 ? r[2] : void 0;
        for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, i && nt(r[0], r[1], i) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++n < a;) {
            var s = r[n];
            s && e(t, s, n, o)
        }
        return t
    })
}

function it(e) {
    var t = [];
    if (e != null)
        for (var r in Object(e)) t.push(r);
    return t
}
var st = Object.prototype,
    ot = st.hasOwnProperty;

function ct(e) {
    if (!T(e)) return it(e);
    var t = ne(e),
        r = [];
    for (var n in e) n == "constructor" && (t || !ot.call(e, n)) || r.push(n);
    return r
}

function O(e) {
    return _(e) ? _e(e, !0) : ct(e)
}
var ut = xe(Object.getPrototypeOf, Object);
const M = ut;
var ft = "[object Object]",
    lt = Function.prototype,
    gt = Object.prototype,
    le = lt.toString,
    ht = gt.hasOwnProperty,
    dt = le.call(Object);

function K(e) {
    if (!w(e) || Pe(e) != ft) return !1;
    var t = M(e);
    if (t === null) return !0;
    var r = ht.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && le.call(r) == dt
}

function yt(e, t) {
    return e && v(t, ae(t), e)
}

function pt(e, t) {
    return e && v(t, O(t), e)
}
var ge = typeof exports == "object" && exports && !exports.nodeType && exports,
    Q = ge && typeof module == "object" && module && !module.nodeType && module,
    bt = Q && Q.exports === ge,
    V = bt ? Ce.Buffer : void 0,
    X = V ? V.allocUnsafe : void 0;

function he(e, t) {
    if (t) return e.slice();
    var r = e.length,
        n = X ? X(r) : new e.constructor(r);
    return e.copy(n), n
}

function mt(e, t) {
    return v(e, ie(e), t)
}
var Tt = Object.getOwnPropertySymbols,
    vt = Tt ? function(e) {
        for (var t = []; e;) Me(t, ie(e)), e = M(e);
        return t
    } : Le;
const de = vt;

function Ot(e, t) {
    return v(e, de(e), t)
}

function St(e) {
    return Ke(e, O, de)
}
var At = Object.prototype,
    wt = At.hasOwnProperty;

function $t(e) {
    var t = e.length,
        r = new e.constructor(t);
    return t && typeof e[0] == "string" && wt.call(e, "index") && (r.index = e.index, r.input = e.input), r
}

function U(e) {
    var t = new e.constructor(e.byteLength);
    return new H(t).set(new H(e)), t
}

function jt(e, t) {
    var r = t ? U(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.byteLength)
}
var It = /\w*$/;

function Pt(e) {
    var t = new e.constructor(e.source, It.exec(e));
    return t.lastIndex = e.lastIndex, t
}
var Z = R ? R.prototype : void 0,
    z = Z ? Z.valueOf : void 0;

function Ct(e) {
    return z ? Object(z.call(e)) : {}
}

function ye(e, t) {
    var r = t ? U(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length)
}
var Ft = "[object Boolean]",
    _t = "[object Date]",
    xt = "[object Map]",
    Lt = "[object Number]",
    Mt = "[object RegExp]",
    Kt = "[object Set]",
    Ut = "[object String]",
    Et = "[object Symbol]",
    qt = "[object ArrayBuffer]",
    Bt = "[object DataView]",
    Dt = "[object Float32Array]",
    Nt = "[object Float64Array]",
    Rt = "[object Int8Array]",
    Gt = "[object Int16Array]",
    Ht = "[object Int32Array]",
    Jt = "[object Uint8Array]",
    Wt = "[object Uint8ClampedArray]",
    Yt = "[object Uint16Array]",
    Qt = "[object Uint32Array]";

function Vt(e, t, r) {
    var n = e.constructor;
    switch (t) {
        case qt:
            return U(e);
        case Ft:
        case _t:
            return new n(+e);
        case Bt:
            return jt(e, r);
        case Dt:
        case Nt:
        case Rt:
        case Gt:
        case Ht:
        case Jt:
        case Wt:
        case Yt:
        case Qt:
            return ye(e, r);
        case xt:
            return new n;
        case Lt:
        case Ut:
            return new n(e);
        case Mt:
            return Pt(e);
        case Kt:
            return new n;
        case Et:
            return Ct(e)
    }
}

function pe(e) {
    return typeof e.constructor == "function" && !ne(e) ? Ne(M(e)) : {}
}
var Xt = "[object Map]";

function Zt(e) {
    return w(e) && x(e) == Xt
}
var k = A && A.isMap,
    zt = k ? se(k) : Zt;
const kt = zt;
var er = "[object Set]";

function tr(e) {
    return w(e) && x(e) == er
}
var ee = A && A.isSet,
    rr = ee ? se(ee) : tr;
const nr = rr;
var ar = 1,
    ir = 2,
    sr = 4,
    be = "[object Arguments]",
    or = "[object Array]",
    cr = "[object Boolean]",
    ur = "[object Date]",
    fr = "[object Error]",
    me = "[object Function]",
    lr = "[object GeneratorFunction]",
    gr = "[object Map]",
    hr = "[object Number]",
    Te = "[object Object]",
    dr = "[object RegExp]",
    yr = "[object Set]",
    pr = "[object String]",
    br = "[object Symbol]",
    mr = "[object WeakMap]",
    Tr = "[object ArrayBuffer]",
    vr = "[object DataView]",
    Or = "[object Float32Array]",
    Sr = "[object Float64Array]",
    Ar = "[object Int8Array]",
    wr = "[object Int16Array]",
    $r = "[object Int32Array]",
    jr = "[object Uint8Array]",
    Ir = "[object Uint8ClampedArray]",
    Pr = "[object Uint16Array]",
    Cr = "[object Uint32Array]",
    l = {};
l[be] = l[or] = l[Tr] = l[vr] = l[cr] = l[ur] = l[Or] = l[Sr] = l[Ar] = l[wr] = l[$r] = l[gr] = l[hr] = l[Te] = l[dr] = l[yr] = l[pr] = l[br] = l[jr] = l[Ir] = l[Pr] = l[Cr] = !0;
l[fr] = l[me] = l[mr] = !1;

function S(e, t, r, n, a, o) {
    var i, s = t & ar,
        u = t & ir,
        h = t & sr;
    if (r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0) return i;
    if (!T(e)) return e;
    var c = I(e);
    if (c) {
        if (i = $t(e), !s) return ue(e, i)
    } else {
        var f = x(e),
            g = f == me || f == lr;
        if (oe(e)) return he(e, s);
        if (f == Te || f == be || g && !a) {
            if (i = u || g ? {} : pe(e), !s) return u ? Ot(e, pt(i, e)) : mt(e, yt(i, e))
        } else {
            if (!l[f]) return a ? e : {};
            i = Vt(e, f, s)
        }
    }
    o || (o = new ce);
    var d = o.get(e);
    if (d) return d;
    o.set(e, i), nr(e) ? e.forEach(function(y) {
        i.add(S(y, t, r, y, e, o))
    }) : kt(e) && e.forEach(function(y, b) {
        i.set(b, S(y, t, r, b, e, o))
    });
    var m = h ? u ? St : Ue : u ? O : ae,
        E = c ? void 0 : m(e);
    return ze(E || e, function(y, b) {
        E && (b = y, y = e[b]), fe(i, b, S(y, t, r, b, e, o))
    }), i
}
var Fr = 1,
    _r = 4;

function xr(e) {
    return S(e, Fr | _r)
}

function P(e, t, r) {
    (r !== void 0 && !L(e[t], r) || r === void 0 && !(t in e)) && F(e, t, r)
}

function Lr(e) {
    return w(e) && _(e)
}

function C(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
}

function Mr(e) {
    return v(e, O(e))
}

function Kr(e, t, r, n, a, o, i) {
    var s = C(e, r),
        u = C(t, r),
        h = i.get(u);
    if (h) {
        P(e, r, h);
        return
    }
    var c = o ? o(s, u, r + "", e, t, i) : void 0,
        f = c === void 0;
    if (f) {
        var g = I(u),
            d = !g && oe(u),
            m = !g && !d && Ee(u);
        c = u, g || d || m ? I(s) ? c = s : Lr(s) ? c = ue(s) : d ? (f = !1, c = he(u, !0)) : m ? (f = !1, c = ye(u, !0)) : c = [] : K(u) || J(u) ? (c = s, J(s) ? c = Mr(s) : (!T(s) || Be(s)) && (c = pe(u))) : f = !1
    }
    f && (i.set(u, c), a(c, u, n, o, i), i.delete(u)), P(e, r, c)
}

function ve(e, t, r, n, a) {
    e !== t && qe(t, function(o, i) {
        if (a || (a = new ce), T(o)) Kr(e, t, i, r, ve, n, a);
        else {
            var s = n ? n(C(e, i), o, i + "", e, t, a) : void 0;
            s === void 0 && (s = o), P(e, i, s)
        }
    }, O)
}
var Ur = at(function(e, t, r, n) {
    ve(e, t, r, n)
});
const te = Ur;
class Er {
    constructor(t, r = "Bonus-LRU", n = localStorage) {
        this.limit = t, this.storageKey = r, this.storage = n, this.limit = t, this.cache = new Map, this.storageKey = r;
        const a = this.storage.getItem(this.storageKey);
        a && (this.cache = new Map(JSON.parse(a)))
    }
    get length() {
        return this.cache.size
    }
    key(t) {
        return Array.from(this.cache.keys())[t] || null
    }
    getItem(t) {
        if (!this.cache.has(t)) return null;
        const r = this.cache.get(t);
        return this.cache.delete(t), this.cache.set(t, r), this._persistToStorage(), r
    }
    setItem(t, r) {
        if (this.cache.has(t)) this.cache.delete(t);
        else if (this.cache.size >= this.limit) {
            const n = this.cache.keys().next().value;
            n && this.cache.delete(n)
        }
        this.cache.set(t, r), this._persistToStorage()
    }
    removeItem(t) {
        this.cache.has(t) && (this.cache.delete(t), this._persistToStorage())
    }
    clear() {
        this.cache.clear(), this.storage.removeItem(this.storageKey)
    }
    _persistToStorage() {
        this.storage.setItem(this.storageKey, JSON.stringify([...this.cache]))
    }
}

function qr(e) {
    return JSON.stringify(e, (t, r) => K(r) ? Object.keys(r).sort().reduce((n, a) => (n[a] = r[a], n), {}) : r)
}
const Br = new Er(10, "Bonus_Resource_LRU "),
    p = {};
class Yr {
    constructor(t = $e()) {
        this.serviceId = t
    }
    refetchResource(t, r) {
        return Promise.all(Object.entries(p).map(([n, a]) => {
            const o = a.queryKey,
                i = (u, h) => {
                    function c(f, g) {
                        return f === g ? !0 : typeof f != typeof g ? !1 : f && g && typeof f == "object" && typeof g == "object" ? !Object.keys(f).some(d => !c(f[d], g[d])) : !1
                    }
                    return !!c(u, h)
                },
                s = r && r.staleTime !== void 0 ? Date.now() - a.cacheTime > r.staleTime : !0;
            if (i([this.serviceId, t], [this.serviceId, ...o]) && s) {
                const [u, {
                    refetch: h,
                    mutate: c
                }] = a.resource;
                if (r != null && r.mutateOnly) {
                    if (a.queryFn) return Promise.resolve(a.queryFn()).then(f => {
                        a.cacheTime = Date.now(), c(f)
                    })
                } else return h()
            }
        }))
    }
    createSharedResource(t, r) {
        const n = D(() => {
                const h = t();
                return $({
                    mergeInitialData: !0
                }, h)
            }),
            a = D(() => qr([...n().queryKey])),
            o = h => {
                if (p[h]) return p[h].resource;
                const c = Ie(() => {
                    var f, g;
                    return (g = (f = r == null ? void 0 : r.enable) == null ? void 0 : f.call(r)) != null ? g : !0
                }, (...f) => {
                    var g, d;
                    return Promise.resolve((d = (g = n()).queryFn) == null ? void 0 : d.call(g, ...f)).then(m => (p[h].cacheTime = Date.now(), m))
                }, {
                    initialValue: n().initialData,
                    storage: r != null && r.persisted ? () => we(N([]), {
                        name: h,
                        storage: Br
                    }) : void 0
                });
                return p[h] = {
                    resource: c,
                    queryFn: n().queryFn,
                    queryKey: n().queryKey,
                    cacheTime: Date.now()
                }, c
            },
            [i, s] = N(o(a()));
        je(h => {
            const c = a();
            return h !== c && s(o(c)), c
        }, a());

        function u() {
            const h = i()[0]();
            return j(() => {
                const c = n();
                if (c.mergeInitialData && c.initialData) {
                    const f = (g, d) => K(g) ? te($({}, g), d, f) : d != null ? d : g;
                    return te(xr(n().initialData), h, f)
                }
                return h
            })
        }
        return Object.defineProperties(u, {
            state: {
                get: () => i()[0].state
            },
            error: {
                get: () => i()[0].error
            },
            loading: {
                get() {
                    return i()[0].loading
                }
            },
            latest: {
                get() {
                    return i()[0].latest
                }
            }
        }), [u, {
            get mutate() {
                return j(i)[1].mutate
            },
            get refetch() {
                return j(i)[1].refetch
            }
        }]
    }
}
const Qr = () => {
    for (const e in p) p.hasOwnProperty(e) && delete p[e]
};
export {
    Yr as B, K as a, rt as b, ue as c, Qr as d, v as e, S as f, St as g, nt as i, tt as o, Ze as s
};