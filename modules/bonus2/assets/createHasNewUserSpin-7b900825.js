var m = (e, i, a) => new Promise((o, r) => {
    var n = t => {
            try {
                s(a.next(t))
            } catch (p) {
                r(p)
            }
        },
        c = t => {
            try {
                s(a.throw(t))
            } catch (p) {
                r(p)
            }
        },
        s = t => t.done ? o(t.value) : Promise.resolve(t.value).then(n, c);
    s((a = a.apply(e, i)).next())
});
import {
    al as d,
    p as S,
    e as g,
    F as u,
    j as l,
    z as h,
    m as b
} from "./manifest-d92afe19.js";
import {
    c as y
} from "./web-46c35164.js";
import {
    g as _,
    b as f,
    c as w
} from "./solid-js-871c99e1.js";
import {
    h as U
} from "./http-696896a0.js";
import {
    b as A
} from "./index-9f4ab8bd.js";
import {
    b as v
} from "./enums-fd45c1cf.js";
import {
    f as C,
    F as E
} from "./feature-gating-8d37864b.js";
const D = () => m(void 0, null, function*() {
        const e = yield d(() =>
            import ("./new-user-spin-78ef8d8e.js"), ["assets/new-user-spin-78ef8d8e.js", "assets/web-46c35164.js", "assets/manifest-d92afe19.js", "assets/router-73d3f837.js", "assets/solid-js-871c99e1.js", "assets/currency-format-c1ee851b.js", "assets/_baseGetTag-c2e287b9.js", "assets/isArray-79a0be9c.js", "assets/index-551dac81.js", "assets/table-101d4254.js", "assets/i18n-fd9a94dd.js", "assets/index-a51223a0.js", "assets/index-82e25fc1.js", "assets/http-696896a0.js", "assets/baseService-102e5148.js", "assets/_baseFor-371c5662.js", "assets/_MapCache-91cc8331.js", "assets/index-abe3d0ff.js", "assets/center-loading-bc0bd385.js", "assets/loadImgs-8184a021.js", "assets/memoize-91f976fa.js", "assets/api-utils-1baf21e5.js", "assets/helpers-ece5dfb8.js", "assets/utils-0702ff35.js", "assets/vip-5eda96e7.js", "assets/index-9f4ab8bd.js", "assets/enums-fd45c1cf.js", "assets/cancel-bonus-b00319b6.js", "assets/noop-cb277961.js", "assets/animate-number-04f5b3b8.js", "assets/last-862de5a8.js", "assets/countdown-91927513.js", "assets/index-feaa71f9.js", "assets/index-a140eea6.js", "assets/empty-placeholder-dad11c15.js", "assets/index-9e8fcb6a.js", "assets/reward-after-login-46916028.js", "assets/_shuffleSelf-92183780.js", "assets/values-ac915b33.js", "assets/_arrayMap-2bcec0e7.js", "assets/feature-gating-8d37864b.js", "assets/tools-398e478b.js"]);
        yield e.preloadAssets();
        const i = e.NewUserSpin;
        return S.push(() => y(i, {}))
    }),
    F = g.initSearchParams.get("spin"),
    N = () => F ? "A" : h.isbcng || b.isIdHost ? "B" : Math.random() > .5 ? "A" : "B",
    [R] = _(() => U.get("/account/device/isRegistered")),
    H = () => {
        const [e, i] = u(f(""), {
            name: "before-user-login-type",
            serialize: s => s,
            deserialize: s => s
        });
        e() || i(N());
        const [a, o] = u(f(!1), {
            name: "user-new-spin-finished"
        }), [r] = A.checkUserClaimedFreeMoney({
            enable: () => l.login
        }), n = w(() => C.isEnabled(E.NEW_USER) ? l.login ? r.loading ? !1 : r() === v.UnClaimed : R() ? !1 : e() === "A" : !1);
        return {
            hasSpin: n,
            autoSpin: () => n() && !a(),
            disabledAutoSpin: () => o(!0)
        }
    };
export {
    H as c, D as p
};