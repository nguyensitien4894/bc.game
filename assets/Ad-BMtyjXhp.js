import {
    v as f,
    F as c,
    x as a,
    k as e,
    D as x,
    P as T,
    b as u,
    N as $,
    d as I,
    X as P,
    a2 as z,
    I as v,
    o as A
} from "./vendor-CR7NILRE.js";
import {
    v as C,
    l as w,
    e as p,
    p as R,
    a as B,
    ab as V,
    X as y,
    ac as D,
    K as E,
    Q as M,
    B as _
} from "./common-jbtJucx3.js";
import {
    t as d,
    T as Q,
    M as O
} from "./Application-CExkuTua.js";
import "./index-DxYPFwcM.js";
const j = "/assets/open-guide-CmBQEUSQ.png",
    K = "/assets/shield-CBfdtNAP.png",
    L = "/assets/shield_w-C25Od6mI.png";
var N = f('<div class="fixed left-0 top-0 z-1000 h-screen w-screen overflow-hidden bg-alw_dark/90"><div class="relative mx-auto mt-10 w-11/12 pl-4"><img alt="open guide"><div class="absolute bottom-0 mt-4 flex h-24 w-full items-center p-4 pr-12"><div class=text-center>Click the top-right corner, select “<span class=text-brand>open in browser</span>”,and claim your free spin bonus!</div></div></div><div class="flex justify-center pt-6">'),
    U = f('<img class="h-auto w-4.5 pr-1.5"alt>'),
    X = f('<div class="fixed bottom-18 left-0 z-100 mb-sb flex min-h-18 w-full max-w-[640px] items-start gap-x-4 border-b border-solid border-third bg-layer1 p-4 sm:bottom-8 sm:left-8 sm:rounded-lg sm:border-none lg:w-fit"><div class="flex items-center gap-x-2"><div class="flex shrink-0"><img alt class="h-auto w-7"></div><div class="flex-grow leading-tight"><p class="text-wrap text-sm leading-5 lg:w-96"></p><div class="flex gap-2 pt-2"></div></div></div><div class="flex items-start">'),
    Y = f('<div><div class=w-full><img class="mx-auto w-56"alt><div class="-mt-10 px-5 pb-5 text-center text-secondary"></div><div class="flex flex-col gap-2"><div class="flex w-full cursor-pointer items-center gap-2 rounded-lg border border-white_alpha5 bg-third p-3 hover:bg-layer4"><div class=w-6><img class=w-full alt></div><div></div></div><div class=h-2>');

function F() {
    const [n, s] = u(!0);
    return v(() => v(() => !!n())() ? (() => {
        var t = N(),
            i = t.firstChild,
            l = i.firstChild,
            r = i.nextSibling;
        return c(l, "src", j), a(r, e(_, {
            onClick: () => {
                s(!1)
            },
            class: "px-6",
            size: "s",
            type: "brand",
            children: "Close"
        })), t
    })() : null)
}
const G = n => {
    const s = () => {
        window.open(`https://bcgame.com?verify_link=${window.location.hostname}`)
    };
    let t;
    $(() => {
        t = setTimeout(() => {
            n.onClose()
        }, 3e4)
    }), A(() => {
        t && clearTimeout(t)
    });
    const i = C("/logo/logo_small.png");
    return (() => {
        var l = X(),
            r = l.firstChild,
            o = r.firstChild,
            m = o.firstChild,
            h = o.nextSibling,
            g = h.firstChild,
            S = g.nextSibling,
            k = r.nextSibling;
        return c(m, "src", K), a(g, () => d("This site is an official BC Game mirror! You can verify with options below:")), a(S, e(_, {
            class: "px-6 text-xs",
            size: "xs",
            type: "brand",
            onClick: s,
            get children() {
                return [(() => {
                    var b = U();
                    return x(() => c(b, "src", i())), b
                })(), v(() => d("Verify by __domain__", {
                    domain: "bcgame.com"
                }))]
            }
        })), a(k, e(_, {
            get onClick() {
                return n.onClose
            },
            class: "!p-0",
            size: "xs",
            get children() {
                return e(y, {
                    name: "Close",
                    class: "size-5 text-secondary"
                })
            }
        })), l
    })()
};

function H() {
    const n = s => {
        window.open(`https://bcgame.com?verify_link=${window.location.hostname}`)
    };
    return (() => {
        var s = Y(),
            t = s.firstChild,
            i = t.firstChild,
            l = i.nextSibling,
            r = l.nextSibling,
            o = r.firstChild,
            m = o.firstChild,
            h = m.firstChild,
            g = m.nextSibling;
        return c(i, "src", L), a(l, () => d("Verify if this site is our official site using the options below")), o.$$click = () => n(), a(g, () => d("Verify by __domain__", {
            domain: "bcgame.com"
        })), a(o, e(y, {
            name: "Arrow",
            class: "ml-auto size-5 rotate-180 text-secondary"
        }), null), x(() => c(h, "src", C("/logo/logo_small.png")())), s
    })()
}

function ee() {
    const n = T(),
        s = w.is87 || p.host === "bc.game" || p.isAPP || p.isDev || w.isjb,
        t = Q(),
        [i, l] = u(!1),
        [r, o] = R(u(s), {
            name: "ignore_mirrors_check",
            storage: localStorage
        });
    return B.on("verify_site", () => {
        V.push(() => e(D, {
            get title() {
                return d("Verify This Site")
            },
            get children() {
                return e(H, {})
            }
        }))
    }), $(() => {
        r() || setTimeout(() => {
            l(!0)
        }, 2e3)
    }), [t && e(F, {}), e(z, {
        get children() {
            return e(E, {
                get name() {
                    return p.mobile ? "slideUp" : "slideLeft"
                },
                get children() {
                    return e(M, {
                        priority: O,
                        get children() {
                            return e(P, {
                                get when() {
                                    return !r() && i() && n.pathname === "/"
                                },
                                get children() {
                                    return e(G, {
                                        onClose: () => {
                                            o(!0)
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })]
}
I(["click"]);
export {
    H as VerifyThisSite, ee as
    default
};