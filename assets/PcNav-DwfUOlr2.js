import {
    k as a,
    v as l,
    x as s,
    D as i,
    E as c,
    X as o
} from "./vendor-CR7NILRE.js";
import {
    t as m,
    B as d,
    X as u,
    u as v,
    q as f,
    e as x
} from "./common-jbtJucx3.js";
var g = l('<div><div class="text-xl font-extrabold">');

function w(e) {
    const r = m();
    return a(o, {
        get when() {
            return !x.mobile
        },
        get children() {
            var t = g(),
                n = t.firstChild;
            return s(t, a(d, {
                class: "mr-3 h-8 rounded-lg bg-layer4 text-secondary w-8",
                onClick: () => e.link ? r(e.link) : r(-1),
                get children() {
                    return a(u, {
                        name: "Arrow"
                    })
                }
            }), n), s(n, () => v.replaceHost(e.title)), i(() => c(t, f("flex items-center my-6", e.class))), t
        }
    })
}
export {
    w as P
};