var $ = typeof global == "object" && global && global.Object === Object && global;
const C = $;
var T = typeof self == "object" && self && self.Object === Object && self,
    m = C || T || Function("return this")();
const d = m;
var w = d.Symbol;
const l = w;
var b = Object.prototype,
    P = b.hasOwnProperty,
    x = b.toString,
    h = l ? l.toStringTag : void 0;

function z(t) {
    var e = P.call(t, h),
        r = t[h];
    try {
        t[h] = void 0;
        var n = !0
    } catch (c) {}
    var s = x.call(t);
    return n && (e ? t[h] = r : delete t[h]), s
}
var E = Object.prototype,
    D = E.toString;

function F(t) {
    return D.call(t)
}
var H = "[object Null]",
    N = "[object Undefined]",
    v = l ? l.toStringTag : void 0;

function I(t) {
    return t == null ? t === void 0 ? N : H : v && v in Object(t) ? z(t) : F(t)
}

function j(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var G = "[object AsyncFunction]",
    R = "[object Function]",
    M = "[object GeneratorFunction]",
    A = "[object Proxy]";

function U(t) {
    if (!j(t)) return !1;
    var e = I(t);
    return e == R || e == M || e == G || e == A
}
var J = d["__core-js_shared__"];
const _ = J;
var y = function() {
    var t = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : ""
}();

function K(t) {
    return !!y && y in t
}
var q = Function.prototype,
    L = q.toString;

function V(t) {
    if (t != null) {
        try {
            return L.call(t)
        } catch (e) {}
        try {
            return t + ""
        } catch (e) {}
    }
    return ""
}
var X = /[\\^$.*+?()[\]{}|]/g,
    B = /^\[object .+?Constructor\]$/,
    Q = Function.prototype,
    W = Object.prototype,
    Y = Q.toString,
    Z = W.hasOwnProperty,
    k = RegExp("^" + Y.call(Z).replace(X, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function tt(t) {
    if (!j(t) || K(t)) return !1;
    var e = U(t) ? k : B;
    return e.test(V(t))
}

function et(t, e) {
    return t == null ? void 0 : t[e]
}

function O(t, e) {
    var r = et(t, e);
    return tt(r) ? r : void 0
}

function rt(t, e) {
    return t === e || t !== t && e !== e
}
var nt = O(Object, "create");
const u = nt;

function at() {
    this.__data__ = u ? u(null) : {}, this.size = 0
}

function ot(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var it = "__lodash_hash_undefined__",
    st = Object.prototype,
    ct = st.hasOwnProperty;

function ht(t) {
    var e = this.__data__;
    if (u) {
        var r = e[t];
        return r === it ? void 0 : r
    }
    return ct.call(e, t) ? e[t] : void 0
}
var ut = Object.prototype,
    lt = ut.hasOwnProperty;

function pt(t) {
    var e = this.__data__;
    return u ? e[t] !== void 0 : lt.call(e, t)
}
var ft = "__lodash_hash_undefined__";

function _t(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = u && e === void 0 ? ft : e, this
}

function a(t) {
    var e = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var n = t[e];
        this.set(n[0], n[1])
    }
}
a.prototype.clear = at;
a.prototype.delete = ot;
a.prototype.get = ht;
a.prototype.has = pt;
a.prototype.set = _t;

function dt() {
    this.__data__ = [], this.size = 0
}

function p(t, e) {
    for (var r = t.length; r--;)
        if (rt(t[r][0], e)) return r;
    return -1
}
var gt = Array.prototype,
    vt = gt.splice;

function yt(t) {
    var e = this.__data__,
        r = p(e, t);
    if (r < 0) return !1;
    var n = e.length - 1;
    return r == n ? e.pop() : vt.call(e, r, 1), --this.size, !0
}

function bt(t) {
    var e = this.__data__,
        r = p(e, t);
    return r < 0 ? void 0 : e[r][1]
}

function jt(t) {
    return p(this.__data__, t) > -1
}

function Ot(t, e) {
    var r = this.__data__,
        n = p(r, t);
    return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
}

function i(t) {
    var e = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var n = t[e];
        this.set(n[0], n[1])
    }
}
i.prototype.clear = dt;
i.prototype.delete = yt;
i.prototype.get = bt;
i.prototype.has = jt;
i.prototype.set = Ot;
var St = O(d, "Map");
const $t = St;

function Ct() {
    this.size = 0, this.__data__ = {
        hash: new a,
        map: new($t || i),
        string: new a
    }
}

function Tt(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}

function f(t, e) {
    var r = t.__data__;
    return Tt(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
}

function mt(t) {
    var e = f(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}

function wt(t) {
    return f(this, t).get(t)
}

function Pt(t) {
    return f(this, t).has(t)
}

function xt(t, e) {
    var r = f(this, t),
        n = r.size;
    return r.set(t, e), this.size += r.size == n ? 0 : 1, this
}

function o(t) {
    var e = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var n = t[e];
        this.set(n[0], n[1])
    }
}
o.prototype.clear = Ct;
o.prototype.delete = mt;
o.prototype.get = wt;
o.prototype.has = Pt;
o.prototype.set = xt;
var zt = "Expected a function";

function S(t, e) {
    if (typeof t != "function" || e != null && typeof e != "function") throw new TypeError(zt);
    var r = function() {
        var n = arguments,
            s = e ? e.apply(this, n) : n[0],
            c = r.cache;
        if (c.has(s)) return c.get(s);
        var g = t.apply(this, n);
        return r.cache = c.set(s, g) || c, g
    };
    return r.cache = new(S.Cache || o), r
}
S.Cache = o;
export {
    I as b, j as i, S as m, d as r
};