var h = (e, t, r) => new Promise((i, a) => {
    var l = d => {
            try {
                c(r.next(d))
            } catch (g) {
                a(g)
            }
        },
        o = d => {
            try {
                c(r.throw(d))
            } catch (g) {
                a(g)
            }
        },
        c = d => d.done ? i(d.value) : Promise.resolve(d.value).then(l, o);
    c((r = r.apply(e, t)).next())
});
import {
    c as s,
    i as n,
    e as u,
    b as f,
    u as C,
    t as v
} from "./web-6f548a65.js";
import {
    S as y,
    a as k,
    b,
    g as $,
    c as w
} from "./solid-js-640b7463.js";
import {
    A as S,
    c as m,
    e as P,
    m as E
} from "./manifest-c14db982.js";
import {
    c as T,
    C as _,
    T as z
} from "./Icon-4fab95ab.js";
import {
    s as x
} from "./store-59603697.js";
import "./store-2ed2b91e.js";
var A = v('<div class="flex items-center rounded-lg px-2 py-2"><div class=flex-1><div class="flex items-center"><div class="mr-1 whitespace-nowrap text-sm font-extrabold leading-tight text-primary"></div><div><span class=text-xs></span></div></div><div class="text-sm leading-tight text-primary">'),
    I = v('<div class="flex items-center rounded-lg px-3 h-16"><div class=mr-2.5><div class="text-lg font-extrabold leading-tight"></div><div></div></div><div class="mr-3 flex-1 text-right"><div class="text-sm leading-tight mb-0.5">1 BC</div><div class="text-base leading-5">'),
    M = v("<div>");

function L() {
    const [e, t] = k({
        price: 0,
        trend: 0,
        liveTime: 0
    });
    return b(() => {
        i();
        const r = setInterval(i, 30 * 1e3);
        $(() => clearInterval(r));

        function i() {
            return h(this, null, function*() {
                const a = (yield T.initial(1e3, "500ms")).data,
                    l = a[a.length - 1];
                t({
                    price: Number(l.c),
                    trend: Number(l.p),
                    liveTime: Date.now()
                })
            })
        }
    }), w(() => x.wsPrice.liveTime > e().liveTime ? x.wsPrice : e())
}

function G(e) {
    const t = L();
    return s(S, {
        href: "/wallet/bc",
        get class() {
            return m("relative z-10 block rounded-lg text-primary", e.class)
        },
        get style() {
            return {
                "background-image": t().trend < 0 ? "radial-gradient(85.75% 170.25% at 0% 100%, rgba(252,60,60,0.15) 0%, rgba(252,60,60,0) 100%)" : "radial-gradient(85.75% 170.25% at 0% 100%, rgba(35, 238, 136, 0.15) 0%, rgba(35, 238, 136, 0) 100%)",
                "background-color": "var(--Sidebar-Unit_bg)"
            }
        },
        get children() {
            return s(y, {
                get when() {
                    return P.mobile
                },
                get fallback() {
                    return s(N, {
                        get price() {
                            return t().price
                        },
                        get trend() {
                            return t().trend
                        },
                        get children() {
                            return e.children
                        }
                    })
                },
                get children() {
                    return s(D, {
                        get price() {
                            return t().price
                        },
                        get trend() {
                            return t().trend
                        },
                        get children() {
                            return e.children
                        }
                    })
                }
            })
        }
    })
}

function N(e) {
    return (() => {
        var t = A(),
            r = t.firstChild,
            i = r.firstChild,
            a = i.firstChild,
            l = a.nextSibling,
            o = l.firstChild,
            c = i.nextSibling;
        return n(t, s(_, {
            class: "mr-1 size-9 shrink-0 py-1.5"
        }), r), n(a, () => e.children), n(l, s(z, {
            get class() {
                return m("mr-0.5", e.trend < 0 && "rotate-180")
            }
        }), o), n(o, () => `${Math.abs(e.trend*100).toFixed(2)}%`), n(c, () => `$${e.price}`), n(t, s(p, {}), null), u(() => f(l, m("flex items-center text-sm font-semibold leading-tight", e.trend < 0 ? "text-error" : "text-brand"))), t
    })()
}

function D(e) {
    return (() => {
        var t = I(),
            r = t.firstChild,
            i = r.firstChild,
            a = i.nextSibling,
            l = r.nextSibling,
            o = l.firstChild,
            c = o.nextSibling;
        return n(t, s(_, {
            class: "mr-3 size-10 shrink-0 py-1.5"
        }), r), n(i, () => e.children), n(a, () => `${e.trend>0?"+":e.trend<0?"-":""}${Math.abs(e.trend*100).toFixed(2)}%`), n(c, () => `$${e.price}`), n(t, s(p, {}), null), u(() => f(a, m("text-sm leading-tight", e.trend < 0 ? "text-error" : "text-brand"))), t
    })()
}

function p(e) {
    let t;
    return b(() => {
        if (!e.onClick) return;

        function r(i) {
            i.stopPropagation(), i.preventDefault(), e.onClick()
        }
        t.addEventListener("click", r, !1), $(() => {
            t.removeEventListener("click", r)
        })
    }), (() => {
        var r = M(),
            i = t;
        return typeof i == "function" ? C(i, r) : t = r, n(r, s(E, {
            class: "rotate-180 fill-secondary transition-all !size-4.5",
            name: "Arrow"
        })), u(() => f(r, m("bg-arrow size-6 rounded-md center btn-like", e.class))), r
    })()
}
export {
    G as
    default
};