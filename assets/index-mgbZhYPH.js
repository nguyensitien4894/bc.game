var gn, s = {};

function T(t) {
    if (!t) return !1;
    var e = Object.prototype.toString.call(t);
    return e == "[object Function]" || e == "[object AsyncFunction]"
}

function ht() {
    return Date.now && T(Date.now) ? Date.now() : new Date().getTime()
}(function() {
    var t = {
            function: !0,
            object: !0
        },
        e = t[typeof window] && window || this,
        r = e.JSON,
        n = e.JSON3,
        i = !1,
        a = function u(l, p) {
            l || (l = e.Object()), p || (p = e.Object());
            var g = l.Number || e.Number,
                c = l.String || e.String,
                _ = l.Object || e.Object,
                b = l.Date || e.Date,
                v = l.SyntaxError || e.SyntaxError,
                O = l.TypeError || e.TypeError,
                N = l.Math || e.Math,
                Tt = l.JSON || e.JSON;
            if (typeof Tt == "object" && Tt) return p.stringify = Tt.stringify, p.parse = Tt.parse, p.runInContext = u, p;
            var dt, ln = _.prototype,
                kt = ln.toString,
                Me = ln.hasOwnProperty;

            function Kt(w, P) {
                try {
                    w()
                } catch {
                    P && P()
                }
            }
            var Dt = new b(-0xc782b5b800cec);

            function Z(w) {
                if (Z[w] != null) return Z[w];
                var P;
                if (w == "bug-string-char-index") P = !1;
                else if (w == "json") P = Z("json-stringify") && Z("date-serialization") && Z("json-parse");
                else if (w == "date-serialization") {
                    if (P = Z("json-stringify") && Dt) {
                        var h = p.stringify;
                        Kt(function() {
                            P = h(new b(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && h(new b(864e13)) == '"+275760-09-13T00:00:00.000Z"' && h(new b(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && h(new b(-1)) == '"1969-12-31T23:59:59.999Z"'
                        })
                    }
                } else {
                    var A, y = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if (w == "json-stringify") {
                        var j = typeof(h = p.stringify) == "function";
                        j && ((A = function() {
                            return 1
                        }).toJSON = A, Kt(function() {
                            j = h(0) === "0" && h(new g) === "0" && h(new c) == '""' && h(kt) === dt && h(dt) === dt && h() === dt && h(A) === "1" && h([A]) == "[1]" && h([dt]) == "[null]" && h(null) == "null" && h([dt, kt, null]) == "[null,null,null]" && h({
                                a: [A, !0, !1, null, `\0\b
\f\r	`]
                            }) == y && h(null, A) === "1" && h([1, 2], null, 1) == `[
 1,
 2
]`
                        }, function() {
                            j = !1
                        })), P = j
                    }
                    if (w == "json-parse") {
                        var x, C = p.parse;
                        typeof C == "function" && Kt(function() {
                            C("0") !== 0 || C(!1) || (A = C(y), (x = A.a.length == 5 && A.a[0] === 1) && (Kt(function() {
                                x = !C('"	"')
                            }), x && Kt(function() {
                                x = C("01") !== 1
                            }), x && Kt(function() {
                                x = C("1.") !== 1
                            })))
                        }, function() {
                            x = !1
                        }), P = x
                    }
                }
                return Z[w] = !!P
            }
            if (Kt(function() {
                    Dt = Dt.getUTCFullYear() == -109252 && Dt.getUTCMonth() === 0 && Dt.getUTCDate() === 1 && Dt.getUTCHours() == 10 && Dt.getUTCMinutes() == 37 && Dt.getUTCSeconds() == 6 && Dt.getUTCMilliseconds() == 708
                }), Z["bug-string-char-index"] = Z["date-serialization"] = Z.json = Z["json-stringify"] = Z["json-parse"] = null, !Z("json")) {
                var cr = Z("bug-string-char-index"),
                    fe = function(w, P) {
                        var h, A, y, j = 0;
                        for (y in (h = function() {
                                this.valueOf = 0
                            }).prototype.valueOf = 0, A = new h) Me.call(A, y) && j++;
                        return h = A = null, j ? fe = function(x, C) {
                            var J, at, q = kt.call(x) == "[object Function]";
                            for (J in x) q && J == "prototype" || !Me.call(x, J) || (at = J === "constructor") || C(J);
                            (at || Me.call(x, J = "constructor")) && C(J)
                        } : (A = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], fe = function(x, C) {
                            var J, at, q = kt.call(x) == "[object Function]",
                                Wt = !q && typeof x.constructor != "function" && t[typeof x.hasOwnProperty] && x.hasOwnProperty || Me;
                            for (J in x) q && J == "prototype" || !Wt.call(x, J) || C(J);
                            for (at = A.length; J = A[--at];) Wt.call(x, J) && C(J)
                        }), fe(w, P)
                    };
                if (!Z("json-stringify") && !Z("date-serialization")) {
                    var ua = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        Lt = function(w, P) {
                            return ("000000" + (P || 0)).slice(-w)
                        },
                        pr = function(w) {
                            var P, h, A, y, j, x, C, J, at;
                            if (Dt) P = function(B) {
                                h = B.getUTCFullYear(), A = B.getUTCMonth(), y = B.getUTCDate(), x = B.getUTCHours(), C = B.getUTCMinutes(), J = B.getUTCSeconds(), at = B.getUTCMilliseconds()
                            };
                            else {
                                var q = N.floor,
                                    Wt = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                    Ut = function(B, Rt) {
                                        return Wt[Rt] + 365 * (B - 1970) + q((B - 1969 + (Rt = +(Rt > 1))) / 4) - q((B - 1901 + Rt) / 100) + q((B - 1601 + Rt) / 400)
                                    };
                                P = function(B) {
                                    for (y = q(B / 864e5), h = q(y / 365.2425) + 1970 - 1; Ut(h + 1, 0) <= y; h++);
                                    for (A = q((y - Ut(h, 0)) / 30.42); Ut(h, A + 1) <= y; A++);
                                    y = 1 + y - Ut(h, A), x = q((j = (B % 864e5 + 864e5) % 864e5) / 36e5) % 24, C = q(j / 6e4) % 60, J = q(j / 1e3) % 60, at = j % 1e3
                                }
                            }
                            return (pr = function(B) {
                                return B > -1 / 0 && B < 1 / 0 ? (P(B), B = (h <= 0 || h >= 1e4 ? (h < 0 ? "-" : "+") + Lt(6, h < 0 ? -h : h) : Lt(4, h)) + "-" + Lt(2, A + 1) + "-" + Lt(2, y) + "T" + Lt(2, x) + ":" + Lt(2, C) + ":" + Lt(2, J) + "." + Lt(3, at) + "Z", h = A = y = x = C = J = at = null) : B = null, B
                            })(w)
                        };
                    if (Z("json-stringify") && !Z("date-serialization")) {
                        let w = function(P) {
                            return pr(this)
                        };
                        var ca = p.stringify;
                        p.stringify = function(P, h, A) {
                            var y = b.prototype.toJSON;
                            b.prototype.toJSON = w;
                            var j = ca(P, h, A);
                            return b.prototype.toJSON = y, j
                        }
                    } else {
                        var pa = function(w) {
                                var P = w.charCodeAt(0);
                                return ua[P] || "\\u00" + Lt(2, P.toString(16))
                            },
                            dr = /[\x00-\x1f\x22\x5c]/g,
                            un = function(w) {
                                return dr.lastIndex = 0, '"' + (dr.test(w) ? w.replace(dr, pa) : w) + '"'
                            },
                            fr = function(w, P, h, A, y, j, x) {
                                var C, J, at, q, Wt, Ut, B, Rt, _r;
                                if (Kt(function() {
                                        C = P[w]
                                    }), typeof C == "object" && C && (C.getUTCFullYear && kt.call(C) == "[object Date]" && C.toJSON === b.prototype.toJSON ? C = pr(C) : typeof C.toJSON == "function" && (C = C.toJSON(w))), h && (C = h.call(P, w, C)), C == dt) return C === dt ? C : "null";
                                switch ((J = typeof C) == "object" && (at = kt.call(C)), at || J) {
                                    case "boolean":
                                    case "[object Boolean]":
                                        return "" + C;
                                    case "number":
                                    case "[object Number]":
                                        return C > -1 / 0 && C < 1 / 0 ? "" + C : "null";
                                    case "string":
                                    case "[object String]":
                                        return un("" + C)
                                }
                                if (typeof C == "object") {
                                    for (B = x.length; B--;)
                                        if (x[B] === C) throw O();
                                    if (x.push(C), q = [], Rt = j, j += y, at == "[object Array]") {
                                        for (Ut = 0, B = C.length; Ut < B; Ut++) Wt = fr(Ut, C, h, A, y, j, x), q.push(Wt === dt ? "null" : Wt);
                                        _r = q.length ? y ? `[
` + j + q.join(`,
` + j) + `
` + Rt + "]" : "[" + q.join(",") + "]" : "[]"
                                    } else fe(A || C, function(dn) {
                                        var fn = fr(dn, C, h, A, y, j, x);
                                        fn !== dt && q.push(un(dn) + ":" + (y ? " " : "") + fn)
                                    }), _r = q.length ? y ? `{
` + j + q.join(`,
` + j) + `
` + Rt + "}" : "{" + q.join(",") + "}" : "{}";
                                    return x.pop(), _r
                                }
                            };
                        p.stringify = function(w, P, h) {
                            var A, y, j, x;
                            if (t[typeof P] && P) {
                                if ((x = kt.call(P)) == "[object Function]") y = P;
                                else if (x == "[object Array]") {
                                    j = {};
                                    for (var C, J = 0, at = P.length; J < at;) C = P[J++], (x = kt.call(C)) != "[object String]" && x != "[object Number]" || (j[C] = 1)
                                }
                            }
                            if (h)
                                if ((x = kt.call(h)) == "[object Number]") {
                                    if ((h -= h % 1) > 0)
                                        for (h > 10 && (h = 10), A = ""; A.length < h;) A += " "
                                } else x == "[object String]" && (A = h.length <= 10 ? h : h.slice(0, 10));
                            return fr("", ((C = {})[""] = w, C), y, j, A, "", [])
                        }
                    }
                }
                if (!Z("json-parse")) {
                    var D, qe, da = c.fromCharCode,
                        fa = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "	",
                            110: `
`,
                            102: "\f",
                            114: "\r"
                        },
                        Y = function() {
                            throw D = qe = null, v()
                        },
                        Vt = function() {
                            for (var w, P, h, A, y, j = qe, x = j.length; D < x;) switch (y = j.charCodeAt(D)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    D++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return w = cr ? j.charAt(D) : j[D], D++, w;
                                case 34:
                                    for (w = "@", D++; D < x;)
                                        if ((y = j.charCodeAt(D)) < 32) Y();
                                        else if (y == 92) switch (y = j.charCodeAt(++D)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            w += fa[y], D++;
                                            break;
                                        case 117:
                                            for (P = ++D, h = D + 4; D < h; D++)(y = j.charCodeAt(D)) >= 48 && y <= 57 || y >= 97 && y <= 102 || y >= 65 && y <= 70 || Y();
                                            w += da("0x" + j.slice(P, D));
                                            break;
                                        default:
                                            Y()
                                    } else {
                                        if (y == 34) break;
                                        for (y = j.charCodeAt(D), P = D; y >= 32 && y != 92 && y != 34;) y = j.charCodeAt(++D);
                                        w += j.slice(P, D)
                                    }
                                    if (j.charCodeAt(D) == 34) return D++, w;
                                    Y();
                                default:
                                    if (P = D, y == 45 && (A = !0, y = j.charCodeAt(++D)), y >= 48 && y <= 57) {
                                        for (y == 48 && (y = j.charCodeAt(D + 1)) >= 48 && y <= 57 && Y(), A = !1; D < x && (y = j.charCodeAt(D)) >= 48 && y <= 57; D++);
                                        if (j.charCodeAt(D) == 46) {
                                            for (h = ++D; h < x && !((y = j.charCodeAt(h)) < 48 || y > 57); h++);
                                            h == D && Y(), D = h
                                        }
                                        if ((y = j.charCodeAt(D)) == 101 || y == 69) {
                                            for ((y = j.charCodeAt(++D)) != 43 && y != 45 || D++, h = D; h < x && !((y = j.charCodeAt(h)) < 48 || y > 57); h++);
                                            h == D && Y(), D = h
                                        }
                                        return +j.slice(P, D)
                                    }
                                    A && Y();
                                    var C = j.slice(D, D + 4);
                                    if (C == "true") return D += 4, !0;
                                    if (C == "fals" && j.charCodeAt(D + 4) == 101) return D += 5, !1;
                                    if (C == "null") return D += 4, null;
                                    Y()
                            }
                            return "$"
                        },
                        gr = function(w) {
                            var P, h;
                            if (w == "$" && Y(), typeof w == "string") {
                                if ((cr ? w.charAt(0) : w[0]) == "@") return w.slice(1);
                                if (w == "[") {
                                    for (P = [];
                                        (w = Vt()) != "]";) h ? w == "," ? (w = Vt()) == "]" && Y() : Y() : h = !0, w == "," && Y(), P.push(gr(w));
                                    return P
                                }
                                if (w == "{") {
                                    for (P = {};
                                        (w = Vt()) != "}";) h ? w == "," ? (w = Vt()) == "}" && Y() : Y() : h = !0, w != "," && typeof w == "string" && (cr ? w.charAt(0) : w[0]) == "@" && Vt() == ":" || Y(), P[w.slice(1)] = gr(Vt());
                                    return P
                                }
                                Y()
                            }
                            return w
                        },
                        cn = function(w, P, h) {
                            var A = pn(w, P, h);
                            A === dt ? delete w[P] : w[P] = A
                        },
                        pn = function(w, P, h) {
                            var A, y = w[P];
                            if (typeof y == "object" && y)
                                if (kt.call(y) == "[object Array]")
                                    for (A = y.length; A--;) cn(kt, fe, y);
                                else fe(y, function(j) {
                                    cn(y, j, h)
                                });
                            return h.call(w, P, y)
                        };
                    p.parse = function(w, P) {
                        var h, A;
                        return D = 0, qe = "" + w, h = gr(Vt()), Vt() != "$" && Y(), D = qe = null, P && kt.call(P) == "[object Function]" ? pn(((A = {})[""] = h, A), "", P) : h
                    }
                }
            }
            return p.runInContext = u, p
        }(e, e.JSON3 = {
            noConflict: function() {
                return i || (i = !0, e.JSON = r, e.JSON3 = n, r = n = null), a
            }
        });
    e.JSON ? (e.JSON.parse = a.parse, e.JSON.stringify = a.stringify) : e.JSON = {
        parse: a.parse,
        stringify: a.stringify
    }
}).call(window),
    function(t) {
        if (t.atob) try {
            t.atob(" ")
        } catch {
            t.atob = (e = t.atob, (r = function(u) {
                return e(String(u).replace(/[\t\n\f\r ]+/g, ""))
            }).original = e, r)
        } else {
            var e, r, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                i = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
            t.btoa = function(a) {
                for (var u, l, p, g, c = "", _ = 0, b = (a = String(a)).length % 3; _ < a.length;) {
                    if ((l = a.charCodeAt(_++)) > 255 || (p = a.charCodeAt(_++)) > 255 || (g = a.charCodeAt(_++)) > 255) return "";
                    c += n.charAt((u = l << 16 | p << 8 | g) >> 18 & 63) + n.charAt(u >> 12 & 63) + n.charAt(u >> 6 & 63) + n.charAt(63 & u)
                }
                return b ? c.slice(0, b - 3) + "===".substring(b) : c
            }, t.atob = function(a) {
                if (a = String(a).replace(/[\t\n\f\r ]+/g, ""), !i.test(a)) return "";
                a += "==".slice(2 - (3 & a.length));
                for (var u, l, p, g = "", c = 0; c < a.length;) u = n.indexOf(a.charAt(c++)) << 18 | n.indexOf(a.charAt(c++)) << 12 | (l = n.indexOf(a.charAt(c++))) << 6 | (p = n.indexOf(a.charAt(c++))), g += l === 64 ? String.fromCharCode(u >> 16 & 255) : p === 64 ? String.fromCharCode(u >> 16 & 255, u >> 8 & 255) : String.fromCharCode(u >> 16 & 255, u >> 8 & 255, 255 & u);
                return g
            }
        }
    }(window);
var et = {
        setup: function(t) {
            gn = t
        },
        log: function() {
            (gn || console && console.log || function() {}).apply(null, arguments)
        }
    },
    R = {
        get: function(t) {
            return window.localStorage.getItem(t)
        },
        parse: function(t) {
            var e;
            try {
                e = JSON.parse(R.get(t)) || null
            } catch {
                et.log("parse localStorage failed")
            }
            return e
        },
        set: function(t, e) {
            try {
                window.localStorage.setItem(t, e)
            } catch {
                et.log("localStorage is not support")
            }
        },
        remove: function(t) {
            window.localStorage.removeItem(t)
        },
        isSupport: function() {
            var t = !0;
            try {
                var e = "__local_store_support__",
                    r = "testIsSupportStorage";
                R.set(e, r), R.get(e) !== r && (t = !1), R.remove(e)
            } catch {
                t = !1
            }
            return t
        }
    };

function f(t) {
    return t != null && Object.prototype.toString.call(t) == "[object Object]"
}
var hr, li = (hr = new Date().getTime(), function(t) {
    return Math.ceil((hr = (9301 * hr + 49297) % 233280) / 233280 * t)
});

function yt() {
    if (typeof Uint32Array == "function") {
        var t = "";
        if (typeof crypto < "u" ? t = crypto : typeof msCrypto < "u" && (t = msCrypto), f(t) && t.getRandomValues) {
            var e = new Uint32Array(1);
            return t.getRandomValues(e)[0] / Math.pow(2, 32)
        }
    }
    return li(1e19) / 1e19
}

function tt(t) {
    var e = null;
    try {
        e = JSON.parse(t)
    } catch {}
    return e
}

function tr(t, e) {
    this.lockGetPrefix = t || "lock-get-prefix", this.lockSetPrefix = e || "lock-set-prefix"
}

function $r(t) {
    return typeof t == "function" || !(!t || typeof t != "object") && $r(t.listener)
}

function Pt() {
    this._events = {}
}

function pe(t) {
    var e = t;
    try {
        e = decodeURIComponent(t)
    } catch {
        e = t
    }
    return e
}

function er(t) {
    for (var e = {}, r = (t = t || "").substring(1).split("&"), n = 0; n < r.length; n++) {
        var i = r[n].indexOf("=");
        if (i !== -1) {
            var a = r[n].substring(0, i),
                u = r[n].substring(i + 1);
            a = pe(a), u = pe(u), e[a] = u
        }
    }
    return e
}

function k(t) {
    return Object.prototype.toString.call(t) == "[object String]"
}

function St(t) {
    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
}

function zr(t) {
    var e = function(r) {
        this._fields = {
            Username: 4,
            Password: 5,
            Port: 7,
            Protocol: 2,
            Host: 6,
            Path: 8,
            URL: 0,
            QueryString: 9,
            Fragment: 10
        }, this._values = {}, this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/, r !== void 0 && this._parse(r)
    };
    return e.prototype.setUrl = function(r) {
        this._parse(r)
    }, e.prototype._initValues = function() {
        for (var r in this._fields) this._values[r] = ""
    }, e.prototype.addQueryString = function(r) {
        if (typeof r != "object") return !1;
        var n = this._values.QueryString || "";
        for (var i in r) n = new RegExp(i + "[^&]+").test(n) ? n.replace(new RegExp(i + "[^&]+"), i + "=" + r[i]) : n.slice(-1) === "&" ? n + i + "=" + r[i] : n === "" ? i + "=" + r[i] : n + "&" + i + "=" + r[i];
        this._values.QueryString = n
    }, e.prototype.getUrl = function() {
        var r = "";
        return r += this._values.Origin, r += this._values.Port ? ":" + this._values.Port : "", r += this._values.Path, (r += this._values.QueryString ? "?" + this._values.QueryString : "") + (this._values.Fragment ? "#" + this._values.Fragment : "")
    }, e.prototype._parse = function(r) {
        this._initValues();
        var n = this._regex.exec(r);
        n || et.log("URLParser::_parse -> Invalid URL");
        var i = r.split("#"),
            a = i[0],
            u = i.slice(1).join("#");
        for (var l in n = this._regex.exec(a), this._fields) n[this._fields[l]] !== void 0 && (this._values[l] = n[this._fields[l]]);
        this._values.Hostname = this._values.Host.replace(/:\d+$/, ""), this._values.Origin = this._values.Protocol + "://" + this._values.Hostname, this._values.Fragment = u
    }, new e(t)
}

function $t(t) {
    var e, r = {};
    if (typeof window.URL == "function" && function() {
            try {
                return new URL("https://www.sensorsdata.cn/").href === "https://www.sensorsdata.cn/"
            } catch {
                return !1
            }
        }())(r = new URL(t)).searchParams || (r.searchParams = (e = er(r.search), {
        get: function(i) {
            return e[i]
        }
    }));
    else {
        if (k(t) || (t = String(t)), t = St(t), /^https?:\/\/.+/.test(t) === !1) return void et.log("Invalid URL");
        var n = zr(t);
        r.hash = n._values.Fragment, r.host = n._values.Host ? n._values.Host + (n._values.Port ? ":" + n._values.Port : "") : "", r.href = n._values.URL, r.password = n._values.Password, r.pathname = n._values.Path, r.port = n._values.Port, r.search = n._values.QueryString ? "?" + n._values.QueryString : "", r.username = n._values.Username, r.hostname = n._values.Hostname, r.protocol = n._values.Protocol ? n._values.Protocol + ":" : "", r.origin = n._values.Origin ? n._values.Origin + (n._values.Port ? ":" + n._values.Port : "") : "", r.searchParams = function() {
            var i = er("?" + n._values.QueryString);
            return {
                get: function(a) {
                    return i[a]
                }
            }
        }()
    }
    return r
}
tr.prototype.get = function(t, e, r, n) {
    if (!t) throw new Error("key is must");
    e = e || 1e4, r = r || 1e3, n = n || function() {};
    var i = this.lockGetPrefix + t,
        a = R.get(i),
        u = String(yt());
    if (a && (a = tt(a) || {
            randomNum: 0,
            expireTime: 0
        }).expireTime > ht()) return n(null);
    R.set(i, JSON.stringify({
        randomNum: u,
        expireTime: ht() + e
    })), setTimeout(function() {
        (a = tt(R.get(i)) || {
            randomNum: 0,
            expireTime: 0
        }) && a.randomNum === u ? (n(R.get(t)), R.remove(t), R.remove(i)) : n(null)
    }, r)
}, tr.prototype.set = function(t, e, r, n, i) {
    if (!t || !e) throw new Error("key and val is must");
    r = r || 1e4, n = n || 1e3, i = i || function() {};
    var a = this.lockSetPrefix + t,
        u = R.get(a),
        l = String(yt());
    if (u && (u = tt(u) || {
            randomNum: 0,
            expireTime: 0
        }).expireTime > ht()) return i({
        status: "fail",
        reason: "This key is locked"
    });
    R.set(a, JSON.stringify({
        randomNum: l,
        expireTime: ht() + r
    })), setTimeout(function() {
        (u = tt(R.get(a)) || {
            randomNum: 0,
            expireTime: 0
        }).randomNum === l ? R.set(t, e) && i({
            status: "success"
        }) : i({
            status: "fail",
            reason: "This key is locked"
        })
    }, n)
}, Pt.prototype.on = function(t, e) {
    if (!t || !e) return !1;
    if (!$r(e)) throw new Error("listener must be a function");
    this._events[t] = this._events[t] || [];
    var r = typeof e == "object";
    return this._events[t].push(r ? e : {
        listener: e,
        once: !1
    }), this
}, Pt.prototype.prepend = function(t, e) {
    if (!t || !e) return !1;
    if (!$r(e)) throw new Error("listener must be a function");
    this._events[t] = this._events[t] || [];
    var r = typeof e == "object";
    return this._events[t].unshift(r ? e : {
        listener: e,
        once: !1
    }), this
}, Pt.prototype.prependOnce = function(t, e) {
    return this.prepend(t, {
        listener: e,
        once: !0
    })
}, Pt.prototype.once = function(t, e) {
    return this.on(t, {
        listener: e,
        once: !0
    })
}, Pt.prototype.off = function(t, e) {
    var r = this._events[t];
    if (!r) return !1;
    if (typeof e == "number") r.splice(e, 1);
    else if (typeof e == "function")
        for (var n = 0, i = r.length; n < i; n++) r[n] && r[n].listener === e && r.splice(n, 1);
    return this
}, Pt.prototype.emit = function(t, e) {
    var r = this._events[t];
    if (!r) return !1;
    for (var n = 0; n < r.length; n++) {
        var i = r[n];
        i && (i.listener.call(this, e || {}), i.once && this.off(t, n))
    }
    return this
}, Pt.prototype.removeAllListeners = function(t) {
    t && this._events[t] ? this._events[t] = [] : this._events = {}
}, Pt.prototype.listeners = function(t) {
    return t && typeof t == "string" ? this._events[t] : this._events
};
var Gt = function() {
    var t = function() {
        for (var e = 1 * new Date, r = 0; e == 1 * new Date;) r++;
        return e.toString(16) + r.toString(16)
    };
    return function() {
        var e = String(screen.height * screen.width);
        e = e && /\d{5,}/.test(e) ? e.toString(16) : String(31242 * yt()).replace(".", "").slice(0, 8);
        var r = t() + "-" + yt().toString(16).replace(".", "") + "-" + function() {
            var n, i, a = navigator.userAgent,
                u = [],
                l = 0;

            function p(g, c) {
                var _, b = 0;
                for (_ = 0; _ < c.length; _++) b |= u[_] << 8 * _;
                return g ^ b
            }
            for (n = 0; n < a.length; n++) i = a.charCodeAt(n), u.unshift(255 & i), u.length >= 4 && (l = p(l, u), u = []);
            return u.length > 0 && (l = p(l, u)), l.toString(16)
        }() + "-" + e + "-" + t();
        return r || (String(yt()) + String(yt()) + String(yt())).slice(2, 15)
    }
}();

function bt(t) {
    return !(!t || t.nodeType !== 1)
}

function At(t) {
    return t === void 0
}

function E(t) {
    return Array.isArray && T(E) ? Array.isArray(t) : Object.prototype.toString.call(t) === "[object Array]"
}

function mt(t) {
    return new ui(t)
}
var ui = function(t) {
        this.ele = t
    },
    _n = function(t, e) {
        for (var r = []; t; t = t.nextSibling) t.nodeType === 1 && t !== e && r.push(t);
        return r
    };

function le(t, e, r, n) {
    function i(a) {
        return a && (a.preventDefault = i.preventDefault, a.stopPropagation = i.stopPropagation, a._getPath = i._getPath), a
    }
    i._getPath = function() {
            return this.path || this.composedPath && this.composedPath() || mt(this.target).getParents()
        }, i.preventDefault = function() {
            this.returnValue = !1
        }, i.stopPropagation = function() {
            this.cancelBubble = !0
        },
        function(a, u, l) {
            if (n === void 0 && u === "click" && (n = !0), a && a.addEventListener) a.addEventListener(u, function(c) {
                c._getPath = i._getPath, l.call(this, c)
            }, n);
            else {
                var p = "on" + u,
                    g = a[p];
                a[p] = function(c, _, b, v) {
                    return function(O) {
                        if (O = O || i(window.event)) {
                            O.target = O.srcElement || O.target;
                            var N, Tt, dt = !0;
                            return typeof b == "function" && (N = b(O)), Tt = _.call(c, O), v !== "beforeunload" ? (N !== !1 && Tt !== !1 || (dt = !1), dt) : void 0
                        }
                    }
                }(a, l, g, u)
            }
        }.apply(null, arguments)
}

function ci(t) {
    var e = "pushState" in window.history ? "popstate" : "hashchange";
    le(window, e, t)
}

function pi(t) {
    if (t) return window.XMLHttpRequest !== void 0 && "withCredentials" in new XMLHttpRequest ? new XMLHttpRequest : typeof XDomainRequest < "u" ? new XDomainRequest : null;
    if (window.XMLHttpRequest !== void 0) return new XMLHttpRequest;
    if (window.ActiveXObject) try {
        return new ActiveXObject("Msxml2.XMLHTTP")
    } catch {
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (r) {
            et.log(r)
        }
    }
}
ui.prototype = {
    addClass: function(t) {
        return (" " + this.ele.className + " ").indexOf(" " + t + " ") === -1 && (this.ele.className = this.ele.className + (this.ele.className === "" ? "" : " ") + t), this
    },
    removeClass: function(t) {
        var e = " " + this.ele.className + " ";
        return e.indexOf(" " + t + " ") !== -1 && (this.ele.className = e.replace(" " + t + " ", " ").slice(1, -1)), this
    },
    hasClass: function(t) {
        return (" " + this.ele.className + " ").indexOf(" " + t + " ") !== -1
    },
    attr: function(t, e) {
        return typeof t == "string" && At(e) ? this.ele.getAttribute(t) : (typeof t == "string" && (e = String(e), this.ele.setAttribute(t, e)), this)
    },
    offset: function() {
        try {
            var t = this.ele.getBoundingClientRect(),
                e = this.ele.ownerDocument.documentElement;
            return {
                top: t.top + window.pageYOffset - e.clientTop,
                left: t.left + window.pageXOffset - e.clientLeft
            }
        } catch {
            return {
                top: 0,
                left: 0
            }
        }
    },
    getSize: function() {
        if (!window.getComputedStyle) return {
            width: this.ele.offsetWidth,
            height: this.ele.offsetHeight
        };
        try {
            var t = this.ele.getBoundingClientRect();
            return {
                width: t.width,
                height: t.height
            }
        } catch {
            return {
                width: 0,
                height: 0
            }
        }
    },
    getStyle: function(t) {
        return this.ele.currentStyle ? this.ele.currentStyle[t] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(t)
    },
    wrap: function(t) {
        var e = document.createElement(t);
        return this.ele.parentNode.insertBefore(e, this.ele), e.appendChild(this.ele), mt(e)
    },
    getCssStyle: function(t) {
        var e = this.ele.style.getPropertyValue(t);
        if (e) return e;
        var r = null;
        if (typeof window.getMatchedCSSRules == "function" && (r = window.getMatchedCSSRules(this.ele)), !r || !E(r)) return null;
        for (var n = r.length - 1; n >= 0; n--)
            if (e = r[n].style.getPropertyValue(t)) return e
    },
    sibling: function(t, e) {
        for (;
            (t = t[e]) && t.nodeType !== 1;);
        return t
    },
    next: function() {
        return this.sibling(this.ele, "nextSibling")
    },
    prev: function() {
        return this.sibling(this.ele, "previousSibling")
    },
    siblings: function() {
        return _n((this.ele.parentNode || {}).firstChild, this.ele)
    },
    children: function() {
        return _n(this.ele.firstChild)
    },
    parent: function() {
        var t = this.ele.parentNode;
        return mt(t = t && t.nodeType !== 11 ? t : null)
    },
    previousElementSibling: function() {
        var t = this.ele;
        if ("previousElementSibling" in document.documentElement) return mt(t.previousElementSibling);
        for (; t = t.previousSibling;)
            if (t.nodeType === 1) return mt(t);
        return mt(null)
    },
    getSameTypeSiblings: function() {
        for (var t = this.ele, e = t.parentNode, r = t.tagName.toLowerCase(), n = [], i = 0; i < e.children.length; i++) {
            var a = e.children[i];
            a.nodeType === 1 && a.tagName.toLowerCase() === r && n.push(e.children[i])
        }
        return n
    },
    getParents: function() {
        try {
            var t = this.ele;
            if (!bt(t)) return [];
            var e = [t];
            if (t === null || t.parentElement === null) return [];
            for (; t.parentElement !== null;) t = t.parentElement, e.push(t);
            return e
        } catch {
            return []
        }
    }
};
var hn = Array.prototype.forEach,
    ga = Object.prototype.hasOwnProperty;

function I(t, e, r) {
    if (t == null) return !1;
    if (hn && t.forEach === hn) t.forEach(e, r);
    else if (E(t))
        for (var n = 0, i = t.length; n < i; n++) n in t && e.call(r, t[n], n, t);
    else
        for (var a in t) ga.call(t, a) && e.call(r, t[a], a, t)
}
var _a = Object.prototype.hasOwnProperty;

function U(t) {
    return I(Array.prototype.slice.call(arguments, 1), function(e) {
        for (var r in e) _a.call(e, r) && e[r] !== void 0 && (t[r] = e[r])
    }), t
}

function di(t) {
    function e(u) {
        if (!u) return "";
        try {
            return JSON.parse(u)
        } catch {
            return {}
        }
    }
    t.timeout = t.timeout || 2e4, t.credentials = t.credentials === void 0 || t.credentials;
    var r = pi(t.cors);
    if (!r) return !1;
    t.type || (t.type = t.data ? "POST" : "GET");
    var n, i = (t = U({
            success: function() {},
            error: function() {}
        }, t)).success,
        a = t.error;
    t.success = function(u, l) {
        i(u, l), n && (clearTimeout(n), n = null)
    }, t.error = function(u, l) {
        a(u, l), n && (clearTimeout(n), n = null)
    }, n = setTimeout(function() {
        (function() {
            try {
                r && typeof r == "object" && r.abort && r.abort()
            } catch (u) {
                et.log(u)
            }
            n && (clearTimeout(n), n = null, t.error && t.error(), r.onreadystatechange = null, r.onload = null, r.onerror = null)
        })()
    }, t.timeout), typeof XDomainRequest < "u" && r instanceof XDomainRequest && (r.onload = function() {
        t.success && t.success(e(r.responseText), r.status), r.onreadystatechange = null, r.onload = null, r.onerror = null
    }, r.onerror = function() {
        t.error && t.error(e(r.responseText), r.status), r.onreadystatechange = null, r.onerror = null, r.onload = null
    }), r.onreadystatechange = function() {
        try {
            r.readyState == 4 && (r.status >= 200 && r.status < 300 || r.status == 304 ? t.success(e(r.responseText), r.status) : t.error(e(r.responseText), r.status), r.onreadystatechange = null, r.onload = null)
        } catch {
            r.onreadystatechange = null, r.onload = null
        }
    }, r.open(t.type, t.url, !0);
    try {
        t.credentials && (r.withCredentials = !0), f(t.header) && I(t.header, function(u, l) {
            r.setRequestHeader && r.setRequestHeader(l, u)
        }), t.data && (t.cors || r.setRequestHeader && r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t.contentType === "application/json" ? r.setRequestHeader && r.setRequestHeader("Content-type", "application/json; charset=UTF-8") : r.setRequestHeader && r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
    } catch (u) {
        et.log(u)
    }
    r.send(t.data || null)
}

function fi(t, e) {
    var r = [];
    return t == null ? r : Array.prototype.map && t.map === Array.prototype.map ? t.map(e) : (I(t, function(n, i, a) {
        r.push(e(n, i, a))
    }), r)
}

function be(t) {
    var e = [];
    try {
        e = fi(atob(t).split(""), function(r) {
            return "%" + ("00" + r.charCodeAt(0).toString(16)).slice(-2)
        })
    } catch {
        e = []
    }
    try {
        return decodeURIComponent(e.join(""))
    } catch {
        return e.join("")
    }
}

function Je(t) {
    var e = "";
    try {
        e = btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(r, n) {
            return String.fromCharCode("0x" + n)
        }))
    } catch {
        e = t
    }
    return e
}
var ke = {
    get: function(t) {
        for (var e = t + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
            for (var i = r[n]; i.charAt(0) == " ";) i = i.substring(1, i.length);
            if (i.indexOf(e) == 0) return pe(i.substring(e.length, i.length))
        }
        return null
    },
    set: function(t, e, r, n, i, a, u) {
        var l = u,
            p = "",
            g = "",
            c = "";
        if ((r = r ? ? 73e3) !== 0) {
            var _ = new Date;
            String(r).slice(-1) === "s" ? _.setTime(_.getTime() + 1e3 * Number(String(r).slice(0, -1))) : _.setTime(_.getTime() + 24 * r * 60 * 60 * 1e3), p = "; expires=" + _.toGMTString()
        }

        function b(Tt) {
            return !!Tt && Tt.replace(/\r\n/g, "")
        }
        k(i) && i !== "" && (c = "; SameSite=" + i), a && (g = "; secure");
        var v = "",
            O = "",
            N = "";
        t && (v = b(t)), e && (O = b(e)), l && (N = b(l)), v && O && (document.cookie = v + "=" + encodeURIComponent(O) + p + "; path=/" + N + c + g)
    },
    remove: function(t, e) {
        this.set(t, "1", -1, e)
    },
    isSupport: function(t, e) {
        t = t || "cookie_support_test", e = e || "1";
        var r = this;
        return navigator.cookieEnabled && (r.set(t, e), r.get(t) === e && (r.remove(t), !0))
    }
};

function xr(t) {
    return I(Array.prototype.slice.call(arguments, 1), function(e) {
        for (var r in e) e[r] !== void 0 && t[r] === void 0 && (t[r] = e[r])
    }), t
}

function we(t) {
    var e = t;
    try {
        e = decodeURI(t)
    } catch {
        e = t
    }
    return e
}

function Ie(t) {
    return Object.prototype.toString.call(t) == "[object Date]"
}

function Ir(t) {
    function e(r) {
        return r < 10 ? "0" + r : r
    }
    return t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds()) + "." + e(t.getMilliseconds())
}

function gi(t) {
    return I(Array.prototype.slice.call(arguments, 1), function(e) {
        for (var r in e) e[r] !== void 0 && (f(e[r]) && f(t[r]) ? U(t[r], e[r]) : t[r] = e[r])
    }), t
}

function _i(t, e, r) {
    var n = Object.prototype.hasOwnProperty;
    if (t.filter) return t.filter(e);
    for (var i = [], a = 0; a < t.length; a++)
        if (n.call(t, a)) {
            var u = t[a];
            e.call(r, u, a, t) && i.push(u)
        }
    return i
}

function Xr(t, e) {
    e = e || "domain_test";
    var r = function(u) {
            return typeof u == "string" && u.match(/^[a-zA-Z0-9\u4e00-\u9fa5\-\.]+$/) ? u : ""
        }(t = t || location.hostname),
        n = r.split(".");
    if (E(n) && n.length >= 2 && !/^(\d+\.)+\d+$/.test(r)) {
        for (var i = "." + n.splice(n.length - 1, 1); n.length > 0;)
            if (i = "." + n.splice(n.length - 1, 1) + i, document.cookie = e + "=true; path=/; domain=" + i, document.cookie.indexOf(e + "=true") !== -1) {
                var a = new Date;
                return a.setTime(a.getTime() - 1e3), document.cookie = e + "=true; expires=" + a.toGMTString() + "; path=/; SameSite=Lax; domain=" + i, i
            }
    }
    return ""
}

function We(t) {
    if (!k(t)) return null;
    var e, r = t.split(">");
    return (e = function n(i) {
        var a, u = r.shift();
        if (!u) return i;
        try {
            a = function(l, p) {
                var g;
                if ((l = St(l)) === "body") return document.getElementsByTagName("body")[0];
                if (l.indexOf("#") === 0) l = l.slice(1), g = document.getElementById(l);
                else if (l.indexOf(":nth-of-type") > -1) {
                    var c = l.split(":nth-of-type");
                    if (!c[0] || !c[1]) return null;
                    var _ = c[0],
                        b = c[1].match(/\(([0-9]+)\)/);
                    if (!b || !b[1]) return null;
                    var v = Number(b[1]);
                    if (!(bt(p) && p.children && p.children.length > 0)) return null;
                    for (var O = p.children, N = 0; N < O.length; N++)
                        if (bt(O[N]) && O[N].tagName.toLowerCase() === _ && --v == 0) {
                            g = O[N];
                            break
                        }
                    if (v > 0) return null
                }
                return g || null
            }(u, i)
        } catch (l) {
            et.log(l)
        }
        return a && bt(a) ? n(a) : null
    }()) && bt(e) ? e : null
}

function hi(t, e) {
    var r = "",
        n = "";
    return t.textContent ? r = St(t.textContent) : t.innerText && (r = St(t.innerText)), r && (r = r.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)), n = r || "", e !== "input" && e !== "INPUT" || (n = t.value || ""), n
}

function xt(t, e) {
    e && typeof e == "string" || (e = "hostname解析异常");
    var r = null;
    try {
        r = $t(t).hostname
    } catch {
        et.log("getHostname传入的url参数不合法！")
    }
    return r || e
}

function Er() {
    try {
        var t = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
        return t && t[1] ? Number.parseInt(t[1], 10) : ""
    } catch {
        return ""
    }
}

function Se(t) {
    var e = {},
        r = t.split("?")[1] || "";
    return r && (e = er("?" + r)), e
}

function Mt(t, e) {
    var r = $t(t),
        n = r.searchParams.get(e) || "";
    if (!n) {
        var i = r.hash;
        i && (n = Se(i)[e] || "")
    }
    return n
}

function mn() {
    return window.matchMedia !== void 0 || window.msMatchMedia !== void 0
}

function Lr() {
    var t, e = {},
        r = navigator.userAgent.toLowerCase();
    return (t = r.match(/ qq\/([\d.]+)/)) ? e.qqBuildinBrowser = Number(t[1].split(".")[0]) : (t = r.match(/mqqbrowser\/([\d.]+)/)) ? e.qqBrowser = Number(t[1].split(".")[0]) : (t = r.match(/opera.([\d.]+)/)) ? e.opera = Number(t[1].split(".")[0]) : (t = r.match(/msie ([\d.]+)/)) ? e.ie = Number(t[1].split(".")[0]) : (t = r.match(/edge.([\d.]+)/)) ? e.edge = Number(t[1].split(".")[0]) : (t = r.match(/firefox\/([\d.]+)/)) ? e.firefox = Number(t[1].split(".")[0]) : (t = r.match(/chrome\/([\d.]+)/)) ? e.chrome = Number(t[1].split(".")[0]) : (t = r.match(/version\/([\d.]+).*safari/)) ? e.safari = Number(t[1].match(/^\d*.\d*/)) : (t = r.match(/trident\/([\d.]+)/)) && (e.ie = 11), e
}

function lt(t) {
    return k(t) ? we(t = St(t)) : we(location.href)
}

function ue(t) {
    return k(t) ? we(t = St(t)) : we(location.pathname)
}

function Ur(t, e) {
    return t.hasAttribute ? t.hasAttribute(e) : t.attributes ? !(!t.attributes[e] || !t.attributes[e].specified) : void 0
}

function Zr(t, e) {
    if (typeof e == "string") return Ur(t, e);
    if (E(e)) {
        for (var r = !1, n = 0; n < e.length; n++)
            if (Ur(t, e[n])) {
                r = !0;
                break
            }
        return r
    }
}

function mi(t) {
    if (typeof t != "string") return 0;
    var e = 0;
    if (t.length == 0) return e;
    for (var r = 0; r < t.length; r++) e = (e << 5) - e + t.charCodeAt(r), e &= e;
    return e
}

function Qr(t) {
    var e = 9007199254740992,
        r = -9007199254740992,
        n = 0;
    if (t.length > 0)
        for (var i = t.split(""), a = 0; a < i.length; a++) {
            var u = i[a].charCodeAt(),
                l = 31 * n + u;
            if (l > e)
                for (n = r + n;
                    (l = 31 * n + u) < r;) n = n / 2 + u;
            if (l < r)
                for (n = e + n;
                    (l = 31 * n + u) > e;) n = n / 2 + u;
            n = 31 * n + u
        }
    return n
}

function nt(t, e) {
    var r = t.indexOf;
    if (r) return r.call(t, e);
    for (var n = 0; n < t.length; n++)
        if (e === t[n]) return n;
    return -1
}
var ha = Object.prototype.hasOwnProperty;

function vn(t) {
    return !(!t || !ha.call(t, "callee"))
}

function vi(t) {
    return Object.prototype.toString.call(t) == "[object Boolean]"
}

function it(t) {
    if (f(t)) {
        for (var e in t)
            if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0
    }
    return !1
}

function yi(t) {
    return typeof t == "string" && (/^https?:\/\/.+/.test(t) !== !1 || (et.log("Invalid URL"), !1))
}

function bi() {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
}

function Ee(t) {
    try {
        JSON.parse(t)
    } catch {
        return !1
    }
    return !0
}

function It(t) {
    return Object.prototype.toString.call(t) == "[object Number]" && /[\d\.]+/.test(String(t))
}

function wi(t) {
    if (!f(t) || !k(t.callbackName)) return et.log("JSONP 请求缺少 callbackName"), !1;
    t.success = T(t.success) ? t.success : function() {}, t.error = T(t.error) ? t.error : function() {}, t.data = t.data || "";
    var e = document.createElement("script"),
        r = document.getElementsByTagName("head")[0],
        n = null,
        i = !1;
    if (e.defer = "defer", r.appendChild(e), It(t.timeout)) {
        var a = Math.min(t.timeout, 3e5);
        n = setTimeout(function() {
            if (i) return !1;
            t.error("timeout"), window[t.callbackName] = function() {
                et.log("call jsonp error")
            }, n = null, r.removeChild(e), i = !0
        }, a)
    }
    if (window[t.callbackName] = function() {
            clearTimeout(n), n = null, t.success.apply(null, arguments), window[t.callbackName] = function() {
                et.log("call jsonp error")
            }, r.removeChild(e)
        }, t.url.indexOf("?") > -1 ? t.url += "&callbackName=" + t.callbackName : t.url += "?callbackName=" + t.callbackName, f(t.data)) {
        var u = [];
        I(t.data, function(l, p) {
            u.push(p + "=" + l)
        }), t.data = u.join("&"), t.url += "&" + t.data
    }
    e.onerror = function(l) {
        if (i) return !1;
        window[t.callbackName] = function() {
            et.log("call jsonp error")
        }, clearTimeout(n), n = null, r.removeChild(e), t.error(l), i = !0
    }, e.src = encodeURI(t.url)
}

function Si(t) {
    ({
        visibleHandler: T(t.visible) ? t.visible : function() {},
        hiddenHandler: T(t.hidden) ? t.hidden : function() {},
        visibilityChange: null,
        hidden: null,
        isSupport: function() {
            return document[this.hidden] !== void 0
        },
        init: function() {
            document.hidden !== void 0 ? (this.hidden = "hidden", this.visibilityChange = "visibilitychange") : document.mozHidden !== void 0 ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : document.msHidden !== void 0 ? (this.hidden = "msHidden", this.visibilityChange = "msvisibilitychange") : document.webkitHidden !== void 0 && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), this.listen()
        },
        listen: function() {
            if (this.isSupport()) {
                var e = this;
                le(document, this.visibilityChange, function() {
                    document[e.hidden] ? e.hiddenHandler() : e.visibleHandler()
                }, 1)
            } else le(window, "focus", this.visibleHandler), le(window, "blur", this.hiddenHandler)
        }
    }).init()
}

function lr(t) {
    t = U({
        success: function() {},
        error: function() {},
        appendCall: function(r) {
            document.getElementsByTagName("head")[0].appendChild(r)
        }
    }, t);
    var e = null;
    t.type === "css" && ((e = document.createElement("link")).rel = "stylesheet", e.href = t.url), t.type === "js" && ((e = document.createElement("script")).async = "async", e.setAttribute("charset", "UTF-8"), e.src = t.url, e.type = "text/javascript"), e.onload = e.onreadystatechange = function() {
        this.readyState && this.readyState !== "loaded" && this.readyState !== "complete" || (t.success(), e.onload = e.onreadystatechange = null)
    }, e.onerror = function() {
        t.error(), e.onerror = null
    }, t.appendCall(e)
}

function ki(t, e) {
    e = typeof e == "number" ? e : 13;
    for (var r = (t = String(t)).split(""), n = 0, i = r.length; n < i; n++) r[n].charCodeAt(0) < 126 && (r[n] = String.fromCharCode((r[n].charCodeAt(0) + e) % 126));
    return r.join("")
}

function Pi(t) {
    return ki(t = String(t), 113)
}

function Yr(t) {
    (f(t) || E(t)) && I(t, function(e, r) {
        f(e) || E(e) ? Yr(t[r]) : Ie(e) && (t[r] = Ir(e))
    })
}
var me = {
    isSupport: function() {
        var t = !0,
            e = "testIsSupportStorage";
        try {
            sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem("__session_storage_support__", e), sessionStorage.removeItem("__session_storage_support__", e), t = !0) : t = !1
        } catch {
            t = !1
        }
        return t
    }
};

function ze(t) {
    var e = document.createElement("style");
    e.type = "text/css";
    try {
        e.appendChild(document.createTextNode(t))
    } catch {
        e.styleSheet.cssText = t
    }
    var r = document.getElementsByTagName("head")[0],
        n = document.getElementsByTagName("script")[0];
    r ? r.children.length ? r.insertBefore(e, r.children[0]) : r.appendChild(e) : n.parentNode.insertBefore(e, n)
}

function yn(t) {
    var e = [];
    return t == null || I(t, function(r) {
        e[e.length] = r
    }), e
}

function Xe(t) {
    for (var e, r = [], n = {}, i = 0; i < t.length; i++)(e = t[i]) in n || (n[e] = !0, r.push(e));
    return r
}
var ma = {
        "+": "-",
        "/": "_",
        "=": "."
    },
    va = {
        "-": "+",
        _: "/",
        ".": "="
    },
    ya = {
        encode: function(t) {
            return t.replace(/[+\/=]/g, function(e) {
                return ma[e]
            })
        },
        decode: function(t) {
            return t.replace(/[-_.]/g, function(e) {
                return va[e]
            })
        },
        trim: function(t) {
            return t.replace(/[.=]{1,2}$/, "")
        },
        isBase64: function(t) {
            return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(t)
        },
        isUrlSafeBase64: function(t) {
            return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(t)
        }
    },
    ba = {
        __proto__: null,
        ConcurrentStorage: tr,
        EventEmitter: Pt,
        URL: $t,
        UUID: Gt,
        addEvent: le,
        addHashEvent: ci,
        ajax: di,
        base64Decode: be,
        base64Encode: Je,
        bindReady: function(t, e) {
            e = e || window;
            var r = !1,
                n = !0,
                i = e.document,
                a = i.documentElement,
                u = i.addEventListener,
                l = u ? "addEventListener" : "attachEvent",
                p = u ? "removeEventListener" : "detachEvent",
                g = u ? "" : "on",
                c = function(b) {
                    b.type == "readystatechange" && i.readyState != "complete" || ((b.type == "load" ? e : i)[p](g + b.type, c, !1), !r && (r = !0) && t.call(e, b.type || b))
                },
                _ = function() {
                    try {
                        a.doScroll("left")
                    } catch {
                        return void setTimeout(_, 50)
                    }
                    c("poll")
                };
            if (i.readyState == "complete") t.call(e, "lazy");
            else {
                if (!u && a.doScroll) {
                    try {
                        n = !e.frameElement
                    } catch (b) {
                        et.log(b)
                    }
                    n && _()
                }
                i[l](g + "DOMContentLoaded", c, !1), i[l](g + "readystatechange", c, !1), e[l](g + "load", c, !1)
            }
        },
        cookie: ke,
        coverExtend: xr,
        decodeURI: we,
        decodeURIComponent: pe,
        dfmapping: function(t) {
            var e = "t6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8",
                r = {},
                n = 0;
            for (n = 0; n < 62; n++) r[e.charAt(n)] = e.charAt(61 - n);
            var i = "";
            for (n = 0; n < t.length; n++) t.charAt(n) in r ? i += r[t.charAt(n)] : i += t.charAt(n);
            return i
        },
        each: I,
        encodeDates: function t(e) {
            return I(e, function(r, n) {
                Ie(r) ? e[n] = Ir(r) : f(r) && (e[n] = t(r))
            }), e
        },
        extend: U,
        extend2Lev: gi,
        filter: _i,
        formatDate: Ir,
        formatJsonString: function(t) {
            try {
                return JSON.stringify(t, null, "  ")
            } catch {
                return JSON.stringify(t)
            }
        },
        getCookieTopLevelDomain: Xr,
        getDomBySelector: We,
        getElementContent: hi,
        getHostname: xt,
        getIOSVersion: Er,
        getQueryParam: Mt,
        getQueryParamsFromUrl: Se,
        getRandom: yt,
        getRandomBasic: li,
        getScreenOrientation: function() {
            var t = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type,
                e = "未取到值";
            if (t) e = t.indexOf("landscape") > -1 ? "landscape" : "portrait";
            else if (mn()) {
                var r = window.matchMedia || window.msMatchMedia;
                r("(orientation: landscape)").matches ? e = "landscape" : r("(orientation: portrait)").matches && (e = "portrait")
            }
            return e
        },
        getUA: Lr,
        getURL: lt,
        getURLPath: ue,
        getURLSearchParams: er,
        hasAttribute: Ur,
        hasAttributes: Zr,
        hashCode: mi,
        hashCode53: Qr,
        indexOf: nt,
        inherit: function(t, e) {
            return t.prototype = new e, t.prototype.constructor = t, t.superclass = e.prototype, t
        },
        isArguments: vn,
        isArray: E,
        isBoolean: vi,
        isDate: Ie,
        isElement: bt,
        isEmptyObject: it,
        isFunction: T,
        isHttpUrl: yi,
        isIOS: bi,
        isJSONString: Ee,
        isNumber: It,
        isObject: f,
        isString: k,
        isSupportBeaconSend: function() {
            var t = !1;
            if (typeof navigator != "object" || typeof navigator.sendBeacon != "function") return t;
            var e = Lr(),
                r = navigator.userAgent.toLowerCase();
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
                var n = (r.match(/os [\d._]*/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".").split(".");
                e.safari === void 0 && (e.safari = n[0]), n[0] && (e.qqBuildinBrowser || e.qqBrowser) ? t = !1 : n[0] && n[0] < 13 ? (e.chrome > 41 || e.firefox > 30 || e.opera > 25 || e.safari > 12) && (t = !0) : (e.chrome > 41 || e.firefox > 30 || e.opera > 25 || e.safari > 11.3) && (t = !0)
            } else(e.chrome > 38 || e.edge > 13 || e.firefox > 30 || e.opera > 25 || e.safari > 11) && (t = !0);
            return t
        },
        isSupportCors: function() {
            return window.XMLHttpRequest !== void 0 && ("withCredentials" in new XMLHttpRequest || typeof XDomainRequest < "u")
        },
        isUndefined: At,
        jsonp: wi,
        listenPageState: Si,
        loadScript: lr,
        localStorage: R,
        logger: et,
        map: fi,
        mediaQueriesSupported: mn,
        now: ht,
        removeScriptProtocol: function(t) {
            if (typeof t != "string") return "";
            for (var e = /^\s*javascript/i; e.test(t);) t = t.replace(e, "");
            return t
        },
        rot13defs: Pi,
        rot13obfs: ki,
        ry: mt,
        safeJSONParse: tt,
        searchObjDate: Yr,
        sessionStorage: me,
        setCssStyle: ze,
        strToUnicode: function(t) {
            if (typeof t != "string") return et.log("转换unicode错误", t), t;
            for (var e = "", r = 0; r < t.length; r++) e += "\\" + t.charCodeAt(r).toString(16);
            return e
        },
        throttle: function(t, e, r) {
            var n, i, a, u = null,
                l = 0;
            r || (r = {});
            var p = function() {
                l = r.leading === !1 ? 0 : ht(), u = null, a = t.apply(n, i), u || (n = i = null)
            };
            return function() {
                var g = ht();
                l || r.leading !== !1 || (l = g);
                var c = e - (g - l);
                return n = this, i = arguments, c <= 0 || c > e ? (u && (clearTimeout(u), u = null), l = g, a = t.apply(n, i), u || (n = i = null)) : u || r.trailing === !1 || (u = setTimeout(p, c)), a
            }
        },
        toArray: function(t) {
            return t ? t.toArray ? t.toArray() : E(t) || vn(t) ? Array.prototype.slice.call(t) : yn(t) : []
        },
        trim: St,
        unique: Xe,
        urlParse: zr,
        urlSafeBase64: ya,
        values: yn,
        xhr: pi
    },
    Fe = [],
    de = {
        appendWriter: function(t) {
            Fe.push(t)
        },
        msg: function() {
            var t = {
                module: "",
                level: "log",
                brand: "web-sdk",
                content: null
            };
            return t.content = Array.prototype.slice.call(arguments), {
                module: function(e) {
                    return k(e) && (t.module = e), this
                },
                level: function(e) {
                    return k(e) && (t.level = e), this
                },
                brand: function(e) {
                    return k(e) && (t.brand = e), this
                },
                log: function() {
                    if (t.content && t.content.length) {
                        for (var e = 0; e < Fe.length; e++)
                            if (typeof Fe[e] == "function") try {
                                Fe[e].call(null, t)
                            } catch {}
                    }
                    return this
                }
            }
        }
    };

function Et() {
    de.msg.apply(de, arguments).log()
}

function $() {
    de.msg.apply(de, arguments).level("warn").log()
}

function L() {
    de.msg.apply(de, arguments).level("error").log()
}
var S = {},
    Ze = {
        preset_properties: {
            search_keyword_baidu: !1,
            latest_utm: !0,
            latest_traffic_source_type: !0,
            latest_search_keyword: !0,
            latest_referrer: !0,
            latest_referrer_host: !1,
            latest_landing_page: !1,
            latest_wx_ad_click_id: void 0,
            url: !0,
            title: !0
        },
        encrypt_cookie: !1,
        enc_cookie: !1,
        img_use_crossorigin: !1,
        name: "sa",
        max_referrer_string_length: 200,
        max_string_length: 500,
        max_id_length: 255,
        max_key_length: 100,
        cross_subdomain: !0,
        show_log: !1,
        is_debug: !1,
        source_channel: [],
        sdk_id: "",
        vtrack_ignore: {},
        auto_init: !0,
        is_track_single_page: !1,
        is_single_page: !1,
        batch_send: !1,
        source_type: {},
        callback_timeout: 200,
        datasend_timeout: 8e3,
        is_track_device_id: !1,
        ignore_oom: !0,
        app_js_bridge: !1,
        white_list: {}
    };
Ze.white_list[location.host] = $t(location.href).hostname;
var Ci = "utm_source utm_medium utm_campaign utm_content utm_term",
    ur = "1.26.3",
    ji = "sensorsdata_domain_test",
    Le = "$identity_login_id";

function Gr(t) {
    var e = S.current_domain;
    switch (typeof e) {
        case "function":
            var r = e();
            return r === "" || St(r) === "" ? "url解析失败" : r.indexOf(".") !== -1 ? r : "url解析失败";
        case "string":
            return e === "" || St(e) === "" ? "url解析失败" : e.indexOf(".") !== -1 ? e : "url解析失败";
        default:
            var n = Xr(null, ji);
            return t === "" || n === "" ? "url解析失败" : n
    }
}
var ct = {
    get: function(t) {
        return ke.get(t)
    },
    set: function(t, e, r, n) {
        var i = "";
        if (n = At(n) ? S.cross_subdomain : n) {
            var a = Gr(location.href);
            a === "url解析失败" && (a = ""), i = a ? "; domain=" + a : ""
        }
        return ke.set(t, e, r, n, S.set_cookie_samesite, S.is_secure_cookie, i)
    },
    remove: function(t, e) {
        return e = At(e) ? S.cross_subdomain : e, ke.remove(t, e)
    },
    isSupport: function(t, e) {
        return t = t || "sajssdk_2015_cookie_access_test", e = e || "1", ke.isSupport(t, e)
    }
};

function Ue() {
    var t = document.referrer;
    if (!t) return !1;
    try {
        var e = $t(t).hostname;
        return e && e.substring(e.length - 9) === "baidu.com"
    } catch {
        return !1
    }
}
var Re = {
    data: {},
    id: function() {
        return this.data.id || (this.data.id = Ni()), this.data.id
    },
    type: function() {
        return this.data.type || (this.data.type = Oi()), this.data.type
    }
};

function Oi() {
    var t = Se(document.referrer);
    if (it(t) || !t.eqid) {
        var e = Se(location.href);
        return t.ck || e.utm_source ? "baidu_sem_keyword_id" : "baidu_other_keyword_id"
    }
    return "baidu_seo_keyword_id"
}

function Ni() {
    var t = Se(document.referrer);
    return it(t) || !t.eqid ? Gt().replace(/-/g, "") : t.eqid
}

function Zt(t, e) {
    return k(t = t || document.referrer) ? ((t = we(t = St(t))).indexOf("https://www.baidu.com/") !== 0 || e || (t = t.split("?")[0]), k(t = t.slice(0, S.max_referrer_string_length)) ? t : "") : "取值异常_referrer异常_" + String(t)
}

function rr(t) {
    if ((t = t || document.referrer) === "") return !0;
    var e = Xr(null, ji);
    return xt(t).indexOf(e) === -1 && e !== ""
}

function Oe(t, e) {
    t = t || document.referrer;
    var r = S.source_type.keyword;
    if (document && k(t)) {
        if (t.indexOf("http") === 0) {
            var n = Ti(t),
                i = Se(t);
            if (it(i)) return S.preset_properties.search_keyword_baidu && Ue() ? void 0 : "未取到值";
            var a = null;
            for (var u in r)
                if (n === u && f(i)) {
                    if (E(a = r[u]))
                        for (u = 0; u < a.length; u++) {
                            var l = i[a[u]];
                            if (l) return e ? {
                                active: l
                            } : l
                        } else if (i[a]) return e ? {
                            active: i[a]
                        } : i[a]
                }
            return S.preset_properties.search_keyword_baidu && Ue() ? void 0 : "未取到值"
        }
        return t === "" ? "未取到值_直接打开" : "未取到值_非http的url"
    }
    return "取值异常_referrer异常_" + String(t)
}

function Ti(t) {
    var e = xt(t);
    if (!e || e === "hostname解析异常") return "";
    var r = {
        baidu: [/^.*\.baidu\.com$/],
        bing: [/^.*\.bing\.com$/],
        google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
        sm: [/^m\.sm\.cn$/],
        so: [/^.+\.so\.com$/],
        sogou: [/^.*\.sogou\.com$/],
        yahoo: [/^.*\.yahoo\.com$/]
    };
    for (var n in r)
        for (var i = r[n], a = 0, u = i.length; a < u; a++)
            if (i[a].test(e)) return n;
    return "未知搜索引擎"
}
var te = {
        distinct_id: function() {},
        jssdkDebug: function() {},
        _sendDebug: function(t) {},
        apph5: function(t) {
            var e = "app_h5打通失败-",
                r = {
                    1: e + "use_app_track为false",
                    2: e + "Android或者iOS，没有暴露相应方法",
                    3.1: e + "Android校验server_url失败",
                    3.2: e + "iOS校验server_url失败",
                    4.1: e + "H5 校验 iOS server_url 失败",
                    4.2: e + "H5 校验 Android server_url 失败"
                },
                n = t.output,
                i = t.step,
                a = t.data || "";
            n !== "all" && n !== "console" || Et(r[i]), (n === "all" || n === "code") && f(S.is_debug) && S.is_debug.apph5 && (a.type && a.type.slice(0, 7) === "profile" || (a.properties._jssdk_debug_info = "apph5-" + String(i)))
        },
        defineMode: function(t) {
            var e = {
                1: {
                    title: "当前页面无法进行可视化全埋点",
                    message: "App SDK 与 Web JS SDK 没有进行打通，请联系贵方技术人员修正 App SDK 的配置，详细信息请查看文档。",
                    link_text: "配置文档",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                },
                2: {
                    title: "当前页面无法进行可视化全埋点",
                    message: "App SDK 与 Web JS SDK 没有进行打通，请联系贵方技术人员修正 Web JS SDK 的配置，详细信息请查看文档。",
                    link_text: "配置文档",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                },
                3: {
                    title: "当前页面无法进行可视化全埋点",
                    message: "Web JS SDK 没有开启全埋点配置，请联系贵方工作人员修正 SDK 的配置，详细信息请查看文档。",
                    link_text: "配置文档",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_web_all-1573964.html"
                },
                4: {
                    title: "当前页面无法进行可视化全埋点",
                    message: "Web JS SDK 配置的数据校验地址与 App SDK 配置的数据校验地址不一致，请联系贵方工作人员修正 SDK 的配置，详细信息请查看文档。",
                    link_text: "配置文档",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                }
            };
            return !(!t || !e[t]) && e[t]
        },
        protocol: {
            protocolIsSame: function(t, e) {
                try {
                    if ($t(t).protocol !== $t(e).protocol) return !1
                } catch {
                    return $("不支持 _.URL 方法"), !1
                }
                return !0
            },
            serverUrl: function() {
                k(S.server_url) && S.server_url !== "" && !this.protocolIsSame(S.server_url, location.href) && $(`SDK 检测到您的数据发送地址和当前页面地址的协议不一致，建议您修改成一致的协议。
因为：1、https 下面发送 http 的图片请求会失败。2、http 页面使用 https + ajax 方式发数据，在 ie9 及以下会丢失数据。`)
            },
            ajax: function(t) {
                if (t === S.server_url) return !1;
                k(t) && t !== "" && !this.protocolIsSame(t, location.href) && $("SDK 检测到您的数据发送地址和当前页面地址的协议不一致，建议您修改成一致的协议。因为 http 页面使用 https + ajax 方式发数据，在 ie9 及以下会丢失数据。")
            }
        }
    },
    H = {
        initPage: function() {
            var t = Zt(),
                e = lt(),
                r = Gr(e);
            r || te.jssdkDebug("url_domain异常_" + e + "_" + r), this.pageProp = {
                referrer: t,
                referrer_host: t ? xt(t) : "",
                url: e,
                url_host: xt(e, "url_host取值异常"),
                url_domain: r
            }
        },
        pageProp: {},
        campaignParams: function() {
            return s.kit.getUtmData()
        },
        campaignParamsStandard: function(t, e) {
            t = t || "", e = e || "";
            var r = H.campaignParams(),
                n = {},
                i = {};
            return I(r, function(a, u, l) {
                (" " + Ci + " ").indexOf(" " + u + " ") !== -1 ? n[t + u] = l[u] : i[e + u] = l[u]
            }), {
                $utms: n,
                otherUtms: i
            }
        },
        properties: function() {
            var t = window.innerHeight || document.documentElement.clientHeight || document.body && document.body.clientHeight || 0,
                e = window.innerWidth || document.documentElement.clientWidth || document.body && document.body.clientWidth || 0;
            return {
                $timezone_offset: new Date().getTimezoneOffset(),
                $screen_height: Number(screen.height) || 0,
                $screen_width: Number(screen.width) || 0,
                $viewport_height: t,
                $viewport_width: e,
                $lib: "js",
                $lib_version: ur
            }
        },
        currentProps: {},
        register: function(t) {
            U(H.currentProps, t)
        }
    };

function Di(t, e) {
    var r = "";
    if (S.cross_subdomain === !1) {
        try {
            if (!e) {
                var n = location.host;
                At(s.para.white_list[n]) || (r = s.para.white_list[n])
            }
        } catch (i) {
            L(i)
        }
        r = typeof r == "string" && r !== "" ? "sajssdk_2015_" + S.sdk_id + t + "_" + r.replace(/\./g, "_") : "sajssdk_2015_root_" + S.sdk_id + t
    } else r = "sajssdk_2015_cross_" + S.sdk_id + t;
    return r
}

function nr() {
    return ct.isSupport() ? ct.get("sensorsdata_is_new_user") !== null || ct.get(Di("new_user")) !== null : ir.get(ir.getNewUserFlagMemoryKey("new_user")) !== null
}
ct.getNewUser = nr;
var ir = {
        data: {},
        get: function(t) {
            var e = this.data[t];
            return e === void 0 ? null : e._expirationTimestamp_ !== void 0 ? new Date().getTime() > e._expirationTimestamp_ ? null : e.value : e
        },
        set: function(t, e, r) {
            if (r) {
                var n = new Date;
                e = {
                    value: e,
                    _expirationTimestamp_: String(r).slice(-1) === "s" ? n.getTime() + 1e3 * Number(String(r).slice(0, -1)) : n.getTime() + 24 * r * 60 * 60 * 1e3
                }
            }
            this.data[t] = e
        },
        getNewUserFlagMemoryKey: function(t) {
            return "sajssdk_2015_" + S.sdk_id + t
        }
    },
    He = {
        checkIsAddSign: function(t) {
            t.type === "track" && (nr() ? t.properties.$is_first_day = !0 : t.properties.$is_first_day = !1)
        },
        is_first_visit_time: !1,
        is_page_first_visited: !1,
        checkIsFirstTime: function(t) {
            t.type === "track" && t.event === "$pageview" && (this.is_first_visit_time ? (t.properties.$is_first_time = !0, this.is_first_visit_time = !1) : t.properties.$is_first_time = !1)
        },
        setDeviceId: function(t, e) {
            var r = null,
                n = ct.get("sensorsdata2015jssdkcross" + s.para.sdk_id),
                i = {};
            (n = s.kit.userDecryptIfNeeded(n)) != null && Ee(n) && (i = JSON.parse(n)).$device_id && (r = i.$device_id), r = r || t, s.para.cross_subdomain === !0 ? e.set("$device_id", r) : (i.$device_id = r, i = JSON.stringify(i), s.para.encrypt_cookie && (i = s.kit.userEncrypt(i)), ct.set("sensorsdata2015jssdkcross" + s.para.sdk_id, i, null, !0)), s.para.is_track_device_id && (H.currentProps.$device_id = r)
        },
        storeInitCheck: function() {
            if (s.is_first_visitor) {
                var t = new Date,
                    e = {
                        h: 23 - t.getHours(),
                        m: 59 - t.getMinutes(),
                        s: 59 - t.getSeconds()
                    };
                ct.isSupport() ? ct.set(Di("new_user"), "1", 3600 * e.h + 60 * e.m + e.s + "s") : ir.set(ir.getNewUserFlagMemoryKey("new_user"), "1", 3600 * e.h + 60 * e.m + e.s + "s"), this.is_first_visit_time = !0, this.is_page_first_visited = !0
            } else nr() || (this.checkIsAddSign = function(r) {
                r.type === "track" && (r.properties.$is_first_day = !1)
            }), this.checkIsFirstTime = function(r) {
                r.type === "track" && r.event === "$pageview" && (r.properties.$is_first_time = !1)
            }
        }
    };

function ie(t, e, r) {
    var n = !(!f(S.heatmap) || !S.heatmap.useCapture);
    return f(S.heatmap) && At(S.heatmap.useCapture) && e === "click" && (n = !0), le(t, e, r, n)
}
var tn = function() {
    this._events = [], this.pendingEvents = []
};

function en() {
    function t(l, p) {
        for (var g = 0; g < l.length; g++)
            if (p.split("?")[0].indexOf(l[g]) !== -1) return !0
    }
    var e = "(" + S.source_type.utm.join("|") + ")\\=[^&]+",
        r = S.source_type.search,
        n = S.source_type.social,
        i = document.referrer || "",
        a = H.pageProp.url;
    if (a) {
        var u = a.match(new RegExp(e));
        return u && u[0] ? "付费广告流量" : t(r, i) ? "自然搜索流量" : t(n, i) ? "社交网站流量" : i === "" ? "直接流量" : "引荐流量"
    }
    return "获取url异常"
}

function Ai(t) {
    var e = Mt(t, "gdt_vid"),
        r = Mt(t, "hash_key"),
        n = Mt(t, "callbacks"),
        i = {
            click_id: "",
            hash_key: "",
            callbacks: ""
        };
    return k(e) && e.length && (i.click_id = e.length == 16 || e.length == 18 ? e : "参数解析不合法", k(r) && r.length && (i.hash_key = r), k(n) && n.length && (i.callbacks = n)), i
}

function $i(t) {
    var e = t.properties,
        r = JSON.parse(JSON.stringify(t));
    f(e) && I(e, function(n, i) {
        if (T(n)) try {
            e[i] = n(r), T(e[i]) && ($("您的属性- " + i + " 格式不满足要求，我们已经将其删除"), delete e[i])
        } catch {
            delete e[i], $("您的属性- " + i + " 抛出了异常，我们已经将其删除")
        }
    })
}

function xi(t) {
    if (f(t) && t.$option) {
        var e = t.$option;
        return delete t.$option, e
    }
    return {}
}

function Ii(t) {
    var e = {};
    return I(t, function(r, n) {
        r != null && (e[n] = r)
    }), e
}

function Ei(t) {
    if (!bt(t.target)) return !1;
    var e = t.target,
        r = e.tagName.toLowerCase(),
        n = {};
    return n.$element_type = r, n.$element_name = e.getAttribute("name"), n.$element_id = e.getAttribute("id"), n.$element_class_name = k(e.className) ? e.className : null, n.$element_target_url = e.getAttribute("href"), n.$element_content = ar(e, r), (n = Ii(n)).$url = lt(), n.$url_path = ue(), n.$title = document.title, n
}

function ar(t, e) {
    return k(e) && e.toLowerCase() === "input" ? function(r) {
        var n = S.heatmap && T(S.heatmap.collect_input) && S.heatmap.collect_input(r);
        return (r.type === "button" || r.type === "submit" || n) && r.value || ""
    }(t) : hi(t, e)
}

function rn(t) {
    return te.protocol.ajax(t.url), di(t)
}

function Li(t) {
    if (typeof t == "string" && (t = St(t)) && (t.slice(0, 3) === "://" ? t = location.protocol.slice(0, -1) + t : t.slice(0, 2) === "//" ? t = location.protocol + t : t.slice(0, 4) !== "http" && (t = "")), E(t) && t.length)
        for (var e = 0; e < t.length; e++) /sa\.gif[^\/]*$/.test(t[e]) || (t[e] = t[e].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
    else /sa\.gif[^\/]*$/.test(t) || typeof t != "string" || (t = t.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
    return t
}

function Ui(t) {
    k(t) || (t = JSON.stringify(t));
    var e = Je(t),
        r = "crc=" + mi(e);
    return "data=" + encodeURIComponent(e) + "&ext=" + encodeURIComponent(r)
}
tn.prototype = {
    emit: function(t) {
        var e = [].slice.call(arguments, 1);
        I(this._events, function(r) {
            r.type === t && r.callback.apply(r.context, e)
        }), this.pendingEvents.push({
            type: t,
            data: e
        }), this.pendingEvents.length > 20 && this.pendingEvents.shift()
    },
    on: function(t, e, r, n) {
        T(e) && (this._events.push({
            type: t,
            callback: e,
            context: r || this
        }), n = n !== !1, this.pendingEvents.length > 0 && n && I(this.pendingEvents, function(i) {
            i.type === t && e.apply(r, i.data)
        }))
    },
    tempAdd: function(t, e) {
        if (e && t) return this.emit(t, e)
    },
    isReady: function() {}
};
var W = {},
    Rr = new Pt;

function Ri(t, e) {
    var r = [];
    typeof t == "string" && t in W.EVENT_LIST && (r = W.EVENT_LIST[t], W[r[0]].on(r[1], e))
}
W.spa = Rr, W.sdk = new Pt, W.data = new Pt, W.initSystemEvent = function() {
    (function(t) {
        var e, r = location.href,
            n = window.history.pushState,
            i = window.history.replaceState;
        T(window.history.pushState) && (window.history.pushState = function() {
            n.apply(window.history, arguments), t(r), r = location.href
        }), T(window.history.replaceState) && (window.history.replaceState = function() {
            i.apply(window.history, arguments), t(r), r = location.href
        }), e = window.document.documentMode ? "hashchange" : n ? "popstate" : "hashchange", le(window, e, function() {
            t(r), r = location.href
        })
    })(function(t) {
        Rr.emit("switch", t)
    })
}, W.EVENT_LIST = {
    spaSwitch: ["spa", "switch"],
    sdkBeforeInit: ["sdk", "beforeInit"],
    sdkInitPara: ["sdk", "initPara"],
    sdkAfterInitPara: ["sdk", "afterInitPara"],
    sdkInitAPI: ["sdk", "initAPI"],
    sdkAfterInitAPI: ["sdk", "afterInitAPI"],
    sdkAfterInit: ["sdk", "afterInit"],
    sdkReady: ["sdk", "ready"],
    dataSendSuccess: ["data", "sendSuccess"],
    dataSendFail: ["data", "sendFail"]
};
var Hr = function(t) {
    this.callback = t.callback, this.server_url = t.server_url, this.data = t.data, this.origin_data = t.origin_data
};
Hr.prototype.start = function() {
    var t = this,
        e = new Date;
    rn({
        url: this.server_url,
        type: "POST",
        data: t.data,
        credentials: !1,
        timeout: S.datasend_timeout,
        cors: !0,
        success: function(r, n) {
            W.data.emit("sendSuccess", {
                status: String(n),
                resText: r,
                type: "ajax_single",
                timeout_config: S.datasend_timeout,
                request_timeout: new Date - e,
                data: t.origin_data
            }), t.end()
        },
        error: function(r, n) {
            W.data.emit("sendFail", {
                status: String(n),
                resText: r,
                type: "ajax_single",
                timeout_config: S.datasend_timeout,
                request_timeout: new Date - e,
                data: t.origin_data
            }), t.end()
        }
    })
}, Hr.prototype.end = function() {
    if (this.callback) {
        if (Et("warning: sdk callback is deprecated."), !T(this.callback)) return void Et("error: sdk callback must be function.");
        this.callback()
    }
};
var bn = "sawebjssdk-",
    mr = "tab-sawebjssdk-";

function Hi() {
    this.sendTimeStamp = 0, this.timer = null, this.serverUrl = "", this.hasTabStorage = !1
}
Hi.prototype = {
    batchInterval: function() {
        this.serverUrl === "" && this.getServerUrl(), this.hasTabStorage || (this.generateTabStorage(), this.hasTabStorage = !0);
        var t = this;
        t.timer = setTimeout(function() {
            t.updateExpireTime(), t.recycle(), t.send(), clearTimeout(t.timer), t.batchInterval()
        }, S.batch_send.send_interval)
    },
    getServerUrl: function() {
        if (!(k(S.server_url) && S.server_url !== "" || E(S.server_url) && S.server_url.length)) return L("当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！");
        this.serverUrl = E(S.server_url) ? S.server_url[0] : S.server_url
    },
    send: function() {
        if (this.sendTimeStamp && ht() - this.sendTimeStamp < S.batch_send.send_interval) return !1;
        var t = R.get(this.tabKey);
        if (t) {
            this.sendTimeStamp = ht();
            var e = Xe((t = tt(t) || this.generateTabStorageVal()).data);
            if (e.length) {
                for (var r = [], n = 0; n < e.length; n++) {
                    var i = s.store.readObjectVal(e[n]);
                    i && (i._flush_time = new Date().getTime(), r.push(i))
                }
                r.length && this.request(r, t.data)
            }
        }
    },
    updateExpireTime: function() {
        var t = R.get(this.tabKey);
        t && ((t = tt(t) || this.generateTabStorageVal()).expireTime = ht() + 2 * S.batch_send.send_interval, t.serverUrl = this.serverUrl, R.set(this.tabKey, JSON.stringify(t)))
    },
    request: function(t, e) {
        var r = this,
            n = new Date;
        rn({
            url: this.serverUrl,
            type: "POST",
            data: "data_list=" + encodeURIComponent(Je(JSON.stringify(t))),
            credentials: !1,
            timeout: S.batch_send.datasend_timeout,
            cors: !0,
            success: function(i, a) {
                W.data.emit("sendSuccess", {
                    status: String(a),
                    resText: i,
                    type: "ajax_batch",
                    timeout_config: S.batch_send.datasend_timeout,
                    request_timeout: new Date - n,
                    data: t
                }), r.remove(e), r.sendTimeStamp = 0
            },
            error: function(i, a) {
                W.data.emit("sendFail", {
                    status: String(a),
                    resText: i,
                    type: "ajax_batch",
                    timeout_config: S.batch_send.datasend_timeout,
                    request_timeout: new Date - n,
                    data: t
                }), r.sendTimeStamp = 0
            }
        })
    },
    remove: function(t) {
        var e = R.get(this.tabKey);
        if (e) {
            for (var r = (tt(e) || this.generateTabStorageVal()).data, n = 0; n < t.length; n++) {
                var i = nt(r, t[n]);
                i > -1 && r.splice(i, 1), R.remove(t[n])
            }
            r = Xe(r), R.set(this.tabKey, JSON.stringify(this.generateTabStorageVal(r)))
        }
    },
    add: function(t) {
        var e = bn + String(yt()),
            r = R.get(this.tabKey);
        r === null ? (this.tabKey = mr + String(yt()), r = this.generateTabStorageVal()) : r = tt(r) || this.generateTabStorageVal(), r.data.push(e), r.expireTime = ht() + 2 * S.batch_send.send_interval, R.set(this.tabKey, JSON.stringify(r)), s.store.saveObjectVal(e, t), t.type !== "track_signup" && t.event !== "$pageview" || this.sendImmediately()
    },
    generateTabStorage: function() {
        this.tabKey = mr + String(yt()), R.set(this.tabKey, JSON.stringify(this.generateTabStorageVal()))
    },
    generateTabStorageVal: function(t) {
        return {
            data: t = t || [],
            expireTime: ht() + 2 * S.batch_send.send_interval,
            serverUrl: this.serverUrl
        }
    },
    sendImmediately: function() {
        this.send()
    },
    recycle: function() {
        for (var t = {}, e = 0; e < localStorage.length; e++) {
            var r = localStorage.key(e),
                n = this;
            if (r.indexOf(mr) === 0) {
                for (var i = tt(R.get(r)) || this.generateTabStorageVal(), a = 0; a < i.data.length; a++) t[i.data[a]] = !0;
                r !== n.tabKey && ht() > i.expireTime && this.serverUrl === i.serverUrl && new tr("sajssdk-lock-get-").get(r, 1e4, 1e3, function(g) {
                    if (g) {
                        R.get(n.tabKey) === null && n.generateTabStorage();
                        var c = tt(g) || n.generateTabStorageVal(),
                            _ = tt(R.get(n.tabKey)) || n.generateTabStorageVal();
                        _.data = Xe(_.data.concat(c.data)), R.set(n.tabKey, JSON.stringify(_))
                    }
                })
            } else if (r.indexOf("sajssdk-lock-get-") === 0) {
                var u = tt(R.get(r)) || {
                    expireTime: 0
                };
                ht() - u.expireTime > 1e4 && R.remove(r)
            }
        }
        for (var l = 0; l < localStorage.length; l++) {
            var p = localStorage.key(l);
            p.indexOf(bn) !== 0 || t[p] || R.remove(p)
        }
    }
};
var Br = function(t) {
    this.callback = t.callback, this.server_url = t.server_url, this.data = t.data
};
Br.prototype.start = function() {
    var t = this;
    typeof navigator == "object" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(this.server_url, this.data), setTimeout(function() {
        t.end()
    }, 40)
}, Br.prototype.end = function() {
    if (this.callback) {
        if (Et("warning: sdk callback is deprecated."), !T(this.callback)) return void Et("error: sdk callback must be function.");
        this.callback()
    }
};
var Qe = function(t) {
    this.callback = t.callback, this.img = document.createElement("img"), this.img.width = 1, this.img.height = 1, S.img_use_crossorigin && (this.img.crossOrigin = "anonymous"), this.server_url = t.data
};
Qe.prototype.start = function() {
    var t = this;
    S.ignore_oom && (this.img.onload = function() {
        this.onload = null, this.onerror = null, this.onabort = null, t.end()
    }, this.img.onerror = function() {
        this.onload = null, this.onerror = null, this.onabort = null, t.end()
    }, this.img.onabort = function() {
        this.onload = null, this.onerror = null, this.onabort = null, t.end()
    }), this.img.src = this.server_url
}, Qe.prototype.lastClear = function() {
    Lr().ie !== void 0 ? this.img.src = "about:blank" : this.img.src = ""
}, Qe.prototype.end = function() {
    if (this.callback) {
        if (Et("warning: sdk callback is deprecated."), !T(this.callback)) return void Et("error: sdk callback must be function.");
        this.callback()
    }
    var t = this;
    setTimeout(function() {
        t.lastClear && t.lastClear()
    }, S.datasend_timeout - S.callback_timeout)
};
var wa = {
        __proto__: null,
        addEvent: ie,
        EventEmitterSa: tn,
        cookie: ct,
        info: H,
        getReferrer: Zt,
        getCurrentDomain: Gr,
        isBaiduTraffic: Ue,
        getReferrerEqid: Ni,
        getReferrerEqidType: Oi,
        getBaiduKeyword: Re,
        isReferralTraffic: rr,
        getKeywordFromReferrer: Oe,
        getReferSearchEngine: Ti,
        getSourceFromReferrer: en,
        getWxAdIdFromUrl: Ai,
        parseSuperProperties: $i,
        searchConfigData: xi,
        strip_empty_properties: Ii,
        getEleInfo: Ei,
        getElementContent: ar,
        ajax: rn,
        optimizeServerUrl: Li,
        encodeTrackData: Ui,
        AjaxSend: Hr,
        BatchSend: Hi,
        BeaconSend: Br,
        ImageSend: Qe
    },
    Bi = new tn,
    d = {
        requests: [],
        _sessionState: {},
        _state: {
            distinct_id: "",
            first_id: "",
            props: {},
            identities: {}
        },
        getProps: function() {
            return this._state.props || {}
        },
        getSessionProps: function() {
            return this._sessionState
        },
        getOriginDistinctId: function() {
            return this._state._distinct_id || this._state.distinct_id
        },
        getOriginUnionId: function(t) {
            var e = {},
                r = (t = t || this._state)._first_id || t.first_id,
                n = t._distinct_id || t.distinct_id;
            return r && n ? (e.login_id = n, e.anonymous_id = r) : e.anonymous_id = n, e
        },
        getDistinctId: function() {
            var t = this.getUnionId();
            return t.login_id || t.anonymous_id
        },
        getUnionId: function(t) {
            var e = this.getOriginUnionId(t);
            return e.login_id && this._state.history_login_id && this._state.history_login_id.name && this._state.history_login_id.name !== Le && (e.login_id = this._state.history_login_id.name + "+" + e.login_id), e
        },
        getFirstId: function() {
            return this._state._first_id || this._state.first_id
        },
        initSessionState: function() {
            var t = ct.get("sensorsdata2015session"),
                e = null;
            (t = s.kit.userDecryptIfNeeded(t)) !== null && typeof(e = tt(t)) == "object" && (this._sessionState = e || {})
        },
        setOnce: function(t, e) {
            t in this._state || this.set(t, e)
        },
        set: function(t, e) {
            this._state = this._state || {};
            var r = this._state.distinct_id;
            this._state[t] = e, t === "first_id" ? delete this._state._first_id : t === "distinct_id" && delete this._state._distinct_id, this.save(), t === "distinct_id" && r && Bi.tempAdd("changeDistinctId", e)
        },
        change: function(t, e) {
            this._state["_" + t] = e
        },
        setSessionProps: function(t) {
            s.log("initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问");
            var e = this._sessionState;
            U(e, t), this.sessionSave(e)
        },
        setSessionPropsOnce: function(t) {
            s.log("initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问");
            var e = this._sessionState;
            xr(e, t), this.sessionSave(e)
        },
        setProps: function(t, e) {
            var r = {};
            for (var n in r = e ? t : U(this._state.props || {}, t)) typeof r[n] == "string" && (r[n] = r[n].slice(0, s.para.max_referrer_string_length));
            this.set("props", r)
        },
        setPropsOnce: function(t) {
            var e = this._state.props || {};
            xr(e, t), this.set("props", e)
        },
        clearAllProps: function(t) {
            var e;
            if (this._sessionState = {}, E(t) && t.length > 0)
                for (e = 0; e < t.length; e++) k(t[e]) && t[e].indexOf("latest_") === -1 && f(this._state.props) && t[e] in this._state.props && delete this._state.props[t[e]];
            else if (f(this._state.props))
                for (e in this._state.props) e.indexOf("latest_") !== 1 && delete this._state.props[e];
            this.sessionSave({}), this.save()
        },
        sessionSave: function(t) {
            s.log("initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问"), this._sessionState = t;
            var e = JSON.stringify(this._sessionState);
            s.para.encrypt_cookie && (e = s.kit.userEncrypt(e)), ct.set("sensorsdata2015session", e, 0)
        },
        save: function() {
            var t = JSON.parse(JSON.stringify(this._state));
            delete t._first_id, delete t._distinct_id, t.identities && (t.identities = Je(JSON.stringify(t.identities)));
            var e = JSON.stringify(t);
            s.para.encrypt_cookie && (e = s.kit.userEncrypt(e)), ct.set(this.getCookieName(), e, 730, s.para.cross_subdomain)
        },
        getCookieName: function() {
            var t = "";
            if (s.para.cross_subdomain === !1) {
                try {
                    var e = location.host;
                    At(s.para.white_list[e]) || (t = s.para.white_list[e])
                } catch (r) {
                    $(r)
                }
                t = typeof t == "string" && t !== "" ? "sa_jssdk_2015_" + s.para.sdk_id + t.replace(/\./g, "_") : "sa_jssdk_2015_root" + s.para.sdk_id
            } else t = "sensorsdata2015jssdkcross" + s.para.sdk_id;
            return t
        },
        init: function() {
            this.initSessionState();
            var t, e, r = Gt();
            ct.isSupport() && (t = ct.get(this.getCookieName()), e = tt(t = s.kit.userDecryptIfNeeded(t))), ct.isSupport() && t !== null && Ee(t) && f(e) && (!f(e) || e.distinct_id) ? (d._state = U(function(n) {
                var i;
                n.identities && (n.identities.indexOf(`
/`) === 0 ? n.identities = tt(Pi(n.identities)) : n.identities = tt(be(n.identities)));
                var a = d.getOriginUnionId(n);
                n.identities && f(n.identities) && !it(n.identities) || (n.identities = {}, n.identities.$identity_cookie_id = Gt()), n.history_login_id = n.history_login_id || {};
                var u = n.history_login_id.name;
                if (a.login_id)
                    if (u && n.identities.hasOwnProperty(u)) {
                        if (n.identities[u] !== a.login_id) {
                            for (i in n.identities[u] = a.login_id, n.identities) n.identities.hasOwnProperty(i) && i !== "$identity_cookie_id" && i !== u && delete n.identities[i];
                            n.history_login_id.value = a.login_id
                        }
                    } else {
                        var l = u || Le;
                        for (i in n.identities[l] = a.login_id, n.identities) n.identities.hasOwnProperty(i) && i !== "$identity_cookie_id" && i !== l && delete n.identities[i];
                        n.history_login_id = {
                            name: l,
                            value: a.login_id
                        }
                    }
                else {
                    if (n.identities.hasOwnProperty("$identity_login_id") || n.identities.hasOwnProperty(u))
                        for (i in n.identities) n.identities.hasOwnProperty(i) && i !== "$identity_cookie_id" && i !== "$identity_anonymous_id" && delete n.identities[i];
                    n.history_login_id = {
                        name: "",
                        value: ""
                    }
                }
                return n
            }(e)), d.save()) : (s.is_first_visitor = !0, function(n) {
                d.set("distinct_id", n), d.set("identities", {
                    $identity_cookie_id: n
                }), d.set("history_login_id", {
                    name: "",
                    value: ""
                })
            }(r)), He.setDeviceId(r, this), He.storeInitCheck()
        },
        saveObjectVal: function(t, e) {
            k(e) || (e = JSON.stringify(e)), s.para.encrypt_cookie == 1 && (e = s.kit.userEncrypt(e)), R.set(t, e)
        },
        readObjectVal: function(t) {
            var e = R.get(t);
            return e ? tt(e = s.kit.userDecryptIfNeeded(e)) : null
        }
    },
    K = {
        string: function(t) {
            $(t + " must be string")
        },
        emptyString: function(t) {
            $(t + "'s is empty")
        },
        regexTest: function(t) {
            $(t + " is invalid")
        },
        idLength: function(t) {
            $(t + " length is longer than " + S.max_id_length)
        },
        keyLength: function(t) {
            $(t + " length is longer than " + S.max_key_length)
        },
        stringLength: function(t) {
            $(t + " length is longer than " + S.max_string_length)
        },
        voidZero: function(t) {
            $(t + "'s is undefined")
        },
        reservedLoginId: function(t) {
            $(t + " is invalid")
        },
        reservedBind: function(t) {
            $(t + " is invalid")
        },
        reservedUnbind: function(t) {
            $(t + " is invalid")
        }
    },
    wn = {
        regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_tag.*|^user_group.*)[a-zA-Z_$][a-zA-Z\d_$]*)$/i,
        loginIDReservedNames: ["$identity_anonymous_id", "$identity_cookie_id"],
        bindReservedNames: ["$identity_login_id", "$identity_anonymous_id", "$identity_cookie_id"],
        unbindReservedNames: ["$identity_anonymous_id", Le],
        string: function(t) {
            return !!k(t)
        },
        emptyString: function(t) {
            return !(!k(t) || St(t).length === 0)
        },
        regexTest: function(t) {
            return !(!k(t) || !this.regName.test(t))
        },
        idLength: function(t) {
            return !(!k(t) || t.length > S.max_id_length)
        },
        keyLength: function(t) {
            return !(!k(t) || t.length > S.max_key_length)
        },
        stringLength: function(t) {
            return !(!k(t) || t.length > S.max_string_length)
        },
        voidZero: function(t) {
            return t !== void 0
        },
        reservedLoginId: function(t) {
            return !(nt(this.loginIDReservedNames, t) > -1)
        },
        reservedUnbind: function(t) {
            return !(nt(this.unbindReservedNames, t) > -1)
        },
        reservedBind: function(t) {
            var e = d._state.history_login_id;
            return !(e && e.name && e.name === t || nt(this.bindReservedNames, t) > -1)
        }
    },
    Sa = {
        distinct_id: {
            rules: ["string", "emptyString", "idLength"],
            onComplete: function(t, e, r) {
                return !t && (r === "emptyString" && (e = "Id"), T(K[r]) && K[r](e), r === "idLength") || t
            }
        },
        event: {
            rules: ["string", "emptyString", "keyLength", "regexTest"],
            onComplete: function(t, e, r) {
                return t || (r === "emptyString" && (e = "eventName"), T(K[r]) && K[r](e)), !0
            }
        },
        propertyKey: {
            rules: ["string", "emptyString", "keyLength", "regexTest"],
            onComplete: function(t, e, r) {
                return t || (r === "emptyString" && (e = "Property key"), T(K[r]) && K[r](e)), !0
            }
        },
        propertyValue: {
            rules: ["voidZero"],
            onComplete: function(t, e, r) {
                return t || T(K[r]) && K[r]("Property Value"), !0
            }
        },
        properties: function(t) {
            return f(t) ? I(t, function(e, r) {
                M({
                    propertyKey: r
                }), M({
                    propertyValue: e
                }, function(n, i, a) {
                    return n || (i = r + "'s Value", T(K[a]) && K[a](i)), !0
                })
            }) : wn.voidZero(t) && $("properties可以没有，但有的话必须是对象"), !0
        },
        propertiesMust: function(t) {
            return t !== void 0 && f(t) && !it(t) ? this.properties.call(this, t) : $("properties必须是对象"), !0
        },
        item_type: {
            rules: ["string", "emptyString", "keyLength", "regexTest"],
            onComplete: function(t, e, r) {
                return t || (r === "emptyString" && (e = "item_type"), T(K[r]) && K[r](e)), !0
            }
        },
        item_id: {
            rules: ["string", "emptyString", "stringLength"],
            onComplete: function(t, e, r) {
                return t || (r === "emptyString" && (e = "item_id"), T(K[r]) && K[r](e)), !0
            }
        },
        loginIdKey: {
            rules: ["string", "emptyString", "keyLength", "regexTest", "reservedLoginId"],
            onComplete: function(t, e, r) {
                return !t && (r === "emptyString" && (e = "login_id_key"), T(K[r]) && K[r](e), r === "keyLength") || t
            }
        },
        bindKey: {
            rules: ["string", "emptyString", "keyLength", "regexTest", "reservedBind"],
            onComplete: function(t, e, r) {
                return !t && (r === "emptyString" && (e = "Key"), T(K[r]) && K[r](e), r === "keyLength") || t
            }
        },
        unbindKey: {
            rules: ["string", "emptyString", "keyLength", "regexTest", "reservedUnbind"],
            onComplete: function(t, e, r) {
                return !t && (r === "emptyString" && (e = "Key"), T(K[r]) && K[r](e), r === "keyLength") || t
            }
        },
        bindValue: {
            rules: ["string", "emptyString", "idLength"],
            onComplete: function(t, e, r) {
                return !t && (r === "emptyString" && (e = "Value"), T(K[r]) && K[r](e), r === "idLength") || t
            }
        },
        check: function(t, e, r) {
            var n = this[t];
            if (T(n)) return n.call(this, e);
            if (!n) return !1;
            for (var i = 0; i < n.rules.length; i++) {
                var a = n.rules[i],
                    u = wn[a](e),
                    l = T(r) ? r(u, e, a) : n.onComplete(u, e, a);
                if (!u) return l
            }
            return !0
        }
    };

function M(t, e) {
    for (var r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && !Sa.check(r, t[r], e)) return !1;
    return !0
}

function Ji(t) {
    var e = ["$element_selector", "$element_path"],
        r = ["sensorsdata_app_visual_properties"];
    f(t) && I(t, function(n, i) {
        if (f(n)) Ji(t[i]);
        else if (k(n)) {
            if (nt(r, i) > -1) return;
            t[i] = function(a, u) {
                return It(u) && a.length > u ? ($("字符串长度超过限制，已经做截取--" + a), a.slice(0, u)) : a
            }(n, nt(e, i) > -1 ? 1024 : S.max_string_length)
        }
    })
}
var Q = {
        initUrl: function() {
            var t, e, r = {
                server_url: {
                    project: "",
                    host: ""
                },
                page_url: {
                    host: "",
                    pathname: ""
                }
            };
            if (!yi(s.para.server_url)) return L("----vcollect---server_url必须为有效 URL 字符串"), !1;
            try {
                t = $t(s.para.server_url), r.server_url.project = t.searchParams.get("project") || "default", r.server_url.host = t.host
            } catch (n) {
                return L("----vcollect---server_url解析异常", n), !1
            }
            try {
                e = $t(location.href), r.page_url.host = e.hostname, r.page_url.pathname = e.pathname
            } catch (n) {
                return L("----vcollect---页面地址解析异常", n), !1
            }
            return r
        },
        isDiv: function(t) {
            return !t.element_path || St(t.element_path.split(">").pop()).slice(0, 3) === "div"
        },
        configIsMatchNew: function(t, e) {
            if (k(t.$element_selector) && k(e.element_selector)) {
                if (e.element_field === "element_selector" && e.function === "equal") return t.$element_selector === e.element_selector;
                if (e.element_field === "element_selector" && e.function === "contain") return t.$element_selector.indexOf(e.element_selector) > -1
            }
            if (k(t.$element_path) && k(e.element_path)) {
                if (e.element_field === "element_path" && e.function === "equal") return t.$element_path === e.element_path;
                if (e.element_field === "element_path" && e.function === "contain") return t.$element_path.indexOf(e.element_path) > -1
            }
            return !1
        },
        configIsMatch: function(t, e) {
            return (!e.limit_element_content || e.element_content === t.$element_content) && (!e.limit_element_position || e.element_position === String(t.$element_position)) && (e.element_field && e.function ? Q.configIsMatchNew(t, e) : Q.configIsMatchOldVersion(t, e))
        },
        configIsMatchOldVersion: function(t, e) {
            if (!e.element_path) return !1;
            if (t.$element_position !== void 0) {
                if (e.element_path !== t.$element_path) return !1
            } else if (Q.isDiv({
                    element_path: e.element_path
                })) {
                if (t.$element_path.indexOf(e.element_path) < 0) return !1
            } else if (e.element_path !== t.$element_path) return !1;
            return !0
        },
        filterConfig: function(t, e, r) {
            var n = [];
            if (!r) {
                var i = Q.initUrl();
                if (!i) return [];
                r = i.page_url
            }
            return t.event === "$WebClick" && I(e, function(a) {
                f(a) && (a.event_type === "webclick" || a.event_type === "appclick") && f(a.event) && a.event.url_host === r.host && a.event.url_path === r.pathname && Q.configIsMatch(t.properties, a.event) && n.push(a)
            }), n
        },
        getPropElInLi: function(t, e) {
            if (!(t && bt(t) && k(e)) || t.tagName.toLowerCase() !== "li") return null;
            var r = s.heatmap.getDomSelector(t);
            return r ? We(r + e) || null : ($("----custom---获取同级属性元素失败，selector信息异常", r, e), null)
        },
        getProp: function(t, e) {
            if (!f(t)) return !1;
            if (!(k(t.name) && t.name.length > 0)) return $("----vcustom----属性名不合法,属性抛弃", t.name), !1;
            var r, n, i = {};
            if (t.method === "content") {
                var a;
                if (k(t.element_selector) && t.element_selector.length > 0) a = We(t.element_selector);
                else {
                    if (!e || !k(t.list_selector)) return $("----vcustom----属性配置异常，属性抛弃", t.name), !1;
                    var u = We(e.properties.$element_selector);
                    if (!u) return $("----vcustom----点击元素获取异常，属性抛弃", t.name), !1;
                    var l = s.heatmap.getClosestLi(u);
                    a = Q.getPropElInLi(l, t.list_selector)
                }
                if (!a || !bt(a)) return $("----vcustom----属性元素获取失败，属性抛弃", t.name), !1;
                if (a.tagName.toLowerCase() === "input") r = a.value || "";
                else if (a.tagName.toLowerCase() === "select") {
                    var p = a.selectedIndex;
                    It(p) && bt(a[p]) && (r = ar(a[p], "select"))
                } else r = ar(a, a.tagName.toLowerCase());
                if (t.regular) {
                    try {
                        n = new RegExp(t.regular).exec(r)
                    } catch {
                        return $("----vcustom----正则处理失败，属性抛弃", t.name), !1
                    }
                    if (n === null) return $("----vcustom----属性规则处理，未匹配到结果,属性抛弃", t.name), !1;
                    if (!E(n) || !k(n[0])) return $("----vcustom----正则处理异常，属性抛弃", t.name, n), !1;
                    r = n[0]
                }
                if (t.type === "STRING") i[t.name] = r;
                else if (t.type === "NUMBER") {
                    if (r.length < 1) return $("----vcustom----未获取到数字内容，属性抛弃", t.name, r), !1;
                    if (isNaN(Number(r))) return $("----vcustom----数字类型属性转换失败，属性抛弃", t.name, r), !1;
                    i[t.name] = Number(r)
                }
                return i
            }
            return L("----vcustom----属性不支持此获取方式", t.name, t.method), !1
        },
        getAssignConfigs: function(t, e) {
            var r = Q.initUrl();
            if (!r || !r.page_url) return [];
            if (!f(e)) return [];
            var n = [];
            return e.events = e.events || e.eventList, E(e.events) && e.events.length > 0 ? (I(e.events, function(i) {
                f(i) && f(i.event) && i.event.url_host === r.page_url.host && i.event.url_path === r.page_url.pathname && t(i) && n.push(i)
            }), n) : []
        }
    },
    ka = {
        events: [],
        getAssignConfigs: Q.getAssignConfigs,
        filterConfig: Q.filterConfig,
        getProp: Q.getProp,
        initUrl: Q.initUrl,
        updateEvents: function(t) {
            E(t) && (this.events = t)
        },
        init: function() {
            this.initAppGetPropsBridge()
        },
        geth5Props: function(t) {
            var e = {},
                r = [],
                n = this;
            if (!this.events.length) return {};
            if (t.event === "$WebClick") {
                var i = this.filterConfig(t, this.events);
                if (!i.length) return {};
                I(i, function(a) {
                    f(a) && (E(a.properties) && a.properties.length > 0 && I(a.properties, function(u) {
                        if (f(u))
                            if (u.h5 === !1) E(e.sensorsdata_app_visual_properties) || (e.sensorsdata_app_visual_properties = []), e.sensorsdata_app_visual_properties.push(u);
                            else {
                                var l = n.getProp(u, t);
                                f(l) && (e = U(e, l))
                            }
                    }), k(a.event_name) && r.push(a.event_name))
                }), s.bridge.hasVisualModeBridge() && (e.sensorsdata_web_visual_eventName = r)
            }
            return e.sensorsdata_app_visual_properties && (e.sensorsdata_app_visual_properties = Je(JSON.stringify(e.sensorsdata_app_visual_properties))), e
        },
        initAppGetPropsBridge: function() {
            var t = this,
                e = new s.SDKJSBridge("getJSVisualProperties");
            return e.onAppNotify(function(r) {
                var n = {};
                try {
                    r = JSON.parse(be(r))
                } catch {
                    L("getJSVisualProperties data parse error!")
                }
                if (f(r)) {
                    var i = r.sensorsdata_js_visual_properties,
                        a = t.initUrl();
                    a && (a = a.page_url, E(i) && i.length > 0 && I(i, function(u) {
                        if (f(u) && u.url_host === a.host && u.url_path === a.pathname && u.h5) {
                            var l = t.getProp(u);
                            f(l) && (n = U(n, l))
                        }
                    }))
                }
                return s.bridge.bridge_info.platform === "android" && e.notifyApp({
                    data: n
                }, r.message_id), n
            }), e
        }
    },
    nn = {
        events: [],
        customProp: ka,
        getAssignConfigs: Q.getAssignConfigs,
        initUrl: Q.initUrl,
        init: function() {
            if (this.initUrl()) {
                var t = this.getConfigFromApp();
                t && this.updateConfigs(t), this.customProp.init(), this.initAppUpdateConfigBridge()
            }
        },
        initAppUpdateConfigBridge: function() {
            var t = this;
            return new s.SDKJSBridge("updateH5VisualConfig").onAppNotify(function(e) {
                if (e) {
                    try {
                        e = JSON.parse(be(e))
                    } catch {
                        return void L("updateH5VisualConfig result parse error！")
                    }
                    t.updateConfigs(e)
                }
            })
        },
        getConfigFromApp: function() {
            var t = new s.SDKJSBridge("sensorsdata_get_app_visual_config").notifyApp();
            if (t) try {
                t = JSON.parse(be(t))
            } catch {
                t = null, L("getAppVisualConfig result parse error！")
            }
            return t
        },
        updateConfigs: function(t) {
            this.events = this.filterConfigs(t), this.customProp.updateEvents(this.events)
        },
        filterConfigs: function(t) {
            return this.getAssignConfigs(function(e) {
                return !(!f(e) || e.h5 === !1)
            }, t)
        }
    },
    sr = {
        events: [],
        init: function(t) {
            this.filterWebClickEvents(t)
        },
        filterWebClickEvents: function(t) {
            this.events = ee.getAssignConfigs(function(e) {
                return !(!f(e) || e.event.unlimited_div !== !0 || e.event_type !== "webclick")
            }, t)
        },
        isTargetEle: function(t) {
            var e = s.heatmap.getEleDetail(t);
            if (!f(e) || !k(e.$element_path)) return !1;
            for (var r = 0; r < this.events.length; r++)
                if (f(this.events[r]) && f(this.events[r].event) && ee.configIsMatch(e, this.events[r].event)) return !0;
            return !1
        }
    },
    Mi = {
        events: [],
        configSwitch: !1,
        collectAble: function() {
            return this.configSwitch && f(s.para.heatmap) && s.para.heatmap.get_vtrack_config
        },
        updateEvents: function(t) {
            this.events = ee.getAssignConfigs(function(e) {
                return !!(f(e) && E(e.properties) && e.properties.length > 0)
            }, t), this.events.length ? this.configSwitch = !0 : this.configSwitch = !1
        },
        getVtrackProps: function(t) {
            var e = {};
            return this.collectAble() ? (t.event === "$WebClick" && (e = this.clickCustomPropMaker(t, this.events)), e) : {}
        },
        clickCustomPropMaker: function(t, e, r) {
            var n = this;
            r = r || this.filterConfig(t, e, ee.url_info.page_url);
            var i = {};
            return r.length ? (I(r, function(a) {
                E(a.properties) && a.properties.length > 0 && I(a.properties, function(u) {
                    var l = n.getProp(u, t);
                    f(l) && U(i, l)
                })
            }), i) : {}
        },
        getProp: Q.getProp,
        getPropElInLi: Q.getPropElInLi,
        filterConfig: Q.filterConfig
    },
    ee = {
        unlimitedDiv: sr,
        config: {},
        storageEnable: !0,
        storage_name: "webjssdkvtrackcollect",
        para: {
            session_time: 18e5,
            timeout: 5e3,
            update_interval: 18e5
        },
        url_info: {},
        timer: null,
        update_time: null,
        customProp: Mi,
        initUrl: function() {
            var t = Q.initUrl();
            if (t) {
                var e;
                try {
                    (e = new zr(s.para.server_url))._values.Path = "/config/visualized/Web.conf", t.api_url = e.getUrl()
                } catch (r) {
                    return L("----vtrackcollect---API地址解析异常", r), !1
                }
                this.url_info = t
            }
            return t
        },
        init: function() {
            if (!f(s.para.heatmap) || !s.para.heatmap.get_vtrack_config) return !1;
            if (R.isSupport() || (this.storageEnable = !1), !this.initUrl()) return L("----vtrackcustom----初始化失败，url信息解析失败"), !1;
            if (this.storageEnable) {
                var t = d.readObjectVal(this.storage_name);
                if (f(t) && f(t.data))
                    if (this.serverUrlIsSame(t.serverUrl)) {
                        this.config = t.data, this.update_time = t.updateTime, this.updateConfig(t.data);
                        var e = new Date().getTime() - this.update_time;
                        if (It(e) && e > 0 && e < this.para.session_time) {
                            var r = this.para.update_interval - e;
                            this.setNextFetch(r)
                        } else this.getConfigFromServer()
                    } else this.getConfigFromServer();
                else this.getConfigFromServer()
            } else this.getConfigFromServer();
            this.pageStateListenner()
        },
        serverUrlIsSame: function(t) {
            return !!f(t) && t.host === this.url_info.server_url.host && t.project === this.url_info.server_url.project
        },
        getConfigFromServer: function() {
            var t = this;
            this.sendRequest(function(e, r) {
                t.update_time = new Date().getTime();
                var n = {};
                e === 200 ? r && f(r) && r.os === "Web" && (n = r, t.updateConfig(n)) : e === 205 ? t.updateConfig(n) : e === 304 ? n = t.config : (L("----vtrackcustom----数据异常", e), t.updateConfig(n)), t.updateStorage(n), t.setNextFetch()
            }, function(e) {
                t.update_time = new Date().getTime(), L("----vtrackcustom----配置拉取失败", e), t.setNextFetch()
            })
        },
        setNextFetch: function(t) {
            var e = this;
            this.timer && (clearTimeout(this.timer), this.timer = null), t = t || this.para.update_interval, this.timer = setTimeout(function() {
                e.getConfigFromServer()
            }, t)
        },
        pageStateListenner: function() {
            var t = this;
            Si({
                visible: function() {
                    var e = new Date().getTime() - t.update_time;
                    if (It(e) && e > 0 && e < t.para.update_interval) {
                        var r = t.para.update_interval - e;
                        t.setNextFetch(r)
                    } else t.getConfigFromServer()
                },
                hidden: function() {
                    t.timer && (clearTimeout(t.timer), t.timer = null)
                }
            })
        },
        updateConfig: function(t) {
            if (!f(t)) return !1;
            this.config = t, this.customProp.updateEvents(t), this.unlimitedDiv.init(t)
        },
        updateStorage: function(t) {
            if (!this.storageEnable || !f(t)) return !1;
            var e;
            if (this.url_info.server_url) e = this.url_info.server_url;
            else {
                var r = ee.initUrl();
                if (!r) return !1;
                e = r.server_url
            }
            var n = {
                updateTime: new Date().getTime(),
                data: t,
                serverUrl: e
            };
            d.saveObjectVal(this.storage_name, n)
        },
        sendRequest: function(t, e) {
            var r = {
                app_id: this.url_info.page_url.host
            };
            this.config.version && (r.v = this.config.version), wi({
                url: this.url_info.api_url,
                callbackName: "saJSSDKVtrackCollectConfig",
                data: r,
                timeout: this.para.timeout,
                success: function(n, i) {
                    t(n, i)
                },
                error: function(n) {
                    e(n)
                }
            })
        },
        getAssignConfigs: Q.getAssignConfigs,
        configIsMatch: Q.configIsMatch
    },
    Pa = {
        basicProps: {
            priority: 0,
            entry: function(t, e) {
                try {
                    var r = e.sensors,
                        n = {};
                    f(t) && f(t.identities) && !it(t.identities) ? U(n, t.identities) : U(n, d._state.identities);
                    var i = {
                        identities: n,
                        distinct_id: d.getDistinctId(),
                        lib: {
                            $lib: "js",
                            $lib_method: "code",
                            $lib_version: String(r.lib_version)
                        },
                        properties: {}
                    };
                    return f(t) && f(t.properties) && !it(t.properties) && (t.properties.$lib_detail && (i.lib.$lib_detail = t.properties.$lib_detail, delete t.properties.$lib_detail), t.properties.$lib_method && (i.lib.$lib_method = t.properties.$lib_method, delete t.properties.$lib_method)), gi(i, d.getUnionId(), t), f(t.properties) && !it(t.properties) && U(i.properties, t.properties), t.type && t.type.slice(0, 7) === "profile" || (i.properties = U({}, H.properties(), d.getProps(), d.getSessionProps(), H.currentProps, i.properties), r.para.preset_properties.latest_referrer && !k(i.properties.$latest_referrer) && (i.properties.$latest_referrer = "取值异常"), r.para.preset_properties.latest_search_keyword && !k(i.properties.$latest_search_keyword) && (r.para.preset_properties.search_keyword_baidu && k(i.properties.$search_keyword_id) && It(i.properties.$search_keyword_id_hash) && k(i.properties.$search_keyword_id_type) || (i.properties.$latest_search_keyword = "取值异常")), r.para.preset_properties.latest_traffic_source_type && !k(i.properties.$latest_traffic_source_type) && (i.properties.$latest_traffic_source_type = "取值异常"), r.para.preset_properties.latest_landing_page && !k(i.properties.$latest_landing_page) && (i.properties.$latest_landing_page = "取值异常"), r.para.preset_properties.latest_wx_ad_click_id === "not_collect" ? (delete i.properties._latest_wx_ad_click_id, delete i.properties._latest_wx_ad_hash_key, delete i.properties._latest_wx_ad_callbacks) : r.para.preset_properties.latest_wx_ad_click_id && !k(i.properties._latest_wx_ad_click_id) && (i.properties._latest_wx_ad_click_id = "取值异常", i.properties._latest_wx_ad_hash_key = "取值异常", i.properties._latest_wx_ad_callbacks = "取值异常"), k(i.properties._latest_wx_ad_click_id) && (i.properties.$url = lt())), i.properties.$time && Ie(i.properties.$time) ? (i.time = 1 * i.properties.$time, delete i.properties.$time) : i.time = 1 * new Date,
                        function(a) {
                            if (r.bridge && r.bridge.bridge_info.verify_success === "success") {
                                var u = nn.customProp.geth5Props(JSON.parse(JSON.stringify(a)));
                                f(u) && !it(u) && (a.properties = U(a.properties, u))
                            }
                            var l = ee.customProp.getVtrackProps(JSON.parse(JSON.stringify(a)));
                            f(l) && !it(l) && (a.properties = U(a.properties, l))
                        }(i), $i(i), He.checkIsAddSign(i), He.checkIsFirstTime(i),
                        function(a) {
                            var u = !a.type || a.type.slice(0, 7) !== "profile";
                            f(a.properties) && u && ("$referrer" in a.properties && (a.properties.$referrer_host = a.properties.$referrer === "" ? "" : xt(a.properties.$referrer, "取值异常")), S.preset_properties.latest_referrer && S.preset_properties.latest_referrer_host && (a.properties.$latest_referrer_host = a.properties.$latest_referrer === "" ? "" : xt(a.properties.$latest_referrer, "取值异常")))
                        }(i),
                        function(a) {
                            var u = !a.type || a.type.slice(0, 7) !== "profile",
                                l = S.preset_properties && u;
                            l && S.preset_properties.url && At(a.properties.$url) && (a.properties.$url = lt()), l && S.preset_properties.title && At(a.properties.$title) && (a.properties.$title = document.title)
                        }(i), i
                } catch (a) {
                    return {
                        _debug_web_msg: String(a)
                    }
                }
            }
        },
        formatData: {
            priority: 0,
            entry: function(t) {
                var e = t.properties;
                Yr(t), f(e) ? (function(r, n) {
                        f(r) && I(r, function(i, a) {
                            if (E(i)) {
                                var u = [];
                                I(i, function(p) {
                                    if (k(p)) u.push(p);
                                    else if (At(p)) u.push("null");
                                    else try {
                                        u.push(JSON.stringify(p))
                                    } catch {
                                        $("您的数据-", a, i, "数组里值有错误,已将其删除")
                                    }
                                }), r[a] = u
                            }
                            var l = nt([], a) > -1;
                            if (f(i) && a !== "$option" && !l) try {
                                r[a] = JSON.stringify(i)
                            } catch {
                                delete r[a], $("您的数据-", a, i, "数据值有错误，已将其删除")
                            } else k(i) || It(i) || Ie(i) || vi(i) || E(i) || T(i) || a === "$option" || l || ($("您的数据-", a, i, "-格式不满足要求，我们已经将其删除"), delete r[a])
                        })
                    }(e), function(r, n) {
                        f(r) && I(["distinct_id", "user_id", "id", "date", "datetime", "event", "events", "first_id", "original_id", "device_id", "properties", "second_id", "time", "users"], function(i, a) {
                            i in r && (nt([], i) > -1 || (a < 3 ? (delete r[i], $("您的属性- " + i + "是保留字段，我们已经将其删除")) : $("您的属性- " + i + "是保留字段，请避免其作为属性名")))
                        })
                    }(e), function(r) {
                        r.properties.$project !== void 0 && (r.project = r.properties.$project, delete r.properties.$project), r.properties.$token !== void 0 && (r.token = r.properties.$token, delete r.properties.$token)
                    }(t), function(r, n) {
                        I(r, function(i, a) {
                            nt([], a) === -1 && M({
                                propertyKey: a
                            }, function(u, l, p) {
                                return u || p === "keyLength" || delete r[a], !0
                            })
                        })
                    }(e), Ji(e)) : "properties" in t && (t.properties = {}),
                    function(r) {
                        "item_type" in r && M({
                            item_type: r.item_type
                        }, function(n) {
                            return n || delete r.item_type, !0
                        }), "item_id" in r && M({
                            item_id: r.item_id
                        }, function(n, i, a) {
                            return n || a !== "string" || delete r.item_id, !0
                        })
                    }(t)
            }
        },
        finalAdjustData: {
            priority: 0,
            entry: function(t, e) {
                var r = e.sensors;
                return t._track_id = Number(String(yt()).slice(2, 5) + String(yt()).slice(2, 4) + String(new Date().getTime()).slice(-4)), t._flush_time = new Date().getTime(), r.events.tempAdd("send", t), t
            }
        }
    },
    an = {
        stage: null,
        init: function(t) {
            this.stage = t
        },
        interceptor: Pa
    },
    st = {};

function Sn(t, e, r, n) {
    var i = null;
    if ((t = t || {}).ele && (i = t.ele), t.event && (i = t.target ? t.target : t.event.target), r = r || {}, !i || typeof i != "object") return !1;
    if (!i.href || /^javascript/.test(i.href) || i.target || i.download || i.onclick) return n(e, r), !1;

    function a(u) {
        u.stopPropagation(), u.preventDefault();
        var l = !1;

        function p() {
            l || (l = !0, location.href = i.href)
        }
        setTimeout(p, 1e3), n(e, r, p)
    }
    t.event && a(t.event), t.ele && ie(t.ele, "click", function(u) {
        a(u)
    })
}

function qi() {
    var t = location.protocol;
    return t === "http:" || t === "https:" ? t : "http:"
}
st.check = M, st.sendItem = function(t) {
    var e = {
        lib: {
            $lib: "js",
            $lib_method: "code",
            $lib_version: String(s.lib_version)
        },
        time: 1 * new Date
    };
    U(e, t),
        function(r) {
            an.stage.process("formatData", r)
        }(e), s.kit.sendData(e)
}, st.send = function(t, e) {
    var r = s.kit.buildData(t);
    s.kit.sendData(r, e)
};
var Jr = {
        stage: null,
        init: function(t) {
            this.stage = t
        }
    },
    vr = {
        label: !1,
        li: !1,
        a: !0,
        button: !0
    },
    Ct = {
        otherTags: [],
        initUnlimitedTags: function() {
            I(Ct.otherTags, function(t) {
                t in vr && (vr[t] = !0)
            })
        },
        isUnlimitedTag: function(t) {
            if (!t || t.nodeType !== 1) return !1;
            var e = t.nodeName.toLowerCase();
            return vr[e] || Zr(t, s.para.heatmap.track_attr)
        },
        getTargetElement: function(t, e) {
            var r = this,
                n = t;
            if (typeof n != "object" || typeof n.tagName != "string") return null;
            var i = n.tagName.toLowerCase();
            if (i.toLowerCase() === "body" || i.toLowerCase() === "html" || !n || !n.parentNode || !n.parentNode.children) return null;
            var a = n.parentNode,
                u = r.otherTags;
            if (i === "a" || i === "button" || i === "input" || i === "textarea" || nt(u, i) > -1) return n;
            if (i === "area" && a.tagName.toLowerCase() === "map" && mt(a).prev().tagName && mt(a).prev().tagName.toLowerCase() === "img") return mt(a).prev();
            if (i === "div" && s.para.heatmap.collect_tags.div && r.isDivLevelValid(n) && ((s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level || 1) > 1 || r.isCollectableDiv(n))) return n;
            if (r.isStyleTag(i) && s.para.heatmap.collect_tags.div) {
                var l = r.getCollectableParent(n);
                if (l && r.isDivLevelValid(l)) return l
            }
            return r.hasElement({
                event: e && e.originalEvent || e,
                element: t
            }, function(p) {
                return r.isUnlimitedTag(p)
            }) || null
        },
        getDivLevels: function(t, e) {
            var r = Ct.getElementPath(t, !0, e).split(" > "),
                n = 0;
            return I(r, function(i) {
                i === "div" && n++
            }), n
        },
        isDivLevelValid: function(t) {
            for (var e = s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level || 1, r = t.getElementsByTagName("div"), n = r.length - 1; n >= 0; n--)
                if (Ct.getDivLevels(r[n], t) > e) return !1;
            return !0
        },
        getElementPath: function(t, e, r) {
            for (var n = []; t.parentNode && bt(t);) {
                if (t.id && !e && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(t.id)) {
                    n.unshift(t.tagName.toLowerCase() + "#" + t.id);
                    break
                }
                if (r && t === r) {
                    n.unshift(t.tagName.toLowerCase());
                    break
                }
                if (t === document.body) {
                    n.unshift("body");
                    break
                }
                n.unshift(t.tagName.toLowerCase()), t = t.parentNode
            }
            return n.join(" > ")
        },
        getClosestLi: function(t) {
            return function(e) {
                for (; e && e !== document && e.nodeType === 1; e = e.parentNode)
                    if (e.tagName && T(e.tagName.toLowerCase) && e.tagName.toLowerCase() === "li") return e;
                return null
            }(t)
        },
        getElementPosition: function(t, e, r) {
            var n = s.heatmap.getClosestLi(t);
            if (!n || !bt(t)) return null;
            var i = t.tagName.toLowerCase(),
                a = n.getElementsByTagName(i),
                u = a.length,
                l = [];
            if (u > 1) {
                for (var p = 0; p < u; p++) s.heatmap.getElementPath(a[p], r) === e && l.push(a[p]);
                if (l.length > 1) return nt(l, t)
            }
            return function(g) {
                if (!g.parentNode) return "";
                if (mt(g).getSameTypeSiblings().length === 1) return 0;
                for (var c = 0, _ = g; mt(_).previousElementSibling().ele; _ = mt(_).previousElementSibling().ele, c++);
                return c
            }(n)
        },
        setNotice: function(t) {
            s.is_heatmap_render_mode = !0, s.para.heatmap || (s.errorMsg = "您SDK没有配置开启点击图，可能没有数据！"), t && t.slice(0, 5) === "http:" && location.protocol === "https:" && (s.errorMsg = "您的当前页面是https的地址，神策分析环境也必须是https！"), s.para.heatmap_url || (s.para.heatmap_url = qi() + "//static.sensorsdata.cn/sdk/" + s.lib_version + "/heatmap.min.js")
        },
        getDomIndex: function(t) {
            if (!t.parentNode) return -1;
            for (var e = 0, r = t.tagName, n = t.parentNode.children, i = 0; i < n.length; i++)
                if (n[i].tagName === r) {
                    if (t === n[i]) return e;
                    e++
                }
            return -1
        },
        selector: function(t, e) {
            var r = t.parentNode && t.parentNode.nodeType == 9 ? -1 : this.getDomIndex(t);
            return t.getAttribute && t.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(t.getAttribute("id")) && (!s.para.heatmap || s.para.heatmap && s.para.heatmap.element_selector !== "not_use_id") && !e ? "#" + t.getAttribute("id") : t.tagName.toLowerCase() + (~r ? ":nth-of-type(" + (r + 1) + ")" : "")
        },
        getDomSelector: function(t, e, r) {
            if (!t || !t.parentNode || !t.parentNode.children) return !1;
            e = e && e.join ? e : [];
            var n = t.nodeName.toLowerCase();
            return t && n !== "body" && t.nodeType == 1 ? (e.unshift(this.selector(t, r)), t.getAttribute && t.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(t.getAttribute("id")) && s.para.heatmap && s.para.heatmap.element_selector !== "not_use_id" && !r ? e.join(" > ") : this.getDomSelector(t.parentNode, e, r)) : (e.unshift("body"), e.join(" > "))
        },
        na: function() {
            var t = document.documentElement.scrollLeft || window.pageXOffset;
            return parseInt(isNaN(t) ? 0 : t, 10)
        },
        i: function() {
            var t = 0;
            try {
                t = o.documentElement && o.documentElement.scrollTop || m.pageYOffset, t = isNaN(t) ? 0 : t
            } catch {
                t = 0
            }
            return parseInt(t, 10)
        },
        getBrowserWidth: function() {
            var t = window.innerWidth || document.body.clientWidth;
            return isNaN(t) ? 0 : parseInt(t, 10)
        },
        getBrowserHeight: function() {
            var t = window.innerHeight || document.body.clientHeight;
            return isNaN(t) ? 0 : parseInt(t, 10)
        },
        getScrollWidth: function() {
            var t = parseInt(document.body.scrollWidth, 10);
            return isNaN(t) ? 0 : t
        },
        getEleDetail: function(t) {
            var e = this.getDomSelector(t),
                r = Ei({
                    target: t
                });
            r.$element_selector = e || "", r.$element_path = s.heatmap.getElementPath(t, s.para.heatmap && s.para.heatmap.element_selector === "not_use_id");
            var n = s.heatmap.getElementPosition(t, r.$element_path, s.para.heatmap && s.para.heatmap.element_selector === "not_use_id");
            return It(n) && (r.$element_position = n), r
        },
        getPointerEventProp: function(t, e) {
            if (!t) return {};

            function r() {
                return {
                    scrollLeft: document.body.scrollLeft || document.documentElement.scrollLeft || 0,
                    scrollTop: document.body.scrollTop || document.documentElement.scrollTop || 0
                }
            }

            function n(a) {
                if (document.documentElement.getBoundingClientRect) {
                    var u = a.getBoundingClientRect();
                    return {
                        targetEleX: u.left + r().scrollLeft || 0,
                        targetEleY: u.top + r().scrollTop || 0
                    }
                }
            }

            function i(a) {
                return Number(Number(a).toFixed(3))
            }
            return function(a) {
                var u = a.pageX || a.clientX + r().scrollLeft || a.offsetX + n(e).targetEleX || 0,
                    l = a.pageY || a.clientY + r().scrollTop || a.offsetY + n(e).targetEleY || 0;
                return {
                    $page_x: i(u),
                    $page_y: i(l)
                }
            }(t)
        },
        start: function(t, e, r, n, i) {
            if (f(s.para.heatmap) && T(s.para.heatmap.collect_element) && !s.para.heatmap.collect_element(e)) return !1;
            (function(a) {
                Jr.stage.process("webClickEvent", a)
            })(Ct.getBasicEleInfo(t, e, r, n, i))
        },
        getBasicEleInfo: function(t, e, r, n, i) {
            var a = f(n) ? n : {},
                u = T(i) ? i : T(n) ? n : void 0,
                l = this.getEleDetail(e);
            if (s.para.heatmap && s.para.heatmap.custom_property) {
                var p = s.para.heatmap.custom_property(e);
                f(p) && (l = U(l, p))
            }
            return {
                event: t,
                target: e,
                props: l = U(l, this.getPointerEventProp(t, e), a),
                tagName: r,
                callback: u
            }
        },
        hasElement: function(t, e) {
            var r;
            if (t.event) {
                var n = t.event;
                r = n.path || n._getPath && n._getPath()
            } else t.element && (r = mt(t.element).getParents());
            if (r && E(r) && r.length > 0) {
                for (var i = 0; i < r.length; i++)
                    if (typeof r[i] == "object" && r[i].nodeType === 1 && e(r[i])) return r[i]
            }
        },
        isStyleTag: function(t, e) {
            return !(nt(["a", "div", "input", "button", "textarea"], t) > -1) && (!e || s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div ? !!(f(s.para.heatmap) && f(s.para.heatmap.collect_tags) && f(s.para.heatmap.collect_tags.div) && E(s.para.heatmap.collect_tags.div.ignore_tags) && nt(s.para.heatmap.collect_tags.div.ignore_tags, t) > -1) : nt(["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"], t) > -1)
        },
        isCollectableDiv: function(t, e) {
            try {
                if (t.children.length === 0) return !0;
                for (var r = 0; r < t.children.length; r++)
                    if (t.children[r].nodeType === 1) {
                        var n = t.children[r].tagName.toLowerCase(),
                            i = s.para && s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level;
                        if (!(n === "div" && i > 1 || this.isStyleTag(n, e)) || !this.isCollectableDiv(t.children[r], e)) return !1
                    }
                return !0
            } catch (a) {
                L("isCollectableDiv:" + a)
            }
            return !1
        },
        getCollectableParent: function(t, e) {
            try {
                var r = t.parentNode,
                    n = r ? r.tagName.toLowerCase() : "";
                if (n === "body") return !1;
                var i = s.para && s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level;
                if (n && n === "div" && (i > 1 || this.isCollectableDiv(r, e))) return r;
                if (r && this.isStyleTag(n, e)) return this.getCollectableParent(r, e)
            } catch (a) {
                L("getCollectableParent:" + a)
            }
            return !1
        },
        listenUrlChange: function(t) {
            t(), s.ee.spa.on("switch", function() {
                t()
            })
        },
        initScrollmap: function() {
            if (!f(s.para.heatmap) || s.para.heatmap.scroll_notice_map !== "default") return !1;
            var t = !0;
            s.para.scrollmap && T(s.para.scrollmap.collect_url) && this.listenUrlChange(function() {
                t = !!s.para.scrollmap.collect_url()
            });
            var e = function(r) {
                var n = {};
                return n.timeout = r.timeout || 1e3, n.func = r.func, n.hasInit = !1, n.inter = null, n.main = function(i, a) {
                    this.func(i, a), this.inter = null
                }, n.go = function(i) {
                    var a = {};
                    this.inter || (a.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0, a.$viewport_position = Math.round(a.$viewport_position) || 0, i ? n.main(a, !0) : this.inter = setTimeout(function() {
                        n.main(a)
                    }, this.timeout))
                }, n
            }({
                timeout: 1e3,
                func: function(r, n) {
                    var i = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0,
                        a = new Date,
                        u = a - this.current_time;
                    (u > s.para.heatmap.scroll_delay_time && i - r.$viewport_position != 0 || n) && (r.$url = lt(), r.$title = document.title, r.$url_path = ue(), r.event_duration = Math.min(s.para.heatmap.scroll_event_duration, parseInt(u) / 1e3), r.event_duration = r.event_duration < 0 ? 0 : r.event_duration, function(l) {
                        Jr.stage.process("webStayEvent", l)
                    }(r)), this.current_time = a
                }
            });
            e.current_time = new Date, ie(window, "scroll", function() {
                if (!t) return !1;
                e.go()
            }), ie(window, "unload", function() {
                if (!t) return !1;
                e.go("notime")
            })
        },
        initHeatmap: function() {
            var t = this,
                e = !0;
            if (!f(s.para.heatmap) || s.para.heatmap.clickmap !== "default") return !1;
            T(s.para.heatmap.collect_url) && this.listenUrlChange(function() {
                e = !!s.para.heatmap.collect_url()
            }), s.para.heatmap.collect_elements === "all" ? s.para.heatmap.collect_elements = "all" : s.para.heatmap.collect_elements = "interact", s.para.heatmap.collect_elements === "all" ? ie(document, "click", function(r) {
                if (!e) return !1;
                var n = r || window.event;
                if (!n) return !1;
                var i = n.target || n.srcElement;
                if (typeof i != "object" || typeof i.tagName != "string") return !1;
                var a = i.tagName.toLowerCase();
                if (a === "body" || a === "html" || !i || !i.parentNode || !i.parentNode.children) return !1;
                var u = i.parentNode.tagName.toLowerCase();
                u === "a" || u === "button" ? t.start(n, i.parentNode, u) : t.start(n, i, a)
            }) : ie(document, "click", function(r) {
                if (!e) return !1;
                var n = r || window.event;
                if (!n) return !1;
                var i = n.target || n.srcElement,
                    a = s.heatmap.getTargetElement(i, r);
                a ? t.start(n, a, a.tagName.toLowerCase()) : bt(i) && i.tagName.toLowerCase() === "div" && f(s.para.heatmap) && s.para.heatmap.get_vtrack_config && sr.events.length > 0 && sr.isTargetEle(i) && t.start(n, i, i.tagName.toLowerCase(), {
                    $lib_method: "vtrack"
                })
            })
        }
    };

function Mr() {
    var t = H.campaignParams(),
        e = {};
    return I(t, function(r, n, i) {
        (" " + s.source_channel_standard + " ").indexOf(" " + n + " ") !== -1 ? e["$" + n] = i[n] : e[n] = i[n]
    }), e
}

function kn(t, e, r) {
    if (s.is_first_visitor && r) {
        var n = {};
        s.para.preset_properties.search_keyword_baidu && rr(document.referrer) && Ue() && (n.$search_keyword_id = Re.id(), n.$search_keyword_id_type = Re.type(), n.$search_keyword_id_hash = Qr(n.$search_keyword_id));
        var i = Zt(null, e);
        t(U({
            $first_visit_time: new Date,
            $first_referrer: i,
            $first_referrer_host: i ? xt(i, "取值异常") : "",
            $first_browser_language: k(navigator.language) ? navigator.language.toLowerCase() : "取值异常",
            $first_browser_charset: k(document.charset) ? document.charset.toUpperCase() : "取值异常",
            $first_traffic_source_type: en(),
            $first_search_keyword: Oe()
        }, Mr(), n)), s.is_first_visitor = !1
    }
}
var Ye = {
    autoTrackIsUsed: !1,
    isReady: function(t) {
        T(t) ? t() : s.log("error: isReady callback must be function")
    },
    getUtm: function() {
        return H.campaignParams()
    },
    getStayTime: function() {
        return (new Date - s._t) / 1e3
    },
    setProfileLocal: function(t) {
        if (!R.isSupport()) return s.setProfile(t), !1;
        if (!f(t) || it(t)) return !1;
        var e = d.readObjectVal("sensorsdata_2015_jssdk_profile"),
            r = !1;
        if (f(e) && !it(e)) {
            for (var n in t)(!(n in e) || e[n] === t[n]) && n in e || (e[n] = t[n], r = !0);
            r && (d.saveObjectVal("sensorsdata_2015_jssdk_profile", e), s.setProfile(t))
        } else d.saveObjectVal("sensorsdata_2015_jssdk_profile", t), s.setProfile(t)
    },
    setInitReferrer: function() {
        var t = Zt();
        s.setOnceProfile({
            _init_referrer: t,
            _init_referrer_host: H.pageProp.referrer_host
        })
    },
    setSessionReferrer: function() {
        var t = Zt();
        d.setSessionPropsOnce({
            _session_referrer: t,
            _session_referrer_host: H.pageProp.referrer_host
        })
    },
    setDefaultAttr: function() {
        H.register({
            _current_url: location.href,
            _referrer: Zt(),
            _referring_host: H.pageProp.referrer_host
        })
    },
    trackHeatMap: function(t, e, r) {
        if (typeof t == "object" && t.tagName && bt(t.parentNode)) {
            var n = t.tagName.toLowerCase(),
                i = t.parentNode.tagName.toLowerCase(),
                a = s.para.heatmap && s.para.heatmap.track_attr ? s.para.heatmap.track_attr : ["data-sensors-click"];
            n === "button" || n === "a" || i === "a" || i === "button" || n === "input" || n === "textarea" || Zr(t, a) || Ct.start(null, t, n, e, r)
        }
    },
    trackAllHeatMap: function(t, e, r) {
        if (typeof t == "object" && t.tagName) {
            var n = t.tagName.toLowerCase();
            Ct.start(null, t, n, e, r)
        }
    },
    autoTrackSinglePage: function(t, e) {
        var r;
        r = this.autoTrackIsUsed ? H.pageProp.url : H.pageProp.referrer;
        var n = !(t = f(t) ? t : {}).not_set_profile;

        function i(a, u) {
            s.track("$pageview", U({
                $referrer: r,
                $url: lt(),
                $url_path: ue(),
                $title: document.title
            }, a, Mr()), u), r = lt()
        }
        t.not_set_profile && delete t.not_set_profile, i(t, e), this.autoTrackSinglePage = i, kn(s.setOnceProfile, !1, n)
    },
    autoTrackWithoutProfile: function(t, e) {
        t = f(t) ? t : {}, this.autoTrack(U(t, {
            not_set_profile: !0
        }), e)
    },
    autoTrack: function(t, e) {
        t = f(t) ? t : {};
        var r = Mr(),
            n = !t.not_set_profile;
        t.not_set_profile && delete t.not_set_profile;
        var i = location.href;
        s.para.is_single_page && ci(function() {
            var a = Zt(i, !0);
            s.track("$pageview", U({
                $referrer: a,
                $url: lt(),
                $url_path: ue(),
                $title: document.title
            }, r, t), e), i = lt()
        }), s.track("$pageview", U({
            $referrer: Zt(null, !0),
            $url: lt(),
            $url_path: ue(),
            $title: document.title
        }, r, t), e), kn(s.setOnceProfile, !0, n), this.autoTrackIsUsed = !0
    },
    getAnonymousID: function() {
        return it(d._state) ? "SDK is not initialized." : d._state._first_id || d._state.first_id || d._state._distinct_id || d._state.distinct_id
    },
    setPlugin: function(t) {
        if (!f(t)) return !1;
        I(t, function(e, r) {
            T(e) && (f(window.SensorsDataWebJSSDKPlugin) && window.SensorsDataWebJSSDKPlugin[r] || f(s.modules) && s.modules[r] ? e(window.SensorsDataWebJSSDKPlugin[r]) : $(r + "is not found,please check sensorsdata documents."))
        })
    },
    useModulePlugin: function() {
        s.use.apply(s, arguments)
    },
    useAppPlugin: function() {
        this.setPlugin.apply(this, arguments)
    }
};

function Fi(t, e) {
    var r = t.id,
        n = t.callback,
        i = t.name,
        a = d.getFirstId(),
        u = d.getOriginDistinctId();
    if (!M({
            distinct_id: r
        })) return L("login id is invalid"), !1;
    if (r === d.getOriginDistinctId() && !a) return L("login id is equal to distinct_id"), !1;
    if (f(d._state.identities) && d._state.identities.hasOwnProperty(i) && r === d._state.first_id) return !1;
    if (d._state.history_login_id.name !== i || r !== d._state.history_login_id.value) {
        d._state.identities[i] = r, d.set("history_login_id", {
            name: i,
            value: r
        }), a || d.set("first_id", u), e(r, "$SignUp", {}, n);
        var l = {
            $identity_cookie_id: d._state.identities.$identity_cookie_id
        };
        return l[i] = r, Ki(l), !0
    }
    return !1
}

function Ki(t) {
    var e = {};
    for (var r in t) e[r] = t[r];
    d._state.identities = e, d.save()
}
var Ca = {
        state: 0,
        historyState: [],
        stateType: {
            1: "1-init未开始",
            2: "2-init开始",
            3: "3-store完成"
        },
        getState: function() {
            return this.historyState.join(`
`)
        },
        setState: function(t) {
            String(t) in this.stateType && (this.state = t), this.historyState.push(this.stateType[t])
        }
    },
    ja = 1;

function Vi(t, e) {
    if (k(t) || f(t)) {
        var r;
        if (f(t)) {
            var n = s.modules && s.modules[t.plugin_name];
            n && n !== t && $(t.name + " is conflict with builtin plugin, and sdk uses builtin plugin."), r = n || t
        }
        return k(t) && (f(s.modules) && f(s.modules[t]) ? r = s.modules[t] : f(window.SensorsDataWebJSSDKPlugin) && f(window.SensorsDataWebJSSDKPlugin[t]) ? r = window.SensorsDataWebJSSDKPlugin[t] : window.sensorsDataAnalytic201505 && window.sensorsDataAnalytic201505.modules[t] && (r = window.sensorsDataAnalytic201505.modules[t])), r && T(r.init) ? (r.plugin_is_init || (r.plugin_name || $("warning: invalid plugin, plugin_name required."), r.plugin_version ? r.plugin_version !== s.lib_version && $("warning: plugin version not match SDK version. plugin may not work correctly. ") : $("warning: invalid plugin, plugin version required."), !r.plugin_is_init && r.init(s, e), r.plugin_is_init = !0, s.modules = s.modules || {}, s.modules[r.plugin_name || "unnamed_" + ja++] = r), r) : ($((t.plugin_name || t) + " is not found or it's not a standard plugin. Please check sensorsdata official documents."), r)
    }
    L("use's first arguments must be string or object.")
}

function qr(t, e, r, n) {
    var i = d.getFirstId() || d.getDistinctId();
    d.set("distinct_id", t), st.send({
        original_id: i,
        distinct_id: d.getDistinctId(),
        type: "track_signup",
        event: e,
        properties: r
    }, n)
}

function Wi(t) {
    M({
        properties: t
    }) ? d.setProps(t) : L("register输入的参数有误")
}

function Pn(t, e) {
    typeof t == "number" && (t = String(t)), !Fi({
        id: t,
        callback: e,
        name: Le
    }, qr) && T(e) && e()
}
var Oa = {
    __proto__: null,
    setInitVar: function() {
        s._t = s._t || 1 * new Date, s.is_first_visitor = !1, s.source_channel_standard = Ci
    },
    initPara: function(t) {
        U(S, t || s.para || {}), s.para = S;
        var e, r = {};
        if (f(s.para.is_track_latest))
            for (var n in s.para.is_track_latest) r["latest_" + n] = s.para.is_track_latest[n];
        for (e in s.para.preset_properties = U({}, Ze.preset_properties, r, s.para.preset_properties || {}), Ze) s.para[e] === void 0 && (s.para[e] = Ze[e]);
        typeof s.para.web_url != "string" || s.para.web_url.slice(0, 3) !== "://" && s.para.web_url.slice(0, 2) !== "//" || (s.para.web_url.slice(0, 3) === "://" ? s.para.web_url = location.protocol.slice(0, -1) + s.para.web_url : s.para.web_url = location.protocol + s.para.web_url), te.protocol.serverUrl(), s.bridge && s.bridge.initPara();
        var i = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
            a = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"],
            u = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"],
            l = {
                baidu: ["wd", "word", "kw", "keyword"],
                google: "q",
                bing: "q",
                yahoo: "p",
                sogou: ["query", "keyword"],
                so: "q",
                sm: "q"
            };
        typeof s.para.source_type == "object" && (s.para.source_type.utm = E(s.para.source_type.utm) ? s.para.source_type.utm.concat(i) : i, s.para.source_type.search = E(s.para.source_type.search) ? s.para.source_type.search.concat(a) : a, s.para.source_type.social = E(s.para.source_type.social) ? s.para.source_type.social.concat(u) : u, s.para.source_type.keyword = f(s.para.source_type.keyword) ? U(l, s.para.source_type.keyword) : l);
        var p = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
        if (s.para.heatmap && !f(s.para.heatmap) && (s.para.heatmap = {}), f(s.para.heatmap)) {
            s.para.heatmap.clickmap = s.para.heatmap.clickmap || "default", s.para.heatmap.scroll_notice_map = s.para.heatmap.scroll_notice_map || "default", s.para.heatmap.scroll_delay_time = s.para.heatmap.scroll_delay_time || 4e3, s.para.heatmap.scroll_event_duration = s.para.heatmap.scroll_event_duration || 18e3, s.para.heatmap.renderRefreshTime = s.para.heatmap.renderRefreshTime || 1e3, s.para.heatmap.loadTimeout = s.para.heatmap.loadTimeout || 1e3, s.para.heatmap.get_vtrack_config !== !0 && (s.para.heatmap.get_vtrack_config = !1);
            var g = E(s.para.heatmap.track_attr) ? _i(s.para.heatmap.track_attr, function(c) {
                return c && typeof c == "string"
            }) : [];
            g.push("data-sensors-click"), s.para.heatmap.track_attr = g, f(s.para.heatmap.collect_tags) ? s.para.heatmap.collect_tags.div === !0 ? s.para.heatmap.collect_tags.div = {
                ignore_tags: p,
                max_level: 1
            } : f(s.para.heatmap.collect_tags.div) ? (s.para.heatmap.collect_tags.div.ignore_tags ? E(s.para.heatmap.collect_tags.div.ignore_tags) || ($("ignore_tags 参数必须是数组格式"), s.para.heatmap.collect_tags.div.ignore_tags = p) : s.para.heatmap.collect_tags.div.ignore_tags = p, s.para.heatmap.collect_tags.div.max_level && nt([1, 2, 3], s.para.heatmap.collect_tags.div.max_level) === -1 && (s.para.heatmap.collect_tags.div.max_level = 1)) : s.para.heatmap.collect_tags.div = !1 : s.para.heatmap.collect_tags = {
                div: !1
            }
        }
        s.para.server_url = Li(s.para.server_url), s.para.noCache === !0 ? s.para.noCache = "?" + new Date().getTime() : s.para.noCache = "", s.para.callback_timeout > s.para.datasend_timeout && (s.para.datasend_timeout = s.para.callback_timeout), s.para.heatmap && s.para.heatmap.collect_tags && f(s.para.heatmap.collect_tags) && I(s.para.heatmap.collect_tags, function(c, _) {
            _ !== "div" && c && s.heatmap.otherTags.push(_)
        }), s.para.heatmap && s.para.heatmap.clickmap === "default" && s.heatmap.initUnlimitedTags()
    },
    quick: function() {
        var t = Array.prototype.slice.call(arguments),
            e = t[0],
            r = t.slice(1);
        if (typeof e == "string" && Ye[e]) return Ye[e].apply(Ye, r);
        typeof e == "function" ? e.apply(s, r) : $("quick方法中没有这个功能" + t[0])
    },
    use: Vi,
    track: function(t, e, r) {
        M({
            event: t,
            properties: e
        }) && st.send({
            type: "track",
            event: t,
            properties: e
        }, r)
    },
    bind: function(t, e) {
        if (!M({
                bindKey: t,
                bindValue: e
            })) return !1;
        d._state.identities[t] = e, d.save(), st.send({
            type: "track_id_bind",
            event: "$BindID",
            properties: {}
        })
    },
    unbind: function(t, e) {
        var r = function(n, i) {
            if (!M({
                    unbindKey: n,
                    bindValue: i
                })) return !1;
            if (f(d._state.identities) && d._state.identities.hasOwnProperty(n) && d._state.identities[n] === i) {
                var a = d.getUnionId().login_id;
                a && n + "+" + i === a && (d._state.distinct_id = d._state.first_id, d._state.first_id = "", d.set("history_login_id", {
                    name: "",
                    value: ""
                })), n !== "$identity_cookie_id" && (delete d._state.identities[n], d.save())
            }
            var u = {};
            return u[n] = i, u
        }(t, e);
        r && st.send({
            identities: r,
            type: "track_id_unbind",
            event: "$UnbindID",
            properties: {}
        })
    },
    trackLink: function(t, e, r) {
        typeof t == "object" && t.tagName ? Sn({
            ele: t
        }, e, r, s.track) : typeof t == "object" && t.target && t.event && Sn(t, e, r, s.track)
    },
    trackLinks: function(t, e, r) {
        return r = r || {}, !(!t || typeof t != "object") && !(!t.href || /^javascript/.test(t.href) || t.target) && void ie(t, "click", function(n) {
            n.preventDefault();
            var i = !1;

            function a() {
                i || (i = !0, location.href = t.href)
            }
            setTimeout(a, 1e3), s.track(e, r, a)
        })
    },
    setItem: function(t, e, r) {
        M({
            item_type: t,
            item_id: e,
            properties: r
        }) && st.sendItem({
            type: "item_set",
            item_type: t,
            item_id: e,
            properties: r || {}
        })
    },
    deleteItem: function(t, e) {
        M({
            item_type: t,
            item_id: e
        }) && st.sendItem({
            type: "item_delete",
            item_type: t,
            item_id: e
        })
    },
    setProfile: function(t, e) {
        M({
            propertiesMust: t
        }) && st.send({
            type: "profile_set",
            properties: t
        }, e)
    },
    setOnceProfile: function(t, e) {
        M({
            propertiesMust: t
        }) && st.send({
            type: "profile_set_once",
            properties: t
        }, e)
    },
    appendProfile: function(t, e) {
        M({
            propertiesMust: t
        }) && (I(t, function(r, n) {
            k(r) ? t[n] = [r] : E(r) ? t[n] = r : (delete t[n], $("appendProfile属性的值必须是字符串或者数组"))
        }), it(t) || st.send({
            type: "profile_append",
            properties: t
        }, e))
    },
    incrementProfile: function(t, e) {
        var r = t;
        k(t) && ((t = {})[r] = 1), M({
            propertiesMust: t
        }) && (function(n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i) && !/-*\d+/.test(String(n[i]))) return !1;
            return !0
        }(t) ? st.send({
            type: "profile_increment",
            properties: t
        }, e) : L("profile_increment的值只能是数字"))
    },
    deleteProfile: function(t) {
        st.send({
            type: "profile_delete"
        }, t), d.set("distinct_id", Gt()), d.set("first_id", "")
    },
    unsetProfile: function(t, e) {
        var r = t,
            n = {};
        k(t) && (t = []).push(r), E(t) ? (I(t, function(i) {
            k(i) ? n[i] = !0 : $("profile_unset给的数组里面的值必须时string,已经过滤掉", i)
        }), st.send({
            type: "profile_unset",
            properties: n
        }, e)) : L("profile_unset的参数必须是数组")
    },
    identify: function(t, e) {
        typeof t == "number" && (t = String(t));
        var r = d.getFirstId();
        if (t === void 0) {
            var n = Gt();
            r ? d.set("first_id", n) : d.set("distinct_id", n)
        } else M({
            distinct_id: t
        }) && (e === !0 ? r ? d.set("first_id", t) : d.set("distinct_id", t) : r ? d.change("first_id", t) : d.change("distinct_id", t))
    },
    resetAnonymousIdentity: function(t) {
        if (d.getFirstId()) return L("resetAnonymousIdentity must be used in a logout state ！"), !1;
        if (typeof t == "number" && (t = String(t)), t === void 0) {
            var e = Gt();
            d._state.identities.$identity_cookie_id = e, d.set("distinct_id", e)
        } else M({
            distinct_id: t
        }) && (d._state.identities.$identity_cookie_id = t, d.set("distinct_id", t))
    },
    trackSignup: function(t, e, r, n) {
        typeof t == "number" && (t = String(t)), M({
            distinct_id: t,
            event: e,
            properties: r
        }) && qr(t, e, r, n)
    },
    registerPage: function(t) {
        M({
            properties: t
        }) ? U(H.currentProps, t) : L("register输入的参数有误")
    },
    clearAllRegister: function(t) {
        d.clearAllProps(t)
    },
    clearPageRegister: function(t) {
        var e;
        if (E(t) && t.length > 0)
            for (e = 0; e < t.length; e++) k(t[e]) && t[e] in H.currentProps && delete H.currentProps[t[e]];
        else if (t === !0)
            for (e in H.currentProps) delete H.currentProps[e]
    },
    register: Wi,
    registerOnce: function(t) {
        M({
            properties: t
        }) ? d.setPropsOnce(t) : L("registerOnce输入的参数有误")
    },
    registerSession: function(t) {
        s.log("registerSession 方法已经弃用，有问题联系技术顾问"), M({
            properties: t
        }) ? d.setSessionProps(t) : L("registerSession输入的参数有误")
    },
    registerSessionOnce: function(t) {
        s.log("registerSessionOnce 方法已经弃用，有问题联系技术顾问"), M({
            properties: t
        }) ? d.setSessionPropsOnce(t) : L("registerSessionOnce输入的参数有误")
    },
    login: Pn,
    loginWithKey: function(t, e) {
        return typeof e == "number" && (e = String(e)), typeof t == "number" && (t = String(t)), !!M({
            loginIdKey: t
        }) && (Le === t ? (Pn(e), !1) : void Fi({
            id: e,
            callback: null,
            name: t
        }, qr))
    },
    logout: function(t) {
        var e = d.getFirstId();
        if (e)
            if (d.set("first_id", ""), t === !0) {
                var r = Gt();
                d.set("distinct_id", r)
            } else d.set("distinct_id", e);
        Ki({
            $identity_cookie_id: d._state.identities.$identity_cookie_id
        }), d.set("history_login_id", {
            name: "",
            value: ""
        })
    },
    getPresetProperties: function() {
        var t, e, r = {
                $is_first_day: nr(),
                $is_first_time: He.is_page_first_visited,
                $referrer: H.pageProp.referrer || "",
                $referrer_host: H.pageProp.referrer ? xt(H.pageProp.referrer) : "",
                $url: lt(),
                $url_path: ue(),
                $title: document.title || "",
                _distinct_id: d.getDistinctId(),
                identities: JSON.parse(JSON.stringify(d._state.identities))
            },
            n = U({}, H.properties(), d.getProps(), (t = H.campaignParams(), e = {}, I(t, function(i, a, u) {
                (" " + s.source_channel_standard + " ").indexOf(" " + a + " ") !== -1 ? e["$" + a] = u[a] : e[a] = u[a]
            }), e), r);
        return s.para.preset_properties.latest_referrer && s.para.preset_properties.latest_referrer_host && (n.$latest_referrer_host = n.$latest_referrer === "" ? "" : xt(n.$latest_referrer)), n
    },
    readyState: Ca,
    debug: te,
    on: Ri,
    log: Et
};
et.setup(Et);
var zi = U({}, ba, wa),
    Na = {
        bridge_info: {
            touch_app_bridge: !1,
            verify_success: !1,
            platform: "",
            support_two_way_call: !1
        },
        is_verify_success: !1,
        initPara: function() {
            var t = {
                is_send: s.para.use_app_track_is_send !== !1 && s.para.use_app_track !== "only",
                white_list: [],
                is_mui: s.para.use_app_track === "mui"
            };
            typeof s.para.app_js_bridge == "object" ? s.para.app_js_bridge = U({}, t, s.para.app_js_bridge) : s.para.use_app_track !== !0 && s.para.app_js_bridge !== !0 && s.para.use_app_track !== "only" && s.para.use_app_track !== "mui" || (s.para.app_js_bridge = U({}, t)), s.para.app_js_bridge.is_send === !1 && $("设置了 is_send:false,如果打通失败，数据将被丢弃!")
        },
        app_js_bridge_v1: function() {
            var t = null,
                e = null;
            window.sensorsdata_app_js_bridge_call_js = function(r) {
                (function(n) {
                    Ee(t = n) && (t = JSON.parse(t)), e && (e(t), e = null, t = null)
                })(r)
            }, s.getAppStatus = function(r) {
                if (function() {
                        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                            var n = document.createElement("iframe");
                            n.setAttribute("src", "sensorsanalytics://getAppInfo"), document.documentElement.appendChild(n), n.parentNode.removeChild(n), n = null
                        }
                    }(), typeof window.SensorsData_APP_JS_Bridge == "object" && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && Ee(t = window.SensorsData_APP_JS_Bridge.sensorsdata_call_app()) && (t = JSON.parse(t)), !r) return t;
                t === null ? e = r : (r(t), t = null)
            }
        },
        hasVisualModeBridge: function() {
            var t = window.SensorsData_App_Visual_Bridge,
                e = "sensorsdata_visualized_mode";
            return f(t) && t[e] && (t[e] === !0 || t[e]())
        },
        validateAppUrl: function(t) {
            function e(u) {
                var l = {
                    hostname: "",
                    project: ""
                };
                try {
                    u = $t(u), l.hostname = u.hostname, l.project = u.searchParams.get("project") || "default"
                } catch (p) {
                    L("validateAppUrl:" + p)
                }
                return l
            }
            var r = e(t),
                n = e(s.para.server_url);
            if (r.hostname === n.hostname && r.project === n.project) return !0;
            if (E(s.para.app_js_bridge.white_list))
                for (var i = 0; i < s.para.app_js_bridge.white_list.length; i++) {
                    var a = e(s.para.app_js_bridge.white_list[i]);
                    if (a.hostname === r.hostname && a.project === r.project) return !0
                }
            return !1
        }
    };

function Ne(t) {
    var e = this;
    this.type = t, this.resultCbs = {}, this.timeoutCbs = {}, this.timerId = null, this.appCallJsCallback = null, window.sensorsdata_app_call_js || (window.sensorsdata_app_call_js = function(r, n) {
        if (r in window.sensorsdata_app_call_js.modules) return window.sensorsdata_app_call_js.modules[r](n)
    }), window.sensorsdata_app_call_js.modules = window.sensorsdata_app_call_js.modules || {}, window.sensorsdata_app_call_js.modules[this.type] = function(r) {
        try {
            var n = be(r) || r;
            try {
                n = JSON.parse(n)
            } catch {}
            var i = n && n.message_id;
            if (i && e.resultCbs[i]) {
                if (r = n, e.timeoutCbs[i] && e.timeoutCbs[i].isTimeout) return void(e.resultCbs[i].callbacks.length = 0);
                if (e.resultCbs[i])
                    for (var a in e.resultCbs[i].result = r, clearTimeout(e.timerId), e.timeoutCbs[i].callbacks.length = 0, e.resultCbs[i].callbacks) e.resultCbs[i].callbacks[a].call(null, r), e.resultCbs[i].callbacks.splice(a, 1);
                return
            }
            return e.appCallJsCallback && e.appCallJsCallback.call(null, r)
        } catch {
            L("app 回调 js 异常", r)
        }
    }
}

function Cn(t) {
    try {
        if (s.bridge.activeBridge && T(s.bridge.activeBridge.handleCommand)) return s.bridge.activeBridge.handleCommand(t)
    } catch (e) {
        L("Error: handle command exception:" + e)
    }
    return L("数据发往App失败，App没有暴露bridge,type:" + t.callType), !1
}

function Xi(t) {
    this.bridge = new Ne(t.type)
}

function jn(t) {
    var e = null;
    try {
        var r = JSON.parse(window.name);
        e = r[t] ? pe(r[t]) : null
    } catch {
        e = null
    }
    return e === null && (e = Mt(location.href, t) || null), e
}
Ne.prototype.call = function(t, e) {
    var r = this,
        n = new Date().getTime().toString(16) + String(yt()).replace(".", "").slice(1, 8);
    this.resultCbs[n] = r.resultCbs[n] || {
        result: null,
        callbacks: []
    }, this.timeoutCbs[n] = r.timeoutCbs[n] || {
        isTimeout: !1,
        callbacks: []
    }, (t = t.data ? t : {
        data: t
    }).data.message_id = n;
    var i = U({
        callType: this.type
    }, t);
    return e && (this.timerId = setTimeout(function() {
        for (var a in r.timeoutCbs[n].isTimeout = !0, r.timeoutCbs[n].callbacks) r.timeoutCbs[n].callbacks[a].call(null), r.timeoutCbs[n].callbacks.splice(a, 1)
    }, e)), Cn(i), {
        onResult: function(a) {
            return r.resultCbs[n].result ? (a(r.resultCbs[n].result), this) : (!r.timeoutCbs[n].isTimeout && r.resultCbs[n].callbacks.push(a), this)
        },
        onTimeout: function(a) {
            return r.timeoutCbs[n].isTimeout ? (a(), this) : (!r.resultCbs[n].result && r.timeoutCbs[n].callbacks.push(a), this)
        }
    }
}, Ne.prototype.onAppNotify = function(t) {
    this.appCallJsCallback = t
}, Ne.prototype.notifyApp = function(t, e) {
    var r = U({
        callType: this.type
    }, t);
    return e && (r.message_id = e), Cn(r)
}, Xi.prototype = {
    double: function() {},
    getAppData: function() {},
    hasAppBridge: function() {
        return s.bridge.bridge_info.support_two_way_call
    },
    init: function() {},
    jsCallApp: function() {},
    requestToApp: function(t) {
        this.bridge.call(t, t.timeout.time).onResult(function(e) {
            T(t.callback) && t.callback(e)
        }).onTimeout(function() {
            T(t.timeout.callback) && t.timeout.callback()
        })
    }
};
var zt = {
        isSeachHasKeyword: function() {
            return Mt(location.href, "sa-request-id") !== "" && (typeof sessionStorage.getItem("sensors-visual-mode") == "string" && sessionStorage.removeItem("sensors-visual-mode"), !0)
        },
        hasKeywordHandle: function() {
            var t = location.href,
                e = Mt(t, "sa-request-id") || null,
                r = Mt(t, "sa-request-type") || null,
                n = Mt(t, "sa-request-url") || null;
            if (Ct.setNotice(n), me.isSupport())
                if (n !== null && sessionStorage.setItem("sensors_heatmap_url", n), sessionStorage.setItem("sensors_heatmap_id", e), r !== null) r === "1" || r === "2" || r === "3" ? sessionStorage.setItem("sensors_heatmap_type", r) : r = null;
                else {
                    var i = sessionStorage.getItem("sensors_heatmap_type");
                    r = i !== null ? i : null
                }
            this.isReady(e, r)
        },
        isReady: function(t, e, r) {
            s.para.heatmap_url ? lr({
                success: function() {
                    setTimeout(function() {
                        typeof sa_jssdk_heatmap_render < "u" && (sa_jssdk_heatmap_render(s, t, e, r), typeof console == "object" && typeof console.log == "function" && (s.heatmap_version && s.heatmap_version === s.lib_version || $("heatmap.js与sensorsdata.js版本号不一致，可能存在风险!")))
                    }, 0)
                },
                error: function() {},
                type: "js",
                url: s.para.heatmap_url
            }) : L("没有指定heatmap_url的路径")
        },
        isStorageHasKeyword: function() {
            return me.isSupport() && typeof sessionStorage.getItem("sensors_heatmap_id") == "string"
        },
        storageHasKeywordHandle: function() {
            Ct.setNotice(), zt.isReady(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href)
        },
        isWindowNameHasKeyword: function() {
            try {
                var t = JSON.parse(window.name),
                    e = k(t["sa-request-page-url"]) ? pe(t["sa-request-page-url"]) : null;
                return t["sa-request-id"] && k(t["sa-request-id"]) && e === location.href
            } catch {
                return !1
            }
        },
        windowNameHasKeywordHandle: function() {
            var t = JSON.parse(window.name);

            function e(a) {
                var u = t[a];
                return k(u) ? pe(u) : null
            }
            var r = e("sa-request-id"),
                n = e("sa-request-type"),
                i = e("sa-request-url");
            Ct.setNotice(i), me.isSupport() && (i !== null && sessionStorage.setItem("sensors_heatmap_url", i), sessionStorage.setItem("sensors_heatmap_id", r), n !== null ? n === "1" || n === "2" || n === "3" ? sessionStorage.setItem("sensors_heatmap_type", n) : n = null : n = sessionStorage.getItem("sensors_heatmap_type") !== null ? sessionStorage.getItem("sensors_heatmap_type") : null), zt.isReady(r, n)
        }
    },
    Nt = {
        isStorageHasKeyword: function() {
            return me.isSupport() && typeof sessionStorage.getItem("sensors-visual-mode") == "string"
        },
        isSearchHasKeyword: function() {
            return (jn("sa-visual-mode") === !0 || jn("sa-visual-mode") === "true") && (typeof sessionStorage.getItem("sensors_heatmap_id") == "string" && sessionStorage.removeItem("sensors_heatmap_id"), !0)
        },
        loadVtrack: function() {
            lr({
                success: function() {},
                error: function() {},
                type: "js",
                url: s.para.vtrack_url ? s.para.vtrack_url : qi() + "//static.sensorsdata.cn/sdk/" + s.lib_version + "/vtrack.min.js"
            })
        },
        messageListener: function(t) {
            if (!t || !t.data || t.data.source !== "sa-fe") return !1;
            if (t.data.type === "v-track-mode") {
                if (t.data.data && t.data.data.isVtrack)
                    if (me.isSupport() && sessionStorage.setItem("sensors-visual-mode", "true"), t.data.data.userURL && location.href.match(/sa-visual-mode=true/)) {
                        var e = t.data.data.userURL;
                        e && (window.location.href = encodeURI(e))
                    } else Nt.loadVtrack();
                window.removeEventListener("message", Nt.messageListener, !1)
            }
        },
        removeMessageHandle: function() {
            window.removeEventListener && window.removeEventListener("message", Nt.messageListener, !1)
        },
        verifyVtrackMode: function() {
            window.addEventListener && window.addEventListener("message", Nt.messageListener, !1), Nt.postMessage()
        },
        postMessage: function() {
            try {
                window.parent && window.parent.postMessage && window.parent.postMessage({
                    source: "sa-web-sdk",
                    type: "v-is-vtrack",
                    data: {
                        sdkversion: ur
                    }
                }, "*")
            } catch {
                L("浏览器版本过低，不支持 postMessage API")
            }
        },
        notifyUser: function() {
            var t = function(e) {
                if (!e || !e.data || e.data.source !== "sa-fe") return !1;
                e.data.type === "v-track-mode" && (e.data.data && e.data.data.isVtrack && alert("当前版本不支持，请升级部署神策数据治理"), window.removeEventListener("message", t, !1))
            };
            window.addEventListener && window.addEventListener("message", t, !1), Nt.postMessage()
        }
    };

function yr(t) {
    var e = s.bridge.bridge_info;

    function r() {
        var i = [];
        e.touch_app_bridge || i.push(te.defineMode("1")), f(s.para.app_js_bridge) || (i.push(te.defineMode("2")), e.verify_success = !1), f(s.para.heatmap) && s.para.heatmap.clickmap == "default" || i.push(te.defineMode("3")), e.verify_success === "fail" && i.push(te.defineMode("4")), new s.SDKJSBridge("app_alert").notifyApp({
            data: i
        })
    }
    if (s.bridge.hasVisualModeBridge())
        if (f(s.para.heatmap) && s.para.heatmap.clickmap == "default")
            if (f(s.para.app_js_bridge) && e.verify_success === "success")
                if (t) window.sa_jssdk_app_define_mode(s, t);
                else {
                    var n = location.protocol;
                    lr({
                        success: function() {
                            setTimeout(function() {
                                typeof sa_jssdk_app_define_mode < "u" && window.sa_jssdk_app_define_mode(s, t)
                            }, 0)
                        },
                        error: function() {},
                        type: "js",
                        url: (n = nt(["http:", "https:"], n) > -1 ? n : "https:") + "//static.sensorsdata.cn/sdk/" + s.lib_version + "/vapph5define.min.js"
                    })
                }
    else r();
    else r()
}

function Ta() {
    s.readyState.setState(3), new s.SDKJSBridge("visualized").onAppNotify(function() {
            yr(typeof sa_jssdk_app_define_mode < "u")
        }), yr(!1), s.bridge.app_js_bridge_v1(), H.initPage(),
        function(t) {
            s.para.is_track_single_page && Rr.on("switch", function(e) {
                var r = function(i) {
                    if (i = i || {}, e !== location.href) {
                        H.pageProp.referrer = lt(e);
                        var a = U({
                            $url: lt(),
                            $referrer: lt(e)
                        }, i);
                        T(t) ? t(a) : s.quick && s.quick("autoTrack", a)
                    }
                };
                if (typeof s.para.is_track_single_page == "boolean") r();
                else if (typeof s.para.is_track_single_page == "function") {
                    var n = s.para.is_track_single_page();
                    f(n) ? r(n) : n === !0 && r()
                }
            })
        }(), d.init(),
        function() {
            var t = H.pageProp.url_domain,
                e = {};
            t === "" && (t = "url解析失败");
            var r = Oe(document.referrer, !0);
            if (S.preset_properties.search_keyword_baidu ? rr(document.referrer) && (!Ue() || f(r) && r.active ? d._state && d._state.props && (d._state.props.$search_keyword_id && delete d._state.props.$search_keyword_id, d._state.props.$search_keyword_id_type && delete d._state.props.$search_keyword_id_type, d._state.props.$search_keyword_id_hash && delete d._state.props.$search_keyword_id_hash) : (e.$search_keyword_id = Re.id(), e.$search_keyword_id_type = Re.type(), e.$search_keyword_id_hash = Qr(e.$search_keyword_id))) : d._state && d._state.props && (d._state.props.$search_keyword_id && delete d._state.props.$search_keyword_id, d._state.props.$search_keyword_id_type && delete d._state.props.$search_keyword_id_type, d._state.props.$search_keyword_id_hash && delete d._state.props.$search_keyword_id_hash), d.save(), I(S.preset_properties, function(u, l) {
                    if (l.indexOf("latest_") === -1) return !1;
                    if (l = l.slice(7), u) {
                        if (l === "wx_ad_click_id" && u === "not_collect") return !1;
                        if (l !== "utm" && t === "url解析失败") l === "wx_ad_click_id" ? (e._latest_wx_ad_click_id = "url的domain解析失败", e._latest_wx_ad_hash_key = "url的domain解析失败", e._latest_wx_ad_callbacks = "url的domain解析失败") : e["$latest_" + l] = "url的domain解析失败";
                        else if (rr(document.referrer)) switch (l) {
                            case "traffic_source_type":
                                e.$latest_traffic_source_type = en();
                                break;
                            case "referrer":
                                e.$latest_referrer = H.pageProp.referrer;
                                break;
                            case "search_keyword":
                                Oe() ? e.$latest_search_keyword = Oe() : f(d._state) && f(d._state.props) && d._state.props.$latest_search_keyword && delete d._state.props.$latest_search_keyword;
                                break;
                            case "landing_page":
                                e.$latest_landing_page = lt();
                                break;
                            case "wx_ad_click_id":
                                var p = Ai(location.href);
                                e._latest_wx_ad_click_id = p.click_id, e._latest_wx_ad_hash_key = p.hash_key, e._latest_wx_ad_callbacks = p.callbacks
                        }
                    } else if (l === "utm" && d._state && d._state.props)
                        for (var g in d._state.props)(g.indexOf("$latest_utm") === 0 || g.indexOf("_latest_") === 0 && g.indexOf("_latest_wx_ad_") < 0) && delete d._state.props[g];
                    else d._state && d._state.props && "$latest_" + l in d._state.props ? delete d._state.props["$latest_" + l] : l == "wx_ad_click_id" && d._state && d._state.props && u === !1 && I(["_latest_wx_ad_click_id", "_latest_wx_ad_hash_key", "_latest_wx_ad_callbacks"], function(c) {
                        c in d._state.props && delete d._state.props[c]
                    })
                }), S.preset_properties.latest_utm) {
                var n = H.campaignParamsStandard("$latest_", "_latest_"),
                    i = n.$utms,
                    a = n.otherUtms;
                it(i) || U(e, i), it(a) || U(e, a)
            }
            Wi(e)
        }(), ee.init(), s.bridge.bridge_info.verify_success === "success" && nn.init(), s.readyState.setState(4), s._q && E(s._q) && s._q.length > 0 && I(s._q, function(t) {
            s[t[0]].apply(s, Array.prototype.slice.call(t[1]))
        }), f(s.para.heatmap) && (Ct.initHeatmap(), Ct.initScrollmap())
}

function Da() {
    zt.isSeachHasKeyword() ? zt.hasKeywordHandle() : window.parent !== self && Nt.isSearchHasKeyword() ? Nt.verifyVtrackMode() : zt.isWindowNameHasKeyword() ? zt.windowNameHasKeywordHandle() : zt.isStorageHasKeyword() ? zt.storageHasKeywordHandle() : window.parent !== self && Nt.isStorageHasKeyword() ? Nt.verifyVtrackMode() : (Ta(), Nt.notifyUser())
}
var Aa = ["setItem", "deleteItem", "getAppStatus", "track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "resetAnonymousIdentity", "login", "logout", "trackLink", "clearAllRegister", "clearPageRegister", "bind", "unbind", "loginWithKey"];

function On() {
    I(Aa, function(t) {
        var e = s[t];
        s[t] = function() {
            if (s.readyState.state < 3) return E(s._q) || (s._q = []), $("calling sdk api before init is deprecated."), s._q.push([t, arguments]), !1;
            if (!T(s.getDisabled) || !s.getDisabled()) {
                if (s.readyState.getState()) return e.apply(s, arguments);
                L("请先初始化神策JS SDK")
            }
        }
    })
}
var $a = {
    track: function(t, e, r) {},
    quick: function(t, e, r, n) {},
    register: function(t) {},
    registerPage: function(t) {},
    registerOnce: function(t) {},
    clearAllRegister: function(t) {},
    trackSignup: function(t, e, r, n) {},
    setProfile: function(t, e) {},
    setOnceProfile: function(t, e) {},
    appendProfile: function(t, e) {},
    incrementProfile: function(t, e) {},
    deleteProfile: function(t) {},
    unsetProfile: function(t, e) {},
    identify: function(t, e) {},
    resetAnonymousIdentity: function(t) {},
    login: function(t, e) {},
    logout: function(t) {},
    trackLink: function(t, e, r) {},
    deleteItem: function(t, e) {},
    setItem: function(t, e, r) {},
    getAppStatus: function(t) {},
    clearPageRegister: function(t) {}
};

function xa(t, e) {
    this.cancel = function() {
        t = !0
    }, this.getCanceled = function() {
        return t || !1
    }, this.stop = function() {
        e = !0
    }, this.getStopped = function() {
        return e || !1
    }
}

function Ia(t, e, r) {
    var n = null;
    try {
        n = JSON.parse(JSON.stringify(t || null))
    } catch {}
    this.getOriginalData = function() {
        return n
    }, this.getPosition = function() {
        return e
    }, this.cancellationToken = new xa, this.sensors = r
}

function ce(t) {
    if (!f(t)) throw "error: Stage constructor requires arguments.";
    this.processDef = t, this.registeredInterceptors = {}
}
ce.prototype.process = function(t, e) {
    if (t && t in this.processDef) {
        var r = this.registeredInterceptors[t];
        if (r && E(r) && r.length > 0)
            for (var n = {
                    current: 0,
                    total: r.length
                }, i = new Ia(e, n, s), a = 0; a < r.length; a++) try {
                if (n.current = a + 1, e = r[a].call(null, e, i) || e, i.cancellationToken.getCanceled()) break;
                if (i.cancellationToken.getStopped()) return
            } catch (u) {
                L("interceptor error:" + u)
            }
        return this.processDef[t] && this.processDef[t] in this.processDef && (e = this.process(this.processDef[t], e)), e
    }
    L("process [" + t + "] is not supported")
}, ce.prototype.registerStageImplementation = function(t) {
    t && t.init && T(t.init) && (t.init(this), t.interceptor && this.registerInterceptor(t.interceptor))
}, ce.prototype.registerInterceptor = function(t) {
    if (t)
        for (var e in t) {
            var r = t[e];
            if (r && f(r) && T(r.entry)) {
                It(r.priority) || (r.priority = Number.MAX_VALUE), this.registeredInterceptors[e] || (this.registeredInterceptors[e] = []);
                var n = this.registeredInterceptors[e];
                r.entry.priority = r.priority, n.push(r.entry), n.sort(function(i, a) {
                    return i.priority - a.priority
                })
            }
        }
};
var Zi = new ce({
        basicProps: "extendProps",
        extendProps: "formatData",
        formatData: "finalAdjustData",
        finalAdjustData: null
    }),
    Qi = new ce({
        send: null
    }),
    Yi = new ce({
        getUtmData: null,
        callSchema: null
    }),
    Gi = new ce({
        webClickEvent: null,
        webStayEvent: null
    });

function br(t) {
    t && t.buildDataStage && Zi.registerStageImplementation(t.buildDataStage), t && t.businessStage && Yi.registerStageImplementation(t.businessStage), t && t.sendDataStage && Qi.registerStageImplementation(t.sendDataStage), t && t.viewStage && Gi.registerStageImplementation(t.viewStage)
}
var Nn = {
    buildDataStage: function(t) {
        t && Zi.registerInterceptor(t)
    },
    businessStage: function(t) {
        t && Yi.registerInterceptor(t)
    },
    sendDataStage: function(t) {
        t && Qi.registerInterceptor(t)
    },
    viewStage: function(t) {
        t && Gi.registerInterceptor(t)
    }
};

function Fr(t, e) {
    Nn[t] && Nn[t](e)
}
var Kr = {
        stage: null,
        init: function(t) {
            this.stage = t
        }
    },
    ta = {
        stage: null,
        init: function(t) {
            this.stage = t
        },
        interceptor: {
            send: {
                entry: function(t) {
                    return t
                }
            }
        }
    },
    Pe = {};

function Ea(t) {
    t.kit = Pe, t.saEvent = st, this.buildDataStage = an, this.sendDataStage = ta, this.businessStage = Kr
}

function La(t) {
    t.heatmap = Ct, this.viewStage = Jr
}
Pe.buildData = function(t) {
    return function(e) {
        return an.stage.process("basicProps", e)
    }(t)
}, Pe.sendData = function(t, e) {
    if (window.fetch) try {
        fetch(window.sensorsdata_trackurl || "https://api.ccsccorp.com/api/dlog/v1/collect?appId=bc&token=87dea791", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(t)
        }).then(n => {}).catch(n => {})
    } catch {}
    var r = xi(t.properties);
    (function(n) {
        ta.stage.process("send", n)
    })({
        origin_data: t,
        server_url: s.para.server_url,
        data: t,
        config: r || {},
        callback: e
    }), s.log(t)
}, Pe.encodeTrackData = function(t) {
    return Ui(t)
}, Pe.getUtmData = function() {
    return Kr.stage && Kr.stage.process("getUtmData")
};
var Ua = {
    webClickEvent: {
        entry: function(t, e) {
            var r = e.sensors;
            t.tagName === "a" && r.para.heatmap && r.para.heatmap.isTrackLink === !0 ? r.trackLink({
                event: t.event,
                target: t.target
            }, "$WebClick", t.props) : r.track("$WebClick", t.props, t.callback)
        }
    },
    webStayEvent: {
        entry: function(t, e) {
            e.sensors.track("$WebStay", t)
        }
    }
};

function Ra(t) {
    T(t.properties) ? !t.isMatchedWithFilter || T(t.isMatchedWithFilter) ? Fr("buildDataStage", {
        finalAdjustData: {
            priority: 100,
            entry: function(e) {
                try {
                    if (T(t.isMatchedWithFilter)) return t.isMatchedWithFilter(e) && t.properties(e);
                    t.properties(e)
                } catch (r) {
                    L("execute registerPropertyPlugin callback error:" + r)
                }
            }
        }
    }) : L("registerPropertyPlugin arguments error, isMatchedWithFilter must be function") : L("registerPropertyPlugin arguments error, properties must be function")
}
var Tn = window.sensors_data_pre_config,
    Dn = !!zi.isObject(Tn) && Tn.is_compliance_enabled;

function wr(t) {
    t && (s.events = Bi, s.bridge = Na, s.SDKJSBridge = Ne, s.JSBridge = Xi, s.store = d, s.unlimitedDiv = sr, s.customProp = Mi, s.vtrackcollect = ee, s.vapph5collect = nn, s.detectMode = Da, s.registerFeature = br, s.registerInterceptor = Fr, s.commonWays = Ye, br(new Ea(s)), br(new La(s)), Fr("viewStage", Ua));
    var e = t ? Oa : $a;
    for (var r in e) s[r] = e[r];
    s.logger = de, s.log = Et, s._ = zi, s.on = Ri, s.ee = W, s.use = Vi, s.lib_version = ur, s.registerPropertyPlugin = Ra
}
s.init = function(t) {
    if (W.sdk.emit("beforeInit"), s.readyState && s.readyState.state && s.readyState.state >= 2) return !1;
    Dn && (wr(!0), On()), W.initSystemEvent(), s.setInitVar(), s.readyState.setState(2), s.initPara(t), W.sdk.emit("initPara"), W.sdk.emit("afterInitPara"), W.sdk.emit("initAPI"), W.sdk.emit("afterInitAPI"), s.detectMode(),
        function() {
            var e = "",
                r = " { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }";
            s.heatmap && E(s.heatmap.otherTags) && I(s.heatmap.otherTags, function(n) {
                e += n + r
            }), bi() && Er() && Er() < 13 && (s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && ze("div, [data-sensors-click]" + r), s.para.heatmap && s.para.heatmap.track_attr && ze("[" + s.para.heatmap.track_attr.join("], [") + "]" + r), e !== "" && ze(e))
        }(), W.sdk.emit("afterInit"), W.sdk.emit("ready")
}, Dn ? wr(!1) : (wr(!0), On());
var Ha = function(t, e, r) {
        return t.plugin_version = "1.26.3", t
    }({
        init: function(t) {
            var e = t._.isString,
                r = t._.rot13defs,
                n = t._.dfmapping,
                i = "data:enc;";
            t.ee.sdk.on("afterInitPara", function() {
                t.kit.userEncrypt = function(a) {
                    return "dfm-enc-" + n(a)
                }, t.kit.userDecrypt = function(a) {
                    return a.indexOf(i) === 0 ? (a = a.substring(9), a = r(a)) : a.indexOf("dfm-enc-") === 0 && (a = a.substring(8), a = n(a)), a
                }, t.kit.userDecryptIfNeeded = function(a) {
                    return !e(a) || a.indexOf(i) !== 0 && a.indexOf("dfm-enc-") !== 0 || (a = t.kit.userDecrypt(a)), a
                }
            })
        },
        plugin_name: "UserEncryptDefault"
    }),
    Ba = function(t, e, r) {
        return function(n, i, a) {
            if (n.plugin_name = i, n.init) {
                var u = n.init;
                n.init = function(l, p) {
                    if (function(c, _, b) {
                            function v(O, N) {
                                c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                            }
                            _.log = function() {
                                v("log", arguments)
                            }, _.warn = function() {
                                v("warn", arguments)
                            }, _.error = function() {
                                v("error", arguments)
                            }
                        }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                    function g() {
                        u.call(n, l, p)
                    }
                    l.on(a, g)
                }
            }
        }(t, e, r), t.plugin_version = "1.26.3", t
    }({
        sd: null,
        init: function(t) {
            if (this.sd || (this.sd = t, !this.sd || !this.sd._)) return !1;
            var e = this.sd._.cookie.get("sensors_amp_id"),
                r = this.sd.store._state.distinct_id;
            if (e && e.length > 0) {
                var n = e.slice(0, 4) === "amp-";
                if (e !== r) {
                    if (!n) return !1;
                    this.sd.store._state.first_id ? (this.sd.identify(e, !0), this.sd.saEvent.send({
                        original_id: e,
                        distinct_id: r,
                        type: "track_signup",
                        event: "$SignUp",
                        properties: {}
                    }, null), this.setAmpId(r)) : this.sd.identify(e, !0)
                }
            } else this.setAmpId(r);
            this.addListener()
        },
        addListener: function() {
            var t = this;
            this.sd.events.on("changeDistinctId", function(e) {
                t.setAmpId(e)
            }), this.sd.events.isReady()
        },
        setAmpId: function(t) {
            this.sd._.cookie.set("sensors_amp_id", t)
        }
    }, "Amp", "sdkReady"),
    qt = window.SensorsData_App_Visual_Bridge,
    Ja = qt && qt.sensorsdata_visualized_mode,
    An = qt && qt.sensorsdata_visualized_alert_info,
    $n = qt && qt.sensorsdata_hover_web_nodes;

function xn(t) {
    return Ja.call(qt) && $n && $n.call(qt, JSON.stringify(t))
}
var jt, or, Ke, X, Te, Sr, In = {
        commands: {
            app_alert: function(t) {
                return An && An.call(qt, JSON.stringify(t))
            },
            visualized_track: xn,
            page_info: xn,
            sensorsdata_get_app_visual_config: function(t, e) {
                return e && typeof e[t.callType] == "function" && e[t.callType]()
            }
        }
    },
    ea = {
        init: function(t) {
            Te = (X = t) && X._, Sr = X && X.log || console && console.log || function() {}, jt = window.SensorsData_APP_New_H5_Bridge, or = jt && jt.sensorsdata_track, Ke = or && jt.sensorsdata_get_server_url && jt.sensorsdata_get_server_url(), X && !X.bridge.activeBridge && Ke && (X.bridge.activeBridge = ea, X.para.app_js_bridge && !X.para.app_js_bridge.is_mui && (X.bridge.is_verify_success = Ke && X.bridge.validateAppUrl(Ke)), X.bridge.bridge_info = {
                touch_app_bridge: !0,
                platform: "android",
                verify_success: X.bridge.is_verify_success ? "success" : "fail",
                support_two_way_call: !!jt.sensorsdata_js_call_app
            }, X.para.app_js_bridge ? (X.registerInterceptor("sendDataStage", {
                send: {
                    priority: 60,
                    entry: Ma
                }
            }), Sr("Android bridge inits succeed.")) : Sr("app_js_bridge is not configured, data will not be sent by android bridge."))
        },
        handleCommand: function(t) {
            var e = t.callType;
            if (e in In.commands) return In.commands[e](t, jt);
            jt && Te.isFunction(jt.sensorsdata_js_call_app) && jt.sensorsdata_js_call_app(JSON.stringify(t))
        }
    };

function Ma(t, e) {
    if (X.para.app_js_bridge.is_mui || t.data.type === "item_set" || t.data.type === "item_delete") return t;
    var r = t.callback;
    return X.bridge.is_verify_success ? (or && or.call(jt, JSON.stringify(Te.extend({
        server_url: X.para.server_url
    }, t.data))), Te.isFunction(r) && r(), e.cancellationToken.cancel(), t) : X.para.app_js_bridge.is_send ? (X.debug.apph5({
        data: t.data,
        step: "4.2",
        output: "all"
    }), t) : (Te.isFunction(r) && r(), e.cancellationToken.cancel(), t)
}
var En = function(t, e, r) {
        return function(n, i, a) {
            if (n.plugin_name = i, n.init) {
                var u = n.init;
                n.init = function(l, p) {
                    if (function(c, _, b) {
                            function v(O, N) {
                                c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                            }
                            _.log = function() {
                                v("log", arguments)
                            }, _.warn = function() {
                                v("warn", arguments)
                            }, _.error = function() {
                                v("error", arguments)
                            }
                        }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                    function g() {
                        u.call(n, l, p)
                    }
                    l.on(a, g)
                }
            }
        }(t, e, r), t.plugin_version = "1.26.3", t
    }(ea, "AndroidBridge", "sdkAfterInitPara"),
    Ft = window.SensorsData_App_Visual_Bridge,
    qa = Ft && Ft.sensorsdata_visualized_mode,
    Ln = Ft && Ft.sensorsdata_visualized_alert_info,
    Un = Ft && Ft.sensorsdata_hover_web_nodes;

function Rn(t) {
    return qa.call(Ft) && Un && Un.call(Ft, JSON.stringify(t))
}
var _t, De, ve, Ve, ot, re, kr, Hn = {
        commands: {
            app_alert: function(t) {
                return Ln && Ln.call(Ft, JSON.stringify(t))
            },
            visualized_track: Rn,
            page_info: Rn,
            sensorsdata_get_app_visual_config: function(t, e) {
                return e && typeof e[t.callType] == "function" && e[t.callType]()
            }
        }
    },
    ra = {
        init: function(t) {
            re = (ot = t) && ot._, kr = ot && ot.log || console && console.log || function() {},
                function() {
                    if (_t = window.SensorsData_APP_JS_Bridge, De = _t && _t.sensorsdata_track, ve = _t && _t.sensorsdata_verify, Ve = _t && _t.sensorsdata_visual_verify, ot && !ot.bridge.activeBridge && (ve || De || Ve)) {
                        ot.bridge.activeBridge = ra;
                        var e = ve || De;
                        Ve && (e = !!Ve.call(_t, JSON.stringify({
                            server_url: ot.para.server_url
                        }))), ot.bridge.bridge_info = {
                            touch_app_bridge: !0,
                            platform: "android",
                            verify_success: e ? "success" : "fail"
                        }, ot.para.app_js_bridge ? (ot.registerInterceptor("sendDataStage", {
                            send: {
                                priority: 80,
                                entry: Fa
                            }
                        }), kr("Android obsolete bridge inits succeed.")) : kr("app_js_bridge is not configured, data will not be sent by android obsolete bridge.")
                    }
                }()
        },
        handleCommand: function(t) {
            var e = t.callType;
            return e in Hn.commands ? Hn.commands[e](t, _t) : _t && re.isFunction(_t.sensorsdata_js_call_app) ? _t.sensorsdata_js_call_app(JSON.stringify(t)) : void 0
        }
    };

function Fa(t, e) {
    if (ot.para.app_js_bridge.is_mui || t.data.type === "item_set" || t.data.type === "item_delete") return t;
    var r = t.callback;
    return ve ? ve && ve.call(_t, JSON.stringify(re.extend({
        server_url: ot.para.server_url
    }, t.data))) ? (re.isFunction(r) && r(), e.cancellationToken.cancel(), t) : ot.para.app_js_bridge.is_send ? (ot.debug.apph5({
        data: t.data,
        step: "3.1",
        output: "all"
    }), t) : (re.isFunction(r) && r(), e.cancellationToken.cancel(), t) : (De && De.call(_t, JSON.stringify(re.extend({
        server_url: ot.para.server_url
    }, t.data))), re.isFunction(r) && r(), e.cancellationToken.cancel(), t)
}
var ft, gt, Pr, Cr, Bn = function(t, e, r) {
        return function(n, i, a) {
            if (n.plugin_name = i, n.init) {
                var u = n.init;
                n.init = function(l, p) {
                    if (function(c, _, b) {
                            function v(O, N) {
                                c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                            }
                            _.log = function() {
                                v("log", arguments)
                            }, _.warn = function() {
                                v("warn", arguments)
                            }, _.error = function() {
                                v("error", arguments)
                            }
                        }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                    function g() {
                        u.call(n, l, p)
                    }
                    l.on(a, g)
                }
            }
        }(t, e, r), t.plugin_version = "1.26.3", t
    }(ra, "AndroidObsoleteBridge", "sdkAfterInitPara"),
    Be, wt = {
        event_list: [],
        latest_event_initial_time: null,
        max_save_time: 2592e6,
        init: function(t, e) {
            if (gt || !t) return !1;
            Cr = (e = e || {}).cookie_name || "sensorsdata2015jssdkchannel", gt = t;
            var r = this;
            (function() {
                if (ft = gt._, Pr = gt.store, !ft.localStorage.isSupport()) return !1;
                gt.para.max_string_length = 1024, r.eventList.init(), r.addLatestChannelUrl(), r.addIsChannelCallbackEvent()
            })()
        },
        addIsChannelCallbackEvent: function() {
            gt.registerPage({
                $is_channel_callback_event: function(t) {
                    if (ft.isObject(t) && t.event && t.event !== "$WebClick" && t.event !== "$pageview" && t.event !== "$WebStay" && t.event !== "$SignUp") return !wt.eventList.hasEvent(t.event) && (wt.eventList.add(t.event), !0)
                }
            })
        },
        addLatestChannelUrl: function() {
            var t = this.getUrlDomain(),
                e = this.cookie.getChannel();
            if (t === "url解析失败") this.registerAndSave({
                _sa_channel_landing_url: "",
                _sa_channel_landing_url_error: "url的domain解析失败"
            });
            else if (ft.isReferralTraffic(document.referrer)) {
                var r = ft.getQueryParam(location.href, "sat_cf");
                ft.isString(r) && r.length > 0 ? (this.registerAndSave({
                    _sa_channel_landing_url: location.href
                }), wt.channelLinkHandler()) : this.registerAndSave({
                    _sa_channel_landing_url: ""
                })
            } else e ? gt.registerPage(e) : gt.registerPage({
                _sa_channel_landing_url: "",
                _sa_channel_landing_url_error: "取值异常"
            })
        },
        registerAndSave: function(t) {
            gt.registerPage(t), this.cookie.saveChannel(t)
        },
        cookie: {
            getChannel: function() {
                var t = gt.kit.userDecryptIfNeeded(ft.cookie.get(Cr));
                return t = ft.safeJSONParse(t), !(!ft.isObject(t) || !t.prop) && t.prop
            },
            saveChannel: function(t) {
                var e = {
                        prop: t
                    },
                    r = JSON.stringify(e);
                gt.para.encrypt_cookie && (r = gt.kit.userEncrypt(r)), ft.cookie.set(Cr, r)
            }
        },
        channelLinkHandler: function() {
            this.eventList.reset(), gt.track("$ChannelLinkReaching")
        },
        getUrlDomain: function() {
            var t = ft.info.pageProp.url_domain;
            return t === "" && (t = "url解析失败"), t
        },
        eventList: {
            init: function() {
                var t = this.get(),
                    e = new Date().getTime();
                if (t && ft.isNumber(t.latest_event_initial_time) && ft.isArray(t.eventList)) {
                    var r = e - t.latest_event_initial_time;
                    r > 0 && r < wt.max_save_time ? (wt.event_list = t.eventList, wt.latest_event_initial_time = t.latest_event_initial_time) : this.reset()
                } else this.reset()
            },
            get: function() {
                var t = {};
                try {
                    t = Pr.readObjectVal("sawebjssdkchannel")
                } catch (e) {
                    gt.log(e)
                }
                return t
            },
            add: function(t) {
                wt.event_list.push(t), this.save()
            },
            save: function() {
                var t = {
                    latest_event_initial_time: wt.latest_event_initial_time,
                    eventList: wt.event_list
                };
                Pr.saveObjectVal("sawebjssdkchannel", t)
            },
            reset: function() {
                wt.event_list = [], wt.latest_event_initial_time = new Date().getTime(), this.save()
            },
            hasEvent: function(t) {
                var e = !1;
                return ft.each(wt.event_list, function(r) {
                    r === t && (e = !0)
                }), e
            }
        }
    },
    Ka = function(t, e, r) {
        return function(n, i, a) {
            if (n.plugin_name = i, n.init) {
                var u = n.init;
                n.init = function(l, p) {
                    if (function(c, _, b) {
                            function v(O, N) {
                                c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                            }
                            _.log = function() {
                                v("log", arguments)
                            }, _.warn = function() {
                                v("warn", arguments)
                            }, _.error = function() {
                                v("error", arguments)
                            }
                        }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                    function g() {
                        u.call(n, l, p)
                    }
                    l.on(a, g)
                }
            }
        }(t, e, r), t.plugin_version = "1.26.3", t
    }(wt, "SensorsChannel", "sdkAfterInitAPI"),
    na = function() {
        var t = {};
        return document.hidden !== void 0 ? (t.hidden = "hidden", t.visibilityChange = "visibilitychange") : document.msHidden !== void 0 ? (t.hidden = "msHidden", t.visibilityChange = "msvisibilitychange") : document.webkitHidden !== void 0 && (t.hidden = "webkitHidden", t.visibilityChange = "webkitvisibilitychange"), t
    };

function Jn() {
    return Be !== void 0 && document[Be]
}
Be = na().hidden;
var jr, ne, V, Ae, Or, Vr = {
        android: /Android/i,
        iOS: /iPhone|iPad|iPod/i
    },
    Mn = function() {
        for (var t in Vr)
            if (navigator.userAgent.match(Vr[t])) return t;
        return ""
    }(),
    Nr = function(t) {
        return t != null && Object.prototype.toString.call(t) == "[object Object]"
    },
    Ce = {
        key: null,
        timer: null,
        sd: null,
        data: null,
        timeout: 2500,
        apiURL: "{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",
        init: function(t) {
            if (this.sd) return this.log("deeplink已经初始化"), !1;
            if (this.sd = t, this.log("deeplink init called"), this.sd === null) return this.log("神策JS SDK未成功引入"), !1;
            var e = {};
            if (arguments.length > 0 && (arguments.length === 1 && Nr(arguments[0]) ? e = arguments[0] : arguments.length >= 2 && Nr(arguments[1]) && (e = arguments[1])), !Vr.hasOwnProperty(Mn)) return this.log("不支持当前系统，目前只支持Android和iOS"), !1;
            if (Nr(e) && this.sd._.isNumber(e.timeout) && e.timeout >= 2500 && (this.timeout = e.timeout), !this.sd.para.server_url) return this.log("神策JS SDK配置项server_url未正确配置"), !1;
            var r = function(a) {
                var u = a._.URL(a.para.server_url);
                return {
                    origin: u.origin,
                    project: u.searchParams.get("project") || "default"
                }
            }(this.sd);
            this.apiURL = this.apiURL.replace("{origin}", r.origin).replace("{project}", r.project);
            var n = this.sd._.getQueryParam(window.location.href, "deeplink");
            if (!n) return this.log("当前页面缺少deeplink参数"), !1;
            var i = function(a) {
                return a.match(/\/sd\/(\w+)\/(\w+)$/)
            }(n = window.decodeURIComponent(n));
            if (!i) return this.log("当前页面的deeplink参数无效"), !1;
            this.key = i[2], this.apiURL = this.apiURL.replace("{key}", window.encodeURIComponent(i[2])), this.sd._.ajax({
                url: this.apiURL,
                type: "GET",
                cors: !0,
                credentials: !1,
                success: function(a) {
                    if (a.errorMsg) return Ce.log("API报错：" + a.errorMsg), !1;
                    Ce.data = a, Ce.log("API查询成功，数据：" + JSON.stringify(a, null, "  ")), this.data.app_key && (this.data.android_info && this.data.android_info.url_schemes && (this.data.android_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key), this.data.ios_info && this.data.ios_info.url_schemes && (this.data.ios_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key))
                }.bind(this),
                error: function() {
                    Ce.log("API查询出错")
                }
            }), this.addListeners()
        },
        openDeepLink: function() {
            if (this.log("openDeeplink()"), !this.data) return this.log("没有Deep link数据!"), !1;
            if (Mn === "iOS") {
                this.log("当前系统是iOS");
                var t = this.sd && this.sd._ && this.sd._.getIOSVersion() >= 9 && this.data.ios_info.ios_wake_url ? this.data.ios_info.ios_wake_url : this.data.ios_info.url_schemes;
                this.log("唤起APP的地址：" + t),
                    function(e, r, n) {
                        e.log("尝试唤起 iOS app:" + r), window.location.href = r, e.timer = setTimeout(function() {
                            if (Jn()) return e.log("The page is hidden, stop navigating to download page"), !1;
                            e.log("App可能未安装，跳转到下载地址"), window.location.href = n
                        }, e.timeout), e.log("new timer:" + e.timer)
                    }(this, t, this.data.ios_info.download_url)
            } else this.log("当前系统是 android"),
                function(e, r, n) {
                    e.log("尝试唤起 android app");
                    var i = r;
                    e.log("唤起APP的地址：" + i), window.location = i, e.timer = setTimeout(function() {
                        var a = Jn();
                        if (e.log("hide:" + Be + ":" + document[Be]), a) return e.log("The page is hidden, stop navigating to download page"), !1;
                        e.log("App可能未安装，跳转到下载地址"), window.location = n
                    }, e.timeout)
                }(this, this.data.android_info.url_schemes, this.data.android_info.download_url)
        },
        log: function(t) {
            this.sd && this.sd.log(t)
        },
        addListeners: function() {
            var t = na().visibilityChange,
                e = this;
            t && document.addEventListener(t, function() {
                clearTimeout(e.timer), e.log("visibilitychange, clear timeout:" + e.timer)
            }, !1), window.addEventListener("pagehide", function() {
                e.log("page hide, clear timeout:" + e.timer), clearTimeout(e.timer)
            }, !1)
        }
    },
    Va = function(t, e, r) {
        return function(n, i, a) {
            if (n.plugin_name = i, n.init) {
                var u = n.init;
                n.init = function(l, p) {
                    if (function(c, _, b) {
                            function v(O, N) {
                                c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                            }
                            _.log = function() {
                                v("log", arguments)
                            }, _.warn = function() {
                                v("warn", arguments)
                            }, _.error = function() {
                                v("error", arguments)
                            }
                        }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                    function g() {
                        u.call(n, l, p)
                    }
                    l.on(a, g)
                }
            }
        }(t, e, r), t.plugin_version = "1.26.3", t
    }(Ce, "Deeplink", "sdkReady"),
    ia = {
        init: function(t) {
            Ae = (V = t) && V._, Or = V && V.log || console && console.log || function() {}, jr = window.SensorsData_iOS_JS_Bridge && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url, ne = function() {
                return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker
            }, V && !V.bridge.activeBridge && ne() && ne().postMessage && (V.bridge.activeBridge = ia, V.para.app_js_bridge && !V.para.app_js_bridge.is_mui && (V.bridge.is_verify_success = jr && V.bridge.validateAppUrl(jr)), V.bridge.bridge_info = {
                touch_app_bridge: !0,
                platform: "ios",
                verify_success: V.bridge.is_verify_success ? "success" : "fail",
                support_two_way_call: !0
            }, V.para.app_js_bridge ? (V.registerInterceptor("sendDataStage", {
                send: {
                    priority: 70,
                    entry: Wa
                }
            }), Or("IOS bridge inits succeed.")) : Or("app_js_bridge is not configured, data will not be sent by iOS bridge."))
        },
        handleCommand: function(t) {
            var e = t.callType;
            return e !== "page_info" && e !== "visualized_track" || V.bridge.hasVisualModeBridge() ? e === "sensorsdata_get_app_visual_config" ? Ae.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge[e] : ne() && ne().postMessage(JSON.stringify(t)) : null
        }
    };

function Wa(t, e) {
    if (V.para.app_js_bridge.is_mui || t.data.type === "item_set" || t.data.type === "item_delete") return t;
    var r = t.callback;
    return V.bridge.is_verify_success ? (ne() && ne().postMessage(JSON.stringify({
        callType: "app_h5_track",
        data: Ae.extend({
            server_url: V.para.server_url
        }, t.data)
    })), Ae.isFunction(r) && r(), e.cancellationToken.cancel(), t) : V.para.app_js_bridge.is_send ? (V.debug.apph5({
        data: t.data,
        step: "4.1",
        output: "all"
    }), t) : (Ae.isFunction(r) && r(), e.cancellationToken.cancel(), t)
}
var G, ye, Tr, qn = function(t, e, r) {
        return function(n, i, a) {
            if (n.plugin_name = i, n.init) {
                var u = n.init;
                n.init = function(l, p) {
                    if (function(c, _, b) {
                            function v(O, N) {
                                c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                            }
                            _.log = function() {
                                v("log", arguments)
                            }, _.warn = function() {
                                v("warn", arguments)
                            }, _.error = function() {
                                v("error", arguments)
                            }
                        }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                    function g() {
                        u.call(n, l, p)
                    }
                    l.on(a, g)
                }
            }
        }(t, e, r), t.plugin_version = "1.26.3", t
    }(ia, "IOSBridge", "sdkAfterInitPara"),
    aa = {
        init: function(t) {
            ye = (G = t) && G._, Tr = G && G.log || console && console.log || function() {}, G && !G.bridge.activeBridge && (/sensors-verify/.test(navigator.userAgent) || /sa-sdk-ios/.test(navigator.userAgent)) && !window.MSStream && (G.bridge.activeBridge = aa, G.bridge.bridge_info = {
                touch_app_bridge: !0,
                platform: "ios",
                verify_success: za() ? "success" : "fail"
            }, G.para.app_js_bridge ? (G.registerInterceptor("sendDataStage", {
                send: {
                    priority: 90,
                    entry: Xa
                }
            }), Tr("IOS obsolete bridge inits succeed.")) : Tr("app_js_bridge is not configured, data will not be sent by iOS obsolete bridge."))
        }
    };

function za() {
    if (/sensors-verify/.test(navigator.userAgent)) {
        var t = navigator.userAgent.match(/sensors-verify\/([^\s]+)/);
        if (t && t[0] && typeof t[1] == "string" && t[1].split("?").length === 2) {
            t = t[1].split("?");
            var e = null,
                r = null;
            try {
                e = ye.URL(G.para.server_url).hostname, r = ye.URL(G.para.server_url).searchParams.get("project") || "default"
            } catch (n) {
                G.log(n)
            }
            return !(!e || e !== t[0] || !r || r !== t[1])
        }
        return !1
    }
    return !!/sa-sdk-ios/.test(navigator.userAgent)
}

function Xa(t, e) {
    if (G.para.app_js_bridge.is_mui || t.data.type === "item_set" || t.data.type === "item_delete") return t;
    var r, n, i = t.callback;
    if (G.bridge.bridge_info.verify_success) {
        var a = document.createElement("iframe"),
            u = (r = t.data, n = (n = JSON.stringify(ye.extend({
                server_url: G.para.server_url
            }, r))).replace(/\r\n/g, ""), "sensorsanalytics://trackEvent?event=" + (n = encodeURIComponent(n)));
        return a.setAttribute("src", u), document.documentElement.appendChild(a), a.parentNode.removeChild(a), a = null, ye.isFunction(i) && i(), e.cancellationToken.cancel(), !0
    }
    return G.para.app_js_bridge.is_send ? (G.debug.apph5({
        data: t.data,
        step: "3.2",
        output: "all"
    }), t) : (ye.isFunction(i) && i(), e.cancellationToken.cancel(), t)
}
var Fn = function(t, e, r) {
    return function(n, i, a) {
        if (n.plugin_name = i, n.init) {
            var u = n.init;
            n.init = function(l, p) {
                if (function(c, _, b) {
                        function v(O, N) {
                            c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                        }
                        _.log = function() {
                            v("log", arguments)
                        }, _.warn = function() {
                            v("warn", arguments)
                        }, _.error = function() {
                            v("error", arguments)
                        }
                    }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                function g() {
                    u.call(n, l, p)
                }
                l.on(a, g)
            }
        }
    }(t, e, r), t.plugin_version = "1.26.3", t
}(aa, "IOSObsoleteBridge", "sdkAfterInitPara");

function z() {
    this.sd = null, this.start_time = +new Date, this.page_show_status = !0, this.page_hidden_status = !1, this._ = {}, this.timer = null, this.current_page_url = document.referrer, this.url = location.href, this.title = document.title || "", this.option = {}, this.heartbeat_interval_time = 5e3, this.heartbeat_interval_timer = null, this.page_id = null, this.storage_name = "sawebjssdkpageleave", this.max_duration = 432e3
}
z.prototype.init = function(t, e) {
    if (t) {
        if (this.sd = t, this._ = this.sd._, e) {
            this.option = e;
            var r = e.heartbeat_interval_time;
            r && (this._.isNumber(r) || this._.isNumber(1 * r)) && 1 * r > 0 && (this.heartbeat_interval_time = 1e3 * r);
            var n = e.max_duration;
            n && (this._.isNumber(n) || this._.isNumber(1 * n)) && 1 * n > 0 && (this.max_duration = n)
        }
        this.page_id = Number(String(this._.getRandom()).slice(2, 5) + String(this._.getRandom()).slice(2, 4) + String(new Date().getTime()).slice(-4)), this.addEventListener(), document.hidden === !0 ? this.page_show_status = !1 : this.addHeartBeatInterval(), this.log("PageLeave初始化完毕")
    } else this.log("神策JS SDK未成功引入")
}, z.prototype.log = function(t) {
    this.sd && this.sd.log(t)
}, z.prototype.refreshPageEndTimer = function() {
    var t = this;
    this.timer && (clearTimeout(this.timer), this.timer = null), this.timer = setTimeout(function() {
        t.page_hidden_status = !1
    }, 5e3)
}, z.prototype.hiddenStatusHandler = function() {
    clearTimeout(this.timer), this.timer = null, this.page_hidden_status = !1
}, z.prototype.pageStartHandler = function() {
    this.start_time = +new Date, !document.hidden == 1 ? this.page_show_status = !0 : this.page_show_status = !1, this.url = location.href, this.title = document.title
}, z.prototype.pageEndHandler = function() {
    if (this.page_hidden_status !== !0) {
        var t = this.getPageLeaveProperties();
        this.page_show_status === !1 && delete t.event_duration, this.page_show_status = !1, this.page_hidden_status = !0, this.isCollectUrl(this.url) && this.sd.track("$WebPageLeave", t), this.refreshPageEndTimer(), this.delHeartBeatData()
    }
}, z.prototype.addEventListener = function() {
    this.addPageStartListener(), this.addPageSwitchListener(), this.addSinglePageListener(), this.addPageEndListener()
}, z.prototype.addPageStartListener = function() {
    var t = this;
    "onpageshow" in window && this._.addEvent(window, "pageshow", function() {
        t.pageStartHandler(), t.hiddenStatusHandler()
    })
}, z.prototype.isCollectUrl = function(t) {
    return typeof this.option.isCollectUrl != "function" || typeof t != "string" || t === "" || this.option.isCollectUrl(t)
}, z.prototype.addSinglePageListener = function() {
    var t = this;
    this.sd.ee && this.sd.ee.spa.prepend("switch", function(e) {
        e !== location.href && (t.url = e, t.pageEndHandler(), t.stopHeartBeatInterval(), t.current_page_url = t.url, t.pageStartHandler(), t.hiddenStatusHandler(), t.addHeartBeatInterval())
    })
}, z.prototype.addPageEndListener = function() {
    var t = this;
    this._.each(["pagehide", "beforeunload", "unload"], function(e) {
        "on" + e in window && t._.addEvent(window, e, function() {
            t.pageEndHandler(), t.stopHeartBeatInterval()
        })
    })
}, z.prototype.addPageSwitchListener = function() {
    var t = this;
    this._.listenPageState({
        visible: function() {
            t.pageStartHandler(), t.hiddenStatusHandler(), t.addHeartBeatInterval()
        },
        hidden: function() {
            t.url = location.href, t.title = document.title, t.pageEndHandler(), t.stopHeartBeatInterval()
        }
    })
}, z.prototype.addHeartBeatInterval = function() {
    this._.localStorage.isSupport() && this.startHeartBeatInterval()
}, z.prototype.startHeartBeatInterval = function() {
    var t = this;
    this.heartbeat_interval_timer && this.stopHeartBeatInterval();
    var e = !0;
    this.isCollectUrl(this.url) || (e = !1), this.heartbeat_interval_timer = setInterval(function() {
        e && t.saveHeartBeatData()
    }, this.heartbeat_interval_time), e && this.saveHeartBeatData("is_first_heartbeat"), this.reissueHeartBeatData()
}, z.prototype.stopHeartBeatInterval = function() {
    clearInterval(this.heartbeat_interval_timer), this.heartbeat_interval_timer = null
}, z.prototype.saveHeartBeatData = function(t) {
    var e = this.getPageLeaveProperties(),
        r = new Date;
    e.$time = r, t === "is_first_heartbeat" && (e.event_duration = 3.14);
    var n = this.sd.kit.buildData({
        type: "track",
        event: "$WebPageLeave",
        properties: e
    });
    n.heartbeat_interval_time = this.heartbeat_interval_time, this.sd.store.saveObjectVal(this.storage_name + "-" + this.page_id, n)
}, z.prototype.delHeartBeatData = function(t) {
    this._.localStorage.isSupport() && this._.localStorage.remove(t || this.storage_name + "-" + this.page_id)
}, z.prototype.reissueHeartBeatData = function() {
    for (var t = window.localStorage.length - 1; t >= 0; t--) {
        var e = window.localStorage.key(t);
        if (e && e !== this.storage_name + "-" + this.page_id && e.indexOf(this.storage_name + "-") === 0) {
            var r = this.sd.store.readObjectVal(e);
            this._.isObject(r) && 1 * new Date - r.time > r.heartbeat_interval_time + 5e3 && (delete r.heartbeat_interval_time, r._flush_time = new Date().getTime(), this.sd.kit.sendData(r), this.delHeartBeatData(e))
        }
    }
}, z.prototype.getPageLeaveProperties = function() {
    var t = (+new Date - this.start_time) / 1e3;
    (isNaN(t) || t < 0 || t > this.max_duration) && (t = 0), t = Number(t.toFixed(3));
    var e = this._.getReferrer(this.current_page_url),
        r = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body && document.body.scrollTop || 0;
    r = Math.round(r) || 0;
    var n = {
        $title: this.title,
        $url: this._.getURL(this.url),
        $url_path: this._.getURLPath(this._.URL(this.url).pathname),
        $referrer_host: e ? this._.getHostname(e) : "",
        $referrer: e,
        $viewport_position: r
    };
    return t !== 0 && (n.event_duration = t), this._.extend(n, this.option.custom_props)
};
var Za = function(t, e, r) {
        return function(n, i, a) {
            if (n.plugin_name = i, n.init) {
                var u = n.init;
                n.init = function(l, p) {
                    if (function(c, _, b) {
                            function v(O, N) {
                                c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                            }
                            _.log = function() {
                                v("log", arguments)
                            }, _.warn = function() {
                                v("warn", arguments)
                            }, _.error = function() {
                                v("error", arguments)
                            }
                        }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                    function g() {
                        u.call(n, l, p)
                    }
                    l.on(a, g)
                }
            }
        }(t, e, r), t.plugin_version = "1.26.3", t
    }(new z, "PageLeave", "sdkReady"),
    Kn = !1,
    Qa = {
        init: function(t, e) {
            function r() {
                var n = 0,
                    i = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
                    a = {
                        $url: t._.getURL(),
                        $title: document.title,
                        $url_path: t._.getURLPath(),
                        $referrer: t._.getReferrer(null, !0)
                    };
                if (i ? (n = function(l) {
                        var p = 0;
                        return t._.isFunction(l.getEntriesByType) && (p = ((l.getEntriesByType("navigation") || [{}])[0] || {}).domContentLoadedEventEnd || 0), p
                    }(i) || function(l) {
                        var p = 0;
                        if (l.timing) {
                            var g = l.timing;
                            g.fetchStart !== 0 && t._.isNumber(g.fetchStart) && g.domContentLoadedEventEnd !== 0 && t._.isNumber(g.domContentLoadedEventEnd) ? p = g.domContentLoadedEventEnd - g.fetchStart : t.log("performance 数据获取异常")
                        }
                        return p
                    }(i), function(l, p) {
                        if (l.getEntries && typeof l.getEntries == "function") {
                            for (var g = l.getEntries(), c = null, _ = 0; _ < g.length; _++) "transferSize" in g[_] && (c += g[_].transferSize);
                            t._.isNumber(c) && c >= 0 && c < 10737418240 && (p.$page_resource_size = Number((c / 1024).toFixed(3)))
                        }
                    }(i, a)) : t.log("浏览器未支持 performance API."), n > 0) {
                    var u = t._.isObject(e) && e.max_duration || 1800;
                    n = Number((n / 1e3).toFixed(3)), (!t._.isNumber(u) || u <= 0 || n <= u) && (a.event_duration = n)
                }
                Kn || (t.track("$WebPageLoad", a), Kn = !0), window.removeEventListener ? window.removeEventListener("load", r) : window.detachEvent && window.detachEvent("onload", r)
            }
            document.readyState == "complete" ? r() : window.addEventListener ? window.addEventListener("load", r) : window.attachEvent && window.attachEvent("onload", r)
        }
    },
    Ya = function(t, e, r) {
        return function(n, i, a) {
            if (n.plugin_name = i, n.init) {
                var u = n.init;
                n.init = function(l, p) {
                    if (function(c, _, b) {
                            function v(O, N) {
                                c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                            }
                            _.log = function() {
                                v("log", arguments)
                            }, _.warn = function() {
                                v("warn", arguments)
                            }, _.error = function() {
                                v("error", arguments)
                            }
                        }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                    function g() {
                        u.call(n, l, p)
                    }
                    l.on(a, g)
                }
            }
        }(t, e, r), t.plugin_version = "1.26.3", t
    }(Qa, "PageLoad", "sdkReady");

function $e() {
    this.sd = null, this.log = window.console && window.console.log || function() {}, this.customRegister = []
}
$e.prototype.init = function(t) {
    if (t) {
        this.sd = t, this._ = t._, this.log = t.log;
        var e = this;
        t.registerInterceptor("buildDataStage", {
            extendProps: {
                priority: 0,
                entry: function(r) {
                    return function(n, i) {
                        if (n.type !== "track") return n;
                        var a = i.sd,
                            u = a._,
                            l = a.saEvent.check,
                            p = u.extend2Lev({
                                properties: {}
                            }, n),
                            g = i.customRegister,
                            c = p.properties,
                            _ = p.event,
                            b = {};
                        return u.each(g, function(v) {
                            if (u.isObject(v)) u.indexOf(v.events, _) > -1 && l({
                                properties: v.properties
                            }) && (b = u.extend(b, v.properties));
                            else if (u.isFunction(v)) {
                                var O = v({
                                    event: _,
                                    properties: c,
                                    data: p
                                });
                                u.isObject(O) && !u.isEmptyObject(O) && l({
                                    properties: O
                                }) && (b = u.extend(b, O))
                            }
                        }), n.properties = u.extend(c, b), n
                    }(r, e)
                }
            }
        })
    } else this.log("神策JS SDK未成功引入")
}, $e.prototype.register = function(t) {
    this.sd ? this._.isObject(t) && this._.isArray(t.events) && t.events.length > 0 && this._.isObject(t.properties) && !this._.isEmptyObject(t.properties) ? this.customRegister.push(t) : this.log("RegisterProperties: register 参数错误") : this.log("神策JS SDK未成功引入")
}, $e.prototype.hookRegister = function(t) {
    this.sd ? this._.isFunction(t) ? this.customRegister.push(t) : this.log("RegisterProperties: hookRegister 参数错误") : this.log("神策JS SDK未成功引入")
};
$e.prototype.plugin_name = "RegisterProperties";
var Ga = function(t, e, r) {
        return t.plugin_version = "1.26.3", t
    }(new $e),
    _e, sa, je = window.console && window.console.log || function() {};

function ts(t) {
    try {
        if (t.event !== "$pageview" && (!t.type || t.type.slice(0, 7) !== "profile")) {
            var e = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
                r = document.documentElement.scrollHeight || 0,
                n = {
                    $page_height: Math.max(e, r) || 0
                };
            t.properties = _e._.extend(t.properties || {}, n)
        }
    } catch {
        je("页面高度获取异常。")
    }
    return sa.call(_e.kit, t)
}
var es = {
        init: function(t) {
            je = (_e = t) && _e.log || je, t && t.kit && t.kit.buildData ? (sa = _e.kit.buildData, _e.kit.buildData = ts, je("RegisterPropertyPageHeight 插件初始化完成")) : je("RegisterPropertyPageHeight 插件初始化失败,当前主sdk不支持 RegisterPropertyPageHeight 插件，请升级主sdk")
        }
    },
    rs = function(t, e, r) {
        return function(n, i, a) {
            if (n.plugin_name = i, n.init) {
                var u = n.init;
                n.init = function(l, p) {
                    if (function(c, _, b) {
                            function v(O, N) {
                                c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                            }
                            _.log = function() {
                                v("log", arguments)
                            }, _.warn = function() {
                                v("warn", arguments)
                            }, _.error = function() {
                                v("error", arguments)
                            }
                        }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                    function g() {
                        u.call(n, l, p)
                    }
                    l.on(a, g)
                }
            }
        }(t, e, r), t.plugin_version = "1.26.3", t
    }(es, "RegisterPropertyPageHeight", "sdkReady"),
    Ht, ns = {
        getPart: function(t) {
            var e = this.option.length;
            if (e) {
                for (var r = 0; r < e; r++)
                    if (t.indexOf(this.option[r].part_url) > -1) return !0
            }
            return !1
        },
        getPartHash: function(t) {
            var e = this.option.length;
            if (e) {
                for (var r = 0; r < e; r++)
                    if (t.indexOf(this.option[r].part_url) > -1) return this.option[r].after_hash
            }
            return !1
        },
        getCurrenId: function() {
            var t = this.store.getDistinctId() || "",
                e = this.store.getFirstId() || "";
            return this._.urlSafeBase64 && this._.urlSafeBase64.encode ? t = t ? this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(t))) : "" : this._.rot13obfs && (t = t ? this._.rot13obfs(t) : ""), encodeURIComponent(e ? "f" + t : "d" + t)
        },
        rewriteUrl: function(t, e) {
            var r = this,
                n = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(t),
                i = "";
            if (n) {
                var a, u = n[1] || "",
                    l = n[2] || "",
                    p = n[3] || "",
                    g = "_sasdk=" + this.getCurrenId(),
                    c = function(_) {
                        var b = _.split("&"),
                            v = [];
                        return r._.each(b, function(O) {
                            O.indexOf("_sasdk=") > -1 ? v.push(g) : v.push(O)
                        }), v.join("&")
                    };
                return this.getPartHash(t) ? (a = p.indexOf("_sasdk"), i = p.indexOf("?") > -1 ? a > -1 ? u + l + "#" + p.substring(1, a) + c(p.substring(a, p.length)) : u + l + p + "&" + g : u + l + "#" + p.substring(1) + "?" + g) : (a = l.indexOf("_sasdk"), i = /^\?(\w)+/.test(l) ? a > -1 ? u + "?" + c(l.substring(1)) + p : u + l + "&" + g + p : u + "?" + g + p), e && (e.href = i), i
            }
        },
        getUrlId: function() {
            var t = location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);
            if (this._.isArray(t) && t[1]) {
                var e = decodeURIComponent(t[1]);
                return !e || e.substring(0, 1) !== "f" && e.substring(0, 1) !== "d" || (this._.urlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64(e) ? e = e.substring(0, 1) + this._.base64Decode(this._.urlSafeBase64.decode(e.substring(1))) : this._.rot13defs && (e = e.substring(0, 1) + this._.rot13defs(e.substring(1)))), e
            }
            return ""
        },
        setRefferId: function(t) {
            var e = this.store.getDistinctId(),
                r = this.getUrlId();
            if (r && r !== "") {
                var n = r.substring(0, 1) === "a" || r.substring(0, 1) === "d";
                (r = r.substring(1)) !== e && (n ? (this.sd.identify(r, !0), this.store.getFirstId() && this.sd.saEvent.send({
                    original_id: r,
                    distinct_id: e,
                    type: "track_signup",
                    event: "$SignUp",
                    properties: {}
                }, null)) : this.store.getFirstId() && !t.re_login || this.sd.login(r))
            }
        },
        addListen: function() {
            var t = this,
                e = function(r) {
                    var n, i, a = r.target,
                        u = a.tagName.toLowerCase(),
                        l = a.parentNode;
                    if (u === "a" && a.href || l && l.tagName && l.tagName.toLowerCase() === "a" && l.href) {
                        u === "a" && a.href ? (n = a.href, i = a) : (n = l.href, i = l);
                        var p = t._.URL(n).protocol;
                        p !== "http:" && p !== "https:" || t.getPart(n) && t.rewriteUrl(n, i)
                    }
                };
            t._.addEvent(document, "mousedown", e), window.PointerEvent && "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints >= 0 && t._.addEvent(document, "pointerdown", e)
        },
        init: function(t, e) {
            this.sd = t, this._ = t._, this.store = t.store, this.para = t.para, this._.isObject(e) && this._.isArray(e.linker) && e.linker.length > 0 ? (this.setRefferId(e), this.addListen(), this.option = e.linker, this.option = function(r) {
                for (var n = r.length, i = [], a = 0; a < n; a++) /[A-Za-z0-9]+\./.test(r[a].part_url) && Object.prototype.toString.call(r[a].after_hash) == "[object Boolean]" ? i.push(r[a]) : t.log("linker 配置的第 " + (a + 1) + " 项格式不正确，请检查参数格式！");
                return i
            }(this.option)) : t.log("请配置打通域名参数！")
        }
    },
    is = function(t, e, r) {
        return function(n, i, a) {
            if (n.plugin_name = i, n.init) {
                var u = n.init;
                n.init = function(l, p) {
                    if (function(c, _, b) {
                            function v(O, N) {
                                c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                            }
                            _.log = function() {
                                v("log", arguments)
                            }, _.warn = function() {
                                v("warn", arguments)
                            }, _.error = function() {
                                v("error", arguments)
                            }
                        }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                    function g() {
                        u.call(n, l, p)
                    }
                    l.on(a, g)
                }
            }
        }(t, e, r), t.plugin_version = "1.26.3", t
    }(ns, "SiteLinker", "sdkReady"),
    as = {
        init: function(t) {
            t && !Ht && (Ht = t).registerInterceptor("businessStage", {
                getUtmData: {
                    priority: 0,
                    entry: function() {
                        return function() {
                            var e = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
                                r = "",
                                n = {};
                            return Ht._.isArray(Ht.para.source_channel) && Ht.para.source_channel.length > 0 && (e = e.concat(Ht.para.source_channel), e = Ht._.unique(e)), Ht._.each(e, function(i) {
                                (r = Ht._.getQueryParam(location.href, i)).length && (n[i] = r)
                            }), n
                        }()
                    }
                }
            })
        }
    },
    Vn = function(t, e, r) {
        return function(n, i, a) {
            if (n.plugin_name = i, n.init) {
                var u = n.init;
                n.init = function(l, p) {
                    if (function(c, _, b) {
                            function v(O, N) {
                                c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                            }
                            _.log = function() {
                                v("log", arguments)
                            }, _.warn = function() {
                                v("warn", arguments)
                            }, _.error = function() {
                                v("error", arguments)
                            }
                        }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                    function g() {
                        u.call(n, l, p)
                    }
                    l.on(a, g)
                }
            }
        }(t, e, r), t.plugin_version = "1.26.3", t
    }(as, "Utm", "sdkAfterInitPara"),
    sn = !1,
    Dr = null,
    ss = {
        init: function(t) {
            (Dr = t).disableSDK = os, Dr.enableSDK = ls, Dr.getDisabled = us
        }
    };

function os() {
    sn = !0
}

function ls() {
    sn = !1
}

function us() {
    return sn
}
var F, ae, Wn = function(t, e, r) {
    return function(n, i, a) {
        if (n.plugin_name = i, n.init) {
            var u = n.init;
            n.init = function(l, p) {
                if (function(c, _, b) {
                        function v(O, N) {
                            c.logger ? c.logger.msg.apply(c.logger, N).module(b + "").level(O).log() : c.log && c.log.apply(c, N)
                        }
                        _.log = function() {
                            v("log", arguments)
                        }, _.warn = function() {
                            v("warn", arguments)
                        }, _.error = function() {
                            v("error", arguments)
                        }
                    }(l, n, i), l.readyState && l.readyState.state >= 3 || !l.on) return g();

                function g() {
                    u.call(n, l, p)
                }
                l.on(a, g)
            }
        }
    }(t, e, r), t.plugin_version = "1.26.3", t
}(ss, "DisableSDK", "sdkInitAPI");

function cs(t, e) {
    if (F.para.debug_mode === !0) {
        var r = t.data;
        t.callback,
            function(n) {
                var i, a = n;
                i = F.para.debug_mode_url.indexOf("?") !== -1 ? F.para.debug_mode_url + "&" + F.kit.encodeTrackData(n) : F.para.debug_mode_url + "?" + F.kit.encodeTrackData(n), ae.ajax({
                    url: i,
                    type: "GET",
                    cors: !0,
                    header: {
                        "Dry-Run": String(F.para.debug_mode_upload)
                    },
                    success: function(u) {
                        ae.isEmptyObject(u) === !0 ? alert("debug数据发送成功" + a) : alert("debug失败 错误原因" + JSON.stringify(u))
                    }
                })
            }(JSON.stringify(r)), e.cancellationToken.stop()
    }
    return t
}

function ps() {
    F.on("sdkInitPara", function() {
        F.para.debug_mode === !0 && (F.para.debug_mode_upload = F.para.debug_mode_upload || !1, ae.isString(F.para.debug_mode_url) || (ae.isString(F.para.server_url) ? F.para.debug_mode_url = F.para.server_url.replace("sa.gif", "debug") : ae.isArray(F.para.server_url) && ae.isString(F.para.server_url[0]) ? F.para.debug_mode_url = F.para.server_url[0].replace("sa.gif", "debug") : F.para.debug_mode = !1))
    }), F.on("sdkAfterInitPara", function() {
        F.registerInterceptor("sendDataStage", {
            send: {
                priority: 30,
                entry: cs
            }
        })
    })
}
var pt, se, ds = {
        plugin_name: "DebugSender",
        init: function(t) {
            ae = (F = t)._, ps()
        }
    },
    zn = function(t, e, r) {
        return t.plugin_version = "1.26.3", t
    }(ds);

function fs(t, e) {
    if (se.isObject(pt.para.jsapp) && !pt.para.jsapp.isOnline && typeof pt.para.jsapp.setData == "function") {
        var r = t;
        delete r.callback, r = JSON.stringify(r), pt.para.jsapp.setData(r), e.cancellationToken.stop()
    }
    return t
}

function gs(t) {
    if (t === !0 && se.isObject(pt.para.jsapp) && typeof pt.para.jsapp.getData == "function") {
        pt.para.jsapp.isOnline = !0;
        var e = pt.para.jsapp.getData();
        se.isArray(e) && e.length > 0 && se.each(e, function(r) {
            se.isJSONString(r) && pt.kit.sendData(JSON.parse(r))
        })
    } else pt.para.jsapp.isOnline = !1
}
var ut, Xt, _s = {
        plugin_name: "JsappSender",
        init: function(t) {
            se = (pt = t)._, pt.on("sdkAfterInitAPI", function() {
                se.isObject(pt.commonWays) && (pt.commonWays.setOnlineState = gs), pt.registerInterceptor("sendDataStage", {
                    send: {
                        priority: 40,
                        entry: fs
                    }
                })
            })
        }
    },
    Xn = function(t, e, r) {
        return t.plugin_version = "1.26.3", t
    }(_s),
    Ge = null;

function hs(t, e) {
    return !ut.para.app_js_bridge && ut.para.batch_send && Xt.localStorage.isSupport() && localStorage.length < ut.para.batch_send.storage_length && (Ge.add(t.data), e.cancellationToken.stop()), t
}

function ms() {
    ut.on("sdkInitPara", function() {
        (function() {
            var t = {
                datasend_timeout: 6e3,
                send_interval: 6e3,
                storage_length: 200
            };
            Xt.localStorage.isSupport() && Xt.isSupportCors() && typeof localStorage == "object" ? ut.para.batch_send === !0 ? ut.para.batch_send = Xt.extend({}, t) : typeof ut.para.batch_send == "object" && (ut.para.batch_send = Xt.extend({}, t, ut.para.batch_send)) : ut.para.batch_send = !1
        })()
    }), ut.on("sdkAfterInitPara", function() {
        !ut.para.app_js_bridge && ut.para.batch_send && Xt.localStorage.isSupport() && (Ge || (Ge = new Xt.BatchSend), Ge.batchInterval(), ut.registerInterceptor("sendDataStage", {
            send: {
                priority: 100,
                entry: hs
            }
        }))
    })
}
var Bt, Qt, vs = {
        plugin_name: "BatchSender",
        init: function(t) {
            Xt = (ut = t)._, ms()
        }
    },
    Zn = function(t, e, r) {
        return t.plugin_version = "1.26.3", t
    }(vs);

function Qn(t) {
    new Qt.BeaconSend(t).start()
}

function ys(t, e) {
    var r = null,
        n = null;
    if (Qt.isObject(t.config) && (r = t.config.send_type, n = Qt.optimizeServerUrl(t.config.server_url)), (r === "beacon" || !r && Bt.para.send_type === "beacon") && Qt.isSupportBeaconSend()) {
        var i = n || t.server_url;
        t.server_url = i, t.data = Bt.kit.encodeTrackData(t.data), Qt.isArray(i) && i.length ? Qt.each(i, function(a) {
            t.callback = null, t.server_url = a, Qn(t)
        }) : typeof i == "string" && i !== "" ? Qn(t) : Bt.log("当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！"), e.cancellationToken.stop()
    }
    return t
}

function bs() {
    Bt.on("sdkInitPara", function() {
        Bt.para.send_type !== "beacon" || Qt.isSupportBeaconSend() || (Bt.para.send_type = "image")
    }), Bt.on("sdkAfterInitPara", function() {
        Bt.registerInterceptor("sendDataStage", {
            send: {
                priority: 110,
                entry: ys
            }
        })
    })
}
var Jt, Yt, ws = {
        plugin_name: "BeaconSender",
        init: function(t) {
            Qt = (Bt = t)._, bs()
        }
    },
    Yn = function(t, e, r) {
        return t.plugin_version = "1.26.3", t
    }(ws);

function Gn(t) {
    new Yt.AjaxSend(t).start()
}

function Ss(t, e) {
    var r = null,
        n = null;
    if (Yt.isObject(t.config) && (r = t.config.send_type, n = Yt.optimizeServerUrl(t.config.server_url)), (r === "ajax" || !r && Jt.para.send_type === "ajax") && Yt.isSupportCors()) {
        var i = n || t.server_url;
        t.server_url = i, t.data = Jt.kit.encodeTrackData(t.data), Yt.isArray(i) && i.length ? Yt.each(i, function(a) {
            t.callback = null, t.server_url = a, Gn(t)
        }) : typeof i == "string" && i !== "" ? Gn(t) : Jt.log("当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！"), e.cancellationToken.stop()
    }
    return t
}

function ks() {
    Jt.on("sdkInitPara", function() {
        Jt.para.send_type !== "ajax" || Yt.isSupportCors() || (Jt.para.send_type = "image")
    }), Jt.on("sdkAfterInitPara", function() {
        Jt.registerInterceptor("sendDataStage", {
            send: {
                priority: 120,
                entry: Ss
            }
        })
    })
}
var Ot, he, Ps = {
        plugin_name: "AjaxSender",
        init: function(t) {
            Yt = (Jt = t)._, ks()
        }
    },
    ti = function(t, e, r) {
        return t.plugin_version = "1.26.3", t
    }(Ps);

function ei(t, e) {
    var r = Ot.kit.encodeTrackData(e);
    return t.indexOf("?") !== -1 ? t + "&" + r : t + "?" + r
}

function ri(t) {
    new he.ImageSend(t).start()
}

function Cs(t, e) {
    var r = null;
    he.isObject(t.config) && (r = he.optimizeServerUrl(t.config.server_url));
    var n = r || t.server_url,
        i = t.data;
    t.server_url = n, he.isArray(n) && n.length ? he.each(n, function(a) {
        a && (t.data = ei(a, i), t.callback = null, t.server_url = a, ri(t))
    }) : typeof n == "string" && n !== "" ? (t.data = ei(n, i), ri(t)) : Ot.logger && Ot.logger.msg("当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！").level("warn").log(), e.cancellationToken.stop()
}

function js() {
    Ot.on("sdkInitPara", function() {
        Ot.para.send_type !== "image" && Ot.para.send_type !== "ajax" && Ot.para.send_type !== "beacon" && (Ot.para.send_type = "image")
    }), Ot.on("sdkAfterInitPara", function() {
        Ot.registerInterceptor("sendDataStage", {
            send: {
                priority: 130,
                entry: Cs
            }
        })
    })
}
var Os = {
        plugin_name: "ImageSender",
        init: function(t) {
            he = (Ot = t)._, js()
        }
    },
    ni = function(t, e, r) {
        return t.plugin_version = "1.26.3", t
    }(Os),
    rt = null,
    vt = null,
    xe = [],
    Ns = {
        init: function(t) {
            t && (vt = (rt = t)._, rt.logger && rt.logger.appendWriter(Ts), rt.on && rt.on("sdkAfterInitPara", function() {
                for (var e = 0; e < xe.length; e++) oa(xe[e]);
                xe = null
            }), rt.on && rt.on("sdkInitAPI", function() {
                rt.enableLocalLog = Ds, rt.disableLocalLog = As
            }))
        }
    },
    ii = function(t, e, r) {
        return function(n, i, a) {
            n.plugin_name = i
        }(t, e, r), t.plugin_version = ur, t
    }(Ns, "ConsoleLogger");

function Ts(t) {
    xe !== null ? xe.push(t) : oa(t)
}

function oa(t) {
    try {
        if (t.level === "log" && ai() || t.level === "warn" && (Wr() || ai() || vt.isObject(rt.para.show_log) && rt.para.show_log.level === "warn") || t.level === "error" && (Wr() || !vt.isObject(rt.para.show_log) || rt.para.show_log.level !== "none")) return void Ar(t)
    } catch {}
}

function ai() {
    return !!Wr() || rt.para.show_log === !0 || vt.isObject(rt.para.show_log) && rt.para.show_log.level === "log"
}

function Ar(t) {
    var e = t.content,
        r = vt.isObject(e[0]) ? vt.formatJsonString(e[0]) : e[0],
        n = function(i) {
            var a = "",
                u = "",
                l = rt.para.show_log;
            return vt.isObject(l) && l.show_brand === !1 || (a += i.brand), vt.isObject(l) && l.show_level === !1 || (a += (a.length > 0 ? "-" : "") + i.level), a.length > 0 && (a = "[" + a + "]"), vt.isObject(l) && l.show_module === !1 || (u = i.module), a + u
        }(t);
    e[0] = n + (n.length > 0 ? ": " : "") + r;
    try {
        console && (vt.isFunction(console[t.level]) ? console[t.level].apply(console, e) : vt.isObject(console[t.level]) && console[t.level](e[0]))
    } catch {}
}
var on = "sensorsdata_jssdk_debug";

function Ds() {
    vt.sessionStorage.isSupport() && sessionStorage.setItem(on, "true")
}

function As() {
    vt.sessionStorage.isSupport() && sessionStorage.removeItem(on)
}

function Wr() {
    return vt.sessionStorage.isSupport() && sessionStorage.getItem(on) === "true"
}
s.modules = s.modules || {};
for (var si = [ii, Ba, En, Bn, Ka, Va, qn, Fn, Za, Ya, Ga, rs, is, Vn, Wn, zn, Xn, Zn, Yn, ti, ni], oi = [ii, Ha, Vn, Wn, Xn, zn, En, qn, Bn, Fn, Zn, Yn, ti, ni], oe = 0; oe < si.length; oe++) {
    var ge = si[oe];
    s._.isString(ge.plugin_name) ? s.modules[ge.plugin_name] = ge : s._.isArray(ge.plugin_name) && s._.each(ge.plugin_name, function(t) {
        s.modules[t] = ge
    })
}
for (oe = 0; oe < oi.length; oe++) s.use(oi[oe]);
var la = s;
try {
    typeof window.sensorsDataAnalytic201505 == "string" ? (s.para = window[sensorsDataAnalytic201505].para, s._q = window[sensorsDataAnalytic201505]._q, window[sensorsDataAnalytic201505] = s, window.sensorsDataAnalytic201505 = s, s.init()) : window.sensorsDataAnalytic201505 === void 0 ? window.sensorsDataAnalytic201505 = s : la = window.sensorsDataAnalytic201505
} catch (t) {
    L(t)
}
var $s = la;
export {
    $s as
    default
};