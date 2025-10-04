import {
    v as n,
    x as l,
    k as o,
    I as m,
    D as g,
    E as d
} from "./vendor-CR7NILRE.js";
import {
    v,
    I as u,
    b as f,
    ar as h,
    q as p
} from "./common-jbtJucx3.js";
import {
    t as i
} from "./Application-CExkuTua.js";
import {
    C
} from "./ClearAll-D93kkivu.js";
var _ = n("<div>"),
    $ = n('<span class="mr-1 text-secondary">'),
    x = n("<span>"),
    w = n('<div class="flex h-10 overflow-hidden center">');
const I = function(t) {
    const c = v("/logo/logo.png");
    return (() => {
        var s = _();
        return l(s, o(h, {
            class: "flex-1 bg-layer3",
            throttle: 1500,
            get value() {
                return t.selectProvider
            },
            get options() {
                return t.providers
            },
            get disabled() {
                return t.providers.length <= 0
            },
            onChange: e => e && t.changeSelectProvider(e),
            labelFormat: e => [(() => {
                var r = $();
                return l(r, () => i("Providers") + ":"), r
            })(), (() => {
                var r = x();
                return l(r, (() => {
                    var a = m(() => e().length > 0);
                    return () => a() ? "+" + e().length : i("All")
                })()), r
            })()],
            layerRender: e => [e, o(C, {
                onClear: () => t.changeSelectProvider([])
            })],
            children: e => {
                const r = e().providerName.includes("BC Originals");
                return (() => {
                    var a = w();
                    return l(a, o(u, {
                        class: "h-auto w-24",
                        alt: "provider",
                        args: "w=200",
                        get src() {
                            return r ? c() : f.darken ? e().logo : e().logoWhite
                        }
                    })), a
                })()
            }
        })), g(() => d(s, p("flex w-full items-center gap-2 mt-3 sm:w-1/4 sm:flex-none", t.class))), s
    })()
};
export {
    I as C
};