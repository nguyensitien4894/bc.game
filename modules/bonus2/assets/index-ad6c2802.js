import {
    i as r,
    c as t,
    e as p,
    s as f,
    t as i,
    f as V,
    l as G,
    b as v,
    d as y,
    m as q,
    a as S
} from "./web-46c35164.js";
import {
    l as g,
    p as K,
    P as F,
    c as h,
    j as M,
    u as Y,
    f as J,
    aw as Q,
    B as C,
    G as z,
    T as I,
    z as L,
    s as X,
    m as Z,
    e as ee
} from "./manifest-d92afe19.js";
import {
    F as $,
    I as te,
    j as U,
    e as re,
    c as N,
    b as ne,
    S as P
} from "./solid-js-871c99e1.js";
import {
    t as n,
    T as x
} from "./i18n-fd9a94dd.js";
import {
    popupBonusTerms as le
} from "./index-0a013ed3.js";
import {
    f as _,
    F as k
} from "./feature-gating-8d37864b.js";
import {
    C as R
} from "./currency-format-c1ee851b.js";
import {
    T as ae
} from "./skeleton-4a26813d.js";
import {
    T as se
} from "./table-101d4254.js";
import {
    v as ie
} from "./index-7e05a091.js";
import {
    a as H
} from "./recharge-tiers-card-706a19a0.js";
import {
    I as oe
} from "./index-9e8fcb6a.js";
import "./TermWithData-92578748.js";
import "./utils-0702ff35.js";
import "./popup-game-limits-38371d44.js";
import "./index-feaa71f9.js";
import "./http-696896a0.js";
import "./_arrayMap-2bcec0e7.js";
import "./_baseFor-371c5662.js";
import "./_MapCache-91cc8331.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./_baseIsEqual-7dac899d.js";
import "./groupBy-843aaa6e.js";
import "./_baseIteratee-a7d854cc.js";
import "./toString-1f7cb583.js";
import "./memoize-91f976fa.js";
import "./helpers-ece5dfb8.js";
import "./vip-5eda96e7.js";
import "./index-9f4ab8bd.js";
import "./baseService-102e5148.js";
import "./enums-fd45c1cf.js";
import "./index-d963c58c.js";
import "./tools-398e478b.js";
import "./index-a51223a0.js";
import "./api-utils-1baf21e5.js";
import "./cancel-bonus-b00319b6.js";
import "./noop-cb277961.js";
import "./animate-number-04f5b3b8.js";
import "./last-862de5a8.js";
import "./countdown-91927513.js";
import "./index-a140eea6.js";
const ce = () => le({
    type: "MONTHLY"
});
var ue = i('<div class="grid grid-cols-2 gap-x-3 gap-y-3">'),
    de = i('<div class="flex items-center gap-x-2 rounded-lg bg-layer3 px-3 py-[0.35rem]"><img class="h-8 w-8"><span class="text-sm font-semibold text-primary">');
const ge = () => {
    const e = () => [{
        img: g("/bonus/bonus/welcome-page/benefit-gift.png")(),
        title: n("Level Up Bonus")
    }, {
        img: g("/bonus/bonus/welcome-page/benefit-weekly.png")(),
        title: n("Weekly Bonus")
    }, {
        img: g("/bonus/bonus/welcome-page/benefit-monthly.png")(),
        title: n("Monthly Bonus")
    }, {
        img: g("/bonus/bonus/welcome-page/benefit-quest.png")(),
        title: n("Quest Hub")
    }, _.isEnabled(k.LUCKY_SPIN) && {
        img: g("/bonus/bonus/welcome-page/benefit-spin.png")(),
        title: n("Free Lucky Spins")
    }, {
        img: g("/bonus/bonus/welcome-page/benefit-roll.png")(),
        title: n("Daily Bonus")
    }].filter(Boolean);
    return (() => {
        var s = ue();
        return r(s, t($, {
            get each() {
                return e()
            },
            children: l => (() => {
                var a = de(),
                    u = a.firstChild,
                    o = u.nextSibling;
                return r(o, () => l.title), p(() => f(u, "src", l.img)), a
            })()
        })), s
    })()
};
var be = i('<div class="flex space-x-2">'),
    pe = i("<div>");
const me = e => (() => {
    var s = be();
    return r(s, t(te, {
        get each() {
            return Array(e.totals).fill("")
        },
        children: (l, a) => (() => {
            var u = pe();
            return u.$$click = () => {
                var o;
                return (o = e.onClick) == null ? void 0 : o.call(e, a)
            }, p(o => G(u, {
                "h-2 w-2 rounded-full transition-all ease-out": !0,
                "bg-input": e.activeIndex !== a,
                "bg-brand": e.activeIndex === a
            }, o)), u
        })()
    })), s
})();
V(["click"]);
var fe = i('<div class="text-center text-sm font-semibold text-secondary underline">');
const B = e => {
    const [s, l] = U(e, ["children"]);
    return (() => {
        var a = fe();
        return v(a, l, !1, !0), r(a, () => s.children), a
    })()
};
var xe = i('<img alt="Bonus Image">'),
    he = i('<h2 class="self-stretch text-center text-3xl font-extrabold capitalize text-primary">'),
    ve = i('<p class="self-stretch text-center text-base font-semibold text-secondary">'),
    ye = i('<div class="flex flex-grow items-center justify-center">'),
    $e = i('<div class="flex min-w-[26rem] flex-col items-center gap-y-4"><div class="flex flex-grow flex-col justify-between px-4"><div class="flex flex-col gap-y-3">');
const we = e => {
    const s = () => e.banner ? typeof e.banner == "function" ? e.banner() : (() => {
            var o = xe();
            return o.style.setProperty("height", "19.125rem"), p(() => f(o, "src", e.banner)), o
        })() : null,
        l = () => e.title ? typeof e.title == "function" ? e.title() : (() => {
            var o = he();
            return r(o, () => e.title), o
        })() : null,
        a = () => e.description ? typeof e.description == "function" ? e.description() : (() => {
            var o = ve();
            return r(o, () => e.description), o
        })() : null,
        u = () => e.extras ? (() => {
            var o = ye();
            return r(o, t($, {
                get each() {
                    return e.extras
                },
                children: c => c()
            })), o
        })() : null;
    return (() => {
        var o = $e(),
            c = o.firstChild,
            d = c.firstChild;
        return r(o, s, c), r(d, l, null), r(d, a, null), r(c, u, null), o
    })()
};
var _e = i('<span class="font-semibold text-secondary">'),
    ke = i('<span class="font-semibold text-primary">'),
    Ce = i('<div class="flex flex-col gap-y-4"><p class="text-sm font-semibold text-secondary"></p><div class="flex flex-col gap-y-4"><span class="text-sm font-semibold text-secondary">:'),
    Se = i("<span class=font-extrabold>"),
    T = i("<tr>");
const W = () => K.push(() => t(Re, {})),
    Re = () => {
        const [e] = ie.vipRankInfoResource(), s = () => [{
            title: n("Level"),
            dataIndex: "vipRankName",
            render(l) {
                return (() => {
                    var a = _e();
                    return r(a, l), a
                })()
            }
        }, {
            title: n("Total Bonus"),
            dataIndex: "levels",
            render(l) {
                const a = () => l.reduce((u, o) => u + o.bonusAmount, 0);
                return (() => {
                    var u = ke();
                    return r(u, t(R, {
                        currencyName: "USDFIAT",
                        get toCurrency() {
                            return M.setting.localeCurrencyName
                        },
                        get children() {
                            return t(R.Content, {
                                get children() {
                                    return [t(R.Amount, {
                                        get amount() {
                                            return a()
                                        }
                                    }), t(R.Icon, {
                                        size: 20
                                    })]
                                }
                            })
                        }
                    })), u
                })()
            }
        }];
        return t(F, {
            get title() {
                return (() => {
                    var l = Se();
                    return r(l, () => n("Levelup Bonus Detail")), l
                })()
            },
            get children() {
                var l = Ce(),
                    a = l.firstChild,
                    u = a.nextSibling,
                    o = u.firstChild,
                    c = o.firstChild;
                return r(a, () => n("Every wager you place boosts your VIP level. Each level up means bigger instant Level up bonuses and more Lucky Spin chances. Plus, you'll keep unlocking various VIP perks!")), r(o, () => n("Levelup Bonus"), c), r(u, t(re, {
                    get fallback() {
                        return t(ae, {
                            class: "overflow-hidden rounded-xl",
                            width: 5,
                            height: 1,
                            components: {
                                header: {
                                    row: d => (() => {
                                        var b = T();
                                        return v(b, y(d, {
                                            get class() {
                                                return h("bg-layer4")
                                            }
                                        }), !1, !1), b
                                    })()
                                },
                                body: {
                                    row: d => (() => {
                                        var b = T();
                                        return v(b, y(d, {
                                            get class() {
                                                return h("border-t border-solid border-white_alpha5 bg-layer3")
                                            }
                                        }), !1, !1), b
                                    })()
                                }
                            },
                            rows: 8,
                            get columns() {
                                return s()
                            }
                        })
                    },
                    get children() {
                        return t(se, {
                            class: "overflow-hidden rounded-xl",
                            get columns() {
                                return s()
                            },
                            get data() {
                                return e()
                            },
                            components: {
                                header: {
                                    row: d => (() => {
                                        var b = T();
                                        return v(b, y(d, {
                                            get class() {
                                                return h("bg-layer4")
                                            }
                                        }), !1, !1), b
                                    })()
                                },
                                body: {
                                    row: d => (() => {
                                        var b = T();
                                        return v(b, y(d, {
                                            get class() {
                                                return h("border-t border-solid border-white_alpha5 bg-layer3")
                                            }
                                        }), !1, !1), b
                                    })()
                                }
                            }
                        })
                    }
                }), null), l
            }
        })
    };
var Be = i('<span class="font-extrabold text-brand">20%'),
    Te = i('<div class="flex flex-col gap-y-4 text-sm font-semibold text-secondary"><p></p><p>'),
    Ie = i("<span class=font-extrabold>");
const O = () => K.push(() => t(Le, {})),
    Le = () => t(F, {
        get title() {
            return (() => {
                var e = Ie();
                return r(e, () => n("Rakeback Details")), e
            })()
        },
        get children() {
            var e = Te(),
                s = e.firstChild,
                l = s.nextSibling;
            return r(s, t(x, {
                i18nKey: "bonus.rakeback.detail.desc",
                get children() {
                    return ["By wagering, you will continuously earn Rakeback based on a percentage of your bet amount. We offer an impressive Rakeback rate of up to ", Be(), ". To keep earning Rakeback, simply participate in our ongoing monthly"]
                }
            })), r(l, () => n("Rakeback amount = wager amount * 1% * 20%")), e
        }
    });
var De = i('<span class="font-extrabold text-brand">360%'),
    D = i('<p class="text-center text-base font-semibold text-secondary">'),
    je = i('<span class="font-extrabold text-brand">cash'),
    Ee = i('<span class="font-extrabold text-brand">free lucky spins'),
    Pe = i('<span class="font-extrabold text-brand">7 consecutive days'),
    ze = i('<div class="-mx-4 flex h-full flex-col justify-between gap-3 pb-14"><div class="flex flex-col items-center justify-end gap-10 px-4 pt-3"></div><div class="flex flex-grow items-end justify-end px-4">');
const Ae = () => {
    let e;
    const l = N(() => [{
            title: n("Deposit bonus"),
            description: () => (() => {
                var c = D();
                return r(c, t(x, {
                    i18nKey: "bonus.welecome.newtext.desc1",
                    get children() {
                        return ["Earn up to ", De(), " ", "bonus on deposits, with rewards unlocking as you wager. Deposit now to maximize your bonus!"]
                    }
                })), c
            })(),
            banner: g("/bonus/bonus/welcome-page/welcome-banner-step1.png")(),
            extras: [() => t(B, {
                onClick: ce,
                get children() {
                    return n("Deposit bonus details")
                }
            })]
        }, {
            title: n("level up bonus"),
            description: () => (() => {
                var c = D();
                return r(c, t(x, {
                    i18nKey: "bonus.welecome.newtext.desc2",
                    get children() {
                        return ["Level up to earn substantial", je(), " rewards and", Ee(), "! The higher your level, the bigger the rewards."]
                    }
                })), c
            })(),
            banner: g("/bonus/bonus/welcome-page/welcome-banner-step2.png")(),
            extras: [() => t(B, {
                onClick: W,
                get children() {
                    return n("Level up bonus details")
                }
            })]
        }, _.isEnabled(k.RAKEBACK) && {
            title: n("Rakeback"),
            description: n("Unlock your potential with our Rakeback program! Earn bonuses with every wager and watch your balance grow continuously."),
            banner: g("/bonus/bonus/welcome-page/welcome-banner-step3.png")(),
            extras: [() => t(B, {
                onClick: O,
                get children() {
                    return n("Rackback details")
                }
            })]
        }, _.isEnabled(k.RECHARGE) && {
            title: n("Recharge"),
            description: () => (() => {
                var c = D();
                return r(c, t(x, {
                    i18nKey: "bonus.welecome.newtext.desc3",
                    get children() {
                        return ["Activate Recharge once and enjoy substantial rewards for", Pe(), "! Customize your claiming frequency to suit your own pace."]
                    }
                })), c
            })(),
            banner: g("/bonus/bonus/welcome-page/welcome-banner-step4.png")(),
            extras: [() => t(B, {
                onClick: () => {
                    H()
                },
                get children() {
                    return n("Recharge details")
                }
            })]
        }, {
            title: n("Endless Benefits"),
            description: () => t(ge, {}),
            banner: g("/bonus/bonus/welcome-page/welcome-banner-step5.png")()
        }].filter(Boolean)),
        [a, u] = ne(0),
        o = Y();
    return t(J, {
        get title() {
            return n("Bonus")
        },
        get children() {
            var c = ze(),
                d = c.firstChild,
                b = d.nextSibling;
            return r(c, t(Q, {
                class: "w-full flex-shrink-0",
                options: {
                    slides: {
                        spacing: 6
                    },
                    slideChanged(m) {
                        u(m.track.details.abs)
                    }
                },
                ref(m) {
                    var w = e;
                    typeof w == "function" ? w(m) : e = m
                },
                get children() {
                    return t($, {
                        get each() {
                            return l()
                        },
                        children: m => t(we, m)
                    })
                }
            }), d), r(d, t(me, {
                get totals() {
                    return l().length
                },
                get activeIndex() {
                    return a()
                },
                onClick: m => {
                    e.moveToIdx(m)
                }
            })), r(b, t(C, {
                type: "brand",
                onClick: () => o("/login/regist"),
                size: "l",
                class: "w-full text-lg font-extrabold text-primary_brand",
                get children() {
                    return n("Get Started")
                }
            })), c
        }
    })
};
var Ke = i('<div class="relative flex h-[11.25rem] flex-col items-center justify-between overflow-hidden rounded-xl bg-layer4 px-10 py-9"><div class="bg-special absolute left-1/2 top-0 h-full w-[55%] -translate-x-1/2 -translate-y-2/3 bg-[#59FFBC] opacity-[0.34] blur-[100px]"></div><img class="absolute left-1/2 top-0 w-[25.625rem] -translate-x-1/2"><h1 class="text-xl font-extrabold text-primary">');
const Fe = () => (() => {
    var e = Ke(),
        s = e.firstChild,
        l = s.nextSibling,
        a = l.nextSibling;
    return r(a, () => n("We are proud to provide you with the most luxurious gaming experience")), r(e, t(z, {
        href: "/login/regist",
        get children() {
            return t(C, {
                class: "w-[13.375rem] capitalize",
                type: "brand",
                get children() {
                    return n("Sign up")
                }
            })
        }
    }), null), p(() => f(l, "src", g("/bonus/bonus/welcome-page/footer-stars.png")())), e
})();
var Ue = i("<div>");
const Ne = e => (() => {
    var s = Ue();
    return r(s, t(C, y(e, {
        class: "h-auto w-auto items-center p-0 text-sm font-semibold text-brand",
        get children() {
            return [q(() => e.children), t(oe, {
                name: "singleSmallArrow",
                class: "rotate-180 text-brand",
                size: 14
            })]
        }
    }))), s
})();
var He = i("<div><h1></h1><div><p>");
const A = e => {
    const s = N(() => {
        var a;
        const l = (a = e.align) != null ? a : "left";
        return {
            container: l === "left" ? "items-start" : "items-end",
            title: l === "left" ? "" : "text-right",
            desc: l === "left" ? "" : "text-right"
        }
    });
    return (() => {
        var l = He(),
            a = l.firstChild,
            u = a.nextSibling,
            o = u.firstChild;
        return r(a, () => e.title), r(o, () => e.desc), r(u, t(Ne, {
            get onClick() {
                return e.onLink
            },
            get children() {
                return e.linkText
            }
        }), null), r(l, t(z, {
            href: "/login/regist",
            get children() {
                return t(C, {
                    get onClick() {
                        return e.onButton
                    },
                    class: "font-extrabold",
                    type: "brand",
                    get children() {
                        return e.buttonText
                    }
                })
            }
        }), null), p(c => {
            var d = h("max-lg:-w-[30rem] flex flex-col gap-y-7", s().container),
                b = h("max-w-[25rem] text-3xl font-extrabold text-primary", s().title),
                m = h("flex flex-col gap-y-3", s().container),
                w = h("max-w-[26rem] font-semibold text-secondary", s().desc);
            return d !== c.e && S(l, c.e = d), b !== c.t && S(a, c.t = b), m !== c.a && S(u, c.a = m), w !== c.o && S(o, c.o = w), c
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0
        }), l
    })()
};
var We = i('<div class="flex items-center justify-around px-10"><div class="w-10 flex-shrink-0"></div><div class=w-[30.3rem]><img class=w-full>'),
    Oe = i("<span class=text-brand>cash"),
    Ve = i("<span class=text-brand>free lucky spins");
const Ge = () => (() => {
    var e = We(),
        s = e.firstChild,
        l = s.nextSibling,
        a = l.firstChild;
    return r(e, t(A, {
        align: "right",
        get title() {
            return n("Reach new heights with our Level Up bonus")
        },
        get desc() {
            return t(x, {
                i18nKey: "Level up to earn substantial cash rewards and free lucky spins! The higher your level, the bigger the rewards.",
                get children() {
                    return ["Level up to earn substantial ", Oe(), " ", "rewards and ", Ve(), "! The higher your level, the bigger the rewards."]
                }
            })
        },
        onLink: () => {
            W()
        },
        get linkText() {
            return n("Level up bonus details")
        },
        get buttonText() {
            return n("Unlock Level-up Bonus")
        }
    }), s), p(() => f(a, "src", g("/bonus/bonus/welcome-page/welcome-levelup.png")())), e
})();
var qe = i("<span class=text-brand>more"),
    Me = i('<div class="flex flex-col items-center justify-center gap-y-6"><h1 class="text-2xl font-extrabold capitalize text-primary">'),
    Ye = i('<div class="flex items-center gap-x-7">'),
    Je = i('<div class="flex flex-col items-center"><img class=w-[15.625rem]><div class="flex flex-col justify-center gap-y-2 px-4 py-4 text-center"><h2 class="text-xl font-extrabold text-primary"></h2><p class="text-sm font-semibold text-secondary">'),
    Qe = i('<div class="h-[12.5rem] w-[1px] bg-white_alpha5">');
const Xe = () => (() => {
        var e = Me(),
            s = e.firstChild;
        return r(s, t(x, {
            i18nKey: "Get a lot of free perks",
            get children() {
                return ["wait. we have ", qe(), " benefits For You!"]
            }
        })), r(e, t(Ze, {}), null), e
    })(),
    Ze = () => {
        const e = () => [{
            title: n("Catch coco for Rewards"),
            desc: n("Catch the elusive COCO spider every 6 hours on our page and earn exclusive rewards based on your VIP level"),
            banner: g("/bonus/bonus/welcome-page/benefit-coco.png")()
        }, {
            title: n("Win with __ENV_HOST__ Lottery"),
            desc: n("Experience provably fair gaming amd let your lucky numbers do the magic. Don't wait, jump in and see your fortunes turn!"),
            banner: g("/bonus/bonus/welcome-page/benefit-lottery.png")()
        }, {
            title: n("Coin-Drop & Rain "),
            desc: n("Engage, chat, and seize spontaneous rewards with Constant Chat Rains and Coin-Drops—be active, quick, and earn free coins"),
            banner: g("/bonus/bonus/welcome-page/benefit-coin_drop.png")()
        }];
        return (() => {
            var s = Ye();
            return r(s, t($, {
                get each() {
                    return e()
                },
                children: (l, a) => [(() => {
                    var u = Je(),
                        o = u.firstChild,
                        c = o.nextSibling,
                        d = c.firstChild,
                        b = d.nextSibling;
                    return r(d, () => l.title), r(b, () => l.desc), p(() => f(o, "src", l.banner)), u
                })(), t(I, {
                    get when() {
                        return a() < e().length - 1
                    },
                    get children() {
                        return Qe()
                    }
                })]
            })), s
        })()
    };
var et = i("<span class=text-brand>free"),
    tt = i('<div class="flex flex-col items-center justify-center gap-y-6"><h1 class="text-2xl font-extrabold capitalize text-primary"></h1><div class="flex w-full justify-between gap-x-3">'),
    j = i("<img class=w-[11.375rem]>"),
    rt = i('<div><div class="absolute left-0 top-0 rounded-br-xl rounded-tl-xl bg-white_alpha10 px-5 py-2 text-base font-semibold text-primary"></div><div class="flex w-full items-end gap-x-3 pl-6"><h2 class="max-w-[8.125rem] flex-shrink-0 flex-grow text-2xl font-extrabold text-primary"></h2><div class="flex flex-shrink flex-grow justify-end"><div class=max-w-[11.375rem]></div></div></div><p class="pl-6 font-semibold text-secondary">');
const nt = () => (() => {
        var e = tt(),
            s = e.firstChild,
            l = s.nextSibling;
        return r(s, t(x, {
            i18nKey: "Get a lot of free perks",
            get children() {
                return ["Get a lot of ", et(), " perks"]
            }
        })), r(l, t(E, {
            get banner() {
                return (() => {
                    var a = j();
                    return p(() => f(a, "src", g("/bonus/bonus/welcome-page/perk-quest.png")())), a
                })()
            },
            get tag() {
                return n("Every Day & Week")
            },
            get title() {
                return n("Quest Hub")
            },
            get style() {
                return {
                    "background-image": `radial-gradient(50% 50% at 50% 50%, ${L.isjb?"rgb(var(--special))":"rgba(118, 54, 255, 0.60)"}0%, rgba(118, 54, 255, 0.00)100%)`,
                    "background-size": "100% 100%",
                    "background-position": "8rem 0"
                }
            },
            get desc() {
                return n("Conquer daily and weekly quests while amassing and snowballing your earnings!")
            }
        }), null), r(l, t(P, {
            get when() {
                return _.isEnabled(k.LUCKY_SPIN)
            },
            get children() {
                return t(E, {
                    get banner() {
                        return (() => {
                            var a = j();
                            return p(() => f(a, "src", g("/bonus/bonus/welcome-page/perk-spin.png")())), a
                        })()
                    },
                    get tag() {
                        return n("Every Day")
                    },
                    get title() {
                        return n("Free Lucky Spins ")
                    },
                    get style() {
                        return {
                            "background-image": `radial-gradient(50% 50% at 50% 50%, ${L.isjb?"rgb(var(--special))":"rgba(203, 54, 255, 0.40)"}0%, rgba(203, 54, 255, 0.00)100%)`,
                            "background-size": "100% 100%",
                            "background-position": "8rem 0"
                        }
                    },
                    get desc() {
                        return n("Spin and win your daily opportunity to bag up to 5 BTC - the ultimate thrill in every roll!")
                    }
                })
            }
        }), null), r(l, t(E, {
            get banner() {
                return (() => {
                    var a = j();
                    return p(() => f(a, "src", g("/bonus/bonus/welcome-page/perk-daily.png")())), a
                })()
            },
            get style() {
                return {
                    "background-image": `radial-gradient(50% 50% at 50% 50%, ${L.isjb?"rgb(var(--special))":"rgba(208, 252, 62, 0.20)"}0%, rgba(208, 252, 62, 0.00)100%)`,
                    "background-size": "100% 100%",
                    "background-position": "8rem 0"
                }
            },
            get tag() {
                return n("Every Day")
            },
            get title() {
                return n("Daily Bonus")
            },
            get desc() {
                return n("The more you bet, the more you get. Claim your daily bonus every day!")
            }
        }), null), e
    })(),
    E = e => {
        const [s, l] = U(e, ["title", "desc", "tag", "banner"]);
        return (() => {
            var a = rt(),
                u = a.firstChild,
                o = u.nextSibling,
                c = o.firstChild,
                d = c.nextSibling,
                b = d.firstChild,
                m = o.nextSibling;
            return v(a, y(l, {
                class: "relative z-0 flex h-64 w-[23.75rem] flex-col justify-end gap-y-4 overflow-hidden rounded-xl bg-layer4 bg-no-repeat pb-6"
            }), !1, !0), r(u, () => e.tag), r(c, () => e.title), r(b, () => e.banner), r(m, () => e.desc), a
        })()
    };
var lt = i('<div class="flex items-center justify-around px-10"><div class=w-[30.3rem]><img class=w-full>');
const at = () => (() => {
    var e = lt(),
        s = e.firstChild,
        l = s.firstChild;
    return r(e, t(A, {
        get title() {
            return n("Maximize the Potential of Rakeback")
        },
        get desc() {
            return n("Unlock your potential with our Rakeback program! Earn bonuses with every wager and watch your balance grow continuously.")
        },
        onLink: () => {
            O()
        },
        get linkText() {
            return n("Rackback Details")
        },
        get buttonText() {
            return n("Unlock Rackback")
        }
    }), null), p(() => f(l, "src", g("/bonus/bonus/welcome-page/welcome-rakeback.png")())), e
})();
var st = i('<div class="relative z-0 flex h-[29.25rem] flex-col items-center justify-between"><img class="absolute -top-20 left-10 -z-10 w-[37.5rem]"><div class="flex h-full w-full items-center justify-end">'),
    it = i("<span class=text-brand>Recharge"),
    ot = i('<div class="flex items-center gap-x-7 rounded-xl border border-solid border-white_alpha5 px-6 py-3 backdrop-blur-sm">'),
    ct = i('<div class="flex items-center"><img class=w-[7.75rem]><div class="flex flex-col gap-y-2"><h2 class="font-semibold text-primary"></h2><p class="text-xs font-semibold text-secondary">'),
    ut = i('<div class="h-[3.875rem] w-[1px] bg-white_alpha5">');
const dt = () => (() => {
        var e = st(),
            s = e.firstChild,
            l = s.nextSibling;
        return r(l, t(A, {
            align: "left",
            get title() {
                return t(x, {
                    i18nKey: "Introducing Our Very Own Recharge Cashback",
                    get children() {
                        return ["Introducing Our Very Own ", it(), " ", "Cashback"]
                    }
                })
            },
            get desc() {
                return n("Immerse yourself in the exhilarating world of Recharge, where the power is in your hands. Customize your reward claiming by ")
            },
            onLink: () => {
                H()
            },
            get linkText() {
                return n("Recharge Details")
            },
            get buttonText() {
                return n("Join __ENV_HOST__ Now")
            }
        })), r(e, t(gt, {}), null), p(() => f(s, "src", g("/bonus/bonus/welcome-page/welcome-recharge.png")())), e
    })(),
    gt = () => {
        const e = () => [{
            title: n("Recharge Activation"),
            desc: n("Recharge activate as you strive to reach VIP level 22 and beyond."),
            banner: g("/bonus/bonus/welcome-page/recharge-benefit-activate.png")()
        }, {
            title: n("Recharge at Your Pace"),
            desc: n("Harness bonuses with daily, hourly, or flash charge (10 min) intervals "),
            banner: g("/bonus/bonus/welcome-page/recharge-benefit-reward.png")()
        }, {
            title: n("Recharge Reward Tiers"),
            desc: n("Snowball your rewards as you wager and climb from Tier 1 to Tier 4"),
            banner: g("/bonus/bonus/welcome-page/recharge-benefit-tiers.png")()
        }];
        return (() => {
            var s = ot();
            return r(s, t($, {
                get each() {
                    return e()
                },
                children: (l, a) => [(() => {
                    var u = ct(),
                        o = u.firstChild,
                        c = o.nextSibling,
                        d = c.firstChild,
                        b = d.nextSibling;
                    return r(d, () => l.title), r(b, () => l.desc), p(() => f(o, "src", l.banner)), u
                })(), t(I, {
                    get when() {
                        return a() < e().length - 1
                    },
                    get children() {
                        return ut()
                    }
                })]
            })), p(l => (l = X.darken ? "linear-gradient(180deg, rgba(36, 43, 40, 0.32)0%, rgba(50, 55, 56, 0.32)100%)" : "linear-gradient(180deg, rgba(235, 235, 235, 0.32) 0%, rgba(201, 201, 201, 0.32) 100%)") != null ? s.style.setProperty("background-image", l) : s.style.removeProperty("background-image")), s
        })()
    };
var bt = i('<div class="bonus-welcome-root flex flex-col gap-y-12 pb-4">'),
    pt = i("<span class=text-brand>endless"),
    mt = i('<header class="relative z-0 flex flex-col overflow-hidden rounded-xl bg-layer3 p-12"><div class="bg-special absolute -top-40 left-1/2 -z-10 h-[17.875rem] w-full -translate-x-1/2 rounded-full bg-[#9432F5] opacity-[0.34] blur-[100px]"></div><img class="absolute bottom-0 right-0 -z-10 w-[44.125rem] translate-y-24"><div class=py-5><h1 class="text-4xl font-extrabold uppercase text-primary"></h1><p class="mt-3 max-w-96 text-base font-semibold text-secondary"></p><div class=mt-5>'),
    ft = i('<div class="center gap-x-6">'),
    xt = i('<span class="flex items-center gap-x-3 text-base font-extrabold text-primary"><span class="flex size-8 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-primary_brand">'),
    ht = i('<span class="h-[1px] w-[3.125rem] bg-third">');
const vt = () => (() => {
        var e = bt();
        return r(e, t(yt, {}), null), r(e, t($t, {}), null), r(e, t(Ge, {}), null), r(e, t(P, {
            get when() {
                return !Z.isUsHost
            },
            get children() {
                return t(at, {})
            }
        }), null), r(e, t(nt, {}), null), r(e, t(P, {
            get when() {
                return _.isEnabled(k.RECHARGE)
            },
            get children() {
                return t(dt, {})
            }
        }), null), r(e, t(Xe, {}), null), r(e, t(Fe, {}), null), e
    })(),
    yt = () => (() => {
        var e = mt(),
            s = e.firstChild,
            l = s.nextSibling,
            a = l.nextSibling,
            u = a.firstChild,
            o = u.nextSibling,
            c = o.nextSibling;
        return r(u, t(x, {
            i18nKey: "Unlock endless benefits",
            get children() {
                return ["Unlock ", pt(), " benefits"]
            }
        })), r(o, () => n("Join now and embark on an exhilarating journey of luck and reward")), r(c, t(z, {
            href: "/login/regist",
            get children() {
                return t(C, {
                    type: "brand",
                    class: "min-w-64 text-base font-extrabold capitalize",
                    get children() {
                        return n("Sign up")
                    }
                })
            }
        })), p(() => f(l, "src", g("/bonus/bonus/welcome-page/bonus-welcome-banner.png")())), e
    })(),
    $t = () => {
        const e = () => [{
            label: n("Sign up & make a deposit")
        }, {
            label: n("Play your fav games")
        }, {
            label: n("Increase your VIP levels")
        }];
        return (() => {
            var s = ft();
            return r(s, t($, {
                get each() {
                    return e()
                },
                children: (l, a) => [(() => {
                    var u = xt(),
                        o = u.firstChild;
                    return r(o, () => (a() + 1).toString().padStart(2, "0")), r(u, () => l.label, null), u
                })(), t(I, {
                    get when() {
                        return a() < e().length - 1
                    },
                    get children() {
                        return ht()
                    }
                })]
            })), s
        })()
    },
    ur = () => t(I, {
        get when() {
            return ee.mobile
        },
        get fallback() {
            return t(vt, {})
        },
        get children() {
            return t(Ae, {})
        }
    });
export {
    ur as BonusWelcome, ur as
    default
};