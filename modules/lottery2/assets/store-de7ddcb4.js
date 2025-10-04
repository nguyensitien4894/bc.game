var s = (c, r, a) => new Promise((o, t) => {
    var f = e => {
            try {
                n(a.next(e))
            } catch (i) {
                t(i)
            }
        },
        m = e => {
            try {
                n(a.throw(e))
            } catch (i) {
                t(i)
            }
        },
        n = e => e.done ? o(e.value) : Promise.resolve(e.value).then(f, m);
    n((a = a.apply(c, r)).next())
});
import {
    r as p,
    v as y,
    e as S
} from "./solid-js-26bd2957.js";
import {
    p as d,
    c as C
} from "./store-2ed2b91e.js";
import {
    a as L
} from "./apis-fc5d0f98.js";
import {
    b as u,
    i as l
} from "./manifest-4a9d96af.js";

function v() {
    S(u.login, function() {
        return s(this, null, function*() {
            if (!u.login) return;
            const o = yield L();
            r(d(t => t.favourteLotteries = o))
        })
    }), l.emit("get_device_info", o => {
        r(d(t => {
            t.areaCode = o.areaCode, t.distinctId = o.distinctId
        }))
    });
    const [c, r] = C({
        favourteLotteries: [],
        areaCode: "",
        distinctId: "19583d5a3e621c7-037bf62ad79dac6-1c525636-3686400-19583d5a3e7317c"
    });
    return {
        store: c,
        setStore: r
    }
}
const g = v(),
    x = p(g);

function R() {
    return y(x)
}
export {
    R as u
};