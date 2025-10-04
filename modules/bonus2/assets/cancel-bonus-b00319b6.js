var b = (n, o, t) => new Promise((m, c) => {
    var r = u => {
            try {
                s(t.next(u))
            } catch (d) {
                c(d)
            }
        },
        e = u => {
            try {
                s(t.throw(u))
            } catch (d) {
                c(d)
            }
        },
        s = u => u.done ? m(u.value) : Promise.resolve(u.value).then(r, e);
    s((t = t.apply(n, o)).next())
});
import {
    c as g,
    i as _,
    t as w
} from "./web-46c35164.js";
import {
    p as y,
    P as h,
    B as A,
    _ as f,
    a as i,
    D as a
} from "./manifest-d92afe19.js";
import {
    F as C
} from "./solid-js-871c99e1.js";
import {
    t as l
} from "./i18n-fd9a94dd.js";
import {
    h as p
} from "./http-696896a0.js";
import {
    n as N
} from "./noop-cb277961.js";
var B = w('<div class="flex flex-col gap-y-4 font-semibold text-secondary"><p class=text-center>'),
    x = w('<div class="mt-9 flex w-full gap-x-2">'),
    R = w("<p class=text-center>");
const F = n => {
        var c;
        const o = (c = n.cb) != null ? c : N,
            t = () => b(void 0, null, function*() {
                const r = [];
                if (n.amountChangeLogId || n.taskId) {
                    const e = yield p.post("/balance-controller/wager/task/bonus-cancel-amount/", {
                        amountChangeLogId: n.amountChangeLogId,
                        taskId: n.taskId
                    }), u = f[e.currencyName].bonusAmount;
                    if (e.taskType === 3 ? (e.bonusSpentRatio || e.generalAddRatio) && r.push(l("Canceling this reward will adjust your balance based on completed wagering progress."), l("You've spent __spentPercentage__ (__spentAmount__) bonus balance, so __remainPercentage__  (__remainAmount__) of your deposit balance will be remain in your deposit balance. ", {
                            spentAmount: i.printCurrency(new a(e.bonusSpentAmount), e.currencyName, {
                                target: e.currencyName
                            }),
                            spentPercentage: new a(e.bonusSpentRatio).mul(100).toFixed(2, a.ROUND_DOWN) + "%",
                            remainAmount: i.printCurrency(new a(e.generalAddAmount), e.currencyName, {
                                target: e.currencyName
                            }),
                            remainPercentage: new a(e.generalAddRatio).mul(100).toFixed(2, a.ROUND_DOWN) + "%"
                        })) : e.taskType === 11 && r.push(l("Canceling this reward will adjust your balance based on the wager requirements you’ve completed."), l("You've complete __wagerCompletedAmount__ (__generalAddRatio__) wager requirement, so __generalAddAmount__ (__generalAddRatio__) of your deposit balance will be remain in your deposit balance.", {
                            wagerCompletedAmount: i.printCurrency(new a(e.wagerCompletedAmount), e.currencyName, {
                                target: e.currencyName
                            }),
                            generalAddRatio: new a(e.generalAddRatio).mul(100).toFixed(2, a.ROUND_DOWN) + "%",
                            generalAddAmount: i.printCurrency(new a(e.generalAddAmount), e.currencyName, {
                                target: e.currencyName
                            })
                        })), r.length === 0) {
                        const d = u.lessThan(e.bonusAmount) ? u : e.bonusAmount;
                        return r.push(l("__bonusAmount__ balance will be lost and you will not be able to claim this bonus again. Your bonus balance will __bonusBalanceRemain__ after removing this bonus.", {
                            bonusAmount: i.printCurrency(new a(d), e.currencyName, {
                                target: e.currencyName
                            }),
                            bonusBalanceRemain: i.printCurrency(u.sub(new a(d)), e.currencyName, {
                                target: e.currencyName
                            })
                        })), r
                    }
                    return r
                } else if (n.cancelAmount) {
                    const s = f[n.currencyName].bonusAmount;
                    r.push(l("__bonusAmount__ balance will be lost and you will not be able to claim this bonus again. Your bonus balance will __bonusBalanceRemain__ after removing this bonus.", {
                        bonusAmount: i.printCurrency(new a(n.cancelAmount), n.currencyName, {
                            target: n.currencyName
                        }),
                        bonusBalanceRemain: i.printCurrency(s.sub(new a(n.cancelAmount)), n.currencyName, {
                            target: n.currencyName
                        })
                    }))
                } else r.push(l("Are you sure you want to cancel this bonus?"));
                return r
            }),
            m = new Promise(r => b(void 0, null, function*() {
                const e = yield t();
                y.push(() => g(v, {
                    texts: e,
                    onConfirmed: s => (r(s), m.then(o))
                }))
            }));
        return m
    },
    v = n => g(h, {
        type: "center",
        class: "!w-[28rem]",
        get title() {
            return l("Cancel This Bonus")
        },
        get children() {
            return [(() => {
                var o = B(),
                    t = o.firstChild;
                return _(t, () => n.texts[0]), _(o, g(C, {
                    get each() {
                        return n.texts.slice(1)
                    },
                    children: m => (() => {
                        var c = R();
                        return _(c, m), c
                    })()
                }), null), o
            })(), (() => {
                var o = x();
                return _(o, g(A, {
                    type: "second",
                    class: "flex-grow",
                    onClick: () => {
                        var t;
                        return y.pop(), (t = n.onConfirmed) == null ? void 0 : t.call(n, !1)
                    },
                    get children() {
                        return l("Keep Bonus")
                    }
                }), null), _(o, g(A, {
                    class: "flex-grow",
                    type: "brand",
                    onClick: () => {
                        var t;
                        return y.pop(), (t = n.onConfirmed) == null ? void 0 : t.call(n, !0)
                    },
                    get children() {
                        return l("Cancel Bonus")
                    }
                }), null), o
            })()]
        }
    });
export {
    F as
    default, F as popupCancelBonus
};