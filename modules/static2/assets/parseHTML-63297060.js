import {
    c as t,
    i as S,
    t as h,
    e as g
} from "./web-2eabff95.js";
import {
    f as d,
    a as L,
    S as _,
    F as T
} from "./solid-js-ae9447d2.js";
import {
    m as O
} from "./memoize-561b08e2.js";
var N = h('<div class="flex flex-col gap-y-4">'),
    b = h('<div class="w-full h-5 flex justify-center items-center">');
const {
    app: v,
    Loading: y
} = globalThis._bc.fcsy, $ = O(() => d(() => new Promise(l => {
    v.emit("request-bonus-rules", i => {
        l(i)
    })
}))), p = l => {
    const [i] = $();
    return t(L, {
        get fallback() {
            return (() => {
                var o = b();
                return S(o, t(y, {})), o
            })()
        },
        get children() {
            var o = N();
            return S(o, t(_, {
                get when() {
                    return i()
                },
                children: r => {
                    const a = r();
                    return t(a, {
                        region: "global",
                        get termsName() {
                            return l.termName
                        }
                    })
                }
            })), o
        }
    })
};
var w = h("<div class=help-raw-html>"),
    C = h('<h2 class="text-sm font-semibold text-primary">');
const P = {
        "{{SLOT_NON_DEPOSIT_BONUS}}": () => t(p, {
            termName: "newbie.none"
        }),
        "{{SLOT_CASINO_BONUS_RULE}}": () => t(p, {
            termName: "newbie.casino"
        }),
        "{{SLOT_SPORTS_BONUS_RULE}}": () => t(p, {
            termName: "newbie.sport"
        })
    },
    k = l => {
        const i = () => {
                const r = /<section>([\s\S]*?)<\/section>/g;
                return l.match(r) || []
            },
            o = (r, a) => {
                const m = /{{SLOT_[^}]+}}/g,
                    e = r.split(m),
                    n = r.match(m) || [],
                    s = [],
                    f = c => () => (() => {
                        var u = w();
                        return u.innerHTML = c, u
                    })();
                for (let c = 0; c < e.length; c++)
                    if (s.push(f(e[c])), c < n.length) {
                        const u = n[c];
                        a[u] && s.push(a[u])
                    }
                return s
            };
        return i().map(r => {
            const m = new DOMParser().parseFromString(r, "text/html"),
                e = m.querySelector("section"),
                n = e == null ? void 0 : e.querySelector("h2");
            return n && (e == null || e.removeChild(n)), {
                title: n ? () => t(_, {
                    when: n,
                    get children() {
                        var s = C();
                        return g(() => s.innerHTML = n.innerHTML), s
                    }
                }) : null,
                sectionKey: e == null ? void 0 : e.id,
                content: () => t(T, {
                    get each() {
                        return o(m.body.innerHTML, P)
                    },
                    children: s => s()
                })
            }
        })
    };
export {
    k as p
};