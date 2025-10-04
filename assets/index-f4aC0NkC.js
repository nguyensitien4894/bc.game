import "./index-DxYPFwcM.js";
import {
    b as g,
    aA as T,
    o as A,
    k as l,
    X as k,
    v as L,
    F as R,
    x as d,
    D as U,
    _ as C,
    E as q,
    c as H,
    ae as W,
    h as z
} from "./vendor-CR7NILRE.js";
import {
    a as b,
    e as a,
    a5 as B,
    Q as F,
    B as x,
    q as $,
    K as j,
    u as S,
    p as G,
    i as D,
    d as m
} from "./common-jbtJucx3.js";
import {
    i as K
} from "./utils-BHthhcHa.js";
import {
    W as O,
    t as f
} from "./Application-CExkuTua.js";
const M = "/assets/web_push_ring-D9piBrDT.png";
var c = (e => (e.DEFAULT = "default", e.GRANTED = "granted", e.DENIED = "denied", e))(c || {}),
    Q = L('<div><img class="h-[7rem] sm:h-16"><h3 class="text-center text-base font-extrabold text-primary"></h3><p class="text-center font-semibold text-secondary"></p><div class="flex w-full gap-x-3 text-lg sm:text-sm">');
const P = "@@__internal__show_web_push_soft_prompt__@@",
    [w, E] = g(null);
b.on(P, e => {
    E(() => e)
});
const X = () => {
    const e = t => () => {
            w() ? .(t), E(() => null)
        },
        [r, n] = g(!1);
    if (!a.mobile) {
        const t = new MutationObserver(([o]) => {
            if (o.type === "childList" && T(o.target)) {
                const p = Array.from(o.target.children);
                n(p.some(u => u.classList.contains("toast-layer")))
            }
        });
        t.observe(document.querySelector(".root-layer"), {
            childList: !0
        }), A(() => {
            t.disconnect()
        })
    }
    const s = B(() => r() ? document.querySelector(".toast-layer") : null);
    return l(j, {
        get name() {
            return a.mobile ? "slideUp" : "slideRight"
        },
        get children() {
            return l(F, {
                priority: O,
                get children() {
                    return l(k, {
                        get when() {
                            return w()
                        },
                        get children() {
                            var t = Q(),
                                o = t.firstChild,
                                p = o.nextSibling,
                                u = p.nextSibling,
                                _ = u.nextSibling;
                            return R(o, "src", M), d(p, () => f("Enable Notifications and Never Miss a Bonus!")), d(u, () => f("Receive updates on exclusive promotions, bonus claims and more! ")), d(_, l(x, {
                                type: "brand",
                                class: "flex-grow",
                                get size() {
                                    return a.mobile ? "l" : "s"
                                },
                                onClick: () => {
                                    e(c.GRANTED)(), OneSignalDeferred.push(i => {
                                        i.Notifications.requestPermission()
                                    })
                                },
                                get children() {
                                    return f("Allow")
                                }
                            }), null), d(_, l(x, {
                                type: "second",
                                class: "flex-grow",
                                get size() {
                                    return a.mobile ? "l" : "s"
                                },
                                get onClick() {
                                    return e(c.DEFAULT)
                                },
                                get children() {
                                    return f("Later")
                                }
                            }), null), U(i => {
                                var N = {
                                        "background-image": "radial-gradient(73% 94% at 50% 30%, rgba(36, 238, 137, 0.20) 0%, transparent 100%)",
                                        "box-shadow": "0px 0px 12px 0px rgba(0, 0, 0, 0.40)",
                                        ...a.mobile ? {} : {
                                            top: 60 * a.remScale + (s.height ? ? 0) + "px"
                                        }
                                    },
                                    v = $("fixed bottom-0 right-0 z-1000 flex w-full flex-col items-center justify-center gap-y-2 rounded-xl border border-solid border-third bg-layer5 px-4 pb-10 pt-3 sm:bottom-auto sm:right-4 sm:w-[17.5rem] sm:pb-3");
                                return i.e = C(t, N, i.e), v !== i.t && q(t, i.t = v), i
                            }, {
                                e: void 0,
                                t: void 0
                            }), t
                        }
                    })
                }
            })
        }
    })
};
let h = null;
const Y = () => (h = h || new Promise(e => {
        b.emit(P, r => {
            e(r), h = null
        })
    }), h),
    J = "web_push_prompt_push";
setTimeout(() => {
    S.loadScript("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js")
}, 10 * 1e3);
const [V, y] = G(g({
    value: c.DEFAULT,
    timestamp: 0
}), {
    name: "__internal__soft_prompt_history"
}), I = D().post("/user/push/get-push-app-id").then(e => {
    if (e.appId) return new Promise(r => {
        OneSignalDeferred.push(async n => {
            await n.init({
                appId: e.appId,
                serviceWorkerPath: "push/onesignal/OneSignalSDKWorker.js",
                serviceWorkerParam: {
                    scope: "/push/onesignal/"
                },
                promptOptions: {
                    autoPrompt: !1
                }
            }), r(e.appId)
        })
    })
}), Z = e => D().post("/user/push/sync-sub-status", e);
OneSignalDeferred.push(async function(e) {
    await I && H(() => {
        W(() => l(X, {}), document.body);
        const n = () => {
            const s = e.User.PushSubscription.id ? ? void 0,
                t = !!e.User.PushSubscription.optedIn;
            s && Z({
                subscribe: t,
                subscriptionId: s
            }), s || e.User.PushSubscription.addEventListener("change", () => {
                n()
            })
        };
        z(s => (m.login ? e.login(String(m.userId)).then(() => {
            n()
        }) : s && e.logout(), m.login), m.login)
    })
});
b.on(J, async () => {
    OneSignalDeferred.push(async e => {
        await I;
        const r = () => {
                const s = Date.now(),
                    t = V().timestamp;
                return s - t > 1e3 * 60 * 60 * 24 * 7
            },
            n = () => e.Notifications.permissionNative === "default";
        if (console.log("Handle web_push_prompt_push", r(), n(), e.Notifications.permissionNative), e.Notifications.isPushSupported() && n() && r() && (!S.isIos() || K())) {
            const s = Date.now();
            y({
                timestamp: s,
                value: c.DEFAULT
            });
            const t = await Y();
            y({
                timestamp: s,
                value: t
            })
        }
    })
});