var C = (u, r, o) => new Promise((m, d) => {
    var b = t => {
            try {
                a(o.next(t))
            } catch (y) {
                d(y)
            }
        },
        e = t => {
            try {
                a(o.throw(t))
            } catch (y) {
                d(y)
            }
        },
        a = t => t.done ? m(t.value) : Promise.resolve(t.value).then(b, e);
    a((o = o.apply(u, r)).next())
});
import {
    r as L,
    c as l,
    i as _,
    e as Y,
    t as T
} from "./web-46c35164.js";
import {
    b as p,
    I as W,
    a as c,
    D as $,
    t as s,
    l as O,
    e as E,
    ar as j,
    u as U,
    p as x,
    P,
    a3 as n,
    G as F,
    as as z,
    j as M,
    at as A,
    ab as G
} from "./manifest-d92afe19.js";
import {
    u as H,
    a as K
} from "./router-73d3f837.js";
import {
    y as R,
    A as B,
    s as D,
    c as Q
} from "./solid-js-871c99e1.js";
import {
    t as i,
    T as V
} from "./i18n-fd9a94dd.js";
import {
    D as k
} from "./index-d963c58c.js";
import {
    B as v,
    R as h
} from "./index-ad06cb13.js";
import {
    r as S
} from "./index-a140eea6.js";
import {
    e as N
} from "./api-utils-1baf21e5.js";
import {
    C as q
} from "./index-950def67.js";
import {
    h as J
} from "./http-696896a0.js";
import {
    b as f
} from "./index-9f4ab8bd.js";
import "./animate-number-04f5b3b8.js";
import "./last-862de5a8.js";
import "./index-a51223a0.js";
import "./baseService-102e5148.js";
import "./_baseGetTag-c2e287b9.js";
import "./_baseFor-371c5662.js";
import "./_MapCache-91cc8331.js";
import "./isArray-79a0be9c.js";
import "./helpers-ece5dfb8.js";
import "./utils-0702ff35.js";
import "./vip-5eda96e7.js";
import "./enums-fd45c1cf.js";
import "./cancel-bonus-b00319b6.js";
import "./noop-cb277961.js";
import "./currency-format-c1ee851b.js";
import "./countdown-91927513.js";
import "./index-feaa71f9.js";
var X = T('<div class="border-offset-[-1px] relative inline-flex h-80 w-64 flex-col items-center justify-end gap-1 rounded-md border-[rgba(255,255,255,0.05)] px-4 pb-4 pt-24"><h3 class="text-center text-lg font-semibold"></h3><div class="shadow-[text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] flex w-full justify-center rounded-[12px] py-1"><span class="text-2xl font-extrabold text-[#FBD765]"></span></div><div class="py-1 text-sm"> <!>x wager to unlock');
let g;
const Z = () => g || (g = document.createElement("div"), g.style.setProperty("position", "fixed"), g.style.setProperty("z-index", E.mobile ? "10000" : "101"), g.style.setProperty("top", "3.8rem"), g.style.setProperty("right", "1rem"), document.body.appendChild(g), g);

function ee(u) {
    const r = R();
    let o = null,
        m = !1;
    const d = () => {
        o == null || o(), o = null, m = !1
    };
    return p.on("close-loseback-bonuse", () => {
        d()
    }), {
        render: () => {
            m || B(r, () => {
                d(), o = L(() => l(te, {
                    bonusInfo: u,
                    onClose: d
                }), Z()), m = !0
            })
        }
    }
}

function te(u) {
    return (() => {
        var r = X(),
            o = r.firstChild,
            m = o.nextSibling,
            d = m.firstChild,
            b = m.nextSibling,
            e = b.firstChild,
            a = e.nextSibling;
        return a.nextSibling, r.style.setProperty("background-color", "rgba(41, 41, 41, 0.8)"), r.style.setProperty("background-size", "80% auto,100% auto"), r.style.setProperty("background-repeat", "no-repeat"), r.style.setProperty("background-position", "center -1rem"), r.style.setProperty("outline", "1px var(--Navigation-MobileButtonA5, rgba(255, 255, 255, 0.05)) solid;"), r.style.setProperty("backdrop-filter", "blur(20px)"), _(r, l(W, {
            onClick: () => {
                u.onClose(), f.refetchResource(f.bonusDashboardResource.name)
            },
            class: "absolute right-2 top-2 size-5 cursor-pointer text-secondary",
            name: "Close"
        }), o), _(o, () => i("Surprise Cash! Luck’s on Your Side!")), m.style.setProperty("background", "var(--Alpha-bg-alpha20_black, rgba(0, 0, 0, 0.20))"), _(d, () => c.printCurrency(new $(u.bonusInfo.amount), u.bonusInfo.currency)), _(b, () => u.bonusInfo.wagerTimes, a), _(r, l(q, {
            onClick: () => J.post(`activity/reward/receive/${u.bonusInfo.rewardId}/`).then(t => {
                t != null && t.claimAmount && (t != null && t.currencyName) && (s(`${i("You’ve successfully claimed")} ${c.printCurrency(new $(t.claimAmount),t.currencyName)}`, {
                    duration: 3
                }), f.refetchResource(f.bonusDashboardResource.name), u.onClose())
            }).catch(s),
            type: "brand",
            get children() {
                return i("Claim Now")
            }
        }), null), Y(t => (t = `url(${O("/bonus/bonus/bonuses-page/bonus-loseback-card.png")()}),radial-gradient(ellipse at center, rgba(208, 148, 80, 0.5) 0%, rgba(208, 148, 80, 0) 100%)`) != null ? r.style.setProperty("background-image", t) : r.style.removeProperty("background-image")), r
    })()
}
var re = T('<div class="flex gap-x-1"><p>');
const Be = () => {
    const u = j(),
        r = B(R(), U),
        o = H();
    p.on("register-bonus-10bcd", () => {
        x.push(() => l(P, {
            type: "center",
            class: "popup-full !w-100",
            get children() {
                return l(v, {
                    get rewardType() {
                        return h.Money
                    },
                    amount: "10",
                    welcome: !0,
                    currency: "BCD",
                    locked: !1,
                    isDubai: !0
                })
            }
        }))
    });
    const [m, d] = K();
    n("regist-invited-present-success", e => {
        const a = e.presentAmounts;
        if (a) {
            const [t, y] = Object.entries(a)[0];
            console.log("handlePromo", e), A.add(() => new Promise(w => C(void 0, null, function*() {
                yield x.push(() => {
                    const I = Q(() => {
                        switch (e.rewardType) {
                            case h.FreeBets:
                                return l(v, {
                                    get rewardType() {
                                        return h.FreeBets
                                    },
                                    stringAmount: y,
                                    currencyName: t
                                });
                            case h.LuckySpin:
                                return l(v, {
                                    get rewardType() {
                                        return h.LuckySpin
                                    },
                                    amount: y
                                });
                            default:
                                return l(v, {
                                    get rewardType() {
                                        return e.rewardType
                                    },
                                    get amount() {
                                        return y.toString()
                                    },
                                    currency: t,
                                    locked: !1,
                                    get kycLevel() {
                                        return e.kycLevel || ""
                                    },
                                    get kycLevelName() {
                                        return e.kycLevelName || ""
                                    }
                                })
                        }
                    });
                    return l(P, {
                        type: "center",
                        class: "popup-full !w-100",
                        get children() {
                            return I()
                        }
                    })
                }), w("")
            })))
        }
    }), n("telegram-subscription-task-status", () => {
        N()
    }), n("recharge-bonus-notice", e => {
        D(() => {
            k.useDepositProgress()[1].refetch(), k.useCurrentDepositItem()[1].refetch(), S.refetchResource(S.rakebackBonusHistoryResource.name)
        }), p.emit("web_push_prompt_push"), s(() => (() => {
            var a = re(),
                t = a.firstChild;
            return _(t, l(V, {
                get amount() {
                    return e.amount
                },
                get currencyName() {
                    return c.getAlias(e.currencyName)
                },
                get currencyNameTwo() {
                    return c.getAlias(e.currencyName)
                },
                i18nKey: "Your Deposit Bonus of __amount__ __currencyName__ has been credited to your __currencyNameTwo__ Unlock.",
                get children() {
                    return ["Your Deposit Bonus of __amount__ __currencyName__ has been credited to your", l(F, {
                        onClick: () => {
                            setTimeout(() => {
                                d({
                                    highlight: void 0
                                })
                            }, 3e3)
                        },
                        href: "/bonus?highlight=rakeback",
                        class: "ml-1 font-semibold text-brand underline",
                        children: "__currencyNameTwo__ Unlock."
                    })]
                }
            })), a
        })(), {
            duration: 0,
            type: "recharge-bonus-notice"
        })
    }), n("bcpoker-text", e => {
        s(e.msg || "", {
            duration: 0
        })
    }), n("user-reward", e => {
        N()
    }), n("user-present-success", e => {
        switch (e.presentType) {
            case "tip":
                s(i("Wow! You received __amount__ tip from __userName__", {
                    amount: `${e.amount} ${c.getAlias(e.currencyName)}`,
                    userName: e.userName
                }), {
                    duration: 5
                });
                break;
            case "rain":
                s(i("Wow! You received __amount__ rain from __userName__", {
                    amount: `${e.amount} ${c.getAlias(e.currencyName)}`,
                    userName: e.userName
                }), {
                    duration: 5
                });
                break;
            default:
                p.emit("get-spin-rain-or-tip"), s(i("Wow you got __amount__ spin from Coco", {
                    amount: e.amount
                }), {
                    duration: 0,
                    onClick: () => r("/spin")
                });
                break
        }
    }), n("regist-invited-present-claimed", e => {
        const a = e.presentAmounts,
            [{
                name: t,
                amount: y
            }] = Object.keys(a).map(w => ({
                name: w,
                amount: a[w]
            }));
        s(`${y} ${t} ${i("has been sent to your balance")}`)
    }), n("recharge-success", e => {
        if (e.status === 1) s(i("Deposit is in progress"), {
            duration: 5
        });
        else {
            p.emit("sensorsTrack", {
                event: "deposit_recieved"
            }), setTimeout(() => {
                N(), D(() => {
                    k.useDepositProgress()[1].refetch(), k.useCurrentDepositItem()[1].refetch(), f.getWeeklyDepositReward()[1].refetch(), z(e.currencyName, "display", !0)
                })
            }, 1e3);
            const a = {
                sales: c.amount2usd(new $(e.amount || 0), e.currencyName).toString(),
                orderid: String(e.id),
                userId: String(M.userId),
                originData: e
            };
            e.depositCount == 1 ? p.emit("track_ftd_success", a) : e.depositCount >= 2 && p.emit("track_reccuring_deposit", a), p.emit("web_push_prompt_push"), p.emit("track_deposit_success", a), s(`${i("Congrats! Your deposit has been completed!")} ${e.amount} ${c.getAlias(e.currencyName)}`, {
                duration: 5,
                onClick: () => r(`/wallet/deposit-detail?orderId=${e.id}`)
            }), p.emit("da_track", "deposit_sended")
        }
    }), n("withdraw-progress", () => {
        s(i("Withdrawal is in progress."), {
            duration: 5
        })
    }), n("withdraw-success", e => {
        s.success(i("You have successfully withdrawn __amount__.", {
            amount: `${e.amount} ${c.getAlias(e.currencyName)}`
        }), {
            duration: 5
        })
    }), n("withdraw-fail", e => {
        s.error(i("Withdrawal failed. __amount__ has been returned to your balance.", {
            amount: `${e.amount} ${c.getAlias(e.currencyName)}`
        }), {
            duration: 0,
            onClick: () => r(`/wallet/transaction?type=withdraw&assets=${e.currencyName}`)
        })
    }), n("change-amount-success", e => {
        s(`You found ${e.amount} ${c.getAlias(e.currencyName)} under of Coco's Red throne`, {
            duration: 3,
            onClick: () => r(`/wallet/transaction?type=bill&assets=${e.currencyName}`)
        })
    }), n("use-code-success", e => {
        s(i("You have got __amount__ from __ENV_COCO__'s cave.", {
            amount: `${e.amount} ${c.getAlias(e.currencyName)}`
        }), {
            duration: 3,
            onClick: () => r(`/wallet/transaction?type=bill&assets=${e.currencyName}`)
        })
    }), n("regist-present-success", () => {
        A.add(() => u(() => r("/spin")))
    }), n("cashback-first-deposit-notice", e => {
        const {
            render: a
        } = ee(e);
        o.pathname.includes("/game/") ? G(() => !o.pathname.includes("/game/")).then(() => a()) : a()
    })
};
export {
    Be as
    default, Be as toastRegister
};