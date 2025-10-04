var g = Object.defineProperty,
    b = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty,
    m = Object.prototype.propertyIsEnumerable;
var o = (a, i, t) => i in a ? g(a, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : a[i] = t,
    r = (a, i) => {
        for (var t in i || (i = {})) n.call(i, t) && o(a, t, i[t]);
        if (l)
            for (var t of l(i)) m.call(i, t) && o(a, t, i[t]);
        return a
    },
    p = (a, i) => b(a, d(i));
var h = (a, i) => {
    var t = {};
    for (var s in a) n.call(a, s) && i.indexOf(s) < 0 && (t[s] = a[s]);
    if (a != null && l)
        for (var s of l(a)) i.indexOf(s) < 0 && m.call(a, s) && (t[s] = a[s]);
    return t
};
const e = s => {
        var c = s,
            {
                id: a,
                namespace: i
            } = c,
            t = h(c, ["id", "namespace"]);
        return p(r({}, t), {
            id: a,
            namespace: i
        })
    },
    k = e({
        id: "BaccaratSingle96",
        key: "baccarat",
        name: "BaccaratSingle",
        namespace: "/g/baccarat-single/96",
        validateLink: "https://bcgame-project.github.io/verify/baccaratsingle.html"
    }),
    y = e({
        id: "ClassicDice96",
        key: "classic-dice",
        name: "ClassicDice",
        namespace: "/g/cd/96",
        validateLink: "https://bcgame-project.github.io/verify/classicdice_new.html"
    }),
    v = e({
        id: "CoinFlip96",
        key: "coinflip",
        name: "CoinFlip",
        namespace: "/g/coinflip/96",
        validateLink: "https://bcgame-project.github.io/verify/coinflip_new.html"
    }),
    u = e({
        id: "Coloring96",
        key: "ring-of-fortune",
        name: "Coloring",
        namespace: "/g/coloring/96",
        validateLink: "https://bcgame-project.github.io/verify/ringOfFortune_new.html"
    }),
    f = e({
        id: "Crash96",
        name: "crash",
        namespace: "/g/cm",
        salt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
        key: "crash",
        validateLink: "https://bcgame-project.github.io/verify/crash.html"
    }),
    j = e({
        id: "FastParity96",
        key: "fastparity",
        name: "FastParity",
        namespace: "/g/fastParity/96",
        salt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
        validateLink: "https://bcgame-project.github.io/verify/parity.html"
    }),
    L = e({
        id: "HashDice96",
        key: "hash-dice",
        name: "HashDice",
        namespace: "/g/hd/96",
        validateLink: "https://bcgame-project.github.io/verify/hashdice.html"
    }),
    w = e({
        id: "Hilo96",
        key: "hilo",
        name: "Hilo",
        namespace: "/g/hilo/96",
        validateLink: "https://bcgame-project.github.io/verify/hilo.html"
    }),
    S = e({
        id: "Keno96",
        key: "keno-multiplayer",
        name: "Keno",
        namespace: "/g/keno/96",
        salt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
        validateLink: "https://bcgame-project.github.io/verify/keno.html"
    }),
    C = e({
        id: "KenoSingle96",
        key: "keno",
        name: "KenoSingle",
        namespace: "/g/kenos/96",
        validateLink: "https://bcgame-project.github.io/verify/keno_single.html"
    }),
    P = e({
        id: "Limbo96",
        key: "limbo",
        name: "Limbo",
        namespace: "/g/l/96",
        validateLink: "https://bcgame-project.github.io/verify/limbo.html"
    }),
    B = e({
        id: "Mines96",
        key: "mines",
        name: "Mines",
        namespace: "/g/mines/96",
        validateLink: "https://bcgame-project.github.io/verify/mines.html"
    }),
    D = e({
        id: "Parity96",
        key: "parity",
        name: "Parity",
        namespace: "/g/parity/96",
        salt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
        validateLink: "https://bcgame-project.github.io/verify/parity.html"
    }),
    _ = e({
        id: "Plinko96",
        key: "plinko",
        name: "Plinko",
        namespace: "/g/p/96",
        validateLink: "https://bcgame-project.github.io/verify/plinko.html"
    }),
    F = e({
        id: "RouletteSingle96",
        key: "roulette",
        name: "RouletteSingle",
        namespace: "/g/roulettes/96",
        validateLink: "https://bcgame-project.github.io/verify/roulettesingle_new.html"
    }),
    H = e({
        id: "Tower96",
        key: "tower-legend",
        name: "Tower",
        namespace: "/g/tower/96",
        validateLink: "https://bcgame-project.github.io/verify/tower.html"
    }),
    R = e({
        id: "Twist99",
        key: "twist",
        name: "Twist",
        namespace: "/g/twist/99",
        validateLink: "https://bcgame-project.github.io/verify/twist.html"
    }),
    K = e({
        id: "UltimateDice96",
        key: "ultimate-dice",
        name: "UltimateDice",
        namespace: "/g/ud/96",
        validateLink: "https://bcgame-project.github.io/verify/ultimatedice_new.html"
    }),
    T = e({
        id: "VideoPoker96",
        key: "video-poker",
        name: "VideoPoker",
        namespace: "/g/vp/96",
        validateLink: "https://bcgame-project.github.io/verify/videopoker.html"
    }),
    O = e({
        id: "Wheel96",
        key: "wheel",
        name: "Wheel",
        namespace: "/g/w/96",
        validateLink: "https://bcgame-project.github.io/verify/wheel.html"
    }),
    J = e({
        id: "Roulette96",
        key: "roulette-multiplayer",
        name: "roulette-multiplayer",
        namespace: "/g/rl",
        validateLink: "https://bcgame-project.github.io/verify/roulette.html"
    }),
    Z = e({
        id: "money-coming-by-jili",
        key: "slots",
        name: "Slots",
        namespace: "",
        validateLink: "https://bcgame-project.github.io/verify/slots.html"
    }),
    M = e({
        namespace: "/g/double/main",
        name: "Double",
        id: "Double",
        key: "double",
        validateLink: "https://bcgame-project.github.io/verify/double.html"
    }),
    U = {
        namespace: "/g/sc/main",
        name: "Cave",
        id: "SlotsCave",
        key: "cave",
        validateLink: "https://bcgame-project.github.io/verify/slots.html"
    },
    V = {
        namespace: "/g/ss/main",
        name: "SlotsSword",
        id: "SlotsSword",
        key: "sword",
        validateLink: "https://bcgame-project.github.io/verify/sword.html"
    },
    W = {
        name: "SlotsOrientalBeauties",
        namespace: "/g/sob/main",
        key: "oriental-beauties",
        id: "SlotsOrientalBeauties",
        salt: "",
        validateLink: "https://bcgame-project.github.io/verify/oriental-beauties.html"
    },
    q = {
        name: "blackjack",
        namespace: "/g/bj",
        key: "blackjack",
        id: "blackjack",
        salt: "",
        validateLink: "https://bcgame-project.github.io/verify/blackjack_new.html"
    },
    x = {
        name: "Baccarat",
        namespace: "/g/bacc/main",
        key: "baccarat-multiplayer",
        id: "baccarat-multiplayer",
        salt: "",
        validateLink: "https://bcgame-project.github.io/verify/baccarat.html"
    },
    G = e({
        id: "StellarRush",
        key: "stellar-rush",
        name: "StellarRush",
        namespace: "/g/stellar-rush",
        validateLink: "https://bcgame-project.github.io/verify/stellar_rush.html"
    }),
    z = {
        id: "Bingo",
        key: "bingo",
        name: "Bingo",
        namespace: "/g/bingo",
        validateLink: "https://bcgame-project.github.io/verify/bingo.html"
    },
    A = e({
        id: "Color",
        key: "color",
        name: "Color",
        namespace: "/g/color",
        validateLink: "https://bcgame-project.github.io/verify/color.html"
    }),
    E = e({
        id: "FastCrash",
        key: "fast-crash",
        name: "fastCrash",
        namespace: "/g/f-crash",
        validateLink: "https://bcgame-project.github.io/verify/fast_crash.html"
    }),
    I = e({
        id: "Patti",
        key: "patti",
        name: "Patti",
        namespace: "/g/patti",
        salt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
        validateLink: "https://bcgame-project.github.io/verify/patti.html"
    }),
    N = e({
        id: "SeaDice",
        key: "fish-prawn-crab",
        name: "SeaDice",
        namespace: "/g/seadice",
        validateLink: "https://bcgame-project.github.io/verify/sicbo-multiplayer.html"
    }),
    Q = e({
        id: "Jade",
        key: "jade",
        name: "Jade",
        namespace: "/g/jade",
        validateLink: "https://bcgame-project.github.io/verify/new_jade.html"
    }),
    $ = e({
        id: "SicBo",
        key: "sicbo-multiplayer",
        name: "SicBo",
        namespace: "/g/sicbo",
        salt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
        validateLink: "https://bcgame-project.github.io/verify/sicbo-multiplayer.html"
    }),
    X = e({
        id: "BulletSpin",
        key: "bullet-spin",
        name: "bulletSpin",
        namespace: "/g/bs",
        validateLink: "https://bcgame-project.github.io/verify/bullet.html"
    }),
    ee = e({
        id: "Hotpot",
        key: "hotpot",
        name: "Hotpot",
        namespace: "/g/hp",
        salt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
        validateLink: "https://bcgame-project.github.io/verify/hotpot.html"
    }),
    ae = [k, y, v, u, f, j, L, w, S, C, P, B, D, _, F, H, R, K, T, O, J, M, U, V, W, q, G, x, z, A, E, I, Q, N, X];
export {
    k as B, y as C, M as D, j as F, ae as G, w as H, Q as J, C as K, P as L, B as M, W as O, D as P, F as R, Z as S, R as T, K as U, T as V, O as W, v as a, f as b, _ as c, A as d, U as e, G as f, L as g, S as h, u as i, H as j, E as k, J as l, z as m, I as n, $ as o, N as p, X as q, ee as r, x as s, q as t, V as u
};