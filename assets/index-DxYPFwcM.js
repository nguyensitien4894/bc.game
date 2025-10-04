const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/Application-CExkuTua.js", "assets/common-jbtJucx3.js", "assets/vendor-CR7NILRE.js", "assets/Application-BY0BTHEC.css"]))) => i.map(i => d[i]);
import {
    aa as S,
    ab as b,
    ac as C,
    ad as p,
    U as N,
    h as E,
    k as l,
    X as h,
    ae as I
} from "./vendor-CR7NILRE.js";
import {
    m as P,
    s as u,
    u as R,
    e as g,
    l as a,
    _ as D
} from "./common-jbtJucx3.js";
(function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
    new MutationObserver(e => {
        for (const r of e)
            if (r.type === "childList")
                for (const n of r.addedNodes) n.tagName === "LINK" && n.rel === "modulepreload" && s(n)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(e) {
        const r = {};
        return e.integrity && (r.integrity = e.integrity), e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? r.credentials = "include" : e.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function s(e) {
        if (e.ep) return;
        e.ep = !0;
        const r = t(e);
        fetch(e.href, r)
    }
})();
globalThis._bc = {
    l5q36m: p,
    h0lnfr: C,
    inqq9w: b,
    dxzurp: S,
    fcsy: P
};
const B = "".split(" "),
    f = 0,
    d = "app_version";

function K() {
    return window.location.hostname
}

function T(i = !1) {
    let t = (localStorage.getItem(d) || "").split(".").map(n => Number(n)),
        s = isNaN(t[0]) || t[0] === 0 ? f : t[0],
        e = isNaN(t[1]) ? 0 : t[1],
        r = `${s}.${e}`;
    return s !== f ? (s = f, r = `${String(s)}.0`) : i && (e++, r = `${s}.${e}`, g.version = r), localStorage.setItem(d, r), r
}

function U() {
    return a.is87 ? "87" : a.isjb ? "JB" : a.isesportsbr ? "BS" : a.isbzall ? "BZ" : "BC"
}

function y() {
    return a.isbzall ? "#FFFF00" : a.isjb ? "#FFF600" : "#24EE89"
}

function A() {
    switch (!0) {
        case a.isjb:
            return "jb.com";
        case a.is87:
            return "87.com";
        case a.isesportsbr:
            return "bcsports.game";
        case a.isbzall:
            return "bzjogos.com";
        case a.isbckm:
            return "bcgame.km";
        case a.isbcke:
            return "bcgame.ke";
        case a.isbcng:
            return "bcbet.ng";
        default:
            return "bc.game"
    }
}

function c() {
    let i = A();
    return a.license === "bc" ? i = "bcgame.com" : a.license === "bcke" || a.license === "bcng" ? i = "bcgame.ke" : a.license === "esportsbr" && (i = "bcsports.com"), {
        feadback: `feedback@${i}`,
        security: `security@${i}`,
        recovery: `recovery@${i}`
    }
}

function m() {
    return !!(g.initSearchParams.get("_mjb") || window.jsBridge || window.jsbridge || window.ANDROID_JS_BRIDGE || window.android)
}

function G() {
    u({
        isDev: !1,
        isTest: !1,
        isStage: !1,
        isProd: !0,
        isDevHost: !1,
        imgHost: "img2.distributedresourcestorage.com",
        version: T(),
        host: K(),
        licenseHost: A(),
        buildHost: "BC.GAME".toLocaleUpperCase(),
        siteName: U(),
        brandColor: y(),
        mascot: "COCO",
        platformCoin: "BCD",
        bcl: "BCL",
        freeCoin: "JB",
        SUPPORT: c().recovery,
        FEEDBACK: c().feadback,
        SECURITY: c().security,
        GITHUB: "bcgame-project",
        SD_PROJECT: "production",
        UA_ID: "G-B23BPN2TGE",
        RECAPTCHA_V3_ID: "",
        HCAPTCHA_ID: "cf0b9a27-82e3-42fb-bfec-562f8045e495",
        crashSalt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
        KENO_SALT: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
        BLACKJACK_SALT: "00000000000000000009e93621499e5a63d79a6293609ce52e95e93dd49cb1be",
        BLACKJACK_PUBLIC_KEY: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDE9QKpw5CHZyf+OfcrT5MCeiCRCLVZjDVUSPGzwXdoGAcRi/r9y7T8t4/byXNTLky0h9dUGKBowwN7bt7fgMKvWAtz0Xf4ztfpsEoRHrzRs2r8khPUjihjrz0N+oPQ+ktAh7M95ZnQfgt/hNWFevGRd+SVsGsWhO8VFrBYb7nS8wIDAQAB",
        ISHUMEI_KEY: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1H4eR+xoG7K9NIBf3K6PmfnRsGkaH3aGz9A/XkYhIQdrN6XKBWt6fnxEqDe1Xp27o/VOd02JPNG6JKkJ8pVyjjUXdukNkbKADzxEYmkLn/7O5hpgHMHWiZ6iKTNlDWAQ96viViXa4Bq1Ju1u3DWnH9m+6Sz1zEAQOLH6XnQSS8QIDAQAB",
        WALLET_CONNECT_PROJECT_ID: "7312b2cd1e88e3734b150df3a241c477",
        DESIGN_WIDTH: 430,
        MAX_DESIGN_WIDTH: 645,
        FACEBOOK_KEY: "363146184450773",
        GOOGLE_KEY: "36897522347-eotiq46nvilc5p10653s4mtbs8405sbn.apps.googleusercontent.com",
        disableModule: B,
        specialCurrencys: new Set(["JB", "BB", "CUP2022"]),
        langs: {
            en: ["English", "en-US"],
            "en-IN": ["Indian English", "en-IN"],
            vi: ["Tiếng việt", "vi-VN"],
            id: ["Indonesian", "id-ID"],
            ja: ["日本語", "ja-JP"],
            ko: ["한국어", "ko-KR"],
            fr: ["Français", "fr-FR"],
            es: ["Español", "es-ES"],
            "es-MX": ["Español (México)", "es-MX"],
            fil: ["Filipino", "fil-PH"],
            ar: ["عربى", "ar-SA"],
            hi: ["हिन्दी", "hi-IN"],
            tr: ["Türkçe", "tr-TR"],
            fa: ["فارسی", "fa-IR"],
            pt: ["Português", "pt-BR"],
            ru: ["Руccкий", "ru-RU"],
            de: ["Deutsch", "de-DE"],
            th: ["ภาษาไทย", "th-TH"],
            fi: ["Suomi", "fi-FI"],
            pl: ["Polski", "pl-PL"],
            it: ["Italiano", "it-IT"],
            my: ["မြန်မာ", "my-MM"],
            ur: ["اردو", "ur-PK"],
            uk: ["Українська", "uk-UA"],
            ms: ["Melayu", "ms-MY"],
            bn: ["বাংলা", "bn-BD"],
            mr: ["Marathi", "mr-IN"],
            ta: ["Tamil", "ta-IN"],
            te: ["Telugu", "te-IN"],
            "zh-TW": ["繁體中文", "zh-TW"],
            "zh-CN": ["简体中文", "zh-CN"],
            hy: ["Հայերեն", "hy-AM"]
        },
        localCurrencyConfig: [
            ["USD", "$", "US", !1, "US Dollar"],
            ["BRL", "R$", "BR", !0, "Brazil"],
            ["INR", "₹", "IN", !0, "India"],
            ["EUR", "€", "", !1, "Euro"],
            ["RUB", "₽", "RU", !0, "Russia"],
            ["NGN", "₦", "NG", !1, "Nigeria"],
            ["IDR", "Rp", "ID", !0, "Indonesia"],
            ["BDT", "৳", "BD", !1, "Bangladesh"],
            ["PHP", "₱", "PH", !0, "Philippine"],
            ["VND", "₫", "VN", !0, "Vietnam"],
            ["THB", "฿", "TH", !0, "Thailand"],
            ["KZT", "₸", "KZ", !0, "Kazakhstani tenge"],
            ["MAD", "د.م.", "MA", !1, "Morocco"],
            ["ZAR", "R", "ZA", !1, "South Africa"],
            ["PLN", "zł", "PL", !1, "Poland"],
            ["CUP", "₱", "CU", !1, "Cuba"],
            ["KRW", "₩", "KR", !1, "Korea"],
            ["JPY", "¥", "JP", !1, "Japan"],
            ["GBP", "£", "GB", !1, "United Kingdom"],
            ["HRK", "kn", "HR", !1, "Croatia"],
            ["ISK", "kr", "IS", !1, "Iceland"],
            ["HUF", "Ft", "HU", !1, "Hungary"],
            ["NOK", "kr", "NO", !1, "Norwegian"],
            ["NZD", "$", "CK", !1, "New Zealand Dollar"],
            ["ARS", "$", "AR", !1, "Argentina Peso"],
            ["MXN", "MEX$", "MX", !1, "Mexico Peso"],
            ["AUD", "AU$", "AU", !1, "Australia Dollar"],
            ["TRY", "₺", "TR", !1, "Turkey Lira"],
            ["IRR", "﷼", "IR", !1, "Iran Rial"],
            ["AED", "د.إ", "AE", !1, "UAE-Dirham"],
            ["CAD", "CA$", "CA", !1, "Canada Dollar"],
            ["UAH", "₴", "UA", !1, "Ukraine Hryvnia"],
            ["CZK", "Kč", "CZ", !1, "Czech Republic Koruna"],
            ["LKR", "₨", "LK", !1, "Sri Lanka Rupee"],
            ["ILS", "₪", "IL", !1, "Israel Shekel"],
            ["EGP", "£", "EG", !1, "Egypt Pound"],
            ["PKR", "₨", "PK", !1, "Pakistan Rupee"],
            ["GHS", "¢", "GH", !1, "Ghana Cedi"],
            ["VEF", "Bs", "VE", !1, "Venezuela Bolívar"],
            ["PEN", "S/.", "PE", !1, "Peru Sol"],
            ["RON", "lei", "RO", !1, "Romania Leu"],
            ["BGN", "лв", "BG", !1, "Bulgaria Lev"],
            ["RSD", "Дин.", "RS", !1, "Serbia Dinar"],
            ["CLP", "CLP$", "CL", !1, "Chile Peso"],
            ["KES", "KSh", "KSh", !1, "Kenya Shilling"],
            ["AZN", "₼", "AZ", !1, "Azerbaijani Manat"],
            ["KGS", "сом", "KG", !1, "Kyrgyzstani Som"],
            ["MDL", "L", "MD", !1, "Moldovan Leu"],
            ["MYR", "RM", "MY", !1, "Malaysian Ringgit"],
            ["COP", "Col$", "CO", !1, "Colombian Peso"],
            ["XOF", "CFA", "XOF", !1, "West African CFA franc"],
            ["XAF", "FCFA", "XA", !1, "Central African CFA franc"],
            ["UZS", "soʻm", "UZ", !1, "Uzbekistani Som"],
            ["UGX", "USh", "UG", !1, "Ugandan Shilling"],
            ["TWD", "NT$", "TW", !1, "New Taiwan Dollar"],
            ["CNY", "¥", "CN", !1, "Chinese Yuan"],
            ["AMD", "֏", "AM", !1, "Armenian Dram"]
        ],
        inActive: !1,
        isPWA: window.matchMedia("(display-mode: standalone)").matches,
        isAPP: m()
    }), R.isIos() && setTimeout(() => {
        u({
            isAPP: m()
        })
    }, 1)
}
const L = N(() => D(() =>
    import ("./Application-CExkuTua.js").then(i => i.a5), __vite__mapDeps([0, 1, 2, 3])));

function M() {
    return E(() => {
        a.init && document.getElementById("start-up") ? .remove()
    }), l(h, {
        get when() {
            return a.init
        },
        get children() {
            return l(H, {})
        }
    })
}

function H() {
    return G(), l(L, {})
}
const O = navigator.userAgent.indexOf("Windows");
O !== -1 && document.documentElement.classList.add("win32");
const v = document.getElementById("root");
I(() => l(M, {}), v);