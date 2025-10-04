var L = Object.defineProperty,
    A = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var N = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty,
    P = Object.prototype.propertyIsEnumerable;
var I = (n, i, t) => i in n ? L(n, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[i] = t,
    O = (n, i) => {
        for (var t in i || (i = {})) v.call(i, t) && I(n, t, i[t]);
        if (N)
            for (var t of N(i)) P.call(i, t) && I(n, t, i[t]);
        return n
    },
    h = (n, i) => A(n, C(i));
var r = (n, i, t) => new Promise((o, a) => {
    var e = l => {
            try {
                m(t.next(l))
            } catch (g) {
                a(g)
            }
        },
        c = l => {
            try {
                m(t.throw(l))
            } catch (g) {
                a(g)
            }
        },
        m = l => l.done ? o(l.value) : Promise.resolve(l.value).then(e, c);
    m((t = t.apply(n, i)).next())
});
import {
    c as M,
    p as w
} from "./store-2ed2b91e.js";
import {
    o as W,
    g as T,
    b as R
} from "./solid-js-640b7463.js";
import {
    a8 as p,
    j,
    k as d,
    o as $
} from "./manifest-c14db982.js";
const S = p.Reader,
    E = p.Writer,
    b = p.util,
    y = p.roots.betLog || (p.roots.betLog = {});
y.BetLog = (() => {
    function n(i) {
        if (i)
            for (let t = Object.keys(i), o = 0; o < t.length; ++o) i[t[o]] != null && (this[t[o]] = i[t[o]])
    }
    return n.prototype.userId = b.Long ? b.Long.fromBits(0, 0, !1) : 0, n.prototype.nickName = "", n.prototype.gameName = "", n.prototype.nonce = 0, n.prototype.currencyName = "", n.prototype.betAmount = "", n.prototype.winAmount = "", n.prototype.odds = 0, n.prototype.betTime = b.Long ? b.Long.fromBits(0, 0, !1) : 0, n.prototype.distributeId = b.Long ? b.Long.fromBits(0, 0, !1) : 0, n.prototype.type = "", n.prototype.oddsString = "", n.encode = function(t, o) {
        return o || (o = E.create()), t.userId != null && Object.hasOwnProperty.call(t, "userId") && o.uint32(16).sint64(t.userId), t.nickName != null && Object.hasOwnProperty.call(t, "nickName") && o.uint32(26).string(t.nickName), t.gameName != null && Object.hasOwnProperty.call(t, "gameName") && o.uint32(34).string(t.gameName), t.nonce != null && Object.hasOwnProperty.call(t, "nonce") && o.uint32(40).sint32(t.nonce), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && o.uint32(50).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && o.uint32(58).string(t.betAmount), t.winAmount != null && Object.hasOwnProperty.call(t, "winAmount") && o.uint32(66).string(t.winAmount), t.odds != null && Object.hasOwnProperty.call(t, "odds") && o.uint32(72).sint32(t.odds), t.betTime != null && Object.hasOwnProperty.call(t, "betTime") && o.uint32(80).sint64(t.betTime), t.distributeId != null && Object.hasOwnProperty.call(t, "distributeId") && o.uint32(96).sint64(t.distributeId), t.type != null && Object.hasOwnProperty.call(t, "type") && o.uint32(106).string(t.type), t.oddsString != null && Object.hasOwnProperty.call(t, "oddsString") && o.uint32(114).string(t.oddsString), o
    }, n.decode = function(t, o) {
        t instanceof S || (t = S.create(t));
        let a = o === void 0 ? t.len : t.pos + o,
            e = new y.BetLog;
        for (; t.pos < a;) {
            let c = t.uint32();
            switch (c >>> 3) {
                case 2:
                    e.userId = t.sint64();
                    break;
                case 3:
                    e.nickName = t.string();
                    break;
                case 4:
                    e.gameName = t.string();
                    break;
                case 5:
                    e.nonce = t.sint32();
                    break;
                case 6:
                    e.currencyName = t.string();
                    break;
                case 7:
                    e.betAmount = t.string();
                    break;
                case 8:
                    e.winAmount = t.string();
                    break;
                case 9:
                    e.odds = t.sint32();
                    break;
                case 10:
                    e.betTime = t.sint64();
                    break;
                case 12:
                    e.distributeId = t.sint64();
                    break;
                case 13:
                    e.type = t.string();
                    break;
                case 14:
                    e.oddsString = t.string();
                    break;
                default:
                    t.skipType(c & 7);
                    break
            }
        }
        return e
    }, n
})();
const u = j(),
    z = {
        interval: "1h",
        summary: {
            vol: 0,
            tvl: 0,
            fees: 0
        },
        wsPrice: {
            price: 0,
            time: 0,
            trend: 0,
            high: 0,
            low: 0,
            open: 0,
            liveTime: 0
        },
        trades: {
            my: [],
            public: []
        },
        bets: {
            my: [],
            public: []
        },
        supports: {
            buyCurrency: [],
            sellCurrency: []
        }
    },
    [f, s] = M(z),
    D = f;

function G(n) {
    return u.post("/bctrade/forward/api/coin/trade/buyByAmount", n)
}

function U(n) {
    return u.post("/bctrade/forward/api/coin/trade/sell", n)
}
const B = "/activity/anniversary2024";

function F() {
    return r(this, null, function*() {
        return yield u.get(`${B}/dollarWin/info/`)
    })
}

function K() {
    return r(this, null, function*() {
        return yield u.get("/activity/anniversary2024/dollarWin/winner/")
    })
}

function Q() {
    return r(this, null, function*() {
        return yield u.get(`${B}/dollarWin/list?page=1&pageSize=100`)
    })
}

function V() {
    return r(this, null, function*() {
        return yield u.get("/vault/amount/list/")
    })
}

function X() {
    return r(this, null, function*() {
        const n = yield u.get("/bctrade/forward/api/coin/trade/myTrade/list?page=1&pageSize=30");
        s("trades", "my", n.items)
    })
}

function Y() {
    return r(this, null, function*() {
        const n = yield u.get("/bctrade/forward/api/coin/trade/allTrade/list?page=1&pageSize=30");
        s("trades", "public", n.items)
    })
}

function Z() {
    return r(this, null, function*() {
        const n = yield u.post("/game/bet/bc/recent-bet/", {});
        s("bets", "my", n)
    })
}

function _() {
    return r(this, null, function*() {
        const n = yield u.get("/game/bet/bc/all-bet/");
        s("bets", "public", n)
    })
}

function tt() {
    return r(this, null, function*() {
        const n = yield j().get("/bctrade/support-currency");
        s("supports", n)
    })
}
let k = !1;
const nt = () => (k = !0, () => k = !1);

function et() {
    return r(this, null, function*() {
        const n = yield u.get("/bctrade/forward/api/coin/token/info");
        s("summary", n)
    })
}

function ot(n) {
    s("interval", n)
}

function it() {
    W(() => {
        const n = d(),
            i = d("/bctrade-coin"),
            t = n.encode("utf8")("COIN/MSG/PUSH"),
            o = d().decodeBind(a => {
                if (a.cmd === "COIN/PRICE") {
                    const e = JSON.parse(a.data);
                    if (e.i !== "1m" && e.i !== f.interval) return;
                    s("wsPrice", w(c => {
                        e.i === "1m" && (c.price = Number(e.c), c.liveTime = Date.now()), e.i === f.interval && (c.time = e.t, c.trend = Number(e.p), c.high = Number(e.h), c.low = Number(e.l), c.open = Number(e.o))
                    }))
                }
                if (k && a.cmd === "COIN/TRANSACTION") {
                    const e = JSON.parse(a.data);
                    s("trades", w(c => {
                        e.userId === $.userId && (c.my = [e].concat(c.my).slice(0, 30)), c.public = [e].concat(c.public).slice(0, 30)
                    }))
                }
            }, "json");
        i.connect(), i.on("COIN/PRICE", o), i.emit("join", t), T(() => {
            i.off("COIN/PRICE", o), i.emit("leave", t), i.disconnect()
        })
    })
}

function ct() {
    const n = t => {
            s("bets", "public", [h(O({}, t), {
                distributeId: t.distributeId.toString()
            })].concat(f.bets.public).slice(0, 50))
        },
        i = t => {
            s("bets", "my", [h(O({}, t), {
                distributeId: t.distributeId.toString()
            })].concat(f.bets.my).slice(0, 50))
        };
    R(() => {
        const t = d("/g/data/bc"),
            o = d().decodeBind(n, y.BetLog),
            a = d().decodeBind(i, y.BetLog);
        t.connect();
        const e = t.on("allbetlog", o),
            c = t.on("mybetlog", a);
        T(() => {
            e.off("allbetlog"), c.off("mybetlog"), t.disconnect()
        })
    })
}
export {
    s as a, ct as b, Z as c, _ as d, ot as e, et as f, X as g, Y as h, tt as i, G as j, U as k, nt as l, Q as m, F as n, V as o, u as r, D as s, it as u, K as w
};