var Ne = Object.defineProperty,
    Te = Object.defineProperties;
var Re = Object.getOwnPropertyDescriptors;
var ae = Object.getOwnPropertySymbols;
var Le = Object.prototype.hasOwnProperty,
    ke = Object.prototype.propertyIsEnumerable;
var ue = (e, t, l) => t in e ? Ne(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: l
    }) : e[t] = l,
    V = (e, t) => {
        for (var l in t || (t = {})) Le.call(t, l) && ue(e, l, t[l]);
        if (ae)
            for (var l of ae(t)) ke.call(t, l) && ue(e, l, t[l]);
        return e
    },
    ne = (e, t) => Te(e, Re(t));
import {
    e as C,
    s as M,
    t as p,
    c as u,
    i as n,
    a as G,
    b as ie,
    d as ee,
    m as D,
    h as ce,
    f as me,
    l as Me,
    u as Oe
} from "./web-46c35164.js";
import {
    S as $,
    j as pe,
    F as H,
    c as U,
    i as K
} from "./solid-js-871c99e1.js";
import {
    d as A,
    m as W
} from "./index-fe04da94.js";
import {
    u as O,
    l as S,
    a as z,
    D as I,
    j as xe,
    P as Pe,
    B as N,
    s as j,
    p as Ae,
    c as F,
    I as te,
    e as w,
    a0 as fe,
    T as be,
    b as Fe,
    W as Ue,
    z as le,
    f as We
} from "./manifest-d92afe19.js";
import {
    S as qe
} from "./index-03b88e03.js";
import {
    C as je
} from "./index-950def67.js";
import {
    t as d,
    T as ze
} from "./i18n-fd9a94dd.js";
import {
    s as Y,
    g as Ye
} from "./utils-0702ff35.js";
import {
    s as he,
    S as Ve,
    c as Ke
} from "./_baseIsEqual-7dac899d.js";
import {
    b as He
} from "./_baseIndexOf-fe3207b1.js";
import {
    S as se
} from "./_baseFor-371c5662.js";
import {
    n as Je
} from "./noop-cb277961.js";
import {
    I as $e
} from "./index-9e8fcb6a.js";
import {
    a as Ze,
    u as Xe
} from "./router-73d3f837.js";
import {
    C as ye
} from "./countdown-91927513.js";
import {
    d as Qe,
    p as L,
    c as de
} from "./index-a51223a0.js";
import {
    popupRakebackRule as Ge
} from "./rakeback-rule-fbe3987e.js";
import {
    C as et,
    f as tt
} from "./common-progress-bar-3191aef7.js";
import {
    b as ve
} from "./_baseIteratee-a7d854cc.js";
import {
    T as rt
} from "./TermWithData-92578748.js";

function nt(e, t) {
    var l = e == null ? 0 : e.length;
    return !!l && He(e, t, 0) > -1
}

function st(e, t, l) {
    for (var o = -1, r = e == null ? 0 : e.length; ++o < r;)
        if (l(t, e[o])) return !0;
    return !1
}

function lt(e, t) {
    for (var l, o = -1, r = e.length; ++o < r;) {
        var a = t(e[o]);
        a !== void 0 && (l = l === void 0 ? a : l + a)
    }
    return l
}

function ge(e, t) {
    return e && e.length ? lt(e, ve(t)) : 0
}
var ot = 1 / 0,
    it = se && 1 / he(new se([, -0]))[1] == ot ? function(e) {
        return new se(e)
    } : Je;
const at = it;
var ut = 200;

function _e(e, t, l) {
    var o = -1,
        r = nt,
        a = e.length,
        i = !0,
        s = [],
        c = s;
    if (l) i = !1, r = st;
    else if (a >= ut) {
        var g = t ? null : at(e);
        if (g) return he(g);
        i = !1, r = Ke, c = new Ve
    } else c = t ? [] : s;
    e: for (; ++o < a;) {
        var m = e[o],
            x = t ? t(m) : m;
        if (m = l || m !== 0 ? m : 0, i && x === x) {
            for (var h = c.length; h--;)
                if (c[h] === x) continue e;
            t && c.push(x), s.push(m)
        } else r(c, x, l) || (c !== s && c.push(x), s.push(m))
    }
    return s
}

function ct(e) {
    return e && e.length ? _e(e) : []
}

function dt(e, t) {
    return e && e.length ? _e(e, ve(t)) : []
}
var gt = p("<div class=flex-shrink-0><img class=w-12>");
const mt = e => (() => {
    var t = gt(),
        l = t.firstChild;
    return C(() => M(l, "src", e.src)), t
})();
var pt = p('<div class="absolute -left-2 top-0 rounded-br-xl rounded-tl-xl bg-gradient-to-r from-[#FFCB27] to-[#FF8D08] px-2 font-semibold text-primary text-xxs">'),
    xt = p('<div class="flex h-full items-center text-lg font-extrabold text-primary">');
const ft = e => u(qe, {
    class: "bg-layer5 brightness-95",
    get cover() {
        return u(mt, {
            get src() {
                return S("/bonus/bonus/bonuses-page/deposit.png")()
            }
        })
    },
    get descriptions() {
        return `${d("Up to")} ${e.upTo}`
    },
    get action() {
        return u(je, {
            get onClick() {
                return e.onDeposit
            },
            class: "w-full",
            type: "brand",
            get children() {
                return d("Deposit")
            }
        })
    },
    get children() {
        return [(() => {
            var t = pt();
            return n(t, () => d("New User Only")), t
        })(), (() => {
            var t = xt();
            return n(t, () => e.description), t
        })()]
    }
});
A.registerUIWidget({
    target: "notification",
    apply: e => e.type === "KR-NEWBIE" || e.type === "COMMON-NEWBIE" || e.type === "VN-NEWBIE",
    render: e => {
        const t = O(),
            l = () => e.currenSeqBonusList,
            o = () => W(l(), "maxBonus");
        return u($, {
            get when() {
                return o()
            },
            children: r => {
                const a = () => {
                        const c = r();
                        return z.printCurrency(new I(c.maxBonus), c.currency, {
                            target: e.type === "COMMON-NEWBIE" ? xe.setting.localeCurrencyName : c.currency
                        })
                    },
                    i = () => {
                        const c = r();
                        if (!c) return;
                        const g = c.selectedBonusType ? `?bonusType=${c.selectedBonusType}` : "";
                        t(`/wallet/deposit${g}`)
                    },
                    s = () => `${Y(e.seq)} ${d("Deposit Bonus")} ${new I(r().bonusRatio).mul(100).toFixed(0)}%`;
                return u(ft, {
                    get upTo() {
                        return a()
                    },
                    onDeposit: i,
                    get description() {
                        return s()
                    }
                })
            }
        })
    }
});
var bt = p("<span>");
const we = e => (() => {
    var t = bt();
    return n(t, () => d("New User Only")), C(() => G(t, `inline-flex rounded-lg bg-gradient-to-br from-[#EE8624] to-[#E6B820] px-2 py-1 font-extrabold text-alw_white ${e.class}`)), t
})();
class k {
    static generateBonusPercentage(t) {
        return `${new I(t).mul(100).toFixed(0)}% ${d("Bonus")}`
    }
    static generateExtraRewardText(t, l) {
        const o = [],
            r = l ? d("FS") : d("Free Spins"),
            a = l ? d("FB") : d("Free Bet");
        return t.freeBet && o.push(`${t.freeBet} ${a}`), t.freeSpin && o.push(`${t.freeSpin} ${r}`), o.length > 0 ? ` + ${o.join("/")}` : ""
    }
    static generateLocationText(t) {
        return t ? t === "casino" ? d("in Casino") : t === "sport" ? d("in Sports") : "" : ""
    }
    static generateMultiLocationText(t) {
        const l = ct(t);
        return l.length === 1 ? this.generateLocationText(l[0]) : l.length >= 2 ? d("in Casino or Sports") : ""
    }
    static generateStepText(t) {
        return `${Y(t)} ${d("Deposit Bonus")}`
    }
    static generateMonthlyBannerText() {
        return `${d("Sign Up")} -> ${d("Deposit")} -> ${d("Get Bonus")}`
    }
}
var ht = p('<div class="relative z-0 box-border flex size-full min-h-[28rem] overflow-hidden rounded-xl bg-layer1"><img class="absolute -z-10 size-full rounded-xl opacity-85"><div class="flex w-full flex-col items-center justify-end gap-y-1 px-4 pb-4"><span class="text-xl font-extrabold text-primary"></span><p class="text-[5rem] font-extrabold italic leading-none"></p><p class="text-xl font-extrabold text-primary"></p><p class="text-base font-semibold text-primary">');
const $t = e => u(Pe, {
    close: !1,
    type: "center",
    class: "spin-popup !box-border !w-60 !min-w-[22rem]",
    get children() {
        var t = ht(),
            l = t.firstChild,
            o = l.nextSibling,
            r = o.firstChild,
            a = r.nextSibling,
            i = a.nextSibling,
            s = i.nextSibling;
        return o.style.setProperty("background-image", "linear-gradient(180deg, transparent 0%, var(--gradient-color) 60%)"), n(o, u(we, {
            class: "uppercase"
        }), r), n(r, () => e.title), a.style.setProperty("text-shadow", "0px 6px 1px #0E7B00"), a.style.setProperty("-webkit-text-stroke-width", "1px"), a.style.setProperty("-webkit-text-stroke-color", "#3BFF6C"), a.style.setProperty("background", "linear-gradient(227deg, #FFF -12.34%, #D2F0C8 24.17%, #EEF9EA 36.61%, #FFF 68.31%)"), a.style.setProperty("background-clip", "text"), a.style.setProperty("-webkit-background-clip", "text"), n(a, () => e.description), n(i, () => `${d("Up to ")} ${e.upTo}`), n(s, () => e.info), n(o, u(N, {
            get onClick() {
                return e.onDeposit
            },
            type: "brand",
            class: "mt-9 w-full",
            get children() {
                return d("Deposit Now")
            }
        }), null), C(c => {
            var g = S("/bonus/deposit-activity-new/home-popup/deposit-popup-bg.png")(),
                m = j.darken ? "#232626" : "#FFF";
            return g !== c.e && M(l, "src", c.e = g), m !== c.t && ((c.t = m) != null ? o.style.setProperty("--gradient-color", m) : o.style.removeProperty("--gradient-color")), c
        }, {
            e: void 0,
            t: void 0
        }), t
    }
});
A.registerUIWidget({
    target: "home-popup",
    apply: e => e.type === "KR-NEWBIE" || e.type === "COMMON-NEWBIE" || e.type === "VN-NEWBIE",
    render: e => {
        const t = () => e.type === "KR-NEWBIE" ? u(ze, {
                i18nKey: "page.bonus.event.poppup.deposit.bonus",
                children: "Deposit Bonus"
            }) : `${Y(e.seq)} ${d("Deposit Bonus")}`,
            l = () => W(e.currenSeqBonusList, "maxBonus");
        return u($, {
            get when() {
                return l()
            },
            children: o => {
                const r = O(),
                    a = () => `+${new I(o().bonusRatio).mul(100).toFixed(0)}%`,
                    i = () => z.printCurrency(new I(o().maxBonus), o().currency, {
                        target: e.type === "COMMON-NEWBIE" ? xe.setting.localeCurrencyName : o().currency
                    });
                return u($t, {
                    get title() {
                        return t()
                    },
                    get description() {
                        return a()
                    },
                    get upTo() {
                        return i()
                    },
                    get info() {
                        return k.generateMultiLocationText(e.currenSeqBonusList.map(c => c.selectedBonusType))
                    },
                    onDeposit: () => {
                        const c = l();
                        Ae.pop(), c && r("/wallet/deposit")
                    }
                })
            }
        })
    }
});
var yt = p("<span>");
const oe = e => {
    const [t, l] = pe(e, ["texts", "gap"]);
    return (() => {
        var o = yt();
        return ie(o, ee(l, {
            get class() {
                return F("inline-flex items-center", e.class)
            },
            get style() {
                var r;
                return ne(V({}, e.style), {
                    gap: ((r = e.gap) != null ? r : .25) + "rem"
                })
            }
        }), !1, !0), n(o, u(H, {
            get each() {
                return e.texts
            },
            children: r => r
        })), o
    })()
};
var vt = p("<div>");
const Be = e => (() => {
        var t = vt();
        return ie(t, ee(e, {
            get style() {
                return V({}, e.style)
            },
            get class() {
                return F("mx-4 flex flex-1 flex-col justify-between rounded-xl bg-layer4 p-4 sm:mx-0 sm:basis-[20rem]", e.class)
            }
        }), !1, !1), t
    })(),
    _t = (e, t) => {
        const l = e.fiatRecharge;
        return l && t in l ? l[t] : z.convertCurrency(new I(e.minDeposit), e.currency, t)
    };
var wt = p('<span class="text-2xl text-primary">'),
    Bt = p('<span class="text-primary line-through">1000USDT'),
    St = p("<span class=text-brand>"),
    Ct = p('<span class="text-lg font-semibold text-secondary"> '),
    Et = p('<div class="ml-6 mt-4 flex items-center gap-x-6"><img class="h-28 sm:h-40"alt=Deposit>'),
    Dt = p('<div class="flex w-full items-center justify-end">');
const It = e => {
        const t = e.seq > 1 && e.richUser,
            l = () => {
                const r = e.metrics.items,
                    a = W(r, "freeSpin"),
                    i = W(r, "freeBet");
                return k.generateExtraRewardText({
                    freeBet: i == null ? void 0 : i.freeBet,
                    freeSpin: a == null ? void 0 : a.freeSpin
                }, !0)
            },
            o = () => {
                const r = W(e.metrics.items, a => a.bonusRatio);
                return r || {
                    bonusRatio: 0,
                    freeSpin: 0,
                    freeBet: 0,
                    minDeposit: 0,
                    fiatRecharge: {},
                    maxDeposit: 0,
                    maxBonus: 0,
                    currency: ""
                }
            };
        return u(oe, {
            gap: .25,
            class: "flex-col !items-start font-extrabold",
            get texts() {
                return [(() => {
                    var r = wt();
                    return n(r, u($, {
                        when: t,
                        get fallback() {
                            return [D(() => new I(o().bonusRatio).mul(100).toFixed(0)), "%", " ", D(() => d("Bonus"))]
                        },
                        get children() {
                            return d("Bonus Upgraded!")
                        }
                    })), r
                })(), u(oe, {
                    get texts() {
                        return [d("Get up to:"), t ? Bt() : "", (() => {
                            var r = St();
                            return n(r, () => z.printCurrency(new I(o().maxBonus), o().currency), null), n(r, l, null), r
                        })(), k.generateMultiLocationText(e.metrics.items.map(r => r.selectedBonusType))]
                    },
                    class: "flex-wrap text-lg font-semibold text-secondary"
                }), (() => {
                    var r = Ct(),
                        a = r.firstChild;
                    return n(r, () => d("Min Deposit:"), a), n(r, () => z.printCurrency(new I(_t(o(), o().currency)), o().currency), null), r
                })()]
            }
        })
    },
    Nt = e => u(Be, {
        class: "from-[rgba(180, 89, 255, 0.30)] bg-from-special relative min-h-64 bg-gradient-to-l to-transparent !px-4",
        get children() {
            return [u(N, {
                get onClick() {
                    return e.onTerms
                },
                class: "absolute right-3 top-3",
                get children() {
                    return u(te, {
                        name: "Info",
                        class: "size-6 text-tertiary"
                    })
                }
            }), u(oe, {
                get texts() {
                    return [u(we, {
                        class: "text-xs"
                    }), e.title]
                },
                class: "text-xl font-extrabold text-primary"
            }), (() => {
                var t = Et(),
                    l = t.firstChild;
                return n(t, u(It, {
                    get metrics() {
                        return e.metrics
                    },
                    get seq() {
                        return e.seq
                    },
                    get richUser() {
                        return e.richUser
                    }
                }), null), C(() => M(l, "src", S("/bonus/bonus/bonuses-page/deposit.png")())), t
            })(), (() => {
                var t = Dt();
                return n(t, u(N, {
                    get onClick() {
                        return e.onDeposit
                    },
                    type: "brand",
                    class: "min-w-40",
                    get children() {
                        return d("Deposit Now")
                    }
                })), t
            })()]
        }
    });
A.registerUIWidget({
    target: "dashboard-bonus",
    apply: e => e.type === "KR-NEWBIE" || e.type === "COMMON-NEWBIE" || e.type === "VN-NEWBIE",
    render: e => {
        const t = O(),
            l = () => t(`/wallet/deposit?bonusType=${e.currenSeqBonusList[0].selectedBonusType}`);
        return console.log(e.seq, "activity.seq", e.rawBonusList, e.currenSeqBonusList), u(Nt, {
            get metrics() {
                return {
                    items: e.currenSeqBonusList
                }
            },
            get onTerms() {
                return e.requestTerms
            },
            onDeposit: l,
            get title() {
                return `${Y(e.seq)} ${d("Deposit Bonus")}`
            },
            get seq() {
                return e.seq
            },
            get richUser() {
                return e.richUser
            }
        })
    }
});
const Tt = "/modules/bonus2/assets/sports-92bf8173.png",
    Rt = "/modules/bonus2/assets/casino-30e8cfed.png";
var Lt = p('<div class="px-3 pt-0.5 sm:!px-0"><div class="relative z-0 flex h-full cursor-pointer flex-col justify-center rounded-xl bg-layer4 px-7 py-4"><div class="absolute right-0 top-0 -z-10 h-full"><img class=h-full></div><div></div><div class="mt-8 flex items-end gap-x-2">');
const kt = e => {
    O();
    const t = {
            casino: Rt,
            monthly: S("/bonus/deposit-activity-new/component/deposit.png")(),
            sport: Tt
        },
        l = {
            casino: j.darken ? "#715233" : "#DF9148",
            monthly: j.darken ? "#378158" : "#24DC72",
            sport: j.darken ? "#715E33" : "#DFB548"
        };
    return (() => {
        var o = Lt(),
            r = o.firstChild,
            a = r.firstChild,
            i = a.firstChild,
            s = a.nextSibling,
            c = s.nextSibling;
        return r.style.setProperty("background-image", "linear-gradient(240deg, var(--gradient-color) -16%, transparent 70%)"), n(s, () => e.label), n(c, u($, {
            get when() {
                return e.onDeposit
            },
            get children() {
                return u(N, {
                    type: "brand",
                    class: "!px-2 text-sm",
                    size: "s",
                    get onClick() {
                        return e.onDeposit
                    },
                    get children() {
                        return d("Deposit Now")
                    }
                })
            }
        }), null), n(c, u($, {
            get when() {
                return e.onLearnMore
            },
            get children() {
                return u(N, {
                    get onClick() {
                        return e.onLearnMore
                    },
                    class: "text-xs font-extrabold underline",
                    size: "xs",
                    get children() {
                        return d("Learn More")
                    }
                })
            }
        }), null), C(g => {
            var m = l[e.type],
                x = t[e.type];
            return m !== g.e && ((g.e = m) != null ? r.style.setProperty("--gradient-color", m) : r.style.removeProperty("--gradient-color")), x !== g.t && M(i, "src", g.t = x), g
        }, {
            e: void 0,
            t: void 0
        }), o
    })()
};
var Mt = p('<div class="mt-1 text-xs font-semibold leading-none text-secondary">'),
    Ot = p("<div class=whitespace-nowrap> 오리지널 & 슬롯만"),
    Pt = p('<div class="max-w-44 text-wrap text-xl font-semibold text-primary"><div>'),
    At = p('<div class="flex flex-col gap-y-1"><div class="text-2xl font-extrabold text-brand"> '),
    Ft = p('<div class="text-xl font-extrabold leading-none">');
A.registerUIWidget({
    target: "banner-home",
    apply(e) {
        return e.type === "KR-DAILY" || e.type === "MONTHLY" || e.type === "KR-NEWBIE" || e.type === "COMMON-NEWBIE" || e.type === "SPECIAL" || e.type === "VN-NEWBIE" || e.type === "VN-DAILY"
    },
    render(e) {
        const t = () => e.currenSeqBonusList;
        return u($, {
            get when() {
                return t().length > 0
            },
            get children() {
                return u(H, {
                    get each() {
                        return t()
                    },
                    children: l => {
                        const o = () => l.selectedBonusType ? l.selectedBonusType === "casino-once" ? "casino" : l.selectedBonusType : "monthly",
                            r = () => o() === "monthly" ? d("Deposit Bonus") : "",
                            a = () => o() === "monthly" ? (() => {
                                var s = Mt();
                                return n(s, () => k.generateMonthlyBannerText()), s
                            })() : (() => {
                                var s = Pt(),
                                    c = s.firstChild;
                                return n(s, () => k.generateExtraRewardText({
                                    freeBet: l.freeBet,
                                    freeSpin: l.freeSpin
                                }), c), n(c, u($, {
                                    get when() {
                                        return e.type === "KR-NEWBIE"
                                    },
                                    get fallback() {
                                        return k.generateLocationText(l.selectedBonusType)
                                    },
                                    get children() {
                                        return [(() => {
                                            var g = Ot(),
                                                m = g.firstChild;
                                            return n(g, () => w.siteName, m), g
                                        })(), "(롤링 요건 5X)"]
                                    }
                                })), s
                            })(),
                            i = O();
                        return u(kt, {
                            get type() {
                                return o()
                            },
                            get label() {
                                return (() => {
                                    var s = At(),
                                        c = s.firstChild,
                                        g = c.firstChild;
                                    return n(s, u($, {
                                        get when() {
                                            return r()
                                        },
                                        children: m => (() => {
                                            var x = Ft();
                                            return n(x, m), x
                                        })()
                                    }), c), n(c, () => k.generateBonusPercentage(l.bonusRatio), g), n(s, a, null), s
                                })()
                            },
                            onLearnMore: () => {
                                e.requestTerms(l.selectedBonusType)
                            },
                            onDeposit: () => i(`/deposit${l.selectedBonusType?`?bonusType=${l.selectedBonusType}`:""}`)
                        })
                    }
                })
            }
        })
    }
});
var Ut = p("<div class=h-[1.375rem]>"),
    Wt = p('<div class="absolute left-1/2 top-1/2 h-[1.375rem] -translate-x-1/2 -translate-y-1/2 bg-layer2">');
const qt = e => {
    let t;
    const l = fe(() => t);
    return u(et, {
        ref(o) {
            var r = t;
            typeof r == "function" ? r(o) : t = o
        },
        class: "-mb-6 mt-4",
        get milestones() {
            return e.milestones
        },
        get progress() {
            return e.value
        },
        renderProgress: o => {
            const r = (x, h, T, v, f, y = 0) => {
                    const E = b => b.map(_ => {
                            const {
                                r: re,
                                x: Z,
                                y: X
                            } = _, Q = re / 2, Ce = [Z - Q + y, X], Ee = [Z + y, X - Q], De = [Z + y + Q, X], Ie = [Z + y, X + Q];
                            return {
                                left: Ce,
                                top: Ee,
                                right: De,
                                bottom: Ie
                            }
                        }),
                        B = T.map(b => {
                            const _ = new I(x).mul(b).div(100).toNumber(),
                                re = h / 2;
                            return {
                                x: _,
                                y: re,
                                r: v
                            }
                        }),
                        R = E(B).map(b => ({
                            leftTop: [b.left[0] + f / 2 + "px", b.left[1] - f / 2 + "px"].join(" "),
                            leftBottom: [b.left[0] + f / 2 + "px", b.left[1] + f / 2 + "px"].join(" "),
                            rightTop: [b.right[0] - f / 2 + "px", b.right[1] - f / 2 + "px"].join(" "),
                            rightBottom: [b.right[0] - f / 2 + "px", b.right[1] + f / 2 + "px"].join(" "),
                            top: b.top.map(_ => _ + "px").join(" "),
                            bottom: b.bottom.map(_ => _ + "px").join(" "),
                            left: b.left.map(_ => _ + "px").join(" "),
                            right: b.right.map(_ => _ + "px").join(" ")
                        })),
                        q = [];
                    return R.forEach((b, _) => {
                        q.push(_ === 0 ? b.left : b.leftTop, b.top, _ === R.length - 1 ? b.right : b.rightTop)
                    }), R.slice().reverse().forEach((b, _) => {
                        q.push(_ === 0 ? b.right : b.rightBottom, b.bottom, _ === R.length - 1 ? b.left : b.leftBottom)
                    }), `polygon(${q.join(",")})`
                },
                a = U(() => {
                    var x;
                    return (x = tt(e.milestones, h => o >= h.progressTarget)) != null ? x : 0
                }),
                i = () => w.mobile ? 320 : Math.max(l.width - 40 * w.remScale, 0),
                s = 22,
                c = 8,
                g = U(() => {
                    const x = e.milestones.map(h => h.progressTarget);
                    return {
                        "clip-path": r(i() * w.remScale, s * w.remScale, x, s * w.remScale, c * w.remScale, s / 2 * w.remScale),
                        width: (i() + s) * w.remScale + "px"
                    }
                }),
                m = U(() => {
                    const x = i() * o / 100,
                        h = e.milestones.map(v => v.progressTarget);
                    let T = a();
                    return {
                        "clip-path": r(i() * w.remScale, s * w.remScale, h.slice(0, T + 1), (s - 5) * w.remScale, (c - 4) * w.remScale, s / 2 * w.remScale),
                        width: (x + s) * w.remScale + "px"
                    }
                });
            return (() => {
                var x = Wt();
                return n(x, u($, {
                    get when() {
                        return e.value > 0
                    },
                    get children() {
                        var h = Ut();
                        return C(T => ce(h, ne(V({}, m()), {
                            "background-image": "linear-gradient(90deg, rgba(244, 227, 48, 0.30) 0%, #F4E330 100%)"
                        }), T)), h
                    }
                })), C(h => ce(x, V({}, g()), h)), x
            })()
        }
    })
};
var jt = p('<div class="relative z-20 flex justify-between"><div class="flex flex-col flex-wrap sm:flex-row sm:items-center sm:gap-x-2"><h3 class="text-lg font-extrabold text-primary">'),
    zt = p('<span class="flex items-center"><img class="h-4 w-4"><span>:&nbsp;</span><span class=text-primary>'),
    Yt = p('<div class="relative z-10 flex flex-col gap-y-2 sm:flex-row sm:items-center sm:justify-between"><span class="text-sm font-semibold text-secondary">'),
    Vt = p('<div class="mt-2 w-full"style="outline:1px var(--Border-Color-border-third, rgba(228, 234, 240, 0.10)) solid;outline-offset:-0.50px">'),
    Kt = p('<div class="mx-2 mt-2 flex flex-row items-center justify-center gap-2"><span class="font-semibold text-secondary"></span><span class="flex cursor-pointer items-center justify-center gap-1 rounded-md bg-white_alpha5 px-2 py-1"><img class="h-auto w-8"><span class="font-semibold underline">'),
    Ht = p("<span class=text-primary>");
const Jt = e => {
    const t = O(),
        [l, o] = Ze();
    return u(Be, {
        get class() {
            return F(e.class)
        },
        get style() {
            return e.style
        },
        get children() {
            return [(() => {
                var r = jt(),
                    a = r.firstChild,
                    i = a.firstChild;
                return n(i, () => e.title), n(a, () => e.description, null), n(r, u($, {
                    get when() {
                        return e.onTermsClick
                    },
                    get children() {
                        return u(N, {
                            get onClick() {
                                return e.onTermsClick
                            },
                            class: "!h-auto shrink-0 items-start p-0 size-6 text-sm font-semibold text-brand underline sm:items-center",
                            get children() {
                                return u($e, {
                                    name: "inform",
                                    class: "text-tertiary"
                                })
                            }
                        })
                    }
                }), null), r
            })(), u(qt, {
                get value() {
                    return e.value
                },
                get milestones() {
                    return e.milestones
                }
            }), (() => {
                var r = Yt(),
                    a = r.firstChild;
                return n(a, u($, {
                    get when() {
                        return e.timeRange
                    },
                    children: i => u($, {
                        get when() {
                            return Date.now() < i()[0]
                        },
                        get children() {
                            return [D(() => d("Bonus Available in")), ":", (() => {
                                var s = Ht();
                                return n(s, u(ye, {
                                    get expiresInMS() {
                                        return i()[0]
                                    }
                                })), s
                            })()]
                        }
                    })
                }), null), n(a, u($, {
                    get when() {
                        var i, s;
                        return D(() => e.type === "MONTHLY")() && Date.now() >= ((s = (i = e.timeRange) == null ? void 0 : i[0]) != null ? s : 0)
                    },
                    get children() {
                        var i = zt(),
                            s = i.firstChild,
                            c = s.nextSibling,
                            g = c.firstChild,
                            m = c.nextSibling;
                        return n(c, () => d("Monthly Reset"), g), n(m, Ye, null), n(m, () => d("days remaining"), null), C(() => M(s, "src", Qe.icon_monthly)), i
                    }
                }), null), n(a, () => e.weeklyDesc, null), n(r, u(be, {
                    get when() {
                        return e.depositFinished
                    },
                    get fallback() {
                        return u(N, {
                            get onClick() {
                                return e.onDeposit
                            },
                            class: "text-lg sm:text-base",
                            type: "brand",
                            get disabled() {
                                return e.disabledDeposit
                            },
                            get children() {
                                return d("Deposit Now")
                            }
                        })
                    },
                    get children() {
                        return u(N, {
                            type: "second",
                            class: "text-lg sm:text-base",
                            onClick: () => {
                                t("/promotions/promotion")
                            },
                            get children() {
                                return d("Check More Promos")
                            }
                        })
                    }
                }), null), r
            })(), u($, {
                get when() {
                    return e.type === "MONTHLY"
                },
                get children() {
                    return [Vt(), (() => {
                        var r = Kt(),
                            a = r.firstChild,
                            i = a.nextSibling,
                            s = i.firstChild,
                            c = s.nextSibling;
                        return n(r, u(te, {
                            name: "Info",
                            class: "w-5 cursor-pointer text-secondary",
                            onClick: () => {
                                Ge()
                            }
                        }), a), n(a, () => d("Deposit bonus will be added to your ")), i.$$click = () => {
                            w.mobile && l.tab !== "general-bonus" && o({
                                tab: "general-bonus"
                            }), setTimeout(() => {
                                Fe.emit("scroll-to-bcBank")
                            }, 0)
                        }, n(c, () => d("Rakeback")), C(() => M(s, "src", S("/bonus/bonus/bonuses-page/bonus-rakeback.png")() || "")), r
                    })()]
                }
            })]
        }
    })
};
me(["click"]);
var Zt = p('<p class="text-sm font-semibold text-secondary">: <span class=text-brand>'),
    Xt = p('<div class="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-layer1 opacity-80">'),
    Qt = p("<div>"),
    Gt = p("<div><img>"),
    er = p('<div class="w-48 text-center font-normal">'),
    tr = p('<div class="-mb-4 -mt-8 flex h-[10rem] flex-col items-center justify-center"><span>');
A.registerUIWidget({
    target: "dashboard-bonus",
    apply: e => e.type === "MONTHLY" || e.type === "KR-DAILY" || e.type === "VN-DAILY",
    render: e => {
        const t = () => W(e.rawBonusList, "maxBonus");
        return u($, {
            get when() {
                return t()
            },
            children: l => {
                const o = O(),
                    r = () => {
                        o("/wallet/deposit")
                    },
                    a = () => 100 / (e.rawBonusList.length - 1),
                    i = () => e.activityStartTime > 0 ? -1 : a() * (e.seq - 1);
                return u(Jt, {
                    class: "bg-deposit-dashboard",
                    get title() {
                        return D(() => e.type === "MONTHLY")() ? `${d("Monthly Deposit Bonus")}` : `${Y(Math.min(e.seq,e.rawBonusList.length))} ${d("Deposit Bonus")}`
                    },
                    get description() {
                        return (() => {
                            var s = Zt(),
                                c = s.firstChild,
                                g = c.nextSibling;
                            return n(s, () => d("Get up to"), c), n(g, () => z.printCurrency(new I(l().maxBonus), l().currency)), s
                        })()
                    },
                    get onTermsClick() {
                        return e.requestTerms
                    },
                    onDeposit: r,
                    get milestones() {
                        return e.rawBonusList.map((s, c) => {
                            const g = a() * c;
                            return {
                                progressTarget: g,
                                icon() {
                                    const m = () => (() => {
                                            var v = Xt();
                                            return n(v, u($e, {
                                                name: "check",
                                                size: 16,
                                                class: "text-brand"
                                            })), v
                                        })(),
                                        x = () => (() => {
                                            var f = Qt();
                                            return C(y => {
                                                var E = F("relative -z-20 bg-alw_dark"),
                                                    B = 60 * w.remScale + "px";
                                                return E !== y.e && G(f, y.e = E), B !== y.t && ((y.t = B) != null ? f.style.setProperty("height", B) : f.style.removeProperty("height")), y
                                            }, {
                                                e: void 0,
                                                t: void 0
                                            }), f
                                        })(),
                                        h = () => s.done ? s.meetMinDeposit : i() >= g,
                                        T = v => {
                                            const f = [h() ? S("/bonus/bonus/deposit-dashboard/coin.png")() : S("/bonus/bonus/deposit-dashboard/coin_closed.png")(), h() ? S("/bonus/bonus/deposit-dashboard/coin2.png")() : S("/bonus/bonus/deposit-dashboard/coin2_closed.png")(), h() ? S("/bonus/bonus/deposit-dashboard/coin3.png")() : S("/bonus/bonus/deposit-dashboard/coin3_closed.png")(), h() ? S("/bonus/bonus/deposit-dashboard/coin4.png")() : S("/bonus/bonus/deposit-dashboard/coin4_closed.png")(), , ],
                                                y = () => s.done ? s.meetMinDeposit : i() >= g,
                                                E = () => s.done ? s.meetMinDeposit : !1;
                                            return u(Ue, {
                                                get disabled() {
                                                    return !s.done || s.meetMinDeposit
                                                },
                                                get title() {
                                                    return (() => {
                                                        var B = er();
                                                        return n(B, () => d("Deposit did not meet the minimum requirements.")), B
                                                    })()
                                                },
                                                get children() {
                                                    var B = Gt(),
                                                        J = B.firstChild;
                                                    return n(B, u(be, {
                                                        get when() {
                                                            return E()
                                                        },
                                                        get children() {
                                                            return m()
                                                        }
                                                    }), J), C(R => {
                                                        var q = F("flex size-16 cursor-pointer items-center justify-center", v),
                                                            b = F(y() ? "" : "grayscale", c === f.length - 1 ? "-mt-2" : ""),
                                                            _ = f[c];
                                                        return q !== R.e && G(B, R.e = q), b !== R.t && G(J, R.t = b), _ !== R.a && M(J, "src", R.a = _), R
                                                    }, {
                                                        e: void 0,
                                                        t: void 0,
                                                        a: void 0
                                                    }), B
                                                }
                                            })
                                        };
                                    return (() => {
                                        var v = tr(),
                                            f = v.firstChild;
                                        return n(v, () => T("absolute -top-4"), f), n(v, x, f), n(f, () => new I(s.bonusRatio).mul(100).toString() + "%"), C(y => Me(f, {
                                            "flex items-center text-sm font-semibold": !0,
                                            "text-secondary": !h(),
                                            "text-[#FFBA08]": h()
                                        }, y)), v
                                    })()
                                }
                            }
                        })
                    },
                    get timeRange() {
                        return [e.activityStartTime, e.activityStartTime]
                    },
                    get value() {
                        return i()
                    },
                    get type() {
                        return e.type
                    }
                })
            }
        })
    }
});
var rr = p('<div class="absolute -left-1 -top-3 z-0 flex items-center justify-center px-2 py-1 @lg:left-2 @lg:top-1"><img class="absolute inset-0 -z-10 size-full"alt=""><span class="font-extrabold leading-none text-primary text-xxs @lg:text-base">'),
    nr = p('<p class="rounded-lg bg-layer4 p-2 text-xs font-semibold text-secondary"> '),
    sr = p('<p class="flex flex-grow flex-col items-center justify-center @lg:order-2"><span class="text-sm font-extrabold text-primary @lg:text-lg">'),
    lr = p('<div class="relative flex flex-col rounded-xl bg-layer2 p-2 lg:px-4 lg:pb-4"><div class="flex @lg:flex-col @lg:items-center"><div class="flex-shrink basis-1/3 @lg:order-1 @lg:w-32"><img class=w-full alt="">');
const or = e => {
    const t = U(() => [{
            tagBg: L.stepIF,
            bg: "rgba(255, 183, 30, 0.6)",
            mainBox: S("/bonus/bonus/promotion/d-1-box.png")()
        }, {
            tagBg: L.stepIS,
            bg: "rgba(187, 255, 48, 0.6)",
            mainBox: S("/bonus/bonus/promotion/d-2-box.png")()
        }, {
            tagBg: L.stepIT,
            bg: "rgba(255, 98, 48, 0.6)",
            mainBox: S("/bonus/bonus/promotion/d-3-box.png")()
        }, {
            tagBg: L.stepIFour,
            bg: "rgba(224, 55, 255, 0.6)",
            mainBox: S("/bonus/bonus/promotion/d-4-box.png")()
        }]),
        l = K(() => (() => {
            var a = rr(),
                i = a.firstChild,
                s = i.nextSibling;
            return n(s, (() => {
                var c = D(() => !!e.finished);
                return () => c() ? u(te, {
                    class: "w-4",
                    name: "Check"
                }) : e.seq.toString().padStart(2, "0")
            })()), C(() => M(i, "src", t()[e.seq - 1].tagBg)), a
        })()),
        o = K(() => (() => {
            var a = nr(),
                i = a.firstChild;
            return n(a, () => Y(e.seq), i), n(a, () => d("Deposit"), null), a
        })()),
        r = K(() => (() => {
            var a = sr(),
                i = a.firstChild;
            return n(i, () => k.generateBonusPercentage(e.bonusRatio)), n(a, o, null), a
        })());
    return (() => {
        var a = lr(),
            i = a.firstChild,
            s = i.firstChild,
            c = s.firstChild;
        return a.style.setProperty("background-size", "100% 100%"), n(a, l, i), n(i, r, s), C(g => {
            var m = `linear-gradient(to bottom, ${le.isjb?"rgb(var(--special))":t()[e.seq-1].bg} 0%, transparent 97%)`,
                x = t()[e.seq - 1].mainBox;
            return m !== g.e && ((g.e = m) != null ? a.style.setProperty("background-image", m) : a.style.removeProperty("background-image")), x !== g.t && M(c, "src", g.t = x), g
        }, {
            e: void 0,
            t: void 0
        }), a
    })()
};
var ir = p('<div class="flex flex-row items-start gap-4">'),
    ar = p('<div class="bg-from-special flex flex-col gap-3 rounded-lg bg-layer3 bg-gradient-to-bl from-[#D2EC27] from-[-88%] to-transparent to-[46%] p-4 @lg:flex-row @lg:items-center @lg:justify-between"><h3><div class="hidden @lg:mt-4 @lg:block @lg:text-secondary"></div></h3><div class="grid flex-shrink-0 grid-cols-2 gap-4 @lg:grid-cols-4"></div><div class=@lg:hidden>'),
    ur = p('<div class="font-semibold text-primary"><p></p><p>'),
    cr = p('<p class="font-extrabold text-primary @lg:text-3xl">'),
    dr = p("<p class=text-xl> "),
    gr = p('<p class="font-semibold text-primary"> ');

function mr(e) {
    const t = K(() => u(H, {
            get each() {
                return e.items
            },
            children: (o, r) => u(or, o)
        })),
        l = () => {
            const o = U(() => [e.onDeposit && u(N, {
                class: "flex-grow",
                type: "brand",
                get onClick() {
                    return e.onDeposit
                },
                get children() {
                    return d("Deposit Now")
                }
            }), e.onMoreDetails && u(N, {
                class: "flex-grow border border-solid border-third bg-black_alpha5 font-semibold text-primary",
                get onClick() {
                    return e.onMoreDetails
                },
                get children() {
                    return d("More Details")
                }
            })]);
            return (() => {
                var r = ir();
                return n(r, u($, {
                    get when() {
                        return e.actionRender
                    },
                    get fallback() {
                        return u(H, {
                            get each() {
                                return o()
                            },
                            children: (a, i) => a
                        })
                    },
                    get children() {
                        return e.actionRender()
                    }
                })), r
            })()
        };
    return (() => {
        var o = ar(),
            r = o.firstChild,
            a = r.firstChild,
            i = r.nextSibling,
            s = i.nextSibling;
        return n(r, () => e.title, a), n(a, l), n(i, t), n(s, l), o
    })()
}
A.registerUIWidget({
    target: "banner-promotion",
    apply: e => e.type === "COMMON-NEWBIE" || e.type === "KR-NEWBIE" || e.type === "MONTHLY" || e.type === "KR-DAILY" || e.type === "VN-DAILY" || e.type === "VN-NEWBIE",
    render: e => {
        const t = O(),
            l = () => {
                const r = () => (() => {
                        var i = ur(),
                            s = i.firstChild,
                            c = s.nextSibling;
                        return n(s, () => d("Great Deposit Bonus")), n(c, () => k.generateMultiLocationText(e.rawBonusList.map(g => g.selectedBonusType))), i
                    })(),
                    a = () => {
                        const i = W(e.rawBonusList, m => m.bonusRatio),
                            s = ge(e.rawBonusList, m => m.freeBet),
                            c = ge(e.rawBonusList, m => m.freeSpin),
                            g = `${d("Up TO")} ${k.generateBonusPercentage(i.bonusRatio)} ${k.generateExtraRewardText({freeBet:s,freeSpin:c},!0)}`;
                        return (() => {
                            var m = cr();
                            return n(m, g), m
                        })()
                    };
                return (() => {
                    var i = dr(),
                        s = i.firstChild;
                    return n(i, r, s), n(i, a, null), i
                })()
            },
            o = U(() => e.activityStartTime > 0 ? {
                actionRender: () => (() => {
                    var r = gr(),
                        a = r.firstChild;
                    return n(r, () => d("Available in"), a), n(r, u(ye, {
                        get expiresInMS() {
                            return e.activityStartTime
                        }
                    }), null), r
                })()
            } : {
                onDeposit: () => {
                    t("/deposit")
                },
                onMoreDetails: e.requestTerms
            });
        return u(mr, ee(o, {
            get title() {
                return l()
            },
            get items() {
                return dt(e.rawBonusList, "seq").map(r => ({
                    bonusRatio: r.bonusRatio,
                    seq: r.seq,
                    finished: r.done
                }))
            }
        }))
    }
});
var P = (e => (e.Hot = "HOT", e.New = "NEW", e.Exclusive = "EXCLUSIVE", e.NewUser = "New User", e.Sports = "Sports", e.Slots = "Slots", e.None = "NONE", e.NewUserOnly = "New User Only", e))(P || {}),
    pr = (e => (e[e.All = -1] = "All", e[e.Casino = 1] = "Casino", e[e.Sport = 2] = "Sport", e[e.Other = 3] = "Other", e))(pr || {}),
    xr = p('<div class="absolute -top-1 right-[21px] z-10"><img class=w-12>'),
    fr = p('<div class="ellipsis ellipsis text-sm font-semibold text-secondary"><span></span><span class=ml-1>'),
    br = p('<div><div class="relative block w-full overflow-hidden rounded-t-lg10 bg-layer3 ratio-[398/170]"></div><div class="center justify-between rounded-bl-lg rounded-br-lg bg-layer3 p-3 pt-3"><div class="ellipsis w-[1px] flex-auto pr-2.5"><div class="ellipsis text-base font-extrabold text-primary"></div></div><div class="">');
const hr = {
        [P.Hot]: L.hot,
        [P.New]: L._new,
        [P.Exclusive]: L.exclusive,
        [P.NewUser]: L.newplayer,
        [P.Slots]: L.slots,
        [P.Sports]: L.promotion_sports,
        [P.NewUserOnly]: L.newuser
    },
    $r = e => {
        const [t, l] = pe(e, ["classList", "title"]);
        return (() => {
            var o = br(),
                r = o.firstChild,
                a = r.nextSibling,
                i = a.firstChild,
                s = i.firstChild,
                c = i.nextSibling;
            return ie(o, ee(l, {
                get classList() {
                    return {
                        "relative mb-4 w-full rounded-xl": !0,
                        "max-h-42 px-2 lg:w-[33.33%]": !w.mobile
                    }
                }
            }), !1, !0), n(o, u($, {
                get when() {
                    return e.itemTag !== P.None && e.itemTag !== void 0
                },
                get children() {
                    var g = xr(),
                        m = g.firstChild;
                    return C(() => M(m, "src", hr[e.itemTag])), g
                }
            }), r), n(r, () => e.imgCover), n(s, () => e.title), n(i, u($, {
                get when() {
                    return e.endTime
                },
                get children() {
                    var g = fr(),
                        m = g.firstChild,
                        x = m.nextSibling;
                    return n(m, () => d("Ends")), n(x, () => new Date(e.endTime).toLocaleString()), g
                }
            }), null), n(c, (() => {
                var g = D(() => !e.inProgress);
                return () => g() ? u(N, {
                    size: "m",
                    get class() {
                        return F(j.lang === "hy" && "text-sm", "w-28 bg-layer5 text-base leading-4 text-primary")
                    },
                    get children() {
                        return d("Event End")
                    }
                }) : u(N, {
                    size: "m",
                    get class() {
                        return F(j.lang === "hy" && "text-sm", "w-28 bg-layer5 text-base font-extrabold leading-4 text-brand")
                    },
                    get children() {
                        return d("In Progress")
                    }
                })
            })()), o
        })()
    };
var yr = p('<div class="mb-2 inline-flex items-center rounded-lg bg-[#FFD557] px-2 py-1 text-xs font-extrabold text-[#60310A]"><img class="mr-2 h-auto w-4"> <span> '),
    vr = p(`<div class="w-full overflow-hidden text-ellipsis rounded-lg p-1 text-secondary backdrop-blur-sm"><div class=text-[0.4rem]>PRODUCCIONES MOVILES S.A. DE C.V., PERMISIONARIA EN MATERIA DE JUEGOS Y SORTEOS CONFORME AL PERMISO
DGAJS/SCEVF/P-06/2005-TER Y AL OFICIO DE AUTORIZACIÓN DGJS/ 1670 /2025 DE LA PROMOCIÓN: BONO POR DEPÓSITO. LA
VIGENCIA DE LA AUTORIZACIÓN ES HASTA EL 31 DE DICIEMBRE DE 2025. LA PROMOCIÓN ES PERSONAL EINTRANSFERIBLE.
JUEGUE RESPONSABLEMENTE. RECUERDE QUE EL PRINCIPAL PROPÓSITO ES EL ENTRETENIMIENTO, LA DIVERSIÓN Y EL
ESPARCIMIENTO. JUEGOS PROHIBIDOS PARAMENORES DE EDAD`),
    _r = p("<span>"),
    wr = p('<div class="absolute bottom-0 top-0 w-full rounded-lg"><div class="absolute left-0 top-0 flex h-[170px] w-[392px] items-center justify-between px-[20px]"><div><p class="text-[24px] font-extrabold leading-none text-brand">% </p><p class="text-[20px] font-extrabold leading-none text-primary"></p></div><div class="absolute right-0 top-2 -z-10 w-[160px] rounded-md"><img class=w-full alt="">');
const Se = e => {
    let t;
    const l = fe(() => t),
        o = U(() => l.width / 398),
        r = () => le.isbcmx ? (() => {
            var i = yr(),
                s = i.firstChild,
                c = s.nextSibling,
                g = c.nextSibling;
            return g.firstChild, n(g, () => d("BONO POR DEPÓSITO"), null), C(() => {
                var m;
                return M(s, "src", (m = L) == null ? void 0 : m.headerIcon)
            }), i
        })() : null,
        a = () => le.isbcmx ? vr() : null;
    return (() => {
        var i = wr(),
            s = i.firstChild,
            c = s.firstChild,
            g = c.firstChild,
            m = g.firstChild,
            x = g.nextSibling,
            h = c.nextSibling,
            T = h.firstChild,
            v = t;
        return typeof v == "function" ? Oe(v, i) : t = i, i.style.setProperty("background-image", "linear-gradient(240deg, var(--gradient-color) -16%, transparent 71%)"), s.style.setProperty("transform-origin", "top left"), n(c, r, g), n(g, () => new I(e.bonusRatio).mul(100).toFixed(0), m), n(g, () => d("Bonus"), null), n(x, u($, {
            get when() {
                return e.type === "sport"
            },
            get fallback() {
                return u($, {
                    get when() {
                        return e.freeSpin && e.freeSpin > 0
                    },
                    get fallback() {
                        return d("In Casino")
                    },
                    get children() {
                        return ["+ ", D(() => e.freeSpin), " ", D(() => d("Free Spins In Casino"))]
                    }
                })
            },
            get children() {
                var f = _r();
                return n(f, u($, {
                    get when() {
                        return e.freeBet
                    },
                    get fallback() {
                        return d("In Sports")
                    },
                    get children() {
                        return ["+ ", D(() => e.freeBet), " ", D(() => d("Free Bet In Sports"))]
                    }
                })), f
            }
        })), n(c, a, null), C(f => {
            var y = e.type === "casino" ? "rgba(64, 163, 106, 0.80)" : "rgba(255, 168, 37, 0.40)",
                E = `scale(${o()},${o()})`,
                B = e.type === "sport" ? de.bannerSport : de.bannerCasino;
            return y !== f.e && ((f.e = y) != null ? i.style.setProperty("--gradient-color", y) : i.style.removeProperty("--gradient-color")), E !== f.t && ((f.t = E) != null ? s.style.setProperty("transform", E) : s.style.removeProperty("transform")), B !== f.a && M(T, "src", f.a = B), f
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), i
    })()
};
A.registerUIWidget({
    target: "promotion-list",
    apply: e => e.type === "COMMON-NEWBIE" || e.type === "KR-NEWBIE" || e.type === "KR-DAILY",
    render: e => {
        const t = () => e.currenSeqBonusList.filter(o => o.selectedBonusType),
            l = O();
        return u(H, {
            get each() {
                return t()
            },
            children: o => u($r, {
                inProgress: !0,
                get title() {
                    return `${d("Deposit Bonus")} ${k.generateLocationText(o.selectedBonusType)}`
                },
                get itemTag() {
                    return P.NewUser
                },
                get imgCover() {
                    return u(Se, {
                        get type() {
                            return o.selectedBonusType
                        },
                        get bonusRatio() {
                            return o.bonusRatio
                        },
                        get freeBet() {
                            return o.freeBet
                        },
                        get freeSpin() {
                            return o.freeSpin
                        }
                    })
                },
                onClick: () => {
                    l(`/promotion/${o.selectedBonusType}_bonus`)
                }
            })
        })
    }
});
var Br = p('<div class="center mb-4 inline-flex rounded-lg py-1 text-sm leading-none text-secondary"><div class="center mr-3 h-8 w-8 rounded-md bg-layer4"></div><span class="text-xl font-extrabold text-primary">'),
    Sr = p('<div class="mx-auto max-w-[900px] sm:pb-6"><div class="rounded-lg bg-layer3 max-sm:mt-3 sm:bg-layer4 sm:pb-6"><div class="relative sm:flex sm:justify-center"><div class="relative w-full rounded-xl ratio-[398/170]"></div></div><div class=p-3><div class="mt-4 text-left text-base font-extrabold text-primary"></div><div class=flex><div class="my-5 flex w-auto flex-wrap justify-between gap-x-4 rounded-lg bg-layer5 p-2.5"><p class="flex items-center text-xl font-extrabold"></p><div class=text-right><div class="text-3xl font-extrabold text-warning_brighter">% <!> </div></div></div></div><div class="flex flex-col gap-y-4">');
const Cr = e => {
    const t = O();
    return u(We, {
        get title() {
            return d("Promotion")
        },
        get children() {
            var l = Sr(),
                o = l.firstChild,
                r = o.firstChild,
                a = r.firstChild,
                i = r.nextSibling,
                s = i.firstChild,
                c = s.nextSibling,
                g = c.firstChild,
                m = g.firstChild,
                x = m.nextSibling,
                h = x.firstChild,
                T = h.firstChild,
                v = T.nextSibling;
            v.nextSibling;
            var f = c.nextSibling;
            return n(l, u($, {
                get when() {
                    return !w.mobile
                },
                get children() {
                    var y = Br(),
                        E = y.firstChild,
                        B = E.nextSibling;
                    return E.$$click = () => {
                        t("/promotions/promotion")
                    }, n(E, u(te, {
                        class: "w-5 cursor-pointer text-secondary",
                        name: "Arrow"
                    })), n(B, () => d("Promotion")), y
                }
            }), o), n(a, u(Se, {
                get type() {
                    return e.type
                },
                get bonusRatio() {
                    return e.rate
                },
                get freeSpin() {
                    return e.freeSpin
                },
                get freeBet() {
                    return e.freeBet
                }
            })), n(s, () => e.title), n(m, () => d("Total Prize")), n(h, () => new I(e.rate).mul(100).toString(), T), n(h, () => d("Bonus"), v), n(h, u($, {
                get when() {
                    return e.type === "sport"
                },
                get fallback() {
                    return u($, {
                        get when() {
                            return e.freeSpin > 0
                        },
                        get children() {
                            return ["+ ", D(() => e.freeSpin), " FS"]
                        }
                    })
                },
                get children() {
                    return ["+ ", D(() => e.freeBet), " FB"]
                }
            }), null), n(f, () => e.children), n(i, u(N, {
                class: "mt-5 w-72 max-sm:w-full",
                type: "brand",
                get onClick() {
                    return e.onDeposit
                },
                get children() {
                    return d("Deposit Now")
                }
            }), null), l
        }
    })
};
me(["click"]);
A.registerUIWidget({
    target: "promotion-detail",
    apply: () => !0,
    render: e => {
        const t = Xe(),
            l = O(),
            r = (() => t.pathname.split("/")[t.pathname.split("/").length - 1])() === "casino_bonus" ? "casino" : "sport",
            a = () => e.currenSeqBonusList.find(s => s.selectedBonusType === r),
            i = () => {
                switch (e.type) {
                    case "COMMON-NEWBIE":
                        return {
                            region: "global",
                            termName: `newbie.${r}`
                        };
                    case "KR-NEWBIE":
                        return {
                            region: "kr",
                            termName: `newbie.${r}`
                        };
                    case "VN-NEWBIE":
                        return {
                            region: "global",
                            termName: `newbie.${r}`
                        };
                    case "VN-DAILY":
                        return {
                            region: "vn",
                            termName: `daily.${r}`
                        };
                    case "KR-DAILY":
                        return {
                            region: "kr",
                            termName: `daily.${r}`
                        };
                    case "MONTHLY":
                        return {
                            region: "global",
                            termName: "monthlyDeposit"
                        };
                    default:
                        return {
                            region: "global",
                            termName: "newbie.none"
                        }
                }
            };
        return u($, {
            get when() {
                return a()
            },
            children: s => u(Cr, {
                type: r,
                onDeposit: () => {
                    l("/deposit")
                },
                get title() {
                    return r === "casino" ? d("Deposit Bonus in Casino") : d("Deposit Bonus in Sports")
                },
                get rate() {
                    return s().bonusRatio
                },
                get freeSpin() {
                    return s().freeSpin
                },
                get freeBet() {
                    return s().freeBet
                },
                get children() {
                    return u(rt, {
                        get termsName() {
                            return i().termName
                        },
                        get region() {
                            return i().region
                        },
                        filters: {
                            components: {
                                blacklist: ["bonusStructureImg"]
                            }
                        }
                    })
                }
            })
        })
    }
});
const Er = e => {
        const t = K(() => {
            try {
                return A.renderUIWidgets(e.target)
            } catch (l) {
                console.error(l)
            }
        });
        return D(t)
    },
    Dr = Er,
    Zr = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Dr
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Jt as D, mt as N, pr as P, Dr as W, $r as a, Zr as w
};