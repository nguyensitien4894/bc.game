import {
    i as n,
    c as t,
    e as w,
    s as k,
    t as u,
    b as E,
    d as P,
    m as v
} from "./web-46c35164.js";
import {
    G as C,
    B as d,
    p as c,
    c as G,
    I as B,
    a as A,
    D as T,
    u as x,
    J as M,
    j as L,
    P as U
} from "./manifest-d92afe19.js";
import {
    S as $,
    m as Y,
    j as R,
    c as V,
    F as N,
    o as j
} from "./solid-js-871c99e1.js";
import {
    A as f
} from "./animate-number-04f5b3b8.js";
import {
    t as a
} from "./i18n-fd9a94dd.js";
import {
    f as S
} from "./index-a51223a0.js";
import {
    D
} from "./index-d963c58c.js";
var m = (r => (r.Money = "Money", r.LuckySpin = "LuckySpin", r.FreeSpin = "FreeSpin", r.Lottery = "Lottery", r.Deposit = "DepositBonus", r.FreeBets = "FreeBet", r))(m || {}),
    W = u('<img class="relative -top-6 -z-10 size-[20rem] opacity-50">'),
    K = u('<div class="relative z-0 flex h-[16.5rem] justify-center"><img class="absolute left-0 top-0 w-full">');
const p = r => (() => {
    var s = K(),
        e = s.firstChild;
    return n(s, t($, {
        get when() {
            return r.shine
        },
        get children() {
            var i = W();
            return i.style.setProperty("animation", "spin 10s infinite linear"), w(() => k(i, "src", S.bonus_link_light)), i
        }
    }), null), w(() => k(e, "src", S.bonus_link_banner)), s
})();
var q = u('<div class="flex flex-col items-center text-lg font-extrabold text-primary"><p class=uppercase>!</p><p class="">!'),
    H = u('<div class="flex min-h-16 items-center justify-center rounded-xl bg-layer3 px-3 py-2">'),
    J = u('<div><div class="text-2xl font-extrabold text-alw_white"></div><div class="relative z-10">'),
    X = u("<p>1."),
    y = u("<p class=mb-2>"),
    Q = u("<p>2."),
    Z = u("<p>3."),
    ee = u('<div class="flex flex-col gap-1 font-semibold text-secondary">'),
    te = u("<div>"),
    _ = u('<p class="text-center text-lg font-extrabold uppercase text-primary">'),
    re = u('<p class="flex items-center justify-center gap-x-1 text-3xl font-extrabold text-warning_brighter">'),
    ne = u('<div class="flex flex-col gap-y-2 text-center text-base font-extrabold text-alw_white">'),
    le = u("<p>"),
    z = u('<div><p class="text-center text-lg uppercase">'),
    F = u('<p class="text-center text-3xl font-extrabold text-warning_brighter"> '),
    b = u('<div class="text-center text-base font-extrabold">'),
    I = u('<p class="text-center text-3xl font-extrabold text-warning_brighter">'),
    ae = u('<p class="text-center text-3xl font-extrabold text-warning_brighter"> <!> ');
const $e = r => t(h, {
        get header() {
            return t(p, {})
        },
        get content() {
            return (() => {
                var s = q(),
                    e = s.firstChild,
                    i = e.firstChild,
                    o = e.nextSibling,
                    l = o.firstChild;
                return n(e, () => a("CONGRATULATIONS!"), i), n(o, () => a("You got a bonus link!"), l), s
            })()
        },
        get footer() {
            return t(C, {
                get href() {
                    return `/login/signin?redirect=/shitlink/${r.code}`
                },
                get children() {
                    return t(d, {
                        onClick: () => c.pop(),
                        type: "brand",
                        size: "l",
                        class: "w-full text-lg font-extrabold",
                        get children() {
                            return a("Sign In & Claim")
                        }
                    })
                }
            })
        }
    }),
    _e = r => {
        const s = Y({
            rewardOpened: !1
        }, r);
        return (() => {
            switch (s.rewardType) {
                case m.Money:
                    return t(se, s);
                case m.LuckySpin:
                    return t(ue, s);
                case m.FreeSpin:
                    return t(ge, s);
                case m.Deposit:
                    return t(oe, s);
                case m.Lottery:
                    return t(ce, s);
                case m.FreeBets:
                    return t(ie, s)
            }
        })()
    },
    h = r => {
        const [s, e] = R(r, ["header", "content", "footer", "mainContent"]);
        return (() => {
            var i = J(),
                o = i.firstChild,
                l = o.nextSibling;
            return E(i, P(e, {
                get class() {
                    return G("-mx-4 -mb-4 flex flex-col gap-y-4 overflow-hidden rounded-lg !bg-layer2 px-4 pb-4 text-alw_white", e.class)
                }
            }), !1, !0), n(i, t(d, {
                onClick: () => c.pop(),
                size: "xs",
                type: "second",
                class: "absolute right-3 top-3 z-10 !px-1",
                get children() {
                    return t(B, {
                        class: "size-4 text-tertiary",
                        name: "Close"
                    })
                }
            }), o), n(i, () => s.header, o), n(o, () => s.content), n(i, t($, {
                get when() {
                    return r.mainContent
                },
                get children() {
                    var g = H();
                    return n(g, () => r.mainContent), g
                }
            }), l), n(l, () => s.footer), i
        })()
    },
    se = r => {
        const s = (o, l) => {
                const g = [l.welcome ? a("Welcome Bonus") : a("CONGRATS! YOU’VE CLAIMED")],
                    O = l.kycLevel ? [a("Complete basic KYC in 24 hours and the bonus will be sent to your balance"), a("Wish you super luck and have fun!"), t(C, {
                        get href() {
                            return L.login ? `/settings/verify/${l.kycLevelName||"basic-kyc-level"}` : "/login/regist"
                        },
                        class: "mt-4 block",
                        get children() {
                            return t(d, {
                                onClick: () => c.pop(),
                                type: "brand",
                                size: "l",
                                class: "w-full text-lg",
                                get children() {
                                    return a("Go KYC")
                                }
                            })
                        }
                    })] : [t($, {
                        get when() {
                            return r.isDubai
                        },
                        get fallback() {
                            return t(C, {
                                get href() {
                                    return L.login ? "/wallet/balance" : "/login/regist"
                                },
                                get children() {
                                    return t(d, {
                                        onClick: () => c.pop(),
                                        type: "brand",
                                        size: "l",
                                        class: "w-full text-lg",
                                        get children() {
                                            return a("Got it")
                                        }
                                    })
                                }
                            })
                        },
                        get children() {
                            return t(d, {
                                onClick: () => c.pop(),
                                type: "brand",
                                size: "l",
                                class: "w-full text-lg",
                                get children() {
                                    return a("Got it")
                                }
                            })
                        }
                    })];
                return {
                    contentCongratsTexts: g,
                    footerTexts: O
                }
            },
            e = V(() => s(r.currency, {
                welcome: r.welcome,
                kycLevel: r.kycLevel,
                kycLevelName: r.kycLevelName
            })),
            i = () => {
                const o = () => [(() => {
                    var l = X();
                    return l.firstChild, n(l, () => a("What is BCD?"), null), l
                })(), (() => {
                    var l = y();
                    return n(l, () => a("BCD is a unique and exclusive currency launched by BC Game that can be exchanged with USDT at a 1:1 ratio.")), l
                })(), (() => {
                    var l = Q();
                    return l.firstChild, n(l, () => a("Can BCD be exchanged for other currencies?"), null), l
                })(), (() => {
                    var l = y();
                    return n(l, () => a("Absolutely! You can swap BCD for other currencies at any time using BC.GAME Swap.")), l
                })(), (() => {
                    var l = Z();
                    return l.firstChild, n(l, () => a("What makes BCD special?"), null), l
                })(), (() => {
                    var l = y();
                    return n(l, () => a("When you store your BCD in Vault Pro, you can enjoy up to 10% annualized return on your holdings. Start collecting BCD today!")), l
                })()];
                return c.push(() => t(U, {
                    get children() {
                        var l = ee();
                        return n(l, t(o, {})), l
                    }
                }))
            };
        return t(h, {
            get header() {
                return t(p, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var o = te();
                    return n(o, t(N, {
                        get each() {
                            return e().contentCongratsTexts
                        },
                        children: l => (() => {
                            var g = _();
                            return n(g, l), g
                        })()
                    })), o
                })()
            },
            get mainContent() {
                return (() => {
                    var o = re();
                    return n(o, () => A.printCurrency(new T(Number(r.amount)), r.currency, {
                        target: r.currency
                    }), null), n(o, (() => {
                        var l = v(() => r.currency === "BCD");
                        return () => l() && t(B, {
                            class: "w-5 cursor-pointer text-secondary",
                            name: "Help",
                            onClick: i
                        })
                    })(), null), o
                })()
            },
            get footer() {
                return (() => {
                    var o = ne();
                    return n(o, t(N, {
                        get each() {
                            return e().footerTexts
                        },
                        children: l => t($, {
                            when: l,
                            get children() {
                                var g = le();
                                return n(g, l), g
                            }
                        })
                    })), o
                })()
            }
        })
    },
    ie = r => {
        const s = x();
        return t(h, {
            get header() {
                return t(p, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var e = z(),
                        i = e.firstChild;
                    return n(i, () => a("CONGRATS! YOU’VE CLAIMED")), e
                })()
            },
            get mainContent() {
                return (() => {
                    var e = F(),
                        i = e.firstChild;
                    return n(e, t(f, {
                        class: "mr-1 font-extrabold",
                        duration: 1500,
                        get numbers() {
                            return [0, Number(r.stringAmount)]
                        },
                        children: o => `${Number(o)}`
                    }), i), n(e, () => A.getAlias(r.currencyName), i), n(e, () => a("Free Bet"), null), e
                })()
            },
            get footer() {
                return (() => {
                    var e = b();
                    return n(e, t(d, {
                        type: "brand",
                        size: "l",
                        class: "w-full text-lg",
                        onClick: () => {
                            M("setting", "currencyName", r.currencyName), s("/sports?bt-path=%2Fbets"), c.pop()
                        },
                        get children() {
                            return a("Play Now")
                        }
                    })), e
                })()
            }
        })
    },
    oe = r => {
        const s = x();
        return j(() => {
            D.useCurrentDepositItem()[1].refetch(), D.useDepositProgress()[1].refetch()
        }), t(h, {
            get header() {
                return t(p, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var e = z(),
                        i = e.firstChild;
                    return n(i, () => a("CONGRATS! YOU’VE CLAIMED")), e
                })()
            },
            get mainContent() {
                return (() => {
                    var e = I();
                    return n(e, t(f, {
                        class: "mr-1 font-mono",
                        duration: 1e3,
                        get numbers() {
                            return [0, r.percentage]
                        },
                        children: i => `${Number(i).toFixed(0)}%`
                    }), null), n(e, () => a("Limited Time Deposit Bonus"), null), e
                })()
            },
            get footer() {
                return (() => {
                    var e = b();
                    return n(e, t(d, {
                        type: "brand",
                        size: "l",
                        class: "w-full text-lg",
                        onClick: () => {
                            s("/wallet/deposit"), c.pop()
                        },
                        get children() {
                            return a("Deposit Now")
                        }
                    })), e
                })()
            }
        })
    },
    ue = r => {
        const s = x();
        return t(h, {
            get header() {
                return t(p, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var e = _();
                    return n(e, () => a("CONGRATS! YOU’VE CLAIMED")), e
                })()
            },
            get mainContent() {
                return (() => {
                    var e = F(),
                        i = e.firstChild;
                    return n(e, t(f, {
                        class: "font-extrabold",
                        duration: 1500,
                        get numbers() {
                            return [0, Number(r.amount)]
                        },
                        children: o => `${Number(o).toFixed(0)}`
                    }), i), n(e, () => a("Lucky Spins"), null), e
                })()
            },
            get footer() {
                return (() => {
                    var e = b();
                    return n(e, t(d, {
                        type: "brand",
                        class: "w-full text-lg",
                        size: "l",
                        onClick: () => {
                            s("/new-spin"), c.pop()
                        },
                        get children() {
                            return [v(() => a("Spin Now")), "!"]
                        }
                    })), e
                })()
            }
        })
    },
    ce = r => {
        const s = x();
        return t(h, {
            get header() {
                return t(p, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var e = _();
                    return n(e, () => a("CONGRATS! YOU’VE CLAIMED")), e
                })()
            },
            get mainContent() {
                return (() => {
                    var e = ae(),
                        i = e.firstChild,
                        o = i.nextSibling;
                    return o.nextSibling, n(e, t(f, {
                        class: "font-extrabold",
                        duration: 1e3,
                        get numbers() {
                            return [0, Number(r.amount)]
                        },
                        children: l => `${Number(l).toFixed(0)}`
                    }), i), n(e, () => a("Lottery"), o), n(e, () => a("Tickets"), null), e
                })()
            },
            get footer() {
                return (() => {
                    var e = b();
                    return n(e, t(d, {
                        type: "brand",
                        class: "w-full text-lg",
                        size: "l",
                        onClick: () => {
                            s("/lottery/myBets"), c.pop()
                        },
                        get children() {
                            return a("Go to Lottery")
                        }
                    })), e
                })()
            }
        })
    },
    ge = r => {
        const s = x();
        return t(h, {
            get header() {
                return t(p, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var e = _();
                    return n(e, () => a("CONGRATS! YOU’VE CLAIMED")), e
                })()
            },
            get mainContent() {
                return (() => {
                    var e = I();
                    return n(e, t(f, {
                        class: "mr-1 font-extrabold",
                        duration: 1500,
                        get numbers() {
                            return [0, Number(r.amount)]
                        },
                        children: i => `${Number(i).toFixed(0)}X`
                    }), null), n(e, () => a("Free Spins"), null), e
                })()
            },
            get footer() {
                return (() => {
                    var e = b();
                    return n(e, t(d, {
                        type: "brand",
                        class: "w-full text-lg",
                        size: "l",
                        onClick: () => {
                            c.pop(), r.gameId && (r.gameId.includes("detrade:trading") ? s("/trading") : s(`/game/${r.gameId}?fsId=${r.fsId}&currency=${r.currencyName}`))
                        },
                        get children() {
                            return [v(() => a("Play Now")), "!"]
                        }
                    })), e
                })()
            }
        })
    };
export {
    _e as B, $e as P, m as R
};