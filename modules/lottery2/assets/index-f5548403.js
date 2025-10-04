import {
    e as c
} from "./manifest-4a9d96af.js";

function a(t) {
    return t ? t > 9 ? t : "0" + t : "00"
}

function o(t, r = "") {
    return r = r && r + ".", `${window.location.protocol}//${r}${c.host}${t}`
}

function f(t) {
    return o(`/lottery/gift_ticket/${t}`)
}

function s(t, r) {
    const e = t || "USD";
    return r ? `/coin/${e}.rect.png` : `/coin/${e}.black.png`
}

function u(t, r) {
    return Object.fromEntries(Object.entries(t).filter(([e, n]) => r ? !!n && !r.includes(e) : !!n))
}

function p(t) {
    if (!t) return "";
    let r = "";
    const e = t.match(/^(.+?)\((.+?)\)$/);
    return e && (r = e[2]), r
}

function $(t) {
    if (!t) return "";
    let r = t;
    const e = t.match(/^(.+?)\((.+?)\)$/);
    return e && (r = e[1]), r
}
export {
    o as a, f as b, a as c, s as d, $ as e, p, u as r
};