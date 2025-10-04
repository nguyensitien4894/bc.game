const D = "modulepreload",
    u = function(i) {
        return "/modules/static2/" + i
    },
    c = {},
    _ = function(s, E, p) {
        if (!E || E.length === 0) return s();
        const d = document.getElementsByTagName("link");
        return Promise.all(E.map(t => {
            if (t = u(t), t in c) return;
            c[t] = !0;
            const o = t.endsWith(".css"),
                v = o ? '[rel="stylesheet"]' : "";
            if (!!p)
                for (let r = d.length - 1; r >= 0; r--) {
                    const n = d[r];
                    if (n.href === t && (!o || n.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${t}"]${v}`)) return;
            const e = document.createElement("link");
            if (e.rel = o ? "stylesheet" : D, o || (e.as = "script", e.crossOrigin = ""), e.href = t, document.head.appendChild(e), o) return new Promise((r, n) => {
                e.addEventListener("load", r), e.addEventListener("error", () => n(new Error(`Unable to preload CSS for ${t}`)))
            })
        })).then(() => s()).catch(t => {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = t, window.dispatchEvent(o), !o.defaultPrevented) throw t
        })
    },
    {
        createRemote: I
    } = globalThis._bc.fcsy,
    m = () => _(() =>
        import ("./Layout-462900b2.js"), []),
    P = () => _(() =>
        import ("./index-ad39a15f.js"), ["assets/index-ad39a15f.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/router-74a08e17.js", "assets/LocalIcon-3e1eb09f.js", "assets/i18n-da87ffb5.js", "assets/index-01ab9ff2.js", "assets/createHtmlFile-f41d4abf.js", "assets/parseHTML-63297060.js", "assets/memoize-561b08e2.js"]),
    L = () => _(() =>
        import ("./index-7313d148.js").then(i => i.i), ["assets/index-7313d148.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/router-74a08e17.js", "assets/i18n-da87ffb5.js", "assets/LocalIcon-3e1eb09f.js"]),
    a = () => _(() =>
        import ("./OneDollarCheck-884edb67.js"), ["assets/OneDollarCheck-884edb67.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    R = () => _(() =>
        import ("./WalletType-53e5d328.js").then(i => i.W), ["assets/WalletType-53e5d328.js", "assets/web-2eabff95.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/_commonjs-dynamic-modules-302442b1.js", "assets/solid-js-ae9447d2.js", "assets/router-74a08e17.js", "assets/i18n-da87ffb5.js"]),
    l = () => _(() =>
        import ("./PrivacyDialog-2be89f2c.js"), ["assets/PrivacyDialog-2be89f2c.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/createHtmlFile-f41d4abf.js"]),
    A = () => _(() =>
        import ("./BonusTCDialog-7fd456fc.js"), ["assets/BonusTCDialog-7fd456fc.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/index-01ab9ff2.js", "assets/solid-js-ae9447d2.js", "assets/router-74a08e17.js", "assets/createHtmlFile-f41d4abf.js", "assets/parseHTML-63297060.js", "assets/memoize-561b08e2.js"]),
    T = () => _(() =>
        import ("./index-082cd0ed.js"), ["assets/index-082cd0ed.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/verify_result-adff92bd.js"]),
    V = () => _(() =>
        import ("./index-01ab9ff2.js"), ["assets/index-01ab9ff2.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/router-74a08e17.js", "assets/createHtmlFile-f41d4abf.js", "assets/i18n-da87ffb5.js", "assets/parseHTML-63297060.js", "assets/memoize-561b08e2.js"]),
    O = () => _(() =>
        import ("./index-e2661131.js"), ["assets/index-e2661131.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/store-2ed2b91e.js", "assets/index-27e2239a.css"]),
    g = () => _(() =>
        import ("./index-202b5657.js"), ["assets/index-202b5657.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/SpineAnimation-bd93599c.js", "assets/solid-js-ae9447d2.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/store-2ed2b91e.js", "assets/index-abfaab7e.css"]),
    h = () => _(() =>
        import ("./index-a0afabe9.js"), ["assets/index-a0afabe9.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/LHeader-29084e4f.js", "assets/store-2ed2b91e.js", "assets/LHeader-08159b7a.css"]),
    y = () => _(() =>
        import ("./index-0b50298c.js"), ["assets/index-0b50298c.js", "assets/web-2eabff95.js", "assets/time-down-9f7075d7.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/index-f04a5c4e.js", "assets/store-2ed2b91e.js", "assets/SpineAnimations-bcad03b8.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/line-c298a13f.js", "assets/line-eb7f97db.css"]),
    f = () => _(() =>
        import ("./index-b0dc28aa.js"), ["assets/index-b0dc28aa.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/index-11d3213e.js", "assets/store-2ed2b91e.js"]),
    w = () => _(() =>
        import ("./check-dialog-698ded4f.js"), ["assets/check-dialog-698ded4f.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/index-11d3213e.js"]),
    F = () => _(() =>
        import ("./claim-dialog-5e50848d.js"), ["assets/claim-dialog-5e50848d.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/index-8ed02462.js", "assets/SpineAnimation-bd93599c.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/index-11d3213e.js"]),
    S = () => _(() =>
        import ("./winner-list-90f35b75.js"), ["assets/winner-list-90f35b75.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/LHeader-29084e4f.js", "assets/store-2ed2b91e.js", "assets/LHeader-08159b7a.css", "assets/router-74a08e17.js"]),
    k = () => _(() =>
        import ("./index-2ff74bf7.js"), ["assets/index-2ff74bf7.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/index-d024f800.js", "assets/store-2ed2b91e.js", "assets/SpineAnimation-bd93599c.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js"]),
    B = () => _(() =>
        import ("./index-2b677a36.js"), ["assets/index-2b677a36.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/memoize-561b08e2.js", "assets/store-2ed2b91e.js", "assets/axios-0719e63a.js", "assets/index-090c6ef5.css"]),
    C = () => _(() =>
        import ("./s-detail-641034a2.js"), ["assets/s-detail-641034a2.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    W = () => _(() =>
        import ("./s-detail-ad7395d9.js"), ["assets/s-detail-ad7395d9.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    M = () => _(() =>
        import ("./week1-detail-9eb3321a.js"), ["assets/week1-detail-9eb3321a.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    z = () => _(() =>
        import ("./week2-detail-3f316429.js"), ["assets/week2-detail-3f316429.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    N = () => _(() =>
        import ("./week3-detail-32791380.js"), ["assets/week3-detail-32791380.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    H = () => _(() =>
        import ("./week4-detail-d30500f9.js"), ["assets/week4-detail-d30500f9.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    b = () => _(() =>
        import ("./prize-ratio-0442b6dc.js"), ["assets/prize-ratio-0442b6dc.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/three-989fb724.js"]),
    K = () => _(() =>
        import ("./s-detail-b01e4bbd.js"), ["assets/s-detail-b01e4bbd.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    U = () => _(() =>
        import ("./s-detail-e635c1bf.js"), ["assets/s-detail-e635c1bf.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js"]),
    J = () => _(() =>
        import ("./verify-5bdfeac9.js"), ["assets/verify-5bdfeac9.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/index-d024f800.js", "assets/store-2ed2b91e.js"]),
    $ = () => _(() =>
        import ("./invite-14d95a6a.js"), ["assets/invite-14d95a6a.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/index-d024f800.js", "assets/solid-js-ae9447d2.js", "assets/store-2ed2b91e.js", "assets/index-8ed02462.js"]),
    q = () => _(() =>
        import ("./invite-feadaa7d.js"), ["assets/invite-feadaa7d.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/index-f04a5c4e.js", "assets/solid-js-ae9447d2.js", "assets/store-2ed2b91e.js"]),
    x = () => _(() =>
        import ("./invite-8c5eb19a.js"), ["assets/invite-8c5eb19a.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/index-ef8a8165.js"]),
    Q = () => _(() =>
        import ("./view-detail-222b47bb.js"), ["assets/view-detail-222b47bb.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/close-50a68df0.js", "assets/cloud-9a5369e0.js", "assets/line-c298a13f.js", "assets/line-eb7f97db.css", "assets/time-down-9f7075d7.js", "assets/solid-js-ae9447d2.js", "assets/index-f04a5c4e.js", "assets/store-2ed2b91e.js"]),
    j = () => _(() =>
        import ("./prize-detail-e26bde67.js"), ["assets/prize-detail-e26bde67.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/close-50a68df0.js", "assets/cloud-9a5369e0.js", "assets/line-c298a13f.js", "assets/line-eb7f97db.css", "assets/4-59e72500.js", "assets/index-f04a5c4e.js", "assets/solid-js-ae9447d2.js", "assets/store-2ed2b91e.js"]),
    G = () => _(() =>
        import ("./cash-detail-11fd3443.js"), ["assets/cash-detail-11fd3443.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/close-50a68df0.js", "assets/line-c298a13f.js", "assets/line-eb7f97db.css", "assets/index-f04a5c4e.js", "assets/solid-js-ae9447d2.js", "assets/store-2ed2b91e.js", "assets/4-59e72500.js"]),
    X = () => _(() =>
        import ("./index-ff35be8b.js"), ["assets/index-ff35be8b.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/router-74a08e17.js", "assets/i18n-da87ffb5.js", "assets/store-07a457cb.js", "assets/store-2ed2b91e.js"]),
    Y = () => _(() =>
        import ("./index-15bd6ca2.js"), ["assets/index-15bd6ca2.js", "assets/web-2eabff95.js", "assets/banner-99b5042a.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/store-07a457cb.js", "assets/store-2ed2b91e.js"]),
    Z = () => _(() =>
        import ("./s-detail-b93d5107.js"), ["assets/s-detail-b93d5107.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    __ = () => _(() =>
        import ("./invite-b927a353.js"), ["assets/invite-b927a353.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js"]),
    t_ = () => _(() =>
        import ("./index-4316516b.js"), ["assets/index-4316516b.js", "assets/web-2eabff95.js", "assets/banner-99b5042a.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/clock-057f9d07.js", "assets/rank-bf0fc04c.js", "assets/store-2ed2b91e.js", "assets/match-5d6755a0.js", "assets/axios-0719e63a.js", "assets/memoize-561b08e2.js"]),
    o_ = () => _(() =>
        import ("./index-1b30bf89.js"), ["assets/index-1b30bf89.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/banner-99b5042a.js", "assets/store-2ed2b91e.js", "assets/rank-bf0fc04c.js", "assets/match-5d6755a0.js", "assets/axios-0719e63a.js", "assets/memoize-561b08e2.js"]),
    i_ = () => _(() =>
        import ("./index-03ac41fb.js"), ["assets/index-03ac41fb.js", "assets/web-2eabff95.js", "assets/banner-99b5042a.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/store-2ed2b91e.js", "assets/match-5d6755a0.js", "assets/axios-0719e63a.js", "assets/memoize-561b08e2.js", "assets/store-07a457cb.js"]),
    e_ = () => _(() =>
        import ("./detail-743e8eb9.js"), ["assets/detail-743e8eb9.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js"]),
    r_ = () => _(() =>
        import ("./detail-33da2b23.js"), ["assets/detail-33da2b23.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js"]),
    n_ = () => _(() =>
        import ("./detail-54e7356c.js"), ["assets/detail-54e7356c.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    E_ = () => _(() =>
        import ("./detail-7d01e6a0.js"), ["assets/detail-7d01e6a0.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    s_ = () => _(() =>
        import ("./index-f2ab03bc.js"), ["assets/index-f2ab03bc.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/store-2ed2b91e.js", "assets/clock-057f9d07.js", "assets/solid-js-ae9447d2.js", "assets/banner-99b5042a.js", "assets/match-5d6755a0.js", "assets/axios-0719e63a.js", "assets/memoize-561b08e2.js"]),
    d_ = () => _(() =>
        import ("./index-ee19f87e.js"), ["assets/index-ee19f87e.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/router-74a08e17.js"]),
    c_ = () => _(() =>
        import ("./index-81b32143.js"), ["assets/index-81b32143.js", "assets/web-2eabff95.js", "assets/banner-bc3519c3.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/store-2ed2b91e.js", "assets/line-r-1455548d.js"]),
    p_ = () => _(() =>
        import ("./index-38dbb3d4.js"), ["assets/index-38dbb3d4.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/banner-bc3519c3.js", "assets/store-2ed2b91e.js", "assets/faq-76c1822b.js", "assets/faq-0d1db3ae.css", "assets/line-r-1455548d.js"]),
    v_ = () => _(() =>
        import ("./index-5950dd0f.js"), ["assets/index-5950dd0f.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/banner-bc3519c3.js", "assets/store-2ed2b91e.js", "assets/faq-76c1822b.js", "assets/faq-0d1db3ae.css"]),
    D_ = () => _(() =>
        import ("./index-f8dc3306.js"), ["assets/index-f8dc3306.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/index-565508e1.js", "assets/store-2ed2b91e.js", "assets/i18n-da87ffb5.js", "assets/index-c42cafd7.js", "assets/browser-757e2bc0.js", "assets/dijkstra-28939446.js", "assets/boost-record-40263d69.js", "assets/dialog-box-45554053.js", "assets/box-bg-b9e3f74a.js", "assets/withdraw-record-3e208b5e.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/SpineAnimations-bcad03b8.js", "assets/rules-5d1557d6.js", "assets/index-97871749.css"]),
    u_ = () => _(() =>
        import ("./index-6ccd6b52.js"), ["assets/index-6ccd6b52.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/dialog-box-44fc5a00.js", "assets/i18n-da87ffb5.js", "assets/store-2ed2b91e.js", "assets/SpineAnimation-bd93599c.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/rules-64a1e928.js"]),
    I_ = () => _(() =>
        import ("./index-5aee9e9b.js"), ["assets/index-5aee9e9b.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/index-c42cafd7.js", "assets/solid-js-ae9447d2.js", "assets/index-0e126123.css"]),
    m_ = () => _(() =>
        import ("./index-881678c6.js"), ["assets/index-881678c6.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/three-989fb724.js", "assets/index-ef8a8165.js"]),
    P_ = () => _(() =>
        import ("./Layout-44b3bb53.js"), ["assets/Layout-44b3bb53.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/router-74a08e17.js", "assets/assetsLogo-b012e244.js", "assets/i18n-da87ffb5.js", "assets/Layout-5aec7f38.css"]),
    L_ = () => _(() =>
        import ("./index-f8cddd83.js"), ["assets/index-f8cddd83.js", "assets/web-2eabff95.js", "assets/router-74a08e17.js", "assets/index-76184800.css"]),
    a_ = () => _(() =>
        import ("./index-b8f8e6f3.js"), ["assets/index-b8f8e6f3.js", "assets/web-2eabff95.js", "assets/index-f8cddd83.js", "assets/router-74a08e17.js", "assets/index-76184800.css"]),
    R_ = () => _(() =>
        import ("./index-51fcdbee.js"), ["assets/index-51fcdbee.js", "assets/web-2eabff95.js", "assets/index-3fd48be3.js", "assets/SpineAnimations-bcad03b8.js", "assets/solid-js-ae9447d2.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/banner3-1f504370.js", "assets/index-11fab1b3.css"]),
    l_ = () => _(() =>
        import ("./index-3df654e3.js"), ["assets/index-3df654e3.js", "assets/web-2eabff95.js", "assets/index-51fcdbee.js", "assets/index-3fd48be3.js", "assets/SpineAnimations-bcad03b8.js", "assets/solid-js-ae9447d2.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/banner3-1f504370.js", "assets/index-11fab1b3.css"]),
    A_ = () => _(() =>
        import ("./index-87ef0add.js"), ["assets/index-87ef0add.js", "assets/web-2eabff95.js", "assets/index-51fcdbee.js", "assets/index-3fd48be3.js", "assets/SpineAnimations-bcad03b8.js", "assets/solid-js-ae9447d2.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/banner3-1f504370.js", "assets/index-11fab1b3.css"]),
    T_ = () => _(() =>
        import ("./index-4528577f.js"), ["assets/index-4528577f.js", "assets/web-2eabff95.js", "assets/index-51fcdbee.js", "assets/index-3fd48be3.js", "assets/SpineAnimations-bcad03b8.js", "assets/solid-js-ae9447d2.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/banner3-1f504370.js", "assets/index-11fab1b3.css"]),
    V_ = () => _(() =>
        import ("./index-32ef99a2.js"), ["assets/index-32ef99a2.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/index-8f447f36.css"]),
    O_ = () => _(() =>
        import ("./index-4620e2db.js").then(i => i.c), ["assets/index-4620e2db.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/index-09f8aade.css"]),
    g_ = () => _(() =>
        import ("./index-ab2a9d7c.js"), ["assets/index-ab2a9d7c.js", "assets/web-2eabff95.js", "assets/banner3-1f504370.js", "assets/SpineAnimation-bd93599c.js", "assets/solid-js-ae9447d2.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/SpineAnimations-bcad03b8.js", "assets/index-9233fb2c.css"]),
    h_ = () => _(() =>
        import ("./index-cda89d87.js"), ["assets/index-cda89d87.js", "assets/web-2eabff95.js", "assets/index-3fd48be3.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/index-bc333512.css"]),
    y_ = () => _(() =>
        import ("./index-6a31d355.js"), ["assets/index-6a31d355.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/index-4620e2db.js", "assets/index-09f8aade.css", "assets/router-74a08e17.js", "assets/index-c43a80ca.css"]),
    f_ = () => _(() =>
        import ("./Brazil-09d25d28.js"), ["assets/Brazil-09d25d28.js", "assets/web-2eabff95.js", "assets/SignUp-79439df8.js", "assets/store-2ed2b91e.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/SignUp-064a32ae.css"]),
    w_ = () => _(() =>
        import ("./Sports-77df97a0.js"), ["assets/Sports-77df97a0.js", "assets/web-2eabff95.js", "assets/SignUp-79439df8.js", "assets/store-2ed2b91e.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/SignUp-064a32ae.css"]),
    F_ = () => _(() =>
        import ("./index-9bf08035.js"), ["assets/index-9bf08035.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/index-a8ab0dc8.css"]),
    S_ = () => _(() =>
        import ("./index-1a5b3bf9.js"), ["assets/index-1a5b3bf9.js", "assets/web-2eabff95.js", "assets/index-9bf08035.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/index-a8ab0dc8.css"]),
    k_ = () => _(() =>
        import ("./index-196793ec.js"), ["assets/index-196793ec.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/index-b50c6100.js", "assets/solid-js-ae9447d2.js", "assets/index-a59111b0.js", "assets/Header-98b553d5.js", "assets/assetsLogo-b012e244.js", "assets/router-74a08e17.js"]),
    B_ = () => _(() =>
        import ("./index-8e5079a3.js"), ["assets/index-8e5079a3.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/copy-c4e0864c.js"]),
    C_ = () => _(() =>
        import ("./eventDetail-aa1b0662.js"), ["assets/eventDetail-aa1b0662.js", "assets/web-2eabff95.js", "assets/router-74a08e17.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js"]),
    W_ = () => _(() =>
        import ("./Entery-e67d3e2a.js"), ["assets/Entery-e67d3e2a.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/index-b50c6100.js"]),
    M_ = () => _(() =>
        import ("./mydetails-11392db5.js"), ["assets/mydetails-11392db5.js", "assets/web-2eabff95.js", "assets/router-74a08e17.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/index-a59111b0.js"]),
    z_ = () => _(() =>
        import ("./index-2833d837.js"), ["assets/index-2833d837.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/index-c1f56b61.js", "assets/solid-js-ae9447d2.js", "assets/index-bc69359b.js"]),
    N_ = () => _(() =>
        import ("./invite-8a1c0bd4.js"), ["assets/invite-8a1c0bd4.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/index-bc69359b.js"]),
    H_ = () => _(() =>
        import ("./detail-0f676f53.js"), ["assets/detail-0f676f53.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/index-bc69359b.js"]),
    b_ = () => _(() =>
        import ("./verify-61b9d8f0.js"), ["assets/verify-61b9d8f0.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/index-c1f56b61.js", "assets/verify_result-adff92bd.js", "assets/index-bc69359b.js"]),
    K_ = () => _(() =>
        import ("./s-detail-e0e06ebb.js"), ["assets/s-detail-e0e06ebb.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js"]),
    U_ = () => _(() =>
        import ("./index-40c48bc2.js"), ["assets/index-40c48bc2.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/createHtmlFile-f41d4abf.js", "assets/parseHTML-63297060.js", "assets/memoize-561b08e2.js", "assets/store-2ed2b91e.js", "assets/LocalIcon-3e1eb09f.js", "assets/Tool-c64a5814.js", "assets/router-74a08e17.js"]),
    J_ = () => _(() =>
        import ("./Cooldown-bbe52720.js"), ["assets/Cooldown-bbe52720.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/store-2ed2b91e.js", "assets/tips-a85dfd43.js", "assets/router-74a08e17.js"]),
    $_ = () => _(() =>
        import ("./index-5d85e3da.js"), ["assets/index-5d85e3da.js", "assets/web-2eabff95.js", "assets/Header-98b553d5.js", "assets/i18n-da87ffb5.js", "assets/assetsLogo-b012e244.js", "assets/solid-js-ae9447d2.js", "assets/browser-757e2bc0.js", "assets/dijkstra-28939446.js", "assets/index-ce2114ba.css"]),
    q_ = () => _(() =>
        import ("./SetLimit-13803076.js"), ["assets/SetLimit-13803076.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/tips-a85dfd43.js", "assets/Tool-c64a5814.js"]),
    x_ = () => _(() =>
        import ("./limitsTips-1c279946.js"), ["assets/limitsTips-1c279946.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/memoize-561b08e2.js"]),
    Q_ = () => _(() =>
        import ("./index-a80937d3.js"), ["assets/index-a80937d3.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/store-2ed2b91e.js", "assets/i18n-da87ffb5.js", "assets/memoize-561b08e2.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/_commonjs-dynamic-modules-302442b1.js", "assets/index-4ea72d7b.css"]),
    j_ = () => _(() =>
        import ("./boost-record-40263d69.js"), ["assets/boost-record-40263d69.js", "assets/web-2eabff95.js", "assets/dialog-box-45554053.js", "assets/solid-js-ae9447d2.js", "assets/box-bg-b9e3f74a.js", "assets/index-565508e1.js", "assets/store-2ed2b91e.js", "assets/i18n-da87ffb5.js"]),
    G_ = () => _(() =>
        import ("./withdraw-record-3e208b5e.js"), ["assets/withdraw-record-3e208b5e.js", "assets/web-2eabff95.js", "assets/dialog-box-45554053.js", "assets/solid-js-ae9447d2.js", "assets/box-bg-b9e3f74a.js", "assets/i18n-da87ffb5.js", "assets/index-565508e1.js", "assets/store-2ed2b91e.js"]),
    X_ = () => _(() =>
        import ("./withdraw-rank-1b0ef426.js"), ["assets/withdraw-rank-1b0ef426.js", "assets/web-2eabff95.js", "assets/box-bg-b9e3f74a.js"]),
    Y_ = () => _(() =>
        import ("./share-fa11762a.js"), ["assets/share-fa11762a.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/copy-c4e0864c.js", "assets/solid-js-ae9447d2.js", "assets/index-565508e1.js", "assets/store-2ed2b91e.js", "assets/dialog-box-45554053.js", "assets/box-bg-b9e3f74a.js", "assets/browser-757e2bc0.js", "assets/dijkstra-28939446.js"]),
    Z_ = () => _(() =>
        import ("./rules-5d1557d6.js"), ["assets/rules-5d1557d6.js", "assets/web-2eabff95.js", "assets/dialog-box-45554053.js", "assets/solid-js-ae9447d2.js", "assets/box-bg-b9e3f74a.js", "assets/i18n-da87ffb5.js"]),
    _t = () => _(() =>
        import ("./index-5283406c.js"), ["assets/index-5283406c.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/header-e1b38235.js"]),
    tt = () => _(() =>
        import ("./survey-66012c88.js"), ["assets/survey-66012c88.js", "assets/web-2eabff95.js", "assets/header-e1b38235.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/survey-fada0297.css"]),
    ot = () => _(() =>
        import ("./rules-64a1e928.js"), ["assets/rules-64a1e928.js", "assets/web-2eabff95.js", "assets/dialog-box-44fc5a00.js", "assets/solid-js-ae9447d2.js", "assets/i18n-da87ffb5.js", "assets/store-2ed2b91e.js"]),
    it = () => _(() =>
        import ("./share-5a443591.js"), ["assets/share-5a443591.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/solid-js-ae9447d2.js", "assets/dialog-box-44fc5a00.js", "assets/store-2ed2b91e.js", "assets/index-85742287.js", "assets/browser-757e2bc0.js", "assets/dijkstra-28939446.js"]),
    et = () => _(() =>
        import ("./invite-d31a8a3d.js"), ["assets/invite-d31a8a3d.js", "assets/web-2eabff95.js", "assets/i18n-da87ffb5.js", "assets/copy-c4e0864c.js", "assets/solid-js-ae9447d2.js", "assets/dialog-box-44fc5a00.js", "assets/store-2ed2b91e.js", "assets/index-85742287.js", "assets/browser-757e2bc0.js", "assets/dijkstra-28939446.js"]),
    rt = () => _(() =>
        import ("./index-b00be25d.js"), ["assets/index-b00be25d.js", "assets/web-2eabff95.js", "assets/solid-js-ae9447d2.js", "assets/router-74a08e17.js"]),
    Et = I({
        init: () => _(() =>
            import ("./init-db36d1ef.js"), []),
        limitsTips: x_,
        Festival: m_,
        Layout: m,
        HelpCenter: P,
        OneDollarCheck: a,
        WalletType: R,
        PrivacyDialog: l,
        BonusTCDialog: A,
        Sponsorship: L,
        VerifyRepresentative: T,
        HelpPage: V,
        Premier: O,
        PremierEventDetail: C,
        NewEventLottery: g,
        LotteryEventDetail: K,
        FestivalEventDetail: W,
        FestivalWeekOneDetail: M,
        FestivalWeekTwoDetail: z,
        FestivalWeekThreeDetail: N,
        FestivalWeekFourDetail: H,
        FestivalPrizeRatioDetail: b,
        Brazil: k,
        EventSports: B,
        BrazilEventDetail: U,
        BrazilVerify: J,
        FestivalInvite: x,
        BrazilInvite: $,
        WuKongInvite: q,
        KongViewDetail: Q,
        KongCashDetail: G,
        KongPrizeDetail: j,
        Journal: I_,
        IndiaPdd: B_,
        LandingIndia: L_,
        LandingJapan: R_,
        LandingIndiaSports: a_,
        Landing50tilt50: l_,
        LandingCasinoOnLine: A_,
        LandingJpcasino: T_,
        LandingAff: V_,
        LandingCryptoSpin: O_,
        LandingLayout: P_,
        Payment: h_,
        Luckyspin: y_,
        LandingSpineDemo: g_,
        BrazilSports: f_,
        Sports: w_,
        Sport: F_,
        Esport: S_,
        Mining: k_,
        MiningEventDetail: C_,
        MiningMyBetDetail: M_,
        MiningEnter: W_,
        NewMining: z_,
        NewMiningInvite: N_,
        NewMiningDetail: H_,
        NewMiningVerify: b_,
        NewMiningEventDetail: K_,
        Ucl: h,
        Qtds: y,
        UclHistory: S,
        Ipl: X,
        IplHome: Y,
        IplHomeEventDetail: Z,
        IplInvite: __,
        IplDaily: i_,
        IplDailyDetail: e_,
        IplRankDetail: n_,
        IplPredictionDetail: E_,
        IplPoolDetail: r_,
        IplPrizePool: t_,
        IplRank: o_,
        IplPrediction: s_,
        AirDrop: f,
        AirDropCheck: w,
        AirDropShare: F,
        ResponsibleLayout: U_,
        Cooldown: J_,
        AppDownload: $_,
        FIFA: d_,
        FIFAChampion: p_,
        FIFADaily: v_,
        FIFAHome: c_,
        SetLimit: q_,
        Bitcoin: Q_,
        Pdd: D_,
        PddBoostRecord: j_,
        PddWithdrawRecord: G_,
        PddWithdrawRank: X_,
        PddRule: Z_,
        PddShare: Y_,
        Viptransfer: _t,
        VipransferSurvey: tt,
        Independence: u_,
        IndependenceRule: ot,
        IndependenceShare: it,
        IndependenceInvite: et,
        PromotionEvent: rt
    });
export {
    _,
    Et as m
};