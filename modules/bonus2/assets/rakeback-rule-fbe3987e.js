import {
    c as t,
    i as c,
    e as P,
    s as U,
    f as B,
    t as a
} from "./web-46c35164.js";
import {
    p as b,
    u as V,
    P as T,
    z as H,
    m as d,
    a as x,
    G as Y,
    B as j,
    I as K,
    s as z,
    w as D,
    a7 as p,
    j as F
} from "./manifest-d92afe19.js";
import {
    S as y,
    F as N
} from "./solid-js-871c99e1.js";
import {
    t as e,
    T as g
} from "./i18n-fd9a94dd.js";
import {
    e as f
} from "./index-a51223a0.js";
import {
    p as E
} from "./popup-game-limits-38371d44.js";
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
var L = a('<div class="rounded-xl border border-solid border-input bg-layer3 p-3"><p class="text-sm text-primary">'),
    W = a('<span class="cursor-pointer text-brand underline">here'),
    G = a("<span>__currencyName__"),
    q = a('<span class="mx-1 cursor-pointer text-brand">__siteswap__'),
    O = a("<span>__currencyName__ "),
    J = a('<span class="mx-1 cursor-pointer text-brand">Vault Pro'),
    M = a("<span>__currencyName2__"),
    Q = a('<span class="inline-flex items-center gap-x-1 text-sm font-extrabold text-brand">'),
    X = a("<span>"),
    Z = a('<div class="relative flex h-36 flex-col justify-center rounded-lg bg-cover bg-center bg-no-repeat px-5"><span class="inline-flex items-center text-lg font-extrabold">1<!>(<img class=size-5>) = 1 USD(<span></span>)'),
    ee = a('<div class="flex flex-col gap-y-4">'),
    re = a('<span class="text-base font-semibold">'),
    te = a('<div class="flex flex-col gap-y-3 pb-3">'),
    ne = a('<div class="text-sm font-semibold text-secondary">');
const Ne = () => {
        b.push(() => t($, {}))
    },
    fe = () => {
        b.push(() => t($, {
            showRate: !0
        }))
    },
    $ = v => {
        const S = () => e("__ENV_HOST__ Swap"),
            I = V(),
            h = (...n) => (b.pop(), I(...n)),
            r = () => x.getAlias(F.bonusCurrencyName),
            R = [{
                title: e("How to unlock __currencyName__?", {
                    currencyName: r()
                }),
                answers: [e("Locked __currencyName__ is earned through specific bonuses, such as deposit bonuses and lucky spins.", {
                    currencyName: r()
                }), e("Unlocking __currencyName__ is simple! It works like rakeback and is gradually unlocked as you place wagers/bets.", {
                    currencyName: r()
                }), e("For every bet you place, a portion of your Locked __currencyName__ will be released based on this formula:", {
                    currencyName: r()
                }), (() => {
                    var n = L(),
                        s = n.firstChild;
                    return c(s, () => e("Unlocked __currencyName__ = Wager/Bet Amount × 1% × unlock rate%", {
                        currencyName: r()
                    })), n
                })(), e("Example: If you wager/bet $1,000 and your current unlock rate is 20%, you will unlock $2 __currencyName__ (1,000 × 1% × 20%).", {
                    currencyName: r()
                }), e("The more you wager/bet, the more __currencyName__ you unlock!", {
                    currencyName: r()
                }), e("Keep playing to unlock and use your __currencyName__!", {
                    currencyName: r()
                }), t(g, {
                    i18nKey: "bonus.welecome.newtext.desc9",
                    get children() {
                        return ["You can check wagering contribution details", " ", (() => {
                            var n = W();
                            return n.$$click = () => E("/game/home/bonus/wager/percent/"), n
                        })(), " ", "."]
                    }
                })]
            }, {
                title: e("What is unlock rate%?"),
                answers: [e("Your unlock rate determines how quickly you can unlock your __currencyName__ bonus. As your VIP level increases, your unlock rate goes up. Here are the specific tiers:", {
                    currencyName: r()
                }), "·VIP 0–7: 20%", "·VIP 8–37: 21%", "·VIP 38–69: 22%", "·SVIP 1–15: 23%", "·SVIP 16+: 24%"]
            }, {
                title: e("How to claim __currencyName__?", {
                    currencyName: r()
                }),
                answers: [e("As you wager, your __currencyName__ treasure box will be filled with unlocked __currencyName__.", {
                    currencyName: r()
                }), e("You can claim the unlocked __currencyName__ in the Bonus page after 00:00 (UTC+0), and the bonus will expire in 24 hours if you don’t claim it when it’s claimable. So make sure to grab it before it's gone!", {
                    currencyName: r()
                }), e("That’s it! Your __currencyName__ is now immediately available to use!", {
                    currencyName: r()
                })]
            }, {
                title: e("Can __currencyName__ be exchanged to any other currency?", {
                    currencyName: r()
                }),
                answers: [t(g, {
                    get siteswap() {
                        return S()
                    },
                    get currencyName() {
                        return r()
                    },
                    i18nKey: "bonus.welecome.newtext.desc7",
                    get children() {
                        return ["Absolutely! You can swap ", G(), " with", (() => {
                            var n = q();
                            return n.$$click = () => h("/wallet/swap"), n
                        })(), "into other currencies at any time."]
                    }
                })]
            }, {
                title: e("What is special about __currencyName__?", {
                    currencyName: r()
                }),
                answers: [t(g, {
                    get currencyName() {
                        return r()
                    },
                    get currencyName2() {
                        return r()
                    },
                    i18nKey: "bonus.welecome.newtext.desc8",
                    get children() {
                        return ["You can enjoy up to 10% annualized rate of return when you store your", O(), " in", (() => {
                            var n = J();
                            return n.$$click = () => h("/wallet/vault"), n
                        })(), ". So enjoy collecting ", M(), "!"]
                    }
                })]
            }];
        return t(T, {
            get title() {
                return e("Rakeback Rules")
            },
            class: "!bg-layer2",
            get children() {
                var n = ee();
                return c(n, t(y, {
                    get when() {
                        return !H.isjb
                    },
                    get children() {
                        var s = Z(),
                            m = s.firstChild,
                            o = m.firstChild,
                            _ = o.nextSibling,
                            k = _.nextSibling,
                            i = k.nextSibling,
                            C = i.nextSibling,
                            A = C.nextSibling;
                        return c(m, t(y, {
                            get when() {
                                return d.isUsHost
                            },
                            get fallback() {
                                return " BCD"
                            },
                            get children() {
                                return " SC"
                            }
                        }), _), c(A, () => x.getCurrencySymbol("USDFIAT")), c(s, t(y, {
                            get when() {
                                return !d.isUsHost
                            },
                            get children() {
                                var l = X();
                                return c(l, t(Y, {
                                    href: "https://etherscan.io/address/0x13ad2d31925490b0e282d51ac1ae744f1da22c77",
                                    target: "_blank",
                                    get children() {
                                        return t(j, {
                                            get children() {
                                                var u = Q();
                                                return c(u, () => e("View Contract "), null), c(u, t(K, {
                                                    name: "Share",
                                                    class: "size-4 text-brand"
                                                }), null), u
                                            }
                                        })
                                    }
                                })), l
                            }
                        }), null), P(l => {
                            var u = `url(${z.darken?f.bcdRakebackRuleBanner:f.bcdRakebackRuleBanner_light})`,
                                w = D.coinIcon(d.isUsHost ? "SC" : "BCD");
                            return u !== l.e && ((l.e = u) != null ? s.style.setProperty("background-image", u) : s.style.removeProperty("background-image")), w !== l.t && U(i, "src", l.t = w), l
                        }, {
                            e: void 0,
                            t: void 0
                        }), s
                    }
                }), null), c(n, t(p, {
                    class: "space-y-4",
                    get defaultActiveKeys() {
                        return v.showRate ? ["1"] : void 0
                    },
                    get children() {
                        return t(N, {
                            each: R,
                            children: (s, m) => t(p.Item, {
                                class: "overflow-hidden rounded-xl",
                                get value() {
                                    return String(m())
                                },
                                get children() {
                                    return [t(p.ItemTrigger, {
                                        class: "rounded-b-none bg-layer4 py-3",
                                        get children() {
                                            var o = re();
                                            return c(o, () => s.title), o
                                        }
                                    }), t(p.ItemContent, {
                                        class: "rounded-b-xl bg-layer4 text-sm",
                                        get children() {
                                            var o = te();
                                            return c(o, t(N, {
                                                get each() {
                                                    return s.answers
                                                },
                                                children: (_, k) => (() => {
                                                    var i = ne();
                                                    return c(i, _), i
                                                })()
                                            })), o
                                        }
                                    })]
                                }
                            })
                        })
                    }
                }), null), n
            }
        })
    };
B(["click"]);
export {
    Ne as
    default, Ne as popupRakebackRule, fe as popupRakebackRule2
};