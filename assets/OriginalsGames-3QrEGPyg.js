import {
    s as $,
    ar as G,
    m as d,
    v as g,
    y as P,
    q as S,
    P as q,
    V as N,
    b as w,
    j as U,
    h as E,
    x as h,
    k as i,
    D as C,
    E as j,
    X as F,
    G as L
} from "./vendor-CR7NILRE.js";
import {
    l as b,
    e as k,
    q as v,
    b as W,
    a as x,
    z as O,
    W as A
} from "./common-jbtJucx3.js";
import {
    a4 as B,
    a as D
} from "./Application-CExkuTua.js";
import "./index-DxYPFwcM.js";
var M = g("<div>");
const n = {
        bulletspin: "bullet",
        bingo: "bc_bingo",
        sic_bo: "sic_bo",
        cro12151: "cursed_clown",
        cro12146: "cyberpunk",
        seadice: "fish_prawn_crab",
        sicbo: "sicbo",
        cro12150: "symbiote",
        cro12152: "nezha",
        crash: "crash",
        fastparity: "fastparity",
        plinko: "plinko",
        limbo: "limbo",
        mines: "mines",
        twist: "twist",
        wheel: "wheel",
        tower: "towerlegend",
        classicdice: "classicdice",
        hilo: "hilo",
        kenosingle: "keno",
        slotscave: "cave",
        hashdice: "hashdice",
        coinflip: "coinflip",
        ultimatedice: "ultimatedice",
        roulettesingle: "roulette",
        double: "double",
        evo21rouletter4dcwwxx47rywy5n: "roulettemultiplayer",
        coloring: "ringoffortune",
        videopoker: "videopoker",
        roulette: "roulettemultiplayer",
        blackjack: "blackjack",
        cro12120: "deadliestsea",
        evo21blackjackreyd5odmlwpfzjdw: "bcblackjacka",
        evo21blackjackreyezjtolwpf37px: "bcblackjackb",
        keno: "keno",
        slotssword: "sword",
        evo21blackjackr4dccjre47rytlgz: "bc_blackjack_c",
        slotsorientalbeauties: "beauties",
        evo21blackjackrgea7vnq54ehg2fs: "bc_speed_blackjack",
        cro12128: "sugar_fiesta_1000",
        baccarat: "baccaratmultiplayer",
        cro12122: "dragonquest",
        baccaratsingle: "baccarat",
        cro12127: "sugar_fiesta_1000",
        evo21blackjackrgdzue7v4xaga5s5: "bcgamevipblackjack",
        pp23424i: "speed_baccarat",
        evo21blackjackr4da45gr47ryncsy: "bc_vip_blackjack_2",
        cro12123: "johnwild_default",
        pp23902a13: "bconeblackjack",
        cro12121: "wizards_academy",
        cro12124: "runaway_zombies",
        cro12132: "lucky_ranch",
        cro12130: "left_4_cash",
        evp346149: "bc_hot_mania",
        cro12111: "dragonslayer",
        cro12129: "piece_of_cash",
        cro12126: "cursed_doll",
        cro12109: "doggyminer",
        cro12110: "monster_hunter",
        evo21blackjackr4dbmfrt47rypvea: "bc_blackjack_salon_privee",
        cro12125: "samurai_clash",
        evo21classicfreebetbjr4ddcpxr47ryy22j: "blackjack",
        bcpoker: "bc_poker",
        cro12142: "wukong",
        cro12144: "ghost_boo_nanza",
        evo21baccaratsf4qdjyc6c3gsolk: "bacarrat",
        cro12131: "sea_of_olympus_1000",
        evo21baccaratsir4lu3dei7kjs63: "bcspeedbaccarat",
        stellarrush: "stellar_rush",
        cro12136: "gold_of_olympus",
        cro12141: "arcane_portals",
        evo21baccaratevosuperspeedbac: "korean_super_speed_baccarat",
        cro12143: "starshine_princess",
        cro12147: "golden_year",
        cro12134: "reel_big_catch",
        cro12135: "clash_cash",
        cro12140: "jacks_crypt",
        cro12133: "magic_mine",
        color: "color_game",
        default: "bc_originallogo",
        default87: "bc87",
        defaultbz: "bz",
        defaultjb: "jb_originallogo",
        fastcrash: "fast_crash",
        patti: "teen_patti",
        jade: "jade"
    },
    R = function(t) {
        const [, o] = $(t, ["name", "class", "style"]);
        let r = G(t.name).toLowerCase().replace(/:/g, "");
        r.includes("99") && (r = r.replace("99", "")), r.includes("98") && (r = r.replace("98", "")), r.includes("96") && (r = r.replace("96", ""));
        const p = d(() => {
            const c = n[r];
            return c || (b.is87 ? n.default87 : b.isbzall ? n.defaultbz : b.isjb ? n.defaultjb : n.default)
        });
        return (() => {
            var c = M();
            return P(c, S({
                get class() {
                    return v("game_icon_img", !W.darken && "game_icon_img_light", b.isjb ? "game_icon_img_yellow" : "", t.class, p())
                },
                get style() {
                    return {
                        transform: t.scale || (k.mobile ? "scale(0.8)" : "scale(0.75)")
                    }
                }
            }, o), !1, !1), c
        })()
    };
var V = g("<div><div>"),
    X = g('<span class="ml-2 whitespace-nowrap font-semibold text-secondary">'),
    H = g('<div class="relative flex-none center size-10">');
const ee = function() {
    const t = q();
    N();
    const [o, r] = w(!1), [p, c] = w(!1);
    x.on("open-sidebar-games", e => _(e));
    const _ = e => {
            U(() => {
                c(e), r(e)
            })
        },
        [z] = B(),
        f = d(() => z() ? .gameList.list),
        I = d(() => {
            const e = f();
            if (e && e.length > 0) {
                const s = O(t.pathname);
                if (s.startsWith("/game/")) {
                    const a = s.replace("/game/", "");
                    return e.findIndex(u => a.startsWith(u.gameIdentity.gameUrl)) >= 0
                } else return !1
            }
            return !1
        });
    E(() => {
        x.emit("auto-ingame-originals", I())
    });
    const y = d(() => {
        const e = f();
        return e && e.length > 0 ? p() : !1
    });
    return (() => {
        var e = V(),
            s = e.firstChild;
        return e.addEventListener("mouseleave", () => _(!1)), e.addEventListener("mouseenter", () => _(!0)), e.style.setProperty("transition", "all 0.2s"), s.style.setProperty("box-shadow", "4px 0px 8px 0px rgba(0, 0, 0, 0.05)"), s.style.setProperty("background", "var(--Sidebar-Unit_bg)"), h(s, i(L, {
            get each() {
                return f()
            },
            children: a => i(F, {
                get when() {
                    return a.gameIdentity.gameUrl !== "crash-trenball"
                },
                get children() {
                    return i(A, {
                        get href() {
                            return `/game/${a.gameIdentity.gameUrl}`
                        },
                        class: "nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1",
                        onClick: l => {
                            D.trackEvent("sidebar_combo_click", {
                                button_name: "sidebar_casino_game_combo_" + a.gameIdentity.gameUrl
                            })
                        },
                        get children() {
                            return [i(K, {
                                get gameUnique() {
                                    return a.gameIdentity.gameName
                                }
                            }), (() => {
                                var l = X();
                                return h(l, () => J(a.fullName)), l
                            })()]
                        }
                    })
                }
            })
        })), C(a => {
            var l = v("absolute top-0 h-full cursor-pointer pl-4 left-full -ml-4", y() ? o() ? "bg-layer3 w-[256px]" : "bg-layer3 w-[72px]" : "select-none pointer-events-none w-[0px] bg-transparent"),
                u = v("hidden-scroll-bar h-full w-full px-2 py-3 overflow-y-auto", !y() && "select-none opacity-0");
            return l !== a.e && j(e, a.e = l), u !== a.t && j(s, a.t = u), a
        }, {
            e: void 0,
            t: void 0
        }), e
    })()
};

function J(m) {
    return m.replace(/bcgame/gi, k.siteName).replace(/bc.game/gi, k.siteName)
}
const K = function(t) {
    return (() => {
        var o = H();
        return h(o, i(R, {
            get name() {
                return t.gameUnique
            }
        })), o
    })()
};
export {
    ee as
    default
};