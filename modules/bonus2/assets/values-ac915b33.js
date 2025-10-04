import {
    a as u
} from "./_arrayMap-2bcec0e7.js";
import {
    k as s
} from "./_baseFor-371c5662.js";

function t(r, a) {
    return u(a, function(n) {
        return r[n]
    })
}

function f(r) {
    return r == null ? [] : t(r, s(r))
}
export {
    f as v
};