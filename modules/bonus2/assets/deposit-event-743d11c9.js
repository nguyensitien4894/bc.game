var u = (e, r, o) => new Promise((p, s) => {
    var a = t => {
            try {
                n(o.next(t))
            } catch (m) {
                s(m)
            }
        },
        i = t => {
            try {
                n(o.throw(t))
            } catch (m) {
                s(m)
            }
        },
        n = t => t.done ? p(t.value) : Promise.resolve(t.value).then(a, i);
    n((o = o.apply(e, r)).next())
});
import {
    F as l,
    ab as _,
    j as h,
    al as c,
    at as f,
    p as d
} from "./manifest-d92afe19.js";
import {
    c as g
} from "./web-46c35164.js";
import {
    b as E,
    t as P,
    l as v,
    r as D,
    a as S
} from "./solid-js-871c99e1.js";
import {
    D as C
} from "./index-d963c58c.js";
import "./http-696896a0.js";
const [R, T] = l(E(!1), {
    name: "home-popup-deposit-event"
}), L = () => {
    _(() => h.login).then(() => {
        Promise.all([c(() =>
            import ("./index-fe04da94.js").then(e => e.i), ["assets/index-fe04da94.js", "assets/web-46c35164.js", "assets/solid-js-871c99e1.js", "assets/index-d963c58c.js", "assets/manifest-d92afe19.js", "assets/http-696896a0.js", "assets/index-0a013ed3.js", "assets/TermWithData-92578748.js", "assets/i18n-fd9a94dd.js", "assets/utils-0702ff35.js", "assets/popup-game-limits-38371d44.js", "assets/index-feaa71f9.js", "assets/_arrayMap-2bcec0e7.js", "assets/_baseFor-371c5662.js", "assets/_MapCache-91cc8331.js", "assets/_baseGetTag-c2e287b9.js", "assets/isArray-79a0be9c.js", "assets/_baseIsEqual-7dac899d.js", "assets/groupBy-843aaa6e.js", "assets/_baseIteratee-a7d854cc.js", "assets/toString-1f7cb583.js", "assets/memoize-91f976fa.js", "assets/helpers-ece5dfb8.js", "assets/vip-5eda96e7.js", "assets/index-9f4ab8bd.js", "assets/baseService-102e5148.js", "assets/enums-fd45c1cf.js"]), c(() =>
            import ("./widget-entry-c7d9bd7a.js").then(e => e.w), ["assets/widget-entry-c7d9bd7a.js", "assets/web-46c35164.js", "assets/solid-js-871c99e1.js", "assets/index-fe04da94.js", "assets/index-d963c58c.js", "assets/manifest-d92afe19.js", "assets/http-696896a0.js", "assets/index-0a013ed3.js", "assets/TermWithData-92578748.js", "assets/i18n-fd9a94dd.js", "assets/utils-0702ff35.js", "assets/popup-game-limits-38371d44.js", "assets/index-feaa71f9.js", "assets/_arrayMap-2bcec0e7.js", "assets/_baseFor-371c5662.js", "assets/_MapCache-91cc8331.js", "assets/_baseGetTag-c2e287b9.js", "assets/isArray-79a0be9c.js", "assets/_baseIsEqual-7dac899d.js", "assets/groupBy-843aaa6e.js", "assets/_baseIteratee-a7d854cc.js", "assets/toString-1f7cb583.js", "assets/memoize-91f976fa.js", "assets/helpers-ece5dfb8.js", "assets/vip-5eda96e7.js", "assets/index-9f4ab8bd.js", "assets/baseService-102e5148.js", "assets/enums-fd45c1cf.js", "assets/index-03b88e03.js", "assets/index-9e8fcb6a.js", "assets/empty-placeholder-dad11c15.js", "assets/debounce-9b1358db.js", "assets/toNumber-67386818.js", "assets/last-862de5a8.js", "assets/_basePropertyOf-20a61b2b.js", "assets/index-950def67.js", "assets/_baseIndexOf-fe3207b1.js", "assets/_baseFindIndex-928665d4.js", "assets/noop-cb277961.js", "assets/router-73d3f837.js", "assets/countdown-91927513.js", "assets/index-a51223a0.js", "assets/rakeback-rule-fbe3987e.js", "assets/common-progress-bar-3191aef7.js"])]).then(o => u(void 0, [o], function*([e, r]) {
            P(() => {
                const [p] = C.useDepositProgress();
                v(D(() => !p.loading && e.depositActivitySystem.hasWidget("home-popup") && !R(), s => {
                    if (s) {
                        const a = () => g(r.default, {
                                target: "home-popup"
                            }),
                            i = setTimeout(() => {
                                f.add(() => {
                                    d.push(a, {
                                        onClose: () => {
                                            T(!0)
                                        }
                                    })
                                })
                            }, 1e3);
                        S(() => {
                            clearTimeout(i), d.pop(a)
                        })
                    }
                }))
            })
        }))
    })
};
export {
    L as
    default
};