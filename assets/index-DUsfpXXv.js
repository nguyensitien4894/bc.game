import "./index-DxYPFwcM.js";
import {
    s as J,
    m as v,
    v as m,
    y as Q,
    q as I,
    d as H,
    b as U,
    P as E,
    x as l,
    k as n,
    D as k,
    E as S,
    X as g,
    I as D,
    a3 as te,
    F as A,
    h as ne,
    a1 as ie,
    G as z
} from "./vendor-CR7NILRE.js";
import {
    l as o,
    e as h,
    q as w,
    b as _,
    t as F,
    a as $,
    X as C,
    h as x,
    u as B,
    d as p,
    z as X,
    an as R,
    W as M,
    ak as ae,
    a2 as re,
    ao as se,
    k as K,
    v as oe,
    i as le,
    L as ce,
    w as P,
    U as be,
    a1 as de,
    ap as ue,
    B as me
} from "./common-jbtJucx3.js";
import {
    a as L,
    t as e,
    b as ge,
    B as _e,
    C as T
} from "./Application-CExkuTua.js";
const pe = "/assets/hot-BiiudyfK.png",
    he = "/assets/hot_w-DNkjTs7U.png";
var fe = m("<div>");
const ve = {
        account: "account",
        achievement: "achievement",
        affiliate: "affiliate",
        alllotteries: "alllotteries",
        americanfootball: "americanfootball",
        at: "at",
        ban_user: "ban_user",
        ban: "ban",
        bank: "bank",
        baseball: "baseball",
        basketball: "basketball",
        bc_airdrop: "bc_airdrop",
        bc_originallogo: "bc_originallogo",
        bc87: "bc87",
        bclottery: "bclottery",
        betting_insights: "betting_insights",
        bingo_home: "bingo_home",
        blog: "blog",
        bonus: "bonus",
        bz: "bz",
        barbados_royals: "barbados_royals",
        colby_covington: "colby_covington",
        cricket: "cricket",
        dailycontest: "dailycontest",
        ipl: "ipl",
        fair: "fair",
        favorites: "favorites",
        favorites1: "favorites1",
        featurebuy_in: "featurebuy_in",
        fifa: "fifa",
        fifa_events: "fifa_events",
        forum: "forum",
        futures: "futures",
        gamble_ware: "gamble_ware",
        game_shows: "game_shows",
        high_low_spread: "high_low_spread",
        handball: "handball",
        hotgame: "hotgame",
        icehockey: "icehockey",
        help: "help",
        inform: "inform",
        jason_derulo: "jason_derulo",
        laptop: "laptop",
        legal: "legal",
        leicester_city: "leicester_city",
        lil_pump: "lil_pump",
        liveevents: "liveevents",
        miami: "miami",
        my_bets: "my_bets",
        newreleases: "newreleases",
        notice: "notice",
        personal_verification: "personal_verification",
        picksforyou: "picksforyou",
        popular: "popular",
        racing: "racing",
        recent: "recent",
        referearn_1: "referearn_1",
        referearn: "referearn",
        referral_codes: "referral_codes",
        slots: "slots",
        soccer: "soccer",
        sponsorships: "sponsorships",
        tablegame: "tablegame",
        tennis: "tennis",
        license: "license",
        tips_help: "tips_help",
        two_factor: "two_factor",
        up_down: "up_down",
        vip_club: "vip_club",
        webchat: "webchat",
        refer: "refer",
        weekly_raffle: "weekly_raffle",
        boxing: "boxing",
        darts: "darts",
        themes: "themes",
        pdd: "pdd",
        independence: "independence",
        table_tennis: "table_tennis",
        sports_global: "sports_global",
        sports_korea: "sports_korea",
        e_sports: "e_sports",
        bc_exlusive: "bc_exlusive",
        bc_licenses: "bc_licenses",
        pachinko: "pachinko",
        ceo_inbox: "ceo_inbox",
        sponsorship: "sponsorship",
        o_higgins: "o_higgins",
        tap_trading: "tap_trading",
        kwara_united: "kwara_united",
        st_kitts: "st_kitts",
        sashimi_poker: "sashimi_poker",
        quest: "quest",
        challenge: "challenge",
        poker: "poker"
    },
    j = function(r) {
        const [, i] = J(r, ["name", "class", "active", "style"]), d = v(() => {
            const c = ve[r.name];
            return r.name === "bc_originallogo" || !c ? o.is87 ? "bc87" : o.isbzall ? "bz" : o.isjb ? "jb_originallogo" : "bc_originallogo" : c
        });
        return (() => {
            var c = fe();
            return Q(c, I({
                get class() {
                    return w("menu_icon_img", !_.darken && "menu_icon_img_light", r.active ? _.darken ? "menu_icon_img_active" : "menu_icon_img_active_light" : "menu_icon_img_normal", r.class, o.isjb ? "menu_icon_yellow" : "", d())
                },
                get style() {
                    return {
                        transform: r.scale || (h.mobile ? "scale(0.8)" : "scale(0.75)")
                    }
                }
            }, i), !1, !1), c
        })()
    };
var ke = m('<div><div class="center flex-none sm:size-10"></div><span class="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold"></span><div class="ml-auto mr-1.5 size-4.5">');
const ye = function() {
    const r = F(),
        [i, d] = U(!1),
        c = E(),
        s = v(() => (c.pathname + c.search).startsWith("/casino?tab=brand"));
    return $.on("auto-ingame-originals", a => d(a)), (() => {
        var a = ke(),
            b = a.firstChild,
            u = b.nextSibling,
            f = u.nextSibling;
        return a.$$click = () => {
            r("/casino?tab=brand"), L.trackEvent("sidebar_click", {
                button_name: "sidebar_casino_brand"
            })
        }, a.addEventListener("mouseleave", () => $.emit("open-sidebar-games", !1)), a.addEventListener("mouseenter", () => $.emit("open-sidebar-games", !0)), l(b, n(j, {
            name: "bc_originallogo"
        })), l(u, () => e("__ENV_SITE__ Originals")), l(f, n(C, {
            name: "Arrow",
            class: "size-4.5 rotate-180 fill-secondary transition ease-out"
        })), k(() => S(a, w("game-link-item nav-link-item-game mt-1 flex h-11 w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 sm:h-10 sm:p-0", s() && "game-link-item-active active", i() && "game-link-item-ingame active"))), a
    })()
};
H(["click"]);

function we() {
    return {
        label: () => e("Sports Korea"),
        link: "/bti",
        colorIcon: "sports",
        buttonName: "sidebar_sports_bti",
        children: [{
            label: () => e("Soccer"),
            link: "/bti?sportId=soccer",
            buttonName: "sidebar_sports_soccer",
            icon: "soccer"
        }, {
            label: () => e("Basketball"),
            link: "/bti?sportId=basketball",
            buttonName: "sidebar_sports_basketball",
            icon: "basketball"
        }, {
            label: () => e("Baseball"),
            link: "/bti?sportId=baseball",
            buttonName: "sidebar_sports_baseball",
            icon: "baseball"
        }, {
            label: () => e("Volleyball"),
            link: "/bti?sportId=volleyball",
            buttonName: "sidebar_sports_volleyball",
            icon: "handball"
        }, {
            label: () => e("Tennis"),
            link: "/bti?sportId=tennis",
            buttonName: "sidebar_sports_tennis",
            icon: "tennis"
        }, {
            label: () => e("Table Tennis"),
            link: "/bti?sportId=tabletennis",
            buttonName: "sidebar_sports_tabletennis",
            icon: "table_tennis"
        }, {
            label: () => e("Ice Hockey"),
            link: "/bti?sportId=8",
            buttonName: "sidebar_sports_icehockey",
            icon: "icehockey"
        }, {
            label: () => e("E-Sports"),
            link: "/bti?sportId=esports",
            buttonName: "sidebar_sports_esports",
            icon: "e_sports"
        }, {
            label: () => e("Cricket"),
            link: "/bti?sportId=cricket",
            buttonName: "sidebar_sports_cricket",
            icon: "cricket"
        }, {
            label: () => e("Boxing"),
            link: "/bti?sportId=boxing",
            buttonName: "sidebar_sports_boxing",
            icon: "boxing"
        }]
    }
}

function Z() {
    return {
        label: () => e("Sports"),
        link: "/sports",
        colorIcon: "sports",
        buttonName: "sidebar_sports",
        hostHidden: x.isUsHost,
        children: [{
            label: () => e("Soccer"),
            link: "/sports?bt-path=%2Fsoccer-1",
            buttonName: "sidebar_sports_soccer",
            icon: "soccer"
        }, {
            label: () => e("Tennis"),
            link: "/sports?bt-path=%2Ftennis-5",
            buttonName: "sidebar_sports_tennis",
            icon: "tennis"
        }, {
            label: () => e("Basketball"),
            link: "/sports?bt-path=%2Fbasketball-2",
            buttonName: "sidebar_sports_basketball",
            icon: "basketball"
        }, {
            label: () => e("Cricket"),
            link: "/sports?bt-path=%2Fcricket-21",
            buttonName: "sidebar_sports_cricket",
            icon: "cricket"
        }, {
            label: () => e("FIFA"),
            link: "/sports?bt-path=%2Ffifa-300",
            buttonName: "sidebar_sports_fifa",
            icon: "fifa"
        }, {
            label: () => e("American Football"),
            link: "/sports?bt-path=%2Famerican-football-16",
            buttonName: "sidebar_sports_americanfootball",
            icon: "americanfootball"
        }, {
            label: () => e("Ice Hockey"),
            link: "/sports?bt-path=%2Fice-hockey-4",
            buttonName: "sidebar_sports_icehockey",
            icon: "icehockey"
        }, {
            label: () => e("Baseball"),
            link: "/sports?bt-path=%2Fbaseball-3",
            buttonName: "sidebar_sports_baseball",
            icon: "baseball"
        }, {
            label: () => e("Handball"),
            link: "/sports?bt-path=%2Fhandball-6",
            buttonName: "sidebar_sports_handball",
            icon: "handball"
        }, {
            label: () => e("Racing"),
            link: "/racing",
            buttonName: "sidebar_sports_racing",
            icon: "racing"
        }]
    }
}

function Ne() {
    return {
        label: () => e("Sports"),
        colorIcon: "sports",
        buttonName: "sidebar_sports",
        hostHidden: x.isUsHost,
        children: [{
            label: () => e("Sports Korea"),
            link: "/bti",
            buttonName: "sidebar_sports_bti",
            icon: "sports_korea",
            koSports: !0
        }, {
            label: () => e("Sports Global"),
            link: "/sports",
            buttonName: "sidebar_sports",
            icon: "sports_global",
            koSports: !0
        }]
    }
}
var xe = m('<div class="ml-auto flex rounded-md text-xs font-semibold center h-4.5 text-nowrap px-1.5 sm:px-1">'),
    $e = m("<span class=text-brand>Korea"),
    Se = m('<div><div class="flex-none center sm:size-10"></div><span class="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold"></span><div class="ml-auto mr-1.5 size-4.5">');

function Y(t) {
    const {
        isKr: r
    } = B.getAreaAndLang(_.lang, p.areaCode);
    return n(g, {
        get when() {
            return r && t.buttonName === "sidebar_sports_bti"
        },
        get children() {
            var i = xe();
            return l(i, () => e("Promo")), k(d => {
                var c = _.darken ? "rgba(229, 223, 79, 0.20)" : "rgba(173, 166, 0, 0.20)",
                    s = _.darken ? "#E5DF4F" : "#ADA600";
                return c !== d.e && ((d.e = c) != null ? i.style.setProperty("background", c) : i.style.removeProperty("background")), s !== d.t && ((d.t = s) != null ? i.style.setProperty("color", s) : i.style.removeProperty("color")), d
            }, {
                e: void 0,
                t: void 0
            }), i
        }
    })
}

function ee(t) {
    const r = () => t.buttonName.includes("sidebar_sports_bti");
    return n(g, {
        get when() {
            return !r()
        },
        get fallback() {
            return n(ge, {
                i18nKey: "sports_korea.temp",
                get children() {
                    return ["Sports ", $e()]
                }
            })
        },
        get children() {
            return t.label()
        }
    })
}

function Le(t) {
    const r = F(),
        i = E(),
        d = v(() => X(i.pathname).startsWith(t.link)),
        c = v(() => t.buttonName.includes("sidebar_sports_bti")),
        s = v(() => c() ? we() : { ...Z(),
            label: () => e("Sports Global")
        });
    return (() => {
        var a = Se(),
            b = a.firstChild,
            u = b.nextSibling,
            f = u.nextSibling;
        return a.$$click = () => {
            r(t.link), L.trackEvent("sidebar_click", {
                button_name: t.buttonName
            })
        }, a.addEventListener("mouseleave", () => $.emit("open-sidebar-sports-close")), a.addEventListener("mouseenter", y => {
            $.emit("open-sidebar-sports", {
                list: s().children,
                top: y.target.getBoundingClientRect().top - 60
            })
        }), l(b, n(j, {
            get name() {
                return t.icon
            },
            get active() {
                return d()
            }
        })), l(u, n(ee, {
            get label() {
                return t.label
            },
            get buttonName() {
                return t.buttonName
            }
        })), l(a, n(Y, {
            get buttonName() {
                return t.buttonName
            }
        }), f), l(f, n(C, {
            name: "Arrow",
            class: "rotate-180 fill-secondary transition ease-out size-4.5"
        })), k(() => S(a, w("game-link-item nav-link-item-game flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 mt-1 h-11 sm:h-10 sm:p-0", d() && "game-link-item-active active"))), a
    })()
}
H(["click"]);
var Ce = m('<div class="ml-auto flex rounded-md text-xs font-semibold center h-4.5 px-1.5">+<!>%'),
    He = m('<div class="flex-none center sm:size-10">'),
    Ie = m('<span class="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">'),
    Pe = m('<img alt=hot class="ml-auto w-[45px]">'),
    Ae = m('<span class="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold"><span class=text-brand>VIP</span><span class=mx-1>');

function Ee() {
    const [t] = ae;
    return n(g, {
        get when() {
            return D(() => !!t())() && se(t())
        },
        children: r => (() => {
            var i = Ce(),
                d = i.firstChild,
                c = d.nextSibling;
            return c.nextSibling, l(i, () => new re(r().bonusRatio).mul(100).toString(), c), k(s => {
                var a = _.darken ? "rgba(229, 223, 79, 0.20)" : "rgba(173, 166, 0, 0.20)",
                    b = _.darken ? "#E5DF4F" : "#ADA600";
                return a !== s.e && ((s.e = a) != null ? i.style.setProperty("background", a) : i.style.removeProperty("background")), b !== s.t && ((s.t = b) != null ? i.style.setProperty("color", b) : i.style.removeProperty("color")), s
            }, {
                e: void 0,
                t: void 0
            }), i
        })()
    })
}

function O(t) {
    const r = E(),
        i = v(() => t.end ? r.pathname === t.link : (r.pathname + r.search).startsWith(t.link)),
        d = v(() => t.link.startsWith("http")),
        c = v(() => t.guard ? .needLogin ? p.login : !0),
        s = v(() => ({
            isVip: t.buttonName === "sidebar_vip",
            isCasino: t.buttonName === "sidebar_casino_bcoriginals",
            isBonus: t.buttonName === "sidebar_bonus",
            isRefer: t.buttonName === "sidebar_promotion_refer",
            haveRightIcon: t.buttonName === "sidebar_promotion_festival" || t.buttonName === "sidebar_promotion_ipl" || t.buttonName === "sidebar_promotion_mining",
            isKoSports: !!t.koSports
        }));
    return n(g, {
        get when() {
            return c() && !t.guard ? .hostHidden
        },
        get children() {
            return n(g, {
                get when() {
                    return !(s().isCasino && !h.mobile)
                },
                get fallback() {
                    return n(ye, {})
                },
                get children() {
                    return n(g, {
                        get when() {
                            return !(s().isKoSports && !h.mobile)
                        },
                        get fallback() {
                            return n(Le, t)
                        },
                        get children() {
                            return n(R, {
                                get title() {
                                    return t.label()
                                },
                                get disabled() {
                                    return !t.fold
                                },
                                position: "horizontal",
                                get children() {
                                    return n(M, {
                                        get class() {
                                            return w("nav-link-item relative flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:mt-1 sm:h-10 sm:pl-0 sm:pr-2", i() && "nav-link-item-active")
                                        },
                                        get href() {
                                            return s().isRefer ? r.pathname : t.link
                                        },
                                        get target() {
                                            return d() ? "_blank" : void 0
                                        },
                                        onClick: () => {
                                            h.mobile && $.emit("layout-sidebar-close"), L.trackEvent("sidebar_click", {
                                                button_name: t.buttonName
                                            }), s().isRefer && $.emit("open-refer")
                                        },
                                        get children() {
                                            return [(() => {
                                                var a = He();
                                                return l(a, n(g, {
                                                    get when() {
                                                        return t.colorIcon
                                                    },
                                                    get fallback() {
                                                        return n(j, {
                                                            get name() {
                                                                return t.icon
                                                            },
                                                            get active() {
                                                                return i()
                                                            }
                                                        })
                                                    },
                                                    get children() {
                                                        return D(() => !!t.colorIcon)() && t.colorIcon()
                                                    }
                                                })), a
                                            })(), n(g, {
                                                get when() {
                                                    return !s().isVip
                                                },
                                                get fallback() {
                                                    return (() => {
                                                        var a = Ae(),
                                                            b = a.firstChild,
                                                            u = b.nextSibling;
                                                        return l(u, () => e("Club")), a
                                                    })()
                                                },
                                                get children() {
                                                    var a = Ie();
                                                    return l(a, n(ee, {
                                                        get label() {
                                                            return t.label
                                                        },
                                                        get buttonName() {
                                                            return t.buttonName
                                                        }
                                                    })), a
                                                }
                                            }), n(g, {
                                                get when() {
                                                    return s().isBonus
                                                },
                                                get children() {
                                                    return n(te, {
                                                        fallback: null,
                                                        get children() {
                                                            return n(Ee, {})
                                                        }
                                                    })
                                                }
                                            }), n(Y, {
                                                get buttonName() {
                                                    return t.buttonName
                                                }
                                            }), n(g, {
                                                get when() {
                                                    return d()
                                                },
                                                fallback: null,
                                                get children() {
                                                    return n(C, {
                                                        name: "Share",
                                                        class: "size-4 flex-none text-secondary ml-1"
                                                    })
                                                }
                                            }), n(g, {
                                                get when() {
                                                    return s().haveRightIcon
                                                },
                                                get children() {
                                                    var a = Pe();
                                                    return k(() => A(a, "src", _.darken ? pe : he)), a
                                                }
                                            })]
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}
var Be = m('<svg><path d="M24.473 19.681c-5.725-0.724-10.216-5.2-10.957-10.856l-0.007-0.064c-0.052-0.428-0.082-0.923-0.082-1.426 0-0.74 0.065-1.466 0.19-2.17l-0.011 0.075c0.008-0.052 0.013-0.112 0.013-0.173 0-0.622-0.505-1.127-1.127-1.127-0.132 0-0.259 0.022-0.377 0.065l0.007-0.003c-4.684 1.861-7.934 6.353-7.934 11.605 0 6.878 5.576 12.454 12.454 12.454 4.777 0 8.926-2.69 11.015-6.637l0.032-0.067c0.076-0.147 0.122-0.321 0.122-0.506 0-0.614-0.498-1.112-1.112-1.112-0.022 0-0.044 0.001-0.066 0.002h0.003c-0.225 0.015-0.488 0.023-0.753 0.023-0.497 0-0.988-0.030-1.47-0.088l0.058 0.006z"></svg>', !1, !0, !1),
    ze = m('<svg><path d="M10.364 25.256c0.059 0.005 0.116 0.020 0.169 0.047l2.324 1.161c0.231 0.115 0.327 0.401 0.214 0.637-0.026 0.055-0.062 0.103-0.105 0.144l-2.579 2.397c-0.19 0.176-0.484 0.162-0.657-0.033-0.086-0.097-0.129-0.225-0.119-0.355l0.255-3.558c0.019-0.262 0.241-0.46 0.497-0.44zM22.088 25.523c0.026 0.055 0.041 0.113 0.046 0.174l0.255 3.558c0.019 0.262-0.174 0.491-0.43 0.51-0.127 0.009-0.252-0.035-0.346-0.122l-2.579-2.397c-0.19-0.176-0.204-0.478-0.032-0.673 0.040-0.045 0.087-0.081 0.141-0.108l2.324-1.161c0.231-0.115 0.509-0.018 0.622 0.22zM16 8.068c4.621 0 8.367 3.84 8.367 8.576s-3.747 8.575-8.368 8.575c-4.621 0-8.368-3.84-8.368-8.575s3.746-8.576 8.368-8.576h0.001zM26.547 17.309c0.058 0.014 0.113 0.039 0.16 0.073l2.858 2.036c0.211 0.151 0.263 0.447 0.116 0.663-0.073 0.107-0.185 0.179-0.311 0.198l-3.44 0.546c-0.254 0.041-0.491-0.137-0.531-0.398-0.009-0.060-0.007-0.121 0.006-0.18l0.582-2.582c0.058-0.257 0.307-0.416 0.558-0.357l0.001 0.002zM5.94 17.501c0.033 0.050 0.058 0.105 0.071 0.164l0.582 2.582c0.058 0.257-0.098 0.512-0.349 0.572-0.058 0.014-0.117 0.016-0.176 0.006l-3.44-0.546c-0.254-0.041-0.428-0.283-0.388-0.544 0.020-0.129 0.089-0.244 0.194-0.319l2.858-2.036c0.211-0.151 0.502-0.097 0.648 0.119zM27.106 7.828c0.038 0.125 0.023 0.259-0.038 0.373l-1.698 3.114c-0.125 0.23-0.408 0.312-0.632 0.184-0.051-0.030-0.097-0.069-0.134-0.116l-1.627-2.060c-0.161-0.204-0.131-0.504 0.069-0.67 0.046-0.038 0.099-0.066 0.155-0.085l3.325-1.055c0.245-0.078 0.505 0.063 0.582 0.314l-0.001 0.002zM5.477 7.514l3.325 1.055c0.245 0.078 0.383 0.344 0.306 0.596-0.017 0.058-0.046 0.112-0.083 0.159l-1.627 2.060c-0.161 0.204-0.454 0.236-0.654 0.070-0.046-0.038-0.085-0.085-0.114-0.137l-1.698-3.114c-0.125-0.23-0.045-0.52 0.179-0.648 0.111-0.064 0.242-0.078 0.364-0.039l0.001-0.002zM16.173 2.269c0.118 0.048 0.212 0.144 0.259 0.265l1.293 3.313c0.096 0.245-0.021 0.522-0.259 0.62-0.055 0.022-0.113 0.034-0.173 0.034h-2.585c-0.257 0-0.465-0.213-0.465-0.476 0-0.061 0.012-0.121 0.033-0.177l1.293-3.313c0.095-0.245 0.366-0.363 0.604-0.265z"></svg>', !1, !0, !1),
    Fe = m("<svg>");
const je = {
    Dark: () => Be(),
    Light: () => ze()
};

function V(t) {
    const [, r] = J(t, ["name", "class", "viewBox"]);
    return (() => {
        var i = Fe();
        return Q(i, I({
            get class() {
                return w("icon flex-none", t.class)
            },
            get viewBox() {
                return t.viewBox || "0 0 32 32"
            }
        }, r), !0, !0), l(i, () => je[t.name]()), i
    })()
}
var Te = m('<div class="mt-2 h-10 w-full cursor-pointer rounded-lg font-semibold p-0.5"><div class="relative flex h-9 w-full"><div class="absolute top-0 h-9 rounded-lg bg-layer6 transition-all ease-out w-1/2"></div><div class="relative h-9 center w-1/2"><span></span></div><div class="relative h-9 center w-1/2"><span>');
const Ue = function() {
    return (() => {
        var r = Te(),
            i = r.firstChild,
            d = i.firstChild,
            c = d.nextSibling,
            s = c.firstChild,
            a = c.nextSibling,
            b = a.firstChild;
        return r.style.setProperty("background", "var(--Sidebar-ModeSwitcher-bg)"), c.$$click = () => {
            K("theme", "dark"), L.trackEvent("sidebar_click", {
                button_name: "theme-dark"
            })
        }, l(c, n(V, {
            get class() {
                return `h-4 w-4 ${_.darken?"text-primary":"text-quarterary"}`
            },
            name: "Dark"
        }), s), l(s, () => e("Dark")), a.$$click = () => {
            K("theme", "light"), L.trackEvent("sidebar_click", {
                button_name: "theme-light"
            })
        }, l(a, n(V, {
            get class() {
                return `h-4 w-4 ${_.darken?"text-quarterary":"text-primary"}`
            },
            name: "Light"
        }), b), l(b, () => e("Light")), k(u => {
            var f = _.darken ? "0" : "50%",
                y = w("ml-1", _.darken ? "text-primary" : "text-quarterary"),
                N = w("ml-1", _.darken ? "text-quarterary" : "text-primary");
            return f !== u.e && ((u.e = f) != null ? d.style.setProperty("left", f) : d.style.removeProperty("left")), y !== u.t && S(s, u.t = y), N !== u.a && S(b, u.a = N), u
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), r
    })()
};
H(["click"]);
var De = m('<div class="flex cursor-pointer justify-between overflow-hidden rounded-lg bg-layer4 mt-3"><div class="p-4 sm:p-2.5 sm:pr-0"><h3 class="text-base font-extrabold text-primary sm:text-sm"></h3><p class="text-sm text-secondary mt-1 text-wrap sm:text-xs"></p></div><div class="h-1 w-32 flex-none pr-5 pt-1 sm:w-20 sm:p-1"><img class="h-auto w-full"alt>');

function Re() {
    return (() => {
        var t = De(),
            r = t.firstChild,
            i = r.firstChild,
            d = i.nextSibling,
            c = r.nextSibling,
            s = c.firstChild;
        return t.style.setProperty("background", "var(--Sidebar-Unit_bg)"), t.style.setProperty("background-image", "radial-gradient(circle at 400% 400%, rgb(var(--brand)), transparent 92%)"), l(i, () => e("Application")), l(d, () => e("Unlock Fun with Exclusive Features")), k(() => A(s, "src", oe("/platform/pwa-guide/pwa.png")())), t
    })()
}
const Me = () => n(g, {
    get when() {
        return !o.isesportsbr && !h.isPWA && !h.isAPP
    },
    get children() {
        return n(M, {
            href: "/events/app-download",
            class: "transition-none",
            get children() {
                return n(Re, {})
            }
        })
    }
});
var Oe = m('<div class="bc-token-entry mb-2">'),
    qe = m('<div class="absolute top-1/2 right-3 lg:right-2">'),
    Ge = m('<div class="sidebar_bg sidebar_bg_sp relative w-full rounded-lg px-0">'),
    Ke = m('<div><div class="hidden size-9">');
const Ve = function(r) {
    const [i, d] = U(h.isDevHost ? 0 : 8), c = E(), s = v(() => X(c.pathname).startsWith("/game/bc-poker"));
    return ne(() => {
        p.login && le().get("/platform-bcpoker/min-show-level").then(a => {
            a && d(a)
        }).catch(console.log)
    }), n(g, {
        get when() {
            return !x.isUsHost && o.onlyBc || h.isDevHost
        },
        get children() {
            return [n(g, {
                get when() {
                    return o.onlyBc && !o.onlySports
                },
                get children() {
                    var a = Oe();
                    return l(a, n(ie, {
                        get fallback() {
                            return (() => {
                                var b = Ke(),
                                    u = b.firstChild;
                                return b.style.setProperty("background", "var(--Sidebar-Unit_bg)"), l(b, n(ce, {}), u), k(() => S(b, w("rounded-lg center", h.mobile ? "h-16" : "h-14"))), b
                            })()
                        },
                        get children() {
                            return n(_e.Entry, {
                                get children() {
                                    return e("__ENV_SITE__ Token")
                                }
                            })
                        }
                    })), a
                }
            }), n(g, {
                get when() {
                    return D(() => !!p.login)() && p.vipLevel >= i()
                },
                get children() {
                    var a = Ge();
                    return l(a, n(O, {
                        get fold() {
                            return r.fold
                        },
                        label: () => e("__ENV_SITE__ Poker"),
                        link: "/game/bc-poker",
                        buttonName: "sidebar_poker",
                        icon: "bc_originallogo",
                        colorIcon: () => n(T, {
                            name: "bcpoker",
                            get select() {
                                return s()
                            },
                            scale: "scale(0.8)"
                        })
                    }), null), l(a, n(g, {
                        get when() {
                            return !r.fold
                        },
                        get children() {
                            var b = qe();
                            return b.style.setProperty("transform", "translateY(-50%)"), l(b, n(T, {
                                name: "new",
                                get select() {
                                    return s()
                                },
                                scale: "scale(1)"
                            })), b
                        }
                    }), null), a
                }
            })]
        }
    })
};
var We = m('<div class="sidebar_bg side-nav-item flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 mt-3 h-11 sm:mt-1 sm:h-10 sm:p-0"><div class="icon-wrap flex-none center sm:size-10"></div><span class="ml-3 text-base font-extrabold text-primary whitespace-nowrap sm:ml-0 sm:text-sm sm:font-semibold">');
const Je = function(r) {
    return n(R, {
        get title() {
            return e("Live Support")
        },
        get disabled() {
            return !r.fold
        },
        position: "horizontal",
        get children() {
            var i = We(),
                d = i.firstChild,
                c = d.nextSibling;
            return i.$$click = () => {
                $.emit("live_support", !0), L.trackEvent("sidebar_click", {
                    button_name: "live_support"
                })
            }, l(d, n(C, {
                name: "LiveSupport",
                class: "text-secondary size-6"
            })), l(c, () => e("Live Support")), i
        }
    })
};
H(["click"]);
var Qe = m('<div class="side-nav-item flex h-11 flex-1 cursor-pointer items-center overflow-hidden rounded-lg px-3 sm:h-10 sm:w-full sm:p-0"><div class="icon-wrap center flex-none sm:size-10"></div><span class="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold"></span><div>');
const Xe = function() {
    const r = v(() => {
        const i = h.langs[_.lang];
        return i ? i[0] : "English"
    });
    return (() => {
        var i = Qe(),
            d = i.firstChild,
            c = d.nextSibling,
            s = c.nextSibling;
        return i.$$click = () => {
            $.emit("open-lanfiat", 0), L.trackEvent("sidebar_click", {
                button_name: "select-language"
            })
        }, i.style.setProperty("background", "var(--Sidebar-Unit_bg)"), l(d, n(C, {
            name: "Language",
            class: "text-secondary"
        })), l(c, r), l(s, n(C, {
            name: "Arrow",
            class: "size-4 rotate-180 text-secondary"
        })), k(() => S(s, w("bg-arrow button ml-auto flex size-6 items-center justify-center p-0 sm:mr-1.5"))), i
    })()
};
H(["click"]);
var Ze = m('<img alt=coin class="h-6 sm:h-5">'),
    Ye = m('<div class="bg-arrow button ml-auto flex size-6 rotate-180 items-center justify-center rounded-lg p-0 sm:mr-1.5">'),
    et = m('<div><div class="icon-wrap center flex-none sm:size-10"></div><span class="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">'),
    tt = m('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 25 24"fill=none><rect x=0.5 width=24 height=24 rx=12></rect><path d="M12.8756 5.96282C13.043 6.04559 13.1786 6.18077 13.2614 6.34858L14.5805 9.02137C14.7042 9.27195 14.9433 9.44575 15.2196 9.48577L18.1692 9.91432C18.6332 9.98189 18.9546 10.4127 18.8874 10.8767C18.8608 11.0615 18.7734 11.2321 18.6401 11.3627L16.5057 13.4432C16.3057 13.6382 16.2142 13.9191 16.2615 14.1945L16.7655 17.1326C16.8446 17.5947 16.5342 18.0333 16.0721 18.1129C15.8882 18.1446 15.6987 18.1142 15.5337 18.0273L12.8954 16.6401C12.648 16.51 12.3528 16.51 12.1054 16.6401L12.1045 16.6397L9.4662 18.0269C9.05103 18.2448 8.53787 18.0857 8.31992 17.6705C8.23302 17.5055 8.20314 17.316 8.23438 17.1321L8.73833 14.194C8.78568 13.9186 8.69417 13.6376 8.4942 13.4427L6.3598 11.3622C6.02416 11.0348 6.01725 10.4973 6.34465 10.1616C6.47523 10.0278 6.6458 9.94093 6.83063 9.91424L9.78023 9.48569C10.0566 9.44568 10.2957 9.27189 10.4193 9.02129L11.7385 6.34849C11.9459 5.92825 12.4549 5.75542 12.8756 5.96282Z"fill=#B3BEC1>');
const nt = function() {
        const r = v(() => p.setting.enableLocaleCurrency ? p.setting.localeCurrencyName : p.setting.currencyName);
        return (() => {
            var i = et(),
                d = i.firstChild,
                c = d.nextSibling;
            return i.$$click = () => {
                P.isFiat || ($.emit("open-lanfiat", 1), L.trackEvent("sidebar_click", {
                    button_name: "select-fiatcoin"
                }))
            }, i.style.setProperty("background", "var(--Sidebar-Unit_bg)"), l(d, n(g, {
                get when() {
                    return p.setting.enableLocaleCurrency
                },
                get fallback() {
                    return n(it, {
                        get dark() {
                            return _.darken
                        },
                        class: "icon size-6 text-secondary sm:size-5"
                    })
                },
                get children() {
                    var s = Ze();
                    return k(() => A(s, "src", be.coinIcon(p.setting.localeCurrencyName))), s
                }
            })), l(c, () => de.getAlias(r()).replace(/FIAT$/, "")), l(i, n(g, {
                get when() {
                    return !P.isFiat
                },
                get children() {
                    var s = Ye();
                    return l(s, n(C, {
                        name: "Arrow",
                        class: "size-4 text-secondary"
                    })), s
                }
            }), null), k(() => S(i, w("side-nav-item flex h-11 flex-1 items-center overflow-hidden rounded-lg px-3 sm:mt-1 sm:h-10 sm:w-full sm:p-0", !P.isFiat && "cursor-pointer"))), i
        })()
    },
    it = function(r) {
        return (() => {
            var i = tt(),
                d = i.firstChild;
            return k(c => {
                var s = r.class,
                    a = r.dark ? "#3A4142" : "#ededed";
                return s !== c.e && A(i, "class", c.e = s), a !== c.t && A(d, "fill", c.t = a), c
            }, {
                e: void 0,
                t: void 0
            }), i
        })()
    };
H(["click"]);
var at = m('<div><div class="center flex-none sm:size-10"></div><span></span><button class="bg-arrow button ml-auto flex size-6 items-center justify-center rounded-lg p-0 sm:mr-1.5">'),
    rt = m('<div class="mt-1 rounded-lg">');

function W(t) {
    const r = E(),
        i = F(),
        [d, c] = U(!1),
        s = v(() => r.pathname + r.search === t.link);
    return n(g, {
        get when() {
            return !t.hostHidden
        },
        get children() {
            var a = rt();
            return a.style.setProperty("background", "var(--Sidebar-Unit_bg)"), l(a, n(R, {
                get title() {
                    return t.label()
                },
                get disabled() {
                    return !t.fold
                },
                position: "horizontal",
                get children() {
                    var b = at(),
                        u = b.firstChild,
                        f = u.nextSibling,
                        y = f.nextSibling;
                    return b.$$click = () => {
                        L.trackEvent("sidebar_click", {
                            button_name: t.buttonName
                        }), c(!0), t.link && i(t.link)
                    }, l(b, n(g, {
                        get when() {
                            return t.link
                        },
                        children: N => n(M, {
                            get href() {
                                return N()
                            },
                            class: "pointer-events-none invisible size-0"
                        })
                    }), u), l(u, n(g, {
                        get when() {
                            return t.icon
                        },
                        get children() {
                            return n(j, {
                                get name() {
                                    return t.icon || "affiliate"
                                }
                            })
                        }
                    }), null), l(u, n(g, {
                        get when() {
                            return t.colorIcon
                        },
                        get children() {
                            return n(T, {
                                get name() {
                                    return t.colorIcon || "casino"
                                },
                                get select() {
                                    return s()
                                }
                            })
                        }
                    }), null), l(f, () => t.label()), y.$$click = N => {
                        N.stopPropagation(), c(!d())
                    }, l(y, n(C, {
                        get class() {
                            return `size-4.5 fill-secondary transition ease-out ${d()?"rotate-90":"-rotate-90"}`
                        },
                        name: "Arrow"
                    })), k(N => {
                        var q = w("toggle-link-item flex h-11 w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 sm:h-10 sm:p-0", d() && "toggle-link-item-open", s() && "toggle-link-item-active"),
                            G = w("ml-3 flex-1 overflow-hidden whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold", s() && "text-brand");
                        return q !== N.e && S(b, N.e = q), G !== N.t && S(f, N.t = G), N
                    }, {
                        e: void 0,
                        t: void 0
                    }), b
                }
            }), null), l(a, n(ue, {
                get when() {
                    return d()
                },
                get children() {
                    return n(z, {
                        get each() {
                            return t.children
                        },
                        children: b => n(O, I(b, {
                            get fold() {
                                return t.fold
                            }
                        }))
                    })
                }
            }), null), a
        }
    })
}
H(["click"]);

function st() {
    const {
        isJapanIP: t,
        isJapanLang: r,
        isKoreaIP: i,
        isKoreaLang: d,
        isSoutheastAsiaIP: c,
        isSoutheastAsiaLang: s
    } = B.getAreaAndLang(_.lang, p.areaCode), a = () => {
        let b = !1;
        return (t || i) && (b = !0), c && (b = !1), (r || d) && (b = !0), s && (b = !1), (x.isUsHost || o.isesportsbr) && (b = !1), b
    };
    return {
        label: () => e("Casino"),
        link: "/casino",
        colorIcon: "casino",
        buttonName: "sidebar_casino",
        children: [{
            label: () => e("Favorites"),
            link: "/favorite",
            buttonName: "sidebar_casino_favorite",
            icon: "favorites1",
            guard: {
                needLogin: !0
            }
        }, {
            label: () => e("Recent"),
            link: "/recent",
            buttonName: "sidebar_casino_recent",
            icon: "recent",
            guard: {
                needLogin: !0
            }
        }, {
            label: () => e("__ENV_SITE__ Originals"),
            link: "/casino?tab=brand",
            buttonName: "sidebar_casino_bcoriginals",
            icon: "bc_originallogo",
            guard: {
                hostHidden: o.isesportsbr
            }
        }, {
            label: () => e("__ENV_SITE__ Exclusive"),
            link: "/section/exclusive",
            buttonName: "sidebar_casino_bcexclusive",
            icon: "bc_exlusive",
            guard: {
                hostHidden: o.isjb || o.isesportsbr
            }
        }, {
            label: () => e("Hot Games"),
            link: "/casino?tab=hot",
            buttonName: "sidebar_casino_hotgame",
            icon: "hotgame"
        }, {
            label: () => e("Slots"),
            link: "/casino?tab=slots",
            buttonName: "sidebar_casino_slots",
            icon: "slots",
            guard: {
                hostHidden: o.isesportsbr
            }
        }, {
            label: () => e("Pachinko"),
            link: "/casino?tab=pachinko",
            buttonName: "sidebar_casino_pachinko",
            icon: "pachinko",
            guard: {
                hostHidden: !a()
            }
        }, {
            label: () => e("Live Casino"),
            link: "/casino?tab=live",
            buttonName: "sidebar_casino_livecasino",
            icon: "liveevents",
            guard: {
                hostHidden: o.isesportsbr || x.isUsHost
            }
        }, {
            label: () => e("Feature Buy-in"),
            link: "/casino?tab=feature-buy-in",
            buttonName: "sidebar_casino_featurebuyin",
            icon: "featurebuy_in",
            guard: {
                hostHidden: o.isesportsbr || x.isUsHost
            }
        }, {
            label: () => e("New Releases"),
            link: "/casino?tab=new",
            buttonName: "sidebar_casino_newreleases",
            icon: "newreleases",
            guard: {
                hostHidden: o.isesportsbr
            }
        }, {
            label: () => e("Poker"),
            link: "/casino?tab=poker",
            buttonName: "sidebar_casino_poker",
            icon: "poker",
            guard: {
                hostHidden: o.isesportsbr
            }
        }, {
            label: () => e("Bingo"),
            link: "/bingo",
            buttonName: "sidebar_casino_bingo",
            icon: "bingo_home",
            guard: {
                hostHidden: o.isesportsbr
            }
        }, {
            label: () => e("Table Games"),
            link: "/casino?tab=table-game",
            buttonName: "sidebar_casino_tablegame",
            icon: "tablegame",
            guard: {
                hostHidden: o.isesportsbr
            }
        }, {
            label: () => e("Game Shows"),
            link: "/casino?tab=game-shows",
            buttonName: "sidebar_casino_gameshows",
            icon: "game_shows",
            guard: {
                hostHidden: o.isesportsbr
            }
        }, {
            label: () => e("Providers"),
            link: "/casino?tab=provider",
            buttonName: "sidebar_casino_providers",
            icon: "favorites"
        }, {
            label: () => e("Themes"),
            link: "/casino?tab=themes",
            buttonName: "sidebar_casino_themes",
            icon: "themes",
            guard: {
                hostHidden: o.isesportsbr
            }
        }]
    }
}

function ot() {
    return {
        label: () => e("Lottery"),
        link: "/lottery",
        colorIcon: "lottery",
        buttonName: "sidebar_lottery",
        hostHidden: o.isesportsbr || x.isUsHost || o.is87 || o.onlySports,
        children: [{
            label: () => e("My bets"),
            link: "/lottery/myBets",
            buttonName: "sidebar_lottery_mybets",
            icon: "my_bets",
            guard: {
                needLogin: !0
            }
        }, {
            label: () => e("All lotteries"),
            link: "/lottery/allLotteries?sort=letter_asc",
            buttonName: "sidebar_lottery_all",
            icon: "alllotteries"
        }, {
            label: () => e("Picks for you"),
            link: "/lottery/allLotteries?sort=lottery_picks_for_you",
            buttonName: "sidebar_lottery_picksforyou",
            icon: "picksforyou",
            guard: {
                needLogin: !0
            }
        }, {
            label: () => e("Favorites"),
            link: "/lottery/favourite",
            buttonName: "sidebar_lottery_favourite",
            icon: "favorites1",
            guard: {
                needLogin: !0
            }
        }, {
            label: () => e("__ENV_SITE__ Lottery"),
            link: "/lottery/detail/0",
            buttonName: "sidebar_lottery_bclottery",
            icon: "bclottery"
        }, {
            label: () => e("Popular"),
            link: "/lottery/allLotteries?sort=lottery_popular",
            buttonName: "sidebar_lottery_popular",
            icon: "popular"
        }]
    }
}

function lt() {
    const {
        isJp: t
    } = B.getAreaAndLang(_.lang, p.areaCode), r = p.areaCode === "PL";
    return {
        label: () => e("Crypto Futures"),
        link: "/trading/contract",
        buttonName: "sidebar_trading_futures",
        colorIcon: "trading",
        hostHidden: o.isjb ? !1 : t || o.isesportsbr || x.isUsHost || o.is87 || r || o.isbcke,
        children: [{
            label: () => e("High Low"),
            icon: "futures",
            link: "/trading",
            buttonName: "sidebar_trading",
            end: !0
        }, {
            label: () => e("Up Down"),
            link: "/trading/up-down",
            buttonName: "sidebar_trading_updown",
            icon: "up_down"
        }, {
            label: () => e("High Low Spread"),
            link: "/trading/spread",
            buttonName: "sidebar_trading_spread",
            icon: "high_low_spread"
        }, {
            label: () => e("Tap Trading"),
            link: "/trading/tap",
            buttonName: "sidebar_trading_tap",
            icon: "tap_trading"
        }]
    }
}

function ct() {
    const {
        isIn: t
    } = B.getAreaAndLang(_.lang, p.areaCode);
    return {
        label: () => e("Promotions"),
        link: o.isesportsbr ? "" : "/promotions/promotion",
        colorIcon: "promotion",
        buttonName: "sidebar_promotion",
        hostHidden: o.onlySports,
        children: [{
            label: () => e("₹1500 Bonus"),
            link: "/events/invite-friends-withdraw-cash",
            buttonName: "sidebar_promotion_pdd",
            icon: "pdd",
            guard: {
                hostHidden: !t
            }
        }, {
            label: () => e("Daily Contest"),
            link: "/promotions/daily-contest",
            buttonName: "sidebar_promotion_dailycontest",
            icon: "dailycontest",
            guard: {
                hostHidden: o.is87 || x.isUsHost
            }
        }, {
            label: () => e("Weekly Raffle"),
            link: "/promotions/weekly-raffle",
            buttonName: "sidebar_promotion_weeklyraffle",
            icon: "weekly_raffle",
            guard: {
                hostHidden: x.isUsHost
            }
        }, {
            label: () => e("Refer and Earn"),
            link: "refer",
            buttonName: "sidebar_promotion_refer",
            icon: "referearn",
            guard: {
                needLogin: !0,
                hostHidden: h.mobile
            }
        }]
    }
}

function bt() {
    return {
        label: () => e("Sponsorships"),
        icon: "sponsorships",
        buttonName: "sidebar_sponsorships",
        hostHidden: o.onlySports || o.isbzall || o.is87,
        children: [{
            label: () => e("Sponsorship Journey"),
            link: "/sponsorship/journey",
            buttonName: "sidebar_sponsorships_journey",
            icon: "sponsorship",
            guard: {
                hostHidden: o.isjb
            }
        }, {
            label: () => e("O'HIGGINS"),
            link: "/sponsorship/ohiggins",
            buttonName: "sidebar_sponsorships_ohiggins",
            icon: "o_higgins",
            guard: {
                hostHidden: o.isjb
            }
        }, {
            label: () => e("Jason Derulo"),
            link: "/sponsorship/jason",
            buttonName: "sidebar_sponsorships_cloud9",
            icon: "jason_derulo",
            guard: {
                hostHidden: o.isjb
            }
        }, {
            label: () => e("Lil Pump"),
            link: "/sponsorship/pump",
            buttonName: "sidebar_sponsorships_cloud9",
            icon: "lil_pump",
            guard: {
                hostHidden: o.isjb
            }
        }, {
            label: () => e("Colby Covington"),
            link: "/sponsorship/colby",
            buttonName: "sidebar_sponsorships_colby",
            icon: "colby_covington",
            guard: {
                hostHidden: o.isjb
            }
        }, {
            label: () => e("Miami Club"),
            link: "/sponsorship/miami",
            buttonName: "sidebar_sponsorships_miami",
            icon: "miami",
            guard: {
                hostHidden: o.isjb
            }
        }, {
            label: () => e("BC Game Esports"),
            link: "/sponsorship/esports",
            buttonName: "sidebar_sponsorships_esports",
            icon: "bc_originallogo",
            guard: {
                hostHidden: o.isjb
            }
        }, {
            label: () => e("Antonio Brown"),
            link: "/sponsorship/antonio",
            buttonName: "sidebar_sponsorships_antonio_brown",
            icon: "americanfootball",
            guard: {
                hostHidden: o.isjb
            }
        }, {
            label: () => e("St. Kitts & Nevis Patriots"),
            link: "/sponsorship/patriots",
            buttonName: "sidebar_sponsorships_patriots",
            icon: "st_kitts",
            guard: {
                hostHidden: o.isjb
            }
        }, {
            label: () => e("Kwara United"),
            link: "/sponsorship/kwara",
            buttonName: "sidebar_sponsorships_kwara",
            icon: "kwara_united",
            guard: {
                hostHidden: o.isjb
            }
        }, {
            label: () => e("Sashimi Poker"),
            link: "/sponsorship/sashimi",
            buttonName: "sidebar_sponsorships_sashimi",
            icon: "sashimi_poker",
            guard: {
                hostHidden: o.isjb
            }
        }, {
            label: () => e("Barbados Royals "),
            link: "/sponsorship/barbados",
            buttonName: "sidebar_sponsorships_barbados",
            icon: "barbados_royals",
            guard: {
                hostHidden: !o.isjb
            }
        }]
    }
}

function dt() {
    return {
        label: () => e("Support"),
        icon: "help",
        buttonName: "sidebar_support",
        hostHidden: !h.mobile,
        children: [{
            label: () => e("Help Center"),
            link: "/help",
            buttonName: "sidebar_support_helpcenter",
            icon: "inform"
        }, {
            label: () => e("FAQ"),
            link: "/help/faq",
            buttonName: "sidebar_support_faq",
            icon: "tips_help"
        }, {
            label: () => e("CEO Inbox"),
            link: "/ceo-inbox/enter",
            buttonName: "sidebar_support_ceoinbox",
            icon: "ceo_inbox"
        }]
    }
}

function ut() {
    return {
        label: () => e("Legal"),
        icon: "legal",
        buttonName: "sidebar_legal",
        hostHidden: !h.mobile,
        children: [{
            label: () => e("__ENV_SITE__ Licenses"),
            link: "/licenses",
            buttonName: "sidebar_legal_licenses",
            icon: "bc_licenses",
            guard: {
                hostHidden: !o.onlyBc || o.isbcke
            }
        }, {
            label: () => e("Gamble Aware"),
            link: "/help/gameble-aware",
            buttonName: "sidebar_legal_gameaware",
            icon: "gamble_ware",
            guard: {
                hostHidden: x.isUsHost
            }
        }, {
            label: () => e("Fairness"),
            link: "/help/provably-fair",
            buttonName: "sidebar_legal_fairness",
            icon: "fair"
        }, {
            label: () => e("Privacy Policy"),
            link: "/help/privacy",
            buttonName: "sidebar_legal_privacy",
            icon: "two_factor"
        }, {
            label: () => e("Terms Of Service"),
            link: "/help/terms-service",
            buttonName: "sidebar_legal_service",
            icon: "bank"
        }, {
            label: () => e("AML"),
            link: "/help/aml",
            buttonName: "sidebar_legal_aml",
            icon: "ban"
        }]
    }
}

function mt() {
    return {
        label: () => e("About Us"),
        icon: "tips_help",
        buttonName: "sidebar_aboutus",
        hostHidden: !h.mobile || o.onlySports || !o.onlyBc,
        children: [{
            label: () => e("Achievement"),
            link: "/achievement",
            buttonName: "sidebar_aboutus_achievement",
            icon: "achievement"
        }, {
            label: () => e("News"),
            link: `https://blog.bc.game/${_.lang}/`,
            buttonName: "sidebar_aboutus_news",
            icon: "personal_verification"
        }, {
            label: () => e("Work with us"),
            link: "https://angel.co/company/bc-game-2",
            buttonName: "sidebar_aboutus_workwithus",
            icon: "at"
        }, {
            label: () => e("Business Contacts"),
            link: "/business",
            buttonName: "sidebar_aboutus_business",
            icon: "webchat"
        }, {
            label: () => e("License"),
            link: "/license",
            buttonName: "sidebar_aboutus_license",
            icon: "license"
        }, {
            label: () => e("Help Desk"),
            link: `https://help.bc.support/${_.lang==="ja"?"ja":"en"}/`,
            buttonName: "sidebar_aboutus_helpdesk",
            icon: "tips_help"
        }, {
            label: () => e("Verify Representative"),
            link: "/verify_representative",
            buttonName: "sidebar_aboutus_verifyrepresentative",
            icon: "referral_codes"
        }, {
            label: () => e("Design Resources"),
            link: "https://drive.google.com/drive/folders/1Q48CUgrJOAeDGpBqmdHGNwWGxNEdTZzQ",
            buttonName: "sidebar_aboutus_designresources",
            icon: "laptop"
        }]
    }
}

function gt() {
    const t = ["bn", "uk", "ru", "pt", "hi"].find(i => _.lang === i),
        r = [{
            label: () => e("VIP Club"),
            link: p.login ? "/vip" : "/vip-detail",
            buttonName: "sidebar_vip",
            icon: "vip_club"
        }, {
            label: () => e("Bonus"),
            link: p.login ? "/bonus" : "/bonus-welcome",
            buttonName: "sidebar_bonus",
            icon: "bonus"
        }, {
            label: () => e("Quest Hub"),
            link: "/quests",
            buttonName: "sidebar_quest",
            icon: "quest",
            guard: {
                hostHidden: !p.login
            }
        }, {
            label: () => e("Challenge"),
            link: "/challenge",
            buttonName: "challenge_view",
            icon: "challenge",
            guard: {
                hostHidden: !p.login
            }
        }, {
            label: () => e("Affiliate"),
            link: "/affiliate",
            buttonName: "sidebar_affiliate",
            icon: "affiliate"
        }, {
            label: () => e("Forum"),
            link: `https://forum.${h.host}/`,
            buttonName: "sidebar_forum",
            icon: "forum",
            guard: {
                hostHidden: !o.onlyBc
            }
        }, {
            label: () => e("Provably Fair"),
            link: "/help",
            buttonName: "sidebar_provablyfair",
            icon: "fair"
        }, {
            label: () => e("Responsible Gambling"),
            link: "/responsible/faq",
            buttonName: "sidebar_responsible_gambling",
            icon: "account"
        }, {
            label: () => e("Blog"),
            link: `https://blog.${h.buildHost}/`,
            buttonName: "sidebar_blog",
            icon: "blog",
            guard: {
                hostHidden: !o.onlyBc
            }
        }, {
            label: () => e("Sport Betting Insights"),
            link: `https://betting.${h.buildHost}/${t??""}`,
            buttonName: "sidebar_insights",
            icon: "betting_insights",
            guard: {
                hostHidden: !o.onlyBc
            }
        }];
    return P.isOfflineAgent ? r.filter(i => i.link !== "/affiliate") : r
}
var _t = m('<div><div class="w-full overflow-hidden bg-layer2 pb-3 sm:bg-layer3 sm:p-4"><div class="sidebar_bg sidebar_bg_sp relative w-full rounded-lg my-3 px-0 pb-2 pt-1 sm:my-2 sm:py-1"></div><div class="flex items-center justify-between gap-3 mt-3 sm:mt-2 sm:flex-col sm:gap-0"></div><div class="w-full overflow-hidden">');
const pt = function(r) {
        const i = F(),
            d = v(() => {
                const {
                    isKr: s
                } = B.getAreaAndLang(_.lang, p.areaCode);
                return [st(), s ? Ne() : Z(), ot(), lt(), ct()]
            }),
            c = [bt(), dt(), ut(), mt()];
        return (() => {
            var s = _t(),
                a = s.firstChild,
                b = a.firstChild,
                u = b.nextSibling,
                f = u.nextSibling;
            return l(a, n(g, {
                get when() {
                    return !h.isProd
                },
                get children() {
                    return n(me, {
                        class: "w-full overflow-hidden mb-4",
                        type: "brand",
                        onClick: () => i("/substation"),
                        get children() {
                            return r.fold ? "sub" : "substation"
                        }
                    })
                }
            }), b), l(a, n(Ve, {
                get fold() {
                    return r.fold
                }
            }), b), l(a, n(z, {
                get each() {
                    return d()
                },
                children: y => n(W, I(y, {
                    get fold() {
                        return r.fold
                    }
                }))
            }), b), l(b, n(z, {
                get each() {
                    return gt()
                },
                children: y => n(O, I(y, {
                    get fold() {
                        return r.fold
                    }
                }))
            })), l(a, n(z, {
                each: c,
                children: y => n(W, I(y, {
                    get fold() {
                        return r.fold
                    }
                }))
            }), u), l(a, n(g, {
                get when() {
                    return !P.isOfflineAgent
                },
                get children() {
                    return n(Je, {
                        get fold() {
                            return r.fold
                        }
                    })
                }
            }), u), l(a, n(g, {
                get when() {
                    return !r.fold
                },
                get children() {
                    return n(Me, {})
                }
            }), u), l(u, n(Xe, {}), null), l(u, n(g, {
                get when() {
                    return p.setting.enableLocaleCurrency && !P.isFiat
                },
                get children() {
                    return n(nt, {})
                }
            }), null), l(f, n(g, {
                get when() {
                    return !h.mobile && !r.fold
                },
                get children() {
                    return n(Ue, {})
                }
            })), k(() => S(s, w("w-full", r.class))), s
        })()
    },
    yt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: pt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    O as N, pt as S, yt as i
};