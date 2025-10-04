var le = Object.defineProperty;
var $t = Object.getOwnPropertySymbols;
var ce = Object.prototype.hasOwnProperty,
    ue = Object.prototype.propertyIsEnumerable;
var kt = Math.pow,
    Et = (t, n, e) => n in t ? le(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[n] = e,
    Pt = (t, n) => {
        for (var e in n || (n = {})) ce.call(n, e) && Et(t, e, n[e]);
        if ($t)
            for (var e of $t(n)) ue.call(n, e) && Et(t, e, n[e]);
        return t
    };
var m = (t, n, e) => new Promise((a, r) => {
    var o = l => {
            try {
                i(e.next(l))
            } catch (c) {
                r(c)
            }
        },
        s = l => {
            try {
                i(e.throw(l))
            } catch (c) {
                r(c)
            }
        },
        i = l => l.done ? a(l.value) : Promise.resolve(l.value).then(o, s);
    i((e = e.apply(t, n)).next())
});
import {
    c as P,
    f as D,
    X as de,
    r as _,
    n as x,
    S as q,
    v,
    H as he,
    x as J,
    z as I,
    A as T,
    J as qt,
    m as me,
    D as Lt,
    Y as ge,
    _ as fe,
    b as G,
    k as et,
    I as Tt,
    Z as pe,
    s as V,
    y as rt,
    q as Ot,
    L as ye,
    C as we,
    $ as be,
    a0 as ve,
    G as xe,
    B as Se,
    w as Ce,
    i as Rt,
    o as $e,
    F as Ee,
    a1 as ke,
    a2 as Pe,
    a3 as Le
} from "./manifest-794ca152.js";
import {
    S as Te,
    u as Re
} from "./SA27V5YJ-a6e76733.js";
import {
    t as k
} from "./i18n-3675d599.js";
import {
    c as It
} from "./index-a8d0e4cd.js";
import {
    g as Ie
} from "./amount-63fd0790.js";
import {
    i as At
} from "./game-027ed3d6.js";
import {
    u as Ae
} from "./use-coin-format-7215be04.js";
import {
    u as Ne
} from "./ImgShareSignal-5cb27291.js";
import {
    a as _e
} from "./router-acbf143e.js";
import "./_commonjsHelpers-0f403cef.js";
import "./game-ab00b977.js";
import "./user-dca4827e.js";
import "./utils-65805dbc.js";
import "./config-b7b855c3.js";
const De = "/modules/games2/assets/img_share_dark-ec358a22.png",
    Fe = "/modules/games2/assets/img_share_light-647de068.png",
    He = "/modules/games2/assets/logo_black-5bf0645b.png",
    je = "/modules/games2/assets/logo_white-a7011124.png",
    Nt = "/modules/games2/assets/share_bg-c16bf5e4.png",
    Me = "/modules/games2/assets/icon_share-73517185.png",
    Ue = "/modules/games2/assets/share_dowload-5953191d.svg",
    Ve = (() => {
        let t = 0;
        return () => (t += 1, `u${`0000${(Math.random()*kt(36,4)|0).toString(36)}`.slice(-4)}${t}`)
    })();

function L(t) {
    const n = [];
    for (let e = 0, a = t.length; e < a; e++) n.push(t[e]);
    return n
}
let U = null;

function Bt(t = {}) {
    return U || (t.includeStyleProperties ? (U = t.includeStyleProperties, U) : (U = L(window.getComputedStyle(document.documentElement)), U))
}

function Q(t, n) {
    const e = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(n);
    return e ? parseFloat(e.replace("px", "")) : 0
}

function zt(t, n = {}) {
    return {
        width: n.width || function(e) {
            const a = Q(e, "border-left-width"),
                r = Q(e, "border-right-width");
            return e.clientWidth + a + r
        }(t),
        height: n.height || function(e) {
            const a = Q(e, "border-top-width"),
                r = Q(e, "border-bottom-width");
            return e.clientHeight + a + r
        }(t)
    }
}
const $ = 16384;

function Z(t) {
    return new Promise((n, e) => {
        const a = new Image;
        a.onload = () => {
            a.decode().then(() => {
                requestAnimationFrame(() => n(a))
            })
        }, a.onerror = e, a.crossOrigin = "anonymous", a.decoding = "async", a.src = t
    })
}

function qe(t, n, e) {
    return m(this, null, function*() {
        const a = "http://www.w3.org/2000/svg",
            r = document.createElementNS(a, "svg"),
            o = document.createElementNS(a, "foreignObject");
        return r.setAttribute("width", `${n}`), r.setAttribute("height", `${e}`), r.setAttribute("viewBox", `0 0 ${n} ${e}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), r.appendChild(o), o.appendChild(t),
            function(s) {
                return m(this, null, function*() {
                    return Promise.resolve().then(() => new XMLSerializer().serializeToString(s)).then(encodeURIComponent).then(i => `data:image/svg+xml;charset=utf-8,${i}`)
                })
            }(r)
    })
}
const S = (t, n) => {
    if (t instanceof n) return !0;
    const e = Object.getPrototypeOf(t);
    return e !== null && (e.constructor.name === n.name || S(e, n))
};

function Oe(t, n, e, a) {
    const r = `.${t}:${n}`,
        o = e.cssText ? function(s) {
            const i = s.getPropertyValue("content");
            return `${s.cssText} content: '${i.replace(/'|"/g,"")}';`
        }(e) : function(s, i) {
            return Bt(i).map(l => `${l}: ${s.getPropertyValue(l)}${s.getPropertyPriority(l)?" !important":""};`).join(" ")
        }(e, a);
    return document.createTextNode(`${r}{${o}}`)
}

function _t(t, n, e, a) {
    const r = window.getComputedStyle(t, e),
        o = r.getPropertyValue("content");
    if (o === "" || o === "none") return;
    const s = Ve();
    try {
        n.className = `${n.className} ${s}`
    } catch (l) {
        return
    }
    const i = document.createElement("style");
    i.appendChild(Oe(s, e, r, a)), n.appendChild(i)
}
const Dt = "application/font-woff",
    Ft = "image/jpeg",
    Be = {
        woff: Dt,
        woff2: Dt,
        ttf: "application/font-truetype",
        eot: "application/vnd.ms-fontobject",
        png: "image/png",
        jpg: Ft,
        jpeg: Ft,
        gif: "image/gif",
        tiff: "image/tiff",
        svg: "image/svg+xml",
        webp: "image/webp"
    };

function st(t) {
    const n = function(e) {
        const a = /\.([^./]*?)$/g.exec(e);
        return a ? a[1] : ""
    }(t).toLowerCase();
    return Be[n] || ""
}

function at(t) {
    return t.search(/^(data:)/) !== -1
}

function Wt(t, n) {
    return `data:${n};base64,${t}`
}

function Gt(t, n, e) {
    return m(this, null, function*() {
        const a = yield fetch(t, n);
        if (a.status === 404) throw new Error(`Resource "${a.url}" not found`);
        const r = yield a.blob();
        return new Promise((o, s) => {
            const i = new FileReader;
            i.onerror = s, i.onloadend = () => {
                try {
                    o(e({
                        res: a,
                        result: i.result
                    }))
                } catch (l) {
                    s(l)
                }
            }, i.readAsDataURL(r)
        })
    })
}
const nt = {};

function it(t, n, e) {
    return m(this, null, function*() {
        const a = function(o, s, i) {
            let l = o.replace(/\?.*/, "");
            return i && (l = o), /ttf|otf|eot|woff2?/i.test(l) && (l = l.replace(/.*\//, "")), s ? `[${s}]${l}` : l
        }(t, n, e.includeQueryParams);
        if (nt[a] != null) return nt[a];
        let r;
        e.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + new Date().getTime());
        try {
            const o = yield Gt(t, e.fetchRequestInit, ({
                res: s,
                result: i
            }) => (n || (n = s.headers.get("Content-Type") || ""), function(l) {
                return l.split(/,/)[1]
            }(i)));
            r = Wt(o, n)
        } catch (o) {
            r = e.imagePlaceholder || "";
            let s = `Failed to fetch resource: ${t}`;
            o && (s = typeof o == "string" ? o : o.message)
        }
        return nt[a] = r, r
    })
}

function ze(t, n) {
    return m(this, null, function*() {
        return S(t, HTMLCanvasElement) ? function(e) {
            return m(this, null, function*() {
                const a = e.toDataURL();
                return a === "data:," ? e.cloneNode(!1) : Z(a)
            })
        }(t) : S(t, HTMLVideoElement) ? function(e, a) {
            return m(this, null, function*() {
                if (e.currentSrc) {
                    const s = document.createElement("canvas"),
                        i = s.getContext("2d");
                    return s.width = e.clientWidth, s.height = e.clientHeight, i == null || i.drawImage(e, 0, 0, s.width, s.height), Z(s.toDataURL())
                }
                const r = e.poster,
                    o = st(r);
                return Z(yield it(r, o, a))
            })
        }(t, n) : S(t, HTMLIFrameElement) ? function(e, a) {
            return m(this, null, function*() {
                var r;
                try {
                    if (!((r = e == null ? void 0 : e.contentDocument) === null || r === void 0) && r.body) return yield K(e.contentDocument.body, a, !0)
                } catch (o) {}
                return e.cloneNode(!1)
            })
        }(t, n) : t.cloneNode(Qt(t))
    })
}
const We = t => t.tagName != null && t.tagName.toUpperCase() === "SLOT",
    Qt = t => t.tagName != null && t.tagName.toUpperCase() === "SVG";

function Ge(t, n, e) {
    return S(n, Element) && (function(a, r, o) {
        const s = r.style;
        if (!s) return;
        const i = window.getComputedStyle(a);
        i.cssText ? (s.cssText = i.cssText, s.transformOrigin = i.transformOrigin) : Bt(o).forEach(l => {
            let c = i.getPropertyValue(l);
            l === "font-size" && c.endsWith("px") && (c = `${Math.floor(parseFloat(c.substring(0,c.length-2)))-.1}px`), S(a, HTMLIFrameElement) && l === "display" && c === "inline" && (c = "block"), l === "d" && r.getAttribute("d") && (c = `path(${r.getAttribute("d")})`), s.setProperty(l, c, i.getPropertyPriority(l))
        })
    }(t, n, e), function(a, r, o) {
        _t(a, r, ":before", o), _t(a, r, ":after", o)
    }(t, n, e), function(a, r) {
        S(a, HTMLTextAreaElement) && (r.innerHTML = a.value), S(a, HTMLInputElement) && r.setAttribute("value", a.value)
    }(t, n), function(a, r) {
        if (S(a, HTMLSelectElement)) {
            const o = r,
                s = Array.from(o.children).find(i => a.value === i.getAttribute("value"));
            s && s.setAttribute("selected", "")
        }
    }(t, n)), n
}

function K(t, n, e) {
    return m(this, null, function*() {
        return e || !n.filter || n.filter(t) ? Promise.resolve(t).then(a => ze(a, n)).then(a => function(r, o, s) {
            return m(this, null, function*() {
                var i, l;
                if (Qt(o)) return o;
                let c = [];
                return c = We(r) && r.assignedNodes ? L(r.assignedNodes()) : S(r, HTMLIFrameElement) && (!((i = r.contentDocument) === null || i === void 0) && i.body) ? L(r.contentDocument.body.childNodes) : L(((l = r.shadowRoot) !== null && l !== void 0 ? l : r).childNodes), c.length === 0 || S(r, HTMLVideoElement) || (yield c.reduce((d, h) => d.then(() => K(h, s)).then(u => {
                    u && o.appendChild(u)
                }), Promise.resolve())), o
            })
        }(t, a, n)).then(a => Ge(t, a, n)).then(a => function(r, o) {
            return m(this, null, function*() {
                const s = r.querySelectorAll ? r.querySelectorAll("use") : [];
                if (s.length === 0) return r;
                const i = {};
                for (let c = 0; c < s.length; c++) {
                    const d = s[c].getAttribute("xlink:href");
                    if (d) {
                        const h = r.querySelector(d),
                            u = document.querySelector(d);
                        h || !u || i[d] || (i[d] = yield K(u, o, !0))
                    }
                }
                const l = Object.values(i);
                if (l.length) {
                    const c = "http://www.w3.org/1999/xhtml",
                        d = document.createElementNS(c, "svg");
                    d.setAttribute("xmlns", c), d.style.position = "absolute", d.style.width = "0", d.style.height = "0", d.style.overflow = "hidden", d.style.display = "none";
                    const h = document.createElementNS(c, "defs");
                    d.appendChild(h);
                    for (let u = 0; u < l.length; u++) h.appendChild(l[u]);
                    r.appendChild(d)
                }
                return r
            })
        }(a, n)) : null
    })
}
const Xt = /url\((['"]?)([^'"]+?)\1\)/g,
    Qe = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    Xe = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

function Ze(t, n, e, a, r) {
    return m(this, null, function*() {
        try {
            const o = e ? function(l, c) {
                    if (l.match(/^[a-z]+:\/\//i)) return l;
                    if (l.match(/^\/\//)) return window.location.protocol + l;
                    if (l.match(/^[a-z]+:/i)) return l;
                    const d = document.implementation.createHTMLDocument(),
                        h = d.createElement("base"),
                        u = d.createElement("a");
                    return d.head.appendChild(h), d.body.appendChild(u), c && (h.href = c), u.href = l, u.href
                }(n, e) : n,
                s = st(n);
            let i;
            return r ? i = Wt(yield r(o), s) : i = yield it(o, s, a), t.replace(function(l) {
                const c = l.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                return new RegExp(`(url\\(['"]?)(${c})(['"]?\\))`, "g")
            }(n), `$1${i}$3`)
        } catch (o) {}
        return t
    })
}

function Zt(t) {
    return t.search(Xt) !== -1
}

function Jt(t, n, e) {
    return m(this, null, function*() {
        if (!Zt(t)) return t;
        const a = function(o, {
            preferredFontFormat: s
        }) {
            return s ? o.replace(Xe, i => {
                for (;;) {
                    const [l, , c] = Qe.exec(i) || [];
                    if (!c) return "";
                    if (c === s) return `src: ${l};`
                }
            }) : o
        }(t, e);
        return function(o) {
            const s = [];
            return o.replace(Xt, (i, l, c) => (s.push(c), i)), s.filter(i => !at(i))
        }(a).reduce((o, s) => o.then(i => Ze(i, s, n, e)), Promise.resolve(a))
    })
}

function N(t, n, e) {
    return m(this, null, function*() {
        var a;
        const r = (a = n.style) === null || a === void 0 ? void 0 : a.getPropertyValue(t);
        if (r) {
            const o = yield Jt(r, null, e);
            return n.style.setProperty(t, o, n.style.getPropertyPriority(t)), !0
        }
        return !1
    })
}

function Kt(t, n) {
    return m(this, null, function*() {
        S(t, Element) && (yield function(e, a) {
            return m(this, null, function*() {
                (yield N("background", e, a)) || (yield N("background-image", e, a)), (yield N("mask", e, a)) || (yield N("-webkit-mask", e, a)) || (yield N("mask-image", e, a)) || (yield N("-webkit-mask-image", e, a))
            })
        }(t, n), yield function(e, a) {
            return m(this, null, function*() {
                const r = S(e, HTMLImageElement);
                if ((!r || at(e.src)) && (!S(e, SVGImageElement) || at(e.href.baseVal))) return;
                const o = r ? e.src : e.href.baseVal,
                    s = yield it(o, st(o), a);
                yield new Promise((i, l) => {
                    e.onload = i, e.onerror = a.onImageErrorHandler ? (...d) => {
                        try {
                            i(a.onImageErrorHandler(...d))
                        } catch (h) {
                            l(h)
                        }
                    } : l;
                    const c = e;
                    c.decode && (c.decode = i), c.loading === "lazy" && (c.loading = "eager"), r ? (e.srcset = "", e.src = s) : e.href.baseVal = s
                })
            })
        }(t, n), yield function(e, a) {
            return m(this, null, function*() {
                const r = L(e.childNodes).map(o => Kt(o, a));
                yield Promise.all(r).then(() => e)
            })
        }(t, n))
    })
}
const Ht = {};

function jt(t) {
    return m(this, null, function*() {
        let n = Ht[t];
        if (n != null) return n;
        const e = yield fetch(t);
        return n = {
            url: t,
            cssText: yield e.text()
        }, Ht[t] = n, n
    })
}

function Mt(t, n) {
    return m(this, null, function*() {
        let e = t.cssText;
        const a = /url\(["']?([^"')]+)["']?\)/g,
            r = (e.match(/url\([^)]+\)/g) || []).map(o => m(this, null, function*() {
                let s = o.replace(a, "$1");
                return s.startsWith("https://") || (s = new URL(s, t.url).href), Gt(s, n.fetchRequestInit, ({
                    result: i
                }) => (e = e.replace(o, `url(${i})`), [o, i]))
            }));
        return Promise.all(r).then(() => e)
    })
}

function Ut(t) {
    if (t == null) return [];
    const n = [];
    let e = t.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
    const a = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    for (;;) {
        const s = a.exec(e);
        if (s === null) break;
        n.push(s[0])
    }
    e = e.replace(a, "");
    const r = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        o = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
    for (;;) {
        let s = r.exec(e);
        if (s === null) {
            if (s = o.exec(e), s === null) break;
            r.lastIndex = o.lastIndex
        } else o.lastIndex = r.lastIndex;
        n.push(s[0])
    }
    return n
}

function Je(t, n) {
    return m(this, null, function*() {
        if (t.ownerDocument == null) throw new Error("Provided element is not within a Document");
        const e = L(t.ownerDocument.styleSheets),
            a = yield function(r, o) {
                return m(this, null, function*() {
                    const s = [],
                        i = [];
                    return r.forEach(l => {
                        if ("cssRules" in l) try {
                            L(l.cssRules || []).forEach((c, d) => {
                                if (c.type === CSSRule.IMPORT_RULE) {
                                    let h = d + 1;
                                    const u = jt(c.href).then(y => Mt(y, o)).then(y => Ut(y).forEach(p => {
                                        try {
                                            l.insertRule(p, p.startsWith("@import") ? h += 1 : l.cssRules.length)
                                        } catch (E) {}
                                    })).catch(y => {});
                                    i.push(u)
                                }
                            })
                        } catch (c) {
                            const d = r.find(h => h.href == null) || document.styleSheets[0];
                            l.href != null && i.push(jt(l.href).then(h => Mt(h, o)).then(h => Ut(h).forEach(u => {
                                d.insertRule(u, d.cssRules.length)
                            })).catch(h => {}))
                        }
                    }), Promise.all(i).then(() => (r.forEach(l => {
                        if ("cssRules" in l) try {
                            L(l.cssRules || []).forEach(c => {
                                s.push(c)
                            })
                        } catch (c) {}
                    }), s))
                })
            }(e, n);
        return function(r) {
            return r.filter(o => o.type === CSSRule.FONT_FACE_RULE).filter(o => Zt(o.style.getPropertyValue("src")))
        }(a)
    })
}

function Vt(t) {
    return t.trim().replace(/["']/g, "")
}

function Ke(t, n) {
    return m(this, null, function*() {
        const e = yield Je(t, n), a = function(r) {
            const o = new Set;
            return function s(i) {
                (i.style.fontFamily || getComputedStyle(i).fontFamily).split(",").forEach(l => {
                    o.add(Vt(l))
                }), Array.from(i.children).forEach(l => {
                    l instanceof HTMLElement && s(l)
                })
            }(r), o
        }(t);
        return (yield Promise.all(e.filter(r => a.has(Vt(r.style.fontFamily))).map(r => {
            const o = r.parentStyleSheet ? r.parentStyleSheet.href : null;
            return Jt(r.cssText, o, n)
        }))).join(`
`)
    })
}

function Ye(e) {
    return m(this, arguments, function*(t, n = {}) {
        const {
            width: a,
            height: r
        } = zt(t, n), o = yield K(t, n, !0);
        return yield function(s, i) {
            return m(this, null, function*() {
                const l = i.fontEmbedCSS != null ? i.fontEmbedCSS : i.skipFonts ? null : yield Ke(s, i);
                if (l) {
                    const c = document.createElement("style"),
                        d = document.createTextNode(l);
                    c.appendChild(d), s.firstChild ? s.insertBefore(c, s.firstChild) : s.appendChild(c)
                }
            })
        }(o, n), yield Kt(o, n),
            function(s, i) {
                const {
                    style: l
                } = s;
                i.backgroundColor && (l.backgroundColor = i.backgroundColor), i.width && (l.width = `${i.width}px`), i.height && (l.height = `${i.height}px`);
                const c = i.style;
                c != null && Object.keys(c).forEach(d => {
                    l[d] = c[d]
                })
            }(o, n), yield qe(o, a, r)
    })
}

function Yt(e) {
    return m(this, arguments, function*(t, n = {}) {
        const {
            width: a,
            height: r
        } = zt(t, n), o = yield Ye(t, n), s = yield Z(o), i = document.createElement("canvas"), l = i.getContext("2d"), c = n.pixelRatio || function() {
            let u, y;
            try {
                y = process
            } catch (E) {}
            const p = y && y.env ? y.env.devicePixelRatio : null;
            return p && (u = parseInt(p, 10), Number.isNaN(u) && (u = 1)), u || window.devicePixelRatio || 1
        }(), d = n.canvasWidth || a, h = n.canvasHeight || r;
        return i.width = d * c, i.height = h * c, n.skipAutoScale || function(u) {
            (u.width > $ || u.height > $) && (u.width > $ && u.height > $ ? u.width > u.height ? (u.height *= $ / u.width, u.width = $) : (u.width *= $ / u.height, u.height = $) : u.width > $ ? (u.height *= $ / u.width, u.width = $) : (u.width *= $ / u.height, u.height = $))
        }(i), i.style.width = `${d}`, i.style.height = `${h}`, n.backgroundColor && (l.fillStyle = n.backgroundColor, l.fillRect(0, 0, i.width, i.height)), l.drawImage(s, 0, 0, i.width, i.height), i
    })
}

function tn(e) {
    return m(this, arguments, function*(t, n = {}) {
        const a = yield Yt(t, n);
        return yield function(o, s = {}) {
            return o.toBlob ? new Promise(i => {
                o.toBlob(i, s.type ? s.type : "image/png", s.quality ? s.quality : 1)
            }) : new Promise(i => {
                const l = window.atob(o.toDataURL(s.type ? s.type : void 0, s.quality ? s.quality : void 0).split(",")[1]),
                    c = l.length,
                    d = new Uint8Array(c);
                for (let h = 0; h < c; h += 1) d[h] = l.charCodeAt(h);
                i(new Blob([d], {
                    type: s.type ? s.type : "image/png"
                }))
            })
        }(a)
    })
}
var en = T('<div class="w-full grid grid-cols-6 gap-x-2 gap-y-2 pb-8">'),
    nn = T('<a target=_blank rel="noopener noreferrer"class="flex flex-col gap-y-1 justify-center items-center mt-1"><img class="w-8 h-8"><span class=text-xs>');

function rn(t) {
    const [n, e] = P(null);
    return D(() => {
        m(this, null, function*() {
            var a, r;
            if (((a = t == null ? void 0 : t.imgUrl) == null ? void 0 : a.length) > 0) {
                const o = yield de({
                    title: k("Big Win"),
                    content: `${(r=_)==null?void 0:r.imgHost}${t==null?void 0:t.imgUrl} ` + k("Big win just dropped! Feeling unstoppable today!"),
                    isGame: !1
                });
                e(o)
            }
        })
    }), x(q, {
        get when() {
            return n()
        },
        get children() {
            var a = en();
            return v(a, x(he, {
                get each() {
                    return n()
                },
                children: (r, o) => x(q, {
                    get when() {
                        return r.url
                    },
                    get children() {
                        var s = nn(),
                            i = s.firstChild,
                            l = i.nextSibling;
                        return v(l, () => r.name), J(c => {
                            var d = r.url,
                                h = r.icon;
                            return d !== c.e && I(s, "href", c.e = d), h !== c.t && I(i, "src", c.t = h), c
                        }, {
                            e: void 0,
                            t: void 0
                        }), s
                    }
                })
            })), a
        }
    })
}
var an = T("<div><span>: </span><span class=text-brand></span><br><span class=text-secondary></span><br><span class=text-brand>Sign up & get up to $500 bonus"),
    sn = T('<div><div><div class="mb-2 flex items-center justify-between"><img class=h-5><span class=text-secondary>: </span></div><div class="mb-8 flex items-center justify-between"><span class="flex items-center"><img class="rounded-full h-5 mr-1"><span></span></span><span><img class=h-5></span></div><div class="font-extrabold mb-2"><span class=text-3xl> </span><br><span class=text-2xl> Mega Casino Win</span></div><div class=mb-20><div class="flex items-center mb-2"><span class=text-secondary>:&nbsp;</span><span>x</span></div><span class=text-secondary></span><br><span class="flex items-center"><span class="text-brand text-xl font-extrabold "></span></span></div><div class="flex flex-row mb-0.5">'),
    on = T('<div class="flex justify-center items-center cursor-pointer w-1/2 mx-auto"><img>'),
    ln = T('<div class="flex h-8 items-center overflow-hidden bg-layer4 pl-4 absolute left-0 right-0 bottom-0"><span> '),
    cn = T('<div class="flex items-center justify-center w-[70%] text-center h-full rounded-t-xl font-extrabold text-lg pt-5">');

function un(t) {
    var ot, lt, ct;
    let n;
    const {
        findToken: e
    } = Re(), a = me(() => {
        var g;
        return e(((g = t == null ? void 0 : t.myLog) == null ? void 0 : g.currencyName) || "")
    }), [r, o] = P(""), [s, i] = P(""), {
        coinFormat: l
    } = Ae(), [c, d] = P(!1), [h, u] = P(""), [y, p] = P(!1), [E, O] = P(!1), B = l(new Lt(new Lt(((ot = t == null ? void 0 : t.myLog) == null ? void 0 : ot.winAmount) || 0).sub(((lt = t == null ? void 0 : t.myLog) == null ? void 0 : lt.betAmount) || 0)), ((ct = t == null ? void 0 : t.myLog) == null ? void 0 : ct.currencyName) || ""), z = ge(() => fe(() =>
        import ("./QRcode-031771db.js"), ["assets/QRcode-031771db.js", "assets/manifest-794ca152.js"])), te = () => {
        n && (d(!0), function(f) {
            return m(this, arguments, function*(g, b = {}) {
                return (yield Yt(g, b)).toDataURL()
            })
        }(n, {
            pixelRatio: 3,
            skipFonts: !!At()
        }).then(g => {
            const b = document.createElement("a");
            b.download = `bc_share_${new Date().getTime()}.png`, b.href = g, b.click()
        }).catch(g => {
            Se.warning("图片下载失败", g)
        }), d(!1))
    }, ee = g => {
        var b, f;
        O(!!g), g ? localStorage.setItem(`${(b=t==null?void 0:t.myLog)==null?void 0:b.userId}`, `${Date.now()}`) : localStorage.removeItem(`${(f=t==null?void 0:t.myLog)==null?void 0:f.userId}`)
    };
    return D(() => m(this, null, function*() {
        var g, b;
        if (G.login && G.appChannelId !== void 0 && !(_.isDev || _.isDevHost ? G.appChannelId === 52 : G.appChannelId === 29)) {
            const f = yield(() => m(this, null, function*() {
                return (yield et().get("agent/invitation/code/custom/")) || {}
            }))();
            o((g = f == null ? void 0 : f.invitationCode) != null ? g : ""), i((b = f == null ? void 0 : f.invitationUrl) != null ? b : "")
        }
    })), D(() => m(this, null, function*() {
        y() && tn(n, {
            skipFonts: !!At()
        }).then(g => m(this, null, function*() {
            if (!g) throw new Error("Failed to convert HTML to Blob");
            const b = new FormData;
            b.append("file", g);
            try {
                const f = "/filehub/upload-image/",
                    {
                        path: C,
                        sign: W,
                        uri: Y
                    } = yield et().post(f, b, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }), {
                        path: F
                    } = yield et().post("/user/file/set/", {
                        path: C,
                        sign: W
                    });
                u(F)
            } catch (f) {}
        })).catch(g => {})
    })), x(g => x(xe, {
        get class() {
            return g.class
        },
        get title() {
            return g.title
        },
        get children() {
            return g.children
        }
    }), {
        get title() {
            return g = cn(), v(g, () => k("Download your exclusive poster and share it on social media!")), g;
            var g
        },
        get class() {
            return It("imgshare !bg-layer2 dark:!bg-layer2 imgshare-pop")
        },
        get children() {
            return [(() => {
                var f = sn(),
                    C = f.firstChild,
                    W = C.firstChild,
                    Y = W.firstChild,
                    F = Y.nextSibling,
                    ne = F.firstChild,
                    ut = W.nextSibling,
                    dt = ut.firstChild,
                    ht = dt.firstChild,
                    re = ht.nextSibling,
                    ae = dt.nextSibling.firstChild,
                    mt = ut.nextSibling,
                    gt = mt.firstChild;
                gt.firstChild;
                var ft = mt.nextSibling,
                    pt = ft.firstChild,
                    tt = pt.firstChild,
                    se = tt.firstChild,
                    yt = tt.nextSibling,
                    ie = yt.firstChild,
                    wt = pt.nextSibling,
                    bt = wt.nextSibling.nextSibling,
                    vt = bt.firstChild,
                    oe = ft.nextSibling;
                return typeof n == "function" ? Ce(n, C) : n = C, `url(${Nt})` != null ? C.style.setProperty("background-image", `url(${Nt})`) : C.style.removeProperty("background-image"), C.style.setProperty("background-repeat", "no-repeat"), C.style.setProperty("background-position", "-4rem -6rem"), C.style.setProperty("background-size", "38rem auto"), v(F, () => k("Share at"), ne), v(F, Ie, null), v(re, () => {
                    var w;
                    return Tt.userName(((w = t == null ? void 0 : t.myLog) == null ? void 0 : w.nickName) || "")
                }), I(ae, "src", Me), v(gt, () => t == null ? void 0 : t.gameName, null), v(tt, () => k("Payout"), se), v(yt, () => {
                    var w;
                    return ((w = t == null ? void 0 : t.myLog) == null ? void 0 : w.odds) || 0
                }, ie), v(wt, () => k("Profits")), v(bt, x(Te, {
                    class: "bg-amber-300	rounded-full mr-0.5",
                    imgClass: "w-5 h-5",
                    get token() {
                        return a()
                    }
                }), vt), v(vt, B), v(oe, x(q, {
                    get when() {
                        var w;
                        return ((w = s()) == null ? void 0 : w.length) > 0
                    },
                    get children() {
                        return [x(pe, {
                            get children() {
                                return x(z, {
                                    get url() {
                                        return s()
                                    },
                                    onLoad: () => {
                                        p(!0)
                                    }
                                })
                            }
                        }), (w = an(), R = w.firstChild, H = R.firstChild, A = R.nextSibling, j = A.nextSibling.nextSibling, v(R, () => k("Invitation code"), H), v(A, () => {
                            var M;
                            return (M = r()) != null ? M : ""
                        }), v(j, () => k("Scan the QR code to join now")), w)];
                        var w, R, H, A, j
                    }
                })), J(w => {
                    var M, xt, St, Ct;
                    var R = It("text-xs  relative  sm:mt-4 "),
                        H = "pt-4 p-3 rounded-xl bg-layer2 border " + ((M = V) != null && M.darken ? "border-white_alpha20" : "border-black_alpha20"),
                        A = (xt = V) != null && xt.darken ? He : je,
                        j = Tt.avatar((Ct = (St = t == null ? void 0 : t.myLog) == null ? void 0 : St.userId) != null ? Ct : 0, "s");
                    return R !== w.e && rt(f, w.e = R), H !== w.t && rt(C, w.t = H), A !== w.a && I(Y, "src", w.a = A), j !== w.o && I(ht, "src", w.o = j), w
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0
                }), f
            })(), x(q, {
                get when() {
                    return Ot(() => !!y())() && !c()
                },
                get fallback() {
                    return x(ye, {
                        class: "mx-auto my-1"
                    })
                },
                get children() {
                    var f = on(),
                        C = f.firstChild;
                    return f.$$click = () => te(), I(C, "src", Ue), v(f, x(we, {
                        class: "text-brand",
                        get children() {
                            return k("Download")
                        }
                    }), null), f
                }
            }), x(rn, {
                get imgUrl() {
                    return h()
                },
                get host() {
                    var f;
                    return (f = _) == null ? void 0 : f.host
                }
            }), (g = ln(), b = g.firstChild, b.firstChild, v(g, x(be, {
                get value() {
                    return E()
                },
                onChange: ee
            }), b), v(b, () => k("Don’t show this again for 30 days"), null), J(f => ve(g, _.mobile ? void 0 : {
                "border-bottom-left-radius": "0.75rem",
                "border-bottom-right-radius": "0.75rem"
            }, f)), g)];
            var g, b
        }
    })
}
qt(["click"]);
var dn = T("<div><img class=button>");

function hn() {
    const t = _e(),
        [n, e] = P(!1),
        a = ["/", `/${V.lang}`, `/${V.lang}/`],
        r = [],
        [o, s] = P();
    let i;
    const l = () => {
            i && clearInterval(i), e(!1)
        },
        c = () => {
            var p, E;
            const u = localStorage.getItem(`${(E=(p=o())==null?void 0:p.myLog)==null?void 0:E.userId}`);
            if (!u) return !0;
            const y = Number(u);
            return Date.now() - y > 2592e6
        },
        d = () => a.includes(t.pathname),
        h = () => {
            var u, y;
            return r.includes((y = (u = o()) == null ? void 0 : u.myLog) == null ? void 0 : y.distributeId)
        };
    return D(() => {
        if (d() && o() && !h() && c()) {
            l(), e(!0), Rt.emit("sensorsTrack", {
                event: "game_reward_share",
                type: "show"
            });
            let u = 300;
            i = setInterval(() => {
                u === 0 && l(), u--
            }, 1e3)
        }
    }), D(() => {
        var y, p;
        const u = Ne();
        u && ((y = u == null ? void 0 : u.myLog) != null && y.odds) && ((p = u == null ? void 0 : u.myLog) == null ? void 0 : p.odds) >= 5 && s(Pt({}, u))
    }), $e(() => {
        l()
    }), x(q, {
        get when() {
            return Ot(() => !(!d() || !o() || h() || !c()))() && n()
        },
        get children() {
            var u = dn(),
                y = u.firstChild;
            return y.$$click = () => (() => {
                var E;
                const p = o();
                p && (Rt.emit("sensorsTrack", {
                    event: "game_reward_share",
                    type: "click"
                }), Ee.push(() => un(p))), l(), r.push(((E = p == null ? void 0 : p.myLog) == null ? void 0 : E.distributeId) || 0)
            })(), J(p => {
                var B, z;
                var E = `fixed flex flex-col ${(B=_)!=null&&B.mobile?"right-3 bottom-18":"right-12 bottom-3"} z-1000 gap-y-3 !mb-0`,
                    O = (z = V) != null && z.darken ? De : Fe;
                return E !== p.e && rt(u, p.e = E), O !== p.t && I(y, "src", p.t = O), p
            }, {
                e: void 0,
                t: void 0
            }), u
        }
    })
}
let X;
qt(["click"]);

function Ln() {
    D(() => {
        const t = ke();
        Pe(t, () => {
            Le(() => x(hn, {}), X || (X = document.createElement("div"), document.body.appendChild(X), X))
        })
    })
}
export {
    Ln as
    default
};