import {
    c as n,
    i as a,
    t as o,
    f as Y,
    m as H
} from "./web-46c35164.js";
import {
    P as O,
    N as B,
    B as v,
    M as D,
    v as I,
    t as g,
    p as T,
    u as R,
    E as F,
    e as K,
    k as q,
    I as C,
    h as G,
    K as J
} from "./manifest-d92afe19.js";
import {
    t as l
} from "./i18n-fd9a94dd.js";
import {
    b as Q,
    c as V,
    e as W,
    S as w,
    g as X,
    d as Z
} from "./solid-js-871c99e1.js";
import {
    c as h
} from "./store-2fc868cc.js";
import {
    T as ee
} from "./table-101d4254.js";
import {
    T as te
} from "./skeleton-4a26813d.js";
import {
    f as ae
} from "./utils-0702ff35.js";
import {
    u as re
} from "./router-73d3f837.js";
var ne = o('<div class=mb-4><p class="mb-3 text-secondary">'),
    le = o("<div>");
const ie = function(u) {
    const [s, p] = Q("");

    function d() {
        return D().post("agent/invitation/code/add/", {
            invitationName: s(),
            campaignName: s()
        }).then(i => {
            try {
                I.copyToClipboard(i.invitationUrl), g(l("Referral code created and copied to clipboard."))
            } catch (e) {
                g(l("Referral code created."))
            }
            u.closeDialog(), T.pop()
        }).catch(i => {
            g(i.message)
        })
    }
    return n(O, {
        get title() {
            return l("Create Code")
        },
        get children() {
            return [(() => {
                var i = ne(),
                    e = i.firstChild;
                return a(e, () => l("Campaign Name (Optional)")), a(i, n(B, {
                    class: "input",
                    get placeholder() {
                        return l("Enter Campaign Name")
                    },
                    get value() {
                        return s()
                    },
                    onChange: p
                }), null), i
            })(), (() => {
                var i = le();
                return a(i, n(v, {
                    onClick: e => {
                        e.preventDefault(), d()
                    },
                    type: "brand",
                    class: "w-full",
                    get children() {
                        return l("Create campaign")
                    }
                })), i
            })()]
        }
    })
};
var se = o('<span class="font-semibold text-secondary">'),
    oe = o('<div class="center gap-1 font-semibold"><span>'),
    de = o('<div class="center gap-1 font-semibold"><span class="font-semibold leading-6 text-primary">'),
    ce = o('<span class="font-semibold leading-6 text-primary">%'),
    me = o('<span class="font-semibold leading-6 text-secondary">'),
    ue = o('<div class="flex cursor-pointer items-center justify-end gap-2"><span class="font-semibold text-primary">'),
    pe = o("<div>"),
    ge = o("<div class=sm:p-4>");

function fe(m) {
    const u = R(),
        [s, p] = h({
            pageSize: 10,
            page: 1
        }),
        d = V(() => m.data.list.slice((s.page - 1) * s.pageSize, s.page * s.pageSize), [m.data.list, s.page, s.pageSize]),
        i = () => [{
            title: l("Name"),
            dataIndex: "campaignName",
            render(e) {
                return (() => {
                    var t = se();
                    return a(t, e || "--"), t
                })()
            }
        }, {
            title: l("Code"),
            dataIndex: "aliasCode",
            render(e) {
                return (() => {
                    var t = oe(),
                        r = t.firstChild;
                    return a(r, e), a(t, n(v, {
                        onClick: () => {
                            I.copyToClipboard(e.toString()), g(l("Copied"))
                        },
                        get children() {
                            return n(C, {
                                name: "Copy",
                                class: "w-4 text-secondary"
                            })
                        }
                    }), null), t
                })()
            }
        }, {
            title: l("Link"),
            dataIndex: "invitationUrl",
            render(e) {
                return (() => {
                    var t = de(),
                        r = t.firstChild;
                    return a(r, e), a(t, n(v, {
                        get children() {
                            return n(C, {
                                class: "w-4 cursor-pointer text-secondary",
                                onClick: () => {
                                    try {
                                        navigator.clipboard.writeText(e), g(l("Invitation URL copied to clipboard."))
                                    } catch (f) {}
                                },
                                name: "Copy"
                            })
                        }
                    }), null), t
                })()
            }
        }, {
            title: l("Commission Rate"),
            dataIndex: "ratio",
            render(e) {
                return (() => {
                    var t = ce(),
                        r = t.firstChild;
                    return a(t, e * 100, r), t
                })()
            }
        }, {
            title: l("Date Created"),
            dataIndex: "createTime",
            render(e) {
                return (() => {
                    var t = me();
                    return a(t, () => ae(new Date(e), "YYYY-MM-DD HH:mm:ss")), t
                })()
            }
        }, {
            title: l("Referrals"),
            dataIndex: "registerNum",
            render(e, t) {
                return (() => {
                    var r = ue(),
                        f = r.firstChild;
                    return r.$$click = () => u("/referral-code-detail", {
                        state: t
                    }), a(f, e), a(r, n(C, {
                        class: "w-4 rotate-180 text-secondary",
                        name: "Arrow"
                    }), null), r
                })()
            }
        }];
    return (() => {
        var e = pe();
        return a(e, n(W, {
            get fallback() {
                return n(te, {
                    width: 5,
                    height: 3,
                    rows: 10,
                    get columns() {
                        return i()
                    }
                })
            },
            get children() {
                return n(w, {
                    get when() {
                        return d().length > 0
                    },
                    get fallback() {
                        return n(F, {
                            get children() {
                                return l("No rewards yet invite friends to join you now!")
                            }
                        })
                    },
                    get children() {
                        return (() => {
                            var t = ge();
                            return a(t, n(ee, {
                                get data() {
                                    return d()
                                },
                                get columns() {
                                    return H(() => !!K.mobile)() ? i().filter(r => r.dataIndex === "campaignName" || r.dataIndex === "aliasCode" || r.dataIndex === "registerNum") : i()
                                }
                            }), null), a(t, n(w, {
                                get when() {
                                    return m.data.createdNum > 10
                                },
                                get children() {
                                    return n(q, {
                                        class: "flex justify-end p-3",
                                        get current() {
                                            return s.page
                                        },
                                        onChange: r => p("page", r),
                                        get total() {
                                            return m.data.createdNum
                                        },
                                        get pageSize() {
                                            return s.pageSize
                                        }
                                    })
                                }
                            }), null), t
                        })()
                    }
                })
            }
        })), e
    })()
}
Y(["click"]);
var ve = o('<div class="bg-layer2 font-semibold"><div class="items-center justify-between rounded-lg bg-layer4 p-4 sm:flex"><div class="mb-4 flex flex-1 items-center"><div class="flex-1 text-secondary"><div></div><div class="text-2xl font-extrabold"><span class=text-primary></span>/</div></div><div class="flex-1 text-secondary"><div></div><div class="text-2xl font-extrabold text-primary"><span></span></div></div></div><div class="flex w-full items-center border-third sm:h-20 sm:w-60 sm:border-l sm:pl-10"></div></div><section class="relative mt-4 rounded-xl bg-layer4 pt-2">');

function we(m) {
    const u = D();
    R();
    const s = new Date,
        p = s.toISOString().slice(0, 10),
        d = new Date(s);
    d.setDate(d.getDate() - 90);
    const i = d.toISOString().slice(0, 10),
        [e, t] = h({
            wagerStartDate: i,
            wagerEndDate: p,
            page: 1,
            pageSize: 20
        }),
        [r, f] = h({
            list: [],
            totalCodeNum: 0,
            createdNum: 0
        }),
        k = () => u.post("/agent/invitation/code/list/", e).then(c => {
            c && c.list && f({
                list: c.list,
                totalCodeNum: c.totalCodeNum,
                createdNum: c.createdNum
            })
        }),
        [, {
            refetch: E
        }] = X(() => e, k);
    re();
    const P = G(),
        z = J();
    return Z(() => {
        P() && z().scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }), (() => {
        var c = ve(),
            x = c.firstChild,
            b = x.firstChild,
            $ = b.firstChild,
            _ = $.firstChild,
            y = _.nextSibling,
            S = y.firstChild;
        S.nextSibling;
        var L = $.nextSibling,
            N = L.firstChild,
            A = N.nextSibling,
            U = A.firstChild,
            j = b.nextSibling,
            M = x.nextSibling;
        return a(_, () => l("Referral Code Created")), a(S, () => r.createdNum), a(y, () => r.totalCodeNum, null), a(N, () => l("Friends")), a(U, () => m.friendTableList.total), a(j, n(v, {
            onClick: () => {
                T.push(() => n(ie, {
                    closeDialog: E
                }))
            },
            class: "h-10 w-full",
            type: "brand",
            get children() {
                return l("Create Code")
            }
        })), a(M, n(fe, {
            data: r
        })), c
    })()
}
export {
    we as
    default
};