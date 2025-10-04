var X = Object.defineProperty,
    Y = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var ee = Object.prototype.hasOwnProperty,
    te = Object.prototype.propertyIsEnumerable;
var V = (e, i, a) => i in e ? X(e, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[i] = a,
    p = (e, i) => {
        for (var a in i || (i = {})) ee.call(i, a) && V(e, a, i[a]);
        if (A)
            for (var a of A(i)) te.call(i, a) && V(e, a, i[a]);
        return e
    },
    C = (e, i) => Y(e, Z(i));
var O = (e, i, a) => new Promise((s, g) => {
    var n = c => {
            try {
                b(a.next(c))
            } catch (r) {
                g(r)
            }
        },
        u = c => {
            try {
                b(a.throw(c))
            } catch (r) {
                g(r)
            }
        },
        b = c => c.done ? s(c.value) : Promise.resolve(c.value).then(n, u);
    b((a = a.apply(e, i)).next())
});
import {
    e as re,
    c as d,
    S as H,
    a as x,
    t as f,
    f as R,
    u as ae,
    i as o,
    g as ie,
    h as j,
    s as ne,
    k as le
} from "./solid-js-26bd2957.js";
import {
    u as se
} from "./currency-4826aee6.js";
import {
    r as U,
    c as F
} from "./index-f5548403.js";
import {
    c as oe
} from "./CountryAvatar-e9499a16.js";
import {
    g as de,
    Q as ce,
    e as B,
    u as me,
    h as ge,
    z as ue,
    i as G,
    B as be,
    f as P,
    C as E,
    s as fe
} from "./manifest-4a9d96af.js";
import {
    l as y
} from "./lottery-69be0c1b.js";
import {
    t as v
} from "./i18n-84cf21fb.js";
import {
    t as ye
} from "./throttle-e4f3954e.js";
import "./jb-countries-1e3f9cbb.js";
import "./debounce-f7740f4e.js";
import "./isObject-909534d5.js";
import "./toNumber-e58af95e.js";
var xe = f('<div class="text-xs font-semibold text-warning">'),
    ve = f('<div class="bet-closed text-primary text-sm font-semibold text-center">Closed'),
    he = f('<section><div class="upcoming-draw-item-logo-box w-20 h-20 absolute top-0 right-0 flex items-center justify-center rounded-[50%] translate-x-1/4 -translate-y-1/4 bg-layer2"></div><div></div><div></div><div class="h-px bg-[rgba(153,164,176,0.2)] m-0 my-2"></div><div class="bet-next-draw-date mt-2 mb-3 flex justify-between"><span class="w-[calc(33.3%-8px)] h-6 inline-flex items-center justify-center rounded text-sm font-semibold bg-black_alpha10">h</span><label class="w-3 flex items-center justify-center">:</label><span class="bet-date w-[calc(33.3%-8px)] h-6 inline-flex items-center justify-center rounded text-sm font-semibold bg-black_alpha10 ">m</span><label class="w-3 flex items-center justify-center">:</label><span class="w-[calc(33.3%-8px)] h-6 inline-flex items-center justify-center rounded text-sm font-semibold bg-black_alpha10">s'),
    _e = f('<div class="text-secondary text-xs font-semibold">'),
    we = f("<div>");
const $e = function(e) {
    if (!e.data) return "";
    const i = me(),
        a = se(),
        s = ge(() => Number(e.data.drawTime));
    let g;
    const n = {},
        u = ue({
            threshold: .5
        })(() => g);
    R(() => {
        u() && !n[e.data.id] && (G.emit("sensorsTrack", C(p({
            event: "lottery_show"
        }, U(e.data, ["id"])), {
            item_type: "lottery",
            item_id: e.data.id,
            module_sort: e.itemIndex,
            lottery_id: e.data.id,
            lottery_name: e.data.name
        })), n[e.data.id] = e.data.id)
    }, u());
    const b = r => {
            i(`/lottery/detail/${r.id}`), G.emit("sensorsTrack", C(p({
                event: "lottery_click"
            }, U(r, ["id"])), {
                lottery_id: r.id,
                lottery_name: r.name,
                item_type: "lottery",
                item_id: r.id
            }))
        },
        c = r => {
            const m = fe.darken ? "#323738" : "#FFF";
            let l = `linear-gradient(180deg, rgba(244, 62, 139, 0.00) 0%, rgba(244, 62, 139, 0.60) 100%), ${m}`;
            return E.isjb ? (l = "linear-gradient(180deg, #008451 0%, rgba(0, 109.46, 76.62, 0) 100%)", l) : (r % 5 === 0 ? l = `linear-gradient(180deg, rgba(244, 62, 139, 0.00) 0%, rgba(244, 62, 139, 0.60) 100%), ${m}` : r % 5 === 1 ? l = `linear-gradient(180deg, rgba(244, 182, 62, 0.00) 0%, rgba(244, 182, 62, 0.60) 100%), ${m}` : r % 5 === 2 ? l = `linear-gradient(180deg, rgba(230, 246, 44, 0.00) 0%, rgba(230, 246, 44, 0.60) 100%), ${m}` : r % 5 === 3 ? l = `linear-gradient(180deg, rgba(44, 246, 89, 0.00) 0%, rgba(44, 246, 89, 0.60) 100%), ${m}` : r % 5 === 4 && (l = `linear-gradient(180deg, rgba(44, 125, 246, 0.00) 0%, rgba(44, 125, 246, 0.60) 100%), ${m}`), l)
        };
    return R(() => {
        y(s()) && e.timeBack()
    }), d(H, {
        get children() {
            var r = he(),
                m = r.firstChild,
                l = m.nextSibling,
                h = l.nextSibling,
                Q = h.nextSibling,
                I = Q.nextSibling,
                _ = I.firstChild,
                W = _.firstChild,
                q = _.nextSibling,
                w = q.nextSibling,
                J = w.firstChild,
                K = w.nextSibling,
                N = K.nextSibling,
                M = N.firstChild;
            return r.$$click = () => b(e.data), ae(t => g = t, r), o(m, d(oe, {
                get country() {
                    return e.data.id === "0" ? "Bc" : e.data.country
                }
            })), o(l, () => e.data.name), o(h, () => a(e.data.topPrize)), o(r, d(x, {
                get when() {
                    return e.data.lotteryStatus === 1
                },
                get fallback() {
                    return (() => {
                        var t = _e();
                        return o(t, () => v("Next Draw Starts in")), t
                    })()
                },
                get children() {
                    var t = xe();
                    return o(t, () => v("Lottery draw suspended")), t
                }
            }), I), o(_, () => {
                var t;
                return F((t = s()) == null ? void 0 : t.hours)
            }, W), o(w, () => {
                var t;
                return F((t = s()) == null ? void 0 : t.minutes)
            }, J), o(N, () => {
                var t;
                return F((t = s()) == null ? void 0 : t.seconds)
            }, M), o(r, d(x, {
                get when() {
                    return !y(s())
                },
                get children() {
                    return d(be, {
                        type: "brand",
                        class: "bet-btn text-white rounded-lg w-full h-9",
                        get children() {
                            return v("Bet Now")
                        }
                    })
                }
            }), null), o(r, d(x, {
                get when() {
                    return y(s())
                },
                get children() {
                    return ve()
                }
            }), null), ie(t => {
                var T = P("lotterySectionItemStyleWrap relative flex flex-col justify-between to w-full rounded-xl p-3 text-primary overflow-hidden cursor-pointer", y(s()) && "grayscale"),
                    $ = c(e.itemIndex || 0),
                    S = e.data.lotteryStatus === 1 ? "none" : "auto",
                    k = e.data.lotteryStatus === 1 ? "grayscale(50%)" : "initial",
                    D = e.data.id,
                    L = P("bet-address h-10 text-sm font-semibold w-8/12 line-clamp-2 text-ellipsis", E.isjb ? "text-[#FFFB00]" : "text-primary"),
                    z = P("text-primary text-lg italic font-extrabold mt-1", E.isjb ? "text-[#FFFB00]" : "text-primary");
                return T !== t.e && j(r, t.e = T), $ !== t.t && ((t.t = $) != null ? r.style.setProperty("background", $) : r.style.removeProperty("background")), S !== t.a && ((t.a = S) != null ? r.style.setProperty("pointer-events", S) : r.style.removeProperty("pointer-events")), k !== t.o && ((t.o = k) != null ? r.style.setProperty("filter", k) : r.style.removeProperty("filter")), D !== t.i && ne(r, "id", t.i = D), L !== t.n && j(l, t.n = L), z !== t.s && j(h, t.s = z), t
            }, {
                e: void 0,
                t: void 0,
                a: void 0,
                o: void 0,
                i: void 0,
                n: void 0,
                s: void 0
            }), r
        }
    })
};

function Le(e) {
    const i = Array(6).fill({
            id: "0",
            name: v("__ENV_SITE__ Lottery"),
            topPrize: 1e5,
            hours: 0,
            minutes: 0,
            seconds: 0
        }),
        [a, {
            refetch: s
        }] = re(() => O(this, null, function*() {
            const n = "/platform-lottery/lottery-info/list-upcoming";
            return de().get(n).catch(u => console.log)
        }), {
            initialValue: i
        }),
        g = ye(function() {
            s()
        }, 3e3);
    return d(H, {
        get children() {
            return d(ce, {
                get class() {
                    return `${B.mobile?"-mx-4":"mx-0"} gap-2 grid-col-2`
                },
                get style() {
                    return {
                        "--grid-gap": ".5rem",
                        "--grid-padding": B.mobile ? "1rem" : "0px",
                        "--aspect-ratio": B.mobile ? .88 : 1
                    }
                },
                ref: n => {
                    e.callback && e.callback(n)
                },
                get data() {
                    return a()
                },
                children: (n, u) => d(x, {
                    get when() {
                        return n()
                    },
                    get fallback() {
                        return we()
                    },
                    get children() {
                        return d($e, {
                            get data() {
                                return n()
                            },
                            timeBack: g,
                            get itemIndex() {
                                return u()
                            }
                        })
                    }
                })
            })
        }
    })
}
le(["click"]);
export {
    Le as
    default
};