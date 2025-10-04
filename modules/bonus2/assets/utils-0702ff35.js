var c = (t, e, s) => new Promise((a, r) => {
    var l = n => {
            try {
                o(s.next(n))
            } catch (i) {
                r(i)
            }
        },
        m = n => {
            try {
                o(s.throw(n))
            } catch (i) {
                r(i)
            }
        },
        o = n => n.done ? a(n.value) : Promise.resolve(n.value).then(l, m);
    o((s = s.apply(t, e)).next())
});
import {
    e as g,
    v as u
} from "./manifest-d92afe19.js";
const D = () => g.serverTime.getTime();

function h(t) {
    if (t) {
        if (t.scrollHeight > t.clientHeight) {
            t.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            return
        }
        h(t.parentElement)
    }
}

function Y(t, e = "YYYY-MM-DD") {
    if (t = typeof t == "number" ? new Date(t) : t, t.getTime() === new Date(0).getTime()) return "";
    const s = {
        MM: ("0" + (t.getMonth() + 1)).slice(-2),
        DD: ("0" + t.getDate()).slice(-2),
        YYYY: t.getFullYear().toString(),
        HH: ("0" + t.getHours()).slice(-2),
        mm: ("0" + t.getMinutes()).slice(-2),
        ss: ("0" + t.getSeconds()).slice(-2)
    };
    return e.replace(/MM|DD|YYYY|HH|mm|ss/g, a => s[a])
}
const T = t => {
        if (t < 1) return "1st";
        const e = ["1st", "2nd", "3rd"];
        return t > 3 ? `${t}th` : e[t - 1]
    },
    M = (t = !1) => {
        const e = g.initHashParams,
            s = e.startsWith("#") ? e.substring(1) : e,
            r = new URLSearchParams(s).has("tgWebAppData");
        return r && t && (window.location.hash = e), [r, e]
    };

function w() {
    return c(this, null, function*() {
        return yield u.loadScript("https://telegram.org/js/telegram-web-app.js", "Telegram")
    })
}

function b() {
    const t = new Date;
    return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate() - t.getDate() + 1
}
export {
    h as a, D as b, M as c, Y as f, b as g, w as l, T as s
};