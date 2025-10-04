var S = Object.defineProperty,
    l = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty,
    m = Object.prototype.propertyIsEnumerable;
var e = (a, r, n) => r in a ? S(a, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : a[r] = n,
    t = (a, r) => {
        for (var n in r || (r = {})) b.call(r, n) && e(a, n, r[n]);
        if (s)
            for (var n of s(r)) m.call(r, n) && e(a, n, r[n]);
        return a
    },
    c = (a, r) => l(a, g(r));
import {
    i as h,
    k as A
} from "./manifest-4a9d96af.js";
var w = (a => (a.BC = "0", a.HK = "2000100000", a.IndiaState2 = "2000200000", a.IndiaState3 = "2000300000", a.IndiaState4 = "2000400000", a.IndiaState5 = "2000500000", a.IndiaState6 = "2000600000", a.IndiaState7 = "2000700000", a.IndiaState8 = "2000800000", a))(w || {}),
    D = (a => (a.India = "India", a))(D || {}),
    u = (a => (a[a.HkArea = 2000108001] = "HkArea", a[a.IndiaState = 2000201001] = "IndiaState", a[a.IndiaKarala = 99999999999] = "IndiaKarala", a))(u || {}),
    v = (a => (a.XPlay = "XPlay", a))(v || {}),
    N = (a => (a[a.Success = 0] = "Success", a[a.Balance = 10] = "Balance", a[a.Period = 20] = "Period", a[a.PartSuccess = 30] = "PartSuccess", a))(N || {}),
    o = (a => (a[a.Standard = 832] = "Standard", a[a.SameDrum = 833] = "SameDrum", a[a.AdditionalDrum = 834] = "AdditionalDrum", a))(o || {});

function H(a) {
    return Object.values(o).includes(a) || Object.values(u).includes(a)
}

function O(a, r) {
    if (r <= 0 || a <= 0 || r > a) return 1; {
        let n = 1;
        for (let i = a; i > a - r; i--) n *= i;
        for (let i = r; i > 1; i--) n /= i;
        return n
    }
}

function R(a) {
    const r = a.match(/\d+/);
    if (r) {
        const n = r[0];
        return Number(n)
    } else return 0
}

function U(a, r) {
    return a.slice(0, r).map((i, d) => c(t({}, i), {
        label: i.draws === 1 ? "1Draw" : `${i.draws}Draws`,
        value: i.draws
    }))
}
const P = {
    Australia: 0,
    Austria: 24,
    Barbados: 48,
    Belgium: 72,
    Brazil: 96,
    Canada: 120,
    Chile: 144,
    Colombia: 168,
    Denmark: 192,
    Finland: 216,
    France: 240,
    Germany: 264,
    Ghana: 288,
    Greece: 312,
    India: 336,
    Ireland: 360,
    Italy: 384,
    Japan: 408,
    Latvia: 432,
    Lithuania: 456,
    Malta: 480,
    Mauritius: 504,
    Morocco: 528,
    "New Zealand": 552,
    Norway: 576,
    Peru: 600,
    Poland: 624,
    Romania: 648,
    Russia: 672,
    Singapore: 696,
    Slovakia: 720,
    "South Africa": 744,
    Spain: 768,
    "Sri Lanka": 792,
    Sweden: 816,
    Switzerland: 840,
    Turkiye: 864,
    UK: 888,
    Ukraine: 912,
    Uruguay: 936,
    USA: 960,
    "Korea Republic": 1032,
    Bc: 984,
    "Hong Kong": 1008
};

function j(a, r = 1) {
    return `-${P[a]*r}px`
}

function x(a) {
    return a && a.days <= 0 && a.hours <= 0 && a.minutes <= 0 && a.seconds <= 0
}

function G() {
    document.body.classList.toggle("lottery-fold", !1), h.emit("lottery-toggle", !1)
}

function z(a, r) {
    const n = Math.abs(r - a) + 1;
    return ["-", ...Array.from({
        length: n
    }, (d, f) => "" + (a + f))]
}

function X(a, r) {
    return new A(a).mul(r).toNumber()
}
export {
    o as B, w as I, O as a, u as b, G as c, D as d, R as e, j as f, U as g, N as h, H as i, z as j, v as k, x as l, X as m
};