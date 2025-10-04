var h = (e, r, t) => new Promise((s, a) => {
    var u = n => {
            try {
                o(t.next(n))
            } catch (m) {
                a(m)
            }
        },
        l = n => {
            try {
                o(t.throw(n))
            } catch (m) {
                a(m)
            }
        },
        o = n => n.done ? s(n.value) : Promise.resolve(n.value).then(u, l);
    o((t = t.apply(e, r)).next())
});
import {
    c as f,
    u as v,
    e as _,
    s as C,
    i as c,
    t as w
} from "./web-46c35164.js";
import {
    g as p,
    P as A,
    a as R,
    D as T,
    B,
    u as U,
    au as I,
    j as y,
    ab as $,
    p as d,
    b,
    as as O,
    t as P
} from "./manifest-d92afe19.js";
import {
    o as D,
    a as F,
    b as z,
    g as M,
    s as j,
    t as E,
    y as G
} from "./solid-js-871c99e1.js";
import {
    c as H
} from "./createHasNewUserSpin-7b900825.js";
import {
    b as k
} from "./index-9f4ab8bd.js";
import {
    t as i
} from "./i18n-fd9a94dd.js";
import {
    h as J
} from "./http-696896a0.js";
import {
    r as L,
    S as W
} from "./api-utils-1baf21e5.js";
import {
    s as S
} from "./index-a51223a0.js";
var Y = w('<img class="absolute -left-10 -top-24 -z-10 w-[31rem] max-w-max opacity-75"alt="">'),
    Z = w('<div class="-m-4 h-[21rem]"><div class="absolute inset-0 z-0 flex h-[21rem] min-w-[24rem] flex-col items-center justify-center gap-y-2 rounded-lg bg-layer2 px-3 py-6"><img class="absolute -top-10 left-0 -z-10 size-[26rem]"><h3 class="text-2xl font-extrabold text-alw_white"></h3><p class="text-base font-semibold text-secondary"></p><div class="my-8 flex flex-col items-center"><p class="bg-gradient-to-b from-[#FFA600] to-[#FFE47B] bg-clip-text pr-1 text-5xl font-extrabold italic text-transparent"></p></div><div class="w-full px-6">');
const N = e => {
    let r;
    return D(() => {
        p.fromTo(r, {
            scale: .8
        }, {
            scale: 1.1,
            ease: "back.inOut",
            duration: .8
        })
    }), f(A, {
        class: "popup-full",
        get children() {
            return [(() => {
                var t = Y();
                return v(s => {
                    p.to(s, {
                        rotateZ: 360,
                        duration: 4,
                        ease: "none",
                        repeat: 1 / 0
                    }), F(() => {
                        p.killTweensOf(s)
                    })
                }, t), _(() => C(t, "src", S.gold_bg)), t
            })(), (() => {
                var t = Z(),
                    s = t.firstChild,
                    a = s.firstChild,
                    u = a.nextSibling,
                    l = u.nextSibling,
                    o = l.nextSibling,
                    n = o.firstChild,
                    m = o.nextSibling;
                s.style.setProperty("background-image", "radial-gradient(rgba(242,187,47,.2),#191A1B00 80%)");
                var x = r;
                return typeof x == "function" ? v(x, a) : r = a, c(u, () => e.title), c(l, () => e.desc), n.style.setProperty("filter", "drop-shadow(2px 2px 0 #C55B1A)"), c(n, () => R.printCurrency(new T(e.amount), e.currencyName, {
                    target: e.currencyName,
                    hasAlias: !0
                })), c(m, f(B, {
                    get onClick() {
                        return e.onButtonClick
                    },
                    type: "brand",
                    class: "w-full",
                    get children() {
                        return e.actionText
                    }
                })), _(() => C(a, "src", S.gold)), t
            })()]
        }
    })
};
var q = w('<p class="flex flex-col gap-y-1 font-semibold"><span>');
const [g, K] = z(null), [Q] = M(() => g() ? JSON.stringify(g()) : !1, () => h(void 0, null, function*() {
    var r, t;
    const e = yield J.post("/activity/reward/freeMoneyReward/", {
        currencyName: (r = g()) == null ? void 0 : r.currency,
        bonusAmount: (t = g()) == null ? void 0 : t.amount
    });
    return (e.state === 0 || e.rewardId) && (yield L(e.rewardId), yield j(() => {
        k.refetchResource(k.checkUserClaimedFreeMoney.name)
    })), e
})), V = e => {
    const r = U(),
        t = I(() => V(e));
    E(() => {
        if (y.login) {
            const {
                disabledAutoSpin: s
            } = H();
            K({
                currency: e.currency,
                amount: e.amount
            }), s(), $(() => Q()).then(a => {
                a.state === 0 && a.rewardId ? d.push(() => f(N, {
                    get amount() {
                        return e.amount
                    },
                    get currencyName() {
                        return e.currency
                    },
                    get title() {
                        return i("Rewards Claimed")
                    },
                    get desc() {
                        return i("Use this bonus wallet to play games now!")
                    },
                    get actionText() {
                        return i("Play")
                    },
                    onButtonClick: () => {
                        b.emit("sensorsTrack", {
                            event: "free_play_click"
                        }), d.pop(), b.emit("open-free-gamelist"), e.currency && O(e.currency, "display", !0)
                    }
                })) : P(() => (() => {
                    var l = q(),
                        o = l.firstChild;
                    return c(l, () => i("Oh no! It appears somebody has already opened an account on your device/IP."), o), c(o, () => i("Unfortunately, you are not eligible to receive the welcome reward, but don’t worry there are more rewards to come!")), l
                })(), {
                    duration: 0
                })
            })
        } else d.push(() => f(N, {
            get amount() {
                return e.amount
            },
            get title() {
                return i("CONGRATULATIONS")
            },
            get desc() {
                return i("You’ve got free money to bet on our games!")
            },
            get actionText() {
                return i("Claim Rewards")
            },
            onButtonClick: () => {
                b.emit("sensorsTrack", {
                    event: "spin_reward_click",
                    currency: e.currency
                }), W.spinCollect(), d.pop(), y.login || r("/login/regist"), $(() => y.login === !0).then(t)
            },
            get currencyName() {
                return e.currency
            }
        }))
    }, G())
};
export {
    V as p
};