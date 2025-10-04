import {
    f as I,
    b as E,
    d as _,
    i as s,
    c as a,
    u as A,
    e as D,
    a as L,
    t as g,
    m as F
} from "./web-46c35164.js";
import {
    c as h,
    u as z,
    a2 as j,
    j as y,
    M as B,
    aa as G,
    e as b,
    z as M,
    n as v,
    E as N,
    T as O,
    f as R,
    a9 as U,
    s as W
} from "./manifest-d92afe19.js";
import {
    P as d,
    a as H,
    W as $
} from "./widget-entry-c7d9bd7a.js";
import {
    j as V,
    h as X,
    F as w,
    d as q,
    c as J,
    S as x
} from "./solid-js-871c99e1.js";
import {
    t as u
} from "./i18n-fd9a94dd.js";
import {
    c as K
} from "./store-2fc868cc.js";
import {
    D as Q
} from "./dom-empty-fallback-7a4424ca.js";
import {
    c as Y,
    i as Z
} from "./baseService-102e5148.js";
import {
    s as k
} from "./_shuffleSelf-92183780.js";
import {
    v as ee
} from "./values-ac915b33.js";
import {
    i as te
} from "./isArray-79a0be9c.js";
import {
    t as re
} from "./_baseFindIndex-928665d4.js";
import "./index-fe04da94.js";
import "./index-d963c58c.js";
import "./http-696896a0.js";
import "./index-0a013ed3.js";
import "./TermWithData-92578748.js";
import "./utils-0702ff35.js";
import "./popup-game-limits-38371d44.js";
import "./index-feaa71f9.js";
import "./_arrayMap-2bcec0e7.js";
import "./_baseFor-371c5662.js";
import "./_MapCache-91cc8331.js";
import "./_baseGetTag-c2e287b9.js";
import "./_baseIsEqual-7dac899d.js";
import "./groupBy-843aaa6e.js";
import "./_baseIteratee-a7d854cc.js";
import "./toString-1f7cb583.js";
import "./memoize-91f976fa.js";
import "./helpers-ece5dfb8.js";
import "./vip-5eda96e7.js";
import "./index-9f4ab8bd.js";
import "./enums-fd45c1cf.js";
import "./index-03b88e03.js";
import "./index-9e8fcb6a.js";
import "./empty-placeholder-dad11c15.js";
import "./debounce-9b1358db.js";
import "./toNumber-67386818.js";
import "./last-862de5a8.js";
import "./_basePropertyOf-20a61b2b.js";
import "./index-950def67.js";
import "./_baseIndexOf-fe3207b1.js";
import "./noop-cb277961.js";
import "./router-73d3f837.js";
import "./countdown-91927513.js";
import "./index-a51223a0.js";
import "./rakeback-rule-fbe3987e.js";
import "./common-progress-bar-3191aef7.js";

function C(e, t, o) {
    return e === e && (o !== void 0 && (e = e <= o ? e : o), t !== void 0 && (e = e >= t ? e : t)), e
}

function ae(e, t) {
    return k(Y(e), C(t, 0, e.length))
}

function oe(e, t) {
    var o = ee(e);
    return k(o, C(t, 0, o.length))
}

function ne(e, t, o) {
    (o ? Z(e, t, o) : t === void 0) ? t = 1: t = re(t);
    var i = te(e) ? ae : oe;
    return i(e, t)
}
var T = g("<div>");
const le = e => {
    const [t, o] = V(e, ["value", "onChange", "options"]), i = X(() => e.value);
    return (() => {
        var c = T();
        return E(c, _(o, {
            get class() {
                return h("flex flex-row gap-2", o.class)
            }
        }), !1, !0), s(c, a(w, {
            get each() {
                return e.options
            },
            children: p => (() => {
                var m = T();
                return A(f => {
                    q(() => {
                        i(p.value) && f.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        })
                    })
                }, m), m.$$click = e.onChange, m.$$clickData = p.value, s(m, () => p.label), D(() => L(m, h(i(p.value) ? "bg-layer5 text-brand brightness-125" : "bg-layer4 text-secondary", "btn-like min-w-16 cursor-pointer rounded-lg p-2 text-center text-base font-extrabold transition-all"))), m
            })()
        })), c
    })()
};
I(["click"]);
var ie = g("<div class=@container>"),
    se = g("<span class=text-primary>"),
    me = g('<header class="text-base font-extrabold text-primary lg:text-lg">'),
    ce = g('<div class="mt-3 flex flex-row flex-wrap rounded-lg lg:-mx-2">'),
    pe = g('<div class="pb-4 pt-4 sm:pt-0">'),
    ue = g('<div class="flex w-full justify-center text-primary">');
const ge = e => a(O, {
        get when() {
            return b.mobile
        },
        get fallback() {
            return (() => {
                var t = ie();
                return s(t, () => e.children), t
            })()
        },
        get children() {
            return a(R, {
                get class() {
                    return h("headless-dialog text-transparent @container")
                },
                get title() {
                    return (() => {
                        var t = se();
                        return s(t, () => u("Promotion")), t
                    })()
                },
                get children() {
                    return e.children
                }
            })
        }
    }),
    st = e => {
        const t = z(),
            [o] = j(() => [`home/main/event-list/${y.areaCode}/`], () => B().get(`home/main/event-list/${y.areaCode}/`), {
                lockLocal: !0,
                version: 1
            }),
            [i, c] = K({
                tab: 0,
                gameType: d.All
            }),
            p = J(() => {
                if (!o()) return [];
                const n = [r => i.gameType === d.All || r.participatingGameType === i.gameType, r => i.tab === 0 ? !r.outDated : r.outDated];
                return o().eventList.filter(r => n.every(S => S(r)))
            }),
            m = G(n => a(H, _(n))),
            f = (n, l) => a(w, {
                each: n,
                children: r => m({
                    itemTag: r.tag,
                    imgCover: a(U, {
                        class: "absolute bottom-0 top-0 block w-full rounded-md",
                        get src() {
                            return W.darken ? r.eventDarkImg : r.eventBgImg
                        },
                        get width() {
                            return b.mobile ? 1200 : 800
                        },
                        alt: ""
                    }),
                    title: r.title,
                    endTime: r.liveEndTime,
                    inProgress: i.tab === 0,
                    onClick: () => {
                        r.landingPageUrl ? window.open(r.landingPageUrl, "_blank") : t(`/promotion/${r.eventCode}`, {
                            replace: l
                        })
                    }
                })
            });
        if (e.filterActEventId) return c({
            tab: 0
        }), f(ne(p().filter(n => n.actEventId !== e.filterActEventId), 3), !0);
        const P = [{
            value: d.All,
            label: u("All")
        }, {
            value: d.Casino,
            label: u("Casino")
        }, {
            value: d.Sport,
            label: u("Sport")
        }];
        return a(ge, {
            get children() {
                var n = pe();
                return s(n, a(x, {
                    get when() {
                        return !b.mobile
                    },
                    get children() {
                        var l = me();
                        return s(l, () => u("Promotion")), l
                    }
                }), null), s(n, a($, {
                    target: "banner-promotion"
                }), null), s(n, a(x, {
                    get when() {
                        return M.onlyBc
                    },
                    get children() {
                        return [a(v, {
                            get value() {
                                return i.tab
                            },
                            class: "mt-3 h-10 w-full rounded-lg sm:w-64",
                            onChange: l => {
                                c("tab", l)
                            },
                            get children() {
                                return [a(v.TabItem, {
                                    class: "hidden h-10 w-12 rounded-none",
                                    get title() {
                                        return u("Latest Promotion")
                                    }
                                }), a(v.TabItem, {
                                    class: "hidden h-10",
                                    get title() {
                                        return u("Archived")
                                    }
                                })]
                            }
                        }), a(le, {
                            class: "mt-3",
                            options: P,
                            get value() {
                                return i.gameType
                            },
                            onChange: l => {
                                c("gameType", l)
                            }
                        }), (() => {
                            var l = ce();
                            return s(l, a(Q, {
                                get fallback() {
                                    return (() => {
                                        var r = ue();
                                        return s(r, a(N, {
                                            type: "empty"
                                        })), r
                                    })()
                                },
                                get children() {
                                    return [a($, {
                                        target: "promotion-list"
                                    }), F(() => f(p()))]
                                }
                            })), l
                        })()]
                    }
                }), null), n
            }
        })
    };
export {
    st as
    default
};