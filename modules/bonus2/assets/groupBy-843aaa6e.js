import {
    l as f,
    k as g,
    i as o,
    b
} from "./_baseFor-371c5662.js";
import {
    b as i
} from "./_baseIteratee-a7d854cc.js";
import {
    i as h
} from "./isArray-79a0be9c.js";

function p(n, a, r, e) {
    for (var t = -1, s = n == null ? 0 : n.length; ++t < s;) {
        var u = n[t];
        a(e, u, r(u), n)
    }
    return e
}

function A(n, a) {
    return n && f(n, a, g)
}

function v(n, a) {
    return function(r, e) {
        if (r == null) return r;
        if (!o(r)) return n(r, e);
        for (var t = r.length, s = a ? t : -1, u = Object(r);
            (a ? s-- : ++s < t) && e(u[s], s, u) !== !1;);
        return r
    }
}
var w = v(A);
const y = w;

function O(n, a, r, e) {
    return y(n, function(t, s, u) {
        a(e, t, r(t), u)
    }), e
}

function c(n, a) {
    return function(r, e) {
        var t = h(r) ? p : O,
            s = a ? a() : {};
        return t(r, n, i(e), s)
    }
}
var m = Object.prototype,
    k = m.hasOwnProperty,
    x = c(function(n, a, r) {
        k.call(n, r) ? n[r].push(a) : b(n, r, [a])
    });
const d = x;
export {
    y as a, A as b, d as g
};