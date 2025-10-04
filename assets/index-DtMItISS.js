import "./index-DxYPFwcM.js";
import {
    a9 as v,
    b as x,
    N as I,
    h as C,
    k as e,
    X as y,
    v as d,
    x as u,
    I as L,
    m as E,
    ap as A,
    Z as S,
    Y as F,
    D as P,
    E as k
} from "./vendor-CR7NILRE.js";
import {
    t as s,
    f as M,
    e as O
} from "./Application-CExkuTua.js";
import {
    u as $,
    as as R,
    X as z,
    a9 as G,
    G as B,
    q as w,
    ar as H,
    aq as D,
    ax as m,
    aB as T
} from "./common-jbtJucx3.js";
import {
    C as Z
} from "./ClearAll-D93kkivu.js";
import {
    P as p
} from "./PcNav-DwfUOlr2.js";
import {
    u as j
} from "./other-B2ewBnyu.js";
var q = d('<span class="mr-1 text-secondary">'),
    V = d("<span>"),
    W = d('<div class="flex text-base font-semibold ellipsis mr-auto sm:text-sm"><div class="ml-2 rounded-lg px-2 py-[0.125rem] text-xs font-extrabold text-error bg-[#FC3C3C4D]">Hot'),
    X = d('<span class="text-base font-semibold ellipsis mr-auto sm:text-sm">');

function K(r) {
    const [o, c] = v(), [t, l] = x(""), i = () => {
        const n = t().toLowerCase();
        return (r.providerList || []).filter(g => (g.providerLangName || g.providerName).toLowerCase().includes(n))
    }, f = () => {
        const n = (o.providerName || "").split(",");
        return i().filter(a => n.indexOf(a.providerName) !== -1) || []
    }, [N, _] = x([]);
    return I(() => {
        _(f())
    }), C(() => {
        c({
            providerName: N().map(n => n.providerName).join(",")
        }, {
            replace: !0
        })
    }), e(H, {
        get class() {
            return w("flex-1", r.class)
        },
        throttle: 1500,
        get value() {
            return N()
        },
        get options() {
            return i()
        },
        onChange: _,
        get title() {
            return s("All Providers")
        },
        labelFormat: n => [(() => {
            var a = q();
            return u(a, () => s("Providers") + ":"), a
        })(), (() => {
            var a = V();
            return u(a, (() => {
                var g = L(() => n().length > 0);
                return () => g() ? "+" + n().length : s("All")
            })()), a
        })()],
        layerRender: n => [e(R, {
            class: "mb-1",
            get placeholder() {
                return s("Search Providers")
            },
            get value() {
                return t()
            },
            onChange: a => {
                l(a)
            },
            get children() {
                return e(z, {
                    name: "Search",
                    class: "order-first mr-1 size-6 text-secondary -ml-1"
                })
            }
        }), n, e(Z, {
            onClear: () => _([])
        }), e(G, {
            get when() {
                return i().length === 0
            },
            get children() {
                return e(B, {})
            }
        })],
        children: n => e(y, {
            get when() {
                return n().isHot
            },
            get fallback() {
                return e(y, {
                    get when() {
                        return n().logo
                    },
                    get fallback() {
                        return $.replaceHost(n().providerLangName || n().providerName)
                    },
                    get children() {
                        var a = X();
                        return u(a, () => $.replaceHost(n().providerLangName || n().providerName)), a
                    }
                })
            },
            get children() {
                var a = W(),
                    g = a.firstChild;
                return u(a, () => n().providerLangName || n().providerName, g), a
            }
        })
    })
}
var Y = d('<span class="mr-1 text-secondary">:');
const h = {
        popular: () => s("Popular"),
        "a-z": () => "A-Z",
        "z-a": () => "Z-A",
        new: () => s("New")
    },
    J = () => {
        const [r, o] = v(), c = Object.keys(h), t = E(() => h[r.sort] ? r.sort : c[0]);
        return e(D, {
            class: "flex-1",
            get value() {
                return t()
            },
            options: c,
            get title() {
                return s("Sort By")
            },
            onChange: l => {
                o({
                    sort: l === "popular" ? "" : l
                }, {
                    replace: !0
                })
            },
            labelFormat: l => [(() => {
                var i = Y(),
                    f = i.firstChild;
                return u(i, () => s("Sort By"), f), i
            })(), L(() => h[l()]())],
            children: l => h[l()]()
        })
    };
var Q = d("<div>"),
    U = d("<div><span class=mr-2>");

function de() {
    const r = A(),
        o = () => r.type;
    return e(F, {
        get fallback() {
            return e(m, {
                get title() {
                    return s("Recommend")
                },
                get children() {
                    return [e(p, {
                        get title() {
                            return s("Recommend")
                        }
                    }), e(B, {})]
                }
            })
        },
        get children() {
            return [e(S, {
                get when() {
                    return o() === "brand"
                },
                get children() {
                    return e(m, {
                        get title() {
                            return s("__ENV_SITE__ Originals")
                        },
                        get children() {
                            return [e(p, {
                                get title() {
                                    return s("__ENV_SITE__ Originals")
                                }
                            }), e(te, {
                                section_id: "page_originals"
                            })]
                        }
                    })
                }
            }), e(S, {
                get when() {
                    return o() === "slots"
                },
                get children() {
                    return e(m, {
                        get title() {
                            return s("Slots")
                        },
                        get children() {
                            return [e(p, {
                                get title() {
                                    return s("Slots")
                                }
                            }), e(b, {
                                categoryId: 1,
                                section_id: "page_slots"
                            })]
                        }
                    })
                }
            }), e(S, {
                get when() {
                    return o() === "live"
                },
                get children() {
                    return e(m, {
                        get title() {
                            return s("Live")
                        },
                        get children() {
                            return [e(p, {
                                get title() {
                                    return s("Live")
                                }
                            }), e(b, {
                                categoryId: 4,
                                section_id: "page_live"
                            })]
                        }
                    })
                }
            })]
        }
    })
}

function ee() {
    const [r] = v(), [o, c] = x({ ...r
    });
    return C(t => {
        const l = { ...r
        };
        return t && c(l), l
    }), o
}

function re(r) {
    const o = j(r.category);
    return e(y, {
        get when() {
            return o()
        },
        get children() {
            return e(K, {
                get providerList() {
                    return o()
                }
            })
        }
    })
}

function b(r) {
    const o = ee();

    function c() {
        const {
            sort: t,
            showingBlocked: l,
            providerName: i
        } = o();
        return {
            sortBy: t,
            providerNames: i,
            categoryIds: String(r.categoryId),
            showingBlocked: Number(l || 0)
        }
    }
    return [(() => {
        var t = Q();
        return u(t, e(J, {}), null), u(t, e(re, {
            get category() {
                return r.categoryId
            }
        }), null), u(t, e(ne, {}), null), P(() => k(t, w("flex flex-wrap gap-2 [&>*]:max-w-[50%] sm:[&>*]:max-w-72", !r.isCasinoPage && "py-4"))), t
    })(), e(O, {
        get source() {
            return c()
        },
        get section_id() {
            return r.section_id
        }
    })]
}

function te(r) {
    return e(M, {
        source: {
            sectionName: "originals"
        },
        get section_id() {
            return r.section_id
        }
    })
}

function ne(r) {
    const [o, c] = v();
    return (() => {
        var t = U(),
            l = t.firstChild;
        return u(l, () => s("Show Blocked")), u(t, e(T, {
            get value() {
                return o.showingBlocked === "1"
            },
            class: "bg-input_bright",
            size: "small",
            onChange: i => {
                c({
                    showingBlocked: i ? "1" : void 0
                })
            }
        }), null), P(() => k(t, w("flex items-center py-2 pl-2 sm:ml-auto", r.class))), t
    })()
}
export {
    te as GameBrand, b as SlotsOrLive, de as
    default
};