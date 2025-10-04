import {
    c as t,
    i as a,
    e as b,
    a as v,
    t as s,
    s as w,
    m as _
} from "./web-46c35164.js";
import {
    c as n,
    T as $,
    j as z,
    G as c,
    B as u,
    z as S,
    e as x,
    l as k,
    f as C
} from "./manifest-d92afe19.js";
import {
    E as V,
    S as B
} from "./solid-js-871c99e1.js";
import {
    E
} from "./error-fallback-860caa77.js";
import {
    t as i
} from "./i18n-fd9a94dd.js";
import {
    V as P,
    a as j
} from "./index-ab1dfbc1.js";
import "./baseService-102e5148.js";
import "./_baseGetTag-c2e287b9.js";
import "./_baseFor-371c5662.js";
import "./_MapCache-91cc8331.js";
import "./isArray-79a0be9c.js";
import "./feature-gating-8d37864b.js";
import "./tools-398e478b.js";
import "./index-9f4ab8bd.js";
import "./http-696896a0.js";
import "./index-a51223a0.js";
import "./api-utils-1baf21e5.js";
import "./helpers-ece5dfb8.js";
import "./utils-0702ff35.js";
import "./vip-5eda96e7.js";
import "./enums-fd45c1cf.js";
import "./cancel-bonus-b00319b6.js";
import "./noop-cb277961.js";
import "./currency-format-c1ee851b.js";
import "./animate-number-04f5b3b8.js";
import "./last-862de5a8.js";
import "./countdown-91927513.js";
import "./index-feaa71f9.js";
import "./index-a140eea6.js";
var A = s('<div class="mt-6 flex w-full items-center gap-x-2">'),
    F = s('<div><img class="absolute -bottom-8 -z-10 sm:-top-24 sm:right-0 sm:size-[33rem]"><div class="relative z-20 pt-4 sm:pt-0"><div class="text-4xl font-extrabold uppercase leading-tight text-primary sm:flex sm:gap-x-2"><div></div><div class=text-primary></div></div><div class="mt-3 max-w-100 text-sm font-semibold text-primary sm:w-[571px] sm:text-secondary">'),
    N = s("<div>");
const T = ["linear-gradient(to bottom, rgba(255, 130, 15, 0.5) 30%,transparent 100%)", "linear-gradient(12deg, transparent 17%, rgba(255, 130, 15, 0.4) 82%), linear-gradient(334deg, transparent 30%, rgba(255, 161, 20, 0.5) 67%)", "linear-gradient(to bottom, rgb(var(--special)) 30%,transparent 100%)", "linear-gradient(12deg, transparent 17%, rgba(255, 130, 15, 0.4) 82%), linear-gradient(334deg, transparent 30%, rgba(255, 161, 20, 0.5) 67%)"],
    q = () => (() => {
        var e = F(),
            o = e.firstChild,
            f = o.nextSibling,
            m = f.firstChild,
            p = m.firstChild,
            h = p.nextSibling,
            y = m.nextSibling;
        return a(p, () => i("exclusive")), a(h, () => i("vip benefits")), a(y, () => i("Join our VIP Club now and get ready to be showered with gifts, giveaways, and amazing features. Experience the thrill of higher cash back and exclusive rewards that are sure to leave you amazed.")), a(e, t($, {
            get when() {
                return !z.login
            },
            get fallback() {
                return t(c, {
                    href: "/",
                    get children() {
                        return t(u, {
                            get class() {
                                return n("vip-join-button mt-6 w-full text-base font-extrabold sm:max-w-64")
                            },
                            type: "brand",
                            get children() {
                                return i("Play Now")
                            }
                        })
                    }
                })
            },
            get children() {
                var r = A();
                return a(r, t(c, {
                    href: "/login/regist",
                    class: "flex-grow",
                    get children() {
                        return t(u, {
                            get class() {
                                return n("vip-join-button w-full text-base font-extrabold capitalize sm:max-w-64")
                            },
                            type: "brand",
                            get children() {
                                return i("Sign up")
                            }
                        })
                    }
                })), r
            }
        }), null), b(r => {
            var g = n("relative z-0 -mx-4 overflow-hidden bg-layer2 px-4 pt-sh sm:mx-0 sm:rounded-xl sm:bg-layer4 sm:px-12 sm:py-11"),
                l = T[+S.isjb << 1 | +x.mobile],
                d = k("/bonus/vip/vip-benefit/vip-benefit-hero.png")();
            return g !== r.e && v(e, r.e = g), l !== r.t && ((r.t = l) != null ? e.style.setProperty("background-image", l) : e.style.removeProperty("background-image")), d !== r.a && w(o, "src", r.a = d), r
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), e
    })(),
    D = e => t(B, {
        get when() {
            return x.mobile
        },
        get fallback() {
            return _(() => e.children)
        },
        get children() {
            return t(C, {
                class: "vip-dialog",
                get children() {
                    return e.children
                }
            })
        }
    }),
    ue = () => t(D, {
        get children() {
            var e = N();
            return a(e, t(V, {
                fallback: E,
                get children() {
                    return t(q, {})
                }
            }), null), a(e, t(P, {}), null), a(e, t(j, {}), null), b(() => v(e, n("flex flex-col gap-y-4 bg-layer2 px-4 text-primary sm:gap-y-6 sm:px-0"))), e
        }
    });
export {
    ue as
    default
};