import {
    c as l,
    m as f,
    aB as b
} from "./manifest-794ca152.js";
import {
    b as p
} from "./LR7LBJN3-58796c8d.js";

function m(t) {
    var c;
    const [r, e] = l((c = t.defaultValue) == null ? void 0 : c.call(t)), a = f(() => {
        var n;
        return ((n = t.value) == null ? void 0 : n.call(t)) !== void 0
    }), u = f(() => {
        var n;
        return a() ? (n = t.value) == null ? void 0 : n.call(t) : r()
    });
    return [u, n => {
        b(() => {
            var i;
            const s = p(n, u());
            return Object.is(s, u()) || (a() || e(s), (i = t.onChange) == null || i.call(t, s)), s
        })
    }]
}

function g(t) {
    const [r, e] = m(t);
    return [() => {
        var a;
        return (a = r()) != null ? a : !1
    }, e]
}

function h(t) {
    const [r, e] = m(t);
    return [() => {
        var a;
        return (a = r()) != null ? a : []
    }, e]
}
export {
    h as a, g as b, m as c
};