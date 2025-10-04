import "./index-DxYPFwcM.js";
import {
    m as o,
    ap as c,
    a9 as l,
    k as s
} from "./vendor-CR7NILRE.js";
import {
    ax as m
} from "./common-jbtJucx3.js";
import {
    t as e,
    f as u
} from "./Application-CExkuTua.js";
import {
    P as _
} from "./PcNav-DwfUOlr2.js";

function g(t) {
    return s(u, {
        get section_id() {
            return t.section_id
        },
        get source() {
            return {
                sectionName: t.sectionName
            }
        },
        get class() {
            return t.class
        }
    })
}

function S() {
    const t = o(() => ({
            originals: e("__ENV_SITE__ Originals"),
            exclusive: e("__ENV_SITE__ Exclusive"),
            slots: e("Slots"),
            live_casino: e("Live Casino"),
            hot_games: e("Hot Games"),
            game_shows: e("Game Shows"),
            new: e("New Releases"),
            providers: e("Providers"),
            feature_buyin: e("Feature Buy-in"),
            blackjack: e("Blackjack"),
            themes: e("Themes"),
            table_games: e("Table Games"),
            top_picks: e("Top Picks"),
            pachinko: e("Pachinko"),
            fishing: e("Fishing"),
            poker: e("Poker"),
            bingo_all: e("All Bingo Games")
        })),
        r = c(),
        [i] = l(),
        a = o(() => decodeURIComponent(r.section || "")),
        n = o(() => i.label ? i.label : t()[a()] ? ? a());
    return s(m, {
        get title() {
            return n()
        },
        get children() {
            return [s(_, {
                get title() {
                    return n()
                }
            }), s(g, {
                section_id: "page_sectionname",
                get sectionName() {
                    return a()
                },
                class: "py-4"
            })]
        }
    })
}
export {
    g as SectionSimple, S as
    default
};