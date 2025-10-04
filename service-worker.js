try {
    self["workbox:core:7.2.0"] && _()
} catch {}
const E = (a, ...e) => {
        let t = a;
        return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t
    },
    I = E;
class l extends Error {
    constructor(e, t) {
        const s = I(e, t);
        super(s), this.name = e, this.details = t
    }
}
const f = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: typeof registration < "u" ? registration.scope : ""
    },
    b = a => [f.prefix, a, f.suffix].filter(e => e && e.length > 0).join("-"),
    O = a => {
        for (const e of Object.keys(f)) a(e)
    },
    C = {
        updateDetails: a => {
            O(e => {
                typeof a[e] == "string" && (f[e] = a[e])
            })
        },
        getGoogleAnalyticsName: a => a || b(f.googleAnalytics),
        getPrecacheName: a => a || b(f.precache),
        getPrefix: () => f.prefix,
        getRuntimeName: a => a || b(f.runtime),
        getSuffix: () => f.suffix
    };

function L(a, e) {
    const t = e();
    return a.waitUntil(t), t
}
try {
    self["workbox:precaching:7.2.0"] && _()
} catch {}
const W = "__WB_REVISION__";

function M(a) {
    if (!a) throw new l("add-to-cache-list-unexpected-type", {
        entry: a
    });
    if (typeof a == "string") {
        const n = new URL(a, location.href);
        return {
            cacheKey: n.href,
            url: n.href
        }
    }
    const {
        revision: e,
        url: t
    } = a;
    if (!t) throw new l("add-to-cache-list-unexpected-type", {
        entry: a
    });
    if (!e) {
        const n = new URL(t, location.href);
        return {
            cacheKey: n.href,
            url: n.href
        }
    }
    const s = new URL(t, location.href),
        r = new URL(t, location.href);
    return s.searchParams.set(W, e), {
        cacheKey: s.href,
        url: r.href
    }
}
class S {
    constructor() {
        this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({
            request: e,
            state: t
        }) => {
            t && (t.originalRequest = e)
        }, this.cachedResponseWillBeUsed = async ({
            event: e,
            state: t,
            cachedResponse: s
        }) => {
            if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
                const r = t.originalRequest.url;
                s ? this.notUpdatedURLs.push(r) : this.updatedURLs.push(r)
            }
            return s
        }
    }
}
class A {
    constructor({
        precacheController: e
    }) {
        this.cacheKeyWillBeUsed = async ({
            request: t,
            params: s
        }) => {
            const r = s ? .cacheKey || this._precacheController.getCacheKeyForURL(t.url);
            return r ? new Request(r, {
                headers: t.headers
            }) : t
        }, this._precacheController = e
    }
}
let g;

function D() {
    if (g === void 0) {
        const a = new Response("");
        if ("body" in a) try {
            new Response(a.body), g = !0
        } catch {
            g = !1
        }
        g = !1
    }
    return g
}
async function q(a, e) {
    let t = null;
    if (a.url && (t = new URL(a.url).origin), t !== self.location.origin) throw new l("cross-origin-copy-response", {
        origin: t
    });
    const s = a.clone(),
        n = {
            headers: new Headers(s.headers),
            status: s.status,
            statusText: s.statusText
        },
        c = D() ? s.body : await s.blob();
    return new Response(c, n)
}
const F = a => new URL(String(a), location.href).href.replace(new RegExp(`^${location.origin}`), "");

function T(a, e) {
    const t = new URL(a);
    for (const s of e) t.searchParams.delete(s);
    return t.href
}
async function H(a, e, t, s) {
    const r = T(e.url, t);
    if (e.url === r) return a.match(e, s);
    const n = Object.assign(Object.assign({}, s), {
            ignoreSearch: !0
        }),
        c = await a.keys(e, n);
    for (const i of c) {
        const o = T(i.url, t);
        if (r === o) return a.match(i, s)
    }
}
class j {
    constructor() {
        this.promise = new Promise((e, t) => {
            this.resolve = e, this.reject = t
        })
    }
}
const B = new Set;
async function $() {
    for (const a of B) await a()
}

function G(a) {
    return new Promise(e => setTimeout(e, a))
}
try {
    self["workbox:strategies:7.2.0"] && _()
} catch {}

function m(a) {
    return typeof a == "string" ? new Request(a) : a
}
class V {
    constructor(e, t) {
        this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new j, this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = new Map;
        for (const s of this._plugins) this._pluginStateMap.set(s, {});
        this.event.waitUntil(this._handlerDeferred.promise)
    }
    async fetch(e) {
        const {
            event: t
        } = this;
        let s = m(e);
        if (s.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
            const c = await t.preloadResponse;
            if (c) return c
        }
        const r = this.hasCallback("fetchDidFail") ? s.clone() : null;
        try {
            for (const c of this.iterateCallbacks("requestWillFetch")) s = await c({
                request: s.clone(),
                event: t
            })
        } catch (c) {
            if (c instanceof Error) throw new l("plugin-error-request-will-fetch", {
                thrownErrorMessage: c.message
            })
        }
        const n = s.clone();
        try {
            let c;
            c = await fetch(s, s.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
            for (const i of this.iterateCallbacks("fetchDidSucceed")) c = await i({
                event: t,
                request: n,
                response: c
            });
            return c
        } catch (c) {
            throw r && await this.runCallbacks("fetchDidFail", {
                error: c,
                event: t,
                originalRequest: r.clone(),
                request: n.clone()
            }), c
        }
    }
    async fetchAndCachePut(e) {
        const t = await this.fetch(e),
            s = t.clone();
        return this.waitUntil(this.cachePut(e, s)), t
    }
    async cacheMatch(e) {
        const t = m(e);
        let s;
        const {
            cacheName: r,
            matchOptions: n
        } = this._strategy, c = await this.getCacheKey(t, "read"), i = Object.assign(Object.assign({}, n), {
            cacheName: r
        });
        s = await caches.match(c, i);
        for (const o of this.iterateCallbacks("cachedResponseWillBeUsed")) s = await o({
            cacheName: r,
            matchOptions: n,
            cachedResponse: s,
            request: c,
            event: this.event
        }) || void 0;
        return s
    }
    async cachePut(e, t) {
        const s = m(e);
        await G(0);
        const r = await this.getCacheKey(s, "write");
        if (!t) throw new l("cache-put-with-no-response", {
            url: F(r.url)
        });
        const n = await this._ensureResponseSafeToCache(t);
        if (!n) return !1;
        const {
            cacheName: c,
            matchOptions: i
        } = this._strategy, o = await self.caches.open(c), h = this.hasCallback("cacheDidUpdate"), p = h ? await H(o, r.clone(), ["__WB_REVISION__"], i) : null;
        try {
            await o.put(r, h ? n.clone() : n)
        } catch (u) {
            if (u instanceof Error) throw u.name === "QuotaExceededError" && await $(), u
        }
        for (const u of this.iterateCallbacks("cacheDidUpdate")) await u({
            cacheName: c,
            oldResponse: p,
            newResponse: n.clone(),
            request: r,
            event: this.event
        });
        return !0
    }
    async getCacheKey(e, t) {
        const s = `${e.url} | ${t}`;
        if (!this._cacheKeys[s]) {
            let r = e;
            for (const n of this.iterateCallbacks("cacheKeyWillBeUsed")) r = m(await n({
                mode: t,
                request: r,
                event: this.event,
                params: this.params
            }));
            this._cacheKeys[s] = r
        }
        return this._cacheKeys[s]
    }
    hasCallback(e) {
        for (const t of this._strategy.plugins)
            if (e in t) return !0;
        return !1
    }
    async runCallbacks(e, t) {
        for (const s of this.iterateCallbacks(e)) await s(t)
    }* iterateCallbacks(e) {
        for (const t of this._strategy.plugins)
            if (typeof t[e] == "function") {
                const s = this._pluginStateMap.get(t);
                yield n => {
                    const c = Object.assign(Object.assign({}, n), {
                        state: s
                    });
                    return t[e](c)
                }
            }
    }
    waitUntil(e) {
        return this._extendLifetimePromises.push(e), e
    }
    async doneWaiting() {
        let e;
        for (; e = this._extendLifetimePromises.shift();) await e
    }
    destroy() {
        this._handlerDeferred.resolve(null)
    }
    async _ensureResponseSafeToCache(e) {
        let t = e,
            s = !1;
        for (const r of this.iterateCallbacks("cacheWillUpdate"))
            if (t = await r({
                    request: this.request,
                    response: t,
                    event: this.event
                }) || void 0, s = !0, !t) break;
        return s || t && t.status !== 200 && (t = void 0), t
    }
}
class K {
    constructor(e = {}) {
        this.cacheName = C.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions
    }
    handle(e) {
        const [t] = this.handleAll(e);
        return t
    }
    handleAll(e) {
        e instanceof FetchEvent && (e = {
            event: e,
            request: e.request
        });
        const t = e.event,
            s = typeof e.request == "string" ? new Request(e.request) : e.request,
            r = "params" in e ? e.params : void 0,
            n = new V(this, {
                event: t,
                request: s,
                params: r
            }),
            c = this._getResponse(n, s, t),
            i = this._awaitComplete(c, n, s, t);
        return [c, i]
    }
    async _getResponse(e, t, s) {
        await e.runCallbacks("handlerWillStart", {
            event: s,
            request: t
        });
        let r;
        try {
            if (r = await this._handle(t, e), !r || r.type === "error") throw new l("no-response", {
                url: t.url
            })
        } catch (n) {
            if (n instanceof Error) {
                for (const c of e.iterateCallbacks("handlerDidError"))
                    if (r = await c({
                            error: n,
                            event: s,
                            request: t
                        }), r) break
            }
            if (!r) throw n
        }
        for (const n of e.iterateCallbacks("handlerWillRespond")) r = await n({
            event: s,
            request: t,
            response: r
        });
        return r
    }
    async _awaitComplete(e, t, s, r) {
        let n, c;
        try {
            n = await e
        } catch {}
        try {
            await t.runCallbacks("handlerDidRespond", {
                event: r,
                request: s,
                response: n
            }), await t.doneWaiting()
        } catch (i) {
            i instanceof Error && (c = i)
        }
        if (await t.runCallbacks("handlerDidComplete", {
                event: r,
                request: s,
                response: n,
                error: c
            }), t.destroy(), c) throw c
    }
}
class d extends K {
    constructor(e = {}) {
        e.cacheName = C.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(d.copyRedirectedCacheableResponsesPlugin)
    }
    async _handle(e, t) {
        const s = await t.cacheMatch(e);
        return s || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
    }
    async _handleFetch(e, t) {
        let s;
        const r = t.params || {};
        if (this._fallbackToNetwork) {
            const n = r.integrity,
                c = e.integrity,
                i = !c || c === n;
            s = await t.fetch(new Request(e, {
                integrity: e.mode !== "no-cors" ? c || n : void 0
            })), n && i && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, s.clone()))
        } else throw new l("missing-precache-entry", {
            cacheName: this.cacheName,
            url: e.url
        });
        return s
    }
    async _handleInstall(e, t) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const s = await t.fetch(e);
        if (!await t.cachePut(e, s.clone())) throw new l("bad-precaching-response", {
            url: e.url,
            status: s.status
        });
        return s
    }
    _useDefaultCacheabilityPluginIfNeeded() {
        let e = null,
            t = 0;
        for (const [s, r] of this.plugins.entries()) r !== d.copyRedirectedCacheableResponsesPlugin && (r === d.defaultPrecacheCacheabilityPlugin && (e = s), r.cacheWillUpdate && t++);
        t === 0 ? this.plugins.push(d.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1)
    }
}
d.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({
        response: a
    }) {
        return !a || a.status >= 400 ? null : a
    }
};
d.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({
        response: a
    }) {
        return a.redirected ? await q(a) : a
    }
};
class Q {
    constructor({
        cacheName: e,
        plugins: t = [],
        fallbackToNetwork: s = !0
    } = {}) {
        this._urlsToCacheKeys = new Map, this._urlsToCacheModes = new Map, this._cacheKeysToIntegrities = new Map, this._strategy = new d({
            cacheName: C.getPrecacheName(e),
            plugins: [...t, new A({
                precacheController: this
            })],
            fallbackToNetwork: s
        }), this.install = this.install.bind(this), this.activate = this.activate.bind(this)
    }
    get strategy() {
        return this._strategy
    }
    precache(e) {
        this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0)
    }
    addToCacheList(e) {
        const t = [];
        for (const s of e) {
            typeof s == "string" ? t.push(s) : s && s.revision === void 0 && t.push(s.url);
            const {
                cacheKey: r,
                url: n
            } = M(s), c = typeof s != "string" && s.revision ? "reload" : "default";
            if (this._urlsToCacheKeys.has(n) && this._urlsToCacheKeys.get(n) !== r) throw new l("add-to-cache-list-conflicting-entries", {
                firstEntry: this._urlsToCacheKeys.get(n),
                secondEntry: r
            });
            if (typeof s != "string" && s.integrity) {
                if (this._cacheKeysToIntegrities.has(r) && this._cacheKeysToIntegrities.get(r) !== s.integrity) throw new l("add-to-cache-list-conflicting-integrities", {
                    url: n
                });
                this._cacheKeysToIntegrities.set(r, s.integrity)
            }
            if (this._urlsToCacheKeys.set(n, r), this._urlsToCacheModes.set(n, c), t.length > 0) {
                const i = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
                console.warn(i)
            }
        }
    }
    install(e) {
        return L(e, async () => {
            const t = new S;
            this.strategy.plugins.push(t);
            for (const [n, c] of this._urlsToCacheKeys) {
                const i = this._cacheKeysToIntegrities.get(c),
                    o = this._urlsToCacheModes.get(n),
                    h = new Request(n, {
                        integrity: i,
                        cache: o,
                        credentials: "same-origin"
                    });
                await Promise.all(this.strategy.handleAll({
                    params: {
                        cacheKey: c
                    },
                    request: h,
                    event: e
                }))
            }
            const {
                updatedURLs: s,
                notUpdatedURLs: r
            } = t;
            return {
                updatedURLs: s,
                notUpdatedURLs: r
            }
        })
    }
    activate(e) {
        return L(e, async () => {
            const t = await self.caches.open(this.strategy.cacheName),
                s = await t.keys(),
                r = new Set(this._urlsToCacheKeys.values()),
                n = [];
            for (const c of s) r.has(c.url) || (await t.delete(c), n.push(c.url));
            return {
                deletedURLs: n
            }
        })
    }
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys
    }
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()]
    }
    getCacheKeyForURL(e) {
        const t = new URL(e, location.href);
        return this._urlsToCacheKeys.get(t.href)
    }
    getIntegrityForCacheKey(e) {
        return this._cacheKeysToIntegrities.get(e)
    }
    async matchPrecache(e) {
        const t = e instanceof Request ? e.url : e,
            s = this.getCacheKeyForURL(t);
        if (s) return (await self.caches.open(this.strategy.cacheName)).match(s)
    }
    createHandlerBoundToURL(e) {
        const t = this.getCacheKeyForURL(e);
        if (!t) throw new l("non-precached-url", {
            url: e
        });
        return s => (s.request = new Request(e), s.params = Object.assign({
            cacheKey: t
        }, s.params), this.strategy.handle(s))
    }
}
let k;
const U = () => (k || (k = new Q), k);
try {
    self["workbox:routing:7.2.0"] && _()
} catch {}
const v = "GET",
    R = a => a && typeof a == "object" ? a : {
        handle: a
    };
class w {
    constructor(e, t, s = v) {
        this.handler = R(t), this.match = e, this.method = s
    }
    setCatchHandler(e) {
        this.catchHandler = R(e)
    }
}
class z extends w {
    constructor(e, t, s) {
        const r = ({
            url: n
        }) => {
            const c = e.exec(n.href);
            if (c && !(n.origin !== location.origin && c.index !== 0)) return c.slice(1)
        };
        super(r, t, s)
    }
}
class J {
    constructor() {
        this._routes = new Map, this._defaultHandlerMap = new Map
    }
    get routes() {
        return this._routes
    }
    addFetchListener() {
        self.addEventListener("fetch", e => {
            const {
                request: t
            } = e, s = this.handleRequest({
                request: t,
                event: e
            });
            s && e.respondWith(s)
        })
    }
    addCacheListener() {
        self.addEventListener("message", e => {
            if (e.data && e.data.type === "CACHE_URLS") {
                const {
                    payload: t
                } = e.data, s = Promise.all(t.urlsToCache.map(r => {
                    typeof r == "string" && (r = [r]);
                    const n = new Request(...r);
                    return this.handleRequest({
                        request: n,
                        event: e
                    })
                }));
                e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0))
            }
        })
    }
    handleRequest({
        request: e,
        event: t
    }) {
        const s = new URL(e.url, location.href);
        if (!s.protocol.startsWith("http")) return;
        const r = s.origin === location.origin,
            {
                params: n,
                route: c
            } = this.findMatchingRoute({
                event: t,
                request: e,
                sameOrigin: r,
                url: s
            });
        let i = c && c.handler;
        const o = e.method;
        if (!i && this._defaultHandlerMap.has(o) && (i = this._defaultHandlerMap.get(o)), !i) return;
        let h;
        try {
            h = i.handle({
                url: s,
                request: e,
                event: t,
                params: n
            })
        } catch (u) {
            h = Promise.reject(u)
        }
        const p = c && c.catchHandler;
        return h instanceof Promise && (this._catchHandler || p) && (h = h.catch(async u => {
            if (p) try {
                return await p.handle({
                    url: s,
                    request: e,
                    event: t,
                    params: n
                })
            } catch (P) {
                P instanceof Error && (u = P)
            }
            if (this._catchHandler) return this._catchHandler.handle({
                url: s,
                request: e,
                event: t
            });
            throw u
        })), h
    }
    findMatchingRoute({
        url: e,
        sameOrigin: t,
        request: s,
        event: r
    }) {
        const n = this._routes.get(s.method) || [];
        for (const c of n) {
            let i;
            const o = c.match({
                url: e,
                sameOrigin: t,
                request: s,
                event: r
            });
            if (o) return i = o, (Array.isArray(i) && i.length === 0 || o.constructor === Object && Object.keys(o).length === 0 || typeof o == "boolean") && (i = void 0), {
                route: c,
                params: i
            }
        }
        return {}
    }
    setDefaultHandler(e, t = v) {
        this._defaultHandlerMap.set(t, R(e))
    }
    setCatchHandler(e) {
        this._catchHandler = R(e)
    }
    registerRoute(e) {
        this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e)
    }
    unregisterRoute(e) {
        if (!this._routes.has(e.method)) throw new l("unregister-route-but-not-found-with-method", {
            method: e.method
        });
        const t = this._routes.get(e.method).indexOf(e);
        if (t > -1) this._routes.get(e.method).splice(t, 1);
        else throw new l("unregister-route-route-not-registered")
    }
}
let y;
const N = () => (y || (y = new J, y.addFetchListener(), y.addCacheListener()), y);

function x(a, e, t) {
    let s;
    if (typeof a == "string") {
        const n = new URL(a, location.href),
            c = ({
                url: i
            }) => i.href === n.href;
        s = new w(c, e, t)
    } else if (a instanceof RegExp) s = new z(a, e, t);
    else if (typeof a == "function") s = new w(a, e, t);
    else if (a instanceof w) s = a;
    else throw new l("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
    });
    return N().registerRoute(s), s
}

function X(a, e = []) {
    for (const t of [...a.searchParams.keys()]) e.some(s => s.test(t)) && a.searchParams.delete(t);
    return a
}

function* Y(a, {
    ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/],
    directoryIndex: t = "index.html",
    cleanURLs: s = !0,
    urlManipulation: r
} = {}) {
    const n = new URL(a, location.href);
    n.hash = "", yield n.href;
    const c = X(n, e);
    if (yield c.href, t && c.pathname.endsWith("/")) {
        const i = new URL(c.href);
        i.pathname += t, yield i.href
    }
    if (s) {
        const i = new URL(c.href);
        i.pathname += ".html", yield i.href
    }
    if (r) {
        const i = r({
            url: n
        });
        for (const o of i) yield o.href
    }
}
class Z extends w {
    constructor(e, t) {
        const s = ({
            request: r
        }) => {
            const n = e.getURLsToCacheKeys();
            for (const c of Y(r.url, t)) {
                const i = n.get(c);
                if (i) {
                    const o = e.getIntegrityForCacheKey(i);
                    return {
                        cacheKey: i,
                        integrity: o
                    }
                }
            }
        };
        super(s, e.strategy)
    }
}

function ee(a) {
    const e = U(),
        t = new Z(e, a);
    x(t)
}
const te = "-precache-",
    se = async (a, e = te) => {
        const s = (await self.caches.keys()).filter(r => r.includes(e) && r.includes(self.registration.scope) && r !== a);
        return await Promise.all(s.map(r => self.caches.delete(r))), s
    };

function ae() {
    self.addEventListener("activate", a => {
        const e = C.getPrecacheName();
        a.waitUntil(se(e).then(t => {}))
    })
}

function re(a) {
    return U().getCacheKeyForURL(a)
}

function ne(a) {
    U().precache(a)
}

function ce(a, e) {
    ne(a), ee(e)
}

function ie(a) {
    N().setCatchHandler(a)
}
const oe = {
    cacheWillUpdate: async ({
        response: a
    }) => a.status === 200 || a.status === 0 ? a : null
};
class le extends K {
    constructor(e = {}) {
        super(e), this.plugins.some(t => "cacheWillUpdate" in t) || this.plugins.unshift(oe), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0
    }
    async _handle(e, t) {
        const s = [],
            r = [];
        let n;
        if (this._networkTimeoutSeconds) {
            const {
                id: o,
                promise: h
            } = this._getTimeoutPromise({
                request: e,
                logs: s,
                handler: t
            });
            n = o, r.push(h)
        }
        const c = this._getNetworkPromise({
            timeoutId: n,
            request: e,
            logs: s,
            handler: t
        });
        r.push(c);
        const i = await t.waitUntil((async () => await t.waitUntil(Promise.race(r)) || await c)());
        if (!i) throw new l("no-response", {
            url: e.url
        });
        return i
    }
    _getTimeoutPromise({
        request: e,
        logs: t,
        handler: s
    }) {
        let r;
        return {
            promise: new Promise(c => {
                r = setTimeout(async () => {
                    c(await s.cacheMatch(e))
                }, this._networkTimeoutSeconds * 1e3)
            }),
            id: r
        }
    }
    async _getNetworkPromise({
        timeoutId: e,
        request: t,
        logs: s,
        handler: r
    }) {
        let n, c;
        try {
            c = await r.fetchAndCachePut(t)
        } catch (i) {
            i instanceof Error && (n = i)
        }
        return e && clearTimeout(e), (n || !c) && (c = await r.cacheMatch(t)), c
    }
}
try {
    const a = [{
        "revision": null,
        "url": "assets/Ad-BMtyjXhp.js"
    }, {
        "revision": null,
        "url": "assets/AfterLogin-B-ZZpIpI.js"
    }, {
        "revision": null,
        "url": "assets/AfterLogin-Cx9vQWtn.js"
    }, {
        "revision": null,
        "url": "assets/api-BcSOPzfi.js"
    }, {
        "revision": null,
        "url": "assets/Application-BY0BTHEC.css"
    }, {
        "revision": null,
        "url": "assets/Application-CExkuTua.js"
    }, {
        "revision": null,
        "url": "assets/back-to-top-Dul5PF_Y.js"
    }, {
        "revision": null,
        "url": "assets/bc_debug-5EqGKhsO.js"
    }, {
        "revision": null,
        "url": "assets/Block-Cerk-tVE.js"
    }, {
        "revision": null,
        "url": "assets/bonus-notifications-aymw8doV.js"
    }, {
        "revision": null,
        "url": "assets/BonusTooltip-D3pk8WLd.js"
    }, {
        "revision": null,
        "url": "assets/BrLogout-B9sxwxzP.js"
    }, {
        "revision": null,
        "url": "assets/Chats-D3rYrf7i.js"
    }, {
        "revision": null,
        "url": "assets/ClearAll-D93kkivu.js"
    }, {
        "revision": null,
        "url": "assets/common-jbtJucx3.js"
    }, {
        "revision": null,
        "url": "assets/Contest-CbuBgI7T.js"
    }, {
        "revision": null,
        "url": "assets/copyright-r9YCp2vR.js"
    }, {
        "revision": null,
        "url": "assets/createSteps-mVg-3AYL.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-B_jcKQ4S.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-B8XA0kSA.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-Bi242g1i.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-BNazf07S.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-BOkYvszm.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-Bp0d5Cct.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-BSAtOS-4.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-Btd6u5v1.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-BuVa8Fr4.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-BzDNFnD8.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-C9KD-C5a.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-CCkrphJb.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-CcYV8_m-.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-CDL8XuyM.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-CEbLOYPR.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-CiqLDzY9.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-CpgyZN0y.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-CRbwAqaA.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-CVzmZjc0.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-D3exVik-.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-DRw7fEOM.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-DX1zlQXc.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-DxQI4n0x.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-DxxBhWAt.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-F-3Erhtw.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-hw8A1ZbP.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-JOx0Rbje.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-Oery4vgg.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-qINeEHV1.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-RwMk4n40.js"
    }, {
        "revision": null,
        "url": "assets/cryptoonlinecasino-u9nyWi14.js"
    }, {
        "revision": null,
        "url": "assets/Dev-DwXtCRST.js"
    }, {
        "revision": null,
        "url": "assets/FavoriteRecent-D_guCMdn.js"
    }, {
        "revision": null,
        "url": "assets/Filter-BuuZjDwC.js"
    }, {
        "revision": null,
        "url": "assets/GameEntryWrap-GTGSy2SU.js"
    }, {
        "revision": null,
        "url": "assets/GameRecommend-DExuDlMC.js"
    }, {
        "revision": null,
        "url": "assets/gift-entry-DYrxwmCE.js"
    }, {
        "revision": null,
        "url": "assets/guide-D8dcSBvA.js"
    }, {
        "revision": null,
        "url": "assets/Header-CAaUo-4N.js"
    }, {
        "revision": null,
        "url": "assets/Icon-svKk6S1K.js"
    }, {
        "revision": null,
        "url": "assets/index-_W5_-ICX.js"
    }, {
        "revision": null,
        "url": "assets/index-01irdi9Q.js"
    }, {
        "revision": null,
        "url": "assets/index-0mCcW-yI.js"
    }, {
        "revision": null,
        "url": "assets/index-4UjiWL-9.js"
    }, {
        "revision": null,
        "url": "assets/index-5cihlbuI.js"
    }, {
        "revision": null,
        "url": "assets/index-B_wPar7a.js"
    }, {
        "revision": null,
        "url": "assets/index-B-ZeLxUj.js"
    }, {
        "revision": null,
        "url": "assets/index-B0r_8vvi.js"
    }, {
        "revision": null,
        "url": "assets/index-B101h2eH.js"
    }, {
        "revision": null,
        "url": "assets/index-B7V37x4M.js"
    }, {
        "revision": null,
        "url": "assets/index-B9Xq1MHK.js"
    }, {
        "revision": null,
        "url": "assets/index-BEV_J_5O.js"
    }, {
        "revision": null,
        "url": "assets/index-Bg3ckVMp.js"
    }, {
        "revision": null,
        "url": "assets/index-Bg78ae3H.js"
    }, {
        "revision": null,
        "url": "assets/index-BH6mkwa5.js"
    }, {
        "revision": null,
        "url": "assets/index-Bh6wdKE9.js"
    }, {
        "revision": null,
        "url": "assets/index-Biu9Sp-1.js"
    }, {
        "revision": null,
        "url": "assets/index-BjTfD-LB.js"
    }, {
        "revision": null,
        "url": "assets/index-BNTG7vWJ.js"
    }, {
        "revision": null,
        "url": "assets/index-BoKf9-5L.js"
    }, {
        "revision": null,
        "url": "assets/index-BVvvefcR.js"
    }, {
        "revision": null,
        "url": "assets/index-BxygQ6yf.js"
    }, {
        "revision": null,
        "url": "assets/index-BzPODF9b.js"
    }, {
        "revision": null,
        "url": "assets/index-C07FCBMw.js"
    }, {
        "revision": null,
        "url": "assets/index-C1IFvJev.js"
    }, {
        "revision": null,
        "url": "assets/index-C6c45TYK.js"
    }, {
        "revision": null,
        "url": "assets/index-C6W-VjaN.css"
    }, {
        "revision": null,
        "url": "assets/index-C72ike4e.css"
    }, {
        "revision": null,
        "url": "assets/index-CF7zl9tu.js"
    }, {
        "revision": null,
        "url": "assets/index-CiCNwm2L.js"
    }, {
        "revision": null,
        "url": "assets/index-CLvDiT3-.js"
    }, {
        "revision": null,
        "url": "assets/index-CNR9datF.js"
    }, {
        "revision": null,
        "url": "assets/index-COZgx_HA.js"
    }, {
        "revision": null,
        "url": "assets/index-CRFD9EGt.js"
    }, {
        "revision": null,
        "url": "assets/index-CRnga_uN.js"
    }, {
        "revision": null,
        "url": "assets/index-CS-brDnm.js"
    }, {
        "revision": null,
        "url": "assets/index-Cs40et_4.js"
    }, {
        "revision": null,
        "url": "assets/index-CtvVpfXk.js"
    }, {
        "revision": null,
        "url": "assets/index-CwcW06yC.js"
    }, {
        "revision": null,
        "url": "assets/index-CYE8ASQ5.css"
    }, {
        "revision": null,
        "url": "assets/index-D5GRp1Sf.js"
    }, {
        "revision": null,
        "url": "assets/index-DC7mvuts.js"
    }, {
        "revision": null,
        "url": "assets/index-DE7DYOUi.js"
    }, {
        "revision": null,
        "url": "assets/index-DfHtRGps.js"
    }, {
        "revision": null,
        "url": "assets/index-dIoM-BTp.js"
    }, {
        "revision": null,
        "url": "assets/index-Dl19ljLn.js"
    }, {
        "revision": null,
        "url": "assets/index-DORMCehz.js"
    }, {
        "revision": null,
        "url": "assets/index-Dpa1ADbh.js"
    }, {
        "revision": null,
        "url": "assets/index-Dq-C94j3.js"
    }, {
        "revision": null,
        "url": "assets/index-DtMItISS.js"
    }, {
        "revision": null,
        "url": "assets/index-DUsfpXXv.js"
    }, {
        "revision": null,
        "url": "assets/index-DV0R0iky.js"
    }, {
        "revision": null,
        "url": "assets/index-DvqX1V9e.js"
    }, {
        "revision": null,
        "url": "assets/index-DWGERkgF.js"
    }, {
        "revision": null,
        "url": "assets/index-DxYPFwcM.js"
    }, {
        "revision": null,
        "url": "assets/index-e7pWdaRW.js"
    }, {
        "revision": null,
        "url": "assets/index-f4aC0NkC.js"
    }, {
        "revision": null,
        "url": "assets/index-g4Bwsc_s.js"
    }, {
        "revision": null,
        "url": "assets/index-HMVOS9VC.js"
    }, {
        "revision": null,
        "url": "assets/index-Il6eCVnB.js"
    }, {
        "revision": null,
        "url": "assets/index-k8NE6uB0.js"
    }, {
        "revision": null,
        "url": "assets/index-mgbZhYPH.js"
    }, {
        "revision": null,
        "url": "assets/index-NdfaDhwY.js"
    }, {
        "revision": null,
        "url": "assets/index-Thwnr8_v.js"
    }, {
        "revision": null,
        "url": "assets/index-XjbV4yyk.js"
    }, {
        "revision": null,
        "url": "assets/index-yQ1PVVlY.js"
    }, {
        "revision": null,
        "url": "assets/index-Z283SQe6.js"
    }, {
        "revision": null,
        "url": "assets/index-z7iNh5eH.js"
    }, {
        "revision": null,
        "url": "assets/installPrompt-BUVqT8pJ.js"
    }, {
        "revision": null,
        "url": "assets/js/fp.min.js"
    }, {
        "revision": null,
        "url": "assets/license-0HrEYjlu.js"
    }, {
        "revision": null,
        "url": "assets/Main-CoCVDGBc.js"
    }, {
        "revision": null,
        "url": "assets/MxTerm-DtzZH8x1.js"
    }, {
        "revision": null,
        "url": "assets/notfound-B_5ntxrk.js"
    }, {
        "revision": null,
        "url": "assets/OriginalsGames-3QrEGPyg.js"
    }, {
        "revision": null,
        "url": "assets/OriginalsGames-BZDos-w4.css"
    }, {
        "revision": null,
        "url": "assets/other-B2ewBnyu.js"
    }, {
        "revision": null,
        "url": "assets/PcNav-DwfUOlr2.js"
    }, {
        "revision": null,
        "url": "assets/ReCommend-CjFHUESd.js"
    }, {
        "revision": null,
        "url": "assets/SelectLayer-Xbh5uvPV.js"
    }, {
        "revision": null,
        "url": "assets/Sports.page-DuIZwPLi.js"
    }, {
        "revision": null,
        "url": "assets/telegrams-BaasnB0C.js"
    }, {
        "revision": null,
        "url": "assets/ThrowAndHighRolles-DHdi2_cR.js"
    }, {
        "revision": null,
        "url": "assets/Update-DsdXmApD.js"
    }, {
        "revision": null,
        "url": "assets/utils-BHthhcHa.js"
    }, {
        "revision": null,
        "url": "assets/vendor-CR7NILRE.js"
    }, {
        "revision": null,
        "url": "assets/workbox-window.prod.es5-B9K5rw8f.js"
    }, {
        "revision": null,
        "url": "assets/wr_utils.dist-DvgtdgCy-CUXsbV0Z.js"
    }, {
        "revision": "23cb1015eb36e426e0dc72cfaf8c71fa",
        "url": "forum_script.js"
    }, {
        "revision": "68a4645d2c48038c6e110173eb2f1bd8",
        "url": "index_87.html"
    }, {
        "revision": "c4570d6b17e23327593ca44022e34220",
        "url": "index_bs.html"
    }, {
        "revision": "6cdec4767e74e393edc8e97417f08253",
        "url": "index_bz.html"
    }, {
        "revision": "ab8a94aa70f35bd108e5569389369686",
        "url": "index_jb.html"
    }, {
        "revision": "d29243b21c049fec301359cb3fef68a8",
        "url": "index.html"
    }, {
        "revision": "e5ec16808210ff8104ad9df514b3008b",
        "url": "metamask-sdk.js"
    }, {
        "revision": "bb342b01d13bebb317c67b881692efd3",
        "url": "push/onesignal/OneSignalSDKWorker.js"
    }, {
        "revision": "88f8513a7b1dd3bcf81c2d44ec8ffa0e",
        "url": "softswiss.html"
    }, {
        "revision": "dacbd2d6f1d822c2e3622fb95c9a7352",
        "url": "substation/bc/favicon/android-chrome-192x192.png"
    }, {
        "revision": "584895f9c7c25d687ce88005d5d39d67",
        "url": "substation/bc/favicon/android-chrome-512x512.png"
    }, {
        "revision": "86de47e8340f83ebfe5f75246994310f",
        "url": "manifest.webmanifest"
    }].filter(e => !e.url.endsWith(".html"));
    ae(), ce(a), x(({
        request: e,
        url: t
    }) => e.mode === "navigate" && !t.pathname.startsWith("/api/") && !t.pathname.startsWith("/service-worker"), new le({
        cacheName: "pages-cache",
        networkTimeoutSeconds: 3
    })), ie(async ({
        request: e
    }) => {
        if (e.mode === "navigate") {
            const t = ["/", "/index.html", re("/index.html")];
            for (const n of t) {
                const c = await caches.match(n);
                if (c) return c
            }
            const s = await caches.open("pages-cache"),
                r = await s.keys();
            if (r.length > 0) {
                const n = await s.match(r[0]);
                if (n) return n
            }
        }
        return Response.error()
    }), self.addEventListener("message", e => {
        e.data && e.data.type === "SKIP_WAITING" && self.skipWaiting()
    })
} catch (a) {
    console.info("Service Worker encountered an error:", a)
}