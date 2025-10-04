const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/FavoriteRecent-D_guCMdn.js", "assets/vendor-CR7NILRE.js", "assets/common-jbtJucx3.js", "assets/GameEntryWrap-GTGSy2SU.js", "assets/Application-CExkuTua.js", "assets/index-DxYPFwcM.js", "assets/index-C72ike4e.css", "assets/Application-BY0BTHEC.css", "assets/api-BcSOPzfi.js"]))) => i.map(i => d[i]);
import "./index-DxYPFwcM.js";
import {
    b as N,
    m as p,
    k as e,
    X as v,
    v as m,
    x as g,
    K as X,
    h as P,
    J as H,
    D as I,
    E as L,
    G as E,
    d as Z,
    I as G,
    F as Q,
    U as ee,
    a9 as R,
    Z as b,
    Y as T,
    z as te,
    a1 as z,
    au as re
} from "./vendor-CR7NILRE.js";
import {
    G as D,
    L as J,
    u as j,
    b as B,
    d as A,
    h as q,
    l as S,
    q as y,
    W as F,
    e as $,
    S as K,
    ay as ne,
    v as ae,
    _ as se,
    az as ie,
    aA as le,
    at as oe,
    X as O,
    B as ce,
    as as ue,
    T as ge
} from "./common-jbtJucx3.js";
import {
    c as de,
    t as u,
    g as he,
    S as U,
    n as me,
    d as fe,
    o as ve,
    p as be,
    q as _e,
    s as pe
} from "./Application-CExkuTua.js";
import {
    C as we
} from "./Filter-BuuZjDwC.js";
import {
    I as Y
} from "./Icon-svKk6S1K.js";
import {
    u as ke,
    S as $e,
    a as xe
} from "./index-BVvvefcR.js";
import ye from "./GameEntryWrap-GTGSy2SU.js";
import {
    GameBrand as Se,
    SlotsOrLive as V
} from "./index-DtMItISS.js";
import {
    SectionSimple as k
} from "./index-BNTG7vWJ.js";
import {
    ProviderView as Ne
} from "./index-01irdi9Q.js";
import {
    ThemesView as Le
} from "./index-DORMCehz.js";
import "./ClearAll-D93kkivu.js";
import "./PcNav-DwfUOlr2.js";
import "./other-B2ewBnyu.js";
var Pe = m('<div class="mt-4 w-full sm:mt-0">'),
    Ie = m('<div class="mt-4 flex w-full items-center justify-center h-16 sm:mt-0"><span class="text-center font-semibold text-error">'),
    Ge = m('<div class="mt-4 flex h-40 w-full items-center justify-center sm:mt-0">'),
    Ae = m('<div class="mt-4 flex h-64 w-full items-center justify-center sm:mt-0">');
const Ee = function(i) {
    const [s, r] = N([]), n = p(() => {
        if (!i.searchResult || i.searchResult.length <= 0) return [];
        if (!i.providers || i.providers.length <= 0) return [];
        let t = [];
        return i.searchResult.map(o => {
            const c = i.providers.find(d => d.providerName == o.providerName);
            c && t.findIndex(_ => _.providerName === c.providerName) < 0 && t.push(c)
        }), t
    }), l = p(() => {
        if (s().length <= 0) return i.searchResult;
        const t = s().map(o => o.providerName);
        return i.searchResult.filter(o => t.includes(o.providerName))
    });
    return [e(we, {
        get selectProvider() {
            return s()
        },
        changeSelectProvider: r,
        get providers() {
            return n()
        }
    }), e(v, {
        get when() {
            return i.search && i.search.length > 2
        },
        get fallback() {
            return (() => {
                var t = Ie(),
                    o = t.firstChild;
                return g(o, () => u("Search requires at least 3 characters")), t
            })()
        },
        get children() {
            return e(v, {
                get when() {
                    return !i.searching
                },
                get fallback() {
                    return (() => {
                        var t = Ge();
                        return g(t, e(J, {})), t
                    })()
                },
                get children() {
                    return e(v, {
                        get when() {
                            return i.searchResult.length > 0
                        },
                        get fallback() {
                            return (() => {
                                var t = Ae();
                                return g(t, e(D, {})), t
                            })()
                        },
                        get children() {
                            var t = Pe();
                            return g(t, e(de, {
                                get list() {
                                    return l()
                                },
                                get track() {
                                    return {
                                        search_module: "casino search",
                                        key_words: i.search,
                                        is_filter_provider: s().length !== 0
                                    }
                                }
                            })), t
                        }
                    })
                }
            })
        }
    })]
};
var f = (a => (a.brand = "brand", a.favorites = "favorites", a.recent = "recent", a.live = "live", a.slots = "slots", a.hot = "hot", a.new = "new", a.poker = "poker", a.pick = "picks", a.tablegame = "table-game", a.gameshows = "game-shows", a.provider = "provider", a.featurebuyin = "feature-buy-in", a.themes = "themes", a.fishing = "fishing", a.pachinko = "pachinko", a.all = "", a))(f || {});

function Re() {
    const {
        isJapanIP: a,
        isKoreaIP: i,
        isJapanLang: s,
        isKoreaLang: r,
        isSoutheastAsiaIP: n,
        isSoutheastAsiaLang: l
    } = j.getAreaAndLang(B.lang, A.areaCode);
    let t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return a && (t = [0, 1, 2, 3, 13, 4, 5, 6, 7, 8, 9, 10, 11]), i && (t = [0, 1, 10, 2, 3, 13, 4, 5, 6, 7, 8, 9, 11]), n && (t = [0, 1, 2, 3, 4, 12, 6, 5, 7, 8, 9, 10, 11]), s && (t = [0, 1, 2, 3, 13, 4, 5, 6, 7, 8, 9, 10, 11]), r && (t = [0, 1, 10, 2, 3, 13, 4, 5, 6, 7, 8, 9, 11]), l && (t = [0, 1, 2, 3, 4, 12, 6, 5, 7, 8, 9, 10, 11]), q.isUsHost && (t = [0, 1, 2, 3, 5, 6, 7, 8, 10, 11]), S.isesportsbr && (t = [0, 2, 10]), t
}

function je() {
    const {
        isJapanIP: a,
        isJapanLang: i,
        isSoutheastAsiaIP: s,
        isSoutheastAsiaLang: r
    } = j.getAreaAndLang(B.lang, A.areaCode);
    let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return a && (n = [0, 1, 2, 13, 3, 4, 5, 6, 7, 8, 9, 10, 11]), s && (n = [0, 1, 2, 3, 12, 11, 4, 5, 6, 7, 8, 10, 9]), i && (n = [0, 1, 2, 13, 3, 4, 5, 6, 7, 8, 9, 10, 11]), r && (n = [0, 1, 2, 3, 12, 11, 4, 5, 6, 7, 8, 10, 9]), q.isUsHost && (n = [0, 1, 2, 4, 5, 6, 7, 9, 10, 11]), S.isesportsbr && (n = [1, 7]), n
}
const M = () => {
    const a = [{
        label: u("All Games"),
        value: "",
        iconname: "Home"
    }, {
        label: u("__ENV_SITE__ Originals"),
        value: "brand",
        iconname: "Classicdice"
    }, {
        label: u("Hot Games"),
        value: "hot",
        iconname: "Hot"
    }, {
        label: u("Slots"),
        value: "slots",
        iconname: "Slots"
    }, {
        label: u("Live Casino"),
        value: "live",
        iconname: "Live"
    }, {
        label: u("Game Shows"),
        value: "game-shows",
        iconname: "GameShows"
    }, {
        label: u("Table Games"),
        value: "table-game",
        iconname: "Tablegame"
    }, {
        label: u("New Releases"),
        value: "new",
        iconname: "Newreleases"
    }, {
        label: u("Poker"),
        value: "poker",
        iconname: "Poker"
    }, {
        label: u("Feature Buy-in"),
        value: "feature-buy-in",
        iconname: "Featurebuyin"
    }, {
        label: u("Providers"),
        value: "provider",
        iconname: "Favorites"
    }, {
        label: u("Themes"),
        value: "themes",
        iconname: "Themes"
    }, {
        label: u("Fishing"),
        value: "fishing",
        iconname: "Finishing"
    }, {
        label: u("Pachinko"),
        value: "pachinko",
        iconname: "Pachinko"
    }];
    return Re().map(s => a[s]).filter(Boolean)
};
var Be = m('<div class="hidden-scroll-bar w-full overflow-x-auto scroll-smooth"><div class="flex flex-nowrap items-center gap-1 p-0">'),
    Fe = m("<button><span>");
const Ce = function(i) {
    let s;
    const r = "scroll-active",
        n = p(() => M()),
        l = p(() => n().find(o => o.value === i.tab) || n()[0]),
        t = X(() => l().value);
    return P(() => {
        i.tab;
        const o = s.querySelector(`.${r}`);
        if (s && o) {
            const c = s.clientWidth,
                d = o.offsetWidth;
            s.scrollTo({
                left: o.offsetLeft - (c / 3 - d / 3),
                behavior: "smooth"
            })
        }
    }), (() => {
        var o = Be(),
            c = o.firstChild,
            d = s;
        return typeof d == "function" ? H(d, o) : s = o, g(c, e(E, {
            get each() {
                return n()
            },
            children: _ => (() => {
                var h = Fe(),
                    x = h.firstChild;
                return h.$$click = w => {
                    w.preventDefault(), i.setTab(_.value)
                }, g(h, e(Y, {
                    get name() {
                        return _.iconname
                    },
                    get class() {
                        return `flex-none h-4.5 w-4.5 ${t(_.value)?"text-brand":"text-secondary"}`
                    }
                }), x), g(x, () => _.label), I(w => {
                    var C = y("flex h-10 items-center justify-center rounded-lg px-2 py-0 snap-start hover:bg-layer3", t(_.value) && `${r} bg-tab_selected`),
                        W = `ml-1 whitespace-nowrap ${t(_.value)?"font-extrabold":"text-secondary"}`;
                    return C !== w.e && L(h, w.e = C), W !== w.t && L(x, w.t = W), w
                }, {
                    e: void 0,
                    t: void 0
                }), h
            })()
        })), o
    })()
};
Z(["click"]);
var We = m("<div class=mt-4>"),
    Oe = m("<div class=w-full>");
const Ve = function(i) {
    const [s] = he(), [r, n] = N(f.all), [l, t] = ke(() => i.search), o = p(() => {
        if (t()) return [];
        switch (r()) {
            case f.all:
                return l();
            case f.brand:
                return l().filter(c => c.categoryName.includes("Original"));
            case f.slots:
                return l().filter(c => c.categoryName.includes("Slots"));
            case f.live:
                return l().filter(c => c.categoryName.includes("Live"));
            case f.hot:
                return l().filter(c => c.retrieveId.includes("hot"));
            case f.new:
                return l().filter(c => c.retrieveId.includes("new_game"));
            default:
                return []
        }
    });
    return (() => {
        var c = Oe();
        return g(c, e(Ce, {
            get tab() {
                return r()
            },
            setTab: n
        }), null), g(c, e(v, {
            get when() {
                return r() === f.pick || r() === f.provider || r() === f.themes
            },
            get fallback() {
                return e(Ee, {
                    get providers() {
                        return s() ? .[0].providerList ? .list || []
                    },
                    get search() {
                        return i.search
                    },
                    get searching() {
                        return t()
                    },
                    get searchResult() {
                        return o()
                    }
                })
            },
            get children() {
                var d = We();
                return g(d, e(D, {})), d
            }
        }), null), c
    })()
};
var He = m("<div class=mb-4>");
const Te = a => {
    const i = s => {
        if (s) {
            let r = s;
            return a.translatedTags && (r = a.translatedTags[r], r || (r = s)), s.replace("BC", $.siteName)
        }
        return ""
    };
    return (() => {
        var s = He();
        return g(s, e(U, {
            get title() {
                return a.title
            },
            get href() {
                return a.link
            }
        }), null), g(s, e(K, {
            get class() {
                return `${$.mobile?"-mx-4":"mx-0"} gap-2 grid-col-3`
            },
            get style() {
                return {
                    "--grid-gap": ".5rem",
                    "--grid-padding": $.mobile ? "1rem" : "0px",
                    "--aspect-ratio": 2.66
                }
            },
            get data() {
                return a.data || Array(8).fill(void 0)
            },
            children: r => {
                const n = i(r());
                return e(F, {
                    get href() {
                        return G(() => !!r())() ? `/tagname/${r()}?label=${n}` : ""
                    },
                    class: "flex h-full w-full items-center justify-center rounded-xl bg-layer4 text-center font-semibold px-1",
                    children: n
                })
            }
        }), null), s
    })()
};
var ze = m("<div class=mb-4>"),
    De = m('<img alt class="h-full w-full object-contain">'),
    Je = m('<div class="flex items-center justify-center rounded-lg px-4 text-center font-extrabold bg-layerx h-12">'),
    qe = m("<span>");
const Ke = a => {
    const i = ne(() => a.data || []),
        s = ae("/logo/logo.png"),
        r = n => n.providerName.includes("BC Originals") ? s() : B.darken ? n.logo : n.logoWhite;
    return (() => {
        var n = ze();
        return g(n, e(U, {
            get title() {
                return a.title
            },
            get href() {
                return a.link
            }
        }), null), g(n, e(K, {
            get class() {
                return `${$.mobile?"-mx-4":"mx-0"} gap-2 grid-col-3`
            },
            get style() {
                return {
                    "--grid-gap": ".5rem",
                    "--grid-padding": $.mobile ? "1rem" : "0px",
                    "--aspect-ratio": 2.66
                }
            },
            get data() {
                return G(() => !!i())() ? i() : Array(8).fill(void 0)
            },
            children: l => e(v, {
                get when() {
                    return l()
                },
                get fallback() {
                    return Je()
                },
                get children() {
                    return e(F, {
                        get href() {
                            return `/provider/${l()?.providerName}`
                        },
                        class: "flex items-center justify-center rounded-lg px-4 text-center font-extrabold bg-layerx h-12",
                        get children() {
                            return e(v, {
                                get when() {
                                    return l().logo
                                },
                                get fallback() {
                                    return (() => {
                                        var t = qe();
                                        return g(t, () => l().providerName), t
                                    })()
                                },
                                get children() {
                                    var t = De();
                                    return t.addEventListener("error", o => {
                                        o.currentTarget.style.display = "none", o.currentTarget.nextElementSibling && (o.currentTarget.nextElementSibling.style.display = "block")
                                    }), I(() => Q(t, "src", r(l()))), t
                                }
                            })
                        }
                    })
                }
            })
        }), null), n
    })()
};
var Ue = m("<div class=text-white>");
const Ye = ee(() => se(() =>
    import ("./FavoriteRecent-D_guCMdn.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])));

function Me() {
    const a = [{
            sectionName: "originals"
        }, {
            sectionName: "hot_games"
        }, {
            sectionName: "slots"
        }, {
            sectionName: "live_casino"
        }, {
            sectionName: "game_shows"
        }, {
            sectionName: "new"
        }, {
            sectionName: "poker"
        }, {
            sectionName: "feature_buyin"
        }, {
            sectionName: "blackjack"
        }, {
            sectionName: "table_games"
        }, {
            sectionName: "fishing"
        }, {
            sectionName: "pachinko"
        }, {
            sectionName: "themes"
        }, {
            sectionName: "providers"
        }],
        [i, {
            cache: s
        }] = me(() => a, {
            version: 1,
            expires: 1 / 0,
            lockLocal: !0,
            initialValue: Array(a.length).fill(fe)
        }),
        [r] = ve(),
        n = p(() => [{
            title: () => u("__ENV_SITE__ Originals"),
            link: "/gamelist/brand",
            section_id: "casino_originals",
            sort: 0
        }, {
            title: () => u("Hot Games"),
            link: "/section/hot_games",
            section_id: "casino_hot",
            sort: 1
        }, {
            title: () => u("Slots"),
            link: "/gamelist/slots",
            section_id: "casino_slots",
            sort: 2
        }, {
            title: () => u("Live Casino"),
            link: "/gamelist/live",
            section_id: "casino_live",
            sort: 3
        }, {
            title: () => u("Game Shows"),
            link: "/section/game_shows",
            section_id: "casino_gameshows",
            sort: 4
        }, {
            title: () => u("New Releases"),
            link: "/section/new",
            section_id: "casino_new",
            sort: 5
        }, {
            title: () => u("Poker"),
            link: "/section/poker",
            section_id: "casino_poker",
            sort: 6
        }, {
            type: "providers"
        }, {
            title: () => u("Feature Buy-in"),
            link: "/section/feature_buyin",
            section_id: "casino_featurebuyin",
            sort: 7
        }, {
            title: () => u("Blackjack"),
            link: "/section/blackjack",
            section_id: "casino_blackjack",
            sort: 8
        }, {
            type: "themes"
        }, {
            title: () => u("Table Games"),
            link: "/section/table_games",
            section_id: "casino_table",
            sort: 9
        }, {
            title: () => u("Fishing"),
            link: "/section/fishing",
            section_id: "casino_fishing",
            sort: 10
        }, {
            title: () => u("Pachinko"),
            link: "/section/pachinko",
            section_id: "casino_pachinko",
            sort: 11
        }]),
        l = p(() => {
            const t = je(),
                o = n();
            return t.map(c => o[c])
        });
    return (() => {
        var t = Ue();
        return g(t, e(v, {
            get when() {
                return A.login
            },
            get children() {
                return e(Ye, {})
            }
        }), null), g(t, e(E, {
            get each() {
                return l()
            },
            children: o => e(v, {
                get when() {
                    return o.type !== "themes"
                },
                get fallback() {
                    return e(Te, {
                        get title() {
                            return u("Themes")
                        },
                        link: "/themes",
                        get data() {
                            return i() ? .[12].tags
                        },
                        get translatedTags() {
                            return i() ? .[12].translatedTags
                        }
                    })
                },
                get children() {
                    return e(v, {
                        get when() {
                            return o.type !== "providers"
                        },
                        get fallback() {
                            return e(Ke, {
                                get title() {
                                    return u("Game Providers")
                                },
                                link: "/providers",
                                get data() {
                                    return i() ? .[13].providerList.list
                                }
                            })
                        },
                        get children() {
                            return e(ye, {
                                get title() {
                                    return G(() => !!o.title)() && o.title()
                                },
                                get link() {
                                    return o.link || ""
                                },
                                get data() {
                                    return i() ? .[o.sort || 0]
                                },
                                get section_id() {
                                    return o.section_id || ""
                                },
                                get cache() {
                                    return r()
                                }
                            })
                        }
                    })
                }
            })
        }), null), g(t, e(be, {}), null), t
    })()
}
var Xe = m('<div class="w-full py-4">');
const Ze = function() {
    const [i] = R(), s = () => i.tab || "", [r, n] = N(s());
    return P(() => n(s())), (() => {
        var l = Xe();
        return g(l, e(T, {
            get children() {
                return [e(b, {
                    get when() {
                        return r() === "brand"
                    },
                    get children() {
                        return e(Se, {
                            section_id: "casinotab_originals"
                        })
                    }
                }), e(b, {
                    get when() {
                        return r() === "slots"
                    },
                    get children() {
                        return e(V, {
                            categoryId: 1,
                            section_id: "casinotab_slots",
                            isCasinoPage: !0
                        })
                    }
                }), e(b, {
                    get when() {
                        return r() === "fishing"
                    },
                    get children() {
                        return e(k, {
                            section_id: "casinotab_fishing",
                            sectionName: "fishing"
                        })
                    }
                }), e(b, {
                    get when() {
                        return r() === "live"
                    },
                    get children() {
                        return e(V, {
                            categoryId: 4,
                            section_id: "casinotab_live",
                            isCasinoPage: !0
                        })
                    }
                }), e(b, {
                    get when() {
                        return r() === "hot"
                    },
                    get children() {
                        return e(k, {
                            section_id: "casinotab_hot",
                            sectionName: "hot_games"
                        })
                    }
                }), e(b, {
                    get when() {
                        return r() === "game-shows"
                    },
                    get children() {
                        return e(k, {
                            section_id: "casinotab_gameshows",
                            sectionName: "game_shows"
                        })
                    }
                }), e(b, {
                    get when() {
                        return r() === "new"
                    },
                    get children() {
                        return e(k, {
                            section_id: "casinotab_new",
                            sectionName: "new"
                        })
                    }
                }), e(b, {
                    get when() {
                        return r() === "poker"
                    },
                    get children() {
                        return e(k, {
                            section_id: "casinotab_poker",
                            sectionName: "poker"
                        })
                    }
                }), e(b, {
                    get when() {
                        return r() === "feature-buy-in"
                    },
                    get children() {
                        return e(k, {
                            section_id: "casinotab_featurebuyin",
                            sectionName: "feature_buyin"
                        })
                    }
                }), e(b, {
                    get when() {
                        return r() === "table-game"
                    },
                    get children() {
                        return e(k, {
                            section_id: "casinotab_table",
                            sectionName: "table_games"
                        })
                    }
                }), e(b, {
                    get when() {
                        return r() === "pachinko"
                    },
                    get children() {
                        return e(k, {
                            section_id: "casinotab_pachinko",
                            sectionName: "pachinko"
                        })
                    }
                })]
            }
        })), l
    })()
};
var Qe = m('<div class="w-full center h-72 flex-auto">'),
    et = m("<div>"),
    tt = m("<span>");

function rt() {
    const [a] = R(), i = p(() => M()), s = p(() => {
        const n = i().find(l => l.value === a.tab);
        return n ? n.value : f.all
    }), r = te(() => e(v, {
        get when() {
            return s()
        },
        keyed: !0,
        get fallback() {
            return e(Me, {})
        },
        children: n => e(z, {
            get fallback() {
                return (() => {
                    var l = Qe();
                    return g(l, e(J, {})), l
                })()
            },
            get children() {
                return e(T, {
                    get fallback() {
                        return e(Ze, {})
                    },
                    get children() {
                        return [e(b, {
                            get when() {
                                return n === f.provider
                            },
                            get children() {
                                return e(Ne, {})
                            }
                        }), e(b, {
                            get when() {
                                return n === f.themes
                            },
                            get children() {
                                return e(Le, {})
                            }
                        })]
                    }
                })
            }
        })
    }));
    return P(n => {
        const l = r();
        return n && ie(r(), {
            opacity: [0, 1]
        }, {
            duration: .35,
            easing: j.easeBack,
            persist: !0
        }), l
    }), (() => {
        var n = et();
        return g(n, e($e, {
            get activeIndex() {
                return re(i(), l => l.value === s())
            },
            get children() {
                return e(E, {
                    get each() {
                        return i()
                    },
                    children: l => e(F, {
                        get class() {
                            return y("flex h-10 items-center justify-center rounded-lg px-2 py-0 snap-start hover:bg-layer3", s() === l.value && "bg-tab_selected")
                        },
                        get href() {
                            return `/casino${l.value?"?tab="+l.value:""}`
                        },
                        get children() {
                            return [e(Y, {
                                get name() {
                                    return l.iconname
                                },
                                get class() {
                                    return y("flex-none h-4.5 w-4.5", s() === l.value ? "text-brand" : "text-secondary")
                                }
                            }), (() => {
                                var t = tt();
                                return g(t, e(v, {
                                    get when() {
                                        return l.value === f.all
                                    },
                                    get fallback() {
                                        return l.label
                                    },
                                    get children() {
                                        return u("Lobby")
                                    }
                                })), I(() => L(t, y("whitespace-nowrap ml-1", s() === l.value ? "font-extrabold" : "text-secondary"))), t
                            })()]
                        }
                    })
                })
            }
        }), null), g(n, r, null), n
    })()
}
var nt = m('<div><div><div class="relative flex gap-2 py-3">');

function pt() {
    const [a, i] = N(!1), [s, r] = N(""), n = le(), [l] = R();
    P(() => {
        a() && $.mobile && setTimeout(() => {
            const d = n().scrollY || 0;
            n().scrollBy({
                top: 170 - d,
                left: 0,
                behavior: "smooth"
            })
        }, 100)
    });
    const t = p(() => {
            const c = l.tab === f.slots,
                d = l.tab === f.live;
            return c || d
        }),
        o = p(() => S.isesportsbr ? !1 : S.isbcke ? !A.login : !0);
    return (() => {
        var c = nt(),
            d = c.firstChild,
            _ = d.firstChild;
        return g(c, e(v, {
            get when() {
                return o()
            },
            get children() {
                return e(z, {
                    get children() {
                        return e(_e, {})
                    }
                })
            }
        }), d), g(c, e(v, {
            get when() {
                return t()
            },
            get children() {
                return e(pe, {})
            }
        }), d), H(h => oe(() => h, () => {
            i(!1)
        }), _), g(_, e(ue, {
            get placeholder() {
                return u("Search games")
            },
            get value() {
                return s()
            },
            onFocus: () => i(!0),
            onBlur: () => {
                $.mobile && setTimeout(() => {
                    i(!1)
                }, 100)
            },
            class: "bg-layer3 px-2 flex-3",
            onChange: h => {
                r(h)
            },
            get children() {
                return [e(O, {
                    name: "Search",
                    class: "order-first size-6 text-secondary"
                }), e(v, {
                    get when() {
                        return !!s()
                    },
                    get children() {
                        return e(ce, {
                            class: "flex size-6 items-center justify-center rounded-md bg-layer6 p-0",
                            onClick: h => {
                                h.preventDefault(), h.stopPropagation(), r("")
                            },
                            get children() {
                                return e(O, {
                                    name: "Close",
                                    class: "size-4 text-secondary"
                                })
                            }
                        })
                    }
                })]
            }
        }), null), g(_, e(v, {
            get when() {
                return G(() => !!a())() && s().length < 3
            },
            get children() {
                return e(xe, {
                    setSearch: r
                })
            }
        }), null), g(d, e(ge.TabSelect, {
            get value() {
                return s().length < 3 ? 0 : 1
            },
            tabs: [0, 1],
            children: h => h() === 0 ? e(rt, {}) : e(Ve, {
                get search() {
                    return s()
                }
            })
        }), null), I(h => {
            var x = y($.mobile && "!-mt-sh"),
                w = y("-mx-4 bg-layer2 px-4 min-h-screen", S.isesportsbr && "pt-sh");
            return x !== h.e && L(c, h.e = x), w !== h.t && L(d, h.t = w), h
        }, {
            e: void 0,
            t: void 0
        }), c
    })()
}
export {
    pt as
    default
};