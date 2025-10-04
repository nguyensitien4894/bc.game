var Ae = Object.defineProperty,
    ke = Object.defineProperties;
var Le = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var ie = Object.prototype.hasOwnProperty,
    oe = Object.prototype.propertyIsEnumerable;
var le = (a, r, n) => r in a ? Ae(a, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : a[r] = n,
    W = (a, r) => {
        for (var n in r || (r = {})) ie.call(r, n) && le(a, n, r[n]);
        if (M)
            for (var n of M(r)) oe.call(r, n) && le(a, n, r[n]);
        return a
    },
    de = (a, r) => ke(a, Le(r));
var ce = (a, r) => {
    var n = {};
    for (var s in a) ie.call(a, s) && r.indexOf(s) < 0 && (n[s] = a[s]);
    if (a != null && M)
        for (var s of M(a)) r.indexOf(s) < 0 && oe.call(a, s) && (n[s] = a[s]);
    return n
};
import {
    i as t,
    c as e,
    e as $e,
    s as Oe,
    t as o,
    f as Q,
    a as Pe,
    m as z
} from "./web-46c35164.js";
import {
    c as X
} from "./store-2fc868cc.js";
import {
    g as Fe,
    b as je
} from "./servers-3d2e4cbc.js";
import {
    S as D,
    F as ze,
    b as O,
    g as K,
    d as G,
    e as _e,
    c as Me,
    o as We
} from "./solid-js-871c99e1.js";
import {
    a as Ye,
    u as Ee
} from "./router-73d3f837.js";
import {
    t as i,
    T as ue
} from "./i18n-fd9a94dd.js";
import {
    E as Z,
    a as Be,
    D as b,
    w as qe,
    ad as He,
    c as me,
    I as P,
    u as B,
    e as j,
    k as ye,
    M as Ce,
    t as Ve,
    S as Ke,
    N as Ge,
    b as Je,
    p as ge,
    m as fe,
    B as E,
    n as Y,
    P as Qe
} from "./manifest-d92afe19.js";
import {
    f as I
} from "./utils-0702ff35.js";
import {
    T as De
} from "./skeleton-4a26813d.js";
import {
    T as Re
} from "./table-101d4254.js";
import {
    T as Xe
} from "./transition-mask-294f96c1.js";
import {
    h as Ze
} from "./http-696896a0.js";
import {
    I as pe
} from "./index-9e8fcb6a.js";
import "./memoize-91f976fa.js";
import "./_MapCache-91cc8331.js";
import "./_baseGetTag-c2e287b9.js";
var et = o("<div class=mb-3>"),
    tt = o('<div class="rounded-lg p-3">'),
    at = o('<div class="my-5 flex items-center justify-between"><div class="center gap-3"><img class="h-8 w-8"alt=icon><span class=w></span></div><div class="pc:gap-10 flex gap-14"><div class="flex flex-col items-center"><span class="font-extrabold text-brand">$</span><span class=text-secondary></span></div><div class="flex flex-col items-end"><span class=font-extrabold>$</span><span class=text-secondary>');
const rt = function(r) {
    return (() => {
        var n = tt();
        return t(n, e(D, {
            get when() {
                return r.data.length
            },
            get fallback() {
                return e(Z, {
                    get children() {
                        return i("No rewards yet invite friends to join you now!")
                    }
                })
            },
            get children() {
                return [(() => {
                    var s = et();
                    return t(s, () => r.children), s
                })(), e(ze, {
                    get each() {
                        return r.data
                    },
                    children: s => (() => {
                        var x = at(),
                            $ = x.firstChild,
                            _ = $.firstChild,
                            S = _.nextSibling,
                            L = $.nextSibling,
                            w = L.firstChild,
                            g = w.firstChild;
                        g.firstChild;
                        var c = g.nextSibling,
                            u = w.nextSibling,
                            m = u.firstChild;
                        m.firstChild;
                        var y = m.nextSibling;
                        return t(S, () => Be.getAlias(s.currencyName)), t(g, () => new b(s.availableUsd).toFixed(2, b.ROUND_DOWN), null), t(c, () => i("Available")), t(m, () => new b(s.commissionUsd).toFixed(2, b.ROUND_DOWN), null), t(y, () => i("Total Received")), $e(() => Oe(_, "src", qe.coinIcon(s.currencyName))), x
                    })()
                })]
            }
        })), n
    })()
};
var nt = o('<div class="order-first text-nowrap">'),
    st = o('<div class="center absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer rounded-full bg-layer4">'),
    lt = o("<div>");

function it(a) {
    return Array.isArray(a) && a.length === 2 && a[0] instanceof Date && a[1] instanceof Date
}
const ot = new Date,
    N = new Date(ot.getTime() - 1e3);

function J(a) {
    return (() => {
        var r = lt();
        return t(r, e(He, {
            get class() {
                return me("bg-layer3", a.datePickerClass)
            },
            get options() {
                return a.options
            },
            get value() {
                return a.value
            },
            get onChange() {
                return a.onChange
            },
            format: n => it(n) ? n[0].getTime() === N.getTime() ? "All Range" : `${I(n[0],"YYYY/MM/DD")}-${I(n[1],"YYYY/MM/DD")}` : I(n),
            get children() {
                var n = nt();
                return t(n, () => a.label), n
            }
        }), null), t(r, e(D, {
            get when() {
                return a.clear
            },
            get children() {
                var n = st();
                return n.$$click = () => a.onChange([N, N]), t(n, e(P, {
                    class: "w-4/5 text-secondary",
                    name: "Close"
                })), n
            }
        }), null), $e(() => Pe(r, me("relative w-full", a.class))), r
    })()
}
Q(["click"]);
var H = o('<span class="font-semibold leading-6 text-secondary">'),
    dt = o('<span class="font-semibold leading-6">'),
    ct = o('<div class="flex cursor-pointer items-center justify-end gap-2"><span class="font-semibold text-brand">$'),
    ut = o('<div class="flex flex-col gap-3 p-3"><div class="flex flex-col gap-3 sm:flex-row">'),
    mt = o("<div>");
const gt = function(r) {
    const n = B(),
        [s, x] = X({
            beginDate: "",
            endDate: "",
            page: 1,
            pageSize: 10
        }),
        [$, _] = O([N, N]),
        S = () => {
            const c = W({}, s);
            return $()[0] === N && (c.beginDate = "", c.endDate = ""), Ze.post("/agent/information/referral-rewards/list/", c)
        },
        [L, {
            refetch: w
        }] = K(() => s.page, S);
    G(() => {
        x("beginDate", I($()[0])), x("endDate", I($()[1])), x("page", 1), w()
    });
    const g = () => [{
        title: i("Username"),
        dataIndex: "userName",
        render(c) {
            return (() => {
                var u = H();
                return t(u, c), u
            })()
        }
    }, {
        title: i("Registration Date"),
        dataIndex: "createDate",
        render(c) {
            return (() => {
                var u = H();
                return t(u, c), u
            })()
        }
    }, {
        title: i("VIP Level"),
        dataIndex: "userLevel",
        render(c) {
            return (() => {
                var u = dt();
                return t(u, c), u
            })()
        }
    }, {
        title: i("Code"),
        dataIndex: "aliasCode",
        render(c) {
            return (() => {
                var u = H();
                return t(u, c), u
            })()
        }
    }, {
        title: i("Earned"),
        dataIndex: "rewardUsd",
        render(c, u) {
            return (() => {
                var m = ct(),
                    y = m.firstChild;
                return y.firstChild, m.$$click = () => n("/rewards-detail", {
                    state: u
                }), t(y, c, null), t(m, e(P, {
                    class: "w-4 rotate-180 text-secondary",
                    name: "Arrow"
                }), null), m
            })()
        }
    }];
    return (() => {
        var c = ut(),
            u = c.firstChild;
        return t(c, () => r.children, u), t(u, e(J, {
            class: "!w-80",
            get value() {
                return $()
            },
            onChange: _,
            get label() {
                return i("Registration Date:")
            },
            clear: !0
        })), t(c, e(_e, {
            get fallback() {
                return e(De, {
                    width: 5,
                    height: 2.1,
                    rows: 10,
                    get columns() {
                        return g()
                    }
                })
            },
            get children() {
                return e(D, {
                    get when() {
                        return L()
                    },
                    children: m => (() => {
                        var y = mt();
                        return t(y, e(Xe, {
                            get children() {
                                return e(Re, {
                                    get data() {
                                        return m().list
                                    },
                                    get columns() {
                                        return z(() => !!j.mobile)() ? g().filter(v => v.dataIndex === "userName" || v.dataIndex === "userLevel" || v.dataIndex === "rewardUsd") : g()
                                    },
                                    get empty() {
                                        return e(Z, {
                                            get children() {
                                                return i("No rewards yet invite friends to join you now!")
                                            }
                                        })
                                    }
                                })
                            }
                        }), null), t(y, e(D, {
                            get when() {
                                return m().total > 10
                            },
                            get children() {
                                return e(ye, {
                                    class: "flex justify-end p-3",
                                    get current() {
                                        return s.page
                                    },
                                    onChange: v => x("page", v),
                                    get total() {
                                        return m().total
                                    },
                                    get pageSize() {
                                        return s.pageSize
                                    }
                                })
                            }
                        }), null), y
                    })()
                })
            }
        }), null), c
    })()
};
Q(["click"]);
var ft = o('<span class="font-semibold text-secondary">'),
    be = o('<span class="font-semibold leading-6 text-secondary">'),
    pt = o('<span class="font-semibold leading-6 text-primary">%'),
    bt = o('<span class="font-semibold leading-6 text-primary">'),
    ht = o('<div class="flex cursor-pointer items-center justify-end gap-1 font-semibold"><span class=text-brand>'),
    vt = o('<div class=p-4><div class="mb-3 flex flex-col gap-3 sm:flex-row"><div class="center flex-1 gap-3"></div><div class="flex flex-1 flex-col gap-3 sm:flex-row">');

function xt(a, r) {
    return Ce().post("/agent/invitation/code/list/", {
        wagerStartDate: a,
        wagerEndDate: r,
        page: 1,
        pageSize: 20
    })
}

function wt(a) {
    const [r] = Ye(), n = B(), s = Ce(), x = new Date, $ = x.toISOString().slice(0, 10), _ = new Date(x);
    _.setDate(_.getDate() - 90);
    const S = _.toISOString().slice(0, 10),
        [L] = K(() => xt(S, $), {
            initialValue: {
                list: [],
                totalCodeNum: 0,
                createdNum: 0
            }
        }),
        [w, g] = X({
            beginDate: "",
            endDate: "",
            wagerBeginDate: S,
            wagerEndDate: $,
            code: "",
            aliasCode: "All Codes",
            userName: "",
            userId: "",
            page: 1,
            pageSize: 10,
            sortName: null,
            sortType: null
        });

    function c(d) {
        const h = d,
            {
                aliasCode: l
            } = h,
            p = ce(h, ["aliasCode"]);
        return l === "All Codes" ? de(W({}, p), {
            aliasCode: ""
        }) : d
    }
    const u = Me(() => {
        var p;
        const d = [],
            l = (p = L()) == null ? void 0 : p.list;
        return l && l.length > 0 && l.map(U => {
            d.push(U.aliasCode)
        }), ["All Codes", ...d]
    });
    G(() => {
        r.code && u().length > 1 && g("aliasCode", r.code)
    });
    const [m, y] = O([N, N]), [v, T] = O([_, x]);
    G(() => {
        g("beginDate", I(m()[0])), g("endDate", I(m()[1])), g("wagerBeginDate", I(v()[0])), g("wagerEndDate", I(v()[1])), f()
    });
    const C = () => [{
            title: i("Username"),
            dataIndex: "userName",
            render(d) {
                return (() => {
                    var l = ft();
                    return t(l, d), l
                })()
            }
        }, {
            title: i("User ID"),
            dataIndex: "userId",
            render(d) {
                return (() => {
                    var l = be();
                    return t(l, d), l
                })()
            }
        }, {
            title: i("Commission Rate"),
            dataIndex: "commissionRate",
            render(d) {
                return (() => {
                    var l = pt(),
                        p = l.firstChild;
                    return t(l, () => Number(d) * 100, p), l
                })()
            }
        }, {
            title: i("Total Deposits (Past 7D)"),
            dataIndex: "day7TotalDeposits",
            render(d) {
                return (() => {
                    var l = bt();
                    return t(l, d), l
                })()
            }
        }, {
            title: i("Registration Date"),
            dataIndex: "createDate",
            render(d) {
                return (() => {
                    var l = be();
                    return t(l, d), l
                })()
            }
        }, {
            title: i("Total Commission"),
            dataIndex: "commissionUsd",
            render(d, l) {
                return (() => {
                    var p = ht(),
                        U = p.firstChild;
                    return p.$$click = () => n("/friends-detail", {
                        state: l
                    }), t(U, d), t(p, e(P, {
                        name: "Arrow",
                        class: "w-4 rotate-180 text-secondary"
                    }), null), p
                })()
            }
        }],
        [R, A] = O(!0),
        [k, {
            refetch: f
        }] = K(() => w.aliasCode, () => {
            if (!R()) {
                const d = W({}, w);
                return m()[0] === N && (d.beginDate = "", d.endDate = ""), s.post("/agent/information/list/", c(d)).then(l => ({
                    list: l.list || [],
                    page: l.page || 0,
                    pageSize: l.pageSize || 0,
                    total: l.total || 0,
                    totalPage: l.totalPage || 0
                })).catch(l => (Ve(l), {
                    list: [],
                    page: 0,
                    pageSize: 0,
                    total: 0,
                    totalPage: 0
                }))
            }
            return A(!1), a.friendTableList
        }, {
            initialValue: a.friendTableList
        });
    return (() => {
        var d = vt(),
            l = d.firstChild,
            p = l.firstChild,
            U = p.nextSibling;
        return t(p, e(Ke, {
            class: "flex-1 !bg-layer3",
            get value() {
                return w.aliasCode
            },
            get options() {
                return u()
            },
            onChange: h => {
                g("aliasCode", h)
            },
            children: h => h()
        }), null), t(p, e(Ge, {
            class: "flex-1 bg-layer3",
            get value() {
                return w.userName
            },
            onChange: h => g("userName", h),
            get placeholder() {
                return i("Search UserName")
            },
            onblur: f,
            get children() {
                return e(P, {
                    onClick: f,
                    name: "Search",
                    class: "order-first -ml-1 mr-1 h-6 w-6 text-secondary"
                })
            }
        }), null), t(U, e(J, {
            get value() {
                return m()
            },
            onChange: y,
            get label() {
                return i("Registration Date:")
            },
            clear: !0
        }), null), t(U, e(J, {
            options: {
                minDate: _,
                maxDate: new Date
            },
            get value() {
                return v()
            },
            onChange: T,
            get label() {
                return i("Wager Date:")
            }
        }), null), t(d, e(_e, {
            get fallback() {
                return e(De, {
                    width: 5,
                    height: 2.1,
                    rows: 10,
                    get columns() {
                        return C()
                    }
                })
            },
            get children() {
                return e(D, {
                    get when() {
                        return k()
                    },
                    children: h => [e(Re, {
                        get data() {
                            return h().list
                        },
                        get columns() {
                            return z(() => !!j.mobile)() ? C().filter(F => F.dataIndex === "userName" || F.dataIndex === "commissionUsd") : C()
                        },
                        get empty() {
                            return e(Z, {
                                get children() {
                                    return i("No rewards yet invite friends to join you now!")
                                }
                            })
                        }
                    }), e(D, {
                        get when() {
                            return h().total > 10
                        },
                        get children() {
                            return e(ye, {
                                class: "flex justify-end p-3",
                                get current() {
                                    return w.page
                                },
                                onChange: F => {
                                    g("page", F), f()
                                },
                                get pageSize() {
                                    return w.pageSize
                                },
                                get total() {
                                    return h().total
                                }
                            })
                        }
                    })]
                })
            }
        }), null), d
    })()
}
Q(["click"]);
var $t = o('<div class="absolute top-12 h-[1px] w-full bg-third">'),
    _t = o('<div class="bg-layer2 font-semibold"><section class="mb-4 flex flex-col gap-3 rounded-xl bg-layer4 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5"><div class="flex flex-col border-b border-third pb-3 sm:flex-1 sm:border-none sm:pb-0"><div class="flex items-center justify-between"><span class=text-secondary></span></div><span class="mb-3 text-2xl font-extrabold text-brand">$</span><div><span class="mr-1 text-nowrap"></span><span>$</span></div></div><div class="flex flex-col md:flex-1"><div class="flex items-center justify-between"><span class=text-secondary></span></div><span class="mb-3 text-2xl font-extrabold text-brand">$</span><div class="flex items-center gap-3"><div><span class="mr-1 text-nowrap text-secondary"></span><span class=sub-num>$</span></div><div><span class="mr-1 text-nowrap text-secondary"></span><span class=sub-num>$</span></div></div></div><div class="flex items-center gap-2 border-third sm:h-20 sm:border-l sm:pl-4 lg:pl-10"></div></section><section class="relative rounded-xl bg-layer4 pt-2">'),
    yt = o('<h3 class="text-base font-extrabold">Available Commission Rewards'),
    he = o('<p class="font-semibold text-secondary">The rewards you can withdraw to your wallet.'),
    ve = o('<h3 class="text-base font-extrabold">Total received'),
    Ct = o('<p class="font-semibold text-secondary">The rewards you have received up to now. It includes the rewards already withdrawn and the available commission rewards.'),
    Dt = o("<div class=content>"),
    Rt = o('<h3 class="text-base font-extrabold">Available Referral Rewards'),
    Ut = o('<p class="font-semibold text-secondary">All unlocked rewards received so far, including withdrawn and available for withdrawal.'),
    St = o('<h3 class="text-base font-extrabold">Locked Rewards'),
    Tt = o('<p class="font-semibold text-secondary">The rewards that you will receive in the future when your friends’ VIP level increases.'),
    xe = o("<span class=font-extrabold>"),
    It = o('<div class="right-2 top-2 flex items-center justify-between sm:absolute sm:gap-3">');

function Ue(a) {
    const r = a.split("/");
    return r ? r[r.length - 1] : ""
}
const Kt = function(r) {
    const n = B(),
        [s, x] = X({
            ratio: "0",
            maxRatio: "0",
            friendNumber: 0,
            commissionUsd: "0",
            availableCommissionUsd: "0",
            rewardUsd: "0",
            availableRewardUsd: "0",
            remainingRewardUsd: "0",
            todayWagerUsd: "0",
            todayCommissionUsd: "0"
        }),
        [$, _] = O([]),
        [S, L] = O([]),
        [w, g] = O([]),
        c = () => {
            Promise.all([Fe(), je()]).then(T => {
                if (T && T.length === 2) {
                    const C = T[0].dashboard;
                    x(C);
                    const R = T[1];
                    _(R);
                    const A = [],
                        k = [];
                    for (let f = 0; f < R.length; f++) R[f].availableAmount > 0 && (A.push(R[f]), k.push(R[f]));
                    if (Number(C.availableRewardUsd) > 0) {
                        const f = k.find(d => d.currencyName === "USDT");
                        f ? f.availableAmount = (Number(f.availableAmount) + Number(C.availableRewardUsd)).toString() : k.push({
                            availableAmount: C.availableRewardUsd,
                            availableUsd: "",
                            commissionAmount: "",
                            commissionUsd: "",
                            currencyName: fe.isUsHost ? "SC" : "USDT",
                            userId: 0
                        })
                    }
                    g(k), L(A)
                }
            })
        };
    We(() => {
        c()
    }), Je.on("refresh_reward", function() {
        c()
    });
    const u = Ee(),
        m = () => Ue(u.pathname),
        y = () => Number(v.indexOf(m())),
        v = ["friends", "commission", "referral"];
    return (() => {
        var T = _t(),
            C = T.firstChild,
            R = C.firstChild,
            A = R.firstChild,
            k = A.firstChild,
            f = A.nextSibling;
        f.firstChild;
        var d = f.nextSibling,
            l = d.firstChild,
            p = l.nextSibling;
        p.firstChild;
        var U = R.nextSibling,
            h = U.firstChild,
            F = h.firstChild,
            q = h.nextSibling;
        q.firstChild;
        var Se = q.nextSibling,
            ee = Se.firstChild,
            te = ee.firstChild,
            ae = te.nextSibling;
        ae.firstChild;
        var Te = ee.nextSibling,
            re = Te.firstChild,
            ne = re.nextSibling;
        ne.firstChild;
        var se = U.nextSibling,
            Ie = C.nextSibling;
        return t(k, () => i("Available Commission Rewards")), t(A, e(P, {
            name: "Info",
            class: "w-5 text-secondary",
            onClick: () => ge.push(() => e(we, {
                get type() {
                    return v[0]
                }
            }))
        }), null), t(f, () => new b(s.availableCommissionUsd).toFixed(2, b.ROUND_FLOOR), null), t(l, () => i("Total Received")), t(p, () => new b(s.commissionUsd).toFixed(2, b.ROUND_FLOOR), null), t(F, () => i("Available Referral Rewards")), t(h, e(P, {
            name: "Info",
            class: "w-5 text-secondary",
            onClick: () => ge.push(() => e(we, {
                get type() {
                    return v[1]
                }
            }))
        }), null), t(q, () => new b(s.availableRewardUsd).toFixed(2, b.ROUND_FLOOR), null), t(te, () => i("Total Received")), t(ae, () => new b(s.rewardUsd).toFixed(2, b.ROUND_FLOOR), null), t(re, () => i("Locked Rewards")), t(ne, () => new b(s.remainingRewardUsd).toFixed(2, b.ROUND_FLOOR), null), t(se, e(D, {
            get when() {
                return !fe.isUsHost
            },
            get children() {
                return e(E, {
                    class: "h-10 flex-1 sm:px-8",
                    type: "second",
                    get disabled() {
                        return z(() => !!new b(s.availableCommissionUsd).equals(0))() && new b(s.availableRewardUsd).equals(0)
                    },
                    onClick: () => {
                        n("/rewards-swap", {
                            state: {
                                availableCommissionUsd: s.availableCommissionUsd,
                                availableRewardUsd: s.availableRewardUsd,
                                list: S()
                            }
                        })
                    },
                    get children() {
                        return i("Swap")
                    }
                })
            }
        }), null), t(se, e(E, {
            class: "h-10 flex-1 sm:flex-auto sm:px-8",
            type: "brand",
            get disabled() {
                return z(() => !!new b(s.availableCommissionUsd).equals(0))() && new b(s.availableRewardUsd).equals(0)
            },
            onClick: () => {
                n("/rewards-withdraw", {
                    state: {
                        list: S(),
                        previewList: w()
                    }
                })
            },
            get children() {
                return i("Withdraw to Wallet")
            }
        }), null), t(Ie, e(Y, {
            get value() {
                return y()
            },
            type: "indicator",
            class: "border-third sm:w-96",
            onChange: Ne => n(`/affiliate/my-rewards/${v[Ne]}`, {
                replace: !0
            }),
            get children() {
                return [e(D, {
                    get when() {
                        return !j.mobile
                    },
                    get children() {
                        return [e(V, {}), $t()]
                    }
                }), e(Y.TabItem, {
                    get title() {
                        return i("Commission by Friends")
                    },
                    get children() {
                        return e(wt, {
                            get friendTableList() {
                                return r.friendTableList
                            }
                        })
                    }
                }), e(Y.TabItem, {
                    get title() {
                        return i("Commission by Currency")
                    },
                    get children() {
                        return e(rt, {
                            get data() {
                                return $()
                            },
                            get children() {
                                return e(D, {
                                    get when() {
                                        return j.mobile
                                    },
                                    get children() {
                                        return e(V, {})
                                    }
                                })
                            }
                        })
                    }
                }), e(Y.TabItem, {
                    get title() {
                        return i("Level Up Rewards")
                    },
                    get children() {
                        return e(gt, {
                            get children() {
                                return e(D, {
                                    get when() {
                                        return j.mobile
                                    },
                                    get children() {
                                        return e(V, {})
                                    }
                                })
                            }
                        })
                    }
                })]
            }
        })), T
    })()
};

function we(a) {
    return e(Qe, {
        get title() {
            return z(() => a.type === "commission")() ? i("Commission Rewards") : i("Referral Rewards")
        },
        get children() {
            var r = Dt();
            return t(r, e(D, {
                get when() {
                    return a.type === "commission"
                },
                get fallback() {
                    return e(ue, {
                        i18nKey: "bonus.affiliate.rewardtip2",
                        get children() {
                            return [Rt(), he(), ve(), Ut(), St(), Tt()]
                        }
                    })
                },
                get children() {
                    return e(ue, {
                        i18nKey: "bonus.affiliate.rewardtip1",
                        get children() {
                            return [yt(), he(), ve(), Ct()]
                        }
                    })
                }
            })), r
        }
    })
}

function V() {
    const a = B(),
        r = () => Ue(location.pathname);
    return (() => {
        var n = It();
        return t(n, e(E, {
            type: "second",
            class: "center h-8 gap-1 px-2",
            onClick: () => {
                a("/affiliate/rules", {
                    replace: !0
                })
            },
            get children() {
                return [e(pe, {
                    name: "rateRules",
                    size: 16
                }), (() => {
                    var s = xe();
                    return t(s, () => i("Rules")), s
                })()]
            }
        }), null), t(n, e(E, {
            type: "second",
            class: "center h-8 gap-1 px-2",
            onClick: () => {
                a(`/reward-history?type=${r()}`)
            },
            get children() {
                return [e(pe, {
                    name: "time",
                    size: 16
                }), (() => {
                    var s = xe();
                    return t(s, () => i("History")), s
                })(), e(P, {
                    class: "w-4 rotate-180 fill-secondary",
                    name: "Arrow"
                })]
            }
        }), null), n
    })()
}
export {
    Kt as
    default
};