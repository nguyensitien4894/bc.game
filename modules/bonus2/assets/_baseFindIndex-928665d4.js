import {
    t as I
} from "./toNumber-67386818.js";
var o = 1 / 0,
    s = 17976931348623157e292;

function d(n) {
    if (!n) return n === 0 ? n : 0;
    if (n = I(n), n === o || n === -o) {
        var t = n < 0 ? -1 : 1;
        return t * s
    }
    return n === n ? n : 0
}

function b(n) {
    var t = d(n),
        i = t % 1;
    return t === t ? i ? t - i : t : 0
}

function c(n, t, i, e) {
    for (var f = n.length, r = i + (e ? 1 : -1); e ? r-- : ++r < f;)
        if (t(n[r], r, n)) return r;
    return -1
}
export {
    c as b, b as t
};