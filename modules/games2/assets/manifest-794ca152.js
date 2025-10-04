var Ms = Object.defineProperty,
    Is = Object.defineProperties;
var xs = Object.getOwnPropertyDescriptors;
var ae = Object.getOwnPropertySymbols;
var Ne = Object.prototype.hasOwnProperty,
    Be = Object.prototype.propertyIsEnumerable;
var We = Math.pow,
    je = (s, t, e) => t in s ? Ms(s, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : s[t] = e,
    d = (s, t) => {
        for (var e in t || (t = {})) Ne.call(t, e) && je(s, e, t[e]);
        if (ae)
            for (var e of ae(t)) Be.call(t, e) && je(s, e, t[e]);
        return s
    },
    R = (s, t) => Is(s, xs(t));
var Kt = (s, t) => {
    var e = {};
    for (var r in s) Ne.call(s, r) && t.indexOf(r) < 0 && (e[r] = s[r]);
    if (s != null && ae)
        for (var r of ae(s)) t.indexOf(r) < 0 && Be.call(s, r) && (e[r] = s[r]);
    return e
};
var me = (s, t, e) => {
    if (!t.has(s)) throw TypeError("Cannot " + e)
};
var i = (s, t, e) => (me(s, t, "read from private field"), e ? e.call(s) : t.get(s)),
    f = (s, t, e) => {
        if (t.has(s)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(s) : t.set(s, e)
    },
    c = (s, t, e, r) => (me(s, t, "write to private field"), r ? r.call(s, e) : t.set(s, e), e);
var ne = (s, t, e, r) => ({
        set _(a) {
            c(s, t, a, e)
        },
        get _() {
            return i(s, t, r)
        }
    }),
    v = (s, t, e) => (me(s, t, "access private method"), e);
var lt = (s, t, e) => new Promise((r, a) => {
    var n = l => {
            try {
                o(e.next(l))
            } catch (m) {
                a(m)
            }
        },
        h = l => {
            try {
                o(e.throw(l))
            } catch (m) {
                a(m)
            }
        },
        o = l => l.done ? r(l.value) : Promise.resolve(l.value).then(n, h);
    o((e = e.apply(s, t)).next())
});
const ze = {},
    L = function(s, t, e) {
        if (!t || t.length === 0) return s();
        const r = document.getElementsByTagName("link");
        return Promise.all(t.map(a => {
            if ((a = function(l) {
                    return "/modules/games2/" + l
                }(a)) in ze) return;
            ze[a] = !0;
            const n = a.endsWith(".css"),
                h = n ? '[rel="stylesheet"]' : "";
            if (e)
                for (let l = r.length - 1; l >= 0; l--) {
                    const m = r[l];
                    if (m.href === a && (!n || m.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${a}"]${h}`)) return;
            const o = document.createElement("link");
            return o.rel = n ? "stylesheet" : "modulepreload", n || (o.as = "script", o.crossOrigin = ""), o.href = a, document.head.appendChild(o), n ? new Promise((l, m) => {
                o.addEventListener("load", l), o.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${a}`)))
            }) : void 0
        })).then(() => s()).catch(a => {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = a, window.dispatchEvent(n), !n.defaultPrevented) throw a
        })
    },
    Qs = globalThis._bc,
    {
        A: li,
        Accordion: di,
        ActiveProvider: fi,
        App: pi,
        AvatarFrame: yi,
        Badge: mi,
        Breadcrumb: vi,
        Button: gi,
        Carousel: bi,
        Checkbox: Oi,
        Collapsible: Si,
        DatePicker: Ei,
        Decimal: wi,
        Dialog: Pi,
        DropDown: Ri,
        Each: Di,
        Empty: _i,
        FlatList: Ci,
        GridScrollList: Ai,
        Icon: Ti,
        ImageX: qi,
        Input: Fi,
        Intros: Li,
        KeepScroll: Mi,
        Layout: Ii,
        LazyList: xi,
        ListView: Qi,
        Loading: Ui,
        Long: ki,
        Meta: Ki,
        MetaProvider: Hi,
        MultiSelect: Gi,
        Notice: Vi,
        NumberInput: ji,
        Occurrence: Ni,
        PQuery: Bi,
        Pagination: Wi,
        Pop: zi,
        PopProvider: $i,
        QueueRender: Xi,
        Radio: Ji,
        Ref: Yi,
        Refs: Zi,
        ScrollView: tr,
        Scrollbar: er,
        Select: sr,
        Slider: ir,
        SmoothList: rr,
        SmoothListController: ar,
        Sticky: nr,
        Switch: or,
        TMCLayout: ur,
        Tabs: hr,
        ToastProvider: cr,
        Toggle: lr,
        ToggleView: dr,
        Tooltip: fr,
        Transition: pr,
        UserTitle: yr,
        access: mr,
        account: vr,
        accountInit: gr,
        addUserReceiptEvent: br,
        animate: Or,
        app: Sr,
        asyncQueue: Er,
        authGuard: wr,
        batchRouteDefinition: Pr,
        bc: Rr,
        bcdResource: Dr,
        createAssets: _r,
        createCallback: Cr,
        createClickOutside: Ar,
        createControllableSignal: Tr,
        createCountdown: qr,
        createCss: Fr,
        createDisposable: Lr,
        createElementSize: Mr,
        createEmitter: Ir,
        createEventListener: xr,
        createEventListenerMap: Qr,
        createI18n: Ur,
        createImgix: kr,
        createIntersectionObserver: Kr,
        createIsMounted: Hr,
        createKeyHold: Gr,
        createListTransition: Vr,
        createNoSuspense: jr,
        createPaginationResource: Nr,
        createRemote: Us,
        createResizeObserver: Br,
        createRootPool: Wr,
        createScheduled: zr,
        createSingletonRoot: $r,
        createSubRoot: Xr,
        createSwitchTransition: Jr,
        createTimer: Yr,
        createTween: Zr,
        createViewportObserver: ta,
        createVisibilityObserver: ea,
        createWindowSize: sa,
        currentDepositResource: ia,
        cx: ra,
        debounce: aa,
        deduction: na,
        env: oa,
        getAccountFrameInfo: ua,
        getDepositBonusConfig: ha,
        getHttp: ca,
        getNextDepositOption: la,
        getNextDepositSoleOption: da,
        getShareLinks: fa,
        getSocket: pa,
        gsap: ya,
        host: ma,
        initShumeiSmid: va,
        leading: ga,
        leadingAndTrailing: ba,
        license: Oa,
        makePersisted: Sa,
        mergeRefs: Ea,
        pop: wa,
        protobuf: Pa,
        registHttpReject: Ra,
        registWhiteList: Da,
        requestRecaptcha: _a,
        resolveElements: Ca,
        resolveFirst: Aa,
        resolveRemote: Ta,
        selectRedDot: qa,
        setAccount: Fa,
        setEnv: La,
        setLang: Ma,
        setSetting: Ia,
        setWallet: xa,
        setWebsite: Qa,
        setting: Ua,
        storageSync: ka,
        syncAccount: Ka,
        system: Ha,
        systemUtils: Ga,
        throttle: Va,
        toast: ja,
        until: Na,
        untilLogin: Ba,
        useActiveMemo: Wa,
        useBeforeLeave: za,
        useFlatItem: $a,
        useGlobalComponent: Xa,
        useIsActive: Ja,
        useKeyDownEvent: Ya,
        useLoginCallback: Za,
        useMeta: tn,
        useNavigate: en,
        useNavigatePromise: sn,
        useNavigatePromiseEnter: rn,
        useReferrer: an,
        useResource: nn,
        useRouterStack: on,
        useScrollElement: un,
        useScrollTop: hn,
        user: cn,
        utils: ln,
        wallet: dn,
        website: fn,
        withDirection: pn,
        withOccurrence: yn,
        wrUtils: mn
    } = Qs.fcsy,
    ks = globalThis._bc,
    {
        Aliases: vn,
        Assets: gn,
        ChildProperties: bn,
        DOMElements: On,
        DelegatedEvents: Sn,
        Dynamic: En,
        ErrorBoundary: wn,
        For: Pn,
        Hydration: Rn,
        HydrationScript: Dn,
        Index: _n,
        Match: Cn,
        NoHydration: An,
        Portal: Tn,
        Properties: qn,
        RequestContext: Fn,
        SVGElements: Ln,
        SVGNamespace: Mn,
        Show: In,
        Suspense: xn,
        SuspenseList: Qn,
        Switch: Un,
        addEventListener: kn,
        assign: Kn,
        classList: Hn,
        className: Gn,
        clearDelegatedEvents: Vn,
        createComponent: ge,
        createDynamic: jn,
        delegateEvents: Nn,
        dynamicProperty: Bn,
        effect: Wn,
        escape: zn,
        generateHydrationScript: $n,
        getAssets: Xn,
        getHydrationKey: Jn,
        getNextElement: Yn,
        getNextMarker: Zn,
        getNextMatch: to,
        getOwner: eo,
        getPropAlias: so,
        getRequestEvent: io,
        hydrate: ro,
        innerHTML: ao,
        insert: no,
        isDev: oo,
        isServer: St,
        memo: uo,
        mergeProps: ho,
        render: co,
        renderToStream: lo,
        renderToString: fo,
        renderToStringAsync: po,
        resolveSSRNode: yo,
        runHydrationEvents: mo,
        setAttribute: vo,
        setAttributeNS: go,
        setBoolAttribute: bo,
        setProperty: Oo,
        spread: So,
        ssr: Eo,
        ssrAttribute: wo,
        ssrClassList: Po,
        ssrElement: Ro,
        ssrHydrationKey: Do,
        ssrSpread: _o,
        ssrStyle: Co,
        style: Ao,
        template: To,
        untrack: qo,
        use: Fo,
        useAssets: Lo
    } = ks.h0lnfr;
var Ut = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(s) {
            return this.listeners.add(s), this.onSubscribe(), () => {
                this.listeners.delete(s), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Qt = typeof window == "undefined" || "Deno" in globalThis;

function j() {}

function be(s) {
    return typeof s == "number" && s >= 0 && s !== 1 / 0
}

function ps(s, t) {
    return Math.max(s + (t || 0) - Date.now(), 0)
}

function Et(s, t) {
    return typeof s == "function" ? s(t) : s
}

function B(s, t) {
    return typeof s == "function" ? s(t) : s
}

function $e(s, t) {
    const {
        type: e = "all",
        exact: r,
        fetchStatus: a,
        predicate: n,
        queryKey: h,
        stale: o
    } = s;
    if (h) {
        if (r) {
            if (t.queryHash !== qe(h, t.options)) return !1
        } else if (!Vt(t.queryKey, h)) return !1
    }
    if (e !== "all") {
        const l = t.isActive();
        if (e === "active" && !l || e === "inactive" && l) return !1
    }
    return (typeof o != "boolean" || t.isStale() === o) && (!a || a === t.state.fetchStatus) && !(n && !n(t))
}

function Xe(s, t) {
    const {
        exact: e,
        status: r,
        predicate: a,
        mutationKey: n
    } = s;
    if (n) {
        if (!t.options.mutationKey) return !1;
        if (e) {
            if (Ot(t.options.mutationKey) !== Ot(n)) return !1
        } else if (!Vt(t.options.mutationKey, n)) return !1
    }
    return (!r || t.state.status === r) && !(a && !a(t))
}

function qe(s, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Ot)(s)
}

function Ot(s) {
    return JSON.stringify(s, (t, e) => Oe(e) ? Object.keys(e).sort().reduce((r, a) => (r[a] = e[a], r), {}) : e)
}

function Vt(s, t) {
    return s === t || typeof s == typeof t && !(!s || !t || typeof s != "object" || typeof t != "object") && !Object.keys(t).some(e => !Vt(s[e], t[e]))
}

function ys(s, t) {
    if (s === t) return s;
    const e = Je(s) && Je(t);
    if (e || Oe(s) && Oe(t)) {
        const r = e ? s : Object.keys(s),
            a = r.length,
            n = e ? t : Object.keys(t),
            h = n.length,
            o = e ? [] : {};
        let l = 0;
        for (let m = 0; m < h; m++) {
            const u = e ? m : n[m];
            (!e && r.includes(u) || e) && s[u] === void 0 && t[u] === void 0 ? (o[u] = void 0, l++) : (o[u] = ys(s[u], t[u]), o[u] === s[u] && s[u] !== void 0 && l++)
        }
        return a === h && l === a ? s : o
    }
    return t
}

function ue(s, t) {
    if (!t || Object.keys(s).length !== Object.keys(t).length) return !1;
    for (const e in s)
        if (s[e] !== t[e]) return !1;
    return !0
}

function Je(s) {
    return Array.isArray(s) && s.length === Object.keys(s).length
}

function Oe(s) {
    if (!Ye(s)) return !1;
    const t = s.constructor;
    if (t === void 0) return !0;
    const e = t.prototype;
    return !!Ye(e) && !!e.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(s) === Object.prototype
}

function Ye(s) {
    return Object.prototype.toString.call(s) === "[object Object]"
}

function Se(s, t, e) {
    return typeof e.structuralSharing == "function" ? e.structuralSharing(s, t) : e.structuralSharing !== !1 ? ys(s, t) : t
}

function Ks(s, t, e = 0) {
    const r = [...s, t];
    return e && r.length > e ? r.slice(1) : r
}

function Hs(s, t, e = 0) {
    const r = [t, ...s];
    return e && r.length > e ? r.slice(0, -1) : r
}
var ms = Symbol(),
    vs = (s, t) => !s.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : s.queryFn && s.queryFn !== ms ? s.queryFn : () => Promise.reject(new Error(`Missing queryFn: '${s.queryHash}'`)),
    dt, it, wt, rs, Fe = new(rs = class extends Ut {
        constructor() {
            super();
            f(this, dt, void 0);
            f(this, it, void 0);
            f(this, wt, void 0);
            c(this, wt, t => {
                if (!Qt && window.addEventListener) {
                    const e = () => t();
                    return window.addEventListener("visibilitychange", e, !1), () => {
                        window.removeEventListener("visibilitychange", e)
                    }
                }
            })
        }
        onSubscribe() {
            i(this, it) || this.setEventListener(i(this, wt))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = i(this, it)) == null || t.call(this), c(this, it, void 0))
        }
        setEventListener(t) {
            var e;
            c(this, wt, t), (e = i(this, it)) == null || e.call(this), c(this, it, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            i(this, dt) !== t && (c(this, dt, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(e => {
                e(t)
            })
        }
        isFocused() {
            var t;
            return typeof i(this, dt) == "boolean" ? i(this, dt) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, dt = new WeakMap, it = new WeakMap, wt = new WeakMap, rs),
    Pt, rt, Rt, as, le = new(as = class extends Ut {
        constructor() {
            super();
            f(this, Pt, !0);
            f(this, rt, void 0);
            f(this, Rt, void 0);
            c(this, Rt, t => {
                if (!Qt && window.addEventListener) {
                    const e = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", e, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", e), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            i(this, rt) || this.setEventListener(i(this, Rt))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = i(this, rt)) == null || t.call(this), c(this, rt, void 0))
        }
        setEventListener(t) {
            var e;
            c(this, Rt, t), (e = i(this, rt)) == null || e.call(this), c(this, rt, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            i(this, Pt) !== t && (c(this, Pt, t), this.listeners.forEach(e => {
                e(t)
            }))
        }
        isOnline() {
            return i(this, Pt)
        }
    }, Pt = new WeakMap, rt = new WeakMap, Rt = new WeakMap, as);

function Gs(s) {
    return Math.min(1e3 * We(2, s), 3e4)
}

function gs(s) {
    return (s != null ? s : "online") !== "online" || le.isOnline()
}
var bs = class {
    constructor(s) {
        this.revert = s == null ? void 0 : s.revert, this.silent = s == null ? void 0 : s.silent
    }
};

function ve(s) {
    return s instanceof bs
}

function Os(s) {
    let t, e, r, a = !1,
        n = 0,
        h = !1;
    const o = new Promise((b, O) => {
            e = b, r = O
        }),
        l = () => Fe.isFocused() && (s.networkMode === "always" || le.isOnline()) && s.canRun(),
        m = () => gs(s.networkMode) && s.canRun(),
        u = b => {
            var O;
            h || (h = !0, (O = s.onSuccess) == null || O.call(s, b), t == null || t(), e(b))
        },
        p = b => {
            var O;
            h || (h = !0, (O = s.onError) == null || O.call(s, b), t == null || t(), r(b))
        },
        _ = () => new Promise(b => {
            var O;
            t = P => {
                (h || l()) && b(P)
            }, (O = s.onPause) == null || O.call(s)
        }).then(() => {
            var b;
            t = void 0, h || ((b = s.onContinue) == null || b.call(s))
        }),
        A = () => {
            if (h) return;
            let b;
            const O = n === 0 ? s.initialPromise : void 0;
            try {
                b = O != null ? O : s.fn()
            } catch (P) {
                b = Promise.reject(P)
            }
            Promise.resolve(b).then(u).catch(P => {
                var E, D, F;
                if (h) return;
                const T = (E = s.retry) != null ? E : Qt ? 0 : 3,
                    I = (D = s.retryDelay) != null ? D : Gs,
                    q = typeof I == "function" ? I(n, P) : I,
                    y = T === !0 || typeof T == "number" && n < T || typeof T == "function" && T(n, P);
                var S;
                !a && y ? (n++, (F = s.onFail) == null || F.call(s, n, P), (S = q, new Promise(g => {
                    setTimeout(g, S)
                })).then(() => l() ? void 0 : _()).then(() => {
                    a ? p(P) : A()
                })) : p(P)
            })
        };
    return {
        promise: o,
        cancel: b => {
            var O;
            h || (p(new bs(b)), (O = s.abort) == null || O.call(s))
        },
        continue: () => (t == null || t(), o),
        cancelRetry: () => {
            a = !0
        },
        continueRetry: () => {
            a = !1
        },
        canStart: m,
        start: () => (m() ? A() : _().then(A), o)
    }
}
var M = function() {
        let s = [],
            t = 0,
            e = o => {
                o()
            },
            r = o => {
                o()
            },
            a = o => setTimeout(o, 0);
        const n = o => {
                t ? s.push(o) : a(() => {
                    e(o)
                })
            },
            h = () => {
                const o = s;
                s = [], o.length && a(() => {
                    r(() => {
                        o.forEach(l => {
                            e(l)
                        })
                    })
                })
            };
        return {
            batch: o => {
                let l;
                t++;
                try {
                    l = o()
                } finally {
                    t--, t || h()
                }
                return l
            },
            batchCalls: o => (...l) => {
                n(() => {
                    o(...l)
                })
            },
            schedule: n,
            setNotifyFunction: o => {
                e = o
            },
            setBatchNotifyFunction: o => {
                r = o
            },
            setScheduler: o => {
                a = o
            }
        }
    }(),
    ft, ns, Ss = (ns = class {
        constructor() {
            f(this, ft, void 0)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), be(this.gcTime) && c(this, ft, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(s) {
            this.gcTime = Math.max(this.gcTime || 0, s != null ? s : Qt ? 1 / 0 : 3e5)
        }
        clearGcTimeout() {
            i(this, ft) && (clearTimeout(i(this, ft)), c(this, ft, void 0))
        }
    }, ft = new WeakMap, ns),
    Dt, _t, V, Q, jt, pt, N, Y, os, Vs = (os = class extends Ss {
        constructor(t) {
            super();
            f(this, N);
            f(this, Dt, void 0);
            f(this, _t, void 0);
            f(this, V, void 0);
            f(this, Q, void 0);
            f(this, jt, void 0);
            f(this, pt, void 0);
            c(this, pt, !1), c(this, jt, t.defaultOptions), this.setOptions(t.options), this.observers = [], c(this, V, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, c(this, Dt, t.state || function(e) {
                const r = typeof e.initialData == "function" ? e.initialData() : e.initialData,
                    a = r !== void 0,
                    n = a ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                return {
                    data: r,
                    dataUpdateCount: 0,
                    dataUpdatedAt: a ? n != null ? n : Date.now() : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: a ? "success" : "pending",
                    fetchStatus: "idle"
                }
            }(this.options)), this.state = i(this, Dt), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = i(this, Q)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = d(d({}, i(this, jt)), t), this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            this.observers.length || this.state.fetchStatus !== "idle" || i(this, V).remove(this)
        }
        setData(t, e) {
            const r = Se(this.state.data, t, this.options);
            return v(this, N, Y).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: e == null ? void 0 : e.updatedAt,
                manual: e == null ? void 0 : e.manual
            }), r
        }
        setState(t, e) {
            v(this, N, Y).call(this, {
                type: "setState",
                state: t,
                setStateOptions: e
            })
        }
        cancel(t) {
            var r, a;
            const e = (r = i(this, Q)) == null ? void 0 : r.promise;
            return (a = i(this, Q)) == null || a.cancel(t), e ? e.then(j).catch(j) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(i(this, Dt))
        }
        isActive() {
            return this.observers.some(t => B(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
            return !!this.state.isInvalidated || (this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0)
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !ps(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var e;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (e = i(this, Q)) == null || e.continue()
        }
        onOnline() {
            var e;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (e = i(this, Q)) == null || e.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), i(this, V).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || (i(this, Q) && (i(this, pt) ? i(this, Q).cancel({
                revert: !0
            }) : i(this, Q).cancelRetry()), this.scheduleGc()), i(this, V).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || v(this, N, Y).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, e) {
            var o, l, m;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (e != null && e.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (i(this, Q)) return i(this, Q).continueRetry(), i(this, Q).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const u = this.observers.find(p => p.options.queryFn);
                u && this.setOptions(u.options)
            }
            const r = new AbortController,
                a = u => {
                    Object.defineProperty(u, "signal", {
                        enumerable: !0,
                        get: () => (c(this, pt, !0), r.signal)
                    })
                },
                n = {
                    fetchOptions: e,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: () => {
                        const u = vs(this.options, e),
                            p = {
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                        return a(p), c(this, pt, !1), this.options.persister ? this.options.persister(u, p, this) : u(p)
                    }
                };
            a(n), (o = this.options.behavior) == null || o.onFetch(n, this), c(this, _t, this.state), this.state.fetchStatus !== "idle" && this.state.fetchMeta === ((l = n.fetchOptions) == null ? void 0 : l.meta) || v(this, N, Y).call(this, {
                type: "fetch",
                meta: (m = n.fetchOptions) == null ? void 0 : m.meta
            });
            const h = u => {
                var p, _, A, b;
                ve(u) && u.silent || v(this, N, Y).call(this, {
                    type: "error",
                    error: u
                }), ve(u) || ((_ = (p = i(this, V).config).onError) == null || _.call(p, u, this), (b = (A = i(this, V).config).onSettled) == null || b.call(A, this.state.data, u, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            };
            return c(this, Q, Os({
                initialPromise: e == null ? void 0 : e.initialPromise,
                fn: n.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: u => {
                    var p, _, A, b;
                    u !== void 0 ? (this.setData(u), (_ = (p = i(this, V).config).onSuccess) == null || _.call(p, u, this), (b = (A = i(this, V).config).onSettled) == null || b.call(A, u, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1) : h(new Error(`${this.queryHash} data is undefined`))
                },
                onError: h,
                onFail: (u, p) => {
                    v(this, N, Y).call(this, {
                        type: "failed",
                        failureCount: u,
                        error: p
                    })
                },
                onPause: () => {
                    v(this, N, Y).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    v(this, N, Y).call(this, {
                        type: "continue"
                    })
                },
                retry: n.options.retry,
                retryDelay: n.options.retryDelay,
                networkMode: n.options.networkMode,
                canRun: () => !0
            })), i(this, Q).start()
        }
    }, Dt = new WeakMap, _t = new WeakMap, V = new WeakMap, Q = new WeakMap, jt = new WeakMap, pt = new WeakMap, N = new WeakSet, Y = function(t) {
        this.state = (e => {
            var r, a;
            switch (t.type) {
                case "failed":
                    return R(d({}, e), {
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    });
                case "pause":
                    return R(d({}, e), {
                        fetchStatus: "paused"
                    });
                case "continue":
                    return R(d({}, e), {
                        fetchStatus: "fetching"
                    });
                case "fetch":
                    return R(d(d({}, e), Es(e.data, this.options)), {
                        fetchMeta: (r = t.meta) != null ? r : null
                    });
                case "success":
                    return d(R(d({}, e), {
                        data: t.data,
                        dataUpdateCount: e.dataUpdateCount + 1,
                        dataUpdatedAt: (a = t.dataUpdatedAt) != null ? a : Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success"
                    }), !t.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    });
                case "error":
                    const n = t.error;
                    return ve(n) && n.revert && i(this, _t) ? R(d({}, i(this, _t)), {
                        fetchStatus: "idle"
                    }) : R(d({}, e), {
                        error: n,
                        errorUpdateCount: e.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: e.fetchFailureCount + 1,
                        fetchFailureReason: n,
                        fetchStatus: "idle",
                        status: "error"
                    });
                case "invalidate":
                    return R(d({}, e), {
                        isInvalidated: !0
                    });
                case "setState":
                    return d(d({}, e), t.state)
            }
        })(this.state), M.batch(() => {
            this.observers.forEach(e => {
                e.onQueryUpdate()
            }), i(this, V).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, os);

function Es(s, t) {
    return d({
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: gs(t.networkMode) ? "fetching" : "paused"
    }, s === void 0 && {
        error: null,
        status: "pending"
    })
}
var z, us, js = (us = class extends Ut {
        constructor(t = {}) {
            super();
            f(this, z, void 0);
            this.config = t, c(this, z, new Map)
        }
        build(t, e, r) {
            var o;
            const a = e.queryKey,
                n = (o = e.queryHash) != null ? o : qe(a, e);
            let h = this.get(n);
            return h || (h = new Vs({
                cache: this,
                queryKey: a,
                queryHash: n,
                options: t.defaultQueryOptions(e),
                state: r,
                defaultOptions: t.getQueryDefaults(a)
            }), this.add(h)), h
        }
        add(t) {
            i(this, z).has(t.queryHash) || (i(this, z).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const e = i(this, z).get(t.queryHash);
            e && (t.destroy(), e === t && i(this, z).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            M.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return i(this, z).get(t)
        }
        getAll() {
            return [...i(this, z).values()]
        }
        find(t) {
            const e = d({
                exact: !0
            }, t);
            return this.getAll().find(r => $e(e, r))
        }
        findAll(t = {}) {
            const e = this.getAll();
            return Object.keys(t).length > 0 ? e.filter(r => $e(t, r)) : e
        }
        notify(t) {
            M.batch(() => {
                this.listeners.forEach(e => {
                    e(t)
                })
            })
        }
        onFocus() {
            M.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            M.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, z = new WeakMap, us),
    $, U, yt, X, st, hs, Ns = (hs = class extends Ss {
        constructor(t) {
            super();
            f(this, X);
            f(this, $, void 0);
            f(this, U, void 0);
            f(this, yt, void 0);
            this.mutationId = t.mutationId, c(this, U, t.mutationCache), c(this, $, []), this.state = t.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: "idle",
                variables: void 0,
                submittedAt: 0
            }, this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            i(this, $).includes(t) || (i(this, $).push(t), this.clearGcTimeout(), i(this, U).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            c(this, $, i(this, $).filter(e => e !== t)), this.scheduleGc(), i(this, U).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            i(this, $).length || (this.state.status === "pending" ? this.scheduleGc() : i(this, U).remove(this))
        }
        continue () {
            var t, e;
            return (e = (t = i(this, yt)) == null ? void 0 : t.continue()) != null ? e : this.execute(this.state.variables)
        }
        execute(t) {
            return lt(this, null, function*() {
                var a, n, h, o, l, m, u, p, _, A, b, O, P, T, I, q, y, S, E, D, F;
                c(this, yt, Os({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                    onFail: (g, x) => {
                        v(this, X, st).call(this, {
                            type: "failed",
                            failureCount: g,
                            error: x
                        })
                    },
                    onPause: () => {
                        v(this, X, st).call(this, {
                            type: "pause"
                        })
                    },
                    onContinue: () => {
                        v(this, X, st).call(this, {
                            type: "continue"
                        })
                    },
                    retry: (a = this.options.retry) != null ? a : 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => i(this, U).canRun(this)
                }));
                const e = this.state.status === "pending",
                    r = !i(this, yt).canStart();
                try {
                    if (!e) {
                        v(this, X, st).call(this, {
                            type: "pending",
                            variables: t,
                            isPaused: r
                        }), yield(h = (n = i(this, U).config).onMutate) == null ? void 0 : h.call(n, t, this);
                        const x = yield(l = (o = this.options).onMutate) == null ? void 0 : l.call(o, t);
                        x !== this.state.context && v(this, X, st).call(this, {
                            type: "pending",
                            context: x,
                            variables: t,
                            isPaused: r
                        })
                    }
                    const g = yield i(this, yt).start();
                    return yield(u = (m = i(this, U).config).onSuccess) == null ? void 0 : u.call(m, g, t, this.state.context, this), yield(_ = (p = this.options).onSuccess) == null ? void 0 : _.call(p, g, t, this.state.context), yield(b = (A = i(this, U).config).onSettled) == null ? void 0 : b.call(A, g, null, this.state.variables, this.state.context, this), yield(P = (O = this.options).onSettled) == null ? void 0 : P.call(O, g, null, t, this.state.context), v(this, X, st).call(this, {
                        type: "success",
                        data: g
                    }), g
                } catch (g) {
                    try {
                        throw yield(I = (T = i(this, U).config).onError) == null ? void 0 : I.call(T, g, t, this.state.context, this), yield(y = (q = this.options).onError) == null ? void 0 : y.call(q, g, t, this.state.context), yield(E = (S = i(this, U).config).onSettled) == null ? void 0 : E.call(S, void 0, g, this.state.variables, this.state.context, this), yield(F = (D = this.options).onSettled) == null ? void 0 : F.call(D, void 0, g, t, this.state.context), g
                    } finally {
                        v(this, X, st).call(this, {
                            type: "error",
                            error: g
                        })
                    }
                } finally {
                    i(this, U).runNext(this)
                }
            })
        }
    }, $ = new WeakMap, U = new WeakMap, yt = new WeakMap, X = new WeakSet, st = function(t) {
        this.state = (e => {
            switch (t.type) {
                case "failed":
                    return R(d({}, e), {
                        failureCount: t.failureCount,
                        failureReason: t.error
                    });
                case "pause":
                    return R(d({}, e), {
                        isPaused: !0
                    });
                case "continue":
                    return R(d({}, e), {
                        isPaused: !1
                    });
                case "pending":
                    return R(d({}, e), {
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    });
                case "success":
                    return R(d({}, e), {
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    });
                case "error":
                    return R(d({}, e), {
                        data: void 0,
                        error: t.error,
                        failureCount: e.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    })
            }
        })(this.state), M.batch(() => {
            i(this, $).forEach(e => {
                e.onMutationUpdate(t)
            }), i(this, U).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, hs),
    G, Nt, cs, Bs = (cs = class extends Ut {
        constructor(t = {}) {
            super();
            f(this, G, void 0);
            f(this, Nt, void 0);
            this.config = t, c(this, G, new Map), c(this, Nt, Date.now())
        }
        build(t, e, r) {
            const a = new Ns({
                mutationCache: this,
                mutationId: ++ne(this, Nt)._,
                options: t.defaultMutationOptions(e),
                state: r
            });
            return this.add(a), a
        }
        add(t) {
            var a;
            const e = oe(t),
                r = (a = i(this, G).get(e)) != null ? a : [];
            r.push(t), i(this, G).set(e, r), this.notify({
                type: "added",
                mutation: t
            })
        }
        remove(t) {
            var r;
            const e = oe(t);
            if (i(this, G).has(e)) {
                const a = (r = i(this, G).get(e)) == null ? void 0 : r.filter(n => n !== t);
                a && (a.length === 0 ? i(this, G).delete(e) : i(this, G).set(e, a))
            }
            this.notify({
                type: "removed",
                mutation: t
            })
        }
        canRun(t) {
            var r;
            const e = (r = i(this, G).get(oe(t))) == null ? void 0 : r.find(a => a.state.status === "pending");
            return !e || e === t
        }
        runNext(t) {
            var r, a;
            const e = (r = i(this, G).get(oe(t))) == null ? void 0 : r.find(n => n !== t && n.state.isPaused);
            return (a = e == null ? void 0 : e.continue()) != null ? a : Promise.resolve()
        }
        clear() {
            M.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        getAll() {
            return [...i(this, G).values()].flat()
        }
        find(t) {
            const e = d({
                exact: !0
            }, t);
            return this.getAll().find(r => Xe(e, r))
        }
        findAll(t = {}) {
            return this.getAll().filter(e => Xe(t, e))
        }
        notify(t) {
            M.batch(() => {
                this.listeners.forEach(e => {
                    e(t)
                })
            })
        }
        resumePausedMutations() {
            const t = this.getAll().filter(e => e.state.isPaused);
            return M.batch(() => Promise.all(t.map(e => e.continue().catch(j))))
        }
    }, G = new WeakMap, Nt = new WeakMap, cs);

function oe(s) {
    var t, e;
    return (e = (t = s.options.scope) == null ? void 0 : t.id) != null ? e : String(s.mutationId)
}

function Ws(s) {
    return {
        onFetch: (t, e) => {
            const r = () => lt(this, null, function*() {
                var A, b, O, P, T, I;
                const a = t.options,
                    n = (O = (b = (A = t.fetchOptions) == null ? void 0 : A.meta) == null ? void 0 : b.fetchMore) == null ? void 0 : O.direction,
                    h = ((P = t.state.data) == null ? void 0 : P.pages) || [],
                    o = ((T = t.state.data) == null ? void 0 : T.pageParams) || [],
                    l = {
                        pages: [],
                        pageParams: []
                    };
                let m = !1;
                const u = vs(t.options, t.fetchOptions),
                    p = (q, y, S) => lt(this, null, function*() {
                        if (m) return Promise.reject();
                        if (y == null && q.pages.length) return Promise.resolve(q);
                        const E = {
                            queryKey: t.queryKey,
                            pageParam: y,
                            direction: S ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        var D;
                        D = E, Object.defineProperty(D, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
                                m = !0
                            }), t.signal)
                        });
                        const F = yield u(E), {
                            maxPages: g
                        } = t.options, x = S ? Hs : Ks;
                        return {
                            pages: x(q.pages, F, g),
                            pageParams: x(q.pageParams, y, g)
                        }
                    });
                let _;
                if (n && h.length) {
                    const q = n === "backward",
                        y = {
                            pages: h,
                            pageParams: o
                        },
                        S = (q ? zs : Ze)(a, y);
                    _ = yield p(y, S, q)
                } else {
                    _ = yield p(l, (I = o[0]) != null ? I : a.initialPageParam);
                    const q = s != null ? s : h.length;
                    for (let y = 1; y < q; y++) {
                        const S = Ze(a, _);
                        _ = yield p(_, S)
                    }
                }
                return _
            });
            t.options.persister ? t.fetchFn = () => {
                var a, n;
                return (n = (a = t.options).persister) == null ? void 0 : n.call(a, r, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, e)
            } : t.fetchFn = r
        }
    }
}

function Ze(s, {
    pages: t,
    pageParams: e
}) {
    const r = t.length - 1;
    return s.getNextPageParam(t[r], t, e[r], e)
}

function zs(s, {
    pages: t,
    pageParams: e
}) {
    var r;
    return (r = s.getPreviousPageParam) == null ? void 0 : r.call(s, t[0], t, e[0], e)
}
var C, at, nt, Ct, At, ot, Tt, qt, ls, $s = (ls = class {
        constructor(s = {}) {
            f(this, C, void 0);
            f(this, at, void 0);
            f(this, nt, void 0);
            f(this, Ct, void 0);
            f(this, At, void 0);
            f(this, ot, void 0);
            f(this, Tt, void 0);
            f(this, qt, void 0);
            c(this, C, s.queryCache || new js), c(this, at, s.mutationCache || new Bs), c(this, nt, s.defaultOptions || {}), c(this, Ct, new Map), c(this, At, new Map), c(this, ot, 0)
        }
        mount() {
            ne(this, ot)._++, i(this, ot) === 1 && (c(this, Tt, Fe.subscribe(s => lt(this, null, function*() {
                s && (yield this.resumePausedMutations(), i(this, C).onFocus())
            }))), c(this, qt, le.subscribe(s => lt(this, null, function*() {
                s && (yield this.resumePausedMutations(), i(this, C).onOnline())
            }))))
        }
        unmount() {
            var s, t;
            ne(this, ot)._--, i(this, ot) === 0 && ((s = i(this, Tt)) == null || s.call(this), c(this, Tt, void 0), (t = i(this, qt)) == null || t.call(this), c(this, qt, void 0))
        }
        isFetching(s) {
            return i(this, C).findAll(R(d({}, s), {
                fetchStatus: "fetching"
            })).length
        }
        isMutating(s) {
            return i(this, at).findAll(R(d({}, s), {
                status: "pending"
            })).length
        }
        getQueryData(s) {
            var e;
            const t = this.defaultQueryOptions({
                queryKey: s
            });
            return (e = i(this, C).get(t.queryHash)) == null ? void 0 : e.state.data
        }
        ensureQueryData(s) {
            const t = this.getQueryData(s.queryKey);
            if (t === void 0) return this.fetchQuery(s); {
                const e = this.defaultQueryOptions(s),
                    r = i(this, C).build(this, e);
                return s.revalidateIfStale && r.isStaleByTime(Et(e.staleTime, r)) && this.prefetchQuery(e), Promise.resolve(t)
            }
        }
        getQueriesData(s) {
            return i(this, C).findAll(s).map(({
                queryKey: t,
                state: e
            }) => [t, e.data])
        }
        setQueryData(s, t, e) {
            const r = this.defaultQueryOptions({
                    queryKey: s
                }),
                a = i(this, C).get(r.queryHash),
                n = a == null ? void 0 : a.state.data,
                h = function(o, l) {
                    return typeof o == "function" ? o(l) : o
                }(t, n);
            if (h !== void 0) return i(this, C).build(this, r).setData(h, R(d({}, e), {
                manual: !0
            }))
        }
        setQueriesData(s, t, e) {
            return M.batch(() => i(this, C).findAll(s).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, e)]))
        }
        getQueryState(s) {
            var e;
            const t = this.defaultQueryOptions({
                queryKey: s
            });
            return (e = i(this, C).get(t.queryHash)) == null ? void 0 : e.state
        }
        removeQueries(s) {
            const t = i(this, C);
            M.batch(() => {
                t.findAll(s).forEach(e => {
                    t.remove(e)
                })
            })
        }
        resetQueries(s, t) {
            const e = i(this, C),
                r = d({
                    type: "active"
                }, s);
            return M.batch(() => (e.findAll(s).forEach(a => {
                a.reset()
            }), this.refetchQueries(r, t)))
        }
        cancelQueries(s = {}, t = {}) {
            const e = d({
                    revert: !0
                }, t),
                r = M.batch(() => i(this, C).findAll(s).map(a => a.cancel(e)));
            return Promise.all(r).then(j).catch(j)
        }
        invalidateQueries(s = {}, t = {}) {
            return M.batch(() => {
                var r, a;
                if (i(this, C).findAll(s).forEach(n => {
                        n.invalidate()
                    }), s.refetchType === "none") return Promise.resolve();
                const e = R(d({}, s), {
                    type: (a = (r = s.refetchType) != null ? r : s.type) != null ? a : "active"
                });
                return this.refetchQueries(e, t)
            })
        }
        refetchQueries(s = {}, t) {
            var a;
            const e = R(d({}, t), {
                    cancelRefetch: (a = t == null ? void 0 : t.cancelRefetch) != null ? a : !0
                }),
                r = M.batch(() => i(this, C).findAll(s).filter(n => !n.isDisabled()).map(n => {
                    let h = n.fetch(void 0, e);
                    return e.throwOnError || (h = h.catch(j)), n.state.fetchStatus === "paused" ? Promise.resolve() : h
                }));
            return Promise.all(r).then(j)
        }
        fetchQuery(s) {
            const t = this.defaultQueryOptions(s);
            t.retry === void 0 && (t.retry = !1);
            const e = i(this, C).build(this, t);
            return e.isStaleByTime(Et(t.staleTime, e)) ? e.fetch(t) : Promise.resolve(e.state.data)
        }
        prefetchQuery(s) {
            return this.fetchQuery(s).then(j).catch(j)
        }
        fetchInfiniteQuery(s) {
            return s.behavior = Ws(s.pages), this.fetchQuery(s)
        }
        prefetchInfiniteQuery(s) {
            return this.fetchInfiniteQuery(s).then(j).catch(j)
        }
        resumePausedMutations() {
            return le.isOnline() ? i(this, at).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return i(this, C)
        }
        getMutationCache() {
            return i(this, at)
        }
        getDefaultOptions() {
            return i(this, nt)
        }
        setDefaultOptions(s) {
            c(this, nt, s)
        }
        setQueryDefaults(s, t) {
            i(this, Ct).set(Ot(s), {
                queryKey: s,
                defaultOptions: t
            })
        }
        getQueryDefaults(s) {
            const t = [...i(this, Ct).values()];
            let e = {};
            return t.forEach(r => {
                Vt(s, r.queryKey) && (e = d(d({}, e), r.defaultOptions))
            }), e
        }
        setMutationDefaults(s, t) {
            i(this, At).set(Ot(s), {
                mutationKey: s,
                defaultOptions: t
            })
        }
        getMutationDefaults(s) {
            const t = [...i(this, At).values()];
            let e = {};
            return t.forEach(r => {
                Vt(s, r.mutationKey) && (e = d(d({}, e), r.defaultOptions))
            }), e
        }
        defaultQueryOptions(s) {
            if (s._defaulted) return s;
            const t = R(d(d(d({}, i(this, nt).queries), this.getQueryDefaults(s.queryKey)), s), {
                _defaulted: !0
            });
            return t.queryHash || (t.queryHash = qe(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === ms && (t.enabled = !1), t
        }
        defaultMutationOptions(s) {
            return s != null && s._defaulted ? s : R(d(d(d({}, i(this, nt).mutations), (s == null ? void 0 : s.mutationKey) && this.getMutationDefaults(s.mutationKey)), s), {
                _defaulted: !0
            })
        }
        clear() {
            i(this, C).clear(), i(this, at).clear()
        }
    }, C = new WeakMap, at = new WeakMap, nt = new WeakMap, Ct = new WeakMap, At = new WeakMap, ot = new WeakMap, Tt = new WeakMap, qt = new WeakMap, ls),
    K, w, Bt, k, mt, Ft, J, Wt, Lt, Mt, vt, gt, ut, It, bt, Ht, zt, Ee, $t, we, Xt, Pe, Jt, Re, Yt, De, Zt, _e, te, Ce, fe, ws, ds, Xs = (ds = class extends Ut {
        constructor(t, e) {
            super();
            f(this, bt);
            f(this, zt);
            f(this, $t);
            f(this, Xt);
            f(this, Jt);
            f(this, Yt);
            f(this, Zt);
            f(this, te);
            f(this, fe);
            f(this, K, void 0);
            f(this, w, void 0);
            f(this, Bt, void 0);
            f(this, k, void 0);
            f(this, mt, void 0);
            f(this, Ft, void 0);
            f(this, J, void 0);
            f(this, Wt, void 0);
            f(this, Lt, void 0);
            f(this, Mt, void 0);
            f(this, vt, void 0);
            f(this, gt, void 0);
            f(this, ut, void 0);
            f(this, It, new Set);
            this.options = e, c(this, K, t), c(this, J, null), this.bindMethods(), this.setOptions(e)
        }
        bindMethods() {
            this.refetch = this.refetch.bind(this)
        }
        onSubscribe() {
            this.listeners.size === 1 && (i(this, w).addObserver(this), ts(i(this, w), this.options) ? v(this, bt, Ht).call(this) : this.updateResult(), v(this, Jt, Re).call(this))
        }
        onUnsubscribe() {
            this.hasListeners() || this.destroy()
        }
        shouldFetchOnReconnect() {
            return Ae(i(this, w), this.options, this.options.refetchOnReconnect)
        }
        shouldFetchOnWindowFocus() {
            return Ae(i(this, w), this.options, this.options.refetchOnWindowFocus)
        }
        destroy() {
            this.listeners = new Set, v(this, Yt, De).call(this), v(this, Zt, _e).call(this), i(this, w).removeObserver(this)
        }
        setOptions(t, e) {
            const r = this.options,
                a = i(this, w);
            if (this.options = i(this, K).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof B(this.options.enabled, i(this, w)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
            v(this, te, Ce).call(this), i(this, w).setOptions(this.options), r._defaulted && !ue(this.options, r) && i(this, K).getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: i(this, w),
                observer: this
            });
            const n = this.hasListeners();
            n && es(i(this, w), a, this.options, r) && v(this, bt, Ht).call(this), this.updateResult(e), !n || i(this, w) === a && B(this.options.enabled, i(this, w)) === B(r.enabled, i(this, w)) && Et(this.options.staleTime, i(this, w)) === Et(r.staleTime, i(this, w)) || v(this, zt, Ee).call(this);
            const h = v(this, $t, we).call(this);
            !n || i(this, w) === a && B(this.options.enabled, i(this, w)) === B(r.enabled, i(this, w)) && h === i(this, ut) || v(this, Xt, Pe).call(this, h)
        }
        getOptimisticResult(t) {
            const e = i(this, K).getQueryCache().build(i(this, K), t),
                r = this.createResult(e, t);
            return function(a, n) {
                return !ue(a.getCurrentResult(), n)
            }(this, r) && (c(this, k, r), c(this, Ft, this.options), c(this, mt, i(this, w).state)), r
        }
        getCurrentResult() {
            return i(this, k)
        }
        trackResult(t, e) {
            const r = {};
            return Object.keys(t).forEach(a => {
                Object.defineProperty(r, a, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackProp(a), e == null || e(a), t[a])
                })
            }), r
        }
        trackProp(t) {
            i(this, It).add(t)
        }
        getCurrentQuery() {
            return i(this, w)
        }
        refetch(e = {}) {
            var t = Kt(e, []);
            return this.fetch(d({}, t))
        }
        fetchOptimistic(t) {
            const e = i(this, K).defaultQueryOptions(t),
                r = i(this, K).getQueryCache().build(i(this, K), e);
            return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, e))
        }
        fetch(t) {
            var e;
            return v(this, bt, Ht).call(this, R(d({}, t), {
                cancelRefetch: (e = t.cancelRefetch) != null ? e : !0
            })).then(() => (this.updateResult(), i(this, k)))
        }
        createResult(t, e) {
            var S;
            const r = i(this, w),
                a = this.options,
                n = i(this, k),
                h = i(this, mt),
                o = i(this, Ft),
                l = t !== r ? t.state : i(this, Bt),
                {
                    state: m
                } = t;
            let u, p = d({}, m),
                _ = !1;
            if (e._optimisticResults) {
                const E = this.hasListeners(),
                    D = !E && ts(t, e),
                    F = E && es(t, r, e, a);
                (D || F) && (p = d(d({}, p), Es(m.data, t.options))), e._optimisticResults === "isRestoring" && (p.fetchStatus = "idle")
            }
            let {
                error: A,
                errorUpdatedAt: b,
                status: O
            } = p;
            if (e.select && p.data !== void 0)
                if (n && p.data === (h == null ? void 0 : h.data) && e.select === i(this, Wt)) u = i(this, Lt);
                else try {
                    c(this, Wt, e.select), u = e.select(p.data), u = Se(n == null ? void 0 : n.data, u, e), c(this, Lt, u), c(this, J, null)
                } catch (E) {
                    c(this, J, E)
                } else u = p.data;
            if (e.placeholderData !== void 0 && u === void 0 && O === "pending") {
                let E;
                if (n != null && n.isPlaceholderData && e.placeholderData === (o == null ? void 0 : o.placeholderData)) E = n.data;
                else if (E = typeof e.placeholderData == "function" ? e.placeholderData((S = i(this, Mt)) == null ? void 0 : S.state.data, i(this, Mt)) : e.placeholderData, e.select && E !== void 0) try {
                    E = e.select(E), c(this, J, null)
                } catch (D) {
                    c(this, J, D)
                }
                E !== void 0 && (O = "success", u = Se(n == null ? void 0 : n.data, E, e), _ = !0)
            }
            i(this, J) && (A = i(this, J), u = i(this, Lt), b = Date.now(), O = "error");
            const P = p.fetchStatus === "fetching",
                T = O === "pending",
                I = O === "error",
                q = T && P,
                y = u !== void 0;
            return {
                status: O,
                fetchStatus: p.fetchStatus,
                isPending: T,
                isSuccess: O === "success",
                isError: I,
                isInitialLoading: q,
                isLoading: q,
                data: u,
                dataUpdatedAt: p.dataUpdatedAt,
                error: A,
                errorUpdatedAt: b,
                failureCount: p.fetchFailureCount,
                failureReason: p.fetchFailureReason,
                errorUpdateCount: p.errorUpdateCount,
                isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
                isFetchedAfterMount: p.dataUpdateCount > l.dataUpdateCount || p.errorUpdateCount > l.errorUpdateCount,
                isFetching: P,
                isRefetching: P && !T,
                isLoadingError: I && !y,
                isPaused: p.fetchStatus === "paused",
                isPlaceholderData: _,
                isRefetchError: I && y,
                isStale: Le(t, e),
                refetch: this.refetch
            }
        }
        updateResult(t) {
            const e = i(this, k),
                r = this.createResult(i(this, w), this.options);
            if (c(this, mt, i(this, w).state), c(this, Ft, this.options), i(this, mt).data !== void 0 && c(this, Mt, i(this, w)), ue(r, e)) return;
            c(this, k, r);
            const a = {};
            (t == null ? void 0 : t.listeners) !== !1 && (() => {
                if (!e) return !0;
                const {
                    notifyOnChangeProps: n
                } = this.options, h = typeof n == "function" ? n() : n;
                if (h === "all" || !h && !i(this, It).size) return !0;
                const o = new Set(h != null ? h : i(this, It));
                return this.options.throwOnError && o.add("error"), Object.keys(i(this, k)).some(l => {
                    const m = l;
                    return i(this, k)[m] !== e[m] && o.has(m)
                })
            })() && (a.listeners = !0), v(this, fe, ws).call(this, d(d({}, a), t))
        }
        onQueryUpdate() {
            this.updateResult(), this.hasListeners() && v(this, Jt, Re).call(this)
        }
    }, K = new WeakMap, w = new WeakMap, Bt = new WeakMap, k = new WeakMap, mt = new WeakMap, Ft = new WeakMap, J = new WeakMap, Wt = new WeakMap, Lt = new WeakMap, Mt = new WeakMap, vt = new WeakMap, gt = new WeakMap, ut = new WeakMap, It = new WeakMap, bt = new WeakSet, Ht = function(t) {
        v(this, te, Ce).call(this);
        let e = i(this, w).fetch(this.options, t);
        return t != null && t.throwOnError || (e = e.catch(j)), e
    }, zt = new WeakSet, Ee = function() {
        v(this, Yt, De).call(this);
        const t = Et(this.options.staleTime, i(this, w));
        if (Qt || i(this, k).isStale || !be(t)) return;
        const e = ps(i(this, k).dataUpdatedAt, t) + 1;
        c(this, vt, setTimeout(() => {
            i(this, k).isStale || this.updateResult()
        }, e))
    }, $t = new WeakSet, we = function() {
        var t;
        return (t = typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(i(this, w)) : this.options.refetchInterval) != null ? t : !1
    }, Xt = new WeakSet, Pe = function(t) {
        v(this, Zt, _e).call(this), c(this, ut, t), !Qt && B(this.options.enabled, i(this, w)) !== !1 && be(i(this, ut)) && i(this, ut) !== 0 && c(this, gt, setInterval(() => {
            (this.options.refetchIntervalInBackground || Fe.isFocused()) && v(this, bt, Ht).call(this)
        }, i(this, ut)))
    }, Jt = new WeakSet, Re = function() {
        v(this, zt, Ee).call(this), v(this, Xt, Pe).call(this, v(this, $t, we).call(this))
    }, Yt = new WeakSet, De = function() {
        i(this, vt) && (clearTimeout(i(this, vt)), c(this, vt, void 0))
    }, Zt = new WeakSet, _e = function() {
        i(this, gt) && (clearInterval(i(this, gt)), c(this, gt, void 0))
    }, te = new WeakSet, Ce = function() {
        const t = i(this, K).getQueryCache().build(i(this, K), this.options);
        if (t === i(this, w)) return;
        const e = i(this, w);
        c(this, w, t), c(this, Bt, t.state), this.hasListeners() && (e == null || e.removeObserver(this), t.addObserver(this))
    }, fe = new WeakSet, ws = function(t) {
        M.batch(() => {
            t.listeners && this.listeners.forEach(e => {
                e(i(this, k))
            }), i(this, K).getQueryCache().notify({
                query: i(this, w),
                type: "observerResultsUpdated"
            })
        })
    }, ds);

function ts(s, t) {
    return function(e, r) {
        return B(r.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && r.retryOnMount === !1)
    }(s, t) || s.state.data !== void 0 && Ae(s, t, t.refetchOnMount)
}

function Ae(s, t, e) {
    if (B(t.enabled, s) !== !1) {
        const r = typeof e == "function" ? e(s) : e;
        return r === "always" || r !== !1 && Le(s, t)
    }
    return !1
}

function es(s, t, e, r) {
    return (s !== t || B(r.enabled, s) === !1) && (!e.suspense || s.state.status !== "error") && Le(s, e)
}

function Le(s, t) {
    return B(t.enabled, s) !== !1 && s.isStaleByTime(Et(t.staleTime, s))
}
var ht, ct, H, Z, xt, he, ee, Te, fs, Js = (fs = class extends Ut {
    constructor(t, e) {
        super();
        f(this, xt);
        f(this, ee);
        f(this, ht, void 0);
        f(this, ct, void 0);
        f(this, H, void 0);
        f(this, Z, void 0);
        c(this, ht, t), this.setOptions(e), this.bindMethods(), v(this, xt, he).call(this)
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
    }
    setOptions(t) {
        var r;
        const e = this.options;
        this.options = i(this, ht).defaultMutationOptions(t), ue(this.options, e) || i(this, ht).getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: i(this, H),
            observer: this
        }), e != null && e.mutationKey && this.options.mutationKey && Ot(e.mutationKey) !== Ot(this.options.mutationKey) ? this.reset() : ((r = i(this, H)) == null ? void 0 : r.state.status) === "pending" && i(this, H).setOptions(this.options)
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = i(this, H)) == null || t.removeObserver(this))
    }
    onMutationUpdate(t) {
        v(this, xt, he).call(this), v(this, ee, Te).call(this, t)
    }
    getCurrentResult() {
        return i(this, ct)
    }
    reset() {
        var t;
        (t = i(this, H)) == null || t.removeObserver(this), c(this, H, void 0), v(this, xt, he).call(this), v(this, ee, Te).call(this)
    }
    mutate(t, e) {
        var r;
        return c(this, Z, e), (r = i(this, H)) == null || r.removeObserver(this), c(this, H, i(this, ht).getMutationCache().build(i(this, ht), this.options)), i(this, H).addObserver(this), i(this, H).execute(t)
    }
}, ht = new WeakMap, ct = new WeakMap, H = new WeakMap, Z = new WeakMap, xt = new WeakSet, he = function() {
    var e, r;
    const t = (r = (e = i(this, H)) == null ? void 0 : e.state) != null ? r : {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
    c(this, ct, R(d({}, t), {
        isPending: t.status === "pending",
        isSuccess: t.status === "success",
        isError: t.status === "error",
        isIdle: t.status === "idle",
        mutate: this.mutate,
        reset: this.reset
    }))
}, ee = new WeakSet, Te = function(t) {
    M.batch(() => {
        var e, r, a, n, h, o, l, m;
        if (i(this, Z) && this.hasListeners()) {
            const u = i(this, ct).variables,
                p = i(this, ct).context;
            (t == null ? void 0 : t.type) === "success" ? ((r = (e = i(this, Z)).onSuccess) == null || r.call(e, t.data, u, p), (n = (a = i(this, Z)).onSettled) == null || n.call(a, t.data, null, u, p)) : (t == null ? void 0 : t.type) === "error" && ((o = (h = i(this, Z)).onError) == null || o.call(h, t.error, u, p), (m = (l = i(this, Z)).onSettled) == null || m.call(l, void 0, t.error, u, p))
        }
        this.listeners.forEach(u => {
            u(i(this, ct))
        })
    })
}, fs);

function Ys(s) {
    return s
}
const Zs = globalThis._bc,
    {
        $DEVCOMP: Mo,
        $PROXY: Io,
        $TRACK: xo,
        DEV: Qo,
        ErrorBoundary: Uo,
        For: ko,
        Index: Ko,
        Match: Ho,
        Show: Go,
        Suspense: Vo,
        SuspenseList: jo,
        Switch: No,
        batch: Bo,
        cancelCallback: Wo,
        catchError: zo,
        children: $o,
        createComponent: Xo,
        createComputed: Gt,
        createContext: Ps,
        createDeferred: Jo,
        createEffect: Yo,
        createMemo: de,
        createReaction: Zo,
        createRenderEffect: ti,
        createResource: ei,
        createRoot: tu,
        createSelector: eu,
        createSignal: si,
        createUniqueId: su,
        enableExternalSource: iu,
        enableHydration: ru,
        enableScheduling: au,
        equalFn: nu,
        from: ou,
        getListener: uu,
        getOwner: hu,
        indexArray: cu,
        lazy: lu,
        mapArray: du,
        mergeProps: fu,
        observable: pu,
        on: ce,
        onCleanup: Me,
        onError: yu,
        onMount: mu,
        requestCallback: vu,
        resetErrorBoundaries: gu,
        runWithOwner: bu,
        sharedConfig: Ou,
        splitProps: Su,
        startTransition: Eu,
        untrack: wu,
        useContext: Rs,
        useTransition: Pu
    } = Zs.dxzurp,
    ii = globalThis._bc,
    {
        $RAW: Ru,
        DEV: Du,
        createMutable: _u,
        createStore: Ds,
        modifyMutable: Cu,
        produce: Au,
        reconcile: ri,
        unwrap: _s
    } = ii.inqq9w;
var Cs = Ps(void 0),
    As = s => {
        if (s) return s;
        const t = Rs(Cs);
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t()
    },
    ai = s => (ti(t => (t == null || t(), s.client.mount(), s.client.unmount.bind(s.client))), Me(() => s.client.unmount()), ge(Cs.Provider, {
        value: () => s.client,
        get children() {
            return s.children
        }
    }));

function Ts(s, t) {
    return typeof s == "function" ? s(...t) : !!s
}

function ni() {}
var qs = Ps(() => !1),
    oi = () => Rs(qs);
qs.Provider;
var ss = (s, t) => {
    if (!St) return t;
    const e = R(d({}, _s(t)), {
        refetch: void 0
    });
    return "fetchNextPage" in t && (e.fetchNextPage = void 0, e.fetchPreviousPage = void 0), e.hydrationData = d({
        state: s.state,
        queryKey: s.queryKey,
        queryHash: s.queryHash
    }, s.meta && {
        meta: s.meta
    }), e
};

function ui(s, t, e) {
    const r = de(() => As(e == null ? void 0 : e())),
        a = oi();
    let n = !1;
    const h = de(() => {
            const y = r().defaultQueryOptions(s());
            return y._optimisticResults = a() ? "isRestoring" : "optimistic", y.structuralSharing = !1, St && (y.retry = !1, y.throwOnError = !0), y
        }),
        o = h(),
        [l, m] = si(new t(r(), h()));
    let u = l().getOptimisticResult(h());
    const [p, _] = Ds(u), A = () => {
        n && (P == null || P(), n = !1)
    }, b = () => l().subscribe(y => {
        u = y, queueMicrotask(() => q())
    });

    function O(y) {
        const S = l().options,
            E = S.reconcile;
        _(D => function(F, g, x) {
            if (x === !1) return g;
            if (typeof x == "function") {
                const ie = x(F.data, g.data);
                return R(d({}, g), {
                    data: ie
                })
            }
            let W = g.data;
            if (F.data === void 0) try {
                W = structuredClone(W)
            } catch (ie) {}
            const se = ri(W, {
                key: x
            })(F.data);
            return R(d({}, g), {
                data: se
            })
        }(D, y, E !== void 0 && E, S.queryHash))
    }
    let P = null,
        T = null;
    const [I, {
        refetch: q
    }] = ei(() => {
        const y = l();
        return new Promise((S, E) => (T = S, St ? P = ((D, F) => l().subscribe(g => {
            M.batchCalls(() => {
                const x = l().getCurrentQuery(),
                    W = ss(x, g);
                W.isError ? (F(W.error), A()) : (D(W), A())
            })()
        }))(S, E) : P || a() || (P = b()), y.updateResult(), u.isError && !u.isFetching && !a() && Ts(y.options.throwOnError, [u.error, y.getCurrentQuery()]) ? (O(u), E(u.error)) : u.isLoading ? void O(u) : (T = null, S(ss(y.getCurrentQuery(), u)))))
    }, {
        storage: function() {
            return [() => p, y => {
                const S = _s(p);
                if (typeof y == "function" && (y = y(S)), y == null ? void 0 : y.hydrationData) {
                    const E = y,
                        {
                            hydrationData: D
                        } = E;
                    y = Kt(E, ["hydrationData"])
                }
                O(y)
            }]
        },
        get deferStream() {
            return s().deferStream
        },
        onHydrated(y, S) {
            if (S.value && "hydrationData" in S.value && function(D, F, g) {
                    var Ie, xe, Qe, Ue;
                    if (typeof F != "object" || F === null) return;
                    const x = D.getMutationCache(),
                        W = D.getQueryCache(),
                        se = (Ue = (Qe = (Ie = g == null ? void 0 : g.defaultOptions) == null ? void 0 : Ie.deserializeData) != null ? Qe : (xe = D.getDefaultOptions().hydrate) == null ? void 0 : xe.deserializeData) != null ? Ue : Ys,
                        ie = F.mutations || [],
                        Fs = F.queries || [];
                    ie.forEach(ye => {
                        var re = ye,
                            {
                                state: pe
                            } = re,
                            tt = Kt(re, ["state"]);
                        var kt, et;
                        x.build(D, d(d(d({}, (kt = D.getDefaultOptions().hydrate) == null ? void 0 : kt.mutations), (et = g == null ? void 0 : g.defaultOptions) == null ? void 0 : et.mutations), tt), pe)
                    }), Fs.forEach(({
                        queryKey: pe,
                        state: tt,
                        queryHash: ye,
                        meta: re,
                        promise: kt
                    }) => {
                        var He, Ge;
                        let et = W.get(ye);
                        const ke = tt.data === void 0 ? tt.data : se(tt.data);
                        if (et) {
                            if (et.state.dataUpdatedAt < tt.dataUpdatedAt) {
                                const Ke = tt,
                                    {
                                        fetchStatus: Ve
                                    } = Ke,
                                    Ls = Kt(Ke, ["fetchStatus"]);
                                et.setState(R(d({}, Ls), {
                                    data: ke
                                }))
                            }
                        } else et = W.build(D, R(d(d({}, (He = D.getDefaultOptions().hydrate) == null ? void 0 : He.queries), (Ge = g == null ? void 0 : g.defaultOptions) == null ? void 0 : Ge.queries), {
                            queryKey: pe,
                            queryHash: ye,
                            meta: re
                        }), R(d({}, tt), {
                            data: ke,
                            fetchStatus: "idle"
                        }));
                        if (kt) {
                            const Ve = Promise.resolve(kt).then(se);
                            et.fetch(void 0, {
                                initialPromise: Ve
                            })
                        }
                    })
                }(r(), {
                    queries: [d({}, S.value.hydrationData)]
                }), P) return;
            const E = d({}, o);
            !o.staleTime && o.initialData || !S.value || (E.refetchOnMount = !1), l().setOptions(E), O(l().getOptimisticResult(E)), P = b()
        }
    });
    return Gt(ce(r, y => {
        P && P();
        const S = new t(y, h());
        P = b(), m(S)
    }, {
        defer: !0
    })), Gt(ce(a, y => {
        y || St || q()
    }, {
        defer: !0
    })), Me(() => {
        St && I.loading ? n = !0 : (P && (P(), P = null), T && !St && (T(u), T = null))
    }), Gt(ce([l, h], ([y, S]) => {
        y.setOptions(S), O(y.getOptimisticResult(S)), q()
    }, {
        defer: !0
    })), new Proxy(p, {
        get: (y, S) => {
            var E, D;
            return S === "data" ? p.data !== void 0 ? (E = I.latest) == null ? void 0 : E.data : (D = I()) == null ? void 0 : D.data : Reflect.get(y, S)
        }
    })
}

function Tu(s, t) {
    return ui(de(() => s()), Xs, t)
}

function qu(s, t) {
    const e = de(() => As(t == null ? void 0 : t())),
        r = new Js(e(), s()),
        a = (l, m) => {
            r.mutate(l, m).catch(ni)
        },
        [n, h] = Ds(R(d({}, r.getCurrentResult()), {
            mutate: a,
            mutateAsync: r.getCurrentResult().mutate
        }));
    Gt(() => {
        r.setOptions(s())
    }), Gt(ce(() => n.status, () => {
        if (n.isError && Ts(r.options.throwOnError, [n.error])) throw n.error
    }));
    const o = r.subscribe(l => {
        h(R(d({}, l), {
            mutate: a,
            mutateAsync: l.mutate
        }))
    });
    return Me(o), n
}
const hi = new class extends $s {
        constructor(s = {}) {
            super(s)
        }
    }({
        defaultOptions: {
            queries: {
                retry: !1,
                staleTime: 6e5,
                gcTime: 12e5,
                refetchOnWindowFocus: !1
            }
        }
    }),
    Fu = Us(R(d({
        init: () => L(() =>
            import ("./init-844936fa.js"), []),
        Trading: () => L(() =>
            import ("./index-14107178.js"), ["assets/index-14107178.js", "assets/router-acbf143e.js", "assets/i18n-3675d599.js"]),
        TradingLayout: () => L(() =>
            import ("./Layout-db907133.js"), ["assets/Layout-db907133.js", "assets/LayoutTitle-2164de52.js", "assets/i18n-3675d599.js"])
    }, (is = {
        GameLayout: () => L(() =>
            import ("./Layout-e28b8942.js").then(s => s.L), ["assets/Layout-e28b8942.js", "assets/router-acbf143e.js", "assets/LayoutTitle-2164de52.js", "assets/i18n-3675d599.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/SingleBigArrow-a0315adb.js", "assets/LR7LBJN3-58796c8d.js", "assets/index-50a70d9f.js", "assets/table-996ab517.js", "assets/ImgShareSignal-5cb27291.js", "assets/Layout-d96f476d.css"]),
        SlotsGameIframe: () => L(() =>
            import ("./MobileSlotsGameIframe-5db91eb0.js"), ["assets/MobileSlotsGameIframe-5db91eb0.js", "assets/LayoutTitle-2164de52.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/Message-f1b40bc8.js", "assets/bet-guard-6806a19d.js", "assets/amount-63fd0790.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/SingleBigArrow-a0315adb.js", "assets/use-coin-format-7215be04.js", "assets/deduction-431888fc.js"]),
        ScoreGameIframe: () => L(() =>
            import ("./MobileSlotsGameIframe-56314f2d.js"), ["assets/MobileSlotsGameIframe-56314f2d.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/Message-f1b40bc8.js", "assets/bet-guard-6806a19d.js", "assets/amount-63fd0790.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/number-field-31142d3d.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/slider-34f15118.js", "assets/E53DB7BS-04a1cc17.js", "assets/SingleBigArrow-a0315adb.js", "assets/use-coin-format-7215be04.js", "assets/deduction-431888fc.js", "assets/Layout-e28b8942.js", "assets/LayoutTitle-2164de52.js", "assets/index-50a70d9f.js", "assets/table-996ab517.js", "assets/ImgShareSignal-5cb27291.js", "assets/Layout-d96f476d.css", "assets/index-d162894a.js"]),
        CreatorDetail: () => L(() =>
            import ("./CreatorDetail-1f6c84e9.js"), ["assets/CreatorDetail-1f6c84e9.js", "assets/LabelWithTooltip-63e1d5d6.js", "assets/i18n-3675d599.js", "assets/index-efa02a1e.js", "assets/tooltip-9e6dfa82.js", "assets/utils-65805dbc.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/E53DB7BS-04a1cc17.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/Tag-d96705bc.js", "assets/utils-e1e0b898.js", "assets/router-acbf143e.js", "assets/use-coin-format-7215be04.js"]),
        History: () => L(() =>
            import ("./History-887e8e8c.js"), ["assets/History-887e8e8c.js", "assets/table-996ab517.js", "assets/utils-65805dbc.js", "assets/Tag-d96705bc.js", "assets/i18n-3675d599.js", "assets/use-coin-format-7215be04.js", "assets/utils-e1e0b898.js"]),
        CopyStrategy: () => L(() =>
            import ("./CopyStrategy-d7f8ae76.js"), ["assets/CopyStrategy-d7f8ae76.js", "assets/LabelWithTooltip-63e1d5d6.js", "assets/i18n-3675d599.js", "assets/index-efa02a1e.js", "assets/tooltip-9e6dfa82.js", "assets/utils-65805dbc.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/E53DB7BS-04a1cc17.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/utils-e1e0b898.js", "assets/SA27V5YJ-a6e76733.js", "assets/amount-63fd0790.js", "assets/number-field-31142d3d.js", "assets/slider-34f15118.js", "assets/SingleBigArrow-a0315adb.js", "assets/animate.es-7d48ea54.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index.es-7f7492fe.js", "assets/router-acbf143e.js", "assets/use-coin-format-7215be04.js"]),
        HistoryDetail: () => L(() =>
            import ("./HistoryDetail-7566d010.js"), ["assets/HistoryDetail-7566d010.js", "assets/i18n-3675d599.js", "assets/LabelWithTooltip-63e1d5d6.js", "assets/index-efa02a1e.js", "assets/tooltip-9e6dfa82.js", "assets/utils-65805dbc.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/E53DB7BS-04a1cc17.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/Tag-d96705bc.js", "assets/utils-e1e0b898.js", "assets/router-acbf143e.js", "assets/use-coin-format-7215be04.js"]),
        StrategyDetail: () => L(() =>
            import ("./StrategyDetail-5a3f79a0.js"), ["assets/StrategyDetail-5a3f79a0.js", "assets/i18n-3675d599.js", "assets/LabelWithTooltip-63e1d5d6.js", "assets/index-efa02a1e.js", "assets/tooltip-9e6dfa82.js", "assets/utils-65805dbc.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/E53DB7BS-04a1cc17.js", "assets/LR7LBJN3-58796c8d.js", "assets/FN6EICGO-462990d9.js", "assets/Tag-d96705bc.js", "assets/utils-e1e0b898.js", "assets/router-acbf143e.js", "assets/use-coin-format-7215be04.js"]),
        CrashStrategyGuide: () => L(() =>
            import ("./Guide-76e7515a.js"), ["assets/Guide-76e7515a.js", "assets/BookIcon-ecca0b11.js", "assets/index-efa02a1e.js", "assets/i18n-3675d599.js"]),
        AllPlayers: () => L(() =>
            import ("./AllPlayers-1a838ece.js"), ["assets/AllPlayers-1a838ece.js", "assets/i18n-3675d599.js", "assets/router-acbf143e.js", "assets/use-coin-format-7215be04.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/index-d8e2fe13.js", "assets/amount-63fd0790.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/Layout-e28b8942.js", "assets/LayoutTitle-2164de52.js", "assets/SingleBigArrow-a0315adb.js", "assets/LR7LBJN3-58796c8d.js", "assets/index-50a70d9f.js", "assets/table-996ab517.js", "assets/ImgShareSignal-5cb27291.js", "assets/Layout-d96f476d.css", "assets/number-field-31142d3d.js", "assets/FN6EICGO-462990d9.js"]),
        Comments: () => L(() =>
            import ("./index-50a70d9f.js"), ["assets/index-50a70d9f.js", "assets/i18n-3675d599.js", "assets/user-dca4827e.js", "assets/amount-63fd0790.js", "assets/_commonjsHelpers-0f403cef.js"]),
        GameDetail: () => L(() =>
            import ("./index-d8e2fe13.js").then(s => s.i), ["assets/index-d8e2fe13.js", "assets/amount-63fd0790.js", "assets/_commonjsHelpers-0f403cef.js", "assets/i18n-3675d599.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/router-acbf143e.js", "assets/Layout-e28b8942.js", "assets/LayoutTitle-2164de52.js", "assets/SingleBigArrow-a0315adb.js", "assets/LR7LBJN3-58796c8d.js", "assets/index-50a70d9f.js", "assets/table-996ab517.js", "assets/ImgShareSignal-5cb27291.js", "assets/Layout-d96f476d.css", "assets/number-field-31142d3d.js", "assets/FN6EICGO-462990d9.js", "assets/use-coin-format-7215be04.js"]),
        ProvablyFair: () => L(() =>
            import ("./ProvablyFair-9e94ed49.js"), ["assets/ProvablyFair-9e94ed49.js", "assets/config-b7b855c3.js", "assets/i18n-3675d599.js", "assets/GameFairnessFile-8d19188e.js", "assets/GameFairnessFile-d33fb10f.css"]),
        GameDetailRedirect: () => L(() =>
            import ("./GameDetailRedirect-d05880ff.js"), ["assets/GameDetailRedirect-d05880ff.js", "assets/router-acbf143e.js", "assets/index-d8e2fe13.js", "assets/amount-63fd0790.js", "assets/_commonjsHelpers-0f403cef.js", "assets/i18n-3675d599.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/Layout-e28b8942.js", "assets/LayoutTitle-2164de52.js", "assets/SingleBigArrow-a0315adb.js", "assets/LR7LBJN3-58796c8d.js", "assets/index-50a70d9f.js", "assets/table-996ab517.js", "assets/ImgShareSignal-5cb27291.js", "assets/Layout-d96f476d.css", "assets/number-field-31142d3d.js", "assets/FN6EICGO-462990d9.js", "assets/use-coin-format-7215be04.js"])
    }, Object.entries(is).reduce((s, [t, e]) => {
        var r;
        return /^[A-Z]/.test(t) && (s[t] = (r = e, () => lt(void 0, null, function*() {
            const a = (yield r()).default;
            return {
                default: n => ge(ai, {
                    client: hi,
                    get children() {
                        return ge(a, n)
                    }
                })
            }
        }))), s
    }, {}))), {
        shareWinRegister: () => L(() =>
            import ("./shareWinRegister-f3d312da.js"), ["assets/shareWinRegister-f3d312da.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/i18n-3675d599.js", "assets/game-027ed3d6.js", "assets/use-coin-format-7215be04.js", "assets/ImgShareSignal-5cb27291.js", "assets/game-ab00b977.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/router-acbf143e.js"]),
        initFloatingGameManager: () => L(() =>
            import ("./floating-game-init-0a908d51.js"), ["assets/floating-game-init-0a908d51.js", "assets/Layout-e28b8942.js", "assets/router-acbf143e.js", "assets/LayoutTitle-2164de52.js", "assets/i18n-3675d599.js", "assets/game-ab00b977.js", "assets/SA27V5YJ-a6e76733.js", "assets/index-a8d0e4cd.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-63fd0790.js", "assets/user-dca4827e.js", "assets/utils-65805dbc.js", "assets/config-b7b855c3.js", "assets/SingleBigArrow-a0315adb.js", "assets/LR7LBJN3-58796c8d.js", "assets/index-50a70d9f.js", "assets/table-996ab517.js", "assets/ImgShareSignal-5cb27291.js", "assets/Layout-d96f476d.css"])
    }));
var is;
export {
    Oi as $, To as A, ja as B, gi as C, wi as D, za as E, wa as F, zi as G, ko as H, Rr as I, Nn as J, Ti as K, Ui as L, Wi as M, _i as N, Ds as O, Tn as P, Gt as Q, ji as R, Go as S, Ga as T, ei as U, sr as V, Bo as W, fa as X, lu as Y, Vo as Z, L as _, en as a, No as a$, Ao as a0, hu as a1, bu as a2, co as a3, So as a4, Ps as a5, Su as a6, ho as a7, su as a8, Rs as a9, Qo as aA, wu as aB, ki as aC, Ur as aD, Fr as aE, Cr as aF, zr as aG, ga as aH, Va as aI, Ya as aJ, Mr as aK, ya as aL, Di as aM, fi as aN, qo as aO, Fi as aP, Ko as aQ, fr as aR, da as aS, ia as aT, na as aU, Xo as aV, ln as aW, kr as aX, kn as aY, $o as aZ, di as a_, dr as aa, hr as ab, Oa as ac, li as ad, qu as ae, Xa as af, Ri as ag, En as ah, ai, hi as aj, St as ak, Ar as al, pr as am, lr as an, yr as ao, Ji as ap, pa as aq, tu as ar, Pa as as, jr as at, Ba as au, fu as av, ou as aw, ce as ax, Ha as ay, dn as az, vr as b, Ho as b0, Li as b1, ti as b2, xo as b3, Pu as b4, As as b5, Uo as b6, In as b7, or as b8, ma as b9, Fu as ba, si as c, Hr as d, Tu as e, Yo as f, Fa as g, Ma as h, Sr as i, mu as j, ca as k, Za as l, de as m, ge as n, Me as o, Pi as p, uo as q, oa as r, Ua as s, ra as t, Ja as u, no as v, Fo as w, Wn as x, Gn as y, vo as z
};