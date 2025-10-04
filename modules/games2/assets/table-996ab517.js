import {
    a6 as r,
    a4 as l,
    a7 as c,
    x as d,
    y as i,
    A as n
} from "./manifest-794ca152.js";
import {
    c as e
} from "./utils-65805dbc.js";
var u = n("<div><table>"),
    x = n("<thead>"),
    g = n("<tbody>"),
    b = n("<tr>"),
    m = n("<th>"),
    p = n("<td>"),
    v = n("<caption>");
const y = t => {
        const [, a] = r(t, ["class", "containerClass"]);
        return s = u(), o = s.firstChild, l(o, c({
            get class() {
                return e("w-full caption-bottom text-sm", t.class)
            }
        }, a, {
            style: {
                "overflow-anchor": "none"
            }
        }), !1, !1), d(() => i(s, e("relative w-full overflow-auto max-h-[40rem] rounded-xl", t.containerClass))), s;
        var s, o
    },
    z = t => {
        const [, a] = r(t, ["class"]);
        return s = x(), l(s, c({
            get class() {
                return e("[&_tr]:border-1 [&_tr]:!bg-layer4", t.class)
            }
        }, a), !1, !1), s;
        var s
    },
    k = t => {
        const [, a] = r(t, ["class"]);
        return s = g(), l(s, c({
            get class() {
                return e("[&_tr:last-child]:border-0 group", t.class)
            }
        }, a), !1, !1), s;
        var s
    },
    w = t => {
        const [, a] = r(t, ["class"]);
        return s = b(), l(s, c({
            get class() {
                return e("odd:bg-layer5-table border-0 transition-colors data-[state=selected]:bg-zinc-100 dark:data-[state=selected]:bg-zinc-800", t.class)
            }
        }, a), !1, !1), s;
        var s
    },
    C = t => {
        const [, a] = r(t, ["class"]);
        return s = m(), l(s, c({
            get class() {
                return e("py-3 px-2 sm:px-4 group text-left align-middle font-semibold text-zinc-500 dark:text-zinc-400 [&:has([role=checkbox])]:pr-0", t.class)
            }
        }, a), !1, !1), s;
        var s
    },
    _ = t => {
        const [, a] = r(t, ["class"]);
        return s = p(), l(s, c({
            get class() {
                return e("first:rounded-l-lg last:rounded-r-lg py-2.5 px-2 sm:px-4 align-middle [&:has([role=checkbox])]:pr-0 dark:text-zinc-50", t.class)
            }
        }, a), !1, !1), s;
        var s
    },
    A = t => {
        const [, a] = r(t, ["class"]);
        return s = v(), l(s, c({
            get class() {
                return e("mt-4 text-sm text-zinc-500 dark:text-zinc-400", t.class)
            }
        }, a), !1, !1), s;
        var s
    };
export {
    y as T, z as a, w as b, C as c, k as d, _ as e, A as f
};