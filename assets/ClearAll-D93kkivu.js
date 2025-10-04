import {
    d as a,
    v as s,
    H as o,
    x as t,
    k as n
} from "./vendor-CR7NILRE.js";
import {
    X as i
} from "./common-jbtJucx3.js";
import {
    t as c
} from "./Application-CExkuTua.js";
var d = s('<div class="sticky left-0 flex h-10 w-full cursor-pointer border-solid bg-layer3 center -bottom-2 border-t border-third"><span class="font-semibold text-brand">');
const C = function(l) {
    return (() => {
        var e = d(),
            r = e.firstChild;
        return o(e, "click", l.onClear, !0), t(e, n(i, {
            name: "Delete",
            class: "size-5 text-brand"
        }), r), t(r, () => c("Clear All")), e
    })()
};
a(["click"]);
export {
    C
};