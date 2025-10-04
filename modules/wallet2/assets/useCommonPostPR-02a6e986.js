var m = Object.defineProperty,
    p = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty,
    P = Object.prototype.propertyIsEnumerable;
var s = (t, e, o) => e in t ? m(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[e] = o,
    n = (t, e) => {
        for (var o in e || (e = {})) i.call(e, o) && s(t, o, e[o]);
        if (a)
            for (var o of a(e)) P.call(e, o) && s(t, o, e[o]);
        return t
    },
    u = (t, e) => p(t, g(e));
import {
    X as l,
    z as f,
    j as R
} from "./manifest-c14db982.js";
import {
    c as x
} from "./solid-js-640b7463.js";

function H(t, e) {
    const o = x(e);
    return l(r => f(() => [t, u(n({}, o()), {
        page: r()
    })], c => R().post(...c), {
        expires: 1e3
    }), r => (console.log(r.totalPage), r.totalPage), o)
}
export {
    H as u
};