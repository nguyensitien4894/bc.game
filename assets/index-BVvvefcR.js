import {
    d as k,
    b,
    z as M,
    h as R,
    v as x,
    x as n,
    k as i,
    X as v,
    D as A,
    E as N,
    J as T,
    m as S,
    n as P,
    G as z,
    a1 as q
} from "./vendor-CR7NILRE.js";
import {
    q as C,
    B as W,
    X as $,
    au as F,
    av as G,
    aw as j,
    i as X,
    l as B,
    d as D,
    e as w,
    a as E
} from "./common-jbtJucx3.js";
import {
    a as J,
    t as y,
    u as V
} from "./Application-CExkuTua.js";
import "./index-DxYPFwcM.js";
var Y = x('<div class="flex w-full items-center"><div>');
const le = d => {
    let e, h = !0;
    const l = "scroll-button-active",
        [o, m] = b(!1),
        [g, r] = b(!1),
        c = M(() => d.children),
        a = t => {
            if (e) {
                t = t === void 0 ? e.scrollLeft : t;
                const s = Math.max(0, e.scrollWidth - e.clientWidth);
                t < s && r(!0), t > 0 && m(!0), t <= 2 && m(!1), t >= s - 2 && r(!1)
            }
        },
        f = () => {
            const t = e.querySelector(`.${l}`);
            if (e && t) {
                const s = e.clientWidth,
                    p = t.offsetWidth,
                    _ = Math.max(0, e.scrollWidth - e.clientWidth),
                    L = Math.max(Math.min(t.offsetLeft - (s / 3 - p / 3), _), 0);
                a(L), e.scrollTo({
                    left: L,
                    behavior: "smooth"
                })
            }
        },
        u = t => () => {
            if (e) {
                const s = e.clientWidth / 2,
                    p = Math.max(0, e.scrollWidth - e.clientWidth),
                    _ = t === "left" ? Math.max(e.scrollLeft - s, 0) : Math.min(e.scrollLeft + s, p);
                a(_), e.scrollTo({
                    left: _,
                    behavior: "smooth"
                })
            }
        };
    return R(() => {
        c.toArray().forEach((s, p) => {
            if (p === Number(d.activeIndex)) {
                let _ = s;
                _ ? .setAttribute ? .("class", C(l, _ ? .getAttribute("class") ? ? ""))
            }
        }), h && (h = !1, f())
    }), (() => {
        var t = Y(),
            s = t.firstChild;
        n(t, i(v, {
            get when() {
                return o()
            },
            get children() {
                return i(W, {
                    class: "size-8 bg-layer4",
                    get onClick() {
                        return u("left")
                    },
                    get children() {
                        return i($, {
                            name: "Arrow",
                            class: "size-6"
                        })
                    }
                })
            }
        }), s), s.addEventListener("scrollend", () => {
            a()
        }), s.$$touchend = () => {
            a()
        };
        var p = e;
        return typeof p == "function" ? T(p, s) : e = s, s.style.setProperty("scroll-padding-inline", "1rem"), n(s, c), n(t, i(v, {
            get when() {
                return g()
            },
            get children() {
                return i(W, {
                    class: "size-8 bg-layer4",
                    get onClick() {
                        return u("right")
                    },
                    get children() {
                        return i($, {
                            name: "Arrow",
                            class: "size-6 rotate-180"
                        })
                    }
                })
            }
        }), null), A(() => N(s, C("hid smooth-scroll relative flex w-full snap-x snap-mandatory gap-0.5 overflow-auto scroll-smooth hide-scroll", o() && "ml-2", g() && "mr-2"))), t
    })()
};
k(["touchend"]);

function K(d) {
    const e = localStorage.getItem("bc_search_history");
    if (!e || e === "") localStorage.setItem("bc_search_history", d);
    else {
        const h = e.split(",");
        let l = [d];
        h.map(o => {
            l.includes(o) || l.push(o)
        }), l.length > 10 && l.splice(-1, 1), localStorage.setItem("bc_search_history", l.join(","))
    }
}

function ae(d, e) {
    const [h, l] = b(!1), o = F(r => G(j, r, 1600)), m = S(r => {
        const c = d();
        return c.length > 2 && o() ? c : r
    }), [g] = P(() => m(), async r => {
        if (!r) return [];
        l(!0);
        const c = await X().post("/game/home/search/game/", {
            keyword: r,
            page: 1,
            device: 1,
            pageSize: w.mobile ? 99 : 100,
            areaCode: D.areaCode,
            isBrazil: B.isesportsbr
        });
        return K(r), E.emit("bc-search-result"), J.trackEvent("search_sent", {
            search_module: "casino search",
            key_words: r,
            ...e
        }), l(!1), c.list
    }, {
        initialValue: []
    });
    return [g, h]
}
var O = x('<div class="mt-4 flex items-center"><p class=font-extrabold></p><div class="ml-auto text-secondary sm:cursor-pointer"> (<!>)'),
    I = x('<div class="flex flex-wrap items-center gap-2 mt-3">'),
    Q = x('<p class="mt-4 font-extrabold">'),
    U = x('<div class="absolute left-0 right-0 z-10 w-full rounded-lg border border-input bg-layer3 p-4 top-full"><p class="text-center text-secondary">'),
    H = x('<div class="flex h-5 items-center rounded-md bg-layer5 px-2 sm:cursor-pointer"><span class="text-xs text-secondary">');
const ne = function(e) {
    const h = localStorage.getItem("bc_search_history"),
        [l, o] = b(h ? h.split(",") : []);
    E.on("bc-search-result", () => {
        const r = localStorage.getItem("bc_search_history");
        o(r ? r.split(",") : [])
    });
    const m = S(() => w.mobile ? l().slice(0, 5) : l()),
        g = r => {
            const c = [...l()],
                a = c.findIndex(f => f === r);
            a >= 0 && (c.splice(a, 1), o(c), localStorage.setItem("bc_search_history", c.join(",")))
        };
    return (() => {
        var r = U(),
            c = r.firstChild;
        return r.style.setProperty("box-shadow", "0px 4px 8px 0px rgba(0, 0, 0, 0.10)"), r.style.setProperty("transform", "translateY(0.5rem)"), n(c, () => y("Search requires at least 3 characters.")), n(r, i(v, {
            get when() {
                return l().length > 0
            },
            get children() {
                return [(() => {
                    var a = O(),
                        f = a.firstChild,
                        u = f.nextSibling,
                        t = u.firstChild,
                        s = t.nextSibling;
                    return s.nextSibling, n(f, () => y("History")), u.$$click = () => {
                        o([]), localStorage.setItem("bc_search_history", "")
                    }, n(u, () => y("Clear search"), t), n(u, () => l().length, s), a
                })(), (() => {
                    var a = I();
                    return n(a, i(z, {
                        get each() {
                            return m()
                        },
                        children: f => (() => {
                            var u = H(),
                                t = u.firstChild;
                            return t.$$click = () => e.setSearch(f), n(t, f), n(u, i($, {
                                name: "Close",
                                class: "text-secondary ml-0.5 size-3",
                                onClick: () => g(f)
                            }), null), u
                        })()
                    })), a
                })()]
            }
        }), null), n(r, i(v, {
            get when() {
                return !B.isesportsbr
            },
            get children() {
                return [(() => {
                    var a = Q();
                    return n(a, () => y("Suggested")), a
                })(), (() => {
                    var a = I();
                    return n(a, i(q, {
                        get children() {
                            return i(Z, {
                                get setSearch() {
                                    return e.setSearch
                                }
                            })
                        }
                    })), a
                })()]
            }
        }), null), r
    })()
};

function Z(d) {
    const [e] = V(() => ({
        sectionName: "hot_games"
    })), h = S(() => e() ? .gameList.list || []), l = S(() => w.mobile ? h().slice(0, 5) : h());
    return i(z, {
        get each() {
            return l()
        },
        children: o => (() => {
            var m = H(),
                g = m.firstChild;
            return m.$$click = () => d.setSearch(o.fullName), n(g, () => o.fullName), m
        })()
    })
}
k(["click"]);
export {
    le as S, ne as a, ae as u
};