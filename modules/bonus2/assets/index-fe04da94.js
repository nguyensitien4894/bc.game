import {
    c as S
} from "./web-46c35164.js";
import {
    b as l,
    t as v,
    l as T,
    F as P
} from "./solid-js-871c99e1.js";
import {
    D as b
} from "./index-d963c58c.js";
import {
    popupBonusTerms as f
} from "./index-0a013ed3.js";
import {
    i as B
} from "./toString-1f7cb583.js";
import {
    b as x
} from "./_baseIteratee-a7d854cc.js";
import {
    g as E
} from "./groupBy-843aaa6e.js";

function O(i, e) {
    return i > e
}

function W(i, e, r) {
    for (var t = -1, s = i.length; ++t < s;) {
        var n = i[t],
            o = e(n);
        if (o != null && (a === void 0 ? o === o && !B(o) : r(o, a))) var a = o,
            d = n
    }
    return d
}

function q(i, e) {
    return i && i.length ? W(i, x(e), O) : void 0
}
class D {
    constructor(e) {
        this.uiWidgetProviders = l([]);
        const [r, t] = l(e);
        this.set = t, this.state = r, v(() => {
            const [s] = b.useDepositProgress();
            T(() => {
                s() && this.derivedFromProgressDTO(s())
            })
        })
    }
    derivedFromProgressDTO(e) {
        var m, p;
        const {
            progressList: r,
            depositBonusType: t,
            expiredTime: s,
            startTime: n,
            richUser: o = !1
        } = e, a = q(r.filter(c => c.done), "seq"), d = E(r, "seq"), u = ((m = a == null ? void 0 : a.seq) != null ? m : 0) + 1, g = c => {
            switch (t) {
                case "SPECIAL":
                    return;
                case "COMMON-NEWBIE":
                case "VN-NEWBIE":
                    {
                        const h = r.some(y => y.selectedBonusType === c);
                        return f({
                            type: t,
                            bonusType: h && c ? c : r[0].selectedBonusType
                        })
                    }
                default:
                    return f({
                        type: t
                    })
            }
        };
        this.set({
            rawBonusList: r,
            requestTerms: g,
            seq: u,
            groupBySeq: d,
            type: t,
            currenSeqBonusList: (p = d[u]) != null ? p : [],
            activityStartTime: n,
            richUser: o
        })
    }
    registerUIWidget(e) {
        const [r, t] = this.uiWidgetProviders;
        t(s => s.indexOf(e) >= 0 ? s : [...s, e])
    }
    hasWidget(e) {
        if (!this.state()) return !1;
        const [r] = this.uiWidgetProviders;
        return r().some(t => t.target === e && t.apply(this.state()))
    }
    renderUIWidgets(e) {
        if (!this.state()) return [];
        const [r] = this.uiWidgetProviders, t = r().filter(s => s.target === e && s.apply(this.state()));
        try {
            const s = this;
            return S(P, {
                each: t,
                children: n => n.render(s.state())
            })
        } catch (s) {
            return console.error(s), []
        }
    }
}
const I = new D(null),
    A = Object.freeze(Object.defineProperty({
        __proto__: null,
        depositActivitySystem: I
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    I as d, A as i, q as m
};