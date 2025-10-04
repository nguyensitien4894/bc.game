import "./index-DxYPFwcM.js";
import {
    d as F,
    m as _,
    K as se,
    v as c,
    x as l,
    k as e,
    G as I,
    D as O,
    E as M,
    as as ve,
    b,
    X as v,
    I as q,
    F as _e,
    a1 as $e,
    ak as xe,
    f as le,
    N as be,
    al as ye,
    h as ae,
    a9 as we,
    J as Se,
    Y as Ie,
    Z as G
} from "./vendor-CR7NILRE.js";
import {
    h as z,
    v as oe,
    aq as ie,
    ar as ke,
    I as ce,
    b as D,
    as as ue,
    X as N,
    G as B,
    L as E,
    t as U,
    B as T,
    T as y,
    i as de,
    q as X,
    a as P,
    y as Ce,
    at as Le,
    l as Z
} from "./common-jbtJucx3.js";
import {
    t as f,
    a as L,
    c as Ne,
    e as ge,
    f as Re,
    g as Pe,
    h as me,
    i as he,
    j as J,
    k as K,
    r as Te
} from "./Application-CExkuTua.js";
import {
    I as pe
} from "./Icon-svKk6S1K.js";
import {
    S as Fe,
    u as De,
    a as Be
} from "./index-BVvvefcR.js";
import {
    C as Ee
} from "./ClearAll-D93kkivu.js";
import {
    u as H
} from "./other-B2ewBnyu.js";
const je = () => [{
        label: f("All Games"),
        value: "allgames",
        iconname: "Home"
    }, {
        label: f("__ENV_SITE__ Originals"),
        value: "original",
        iconname: "Classicdice"
    }, {
        label: f("Hot Games"),
        value: "hot",
        iconname: "Hot"
    }, {
        label: f("Slots"),
        value: "slots",
        iconname: "Slots"
    }, {
        label: f("Live Casino"),
        value: "live",
        iconname: "Live",
        hidden: z.isUsHost
    }, {
        label: f("Table Game"),
        value: "table",
        iconname: "Tablegame"
    }, {
        label: f("New Releases"),
        value: "newreleases",
        iconname: "Newreleases"
    }, {
        label: f("Poker"),
        value: "poker",
        iconname: "Poker"
    }, {
        label: f("Feature Buy-in"),
        value: "feature",
        iconname: "Featurebuyin",
        hidden: z.isUsHost
    }, {
        label: f("Providers"),
        value: "providers",
        iconname: "Favorites"
    }].filter(r => !r.hidden),
    Ae = () => [{
        label: f("Popular"),
        value: ""
    }, {
        label: f("Newest"),
        value: "new"
    }, {
        label: "A-Z",
        value: "a-z"
    }, {
        label: "Z-A",
        value: "z-a"
    }];
var Ge = c('<div class="w-full overflow-x-auto hide-scroll"><div class="flex flex-nowrap items-center gap-1 !p-0">'),
    Me = c("<button><span>");
const fe = function(r) {
    const o = _(() => je()),
        d = _(() => o().find(m => m.value === r.tab) || o()[0]),
        a = se(() => d().value);
    return (() => {
        var m = Ge(),
            h = m.firstChild;
        return l(h, e(Fe, {
            get activeIndex() {
                return ve(o(), d())
            },
            get children() {
                return e(I, {
                    get each() {
                        return o()
                    },
                    children: g => (() => {
                        var n = Me(),
                            i = n.firstChild;
                        return n.$$click = s => {
                            s.preventDefault(), r.setTab(g.value)
                        }, l(n, e(pe, {
                            get name() {
                                return g.iconname
                            },
                            get class() {
                                return `flex-none h-4.5 w-4.5 ${a(g.value)?"text-brand":"text-secondary"}`
                            }
                        }), i), l(i, () => g.label), O(s => {
                            var t = `flex h-10 items-center justify-center rounded-lg px-2 py-0 sm:hover:bg-layer3 ${a(g.value)&&"!bg-tab_selected"}`,
                                u = `whitespace-nowrap ml-1 ${a(g.value)?"font-extrabold":"text-secondary"}`;
                            return t !== s.e && M(n, s.e = t), u !== s.t && M(i, s.t = u), s
                        }, {
                            e: void 0,
                            t: void 0
                        }), n
                    })()
                })
            }
        })), m
    })()
};
F(["click"]);
var ze = c('<div class="mt-2 flex w-full items-center gap-2 sm:w-auto">'),
    He = c('<span class="whitespace-nowrap text-secondary">:'),
    Oe = c('<span class="font-semibold ml-1">'),
    qe = c('<span class="mr-1 text-secondary">'),
    Ue = c("<span>"),
    Ve = c("<div class=mb-1>"),
    We = c('<div class="flex h-10 overflow-hidden center">');
const V = function(r) {
    let o = !0;
    const d = Ae(),
        [a, m] = b(""),
        h = _(() => {
            const i = a().toLowerCase();
            return i ? r.providers.filter(s => (s.providerLangName || s.providerName).toLowerCase().includes(i)) : r.providers
        }),
        g = oe("/logo/logo.png"),
        n = _(() => d.find(i => i.value === r.selectSortBy) || d[0]);
    return (() => {
        var i = ze();
        return l(i, e(v, {
            get when() {
                return !r.search
            },
            get children() {
                return e(ie, {
                    get value() {
                        return n()
                    },
                    options: d,
                    onChange: s => {
                        r.changeSelectSortBy(s.value)
                    },
                    class: "flex-1 sm:w-[288px] sm:flex-none",
                    labelFormat: s => [(() => {
                        var t = He(),
                            u = t.firstChild;
                        return l(t, () => f("Sort By"), u), t
                    })(), (() => {
                        var t = Oe();
                        return l(t, () => s().label), t
                    })()],
                    children: s => s().label
                })
            }
        }), null), l(i, e(v, {
            get when() {
                return r.providers.length > 0
            },
            get children() {
                return e(ke, {
                    throttle: 1500,
                    class: "flex-1 sm:w-[288px] sm:flex-none",
                    get value() {
                        return r.selectProvider
                    },
                    get options() {
                        return h()
                    },
                    onChange: s => {
                        s && r.changeSelectProvider(s), o || L.trackEvent("provider_filter", {
                            providers_filter: s.map(t => t.providerName),
                            section_id: r.section_id
                        }), o = !1
                    },
                    labelFormat: s => [(() => {
                        var t = qe();
                        return l(t, () => f("Providers") + ":"), t
                    })(), (() => {
                        var t = Ue();
                        return l(t, (() => {
                            var u = q(() => s().length > 0);
                            return () => u() ? "+" + s().length : f("All")
                        })()), t
                    })()],
                    layerRender: s => [(() => {
                        var t = Ve();
                        return l(t, e(ue, {
                            class: "h-11",
                            get value() {
                                return a()
                            },
                            get placeholder() {
                                return f("Search")
                            },
                            onChange: m,
                            get children() {
                                return e(N, {
                                    name: "Search",
                                    class: "order-first mr-2 h-6 w-6 text-tertiary"
                                })
                            }
                        })), t
                    })(), s, e(Ee, {
                        onClear: () => r.changeSelectProvider([])
                    })],
                    children: s => {
                        const t = s().providerName.includes("BC Originals");
                        return (() => {
                            var u = We();
                            return l(u, e(ce, {
                                class: "h-auto w-24",
                                alt: "provider",
                                args: "w=200",
                                get src() {
                                    return t ? g() : D.darken ? s().logo : s().logoWhite
                                }
                            })), u
                        })()
                    }
                })
            }
        }), null), i
    })()
};
var Xe = c("<div class=w-full>"),
    Ze = c('<div class="mt-4 flex w-full items-center justify-center px-4 h-16"><span class="text-center font-semibold text-error">'),
    Je = c('<div class="mt-4 flex h-40 w-full items-center justify-center">'),
    Ke = c('<div class="mt-4 flex h-64 w-full items-center justify-center">');
const Ye = function(r) {
    const [o, d] = b(""), [a, m] = b([]), h = _(() => {
        if (!r.searchResult || r.searchResult.length <= 0) return [];
        if (!r.providers || r.providers.length <= 0) return [];
        let n = [];
        return r.searchResult.map(i => {
            const s = r.providers.find(t => t.providerName == i.providerName);
            s && n.findIndex(u => u.providerId === s.providerId) < 0 && n.push(s)
        }), n
    }), g = _(() => {
        if (a().length <= 0) return r.searchResult;
        const n = a().map(i => i.providerName);
        return r.searchResult.filter(i => n.includes(i.providerName))
    });
    return [e(V, {
        get selectSortBy() {
            return o()
        },
        changeSelectSortBy: d,
        get selectProvider() {
            return a()
        },
        changeSelectProvider: m,
        get providers() {
            return h()
        },
        get section_id() {
            return r.section_id
        },
        search: !0
    }), e(v, {
        get when() {
            return r.search && r.search.length > 2
        },
        get fallback() {
            return (() => {
                var n = Ze(),
                    i = n.firstChild;
                return l(i, () => f("Search requires at least 3 characters")), n
            })()
        },
        get children() {
            return e(v, {
                get when() {
                    return !r.searching
                },
                get fallback() {
                    return (() => {
                        var n = Je();
                        return l(n, e(E, {})), n
                    })()
                },
                get children() {
                    return e(v, {
                        get when() {
                            return r.searchResult.length > 0
                        },
                        get fallback() {
                            return (() => {
                                var n = Ke();
                                return l(n, e(B, {})), n
                            })()
                        },
                        get children() {
                            var n = Xe();
                            return l(n, e(Ne, {
                                get list() {
                                    return g()
                                },
                                get track() {
                                    return {
                                        search_module: "explore search",
                                        key_words: r.search,
                                        is_filter_provider: a().length !== 0
                                    }
                                }
                            })), n
                        }
                    })
                }
            })
        }
    })]
};
var Qe = c("<div class=mt-4>"),
    et = c('<div class="mt-4 w-full">');
const tt = function(r) {
    const [o, d] = b("allgames"), [a, m] = De(() => r.search, {
        search_module: "explore search",
        side_filter: "Casino"
    }), h = _(() => o() === "slots" ? H(1)() : o() === "live" ? H(4)() : r.providers), g = _(() => {
        if (m()) return [];
        switch (o()) {
            case "allgames":
                return a();
            case "original":
                return a().filter(n => n.categoryName.includes("Original"));
            case "slots":
                return a().filter(n => n.categoryName.includes("Slots"));
            case "live":
                return a().filter(n => n.categoryName.includes("Live"));
            case "hot":
                return a().filter(n => n.retrieveId.includes("hot"));
            case "newreleases":
                return a().filter(n => n.retrieveId.includes("new_game"));
            default:
                return []
        }
    });
    return (() => {
        var n = et();
        return l(n, e(fe, {
            get tab() {
                return o()
            },
            setTab: d
        }), null), l(n, e(v, {
            get when() {
                return o() === "toppicks" || o() === "providers"
            },
            get fallback() {
                return e(Ye, {
                    get providers() {
                        return h()
                    },
                    get section_id() {
                        return "explore_" + o()
                    },
                    get search() {
                        return r.search
                    },
                    get searching() {
                        return m()
                    },
                    get searchResult() {
                        return g()
                    }
                })
            },
            get children() {
                var i = Qe();
                return l(i, e(B, {})), i
            }
        }), null), n
    })()
};
var rt = c("<div class=w-full>");
const nt = function(r) {
    const [o, d] = b(""), [a, m] = b([]), h = _(() => {
        if (!a() || a().length <= 0) return "";
        let g = [];
        return a().map(n => g.push(n.providerName)), g.join(",")
    });
    return [e(V, {
        get selectSortBy() {
            return o()
        },
        changeSelectSortBy: d,
        get selectProvider() {
            return a()
        },
        changeSelectProvider: m,
        get providers() {
            return r.providers
        },
        section_id: "explore_all"
    }), (() => {
        var g = rt();
        return l(g, e(ge, {
            section_id: "explore_allgames",
            get source() {
                return {
                    sortBy: o(),
                    providerNames: h()
                }
            }
        })), g
    })()]
};
var st = c('<div class="grid w-full gap-2 grid-cols-2 pt-2 sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">'),
    lt = c('<div class="mt-2 flex w-full items-center justify-center h-60">'),
    at = c('<img class="h-8 w-auto"alt=provider>');
const ot = function(r) {
        const o = U(),
            d = oe("/logo/logo.png");
        return e(v, {
            get when() {
                return r.providers.length > 0
            },
            get fallback() {
                return (() => {
                    var a = lt();
                    return l(a, e(E, {})), a
                })()
            },
            get children() {
                var a = st();
                return l(a, e(I, {
                    get each() {
                        return r.providers
                    },
                    children: m => e(T, {
                        class: "rounded-xl bg-layer4 h-16 p-0",
                        onClick: () => o(`/provider/${m.providerName}`),
                        get children() {
                            return e(v, {
                                get when() {
                                    return m.providerName.includes("BC Originals")
                                },
                                get fallback() {
                                    return e(ce, {
                                        class: "h-9 w-auto",
                                        alt: "provider",
                                        get src() {
                                            return D.darken ? m.logo : m.logoWhite
                                        },
                                        args: "w=200"
                                    })
                                },
                                get children() {
                                    var h = at();
                                    return O(() => _e(h, "src", d())), h
                                }
                            })
                        }
                    })
                })), a
            }
        })
    },
    k = function(r) {
        return e(Re, {
            get section_id() {
                return r.section_id
            },
            get source() {
                return {
                    sectionName: r.selectionName
                }
            }
        })
    };
var it = c("<div class=w-full>");
const Y = function(r) {
    const o = _(() => r.category === "slots" ? 1 : 4),
        d = _(() => r.category === "slots" ? "explore_slots" : "explore_live"),
        [a, m] = b(""),
        h = H(o()),
        [g, n] = b([]),
        i = _(() => {
            let s = [];
            return g().map(t => s.push(t.providerName)), s.join(",")
        });
    return [e(V, {
        get selectSortBy() {
            return a()
        },
        changeSelectSortBy: m,
        get selectProvider() {
            return g()
        },
        changeSelectProvider: n,
        get providers() {
            return h()
        },
        get section_id() {
            return "explore_" + r.category
        }
    }), (() => {
        var s = it();
        return l(s, e(ge, {
            get section_id() {
                return d()
            },
            get source() {
                return {
                    sortBy: a(),
                    providerNames: i(),
                    categoryIds: String(o())
                }
            }
        })), s
    })()]
};
var ct = c('<div class="casino-games-tab mt-4 w-full">');

function ut($) {
    switch ($) {
        case "allgames":
            return 0;
        case "original":
            return 1;
        case "hot":
            return 2;
        case "slots":
            return 3;
        case "live":
            return 4;
        case "table":
            return 5;
        case "newreleases":
            return 6;
        case "poker":
            return 7;
        case "feature":
            return 8;
        case "providers":
            return 9;
        default:
            return 0
    }
}
const dt = function(r) {
        const [o, d] = b("allgames");
        return (() => {
            var a = ct();
            return l(a, e(fe, {
                get tab() {
                    return o()
                },
                setTab: d
            }), null), l(a, e(y, {
                get value() {
                    return ut(o())
                },
                class: "hidden",
                get children() {
                    return [e(y.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(nt, {
                                get providers() {
                                    return r.providers
                                }
                            })
                        }
                    }), e(y.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(k, {
                                section_id: "explore_originals",
                                selectionName: "originals"
                            })
                        }
                    }), e(y.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(k, {
                                section_id: "explore_hot",
                                selectionName: "hot_games"
                            })
                        }
                    }), e(y.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(Y, {
                                category: "slots"
                            })
                        }
                    }), e(y.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(Y, {
                                category: "live"
                            })
                        }
                    }), e(y.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(k, {
                                section_id: "explore_table",
                                selectionName: "table_games"
                            })
                        }
                    }), e(y.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(k, {
                                section_id: "explore_new",
                                selectionName: "new"
                            })
                        }
                    }), e(y.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(k, {
                                section_id: "explore_poker",
                                selectionName: "poker"
                            })
                        }
                    }), e(y.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(k, {
                                section_id: "explore_featurebuyin",
                                selectionName: "feature_buyin"
                            })
                        }
                    }), e(y.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(ot, {
                                get providers() {
                                    return r.providers
                                }
                            })
                        }
                    })]
                }
            }), null), a
        })()
    },
    gt = function(r) {
        const [o] = Pe();
        return e($e, {
            get children() {
                return e(v, {
                    get when() {
                        return !!r.search
                    },
                    get fallback() {
                        return e(dt, {
                            get providers() {
                                return o() ? .[0].providerList ? .list || []
                            }
                        })
                    },
                    get children() {
                        return e(tt, {
                            get search() {
                                return r.search
                            },
                            get providers() {
                                return o() ? .[0].providerList ? .list || []
                            }
                        })
                    }
                })
            }
        })
    };
var Q = c("<span class=ml-1>"),
    mt = c('<div class="h-10 w-full overflow-x-auto overflow-y-hidden box-border"><div class="flex h-10 flex-nowrap items-center">'),
    ht = c('<div class="w-full pb-6">'),
    ee = c('<div class="flex w-full items-center justify-center h-60">'),
    pt = c('<div class="w-full sm:flex sm:flex-wrap sm:justify-between">'),
    ft = c('<div class="mt-4 w-full pb-4 lg:w-[49.5%]">'),
    vt = c('<div class="mt-4 w-full"><div class="flex w-full items-center mb-1.5"><span class="text-base font-semibold"></span><button class="ml-auto flex h-8 items-center rounded-lg bg-layer4 px-2 py-0"><span></span></button></div><div class="w-full overflow-x-auto"><div class="flex flex-nowrap gap-2">'),
    _t = c('<div class="w-full flex-none lg:w-1/2 xl:w-1/3">');
const $t = xe(($, r) => de().get(`/platform-sports/v14/live100/${$}/${r}/`, {
        cache: !0
    })),
    xt = function() {
        const r = U(),
            [o, d] = le({
                loading: !0,
                tab: -1,
                sportsData: null
            });
        be(() => {
            $t(me(), D.lang).then(n => {
                d({
                    loading: !1,
                    sportsData: n
                })
            }).catch(console.log)
        });
        const a = _(() => o.sportsData ? .sportItems ? o.sportsData.sportItems.map(n => n) : []),
            m = se(() => o.tab),
            h = _(() => o.sportsData ? .sportItems.map(n => ({
                sports: n.sportInfo,
                match: n.tournamentItems[0].matches,
                category: n.tournamentItems[0].categoryInfo,
                tournament: n.tournamentItems[0].tournamentInfo
            }))),
            g = _(() => {
                const n = o.sportsData ? .sportItems[o.tab];
                return {
                    sports: n ? .sportInfo,
                    match: n ? .tournamentItems[0].matches,
                    category: n ? .tournamentItems[0].categoryInfo,
                    tournament: n ? .tournamentItems[0].tournamentInfo
                }
            });
        return (() => {
            var n = ht();
            return l(n, e(v, {
                get when() {
                    return !o.loading
                },
                get fallback() {
                    return (() => {
                        var i = ee();
                        return l(i, e(E, {})), i
                    })()
                },
                get children() {
                    return e(v, {
                        get when() {
                            return !!o.sportsData
                        },
                        get fallback() {
                            return (() => {
                                var i = ee();
                                return l(i, e(B, {})), i
                            })()
                        },
                        get children() {
                            return [(() => {
                                var i = mt(),
                                    s = i.firstChild;
                                return l(s, e(T, {
                                    get class() {
                                        return X("flex h-10 flex-none items-center overflow-hidden rounded-xl px-2 py-0", m(-1) && "sports-active-tab")
                                    },
                                    onClick: () => d({
                                        tab: -1
                                    }),
                                    get children() {
                                        return [e(pe, {
                                            name: "Live",
                                            class: "size-6 text-secondary"
                                        }), (() => {
                                            var t = Q();
                                            return l(t, () => f("Live")), t
                                        })()]
                                    }
                                }), null), l(s, e(I, {
                                    get each() {
                                        return a()
                                    },
                                    children: (t, u) => e(T, {
                                        get class() {
                                            return X("flex h-10 flex-none items-center overflow-hidden rounded-xl px-2 py-0", m(u()) && "sports-active-tab")
                                        },
                                        onClick: () => d({
                                            tab: u()
                                        }),
                                        get children() {
                                            return [e(he, {
                                                get id() {
                                                    return t.tournamentItems ? .[0].categoryInfo.sport_id
                                                },
                                                class: "tab-sports-icon"
                                            }), (() => {
                                                var p = Q();
                                                return l(p, () => t.sportInfo.name), p
                                            })()]
                                        }
                                    })
                                }), null), i
                            })(), e(v, {
                                get when() {
                                    return o.tab < 0
                                },
                                get fallback() {
                                    return (() => {
                                        var i = pt();
                                        return l(i, e(I, {
                                            get each() {
                                                return g().match
                                            },
                                            children: s => (() => {
                                                var t = ft();
                                                return l(t, e(J, {
                                                    get img_path() {
                                                        return o.sportsData ? .imgDomain
                                                    },
                                                    matchInfo: s,
                                                    get sportInfo() {
                                                        return g().sports
                                                    },
                                                    get categoryInfo() {
                                                        return g().category
                                                    },
                                                    get tournamentInfo() {
                                                        return g().tournament
                                                    },
                                                    get markets() {
                                                        return o.sportsData ? .description.markets
                                                    },
                                                    get statuses() {
                                                        return o.sportsData ? .description.statuses
                                                    }
                                                })), t
                                            })()
                                        })), i
                                    })()
                                },
                                get children() {
                                    return e(I, {
                                        get each() {
                                            return h()
                                        },
                                        children: i => (() => {
                                            var s = vt(),
                                                t = s.firstChild,
                                                u = t.firstChild,
                                                p = u.nextSibling,
                                                x = p.firstChild,
                                                w = t.nextSibling,
                                                S = w.firstChild;
                                            return l(u, () => i.sports.name), p.$$click = () => {
                                                P.emit("close-explore"), r(`/sports/?bt-path=%2Flive%2F${i.sports.slug}-${i.category.sport_id}`)
                                            }, l(x, () => f("All")), l(p, e(N, {
                                                name: "Arrow",
                                                class: "size-4 rotate-180 ml-1"
                                            }), null), l(S, e(I, {
                                                get each() {
                                                    return i.match
                                                },
                                                children: j => (() => {
                                                    var C = _t();
                                                    return l(C, e(J, {
                                                        get img_path() {
                                                            return o.sportsData ? .imgDomain
                                                        },
                                                        matchInfo: j,
                                                        get sportInfo() {
                                                            return i.sports
                                                        },
                                                        get categoryInfo() {
                                                            return i.category
                                                        },
                                                        get tournamentInfo() {
                                                            return i.tournament
                                                        },
                                                        get markets() {
                                                            return o.sportsData ? .description.markets
                                                        },
                                                        get statuses() {
                                                            return o.sportsData ? .description.statuses
                                                        }
                                                    })), C
                                                })()
                                            })), s
                                        })()
                                    })
                                }
                            })]
                        }
                    })
                }
            })), n
        })()
    };
F(["click"]);
var bt = c("<span>");
const R = function(r) {
    const o = _(() => {
        if (!r.snippets || r.snippets.length <= 0) return [{
            text: r.text,
            isSearch: !1
        }];
        let d = r.snippets.flat(1);
        d.unshift(0), d.push(r.text.length);
        let a = [],
            m = 0;
        for (let h = 1; h < d.length; h++) {
            const g = r.text.slice(m, d[h]),
                n = h % 2 === 0;
            m = d[h], a.push({
                text: g,
                isSearch: n
            })
        }
        return a
    });
    return e(I, {
        get each() {
            return o()
        },
        children: d => (() => {
            var a = bt();
            return l(a, () => d.text), O(() => M(a, d.isSearch ? "text-brand" : "")), a
        })()
    })
};
var yt = c('<div class="flex items-center"><span class=text-secondary></span><span class=ml-auto><span class=text-brand></span><span class="text-secondary ml-1">'),
    te = c('<p class="text-secondary mt-6">'),
    wt = c('<div class="mt-4 w-full">'),
    re = c('<div class="flex w-full items-center justify-center h-60">'),
    St = c('<div class="flex h-6 w-full items-center mt-3"><p></p><p class="ml-auto text-secondary uppercase">'),
    It = c('<div class="flex w-full items-center mt-3"><div class="sports-search-tournament-icon flex items-center justify-center rounded-full bg-layer4 h-12 w-12"></div><div class=ml-2><p></p><p class=text-secondary>'),
    kt = c('<div class="mr-2 flex h-6 items-center rounded-md px-2 text-brand">'),
    Ct = c('<div class="flex w-full items-center mt-3"><div class="sports-search-match-icon flex flex-none items-center justify-center h-12 w-12"></div><div class="sports-search-match-icon flex flex-none items-center justify-center h-12 w-12"></div><div class="ml-2 flex-1"><p class="overflow-hidden whitespace-nowrap"><span class=mx-1> - </span></p><div class="flex items-center"><p class=text-secondary>');
const Lt = function(r) {
    const o = me(),
        d = U(),
        [a, m] = le({
            searching: !0,
            img_path: "",
            searchResult: []
        }),
        h = ye((s, t, u) => {
            m({
                searching: !0
            }), de().post("/platform-sports/v14/search/", {
                query: s,
                lang: t,
                brandId: u
            }).then(p => {
                p && p.found && m({
                    searching: !1,
                    img_path: p.imgDomain,
                    searchResult: p.found
                })
            }).catch(p => {
                Ce(p), m({
                    searching: !1
                })
            }).finally(() => {
                L.trackEvent("search_sent", {
                    search_module: "explore search",
                    side_filter: "Sports",
                    key_words: s
                })
            })
        }, 1e3);
    ae(() => {
        r.search && h(r.search, D.lang, o)
    });
    const g = _(() => a.searchResult.filter(s => s.type === "tournament")),
        n = _(() => a.searchResult.filter(s => s.type === "category")),
        i = _(() => a.searchResult.filter(s => s.type === "match").sort(s => s.live ? -1 : 1));
    return (() => {
        var s = wt();
        return l(s, e(v, {
            get when() {
                return !a.searching
            },
            get fallback() {
                return (() => {
                    var t = re();
                    return l(t, e(E, {})), t
                })()
            },
            get children() {
                return e(v, {
                    get when() {
                        return a.searchResult.length > 0
                    },
                    get fallback() {
                        return (() => {
                            var t = re();
                            return l(t, e(B, {})), t
                        })()
                    },
                    get children() {
                        return [(() => {
                            var t = yt(),
                                u = t.firstChild,
                                p = u.nextSibling,
                                x = p.firstChild,
                                w = x.nextSibling;
                            return l(u, () => f("Search Result")), l(x, () => a.searchResult.length), l(w, (() => {
                                var S = q(() => a.searchResult.length > 1);
                                return () => S() ? f("results") : f("result")
                            })()), t
                        })(), e(v, {
                            get when() {
                                return n().length > 0
                            },
                            get children() {
                                return e(I, {
                                    get each() {
                                        return n()
                                    },
                                    children: t => (() => {
                                        var u = St(),
                                            p = u.firstChild,
                                            x = p.nextSibling;
                                        return u.$$click = () => {
                                            L.trackEvent("search_result_click", {
                                                search_module: "explore search",
                                                side_filter: "Sports",
                                                game_name: t.sportInfo ? .name || "",
                                                game_id: t.id,
                                                game_category: t.categoryInfo ? .name,
                                                game_tag: "",
                                                provider: t.parent_sport_id,
                                                producer: "Sports",
                                                key_words: r.search,
                                                is_filter_provider: !0
                                            }), P.emit("close-explore"), d(`/sports?bt-path=%2F${t.parent_sport_id}%2F${t.id}`)
                                        }, l(p, e(R, {
                                            get text() {
                                                return t.categoryInfo ? .name || ""
                                            },
                                            get snippets() {
                                                return t.snippets[0]
                                            }
                                        })), l(x, () => t.sportInfo ? .name), u
                                    })()
                                })
                            }
                        }), e(v, {
                            get when() {
                                return g().length > 0
                            },
                            get children() {
                                return [(() => {
                                    var t = te();
                                    return l(t, () => f("League")), t
                                })(), e(I, {
                                    get each() {
                                        return g()
                                    },
                                    children: t => (() => {
                                        var u = It(),
                                            p = u.firstChild,
                                            x = p.nextSibling,
                                            w = x.firstChild,
                                            S = w.nextSibling;
                                        return u.$$click = () => {
                                            L.trackEvent("search_result_click", {
                                                search_module: "explore search",
                                                side_filter: "Sports",
                                                game_name: t.sportInfo ? .name || "",
                                                game_id: t.id,
                                                game_category: t.categoryInfo ? .name,
                                                game_tag: "",
                                                provider: t.parent_sport_id,
                                                producer: "Sports",
                                                key_words: r.search,
                                                is_filter_provider: !0
                                            }), P.emit("close-explore"), d(`/sports?bt-path=%2F${t.sportInfo?.slug}%2F${t.categoryInfo?.slug}%2F${t.tournamentInfo?.slug}-${t.id}`)
                                        }, l(p, e(he, {
                                            get id() {
                                                return t.parent_sport_id || "0"
                                            }
                                        })), l(w, e(R, {
                                            get text() {
                                                return t.tournamentInfo ? .name || ""
                                            },
                                            get snippets() {
                                                return t.snippets[0]
                                            }
                                        })), l(S, () => `${t.sportInfo?.name} . ${t.categoryInfo?.name}`), u
                                    })()
                                })]
                            }
                        }), e(v, {
                            get when() {
                                return i().length > 0
                            },
                            get children() {
                                return [(() => {
                                    var t = te();
                                    return l(t, () => f("Matches")), t
                                })(), e(I, {
                                    get each() {
                                        return i()
                                    },
                                    children: t => (() => {
                                        var u = Ct(),
                                            p = u.firstChild,
                                            x = p.nextSibling,
                                            w = x.nextSibling,
                                            S = w.firstChild,
                                            j = S.firstChild,
                                            C = S.nextSibling,
                                            W = C.firstChild;
                                        return u.$$click = () => {
                                            L.trackEvent("search_result_click", {
                                                search_module: "explore search",
                                                side_filter: "Sports",
                                                game_name: t.sportInfo ? .name || "",
                                                game_id: t.id,
                                                game_category: t.categoryInfo ? .name,
                                                game_tag: "",
                                                provider: t.parent_sport_id,
                                                producer: "Sports",
                                                key_words: r.search,
                                                is_filter_provider: !0
                                            }), P.emit("close-explore"), d(`/sports?bt-path=%2F${t.sportInfo?.slug}%2F${t.categoryInfo?.slug}%2F${t.tournamentInfo?.slug}%2F${t.matchInfo?.desc.slug}-${t.id}`)
                                        }, l(p, e(K, {
                                            get img_path() {
                                                return a.img_path
                                            },
                                            get id() {
                                                return t.matchInfo ? .desc.competitors[0] ? .id || ""
                                            },
                                            get country_code() {
                                                return t.matchInfo ? .desc.competitors[0] ? .country_code || ""
                                            },
                                            get sports_id() {
                                                return t.parent_sport_id || ""
                                            }
                                        })), l(x, e(K, {
                                            get img_path() {
                                                return a.img_path
                                            },
                                            get id() {
                                                return t.matchInfo ? .desc.competitors[1] ? .id || ""
                                            },
                                            get country_code() {
                                                return t.matchInfo ? .desc.competitors[1] ? .country_code || ""
                                            },
                                            get sports_id() {
                                                return t.parent_sport_id || ""
                                            }
                                        })), l(S, e(R, {
                                            get text() {
                                                return t.matchInfo ? .desc.competitors[0] ? .name || ""
                                            },
                                            get snippets() {
                                                return t.snippets[0]
                                            }
                                        }), j), l(S, e(R, {
                                            get text() {
                                                return t.matchInfo ? .desc.competitors[1] ? .name || ""
                                            },
                                            get snippets() {
                                                return t.snippets[1]
                                            }
                                        }), null), l(C, e(v, {
                                            get when() {
                                                return t.live
                                            },
                                            get children() {
                                                var A = kt();
                                                return A.style.setProperty("background", "rgba(49, 238, 136, 0.10)"), l(A, () => f("Live")), A
                                            }
                                        }), W), l(W, () => new Date((t.matchInfo ? .desc.scheduled || 0) * 1e3).toLocaleString()), u
                                    })()
                                })]
                            }
                        })]
                    }
                })
            }
        })), s
    })()
};
F(["click"]);
var Nt = c('<div class="w-full mt-4">');
const ne = function(r) {
    return (() => {
        var o = Nt();
        return l(o, e(v, {
            get when() {
                return r.search
            },
            get fallback() {
                return e(xt, {})
            },
            get children() {
                return e(Lt, {
                    get search() {
                        return r.search
                    }
                })
            }
        })), o
    })()
};
var Rt = c("<div class=order-first>"),
    Pt = c('<div class="explore-content w-full sm:pb-4"><div class="relative flex w-full items-center gap-2">'),
    Tt = c('<div class="flex h-8 items-center border-solid px-2 border-r border-third"><span class="mr-1 font-extrabold">'),
    Ft = c("<span class=font-extrabold>");
const Dt = Te("ExploreLotteryPortal"),
    Ot = function() {
        const [r] = we(), [o, d] = b(!1), a = r.type || "casino", m = _(() => z.isUsHost ? [{
            label: f("Casino"),
            value: "casino"
        }] : [{
            label: f("Casino"),
            value: "casino"
        }, {
            label: f("Sports"),
            value: "sports"
        }, {
            label: f("Lottery"),
            value: "lottery"
        }]), [h, g] = b(""), [n, i] = b(m().find(s => s.value === a) || m()[0]);
        return ae(() => {
            n() && g("")
        }), (() => {
            var s = Pt(),
                t = s.firstChild;
            return Se(u => Le(() => u, () => {
                d(!1)
            }), t), l(t, e(ue, {
                get value() {
                    return h()
                },
                onChange: g,
                get placeholder() {
                    return f("Search games")
                },
                onFocus: () => d(!0),
                class: "flex-1 bg-layer4 px-2 py-1.5",
                get children() {
                    return [e(v, {
                        get when() {
                            return !Z.isesportsbr
                        },
                        get children() {
                            var u = Rt();
                            return u.$$click = p => p.preventDefault(), l(u, e(ie, {
                                get value() {
                                    return n()
                                },
                                get options() {
                                    return m()
                                },
                                onChange: i,
                                size: "s",
                                class: "-my-1.5 -ml-2 h-11 border-none bg-transparent px-0",
                                labelRender: p => (() => {
                                    var x = Tt(),
                                        w = x.firstChild;
                                    return l(w, () => p().label), l(x, e(N, {
                                        name: "Arrow",
                                        class: "size-4 -rotate-90"
                                    }), null), x
                                })(),
                                children: p => (() => {
                                    var x = Ft();
                                    return l(x, () => p().label), x
                                })()
                            })), u
                        }
                    }), e(N, {
                        name: "Search",
                        class: "order-first size-6 text-secondary"
                    }), e(v, {
                        get when() {
                            return !!h()
                        },
                        get children() {
                            return e(T, {
                                class: "flex size-6 items-center justify-center rounded-md bg-layer6 p-0",
                                onClick: u => {
                                    u.preventDefault(), g("")
                                },
                                get children() {
                                    return e(N, {
                                        name: "Close",
                                        class: "size-4 text-secondary"
                                    })
                                }
                            })
                        }
                    })]
                }
            }), null), l(t, e(v, {
                get when() {
                    return q(() => !!(n().value === "casino" && o()))() && h().length < 3
                },
                get children() {
                    return e(Be, {
                        setSearch: g
                    })
                }
            }), null), l(s, e(v, {
                get when() {
                    return !Z.isesportsbr
                },
                get fallback() {
                    return e(ne, {
                        get search() {
                            return h()
                        }
                    })
                },
                get children() {
                    return e(Ie, {
                        get children() {
                            return [e(G, {
                                get when() {
                                    return n().value === "casino"
                                },
                                get children() {
                                    return e(gt, {
                                        get search() {
                                            return h()
                                        }
                                    })
                                }
                            }), e(G, {
                                get when() {
                                    return n().value === "sports"
                                },
                                get children() {
                                    return e(ne, {
                                        get search() {
                                            return h()
                                        }
                                    })
                                }
                            }), e(G, {
                                get when() {
                                    return n().value === "lottery"
                                },
                                get children() {
                                    return e(Dt, {
                                        get search() {
                                            return h()
                                        }
                                    })
                                }
                            })]
                        }
                    })
                }
            }), null), s
        })()
    };
F(["click"]);
export {
    Ot as
    default
};