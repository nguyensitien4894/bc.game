var J = (b, i, a) => new Promise((c, r) => {
    var u = d => {
            try {
                s(a.next(d))
            } catch (o) {
                r(o)
            }
        },
        n = d => {
            try {
                s(a.throw(d))
            } catch (o) {
                r(o)
            }
        },
        s = d => d.done ? c(d.value) : Promise.resolve(d.value).then(u, n);
    s((a = a.apply(b, i)).next())
});
import {
    i as e,
    c as l,
    m as P,
    e as H,
    s as R,
    t as m,
    a as xe,
    d as $e
} from "./web-2eabff95.js";
import {
    c as E,
    S as $,
    F as B,
    e as F,
    b as Me,
    g as K,
    h as He,
    a as ye
} from "./solid-js-ae9447d2.js";
import {
    t,
    T as _e
} from "./i18n-da87ffb5.js";
import {
    c as we
} from "./createHtmlFile-f41d4abf.js";
import {
    p as Se
} from "./parseHTML-63297060.js";
import {
    c as V
} from "./store-2ed2b91e.js";
import {
    L as Y
} from "./LocalIcon-3e1eb09f.js";
import {
    g as Ce,
    a as ke
} from "./Tool-c64a5814.js";
import {
    u as Te
} from "./router-74a08e17.js";
import "./manifest-b9c1eb84.js";
import "./memoize-561b08e2.js";
const Re = "/modules/static2/assets/rg-660fbdee.png",
    Pe = "/modules/static2/assets/rg_w-b3c75e20.png",
    Be = "/modules/static2/assets/rg_21-eac4787b.png",
    De = "/modules/static2/assets/rg_21_w-89dea51e.png";
var Ae = m('<div class="help-center-box p-4">'),
    Fe = m('<p><img class="mb-2 w-full sm:w-1/2">');
const {
    host: Ge,
    license: X,
    setting: Z
} = globalThis._bc.fcsy, ze = function() {
    const {
        htmlString: i
    } = we("responsible_gambling"), a = E(() => Se(i() || "")), c = X.isesportsbr || X.isbcmx;
    return (() => {
        var r = Ae();
        return e(r, l($, {
            get when() {
                return i()
            },
            get children() {
                return l(B, {
                    get each() {
                        return a()
                    },
                    children: (u, n) => u.title ? [P(() => u.title()), l($, {
                        get when() {
                            return n() === 0 && !c
                        },
                        get children() {
                            var s = Fe(),
                                d = s.firstChild;
                            return H(() => R(d, "src", Ge.isUsHost ? Z.darken ? Be : De : Z.darken ? Re : Pe)), s
                        }
                    }), P(() => u.content())] : u.content()
                })
            }
        })), r
    })()
};
var qe = m("<div>");
const {
    cx: Oe
} = globalThis._bc.fcsy, Le = function(i) {
    const {
        htmlString: a
    } = we(i.name), c = E(() => Se(a() || ""));
    return (() => {
        var r = qe();
        return e(r, l($, {
            get when() {
                return a()
            },
            get children() {
                return [l(B, {
                    get each() {
                        return c()
                    },
                    children: u => u.title ? [P(() => u.title()), P(() => u.content())] : u.content()
                }), P(() => i.children)]
            }
        })), H(() => xe(r, Oe("help-center-box", i.class))), r
    })()
};
var Ie = m("<span>"),
    je = m('<div class="center mb-4 flex w-full rounded-md border border-brand py-3 text-brand"><span></span><span class=mx-1>-'),
    Ue = m("<span>By requesting self-exclusion, I acknowledge the "),
    Ve = m('<span class="mr-1 text-brand sm:cursor-pointer">rules of self-exclusion'),
    Ye = m("<span>and take full responsibility"),
    Ke = m('<div class=w-full><div class="flex overflow-hidden rounded-md bg-white_alpha10"><div class="center flex max-w-20 flex-1 px-6"></div><div class="flex-1 p-3"><div class="font-extrabold text-primary"></div><div class="mt-2 text-secondary"></div></div></div><div class="mt-3 flex overflow-hidden rounded-md bg-white_alpha10"><div class="center flex max-w-20 flex-1 px-6"></div><div class="flex-1 p-3"><div class="font-extrabold text-primary"></div><div class="mt-2 text-secondary"></div></div></div><div class="mt-3 flex items-center"><div>'),
    Qe = m("<span class=mr-1>d"),
    We = m("<span class=mr-1>h"),
    Je = m("<span class=mr-1>m"),
    Xe = m("<span>s");
const {
    account: Ze,
    app: et,
    Button: tt,
    Checkbox: lt,
    createCountdown: nt,
    cx: ee,
    getHttp: st,
    Pop: it,
    pop: rt,
    useNavigate: at
} = globalThis._bc.fcsy, ot = function() {
    const i = at(),
        [a, c] = F(!1),
        [r, u] = V({
            expireTime: 0,
            periodV2: "",
            transStatus: 0
        });
    Me(() => {
        Ze.login && n()
    });
    const n = () => {
        st().get("/account/self-exclusion/statusV2/").then(o => {
            o && u({
                expireTime: o.expireTime || 0,
                periodV2: o.periodV2 || "",
                transStatus: dt(o.status)
            })
        }).catch(console.log)
    };
    et.on("self-confirm-callback", n);
    const s = () => {
            rt.push(() => l(it, {
                get title() {
                    return t("Rules of self-exclusion")
                },
                get children() {
                    return l(Le, {
                        name: "self_exclusion_dialog"
                    })
                }
            }))
        },
        d = () => {
            r.transStatus === 0 ? i("/exclusion/cooldown") : r.transStatus === 2 && i("/exclusion/cooldown?flag=1")
        };
    return (() => {
        var o = Ke(),
            h = o.firstChild,
            v = h.firstChild,
            T = v.nextSibling,
            S = T.firstChild,
            k = S.nextSibling,
            p = h.nextSibling,
            _ = p.firstChild,
            L = _.nextSibling,
            C = L.firstChild,
            I = C.nextSibling,
            M = p.nextSibling,
            f = M.firstChild;
        return e(o, l($, {
            get when() {
                return r.transStatus === 1 || r.transStatus === 3
            },
            get children() {
                var g = je(),
                    y = g.firstChild;
                return y.nextSibling, g.style.setProperty("background", "rgba(36, 238, 137, 0.05)"), e(y, (() => {
                    var x = P(() => r.transStatus === 1);
                    return () => x() ? t("24 Hours Cooldown") : t("Self-Exclusion")
                })()), e(g, l($, {
                    get when() {
                        return r.periodV2 === "permanent"
                    },
                    get fallback() {
                        return l(ct, {
                            get time() {
                                return r.expireTime
                            }
                        })
                    },
                    get children() {
                        var x = Ie();
                        return e(x, () => t("Permanently")), x
                    }
                }), null), g
            }
        }), h), e(v, l(Y, {
            name: "Cooldown1",
            get class() {
                return ee("size-8", r.transStatus > 0 ? "text-brand" : "text-secondary")
            },
            viewBox: "0 0 32 32"
        })), e(S, () => t("Step 1: Take a 24 Hours Cooldown")), e(k, () => t("Take a 24 hours cooldown from betting from both casino and sports. You will still be able to access the platform and you can earn and claim rewards. During the 24 hours, you can change the type of cooldown but this will reset the 24 hour timer.")), e(_, l(Y, {
            name: "Cooldown2",
            get class() {
                return ee("size-8", r.transStatus > 2 ? "text-brand" : "text-secondary")
            },
            viewBox: "0 0 32 32"
        })), e(C, () => t("Step 2: Self-Exclusion")), e(I, () => t("After your 24 hours cooldown ends, you have 24 hours to extend your self-exclusion period by 1 day, 1 week, 1 month, 6 months or permanently. If you self-exclude from the platform, you still able to log in to withdraw your asset. Self-exclusion is a STRICTLY IRREVERSIBLE process, NO ONE will be able to remove this for you.")), e(M, l(lt, {
            class: "mr-2 !size-5",
            get value() {
                return a()
            },
            onChange: c
        }), f), e(f, l(_e, {
            i18nKey: "static.user_agreement",
            get children() {
                return [Ue(), (() => {
                    var g = Ve();
                    return g.$$click = s, g
                })(), Ye()]
            }
        })), e(o, l(tt, {
            class: "mt-3 w-full text-sm font-semibold text-primary_brand",
            onClick: d,
            type: "brand",
            get disabled() {
                return !a() || r.transStatus === 1 || r.transStatus === 3 || r.transStatus === 5
            },
            get children() {
                return t("Continue")
            }
        }), null), H(g => {
            var y = r.transStatus > 0 ? "rgba(36, 238, 137, 0.20)" : "rgb(var(--layer5) / 1)",
                x = r.transStatus > 2 ? "rgba(36, 238, 137, 0.20)" : "rgb(var(--layer5) / 1)";
            return y !== g.e && ((g.e = y) != null ? v.style.setProperty("background-color", y) : v.style.removeProperty("background-color")), x !== g.t && ((g.t = x) != null ? _.style.setProperty("background-color", x) : _.style.removeProperty("background-color")), g
        }, {
            e: void 0,
            t: void 0
        }), o
    })()
}, ct = function(i) {
    const a = nt(() => i.time),
        c = r => r > 9 ? r + "" : "0" + r;
    return (() => {
        var r = Ie();
        return e(r, l($, {
            get when() {
                return a()
            },
            fallback: "00h 00m 00s",
            children: u => [l($, {
                get when() {
                    return u().days > 0
                },
                get children() {
                    var n = Qe(),
                        s = n.firstChild;
                    return e(n, () => u().days, s), n
                }
            }), (() => {
                var n = We(),
                    s = n.firstChild;
                return e(n, () => c(u().hours), s), n
            })(), (() => {
                var n = Je(),
                    s = n.firstChild;
                return e(n, () => c(u().minutes), s), n
            })(), (() => {
                var n = Xe(),
                    s = n.firstChild;
                return e(n, () => c(u().seconds), s), n
            })()]
        })), r
    })()
}, ut = {
    cool_down_confirmed_v2: 1,
    cool_down_expired_v2: 2,
    self_exclusion_confirmed_v2: 3,
    self_exclusion_expired_v2: 4,
    self_exclusion_grace_period_v2: 5
};

function dt(b) {
    if (b && b !== "") {
        const i = ut[b] || 0;
        return i === 4 ? 0 : i
    } else return 0
}
$e(["click"]);
const mt = function() {
    return l(Le, {
        name: "self_exclusion",
        class: "p-4",
        get children() {
            return l(ot, {})
        }
    })
};
var gt = m('<div class="help-center-box p-4"><h2 class="text-sm font-semibold text-primary"></h2><div class=help-raw-html><p></p></div><h2 class="text-sm font-semibold text-primary"></h2><div class=help-raw-html><ol><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol><p>');
const bt = function() {
    return (() => {
        var i = gt(),
            a = i.firstChild,
            c = a.nextSibling,
            r = c.firstChild,
            u = c.nextSibling,
            n = u.nextSibling,
            s = n.firstChild,
            d = s.firstChild,
            o = d.nextSibling,
            h = o.nextSibling,
            v = h.nextSibling,
            T = v.nextSibling,
            S = T.nextSibling,
            k = S.nextSibling,
            p = k.nextSibling,
            _ = p.nextSibling,
            L = _.nextSibling,
            C = s.nextSibling;
        return e(a, () => t("Self-Assessment")), e(r, l(_e, {
            i18nKey: "static.responsible.assessment.desc1",
            children: "Gambling can be an enjoyable pastime for many people, providing entertainment and the thrill of taking a risk. However, for some individuals, gambling can become more than just a harmless activity. It can develop into a serious problem that affects various aspects of their lives. Recognizing the signs of problem gambling is the first step towards addressing this issue. This self-assessment tool is designed to help you reflect on your gambling behaviour and determine whether it may be causing problems in your life. It is essential to approach this assessment with honesty and openness to gain a clear understanding of your gambling habits."
        })), e(u, () => t("Do you have a gambling problem? Ask yourself the following questions:")), e(d, () => t("Have there ever been periods lasting two weeks or longer when you spent a lot of time thinking about your gambling experiences, planning out future gambling ventures or bets, or thinking about ways of getting money to gamble with?")), e(o, () => t("Have there ever been periods when you needed to gamble with increasing amounts of money or with larger bets than before in order to get the same feeling of excitement?")), e(h, () => t("Have you ever felt restless or irritable when trying to stop, cut down, or control your gambling?")), e(v, () => t("Have you tried and not succeeded in stopping, cutting down, or controlling your gambling three or more times in your life?")), e(T, () => t("Have you ever gambled to escape from personal problems, or to relieve uncomfortable feelings such as guilt, anxiety, helplessness, or depression?")), e(S, () => t("Has there ever been a period when, if you lost money gambling one day, you would often return another day to get even?")), e(k, () => t("Have you lied to family members, friends, or others about how much you gamble, and/or about how much money you lost on gambling, on at least three occasions?")), e(p, () => t("Have you ever written a bad cheque or taken money that didn’t belong to you from family members, friends, or anyone else in order to pay for your gambling?")), e(_, () => t("Has your gambling ever caused serious or repeated problems in your relationships with any of your family members or friends? Or, has your gambling ever caused you problems at work or your studies?")), e(L, () => t("Have you ever needed to ask family members, friends, a lending institution, or anyone else to loan you money or otherwise bail you out of a desperate money situation that was largely caused by your gambling?")), e(C, () => t("*REMINDER: this self-assessment will help you figure out if there is, or you are developing a problem. If you answered yes to one or more of the above questions, you should seek help.")), i
    })()
};
var ft = m('<p class="font-extrabold text-secondary">'),
    ht = m('<div class="w-full rounded-lg bg-layer4 p-4"><div class="w-full sm:mt-4 sm:flex sm:gap-8"><div class=flex-1><p class=font-semibold></p></div><div class="mt-4 flex-1 sm:mt-0 sm:w-1/2 sm:flex-none"><p class=font-semibold></p></div></div><div class="mt-4 h-[1px] w-full bg-third"></div><div class="mt-4 w-full rounded-md bg-layer5 p-3"><p class=font-semibold></p><div class="mt-2 flex items-center"><img class="-order-1 w-6"><span class="ml-2 text-lg font-extrabold">'),
    te = m('<div class="mt-3 flex h-5 w-full items-center justify-between font-semibold text-secondary"><span></span><span>'),
    le = m('<img class="-order-1 w-6">');
const {
    account: j,
    bc: U,
    Decimal: ne,
    env: pt,
    NumberInput: se,
    systemUtils: ie
} = globalThis._bc.fcsy, vt = function() {
    const [i, a] = V({
        wages: 0,
        pensions: 0,
        benefits: 0,
        other: 0
    }), [c, r] = V({
        rent: 0,
        utility: 0,
        loans: 0,
        other: 0
    }), u = E(() => i.benefits + i.other + i.pensions + i.wages), n = E(() => [{
        label: () => t("Wages after deductions"),
        value: i.wages,
        onChange: o => a("wages", o)
    }, {
        label: () => t("Pensions"),
        value: i.pensions,
        onChange: o => a("pensions", o)
    }, {
        label: () => t("Benefits"),
        value: i.benefits,
        onChange: o => a("benefits", o)
    }, {
        label: () => t("Other income"),
        value: i.other,
        onChange: o => a("other", o)
    }, {
        label: () => t("Total income"),
        value: u(),
        onChange: o => {},
        isTotal: !0
    }]), s = E(() => c.loans + c.other + c.rent + c.utility), d = E(() => [{
        label: () => t("Rent/mortgage"),
        value: c.rent,
        onChange: o => r("rent", o)
    }, {
        label: () => t("Utility bills"),
        value: c.utility,
        onChange: o => r("utility", o)
    }, {
        label: () => t("Loans/credit"),
        value: c.loans,
        onChange: o => r("loans", o)
    }, {
        label: () => t("Other expenses"),
        value: c.other,
        onChange: o => r("other", o)
    }, {
        label: () => t("Total expenses"),
        value: s(),
        onChange: o => {},
        isTotal: !0
    }]);
    return (() => {
        var o = ht(),
            h = o.firstChild,
            v = h.firstChild,
            T = v.firstChild,
            S = v.nextSibling,
            k = S.firstChild,
            p = h.nextSibling,
            _ = p.nextSibling,
            L = _.firstChild,
            C = L.nextSibling,
            I = C.firstChild,
            M = I.nextSibling;
        return e(o, l($, {
            get when() {
                return !pt.mobile
            },
            get children() {
                var f = ft();
                return e(f, () => t("Budget Calculator")), f
            }
        }), h), e(T, () => t("Income")), e(v, l(B, {
            get each() {
                return n()
            },
            children: f => [(() => {
                var g = te(),
                    y = g.firstChild,
                    x = y.nextSibling;
                return e(y, () => f.label()), e(x, () => ie.printCurrency(new ne(f.value))), g
            })(), l(se, {
                get value() {
                    return f.value
                },
                get onChange() {
                    return f.onChange
                },
                class: "mt-1.5 w-full",
                placeholder: "0.00",
                get disabled() {
                    return f.isTotal
                },
                get children() {
                    var g = le();
                    return H(() => R(g, "src", U.coinIcon(j.setting.localeCurrencyName))), g
                }
            })]
        }), null), e(k, () => t("Expenses")), e(S, l(B, {
            get each() {
                return d()
            },
            children: f => [(() => {
                var g = te(),
                    y = g.firstChild,
                    x = y.nextSibling;
                return e(y, () => f.label()), e(x, () => ie.printCurrency(new ne(f.value))), g
            })(), l(se, {
                get value() {
                    return f.value
                },
                get onChange() {
                    return f.onChange
                },
                class: "mt-1.5 w-full",
                placeholder: "0.00",
                get disabled() {
                    return f.isTotal
                },
                get children() {
                    var g = le();
                    return H(() => R(g, "src", U.coinIcon(j.setting.localeCurrencyName))), g
                }
            })]
        }), null), e(L, () => t("Disposable income")), e(M, () => u() - s()), H(() => R(I, "src", U.coinIcon(j.setting.localeCurrencyName))), o
    })()
};
var xt = m('<span class="cursor-pointer text-brand underline">'),
    $t = m('<span class="inline-block max-w-40 text-warning">'),
    yt = m('<div class="flex justify-end">');
const {
    app: _t,
    getHttp: wt,
    Loading: St
} = globalThis._bc.fcsy;

function Ne(b) {
    const [i, a] = F(!1), [c, r] = F(!1), u = n => J(this, null, function*() {
        if (!i()) try {
            a(!0), yield wt().post("/user/gambling/limit/remove/", {
                id: n.id
            }), _t.emit("update-gambling-limit-list"), a(!1), r(!0)
        } catch (s) {
            a(!1)
        }
    });
    return l($, {
        get when() {
            return b.cat.limitStatus === 1 || c()
        },
        get fallback() {
            return (() => {
                var n = $t();
                return e(n, () => `${t("Expires at")} ${c()?Ct():new Date(b.cat.endTime).toLocaleString()}`), n
            })()
        },
        get children() {
            return l($, {
                get when() {
                    return !i()
                },
                get fallback() {
                    return (() => {
                        var n = yt();
                        return e(n, l(St, {})), n
                    })()
                },
                get children() {
                    var n = xt();
                    return n.$$click = () => u(b.cat), e(n, () => t("Remove")), n
                }
            })
        }
    })
}

function Ct() {
    const b = new Date;
    return new Date(b.getFullYear(), b.getMonth(), b.getDate() + 1).toLocaleString()
}
$e(["click"]);
var kt = m('<table class=w-full><thead class="border-b border-solid border-third"><tr class="h-10 text-secondary"><th class="pl-4 text-left"></th><th></th><th><div class="center flex h-10"><span></span></div></th><th><div class="center flex h-10"><span></span></div></th><th class="pr-4 text-right"></th></tr></thead><tbody class=text-primary>'),
    Tt = m('<tr><td class="pl-4 text-left"></td><td class="center flex h-14"><img alt=coin class="size-4 overflow-hidden"><span class=ml-1></span></td><td class=text-center><span class="inline-block max-w-40"></span></td><td class="center flex h-14"><img alt=coin class="size-4 overflow-hidden"><span class=ml-1></span><span class=ml-1></span></td><td class="pr-4 text-right">');
const {
    bc: re,
    Decimal: ae,
    Icon: oe,
    systemUtils: ce,
    Tooltip: ue
} = globalThis._bc.fcsy, Lt = function(i) {
    return l($, {
        get when() {
            return i.limitsList.length > 0
        },
        get children() {
            var a = kt(),
                c = a.firstChild,
                r = c.firstChild,
                u = r.firstChild,
                n = u.nextSibling,
                s = n.nextSibling,
                d = s.firstChild,
                o = d.firstChild,
                h = s.nextSibling,
                v = h.firstChild,
                T = v.firstChild,
                S = h.nextSibling,
                k = c.nextSibling;
            return e(u, () => t("Type")), e(n, () => t("Limit")), e(o, () => t("Reset Period")), e(d, l(ue, {
                get title() {
                    return t("If the chosen reset date is invalid, the limit will reset on the last day of the month.")
                },
                get children() {
                    return l(oe, {
                        name: "Info",
                        class: "ml-2 size-5 cursor-pointer text-secondary"
                    })
                }
            }), null), e(T, () => t("Progress")), e(v, l(ue, {
                get title() {
                    return t("There may be a certain delay in betting settlement.")
                },
                get children() {
                    return l(oe, {
                        name: "Info",
                        class: "ml-2 size-5 cursor-pointer text-secondary"
                    })
                }
            }), null), e(S, () => t("Action")), e(k, l(B, {
                get each() {
                    return i.limitsList
                },
                children: (p, _) => {
                    const L = p.amount || 0,
                        C = p.limitAmount || 0;
                    return (() => {
                        var I = Tt(),
                            M = I.firstChild,
                            f = M.nextSibling,
                            g = f.firstChild,
                            y = g.nextSibling,
                            x = f.nextSibling,
                            G = x.firstChild,
                            z = x.nextSibling,
                            q = z.firstChild,
                            D = q.nextSibling,
                            O = D.nextSibling,
                            w = z.nextSibling;
                        return e(M, () => Ce(p.limitType)), e(y, () => ce.toFiatStr(new ae(C), p.currencyName)), e(G, () => ke(p.startTime, p.limitPeriod)), e(D, () => ce.toFiatStr(new ae(Math.max(C - L, 0)), p.currencyName)), e(O, () => t("Left")), e(w, l(Ne, {
                            cat: p
                        })), H(N => {
                            var A = _() > 0 ? "h-14 border-b border-solid border-third" : "h-14",
                                Q = re.coinIcon(p.currencyName),
                                W = re.coinIcon(p.currencyName);
                            return A !== N.e && xe(I, N.e = A), Q !== N.t && R(g, "src", N.t = Q), W !== N.a && R(q, "src", N.a = W), N
                        }, {
                            e: void 0,
                            t: void 0,
                            a: void 0
                        }), I
                    })()
                }
            })), a
        }
    })
};
var It = m('<div class="mt-3 w-full rounded-md bg-white_alpha5 p-4"><div class=flex><div class="w-1/2 flex-none"><div class="text-xs font-extrabold text-secondary"></div><div class="mt-1 font-semibold text-primary"></div></div><div class="w-1/2 flex-none"><div class="flex items-center text-xs font-extrabold text-secondary"><span></span></div><div class="mt-1 font-semibold text-primary"></div></div></div><div class="mt-4 flex"><div class="w-1/2 flex-none"><div class="text-xs font-extrabold text-secondary"></div><div class="mt-1 flex items-center font-semibold text-primary"><img alt=coin class="size-4 overflow-hidden"><span class=ml-2></span></div></div><div class="w-1/2 flex-none"><div class="flex items-center text-xs font-extrabold text-secondary"><span></span></div><div class="mt-1 flex items-center font-semibold text-primary"><img alt=coin class="size-4 overflow-hidden"><span class=ml-2></span><span class=ml-2></span></div></div></div><div class=mt-4><div class="text-xs font-extrabold text-secondary"></div><div class=mt-1>'),
    de = m("<div class=w-80>");
const {
    bc: me,
    Decimal: ge,
    Icon: be,
    systemUtils: fe,
    Tooltip: he
} = globalThis._bc.fcsy, Nt = function(i) {
    return l($, {
        get when() {
            return i.limitsList.length > 0
        },
        get children() {
            return l(B, {
                get each() {
                    return i.limitsList
                },
                children: a => {
                    const c = a.amount || 0,
                        r = a.limitAmount || 0;
                    return (() => {
                        var u = It(),
                            n = u.firstChild,
                            s = n.firstChild,
                            d = s.firstChild,
                            o = d.nextSibling,
                            h = s.nextSibling,
                            v = h.firstChild,
                            T = v.firstChild,
                            S = v.nextSibling,
                            k = n.nextSibling,
                            p = k.firstChild,
                            _ = p.firstChild,
                            L = _.nextSibling,
                            C = L.firstChild,
                            I = C.nextSibling,
                            M = p.nextSibling,
                            f = M.firstChild,
                            g = f.firstChild,
                            y = f.nextSibling,
                            x = y.firstChild,
                            G = x.nextSibling,
                            z = G.nextSibling,
                            q = k.nextSibling,
                            D = q.firstChild,
                            O = D.nextSibling;
                        return e(d, () => t("Type")), e(o, () => Ce(a.limitType)), e(T, () => t("Reset Period")), e(v, l(he, {
                            get title() {
                                return (() => {
                                    var w = de();
                                    return e(w, () => t("If the chosen reset date is invalid, the limit will reset on the last day of the month.")), w
                                })()
                            },
                            get children() {
                                return l(be, {
                                    name: "Info",
                                    class: "ml-1 size-4 cursor-pointer text-secondary"
                                })
                            }
                        }), null), e(S, () => ke(a.startTime, a.limitPeriod)), e(_, () => t("Limit")), e(I, () => fe.toFiatStr(new ge(r), a.currencyName)), e(g, () => t("Progress")), e(f, l(he, {
                            get title() {
                                return (() => {
                                    var w = de();
                                    return e(w, () => t("There may be a certain delay in betting settlement.")), w
                                })()
                            },
                            get children() {
                                return l(be, {
                                    name: "Info",
                                    class: "ml-1 size-4 cursor-pointer text-secondary"
                                })
                            }
                        }), null), e(G, () => fe.toFiatStr(new ge(Math.max(r - c, 0)), a.currencyName)), e(z, () => t("Left")), e(D, () => t("Action")), e(O, l(Ne, {
                            cat: a
                        })), H(w => {
                            var N = me.coinIcon(a.currencyName),
                                A = me.coinIcon(a.currencyName);
                            return N !== w.e && R(C, "src", w.e = N), A !== w.t && R(x, "src", w.t = A), w
                        }, {
                            e: void 0,
                            t: void 0
                        }), u
                    })()
                }
            })
        }
    })
};
var Et = m('<div class="p-4 text-secondary"><p class="mt-0 font-extrabold text-primary"></p><p class="mb-0 mt-4"></p><p class="mb-0 mt-3"></p><p class="mb-0 mt-3">');
const {
    account: pe,
    app: Mt,
    Button: Ht,
    env: Rt,
    getHttp: Pt,
    toast: Bt,
    useNavigate: Dt
} = globalThis._bc.fcsy, At = function() {
    const i = Dt(),
        [a, c] = F(!1),
        [r, u] = F([]);
    K(() => {
        pe.login && n()
    });
    const n = () => {
        Pt().get("/user/gambling/limit/list/").then(s => {
            s && He(() => {
                u(s.settingList || []), c(s.selfExclusion)
            })
        }).catch(Bt)
    };
    return Mt.on("update-gambling-limit-list", () => {
        pe.login && n()
    }), (() => {
        var s = Et(),
            d = s.firstChild,
            o = d.nextSibling,
            h = o.nextSibling,
            v = h.nextSibling;
        return e(d, () => t("Gambling Limits")), e(s, l($, {
            get when() {
                return Rt.mobile
            },
            get fallback() {
                return l(Lt, {
                    get limitsList() {
                        return r()
                    }
                })
            },
            get children() {
                return l(Nt, {
                    get limitsList() {
                        return r()
                    }
                })
            }
        }), o), e(o, () => t("Gain control over your play or betting by using loss or wagering limits. These limits allow you to control the maximum loss or wagered amount over a daily, weekly or monthly period.")), e(h, () => t("Your limit will apply immediately and will reset when that time is reached. E.g. If you set a $100 daily loss limit at 2pm today, the limit will reset at 0:00 (UTC+0) tomorrow.")), e(v, () => t("The changes to remove your limits will updated at 0:00(UTC+0) of the next day.")), e(s, l(Ht, {
            class: "mt-3 w-full",
            type: "brand",
            onClick: () => i("/exclusion/setlimit"),
            get disabled() {
                return a()
            },
            get children() {
                return t("Set Gambling Limit")
            }
        }), null), s
    })()
};
var Ft = m('<div class="center flex w-full flex-col rounded-lg bg-layer4 px-4 pb-6 xl:w-[230px] xl:flex-none"><img alt=users class="mt-6 size-20"><div class="mt-4 text-base text-primary"></div><div class="mt-4 text-center text-secondary"></div><div class="text-center text-secondary">');
const {
    app: Gt,
    Button: zt,
    createAssets: qt
} = globalThis._bc.fcsy, Ee = function() {
    return (() => {
        var i = Ft(),
            a = i.firstChild,
            c = a.nextSibling,
            r = c.nextSibling,
            u = r.nextSibling;
        return e(c, () => t("Need Help?")), e(r, () => t("Have questions or concerns regarding your account?")), e(u, () => t("Our experts are here to help!")), e(i, l(zt, {
            type: "brand",
            class: "mt-4 w-full",
            onClick: () => Gt.emit("live_support", !0),
            get children() {
                return t("Chat with us")
            }
        }), null), H(() => R(a, "src", qt("/static/support.png")())), i
    })()
};
var Ot = m('<section class="sticky top-0 z-20 bg-layer2 py-4">'),
    jt = m('<div class="page-info mb-4 rounded-xl bg-layer4">'),
    Ut = m("<label>");
const {
    Dialog: Vt,
    Select: Yt,
    useNavigate: Kt
} = globalThis._bc.fcsy, Qt = ["self-exclusion", "gambling-limits"], Wt = function(i) {
    const a = Te(),
        c = Kt(),
        r = E(() => Object.keys(i.routesMap));
    K(() => {
        Object.keys(i.routesMap).find(d => d === a.responsibleId) || c("/responsible/faq")
    });
    const u = () => {
            const s = Object.keys(i.routesMap).find(d => d === a.responsibleId);
            return {
                key: s || "faq",
                value: s ? i.routesMap[s] : i.routesMap.faq
            }
        },
        n = E(() => Qt.includes(u().key));
    return l(Vt, {
        get title() {
            return t("Responsible Gambling")
        },
        get children() {
            return [(() => {
                var s = Ot();
                return e(s, l(Yt, {
                    class: "w-full",
                    get value() {
                        return u().key
                    },
                    get options() {
                        return r()
                    },
                    onChange: d => {
                        c(`/responsible/${d}`, {
                            replace: !0
                        })
                    },
                    children: d => (() => {
                        var o = Ut();
                        return e(o, () => {
                            var h;
                            return (h = i.routesMap[d()]) == null ? void 0 : h.label()
                        }), o
                    })()
                })), s
            })(), (() => {
                var s = jt();
                return e(s, l(ye, {
                    get children() {
                        return u().value.element()
                    }
                })), s
            })(), l($, {
                get when() {
                    return n()
                },
                get children() {
                    return l(Ee, {})
                }
            })]
        }
    })
};
var Jt = m('<section class="flex gap-1"><span>'),
    Xt = m('<div class="flex flex-col items-start gap-4 xl:flex-row"><div class="rounded-xl bg-layer4">'),
    Zt = m('<label class="-mt-8 block w-60 bg-layer2 pb-4 pt-8">'),
    el = m('<div class="rounded-xl bg-layer4">');
const {
    Loading: tl,
    TMCLayout: ll,
    useNavigate: nl
} = globalThis._bc.fcsy, sl = ["self-exclusion", "gambling-limits"], il = function(i) {
    const a = nl(),
        c = Te();
    K(() => {
        Object.keys(i.routesMap).find(s => s === c.responsibleId) || a("/responsible/faq")
    });
    const r = E(() => Object.keys(i.routesMap).map(n => ({
            href: `/responsible/${n}`,
            title: (() => {
                var s = Jt(),
                    d = s.firstChild;
                return e(s, l(Y, {
                    get name() {
                        return i.routesMap[n].iconName
                    },
                    class: "size-5"
                }), d), e(d, () => i.routesMap[n].label()), s
            })()
        }))),
        u = E(() => sl.includes(c.responsibleId));
    return l(ll, {
        get title() {
            return (() => {
                var n = Zt();
                return e(n, () => t("Responsible Gambling")), n
            })()
        },
        get menu() {
            return r()
        },
        get children() {
            return l(ye, {
                get fallback() {
                    return l(tl, {
                        class: "relative left-1/2 top-60"
                    })
                },
                get children() {
                    return l($, {
                        get when() {
                            return u()
                        },
                        get fallback() {
                            return (() => {
                                var n = el();
                                return e(n, () => {
                                    var s;
                                    return (s = i.routesMap[c.responsibleId]) == null ? void 0 : s.element()
                                }), n
                            })()
                        },
                        get children() {
                            var n = Xt(),
                                s = n.firstChild;
                            return e(s, () => {
                                var d;
                                return (d = i.routesMap[c.responsibleId]) == null ? void 0 : d.element()
                            }), e(n, l($, {
                                get when() {
                                    return u()
                                },
                                get children() {
                                    return l(Ee, {})
                                }
                            }), null), n
                        }
                    })
                }
            })
        }
    })
}, {
    env: rl
} = globalThis._bc.fcsy, xl = function(i) {
    return l($, {
        get when() {
            return rl.mobile
        },
        get fallback() {
            return l(il, {
                get routesMap() {
                    return ve()
                }
            })
        },
        get children() {
            return l(Wt, {
                get routesMap() {
                    return ve()
                }
            })
        }
    })
};

function ve() {
    return {
        faq: {
            label: () => t("FAQ's"),
            link: "/responsible/faq",
            iconName: "Faq",
            element: () => l(ze, {})
        },
        "self-assessment": {
            label: () => t("Self-Assessment"),
            link: "/responsible/self-assessment",
            iconName: "Book",
            element: () => l(bt, {})
        },
        "gambling-limits": {
            label: () => t("Gambling Limits"),
            link: "/gambling-limits",
            iconName: "GamblingLimits",
            element: () => l(At, {})
        },
        "self-exclusion": {
            label: () => t("Self-exclusion"),
            link: "/responsible/self-exclusion",
            iconName: "SelfExclusion",
            element: () => l(mt, {})
        },
        "budget-calculator": {
            label: () => t("Budget Calculator"),
            link: "/responsible/budget-calculator",
            iconName: "TermsOfService",
            element: () => l(vt, {})
        }
    }
}
export {
    xl as
    default
};