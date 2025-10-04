import {
    v as p,
    x as r,
    k as n,
    D as $,
    F as f,
    m as C,
    G as y,
    P as I,
    b as h,
    o as P,
    X as S,
    I as A,
    a2 as z
} from "./vendor-CR7NILRE.js";
import {
    v as k,
    X as T,
    B as b,
    e as g,
    u as v,
    ac as R,
    ab as D,
    p as _,
    K as E,
    Q as L
} from "./common-jbtJucx3.js";
import {
    t as m,
    P as O
} from "./Application-CExkuTua.js";
import {
    c as j
} from "./createSteps-mVg-3AYL.js";
import {
    i as F
} from "./utils-BHthhcHa.js";
import "./index-DxYPFwcM.js";
var G = p("<span class=ml-1>"),
    B = p('<div class="left-0 flex w-full items-center gap-x-4 border-b border-solid p-4 fixed bottom-18 z-100 mb-sb border-second bg-layer1"><div class="flex items-center gap-x-2"><div class="flex items-center justify-center rounded-md p-1 size-10 shrink-0 bg-[#23EE881A]"><img alt class=size-7></div><div class="leading-tight flex-grow"><h4 class="break-words text-sm font-extrabold text-primary"><span class=uppercase></span> </h4><p class="text-xs text-secondary text-balance"></p></div></div><div class="flex flex-grow justify-end">');
const H = o => {
        const c = k("/logo/logo_small.png");
        return (() => {
            var t = B(),
                s = t.firstChild,
                l = s.firstChild,
                e = l.firstChild,
                a = l.nextSibling,
                i = a.firstChild,
                d = i.firstChild;
            d.nextSibling;
            var u = i.nextSibling,
                w = s.nextSibling;
            return r(t, n(b, {
                get onClick() {
                    return o.onClose
                },
                class: "!p-0",
                size: "xs",
                get children() {
                    return n(T, {
                        name: "Close",
                        class: "size-5 text-secondary"
                    })
                }
            }), s), r(d, () => g.licenseHost), r(i, () => m("Application"), null), r(u, () => m("Unlock Fun with Exclusive Features")), r(w, n(b, {
                class: "w-24 border-solid font-extrabold border-2 border-third",
                size: "m",
                get onClick() {
                    return o.onDownload
                },
                get children() {
                    var x = G();
                    return r(x, () => m("Download")), x
                }
            })), $(() => f(e, "src", c())), t
        })()
    },
    Q = "/assets/guide-BWa8xjQ7.gif",
    M = "/assets/pwa-CuOdReJG.mp4";
var N = p('<ul class="flex flex-col gap-y-4">'),
    U = p('<div class="h-64 overflow-hidden mt-6"><video class="size-full rounded-3xl"playsinline autoplay controls muted loop><source type=video/mp4><img class="size-full rounded-3xl">'),
    W = p('<li class="flex gap-x-3 leading-tight"><div class="flex items-center justify-center rounded-full bg-brand size-5 flex-shrink-0"></div><div class="flex flex-col gap-y-2"><h4 class=text-sm></h4><p class="text-secondary text-xs">');
const X = () => {
        const o = C(() => v.isIos() ? "iOS" : "Android"),
            c = j(v.isIos() ? "iOS" : "android");
        return n(R, {
            get title() {
                return `${o()} ${m("Instructions")}`
            },
            get children() {
                return [(() => {
                    var t = N();
                    return r(t, n(y, {
                        get each() {
                            return c()
                        },
                        children: (s, l) => (() => {
                            var e = W(),
                                a = e.firstChild,
                                i = a.nextSibling,
                                d = i.firstChild,
                                u = d.nextSibling;
                            return r(a, () => l() + 1), r(d, () => s.guideTitle), r(u, () => s.guideDesc), e
                        })()
                    })), t
                })(), (() => {
                    var t = U(),
                        s = t.firstChild,
                        l = s.firstChild,
                        e = l.nextSibling;
                    return f(l, "src", M), f(e, "src", Q), t
                })()]
            }
        })
    },
    [J, K] = _(h(0), {
        name: "pwa-prompt-times"
    }),
    [V, Y] = _(h(!1), {
        name: "accepted-install"
    }),
    ne = () => {
        const o = I(),
            c = () => !(g.isAPP || window.is_webview) && !F() && J() < 3 && !V() && g.mobile && o.pathname === "/",
            t = async () => {
                D.push(() => n(X, {}))
            },
            [s, l] = h({
                handler: t
            });
        if ("onbeforeinstallprompt" in window) {
            const e = a => {
                a.preventDefault();
                const i = a;
                l({
                    handler: async () => {
                        await i.prompt(), (await i.userChoice).outcome === "accepted" && (Y(!0), l(null))
                    }
                })
            };
            window.addEventListener("beforeinstallprompt", e), P(() => {
                window.removeEventListener("beforeinstallprompt", e)
            })
        }
        return n(z, {
            get children() {
                return n(E, {
                    name: "slideUp",
                    get children() {
                        return n(L, {
                            onRender: () => K(e => e + 1),
                            priority: O,
                            get children() {
                                return n(S, {
                                    get when() {
                                        return A(() => !!c())() && s()
                                    },
                                    children: e => n(H, {
                                        get onDownload() {
                                            return s().handler
                                        },
                                        onClose: () => l(null)
                                    })
                                })
                            }
                        })
                    }
                })
            }
        })
    };
export {
    ne as
    default
};