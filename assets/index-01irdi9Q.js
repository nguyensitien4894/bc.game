import "./index-DxYPFwcM.js";
import {
    k as t,
    v as a,
    x as i,
    X as p,
    D as c,
    F as f,
    G as v
} from "./vendor-CR7NILRE.js";
import {
    ax as h,
    v as y,
    W as x,
    b
} from "./common-jbtJucx3.js";
import {
    t as g,
    g as P
} from "./Application-CExkuTua.js";
import {
    P as $
} from "./PcNav-DwfUOlr2.js";
var _ = a('<div class="grid py-4 gap-2 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">'),
    k = a('<img alt class="h-full w-full object-contain">'),
    w = a('<div class="flex items-center justify-center rounded-xl bg-layer4 p-4 font-semibold h-[4.25rem]"><span>');

function j() {
    return t(h, {
        get title() {
            return g("Providers")
        },
        get children() {
            return [t($, {
                get title() {
                    return g("Providers")
                },
                link: "/casino"
            }), t(A, {})]
        }
    })
}

function A() {
    const d = y("/logo/logo.png"),
        [u] = P(),
        m = e => e.providerName.includes("BC Originals") ? d() : b.darken ? e.logo : e.logoWhite;
    return (() => {
        var e = _();
        return i(e, t(v, {
            get each() {
                return u() ? .[0].providerList ? .list || []
            },
            children: n => t(x, {
                get href() {
                    return `/provider/${n.providerName}`
                },
                get children() {
                    var s = w(),
                        l = s.firstChild;
                    return i(s, t(p, {
                        get when() {
                            return n.logo
                        },
                        get children() {
                            var r = k();
                            return r.addEventListener("error", o => {
                                o.currentTarget.style.display = "none", o.currentTarget.nextElementSibling && (o.currentTarget.nextElementSibling.style.display = "block")
                            }), c(() => f(r, "src", m(n))), r
                        }
                    }), l), i(l, () => n.providerName), c(r => (r = n.logo ? "none" : "block") != null ? l.style.setProperty("display", r) : l.style.removeProperty("display")), s
                }
            })
        })), e
    })()
}
export {
    A as ProviderView, j as
    default
};