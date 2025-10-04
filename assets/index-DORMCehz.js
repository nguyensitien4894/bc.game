import "./index-DxYPFwcM.js";
import {
    k as r,
    v as i,
    x as l,
    G as o
} from "./vendor-CR7NILRE.js";
import {
    ax as m,
    W as g,
    e as c
} from "./common-jbtJucx3.js";
import {
    t as s,
    g as u
} from "./Application-CExkuTua.js";
import {
    P as d
} from "./PcNav-DwfUOlr2.js";
var p = i('<div class="grid py-4 gap-2 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">');

function $() {
    return r(m, {
        get title() {
            return s("Themes")
        },
        get children() {
            return [r(d, {
                get title() {
                    return s("Themes")
                }
            }), r(f, {})]
        }
    })
}

function f() {
    const [t] = u(), n = e => e ? e.replace("BC", c.siteName) : "";
    return (() => {
        var e = p();
        return l(e, r(o, {
            get each() {
                return t() ? .[1] ? .tags
            },
            children: a => r(g, {
                get href() {
                    return `/tagname/${a}?label=${t()?.[1]?.translatedTags[a]}`
                },
                class: "fix-light-hover rounded-xl bg-layer4 p-4 text-center font-semibold ellipsis hover:bg-layer5",
                get children() {
                    return n(t() ? .[1] ? .translatedTags[a])
                }
            })
        })), e
    })()
}
export {
    f as ThemesView, $ as
    default
};