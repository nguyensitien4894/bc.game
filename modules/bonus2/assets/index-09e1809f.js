import {
    f as V,
    c as d,
    u,
    j as C,
    e as S,
    a as k,
    s as f,
    t as x,
    r as X
} from "./web-46c35164.js";
import {
    c as N,
    f as j,
    M as z,
    S as K,
    o as _,
    a as F,
    u as T,
    y as U,
    d as D,
    A as L
} from "./solid-js-871c99e1.js";
import {
    e as h,
    c as $,
    u as E,
    g as B,
    j as I,
    t as Y
} from "./manifest-d92afe19.js";
import {
    h as J
} from "./http-696896a0.js";
import {
    c as G
} from "./socket-events-84989a39.js";
import {
    t as H
} from "./i18n-fd9a94dd.js";
import "./enums-fd45c1cf.js";
import "./proto-d99c76ac.js";
const Z = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAh1BMVEUAAAD3uAjzsgb7xAz/zAb+yQb/zAb2tgf5vQfwqQbwqQbwqAf/zQfvqAbwrAf/ywbvqAf/zQbwqAf/zQf/zgf/zgfvqAb/zAb/swb////vqAb+xgb/vwb/uQb/6bj3uwb/5Kb/viv6wgb/1XX/xUD/9d7/8dL/35T/2of/ylP/uBf/+ev/wzsaL2uLAAAAF3RSTlMAN/4U9+/dRiLoo5WU99jCvqVhgmxQdCrfkKYAAAF0SURBVDjLnZRtl4IgEIVB03zpZWtrY0CxUqut/v/vW8IRB60v+xxOH+ieO5eBkVHm2So6q8Msihdz9pYkC86HgWiTTCRhjpKB2SL0NTytDlNiTjXbJdFQsz3RSCw1xak48VFFKURZKOfFMXMa9FuFcPSyuEufy36jFIQCN79tf2RvJCwnuwwlFnxZZVJRnyOczKJeCyNaBl4eDfUFGporNvclK69YC4a2sxLdPxxj90b3B1z0A+CIVhj9S9JENcCvaAA0PeGGrVAkMDZca/1SkgOuWeqJNFj0nYpiPBwRHW/m5yI6UOSXu9pKLcCJlhsFfxqn2gSDuxc8cy3A41mufgu2QzMxlW6hFn4zQzm+lkbDk7YpYgxDOavm9loYGy+YXJ4SI/CpJMxaqYkKfdDIwCV5vpOHGeHw/chqmIPOpXCD4OY9/zxSO+bIUPVZQyv6RHvmMV8Faqx5813Zpr5szdk7eJ5WZyuM1ruQfSbhnIfsP/wBKN5bKmjXh2cAAAAASUVORK5CYII=",
    tt = "/modules/bonus2/assets/activity_castle-dc3abcb7.png",
    ot = "/modules/bonus2/assets/activity_coomary-0c940f14.png",
    et = "/modules/bonus2/assets/activity_light-2226f5dc.png",
    at = "/modules/bonus2/assets/coco-web_part1-f64a0937.png",
    rt = "/modules/bonus2/assets/coco-web_part2-617f39a5.png",
    ct = "/modules/bonus2/assets/coomary-447536d1.png",
    st = "/modules/bonus2/assets/coomary_2-5c897c54.png",
    nt = "/modules/bonus2/assets/warp-pipe_part1-16a6a6b7.png",
    it = "/modules/bonus2/assets/warp-pipe_part2-6c1b9943.png",
    lt = "/modules/bonus2/assets/coco_halloween-3e324f6d.png",
    ut = "/modules/bonus2/assets/coco_halloween_2-399ab94d.png",
    pt = {
        activity_bitCoin: Z,
        activity_castle: tt,
        activity_coomary: ot,
        activity_light: et,
        cocoWeb_part1: at,
        cocoWeb_part2: rt,
        coomary: ct,
        coomary_2: st,
        warpPipe_part1: nt,
        warpPipe_part2: it
    },
    Q = {
        coco_halloween: lt,
        coco_halloween_2: ut
    },
    dt = "/modules/bonus2/assets/coco-web_part1-ea66e43b.png",
    mt = "/modules/bonus2/assets/coco-web_part2-a6c411c4.png",
    bt = "/modules/bonus2/assets/coomary-14ed4044.png",
    gt = "/modules/bonus2/assets/coomary_2-e8b8eb0f.png",
    ft = "/modules/bonus2/assets/warp-pipe_part1-2da2f381.png",
    ht = "/modules/bonus2/assets/warp-pipe_part2-1a020d91.png",
    vt = {
        cocoWeb_part1: dt,
        cocoWeb_part2: mt,
        coomary: bt,
        coomary_2: gt,
        warpPipe_part1: ft,
        warpPipe_part2: ht
    };
var yt = x('<div><img><img class="absolute -top-[16rem] w-4/5 cursor-pointer">'),
    wt = x('<div class="fixed bottom-0 left-20 z-[1001] hidden w-40 cursor-pointer"><img class="absolute -bottom-24 -left-8 -z-10 w-28"><img class="absolute -bottom-80 left-1 z-20 h-40 w-20">'),
    At = x('<div class="fixed bottom-0 left-20 z-[1001] hidden w-20 cursor-pointer"><img class="absolute -bottom-72 left-1 h-40 w-20 scale-125"><img><img class="absolute -bottom-72 left-1 h-40 w-20 scale-125">'),
    _t = x('<div class="fixed bottom-5 right-0 z-[1001] hidden w-24 cursor-pointer"><img class="absolute -bottom-28">');
const Ct = () => !1,
    W = () => h.inActive,
    y = () => W() ? vt : pt,
    P = o => {
        const t = E();
        let c = !1;
        const i = () => {
            c || T(() => {
                c = !0, o.cocoGotCaught.restart().then(() => {
                    var a, s;
                    if (!I.login) return t("/login/regist");
                    if (I.vipLevel < 14) {
                        Y(H("Oops. You must be higher than VIP14 to catch Coco."));
                        return
                    }
                    return J.post("/game/support/bonus/crocodile/", {
                        currencyName: (a = G()) == null ? void 0 : a.currencyName,
                        dataSign: (s = G()) == null ? void 0 : s.dataSign
                    }).then(Y.success).then(() => {
                        o.cocoAppear.reverse()
                    }).catch(Y)
                }).finally(() => {
                    c = !1
                })
            })
        };
        return _(() => {
            let a = setTimeout(() => {
                o.cocoAppear.reverse()
            }, 6e4);
            F(() => clearTimeout(a))
        }), {
            handleCocoGotCaught: i
        }
    },
    v = o => {
        const t = B.timeline(o);
        return F(() => {
            B.killTweensOf(t)
        }), t
    },
    St = () => {
        let o, t, c;
        const i = {
                cocoAppear: v({
                    paused: !0
                }),
                cocoGotCaught: v({
                    paused: !0
                })
            },
            {
                handleCocoGotCaught: a
            } = P(i);
        return _(() => {
            i.cocoAppear.to(c, {
                duration: .5,
                height: 246 * h.remScale,
                display: "block"
            }).to([o], {
                duration: 1.5,
                top: 0,
                ease: "Power1.easeIn"
            }).to([t], {
                duration: 1.5,
                top: 0,
                ease: "Power1.easeIn"
            }).play(), i.cocoGotCaught.to(t, {
                scale: .9,
                rotation: -3,
                duration: .1
            }).to(t, {
                scale: .9,
                rotation: -3,
                duration: .1
            }).to(t, {
                scale: 1.1,
                rotation: 3,
                duration: .1
            }).to(t, {
                scale: 1.1,
                rotation: -3,
                duration: .1
            }).to(t, {
                scale: 1.1,
                rotation: 3,
                duration: .1
            }).to(t, {
                scale: 1.1,
                rotation: -3,
                duration: .1
            }).to(t, {
                scale: 1.1,
                rotation: 3,
                duration: .1
            }).to(t, {
                scale: 1.1,
                rotation: -3,
                duration: .1
            }).to(t, {
                scale: 1.1,
                rotation: 3,
                duration: .1
            }).to(t, {
                scale: 1,
                rotation: 0,
                duration: .1
            })
        }), (() => {
            var s = yt(),
                r = s.firstChild,
                n = r.nextSibling;
            return u(e => c = e, s), C(s, "click", a, !0), u(e => o = e, r), u(e => t = e, n), S(e => {
                var m = $("fixed right-12 top-15 hidden w-24", h.mobile ? "z-[98]" : "z-100"),
                    b = $("absolute -top-[16rem] w-4/5 cursor-pointer", W() && "-left-8"),
                    g = y().cocoWeb_part1,
                    p = y().cocoWeb_part2;
                return m !== e.e && k(s, e.e = m), b !== e.t && k(r, e.t = b), g !== e.a && f(r, "src", e.a = g), p !== e.o && f(n, "src", e.o = p), e
            }, {
                e: void 0,
                t: void 0,
                a: void 0,
                o: void 0
            }), s
        })()
    },
    xt = () => {
        let o = null,
            t = null,
            c = null,
            i = null;
        const a = {
                cocoAppear: v({
                    paused: !0
                }),
                cocoGotCaught: v({
                    paused: !0
                })
            },
            {
                handleCocoGotCaught: s
            } = P(a);
        return _(() => {
            a.cocoAppear.to(o, {
                display: "block"
            }).to([c, i], {
                duration: 1,
                bottom: -16 * h.remScale
            }).to(t, {
                duration: 1,
                bottom: 108 * h.remScale
            }).play(), a.cocoGotCaught.to(t, {
                y: 0,
                scaleY: 1,
                duration: .2
            }).to(t, {
                y: -30,
                scaleY: 1.1,
                duration: .1
            }).to(t, {
                y: 0,
                scaleY: 1,
                duration: .07
            }).to(t, {
                y: -15,
                scaleY: 1.05,
                duration: .17
            }).to(t, {
                y: 0,
                scaleY: .95,
                duration: .1
            }).to(t, {
                y: -4,
                scaleY: 1.02,
                duration: .1
            }).to(t, {
                y: 0,
                scaleY: 1,
                duration: .1
            })
        }), (() => {
            var r = wt(),
                n = r.firstChild,
                e = n.nextSibling,
                m = o;
            typeof m == "function" ? u(m, r) : o = r, C(r, "click", s, !0);
            var b = t;
            typeof b == "function" ? u(b, n) : t = n;
            var g = c;
            return typeof g == "function" ? u(g, e) : c = e, S(p => {
                var w = Q.coco_halloween,
                    l = Q.coco_halloween_2;
                return w !== p.e && f(n, "src", p.e = w), l !== p.t && f(e, "src", p.t = l), p
            }, {
                e: void 0,
                t: void 0
            }), r
        })()
    },
    Pt = () => {
        let o = null,
            t = null,
            c = null,
            i = null;
        const a = {
                cocoAppear: v({
                    paused: !0
                }),
                cocoGotCaught: v({
                    paused: !0
                })
            },
            {
                handleCocoGotCaught: s
            } = P(a);
        return _(() => {
            a.cocoAppear.to(o, {
                display: "block"
            }).to([c, i], {
                duration: 1,
                bottom: 0
            }).to(t, {
                duration: 1,
                bottom: (W() ? 172 : 176) * h.remScale
            }).play(), a.cocoGotCaught.to(t, {
                y: 0,
                scaleY: 1,
                duration: .2
            }).to(t, {
                y: -30,
                scaleY: 1.1,
                duration: .1
            }).to(t, {
                y: 0,
                scaleY: 1,
                duration: .07
            }).to(t, {
                y: -15,
                scaleY: 1.05,
                duration: .17
            }).to(t, {
                y: 0,
                scaleY: .95,
                duration: .1
            }).to(t, {
                y: -4,
                scaleY: 1.02,
                duration: .1
            }).to(t, {
                y: 0,
                scaleY: 1,
                duration: .1
            })
        }), (() => {
            var r = At(),
                n = r.firstChild,
                e = n.nextSibling,
                m = e.nextSibling,
                b = o;
            typeof b == "function" ? u(b, r) : o = r, C(r, "click", s, !0);
            var g = c;
            typeof g == "function" ? u(g, n) : c = n;
            var p = t;
            typeof p == "function" ? u(p, e) : t = e;
            var w = i;
            return typeof w == "function" ? u(w, m) : i = m, S(l => {
                var O = y().warpPipe_part1,
                    R = $("absolute -bottom-24 left-0 -z-10 w-20"),
                    q = y().coomary,
                    M = y().warpPipe_part2;
                return O !== l.e && f(n, "src", l.e = O), R !== l.t && k(e, l.t = R), q !== l.a && f(e, "src", l.a = q), M !== l.o && f(m, "src", l.o = M), l
            }, {
                e: void 0,
                t: void 0,
                a: void 0,
                o: void 0
            }), r
        })()
    },
    zt = () => {
        let o = null,
            t = null;
        const c = {
                cocoAppear: v({
                    paused: !0
                }),
                cocoGotCaught: v({
                    paused: !0
                })
            },
            {
                handleCocoGotCaught: i
            } = P(c);
        return _(() => {
            c.cocoAppear.to(o, {
                duration: .2,
                height: 271 * h.remScale,
                display: "block"
            }).to(t, {
                duration: 1.5,
                bottom: 143 * h.remScale,
                ease: "easeOutBack"
            }).play(), c.cocoGotCaught.to(t, {
                y: 0,
                rotationX: 0,
                duration: 0
            }).to(t, {
                y: -6,
                rotationX: -9,
                duration: .065
            }).to(t, {
                y: 5,
                rotationX: 7,
                duration: .12
            }).to(t, {
                y: -3,
                rotationX: -5,
                duration: .13
            }).to(t, {
                y: 2,
                rotationX: 3,
                duration: .12
            }).to(t, {
                y: 0,
                rotationX: 0,
                duration: .065
            })
        }), (() => {
            var a = _t(),
                s = a.firstChild,
                r = o;
            typeof r == "function" ? u(r, a) : o = a, C(a, "click", i, !0);
            var n = t;
            return typeof n == "function" ? u(n, s) : t = s, S(() => f(s, "src", y().coomary_2)), a
        })()
    },
    Yt = () => {
        const o = ["top-right", "left-bottom", "right-bottom"];
        return o[Math.floor(Math.random() * o.length)]
    },
    kt = o => {
        const t = N(() => o.position || Yt());
        return d(j, {
            get children() {
                return [d(z, {
                    get when() {
                        return t() === "top-right"
                    },
                    get children() {
                        return d(St, {})
                    }
                }), d(z, {
                    get when() {
                        return t() === "left-bottom"
                    },
                    get children() {
                        return d(K, {
                            get when() {
                                return Ct()
                            },
                            get fallback() {
                                return d(Pt, {})
                            },
                            get children() {
                                return d(xt, {})
                            }
                        })
                    }
                }), d(z, {
                    get when() {
                        return t() === "right-bottom"
                    },
                    get children() {
                        return d(zt, {})
                    }
                })]
            }
        })
    };
V(["click"]);
let A;
const $t = () => A || (A = document.createElement("div"), document.body.appendChild(A), A),
    Qt = () => {
        const o = U();
        D(() => {
            var t;
            (t = G()) != null && t.dataSign && L(o, () => {
                X(() => d(kt, {}), $t())
            })
        })
    };
export {
    Qt as cocoRegister, Qt as
    default
};