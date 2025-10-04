const D = "modulepreload",
    d = function(i) {
        return "/modules/wallet2/" + i
    },
    l = {},
    e = function(n, _, u) {
        if (!_ || _.length === 0) return n();
        const c = document.getElementsByTagName("link");
        return Promise.all(_.map(t => {
            if (t = d(t), t in l) return;
            l[t] = !0;
            const o = t.endsWith(".css"),
                E = o ? '[rel="stylesheet"]' : "";
            if (!!u)
                for (let a = c.length - 1; a >= 0; a--) {
                    const s = c[a];
                    if (s.href === t && (!o || s.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${t}"]${E}`)) return;
            const r = document.createElement("link");
            if (r.rel = o ? "stylesheet" : D, o || (r.as = "script", r.crossOrigin = ""), r.href = t, document.head.appendChild(r), o) return new Promise((a, s) => {
                r.addEventListener("load", a), r.addEventListener("error", () => s(new Error(`Unable to preload CSS for ${t}`)))
            })
        })).then(() => n()).catch(t => {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = t, window.dispatchEvent(o), !o.defaultPrevented) throw t
        })
    },
    m = globalThis._bc,
    {
        A: Ee,
        Accordion: De,
        ActiveProvider: de,
        App: me,
        AvatarFrame: pe,
        Badge: ve,
        Breadcrumb: ge,
        Button: Te,
        Carousel: Le,
        Checkbox: Re,
        Collapsible: Pe,
        DatePicker: Ae,
        Decimal: Ie,
        Dialog: Oe,
        DropDown: Ve,
        Each: he,
        Empty: Se,
        FlatList: ye,
        GridScrollList: Ce,
        Icon: be,
        ImageX: fe,
        Input: we,
        Intros: ke,
        KeepScroll: Be,
        Layout: We,
        LazyList: Ne,
        ListView: Me,
        Loading: xe,
        Long: Ue,
        Meta: Fe,
        MetaProvider: He,
        MultiSelect: ze,
        Notice: Ge,
        NumberInput: Ke,
        Occurrence: Qe,
        PQuery: $e,
        Pagination: je,
        Pop: qe,
        PopProvider: Xe,
        QueueRender: Je,
        Radio: Ye,
        Ref: Ze,
        Refs: et,
        ScrollView: tt,
        Scrollbar: ot,
        Select: it,
        Slider: rt,
        SmoothList: at,
        SmoothListController: st,
        Sticky: _t,
        Switch: nt,
        TMCLayout: ct,
        Tabs: lt,
        ToastProvider: ut,
        Toggle: Et,
        ToggleView: Dt,
        Tooltip: dt,
        Transition: mt,
        UserTitle: pt,
        access: vt,
        account: gt,
        accountInit: Tt,
        addUserReceiptEvent: Lt,
        animate: Rt,
        app: Pt,
        asyncQueue: At,
        authGuard: It,
        batchRouteDefinition: Ot,
        bc: Vt,
        bcdResource: ht,
        createAssets: St,
        createCallback: yt,
        createClickOutside: Ct,
        createControllableSignal: bt,
        createCountdown: ft,
        createCss: wt,
        createDisposable: kt,
        createElementSize: Bt,
        createEmitter: Wt,
        createEventListener: Nt,
        createEventListenerMap: Mt,
        createI18n: xt,
        createImgix: Ut,
        createIntersectionObserver: Ft,
        createIsMounted: Ht,
        createKeyHold: zt,
        createListTransition: Gt,
        createNoSuspense: Kt,
        createPaginationResource: Qt,
        createRemote: p,
        createResizeObserver: $t,
        createRootPool: jt,
        createScheduled: qt,
        createSingletonRoot: Xt,
        createSubRoot: Jt,
        createSwitchTransition: Yt,
        createTimer: Zt,
        createTween: eo,
        createViewportObserver: to,
        createVisibilityObserver: oo,
        createWindowSize: io,
        currentDepositResource: ro,
        cx: ao,
        debounce: so,
        deduction: _o,
        env: no,
        getAccountFrameInfo: co,
        getDepositBonusConfig: lo,
        getHttp: uo,
        getNextDepositOption: Eo,
        getNextDepositSoleOption: Do,
        getShareLinks: mo,
        getSocket: po,
        gsap: vo,
        host: go,
        initShumeiSmid: To,
        leading: Lo,
        leadingAndTrailing: Ro,
        license: Po,
        makePersisted: Ao,
        mergeRefs: Io,
        pop: Oo,
        protobuf: Vo,
        registHttpReject: ho,
        registWhiteList: So,
        requestRecaptcha: yo,
        resolveElements: Co,
        resolveFirst: bo,
        resolveRemote: fo,
        selectRedDot: wo,
        setAccount: ko,
        setEnv: Bo,
        setLang: Wo,
        setSetting: No,
        setWallet: Mo,
        setWebsite: xo,
        setting: Uo,
        storageSync: Fo,
        syncAccount: Ho,
        system: zo,
        systemUtils: Go,
        throttle: Ko,
        toast: Qo,
        until: $o,
        untilLogin: jo,
        useActiveMemo: qo,
        useBeforeLeave: Xo,
        useFlatItem: Jo,
        useGlobalComponent: Yo,
        useIsActive: Zo,
        useKeyDownEvent: ei,
        useLoginCallback: ti,
        useMeta: oi,
        useNavigate: ii,
        useNavigatePromise: ri,
        useNavigatePromiseEnter: ai,
        useReferrer: si,
        useResource: _i,
        useRouterStack: ni,
        useScrollElement: ci,
        useScrollTop: li,
        user: ui,
        utils: Ei,
        wallet: Di,
        website: di,
        withDirection: mi,
        withOccurrence: pi,
        wrUtils: vi
    } = m.fcsy,
    v = () => e(() =>
        import ("./index-f261321e.js"), ["assets/index-f261321e.js", "assets/web-6f548a65.js", "assets/SelectCurrency-5947487d.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/WalletIcon-e1615aa1.js", "assets/LocalAmountItem-78becc59.js", "assets/wallet-e0cc9464.js", "assets/store-2ed2b91e.js", "assets/groupBy-015fd9c7.js", "assets/_baseIteratee-8c1def92.js", "assets/toString-e363a117.js", "assets/_baseOrderBy-595a3993.js", "assets/orderBy-b096961c.js", "assets/partition-f74e583a.js", "assets/OTCBalance-f7678f90.js"]),
    g = () => e(() =>
        import ("./index-3fa82746.js"), ["assets/index-3fa82746.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/WalletIcon-e1615aa1.js", "assets/i18n-cc562446.js", "assets/index-7df22f7e.js"]),
    T = () => e(() =>
        import ("./AboutBcd-2049d58d.js"), ["assets/AboutBcd-2049d58d.js", "assets/web-6f548a65.js", "assets/i18n-cc562446.js", "assets/WalletIcon-e1615aa1.js", "assets/solid-js-640b7463.js"]),
    L = () => e(() =>
        import ("./AboutBc-095a5dd0.js"), ["assets/AboutBc-095a5dd0.js", "assets/web-6f548a65.js", "assets/WalletIcon-e1615aa1.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js"]),
    R = () => e(() =>
        import ("./ManageAssets-dba63607.js"), ["assets/ManageAssets-dba63607.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/WalletIcon-e1615aa1.js", "assets/i18n-cc562446.js", "assets/groupBy-015fd9c7.js", "assets/_baseIteratee-8c1def92.js", "assets/toString-e363a117.js", "assets/_baseOrderBy-595a3993.js", "assets/sortBy-71a87a86.js"]),
    P = () => e(() =>
        import ("./index-e7127162.js").then(i => i.i), ["assets/index-e7127162.js", "assets/web-6f548a65.js", "assets/Purview-23d9587d.js", "assets/router-f73ec727.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/wallet-e0cc9464.js", "assets/store-2ed2b91e.js", "assets/_baseIteratee-8c1def92.js", "assets/toString-e363a117.js", "assets/groupBy-015fd9c7.js", "assets/_baseOrderBy-595a3993.js", "assets/find-8ef689f2.js", "assets/toNumber-ccfa08a0.js", "assets/WalletIcon-e1615aa1.js", "assets/OTCVerify-0de9fc9f.js", "assets/sortBy-71a87a86.js", "assets/LabelItem-e476e3a7.js", "assets/clipboard-bd4a76ff.js", "assets/CopyInput-c38c3ed1.js", "assets/Qrcode-a56a65e3.js", "assets/api-732bfbec.js", "assets/useCommonPostPR-02a6e986.js", "assets/Loading-4c15aa7f.js", "assets/getVerifyType-777ed7b9.js", "assets/Address-5a2a03ec.js", "assets/CircleCountdown-5bb6238f.js", "assets/ErrorRest-7c12c446.js", "assets/OTCBalance-f7678f90.js", "assets/SelectCurrency-5947487d.js", "assets/LocalAmountItem-78becc59.js", "assets/orderBy-b096961c.js", "assets/partition-f74e583a.js"]),
    A = () => e(() =>
        import ("./index-f58f5035.js"), ["assets/index-f58f5035.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/WalletIcon-e1615aa1.js", "assets/i18n-cc562446.js", "assets/wallet-e0cc9464.js", "assets/store-2ed2b91e.js", "assets/Qrcode-a56a65e3.js", "assets/index-76309ede.js", "assets/Purview-23d9587d.js", "assets/router-f73ec727.js", "assets/_baseIteratee-8c1def92.js", "assets/toString-e363a117.js", "assets/groupBy-015fd9c7.js", "assets/_baseOrderBy-595a3993.js", "assets/find-8ef689f2.js", "assets/toNumber-ccfa08a0.js", "assets/OTCVerify-0de9fc9f.js", "assets/sortBy-71a87a86.js", "assets/LabelItem-e476e3a7.js", "assets/clipboard-bd4a76ff.js", "assets/Address-5a2a03ec.js", "assets/CopyInput-c38c3ed1.js", "assets/api-02cfa9ea.js", "assets/useCommonPostPR-02a6e986.js", "assets/index-7df22f7e.js", "assets/ErrorRest-7c12c446.js", "assets/Loading-4c15aa7f.js", "assets/orderBy-b096961c.js", "assets/ProgressNode-63990ed2.js", "assets/clock-5981bada.js", "assets/Utr-3e689a5b.js", "assets/SelectCurrency-5947487d.js", "assets/LocalAmountItem-78becc59.js", "assets/partition-f74e583a.js", "assets/SevenDayPayBanner-a6a113e4.js", "assets/index-903d6228.css", "assets/index-e7127162.js", "assets/api-732bfbec.js", "assets/getVerifyType-777ed7b9.js", "assets/CircleCountdown-5bb6238f.js", "assets/OTCBalance-f7678f90.js"]),
    I = () => e(() =>
        import ("./index-76309ede.js").then(i => i.j), ["assets/index-76309ede.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/Purview-23d9587d.js", "assets/router-f73ec727.js", "assets/i18n-cc562446.js", "assets/wallet-e0cc9464.js", "assets/store-2ed2b91e.js", "assets/_baseIteratee-8c1def92.js", "assets/toString-e363a117.js", "assets/groupBy-015fd9c7.js", "assets/_baseOrderBy-595a3993.js", "assets/find-8ef689f2.js", "assets/toNumber-ccfa08a0.js", "assets/WalletIcon-e1615aa1.js", "assets/OTCVerify-0de9fc9f.js", "assets/sortBy-71a87a86.js", "assets/LabelItem-e476e3a7.js", "assets/clipboard-bd4a76ff.js", "assets/Address-5a2a03ec.js", "assets/Qrcode-a56a65e3.js", "assets/CopyInput-c38c3ed1.js", "assets/api-02cfa9ea.js", "assets/useCommonPostPR-02a6e986.js", "assets/index-7df22f7e.js", "assets/ErrorRest-7c12c446.js", "assets/Loading-4c15aa7f.js", "assets/orderBy-b096961c.js", "assets/ProgressNode-63990ed2.js", "assets/clock-5981bada.js", "assets/Utr-3e689a5b.js", "assets/SelectCurrency-5947487d.js", "assets/LocalAmountItem-78becc59.js", "assets/partition-f74e583a.js", "assets/SevenDayPayBanner-a6a113e4.js", "assets/index-903d6228.css"]),
    O = () => e(() =>
        import ("./index-e271135a.js"), ["assets/index-e271135a.js", "assets/web-6f548a65.js", "assets/i18n-cc562446.js", "assets/solid-js-640b7463.js", "assets/api-e5891a50.js", "assets/useCommonPostPR-02a6e986.js", "assets/store-2ed2b91e.js", "assets/LocalAmountItem-78becc59.js", "assets/router-f73ec727.js", "assets/WalletIcon-e1615aa1.js", "assets/ErrorRest-7c12c446.js"]),
    V = () => e(() =>
        import ("./index-7af70bdc.js"), ["assets/index-7af70bdc.js", "assets/web-6f548a65.js", "assets/i18n-cc562446.js", "assets/WalletIcon-e1615aa1.js", "assets/solid-js-640b7463.js", "assets/store-2ed2b91e.js", "assets/LocalAmountItem-78becc59.js", "assets/wallet-e0cc9464.js", "assets/CircleCountdown-5bb6238f.js", "assets/router-f73ec727.js", "assets/api-f06bd871.js", "assets/useCommonPostPR-02a6e986.js", "assets/find-8ef689f2.js", "assets/_baseIteratee-8c1def92.js", "assets/toString-e363a117.js", "assets/toNumber-ccfa08a0.js"]),
    h = () => e(() =>
        import ("./index-fe0e8553.js"), ["assets/index-fe0e8553.js", "assets/web-6f548a65.js", "assets/Header-9bd5f2dd.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/store-2ed2b91e.js", "assets/Form-ea5a317b.js", "assets/router-f73ec727.js", "assets/wallet-e0cc9464.js", "assets/SelectCurrency-5947487d.js", "assets/WalletIcon-e1615aa1.js", "assets/LocalAmountItem-78becc59.js", "assets/groupBy-015fd9c7.js", "assets/_baseIteratee-8c1def92.js", "assets/toString-e363a117.js", "assets/_baseOrderBy-595a3993.js", "assets/orderBy-b096961c.js", "assets/partition-f74e583a.js"]),
    S = () => e(() =>
        import ("./DiaLogTransfer-7923f3b6.js"), ["assets/DiaLogTransfer-7923f3b6.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/Form-ea5a317b.js", "assets/router-f73ec727.js", "assets/i18n-cc562446.js", "assets/store-2ed2b91e.js", "assets/wallet-e0cc9464.js", "assets/SelectCurrency-5947487d.js", "assets/WalletIcon-e1615aa1.js", "assets/LocalAmountItem-78becc59.js", "assets/groupBy-015fd9c7.js", "assets/_baseIteratee-8c1def92.js", "assets/toString-e363a117.js", "assets/_baseOrderBy-595a3993.js", "assets/orderBy-b096961c.js", "assets/partition-f74e583a.js"]),
    y = () => e(() =>
        import ("./Interests-7e8ec949.js"), ["assets/Interests-7e8ec949.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/Table-ded283b2.js", "assets/ErrorRest-7c12c446.js", "assets/WalletIcon-e1615aa1.js", "assets/useCommonPostPR-02a6e986.js"]),
    C = () => e(() =>
        import ("./AddCard-fb54f90f.js"), ["assets/AddCard-fb54f90f.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/WalletNotice-c2f0f541.js", "assets/i18n-cc562446.js", "assets/delete_icon-f8537dce.js"]),
    b = () => e(() =>
        import ("./AddBank-e3f4acdb.js"), ["assets/AddBank-e3f4acdb.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/router-f73ec727.js", "assets/i18n-cc562446.js", "assets/delete_icon-f8537dce.js"]),
    f = () => e(() =>
        import ("./CurrencyConfig-f4cdc9b8.js"), ["assets/CurrencyConfig-f4cdc9b8.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/router-f73ec727.js"]),
    w = () => e(() =>
        import ("./index-7beb28a2.js"), ["assets/index-7beb28a2.js", "assets/web-6f548a65.js", "assets/index-12211611.js", "assets/solid-js-640b7463.js", "assets/Loading-4c15aa7f.js", "assets/Assets-7b2404d2.js", "assets/i18n-cc562446.js", "assets/index-7df22f7e.js", "assets/router-f73ec727.js", "assets/orderBy-b096961c.js", "assets/_baseOrderBy-595a3993.js", "assets/toString-e363a117.js", "assets/_baseIteratee-8c1def92.js", "assets/Table-ded283b2.js", "assets/ErrorRest-7c12c446.js", "assets/WalletIcon-e1615aa1.js", "assets/Time-0de08dce.js", "assets/toNumber-ccfa08a0.js"]),
    k = () => e(() =>
        import ("./index-6751acf2.js"), ["assets/index-6751acf2.js", "assets/web-6f548a65.js", "assets/index-12211611.js", "assets/solid-js-640b7463.js", "assets/Loading-4c15aa7f.js", "assets/Assets-7b2404d2.js", "assets/i18n-cc562446.js", "assets/index-7df22f7e.js", "assets/router-f73ec727.js", "assets/orderBy-b096961c.js", "assets/_baseOrderBy-595a3993.js", "assets/toString-e363a117.js", "assets/_baseIteratee-8c1def92.js", "assets/Time-0de08dce.js", "assets/toNumber-ccfa08a0.js", "assets/Bill-560a34d0.js", "assets/WalletIcon-e1615aa1.js", "assets/Table-ded283b2.js", "assets/ErrorRest-7c12c446.js", "assets/clipboard-bd4a76ff.js", "assets/useCommonPostPR-02a6e986.js", "assets/api-f06bd871.js", "assets/getWithdrawOrderStatus-d2077a08.js", "assets/api-732bfbec.js", "assets/index-f86f3e7e.js", "assets/getDepositOrderStatus-a31747f6.js", "assets/Utr-3e689a5b.js", "assets/CopyInput-c38c3ed1.js", "assets/Qrcode-a56a65e3.js", "assets/api-02cfa9ea.js", "assets/api-e5891a50.js", "assets/index-5faf29be.js"]),
    B = () => e(() =>
        import ("./index-839a739f.js"), ["assets/index-839a739f.js", "assets/web-6f548a65.js", "assets/index-12211611.js", "assets/solid-js-640b7463.js", "assets/Loading-4c15aa7f.js", "assets/i18n-cc562446.js", "assets/Details-7adbd285.js", "assets/Cancel-187b6ff2.js", "assets/WalletIcon-e1615aa1.js", "assets/router-f73ec727.js", "assets/Table-ded283b2.js", "assets/ErrorRest-7c12c446.js", "assets/useCommonPostPR-02a6e986.js"]),
    W = () => e(() =>
        import ("./index-839a739f.js"), ["assets/index-839a739f.js", "assets/web-6f548a65.js", "assets/index-12211611.js", "assets/solid-js-640b7463.js", "assets/Loading-4c15aa7f.js", "assets/i18n-cc562446.js", "assets/Details-7adbd285.js", "assets/Cancel-187b6ff2.js", "assets/WalletIcon-e1615aa1.js", "assets/router-f73ec727.js", "assets/Table-ded283b2.js", "assets/ErrorRest-7c12c446.js", "assets/useCommonPostPR-02a6e986.js"]),
    N = () => e(() =>
        import ("./index-b79232ff.js"), ["assets/index-b79232ff.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/router-f73ec727.js", "assets/store-fc3312fc.js", "assets/TicketInfo-4d81b7ad.js", "assets/WalletIcon-e1615aa1.js", "assets/getWithdrawOrderStatus-d2077a08.js", "assets/LabelItem-e476e3a7.js", "assets/clipboard-bd4a76ff.js", "assets/ProgressNode-63990ed2.js", "assets/Qrcode-a56a65e3.js", "assets/OTCBalance-f7678f90.js", "assets/getDepositOrderStatus-a31747f6.js", "assets/OTCVerify-0de9fc9f.js", "assets/store-2ed2b91e.js", "assets/clock-5981bada.js", "assets/WalletNotice-c2f0f541.js", "assets/SevenDayPayBanner-a6a113e4.js", "assets/api-02cfa9ea.js", "assets/useCommonPostPR-02a6e986.js"]),
    M = () => e(() =>
        import ("./index-5faf29be.js"), ["assets/index-5faf29be.js", "assets/web-6f548a65.js", "assets/i18n-cc562446.js", "assets/solid-js-640b7463.js", "assets/WalletIcon-e1615aa1.js", "assets/Loading-4c15aa7f.js", "assets/CopyInput-c38c3ed1.js", "assets/clipboard-bd4a76ff.js", "assets/router-f73ec727.js"]),
    x = () => e(() =>
        import ("./index-0c759c53.js"), ["assets/index-0c759c53.js", "assets/web-6f548a65.js", "assets/i18n-cc562446.js", "assets/solid-js-640b7463.js", "assets/router-f73ec727.js", "assets/Loading-4c15aa7f.js", "assets/TicketInfo-4d81b7ad.js", "assets/WalletIcon-e1615aa1.js", "assets/getWithdrawOrderStatus-d2077a08.js", "assets/clipboard-bd4a76ff.js", "assets/api-732bfbec.js", "assets/useCommonPostPR-02a6e986.js", "assets/ProgressNode-63990ed2.js", "assets/OTCBalance-f7678f90.js"]),
    U = () => e(() =>
        import ("./index-253c87c0.js"), ["assets/index-253c87c0.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/router-f73ec727.js"]),
    F = () => e(() =>
        import ("./index-10d44bab.js"), ["assets/index-10d44bab.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/router-f73ec727.js", "assets/Loading-4c15aa7f.js", "assets/store-2ed2b91e.js", "assets/LabelItem-e476e3a7.js", "assets/clipboard-bd4a76ff.js", "assets/WalletIcon-e1615aa1.js", "assets/getWithdrawOrderStatus-d2077a08.js", "assets/getDepositOrderStatus-a31747f6.js", "assets/index-74b75477.js", "assets/api-02cfa9ea.js", "assets/useCommonPostPR-02a6e986.js", "assets/api-732bfbec.js"]),
    H = () => e(() =>
        import ("./Details-7adbd285.js").then(i => i.D), ["assets/Details-7adbd285.js", "assets/web-6f548a65.js", "assets/Cancel-187b6ff2.js", "assets/i18n-cc562446.js", "assets/WalletIcon-e1615aa1.js", "assets/solid-js-640b7463.js", "assets/router-f73ec727.js"]),
    z = () => e(() =>
        import ("./GameList-acef849a.js"), ["assets/GameList-acef849a.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/router-f73ec727.js"]),
    G = () => e(() =>
        import ("./LinkDetail-ef08138e.js"), ["assets/LinkDetail-ef08138e.js", "assets/web-6f548a65.js", "assets/Cancel-187b6ff2.js", "assets/i18n-cc562446.js", "assets/WalletIcon-e1615aa1.js", "assets/solid-js-640b7463.js", "assets/router-f73ec727.js"]),
    K = () => e(() =>
        import ("./index-544ff388.js"), ["assets/index-544ff388.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/router-f73ec727.js", "assets/i18n-cc562446.js", "assets/index-ee5c59ef.js", "assets/store-2ed2b91e.js", "assets/Icon-4fab95ab.js", "assets/store-59603697.js"]),
    Q = () => e(() =>
        import ("./Overview-66f68e70.js"), ["assets/Overview-66f68e70.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/Chart-25cef424.js", "assets/Icon-4fab95ab.js", "assets/store-59603697.js", "assets/store-2ed2b91e.js", "assets/index-ee5c59ef.js"]),
    $ = () => e(() =>
        import ("./index-07e7490d.js"), ["assets/index-07e7490d.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/store-2ed2b91e.js", "assets/i18n-cc562446.js", "assets/Chart-25cef424.js", "assets/Icon-4fab95ab.js", "assets/store-59603697.js", "assets/index-ee5c59ef.js"]),
    j = () => e(() =>
        import ("./index-d79e3805.js"), ["assets/index-d79e3805.js", "assets/web-6f548a65.js", "assets/Header-9bd5f2dd.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/store-2ed2b91e.js", "assets/Form-ea5a317b.js", "assets/router-f73ec727.js", "assets/wallet-e0cc9464.js", "assets/SelectCurrency-5947487d.js", "assets/WalletIcon-e1615aa1.js", "assets/LocalAmountItem-78becc59.js", "assets/groupBy-015fd9c7.js", "assets/_baseIteratee-8c1def92.js", "assets/toString-e363a117.js", "assets/_baseOrderBy-595a3993.js", "assets/orderBy-b096961c.js", "assets/partition-f74e583a.js", "assets/Time-0de08dce.js", "assets/toNumber-ccfa08a0.js", "assets/Bill-560a34d0.js", "assets/Table-ded283b2.js", "assets/ErrorRest-7c12c446.js", "assets/clipboard-bd4a76ff.js", "assets/useCommonPostPR-02a6e986.js", "assets/Loading-4c15aa7f.js"]),
    q = () => e(() =>
        import ("./EntryOld-9a34609b.js"), ["assets/EntryOld-9a34609b.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/Icon-4fab95ab.js", "assets/store-59603697.js", "assets/store-2ed2b91e.js"]),
    X = () => e(() =>
        import ("./Entry-47a70d0a.js"), ["assets/Entry-47a70d0a.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/Icon-4fab95ab.js", "assets/store-59603697.js", "assets/store-2ed2b91e.js"]),
    J = () => e(() =>
        import ("./Lottery-e5a9799c.js"), ["assets/Lottery-e5a9799c.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/store-59603697.js", "assets/store-2ed2b91e.js", "assets/partition-f74e583a.js", "assets/groupBy-015fd9c7.js", "assets/_baseIteratee-8c1def92.js", "assets/toString-e363a117.js", "assets/_baseOrderBy-595a3993.js", "assets/orderBy-b096961c.js"]),
    Y = () => e(() =>
        import ("./win-list-f78cb867.js"), ["assets/win-list-f78cb867.js", "assets/web-6f548a65.js", "assets/i18n-cc562446.js", "assets/solid-js-640b7463.js", "assets/store-59603697.js", "assets/store-2ed2b91e.js"]),
    Z = () => e(() =>
        import ("./SelectCurrency-5947487d.js"), ["assets/SelectCurrency-5947487d.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/WalletIcon-e1615aa1.js", "assets/LocalAmountItem-78becc59.js", "assets/wallet-e0cc9464.js", "assets/store-2ed2b91e.js", "assets/groupBy-015fd9c7.js", "assets/_baseIteratee-8c1def92.js", "assets/toString-e363a117.js", "assets/_baseOrderBy-595a3993.js", "assets/orderBy-b096961c.js", "assets/partition-f74e583a.js"]),
    ee = () => e(() =>
        import ("./Intercept-eac7a019.js"), ["assets/Intercept-eac7a019.js", "assets/web-6f548a65.js", "assets/i18n-cc562446.js", "assets/router-f73ec727.js"]),
    te = () => e(() =>
        import ("./Verify-26daf6b3.js"), ["assets/Verify-26daf6b3.js", "assets/web-6f548a65.js", "assets/Progress-8ba911dc.js", "assets/i18n-cc562446.js", "assets/solid-js-640b7463.js"]),
    oe = () => e(() =>
        import ("./AccountVerify-a6fa9796.js"), ["assets/AccountVerify-a6fa9796.js", "assets/web-6f548a65.js", "assets/Progress-8ba911dc.js", "assets/i18n-cc562446.js", "assets/solid-js-640b7463.js"]),
    ie = () => e(() =>
        import ("./WhatDeposit-2f28260b.js"), ["assets/WhatDeposit-2f28260b.js", "assets/web-6f548a65.js", "assets/i18n-cc562446.js", "assets/solid-js-640b7463.js", "assets/router-f73ec727.js"]),
    re = () => e(() =>
        import ("./WhatWithdraw-93805bca.js"), ["assets/WhatWithdraw-93805bca.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/wallet-e0cc9464.js", "assets/store-2ed2b91e.js"]),
    ae = () => e(() =>
        import ("./WithdrawConfirm-6fae95ef.js"), ["assets/WithdrawConfirm-6fae95ef.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/router-f73ec727.js", "assets/Address-5a2a03ec.js", "assets/i18n-cc562446.js", "assets/getVerifyType-777ed7b9.js", "assets/WalletIcon-e1615aa1.js", "assets/api-732bfbec.js", "assets/useCommonPostPR-02a6e986.js"]),
    se = () => e(() =>
        import ("./WagerTasks-5f19c9c1.js"), ["assets/WagerTasks-5f19c9c1.js", "assets/web-6f548a65.js", "assets/i18n-cc562446.js", "assets/Table-ded283b2.js", "assets/solid-js-640b7463.js", "assets/ErrorRest-7c12c446.js", "assets/WalletIcon-e1615aa1.js", "assets/useCommonPostPR-02a6e986.js", "assets/Details-7adbd285.js", "assets/Cancel-187b6ff2.js", "assets/router-f73ec727.js"]),
    _e = () => e(() =>
        import ("./Info-2110afbf.js"), ["assets/Info-2110afbf.js", "assets/web-6f548a65.js", "assets/LabelItem-e476e3a7.js", "assets/solid-js-640b7463.js", "assets/clipboard-bd4a76ff.js", "assets/i18n-cc562446.js", "assets/store-fc3312fc.js", "assets/SevenDayPayBanner-a6a113e4.js", "assets/WalletIcon-e1615aa1.js", "assets/api-02cfa9ea.js", "assets/useCommonPostPR-02a6e986.js", "assets/index-f86f3e7e.js", "assets/Table-ded283b2.js", "assets/ErrorRest-7c12c446.js", "assets/getDepositOrderStatus-a31747f6.js", "assets/Utr-3e689a5b.js", "assets/CopyInput-c38c3ed1.js", "assets/Qrcode-a56a65e3.js", "assets/router-f73ec727.js"]),
    ne = () => e(() =>
        import ("./index-5dfbfd16.js"), ["assets/index-5dfbfd16.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js", "assets/store-fc3312fc.js", "assets/router-f73ec727.js", "assets/WalletIcon-e1615aa1.js", "assets/api-02cfa9ea.js", "assets/useCommonPostPR-02a6e986.js"]),
    ce = () => e(() =>
        import ("./index-01023f75.js"), ["assets/index-01023f75.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/i18n-cc562446.js"]),
    le = () => e(() =>
        import ("./index-869dbb31.js"), ["assets/index-869dbb31.js", "assets/web-6f548a65.js", "assets/solid-js-640b7463.js", "assets/router-f73ec727.js", "assets/i18n-cc562446.js", "assets/index-74b75477.js", "assets/WalletIcon-e1615aa1.js", "assets/store-2ed2b91e.js", "assets/toString-e363a117.js"]),
    gi = p({
        init: () => e(() =>
            import ("./init-ec715138.js"), []),
        Annual: ce,
        Balance: v,
        WalletLayout: g,
        DialogAboutBCD: T,
        DialogAboutBC: L,
        DialogWithdraw: P,
        DialogDeposit: I,
        DialogChannelDeposit: A,
        DialogBuyCrypto: O,
        DialogSwap: V,
        DialogVault: h,
        DialogVaultTransfer: S,
        DialogTurnover: B,
        DialogTurnover2: W,
        DialogTransaction: k,
        DialogBetHistory: w,
        DialogManageAssets: R,
        BcTokenLayout: K,
        BCTokenOverview: Q,
        BCTokenSwap: $,
        BCTokenVault: j,
        BCTokenEntry: q,
        BCTokenEnter: X,
        BCTokenLottery: J,
        BCTokenLotteryWinList: Y,
        DialogCard: C,
        DialogTransactionDepositDetail: N,
        DialogTransactionWithDrawDetail: x,
        DialogRate: U,
        DialogDraft: F,
        DialogInterests: y,
        openSelectCurrency: Z,
        DialogRollDetail: H,
        DialogRollLinkDetail: G,
        DialogBuyDetail: M,
        DialogRollGameList: z,
        DialogBank: b,
        DialogIntercept: ee,
        DialogCurrencyConfig: f,
        DialogWhatDeposit: ie,
        DialogWhatWithDraw: re,
        DialogBankVerify: oe,
        DialogCardVerify: te,
        DialogWithdrawConfirm: ae,
        DialogWagerTasks: se,
        installDepositBub: ne,
        DialogPendingHistory: _e,
        DialogChatSubmission: le
    });
export {
    Pe as $, Ee as A, Te as B, Re as C, Ie as D, Se as E, St as F, it as G, Zt as H, we as I, ro as J, Po as K, xe as L, go as M, Ke as N, ft as O, qe as P, Ei as Q, Lt as R, _t as S, dt as T, Ao as U, ko as V, Ye as W, Qt as X, di as Y, ui as Z, e as _, ct as a, mt as a0, De as a1, Ae as a2, Et as a3, ci as a4, xt as a5, Me as a6, Fo as a7, Vo as a8, Le as a9, vo as aa, io as ab, wt as ac, gi as ad, Oe as b, ao as c, Uo as d, no as e, lt as f, nt as g, Mo as h, Vt as i, uo as j, po as k, Zo as l, be as m, Dt as n, gt as o, Oo as p, Pt as q, Ve as r, Go as s, Qo as t, ii as u, ni as v, Di as w, Kt as x, Ge as y, _i as z
};