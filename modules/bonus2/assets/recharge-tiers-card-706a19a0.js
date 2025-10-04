import {
    i as r,
    c as t,
    t as l
} from "./web-46c35164.js";
import {
    D as _,
    p as m,
    P as h
} from "./manifest-d92afe19.js";
import {
    F as $,
    S as g
} from "./solid-js-871c99e1.js";
import {
    C as d
} from "./currency-format-c1ee851b.js";
import {
    t as n,
    T as v
} from "./i18n-fd9a94dd.js";
var w = l('<div class="rounded-xl bg-layer4 px-4 py-2">'),
    b = l("<span>"),
    R = l('<div class="flex items-center justify-between py-2 text-sm font-semibold"><div><span class=text-primary>-</span></div><span class=text-brand>%');
const y = s => (() => {
    var a = w();
    return r(a, t($, {
        get each() {
            return s.tires
        },
        children: e => (() => {
            var i = R(),
                u = i.firstChild,
                o = u.firstChild,
                f = o.firstChild,
                p = u.nextSibling,
                x = p.firstChild;
            return r(o, () => n("Tier __rank__", {
                rank: e.index
            }), f), r(o, () => e.tireName, null), r(u, t(g, {
                get when() {
                    return e.startWager || e.endWager
                },
                get children() {
                    return ["(", t(d, {
                        currencyName: "USDFIAT",
                        get children() {
                            var c = b();
                            return r(c, t(g, {
                                get when() {
                                    return e.startWager
                                },
                                get children() {
                                    return t(d.Amount, {
                                        get amount() {
                                            return e.startWager
                                        }
                                    })
                                }
                            }), null), r(c, t(g, {
                                get when() {
                                    return e.endWager
                                },
                                fallback: "+",
                                get children() {
                                    return ["-", t(d.Amount, {
                                        get amount() {
                                            return e.endWager
                                        }
                                    })]
                                }
                            }), null), c
                        }
                    }), ")"]
                }
            }), null), r(p, () => new _(e == null ? void 0 : e.vipRechargeRate).mul(100).toFixed(0), x), i
        })()
    })), a
})();
var W = l('<div class="flex flex-col gap-y-4"><p class="font-semibold text-secondary">'),
    C = l('<span class="ml-1 font-extrabold text-brand">7 consecutive days'),
    T = l('<div class="flex flex-col gap-y-4"><p></p><p class="font-semibold text-secondary">');
const D = s => m.push(() => t(h, {
        get title() {
            return n("Tier System")
        },
        get children() {
            var a = W(),
                e = a.firstChild;
            return r(e, () => n("Tiers is calculated based on your wager, the more you wager the higher recharge rate you will get! ")), r(a, t(y, {
                tires: s
            }), null), a
        }
    })),
    j = () => m.push(() => {
        const s = () => [{
            index: 1,
            tireName: n("Basic"),
            startWager: null,
            endWager: null,
            vipRechargeRate: .2
        }, {
            index: 2,
            tireName: n("Super"),
            startWager: null,
            endWager: null,
            vipRechargeRate: .22
        }, {
            index: 3,
            tireName: n("Mega"),
            startWager: null,
            endWager: null,
            vipRechargeRate: .24
        }, {
            index: 4,
            tireName: n("Epic"),
            startWager: null,
            endWager: null,
            vipRechargeRate: .25
        }];
        return t(h, {
            get title() {
                return n("Tier System")
            },
            get children() {
                var a = T(),
                    e = a.firstChild,
                    i = e.nextSibling;
                return r(e, t(v, {
                    i18nKey: "bonus.welecome.newtext.desc3",
                    get children() {
                        return ["Activate Recharge once and enjoy substantial rewards for", C(), "! Customize your claiming frequency to suit your own pace."]
                    }
                })), r(i, () => n("Your recharge rate is calculated based on your wager. The more you wager, the higher the recharge rate you will get!")), r(a, t(y, {
                    get tires() {
                        return s()
                    }
                }), null), a
            }
        })
    });
export {
    y as R, j as a, D as p
};