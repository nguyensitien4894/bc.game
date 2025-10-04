import {
    b as l,
    k as t,
    a2 as c,
    v as u,
    J as f,
    W as s,
    o as h,
    F as m,
    g,
    X as p
} from "./vendor-CR7NILRE.js";
import {
    p as d,
    a5 as y,
    K as w,
    Q as S,
    W as b,
    l as C,
    h as E
} from "./common-jbtJucx3.js";
const _ = "/assets/email-gift-DjUbesJh.png";
var x = u('<div class="h-12 cursor-pointer transition-all"><img class=h-full>');
const R = () => {
    const [a, i] = d(l(!1), {
        name: "show-gift"
    });
    return t(p, {
        get when() {
            return a() && !C.isesportsbr && !E.isUsHost
        },
        children: k => {
            const o = y(() => document.querySelector(".chat-notice"));
            return t(c, {
                ref: e => {
                    e.className = "fixed flex flex-col bottom-20 sm:bottom-32 right-2 z-100 gap-y-3", g(() => e.style.marginRight = o.width + "px")
                },
                get children() {
                    return t(w, {
                        name: "fadeRight",
                        get children() {
                            return t(S, {
                                get priority() {
                                    return -Number.MAX_SAFE_INTEGER
                                },
                                get children() {
                                    return t(b, {
                                        get href() {
                                            return "/promotion/fa094df0f19a5f7"
                                        },
                                        onClick: () => i(!1),
                                        get children() {
                                            var e = x(),
                                                n = e.firstChild;
                                            return f(r => {
                                                s.fromTo(r, {
                                                    scale: 1
                                                }, {
                                                    scale: 1.1,
                                                    duration: .5,
                                                    ease: "power2.inOut",
                                                    yoyo: !0,
                                                    repeat: -1
                                                }), h(() => {
                                                    s.killTweensOf(r)
                                                })
                                            }, e), e.style.setProperty("direction", "rtl"), m(n, "src", _), e
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
};
export {
    R as
    default
};