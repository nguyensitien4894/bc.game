import {
    b as h
} from "./_MapCache-91cc8331.js";
var p = "Expected a function";

function o(r, e) {
    if (typeof r != "function" || e != null && typeof e != "function") throw new TypeError(p);
    var a = function() {
        var c = arguments,
            n = e ? e.apply(this, c) : c[0],
            t = a.cache;
        if (t.has(n)) return t.get(n);
        var i = r.apply(this, c);
        return a.cache = t.set(n, i) || t, i
    };
    return a.cache = new(o.Cache || h), a
}
o.Cache = h;
export {
    o as m
};