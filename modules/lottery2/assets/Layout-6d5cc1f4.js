import {
    e as t,
    _ as o
} from "./manifest-4a9d96af.js";
import {
    o as l,
    i as s,
    c as e,
    S as i,
    a as m,
    P as c,
    m as u,
    t as p,
    l as _
} from "./solid-js-26bd2957.js";
import {
    c as d
} from "./lottery-69be0c1b.js";
var f = p("<div class=min-h-screen>");
const a = _(() => o(() =>
    import ("./BetSlip-4b46443a.js"), ["assets/BetSlip-4b46443a.js", "assets/solid-js-26bd2957.js", "assets/manifest-4a9d96af.js", "assets/store-635b8129.js", "assets/store-2ed2b91e.js", "assets/lottery-69be0c1b.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/BetSlipContent-77af6997.js", "assets/BetAmountSelect-7ad7f83e.js", "assets/Lottery-f4a4381b.js", "assets/router-bf1daf6a.js", "assets/IndiaStateKaralaBall-5bb90bf4.js", "assets/i18n-84cf21fb.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/LocalIcon-a94161d6.js", "assets/jb-countries-1e3f9cbb.js", "assets/createSettle-ffee26b2.js", "assets/toString-9093e562.js", "assets/indiaState-7fce4127.js"]));

function S(n) {
    return l(() => {
        t.mobile || d()
    }), (() => {
        var r = f();
        return s(r, e(i, {
            get children() {
                return [e(m, {
                    get when() {
                        return t.mobile
                    },
                    get fallback() {
                        return e(c, {
                            get children() {
                                return e(a, {})
                            }
                        })
                    },
                    get children() {
                        return e(a, {})
                    }
                }), u(() => n.children)]
            }
        })), r
    })()
}
export {
    S as
    default
};