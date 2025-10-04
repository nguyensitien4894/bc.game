var u = Object.defineProperty,
    d = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty,
    p = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? u(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    m = (t, e) => {
        for (var r in e || (e = {})) g.call(e, r) && o(t, r, e[r]);
        if (n)
            for (var r of n(e)) p.call(e, r) && o(t, r, e[r]);
        return t
    },
    l = (t, e) => d(t, h(e));
import {
    c as s,
    D as b,
    d as i
} from "./web-46c35164.js";
import {
    c as f
} from "./manifest-d92afe19.js";
import {
    m as v,
    j as c
} from "./solid-js-871c99e1.js";
import {
    T as w
} from "./table-101d4254.js";

function P(t) {
    const e = v({
            visible: !0,
            animate: !0,
            as: "div",
            radius: .25
        }, t),
        [r, a] = c(e, ["as", "radius", "animate", "visible"]);
    return s(b, i(a, {
        get "data-animate" () {
            return r.animate
        },
        get "data-visible" () {
            return r.visible
        },
        get class() {
            return f("skeleton", t.class)
        },
        get component() {
            return r.as
        }
    }))
}

function S(t) {
    const [e, r] = c(t, ["visible", "animate", "width", "height", "circle", "radius", "rows", "as"]);
    return s(w, i(r, {
        get columns() {
            return r.columns.map(a => l(m({}, a), {
                render() {
                    return s(P, i(e, {
                        get style() {
                            return {
                                "border-radius": e.circle ? "9999px" : e.radius ? `${e.radius}rem` : void 0,
                                width: e.circle ? `${e.height}rem` : e.width ? `${e.width}rem` : "100%",
                                height: e.height ? `${e.height}rem` : "auto"
                            }
                        },
                        class: "inline-flex"
                    }))
                }
            }))
        },
        get data() {
            var a;
            return Array.from({
                length: (a = t.rows) != null ? a : 5
            }).map(() => ({}))
        }
    }))
}
export {
    P as S, S as T
};