import {
    i as c,
    c as T,
    e as $,
    s as A,
    t as l
} from "./web-46c35164.js";
import {
    a2 as x,
    M as u,
    p as D,
    t as f,
    a as g,
    s as w
} from "./manifest-d92afe19.js";
import {
    b
} from "./index-9f4ab8bd.js";
import {
    k as E
} from "./index-a51223a0.js";
import {
    t as r,
    T as k
} from "./i18n-fd9a94dd.js";
import {
    e as y
} from "./api-utils-1baf21e5.js";
var _ = l('<div class="flex justify-between text-center">'),
    v = l("<span class=text-brand>__amounttext__"),
    M = l('<div class="flex justify-between"><div class="flex flex-col items-center justify-center"><img class="h-12 w-16"></div><div class="ml-4 flex flex-col justify-around"><span class="font-extrabold text-primary"></span><p class="text-sm font-semibold text-secondary">');
const N = 7,
    W = 14,
    H = 21,
    j = 25,
    G = [r("SUN"), r("MON"), r("TUE"), r("WED"), r("THU"), r("FRI"), r("SAT")];

function Y(t, a, e) {
    return e ? "claimed" : t >= a ? "ready_to_claim" : "init"
}

function p(t = new Date) {
    const a = t.getTime() + t.getTimezoneOffset() * 6e4;
    return new Date(a + 36e5 * 9)
}

function B() {
    const t = p(new Date),
        a = new Date(t),
        e = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getDate() + 1, 0, 0, 0) - 36e5 * 9;
    return new Date(e)
}

function P(t) {
    return `${t.getFullYear()}-${t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1}-${t.getDate()<10?"0"+t.getDate():t.getDate()}`
}

function z(t = new Date(p())) {
    return {
        totalDayOfMonth: new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate(),
        monthFirstDayOfWeek: new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
        dayOfMonth: t.getDate() - 1
    }
}
const L = t => {
        const [a, {
            refetch: e
        }] = x(() => [`/activity/attendance/monthCalendar?date=${t}`], ([n]) => u().get(n), {
            initialValue: {
                calendar: [],
                continueDay: 0,
                totalDay: 0,
                totalMakeupCount: 0,
                unusedMakeupCount: 0,
                signRemainingAmount: 0
            }
        });
        return [a, e]
    },
    V = t => new Promise(a => {
        u().post("/activity/attendance/claim", {
            date: t
        }).then(({
            claim: e,
            amount: n,
            currencyName: o
        }) => {
            y(), a(!0), e ? (h(i(n), m(o)), D.pop()) : f(() => (() => {
                var s = _();
                return c(s, () => r("Claim failed")), s
            })(), {
                duration: 5
            })
        })
    }),
    X = t => new Promise(a => {
        u().post("/activity/attendance/makeup", {
            dateList: t
        }).then(({
            claim: e,
            amount: n,
            currencyName: o
        }) => {
            y(), a(!0), e ? (h(i(n), m(o)), D.pop()) : f(() => (() => {
                var s = _();
                return c(s, () => r("makeup failed")), s
            })(), {
                duration: 5
            })
        })
    }),
    h = (t, a) => {
        f(() => (() => {
            var e = M(),
                n = e.firstChild,
                o = n.firstChild,
                s = n.nextSibling,
                d = s.firstChild,
                C = d.nextSibling;
            return c(d, () => r("Bonus Claimed")), c(C, T(k, {
                i18nKey: "page.bonus.korea.checkin.claimtoast",
                amounttext: `${t} ${a}`,
                get children() {
                    return [v(), " has been credited to rakeback"]
                }
            })), $(() => A(o, "src", E.toast_coin)), e
        })(), {
            duration: 0
        })
    },
    S = () => {
        var a, e;
        const [t] = b.bonusDashboardResource();
        return (e = (a = t()) == null ? void 0 : a[0]) == null ? void 0 : e.attendanceBonus
    },
    i = t => t >= 1e6 ? (t / 1e6 * 100 | 0) / 100 + "M" : t >= 1e3 ? (t / 1e3 * 100 | 0) / 100 + "K" : String((t * 100 | 0) / 100),
    m = (t = "KRW") => t.replace("FIAT", ""),
    q = () => {
        const t = S(),
            a = m(t.first.currency),
            e = n => ({
                unit: a,
                amountStr: `${i(n.first)}-${i(n.second)}`
            });
        return {
            sevenDay: e(t.first._7dayRewardAmounts),
            fourteenDay: e(t.first._14dayRewardAmounts),
            twentyOneDay: e(t.first._21dayRewardAmounts),
            twentyFiveDay: e(t.first._25dayRewardAmounts),
            daily: e(t.first.calendarAmounts)
        }
    },
    J = (t, a) => {
        const {
            first: e,
            second: n
        } = t, o = s => a.endsWith("FIAT") ? `${g.getCurrencySymbol(a,w.lang)}${i(s)}` : `${i(s)} ${g.getAlias(a)}`;
        return e === n ? `${o(e)}` : `${o(e)}-${o(n)}`
    };
export {
    N as C, G as W, J as a, m as b, V as c, P as d, p as e, B as f, S as g, q as h, H as i, j, W as k, Y as l, L as m, z as n, i as o, X as p
};