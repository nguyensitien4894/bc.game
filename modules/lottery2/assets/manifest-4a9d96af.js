var E = (l, _, i) => new Promise((d, a) => {
    var t = s => {
            try {
                n(i.next(s))
            } catch (r) {
                a(r)
            }
        },
        o = s => {
            try {
                n(i.throw(s))
            } catch (r) {
                a(r)
            }
        },
        n = s => s.done ? d(s.value) : Promise.resolve(s.value).then(t, o);
    n((i = i.apply(l, _)).next())
});
const L = "modulepreload",
    g = function(l) {
        return "/modules/lottery2/" + l
    },
    m = {},
    e = function(_, i, d) {
        if (!i || i.length === 0) return _();
        const a = document.getElementsByTagName("link");
        return Promise.all(i.map(t => {
            if (t = g(t), t in m) return;
            m[t] = !0;
            const o = t.endsWith(".css"),
                n = o ? '[rel="stylesheet"]' : "";
            if (!!d)
                for (let c = a.length - 1; c >= 0; c--) {
                    const u = a[c];
                    if (u.href === t && (!o || u.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${t}"]${n}`)) return;
            const r = document.createElement("link");
            if (r.rel = o ? "stylesheet" : L, o || (r.as = "script", r.crossOrigin = ""), r.href = t, document.head.appendChild(r), o) return new Promise((c, u) => {
                r.addEventListener("load", c), r.addEventListener("error", () => u(new Error(`Unable to preload CSS for ${t}`)))
            })
        })).then(() => _()).catch(t => {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = t, window.dispatchEvent(o), !o.defaultPrevented) throw t
        })
    },
    p = globalThis._bc,
    {
        A: q,
        Accordion: K,
        ActiveProvider: Q,
        App: $,
        AvatarFrame: j,
        Badge: J,
        Breadcrumb: X,
        Button: Y,
        Carousel: Z,
        Checkbox: ee,
        Collapsible: te,
        DatePicker: oe,
        Decimal: re,
        Dialog: ie,
        DropDown: se,
        Each: ae,
        Empty: ne,
        FlatList: ce,
        GridScrollList: le,
        Icon: _e,
        ImageX: ue,
        Input: de,
        Intros: Ee,
        KeepScroll: me,
        Layout: Le,
        LazyList: ge,
        ListView: pe,
        Loading: ve,
        Long: De,
        Meta: Re,
        MetaProvider: Pe,
        MultiSelect: ye,
        Notice: Te,
        NumberInput: Ie,
        Occurrence: Se,
        PQuery: Ae,
        Pagination: Oe,
        Pop: he,
        PopProvider: fe,
        QueueRender: be,
        Radio: Ve,
        Ref: we,
        Refs: Be,
        ScrollView: Ce,
        Scrollbar: ke,
        Select: Ne,
        Slider: Me,
        SmoothList: xe,
        SmoothListController: Fe,
        Sticky: Ge,
        Switch: Ue,
        TMCLayout: He,
        Tabs: We,
        ToastProvider: ze,
        Toggle: qe,
        ToggleView: Ke,
        Tooltip: Qe,
        Transition: $e,
        UserTitle: je,
        access: Je,
        account: Xe,
        accountInit: Ye,
        addUserReceiptEvent: Ze,
        animate: et,
        app: tt,
        asyncQueue: ot,
        authGuard: rt,
        batchRouteDefinition: it,
        bc: st,
        bcdResource: at,
        createAssets: nt,
        createCallback: ct,
        createClickOutside: lt,
        createControllableSignal: _t,
        createCountdown: ut,
        createCss: dt,
        createDisposable: Et,
        createElementSize: mt,
        createEmitter: Lt,
        createEventListener: gt,
        createEventListenerMap: pt,
        createI18n: vt,
        createImgix: Dt,
        createIntersectionObserver: Rt,
        createIsMounted: Pt,
        createKeyHold: yt,
        createListTransition: Tt,
        createNoSuspense: It,
        createPaginationResource: St,
        createRemote: v,
        createResizeObserver: At,
        createRootPool: Ot,
        createScheduled: ht,
        createSingletonRoot: ft,
        createSubRoot: bt,
        createSwitchTransition: Vt,
        createTimer: wt,
        createTween: Bt,
        createViewportObserver: Ct,
        createVisibilityObserver: kt,
        createWindowSize: Nt,
        currentDepositResource: Mt,
        cx: xt,
        debounce: Ft,
        deduction: Gt,
        env: Ut,
        getAccountFrameInfo: Ht,
        getDepositBonusConfig: Wt,
        getHttp: zt,
        getNextDepositOption: qt,
        getNextDepositSoleOption: Kt,
        getShareLinks: Qt,
        getSocket: $t,
        gsap: jt,
        host: Jt,
        initShumeiSmid: Xt,
        leading: Yt,
        leadingAndTrailing: Zt,
        license: eo,
        makePersisted: to,
        mergeRefs: oo,
        pop: ro,
        protobuf: io,
        registHttpReject: so,
        registWhiteList: ao,
        requestRecaptcha: no,
        resolveElements: co,
        resolveFirst: lo,
        resolveRemote: _o,
        selectRedDot: uo,
        setAccount: Eo,
        setEnv: mo,
        setLang: Lo,
        setSetting: go,
        setWallet: po,
        setWebsite: vo,
        setting: Do,
        storageSync: Ro,
        syncAccount: Po,
        system: yo,
        systemUtils: To,
        throttle: Io,
        toast: So,
        until: Ao,
        untilLogin: Oo,
        useActiveMemo: ho,
        useBeforeLeave: fo,
        useFlatItem: bo,
        useGlobalComponent: Vo,
        useIsActive: wo,
        useKeyDownEvent: Bo,
        useLoginCallback: Co,
        useMeta: ko,
        useNavigate: No,
        useNavigatePromise: Mo,
        useNavigatePromiseEnter: xo,
        useReferrer: Fo,
        useResource: Go,
        useRouterStack: Uo,
        useScrollElement: Ho,
        useScrollTop: Wo,
        user: zo,
        utils: qo,
        wallet: Ko,
        website: Qo,
        withDirection: $o,
        withOccurrence: jo,
        wrUtils: Jo
    } = p.fcsy,
    D = () => e(() =>
        import ("./Layout-6d5cc1f4.js"), ["assets/Layout-6d5cc1f4.js", "assets/solid-js-26bd2957.js", "assets/lottery-69be0c1b.js"]),
    R = () => e(() =>
        import ("./index-c3257afe.js"), ["assets/index-c3257afe.js", "assets/solid-js-26bd2957.js", "assets/store-de7ddcb4.js", "assets/store-2ed2b91e.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/LotterySearchResult-d761bb4e.js", "assets/PopularSectionItem-f181d0d1.js", "assets/index-f5548403.js", "assets/currency-4826aee6.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js", "assets/i18n-84cf21fb.js", "assets/debounce-f7740f4e.js", "assets/throttle-e4f3954e.js"]),
    P = () => e(() =>
        import ("./index-32a3c0c5.js"), ["assets/index-32a3c0c5.js", "assets/solid-js-26bd2957.js", "assets/i18n-84cf21fb.js", "assets/usePickNums-e3bf0792.js", "assets/LocalIcon-a94161d6.js", "assets/router-bf1daf6a.js", "assets/store-635b8129.js", "assets/store-2ed2b91e.js", "assets/lottery-69be0c1b.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/warning-3ceced5f.js", "assets/UserInfo-7a40f85b.js", "assets/AwardBall-72a69e18.js", "assets/ball-lose-white-50d77866.js", "assets/currency-4826aee6.js"]),
    y = () => e(() =>
        import ("./index-d0de536c.js"), ["assets/index-d0de536c.js", "assets/solid-js-26bd2957.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/i18n-84cf21fb.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js", "assets/LocalIcon-a94161d6.js", "assets/config-7cd50cac.js", "assets/currency-4826aee6.js", "assets/index-f5548403.js", "assets/gift-box-black-closed-1c721cc7.js", "assets/router-bf1daf6a.js", "assets/Lottery-f4a4381b.js", "assets/debounce-f7740f4e.js"]),
    T = () => e(() =>
        import ("./index-5ad90a67.js"), ["assets/index-5ad90a67.js", "assets/solid-js-26bd2957.js", "assets/store-de7ddcb4.js", "assets/store-2ed2b91e.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/LikeLotteryItem-8fcc1944.js", "assets/index-f5548403.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js", "assets/i18n-84cf21fb.js", "assets/LocalIcon-a94161d6.js", "assets/config-7cd50cac.js", "assets/throttle-e4f3954e.js", "assets/debounce-f7740f4e.js"]),
    I = () => e(() =>
        import ("./index-ecfb49d5.js"), ["assets/index-ecfb49d5.js", "assets/solid-js-26bd2957.js", "assets/PopularSectionItem-f181d0d1.js", "assets/index-f5548403.js", "assets/currency-4826aee6.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js", "assets/i18n-84cf21fb.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/router-bf1daf6a.js", "assets/store-de7ddcb4.js", "assets/store-2ed2b91e.js", "assets/config-7cd50cac.js"]),
    S = () => e(() =>
        import ("./index-19ab5d65.js"), ["assets/index-19ab5d65.js", "assets/solid-js-26bd2957.js", "assets/IndiaStateKaralaBall-5bb90bf4.js", "assets/lottery-69be0c1b.js", "assets/i18n-84cf21fb.js", "assets/store-635b8129.js", "assets/store-2ed2b91e.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/router-bf1daf6a.js", "assets/index-f5548403.js", "assets/store-de7ddcb4.js", "assets/warning-3ceced5f.js", "assets/LocalIcon-a94161d6.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/BetAmountSelect-7ad7f83e.js", "assets/Lottery-f4a4381b.js", "assets/ArrowIcon-6a21c7e4.js", "assets/SelectCartContent-7b8a782d.js", "assets/indiaState-7fce4127.js", "assets/IndiaWinningList-bf0cf6b1.js", "assets/index-32a3c0c5.js", "assets/usePickNums-e3bf0792.js", "assets/UserInfo-7a40f85b.js", "assets/AwardBall-72a69e18.js", "assets/ball-lose-white-50d77866.js", "assets/currency-4826aee6.js"]),
    A = () => e(() =>
        import ("./RecentWinnerDetailDialog-e33548a3.js"), ["assets/RecentWinnerDetailDialog-e33548a3.js", "assets/solid-js-26bd2957.js", "assets/router-bf1daf6a.js", "assets/currency-4826aee6.js", "assets/lottery-69be0c1b.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/store-635b8129.js", "assets/store-2ed2b91e.js", "assets/_Uint8Array-7783c8b7.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/i18n-84cf21fb.js"]),
    O = () => e(() =>
        import ("./MybetsDetailDialog-9d74bf56.js"), ["assets/MybetsDetailDialog-9d74bf56.js", "assets/solid-js-26bd2957.js", "assets/router-bf1daf6a.js", "assets/currency-4826aee6.js", "assets/ball-lose-white-50d77866.js", "assets/lottery-69be0c1b.js", "assets/store-635b8129.js", "assets/store-2ed2b91e.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/i18n-84cf21fb.js", "assets/LocalIcon-a94161d6.js", "assets/CoinFormat-a46d7330.js", "assets/toString-9093e562.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/ArrowIcon-6a21c7e4.js", "assets/IndiaStateKaralaBall-5bb90bf4.js", "assets/IndiaWinningList-bf0cf6b1.js", "assets/index-f5548403.js", "assets/index-d0de536c.js", "assets/config-7cd50cac.js", "assets/gift-box-black-closed-1c721cc7.js", "assets/Lottery-f4a4381b.js", "assets/debounce-f7740f4e.js"]),
    h = () => e(() =>
        import ("./SendGift-6136dc53.js"), ["assets/SendGift-6136dc53.js", "assets/solid-js-26bd2957.js", "assets/index-f5548403.js", "assets/warning-3ceced5f.js", "assets/store-2ed2b91e.js", "assets/i18n-84cf21fb.js", "assets/createSettle-ffee26b2.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/toString-9093e562.js", "assets/_Uint8Array-7783c8b7.js", "assets/ShareGift-3cae4679.js", "assets/Share-16c7953b.js", "assets/LocalIcon-a94161d6.js"]),
    f = () => e(() =>
        import ("./newUserGift-29ee2581.js"), ["assets/newUserGift-29ee2581.js", "assets/solid-js-26bd2957.js", "assets/recive_bonus-f7de831f.js", "assets/AwardBall-72a69e18.js", "assets/ball-lose-white-50d77866.js", "assets/i18n-84cf21fb.js", "assets/router-bf1daf6a.js"]),
    b = () => e(() =>
        import ("./TicketGiftHistory-f647b11b.js"), ["assets/TicketGiftHistory-f647b11b.js", "assets/solid-js-26bd2957.js", "assets/index-f5548403.js", "assets/ShareGift-3cae4679.js", "assets/Share-16c7953b.js", "assets/i18n-84cf21fb.js", "assets/LocalIcon-a94161d6.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/CoinFormat-a46d7330.js"]),
    V = () => e(() =>
        import ("./Seed-83f759f8.js"), ["assets/Seed-83f759f8.js", "assets/solid-js-26bd2957.js", "assets/router-bf1daf6a.js", "assets/Share-16c7953b.js", "assets/i18n-84cf21fb.js", "assets/LocalIcon-a94161d6.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js"]),
    w = () => e(() =>
        import ("./Faq-199ce48c.js"), ["assets/Faq-199ce48c.js", "assets/solid-js-26bd2957.js", "assets/i18n-84cf21fb.js", "assets/router-bf1daf6a.js"]),
    B = () => e(() =>
        import ("./Fariness-104aa471.js"), ["assets/Fariness-104aa471.js", "assets/solid-js-26bd2957.js", "assets/router-bf1daf6a.js", "assets/i18n-84cf21fb.js", "assets/LocalIcon-a94161d6.js"]),
    C = () => e(() =>
        import ("./ClaimGift-662a9b21.js"), ["assets/ClaimGift-662a9b21.js", "assets/solid-js-26bd2957.js", "assets/usePickNums-e3bf0792.js", "assets/i18n-84cf21fb.js", "assets/LocalIcon-a94161d6.js", "assets/router-bf1daf6a.js"]),
    k = () => e(() =>
        import ("./ReceiveGift-b3736092.js"), ["assets/ReceiveGift-b3736092.js", "assets/solid-js-26bd2957.js", "assets/router-bf1daf6a.js", "assets/recive_bonus-f7de831f.js", "assets/UserInfo-7a40f85b.js", "assets/index-f5548403.js", "assets/i18n-84cf21fb.js"]),
    N = () => e(() =>
        import ("./AwardInformDetailDialog-92c109e7.js"), ["assets/AwardInformDetailDialog-92c109e7.js", "assets/solid-js-26bd2957.js", "assets/gift-box-black-closed-1c721cc7.js", "assets/currency-4826aee6.js", "assets/i18n-84cf21fb.js"]),
    M = () => e(() =>
        import ("./BetSlipContent-77af6997.js"), ["assets/BetSlipContent-77af6997.js", "assets/solid-js-26bd2957.js", "assets/store-635b8129.js", "assets/store-2ed2b91e.js", "assets/lottery-69be0c1b.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/BetAmountSelect-7ad7f83e.js", "assets/Lottery-f4a4381b.js", "assets/router-bf1daf6a.js", "assets/IndiaStateKaralaBall-5bb90bf4.js", "assets/i18n-84cf21fb.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/LocalIcon-a94161d6.js", "assets/jb-countries-1e3f9cbb.js", "assets/createSettle-ffee26b2.js", "assets/toString-9093e562.js", "assets/indiaState-7fce4127.js"]),
    x = () => e(() =>
        import ("./SelectCartContent-7b8a782d.js"), ["assets/SelectCartContent-7b8a782d.js", "assets/solid-js-26bd2957.js", "assets/store-635b8129.js", "assets/store-2ed2b91e.js", "assets/lottery-69be0c1b.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/BetAmountSelect-7ad7f83e.js", "assets/Lottery-f4a4381b.js", "assets/router-bf1daf6a.js", "assets/IndiaStateKaralaBall-5bb90bf4.js", "assets/i18n-84cf21fb.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/index-f5548403.js"]),
    F = () => e(() =>
        import ("./ExploreLottery-3ac85a95.js"), ["assets/ExploreLottery-3ac85a95.js", "assets/solid-js-26bd2957.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js", "assets/i18n-84cf21fb.js", "assets/LotterySearchResult-d761bb4e.js", "assets/PopularSectionItem-f181d0d1.js", "assets/index-f5548403.js", "assets/currency-4826aee6.js", "assets/store-de7ddcb4.js", "assets/store-2ed2b91e.js", "assets/debounce-f7740f4e.js"]),
    G = () => e(() =>
        import ("./LotterySearchBoxDialog-b225a692.js"), ["assets/LotterySearchBoxDialog-b225a692.js", "assets/solid-js-26bd2957.js", "assets/LotterySearchResult-d761bb4e.js", "assets/PopularSectionItem-f181d0d1.js", "assets/index-f5548403.js", "assets/currency-4826aee6.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js", "assets/i18n-84cf21fb.js", "assets/apis-fc5d0f98.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/store-de7ddcb4.js", "assets/store-2ed2b91e.js", "assets/debounce-f7740f4e.js"]),
    U = () => e(() =>
        import ("./UpcomingDrawSection-9084d5f4.js"), ["assets/UpcomingDrawSection-9084d5f4.js", "assets/solid-js-26bd2957.js", "assets/currency-4826aee6.js", "assets/index-f5548403.js", "assets/CountryAvatar-e9499a16.js", "assets/jb-countries-1e3f9cbb.js", "assets/lottery-69be0c1b.js", "assets/i18n-84cf21fb.js", "assets/throttle-e4f3954e.js", "assets/debounce-f7740f4e.js", "assets/isObject-909534d5.js", "assets/toNumber-e58af95e.js"]),
    H = () => e(() =>
        import ("./IndiaWinningList-bf0cf6b1.js"), ["assets/IndiaWinningList-bf0cf6b1.js", "assets/solid-js-26bd2957.js", "assets/LocalIcon-a94161d6.js", "assets/i18n-84cf21fb.js", "assets/index-f5548403.js", "assets/router-bf1daf6a.js"]),
    W = () => E(void 0, null, function*() {
        return {
            default: () => {}
        }
    }),
    Xo = v({
        init: () => e(() =>
            import ("./init-704bdf68.js"), []),
        addEvent: W,
        Layout: D,
        LotteryHome: R,
        BcLottery: P,
        Mybets: y,
        LikePage: T,
        AllLotteryPage: I,
        DetailPage: S,
        RecentDetailDialog: A,
        MyBetsDetailDialog: O,
        BcLotterySendGiftDialog: h,
        BcLotteryNewUserGift: f,
        BcLotteryGiftHistoryDialog: b,
        BcLotterySeedDialog: V,
        BcLotteryFaqDialog: w,
        BcLotteryFarinessDialog: B,
        BcLotteryClaimDialog: C,
        BcLotteryReceiveGiftDialog: k,
        AwardInfoDetailDialog: N,
        BetSlipDialog: M,
        SelectCartContentDialog: x,
        ExploreLotteryPortal: F,
        LotterySearchBoxDialog: G,
        UpcomingDrawSection: U,
        IndiaWinningListDialog: H
    });
export {
    q as A, Y as B, eo as C, ie as D, ne as E, dt as F, mt as G, $e as H, _e as I, Ce as J, Ko as K, ve as L, vt as M, Ie as N, Fe as O, Oe as P, xe as Q, Xo as R, Ne as S, Ke as T, e as _, de as a, Xe as b, At as c, Ft as d, Ut as e, xt as f, zt as g, ut as h, tt as i, To as j, re as k, nt as l, st as m, We as n, he as o, ro as p, qo as q, Qe as r, Do as s, So as t, No as u, oe as v, wo as w, $t as x, lt as y, kt as z
};