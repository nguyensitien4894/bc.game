import {
    i as S
} from "./_MapCache-91cc8331.js";
import {
    r as y
} from "./_baseGetTag-c2e287b9.js";
import {
    t as W
} from "./toNumber-67386818.js";
var R = function() {
    return y.Date.now()
};
const h = R;
var A = "Expected a function",
    F = Math.max,
    N = Math.min;

function D(x, i, a) {
    var u, o, l, f, e, r, d = 0,
        E = !1,
        m = !1,
        g = !0;
    if (typeof x != "function") throw new TypeError(A);
    i = W(i) || 0, S(a) && (E = !!a.leading, m = "maxWait" in a, l = m ? F(W(a.maxWait) || 0, i) : l, g = "trailing" in a ? !!a.trailing : g);

    function v(n) {
        var t = u,
            c = o;
        return u = o = void 0, d = n, f = x.apply(c, t), f
    }

    function b(n) {
        return d = n, e = setTimeout(s, i), E ? v(n) : f
    }

    function C(n) {
        var t = n - r,
            c = n - d,
            p = i - t;
        return m ? N(p, l - c) : p
    }

    function k(n) {
        var t = n - r,
            c = n - d;
        return r === void 0 || t >= i || t < 0 || m && c >= l
    }

    function s() {
        var n = h();
        if (k(n)) return I(n);
        e = setTimeout(s, C(n))
    }

    function I(n) {
        return e = void 0, g && u ? v(n) : (u = o = void 0, f)
    }

    function L() {
        e !== void 0 && clearTimeout(e), d = 0, u = r = o = e = void 0
    }

    function M() {
        return e === void 0 ? f : I(h())
    }

    function T() {
        var n = h(),
            t = k(n);
        if (u = arguments, o = this, r = n, t) {
            if (e === void 0) return b(r);
            if (m) return clearTimeout(e), e = setTimeout(s, i), v(r)
        }
        return e === void 0 && (e = setTimeout(s, i)), f
    }
    return T.cancel = L, T.flush = M, T
}
export {
    D as d
};