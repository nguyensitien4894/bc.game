import {
    D as o
} from "./manifest-794ca152.js";

function w(e) {
    const {
        winIncrease: n,
        loseIncrease: t,
        playTimes: s,
        winStopAt: r,
        loseStopAt: u,
        betAmount: i
    } = e, a = n.checked ? "" : `ow:${n.value};`, m = t.checked ? "" : `ol:${t.value};`;
    return `a:${new o(i).toFixed(9)};n:${s};${a}${m}sw:${r};sl:${u};`
}

function c(e, n, t) {
    var u;
    if (typeof e.odds != "number") return {
        payout: 0,
        profit: 0,
        result: 0
    };
    const s = e.odds;
    let r = new o((e == null ? void 0 : e.winAmount) || 0).sub((e == null ? void 0 : e.betAmount) || 0).toNumber();
    return r <= 0 && new o((e == null ? void 0 : e.winAmount) || 0).equals(0) && (r = new o((e == null ? void 0 : e.betAmount) || 0).mul(s - 1).toNumber()), {
        profit: r,
        payout: Number(new o(s).toFixed(2, o.ROUND_DOWN)),
        result: typeof e.result == "number" ? e.result : (u = e.gv) == null ? void 0 : u.result
    }
}
const b = (e, n) => Number(new o(100 * n).div(e).toFixed(2)),
    d = (e, n) => Math.floor(1e4 * new o(100 * n).div(e).toNumber()) / 1e4,
    f = () => {
        const e = window.navigator.userAgent;
        return /firefox|fxios/i.test(e) && !/seamonkey/i.test(e)
    };
export {
    b as a, c as b, w as c, d as g, f as i
};