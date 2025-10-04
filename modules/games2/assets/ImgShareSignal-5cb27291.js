var m = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty,
    g = Object.prototype.propertyIsEnumerable;
var c = (a, s, o) => s in a ? m(a, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : a[s] = o,
    f = (a, s) => {
        for (var o in s || (s = {})) i.call(s, o) && c(a, o, s[o]);
        if (t)
            for (var o of t(s)) g.call(s, o) && c(a, o, s[o]);
        return a
    };
import {
    c as r,
    f as y
} from "./manifest-794ca152.js";
import {
    S as L,
    b as l,
    M as p,
    c as u,
    e as h,
    g as b,
    h as x,
    i as I
} from "./game-ab00b977.js";
const [j, M] = r();

function k(a) {
    const s = a == null ? void 0 : a.game;
    let o;
    try {
        if (s instanceof L) {
            const {
                myLogs: n = []
            } = l();
            o = n
        } else if (s instanceof p) {
            const {
                myLogs: n = []
            } = u();
            o = n
        } else if (s instanceof h) {
            const {
                myLogs: n = []
            } = b();
            o = n
        } else if (s instanceof x) {
            const {
                myLogs: n = []
            } = I();
            o = n
        }
    } catch (n) {}
    return y(() => {
        var n, e;
        M({
            myLog: f({}, (n = o()) == null ? void 0 : n[0]),
            gameName: ((e = s == null ? void 0 : s.config) == null ? void 0 : e.name) || ""
        })
    }), []
}
export {
    k as I, j as u
};