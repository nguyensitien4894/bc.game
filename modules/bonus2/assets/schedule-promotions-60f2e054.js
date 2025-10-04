var z = (e, s, i) => new Promise((r, a) => {
    var c = n => {
            try {
                t(i.next(n))
            } catch (g) {
                a(g)
            }
        },
        o = n => {
            try {
                t(i.throw(n))
            } catch (g) {
                a(g)
            }
        },
        t = n => n.done ? r(n.value) : Promise.resolve(n.value).then(c, o);
    t((i = i.apply(e, s)).next())
});
import {
    b as v,
    d as I,
    o as M,
    i as W,
    F as j,
    S as _,
    h as Z,
    a as q,
    g as ee,
    r as te
} from "./solid-js-871c99e1.js";
import {
    u as ne
} from "./router-73d3f837.js";
import {
    a0 as re,
    h as le,
    av as se,
    b,
    aw as oe,
    a8 as U,
    B as L,
    I as F,
    g as ie,
    T as ae,
    c as T,
    u as ce,
    e as P,
    O as de,
    F as Q,
    P as ue,
    a1 as me,
    p as ge,
    s as B,
    z as R,
    at as he,
    M as fe,
    j as be
} from "./manifest-d92afe19.js";
import {
    f as Y,
    c as l,
    u as ve,
    i as d,
    e as y,
    m as G,
    t as m,
    j as ye,
    a as H,
    h as V
} from "./web-46c35164.js";
import {
    t as N
} from "./i18n-fd9a94dd.js";
var we = m('<div class="flex h-6 justify-center py-2"><ul class="flex gap-x-1.5">'),
    xe = m('<span class="block h-full w-full rounded-full bg-brand will-change-transform">'),
    pe = m("<li>"),
    _e = m('<div class="flex h-[534px] w-full flex-col overflow-hidden bg-white_alpha5"><div class="h-[510px] w-full flex-none bg-layer2 px-4 pt-4"></div><div class="flex h-[24px] w-full justify-center bg-layer2"><div class="flex items-center">'),
    $e = m('<div class="mt-2.5 w-full">'),
    ke = m('<div class="relative h-full flex-1 bg-layer2"><div class="flec center w-full"></div><div class="absolute left-0 top-0 w-full overflow-hidden">');

function O(e, s, i) {
    const r = e[s];
    i(r), b.emit("sensorsTrack", {
        event: "promotion_button_click",
        bannerid: r.bannerId
    }), b.emit("event-tracking", {
        eventType: "button_click",
        dlgId: r.bannerId
    })
}
const Pe = e => {
    const s = Z(() => e.index < 0 ? e.index + e.dots : e.index),
        i = t => () => {
            e.cb(t), e.onChange(t)
        },
        [r, a] = v(0),
        c = {
            x: 0
        },
        o = ie.to(c, {
            x: 1,
            duration: 3,
            onUpdate() {
                a(c.x)
            },
            onComplete() {
                e.onChange(t => (t + 1) % e.dots)
            },
            ease: "none"
        });
    return I(t => (e.index !== t && !e.pause && o.restart(), e.index)), I(() => {
        e.pause ? o.pause() : o.resume()
    }), q(() => o.kill()), (() => {
        var t = we(),
            n = t.firstChild;
        return d(n, l(j, {
            get each() {
                return Array(e.dots).fill(null)
            },
            children: (g, h) => (() => {
                var w = pe();
                return ye(w, "click", i(h()), !0), w.style.setProperty("transition-timing-function", "ease"), d(w, l(ae, {
                    get when() {
                        return s(h())
                    },
                    get children() {
                        var x = xe();
                        return x.style.setProperty("transform-origin", "center left"), y(f => (f = `translateX(${s(h())?`${(r()-1)*100}%`:0})`) != null ? x.style.setProperty("transform", f) : x.style.removeProperty("transform")), x
                    }
                })), y(() => H(w, T(s(h()) ? "w-11" : "w-1.5", "h-1.5 cursor-pointer overflow-hidden rounded-full bg-layer4 transition-all duration-500"))), w
            })()
        })), t
    })()
};

function Ie(e) {
    const [s, i] = v();
    re(() => s());
    let r;
    const [a, c] = v(0), o = () => e.promotionsList.length;

    function t() {
        var f;
        return (((f = r.track.details) == null ? void 0 : f.abs) || 0) % r.slides.length
    }
    const n = le(),
        [g, h] = v(!1),
        w = () => !n() || g();
    I(() => {
        a() >= o() ? (c(0), e.setSelect(e.promotionsList[0])) : e.setSelect(e.promotionsList[a()])
    }), I(() => {
        t() !== a() && r.moveToIdx(a())
    }), se(() => r.container, {
        mouseenter: () => {
            h(!0)
        },
        mouseleave: () => {
            h(!1)
        }
    }), M(() => {
        b.emit("sensorsTrack", {
            event: "promotion_banner_show",
            bannerid: e.select.bannerId
        }), b.emit("event-tracking", {
            eventType: "dialog_view",
            dlgId: e.select.bannerId
        })
    });
    const x = W(() => l(Pe, {
        get pause() {
            return w()
        },
        get index() {
            return a()
        },
        get dots() {
            return o()
        },
        onChange: c,
        cb: f => {
            O(e.promotionsList, f, e.setSelect)
        }
    }));
    return (() => {
        var f = _e(),
            E = f.firstChild,
            J = E.nextSibling,
            K = J.firstChild;
        return ve(i, E), d(E, l(oe, {
            class: "h-44 sm:h-auto",
            auto: 0,
            ref(u) {
                var $ = r;
                typeof $ == "function" ? $(u) : r = u
            },
            options: {
                dragSpeed: .2,
                loop: !0,
                slides: {
                    spacing: 16
                }
            },
            get children() {
                return l(j, {
                    get each() {
                        return e.promotionsList
                    },
                    children: u => {
                        const $ = !!u.buttonName,
                            S = $ ? 432 : 480;
                        return (() => {
                            var D = ke(),
                                C = D.firstChild,
                                p = C.nextSibling;
                            return S + "px" != null ? C.style.setProperty("height", S + "px") : C.style.removeProperty("height"), d(C, l(U, {})), S + "px" != null ? p.style.setProperty("height", S + "px") : p.style.removeProperty("height"), p.style.setProperty("background-size", "100% 100%"), p.style.setProperty("background-repeat", "no-repeat"), d(D, l(_, {
                                when: $,
                                get children() {
                                    var k = $e();
                                    return d(k, l(L, {
                                        type: "brand",
                                        class: "w-full",
                                        onClick: () => {
                                            u.buttonLink && window.open(u.buttonLink), b.emit("sensorsTrack", {
                                                event: "promotion_button_click",
                                                bannerid: u.bannerId
                                            })
                                        },
                                        get children() {
                                            return u.buttonName
                                        }
                                    })), k
                                }
                            }), null), y(k => (k = `url(${u.bannerUrl}?v=4&auto=format&dpr=2&w=600)`) != null ? p.style.setProperty("background-image", k) : p.style.removeProperty("background-image")), D
                        })()
                    }
                })
            }
        })), d(K, l(_, {
            get when() {
                return e.promotionsList.length > 1
            },
            get fallback() {
                return x()
            },
            get children() {
                return [l(L, {
                    class: "center mr-2 flex w-4 p-0 2xl:-left-6 2xl:w-6",
                    onClick: () => c(u => (O(e.promotionsList, u - 1, e.setSelect), u - 1)),
                    get children() {
                        return l(F, {
                            name: "Arrow",
                            class: "size-4 text-second hover:text-primary"
                        })
                    }
                }), G(() => x()), l(L, {
                    class: "center ml-2 flex w-4 p-0 2xl:-right-6 2xl:w-6",
                    get classList() {
                        return {
                            hidden: e.promotionsList.length < 2
                        }
                    },
                    onClick: () => c(u => (O(e.promotionsList, u + 1, e.setSelect), u + 1)),
                    get children() {
                        return l(F, {
                            name: "Arrow",
                            class: "size-4 rotate-180 text-second hover:text-primary"
                        })
                    }
                })]
            }
        })), f
    })()
}
Y(["click"]);
var X = m("<div>"),
    Se = m('<div class="relative flex h-12 w-full"><div class="flex h-full w-full items-center bg-layer2 px-3"><div class="flex-auto truncate"></div> '),
    Ce = m('<div class="mt-4 px-4">'),
    Le = m('<div class="w-full bg-white_alpha5"><div class="relative h-full flex-1 bg-layer2 pb-4"><div class="flec center h-60 w-full bg-layer3"></div><div class="absolute left-0 top-0 h-60 w-full overflow-hidden">');

function Te(e) {
    const [s, i] = v(!1);
    return (() => {
        var r = Se(),
            a = r.firstChild,
            c = a.firstChild;
        return c.nextSibling, r.$$click = () => i(o => !o), d(c, () => e.select.title), d(a, l(F, {
            get class() {
                return T("size-4 flex-none -rotate-180 transition-all", s() && "!-rotate-90")
            },
            name: "Arrow"
        }), null), d(r, l(_, {
            get when() {
                return s()
            },
            get children() {
                var o = X();
                return d(o, l(de, {
                    class: "h-full",
                    get children() {
                        return l(j, {
                            get each() {
                                return e.promotionsList
                            },
                            children: t => (() => {
                                var n = X();
                                return n.$$click = () => e.setSelect(t), d(n, () => t.title), y(() => H(n, T("h-12 items-center self-stretch truncate border-t border-third px-3 py-1 leading-10", e.select === t && "bg-[#D3E9E0] dark:bg-[#293F35]"))), n
                            })()
                        })
                    }
                })), y(() => H(o, T("absolute left-0 top-12 z-10 h-36 w-full rounded-b-xl bg-layer1"))), o
            }
        }), null), r
    })()
}

function Ee(e) {
    return ce(), M(() => {
        b.emit("sensorsTrack", {
            event: "promotion_banner_show",
            bannerid: e.select.bannerId
        }), b.emit("event-tracking", {
            eventType: "dialog_view",
            dlgId: e.select.bannerId
        })
    }), (() => {
        var s = Le(),
            i = s.firstChild,
            r = i.firstChild,
            a = r.nextSibling;
        return d(s, l(Te, e), i), d(r, l(U, {})), a.style.setProperty("background-position", "center"), a.style.setProperty("background-size", "cover"), d(i, l(_, {
            get when() {
                return e.select.buttonName
            },
            get children() {
                var c = Ce();
                return d(c, l(L, {
                    type: "brand",
                    class: "w-full",
                    onClick: () => {
                        const {
                            buttonLink: o
                        } = e.select || {};
                        o && (P.isAPP ? window.location.href = o : window.open(o)), b.emit("sensorsTrack", {
                            event: "promotion_button_click",
                            bannerid: e.select.bannerId
                        }), b.emit("event-tracking", {
                            eventType: "button_click",
                            dlgId: e.select.bannerId
                        })
                    },
                    get children() {
                        return e.select.buttonName
                    }
                })), c
            }
        }), null), y(c => (c = `url(${e.select.bannerUrl})`) != null ? a.style.setProperty("background-image", c) : a.style.removeProperty("background-image")), s
    })()
}
Y(["click"]);
var De = m('<div class="center flex size-full bg-layer4">'),
    ze = m('<div class="center flex h-60 w-full">'),
    Ne = m('<div class="flex h-10 items-center overflow-hidden bg-layer4 pl-4"><span>');
const Oe = 30,
    A = {
        title: {
            "border-top-left-radius": "0.75rem",
            "border-top-right-radius": "0.75rem"
        },
        container: {
            mobile: void 0,
            desktop: {
                "border-bottom-left-radius": "0.75rem",
                "border-bottom-right-radius": "0.75rem"
            }
        }
    };

function Ae(e) {
    const [s, i] = v(!1), [r, a] = v(null);
    q(() => {
        s() && window.localStorage.setItem("hidden-promotions-one-day", String(Date.now()))
    });
    const [, c] = Q(v([]), {
        name: "display-only-once-promotions"
    }), o = t => {
        t.displayOnlyOnce === 1 && c(n => n.includes(t.bannerId) ? n : n.length >= Oe ? [...n.slice(1), t.bannerId] : [...n, t.bannerId]), a(t)
    };
    return M(() => o(e.promotionsList[0])), l(ue, {
        get title() {
            return (() => {
                var t = De();
                return d(t, (() => {
                    var n = G(() => !!P.mobile);
                    return () => {
                        var g, h;
                        return n() ? N("Exclusive Promotions") : (h = (g = r()) == null ? void 0 : g.title) != null ? h : N("Exclusive Promotions")
                    }
                })()), y(n => V(t, A.title, n)), t
            })()
        },
        class: "promotion-popup",
        get style() {
            return P.mobile ? {
                width: "100%"
            } : {
                width: "800px",
                "padding-top": "48px"
            }
        },
        get children() {
            return l(_, {
                get when() {
                    return r()
                },
                get fallback() {
                    return (() => {
                        var t = ze();
                        return d(t, l(U, {})), t
                    })()
                },
                children: t => [l(_, {
                    get when() {
                        return P.mobile
                    },
                    get fallback() {
                        return l(Ie, {
                            get promotionsList() {
                                return e.promotionsList
                            },
                            get select() {
                                return t()
                            },
                            setSelect: o
                        })
                    },
                    get children() {
                        return l(Ee, {
                            get promotionsList() {
                                return e.promotionsList
                            },
                            get select() {
                                return t()
                            },
                            setSelect: o
                        })
                    }
                }), (() => {
                    var n = Ne(),
                        g = n.firstChild;
                    return d(n, l(me, {
                        get value() {
                            return s()
                        },
                        onChange: i
                    }), g), d(g, () => N("Don’t display this for next 1 day")), y(h => V(n, P.mobile ? A.container.mobile : A.container.desktop, h)), n
                })()]
            })
        }
    })
}

function Fe(e) {
    return z(this, null, function*() {
        const [s] = Q(v([]), {
            name: "display-only-once-promotions"
        }), i = e.filter(r => !s().includes(r.bannerId) && !!r.bannerUrl);
        return i.length > 0 && ge.push(() => l(Ae, {
            promotionsList: i
        }), {
            close: !1
        })
    })
}

function He() {
    return z(this, null, function*() {
        try {
            return yield fe().get(`/home/main/pop/banner/${be.areaCode}/`)
        } catch (e) {
            return console.error("Failed to fetch IPL condition:", e), []
        }
    })
}
const qe = () => {
    const e = ne(),
        s = ["/", `/${B.lang}`, `/${B.lang}/`],
        i = s.includes(e.pathname),
        r = () => s.includes(e.pathname),
        [a] = ee(() => i && Me(), He, {
            initialValue: []
        });
    I(te(a, c => {
        !(R.isesportsbr || R.isjb) && c.length > 0 && setTimeout(() => {
            r() && he.add(() => Fe(a()))
        }, 4e3)
    }))
};

function Me() {
    const e = window.localStorage.getItem("hidden-promotions-one-day");
    return e ? Date.now() - Number(e) > 864e5 : !0
}
export {
    qe as
    default, qe as schedulePromotions
};