var Rt = Object.defineProperty,
    Dt = Object.defineProperties;
var At = Object.getOwnPropertyDescriptors;
var Be = Object.getOwnPropertySymbols;
var Ot = Object.prototype.hasOwnProperty,
    Tt = Object.prototype.propertyIsEnumerable;
var Ne = (t, e, r) => e in t ? Rt(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Le = (t, e) => {
        for (var r in e || (e = {})) Ot.call(e, r) && Ne(t, r, e[r]);
        if (Be)
            for (var r of Be(e)) Tt.call(e, r) && Ne(t, r, e[r]);
        return t
    },
    je = (t, e) => Dt(t, At(e));
var T = (t, e, r) => new Promise((n, u) => {
    var a = o => {
            try {
                l(r.next(o))
            } catch (s) {
                u(s)
            }
        },
        w = o => {
            try {
                l(r.throw(o))
            } catch (s) {
                u(s)
            }
        },
        l = o => o.done ? n(o.value) : Promise.resolve(o.value).then(a, w);
    l((r = r.apply(t, e)).next())
});
import {
    _ as f,
    a4 as U,
    A as C,
    x as Q,
    z as Ve,
    a5 as Re,
    a6 as we,
    n as i,
    a7 as $,
    f as ee,
    o as ue,
    a8 as Ut,
    c as V,
    m as D,
    q as S,
    a9 as De,
    e as ke,
    b as ce,
    v as d,
    r as ge,
    C as J,
    t as te,
    aa as Ft,
    ab as z,
    S as M,
    ac as Ae,
    Z as me,
    L as Oe,
    N as qt,
    H as A,
    k as ve,
    ad as gt,
    y as q,
    D as Ye,
    a as mt,
    ae as zt,
    I as Wt,
    B as Ie,
    af as ht,
    O as Zt,
    ag as Ht,
    J as $t,
    j as pt,
    ah as W,
    a0 as Gt,
    w as Bt,
    ai as ne,
    aj as ae,
    a3 as Ke,
    i as Nt,
    p as Xe,
    U as jt
} from "./manifest-794ca152.js";
import {
    b as ie,
    u as Yt
} from "./router-acbf143e.js";
import {
    L as Je
} from "./LayoutTitle-2164de52.js";
import {
    u as Te,
    a as Kt,
    S as Qe,
    b as Xt,
    c as Jt,
    M as Qt,
    d as e1,
    N as t1,
    H as i1,
    f as wt,
    G as Me
} from "./game-ab00b977.js";
import {
    S as vt
} from "./SingleBigArrow-a0315adb.js";
import {
    t as b
} from "./i18n-3675d599.js";
import {
    c as r1,
    S as se,
    u as n1
} from "./SA27V5YJ-a6e76733.js";
import {
    c as a1
} from "./utils-65805dbc.js";
import {
    c as s1
} from "./LR7LBJN3-58796c8d.js";
import {
    _ as l1,
    P as re,
    m as ft,
    a as o1,
    b as d1,
    d as u1
} from "./index-a8d0e4cd.js";
import c1 from "./index-50a70d9f.js";
import {
    T as g1,
    a as m1,
    b as et,
    c as le,
    d as h1,
    e as oe
} from "./table-996ab517.js";
import {
    I as p1
} from "./ImgShareSignal-5cb27291.js";
const P = {
    "classic-dice": () => f(() =>
        import ("./index-df9e5804.js"), ["assets/index-df9e5804.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/number-field-31142d3d.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/Counter-df256d18.js", "assets/animate.es-7d48ea54.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/WinAmount-c12b9153.js", "assets/payout-62dd0e57.js", "assets/game-027ed3d6.js", "assets/auto-play-659d96fc.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/insure-log-a6221716.js", "assets/Sound-24df7758.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/use-game-strategy-0b4a5a67.js", "assets/RequireLogin-f61eab73.js", "assets/enc-utf8-3e9b2460.js", "assets/BookIcon-ecca0b11.js", "assets/Result-995f1047.js", "assets/Chance-ed472603.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    baccarat: () => f(() =>
        import ("./index-513305df.js"), ["assets/index-513305df.js", "assets/manifest-794ca152.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/bet-guard-6806a19d.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/SingleBigArrow-a0315adb.js", "assets/use-coin-format-7215be04.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/festival-snow-right-4613ab85.js", "assets/SingleBetButton-df3c0c58.js", "assets/Sound-24df7758.js", "assets/game-027ed3d6.js", "assets/deduction-431888fc.js", "assets/single-stage-game-db613176.js", "assets/turbo-a8ad85c7.js", "assets/auto-play-659d96fc.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/AutoBetControls-fbb19a2e.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/GameCard-a105979b.js", "assets/index-e0754325.js", "assets/Chip-4a3bae30.js", "assets/Poker-a9516a86.js", "assets/index-c787f276.js", "assets/index-d125ec55.css", "assets/insure-log-a6221716.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    coinflip: () => f(() =>
        import ("./index-529c30df.js"), ["assets/index-529c30df.js", "assets/manifest-794ca152.js", "assets/Banner-f66d3fb7.js", "assets/FloatingGameButton-502424a2.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/i18n-3675d599.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/lt-a172ca8e.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/deduction-431888fc.js", "assets/multi-stage-game-765d25c3.js", "assets/turbo-a8ad85c7.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/last-0ddf2762.js", "assets/animate.es-7d48ea54.js", "assets/index-0e82f4b6.js", "assets/clamp-f5b668c4.js", "assets/Sound-24df7758.js", "assets/game-027ed3d6.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    crash: () => f(() =>
        import ("./index-ab3c7c09.js"), ["assets/index-ab3c7c09.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/Game-d78215f7.js", "assets/sha256-2c558029.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/config-b7b855c3.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/router-acbf143e.js", "assets/GameScript-9fea6837.js", "assets/enc-utf8-3e9b2460.js", "assets/Message-f1b40bc8.js", "assets/events-25bc2bc4.js", "assets/Sound-24df7758.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameUserScript-d42e5a53.js", "assets/payout-62dd0e57.js", "assets/game-027ed3d6.js", "assets/RequireLogin-f61eab73.js", "assets/deduction-431888fc.js", "assets/SingleBetButton-df3c0c58.js", "assets/MultiLogs-2158440c.js", "assets/MoreLessBtn-260b6b47.js", "assets/TextOverflow-b23ddeaa.js", "assets/index-efa02a1e.js", "assets/Trends-e9979fc6.js", "assets/profit_line_light-69c485d1.js", "assets/throttleTime-146e5b55.js", "assets/A-51af66b0.js", "assets/SpineAnimationPlayer-dcbe9fae.js", "assets/Player-1bad0309.js", "assets/Guide-76e7515a.js", "assets/BookIcon-ecca0b11.js", "assets/LabelWithTooltip-63e1d5d6.js", "assets/tooltip-9e6dfa82.js", "assets/Tag-d96705bc.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/Result-995f1047.js", "assets/Chance-ed472603.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    wheel: () => f(() =>
        import ("./index-b51d4e4d.js"), ["assets/index-b51d4e4d.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/number-field-31142d3d.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/auto-play-659d96fc.js", "assets/game-027ed3d6.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/Sound-24df7758.js", "assets/index-e0754325.js", "assets/last-0ddf2762.js", "assets/PixiApp-b5b391a5.js", "assets/isEqual-1caf8545.js", "assets/WinAmount-c12b9153.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    double: () => f(() =>
        import ("./index-ec14e390.js"), ["assets/index-ec14e390.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/sha256-2c558029.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/config-b7b855c3.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/router-acbf143e.js", "assets/Sound-24df7758.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/toggle-group-8aa60e5a.js", "assets/MoreLessBtn-260b6b47.js", "assets/sortBy-1b7b7856.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/SingleBetButton-df3c0c58.js", "assets/MultiLogs-2158440c.js", "assets/TextOverflow-b23ddeaa.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/Trends-e9979fc6.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    hilo: () => f(() =>
        import ("./index-9401322f.js"), ["assets/index-9401322f.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/bet-guard-6806a19d.js", "assets/amount-63fd0790.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/router-acbf143e.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/SingleBigArrow-a0315adb.js", "assets/use-coin-format-7215be04.js", "assets/Banner-f66d3fb7.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/lt-a172ca8e.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/multi-stage-game-765d25c3.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/Sound-24df7758.js", "assets/game-027ed3d6.js", "assets/Poker-a9516a86.js", "assets/animate.es-7d48ea54.js", "assets/last-0ddf2762.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    keno: () => f(() =>
        import ("./index-413954fa.js"), ["assets/index-413954fa.js", "assets/manifest-794ca152.js", "assets/howler-a9f37d8a.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/i18n-3675d599.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/auto-play-659d96fc.js", "assets/game-027ed3d6.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/payouts-a4b1cb57.js", "assets/lottie-1e1fe62a.js", "assets/insure-log-a6221716.js", "assets/Sound-24df7758.js", "assets/isNull-df6b0e11.js", "assets/Autopick-13b6a8e9.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    limbo: () => f(() =>
        import ("./index-20cce6c0.js"), ["assets/index-20cce6c0.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/router-acbf143e.js", "assets/bet-guard-6806a19d.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/SingleBigArrow-a0315adb.js", "assets/use-coin-format-7215be04.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/festival-snow-right-4613ab85.js", "assets/SingleBetButton-df3c0c58.js", "assets/Sound-24df7758.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/auto-play-659d96fc.js", "assets/game-027ed3d6.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/insure-log-a6221716.js", "assets/index-0e82f4b6.js", "assets/clamp-f5b668c4.js", "assets/animate.es-7d48ea54.js", "assets/steps-7e299bb9.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/use-game-strategy-0b4a5a67.js", "assets/RequireLogin-f61eab73.js", "assets/enc-utf8-3e9b2460.js", "assets/BookIcon-ecca0b11.js", "assets/payout-62dd0e57.js", "assets/Result-995f1047.js", "assets/Chance-ed472603.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    mines: () => f(() =>
        import ("./index-17506a66.js"), ["assets/index-17506a66.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/number-field-31142d3d.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/deduction-431888fc.js", "assets/auto-play-659d96fc.js", "assets/game-027ed3d6.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/multi-stage-game-765d25c3.js", "assets/turbo-a8ad85c7.js", "assets/tooltip-9e6dfa82.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/animate.es-7d48ea54.js", "assets/steps-7e299bb9.js", "assets/clamp-f5b668c4.js", "assets/Sound-24df7758.js", "assets/Autopick-13b6a8e9.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/last-0ddf2762.js", "assets/groupBy-892088dc.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    parity: () => f(() =>
        import ("./index-acd56115.js"), ["assets/index-acd56115.js", "assets/manifest-794ca152.js", "assets/bet-guard-6806a19d.js", "assets/amount-63fd0790.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/SingleBigArrow-a0315adb.js", "assets/use-coin-format-7215be04.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/index-d162894a.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/table-996ab517.js", "assets/MultiLogs-2158440c.js", "assets/MoreLessBtn-260b6b47.js", "assets/TextOverflow-b23ddeaa.js", "assets/sha256-2c558029.js", "assets/Sound-24df7758.js", "assets/get-number-amount-5710d40c.js", "assets/throttleTime-146e5b55.js", "assets/maxBy-f7bd8493.js", "assets/profit_line_light-69c485d1.js", "assets/deduction-431888fc.js", "assets/index-c787f276.js", "assets/index-d125ec55.css", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/SingleBetButton-df3c0c58.js", "assets/Trends-e9979fc6.js", "assets/Result-995f1047.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    plinko: () => f(() =>
        import ("./index-d313704e.js"), ["assets/index-d313704e.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/number-field-31142d3d.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/auto-play-659d96fc.js", "assets/game-027ed3d6.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/Sound-24df7758.js", "assets/events-25bc2bc4.js", "assets/PixiApp-b5b391a5.js", "assets/pixi-particles.es-6722e1d4.js", "assets/index-e0754325.js", "assets/isEqual-1caf8545.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/use-game-strategy-0b4a5a67.js", "assets/RequireLogin-f61eab73.js", "assets/enc-utf8-3e9b2460.js", "assets/BookIcon-ecca0b11.js", "assets/delay-2d1f8439.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js", "assets/index-0598ff4a.css"]),
    color: () => f(() =>
        import ("./index-fc6555c2.js"), ["assets/index-fc6555c2.js", "assets/manifest-794ca152.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/SingleBetButton-df3c0c58.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/Sound-24df7758.js", "assets/game-027ed3d6.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/auto-play-659d96fc.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/AutoBetControls-fbb19a2e.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/WebGL-de4c09c8.js", "assets/SpineAnimationPlayer-dcbe9fae.js", "assets/Player-1bad0309.js", "assets/index-c787f276.js", "assets/index-d125ec55.css", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    cave: () => f(() =>
        import ("./index-f6e4817f.js"), ["assets/index-f6e4817f.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/bet-guard-6806a19d.js", "assets/amount-63fd0790.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/router-acbf143e.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/SingleBigArrow-a0315adb.js", "assets/use-coin-format-7215be04.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/index-d162894a.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/multi-stage-game-765d25c3.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/game-027ed3d6.js", "assets/PixiApp-b5b391a5.js", "assets/pixi-particles.es-6722e1d4.js", "assets/index-bf4e7bbd.js", "assets/_baseRandom-814e012e.js", "assets/GameCard-a105979b.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/auto-play-659d96fc.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/AutoBetControls-fbb19a2e.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    jade: () => f(() =>
        import ("./index-fee921b7.js"), ["assets/index-fee921b7.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/user-dca4827e.js", "assets/bet-guard-6806a19d.js", "assets/amount-63fd0790.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/game-ab00b977.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/router-acbf143e.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/SingleBigArrow-a0315adb.js", "assets/use-coin-format-7215be04.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/festival-snow-right-4613ab85.js", "assets/SingleBetButton-df3c0c58.js", "assets/Sound-24df7758.js", "assets/game-027ed3d6.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/auto-play-659d96fc.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/AutoBetControls-fbb19a2e.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/Player-1bad0309.js", "assets/SpineAnimationPlayer-dcbe9fae.js", "assets/animate.es-7d48ea54.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/delay-2d1f8439.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    roulette: () => f(() =>
        import ("./index-cd3e9a65.js"), ["assets/index-cd3e9a65.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/howler-a9f37d8a.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/SingleBetButton-df3c0c58.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/Payouts-a14eb889.js", "assets/Chip-4a3bae30.js", "assets/Sound-24df7758.js", "assets/game-027ed3d6.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/auto-play-659d96fc.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js", "assets/index-20822ff2.css"]),
    "stellar-rush": () => f(() =>
        import ("./index-7a82ebee.js"), ["assets/index-7a82ebee.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/number-field-31142d3d.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/deduction-431888fc.js", "assets/auto-play-659d96fc.js", "assets/game-027ed3d6.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/multi-stage-game-765d25c3.js", "assets/turbo-a8ad85c7.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/Sound-24df7758.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/index-bf4e7bbd.js", "assets/animate.es-7d48ea54.js", "assets/delay-2d1f8439.js", "assets/last-0ddf2762.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js", "assets/index-7d9034d1.css"]),
    RouletteSingle: () => f(() =>
        import ("./index-cd3e9a65.js"), ["assets/index-cd3e9a65.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/howler-a9f37d8a.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/SingleBetButton-df3c0c58.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/Payouts-a14eb889.js", "assets/Chip-4a3bae30.js", "assets/Sound-24df7758.js", "assets/game-027ed3d6.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/auto-play-659d96fc.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js", "assets/index-20822ff2.css"]),
    twist: () => f(() =>
        import ("./index-aa9a976a.js"), ["assets/index-aa9a976a.js", "assets/manifest-794ca152.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/bet-guard-6806a19d.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/SingleBigArrow-a0315adb.js", "assets/use-coin-format-7215be04.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/festival-snow-right-4613ab85.js", "assets/SingleBetButton-df3c0c58.js", "assets/Sound-24df7758.js", "assets/game-027ed3d6.js", "assets/deduction-431888fc.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/WinAmount-c12b9153.js", "assets/animate.es-7d48ea54.js", "assets/multi-stage-game-765d25c3.js", "assets/turbo-a8ad85c7.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    fastparity: () => f(() =>
        import ("./index-acd56115.js"), ["assets/index-acd56115.js", "assets/manifest-794ca152.js", "assets/bet-guard-6806a19d.js", "assets/amount-63fd0790.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/SingleBigArrow-a0315adb.js", "assets/use-coin-format-7215be04.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/index-d162894a.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/table-996ab517.js", "assets/MultiLogs-2158440c.js", "assets/MoreLessBtn-260b6b47.js", "assets/TextOverflow-b23ddeaa.js", "assets/sha256-2c558029.js", "assets/Sound-24df7758.js", "assets/get-number-amount-5710d40c.js", "assets/throttleTime-146e5b55.js", "assets/maxBy-f7bd8493.js", "assets/profit_line_light-69c485d1.js", "assets/deduction-431888fc.js", "assets/index-c787f276.js", "assets/index-d125ec55.css", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/SingleBetButton-df3c0c58.js", "assets/Trends-e9979fc6.js", "assets/Result-995f1047.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "hash-dice": () => f(() =>
        import ("./index-166dad49.js"), ["assets/index-166dad49.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/howler-a9f37d8a.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/deduction-431888fc.js", "assets/game-027ed3d6.js", "assets/auto-play-659d96fc.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/single-stage-game-db613176.js", "assets/turbo-a8ad85c7.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/Sound-24df7758.js", "assets/GameScript-9fea6837.js", "assets/enc-utf8-3e9b2460.js", "assets/Message-f1b40bc8.js", "assets/events-25bc2bc4.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/GameUserScript-d42e5a53.js", "assets/payout-62dd0e57.js", "assets/RequireLogin-f61eab73.js", "assets/Result-995f1047.js", "assets/Chance-ed472603.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "keno-multiplayer": () => f(() =>
        import ("./index-26023aca.js"), ["assets/index-26023aca.js", "assets/manifest-794ca152.js", "assets/user-dca4827e.js", "assets/sha256-2c558029.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/payouts-a4b1cb57.js", "assets/lottie-1e1fe62a.js", "assets/Sound-24df7758.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/isNull-df6b0e11.js", "assets/MultiLogs-2158440c.js", "assets/MoreLessBtn-260b6b47.js", "assets/TextOverflow-b23ddeaa.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Autopick-13b6a8e9.js", "assets/get-number-amount-5710d40c.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/SingleBetButton-df3c0c58.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "ring-of-fortune": () => f(() =>
        import ("./index-8bf63299.js"), ["assets/index-8bf63299.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/user-dca4827e.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/router-acbf143e.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/SingleBetButton-df3c0c58.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/Sound-24df7758.js", "assets/game-027ed3d6.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/auto-play-659d96fc.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/AutoBetControls-fbb19a2e.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/insure-log-a6221716.js", "assets/index-0e82f4b6.js", "assets/clamp-f5b668c4.js", "assets/animate.es-7d48ea54.js", "assets/index.es-7f7492fe.js", "assets/delay-2d1f8439.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "tower-legend": () => f(() =>
        import ("./index-46f95c83.js"), ["assets/index-46f95c83.js", "assets/manifest-794ca152.js", "assets/howler-a9f37d8a.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/i18n-3675d599.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/OtherPage-d9f95f79.js", "assets/lt-a172ca8e.js", "assets/index-d162894a.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/table-996ab517.js", "assets/Sound-24df7758.js", "assets/animate.es-7d48ea54.js", "assets/steps-7e299bb9.js", "assets/clamp-f5b668c4.js", "assets/radio-group-b155dcb5.js", "assets/toggle-group-8aa60e5a.js", "assets/isNull-df6b0e11.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/SingleLogs-bfd991ab.js", "assets/SingleBetButton-df3c0c58.js", "assets/TextOverflow-b23ddeaa.js", "assets/game-027ed3d6.js", "assets/last-0ddf2762.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "ultimate-dice": () => f(() =>
        import ("./index-522aa71a.js"), ["assets/index-522aa71a.js", "assets/manifest-794ca152.js", "assets/number-field-31142d3d.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/radio-group-b155dcb5.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/i18n-3675d599.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/Counter-df256d18.js", "assets/animate.es-7d48ea54.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/auto-play-659d96fc.js", "assets/game-027ed3d6.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/insure-log-a6221716.js", "assets/Sound-24df7758.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/use-game-strategy-0b4a5a67.js", "assets/RequireLogin-f61eab73.js", "assets/enc-utf8-3e9b2460.js", "assets/BookIcon-ecca0b11.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "video-poker": () => f(() =>
        import ("./index-4b625a46.js"), ["assets/index-4b625a46.js", "assets/manifest-794ca152.js", "assets/OtherPage-d9f95f79.js", "assets/FloatingGameButton-502424a2.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/i18n-3675d599.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/use-coin-format-7215be04.js", "assets/lt-a172ca8e.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/index-d162894a.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/table-996ab517.js", "assets/SingleLogs-bfd991ab.js", "assets/SingleBetButton-df3c0c58.js", "assets/TextOverflow-b23ddeaa.js", "assets/game-027ed3d6.js", "assets/GameCard-a105979b.js", "assets/Sound-24df7758.js", "assets/groupBy-892088dc.js", "assets/sortBy-1b7b7856.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/Poker-a9516a86.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "fast-crash": () => f(() =>
        import ("./index-63f4651b.js"), ["assets/index-63f4651b.js", "assets/manifest-794ca152.js", "assets/Banner-f66d3fb7.js", "assets/FloatingGameButton-502424a2.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/i18n-3675d599.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/lt-a172ca8e.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/table-996ab517.js", "assets/deduction-431888fc.js", "assets/multi-stage-game-765d25c3.js", "assets/turbo-a8ad85c7.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/Sound-24df7758.js", "assets/game-027ed3d6.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/AutoBetControls-fbb19a2e.js", "assets/Game-d78215f7.js", "assets/sha256-2c558029.js", "assets/GameScript-9fea6837.js", "assets/enc-utf8-3e9b2460.js", "assets/Message-f1b40bc8.js", "assets/events-25bc2bc4.js", "assets/SingleBetButton-df3c0c58.js", "assets/index-efa02a1e.js", "assets/auto-play-659d96fc.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/Result-995f1047.js", "assets/Chance-ed472603.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "roulette-multiplayer": () => f(() =>
        import ("./index-9e2c15b8.js"), ["assets/index-9e2c15b8.js", "assets/manifest-794ca152.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/i18n-3675d599.js", "assets/FloatingGameButton-502424a2.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/use-coin-format-7215be04.js", "assets/index-d162894a.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/table-996ab517.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/Sound-24df7758.js", "assets/Payouts-a14eb889.js", "assets/Chip-4a3bae30.js", "assets/game-027ed3d6.js", "assets/MultiLogs-2158440c.js", "assets/MoreLessBtn-260b6b47.js", "assets/TextOverflow-b23ddeaa.js", "assets/sha256-2c558029.js", "assets/A-51af66b0.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js", "assets/index-653003ad.css"]),
    bingo: () => f(() =>
        import ("./index-c2db7b78.js"), ["assets/index-c2db7b78.js", "assets/manifest-794ca152.js", "assets/user-dca4827e.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/howler-a9f37d8a.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/SingleBetButton-df3c0c58.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/Sound-24df7758.js", "assets/single-stage-game-db613176.js", "assets/deduction-431888fc.js", "assets/turbo-a8ad85c7.js", "assets/auto-play-659d96fc.js", "assets/game-027ed3d6.js", "assets/_baseRest-7102de6b.js", "assets/_isIterateeCall-d544081d.js", "assets/AutoBetControls-fbb19a2e.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/PixiApp-b5b391a5.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    patti: () => f(() =>
        import ("./index-066c49aa.js"), ["assets/index-066c49aa.js", "assets/manifest-794ca152.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/i18n-3675d599.js", "assets/FloatingGameButton-502424a2.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/use-coin-format-7215be04.js", "assets/index-d162894a.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/Sound-24df7758.js", "assets/MultiLogs-2158440c.js", "assets/MoreLessBtn-260b6b47.js", "assets/TextOverflow-b23ddeaa.js", "assets/sha256-2c558029.js", "assets/GameCard-a105979b.js", "assets/index-e0754325.js", "assets/Chip-4a3bae30.js", "assets/groupBy-892088dc.js", "assets/maxBy-f7bd8493.js", "assets/Poker-a9516a86.js", "assets/index-c787f276.js", "assets/index-d125ec55.css", "assets/profit_line_light-69c485d1.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/A-51af66b0.js", "assets/AutoBetControls-fbb19a2e.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js", "assets/index-e8a47723.css"]),
    "sicbo-multiplayer": () => f(() =>
        import ("./index-e8a616a5.js"), ["assets/index-e8a616a5.js", "assets/manifest-794ca152.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/i18n-3675d599.js", "assets/FloatingGameButton-502424a2.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/use-coin-format-7215be04.js", "assets/index-d162894a.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/table-996ab517.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/Sound-24df7758.js", "assets/Chip-4a3bae30.js", "assets/WebGL-de4c09c8.js", "assets/OrbitControls-bfcbb9b5.js", "assets/index-c787f276.js", "assets/index-d125ec55.css", "assets/animate.es-7d48ea54.js", "assets/MultiLogs-2158440c.js", "assets/MoreLessBtn-260b6b47.js", "assets/TextOverflow-b23ddeaa.js", "assets/sha256-2c558029.js", "assets/A-51af66b0.js", "assets/Trends-e9979fc6.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js", "assets/index-3d0e1de1.css"]),
    "fish-prawn-crab": () => f(() =>
        import ("./index-360c9d72.js"), ["assets/index-360c9d72.js", "assets/manifest-794ca152.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/i18n-3675d599.js", "assets/FloatingGameButton-502424a2.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/use-coin-format-7215be04.js", "assets/index-d162894a.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/table-996ab517.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/Sound-24df7758.js", "assets/Chip-4a3bae30.js", "assets/WebGL-de4c09c8.js", "assets/OrbitControls-bfcbb9b5.js", "assets/index-c787f276.js", "assets/index-d125ec55.css", "assets/MultiLogs-2158440c.js", "assets/MoreLessBtn-260b6b47.js", "assets/TextOverflow-b23ddeaa.js", "assets/sha256-2c558029.js", "assets/A-51af66b0.js", "assets/Trends-e9979fc6.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js", "assets/index-3d0e1de1.css"]),
    "bullet-spin": () => f(() =>
        import ("./index-c43b90a4.js"), ["assets/index-c43b90a4.js", "assets/manifest-794ca152.js", "assets/i18n-3675d599.js", "assets/howler-a9f37d8a.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/index-d8e2fe13.js", "assets/use-coin-format-7215be04.js", "assets/festival-snow-right-4613ab85.js", "assets/Banner-f66d3fb7.js", "assets/lt-a172ca8e.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/GameBankrollHelp-a5bf6723.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/table-996ab517.js", "assets/SingleBetButton-df3c0c58.js", "assets/deduction-431888fc.js", "assets/multi-stage-game-765d25c3.js", "assets/turbo-a8ad85c7.js", "assets/SingleLogs-680acae3.js", "assets/TextOverflow-b23ddeaa.js", "assets/Sound-24df7758.js", "assets/game-027ed3d6.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/index-bf4e7bbd.js", "assets/lottie-1e1fe62a.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js", "assets/index-7d9034d1.css"]),
    hotpot: () => f(() =>
        import ("./index-b1907d37.js"), ["assets/index-b1907d37.js", "assets/manifest-794ca152.js", "assets/OtherPage-d9f95f79.js", "assets/FloatingGameButton-502424a2.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/resolve-elements.es-b5b56e58.js", "assets/utils-65805dbc.js", "assets/i18n-3675d599.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/router-acbf143e.js", "assets/FloatingGameButton-6e24fec7.css", "assets/index-d8e2fe13.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/config-b7b855c3.js", "assets/use-coin-format-7215be04.js", "assets/lt-a172ca8e.js", "assets/howler-a9f37d8a.js", "assets/festival-snow-right-4613ab85.js", "assets/index-d162894a.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/table-996ab517.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css", "assets/MoreLessBtn-260b6b47.js", "assets/MultiLogs-2158440c.js", "assets/TextOverflow-b23ddeaa.js", "assets/sha256-2c558029.js", "assets/Sound-24df7758.js", "assets/index-c787f276.js", "assets/index-d125ec55.css", "assets/Player-1bad0309.js", "assets/_baseRandom-814e012e.js", "assets/_isIterateeCall-d544081d.js", "assets/animate.es-7d48ea54.js", "assets/A-51af66b0.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "baccarat-multiplayer": () => f(() =>
        import ("./index-ce38b5d9.js"), ["assets/index-ce38b5d9.js", "assets/manifest-794ca152.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/CocosLogs-4e9da8f5.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/table-996ab517.js", "assets/MoreLessBtn-260b6b47.js", "assets/use-coin-format-7215be04.js", "assets/index-d8e2fe13.js", "assets/CocosGameLayout-6aa26f09.js", "assets/FullScreen-d03cb8c2.js", "assets/radio-group-b155dcb5.js", "assets/Message-f1b40bc8.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/Result-995f1047.js", "assets/Poker-a9516a86.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    blackjack: () => f(() =>
        import ("./index-ba683c76.js"), ["assets/index-ba683c76.js", "assets/manifest-794ca152.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/CocosLogs-4e9da8f5.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/table-996ab517.js", "assets/MoreLessBtn-260b6b47.js", "assets/use-coin-format-7215be04.js", "assets/index-d8e2fe13.js", "assets/CocosGameLayout-6aa26f09.js", "assets/FullScreen-d03cb8c2.js", "assets/radio-group-b155dcb5.js", "assets/Message-f1b40bc8.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "oriental-beauties": () => f(() =>
        import ("./index-a1e24754.js"), ["assets/index-a1e24754.js", "assets/manifest-794ca152.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/SingleLogs-680acae3.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/table-996ab517.js", "assets/use-coin-format-7215be04.js", "assets/index-d8e2fe13.js", "assets/TextOverflow-b23ddeaa.js", "assets/CocosGameLayout-6aa26f09.js", "assets/FullScreen-d03cb8c2.js", "assets/radio-group-b155dcb5.js", "assets/Message-f1b40bc8.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/game-027ed3d6.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    sword: () => f(() =>
        import ("./index-7b70d999.js"), ["assets/index-7b70d999.js", "assets/manifest-794ca152.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/SingleLogs-680acae3.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/table-996ab517.js", "assets/use-coin-format-7215be04.js", "assets/index-d8e2fe13.js", "assets/TextOverflow-b23ddeaa.js", "assets/CocosGameLayout-6aa26f09.js", "assets/FullScreen-d03cb8c2.js", "assets/radio-group-b155dcb5.js", "assets/Message-f1b40bc8.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/game-027ed3d6.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    slots: () => f(() =>
        import ("./index-dcba0710.js"), ["assets/index-dcba0710.js", "assets/manifest-794ca152.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/checkDownScore-2658bc1f.js", "assets/FullScreen-d03cb8c2.js", "assets/radio-group-b155dcb5.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/use-coin-format-7215be04.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/Message-f1b40bc8.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/table-996ab517.js", "assets/MoreLessBtn-260b6b47.js", "assets/index-d8e2fe13.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/festival-snow-right-4613ab85.js", "assets/groupBy-892088dc.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "bc-poker": () => f(() =>
        import ("./index-d8509e52.js"), ["assets/index-d8509e52.js", "assets/manifest-794ca152.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/checkDownScore-2658bc1f.js", "assets/FullScreen-d03cb8c2.js", "assets/radio-group-b155dcb5.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/use-coin-format-7215be04.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/Message-f1b40bc8.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/table-996ab517.js", "assets/MoreLessBtn-260b6b47.js", "assets/index-d8e2fe13.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/festival-snow-right-4613ab85.js", "assets/groupBy-892088dc.js", "assets/Reload-871d6a67.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "mela-slots": () => f(() =>
        import ("./index-80ead193.js"), ["assets/index-80ead193.js", "assets/manifest-794ca152.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/checkDownScore-2658bc1f.js", "assets/FullScreen-d03cb8c2.js", "assets/radio-group-b155dcb5.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/use-coin-format-7215be04.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/Message-f1b40bc8.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/table-996ab517.js", "assets/MoreLessBtn-260b6b47.js", "assets/index-d8e2fe13.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/festival-snow-right-4613ab85.js", "assets/groupBy-892088dc.js", "assets/Reload-871d6a67.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"]),
    "special-slots": () => f(() =>
        import ("./index-73da2731.js"), ["assets/index-73da2731.js", "assets/manifest-794ca152.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/checkDownScore-2658bc1f.js", "assets/FullScreen-d03cb8c2.js", "assets/radio-group-b155dcb5.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/use-coin-format-7215be04.js", "assets/FloatingGameButton-502424a2.js", "assets/resolve-elements.es-b5b56e58.js", "assets/E53DB7BS-04a1cc17.js", "assets/slider-34f15118.js", "assets/FloatingGameButton-6e24fec7.css", "assets/Message-f1b40bc8.js", "assets/bet-guard-6806a19d.js", "assets/SingleBigArrow-a0315adb.js", "assets/deduction-431888fc.js", "assets/table-996ab517.js", "assets/MoreLessBtn-260b6b47.js", "assets/index-d8e2fe13.js", "assets/LiveStats-811c0f5e.js", "assets/index-d162894a.js", "assets/festival-snow-right-4613ab85.js", "assets/groupBy-892088dc.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/ImgShareSignal-5cb27291.js"])
};
var w1 = C('<svg xmlns=http://www.w3.org/2000/svg width=24 height=28 viewBox="0 0 24 28"fill=none><path d="M11.4349 27.9996C17.7041 27.9996 22.7863 22.9174 22.7863 16.6482C22.7863 10.379 17.7041 5.29688 11.4349 5.29688C5.16573 5.29688 0.0835571 10.379 0.0835571 16.6482C0.0835571 22.9174 5.16573 27.9996 11.4349 27.9996Z"fill=#A3B2C9></path><path d="M16.7691 3.19814V9.21133H6.05347V3.15803C6.05347 2.73501 6.34406 2.3922 6.70276 2.3922C6.84125 2.3922 6.97595 2.44441 7.08871 2.54128L8.57876 3.83533C8.86785 4.08582 9.27422 4.01317 9.48687 3.67263C9.5073 3.63857 9.52622 3.60452 9.54211 3.56668L10.8498 0.548737C11.0133 0.171872 11.4045 0.0227906 11.7238 0.215764C11.8452 0.29168 11.9411 0.402087 11.9993 0.532845L13.3993 3.5803C13.5696 3.95263 13.9638 4.09036 14.2794 3.88906C14.31 3.86959 14.3388 3.84757 14.3657 3.82322L15.7241 2.59198C16.0086 2.33468 16.4157 2.39749 16.6344 2.73274C16.7215 2.86668 16.7691 3.03014 16.7691 3.1989V3.19814Z"fill=#B1D0E9></path><path d="M11.4114 26.4855C16.828 26.4855 21.219 22.0809 21.219 16.6477C21.219 11.2144 16.828 6.80981 11.4114 6.80981C5.99485 6.80981 1.60385 11.2144 1.60385 16.6477C1.60385 22.0809 5.99485 26.4855 11.4114 26.4855Z"fill=#C9DDE5></path><mask id=mask0_538_12474 maskUnits=userSpaceOnUse x=1 y=6 width=21 height=21><path d="M11.4113 26.4848C16.8278 26.4848 21.2188 22.0802 21.2188 16.6469C21.2188 11.2136 16.8278 6.80908 11.4113 6.80908C5.9947 6.80908 1.6037 11.2136 1.6037 16.6469C1.6037 22.0802 5.9947 26.4848 11.4113 26.4848Z"fill=white></path></mask><g mask=url(#mask0_538_12474)><path fill-rule=evenodd clip-rule=evenodd d="M-0.848117 28.9444L24.0121 4.34985H-1.75623L-0.848117 28.9444Z"fill=#D7EDF6></path></g><path d="M11.3905 20.1158L8.73504 20.731C8.68229 20.7432 8.62757 20.7438 8.57455 20.733C8.52153 20.7221 8.47145 20.7 8.4277 20.6682C8.38395 20.6363 8.34753 20.5955 8.32092 20.5484C8.2943 20.5012 8.2781 20.449 8.27342 20.395L8.03655 17.6806L6.63201 15.3452C6.60411 15.2988 6.58652 15.2469 6.58041 15.193C6.57431 15.1392 6.57984 15.0847 6.59663 15.0331C6.61342 14.9816 6.64107 14.9343 6.67773 14.8944C6.71438 14.8545 6.75918 14.823 6.80909 14.8019L9.31774 13.7386L11.1037 11.681C11.1392 11.64 11.1831 11.6071 11.2325 11.5845C11.2818 11.562 11.3355 11.5503 11.3897 11.5503C11.444 11.5503 11.4976 11.562 11.547 11.5845C11.5963 11.6071 11.6403 11.64 11.6758 11.681L13.4617 13.7394L15.9711 14.8019C16.0211 14.823 16.0659 14.8545 16.1025 14.8944C16.1392 14.9343 16.1668 14.9816 16.1836 15.0331C16.2004 15.0847 16.2059 15.1392 16.1998 15.193C16.1937 15.2469 16.1761 15.2988 16.1482 15.3452L14.7429 17.6806L14.5076 20.395C14.5029 20.449 14.4867 20.5014 14.46 20.5486C14.4334 20.5958 14.3969 20.6367 14.353 20.6685C14.3092 20.7004 14.259 20.7225 14.2059 20.7332C14.1528 20.744 14.098 20.7433 14.0452 20.731L11.3905 20.1158Z"fill=#A8CCE9></path><mask id=mask1_538_12474 maskUnits=userSpaceOnUse x=6 y=11 width=11 height=10><path d="M11.3907 20.1165L8.73525 20.7318C8.68251 20.7439 8.62778 20.7445 8.57476 20.7337C8.52174 20.7229 8.47167 20.7008 8.42791 20.6689C8.38416 20.6371 8.34775 20.5962 8.32113 20.5491C8.29452 20.502 8.27832 20.4497 8.27363 20.3958L8.03676 17.6813L6.63222 15.3459C6.60433 15.2995 6.58673 15.2476 6.58063 15.1938C6.57452 15.1399 6.58005 15.0854 6.59684 15.0339C6.61363 14.9824 6.64129 14.9351 6.67794 14.8952C6.7146 14.8552 6.7594 14.8237 6.80931 14.8026L9.31795 13.7393L11.1039 11.6817C11.1394 11.6407 11.1833 11.6078 11.2327 11.5852C11.2821 11.5627 11.3357 11.551 11.39 11.551C11.4442 11.551 11.4978 11.5627 11.5472 11.5852C11.5966 11.6078 11.6405 11.6407 11.676 11.6817L13.462 13.7401L15.9714 14.8026C16.0213 14.8237 16.0661 14.8552 16.1027 14.8952C16.1394 14.9351 16.167 14.9824 16.1838 15.0339C16.2006 15.0854 16.2061 15.1399 16.2 15.1938C16.1939 15.2476 16.1763 15.2995 16.1484 15.3459L14.7431 17.6813L14.5078 20.3958C14.5031 20.4498 14.4869 20.5021 14.4602 20.5493C14.4336 20.5965 14.3971 20.6374 14.3533 20.6693C14.3094 20.7011 14.2592 20.7232 14.2061 20.734C14.153 20.7448 14.0982 20.744 14.0454 20.7318L11.3907 20.1165Z"fill=white></path></mask><g mask=url(#mask1_538_12474)><path fill-rule=evenodd clip-rule=evenodd d="M-1.70736 29.6895L24.8525 3.49365H-2.67752L-1.70736 29.6895Z"fill=#C0DFF8>');
const tt = t => {
    return e = w1(), r = e.firstChild.nextSibling.nextSibling.nextSibling, n = r.nextSibling.nextSibling.nextSibling, U(e, t, !0, !0), r.style.setProperty("mask-type", "luminance"), n.style.setProperty("mask-type", "luminance"), e;
    var e, r, n
};
var v1 = C('<svg xmlns=http://www.w3.org/2000/svg width=24 height=28 viewBox="0 0 24 28"fill=none><path d="M11.4347 27.9986C17.7038 27.9986 22.786 22.9164 22.786 16.6472C22.786 10.3781 17.7038 5.2959 11.4347 5.2959C5.16549 5.2959 0.083313 10.3781 0.083313 16.6472C0.083313 22.9164 5.16549 27.9986 11.4347 27.9986Z"fill=#EA9227></path><path d="M16.7687 3.19765V9.21084H6.05304V3.15755C6.05304 2.73452 6.34363 2.39171 6.70234 2.39171C6.84082 2.39171 6.97553 2.44392 7.08828 2.54079L8.57834 3.83484C8.86742 4.08533 9.2738 4.01268 9.48644 3.67214C9.50688 3.63809 9.5258 3.60403 9.54169 3.56619L10.8494 0.548248C11.0128 0.171383 11.4041 0.0223023 11.7234 0.215275C11.8448 0.291192 11.9407 0.401599 11.9989 0.532356L13.3989 3.57982C13.5691 3.95214 13.9634 4.08987 14.279 3.88857C14.3096 3.8691 14.3384 3.84708 14.3653 3.82273L15.7236 2.59149C16.0082 2.33419 16.4153 2.39701 16.634 2.73225C16.721 2.86619 16.7687 3.02965 16.7687 3.19841V3.19765Z"fill=#FFD805></path><path d="M11.411 26.4852C16.8276 26.4852 21.2186 22.0807 21.2186 16.6474C21.2186 11.2141 16.8276 6.80957 11.411 6.80957C5.99445 6.80957 1.60345 11.2141 1.60345 16.6474C1.60345 22.0807 5.99445 26.4852 11.411 26.4852Z"fill=#FFB936></path><mask id=mask0_538_12402 maskUnits=userSpaceOnUse x=1 y=6 width=21 height=21><path d="M11.4111 26.4843C16.8277 26.4843 21.2187 22.0797 21.2187 16.6464C21.2187 11.2131 16.8277 6.80859 11.4111 6.80859C5.99454 6.80859 1.60355 11.2131 1.60355 16.6464C1.60355 22.0797 5.99454 26.4843 11.4111 26.4843Z"fill=white></path></mask><g mask=url(#mask0_538_12402)><path opacity=0.477 fill-rule=evenodd clip-rule=evenodd d="M-0.8483 28.9442L24.0119 4.34961H-1.75641L-0.8483 28.9442Z"fill=#FFEE94 fill-opacity=0.683></path></g><path d="M11.3898 20.1153L8.73434 20.7306C8.68159 20.7427 8.62686 20.7433 8.57385 20.7325C8.52083 20.7216 8.47075 20.6995 8.427 20.6677C8.38325 20.6359 8.34683 20.595 8.32022 20.5479C8.2936 20.5008 8.2774 20.4485 8.27271 20.3946L8.03585 17.6801L6.63131 15.3447C6.60341 15.2983 6.58581 15.2464 6.57971 15.1925C6.57361 15.1387 6.57914 15.0842 6.59592 15.0327C6.61271 14.9811 6.64037 14.9338 6.67703 14.8939C6.71368 14.854 6.75848 14.8225 6.80839 14.8014L9.31704 13.7381L11.103 11.6805C11.1385 11.6395 11.1824 11.6066 11.2318 11.584C11.2811 11.5615 11.3348 11.5498 11.389 11.5498C11.4433 11.5498 11.4969 11.5615 11.5463 11.584C11.5956 11.6066 11.6396 11.6395 11.6751 11.6805L13.461 13.7389L15.9704 14.8014C16.0204 14.8225 16.0652 14.854 16.1018 14.8939C16.1385 14.9338 16.1661 14.9811 16.1829 15.0327C16.1997 15.0842 16.2052 15.1387 16.1991 15.1925C16.193 15.2464 16.1754 15.2983 16.1475 15.3447L14.7422 17.6801L14.5069 20.3946C14.5022 20.4486 14.486 20.5009 14.4593 20.5481C14.4327 20.5953 14.3962 20.6362 14.3523 20.668C14.3085 20.6999 14.2583 20.722 14.2052 20.7328C14.1521 20.7435 14.0973 20.7428 14.0445 20.7306L11.3898 20.1153Z"fill=#FFD805></path><mask id=mask1_538_12402 maskUnits=userSpaceOnUse x=6 y=11 width=11 height=10><path d="M11.3892 20.1163L8.73376 20.7315C8.68101 20.7436 8.62628 20.7443 8.57327 20.7335C8.52025 20.7226 8.47017 20.7005 8.42642 20.6687C8.38267 20.6368 8.34625 20.596 8.31964 20.5488C8.29302 20.5017 8.27682 20.4494 8.27213 20.3955L8.03527 17.6811L6.63073 15.3457C6.60283 15.2993 6.58523 15.2474 6.57913 15.1935C6.57303 15.1397 6.57856 15.0852 6.59534 15.0336C6.61213 14.9821 6.63979 14.9348 6.67645 14.8949C6.7131 14.855 6.7579 14.8234 6.80781 14.8023L9.31646 13.7391L11.1024 11.6815C11.1379 11.6405 11.1819 11.6076 11.2312 11.585C11.2806 11.5625 11.3342 11.5508 11.3885 11.5508C11.4427 11.5508 11.4964 11.5625 11.5457 11.585C11.5951 11.6076 11.639 11.6405 11.6745 11.6815L13.4605 13.7399L15.9699 14.8023C16.0198 14.8234 16.0646 14.855 16.1012 14.8949C16.1379 14.9348 16.1655 14.9821 16.1823 15.0336C16.1991 15.0852 16.2046 15.1397 16.1985 15.1935C16.1924 15.2474 16.1748 15.2993 16.1469 15.3457L14.7416 17.6811L14.5063 20.3955C14.5016 20.4495 14.4854 20.5019 14.4587 20.5491C14.4321 20.5963 14.3956 20.6372 14.3518 20.669C14.3079 20.7009 14.2577 20.7229 14.2046 20.7337C14.1515 20.7445 14.0967 20.7438 14.0439 20.7315L11.3892 20.1163Z"fill=white></path></mask><g mask=url(#mask1_538_12402)><path fill-rule=evenodd clip-rule=evenodd d="M-1.70858 29.6891L24.8513 3.49316H-2.67874L-1.70858 29.6891Z"fill=#FFEB73>');
const it = t => {
    return e = v1(), r = e.firstChild.nextSibling.nextSibling.nextSibling, n = r.nextSibling.nextSibling.nextSibling, U(e, t, !0, !0), r.style.setProperty("mask-type", "luminance"), n.style.setProperty("mask-type", "luminance"), e;
    var e, r, n
};
var f1 = C('<svg xmlns=http://www.w3.org/2000/svg width=24 height=28 viewBox="0 0 24 28"fill=none><path d="M11.4349 27.9996C17.7041 27.9996 22.7863 22.9174 22.7863 16.6482C22.7863 10.379 17.7041 5.29688 11.4349 5.29688C5.16573 5.29688 0.0835571 10.379 0.0835571 16.6482C0.0835571 22.9174 5.16573 27.9996 11.4349 27.9996Z"fill=#D5A290></path><path d="M16.7691 3.19814V9.21133H6.05347V3.15803C6.05347 2.73501 6.34406 2.3922 6.70276 2.3922C6.84125 2.3922 6.97595 2.44441 7.08871 2.54128L8.57876 3.83533C8.86785 4.08582 9.27422 4.01317 9.48687 3.67263C9.5073 3.63857 9.52622 3.60452 9.54211 3.56668L10.8498 0.548737C11.0133 0.171872 11.4045 0.0227906 11.7238 0.215764C11.8452 0.29168 11.9411 0.402087 11.9993 0.532845L13.3993 3.5803C13.5696 3.95263 13.9638 4.09036 14.2794 3.88906C14.31 3.86959 14.3388 3.84757 14.3657 3.82322L15.7241 2.59198C16.0086 2.33468 16.4157 2.39749 16.6344 2.73274C16.7215 2.86668 16.7691 3.03014 16.7691 3.1989V3.19814Z"fill=#FFAE92></path><path d="M11.4114 26.4855C16.828 26.4855 21.219 22.0809 21.219 16.6477C21.219 11.2144 16.828 6.80981 11.4114 6.80981C5.99485 6.80981 1.60385 11.2144 1.60385 16.6477C1.60385 22.0809 5.99485 26.4855 11.4114 26.4855Z"fill=#F2CAB9></path><mask id=mask0_538_12438 maskUnits=userSpaceOnUse x=1 y=6 width=21 height=21><path d="M11.4113 26.4848C16.8278 26.4848 21.2188 22.0802 21.2188 16.6469C21.2188 11.2136 16.8278 6.80908 11.4113 6.80908C5.9947 6.80908 1.6037 11.2136 1.6037 16.6469C1.6037 22.0802 5.9947 26.4848 11.4113 26.4848Z"fill=white></path></mask><g mask=url(#mask0_538_12438)><path fill-rule=evenodd clip-rule=evenodd d="M-0.848117 28.9444L24.0121 4.34985H-1.75623L-0.848117 28.9444Z"fill=#FCD8C9></path></g><path d="M11.3905 20.1158L8.73504 20.731C8.68229 20.7432 8.62757 20.7438 8.57455 20.733C8.52153 20.7221 8.47145 20.7 8.4277 20.6682C8.38395 20.6363 8.34753 20.5955 8.32092 20.5484C8.2943 20.5012 8.2781 20.449 8.27342 20.395L8.03655 17.6806L6.63201 15.3452C6.60411 15.2988 6.58652 15.2469 6.58041 15.193C6.57431 15.1392 6.57984 15.0847 6.59663 15.0331C6.61342 14.9816 6.64107 14.9343 6.67773 14.8944C6.71438 14.8545 6.75918 14.823 6.80909 14.8019L9.31774 13.7386L11.1037 11.681C11.1392 11.64 11.1831 11.6071 11.2325 11.5845C11.2818 11.562 11.3355 11.5503 11.3897 11.5503C11.444 11.5503 11.4976 11.562 11.547 11.5845C11.5963 11.6071 11.6403 11.64 11.6758 11.681L13.4617 13.7394L15.9711 14.8019C16.0211 14.823 16.0659 14.8545 16.1025 14.8944C16.1392 14.9343 16.1668 14.9816 16.1836 15.0331C16.2004 15.0847 16.2059 15.1392 16.1998 15.193C16.1937 15.2469 16.1761 15.2988 16.1482 15.3452L14.7429 17.6806L14.5076 20.395C14.5029 20.449 14.4867 20.5014 14.46 20.5486C14.4334 20.5958 14.3969 20.6367 14.353 20.6685C14.3092 20.7004 14.259 20.7225 14.2059 20.7332C14.1528 20.744 14.098 20.7433 14.0452 20.731L11.3905 20.1158Z"fill=#FFAE92></path><mask id=mask1_538_12438 maskUnits=userSpaceOnUse x=6 y=11 width=11 height=10><path d="M11.3907 20.1165L8.73525 20.7318C8.68251 20.7439 8.62778 20.7445 8.57476 20.7337C8.52174 20.7229 8.47167 20.7008 8.42791 20.6689C8.38416 20.6371 8.34775 20.5962 8.32113 20.5491C8.29452 20.502 8.27832 20.4497 8.27363 20.3958L8.03676 17.6813L6.63222 15.3459C6.60433 15.2995 6.58673 15.2476 6.58063 15.1938C6.57452 15.1399 6.58005 15.0854 6.59684 15.0339C6.61363 14.9824 6.64129 14.9351 6.67794 14.8952C6.7146 14.8552 6.7594 14.8237 6.80931 14.8026L9.31795 13.7393L11.1039 11.6817C11.1394 11.6407 11.1833 11.6078 11.2327 11.5852C11.2821 11.5627 11.3357 11.551 11.39 11.551C11.4442 11.551 11.4978 11.5627 11.5472 11.5852C11.5966 11.6078 11.6405 11.6407 11.676 11.6817L13.462 13.7401L15.9714 14.8026C16.0213 14.8237 16.0661 14.8552 16.1027 14.8952C16.1394 14.9351 16.167 14.9824 16.1838 15.0339C16.2006 15.0854 16.2061 15.1399 16.2 15.1938C16.1939 15.2476 16.1763 15.2995 16.1484 15.3459L14.7431 17.6813L14.5078 20.3958C14.5031 20.4498 14.4869 20.5021 14.4602 20.5493C14.4336 20.5965 14.3971 20.6374 14.3533 20.6693C14.3094 20.7011 14.2592 20.7232 14.2061 20.734C14.153 20.7448 14.0982 20.744 14.0454 20.7318L11.3907 20.1165Z"fill=white></path></mask><g mask=url(#mask1_538_12438)><path fill-rule=evenodd clip-rule=evenodd d="M-1.70736 29.6895L24.8525 3.49365H-2.67752L-1.70736 29.6895Z"fill=#FFC3AE>');
const rt = t => {
    return e = f1(), r = e.firstChild.nextSibling.nextSibling.nextSibling, n = r.nextSibling.nextSibling.nextSibling, U(e, t, !0, !0), r.style.setProperty("mask-type", "luminance"), n.style.setProperty("mask-type", "luminance"), e;
    var e, r, n
};
var C1 = C('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path d="m15.184 26-5.445 2.99c-.856.47-1.915.127-2.365-.767a1.9 1.9 0 0 1-.177-1.16l1.04-6.333a1.88 1.88 0 0 0-.504-1.62L3.33 14.626a1.89 1.89 0 0 1-.031-2.587c.269-.289.621-.476 1.002-.534l6.087-.923a1.76 1.76 0 0 0 1.32-1.001l2.722-5.76c.428-.906 1.478-1.28 2.346-.832.346.178.626.47.796.831l2.723 5.761c.255.54.748.915 1.319 1l6.087.925c.957.145 1.62 1.074 1.482 2.074a1.86 1.86 0 0 1-.51 1.047l-4.405 4.484a1.88 1.88 0 0 0-.504 1.62l1.04 6.332c.163.996-.478 1.941-1.431 2.113-.38.068-.77.003-1.111-.184l-5.445-2.99c-.51-.28-1.12-.28-1.63 0z"></path> ');
const Se = t => {
    return e = C1(), r = e.firstChild.nextSibling, U(e, t, !0, !0), Q(() => {
        var n;
        return Ve(r, "fill", (n = t.fill) != null ? n : "currentColor")
    }), e;
    var e, r
};
l1({}, {
    Fill: () => Ue,
    Label: () => bt,
    Progress: () => b1,
    Root: () => Fe,
    Track: () => qe,
    ValueLabel: () => xt
});
var Ct = Re();

function fe() {
    const t = De(Ct);
    if (t === void 0) throw new Error("[kobalte]: `useProgressContext` must be used within a `Progress.Root` component");
    return t
}

function Ue(t) {
    const e = fe(),
        [r, n] = we(t, ["style"]);
    return i(re, $({
        as: "div",
        get style() {
            return Le({
                "--kb-progress-fill-width": e.progressFillWidth()
            }, r.style)
        }
    }, () => e.dataset(), n))
}

function bt(t) {
    const e = fe(),
        r = ft({
            id: e.generateId("label")
        }, t),
        [n, u] = we(r, ["id"]);
    return ee(() => ue(e.registerLabelId(n.id))), i(re, $({
        as: "span",
        get id() {
            return n.id
        }
    }, () => e.dataset(), u))
}

function Fe(t) {
    const e = `progress-${Ut()}`,
        r = ft({
            id: e,
            value: 0,
            minValue: 0,
            maxValue: 100
        }, t),
        [n, u] = we(r, ["value", "minValue", "maxValue", "indeterminate", "getValueLabel"]),
        [a, w] = V(),
        l = s1(() => ({
            style: "percent"
        })),
        o = () => o1(n.value, n.minValue, n.maxValue),
        s = () => (o() - n.minValue) / (n.maxValue - n.minValue),
        p = () => {
            if (!n.indeterminate) return n.getValueLabel ? n.getValueLabel({
                value: o(),
                min: n.minValue,
                max: n.maxValue
            }) : l().format(s())
        },
        c = D(() => {
            let m;
            return n.indeterminate || (m = s() === 1 ? "complete" : "loading"), {
                "data-progress": m,
                "data-indeterminate": n.indeterminate ? "" : void 0
            }
        }),
        g = {
            dataset: c,
            value: o,
            valuePercent: s,
            valueLabel: p,
            labelId: a,
            progressFillWidth: () => n.indeterminate ? void 0 : `${Math.round(100*s())}%`,
            generateId: d1(() => u.id),
            registerLabelId: u1(w)
        };
    return i(Ct.Provider, {
        value: g,
        get children() {
            return i(re, $({
                as: "div",
                role: "progressbar",
                get "aria-valuenow" () {
                    return S(() => !!n.indeterminate)() ? void 0 : o()
                },
                get "aria-valuemin" () {
                    return n.minValue
                },
                get "aria-valuemax" () {
                    return n.maxValue
                },
                get "aria-valuetext" () {
                    return p()
                },
                get "aria-labelledby" () {
                    return a()
                }
            }, c, u))
        }
    })
}

function qe(t) {
    const e = fe();
    return i(re, $({
        as: "div"
    }, () => e.dataset(), t))
}

function xt(t) {
    const e = fe();
    return i(re, $({
        as: "div",
        get children() {
            return e.valueLabel()
        }
    }, () => e.dataset(), t))
}
var b1 = Object.assign(Fe, {
    Fill: Ue,
    Label: bt,
    Track: qe,
    ValueLabel: xt
});
const x1 = r1("relative w-full overflow-hidden rounded-xl bg-layer4", {
        variants: {
            size: {
                sm: "h-1",
                default: "h-2",
                lg: "h-4"
            }
        },
        defaultVariants: {
            size: "default"
        }
    }),
    y1 = t => {
        const [e, r] = we(t, ["children", "size"]);
        return i(Fe, $(r, {
            get children() {
                return [S(() => e.children), i(qe, {
                    get class() {
                        return a1(x1({
                            size: e.size
                        }))
                    },
                    get children() {
                        return i(Ue, {
                            class: "kb-fill h-full w-[var(--kb-progress-fill-width)] flex-1 transition-all rounded-xl",
                            style: {
                                "background-image": "linear-gradient(90deg, #9FE871 0%, #24EE89 100%)"
                            }
                        })
                    }
                })]
            }
        }))
    };
var yt = C("<div>"),
    _1 = C('<span class="text-xs font-semibold"># '),
    L1 = C('<div class="flex justify-between items-start"><div class="flex flex-col"><span class="font-extrabold text-lg"></span><div class="flex items-center gap-1 whitespace-nowrap mr-1"><span class="text-secondary text-sm">'),
    I1 = C('<div><span class="text-secondary text-sm whitespace-nowrap"></span><span>'),
    E1 = C('<div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-[repeat(9,1fr)] mt-4">'),
    k1 = C('<div class="grid grid-cols-2 md:grid-cols-4 mt-4">'),
    M1 = C('<div class="mt-[10px] py-[1.125rem] border-t border-t-third leading-[1.5] text-secondary text-base md:pb-0">'),
    S1 = C('<div class="p-3 flex flex-col md:flex-row gap-2 bg-layer5 dark:bg-layer3 rounded-xl"><div class="flex gap-1 items-center grow flex-1"><p class="mb-4 mx-10"><span class="text-3xl text-primary font-extrabold"></span></p><div class="flex flex-col justify-start"><div class="flex gap-1"></div><span class=text-secondary></span></div></div><div class="flex flex-col justify-between flex-1">'),
    P1 = C('<div class="flex items-center"><div class="flex gap-0 mr-1 min-w-[5.6rem]">'),
    V1 = C('<div class="flex items-center gap-1 justify-center h-5">'),
    R1 = C('<div class="w-full flex gap-1.5 mt-1.5 rounded-xl"><div class="w-1/2 py-4 px-5 flex flex-col md:flex-row items-center gap-1 bg-layer5 dark:bg-layer3 justify-between rounded-lg"><p class="text-secondary text-sm"></p><div class="flex gap-1"></div></div><div class="w-1/2 py-4 px-5 flex flex-col md:flex-row items-center gap-1 bg-layer5 dark:bg-layer3 rounded-lg justify-center"><p class="text-secondary h-6 text-sm"><span> </span><span> '),
    D1 = C("<img>"),
    A1 = C('<section class="mb-3 sm:my-6 p-3 md:p-5 flex flex-col bg-layer4 rounded-xl relative"><div class="flex justify-between items-start"><div class="flex items-center gap-2 z-10">'),
    O1 = C('<div class="px-3 py-1 text-primary">: '),
    T1 = C('<div class="bg-layer5 dark:bg-layer3 rounded-xl p-4"><div class="flex items-center border-b border-b-input pb-3 mb-3"><div class=mr-2></div><span class="font-extrabold text-secondary"></span></div><div class="flex flex-col gap-3 text-sm font-extrabold"><div class="flex items-center justify-between"><span class=text-secondary></span><div class="text-primary flex items-center gap-0"><span class=text-brand>+</span></div></div><div class="flex items-center justify-between"><span class=text-secondary></span><div class="text-primary flex items-center gap-0"><span></span></div></div><div class="flex items-center justify-between"><span class=text-secondary></span><span class=text-primary>X'),
    U1 = C('<div class="flex items-center"><div class=mr-2></div><span class="font-extrabold text-secondary leading-[26px]">'),
    F1 = C('<div class="flex items-center justify-center"><span class="text-brand font-extrabold">+'),
    q1 = C('<div class="flex items-center justify-center"><span class="text-primary font-extrabold">'),
    z1 = C('<div id=description class="p-3 text-primary bg-layer2 dark:bg-layer4 rounded-lg">');

function he(t) {
    if (!t) return "";
    if (Ae.onlyBc) return t;
    let e = t.replace(/BC.GAME/gi, ge.licenseHost.toUpperCase());
    return e = e.replace(/BC/g, ge.siteName), e
}

function nt(t) {
    return e = yt(), d(e, i(A, {
        get each() {
            return [...t.tags.entries()]
        },
        children: ([r, n]) => i(gt, {
            class: "flex items-center text-right bg-layer5 text-brand h-6 px-2 rounded-md",
            get href() {
                return `/tagname/${encodeURIComponent(r)}?label=${he(n)}`
            },
            get children() {
                var u = _1();
                return u.firstChild, d(u, () => he(n), null), u
            }
        })
    })), Q(() => q(e, te("flex flex-wrap gap-2", t.class))), e;
    var e
}
const W1 = t => {
        return D(() => {
            var l, o;
            const a = ((l = t.gameDetail.data) == null ? void 0 : l.translatedTags) || {},
                w = ((o = t.gameDetail.data) == null ? void 0 : o.tags) || [];
            return new Map(w.map(s => [s, a[s] || s]))
        }), e = L1(), r = e.firstChild.firstChild, n = r.nextSibling, u = n.firstChild, d(r, () => {
            var a;
            return (a = t.gameDetail.data) == null ? void 0 : a.fullName
        }), d(u, () => b("By")), d(n, i(gt, {
            class: "text-brand text-sm",
            get href() {
                var a;
                return `/provider/${(a=t.gameDetail.data)==null?void 0:a.providerName}`
            },
            get children() {
                var a;
                return he((a = t.gameDetail.data) == null ? void 0 : a.providerName)
            }
        }), null), e;
        var e, r, n, u
    },
    Z1 = t => {
        const e = ie(),
            r = (a, w) => ((l, o) => {
                if (l === null || !l) return "--";
                if (!(o != null && o.isVolatility)) return o != null && o.isSpin ? Number(l) > 0 ? b("Yes") : b("No") : typeof l == "boolean" ? b(l ? "Yes" : "No") : o != null && o.isPercent ? l + "%" : String(l);
                switch (l) {
                    case 1:
                        return b("Low");
                    case 2:
                        return b("Medium");
                    default:
                        return b("High")
                }
            })(a, w),
            n = ({
                label: a,
                value: w,
                valueClass: l = "text-primary",
                additionalClass: o = ""
            }) => {
                return s = I1(), p = s.firstChild, c = p.nextSibling, q(s, `flex flex-col justify-between md:items-center py-2 md:py-1.5 md:px-3 lg:py-0 border-b border-third md:border-b-0 md:border-r ${o}`), d(p, () => b(a)), q(c, `text-sm md:mt-0 truncate ${l}`), d(c, w), s;
                var s, p, c
            };
        return [i(M, {
            get when() {
                return e.gameUnique !== "bc-poker"
            },
            get children() {
                return [i(M, {
                    get when() {
                        var a;
                        return ((a = t.gameDetail.data) == null ? void 0 : a.categoryName) === "Slots"
                    },
                    get children() {
                        var a = E1();
                        return d(a, () => {
                            var w, l, o, s, p, c, g, m, x;
                            return [{
                                label: b("House Edge"),
                                value: r(new Ye(100 - (((w = t.gameDetail.data) == null ? void 0 : w.slotsInfo.rtpDes) || 0)).toFixed(2), {
                                    isPercent: !0
                                }),
                                valueClass: "text-brand"
                            }, {
                                label: b("RTP (Return to Player)"),
                                value: r((l = t.gameDetail.data) == null ? void 0 : l.slotsInfo.rtpDes, {
                                    isPercent: !0
                                }),
                                valueClass: "text-brand"
                            }, {
                                label: b("Reel design"),
                                value: r((o = t.gameDetail.data) == null ? void 0 : o.slotsInfo.reelDesign)
                            }, {
                                label: b("Lucky Spins"),
                                value: r((s = t.gameDetail.data) == null ? void 0 : s.slotsInfo.luckySpin, {
                                    isSpin: !0
                                })
                            }, {
                                label: b("Win Ways"),
                                value: r((p = t.gameDetail.data) == null ? void 0 : p.slotsInfo.winWays),
                                additionalClass: "md:border-r-0 lg:border-r"
                            }, {
                                label: b("Max Win"),
                                value: r((c = t.gameDetail.data) == null ? void 0 : c.slotsInfo.maxWin),
                                valueClass: "text-brand"
                            }, {
                                label: b("Hit Rate"),
                                value: r((g = t.gameDetail.data) == null ? void 0 : g.slotsInfo.hitRate, {
                                    isPercent: !0
                                })
                            }, {
                                label: b("Volatility"),
                                value: r((m = t.gameDetail.data) == null ? void 0 : m.slotsInfo.volatility, {
                                    isVolatility: !0
                                })
                            }, {
                                label: b("Stakes Range"),
                                value: r((x = t.gameDetail.data) == null ? void 0 : x.slotsInfo.stakeRange),
                                additionalClass: "lg:border-r-0 border-b-0"
                            }].map(({
                                label: v,
                                value: _,
                                valueClass: I,
                                additionalClass: O
                            }) => i(n, {
                                label: v,
                                value: _,
                                valueClass: I,
                                additionalClass: O
                            }))
                        }), a
                    }
                }), i(M, {
                    get when() {
                        var a;
                        return ((a = t.gameDetail.data) == null ? void 0 : a.categoryName) !== "Slots"
                    },
                    get children() {
                        var a = k1();
                        return d(a, () => {
                            var w, l, o, s;
                            return [{
                                label: b("House Edge"),
                                value: r(new Ye(100 - (((w = t.gameDetail.data) == null ? void 0 : w.slotsInfo.rtpDes) || 0)).toFixed(2), {
                                    isPercent: !0
                                }),
                                valueClass: "text-brand"
                            }, {
                                label: b("RTP (Return to Player)"),
                                value: r((l = t.gameDetail.data) == null ? void 0 : l.slotsInfo.rtpDes, {
                                    isPercent: !0
                                }),
                                valueClass: "text-brand"
                            }, {
                                label: b("Max Win"),
                                value: r((o = t.gameDetail.data) == null ? void 0 : o.slotsInfo.maxWin),
                                valueClass: "text-brand",
                                additionalClass: "border-b-0"
                            }, {
                                label: b("Stakes Range"),
                                value: r((s = t.gameDetail.data) == null ? void 0 : s.slotsInfo.stakeRange),
                                additionalClass: "lg:border-r-0 border-b-0"
                            }].map(({
                                label: p,
                                value: c,
                                valueClass: g,
                                additionalClass: m
                            }) => i(n, {
                                label: p,
                                value: c,
                                valueClass: g,
                                additionalClass: m
                            }))
                        }), a
                    }
                })]
            }
        }), (u = M1(), d(u, () => {
            var a;
            return (a = t.gameDetail.data) == null ? void 0 : a.details
        }), u)];
        var u
    },
    H1 = t => {
        return e = S1(), r = e.firstChild, n = r.firstChild, u = n.firstChild, a = n.nextSibling.firstChild, w = a.nextSibling, l = r.nextSibling, d(u, () => {
            var o;
            return (o = t.ratingReview.data) == null ? void 0 : o.avg
        }), d(a, i(A, {
            get each() {
                return Array.from({
                    length: 5
                })
            },
            children: (o, s) => i(Se, {
                get fill() {
                    var p;
                    return (p = t.ratingReview.data) != null && p.avg && s() < Number(t.ratingReview.data.avg) ? "rgb(var(--brand))" : "#b3bec1"
                },
                class: "size-5"
            })
        })), d(w, () => b("Out of 5")), d(l, i(A, {
            get each() {
                return Array.from({
                    length: 5
                })
            },
            children: (o, s) => {
                return p = P1(), c = p.firstChild, d(c, i(A, {
                    get each() {
                        return Array.from({
                            length: 5 - s()
                        })
                    },
                    children: g => i(Se, {
                        class: "size-4.5",
                        fill: "#b3bec1"
                    })
                })), d(p, i(y1, {
                    class: "grow",
                    minValue: 0,
                    get value() {
                        return S(() => !!t.ratingReview.data)() ? Number(t.ratingReview.data.scores[5 - s()] || 0) : 0
                    }
                }), null), p;
                var p, c
            }
        })), e;
        var e, r, n, u, a, w, l
    },
    $1 = t => {
        const e = mt(),
            r = ie(),
            n = zt(() => ({
                mutationKey: ["api/comment/star/tap/", r.gameUnique],
                mutationFn: u => T(void 0, null, function*() {
                    if (t.myRating !== u) {
                        if (!(ce.vipLevel < 4)) return t.setMyRating(u), yield ve().post("/comment/star/tap/", {
                            gameUnique: r.gameUnique,
                            rank: u
                        }), u;
                        Ie.warning(b("Unlock at VIP 4"))
                    }
                }),
                onSuccess(u) {
                    u && Ie.success(b("Thanks for your feedback"))
                },
                onError(u) {
                    var a;
                    Ie.error(u.message), t.setMyRating(((a = t.ratingReview.data) == null ? void 0 : a.my) || 0)
                }
            }));
        return (() => {
            var u = R1(),
                a = u.firstChild,
                w = a.firstChild,
                l = w.nextSibling,
                o = a.nextSibling,
                s = o.firstChild.firstChild;
            s.firstChild;
            var p = s.nextSibling;
            return p.firstChild, d(w, () => b("Rate this Game")), d(l, i(A, {
                get each() {
                    return Array.from({
                        length: 5
                    })
                },
                children: (c, g) => i(Se, {
                    onMouseOver: () => {
                        t.setHoverIndex(g() + 1)
                    },
                    onMouseLeave: () => {
                        t.setHoverIndex(0)
                    },
                    onClick: () => {
                        ce.login ? n.mutate(g() + 1) : e("/login/signin")
                    },
                    get fill() {
                        return g() < t.myRating || g() < t.hoverIndex ? "rgb(var(--brand)" : "#b3bec1"
                    },
                    class: "size-5 cursor-pointer"
                })
            })), d(s, () => {
                var c, g;
                return (g = (c = t.ratingReview.data) == null ? void 0 : c.count) != null ? g : 0
            }, null), d(p, () => b("Ratings"), null), d(o, i(M, {
                get when() {
                    var c;
                    return (c = t.ratingReview.data) == null ? void 0 : c.users.length
                },
                get children() {
                    var c = V1();
                    return d(c, i(A, {
                        get each() {
                            var g;
                            return (g = t.ratingReview.data) == null ? void 0 : g.users.slice(0, 5)
                        },
                        children: (g, m) => {
                            return x = D1(), Q(v => {
                                var _ = te("w-7 h-7 rounded-full box-border border border-primary", m() > 0 && "-ml-2"),
                                    I = Wt.avatar(g, "s");
                                return _ !== v.e && q(x, v.e = _), I !== v.t && Ve(x, "src", v.t = I), v
                            }, {
                                e: void 0,
                                t: void 0
                            }), x;
                            var x
                        }
                    })), c
                }
            }), null), u
        })()
    };

function G1() {
    const [t, e] = V(!1), r = Te(), n = ie(), [u, a] = V(0), [w, l] = V(0), o = ke(() => ({
        queryKey: [`/game/home/introduction/?areaCode=${ce.areaCode}&gameUrl=${n.gameUnique}`, ce.areaCode, n.gameUnique],
        queryFn: N1,
        enabled: t()
    })), s = ke(() => ({
        queryKey: ["/api/comment/star/scores/", n.gameUnique],
        queryFn: Y1,
        enabled: t()
    }));
    ee(() => {
        s.data && a(s.data.my)
    });
    const p = D(() => v => {
            let _ = 5381;
            for (let I = 0; I < v.length; I++) _ = (_ << 5) + _ + v.charCodeAt(I);
            return _ >>>= 0, `${_%2+1}.${Math.floor(_/3%10)}.${Math.floor(_/33%100)}`
        }),
        c = D(() => {
            var I, O;
            const v = ((I = r.data) == null ? void 0 : I.translatedTags) || {},
                _ = ((O = r.data) == null ? void 0 : O.tags) || [];
            return new Map(_.map(F => [F, v[F] || F]))
        });
    return g = A1(), m = g.firstChild, x = m.firstChild, d(m, i(W1, {
        gameDetail: r
    }), x), d(x, i(nt, {
        get tags() {
            return c()
        },
        get class() {
            return ge.mobile ? "hidden" : ""
        }
    }), null), d(x, i(J, {
        class: "bg-layer5 hover:bg-layer5 size-8 px-2",
        onClick: () => e(v => !v),
        get children() {
            return i(vt, {
                get class() {
                    return te(t() ? "rotate-90" : "-rotate-90")
                }
            })
        }
    }), null), d(g, i(Ft, {
        get when() {
            return t()
        },
        get children() {
            return [i(nt, {
                get tags() {
                    return c()
                },
                class: "md:hidden pb-2 pt-1.5"
            }), i(Z1, {
                gameDetail: r
            }), i(z, {
                type: "inner",
                class: "my-2 sm:my-4 w-full sm:max-w-sm h-11 light-layer3-tabs",
                get children() {
                    return [i(z.TabItem, {
                        get title() {
                            return b("High win")
                        },
                        class: "flex flex-col gap-2",
                        get children() {
                            return i(at, {
                                type: "bigWinRank",
                                get enabled() {
                                    return t()
                                }
                            })
                        }
                    }), i(z.TabItem, {
                        get title() {
                            return b("Lucky win")
                        },
                        class: "flex flex-col gap-2",
                        get children() {
                            return i(at, {
                                type: "luckyWinRank",
                                get enabled() {
                                    return t()
                                }
                            })
                        }
                    }), S(() => S(() => {
                        var v;
                        return !(o.isLoading || !((v = o.data) != null && v.introduction))
                    })() && i(z.TabItem, {
                        get title() {
                            return b("Description")
                        },
                        class: "flex flex-col gap-2 min-h-80",
                        get children() {
                            return [i(j1, {
                                get introduction() {
                                    return o.data.introduction
                                }
                            }), i(M, {
                                get when() {
                                    return Ae.isesportsbr
                                },
                                get children() {
                                    var v = O1(),
                                        _ = v.firstChild;
                                    return d(v, () => b("Version"), _), d(v, () => {
                                        var I;
                                        return p()(((I = r.data) == null ? void 0 : I.fullName) || "")
                                    }, null), v
                                }
                            })]
                        }
                    })), i(z.TabItem, {
                        get title() {
                            return b("Review")
                        },
                        class: "min-h-80",
                        get children() {
                            return [(v = yt(), d(v, i(H1, {
                                ratingReview: s
                            }), null), d(v, i($1, {
                                ratingReview: s,
                                get myRating() {
                                    return u()
                                },
                                setMyRating: a,
                                get hoverIndex() {
                                    return w()
                                },
                                setHoverIndex: l
                            }), null), v), i(c1, {
                                get gameUnique() {
                                    return n.gameUnique
                                }
                            })];
                            var v
                        }
                    })]
                }
            })]
        }
    }), null), g;
    var g, m, x
}

function B1(e) {
    return T(this, arguments, function*({
        queryKey: t
    }) {
        const r = yield ve().get(`/game/support/home/get-rank/${t[1]}/`);
        return {
            bigWinRank: r.bigWinRank.sort((n, u) => u.winUsd - n.winUsd),
            luckyWinRank: r.luckyWinRank.sort((n, u) => u.score - n.score)
        }
    })
}

function at(t) {
    const {
        findToken: e
    } = n1(), r = ie(), n = ke(() => ({
        queryKey: ["/api/game/support/home/get-rank/{gameUnique}/", r.gameUnique],
        queryFn: B1,
        enabled: t.enabled
    })), u = D(() => {
        var a;
        return ((a = n.data) == null ? void 0 : a[t.type]) || []
    });
    return i(me, {
        get fallback() {
            return i(Oe, {})
        },
        get children() {
            return i(M, {
                get when() {
                    return u().length > 0
                },
                get fallback() {
                    return i(qt, {})
                },
                get children() {
                    return S(() => !!ge.mobile)() ? i(A, {
                        get each() {
                            return u()
                        },
                        children: (a, w) => (() => {
                            var l = T1(),
                                o = l.firstChild,
                                s = o.firstChild,
                                p = s.nextSibling,
                                c = o.nextSibling.firstChild,
                                g = c.firstChild,
                                m = g.nextSibling,
                                x = m.firstChild;
                            x.firstChild;
                            var v, _ = c.nextSibling,
                                I = _.firstChild,
                                O = I.nextSibling,
                                F = O.firstChild,
                                Y = _.nextSibling.firstChild,
                                G = Y.nextSibling,
                                B = G.firstChild;
                            return d(s, (v = S(() => w() === 0), () => {
                                return v() ? i(it, {
                                    class: "size-6"
                                }) : (K = S(() => w() === 1), () => K() ? i(rt, {
                                    class: "size-6"
                                }) : i(tt, {
                                    class: "size-6"
                                }));
                                var K
                            })), d(p, () => a.nickName), d(g, () => b("Payout")), d(m, i(se, {
                                get token() {
                                    return e(a.currencyName)
                                }
                            }), x), d(x, () => a.winAmount, null), d(I, () => b("Wager")), d(O, i(se, {
                                get token() {
                                    return e(a.currencyName)
                                }
                            }), F), d(F, () => a.betAmount), d(Y, () => b("Mult")), d(G, () => Number(a.oddsString || 0) / 1e4, B), l
                        })()
                    }) : i(g1, {
                        get children() {
                            return [i(m1, {
                                get children() {
                                    return i(et, {
                                        class: "text-secondary font-semibold",
                                        get children() {
                                            return [i(le, {
                                                class: "w-1/4",
                                                get children() {
                                                    return b("Player")
                                                }
                                            }), i(le, {
                                                class: "w-1/4 text-center",
                                                get children() {
                                                    return b("Payout")
                                                }
                                            }), i(le, {
                                                class: "w-1/4 text-center",
                                                get children() {
                                                    return b("Wager")
                                                }
                                            }), i(le, {
                                                class: "w-1/4 text-center",
                                                get children() {
                                                    return b("Mult")
                                                }
                                            })]
                                        }
                                    })
                                }
                            }), i(h1, {
                                get children() {
                                    return i(A, {
                                        get each() {
                                            return u()
                                        },
                                        children: (a, w) => i(et, {
                                            class: "text-center",
                                            get children() {
                                                return [i(oe, {
                                                    class: "py-3",
                                                    get children() {
                                                        var l, o = U1(),
                                                            s = o.firstChild,
                                                            p = s.nextSibling;
                                                        return d(s, (l = S(() => w() === 0), () => {
                                                            return l() ? i(it, {
                                                                class: "size-6"
                                                            }) : (c = S(() => w() === 1), () => c() ? i(rt, {
                                                                class: "size-6"
                                                            }) : i(tt, {
                                                                class: "size-6"
                                                            }));
                                                            var c
                                                        })), d(p, () => a.nickName), o
                                                    }
                                                }), i(oe, {
                                                    class: "py-3",
                                                    get children() {
                                                        var l = F1(),
                                                            o = l.firstChild;
                                                        return o.firstChild, d(l, i(se, {
                                                            get token() {
                                                                return e(a.currencyName)
                                                            }
                                                        }), o), d(o, () => a.winAmount, null), l
                                                    }
                                                }), i(oe, {
                                                    class: "py-3",
                                                    get children() {
                                                        var l = q1(),
                                                            o = l.firstChild;
                                                        return d(l, i(se, {
                                                            get token() {
                                                                return e(a.currencyName)
                                                            }
                                                        }), o), d(o, () => a.betAmount), l
                                                    }
                                                }), i(oe, {
                                                    class: "py-3 text-primary font-extrabold",
                                                    get children() {
                                                        return [S(() => Number(a.oddsString || 0)), "×"]
                                                    }
                                                })]
                                            }
                                        })
                                    })
                                }
                            })]
                        }
                    })
                }
            })
        }
    })
}

function N1(e) {
    return T(this, arguments, function*({
        queryKey: t
    }) {
        return yield ve().get(`/game/home/introduction/?areaCode=${t[1]}&gameUrl=${t[2]}`)
    })
}

function j1(t) {
    return e = z1(), Q(() => e.innerHTML = he(t.introduction)), e;
    var e
}

function Y1(e) {
    return T(this, arguments, function*({
        queryKey: t
    }) {
        return yield ve().post("/comment/star/scores/", {
            gameUnique: t[1]
        })
    })
}

function K1() {
    const t = ht("GameRecommendNew"),
        e = Te();
    return i(t, {
        get gameInfoId() {
            var r;
            return (r = e.data) == null ? void 0 : r.gameIdentity.gameInfoId
        },
        class: "-mt-2 mb-4"
    })
}
const _t = Re(null);

function X1(t) {
    const e = Zt({
        tabs: []
    });
    return i(_t.Provider, {
        value: e,
        get children() {
            return t.children
        }
    })
}

function Lt() {
    return De(_t)
}
var J1 = C('<div class="flex justify-between items-center w-28 sm:w-18 h-10 px-3 bg-layer4 text-quarterary rounded-md cursor-pointer">'),
    Q1 = C('<div class="absolute right-0 -top-1">'),
    ei = C('<div class="pb-4 relative"><div class="h-8 pt-1 px-2 leading-8 text-base font-extrabold text-primary">'),
    ti = C('<button class="radio btn-like select-item sm:!w-18 ">');

function ii() {
    const t = Lt(),
        {
            game: e
        } = Kt(),
        r = ht("GameTabs"),
        [n, u] = V(0),
        a = D(() => t[0].tabs),
        {
            size: w,
            setSize: l
        } = (e instanceof Qe ? Xt() : Jt()) || {},
        [o, s] = V(!1),
        p = D(() => e instanceof Qe && [0, 1].includes(n()) || e instanceof Qt && [0].includes(n()));
    return ee(() => {
        a() && u(0)
    }), c = ei(), g = c.firstChild, d(g, () => b("Latest bet & Race")), d(c, i(z, {
        get value() {
            return n()
        },
        onChange: u,
        get class() {
            return te("bg-[#E4E6E7] dark:bg-[#323738] ml-auto sm:-mt-9 w-full sm:w-auto latest-tabs", p() && "sm:mr-20")
        },
        get children() {
            return [i(A, {
                get each() {
                    return a()
                },
                children: m => i(z.TabItem, {
                    get title() {
                        return m.title
                    },
                    get children() {
                        return m.content()
                    }
                })
            }), i(r, {})]
        }
    }), null), d(c, i(M, {
        get when() {
            return p()
        },
        get children() {
            var m = Q1();
            return d(m, i(Ht, {
                class: " sm:!w-18 px-0",
                get visible() {
                    return o()
                },
                setVisible: s,
                get layer() {
                    return i(A, {
                        each: [e1, t1, i1],
                        children: x => {
                            const v = D(() => x === w() ? {
                                "aria-selected": !0
                            } : {});
                            return _ = ti(), U(_, $(v, {
                                onClick: () => {
                                    l(x), s(!1)
                                }
                            }), !1, !0), d(_, x), _;
                            var _
                        }
                    })
                },
                get children() {
                    var x = J1();
                    return d(x, w, null), d(x, i(J, {
                        class: "bg-layer5 hover:bg-layer5 size-6 px-2",
                        get children() {
                            return i(vt, {
                                class: "-rotate-90"
                            })
                        }
                    }), null), x
                }
            })), m
        }
    }), null), c;
    var c, g
}

function Ti(t) {
    return (0, Lt()[1])("tabs", t.tabs), null
}
const It = Re();

function pe(t) {
    const [e, r] = V(!1);
    return i(It.Provider, {
        get value() {
            var n;
            return {
                isFloatingWindow: (n = t.isFloatingWindow) != null ? n : !1,
                mobileMode: e,
                setMobileMode: r
            }
        },
        get children() {
            return t.children
        }
    })
}

function Et() {
    return De(It)
}

function Ui() {
    const t = Et();
    return t == null ? void 0 : t.isFloatingWindow
}
var ri = C('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg> <path d="M0 9.6C0 6.23969 0 4.55953 0.653961 3.27606C1.2292 2.14708 2.14708 1.2292 3.27606 0.653961C4.55953 0 6.23969 0 9.6 0H14.4C17.7603 0 19.4405 0 20.7239 0.653961C21.8529 1.2292 22.7708 2.14708 23.346 3.27606C24 4.55953 24 6.23969 24 9.6V14.4C24 17.7603 24 19.4405 23.346 20.7239C22.7708 21.8529 21.8529 22.7708 20.7239 23.346C19.4405 24 17.7603 24 14.4 24H9.6C6.23969 24 4.55953 24 3.27606 23.346C2.14708 22.7708 1.2292 21.8529 0.653961 20.7239C0 19.4405 0 17.7603 0 14.4V9.6Z"fill=#464F50></path><path d="M7.64073 7.6417C7.21513 8.0673 7.21513 8.75733 7.64073 9.18293L10.4587 12.0009L7.64073 14.8189C7.21513 15.2445 7.21513 15.9346 7.64073 16.3602C8.06632 16.7858 8.75635 16.7858 9.18195 16.3602L11.9999 13.5422L14.818 16.3604C15.2436 16.786 15.9336 16.786 16.3592 16.3604C16.7848 15.9348 16.7848 15.2448 16.3592 14.8192L13.5412 12.0012L16.3592 9.18314C16.7848 8.75755 16.7848 8.06752 16.3592 7.64192C15.9336 7.21632 15.2436 7.21632 14.818 7.64192L12.0001 10.4598L9.18195 7.6417C8.75635 7.21611 8.06632 7.21611 7.64073 7.6417Z"fill=#B3BEC1></path> ');
const ni = t => {
    return e = ri(), U(e, t, !0, !0), e;
    var e
};
var ai = C('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg> <path d="M0 9.6C0 6.23969 0 4.55953 0.653961 3.27606C1.2292 2.14708 2.14708 1.2292 3.27606 0.653961C4.55953 0 6.23969 0 9.6 0H14.4C17.7603 0 19.4405 0 20.7239 0.653961C21.8529 1.2292 22.7708 2.14708 23.346 3.27606C24 4.55953 24 6.23969 24 9.6V14.4C24 17.7603 24 19.4405 23.346 20.7239C22.7708 21.8529 21.8529 22.7708 20.7239 23.346C19.4405 24 17.7603 24 14.4 24H9.6C6.23969 24 4.55953 24 3.27606 23.346C2.14708 22.7708 1.2292 21.8529 0.653961 20.7239C0 19.4405 0 17.7603 0 14.4V9.6Z"fill=#464F50></path><path d="M14.5276 5C13.9343 5 9.61251 5 9.05573 5C8.19792 5 7.5 5.6993 7.5 6.55881V17.2017C7.5 18.0612 8.19792 18.7605 9.05573 18.7605H14.5276C15.3854 18.7605 16.0833 18.0612 16.0833 17.2017V6.55881C16.0833 5.6993 15.3854 5 14.5276 5ZM12.8616 6.07504C12.8348 6.31661 12.6299 6.50506 12.3818 6.50506H11.2016C10.9534 6.50506 10.7485 6.31661 10.7217 6.07504H12.8616ZM15.0104 17.2017C15.0104 17.4685 14.7938 17.6855 14.5276 17.6855H9.05573C8.78949 17.6855 8.57291 17.4685 8.57291 17.2017V6.55881C8.57291 6.29205 8.78949 6.07504 9.05573 6.07504H9.64719C9.67558 6.90978 10.3618 7.5801 11.2016 7.5801H12.3818C13.2216 7.5801 13.9077 6.90978 13.9361 6.07504H14.5276C14.7938 6.07504 15.0104 6.29205 15.0104 6.55881V17.2017ZM13.3474 16.718C13.3474 17.0149 13.1072 17.2555 12.8109 17.2555H10.7724C10.4761 17.2555 10.2359 17.0149 10.2359 16.718C10.2359 16.4211 10.4761 16.1804 10.7724 16.1804H12.8109C13.1072 16.1804 13.3474 16.4211 13.3474 16.718Z"fill=#B3BEC1></path> ');
const si = t => {
    return e = ai(), U(e, t, !0, !0), e;
    var e
};
var li = C('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg> <path d="M0 9.6C0 6.23969 0 4.55953 0.653961 3.27606C1.2292 2.14708 2.14708 1.2292 3.27606 0.653961C4.55953 0 6.23969 0 9.6 0H14.4C17.7603 0 19.4405 0 20.7239 0.653961C21.8529 1.2292 22.7708 2.14708 23.346 3.27606C24 4.55953 24 6.23969 24 9.6V14.4C24 17.7603 24 19.4405 23.346 20.7239C22.7708 21.8529 21.8529 22.7708 20.7239 23.346C19.4405 24 17.7603 24 14.4 24H9.6C6.23969 24 4.55953 24 3.27606 23.346C2.14708 22.7708 1.2292 21.8529 0.653961 20.7239C0 19.4405 0 17.7603 0 14.4V9.6Z"fill=#464F50></path><path d="M16 16.25V17.5H8V16.25H16ZM17.75 14.5V10C17.75 9.0335 16.9665 8.25 16 8.25H8C7.0335 8.25 6.25 9.0335 6.25 10V14.5C6.25 15.4665 7.0335 16.25 8 16.25V17.5C6.39489 17.5 5.08421 16.2394 5.00391 14.6543L5 14.5V10C5 8.34315 6.34315 7 8 7H16L16.1543 7.00391C17.7394 7.08421 19 8.39489 19 10V14.5C19 16.1051 17.7394 17.4158 16.1543 17.4961L16 17.5V16.25C16.9665 16.25 17.75 15.4665 17.75 14.5Z"fill=#B3BEC1>');
const oi = t => {
    return e = li(), U(e, t, !0, !0), e;
    var e
};
var di = C('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg> <path d="M0 9.6C0 6.23969 0 4.55953 0.653961 3.27606C1.2292 2.14708 2.14708 1.2292 3.27606 0.653961C4.55953 0 6.23969 0 9.6 0H14.4C17.7603 0 19.4405 0 20.7239 0.653961C21.8529 1.2292 22.7708 2.14708 23.346 3.27606C24 4.55953 24 6.23969 24 9.6V14.4C24 17.7603 24 19.4405 23.346 20.7239C22.7708 21.8529 21.8529 22.7708 20.7239 23.346C19.4405 24 17.7603 24 14.4 24H9.6C6.23969 24 4.55953 24 3.27606 23.346C2.14708 22.7708 1.2292 21.8529 0.653961 20.7239C0 19.4405 0 17.7603 0 14.4V9.6Z"fill=#464F50></path><path d="M17.2002 10.1533L12.0002 15.3533L6.8002 10.1533L8.309 8.64453L12.0002 12.3357L15.6914 8.64453L17.2002 10.1533Z"fill=#B3BEC1></path> ');
const ui = t => {
    return e = di(), U(e, t, !0, !0), e;
    var e
};
var ci = C('<div class="game-floating-container w-full h-full">'),
    gi = C('<div><div><div class="flex items-center gap-2 pointer-events-none"><div></div></div><div class="window-controls pointer-events-auto"><div class="flex items-center gap-2"></div></div></div><div>'),
    mi = C("<div class=center>");
const hi = ["fish-prawn-crab", "sicbo-multiplayer", "hotpot", "cave"],
    pi = t => {
        switch (t) {
            case "crash":
                return 632;
            case "keno-multiplayer":
                return 680;
            case "parity":
            case "fastparity":
                return 634;
            case "sword":
            case "baccarat-multiplayer":
            case "blackjack":
            case "oriental-beauties":
                return 606;
            case "patti":
                return 682;
            case "fish-prawn-crab":
                return 664;
            case "sicbo-multiplayer":
                return 648;
            case "cave":
                return 692;
            case "roulette-multiplayer":
                return 668;
            default:
                return 568
        }
    },
    st = t => {
        const [e, r] = V(t.initialPosition || {
            x: 100,
            y: 100
        }), [n, u] = V(t.initialIsMinimized || !1), [a, w] = V(!1), [l, o] = V({
            x: 0,
            y: 0
        }), {
            mobileMode: s,
            setMobileMode: p
        } = Et(), [c, g] = V(t.initialPosition || {
            x: 100,
            y: 100
        });
        let m;
        t.initialMobileMode !== void 0 && p(t.initialMobileMode), ee(() => {
            vi(t.windowId, {
                position: e(),
                isMinimized: n(),
                mobileMode: s()
            })
        }), t.initialIsMinimized && setTimeout(() => {
            const h = _();
            r(h)
        }, 50);
        const x = () => {
                window.dispatchEvent(new CustomEvent("bringFloatingWindowToFront", {
                    detail: {
                        windowId: t.windowId
                    }
                }))
            },
            v = () => n() ? {
                width: 194,
                height: 48
            } : s() && t.gameUnique === "cave" ? {
                width: 398,
                height: 948
            } : s() && t.gameUnique === "fast-crash" ? {
                width: 398,
                height: 828
            } : !s() || t.isSlotsGame || t.isScoreGame ? s() && (t.isSlotsGame || t.isScoreGame) ? {
                width: 398,
                height: 328
            } : t.isSlotsGame || t.isScoreGame ? {
                width: 900,
                height: 606
            } : {
                width: 900,
                height: pi(t.gameUnique)
            } : {
                width: 398,
                height: 788
            },
            _ = () => {
                const h = v(),
                    L = I();
                return {
                    x: window.innerWidth - (h.width + 10) * (L + 1) - 20 + 10,
                    y: window.innerHeight - h.height - 0
                }
            },
            I = () => {
                const h = document.querySelectorAll(".floating-game-window"),
                    L = Array.from(h).filter(E => {
                        const k = E.classList.contains("minimized"),
                            R = E.id === `floating-game-window-${t.windowId}`;
                        return k || R
                    }).map(E => {
                        const k = E.id || "";
                        return {
                            element: E,
                            windowId: k.replace("floating-game-window-", ""),
                            fullId: k
                        }
                    }).sort((E, k) => parseInt(E.windowId.split("-").pop() || "0") - parseInt(k.windowId.split("-").pop() || "0")).findIndex(({
                        windowId: E
                    }) => E === t.windowId);
                return Math.max(0, L)
            },
            O = () => {
                n() || (g(e()), u(!0), setTimeout(() => {
                    var L;
                    const h = _();
                    r(h), (L = t.onMinimize) == null || L.call(t)
                }, 50))
            },
            F = () => {
                n() && (u(!1), setTimeout(() => {
                    var R;
                    const h = c(),
                        L = v(),
                        E = window.innerWidth - L.width,
                        k = window.innerHeight - L.height;
                    r({
                        x: Math.max(0, Math.min(h.x, E)),
                        y: Math.max(0, Math.min(h.y, k))
                    }), (R = t.onRestore) == null || R.call(t)
                }, 50))
            },
            Y = h => {
                if (h.target.closest(".window-controls button") || (x(), n())) return;
                w(!0);
                const L = e();
                o({
                    x: h.clientX - L.x,
                    y: h.clientY - L.y
                }), h.preventDefault()
            },
            G = h => {
                if (!a()) return;
                const L = h.clientX - l().x,
                    E = h.clientY - l().y,
                    k = window.innerWidth - v().width,
                    R = window.innerHeight - v().height;
                r({
                    x: Math.max(0, Math.min(L, k)),
                    y: Math.max(0, Math.min(E, R))
                })
            },
            B = () => {
                if (w(!1), s()) {
                    const h = m == null ? void 0 : m.querySelector(".mobile-scroll-container");
                    h && (h.style.overflow = "auto")
                }
            },
            K = () => {
                if (n()) {
                    const h = _();
                    r(h)
                } else {
                    const h = e(),
                        L = v(),
                        E = window.innerWidth - L.width,
                        k = window.innerHeight - L.height;
                    r({
                        x: Math.max(0, Math.min(h.x, E)),
                        y: Math.max(0, Math.min(h.y, k))
                    })
                }
            },
            We = h => {
                if (n()) {
                    const L = _();
                    r(L)
                }
            };
        return pt(() => {
            document.addEventListener("mousemove", G), document.addEventListener("mouseup", B), window.addEventListener("resize", K), window.addEventListener("updateFloatingWindowPositions", We), document.addEventListener("touchmove", h => {
                if (a() && h.touches.length === 1) {
                    const L = h.touches[0];
                    G({
                        clientX: L.clientX,
                        clientY: L.clientY
                    })
                }
            }), document.addEventListener("touchend", B)
        }), ue(() => {
            document.removeEventListener("mousemove", G), document.removeEventListener("mouseup", B), window.removeEventListener("resize", K), window.removeEventListener("updateFloatingWindowPositions", We), document.removeEventListener("touchend", B)
        }), i(M, {
            get when() {
                return t.isVisible
            },
            get children() {
                var h = gi(),
                    L = h.firstChild,
                    E = L.firstChild,
                    k = E.firstChild,
                    R = E.nextSibling.firstChild,
                    Ce = L.nextSibling;
                return h.$$click = x, typeof m == "function" ? Bt(m, h) : m = h, h.style.setProperty("user-select", "none"), h.style.setProperty("pointer-events", "auto"), L.$$touchend = () => {
                    x()
                }, L.$$touchstart = y => {
                    if (y.touches.length === 1) {
                        const X = y.touches[0];
                        Y({
                            target: y.target,
                            clientX: X.clientX,
                            clientY: X.clientY,
                            preventDefault: () => y.preventDefault()
                        })
                    }
                }, L.$$mousedown = Y, d(k, () => t.gameUnique), d(R, i(M, {
                    get when() {
                        return S(() => !n())() && !hi.includes(t.gameUnique)
                    },
                    get children() {
                        return i(J, {
                            class: "p-1 text-secondary hover:text-primary",
                            onClick: () => p(!s()),
                            get children() {
                                return i(M, {
                                    get when() {
                                        return s()
                                    },
                                    get fallback() {
                                        return i(si, {})
                                    },
                                    get children() {
                                        return i(oi, {})
                                    }
                                })
                            }
                        })
                    }
                }), null), d(R, i(J, {
                    get class() {
                        return "p-1 text-secondary hover:text-primary transition-transform " + (n() ? "rotate-180" : "")
                    },
                    get onClick() {
                        return n() ? F : O
                    },
                    get children() {
                        return i(ui, {})
                    }
                }), null), d(R, i(J, {
                    class: "p-1 text-secondary hover:text-error",
                    get onClick() {
                        return t.onClose
                    },
                    get children() {
                        return i(ni, {})
                    }
                }), null), d(Ce, i(me, {
                    get fallback() {
                        return y = mi(), d(y, i(Oe, {})), y;
                        var y
                    },
                    get children() {
                        return i(M, {
                            get when() {
                                return t.gameComponent
                            },
                            get children() {
                                var y = ci();
                                return d(y, i(W, {
                                    get component() {
                                        return t.gameComponent
                                    }
                                })), y
                            }
                        })
                    }
                })), Q(y => {
                    var X = `floating-game-window-${t.windowId}`,
                        Ze = "floating-game-window fixed z-[888] bg-layer1 border border-third rounded-lg shadow-2xl " + (n() ? "minimized cursor-pointer" : ""),
                        be = `${e().x}px`,
                        xe = `${e().y}px`,
                        ye = `${v().width}px`,
                        _e = `${v().height}px`,
                        He = "window-title-bar flex items-center justify-between bg-layer4 px-4 h-12 border-b border-third " + (a() ? "cursor-grabbing" : "cursor-grab"),
                        $e = te("text-sm font-medium text-primary", n() && "max-w-20 truncate"),
                        Ge = "bg-layer4 relative " + (n() ? "hidden" : ""),
                        Vt = s() ? {
                            height: "calc(100% - 48px)"
                        } : {
                            transform: "scale(0.8)",
                            "transform-origin": "top left",
                            width: "125%"
                        };
                    return X !== y.e && Ve(h, "id", y.e = X), Ze !== y.t && q(h, y.t = Ze), be !== y.a && ((y.a = be) != null ? h.style.setProperty("left", be) : h.style.removeProperty("left")), xe !== y.o && ((y.o = xe) != null ? h.style.setProperty("top", xe) : h.style.removeProperty("top")), ye !== y.i && ((y.i = ye) != null ? h.style.setProperty("width", ye) : h.style.removeProperty("width")), _e !== y.n && ((y.n = _e) != null ? h.style.setProperty("height", _e) : h.style.removeProperty("height")), He !== y.s && q(L, y.s = He), $e !== y.h && q(k, y.h = $e), Ge !== y.r && q(Ce, y.r = Ge), y.d = Gt(Ce, Vt, y.d), y
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0,
                    i: void 0,
                    n: void 0,
                    s: void 0,
                    h: void 0,
                    r: void 0,
                    d: void 0
                }), h
            }
        })
    };
$t(["click", "mousedown", "touchstart", "touchend"]);
const Pe = "floating-game-windows-state";

function Ee() {
    try {
        localStorage.removeItem(Pe)
    } catch (t) {}
}

function wi(t) {
    return !(!t.windowId || !t.gameUnique || typeof t.position.x != "number" || typeof t.position.y != "number" || typeof t.isMinimized != "boolean" || typeof t.mobileMode != "boolean" || typeof t.openedAt != "number" || typeof t.zIndex != "number" || typeof t.windowIndex != "number")
}
var de = C('<div id=game-full-container class="mx-auto w-full transition-all duration-200 @container">');
const lt = (t, e) => !(ze.includes(t) || j.includes(e) || t === "bc-poker"),
    ot = t => j.includes(t);
class Z {
    constructor() {
        this.windows = new Map, this.windowOrder = [], this.currentMaxZIndex = 888, this.handleFloatingGameEvent = e => {
            var u;
            const r = e,
                n = (u = r.detail) == null ? void 0 : u.gameUnique;
            n && this.openFloatingGame(n)
        }, this.handleBringToFrontEvent = e => {
            var u;
            const r = e,
                n = (u = r.detail) == null ? void 0 : u.windowId;
            n && this.bringWindowToFront(n)
        }, window.addEventListener("openFloatingGame", this.handleFloatingGameEvent.bind(this)), window.addEventListener("bringFloatingWindowToFront", this.handleBringToFrontEvent.bind(this)), setTimeout(() => {
            this.restorePersistedWindows()
        }, 0), window.addEventListener("beforeunload", this.saveCurrentState.bind(this))
    }
    static getInstance() {
        return Z.instance || (Z.instance = new Z), Z.instance
    }
    openFloatingGame(e, r) {
        return T(this, null, function*() {
            if (!e) return;
            const n = yield wt(e), u = new URLSearchParams(window.location.search);
            if (!Array.from(this.windows.values()).find(a => a.gameUnique === e)) try {
                let a;
                a = N.includes(e) || H.includes(e) ? yield P[e](): j.includes(n.providerId) ? yield P["special-slots"](): e === "bc-poker" ? yield P["bc-poker"](): yield P.slots();
                const w = a.default.GamePage || a.default.Main,
                    l = `${e}`,
                    o = Date.now(),
                    s = document.createElement("div");
                s.id = `floating-game-${l}`, s.style.position = "fixed", s.style.top = "0", s.style.left = "0", s.style.width = "100%", s.style.height = "100%", s.style.pointerEvents = "none", this.currentMaxZIndex += 1, s.style.zIndex = this.currentMaxZIndex.toString(), (r || document.body).appendChild(s);
                const p = H.includes(e),
                    c = () => {
                        return p ? (x = de(), d(x, i(ne, {
                            client: ae,
                            get children() {
                                return i(W, {
                                    component: w,
                                    gameUnique: e,
                                    params: u
                                })
                            }
                        })), x) : (m = de(), d(m, i(ne, {
                            client: ae,
                            get children() {
                                return i(Me, {
                                    get game() {
                                        return a.default.game
                                    },
                                    gameUnique: e,
                                    get children() {
                                        return i(W, {
                                            component: w,
                                            gameUnique: e,
                                            params: u
                                        })
                                    }
                                })
                            }
                        })), m);
                        var m, x
                    },
                    g = {
                        container: s,
                        dispose: Ke(() => {
                            const m = this;
                            return i(pe, {
                                isFloatingWindow: !0,
                                get children() {
                                    return i(st, {
                                        gameComponent: c,
                                        isVisible: !0,
                                        windowId: l,
                                        gameUnique: e,
                                        get windowIndex() {
                                            return m.windowOrder.length
                                        },
                                        onClose: () => m.closeFloatingGame(l),
                                        onMinimize: () => m.updateWindowPositions(),
                                        onRestore: () => m.updateWindowPositions(),
                                        get isSlotsGame() {
                                            return lt(e, n.providerId)
                                        },
                                        get isScoreGame() {
                                            return ot(n.providerId)
                                        }
                                    })
                                }
                            })
                        }, s),
                        gameUnique: e,
                        providerId: n.providerId,
                        id: l,
                        openedAt: o,
                        zIndex: this.currentMaxZIndex
                    };
                this.windows.set(l, g), this.windowOrder.push(l), this.saveCurrentState()
            } catch (a) {}
        })
    }
    closeFloatingGame(e) {
        if (e) {
            let r = this.windows.get(e);
            if (!r) {
                for (const [n, u] of this.windows.entries())
                    if (u.gameUnique === e) {
                        r = u, e = n;
                        break
                    }
            }
            if (r) {
                r.dispose(), r.container.parentNode && r.container.parentNode.removeChild(r.container), this.windows.delete(e);
                const n = this.windowOrder.indexOf(e);
                n > -1 && this.windowOrder.splice(n, 1), this.updateWindowPositions(), this.saveCurrentState()
            }
        } else this.windows.forEach((r, n) => {
            this.closeFloatingGame(n)
        })
    }
    bringWindowToFront(e) {
        const r = this.windows.get(e);
        r && (this.currentMaxZIndex += 1, r.zIndex = this.currentMaxZIndex, r.container.style.zIndex = this.currentMaxZIndex.toString())
    }
    updateWindowPositions() {
        window.dispatchEvent(new CustomEvent("updateFloatingWindowPositions", {
            detail: {
                totalWindows: this.windows.size,
                windowOrder: this.windowOrder
            }
        }))
    }
    getAllWindows() {
        return Array.from(this.windows.values())
    }
    getWindowById(e) {
        return this.windows.get(e)
    }
    getWindowCount() {
        return this.windows.size
    }
    isWindowOpen(e) {
        return e ? Array.from(this.windows.values()).some(r => r.gameUnique === e) : this.windows.size > 0
    }
    saveCurrentState() {
        const e = [];
        this.windowOrder.forEach((n, u) => {
            const a = this.windows.get(n);
            if (a) {
                const w = function(l, o, s, p, c, g, m, x, v) {
                    return {
                        windowId: l,
                        gameUnique: o,
                        providerId: s,
                        position: p,
                        isMinimized: c,
                        mobileMode: g,
                        openedAt: m,
                        zIndex: x,
                        windowIndex: v
                    }
                }(a.id, a.gameUnique, a.providerId, a.position || {
                    x: 100,
                    y: 100
                }, a.isMinimized || !1, a.mobileMode || !1, a.openedAt, a.zIndex, u);
                e.push(w)
            }
        });
        var r;
        (function(n) {
            try {
                const u = je(Le({}, n), {
                    lastSaved: Date.now()
                });
                localStorage.setItem(Pe, JSON.stringify(u))
            } catch (u) {}
        })({
            windows: (r = e, r.filter(wi)),
            currentMaxZIndex: this.currentMaxZIndex,
            windowOrder: [...this.windowOrder],
            lastSaved: Date.now()
        })
    }
    restorePersistedWindows() {
        return T(this, null, function*() {
            const e = function() {
                try {
                    const r = localStorage.getItem(Pe);
                    if (!r) return null;
                    const n = JSON.parse(r);
                    return Date.now() - n.lastSaved > 864e5 ? (Ee(), null) : n
                } catch (r) {
                    return Ee(), null
                }
            }();
            if (e && e.windows.length !== 0) {
                this.currentMaxZIndex = e.currentMaxZIndex, this.windowOrder = [...e.windowOrder];
                for (const r of e.windows) try {
                    yield this.restoreWindowFromState(r)
                } catch (n) {}
            }
        })
    }
    restoreWindowFromState(e) {
        return T(this, null, function*() {
            const r = new URLSearchParams(window.location.search);
            try {
                let n;
                n = N.includes(e.gameUnique) ? yield P[e.gameUnique](): j.includes(e.providerId) ? yield P["special-slots"](): e.gameUnique === "bc-poker" ? yield P["bc-poker"](): yield P.slots();
                const u = n.default.GamePage || n.default.Main,
                    a = document.createElement("div");
                a.id = `floating-game-${e.windowId}`, a.style.position = "fixed", a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.height = "100%", a.style.pointerEvents = "none", this.currentMaxZIndex += 1, a.style.zIndex = this.currentMaxZIndex.toString(), document.body.appendChild(a);
                const w = H.includes(e.gameUnique),
                    l = () => {
                        return w ? (p = de(), d(p, i(ne, {
                            client: ae,
                            get children() {
                                return i(W, {
                                    component: u,
                                    get gameUnique() {
                                        return e.gameUnique
                                    },
                                    params: r
                                })
                            }
                        })), p) : (s = de(), d(s, i(ne, {
                            client: ae,
                            get children() {
                                return i(Me, {
                                    get game() {
                                        return n.default.game
                                    },
                                    get gameUnique() {
                                        return e.gameUnique
                                    },
                                    get children() {
                                        return i(W, {
                                            component: u,
                                            get gameUnique() {
                                                return e.gameUnique
                                            },
                                            params: r
                                        })
                                    }
                                })
                            }
                        })), s);
                        var s, p
                    },
                    o = {
                        container: a,
                        dispose: Ke(() => {
                            const s = this;
                            return i(pe, {
                                isFloatingWindow: !0,
                                get children() {
                                    return i(st, {
                                        gameComponent: l,
                                        isVisible: !0,
                                        get windowId() {
                                            return e.windowId
                                        },
                                        get gameUnique() {
                                            return e.gameUnique
                                        },
                                        get windowIndex() {
                                            return e.windowIndex
                                        },
                                        onClose: () => s.closeFloatingGame(e.windowId),
                                        onMinimize: () => s.updateWindowPositions(),
                                        onRestore: () => s.updateWindowPositions(),
                                        get isSlotsGame() {
                                            return lt(e.gameUnique, e.providerId)
                                        },
                                        get isScoreGame() {
                                            return ot(e.providerId)
                                        },
                                        get initialPosition() {
                                            return e.position
                                        },
                                        get initialIsMinimized() {
                                            return e.isMinimized
                                        },
                                        get initialMobileMode() {
                                            return e.mobileMode
                                        }
                                    })
                                }
                            })
                        }, a),
                        gameUnique: e.gameUnique,
                        providerId: e.providerId,
                        id: e.windowId,
                        openedAt: e.openedAt,
                        zIndex: this.currentMaxZIndex,
                        position: e.position,
                        isMinimized: e.isMinimized,
                        mobileMode: e.mobileMode
                    };
                this.windows.set(e.windowId, o)
            } catch (n) {}
        })
    }
    updateWindowState(e, r) {
        const n = this.windows.get(e);
        n && (Object.assign(n, r), setTimeout(() => this.saveCurrentState(), 100))
    }
    clearPersistenceData() {
        Ee()
    }
}
const kt = Z.getInstance(),
    vi = (t, e) => kt.updateWindowState(t, e),
    Fi = Z;
var fi = C('<div class="flex flex-1 center">'),
    dt = C('<div id=game-full-layout class="mx-auto py-3 sm:py-0 grid-cols-1">'),
    Ci = C('<div class="flex flex-col max-w-[1200px] mx-auto">'),
    bi = C('<div id=game-full-container class="max-w-[1232px] mx-auto w-full sm:px-4 sm:pb-5 transition-all duration-200 @container">'),
    xi = C("<span>"),
    ut = C('<div class="h-80 sm:h-[38rem] center bg-layer4 light-game-view rounded-xl">');
const H = ["tower-legend", "video-poker", "hotpot", "Hotpot"],
    ze = ["baccarat", "classic-dice", "coinflip", "ring-of-fortune", "crash", "fastparity", "hash-dice", "hilo", "keno-multiplayer", "keno", "limbo", "mines", "parity", "plinko", "roulette", "RouletteSingle", "tower-legend", "twist", "ultimate-dice", "video-poker", "wheel", "double", "cave", "roulette-multiplayer", "stellar-rush", "bingo", "color", "fast-crash", "patti", "bingo", "jade", "sicbo-multiplayer", "fish-prawn-crab", "bullet-spin"],
    Mt = ["baccarat-multiplayer", "blackjack", "oriental-beauties", "sword"],
    N = [...Mt, ...ze],
    St = [213, 203],
    Pt = [215, 163, 230],
    j = [...St, ...Pt],
    ct = ["teen-patti-by-bc-originals", "rummy-by-bc-originals", "andar-bahar-by-bc-originals"],
    qi = Object.freeze(Object.defineProperty({
        __proto__: null,
        amigoGameCode: Pt,
        default: function() {
            const t = ie(),
                [e] = Yt(),
                r = mt(),
                n = () => t.gameUnique,
                u = Te(),
                a = l => {
                    l.stopPropagation(), N.includes(n()) ? r(-1) : r(-99)
                };
            pt(() => {
                const l = document.querySelector(".dialog-back");
                l && l.addEventListener("click", a, !0)
            }), D(() => {
                const l = Nt.on("navigate", o => {
                    r(o)
                });
                ue(() => {
                    l()
                })
            }), ue(() => {
                const l = document.querySelector(".dialog-back");
                l && l.removeEventListener("click", a, !0)
            }), ee(() => {
                var l;
                l = n(), kt.closeFloatingGame(l)
            });
            const w = () => i(Xe, {
                get title() {
                    return i(Je, {})
                },
                get children() {
                    var l = fi();
                    return d(l, i(Oe, {
                        class: "sm:h-[50rem]"
                    })), l
                }
            });
            return i(X1, {
                get children() {
                    return i(M, {
                        get when() {
                            return n()
                        },
                        keyed: !0,
                        get fallback() {
                            return i(w, {})
                        },
                        children: l => (o => {
                            const [s] = jt(() => T(this, null, function*() {
                                let c;
                                const g = yield wt(o);
                                return c = H.includes(o) || N.includes(o) ? yield P[o](): j.includes((g == null ? void 0 : g.providerId) || 0) ? yield P["special-slots"](): ct.includes(o) ? yield P["mela-slots"](): o === "bc-poker" ? yield P["bc-poker"](): yield P.slots(), c.default
                            })), p = D(() => H.includes(n()));
                            return i(Xe, {
                                get title() {
                                    return S(() => !(!H.includes(n()) && !N.includes(n())))() ? i(Je, {}) : (c = xi(), d(c, () => {
                                        var g;
                                        return (g = u.data) == null ? void 0 : g.fullName
                                    }), c);
                                    var c
                                },
                                get children() {
                                    var c = bi();
                                    return d(c, i(M, {
                                        get when() {
                                            return S(() => !p())() && s()
                                        },
                                        get children() {
                                            return i(Me, {
                                                get game() {
                                                    var g;
                                                    return (g = s()) == null ? void 0 : g.game
                                                },
                                                get gameUnique() {
                                                    return n()
                                                },
                                                get children() {
                                                    return [i(pe, {
                                                        isFloatingWindow: !1,
                                                        get children() {
                                                            var m = dt();
                                                            return d(m, i(me, {
                                                                get fallback() {
                                                                    return ut()
                                                                },
                                                                get children() {
                                                                    return i(W, {
                                                                        get component() {
                                                                            var x;
                                                                            return (x = s()) == null ? void 0 : x.Main
                                                                        },
                                                                        get gameUnique() {
                                                                            return n()
                                                                        },
                                                                        params: e
                                                                    })
                                                                }
                                                            })), m
                                                        }
                                                    }), (g = Ci(), d(g, i(G1, {}), null), d(g, i(M, {
                                                        get when() {
                                                            return !Ae.isesportsbr
                                                        },
                                                        get children() {
                                                            return i(K1, {})
                                                        }
                                                    }), null), d(g, i(ii, {}), null), g), i(p1, {
                                                        get game() {
                                                            var m;
                                                            return (m = s()) == null ? void 0 : m.game
                                                        }
                                                    })];
                                                    var g
                                                }
                                            })
                                        }
                                    }), null), d(c, i(M, {
                                        get when() {
                                            return p()
                                        },
                                        get children() {
                                            return i(pe, {
                                                isFloatingWindow: !1,
                                                get children() {
                                                    var g = dt();
                                                    return d(g, i(me, {
                                                        get fallback() {
                                                            return ut()
                                                        },
                                                        get children() {
                                                            return i(W, {
                                                                get component() {
                                                                    var m;
                                                                    return (m = s()) == null ? void 0 : m.Main
                                                                }
                                                            })
                                                        }
                                                    })), g
                                                }
                                            })
                                        }
                                    }), null), c
                                }
                            })
                        })(l)
                    })
                }
            })
        },
        fsm_originals_games: H,
        mela_slots_games: ct,
        original_cocos_games: Mt,
        originals_games: N,
        originals_normal_games: ze,
        scoreGameCode: j,
        waliGameCode: St
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Fi as F, Ti as G, qi as L, K1 as R, Se as S, Et as a, Lt as b, G1 as c, H as f, P as g, N as o, Ui as u, St as w
};