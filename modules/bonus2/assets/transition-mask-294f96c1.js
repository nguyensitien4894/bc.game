import {
    b as o,
    d as n,
    t as i
} from "./web-46c35164.js";
import {
    c as l
} from "./manifest-d92afe19.js";
import {
    x as c,
    j as p
} from "./solid-js-871c99e1.js";
var m = i("<div>");
const g = a => {
    const [r] = c(), [t, e] = p(a, ["class"]);
    return (() => {
        var s = m();
        return o(s, n({
            get class() {
                return l(r() ? "select-none opacity-65 transition-all" : "", t.class)
            }
        }, e), !1, !1), s
    })()
};
export {
    g as T
};