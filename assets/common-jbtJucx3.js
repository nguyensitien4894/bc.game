import {
    a as animate$1,
    i as isFunction,
    w as withControls,
    A as Animation,
    L as Long,
    c as createRoot,
    d as delegateEvents,
    b as createSignal,
    e as createContext,
    f as createStore,
    g as createComputed,
    h as createEffect,
    j as batch,
    k as createComponent,
    l as getOwner,
    o as onCleanup,
    m as createMemo,
    n as createResource,
    p as getListener,
    q as mergeProps,
    s as splitProps,
    r as axios,
    u as untrack,
    t as useContext,
    v as template,
    x as insert,
    y as spread,
    z as children,
    B as runWithOwner,
    C as A$2,
    D as createRenderEffect,
    E as className,
    F as setAttribute,
    G as For,
    H as addEventListener$1,
    I as memo$2,
    J as use,
    K as createSelector,
    M as useTransition,
    N as onMount,
    O as useCurrentMatches,
    P as useLocation,
    Q as sharedConfig,
    $ as $TRACK,
    R as on$1,
    S as createUniqueId,
    T as reconcile,
    U as lazy,
    V as useNavigate$1,
    W as gsapWithCSS,
    X as Show,
    Y as Switch$1,
    Z as Match,
    _ as style,
    a0 as Index,
    a1 as Suspense,
    a2 as Portal,
    a3 as ErrorBoundary,
    a4 as useBeforeLeave$1,
    a5 as Router,
    a6 as classList,
    a7 as unwrap,
    a8 as createRouter,
    a9 as useSearchParams
} from "./vendor-CR7NILRE.js";
const scriptRel = "modulepreload",
    assetsURL = function(O) {
        return "/" + O
    },
    seen = {},
    __vitePreload = function(M, L, I) {
        let N = Promise.resolve();
        if (L && L.length > 0) {
            document.getElementsByTagName("link");
            const _ = document.querySelector("meta[property=csp-nonce]"),
                H = _ ? .nonce || _ ? .getAttribute("nonce");
            N = Promise.allSettled(L.map(G => {
                if (G = assetsURL(G), G in seen) return;
                seen[G] = !0;
                const z = G.endsWith(".css"),
                    W = z ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${G}"]${W}`)) return;
                const K = document.createElement("link");
                if (K.rel = z ? "stylesheet" : scriptRel, z || (K.as = "script"), K.crossOrigin = "", K.href = G, H && K.setAttribute("nonce", H), document.head.appendChild(K), z) return new Promise((X, Y) => {
                    K.addEventListener("load", X), K.addEventListener("error", () => Y(new Error(`Unable to preload CSS for ${G}`)))
                })
            }))
        }

        function R(_) {
            const H = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (H.payload = _, window.dispatchEvent(H), !H.defaultPrevented) throw _
        }
        return N.then(_ => {
            for (const H of _ || []) H.status === "rejected" && R(H.reason);
            return M().catch(R)
        })
    };

function animateProgress(O, M = {}) {
    return withControls([() => {
        const L = new Animation(O, [0, 1], M);
        return L.finished.catch(() => {}), L
    }], M, M.duration)
}

function animate(O, M, L) {
    return (isFunction(O) ? animateProgress : animate$1)(O, M, L)
}
var define_process_env_default = {},
    _t = Object.defineProperty,
    ut = O => {
        throw TypeError(O)
    },
    St = (O, M, L) => M in O ? _t(O, M, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: L
    }) : O[M] = L,
    we = (O, M, L) => St(O, typeof M != "symbol" ? M + "" : M, L),
    ot = (O, M, L) => M.has(O) || ut("Cannot " + L),
    me = (O, M, L) => (ot(O, M, "read from private field"), L ? L.call(O) : M.get(O)),
    ke = (O, M, L) => M.has(O) ? ut("Cannot add the same private member more than once") : M instanceof WeakSet ? M.add(O) : M.set(O, L),
    $e = (O, M, L, I) => (ot(O, M, "write to private field"), M.set(O, L), L),
    Re = (O, M, L) => (ot(O, M, "access private method"), L),
    Ge = (O, M, L, I) => ({
        set _(N) {
            $e(O, M, N)
        },
        get _() {
            return me(O, M, I)
        }
    }),
    commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function getDefaultExportFromCjs(O) {
    return O && O.__esModule && Object.prototype.hasOwnProperty.call(O, "default") ? O.default : O
}

function getAugmentedNamespace(O) {
    if (Object.prototype.hasOwnProperty.call(O, "__esModule")) return O;
    var M = O.default;
    if (typeof M == "function") {
        var L = function I() {
            return this instanceof I ? Reflect.construct(M, arguments, this.constructor) : M.apply(this, arguments)
        };
        L.prototype = M.prototype
    } else L = {};
    return Object.defineProperty(L, "__esModule", {
        value: !0
    }), Object.keys(O).forEach(function(I) {
        var N = Object.getOwnPropertyDescriptor(O, I);
        Object.defineProperty(L, I, N.get ? N : {
            enumerable: !0,
            get: function() {
                return O[I]
            }
        })
    }), L
}
var indexMinimal = {},
    minimal$1 = {},
    aspromise, hasRequiredAspromise;

function requireAspromise() {
    if (hasRequiredAspromise) return aspromise;
    hasRequiredAspromise = 1, aspromise = O;

    function O(M, L) {
        for (var I = new Array(arguments.length - 1), N = 0, R = 2, _ = !0; R < arguments.length;) I[N++] = arguments[R++];
        return new Promise(function(H, G) {
            I[N] = function(z) {
                if (_)
                    if (_ = !1, z) G(z);
                    else {
                        for (var W = new Array(arguments.length - 1), K = 0; K < W.length;) W[K++] = arguments[K];
                        H.apply(null, W)
                    }
            };
            try {
                M.apply(L || null, I)
            } catch (z) {
                _ && (_ = !1, G(z))
            }
        })
    }
    return aspromise
}
var base64 = {},
    hasRequiredBase64;

function requireBase64() {
    return hasRequiredBase64 || (hasRequiredBase64 = 1, function(O) {
        var M = O;
        M.length = function(_) {
            var H = _.length;
            if (!H) return 0;
            for (var G = 0; --H % 4 > 1 && _.charAt(H) === "=";) ++G;
            return Math.ceil(_.length * 3) / 4 - G
        };
        for (var L = new Array(64), I = new Array(123), N = 0; N < 64;) I[L[N] = N < 26 ? N + 65 : N < 52 ? N + 71 : N < 62 ? N - 4 : N - 59 | 43] = N++;
        M.encode = function(_, H, G) {
            for (var z = null, W = [], K = 0, X = 0, Y; H < G;) {
                var J = _[H++];
                switch (X) {
                    case 0:
                        W[K++] = L[J >> 2], Y = (J & 3) << 4, X = 1;
                        break;
                    case 1:
                        W[K++] = L[Y | J >> 4], Y = (J & 15) << 2, X = 2;
                        break;
                    case 2:
                        W[K++] = L[Y | J >> 6], W[K++] = L[J & 63], X = 0;
                        break
                }
                K > 8191 && ((z || (z = [])).push(String.fromCharCode.apply(String, W)), K = 0)
            }
            return X && (W[K++] = L[Y], W[K++] = 61, X === 1 && (W[K++] = 61)), z ? (K && z.push(String.fromCharCode.apply(String, W.slice(0, K))), z.join("")) : String.fromCharCode.apply(String, W.slice(0, K))
        };
        var R = "invalid encoding";
        M.decode = function(_, H, G) {
            for (var z = G, W = 0, K, X = 0; X < _.length;) {
                var Y = _.charCodeAt(X++);
                if (Y === 61 && W > 1) break;
                if ((Y = I[Y]) === void 0) throw Error(R);
                switch (W) {
                    case 0:
                        K = Y, W = 1;
                        break;
                    case 1:
                        H[G++] = K << 2 | (Y & 48) >> 4, K = Y, W = 2;
                        break;
                    case 2:
                        H[G++] = (K & 15) << 4 | (Y & 60) >> 2, K = Y, W = 3;
                        break;
                    case 3:
                        H[G++] = (K & 3) << 6 | Y, W = 0;
                        break
                }
            }
            if (W === 1) throw Error(R);
            return G - z
        }, M.test = function(_) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_)
        }
    }(base64)), base64
}
var eventemitter, hasRequiredEventemitter;

function requireEventemitter() {
    if (hasRequiredEventemitter) return eventemitter;
    hasRequiredEventemitter = 1, eventemitter = O;

    function O() {
        this._listeners = {}
    }
    return O.prototype.on = function(M, L, I) {
        return (this._listeners[M] || (this._listeners[M] = [])).push({
            fn: L,
            ctx: I || this
        }), this
    }, O.prototype.off = function(M, L) {
        if (M === void 0) this._listeners = {};
        else if (L === void 0) this._listeners[M] = [];
        else
            for (var I = this._listeners[M], N = 0; N < I.length;) I[N].fn === L ? I.splice(N, 1) : ++N;
        return this
    }, O.prototype.emit = function(M) {
        var L = this._listeners[M];
        if (L) {
            for (var I = [], N = 1; N < arguments.length;) I.push(arguments[N++]);
            for (N = 0; N < L.length;) L[N].fn.apply(L[N++].ctx, I)
        }
        return this
    }, eventemitter
}
var float, hasRequiredFloat;

function requireFloat() {
    if (hasRequiredFloat) return float;
    hasRequiredFloat = 1, float = O(O);

    function O(R) {
        return typeof Float32Array < "u" ? function() {
            var _ = new Float32Array([-0]),
                H = new Uint8Array(_.buffer),
                G = H[3] === 128;

            function z(Y, J, Z) {
                _[0] = Y, J[Z] = H[0], J[Z + 1] = H[1], J[Z + 2] = H[2], J[Z + 3] = H[3]
            }

            function W(Y, J, Z) {
                _[0] = Y, J[Z] = H[3], J[Z + 1] = H[2], J[Z + 2] = H[1], J[Z + 3] = H[0]
            }
            R.writeFloatLE = G ? z : W, R.writeFloatBE = G ? W : z;

            function K(Y, J) {
                return H[0] = Y[J], H[1] = Y[J + 1], H[2] = Y[J + 2], H[3] = Y[J + 3], _[0]
            }

            function X(Y, J) {
                return H[3] = Y[J], H[2] = Y[J + 1], H[1] = Y[J + 2], H[0] = Y[J + 3], _[0]
            }
            R.readFloatLE = G ? K : X, R.readFloatBE = G ? X : K
        }() : function() {
            function _(G, z, W, K) {
                var X = z < 0 ? 1 : 0;
                if (X && (z = -z), z === 0) G(1 / z > 0 ? 0 : 2147483648, W, K);
                else if (isNaN(z)) G(2143289344, W, K);
                else if (z > 34028234663852886e22) G((X << 31 | 2139095040) >>> 0, W, K);
                else if (z < 11754943508222875e-54) G((X << 31 | Math.round(z / 1401298464324817e-60)) >>> 0, W, K);
                else {
                    var Y = Math.floor(Math.log(z) / Math.LN2),
                        J = Math.round(z * Math.pow(2, -Y) * 8388608) & 8388607;
                    G((X << 31 | Y + 127 << 23 | J) >>> 0, W, K)
                }
            }
            R.writeFloatLE = _.bind(null, M), R.writeFloatBE = _.bind(null, L);

            function H(G, z, W) {
                var K = G(z, W),
                    X = (K >> 31) * 2 + 1,
                    Y = K >>> 23 & 255,
                    J = K & 8388607;
                return Y === 255 ? J ? NaN : X * (1 / 0) : Y === 0 ? X * 1401298464324817e-60 * J : X * Math.pow(2, Y - 150) * (J + 8388608)
            }
            R.readFloatLE = H.bind(null, I), R.readFloatBE = H.bind(null, N)
        }(), typeof Float64Array < "u" ? function() {
            var _ = new Float64Array([-0]),
                H = new Uint8Array(_.buffer),
                G = H[7] === 128;

            function z(Y, J, Z) {
                _[0] = Y, J[Z] = H[0], J[Z + 1] = H[1], J[Z + 2] = H[2], J[Z + 3] = H[3], J[Z + 4] = H[4], J[Z + 5] = H[5], J[Z + 6] = H[6], J[Z + 7] = H[7]
            }

            function W(Y, J, Z) {
                _[0] = Y, J[Z] = H[7], J[Z + 1] = H[6], J[Z + 2] = H[5], J[Z + 3] = H[4], J[Z + 4] = H[3], J[Z + 5] = H[2], J[Z + 6] = H[1], J[Z + 7] = H[0]
            }
            R.writeDoubleLE = G ? z : W, R.writeDoubleBE = G ? W : z;

            function K(Y, J) {
                return H[0] = Y[J], H[1] = Y[J + 1], H[2] = Y[J + 2], H[3] = Y[J + 3], H[4] = Y[J + 4], H[5] = Y[J + 5], H[6] = Y[J + 6], H[7] = Y[J + 7], _[0]
            }

            function X(Y, J) {
                return H[7] = Y[J], H[6] = Y[J + 1], H[5] = Y[J + 2], H[4] = Y[J + 3], H[3] = Y[J + 4], H[2] = Y[J + 5], H[1] = Y[J + 6], H[0] = Y[J + 7], _[0]
            }
            R.readDoubleLE = G ? K : X, R.readDoubleBE = G ? X : K
        }() : function() {
            function _(G, z, W, K, X, Y) {
                var J = K < 0 ? 1 : 0;
                if (J && (K = -K), K === 0) G(0, X, Y + z), G(1 / K > 0 ? 0 : 2147483648, X, Y + W);
                else if (isNaN(K)) G(0, X, Y + z), G(2146959360, X, Y + W);
                else if (K > 17976931348623157e292) G(0, X, Y + z), G((J << 31 | 2146435072) >>> 0, X, Y + W);
                else {
                    var Z;
                    if (K < 22250738585072014e-324) Z = K / 5e-324, G(Z >>> 0, X, Y + z), G((J << 31 | Z / 4294967296) >>> 0, X, Y + W);
                    else {
                        var Q = Math.floor(Math.log(K) / Math.LN2);
                        Q === 1024 && (Q = 1023), Z = K * Math.pow(2, -Q), G(Z * 4503599627370496 >>> 0, X, Y + z), G((J << 31 | Q + 1023 << 20 | Z * 1048576 & 1048575) >>> 0, X, Y + W)
                    }
                }
            }
            R.writeDoubleLE = _.bind(null, M, 0, 4), R.writeDoubleBE = _.bind(null, L, 4, 0);

            function H(G, z, W, K, X) {
                var Y = G(K, X + z),
                    J = G(K, X + W),
                    Z = (J >> 31) * 2 + 1,
                    Q = J >>> 20 & 2047,
                    ee = 4294967296 * (J & 1048575) + Y;
                return Q === 2047 ? ee ? NaN : Z * (1 / 0) : Q === 0 ? Z * 5e-324 * ee : Z * Math.pow(2, Q - 1075) * (ee + 4503599627370496)
            }
            R.readDoubleLE = H.bind(null, I, 0, 4), R.readDoubleBE = H.bind(null, N, 4, 0)
        }(), R
    }

    function M(R, _, H) {
        _[H] = R & 255, _[H + 1] = R >>> 8 & 255, _[H + 2] = R >>> 16 & 255, _[H + 3] = R >>> 24
    }

    function L(R, _, H) {
        _[H] = R >>> 24, _[H + 1] = R >>> 16 & 255, _[H + 2] = R >>> 8 & 255, _[H + 3] = R & 255
    }

    function I(R, _) {
        return (R[_] | R[_ + 1] << 8 | R[_ + 2] << 16 | R[_ + 3] << 24) >>> 0
    }

    function N(R, _) {
        return (R[_] << 24 | R[_ + 1] << 16 | R[_ + 2] << 8 | R[_ + 3]) >>> 0
    }
    return float
}
var inquire_1, hasRequiredInquire;

function requireInquire() {
    if (hasRequiredInquire) return inquire_1;
    hasRequiredInquire = 1, inquire_1 = inquire;

    function inquire(moduleName) {
        try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) return mod
        } catch (O) {}
        return null
    }
    return inquire_1
}
var utf8$1 = {},
    hasRequiredUtf8$1;

function requireUtf8$1() {
    return hasRequiredUtf8$1 || (hasRequiredUtf8$1 = 1, function(O) {
        var M = O;
        M.length = function(L) {
            for (var I = 0, N = 0, R = 0; R < L.length; ++R) N = L.charCodeAt(R), N < 128 ? I += 1 : N < 2048 ? I += 2 : (N & 64512) === 55296 && (L.charCodeAt(R + 1) & 64512) === 56320 ? (++R, I += 4) : I += 3;
            return I
        }, M.read = function(L, I, N) {
            var R = N - I;
            if (R < 1) return "";
            for (var _ = null, H = [], G = 0, z; I < N;) z = L[I++], z < 128 ? H[G++] = z : z > 191 && z < 224 ? H[G++] = (z & 31) << 6 | L[I++] & 63 : z > 239 && z < 365 ? (z = ((z & 7) << 18 | (L[I++] & 63) << 12 | (L[I++] & 63) << 6 | L[I++] & 63) - 65536, H[G++] = 55296 + (z >> 10), H[G++] = 56320 + (z & 1023)) : H[G++] = (z & 15) << 12 | (L[I++] & 63) << 6 | L[I++] & 63, G > 8191 && ((_ || (_ = [])).push(String.fromCharCode.apply(String, H)), G = 0);
            return _ ? (G && _.push(String.fromCharCode.apply(String, H.slice(0, G))), _.join("")) : String.fromCharCode.apply(String, H.slice(0, G))
        }, M.write = function(L, I, N) {
            for (var R = N, _, H, G = 0; G < L.length; ++G) _ = L.charCodeAt(G), _ < 128 ? I[N++] = _ : _ < 2048 ? (I[N++] = _ >> 6 | 192, I[N++] = _ & 63 | 128) : (_ & 64512) === 55296 && ((H = L.charCodeAt(G + 1)) & 64512) === 56320 ? (_ = 65536 + ((_ & 1023) << 10) + (H & 1023), ++G, I[N++] = _ >> 18 | 240, I[N++] = _ >> 12 & 63 | 128, I[N++] = _ >> 6 & 63 | 128, I[N++] = _ & 63 | 128) : (I[N++] = _ >> 12 | 224, I[N++] = _ >> 6 & 63 | 128, I[N++] = _ & 63 | 128);
            return N - R
        }
    }(utf8$1)), utf8$1
}
var pool_1, hasRequiredPool;

function requirePool() {
    if (hasRequiredPool) return pool_1;
    hasRequiredPool = 1, pool_1 = O;

    function O(M, L, I) {
        var N = I || 8192,
            R = N >>> 1,
            _ = null,
            H = N;
        return function(G) {
            if (G < 1 || G > R) return M(G);
            H + G > N && (_ = M(N), H = 0);
            var z = L.call(_, H, H += G);
            return H & 7 && (H = (H | 7) + 1), z
        }
    }
    return pool_1
}
var longbits, hasRequiredLongbits;

function requireLongbits() {
    if (hasRequiredLongbits) return longbits;
    hasRequiredLongbits = 1, longbits = M;
    var O = requireMinimal$1();

    function M(R, _) {
        this.lo = R >>> 0, this.hi = _ >>> 0
    }
    var L = M.zero = new M(0, 0);
    L.toNumber = function() {
        return 0
    }, L.zzEncode = L.zzDecode = function() {
        return this
    }, L.length = function() {
        return 1
    };
    var I = M.zeroHash = "\0\0\0\0\0\0\0\0";
    M.fromNumber = function(R) {
        if (R === 0) return L;
        var _ = R < 0;
        _ && (R = -R);
        var H = R >>> 0,
            G = (R - H) / 4294967296 >>> 0;
        return _ && (G = ~G >>> 0, H = ~H >>> 0, ++H > 4294967295 && (H = 0, ++G > 4294967295 && (G = 0))), new M(H, G)
    }, M.from = function(R) {
        if (typeof R == "number") return M.fromNumber(R);
        if (O.isString(R))
            if (O.Long) R = O.Long.fromString(R);
            else return M.fromNumber(parseInt(R, 10));
        return R.low || R.high ? new M(R.low >>> 0, R.high >>> 0) : L
    }, M.prototype.toNumber = function(R) {
        if (!R && this.hi >>> 31) {
            var _ = ~this.lo + 1 >>> 0,
                H = ~this.hi >>> 0;
            return _ || (H = H + 1 >>> 0), -(_ + H * 4294967296)
        }
        return this.lo + this.hi * 4294967296
    }, M.prototype.toLong = function(R) {
        return O.Long ? new O.Long(this.lo | 0, this.hi | 0, !!R) : {
            low: this.lo | 0,
            high: this.hi | 0,
            unsigned: !!R
        }
    };
    var N = String.prototype.charCodeAt;
    return M.fromHash = function(R) {
        return R === I ? L : new M((N.call(R, 0) | N.call(R, 1) << 8 | N.call(R, 2) << 16 | N.call(R, 3) << 24) >>> 0, (N.call(R, 4) | N.call(R, 5) << 8 | N.call(R, 6) << 16 | N.call(R, 7) << 24) >>> 0)
    }, M.prototype.toHash = function() {
        return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
    }, M.prototype.zzEncode = function() {
        var R = this.hi >> 31;
        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ R) >>> 0, this.lo = (this.lo << 1 ^ R) >>> 0, this
    }, M.prototype.zzDecode = function() {
        var R = -(this.lo & 1);
        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ R) >>> 0, this.hi = (this.hi >>> 1 ^ R) >>> 0, this
    }, M.prototype.length = function() {
        var R = this.lo,
            _ = (this.lo >>> 28 | this.hi << 4) >>> 0,
            H = this.hi >>> 24;
        return H === 0 ? _ === 0 ? R < 16384 ? R < 128 ? 1 : 2 : R < 2097152 ? 3 : 4 : _ < 16384 ? _ < 128 ? 5 : 6 : _ < 2097152 ? 7 : 8 : H < 128 ? 9 : 10
    }, longbits
}
var hasRequiredMinimal$1;

function requireMinimal$1() {
    return hasRequiredMinimal$1 || (hasRequiredMinimal$1 = 1, function(O) {
        var M = O;
        M.asPromise = requireAspromise(), M.base64 = requireBase64(), M.EventEmitter = requireEventemitter(), M.float = requireFloat(), M.inquire = requireInquire(), M.utf8 = requireUtf8$1(), M.pool = requirePool(), M.LongBits = requireLongbits(), M.isNode = !!(typeof commonjsGlobal < "u" && commonjsGlobal && commonjsGlobal.process && commonjsGlobal.process.versions && commonjsGlobal.process.versions.node), M.global = M.isNode && commonjsGlobal || typeof window < "u" && window || typeof self < "u" && self || minimal$1, M.emptyArray = Object.freeze ? Object.freeze([]) : [], M.emptyObject = Object.freeze ? Object.freeze({}) : {}, M.isInteger = Number.isInteger || function(N) {
            return typeof N == "number" && isFinite(N) && Math.floor(N) === N
        }, M.isString = function(N) {
            return typeof N == "string" || N instanceof String
        }, M.isObject = function(N) {
            return N && typeof N == "object"
        }, M.isset = M.isSet = function(N, R) {
            var _ = N[R];
            return _ != null && N.hasOwnProperty(R) ? typeof _ != "object" || (Array.isArray(_) ? _.length : Object.keys(_).length) > 0 : !1
        }, M.Buffer = function() {
            try {
                var N = M.inquire("buffer").Buffer;
                return N.prototype.utf8Write ? N : null
            } catch {
                return null
            }
        }(), M._Buffer_from = null, M._Buffer_allocUnsafe = null, M.newBuffer = function(N) {
            return typeof N == "number" ? M.Buffer ? M._Buffer_allocUnsafe(N) : new M.Array(N) : M.Buffer ? M._Buffer_from(N) : typeof Uint8Array > "u" ? N : new Uint8Array(N)
        }, M.Array = typeof Uint8Array < "u" ? Uint8Array : Array, M.Long = M.global.dcodeIO && M.global.dcodeIO.Long || M.global.Long || M.inquire("long"), M.key2Re = /^true|false|0|1$/, M.key32Re = /^-?(?:0|[1-9][0-9]*)$/, M.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, M.longToHash = function(N) {
            return N ? M.LongBits.from(N).toHash() : M.LongBits.zeroHash
        }, M.longFromHash = function(N, R) {
            var _ = M.LongBits.fromHash(N);
            return M.Long ? M.Long.fromBits(_.lo, _.hi, R) : _.toNumber(!!R)
        };

        function L(N, R, _) {
            for (var H = Object.keys(R), G = 0; G < H.length; ++G)(N[H[G]] === void 0 || !_) && (N[H[G]] = R[H[G]]);
            return N
        }
        M.merge = L, M.lcFirst = function(N) {
            return N.charAt(0).toLowerCase() + N.substring(1)
        };

        function I(N) {
            function R(_, H) {
                if (!(this instanceof R)) return new R(_, H);
                Object.defineProperty(this, "message", {
                    get: function() {
                        return _
                    }
                }), Error.captureStackTrace ? Error.captureStackTrace(this, R) : Object.defineProperty(this, "stack", {
                    value: new Error().stack || ""
                }), H && L(this, H)
            }
            return R.prototype = Object.create(Error.prototype, {
                constructor: {
                    value: R,
                    writable: !0,
                    enumerable: !1,
                    configurable: !0
                },
                name: {
                    get: function() {
                        return N
                    },
                    set: void 0,
                    enumerable: !1,
                    configurable: !0
                },
                toString: {
                    value: function() {
                        return this.name + ": " + this.message
                    },
                    writable: !0,
                    enumerable: !1,
                    configurable: !0
                }
            }), R
        }
        M.newError = I, M.ProtocolError = I("ProtocolError"), M.oneOfGetter = function(N) {
            for (var R = {}, _ = 0; _ < N.length; ++_) R[N[_]] = 1;
            return function() {
                for (var H = Object.keys(this), G = H.length - 1; G > -1; --G)
                    if (R[H[G]] === 1 && this[H[G]] !== void 0 && this[H[G]] !== null) return H[G]
            }
        }, M.oneOfSetter = function(N) {
            return function(R) {
                for (var _ = 0; _ < N.length; ++_) N[_] !== R && delete this[N[_]]
            }
        }, M.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0
        }, M._configure = function() {
            var N = M.Buffer;
            if (!N) {
                M._Buffer_from = M._Buffer_allocUnsafe = null;
                return
            }
            M._Buffer_from = N.from !== Uint8Array.from && N.from || function(R, _) {
                return new N(R, _)
            }, M._Buffer_allocUnsafe = N.allocUnsafe || function(R) {
                return new N(R)
            }
        }
    }(minimal$1)), minimal$1
}
var writer, hasRequiredWriter;

function requireWriter() {
    if (hasRequiredWriter) return writer;
    hasRequiredWriter = 1, writer = G;
    var O = requireMinimal$1(),
        M, L = O.LongBits,
        I = O.base64,
        N = O.utf8;

    function R(Q, ee, te) {
        this.fn = Q, this.len = ee, this.next = void 0, this.val = te
    }

    function _() {}

    function H(Q) {
        this.head = Q.head, this.tail = Q.tail, this.len = Q.len, this.next = Q.states
    }

    function G() {
        this.len = 0, this.head = new R(_, 0, 0), this.tail = this.head, this.states = null
    }
    var z = function() {
        return O.Buffer ? function() {
            return (G.create = function() {
                return new M
            })()
        } : function() {
            return new G
        }
    };
    G.create = z(), G.alloc = function(Q) {
        return new O.Array(Q)
    }, O.Array !== Array && (G.alloc = O.pool(G.alloc, O.Array.prototype.subarray)), G.prototype._push = function(Q, ee, te) {
        return this.tail = this.tail.next = new R(Q, ee, te), this.len += ee, this
    };

    function W(Q, ee, te) {
        ee[te] = Q & 255
    }

    function K(Q, ee, te) {
        for (; Q > 127;) ee[te++] = Q & 127 | 128, Q >>>= 7;
        ee[te] = Q
    }

    function X(Q, ee) {
        this.len = Q, this.next = void 0, this.val = ee
    }
    X.prototype = Object.create(R.prototype), X.prototype.fn = K, G.prototype.uint32 = function(Q) {
        return this.len += (this.tail = this.tail.next = new X((Q = Q >>> 0) < 128 ? 1 : Q < 16384 ? 2 : Q < 2097152 ? 3 : Q < 268435456 ? 4 : 5, Q)).len, this
    }, G.prototype.int32 = function(Q) {
        return Q < 0 ? this._push(Y, 10, L.fromNumber(Q)) : this.uint32(Q)
    }, G.prototype.sint32 = function(Q) {
        return this.uint32((Q << 1 ^ Q >> 31) >>> 0)
    };

    function Y(Q, ee, te) {
        for (; Q.hi;) ee[te++] = Q.lo & 127 | 128, Q.lo = (Q.lo >>> 7 | Q.hi << 25) >>> 0, Q.hi >>>= 7;
        for (; Q.lo > 127;) ee[te++] = Q.lo & 127 | 128, Q.lo = Q.lo >>> 7;
        ee[te++] = Q.lo
    }
    G.prototype.uint64 = function(Q) {
        var ee = L.from(Q);
        return this._push(Y, ee.length(), ee)
    }, G.prototype.int64 = G.prototype.uint64, G.prototype.sint64 = function(Q) {
        var ee = L.from(Q).zzEncode();
        return this._push(Y, ee.length(), ee)
    }, G.prototype.bool = function(Q) {
        return this._push(W, 1, Q ? 1 : 0)
    };

    function J(Q, ee, te) {
        ee[te] = Q & 255, ee[te + 1] = Q >>> 8 & 255, ee[te + 2] = Q >>> 16 & 255, ee[te + 3] = Q >>> 24
    }
    G.prototype.fixed32 = function(Q) {
        return this._push(J, 4, Q >>> 0)
    }, G.prototype.sfixed32 = G.prototype.fixed32, G.prototype.fixed64 = function(Q) {
        var ee = L.from(Q);
        return this._push(J, 4, ee.lo)._push(J, 4, ee.hi)
    }, G.prototype.sfixed64 = G.prototype.fixed64, G.prototype.float = function(Q) {
        return this._push(O.float.writeFloatLE, 4, Q)
    }, G.prototype.double = function(Q) {
        return this._push(O.float.writeDoubleLE, 8, Q)
    };
    var Z = O.Array.prototype.set ? function(Q, ee, te) {
        ee.set(Q, te)
    } : function(Q, ee, te) {
        for (var se = 0; se < Q.length; ++se) ee[te + se] = Q[se]
    };
    return G.prototype.bytes = function(Q) {
        var ee = Q.length >>> 0;
        if (!ee) return this._push(W, 1, 0);
        if (O.isString(Q)) {
            var te = G.alloc(ee = I.length(Q));
            I.decode(Q, te, 0), Q = te
        }
        return this.uint32(ee)._push(Z, ee, Q)
    }, G.prototype.string = function(Q) {
        var ee = N.length(Q);
        return ee ? this.uint32(ee)._push(N.write, ee, Q) : this._push(W, 1, 0)
    }, G.prototype.fork = function() {
        return this.states = new H(this), this.head = this.tail = new R(_, 0, 0), this.len = 0, this
    }, G.prototype.reset = function() {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new R(_, 0, 0), this.len = 0), this
    }, G.prototype.ldelim = function() {
        var Q = this.head,
            ee = this.tail,
            te = this.len;
        return this.reset().uint32(te), te && (this.tail.next = Q.next, this.tail = ee, this.len += te), this
    }, G.prototype.finish = function() {
        for (var Q = this.head.next, ee = this.constructor.alloc(this.len), te = 0; Q;) Q.fn(Q.val, ee, te), te += Q.len, Q = Q.next;
        return ee
    }, G._configure = function(Q) {
        M = Q, G.create = z(), M._configure()
    }, writer
}
var writer_buffer, hasRequiredWriter_buffer;

function requireWriter_buffer() {
    if (hasRequiredWriter_buffer) return writer_buffer;
    hasRequiredWriter_buffer = 1, writer_buffer = L;
    var O = requireWriter();
    (L.prototype = Object.create(O.prototype)).constructor = L;
    var M = requireMinimal$1();

    function L() {
        O.call(this)
    }
    L._configure = function() {
        L.alloc = M._Buffer_allocUnsafe, L.writeBytesBuffer = M.Buffer && M.Buffer.prototype instanceof Uint8Array && M.Buffer.prototype.set.name === "set" ? function(N, R, _) {
            R.set(N, _)
        } : function(N, R, _) {
            if (N.copy) N.copy(R, _, 0, N.length);
            else
                for (var H = 0; H < N.length;) R[_++] = N[H++]
        }
    }, L.prototype.bytes = function(N) {
        M.isString(N) && (N = M._Buffer_from(N, "base64"));
        var R = N.length >>> 0;
        return this.uint32(R), R && this._push(L.writeBytesBuffer, R, N), this
    };

    function I(N, R, _) {
        N.length < 40 ? M.utf8.write(N, R, _) : R.utf8Write ? R.utf8Write(N, _) : R.write(N, _)
    }
    return L.prototype.string = function(N) {
        var R = M.Buffer.byteLength(N);
        return this.uint32(R), R && this._push(I, R, N), this
    }, L._configure(), writer_buffer
}
var reader, hasRequiredReader;

function requireReader() {
    if (hasRequiredReader) return reader;
    hasRequiredReader = 1, reader = R;
    var O = requireMinimal$1(),
        M, L = O.LongBits,
        I = O.utf8;

    function N(K, X) {
        return RangeError("index out of range: " + K.pos + " + " + (X || 1) + " > " + K.len)
    }

    function R(K) {
        this.buf = K, this.pos = 0, this.len = K.length
    }
    var _ = typeof Uint8Array < "u" ? function(K) {
            if (K instanceof Uint8Array || Array.isArray(K)) return new R(K);
            throw Error("illegal buffer")
        } : function(K) {
            if (Array.isArray(K)) return new R(K);
            throw Error("illegal buffer")
        },
        H = function() {
            return O.Buffer ? function(K) {
                return (R.create = function(X) {
                    return O.Buffer.isBuffer(X) ? new M(X) : _(X)
                })(K)
            } : _
        };
    R.create = H(), R.prototype._slice = O.Array.prototype.subarray || O.Array.prototype.slice, R.prototype.uint32 = function() {
        var K = 4294967295;
        return function() {
            if (K = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (K = (K | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (K = (K | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (K = (K | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (K = (K | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return K;
            if ((this.pos += 5) > this.len) throw this.pos = this.len, N(this, 10);
            return K
        }
    }(), R.prototype.int32 = function() {
        return this.uint32() | 0
    }, R.prototype.sint32 = function() {
        var K = this.uint32();
        return K >>> 1 ^ -(K & 1) | 0
    };

    function G() {
        var K = new L(0, 0),
            X = 0;
        if (this.len - this.pos > 4) {
            for (; X < 4; ++X)
                if (K.lo = (K.lo | (this.buf[this.pos] & 127) << X * 7) >>> 0, this.buf[this.pos++] < 128) return K;
            if (K.lo = (K.lo | (this.buf[this.pos] & 127) << 28) >>> 0, K.hi = (K.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128) return K;
            X = 0
        } else {
            for (; X < 3; ++X) {
                if (this.pos >= this.len) throw N(this);
                if (K.lo = (K.lo | (this.buf[this.pos] & 127) << X * 7) >>> 0, this.buf[this.pos++] < 128) return K
            }
            return K.lo = (K.lo | (this.buf[this.pos++] & 127) << X * 7) >>> 0, K
        }
        if (this.len - this.pos > 4) {
            for (; X < 5; ++X)
                if (K.hi = (K.hi | (this.buf[this.pos] & 127) << X * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return K
        } else
            for (; X < 5; ++X) {
                if (this.pos >= this.len) throw N(this);
                if (K.hi = (K.hi | (this.buf[this.pos] & 127) << X * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return K
            }
        throw Error("invalid varint encoding")
    }
    R.prototype.bool = function() {
        return this.uint32() !== 0
    };

    function z(K, X) {
        return (K[X - 4] | K[X - 3] << 8 | K[X - 2] << 16 | K[X - 1] << 24) >>> 0
    }
    R.prototype.fixed32 = function() {
        if (this.pos + 4 > this.len) throw N(this, 4);
        return z(this.buf, this.pos += 4)
    }, R.prototype.sfixed32 = function() {
        if (this.pos + 4 > this.len) throw N(this, 4);
        return z(this.buf, this.pos += 4) | 0
    };

    function W() {
        if (this.pos + 8 > this.len) throw N(this, 8);
        return new L(z(this.buf, this.pos += 4), z(this.buf, this.pos += 4))
    }
    return R.prototype.float = function() {
        if (this.pos + 4 > this.len) throw N(this, 4);
        var K = O.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4, K
    }, R.prototype.double = function() {
        if (this.pos + 8 > this.len) throw N(this, 4);
        var K = O.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8, K
    }, R.prototype.bytes = function() {
        var K = this.uint32(),
            X = this.pos,
            Y = this.pos + K;
        if (Y > this.len) throw N(this, K);
        if (this.pos += K, Array.isArray(this.buf)) return this.buf.slice(X, Y);
        if (X === Y) {
            var J = O.Buffer;
            return J ? J.alloc(0) : new this.buf.constructor(0)
        }
        return this._slice.call(this.buf, X, Y)
    }, R.prototype.string = function() {
        var K = this.bytes();
        return I.read(K, 0, K.length)
    }, R.prototype.skip = function(K) {
        if (typeof K == "number") {
            if (this.pos + K > this.len) throw N(this, K);
            this.pos += K
        } else
            do
                if (this.pos >= this.len) throw N(this); while (this.buf[this.pos++] & 128);
        return this
    }, R.prototype.skipType = function(K) {
        switch (K) {
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                for (;
                    (K = this.uint32() & 7) !== 4;) this.skipType(K);
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + K + " at offset " + this.pos)
        }
        return this
    }, R._configure = function(K) {
        M = K, R.create = H(), M._configure();
        var X = O.Long ? "toLong" : "toNumber";
        O.merge(R.prototype, {
            int64: function() {
                return G.call(this)[X](!1)
            },
            uint64: function() {
                return G.call(this)[X](!0)
            },
            sint64: function() {
                return G.call(this).zzDecode()[X](!1)
            },
            fixed64: function() {
                return W.call(this)[X](!0)
            },
            sfixed64: function() {
                return W.call(this)[X](!1)
            }
        })
    }, reader
}
var reader_buffer, hasRequiredReader_buffer;

function requireReader_buffer() {
    if (hasRequiredReader_buffer) return reader_buffer;
    hasRequiredReader_buffer = 1, reader_buffer = L;
    var O = requireReader();
    (L.prototype = Object.create(O.prototype)).constructor = L;
    var M = requireMinimal$1();

    function L(I) {
        O.call(this, I)
    }
    return L._configure = function() {
        M.Buffer && (L.prototype._slice = M.Buffer.prototype.slice)
    }, L.prototype.string = function() {
        var I = this.uint32();
        return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + I, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + I, this.len))
    }, L._configure(), reader_buffer
}
var rpc = {},
    service, hasRequiredService;

function requireService() {
    if (hasRequiredService) return service;
    hasRequiredService = 1, service = M;
    var O = requireMinimal$1();
    (M.prototype = Object.create(O.EventEmitter.prototype)).constructor = M;

    function M(L, I, N) {
        if (typeof L != "function") throw TypeError("rpcImpl must be a function");
        O.EventEmitter.call(this), this.rpcImpl = L, this.requestDelimited = !!I, this.responseDelimited = !!N
    }
    return M.prototype.rpcCall = function L(I, N, R, _, H) {
        if (!_) throw TypeError("request must be specified");
        var G = this;
        if (!H) return O.asPromise(L, G, I, N, R, _);
        if (!G.rpcImpl) {
            setTimeout(function() {
                H(Error("already ended"))
            }, 0);
            return
        }
        try {
            return G.rpcImpl(I, N[G.requestDelimited ? "encodeDelimited" : "encode"](_).finish(), function(z, W) {
                if (z) return G.emit("error", z, I), H(z);
                if (W === null) {
                    G.end(!0);
                    return
                }
                if (!(W instanceof R)) try {
                    W = R[G.responseDelimited ? "decodeDelimited" : "decode"](W)
                } catch (K) {
                    return G.emit("error", K, I), H(K)
                }
                return G.emit("data", W, I), H(null, W)
            })
        } catch (z) {
            G.emit("error", z, I), setTimeout(function() {
                H(z)
            }, 0);
            return
        }
    }, M.prototype.end = function(L) {
        return this.rpcImpl && (L || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
    }, service
}
var hasRequiredRpc;

function requireRpc() {
    return hasRequiredRpc || (hasRequiredRpc = 1, function(O) {
        var M = O;
        M.Service = requireService()
    }(rpc)), rpc
}
var roots, hasRequiredRoots;

function requireRoots() {
    return hasRequiredRoots || (hasRequiredRoots = 1, roots = {}), roots
}
var hasRequiredIndexMinimal;

function requireIndexMinimal() {
    return hasRequiredIndexMinimal || (hasRequiredIndexMinimal = 1, function(O) {
        var M = O;
        M.build = "minimal", M.Writer = requireWriter(), M.BufferWriter = requireWriter_buffer(), M.Reader = requireReader(), M.BufferReader = requireReader_buffer(), M.util = requireMinimal$1(), M.rpc = requireRpc(), M.roots = requireRoots(), M.configure = L;

        function L() {
            M.util._configure(), M.Writer._configure(M.BufferWriter), M.Reader._configure(M.BufferReader)
        }
        L()
    }(indexMinimal)), indexMinimal
}
var minimal, hasRequiredMinimal;

function requireMinimal() {
    return hasRequiredMinimal || (hasRequiredMinimal = 1, minimal = requireIndexMinimal()), minimal
}
var minimalExports = requireMinimal();
const d$1 = getDefaultExportFromCjs(minimalExports);
d$1.util.Long = Long;
d$1.configure();
var MAX_DIGITS = 1e9,
    defaults = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    },
    Decimal, external = !0,
    decimalError = "[DecimalError] ",
    invalidArgument = decimalError + "Invalid argument: ",
    exponentOutOfRange = decimalError + "Exponent out of range: ",
    mathfloor = Math.floor,
    mathpow = Math.pow,
    isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    ONE, BASE = 1e7,
    LOG_BASE = 7,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE),
    P$1 = {};
P$1.absoluteValue = P$1.abs = function() {
    var O = new this.constructor(this);
    return O.s && (O.s = 1), O
};
P$1.comparedTo = P$1.cmp = function(O) {
    var M, L, I, N, R = this;
    if (O = new R.constructor(O), R.s !== O.s) return R.s || -O.s;
    if (R.e !== O.e) return R.e > O.e ^ R.s < 0 ? 1 : -1;
    for (I = R.d.length, N = O.d.length, M = 0, L = I < N ? I : N; M < L; ++M)
        if (R.d[M] !== O.d[M]) return R.d[M] > O.d[M] ^ R.s < 0 ? 1 : -1;
    return I === N ? 0 : I > N ^ R.s < 0 ? 1 : -1
};
P$1.decimalPlaces = P$1.dp = function() {
    var O = this,
        M = O.d.length - 1,
        L = (M - O.e) * LOG_BASE;
    if (M = O.d[M], M)
        for (; M % 10 == 0; M /= 10) L--;
    return L < 0 ? 0 : L
};
P$1.dividedBy = P$1.div = function(O) {
    return divide(this, new this.constructor(O))
};
P$1.dividedToIntegerBy = P$1.idiv = function(O) {
    var M = this,
        L = M.constructor;
    return round(divide(M, new L(O), 0, 1), L.precision)
};
P$1.equals = P$1.eq = function(O) {
    return !this.cmp(O)
};
P$1.exponent = function() {
    return getBase10Exponent(this)
};
P$1.greaterThan = P$1.gt = function(O) {
    return this.cmp(O) > 0
};
P$1.greaterThanOrEqualTo = P$1.gte = function(O) {
    return this.cmp(O) >= 0
};
P$1.isInteger = P$1.isint = function() {
    return this.e > this.d.length - 2
};
P$1.isNegative = P$1.isneg = function() {
    return this.s < 0
};
P$1.isPositive = P$1.ispos = function() {
    return this.s > 0
};
P$1.isZero = function() {
    return this.s === 0
};
P$1.lessThan = P$1.lt = function(O) {
    return this.cmp(O) < 0
};
P$1.lessThanOrEqualTo = P$1.lte = function(O) {
    return this.cmp(O) < 1
};
P$1.logarithm = P$1.log = function(O) {
    var M, L = this,
        I = L.constructor,
        N = I.precision,
        R = N + 5;
    if (O === void 0) O = new I(10);
    else if (O = new I(O), O.s < 1 || O.eq(ONE)) throw Error(decimalError + "NaN");
    if (L.s < 1) throw Error(decimalError + (L.s ? "NaN" : "-Infinity"));
    return L.eq(ONE) ? new I(0) : (external = !1, M = divide(ln(L, R), ln(O, R), R), external = !0, round(M, N))
};
P$1.minus = P$1.sub = function(O) {
    var M = this;
    return O = new M.constructor(O), M.s == O.s ? subtract(M, O) : add(M, (O.s = -O.s, O))
};
P$1.modulo = P$1.mod = function(O) {
    var M, L = this,
        I = L.constructor,
        N = I.precision;
    if (O = new I(O), !O.s) throw Error(decimalError + "NaN");
    return L.s ? (external = !1, M = divide(L, O, 0, 1).times(O), external = !0, L.minus(M)) : round(new I(L), N)
};
P$1.naturalExponential = P$1.exp = function() {
    return exp(this)
};
P$1.naturalLogarithm = P$1.ln = function() {
    return ln(this)
};
P$1.negated = P$1.neg = function() {
    var O = new this.constructor(this);
    return O.s = -O.s || 0, O
};
P$1.plus = P$1.add = function(O) {
    var M = this;
    return O = new M.constructor(O), M.s == O.s ? add(M, O) : subtract(M, (O.s = -O.s, O))
};
P$1.precision = P$1.sd = function(O) {
    var M, L, I, N = this;
    if (O !== void 0 && O !== !!O && O !== 1 && O !== 0) throw Error(invalidArgument + O);
    if (M = getBase10Exponent(N) + 1, I = N.d.length - 1, L = I * LOG_BASE + 1, I = N.d[I], I) {
        for (; I % 10 == 0; I /= 10) L--;
        for (I = N.d[0]; I >= 10; I /= 10) L++
    }
    return O && M > L ? M : L
};
P$1.squareRoot = P$1.sqrt = function() {
    var O, M, L, I, N, R, _, H = this,
        G = H.constructor;
    if (H.s < 1) {
        if (!H.s) return new G(0);
        throw Error(decimalError + "NaN")
    }
    for (O = getBase10Exponent(H), external = !1, N = Math.sqrt(+H), N == 0 || N == 1 / 0 ? (M = digitsToString(H.d), (M.length + O) % 2 == 0 && (M += "0"), N = Math.sqrt(M), O = mathfloor((O + 1) / 2) - (O < 0 || O % 2), N == 1 / 0 ? M = "5e" + O : (M = N.toExponential(), M = M.slice(0, M.indexOf("e") + 1) + O), I = new G(M)) : I = new G(N.toString()), L = G.precision, N = _ = L + 3;;)
        if (R = I, I = R.plus(divide(H, R, _ + 2)).times(.5), digitsToString(R.d).slice(0, _) === (M = digitsToString(I.d)).slice(0, _)) {
            if (M = M.slice(_ - 3, _ + 1), N == _ && M == "4999") {
                if (round(R, L + 1, 0), R.times(R).eq(H)) {
                    I = R;
                    break
                }
            } else if (M != "9999") break;
            _ += 4
        }
    return external = !0, round(I, L)
};
P$1.times = P$1.mul = function(O) {
    var M, L, I, N, R, _, H, G, z, W = this,
        K = W.constructor,
        X = W.d,
        Y = (O = new K(O)).d;
    if (!W.s || !O.s) return new K(0);
    for (O.s *= W.s, L = W.e + O.e, G = X.length, z = Y.length, G < z && (R = X, X = Y, Y = R, _ = G, G = z, z = _), R = [], _ = G + z, I = _; I--;) R.push(0);
    for (I = z; --I >= 0;) {
        for (M = 0, N = G + I; N > I;) H = R[N] + Y[I] * X[N - I - 1] + M, R[N--] = H % BASE | 0, M = H / BASE | 0;
        R[N] = (R[N] + M) % BASE | 0
    }
    for (; !R[--_];) R.pop();
    return M ? ++L : R.shift(), O.d = R, O.e = L, external ? round(O, K.precision) : O
};
P$1.toDecimalPlaces = P$1.todp = function(O, M) {
    var L = this,
        I = L.constructor;
    return L = new I(L), O === void 0 ? L : (checkInt32(O, 0, MAX_DIGITS), M === void 0 ? M = I.rounding : checkInt32(M, 0, 8), round(L, O + getBase10Exponent(L) + 1, M))
};
P$1.toExponential = function(O, M) {
    var L, I = this,
        N = I.constructor;
    return O === void 0 ? L = toString(I, !0) : (checkInt32(O, 0, MAX_DIGITS), M === void 0 ? M = N.rounding : checkInt32(M, 0, 8), I = round(new N(I), O + 1, M), L = toString(I, !0, O + 1)), L
};
P$1.toFixed = function(O, M) {
    var L, I, N = this,
        R = N.constructor;
    return O === void 0 ? toString(N) : (checkInt32(O, 0, MAX_DIGITS), M === void 0 ? M = R.rounding : checkInt32(M, 0, 8), I = round(new R(N), O + getBase10Exponent(N) + 1, M), L = toString(I.abs(), !1, O + getBase10Exponent(I) + 1), N.isneg() && !N.isZero() ? "-" + L : L)
};
P$1.toInteger = P$1.toint = function() {
    var O = this,
        M = O.constructor;
    return round(new M(O), getBase10Exponent(O) + 1, M.rounding)
};
P$1.toNumber = function() {
    return +this
};
P$1.toPower = P$1.pow = function(O) {
    var M, L, I, N, R, _, H = this,
        G = H.constructor,
        z = 12,
        W = +(O = new G(O));
    if (!O.s) return new G(ONE);
    if (H = new G(H), !H.s) {
        if (O.s < 1) throw Error(decimalError + "Infinity");
        return H
    }
    if (H.eq(ONE)) return H;
    if (I = G.precision, O.eq(ONE)) return round(H, I);
    if (M = O.e, L = O.d.length - 1, _ = M >= L, R = H.s, _) {
        if ((L = W < 0 ? -W : W) <= MAX_SAFE_INTEGER) {
            for (N = new G(ONE), M = Math.ceil(I / LOG_BASE + 4), external = !1; L % 2 && (N = N.times(H), truncate(N.d, M)), L = mathfloor(L / 2), L !== 0;) H = H.times(H), truncate(H.d, M);
            return external = !0, O.s < 0 ? new G(ONE).div(N) : round(N, I)
        }
    } else if (R < 0) throw Error(decimalError + "NaN");
    return R = R < 0 && O.d[Math.max(M, L)] & 1 ? -1 : 1, H.s = 1, external = !1, N = O.times(ln(H, I + z)), external = !0, N = exp(N), N.s = R, N
};
P$1.toPrecision = function(O, M) {
    var L, I, N = this,
        R = N.constructor;
    return O === void 0 ? (L = getBase10Exponent(N), I = toString(N, L <= R.toExpNeg || L >= R.toExpPos)) : (checkInt32(O, 1, MAX_DIGITS), M === void 0 ? M = R.rounding : checkInt32(M, 0, 8), N = round(new R(N), O, M), L = getBase10Exponent(N), I = toString(N, O <= L || L <= R.toExpNeg, O)), I
};
P$1.toSignificantDigits = P$1.tosd = function(O, M) {
    var L = this,
        I = L.constructor;
    return O === void 0 ? (O = I.precision, M = I.rounding) : (checkInt32(O, 1, MAX_DIGITS), M === void 0 ? M = I.rounding : checkInt32(M, 0, 8)), round(new I(L), O, M)
};
P$1.toString = P$1.valueOf = P$1.val = P$1.toJSON = P$1[Symbol.for("nodejs.util.inspect.custom")] = function() {
    var O = this,
        M = getBase10Exponent(O),
        L = O.constructor;
    return toString(O, M <= L.toExpNeg || M >= L.toExpPos)
};

function add(O, M) {
    var L, I, N, R, _, H, G, z, W = O.constructor,
        K = W.precision;
    if (!O.s || !M.s) return M.s || (M = new W(O)), external ? round(M, K) : M;
    if (G = O.d, z = M.d, _ = O.e, N = M.e, G = G.slice(), R = _ - N, R) {
        for (R < 0 ? (I = G, R = -R, H = z.length) : (I = z, N = _, H = G.length), _ = Math.ceil(K / LOG_BASE), H = _ > H ? _ + 1 : H + 1, R > H && (R = H, I.length = 1), I.reverse(); R--;) I.push(0);
        I.reverse()
    }
    for (H = G.length, R = z.length, H - R < 0 && (R = H, I = z, z = G, G = I), L = 0; R;) L = (G[--R] = G[R] + z[R] + L) / BASE | 0, G[R] %= BASE;
    for (L && (G.unshift(L), ++N), H = G.length; G[--H] == 0;) G.pop();
    return M.d = G, M.e = N, external ? round(M, K) : M
}

function checkInt32(O, M, L) {
    if (O !== ~~O || O < M || O > L) throw Error(invalidArgument + O)
}

function digitsToString(O) {
    var M, L, I, N = O.length - 1,
        R = "",
        _ = O[0];
    if (N > 0) {
        for (R += _, M = 1; M < N; M++) I = O[M] + "", L = LOG_BASE - I.length, L && (R += getZeroString(L)), R += I;
        _ = O[M], I = _ + "", L = LOG_BASE - I.length, L && (R += getZeroString(L))
    } else if (_ === 0) return "0";
    for (; _ % 10 === 0;) _ /= 10;
    return R + _
}
var divide = function() {
    function O(I, N) {
        var R, _ = 0,
            H = I.length;
        for (I = I.slice(); H--;) R = I[H] * N + _, I[H] = R % BASE | 0, _ = R / BASE | 0;
        return _ && I.unshift(_), I
    }

    function M(I, N, R, _) {
        var H, G;
        if (R != _) G = R > _ ? 1 : -1;
        else
            for (H = G = 0; H < R; H++)
                if (I[H] != N[H]) {
                    G = I[H] > N[H] ? 1 : -1;
                    break
                } return G
    }

    function L(I, N, R) {
        for (var _ = 0; R--;) I[R] -= _, _ = I[R] < N[R] ? 1 : 0, I[R] = _ * BASE + I[R] - N[R];
        for (; !I[0] && I.length > 1;) I.shift()
    }
    return function(I, N, R, _) {
        var H, G, z, W, K, X, Y, J, Z, Q, ee, te, se, ne, oe, ie, re, ae, he = I.constructor,
            ge = I.s == N.s ? 1 : -1,
            le = I.d,
            ue = N.d;
        if (!I.s) return new he(I);
        if (!N.s) throw Error(decimalError + "Division by zero");
        for (G = I.e - N.e, re = ue.length, oe = le.length, Y = new he(ge), J = Y.d = [], z = 0; ue[z] == (le[z] || 0);) ++z;
        if (ue[z] > (le[z] || 0) && --G, R == null ? te = R = he.precision : _ ? te = R + (getBase10Exponent(I) - getBase10Exponent(N)) + 1 : te = R, te < 0) return new he(0);
        if (te = te / LOG_BASE + 2 | 0, z = 0, re == 1)
            for (W = 0, ue = ue[0], te++;
                (z < oe || W) && te--; z++) se = W * BASE + (le[z] || 0), J[z] = se / ue | 0, W = se % ue | 0;
        else {
            for (W = BASE / (ue[0] + 1) | 0, W > 1 && (ue = O(ue, W), le = O(le, W), re = ue.length, oe = le.length), ne = re, Z = le.slice(0, re), Q = Z.length; Q < re;) Z[Q++] = 0;
            ae = ue.slice(), ae.unshift(0), ie = ue[0], ue[1] >= BASE / 2 && ++ie;
            do W = 0, H = M(ue, Z, re, Q), H < 0 ? (ee = Z[0], re != Q && (ee = ee * BASE + (Z[1] || 0)), W = ee / ie | 0, W > 1 ? (W >= BASE && (W = BASE - 1), K = O(ue, W), X = K.length, Q = Z.length, H = M(K, Z, X, Q), H == 1 && (W--, L(K, re < X ? ae : ue, X))) : (W == 0 && (H = W = 1), K = ue.slice()), X = K.length, X < Q && K.unshift(0), L(Z, K, Q), H == -1 && (Q = Z.length, H = M(ue, Z, re, Q), H < 1 && (W++, L(Z, re < Q ? ae : ue, Q))), Q = Z.length) : H === 0 && (W++, Z = [0]), J[z++] = W, H && Z[0] ? Z[Q++] = le[ne] || 0 : (Z = [le[ne]], Q = 1); while ((ne++ < oe || Z[0] !== void 0) && te--)
        }
        return J[0] || J.shift(), Y.e = G, round(Y, _ ? R + getBase10Exponent(Y) + 1 : R)
    }
}();

function exp(O, M) {
    var L, I, N, R, _, H, G = 0,
        z = 0,
        W = O.constructor,
        K = W.precision;
    if (getBase10Exponent(O) > 16) throw Error(exponentOutOfRange + getBase10Exponent(O));
    if (!O.s) return new W(ONE);
    for (external = !1, H = K, _ = new W(.03125); O.abs().gte(.1);) O = O.times(_), z += 5;
    for (I = Math.log(mathpow(2, z)) / Math.LN10 * 2 + 5 | 0, H += I, L = N = R = new W(ONE), W.precision = H;;) {
        if (N = round(N.times(O), H), L = L.times(++G), _ = R.plus(divide(N, L, H)), digitsToString(_.d).slice(0, H) === digitsToString(R.d).slice(0, H)) {
            for (; z--;) R = round(R.times(R), H);
            return W.precision = K, M == null ? (external = !0, round(R, K)) : R
        }
        R = _
    }
}

function getBase10Exponent(O) {
    for (var M = O.e * LOG_BASE, L = O.d[0]; L >= 10; L /= 10) M++;
    return M
}

function getLn10(O, M, L) {
    if (M > O.LN10.sd()) throw external = !0, L && (O.precision = L), Error(decimalError + "LN10 precision limit exceeded");
    return round(new O(O.LN10), M)
}

function getZeroString(O) {
    for (var M = ""; O--;) M += "0";
    return M
}

function ln(O, M) {
    var L, I, N, R, _, H, G, z, W, K = 1,
        X = 10,
        Y = O,
        J = Y.d,
        Z = Y.constructor,
        Q = Z.precision;
    if (Y.s < 1) throw Error(decimalError + (Y.s ? "NaN" : "-Infinity"));
    if (Y.eq(ONE)) return new Z(0);
    if (M == null ? (external = !1, z = Q) : z = M, Y.eq(10)) return M == null && (external = !0), getLn10(Z, z);
    if (z += X, Z.precision = z, L = digitsToString(J), I = L.charAt(0), R = getBase10Exponent(Y), Math.abs(R) < 15e14) {
        for (; I < 7 && I != 1 || I == 1 && L.charAt(1) > 3;) Y = Y.times(O), L = digitsToString(Y.d), I = L.charAt(0), K++;
        R = getBase10Exponent(Y), I > 1 ? (Y = new Z("0." + L), R++) : Y = new Z(I + "." + L.slice(1))
    } else return G = getLn10(Z, z + 2, Q).times(R + ""), Y = ln(new Z(I + "." + L.slice(1)), z - X).plus(G), Z.precision = Q, M == null ? (external = !0, round(Y, Q)) : Y;
    for (H = _ = Y = divide(Y.minus(ONE), Y.plus(ONE), z), W = round(Y.times(Y), z), N = 3;;) {
        if (_ = round(_.times(W), z), G = H.plus(divide(_, new Z(N), z)), digitsToString(G.d).slice(0, z) === digitsToString(H.d).slice(0, z)) return H = H.times(2), R !== 0 && (H = H.plus(getLn10(Z, z + 2, Q).times(R + ""))), H = divide(H, new Z(K), z), Z.precision = Q, M == null ? (external = !0, round(H, Q)) : H;
        H = G, N += 2
    }
}

function parseDecimal(O, M) {
    var L, I, N;
    for ((L = M.indexOf(".")) > -1 && (M = M.replace(".", "")), (I = M.search(/e/i)) > 0 ? (L < 0 && (L = I), L += +M.slice(I + 1), M = M.substring(0, I)) : L < 0 && (L = M.length), I = 0; M.charCodeAt(I) === 48;) ++I;
    for (N = M.length; M.charCodeAt(N - 1) === 48;) --N;
    if (M = M.slice(I, N), M) {
        if (N -= I, L = L - I - 1, O.e = mathfloor(L / LOG_BASE), O.d = [], I = (L + 1) % LOG_BASE, L < 0 && (I += LOG_BASE), I < N) {
            for (I && O.d.push(+M.slice(0, I)), N -= LOG_BASE; I < N;) O.d.push(+M.slice(I, I += LOG_BASE));
            M = M.slice(I), I = LOG_BASE - M.length
        } else I -= N;
        for (; I--;) M += "0";
        if (O.d.push(+M), external && (O.e > MAX_E || O.e < -MAX_E)) throw Error(exponentOutOfRange + L)
    } else O.s = 0, O.e = 0, O.d = [0];
    return O
}

function round(O, M, L) {
    var I, N, R, _, H, G, z, W, K = O.d;
    for (_ = 1, R = K[0]; R >= 10; R /= 10) _++;
    if (I = M - _, I < 0) I += LOG_BASE, N = M, z = K[W = 0];
    else {
        if (W = Math.ceil((I + 1) / LOG_BASE), R = K.length, W >= R) return O;
        for (z = R = K[W], _ = 1; R >= 10; R /= 10) _++;
        I %= LOG_BASE, N = I - LOG_BASE + _
    }
    if (L !== void 0 && (R = mathpow(10, _ - N - 1), H = z / R % 10 | 0, G = M < 0 || K[W + 1] !== void 0 || z % R, G = L < 4 ? (H || G) && (L == 0 || L == (O.s < 0 ? 3 : 2)) : H > 5 || H == 5 && (L == 4 || G || L == 6 && (I > 0 ? N > 0 ? z / mathpow(10, _ - N) : 0 : K[W - 1]) % 10 & 1 || L == (O.s < 0 ? 8 : 7))), M < 1 || !K[0]) return G ? (R = getBase10Exponent(O), K.length = 1, M = M - R - 1, K[0] = mathpow(10, (LOG_BASE - M % LOG_BASE) % LOG_BASE), O.e = mathfloor(-M / LOG_BASE) || 0) : (K.length = 1, K[0] = O.e = O.s = 0), O;
    if (I == 0 ? (K.length = W, R = 1, W--) : (K.length = W + 1, R = mathpow(10, LOG_BASE - I), K[W] = N > 0 ? (z / mathpow(10, _ - N) % mathpow(10, N) | 0) * R : 0), G)
        for (;;)
            if (W == 0) {
                (K[0] += R) == BASE && (K[0] = 1, ++O.e);
                break
            } else {
                if (K[W] += R, K[W] != BASE) break;
                K[W--] = 0, R = 1
            }
    for (I = K.length; K[--I] === 0;) K.pop();
    if (external && (O.e > MAX_E || O.e < -MAX_E)) throw Error(exponentOutOfRange + getBase10Exponent(O));
    return O
}

function subtract(O, M) {
    var L, I, N, R, _, H, G, z, W, K, X = O.constructor,
        Y = X.precision;
    if (!O.s || !M.s) return M.s ? M.s = -M.s : M = new X(O), external ? round(M, Y) : M;
    if (G = O.d, K = M.d, I = M.e, z = O.e, G = G.slice(), _ = z - I, _) {
        for (W = _ < 0, W ? (L = G, _ = -_, H = K.length) : (L = K, I = z, H = G.length), N = Math.max(Math.ceil(Y / LOG_BASE), H) + 2, _ > N && (_ = N, L.length = 1), L.reverse(), N = _; N--;) L.push(0);
        L.reverse()
    } else {
        for (N = G.length, H = K.length, W = N < H, W && (H = N), N = 0; N < H; N++)
            if (G[N] != K[N]) {
                W = G[N] < K[N];
                break
            }
        _ = 0
    }
    for (W && (L = G, G = K, K = L, M.s = -M.s), H = G.length, N = K.length - H; N > 0; --N) G[H++] = 0;
    for (N = K.length; N > _;) {
        if (G[--N] < K[N]) {
            for (R = N; R && G[--R] === 0;) G[R] = BASE - 1;
            --G[R], G[N] += BASE
        }
        G[N] -= K[N]
    }
    for (; G[--H] === 0;) G.pop();
    for (; G[0] === 0; G.shift()) --I;
    return G[0] ? (M.d = G, M.e = I, external ? round(M, Y) : M) : new X(0)
}

function toString(O, M, L) {
    var I, N = getBase10Exponent(O),
        R = digitsToString(O.d),
        _ = R.length;
    return M ? (L && (I = L - _) > 0 ? R = R.charAt(0) + "." + R.slice(1) + getZeroString(I) : _ > 1 && (R = R.charAt(0) + "." + R.slice(1)), R = R + (N < 0 ? "e" : "e+") + N) : N < 0 ? (R = "0." + getZeroString(-N - 1) + R, L && (I = L - _) > 0 && (R += getZeroString(I))) : N >= _ ? (R += getZeroString(N + 1 - _), L && (I = L - N - 1) > 0 && (R = R + "." + getZeroString(I))) : ((I = N + 1) < _ && (R = R.slice(0, I) + "." + R.slice(I)), L && (I = L - _) > 0 && (N + 1 === _ && (R += "."), R += getZeroString(I))), O.s < 0 ? "-" + R : R
}

function truncate(O, M) {
    if (O.length > M) return O.length = M, !0
}

function clone(O) {
    var M, L, I;

    function N(R) {
        var _ = this;
        if (!(_ instanceof N)) return new N(R);
        if (_.constructor = N, R instanceof N) {
            _.s = R.s, _.e = R.e, _.d = (R = R.d) ? R.slice() : R;
            return
        }
        if (typeof R == "number") {
            if (R * 0 !== 0) throw Error(invalidArgument + R);
            if (R > 0) _.s = 1;
            else if (R < 0) R = -R, _.s = -1;
            else {
                _.s = 0, _.e = 0, _.d = [0];
                return
            }
            if (R === ~~R && R < 1e7) {
                _.e = 0, _.d = [R];
                return
            }
            return parseDecimal(_, R.toString())
        } else if (typeof R != "string") throw Error(invalidArgument + R);
        if (R.charCodeAt(0) === 45 ? (R = R.slice(1), _.s = -1) : _.s = 1, isDecimal.test(R)) parseDecimal(_, R);
        else throw Error(invalidArgument + R)
    }
    if (N.prototype = P$1, N.ROUND_UP = 0, N.ROUND_DOWN = 1, N.ROUND_CEIL = 2, N.ROUND_FLOOR = 3, N.ROUND_HALF_UP = 4, N.ROUND_HALF_DOWN = 5, N.ROUND_HALF_EVEN = 6, N.ROUND_HALF_CEIL = 7, N.ROUND_HALF_FLOOR = 8, N.clone = clone, N.config = N.set = config$1, O === void 0 && (O = {}), O)
        for (I = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], M = 0; M < I.length;) O.hasOwnProperty(L = I[M++]) || (O[L] = this[L]);
    return N.config(O), N
}

function config$1(O) {
    if (!O || typeof O != "object") throw Error(decimalError + "Object expected");
    var M, L, I, N = ["precision", 1, MAX_DIGITS, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
    for (M = 0; M < N.length; M += 3)
        if ((I = O[L = N[M]]) !== void 0)
            if (mathfloor(I) === I && I >= N[M + 1] && I <= N[M + 2]) this[L] = I;
            else throw Error(invalidArgument + L + ": " + I);
    if ((I = O[L = "LN10"]) !== void 0)
        if (I == Math.LN10) this[L] = new this(I);
        else throw Error(invalidArgument + L + ": " + I);
    return this
}
var Decimal = clone(defaults);
ONE = new Decimal(1);
const Decimal$1 = Decimal;

function cx(...O) {
    return O.filter(Boolean).join(" ")
}
const debounce$1 = (O, M) => {
        let L;
        const I = () => clearTimeout(L);
        return getOwner() && onCleanup(I), Object.assign((...N) => {
            L !== void 0 && I(), L = setTimeout(() => O(...N), M)
        }, {
            clear: I
        })
    },
    throttle = (O, M) => {
        let L = !1,
            I, N;
        const R = (...H) => {
                N = H, !L && (L = !0, I = setTimeout(() => {
                    O(...N), L = !1
                }, M))
            },
            _ = () => {
                clearTimeout(I), L = !1
            };
        return getOwner() && onCleanup(_), Object.assign(R, {
            clear: _
        })
    };

function leading(O, M, L) {
    let I = !1;
    const N = O(() => I = !1, L),
        R = (...H) => {
            I || M(...H), I = !0, N()
        },
        _ = () => {
            I = !1, N.clear()
        };
    return getOwner() && onCleanup(_), Object.assign(R, {
        clear: _
    })
}

function leadingAndTrailing(O, M, L) {
    let I;
    (function(G) {
        G[G.Ready = 0] = "Ready", G[G.Leading = 1] = "Leading", G[G.Trailing = 2] = "Trailing"
    })(I || (I = {}));
    let N = I.Ready;
    const R = O(G => {
            N === I.Trailing && M(...G), N = I.Ready
        }, L),
        _ = (...G) => {
            N !== I.Trailing && (N === I.Ready && M(...G), N += 1), R(G)
        },
        H = () => {
            N = I.Ready, R.clear()
        };
    return getOwner() && onCleanup(H), Object.assign(_, {
        clear: H
    })
}

function createScheduled(O) {
    let M = 0,
        L = !1;
    const [I, N] = createSignal(void 0, {
        equals: !1
    }), R = O(() => {
        L = !0, N()
    });
    return () => (L || (R(), I()), L ? (L = !!M, !0) : (getListener() && (M++, onCleanup(() => M--)), !1))
}
const DESIGN_WIDTH = 430,
    MAX_DESIGN_WIDTH = 640,
    MOBILE_BREAKPOINT = 700,
    [env, setEnv] = createRoot(() => {
        function O() {
            const N = document.documentElement.clientWidth,
                R = N < MAX_DESIGN_WIDTH ? N : DESIGN_WIDTH;
            return {
                clientWidth: N,
                remScale: R / DESIGN_WIDTH
            }
        }
        const M = [document.documentElement.clientWidth, document.documentElement.clientHeight],
            [L, I] = createStore({
                DESIGN_WIDTH,
                MAX_DESIGN_WIDTH,
                timeDiff: 0,
                freeCoin: "FREECOIN",
                platformCoin: "PLATFORMCOIN",
                bcl: "BCL",
                ...O(),
                siteName: "SITENAME",
                host: "HOST",
                licenseHost: "HOST",
                mascot: "MASCOT",
                isLowEndDevice: !1,
                initSearchParams: new URLSearchParams(location.search),
                initHashParams: location.hash,
                langs: {},
                mobile: M[0] < window.screen.width / 2 && M[0] < MOBILE_BREAKPOINT || M.every(N => N <= 1e3) && M.some(N => N <= MOBILE_BREAKPOINT),
                localCurrencyConfig: [],
                get serverTime() {
                    return new Date(Date.now() - L.timeDiff)
                },
                inActive: !1,
                appName: "BC.GAME",
                isPWA: !1,
                isAPP: !1
            });
        return globalThis.addEventListener("resize", throttle(() => I(O()), 100)), [L, I]
    }),
    swipeArea = Math.ceil(innerWidth * .07),
    isBot = navigator.webdriver,
    shouldReduceAnimation = () => env.isLowEndDevice,
    isSupportTouch = Object.prototype.hasOwnProperty.call(window, "ontouchstart");

function isColliding(O, M) {
    return {
        x: O.x < M.x + M.width && O.x + O.width > M.x,
        y: O.y < M.y + M.height && O.y + O.height > M.y
    }
}
const easeBack = [.36, .66, .04, 1];

function isIos() {
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
}

function isAndroid() {
    return /android/i.test(navigator.userAgent)
}
const delay$1 = (O = 0) => new Promise(M => setTimeout(M, O)),
    loadScript = memo$1((O, M, L) => new Promise((I, N) => {
        const R = document.head || document.getElementsByTagName("head")[0],
            _ = document.createElement("script");
        _.async = !0, _.src = O, L && (_.id = L), _.charset = "utf8", R.appendChild(_), _.onload = () => {
            const H = M ? window[M] : null;
            R.removeChild(_), I(H)
        }, _.onerror = () => {
            R.removeChild(_), loadScript.cache.delete(`${O}:${M}`), N(new Error(`Load Script Error: ${O}`))
        }
    })),
    safeInvokeHandlerUnion = (O, M) => !O || !M ? void 0 : (L => Array.isArray(L) && L.length === 2)(O) ? O[0](O[1], M) : O ? .(M);

function composeEventHandlers(O) {
    return M => {
        for (const L of O) safeInvokeHandlerUnion(L, M)
    }
}
const defineComposition = (O, M) => {
    const L = R => {
            const _ = Object.entries(M).map(([H, G]) => [H, I(G, R[H])]);
            return Object.fromEntries(_)
        },
        I = (R, _) => !_ || !_.class ? R : H => createComponent(R, mergeProps(H, {
            get class() {
                return cx(_.class, H.class)
            }
        })),
        N = R => {
            const _ = L(R),
                H = I(O, R.Root);
            return Object.assign(H, _, {
                registerStyles: N
            })
        };
    return Object.assign(O, M, {
        registerStyles: N
    })
};
let globalInput;

function copyToClipboard(O) {
    navigator.clipboard ? navigator.clipboard.writeText(O).then(() => {}).catch(M => {
        fallbackCopy(O)
    }) : fallbackCopy(O)
}

function fallbackCopy(O) {
    globalInput || (globalInput = document.createElement("input"), document.body.appendChild(globalInput), globalInput.style.opacity = "0", globalInput.setAttribute("readonly", "readonly"), globalInput.setSelectionRange(0, 99999)), globalInput.setAttribute("value", O), globalInput.select(), document.execCommand("copy")
}
const prefixes = [
    ["B", 9],
    ["M", 6],
    ["K", 3],
    ["", 1],
    ["m", -3],
    ["μ", -6],
    ["n", -9]
];

function getExponential(O, M = 6) {
    const L = O.toExponential(M),
        [, I] = L.split("e").map(Number);
    if (I > M) {
        const N = Math.max(3 - Math.ceil((I - M) / 3), 0),
            [R, _] = prefixes[N];
        return {
            num: _ === 1 ? O : O * 10 ** -_,
            exp: _,
            unit: R
        }
    } else return {
        num: O,
        exp: 1,
        unit: ""
    }
}

function formatBalance(O, M = 7) {
    const {
        num: L,
        exp: I,
        unit: N
    } = getExponential(O.toNumber(), M);
    let R = "";
    return I > 1 ? R = new Decimal$1(L).toFixed(2, Decimal$1.ROUND_DOWN) + N : L < 1 ? R = clearFloatZero(new Decimal$1(L).toFixed(M, Decimal$1.ROUND_DOWN)) : R = clearFloatZero(new Decimal$1(L).toPrecision(M + 1, Decimal$1.ROUND_DOWN)), R
}

function clearFloatZero(O) {
    return O.includes(".") ? O.replace(/\.?0+$|\.$/, "") : O
}

function shallow(O, M) {
    const L = Object.keys(O),
        I = Object.keys(M);
    return L.length !== I.length ? !1 : L.every(N => Object.prototype.hasOwnProperty.call(M, N) && O[N] === M[N])
}

function _getHostType(O) {
    const M = ["bc.me", "bc.ai", "bcga.me"],
        L = ["bcgame.ke"],
        I = ["bc.xyz"],
        N = ["bcgame.sk"],
        R = ["bcgame.us", "bcgame-us-mirror1.com"],
        _ = ["bcbet.ng"],
        H = ["bcigra.com", "bcfeast88.com", "bcwildwagers.com"],
        G = ["87.com"],
        z = ["bcgamebet.ng"],
        W = ["bcgame.vc"],
        K = ["bcsports.game", "dogcrash.xyz"],
        X = ["bckm.top"],
        Y = ["bcgame.ke", "bcbet.ng"],
        J = ["bzjogos.com", "cocoforyou.top", "bcsports.game"],
        Z = ["bcgame.mx"],
        Q = ["jb.com"];
    return {
        isBrHost: M.includes(O),
        isKenyaHost: L.includes(O),
        isSpreadHost: I.includes(O),
        isUsHost: R.includes(O),
        isSkHost: N.includes(O),
        isNgHost: _.includes(O),
        isRuHosts: H.includes(O),
        isSpHost: G.includes(O),
        isNg2Host: z.includes(O),
        isIdHost: W.includes(O),
        isAnjouanHost: X.includes(O),
        isBrAuditHost: K.includes(O),
        isSportsHost: Y.includes(O),
        isBzHost: J.includes(O),
        isMxHost: Z.includes(O),
        isJbHost: Q.includes(O)
    }
}
const getHostType = memo$1(_getHostType);

function _getAreaAndLang(O, M) {
    const L = ["zh-TW", "zh-CN", "ta", "id", "ms", "my", "tl", "th", "vi"],
        I = ["ID", "MY", "MM", "PH", "TH", "VN", "BN", "TL", "LA", "SG"],
        N = ["ta", "te", "hi", "en-IN"],
        R = O === "ja",
        _ = M === "JP",
        H = O === "ko",
        G = M === "KR",
        z = N.includes(O),
        W = M === "IN",
        K = L.includes(O),
        X = I.includes(M);
    return {
        isJapanLang: R,
        isJapanIP: _,
        isKoreaLang: H,
        isKoreaIP: G,
        isIndiaLang: z,
        isIndiaIP: W,
        isSoutheastAsiaLang: K,
        isSoutheastAsiaIP: X,
        isJp: R || _,
        isKr: H || G,
        isIn: z || W,
        isSoutheast: K || X
    }
}
const getAreaAndLang = memo$1(_getAreaAndLang);

function disableChangeFiatFlag() {
    const {
        isNgHost: O,
        isNg2Host: M,
        isIdHost: L,
        isKenyaHost: I,
        isBrAuditHost: N,
        isBrHost: R,
        isUsHost: _,
        isMxHost: H
    } = getHostType(env.host);
    return O || M || L || I || N || R || _ || H
}

function replaceHostName(O, M) {
    if (!O) return "";
    let L = O;
    const {
        isSpHost: I,
        isBzHost: N
    } = getHostType(M);
    return M.includes("bcsports.game") ? (L = L.replace(/BC/gi, "BZ"), L = L.replace(/BC.GAME/gi, "bcsports.game"), L) : (I && (L = L.replace(/BC/gi, "87"), L = L.replace(/BC.GAME/gi, "87.com")), N && (L = L.replace(/BC/gi, "BZ"), L = L.replace(/BC.GAME/gi, "bzjogos.com")), L)
}

function replaceHost(O) {
    return !O || O === "" ? O : O.replace(/bc.game/gi, env.licenseHost.toUpperCase()).replace(/BC/g, env.siteName)
}
const rootScrollElement = document.scrollingElement || document.documentElement || document.body;

function getScrollbarWidth() {
    const O = document.createElement("div");
    O.style.visibility = "hidden", O.style.overflow = "scroll", O.style.width = "100px", O.style.height = "100px", document.body.appendChild(O);
    const M = O.offsetWidth - O.clientWidth;
    return document.body.removeChild(O), M
}

function createFunctionQueue(O, M = 200) {
    const L = [];
    let I = !1,
        N = 0;

    function R() {
        if (I) return;
        I = !0;

        function _() {
            const H = L.shift();
            if (H) {
                const G = Date.now(),
                    z = Math.max(0, M + N - G);
                setTimeout(() => {
                    H(), N = Date.now(), _()
                }, z)
            } else {
                I = !1;
                return
            }
        }
        _()
    }
    return (..._) => {
        L.push(() => O(..._)), R()
    }
}

function murmurHash(O, M = 0) {
    let L, I, N, R;
    const _ = O.length & 3,
        H = O.length - _;
    L = M;
    const G = 3432918353,
        z = 461845907;
    for (R = 0; R < H;) N = O.charCodeAt(R) & 255 | (O.charCodeAt(++R) & 255) << 8 | (O.charCodeAt(++R) & 255) << 16 | (O.charCodeAt(++R) & 255) << 24, ++R, N = (N & 65535) * G + (((N >>> 16) * G & 65535) << 16) & 4294967295, N = N << 15 | N >>> 17, N = (N & 65535) * z + (((N >>> 16) * z & 65535) << 16) & 4294967295, L ^= N, L = L << 13 | L >>> 19, I = (L & 65535) * 5 + (((L >>> 16) * 5 & 65535) << 16) & 4294967295, L = (I & 65535) + 27492 + (((I >>> 16) + 58964 & 65535) << 16);
    switch (N = 0, _) {
        case 3:
            N ^= (O.charCodeAt(R + 2) & 255) << 16;
        case 2:
            N ^= (O.charCodeAt(R + 1) & 255) << 8;
        case 1:
            N ^= O.charCodeAt(R) & 255, N = (N & 65535) * G + (((N >>> 16) * G & 65535) << 16) & 4294967295, N = N << 15 | N >>> 17, N = (N & 65535) * z + (((N >>> 16) * z & 65535) << 16) & 4294967295, L ^= N
    }
    return L ^= O.length, L ^= L >>> 16, L = (L & 65535) * 2246822507 + (((L >>> 16) * 2246822507 & 65535) << 16) & 4294967295, L ^= L >>> 13, L = (L & 65535) * 3266489909 + (((L >>> 16) * 3266489909 & 65535) << 16) & 4294967295, L ^= L >>> 16, L >>> 0
}

function memo$1(O) {
    const M = new Map,
        L = function(...I) {
            const N = I.toString();
            if (M.has(N)) return M.get(N);
            const R = O(...I);
            return M.set(N, R), R
        };
    return L.cache = M, L
}

function sortedIndexBy(O, M, L) {
    let I = 0,
        N = O.length;
    const R = L(M);
    for (; I < N;) {
        const _ = Math.floor((I + N) / 2);
        L(O[_]) < R ? I = _ + 1 : N = _
    }
    return I
}
const utils = Object.freeze(Object.defineProperty({
    __proto__: null,
    _getAreaAndLang,
    clearFloatZero,
    composeEventHandlers,
    copyToClipboard,
    createFunctionQueue,
    defineComposition,
    delay: delay$1,
    disableChangeFiatFlag,
    easeBack,
    formatBalance,
    getAreaAndLang,
    getExponential,
    getHostType,
    getScrollbarWidth,
    isAndroid,
    isBot,
    isColliding,
    isIos,
    isSupportTouch,
    loadScript,
    memo: memo$1,
    murmurHash,
    replaceHost,
    replaceHostName,
    rootScrollElement,
    safeInvokeHandlerUnion,
    shallow,
    shouldReduceAnimation,
    sortedIndexBy,
    swipeArea
}, Symbol.toStringTag, {
    value: "Module"
}));
var eventemitter3 = {
        exports: {}
    },
    hasRequiredEventemitter3;

function requireEventemitter3() {
    return hasRequiredEventemitter3 || (hasRequiredEventemitter3 = 1, function(O) {
        var M = Object.prototype.hasOwnProperty,
            L = "~";

        function I() {}
        Object.create && (I.prototype = Object.create(null), new I().__proto__ || (L = !1));

        function N(G, z, W) {
            this.fn = G, this.context = z, this.once = W || !1
        }

        function R(G, z, W, K, X) {
            if (typeof W != "function") throw new TypeError("The listener must be a function");
            var Y = new N(W, K || G, X),
                J = L ? L + z : z;
            return G._events[J] ? G._events[J].fn ? G._events[J] = [G._events[J], Y] : G._events[J].push(Y) : (G._events[J] = Y, G._eventsCount++), G
        }

        function _(G, z) {
            --G._eventsCount === 0 ? G._events = new I : delete G._events[z]
        }

        function H() {
            this._events = new I, this._eventsCount = 0
        }
        H.prototype.eventNames = function() {
            var G = [],
                z, W;
            if (this._eventsCount === 0) return G;
            for (W in z = this._events) M.call(z, W) && G.push(L ? W.slice(1) : W);
            return Object.getOwnPropertySymbols ? G.concat(Object.getOwnPropertySymbols(z)) : G
        }, H.prototype.listeners = function(G) {
            var z = L ? L + G : G,
                W = this._events[z];
            if (!W) return [];
            if (W.fn) return [W.fn];
            for (var K = 0, X = W.length, Y = new Array(X); K < X; K++) Y[K] = W[K].fn;
            return Y
        }, H.prototype.listenerCount = function(G) {
            var z = L ? L + G : G,
                W = this._events[z];
            return W ? W.fn ? 1 : W.length : 0
        }, H.prototype.emit = function(G, z, W, K, X, Y) {
            var J = L ? L + G : G;
            if (!this._events[J]) return !1;
            var Z = this._events[J],
                Q = arguments.length,
                ee, te;
            if (Z.fn) {
                switch (Z.once && this.removeListener(G, Z.fn, void 0, !0), Q) {
                    case 1:
                        return Z.fn.call(Z.context), !0;
                    case 2:
                        return Z.fn.call(Z.context, z), !0;
                    case 3:
                        return Z.fn.call(Z.context, z, W), !0;
                    case 4:
                        return Z.fn.call(Z.context, z, W, K), !0;
                    case 5:
                        return Z.fn.call(Z.context, z, W, K, X), !0;
                    case 6:
                        return Z.fn.call(Z.context, z, W, K, X, Y), !0
                }
                for (te = 1, ee = new Array(Q - 1); te < Q; te++) ee[te - 1] = arguments[te];
                Z.fn.apply(Z.context, ee)
            } else {
                var se = Z.length,
                    ne;
                for (te = 0; te < se; te++) switch (Z[te].once && this.removeListener(G, Z[te].fn, void 0, !0), Q) {
                    case 1:
                        Z[te].fn.call(Z[te].context);
                        break;
                    case 2:
                        Z[te].fn.call(Z[te].context, z);
                        break;
                    case 3:
                        Z[te].fn.call(Z[te].context, z, W);
                        break;
                    case 4:
                        Z[te].fn.call(Z[te].context, z, W, K);
                        break;
                    default:
                        if (!ee)
                            for (ne = 1, ee = new Array(Q - 1); ne < Q; ne++) ee[ne - 1] = arguments[ne];
                        Z[te].fn.apply(Z[te].context, ee)
                }
            }
            return !0
        }, H.prototype.on = function(G, z, W) {
            return R(this, G, z, W, !1)
        }, H.prototype.once = function(G, z, W) {
            return R(this, G, z, W, !0)
        }, H.prototype.removeListener = function(G, z, W, K) {
            var X = L ? L + G : G;
            if (!this._events[X]) return this;
            if (!z) return _(this, X), this;
            var Y = this._events[X];
            if (Y.fn) Y.fn === z && (!K || Y.once) && (!W || Y.context === W) && _(this, X);
            else {
                for (var J = 0, Z = [], Q = Y.length; J < Q; J++)(Y[J].fn !== z || K && !Y[J].once || W && Y[J].context !== W) && Z.push(Y[J]);
                Z.length ? this._events[X] = Z.length === 1 ? Z[0] : Z : _(this, X)
            }
            return this
        }, H.prototype.removeAllListeners = function(G) {
            var z;
            return G ? (z = L ? L + G : G, this._events[z] && _(this, z)) : (this._events = new I, this._eventsCount = 0), this
        }, H.prototype.off = H.prototype.removeListener, H.prototype.addListener = H.prototype.on, H.prefixed = L, H.EventEmitter = H, O.exports = H
    }(eventemitter3)), eventemitter3.exports
}
var eventemitter3Exports = requireEventemitter3();
const A$1 = getDefaultExportFromCjs(eventemitter3Exports);
class TimeoutError extends Error {
    constructor(M) {
        super(M), this.name = "TimeoutError"
    }
}
class AbortError extends Error {
    constructor(M) {
        super(), this.name = "AbortError", this.message = M
    }
}
const getDOMException = O => globalThis.DOMException === void 0 ? new AbortError(O) : new DOMException(O),
    getAbortedReason = O => {
        const M = O.reason === void 0 ? getDOMException("This operation was aborted.") : O.reason;
        return M instanceof Error ? M : getDOMException(M)
    };

function pTimeout(O, M) {
    const {
        milliseconds: L,
        fallback: I,
        message: N,
        customTimers: R = {
            setTimeout,
            clearTimeout
        }
    } = M;
    let _, H;
    const G = new Promise((z, W) => {
        if (typeof L != "number" || Math.sign(L) !== 1) throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${L}\``);
        if (M.signal) {
            const {
                signal: X
            } = M;
            X.aborted && W(getAbortedReason(X)), H = () => {
                W(getAbortedReason(X))
            }, X.addEventListener("abort", H, {
                once: !0
            })
        }
        if (L === Number.POSITIVE_INFINITY) {
            O.then(z, W);
            return
        }
        const K = new TimeoutError;
        _ = R.setTimeout.call(void 0, () => {
            if (I) {
                try {
                    z(I())
                } catch (X) {
                    W(X)
                }
                return
            }
            typeof O.cancel == "function" && O.cancel(), N === !1 ? z() : N instanceof Error ? W(N) : (K.message = N ? ? `Promise timed out after ${L} milliseconds`, W(K))
        }, L), (async () => {
            try {
                z(await O)
            } catch (X) {
                W(X)
            }
        })()
    }).finally(() => {
        G.clear(), H && M.signal && M.signal.removeEventListener("abort", H)
    });
    return G.clear = () => {
        R.clearTimeout.call(void 0, _), _ = void 0
    }, G
}

function lowerBound(O, M, L) {
    let I = 0,
        N = O.length;
    for (; N > 0;) {
        const R = Math.trunc(N / 2);
        let _ = I + R;
        L(O[_], M) <= 0 ? (I = ++_, N -= R + 1) : N = R
    }
    return I
}
var Ie;
class PriorityQueue {
    constructor() {
        ke(this, Ie, [])
    }
    enqueue(M, L) {
        L = {
            priority: 0,
            ...L
        };
        const I = {
            priority: L.priority,
            id: L.id,
            run: M
        };
        if (this.size === 0 || me(this, Ie)[this.size - 1].priority >= L.priority) {
            me(this, Ie).push(I);
            return
        }
        const N = lowerBound(me(this, Ie), I, (R, _) => _.priority - R.priority);
        me(this, Ie).splice(N, 0, I)
    }
    setPriority(M, L) {
        const I = me(this, Ie).findIndex(R => R.id === M);
        if (I === -1) throw new ReferenceError(`No promise function with the id "${M}" exists in the queue.`);
        const [N] = me(this, Ie).splice(I, 1);
        this.enqueue(N.run, {
            priority: L,
            id: M
        })
    }
    dequeue() {
        const M = me(this, Ie).shift();
        return M ? .run
    }
    filter(M) {
        return me(this, Ie).filter(L => L.priority === M.priority).map(L => L.run)
    }
    get size() {
        return me(this, Ie).length
    }
}
Ie = new WeakMap;
var Fe, He, Ne, Ke, ze, Xe, Be, Ue, Pe, Ye, Me, We, je, Ze, rt, Ce, ht, pt, gt, mt, bt, et, it, st, tt, vt, nt;
class PQueue extends A$1 {
    constructor(M) {
        var L, I;
        if (super(), ke(this, Ce), ke(this, Fe), ke(this, He), ke(this, Ne, 0), ke(this, Ke), ke(this, ze), ke(this, Xe, 0), ke(this, Be), ke(this, Ue), ke(this, Pe), ke(this, Ye), ke(this, Me, 0), ke(this, We), ke(this, je), ke(this, Ze), ke(this, rt, 1 n), we(this, "timeout"), M = {
                carryoverConcurrencyCount: !1,
                intervalCap: Number.POSITIVE_INFINITY,
                interval: 0,
                concurrency: Number.POSITIVE_INFINITY,
                autoStart: !0,
                queueClass: PriorityQueue,
                ...M
            }, !(typeof M.intervalCap == "number" && M.intervalCap >= 1)) throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${((L=M.intervalCap)==null?void 0:L.toString())??""}\` (${typeof M.intervalCap})`);
        if (M.interval === void 0 || !(Number.isFinite(M.interval) && M.interval >= 0)) throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${((I=M.interval)==null?void 0:I.toString())??""}\` (${typeof M.interval})`);
        $e(this, Fe, M.carryoverConcurrencyCount), $e(this, He, M.intervalCap === Number.POSITIVE_INFINITY || M.interval === 0), $e(this, Ke, M.intervalCap), $e(this, ze, M.interval), $e(this, Pe, new M.queueClass), $e(this, Ye, M.queueClass), this.concurrency = M.concurrency, this.timeout = M.timeout, $e(this, Ze, M.throwOnTimeout === !0), $e(this, je, M.autoStart === !1)
    }
    get concurrency() {
        return me(this, We)
    }
    set concurrency(M) {
        if (!(typeof M == "number" && M >= 1)) throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${M}\` (${typeof M})`);
        $e(this, We, M), Re(this, Ce, tt).call(this)
    }
    setPriority(M, L) {
        me(this, Pe).setPriority(M, L)
    }
    async add(M, L = {}) {
        return L.id ? ? (L.id = (Ge(this, rt)._++).toString()), L = {
            timeout: this.timeout,
            throwOnTimeout: me(this, Ze),
            ...L
        }, new Promise((I, N) => {
            me(this, Pe).enqueue(async () => {
                var R;
                Ge(this, Me)._++, Ge(this, Ne)._++;
                try {
                    (R = L.signal) == null || R.throwIfAborted();
                    let _ = M({
                        signal: L.signal
                    });
                    L.timeout && (_ = pTimeout(Promise.resolve(_), {
                        milliseconds: L.timeout
                    })), L.signal && (_ = Promise.race([_, Re(this, Ce, vt).call(this, L.signal)]));
                    const H = await _;
                    I(H), this.emit("completed", H)
                } catch (_) {
                    if (_ instanceof TimeoutError && !L.throwOnTimeout) {
                        I();
                        return
                    }
                    N(_), this.emit("error", _)
                } finally {
                    Re(this, Ce, gt).call(this)
                }
            }, L), this.emit("add"), Re(this, Ce, et).call(this)
        })
    }
    async addAll(M, L) {
        return Promise.all(M.map(async I => this.add(I, L)))
    }
    start() {
        return me(this, je) ? ($e(this, je, !1), Re(this, Ce, tt).call(this), this) : this
    }
    pause() {
        $e(this, je, !0)
    }
    clear() {
        $e(this, Pe, new(me(this, Ye)))
    }
    async onEmpty() {
        me(this, Pe).size !== 0 && await Re(this, Ce, nt).call(this, "empty")
    }
    async onSizeLessThan(M) {
        me(this, Pe).size < M || await Re(this, Ce, nt).call(this, "next", () => me(this, Pe).size < M)
    }
    async onIdle() {
        me(this, Me) === 0 && me(this, Pe).size === 0 || await Re(this, Ce, nt).call(this, "idle")
    }
    get size() {
        return me(this, Pe).size
    }
    sizeBy(M) {
        return me(this, Pe).filter(M).length
    }
    get pending() {
        return me(this, Me)
    }
    get isPaused() {
        return me(this, je)
    }
}
Fe = new WeakMap, He = new WeakMap, Ne = new WeakMap, Ke = new WeakMap, ze = new WeakMap, Xe = new WeakMap, Be = new WeakMap, Ue = new WeakMap, Pe = new WeakMap, Ye = new WeakMap, Me = new WeakMap, We = new WeakMap, je = new WeakMap, Ze = new WeakMap, rt = new WeakMap, Ce = new WeakSet, ht = function() {
    return me(this, He) || me(this, Ne) < me(this, Ke)
}, pt = function() {
    return me(this, Me) < me(this, We)
}, gt = function() {
    Ge(this, Me)._--, Re(this, Ce, et).call(this), this.emit("next")
}, mt = function() {
    Re(this, Ce, st).call(this), Re(this, Ce, it).call(this), $e(this, Ue, void 0)
}, bt = function() {
    const O = Date.now();
    if (me(this, Be) === void 0) {
        const M = me(this, Xe) - O;
        if (M < 0) $e(this, Ne, me(this, Fe) ? me(this, Me) : 0);
        else return me(this, Ue) === void 0 && $e(this, Ue, setTimeout(() => {
            Re(this, Ce, mt).call(this)
        }, M)), !0
    }
    return !1
}, et = function() {
    if (me(this, Pe).size === 0) return me(this, Be) && clearInterval(me(this, Be)), $e(this, Be, void 0), this.emit("empty"), me(this, Me) === 0 && this.emit("idle"), !1;
    if (!me(this, je)) {
        const O = !me(this, Ce, bt);
        if (me(this, Ce, ht) && me(this, Ce, pt)) {
            const M = me(this, Pe).dequeue();
            return M ? (this.emit("active"), M(), O && Re(this, Ce, it).call(this), !0) : !1
        }
    }
    return !1
}, it = function() {
    me(this, He) || me(this, Be) !== void 0 || ($e(this, Be, setInterval(() => {
        Re(this, Ce, st).call(this)
    }, me(this, ze))), $e(this, Xe, Date.now() + me(this, ze)))
}, st = function() {
    me(this, Ne) === 0 && me(this, Me) === 0 && me(this, Be) && (clearInterval(me(this, Be)), $e(this, Be, void 0)), $e(this, Ne, me(this, Fe) ? me(this, Me) : 0), Re(this, Ce, tt).call(this)
}, tt = function() {
    for (; Re(this, Ce, et).call(this););
}, vt = async function(O) {
    return new Promise((M, L) => {
        O.addEventListener("abort", () => {
            L(O.reason)
        }, {
            once: !0
        })
    })
}, nt = async function(O, M) {
    return new Promise(L => {
        const I = () => {
            M && !M() || (this.off(O, I), L())
        };
        this.on(O, I)
    })
};
const noop$1 = () => {},
    trueFn = () => !0;

function isObject(O) {
    return O !== null && (typeof O == "object" || typeof O == "function")
}
const isNonNullable = O => O != null,
    filterNonNullable = O => O.filter(isNonNullable),
    arrayEquals = (O, M) => O === M || O.length === M.length && O.every((L, I) => L === M[I]);

function chain(O) {
    return (...M) => {
        for (const L of O) L && L(...M)
    }
}
const access = O => typeof O == "function" && !O.length ? O() : O,
    asArray = O => Array.isArray(O) ? O : O ? [O] : [];

function accessWith(O, ...M) {
    return typeof O == "function" ? O(...M) : O
}
const entries = Object.entries,
    tryOnCleanup = onCleanup;

function createMicrotask(O) {
    let M = 0,
        L;
    return onCleanup(() => M = 0), (...I) => {
        L = I, M++, queueMicrotask(() => --M === 0 && O(...L))
    }
}

function handleDiffArray(O, M, L, I) {
    const N = O.length,
        R = M.length;
    let _ = 0;
    if (!R) {
        for (; _ < N; _++) L(O[_]);
        return
    }
    if (!N) {
        for (; _ < R; _++) I(M[_]);
        return
    }
    for (; _ < R && M[_] === O[_]; _++);
    let H, G;
    M = M.slice(_), O = O.slice(_);
    for (H of M) O.includes(H) || I(H);
    for (G of O) M.includes(G) || L(G)
}
class EventBusCore extends Set {
    emit(M) {
        for (const L of this) L(M)
    }
}
class EmitterCore extends Map {
    on(M, L) {
        let I = this.get(M);
        I || this.set(M, I = new EventBusCore), I.add(L)
    }
    off(M, L) {
        const I = this.get(M);
        I != null && I.delete(L) && !I.size && this.delete(M)
    }
    emit(M, L) {
        var I;
        (I = this.get(M)) == null || I.emit(L)
    }
}

function createEmitter() {
    const O = new EmitterCore;
    return {
        on(M, L) {
            return O.on(M, L), tryOnCleanup(O.off.bind(O, M, L))
        },
        emit: O.emit.bind(O),
        clear: onCleanup(O.clear.bind(O))
    }
}

function makeEventListener(O, M, L, I) {
    return O.addEventListener(M, L, I), tryOnCleanup(O.removeEventListener.bind(O, M, L, I))
}

function createEventListener(O, M, L, I) {
    const N = () => {
        asArray(access(O)).forEach(R => {
            R && asArray(access(M)).forEach(_ => makeEventListener(R, _, L, I))
        })
    };
    typeof O == "function" ? createEffect(N) : createRenderEffect(N)
}

function createEventListenerMap(O, M, L) {
    for (const [I, N] of entries(M)) N && createEventListener(O, I, N, L)
}

function observe(O, M) {
    M.observe(O)
}

function makeIntersectionObserver(O, M, L) {
    const I = new IntersectionObserver(M, L),
        N = G => observe(G, I),
        R = G => I.unobserve(G),
        _ = () => O.forEach(N),
        H = () => I.takeRecords().forEach(G => R(G.target));
    return _(), {
        add: N,
        remove: R,
        start: _,
        stop: onCleanup(() => I.disconnect()),
        reset: H,
        instance: I
    }
}

function createIntersectionObserver(O, M, L) {
    const I = new IntersectionObserver(M, L);
    onCleanup(() => I.disconnect()), createEffect(N => {
        const R = O();
        return handleDiffArray(R, N, _ => observe(_, I), _ => I.unobserve(_)), R
    }, [])
}

function createViewportObserver(...O) {
    let M = [],
        L = {};
    Array.isArray(O[0]) || O[0] instanceof Function ? O[1] instanceof Function ? (M = access(O[0]).map(X => [X, O[1]]), L = O[2]) : (M = access(O[0]), L = O[1]) : L = O[0];
    const I = new WeakMap,
        N = (X, Y) => X.forEach(J => {
            var Z;
            const Q = (Z = I.get(J.target)) == null ? void 0 : Z(J, Y);
            Q instanceof Function && Q(J, Y)
        }),
        {
            add: R,
            remove: _,
            stop: H,
            instance: G
        } = makeIntersectionObserver([], N, L),
        z = (X, Y) => {
            R(X), I.set(X, Y)
        },
        W = X => {
            I.delete(X), _(X)
        },
        K = () => M.forEach(([X, Y]) => z(X, Y));
    return onMount(K), [z, {
        remove: W,
        start: K,
        stop: H,
        instance: G
    }]
}

function createVisibilityObserver(O, M) {
    const L = new WeakMap,
        I = new IntersectionObserver((H, G) => {
            var z;
            for (const W of H)(z = L.get(W.target)) == null || z(W, G)
        }, O);
    onCleanup(() => I.disconnect());

    function N(H) {
        I.unobserve(H), L.delete(H)
    }

    function R(H, G) {
        observe(H, I), L.set(H, G)
    }
    const _ = M ? (H, G) => {
        const z = access(M);
        return W => G(z(W, {
            visible: untrack(H)
        }))
    } : (H, G) => z => G(z.isIntersecting);
    return H => {
        const [G, z] = createSignal(O ? .initialValue ? ? !1), W = _(G, z);
        let K;
        return H instanceof Element ? R(H, W) : createEffect(() => {
            const X = H();
            X !== K && (K && N(K), X && R(X, W), K = X)
        }), onCleanup(() => K && N(K)), G
    }
}
var Occurrence;
(function(O) {
    O.Entering = "Entering", O.Leaving = "Leaving", O.Inside = "Inside", O.Outside = "Outside"
})(Occurrence || (Occurrence = {}));

function getOccurrence(O, M) {
    return O ? M ? Occurrence.Inside : Occurrence.Entering : M === !0 ? Occurrence.Leaving : Occurrence.Outside
}

function withOccurrence(O) {
    return () => {
        let M;
        const L = access(O);
        return (I, N) => {
            const {
                isIntersecting: R
            } = I, _ = getOccurrence(R, M);
            return M = R, L(I, { ...N,
                occurrence: _
            })
        }
    }
}
var DirectionX;
(function(O) {
    O.Left = "Left", O.Right = "Right", O.None = "None"
})(DirectionX || (DirectionX = {}));
var DirectionY;
(function(O) {
    O.Top = "Top", O.Bottom = "Bottom", O.None = "None"
})(DirectionY || (DirectionY = {}));

function getDirection(O, M, L) {
    let I = DirectionX.None,
        N = DirectionY.None;
    return M ? (O.top < M.top ? N = L ? DirectionY.Bottom : DirectionY.Top : O.top > M.top && (N = L ? DirectionY.Top : DirectionY.Bottom), O.left > M.left ? I = L ? DirectionX.Left : DirectionX.Right : O.left < M.left && (I = L ? DirectionX.Right : DirectionX.Left), {
        directionX: I,
        directionY: N
    }) : {
        directionX: I,
        directionY: N
    }
}

function withDirection(O) {
    return () => {
        let M;
        const L = access(O);
        return (I, N) => {
            const {
                boundingClientRect: R
            } = I, _ = getDirection(R, M, I.isIntersecting);
            return M = R, L(I, { ...N,
                ..._
            })
        }
    }
}
const noop = () => {},
    noopTransition = (O, M) => M();

function createSwitchTransition(O, M) {
    const L = untrack(O),
        I = L ? [L] : [],
        {
            onEnter: N = noopTransition,
            onExit: R = noopTransition
        } = M,
        [_, H] = createSignal(M.appear ? [] : I),
        [G] = useTransition();
    let z, W = !1;

    function K(J, Z) {
        if (!J) return Z && Z();
        W = !0, R(J, () => {
            batch(() => {
                W = !1, H(Q => Q.filter(ee => ee !== J)), Z && Z()
            })
        })
    }

    function X(J) {
        const Z = z;
        if (!Z) return J && J();
        z = void 0, H(Q => [Z, ...Q]), N(Z, J ? ? noop)
    }
    const Y = M.mode === "out-in" ? J => W || K(J, X) : M.mode === "in-out" ? J => X(() => K(J)) : J => {
        K(J), X()
    };
    return createComputed(J => {
        const Z = O();
        return untrack(G) ? (G(), J) : (Z !== J && (z = Z, batch(() => untrack(() => Y(J)))), Z)
    }, M.appear ? void 0 : L), _
}

function createListTransition(O, M) {
    const L = untrack(O),
        {
            onChange: I
        } = M;
    let N = new Set(M.appear ? void 0 : L);
    const R = new WeakSet,
        [_, H] = createSignal([], {
            equals: !1
        }),
        [G] = useTransition(),
        z = M.exitMethod === "remove" ? noop : K => {
            H(X => (X.push.apply(X, K), X));
            for (const X of K) R.delete(X)
        },
        W = M.exitMethod === "remove" ? noop : M.exitMethod === "keep-index" ? (K, X, Y) => K.splice(Y, 0, X) : (K, X) => K.push(X);
    return createMemo(K => {
        const X = _(),
            Y = O();
        if (Y[$TRACK], untrack(G)) return G(), K;
        if (X.length) {
            const J = K.filter(Z => !X.includes(Z));
            return X.length = 0, I({
                list: J,
                added: [],
                removed: [],
                unchanged: J,
                finishRemoved: z
            }), J
        }
        return untrack(() => {
            const J = new Set(Y),
                Z = Y.slice(),
                Q = [],
                ee = [],
                te = [];
            for (const ne of Y)(N.has(ne) ? te : Q).push(ne);
            let se = !Q.length;
            for (let ne = 0; ne < K.length; ne++) {
                const oe = K[ne];
                J.has(oe) || (R.has(oe) || (ee.push(oe), R.add(oe)), W(Z, oe, ne)), se && oe !== Z[ne] && (se = !1)
            }
            return !ee.length && se ? K : (I({
                list: Z,
                added: Q,
                removed: ee,
                unchanged: te,
                finishRemoved: z
            }), N = J, Z)
        })
    }, M.appear ? [] : L.slice())
}

function createSubRoot(O, ...M) {
    return M.length === 0 && (M = [getOwner()]), createRoot(L => (asArray(access(M)).forEach(I => I && runWithOwner(I, onCleanup.bind(void 0, L))), O(L)), M[0])
}
const createCallback = (O, M = getOwner()) => M ? (...L) => runWithOwner(M, () => O(...L)) : O;

function createDisposable(O, ...M) {
    return createSubRoot(L => (O(L), L), ...M)
}

function createSingletonRoot(O, M = getOwner()) {
    let L = 0,
        I, N;
    return () => (L++, onCleanup(() => {
        L--, queueMicrotask(() => {
            !L && N && (N(), N = I = void 0)
        })
    }), N || createRoot(R => I = O(N = R), M), I)
}

function createRootPool(O, M = {}) {
    let L = 0;
    const {
        limit: I = 100
    } = M, N = new Array(I), R = getOwner(), _ = O.length > 1 ? (W, [K, X]) => {
        const [Y, J] = createSignal(!0), Z = {
            dispose: W,
            set: X,
            setA: J,
            active: Y,
            v: O(K, Y, () => z(Z))
        };
        return Z
    } : (W, [K, X]) => ({
        dispose: W,
        set: X,
        setA: trueFn,
        active: trueFn,
        v: O(K, trueFn, noop$1)
    }), H = createMicrotask(() => {
        if (L > I) {
            for (let W = I; W < L; W++) N[W].dispose(), N[W] = void 0;
            L = I
        }
    }), G = W => {
        W.dispose !== noop$1 && (N[L++] = W, W.setA(!1), H())
    }, z = W => {
        W.dispose(), W.dispose = noop$1, W.active() ? W.setA(!1) : (N[N.indexOf(W)] = N[--L], N[L] = void 0)
    };
    return onCleanup(() => {
        for (let W = 0; W < L; W++) N[W].dispose();
        L = 0
    }), W => {
        let K;
        return L ? (K = N[--L], N[L] = void 0, batch(() => {
            K.set(() => W), K.setA(!0)
        })) : K = createRoot(X => _(X, createSignal(W)), R), onCleanup(() => G(K)), K.v
    }
}
const useKeyDownEvent = createSingletonRoot(() => {
        const [O, M] = createSignal(null);
        return makeEventListener(window, "keydown", L => {
            M(L), setTimeout(() => M(null))
        }), O
    }),
    useKeyDownList = createSingletonRoot(() => {
        const [O, M] = createSignal([]), L = () => M([]), I = useKeyDownEvent();
        return makeEventListener(window, "keydown", N => {
            if (N.repeat || typeof N.key != "string") return;
            const R = N.key.toUpperCase(),
                _ = O();
            if (_.includes(R)) return;
            const H = [..._, R];
            _.length === 0 && R !== "ALT" && R !== "CONTROL" && R !== "META" && R !== "SHIFT" && (N.shiftKey && H.unshift("SHIFT"), N.altKey && H.unshift("ALT"), N.ctrlKey && H.unshift("CONTROL"), N.metaKey && H.unshift("META")), M(H)
        }), makeEventListener(window, "keyup", N => {
            if (typeof N.key != "string") return;
            const R = N.key.toUpperCase();
            M(_ => _.filter(H => H !== R))
        }), makeEventListener(window, "blur", L), makeEventListener(window, "contextmenu", N => {
            N.defaultPrevented || L()
        }), O[0] = O, O[1] = {
            event: I
        }, O[Symbol.iterator] = function*() {
            yield O[0], yield O[1]
        }, O
    }),
    useCurrentlyHeldKey = createSingletonRoot(() => {
        const O = useKeyDownList();
        let M = untrack(O);
        return createMemo(() => {
            const L = O(),
                I = M;
            return M = L, I.length === 0 && L.length === 1 ? L[0] : null
        })
    });

function createKeyHold(O, M = {}) {
    O = O.toUpperCase();
    const {
        preventDefault: L = !0
    } = M, I = useKeyDownEvent(), N = useCurrentlyHeldKey();
    return createMemo(() => {
        var R;
        return N() === O && (L && ((R = I()) == null || R.preventDefault()), !0)
    })
}

function createIsMounted() {
    const [O, M] = createSignal(!1);
    return onMount(() => M(!0)), O
}
const until = O => {
    const M = createRoot(L => {
        const I = createMemo(O),
            N = new Promise((R, _) => {
                createComputed(() => {
                    I() && (R(I()), L())
                }), onCleanup(_)
            });
        return N.dispose = L, N
    });
    return getOwner() && onCleanup(M.dispose), M
};

function mergeRefs(...O) {
    return chain(O)
}
const defaultElementPredicate = O => O instanceof Element;

function getResolvedElements(O, M) {
    if (M(O)) return O;
    if (typeof O == "function" && !O.length) return getResolvedElements(O(), M);
    if (Array.isArray(O)) {
        const L = [];
        for (const I of O) {
            const N = getResolvedElements(I, M);
            N && (Array.isArray(N) ? L.push.apply(L, N) : L.push(N))
        }
        return L.length ? L : null
    }
    return null
}

function resolveElements(O, M = defaultElementPredicate, L = defaultElementPredicate) {
    const I = createMemo(O),
        N = createMemo(() => getResolvedElements(I(), M));
    return N.toArray = () => {
        const R = N();
        return Array.isArray(R) ? R : R ? [R] : []
    }, N
}

function getFirstChild(O, M) {
    if (M(O)) return O;
    if (typeof O == "function" && !O.length) return getFirstChild(O(), M);
    if (Array.isArray(O))
        for (const L of O) {
            const I = getFirstChild(L, M);
            if (I) return I
        }
    return null
}

function resolveFirst(O, M = defaultElementPredicate, L = defaultElementPredicate) {
    const I = createMemo(O);
    return createMemo(() => getFirstChild(I(), M))
}

function Refs(O) {
    const M = O.ref,
        L = children(() => O.children);
    let I = [];
    return createComputed(() => {
        const N = L.toArray().filter(defaultElementPredicate);
        arrayEquals(I, N) || untrack(() => M(N)), I = N
    }, []), onCleanup(() => I.length && M([])), L
}

function Ref(O) {
    const M = O.ref,
        L = children(() => O.children);
    let I;
    return createComputed(() => {
        const N = L.toArray().find(defaultElementPredicate);
        N !== I && untrack(() => M(N)), I = N
    }), onCleanup(() => I && M(void 0)), L
}

function createStaticStore(O) {
    const M = { ...O
        },
        L = { ...O
        },
        I = {},
        N = _ => {
            let H = I[_];
            if (!H) {
                if (!getListener()) return M[_];
                I[_] = H = createSignal(M[_], {
                    internal: !0
                }), delete M[_]
            }
            return H[0]()
        };
    for (const _ in O) Object.defineProperty(L, _, {
        get: () => N(_),
        enumerable: !0
    });
    const R = (_, H) => {
        const G = I[_];
        if (G) return G[1](H);
        _ in M && (M[_] = accessWith(H, M[_]))
    };
    return [L, (_, H) => {
        if (isObject(_)) {
            const G = untrack(() => Object.entries(accessWith(_, L)));
            batch(() => {
                for (const [z, W] of G) R(z, () => W)
            })
        } else R(_, H);
        return L
    }]
}

function createHydratableStaticStore(O, M) {
    if (sharedConfig.context) {
        const [L, I] = createStaticStore(O);
        return onMount(() => I(M())), [L, I]
    }
    return createStaticStore(M())
}

function makeResizeObserver(O, M) {
    const L = new ResizeObserver(O);
    return onCleanup(L.disconnect.bind(L)), {
        observe: I => L.observe(I, M),
        unobserve: L.unobserve.bind(L)
    }
}

function createResizeObserver(O, M, L) {
    const I = new WeakMap,
        {
            observe: N,
            unobserve: R
        } = makeResizeObserver(_ => {
            for (const H of _) {
                const {
                    contentRect: G,
                    target: z
                } = H, W = Math.round(G.width), K = Math.round(G.height), X = I.get(z);
                (!X || X.width !== W || X.height !== K) && (M(G, z, H), I.set(z, {
                    width: W,
                    height: K
                }))
            }
        }, L);
    createEffect(_ => {
        const H = filterNonNullable(asArray(access(O)));
        return handleDiffArray(H, _, N, R), H
    }, [])
}
const WINDOW_SIZE_FALLBACK = {
    width: 0,
    height: 0
};

function getWindowSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

function createWindowSize() {
    const [O, M] = createHydratableStaticStore(WINDOW_SIZE_FALLBACK, getWindowSize);
    return makeEventListener(window, "resize", () => M(getWindowSize())), O
}
const ELEMENT_SIZE_FALLBACK = {
    width: null,
    height: null
};

function getElementSize(O) {
    if (!O) return { ...ELEMENT_SIZE_FALLBACK
    };
    const {
        width: M,
        height: L
    } = O.getBoundingClientRect();
    return {
        width: M,
        height: L
    }
}

function createElementSize(O) {
    const M = typeof O == "function",
        [L, I] = createStaticStore(sharedConfig.context || M ? ELEMENT_SIZE_FALLBACK : getElementSize(O)),
        N = new ResizeObserver(([R]) => I(getElementSize(R.target)));
    return onCleanup(() => N.disconnect()), M ? createEffect(() => {
        const R = O();
        R && (I(getElementSize(R)), N.observe(R), onCleanup(() => N.unobserve(R)))
    }) : (N.observe(O), onCleanup(() => N.unobserve(O))), L
}
const queue = new PQueue({
        concurrency: 1
    }),
    delay = O => new Promise(M => setTimeout(M, O)),
    createQueueScheduler = (O, M) => {
        const [L, I] = createSignal(!1);
        return createEffect(N => {
            if (O()) return N || untrack(() => {
                let R = () => {};
                const _ = new Promise(G => {
                        R = G
                    }),
                    H = async () => {
                        var G;
                        return await delay(M ? .delay ? ? 0), (G = M ? .onRender) == null || G.call(M), I(!0), _
                    };
                return queue.add(H, {
                    priority: M ? .priority
                }).then(() => {
                    I(!1)
                }), R
            });
            N && N()
        }), [L]
    },
    QueueRender = O => {
        const M = resolveFirst(() => O.children),
            L = mergeProps({
                priority: 0,
                delay: 200,
                onRender: () => {}
            }, O),
            [I] = createQueueScheduler(M, L);
        return createComponent(Show, {
            get when() {
                return I()
            },
            get children() {
                return O.children
            }
        })
    };
var addClearMethod = O => (typeof O.clear == "function" || (O.clear = () => {
        let M;
        for (; M = O.key(0);) O.removeItem(M)
    }), O),
    methodKeys = ["clear", "getItem", "getAll", "setItem", "removeItem", "key", "getLength"],
    addWithOptionsMethod = O => (O.withOptions = M => methodKeys.reduce((L, I) => (typeof O[I] == "function" && (L[I] = (...N) => (N[O[I].length - 1] = M, O[I](...N))), L), {
        get length() {
            return O.length
        },
        withOptions: L => O.withOptions(L)
    }), O),
    cookiePropertyMap = {
        domain: "Domain",
        expires: "Expires",
        path: "Path",
        secure: "Secure",
        httpOnly: "HttpOnly",
        maxAge: "Max-Age",
        sameSite: "SameSite"
    };

function serializeCookieOptions(O) {
    if (!O) return "";
    const M = Object.entries(O).map(([L, I]) => {
        const N = cookiePropertyMap[L];
        if (N) return I instanceof Date ? `${N}=${I.toUTCString()}` : typeof I == "boolean" ? I ? `${N}` : void 0 : `${N}=${I}`
    }).filter(L => !!L);
    return M.length != 0 ? `; ${M.join("; ")}` : ""
}

function deserializeCookieOptions(O, M) {
    var L;
    return ((L = O.match(`(^|;)\\s*${M}\\s*=\\s*([^;]+)`)) == null ? void 0 : L.pop()) ? ? null
}
var cookieStorage = addWithOptionsMethod(addClearMethod({
    _read: () => document.cookie,
    _write: (O, M, L) => {
        document.cookie = `${O}=${M}${serializeCookieOptions(L)}`
    },
    getItem: (O, M) => deserializeCookieOptions(cookieStorage._read(M), O),
    setItem: (O, M, L) => {
        cookieStorage._write(O, M, L)
    },
    removeItem: (O, M) => {
        cookieStorage._write(O, "deleted", { ...M,
            expires: new Date(0)
        })
    },
    key: (O, M) => {
        let L = null,
            I = 0;
        return cookieStorage._read(M).replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g, (N, R) => (!L && R && I++ === O && (L = R), "")), L
    },
    getLength: O => {
        let M = 0;
        return cookieStorage._read(O).replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g, L => (M += L ? 1 : 0, "")), M
    },
    get length() {
        return this.getLength()
    }
}));

function makePersisted(O, M = {}) {
    var L;
    const I = M.storage || globalThis.localStorage,
        N = M.name || `storage-${createUniqueId()}`;
    if (!I) return O;
    const R = M.storageOptions,
        _ = M.serialize || JSON.stringify.bind(JSON),
        H = M.deserialize || JSON.parse.bind(JSON),
        G = I.getItem(N, R),
        z = typeof O[0] == "function" ? K => {
            try {
                const X = H(K);
                O[1](() => X)
            } catch {}
        } : K => {
            try {
                const X = H(K);
                O[1](reconcile(X))
            } catch {}
        };
    let W = !0;
    if (G instanceof Promise ? G.then(K => W && K && z(K)) : G && z(G), typeof((L = M.sync) == null ? void 0 : L[0]) == "function") {
        const K = typeof O[0] == "function" ? O[0] : () => O[0];
        M.sync[0](X => {
            X.key !== N || (X.url || globalThis.location.href) !== globalThis.location.href || X.newValue === _(untrack(K)) || z(X.newValue)
        })
    }
    return [O[0], typeof O[0] == "function" ? K => {
        var X;
        const Y = O[1](K),
            J = K != null ? _(Y) : K;
        return (X = M.sync) == null || X[1](N, J), K != null ? I.setItem(N, J, R) : I.removeItem(N, R), W = !1, Y
    } : (...K) => {
        var X;
        O[1](...K);
        const Y = _(untrack(() => O[0]));
        (X = M.sync) == null || X[1](N, Y), I.setItem(N, Y, R), W = !1
    }]
}
var storageSync = [O => window.addEventListener("storage", M => O(M)), () => {}];
const makeTimer = (O, M, L) => {
        const I = L(O, M);
        return onCleanup(() => clearInterval(I))
    },
    createTimer = (O, M, L) => {
        if (typeof M == "number") {
            makeTimer(O, M, L);
            return
        }
        let I = !1,
            N = performance.now(),
            R = 0,
            _ = !1;
        const H = () => {
            untrack(O), N = performance.now(), I = L === setTimeout
        };
        createEffect(G => {
            if (I) return;
            const z = M();
            if (z === !1) return G && (R += (performance.now() - N) / G), z;
            if (G === !1 && (N = performance.now()), _) {
                if (G && (R += (performance.now() - N) / G), N = performance.now(), R >= 1) R = 0, H();
                else if (R > 0) {
                    const [W, K] = createSignal(void 0, {
                        equals: !1
                    });
                    return W(), makeTimer(() => {
                        R = 0, _ = !1, K(), H()
                    }, (1 - R) * z, setTimeout), z
                }
            }
            return _ = !0, makeTimer(H, z, L), z
        })
    };

function createTween(O, {
    ease: M = I => I,
    duration: L = 100
}) {
    const [I, N] = createSignal(O());
    let R, _, H, G;

    function z(W) {
        const K = W - R;
        K < L ? (N(_ + M(K / L) * H), G = requestAnimationFrame(z)) : N(O())
    }
    return createEffect(on$1(O, () => {
        R = performance.now(), _ = I(), H = O() - _, G = requestAnimationFrame(z), onCleanup(() => cancelAnimationFrame(G))
    }, {
        defer: !0
    })), I
}
var lib$1 = {
        exports: {}
    },
    parseuri, hasRequiredParseuri;

function requireParseuri() {
    if (hasRequiredParseuri) return parseuri;
    hasRequiredParseuri = 1;
    var O = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        M = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    parseuri = function(N) {
        var R = N,
            _ = N.indexOf("["),
            H = N.indexOf("]");
        _ != -1 && H != -1 && (N = N.substring(0, _) + N.substring(_, H).replace(/:/g, ";") + N.substring(H, N.length));
        for (var G = O.exec(N || ""), z = {}, W = 14; W--;) z[M[W]] = G[W] || "";
        return _ != -1 && H != -1 && (z.source = R, z.host = z.host.substring(1, z.host.length - 1).replace(/;/g, ":"), z.authority = z.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), z.ipv6uri = !0), z.pathNames = L(z, z.path), z.queryKey = I(z, z.query), z
    };

    function L(N, R) {
        var _ = /\/{2,9}/g,
            H = R.replace(_, "/").split("/");
        return (R.substr(0, 1) == "/" || R.length === 0) && H.splice(0, 1), R.substr(R.length - 1, 1) == "/" && H.splice(H.length - 1, 1), H
    }

    function I(N, R) {
        var _ = {};
        return R.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(H, G, z) {
            G && (_[G] = z)
        }), _
    }
    return parseuri
}
var browser$3 = {
        exports: {}
    },
    debug$2 = {
        exports: {}
    },
    ms$2, hasRequiredMs$2;

function requireMs$2() {
    if (hasRequiredMs$2) return ms$2;
    hasRequiredMs$2 = 1;
    var O = 1e3,
        M = O * 60,
        L = M * 60,
        I = L * 24,
        N = I * 365.25;
    ms$2 = function(z, W) {
        W = W || {};
        var K = typeof z;
        if (K === "string" && z.length > 0) return R(z);
        if (K === "number" && isNaN(z) === !1) return W.long ? H(z) : _(z);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(z))
    };

    function R(z) {
        if (z = String(z), !(z.length > 100)) {
            var W = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(z);
            if (W) {
                var K = parseFloat(W[1]),
                    X = (W[2] || "ms").toLowerCase();
                switch (X) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return K * N;
                    case "days":
                    case "day":
                    case "d":
                        return K * I;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return K * L;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return K * M;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return K * O;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return K;
                    default:
                        return
                }
            }
        }
    }

    function _(z) {
        return z >= I ? Math.round(z / I) + "d" : z >= L ? Math.round(z / L) + "h" : z >= M ? Math.round(z / M) + "m" : z >= O ? Math.round(z / O) + "s" : z + "ms"
    }

    function H(z) {
        return G(z, I, "day") || G(z, L, "hour") || G(z, M, "minute") || G(z, O, "second") || z + " ms"
    }

    function G(z, W, K) {
        if (!(z < W)) return z < W * 1.5 ? Math.floor(z / W) + " " + K : Math.ceil(z / W) + " " + K + "s"
    }
    return ms$2
}
var hasRequiredDebug$2;

function requireDebug$2() {
    return hasRequiredDebug$2 || (hasRequiredDebug$2 = 1, function(O, M) {
        M = O.exports = I.debug = I.default = I, M.coerce = G, M.disable = _, M.enable = R, M.enabled = H, M.humanize = requireMs$2(), M.instances = [], M.names = [], M.skips = [], M.formatters = {};

        function L(z) {
            var W = 0,
                K;
            for (K in z) W = (W << 5) - W + z.charCodeAt(K), W |= 0;
            return M.colors[Math.abs(W) % M.colors.length]
        }

        function I(z) {
            var W;

            function K() {
                if (K.enabled) {
                    var X = K,
                        Y = +new Date,
                        J = Y - (W || Y);
                    X.diff = J, X.prev = W, X.curr = Y, W = Y;
                    for (var Z = new Array(arguments.length), Q = 0; Q < Z.length; Q++) Z[Q] = arguments[Q];
                    Z[0] = M.coerce(Z[0]), typeof Z[0] != "string" && Z.unshift("%O");
                    var ee = 0;
                    Z[0] = Z[0].replace(/%([a-zA-Z%])/g, function(se, ne) {
                        if (se === "%%") return se;
                        ee++;
                        var oe = M.formatters[ne];
                        if (typeof oe == "function") {
                            var ie = Z[ee];
                            se = oe.call(X, ie), Z.splice(ee, 1), ee--
                        }
                        return se
                    }), M.formatArgs.call(X, Z);
                    var te = K.log || M.log || console.log.bind(console);
                    te.apply(X, Z)
                }
            }
            return K.namespace = z, K.enabled = M.enabled(z), K.useColors = M.useColors(), K.color = L(z), K.destroy = N, typeof M.init == "function" && M.init(K), M.instances.push(K), K
        }

        function N() {
            var z = M.instances.indexOf(this);
            return z !== -1 ? (M.instances.splice(z, 1), !0) : !1
        }

        function R(z) {
            M.save(z), M.names = [], M.skips = [];
            var W, K = (typeof z == "string" ? z : "").split(/[\s,]+/),
                X = K.length;
            for (W = 0; W < X; W++) K[W] && (z = K[W].replace(/\*/g, ".*?"), z[0] === "-" ? M.skips.push(new RegExp("^" + z.substr(1) + "$")) : M.names.push(new RegExp("^" + z + "$")));
            for (W = 0; W < M.instances.length; W++) {
                var Y = M.instances[W];
                Y.enabled = M.enabled(Y.namespace)
            }
        }

        function _() {
            M.enable("")
        }

        function H(z) {
            if (z[z.length - 1] === "*") return !0;
            var W, K;
            for (W = 0, K = M.skips.length; W < K; W++)
                if (M.skips[W].test(z)) return !1;
            for (W = 0, K = M.names.length; W < K; W++)
                if (M.names[W].test(z)) return !0;
            return !1
        }

        function G(z) {
            return z instanceof Error ? z.stack || z.message : z
        }
    }(debug$2, debug$2.exports)), debug$2.exports
}
var hasRequiredBrowser$3;

function requireBrowser$3() {
    return hasRequiredBrowser$3 || (hasRequiredBrowser$3 = 1, function(O, M) {
        M = O.exports = requireDebug$2(), M.log = N, M.formatArgs = I, M.save = R, M.load = _, M.useColors = L, M.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : H(), M.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function L() {
            return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        M.formatters.j = function(G) {
            try {
                return JSON.stringify(G)
            } catch (z) {
                return "[UnexpectedJSONParseError]: " + z.message
            }
        };

        function I(G) {
            var z = this.useColors;
            if (G[0] = (z ? "%c" : "") + this.namespace + (z ? " %c" : " ") + G[0] + (z ? "%c " : " ") + "+" + M.humanize(this.diff), !!z) {
                var W = "color: " + this.color;
                G.splice(1, 0, W, "color: inherit");
                var K = 0,
                    X = 0;
                G[0].replace(/%[a-zA-Z%]/g, function(Y) {
                    Y !== "%%" && (K++, Y === "%c" && (X = K))
                }), G.splice(X, 0, W)
            }
        }

        function N() {
            return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function R(G) {
            try {
                G == null ? M.storage.removeItem("debug") : M.storage.debug = G
            } catch {}
        }

        function _() {
            var G;
            try {
                G = M.storage.debug
            } catch {}
            return !G && typeof process < "u" && "env" in process && (G = define_process_env_default.DEBUG), G
        }
        M.enable(_());

        function H() {
            try {
                return window.localStorage
            } catch {}
        }
    }(browser$3, browser$3.exports)), browser$3.exports
}
var url_1, hasRequiredUrl;

function requireUrl() {
    if (hasRequiredUrl) return url_1;
    hasRequiredUrl = 1;
    var O = requireParseuri(),
        M = requireBrowser$3()("socket.io-client:url");
    url_1 = L;

    function L(I, N) {
        var R = I;
        N = N || typeof location < "u" && location, I == null && (I = N.protocol + "//" + N.host), typeof I == "string" && (I.charAt(0) === "/" && (I.charAt(1) === "/" ? I = N.protocol + I : I = N.host + I), /^(https?|wss?):\/\//.test(I) || (M("protocol-less url %s", I), typeof N < "u" ? I = N.protocol + "//" + I : I = "https://" + I), M("parse %s", I), R = O(I)), R.port || (/^(http|ws)$/.test(R.protocol) ? R.port = "80" : /^(http|ws)s$/.test(R.protocol) && (R.port = "443")), R.path = R.path || "/";
        var _ = R.host.indexOf(":") !== -1,
            H = _ ? "[" + R.host + "]" : R.host;
        return R.id = R.protocol + "://" + H + ":" + R.port, R.href = R.protocol + "://" + H + (N && N.port === R.port ? "" : ":" + R.port), R
    }
    return url_1
}
var socket_ioParser = {},
    browser$2 = {
        exports: {}
    },
    debug$1 = {
        exports: {}
    },
    ms$1, hasRequiredMs$1;

function requireMs$1() {
    if (hasRequiredMs$1) return ms$1;
    hasRequiredMs$1 = 1;
    var O = 1e3,
        M = O * 60,
        L = M * 60,
        I = L * 24,
        N = I * 365.25;
    ms$1 = function(z, W) {
        W = W || {};
        var K = typeof z;
        if (K === "string" && z.length > 0) return R(z);
        if (K === "number" && isNaN(z) === !1) return W.long ? H(z) : _(z);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(z))
    };

    function R(z) {
        if (z = String(z), !(z.length > 100)) {
            var W = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(z);
            if (W) {
                var K = parseFloat(W[1]),
                    X = (W[2] || "ms").toLowerCase();
                switch (X) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return K * N;
                    case "days":
                    case "day":
                    case "d":
                        return K * I;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return K * L;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return K * M;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return K * O;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return K;
                    default:
                        return
                }
            }
        }
    }

    function _(z) {
        return z >= I ? Math.round(z / I) + "d" : z >= L ? Math.round(z / L) + "h" : z >= M ? Math.round(z / M) + "m" : z >= O ? Math.round(z / O) + "s" : z + "ms"
    }

    function H(z) {
        return G(z, I, "day") || G(z, L, "hour") || G(z, M, "minute") || G(z, O, "second") || z + " ms"
    }

    function G(z, W, K) {
        if (!(z < W)) return z < W * 1.5 ? Math.floor(z / W) + " " + K : Math.ceil(z / W) + " " + K + "s"
    }
    return ms$1
}
var hasRequiredDebug$1;

function requireDebug$1() {
    return hasRequiredDebug$1 || (hasRequiredDebug$1 = 1, function(O, M) {
        M = O.exports = I.debug = I.default = I, M.coerce = G, M.disable = _, M.enable = R, M.enabled = H, M.humanize = requireMs$1(), M.instances = [], M.names = [], M.skips = [], M.formatters = {};

        function L(z) {
            var W = 0,
                K;
            for (K in z) W = (W << 5) - W + z.charCodeAt(K), W |= 0;
            return M.colors[Math.abs(W) % M.colors.length]
        }

        function I(z) {
            var W;

            function K() {
                if (K.enabled) {
                    var X = K,
                        Y = +new Date,
                        J = Y - (W || Y);
                    X.diff = J, X.prev = W, X.curr = Y, W = Y;
                    for (var Z = new Array(arguments.length), Q = 0; Q < Z.length; Q++) Z[Q] = arguments[Q];
                    Z[0] = M.coerce(Z[0]), typeof Z[0] != "string" && Z.unshift("%O");
                    var ee = 0;
                    Z[0] = Z[0].replace(/%([a-zA-Z%])/g, function(se, ne) {
                        if (se === "%%") return se;
                        ee++;
                        var oe = M.formatters[ne];
                        if (typeof oe == "function") {
                            var ie = Z[ee];
                            se = oe.call(X, ie), Z.splice(ee, 1), ee--
                        }
                        return se
                    }), M.formatArgs.call(X, Z);
                    var te = K.log || M.log || console.log.bind(console);
                    te.apply(X, Z)
                }
            }
            return K.namespace = z, K.enabled = M.enabled(z), K.useColors = M.useColors(), K.color = L(z), K.destroy = N, typeof M.init == "function" && M.init(K), M.instances.push(K), K
        }

        function N() {
            var z = M.instances.indexOf(this);
            return z !== -1 ? (M.instances.splice(z, 1), !0) : !1
        }

        function R(z) {
            M.save(z), M.names = [], M.skips = [];
            var W, K = (typeof z == "string" ? z : "").split(/[\s,]+/),
                X = K.length;
            for (W = 0; W < X; W++) K[W] && (z = K[W].replace(/\*/g, ".*?"), z[0] === "-" ? M.skips.push(new RegExp("^" + z.substr(1) + "$")) : M.names.push(new RegExp("^" + z + "$")));
            for (W = 0; W < M.instances.length; W++) {
                var Y = M.instances[W];
                Y.enabled = M.enabled(Y.namespace)
            }
        }

        function _() {
            M.enable("")
        }

        function H(z) {
            if (z[z.length - 1] === "*") return !0;
            var W, K;
            for (W = 0, K = M.skips.length; W < K; W++)
                if (M.skips[W].test(z)) return !1;
            for (W = 0, K = M.names.length; W < K; W++)
                if (M.names[W].test(z)) return !0;
            return !1
        }

        function G(z) {
            return z instanceof Error ? z.stack || z.message : z
        }
    }(debug$1, debug$1.exports)), debug$1.exports
}
var hasRequiredBrowser$2;

function requireBrowser$2() {
    return hasRequiredBrowser$2 || (hasRequiredBrowser$2 = 1, function(O, M) {
        M = O.exports = requireDebug$1(), M.log = N, M.formatArgs = I, M.save = R, M.load = _, M.useColors = L, M.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : H(), M.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function L() {
            return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        M.formatters.j = function(G) {
            try {
                return JSON.stringify(G)
            } catch (z) {
                return "[UnexpectedJSONParseError]: " + z.message
            }
        };

        function I(G) {
            var z = this.useColors;
            if (G[0] = (z ? "%c" : "") + this.namespace + (z ? " %c" : " ") + G[0] + (z ? "%c " : " ") + "+" + M.humanize(this.diff), !!z) {
                var W = "color: " + this.color;
                G.splice(1, 0, W, "color: inherit");
                var K = 0,
                    X = 0;
                G[0].replace(/%[a-zA-Z%]/g, function(Y) {
                    Y !== "%%" && (K++, Y === "%c" && (X = K))
                }), G.splice(X, 0, W)
            }
        }

        function N() {
            return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function R(G) {
            try {
                G == null ? M.storage.removeItem("debug") : M.storage.debug = G
            } catch {}
        }

        function _() {
            var G;
            try {
                G = M.storage.debug
            } catch {}
            return !G && typeof process < "u" && "env" in process && (G = define_process_env_default.DEBUG), G
        }
        M.enable(_());

        function H() {
            try {
                return window.localStorage
            } catch {}
        }
    }(browser$2, browser$2.exports)), browser$2.exports
}
var componentEmitter = {
        exports: {}
    },
    hasRequiredComponentEmitter;

function requireComponentEmitter() {
    return hasRequiredComponentEmitter || (hasRequiredComponentEmitter = 1, function(O) {
        O.exports = M;

        function M(I) {
            if (I) return L(I)
        }

        function L(I) {
            for (var N in M.prototype) I[N] = M.prototype[N];
            return I
        }
        M.prototype.on = M.prototype.addEventListener = function(I, N) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + I] = this._callbacks["$" + I] || []).push(N), this
        }, M.prototype.once = function(I, N) {
            function R() {
                this.off(I, R), N.apply(this, arguments)
            }
            return R.fn = N, this.on(I, R), this
        }, M.prototype.off = M.prototype.removeListener = M.prototype.removeAllListeners = M.prototype.removeEventListener = function(I, N) {
            if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
            var R = this._callbacks["$" + I];
            if (!R) return this;
            if (arguments.length == 1) return delete this._callbacks["$" + I], this;
            for (var _, H = 0; H < R.length; H++)
                if (_ = R[H], _ === N || _.fn === N) {
                    R.splice(H, 1);
                    break
                }
            return R.length === 0 && delete this._callbacks["$" + I], this
        }, M.prototype.emit = function(I) {
            this._callbacks = this._callbacks || {};
            for (var N = new Array(arguments.length - 1), R = this._callbacks["$" + I], _ = 1; _ < arguments.length; _++) N[_ - 1] = arguments[_];
            if (R) {
                R = R.slice(0);
                for (var _ = 0, H = R.length; _ < H; ++_) R[_].apply(this, N)
            }
            return this
        }, M.prototype.listeners = function(I) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + I] || []
        }, M.prototype.hasListeners = function(I) {
            return !!this.listeners(I).length
        }
    }(componentEmitter)), componentEmitter.exports
}
var binary = {},
    isarray, hasRequiredIsarray;

function requireIsarray() {
    if (hasRequiredIsarray) return isarray;
    hasRequiredIsarray = 1;
    var O = {}.toString;
    return isarray = Array.isArray || function(M) {
        return O.call(M) == "[object Array]"
    }, isarray
}
var isBuffer, hasRequiredIsBuffer;

function requireIsBuffer() {
    if (hasRequiredIsBuffer) return isBuffer;
    hasRequiredIsBuffer = 1, isBuffer = I;
    var O = typeof Buffer == "function" && typeof Buffer.isBuffer == "function",
        M = typeof ArrayBuffer == "function",
        L = function(N) {
            return typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(N) : N.buffer instanceof ArrayBuffer
        };

    function I(N) {
        return O && Buffer.isBuffer(N) || M && (N instanceof ArrayBuffer || L(N))
    }
    return isBuffer
}
var hasRequiredBinary;

function requireBinary() {
    if (hasRequiredBinary) return binary;
    hasRequiredBinary = 1;
    var O = requireIsarray(),
        M = requireIsBuffer(),
        L = Object.prototype.toString,
        I = typeof Blob == "function" || typeof Blob < "u" && L.call(Blob) === "[object BlobConstructor]",
        N = typeof File == "function" || typeof File < "u" && L.call(File) === "[object FileConstructor]";
    binary.deconstructPacket = function(H) {
        var G = [],
            z = H.data,
            W = H;
        return W.data = R(z, G), W.attachments = G.length, {
            packet: W,
            buffers: G
        }
    };

    function R(H, G) {
        if (!H) return H;
        if (M(H)) {
            var z = {
                _placeholder: !0,
                num: G.length
            };
            return G.push(H), z
        } else if (O(H)) {
            for (var W = new Array(H.length), K = 0; K < H.length; K++) W[K] = R(H[K], G);
            return W
        } else if (typeof H == "object" && !(H instanceof Date)) {
            var W = {};
            for (var X in H) W[X] = R(H[X], G);
            return W
        }
        return H
    }
    binary.reconstructPacket = function(H, G) {
        return H.data = _(H.data, G), H.attachments = void 0, H
    };

    function _(H, G) {
        if (!H) return H;
        if (H && H._placeholder === !0) {
            var z = typeof H.num == "number" && H.num >= 0 && H.num < G.length;
            if (z) return G[H.num];
            throw new Error("illegal attachments")
        } else if (O(H))
            for (var W = 0; W < H.length; W++) H[W] = _(H[W], G);
        else if (typeof H == "object")
            for (var K in H) H[K] = _(H[K], G);
        return H
    }
    return binary.removeBlobs = function(H, G) {
        function z(X, Y, J) {
            if (!X) return X;
            if (I && X instanceof Blob || N && X instanceof File) {
                W++;
                var Z = new FileReader;
                Z.onload = function() {
                    J ? J[Y] = this.result : K = this.result, --W || G(K)
                }, Z.readAsArrayBuffer(X)
            } else if (O(X))
                for (var Q = 0; Q < X.length; Q++) z(X[Q], Q, X);
            else if (typeof X == "object" && !M(X))
                for (var ee in X) z(X[ee], ee, X)
        }
        var W = 0,
            K = H;
        z(K), W || G(K)
    }, binary
}
var hasRequiredSocket_ioParser;

function requireSocket_ioParser() {
    return hasRequiredSocket_ioParser || (hasRequiredSocket_ioParser = 1, function(O) {
        var M = requireBrowser$2()("socket.io-parser"),
            L = requireComponentEmitter(),
            I = requireBinary(),
            N = requireIsarray(),
            R = requireIsBuffer();
        O.protocol = 4, O.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], O.CONNECT = 0, O.DISCONNECT = 1, O.EVENT = 2, O.ACK = 3, O.ERROR = 4, O.BINARY_EVENT = 5, O.BINARY_ACK = 6, O.Encoder = _, O.Decoder = K;

        function _() {}
        var H = O.ERROR + '"encode error"';
        _.prototype.encode = function(ee, te) {
            if (M("encoding packet %j", ee), O.BINARY_EVENT === ee.type || O.BINARY_ACK === ee.type) W(ee, te);
            else {
                var se = G(ee);
                te([se])
            }
        };

        function G(ee) {
            var te = "" + ee.type;
            if ((O.BINARY_EVENT === ee.type || O.BINARY_ACK === ee.type) && (te += ee.attachments + "-"), ee.nsp && ee.nsp !== "/" && (te += ee.nsp + ","), ee.id != null && (te += ee.id), ee.data != null) {
                var se = z(ee.data);
                if (se !== !1) te += se;
                else return H
            }
            return M("encoded %j as %s", ee, te), te
        }

        function z(ee) {
            try {
                return JSON.stringify(ee)
            } catch {
                return !1
            }
        }

        function W(ee, te) {
            function se(ne) {
                var oe = I.deconstructPacket(ne),
                    ie = G(oe.packet),
                    re = oe.buffers;
                re.unshift(ie), te(re)
            }
            I.removeBlobs(ee, se)
        }

        function K() {
            this.reconstructor = null
        }
        L(K.prototype), K.prototype.add = function(ee) {
            var te;
            if (typeof ee == "string") {
                if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                te = Y(ee), O.BINARY_EVENT === te.type || O.BINARY_ACK === te.type ? (this.reconstructor = new Z(te), this.reconstructor.reconPack.attachments === 0 && this.emit("decoded", te)) : this.emit("decoded", te)
            } else if (R(ee) || ee.base64)
                if (this.reconstructor) te = this.reconstructor.takeBinaryData(ee), te && (this.reconstructor = null, this.emit("decoded", te));
                else throw new Error("got binary data when not reconstructing a packet");
            else throw new Error("Unknown type: " + ee)
        };

        function X(ee, te) {
            switch (ee) {
                case 0:
                    return typeof te == "object";
                case 1:
                    return te === void 0;
                case 4:
                    return typeof te == "string" || typeof te == "object";
                case 2:
                case 5:
                    return N(te) && (typeof te[0] == "string" || typeof te[0] == "number");
                case 3:
                case 6:
                    return N(te)
            }
        }

        function Y(ee) {
            var te = 0,
                se = {
                    type: Number(ee.charAt(0))
                };
            if (O.types[se.type] == null) return Q("unknown packet type " + se.type);
            if (O.BINARY_EVENT === se.type || O.BINARY_ACK === se.type) {
                for (var ne = te + 1; ee.charAt(++te) !== "-" && te != ee.length;);
                var oe = ee.substring(ne, te);
                if (oe != Number(oe) || ee.charAt(te) !== "-") throw new Error("Illegal attachments");
                se.attachments = Number(oe)
            }
            if (ee.charAt(te + 1) === "/") {
                for (var ne = te + 1; ++te;) {
                    var ie = ee.charAt(te);
                    if (ie === "," || te === ee.length) break
                }
                se.nsp = ee.substring(ne, te)
            } else se.nsp = "/";
            var re = ee.charAt(te + 1);
            if (re !== "" && Number(re) == re) {
                for (var ne = te + 1; ++te;) {
                    var ie = ee.charAt(te);
                    if (ie == null || Number(ie) != ie) {
                        --te;
                        break
                    }
                    if (te === ee.length) break
                }
                se.id = Number(ee.substring(ne, te + 1))
            }
            if (ee.charAt(++te)) {
                var ae = J(ee.substr(te));
                if (X(se.type, ae)) se.data = ae;
                else throw new Error("invalid payload")
            }
            return M("decoded %s as %j", ee, se), se
        }

        function J(ee) {
            try {
                return JSON.parse(ee)
            } catch {
                return !1
            }
        }
        K.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        };

        function Z(ee) {
            this.reconPack = ee, this.buffers = []
        }
        Z.prototype.takeBinaryData = function(ee) {
            if (this.buffers.push(ee), this.buffers.length === this.reconPack.attachments) {
                var te = I.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(), te
            }
            return null
        }, Z.prototype.finishedReconstruction = function() {
            this.reconPack = null, this.buffers = []
        };

        function Q(ee) {
            return {
                type: O.ERROR,
                data: "parser error: " + ee
            }
        }
    }(socket_ioParser)), socket_ioParser
}
var lib = {
        exports: {}
    },
    transports = {},
    hasCors = {
        exports: {}
    },
    hasRequiredHasCors;

function requireHasCors() {
    if (hasRequiredHasCors) return hasCors.exports;
    hasRequiredHasCors = 1;
    try {
        hasCors.exports = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
    } catch {
        hasCors.exports = !1
    }
    return hasCors.exports
}
var globalThis_browser, hasRequiredGlobalThis_browser;

function requireGlobalThis_browser() {
    return hasRequiredGlobalThis_browser || (hasRequiredGlobalThis_browser = 1, globalThis_browser = function() {
        return typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
    }()), globalThis_browser
}
var xmlhttprequest_browser, hasRequiredXmlhttprequest_browser;

function requireXmlhttprequest_browser() {
    if (hasRequiredXmlhttprequest_browser) return xmlhttprequest_browser;
    hasRequiredXmlhttprequest_browser = 1;
    var O = requireHasCors(),
        M = requireGlobalThis_browser();
    return xmlhttprequest_browser = function(L) {
        var I = L.xdomain,
            N = L.xscheme,
            R = L.enablesXDR;
        try {
            if (typeof XMLHttpRequest < "u" && (!I || O)) return new XMLHttpRequest
        } catch {}
        try {
            if (typeof XDomainRequest < "u" && !N && R) return new XDomainRequest
        } catch {}
        if (!I) try {
            return new M[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
    }, xmlhttprequest_browser
}
var pollingXhr = {
        exports: {}
    },
    browser$1 = {},
    keys, hasRequiredKeys;

function requireKeys() {
    return hasRequiredKeys || (hasRequiredKeys = 1, keys = Object.keys || function(O) {
        var M = [],
            L = Object.prototype.hasOwnProperty;
        for (var I in O) L.call(O, I) && M.push(I);
        return M
    }), keys
}
var hasBinary2, hasRequiredHasBinary2;

function requireHasBinary2() {
    if (hasRequiredHasBinary2) return hasBinary2;
    hasRequiredHasBinary2 = 1;
    var O = requireIsarray(),
        M = Object.prototype.toString,
        L = typeof Blob == "function" || typeof Blob < "u" && M.call(Blob) === "[object BlobConstructor]",
        I = typeof File == "function" || typeof File < "u" && M.call(File) === "[object FileConstructor]";
    hasBinary2 = N;

    function N(R) {
        if (!R || typeof R != "object") return !1;
        if (O(R)) {
            for (var _ = 0, H = R.length; _ < H; _++)
                if (N(R[_])) return !0;
            return !1
        }
        if (typeof Buffer == "function" && Buffer.isBuffer && Buffer.isBuffer(R) || typeof ArrayBuffer == "function" && R instanceof ArrayBuffer || L && R instanceof Blob || I && R instanceof File) return !0;
        if (R.toJSON && typeof R.toJSON == "function" && arguments.length === 1) return N(R.toJSON(), !0);
        for (var G in R)
            if (Object.prototype.hasOwnProperty.call(R, G) && N(R[G])) return !0;
        return !1
    }
    return hasBinary2
}
var arraybuffer_slice, hasRequiredArraybuffer_slice;

function requireArraybuffer_slice() {
    return hasRequiredArraybuffer_slice || (hasRequiredArraybuffer_slice = 1, arraybuffer_slice = function(O, M, L) {
        var I = O.byteLength;
        if (M = M || 0, L = L || I, O.slice) return O.slice(M, L);
        if (M < 0 && (M += I), L < 0 && (L += I), L > I && (L = I), M >= I || M >= L || I === 0) return new ArrayBuffer(0);
        for (var N = new Uint8Array(O), R = new Uint8Array(L - M), _ = M, H = 0; _ < L; _++, H++) R[H] = N[_];
        return R.buffer
    }), arraybuffer_slice
}
var after_1, hasRequiredAfter;

function requireAfter() {
    if (hasRequiredAfter) return after_1;
    hasRequiredAfter = 1, after_1 = O;

    function O(L, I, N) {
        var R = !1;
        return N = N || M, _.count = L, L === 0 ? I() : _;

        function _(H, G) {
            if (_.count <= 0) throw new Error("after called too many times");
            --_.count, H ? (R = !0, I(H), I = N) : _.count === 0 && !R && I(null, G)
        }
    }

    function M() {}
    return after_1
} /*! https://mths.be/utf8js v2.1.2 by @mathias */
var utf8, hasRequiredUtf8;

function requireUtf8() {
    if (hasRequiredUtf8) return utf8;
    hasRequiredUtf8 = 1;
    var O = String.fromCharCode;

    function M(Y) {
        for (var J = [], Z = 0, Q = Y.length, ee, te; Z < Q;) ee = Y.charCodeAt(Z++), ee >= 55296 && ee <= 56319 && Z < Q ? (te = Y.charCodeAt(Z++), (te & 64512) == 56320 ? J.push(((ee & 1023) << 10) + (te & 1023) + 65536) : (J.push(ee), Z--)) : J.push(ee);
        return J
    }

    function L(Y) {
        for (var J = Y.length, Z = -1, Q, ee = ""; ++Z < J;) Q = Y[Z], Q > 65535 && (Q -= 65536, ee += O(Q >>> 10 & 1023 | 55296), Q = 56320 | Q & 1023), ee += O(Q);
        return ee
    }

    function I(Y, J) {
        if (Y >= 55296 && Y <= 57343) {
            if (J) throw Error("Lone surrogate U+" + Y.toString(16).toUpperCase() + " is not a scalar value");
            return !1
        }
        return !0
    }

    function N(Y, J) {
        return O(Y >> J & 63 | 128)
    }

    function R(Y, J) {
        if (!(Y & 4294967168)) return O(Y);
        var Z = "";
        return Y & 4294965248 ? Y & 4294901760 ? !(Y & 4292870144) && (Z = O(Y >> 18 & 7 | 240), Z += N(Y, 12), Z += N(Y, 6)) : (I(Y, J) || (Y = 65533), Z = O(Y >> 12 & 15 | 224), Z += N(Y, 6)) : Z = O(Y >> 6 & 31 | 192), Z += O(Y & 63 | 128), Z
    }

    function _(Y, J) {
        J = J || {};
        for (var Z = J.strict !== !1, Q = M(Y), ee = Q.length, te = -1, se, ne = ""; ++te < ee;) se = Q[te], ne += R(se, Z);
        return ne
    }

    function H() {
        if (K >= W) throw Error("Invalid byte index");
        var Y = z[K] & 255;
        if (K++, (Y & 192) == 128) return Y & 63;
        throw Error("Invalid continuation byte")
    }

    function G(Y) {
        var J, Z, Q, ee, te;
        if (K > W) throw Error("Invalid byte index");
        if (K == W) return !1;
        if (J = z[K] & 255, K++, (J & 128) == 0) return J;
        if ((J & 224) == 192) {
            if (Z = H(), te = (J & 31) << 6 | Z, te >= 128) return te;
            throw Error("Invalid continuation byte")
        }
        if ((J & 240) == 224) {
            if (Z = H(), Q = H(), te = (J & 15) << 12 | Z << 6 | Q, te >= 2048) return I(te, Y) ? te : 65533;
            throw Error("Invalid continuation byte")
        }
        if ((J & 248) == 240 && (Z = H(), Q = H(), ee = H(), te = (J & 7) << 18 | Z << 12 | Q << 6 | ee, te >= 65536 && te <= 1114111)) return te;
        throw Error("Invalid UTF-8 detected")
    }
    var z, W, K;

    function X(Y, J) {
        J = J || {};
        var Z = J.strict !== !1;
        z = M(Y), W = z.length, K = 0;
        for (var Q = [], ee;
            (ee = G(Z)) !== !1;) Q.push(ee);
        return L(Q)
    }
    return utf8 = {
        version: "2.1.2",
        encode: _,
        decode: X
    }, utf8
}
var base64Arraybuffer = {},
    hasRequiredBase64Arraybuffer;

function requireBase64Arraybuffer() {
    return hasRequiredBase64Arraybuffer || (hasRequiredBase64Arraybuffer = 1, function(O) {
        base64Arraybuffer.encode = function(M) {
            var L = new Uint8Array(M),
                I, N = L.length,
                R = "";
            for (I = 0; I < N; I += 3) R += O[L[I] >> 2], R += O[(L[I] & 3) << 4 | L[I + 1] >> 4], R += O[(L[I + 1] & 15) << 2 | L[I + 2] >> 6], R += O[L[I + 2] & 63];
            return N % 3 === 2 ? R = R.substring(0, R.length - 1) + "=" : N % 3 === 1 && (R = R.substring(0, R.length - 2) + "=="), R
        }, base64Arraybuffer.decode = function(M) {
            var L = M.length * .75,
                I = M.length,
                N, R = 0,
                _, H, G, z;
            M[M.length - 1] === "=" && (L--, M[M.length - 2] === "=" && L--);
            var W = new ArrayBuffer(L),
                K = new Uint8Array(W);
            for (N = 0; N < I; N += 4) _ = O.indexOf(M[N]), H = O.indexOf(M[N + 1]), G = O.indexOf(M[N + 2]), z = O.indexOf(M[N + 3]), K[R++] = _ << 2 | H >> 4, K[R++] = (H & 15) << 4 | G >> 2, K[R++] = (G & 3) << 6 | z & 63;
            return W
        }
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")), base64Arraybuffer
}
var blob, hasRequiredBlob;

function requireBlob() {
    if (hasRequiredBlob) return blob;
    hasRequiredBlob = 1;
    var O = typeof O < "u" ? O : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : !1,
        M = function() {
            try {
                var H = new Blob(["hi"]);
                return H.size === 2
            } catch {
                return !1
            }
        }(),
        L = M && function() {
            try {
                var H = new Blob([new Uint8Array([1, 2])]);
                return H.size === 2
            } catch {
                return !1
            }
        }(),
        I = O && O.prototype.append && O.prototype.getBlob;

    function N(H) {
        return H.map(function(G) {
            if (G.buffer instanceof ArrayBuffer) {
                var z = G.buffer;
                if (G.byteLength !== z.byteLength) {
                    var W = new Uint8Array(G.byteLength);
                    W.set(new Uint8Array(z, G.byteOffset, G.byteLength)), z = W.buffer
                }
                return z
            }
            return G
        })
    }

    function R(H, G) {
        G = G || {};
        var z = new O;
        return N(H).forEach(function(W) {
            z.append(W)
        }), G.type ? z.getBlob(G.type) : z.getBlob()
    }

    function _(H, G) {
        return new Blob(N(H), G || {})
    }
    return typeof Blob < "u" && (R.prototype = Blob.prototype, _.prototype = Blob.prototype), blob = function() {
        return M ? L ? Blob : _ : I ? R : void 0
    }(), blob
}
var hasRequiredBrowser$1;

function requireBrowser$1() {
    return hasRequiredBrowser$1 || (hasRequiredBrowser$1 = 1, function(O) {
        var M = requireKeys(),
            L = requireHasBinary2(),
            I = requireArraybuffer_slice(),
            N = requireAfter(),
            R = requireUtf8(),
            _;
        typeof ArrayBuffer < "u" && (_ = requireBase64Arraybuffer());
        var H = typeof navigator < "u" && /Android/i.test(navigator.userAgent),
            G = typeof navigator < "u" && /PhantomJS/i.test(navigator.userAgent),
            z = H || G;
        O.protocol = 3;
        var W = O.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            },
            K = M(W),
            X = {
                type: "error",
                data: "parser error"
            },
            Y = requireBlob();
        O.encodePacket = function(ne, oe, ie, re) {
            typeof oe == "function" && (re = oe, oe = !1), typeof ie == "function" && (re = ie, ie = null);
            var ae = ne.data === void 0 ? void 0 : ne.data.buffer || ne.data;
            if (typeof ArrayBuffer < "u" && ae instanceof ArrayBuffer) return Z(ne, oe, re);
            if (typeof Y < "u" && ae instanceof Y) return ee(ne, oe, re);
            if (ae && ae.base64) return J(ne, re);
            var he = W[ne.type];
            return ne.data !== void 0 && (he += ie ? R.encode(String(ne.data), {
                strict: !1
            }) : String(ne.data)), re("" + he)
        };

        function J(ne, oe) {
            var ie = "b" + O.packets[ne.type] + ne.data.data;
            return oe(ie)
        }

        function Z(ne, oe, ie) {
            if (!oe) return O.encodeBase64Packet(ne, ie);
            var re = ne.data,
                ae = new Uint8Array(re),
                he = new Uint8Array(1 + re.byteLength);
            he[0] = W[ne.type];
            for (var ge = 0; ge < ae.length; ge++) he[ge + 1] = ae[ge];
            return ie(he.buffer)
        }

        function Q(ne, oe, ie) {
            if (!oe) return O.encodeBase64Packet(ne, ie);
            var re = new FileReader;
            return re.onload = function() {
                O.encodePacket({
                    type: ne.type,
                    data: re.result
                }, oe, !0, ie)
            }, re.readAsArrayBuffer(ne.data)
        }

        function ee(ne, oe, ie) {
            if (!oe) return O.encodeBase64Packet(ne, ie);
            if (z) return Q(ne, oe, ie);
            var re = new Uint8Array(1);
            re[0] = W[ne.type];
            var ae = new Y([re.buffer, ne.data]);
            return ie(ae)
        }
        O.encodeBase64Packet = function(ne, oe) {
            var ie = "b" + O.packets[ne.type];
            if (typeof Y < "u" && ne.data instanceof Y) {
                var re = new FileReader;
                return re.onload = function() {
                    var ue = re.result.split(",")[1];
                    oe(ie + ue)
                }, re.readAsDataURL(ne.data)
            }
            var ae;
            try {
                ae = String.fromCharCode.apply(null, new Uint8Array(ne.data))
            } catch {
                for (var he = new Uint8Array(ne.data), ge = new Array(he.length), le = 0; le < he.length; le++) ge[le] = he[le];
                ae = String.fromCharCode.apply(null, ge)
            }
            return ie += btoa(ae), oe(ie)
        }, O.decodePacket = function(ne, oe, ie) {
            if (ne === void 0) return X;
            if (typeof ne == "string") {
                if (ne.charAt(0) === "b") return O.decodeBase64Packet(ne.substr(1), oe);
                if (ie && (ne = te(ne), ne === !1)) return X;
                var ae = ne.charAt(0);
                return Number(ae) != ae || !K[ae] ? X : ne.length > 1 ? {
                    type: K[ae],
                    data: ne.substring(1)
                } : {
                    type: K[ae]
                }
            }
            var re = new Uint8Array(ne),
                ae = re[0],
                he = I(ne, 1);
            return Y && oe === "blob" && (he = new Y([he])), {
                type: K[ae],
                data: he
            }
        };

        function te(ne) {
            try {
                ne = R.decode(ne, {
                    strict: !1
                })
            } catch {
                return !1
            }
            return ne
        }
        O.decodeBase64Packet = function(ne, oe) {
            var ie = K[ne.charAt(0)];
            if (!_) return {
                type: ie,
                data: {
                    base64: !0,
                    data: ne.substr(1)
                }
            };
            var re = _.decode(ne.substr(1));
            return oe === "blob" && Y && (re = new Y([re])), {
                type: ie,
                data: re
            }
        }, O.encodePayload = function(ne, oe, ie) {
            typeof oe == "function" && (ie = oe, oe = null);
            var re = L(ne);
            if (oe && re) return Y && !z ? O.encodePayloadAsBlob(ne, ie) : O.encodePayloadAsArrayBuffer(ne, ie);
            if (!ne.length) return ie("0:");

            function ae(ge) {
                return ge.length + ":" + ge
            }

            function he(ge, le) {
                O.encodePacket(ge, re ? oe : !1, !1, function(ue) {
                    le(null, ae(ue))
                })
            }
            se(ne, he, function(ge, le) {
                return ie(le.join(""))
            })
        };

        function se(ne, oe, ie) {
            for (var re = new Array(ne.length), ae = N(ne.length, ie), he = function(le, ue, de) {
                    oe(ue, function(pe, fe) {
                        re[le] = fe, de(pe, re)
                    })
                }, ge = 0; ge < ne.length; ge++) he(ge, ne[ge], ae)
        }
        O.decodePayload = function(ne, oe, ie) {
            if (typeof ne != "string") return O.decodePayloadAsBinary(ne, oe, ie);
            typeof oe == "function" && (ie = oe, oe = null);
            var re;
            if (ne === "") return ie(X, 0, 1);
            for (var ae = "", he, ge, le = 0, ue = ne.length; le < ue; le++) {
                var de = ne.charAt(le);
                if (de !== ":") {
                    ae += de;
                    continue
                }
                if (ae === "" || ae != (he = Number(ae)) || (ge = ne.substr(le + 1, he), ae != ge.length)) return ie(X, 0, 1);
                if (ge.length) {
                    if (re = O.decodePacket(ge, oe, !1), X.type === re.type && X.data === re.data) return ie(X, 0, 1);
                    var pe = ie(re, le + he, ue);
                    if (pe === !1) return
                }
                le += he, ae = ""
            }
            if (ae !== "") return ie(X, 0, 1)
        }, O.encodePayloadAsArrayBuffer = function(ne, oe) {
            if (!ne.length) return oe(new ArrayBuffer(0));

            function ie(re, ae) {
                O.encodePacket(re, !0, !0, function(he) {
                    return ae(null, he)
                })
            }
            se(ne, ie, function(re, ae) {
                var he = ae.reduce(function(ue, de) {
                        var pe;
                        return typeof de == "string" ? pe = de.length : pe = de.byteLength, ue + pe.toString().length + pe + 2
                    }, 0),
                    ge = new Uint8Array(he),
                    le = 0;
                return ae.forEach(function(ue) {
                    var de = typeof ue == "string",
                        pe = ue;
                    if (de) {
                        for (var fe = new Uint8Array(ue.length), ce = 0; ce < ue.length; ce++) fe[ce] = ue.charCodeAt(ce);
                        pe = fe.buffer
                    }
                    de ? ge[le++] = 0 : ge[le++] = 1;
                    for (var ve = pe.byteLength.toString(), ce = 0; ce < ve.length; ce++) ge[le++] = parseInt(ve[ce]);
                    ge[le++] = 255;
                    for (var fe = new Uint8Array(pe), ce = 0; ce < fe.length; ce++) ge[le++] = fe[ce]
                }), oe(ge.buffer)
            })
        }, O.encodePayloadAsBlob = function(ne, oe) {
            function ie(re, ae) {
                O.encodePacket(re, !0, !0, function(he) {
                    var ge = new Uint8Array(1);
                    if (ge[0] = 1, typeof he == "string") {
                        for (var le = new Uint8Array(he.length), ue = 0; ue < he.length; ue++) le[ue] = he.charCodeAt(ue);
                        he = le.buffer, ge[0] = 0
                    }
                    for (var de = he instanceof ArrayBuffer ? he.byteLength : he.size, pe = de.toString(), fe = new Uint8Array(pe.length + 1), ue = 0; ue < pe.length; ue++) fe[ue] = parseInt(pe[ue]);
                    if (fe[pe.length] = 255, Y) {
                        var ce = new Y([ge.buffer, fe.buffer, he]);
                        ae(null, ce)
                    }
                })
            }
            se(ne, ie, function(re, ae) {
                return oe(new Y(ae))
            })
        }, O.decodePayloadAsBinary = function(ne, oe, ie) {
            typeof oe == "function" && (ie = oe, oe = null);
            for (var re = ne, ae = []; re.byteLength > 0;) {
                for (var he = new Uint8Array(re), ge = he[0] === 0, le = "", ue = 1; he[ue] !== 255; ue++) {
                    if (le.length > 310) return ie(X, 0, 1);
                    le += he[ue]
                }
                re = I(re, 2 + le.length), le = parseInt(le);
                var de = I(re, 0, le);
                if (ge) try {
                    de = String.fromCharCode.apply(null, new Uint8Array(de))
                } catch {
                    var pe = new Uint8Array(de);
                    de = "";
                    for (var ue = 0; ue < pe.length; ue++) de += String.fromCharCode(pe[ue])
                }
                ae.push(de), re = I(re, le)
            }
            var fe = ae.length;
            ae.forEach(function(ce, ve) {
                ie(O.decodePacket(ce, oe, !0), ve, fe)
            })
        }
    }(browser$1)), browser$1
}
var transport, hasRequiredTransport;

function requireTransport() {
    if (hasRequiredTransport) return transport;
    hasRequiredTransport = 1;
    var O = requireBrowser$1(),
        M = requireComponentEmitter();
    transport = L;

    function L(I) {
        this.path = I.path, this.hostname = I.hostname, this.port = I.port, this.secure = I.secure, this.query = I.query, this.timestampParam = I.timestampParam, this.timestampRequests = I.timestampRequests, this.readyState = "", this.agent = I.agent || !1, this.socket = I.socket, this.enablesXDR = I.enablesXDR, this.withCredentials = I.withCredentials, this.pfx = I.pfx, this.key = I.key, this.passphrase = I.passphrase, this.cert = I.cert, this.ca = I.ca, this.ciphers = I.ciphers, this.rejectUnauthorized = I.rejectUnauthorized, this.forceNode = I.forceNode, this.isReactNative = I.isReactNative, this.extraHeaders = I.extraHeaders, this.localAddress = I.localAddress
    }
    return M(L.prototype), L.prototype.onError = function(I, N) {
        var R = new Error(I);
        return R.type = "TransportError", R.description = N, this.emit("error", R), this
    }, L.prototype.open = function() {
        return (this.readyState === "closed" || this.readyState === "") && (this.readyState = "opening", this.doOpen()), this
    }, L.prototype.close = function() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }, L.prototype.send = function(I) {
        if (this.readyState === "open") this.write(I);
        else throw new Error("Transport not open")
    }, L.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, L.prototype.onData = function(I) {
        var N = O.decodePacket(I, this.socket.binaryType);
        this.onPacket(N)
    }, L.prototype.onPacket = function(I) {
        this.emit("packet", I)
    }, L.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close")
    }, transport
}
var parseqs = {},
    hasRequiredParseqs;

function requireParseqs() {
    return hasRequiredParseqs || (hasRequiredParseqs = 1, parseqs.encode = function(O) {
        var M = "";
        for (var L in O) O.hasOwnProperty(L) && (M.length && (M += "&"), M += encodeURIComponent(L) + "=" + encodeURIComponent(O[L]));
        return M
    }, parseqs.decode = function(O) {
        for (var M = {}, L = O.split("&"), I = 0, N = L.length; I < N; I++) {
            var R = L[I].split("=");
            M[decodeURIComponent(R[0])] = decodeURIComponent(R[1])
        }
        return M
    }), parseqs
}
var componentInherit, hasRequiredComponentInherit;

function requireComponentInherit() {
    return hasRequiredComponentInherit || (hasRequiredComponentInherit = 1, componentInherit = function(O, M) {
        var L = function() {};
        L.prototype = M.prototype, O.prototype = new L, O.prototype.constructor = O
    }), componentInherit
}
var yeast_1, hasRequiredYeast;

function requireYeast() {
    if (hasRequiredYeast) return yeast_1;
    hasRequiredYeast = 1;
    var O = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        M = 64,
        L = {},
        I = 0,
        N = 0,
        R;

    function _(z) {
        var W = "";
        do W = O[z % M] + W, z = Math.floor(z / M); while (z > 0);
        return W
    }

    function H(z) {
        var W = 0;
        for (N = 0; N < z.length; N++) W = W * M + L[z.charAt(N)];
        return W
    }

    function G() {
        var z = _(+new Date);
        return z !== R ? (I = 0, R = z) : z + "." + _(I++)
    }
    for (; N < M; N++) L[O[N]] = N;
    return G.encode = _, G.decode = H, yeast_1 = G, yeast_1
}
var browser = {
        exports: {}
    },
    debug = {
        exports: {}
    },
    ms, hasRequiredMs;

function requireMs() {
    if (hasRequiredMs) return ms;
    hasRequiredMs = 1;
    var O = 1e3,
        M = O * 60,
        L = M * 60,
        I = L * 24,
        N = I * 365.25;
    ms = function(z, W) {
        W = W || {};
        var K = typeof z;
        if (K === "string" && z.length > 0) return R(z);
        if (K === "number" && isNaN(z) === !1) return W.long ? H(z) : _(z);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(z))
    };

    function R(z) {
        if (z = String(z), !(z.length > 100)) {
            var W = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(z);
            if (W) {
                var K = parseFloat(W[1]),
                    X = (W[2] || "ms").toLowerCase();
                switch (X) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return K * N;
                    case "days":
                    case "day":
                    case "d":
                        return K * I;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return K * L;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return K * M;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return K * O;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return K;
                    default:
                        return
                }
            }
        }
    }

    function _(z) {
        return z >= I ? Math.round(z / I) + "d" : z >= L ? Math.round(z / L) + "h" : z >= M ? Math.round(z / M) + "m" : z >= O ? Math.round(z / O) + "s" : z + "ms"
    }

    function H(z) {
        return G(z, I, "day") || G(z, L, "hour") || G(z, M, "minute") || G(z, O, "second") || z + " ms"
    }

    function G(z, W, K) {
        if (!(z < W)) return z < W * 1.5 ? Math.floor(z / W) + " " + K : Math.ceil(z / W) + " " + K + "s"
    }
    return ms
}
var hasRequiredDebug;

function requireDebug() {
    return hasRequiredDebug || (hasRequiredDebug = 1, function(O, M) {
        M = O.exports = I.debug = I.default = I, M.coerce = G, M.disable = _, M.enable = R, M.enabled = H, M.humanize = requireMs(), M.instances = [], M.names = [], M.skips = [], M.formatters = {};

        function L(z) {
            var W = 0,
                K;
            for (K in z) W = (W << 5) - W + z.charCodeAt(K), W |= 0;
            return M.colors[Math.abs(W) % M.colors.length]
        }

        function I(z) {
            var W;

            function K() {
                if (K.enabled) {
                    var X = K,
                        Y = +new Date,
                        J = Y - (W || Y);
                    X.diff = J, X.prev = W, X.curr = Y, W = Y;
                    for (var Z = new Array(arguments.length), Q = 0; Q < Z.length; Q++) Z[Q] = arguments[Q];
                    Z[0] = M.coerce(Z[0]), typeof Z[0] != "string" && Z.unshift("%O");
                    var ee = 0;
                    Z[0] = Z[0].replace(/%([a-zA-Z%])/g, function(se, ne) {
                        if (se === "%%") return se;
                        ee++;
                        var oe = M.formatters[ne];
                        if (typeof oe == "function") {
                            var ie = Z[ee];
                            se = oe.call(X, ie), Z.splice(ee, 1), ee--
                        }
                        return se
                    }), M.formatArgs.call(X, Z);
                    var te = K.log || M.log || console.log.bind(console);
                    te.apply(X, Z)
                }
            }
            return K.namespace = z, K.enabled = M.enabled(z), K.useColors = M.useColors(), K.color = L(z), K.destroy = N, typeof M.init == "function" && M.init(K), M.instances.push(K), K
        }

        function N() {
            var z = M.instances.indexOf(this);
            return z !== -1 ? (M.instances.splice(z, 1), !0) : !1
        }

        function R(z) {
            M.save(z), M.names = [], M.skips = [];
            var W, K = (typeof z == "string" ? z : "").split(/[\s,]+/),
                X = K.length;
            for (W = 0; W < X; W++) K[W] && (z = K[W].replace(/\*/g, ".*?"), z[0] === "-" ? M.skips.push(new RegExp("^" + z.substr(1) + "$")) : M.names.push(new RegExp("^" + z + "$")));
            for (W = 0; W < M.instances.length; W++) {
                var Y = M.instances[W];
                Y.enabled = M.enabled(Y.namespace)
            }
        }

        function _() {
            M.enable("")
        }

        function H(z) {
            if (z[z.length - 1] === "*") return !0;
            var W, K;
            for (W = 0, K = M.skips.length; W < K; W++)
                if (M.skips[W].test(z)) return !1;
            for (W = 0, K = M.names.length; W < K; W++)
                if (M.names[W].test(z)) return !0;
            return !1
        }

        function G(z) {
            return z instanceof Error ? z.stack || z.message : z
        }
    }(debug, debug.exports)), debug.exports
}
var hasRequiredBrowser;

function requireBrowser() {
    return hasRequiredBrowser || (hasRequiredBrowser = 1, function(O, M) {
        M = O.exports = requireDebug(), M.log = N, M.formatArgs = I, M.save = R, M.load = _, M.useColors = L, M.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : H(), M.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function L() {
            return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        M.formatters.j = function(G) {
            try {
                return JSON.stringify(G)
            } catch (z) {
                return "[UnexpectedJSONParseError]: " + z.message
            }
        };

        function I(G) {
            var z = this.useColors;
            if (G[0] = (z ? "%c" : "") + this.namespace + (z ? " %c" : " ") + G[0] + (z ? "%c " : " ") + "+" + M.humanize(this.diff), !!z) {
                var W = "color: " + this.color;
                G.splice(1, 0, W, "color: inherit");
                var K = 0,
                    X = 0;
                G[0].replace(/%[a-zA-Z%]/g, function(Y) {
                    Y !== "%%" && (K++, Y === "%c" && (X = K))
                }), G.splice(X, 0, W)
            }
        }

        function N() {
            return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function R(G) {
            try {
                G == null ? M.storage.removeItem("debug") : M.storage.debug = G
            } catch {}
        }

        function _() {
            var G;
            try {
                G = M.storage.debug
            } catch {}
            return !G && typeof process < "u" && "env" in process && (G = define_process_env_default.DEBUG), G
        }
        M.enable(_());

        function H() {
            try {
                return window.localStorage
            } catch {}
        }
    }(browser, browser.exports)), browser.exports
}
var polling, hasRequiredPolling;

function requirePolling() {
    if (hasRequiredPolling) return polling;
    hasRequiredPolling = 1;
    var O = requireTransport(),
        M = requireParseqs(),
        L = requireBrowser$1(),
        I = requireComponentInherit(),
        N = requireYeast(),
        R = requireBrowser()("engine.io-client:polling");
    polling = H;
    var _ = function() {
        var G = requireXmlhttprequest_browser(),
            z = new G({
                xdomain: !1
            });
        return z.responseType != null
    }();

    function H(G) {
        var z = G && G.forceBase64;
        (!_ || z) && (this.supportsBinary = !1), O.call(this, G)
    }
    return I(H, O), H.prototype.name = "polling", H.prototype.doOpen = function() {
        this.poll()
    }, H.prototype.pause = function(G) {
        var z = this;
        this.readyState = "pausing";

        function W() {
            R("paused"), z.readyState = "paused", G()
        }
        if (this.polling || !this.writable) {
            var K = 0;
            this.polling && (R("we are currently polling - waiting to pause"), K++, this.once("pollComplete", function() {
                R("pre-pause polling complete"), --K || W()
            })), this.writable || (R("we are currently writing - waiting to pause"), K++, this.once("drain", function() {
                R("pre-pause writing complete"), --K || W()
            }))
        } else W()
    }, H.prototype.poll = function() {
        R("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
    }, H.prototype.onData = function(G) {
        var z = this;
        R("polling got data %s", G);
        var W = function(K, X, Y) {
            if (z.readyState === "opening" && K.type === "open" && z.onOpen(), K.type === "close") return z.onClose(), !1;
            z.onPacket(K)
        };
        L.decodePayload(G, this.socket.binaryType, W), this.readyState !== "closed" && (this.polling = !1, this.emit("pollComplete"), this.readyState === "open" ? this.poll() : R('ignoring poll - transport state "%s"', this.readyState))
    }, H.prototype.doClose = function() {
        var G = this;

        function z() {
            R("writing close packet"), G.write([{
                type: "close"
            }])
        }
        this.readyState === "open" ? (R("transport open - closing"), z()) : (R("transport not open - deferring close"), this.once("open", z))
    }, H.prototype.write = function(G) {
        var z = this;
        this.writable = !1;
        var W = function() {
            z.writable = !0, z.emit("drain")
        };
        L.encodePayload(G, this.supportsBinary, function(K) {
            z.doWrite(K, W)
        })
    }, H.prototype.uri = function() {
        var G = this.query || {},
            z = this.secure ? "https" : "http",
            W = "";
        this.timestampRequests !== !1 && (G[this.timestampParam] = N()), !this.supportsBinary && !G.sid && (G.b64 = 1), G = M.encode(G), this.port && (z === "https" && Number(this.port) !== 443 || z === "http" && Number(this.port) !== 80) && (W = ":" + this.port), G.length && (G = "?" + G);
        var K = this.hostname.indexOf(":") !== -1;
        return z + "://" + (K ? "[" + this.hostname + "]" : this.hostname) + W + this.path + G
    }, polling
}
var hasRequiredPollingXhr;

function requirePollingXhr() {
    if (hasRequiredPollingXhr) return pollingXhr.exports;
    hasRequiredPollingXhr = 1;
    var O = requireXmlhttprequest_browser(),
        M = requirePolling(),
        L = requireComponentEmitter(),
        I = requireComponentInherit(),
        N = requireBrowser()("engine.io-client:polling-xhr"),
        R = requireGlobalThis_browser();
    pollingXhr.exports = H, pollingXhr.exports.Request = G;

    function _() {}

    function H(K) {
        if (M.call(this, K), this.requestTimeout = K.requestTimeout, this.extraHeaders = K.extraHeaders, typeof location < "u") {
            var X = location.protocol === "https:",
                Y = location.port;
            Y || (Y = X ? 443 : 80), this.xd = typeof location < "u" && K.hostname !== location.hostname || Y !== K.port, this.xs = K.secure !== X
        }
    }
    I(H, M), H.prototype.supportsBinary = !0, H.prototype.request = function(K) {
        return K = K || {}, K.uri = this.uri(), K.xd = this.xd, K.xs = this.xs, K.agent = this.agent || !1, K.supportsBinary = this.supportsBinary, K.enablesXDR = this.enablesXDR, K.withCredentials = this.withCredentials, K.pfx = this.pfx, K.key = this.key, K.passphrase = this.passphrase, K.cert = this.cert, K.ca = this.ca, K.ciphers = this.ciphers, K.rejectUnauthorized = this.rejectUnauthorized, K.requestTimeout = this.requestTimeout, K.extraHeaders = this.extraHeaders, new G(K)
    }, H.prototype.doWrite = function(K, X) {
        var Y = typeof K != "string" && K !== void 0,
            J = this.request({
                method: "POST",
                data: K,
                isBinary: Y
            }),
            Z = this;
        J.on("success", X), J.on("error", function(Q) {
            Z.onError("xhr post error", Q)
        }), this.sendXhr = J
    }, H.prototype.doPoll = function() {
        N("xhr poll");
        var K = this.request(),
            X = this;
        K.on("data", function(Y) {
            X.onData(Y)
        }), K.on("error", function(Y) {
            X.onError("xhr poll error", Y)
        }), this.pollXhr = K
    };

    function G(K) {
        this.method = K.method || "GET", this.uri = K.uri, this.xd = !!K.xd, this.xs = !!K.xs, this.async = K.async !== !1, this.data = K.data !== void 0 ? K.data : null, this.agent = K.agent, this.isBinary = K.isBinary, this.supportsBinary = K.supportsBinary, this.enablesXDR = K.enablesXDR, this.withCredentials = K.withCredentials, this.requestTimeout = K.requestTimeout, this.pfx = K.pfx, this.key = K.key, this.passphrase = K.passphrase, this.cert = K.cert, this.ca = K.ca, this.ciphers = K.ciphers, this.rejectUnauthorized = K.rejectUnauthorized, this.extraHeaders = K.extraHeaders, this.create()
    }
    if (L(G.prototype), G.prototype.create = function() {
            var K = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            K.pfx = this.pfx, K.key = this.key, K.passphrase = this.passphrase, K.cert = this.cert, K.ca = this.ca, K.ciphers = this.ciphers, K.rejectUnauthorized = this.rejectUnauthorized;
            var X = this.xhr = new O(K),
                Y = this;
            try {
                N("xhr open %s: %s", this.method, this.uri), X.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders) {
                        X.setDisableHeaderCheck && X.setDisableHeaderCheck(!0);
                        for (var J in this.extraHeaders) this.extraHeaders.hasOwnProperty(J) && X.setRequestHeader(J, this.extraHeaders[J])
                    }
                } catch {}
                if (this.method === "POST") try {
                    this.isBinary ? X.setRequestHeader("Content-type", "application/octet-stream") : X.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
                try {
                    X.setRequestHeader("Accept", "*/*")
                } catch {}
                "withCredentials" in X && (X.withCredentials = this.withCredentials), this.requestTimeout && (X.timeout = this.requestTimeout), this.hasXDR() ? (X.onload = function() {
                    Y.onLoad()
                }, X.onerror = function() {
                    Y.onError(X.responseText)
                }) : X.onreadystatechange = function() {
                    if (X.readyState === 2) try {
                        var Z = X.getResponseHeader("Content-Type");
                        (Y.supportsBinary && Z === "application/octet-stream" || Z === "application/octet-stream; charset=UTF-8") && (X.responseType = "arraybuffer")
                    } catch {}
                    X.readyState === 4 && (X.status === 200 || X.status === 1223 ? Y.onLoad() : setTimeout(function() {
                        Y.onError(typeof X.status == "number" ? X.status : 0)
                    }, 0))
                }, N("xhr data %s", this.data), X.send(this.data)
            } catch (Z) {
                setTimeout(function() {
                    Y.onError(Z)
                }, 0);
                return
            }
            typeof document < "u" && (this.index = G.requestsCount++, G.requests[this.index] = this)
        }, G.prototype.onSuccess = function() {
            this.emit("success"), this.cleanup()
        }, G.prototype.onData = function(K) {
            this.emit("data", K), this.onSuccess()
        }, G.prototype.onError = function(K) {
            this.emit("error", K), this.cleanup(!0)
        }, G.prototype.cleanup = function(K) {
            if (!(typeof this.xhr > "u" || this.xhr === null)) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = _ : this.xhr.onreadystatechange = _, K) try {
                    this.xhr.abort()
                } catch {}
                typeof document < "u" && delete G.requests[this.index], this.xhr = null
            }
        }, G.prototype.onLoad = function() {
            var K;
            try {
                var X;
                try {
                    X = this.xhr.getResponseHeader("Content-Type")
                } catch {}
                X === "application/octet-stream" || X === "application/octet-stream; charset=UTF-8" ? K = this.xhr.response || this.xhr.responseText : K = this.xhr.responseText
            } catch (Y) {
                this.onError(Y)
            }
            K != null && this.onData(K)
        }, G.prototype.hasXDR = function() {
            return typeof XDomainRequest < "u" && !this.xs && this.enablesXDR
        }, G.prototype.abort = function() {
            this.cleanup()
        }, G.requestsCount = 0, G.requests = {}, typeof document < "u") {
        if (typeof attachEvent == "function") attachEvent("onunload", W);
        else if (typeof addEventListener == "function") {
            var z = "onpagehide" in R ? "pagehide" : "unload";
            addEventListener(z, W, !1)
        }
    }

    function W() {
        for (var K in G.requests) G.requests.hasOwnProperty(K) && G.requests[K].abort()
    }
    return pollingXhr.exports
}
var pollingJsonp, hasRequiredPollingJsonp;

function requirePollingJsonp() {
    if (hasRequiredPollingJsonp) return pollingJsonp;
    hasRequiredPollingJsonp = 1;
    var O = requirePolling(),
        M = requireComponentInherit(),
        L = requireGlobalThis_browser();
    pollingJsonp = H;
    var I = /\n/g,
        N = /\\n/g,
        R;

    function _() {}

    function H(G) {
        O.call(this, G), this.query = this.query || {}, R || (R = L.___eio = L.___eio || []), this.index = R.length;
        var z = this;
        R.push(function(W) {
            z.onData(W)
        }), this.query.j = this.index, typeof addEventListener == "function" && addEventListener("beforeunload", function() {
            z.script && (z.script.onerror = _)
        }, !1)
    }
    return M(H, O), H.prototype.supportsBinary = !1, H.prototype.doClose = function() {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), O.prototype.doClose.call(this)
    }, H.prototype.doPoll = function() {
        var G = this,
            z = document.createElement("script");
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), z.async = !0, z.src = this.uri(), z.onerror = function(X) {
            G.onError("jsonp poll error", X)
        };
        var W = document.getElementsByTagName("script")[0];
        W ? W.parentNode.insertBefore(z, W) : (document.head || document.body).appendChild(z), this.script = z;
        var K = typeof navigator < "u" && /gecko/i.test(navigator.userAgent);
        K && setTimeout(function() {
            var X = document.createElement("iframe");
            document.body.appendChild(X), document.body.removeChild(X)
        }, 100)
    }, H.prototype.doWrite = function(G, z) {
        var W = this;
        if (!this.form) {
            var K = document.createElement("form"),
                X = document.createElement("textarea"),
                Y = this.iframeId = "eio_iframe_" + this.index,
                J;
            K.className = "socketio", K.style.position = "absolute", K.style.top = "-1000px", K.style.left = "-1000px", K.target = Y, K.method = "POST", K.setAttribute("accept-charset", "utf-8"), X.name = "d", K.appendChild(X), document.body.appendChild(K), this.form = K, this.area = X
        }
        this.form.action = this.uri();

        function Z() {
            Q(), z()
        }

        function Q() {
            if (W.iframe) try {
                W.form.removeChild(W.iframe)
            } catch (te) {
                W.onError("jsonp polling iframe removal error", te)
            }
            try {
                var ee = '<iframe src="javascript:0" name="' + W.iframeId + '">';
                J = document.createElement(ee)
            } catch {
                J = document.createElement("iframe"), J.name = W.iframeId, J.src = "javascript:0"
            }
            J.id = W.iframeId, W.form.appendChild(J), W.iframe = J
        }
        Q(), G = G.replace(N, `\\
`), this.area.value = G.replace(I, "\\n");
        try {
            this.form.submit()
        } catch {}
        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
            W.iframe.readyState === "complete" && Z()
        } : this.iframe.onload = Z
    }, pollingJsonp
}
const __viteBrowserExternal = {},
    __viteBrowserExternal$1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: __viteBrowserExternal
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    require$$6 = getAugmentedNamespace(__viteBrowserExternal$1);
var websocket, hasRequiredWebsocket;

function requireWebsocket() {
    if (hasRequiredWebsocket) return websocket;
    hasRequiredWebsocket = 1;
    var O = requireTransport(),
        M = requireBrowser$1(),
        L = requireParseqs(),
        I = requireComponentInherit(),
        N = requireYeast(),
        R = requireBrowser()("engine.io-client:websocket"),
        _, H;
    if (typeof WebSocket < "u" ? _ = WebSocket : typeof self < "u" && (_ = self.WebSocket || self.MozWebSocket), typeof window > "u") try {
        H = require$$6
    } catch {}
    var G = _ || H;
    websocket = z;

    function z(W) {
        var K = W && W.forceBase64;
        K && (this.supportsBinary = !1), this.perMessageDeflate = W.perMessageDeflate, this.usingBrowserWebSocket = _ && !W.forceNode, this.protocols = W.protocols, this.usingBrowserWebSocket || (G = H), O.call(this, W)
    }
    return I(z, O), z.prototype.name = "websocket", z.prototype.supportsBinary = !0, z.prototype.doOpen = function() {
        if (this.check()) {
            var W = this.uri(),
                K = this.protocols,
                X = {};
            this.isReactNative || (X.agent = this.agent, X.perMessageDeflate = this.perMessageDeflate, X.pfx = this.pfx, X.key = this.key, X.passphrase = this.passphrase, X.cert = this.cert, X.ca = this.ca, X.ciphers = this.ciphers, X.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (X.headers = this.extraHeaders), this.localAddress && (X.localAddress = this.localAddress);
            try {
                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? K ? new G(W, K) : new G(W) : new G(W, K, X)
            } catch (Y) {
                return this.emit("error", Y)
            }
            this.ws.binaryType === void 0 && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
        }
    }, z.prototype.addEventListeners = function() {
        var W = this;
        this.ws.onopen = function() {
            W.onOpen()
        }, this.ws.onclose = function() {
            W.onClose()
        }, this.ws.onmessage = function(K) {
            W.onData(K.data)
        }, this.ws.onerror = function(K) {
            W.onError("websocket error", K)
        }
    }, z.prototype.write = function(W) {
        var K = this;
        this.writable = !1;
        for (var X = W.length, Y = 0, J = X; Y < J; Y++)(function(Q) {
            M.encodePacket(Q, K.supportsBinary, function(ee) {
                if (!K.usingBrowserWebSocket) {
                    var te = {};
                    if (Q.options && (te.compress = Q.options.compress), K.perMessageDeflate) {
                        var se = typeof ee == "string" ? Buffer.byteLength(ee) : ee.length;
                        se < K.perMessageDeflate.threshold && (te.compress = !1)
                    }
                }
                try {
                    K.usingBrowserWebSocket ? K.ws.send(ee) : K.ws.send(ee, te)
                } catch {
                    R("websocket closed before onclose event")
                }--X || Z()
            })
        })(W[Y]);

        function Z() {
            K.emit("flush"), setTimeout(function() {
                K.writable = !0, K.emit("drain")
            }, 0)
        }
    }, z.prototype.onClose = function() {
        O.prototype.onClose.call(this)
    }, z.prototype.doClose = function() {
        typeof this.ws < "u" && this.ws.close()
    }, z.prototype.uri = function() {
        var W = this.query || {},
            K = this.secure ? "wss" : "ws",
            X = "";
        this.port && (K === "wss" && Number(this.port) !== 443 || K === "ws" && Number(this.port) !== 80) && (X = ":" + this.port), this.timestampRequests && (W[this.timestampParam] = N()), this.supportsBinary || (W.b64 = 1), W = L.encode(W), W.length && (W = "?" + W);
        var Y = this.hostname.indexOf(":") !== -1;
        return K + "://" + (Y ? "[" + this.hostname + "]" : this.hostname) + X + this.path + W
    }, z.prototype.check = function() {
        return !!G && !("__initialize" in G && this.name === z.prototype.name)
    }, websocket
}
var hasRequiredTransports;

function requireTransports() {
    if (hasRequiredTransports) return transports;
    hasRequiredTransports = 1;
    var O = requireXmlhttprequest_browser(),
        M = requirePollingXhr(),
        L = requirePollingJsonp(),
        I = requireWebsocket();
    transports.polling = N, transports.websocket = I;

    function N(R) {
        var _, H = !1,
            G = !1,
            z = R.jsonp !== !1;
        if (typeof location < "u") {
            var W = location.protocol === "https:",
                K = location.port;
            K || (K = W ? 443 : 80), H = R.hostname !== location.hostname || K !== R.port, G = R.secure !== W
        }
        if (R.xdomain = H, R.xscheme = G, _ = new O(R), "open" in _ && !R.forceJSONP) return new M(R);
        if (!z) throw new Error("JSONP disabled");
        return new L(R)
    }
    return transports
}
var indexof, hasRequiredIndexof;

function requireIndexof() {
    if (hasRequiredIndexof) return indexof;
    hasRequiredIndexof = 1;
    var O = [].indexOf;
    return indexof = function(M, L) {
        if (O) return M.indexOf(L);
        for (var I = 0; I < M.length; ++I)
            if (M[I] === L) return I;
        return -1
    }, indexof
}
var socket$1, hasRequiredSocket$1;

function requireSocket$1() {
    if (hasRequiredSocket$1) return socket$1;
    hasRequiredSocket$1 = 1;
    var O = requireTransports(),
        M = requireComponentEmitter(),
        L = requireBrowser()("engine.io-client:socket"),
        I = requireIndexof(),
        N = requireBrowser$1(),
        R = requireParseuri(),
        _ = requireParseqs();
    socket$1 = H;

    function H(z, W) {
        if (!(this instanceof H)) return new H(z, W);
        W = W || {}, z && typeof z == "object" && (W = z, z = null), z ? (z = R(z), W.hostname = z.host, W.secure = z.protocol === "https" || z.protocol === "wss", W.port = z.port, z.query && (W.query = z.query)) : W.host && (W.hostname = R(W.host).host), this.secure = W.secure != null ? W.secure : typeof location < "u" && location.protocol === "https:", W.hostname && !W.port && (W.port = this.secure ? "443" : "80"), this.agent = W.agent || !1, this.hostname = W.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = W.port || (typeof location < "u" && location.port ? location.port : this.secure ? 443 : 80), this.query = W.query || {}, typeof this.query == "string" && (this.query = _.decode(this.query)), this.upgrade = W.upgrade !== !1, this.path = (W.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!W.forceJSONP, this.jsonp = W.jsonp !== !1, this.forceBase64 = !!W.forceBase64, this.enablesXDR = !!W.enablesXDR, this.withCredentials = W.withCredentials !== !1, this.timestampParam = W.timestampParam || "t", this.timestampRequests = W.timestampRequests, this.transports = W.transports || ["polling", "websocket"], this.transportOptions = W.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = W.policyPort || 843, this.rememberUpgrade = W.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = W.onlyBinaryUpgrades, this.perMessageDeflate = W.perMessageDeflate !== !1 ? W.perMessageDeflate || {} : !1, this.perMessageDeflate === !0 && (this.perMessageDeflate = {}), this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024), this.pfx = W.pfx || void 0, this.key = W.key || void 0, this.passphrase = W.passphrase || void 0, this.cert = W.cert || void 0, this.ca = W.ca || void 0, this.ciphers = W.ciphers || void 0, this.rejectUnauthorized = W.rejectUnauthorized === void 0 ? !0 : W.rejectUnauthorized, this.forceNode = !!W.forceNode, this.isReactNative = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative", (typeof self > "u" || this.isReactNative) && (W.extraHeaders && Object.keys(W.extraHeaders).length > 0 && (this.extraHeaders = W.extraHeaders), W.localAddress && (this.localAddress = W.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
    }
    H.priorWebsocketSuccess = !1, M(H.prototype), H.protocol = N.protocol, H.Socket = H, H.Transport = requireTransport(), H.transports = requireTransports(), H.parser = requireBrowser$1(), H.prototype.createTransport = function(z) {
        L('creating transport "%s"', z);
        var W = G(this.query);
        W.EIO = N.protocol, W.transport = z;
        var K = this.transportOptions[z] || {};
        this.id && (W.sid = this.id);
        var X = new O[z]({
            query: W,
            socket: this,
            agent: K.agent || this.agent,
            hostname: K.hostname || this.hostname,
            port: K.port || this.port,
            secure: K.secure || this.secure,
            path: K.path || this.path,
            forceJSONP: K.forceJSONP || this.forceJSONP,
            jsonp: K.jsonp || this.jsonp,
            forceBase64: K.forceBase64 || this.forceBase64,
            enablesXDR: K.enablesXDR || this.enablesXDR,
            withCredentials: K.withCredentials || this.withCredentials,
            timestampRequests: K.timestampRequests || this.timestampRequests,
            timestampParam: K.timestampParam || this.timestampParam,
            policyPort: K.policyPort || this.policyPort,
            pfx: K.pfx || this.pfx,
            key: K.key || this.key,
            passphrase: K.passphrase || this.passphrase,
            cert: K.cert || this.cert,
            ca: K.ca || this.ca,
            ciphers: K.ciphers || this.ciphers,
            rejectUnauthorized: K.rejectUnauthorized || this.rejectUnauthorized,
            perMessageDeflate: K.perMessageDeflate || this.perMessageDeflate,
            extraHeaders: K.extraHeaders || this.extraHeaders,
            forceNode: K.forceNode || this.forceNode,
            localAddress: K.localAddress || this.localAddress,
            requestTimeout: K.requestTimeout || this.requestTimeout,
            protocols: K.protocols || void 0,
            isReactNative: this.isReactNative
        });
        return X
    };

    function G(z) {
        var W = {};
        for (var K in z) z.hasOwnProperty(K) && (W[K] = z[K]);
        return W
    }
    return H.prototype.open = function() {
        var z;
        if (this.rememberUpgrade && H.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) z = "websocket";
        else if (this.transports.length === 0) {
            var W = this;
            setTimeout(function() {
                W.emit("error", "No transports available")
            }, 0);
            return
        } else z = this.transports[0];
        this.readyState = "opening";
        try {
            z = this.createTransport(z)
        } catch {
            this.transports.shift(), this.open();
            return
        }
        z.open(), this.setTransport(z)
    }, H.prototype.setTransport = function(z) {
        L("setting transport %s", z.name);
        var W = this;
        this.transport && (L("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = z, z.on("drain", function() {
            W.onDrain()
        }).on("packet", function(K) {
            W.onPacket(K)
        }).on("error", function(K) {
            W.onError(K)
        }).on("close", function() {
            W.onClose("transport close")
        })
    }, H.prototype.probe = function(z) {
        L('probing transport "%s"', z);
        var W = this.createTransport(z, {
                probe: 1
            }),
            K = !1,
            X = this;
        H.priorWebsocketSuccess = !1;

        function Y() {
            if (X.onlyBinaryUpgrades) {
                var ne = !this.supportsBinary && X.transport.supportsBinary;
                K = K || ne
            }
            K || (L('probe transport "%s" opened', z), W.send([{
                type: "ping",
                data: "probe"
            }]), W.once("packet", function(oe) {
                if (!K)
                    if (oe.type === "pong" && oe.data === "probe") {
                        if (L('probe transport "%s" pong', z), X.upgrading = !0, X.emit("upgrading", W), !W) return;
                        H.priorWebsocketSuccess = W.name === "websocket", L('pausing current transport "%s"', X.transport.name), X.transport.pause(function() {
                            K || X.readyState !== "closed" && (L("changing transport and sending upgrade packet"), se(), X.setTransport(W), W.send([{
                                type: "upgrade"
                            }]), X.emit("upgrade", W), W = null, X.upgrading = !1, X.flush())
                        })
                    } else {
                        L('probe transport "%s" failed', z);
                        var ie = new Error("probe error");
                        ie.transport = W.name, X.emit("upgradeError", ie)
                    }
            }))
        }

        function J() {
            K || (K = !0, se(), W.close(), W = null)
        }

        function Z(ne) {
            var oe = new Error("probe error: " + ne);
            oe.transport = W.name, J(), L('probe transport "%s" failed because of error: %s', z, ne), X.emit("upgradeError", oe)
        }

        function Q() {
            Z("transport closed")
        }

        function ee() {
            Z("socket closed")
        }

        function te(ne) {
            W && ne.name !== W.name && (L('"%s" works - aborting "%s"', ne.name, W.name), J())
        }

        function se() {
            W.removeListener("open", Y), W.removeListener("error", Z), W.removeListener("close", Q), X.removeListener("close", ee), X.removeListener("upgrading", te)
        }
        W.once("open", Y), W.once("error", Z), W.once("close", Q), this.once("close", ee), this.once("upgrading", te), W.open()
    }, H.prototype.onOpen = function() {
        if (L("socket open"), this.readyState = "open", H.priorWebsocketSuccess = this.transport.name === "websocket", this.emit("open"), this.flush(), this.readyState === "open" && this.upgrade && this.transport.pause) {
            L("starting upgrade probes");
            for (var z = 0, W = this.upgrades.length; z < W; z++) this.probe(this.upgrades[z])
        }
    }, H.prototype.onPacket = function(z) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (L('socket receive: type "%s", data "%s"', z.type, z.data), this.emit("packet", z), this.emit("heartbeat"), z.type) {
            case "open":
                this.onHandshake(JSON.parse(z.data));
                break;
            case "pong":
                this.setPing(), this.emit("pong");
                break;
            case "error":
                var W = new Error("server error");
                W.code = z.data, this.onError(W);
                break;
            case "message":
                this.emit("data", z.data), this.emit("message", z.data);
                break
        } else L('packet received with socket readyState "%s"', this.readyState)
    }, H.prototype.onHandshake = function(z) {
        this.emit("handshake", z), this.id = z.sid, this.transport.query.sid = z.sid, this.upgrades = this.filterUpgrades(z.upgrades), this.pingInterval = z.pingInterval, this.pingTimeout = z.pingTimeout, this.onOpen(), this.readyState !== "closed" && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
    }, H.prototype.onHeartbeat = function(z) {
        clearTimeout(this.pingTimeoutTimer);
        var W = this;
        W.pingTimeoutTimer = setTimeout(function() {
            W.readyState !== "closed" && W.onClose("ping timeout")
        }, z || W.pingInterval + W.pingTimeout)
    }, H.prototype.setPing = function() {
        var z = this;
        clearTimeout(z.pingIntervalTimer), z.pingIntervalTimer = setTimeout(function() {
            L("writing ping packet - expecting pong within %sms", z.pingTimeout), z.ping(), z.onHeartbeat(z.pingTimeout)
        }, z.pingInterval)
    }, H.prototype.ping = function() {
        var z = this;
        this.sendPacket("ping", function() {
            z.emit("ping")
        })
    }, H.prototype.onDrain = function() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit("drain") : this.flush()
    }, H.prototype.flush = function() {
        this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length && (L("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
    }, H.prototype.write = H.prototype.send = function(z, W, K) {
        return this.sendPacket("message", z, W, K), this
    }, H.prototype.sendPacket = function(z, W, K, X) {
        if (typeof W == "function" && (X = W, W = void 0), typeof K == "function" && (X = K, K = null), !(this.readyState === "closing" || this.readyState === "closed")) {
            K = K || {}, K.compress = K.compress !== !1;
            var Y = {
                type: z,
                data: W,
                options: K
            };
            this.emit("packetCreate", Y), this.writeBuffer.push(Y), X && this.once("flush", X), this.flush()
        }
    }, H.prototype.close = function() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.readyState = "closing";
            var z = this;
            this.writeBuffer.length ? this.once("drain", function() {
                this.upgrading ? X() : W()
            }) : this.upgrading ? X() : W()
        }

        function W() {
            z.onClose("forced close"), L("socket closing - telling transport to close"), z.transport.close()
        }

        function K() {
            z.removeListener("upgrade", K), z.removeListener("upgradeError", K), W()
        }

        function X() {
            z.once("upgrade", K), z.once("upgradeError", K)
        }
        return this
    }, H.prototype.onError = function(z) {
        L("socket error %j", z), H.priorWebsocketSuccess = !1, this.emit("error", z), this.onClose("transport error", z)
    }, H.prototype.onClose = function(z, W) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            L('socket close with reason: "%s"', z);
            var K = this;
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", z, W), K.writeBuffer = [], K.prevBufferLen = 0
        }
    }, H.prototype.filterUpgrades = function(z) {
        for (var W = [], K = 0, X = z.length; K < X; K++) ~I(this.transports, z[K]) && W.push(z[K]);
        return W
    }, socket$1
}
var hasRequiredLib$1;

function requireLib$1() {
    return hasRequiredLib$1 || (hasRequiredLib$1 = 1, lib.exports = requireSocket$1(), lib.exports.parser = requireBrowser$1()), lib.exports
}
var socket = {
        exports: {}
    },
    toArray_1, hasRequiredToArray;

function requireToArray() {
    if (hasRequiredToArray) return toArray_1;
    hasRequiredToArray = 1, toArray_1 = O;

    function O(M, L) {
        var I = [];
        L = L || 0;
        for (var N = L || 0; N < M.length; N++) I[N - L] = M[N];
        return I
    }
    return toArray_1
}
var on_1, hasRequiredOn;

function requireOn() {
    if (hasRequiredOn) return on_1;
    hasRequiredOn = 1, on_1 = O;

    function O(M, L, I) {
        return M.on(L, I), {
            destroy: function() {
                M.removeListener(L, I)
            }
        }
    }
    return on_1
}
var componentBind, hasRequiredComponentBind;

function requireComponentBind() {
    if (hasRequiredComponentBind) return componentBind;
    hasRequiredComponentBind = 1;
    var O = [].slice;
    return componentBind = function(M, L) {
        if (typeof L == "string" && (L = M[L]), typeof L != "function") throw new Error("bind() requires a function");
        var I = O.call(arguments, 2);
        return function() {
            return L.apply(M, I.concat(O.call(arguments)))
        }
    }, componentBind
}
var hasRequiredSocket;

function requireSocket() {
    return hasRequiredSocket || (hasRequiredSocket = 1, function(O, M) {
        var L = requireSocket_ioParser(),
            I = requireComponentEmitter(),
            N = requireToArray(),
            R = requireOn(),
            _ = requireComponentBind(),
            H = requireBrowser$3()("socket.io-client:socket"),
            G = requireParseqs(),
            z = requireHasBinary2();
        O.exports = X;
        var W = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                connecting: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1,
                ping: 1,
                pong: 1
            },
            K = I.prototype.emit;

        function X(Y, J, Z) {
            this.io = Y, this.nsp = J, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, Z && Z.query && (this.query = Z.query), this.io.autoConnect && this.open()
        }
        I(X.prototype), X.prototype.subEvents = function() {
            if (!this.subs) {
                var Y = this.io;
                this.subs = [R(Y, "open", _(this, "onopen")), R(Y, "packet", _(this, "onpacket")), R(Y, "close", _(this, "onclose"))]
            }
        }, X.prototype.open = X.prototype.connect = function() {
            return this.connected ? this : (this.subEvents(), this.io.reconnecting || this.io.open(), this.io.readyState === "open" && this.onopen(), this.emit("connecting"), this)
        }, X.prototype.send = function() {
            var Y = N(arguments);
            return Y.unshift("message"), this.emit.apply(this, Y), this
        }, X.prototype.emit = function(Y) {
            if (W.hasOwnProperty(Y)) return K.apply(this, arguments), this;
            var J = N(arguments),
                Z = {
                    type: (this.flags.binary !== void 0 ? this.flags.binary : z(J)) ? L.BINARY_EVENT : L.EVENT,
                    data: J
                };
            return Z.options = {}, Z.options.compress = !this.flags || this.flags.compress !== !1, typeof J[J.length - 1] == "function" && (H("emitting packet with ack id %d", this.ids), this.acks[this.ids] = J.pop(), Z.id = this.ids++), this.connected ? this.packet(Z) : this.sendBuffer.push(Z), this.flags = {}, this
        }, X.prototype.packet = function(Y) {
            Y.nsp = this.nsp, this.io.packet(Y)
        }, X.prototype.onopen = function() {
            if (H("transport is open - connecting"), this.nsp !== "/")
                if (this.query) {
                    var Y = typeof this.query == "object" ? G.encode(this.query) : this.query;
                    H("sending connect packet with query %s", Y), this.packet({
                        type: L.CONNECT,
                        query: Y
                    })
                } else this.packet({
                    type: L.CONNECT
                })
        }, X.prototype.onclose = function(Y) {
            H("close (%s)", Y), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", Y)
        }, X.prototype.onpacket = function(Y) {
            var J = Y.nsp === this.nsp,
                Z = Y.type === L.ERROR && Y.nsp === "/";
            if (!(!J && !Z)) switch (Y.type) {
                case L.CONNECT:
                    this.onconnect();
                    break;
                case L.EVENT:
                    this.onevent(Y);
                    break;
                case L.BINARY_EVENT:
                    this.onevent(Y);
                    break;
                case L.ACK:
                    this.onack(Y);
                    break;
                case L.BINARY_ACK:
                    this.onack(Y);
                    break;
                case L.DISCONNECT:
                    this.ondisconnect();
                    break;
                case L.ERROR:
                    this.emit("error", Y.data);
                    break
            }
        }, X.prototype.onevent = function(Y) {
            var J = Y.data || [];
            H("emitting event %j", J), Y.id != null && (H("attaching ack callback to event"), J.push(this.ack(Y.id))), this.connected ? K.apply(this, J) : this.receiveBuffer.push(J)
        }, X.prototype.ack = function(Y) {
            var J = this,
                Z = !1;
            return function() {
                if (!Z) {
                    Z = !0;
                    var Q = N(arguments);
                    H("sending ack %j", Q), J.packet({
                        type: z(Q) ? L.BINARY_ACK : L.ACK,
                        id: Y,
                        data: Q
                    })
                }
            }
        }, X.prototype.onack = function(Y) {
            var J = this.acks[Y.id];
            typeof J == "function" ? (H("calling ack %s with %j", Y.id, Y.data), J.apply(this, Y.data), delete this.acks[Y.id]) : H("bad ack %s", Y.id)
        }, X.prototype.onconnect = function() {
            this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
        }, X.prototype.emitBuffered = function() {
            var Y;
            for (Y = 0; Y < this.receiveBuffer.length; Y++) K.apply(this, this.receiveBuffer[Y]);
            for (this.receiveBuffer = [], Y = 0; Y < this.sendBuffer.length; Y++) this.packet(this.sendBuffer[Y]);
            this.sendBuffer = []
        }, X.prototype.ondisconnect = function() {
            H("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
        }, X.prototype.destroy = function() {
            if (this.subs) {
                for (var Y = 0; Y < this.subs.length; Y++) this.subs[Y].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }, X.prototype.close = X.prototype.disconnect = function() {
            return this.connected && (H("performing disconnect (%s)", this.nsp), this.packet({
                type: L.DISCONNECT
            })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
        }, X.prototype.compress = function(Y) {
            return this.flags.compress = Y, this
        }, X.prototype.binary = function(Y) {
            return this.flags.binary = Y, this
        }
    }(socket)), socket.exports
}
var backo2, hasRequiredBacko2;

function requireBacko2() {
    if (hasRequiredBacko2) return backo2;
    hasRequiredBacko2 = 1, backo2 = O;

    function O(M) {
        M = M || {}, this.ms = M.min || 100, this.max = M.max || 1e4, this.factor = M.factor || 2, this.jitter = M.jitter > 0 && M.jitter <= 1 ? M.jitter : 0, this.attempts = 0
    }
    return O.prototype.duration = function() {
        var M = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var L = Math.random(),
                I = Math.floor(L * this.jitter * M);
            M = Math.floor(L * 10) & 1 ? M + I : M - I
        }
        return Math.min(M, this.max) | 0
    }, O.prototype.reset = function() {
        this.attempts = 0
    }, O.prototype.setMin = function(M) {
        this.ms = M
    }, O.prototype.setMax = function(M) {
        this.max = M
    }, O.prototype.setJitter = function(M) {
        this.jitter = M
    }, backo2
}
var manager$1, hasRequiredManager;

function requireManager() {
    if (hasRequiredManager) return manager$1;
    hasRequiredManager = 1;
    var O = requireLib$1(),
        M = requireSocket(),
        L = requireComponentEmitter(),
        I = requireSocket_ioParser(),
        N = requireOn(),
        R = requireComponentBind(),
        _ = requireBrowser$3()("socket.io-client:manager"),
        H = requireIndexof(),
        G = requireBacko2(),
        z = Object.prototype.hasOwnProperty;
    manager$1 = W;

    function W(K, X) {
        if (!(this instanceof W)) return new W(K, X);
        K && typeof K == "object" && (X = K, K = void 0), X = X || {}, X.path = X.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = X, this.reconnection(X.reconnection !== !1), this.reconnectionAttempts(X.reconnectionAttempts || 1 / 0), this.reconnectionDelay(X.reconnectionDelay || 1e3), this.reconnectionDelayMax(X.reconnectionDelayMax || 5e3), this.randomizationFactor(X.randomizationFactor || .5), this.backoff = new G({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(X.timeout == null ? 2e4 : X.timeout), this.readyState = "closed", this.uri = K, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var Y = X.parser || I;
        this.encoder = new Y.Encoder, this.decoder = new Y.Decoder, this.autoConnect = X.autoConnect !== !1, this.autoConnect && this.open()
    }
    return W.prototype.emitAll = function() {
        this.emit.apply(this, arguments);
        for (var K in this.nsps) z.call(this.nsps, K) && this.nsps[K].emit.apply(this.nsps[K], arguments)
    }, W.prototype.updateSocketIds = function() {
        for (var K in this.nsps) z.call(this.nsps, K) && (this.nsps[K].id = this.generateId(K))
    }, W.prototype.generateId = function(K) {
        return (K === "/" ? "" : K + "#") + this.engine.id
    }, L(W.prototype), W.prototype.reconnection = function(K) {
        return arguments.length ? (this._reconnection = !!K, this) : this._reconnection
    }, W.prototype.reconnectionAttempts = function(K) {
        return arguments.length ? (this._reconnectionAttempts = K, this) : this._reconnectionAttempts
    }, W.prototype.reconnectionDelay = function(K) {
        return arguments.length ? (this._reconnectionDelay = K, this.backoff && this.backoff.setMin(K), this) : this._reconnectionDelay
    }, W.prototype.randomizationFactor = function(K) {
        return arguments.length ? (this._randomizationFactor = K, this.backoff && this.backoff.setJitter(K), this) : this._randomizationFactor
    }, W.prototype.reconnectionDelayMax = function(K) {
        return arguments.length ? (this._reconnectionDelayMax = K, this.backoff && this.backoff.setMax(K), this) : this._reconnectionDelayMax
    }, W.prototype.timeout = function(K) {
        return arguments.length ? (this._timeout = K, this) : this._timeout
    }, W.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }, W.prototype.open = W.prototype.connect = function(K, X) {
        if (_("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
        _("opening %s", this.uri), this.engine = O(this.uri, this.opts);
        var Y = this.engine,
            J = this;
        this.readyState = "opening", this.skipReconnect = !1;
        var Z = N(Y, "open", function() {
                J.onopen(), K && K()
            }),
            Q = N(Y, "error", function(se) {
                if (_("connect_error"), J.cleanup(), J.readyState = "closed", J.emitAll("connect_error", se), K) {
                    var ne = new Error("Connection error");
                    ne.data = se, K(ne)
                } else J.maybeReconnectOnOpen()
            });
        if (this._timeout !== !1) {
            var ee = this._timeout;
            _("connect attempt will timeout after %d", ee), ee === 0 && Z.destroy();
            var te = setTimeout(function() {
                _("connect attempt timed out after %d", ee), Z.destroy(), Y.close(), Y.emit("error", "timeout"), J.emitAll("connect_timeout", ee)
            }, ee);
            this.subs.push({
                destroy: function() {
                    clearTimeout(te)
                }
            })
        }
        return this.subs.push(Z), this.subs.push(Q), this
    }, W.prototype.onopen = function() {
        _("open"), this.cleanup(), this.readyState = "open", this.emit("open");
        var K = this.engine;
        this.subs.push(N(K, "data", R(this, "ondata"))), this.subs.push(N(K, "ping", R(this, "onping"))), this.subs.push(N(K, "pong", R(this, "onpong"))), this.subs.push(N(K, "error", R(this, "onerror"))), this.subs.push(N(K, "close", R(this, "onclose"))), this.subs.push(N(this.decoder, "decoded", R(this, "ondecoded")))
    }, W.prototype.onping = function() {
        this.lastPing = new Date, this.emitAll("ping")
    }, W.prototype.onpong = function() {
        this.emitAll("pong", new Date - this.lastPing)
    }, W.prototype.ondata = function(K) {
        this.decoder.add(K)
    }, W.prototype.ondecoded = function(K) {
        this.emit("packet", K)
    }, W.prototype.onerror = function(K) {
        _("error", K), this.emitAll("error", K)
    }, W.prototype.socket = function(K, X) {
        var Y = this.nsps[K];
        if (!Y) {
            Y = new M(this, K, X), this.nsps[K] = Y;
            var J = this;
            Y.on("connecting", Z), Y.on("connect", function() {
                Y.id = J.generateId(K)
            }), this.autoConnect && Z()
        }

        function Z() {
            ~H(J.connecting, Y) || J.connecting.push(Y)
        }
        return Y
    }, W.prototype.destroy = function(K) {
        var X = H(this.connecting, K);
        ~X && this.connecting.splice(X, 1), !this.connecting.length && this.close()
    }, W.prototype.packet = function(K) {
        _("writing packet %j", K);
        var X = this;
        K.query && K.type === 0 && (K.nsp += "?" + K.query), X.encoding ? X.packetBuffer.push(K) : (X.encoding = !0, this.encoder.encode(K, function(Y) {
            for (var J = 0; J < Y.length; J++) X.engine.write(Y[J], K.options);
            X.encoding = !1, X.processPacketQueue()
        }))
    }, W.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var K = this.packetBuffer.shift();
            this.packet(K)
        }
    }, W.prototype.cleanup = function() {
        _("cleanup");
        for (var K = this.subs.length, X = 0; X < K; X++) {
            var Y = this.subs.shift();
            Y.destroy()
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
    }, W.prototype.close = W.prototype.disconnect = function() {
        _("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, this.readyState === "opening" && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
    }, W.prototype.onclose = function(K) {
        _("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", K), this._reconnection && !this.skipReconnect && this.reconnect()
    }, W.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect) return this;
        var K = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) _("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
        else {
            var X = this.backoff.duration();
            _("will wait %dms before reconnect attempt", X), this.reconnecting = !0;
            var Y = setTimeout(function() {
                K.skipReconnect || (_("attempting reconnect"), K.emitAll("reconnect_attempt", K.backoff.attempts), K.emitAll("reconnecting", K.backoff.attempts), !K.skipReconnect && K.open(function(J) {
                    J ? (_("reconnect attempt error"), K.reconnecting = !1, K.reconnect(), K.emitAll("reconnect_error", J.data)) : (_("reconnect success"), K.onreconnect())
                }))
            }, X);
            this.subs.push({
                destroy: function() {
                    clearTimeout(Y)
                }
            })
        }
    }, W.prototype.onreconnect = function() {
        var K = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", K)
    }, manager$1
}
var hasRequiredLib;

function requireLib() {
    return hasRequiredLib || (hasRequiredLib = 1, function(O, M) {
        var L = requireUrl(),
            I = requireSocket_ioParser(),
            N = requireManager(),
            R = requireBrowser$3()("socket.io-client");
        O.exports = M = H;
        var _ = M.managers = {};

        function H(G, z) {
            typeof G == "object" && (z = G, G = void 0), z = z || {};
            var W = L(G),
                K = W.source,
                X = W.id,
                Y = W.path,
                J = _[X] && Y in _[X].nsps,
                Z = z.forceNew || z["force new connection"] || z.multiplex === !1 || J,
                Q;
            return Z ? (R("ignoring socket cache for %s", K), Q = N(K, z)) : (_[X] || (R("new io instance for %s", K), _[X] = N(K, z)), Q = _[X]), W.query && !z.query && (z.query = W.query), Q.socket(W.path, z)
        }
        M.protocol = I.protocol, M.connect = H, M.Manager = requireManager(), M.Socket = requireSocket()
    }(lib$1, lib$1.exports)), lib$1.exports
}
var libExports = requireLib(),
    D = Object.defineProperty,
    S = (O, M, L) => M in O ? D(O, M, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: L
    }) : O[M] = L,
    a$1 = (O, M, L) => (S(O, typeof M != "symbol" ? M + "" : M, L), L);
const w = new TextEncoder,
    p$1 = new TextDecoder;
class $ {
    encode(M, L) {
        let I, N, R;
        M.type === 2 ? (I = M.data[0], N = M.data[1]) : (I = "", N = new ArrayBuffer(0)), R = M.id === void 0 ? -1 : M.id;
        let _ = {
            type: M.type,
            namespace: M.nsp,
            event: I,
            data: N,
            ackId: R
        };
        return L([q(_)])
    }
}
let x$1 = class extends A$1 {
    add(O) {
        let M = E(O);
        if (M.type === 5 && (M.type = 2), M.type === 6 && (M.type = 3), M.type === 1) return;
        let L = {
            type: M.type,
            data: M.type === 3 ? [M.data] : [M.event, M.data],
            nsp: M.namespace,
            id: M.ackId
        };
        this.emit("decoded", L)
    }
    destroy() {}
};

function q(O) {
    let M, L, I = O.type,
        N = [];
    if (O.ackId !== -1) {
        I += 128, N.push(Uint8Array.of(I));
        let R = new Uint8Array(4);
        new DataView(R.buffer).setUint32(0, O.ackId), N.push(R)
    } else N.push(Uint8Array.of(I));
    return L = w.encode(O.namespace), N.push(Uint8Array.of(L.length)), N.push(L), M = w.encode(O.event), N.push(Uint8Array.of(M.length)), N.push(M), N.push(new Uint8Array(O.data)), k$1(Uint8Array, ...N).buffer
}

function E(O) {
    let M = 0,
        L, I = -1,
        N, R, _, H;
    const G = new DataView(O, 0);
    return L = G.getUint8(M), M++, L >= 128 && (L %= 128, I = G.getUint32(M), M += 4), H = G.getUint8(M), M++, N = new Uint8Array(O, M, H), M += H, H = G.getUint8(M), M++, R = new Uint8Array(O, M, H), M += H, _ = O.slice(M), {
        type: L,
        data: _,
        namespace: p$1.decode(N),
        event: p$1.decode(R),
        ackId: I
    }
}
const k$1 = (O, ...M) => {
        let L = 0;
        for (let R of M) L += R.length;
        let I = new O(L),
            N = 0;
        for (let R of M) I.set(R, N), N += R.length;
        return I
    },
    j = Object.freeze(Object.defineProperty({
        __proto__: null,
        Decoder: x$1,
        Encoder: $,
        concatenate: k$1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    y$1 = d$1.Reader,
    v$1 = d$1.Writer,
    B = d$1.util,
    g$1 = d$1.roots.default || (d$1.roots.default = {}),
    C = g$1.ResultObj = (() => {
        function O(M) {
            if (M)
                for (let L = Object.keys(M), I = 0; I < L.length; ++I) M[L[I]] != null && (this[L[I]] = M[L[I]])
        }
        return O.prototype.code = 0, O.prototype.msg = "", O.prototype.data = B.newBuffer([]), O.encode = function(M, L) {
            return L || (L = v$1.create()), M.code != null && Object.hasOwnProperty.call(M, "code") && L.uint32(8).sint32(M.code), M.msg != null && Object.hasOwnProperty.call(M, "msg") && L.uint32(18).string(M.msg), M.data != null && Object.hasOwnProperty.call(M, "data") && L.uint32(26).bytes(M.data), L
        }, O.decode = function(M, L) {
            M instanceof y$1 || (M = y$1.create(M));
            let I = L === void 0 ? M.len : M.pos + L,
                N = new g$1.ResultObj;
            for (; M.pos < I;) {
                let R = M.uint32();
                switch (R >>> 3) {
                    case 1:
                        N.code = M.sint32();
                        break;
                    case 2:
                        N.msg = M.string();
                        break;
                    case 3:
                        N.data = M.bytes();
                        break;
                    default:
                        M.skipType(R & 7);
                        break
                }
            }
            return N
        }, O
    })(),
    T = () => __vitePreload(() =>
        import ("./wr_utils.dist-DvgtdgCy-CUXsbV0Z.js"), []).then(O => O.default),
    V = typeof window > "u",
    f$1 = class Ct extends libExports.Manager {
        constructor({
            uris: M
        }, L = Ct.socketOptions) {
            super(M[0].socket, L), a$1(this, "afterRequest", []), a$1(this, "uris"), a$1(this, "isConnecting", !1), a$1(this, "enableSocketConnect", () => {}), a$1(this, "waitSocketConnect", new Promise(I => this.enableSocketConnect = I)), a$1(this, "latency", 0), a$1(this, "socketRequestBind", I => (N, R) => new Promise((_, H) => {
                const G = setTimeout(() => H(new Error(`${I.nsp}/${N}:Socket time out`)), 2e4);
                I.emit(N, R, this.decodeBind(z => {
                    clearTimeout(G);
                    try {
                        for (let W = 0, K = this.afterRequest.length; W < K; W++) this.afterRequest[W](z);
                        z.code === 0 ? _(z.data) : (console.log(`Socket Error: ${I.nsp}:${N}
${JSON.stringify(R)}`), H(new P(z.msg, z.code)))
                    } catch (W) {
                        H(W)
                    }
                }, C))
            })), this.uris = M, this.once("pong", I => {
                let N = I;
                this.on("pong", R => {
                    N = .2 * R + .8 * N, this.latency = N
                })
            })
        }
        open(M) {
            V || this.isConnecting || ~this.readyState.indexOf("open") || (this.isConnecting = !0, this.openWithSign().finally(() => {
                super.open(M), this.isConnecting = !1
            }))
        }
        async openWithSign() {
            try {
                const {
                    sign: M,
                    uri: L,
                    source: I
                } = await this.getSignData();
                await this.waitSocketConnect, this.opts.query = { ...this.opts.query,
                    p: M,
                    t: I
                }, this.uri = L.socket
            } catch {}
        }
        async testSocketRoute(M, L = "") {
            const {
                socket: I,
                test: N = I
            } = M, R = `${N}/test/${L?"?p="+L:""}`, _ = await fetch(R, {
                credentials: "include"
            }).then(H => H.text());
            return {
                uri: M,
                sign: _
            }
        }
        async getSignData() {
            const {
                t1: M,
                t2: L
            } = await T(), I = window.navigator.userAgent.trim(), N = M(I);
            let {
                uri: R,
                sign: _
            } = await Promise.race(this.uris.map(H => this.testSocketRoute(H, N)));
            return {
                sign: L(_, I),
                uri: R,
                source: _
            }
        }
        socket(M) {
            const L = super.socket(M);
            return L.request = this.socketRequestBind(L), L
        }
        addAfterRequest(M) {
            this.afterRequest.push(M)
        }
        decode(M = "utf8") {
            return L => {
                let I;
                if (M === "utf8") I = b$1.decode(L);
                else if (M === "json") I = JSON.parse(b$1.decode(L));
                else if (M === "int8") I = new DataView(L).getUint8(0);
                else if (M === "int32") I = new DataView(L).getUint32(0);
                else if (M === "int64") {
                    let N = new DataView(L);
                    I = new Long(N.getUint32(4), N.getUint32(0)).toNumber()
                } else I = M.decode(new Uint8Array(L));
                return I
            }
        }
        encode(M = "utf8") {
            return L => {
                if (M === "utf8") return U.encode(L);
                if (M === "json") return U.encode(JSON.stringify(L));
                if (M === "int8") return Uint8Array.of(L);
                if (M === "int32") {
                    let I = new Uint8Array(4);
                    return new DataView(I.buffer).setUint32(0, L), I
                } else if (M === "int64") {
                    let I = Long.fromNumber(L),
                        N = new Uint8Array(8),
                        R = new DataView(N.buffer);
                    return R.setUint32(0, I.high), R.setUint32(4, I.low), N
                } else return M.encode(new M(L)).finish()
            }
        }
        decodeBind(M, L = "utf8") {
            const I = this.decode(L);
            return N => M(I(N))
        }
    };
a$1(f$1, "socketOptions", {
    timeout: 2e4,
    reconnectionDelayMax: 1e4,
    transports: ["websocket"],
    autoConnect: !1,
    parser: j,
    query: {}
});
let m$1 = f$1;
const U = new TextEncoder,
    b$1 = new TextDecoder;
class P extends Error {
    constructor(M, L = 0) {
        super(M), a$1(this, "code"), this.code = L
    }
}
const F = () => __vitePreload(() =>
    import ("./wr_utils.dist-DvgtdgCy-CUXsbV0Z.js"), []).then(O => O.default);
let httpReject;

function registHttpReject(O) {
    httpReject = O
}
let http;

function getHttp() {
    return http || (http = axios.create({
        baseURL: "/api"
    }), http.interceptors.request.use(O => (O.cache && (O.baseURL = "/cache", delete O.cache), O.headers = O.headers || {}, O), O => Promise.reject(String(O) + ":REQ!")), http.interceptors.response.use(O => {
        const M = O.data;
        return M.code === 0 ? M.data : ((M.code === 403 || M.code === "403") && window.location.reload(), Promise.reject(new HttpResponseError(M.msg, M.code, M)))
    }, O => O && O.response ? Promise.reject(new ErrorWithTip("Oops!We lost your network, Please have a check!" + O.response.status + O.config.url)) : Promise.reject(new ErrorWithTip("Network error!"))), http.interceptors.response.use(O => O, async O => (httpReject && await httpReject(O), Promise.reject(O)))), http
}
class ErrorWithTip extends Error {
    constructor(M, L) {
        super(M), we(this, "tip"), this.tip = L
    }
}
class HttpResponseError extends Error {
    constructor(M, L, I) {
        super(M), this.code = L, this.response = I
    }
}

function getSocketUri() {
    const {
        protocol: O,
        hostname: M
    } = location;
    if (O === "http:" && ["dev", "localhost", "192"].find(L => M.startsWith(L))) return [{
        socket: `${origin}`,
        test: `${origin}/socketapi`
    }]; {
        const L = M.match(/[^\.]+\.\w+$/);
        return [{
            socket: `${O}//socketv4.${L}`
        }]
    }
}

function addUserReceiptEvent(O, M) {
    const L = getSocket().decodeBind(N => {
            msgReceipt(N) || M(N)
        }, "json"),
        I = getSocket("/user");
    return I.on(O, L), () => I.off(O, L)
}
const msgDict = new Set;

function msgReceipt({
    msgId: O
}) {
    return O ? msgDict.has(O) ? !0 : (getHttp().post("/user/userNotification/received/", {
        msgId: O
    }), msgDict.add(O), !1) : !1
}
let manager = null;

function getSocket(O) {
    return manager || (manager = new m$1({
        uris: getSocketUri()
    })), O === void 0 ? manager : manager.socket(O)
}
const {
    on,
    emit
} = createRoot(() => createEmitter()), app = {
    on,
    emit,
    promisify(O) {
        return (...M) => new Promise(L => {
            emit(O, ...M, I => L(I))
        })
    },
    promisify_new(O) {
        return (...M) => new Promise(L => {
            emit(O, [...M, I => L(I)])
        })
    }
};
app.promisify("get_twostep");

function createPersistedStore(O, M) {
    const L = murmurHash(JSON.stringify(O)).toString(36),
        I = localStorage,
        N = M.name;

    function R() {
        let G = I.getItem(N);
        if (G = G && G.indexOf(L) === -1 ? null : G, !G) return {};
        try {
            return (M.deserialize || JSON.parse)(G)
        } catch {
            return {}
        }
    }
    const _ = R(),
        H = createStore({ ...O,
            __version: L,
            ..._
        });
    return createComputed(() => {
        I.setItem(N, JSON.stringify(H[0]))
    }), H
}
const [setting, setSetting] = createRoot(() => {
    const [O, M] = createPersistedStore({
        lang: "en",
        darken: !0,
        theme: "dark",
        firstVisit: !0,
        preVisitTime: 0
    }, {
        name: "setting"
    });
    return createComputed(() => {
        M("darken", O.theme !== "light")
    }), O.preVisitTime === 0 ? M("preVisitTime", Date.now()) : M("firstVisit", !1), createEffect(() => {
        const L = getSocket(),
            I = L.opts.query;
        L.opts.query = { ...I,
            "Accept-Language": O.lang
        }
    }), [O, M]
});
let remoteSetting = "";
async function getSetting() {
    await new Promise(I => setTimeout(I, 1e3));
    const O = await preAccountReq,
        M = O.login;
    async function L() {
        const I = await preWalletReq;
        return getValidCurrency(I, O)
    }
    if (M) {
        const I = await getHttp().get("/account/setting/ns_user/get/");
        if (I) try {
            const N = JSON.parse(I);
            remoteSetting = JSON.stringify(N);
            const R = await preAccountReq,
                _ = await preWalletReq;
            let H = N.currencyName;
            _.find(z => z.currencyName === H) || (H = getValidCurrency(_, R).currencyName), N.currencyName = H;
            const G = getHostInfo$1();
            return G && (N.localeCurrencyName = G, N.enableLocaleCurrency = !0), N
        } catch {
            return L()
        } else return L()
    } else return L()
}

function getValidCurrency(O, M) {
    const L = M.bonusCurrencyName,
        I = O.reduce((z, W) => (z[W.currencyName] = W, z), {});
    let N = !1,
        R = O.sort((z, W) => Number(W.amount.sub(z.amount)))[0].currencyName,
        _ = "USDFIAT";
    const H = env.localCurrencyConfig.find(z => z[2] === M.areaCode);
    L === "BCD" && I.USDT && I.USDT.display ? R = "USDT" : I[L] && (R = L), L.endsWith("FIAT") ? (_ = L, N = !0) : H && (_ = H[0] + "FIAT", N = !0, !I[L] && I[_] && (R = _));
    const G = O.find(z => z.display && z.currencyName.endsWith("FIAT"));
    return G && (R = G.currencyName, _ = R, N = !0), {
        currencyName: R,
        localeCurrencyName: _,
        enableLocaleCurrency: N
    }
}

function getHostInfo$1() {
    const {
        isNgHost: O,
        isNg2Host: M,
        isIdHost: L,
        isKenyaHost: I,
        isBrAuditHost: N,
        isBrHost: R,
        isMxHost: _
    } = getHostType(env.host);
    let H = "";
    return (O || M) && (H = "NGNFIAT"), L && (H = "INRFIAT"), I && (H = "KESFIAT"), (N || R) && (H = "BRLFIAT"), _ && (H = "MXNFIAT"), H
}
async function saveSetting(O) {
    if (!(remoteSetting && O === remoteSetting || (remoteSetting = O, !preAccountReq) || !(await preAccountReq).login)) return getHttp().post("/account/setting/ns_user/reset/", JSON.parse(O))
}
let preWalletReq = null;
async function getWallet() {
    const O = getHttp().get("/user/amount/");
    return preWalletReq = O, preAccountReq && await preAccountReq, O
}
let preAccountReq = null;
async function getAccount() {
    getHttp().defaults.headers.common["Accept-Language"] = setting.lang;
    const O = getHttp().get("/account/get/");
    preAccountReq = O;
    const M = await O;
    return M.chatRoomPermission || delete M.chatRoomPermission, M
}
const defaultChatRoomPermission = {
        blockable: !1,
        deleteable: !1,
        vipable: !1,
        blockLevel: 0
    },
    initData = {
        name: "",
        avatar: "",
        userAvatarFrameList: [],
        userId: 0,
        uniqueUid: 0,
        uid: 0,
        createTime: 0,
        kyc: 1,
        gameable: !0,
        login: !1,
        email: "",
        loginSource: "",
        open: 0,
        bonusCurrencyName: "",
        avatarUpdateTime: 0,
        vipLevel: 0,
        currXP: 0,
        levelEndXP: 0,
        levelStartXP: 0,
        safePwd: !1,
        google2StepAuth: !1,
        hasPhone: !1,
        chatRoomPermission: defaultChatRoomPermission,
        emailVerified: !1,
        channel: "",
        currentInvitationCode: "",
        areaCode: "",
        showable: !0,
        areaAlert: !1,
        acceptPromotion: !0,
        passwordExist: !1,
        invitationUrl: "",
        serverTimestemp: 0,
        ip: "",
        rayId: "",
        passkeyHasSet: !1,
        appChannelId: 0,
        redirectDomain: "",
        setting: {
            currencyFullName: !1,
            localeCurrencyName: "USDFIAT",
            enableLocaleCurrency: !1,
            currencyName: "BTC",
            currencyBonusType: "",
            hideSmallCurrency: !1,
            lastFiatCurrency: "",
            lastCryptoCurrency: "",
            lastNftCurrency: "",
            soundEffectEnable: !0,
            maxbetAlert: !0,
            allowRechargeSuccessEmail: 1,
            allowWithdrawSuccessEmail: 1,
            lang: "en"
        },
        redDot: {
            systemNotice: 0,
            gameComment: 0
        }
    },
    [account, setAccount, accountInit] = createRoot(() => {
        const [O, M] = createSignal(!1), [L, I] = createPersistedStore(initData, {
            name: "account"
        });
        syncAccount().then(() => {
            N.connect(), getSocket("/game-support").connect(), getSocket().enableSocketConnect(), M(!0)
        }).catch(() => {}), createTimer(() => syncAccount().catch(() => {}), 3e5, setInterval);
        const N = getSocket("/user");
        return createEffect(() => {
            L.login && untrack(() => {
                N.emit("user-login"), getSetting().then(R => {
                    (!R.lang || R.lang !== setting.lang) && (R.lang = setting.lang), I("setting", R)
                }).catch(R => {})
            })
        }), createEffect(R => {
            const _ = JSON.stringify(L.setting);
            return R && saveSetting(_), _
        }), [L, I, O]
    });
async function syncAccount() {
    const O = await getAccount();
    setEnv("timeDiff", Date.now() - (O.serverTimestemp || Date.now())), setAccount(O)
}
async function untilLogin() {
    return until(() => account.login)
}

function useLoginCallback(O, M = "#/login") {
    return (...L) => {
        if (!account.login) {
            useNavigate$1()(M);
            return
        }
        return O(...L)
    }
}

function authGuard(O) {
    return !account.login && `/login/signin?redirect=${encodeURIComponent(O.pathname+O.search)}`
}
const MAX_EXP = 3e9;

function useResource(O, M, L = {}) {
    var I, N;
    const {
        lazy: R,
        version: _,
        initialValue: H,
        expires: G = defaultTime,
        lockLocal: z,
        serialize: W,
        deserialize: K
    } = L, [X, Y] = createSignal(!1), J = createMemo(() => {
        const ie = O();
        if (!ie) return ie;
        const re = JSON.stringify(ie);
        let ae = RefCache.cache.get(re);
        return ae || (ae = new RefCache(re, H, _, z, W, K), RefCache.cache.set(re, ae)), [ie, ae]
    }), Z = createMemo(() => {
        var ie;
        return (ie = J()) == null ? void 0 : ie[1]
    }), Q = createSignal((N = (I = Z()) == null ? void 0 : I.get(!0)) == null ? void 0 : N.data), [ee, te] = createSignal(!!Q[0]());
    createComputed(() => {
        const ie = Z();
        ie && onCleanup(ie.ref(Q[1], R))
    });
    const [se, {
        mutate: ne,
        refetch: oe
    }] = createResource(J, ([ie, re], ae) => {
        function he() {
            var ue;
            return (ue = re.get(!0)) == null ? void 0 : ue.data
        }

        function ge() {
            function ue() {
                const ce = re.get();
                if (ce && ce.ver === _) return ce.data
            }
            if (!ae.refetching) {
                if (re.pending) return re.pending.then(() => ue() || de());
                const ce = ue();
                if (ce) return ce
            }

            function de() {
                const ce = fe();
                return Y(!0), re.set(ce).then(() => (batch(() => {
                    Y(!1), te(!1)
                }), he()))
            }

            function pe(ce) {
                return Math.min(ce, MAX_EXP)
            }
            async function fe() {
                const ce = {
                        data: await M(ie, ae),
                        ver: _
                    },
                    ve = pe(G),
                    be = Date.now();
                return ce.ts = be + ve, ce
            }
            return de()
        }
        const le = ge();
        if (le instanceof Promise) {
            const ue = he();
            return ue ? (le.then(de => re.update(de)), ae.refetching ? le : ue) : le
        } else return le
    }, {
        initialValue: H,
        storage: () => Q
    });
    return [se, {
        cache: ee,
        mutate: ne,
        refetch: oe,
        pending: createMemo(() => se.loading || X())
    }]
}
const defaultTime = 3e5,
    prefix = "__rc-",
    defaultSerialize = O => O,
    Oe = class Je {
        constructor(M, L, I, N = !1, R = defaultSerialize, _ = defaultSerialize) {
            we(this, "data"), we(this, "count", 0), we(this, "die", !1), we(this, "lock"), we(this, "lockLocal"), we(this, "pending"), we(this, "timer", -1), we(this, "storage", []), we(this, "hash"), we(this, "serialize"), we(this, "deserialize"), this.key = M, this.hash = I ? `${prefix}${murmurHash(M).toString(16)}` : "", this.lockLocal = N, this.serialize = R, this.deserialize = _;
            const H = L ? {
                    data: L,
                    ver: I,
                    ts: -1
                } : void 0,
                G = I !== void 0 ? this.resotre(I) : void 0;
            this.data = G || H
        }
        update(M) {
            for (const L of this.storage) L(M)
        }
        resotre(M) {
            const L = localStorage.getItem(this.hash);
            if (L) try {
                const I = JSON.parse(L);
                I.data = this.deserialize(I.data);
                const N = Date.now();
                if (I.ts > N && I.ver === M) return I.ts = N, I;
                localStorage.removeItem(this.hash)
            } catch {}
        }
        ref(M, L = !1) {
            return L && this.count++, this.storage.push(M), () => {
                const I = this.storage.indexOf(M);
                L && (this.count--, this.storage.splice(I, 1), this.count === 0 && (this.lock = void 0, this.die && Je.delete(this.key)))
            }
        }
        get(M = !1) {
            const L = this.lock || this.data;
            if (L) {
                const I = Date.now();
                if (M || L.ts > I) return L
            }
        }
        async set(M) {
            var L;
            this.pending = M;
            try {
                const I = await M;
                this.count > 0 && (this.lock = this.lock || (((L = this.data) == null ? void 0 : L.ts) !== -1 ? this.data : I) || I, this.lock.ts = I.ts), this.data = I;
                const N = Date.now(),
                    R = I.ts - N;
                I.ver !== void 0 && localStorage.setItem(this.hash, JSON.stringify({ ...I,
                    data: this.serialize(I.data),
                    ts: this.lockLocal ? MAX_EXP + N : I.ts
                })), this.timer > 0 && clearTimeout(this.timer), R < 1e8 && (this.timer = setTimeout(() => {
                    this.die = !0, Je.delete(this.key)
                }, R))
            } finally {
                this.pending = void 0
            }
        }
        invalidate() {
            this.data = this.lock = this.pending = void 0
        }
        static get(M) {
            let L = Je.cache.get(M);
            return L || (L = new Je(M), Je.cache.set(M, L)), L
        }
        static delete(M) {
            var L;
            const I = Je.cache.get(M);
            I && (I.count === 0 && Je.cache.delete(M), !I.lockLocal && ((L = I.get()) == null ? void 0 : L.ver) !== 0 && localStorage.removeItem(I.hash))
        }
        static clear() {
            for (let M = 0; M < localStorage.length; M++) {
                const L = localStorage.key(M);
                if (L.startsWith(prefix)) {
                    const I = localStorage.getItem(L);
                    try {
                        if (I && JSON.parse(I).ts > Date.now()) break
                    } catch {}
                    localStorage.removeItem(L)
                }
            }
        }
    };
we(Oe, "cache", new Map);
let RefCache = Oe;
RefCache.clear();
const [system, usdPrice] = createRoot(() => {
    localStorage.removeItem("system");
    const [O] = useResource(() => ["/game/support/system/conf/index/minimal"], async ([L], {
        value: I
    }) => {
        const N = await getHttp().get(L, {
            cache: !0
        });
        return N.init = !0, N.currency = N.currencyV2.reduce((R, _) => (R[_.currencyName] = _, R), {}), delete N.currencyV2, JSON.stringify(N) === JSON.stringify(I) ? I : N
    }, {
        expires: 3e5,
        version: 1,
        lockLocal: !0,
        initialValue: {
            init: !1,
            license: "bc",
            currency: {},
            gameSockets: [],
            gameChannels: []
        }
    }), [M] = useResource(() => ["game/support/system/conf/usdPrice"], async ([L]) => {
        const I = await getHttp().get(L);
        return I.USD = "1", I.USDFIAT = "1", formatDecimal(I)
    }, {
        expires: 6e5,
        lockLocal: !0,
        deserialize: formatDecimal,
        initialValue: {}
    });
    return [new Proxy({}, {
        get(L, I) {
            return O()[I]
        }
    }), M]
});

function formatDecimal(O) {
    return Object.fromEntries(Object.entries(O).map(M => (M[1] = new Decimal$1(M[1]), M)))
}
const Decimal0$1 = new Decimal$1(0),
    systemUtils = {
        amount2usd(O, M) {
            return O.mul(this.getUsdPrice(M))
        },
        printCurrency(O, M = "USDFIAT", L) {
            const I = account.setting.enableLocaleCurrency,
                N = typeof L == "number" ? {
                    precision: L
                } : L || {},
                {
                    precision: R = 7,
                    target: _ = I ? account.setting.localeCurrencyName : M,
                    hasAlias: H = !0
                } = N,
                G = H ? ` ${systemUtils.getAlias(_)}` : "",
                z = M === _ ? O : this.convertCurrency(O, M, _),
                {
                    num: W,
                    exp: K,
                    unit: X
                } = getExponential(z.toNumber(), R),
                Y = new Decimal$1(W);
            if (_.endsWith("FIAT")) return this.toFiatStr(Y, _, setting.lang) + X; {
                const J = K > 1 ? 2 : R;
                let Z = "";
                return K > 1 ? Z = Y.toFixed(2, Decimal$1.ROUND_DOWN) : W < 1 ? Z = clearFloatZero(Y.toFixed(R, Decimal$1.ROUND_DOWN)) : Z = clearFloatZero(Y.toPrecision(R + 1, Decimal$1.ROUND_DOWN)), this.getCryptoIntl(J).format(Number(Z)) + (K > 1 ? X : "") + G
            }
        },
        printAnyCurrency(O, M = "USDFIAT", L = 7, I) {
            return systemUtils.printCurrency(O, M, {
                precision: L,
                target: I
            })
        },
        convertCurrency(O, M, L = "USD") {
            const I = this.getUsdPrice(L) || Decimal0$1;
            return I.eq(0) ? Decimal0$1 : O.mul(this.getUsdPrice(M)).div(I)
        },
        bn2amount(O, M) {
            var L;
            return new Decimal$1(O.toNumber()).div(((L = system.currency[M]) == null ? void 0 : L.unitAmount) || 1)
        },
        getUsdPrice(O) {
            return usdPrice()[O] || Decimal0$1
        },
        getCurrency(O) {
            return system.currency[O]
        },
        getPrecision(O) {
            var M;
            return ((M = system.currency[O]) == null ? void 0 : M.precisionUnit) || 8
        },
        getAlias(O) {
            var M;
            return ((M = system.currency[O]) == null ? void 0 : M.aliasCurrencyName) || O
        },
        getIntl(O, M) {
            var L;
            M = getDefaultLang(M);
            const I = O.replace("FIAT", ""),
                N = (() => {
                    try {
                        return new Intl.NumberFormat(M, {
                            style: "currency",
                            currency: I
                        }), !0
                    } catch {
                        return !1
                    }
                })(),
                R = Intl.NumberFormat(M, {
                    style: "currency",
                    currency: O.replace("FIAT", ""),
                    roundingMode: "trunc"
                }),
                _ = N ? ((L = R.formatToParts(0).find(H => H.type === "currency")) == null ? void 0 : L.value) || "$" : O;
            return [R, _]
        },
        getCryptoIntl(O, M) {
            return M = getDefaultLang(M), new Intl.NumberFormat(M, {
                style: "decimal",
                roundingMode: "trunc",
                minimumFractionDigits: 0,
                maximumFractionDigits: O
            })
        },
        getCurrencySymbol(O, M) {
            return M = getDefaultLang(M), this.getIntl(O, M)[1]
        },
        toFiatStr(O, M, L) {
            return L = getDefaultLang(L), M = M.replace(/FIAT$/, ""), this.getIntl(M, L)[0].format(O.toNumber())
        },
        toCryptoStr(O, M) {
            O = O.todp(this.getPrecision(M), Decimal$1.ROUND_DOWN);
            const L = Math.max(O.decimalPlaces(), 2);
            return O.toFixed(L, Decimal$1.ROUND_DOWN)
        }
    };
var ft;
const navigatorLanguage = ((ft = globalThis ? .navigator) == null ? void 0 : ft.language) || "en-US";

function getDefaultLang(O) {
    return O || navigatorLanguage
}
const ErrorCode = {
        NORMAL: 4001,
        TWOFA_ERROR: 4002,
        INSUFFICIENT_BALANCE: 5002,
        SAME_EMAIL: 5801,
        IS_MUTE: 6001,
        NEED_LOGIN: 6002,
        SESSION_ERROR: 6003,
        NEED_VERIFY: 6004,
        IS_BLOCKED: 6005,
        LOCKED_BY_KYC: 6008,
        SELF_EXCLUSION: 6009,
        REMOTE_LOGIN: 6010,
        NEED_EMAIL_AND_BASIC_KYC: 6101,
        NEED_EMAIL_AND_ADVANCED_KYC: 6102,
        NEED_PHONE_AND_BASIC_KYC: 6103,
        NEED_PHONE_AND_ADVANCED_KYC: 6104,
        NEED_EMAIL_OR_PHONE_AND_BASIC_KYC: 6105,
        NEED_EMAIL_OR_PHONE_AND_ADVANCED_KYC: 6106,
        NEED_EMAIL_AND_PHONE_AND_BASIC_KYC: 6107,
        NEED_EMAIL_AND_PHONE_AND_ADVANCED_KYC: 6108,
        NEED_BASIC_KYC: 6109,
        NEED_ADVANCED_KYC: 6110,
        FINAL_REJECT_KYC: 6111,
        NO_RFC_KYC: 6114,
        NEED_RFC_KYC: 6115,
        NOPASS_RFC_KYC: 6116,
        IS_UPDATING: 1999,
        SELF_GAMBLING_LIMITS: 6012
    },
    identityResolveTemplate = O => O;

function translator(O, M = identityResolveTemplate) {
    return (L, ...I) => {
        var N;
        L[0] === "." && (L = L.slice(1));
        const R = (N = O()) == null ? void 0 : N[L];
        switch (typeof R) {
            case "function":
                return R(...I);
            case "string":
                return M(R, I[0]);
            default:
                return R
        }
    }
}
const I18nENV = {
        __ENV_JB__: "freeCoin",
        __ENV_BCD__: "platformCoin",
        __ENV_BCL__: "bcl",
        __ENV_SITE__: "siteName",
        __ENV_HOST__: "licenseHost",
        __ENV_COCO__: "mascot"
    },
    resolveTemplate = (O, M) => M ? O.replace(/__(.+?)__/g, (L, I) => String(M[I])) : O;

function isoLang(O) {
    var M;
    return ((M = env.langs[O]) == null ? void 0 : M[1]) ? ? O
}
const i18nInstanceCache = new Map,
    REGS = {
        ids: /<\d>/g,
        id: /\d+/,
        split: /(<\d>.*?<\/\d>|<br\/>)/,
        tag: /<(\d)>(.*?)<\/\d>/
    };

function createI18n(O, M) {
    env.isAPP && (I18nENV.__ENV_HOST__ = "appName");
    const L = createRoot(() => {
        const [I, N] = createSignal(void 0);
        let R;
        createComputed(() => {
            const H = setting.lang;
            let G = loadResource(isoLang(H), O).then(z => {
                R === G && N(z)
            });
            R = G
        });
        const _ = translator(I, resolveTemplate);
        return {
            t: (H, G) => _(H, G) || replaceEnv(H),
            Trans: H => {
                const [, G] = splitProps(H, ["options", "i18nKey", "children"]), z = () => _(H.i18nKey, G);
                if (typeof H.children == "string") return z; {
                    const W = children(() => H.children);
                    return createMemo(() => {
                        try {
                            const K = z(),
                                X = K.match(REGS.ids),
                                Y = W.toArray().filter(Z => Z instanceof Element);
                            if (!X || X.length !== Y.length) return K;
                            const J = X.map(Z => Z.match(REGS.id)[0]).sort();
                            return K.split(REGS.split).filter(Boolean).map(Z => {
                                const Q = Z.match(REGS.tag);
                                if (!Q) return Z;
                                const ee = Y[J.indexOf(Q[1])];
                                return ee.textContent = Q[2], ee
                            })
                        } catch {
                            return W
                        }
                    })
                }
            }
        }
    });
    return M && i18nInstanceCache.set(M, L), L
}
const defaultT = (O, M) => {
        const L = i18nInstanceCache.get("root");
        return L ? L.t(O, M) : O
    },
    whiteList = new Map;

function registWhiteList(O) {
    for (const M in O) whiteList.set(M, O[M])
}
async function loadResource(O, M) {
    let L = {};
    const I = `${O}/index.json`,
        N = Object.entries(M),
        R = N.find(([_, H]) => _.endsWith(I)) || N.find(([_, H]) => _.endsWith("en-US/index.json"));
    if (!O || !R) L = {};
    else {
        L = await R[1]();
        for (const _ in L) L[_] = replaceEnv(L[_]), whiteList.forEach((H, G) => {
            if (L[_].includes(G)) {
                const z = new RegExp(G, "g");
                L[_] = L[_].replace(z, H)
            }
        })
    }
    return L
}

function replaceEnv(O) {
    return O.replace(/__ENV_\w+__/g, M => env[I18nENV[M]].toUpperCase())
}
const xe = class Le {
    constructor(M) {
        we(this, "userId", 0), we(this, "name", ""), we(this, "nameId", ""), we(this, "key", ""), we(this, "isCasino", !1), we(this, "isOnline", !1), we(this, "lastSyncOnlineTime", 0);
        let L = Le.userDict[M.userId];
        return L || (this.userId = M.userId, Le.addCache(this), L = this), M.name === Le.hiddenName || M.name && L.name !== M.name && (L.name = M.name, L.nameId = this.getNameId(L.name), L.key = this.nameId.toLowerCase()), L
    }
    async syncOnlineStatus() {
        const M = Date.now();
        M - this.lastSyncOnlineTime > 36e5 && (this.lastSyncOnlineTime = M)
    }
    getNameId(M = "") {
        M = M.replace(/\s(\w?)/, (N, R) => R.toUpperCase());
        let L = M.toLowerCase(),
            I = 1;
        for (; Le.keyDict[L];) M = M + I, L = M.toLowerCase(), I++;
        return M
    }
    static search(M) {
        return M = M.toLowerCase(), Le.userList.filter(L => L.userId !== 0 && L.name && L.key.indexOf(M) !== -1)
    }
    static findByName(M) {
        return Le.userList.find(L => L.userId !== 0 && L.name === M)
    }
    static findByKey(M) {
        return M = M.toLowerCase(), Le.userList.find(L => L.userId !== 0 && L.key === M)
    }
    static isFirend(M) {
        return Le.firendDict[M]
    }
    static addCache(M) {
        if (Le.userDict[M.userId] = M, Le.userList.push(M), Le.keyDict[M.nameId] = M, Le.userList.length > Le.MAX) {
            const L = Le.userList.shift();
            if (L === void 0) return;
            delete Le.userDict[L.userId], delete Le.keyDict[L.nameId]
        }
    }
    static syncOnline(M) {
        const L = M.map(I => I.userId);
        getHttp().post("/account/online/status/", {
            userIds: L
        }).then(I => {
            M.forEach(N => {
                N.isOnline = I.indexOf(N.userId) !== -1
            })
        })
    }
    static getName(M) {
        return M === Le.hiddenName ? defaultT("Hidden") : M
    }
};
we(xe, "MAX", 5e3), we(xe, "userList", []), we(xe, "userDict", {}), we(xe, "keyDict", {}), we(xe, "firendDict", {}), we(xe, "hiddenName", "****");
let User = xe;

function isHidden(O) {
    const M = User.userDict[O];
    return M ? M.name === User.hiddenName : !1
}

function transformVerifyType(O) {
    return O === "phone-code" ? "phone" : O === "email-code" ? "email" : O === "google-2step-auth" ? "google_2fa" : O
}

function assets(O) {
    return `/assets${O.startsWith("/")?O:"/"+O}`
}

function coinIcon(O, M) {
    let L = systemUtils.getAlias(O).replace(/FIAT$/, "");
    M = M ? ? (O.endsWith("FIAT") ? "rect" : "black");
    const {
        isBrAuditHost: I
    } = getHostType(env.host);
    return I && (L = "BRL", M = "rect"), `/coin/${L}.${M}.png`
}

function nftIcon(O) {
    return `//res.${env.host}/nft/${O}.png`
}

function avatar(O, M = "s") {
    let L = img2(`/avatar/${O}/${M}`);
    return account.userId === O && (L += `?t=${account.avatarUpdateTime}`), isHidden(O) && (L = ""), O === 0 && (L = ""), L
}

function img2(O) {
    return `//${env.imgHost||"img2.dogcrash.game"}${O}`
}

function userName(O) {
    return O === User.hiddenName ? defaultT("Hidden") : O
}
const bc = {
    avatar,
    assets,
    userName,
    coinIcon,
    nftIcon,
    img2,
    User,
    ErrorCode,
    transformVerifyType
};
async function requestRecaptcha(O) {
    return captchaClient || detectCaptcha(), captchaClient ? .request(O) || "No captcha!"
}
class Captcha {
    constructor(M) {
        we(this, "key"), we(this, "resolve"), we(this, "inited"), we(this, "timeout", 0), this.key = M, this.resolve = () => {}, this.inited = new Promise(L => {
            this.resolve = L, this.init()
        })
    }
    async request(M) {
        await this.inited;
        const L = [this.requestCode(M)];
        return this.timeout > 0 && L.push(delay$1(this.timeout).then(() => "time out")), await Promise.race(L)
    }
}
class Recaptcha extends Captcha {
    constructor() {
        super(...arguments), we(this, "timeout", 8e3)
    }
    async init() {
        return await loadScript(`https://www.google.com/recaptcha/api.js?render=${this.key}`), new Promise(M => {
            grecaptcha.ready(M)
        })
    }
    async requestCode(M) {
        return grecaptcha.execute(this.key, {
            action: M
        })
    }
}
setTimeout(() => {
    captchaClient || detectCaptcha()
}, 15e3);
class Hcaptcha extends Captcha {
    async init() {
        return new Promise(M => {
            const L = "hcaptcha_container",
                I = this.key,
                N = this.resolve;
            window.onGameCaptchaLoad = () => {
                hcaptcha && (hcaptcha.render(L, {
                    size: "invisible",
                    sitekey: I
                }), N(!0), M(!0))
            }, loadScript("https://js.hcaptcha.com/1/api.js?render=explicit&onload=onGameCaptchaLoad&recaptchacompat=off").then(() => {
                const R = document.createElement("div");
                R.id = L, R.style.display = "none", document.body.appendChild(R)
            })
        })
    }
    async requestCode() {
        return (await hcaptcha.execute({
            async: !0
        })).response
    }
}
let captchaClient = null;

function detectCaptcha() {
    const O = env.RECAPTCHA_V3_ID,
        M = env.HCAPTCHA_ID;
    M ? captchaClient = new Hcaptcha(M) : O && (captchaClient = new Recaptcha(O))
}
const getShareRes = memo$1(() => getHttp().get("/agent/invitation/code/custom/")),
    getShareLink = memo$1((O, M) => getHttp().post(`/game/support/share/short-link/${O}/`, M));

function getShareLinks(O) {
    const M = [{
        name: "email",
        url: void 0,
        icon: getShareIcon(10)
    }, {
        name: "Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u=",
        baseUrl: "https://www.facebook.com/sharer/sharer.php?",
        icon: getShareIcon(3)
    }, {
        name: "X",
        url: "https://x.com/share?url=",
        baseUrl: "https://x.com/share?",
        icon: getShareIcon(8)
    }, {
        name: "Telegram",
        url: "https://t.me/share?url=",
        baseUrl: "https://t.me/share?",
        icon: getShareIcon(7)
    }, {
        name: "VK",
        url: "http://vk.com/share.php?",
        icon: getShareIcon(11)
    }, {
        name: "Line",
        url: "https://lineit.line.me/share/ui?",
        icon: getShareIcon(12)
    }, {
        name: "vertical",
        url: void 0,
        icon: getShareIcon(6)
    }, {
        name: "Skype",
        url: "https://web.skype.com/share?",
        icon: getShareIcon(13)
    }, {
        name: "OK",
        url: "https://connect.ok.ru/offer?url=",
        icon: getShareIcon(14)
    }, {
        name: "btc",
        url: void 0,
        icon: getShareIcon(1)
    }, {
        name: "pinterest",
        url: void 0,
        icon: getShareIcon(15)
    }, {
        name: "Linkedin",
        url: "https://www.linkedin.com/sharing/share-offsite/?",
        icon: getShareIcon(16)
    }, {
        name: "Whatsapp",
        url: "https://wa.me/?",
        icon: getShareIcon(17)
    }, {
        name: "reddit",
        url: void 0,
        icon: getShareIcon(18)
    }];
    return Promise.all(M.map(L => shareLink({
        platform: { ...L
        },
        ...O
    })))
}
async function shareLink({
    platform: O,
    title: M,
    inviteUrl: L,
    inviteCode: I,
    content: N = "",
    imgUrl: R,
    shareUrl: _,
    isGame: H = !0
}) {
    let G = {
        invitationUrl: `${location.protocol}://${env.host}`,
        invitationCode: ""
    };
    if (L && I ? G = {
            invitationUrl: L,
            invitationCode: I
        } : account.login && (G = await getShareRes()), !O.url) return O;
    R = R || `${location.protocol}//${env.host}/share_image.jpg`;
    const z = _ ? `${G.invitationUrl}?p=${_}` : G.invitationUrl;
    let W = "";
    if (O.name === "Facebook" || O.name === "X" || O.name === "Telegram") {
        const K = {
                title: M,
                desc: N,
                image: R
            },
            X = O.name === "Facebook";
        if (!H || !account.login) {
            const Y = `title=${encodeURIComponent(M)}&text=${encodeURIComponent(N)}&${X?"u":"url"}=${encodeURIComponent(z)}`;
            W = O.baseUrl + Y
        } else {
            const Y = await getShareLink(G.invitationCode, K);
            W = O.url + Y
        }
    } else if (O.name === "Linkedin") {
        const K = `url=${encodeURIComponent(z)}`;
        W = O.url + K
    } else if (O.name === "OK") {
        const K = `url=${encodeURIComponent(z)}&title=${encodeURIComponent(M)}&imageUrl=${encodeURIComponent(R)}`;
        W = O.url + K
    } else if (O.name === "Whatsapp") {
        const K = `text=${encodeURIComponent(M+" "+z)}`;
        W = O.url + K
    } else {
        const K = `url=${encodeURIComponent(z)}&title=${encodeURIComponent(M)}&text=${encodeURIComponent(N)}`;
        W = O.url + K
    }
    return { ...O,
        url: W
    }
}

function getShareIcon(O) {
    return bc.assets(`/shareicon/share_${O}.png`)
}
var _tmpl$$G = template("<div>"),
    VipLevelStatus = (O => (O[O.None = 0] = "None", O[O.Bronze = 1] = "Bronze", O[O.Silver = 2] = "Silver", O[O.Gold = 3] = "Gold", O[O.Platinum_I = 4] = "Platinum_I", O[O.Platinum_II = 5] = "Platinum_II", O[O.Diamond_I = 6] = "Diamond_I", O[O.Diamond_II = 7] = "Diamond_II", O[O.Diamond_III = 8] = "Diamond_III", O))(VipLevelStatus || {});
const vipLevelsList = [{
        level: 0,
        xp: 0,
        type: 0
    }, {
        level: 1,
        xp: 1,
        type: 0
    }, {
        level: 2,
        xp: 100,
        type: 1
    }, {
        level: 3,
        xp: 200,
        type: 1
    }, {
        level: 4,
        xp: 1e3,
        type: 1
    }, {
        level: 5,
        xp: 2e3,
        type: 1
    }, {
        level: 6,
        xp: 3e3,
        type: 1
    }, {
        level: 7,
        xp: 4e3,
        type: 1
    }, {
        level: 8,
        xp: 5e3,
        type: 2
    }, {
        level: 9,
        xp: 7e3,
        type: 2
    }, {
        level: 10,
        xp: 9e3,
        type: 2
    }, {
        level: 11,
        xp: 11e3,
        type: 2
    }, {
        level: 12,
        xp: 13e3,
        type: 2
    }, {
        level: 13,
        xp: 15e3,
        type: 2
    }, {
        level: 14,
        xp: 17e3,
        type: 2
    }, {
        level: 15,
        xp: 21e3,
        type: 2
    }, {
        level: 16,
        xp: 25e3,
        type: 2
    }, {
        level: 17,
        xp: 29e3,
        type: 2
    }, {
        level: 18,
        xp: 33e3,
        type: 2
    }, {
        level: 19,
        xp: 37e3,
        type: 2
    }, {
        level: 20,
        xp: 41e3,
        type: 2
    }, {
        level: 21,
        xp: 45e3,
        type: 2
    }, {
        level: 22,
        xp: 49e3,
        type: 3
    }, {
        level: 23,
        xp: 59e3,
        type: 3
    }, {
        level: 24,
        xp: 69e3,
        type: 3
    }, {
        level: 25,
        xp: 79e3,
        type: 3
    }, {
        level: 26,
        xp: 89e3,
        type: 3
    }, {
        level: 27,
        xp: 99e3,
        type: 3
    }, {
        level: 28,
        xp: 109e3,
        type: 3
    }, {
        level: 29,
        xp: 119e3,
        type: 3
    }, {
        level: 30,
        xp: 129e3,
        type: 3
    }, {
        level: 31,
        xp: 153e3,
        type: 3
    }, {
        level: 32,
        xp: 177e3,
        type: 3
    }, {
        level: 33,
        xp: 201e3,
        type: 3
    }, {
        level: 34,
        xp: 225e3,
        type: 3
    }, {
        level: 35,
        xp: 249e3,
        type: 3
    }, {
        level: 36,
        xp: 273e3,
        type: 3
    }, {
        level: 37,
        xp: 297e3,
        type: 3
    }, {
        level: 38,
        xp: 321e3,
        type: 4
    }, {
        level: 39,
        xp: 377e3,
        type: 4
    }, {
        level: 40,
        xp: 433e3,
        type: 4
    }, {
        level: 41,
        xp: 489e3,
        type: 4
    }, {
        level: 42,
        xp: 545e3,
        type: 4
    }, {
        level: 43,
        xp: 601e3,
        type: 4
    }, {
        level: 44,
        xp: 657e3,
        type: 4
    }, {
        level: 45,
        xp: 713e3,
        type: 4
    }, {
        level: 46,
        xp: 769e3,
        type: 4
    }, {
        level: 47,
        xp: 897e3,
        type: 4
    }, {
        level: 48,
        xp: 1025e3,
        type: 4
    }, {
        level: 49,
        xp: 1153e3,
        type: 4
    }, {
        level: 50,
        xp: 1281e3,
        type: 4
    }, {
        level: 51,
        xp: 1409e3,
        type: 4
    }, {
        level: 52,
        xp: 1537e3,
        type: 4
    }, {
        level: 53,
        xp: 1665e3,
        type: 4
    }, {
        level: 54,
        xp: 1793e3,
        type: 4
    }, {
        level: 55,
        xp: 2081e3,
        type: 4
    }, {
        level: 56,
        xp: 2369e3,
        type: 5
    }, {
        level: 57,
        xp: 2657e3,
        type: 5
    }, {
        level: 58,
        xp: 2945e3,
        type: 5
    }, {
        level: 59,
        xp: 3233e3,
        type: 5
    }, {
        level: 60,
        xp: 3521e3,
        type: 5
    }, {
        level: 61,
        xp: 3809e3,
        type: 5
    }, {
        level: 62,
        xp: 4097e3,
        type: 5
    }, {
        level: 63,
        xp: 4737e3,
        type: 5
    }, {
        level: 64,
        xp: 5377e3,
        type: 5
    }, {
        level: 65,
        xp: 6017e3,
        type: 5
    }, {
        level: 66,
        xp: 6657e3,
        type: 5
    }, {
        level: 67,
        xp: 7297e3,
        type: 5
    }, {
        level: 68,
        xp: 7937e3,
        type: 5
    }, {
        level: 69,
        xp: 8577e3,
        type: 5
    }, {
        level: 70,
        xp: 9217e3,
        type: 6
    }, {
        level: 71,
        xp: 10625e3,
        type: 6
    }, {
        level: 72,
        xp: 12033e3,
        type: 6
    }, {
        level: 73,
        xp: 13441e3,
        type: 6
    }, {
        level: 74,
        xp: 14849e3,
        type: 6
    }, {
        level: 75,
        xp: 16257e3,
        type: 6
    }, {
        level: 76,
        xp: 17665e3,
        type: 6
    }, {
        level: 77,
        xp: 19073e3,
        type: 6
    }, {
        level: 78,
        xp: 20481e3,
        type: 6
    }, {
        level: 79,
        xp: 23553e3,
        type: 6
    }, {
        level: 80,
        xp: 26625e3,
        type: 6
    }, {
        level: 81,
        xp: 29697e3,
        type: 6
    }, {
        level: 82,
        xp: 32769e3,
        type: 6
    }, {
        level: 83,
        xp: 35841e3,
        type: 6
    }, {
        level: 84,
        xp: 38913e3,
        type: 6
    }, {
        level: 85,
        xp: 41985e3,
        type: 7
    }, {
        level: 86,
        xp: 45057e3,
        type: 7
    }, {
        level: 87,
        xp: 51713e3,
        type: 7
    }, {
        level: 88,
        xp: 58369e3,
        type: 7
    }, {
        level: 89,
        xp: 65025e3,
        type: 7
    }, {
        level: 90,
        xp: 71681e3,
        type: 7
    }, {
        level: 91,
        xp: 78337e3,
        type: 7
    }, {
        level: 92,
        xp: 84993e3,
        type: 7
    }, {
        level: 93,
        xp: 91649e3,
        type: 7
    }, {
        level: 94,
        xp: 98305e3,
        type: 7
    }, {
        level: 95,
        xp: 112641e3,
        type: 7
    }, {
        level: 96,
        xp: 126977e3,
        type: 7
    }, {
        level: 97,
        xp: 141313e3,
        type: 7
    }, {
        level: 98,
        xp: 155649e3,
        type: 7
    }, {
        level: 99,
        xp: 169985e3,
        type: 7
    }, {
        level: 100,
        xp: 184321e3,
        type: 7
    }, {
        level: 101,
        xp: 198657e3,
        type: 7
    }, {
        level: 102,
        xp: 212993e3,
        type: 7
    }, {
        level: 103,
        xp: 243713e3,
        type: 7
    }, {
        level: 104,
        xp: 274433e3,
        type: 7
    }, {
        level: 105,
        xp: 305153e3,
        type: 7
    }, {
        level: 106,
        xp: 335873e3,
        type: 7
    }, {
        level: 107,
        xp: 366593e3,
        type: 8
    }, {
        level: 108,
        xp: 397313e3,
        type: 8
    }, {
        level: 109,
        xp: 428033e3,
        type: 8
    }, {
        level: 110,
        xp: 458753e3,
        type: 8
    }, {
        level: 111,
        xp: 524289e3,
        type: 8
    }, {
        level: 112,
        xp: 589825e3,
        type: 8
    }, {
        level: 113,
        xp: 655361e3,
        type: 8
    }, {
        level: 114,
        xp: 720897e3,
        type: 8
    }, {
        level: 115,
        xp: 786433e3,
        type: 8
    }, {
        level: 116,
        xp: 851969e3,
        type: 8
    }, {
        level: 117,
        xp: 917505e3,
        type: 8
    }, {
        level: 118,
        xp: 983041e3,
        type: 8
    }, {
        level: 119,
        xp: 1122305e3,
        type: 8
    }, {
        level: 120,
        xp: 1261569e3,
        type: 8
    }, {
        level: 121,
        xp: 1400833e3,
        type: 8
    }, {
        level: 122,
        xp: 1540097e3,
        type: 8
    }, {
        level: 123,
        xp: 1679361e3,
        type: 8
    }, {
        level: 124,
        xp: 1818625e3,
        type: 8
    }, {
        level: 125,
        xp: 1957889e3,
        type: 8
    }, {
        level: 126,
        xp: 2097153e3,
        type: 8
    }, {
        level: 127,
        xp: 2392065e3,
        type: 8
    }, {
        level: 128,
        xp: 2686977e3,
        type: 8
    }, {
        level: 129,
        xp: 2981889e3,
        type: 8
    }, {
        level: 130,
        xp: 3276801e3,
        type: 8
    }, {
        level: 131,
        xp: 3571713e3,
        type: 8
    }, {
        level: 132,
        xp: 3866625e3,
        type: 8
    }, {
        level: 133,
        xp: 4161537e3,
        type: 8
    }, {
        level: 134,
        xp: 4456449e3,
        type: 8
    }, {
        level: 135,
        xp: 5079041e3,
        type: 8
    }, {
        level: 136,
        xp: 5701633e3,
        type: 8
    }, {
        level: 137,
        xp: 6324225e3,
        type: 8
    }, {
        level: 138,
        xp: 6946817e3,
        type: 8
    }, {
        level: 139,
        xp: 7569409e3,
        type: 8
    }, {
        level: 140,
        xp: 8192001e3,
        type: 8
    }, {
        level: 141,
        xp: 8814593e3,
        type: 8
    }, {
        level: 142,
        xp: 9437185e3,
        type: 8
    }, {
        level: 143,
        xp: 10747905e3,
        type: 8
    }, {
        level: 144,
        xp: 12058625e3,
        type: 8
    }],
    maxLevel = 144,
    overLevelXp = 139264e3,
    levelColor = ["#5D81AC", "#6E412E", "#757575", "#966603", "#6434A2", "#6434A2", "#B54E82", "#B54E82", "#B54E82"],
    getLevelInfo = O => {
        const M = vipLevelsList.length;
        if (O < 0) return vipLevelsList[0];
        if (O >= M) {
            const L = O - M + 1,
                I = vipLevelsList[M - 1].xp + L * overLevelXp;
            return {
                level: O,
                xp: I,
                type: 8
            }
        }
        return vipLevelsList[O]
    },
    getUserLevelInfo = O => {
        const M = O > 69,
            L = M ? "SVIP" : "VIP",
            I = M ? O - 69 : O,
            N = getLevelInfo(O),
            R = levelColor[N.type],
            [_, H] = VipLevelStatus[N.type].split("_");
        return {
            isSvip: M,
            vipLevel: I,
            vipType: L,
            vipLevelColor: R,
            vipTypeNum: N.type,
            vipTypeNumName: {
                base: _,
                suffix: H,
                fullName: _ + `${H?"_":""}${H}`
            }
        }
    },
    levelClass = ["level_nolevel", "level_bronze", "level_sliver", "level_gold", "level_platinum", "level_platinum", "level_diamond", "level_diamond", "level_diamond"],
    LevelName = function O(M) {
        const L = createMemo(() => {
            const I = getLevelInfo(M.level);
            return levelClass[I.type] || "level_nolevel"
        });
        return (() => {
            var I = _tmpl$$G();
            return I.style.setProperty("text-shadow", "0px 1.021px 0px rgba(66, 43, 105, 0.50)"), insert(I, () => M.children), createRenderEffect(() => className(I, `h-5 rounded py-0 px-2 ${L()} ${M.class||""}`)), I
        })()
    };

function getIcon(O) {
    return bc.assets(`/vip/badge-${O}.png`)
}
const vipBadgeIcon = O => {
        switch (typeof O == "number" ? getLevelInfo(O).type : O.vipLevelStatus) {
            case 0:
                return getIcon("none");
            case 1:
                return getIcon("bronze");
            case 2:
                return getIcon("silver");
            case 3:
                return getIcon("gold");
            case 4:
            case 5:
                return getIcon("platinum");
            case 6:
            case 7:
            case 8:
                return getIcon("diamond")
        }
    },
    UserLevel = Object.freeze(Object.defineProperty({
        __proto__: null,
        LevelName,
        VipLevelStatus,
        getLevelInfo,
        getUserLevelInfo,
        levelColor,
        maxLevel,
        overLevelXp,
        vipBadgeIcon,
        vipLevelsList
    }, Symbol.toStringTag, {
        value: "Module"
    }));
var _tmpl$$F = template("<div>"),
    _tmpl$2$m = template("<span>"),
    _tmpl$3$d = template('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg><path fill=#eb5858 d="M26.026 18.723c-0.16 0.333-0.328 0.661-0.477 0.999-0.197 0.447-0.329 0.909-0.355 1.405-0.027 0.526-0.294 0.922-0.778 1.144-0.141 0.062-0.294 0.094-0.448 0.096-0.635 0.011-1.272 0.007-1.907 0.005-0.201 0-0.219-0.026-0.114-0.205 0.197-0.338 0.419-0.642 0.795-0.822 0.46-0.22 0.699-0.909 0.561-1.433-0.109-0.415-0.345-0.754-0.579-1.1-0.368-0.544-0.641-1.131-0.601-1.806 0.017-0.274 0.112-0.544 0.178-0.815 0.018-0.075 0.057-0.144 0.086-0.216l-0.057-0.028c-0.099 0.186-0.217 0.365-0.294 0.561-0.26 0.666-0.129 1.305 0.178 1.92 0.097 0.193 0.227 0.37 0.334 0.558 0.034 0.060 0.072 0.145 0.054 0.203-0.177 0.584-0.323 1.184-0.565 1.743-0.166 0.382-0.309 0.77-0.455 1.158-0.075 0.2-0.215 0.29-0.435 0.288-0.699-0.008-1.398-0.002-2.096-0.003-0.217 0-0.24-0.024-0.164-0.225 0.072-0.198 0.158-0.391 0.257-0.577 0.111-0.203 0.291-0.324 0.521-0.388 0.386-0.107 0.571-0.404 0.598-0.776 0.031-0.432 0.011-0.868 0.015-1.302 0.001-0.14-0.092-0.133-0.189-0.127-0.674 0.043-1.348 0.112-2.022 0.123-0.766 0.011-1.533-0.029-2.299-0.048-0.116-0.003-0.154-0.049-0.101-0.164 0.217-0.472 0.312-0.978 0.392-1.486 0.009-0.065-0.001-0.131-0.031-0.19-0.079 0.173-0.152 0.349-0.24 0.518-0.168 0.323-0.32 0.661-0.528 0.958-0.189 0.271-0.228 0.579-0.325 0.873-0.149 0.45-0.251 0.923-0.462 1.342-0.223 0.444-0.544 0.842-0.834 1.251-0.12 0.168-0.306 0.223-0.515 0.221-0.687-0.005-1.374 0-2.061 0.001-0.232 0-0.248-0.026-0.133-0.232 0.177-0.318 0.378-0.616 0.703-0.802 0.078-0.044 0.174-0.056 0.253-0.098 0.127-0.068 0.289-0.121 0.362-0.23 0.278-0.415 0.311-0.904 0.375-1.38-0.131 0.306-0.246 0.621-0.396 0.919-0.152 0.301-0.388 0.523-0.73 0.604-0.355 0.084-0.555 0.34-0.724 0.637-0.164 0.289-0.383 0.516-0.728 0.573-0.106 0.017-0.217 0.009-0.325 0.009-0.602 0.001-1.203 0.002-1.804 0-0.24-0.001-0.257-0.020-0.17-0.239 0.183-0.46 0.468-0.806 0.973-0.96 0.42-0.128 0.71-0.45 0.964-0.797 0.331-0.451 0.594-0.936 0.708-1.491 0.029-0.141 0.005-0.249-0.117-0.346-0.487-0.388-0.975-0.775-1.446-1.182-0.333-0.287-0.637-0.608-0.957-0.91-0.416-0.393-0.93-0.598-1.472-0.737-0.575-0.148-1.161-0.21-1.754-0.163-0.221 0.017-0.44 0.069-0.659 0.109-0.356 0.066-0.712 0.121-1.057-0.045-0.014-0.007-0.024-0.020-0.056-0.046l0.268-0.026 0.002-0.039c-0.162-0.040-0.323-0.084-0.487-0.118-0.13-0.027-0.223-0.067-0.274-0.215-0.036-0.103-0.14-0.192-0.231-0.266-0.186-0.154-0.239-0.306-0.094-0.482 0.091-0.11 0.237-0.216 0.373-0.241 0.487-0.090 0.849-0.343 1.12-0.747 0.635-0.945 1.46-1.653 2.562-1.989 0.406-0.124 0.831-0.157 1.256-0.067 0.056 0.012 0.133-0.018 0.182-0.053 0.078-0.056 0.136-0.14 0.213-0.198 0.283-0.213 0.635-0.061 0.669 0.291 0.015 0.152 0.003 0.306 0.003 0.491 0.047-0.069 0.087-0.114 0.112-0.167 0.085-0.181 0.208-0.267 0.423-0.28 0.886-0.052 1.771-0.156 2.657-0.044 0.278 0.035 0.469-0.105 0.688-0.203 0.645-0.289 1.306-0.558 2.019-0.551 0.456 0.004 0.855-0.107 1.267-0.274 1.452-0.589 2.96-0.885 4.529-0.724 0.492 0.050 0.978 0.177 1.458 0.301 0.737 0.191 1.454 0.443 2.134 0.795 1.181 0.612 1.977 1.569 2.509 2.767 0.479 1.079 0.762 2.215 0.927 3.379 0.066 0.469 0.303 0.848 0.54 1.228 0.412 0.659 0.836 1.311 1.283 1.947 0.235 0.334 0.5 0.655 0.904 0.819 0.16 0.065 0.192 0.249 0.047 0.345-0.2 0.133-0.423 0.266-0.654 0.312-0.816 0.163-1.512-0.094-2.089-0.684-0.53-0.542-0.855-1.195-1.037-1.926-0.019-0.074-0.048-0.146-0.073-0.219l-0.053-0.007zM2.994 14.481c0.135 0.148 0.141 0.165 0.023 0.364-0.081 0.136-0.050 0.201 0.095 0.254 0.287 0.107 0.599 0.123 0.895 0.045 0.816-0.215 1.645-0.327 2.484-0.408 1.239-0.119 2.447 0.015 3.629 0.374 0.715 0.217 1.415 0.485 2.122 0.728 0.032 0.011 0.071 0.001 0.125 0.001-0.023-0.054-0.031-0.094-0.053-0.124-0.461-0.618-0.904-1.251-1.394-1.845-0.344-0.417-0.783-0.745-1.281-0.956-0.461-0.197-0.942-0.209-1.431-0.204-0.426 0.004-0.809 0.133-1.168 0.349-0.465 0.28-0.922 0.575-1.396 0.838-0.304 0.168-0.633 0.301-0.998 0.221-0.21-0.046-0.253-0.125-0.142-0.31 0.129-0.215 0.263-0.431 0.426-0.619 0.507-0.584 1.106-1.042 1.86-1.264 0.221-0.065 0.447-0.113 0.721-0.182-0.136-0.039-0.226-0.077-0.319-0.089-0.396-0.050-0.776 0.024-1.136 0.189-0.855 0.394-1.51 1.019-2.030 1.792-0.153 0.227-0.334 0.419-0.567 0.563-0.154 0.095-0.309 0.19-0.466 0.286zM5.235 13.597c0.123-0.051 0.233-0.082 0.325-0.142 0.060-0.039 0.090-0.121 0.077-0.168s-0.061-0.101-0.153-0.104c-0.108-0.002-0.215 0.025-0.308 0.080-0.070 0.043-0.115 0.117-0.121 0.199-0.004 0.075 0.046 0.168 0.181 0.134z">'),
    _tmpl$4$7 = template('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg><path fill=#d169e6 d="M24.699 7.987h-17.489l-4.983 6.559 13.724 15.455 13.724-15.455-4.976-6.559zM25.41 14.969c-0.661 0.021-2.224 0.162-3.076 1.021-0.901 0.901-1.013 2.59-1.028 3.181-0.014-0.605-0.12-2.372-1.048-3.294-0.859-0.852-2.463-0.929-3.097-0.922-0.162 0.007-0.267 0.007-0.267 0.007s0.099-0.007 0.267-0.007c0.605-0.035 2.097-0.204 2.949-1.048 1.063-1.063 1.183-3.090 1.197-3.329v0c-0.007 0.239-0.056 2.372 0.985 3.406 0.852 0.859 2.449 0.971 3.118 0.985 0.19-0.007 0.31-0.007 0.31-0.007s-0.12 0.007-0.31 0.007zM21.828 1.998c0 0-0.078 1.506 0.633 2.217s2.217 0.633 2.217 0.633-1.478-0.049-2.189 0.661c-0.711 0.711-0.661 2.189-0.661 2.189s0.049-1.534-0.676-2.259c-0.697-0.697-2.175-0.584-2.175-0.584s1.379 0.014 2.076-0.683c0.732-0.739 0.774-2.175 0.774-2.175zM27.831 5.165c0 0-0.056 1.028 0.429 1.513s1.513 0.429 1.513 0.429-1.006-0.035-1.492 0.45c-0.485 0.486-0.451 1.492-0.451 1.492s0.035-1.049-0.465-1.541c-0.472-0.479-1.485-0.401-1.485-0.401s0.943 0.007 1.415-0.465c0.5-0.492 0.535-1.478 0.535-1.478z">'),
    _tmpl$5$4 = template('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg><path fill=#ffd308 d="M27.924 14.807l-4.892 11.74h-14.063l-4.892-11.74c-1.198-0.105-2.14-1.099-2.14-2.324 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.498-0.157 0.957-0.421 1.336 0.827 1.307 2.274 2.18 3.937 2.18 2.182 0 3.999-1.497 4.522-3.516l0.035-0.197 0.131-2.472c-0.698-0.406-1.172-1.153-1.172-2.019 0-1.295 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.866-0.474 1.613-1.172 2.019l0.082 2.434 0.084 0.235c0.523 2.018 2.341 3.516 4.522 3.516 1.663 0 3.109-0.873 3.937-2.18-0.264-0.379-0.421-0.839-0.421-1.336 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 1.225-0.942 2.218-2.14 2.324z">'),
    _tmpl$6$2 = template('<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=20 height=18 viewBox="0 0 35 32"class=fill-[#0f62fe]><title>Official</title><path d="M24.193 3.213c1.353 0 2.45 1.097 2.45 2.45s-1.097 2.45-2.45 2.45c-0.2 0-0.394-0.024-0.58-0.069l-0.693 1.462c4.202 1.106 7.301 4.931 7.301 9.48 0 5.413-4.388 9.802-9.802 9.802h-6.126c-5.413 0-9.802-4.388-9.802-9.802 0-4.266 2.726-7.896 6.53-9.243l-0.547-1.642c-1.24-0.121-2.209-1.167-2.209-2.439 0-1.353 1.097-2.45 2.45-2.45s2.45 1.097 2.45 2.45c0 0.745-0.333 1.413-0.858 1.863l0.584 1.758c0.457-0.065 0.925-0.099 1.401-0.099h6.126c0.175 0 0.349 0.005 0.522 0.014l1.111-2.343c-0.197-0.353-0.309-0.759-0.309-1.192 0-1.353 1.097-2.45 2.45-2.45zM20.419 14.698h-6.126c-3.045 0-5.513 2.468-5.513 5.513 0 2.974 2.355 5.398 5.302 5.51l0.211 0.004h6.126c3.045 0 5.513-2.468 5.513-5.513s-2.468-5.513-5.513-5.513zM33.696 15.531c1.739 2.237 1.739 5.368 0 7.605-0.298 0.356-0.797 0.471-1.221 0.282s-0.672-0.636-0.608-1.096c0.268-1.98 0.268-3.988 0-5.969-0.069-0.462 0.177-0.913 0.603-1.105s0.927-0.076 1.226 0.282zM1.304 15.531c0.299-0.358 0.8-0.474 1.226-0.282s0.672 0.643 0.603 1.105c-0.268 1.98-0.268 3.988 0 5.969 0.064 0.46-0.184 0.907-0.608 1.096s-0.923 0.074-1.221-0.282c-1.739-2.237-1.739-5.368 0-7.605zM13.227 17.761c0.53 0 0.96 0.43 0.96 0.96v2.98c0 0.53-0.43 0.96-0.96 0.96h-0.53c-0.53 0-0.96-0.43-0.96-0.96v-2.98c0-0.53 0.43-0.96 0.96-0.96h0.53zM21.555 17.761c0.53 0 0.96 0.43 0.96 0.96v2.98c0 0.53-0.43 0.96-0.96 0.96h-0.53c-0.53 0-0.96-0.43-0.96-0.96v-2.98c0-0.53 0.43-0.96 0.96-0.96h0.53z">');
const UserTitle = O => {
    const M = createMemo(() => O.code.find(_ => _ === 80)),
        L = createMemo(() => Math.max(...O.code)),
        I = createMemo(() => M() ? M() : L()),
        N = _ => {
            if (_.search(/\$\[#.+/) !== -1) {
                const H = _.match(/\$\[(#.+)\](.+)/);
                return {
                    color: H && H[1],
                    name: H && H[2]
                }
            } else return {
                color: null,
                name: _
            }
        },
        R = createMemo(() => O.markClass || "text-xs px-1 inline-block min-w-9 max-w-28 text-center h-4 leading-4 whitespace-nowrap rounded-md text-white");
    return createComponent(Show, {
        get when() {
            return O.code.length > 0
        },
        get children() {
            var _ = _tmpl$$F();
            return insert(_, createComponent(For, {
                get each() {
                    return O.code
                },
                children: (H, G) => createComponent(Switch$1, {
                    fallback: null,
                    get children() {
                        return [createComponent(Match, {
                            when: H === 1,
                            get children() {
                                return createComponent(Icon_Badge, {})
                            }
                        }), createComponent(Match, {
                            when: H === 2 || H === 3,
                            get children() {
                                return createComponent(Icon_Diamond, {})
                            }
                        }), createComponent(Match, {
                            when: H === 4,
                            get children() {
                                return createComponent(Icon_Crown, {})
                            }
                        }), createComponent(Match, {
                            when: H === -1,
                            get children() {
                                return createComponent(Icon_Official, {})
                            }
                        }), createComponent(Match, {
                            get when() {
                                return H === 97 && I() === 97
                            },
                            get children() {
                                return createComponent(Mark, {
                                    get class() {
                                        return R() + " bg-[#4583ca]"
                                    },
                                    children: "BUGER BOT"
                                })
                            }
                        }), createComponent(Match, {
                            get when() {
                                return H === 80 && I() === 80
                            },
                            get children() {
                                return createComponent(Show, {
                                    get when() {
                                        return memo$2(() => !!O.desc)() && O.desc[G()]
                                    },
                                    get fallback() {
                                        return createComponent(Mark, {
                                            get class() {
                                                return R() + " bg-[#bf6ba2]"
                                            },
                                            children: "Host"
                                        })
                                    },
                                    children: z => {
                                        const {
                                            name: W,
                                            color: K
                                        } = N(z());
                                        return createComponent(Mark, {
                                            get class() {
                                                return R() + " bg-[#bf6ba2]"
                                            },
                                            style: {
                                                background: K || "#bf6ba2"
                                            },
                                            children: W || "Host"
                                        })
                                    }
                                })
                            }
                        }), createComponent(Match, {
                            get when() {
                                return H === 89 && I() === 89
                            },
                            get children() {
                                return createComponent(Mark, {
                                    get class() {
                                        return R() + " bg-[#f4581f]"
                                    },
                                    get children() {
                                        return memo$2(() => !!O.desc)() && O.desc[G()] || "Admin"
                                    }
                                })
                            }
                        }), createComponent(Match, {
                            get when() {
                                return H === 98 && I() === 98
                            },
                            get children() {
                                return createComponent(Mark, {
                                    get class() {
                                        return R() + " bg-[#826ee166] text-alw_white"
                                    },
                                    get children() {
                                        return memo$2(() => !!O.desc)() && O.desc[G()] || "Mod"
                                    }
                                })
                            }
                        })]
                    }
                })
            })), createRenderEffect(() => className(_, "flex items-center font-semibold" + (O.class ? O.class : ""))), _
        }
    })
};

function Mark(O) {
    return (() => {
        var M = _tmpl$2$m();
        return spread(M, mergeProps(O, {
            get class() {
                return O.class
            }
        }), !1, !1), M
    })()
}
const Icon_Badge = () => _tmpl$3$d(),
    Icon_Diamond = () => _tmpl$4$7(),
    Icon_Crown = () => _tmpl$5$4(),
    Icon_Official = () => _tmpl$6$2(),
    loadShumeiScript = memo$1(O => new Promise(async (M, L) => {
        try {
            globalThis._smConf = {
                organization: "d9YtHNKdmLm1CMuYZsw9",
                appId: "default",
                publicKey: O,
                apiHost: "collect.verify.lnearn.com"
            }, globalThis._smReadyFuncs = [function() {
                I.then(M)
            }];
            const I = loadScript("/assets/js/fp.min.js", "SMSdk")
        } catch (I) {
            L(I)
        }
    }));
async function getIshumeiDeviceId(O) {
    return (await loadShumeiScript(O)).getDeviceId()
}

function initShumeiSmid(O) {
    getIshumeiDeviceId(O).then(M => {
        getHttp().defaults.headers.common.smid = M
    })
}
var _tmpl$$E = template("<div><img>");
const getAccountFrameInfo = () => {
    const O = M => {
        var L, I;
        return {
            id: (((L = M ? .userAvatarFrameList) == null ? void 0 : L.filter(N => N.status)[0]) || {
                id: 0
            }).id,
            redDot: ((I = M ? .userAvatarFrameList) == null ? void 0 : I.some(N => !N.readStatus && N.active)) ? ? !1
        }
    };
    return createMemo(() => O(account))
};

function AvatarFrame(O) {
    return createComponent(Show, {
        get when() {
            return O.id
        },
        get fallback() {
            return O.children
        },
        get children() {
            var M = _tmpl$$E(),
                L = M.firstChild;
            return insert(M, () => O.children, L), createRenderEffect(I => {
                var N = cx("relative flex center size-full", O.class),
                    R = bc.assets(`/frame/${O.id}.png`),
                    _ = cx("pointer-events-none absolute select-none w-full scale-150", O.frameClass);
                return N !== I.e && className(M, I.e = N), R !== I.t && setAttribute(L, "src", I.t = R), _ !== I.a && className(L, I.a = _), I
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), M
        }
    })
}
class AsyncQueue {
    constructor() {
        we(this, "list", [])
    }
    enqueue(M, L) {
        const {
            weights: I = 0
        } = L || {}, N = {
            weights: I,
            run: M
        }, R = sortedIndexBy(this.list, N, _ => _.weights);
        this.list.splice(R, 0, N)
    }
    dequeue() {
        var M;
        return (M = this.list.shift()) == null ? void 0 : M.run
    }
    setPriority() {}
    get size() {
        return this.list.length
    }
    filter() {
        return this.list.map(M => M.run)
    }
}
class ModalQueue extends PQueue {
    constructor() {
        super({
            queueClass: AsyncQueue,
            concurrency: 1
        })
    }
}
const AsyncQueue$1 = new ModalQueue;
let resolveGlobalVerify;

function useNavigatePromiseEnter() {
    return resolveGlobalVerify && (resolveGlobalVerify(), resolveGlobalVerify = void 0), onCleanup(() => {
        resolveGlobalVerify && resolveGlobalVerify(), resolveGlobalVerify = void 0
    }), O => new Promise(M => {
        resolveGlobalVerify = M, O()
    })
}

function useNavigatePromise(O) {
    let M = !0;
    return onCleanup(() => {
        M && (resolveGlobalVerify && resolveGlobalVerify(), resolveGlobalVerify = void 0)
    }), {
        navigate: L => {
            M = !1, L === -1 ? O(-1) : O(L, {
                replace: !0
            })
        },
        resolve: L => {
            resolveGlobalVerify && resolveGlobalVerify(L), resolveGlobalVerify = void 0
        },
        handleNext: () => {
            M = !1
        }
    }
}
const WALLET_KEY = "wallet",
    Decimal0 = new Decimal$1(0),
    templateCurrency = {
        abnormal: !0,
        groupAmount: {
            free_amount: Decimal0,
            sports: Decimal0
        },
        aliasCurrencyName: "BTC",
        amount: Decimal0,
        areaAble: !0,
        bonusAmount: Decimal0,
        currencyName: "BTC",
        display: !0,
        displayStatus: 1,
        deducting: Decimal0,
        deductingGame: Decimal0,
        deductingSport: Decimal0,
        generalAmount: Decimal0,
        lastLogId: "0",
        sort: 3,
        supportTx: !0,
        useable: !1
    },
    [wallet, setWallet] = createRoot(() => {
        const [O, M] = createStore(getPrevData());

        function L() {
            syncWallet().catch(N => {})
        }
        L(), createEffect(N => (N === !1 && account.login && untrack(L), account.login)), createComputed(() => {
            Object.values(O).forEach(N => {
                createComputed(R => {
                    const _ = N.display;
                    return R !== void 0 && M(N.currencyName, "displayStatus", _ ? 1 : 2), _
                }), createComputed(R => {
                    const _ = N.displayStatus;
                    return R !== void 0 && account.login && I(), _
                })
            })
        });
        const I = debounce$1(() => {
            untrack(() => {
                getHttp().post("/user/amount/display/", {
                    list: Object.values(O).map(N => ({
                        currencyName: N.currencyName,
                        status: N.displayStatus
                    }))
                })
            })
        }, 5e3);
        return [O, M]
    });

function getPrevData() {
    const O = account.setting.currencyName;

    function M() {
        return {
            [O]: { ...templateCurrency,
                currencyName: O,
                aliasCurrencyName: O
            }
        }
    }
    try {
        const L = localStorage.getItem(WALLET_KEY);
        if (L) {
            const I = formatWalletData(JSON.parse(L));
            if (!I[O]) {
                const N = getValidCurrency(Object.values(I), account).currencyName;
                setAccount("setting", "currencyName", N)
            }
            return I
        } else return M()
    } catch {
        return M()
    }
}
async function syncWallet() {
    const O = await getWallet(),
        M = formatWalletData(O.reduce((L, I) => (I.deducting = Decimal0, I.deductingGame = Decimal0, I.deductingSport = Decimal0, L[I.currencyName] = I, L), {}));
    localStorage.setItem(WALLET_KEY, JSON.stringify(M)), syncWalletData(M)
}

function syncWalletData(O) {
    const M = Object.entries(O).reduce((L, [I, N]) => (L[I] = N, L), {});
    untrack(() => {
        batch(() => {
            if (!M[account.setting.currencyName]) {
                const L = getValidCurrency(Object.values(M), account).currencyName;
                setAccount("setting", "currencyName", L)
            }
            Object.entries(wallet).forEach(([L, I]) => {
                M[L] || setWallet(L, void 0)
            }), Object.values(O).forEach(L => {
                wallet[L.currencyName] ? setWallet(L.currencyName, I => shallowWallet(I, L) ? I : L) : setWallet({
                    [L.currencyName]: L
                })
            })
        })
    })
}

function shallowWallet(O, M) {
    const L = Object.keys(O),
        I = Object.keys(M);
    return L.length !== I.length ? !1 : L.every(N => Object.prototype.hasOwnProperty.call(M, N) && String(O[N]) === String(M[N]))
}

function formatWalletData(O) {
    return Object.entries(O).forEach(([M, L]) => {
        L.deducting = new Decimal$1(L.deducting), L.deductingGame = new Decimal$1(L.deductingGame), L.deductingSport = new Decimal$1(L.deductingSport), L.amount = new Decimal$1(L.amount), L.bonusAmount = new Decimal$1(L.bonusAmount), L.generalAmount = new Decimal$1(L.generalAmount), L.groupAmount.free_amount = new Decimal$1(L.groupAmount.free_amount), L.groupAmount.sports = new Decimal$1(L.groupAmount.sports)
    }), O
}
const [license, website, host, setWebsite] = createRoot(() => {
    const O = "BCD",
        M = getHostInfo(),
        L = {
            isUsHost: M[0] || !1,
            isBrHost: M[1] || !1,
            isSpreadHost: M[2] || !1,
            isSkHost: M[3] || !1,
            isRuHosts: M[4] || !1,
            isIdHost: M[5] || !1
        },
        [I, N] = createStore({
            isFiat: !1,
            isOfflineAgent: !1,
            bonusCurrency: O
        }),
        [R, _] = createStore({
            init: !1,
            license: "bc",
            isbc: !0,
            isbzall: !1,
            isbcng: !1,
            isbcke: !1,
            isbckm: !1,
            isbcmx: !1,
            is87: !1,
            isjb: !1,
            isbcall: !1,
            isesportsbr: !1,
            onlySports: !1,
            onlyBc: !0
        });
    return createEffect(on$1(() => Object.keys(wallet), H => {
        let G = O;
        H.length === 1 && H.map(z => {
            z.includes("FIAT") && (G = z)
        }), N({
            isFiat: G !== O,
            bonusCurrency: G
        })
    })), createEffect(on$1(() => system.init, H => {
        if (H) {
            const G = system.license,
                z = window.localStorage.getItem("dev_local_substation") || G;
            _({
                init: !0,
                license: z,
                isbc: z === "bc",
                isbzall: z === "bzall",
                isbcng: z === "bcng",
                isbcke: z === "bcke",
                isbckm: z === "bckm",
                isbcmx: z === "bcmx",
                is87: z === "87",
                isjb: z === "jb",
                isbcall: z === "bcall",
                isesportsbr: z === "esportsbr",
                onlySports: ["bcng", "bcke"].includes(z),
                onlyBc: !["87", "jb", "bzall", "esportsbr"].includes(z)
            })
        }
    })), [R, I, L, N]
});

function getHostInfo() {
    var O, M;
    const L = ((M = (O = window ? .location) == null ? void 0 : O.hostname) == null ? void 0 : M.match(/([^.]+\.[^.]+)$/)) || null,
        I = L ? L[0] : "bc.game",
        N = ["bcgame.us", "bcgame-us-mirror1.com"],
        R = ["bc.me", "bc.ai", "bcga.me"],
        _ = ["bc.xyz"],
        H = ["bcgame.sk"],
        G = ["bcigra.com", "bcfeast88.com", "bcwildwagers.com"],
        z = ["bcgame.vc"],
        W = window.localStorage.getItem("dev_local_substation_host");
    return W ? JSON.parse(W).map(K => K > 0) : [N.includes(I), R.includes(I), _.includes(I), H.includes(I), G.includes(I), z.includes(I)]
}
let _bcdResource;
const bcdResource = Object.defineProperties([], {
    0: {
        get() {
            return getBCDResource()[0]
        }
    },
    1: {
        get() {
            return getBCDResource()[1]
        }
    }
});

function getDepositBonusConfig(O, M, L = "casino") {
    var I;
    try {
        const N = systemUtils.getCurrency(M).currencyType === "FIAT" ? M : O.currencyName;
        if (O.newUserDepositBonusSelect) {
            const R = O.newUserDepositBonusSelect.casinoConfigBean.selected || !O.newUserDepositBonusSelect.selected && L === "casino" ? O.newUserDepositBonusSelect.casinoConfigBean : O.newUserDepositBonusSelect.sportConfigBean;
            return {
                bonusCurrencyName: N,
                rechargeUsd: systemUtils.convertCurrency(new Decimal(R.minDeposit), R.currency, "USDFIAT").toNumber(),
                bonusRatio: R.rate,
                maximumBcd: systemUtils.convertCurrency(new Decimal(R.maxBonus), R.currency, "BCD").toNumber(),
                count: R.seq,
                firstTimeLimitRatio: 0,
                firstTimeLimitTime: 0,
                freeSpin: 0,
                lottery: 0,
                minUsd: 0,
                weeks: [],
                userCurrency: "",
                maxUsd: 0
            }
        }
        if (O.specialDeposit) return {
            rechargeUsd: O.specialDeposit.minDeposit,
            bonusRatio: O.specialDeposit.maxBonusRatio,
            maximumBcd: O.specialDeposit.maxDeposit,
            bonusCurrencyName: O.specialDeposit.currency,
            count: 0,
            firstTimeLimitRatio: 0,
            firstTimeLimitTime: 0,
            freeSpin: 0,
            lottery: 0,
            minUsd: 0,
            weeks: [],
            userCurrency: "",
            maxUsd: 0
        };
        if (O.rechargeValidNum < 4 && O.bonusItems.length > 0) {
            const R = O.bonusItems[0];
            return (I = O.fiatRecharge) != null && I[M] ? { ...R,
                rechargeUsd: O.fiatRecharge[M]
            } : R
        }
        return null
    } catch {
        return null
    }
}
const INITIAL_VALUE = {
    bonusAmount: "0",
    bonusThreshold: "0",
    bonusItems: [],
    bonusLog: [],
    expiredTime: 0,
    firstExpiredTime: 0,
    maxBonusRatio: {},
    rechargeValidNum: 0,
    registerTime: 0,
    releaseAmount: "0",
    totalAmount: "0",
    dailyDeposit: !1,
    specialDeposit: null,
    currencyName: "",
    currencyPrice: "",
    wagerRatio: "0.2",
    fiatRecharge: null,
    newUserDepositBonusType: "COMMON",
    monthlyBonusItems: [],
    dailyDepositBonusTC: {
        casino: [],
        sport: []
    },
    newUserBonusTC: {
        freeSpinMaxWinnings: 0,
        freeSpinWagerTimes: 0
    },
    claimedKycFirstDepositBonus: !1
};

function getBCDResource() {
    return _bcdResource || (_bcdResource = createResource(async () => {
        const O = await getHttp().get("/activity/recharge-bonus/dashboard/"),
            M = O.expiredTime || 0;
        let L = O.rechargeValidNum || 0;
        return M < env.serverTime.getTime() && (L = 4), { ...O,
            bonusItems: O.bonusItems || [],
            bonusAmount: O.bonusAmount || "0",
            bonusThreshold: O.bonusThreshold || "0",
            expiredTime: M,
            bonusLog: O.bonusLog || [],
            firstExpiredTime: O.firstExpiredTime || 0,
            maxBonusRatio: O.maxBonusRatio || {},
            registerTime: O.registerTime || 0,
            releaseAmount: O.releaseAmount || "0",
            totalAmount: O.totalAmount || "0",
            rechargeValidNum: L
        }
    }, {
        storage: () => makePersisted(createSignal(INITIAL_VALUE), {
            name: "__bcd_resource__persisted"
        }),
        initialValue: INITIAL_VALUE
    })), _bcdResource
}
const $Reader = minimalExports.Reader,
    $Writer = minimalExports.Writer,
    $util = minimalExports.util,
    $root = minimalExports.roots.user || (minimalExports.roots.user = {}),
    BalanceChange = $root.BalanceChange = (() => {
        function O(M) {
            if (this.groupBalances = {}, this.groupChangeAmounts = {}, M)
                for (let L = Object.keys(M), I = 0; I < L.length; ++I) M[L[I]] != null && (this[L[I]] = M[L[I]])
        }
        return O.prototype.frontgroundId = 0, O.prototype.amountLogId = "", O.prototype.currencyName = "", O.prototype.mixedBalance = "", O.prototype.generalBalance = "", O.prototype.bonusBalance = "", O.prototype.mixedChangeAmount = "", O.prototype.generalChangeAmount = "", O.prototype.bonusChangeAmount = "", O.prototype.groupBalances = $util.emptyObject, O.prototype.groupChangeAmounts = $util.emptyObject, O.encode = function(M, L) {
            if (L || (L = $Writer.create()), M.frontgroundId != null && Object.hasOwnProperty.call(M, "frontgroundId") && L.uint32(8).int32(M.frontgroundId), M.amountLogId != null && Object.hasOwnProperty.call(M, "amountLogId") && L.uint32(18).string(M.amountLogId), M.currencyName != null && Object.hasOwnProperty.call(M, "currencyName") && L.uint32(26).string(M.currencyName), M.mixedBalance != null && Object.hasOwnProperty.call(M, "mixedBalance") && L.uint32(34).string(M.mixedBalance), M.generalBalance != null && Object.hasOwnProperty.call(M, "generalBalance") && L.uint32(42).string(M.generalBalance), M.bonusBalance != null && Object.hasOwnProperty.call(M, "bonusBalance") && L.uint32(50).string(M.bonusBalance), M.mixedChangeAmount != null && Object.hasOwnProperty.call(M, "mixedChangeAmount") && L.uint32(58).string(M.mixedChangeAmount), M.generalChangeAmount != null && Object.hasOwnProperty.call(M, "generalChangeAmount") && L.uint32(66).string(M.generalChangeAmount), M.bonusChangeAmount != null && Object.hasOwnProperty.call(M, "bonusChangeAmount") && L.uint32(74).string(M.bonusChangeAmount), M.groupBalances != null && Object.hasOwnProperty.call(M, "groupBalances"))
                for (let I = Object.keys(M.groupBalances), N = 0; N < I.length; ++N) L.uint32(82).fork().uint32(10).string(I[N]).uint32(18).string(M.groupBalances[I[N]]).ldelim();
            if (M.groupChangeAmounts != null && Object.hasOwnProperty.call(M, "groupChangeAmounts"))
                for (let I = Object.keys(M.groupChangeAmounts), N = 0; N < I.length; ++N) L.uint32(90).fork().uint32(10).string(I[N]).uint32(18).string(M.groupChangeAmounts[I[N]]).ldelim();
            return L
        }, O.decode = function(M, L) {
            M instanceof $Reader || (M = $Reader.create(M));
            let I = L === void 0 ? M.len : M.pos + L,
                N = new $root.BalanceChange,
                R, _;
            for (; M.pos < I;) {
                let H = M.uint32();
                switch (H >>> 3) {
                    case 1:
                        N.frontgroundId = M.int32();
                        break;
                    case 2:
                        N.amountLogId = M.string();
                        break;
                    case 3:
                        N.currencyName = M.string();
                        break;
                    case 4:
                        N.mixedBalance = M.string();
                        break;
                    case 5:
                        N.generalBalance = M.string();
                        break;
                    case 6:
                        N.bonusBalance = M.string();
                        break;
                    case 7:
                        N.mixedChangeAmount = M.string();
                        break;
                    case 8:
                        N.generalChangeAmount = M.string();
                        break;
                    case 9:
                        N.bonusChangeAmount = M.string();
                        break;
                    case 10:
                        N.groupBalances === $util.emptyObject && (N.groupBalances = {});
                        let G = M.uint32() + M.pos;
                        for (R = "", _ = ""; M.pos < G;) {
                            let W = M.uint32();
                            switch (W >>> 3) {
                                case 1:
                                    R = M.string();
                                    break;
                                case 2:
                                    _ = M.string();
                                    break;
                                default:
                                    M.skipType(W & 7);
                                    break
                            }
                        }
                        N.groupBalances[R] = _;
                        break;
                    case 11:
                        N.groupChangeAmounts === $util.emptyObject && (N.groupChangeAmounts = {});
                        let z = M.uint32() + M.pos;
                        for (R = "", _ = ""; M.pos < z;) {
                            let W = M.uint32();
                            switch (W >>> 3) {
                                case 1:
                                    R = M.string();
                                    break;
                                case 2:
                                    _ = M.string();
                                    break;
                                default:
                                    M.skipType(W & 7);
                                    break
                            }
                        }
                        N.groupChangeAmounts[R] = _;
                        break;
                    default:
                        M.skipType(H & 7);
                        break
                }
            }
            return N
        }, O
    })(),
    selectRedDot = createRoot(() => {
        const [O, M] = createStore({
            hasBonus: !1,
            showRedDot: !1
        });
        return onMount(() => {
            const L = localStorage.getItem("selectBonusReddot");
            L !== null && M("showRedDot", JSON.parse(L))
        }), {
            updateBalance: () => {
                if (!O.showRedDot) {
                    const L = O.hasBonus || Object.values(wallet).find(I => I.groupAmount.free_amount.gt(0) || I.groupAmount.sports.gt(0));
                    L || (M("showRedDot", !0), localStorage.setItem("selectBonusReddot", JSON.stringify(!0))), M("hasBonus", !!L)
                }
            },
            clearRedDot: () => {
                M("showRedDot", !1), localStorage.setItem("selectBonusReddot", JSON.stringify(!1))
            },
            store: O
        }
    }),
    Decimal_0 = new Decimal(0),
    DEDU_MOD = 20736e5;
let preDeduId = 0;
const deductions = {},
    DeductionDecimal = new WeakSet,
    PreDeduction = [];

function addPre(O) {
    PreDeduction.push(O), PreDeduction.length > 100 && PreDeduction.shift()
}
const deduction = {
        create(O, M, L, I = "nomal", N = 2e4) {
            let R = Date.now() % DEDU_MOD;
            R === preDeduId && R++;
            const _ = {
                id: R,
                amount: Decimal_0,
                currencyName: M,
                type: I,
                update: -1,
                currencyBonusType: L,
                timer: 0
            };
            return addPre(_.id), N > 0 && (_.timer = window.setTimeout(() => updateDeduction(_, void 0, 2), N)), deductions[R] = _, preDeduId = R, updateDeduction(_, O), R
        },
        createStatic(O = 0) {
            return DEDU_MOD + O
        },
        resolve(O, M = !0) {
            const L = deductions[O];
            L && updateDeduction(L, void 0, M ? 1 : 2)
        },
        cancel(O) {
            Object.values(deductions).forEach(M => {
                M.type === O && updateDeduction(M, void 0, 2)
            })
        },
        isResolve(O) {
            return DeductionDecimal.has(O)
        }
    },
    calculateNewBalance = (O, M, L, I) => {
        const N = new Decimal(O || 0).sub(M),
            R = N.eq(L) ? L : N;
        return I && DeductionDecimal.add(R), R
    };

function onBalanceChange({
    frontgroundId: O,
    amountLogId: M,
    currencyName: L,
    mixedBalance: I,
    generalBalance: N,
    bonusBalance: R,
    mixedChangeAmount: _,
    generalChangeAmount: H,
    bonusChangeAmount: G,
    groupBalances: z,
    groupChangeAmounts: W
}) {
    if (!wallet[L]) return;
    const K = deductions[O],
        X = O >= DEDU_MOD || PreDeduction.indexOf(O) !== -1;
    batch(() => {
        K && updateDeduction(K, K.currencyBonusType ? new Decimal(G || 0) : new Decimal(H || 0), 1), setWallet(L, Y => {
            let J = Y.generalAmount,
                Z = Y.groupAmount;
            if (z.sports) {
                const Q = calculateNewBalance(z.sports, Y.deductingSport, Y.groupAmount.sports, X);
                Z = { ...Z,
                    sports: Q
                }, J = Y.generalAmount.eq(new Decimal(N)) ? Y.generalAmount : new Decimal(N), selectRedDot.updateBalance()
            } else if (z.free_amount) {
                const Q = calculateNewBalance(z.free_amount, Y.deductingGame, Y.groupAmount.free_amount, X);
                Z = { ...Z,
                    free_amount: Q
                }, J = Y.generalAmount.eq(new Decimal(N)) ? Y.generalAmount : new Decimal(N), selectRedDot.updateBalance()
            } else J = calculateNewBalance(N, Y.deducting, Y.generalAmount, X);
            return {
                amount: new Decimal(I || 0),
                generalAmount: J,
                bonusAmount: new Decimal(R || 0),
                groupAmount: Z
            }
        })
    })
}

function updateDeduction(O, M, L = 1) {
    O.update += L, O.update > 1 ? (delete deductions[O.id], O.timer > 0 && window.clearTimeout(O.timer), applyDeduction(O, O.amount.negated())) : applyDeduction(O, M)
}

function formateAmount(O, M, L) {
    const I = O.add(L),
        N = M.sub(L),
        R = N.eq(M) ? M : N;
    return DeductionDecimal.add(R), {
        deducting: I,
        amount: R
    }
}

function applyDeduction(O, M = Decimal_0) {
    M === Decimal_0 || !wallet[O.currencyName] || (O.amount = O.amount.add(M), setWallet(O.currencyName, L => {
        const I = O.currencyBonusType;
        if (I === "game") {
            const {
                deducting: N,
                amount: R
            } = formateAmount(L.deductingGame, L.groupAmount.free_amount, M);
            return {
                deductingGame: N,
                groupAmount: { ...L.groupAmount,
                    free_amount: R
                }
            }
        } else if (I === "sport") {
            const {
                deducting: N,
                amount: R
            } = formateAmount(L.deductingSport, L.groupAmount.sports, M);
            return {
                deductingSport: N,
                groupAmount: { ...L.groupAmount,
                    sports: R
                }
            }
        } else {
            const {
                deducting: N,
                amount: R
            } = formateAmount(L.deducting, L.generalAmount, M);
            return {
                deducting: N,
                generalAmount: R
            }
        }
    }))
}
getSocket("/user").on("balance-change-v2", getSocket().decodeBind(onBalanceChange, BalanceChange));
const currentDepositResource = createRoot(() => useResource(() => account.login ? ["/activity/recharge-bonus/config/current/"] : void 0, async ([O]) => await getHttp().get(O)));

function getNextDepositOption(O, M) {
    const {
        currentUseConfigs: L
    } = O;
    return M ? L.map(I => {
        var N;
        const R = (N = I.fiatRecharge) == null ? void 0 : N[M];
        return R != null ? { ...I,
            minDeposit: R
        } : I
    }) : L
}

function getNextDepositSoleOption(O, M) {
    return getNextDepositOption(O, M)[0] ? ? null
}
const Ctx = createContext(() => !0);

function ActiveProvider(O) {
    const M = useIsActive();

    function L(I) {
        return createMemo(() => (O.force || M()) && I())
    }
    if (O.value !== void 0) return createComponent(Ctx.Provider, {
        get value() {
            return L(() => O.value)
        },
        get children() {
            return O.children
        }
    }); {
        const [I, N] = createSignal(!1), R = children(() => createComponent(Ctx.Provider, {
            get value() {
                return L(I)
            },
            get children() {
                return O.children
            }
        })), _ = resolveFirst(R), H = createVisibilityObserver()(_);
        return createComputed(() => N(H())), R
    }
}

function useIsActive() {
    return useContext(Ctx)
}

function useActiveMemo(O) {
    const M = useIsActive();
    let L;
    return () => ((!L || M()) && (L = O()), L)
}

function KeepScroll(O) {
    const M = {
            scrollTop: 0,
            scrollLeft: 0
        },
        L = useIsActive(),
        I = resolveElements(() => O.children),
        N = createMemo(() => {
            const R = I();
            return L() ? R instanceof Array ? R[0] : R : null
        });
    return createComputed(() => {
        const R = N();
        R && onCleanup(() => {
            M.scrollTop = R.scrollTop, M.scrollLeft = R.scrollLeft
        })
    }), createEffect(() => {
        const R = N();
        R && (R.scrollTop = M.scrollTop, R.scrollLeft = M.scrollLeft)
    }), I
}

function createKeepAlive() {
    const O = getOwner();
    let M;

    function L(I, N = () => !0) {
        return M || (M = createRoot(R => ({
            el: createComponent(ActiveProvider, {
                get value() {
                    return N()
                },
                get children() {
                    return I()
                }
            }),
            depose: R
        }), O)), M.el
    }
    return onCleanup(() => {
        M && M.depose()
    }), L
}

function Toggle(O) {
    let M = N => N(),
        L = M;
    O.keepAlive !== !1 && (M = createKeepAlive(), L = createKeepAlive());
    const I = createMemo(() => isBot || !!O.when);
    return createComponent(Show, {
        get when() {
            return I()
        },
        get fallback() {
            return L(() => O.fallback, () => !I())
        },
        get children() {
            return M(() => O.children, () => I())
        }
    })
}
var _tmpl$$D = template("<div>");

function Badge(O) {
    const M = mergeProps({
        overflow: 99,
        type: "number"
    }, O);
    return createComponent(Show, {
        get when() {
            return M.type === "number"
        },
        get fallback() {
            return (() => {
                var L = _tmpl$$D();
                return L.style.setProperty("background-clip", "padding-box, border-box"), L.style.setProperty("background-origin", "padding-box, border-box"), L.style.setProperty("border", "2px solid transparent"), L.style.setProperty("background-image", "linear-gradient(to right,rgb(var(--success)),rgb(var(--success))),linear-gradient(to right,#24EE894D,#24EE894D)"), createRenderEffect(() => className(L, cx("h-3 z-50 w-3 -translate-y-1/2 rounded-full", M.class))), L
            })()
        },
        get children() {
            return createComponent(Toggle, {
                get when() {
                    return M.value !== 0
                },
                get children() {
                    var L = _tmpl$$D();
                    return insert(L, () => Math.min(O.value, M.overflow)), createRenderEffect(I => {
                        var N = cx("badge", M.class),
                            R = M.style;
                        return N !== I.e && className(L, I.e = N), I.t = style(L, R, I.t), I
                    }, {
                        e: void 0,
                        t: void 0
                    }), L
                }
            })
        }
    })
}
var _tmpl$$C = template('<svg><path d="M20.6097 21.616L19.2692 20.2755C17.6782 21.5776 15.6458 22.3597 13.4305 22.3624C8.33103 22.3624 4.19653 18.2279 4.19653 13.1285C4.19653 8.02903 8.33103 3.89453 13.4305 3.89453C18.5299 3.89453 22.6644 8.02903 22.6644 13.1285C22.6617 15.3277 21.8903 17.3468 20.6061 18.9325L21.9492 20.2755L21.9189 20.305L21.9304 20.2952C22.2203 20.0651 22.643 20.0847 22.9115 20.3522L27.5873 25.0281C27.8753 25.3161 27.8753 25.7843 27.5873 26.0733L26.3994 27.2612C26.1113 27.5493 25.6431 27.5493 25.3542 27.2612L20.6783 22.5854C20.4108 22.3178 20.3912 21.8951 20.6212 21.6044L20.6105 21.6151L20.6097 21.616ZM13.4305 6.10536C9.55193 6.10536 6.40736 9.24993 6.40736 13.1285C6.40736 17.007 9.55193 20.1516 13.4305 20.1516C17.309 20.1516 20.4536 17.007 20.4536 13.1285C20.45 9.25082 17.3081 6.10893 13.4305 6.10536Z"></svg>', !1, !0, !1),
    _tmpl$2$l = template('<svg><path d="M6.32321 9.23054L13.0927 16L6.32321 22.7694L9.23051 25.6767L15.9998 18.9074L22.7695 25.6771L25.6768 22.7698L18.9073 16.0004L25.6768 9.23095L22.7695 6.32365L16.0002 13.0929L9.23051 6.32324L6.32321 9.23054Z"></svg>', !1, !0, !1),
    _tmpl$3$c = template('<svg><path d="M20.9717 9.59292L15.2482 15.3155L20.9717 21.0389L18.5143 23.4972L10.3325 15.3164L18.5143 7.1355L20.9717 9.59292Z"></svg>', !1, !0, !1),
    _tmpl$4$6 = template('<svg><path d="M26.9318 17.3244C26.6017 16.4761 26.6017 15.535 26.9318 14.6866L27.1252 14.1636C27.4645 13.2776 27.4521 12.2953 27.0905 11.4181C26.7288 10.5409 26.0453 9.83507 25.18 9.44514L24.6681 9.18364C23.854 8.8085 23.2006 8.15537 22.8253 7.34172L22.5978 6.83008C22.2076 5.96515 21.5014 5.28201 20.6238 4.92055C19.7461 4.5591 18.7634 4.54668 17.8769 4.88584L17.3537 5.07912C16.5049 5.40908 15.5633 5.40908 14.7145 5.07912L14.1913 4.88584C13.3006 4.53652 12.3096 4.54364 11.4241 4.90572C10.5385 5.2678 9.82664 5.95699 9.43632 6.83008L9.17469 7.34172C8.79936 8.15537 8.14592 8.8085 7.33186 9.18364L6.81996 9.41103C5.9546 9.80096 5.27113 10.5068 4.90949 11.384C4.54786 12.2612 4.53543 13.2434 4.87476 14.1295L5.06814 14.6525C5.39826 15.5008 5.39826 16.442 5.06814 17.2903L4.87476 17.8134C4.53543 18.6994 4.54786 19.6816 4.90949 20.5589C5.27113 21.4361 5.9546 22.1419 6.81996 22.5318L7.33186 22.7592C8.15779 23.1512 8.81281 23.8301 9.17469 24.6694L9.4022 25.181C9.79232 26.0459 10.4985 26.7291 11.3762 27.0905C12.2538 27.452 13.2365 27.4644 14.123 27.1253L14.6463 26.932C15.495 26.602 16.4367 26.602 17.2854 26.932L17.8087 27.1253C18.6952 27.4644 19.6779 27.452 20.5555 27.0905C21.4332 26.7291 22.1394 26.0459 22.5295 25.181L22.757 24.6694C23.1492 23.8438 23.8285 23.1891 24.6681 22.8275L25.18 22.6001C26.0453 22.2101 26.7288 21.5043 27.0905 20.6271C27.4521 19.7499 27.4645 18.7676 27.1252 17.8816L26.9318 17.3244ZM20.9483 13.4246L14.5553 19.8144C14.5042 19.8688 14.4425 19.9122 14.3741 19.9418C14.3056 19.9714 14.2318 19.9867 14.1571 19.9867C14.0825 19.9867 14.0087 19.9714 13.9402 19.9418C13.8717 19.9122 13.8101 19.8688 13.759 19.8144L11.0516 17.1425C10.9983 17.0897 10.956 17.0268 10.9271 16.9575C10.8983 16.8883 10.8834 16.8139 10.8834 16.7389C10.8834 16.6639 10.8983 16.5895 10.9271 16.5203C10.956 16.451 10.9983 16.3881 11.0516 16.3353L11.6545 15.7327C11.7056 15.6783 11.7673 15.6349 11.8358 15.6053C11.9042 15.5757 11.9781 15.5604 12.0527 15.5604C12.1273 15.5604 12.2011 15.5757 12.2696 15.6053C12.3381 15.6349 12.3998 15.6783 12.4508 15.7327L14.1571 17.4268L19.5491 12.0375C19.6554 11.9333 19.7984 11.875 19.9473 11.875C20.0961 11.875 20.2391 11.9333 20.3454 12.0375L20.9483 12.6401C21.0491 12.7458 21.1054 12.8863 21.1054 13.0323C21.1054 13.1784 21.0491 13.3189 20.9483 13.4246Z"></svg>', !1, !0, !1),
    _tmpl$5$3 = template('<svg><path fill-rule=evenodd d="M28.0002 16C28.0002 22.6274 22.6276 28 16.0002 28C9.37274 28 4.00015 22.6274 4.00015 16C4.00015 9.37258 9.37274 4 16.0002 4C22.6276 4 28.0002 9.37258 28.0002 16ZM20.9935 12.5801L17.5753 15.9983L20.9935 19.4165C21.4245 19.8475 21.4245 20.5608 20.9935 20.9918C20.7706 21.2147 20.4882 21.3188 20.2058 21.3188C19.9234 21.3188 19.6411 21.2147 19.4181 20.9918L16 17.5736L12.5818 20.9918C12.3589 21.2147 12.0765 21.3188 11.7941 21.3188C11.5118 21.3188 11.2294 21.2147 11.0065 20.9918C10.5755 20.5608 10.5755 19.8475 11.0065 19.4165L14.4246 15.9983L11.0065 12.5801C10.5755 12.1492 10.5755 11.4358 11.0065 11.0048C11.4375 10.5738 12.1508 10.5738 12.5818 11.0048L16 14.423L19.4181 11.0048C19.8491 10.5738 20.5625 10.5738 20.9935 11.0048C21.4245 11.4358 21.4245 12.1492 20.9935 12.5801Z"></svg>', !1, !0, !1),
    _tmpl$6$1 = template('<svg><path d="M17.7759 4.46932C18.3453 4.79163 18.8161 5.2624 19.1384 5.83183L28.6365 22.6151C29.6175 24.3487 29.0076 26.5494 27.274 27.5314C26.7318 27.8377 26.1201 27.9993 25.4971 27.9993H6.50093C4.50886 27.9993 2.89359 26.384 2.89359 24.392C2.89359 23.769 3.05427 23.1573 3.36154 22.6151L12.8596 5.83183C13.8406 4.09816 16.0422 3.48738 17.7759 4.46932ZM15.9821 21.6115C15.1185 21.6115 14.4176 22.3275 14.4176 23.2118C14.4176 24.096 15.1176 24.812 15.9821 24.812C16.8456 24.812 17.5466 24.096 17.5466 23.2118C17.5466 22.3275 16.8466 21.6115 15.9821 21.6115ZM15.9821 10.9436C15.1185 10.9436 14.4176 11.6436 14.4176 12.5081V18.9805C14.4176 19.844 15.1176 20.545 15.9821 20.545C16.8466 20.545 17.5466 19.845 17.5466 18.9805V12.5081C17.5466 11.6446 16.8466 10.9436 15.9821 10.9436Z"></svg>', !1, !0, !1),
    _tmpl$7 = template('<svg><path d="M16 3.99951C22.6277 3.99951 28.0005 9.3723 28.0005 16C28.0005 22.6277 22.6277 28.0005 16 28.0005C9.3723 28.0005 3.99951 22.6277 3.99951 16C3.99951 9.3723 9.3723 3.99951 16 3.99951ZM15.8389 20.2567C15.4428 20.2567 15.1188 20.3827 14.8488 20.6348C14.5788 20.8868 14.4528 21.2108 14.4528 21.6068C14.4528 22.0028 14.5788 22.3268 14.8488 22.5788C15.1188 22.8308 15.4428 22.9749 15.8389 22.9749C16.2349 22.9749 16.5589 22.8489 16.8289 22.5968C17.0989 22.3448 17.2429 22.0028 17.2429 21.6068C17.2429 21.2108 17.0989 20.8868 16.8469 20.6348C16.5769 20.3827 16.2349 20.2567 15.8389 20.2567ZM15.7994 8.7397C15.7763 8.7397 15.7531 8.74056 15.7308 8.74142C14.8308 8.77913 14.1322 9.53945 14.1708 10.4395L14.5008 18.2501H17.0646L17.4229 10.4386C17.4238 10.4138 17.4246 10.3889 17.4246 10.3641C17.4246 9.46659 16.6969 8.7397 15.8003 8.7397H15.7994Z"></svg>', !1, !0, !1),
    _tmpl$8 = template('<svg><path d="M16 3.82617C22.7235 3.82617 28.174 9.27663 28.174 16.0001C28.174 22.7236 22.7235 28.1741 16 28.1741C9.27649 28.1741 3.82603 22.7236 3.82603 16.0001C3.82603 9.27663 9.27649 3.82617 16 3.82617ZM16 6.43488C10.7174 6.43488 6.43474 10.7175 6.43474 16.0001C6.43474 21.2828 10.7174 25.5654 16 25.5654C21.2826 25.5654 25.5653 21.2828 25.5653 16.0001C25.5653 10.7175 21.2826 6.43488 16 6.43488ZM15.96 21.1445C16.68 21.1445 17.2644 21.7289 17.2644 22.4489C17.2644 23.1689 16.68 23.7532 15.96 23.7532C15.24 23.7532 14.6556 23.1689 14.6556 22.4489C14.6556 21.7289 15.24 21.1445 15.96 21.1445ZM16.1896 8.89315C17.5461 8.89315 18.6522 9.24793 19.487 9.99924C20.3218 10.7297 20.7392 11.7314 20.7392 13.0045C20.7392 14.048 20.4678 14.9036 19.967 15.5714C19.7791 15.7801 19.1739 16.3436 18.1722 17.2201C17.7965 17.5332 17.5252 17.888 17.3374 18.2636C17.1583 18.621 17.0565 18.9941 17.0304 19.4088L17.0244 19.6202V19.9123H14.6243V19.6202C14.6243 18.8271 14.7496 18.1384 15.0417 17.5749C15.2983 17.0428 16.0383 16.2314 17.2626 15.1227L17.4835 14.9245L17.7339 14.6323C18.1096 14.1732 18.2974 13.6723 18.2974 13.1506C18.2974 12.4619 18.0887 11.9192 17.713 11.5227C17.3165 11.1262 16.753 10.9384 16.0435 10.9384C15.1252 10.9384 14.4783 11.2097 14.0817 11.794C13.7591 12.2306 13.5922 12.8393 13.5643 13.6045L13.56 13.8393H11.1808C11.1808 12.2949 11.6191 11.0845 12.5374 10.2079C13.4348 9.33141 14.6452 8.89315 16.1896 8.89315Z"></svg>', !1, !0, !1),
    _tmpl$9 = template('<svg><path d="M17.0001 4.37061C15.8647 4.37061 14.9443 5.29101 14.9443 6.42638L14.9443 13.944H7.42668C6.2913 13.944 5.3709 14.8644 5.3709 15.9998C5.3709 17.1352 6.2913 18.0556 7.42667 18.0556H14.9441V25.5736C14.9441 26.709 15.8645 27.6294 16.9999 27.6294C18.1353 27.6294 19.0557 26.709 19.0557 25.5736V18.0559L26.5733 18.0559C27.7087 18.0559 28.6291 17.1355 28.6291 16.0002C28.6291 14.8648 27.7087 13.9444 26.5733 13.9444L19.0559 13.9444L19.0559 6.42638C19.0559 5.291 18.1355 4.37061 17.0001 4.37061Z"></svg>', !1, !0, !1),
    _tmpl$10 = template('<svg><path d="M26.7278 8.24791C27.5088 9.02896 27.5088 10.2953 26.7278 11.0763L14.9903 22.8136C14.2092 23.5947 12.9429 23.5947 12.1619 22.8136L5.24798 15.8998C4.46693 15.1188 4.46692 13.8525 5.24796 13.0714C6.029 12.2904 7.29533 12.2903 8.07639 13.0714L13.5761 18.571L23.8993 8.24788C24.6804 7.46684 25.9467 7.46685 26.7278 8.24791Z"></svg>', !1, !0, !1),
    _tmpl$11 = template('<svg><path d="M7.42668 13.9443H14.9443L19.0559 13.9447L26.5733 13.9447C27.7087 13.9447 28.6291 14.8651 28.6291 16.0005C28.6291 17.1358 27.7087 18.0562 26.5733 18.0562L19.0557 18.0562L14.9441 18.0559H7.42667C6.2913 18.0559 5.3709 17.1355 5.3709 16.0001C5.3709 14.8647 6.2913 13.9443 7.42668 13.9443Z"></svg>', !1, !0, !1),
    _tmpl$12 = template('<svg><path d="M11.7438 6.25969L11.7412 6.36956C11.7412 8.74747 13.6936 10.6754 16.1012 10.6754C18.5087 10.6754 20.4611 8.74747 20.4611 6.36956C20.4611 6.33642 20.4611 6.30329 20.4603 6.27015C24.5438 6.5457 27.7719 9.94559 27.7719 14.1006V20.7958C27.7719 25.1304 24.2586 28.6437 19.924 28.6437H12.0761C7.7414 28.6437 4.22815 25.1304 4.22815 20.7958V14.1006C4.22815 9.87757 7.56351 6.43321 11.7438 6.25969ZM12.6132 18.3097H10.8692C10.3879 18.3097 9.99724 18.7004 9.99724 19.1817V20.8821C9.99724 21.3634 10.3879 21.7541 10.8692 21.7541H12.6132C13.0946 21.7541 13.4852 21.3634 13.4852 20.8821V19.1817C13.4852 18.7004 13.0946 18.3097 12.6132 18.3097ZM16.9732 18.3097H15.2292C14.7478 18.3097 14.3572 18.7004 14.3572 19.1817V20.8821C14.3572 21.3634 14.7478 21.7541 15.2292 21.7541H16.9732C17.4545 21.7541 17.8452 21.3634 17.8452 20.8821V19.1817C17.8452 18.7004 17.4545 18.3097 16.9732 18.3097ZM21.3331 18.3097H19.5891C19.1078 18.3097 18.7171 18.7004 18.7171 19.1817V20.8821C18.7171 21.3634 19.1078 21.7541 19.5891 21.7541H21.3331C21.8145 21.7541 22.2051 21.3634 22.2051 20.8821V19.1817C22.2051 18.7004 21.8145 18.3097 21.3331 18.3097ZM12.6132 14.0038H10.8692C10.3879 14.0038 9.99724 14.3945 9.99724 14.8758V16.5762C9.99724 17.0575 10.3879 17.4482 10.8692 17.4482H12.6132C13.0946 17.4482 13.4852 17.0575 13.4852 16.5762V14.8758C13.4852 14.3945 13.0946 14.0038 12.6132 14.0038ZM16.9732 14.0038H15.2292C14.7478 14.0038 14.3572 14.3945 14.3572 14.8758V16.5762C14.3572 17.0575 14.7478 17.4482 15.2292 17.4482H16.9732C17.4545 17.4482 17.8452 17.0575 17.8452 16.5762V14.8758C17.8452 14.3945 17.4545 14.0038 16.9732 14.0038ZM21.3331 14.0038H19.5891C19.1078 14.0038 18.7171 14.3945 18.7171 14.8758V16.5762C18.7171 17.0575 19.1078 17.4482 19.5891 17.4482H21.3331C21.8145 17.4482 22.2051 17.0575 22.2051 16.5762V14.8758C22.2051 14.3945 21.8145 14.0038 21.3331 14.0038ZM16.0872 3.35596C17.7728 3.35596 19.1392 4.7058 19.1392 6.37043C19.1392 8.03506 17.7728 9.3849 16.0872 9.3849C14.4017 9.3849 13.0353 8.03506 13.0353 6.37043C13.0353 4.7058 14.4017 3.35596 16.0872 3.35596Z"></svg>', !1, !0, !1),
    _tmpl$13 = template('<svg><path d="M23.4576 12.8027C24.2971 12.8027 24.9774 13.4831 24.9774 14.3226C24.9774 14.4305 24.9661 14.5375 24.9435 14.6419L22.8712 24.2744C22.404 26.4467 20.4831 27.9988 18.2603 27.9988H12.6628C10.4399 27.9988 8.51988 26.4476 8.05183 24.2744L5.97952 14.6419C5.80292 13.8215 6.32491 13.0133 7.14531 12.8367C7.25057 12.814 7.35758 12.8027 7.46459 12.8027H23.4567H23.4576ZM17.9044 4.11679C20.825 4.63182 22.3257 6.46488 22.2517 9.28364L26.5486 10.0414C27.1898 10.1545 27.6178 10.7661 27.5047 11.4073L27.3864 12.078C27.2733 12.7192 26.6617 13.1472 26.0205 13.0341L5.89514 9.48548C5.25396 9.37238 4.82592 8.76078 4.93902 8.1196L5.05734 7.44884C5.17044 6.80766 5.78204 6.37962 6.42322 6.49272L12.0538 7.48451C12.9481 4.81104 14.9848 3.60176 17.9053 4.11592L17.9044 4.11679ZM14.3236 7.88557L19.9793 8.88258C19.928 7.40708 19.1433 6.64932 17.5077 6.36135C15.8721 6.07339 14.876 6.51621 14.3227 7.88557H14.3236Z"></svg>', !1, !0, !1),
    _tmpl$14 = template('<svg><path fill-rule=evenodd clip-rule=evenodd d="M23.3137 24.1394C23.7671 24.1394 24.1367 23.7698 24.1367 23.3164V14.9523H26.6674V23.3332C26.6575 25.1742 25.1548 26.6663 23.3137 26.6663H8.6469C6.81269 26.6457 5.3313 25.1498 5.3313 23.3126V8.65263C5.34883 6.81918 6.84774 5.33398 8.685 5.33398H17.0452V7.86469H8.685C8.23159 7.86469 7.86201 8.23428 7.86201 8.68768V23.3164C7.86201 23.7698 8.23159 24.1394 8.685 24.1394H23.3137ZM19.1338 7.86469V5.33398H26.6681V12.8682H24.1373V9.65699L13.4758 20.3148L11.6873 18.5263L22.345 7.86469H19.1338Z"></svg>', !1, !0, !1),
    _tmpl$15 = template('<svg><path d="M12.0434 17.0183C12.9801 17.0183 13.7395 17.7778 13.7395 18.7145V25.3283C13.7395 26.265 12.9801 27.0244 12.0434 27.0244H10.2648C8.85937 27.0244 7.721 25.8852 7.721 24.4806V19.5629C7.721 18.1575 8.86019 17.0191 10.2648 17.0191H12.0434V17.0183ZM21.8077 17.0183C23.2132 17.0183 24.3515 18.1575 24.3515 19.5621V24.4798C24.3515 25.8852 23.2123 27.0236 21.8077 27.0236H20.0291C19.0925 27.0236 18.333 26.2641 18.333 25.3275V18.7136C18.333 17.777 19.0925 17.0175 20.0291 17.0175L21.8077 17.0183ZM15.9999 4.97559C22.6881 4.97559 28.1292 10.2983 28.2926 16.9261L28.2966 17.2331V22.2398C28.2966 22.9307 27.7348 23.4909 27.0415 23.4909C26.3915 23.4909 25.8574 22.9985 25.7929 22.368L25.7863 22.2398V17.2331C25.7863 11.845 21.4043 7.47772 15.9991 7.47772C10.6853 7.47772 6.36132 11.6988 6.21596 16.9603L6.21188 17.2331V22.2553C6.21188 22.9462 5.65004 23.5064 4.95673 23.5064C4.30669 23.5064 3.77262 23.014 3.70893 22.3835L3.70239 22.2553V17.2331C3.70239 10.4641 9.20807 4.9764 15.9991 4.9764L15.9999 4.97559Z"></svg>', !1, !0, !1),
    _tmpl$16 = template('<svg><path d="M16 4C9.3726 4 4 9.3726 4 16C4 22.6274 9.3726 28 16 28C22.6274 28 28 22.6274 28 16C28 9.3726 22.6274 4 16 4ZM25.1671 12.0007C25.7022 13.2252 26.0008 14.578 26.0008 16.001C26.0008 17.424 25.7022 18.7768 25.1671 20.0013H20.6577C20.8782 18.7607 20.9984 17.412 20.9984 16.001C20.9984 14.59 20.8781 13.2413 20.6577 12.0007H25.1671ZM13.0018 16.001C13.0018 14.5641 13.112 13.2052 13.3125 12.0007H18.6857C18.8862 13.2052 18.9984 14.564 18.9984 16.001C18.9984 17.4381 18.8862 18.7969 18.6857 20.0014H13.3146C13.1142 18.7969 13.002 17.4381 13.002 16.001H13.0018ZM24.0007 10.0004H20.1927C19.7277 8.4392 19.0904 7.15453 18.3388 6.27668C20.6017 6.82169 22.6039 8.1385 24.0007 10.0004ZM16 7.00222C16.8878 7.00222 17.6875 8.16266 18.2367 10.0025H13.7634C14.3125 8.16073 15.1123 7.00222 16.0001 7.00222H16ZM13.6611 6.27879C12.9095 7.15458 12.2722 8.44329 11.8092 10.0025H8.0012C9.3974 8.14096 11.3989 6.82423 13.661 6.27879H13.6611ZM6.83291 12.0007H11.3423C11.1218 13.2413 11.0015 14.59 11.0015 16.001C11.0015 17.412 11.1219 18.7607 11.3423 20.0013H6.83286C6.28161 18.7398 5.99776 17.3777 5.99915 16.001C5.99915 14.578 6.29779 13.2252 6.83286 12.0007H6.83291ZM7.9994 22.0015H11.8074C12.2724 23.5627 12.9097 24.8474 13.6612 25.7253C11.3983 25.1802 9.3962 23.8634 7.9994 22.0015ZM16 24.9997C15.1122 24.9997 14.3125 23.8393 13.7633 21.9994H18.2366C17.6835 23.8412 16.8878 24.9997 15.9999 24.9997H16ZM18.3388 25.7233C19.0904 24.8475 19.7277 23.5588 20.1908 21.9995H23.9988C22.6025 23.8611 20.6011 25.1779 18.3389 25.7233H18.3388Z"></svg>', !1, !0, !1),
    _tmpl$17 = template('<svg><path d="M16.0004 4.19043C22.5223 4.19043 27.8094 9.47748 27.8094 15.9994C27.8094 22.5214 22.5223 27.8084 16.0004 27.8084C9.47846 27.8084 4.19141 22.5214 4.19141 15.9994C4.19141 9.47748 9.47846 4.19043 16.0004 4.19043ZM16.0004 6.72093C10.8761 6.72093 6.7219 10.8752 6.7219 15.9994C6.7219 21.1237 10.8761 25.2779 16.0004 25.2779C21.1247 25.2779 25.2789 21.1237 25.2789 15.9994C25.2789 10.8752 21.1247 6.72093 16.0004 6.72093ZM16.6684 9.25143V11.1544C17.7616 11.2623 18.8143 11.6402 19.5971 12.1531L18.7738 13.921C17.7751 13.3272 16.5875 12.9493 15.8317 12.9493C15.1164 12.9493 14.6306 13.2057 14.6306 13.7186C14.6306 15.4596 19.6646 14.4879 19.6511 17.8889C19.6511 19.5219 18.3959 20.4936 16.6684 20.696V22.7069H15.0489V20.669C13.8208 20.4936 12.6466 19.9672 11.7829 19.2385L12.6331 17.4975C13.6049 18.3612 14.9814 18.9146 15.9802 18.9146C16.8574 18.9146 17.3837 18.5907 17.3837 18.0103C17.3837 16.2289 12.3497 17.268 12.3497 13.921C12.3497 12.477 13.4024 11.4783 15.0489 11.2083V9.25143H16.6684Z"></svg>', !1, !0, !1),
    _tmpl$18 = template('<svg><path d="M22.824 2.238c3.064 0 5.548 2.484 5.548 5.548v0 11.901c0 2.319-1.881 4.2-4.2 4.2v0l-1.545-0.001v1.676c0 2.32-1.88 4.199-4.199 4.199h-10.6c-2.32 0-4.199-1.88-4.199-4.199v-13.25c0-2.319 1.88-4.2 4.199-4.2l1.544-0.001 0.001-1.673c0-2.251 1.771-4.089 3.996-4.195l0.203-0.005zM22.824 4.716h-9.251c-0.95 0-1.723 0.773-1.723 1.723v0 1.673l6.788 0.001c2.203 0 3.989 1.786 3.989 3.99v9.307h1.545c0.902 0 1.645-0.698 1.717-1.582l0.006-0.141v-11.901c0-1.693-1.377-3.070-3.070-3.070v0z"></svg>', !1, !0, !1),
    _tmpl$19 = template('<svg><path d="M26.678 25.601c0 0.595-0.485 1.080-1.080 1.080h-19.197c-0.595 0-1.080-0.485-1.080-1.080v-19.197c0-0.595 0.485-1.080 1.080-1.080h10.971v-3.321h-10.971c-2.411 0-4.378 1.949-4.401 4.355v0 19.238c0 2.411 1.944 4.374 4.351 4.401v0h19.247c2.416 0 4.388-1.958 4.401-4.374v-10.998h-3.321v10.976z"></svg>', !1, !0, !1),
    _tmpl$20 = template('<svg><path d="M20.113 2.003v3.321h4.214l-13.986 13.991 2.347 2.347 13.991-13.986v4.214h3.321v-9.887z"></svg>', !1, !0, !1),
    _tmpl$21 = template('<svg><path d="M12.926 30c-6.034 0-10.925-4.892-10.925-10.925v-6.149c0-6.034 4.892-10.925 10.925-10.925h6.149c6.033 0 10.925 4.892 10.925 10.925v6.149c0 6.034-4.892 10.925-10.925 10.925h-6.149zM12.926 27.62h6.149c4.721 0 8.546-3.827 8.546-8.546v-6.149c0-4.721-3.827-8.546-8.546-8.546h-6.149c-4.721 0-8.546 3.827-8.546 8.546v6.149c0 4.721 3.827 8.546 8.546 8.546zM16.001 12.841c-0.713 0-1.303-0.53-1.396-1.217l-0.012-0.191v-0.090c0-0.778 0.631-1.409 1.409-1.409 0.713 0 1.303 0.53 1.396 1.217l0.012 0.191v0.090c0 0.778-0.631 1.409-1.409 1.409zM16.001 22.874c-0.713 0-1.303-0.53-1.396-1.217l-0.012-0.191v-6.047c0-0.778 0.631-1.409 1.409-1.409 0.713 0 1.303 0.53 1.396 1.217l0.012 0.191v6.047c0 0.779-0.631 1.409-1.409 1.409z"></svg>', !1, !0, !1),
    _tmpl$22 = template("<svg>");
const icons = {
    Search: () => _tmpl$$C(),
    Close: () => _tmpl$2$l(),
    Arrow: () => _tmpl$3$c(),
    Success: () => _tmpl$4$6(),
    Error: () => _tmpl$5$3(),
    Caution: () => _tmpl$6$1(),
    Attention: () => _tmpl$7(),
    Help: () => _tmpl$8(),
    Add: () => _tmpl$9(),
    Check: () => _tmpl$10(),
    Minus: () => _tmpl$11(),
    Calendar: () => _tmpl$12(),
    Delete: () => _tmpl$13(),
    Share: () => _tmpl$14(),
    LiveSupport: () => _tmpl$15(),
    Language: () => _tmpl$16(),
    Currency: () => _tmpl$17(),
    Copy: () => _tmpl$18(),
    NewWindow: () => [_tmpl$19(), _tmpl$20()],
    Info: () => _tmpl$21()
};

function Icon(O) {
    const [, M] = splitProps(O, ["name", "class", "viewBox"]);
    return (() => {
        var L = _tmpl$22();
        return spread(L, mergeProps({
            get class() {
                return cx("icon", O.class)
            },
            get viewBox() {
                return O.viewBox || "0 0 32 32"
            }
        }, M), !0, !0), insert(L, createComponent(Switch$1, {
            get children() {
                return createComponent(Match, {
                    get when() {
                        return O.name
                    },
                    children: I => {
                        const N = I();
                        return icons[N]()
                    }
                })
            }
        })), L
    })()
}
var _tmpl$$B = template("<div>"),
    _tmpl$2$k = template('<span class="text-primary_brand text-sm font-normal">');

function Breadcrumb(O) {
    const [M, L] = splitProps(O, ["list", "class"]);
    return (() => {
        var I = _tmpl$$B();
        return spread(I, mergeProps(L, {
            get class() {
                return cx("px-4 h-10 leading-10 rounded !inline-flex center ellipsis bg-primary w-max", M.class)
            }
        }), !1, !0), insert(I, createComponent(Index, {
            get each() {
                return M.list
            },
            children: (N, R) => [R > 0 && createComponent(Icon, {
                class: "!w-3 !h-3 mx-1 mt-0.5",
                name: "Arrow"
            }), memo$2(() => memo$2(() => R !== M.list.length - 1)() ? createComponent(A$2, {
                class: "text-secondary cursor-pointer",
                get href() {
                    return N().path
                },
                get title() {
                    return N().label
                },
                get children() {
                    return N().label
                }
            }) : (() => {
                var _ = _tmpl$2$k();
                return insert(_, () => N().label), _
            })())]
        })), I
    })()
}
var _tmpl$$A = template('<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"><circle class=opacity-25 cx=12 cy=12 r=10 stroke=currentColor stroke-width=4></circle><path class=opacity-75 fill=currentColor d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">'),
    _tmpl$2$j = template('<div class="size-full flex-1 center">');

function Loading(O) {
    const M = createMemo(() => {
        var L, I;
        return ((L = O.class) == null ? void 0 : L.includes("text-")) || ((I = O.class) == null ? void 0 : I.includes("fill-"))
    });
    return (() => {
        var L = _tmpl$$A();
        return spread(L, mergeProps(O, {
            get class() {
                return memo$2(() => !!M())() ? cx("loading", O.class) : cx("loading text-brand", O.class)
            }
        }), !0, !0), L
    })()
}
const getFullLoading = createRoot(() => createRootPool(() => (() => {
    var O = _tmpl$2$j();
    return insert(O, createComponent(Loading, {})), O
})()));
var _tmpl$$z = template("<button>");
const types$1 = {
    brand: "button-brand",
    second: "button-second",
    input: "button-input"
};

function Button(O) {
    const [M, L] = splitProps(O, ["type", "onClick", "size"]), [I, N] = createSignal(!1), R = createMemo(() => O.size || !env.mobile && "m"), _ = () => {
        if (O.disabled) return;
        const H = O.onClick;
        return H && (G => {
            if (!I()) {
                const z = H(G);
                z instanceof Promise && (N(!0), z.then(() => N(!1)))
            }
        })
    };
    return (() => {
        var H = _tmpl$$z();
        return spread(H, mergeProps(L, {
            get class() {
                return cx("button", types$1[M.type], R() && `button-${R()}`, O.class)
            },
            get type() {
                return O.submit ? "submit" : "button"
            },
            get onClick() {
                return _()
            }
        }), !1, !0), insert(H, createComponent(Toggle, {
            get when() {
                return !I()
            },
            get fallback() {
                return createComponent(Loading, {
                    class: "text-alw_white"
                })
            },
            get children() {
                return O.children
            }
        })), H
    })()
}
var n = function() {
    return n = Object.assign || function(O) {
        for (var M, L = 1, I = arguments.length; L < I; L++)
            for (var N in M = arguments[L]) Object.prototype.hasOwnProperty.call(M, N) && (O[N] = M[N]);
        return O
    }, n.apply(this, arguments)
};

function t(O, M, L) {
    for (var I, N = 0, R = M.length; N < R; N++) !I && N in M || (I || (I = Array.prototype.slice.call(M, 0, N)), I[N] = M[N]);
    return O.concat(I || Array.prototype.slice.call(M))
}

function i(O) {
    return Array.prototype.slice.call(O)
}

function e(O, M) {
    var L = Math.floor(O);
    return L === M || L + 1 === M ? O : M
}

function r() {
    return Date.now()
}

function a(O, M, L) {
    if (M = "data-keen-slider-" + M, L === null) return O.removeAttribute(M);
    O.setAttribute(M, L || "")
}

function o(O, M) {
    return M = M || document, typeof O == "function" && (O = O(M)), Array.isArray(O) ? O : typeof O == "string" ? i(M.querySelectorAll(O)) : O instanceof HTMLElement ? [O] : O instanceof NodeList ? i(O) : []
}

function u(O) {
    O.raw && (O = O.raw), O.cancelable && !O.defaultPrevented && O.preventDefault()
}

function s(O) {
    O.raw && (O = O.raw), O.stopPropagation && O.stopPropagation()
}

function c() {
    var O = [];
    return {
        add: function(M, L, I, N) {
            M.addListener ? M.addListener(I) : M.addEventListener(L, I, N), O.push([M, L, I, N])
        },
        input: function(M, L, I, N) {
            this.add(M, L, function(R) {
                return function(_) {
                    _.nativeEvent && (_ = _.nativeEvent);
                    var H = _.changedTouches || [],
                        G = _.targetTouches || [],
                        z = _.detail && _.detail.x ? _.detail : null;
                    return R({
                        id: z ? z.identifier ? z.identifier : "i" : G[0] ? G[0] ? G[0].identifier : "e" : "d",
                        idChanged: z ? z.identifier ? z.identifier : "i" : H[0] ? H[0] ? H[0].identifier : "e" : "d",
                        raw: _,
                        x: z && z.x ? z.x : G[0] ? G[0].screenX : z ? z.x : _.pageX,
                        y: z && z.y ? z.y : G[0] ? G[0].screenY : z ? z.y : _.pageY
                    })
                }
            }(I), N)
        },
        purge: function() {
            O.forEach(function(M) {
                M[0].removeListener ? M[0].removeListener(M[2]) : M[0].removeEventListener(M[1], M[2], M[3])
            }), O = []
        }
    }
}

function d(O, M, L) {
    return Math.min(Math.max(O, M), L)
}

function l(O) {
    return (O > 0 ? 1 : 0) - (O < 0 ? 1 : 0) || +O
}

function f(O) {
    var M = O.getBoundingClientRect();
    return {
        height: e(M.height, O.offsetHeight),
        width: e(M.width, O.offsetWidth)
    }
}

function p(O, M, L, I) {
    var N = O && O[M];
    return N == null ? L : I && typeof N == "function" ? N() : N
}

function v(O) {
    return Math.round(1e6 * O) / 1e6
}

function h(O) {
    var M, L, I, N, R, _;

    function H(X) {
        _ || (_ = X), G(!0);
        var Y = X - _;
        Y > I && (Y = I);
        var J = N[L];
        if (J[3] < Y) return L++, H(X);
        var Z = J[2],
            Q = J[4],
            ee = J[0],
            te = J[1] * (0, J[5])(Q === 0 ? 1 : (Y - Z) / Q);
        if (te && O.track.to(ee + te), Y < I) return W();
        _ = null, G(!1), z(null), O.emit("animationEnded")
    }

    function G(X) {
        M.active = X
    }

    function z(X) {
        M.targetIdx = X
    }

    function W() {
        var X;
        X = H, R = window.requestAnimationFrame(X)
    }

    function K() {
        var X;
        X = R, window.cancelAnimationFrame(X), G(!1), z(null), _ && O.emit("animationStopped"), _ = null
    }
    return M = {
        active: !1,
        start: function(X) {
            if (K(), O.track.details) {
                var Y = 0,
                    J = O.track.details.position;
                L = 0, I = 0, N = X.map(function(Z) {
                    var Q, ee = Number(J),
                        te = (Q = Z.earlyExit) !== null && Q !== void 0 ? Q : Z.duration,
                        se = Z.easing,
                        ne = Z.distance * se(te / Z.duration) || 0;
                    J += ne;
                    var oe = I;
                    return I += te, Y += ne, [ee, Z.distance, oe, I, Z.duration, se]
                }), z(O.track.distToIdx(Y)), W(), O.emit("animationStarted")
            }
        },
        stop: K,
        targetIdx: null
    }
}

function m(O) {
    var M, L, I, N, R, _, H, G, z, W, K, X, Y, J, Z = 1 / 0,
        Q = [],
        ee = null,
        te = 0;

    function se(pe) {
        ue(te + pe)
    }

    function ne(pe) {
        var fe = oe(te + pe).abs;
        return ae(fe) ? fe : null
    }

    function oe(pe) {
        var fe = Math.floor(Math.abs(v(pe / L))),
            ce = v((pe % L + L) % L);
        ce === L && (ce = 0);
        var ve = l(pe),
            be = H.indexOf(t([], H).reduce(function(Se, Ee) {
                return Math.abs(Ee - ce) < Math.abs(Se - ce) ? Ee : Se
            })),
            ye = be;
        return ve < 0 && fe++, be === _ && (ye = 0, fe += ve > 0 ? 1 : -1), {
            abs: ye + fe * _ * ve,
            origin: be,
            rel: ye
        }
    }

    function ie(pe, fe, ce) {
        var ve;
        if (fe || !ge()) return re(pe, ce);
        if (!ae(pe)) return null;
        var be = oe(ce ? ? te),
            ye = be.abs,
            Se = pe - be.rel,
            Ee = ye + Se;
        ve = re(Ee);
        var Ae = re(Ee - _ * l(Se));
        return (Ae !== null && Math.abs(Ae) < Math.abs(ve) || ve === null) && (ve = Ae), v(ve)
    }

    function re(pe, fe) {
        if (fe == null && (fe = v(te)), !ae(pe) || pe === null) return null;
        pe = Math.round(pe);
        var ce = oe(fe),
            ve = ce.abs,
            be = ce.rel,
            ye = ce.origin,
            Se = le(pe),
            Ee = (fe % L + L) % L,
            Ae = H[ye],
            _e = Math.floor((pe - (ve - be)) / _) * L;
        return v(Ae - Ee - Ae + H[Se] + _e + (ye === _ ? L : 0))
    }

    function ae(pe) {
        return he(pe) === pe
    }

    function he(pe) {
        return d(pe, z, W)
    }

    function ge() {
        return N.loop
    }

    function le(pe) {
        return (pe % _ + _) % _
    }

    function ue(pe) {
        var fe;
        fe = pe - te, Q.push({
            distance: fe,
            timestamp: r()
        }), Q.length > 6 && (Q = Q.slice(-6)), te = v(pe);
        var ce = de().abs;
        if (ce !== ee) {
            var ve = ee !== null;
            ee = ce, ve && O.emit("slideChanged")
        }
    }

    function de(pe) {
        var fe = pe ? null : function() {
            if (_) {
                var ce = ge(),
                    ve = ce ? (te % L + L) % L : te,
                    be = (ce ? te % L : te) - R[0][2],
                    ye = 0 - (be < 0 && ce ? L - Math.abs(be) : be),
                    Se = 0,
                    Ee = oe(te),
                    Ae = Ee.abs,
                    _e = Ee.rel,
                    at = R[_e][2],
                    ct = R.map(function(Ve, xt) {
                        var Te = ye + Se;
                        (Te < 0 - Ve[0] || Te > 1) && (Te += (Math.abs(Te) > L - 1 && ce ? L : 0) * l(-Te));
                        var lt = xt - _e,
                            yt = l(lt),
                            Qe = lt + Ae;
                        ce && (yt === -1 && Te > at && (Qe += _), yt === 1 && Te < at && (Qe -= _), K !== null && Qe < K && (Te += L), X !== null && Qe > X && (Te -= L));
                        var wt = Te + Ve[0] + Ve[1],
                            kt = Math.max(Te >= 0 && wt <= 1 ? 1 : wt < 0 || Te > 1 ? 0 : Te < 0 ? Math.min(1, (Ve[0] + Te) / Ve[0]) : (1 - Te) / Ve[0], 0);
                        return Se += Ve[0] + Ve[1], {
                            abs: Qe,
                            distance: N.rtl ? -1 * Te + 1 - Ve[0] : Te,
                            portion: kt,
                            size: Ve[0]
                        }
                    });
                return Ae = he(Ae), _e = le(Ae), {
                    abs: he(Ae),
                    length: I,
                    max: J,
                    maxIdx: W,
                    min: Y,
                    minIdx: z,
                    position: te,
                    progress: ce ? ve / L : te / I,
                    rel: _e,
                    slides: ct,
                    slidesLength: L
                }
            }
        }();
        return M.details = fe, O.emit("detailsChanged"), fe
    }
    return M = {
        absToRel: le,
        add: se,
        details: null,
        distToIdx: ne,
        idxToDist: ie,
        init: function(pe) {
            if (function() {
                    if (N = O.options, R = (N.trackConfig || []).map(function(be) {
                            return [p(be, "size", 1), p(be, "spacing", 0), p(be, "origin", 0)]
                        }), _ = R.length) {
                        L = v(R.reduce(function(be, ye) {
                            return be + ye[0] + ye[1]
                        }, 0));
                        var ce, ve = _ - 1;
                        I = v(L + R[0][2] - R[ve][0] - R[ve][2] - R[ve][1]), H = R.reduce(function(be, ye) {
                            if (!be) return [0];
                            var Se = R[be.length - 1],
                                Ee = be[be.length - 1] + (Se[0] + Se[2]) + Se[1];
                            return Ee -= ye[2], be[be.length - 1] > Ee && (Ee = be[be.length - 1]), Ee = v(Ee), be.push(Ee), (!ce || ce < Ee) && (G = be.length - 1), ce = Ee, be
                        }, null), I === 0 && (G = 0), H.push(v(L))
                    }
                }(), !_) return de(!0);
            var fe;
            (function() {
                var ce = O.options.range,
                    ve = O.options.loop;
                K = z = ve ? p(ve, "min", -1 / 0) : 0, X = W = ve ? p(ve, "max", Z) : G;
                var be = p(ce, "min", null),
                    ye = p(ce, "max", null);
                be !== null && (z = be), ye !== null && (W = ye), Y = z === -1 / 0 ? z : O.track.idxToDist(z || 0, !0, 0), J = W === Z ? W : ie(W, !0, 0), ye === null && (X = W), p(ce, "align", !1) && W !== Z && R[le(W)][2] === 0 && (J -= 1 - R[le(W)][0], W = ne(J - te)), Y = v(Y), J = v(J)
            })(), fe = pe, Number(fe) === fe ? se(re(he(pe))) : de()
        },
        to: ue,
        velocity: function() {
            var pe = r(),
                fe = Q.reduce(function(ce, ve) {
                    var be = ve.distance,
                        ye = ve.timestamp;
                    return pe - ye > 200 || (l(be) !== l(ce.distance) && ce.distance && (ce = {
                        distance: 0,
                        lastTimestamp: 0,
                        time: 0
                    }), ce.time && (ce.distance += be), ce.lastTimestamp && (ce.time += ye - ce.lastTimestamp), ce.lastTimestamp = ye), ce
                }, {
                    distance: 0,
                    lastTimestamp: 0,
                    time: 0
                });
            return fe.distance / fe.time || 0
        }
    }
}

function g(O) {
    var M, L, I, N, R, _, H, G;

    function z(ee) {
        return 2 * ee
    }

    function W(ee) {
        return d(ee, H, G)
    }

    function K(ee) {
        return 1 - Math.pow(1 - ee, 3)
    }

    function X() {
        return I ? O.track.velocity() : 0
    }

    function Y() {
        Q();
        var ee = O.options.mode === "free-snap",
            te = O.track,
            se = X();
        N = l(se);
        var ne = O.track.details,
            oe = [];
        if (se || !ee) {
            var ie = J(se),
                re = ie.dist,
                ae = ie.dur;
            if (ae = z(ae), re *= N, ee) {
                var he = te.idxToDist(te.distToIdx(re), !0);
                he && (re = he)
            }
            oe.push({
                distance: re,
                duration: ae,
                easing: K
            });
            var ge = ne.position,
                le = ge + re;
            if (le < R || le > _) {
                var ue = le < R ? R - ge : _ - ge,
                    de = 0,
                    pe = se;
                if (l(ue) === N) {
                    var fe = Math.min(Math.abs(ue) / Math.abs(re), 1),
                        ce = function(ye) {
                            return 1 - Math.pow(1 - ye, 1 / 3)
                        }(fe) * ae;
                    oe[0].earlyExit = ce, pe = se * (1 - fe)
                } else oe[0].earlyExit = 0, de += ue;
                var ve = J(pe, 100),
                    be = ve.dist * N;
                O.options.rubberband && (oe.push({
                    distance: be,
                    duration: z(ve.dur),
                    easing: K
                }), oe.push({
                    distance: -be + de,
                    duration: 500,
                    easing: K
                }))
            }
            O.animator.start(oe)
        } else O.moveToIdx(W(ne.abs), !0, {
            duration: 500,
            easing: function(ye) {
                return 1 + --ye * ye * ye * ye * ye
            }
        })
    }

    function J(ee, te) {
        te === void 0 && (te = 1e3);
        var se = 147e-9 + (ee = Math.abs(ee)) / te;
        return {
            dist: Math.pow(ee, 2) / se,
            dur: ee / se
        }
    }

    function Z() {
        var ee = O.track.details;
        ee && (R = ee.min, _ = ee.max, H = ee.minIdx, G = ee.maxIdx)
    }

    function Q() {
        O.animator.stop()
    }
    O.on("updated", Z), O.on("optionsChanged", Z), O.on("created", Z), O.on("dragStarted", function() {
        I = !1, Q(), M = L = O.track.details.abs
    }), O.on("dragChecked", function() {
        I = !0
    }), O.on("dragEnded", function() {
        var ee = O.options.mode;
        ee === "snap" && function() {
            var te = O.track,
                se = O.track.details,
                ne = se.position,
                oe = l(X());
            (ne > _ || ne < R) && (oe = 0);
            var ie = M + oe;
            se.slides[te.absToRel(ie)].portion === 0 && (ie -= oe), M !== L && (ie = L), l(te.idxToDist(ie, !0)) !== oe && (ie += oe), ie = W(ie);
            var re = te.idxToDist(ie, !0);
            O.animator.start([{
                distance: re,
                duration: 500,
                easing: function(ae) {
                    return 1 + --ae * ae * ae * ae * ae
                }
            }])
        }(), ee !== "free" && ee !== "free-snap" || Y()
    }), O.on("dragged", function() {
        L = O.track.details.abs
    })
}

function b(O) {
    var M, L, I, N, R, _, H, G, z, W, K, X, Y, J, Z, Q, ee, te, se = c();

    function ne(de) {
        if (_ && G === de.id) {
            var pe = ae(de);
            if (z) {
                if (!re(de)) return ie(de);
                W = pe, z = !1, O.emit("dragChecked")
            }
            if (Q) return W = pe;
            u(de);
            var fe = function(ve) {
                if (ee === -1 / 0 && te === 1 / 0) return ve;
                var be = O.track.details,
                    ye = be.length,
                    Se = be.position,
                    Ee = d(ve, ee - Se, te - Se);
                if (ye === 0) return 0;
                if (!O.options.rubberband) return Ee;
                if (Se <= te && Se >= ee || Se < ee && L > 0 || Se > te && L < 0) return ve;
                var Ae = (Se < ee ? Se - ee : Se - te) / ye,
                    _e = N * ye,
                    at = Math.abs(Ae * _e),
                    ct = Math.max(0, 1 - at / R * 2);
                return ct * ct * ve
            }(H(W - pe) / N * I);
            L = l(fe);
            var ce = O.track.details.position;
            (ce > ee && ce < te || ce === ee && L > 0 || ce === te && L < 0) && s(de), K += fe, !X && Math.abs(K * N) > 5 && (X = !0), O.track.add(fe), W = pe, O.emit("dragged")
        }
    }

    function oe(de) {
        !_ && O.track.details && O.track.details.length && (K = 0, _ = !0, X = !1, z = !0, G = de.id, re(de), W = ae(de), O.emit("dragStarted"))
    }

    function ie(de) {
        _ && G === de.idChanged && (_ = !1, O.emit("dragEnded"))
    }

    function re(de) {
        var pe = he(),
            fe = pe ? de.y : de.x,
            ce = pe ? de.x : de.y,
            ve = Y !== void 0 && J !== void 0 && Math.abs(J - ce) <= Math.abs(Y - fe);
        return Y = fe, J = ce, ve
    }

    function ae(de) {
        return he() ? de.y : de.x
    }

    function he() {
        return O.options.vertical
    }

    function ge() {
        N = O.size, R = he() ? window.innerHeight : window.innerWidth;
        var de = O.track.details;
        de && (ee = de.min, te = de.max)
    }

    function le(de) {
        X && (s(de), u(de))
    }

    function ue() {
        if (se.purge(), O.options.drag && !O.options.disabled) {
            var de;
            de = O.options.dragSpeed || 1, H = typeof de == "function" ? de : function(fe) {
                    return fe * de
                }, I = O.options.rtl ? -1 : 1, ge(), M = O.container,
                function() {
                    var fe = "data-keen-slider-clickable";
                    o("[".concat(fe, "]:not([").concat(fe, "=false])"), M).map(function(ce) {
                        se.add(ce, "dragstart", s), se.add(ce, "mousedown", s), se.add(ce, "touchstart", s)
                    })
                }(), se.add(M, "dragstart", function(fe) {
                    u(fe)
                }), se.add(M, "click", le, {
                    capture: !0
                }), se.input(M, "ksDragStart", oe), se.input(M, "ksDrag", ne), se.input(M, "ksDragEnd", ie), se.input(M, "mousedown", oe), se.input(M, "mousemove", ne), se.input(M, "mouseleave", ie), se.input(M, "mouseup", ie), se.input(M, "touchstart", oe, {
                    passive: !0
                }), se.input(M, "touchmove", ne, {
                    passive: !1
                }), se.input(M, "touchend", ie), se.input(M, "touchcancel", ie), se.add(window, "wheel", function(fe) {
                    _ && u(fe)
                });
            var pe = "data-keen-slider-scrollable";
            o("[".concat(pe, "]:not([").concat(pe, "=false])"), O.container).map(function(fe) {
                return function(ce) {
                    var ve;
                    se.input(ce, "touchstart", function(be) {
                        ve = ae(be), Q = !0, Z = !0
                    }, {
                        passive: !0
                    }), se.input(ce, "touchmove", function(be) {
                        var ye = he(),
                            Se = ye ? ce.scrollHeight - ce.clientHeight : ce.scrollWidth - ce.clientWidth,
                            Ee = ve - ae(be),
                            Ae = ye ? ce.scrollTop : ce.scrollLeft,
                            _e = ye && ce.style.overflowY === "scroll" || !ye && ce.style.overflowX === "scroll";
                        if (ve = ae(be), (Ee < 0 && Ae > 0 || Ee > 0 && Ae < Se) && Z && _e) return Q = !0;
                        Z = !1, u(be), Q = !1
                    }), se.input(ce, "touchend", function() {
                        Q = !1
                    })
                }(fe)
            })
        }
    }
    O.on("updated", ge), O.on("optionsChanged", ue), O.on("created", ue), O.on("destroyed", se.purge)
}

function x(O) {
    var M, L, I = null;

    function N(Y, J, Z) {
        O.animator.active ? _(Y, J, Z) : requestAnimationFrame(function() {
            return _(Y, J, Z)
        })
    }

    function R() {
        N(!1, !1, L)
    }

    function _(Y, J, Z) {
        var Q = 0,
            ee = O.size,
            te = O.track.details;
        if (te && M) {
            var se = te.slides;
            M.forEach(function(ne, oe) {
                if (Y) !I && J && G(ne, null, Z), z(ne, null, Z);
                else {
                    if (!se[oe]) return;
                    var ie = se[oe].size * ee;
                    !I && J && G(ne, ie, Z), z(ne, se[oe].distance * ee - Q, Z), Q += ie
                }
            })
        }
    }

    function H(Y) {
        return O.options.renderMode === "performance" ? Math.round(Y) : Y
    }

    function G(Y, J, Z) {
        var Q = Z ? "height" : "width";
        J !== null && (J = H(J) + "px"), Y.style["min-" + Q] = J, Y.style["max-" + Q] = J
    }

    function z(Y, J, Z) {
        if (J !== null) {
            J = H(J);
            var Q = Z ? J : 0;
            J = "translate3d(".concat(Z ? 0 : J, "px, ").concat(Q, "px, 0)")
        }
        Y.style.transform = J, Y.style["-webkit-transform"] = J
    }

    function W() {
        M && (_(!0, !0, L), M = null), O.on("detailsChanged", R, !0)
    }

    function K() {
        N(!1, !0, L)
    }

    function X() {
        W(), L = O.options.vertical, O.options.disabled || O.options.renderMode === "custom" || (I = p(O.options.slides, "perView", null) === "auto", O.on("detailsChanged", R), (M = O.slides).length && K())
    }
    O.on("created", X), O.on("optionsChanged", X), O.on("beforeOptionsChanged", function() {
        W()
    }), O.on("updated", K), O.on("destroyed", W)
}

function k(O, M) {
    return function(L) {
        var I, N, R, _, H, G = c();

        function z(re) {
            var ae;
            a(L.container, "reverse", (ae = L.container, window.getComputedStyle(ae, null).getPropertyValue("direction") !== "rtl" || re ? null : "")), a(L.container, "v", L.options.vertical && !re ? "" : null), a(L.container, "disabled", L.options.disabled && !re ? "" : null)
        }

        function W() {
            K() && Q()
        }

        function K() {
            var re = null;
            if (_.forEach(function(he) {
                    he.matches && (re = he.__media)
                }), re === I) return !1;
            I || L.emit("beforeOptionsChanged"), I = re;
            var ae = re ? R.breakpoints[re] : R;
            return L.options = n(n({}, R), ae), z(), oe(), ie(), te(), !0
        }

        function X(re) {
            var ae = f(re);
            return (L.options.vertical ? ae.height : ae.width) / L.size || 1
        }

        function Y() {
            return L.options.trackConfig.length
        }

        function J(re) {
            for (var ae in I = !1, R = n(n({}, M), re), G.purge(), N = L.size, _ = [], R.breakpoints || []) {
                var he = window.matchMedia(ae);
                he.__media = ae, _.push(he), G.add(he, "change", W)
            }
            G.add(window, "orientationchange", ne), G.add(window, "resize", se), K()
        }

        function Z(re) {
            L.animator.stop();
            var ae = L.track.details;
            L.track.init(re ? ? (ae ? ae.abs : 0))
        }

        function Q(re) {
            Z(re), L.emit("optionsChanged")
        }

        function ee(re, ae) {
            if (re) return J(re), void Q(ae);
            oe(), ie();
            var he = Y();
            te(), Y() !== he ? Q(ae) : Z(ae), L.emit("updated")
        }

        function te() {
            var re = L.options.slides;
            if (typeof re == "function") return L.options.trackConfig = re(L.size, L.slides);
            for (var ae = L.slides, he = ae.length, ge = typeof re == "number" ? re : p(re, "number", he, !0), le = [], ue = p(re, "perView", 1, !0), de = p(re, "spacing", 0, !0) / L.size || 0, pe = ue === "auto" ? de : de / ue, fe = p(re, "origin", "auto"), ce = 0, ve = 0; ve < ge; ve++) {
                var be = ue === "auto" ? X(ae[ve]) : 1 / ue - de + pe,
                    ye = fe === "center" ? .5 - be / 2 : fe === "auto" ? 0 : fe;
                le.push({
                    origin: ye,
                    size: be,
                    spacing: de
                }), ce += be
            }
            if (ce += de * (ge - 1), fe === "auto" && !L.options.loop && ue !== 1) {
                var Se = 0;
                le.map(function(Ee) {
                    var Ae = ce - Se;
                    return Se += Ee.size + de, Ae >= 1 || (Ee.origin = 1 - Ae - (ce > 1 ? 0 : 1 - ce)), Ee
                })
            }
            L.options.trackConfig = le
        }

        function se() {
            oe();
            var re = L.size;
            L.options.disabled || re === N || (N = re, ee())
        }

        function ne() {
            se(), setTimeout(se, 500), setTimeout(se, 2e3)
        }

        function oe() {
            var re = f(L.container);
            L.size = (L.options.vertical ? re.height : re.width) || 1
        }

        function ie() {
            L.slides = o(L.options.selector, L.container)
        }
        L.container = (H = o(O, document)).length ? H[0] : null, L.destroy = function() {
            G.purge(), L.emit("destroyed"), z(!0)
        }, L.prev = function() {
            L.moveToIdx(L.track.details.abs - 1, !0)
        }, L.next = function() {
            L.moveToIdx(L.track.details.abs + 1, !0)
        }, L.update = ee, J(L.options)
    }
}
var y = function(O, M, L) {
        try {
            return function(I, N) {
                var R, _ = {};
                return R = {
                        emit: function(H) {
                            _[H] && _[H].forEach(function(z) {
                                z(R)
                            });
                            var G = R.options && R.options[H];
                            G && G(R)
                        },
                        moveToIdx: function(H, G, z) {
                            var W = R.track.idxToDist(H, G);
                            if (W) {
                                var K = R.options.defaultAnimation;
                                R.animator.start([{
                                    distance: W,
                                    duration: p(z || K, "duration", 500),
                                    easing: p(z || K, "easing", function(X) {
                                        return 1 + --X * X * X * X * X
                                    })
                                }])
                            }
                        },
                        on: function(H, G, z) {
                            z === void 0 && (z = !1), _[H] || (_[H] = []);
                            var W = _[H].indexOf(G);
                            W > -1 ? z && delete _[H][W] : z || _[H].push(G)
                        },
                        options: I
                    },
                    function() {
                        if (R.track = m(R), R.animator = h(R), N)
                            for (var H = 0, G = N; H < G.length; H++)(0, G[H])(R);
                        R.track.init(R.options.initial || 0), R.emit("created")
                    }(), R
            }(M, t([k(O, {
                drag: !0,
                mode: "snap",
                renderMode: "precision",
                rubberband: !0,
                selector: ".keen-slider__slide"
            }), x, b, g], L || [], !0))
        } catch (I) {
            console.error(I)
        }
    },
    _tmpl$$y = template("<div>");

function Carousel(O) {
    const [M, L] = splitProps(O, ["ref", "options", "auto"]);
    let I;
    const N = children(() => O.children),
        R = () => ({
            loop: H,
            ...M.options,
            selector(G) {
                return G.childNodes
            }
        }),
        _ = () => M.auto || 0,
        H = _() > 0;
    return createComponent(ActiveProvider, {
        get children() {
            var G = _tmpl$$y();
            return use(z => {
                I = new y(z, R()), O.ref && O.ref(I), createEffect(() => {
                    N() && I.update(R())
                }), onCleanup(() => {
                    I.destroy()
                }), H && createAuto(() => I, _)
            }, G), spread(G, mergeProps(L, {
                get class() {
                    return cx("carousels", L.class)
                }
            }), !1, !0), insert(G, N), G
        }
    })
}

function createAuto(O, M) {
    const L = useIsActive(),
        [I, N] = createSignal(!1),
        R = getOwner(),
        _ = () => createSubRoot(K => (createTimer(() => {
            const X = O();
            X.slides.length > 0 && (X.options.loop ? O().next() : X.moveToIdx((X.track.details.abs + 1) % X.slides.length))
        }, () => {
            if (I() || !L()) return !1;
            const X = M();
            return X > 0 ? X : !1
        }, setInterval), K), R);
    let H = _();
    O().on("slideChanged", () => {
        H(), H = _()
    });
    const G = N.bind(void 0, !0),
        z = N.bind(void 0, !1);
    let W = !1;
    createEffect(() => {
        const K = O();
        K.container.addEventListener("mouseover", () => {
            W = !0, G()
        }), K.container.addEventListener("mouseout", () => {
            W = !1, z()
        }), K.on("dragStarted", G), K.on("animationEnded", () => {
            W || z()
        }), K.on("updated", z)
    })
}
const firstDateOfMonth = (O, M, L) => {
        const I = new Date(0);
        return I.setFullYear(O, M, L), I.setHours(0, 0, 0, 0)
    },
    addDays = (O, M) => {
        const L = new Date(O);
        return L.setDate(L.getDate() + M)
    },
    dayDiff = (O, M) => (O - M + 7) % 7,
    dayOfTheWeekOf = (O, M, L = 0) => {
        const I = new Date(O).getDay();
        return addDays(O, dayDiff(M, L) - dayDiff(I, L))
    },
    addMonths = (O, M) => {
        const L = O,
            I = L.getMonth() + M;
        let N = I % 12;
        N < 0 && (N += 12);
        const R = L.setMonth(I);
        return L.getMonth() !== N ? L.setDate(0) : R
    },
    addYears = (O, M) => {
        const L = O,
            I = L.getMonth(),
            N = L.setFullYear(L.getFullYear() + M);
        return I === 1 && L.getMonth() === 2 ? L.setDate(0) : N
    },
    getFormattedDate = (O, M, L) => {
        let I = {
            day: "numeric",
            month: "long",
            year: "numeric"
        };
        return L && (I = L), new Intl.DateTimeFormat(O, I).format(M)
    },
    goToPrevNext = (O, M, L) => {
        switch (O) {
            case "days":
                return addMonths(M, L);
            case "months":
                return addYears(M, L);
            case "years":
                return addYears(M, L * 10);
            case "decades":
                return addYears(M, L * 100);
            default:
                return addYears(M, L * 10)
        }
    },
    startOfYearPeriod = (O, M) => {
        const L = O.getFullYear();
        return Math.floor(L / M) * M
    },
    DatePickerContext = createContext(null);

function useDatePicker() {
    return useContext(DatePickerContext)
}

function useCurrentDate() {
    const O = useDatePicker();
    return createMemo(() => {
        const M = O.value();
        return Array.isArray(M) ? M : [M, M]
    })
}

function useFormatDate() {
    return (O, M) => getFormattedDate(setting.lang, O, M)
}
const ButtonPrevMonth = () => {
        const {
            state: O,
            setState: M
        } = useDatePicker();
        return createComponent(Button, {
            class: "text-secondary",
            onClick: () => M("selectedDate", new Date(goToPrevNext(O.view, O.selectedDate, -1))),
            get children() {
                return createComponent(Icon, {
                    class: "w-6 h-6",
                    name: "Arrow"
                })
            }
        })
    },
    ButtonSelectMonth = () => {
        const {
            state: O,
            setState: M
        } = useDatePicker(), L = useFormatDate(), I = () => O.view === "days" ? "months" : O.view === "months" ? "years" : O.view === "years" ? "decades" : O.view, N = () => {
            switch (O.view) {
                case "decades":
                    return `${startOfYearPeriod(O.selectedDate,100)}-${startOfYearPeriod(O.selectedDate,100)+90}`;
                case "years":
                    return `${startOfYearPeriod(O.selectedDate,10)}-${startOfYearPeriod(O.selectedDate,10)+9}`;
                case "months":
                    return L(O.selectedDate, {
                        year: "numeric"
                    });
                default:
                    return L(O.selectedDate, {
                        month: "long",
                        year: "numeric"
                    })
            }
        };
        return createComponent(Button, {
            class: "text-lg",
            onClick: () => M("view", I()),
            get children() {
                return N()
            }
        })
    },
    ButtonNextMonth = () => {
        const {
            state: O,
            setState: M
        } = useDatePicker();
        return createComponent(Button, {
            class: "text-secondary",
            onClick: () => {
                M("selectedDate", new Date(goToPrevNext(O.view, O.selectedDate, 1)))
            },
            get children() {
                return createComponent(Icon, {
                    class: "w-6 h-6 rotate-180",
                    name: "Arrow"
                })
            }
        })
    };
var _tmpl$$x = template('<div class="datepicker-table text-center gap-1">'),
    _tmpl$2$i = template('<span class="flex-1 text-secondary">'),
    _tmpl$3$b = template("<div>");
const Days = O => {
    const {
        state: M,
        value: L,
        onChange: I
    } = useDatePicker(), N = (new Date(O.start).getDay() + 6) % 7, R = M.options.weekDays || [], _ = R.slice(N).concat(R.slice(0, N)), H = Array.isArray(L()), G = useCurrentDate(), z = createMemo(() => G().map(Z => Z.getTime()));

    function W(Z) {
        return `${Z.getFullYear()}${Z.getMonth()}`
    }
    const K = createMemo(() => W(M.selectedDate)),
        X = createSelector(K),
        Y = Z => {
            var Q, ee, te;
            const se = Z(),
                ne = (Q = M.options) == null ? void 0 : Q.minDate,
                oe = (ee = M.options) == null ? void 0 : ee.disabledDates,
                ie = (te = M.options) == null ? void 0 : te.maxDate;
            return oe && oe.indexOf(se) >= 0 || ne && se < ne || ie && se > ie
        };
    let J = G()[1];
    return (() => {
        var Z = _tmpl$$x();
        return insert(Z, createComponent(For, {
            each: _,
            children: Q => (() => {
                var ee = _tmpl$2$i();
                return insert(ee, Q), ee
            })()
        }), null), insert(Z, createComponent(For, {
            get each() {
                return [...Array(42)]
            },
            children: (Q, ee) => {
                const te = createMemo(() => new Date(addDays(O.start, ee())));
                return createComponent(GridBtn, {
                    get class() {
                        return cx(Y(te) && "text-quarterary cursor-not-allowed", !X(W(te())) && "text-secondary")
                    },
                    get date() {
                        return te()
                    },
                    get range() {
                        return z()
                    },
                    onClick: () => {
                        if (Y(te)) return;
                        const se = te();
                        if (!H) I(se);
                        else {
                            const [ne, oe] = G(), ie = se.getTime(), re = ne.getTime(), ae = oe.getTime();
                            ie === re ? (I([ne, ne]), J = ne) : ie === ae ? (I([oe, oe]), J = oe) : (I([J, se].sort((he, ge) => he.getTime() - ge.getTime())), J = se)
                        }
                    },
                    get children() {
                        return te().getDate()
                    }
                })
            }
        }), null), Z
    })()
};

function GridBtn(O) {
    const [, M] = splitProps(O, ["class", "date", "range"]), {
        value: L
    } = useDatePicker(), I = Array.isArray(L()), N = createMemo(() => {
        const [R, _] = O.range, H = O.date.getTime();
        if (!I && R === _) {
            if (R === H) return 0
        } else {
            if (R === H || _ === H) return 0;
            if (H > R && H <= _) return 1
        }
        return 2
    });
    return (() => {
        var R = _tmpl$3$b();
        return spread(R, mergeProps(M, {
            get class() {
                return cx("flex-1 leading-9 border-0 rounded-lg text-center btn-like", O.class, N() === 0 ? "bg-brand text-primary_brand" : N() === 1 && "bg-brand/20")
            },
            get onClick() {
                return O.onClick
            }
        }), !1, !0), insert(R, () => O.children), R
    })()
}
var _tmpl$$w = template('<div class="grid grid-cols-4 gap-2">');
const Decades = () => {
    const {
        state: O,
        setState: M
    } = useDatePicker(), L = useCurrentDate(), I = createMemo(() => L().map(R => new Date(startOfYearPeriod(R, 10), 0).getTime())), N = createMemo(() => {
        const R = startOfYearPeriod(O.selectedDate, 100);
        return [...Array(12)].map((_, H) => new Date(R + H * 10, 0))
    });
    return (() => {
        var R = _tmpl$$w();
        return insert(R, createComponent(Index, {
            get each() {
                return N()
            },
            children: (_, H) => createComponent(GridBtn, {
                get date() {
                    return _()
                },
                get range() {
                    return I()
                },
                onClick: () => {
                    M({
                        view: "years",
                        selectedDate: _()
                    })
                },
                get children() {
                    return _().getFullYear()
                }
            })
        })), R
    })()
};
var _tmpl$$v = template('<div class="grid grid-cols-4 gap-2 mb-5">');
const Months = () => {
    const {
        state: O,
        setState: M
    } = useDatePicker(), L = useFormatDate(), I = useCurrentDate(), N = createMemo(() => I().map(_ => new Date(_.getFullYear(), _.getMonth()).getTime())), R = createMemo(() => [...Array(12)].map((_, H) => new Date(O.selectedDate.getFullYear(), H)));
    return (() => {
        var _ = _tmpl$$v();
        return insert(_, createComponent(Index, {
            get each() {
                return R()
            },
            children: (H, G) => createComponent(GridBtn, {
                get date() {
                    return H()
                },
                get range() {
                    return N()
                },
                onClick: () => {
                    M({
                        view: "days",
                        selectedDate: H()
                    })
                },
                get children() {
                    return L(H(), {
                        month: "short"
                    })
                }
            })
        })), _
    })()
};
var _tmpl$$u = template('<div class="grid grid-cols-4 gap-2">');
const Years = () => {
    const {
        state: O,
        setState: M
    } = useDatePicker(), L = useCurrentDate(), I = createMemo(() => L().map(R => new Date(R.getFullYear(), 0).getTime())), N = createMemo(() => {
        const R = startOfYearPeriod(O.selectedDate, 10);
        return [...Array(12)].map((_, H) => new Date(R + H, 0))
    });
    return (() => {
        var R = _tmpl$$u();
        return insert(R, createComponent(Index, {
            get each() {
                return N()
            },
            children: (_, H) => createComponent(GridBtn, {
                get date() {
                    return _()
                },
                get range() {
                    return I()
                },
                onClick: () => {
                    M({
                        view: "months",
                        selectedDate: _()
                    })
                },
                get children() {
                    return _().getFullYear()
                }
            })
        })), R
    })()
};
var _tmpl$$t = template("<div class=scroll-container>"),
    _tmpl$2$h = template("<div>");

function ScrollView(O) {
    const [, M] = splitProps(O, ["pan", "children"]), [L, I] = createSignal(void 0), N = createMemo(() => O.pan !== "x");
    return createComponent(ScrollProvider.Provider, {
        value: L,
        get children() {
            return createComponent(KeepScroll, {
                get children() {
                    var R = _tmpl$2$h(),
                        _ = mergeRefs(O.ref, I);
                    return typeof _ == "function" && use(_, R), spread(R, mergeProps(M, {
                        get class() {
                            return cx(N() ? "scroll-y" : "scroll-x", O.class)
                        }
                    }), !1, !0), insert(R, createComponent(Show, {
                        get when() {
                            return N()
                        },
                        get fallback() {
                            return O.children
                        },
                        get children() {
                            var H = _tmpl$$t();
                            return insert(H, () => O.children), H
                        }
                    })), R
                }
            })
        }
    })
}
const ScrollProvider = createContext(() => window);

function useScrollElement() {
    return useContext(ScrollProvider)
}

function useScrollTop(O = () => !0) {
    const [M, L] = createSignal(0), I = useScrollElement();
    return createEventListener(I, () => O() ? "scroll" : "", N => {
        const R = N.target === document ? rootScrollElement : N.target;
        L(R.scrollTop)
    }, {
        passive: !0
    }), M
}
var _tmpl$$s = template("<div class=tabs-indicator>"),
    _tmpl$2$g = template("<button>"),
    _tmpl$3$a = template("<div>");
const TabCtx = createContext(null);

function TabsBase(O) {
    const [, M] = splitProps(O, ["value", "onChange", "class", "keepAlive", "type"]), [L, I] = createSignal(O.value || 0), N = createSignal([]);
    let R;
    const _ = N[0];
    createComputed(() => {
        var z;
        const W = untrack(() => O.value),
            K = L();
        W !== K && ((z = O.onChange) == null || z.call(O, K))
    }), createComputed(() => {
        O.value !== void 0 && I(O.value)
    }), createComputed(z => {
        const W = _(),
            K = untrack(L);
        if (z && z.length > 0) {
            const X = W.indexOf(z[K]);
            I(Math.max(0, X))
        }
        return W
    });
    const [H, G] = createSignal(0);
    return createResizeObserver(() => R, () => {
        G(R.clientWidth)
    }), createComponent(TabCtx.Provider, {
        value: N,
        get children() {
            return [createComponent(ScrollView, mergeProps(M, {
                pan: "x",
                get "data-type" () {
                    return O.type
                },
                get style() {
                    return {
                        "--tabs-width": H() + "px",
                        "--tabs-indicator-position": L() * 100 + "%"
                    }
                },
                get class() {
                    return cx("tabs-title hide-scroll", O.class)
                },
                get children() {
                    return [createComponent(Index, {
                        get each() {
                            return _()
                        },
                        children: (z, W) => (() => {
                            var K = _tmpl$2$g(),
                                X = L() === W ? Y => R = Y : void 0;
                            return typeof X == "function" && use(X, K), K.$$click = () => I(W), insert(K, () => z().title), createRenderEffect(Y => {
                                var J = L() === W || void 0,
                                    Z = cx("tabs-btn btn-like"),
                                    Q = z().props.tabIndex;
                                return J !== Y.e && setAttribute(K, "aria-selected", Y.e = J), Z !== Y.t && className(K, Y.t = Z), Q !== Y.a && setAttribute(K, "tabindex", Y.a = Q), Y
                            }, {
                                e: void 0,
                                t: void 0,
                                a: void 0
                            }), K
                        })()
                    }), _tmpl$$s()]
                }
            })), createComponent(Show, {
                get when() {
                    return _().length > 0
                },
                get children() {
                    return createComponent(TabSelect, {
                        get tabs() {
                            return _()
                        },
                        get value() {
                            return _()[L()]
                        },
                        get keepAlive() {
                            return O.keepAlive
                        },
                        children: (z, W) => {
                            const [, K] = splitProps(z().props, ["tabIndex"]);
                            return (() => {
                                var X = _tmpl$3$a();
                                return spread(X, mergeProps(K, {
                                    get class() {
                                        return cx("tabs-content", K.class)
                                    }
                                }), !1, !0), insert(X, createComponent(Suspense, {
                                    get fallback() {
                                        return getFullLoading()
                                    },
                                    get children() {
                                        return K.children
                                    }
                                })), X
                            })()
                        }
                    })
                }
            }), memo$2(() => O.children)]
        }
    })
}

function TabItem(O) {
    const [, M] = splitProps(O, ["title"]), [, L] = useContext(TabCtx), I = {
        get title() {
            return O.title
        },
        props: M
    };
    return L(N => [...N, I].sort((R, _) => (R.props.tabIndex || 0) - (_.props.tabIndex || 0))), onCleanup(() => {
        L(N => N.filter(R => R !== I))
    }), null
}

function TabSelect(O) {
    const M = resolveFirst(() => createComponent(For, {
        get each() {
            return O.tabs
        },
        children: (L, I) => createComponent(Suspense, {
            get fallback() {
                return getFullLoading()
            },
            get children() {
                return createComponent(Toggle, {
                    get when() {
                        return L === O.value
                    },
                    get keepAlive() {
                        return O.keepAlive
                    },
                    get children() {
                        return O.children(() => L, I())
                    }
                })
            }
        })
    }));
    return createSwitchTransition(M, {
        appear: !1,
        onEnter(L) {
            queueMicrotask(() => {
                animate(L, {
                    opacity: [0, 1]
                }, {
                    duration: .35,
                    easing: easeBack,
                    persist: !0
                })
            })
        }
    })
}
const Tabs = TabsBase;
Tabs.TabItem = TabItem;
Tabs.TabSelect = TabSelect;
delegateEvents(["click"]);
var _tmpl$$r = template('<div class="block text-base font-semibold mb-3 select-none"><div class="flex justify-between mb-2">');

function DatePickerLayer() {
    var O, M, L;
    const {
        state: I,
        setState: N
    } = useDatePicker(), R = useIsActive();
    createComputed(() => {
        R() && N("view", "days")
    });
    const _ = (O = I.options) != null && O.language ? (M = I.options) == null ? void 0 : M.language : "en",
        H = new Intl.Locale(_),
        G = ((L = H ? .weekInfo) == null ? void 0 : L.firstDay) || 1,
        z = () => dayOfTheWeekOf(firstDateOfMonth(I.selectedDate.getFullYear(), I.selectedDate.getMonth(), 1), G, G),
        W = {
            days: () => createComponent(Days, {
                get start() {
                    return z()
                }
            }),
            decades: Decades,
            years: Years,
            months: Months
        },
        K = Object.keys(W);
    return (() => {
        var X = _tmpl$$r(),
            Y = X.firstChild;
        return insert(Y, createComponent(ButtonPrevMonth, {}), null), insert(Y, createComponent(ButtonSelectMonth, {}), null), insert(Y, createComponent(ButtonNextMonth, {}), null), insert(X, createComponent(Tabs.TabSelect, {
            tabs: K,
            get value() {
                return I.view
            },
            children: J => {
                const Z = W[J()];
                return createComponent(Z, {})
            }
        }), null), X
    })()
}
const options = {
    language: "en",
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
};
var _tmpl$$q = template("<div><input>");

function Input(O) {
    const [, M] = splitProps(O, ["onChange"]);
    return createComponent(InputBase, mergeProps(M, {
        get onInput() {
            return O.onChange && (L => O.onChange(L.target.value))
        }
    }))
}

function InputBase(O) {
    const [, M] = splitProps(O, ["class", "children"]), [L, I] = createSignal(!1);
    return (() => {
        var N = _tmpl$$q(),
            R = N.firstChild;
        return spread(R, mergeProps(M, {
            onFocus: _ => {
                var H;
                I(!0), (H = O.onFocus) == null || H.call(O, _)
            },
            onBlur: _ => {
                var H;
                I(!1), (H = O.onBlur) == null || H.call(O, _)
            }
        }), !1, !1), insert(N, () => O.children, null), createRenderEffect(_ => {
            var H = cx("input", O.class),
                G = L() || void 0,
                z = O.disabled || void 0;
            return H !== _.e && className(N, _.e = H), G !== _.t && setAttribute(N, "data-focus", _.t = G), z !== _.a && setAttribute(N, "data-disabled", _.a = z), _
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), N
    })()
}

function NumberInput(O) {
    let M;
    const [, L] = splitProps(O, ["onChange", "onInput", "precision", "max", "min", "value", "ref"]);

    function I(W) {
        return new Decimal$1(W).todp(O.precision, Decimal$1.ROUND_DOWN)
    }
    const N = W => {
            var K;
            (K = O.onChange) == null || K.call(O, W)
        },
        R = createMemo(() => I(O.value || 0));
    createComputed(() => {
        const W = O.precision,
            K = R();
        W && K.dp() > W && N(K.todp(W).toNumber())
    });

    function _(W) {
        return O.max !== void 0 && W > O.max
    }

    function H(W) {
        return O.min !== void 0 && W < O.min
    }
    createComputed(() => {
        _(R().toNumber()) && N(O.max)
    }), createComputed(() => {
        H(R().toNumber()) && N(O.min)
    }), createEffect(() => G(R()));

    function G(W) {
        const K = W.toFixed();
        M.value !== K && (M.value = K)
    }
    const z = W => {
        W = W.replace(",", ".");
        const K = Number(W);
        if (isNaN(K)) G(R());
        else {
            const X = I(K || 0).toNumber();
            _(X) ? (G(I(O.max)), N(O.max)) : H(X) ? (G(I(O.min)), N(O.min)) : (G(I(X)), N(X))
        }
    };
    return createComponent(InputBase, mergeProps({
        ref(W) {
            var K = mergeRefs(X => M = X, O.ref);
            typeof K == "function" && K(W)
        }
    }, L, {
        value: void 0,
        onChange: W => {
            const K = W.target.value;
            z(K)
        },
        inputmode: "decimal"
    }))
}
const [els, setEls] = createSignal([]);

function setActiveElement(O, M = !1) {
    onMount(() => {
        setEls(L => M ? [O, ...L] : [...L, O])
    }), onCleanup(() => {
        setEls(L => L.filter(I => I !== O))
    })
}
isSupportTouch && createRoot(() => {
    const O = createScheduled(L => debounce$1(L, 160)),
        M = createMemo(L => {
            const I = els().length > 0;
            return O() ? I : L
        }, !1);
    createEffect(() => {
        document.body.classList.toggle("lock-scroll", M())
    })
});
const imageMap = {
    87: ["/87/favicon/android-chrome-192x192.png", "/87/favicon/android-chrome-512x512.png", "/87/favicon/apple-touch-icon.png", "/87/favicon/favicon-16x16.png", "/87/favicon/favicon-32x32.png", "/87/favicon/favicon.ico", "/87/favicon/mstile-150x150.png", "/87/logo/black.png", "/87/logo/logo.png", "/87/logo/logo_pure.png", "/87/logo/logo_pure_w.png", "/87/logo/logo_small.png", "/87/logo/logo_small_w.png", "/87/logo/logo_w.png", "/87/platform/pwa-guide/android1.png", "/87/platform/pwa-guide/android2.png", "/87/platform/pwa-guide/android3.png", "/87/platform/pwa-guide/ios1.png", "/87/platform/pwa-guide/ios2.png", "/87/platform/pwa-guide/ios3.png", "/87/platform/pwa-guide/pwa.png", "/87/platform/pwa-guide/pwa_w.png", "/87/static/download/arrow.png", "/87/static/download/bg-m.jpg", "/87/static/download/i1.png", "/87/static/download/i2.png", "/87/static/download/i3.png", "/87/static/download/i4.png", "/87/static/download/i4_2.png", "/87/static/download/i5.png", "/87/static/download/i6.png", "/87/static/download/i6_2.png", "/87/static/download/icon-android.png", "/87/static/download/icon-download.png", "/87/static/download/icon-ios.png", "/87/static/download/inner-bg.png", "/87/static/download/number.png", "/87/static/download/phone-m.png", "/87/static/download/phone.png", "/87/static/download/phone2.png"],
    bz: ["/bz/favicon/android-chrome-192x192.png", "/bz/favicon/android-chrome-512x512.png", "/bz/favicon/apple-touch-icon.png", "/bz/favicon/favicon-16x16.png", "/bz/favicon/favicon-32x32.png", "/bz/favicon/favicon.ico", "/bz/favicon/mstile-150x150.png", "/bz/logo/black.png", "/bz/logo/logo.png", "/bz/logo/logo_pure.png", "/bz/logo/logo_pure_w.png", "/bz/logo/logo_small.png", "/bz/logo/logo_small_w.png", "/bz/logo/logo_w.png"],
    bs: ["/bs/favicon/android-chrome-192x192.png", "/bs/favicon/android-chrome-512x512.png", "/bs/favicon/apple-touch-icon.png", "/bs/favicon/favicon-16x16.png", "/bs/favicon/favicon-32x32.png", "/bs/favicon/favicon.ico", "/bs/favicon/mstile-150x150.png", "/bs/logo/black.png", "/bs/logo/logo.png", "/bs/logo/logo_pure.png", "/bs/logo/logo_pure_w.png", "/bs/logo/logo_small.png", "/bs/logo/logo_small_w.png", "/bs/logo/logo_w.png"],
    bc: ["/bc/favicon/android-chrome-192x192.png", "/bc/favicon/android-chrome-512x512.png", "/bc/favicon/apple-touch-icon.png", "/bc/favicon/favicon-16x16.png", "/bc/favicon/favicon-32x32.png", "/bc/favicon/favicon.ico", "/bc/favicon/mstile-150x150.png", "/bc/logo/black.png", "/bc/logo/logo.png", "/bc/logo/logo_login.png", "/bc/logo/logo_login_w.png", "/bc/logo/logo_pure.png", "/bc/logo/logo_pure_w.png", "/bc/logo/logo_small.png", "/bc/logo/logo_small_w.png", "/bc/logo/logo_w.png", "/bc/common/ban.png", "/bc/common/ban_w.png", "/bc/common/empty.png", "/bc/common/empty_w.png", "/bc/common/notfound.png", "/bc/common/notfound_w.png", "/bc/common/offline.png", "/bc/common/offline_w.png", "/bc/common/privacy.png", "/bc/common/privacy_w.png", "/bc/lottery/lottery/ball-white.png", "/bc/lottery/lottery/banner.png", "/bc/lottery/lottery/banner_m.png", "/bc/lottery/lottery/banner_m_w.png", "/bc/lottery/lottery/banner_w.png", "/bc/lottery/lottery/detail-banner.png", "/bc/lottery/lottery/jackpot_ball.png", "/bc/lottery/lottery/logo.png", "/bc/lottery/lottery/step-icon1.png", "/bc/lottery/lottery/step-icon2.png", "/bc/lottery/lottery/step-icon3.png", "/bc/lottery/lottery/step-icon4.png", "/bc/lottery/lottery/total-price.png", "/bc/lottery/lottery/total-tickets.png", "/bc/lottery/lottery/winner-tickets.png", "/bc/lottery/bc_lottery/ball.png", "/bc/lottery/bc_lottery/base_ball.png", "/bc/lottery/bc_lottery/base_jackpot_ball.png", "/bc/lottery/bc_lottery/bonus.png", "/bc/lottery/bc_lottery/buyticket.png", "/bc/lottery/bc_lottery/checkprizes.png", "/bc/lottery/bc_lottery/draw.png", "/bc/lottery/bc_lottery/jackpot_ball.png", "/bc/lottery/bc_lottery/send-ticket-bg.png", "/bc/lottery/bc_lottery/send-ticket-bg_w.png", "/bc/lottery/bc_lottery/winning0.png", "/bc/lottery/bc_lottery/winning0_w.png", "/bc/lottery/bc_lottery/winning1.png", "/bc/lottery/bc_lottery/winning1_w.png", "/bc/lottery/bc_lottery/winning2.png", "/bc/lottery/bc_lottery/winning2_w.png", "/bc/lottery/bc_lottery/winning3.png", "/bc/lottery/bc_lottery/winning3_w.png", "/bc/lottery/bc_lottery/winning4.png", "/bc/lottery/bc_lottery/winning4_w.png", "/bc/platform/banner_logo.png", "/bc/platform/banner_logo_w.png", "/bc/platform/bingo.png", "/bc/platform/casino.png", "/bc/platform/icon.png", "/bc/platform/icon_m.png", "/bc/platform/icon_m_w.png", "/bc/platform/icon_w.png", "/bc/platform/lottery.png", "/bc/platform/poker.png", "/bc/platform/racing.png", "/bc/platform/sports.png", "/bc/platform/sports_in.png", "/bc/platform/updown.png", "/bc/platform/contest/copper.png", "/bc/platform/contest/crown.png", "/bc/platform/contest/gold.png", "/bc/platform/contest/grass.png", "/bc/platform/contest/silver.png", "/bc/platform/contest/trophy.png", "/bc/platform/contest/winner.png", "/bc/platform/pwa-guide/android1.png", "/bc/platform/pwa-guide/android2.png", "/bc/platform/pwa-guide/android3.png", "/bc/platform/pwa-guide/ios1.png", "/bc/platform/pwa-guide/ios2.png", "/bc/platform/pwa-guide/ios3.png", "/bc/platform/pwa-guide/pwa.png", "/bc/platform/pwa-guide/pwa_w.png", "/bc/platform/weekly/bg.png", "/bc/platform/weekly/bg_m.png", "/bc/platform/weekly/bg_m_w.png", "/bc/platform/weekly/bg_w.png", "/bc/platform/weekly/card1.png", "/bc/platform/weekly/coin.png", "/bc/platform/weekly/hat.png", "/bc/platform/weekly/ticket.png", "/bc/platform/weekly/ticket_more.png", "/bc/platform/weekly/tickets.png", "/bc/static/support.png", "/bc/static/download/arrow.png", "/bc/static/download/bg.jpg", "/bc/static/download/bg_m.jpg", "/bc/static/download/bg_m_w.jpg", "/bc/static/download/bg_w.jpg", "/bc/static/download/i1.png", "/bc/static/download/i2.png", "/bc/static/download/i3.png", "/bc/static/download/i4.png", "/bc/static/download/i4_2.png", "/bc/static/download/i5.png", "/bc/static/download/i6.png", "/bc/static/download/i6_2.png", "/bc/static/download/icon-android.png", "/bc/static/download/icon-download.png", "/bc/static/download/icon-ios.png", "/bc/static/download/inner-bg.png", "/bc/static/download/number.png", "/bc/static/download/phone-m.png", "/bc/static/download/phone.png", "/bc/static/download/phone2.png", "/bc/wallet/coin.png", "/bc/wallet/deposit/new-user-bonus.png", "/bc/wallet/bonus/bonus-none.png", "/bc/wallet/bonus/casino.png", "/bc/wallet/bonus/sports.png", "/bc/wallet/valut/v-coin.png", "/bc/account/login/bg.png", "/bc/account/login/bg_m.png", "/bc/account/login/bg_m_w.png", "/bc/account/login/bg_w.png", "/bc/account/setting/kyc_fail.png", "/bc/account/setting/kyc_success.png", "/bc/account/user/balance.png", "/bc/account/user/refer.png", "/bc/account/user/top_bg.png", "/bc/account/user/achieve/achieve_1.png", "/bc/account/user/achieve/achieve_10.png", "/bc/account/user/achieve/achieve_11.png", "/bc/account/user/achieve/achieve_12.png", "/bc/account/user/achieve/achieve_13.png", "/bc/account/user/achieve/achieve_14.png", "/bc/account/user/achieve/achieve_15.png", "/bc/account/user/achieve/achieve_16.png", "/bc/account/user/achieve/achieve_17.png", "/bc/account/user/achieve/achieve_17_BTC.png", "/bc/account/user/achieve/achieve_17_DOGE.png", "/bc/account/user/achieve/achieve_17_EOS.png", "/bc/account/user/achieve/achieve_17_ETH.png", "/bc/account/user/achieve/achieve_18.png", "/bc/account/user/achieve/achieve_19.png", "/bc/account/user/achieve/achieve_2.png", "/bc/account/user/achieve/achieve_20.png", "/bc/account/user/achieve/achieve_21.png", "/bc/account/user/achieve/achieve_3.png", "/bc/account/user/achieve/achieve_4.png", "/bc/account/user/achieve/achieve_5.png", "/bc/account/user/achieve/achieve_6.png", "/bc/account/user/achieve/achieve_7.png", "/bc/account/user/achieve/achieve_8.png", "/bc/account/user/achieve/achieve_9.png", "/bc/bonus/affiliate/banner_bg.png", "/bc/bonus/affiliate/banner_bg_m.png", "/bc/bonus/affiliate/banner_bg_m_w.png", "/bc/bonus/affiliate/banner_bg_w.png", "/bc/bonus/affiliate/banner_right.png", "/bc/bonus/affiliate/banner_right_m.png", "/bc/bonus/affiliate/commission.png", "/bc/bonus/affiliate/level1.png", "/bc/bonus/affiliate/level2.png", "/bc/bonus/affiliate/level3.png", "/bc/bonus/affiliate/program.png", "/bc/bonus/affiliate/program_bg.png", "/bc/bonus/affiliate/program_bg_m.png", "/bc/bonus/affiliate/refer.png", "/bc/bonus/affiliate/referral.png", "/bc/bonus/affiliate/trophy.png", "/bc/bonus/affiliate/usehead.png", "/bc/bonus/bonus/bc-bank/bc-bank.png", "/bc/bonus/bonus/bc-bank/bc-bank_small.png", "/bc/bonus/bonus/bc-bank/bonus-coin.png", "/bc/bonus/bonus/bonus-overview/icon-bcbank.png", "/bc/bonus/bonus/bonus-overview/icon-coco.png", "/bc/bonus/bonus/bonus-overview/icon-contest.png", "/bc/bonus/bonus/bonus-overview/icon-daily.png", "/bc/bonus/bonus/bonus-overview/icon-deposit.png", "/bc/bonus/bonus/bonus-overview/icon-free-spin.png", "/bc/bonus/bonus/bonus-overview/icon-game_reward.png", "/bc/bonus/bonus/bonus-overview/icon-levelup.png", "/bc/bonus/bonus/bonus-overview/icon-lottery.png", "/bc/bonus/bonus/bonus-overview/icon-lucky-spin.png", "/bc/bonus/bonus/bonus-overview/icon-medal.png", "/bc/bonus/bonus/bonus-overview/icon-monthly.png", "/bc/bonus/bonus/bonus-overview/icon-newbie_lucky_spin.png", "/bc/bonus/bonus/bonus-overview/icon-quest.png", "/bc/bonus/bonus/bonus-overview/icon-raffle.png", "/bc/bonus/bonus/bonus-overview/icon-rain.png", "/bc/bonus/bonus/bonus-overview/icon-recharge.png", "/bc/bonus/bonus/bonus-overview/icon-roll.png", "/bc/bonus/bonus/bonus-overview/icon-shit_link.png", "/bc/bonus/bonus/bonus-overview/icon-special_deposit.png", "/bc/bonus/bonus/bonus-overview/icon-sport.png", "/bc/bonus/bonus/bonus-overview/icon-weekly.png", "/bc/bonus/bonus/bonuses-page/banner_pc.png", "/bc/bonus/bonus/bonuses-page/bonus-free-money.png", "/bc/bonus/bonus/bonuses-page/bonus-korea-attendance.png", "/bc/bonus/bonus/bonuses-page/bonus-kyc-first.png", "/bc/bonus/bonus/bonuses-page/bonus-levelup.png", "/bc/bonus/bonus/bonuses-page/bonus-loseback-card.png", "/bc/bonus/bonus/bonuses-page/bonus-lucky-spin.png", "/bc/bonus/bonus/bonuses-page/bonus-monthly.png", "/bc/bonus/bonus/bonuses-page/bonus-quad.png", "/bc/bonus/bonus/bonuses-page/bonus-quests.png", "/bc/bonus/bonus/bonuses-page/bonus-rakeback.png", "/bc/bonus/bonus/bonuses-page/bonus-recharge.png", "/bc/bonus/bonus/bonuses-page/bonus-roll.png", "/bc/bonus/bonus/bonuses-page/bonus-sports.png", "/bc/bonus/bonus/bonuses-page/bonus-svip.png", "/bc/bonus/bonus/bonuses-page/bonus-weekly.png", "/bc/bonus/bonus/bonuses-page/dailybonus.png", "/bc/bonus/bonus/bonuses-page/deposit-compensation.png", "/bc/bonus/bonus/bonuses-page/deposit.png", "/bc/bonus/bonus/bonuses-page/double-bonus-falg-zero.png", "/bc/bonus/bonus/bonuses-page/double-bonus-flag.png", "/bc/bonus/bonus/bonuses-page/double_up-cashback.png", "/bc/bonus/bonus/bonuses-page/motivation-bonus.png", "/bc/bonus/bonus/card-tasks/task-bind-email.png", "/bc/bonus/bonus/card-tasks/task-bind-phone.png", "/bc/bonus/bonus/card-tasks/task-bind-tg.png", "/bc/bonus/bonus/deposit-dashboard/coin.png", "/bc/bonus/bonus/deposit-dashboard/coin2.png", "/bc/bonus/bonus/deposit-dashboard/coin2_closed.png", "/bc/bonus/bonus/deposit-dashboard/coin3.png", "/bc/bonus/bonus/deposit-dashboard/coin3_closed.png", "/bc/bonus/bonus/deposit-dashboard/coin4.png", "/bc/bonus/bonus/deposit-dashboard/coin4_closed.png", "/bc/bonus/bonus/deposit-dashboard/coin_closed.png", "/bc/bonus/bonus/deposit-dashboard/deposit1.png", "/bc/bonus/bonus/deposit-dashboard/deposit2.png", "/bc/bonus/bonus/deposit-dashboard/deposit3.png", "/bc/bonus/bonus/deposit-dashboard/deposit4.png", "/bc/bonus/bonus/deposit-dashboard/kr-casino.png", "/bc/bonus/bonus/deposit-dashboard/kr-sports.png", "/bc/bonus/bonus/korea-attendance/box_close.png", "/bc/bonus/bonus/korea-attendance/box_open.png", "/bc/bonus/bonus/korea-attendance/cardbg.png", "/bc/bonus/bonus/korea-attendance/checkinbonus.png", "/bc/bonus/bonus/korea-attendance/notice_icon.png", "/bc/bonus/bonus/promotion/d-1-box.png", "/bc/bonus/bonus/promotion/d-2-box.png", "/bc/bonus/bonus/promotion/d-3-box.png", "/bc/bonus/bonus/promotion/d-4-box.png", "/bc/bonus/bonus/pdd/gift.png", "/bc/bonus/bonus/quest-hub/quest-banner.png", "/bc/bonus/bonus/quest-hub/quest-reward.png", "/bc/bonus/bonus/vault/vault.png", "/bc/bonus/bonus/tg/tg-bg.png", "/bc/bonus/bonus/tg/tg-bg_m.png", "/bc/bonus/bonus/svip-progress/deposit-progress.png", "/bc/bonus/bonus/svip-progress/svip-gift.png", "/bc/bonus/bonus/welcome-page/benefit-coco.png", "/bc/bonus/bonus/welcome-page/benefit-coin_drop.png", "/bc/bonus/bonus/welcome-page/benefit-gift.png", "/bc/bonus/bonus/welcome-page/benefit-lottery.png", "/bc/bonus/bonus/welcome-page/benefit-monthly.png", "/bc/bonus/bonus/welcome-page/benefit-quest.png", "/bc/bonus/bonus/welcome-page/benefit-roll.png", "/bc/bonus/bonus/welcome-page/benefit-spin.png", "/bc/bonus/bonus/welcome-page/benefit-weekly.png", "/bc/bonus/bonus/welcome-page/bonus-welcome-banner.png", "/bc/bonus/bonus/welcome-page/footer-stars.png", "/bc/bonus/bonus/welcome-page/perk-daily.png", "/bc/bonus/bonus/welcome-page/perk-quest.png", "/bc/bonus/bonus/welcome-page/perk-rakeback.png", "/bc/bonus/bonus/welcome-page/perk-spin.png", "/bc/bonus/bonus/welcome-page/recharge-benefit-activate.png", "/bc/bonus/bonus/welcome-page/recharge-benefit-reward.png", "/bc/bonus/bonus/welcome-page/recharge-benefit-tiers.png", "/bc/bonus/bonus/welcome-page/welcome-banner-step1.png", "/bc/bonus/bonus/welcome-page/welcome-banner-step2.png", "/bc/bonus/bonus/welcome-page/welcome-banner-step3.png", "/bc/bonus/bonus/welcome-page/welcome-banner-step4.png", "/bc/bonus/bonus/welcome-page/welcome-banner-step5.png", "/bc/bonus/bonus/welcome-page/welcome-levelup.png", "/bc/bonus/bonus/welcome-page/welcome-levelup_w.png", "/bc/bonus/bonus/welcome-page/welcome-rakeback.png", "/bc/bonus/bonus/welcome-page/welcome-recharge.png", "/bc/bonus/deposit-activity-new/home-popup/deposit-popup-bg.png", "/bc/bonus/deposit-activity-new/component/deposit.png", "/bc/bonus/vip/vip-benefit/vip-benefit-hero.png", "/bc/bonus/vip/vip-benefit/vip-benefit-hero_m.png", "/bc/bonus/vip/vip-bonus-icon/icon-bonus.png", "/bc/bonus/vip/vip-bonus-icon/icon-cashback-monthly.png", "/bc/bonus/vip/vip-bonus-icon/icon-cashback-weekly.png", "/bc/bonus/vip/vip-bonus-icon/icon-coin-drop.png", "/bc/bonus/vip/vip-bonus-icon/icon-daily.png", "/bc/bonus/vip/vip-bonus-icon/icon-giveaway.png", "/bc/bonus/vip/vip-bonus-icon/icon-host.png", "/bc/bonus/vip/vip-bonus-icon/icon-raining.png", "/bc/bonus/vip/vip-bonus-icon/icon-recharge.png", "/bc/bonus/vip/vip-bonus-icon/icon-spin.png", "/bc/bonus/vip/vip-bonus-icon/icon-sport.png", "/bc/bonus/vip/vip-bonus-icon/icon-svip.png", "/bc/bonus/vip/vip-bonus-icon/icon-tips.png", "/bc/bonus/vip/vip-bonus-icon/icon-withdraw.png", "/bc/bonus/vip/vip-card-img/card-img-bonus.png", "/bc/bonus/vip/vip-card-img/card-img-cashback.png", "/bc/bonus/vip/vip-card-img/card-img-chat.png", "/bc/bonus/vip/vip-card-img/card-img-host.png", "/bc/bonus/vip/vip-card-img/card-img-spin.png", "/bc/bonus/vip/vip-card-img/card-img-withdraw.png", "/bc/chat/public/assets/top1.png", "/bc/chat/public/assets/top2.png", "/bc/chat/public/assets/top3.png", "/bc/chat/public/coms/coindrop/share-bg.png", "/bc/chat/public/coms/msgs/tost.png", "/bc/chat/public/coms/msgs/tost_w.png", "/bc/chat/public/coms/msgs/rain/crash_rain.png", "/bc/chat/public/coms/msgs/rain/game_rain.png"],
    jb: ["/jb/favicon/android-chrome-192x192.png", "/jb/favicon/android-chrome-512x512.png", "/jb/favicon/apple-touch-icon.png", "/jb/favicon/favicon-16x16.png", "/jb/favicon/favicon-32x32.png", "/jb/favicon/favicon.ico", "/jb/favicon/mstile-150x150.png", "/jb/logo/black.png", "/jb/logo/logo.png", "/jb/logo/logo_login.png", "/jb/logo/logo_login_m.png", "/jb/logo/logo_login_m_w.png", "/jb/logo/logo_login_w.png", "/jb/logo/logo_pure.png", "/jb/logo/logo_pure_w.png", "/jb/logo/logo_small.png", "/jb/logo/logo_small_w.png", "/jb/logo/logo_w.png", "/jb/lottery/bc_lottery/ball.png", "/jb/lottery/bc_lottery/base_ball.png", "/jb/lottery/bc_lottery/base_jackpot_ball.png", "/jb/lottery/bc_lottery/bonus.png", "/jb/lottery/bc_lottery/buyticket.png", "/jb/lottery/bc_lottery/checkprizes.png", "/jb/lottery/bc_lottery/draw.png", "/jb/lottery/bc_lottery/jackpot_ball.png", "/jb/lottery/bc_lottery/send-ticket-bg.png", "/jb/lottery/bc_lottery/send-ticket-bg_m.png", "/jb/lottery/bc_lottery/send-ticket-bg_w.png", "/jb/lottery/bc_lottery/winning0.png", "/jb/lottery/bc_lottery/winning0_w.png", "/jb/lottery/bc_lottery/winning1.png", "/jb/lottery/bc_lottery/winning1_w.png", "/jb/lottery/bc_lottery/winning2.png", "/jb/lottery/bc_lottery/winning2_w.png", "/jb/lottery/bc_lottery/winning3.png", "/jb/lottery/bc_lottery/winning3_w.png", "/jb/lottery/bc_lottery/winning4.png", "/jb/lottery/bc_lottery/winning4_w.png", "/jb/lottery/lottery/ball-white.png", "/jb/lottery/lottery/banner.png", "/jb/lottery/lottery/banner_m.png", "/jb/lottery/lottery/banner_w.png", "/jb/lottery/lottery/detail-banner.png", "/jb/lottery/lottery/jackpot_ball.png", "/jb/lottery/lottery/logo.png", "/jb/lottery/lottery/step-icon1.png", "/jb/lottery/lottery/step-icon2.png", "/jb/lottery/lottery/step-icon3.png", "/jb/lottery/lottery/step-icon4.png", "/jb/lottery/lottery/total-price.png", "/jb/lottery/lottery/total-price_m.png", "/jb/lottery/lottery/total-tickets.png", "/jb/lottery/lottery/total-tickets_m.png", "/jb/lottery/lottery/winner-tickets.png", "/jb/lottery/lottery/winner-tickets_m.png", "/jb/static/support.png", "/jb/static/download/arrow.png", "/jb/static/download/bg.jpg", "/jb/static/download/bg_m.jpg", "/jb/static/download/bg_m_w.jpg", "/jb/static/download/bg_w.jpg", "/jb/static/download/i1.png", "/jb/static/download/i2.png", "/jb/static/download/i3.png", "/jb/static/download/i4.png", "/jb/static/download/i4_2.png", "/jb/static/download/i5.png", "/jb/static/download/i6.png", "/jb/static/download/i6_2.png", "/jb/static/download/icon-android.png", "/jb/static/download/icon-download.png", "/jb/static/download/icon-ios.png", "/jb/static/download/inner-bg.png", "/jb/static/download/number.png", "/jb/static/download/phone-m.png", "/jb/static/download/phone.png", "/jb/static/download/phone2.png", "/jb/platform/banner_logo.png", "/jb/platform/banner_logo_w.png", "/jb/platform/bingo.png", "/jb/platform/bingo_m.png", "/jb/platform/casino.png", "/jb/platform/casino_m.png", "/jb/platform/fishing.png", "/jb/platform/fishing_m.png", "/jb/platform/icon.png", "/jb/platform/icon_m.png", "/jb/platform/icon_m_w.png", "/jb/platform/icon_w.png", "/jb/platform/live.png", "/jb/platform/live_m.png", "/jb/platform/lottery.png", "/jb/platform/lottery_m.png", "/jb/platform/poker.png", "/jb/platform/poker_m.png", "/jb/platform/racing.png", "/jb/platform/racing_m.png", "/jb/platform/sports.png", "/jb/platform/sports_m.png", "/jb/platform/updown.png", "/jb/platform/updown_m.png", "/jb/platform/contest/copper.png", "/jb/platform/contest/copper_m.png", "/jb/platform/contest/crown.png", "/jb/platform/contest/crown_m.png", "/jb/platform/contest/gold.png", "/jb/platform/contest/gold_m.png", "/jb/platform/contest/grass.png", "/jb/platform/contest/silver.png", "/jb/platform/contest/silver_m.png", "/jb/platform/contest/trophy.png", "/jb/platform/contest/trophy_m.png", "/jb/platform/contest/winner.png", "/jb/platform/pwa-guide/android1.png", "/jb/platform/pwa-guide/android2.png", "/jb/platform/pwa-guide/android3.png", "/jb/platform/pwa-guide/ios1.png", "/jb/platform/pwa-guide/ios2.png", "/jb/platform/pwa-guide/ios3.png", "/jb/platform/pwa-guide/pwa.png", "/jb/platform/pwa-guide/pwa_w.png", "/jb/platform/weekly/bg.png", "/jb/platform/weekly/bg_m.png", "/jb/platform/weekly/bg_w.png", "/jb/platform/weekly/coin.png", "/jb/platform/weekly/coin_m.png", "/jb/platform/weekly/hat.png", "/jb/platform/weekly/hat_m.png", "/jb/platform/weekly/ticket.png", "/jb/platform/weekly/ticket_m.png", "/jb/platform/weekly/ticket_more.png", "/jb/platform/weekly/ticket_more_m.png", "/jb/platform/weekly/tickets.png", "/jb/platform/weekly/tickets_m.png", "/jb/wallet/coin.png", "/jb/wallet/coin_m.png", "/jb/wallet/bonus/bonus-none.png", "/jb/wallet/bonus/casino.png", "/jb/wallet/bonus/casino_m.png", "/jb/wallet/bonus/sports.png", "/jb/wallet/valut/v-coin.png", "/jb/wallet/valut/v-coin_m.png", "/jb/wallet/deposit/new-user-bonus.png", "/jb/account/login/bg.png", "/jb/account/login/bg_m.png", "/jb/account/login/bg_m_w.png", "/jb/account/login/bg_w.png", "/jb/account/setting/kyc_fail.png", "/jb/account/setting/kyc_fail_m.png", "/jb/account/setting/kyc_success.png", "/jb/account/setting/kyc_success_m.png", "/jb/account/user/balance.png", "/jb/account/user/balance_m.png", "/jb/account/user/refer.png", "/jb/account/user/refer_m.png", "/jb/account/user/top_bg.png", "/jb/account/user/achieve/achieve_1.png", "/jb/account/user/achieve/achieve_10.png", "/jb/account/user/achieve/achieve_10_m.png", "/jb/account/user/achieve/achieve_11.png", "/jb/account/user/achieve/achieve_11_m.png", "/jb/account/user/achieve/achieve_12.png", "/jb/account/user/achieve/achieve_12_m.png", "/jb/account/user/achieve/achieve_13.png", "/jb/account/user/achieve/achieve_13_m.png", "/jb/account/user/achieve/achieve_14.png", "/jb/account/user/achieve/achieve_14_m.png", "/jb/account/user/achieve/achieve_15.png", "/jb/account/user/achieve/achieve_15_m.png", "/jb/account/user/achieve/achieve_16.png", "/jb/account/user/achieve/achieve_16_m.png", "/jb/account/user/achieve/achieve_17.png", "/jb/account/user/achieve/achieve_17_BTC.png", "/jb/account/user/achieve/achieve_17_BTC_m.png", "/jb/account/user/achieve/achieve_17_DOGE.png", "/jb/account/user/achieve/achieve_17_DOGE_m.png", "/jb/account/user/achieve/achieve_17_EOS.png", "/jb/account/user/achieve/achieve_17_EOS_m.png", "/jb/account/user/achieve/achieve_17_ETH.png", "/jb/account/user/achieve/achieve_17_ETH_m.png", "/jb/account/user/achieve/achieve_17_m.png", "/jb/account/user/achieve/achieve_18.png", "/jb/account/user/achieve/achieve_18_m.png", "/jb/account/user/achieve/achieve_19.png", "/jb/account/user/achieve/achieve_19_m.png", "/jb/account/user/achieve/achieve_1_m.png", "/jb/account/user/achieve/achieve_2.png", "/jb/account/user/achieve/achieve_20.png", "/jb/account/user/achieve/achieve_20_m.png", "/jb/account/user/achieve/achieve_21.png", "/jb/account/user/achieve/achieve_21_m.png", "/jb/account/user/achieve/achieve_2_m.png", "/jb/account/user/achieve/achieve_3.png", "/jb/account/user/achieve/achieve_3_m.png", "/jb/account/user/achieve/achieve_4.png", "/jb/account/user/achieve/achieve_4_m.png", "/jb/account/user/achieve/achieve_5.png", "/jb/account/user/achieve/achieve_5_m.png", "/jb/account/user/achieve/achieve_6.png", "/jb/account/user/achieve/achieve_6_m.png", "/jb/account/user/achieve/achieve_7.png", "/jb/account/user/achieve/achieve_7_m.png", "/jb/account/user/achieve/achieve_8.png", "/jb/account/user/achieve/achieve_8_m.png", "/jb/account/user/achieve/achieve_9.png", "/jb/account/user/achieve/achieve_9_m.png", "/jb/bonus/affiliate/banner_bg.png", "/jb/bonus/affiliate/banner_bg_m.png", "/jb/bonus/affiliate/banner_bg_m_w.png", "/jb/bonus/affiliate/banner_bg_w.png", "/jb/bonus/affiliate/banner_right.png", "/jb/bonus/affiliate/banner_right_m.png", "/jb/bonus/affiliate/commission.png", "/jb/bonus/affiliate/commission_m.png", "/jb/bonus/affiliate/level1.png", "/jb/bonus/affiliate/level2.png", "/jb/bonus/affiliate/level3.png", "/jb/bonus/affiliate/program.png", "/jb/bonus/affiliate/program_bg.png", "/jb/bonus/affiliate/program_bg_m.png", "/jb/bonus/affiliate/program_bg_m_w.png", "/jb/bonus/affiliate/program_bg_w.png", "/jb/bonus/affiliate/program_m.png", "/jb/bonus/affiliate/refer.png", "/jb/bonus/affiliate/refer_m.png", "/jb/bonus/affiliate/referral.png", "/jb/bonus/affiliate/referral_m.png", "/jb/bonus/affiliate/trophy.png", "/jb/bonus/affiliate/trophy_m.png", "/jb/bonus/affiliate/usehead.png", "/jb/bonus/affiliate/usehead_m.png", "/jb/bonus/bonus/bc-bank/bc-bank.png", "/jb/bonus/bonus/bc-bank/bc-bank_m.png", "/jb/bonus/bonus/bc-bank/bc-bank_small.png", "/jb/bonus/bonus/bc-bank/bonus-coin.png", "/jb/bonus/bonus/bc-bank/bonus-coin_m.png", "/jb/bonus/bonus/bonus-overview/icon-bcbank.png", "/jb/bonus/bonus/bonus-overview/icon-bcbank_m.png", "/jb/bonus/bonus/bonus-overview/icon-coco.png", "/jb/bonus/bonus/bonus-overview/icon-coco_m.png", "/jb/bonus/bonus/bonus-overview/icon-contest.png", "/jb/bonus/bonus/bonus-overview/icon-contest_m.png", "/jb/bonus/bonus/bonus-overview/icon-daily.png", "/jb/bonus/bonus/bonus-overview/icon-daily_m.png", "/jb/bonus/bonus/bonus-overview/icon-deposit.png", "/jb/bonus/bonus/bonus-overview/icon-deposit_m.png", "/jb/bonus/bonus/bonus-overview/icon-free-spin.png", "/jb/bonus/bonus/bonus-overview/icon-free-spin_m.png", "/jb/bonus/bonus/bonus-overview/icon-game_reward.png", "/jb/bonus/bonus/bonus-overview/icon-game_reward_m.png", "/jb/bonus/bonus/bonus-overview/icon-levelup.png", "/jb/bonus/bonus/bonus-overview/icon-levelup_m.png", "/jb/bonus/bonus/bonus-overview/icon-lottery.png", "/jb/bonus/bonus/bonus-overview/icon-lottery_m.png", "/jb/bonus/bonus/bonus-overview/icon-lucky-spin.png", "/jb/bonus/bonus/bonus-overview/icon-lucky-spin_m.png", "/jb/bonus/bonus/bonus-overview/icon-medal.png", "/jb/bonus/bonus/bonus-overview/icon-medal_m.png", "/jb/bonus/bonus/bonus-overview/icon-monthly.png", "/jb/bonus/bonus/bonus-overview/icon-monthly_m.png", "/jb/bonus/bonus/bonus-overview/icon-newbie_lucky_spin.png", "/jb/bonus/bonus/bonus-overview/icon-newbie_lucky_spin_m.png", "/jb/bonus/bonus/bonus-overview/icon-quest.png", "/jb/bonus/bonus/bonus-overview/icon-quest_m.png", "/jb/bonus/bonus/bonus-overview/icon-raffle.png", "/jb/bonus/bonus/bonus-overview/icon-raffle_m.png", "/jb/bonus/bonus/bonus-overview/icon-rain.png", "/jb/bonus/bonus/bonus-overview/icon-rain_m.png", "/jb/bonus/bonus/bonus-overview/icon-recharge.png", "/jb/bonus/bonus/bonus-overview/icon-recharge_m.png", "/jb/bonus/bonus/bonus-overview/icon-roll.png", "/jb/bonus/bonus/bonus-overview/icon-roll_m.png", "/jb/bonus/bonus/bonus-overview/icon-shit_link.png", "/jb/bonus/bonus/bonus-overview/icon-shit_link_m.png", "/jb/bonus/bonus/bonus-overview/icon-special_deposit.png", "/jb/bonus/bonus/bonus-overview/icon-special_deposit_m.png", "/jb/bonus/bonus/bonus-overview/icon-sport.png", "/jb/bonus/bonus/bonus-overview/icon-sport_m.png", "/jb/bonus/bonus/bonus-overview/icon-weekly.png", "/jb/bonus/bonus/bonus-overview/icon-weekly_m.png", "/jb/bonus/bonus/bonuses-page/banner_pc.png", "/jb/bonus/bonus/bonuses-page/banner_pc_m.png", "/jb/bonus/bonus/bonuses-page/bonus-free-money.png", "/jb/bonus/bonus/bonuses-page/bonus-free-money_m.png", "/jb/bonus/bonus/bonuses-page/bonus-korea-attendance.png", "/jb/bonus/bonus/bonuses-page/bonus-korea-attendance_m.png", "/jb/bonus/bonus/bonuses-page/bonus-kyc-first.png", "/jb/bonus/bonus/bonuses-page/bonus-kyc-first_m.png", "/jb/bonus/bonus/bonuses-page/bonus-levelup.png", "/jb/bonus/bonus/bonuses-page/bonus-levelup_m.png", "/jb/bonus/bonus/bonuses-page/bonus-loseback-card.png", "/jb/bonus/bonus/bonuses-page/bonus-loseback-card_m.png", "/jb/bonus/bonus/bonuses-page/bonus-lucky-spin.png", "/jb/bonus/bonus/bonuses-page/bonus-lucky-spin_m.png", "/jb/bonus/bonus/bonuses-page/bonus-monthly.png", "/jb/bonus/bonus/bonuses-page/bonus-monthly_m.png", "/jb/bonus/bonus/bonuses-page/bonus-quad.png", "/jb/bonus/bonus/bonuses-page/bonus-quests.png", "/jb/bonus/bonus/bonuses-page/bonus-quests_m.png", "/jb/bonus/bonus/bonuses-page/bonus-rakeback.png", "/jb/bonus/bonus/bonuses-page/bonus-rakeback_m.png", "/jb/bonus/bonus/bonuses-page/bonus-recharge.png", "/jb/bonus/bonus/bonuses-page/bonus-recharge_m.png", "/jb/bonus/bonus/bonuses-page/bonus-roll.png", "/jb/bonus/bonus/bonuses-page/bonus-roll_m.png", "/jb/bonus/bonus/bonuses-page/bonus-sports.png", "/jb/bonus/bonus/bonuses-page/bonus-sports_m.png", "/jb/bonus/bonus/bonuses-page/bonus-svip.png", "/jb/bonus/bonus/bonuses-page/bonus-weekly.png", "/jb/bonus/bonus/bonuses-page/bonus-weekly_m.png", "/jb/bonus/bonus/bonuses-page/dailybonus.png", "/jb/bonus/bonus/bonuses-page/dailybonus_m.png", "/jb/bonus/bonus/bonuses-page/deposit-compensation.png", "/jb/bonus/bonus/bonuses-page/deposit-compensation_m.png", "/jb/bonus/bonus/bonuses-page/deposit.png", "/jb/bonus/bonus/bonuses-page/deposit_m.png", "/jb/bonus/bonus/bonuses-page/double-bonus-falg-zero.png", "/jb/bonus/bonus/bonuses-page/double-bonus-falg-zero_m.png", "/jb/bonus/bonus/bonuses-page/double-bonus-flag.png", "/jb/bonus/bonus/bonuses-page/double-bonus-flag_m.png", "/jb/bonus/bonus/bonuses-page/double_up-cashback.png", "/jb/bonus/bonus/bonuses-page/double_up-cashback_m.png", "/jb/bonus/bonus/bonuses-page/motivation-bonus.png", "/jb/bonus/bonus/bonuses-page/motivation-bonus_m.png", "/jb/bonus/bonus/card-tasks/task-bind-email.png", "/jb/bonus/bonus/card-tasks/task-bind-email_m.png", "/jb/bonus/bonus/card-tasks/task-bind-phone.png", "/jb/bonus/bonus/card-tasks/task-bind-phone_m.png", "/jb/bonus/bonus/card-tasks/task-bind-tg.png", "/jb/bonus/bonus/card-tasks/task-bind-tg_m.png", "/jb/bonus/bonus/deposit-dashboard/coin.png", "/jb/bonus/bonus/deposit-dashboard/coin2.png", "/jb/bonus/bonus/deposit-dashboard/coin2_closed.png", "/jb/bonus/bonus/deposit-dashboard/coin3.png", "/jb/bonus/bonus/deposit-dashboard/coin3_closed.png", "/jb/bonus/bonus/deposit-dashboard/coin4.png", "/jb/bonus/bonus/deposit-dashboard/coin4_closed.png", "/jb/bonus/bonus/deposit-dashboard/coin_closed.png", "/jb/bonus/bonus/deposit-dashboard/deposit1.png", "/jb/bonus/bonus/deposit-dashboard/deposit1_m.png", "/jb/bonus/bonus/deposit-dashboard/deposit2.png", "/jb/bonus/bonus/deposit-dashboard/deposit2_m.png", "/jb/bonus/bonus/deposit-dashboard/deposit3.png", "/jb/bonus/bonus/deposit-dashboard/deposit3_m.png", "/jb/bonus/bonus/deposit-dashboard/deposit4.png", "/jb/bonus/bonus/deposit-dashboard/deposit4_m.png", "/jb/bonus/bonus/deposit-dashboard/kr-casino.png", "/jb/bonus/bonus/deposit-dashboard/kr-casino_m.png", "/jb/bonus/bonus/deposit-dashboard/kr-sports.png", "/jb/bonus/bonus/deposit-dashboard/kr-sports_m.png", "/jb/bonus/bonus/korea-attendance/box_close.png", "/jb/bonus/bonus/korea-attendance/box_close_m.png", "/jb/bonus/bonus/korea-attendance/box_open.png", "/jb/bonus/bonus/korea-attendance/box_open_m.png", "/jb/bonus/bonus/korea-attendance/cardbg.png", "/jb/bonus/bonus/korea-attendance/checkinbonus.png", "/jb/bonus/bonus/korea-attendance/checkinbonus_m.png", "/jb/bonus/bonus/korea-attendance/notice_icon.png", "/jb/bonus/bonus/pdd/gift.png", "/jb/bonus/bonus/pdd/gift_m.png", "/jb/bonus/bonus/promotion/d-1-box.png", "/jb/bonus/bonus/promotion/d-2-box.png", "/jb/bonus/bonus/promotion/d-3-box.png", "/jb/bonus/bonus/promotion/d-4-box.png", "/jb/bonus/bonus/quest-hub/quest-banner.png", "/jb/bonus/bonus/quest-hub/quest-banner_m.png", "/jb/bonus/bonus/quest-hub/quest-reward.png", "/jb/bonus/bonus/svip-progress/deposit_progress.png", "/jb/bonus/bonus/svip-progress/deposit_progress_m.png", "/jb/bonus/bonus/svip-progress/svip-gift.png", "/jb/bonus/bonus/svip-progress/svip-gift_m.png", "/jb/bonus/bonus/tg/tg-bg.png", "/jb/bonus/bonus/tg/tg-bg_m.png", "/jb/bonus/bonus/vault/vault.png", "/jb/bonus/bonus/vault/vault_m.png", "/jb/bonus/bonus/welcome-page/benefit-coco.png", "/jb/bonus/bonus/welcome-page/benefit-coin_drop.png", "/jb/bonus/bonus/welcome-page/benefit-gift.png", "/jb/bonus/bonus/welcome-page/benefit-gift_m.png", "/jb/bonus/bonus/welcome-page/benefit-lottery.png", "/jb/bonus/bonus/welcome-page/benefit-monthly.png", "/jb/bonus/bonus/welcome-page/benefit-monthly_m.png", "/jb/bonus/bonus/welcome-page/benefit-quest.png", "/jb/bonus/bonus/welcome-page/benefit-quest_m.png", "/jb/bonus/bonus/welcome-page/benefit-roll.png", "/jb/bonus/bonus/welcome-page/benefit-roll_m.png", "/jb/bonus/bonus/welcome-page/benefit-spin.png", "/jb/bonus/bonus/welcome-page/benefit-spin_m.png", "/jb/bonus/bonus/welcome-page/benefit-weekly.png", "/jb/bonus/bonus/welcome-page/benefit-weekly_m.png", "/jb/bonus/bonus/welcome-page/bonus-welcome-banner.png", "/jb/bonus/bonus/welcome-page/footer-stars.png", "/jb/bonus/bonus/welcome-page/perk-daily.png", "/jb/bonus/bonus/welcome-page/perk-quest.png", "/jb/bonus/bonus/welcome-page/perk-rakeback.png", "/jb/bonus/bonus/welcome-page/perk-spin.png", "/jb/bonus/bonus/welcome-page/recharge-benefit-activate.png", "/jb/bonus/bonus/welcome-page/recharge-benefit-reward.png", "/jb/bonus/bonus/welcome-page/recharge-benefit-tiers.png", "/jb/bonus/bonus/welcome-page/welcome-banner-step1.png", "/jb/bonus/bonus/welcome-page/welcome-banner-step1_m.png", "/jb/bonus/bonus/welcome-page/welcome-banner-step2.png", "/jb/bonus/bonus/welcome-page/welcome-banner-step2_m.png", "/jb/bonus/bonus/welcome-page/welcome-banner-step3.png", "/jb/bonus/bonus/welcome-page/welcome-banner-step3_m.png", "/jb/bonus/bonus/welcome-page/welcome-banner-step4.png", "/jb/bonus/bonus/welcome-page/welcome-banner-step4_m.png", "/jb/bonus/bonus/welcome-page/welcome-banner-step5.png", "/jb/bonus/bonus/welcome-page/welcome-banner-step5_m.png", "/jb/bonus/bonus/welcome-page/welcome-levelup.png", "/jb/bonus/bonus/welcome-page/welcome-levelup_w.png", "/jb/bonus/bonus/welcome-page/welcome-rakeback.png", "/jb/bonus/bonus/welcome-page/welcome-recharge.png", "/jb/bonus/deposit-activity-new/component/deposit.png", "/jb/bonus/deposit-activity-new/home-popup/deposit-popup-bg.png", "/jb/bonus/deposit-activity-new/home-popup/deposit-popup-bg_m.png", "/jb/bonus/vip/vip-benefit/vip-benefit-hero.png", "/jb/bonus/vip/vip-bonus-icon/icon-bonus.png", "/jb/bonus/vip/vip-bonus-icon/icon-bonus_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-cashback-monthly.png", "/jb/bonus/vip/vip-bonus-icon/icon-cashback-monthly_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-cashback-weekly.png", "/jb/bonus/vip/vip-bonus-icon/icon-cashback-weekly_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-coin-drop.png", "/jb/bonus/vip/vip-bonus-icon/icon-coin-drop_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-daily.png", "/jb/bonus/vip/vip-bonus-icon/icon-daily_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-giveaway.png", "/jb/bonus/vip/vip-bonus-icon/icon-giveaway_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-host.png", "/jb/bonus/vip/vip-bonus-icon/icon-host_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-raining.png", "/jb/bonus/vip/vip-bonus-icon/icon-raining_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-recharge.png", "/jb/bonus/vip/vip-bonus-icon/icon-recharge_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-spin.png", "/jb/bonus/vip/vip-bonus-icon/icon-spin_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-sport.png", "/jb/bonus/vip/vip-bonus-icon/icon-sport_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-svip.png", "/jb/bonus/vip/vip-bonus-icon/icon-svip_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-tips.png", "/jb/bonus/vip/vip-bonus-icon/icon-tips_m.png", "/jb/bonus/vip/vip-bonus-icon/icon-withdraw.png", "/jb/bonus/vip/vip-bonus-icon/icon-withdraw_m.png", "/jb/bonus/vip/vip-card-img/card-img-bonus.png", "/jb/bonus/vip/vip-card-img/card-img-bonus_m.png", "/jb/bonus/vip/vip-card-img/card-img-cashback.png", "/jb/bonus/vip/vip-card-img/card-img-cashback_m.png", "/jb/bonus/vip/vip-card-img/card-img-chat.png", "/jb/bonus/vip/vip-card-img/card-img-chat_m.png", "/jb/bonus/vip/vip-card-img/card-img-host.png", "/jb/bonus/vip/vip-card-img/card-img-host_m.png", "/jb/bonus/vip/vip-card-img/card-img-spin.png", "/jb/bonus/vip/vip-card-img/card-img-spin_m.png", "/jb/bonus/vip/vip-card-img/card-img-withdraw.png", "/jb/bonus/vip/vip-card-img/card-img-withdraw_m.png", "/jb/chat/public/assets/top1.png", "/jb/chat/public/assets/top2.png", "/jb/chat/public/assets/top3.png", "/jb/chat/public/coms/coindrop/share-bg.png", "/jb/chat/public/coms/msgs/tost.png", "/jb/chat/public/coms/msgs/tost_w.png", "/jb/chat/public/coms/msgs/rain/crash_rain.png", "/jb/chat/public/coms/msgs/rain/game_rain.png"]
};
let usedAssetsMap = {};

function getStringCombinations(O) {
    const M = [""];
    for (let L = 0; L < O.length; L++) {
        const I = M.length;
        for (let N = 0; N < I; N++) M.push(M[N] + O[L])
    }
    return M.sort((L, I) => I.length - L.length)
}

function createAssets(O) {
    const [M, L] = createSignal(usedAssetsMap[O] || ""), I = O.startsWith("/") ? O : "/" + O, N = {
        activePrefix: "bc"
    }, R = (_, H) => {
        const G = env.mobile ? "_m" : "",
            [z, W] = I.split("."),
            K = getStringCombinations([G, H]);
        let X = "";
        for (let Y of K) {
            const J = `/${_.activePrefix}${z}${Y}.${W}`;
            if (imageMap[_.activePrefix].includes(J)) {
                usedAssetsMap[O] = `/substation${J}`, X = `/substation${J}`;
                break
            }
        }
        return X
    };
    return createEffect(() => {
        const _ = setting.darken ? "" : "_w",
            H = [{
                active: license.is87,
                activePrefix: "87"
            }, {
                active: license.isesportsbr,
                activePrefix: "bs"
            }, {
                active: license.isbzall,
                activePrefix: "bz"
            }, {
                active: license.isjb,
                activePrefix: "jb"
            }];
        untrack(() => {
            const G = H.filter(W => W.active)[0] || N;
            let z = R(G, _);
            z || (z = R(N, _)), L(z)
        })
    }), M
}
var _tmpl$$p = template('<div class="leading-5 mt-4">'),
    _tmpl$2$f = template('<section><img class="w-48 h-48">');
const assetsDict = {
    empty: ["common/empty.png", "common/empty_w.png"],
    notfound: ["common/notfound.png", "common/notfound_w.png"],
    offline: ["common/offline.png", "common/offline_w.png"],
    privacy: ["common/privacy.png", "common/privacy_w.png"],
    ban: ["common/ban.png", "common/ban_w.png"]
};

function getAssets(O) {
    return createAssets(assetsDict[O][setting.darken ? 0 : 1])
}

function Empty(O) {
    function M(N) {
        return {
            empty: defaultT("Oops! There is no data yet!"),
            notfound: defaultT("Uh Oh! The page you're looking for cannot be found!"),
            offline: defaultT("Oops! No internet connection!"),
            privacy: defaultT("This user has privacy mode enabled!"),
            ban: ""
        }[N]
    }
    const L = () => O.type || "empty",
        I = createMemo(() => O.children ? O.children : O.hideMsg ? ? M(L()));
    return (() => {
        var N = _tmpl$2$f(),
            R = N.firstChild;
        return insert(N, createComponent(Show, {
            get when() {
                return I()
            },
            get children() {
                var _ = _tmpl$$p();
                return insert(_, I), _
            }
        }), null), createRenderEffect(_ => {
            var H = cx("py-10 text-center center flex-col", O.class),
                G = getAssets(L())();
            return H !== _.e && className(N, _.e = H), G !== _.t && setAttribute(R, "src", _.t = G), _
        }, {
            e: void 0,
            t: void 0
        }), N
    })()
}

function createBottomSheetDrag(O, M, L) {
    const [I, N] = createSignal(!1);
    return createEffect(() => {
        const R = O();
        if (!R) return;
        let _ = 0,
            H = 0;
        const G = createMemo(() => (1 - M[0]()) * H);

        function z(ne) {
            return M[1](1 - ne / H)
        }

        function W(ne) {
            return (1 - 1 / (ne * .54 / H + 1)) * H
        }

        function K(ne) {
            let oe = _ + ne;
            oe < 0 && (oe = -W(-oe)), z(oe)
        }
        let X = !1;

        function Y(ne) {
            X || (X = !0, ne !== void 0 ? L(ne > .3 || G() > H / 2) : G() !== 0 && L())
        }
        let J, Z = 0,
            Q = !1;

        function ee(ne) {
            return ne.scrollHeight - ne.clientHeight > 1
        }

        function te(ne) {
            ne.stopPropagation(), ne.preventDefault()
        }
        createTouchEvent(R, {
            onDragStart(ne, oe) {
                for (N(!0), J = oe.target, Z = 0, Q = !0; J;) {
                    if (ee(J)) {
                        Z = J.scrollTop, Q = Z > -16;
                        break
                    }
                    if (J === R) {
                        J = null;
                        break
                    }
                    J = J.parentElement
                }
            },
            onDrag(ne, oe) {
                let ie = !0;
                if (J) {
                    const re = J.scrollTop;
                    ie = Q && re <= 16;
                    const ae = J.scrollHeight - re - J.clientHeight > re;
                    J.style.overscrollBehaviorY = ae && ie ? "none" : "contain"
                } else te(oe);
                if (Q) {
                    const re = ne.y - Z;
                    re > 0 && (te(oe), K(re))
                }
            },
            onDragEnd({
                vy: ne,
                y: oe
            }, {
                timeStamp: ie
            }) {
                N(!1), J && (J.style.overscrollBehaviorY = "contain"), Q && oe - Z > 0 && Y(ne)
            }
        });
        let se;
        createTouchEvent(document, {
            onDragStart(ne, oe) {
                se = void 0, H = R.clientHeight, _ = G(), X = !1, z(_)
            },
            onDrag(ne, oe) {
                se === void 0 && (se = ne.begin.clientX <= swipeArea && Math.abs(ne.x) > Math.abs(ne.y)), se && (K(ne.x), te(oe))
            },
            onDragEnd({
                vx: ne
            }, oe) {
                Y(se ? ne : void 0)
            },
            options: {
                start: {
                    capture: !0
                },
                move: {
                    capture: !0
                }
            }
        })
    }), I
}

function createTouchEvent(O, {
    onDragStart: M,
    onDrag: L,
    onDragEnd: I,
    options: N
}) {
    let R;
    const _ = {
        x: 0,
        vx: 0,
        y: 0,
        vy: 0,
        time: 0,
        begin: void 0,
        prev: void 0
    };

    function H(Y) {
        const {
            touches: [J],
            timeStamp: Z
        } = Y;
        R = _.begin = _.prev = J, _.x = _.y = _.vx = _.vy = 0, _.time = Z, M ? .(_, Y)
    }

    function G(Y, J, Z) {
        return Y / Z * .8 + J * .2
    }

    function z(Y) {
        const {
            touches: [J],
            timeStamp: Z
        } = Y;
        if (!R) return;
        const Q = Z - _.time;
        _.vx = G(J.clientX - _.prev.clientX, _.vx, Q), _.vy = G(J.clientY - _.prev.clientY, _.vy, Q), _.time = Z, _.x = J.clientX - R.clientX, _.y = J.clientY - R.clientY, _.prev = J, L ? .(_, Y)
    }

    function W(Y) {
        R = void 0, I ? .(_, Y)
    }
    const K = useIsActive(),
        X = createMemo(() => K() ? O : void 0);
    createEventListener(X, "touchstart", H, {
        passive: !1,
        ...N ? .start
    }), createEventListener(X, "touchmove", z, {
        passive: !1,
        ...N ? .move
    }), createEventListener(X, "touchcancel", W, N ? .end), createEventListener(X, "touchend", W, N ? .end)
}
var _tmpl$$o = template("<div>"),
    _tmpl$2$e = template("<div><div class=pop-title>"),
    _tmpl$3$9 = template('<div class="text-base text-secondary">'),
    _tmpl$4$5 = template('<div class="flex mt-8 mb-2">');
const HEAD_SHAKE = "head-shake",
    [list$1, setList$1] = createSignal([]);

function createPopItem(O, M, {
    close: L = !0,
    onClose: I
} = {}) {
    return createRoot(N => {
        const R = {
                value: 0
            },
            [_, H] = createSignal(R.value);
        let G;
        const z = {
            value: [_, K => {
                W || (R.value = K, H(K), G ? .kill())
            }],
            animateTo(K, X) {
                W || (X && (W = !0), G = gsapWithCSS.to(R, {
                    value: K,
                    duration: .35,
                    overwrite: "auto",
                    ease: "power3.out",
                    onUpdate() {
                        H(R.value)
                    },
                    onComplete() {
                        X ? .(), W && N()
                    }
                }))
            }
        };
        onCleanup(() => {
            G ? .kill()
        });
        let W = !1;
        return {
            jsx: O,
            close: L,
            ane: z,
            onClose(K) {
                M(K), I ? .(K)
            }
        }
    })
}
const pop$1 = {
    get list() {
        return list$1()
    },
    push(O, M) {
        return new Promise(L => {
            setList$1(I => [...I, createPopItem(O, L, M)])
        })
    },
    confirm(O, M) {
        return new Promise(L => {
            const I = () => createComponent(Confirm, mergeProps(() => M ? .(), {
                children: O,
                onConfirm: N => {
                    L(N), pop$1.pop(I)
                }
            }));
            pop$1.push(I, {
                close: !1
            })
        })
    },
    pop(O) {
        setList$1(M => {
            if (M.length === 0) return M;
            const L = [...M],
                I = O || L[L.length - 1].jsx;
            return L.filter(N => N.jsx !== I || N.onClose())
        })
    }
};

function PopProvider() {
    const O = () => {
            const R = pop$1.list;
            return R[R.length - 1]
        },
        M = createListTransition(() => pop$1.list, {
            onChange({
                added: R,
                removed: _,
                finishRemoved: H
            }) {
                R.forEach(G => G.ane.animateTo(1)), _.forEach(G => G.ane.animateTo(0, () => H([G])))
            }
        }),
        [L, I] = createSignal(!1),
        N = createMemo(() => M().length > 0);
    return createComponent(Portal, {
        ref: R => {
            R.className = "pop-overlayer";
            const _ = createMemo(() => {
                var G;
                return ((G = pop$1.list[0]) == null ? void 0 : G.ane.value[0]()) || 0
            });
            createComputed(() => {
                N() && (R.style.visibility = "visible", setActiveElement(R, !0))
            }), createEffect(() => {
                N() && onCleanup(() => {
                    R.style.visibility = "hidden"
                })
            }), createComputed(() => {
                R.style.backgroundColor = `rgba(16, 18, 18, ${_()*.8})`
            });

            function H() {
                const G = R.children[R.children.length - 1];
                if (G && G.className.indexOf(HEAD_SHAKE) === -1) {
                    let z = function() {
                        G.classList.toggle(HEAD_SHAKE), G.removeEventListener("animationend", z)
                    };
                    G.classList.toggle(HEAD_SHAKE), G.addEventListener("animationend", z)
                }
            }
            createEventListener(R, "click", G => {
                if (G.target !== R) return;
                const z = O();
                z && (z.close ? pop$1.pop() : H())
            })
        },
        get children() {
            return [(() => {
                var R = _tmpl$$o();
                return `${swipeArea}px` != null ? R.style.setProperty("width", `${swipeArea}px`) : R.style.removeProperty("width"), createRenderEffect(() => className(R, cx("absolute left-0 h-full z-10", L() ? "pointer-events-auto" : "pointer-events-none"))), R
            })(), createComponent(For, {
                get each() {
                    return M()
                },
                children: R => createComponent(PopAne, {
                    item: R,
                    onScroll: I
                })
            })]
        }
    })
}

function PopAne(O) {
    return createComponent(ActiveProvider, {
        get value() {
            return O.item === pop$1.list[pop$1.list.length - 1]
        },
        get children() {
            return createComponent(ErrorBoundary, {
                fallback: M => (console.error(M), createComponent(Pop, {
                    get children() {
                        return createComponent(Toggle, {
                            get when() {
                                return env.isDev || env.isDevHost
                            },
                            get fallback() {
                                return createComponent(Empty, {
                                    type: "offline"
                                })
                            },
                            get children() {
                                return createComponent(Empty, {
                                    get children() {
                                        return String(M)
                                    }
                                })
                            }
                        })
                    }
                })),
                get children() {
                    return createComponent(Ref, {
                        ref: M => {
                            const L = M;
                            if (!L) return;
                            const I = !L.classList.contains("pop-center"),
                                [N] = O.item.ane.value;
                            if (createComputed(I ? () => {
                                    L.style.transform = `translate3d(0, ${(1-N())*100}%, 0)`
                                } : () => {
                                    L.style.opacity = String(N()), L.style.transform = `scale(${N()*.2+.8})`
                                }), I) {
                                const R = createBottomSheetDrag(() => L, O.item.ane.value, _ => {
                                    _ ? pop$1.pop() : O.item.ane.animateTo(1)
                                });
                                createComputed(_ => {
                                    const H = R();
                                    if (_ && !H) {
                                        O.onScroll(!0);
                                        const G = setTimeout(() => O.onScroll(!1), 2e3);
                                        onCleanup(() => clearTimeout(G))
                                    }
                                    return H
                                })
                            }
                        },
                        get children() {
                            return O.item.jsx()
                        }
                    })
                }
            })
        }
    })
}

function Pop(O) {
    const [, M] = splitProps(O, ["type", "title", "children", "class", "close"]), L = () => env.mobile ? O.type : "center", I = createMemo(() => L() !== "center");
    let N;
    return (() => {
        var R = _tmpl$2$e(),
            _ = R.firstChild;
        return spread(R, mergeProps(M, {
            get class() {
                return cx("bg-layer3 dark:bg-layer2", I() ? "pop-bottomsheet" : "pop-center", O.class)
            }
        }), !1, !0), insert(_, () => O.title, null), insert(_, createComponent(Show, {
            get when() {
                return O.close !== !1
            },
            get children() {
                return createComponent(Button, {
                    onClick: () => pop$1.pop(),
                    class: "pop-close",
                    get children() {
                        return createComponent(Icon, {
                            name: "Close"
                        })
                    }
                })
            }
        }), null), insert(R, createComponent(ScrollView, {
            ref(H) {
                var G = N;
                typeof G == "function" ? G(H) : N = H
            },
            class: "pop-content",
            get children() {
                return createComponent(Suspense, {
                    get fallback() {
                        return getFullLoading()
                    },
                    get children() {
                        return O.children
                    }
                })
            }
        }), null), R
    })()
}

function Confirm(O) {
    return onCleanup(() => {
        O.onConfirm(!1)
    }), createComponent(Pop, {
        get title() {
            return O.title || defaultT("Confirm")
        },
        close: !1,
        get children() {
            return [(() => {
                var M = _tmpl$3$9();
                return insert(M, () => O.children), M
            })(), (() => {
                var M = _tmpl$4$5();
                return insert(M, createComponent(Button, {
                    class: "flex-1 mr-3 text-lg",
                    type: "second",
                    onClick: () => O.onConfirm(!1),
                    get children() {
                        return O.cancel || defaultT("Cancel")
                    }
                }), null), insert(M, createComponent(Button, {
                    class: "flex-1 text-lg",
                    onClick: () => O.onConfirm(!0),
                    type: "brand",
                    get children() {
                        return O.confirm || defaultT("Confirm")
                    }
                }), null), M
            })()]
        }
    })
}

function createClickOutside(O, M, L) {
    createEventListener(() => document.body, "click", I => {
        let N = O();
        if (N) {
            if (N = Array.isArray(N) ? N : [N], L) {
                const R = L();
                if (R && !(Array.isArray(R) ? R : [R]).every(_ => !_.contains(I.target))) return
            }
            N.every(R => !R.contains(I.target)) && M(I)
        }
    })
}

function Transition(O) {
    const M = mergeProps((() => {
            const N = O.name;
            return N ? presets[N] : {}
        })(), O),
        L = resolveFirst(() => O.children),
        I = createSwitchTransition(L, {
            onEnter(N) {
                gsapWithCSS.killTweensOf(N), gsapWithCSS.fromTo(N, M.from, { ...M.to,
                    ...M.config
                })
            },
            onExit(N, R) {
                gsapWithCSS.killTweensOf(N), gsapWithCSS.fromTo(N, M.to, { ...M.from,
                    ...M.config,
                    onComplete: R
                })
            }
        });
    return createUnique(I)
}
const config = {
        duration: .3,
        ease: "power2.out"
    },
    presets = {
        fade: {
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            },
            config
        },
        fadeUp: {
            from: {
                opacity: 0,
                y: "100%"
            },
            to: {
                opacity: 1,
                y: 0
            },
            config
        },
        fadeRight: {
            from: {
                opacity: 0,
                x: "100%"
            },
            to: {
                opacity: 1,
                x: 0
            },
            config
        },
        fadeDown: {
            from: {
                opacity: 0,
                y: "-100%"
            },
            to: {
                opacity: 1,
                y: 0
            },
            config
        },
        fadeLeft: {
            from: {
                opacity: 0,
                x: "-100%"
            },
            to: {
                opacity: 1,
                x: 0
            },
            config
        },
        fadeUp2: {
            from: {
                opacity: 0,
                y: 16
            },
            to: {
                opacity: 1,
                y: 0
            },
            config
        },
        fadeRight2: {
            from: {
                opacity: 0,
                x: 16
            },
            to: {
                opacity: 1,
                x: 0
            },
            config
        },
        fadeDown2: {
            from: {
                opacity: 0,
                y: -16
            },
            to: {
                opacity: 1,
                y: 0
            },
            config
        },
        fadeLeft2: {
            from: {
                opacity: 0,
                x: -16
            },
            to: {
                opacity: 1,
                x: 0
            },
            config
        },
        slideUp: {
            from: {
                y: "100%"
            },
            to: {
                y: 0
            },
            config
        },
        slideRight: {
            from: {
                x: "100%"
            },
            to: {
                x: 0
            },
            config
        },
        slideDown: {
            from: {
                y: "-100%"
            },
            to: {
                y: 0
            },
            config
        },
        slideLeft: {
            from: {
                x: "-100%"
            },
            to: {
                x: 0
            },
            config
        },
        fadeZoom: {
            from: {
                opacity: 0,
                scale: .3
            },
            to: {
                opacity: 1,
                scale: 1
            },
            config
        }
    };

function createUnique(O) {
    const M = new Set;
    return () => {
        const L = O();
        return M.clear(), L.forEach(I => M.add(I)), [...M.keys()]
    }
}
const NestCtx = createContext(() => {});

function PcLayer(O) {
    const [M, L] = createSignal(), [, I] = splitDropProps(O), [N, R] = createSignal(!1), _ = useContext(NestCtx);
    createEffect(() => {
        O.visible && (_(!0), onCleanup(() => _(!1)))
    });
    const H = useScrollElement();
    createEventListener(() => O.visible ? H() : void 0, "scroll", z => O.setVisible(!1));
    const G = createMemo(() => O.visible && !N() ? M() : void 0);
    return createClickOutside(G, () => {
        setTimeout(() => O.setVisible(!1), 0)
    }, () => O.trigger), createComponent(NestCtx.Provider, {
        value: R,
        get children() {
            return createComponent(Portal, {
                get children() {
                    return createComponent(Transition, {
                        from: {
                            opacity: 0,
                            y: -10
                        },
                        to: {
                            opacity: 1,
                            y: 0
                        },
                        config: {
                            duration: .2
                        },
                        get children() {
                            return createComponent(Toggle, {
                                get when() {
                                    return O.visible
                                },
                                get children() {
                                    return createComponent(ScrollView, mergeProps(I, {
                                        get class() {
                                            return cx("dropdown-layer bg-layer3", I.class)
                                        },
                                        ref(z) {
                                            var W = mergeRefs(K => {
                                                L(K)
                                            }, O.ref);
                                            typeof W == "function" && W(z)
                                        },
                                        get children() {
                                            return createComponent(Suspense, {
                                                get children() {
                                                    return O.layer
                                                }
                                            })
                                        }
                                    }))
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

function MobileLayer(O) {
    const [, M] = splitDropProps(O), L = createRootPool(() => createComponent(ActiveProvider, {
        get value() {
            return O.visible
        },
        force: !0,
        get children() {
            return createComponent(Pop, mergeProps(M, {
                get class() {
                    return cx("min-h-52", O.class)
                },
                get title() {
                    return O.title || "Select"
                },
                get children() {
                    return createComponent(Suspense, {
                        get children() {
                            return O.layer
                        }
                    })
                }
            }))
        }
    }));

    function I() {
        return onCleanup(() => O.setVisible(!1)), L()
    }
    return createComputed(N => {
        O.visible ? (pop$1.push(I), onCleanup(() => pop$1.pop(I))) : pop$1.pop(I)
    }), null
}
const DEFAULT_SPACE = 8;

function DropDown(O) {
    const [M, L] = createSignal(), [I, N] = createSignal(), [R, _] = createSignal({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }), H = () => (O.space ? ? DEFAULT_SPACE) * env.remScale;
    createComputed(() => {
        const z = O.trigger;
        z && L(z)
    }), createEventListener(M, "click", z => {
        const W = I();
        W && W.contains(z.target) || O.setVisible(!O.visible)
    }), createEffect(() => {
        const z = M(),
            W = I();
        !z || !W || !O.visible || queueMicrotask(() => {
            W.style.setProperty("min-height", ""), W.style.setProperty("max-height", ""), W.style.setProperty("width", "");
            const K = z.getBoundingClientRect(),
                X = W.getBoundingClientRect(),
                Y = K.top,
                J = window.innerHeight - K.bottom,
                Z = z.clientHeight + X.height + H(),
                Q = () => J >= X.height + H() * 2 || J >= Y ? 1 : -1,
                ee = Q() === 1 ? J : Y,
                te = Z + H() > ee,
                se = () => te ? ee - H() * 2 : X.height,
                ne = K.x + X.width < window.innerWidth ? K.x : Math.max(0, K.x - X.width + z.clientWidth),
                oe = Q() === 1 ? K.bottom + H() : K.top - se() - H();
            _({
                x: ne,
                y: oe,
                width: Math.max(X.width, z.clientWidth),
                height: te ? se() : 0
            })
        })
    });
    const G = createMemo(() => O.dropdownType ? O.dropdownType === "pop" : env.mobile);
    return [createComponent(Ref, {
        ref: L,
        get children() {
            return O.children
        }
    }), createComponent(Show, {
        get when() {
            return G()
        },
        get fallback() {
            return createComponent(PcLayer, mergeProps(O, {
                get style() {
                    return {
                        left: `${R().x}px`,
                        top: `${R().y}px`,
                        width: R().width > 0 ? `${R().width}px` : void 0,
                        ...R().height ? {
                            "min-height": `${R().height}px`,
                            "max-height": `${R().height}px`
                        } : {}
                    }
                },
                get trigger() {
                    return M()
                },
                ref: N
            }))
        },
        get children() {
            return createComponent(MobileLayer, O)
        }
    })]
}

function splitDropProps(O) {
    return splitProps(O, ["visible", "title", "setVisible", "layer", "trigger"])
}

function DatePicker(O) {
    const [, M] = splitProps(O, ["value", "onChange", "options", "class", "format"]), L = createMemo(() => O.format || (W => Array.isArray(W) ? W.map(K => K ? .toLocaleDateString() || "").join("-") : W.toLocaleDateString())), I = mergeProps(options, O.options), N = Array.isArray(O.value);
    N ? O.value.forEach(W => W.setHours(0, 0, 0, 0)) : O.value.setHours(0, 0, 0, 0);
    const [R, _] = createStore({
        options: I,
        view: "days",
        show: !1,
        selectedDate: Array.isArray(O.value) ? O.value[0] : O.value
    });

    function H(W) {
        O.onChange(W), N || _("show", !1)
    }
    const [G, z] = createSignal();
    return createComponent(DatePickerContext.Provider, {
        value: {
            state: R,
            setState: _,
            value: () => O.value,
            onChange: H
        },
        get children() {
            return createComponent(Ref, {
                ref: z,
                get children() {
                    return createComponent(Input, mergeProps(M, {
                        readOnly: !0,
                        get value() {
                            return L()(O.value)
                        },
                        get class() {
                            return cx("relative", O.class)
                        },
                        get children() {
                            return [memo$2(() => O.children || createComponent(Icon, {
                                class: "order-first -m-1 mr-2",
                                name: "Calendar"
                            })), createComponent(DropDown, {
                                get class() {
                                    return cx(!env.mobile && "w-96")
                                },
                                get title() {
                                    return O.title || "Date Picker"
                                },
                                get visible() {
                                    return R.show
                                },
                                setVisible: W => _("show", W),
                                get layer() {
                                    return createComponent(DatePickerLayer, {})
                                },
                                get trigger() {
                                    return G()
                                }
                            })]
                        }
                    }))
                }
            })
        }
    })
}

function Each(O) {
    const M = useActiveMemo(() => O.each),
        L = createRootPool((I, N) => O.component({
            get data() {
                return I()
            },
            get active() {
                return N()
            }
        }), {
            limit: O.limit || 100
        });
    return createComponent(For, {
        get each() {
            return M()
        },
        get fallback() {
            return O.fallback
        },
        children: I => L(I)
    })
}

function memo(O, M, L) {
    let I = L.initialDeps ? ? [],
        N;

    function R() {
        var _, H, G, z;
        let W;
        L.key && (_ = L.debug) != null && _.call(L) && (W = Date.now());
        const K = O();
        if (!(K.length !== I.length || K.some((Y, J) => I[J] !== Y))) return N;
        I = K;
        let X;
        if (L.key && (H = L.debug) != null && H.call(L) && (X = Date.now()), N = M(...K), L.key && (G = L.debug) != null && G.call(L)) {
            const Y = Math.round((Date.now() - W) * 100) / 100,
                J = Math.round((Date.now() - X) * 100) / 100,
                Z = J / 16,
                Q = (ee, te) => {
                    for (ee = String(ee); ee.length < te;) ee = " " + ee;
                    return ee
                };
            console.info(`%c⏱ ${Q(J,5)} /${Q(Y,5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*Z,120))}deg 100% 31%);`, L ? .key)
        }
        return (z = L ? .onChange) == null || z.call(L, N), N
    }
    return R.updateDeps = _ => {
        I = _
    }, R
}

function notUndefined(O, M) {
    if (O === void 0) throw new Error("Unexpected undefined");
    return O
}
const approxEqual = (O, M) => Math.abs(O - M) < 1,
    debounce = (O, M, L) => {
        let I;
        return function(...N) {
            O.clearTimeout(I), I = O.setTimeout(() => M.apply(this, N), L)
        }
    },
    defaultKeyExtractor = O => O,
    defaultRangeExtractor = O => {
        const M = Math.max(O.startIndex - O.overscan, 0),
            L = Math.min(O.endIndex + O.overscan, O.count - 1),
            I = [];
        for (let N = M; N <= L; N++) I.push(N);
        return I
    },
    observeElementRect = (O, M) => {
        const L = O.scrollElement;
        if (!L) return;
        const I = O.targetWindow;
        if (!I) return;
        const N = _ => {
            const {
                width: H,
                height: G
            } = _;
            M({
                width: Math.round(H),
                height: Math.round(G)
            })
        };
        if (N(L.getBoundingClientRect()), !I.ResizeObserver) return () => {};
        const R = new I.ResizeObserver(_ => {
            const H = () => {
                const G = _[0];
                if (G != null && G.borderBoxSize) {
                    const z = G.borderBoxSize[0];
                    if (z) {
                        N({
                            width: z.inlineSize,
                            height: z.blockSize
                        });
                        return
                    }
                }
                N(L.getBoundingClientRect())
            };
            O.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(H) : H()
        });
        return R.observe(L, {
            box: "border-box"
        }), () => {
            R.unobserve(L)
        }
    },
    addEventListenerOptions = {
        passive: !0
    },
    supportsScrollend = typeof window > "u" ? !0 : "onscrollend" in window,
    observeElementOffset = (O, M) => {
        const L = O.scrollElement;
        if (!L) return;
        const I = O.targetWindow;
        if (!I) return;
        let N = 0;
        const R = O.options.useScrollendEvent && supportsScrollend ? () => {} : debounce(I, () => {
                M(N, !1)
            }, O.options.isScrollingResetDelay),
            _ = W => () => {
                const {
                    horizontal: K,
                    isRtl: X
                } = O.options;
                N = K ? L.scrollLeft * (X && -1 || 1) : L.scrollTop, R(), M(N, W)
            },
            H = _(!0),
            G = _(!1);
        G(), L.addEventListener("scroll", H, addEventListenerOptions);
        const z = O.options.useScrollendEvent && supportsScrollend;
        return z && L.addEventListener("scrollend", G, addEventListenerOptions), () => {
            L.removeEventListener("scroll", H), z && L.removeEventListener("scrollend", G)
        }
    },
    measureElement = (O, M, L) => {
        if (M != null && M.borderBoxSize) {
            const I = M.borderBoxSize[0];
            if (I) return Math.round(I[L.options.horizontal ? "inlineSize" : "blockSize"])
        }
        return Math.round(O.getBoundingClientRect()[L.options.horizontal ? "width" : "height"])
    },
    elementScroll = (O, {
        adjustments: M = 0,
        behavior: L
    }, I) => {
        var N, R;
        const _ = O + M;
        (R = (N = I.scrollElement) == null ? void 0 : N.scrollTo) == null || R.call(N, {
            [I.options.horizontal ? "left" : "top"]: _,
            behavior: L
        })
    };
class Virtualizer {
    constructor(M) {
        this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = new Map, this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = new Map, this.observer = (() => {
            let L = null;
            const I = () => L || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : L = new this.targetWindow.ResizeObserver(N => {
                N.forEach(R => {
                    const _ = () => {
                        this._measureElement(R.target, R)
                    };
                    this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(_) : _()
                })
            }));
            return {
                disconnect: () => {
                    var N;
                    (N = I()) == null || N.disconnect(), L = null
                },
                observe: N => {
                    var R;
                    return (R = I()) == null ? void 0 : R.observe(N, {
                        box: "border-box"
                    })
                },
                unobserve: N => {
                    var R;
                    return (R = I()) == null ? void 0 : R.unobserve(N)
                }
            }
        })(), this.range = null, this.setOptions = L => {
            Object.entries(L).forEach(([I, N]) => {
                typeof N > "u" && delete L[I]
            }), this.options = {
                debug: !1,
                initialOffset: 0,
                overscan: 1,
                paddingStart: 0,
                paddingEnd: 0,
                scrollPaddingStart: 0,
                scrollPaddingEnd: 0,
                horizontal: !1,
                getItemKey: defaultKeyExtractor,
                rangeExtractor: defaultRangeExtractor,
                onChange: () => {},
                measureElement,
                initialRect: {
                    width: 0,
                    height: 0
                },
                scrollMargin: 0,
                gap: 0,
                indexAttribute: "data-index",
                initialMeasurementsCache: [],
                lanes: 1,
                isScrollingResetDelay: 150,
                enabled: !0,
                isRtl: !1,
                useScrollendEvent: !1,
                useAnimationFrameWithResizeObserver: !1,
                ...L
            }
        }, this.notify = L => {
            var I, N;
            (N = (I = this.options).onChange) == null || N.call(I, this, L)
        }, this.maybeNotify = memo(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), L => {
            this.notify(L)
        }, {
            key: !1,
            debug: () => this.options.debug,
            initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
        }), this.cleanup = () => {
            this.unsubs.filter(Boolean).forEach(L => L()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null
        }, this._didMount = () => () => {
            this.cleanup()
        }, this._willUpdate = () => {
            var L;
            const I = this.options.enabled ? this.options.getScrollElement() : null;
            if (this.scrollElement !== I) {
                if (this.cleanup(), !I) {
                    this.maybeNotify();
                    return
                }
                this.scrollElement = I, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((L = this.scrollElement) == null ? void 0 : L.window) ? ? null, this.elementsCache.forEach(N => {
                    this.observer.observe(N)
                }), this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0
                }), this.unsubs.push(this.options.observeElementRect(this, N => {
                    this.scrollRect = N, this.maybeNotify()
                })), this.unsubs.push(this.options.observeElementOffset(this, (N, R) => {
                    this.scrollAdjustments = 0, this.scrollDirection = R ? this.getScrollOffset() < N ? "forward" : "backward" : null, this.scrollOffset = N, this.isScrolling = R, this.maybeNotify()
                }))
            }
        }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ? ? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ? ? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (L, I) => {
            const N = new Map,
                R = new Map;
            for (let _ = I - 1; _ >= 0; _--) {
                const H = L[_];
                if (N.has(H.lane)) continue;
                const G = R.get(H.lane);
                if (G == null || H.end > G.end ? R.set(H.lane, H) : H.end < G.end && N.set(H.lane, !0), N.size === this.options.lanes) break
            }
            return R.size === this.options.lanes ? Array.from(R.values()).sort((_, H) => _.end === H.end ? _.index - H.index : _.end - H.end)[0] : void 0
        }, this.getMeasurementOptions = memo(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled], (L, I, N, R, _) => (this.pendingMeasuredCacheIndexes = [], {
            count: L,
            paddingStart: I,
            scrollMargin: N,
            getItemKey: R,
            enabled: _
        }), {
            key: !1
        }), this.getMeasurements = memo(() => [this.getMeasurementOptions(), this.itemSizeCache], ({
            count: L,
            paddingStart: I,
            scrollMargin: N,
            getItemKey: R,
            enabled: _
        }, H) => {
            if (!_) return this.measurementsCache = [], this.itemSizeCache.clear(), [];
            this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach(W => {
                this.itemSizeCache.set(W.key, W.size)
            }));
            const G = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
            this.pendingMeasuredCacheIndexes = [];
            const z = this.measurementsCache.slice(0, G);
            for (let W = G; W < L; W++) {
                const K = R(W),
                    X = this.options.lanes === 1 ? z[W - 1] : this.getFurthestMeasurement(z, W),
                    Y = X ? X.end + this.options.gap : I + N,
                    J = H.get(K),
                    Z = typeof J == "number" ? J : this.options.estimateSize(W),
                    Q = Y + Z,
                    ee = X ? X.lane : W % this.options.lanes;
                z[W] = {
                    index: W,
                    start: Y,
                    size: Z,
                    end: Q,
                    key: K,
                    lane: ee
                }
            }
            return this.measurementsCache = z, z
        }, {
            key: !1,
            debug: () => this.options.debug
        }), this.calculateRange = memo(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (L, I, N, R) => this.range = L.length > 0 && I > 0 ? calculateRange({
            measurements: L,
            outerSize: I,
            scrollOffset: N,
            lanes: R
        }) : null, {
            key: !1,
            debug: () => this.options.debug
        }), this.getVirtualIndexes = memo(() => {
            let L = null,
                I = null;
            const N = this.calculateRange();
            return N && (L = N.startIndex, I = N.endIndex), this.maybeNotify.updateDeps([this.isScrolling, L, I]), [this.options.rangeExtractor, this.options.overscan, this.options.count, L, I]
        }, (L, I, N, R, _) => R === null || _ === null ? [] : L({
            startIndex: R,
            endIndex: _,
            overscan: I,
            count: N
        }), {
            key: !1,
            debug: () => this.options.debug
        }), this.indexFromElement = L => {
            const I = this.options.indexAttribute,
                N = L.getAttribute(I);
            return N ? parseInt(N, 10) : (console.warn(`Missing attribute name '${I}={index}' on measured element.`), -1)
        }, this._measureElement = (L, I) => {
            const N = this.indexFromElement(L),
                R = this.measurementsCache[N];
            if (!R) return;
            const _ = R.key,
                H = this.elementsCache.get(_);
            H !== L && (H && this.observer.unobserve(H), this.observer.observe(L), this.elementsCache.set(_, L)), L.isConnected && this.resizeItem(N, this.options.measureElement(L, I, this))
        }, this.resizeItem = (L, I) => {
            const N = this.measurementsCache[L];
            if (!N) return;
            const R = this.itemSizeCache.get(N.key) ? ? N.size,
                _ = I - R;
            _ !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(N, _, this) : N.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
                adjustments: this.scrollAdjustments += _,
                behavior: void 0
            }), this.pendingMeasuredCacheIndexes.push(N.index), this.itemSizeCache = new Map(this.itemSizeCache.set(N.key, I)), this.notify(!1))
        }, this.measureElement = L => {
            if (!L) {
                this.elementsCache.forEach((I, N) => {
                    I.isConnected || (this.observer.unobserve(I), this.elementsCache.delete(N))
                });
                return
            }
            this._measureElement(L, void 0)
        }, this.getVirtualItems = memo(() => [this.getVirtualIndexes(), this.getMeasurements()], (L, I) => {
            const N = [];
            for (let R = 0, _ = L.length; R < _; R++) {
                const H = L[R],
                    G = I[H];
                N.push(G)
            }
            return N
        }, {
            key: !1,
            debug: () => this.options.debug
        }), this.getVirtualItemForOffset = L => {
            const I = this.getMeasurements();
            if (I.length !== 0) return notUndefined(I[findNearestBinarySearch(0, I.length - 1, N => notUndefined(I[N]).start, L)])
        }, this.getOffsetForAlignment = (L, I, N = 0) => {
            const R = this.getSize(),
                _ = this.getScrollOffset();
            I === "auto" && (I = L >= _ + R ? "end" : "start"), I === "center" ? L += (N - R) / 2 : I === "end" && (L -= R);
            const H = this.options.horizontal ? "scrollWidth" : "scrollHeight",
                G = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[H] : this.scrollElement[H] : 0) - R;
            return Math.max(Math.min(G, L), 0)
        }, this.getOffsetForIndex = (L, I = "auto") => {
            L = Math.max(0, Math.min(L, this.options.count - 1));
            const N = this.measurementsCache[L];
            if (!N) return;
            const R = this.getSize(),
                _ = this.getScrollOffset();
            if (I === "auto")
                if (N.end >= _ + R - this.options.scrollPaddingEnd) I = "end";
                else if (N.start <= _ + this.options.scrollPaddingStart) I = "start";
            else return [_, I];
            const H = I === "end" ? N.end + this.options.scrollPaddingEnd : N.start - this.options.scrollPaddingStart;
            return [this.getOffsetForAlignment(H, I, N.size), I]
        }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
            this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null)
        }, this.scrollToOffset = (L, {
            align: I = "start",
            behavior: N
        } = {}) => {
            this.cancelScrollToIndex(), N === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(L, I), {
                adjustments: void 0,
                behavior: N
            })
        }, this.scrollToIndex = (L, {
            align: I = "auto",
            behavior: N
        } = {}) => {
            L = Math.max(0, Math.min(L, this.options.count - 1)), this.cancelScrollToIndex(), N === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
            const R = this.getOffsetForIndex(L, I);
            if (!R) return;
            const [_, H] = R;
            this._scrollToOffset(_, {
                adjustments: void 0,
                behavior: N
            }), N !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(this.options.getItemKey(L))) {
                    const [G] = notUndefined(this.getOffsetForIndex(L, H));
                    approxEqual(G, this.getScrollOffset()) || this.scrollToIndex(L, {
                        align: H,
                        behavior: N
                    })
                } else this.scrollToIndex(L, {
                    align: H,
                    behavior: N
                })
            }))
        }, this.scrollBy = (L, {
            behavior: I
        } = {}) => {
            this.cancelScrollToIndex(), I === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + L, {
                adjustments: void 0,
                behavior: I
            })
        }, this.getTotalSize = () => {
            var L;
            const I = this.getMeasurements();
            let N;
            if (I.length === 0) N = this.options.paddingStart;
            else if (this.options.lanes === 1) N = ((L = I[I.length - 1]) == null ? void 0 : L.end) ? ? 0;
            else {
                const R = Array(this.options.lanes).fill(null);
                let _ = I.length - 1;
                for (; _ > 0 && R.some(H => H === null);) {
                    const H = I[_];
                    R[H.lane] === null && (R[H.lane] = H.end), _--
                }
                N = Math.max(...R.filter(H => H !== null))
            }
            return Math.max(N - this.options.scrollMargin + this.options.paddingEnd, 0)
        }, this._scrollToOffset = (L, {
            adjustments: I,
            behavior: N
        }) => {
            this.options.scrollToFn(L, {
                behavior: N,
                adjustments: I
            }, this)
        }, this.measure = () => {
            this.itemSizeCache = new Map, this.notify(!1)
        }, this.setOptions(M)
    }
}
const findNearestBinarySearch = (O, M, L, I) => {
    for (; O <= M;) {
        const N = (O + M) / 2 | 0,
            R = L(N);
        if (R < I) O = N + 1;
        else if (R > I) M = N - 1;
        else return N
    }
    return O > 0 ? O - 1 : 0
};

function calculateRange({
    measurements: O,
    outerSize: M,
    scrollOffset: L,
    lanes: I
}) {
    const N = O.length - 1,
        R = G => O[G].start;
    if (O.length <= I) return {
        startIndex: 0,
        endIndex: N
    };
    let _ = findNearestBinarySearch(0, N, R, L),
        H = _;
    if (I === 1)
        for (; H < N && O[H].end < L + M;) H++;
    else if (I > 1) {
        const G = Array(I).fill(0);
        for (; H < N && G.some(W => W < L + M);) {
            const W = O[H];
            G[W.lane] = W.end, H++
        }
        const z = Array(I).fill(L + M);
        for (; _ > 0 && z.some(W => W >= L);) {
            const W = O[_];
            z[W.lane] = W.start, _--
        }
        _ = Math.max(0, _ - _ % I), H = Math.min(N, H + (I - 1 - H % I))
    }
    return {
        startIndex: _,
        endIndex: H
    }
}
var _tmpl$$n = template('<div class="h-44 py-2"><div class="bg-quarterary h-full">'),
    _tmpl$2$d = template("<div class=relative>");

function FlatList(O) {
    let M;
    const [L, I] = splitProps(mergeProps({
        estimateSize: () => 100,
        pool: 100,
        overscan: 10
    }, O), ["data", "overscan", "estimateSize", "getComponent", "pool", "paddingStart", "paddingEnd", "windowScroll", "bodyLock", "children", "ref", "classitem", "onChange", "getItemKey"]), [N, R] = createStore([]), [_, H] = createSignal(0), G = Z => {
        Z._willUpdate(), R(reconcile(Z.getVirtualItems().filter(Q => Q), {
            key: "key"
        })), H(Z.getTotalSize())
    }, z = {
        count: L.data.length,
        overscan: L.overscan,
        estimateSize: L.estimateSize,
        getItemKey: L.getItemKey,
        getScrollElement() {
            return M
        },
        paddingStart: L.paddingStart,
        paddingEnd: L.paddingEnd,
        rangeExtractor: createBatchRange(L.onChange),
        observeElementOffset,
        observeElementRect,
        scrollToFn: elementScroll,
        onChange: G
    }, W = new Virtualizer(z);

    function K(Z, Q) {
        const ee = new Set(Q.map(te => te.id));
        return Z.filter(te => !ee.has(te.id)).map(te => te.id)
    }
    createEffect(Z => {
        const Q = L.data;
        return untrack(() => {
            z.count === 0 && (z.count = Q.length), W.setOptions(z), Q.length > Z.length || K(Z, Q).forEach(ee => {
                W.itemSizeCache.delete(ee)
            }), G(W)
        }), Q
    }, []);
    const X = L.ref;
    X && (X(W), onCleanup(() => X()));
    const Y = new Map;

    function J(Z) {
        const Q = O.getComponent(Z);
        let ee = Y.get(Q);
        return ee || (ee = createRootPool((te, se) => {
            const ne = () => te()[0],
                oe = createComponent(FlatCtx.Provider, {
                    value: {
                        resizeItem: re,
                        get index() {
                            return ne().index
                        }
                    },
                    get children() {
                        return createComponent(ActiveProvider, {
                            get value() {
                                return se()
                            },
                            get children() {
                                return _tmpl$$n()
                            }
                        })
                    }
                }),
                ie = children(() => oe).toArray()[0];
            createEffect(() => {
                const ae = ne().index;
                W.itemSizeCache.has(ae) || re()
            });

            function re() {
                ie && untrack(() => {
                    W.resizeItem(ne().index, ie.getBoundingClientRect().height)
                })
            }
            return ie.classList.add("absolute", "left-0", "w-full", "top-0"), createEffect(() => {
                ie.style.transform = `translateY(${ne().start}px)`
            }), oe
        }, {
            limit: L.pool
        }), Y.set(Q, ee)), ee
    }
    return createComponent(ScrollView, mergeProps(I, {
        get class() {
            return cx("will-change-transform", O.class)
        },
        ref(Z) {
            var Q = M;
            typeof Q == "function" ? Q(Z) : M = Z
        },
        get children() {
            var Z = _tmpl$2$d();
            return Z.style.setProperty("background", "linear-gradient(0deg, rgb(240, 240, 240) 25%, rgb(235, 69, 69) 25%, rgb(255, 255, 255) 50%) 0% 0% / 100% 30px"), insert(Z, () => L.children, null), insert(Z, createComponent(For, {
                each: N,
                children: Q => J(L.data[Q.index])([Q, L.data[Q.index]])
            }), null), createRenderEffect(Q => (Q = `${_()}px`) != null ? Z.style.setProperty("height", Q) : Z.style.removeProperty("height")), Z
        }
    }))
}
const FlatCtx = createContext({
    resizeItem() {},
    get index() {
        return 0
    }
});

function useFlatItem() {
    return useContext(FlatCtx)
}

function createBatchRange(O) {
    const M = {
        start: 0,
        end: -1,
        indexs: []
    };
    return L => {
        const I = Math.max(L.startIndex, 0),
            N = Math.max(Math.min(L.endIndex, L.count - 1), I);
        if (I < M.start || N > M.end || I === N) {
            const R = Math.max(I - L.overscan, 0),
                _ = Math.max(Math.min(N + L.overscan, L.count - 1), I),
                H = [];
            for (let G = R; G <= _; G++) H.push(G);
            M.start = R, M.end = _, M.indexs = H
        }
        return O && O(L.startIndex, L.endIndex), M.indexs
    }
}

function ListView$1(O) {
    const M = useScrollElement();

    function L(N, R) {
        const [_, {
            remove: H
        }] = I(), G = O.lazy ? !O.lazy(N) : !1, [z, W] = createSignal(isBot || G), K = children(() => O.children(() => z() ? N : void 0, R));
        if (!G) {
            const X = resolveFirst(K);
            createEffect(() => {
                const Y = X();
                _(Y, J => {
                    J.isIntersecting && W(!0)
                }), onCleanup(() => {
                    H(Y)
                })
            })
        }
        return K
    }
    const I = createMemo(() => {
        const N = M();
        if (N) return createViewportObserver({
            root: N instanceof Element ? N : void 0,
            rootMargin: O.rootMargin
        })
    });
    return createComponent(Show, {
        get when() {
            return M()
        },
        get children() {
            return createComponent(For, {
                get each() {
                    return O.each
                },
                children: L
            })
        }
    })
}
var _tmpl$$m = template("<div>"),
    _tmpl$2$c = template('<div class="col-span-full py-4 center">'),
    _tmpl$3$8 = template('<div class="col-span-full h-20 font-extrabold center">');

function ListView(O) {
    const [, M] = splitProps(O, ["resource", "offset", "key", "children", "ListRoot", "init", "empty", "flat"]), [L, I] = createSignal(), N = createVisibilityObserver({})(L);
    createEffect(H => {
        const G = N();
        return !H && G && O.resource.next(), G
    });
    const R = children(() => createComponent(For, {
            get each() {
                return O.resource.list
            },
            children: (H, G) => createComponent(For, {
                get each() {
                    return O.flat(H)
                },
                children: (z, W) => O.children(z, () => W() * (G() + 1))
            })
        })),
        _ = createMemo(() => {
            const H = O.resource.list[0];
            return H && O.flat(H).length > 0
        });
    return [(() => {
        var H = _tmpl$$m();
        return spread(H, mergeProps(M, {
            get class() {
                return cx("grid", O.class)
            }
        }), !1, !0), insert(H, createComponent(Show, {
            get when() {
                return _()
            },
            get fallback() {
                return createComponent(Show, {
                    get when() {
                        return O.resource.pending
                    },
                    get fallback() {
                        return O.empty || createComponent(Empty, {
                            class: "col-span-full"
                        })
                    },
                    get children() {
                        return O.init
                    }
                })
            },
            get children() {
                return createComponent(Show, {
                    get when() {
                        return O.ListRoot
                    },
                    keyed: !0,
                    fallback: R,
                    children: G => createComponent(G, {
                        children: R
                    })
                })
            }
        })), H
    })(), createComponent(Show, {
        get when() {
            return _()
        },
        get children() {
            return createComponent(Show, {
                get when() {
                    return O.resource.page < O.resource.total
                },
                get fallback() {
                    return (() => {
                        var H = _tmpl$3$8();
                        return insert(H, () => defaultT("No More")), H
                    })()
                },
                get children() {
                    var H = _tmpl$2$c();
                    return use(I, H), insert(H, createComponent(Loading, {})), H
                }
            })
        }
    })]
}

function createPaginationResource(O, M, L) {
    const [I, N] = useTransition(), [R, _] = createSignal(1), [H, G] = createSignal([]);
    if (L) {
        const X = createMemo(() => JSON.stringify(L()));
        createComputed(Y => {
            const J = X();
            return Y && (G([]), _(1)), J
        })
    }
    const z = createMemo(() => {
            const X = H(),
                Y = X[X.length - 1];
            return Y ? M(Y) : 1 / 0
        }),
        W = () => {
            untrack(I) || N(() => {
                _(X => {
                    const Y = z(),
                        J = R() + 1;
                    return J <= Y ? J : X
                })
            })
        },
        [K] = O(R);
    return createComputed(() => {
        const X = K(),
            Y = untrack(R);
        X && G(J => {
            const Z = J.concat();
            return Z[Y - 1] = X, Z
        })
    }), {
        get list() {
            return H()
        },
        get page() {
            return R()
        },
        get total() {
            return z()
        },
        next: W,
        get pending() {
            return I()
        }
    }
}

function createMutationObserver(O, M, L) {
    let I, N;
    const R = typeof window < "u" && "MutationObserver" in window;
    typeof M == "function" ? (I = {}, N = M) : (I = M, N = L);
    const _ = R ? new MutationObserver(N) : void 0,
        H = (W, K) => _ ? .observe(W, access(K) ? ? I),
        G = () => {
            asArray(access(O)).forEach(W => {
                W instanceof Node ? H(W, I) : H(W[0], W[1])
            })
        },
        z = () => _ ? .disconnect();
    return onMount(G), onCleanup(z), [H, {
        start: G,
        stop: z,
        instance: _,
        isSupported: R
    }]
}
var _tmpl$$l = template('<div><div class="bg-layer6 rounded h-full">');

function ScrollbarBase(O) {
    const [, M] = splitProps(O, ["class", "scrollLeft", "scrollWidth", "clientWidth"]), L = createMemo(() => O.scrollWidth - O.clientWidth), I = () => O.scrollLeft / L(), N = () => O.clientWidth / O.scrollWidth, R = () => {
        const _ = N();
        return I() * (1 - _) / _
    };
    return (() => {
        var _ = _tmpl$$l(),
            H = _.firstChild;
        return spread(_, mergeProps(M, {
            get class() {
                return cx("h-1 rounded-sm bg-layer4 overflow-hidden", O.class)
            }
        }), !1, !0), createRenderEffect(G => {
            var z = `translateX(${100*R()}%)`,
                W = `${100*N()}%`;
            return z !== G.e && ((G.e = z) != null ? H.style.setProperty("transform", z) : H.style.removeProperty("transform")), W !== G.t && ((G.t = W) != null ? H.style.setProperty("width", W) : H.style.removeProperty("width")), G
        }, {
            e: void 0,
            t: void 0
        }), _
    })()
}

function createScrollProps(O) {
    const [M, L] = createStore({
        isScrolling: !1,
        scrollLeft: 0,
        scrollTop: 0,
        scrollWidth: 1,
        scrollHeight: 1,
        clientWidth: 0,
        clientHeight: 0
    }), [I, {
        stop: N
    }] = createMutationObserver([], {
        childList: !0
    }, () => {
        L({
            scrollWidth: O().scrollWidth,
            scrollHeight: O().scrollHeight,
            clientWidth: O().clientWidth,
            clientHeight: O().clientHeight
        })
    });
    createResizeObserver(O, () => {
        L({
            scrollWidth: O().scrollWidth,
            scrollHeight: O().scrollHeight,
            clientWidth: O().clientWidth,
            clientHeight: O().clientHeight
        })
    }), createEffect(() => {
        O() && (I(O()), onCleanup(() => {
            N()
        }))
    });
    let R;
    return createEventListener(O, "scroll", _ => {
        R !== null && clearTimeout(R), R = setTimeout(() => {
            L("isScrolling", !1)
        }, 60), L("isScrolling", !0), L("scrollLeft", _.target.scrollLeft), L("scrollTop", _.target.scrollTop)
    }), createEventListener(O, "scrollend", () => {
        L("isScrolling", !1)
    }), M
}
const Scrollbar = ScrollbarBase;
Scrollbar.createScrollProps = createScrollProps;
var _tmpl$$k = template('<div><div class="text-xl flex items-center mb-2 h-8 leading-8"><span class="text-primary_brand font-bold">'),
    _tmpl$2$b = template('<div class="center absolute -top-1 right-0 z-10">');

function GridScrollView(O) {
    const M = O.loop || 0,
        [L, I] = createSignal(M),
        N = () => O.loop ? () => I(0) : void 0,
        R = () => O.loop ? () => I(M) : void 0;
    return (() => {
        var _ = _tmpl$$k(),
            H = _.firstChild,
            G = H.firstChild;
        return _.addEventListener("pointerleave", R), addEventListener$1(_, "pointerenter", N()), insert(H, (() => {
            var z = memo$2(() => !!O.icon);
            return () => z() && createComponent(Icon, {
                class: "!w-5 !h-5 mr-1 text-secondary",
                get name() {
                    return O.icon
                }
            })
        })(), G), insert(G, () => O.title), insert(_, createComponent(Suspense, {
            get fallback() {
                return createComponent(Loading, {})
            },
            get children() {
                return createComponent(GridScrollList, mergeProps(O, {
                    loop: L,
                    get navChildren() {
                        return O.navChildren
                    },
                    get viewAllClassName() {
                        return O.viewAllClassName
                    }
                }))
            }
        }), null), createRenderEffect(() => className(_, cx("relative mt-4", O.class))), _
    })()
}

function GridScrollList(O) {
    createSignal(0);
    const M = createSignal(!0),
        L = createSignal(!1),
        I = "center w-9 h-9 bg-primary",
        [N] = createResource(() => O.getData(), async R => R instanceof Promise ? await R : R);
    return (() => {
        var R = _tmpl$2$b();
        return insert(R, () => O.navChildren, null), insert(R, createComponent(Button, {
            get disabled() {
                return !L[0]()
            },
            onClick: () => {},
            class: `${I} mr-0.5`,
            get children() {
                return createComponent(Icon, {
                    class: "rotate-180",
                    name: "Arrow"
                })
            }
        }), null), insert(R, createComponent(Button, {
            get disabled() {
                return !M[0]()
            },
            onClick: () => {},
            class: I,
            get children() {
                return createComponent(Icon, {
                    name: "Arrow"
                })
            }
        }), null), R
    })()
}
var _tmpl$$j = template("<img>");
const VERSION$1 = "_v=4",
    defaultArgs$1 = `${VERSION$1}&auto=format&dpr=${globalThis.devicePixelRatio}`,
    loaded$1 = new Set;

function ImageX(O) {
    const [M, L] = splitProps(O, ["args", "prefetch", "class", "src", "onLoad", "ref"]), I = createMemo(() => `${M.src}?${defaultArgs$1}${M.args?`&${M.args}`:""}`), N = createMemo(() => `${M.src}?${VERSION$1}&w=100&auto=format&cs=tinysrgb&blur=100`), [R, _] = createSignal(loaded$1.has(M.src)), H = createMemo(() => M.prefetch !== !1 && !R());
    return [createComponent(Show, {
        get when() {
            return H()
        },
        get children() {
            var G = _tmpl$$j();
            return createRenderEffect(z => {
                var W = N(),
                    K = M.class;
                return W !== z.e && setAttribute(G, "src", z.e = W), K !== z.t && className(G, z.t = K), z
            }, {
                e: void 0,
                t: void 0
            }), G
        }
    }), (() => {
        var G = _tmpl$$j();
        G.addEventListener("load", W => {
            loaded$1.add(M.src), _(!0), M.onLoad && M.onLoad(W)
        });
        var z = mergeRefs(W => W, M.ref);
        return typeof z == "function" && use(z, G), spread(G, mergeProps({
            get src() {
                return I()
            },
            get class() {
                return cx(M.class, H() ? "opacity-0 size-0" : "")
            }
        }, L), !1, !1), G
    })()]
}
var _tmpl$$i = template("<button>"),
    _tmpl$2$a = template('<svg viewBox="0 0 24 24"><path d="M18.7175 9.13192L11.376 16.6893C10.8875 17.1922 10.0955 17.1922 9.60694 16.6893L5.28248 12.2377C5.86696 11.5211 6.86535 10.5974 7.39746 10.1453L10.4915 13.2611C10.4915 13.2611 15.2885 8.16223 16.444 6.97272C17.0454 7.51667 18.1091 8.41399 18.7175 9.13192Z">'),
    _tmpl$3$7 = template("<button type=button><div class=checkbox-ico>");

function Radio(O) {
    const M = mergeProps({
            children: I => String(I())
        }, O),
        L = createSelector(() => O.value);
    return createComponent(For, {
        get each() {
            return O.options
        },
        children: I => (() => {
            var N = _tmpl$$i();
            return N.$$click = () => {
                var R;
                return (R = O.onChange) == null ? void 0 : R.call(O, I)
            }, insert(N, () => M.children(() => I, L)), createRenderEffect(R => {
                var _ = cx("radio btn-like", O.class),
                    H = O.disabled,
                    G = L(I) || void 0;
                return _ !== R.e && className(N, R.e = _), H !== R.t && (N.disabled = R.t = H), G !== R.a && setAttribute(N, "aria-selected", R.a = G), R
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), N
        })()
    })
}

function Checkbox(O) {
    return (() => {
        var M = _tmpl$3$7(),
            L = M.firstChild;
        return M.$$click = () => {
            var I;
            return (I = O.onChange) == null ? void 0 : I.call(O, !O.value)
        }, insert(L, createComponent(Show, {
            get when() {
                return O.value
            },
            get children() {
                return _tmpl$2$a()
            }
        })), insert(M, () => O.children, null), createRenderEffect(I => {
            var N = cx("checkbox btn-like", O.class),
                R = O.value || void 0;
            return N !== I.e && className(M, I.e = N), R !== I.t && setAttribute(L, "aria-selected", I.t = R), I
        }, {
            e: void 0,
            t: void 0
        }), M
    })()
}
delegateEvents(["click"]);
var _tmpl$$h = template('<div class="flex flex-col">'),
    _tmpl$2$9 = template("<div>");

function MultiSelect(O) {
    const [M, L] = splitProps(O, ["class", "title", "disabled", "value", "onChange", "options", "labelRender", "labelFormat", "children", "layerRender", "onClick"]), I = mergeProps({
        children(J, Z) {
            return String(J())
        },
        labelFormat: O.children || (J => String(J()))
    }, M), [N, R] = createSignal(!1), [_, H] = createSignal([]), G = O.throttle || 0;
    let z;
    !env.mobile && G > 0 ? (createScheduled(J => leading(throttle, J, 1e3)), z = (J = []) => {
        const Z = _();
        return _() ? Z : J
    }) : z = (J = []) => N() ? J : _();
    const W = createMemo(z);
    createComputed(() => O.onChange(W())), createComputed(() => H(O.value));
    const K = J => _().indexOf(J) !== -1,
        X = createRootPool(J => {
            const Z = createMemo(() => K(J()));
            return createComponent(Checkbox, {
                get class() {
                    return cx("p-3 rounded-xl mb-1", Z() && "bg-layer4")
                },
                get value() {
                    return Z()
                },
                onChange: Q => H(ee => {
                    const te = J();
                    return Q ? [...ee, te] : ee.filter(se => se !== te)
                }),
                get children() {
                    return I.children(J, K)
                }
            })
        });

    function Y() {
        return (() => {
            var J = _tmpl$$h();
            return insert(J, createComponent(For, {
                get each() {
                    return O.options
                },
                children: Z => X(Z)
            })), J
        })()
    }
    return createComponent(DropDown, {
        get title() {
            return O.title || "Select"
        },
        class: "select-options",
        get visible() {
            return N()
        },
        setVisible: R,
        get layer() {
            return createComponent(Show, {
                get when() {
                    return O.layerRender
                },
                get fallback() {
                    return Y()
                },
                get children() {
                    return O.layerRender(Y())
                }
            })
        },
        get children() {
            return createComponent(Button, mergeProps(L, {
                get disabled() {
                    return O.disabled
                },
                get class() {
                    return cx("select bg-input_bright", O.class)
                },
                get children() {
                    return createComponent(Show, {
                        get when() {
                            return !O.labelRender
                        },
                        get fallback() {
                            return O.labelRender(() => O.value)
                        },
                        get children() {
                            return [memo$2(() => {
                                var J;
                                return ((J = O.labelFormat) == null ? void 0 : J.call(O, () => O.value)) || String(O.value)
                            }), (() => {
                                var J = _tmpl$2$9();
                                return insert(J, createComponent(Icon, {
                                    class: "w-3 h-3 transition-all -rotate-90",
                                    name: "Arrow"
                                })), createRenderEffect(() => className(J, cx("p-1 w-6 h-6 ml-auto bg-input_button center rounded-md"))), J
                            })()]
                        }
                    })
                }
            }))
        }
    })
}
var _tmpl$$g = template("<div>");
const info = {
        bg: "bg-success/10",
        fg: "text-success",
        icon: "Attention"
    },
    warning = {
        bg: "bg-warning/10",
        fg: "text-warning",
        icon: "Caution"
    },
    error = {
        bg: "bg-error/10",
        fg: "text-error",
        icon: "Error"
    },
    types = {
        info,
        warning,
        error
    };

function Notice(O) {
    const [, M] = splitProps(O, ["class", "type", "children"]), L = I => I && types[I];
    return (() => {
        var I = _tmpl$$g();
        return spread(I, mergeProps(M, {
            get class() {
                var N;
                return cx("p-2 flex text-secondary rounded-xl", ((N = L(O.type)) == null ? void 0 : N.bg) || "bg-success/10", O.class)
            }
        }), !1, !0), insert(I, createComponent(Show, {
            get when() {
                return L(O.type)
            },
            children: N => createComponent(Icon, {
                get class() {
                    return cx("flex-none -mt-0.5 w-6 h-6 mr-1.5", N().fg)
                },
                get name() {
                    return N().icon
                }
            })
        }), null), insert(I, () => O.children, null), I
    })()
}
const MetaCtx = createContext(createStore({
    title: "",
    isDialog: !1
}));

function MetaProvider(O) {
    const M = createStore({
        title: "",
        isDialog: !1,
        class: "",
        ...O.ctx
    });
    return createComponent(MetaCtx.Provider, {
        value: M,
        get children() {
            return O.children
        }
    })
}

function useMeta() {
    return useContext(MetaCtx)[0]
}

function Meta(O) {
    const M = useContext(MetaCtx)[1],
        [L, I] = splitProps(O, ["children", "title"]),
        N = children(() => L.title);
    return M(mergeProps(I, {
        title: N
    })), L.children
}
var _tmpl$$f = template('<div><div class=pagination><input size=2 class=pagination-current><span class=text-tertiary></span><div class="p-2 min-w-8 h-8 justify-center-center flex items-center"><span>');

function Pagination(O) {
    const [M, L] = useTransition(), [I, N] = splitProps(O, ["current", "onChange", "total", "pageSize"]), R = mergeProps({
        current: 1,
        total: 0,
        pageSize: 20
    }, I), _ = () => Math.ceil(R.total / R.pageSize);

    function H(Y) {
        if (!untrack(M)) return L(() => R.onChange(Y))
    }
    const G = [Y => Y || untrack(() => R.current), Y => String(Y).replace(/[^0-9]/g, ""), Y => {
            const J = parseInt(String(Y));
            return Math.min(Math.max(J, 0), untrack(_))
        }, Y => X(Number(Y))],
        z = Y => {
            const J = Y.target.value,
                Z = G.reduce((Q, ee) => ee(Q), J);
            Y.target.value = Z, Y.target.size = Math.max(2, Y.target.value.length), Number(Z) > 0 && H(Number(Z))
        },
        W = Y => {
            const J = Y.target;
            J.value = J.value.replace(/[^0-9]/g, ""), J.size = Math.max(2, J.value.length)
        },
        K = createSelector(() => R.current),
        X = Y => Y.toString().padStart(2, "0");
    return createComponent(Toggle, {
        get when() {
            return _() > 1
        },
        get children() {
            var Y = _tmpl$$f(),
                J = Y.firstChild,
                Z = J.firstChild,
                Q = Z.nextSibling,
                ee = Q.nextSibling,
                te = ee.firstChild;
            return spread(Y, mergeProps(N, {
                get class() {
                    return cx("flex items-center gap-x-[0.15rem] ", O.class, O.colorTheme === "darken" && "pagination-darken")
                }
            }), !1, !0), insert(Y, createComponent(Button, {
                class: "pagination-button pagination-prev",
                get disabled() {
                    return R.current === 1
                },
                onClick: () => H(I.current - 1),
                get children() {
                    return createComponent(Icon, {
                        class: "size-4 text-secondary",
                        name: "Arrow"
                    })
                }
            }), J), Z.addEventListener("change", z), Z.$$input = W, insert(Q, () => defaultT("of")), insert(te, () => X(_())), insert(Y, createComponent(Button, {
                get disabled() {
                    return K(_())
                },
                class: "pagination-button pagination-next",
                onClick: () => H(I.current + 1),
                get children() {
                    return createComponent(Icon, {
                        class: "size-4 rotate-180 text-secondary",
                        name: "Arrow"
                    })
                }
            }), null), createRenderEffect(() => Z.value = X(R.current)), Y
        }
    })
}
delegateEvents(["input"]);

function resolveRemote(O, M = 0) {
    const L = memo$1(I => isFirstUpper.test(I) ? lazy(async () => {
        try {
            return (await awaitModule(O))[I]()
        } catch {
            throw new Error("Network Error!")
        }
    }) : async () => (await (await awaitModule(O))[I]()).default);
    return L.fn = memo$1(I => async (...N) => (await L(I))(...N)), L
}
const isFirstUpper = /^[A-Z]/;
async function awaitModule(O) {
    const M = (await O()).default;
    return M.init && await M.init(), M
}

function createRemote(O) {
    return O
}
let sheetPms;
const mds = Array(5).fill(void 0),
    selectorCache = new Map,
    sheetSelector = new Set;
let inserIndex = 0;
async function getSheet() {
    if (!sheetPms) {
        sheetPms = new Promise(M => {
            const L = document.getElementById("css-main");
            L.sheet ? M(L.sheet) : L.onload = () => {
                M(L.sheet)
            }
        });
        const O = await sheetPms;
        selectorCache.set(O, sheetSelector);
        for (let M = 0; M < O.cssRules.length; M++) {
            const L = O.cssRules[M];
            if (L instanceof CSSMediaRule) {
                const I = L.conditionText;
                mds.every(N => !!N) || (I.indexOf("1536") !== -1 ? mds[4] = L : I.indexOf("1280") !== -1 ? mds[3] = L : I.indexOf("1024") !== -1 ? mds[2] = L : I.indexOf("768") !== -1 ? mds[1] = L : I.indexOf("640") !== -1 && (mds[0] = L, inserIndex = M - O.cssRules.length), selectorCache.set(L, new Set))
            } else L instanceof CSSStyleRule && sheetSelector.add(L.selectorText)
        }
    }
    return sheetPms
}

function inserRule(O, M, L) {
    if (M instanceof CSSStyleRule) {
        const I = selectorCache.get(O);
        (!I.has(M.selectorText) || M.selectorText.startsWith("html")) && (O.insertRule(M.cssText, L), I.add(M.selectorText))
    } else O.insertRule(M.cssText, L)
}
async function createCss(O) {
    const M = await getSheet(),
        L = document.createElement("style");
    L.textContent = O, document.head.appendChild(L);
    for (const I of [...L.sheet.cssRules])
        if (I instanceof CSSMediaRule) {
            const N = mds.find(R => R ? .conditionText === I.conditionText);
            if (N)
                for (const R of [...I.cssRules]) inserRule(N, R);
            else inserRule(M, I, M.cssRules.length + inserIndex)
        } else inserRule(M, I, M.cssRules.length + inserIndex);
    document.head.removeChild(L)
}
var _tmpl$$e = template('<button class="radio btn-like select-item">'),
    _tmpl$2$8 = template("<div>"),
    _tmpl$3$6 = template('<div class="w-full sticky -top-2 z-30 -mt-2 bg-layer0 py-3">'),
    _tmpl$4$4 = template('<div class="center h-48">');

function SelectBase(O) {
    const [M, L] = splitProps(O, ["class", "disabled", "value", "onChange", "title", "options", "labelRender", "labelFormat", "optionRender", "children", "layerRender", "onClick", "search"]), I = mergeProps({
        optionRender: (H, G) => (() => {
            var z = _tmpl$$e();
            return insert(z, () => I.children(H, G)), createRenderEffect(() => setAttribute(z, "aria-selected", G(H()) || void 0)), z
        })(),
        children(H, G) {
            return String(H())
        }
    }, M);
    createComputed(H => (H && H.length > 0 && H.findIndex(G => G === untrack(() => O.value)) === -1 && O.onChange(O.options[0]), O.options));
    const [N, R] = createSignal(!1, {
        equals(H, G) {
            return G && !!O.disabled
        }
    });

    function _() {
        const H = createComponent(SelectOptions, {
            get options() {
                return O.options
            },
            get value() {
                return O.value
            },
            get children() {
                return I.children
            },
            get optionRender() {
                return I.optionRender
            },
            get onChange() {
                return O.onChange
            },
            get search() {
                return O.search
            }
        });
        return createComponent(Show, {
            get when() {
                return O.layerRender
            },
            fallback: H,
            get children() {
                return O.layerRender(H)
            }
        })
    }
    return createComputed(H => (H !== O.value && R(!1), O.value)), createComponent(DropDown, {
        get title() {
            return O.title || "Select"
        },
        get class() {
            return cx("select-options", O.search && env.mobile && "h-[90%]")
        },
        get visible() {
            return N()
        },
        setVisible: R,
        get layer() {
            return _()
        },
        get children() {
            return createComponent(Button, mergeProps(L, {
                get class() {
                    return cx("select bg-input_bright", O.class)
                },
                get disabled() {
                    return O.disabled
                },
                get children() {
                    return createComponent(Show, {
                        get when() {
                            return !O.labelRender
                        },
                        get fallback() {
                            return O.labelRender(() => O.value)
                        },
                        get children() {
                            return [memo$2(() => {
                                var H;
                                return ((H = O.labelFormat || O.children) == null ? void 0 : H(() => O.value)) || String(O.value)
                            }), (() => {
                                var H = _tmpl$2$8();
                                return insert(H, createComponent(Icon, {
                                    class: "w-3 h-3 transition-all -rotate-90",
                                    name: "Arrow"
                                })), createRenderEffect(() => className(H, cx("p-1 w-6 h-6 ml-auto bg-input_button center rounded-md "))), H
                            })()]
                        }
                    })
                }
            }))
        }
    })
}

function SelectOptions(O) {
    const [M, L] = createSignal(O.value), I = createSelector(() => O.value), N = useKeyDownEvent(), R = useIsActive(), _ = () => R() && N() || null, H = mergeProps({
        children: Z => String(Z())
    }, O);
    createEffect(() => {
        const Z = _();
        untrack(() => {
            Z && (Z.key === "ArrowDown" ? (L(z(1)), Z.preventDefault()) : Z.key === "ArrowUp" ? (L(z(-1)), Z.preventDefault()) : Z.key === "Enter" && (O.onChange(M()), Z.preventDefault()))
        })
    }), createComputed(() => L(O.value));
    const G = useScrollElement();
    createEffect(() => {
        const Z = G(),
            Q = O.options.indexOf(O.value);
        if (Z instanceof Element && R() && Z && Z.scrollHeight > Z.clientHeight) {
            const ee = Z.scrollHeight / O.options.length,
                te = Math.max(0, ee * (Q + .5) - Z.clientHeight / 2);
            requestAnimationFrame(() => {
                Z.scrollTop = te
            })
        }
    });

    function z(Z) {
        const Q = O.options.indexOf(O.value),
            ee = O.options.length;
        return O.options[(Q + Z + ee) % ee]
    }
    const {
        optionRender: W = (Z, Q) => (() => {
            var ee = _tmpl$2$8();
            return insert(ee, () => H.children(Z, Q)), ee
        })()
    } = O, [K, X] = createSignal("");
    createComputed(() => {
        R() && X("")
    });
    const Y = resolveElements(children(() => createComponent(For, {
            get each() {
                return O.options
            },
            children: Z => createComponent(Ref, {
                ref: Q => {
                    createEventListener(Q, "click", () => O.onChange(Z))
                },
                get children() {
                    return W(() => Z, I)
                }
            })
        }))),
        J = createMemo(() => {
            const Z = Y.toArray(),
                Q = O.search,
                ee = K();
            if (Q) {
                const te = untrack(() => O.options);
                return Z.filter((se, ne) => Q(te[ne], ee))
            } else return Z
        });
    return (() => {
        var Z = _tmpl$2$8(),
            Q = O.ref;
        return typeof Q == "function" ? use(Q, Z) : O.ref = Z, insert(Z, createComponent(Show, {
            get when() {
                return O.search
            },
            get children() {
                var ee = _tmpl$3$6();
                return insert(ee, createComponent(Input, {
                    get value() {
                        return K()
                    },
                    onChange: X,
                    get children() {
                        return createComponent(Icon, {
                            class: "w-6 h-6 order-first text-tertiary",
                            name: "Search"
                        })
                    }
                })), ee
            }
        }), null), insert(Z, createComponent(Show, {
            get when() {
                return J().length > 0
            },
            get fallback() {
                return (() => {
                    var ee = _tmpl$4$4();
                    return insert(ee, () => defaultT("Oops! There is no data yet!")), ee
                })()
            },
            get children() {
                return J()
            }
        }), null), createRenderEffect(() => className(Z, O.class)), Z
    })()
}
const Select = SelectBase;
Select.Option = Option;
Select.SelectOptions = SelectOptions;
var _tmpl$$d = template("<div class=toast-layer>"),
    _tmpl$2$7 = template("<button>"),
    _tmpl$3$5 = template('<div class="ml-auto relative size-6"><div>'),
    _tmpl$4$3 = template('<div class="overflow-hidden flex"><div class=toast>'),
    _tmpl$5$2 = template('<div class="pl-2 pr-4 flex">'),
    _tmpl$6 = template('<svg class="circle-countdown w-6 h-6 flex-none -mt-0.5"viewBox="0 0 32 32"><circle cx=16 cy=16 r=8>');
const [list, setList] = createSignal([]);

function push(O) {
    setList(M => {
        const L = M.filter(I => I.type !== O.type);
        return [O, ...L]
    })
}

function pop(O) {
    setList(M => {
        const L = [...M],
            I = O || L[L.length - 1];
        return L.filter(N => N !== I)
    })
}

function ToastProvider() {
    const O = children(() => createComponent(For, {
            get each() {
                return list()
            },
            children: L => createComponent(ToastItem, {
                toastData: L
            })
        })),
        M = createListTransition(O, {
            exitMethod: "keep-index",
            onChange({
                added: L,
                removed: I,
                finishRemoved: N
            }) {
                requestAnimationFrame(() => {
                    L.forEach(R => {
                        const _ = R.clientHeight;
                        R.style.height = "0px", R.style.transition = "height .5s var(--ease-out)", requestAnimationFrame(() => {
                            R.style.height = `${_}px`
                        })
                    })
                }), I.forEach(R => {
                    R.style.height = "0px", setTimeout(() => {
                        N([R])
                    }, 550)
                })
            }
        });
    return createComponent(Portal, {
        get mount() {
            return document.getElementById("root-layer")
        },
        get children() {
            return createComponent(Toggle, {
                get when() {
                    return M().length > 0
                },
                get children() {
                    var L = _tmpl$$d();
                    return insert(L, M), L
                }
            })
        }
    })
}

function ToastItem(O) {
    const M = createMemo(() => O.toastData.duration > 0),
        [L, I] = createSignal(!1),
        N = () => {
            !env.mobile && M() && (app.emit("toast-pause"), I(_ => !_))
        },
        R = (_ = !1) => (() => {
            var H = _tmpl$2$7();
            return H.$$click = G => {
                G.stopPropagation(), pop(O.toastData)
            }, className(H, _ ? "size-6 flex center absolute top-0 left-0" : "size-5 flex center absolute right-1.5 cursor-pointer"), insert(H, createComponent(Icon, {
                name: "Close",
                class: "size-4 text-secondary"
            })), H
        })();
    return (() => {
        var _ = _tmpl$4$3(),
            H = _.firstChild;
        return H.addEventListener("mouseleave", N), H.addEventListener("mouseenter", N), H.$$click = () => {
            var G, z;
            (z = (G = O.toastData).onClick) == null || z.call(G), env.mobile && M() && (app.emit("toast-pause"), I(W => !W))
        }, insert(H, createComponent(Show, {
            get when() {
                return M()
            },
            get fallback() {
                return (() => {
                    var G = _tmpl$5$2();
                    return insert(G, () => resolveElement(O.toastData.message)), G
                })()
            },
            get children() {
                return resolveElement(O.toastData.message)
            }
        }), null), insert(H, createComponent(Show, {
            get when() {
                return M()
            },
            get fallback() {
                return R()
            },
            get children() {
                var G = _tmpl$3$5(),
                    z = G.firstChild;
                return insert(z, createComponent(CountDown, {
                    get duration() {
                        return O.toastData.duration
                    },
                    onEnd: () => pop(O.toastData)
                })), insert(G, createComponent(Show, {
                    get when() {
                        return L()
                    },
                    get children() {
                        return R(!0)
                    }
                }), null), createRenderEffect(() => className(z, L() ? "opacity-0 select-none ml-auto size-6" : "ml-auto size-6")), G
            }
        }), null), _
    })()
}

function CountDown(O) {
    let M;
    return createEffect(() => {
        queueMicrotask(() => {
            let L = !0;
            const I = animate(M, {
                strokeDashoffset: 0
            }, {
                duration: O.duration,
                easing: "linear",
                persist: !0
            });
            app.on("toast-pause", () => {
                L ? I.pause() : I.play(), L = !L
            }), I.finished.then(O.onEnd)
        })
    }), (() => {
        var L = _tmpl$6(),
            I = M;
        return typeof I == "function" ? use(I, L) : M = L, L
    })()
}
const ignoredErrorCodes = [6008, 6101, 6102, 6103, 6104, 6105, 6106, 6107, 6108, 6109, 6110, 6111, 6114, 6115, 6116, 6012],
    toast = (O, M = {}) => {
        if (O instanceof Error) return ignoredErrorCodes.indexOf(O.code) >= 0 ? "" : toast.error(O.message, M); {
            const {
                duration: L = 7,
                onClick: I = () => {},
                system: N = !1,
                type: R = "error"
            } = M;
            return push({
                duration: L,
                onClick: I,
                system: N,
                message: O,
                type: R
            })
        }
    },
    iconClass = O => `w-6 h-6 mr-2 -mt-0.5 flex-none ${O}`;
toast.error = (O, M) => toast(() => [createComponent(Icon, {
    get class() {
        return iconClass("text-error")
    },
    name: "Error"
}), memo$2(() => resolveElement(O))], { ...M,
    type: "error"
});
toast.success = (O, M) => toast(() => [createComponent(Icon, {
    get class() {
        return iconClass("text-success")
    },
    name: "Success"
}), memo$2(() => resolveElement(O))], { ...M,
    type: "success"
});
toast.warning = (O, M) => toast(() => [createComponent(Icon, {
    get class() {
        return iconClass("text-warning")
    },
    name: "Caution"
}), memo$2(() => resolveElement(O))], { ...M,
    type: "warning"
});

function resolveElement(O) {
    return typeof O == "function" ? O() : O
}
delegateEvents(["click"]);
const SESSION_LENGTH = "init_length";

function getInitDepth() {
    const O = sessionStorage.getItem(SESSION_LENGTH);
    return !O || window.opener ? (sessionStorage.setItem(SESSION_LENGTH, String(history.length)), history.length) : Number(O)
}
const depth = {
        init: getInitDepth()
    },
    langMatch = /^\/([\w-]+)(.*)$/,
    routerUtils = {
        langSet: new Set([]),
        getLangPrefix: O => O === "en" ? "/" : `/${O}`,
        syncLang: (O, M = navigator.language) => {
            untrack(() => {
                routerUtils.langSet = new Set(O);
                const L = location.href.slice(location.origin.length);
                if (setting.firstVisit) {
                    const {
                        lang: I
                    } = routerUtils.extractLocale(L);
                    if (I === "en") {
                        if (M) {
                            const N = Object.entries(env.langs);
                            let R = N.find(_ => _[1][1] === M);
                            R || (M = M.split("-")[0], R = N.find(_ => _[1][1].includes(M))), R && setSetting("lang", R[0])
                        }
                    } else setSetting("lang", I)
                }
                history.replaceState(history.state, "", routerUtils.replaceLangPrefix(L, setting.lang))
            })
        },
        replaceLangPrefix(O, M) {
            const L = routerUtils.extractLocale(O);
            return (M === "en" ? "" : `/${M}`) + L.urlOriginal
        },
        extractLocale: O => {
            let M = "en";
            const L = O.match(langMatch);
            return L && routerUtils.langSet.has(L[1]) && (M = L[1], O = L[2] || "/", O.startsWith("/") || (O = `/${O}`)), {
                lang: M,
                urlOriginal: O
            }
        }
    };

function getPathname(O) {
    return routerUtils.extractLocale(O).urlOriginal
}

function setLang(O, M) {
    routerUtils.langSet.has(O) && (setSetting("lang", O), window.location.replace(routerUtils.replaceLangPrefix(M ? "/" : location.pathname + location.search, O)))
}
const StackProvider = createContext(void 0);

function useRouterStack() {
    return useContext(StackProvider)
}
const triggerOptions = {
        equals: !1
    },
    triggerCacheOptions = triggerOptions;

function createTrigger() {
    return createSignal(void 0, triggerOptions)
}
var qe;
class TriggerCache {
    constructor(M = Map) {
        ke(this, qe), $e(this, qe, new M)
    }
    dirty(M) {
        var L;
        (L = me(this, qe).get(M)) == null || L.$$()
    }
    dirtyAll() {
        for (const M of me(this, qe).values()) M.$$()
    }
    track(M) {
        if (!getListener()) return;
        let L = me(this, qe).get(M);
        if (L) L.n++;
        else {
            const [I, N] = createSignal(void 0, triggerCacheOptions);
            me(this, qe).set(M, L = {
                $: I,
                $$: N,
                n: 1
            })
        }
        onCleanup(() => {
            --L.n === 0 && queueMicrotask(() => L.n === 0 && me(this, qe).delete(M))
        }), L.$()
    }
}
qe = new WeakMap;
const [shouldSchedule, scheduleNextPreload] = createTrigger(), pendingQueue = [], requestPreload = O => {
    pendingQueue.push(O), scheduleNextPreload()
}, getPriority = O => (O = Array.isArray(O) ? O : [O], Math.max(...O.map(M => M.startsWith("/game") ? 10 : 1))), preloadQueue = new PQueue({
    concurrency: 1,
    interval: 300,
    autoStart: !1
});
preloadQueue.pause();
window.addEventListener("load", () => {
    preloadQueue.start()
});
const PRELOAD_PERIOD = 500,
    createMatcher = memo$1((O, M = !0) => (O = Array.isArray(O) ? O : [O], L => {
        const I = L.split("/").filter(Boolean);
        return O.some(N => {
            const [R, _] = N.split("/*", 2), H = R.split("/").filter(Boolean), G = H.length, z = I.length - G;
            if (z < 0 || z > 0 && _ === void 0 && !M) return null;
            for (let W = 0; W < G; W++) {
                const K = H[W],
                    X = K[0] === ":",
                    Y = X ? I[W] : I[W].toLowerCase(),
                    J = X ? K.slice(1) : K.toLowerCase();
                if (!X && Y !== J) return !1
            }
            return !0
        })
    })),
    PreloadScheduler = O => {
        const M = (R, _ = "", H = []) => (R = Array.isArray(R) ? R : [R], !R || R.length === 0 || R.forEach(G => {
                var z, W;
                let K = _ + G.path;
                (z = G.component) != null && z.preload && H.push({
                    path: K,
                    preload: (W = G.component) == null ? void 0 : W.preload
                }), G.children && M(G.children, K, H)
            }), H),
            L = M(O.routes),
            I = (R, _) => {
                const H = [];
                return untrack(() => {
                    let G = 0,
                        z;
                    for (; G < _.length;) z = _[G], createMatcher(z.path)(R) ? (H.push(z), [_[G]] = [_[_.length - 1]], _.length--) : G++
                }), H
            };
        let N;
        return createEffect(on$1(shouldSchedule, () => {
            N || (N = setTimeout(() => {
                N = null;
                const R = pendingQueue.slice(0);
                pendingQueue.length = 0;
                const _ = [];
                for (let H = 0; H < R.length; H++) {
                    const G = R[H],
                        z = I(G, L);
                    z.length && _.push(...z)
                }
                _.forEach(H => {
                    const G = getPriority(H.path);
                    preloadQueue.add(() => {
                        H.preload()
                    }, {
                        priority: G
                    })
                })
            }, PRELOAD_PERIOD))
        })), O.children
    };
let globalAction;
const NavigatorContext = createContext(null);

function NavigatorProvider(O) {
    const M = useNavigate$1(),
        L = useLocation(),
        I = getOwner(),
        [N, R] = createSignal("/");
    createComputed(() => {
        const z = L.pathname;
        onCleanup(() => {
            R(z)
        })
    });
    const _ = useCurrentMatches();
    createComputed(() => {
        L.pathname.startsWith(O.base) || window.location.reload()
    });
    const H = createMemo(([, z]) => {
            var W;
            const K = _(),
                X = ((W = history.state) == null ? void 0 : W._depth) || 0;
            let Y;
            return globalAction !== void 0 ? Y = [globalAction, z + (globalAction === "PUSH" ? 1 : 0), K] : Y = [z > X ? "POP" : z === X ? "REPLACE" : "PUSH", X, K], globalAction = void 0, Y
        }, ["PUSH", 0, []]),
        G = (z, W) => {
            var K;
            if (isSwipeBack = !1, typeof z == "number") return z <= -99 && (z = Math.min((((K = history.state) == null ? void 0 : K._depth) || 0) - history.length, -1)), M(z, {
                scroll: !1
            }); {
                globalAction = W != null && W.replace ? "REPLACE" : "PUSH", W != null && W.state && (W.state = JSON.parse(JSON.stringify(W.state)));
                const {
                    urlOriginal: X
                } = routerUtils.extractLocale(z);
                return M(X, {
                    scroll: !1,
                    ...W
                })
            }
        };
    return createComponent(RouterOwner.Provider, {
        value: I,
        get children() {
            return createComponent(NavigatorContext.Provider, {
                value: {
                    navigate: G,
                    action: () => H()[0],
                    referrer: N
                },
                get children() {
                    return O.children
                }
            })
        }
    })
}
const RouterOwner = createContext(null);

function wrapRootRouterCtx(O) {
    return (...M) => runWithOwner(useContext(RouterOwner), () => O(...M))
}
const useBeforeLeave = wrapRootRouterCtx(useBeforeLeave$1),
    A = O => {
        const M = createMemo(() => O.href),
            L = () => {
                var G;
                return O.target && ((G = M()) == null ? void 0 : G.startsWith("http"))
            },
            I = useNavigate();

        function N(G) {
            var z;
            queueMicrotask(() => {
                I(M(), {
                    replace: O.replace
                })
            }), G.metaKey || G.ctrlKey || G.shiftKey || G.altKey || G.button !== 0 || (G.stopPropagation(), G.preventDefault()), (z = O.onClick) == null || z.call(O, G)
        }
        const [R, _] = createSignal(null), H = createDisposable(() => {
            let G;
            const z = W => setTimeout(() => {
                requestPreload(W), H()
            }, 500);
            createIntersectionObserver(() => R() ? [R()] : [], ([W]) => {
                W.isIntersecting ? G = z(M()) : clearTimeout(G)
            }, {
                threshold: [0, 1]
            }), onCleanup(() => clearTimeout(G))
        });
        return createComponent(A$2, mergeProps(O, {
            ref(G) {
                var z = mergeRefs(O.ref, _);
                typeof z == "function" && z(G)
            },
            get onClick() {
                return L() ? void 0 : N
            }
        }))
    },
    useNavigate = () => useContext(NavigatorContext).navigate,
    useReferrer = () => useContext(NavigatorContext).referrer;

function batchRouteDefinition(O, M) {
    var L;
    for (const I of O) I.info = { ...M,
        ...I.info,
        ...M.guards && {
            guards: (((L = I.info) == null ? void 0 : L.guards) || []).concat(...M.guards)
        }
    };
    return O
}
let isSwipeBack = !1;

function useIosBack(O) {
    const M = window.innerWidth * .15,
        [L, I] = createSignal(M);
    createEventListener(window, () => O() ? "touchstart" : "", _ => {
        I(_.touches[0].clientX)
    });
    const N = createMemo(() => O() && L() < M);
    createEventListener(window, "popstate", () => {
        isSwipeBack = !1
    }), createEventListener(window, () => N() ? "touchmove" : "", _ => {
        _.touches[0].screenX > L() && (isSwipeBack = !0)
    }), createEventListener(window, () => N() ? "touchend" : "", R);

    function R() {
        setTimeout(() => isSwipeBack = !1, 16)
    }
    return () => isSwipeBack ? (R(), !0) : !1
}

function createNoSuspense(O, M = O()) {
    const [L, I] = createSignal(M);
    return createEffect(() => {
        const N = O();
        N && I(N)
    }), L
}
var _tmpl$$c = template("<div>"),
    _tmpl$2$6 = template("<div><div>"),
    _tmpl$3$4 = template('<div class=dialog-title><div class="ml-auto absolute right-4 top-0 flex items-center h-full">');
const DEFAULT_ANE_PROPS = {
        duration: 300,
        easing: `cubic-bezier(${easeBack.join(",")})`
    },
    ROOT_ANE = [{
        backgroundColor: "#0000"
    }, {
        backgroundColor: "#000a"
    }],
    POP_ANE = [{
        transform: "scale(.92)",
        opacity: 0
    }, {
        transform: "scale(1)",
        opacity: 1
    }];

function isDialogRoute(O) {
    var M;
    return !!((M = O.info) != null && M.dialog)
}
const MAX_ROUTE_CACHE = 6;

function DialogStackRouter(O) {
    const M = useLocation(),
        L = useNavigate(),
        {
            action: I
        } = useContext(NavigatorContext),
        N = useRouteDefinitions(),
        R = getGuardByMatchs(N(), M),
        _ = N()[0];
    let H = isDialogRoute(_);
    const G = H || R,
        [z, W] = createStore({
            list: [{
                pathname: G ? "/" : M.pathname,
                search: G ? "" : M.search,
                state: G ? null : M.state,
                matchs: O.routes.filter(re => !isDialogRoute(re))
            }]
        });
    createComputed(() => {
        M.hash.startsWith("#/") && L(M.hash.slice(1), {
            replace: !0
        })
    });

    function K() {
        var re;
        if (depth.init === history.length) {
            const ae = ((re = history.state) == null ? void 0 : re._depth) || history.length - 1;
            history.replaceState({
                _depth: ae
            }, "", routerUtils.getLangPrefix(setting.lang)), history.pushState({
                _depth: ae + 1
            }, "", M.pathname + M.search)
        }
    }
    G && K();
    const X = new WeakSet,
        [Y, J] = createSignal(),
        Z = createMemo(re => {
            const ae = N(),
                he = firstRoute(ae),
                ge = untrack(() => {
                    if (M.hash.startsWith("#/")) return re;
                    const le = getGuardByMatchs(ae, M);
                    if (le) return L(le, {
                        replace: !0
                    }), re;
                    const ue = I(),
                        de = M.pathname;
                    let pe = [...z.list];
                    ue === "POP" && re && isDialogRoute(re.matchs[0]) && X.add(unwrap(re));

                    function fe(ve) {
                        return ue !== "PUSH" ? ve : untrack(() => ve.filter(be => {
                            const ye = unwrap(be);
                            return X.has(ye) ? (X.delete(ye), !1) : !0
                        }))
                    }
                    const ce = {
                        pathname: de,
                        search: M.search,
                        state: M.state && { ...M.state
                        }
                    };
                    if (isDialogRoute(ae[0])) {
                        const ve = pe.findIndex(ue === "REPLACE" ? be => firstRoute(be.matchs) === he : be => be.pathname === ce.pathname && be.search === ce.search);
                        if (ve === -1) {
                            const be = { ...ce,
                                matchs: ae
                            };
                            return pe = fe(pe).concat(be), pe.length > MAX_ROUTE_CACHE && pe.splice(1, 1), W("list", pe), be
                        } else {
                            const be = unwrap(z.list[ve]);
                            return X.has(be) && X.delete(be), W("list", ve, ce), z.list[ve]
                        }
                    } else return batch(() => {
                        W("list", fe(pe)), W("list", 0, ce)
                    }), z.list[0]
                });
            return ge && onCleanup(() => {
                var le;
                J(unwrap(ge)), ((le = he.info) == null ? void 0 : le.keepAlive) === !1 && W("list", ue => ue.filter(de => unwrap(de) !== ge))
            }), ge
        });

    function Q() {
        return H ? (H = !1, !0) : !1
    }

    function ee() {
        const [re, ae] = createSignal(untrack(() => !env.mobile));
        createMemo(() => N()[0]);
        const he = () => !isDialogRoute(N()[0]);
        return createComputed(() => ae(ge => ge || he())), createComponent(Show, {
            get when() {
                return re()
            },
            get children() {
                return createComponent(ActiveProvider, {
                    get value() {
                        return he()
                    },
                    get children() {
                        return createComponent(StaticRouter, {
                            get state() {
                                return z.list[0]
                            }
                        })
                    }
                })
            }
        })
    }

    function te() {
        const re = children(() => createComponent(For, {
            get each() {
                return z.list
            },
            children: (ae, he) => {
                if (he() === 0) return null;
                const ge = createMemo(() => {
                    const le = Z();
                    return le ? le.pathname === ae.pathname : !1
                });
                return createComponent(StackProvider.Provider, {
                    value: {
                        route: ae,
                        index: he
                    },
                    get children() {
                        return createComponent(ActiveProvider, {
                            get value() {
                                return ge()
                            },
                            get children() {
                                return createComponent(DialogRoot, {
                                    isInitDialog: Q,
                                    get preRoute() {
                                        return Y()
                                    },
                                    get children() {
                                        return createComponent(StaticRouter, {
                                            state: ae
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }));
        return createListTransition(re, {
            onChange({
                removed: ae,
                finishRemoved: he
            }) {
                ae.length > 0 && setTimeout(() => he(ae), 600)
            }
        })
    }
    const se = () => getDialogConfig(N()),
        ne = () => {
            var re;
            return (re = getRouteInfo(N())) == null ? void 0 : re.dialog
        },
        oe = createMemo(re => {
            const ae = se();
            return ne() && ae ? getDialogSize(ae) : re
        }, [void 0, void 0]);

    function ie() {
        let re, ae;
        const he = createMemo(() => isDialogRoute(N()[0]));
        return createEffect(ge => {
            const le = he(),
                ue = untrack(() => env.mobile),
                de = [...ue ? [ROOT_ANE[0], ROOT_ANE[0]] : ROOT_ANE],
                pe = [...POP_ANE],
                fe = ge === void 0 ? { ...DEFAULT_ANE_PROPS,
                    duration: 0
                } : DEFAULT_ANE_PROPS;
            if (re.classList.add("dialog-visible"), !re.animate) return le;
            const ce = re.animate(le ? de : de.reverse(), fe);
            if (ce.finished.then(() => {
                    re.classList.toggle("dialog-visible", le), ce.cancel()
                }), !ue) {
                const ve = ae.animate(ue || le ? pe : pe.reverse(), fe);
                ve.finished.then(() => ve.cancel())
            }
            return le
        }), createComponent(Portal, {
            ref: ge => {
                re = ge, ge.className = "dialog-root"
            },
            get children() {
                var ge = _tmpl$$c(),
                    le = ae;
                return typeof le == "function" ? use(le, ge) : ae = ge, insert(ge, te), createRenderEffect(ue => {
                    var de = cx("dialog-list", oe()[0]),
                        pe = oe()[1];
                    return de !== ue.e && className(ge, ue.e = de), ue.t = style(ge, pe, ue.t), ue
                }, {
                    e: void 0,
                    t: void 0
                }), ge
            }
        })
    }
    return [memo$2(ee), createComponent(ie, {})]
}

function getRouteInfo(O) {
    return O[O.length - 1].info
}

function getDialogConfig(O) {
    const M = {
        size: "s"
    };
    if (O.length === 0) return M;
    const L = getRouteInfo(O),
        I = L ? .dialog;
    return !I || I === !0 ? M : { ...I,
        size: I.size || M.size
    }
}

function getDialogSize(O) {
    const M = O.size,
        L = typeof M == "string" && M !== "s" ? `dialog-${M}` : void 0,
        I = typeof M == "string" ? void 0 : {
            width: `${M[0]}rem`,
            height: `${M[1]}rem`
        };
    return [L, I]
}

function useRouteDefinitions() {
    const O = useCurrentMatches();
    return createNoSuspense(createMemo(() => O().map(M => unwrap(M.route.key))))
}

function firstRoute(O) {
    return unwrap(O[0])
}

function getGuardByMatchs(O, M) {
    var L;
    for (const I of O) {
        const N = (L = I.info) == null ? void 0 : L.guards;
        if (N)
            for (const R of N) {
                const _ = untrack(() => R(M));
                if (_) return _
            }
    }
    return !1
}

function DialogRoot(O) {
    let M;
    const L = useIsActive(),
        {
            action: I
        } = useContext(NavigatorContext),
        N = useRouteDefinitions();
    let R = !1;
    createEffect(() => {
        const le = L();
        if (le && setActiveElement(M), O.isInitDialog()) {
            R = !0;
            return
        }
        untrack(() => {
            le ? _(M) : G(M)
        })
    }), onCleanup(() => {
        R && G(M)
    });

    function _(le) {
        R = !0;
        const ue = I();
        if (le.style.display = "", K()) return;
        const de = O.preRoute && isDialogRoute(O.preRoute.matchs[0]);
        ue === "POP" && de ? z(le, 2, 1) : (le.style.zIndex = "1006", !env.mobile && !de || z(le, 0, 1))
    }
    let H = 0;

    function G(le) {
        R = !1;
        const ue = I();
        clearTimeout(H);

        function de() {
            le.style.display = "none"
        }
        if (K()) return de();
        const pe = !isDialogRoute(N()[0]);

        function fe() {
            z(le, 1, 0, de)
        }

        function ce() {
            z(le, 1, 2, de)
        }
        ue === "POP" ? pe ? env.mobile ? fe() : H = window.setTimeout(de, DEFAULT_ANE_PROPS.duration) : (le.style.zIndex = "1006", fe()) : pe && env.mobile ? fe() : (le.style.zIndex = "", ce())
    }

    function z(le, ue, de, pe) {
        function fe() {
            pe ? .(), le.style.zIndex = ""
        }
        le.animate || fe();
        const ce = le.animate([{
            transform: `translateX(${ane$1[ue]})`
        }, {
            transform: `translateX(${ane$1[de]})`
        }], DEFAULT_ANE_PROPS);
        ce.finished.then(() => {
            fe(), ce.cancel()
        })
    }
    const W = useRouterStack(),
        K = useIosBack(L),
        X = getRouteInfo(W.route.matchs),
        Y = getDialogConfig(W.route.matchs),
        J = createMemo(() => getDialogSize(Y)),
        Z = useNavigate(),
        Q = () => Z(-1),
        ee = createMemo(() => !env.mobile && W.index() === 1);
    let te;
    const se = createSignal({}),
        ne = createMemo(() => se[0]()),
        oe = createMemo(() => splitProps(ne(), ["title", "children", "class", "titleActions"])),
        ie = Y.behavior === "no-title",
        re = Y.behavior === "transparent-title",
        [ae, he] = createSignal(100);

    function ge() {
        const le = useScrollTop(() => !!(re || ie));
        return re && createComputed(() => {
            he(100 * le() / window.innerHeight)
        }), createComponent(Show, {
            get when() {
                return ne().key || !0
            },
            keyed: !0,
            get children() {
                return createComponent(ErrorBoundary, {
                    fallback: ue => (console.error(ue), createComponent(Dialog, {
                        get title() {
                            return defaultT("Error")
                        },
                        get children() {
                            return createComponent(Empty, {
                                type: "offline"
                            })
                        }
                    })),
                    get children() {
                        return createComponent(Suspense, {
                            get fallback() {
                                return getFullLoading()
                            },
                            get children() {
                                return O.children
                            }
                        })
                    }
                })
            }
        })
    }
    return createComponent(DialogPropsCtx.Provider, {
        value: se,
        get children() {
            var le = _tmpl$2$6(),
                ue = le.firstChild,
                de = M;
            return typeof de == "function" ? use(de, le) : M = le, spread(ue, mergeProps(() => oe()[1], {
                get class() {
                    return cx("dialog-item", (re || ie || X ? .titleColor) && "dialog-transparent-title", ne().class)
                }
            }), !1, !0), insert(ue, !ie && (() => {
                var pe = _tmpl$3$4(),
                    fe = pe.firstChild,
                    ce = te;
                return typeof ce == "function" ? use(ce, pe) : te = pe, insert(pe, createComponent(Show, {
                    get when() {
                        return !ee()
                    },
                    get children() {
                        return createComponent(Button, {
                            onClick: Q,
                            class: "dialog-back",
                            get children() {
                                return createComponent(Icon, {
                                    class: "",
                                    name: "Arrow"
                                })
                            }
                        })
                    }
                }), fe), insert(pe, () => ne().title, fe), insert(fe, () => ne().titleActions, null), insert(fe, createComponent(Show, {
                    get when() {
                        return ee()
                    },
                    get children() {
                        return createComponent(Button, {
                            onClick: Q,
                            class: "dialog-close ml-2",
                            get children() {
                                return createComponent(Icon, {
                                    name: "Close"
                                })
                            }
                        })
                    }
                }), null), createRenderEffect(ve => (ve = X ? .titleColor) != null ? pe.style.setProperty("--bg", ve) : pe.style.removeProperty("--bg")), pe
            })(), null), insert(ue, () => ne().background, null), insert(ue, createComponent(ScrollView, {
                class: "dialog-content",
                get style() {
                    return {
                        "--bg": X ? .backgroundColor
                    }
                },
                get children() {
                    return ge()
                }
            }), null), createRenderEffect(pe => {
                var fe = cx("dialog-overlayer", J()[0]),
                    ce = { ...J()[1],
                        "--scroll": `${ae()}%`
                    };
                return fe !== pe.e && className(le, pe.e = fe), pe.t = style(le, ce, pe.t), pe
            }, {
                e: void 0,
                t: void 0
            }), le
        }
    })
}
const DialogPropsCtx = createContext();

function StaticRouter(O) {
    function M() {
        const {
            urlOriginal: G
        } = routerUtils.extractLocale(O.state.pathname + O.state.search);
        return {
            value: G,
            state: unwrap(O.state.state)
        }
    }
    const L = createRouter({
            get: M,
            set(G) {},
            create(G) {
                const z = G.navigatorFactory();
                createComputed(W => {
                    const K = M();
                    return W && z(K.value, {
                        state: K.state,
                        replace: !0
                    }), K
                })
            }
        }),
        [I, N] = useSearchParams(),
        R = useLocation(),
        _ = createMemo(() => routerUtils.extractLocale(R.pathname).urlOriginal);

    function H(G) {
        const [z, W] = useSearchParams(), K = useLocation(), X = createMemo(() => K.pathname === _());
        return createComputed(() => {
            if (X()) {
                let Y = function(Z, Q) {
                        const ee = { ...Z
                        };
                        if (!shallow(J, ee)) {
                            const te = { ...ee
                            };
                            for (const se in J) te[se] === void 0 && (te[se] = void 0);
                            J = ee, Q(te, {
                                replace: !0
                            })
                        }
                    },
                    J = untrack(() => ({ ...z
                    }));
                createComputed(() => Y(z, N)), createComputed(() => Y(I, W))
            }
        }), G.children
    }
    return createComponent(RouteDefineContext.Provider, {
        get value() {
            return O.state
        },
        get children() {
            return createComponent(L, {
                root: H,
                get children() {
                    return O.state.matchs
                }
            })
        }
    })
}
const RouteDefineContext = createContext(null),
    ane$1 = {
        0: "100%",
        1: "0%",
        2: "-17%"
    };

function Dialog(O) {
    if (useRouterStack()) {
        const M = useContext(DialogPropsCtx),
            [, L] = splitProps(O, ["children"]);
        M && createComputed(() => {
            M[1]({ ...L
            })
        })
    }
    return O.children
}
const hash = location.hash;
hash.startsWith("#/") && history.replaceState(history.state, "", hash.slice(1));

function App(O) {
    initEnv(), routerUtils.syncLang(O.langs || Object.keys(env.langs) || [], O.lang);
    const M = createMemo(() => untrack(() => {
        const _ = [],
            H = O.modules.map(W => W.routes()).flat(),
            G = H[0];
        let z;
        if (G && isLayoutRoute(G)) {
            const W = resolveRouteDefinition(G.children || []);
            G.children = W, z = K => {
                W.unshift(K)
            }
        } else z = W => {
            _.unshift(W)
        };
        return H.forEach(W => {
            var K;
            L(W), !((K = W.info) != null && K.dialog) && !isLayoutRoute(W) ? z(W) : _.push(W)
        }), _
    }));

    function L(_) {
        _.info && _.children instanceof Array && _.children.forEach(H => {
            H.info = { ..._.info,
                ...H.info
            }, L(H)
        })
    }
    createEffect(() => {
        setTimeout(() => {
            document.documentElement.classList.toggle("scroll-bar", getScrollbarWidth() > 0)
        }, 3e3)
    });

    function I() {
        const _ = getOwner();
        return O.modules.forEach(H => {
            H.events && Object.entries(H.events).forEach(([G, z]) => {
                app.on(G, async (...W) => {
                    const K = await z();
                    runWithOwner(_, () => {
                        K(...W)
                    })
                })
            }), H.init && runWithOwner(_, H.init)
        }), null
    }
    const N = _ => createComponent(GlobalComponentsCtx.Provider, {
            get value() {
                return O.globalComponents || {}
            },
            get children() {
                return createComponent(NavigatorProvider, {
                    base: R,
                    get children() {
                        return [memo$2(() => untrack(I)), createComponent(PreloadScheduler, {
                            get routes() {
                                return M()
                            }
                        }), createComponent(DialogStackRouter, {
                            get routes() {
                                return M()
                            }
                        }), createComponent(ToastProvider, {}), createComponent(PopProvider, {}), memo$2(() => O.children)]
                    }
                })
            }
        }),
        R = routerUtils.getLangPrefix(setting.lang);
    return createComponent(Router, {
        root: N,
        base: R,
        get children() {
            return M()
        },
        preload: !1
    })
}

function isLayoutRoute(O) {
    return !!(!O.path && O.component)
}

function resolveRouteDefinition(O) {
    return O instanceof Array ? O : [O]
}

function fixSolideRouterHashScrollBug() {
    const O = window.scrollTo;
    window.scrollTo = (M, L) => {
        L === 0 && M === 0 || O.call(window, M, L)
    }
}
fixSolideRouterHashScrollBug();
const GlobalComponentsCtx = createContext({});

function useGlobalComponent(O) {
    return useContext(GlobalComponentsCtx)[O] || (() => null)
}

function initEnv() {
    createEffect(() => {
        document.documentElement.classList.toggle("dark", setting.darken);
        const O = document.querySelector('meta[name="theme-color"]');
        O && O.setAttribute("content", setting.darken ? "#232626" : "#f4f4f4")
    }), createEffect(() => {
        document.documentElement.classList.toggle("lowend", env.isLowEndDevice)
    }), createEffect(() => {
        document.documentElement.classList.toggle("pc", !env.mobile)
    }), createEffect(() => document.documentElement.style.fontSize = env.remScale * 16 + "px"), createEffect(() => {
        getHttp().defaults.headers.common["Accept-Language"] = setting.lang
    })
}
var _tmpl$$b = template("<div>");

function Sticky(O) {
    let M;
    const L = children(() => O.children);
    return createEffect(I => {
        const N = L();
        return N !== I && setTimeout(() => {
            M && M.style.setProperty("--offsetTop", `${M.offsetTop}px`)
        }, 500), N
    }), createComponent(Ref, {
        ref(I) {
            var N = M;
            typeof N == "function" ? N(I) : M = I
        },
        get children() {
            var I = _tmpl$$b();
            return spread(I, mergeProps(O, {
                get class() {
                    return cx("sticky", O.class)
                },
                get children() {
                    return L()
                }
            }), !1, !1), I
        }
    })
}
var _tmpl$$a = template("<div>"),
    _tmpl$2$5 = template('<div class="text-lg pt-6 w-full font-extrabold h-14 flex items-center">'),
    _tmpl$3$3 = template('<div class="overflow-hidden bg-layer2 py-4 h-18">'),
    _tmpl$4$2 = template("<div class=-mt-6><div>"),
    _tmpl$5$1 = template('<div class="page-main flex flex-wrap gap-x-4"><div class="page-container w-96 min-h-96 flex-1 rounded-xl">');
const ane = {
        y: [16, 0]
    },
    cfg = {
        duration: .3,
        easing: easeBack,
        persist: !0
    };

function TMCLayout(O) {
    const M = useCurrentMatches(),
        L = createMemo(() => {
            const _ = M();
            return _[_.length - 1]
        }),
        I = children(() => createComponent(Show, {
            get when() {
                return L()
            },
            keyed: !0,
            get children() {
                return createComponent(ErrorBoundary, {
                    fallback: _ => (console.error(_), createComponent(Empty, {
                        type: "notfound",
                        get children() {
                            return String(_)
                        }
                    })),
                    get children() {
                        return createComponent(Suspense, {
                            get fallback() {
                                return (() => {
                                    var _ = _tmpl$$a();
                                    return insert(_, createComponent(Loading, {})), createRenderEffect(() => className(_, cx("h-96 center rounded-xl bg-layer4", O.loadingClass))), _
                                })()
                            },
                            get children() {
                                return O.children
                            }
                        })
                    }
                })
            }
        }));
    createEffect(_ => {
        const H = L();
        return _ && (window.scrollTo({
            top: 0,
            behavior: "smooth"
        }), animate(R, ane, cfg)), H
    });
    const N = useLocation();
    createEffect(() => {
        const _ = document.getElementById(N.pathname);
        window.requestAnimationFrame(() => {
            _ && _.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "center"
            })
        })
    });
    let R;
    return createComponent(Show, {
        get when() {
            return env.clientWidth < 1100
        },
        get fallback() {
            return (() => {
                var _ = _tmpl$5$1(),
                    H = _.firstChild;
                insert(_, createComponent(Show, {
                    get when() {
                        return O.title
                    },
                    get children() {
                        return createComponent(Sticky, {
                            class: "text-lg w-full font-extrabold leading-8 pb-4",
                            get children() {
                                return O.title
                            }
                        })
                    }
                }), H), insert(_, createComponent(Show, {
                    get when() {
                        return O.menu
                    },
                    get children() {
                        return createComponent(Sticky, {
                            class: "page-menu w-60 flex-none text-secondary self-start bg-layer4 p-2 rounded-xl",
                            get children() {
                                return createComponent(For, {
                                    get each() {
                                        return O.menu
                                    },
                                    children: z => createComponent(A, {
                                        class: "h-10 rounded-lg flex items-center gap-1 px-4",
                                        get href() {
                                            return z.href || ""
                                        },
                                        activeClass: "font-extrabold text-primary active-tab-group",
                                        inactiveClass: "btn-like",
                                        end: !0,
                                        replace: !0,
                                        get children() {
                                            return [memo$2(() => z.title), createComponent(Show, {
                                                get when() {
                                                    return z.badge
                                                },
                                                get children() {
                                                    return createComponent(Badge, {
                                                        class: "ml-auto",
                                                        get value() {
                                                            return z.badge()
                                                        }
                                                    })
                                                }
                                            })]
                                        }
                                    })
                                })
                            }
                        })
                    }
                }), H);
                var G = R;
                return typeof G == "function" ? use(G, H) : R = H, insert(H, I), _
            })()
        },
        get children() {
            var _ = _tmpl$4$2(),
                H = _.firstChild;
            insert(_, createComponent(Sticky, {
                class: "z-40 bg-layer2",
                get children() {
                    return [createComponent(Show, {
                        get when() {
                            return O.title && !env.mobile
                        },
                        get children() {
                            var z = _tmpl$2$5();
                            return insert(z, () => O.title), z
                        }
                    }), createComponent(Show, {
                        get when() {
                            return O.menu
                        },
                        get children() {
                            var z = _tmpl$3$3();
                            return insert(z, createComponent(ScrollView, {
                                pan: "x",
                                get class() {
                                    return cx("hide-scroll flex-none whitespace-nowrap bg-layer4 p-1 light-layer2-tabs page-menu size-full flex flex-nowrap rounded-xl")
                                },
                                get children() {
                                    return createComponent(For, {
                                        get each() {
                                            return O.menu
                                        },
                                        children: W => createComponent(A, {
                                            get id() {
                                                return W.href
                                            },
                                            class: "h-full rounded-lg inline-flex items-center gap-1 px-4",
                                            get href() {
                                                return W.href || ""
                                            },
                                            activeClass: "active-tab-group",
                                            inactiveClass: "btn-like",
                                            end: !0,
                                            replace: !0,
                                            get children() {
                                                return [memo$2(() => W.title), createComponent(Show, {
                                                    get when() {
                                                        return W.badge
                                                    },
                                                    get children() {
                                                        return createComponent(Badge, {
                                                            class: "-translate-y-1",
                                                            get value() {
                                                                return W.badge()
                                                            }
                                                        })
                                                    }
                                                })]
                                            }
                                        })
                                    })
                                }
                            })), z
                        }
                    })]
                }
            }), H);
            var G = R;
            return typeof G == "function" ? use(G, H) : R = H, insert(H, I), _
        }
    })
}
var $KEYS = Symbol("track-keys"),
    De, dt, ReactiveSet = (dt = class extends Set {
        constructor(O) {
            if (super(), ke(this, De, new TriggerCache), O)
                for (const M of O) super.add(M)
        }
        get size() {
            return me(this, De).track($KEYS), super.size
        }
        has(O) {
            return me(this, De).track(O), super.has(O)
        }* keys() {
            for (const O of super.keys()) me(this, De).track(O), yield O;
            me(this, De).track($KEYS)
        }
        values() {
            return this.keys()
        }* entries() {
            for (const O of super.keys()) me(this, De).track(O), yield [O, O];
            me(this, De).track($KEYS)
        }[Symbol.iterator]() {
            return this.values()
        }
        forEach(O) {
            me(this, De).track($KEYS), super.forEach(O)
        }
        add(O) {
            return super.has(O) || (super.add(O), batch(() => {
                me(this, De).dirty(O), me(this, De).dirty($KEYS)
            })), this
        }
        delete(O) {
            const M = super.delete(O);
            return M && batch(() => {
                me(this, De).dirty(O), me(this, De).dirty($KEYS)
            }), M
        }
        clear() {
            super.size && batch(() => {
                for (const O of super.keys()) me(this, De).dirty(O);
                super.clear(), me(this, De).dirty($KEYS)
            })
        }
    }, De = new WeakMap, dt),
    _tmpl$$9 = template("<div>"),
    _tmpl$2$4 = template('<div><div class="h-full rounded bg-alw_white">');
const smoothListSet = new ReactiveSet;

function SmoothList(O) {
    const [M, L] = splitProps(O, ["data", "progressBar"]), [I, N] = createSignal(!1), [R, _] = createSignal({
        x: 0,
        y: 0
    }), [H, G] = createSignal({
        left: 0,
        top: 0
    }), z = mergeProps({
        progressBar: !1,
        data: []
    }, M);
    let W;
    const [K, X] = createSignal([]);
    createEffect(() => X(z.data || []));
    const Y = Scrollbar.createScrollProps(() => W),
        J = ne => {
            N(!0), _({
                x: ne.clientX,
                y: ne.clientY
            }), G({
                left: W.scrollLeft,
                top: W.scrollTop
            }), ne.preventDefault()
        },
        Z = throttle(ne => {
            if (!I()) return;
            const oe = ne.clientX - R().x,
                ie = ne.clientY - R().y;
            W.scrollTo(H().left - oe, H().top - ie)
        }, 50),
        Q = () => N(!1);
    onCleanup(() => {
        window.removeEventListener("mousemove", Z), window.removeEventListener("mouseup", Q)
    });
    const ee = children(() => createComponent(ListView$1, {
            get each() {
                return K()
            },
            children: (...ne) => (() => {
                var oe = _tmpl$$9();
                return insert(oe, () => O.children(...ne)), oe
            })()
        })),
        te = children(() => (() => {
            var ne = _tmpl$$9(),
                oe = mergeRefs(ie => W = ie, L.ref);
            return typeof oe == "function" && use(oe, ne), spread(ne, mergeProps(L, {
                get onMouseDown() {
                    return O.enableDrag ? J : void 0
                },
                get onMouseMove() {
                    return O.enableDrag ? Z : void 0
                },
                get onMouseLeave() {
                    return O.enableDrag ? () => N(!1) : void 0
                },
                get onMouseUp() {
                    return O.enableDrag ? () => N(!1) : void 0
                },
                get class() {
                    return cx("grid smooth-scroll smooth-list snap-x relative snap-mandatory grid-flow-col overflow-x-scroll overflow-y-hidden scroll-smooth hide-scroll", O.enableDrag ? I() ? "cursor-grabbing" : "cursor-grab" : "", O.class)
                }
            }), !1, !0), insert(ne, ee), ne
        })()),
        se = () => {
            const ne = Y.scrollWidth - Y.clientWidth,
                oe = Y.scrollLeft / ne,
                ie = Y.clientWidth / Y.scrollWidth;
            return {
                progress: oe * (1 - ie) / ie,
                barLengthRatio: ie
            }
        };
    return onMount(() => {
        smoothListSet.add(W), onCleanup(() => {
            smoothListSet.delete(W)
        })
    }), [memo$2(te), createComponent(Toggle, {
        get when() {
            return z.progressBar
        },
        get children() {
            return createComponent(SwiperProgressbar, mergeProps(se))
        }
    })]
}
const SwiperProgressbar = O => (() => {
        var M = _tmpl$2$4(),
            L = M.firstChild;
        return createRenderEffect(I => {
            var N = cx("m-auto mt-2 h-1 w-20 overflow-hidden rounded-sm bg-layer4"),
                R = `translateX(${100*O.progress}%)`,
                _ = `${100*O.barLengthRatio}%`;
            return N !== I.e && className(M, I.e = N), R !== I.t && ((I.t = R) != null ? L.style.setProperty("transform", R) : L.style.removeProperty("transform")), _ !== I.a && ((I.a = _) != null ? L.style.setProperty("width", _) : L.style.removeProperty("width")), I
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), M
    })(),
    SmoothListController = O => {
        const [M, L] = createSignal(null), I = mergeProps({
            smoothListSelector: () => {
                if (!M()) return null;
                let Y = null,
                    J = 1 / 0;
                return smoothListSet.forEach(Z => {
                    if (Z === M()) return;
                    const Q = getDistance(M(), Z);
                    Q.dy < J && (J = Q.dy, Y = Z)
                }), Y
            }
        }, O), [N, R] = splitProps(I, ["smoothListSelector"]), _ = createMemo(() => I.smoothListSelector()), H = Scrollbar.createScrollProps(() => _()), G = createMemo(() => H.clientWidth), z = Y => ({
            disabled: createMemo(() => Y === -1 ? H.scrollLeft === 0 : H.scrollWidth - H.clientWidth - H.scrollLeft <= 1),
            onClick: () => {
                untrack(() => {
                    var J;
                    H.isScrolling || (J = _()) == null || J.scrollTo({
                        left: H.scrollLeft + Y * G(),
                        top: 0,
                        behavior: "smooth"
                    })
                })
            }
        }), W = createMemo(() => z(-1)), K = createMemo(() => z(1)), X = children(() => I.children ? I.children({
            leftButtonProps: { ...W(),
                disabled: W().disabled()
            },
            rightButtonProps: { ...K(),
                disabled: K().disabled()
            }
        }) : [createComponent(Button, {
            get disabled() {
                return W().disabled()
            },
            get onClick() {
                return W().onClick
            },
            type: "second",
            class: "size-8 bg-layer5",
            get children() {
                return createComponent(Icon, {
                    name: "Arrow",
                    class: "size-5"
                })
            }
        }), createComponent(Button, {
            get disabled() {
                return K().disabled()
            },
            get onClick() {
                return K().onClick
            },
            type: "second",
            class: "size-8 bg-layer5",
            get children() {
                return createComponent(Icon, {
                    name: "Arrow",
                    class: "size-5 rotate-180"
                })
            }
        })]);
        return (() => {
            var Y = _tmpl$$9();
            return use(L, Y), spread(Y, mergeProps(R, {
                get class() {
                    return cx(R.class, "flex gap-x-1")
                }
            }), !1, !0), insert(Y, X), Y
        })()
    },
    getDistance = (O, M) => {
        const L = O.getBoundingClientRect(),
            I = M.getBoundingClientRect(),
            N = Math.max(0, Math.min(Math.abs(L.left - I.right), Math.abs(I.left - L.right))),
            R = Math.max(0, Math.min(Math.abs(L.top - I.bottom), Math.abs(I.top - L.bottom)));
        return {
            sqrt: Math.sqrt(N * N + R * R),
            dx: N,
            dy: R,
            rect1: L,
            rect2: I
        }
    };
var _tmpl$$8 = template("<div><div>");

function Switch(O) {
    const [, M] = splitProps(O, ["onChange", "value", "class", "size"]), L = createMemo(() => O.size === "small");
    return (() => {
        var I = _tmpl$$8();
        return spread(I, mergeProps(M, {
            get "data-disabled" () {
                return O.disabled
            },
            get class() {
                return cx("switch", L() && "switch-xs", O.class)
            },
            get "aria-checked" () {
                return O.value || void 0
            },
            get onClick() {
                return O.disabled ? () => {} : () => O.onChange && O.onChange(!O.value)
            }
        }), !1, !0), I
    })()
}
var _tmpl$$7 = template('<div class="flex justify-center mt-4">'),
    _tmpl$2$3 = template("<div>"),
    _tmpl$3$2 = template("<img class=w-full>"),
    _tmpl$4$1 = template('<div class="relative flex gap-y-4 flex-col"><div class="min-w-full -mx-4 "></div><div class="flex flex-col gap-y-[0.6rem] h-[6.5rem]"><span class="text-secondary text-sm font-semibold "></span><h3 class="leading-tight font-extrabold text-xl text-primary"></h3><p class="break-words text-secondary font-semibold text-sm">'),
    _tmpl$5 = template('<div class="flex space-x-2">');
const Intros = O => {
        const [M, L] = createSignal(0), I = mergeProps({
            intros: [],
            stepCounter: z => `${String(z+1).padStart(2,"0")}`
        }, O), [N, R] = splitProps(I, ["intros", "title", "stepCounter"]), _ = createSelector(M), H = createMemo(() => I.intros[M()]), G = createMemo(() => !!I.intros[M() + 1]);
        return (() => {
            var z = _tmpl$2$3();
            return spread(z, mergeProps(R, {
                get class() {
                    return cx("px-4", R.class)
                }
            }), !1, !0), insert(z, createComponent(Show, {
                get when() {
                    return I.intros.length > 0
                },
                get children() {
                    return [createComponent(For, {
                        get each() {
                            return I.intros
                        },
                        children: (W, K) => createComponent(Toggle, {
                            get when() {
                                return _(K())
                            },
                            get children() {
                                var X = _tmpl$4$1(),
                                    Y = X.firstChild,
                                    J = Y.nextSibling,
                                    Z = J.firstChild,
                                    Q = Z.nextSibling,
                                    ee = Q.nextSibling;
                                return insert(Y, createComponent(Show, {
                                    get when() {
                                        return typeof W.image == "string"
                                    },
                                    get fallback() {
                                        return W.image
                                    },
                                    get children() {
                                        var te = _tmpl$3$2();
                                        return createRenderEffect(() => setAttribute(te, "src", W.image)), te
                                    }
                                })), insert(Z, () => I.stepCounter(K())), insert(Q, () => W.title), insert(ee, () => W.description), X
                            }
                        })
                    }), (() => {
                        var W = _tmpl$$7();
                        return insert(W, createComponent(BulletPoints, {
                            get activeIndex() {
                                return M()
                            },
                            get totals() {
                                return I.intros.length
                            }
                        })), W
                    })(), createComponent(Button, {
                        type: "brand",
                        size: "l",
                        class: "w-full mt-4 mb-1",
                        onClick: () => {
                            if (!G()) return pop$1.pop();
                            L(W => W + 1)
                        },
                        get children() {
                            return memo$2(() => !!(H().buttonName || G()))() ? defaultT("Next") : defaultT("Done")
                        }
                    })]
                }
            })), z
        })()
    },
    BulletPoints = O => (() => {
        var M = _tmpl$5();
        return insert(M, createComponent(Index, {
            get each() {
                return Array(O.totals).fill("")
            },
            children: (L, I) => (() => {
                var N = _tmpl$2$3();
                return N.$$click = () => {
                    var R;
                    return (R = O.onClick) == null ? void 0 : R.call(O, I)
                }, createRenderEffect(R => classList(N, {
                    "h-2 w-2 rounded-full transition-all ease-out": !0,
                    "bg-input": O.activeIndex !== I,
                    "bg-brand": O.activeIndex === I
                }, R)), N
            })()
        })), M
    })();
delegateEvents(["click"]);
var _tmpl$$6 = template("<div>");

function ToggleView(O) {
    const [, M] = splitProps(O, ["duration", "ease", "keepAlive", "when", "class"]), L = children(() => createComponent(Toggle, {
        get when() {
            return O.when
        },
        get keepAlive() {
            return O.keepAlive
        },
        get children() {
            var X = _tmpl$$6();
            return spread(X, mergeProps({
                get class() {
                    return cx("overflow-hidden", O.class)
                }
            }, M), !1, !1), X
        }
    })), I = resolveFirst(L);
    let N = 0,
        R = () => {};
    const _ = createMemo(() => `${O.duration||".35s"} height ${O.ease||"var(--ease-out"}`),
        H = createSwitchTransition(I, {
            onEnter(X) {
                queueMicrotask(() => {
                    X.style.height || (N = W(X), X.style.height = "0px"), G(X, N)
                })
            },
            onExit(X, Y) {
                N === 0 && (N = W(X)), X.style.height = X.style.height || X.clientHeight + "px", G(X, 0, Y)
            }
        });

    function G(X, Y, J) {
        R(), requestAnimationFrame(() => {
            X.getBoundingClientRect(), X.style.transition = _(), X.style.height = Y + "px", R = () => {
                X.removeEventListener("transitionend", Z)
            };

            function Z() {
                z(X), J ? .()
            }
            X.addEventListener("transitionend", Z)
        })
    }

    function z(X) {
        X.style.transition = "", X.style.height = "", R()
    }

    function W(X) {
        const Y = X.style.height;
        X.style.height = "";
        const J = X.clientHeight;
        return X.style.height = Y, J
    }
    const K = new Set;
    return () => {
        const X = H();
        return K.clear(), X.forEach(Y => K.add(Y)), [...K.keys()]
    }
}

function createDelaySignal(O, M) {
    const [L, I] = createSignal(O());
    return createEffect(() => {
        const N = O(),
            R = M(N);
        if (R === 0) I(N);
        else {
            const _ = setTimeout(() => I(N), R);
            onCleanup(() => clearTimeout(_))
        }
    }), L
}
var _tmpl$$5 = template("<div class=tooltip-triangle>"),
    _tmpl$2$2 = template('<span class="text-xs text-secondary">'),
    _tmpl$3$1 = template("<div><span>");
const DELAY_TIME = 400,
    [value, setValue] = createSignal(),
    forceUnmount = () => {
        setValue(), document.body.contains(tip) && document.body.removeChild(tip)
    };
let tip, cache;

function createTipRoot() {
    return cache || (cache = createRoot(() => {
        let O;
        const M = createDelaySignal(value, I => I ? 0 : DELAY_TIME),
            L = children(() => {
                var I;
                return (I = M()) == null ? void 0 : I.node()
            });
        return createEffect(() => {
            const I = M();
            if (I && L()) {
                document.body.appendChild(tip);
                const N = I.rect,
                    R = I.padding ? ? 5,
                    _ = I.position ? ? "vertical",
                    H = tip.getBoundingClientRect();
                let G = 0,
                    z = 0,
                    W = 0,
                    K = 0;
                console.log("position", _), _ === "horizontal" ? (K = N.y + N.height / 2 - 1, z = Math.min(Math.max(R, N.y + (N.height - H.height) / 2), window.innerHeight - H.height - R), G = N.x + N.width + R, W = G - O.clientWidth / 2 + 1, G >= window.innerWidth && (G = N.x - H.width - R, W = G + H.width - O.clientWidth / 2)) : (W = N.x + N.width / 2 - O.clientWidth / 2 + 1, G = Math.min(Math.max(R, N.x + (N.width - H.width) / 2), window.innerWidth - H.width - R), z = N.y - (H.height + 1 * R), K = z + H.height, z < R && (z = N.y + N.height + R, K = z)), tip.style.top = z + "px", tip.style.left = G + "px", tip.style.zIndex = "1001", tip.style.setProperty("--triangle-left", W + "px"), tip.style.setProperty("--triangle-top", K - 1 + "px");
                const X = () => setValue(I),
                    Y = () => setValue();
                tip.addEventListener("mouseenter", X), tip.addEventListener("mouseleave", Y), onCleanup(() => {
                    tip.removeEventListener("mouseenter", X), tip.removeEventListener("mouseleave", Y), document.body.contains(tip) && (tip.style.top = "", tip.style.left = "", tip.style.setProperty("--triangle-left", ""), tip.style.setProperty("--triangle-top", ""), document.body.removeChild(tip))
                })
            } else {
                document.body.contains(tip) && (tip.style.top = "", tip.style.left = "", tip.style.setProperty("--triangle-left", ""), tip.style.setProperty("--triangle-top", ""), document.body.removeChild(tip));
                return
            }
        }), {
            value,
            node: createComponent(Portal, {
                ref: I => {
                    tip = I, I.className = "tooltip", createClickOutside(() => tip, N => {
                        var R;
                        const _ = (R = value()) == null ? void 0 : R.trigger();
                        _ != null && _.contains(N.target) || forceUnmount()
                    })
                },
                get children() {
                    return [(() => {
                        var I = _tmpl$$5(),
                            N = O;
                        return typeof N == "function" ? use(N, I) : O = I, I
                    })(), memo$2(L)]
                }
            }),
            setValue
        }
    })), [cache.value, cache.setValue]
}

function Tooltip(O) {
    const [M, L] = createTipRoot(), I = G => {
        if (O.disabled) return;
        const z = G.currentTarget.getBoundingClientRect();
        L({
            trigger: H,
            node: () => O.title ? (() => {
                var W = _tmpl$3$1(),
                    K = W.firstChild;
                return insert(K, () => O.title), insert(W, createComponent(Show, {
                    get when() {
                        return O.description
                    },
                    get children() {
                        var X = _tmpl$2$2();
                        return insert(X, () => O.description), X
                    }
                }), null), createRenderEffect(X => {
                    var Y = cx(O.title && O.description ? "px-4 py-3 flex flex-col gap-y-1" : "p-2"),
                        J = cx(O.description ? "text-xs font-extrabold" : "text-sm", "text-primary");
                    return Y !== X.e && className(W, X.e = Y), J !== X.t && className(K, X.t = J), X
                }, {
                    e: void 0,
                    t: void 0
                }), W
            })() : void 0,
            rect: z,
            padding: O.padding,
            position: O.position
        })
    }, N = () => {
        L()
    }, R = useScrollElement();
    createEventListener(() => R(), "scroll", () => {
        forceUnmount()
    });
    const _ = children(() => O.children),
        H = resolveFirst(_);
    return isSupportTouch ? createEventListener(H, "touchstart", G => {
        M() ? L() : I(G)
    }) : (createEventListener(H, "mouseenter", I), createEventListener(H, "mouseleave", N)), _
}
const createControllableSignal = O => {
    var M;
    const [L, I] = createSignal((M = O.defaultValue) == null ? void 0 : M.call(O)), N = createMemo(() => {
        var _;
        return "value" in O && ((_ = O.value) == null ? void 0 : _.call(O)) !== void 0
    }), R = createMemo(() => {
        var _;
        return N() ? (_ = O.value) == null ? void 0 : _.call(O) : L ? .()
    });
    return [R, _ => {
        untrack(() => {
            var H;
            const G = accessWith(_, R());
            return Object.is(G, R()) || (N() || I(G), (H = O ? .onChange) == null || H.call(O, G)), G
        })
    }]
};
var _tmpl$$4 = template('<div><div class="absolute left-0 top-1/2 -translate-y-1/2 h-[0.125rem] w-full quarterary"></div><div class="absolute top-0 left-0 cursor-pointer bg-primary h-full w-6 rounded-[0.25rem]">');

function Slider(O) {
    O = mergeProps({
        min: 0,
        max: 100,
        step: 1
    }, O);
    const [M, L] = splitProps(O, ["min", "max", "step", "onChange", "defaultValue", "value"]), [I, N] = createControllableSignal({
        defaultValue: () => M.defaultValue ? ? 0,
        value: () => M.value,
        onChange: M.onChange
    });
    let R, _;
    const H = X => (X - M.min) / (M.max - M.min),
        G = X => {
            const Y = X.target;
            Y.setPointerCapture(X.pointerId), X.preventDefault(), X.stopPropagation(), Y.focus(), Y !== _ && K(X.clientX)
        },
        z = createElementSize(() => _),
        W = createElementSize(() => R),
        K = X => {
            untrack(() => {
                const Y = R.getBoundingClientRect(),
                    J = (X - Y.left) / (Y.width - z.width) * (M.max - M.min),
                    Z = Math.min(Math.max(M.min + J, M.min), M.max),
                    Q = Math.round(Z / M.step) * M.step;
                N(Q)
            })
        };
    return createEventListenerMap(() => R, {
        pointerdown: G,
        pointermove: X => {
            const Y = X.target;
            X.stopPropagation(), Y.hasPointerCapture(X.pointerId) && K(X.clientX)
        },
        pointerup: X => {
            const Y = X.target;
            X.stopPropagation(), Y.hasPointerCapture(X.pointerId) && Y.releasePointerCapture(X.pointerId)
        }
    }), (() => {
        var X = _tmpl$$4(),
            Y = X.firstChild,
            J = Y.nextSibling,
            Z = R;
        typeof Z == "function" ? use(Z, X) : R = X, spread(X, mergeProps(L, {
            get class() {
                return cx(O.class, "relative touch-none w-full h-4")
            }
        }), !1, !0);
        var Q = _;
        return typeof Q == "function" ? use(Q, J) : _ = J, createRenderEffect(ee => (ee = `translateX(${(W.width-z.width)*H(I())}px)`) != null ? J.style.setProperty("transform", ee) : J.style.removeProperty("transform")), X
    })()
}
var _tmpl$$3 = template("<div>"),
    _tmpl$2$1 = template("<header>"),
    _tmpl$3 = template("<main>"),
    _tmpl$4 = template("<aside>");
const Layout = O => (() => {
        var M = _tmpl$$3();
        return spread(M, mergeProps(O, {
            get class() {
                return cx("share-layout", O.class)
            }
        }), !1, !1), M
    })(),
    Header = O => (() => {
        var M = _tmpl$2$1();
        return spread(M, mergeProps(O, {
            get class() {
                return cx("share-layout-header", O.class)
            }
        }), !1, !1), M
    })(),
    Content = O => (() => {
        var M = _tmpl$3();
        return spread(M, mergeProps(O, {
            get class() {
                return cx("share-layout-content", O.class)
            }
        }), !1, !1), M
    })(),
    Sider = O => (() => {
        var M = _tmpl$4();
        return spread(M, mergeProps(O, {
            get class() {
                return cx("share-layout-sider", O.class)
            }
        }), !1, !1), M
    })();
Layout.Content = Content;
Layout.Header = Header;
Layout.Sider = Sider;

function createCountdown(O) {
    function M(G) {
        let z = Date.now();
        if (z >= G) {
            z = G;
            return
        }
        const W = Math.max(G - z, 0) / 1e3;
        return {
            days: Math.floor(W / 86400),
            hours: Math.floor(W / 3600 % 24),
            minutes: Math.floor(W / 60 % 60),
            seconds: Math.floor(W % 60)
        }
    }
    const [L, I] = createStore({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }), N = useIsActive(), [R, _] = createSignal(M(O()));

    function H() {
        const G = O(),
            z = M(G);
        z ? (I(z), _(L)) : _(void 0)
    }
    return createTimer(H, () => N() && R() ? 1e3 : !1, setInterval), createEffect(() => {
        N() && H()
    }), R
}
const VERSION = "_v=4",
    defaultArgs = `${VERSION}&auto=format&dpr=${globalThis.devicePixelRatio}`,
    loaded = new Set;

function createImgix(O, M, L) {
    const I = () => `${O()}?${defaultArgs}${M?`&${M}`:""}`,
        [N, R] = createSignal(loaded.has(I()));
    return createEffect(() => {
        if (!N() && L !== !1) {
            let _ = function() {
                R(!0)
            };
            loadImage(I()).then(() => {
                loaded.add(I()), _()
            }, _)
        }
    }), () => N() ? I() : `${O()}?${VERSION}&w=100&auto=format&cs=tinysrgb&blur=100`
}

function loadImage(O) {
    return new Promise((M, L) => {
        const I = new Image;
        I.onload = () => M(O), I.onerror = () => L(new Error("Image load error!")), I.src = O
    })
}
const CollapsibleContext = createContext(),
    error_message$1 = "[Collapsible.Context]: `useCollapsibleContext` must be used within a `Collapsible` component",
    useCollapsibleContext = () => {
        const O = useContext(CollapsibleContext);
        if (O === void 0) throw Error(error_message$1);
        return O
    },
    CollapsibleContent = O => {
        const M = useCollapsibleContext();
        return createComponent(ToggleView, mergeProps(O, {
            get when() {
                return M.isOpen()
            },
            get keepAlive() {
                var L;
                return (L = M.keepAlive) == null ? void 0 : L.call(M)
            }
        }))
    };
var _tmpl$$2 = template('<div class="flex-none size-6 flex items-center justify-center bg-button_bright rounded-md">'),
    _tmpl$2 = template('<div class="flex items-center justify-between gap-3">');
const CollapsibleTrigger = O => {
    const M = useCollapsibleContext(),
        [L, I] = splitProps(O, ["onClick", "icon"]),
        N = composeEventHandlers([L.onClick, () => M.handleOpenChange(H => !H)]),
        R = (() => {
            var H = _tmpl$$2();
            return insert(H, createComponent(Icon, {
                name: "Arrow",
                get class() {
                    return cx("transition-all size-4 duration-300 fill-secondary", M.isOpen() ? "rotate-[270deg]" : "rotate-180")
                }
            })), H
        })(),
        _ = createMemo(() => {
            const H = !!M.isOpen();
            return typeof O.icon == "function" ? O.icon(H) : O.icon ? O.icon : R
        });
    return (() => {
        var H = _tmpl$2();
        return spread(H, mergeProps(I, {
            onClick: N
        }), !1, !0), insert(H, () => O.children, null), insert(H, _, null), H
    })()
};
var _tmpl$$1 = template("<div>");
const Collapsible$1 = O => {
        const [M, L] = splitProps(O, ["defaultOpen", "onOpenChange", "open"]), [I, N] = createControllableSignal({
            value: () => M.open,
            defaultValue: () => M.defaultOpen,
            onChange: _ => {
                var H;
                return (H = O.onOpenChange) == null ? void 0 : H.call(O, _)
            }
        }), R = {
            isOpen: I,
            keepAlive: () => O.keepAlive ? ? !0,
            handleOpenChange: _ => {
                N(H => accessWith(_, H))
            }
        };
        return createComponent(CollapsibleContext.Provider, {
            value: R,
            get children() {
                var _ = _tmpl$$1();
                return spread(_, L, !1, !0), insert(_, () => L.children), _
            }
        })
    },
    Collapsible = defineComposition(Collapsible$1, {
        Content: CollapsibleContent,
        Trigger: CollapsibleTrigger
    }),
    AccordionContext = createContext(),
    error_message = "[BC-Shared-Accordion.Context]: `useAccordionContext` must be used within a `Accordion` component",
    useAccordionContext = () => {
        const O = useContext(AccordionContext);
        if (O === void 0) throw Error(error_message);
        return O
    },
    AccordionItem = O => {
        const M = useAccordionContext(),
            [L, I] = splitProps(O, ["value"]),
            N = () => M.selectionStateManager().isSelected(L.value);
        return createComponent(Collapsible, mergeProps(I, {
            get open() {
                return N()
            },
            onOpenChange: () => M.selectionStateManager().toggleSelect(L.value),
            get children() {
                return I.children
            }
        }))
    },
    AccordionItemTrigger = O => createComponent(Collapsible.Trigger, mergeProps(O, {
        get children() {
            return O.children
        }
    })),
    AccordionItemContent = O => createComponent(Collapsible.Content, mergeProps(O, {
        get children() {
            return O.children
        }
    }));
class ListStateManager {
    constructor(M, L) {
        we(this, "state"), we(this, "options"), this.state = M, this.options = Object.assign({
            allowDuplicate: !1
        }, access(L))
    }
    value() {
        var M;
        return access((M = this.state) == null ? void 0 : M[0])
    }
    toArray(M) {
        return Array.isArray(M) ? M : [M]
    }
    toSet(M) {
        return new Set(this.toArray(M))
    }
    ensureUniq(M) {
        var L;
        return (L = this.options) != null && L.allowDuplicate ? [...M] : [...this.toSet(M)]
    }
    add(M) {
        var L, I;
        M = this.toArray(M), (I = (L = this.state) == null ? void 0 : L[1]) == null || I.call(L, N => (N.push(...M), this.ensureUniq(N)))
    }
    replace(M) {
        var L, I;
        (I = (L = this.state) == null ? void 0 : L[1]) == null || I.call(L, this.toArray(M))
    }
    remove(M) {
        var L;
        (L = this.state) == null || L[1](I => {
            const N = this.toSet(M);
            return I.filter(R => !N.has(R))
        })
    }
    exist(M) {
        return this.toSet(this.value()).has(M)
    }
}
var SelectionMode = (O => (O[O.Multiple = 0] = "Multiple", O[O.Single = 1] = "Single", O))(SelectionMode || {});
class SelectionStateManager {
    constructor(M, L) {
        we(this, "mode"), we(this, "listStateManager"), this.listStateManager = new ListStateManager(M, {
            allowDuplicate: !1
        }), this.mode = L ? .mode ? ? 0
    }
    value() {
        return this.listStateManager.value()
    }
    isSingleMode() {
        return this.mode === 1
    }
    isMultiple() {
        return this.mode === 0
    }
    select(M) {
        this.isSingleMode() ? this.listStateManager.replace(M) : this.listStateManager.add(M)
    }
    deselect(M) {
        return this.listStateManager.remove(M)
    }
    toggleSelect(M) {
        this.isSelected(M) ? this.deselect(M) : this.select(M)
    }
    isSelected(M) {
        return this.listStateManager.exist(M)
    }
}
const createSelectionStateSignal = (O, M) => new SelectionStateManager(createControllableSignal(O), M);
var _tmpl$ = template("<div>");
const Accordion$1 = O => {
        const [M, L] = splitProps(O, ["activeKeys", "defaultActiveKeys", "onChange", "multiple"]), I = createSelectionStateSignal({
            value: () => M.activeKeys,
            defaultValue: () => M.defaultActiveKeys ? ? [],
            onChange: R => {
                var _;
                return (_ = M.onChange) == null ? void 0 : _.call(M, R)
            }
        }, {
            mode: M.multiple ? SelectionMode.Multiple : SelectionMode.Single
        }), N = {
            selectionStateManager: () => I
        };
        return createComponent(AccordionContext.Provider, {
            value: N,
            get children() {
                var R = _tmpl$();
                return spread(R, L, !1, !1), R
            }
        })
    },
    AccordionBase = defineComposition(Accordion$1, {
        Item: AccordionItem,
        ItemContent: AccordionItemContent,
        ItemTrigger: AccordionItemTrigger
    }),
    Accordion = AccordionBase.registerStyles({
        Root: {
            class: "w-full space-y-4"
        },
        ItemTrigger: {
            class: "w-full cursor-pointer px-3 flex justify-between items-center rounded-md text-sm font-extrabold"
        },
        ItemContent: {
            class: "px-3"
        }
    }),
    m4 = Object.freeze(Object.defineProperty({
        __proto__: null,
        A,
        Accordion,
        ActiveProvider,
        App,
        AvatarFrame,
        Badge,
        Breadcrumb,
        Button,
        Carousel,
        Checkbox,
        Collapsible,
        DatePicker,
        Decimal: Decimal$1,
        Dialog,
        DropDown,
        Each,
        Empty,
        FlatList,
        GridScrollList: GridScrollView,
        Icon,
        ImageX,
        Input,
        Intros,
        KeepScroll,
        Layout,
        LazyList: ListView$1,
        ListView,
        Loading,
        Long,
        Meta,
        MetaProvider,
        MultiSelect,
        Notice,
        NumberInput,
        get Occurrence() {
            return Occurrence
        },
        PQuery: PQueue,
        Pagination,
        Pop,
        PopProvider,
        QueueRender,
        Radio,
        Ref,
        Refs,
        ScrollView,
        Scrollbar,
        Select,
        Slider,
        SmoothList,
        SmoothListController,
        Sticky,
        Switch,
        TMCLayout,
        Tabs,
        ToastProvider,
        Toggle,
        ToggleView,
        Tooltip,
        Transition,
        UserTitle,
        access,
        account,
        accountInit,
        addUserReceiptEvent,
        animate,
        app,
        asyncQueue: AsyncQueue$1,
        authGuard,
        batchRouteDefinition,
        bc,
        bcdResource,
        createAssets,
        createCallback,
        createClickOutside,
        createControllableSignal,
        createCountdown,
        createCss,
        createDisposable,
        createElementSize,
        createEmitter,
        createEventListener,
        createEventListenerMap,
        createI18n,
        createImgix,
        createIntersectionObserver,
        createIsMounted,
        createKeyHold,
        createListTransition,
        createNoSuspense,
        createPaginationResource,
        createRemote,
        createResizeObserver,
        createRootPool,
        createScheduled,
        createSingletonRoot,
        createSubRoot,
        createSwitchTransition,
        createTimer,
        createTween,
        createViewportObserver,
        createVisibilityObserver,
        createWindowSize,
        currentDepositResource,
        cx,
        debounce: debounce$1,
        deduction,
        env,
        getAccountFrameInfo,
        getDepositBonusConfig,
        getHttp,
        getNextDepositOption,
        getNextDepositSoleOption,
        getPathname,
        getShareLinks,
        getSocket,
        gsap: gsapWithCSS,
        host,
        initShumeiSmid,
        leading,
        leadingAndTrailing,
        license,
        makePersisted,
        mergeRefs,
        pop: pop$1,
        protobuf: d$1,
        registHttpReject,
        registWhiteList,
        requestRecaptcha,
        resolveElements,
        resolveFirst,
        resolveRemote,
        selectRedDot,
        setAccount,
        setEnv,
        setLang,
        setSetting,
        setWallet,
        setWebsite,
        setting,
        storageSync,
        syncAccount,
        system,
        systemUtils,
        throttle,
        toast,
        until,
        untilLogin,
        useActiveMemo,
        useBeforeLeave,
        useFlatItem,
        useGlobalComponent,
        useIsActive,
        useKeyDownEvent,
        useLoginCallback,
        useMeta,
        useNavigate,
        useNavigatePromise,
        useNavigatePromiseEnter,
        useReferrer,
        useResource,
        useRouterStack,
        useScrollElement,
        useScrollTop,
        user: UserLevel,
        utils,
        wallet,
        website,
        withDirection,
        withOccurrence,
        wrUtils: F
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    useIsActive as $, createVisibilityObserver as A, Button as B, mergeRefs as C, useReferrer as D, useResource as E, createRootPool as F, Empty as G, ListView as H, ImageX as I, ListView$1 as J, Transition as K, Loading as L, accountInit as M, AsyncQueue$1 as N, registHttpReject as O, Pagination as P, QueueRender as Q, Ref as R, SmoothList as S, Tabs as T, bc as U, untilLogin as V, A as W, Icon as X, SmoothListController as Y, ActiveProvider as Z, __vitePreload as _, app as a, UserLevel as a0, systemUtils as a1, Decimal$1 as a2, resolveRemote as a3, createResizeObserver as a4, createElementSize as a5, resolveElements as a6, createEventListenerMap as a7, Carousel as a8, Toggle as a9, useScrollElement as aA, Switch as aB, ScrollView as aC, UserTitle as aD, Badge as aE, createIsMounted as aF, createTimer as aG, createCountdown as aH, createTween as aI, useActiveMemo as aJ, Accordion as aK, createPaginationResource as aL, TMCLayout as aM, createControllableSignal as aN, Scrollbar as aO, useScrollTop as aP, AvatarFrame as aQ, getAccountFrameInfo as aR, setWallet as aS, authGuard as aa, pop$1 as ab, Pop as ac, initShumeiSmid as ad, App as ae, wallet as af, deduction as ag, addUserReceiptEvent as ah, selectRedDot as ai, DropDown as aj, currentDepositResource as ak, Each as al, system as am, Tooltip as an, getNextDepositSoleOption as ao, ToggleView as ap, Select as aq, MultiSelect as ar, Input as as, createClickOutside as at, createScheduled as au, leadingAndTrailing as av, throttle as aw, Dialog as ax, createNoSuspense as ay, animate as az, setting as b, until as c, account as d, env as e, createI18n as f, getSocket as g, host as h, getHttp as i, batchRouteDefinition as j, setSetting as k, license as l, m4 as m, setAccount as n, setWebsite as o, makePersisted as p, cx as q, registWhiteList as r, setEnv as s, useNavigate as t, utils as u, createAssets as v, website as w, createEventListener as x, toast as y, getPathname as z
};