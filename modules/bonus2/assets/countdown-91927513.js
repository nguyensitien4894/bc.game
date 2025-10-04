import {
    b as U,
    d as y,
    i as g,
    c as S,
    t as $
} from "./web-46c35164.js";
import {
    a6 as I,
    c as w
} from "./manifest-d92afe19.js";
import {
    a as E
} from "./index-feaa71f9.js";
import {
    j as P,
    c as b,
    d as F,
    F as j,
    S as k
} from "./solid-js-871c99e1.js";
var D = $("<span>"),
    T = $("<span> ");
const H = n => {
    const [s, q] = P(n, ["expiresInMS", "maxUnit"]), C = b(() => E(s.expiresInMS)), i = I(C);

    function _(e) {
        var l, o, m, u, d, h, f, x, v;
        const t = [{
                name: "d",
                value: (o = (l = e()) == null ? void 0 : l.days) != null ? o : 0
            }, {
                name: "h",
                value: (u = (m = e()) == null ? void 0 : m.hours) != null ? u : 0
            }, {
                name: "m",
                value: (h = (d = e()) == null ? void 0 : d.minutes) != null ? h : 0
            }, {
                name: "s",
                value: (x = (f = e()) == null ? void 0 : f.seconds) != null ? x : 0
            }],
            a = (v = s.maxUnit) != null ? v : 3,
            r = t.length - a,
            c = Math.min(r, Math.max(0, t.findIndex(M => M.value > 0)));
        return t.slice(c, c + a)
    }
    const p = () => {
        var e;
        (e = n.onExpired) == null || e.call(n)
    };
    return F(() => {
        const e = i();
        e && e.days === 0 && e.hours === 0 && e.minutes === 0 && e.seconds === 0 && setTimeout(() => {
            p()
        }, 1e3)
    }), (() => {
        var e = D();
        return U(e, y(n, {
            get class() {
                return w(n.class, "text-primary")
            }
        }), !1, !0), g(e, S(j, {
            get each() {
                return _(i)
            },
            children: t => S(k, {
                get when() {
                    return n.children
                },
                get fallback() {
                    return (() => {
                        var a = T(),
                            r = a.firstChild;
                        return g(a, () => `${t.value===0?String(t.value):String(t.value).padStart(2,"0")}${t.name}`, r), a
                    })()
                },
                get children() {
                    return n.children(t)
                }
            })
        })), e
    })()
};
export {
    H as C
};