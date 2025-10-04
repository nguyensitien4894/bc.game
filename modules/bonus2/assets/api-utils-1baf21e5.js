var Ie = Object.defineProperty,
    $e = Object.defineProperties;
var Ce = Object.getOwnPropertyDescriptors;
var pe = Object.getOwnPropertySymbols;
var Be = Object.prototype.hasOwnProperty,
    Re = Object.prototype.propertyIsEnumerable;
var me = (l, s, r) => s in l ? Ie(l, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : l[s] = r,
    X = (l, s) => {
        for (var r in s || (s = {})) Be.call(s, r) && me(l, r, s[r]);
        if (pe)
            for (var r of pe(s)) Re.call(s, r) && me(l, r, s[r]);
        return l
    },
    ae = (l, s) => $e(l, Ce(s));
var q = (l, s, r) => new Promise((a, i) => {
    var f = m => {
            try {
                g(r.next(m))
            } catch (_) {
                i(_)
            }
        },
        p = m => {
            try {
                g(r.throw(m))
            } catch (_) {
                i(_)
            }
        },
        g = m => m.done ? a(m.value) : Promise.resolve(m.value).then(f, p);
    g((r = r.apply(l, s)).next())
});
import {
    i as y,
    c as v,
    e as H,
    s as $,
    t as A,
    b as Fe,
    d as De,
    u as Ne,
    m as Oe,
    a as K
} from "./web-46c35164.js";
import {
    D as B,
    j as M,
    a as L,
    t as F,
    l as E,
    p as S,
    P as Z,
    B as R,
    ac as Pe,
    c as W,
    I as le,
    G as ye,
    b as Ee,
    g as he,
    s as Me,
    ao as He
} from "./manifest-d92afe19.js";
import {
    S as Y,
    j as Le,
    b as Ge,
    g as Ve,
    e as We,
    F as Xe,
    c as ie,
    a as ue,
    y as qe,
    d as je,
    s as D
} from "./solid-js-871c99e1.js";
import {
    t as b,
    T as ge
} from "./i18n-fd9a94dd.js";
import {
    h as Q
} from "./http-696896a0.js";
import {
    C as j,
    p as Ye,
    y as Ze,
    h as Qe,
    g as Ue
} from "./helpers-ece5dfb8.js";
import {
    popupCancelBonus as Ke
} from "./cancel-bonus-b00319b6.js";
import {
    C as J
} from "./currency-format-c1ee851b.js";
import {
    s as z,
    b as Je
} from "./index-a51223a0.js";
import {
    A as ze
} from "./animate-number-04f5b3b8.js";
import {
    C as et
} from "./countdown-91927513.js";
import {
    b as x
} from "./index-9f4ab8bd.js";
import {
    r as O
} from "./index-a140eea6.js";
const tt = new B(0);
var be = {};
/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
(function(l) {
    (function() {
        var s = function() {
            this.init()
        };
        s.prototype = {
            init: function() {
                var e = this || r;
                return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = typeof window != "undefined" && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e
            },
            volume: function(e) {
                var t = this || r;
                if (e = parseFloat(e), t.ctx || T(), typeof e != "undefined" && e >= 0 && e <= 1) {
                    if (t._volume = e, t._muted) return t;
                    t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, r.ctx.currentTime);
                    for (var n = 0; n < t._howls.length; n++)
                        if (!t._howls[n]._webAudio)
                            for (var o = t._howls[n]._getSoundIds(), c = 0; c < o.length; c++) {
                                var d = t._howls[n]._soundById(o[c]);
                                d && d._node && (d._node.volume = d._volume * e)
                            }
                    return t
                }
                return t._volume
            },
            mute: function(e) {
                var t = this || r;
                t.ctx || T(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, r.ctx.currentTime);
                for (var n = 0; n < t._howls.length; n++)
                    if (!t._howls[n]._webAudio)
                        for (var o = t._howls[n]._getSoundIds(), c = 0; c < o.length; c++) {
                            var d = t._howls[n]._soundById(o[c]);
                            d && d._node && (d._node.muted = e ? !0 : d._muted)
                        }
                return t
            },
            stop: function() {
                for (var e = this || r, t = 0; t < e._howls.length; t++) e._howls[t].stop();
                return e
            },
            unload: function() {
                for (var e = this || r, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
                return e.usingWebAudio && e.ctx && typeof e.ctx.close != "undefined" && (e.ctx.close(), e.ctx = null, T()), e
            },
            codecs: function(e) {
                return (this || r)._codecs[e.replace(/^x-/, "")]
            },
            _setup: function() {
                var e = this || r;
                if (e.state = e.ctx && e.ctx.state || "suspended", e._autoSuspend(), !e.usingWebAudio)
                    if (typeof Audio != "undefined") try {
                        var t = new Audio;
                        typeof t.oncanplaythrough == "undefined" && (e._canPlayEvent = "canplay")
                    } catch (n) {
                        e.noAudio = !0
                    } else e.noAudio = !0;
                try {
                    var t = new Audio;
                    t.muted && (e.noAudio = !0)
                } catch (n) {}
                return e.noAudio || e._setupCodecs(), e
            },
            _setupCodecs: function() {
                var e = this || r,
                    t = null;
                try {
                    t = typeof Audio != "undefined" ? new Audio : null
                } catch (I) {
                    return e
                }
                if (!t || typeof t.canPlayType != "function") return e;
                var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    o = e._navigator ? e._navigator.userAgent : "",
                    c = o.match(/OPR\/(\d+)/g),
                    d = c && parseInt(c[0].split("/")[1], 10) < 33,
                    u = o.indexOf("Safari") !== -1 && o.indexOf("Chrome") === -1,
                    h = o.match(/Version\/(.*?) /),
                    w = u && h && parseInt(h[1], 10) < 15;
                return e._codecs = {
                    mp3: !!(!d && (n || t.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                    mpeg: !!n,
                    opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!(t.canPlayType('audio/wav; codecs="1"') || t.canPlayType("audio/wav")).replace(/^no$/, ""),
                    aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    m4b: !!(t.canPlayType("audio/x-m4b;") || t.canPlayType("audio/m4b;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!(!w && t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    webm: !!(!w && t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                    flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
                }, e
            },
            _unlockAudio: function() {
                var e = this || r;
                if (!(e._audioUnlocked || !e.ctx)) {
                    e._audioUnlocked = !1, e.autoUnlock = !1, !e._mobileUnloaded && e.ctx.sampleRate !== 44100 && (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                    var t = function(n) {
                        for (; e._html5AudioPool.length < e.html5PoolSize;) try {
                            var o = new Audio;
                            o._unlocked = !0, e._releaseHtml5Audio(o)
                        } catch (I) {
                            e.noAudio = !0;
                            break
                        }
                        for (var c = 0; c < e._howls.length; c++)
                            if (!e._howls[c]._webAudio)
                                for (var d = e._howls[c]._getSoundIds(), u = 0; u < d.length; u++) {
                                    var h = e._howls[c]._soundById(d[u]);
                                    h && h._node && !h._node._unlocked && (h._node._unlocked = !0, h._node.load())
                                }
                        e._autoResume();
                        var w = e.ctx.createBufferSource();
                        w.buffer = e._scratchBuffer, w.connect(e.ctx.destination), typeof w.start == "undefined" ? w.noteOn(0) : w.start(0), typeof e.ctx.resume == "function" && e.ctx.resume(), w.onended = function() {
                            w.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", t, !0), document.removeEventListener("touchend", t, !0), document.removeEventListener("click", t, !0), document.removeEventListener("keydown", t, !0);
                            for (var I = 0; I < e._howls.length; I++) e._howls[I]._emit("unlock")
                        }
                    };
                    return document.addEventListener("touchstart", t, !0), document.addEventListener("touchend", t, !0), document.addEventListener("click", t, !0), document.addEventListener("keydown", t, !0), e
                }
            },
            _obtainHtml5Audio: function() {
                var e = this || r;
                if (e._html5AudioPool.length) return e._html5AudioPool.pop();
                var t = new Audio().play();
                return t && typeof Promise != "undefined" && (t instanceof Promise || typeof t.then == "function") && t.catch(function() {
                    console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                }), new Audio
            },
            _releaseHtml5Audio: function(e) {
                var t = this || r;
                return e._unlocked && t._html5AudioPool.push(e), t
            },
            _autoSuspend: function() {
                var e = this;
                if (!(!e.autoSuspend || !e.ctx || typeof e.ctx.suspend == "undefined" || !r.usingWebAudio)) {
                    for (var t = 0; t < e._howls.length; t++)
                        if (e._howls[t]._webAudio) {
                            for (var n = 0; n < e._howls[t]._sounds.length; n++)
                                if (!e._howls[t]._sounds[n]._paused) return e
                        }
                    return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() {
                        if (e.autoSuspend) {
                            e._suspendTimer = null, e.state = "suspending";
                            var o = function() {
                                e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                            };
                            e.ctx.suspend().then(o, o)
                        }
                    }, 3e4), e
                }
            },
            _autoResume: function() {
                var e = this;
                if (!(!e.ctx || typeof e.ctx.resume == "undefined" || !r.usingWebAudio)) return e.state === "running" && e.ctx.state !== "interrupted" && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : e.state === "suspended" || e.state === "running" && e.ctx.state === "interrupted" ? (e.ctx.resume().then(function() {
                    e.state = "running";
                    for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume")
                }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : e.state === "suspending" && (e._resumeAfterSuspend = !0), e
            }
        };
        var r = new s,
            a = function(e) {
                var t = this;
                if (!e.src || e.src.length === 0) {
                    console.error("An array of source files must be passed with any new Howl.");
                    return
                }
                t.init(e)
            };
        a.prototype = {
            init: function(e) {
                var t = this;
                return r.ctx || T(), t._autoplay = e.autoplay || !1, t._format = typeof e.format != "string" ? e.format : [e.format], t._html5 = e.html5 || !1, t._muted = e.mute || !1, t._loop = e.loop || !1, t._pool = e.pool || 5, t._preload = typeof e.preload == "boolean" || e.preload === "metadata" ? e.preload : !0, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = typeof e.src != "string" ? e.src : [e.src], t._volume = e.volume !== void 0 ? e.volume : 1, t._xhr = {
                    method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                    headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                    withCredentials: e.xhr && e.xhr.withCredentials ? e.xhr.withCredentials : !1
                }, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = !1, t._onend = e.onend ? [{
                    fn: e.onend
                }] : [], t._onfade = e.onfade ? [{
                    fn: e.onfade
                }] : [], t._onload = e.onload ? [{
                    fn: e.onload
                }] : [], t._onloaderror = e.onloaderror ? [{
                    fn: e.onloaderror
                }] : [], t._onplayerror = e.onplayerror ? [{
                    fn: e.onplayerror
                }] : [], t._onpause = e.onpause ? [{
                    fn: e.onpause
                }] : [], t._onplay = e.onplay ? [{
                    fn: e.onplay
                }] : [], t._onstop = e.onstop ? [{
                    fn: e.onstop
                }] : [], t._onmute = e.onmute ? [{
                    fn: e.onmute
                }] : [], t._onvolume = e.onvolume ? [{
                    fn: e.onvolume
                }] : [], t._onrate = e.onrate ? [{
                    fn: e.onrate
                }] : [], t._onseek = e.onseek ? [{
                    fn: e.onseek
                }] : [], t._onunlock = e.onunlock ? [{
                    fn: e.onunlock
                }] : [], t._onresume = [], t._webAudio = r.usingWebAudio && !t._html5, typeof r.ctx != "undefined" && r.ctx && r.autoUnlock && r._unlockAudio(), r._howls.push(t), t._autoplay && t._queue.push({
                    event: "play",
                    action: function() {
                        t.play()
                    }
                }), t._preload && t._preload !== "none" && t.load(), t
            },
            load: function() {
                var e = this,
                    t = null;
                if (r.noAudio) {
                    e._emit("loaderror", null, "No audio support.");
                    return
                }
                typeof e._src == "string" && (e._src = [e._src]);
                for (var n = 0; n < e._src.length; n++) {
                    var o, c;
                    if (e._format && e._format[n]) o = e._format[n];
                    else {
                        if (c = e._src[n], typeof c != "string") {
                            e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }
                        o = /^data:audio\/([^;,]+);/i.exec(c), o || (o = /\.([^.]+)$/.exec(c.split("?", 1)[0])), o && (o = o[1].toLowerCase())
                    }
                    if (o || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), o && r.codecs(o)) {
                        t = e._src[n];
                        break
                    }
                }
                if (!t) {
                    e._emit("loaderror", null, "No codec support for selected audio sources.");
                    return
                }
                return e._src = t, e._state = "loading", window.location.protocol === "https:" && t.slice(0, 5) === "http:" && (e._html5 = !0, e._webAudio = !1), new i(e), e._webAudio && p(e), e
            },
            play: function(e, t) {
                var n = this,
                    o = null;
                if (typeof e == "number") o = e, e = null;
                else {
                    if (typeof e == "string" && n._state === "loaded" && !n._sprite[e]) return null;
                    if (typeof e == "undefined" && (e = "__default", !n._playLock)) {
                        for (var c = 0, d = 0; d < n._sounds.length; d++) n._sounds[d]._paused && !n._sounds[d]._ended && (c++, o = n._sounds[d]._id);
                        c === 1 ? e = null : o = null
                    }
                }
                var u = o ? n._soundById(o) : n._inactiveSound();
                if (!u) return null;
                if (o && !e && (e = u._sprite || "__default"), n._state !== "loaded") {
                    u._sprite = e, u._ended = !1;
                    var h = u._id;
                    return n._queue.push({
                        event: "play",
                        action: function() {
                            n.play(h)
                        }
                    }), h
                }
                if (o && !u._paused) return t || n._loadQueue("play"), u._id;
                n._webAudio && r._autoResume();
                var w = Math.max(0, u._seek > 0 ? u._seek : n._sprite[e][0] / 1e3),
                    I = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - w),
                    N = I * 1e3 / Math.abs(u._rate),
                    G = n._sprite[e][0] / 1e3,
                    U = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
                u._sprite = e, u._ended = !1;
                var ne = function() {
                    u._paused = !1, u._seek = w, u._start = G, u._stop = U, u._loop = !!(u._loop || n._sprite[e][2])
                };
                if (w >= U) {
                    n._ended(u);
                    return
                }
                var k = u._node;
                if (n._webAudio) {
                    var de = function() {
                        n._playLock = !1, ne(), n._refreshBuffer(u);
                        var V = u._muted || n._muted ? 0 : u._volume;
                        k.gain.setValueAtTime(V, r.ctx.currentTime), u._playStart = r.ctx.currentTime, typeof k.bufferSource.start == "undefined" ? u._loop ? k.bufferSource.noteGrainOn(0, w, 86400) : k.bufferSource.noteGrainOn(0, w, I) : u._loop ? k.bufferSource.start(0, w, 86400) : k.bufferSource.start(0, w, I), N !== 1 / 0 && (n._endTimers[u._id] = setTimeout(n._ended.bind(n, u), N)), t || setTimeout(function() {
                            n._emit("play", u._id), n._loadQueue()
                        }, 0)
                    };
                    r.state === "running" && r.ctx.state !== "interrupted" ? de() : (n._playLock = !0, n.once("resume", de), n._clearTimer(u._id))
                } else {
                    var fe = function() {
                        k.currentTime = w, k.muted = u._muted || n._muted || r._muted || k.muted, k.volume = u._volume * r.volume(), k.playbackRate = u._rate;
                        try {
                            var V = k.play();
                            if (V && typeof Promise != "undefined" && (V instanceof Promise || typeof V.then == "function") ? (n._playLock = !0, ne(), V.then(function() {
                                    n._playLock = !1, k._unlocked = !0, t ? n._loadQueue() : n._emit("play", u._id)
                                }).catch(function() {
                                    n._playLock = !1, n._emit("playerror", u._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), u._ended = !0, u._paused = !0
                                })) : t || (n._playLock = !1, ne(), n._emit("play", u._id)), k.playbackRate = u._rate, k.paused) {
                                n._emit("playerror", u._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                return
                            }
                            e !== "__default" || u._loop ? n._endTimers[u._id] = setTimeout(n._ended.bind(n, u), N) : (n._endTimers[u._id] = function() {
                                n._ended(u), k.removeEventListener("ended", n._endTimers[u._id], !1)
                            }, k.addEventListener("ended", n._endTimers[u._id], !1))
                        } catch (Se) {
                            n._emit("playerror", u._id, Se)
                        }
                    };
                    k.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (k.src = n._src, k.load());
                    var ke = window && window.ejecta || !k.readyState && r._navigator.isCocoonJS;
                    if (k.readyState >= 3 || ke) fe();
                    else {
                        n._playLock = !0, n._state = "loading";
                        var _e = function() {
                            n._state = "loaded", fe(), k.removeEventListener(r._canPlayEvent, _e, !1)
                        };
                        k.addEventListener(r._canPlayEvent, _e, !1), n._clearTimer(u._id)
                    }
                }
                return u._id
            },
            pause: function(e) {
                var t = this;
                if (t._state !== "loaded" || t._playLock) return t._queue.push({
                    event: "pause",
                    action: function() {
                        t.pause(e)
                    }
                }), t;
                for (var n = t._getSoundIds(e), o = 0; o < n.length; o++) {
                    t._clearTimer(n[o]);
                    var c = t._soundById(n[o]);
                    if (c && !c._paused && (c._seek = t.seek(n[o]), c._rateSeek = 0, c._paused = !0, t._stopFade(n[o]), c._node))
                        if (t._webAudio) {
                            if (!c._node.bufferSource) continue;
                            typeof c._node.bufferSource.stop == "undefined" ? c._node.bufferSource.noteOff(0) : c._node.bufferSource.stop(0), t._cleanBuffer(c._node)
                        } else(!isNaN(c._node.duration) || c._node.duration === 1 / 0) && c._node.pause();
                    arguments[1] || t._emit("pause", c ? c._id : null)
                }
                return t
            },
            stop: function(e, t) {
                var n = this;
                if (n._state !== "loaded" || n._playLock) return n._queue.push({
                    event: "stop",
                    action: function() {
                        n.stop(e)
                    }
                }), n;
                for (var o = n._getSoundIds(e), c = 0; c < o.length; c++) {
                    n._clearTimer(o[c]);
                    var d = n._soundById(o[c]);
                    d && (d._seek = d._start || 0, d._rateSeek = 0, d._paused = !0, d._ended = !0, n._stopFade(o[c]), d._node && (n._webAudio ? d._node.bufferSource && (typeof d._node.bufferSource.stop == "undefined" ? d._node.bufferSource.noteOff(0) : d._node.bufferSource.stop(0), n._cleanBuffer(d._node)) : (!isNaN(d._node.duration) || d._node.duration === 1 / 0) && (d._node.currentTime = d._start || 0, d._node.pause(), d._node.duration === 1 / 0 && n._clearSound(d._node))), t || n._emit("stop", d._id))
                }
                return n
            },
            mute: function(e, t) {
                var n = this;
                if (n._state !== "loaded" || n._playLock) return n._queue.push({
                    event: "mute",
                    action: function() {
                        n.mute(e, t)
                    }
                }), n;
                if (typeof t == "undefined")
                    if (typeof e == "boolean") n._muted = e;
                    else return n._muted;
                for (var o = n._getSoundIds(t), c = 0; c < o.length; c++) {
                    var d = n._soundById(o[c]);
                    d && (d._muted = e, d._interval && n._stopFade(d._id), n._webAudio && d._node ? d._node.gain.setValueAtTime(e ? 0 : d._volume, r.ctx.currentTime) : d._node && (d._node.muted = r._muted ? !0 : e), n._emit("mute", d._id))
                }
                return n
            },
            volume: function() {
                var e = this,
                    t = arguments,
                    n, o;
                if (t.length === 0) return e._volume;
                if (t.length === 1 || t.length === 2 && typeof t[1] == "undefined") {
                    var c = e._getSoundIds(),
                        d = c.indexOf(t[0]);
                    d >= 0 ? o = parseInt(t[0], 10) : n = parseFloat(t[0])
                } else t.length >= 2 && (n = parseFloat(t[0]), o = parseInt(t[1], 10));
                var u;
                if (typeof n != "undefined" && n >= 0 && n <= 1) {
                    if (e._state !== "loaded" || e._playLock) return e._queue.push({
                        event: "volume",
                        action: function() {
                            e.volume.apply(e, t)
                        }
                    }), e;
                    typeof o == "undefined" && (e._volume = n), o = e._getSoundIds(o);
                    for (var h = 0; h < o.length; h++) u = e._soundById(o[h]), u && (u._volume = n, t[2] || e._stopFade(o[h]), e._webAudio && u._node && !u._muted ? u._node.gain.setValueAtTime(n, r.ctx.currentTime) : u._node && !u._muted && (u._node.volume = n * r.volume()), e._emit("volume", u._id))
                } else return u = o ? e._soundById(o) : e._sounds[0], u ? u._volume : 0;
                return e
            },
            fade: function(e, t, n, o) {
                var c = this;
                if (c._state !== "loaded" || c._playLock) return c._queue.push({
                    event: "fade",
                    action: function() {
                        c.fade(e, t, n, o)
                    }
                }), c;
                e = Math.min(Math.max(0, parseFloat(e)), 1), t = Math.min(Math.max(0, parseFloat(t)), 1), n = parseFloat(n), c.volume(e, o);
                for (var d = c._getSoundIds(o), u = 0; u < d.length; u++) {
                    var h = c._soundById(d[u]);
                    if (h) {
                        if (o || c._stopFade(d[u]), c._webAudio && !h._muted) {
                            var w = r.ctx.currentTime,
                                I = w + n / 1e3;
                            h._volume = e, h._node.gain.setValueAtTime(e, w), h._node.gain.linearRampToValueAtTime(t, I)
                        }
                        c._startFadeInterval(h, e, t, n, d[u], typeof o == "undefined")
                    }
                }
                return c
            },
            _startFadeInterval: function(e, t, n, o, c, d) {
                var u = this,
                    h = t,
                    w = n - t,
                    I = Math.abs(w / .01),
                    N = Math.max(4, I > 0 ? o / I : o),
                    G = Date.now();
                e._fadeTo = n, e._interval = setInterval(function() {
                    var U = (Date.now() - G) / o;
                    G = Date.now(), h += w * U, h = Math.round(h * 100) / 100, w < 0 ? h = Math.max(n, h) : h = Math.min(n, h), u._webAudio ? e._volume = h : u.volume(h, e._id, !0), d && (u._volume = h), (n < t && h <= n || n > t && h >= n) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, u.volume(n, e._id), u._emit("fade", e._id))
                }, N)
            },
            _stopFade: function(e) {
                var t = this,
                    n = t._soundById(e);
                return n && n._interval && (t._webAudio && n._node.gain.cancelScheduledValues(r.ctx.currentTime), clearInterval(n._interval), n._interval = null, t.volume(n._fadeTo, e), n._fadeTo = null, t._emit("fade", e)), t
            },
            loop: function() {
                var e = this,
                    t = arguments,
                    n, o, c;
                if (t.length === 0) return e._loop;
                if (t.length === 1)
                    if (typeof t[0] == "boolean") n = t[0], e._loop = n;
                    else return c = e._soundById(parseInt(t[0], 10)), c ? c._loop : !1;
                else t.length === 2 && (n = t[0], o = parseInt(t[1], 10));
                for (var d = e._getSoundIds(o), u = 0; u < d.length; u++) c = e._soundById(d[u]), c && (c._loop = n, e._webAudio && c._node && c._node.bufferSource && (c._node.bufferSource.loop = n, n && (c._node.bufferSource.loopStart = c._start || 0, c._node.bufferSource.loopEnd = c._stop, e.playing(d[u]) && (e.pause(d[u], !0), e.play(d[u], !0)))));
                return e
            },
            rate: function() {
                var e = this,
                    t = arguments,
                    n, o;
                if (t.length === 0) o = e._sounds[0]._id;
                else if (t.length === 1) {
                    var c = e._getSoundIds(),
                        d = c.indexOf(t[0]);
                    d >= 0 ? o = parseInt(t[0], 10) : n = parseFloat(t[0])
                } else t.length === 2 && (n = parseFloat(t[0]), o = parseInt(t[1], 10));
                var u;
                if (typeof n == "number") {
                    if (e._state !== "loaded" || e._playLock) return e._queue.push({
                        event: "rate",
                        action: function() {
                            e.rate.apply(e, t)
                        }
                    }), e;
                    typeof o == "undefined" && (e._rate = n), o = e._getSoundIds(o);
                    for (var h = 0; h < o.length; h++)
                        if (u = e._soundById(o[h]), u) {
                            e.playing(o[h]) && (u._rateSeek = e.seek(o[h]), u._playStart = e._webAudio ? r.ctx.currentTime : u._playStart), u._rate = n, e._webAudio && u._node && u._node.bufferSource ? u._node.bufferSource.playbackRate.setValueAtTime(n, r.ctx.currentTime) : u._node && (u._node.playbackRate = n);
                            var w = e.seek(o[h]),
                                I = (e._sprite[u._sprite][0] + e._sprite[u._sprite][1]) / 1e3 - w,
                                N = I * 1e3 / Math.abs(u._rate);
                            (e._endTimers[o[h]] || !u._paused) && (e._clearTimer(o[h]), e._endTimers[o[h]] = setTimeout(e._ended.bind(e, u), N)), e._emit("rate", u._id)
                        }
                } else return u = e._soundById(o), u ? u._rate : e._rate;
                return e
            },
            seek: function() {
                var e = this,
                    t = arguments,
                    n, o;
                if (t.length === 0) e._sounds.length && (o = e._sounds[0]._id);
                else if (t.length === 1) {
                    var c = e._getSoundIds(),
                        d = c.indexOf(t[0]);
                    d >= 0 ? o = parseInt(t[0], 10) : e._sounds.length && (o = e._sounds[0]._id, n = parseFloat(t[0]))
                } else t.length === 2 && (n = parseFloat(t[0]), o = parseInt(t[1], 10));
                if (typeof o == "undefined") return 0;
                if (typeof n == "number" && (e._state !== "loaded" || e._playLock)) return e._queue.push({
                    event: "seek",
                    action: function() {
                        e.seek.apply(e, t)
                    }
                }), e;
                var u = e._soundById(o);
                if (u)
                    if (typeof n == "number" && n >= 0) {
                        var h = e.playing(o);
                        h && e.pause(o, !0), u._seek = n, u._ended = !1, e._clearTimer(o), !e._webAudio && u._node && !isNaN(u._node.duration) && (u._node.currentTime = n);
                        var w = function() {
                            h && e.play(o, !0), e._emit("seek", o)
                        };
                        if (h && !e._webAudio) {
                            var I = function() {
                                e._playLock ? setTimeout(I, 0) : w()
                            };
                            setTimeout(I, 0)
                        } else w()
                    } else if (e._webAudio) {
                    var N = e.playing(o) ? r.ctx.currentTime - u._playStart : 0,
                        G = u._rateSeek ? u._rateSeek - u._seek : 0;
                    return u._seek + (G + N * Math.abs(u._rate))
                } else return u._node.currentTime;
                return e
            },
            playing: function(e) {
                var t = this;
                if (typeof e == "number") {
                    var n = t._soundById(e);
                    return n ? !n._paused : !1
                }
                for (var o = 0; o < t._sounds.length; o++)
                    if (!t._sounds[o]._paused) return !0;
                return !1
            },
            duration: function(e) {
                var t = this,
                    n = t._duration,
                    o = t._soundById(e);
                return o && (n = t._sprite[o._sprite][1] / 1e3), n
            },
            state: function() {
                return this._state
            },
            unload: function() {
                for (var e = this, t = e._sounds, n = 0; n < t.length; n++) t[n]._paused || e.stop(t[n]._id), e._webAudio || (e._clearSound(t[n]._node), t[n]._node.removeEventListener("error", t[n]._errorFn, !1), t[n]._node.removeEventListener(r._canPlayEvent, t[n]._loadFn, !1), t[n]._node.removeEventListener("ended", t[n]._endFn, !1), r._releaseHtml5Audio(t[n]._node)), delete t[n]._node, e._clearTimer(t[n]._id);
                var o = r._howls.indexOf(e);
                o >= 0 && r._howls.splice(o, 1);
                var c = !0;
                for (n = 0; n < r._howls.length; n++)
                    if (r._howls[n]._src === e._src || e._src.indexOf(r._howls[n]._src) >= 0) {
                        c = !1;
                        break
                    }
                return f && c && delete f[e._src], r.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
            },
            on: function(e, t, n, o) {
                var c = this,
                    d = c["_on" + e];
                return typeof t == "function" && d.push(o ? {
                    id: n,
                    fn: t,
                    once: o
                } : {
                    id: n,
                    fn: t
                }), c
            },
            off: function(e, t, n) {
                var o = this,
                    c = o["_on" + e],
                    d = 0;
                if (typeof t == "number" && (n = t, t = null), t || n)
                    for (d = 0; d < c.length; d++) {
                        var u = n === c[d].id;
                        if (t === c[d].fn && u || !t && u) {
                            c.splice(d, 1);
                            break
                        }
                    } else if (e) o["_on" + e] = [];
                    else {
                        var h = Object.keys(o);
                        for (d = 0; d < h.length; d++) h[d].indexOf("_on") === 0 && Array.isArray(o[h[d]]) && (o[h[d]] = [])
                    }
                return o
            },
            once: function(e, t, n) {
                var o = this;
                return o.on(e, t, n, 1), o
            },
            _emit: function(e, t, n) {
                for (var o = this, c = o["_on" + e], d = c.length - 1; d >= 0; d--)(!c[d].id || c[d].id === t || e === "load") && (setTimeout(function(u) {
                    u.call(this, t, n)
                }.bind(o, c[d].fn), 0), c[d].once && o.off(e, c[d].fn, c[d].id));
                return o._loadQueue(e), o
            },
            _loadQueue: function(e) {
                var t = this;
                if (t._queue.length > 0) {
                    var n = t._queue[0];
                    n.event === e && (t._queue.shift(), t._loadQueue()), e || n.action()
                }
                return t
            },
            _ended: function(e) {
                var t = this,
                    n = e._sprite;
                if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(t._ended.bind(t, e), 100), t;
                var o = !!(e._loop || t._sprite[n][2]);
                if (t._emit("end", e._id), !t._webAudio && o && t.stop(e._id, !0).play(e._id), t._webAudio && o) {
                    t._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = r.ctx.currentTime;
                    var c = (e._stop - e._start) * 1e3 / Math.abs(e._rate);
                    t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), c)
                }
                return t._webAudio && !o && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, t._clearTimer(e._id), t._cleanBuffer(e._node), r._autoSuspend()), !t._webAudio && !o && t.stop(e._id, !0), t
            },
            _clearTimer: function(e) {
                var t = this;
                if (t._endTimers[e]) {
                    if (typeof t._endTimers[e] != "function") clearTimeout(t._endTimers[e]);
                    else {
                        var n = t._soundById(e);
                        n && n._node && n._node.removeEventListener("ended", t._endTimers[e], !1)
                    }
                    delete t._endTimers[e]
                }
                return t
            },
            _soundById: function(e) {
                for (var t = this, n = 0; n < t._sounds.length; n++)
                    if (e === t._sounds[n]._id) return t._sounds[n];
                return null
            },
            _inactiveSound: function() {
                var e = this;
                e._drain();
                for (var t = 0; t < e._sounds.length; t++)
                    if (e._sounds[t]._ended) return e._sounds[t].reset();
                return new i(e)
            },
            _drain: function() {
                var e = this,
                    t = e._pool,
                    n = 0,
                    o = 0;
                if (!(e._sounds.length < t)) {
                    for (o = 0; o < e._sounds.length; o++) e._sounds[o]._ended && n++;
                    for (o = e._sounds.length - 1; o >= 0; o--) {
                        if (n <= t) return;
                        e._sounds[o]._ended && (e._webAudio && e._sounds[o]._node && e._sounds[o]._node.disconnect(0), e._sounds.splice(o, 1), n--)
                    }
                }
            },
            _getSoundIds: function(e) {
                var t = this;
                if (typeof e == "undefined") {
                    for (var n = [], o = 0; o < t._sounds.length; o++) n.push(t._sounds[o]._id);
                    return n
                } else return [e]
            },
            _refreshBuffer: function(e) {
                var t = this;
                return e._node.bufferSource = r.ctx.createBufferSource(), e._node.bufferSource.buffer = f[t._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, r.ctx.currentTime), t
            },
            _cleanBuffer: function(e) {
                var t = this,
                    n = r._navigator && r._navigator.vendor.indexOf("Apple") >= 0;
                if (!e.bufferSource) return t;
                if (r._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), n)) try {
                    e.bufferSource.buffer = r._scratchBuffer
                } catch (o) {}
                return e.bufferSource = null, t
            },
            _clearSound: function(e) {
                var t = /MSIE |Trident\//.test(r._navigator && r._navigator.userAgent);
                t || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
            }
        };
        var i = function(e) {
            this._parent = e, this.init()
        };
        i.prototype = {
            init: function() {
                var e = this,
                    t = e._parent;
                return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++r._counter, t._sounds.push(e), e.create(), e
            },
            create: function() {
                var e = this,
                    t = e._parent,
                    n = r._muted || e._muted || e._parent._muted ? 0 : e._volume;
                return t._webAudio ? (e._node = typeof r.ctx.createGain == "undefined" ? r.ctx.createGainNode() : r.ctx.createGain(), e._node.gain.setValueAtTime(n, r.ctx.currentTime), e._node.paused = !0, e._node.connect(r.masterGain)) : r.noAudio || (e._node = r._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(r._canPlayEvent, e._loadFn, !1), e._endFn = e._endListener.bind(e), e._node.addEventListener("ended", e._endFn, !1), e._node.src = t._src, e._node.preload = t._preload === !0 ? "auto" : t._preload, e._node.volume = n * r.volume(), e._node.load()), e
            },
            reset: function() {
                var e = this,
                    t = e._parent;
                return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++r._counter, e
            },
            _errorListener: function() {
                var e = this;
                e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1)
            },
            _loadListener: function() {
                var e = this,
                    t = e._parent;
                t._duration = Math.ceil(e._node.duration * 10) / 10, Object.keys(t._sprite).length === 0 && (t._sprite = {
                    __default: [0, t._duration * 1e3]
                }), t._state !== "loaded" && (t._state = "loaded", t._emit("load"), t._loadQueue()), e._node.removeEventListener(r._canPlayEvent, e._loadFn, !1)
            },
            _endListener: function() {
                var e = this,
                    t = e._parent;
                t._duration === 1 / 0 && (t._duration = Math.ceil(e._node.duration * 10) / 10, t._sprite.__default[1] === 1 / 0 && (t._sprite.__default[1] = t._duration * 1e3), t._ended(e)), e._node.removeEventListener("ended", e._endFn, !1)
            }
        };
        var f = {},
            p = function(e) {
                var t = e._src;
                if (f[t]) {
                    e._duration = f[t].duration, _(e);
                    return
                }
                if (/^data:[^;]+;base64,/.test(t)) {
                    for (var n = atob(t.split(",")[1]), o = new Uint8Array(n.length), c = 0; c < n.length; ++c) o[c] = n.charCodeAt(c);
                    m(o.buffer, e)
                } else {
                    var d = new XMLHttpRequest;
                    d.open(e._xhr.method, t, !0), d.withCredentials = e._xhr.withCredentials, d.responseType = "arraybuffer", e._xhr.headers && Object.keys(e._xhr.headers).forEach(function(u) {
                        d.setRequestHeader(u, e._xhr.headers[u])
                    }), d.onload = function() {
                        var u = (d.status + "")[0];
                        if (u !== "0" && u !== "2" && u !== "3") {
                            e._emit("loaderror", null, "Failed loading audio file with status: " + d.status + ".");
                            return
                        }
                        m(d.response, e)
                    }, d.onerror = function() {
                        e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete f[t], e.load())
                    }, g(d)
                }
            },
            g = function(e) {
                try {
                    e.send()
                } catch (t) {
                    e.onerror()
                }
            },
            m = function(e, t) {
                var n = function() {
                        t._emit("loaderror", null, "Decoding audio data failed.")
                    },
                    o = function(c) {
                        c && t._sounds.length > 0 ? (f[t._src] = c, _(t, c)) : n()
                    };
                typeof Promise != "undefined" && r.ctx.decodeAudioData.length === 1 ? r.ctx.decodeAudioData(e).then(o).catch(n) : r.ctx.decodeAudioData(e, o, n)
            },
            _ = function(e, t) {
                t && !e._duration && (e._duration = t.duration), Object.keys(e._sprite).length === 0 && (e._sprite = {
                    __default: [0, e._duration * 1e3]
                }), e._state !== "loaded" && (e._state = "loaded", e._emit("load"), e._loadQueue())
            },
            T = function() {
                if (r.usingWebAudio) {
                    try {
                        typeof AudioContext != "undefined" ? r.ctx = new AudioContext : typeof webkitAudioContext != "undefined" ? r.ctx = new webkitAudioContext : r.usingWebAudio = !1
                    } catch (c) {
                        r.usingWebAudio = !1
                    }
                    r.ctx || (r.usingWebAudio = !1);
                    var e = /iP(hone|od|ad)/.test(r._navigator && r._navigator.platform),
                        t = r._navigator && r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                        n = t ? parseInt(t[1], 10) : null;
                    if (e && n && n < 9) {
                        var o = /safari/.test(r._navigator && r._navigator.userAgent.toLowerCase());
                        r._navigator && !o && (r.usingWebAudio = !1)
                    }
                    r.usingWebAudio && (r.masterGain = typeof r.ctx.createGain == "undefined" ? r.ctx.createGainNode() : r.ctx.createGain(), r.masterGain.gain.setValueAtTime(r._muted ? 0 : r._volume, r.ctx.currentTime), r.masterGain.connect(r.ctx.destination)), r._setup()
                }
            };
        l.Howler = r, l.Howl = a, typeof j != "undefined" ? (j.HowlerGlobal = s, j.Howler = r, j.Howl = a, j.Sound = i) : typeof window != "undefined" && (window.HowlerGlobal = s, window.Howler = r, window.Howl = a, window.Sound = i)
    })();
    /*!
     *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
     *  
     *  howler.js v2.2.4
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     */
    (function() {
        HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(r) {
            var a = this;
            if (!a.ctx || !a.ctx.listener) return a;
            for (var i = a._howls.length - 1; i >= 0; i--) a._howls[i].stereo(r);
            return a
        }, HowlerGlobal.prototype.pos = function(r, a, i) {
            var f = this;
            if (!f.ctx || !f.ctx.listener) return f;
            if (a = typeof a != "number" ? f._pos[1] : a, i = typeof i != "number" ? f._pos[2] : i, typeof r == "number") f._pos = [r, a, i], typeof f.ctx.listener.positionX != "undefined" ? (f.ctx.listener.positionX.setTargetAtTime(f._pos[0], Howler.ctx.currentTime, .1), f.ctx.listener.positionY.setTargetAtTime(f._pos[1], Howler.ctx.currentTime, .1), f.ctx.listener.positionZ.setTargetAtTime(f._pos[2], Howler.ctx.currentTime, .1)) : f.ctx.listener.setPosition(f._pos[0], f._pos[1], f._pos[2]);
            else return f._pos;
            return f
        }, HowlerGlobal.prototype.orientation = function(r, a, i, f, p, g) {
            var m = this;
            if (!m.ctx || !m.ctx.listener) return m;
            var _ = m._orientation;
            if (a = typeof a != "number" ? _[1] : a, i = typeof i != "number" ? _[2] : i, f = typeof f != "number" ? _[3] : f, p = typeof p != "number" ? _[4] : p, g = typeof g != "number" ? _[5] : g, typeof r == "number") m._orientation = [r, a, i, f, p, g], typeof m.ctx.listener.forwardX != "undefined" ? (m.ctx.listener.forwardX.setTargetAtTime(r, Howler.ctx.currentTime, .1), m.ctx.listener.forwardY.setTargetAtTime(a, Howler.ctx.currentTime, .1), m.ctx.listener.forwardZ.setTargetAtTime(i, Howler.ctx.currentTime, .1), m.ctx.listener.upX.setTargetAtTime(f, Howler.ctx.currentTime, .1), m.ctx.listener.upY.setTargetAtTime(p, Howler.ctx.currentTime, .1), m.ctx.listener.upZ.setTargetAtTime(g, Howler.ctx.currentTime, .1)) : m.ctx.listener.setOrientation(r, a, i, f, p, g);
            else return _;
            return m
        }, Howl.prototype.init = function(r) {
            return function(a) {
                var i = this;
                return i._orientation = a.orientation || [1, 0, 0], i._stereo = a.stereo || null, i._pos = a.pos || null, i._pannerAttr = {
                    coneInnerAngle: typeof a.coneInnerAngle != "undefined" ? a.coneInnerAngle : 360,
                    coneOuterAngle: typeof a.coneOuterAngle != "undefined" ? a.coneOuterAngle : 360,
                    coneOuterGain: typeof a.coneOuterGain != "undefined" ? a.coneOuterGain : 0,
                    distanceModel: typeof a.distanceModel != "undefined" ? a.distanceModel : "inverse",
                    maxDistance: typeof a.maxDistance != "undefined" ? a.maxDistance : 1e4,
                    panningModel: typeof a.panningModel != "undefined" ? a.panningModel : "HRTF",
                    refDistance: typeof a.refDistance != "undefined" ? a.refDistance : 1,
                    rolloffFactor: typeof a.rolloffFactor != "undefined" ? a.rolloffFactor : 1
                }, i._onstereo = a.onstereo ? [{
                    fn: a.onstereo
                }] : [], i._onpos = a.onpos ? [{
                    fn: a.onpos
                }] : [], i._onorientation = a.onorientation ? [{
                    fn: a.onorientation
                }] : [], r.call(this, a)
            }
        }(Howl.prototype.init), Howl.prototype.stereo = function(r, a) {
            var i = this;
            if (!i._webAudio) return i;
            if (i._state !== "loaded") return i._queue.push({
                event: "stereo",
                action: function() {
                    i.stereo(r, a)
                }
            }), i;
            var f = typeof Howler.ctx.createStereoPanner == "undefined" ? "spatial" : "stereo";
            if (typeof a == "undefined")
                if (typeof r == "number") i._stereo = r, i._pos = [r, 0, 0];
                else return i._stereo;
            for (var p = i._getSoundIds(a), g = 0; g < p.length; g++) {
                var m = i._soundById(p[g]);
                if (m)
                    if (typeof r == "number") m._stereo = r, m._pos = [r, 0, 0], m._node && (m._pannerAttr.panningModel = "equalpower", (!m._panner || !m._panner.pan) && s(m, f), f === "spatial" ? typeof m._panner.positionX != "undefined" ? (m._panner.positionX.setValueAtTime(r, Howler.ctx.currentTime), m._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), m._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : m._panner.setPosition(r, 0, 0) : m._panner.pan.setValueAtTime(r, Howler.ctx.currentTime)), i._emit("stereo", m._id);
                    else return m._stereo
            }
            return i
        }, Howl.prototype.pos = function(r, a, i, f) {
            var p = this;
            if (!p._webAudio) return p;
            if (p._state !== "loaded") return p._queue.push({
                event: "pos",
                action: function() {
                    p.pos(r, a, i, f)
                }
            }), p;
            if (a = typeof a != "number" ? 0 : a, i = typeof i != "number" ? -.5 : i, typeof f == "undefined")
                if (typeof r == "number") p._pos = [r, a, i];
                else return p._pos;
            for (var g = p._getSoundIds(f), m = 0; m < g.length; m++) {
                var _ = p._soundById(g[m]);
                if (_)
                    if (typeof r == "number") _._pos = [r, a, i], _._node && ((!_._panner || _._panner.pan) && s(_, "spatial"), typeof _._panner.positionX != "undefined" ? (_._panner.positionX.setValueAtTime(r, Howler.ctx.currentTime), _._panner.positionY.setValueAtTime(a, Howler.ctx.currentTime), _._panner.positionZ.setValueAtTime(i, Howler.ctx.currentTime)) : _._panner.setPosition(r, a, i)), p._emit("pos", _._id);
                    else return _._pos
            }
            return p
        }, Howl.prototype.orientation = function(r, a, i, f) {
            var p = this;
            if (!p._webAudio) return p;
            if (p._state !== "loaded") return p._queue.push({
                event: "orientation",
                action: function() {
                    p.orientation(r, a, i, f)
                }
            }), p;
            if (a = typeof a != "number" ? p._orientation[1] : a, i = typeof i != "number" ? p._orientation[2] : i, typeof f == "undefined")
                if (typeof r == "number") p._orientation = [r, a, i];
                else return p._orientation;
            for (var g = p._getSoundIds(f), m = 0; m < g.length; m++) {
                var _ = p._soundById(g[m]);
                if (_)
                    if (typeof r == "number") _._orientation = [r, a, i], _._node && (_._panner || (_._pos || (_._pos = p._pos || [0, 0, -.5]), s(_, "spatial")), typeof _._panner.orientationX != "undefined" ? (_._panner.orientationX.setValueAtTime(r, Howler.ctx.currentTime), _._panner.orientationY.setValueAtTime(a, Howler.ctx.currentTime), _._panner.orientationZ.setValueAtTime(i, Howler.ctx.currentTime)) : _._panner.setOrientation(r, a, i)), p._emit("orientation", _._id);
                    else return _._orientation
            }
            return p
        }, Howl.prototype.pannerAttr = function() {
            var r = this,
                a = arguments,
                i, f, p;
            if (!r._webAudio) return r;
            if (a.length === 0) return r._pannerAttr;
            if (a.length === 1)
                if (typeof a[0] == "object") i = a[0], typeof f == "undefined" && (i.pannerAttr || (i.pannerAttr = {
                    coneInnerAngle: i.coneInnerAngle,
                    coneOuterAngle: i.coneOuterAngle,
                    coneOuterGain: i.coneOuterGain,
                    distanceModel: i.distanceModel,
                    maxDistance: i.maxDistance,
                    refDistance: i.refDistance,
                    rolloffFactor: i.rolloffFactor,
                    panningModel: i.panningModel
                }), r._pannerAttr = {
                    coneInnerAngle: typeof i.pannerAttr.coneInnerAngle != "undefined" ? i.pannerAttr.coneInnerAngle : r._coneInnerAngle,
                    coneOuterAngle: typeof i.pannerAttr.coneOuterAngle != "undefined" ? i.pannerAttr.coneOuterAngle : r._coneOuterAngle,
                    coneOuterGain: typeof i.pannerAttr.coneOuterGain != "undefined" ? i.pannerAttr.coneOuterGain : r._coneOuterGain,
                    distanceModel: typeof i.pannerAttr.distanceModel != "undefined" ? i.pannerAttr.distanceModel : r._distanceModel,
                    maxDistance: typeof i.pannerAttr.maxDistance != "undefined" ? i.pannerAttr.maxDistance : r._maxDistance,
                    refDistance: typeof i.pannerAttr.refDistance != "undefined" ? i.pannerAttr.refDistance : r._refDistance,
                    rolloffFactor: typeof i.pannerAttr.rolloffFactor != "undefined" ? i.pannerAttr.rolloffFactor : r._rolloffFactor,
                    panningModel: typeof i.pannerAttr.panningModel != "undefined" ? i.pannerAttr.panningModel : r._panningModel
                });
                else return p = r._soundById(parseInt(a[0], 10)), p ? p._pannerAttr : r._pannerAttr;
            else a.length === 2 && (i = a[0], f = parseInt(a[1], 10));
            for (var g = r._getSoundIds(f), m = 0; m < g.length; m++)
                if (p = r._soundById(g[m]), p) {
                    var _ = p._pannerAttr;
                    _ = {
                        coneInnerAngle: typeof i.coneInnerAngle != "undefined" ? i.coneInnerAngle : _.coneInnerAngle,
                        coneOuterAngle: typeof i.coneOuterAngle != "undefined" ? i.coneOuterAngle : _.coneOuterAngle,
                        coneOuterGain: typeof i.coneOuterGain != "undefined" ? i.coneOuterGain : _.coneOuterGain,
                        distanceModel: typeof i.distanceModel != "undefined" ? i.distanceModel : _.distanceModel,
                        maxDistance: typeof i.maxDistance != "undefined" ? i.maxDistance : _.maxDistance,
                        refDistance: typeof i.refDistance != "undefined" ? i.refDistance : _.refDistance,
                        rolloffFactor: typeof i.rolloffFactor != "undefined" ? i.rolloffFactor : _.rolloffFactor,
                        panningModel: typeof i.panningModel != "undefined" ? i.panningModel : _.panningModel
                    };
                    var T = p._panner;
                    T || (p._pos || (p._pos = r._pos || [0, 0, -.5]), s(p, "spatial"), T = p._panner), T.coneInnerAngle = _.coneInnerAngle, T.coneOuterAngle = _.coneOuterAngle, T.coneOuterGain = _.coneOuterGain, T.distanceModel = _.distanceModel, T.maxDistance = _.maxDistance, T.refDistance = _.refDistance, T.rolloffFactor = _.rolloffFactor, T.panningModel = _.panningModel
                }
            return r
        }, Sound.prototype.init = function(r) {
            return function() {
                var a = this,
                    i = a._parent;
                a._orientation = i._orientation, a._stereo = i._stereo, a._pos = i._pos, a._pannerAttr = i._pannerAttr, r.call(this), a._stereo ? i.stereo(a._stereo) : a._pos && i.pos(a._pos[0], a._pos[1], a._pos[2], a._id)
            }
        }(Sound.prototype.init), Sound.prototype.reset = function(r) {
            return function() {
                var a = this,
                    i = a._parent;
                return a._orientation = i._orientation, a._stereo = i._stereo, a._pos = i._pos, a._pannerAttr = i._pannerAttr, a._stereo ? i.stereo(a._stereo) : a._pos ? i.pos(a._pos[0], a._pos[1], a._pos[2], a._id) : a._panner && (a._panner.disconnect(0), a._panner = void 0, i._refreshBuffer(a)), r.call(this)
            }
        }(Sound.prototype.reset);
        var s = function(r, a) {
            a = a || "spatial", a === "spatial" ? (r._panner = Howler.ctx.createPanner(), r._panner.coneInnerAngle = r._pannerAttr.coneInnerAngle, r._panner.coneOuterAngle = r._pannerAttr.coneOuterAngle, r._panner.coneOuterGain = r._pannerAttr.coneOuterGain, r._panner.distanceModel = r._pannerAttr.distanceModel, r._panner.maxDistance = r._pannerAttr.maxDistance, r._panner.refDistance = r._pannerAttr.refDistance, r._panner.rolloffFactor = r._pannerAttr.rolloffFactor, r._panner.panningModel = r._pannerAttr.panningModel, typeof r._panner.positionX != "undefined" ? (r._panner.positionX.setValueAtTime(r._pos[0], Howler.ctx.currentTime), r._panner.positionY.setValueAtTime(r._pos[1], Howler.ctx.currentTime), r._panner.positionZ.setValueAtTime(r._pos[2], Howler.ctx.currentTime)) : r._panner.setPosition(r._pos[0], r._pos[1], r._pos[2]), typeof r._panner.orientationX != "undefined" ? (r._panner.orientationX.setValueAtTime(r._orientation[0], Howler.ctx.currentTime), r._panner.orientationY.setValueAtTime(r._orientation[1], Howler.ctx.currentTime), r._panner.orientationZ.setValueAtTime(r._orientation[2], Howler.ctx.currentTime)) : r._panner.setOrientation(r._orientation[0], r._orientation[1], r._orientation[2])) : (r._panner = Howler.ctx.createStereoPanner(), r._panner.pan.setValueAtTime(r._stereo, Howler.ctx.currentTime)), r._panner.connect(r._node), r._paused || r._parent.pause(r._id, !0).play(r._id, !0)
        }
    })()
})(be);
const rt = "/modules/bonus2/assets/claim-d7b4098e.mp3",
    nt = "/modules/bonus2/assets/spinSounds-b8fb8ba1.mp3";
class we extends be.Howl {
    constructor(s) {
        super(X({
            preload: !1
        }, s))
    }
    play(s) {
        return this.state() === "unloaded" && this.load(), super.play(s)
    }
}
const ee = new we({
        src: nt,
        sprite: {
            SpinOpen: [0, 1979],
            SpinAndBonus: [1979, 8268],
            Click: [10247, 306],
            Collect: [10553, 601]
        }
    }),
    at = new we({
        src: rt
    }),
    te = {
        loadSpinSounds: () => {
            ee.load()
        },
        claim: () => {
            if (M.setting.soundEffectEnable) try {
                at.play()
            } catch (l) {}
        },
        spinStart: () => {
            if (M.setting.soundEffectEnable) try {
                ee.play("Click")
            } catch (l) {}
        },
        spinCollect: () => {
            if (M.setting.soundEffectEnable) try {
                ee.play("Collect")
            } catch (l) {}
        },
        spinning: () => {
            if (M.setting.soundEffectEnable) try {
                ee.play("SpinAndBonus")
            } catch (l) {}
        }
    };
var ot = A("<span class=text-brand>__amount__"),
    it = A("<span class=text-primary>__bankAmount__ "),
    st = A("<span class=ml-1>"),
    lt = A('<div class="relative z-0 flex gap-x-6"><div class="relative w-16 flex-shrink-0"><div class="absolute left-2/3 top-1/2 flex w-32 flex-shrink-0 -translate-x-1/2 -translate-y-1/2 items-center"><img class=""></div></div><div class="flex flex-col gap-y-2 text-primary"><h3 class="text-base font-extrabold"></h3><p class="text-sm font-semibold text-secondary">');
const Ae = l => {
        l && l.type === 1 && xe({
            amount: L.printCurrency(new B(l.claimAmount), l.currencyName),
            bankAmount: l.bcBankAmount ? L.printCurrency(new B(l.bcBankAmount), l.currencyName) : ""
        })
    },
    xe = l => {
        F(() => (() => {
            var s = lt(),
                r = s.firstChild,
                a = r.firstChild,
                i = a.firstChild,
                f = r.nextSibling,
                p = f.firstChild,
                g = p.nextSibling;
            return y(p, () => b("Bonus Claimed")), y(g, v(ge, {
                i18nKey: "__amount__ has been credited to your balance",
                get amount() {
                    return l.amount
                },
                get children() {
                    return [ot(), " has been credited to your balance"]
                }
            }), null), y(g, v(Y, {
                get when() {
                    return l.bankAmount
                },
                get children() {
                    var m = st();
                    return y(m, v(ge, {
                        i18nKey: "and __bankAmount__ to the __ENV_SITE__ Bank",
                        get bankAmount() {
                            return l.bankAmount
                        },
                        get children() {
                            return ["and ", it(), "to the BC Bank"]
                        }
                    })), m
                }
            }), null), H(() => $(i, "src", E("/bonus/bonus/bc-bank/bonus-coin.png")())), s
        })(), {
            duration: 7
        })
    };
var ut = A('<div class="relative z-20 flex flex-col items-center justify-center text-center"><div class="relative flex size-28 flex-shrink-0 justify-center"><img class="absolute -right-4 top-0 h-12"><img class="absolute left-1 top-4 h-10"><img class=h-full></div><p class="text-3xl font-extrabold text-[#EF9E3F]"></p><p class="pt-4 font-semibold text-secondary"></p><div class="flex w-full gap-x-4 pt-4">');
const Te = l => new Promise(r => {
    const a = () => {
            switch (l.rewardType) {
                case "rakeback":
                    return E("/bonus/bonus/bonuses-page/bonus-rakeback.png")();
                case "recharge":
                    return E("/bonus/bonus/bonuses-page/bonus-recharge.png")();
                case "monthlyBonus":
                    return E("/bonus/bonus/bonuses-page/bonus-monthly.png")();
                case "weeklyBonus":
                    return E("/bonus/bonus/bonuses-page/bonus-weekly.png")();
                default:
                    return ""
            }
        },
        i = () => {
            switch (l.rewardType) {
                case "rakeback":
                    return b("Rakeback");
                case "recharge":
                    return b("Recharge");
                case "monthlyBonus":
                    return b("Monthly Cashback");
                case "weeklyBonus":
                    return b("Weekly Cashback")
            }
        };
    S.push(() => v(Z, {
        style: {
            "background-image": "radial-gradient(61% 78.51% at 50% 32.2%, rgba(238, 177, 36, 0.20) 0%, rgba(238, 177, 36, 0.00) 100%)"
        },
        get title() {
            return i()
        },
        get children() {
            var f = ut(),
                p = f.firstChild,
                g = p.firstChild,
                m = g.nextSibling,
                _ = m.nextSibling,
                T = p.nextSibling,
                e = T.nextSibling,
                t = e.nextSibling;
            return y(T, () => L.printCurrency(new B(l.amount), l.currencyName, {
                target: l.currencyName
            })), y(e, () => b("Claim your bonus as usual — or take a bold leap and DOUBLE it!")), y(t, v(R, {
                type: "second",
                class: "basis-20",
                onClick: () => Promise.resolve(l.onResult({
                    result: "normal",
                    currencyName: l.currencyName,
                    amount: l.amount
                })).then(() => {
                    r({
                        result: "normal",
                        currencyName: l.currencyName,
                        amount: l.amount
                    }), S.pop()
                }),
                get children() {
                    return b("Claim")
                }
            }), null), y(t, v(R, {
                type: "brand",
                class: "flex-grow",
                onClick: () => Promise.resolve(l.onResult({
                    result: "double",
                    currencyName: l.currencyName,
                    amount: l.amount
                })).then(() => {
                    r({
                        result: "double",
                        currencyName: l.currencyName,
                        amount: l.amount
                    }), S.pop()
                }),
                get children() {
                    return b("Double or Nothing")
                }
            }), null), H(n => {
                var o = E("/bonus/bonus/bonuses-page/double-bonus-flag.png")(),
                    c = E("/bonus/bonus/bonuses-page/double-bonus-falg-zero.png")(),
                    d = a();
                return o !== n.e && $(g, "src", n.e = o), c !== n.t && $(m, "src", n.t = c), d !== n.a && $(_, "src", n.a = d), n
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), f
        }
    }), {
        onClose: () => {
            r({
                result: "noop",
                currencyName: l.currencyName,
                amount: l.amount
            })
        }
    })
});
var ct = A("<span class=text-brand>+"),
    dt = A('<div><div class="flex h-56 w-56 items-center justify-center"></div><div class="flex w-64 flex-col gap-y-4"><div class="flex h-12 items-center justify-center rounded-lg bg-layer4 text-lg font-extrabold"></div><div class="flex w-full gap-x-1"></div></div><div class="flex w-full flex-col items-center justify-center gap-y-4 rounded-lg bg-layer2 px-4 py-4 text-sm font-semibold text-secondary"><div class="flex h-10 gap-x-1">'),
    ft = A('<img class="h-10 w-10 object-contain">');
const _t = l => {
    const [s, r] = Le(l, ["reward", "rewardAmount", "rewardCurrency", "shareConfig", "trackId"]), [a, i] = Ge(!1), f = () => {
        const g = b("Successfully shared");
        return new Promise((m, _) => {
            Ee.emit("getPublicChatRoomId", T => q(void 0, null, function*() {
                if (yield S.confirm(() => b("Share your luck to the chat room") + "?")) return Q.post("/activity/lucky/spin/share/", {
                    trackId: s.trackId,
                    roomId: T
                }).then(() => {
                    F.success(g), m(""), i(!0)
                }).catch(_)
            }))
        }).catch(F)
    }, [p] = Ve(() => s.shareConfig, g => Pe(g));
    return (() => {
        var g = dt(),
            m = g.firstChild,
            _ = m.nextSibling,
            T = _.firstChild,
            e = T.nextSibling,
            t = _.nextSibling,
            n = t.firstChild;
        return Fe(g, De(r, {
            style: {
                "background-image": "linear-gradient(147deg, #ffa43b -78%, #191a1b05 30%)"
            },
            get class() {
                return W("flex flex-col items-center justify-center gap-y-6 rounded-lg", r.class)
            }
        }), !1, !0), y(m, v(Y, {
            get when() {
                return s.reward
            },
            children: o => o()
        })), y(T, v(J, {
            get currencyName() {
                return s.rewardCurrency
            },
            get children() {
                return v(J.Content, {
                    get children() {
                        return [v(J.Icon, {}), (() => {
                            var o = ct();
                            return o.firstChild, y(o, v(J.Amount, {
                                get amount() {
                                    return s.rewardAmount
                                }
                            }), null), o
                        })()]
                    }
                })
            }
        })), y(e, v(R, {
            onClick: () => {
                te.spinCollect(), S.pop()
            },
            type: "brand",
            class: "flex-grow",
            get children() {
                return b("Claim Now")
            }
        }), null), y(e, v(R, {
            type: "second",
            class: "w-15",
            onClick: f,
            get disabled() {
                return a()
            },
            get children() {
                return v(le, {
                    name: "Share"
                })
            }
        }), null), y(t, () => b("Share on social media"), n), y(n, v(We, {
            get children() {
                return v(Xe, {
                    get each() {
                        var o;
                        return (o = p()) == null ? void 0 : o.filter(c => c.url).slice(0, 6)
                    },
                    children: o => v(ye, {
                        get href() {
                            return o.url
                        },
                        target: "_blank",
                        rel: "noopener noreferrer",
                        get children() {
                            var c = ft();
                            return H(() => $(c, "src", o.icon)), c
                        }
                    })
                })
            }
        })), g
    })()
};
var pt = A("<div class=-mx-4>"),
    mt = A('<div class="relative h-full w-full items-center justify-center"><img><img class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">');
const ht = l => {
        const s = ie(() => {
                switch (l.spinLevel) {
                    case 0:
                    case 1:
                    case 2:
                        return z.lucky_lottery;
                    case 3:
                    case 4:
                        return z.mega_lottery;
                    case 5:
                        return z.super_lottery
                }
            }),
            r = ie(() => {
                const a = Math.floor(Math.random() * 3);
                return a === 0 ? b("I got free Crypto from __ENV_HOST__ free daily spin! Try your luck now! Free spin to get 5 BTC!") : a === 1 ? b("Wow! I won free crypto from daily free spin at __ENV_HOST__! Try your luck now! Free spin to get 5 BTC!") : b("I got lucky at __ENV_HOST__ free Lucky Spin today! Try your luck now! Free spin to get 5 BTC!")
            });
        return v(Z, {
            type: "center",
            title: null,
            class: "popup-full w-[21rem]",
            close: !1,
            get children() {
                return [v(R, {
                    onClick: () => {
                        S.pop()
                    },
                    class: "absolute right-4 top-3",
                    get children() {
                        return v(le, {
                            class: "size-5",
                            name: "Close"
                        })
                    }
                }), (() => {
                    var a = pt();
                    return y(a, v(_t, {
                        class: "w-full",
                        get shareConfig() {
                            return {
                                title: "Spin",
                                content: r()
                            }
                        },
                        get trackId() {
                            return l.trackId
                        },
                        get rewardAmount() {
                            return l.rewardAmount
                        },
                        get rewardCurrency() {
                            return l.rewardCurrency
                        },
                        get reward() {
                            return (() => {
                                var i = mt(),
                                    f = i.firstChild,
                                    p = f.nextSibling;
                                return H(g => {
                                    var m = z.rewardBg,
                                        _ = s();
                                    return m !== g.e && $(f, "src", g.e = m), _ !== g.t && $(p, "src", g.t = _), g
                                }, {
                                    e: void 0,
                                    t: void 0
                                }), i
                            })()
                        }
                    })), a
                })()]
            }
        })
    },
    gt = "/modules/bonus2/assets/reward@2x-ff647e9e.png";
var vt = A('<img class="absolute -top-32 left-1/2 h-[17rem] -translate-x-1/2">'),
    yt = A('<div class="ml-1 inline-block w-0 opacity-0">'),
    bt = A('<div class="text-3xl font-extrabold text-[#EF9E3F]">'),
    wt = A('<div class="mt-4 text-center font-semibold">🍻 '),
    At = A('<div class="mt-[9rem] flex flex-col justify-center"><div class="flex flex-grow flex-col items-center justify-end gap-y-1"><span class="text-xl font-extrabold text-primary"></span><div class="flex items-center gap-x-1">');
const xt = l => v(Z, {
    type: "center",
    class: "popup-full py-4",
    get title() {
        return b("Recharge")
    },
    get children() {
        return [(() => {
            var s = vt();
            return $(s, "src", gt), s
        })(), (() => {
            var s = At(),
                r = s.firstChild,
                a = r.firstChild,
                i = a.nextSibling;
            return y(a, () => b("Congrats! You got"), null), y(a, v(Y, {
                get when() {
                    return l.doubleBonus
                },
                get children() {
                    var f = yt();
                    return Ne(p => {
                        he.to(p, {
                            delay: 1,
                            duration: 1,
                            opacity: 1,
                            width: "auto",
                            ease: "bounce.out"
                        }), ue(() => {
                            he.killTweensOf(p)
                        })
                    }, f), y(f, () => b("double!")), f
                }
            }), null), y(i, v(ze, {
                class: "!text-center text-3xl font-extrabold text-[#EF9E3F]",
                duration: 1500,
                interval: 1e3,
                get numbers() {
                    return l.amounts
                },
                children: f => L.printCurrency(new B(f), l.currencyName, {
                    target: l.currencyName,
                    hasAlias: !1
                })
            })), y(r, v(Y, {
                get when() {
                    return !l.currencyName.endsWith("FIAT")
                },
                get children() {
                    var f = bt();
                    return y(f, () => L.getAlias(l.currencyName)), f
                }
            }), null), y(s, v(Y, {
                get when() {
                    return l.doubleBonus
                },
                get children() {
                    var f = wt();
                    return f.firstChild, y(f, () => b("Cheers to you courage!"), null), f
                }
            }), null), y(s, v(R, {
                onClick: () => S.pop(),
                class: "mx-4 mt-4",
                type: "brand",
                get children() {
                    return b("Confirm")
                }
            }), null), s
        })()]
    }
});
var Tt = A('<span class="inline-flex bg-clip-text text-3xl font-extrabold uppercase text-transparent">'),
    kt = A('<img class="absolute -top-20 left-0 -z-10">'),
    St = A("<span class=ml-2>"),
    It = A('<div class="flex h-36 flex-col items-center text-center">'),
    $t = A('<div class="flex flex-col items-center justify-center gap-y-3 rounded-lg bg-layer3 p-3 font-semibold text-primary"><p class=text-center></p><img class="h-24 rounded-lg box-reflect"><span class="mt-4 text-secondary"> ');
const ve = l => (() => {
        var s = Tt();
        return s.style.setProperty("background-image", "linear-gradient(0deg, #FFF8B4 11.52%, #FFF 21.05%, #FB0 78.95%)"), y(s, () => l.children), s
    })(),
    Ct = l => v(Z, {
        get class() {
            return W("popup-full")
        },
        type: "center",
        get style() {
            return {
                "background-color": Me.darken ? "rgba(41, 45, 46, 1)" : "rgba(255, 255, 255, 1)"
            }
        },
        get children() {
            return [(() => {
                var s = kt();
                return H(() => $(s, "src", Je.freeSpinRewardBg)), s
            })(), (() => {
                var s = It();
                return y(s, v(ve, {
                    get children() {
                        return [Oe(() => l.amount), (() => {
                            var r = St();
                            return y(r, () => b("Free Spins")), r
                        })()]
                    }
                }), null), y(s, v(ve, {
                    get children() {
                        return b("Claimed")
                    }
                }), null), s
            })(), (() => {
                var s = $t(),
                    r = s.firstChild,
                    a = r.nextSibling,
                    i = a.nextSibling,
                    f = i.firstChild;
                return y(r, () => b("Here are __amount__ Free Spins for your Welcome Bonus.", {
                    amount: l.amount
                })), y(i, () => b("Expires in"), f), y(i, v(et, {
                    get expiresInMS() {
                        return l.expireTime
                    }
                }), null), H(() => $(a, "src", l.gameCover)), s
            })(), v(ye, {
                get href() {
                    return `/game/${l.gameId}?fsId=${l.fsId}&currency=${l.currency}`
                },
                class: "w-full",
                get children() {
                    return v(R, {
                        onClick: () => S.pop(),
                        type: "brand",
                        class: "mt-3 w-full",
                        get children() {
                            return b("Play Now")
                        }
                    })
                }
            })]
        }
    }),
    Bt = "/modules/bonus2/assets/polygon-2a6018e4.png",
    Rt = "/modules/bonus2/assets/star-a954b816.png",
    Ft = "/modules/bonus2/assets/booster-85c06601.png",
    Dt = "/modules/bonus2/assets/Freebets-560dc24a.png",
    Nt = "/modules/bonus2/assets/free-spin-10836e9d.png",
    Ot = "/modules/bonus2/assets/gold-76db1687.png",
    P = {
        polygon: Bt,
        star: Rt,
        booster: Ft,
        freebet: Dt,
        freespin: Nt,
        gold: Ot
    };
var Pt = A('<div class="relative -mx-4 h-100 rounded-xl bg-layer2"><div class="relative flex w-full justify-center overflow-hidden"><img alt=bg class="free-spin-rewards-polygon absolute left-1/2 top-[-140%] size-[600px] max-w-[600px]"><img alt=bg><img alt=star><img alt=star><img alt=star>');

function re(l) {
    const s = ie(() => {
        switch (l.types) {
            case "freespin":
                return {
                    img: P.freespin,
                    img1: "h-56",
                    star1: "left-[20%] top-[45%]",
                    star2: "right-[22%] top-[65%]",
                    star3: "right-[20%] top-[20%]"
                };
            case "freebet":
                return {
                    img: P.freebet,
                    img1: "h-56",
                    star1: "left-[15%] top-[45%]",
                    star2: "right-[20%] top-[65%]",
                    star3: "right-[15%] top-[20%]"
                };
            case "booster":
                return {
                    img: P.booster,
                    img1: "h-56",
                    star1: "left-[20%] top-[45%]",
                    star2: "right-[22%] top-[65%]",
                    star3: "right-[20%] top-[20%]"
                };
            case "gold":
                return {
                    img: l.img,
                    img1: "h-56",
                    star1: "left-[20%] top-[45%]",
                    star2: "right-[22%] top-[65%]",
                    star3: "right-[20%] top-[20%]"
                };
            default:
                return {
                    img: P.gold,
                    img1: "h-56",
                    star1: "left-[20%] top-[45%]",
                    star2: "right-[22%] top-[65%]",
                    star3: "right-[20%] top-[20%]"
                }
        }
    });
    return v(Z, {
        type: "center",
        class: "popup-full",
        get children() {
            var r = Pt(),
                a = r.firstChild,
                i = a.firstChild,
                f = i.nextSibling,
                p = f.nextSibling,
                g = p.nextSibling,
                m = g.nextSibling;
            return r.style.setProperty("background", "radial-gradient(116.81% 83.5% at 46.23% 9.2%, rgba(206, 124, 0, 0.60) 0%, rgba(206, 124, 0, 0.00) 60%), rgb(var(--layer2) / 1)"), y(r, v(R, {
                class: "absolute right-3 top-3 z-10 size-6 rounded bg-white_alpha10 p-0",
                onClick: () => S.pop(),
                get children() {
                    return v(le, {
                        name: "Close",
                        class: "size-4 text-secondary"
                    })
                }
            }), a), g.style.setProperty("animation-delay", "0.2s"), m.style.setProperty("animation-delay", "0.4s"), y(r, () => l.children, null), H(_ => {
                var T = P.polygon,
                    e = s().img,
                    t = W("free-spin-rewards relative z-10", s().img1),
                    n = P.star,
                    o = W("free-spin-rewards-star absolute size-6", s().star1),
                    c = P.star,
                    d = W("free-spin-rewards-star absolute size-6", s().star2),
                    u = P.star,
                    h = W("free-spin-rewards-star absolute size-10", s().star3);
                return T !== _.e && $(i, "src", _.e = T), e !== _.t && $(f, "src", _.t = e), t !== _.a && K(f, _.a = t), n !== _.o && $(p, "src", _.o = n), o !== _.i && K(p, _.i = o), c !== _.n && $(g, "src", _.n = c), d !== _.s && K(g, _.s = d), u !== _.h && $(m, "src", _.h = u), h !== _.r && K(m, _.r = h), _
            }, {
                e: void 0,
                t: void 0,
                a: void 0,
                o: void 0,
                i: void 0,
                n: void 0,
                s: void 0,
                h: void 0,
                r: void 0
            }), r
        }
    })
}
var Et = A('<p class="mt-2 text-center text-lg font-extrabold">'),
    Mt = A('<div class=px-5><div class="center mt-6 flex min-h-12 w-full rounded-lg bg-layer3 text-2xl font-extrabold text-[#FFAD4D]"><span class=mx-1>');

function Ht(l) {
    return v(re, {
        types: "freespin",
        get children() {
            return [(() => {
                var s = Et();
                return y(s, () => b("CONGRATS! YOU’VE GOT")), s
            })(), (() => {
                var s = Mt(),
                    r = s.firstChild,
                    a = r.firstChild;
                return y(a, () => l.title), y(s, v(R, {
                    class: "mt-4 w-full",
                    type: "brand",
                    onClick: () => {
                        S.pop(), C.freeSpin(l.rewardId)
                    },
                    get children() {
                        return b("Claim")
                    }
                }), null), s
            })()]
        }
    })
}
var Lt = A('<p class="absolute -mt-5 w-full text-center text-primary opacity-20">'),
    Gt = A('<p class="mt-2 text-center text-lg font-extrabold">'),
    Vt = A('<div class=px-5><div class="center mt-6 flex min-h-12 w-full rounded-lg bg-layer3 text-2xl font-extrabold text-[#FFAD4D]"><span class=mx-1>');

function Wt(l) {
    return v(re, {
        types: "freebet",
        get children() {
            return [(() => {
                var s = Lt();
                return y(s, () => b("*Validity period: 7 days")), s
            })(), (() => {
                var s = Gt();
                return y(s, () => b("CONGRATS! YOU’VE GOT")), s
            })(), (() => {
                var s = Vt(),
                    r = s.firstChild,
                    a = r.firstChild;
                return y(a, () => l.title), y(s, v(R, {
                    class: "mt-4 w-full",
                    type: "brand",
                    onClick: () => {
                        S.pop()
                    },
                    get children() {
                        return b("ok")
                    }
                }), null), s
            })()]
        }
    })
}
var Xt = A('<p class="-mt-8 text-center text-lg font-extrabold">'),
    qt = A('<div class=px-5><div class="center mt-6 flex min-h-12 w-full flex-col rounded-lg bg-layer3 py-3 text-2xl font-extrabold text-[#FFAD4D]"><span></span><span class=text-primary>');

function jt(l) {
    return v(re, {
        types: "booster",
        get children() {
            return [(() => {
                var s = Xt();
                return y(s, () => b("XP Booster Activated!")), s
            })(), (() => {
                var s = qt(),
                    r = s.firstChild,
                    a = r.firstChild,
                    i = a.nextSibling;
                return y(a, () => l.title), y(i, () => b("60 min")), y(s, v(R, {
                    class: "mt-4 w-full",
                    type: "brand",
                    onClick: () => {
                        S.pop()
                    },
                    get children() {
                        return b("Ok")
                    }
                }), null), s
            })()]
        }
    })
}
var Yt = A('<p class="mt-2 text-center text-lg font-extrabold">'),
    Zt = A('<div class=px-5><div class="center mt-6 flex min-h-12 w-full rounded-lg bg-layer3 text-2xl font-extrabold text-[#FFAD4D]"><span class=mx-1>');

function Qt(l) {
    return v(re, {
        types: "gold",
        get img() {
            return l.img
        },
        get children() {
            return [(() => {
                var s = Yt();
                return y(s, () => b("CONGRATS! YOU’VE GOT")), s
            })(), (() => {
                var s = Zt(),
                    r = s.firstChild,
                    a = r.firstChild;
                return y(a, () => l.title), y(s, v(R, {
                    class: "mt-4 w-full",
                    type: "brand",
                    onClick: () => {
                        S.pop()
                    },
                    get children() {
                        return b("Claim")
                    }
                }), null), s
            })()]
        }
    })
}
const hr = l => S.push(() => v(ht, l)),
    se = l => new Promise(s => {
        S.push(() => v(xt, l), {
            onClose: s
        })
    }),
    Ut = l => {
        S.push(() => v(Ct, l))
    },
    gr = l => {
        S.push(() => v(Qt, l))
    },
    vr = l => {
        S.push(() => v(Ht, l))
    },
    yr = l => {
        S.push(() => v(Wt, l))
    },
    br = l => {
        S.push(() => v(jt, l))
    };
class Kt {
    constructor(s = 1e3) {
        this.timerId = null, this.timers = new Map, this.interval = s
    }
    addTimers(s, r) {
        this.timerId || this.start(), s = Array.isArray(s) ? s : [s], s.forEach(a => {
            this.timers.has(a) || this.timers.set(a, []), this.timers.get(a).push(r)
        })
    }
    start() {
        this.timerId && this.stop(), this.timerId = setInterval(() => {
            const s = Date.now();
            for (const [r, a] of this.timers.entries())
                if (s >= r) {
                    const i = a.length;
                    for (let f = 0; f < i; f++) a.shift()(r);
                    this.cleanTimestampIfNeed(r)
                }
        }, this.interval)
    }
    cleanTimestampIfNeed(s) {
        var r;
        ((r = this.timers.get(s)) == null ? void 0 : r.length) === 0 && (this.timers.delete(s), this.timers.size === 0 && this.stop())
    }
    cleanup(s, r) {
        s = Array.isArray(s) ? s : [s], s.forEach(a => {
            if (this.timers.has(a)) {
                const i = this.timers.get(a);
                this.timers.set(a, i.filter(f => f !== r)), this.cleanTimestampIfNeed(a)
            }
        })
    }
    stop() {
        clearInterval(this.timerId), this.timerId = null
    }
}
let oe = null;
const Jt = () => (oe || (oe = new Kt(2e3)), oe),
    wr = (l, s) => {
        const r = Jt();
        je(() => {
            const a = s,
                i = l();
            r.addTimers(i, a), ue(() => {
                r.cleanup(i, a)
            })
        })
    },
    zt = (l, s) => {
        let r = null,
            a = null;
        const i = () => q(void 0, null, function*() {
            return r || (a = new Promise(f => {
                r = setTimeout(() => {
                    Promise.resolve(l(Date.now())).then(f), r = null, a = null
                }, s)
            })), a
        });
        return qe() && ue(() => {
            r && (clearTimeout(r), r = null, a = null)
        }), i
    };
var er = A('<p class="text-center font-semibold text-secondary">');
const C = (l, s) => x.mutations.receiveReward(ae(X({}, s), {
        rewardId: l
    })).then(r => D(() => {
        x.refetchResource(x.bonusDashboardResource.name)
    }).then(() => r)).then(Ae).catch(F),
    ce = (l, s, r, a) => {
        let i;
        return Te({
            currencyName: r,
            amount: a,
            rewardType: s,
            onResult: f => x.mutations.receiveReward({
                rewardId: l,
                doubleBonus: f.result === "double"
            }).then(p => {
                i = p
            })
        }).then(f => {
            if (f.result !== "noop") return Promise.all([se({
                doubleBonus: f.result === "double",
                amounts: f.result === "double" ? [new B(i.claimAmount).add(i.bcBankAmount).div(2).toNumber(), 0, new B(i.claimAmount).add(i.bcBankAmount).toNumber()] : [0, new B(i.claimAmount).add(i.bcBankAmount).toNumber()],
                currencyName: i.currencyName
            }), D(() => {
                x.refetchResource(x.bonusDashboardResource.name)
            })])
        }).then(() => {
            Ae(i)
        })
    };
C.rakeback = () => {
    const l = Ye();
    if (l().claimable) return l().doubleBonus ? ce(l().rewardId, "rakeback", l().currencyName, Number(l().bonusAmount)) : C(l().rewardId)
};
C.doubleRecharge = l => Ze()().doubleBonus ? Te({
    currencyName: l.currencyName,
    amount: Number(l.amount),
    rewardType: "recharge",
    onResult: a => C.claimRecharge(ae(X({}, l), {
        doubleBonus: a.result === "double"
    }))
}).then(a => {
    if (a.result !== "noop") return se({
        doubleBonus: a.result === "double",
        currencyName: l.currencyName,
        amounts: a.result === "double" ? [new B(l.amount).toNumber(), 0, new B(l.amount).mul(2).toNumber()] : [0, new B(l.amount).toNumber()]
    }), D(() => {
        x.refetchResource(x.bonusDashboardResource.name), O.refetchResource(O.rechargeListResource.name), O.refetchResource(O.rechargeTierResource.name)
    })
}) : C.claimRecharge(X({}, l)).then(() => (se({
    currencyName: l.currencyName,
    amounts: [0, l.amount],
    doubleBonus: !1
}), D(() => {
    x.refetchResource(x.bonusDashboardResource.name), O.refetchResource(O.rechargeListResource.name), O.refetchResource(O.rechargeTierResource.name)
})));
C.doubleMonthlyBonus = l => {
    var r, a, i, f, p, g, m, _;
    const s = Qe();
    if ((r = s().rewardResult) != null && r.rewardId) return (f = (i = (a = s()) == null ? void 0 : a.rewardResult) == null ? void 0 : i.rewards) != null && f[0].doubleBonus ? ce((p = s().rewardResult) == null ? void 0 : p.rewardId, "monthlyBonus", (g = s().rewardResult) == null ? void 0 : g.rewards[0].name, Number((m = s().rewardResult) == null ? void 0 : m.rewards[0].amount)) : C((_ = s().rewardResult) == null ? void 0 : _.rewardId)
};
C.doubleWeeklyBonus = l => {
    var r, a, i, f, p, g, m, _;
    const s = Ue();
    if ((r = s().rewardResult) != null && r.rewardId) return (f = (i = (a = s()) == null ? void 0 : a.rewardResult) == null ? void 0 : i.rewards) != null && f[0].doubleBonus ? ce((p = s().rewardResult) == null ? void 0 : p.rewardId, "weeklyBonus", (g = s().rewardResult) == null ? void 0 : g.rewards[0].name, Number((m = s().rewardResult) == null ? void 0 : m.rewards[0].amount)) : C((_ = s().rewardResult) == null ? void 0 : _.rewardId)
};
C.freeSpin = l => q(void 0, null, function*() {
    return x.mutations.receiveFreeSpin(l).then(s => D(() => {
        x.refetchResource(x.bonusDashboardResource.name)
    }).then(() => {
        te.claim(), Ut({
            amount: s.roundCount,
            gameId: s.gameUnique,
            expireTime: s.expireTime,
            gameCover: s.iconThreeFour,
            fsId: s.fsId,
            currency: M.bonusCurrencyName
        })
    })).catch(F)
});
C.bcBank = () => x.mutations.receiveBcBank().then(l => {
    const s = M.setting.enableLocaleCurrency ? M.setting.localeCurrencyName : "USDFIAT";
    return xe({
        amount: L.printCurrency(l.reduce((r, a) => r.add(L.convertCurrency(new B(a.amount), a.currencyName, s)), tt), s)
    }), D(() => x.refetchResource(x.bonusDashboardResource.name))
}).then(te.claim).catch(F);
C.doubleup = l => Q.post("/activity/cash_back_event/claim/", l).then(() => D(() => x.refetchResource(x.bonusDashboardResource.name))).catch(F);
C.claimRecharge = l => He("login").then(s => O.mutations.claimRecharge({
    currencyName: l.currencyName,
    token: s,
    doubleBonus: l.doubleBonus
}).then(te.claim));
const Ar = (l, s) => () => {
    var r;
    return (r = Ke({
        currencyName: s == null ? void 0 : s.currencyName,
        cancelAmount: s == null ? void 0 : s.cancelAmount,
        amountChangeLogId: l
    })) == null ? void 0 : r.then(a => {
        if (a) return Q.post("/activity/recharge-bonus/cancel-bonus/", {
            amountLogId: l
        }).then(() => D(() => x.refetchResource(x.bonusDashboardResource.name))).catch(F)
    })
};
var tr = (l => (l[l.reject = 1] = "reject", l[l.accept = 2] = "accept", l))(tr || {});
const xr = (l, s) => () => q(void 0, null, function*() {
        if (!(l === 1 && !(yield S.confirm(() => (() => {
                var a = er();
                return y(a, () => b("This event is full of benefits, so if you miss it, you may have to wait for the next time! Want to reconsider? ")), a
            })())))) return Q.post("/activity/cash_back_event/change_status/", {
            eventId: s,
            action: l
        }).then(() => D(() => x.refetchResource(x.bonusDashboardResource.name))).catch(F)
    }),
    Tr = l => () => Q.post("/activity/cash_back_event/claim/", l).then(() => D(() => x.refetchResource(x.bonusDashboardResource.name))).catch(F),
    kr = zt(() => x.refetchResource(x.bonusDashboardResource.name, {
        mutateOnly: !0
    }), 200),
    Sr = l => x.mutations.receiveWeeklyDepositBonus(l).then(() => D(() => {
        x.refetchResource(x.getWeeklyDepositReward.name)
    })).catch(F);
export {
    tr as C, te as S, tt as Z, gr as a, br as b, vr as c, yr as d, kr as e, Tr as f, Sr as g, xr as h, Ar as i, wr as j, Ae as k, hr as p, C as r, xe as t
};