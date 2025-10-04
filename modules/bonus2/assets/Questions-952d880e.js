import {
    i as r,
    c as d,
    e as S,
    s as k,
    t as o,
    u as j,
    m as z,
    f as K
} from "./web-46c35164.js";
import {
    c as M
} from "./servers-3d2e4cbc.js";
import {
    c as V
} from "./store-2fc868cc.js";
import {
    o as E,
    c as D,
    S as P,
    F as R,
    g as O
} from "./solid-js-871c99e1.js";
import {
    t as B,
    D as T,
    a as A,
    z as F,
    w as W,
    ac as G,
    s as J,
    e as h,
    B as q,
    l as U,
    C as H,
    u as X,
    j as Z
} from "./manifest-d92afe19.js";
import {
    t,
    T as L
} from "./i18n-fd9a94dd.js";
import {
    a as ee
} from "./utils-0702ff35.js";
var re = o('<div class="mx-3 h-12 w-full overflow-hidden"><div class="live-container grid grid-rows-2 gap-4">'),
    te = o('<div class="flex flex-col gap-3 rounded-xl bg-layer4 p-6 md:flex-row md:items-center md:gap-10"><div class="flex flex-none flex-col gap-3 sm:w-96"><div class="flex items-center"><b class=live-dot></b><p class=font-extrabold> </p></div><div class="flex items-center justify-between rounded-xl bg-layer5 p-3"><p></p><div class="text-xl font-extrabold text-brand">'),
    ae = o('<div class="mx-3 flex items-center justify-start gap-3"><p></p><div class="center flex-shrink-0 gap-1"><p class="text-nowrap font-extrabold text-brand">+</p><img class="h-4 w-4">');
const ye = function() {
    const [l, n] = V({
        commissionUsd: "",
        rewardUsd: "",
        list: []
    });
    E(() => {
        M().then(e => {
            e && n(e)
        }).catch(B)
    });
    const a = D(() => new T(l.commissionUsd || 0).add(new T(l.rewardUsd || 0)));
    let c;
    return (() => {
        var e = te(),
            u = e.firstChild,
            i = u.firstChild,
            w = i.firstChild,
            s = w.nextSibling;
        s.firstChild;
        var m = i.nextSibling,
            p = m.firstChild,
            g = p.nextSibling;
        return r(s, () => t("Live Rewards"), null), r(p, () => t("Total Rewards Sent To-Date")), r(g, () => A.printCurrency(a(), "USDFIAT")), r(e, d(P, {
            get when() {
                return !F.isesportsbr
            },
            get children() {
                var $ = re(),
                    _ = $.firstChild,
                    y = c;
                return typeof y == "function" ? j(y, _) : c = _, _.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(9rem, 1fr))"), r(_, d(R, {
                    get each() {
                        return l.list
                    },
                    children: v => (() => {
                        var x = ae(),
                            C = x.firstChild,
                            Q = C.nextSibling,
                            I = Q.firstChild;
                        I.firstChild;
                        var Y = I.nextSibling;
                        return r(C, () => v.userName), r(I, () => A.printCurrency(new T(v.amount), v.currencyName, {
                            target: v.currencyName,
                            hasAlias: !1,
                            precision: 2
                        }), null), S(() => k(Y, "src", W.coinIcon(v.currencyName))), x
                    })()
                })), $
            }
        }), null), e
    })()
};
var se = o('<img class="mr-2 size-5">'),
    le = o('<div class="mt-5 w-full"><div class="flex w-full flex-col items-center justify-between sm:flex-row sm:gap-6"><div class="w-full flex-col sm:w-1/2"><div class=text-secondary><span></span></div><div class="mt-2 flex w-full items-center justify-between rounded-xl border border-input bg-layer3 px-3 py-2"><p class=l></p><a class=contacts-link-item target=_self>'),
    ne = o('<div class="relative justify-end rounded-xl bg-layer4 bg-no-repeat font-semibold sm:flex"><div class="flex flex-col items-center justify-end p-6 sm:w-3/5"><p class="gap-3 text-center text-2xl font-extrabold sm:mb-3 sm:flex"></p><img alt=program class="left-20 w-full sm:absolute sm:bottom-0 sm:h-full sm:w-auto"><div class=text-secondary></div><div class=text-secondary>'),
    ie = o('<div class=w-full><div class=text-secondary><span></span></div><div class="mt-2 flex w-full items-center justify-between rounded-xl border border-input bg-layer3 px-3 py-2"><p class=l></p><a class=contacts-link-item target=_self>');
const xe = function() {
    const [l] = O(() => G({
        title: t("Korean Affiliate Manager")
    })), n = D(() => {
        var a;
        return (a = l()) == null ? void 0 : a.filter(c => c.name === "Telegram")[0]
    });
    return (() => {
        var a = ne(),
            c = a.firstChild,
            e = c.firstChild,
            u = e.nextSibling,
            i = u.nextSibling,
            w = i.nextSibling;
        return r(i, () => t("If you have a large audience and followers. We have special conditions for you to customize your referral program!")), r(w, () => t("If you can invite players and their wager amount reaches a billion dollars and above, you will get your own customized casino! You can set up a casino website with your domain and design style.")), r(c, d(P, {
            get when() {
                return J.lang === "ko"
            },
            get fallback() {
                return (() => {
                    var s = ie(),
                        m = s.firstChild,
                        p = m.firstChild,
                        g = m.nextSibling,
                        $ = g.firstChild,
                        _ = $.nextSibling;
                    return r(p, () => t("for more details, please contact Us")), r($, () => `business@${h.licenseHost}`), r(_, d(q, {
                        type: "second",
                        class: "not-full h-10 p-2",
                        get children() {
                            return t("Send Now")
                        }
                    })), S(() => k(_, "href", `mailto:business@${h.licenseHost}`)), s
                })()
            },
            get children() {
                var s = le(),
                    m = s.firstChild,
                    p = m.firstChild,
                    g = p.firstChild,
                    $ = g.firstChild,
                    _ = g.nextSibling,
                    y = _.firstChild,
                    v = y.nextSibling;
                return r($, () => t("For more details, please contact Us")), r(y, () => `business@${h.licenseHost}`), r(v, d(q, {
                    type: "second",
                    class: "not-full h-10 p-2",
                    get children() {
                        return t("Send Now")
                    }
                })), r(m, d(q, {
                    type: "second",
                    class: "h-[58px] w-full translate-y-1/4 sm:w-1/2",
                    onClick: () => {
                        window.open("https://t.me/BCAFFKR", "_blank")
                    },
                    get children() {
                        return [(() => {
                            var x = se();
                            return S(() => {
                                var C;
                                return k(x, "src", (C = n()) == null ? void 0 : C.icon)
                            }), x
                        })(), z(() => t("Korean Affiliate Manager"))]
                    }
                }), null), S(() => k(v, "href", `mailto:business@${h.licenseHost}`)), s
            }
        }), null), S(s => {
            var m = `url(${U("/bonus/affiliate/program_bg.png")()})`,
                p = t('Learn more about our <p class="text-brand">Affiliate program</p>'),
                g = U("/bonus/affiliate/program.png")();
            return m !== s.e && ((s.e = m) != null ? a.style.setProperty("background-image", m) : a.style.removeProperty("background-image")), p !== s.t && (e.innerHTML = s.t = p), g !== s.a && k(u, "src", s.a = g), s
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), a
    })()
};
var f = o("<span>"),
    oe = o("<span>__ENV_HOST__"),
    ce = o('<span class="ml-1 cursor-pointer text-brand">Affiliate Dashboard.'),
    N = o('<p><span></span><span class="ml-1 cursor-pointer text-brand">'),
    ue = o('<div class="flex flex-col gap-3 rounded-xl bg-layer4 p-6"><p class="text-xl font-extrabold"></p><div class="flex flex-col gap-4">'),
    de = o('<span class="cursor-pointer font-extrabold">'),
    fe = o('<div class="mt-1 font-semibold text-secondary">');

function me(b) {
    const l = () => A.printCurrency(new T(1e3)),
        n = X(),
        a = e => {
            if (!Z.login) {
                n("/login/regist");
                return
            }
            if (e === "dashboard") {
                ee(b());
                return
            }
            n(e, {
                replace: h.mobile
            })
        },
        c = [{
            question: (() => {
                var e = f();
                return r(e, () => t("How does the referral system work?")), e
            })(),
            answer: (() => {
                var e = f();
                return r(e, () => t("When you share your referral link with any of your friends, family or advertise the link and a player signs up at our site that player becomes your referral and they will earn you commission & extra rewards by playing at __ENV_HOST__.")), e
            })()
        }, {
            question: (() => {
                var e = f();
                return r(e, () => t("How much can I earn from my referral?")), e
            })(),
            answer: (() => {
                var e = f();
                return r(e, () => t("You can earn 25% of their wager + __local_amount__ per referral.", {
                    local_amount: l()
                })), e
            })()
        }, {
            question: (() => {
                var e = f();
                return r(e, () => t("What is USD reward and how does it work?")), e
            })(),
            answer: (() => {
                var e = f();
                return r(e, () => t("There is  __local_amount__ USD reward for each referral you bring to __ENV_HOST__ This USD reward is given in 10 parts when your referral level up from VIP4 til VIP 70.", {
                    local_amount: l()
                })), e
            })()
        }, {
            question: (() => {
                var e = f();
                return r(e, () => t("I have big audience, how I can get special deals?")), e
            })(),
            answer: d(L, {
                i18nKey: "bonus.mainpage.affiliate.desc2.chatnew",
                get email() {
                    return `business@${h.licenseHost}`
                },
                children: "If you have a website with good traffic or a social media account with a large audience, please contact us at __email__."
            })
        }, {
            question: (() => {
                var e = f();
                return r(e, () => t("How many affiliate links can I create if I have different websites/accounts?")), e
            })(),
            answer: (() => {
                var e = f();
                return r(e, () => t("You can create up to 20 unique codes for different source of traffic.")), e
            })()
        }, {
            question: (() => {
                var e = f();
                return r(e, () => t("Can I see the data of my referral?")), e
            })(),
            answer: d(L, {
                i18nKey: "bonus.mainpage.affiliate.desc3",
                get children() {
                    return ["Yes, ", oe(), " believes in total transparency and offers all data to the users like username, total wager and commission earned, date of registration and referral link applied. You can see all of this information in your", (() => {
                        var e = ce();
                        return e.$$click = () => a("dashboard"), e
                    })()]
                }
            })
        }, {
            question: (() => {
                var e = f();
                return r(e, () => t("Can I send tip or reward to my referrals?")), e
            })(),
            answer: (() => {
                var e = N(),
                    u = e.firstChild,
                    i = u.nextSibling;
                return r(u, () => t("Yes, you can send your referrals tips in any supported coins.")), i.$$click = () => a("affiliate/referral/code"), r(i, () => t("Click here")), e
            })()
        }];
    return F.isjb || c.splice(2, 0, {
        question: (() => {
            var e = f();
            return r(e, () => t("Are there any banners I can use to advertise?")), e
        })(),
        answer: (() => {
            var e = N(),
                u = e.firstChild,
                i = u.nextSibling;
            return r(u, () => t("Yes, we offer multiple banner sizes for your convenience.")), i.$$click = () => a("/affiliate/banners"), r(i, () => t("Click here")), e
        })()
    }), c
}
const Ce = function() {
        let l;
        const n = me(() => l);
        return (() => {
            var a = ue(),
                c = a.firstChild,
                e = c.nextSibling,
                u = l;
            return typeof u == "function" ? j(u, a) : l = a, r(c, () => t("Frequently Asked Questions")), r(e, d(R, {
                each: n,
                children: (i, w) => d(pe, {
                    get answer() {
                        return i.answer
                    },
                    get question() {
                        return i.question
                    },
                    get defaultOpen() {
                        return w() === 0
                    }
                })
            })), a
        })()
    },
    pe = function(l) {
        return d(H, {
            get children() {
                return [d(H.Trigger, {
                    get children() {
                        var n = de();
                        return r(n, () => l.question), n
                    }
                }), d(H.Content, {
                    get children() {
                        var n = fe();
                        return r(n, () => l.answer), n
                    }
                })]
            }
        })
    };
K(["click"]);
export {
    ye as L, xe as P, Ce as Q
};