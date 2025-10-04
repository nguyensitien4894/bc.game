import {
    g as i,
    s as n,
    t as a
} from "./solid-js-26bd2957.js";
import {
    C as p
} from "./manifest-4a9d96af.js";
import {
    j as m,
    c
} from "./jb-countries-1e3f9cbb.js";
import {
    f as v
} from "./lottery-69be0c1b.js";
var y = a('<section class="relative min-w-[24px] min-h-[24px] w-[24px] h-[24px] overflow-hidden border border-solid border-third rounded-full"><img class="w-[24px] min-w-[24px] absolute"alt="">'),
    d = a('<section class="relative min-w-[16px] min-h-[16px] w-[16px] h-[16px] overflow-hidden"><img class="w-[16px] min-w-[16px] absolute"alt="">'),
    x = a('<section class="relative w-[64px] min-h-[64px] h-[64px] overflow-hidden"><img class="w-[64px] absolute"alt="">'),
    f = a('<section class="relative min-w-[48px] min-h-[48px] w-[48px] h-[48px] overflow-hidden"><img class="w-[48px] min-w-[48px] absolute"alt="">');
const u = () => p.isjb ? m : c;

function b(l) {
    return (() => {
        var o = y(),
            e = o.firstChild;
        return e.style.setProperty("left", "-1px"), i(t => {
            var s = u(),
                r = `${parseInt(v(l.country,1))-1}px`;
            return s !== t.e && n(e, "src", t.e = s), r !== t.t && ((t.t = r) != null ? e.style.setProperty("top", r) : e.style.removeProperty("top")), t
        }, {
            e: void 0,
            t: void 0
        }), o
    })()
}

function P(l) {
    return (() => {
        var o = d(),
            e = o.firstChild;
        return i(t => {
            var s = u(),
                r = v(l.country, 2 / 3);
            return s !== t.e && n(e, "src", t.e = s), r !== t.t && ((t.t = r) != null ? e.style.setProperty("top", r) : e.style.removeProperty("top")), t
        }, {
            e: void 0,
            t: void 0
        }), o
    })()
}

function A(l) {
    return (() => {
        var o = x(),
            e = o.firstChild;
        return i(t => {
            var s = u(),
                r = v(l.country, 8 / 3);
            return s !== t.e && n(e, "src", t.e = s), r !== t.t && ((t.t = r) != null ? e.style.setProperty("top", r) : e.style.removeProperty("top")), t
        }, {
            e: void 0,
            t: void 0
        }), o
    })()
}

function $(l) {
    return (() => {
        var o = f(),
            e = o.firstChild;
        return i(t => {
            var s = u(),
                r = v(l.country, 2);
            return s !== t.e && n(e, "src", t.e = s), r !== t.t && ((t.t = r) != null ? e.style.setProperty("top", r) : e.style.removeProperty("top")), t
        }, {
            e: void 0,
            t: void 0
        }), o
    })()
}
export {
    P as C, $ as a, b, A as c
};