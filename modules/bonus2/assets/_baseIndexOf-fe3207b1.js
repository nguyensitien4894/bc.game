import {
    b as s
} from "./_baseFindIndex-928665d4.js";

function f(n) {
    return n !== n
}

function b(n, t, e) {
    for (var i = e - 1, r = n.length; ++i < r;)
        if (n[i] === t) return i;
    return -1
}

function c(n, t, e) {
    return t === t ? b(n, t, e) : s(n, f, e)
}
export {
    c as b
};