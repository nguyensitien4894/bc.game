function Z(e) {
    return A(m(e))
}

function A(e) {
    let t = {};
    e: for (; !y(e);) {
        let r = c(e);
        switch (r >>> 3) {
            case 0:
                break e;
            case 1:
                {
                    t.taskId = w(e, c(e));
                    break
                }
            case 2:
                {
                    t.userId = V(e);
                    break
                }
            case 3:
                {
                    t.status = U(e);
                    break
                }
            default:
                p(e, r & 7)
        }
    }
    return t
}

function F(e) {
    return v(m(e))
}

function v(e) {
    let t = {};
    e: for (; !y(e);) {
        let r = c(e);
        switch (r >>> 3) {
            case 0:
                break e;
            case 1:
                {
                    t.taskId = w(e, c(e));
                    break
                }
            case 2:
                {
                    t.batchId = w(e, c(e));
                    break
                }
            case 3:
                {
                    t.status = c(e);
                    break
                }
            case 4:
                {
                    t.wagerCompleted = w(e, c(e));
                    break
                }
            case 5:
                {
                    t.wagerAdded = w(e, c(e));
                    break
                }
            case 6:
                {
                    t.depositBalance = w(e, c(e));
                    break
                }
            case 7:
                {
                    t.bonusBalance = w(e, c(e));
                    break
                }
            default:
                p(e, r & 7)
        }
    }
    return t
}

function p(e, t) {
    switch (t) {
        case 0:
            for (; o(e) & 128;);
            break;
        case 2:
            g(e, c(e));
            break;
        case 5:
            g(e, 4);
            break;
        case 1:
            g(e, 8);
            break;
        default:
            throw new Error("Unimplemented type: " + t)
    }
}
let B = new Float32Array(1);
new Uint8Array(B.buffer);
let E = new Float64Array(1);
new Uint8Array(E.buffer);

function m(e) {
    return {
        bytes: e,
        offset: 0,
        limit: e.length
    }
}

function g(e, t) {
    if (e.offset + t > e.limit) throw new Error("Skip past limit");
    e.offset += t
}

function y(e) {
    return e.offset >= e.limit
}

function C(e, t) {
    let r = e.offset;
    if (r + t > e.limit) throw new Error("Read past limit");
    return e.offset += t, r
}

function w(e, t) {
    let r = C(e, t),
        i = String.fromCharCode,
        n = e.bytes,
        a = "�",
        f = "";
    for (let l = 0; l < t; l++) {
        let u = n[l + r],
            d, h, k, s;
        u & 128 ? (u & 224) === 192 ? l + 1 >= t ? f += a : (d = n[l + r + 1], (d & 192) !== 128 ? f += a : (s = (u & 31) << 6 | d & 63, s < 128 ? f += a : (f += i(s), l++))) : (u & 240) == 224 ? l + 2 >= t ? f += a : (d = n[l + r + 1], h = n[l + r + 2], ((d | h << 8) & 49344) !== 32896 ? f += a : (s = (u & 15) << 12 | (d & 63) << 6 | h & 63, s < 2048 || s >= 55296 && s <= 57343 ? f += a : (f += i(s), l += 2))) : (u & 248) == 240 ? l + 3 >= t ? f += a : (d = n[l + r + 1], h = n[l + r + 2], k = n[l + r + 3], ((d | h << 8 | k << 16) & 12632256) !== 8421504 ? f += a : (s = (u & 7) << 18 | (d & 63) << 12 | (h & 63) << 6 | k & 63, s < 65536 || s > 1114111 ? f += a : (s -= 65536, f += i((s >> 10) + 55296, (s & 1023) + 56320), l += 3))) : f += a : f += i(u)
    }
    return f
}

function o(e) {
    return e.bytes[C(e, 1)]
}

function c(e) {
    let t = 0,
        r = 0,
        i;
    do i = o(e), t < 32 && (r |= (i & 127) << t), t += 7; while (i & 128);
    return r
}

function I(e, t) {
    let r = 0,
        i = 0,
        n = 0,
        a;
    return a = o(e), r = a & 127, a & 128 && (a = o(e), r |= (a & 127) << 7, a & 128 && (a = o(e), r |= (a & 127) << 14, a & 128 && (a = o(e), r |= (a & 127) << 21, a & 128 && (a = o(e), i = a & 127, a & 128 && (a = o(e), i |= (a & 127) << 7, a & 128 && (a = o(e), i |= (a & 127) << 14, a & 128 && (a = o(e), i |= (a & 127) << 21, a & 128 && (a = o(e), n = a & 127, a & 128 && (a = o(e), n |= (a & 127) << 7))))))))), {
        low: r | i << 28,
        high: i >>> 4 | n << 24,
        unsigned: t
    }
}

function U(e) {
    let t = c(e);
    return t >>> 1 ^ -(t & 1)
}

function V(e) {
    let t = I(e, !1),
        r = t.low,
        i = t.high,
        n = -(r & 1);
    return {
        low: (r >>> 1 | i << 31) ^ n,
        high: i >>> 1 ^ n,
        unsigned: !1
    }
}
export {
    F as a, Z as d
};