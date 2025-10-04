import {
    c as r,
    i as t,
    e as Y,
    s as v,
    t as p
} from "./web-46c35164.js";
import {
    j as ae,
    Y as q,
    t as j,
    ac as ie,
    a8 as J,
    u as K,
    a as C,
    D as w,
    B as M,
    v as G,
    z as X,
    l as H,
    E as oe,
    e as Z,
    f as de,
    n as ee,
    m as ce,
    c as fe,
    M as ue
} from "./manifest-d92afe19.js";
import {
    t as l
} from "./i18n-fd9a94dd.js";
import {
    t as ge,
    g as E,
    e as te,
    S as y,
    F as re,
    c as le,
    b as pe,
    d as me,
    r as xe
} from "./solid-js-871c99e1.js";
import {
    i as N,
    g as Q,
    a as be
} from "./servers-3d2e4cbc.js";
import {
    c as he
} from "./store-2fc868cc.js";
import {
    r as ve,
    c as ne,
    a as _e
} from "./index-440f14a0.js";
import {
    I as T
} from "./index-9e8fcb6a.js";
import {
    L as $e,
    P as Ce,
    Q as we
} from "./Questions-952d880e.js";
import ye from "./index-b8654c69.js";
import Se from "./index-d516ed32.js";
import Re from "./index-39458e70.js";
import Ie from "./index-be3cd385.js";
import {
    u as De
} from "./router-73d3f837.js";
import "./http-696896a0.js";
import "./memoize-91f976fa.js";
import "./_MapCache-91cc8331.js";
import "./_baseGetTag-c2e287b9.js";
import "./coin-7eb79adb.js";
import "./withdraw-363bec6b.js";
import "./utils-0702ff35.js";
import "./skeleton-4a26813d.js";
import "./table-101d4254.js";
import "./transition-mask-294f96c1.js";
const F = ge(() => {
    const [c, n] = he({
        loading: !0,
        inviteInfo: {},
        dashboardInfo: {
            dashboard: N,
            topCommissions: [],
            topRewards: []
        }
    }), [, {
        refetch: o
    }] = E(() => ae.login, () => {
        q.isOfflineAgent ? Q().then(a => {
            n({
                loading: !1,
                dashboardInfo: a || {
                    dashboard: N,
                    topCommissions: [],
                    topRewards: []
                }
            })
        }).catch(j) : Promise.all([be(), Q()]).then(a => {
            const f = a[0],
                i = a[1] || {
                    dashboard: N,
                    topCommissions: [],
                    topRewards: []
                };
            n({
                loading: !1,
                inviteInfo: f,
                dashboardInfo: i
            })
        }).catch(j)
    });
    return {
        state: c,
        setState: n,
        refetch: o
    }
});
var Ae = p('<div class="flex flex-col items-center gap-3 md:flex-row"><span></span><div class="center gap-3">'),
    Te = p('<a target=_blank rel="noopener noreferrer"class=flex-none><img class=icon>');
const Ue = function(n) {
    const [o] = E(() => ie({
        title: l("My Referral"),
        inviteUrl: n.url
    }));
    return r(te, {
        get children() {
            return r(y, {
                get when() {
                    return o()
                },
                get fallback() {
                    return r(J, {})
                },
                get children() {
                    var d = Ae(),
                        a = d.firstChild,
                        f = a.nextSibling;
                    return t(a, () => l("Share via socials")), t(f, r(re, {
                        get each() {
                            return o()
                        },
                        children: i => i.name === "email" || !i.url ? null : (() => {
                            var u = Te(),
                                g = u.firstChild;
                            return Y(e => {
                                var s = i.url,
                                    m = i.icon;
                                return s !== e.e && v(u, "href", e.e = s), m !== e.t && v(g, "src", e.t = m), e
                            }, {
                                e: void 0,
                                t: void 0
                            }), u
                        })()
                    })), d
                }
            })
        }
    })
};
var ke = p(`<div class="relative flex flex-col gap-3 rounded-xl bg-layer4 bg-[url('src/features/affiliate/assets/invite_bg.png')] px-4 py-6 md:w-2/3"><div class=invite-top><div class=top-inner><p class="mb-2 text-xl font-extrabold"></p><div class="flex items-center gap-6"><p class="flex flex-col sm:flex-row sm:items-center sm:gap-2"><span class="text-xl font-extrabold text-brand"></span><span></span></p><div class="h-[30px] w-[1px] bg-secondary/10"></div><p class="flex flex-col sm:flex-row sm:items-center sm:gap-2"><span class="text-xl font-extrabold text-brand">25%</span><span></span></p></div></div></div><p class=text-secondary></p><div class="flex flex-col gap-4 md:flex-row"><div class=flex-1><p class="mb-1 text-secondary"></p><div class="flex items-center justify-between rounded-xl bg-layer5 py-1 pl-3 pr-1"><p class=ellipsis></p></div></div><div class=flex-1><p class="mb-1 text-secondary"></p><div class="flex items-center justify-between rounded-xl bg-layer5 py-1 pl-3 pr-1"><p></p></div></div></div><div class="center right-4 top-4 sm:absolute">`);
const Le = function() {
    const {
        state: n
    } = F, o = K();
    return (() => {
        var d = ke(),
            a = d.firstChild,
            f = a.firstChild,
            i = f.firstChild,
            u = i.nextSibling,
            g = u.firstChild,
            e = g.firstChild,
            s = e.nextSibling,
            m = g.nextSibling,
            R = m.nextSibling,
            I = R.firstChild,
            _ = I.nextSibling,
            x = a.nextSibling,
            b = x.nextSibling,
            S = b.firstChild,
            $ = S.firstChild,
            D = $.nextSibling,
            L = D.firstChild,
            B = S.nextSibling,
            h = B.firstChild,
            A = h.nextSibling,
            z = A.firstChild,
            O = b.nextSibling;
        return t(i, () => l("Invite a Friend to Get")), t(e, () => C.printCurrency(new w(1e3))), t(s, () => l("Referral Rewards")), t(_, () => l("Commission Rewards")), t(x, () => l("Get __friendAmount__ for each friend you invite, plus up to 25% commission on their wagers. Enjoy consistent commission, whether they win or lose, in our Casino and Sportsbook. Start earning now!", {
            friendAmount: C.printCurrency(new w(1e3))
        })), t($, () => l("Referral Link")), t(L, () => n.inviteInfo.invitationUrl), t(D, r(M, {
            size: "s",
            class: "not-full rounded-lg bg-layer6",
            onClick: () => {
                try {
                    G.copyToClipboard(n.inviteInfo.invitationUrl), j(l("Copied"))
                } catch (se) {}
            },
            get children() {
                return l("Copy")
            }
        }), null), t(h, () => l("Referral Code")), t(z, () => n.inviteInfo.aliasCode), t(A, r(M, {
            size: "s",
            class: "not-full rounded-lg bg-layer6",
            onClick: () => {
                try {
                    G.copyToClipboard(n.inviteInfo.aliasCode), j(l("Copied"))
                } catch (se) {}
            },
            get children() {
                return l("Copy")
            }
        }), null), t(d, r(y, {
            get when() {
                return !X.isesportsbr
            },
            get children() {
                return r(Ue, {
                    get url() {
                        return n.inviteInfo.invitationUrl
                    }
                })
            }
        }), O), t(O, r(M, {
            class: "font-extrabold text-brand",
            onClick: () => {
                o("/referral-terms")
            },
            get children() {
                return l("Referral Terms & Conditions")
            }
        })), d
    })()
};
var ze = p('<div class="flex flex-col gap-3 md:w-1/3"><div class="flex rounded-xl bg-layer4 px-4 py-6"><div class="center flex-1 flex-col gap-2 border-r border-third"><img class="mb-2 h-auto w-10"><p class="text-xs text-secondary"></p><p class="text-xl font-extrabold"></p></div><div class="center flex-1 flex-col gap-2"><img class="mb-2 h-auto w-10"><p class="text-xs text-secondary"></p><p class="text-xl font-extrabold"></p></div></div><div class="flex flex-1 gap-2 rounded-xl bg-layer4 md:bg-transparent"><div class="flex h-full w-full flex-1 flex-col px-4 py-6 md:rounded-xl md:bg-layer4"><img class="mb-2 w-6"><p class="text-xs text-secondary"></p><span class="text-xl font-extrabold"></span></div><div class="flex h-full w-full flex-1 flex-col px-4 py-6 md:rounded-xl md:bg-layer4"><img class="mb-2 w-6"><p class="text-xs text-secondary"></p><span class="text-xl font-extrabold">');
const Pe = function() {
    const {
        state: n
    } = F, o = le(() => n.dashboardInfo.dashboard);
    return (() => {
        var d = ze(),
            a = d.firstChild,
            f = a.firstChild,
            i = f.firstChild,
            u = i.nextSibling,
            g = u.nextSibling,
            e = f.nextSibling,
            s = e.firstChild,
            m = s.nextSibling,
            R = m.nextSibling,
            I = a.nextSibling,
            _ = I.firstChild,
            x = _.firstChild,
            b = x.nextSibling,
            S = b.nextSibling,
            $ = _.nextSibling,
            D = $.firstChild,
            L = D.nextSibling,
            B = L.nextSibling;
        return t(u, () => l("Total Reward")), t(g, () => C.printCurrency(new w(o().rewardUsd))), t(m, () => l("Total Friends")), t(R, () => n.dashboardInfo.dashboard.friendNumber), v(x, "src", ve), t(b, () => l("Referral Rewards")), t(S, () => C.printCurrency(new w(o().availableRewardUsd))), v(D, "src", ne), t(L, () => l("Commission Rewards")), t(B, () => C.printCurrency(new w(o().availableCommissionUsd))), Y(h => {
            var A = H("/bonus/affiliate/trophy.png")(),
                z = H("/bonus/affiliate/usehead.png")();
            return A !== h.e && v(i, "src", h.e = A), z !== h.t && v(s, "src", h.t = z), h
        }, {
            e: void 0,
            t: void 0
        }), d
    })()
};
var je = p('<div class=activities-wrap><div class="flex items-center justify-between"><div class=flex><img class="mr-2 w-6"><span></span></div><p class="font-extrabold text-brand">+'),
    Be = p('<div class="flex flex-col gap-3 rounded-xl bg-layer4 px-4 py-6"><div class="text-xl font-extrabold"></div><div class=bot-info>'),
    V = p("<p>"),
    Me = p('<div class="flex items-center justify-between"><div class=center><img class="mr-2 w-6"><span></span></div><p class="font-extrabold text-brand">+');
const Ne = function() {
    const {
        state: n
    } = F, o = le(() => n.dashboardInfo.dashboard);
    return (() => {
        var d = Be(),
            a = d.firstChild,
            f = a.nextSibling;
        return t(a, () => l("Rewards Activities")), t(f, r(y, {
            get when() {
                return n.dashboardInfo.topCommissions.length > 0
            },
            get fallback() {
                return r(oe, {
                    get children() {
                        return [(() => {
                            var i = V();
                            return t(i, () => l("No info yet")), i
                        })(), (() => {
                            var i = V();
                            return t(i, () => l("Invite friends to join you now!")), i
                        })()]
                    }
                })
            },
            get children() {
                var i = je(),
                    u = i.firstChild,
                    g = u.firstChild,
                    e = g.firstChild,
                    s = e.nextSibling,
                    m = g.nextSibling;
                return m.firstChild, v(e, "src", _e), t(s, () => l("Referral Rewards")), t(m, () => C.printCurrency(new w(o().availableRewardUsd)), null), t(i, r(re, {
                    get each() {
                        return n.dashboardInfo.topCommissions
                    },
                    children: R => {
                        const I = new w(R.commissionUsd);
                        return (() => {
                            var _ = Me(),
                                x = _.firstChild,
                                b = x.firstChild,
                                S = b.nextSibling,
                                $ = x.nextSibling;
                            return $.firstChild, v(b, "src", ne), t(S, () => l("Commission Rewards")), t($, () => C.printCurrency(I), null), _
                        })()
                    }
                }), null), i
            }
        })), d
    })()
};
var Ee = p('<h2 class="pb-4 text-lg font-extrabold leading-8">'),
    Fe = p('<div class="flex flex-col gap-4 bg-layer2"><div class="flex flex-col gap-4 md:flex-row">'),
    U = p('<div class="center gap-1"><div>');
const P = ["affiliate", "my-rewards", "referral", "rules", "banners"];

function Oe(c) {
    const n = c.match(/\/affiliate\/([^\/]+)/);
    return n ? n[1] : "affiliate"
}

function Ge() {
    const c = new Date().toISOString().slice(0, 10),
        n = new Date;
    n.setDate(n.getDate() - 90);
    const o = n.toISOString().slice(0, 10);
    return ue().post("/agent/information/list/", {
        beginDate: "",
        endDate: "",
        wagerBeginDate: o,
        wagerEndDate: c,
        code: "",
        aliasCode: "",
        userName: "",
        userId: "",
        page: 1,
        pageSize: 10,
        sortName: null,
        sortType: null
    })
}
const W = function() {
    const n = K(),
        o = De(),
        d = () => Oe(o.pathname),
        a = () => Number(P.indexOf(d())),
        [f, i] = pe(void 0),
        [u] = E(f, Ge, {
            initialValue: {
                list: [],
                page: 0,
                pageSize: 0,
                total: 0,
                totalPage: 0
            }
        });
    me(xe(a, () => {
        !f() && (a() === 1 || a() === 2) && i(!0)
    }));

    function g(e) {
        switch (e) {
            case 0:
                return "/affiliate";
            case 1:
                return `/affiliate/${P[e]}/commission`;
            case 2:
                return `/affiliate/${P[e]}/code`;
            default:
                return `/affiliate/${P[e]}`
        }
    }
    return [r(y, {
        get when() {
            return !Z.mobile
        },
        get children() {
            var e = Ee();
            return t(e, () => l("Affiliate")), e
        }
    }), r(te, {
        get fallback() {
            return r(J, {
                class: "h-40"
            })
        },
        get children() {
            return r(ee, {
                class: "mt-3 flex-none rounded-xl bg-layer6 p-1 sm:mt-0 sm:w-[800px]",
                get value() {
                    return a()
                },
                onChange: e => {
                    n(g(e), {
                        replace: !0
                    })
                },
                get children() {
                    return [r(k, {
                        get title() {
                            return (() => {
                                var e = U(),
                                    s = e.firstChild;
                                return t(e, r(T, {
                                    name: "dashboard",
                                    size: 20,
                                    get class() {
                                        return a() === 0 ? "text-brand" : ""
                                    }
                                }), s), t(s, () => l("Dashboard")), e
                            })()
                        },
                        get children() {
                            var e = Fe(),
                                s = e.firstChild;
                            return t(s, r(y, {
                                get when() {
                                    return !q.isOfflineAgent
                                },
                                get children() {
                                    return r(Le, {})
                                }
                            }), null), t(s, r(Pe, {}), null), t(e, r(Ne, {}), null), t(e, r($e, {}), null), t(e, r(Ce, {}), null), t(e, r(we, {}), null), e
                        }
                    }), r(k, {
                        class: "[&_.scroll-x>button]:flex-none [&_.scroll-x]:w-auto",
                        get title() {
                            return (() => {
                                var e = U(),
                                    s = e.firstChild;
                                return t(e, r(T, {
                                    name: "myRewards",
                                    size: 20,
                                    get class() {
                                        return a() === 1 ? "text-brand" : ""
                                    }
                                }), s), t(s, () => l("My Rewards")), e
                            })()
                        },
                        get children() {
                            return r(ye, {
                                get friendTableList() {
                                    return u()
                                }
                            })
                        }
                    }), r(k, {
                        get title() {
                            return (() => {
                                var e = U(),
                                    s = e.firstChild;
                                return t(e, r(T, {
                                    name: "referral",
                                    size: 20,
                                    get class() {
                                        return a() === 2 ? "text-brand" : ""
                                    }
                                }), s), t(s, () => l("Referral Codes & Friends")), e
                            })()
                        },
                        get children() {
                            return r(Ie, {
                                get friendTableList() {
                                    return u()
                                }
                            })
                        }
                    }), r(k, {
                        get title() {
                            return (() => {
                                var e = U(),
                                    s = e.firstChild;
                                return t(e, r(T, {
                                    name: "rateRules",
                                    size: 20,
                                    get class() {
                                        return a() === 3 ? "text-brand" : ""
                                    }
                                }), s), t(s, () => l("Rate & Rules")), e
                            })()
                        },
                        get children() {
                            return r(Se, {})
                        }
                    }), r(y, {
                        get when() {
                            return X.onlyBc && !ce.isUsHost
                        },
                        get children() {
                            return r(k, {
                                get title() {
                                    return (() => {
                                        var e = U(),
                                            s = e.firstChild;
                                        return t(e, r(T, {
                                            name: "banner",
                                            size: 20,
                                            get class() {
                                                return a() === 4 ? "text-brand" : ""
                                            }
                                        }), s), t(s, () => l("Download Banners")), e
                                    })()
                                },
                                get children() {
                                    return r(Re, {})
                                }
                            })
                        }
                    })]
                }
            })
        }
    })]
};

function pt() {
    return r(y, {
        get when() {
            return Z.mobile
        },
        get fallback() {
            return r(W, {})
        },
        get children() {
            return r(de, {
                get title() {
                    return l("Affiliate")
                },
                get children() {
                    return r(W, {})
                }
            })
        }
    })
}

function k(c) {
    return r(ee.TabItem, {
        get class() {
            return fe(c.class, "mb-4 mt-4 flex-1 bg-transparent")
        },
        get title() {
            return c.title
        },
        get children() {
            return c.children
        }
    })
}
export {
    pt as
    default
};