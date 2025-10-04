import {
    b as f,
    S as o
} from "./_baseGetTag-c2e287b9.js";
import {
    a as m
} from "./_arrayMap-2bcec0e7.js";
import {
    a,
    i as b
} from "./isArray-79a0be9c.js";
var y = "[object Symbol]";

function e(r) {
    return typeof r == "symbol" || a(r) && f(r) == y
}
var p = 1 / 0,
    i = o ? o.prototype : void 0,
    n = i ? i.toString : void 0;

function s(r) {
    if (typeof r == "string") return r;
    if (b(r)) return m(r, s) + "";
    if (e(r)) return n ? n.call(r) : "";
    var t = r + "";
    return t == "0" && 1 / r == -p ? "-0" : t
}

function T(r) {
    return r == null ? "" : s(r)
}
export {
    e as i, T as t
};