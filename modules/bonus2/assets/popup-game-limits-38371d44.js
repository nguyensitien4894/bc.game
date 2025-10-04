var P = (a, r, e) => new Promise((l, c) => {
    var p = i => {
            try {
                s(e.next(i))
            } catch (n) {
                c(n)
            }
        },
        t = i => {
            try {
                s(e.throw(i))
            } catch (n) {
                c(n)
            }
        },
        s = i => i.done ? l(i.value) : Promise.resolve(i.value).then(p, t);
    s((e = e.apply(a, r)).next())
});
import {
    k as T,
    c as g,
    i as m,
    m as B,
    t as f
} from "./web-46c35164.js";
import {
    p as E,
    P as L,
    D as N,
    a8 as D,
    j as I
} from "./manifest-d92afe19.js";
import {
    n as k,
    t as z
} from "./index-feaa71f9.js";
import {
    b as h,
    a as A,
    g as F,
    l as G,
    w as M,
    F as b,
    S as O
} from "./solid-js-871c99e1.js";
import {
    t as y
} from "./i18n-fd9a94dd.js";
import {
    h as W
} from "./http-696896a0.js";
import {
    a as R
} from "./_arrayMap-2bcec0e7.js";
import {
    g as U,
    k as j
} from "./_baseFor-371c5662.js";
import {
    m as q
} from "./_baseIsEqual-7dac899d.js";
import {
    g as H
} from "./groupBy-843aaa6e.js";

function J(a, r) {
    return R(r, function(e) {
        return [e, a[e]]
    })
}

function K(a) {
    var r = -1,
        e = Array(a.size);
    return a.forEach(function(l) {
        e[++r] = [l, l]
    }), e
}
var Q = "[object Map]",
    V = "[object Set]";

function X(a) {
    return function(r) {
        var e = U(r);
        return e == Q ? q(r) : e == V ? K(r) : J(r, a(r))
    }
}
var Y = X(j);
const Z = Y;

function ee(a) {
    const [r, e] = h([]), [l, c] = h(0), [p, t] = h(!1);
    let s = k;
    if (!T) {
        const n = new IntersectionObserver(o => {
            o.length > 0 && o[0].isIntersecting && !p() && !i.loading && c(d => d + 1)
        });
        A(() => n.disconnect()), s = o => {
            n.observe(o), z(() => n.unobserve(o))
        }
    }
    const [i] = F(l, a);
    return G(() => {
        const n = i.latest;
        n && M(() => {
            n.length === 0 && t(!0), e(o => [...o, ...n])
        })
    }), [r, s, {
        page: l,
        setPage: c,
        setPages: e,
        end: p,
        setEnd: t
    }]
}
var re = f('<h3 class="mb-2 text-base font-extrabold text-primary">'),
    te = f('<div class="flex flex-col gap-y-6">'),
    ae = f('<div class="flex h-60 w-full items-center justify-center">'),
    ne = f('<div class="flex flex-col flex-wrap"><div class="min-w-0 font-semibold text-primary">:</div><div class="mt-1 flex flex-wrap">'),
    se = f('<div class="min-w-0 font-semibold text-secondary"><div class=overflow-hidden>(<!>%),');

function xe(a = "/game/home/bonus/detail/") {
    return E.push(() => g(ie, {
        endpoint: a
    }))
}
const ie = a => {
    const [r, e, {
        end: l,
        setEnd: c
    }] = ee(t => P(void 0, null, function*() {
        const s = yield W.post(a.endpoint, {
            page: t + 1,
            pageSize: 200,
            areaCode: I.areaCode
        });
        return s.page >= s.totalPage && c(!0), s.list
    })), p = () => Z(H(r(), "providerName"));
    return g(L, {
        get title() {
            return y("Wager Contribution")
        },
        get children() {
            return [(() => {
                var t = re();
                return m(t, () => y("Wager Contribution for Bonus Balance Details")), t
            })(), (() => {
                var t = te();
                return m(t, g(b, {
                    get each() {
                        return p()
                    },
                    children: ([s, i]) => (() => {
                        var n = ne(),
                            o = n.firstChild,
                            d = o.firstChild,
                            C = o.nextSibling;
                        return m(o, s, d), m(C, g(b, {
                            each: i,
                            children: u => (() => {
                                var x = se(),
                                    v = x.firstChild,
                                    _ = v.firstChild,
                                    $ = _.nextSibling;
                                return $.nextSibling, m(v, () => u.gameName, _), m(v, (() => {
                                    var S = B(() => !!(u.wagerPercentage && u.wagerPercentage < 1));
                                    return () => {
                                        var w;
                                        return S() ? new N(u.wagerPercentage).mul(100).toString() : (w = u.wagerPercentage) != null ? w : 0
                                    }
                                })(), $), x
                            })()
                        })), n
                    })()
                })), t
            })(), (() => {
                var t = ae();
                return m(t, g(O, {
                    get when() {
                        return !l()
                    },
                    get children() {
                        return g(D, {
                            ref: e
                        })
                    }
                })), t
            })()]
        }
    })
};
export {
    xe as p
};