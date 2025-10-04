import {
    i as r,
    c as l,
    m as S,
    s as w,
    t as o,
    e as k
} from "./web-46c35164.js";
import {
    c as C,
    i as T,
    S as y,
    F as I
} from "./solid-js-871c99e1.js";
import {
    e as b,
    a7 as v,
    m as R,
    l as g
} from "./manifest-d92afe19.js";
import {
    t
} from "./i18n-fd9a94dd.js";
import {
    f as _,
    F as f
} from "./feature-gating-8d37864b.js";
const W = "/modules/bonus2/assets/avatar-example-8b236820.png";
var V = o('<span class="text-lg font-extrabold text-primary sm:text-xl">'),
    q = o('<h2 class="px-3 py-2">'),
    P = o('<div class="flex flex-col gap-y-4"><div class="flex flex-col gap-y-4 rounded-xl bg-layer4 py-3"><div class="flex flex-col gap-1">'),
    E = o("<div class=pt-2>"),
    c = o("<p>"),
    F = o("<p>:"),
    H = o('<ul class="list-inside list-decimal"><li></li><li></li><li></li><li></li><li></li><li>'),
    L = o('<p class="mt-2 text-primary">:'),
    B = o('<div class="mt-2 rounded-lg bg-layer5 px-2 py-2"><div class="flex items-center gap-x-2 text-primary"><img class=size-10><span></span></div><div class="ml-12 flex flex-col gap-y-2 rounded-md bg-layer3 p-4 text-sm font-semibold text-primary"><p class=""></p><div class=text-brand><div class=item>@Jachk: 888TRX</div><div class=item>@Blrr: 888TRX</div><div class=item>@Pokiuutt: 888TRX</div><div class=item>@Liisdt: 888TRX</div><div class=item>@Yoiohu: 888TRX</div><div class=item>@Loidr: 888TRX</div></div><div>'),
    A = o('<div class="flex flex-col gap-y-3"><p></p><p>'),
    N = o('<div class="flex flex-col gap-y-3"><p></p><p></p><div><p></p><p></p><ul class="list-inside list-decimal"><li></li><li></li></ul></div><p>'),
    U = o("<ul class=popup-rules><li></li><li></li><li></li><li>");
const G = () => {
        const e = C(z),
            i = T(() => (() => {
                var a = V();
                return r(a, () => t("Frequently Asked Questions")), a
            })());
        return (() => {
            var a = P(),
                s = a.firstChild,
                u = s.firstChild;
            return r(a, l(y, {
                get when() {
                    return !b.mobile
                },
                get children() {
                    return i()
                }
            }), s), r(s, l(y, {
                get when() {
                    return b.mobile
                },
                get children() {
                    var n = q();
                    return r(n, i), n
                }
            }), u), r(u, l(v, {
                get children() {
                    return l(I, {
                        get each() {
                            return S(() => !!R.isUsHost)() ? e().filter(n => n.usHostShow) : e()
                        },
                        children: n => l(v.Item, {
                            get value() {
                                return n.question
                            },
                            get children() {
                                return [l(v.ItemTrigger, {
                                    class: "text-base font-semibold",
                                    get children() {
                                        return n.question
                                    }
                                }), l(v.ItemContent, {
                                    class: "text-base font-semibold text-secondary",
                                    get children() {
                                        var d = E();
                                        return r(d, () => n.answer), d
                                    }
                                })]
                            }
                        })
                    })
                }
            })), a
        })()
    },
    z = () => [{
        question: t("What is ‘Level-up Bonus’?"),
        usHostShow: !0,
        answer: (() => {
            var e = c();
            return r(e, () => t("Showcasing our appreciation for players, we reward them with a Level Up bonus upon reaching the next level. Once players reach Level 38 and higher, we have boosted the level-up bonus to be slightly higher than the regular level-up bonus available at lower levels.")), e
        })()
    }, {
        question: t("What is ‘Raining’?"),
        usHostShow: !1,
        answer: [(() => {
            var e = c();
            return r(e, () => t("Engage in chat conversations throughout the day to receive free coins as part of the Constant Chat Rains bonus.")), e
        })(), (() => {
            var e = F(),
                i = e.firstChild;
            return r(e, () => t("Rules"), i), e
        })(), (() => {
            var e = H(),
                i = e.firstChild,
                a = i.nextSibling,
                s = a.nextSibling,
                u = s.nextSibling,
                n = u.nextSibling,
                d = n.nextSibling;
            return r(i, () => t("Six players level higher than 4 will be randomly selected and rewarded in chat room every 6 hours.")), r(a, () => t("Bonus will be different according to the currencies.")), r(s, () => t("Players will be randomly selected by Rain algorithm. The players who send more messages have the higher probability to get rewarded.")), r(u, () => t("But even if the user has sent only one message, there is still a chance that they can receive the rain bonus.")), r(n, () => t("Rain information will be sent to the chat room by robots.")), r(d, () => t("Having more than one account per user is prohibited. You will get the lower possibility of receiving rain and __ENV_SITE__ will suspend your withdrawals for a manual review in the fraud prevention system which may take up to 24 hrs. We do not guarantee withdraw processing and may ban account with your balance in it. If you have already had more than one account please self-surrender by contacting Live Support.")), e
        })(), (() => {
            var e = L(),
                i = e.firstChild;
            return r(e, () => t("For example"), i), e
        })(), (() => {
            var e = B(),
                i = e.firstChild,
                a = i.firstChild,
                s = a.nextSibling,
                u = i.nextSibling,
                n = u.firstChild,
                d = n.nextSibling,
                p = d.nextSibling;
            return w(a, "src", W), r(s, () => b.host), r(n, () => t("Raining, the people who received the rain:")), r(p, () => t("Congratulations!")), e
        })()]
    }, {
        question: t("What is ‘Coin Drop’?"),
        usHostShow: !1,
        answer: (() => {
            var e = A(),
                i = e.firstChild,
                a = i.nextSibling;
            return r(i, () => t("If you haven’t reached VIP Level 7 and unlocked ‘Coin Drop’, you need to be active and quick in order to grab the coins when it happens in Public Chat. The rewards go to the fastest participants.")), r(a, () => t("Once you have reached VIP Level 7, you may create your own ‘Coin Drop’ and customize the amount and quantity of recipients before you share your good luck and generosity with other players in Public Chat.")), e
        })()
    }, {
        question: t("What are ‘Tips’?"),
        usHostShow: !1,
        answer: (() => {
            var e = c();
            return r(e, () => t("You may tip other players once you reach VIP Level 8. Tipping is how you show appreciation and share your generosity with other players in __ENV_HOST__. You can decide how much you want to send to the other players.")), e
        })()
    }, {
        question: t("What is ‘Recharge’?"),
        usHostShow: !0,
        answer: (() => {
            var e = N(),
                i = e.firstChild,
                a = i.nextSibling,
                s = a.nextSibling,
                u = s.firstChild,
                n = u.nextSibling,
                d = n.nextSibling,
                p = d.firstChild,
                $ = p.nextSibling,
                x = s.nextSibling;
            return r(i, () => t("‘Recharge’ is a unique and exciting feature that rewards players with split bonuses (Recharges) throughout the week based on their gaming activities. Players can set different intervals to claim these bonuses, providing them with an added incentive to keep playing.")), r(a, () => t("In basic terms, ‘Recharge’ means that players receive split bonuses (Recharges) throughout the week at different intervals set by the player themselves. This feature not only keeps players engaged but also adds an extra layer of excitement to the gaming experience.")), r(u, () => t("Eligibility for Recharge Activation")), r(n, () => t("To be eligible for Recharge Activation, players must meet the following criteria:")), r(p, () => t("Have a VIP level of 22 and above")), r($, () => t("Have wagered a minimum of $1,000 in the past 7 days (24/7)")), r(x, () => t("Once a player meets these requirements, they can request Recharge Activation. Upon activation, their Recharge will be redeemable for the next 7 days.")), e
        })()
    }, {
        question: t("What is ‘Weekly Cashback’?"),
        usHostShow: !0,
        answer: (() => {
            var e = c();
            return r(e, () => t("The ‘Weekly Cashback’ is an exclusive perk on our platform designed for VIP 22+ players. As the name suggests, this bonus is issued once a week. It is an automatic bonus paid out every Friday to players at VIP level 22 and above. The size of the bonus depends on how much a player has wagered during the past week with a minimum wager requirement of $1000 between the period Friday-Thursday. The calculation for the weekly cashback remains the same, and the only difference is that it may not align with your Recharge renewals.")), e
        })()
    }, {
        question: t("What is ‘Sports Weekly Bonus’?"),
        usHostShow: !1,
        answer: [(() => {
            var e = c();
            return r(e, () => t("In addition to our existing Weekly Bonus for VIP level 22+ players, we are now introducing the __ENV_SITE__ Sports Club weekly bonus as an additional perk for sports bettors. The new Sport bonus is specific only to Sport Wager and is calculated based on the player's wagering amount from Saturday to Friday, and distributed automatically every Saturday. With the introduction of the __ENV_SITE__ Sports Club bonuses, our VIP level 22+ players can now enjoy even more rewards and a thrilling sports betting experience!")), e
        })(), (() => {
            var e = c();
            return r(e, () => t("__ENV_SITE__ Sports Club offers a range of weekend bonuses based on your weekly wager amount in our Sportsbook.")), e
        })(), (() => {
            var e = U(),
                i = e.firstChild,
                a = i.nextSibling,
                s = a.nextSibling,
                u = s.nextSibling;
            return r(i, () => t("Wager $500 or more from Saturday to Friday and receive a $5 Weekend Bonus!")), r(a, () => t("Wager $2,500 or more and receive a $30 Weekend Bonus!")), r(s, () => t("Wager $5,000 or more and receive a $70 Weekend Bonus!")), r(u, () => t("Wager $10,000 or more and receive a $150 Weekend Bonus!")), e
        })(), (() => {
            var e = c();
            return r(e, () => t("These bonuses apply to all markets and odds in our Sportsbook, giving you more opportunities to win big!")), e
        })(), (() => {
            var e = c();
            return r(e, () => t("The weekly wager is calculated from the previous Saturday 00:00hrs to Friday 23:59hrs (UTC).")), e
        })()]
    }];
var X = o('<div class="bg-from-special relative mt-10 flex h-56 flex-shrink-0 rounded-xl bg-gradient-to-b from-layer4 to-layer4"><div class="-mt-12 flex w-full flex-col items-center"><div class="relative h-[8.5rem] flex-shrink-0"><img class=h-full alt=img></div><div class="relative text-center"><div class="text-base font-extrabold text-primary sm:text-lg"></div><div class="mt-2 text-xs text-secondary sm:text-base">'),
    D = o('<div class="grid grid-cols-2 gap-x-3 sm:grid-cols-3 sm:gap-y-4">'),
    h = o("<div>");
const m = e => (() => {
        var i = X(),
            a = i.firstChild,
            s = a.firstChild,
            u = s.firstChild,
            n = s.nextSibling,
            d = n.firstChild,
            p = d.nextSibling;
        return r(d, () => e.title), r(p, () => e.desc), k(() => w(u, "src", e.icon)), i
    })(),
    J = () => (() => {
        var e = D();
        return r(e, l(m, {
            get title() {
                return [(() => {
                    var i = h();
                    return r(i, () => t("No-Fee")), i
                })(), (() => {
                    var i = h();
                    return r(i, () => t("Withdrawal")), i
                })()]
            },
            get desc() {
                return t("Reach VIP 38 for no-fee cryptocurrency withdrawals.")
            },
            get icon() {
                return g("/bonus/vip/vip-card-img/card-img-withdraw.png")()
            }
        }), null), r(e, l(y, {
            get when() {
                return _.isEnabled(f.LUCKY_SPIN)
            },
            get children() {
                return l(m, {
                    get title() {
                        return [(() => {
                            var i = h();
                            return r(i, () => t("Rewarding")), i
                        })(), (() => {
                            var i = h();
                            return r(i, () => t("Lucky Spin")), i
                        })()]
                    },
                    get desc() {
                        return t("Spin the wheel & receive bigger prizes as you level up.")
                    },
                    get icon() {
                        return g("/bonus/vip/vip-card-img/card-img-spin.png")()
                    }
                })
            }
        }), null), r(e, l(m, {
            get title() {
                return [(() => {
                    var i = h();
                    return r(i, () => t("Dedicated")), i
                })(), (() => {
                    var i = h();
                    return r(i, () => t("VIP Host")), i
                })()]
            },
            get desc() {
                return t("Selected VIPs get personalized attention from a dedicated host.")
            },
            get icon() {
                return g("/bonus/vip/vip-card-img/card-img-host.png")()
            }
        }), null), r(e, l(m, {
            get title() {
                return [(() => {
                    var i = h();
                    return r(i, () => t("Amazing")), i
                })(), (() => {
                    var i = h();
                    return r(i, () => t("Level Up Bonus")), i
                })()]
            },
            get desc() {
                return t("Unlock multiple surprise rewards as you level up.")
            },
            get icon() {
                return g("/bonus/vip/vip-card-img/card-img-chat.png")()
            }
        }), null), r(e, l(y, {
            get when() {
                return _.isEnabled(f.TIPS_RAIN)
            },
            get children() {
                return l(m, {
                    get title() {
                        return t("Fun Tips &  Raining")
                    },
                    get desc() {
                        return t("Tip to show appreciation or try Coin Drops to win rewards.")
                    },
                    get icon() {
                        return g("/bonus/vip/vip-card-img/card-img-bonus.png")()
                    }
                })
            }
        }), null), r(e, l(m, {
            get title() {
                return t("Exclusive Cashback")
            },
            get desc() {
                return t("Earn incredible cashback rewards every week & month.")
            },
            get icon() {
                return g("/bonus/vip/vip-card-img/card-img-cashback.png")()
            }
        }), null), e
    })();
export {
    J as V, G as a
};