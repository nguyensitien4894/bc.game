var E = Object.defineProperty;
var y = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty,
    $ = Object.prototype.propertyIsEnumerable;
var p = (a, s, t) => s in a ? E(a, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : a[s] = t,
    L = (a, s) => {
        for (var t in s || (s = {})) T.call(s, t) && p(a, t, s[t]);
        if (y)
            for (var t of y(s)) $.call(s, t) && p(a, t, s[t]);
        return a
    };
var h = (a, s, t) => new Promise((d, u) => {
    var f = o => {
            try {
                l(t.next(o))
            } catch (c) {
                u(c)
            }
        },
        m = o => {
            try {
                l(t.throw(o))
            } catch (c) {
                u(c)
            }
        },
        l = o => o.done ? d(o.value) : Promise.resolve(o.value).then(f, m);
    l((t = t.apply(a, s)).next())
});
import {
    b as k,
    e as D,
    f as F,
    c as i,
    S as N,
    i as b,
    u as O,
    a as z,
    F as B,
    g as H,
    h as M,
    t as x
} from "./solid-js-26bd2957.js";
import {
    e as _,
    u as j,
    c as q,
    L as A,
    E as G,
    i as S,
    f as J,
    g as K,
    b as w,
    s as Q
} from "./manifest-4a9d96af.js";
import {
    P as U
} from "./PopularSectionItem-f181d0d1.js";
import {
    b as V
} from "./apis-fc5d0f98.js";
import {
    t as W
} from "./i18n-84cf21fb.js";
import {
    u as X
} from "./store-de7ddcb4.js";
import {
    d as R
} from "./debounce-f7740f4e.js";
var Y = x("<div>"),
    Z = x('<div class="min-h-56 center">');
const ee = a => {
        let s;
        const [t, d] = k(_.mobile ? 2 : 6), [u, f] = k(""), m = j();
        X();
        const l = e => h(void 0, null, function*() {
                if (e) {
                    const r = "/platform-lottery/lottery-info/list-lotteries/",
                        n = yield K().post(r, {
                            distinctId: w.userId,
                            sortBy: "letter_asc",
                            name: e,
                            bcLang: Q.lang,
                            browserLang: navigator.language
                        }).finally(() => {
                            S.emit("sensorsTrack", {
                                event: "search_sent",
                                search_module: "explore search",
                                side_filter: "Lottery",
                                key_words: e
                            })
                        });
                    return a.onResult && a.onResult(n.list.length), n.list
                } else return []
            }),
            [o, {
                refetch: c,
                mutate: C
            }] = D(u, l),
            I = R(e => {
                f(e)
            }, 1e3, {
                leading: !1,
                trailing: !0
            });
        F(() => {
            I(a.search)
        });
        const P = e => h(void 0, null, function*() {
            if (!w.login) {
                m("/login/signin");
                return
            }
            e.hasLike = !e.hasLike, C(structuredClone(o())), yield V(e.id, e.hasLike), c()
        });
        return q(() => s, R(({
            width: e
        }, r) => {
            if (r === s) {
                const n = Math.floor(e / 210);
                n !== t() && d(_.mobile ? 2 : n)
            }
        })), i(N, {
            get fallback() {
                return (() => {
                    var e = Z();
                    return b(e, i(A, {})), e
                })()
            },
            get children() {
                var e = Y();
                return O(r => s = r, e), b(e, i(z, {
                    get when() {
                        var r;
                        return ((r = o()) == null ? void 0 : r.length) > 0
                    },
                    get fallback() {
                        return i(G, {
                            get children() {
                                return W("There are no lotteries to display")
                            }
                        })
                    },
                    get children() {
                        return i(B, {
                            get each() {
                                return o()
                            },
                            children: (r, n) => i(U, {
                                data: r,
                                onClickLike: () => P(r),
                                get itemIndex() {
                                    return n()
                                },
                                track: g => {
                                    S.emit("sensorsTrack", L({
                                        event: "search_result_click",
                                        side_filter: "Lottery",
                                        is_filter_provder: !0,
                                        key_words: a.search
                                    }, g))
                                }
                            })
                        })
                    }
                })), H(r => {
                    var v;
                    var n = t(),
                        g = J("mt-4 pb-10", ((v = o()) == null ? void 0 : v.length) > 0 && "grid gap-2 grid-cols-[repeat(var(--grid-cols),minmax(0,1fr))]");
                    return n !== r.e && ((r.e = n) != null ? e.style.setProperty("--grid-cols", n) : e.style.removeProperty("--grid-cols")), g !== r.t && M(e, r.t = g), r
                }, {
                    e: void 0,
                    t: void 0
                }), e
            }
        })
    },
    ce = ee;
export {
    ce as L
};