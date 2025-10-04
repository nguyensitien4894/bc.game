var d = Math.floor,
    u = Math.random;

function v(n, t) {
    return n + d(u() * (t - n + 1))
}

function g(n, t) {
    var e = -1,
        o = n.length,
        f = o - 1;
    for (t = t === void 0 ? o : t; ++e < t;) {
        var l = v(e, f),
            h = n[l];
        n[l] = n[e], n[e] = h
    }
    return n.length = t, n
}
export {
    g as s
};