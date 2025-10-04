var _e = Object.defineProperty,
    Ge = Object.defineProperties;
var Ue = Object.getOwnPropertyDescriptors;
var he = Object.getOwnPropertySymbols;
var Xe = Object.prototype.hasOwnProperty,
    Ye = Object.prototype.propertyIsEnumerable;
var Q = (r, t, e) => t in r ? _e(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    j = (r, t) => {
        for (var e in t || (t = {})) Xe.call(t, e) && Q(r, e, t[e]);
        if (he)
            for (var e of he(t)) Ye.call(t, e) && Q(r, e, t[e]);
        return r
    },
    $ = (r, t) => Ge(r, Ue(t));
var W = (r, t, e) => (Q(r, typeof t != "symbol" ? t + "" : t, e), e);
import {
    a6 as y,
    a4 as Ie,
    a7 as f,
    A as G,
    m as _,
    f as C,
    ax as U,
    n as m,
    a5 as re,
    o as A,
    q as ae,
    a8 as ne,
    c as P,
    a9 as ie,
    S as Ze,
    W as te,
    w as Je,
    x as Qe,
    a0 as et
} from "./manifest-794ca152.js";
import {
    c as M
} from "./utils-65805dbc.js";
import {
    c as De,
    m as tt,
    B as rt
} from "./SA27V5YJ-a6e76733.js";
import {
    v as Se,
    m as I,
    P as F,
    h as L,
    f as k,
    b as se,
    d as K,
    _ as Ne,
    q as le
} from "./index-a8d0e4cd.js";
import {
    $ as Ce,
    a as p,
    u as at
} from "./LR7LBJN3-58796c8d.js";
import {
    c as Fe
} from "./FN6EICGO-462990d9.js";
const nt = new RegExp("^.*\\(.*\\).*$"),
    it = ["latn", "arab", "hanidec"];
class Re {
    parse(t) {
        return ee(this.locale, this.options, t).parse(t)
    }
    isValidPartialNumber(t, e, n) {
        return ee(this.locale, this.options, t).isValidPartialNumber(t, e, n)
    }
    getNumberingSystem(t) {
        return ee(this.locale, this.options, t).options.numberingSystem
    }
    constructor(t, e = {}) {
        this.locale = t, this.options = e
    }
}
const ye = new Map;

function ee(r, t, e) {
    let n = xe(r, t);
    if (!r.includes("-nu-") && !n.isValidPartialNumber(e)) {
        for (let a of it)
            if (a !== n.options.numberingSystem) {
                let o = xe(r + (r.includes("-u-") ? "-nu-" : "-u-nu-") + a, t);
                if (o.isValidPartialNumber(e)) return o
            }
    }
    return n
}

function xe(r, t) {
    let e = r + (t ? Object.entries(t).sort((a, o) => a[0] < o[0] ? -1 : 1).join() : ""),
        n = ye.get(e);
    return n || (n = new st(r, t), ye.set(e, n)), n
}
class st {
    parse(t) {
        let e = this.sanitize(t);
        if (this.symbols.group && (e = H(e, this.symbols.group, "")), this.symbols.decimal && (e = e.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (e = e.replace(this.symbols.minusSign, "-")), e = e.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
            let i = e.indexOf("-");
            e = e.replace("-", "");
            let l = e.indexOf(".");
            l === -1 && (l = e.length), e = e.replace(".", ""), e = l - 2 == 0 ? `0.${e}` : l - 2 == -1 ? `0.0${e}` : l - 2 == -2 ? "0.00" : `${e.slice(0,l-2)}.${e.slice(l-2)}`, i > -1 && (e = `-${e}`)
        }
        let n = e ? +e : NaN;
        if (isNaN(n)) return NaN;
        if (this.options.style === "percent") {
            var a, o;
            let i = $(j({}, this.options), {
                style: "decimal",
                minimumFractionDigits: Math.min(((a = this.options.minimumFractionDigits) !== null && a !== void 0 ? a : 0) + 2, 20),
                maximumFractionDigits: Math.min(((o = this.options.maximumFractionDigits) !== null && o !== void 0 ? o : 0) + 2, 20)
            });
            return new Re(this.locale, i).parse(new Ce(this.locale, i).format(n))
        }
        return this.options.currencySign === "accounting" && nt.test(t) && (n *= -1), n
    }
    sanitize(t) {
        return t = t.replace(this.symbols.literals, ""), this.symbols.minusSign && (t = t.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (t = (t = t.replace(",", this.symbols.decimal)).replace(String.fromCharCode(1548), this.symbols.decimal)), this.symbols.group && (t = H(t, ".", this.symbols.group))), this.options.locale === "fr-FR" && (t = H(t, ".", String.fromCharCode(8239))), t
    }
    isValidPartialNumber(t, e = -1 / 0, n = 1 / 0) {
        return t = this.sanitize(t), this.symbols.minusSign && t.startsWith(this.symbols.minusSign) && e < 0 ? t = t.slice(this.symbols.minusSign.length) : this.symbols.plusSign && t.startsWith(this.symbols.plusSign) && n > 0 && (t = t.slice(this.symbols.plusSign.length)), (!this.symbols.group || !t.startsWith(this.symbols.group)) && !(this.symbols.decimal && t.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0) && (this.symbols.group && (t = H(t, this.symbols.group, "")), t = t.replace(this.symbols.numeral, ""), this.symbols.decimal && (t = t.replace(this.symbols.decimal, "")), t.length === 0)
    }
    constructor(t, e = {}) {
        var n;
        this.locale = t, this.formatter = new Intl.NumberFormat(t, e), this.options = this.formatter.resolvedOptions(), this.symbols = function(a, o, i, l) {
            var u, d, w, c;
            let b = new Intl.NumberFormat(a, $(j({}, i), {
                    minimumSignificantDigits: 1,
                    maximumSignificantDigits: 21
                })),
                x = b.formatToParts(-10000.111),
                O = b.formatToParts(10000.111),
                Z = lt.map(v => b.formatToParts(v));
            var S;
            let J = (S = (u = x.find(v => v.type === "minusSign")) === null || u === void 0 ? void 0 : u.value) !== null && S !== void 0 ? S : "-",
                V = (d = O.find(v => v.type === "plusSign")) === null || d === void 0 ? void 0 : d.value;
            V || (l == null ? void 0 : l.signDisplay) !== "exceptZero" && (l == null ? void 0 : l.signDisplay) !== "always" || (V = "+");
            let B = new Intl.NumberFormat(a, $(j({}, i), {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })).formatToParts(.001),
                s = (w = B.find(v => v.type === "decimal")) === null || w === void 0 ? void 0 : w.value,
                g = (c = x.find(v => v.type === "group")) === null || c === void 0 ? void 0 : c.value,
                h = x.filter(v => !Ve.has(v.type)).map(v => we(v.value)),
                D = Z.flatMap(v => v.filter(T => !Ve.has(T.type)).map(T => we(T.value))),
                N = [...new Set([...h, ...D])].sort((v, T) => T.length - v.length),
                E = N.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${N.join("|")}|[\\p{White_Space}]`, "gu"),
                be = [...new Intl.NumberFormat(i.locale, {
                    useGrouping: !1
                }).format(9876543210)].reverse(),
                Ke = new Map(be.map((v, T) => [v, T])),
                He = new RegExp(`[${be.join("")}]`, "g");
            return {
                minusSign: J,
                plusSign: V,
                decimal: s,
                group: g,
                literals: E,
                numeral: He,
                index: v => String(Ke.get(v))
            }
        }(t, this.formatter, this.options, e), this.options.style === "percent" && (((n = this.options.minimumFractionDigits) !== null && n !== void 0 ? n : 0) > 18 || this.options.maximumFractionDigits)
    }
}
const Ve = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]),
    lt = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, .1, 1.1];

function H(r, t, e) {
    return r.replaceAll ? r.replaceAll(t, e) : r.split(t).join(e)
}

function we(r) {
    return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
var ot = G("<label>");
const oe = De("text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-40 text-secondary", {
        variants: {
            variant: {
                label: "data-[invalid]:text-secondary",
                description: "text-secondary text-xs",
                error: "font-semibold text-error text-xs"
            }
        },
        defaultVariants: {
            variant: "label"
        }
    }),
    St = r => {
        const [, t] = y(r, ["class"]);
        return e = ot(), Ie(e, f({
            get class() {
                return M(oe(), r.class)
            }
        }, t), !1, !1), e;
        var e
    };
var Oe = 7e3,
    z = null,
    Nt = "data-live-announcer",
    ut = class {
        constructor() {
            W(this, "node");
            W(this, "assertiveLog");
            W(this, "politeLog");
            this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, Se), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node)
        }
        createLog(r) {
            const t = document.createElement("div");
            return t.setAttribute("role", "log"), t.setAttribute("aria-live", r), t.setAttribute("aria-relevant", "additions"), t
        }
        destroy() {
            this.node && (document.body.removeChild(this.node), this.node = null)
        }
        announce(r, t = "assertive", e = Oe) {
            if (!this.node) return;
            const n = document.createElement("div");
            n.textContent = r, t === "assertive" ? this.assertiveLog.appendChild(n) : this.politeLog.appendChild(n), r !== "" && setTimeout(() => {
                n.remove()
            }, e)
        }
        clear(r) {
            this.node && (r && r !== "assertive" || (this.assertiveLog.innerHTML = ""), r && r !== "polite" || (this.politeLog.innerHTML = ""))
        }
    },
    dt = {
        empty: "Empty"
    };

function ct(r) {
    const t = I({
            translations: dt
        }, r),
        [e, n] = y(t, ["translations", "value", "textValue", "minValue", "maxValue", "validationState", "onIncrement", "onIncrementPage", "onDecrement", "onDecrementPage", "onDecrementToMin", "onIncrementToMax", "onKeyDown", "onFocus", "onBlur"]);
    let a = !1;
    const o = _(() => {
        var i;
        return e.textValue === "" ? (i = e.translations) == null ? void 0 : i.empty : (e.textValue || `${e.value}`).replace("-", "−")
    });
    return C(U(o, i => {
        var l;
        a && (l = "assertive", z && z.clear(l), function(u, d = "assertive", w = Oe) {
            z || (z = new ut), z.announce(u, d, w)
        }(i != null ? i : "", "assertive"))
    })), m(F, f({
        as: "div",
        role: "spinbutton",
        get "aria-valuenow" () {
            return e.value == null || Number.isNaN(e.value) ? void 0 : e.value
        },
        get "aria-valuetext" () {
            return o()
        },
        get "aria-valuemin" () {
            return e.minValue
        },
        get "aria-valuemax" () {
            return e.maxValue
        },
        get "aria-required" () {
            return r.required || void 0
        },
        get "aria-disabled" () {
            return r.disabled || void 0
        },
        get "aria-readonly" () {
            return r.readOnly || void 0
        },
        get "aria-invalid" () {
            return e.validationState === "invalid" || void 0
        },
        onKeyDown: i => {
            if (L(i, e.onKeyDown), !(i.ctrlKey || i.metaKey || i.shiftKey || i.altKey || r.readOnly)) switch (i.key) {
                case "PageUp":
                    if (e.onIncrementPage) {
                        i.preventDefault(), e.onIncrementPage();
                        break
                    }
                case "ArrowUp":
                case "Up":
                    e.onIncrement && (i.preventDefault(), e.onIncrement());
                    break;
                case "PageDown":
                    if (e.onDecrementPage) {
                        i.preventDefault(), e.onDecrementPage();
                        break
                    }
                case "ArrowDown":
                case "Down":
                    e.onDecrement && (i.preventDefault(), e.onDecrement());
                    break;
                case "Home":
                    e.onDecrementToMin && (i.preventDefault(), e.onDecrementToMin());
                    break;
                case "End":
                    e.onIncrementToMax && (i.preventDefault(), e.onIncrementToMax())
            }
        },
        onFocus: i => {
            L(i, e.onFocus), a = !0
        },
        onBlur: i => {
            L(i, e.onBlur), a = !1
        }
    }, n))
}
var Te = ["id", "name", "validationState", "required", "disabled", "readOnly"];

function Le(r) {
    const t = `form-control-${ne()}`,
        e = I({
            id: t
        }, r),
        [n, a] = P(),
        [o, i] = P(),
        [l, u] = P(),
        [d, w] = P();
    return {
        formControlContext: {
            name: () => {
                var c;
                return (c = p(e.name)) != null ? c : p(e.id)
            },
            dataset: _(() => ({
                "data-valid": p(e.validationState) === "valid" ? "" : void 0,
                "data-invalid": p(e.validationState) === "invalid" ? "" : void 0,
                "data-required": p(e.required) ? "" : void 0,
                "data-disabled": p(e.disabled) ? "" : void 0,
                "data-readonly": p(e.readOnly) ? "" : void 0
            })),
            validationState: () => p(e.validationState),
            isRequired: () => p(e.required),
            isDisabled: () => p(e.disabled),
            isReadOnly: () => p(e.readOnly),
            labelId: n,
            fieldId: o,
            descriptionId: l,
            errorMessageId: d,
            getAriaLabelledBy: (c, b, x) => {
                const O = x != null || n() != null;
                return [x, n(), O && b != null ? c : void 0].filter(Boolean).join(" ") || void 0
            },
            getAriaDescribedBy: c => [l(), d(), c].filter(Boolean).join(" ") || void 0,
            generateId: se(() => p(e.id)),
            registerLabel: K(a),
            registerField: K(i),
            registerDescription: K(u),
            registerErrorMessage: K(w)
        }
    }
}
var ue = re();

function R() {
    const r = ie(ue);
    if (r === void 0) throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");
    return r
}

function X(r) {
    const t = R(),
        e = I({
            id: t.generateId("description")
        }, r);
    return C(() => A(t.registerDescription(e.id))), m(F, f({
        as: "div"
    }, () => t.dataset(), e))
}

function Y(r) {
    const t = R(),
        e = I({
            id: t.generateId("error-message")
        }, r),
        [n, a] = y(e, ["forceMount"]),
        o = () => t.validationState() === "invalid";
    return C(() => {
        o() && A(t.registerErrorMessage(a.id))
    }), m(Ze, {
        get when() {
            return n.forceMount || o()
        },
        get children() {
            return m(F, f({
                as: "div"
            }, () => t.dataset(), a))
        }
    })
}

function q(r) {
    let t;
    const e = R(),
        n = I({
            id: e.generateId("label")
        }, r),
        [a, o] = y(n, ["ref"]),
        i = tt(() => t, () => "label");
    return C(() => A(e.registerLabel(o.id))), m(F, f({
        as: "label",
        ref(l) {
            var u = k(d => t = d, a.ref);
            typeof u == "function" && u(l)
        },
        get for() {
            return ae(() => i() === "label")() ? e.fieldId() : void 0
        }
    }, () => e.dataset(), o))
}
var Me = ["id", "aria-label", "aria-labelledby", "aria-describedby"];

function Ee(r) {
    const t = R(),
        e = I({
            id: t.generateId("field")
        }, r);
    return C(() => A(t.registerField(p(e.id)))), {
        fieldProps: {
            id: () => p(e.id),
            ariaLabel: () => p(e["aria-label"]),
            ariaLabelledBy: () => t.getAriaLabelledBy(p(e.id), p(e["aria-label"]), p(e["aria-labelledby"])),
            ariaDescribedBy: () => t.getAriaDescribedBy(p(e["aria-describedby"]))
        }
    }
}

function Pe(r, t) {
    C(U(r, e => {
        if (e == null) return;
        const n = function(a) {
            return function(o) {
                return o.matches("textarea, input, select, button")
            }(a) ? a.form : a.closest("form")
        }(e);
        n != null && (n.addEventListener("reset", t, {
            passive: !0
        }), A(() => {
            n.removeEventListener("reset", t)
        }))
    }))
}
var mt = G("<div aria-hidden=true><input type=text tabindex=-1>");
Ne({}, {
    DecrementTrigger: () => ce,
    Description: () => X,
    ErrorMessage: () => Y,
    HiddenInput: () => ze,
    IncrementTrigger: () => me,
    Input: () => ge,
    Label: () => q,
    NumberField: () => gt,
    Root: () => pe
});
var ke = re();

function de() {
    const r = ie(ke);
    if (r === void 0) throw new Error("[kobalte]: `useNumberFieldContext` must be used within a `NumberField` component");
    return r
}

function qe(r) {
    const t = R(),
        e = de(),
        [n, a] = y(r, ["numberFieldVaryType", "onClick"]);
    return m(rt, f({
        tabIndex: -1,
        get disabled() {
            return t.isDisabled() || e.rawValue() === (n.numberFieldVaryType === "increment" ? e.maxValue() : e.minValue())
        },
        get "aria-controls" () {
            return t.fieldId()
        },
        onClick: o => {
            var i;
            L(o, n.onClick), e.varyValue(e.step() * (n.numberFieldVaryType === "increment" ? 1 : -1)), (i = e.inputRef()) == null || i.focus()
        }
    }, a))
}

function ce(r) {
    return m(qe, f({
        numberFieldVaryType: "decrement"
    }, r))
}

function ze(r) {
    const t = de(),
        [e, n] = y(r, ["ref", "onChange"]),
        a = R();
    return (() => {
        var o = mt(),
            i = o.firstChild;
        i.addEventListener("change", u => {
            L(u, e.onChange), te(() => {
                t.setValue(u.target.value), t.format()
            })
        });
        var l = k(t.setHiddenInputRef, e.ref);
        return typeof l == "function" && Je(l, i), i.style.setProperty("font-size", "16px"), Ie(i, f({
            get name() {
                return a.name()
            },
            get value() {
                return ae(() => !!Number.isNaN(t.rawValue()))() ? "" : t.rawValue()
            },
            get required() {
                return a.isRequired()
            },
            get disabled() {
                return a.isDisabled()
            },
            get readOnly() {
                return a.isReadOnly()
            }
        }, n), !1, !1), Qe(u => et(o, Se, u)), o
    })()
}

function me(r) {
    return m(qe, f({
        numberFieldVaryType: "increment"
    }, r))
}

function ge(r) {
    const t = R(),
        e = de(),
        n = I({
            id: e.generateId("input"),
            inputMode: "decimal",
            autocomplete: "off",
            autocorrect: "off",
            spellcheck: !1
        }, r),
        [a, o, i] = y(n, ["ref", "onInput", "onChange", "onWheel", "as"], Me),
        {
            fieldProps: l
        } = Ee(o);
    return m(ct, f({
        type: "text",
        get id() {
            return l.id()
        },
        ref(u) {
            var d = k(e.setInputRef, a.ref);
            typeof d == "function" && d(u)
        },
        get value() {
            return e.value()
        },
        get validationState() {
            return t.validationState()
        },
        get required() {
            return t.isRequired()
        },
        get disabled() {
            return t.isDisabled()
        },
        get readOnly() {
            return t.isReadOnly()
        },
        get textValue() {
            return e.textValue()
        },
        get minValue() {
            return e.minValue()
        },
        get maxValue() {
            return e.maxValue()
        },
        onIncrement: () => {
            e.varyValue(e.step())
        },
        onIncrementPage: () => {
            e.varyValue(e.largeStep())
        },
        onIncrementToMax: () => {
            e.setValue(e.maxValue()), e.format()
        },
        onDecrement: () => {
            e.varyValue(-e.step())
        },
        onDecrementPage: () => {
            e.varyValue(-e.largeStep())
        },
        onDecrementToMin: () => {
            e.setValue(e.minValue()), e.format()
        },
        get translations() {
            return e.translations()
        },
        onChange: u => {
            L(u, a.onChange), e.format()
        },
        onWheel: u => {
            L(u, a.onWheel), e.changeOnWheel() && document.activeElement === e.inputRef() && (u.preventDefault(), u.deltaY < 0 ? e.varyValue(e.step()) : e.varyValue(-e.step()))
        },
        get onInput() {
            return le([a.onInput, e.onInput])
        },
        get "aria-label" () {
            return l.ariaLabel()
        },
        get "aria-labelledby" () {
            return l.ariaLabelledBy()
        },
        get "aria-describedby" () {
            return l.ariaDescribedBy()
        }
    }, () => t.dataset(), {
        as: u => m(F, f({
            get as() {
                return a.as || "input"
            },
            get value() {
                return ae(() => !!Number.isNaN(e.rawValue()))() ? "" : e.formatNumber(e.rawValue())
            },
            get required() {
                return t.isRequired()
            },
            get disabled() {
                return t.isDisabled()
            },
            get readOnly() {
                return t.isReadOnly()
            }
        }, u, i))
    }))
}

function pe(r) {
    var B;
    let t;
    const e = `NumberField-${ne()}`,
        n = I({
            id: e,
            format: !0,
            minValue: Number.MIN_SAFE_INTEGER,
            maxValue: Number.MAX_SAFE_INTEGER,
            step: 1,
            changeOnWheel: !0
        }, r),
        [a, o, i] = y(n, ["ref", "value", "defaultValue", "onChange", "rawValue", "onRawValueChange", "translations", "format", "formatOptions", "textValue", "minValue", "maxValue", "step", "largeStep", "changeOnWheel", "translations", "allowedInput"], Te),
        {
            locale: l
        } = at(),
        u = _(() => new Re(l(), a.formatOptions)),
        d = _(() => new Ce(l(), a.formatOptions)),
        w = s => a.format && typeof s != "number" ? u().parse(s != null ? s : "") : Number(s != null ? s : ""),
        [c, b] = Fe({
            value: () => a.value,
            defaultValue: () => {
                var s;
                return (s = a.defaultValue) != null ? s : a.rawValue
            },
            onChange: s => {
                var g, h;
                (g = a.onChange) == null || g.call(a, typeof s == "number" ? d().format(s) : s), (h = a.onRawValueChange) == null || h.call(a, w(s))
            }
        });
    (B = a.onRawValueChange) == null || B.call(a, w(c()));
    const {
        formControlContext: x
    } = Le(o);
    Pe(() => t, () => {
        var s;
        b((s = a.defaultValue) != null ? s : "")
    });
    const [O, Z] = P(), [S, J] = P(), V = {
        value: c,
        setValue: b,
        rawValue: () => w(c()),
        generateId: se(() => p(o.id)),
        formatNumber: s => d().format(s),
        format: () => {
            var h;
            if (!a.format) return;
            let s = V.rawValue();
            if (Number.isNaN(s)) return S() && (S().value = ""), void((h = a.onRawValueChange) == null ? void 0 : h.call(a, s));
            V.minValue() && (s = Math.max(s, V.minValue())), V.maxValue() && (s = Math.min(s, V.maxValue()));
            const g = V.formatNumber(s);
            c() != g && b(g), O() && (O().value = g), S() && (S().value = String(s))
        },
        onInput: s => {
            if (x.isReadOnly() || x.isDisabled()) return;
            const g = s.target;
            let h = g.selectionStart;
            var D, N;
            N = g.value, (a.format && typeof N != "number" ? u().isValidPartialNumber(N != null ? N : "", n.minValue, n.maxValue) : !Number.isNaN(Number(N))) ? (s.inputType !== "insertText" || (D = s.data || "", a.allowedInput === void 0 || a.allowedInput.test(D))) && b(g.value) : s.inputType === "deleteContentBackward" && h !== null && (h += 1);
            const E = c();
            E !== g.value && (g.value = String(E != null ? E : ""), h !== null && (g.selectionStart = h, g.selectionEnd = h))
        },
        textValue: () => a.textValue,
        minValue: () => a.minValue,
        maxValue: () => a.maxValue,
        step: () => a.step,
        largeStep: () => {
            var s;
            return (s = a.largeStep) != null ? s : 10 * a.step
        },
        changeOnWheel: () => a.changeOnWheel,
        translations: () => a.translations,
        inputRef: O,
        setInputRef: Z,
        hiddenInputRef: S,
        setHiddenInputRef: J,
        varyValue: s => {
            var h;
            let g = (h = V.rawValue()) != null ? h : 0;
            Number.isNaN(g) && (g = 0), te(() => {
                let D = g;
                g % 1 == 0 ? D += s : D = s > 0 ? Math.ceil(D) : Math.floor(D), V.setValue(D), V.format()
            })
        }
    };
    return C(U(() => a.rawValue, s => {
        if (s !== V.rawValue()) {
            if (Number.isNaN(s)) return;
            te(() => {
                b(s != null ? s : ""), V.format()
            })
        }
    }, {
        defer: !0
    })), m(ue.Provider, {
        value: x,
        get children() {
            return m(ke.Provider, {
                value: V,
                get children() {
                    return m(F, f({
                        as: "div",
                        ref(s) {
                            var g = k(h => t = h, a.ref);
                            typeof g == "function" && g(s)
                        },
                        role: "group",
                        get id() {
                            return p(o.id)
                        }
                    }, () => x.dataset(), i))
                }
            })
        }
    })
}
var gt = Object.assign(pe, {
    Description: X,
    ErrorMessage: Y,
    HiddenInput: ze,
    Input: ge,
    IncrementTrigger: me,
    DecrementTrigger: ce,
    Label: q
});
Ne({}, {
    Description: () => X,
    ErrorMessage: () => Y,
    Input: () => fe,
    Label: () => q,
    Root: () => ve,
    TextArea: () => $e,
    TextField: () => pt
});
var Ae = re();

function Be() {
    const r = ie(Ae);
    if (r === void 0) throw new Error("[kobalte]: `useTextFieldContext` must be used within a `TextField` component");
    return r
}

function fe(r) {
    return m(je, f({
        type: "text"
    }, r))
}

function je(r) {
    const t = R(),
        e = Be(),
        n = I({
            id: e.generateId("input")
        }, r),
        [a, o, i] = y(n, ["onInput"], Me),
        {
            fieldProps: l
        } = Ee(o);
    return m(F, f({
        as: "input",
        get id() {
            return l.id()
        },
        get name() {
            return t.name()
        },
        get value() {
            return e.value()
        },
        get required() {
            return t.isRequired()
        },
        get disabled() {
            return t.isDisabled()
        },
        get readonly() {
            return t.isReadOnly()
        },
        get "aria-label" () {
            return l.ariaLabel()
        },
        get "aria-labelledby" () {
            return l.ariaLabelledBy()
        },
        get "aria-describedby" () {
            return l.ariaDescribedBy()
        },
        get "aria-invalid" () {
            return t.validationState() === "invalid" || void 0
        },
        get "aria-required" () {
            return t.isRequired() || void 0
        },
        get "aria-disabled" () {
            return t.isDisabled() || void 0
        },
        get "aria-readonly" () {
            return t.isReadOnly() || void 0
        },
        get onInput() {
            return le([a.onInput, e.onInput])
        }
    }, () => t.dataset(), i))
}

function ve(r) {
    let t;
    const e = `textfield-${ne()}`,
        n = I({
            id: e
        }, r),
        [a, o, i] = y(n, ["ref", "value", "defaultValue", "onChange"], Te),
        [l, u] = Fe({
            value: () => a.value,
            defaultValue: () => a.defaultValue,
            onChange: c => {
                var b;
                return (b = a.onChange) == null ? void 0 : b.call(a, c)
            }
        }),
        {
            formControlContext: d
        } = Le(o);
    Pe(() => t, () => {
        var c;
        return u((c = a.defaultValue) != null ? c : "")
    });
    const w = {
        value: l,
        generateId: se(() => p(o.id)),
        onInput: c => {
            var x;
            if (d.isReadOnly() || d.isDisabled()) return;
            const b = c.target;
            u(b.value), b.value = (x = l()) != null ? x : ""
        }
    };
    return m(ue.Provider, {
        value: d,
        get children() {
            return m(Ae.Provider, {
                value: w,
                get children() {
                    return m(F, f({
                        as: "div",
                        ref(c) {
                            var b = k(x => t = x, a.ref);
                            typeof b == "function" && b(c)
                        },
                        role: "group",
                        get id() {
                            return p(o.id)
                        }
                    }, () => d.dataset(), i))
                }
            })
        }
    })
}

function $e(r) {
    let t;
    const e = Be(),
        n = I({
            id: e.generateId("textarea")
        }, r),
        [a, o] = y(n, ["ref", "autoResize", "submitOnEnter", "onKeyPress"]);
    C(U([() => t, () => a.autoResize, () => e.value()], ([l, u]) => {
        l && u && function(d) {
            const w = d.style.alignSelf,
                c = d.style.overflow;
            "MozAppearance" in d.style || (d.style.overflow = "hidden"), d.style.alignSelf = "start", d.style.height = "auto", d.style.height = `${d.scrollHeight+(d.offsetHeight-d.clientHeight)}px`, d.style.overflow = c, d.style.alignSelf = w
        }(l)
    }));
    const i = l => {
        t && a.submitOnEnter && l.key === "Enter" && !l.shiftKey && t.form && (t.form.requestSubmit(), l.preventDefault())
    };
    return m(je, f({
        as: "textarea",
        get "aria-multiline" () {
            return a.submitOnEnter ? "false" : void 0
        },
        get onKeyPress() {
            return le([a.onKeyPress, i])
        },
        ref(l) {
            var u = k(d => t = d, a.ref);
            typeof u == "function" && u(l)
        }
    }, o))
}
var pt = Object.assign(ve, {
    Description: X,
    ErrorMessage: Y,
    Input: fe,
    Label: q,
    TextArea: $e
});
const We = De("flex w-full border border-input data-[invalid]:border-error bg-layer2 px-4 py-2 text-primary font-semibold file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-quarterary focus-visible:outline-none focus-visible:border-brand disabled:cursor-not-allowed disabled:opacity-40", {
        variants: {
            size: {
                xs: "h-6 text-xs rounded-md",
                sm: "h-8 text-sm rounded-md",
                default: "h-10 rounded-xl",
                lg: "h-12 rounded-xl"
            }
        },
        defaultVariants: {
            size: "default"
        }
    }),
    Ct = ve,
    Ft = r => {
        const [t, e] = y(r, ["type", "class", "size"]);
        return m(fe, f({
            get type() {
                return t.type
            },
            get class() {
                return M(We({
                    size: r.size
                }), t.class)
            }
        }, e))
    },
    Rt = r => {
        const [t, e] = y(r, ["class"]);
        return m(q, f({
            get class() {
                return M(oe(), t.class)
            }
        }, e))
    };
var ft = G('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class=size-4><path d="M6 15l6 -6l6 6">'),
    vt = G('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class=size-4><path d="M6 9l6 6l6 -6">');
const Ot = pe,
    Tt = r => {
        const [t, e] = y(r, ["class"]);
        return m(q, f({
            get class() {
                return M(oe(), "px-1 leading-4", t.class)
            }
        }, e))
    },
    bt = We,
    Lt = r => {
        const [t, e] = y(r, ["class", "size"]);
        return m(ge, f({
            get class() {
                return M(bt({
                    size: t.size
                }), t.class)
            }
        }, e))
    },
    Mt = r => {
        const [t, e] = y(r, ["class", "children"]);
        return m(me, f({
            get class() {
                return M("w-12 absolute right-1.5 top-1 inline-flex size-4 items-center justify-center text-secondary opacity-30 hover:opacity-100 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed", t.class)
            }
        }, e, {
            get children() {
                var n;
                return (n = t.children) != null ? n : ft()
            }
        }))
    },
    Et = r => {
        const [t, e] = y(r, ["class", "children"]);
        return m(ce, f({
            get class() {
                return M("w-12 absolute bottom-1 right-1.5 inline-flex size-4 items-center justify-center text-secondary opacity-30 hover:opacity-100 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed", t.class)
            }
        }, e, {
            get children() {
                var n;
                return (n = t.children) != null ? n : vt()
            }
        }))
    };
export {
    Nt as D, X as F, St as L, Ot as N, Ct as T, Tt as a, Rt as b, Ft as c, Et as d, Mt as e, gt as f, Y as g, q as h, Me as i, Ee as j, Te as k, Le as l, Pe as m, ue as n, Lt as o, oe as p, R as u
};