import {
    I as p,
    a as g,
    b as f,
    _ as o
} from "./manifest-4a9d96af.js";
import {
    b as v,
    c as t,
    S as m,
    i as e,
    a as s,
    t as _,
    l as n
} from "./solid-js-26bd2957.js";
import {
    u as S
} from "./store-de7ddcb4.js";
import {
    L as E
} from "./LotterySearchResult-d761bb4e.js";
import {
    t as y
} from "./i18n-84cf21fb.js";
import {
    t as L
} from "./throttle-e4f3954e.js";
import "./store-2ed2b91e.js";
import "./apis-fc5d0f98.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./isObject-909534d5.js";
import "./_MapCache-9c96b8d5.js";
import "./PopularSectionItem-f181d0d1.js";
import "./index-f5548403.js";
import "./currency-4826aee6.js";
import "./CountryAvatar-e9499a16.js";
import "./jb-countries-1e3f9cbb.js";
import "./lottery-69be0c1b.js";
import "./debounce-f7740f4e.js";
var I = _("<section class=py-2>"),
    P = _('<div class="flex-1 bg-layer2"><section class="relative my-4">');
const b = n(() => o(() =>
        import ("./BannerSection-9114168b.js"), ["assets/BannerSection-9114168b.js", "assets/solid-js-26bd2957.js", "assets/manifest-4a9d96af.js", "assets/i18n-84cf21fb.js"])),
    R = n(() => o(() =>
        import ("./UpcomingDrawSectionWrap-621d2246.js"), ["assets/UpcomingDrawSectionWrap-621d2246.js", "assets/solid-js-26bd2957.js", "assets/i18n-84cf21fb.js", "assets/manifest-4a9d96af.js", "assets/UpcomingDrawSection-9084d5f4.js", "assets/currency-4826aee6.js", "assets/index-f5548403.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js", "assets/throttle-e4f3954e.js", "assets/debounce-f7740f4e.js", "assets/isObject-909534d5.js", "assets/toNumber-e58af95e.js"])),
    w = n(() => o(() =>
        import ("./PopularSection-4baa89b4.js"), ["assets/PopularSection-4baa89b4.js", "assets/solid-js-26bd2957.js", "assets/PopularSectionItem-f181d0d1.js", "assets/index-f5548403.js", "assets/manifest-4a9d96af.js", "assets/currency-4826aee6.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js", "assets/i18n-84cf21fb.js", "assets/store-de7ddcb4.js", "assets/store-2ed2b91e.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/debounce-f7740f4e.js"])),
    D = n(() => o(() =>
        import ("./WinnerSection-4082414b.js"), ["assets/WinnerSection-4082414b.js", "assets/solid-js-26bd2957.js", "assets/currency-4826aee6.js", "assets/manifest-4a9d96af.js", "assets/i18n-84cf21fb.js", "assets/index-f5548403.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js"])),
    T = n(() => o(() =>
        import ("./FavouriteSection-17709bea.js"), ["assets/FavouriteSection-17709bea.js", "assets/solid-js-26bd2957.js", "assets/store-de7ddcb4.js", "assets/store-2ed2b91e.js", "assets/apis-fc5d0f98.js", "assets/manifest-4a9d96af.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/LikeLotteryItem-8fcc1944.js", "assets/index-f5548403.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js", "assets/i18n-84cf21fb.js"])),
    A = n(() => o(() =>
        import ("./LatestResultsSection-99f8b4bd.js"), ["assets/LatestResultsSection-99f8b4bd.js", "assets/solid-js-26bd2957.js", "assets/CountryAvatar-e9499a16.js", "assets/manifest-4a9d96af.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js", "assets/i18n-84cf21fb.js"])),
    O = n(() => o(() =>
        import ("./HowToPlaySection-a14cf37a.js"), ["assets/HowToPlaySection-a14cf37a.js", "assets/solid-js-26bd2957.js", "assets/manifest-4a9d96af.js", "assets/i18n-84cf21fb.js", "assets/ArrowIcon-6a21c7e4.js"]));

function X() {
    const {
        store: d
    } = S(), [a, h] = v(""), c = L(l => {
        h(l)
    });
    return t(m, {
        get children() {
            var l = P(),
                i = l.firstChild;
            return e(l, t(b, {}), i), e(i, t(p, {
                name: "Search",
                class: "w-6 h-6 fill-secondary absolute left-2 top-1/2 -translate-y-1/2"
            }), null), e(i, t(g, {
                class: "bg-input_darken px-10 text-base font-semibold placeholder:text-quarterary !pl-10",
                get placeholder() {
                    return y("Lottery Name")
                },
                onChange: c,
                get value() {
                    return a()
                }
            }), null), e(i, t(s, {
                get when() {
                    return a()
                },
                get children() {
                    return t(p, {
                        name: "Close",
                        onClick: () => c(""),
                        class: "cursor-pointer w-6 h-6 fill-secondary absolute right-2 top-1/2 -translate-y-1/2"
                    })
                }
            }), null), e(l, t(s, {
                get when() {
                    return !a()
                },
                get fallback() {
                    return t(E, {
                        get search() {
                            return a()
                        }
                    })
                },
                get children() {
                    return t(m, {
                        get children() {
                            var r = I();
                            return e(r, t(R, {}), null), e(r, t(w, {}), null), e(r, t(D, {}), null), e(r, t(s, {
                                get when() {
                                    var u;
                                    return f.login && ((u = d.favourteLotteries) == null ? void 0 : u.length) > 0
                                },
                                get children() {
                                    return t(T, {})
                                }
                            }), null), e(r, t(A, {}), null), e(r, t(O, {}), null), r
                        }
                    })
                }
            }), null), l
        }
    })
}
export {
    X as
    default
};