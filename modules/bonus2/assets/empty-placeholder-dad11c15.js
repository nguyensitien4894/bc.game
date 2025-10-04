import {
    b as l,
    d as c,
    i as n,
    e as m,
    s as i,
    t as o
} from "./web-46c35164.js";
import {
    l as f,
    c as d
} from "./manifest-d92afe19.js";
var p = o('<div><img class=w-1/2><span class="text-center text-sm font-semibold text-secondary">');
const g = e => {
    const r = f("/common/empty.png");
    return (() => {
        var t = p(),
            s = t.firstChild,
            a = s.nextSibling;
        return l(t, c(e, {
            get class() {
                return d("flex flex-col items-center justify-center", e.class)
            }
        }), !1, !0), n(a, () => e.children), m(() => i(s, "src", r())), t
    })()
};
export {
    g as E
};