import {
    c as i,
    b as l,
    d as y,
    i as p,
    t as C
} from "./web-46c35164.js";
import {
    j as u,
    c as F,
    e as m,
    a as g,
    w as b,
    D as A
} from "./manifest-d92afe19.js";
import {
    n as N,
    m as $,
    c as f,
    E as h,
    p as v
} from "./solid-js-871c99e1.js";
import {
    b as I
} from "./_baseGetTag-c2e287b9.js";
import {
    a as T
} from "./isArray-79a0be9c.js";
var U = "[object Boolean]";

function _(r) {
    return r === !0 || r === !1 || T(r) && I(r) == U
}
var x = C("<span>"),
    w = C("<img>");
const d = N(),
    o = () => {
        const r = v(d);
        if (!r) throw Error("Can not used CurrencyFormat outside of CurrencyFormat component");
        return r
    },
    c = r => {
        const e = $({
                currencyName: "USDFIAT"
            }, r),
            n = () => e.toCurrency ? _(e.toCurrency) ? u.setting.enableLocaleCurrency ? u.setting.localeCurrencyName : r.currencyName : e.toCurrency : e.currencyName;
        return i(d.Provider, {
            value: {
                currencyName: () => e.currencyName,
                toCurrency: n
            },
            get children() {
                return e.children
            }
        })
    },
    P = r => (() => {
        var e = x();
        return l(e, y(r, {
            get class() {
                return F("inline-flex items-center gap-x-1", r.class)
            }
        }), !1, !1), e
    })(),
    j = r => {
        const e = o(),
            n = () => b.coinIcon(r.forceToCurrency || e.toCurrency());
        return (() => {
            var t = w();
            return l(t, y(r, {
                get style() {
                    var a, s;
                    return {
                        display: "inline-block",
                        width: `${((a=r.size)!=null?a:20)*m.remScale}px`,
                        height: `${((s=r.size)!=null?s:20)*m.remScale}px`
                    }
                },
                get src() {
                    return n()
                }
            }), !1, !1), t
        })()
    },
    k = (r, e, n, t = 7) => g.printAnyCurrency(new A(r), e, t, n),
    B = r => {
        const e = o(),
            n = f(() => {
                const t = e.toCurrency();
                return k(r.amount, e.currencyName(), t, r.precision)
            });
        return i(h, {
            fallback: "--",
            get children() {
                return n()
            }
        })
    },
    D = r => {
        const e = o(),
            n = f(() => {
                const t = e.toCurrency();
                return g.getAlias(t)
            });
        return (() => {
            var t = x();
            return p(t, n), t
        })()
    };
c.AliasName = D;
c.Amount = B;
c.Icon = j;
c.Content = P;
export {
    c as C
};