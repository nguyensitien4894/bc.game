import {
    i as e,
    c as n,
    t as s
} from "./web-46c35164.js";
import {
    B as c
} from "./manifest-d92afe19.js";
import "./solid-js-871c99e1.js";
import {
    t as l
} from "./i18n-fd9a94dd.js";
import {
    d as i
} from "./baseService-102e5148.js";
var m = s('<div class="flex h-full w-full flex-col items-center justify-center gap-y-1 text-secondary"><p>');
const y = (t, a) => (console.error(t), (() => {
    var r = m(),
        o = r.firstChild;
    return e(r, () => l("Sorry, an error occurred"), o), e(o, () => t.toString()), e(r, n(c, {
        type: "second",
        size: "xs",
        onClick: () => {
            i(), a()
        },
        get children() {
            return l("Reload")
        }
    }), null), r
})());
export {
    y as E
};