import {
    n as N,
    ak as _,
    a9 as y,
    h as b,
    N as z,
    at as C,
    k as s,
    a3 as H,
    X as B,
    v,
    x,
    a1 as R,
    b as A,
    o as M
} from "./vendor-CR7NILRE.js";
import {
    a as O,
    af as k,
    d,
    n as f,
    G as S,
    L as $,
    e as p,
    b as m,
    U as F,
    y as I,
    i as q,
    t as G,
    u as T,
    l as w
} from "./common-jbtJucx3.js";
import {
    h as L
} from "./Application-CExkuTua.js";
import "./index-DxYPFwcM.js";
var U = v('<div id=betby class="-mx-4 !my-0 min-h-[70vh] sm:mx-0">'),
    P = v('<div class="center -mt-4 h-[84vh] flex-auto sm:-mt-3">'),
    V = v("<div>");
const W = _(async function() {
        return []
    }),
    X = {
        pt: "pt-br",
        tl: "en-ph",
        "zh-CN": "zh",
        "zh-TW": "zh-Hant"
    };

function Z(e) {
    return w.isjb ? e ? "jb-game" : "jb-game-light" : w.onlySports ? e ? "bc-game-dark-classic" : "bc-game-light-classic" : e ? "bc-game-dark-tile" : "bc-game-light-tile"
}

function h(e) {
    const n = document.documentElement,
        t = window.getComputedStyle(n),
        a = parseFloat(t.fontSize);
    return Number((e * (a / 16)).toFixed(2))
}
let E = !1;
async function J(e) {
    E || (p.isDevHost ? await T.loadScript("https://ui.invisiblesport.com/bt-renderer.min.js") : await T.loadScript("https://bcgame.sptsportscdn.com/bt-renderer.min.js"), E = !0)
}
async function K(e, n, t, a, o, i, r, l) {
    if (await J(), t === "USDFIAT") return I.error("Invalid currency"), {
        jwtToken: "",
        lng: ""
    };
    if (t && a) {
        const {
            lang: g,
            jwtToken: c
        } = await q().post("/platform-sports/v14/login", {
            device: e,
            lang: n,
            currency: t,
            brandId: i,
            bonus: l
        });
        return r ? c : {
            jwtToken: c,
            lng: g
        }
    } else return {
        jwtToken: "",
        lng: ""
    }
}

function Q(e) {
    const [n] = y(), [t, a] = A(0), o = G(), i = p.mobile;
    let r;
    async function l() {
        return e.onTokenExpired(!0)
    }

    function g() {
        return a(u => u + 1)
    }
    b(() => {
        const u = n["bt-path"] || "/";
        r && r.updateOptions({
            url: u
        })
    });
    const c = document.getElementsByClassName("page-header")[0] ? .clientHeight || h(56),
        j = document.getElementsByClassName("tabbar")[0] ? .clientHeight || h(72);
    return b(() => {
        const u = {
            token: e.token,
            brand_id: L(n.brandId),
            onTokenExpired: l,
            themeName: Z(e.isDarken),
            lang: e.lng,
            target: document.getElementById("betby"),
            stickyTop: i ? h(56) : 60,
            betslipZIndex: 1,
            onLogin: function() {
                o("/login/signin")
            },
            onRegister: function() {
                o("/login/regist")
            },
            onRecharge: function() {
                o("/deposit")
            },
            betSlipOffsetTop: c,
            betSlipOffsetBottom: i ? j : 0,
            betSlipOffsetRight: i ? 0 : 70,
            onSessionRefresh: g
        };
        e.token || delete u.token, r && r.kill();
        var D = new BTRenderer().initialize(u);
        r = D
    }), M(() => {
        r && r.kill(), r = void 0
    }), U()
}

function Y() {
    const [e] = y(), n = () => p.mobile ? 1 : 2, t = () => d.login, a = p.isDevHost, o = () => d.setting.currencyName, i = () => X[m.lang] ? ? m.lang, r = () => d.setting.currencyBonusType === "sport", l = c => K(n(), i(), o(), t(), a, L(e.brandId), c, r()), [g] = N(() => o() + t() + i() + r() + m.darken, () => l(!1));
    return s(B, {
        get when() {
            return g()
        },
        children: c => s(Q, {
            get token() {
                return c() ? .jwtToken
            },
            get isDarken() {
                return m.darken
            },
            get lng() {
                return c().lng || i()
            },
            isDev: a,
            get device() {
                return n()
            },
            get currency() {
                return o()
            },
            get isLogin() {
                return t()
            },
            onTokenExpired: l
        })
    })
}

function oe() {
    const [e] = N(W, {
        initialValue: []
    }), [n] = y();
    return b(() => {
        O.emit("change_chatroom", 14)
    }), z(() => {
        if (n.bonus) {
            const t = k[d.setting.currencyName];
            if (t && t.groupAmount.sports.gt(0)) f("setting", "currencyBonusType", "sport");
            else {
                const a = C(k, o => o.groupAmount.sports.gt(0));
                a && (f("setting", "currencyName", a.currencyName), f("setting", "currencyBonusType", "sport"))
            }
        }
    }), s(R, {
        get fallback() {
            return (() => {
                var t = P();
                return x(t, s($, {})), t
            })()
        },
        get children() {
            return s(H, {
                fallback: t => s(S, {
                    class: "h-[84vh]",
                    get children() {
                        return s(ee, {
                            err: t
                        })
                    }
                }),
                get children() {
                    return s(B, {
                        get when() {
                            return e().every(t => t.type !== "Sports")
                        },
                        get fallback() {
                            return s(S, {
                                class: "h-[84vh]"
                            })
                        },
                        get children() {
                            return s(Y, {})
                        }
                    })
                }
            })
        }
    })
}

function ee(e) {
    return e.err.code === F.ErrorCode.SELF_GAMBLING_LIMITS && I(e.err), (() => {
        var n = V();
        return x(n, () => e.err.message), n
    })()
}
export {
    oe as
    default
};